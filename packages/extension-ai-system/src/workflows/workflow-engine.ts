import { publish } from "@eclipse-docks/core";
import type { AgentWorkflowOptions, AgentWorkflowResult, AgentContribution } from "../core/interfaces";
import type { ChatMessage } from "../core/types";
import { TOPIC_AGENT_WORKFLOW_STARTED, TOPIC_AGENT_WORKFLOW_COMPLETE, TOPIC_AGENT_WORKFLOW_ERROR } from "../core/constants";
import { ParallelWorkflowStrategy } from "./parallel-workflow";
import { SequentialWorkflowStrategy } from "./sequential-workflow";
import { ConditionalWorkflowStrategy } from "./conditional-workflow";
import { PipelineWorkflowStrategy } from "./pipeline-workflow";
import { OrchestratedWorkflowStrategy } from "./orchestrated-workflow";
import { ReviewWorkflowStrategy } from "./review-workflow";
import type { IWorkflowStrategy, AgentExecutor } from "./workflow-strategy";

export class WorkflowEngine {
    private strategies = new Map<string, IWorkflowStrategy>([
        ['parallel', new ParallelWorkflowStrategy()],
        ['sequential', new SequentialWorkflowStrategy()],
        ['conditional', new ConditionalWorkflowStrategy()],
        ['pipeline', new PipelineWorkflowStrategy()],
        ['orchestrated', new OrchestratedWorkflowStrategy()],
        ['review', new ReviewWorkflowStrategy()]
    ]);

    registerStrategy(name: string, strategy: IWorkflowStrategy): void {
        this.strategies.set(name, strategy);
    }

    async execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        executeAgent: AgentExecutor
    ): Promise<AgentWorkflowResult> {
        const workflowId = `workflow-${Date.now()}-${Math.random()}`;
        const execution = options.execution || 'parallel';
        const results: AgentWorkflowResult = {
            messages: new Map<string, ChatMessage>(),
            sharedState: { ...(options.sharedState || {}) },
            errors: new Map<string, Error>()
        };

        publish(TOPIC_AGENT_WORKFLOW_STARTED, { workflowId, options });

        try {
            const strategy = this.strategies.get(execution);
            if (!strategy) throw new Error(`Unknown workflow execution strategy: ${execution}`);

            await strategy.execute(contributions, options, results, executeAgent);
            publish(TOPIC_AGENT_WORKFLOW_COMPLETE, { workflowId, results });
            return results;
        } catch (error) {
            const err = error instanceof Error ? error : new Error(String(error));
            publish(TOPIC_AGENT_WORKFLOW_ERROR, { workflowId, error: err });
            throw err;
        }
    }
}
