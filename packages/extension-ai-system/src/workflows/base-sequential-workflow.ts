import type { ExecutionContext } from "@eclipse-lyra/core";
import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";
import type { ChatMessage } from "../core/types";
import type { IWorkflowStrategy, AgentExecutor } from "./workflow-strategy";

export abstract class BaseSequentialWorkflow implements IWorkflowStrategy {
    abstract execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult,
        executeAgent: AgentExecutor
    ): Promise<void>;

    protected createAgentContextWithPreviousAgents(
        accumulatedState: ExecutionContext,
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult
    ): ExecutionContext {
        return {
            ...accumulatedState,
            ...options.callContext.getProxy(),
            previousAgents: Array.from(results.messages.entries()).map(([role, msg]) => ({
                role,
                content: msg.content
            }))
        };
    }

    protected updateWorkflowState(
        finalMessage: ChatMessage,
        currentMessages: ChatMessage[],
        accumulatedState: ExecutionContext,
        agentContext: ExecutionContext,
        results: AgentWorkflowResult
    ): { currentMessages: ChatMessage[]; accumulatedState: ExecutionContext } {
        currentMessages.push(finalMessage);
        accumulatedState = { ...accumulatedState, ...agentContext, message: finalMessage };
        results.sharedState = accumulatedState;
        return { currentMessages, accumulatedState };
    }
}
