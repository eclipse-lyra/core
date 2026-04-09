import type { Command, ExecutionContext } from "@eclipse-docks/core";
import { commandRegistry } from "@eclipse-docks/core";
import type { ToolCall, ToolResult } from "../core/types";
import { ToolCallAccumulator } from "./tool-call-accumulator";
import { sanitizeFunctionName } from "./tool-name-utils";

export class ToolExecutor {
    findCommand(toolCall: ToolCall, context: ExecutionContext): Command | null {
        const sanitizedName = toolCall.function.name;
        const direct = commandRegistry.getCommand(sanitizedName);
        if (direct) return direct;

        const allCommands = commandRegistry.listCommands();
        for (const [commandId, command] of Object.entries(allCommands)) {
            if (sanitizeFunctionName(commandId) === sanitizedName) {
                return command;
            }
        }
        return null;
    }

    private parseArguments(argsStr: string): Record<string, any> {
        if (!argsStr?.trim() || argsStr === "{}") return {};
        try {
            const parsed = JSON.parse(argsStr);
            return parsed && typeof parsed === 'object' ? parsed : {};
        } catch {
            return {};
        }
    }

    private sanitizeArguments(args: Record<string, any>, command: Command | null): Record<string, any> {
        if (!command?.parameters || !args || typeof args !== 'object') return args || {};

        const sanitizedArgs: Record<string, any> = {};
        command.parameters.forEach(param => {
            const sanitizedParamName = sanitizeFunctionName(param.name);
            if (sanitizedParamName in args) {
                sanitizedArgs[param.name] = args[sanitizedParamName];
            }
        });
        return sanitizedArgs;
    }

    async executeToolCall(toolCall: ToolCall, context: ExecutionContext): Promise<ToolResult> {
        try {
            const command = this.findCommand(toolCall, context);
            const commandId = command?.id || toolCall.function.name;
            const args = this.parseArguments(toolCall.function.arguments || "{}");
            const sanitizedArgs = this.sanitizeArguments(args, command);

            const freshContext = commandRegistry.createExecutionContext(sanitizedArgs);
            const execContext: ExecutionContext = { ...context, ...freshContext, params: sanitizedArgs };

            const commandResult = await commandRegistry.execute(commandId, execContext);
            const commandName = command?.name || commandId;

            const resultMessage: any = {
                success: true,
                message: `Command "${commandName}" executed successfully`,
                command: commandId
            };

            if (Object.keys(sanitizedArgs).length > 0) {
                resultMessage.parameters = sanitizedArgs;
            }

            if (commandResult != null) {
                let resolved = commandResult;
                if (resolved instanceof Promise) resolved = await resolved;
                resultMessage.result = resolved;

                if (command?.output?.length) {
                    resultMessage.output = command.output.map(v => `${v.name}: ${v.description || v.type || 'value'}`).join(', ');
                }
            }

            return { id: toolCall.id, result: resultMessage };
        } catch (error) {
            let command: Command | null = null;
            try { command = this.findCommand(toolCall, context); } catch { /* noop */ }

            const errorMessage = error instanceof Error ? error.message : String(error);
            const commandName = command?.name || toolCall.function.name;

            let detailedError = errorMessage;
            if (errorMessage.includes('No handler found') || errorMessage.includes('No handlers registered')) {
                detailedError = `Command "${commandName}" cannot be executed. ${errorMessage}.`;
            }

            return { id: toolCall.id, result: null, error: detailedError };
        }
    }

    async executeToolCalls(toolCalls: ToolCall[], context: ExecutionContext): Promise<ToolResult[]> {
        const results: ToolResult[] = [];
        for (const toolCall of toolCalls) {
            results.push(await this.executeToolCall(toolCall, context));
        }
        return results;
    }

    createToolCallAccumulator(): ToolCallAccumulator {
        return new ToolCallAccumulator();
    }

    createToolCallSignature(toolCall: ToolCall): string {
        let args: any = {};
        try {
            const parsed = JSON.parse(toolCall.function.arguments || "{}");
            args = parsed && typeof parsed === 'object' ? parsed : {};
        } catch {
            args = {};
        }
        const sortedArgs = Object.keys(args).sort().reduce((acc: any, key) => { acc[key] = args[key]; return acc; }, {});
        return `${toolCall.function.name}:${JSON.stringify(sortedArgs)}`;
    }
}
