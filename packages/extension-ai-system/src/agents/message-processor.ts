import type { ExecutionContext } from "@eclipse-lyra/core";
import type { ChatMessage } from "../core/types";
import type { MessageProcessor as IMessageProcessor, AgentContribution } from "../core/interfaces";

export class MessageProcessorService {
    private processors: IMessageProcessor[] = [];

    addProcessor(processor: IMessageProcessor): void {
        this.processors.push(processor);
    }

    async process(
        message: ChatMessage,
        contribution: AgentContribution,
        context: ExecutionContext
    ): Promise<ChatMessage> {
        const allProcessors = [
            ...(contribution.messageProcessors || []),
            ...this.processors
        ].sort((a, b) => (b.priority || 0) - (a.priority || 0));

        let processed = { ...message };
        for (const processor of allProcessors) {
            processed = await processor.process(processed, context);
        }
        return processed;
    }
}
