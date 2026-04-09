import type { ExecutionContext, Contribution, DependencyContext } from "@eclipse-docks/core";
import type {
    ChatMessage, ChatHistory, ChatProvider, ToolDefinition, StreamChunk, ToolCall,
    WorkflowExecution, ApiMessage, TokenUsage, ArtifactType, TaskPlan, TaskStep,
    Artifact
} from "./types";

export type StreamStatus = 'starting' | 'streaming' | 'complete' | 'error';
export type CompletionExecutor = (messages: any[], chatConfig: ChatProvider) => Promise<string>;

export interface ChatProviderContribution extends Contribution {
    provider: ChatProvider;
}

export interface StreamingParams {
    model: string;
    messages: ApiMessage[];
    chatConfig: ChatProvider;
    tools?: ToolDefinition[];
    signal?: AbortSignal;
}

export interface CompletionParams {
    model: string;
    messages: ApiMessage[];
    chatConfig: ChatProvider;
    tools?: ToolDefinition[];
}

export interface IProvider {
    name: string;
    canHandle(chatProvider: ChatProvider): boolean;
    stream(params: StreamingParams): AsyncIterable<StreamChunk>;
    complete?(params: CompletionParams): Promise<ChatMessage>;
    getAvailableModels?(chatProvider: ChatProvider): Promise<Array<{ id: string; name: string }>> | Array<{ id: string; name: string }>;
}

export interface PromptEnhancer {
    enhance(prompt: string, context: ExecutionContext): Promise<string>;
    priority?: number;
}

export interface PromptEnhancerContribution extends Contribution {
    enhancer: PromptEnhancer;
    priority?: number;
}

export interface MessageProcessor {
    process(message: ChatMessage, context: ExecutionContext): Promise<ChatMessage>;
    priority?: number;
}

export interface AgentHooks {
    beforeSend?: (messages: ChatMessage[], context: ExecutionContext) => Promise<void>;
    afterReceive?: (message: ChatMessage, context: ExecutionContext) => Promise<void>;
}

export interface AgentToolsConfig {
    enabled: boolean;
    commandFilter?: (command: any, context: ExecutionContext) => boolean;
    smartToolDetection?: boolean;
}

export interface AgentContribution extends Contribution {
    role: string;
    description: string;
    sysPrompt: string | (() => string);
    canHandle?: (context: ExecutionContext) => boolean;
    priority?: number;

    promptEnhancers?: PromptEnhancer[];
    messageProcessors?: MessageProcessor[];
    hooks?: AgentHooks;
    tools?: AgentToolsConfig | (() => AgentToolsConfig | Promise<AgentToolsConfig>);

    // V2 cooperative agent fields (optional, ignored by V1-style workflows)
    produces?: ArtifactType[];
    consumes?: ArtifactType[];
    reviewerFor?: string[];
    maxRevisions?: number;
    isOrchestrator?: boolean;
    idempotent?: boolean;
}

export interface UserAttentionHandler {
    onConfirmation?: (message: string, context: ExecutionContext) => Promise<boolean>;
    onInput?: (prompt: string, defaultValue?: string, context?: ExecutionContext) => Promise<string | null>;
}

export interface ToolApprovalRequest {
    toolCalls: ToolCall[];
    message: string;
}

export interface AgentWorkflowOptions {
    chatContext: ChatHistory;
    chatConfig?: ChatProvider;
    callContext: DependencyContext;
    execution?: WorkflowExecution;
    roles?: string[];
    sharedState?: ExecutionContext;
    onAgentStart?: (role: string) => void;
    onAgentComplete?: (role: string, message: ChatMessage) => void;
    onAgentError?: (role: string, error: Error) => void;
    onToken?: (role: string, token: string) => void;
    onStatus?: (role: string, status: StreamStatus) => void;
    onToolApprovalRequest?: (role: string, request: ToolApprovalRequest) => Promise<boolean>;
    requireToolApproval?: boolean;
    signal?: AbortSignal;
    stream?: boolean;
}

export interface AgentWorkflowResult {
    messages: Map<string, ChatMessage>;
    sharedState: ExecutionContext;
    errors: Map<string, Error>;
}

export interface AIServiceOptions {
    chatContext: ChatHistory;
    chatConfig?: ChatProvider;
    callContext?: DependencyContext;
    stream?: boolean;
    onToken?: (token: string) => void;
    onStatus?: (status: StreamStatus) => void;
    onProgress?: (progress: { received: number; total?: number }) => void;
    signal?: AbortSignal;
    tools?: ToolDefinition[];
}

export interface AIServiceResult {
    message: ChatMessage;
    streamController?: ReadableStreamDefaultController<StreamChunk>;
    tokenUsage?: TokenUsage;
}

// V2 task system interfaces

export interface TaskOptions {
    prompt: string;
    chatContext?: ChatHistory;
    chatConfig?: ChatProvider;
    callContext?: DependencyContext;
    signal?: AbortSignal;
    onStepStart?: (step: TaskStep) => void;
    onStepComplete?: (step: TaskStep, artifact: Artifact) => void;
    onStepError?: (step: TaskStep, error: Error) => void;
    onPlanReady?: (plan: TaskPlan) => void;
}

export interface TaskResult {
    plan: TaskPlan;
    artifacts: Artifact[];
    errors: Map<string, Error>;
}

export type { ApiMessage } from "./types";
