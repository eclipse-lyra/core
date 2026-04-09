import {
  commandRegistry,
  subscribe,
  unsubscribe,
  TOPIC_COMMAND_REGISTERED,
} from "@eclipse-docks/core";
import { ToolRegistry, type ToolDefinition } from "@eclipse-docks/extension-ai-system/api";
import type { Command } from "@eclipse-docks/core";

export class WebMCPService {
  private readonly toolRegistry = new ToolRegistry();
  private readonly registeredNames = new Set<string>();
  private readonly registeredIds = new Set<string>();
  private commandSubscriptionToken: ReturnType<typeof subscribe> | null = null;

  async start(): Promise<void> {
    const initialCommands = Object.values(commandRegistry.listCommands()) as Command[];
    for (const command of initialCommands) {
      this.registerCommand(command);
    }

    this.commandSubscriptionToken = subscribe(TOPIC_COMMAND_REGISTERED, (command: Command) => {
      this.registerCommand(command);
    });
  }

  stop(): void {
    if (this.commandSubscriptionToken !== null) {
      unsubscribe(this.commandSubscriptionToken);
      this.commandSubscriptionToken = null;
    }
    const modelContext = navigator.modelContext;
    if (modelContext) {
      this.registeredNames.forEach((name) => modelContext.unregisterTool(name));
    }
    this.registeredNames.clear();
    this.registeredIds.clear();
  }

  private toolDefToInputSchema(
    params: ToolDefinition["function"]["parameters"]
  ): { type: "object"; properties?: Record<string, unknown>; required?: string[] } {
    return {
      type: "object",
      properties: params.properties,
      required: params.required,
    };
  }

  private textContent(
    text: string
  ): { content: Array<{ type: "text"; text: string }> } {
    return { content: [{ type: "text", text }] };
  }

  private registerCommand(command: Command): void {
    if (this.registeredIds.has(command.id)) return;
    const modelContext = navigator.modelContext;
    if (!modelContext) return;

    const schemaContext = commandRegistry.createExecutionContext?.() ?? {};
    const toolDef = this.toolRegistry.commandToTool(command, schemaContext) as ToolDefinition;
    const commandId = command.id;
    const toolName = toolDef.function.name;
    const toTextContent = (t: string) => this.textContent(t);

    modelContext.registerTool({
      name: toolName,
      description: toolDef.function.description,
      inputSchema: this.toolDefToInputSchema(toolDef.function.parameters),
      async execute(args: Record<string, unknown>) {
        try {
          const execContext =
            commandRegistry.createExecutionContext?.(args as Record<string, unknown>) ?? {
              params: args ?? {},
            };
          const result = await commandRegistry.execute(commandId, execContext);
          const text =
            result === undefined || result === null
              ? "Done"
              : typeof result === "object"
                ? JSON.stringify(result)
                : String(result);
          return toTextContent(text);
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          return toTextContent(`Error: ${message}`);
        }
      },
    });
    this.registeredNames.add(toolName);
    this.registeredIds.add(command.id);
  }
}
