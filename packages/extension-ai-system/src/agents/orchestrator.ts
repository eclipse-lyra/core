import type { ExecutionContext } from "@eclipse-lyra/core";
import type { TaskPlan, ChatProvider } from "../core/types";
import type { AgentContribution, CompletionExecutor } from "../core/interfaces";
import { createTaskPlan } from "../task/task-plan";
import { DEFAULT_AGENT_ROLE } from "../core/constants";

const ORCHESTRATOR_SYS_PROMPT = `You are a task orchestrator. Given a user's complex request, decompose it into a structured execution plan.

Respond with ONLY a JSON object matching this schema (no markdown, no explanation):
{
  "steps": [
    {
      "id": "step-1",
      "role": "<agent role>",
      "subTask": "<specific instruction for this step>",
      "dependsOn": [],
      "consumes": [],
      "produces": ["<artifact-id>"]
    }
  ]
}

Rules:
- Each step must have a unique id (step-1, step-2, ...)
- "role" must match an available agent role
- "dependsOn" lists step IDs that must complete before this step
- "consumes" and "produces" are artifact IDs
- Steps with no dependencies can run in parallel
- Keep the plan minimal — only as many steps as needed`;

export interface OrchestratorOptions {
    prompt: string;
    availableAgents: AgentContribution[];
    chatConfig: ChatProvider;
    context: ExecutionContext;
    executeCompletion: CompletionExecutor;
}

export async function orchestrateTask(options: OrchestratorOptions): Promise<TaskPlan> {
    const agentList = options.availableAgents
        .filter(a => !a.isOrchestrator)
        .map(a => `- ${a.role}: ${a.description}`)
        .join('\n');

    const messages = [
        { role: 'system', content: `${ORCHESTRATOR_SYS_PROMPT}\n\nAvailable agents:\n${agentList}` },
        { role: 'user', content: options.prompt }
    ];

    const responseText = await options.executeCompletion(messages, options.chatConfig);

    try {
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('No JSON found in orchestrator response');

        const parsed = JSON.parse(jsonMatch[0]);
        return createTaskPlan(options.prompt, parsed.steps || []);
    } catch (error) {
        // Fallback: single-step plan using the best matching agent
        const defaultAgent = options.availableAgents.find(a => !a.isOrchestrator);
        return createTaskPlan(options.prompt, [{
            id: 'step-1',
            role: defaultAgent?.role || DEFAULT_AGENT_ROLE,
            subTask: options.prompt,
            dependsOn: [],
            consumes: [],
            produces: ['step-1-result']
        }]);
    }
}
