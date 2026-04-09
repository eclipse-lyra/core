import type { ExecutionContext } from "@eclipse-docks/core";
import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";
import type { ChatMessage, ChatProvider } from "../core/types";

export type AgentExecutor = (
    contrib: AgentContribution,
    messages: ChatMessage[],
    sharedState: ExecutionContext,
    chatConfig: ChatProvider,
    options: AgentWorkflowOptions,
    results: AgentWorkflowResult
) => Promise<ChatMessage | null>;

export interface IWorkflowStrategy {
    execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult,
        executeAgent: AgentExecutor
    ): Promise<void>;
}
