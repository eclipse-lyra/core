import { commandRegistry, type CommandRegistry, type Command } from "@eclipse-docks/core";
import { parseShellLine } from "./shell-parser";

export interface RunResult {
  success: boolean;
  results: unknown[];
  error?: string;
}

function mapOutputToParams(
  output: unknown,
  producerCommand: Command | undefined
): Record<string, unknown> {
  if (output == null) return {};
  if (typeof output === "object" && !Array.isArray(output)) {
    return output as Record<string, unknown>;
  }
  const firstOutput = producerCommand?.output?.[0];
  if (firstOutput) {
    return { [firstOutput.name]: output };
  }
  return {};
}

export async function runShellLine(
  line: string,
  registry: CommandRegistry = commandRegistry
): Promise<RunResult> {
  const segments = parseShellLine(line, registry);
  const results: unknown[] = [];
  let pipedOutput: Record<string, unknown> | null = null;
  let lastProducerCommand: Command | undefined;

  for (let i = 0; i < segments.length; i++) {
    const { command, operator } = segments[i];
    if (!command.commandId) continue;

    const cmd = registry.hasCommand(command.commandId)
      ? registry.getCommand(command.commandId)
      : undefined;
    if (!cmd) {
      return {
        success: false,
        results,
        error: `Command not found: ${command.commandId}`,
      };
    }

    const mergedParams = {
      ...mapOutputToParams(pipedOutput ?? undefined, lastProducerCommand),
      ...command.params,
    };

    const context = registry.createExecutionContext(mergedParams);

    try {
      const result = registry.execute(command.commandId, context);
      const resolved = result instanceof Promise ? await result : result;
      results.push(resolved);

      if (operator === "|") {
        pipedOutput = mapOutputToParams(resolved, cmd) as Record<string, unknown>;
        lastProducerCommand = cmd;
      } else {
        pipedOutput = null;
        lastProducerCommand = undefined;
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        results,
        error: msg,
      };
    }
  }

  return { success: true, results };
}
