import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";
import type { ChatMessage, Artifact } from "../core/types";
import type { ExecutionContext } from "@eclipse-docks/core";
import type { IWorkflowStrategy, AgentExecutor } from "./workflow-strategy";
import { orchestrateTask } from "../agents/orchestrator";
import { TaskWorkspace } from "../workspace/workspace";
import { TaskRunner } from "../task/task-runner";
import { streamToText } from "../providers/provider-utils";
import { ProviderFactory } from "../providers/provider-factory";

/**
 * Orchestrated workflow: uses an orchestrator agent to decompose the prompt into
 * a TaskPlan and then executes it step by step via TaskRunner.
 */
export class OrchestratedWorkflowStrategy implements IWorkflowStrategy {
    async execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult,
        executeAgent: AgentExecutor
    ): Promise<void> {
        const chatConfig = options.chatConfig;
        if (!chatConfig) throw new Error("Chat config is required");

        const prompt = options.chatContext.history[options.chatContext.history.length - 1]?.content || '';

        const providerFactory = new ProviderFactory();
        const plan = await orchestrateTask({
            prompt,
            availableAgents: contributions,
            chatConfig,
            context: options.callContext.getProxy() as ExecutionContext,
            executeCompletion: (messages, cfg) => streamToText(messages, cfg, providerFactory)
        });

        const workspace = new TaskWorkspace(`wf-${Date.now()}`, plan);
        const byRole = new Map(contributions.map(c => [c.role, c]));

        const runner = new TaskRunner(async (step, ws, _opts) => {
            const contrib = byRole.get(step.role) || contributions[0];
            const stepMessages: ChatMessage[] = [
                ...options.chatContext.history,
                { role: 'user', content: step.subTask }
            ];

            const finalMessage = await executeAgent(contrib, stepMessages, results.sharedState, chatConfig, options, results);
            const content = finalMessage?.content || '';

            const artifact: Artifact = {
                id: step.produces[0] || `${step.id}-result`,
                type: 'text',
                content,
                producedBy: step.role,
                createdAt: Date.now()
            };
            return artifact;
        });

        const taskResult = await runner.run(workspace, {
            prompt,
            chatConfig,
            callContext: options.callContext,
            signal: options.signal
        });

        const combined = taskResult.artifacts.map(a => a.content).filter(Boolean).join('\n\n');
        if (combined) {
            results.messages.set('orchestrator', { role: 'assistant', content: combined });
        }
    }
}
