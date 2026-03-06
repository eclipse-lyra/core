import { createLogger } from '@eclipse-lyra/core';
import { MLTask, MLModel, getModelForTask } from './ml-models';
import MLWorker from './ml-worker?worker';

const logger = createLogger('InBrowserMLService');

type RunResolver = { resolve: (value: unknown) => void; reject: (reason: unknown) => void };

/**
 * Service for in-browser machine learning tasks using transformers.js in a Web Worker.
 * Keeps pipeline loading and inference off the main thread so the UI does not freeze.
 */
export class InBrowserMLService {
    private static instance: InBrowserMLService;
    private worker: Worker | null = null;
    private pendingLoad: Map<string, Promise<void>> = new Map();
    private runRequestId = 0;
    private runPending: Map<number, RunResolver> = new Map();

    private constructor() {}

    static getInstance(): InBrowserMLService {
        if (!InBrowserMLService.instance) {
            InBrowserMLService.instance = new InBrowserMLService();
        }
        return InBrowserMLService.instance;
    }

    private getWorker(): Worker {
        if (this.worker) return this.worker;
        this.worker = new MLWorker();
        this.worker.onmessage = (e: MessageEvent) => {
            const { type, requestId, result, error } = e.data ?? {};
            if (type === 'runResult') {
                const resolver = requestId != null ? this.runPending.get(requestId) : undefined;
                if (resolver) {
                    this.runPending.delete(requestId);
                    if (error != null) resolver.reject(new Error(error));
                    else resolver.resolve(result);
                }
            }
        };
        this.worker.onerror = (err) => logger.error(`ML worker error: ${err.message ?? String(err)}`);
        return this.worker;
    }

    /**
     * Set Hugging Face token for authenticated model access (forwarded to worker).
     */
    setAuthToken(token: string | null): void {
        try {
            this.getWorker().postMessage({ type: 'setAuthToken', token });
            if (token?.trim()) logger.info('Hugging Face token set for authenticated model access');
        } catch (e) {
            logger.warn(`Failed to set auth token: ${e instanceof Error ? e.message : String(e)}`);
        }
    }

    private ensurePipelineLoaded(pipelineKey: string, task: string, model: string, options: Record<string, unknown>): Promise<void> {
        let p = this.pendingLoad.get(pipelineKey);
        if (p) return p;
        p = new Promise((resolve, reject) => {
            const handler = (e: MessageEvent) => {
                const data = e.data ?? {};
                if (data.type !== 'loadResult' || data.pipelineKey !== pipelineKey) return;
                this.getWorker().removeEventListener('message', handler);
                this.pendingLoad.delete(pipelineKey);
                if (data.error) reject(new Error(data.error));
                else resolve();
            };
            this.getWorker().addEventListener('message', handler);
            this.getWorker().postMessage({ type: 'load', pipelineKey, task, model, options });
        });
        this.pendingLoad.set(pipelineKey, p);
        return p;
    }

    /**
     * Get a callable pipeline for a specific task and model. Pipeline runs in a Web Worker.
     */
    async getPipeline(
        task: MLTask | string,
        modelName: MLModel | string,
        options: Record<string, unknown> = {}
    ): Promise<(input: unknown, runOptions?: Record<string, unknown>) => Promise<unknown>> {
        const model = modelName || (typeof task !== 'string' ? getModelForTask(task as MLTask) : undefined);
        if (!model) throw new Error('Model is required');
        const taskStr = typeof task === 'string' ? task : task;
        const modelStr = typeof model === 'string' ? model : model;
        const pipelineKey = `${taskStr}:${modelStr}`;

        const loadOptions: Record<string, unknown> = { quantized: true, ...options };
        if (options.device === "webgpu" && !('gpu' in navigator)) {
            loadOptions.device = undefined;
        }
        await this.ensurePipelineLoaded(pipelineKey, taskStr, modelStr, loadOptions);

        return (input: unknown, runOptions?: Record<string, unknown>) => {
            const requestId = ++this.runRequestId;
            return new Promise<unknown>((resolve, reject) => {
                this.runPending.set(requestId, { resolve, reject });
                this.getWorker().postMessage({ type: 'run', requestId, pipelineKey, input, options: runOptions });
            });
        };
    }

    clearPipeline(task: MLTask | string, modelName: MLModel | string): void {
        const taskStr = typeof task === 'string' ? task : task;
        const modelStr = typeof modelName === 'string' ? modelName : modelName;
        const pipelineKey = `${taskStr}:${modelStr}`;
        this.pendingLoad.delete(pipelineKey);
        this.getWorker().postMessage({ type: 'clear', pipelineKey });
    }

    clearAllPipelines(): void {
        this.pendingLoad.clear();
        if (this.worker) this.worker.postMessage({ type: 'clearAll' });
    }
}

export const inBrowserMLService = InBrowserMLService.getInstance();
