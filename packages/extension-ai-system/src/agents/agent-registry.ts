import { contributionRegistry } from "@eclipse-lyra/core";
import type { ExecutionContext } from "@eclipse-lyra/core";
import type { AgentContribution } from "../core/interfaces";
import { CID_AGENTS } from "../core/constants";

export class AgentRegistry {
    getAgentContributions(): AgentContribution[] {
        return contributionRegistry.getContributions(CID_AGENTS) as AgentContribution[];
    }

    private filterAndSortAgents(contributions: AgentContribution[], context: ExecutionContext): AgentContribution[] {
        return contributions
            .filter(c => !c.canHandle || c.canHandle(context))
            .sort((a, b) => (b.priority || 0) - (a.priority || 0));
    }

    getMatchingAgents(context: ExecutionContext, roles?: string[]): AgentContribution[] {
        const contributions = this.getAgentContributions();

        if (contributions.length === 0) {
            throw new Error('No agents are registered. The App Support agent should be available from the AI system extension.');
        }

        const roleFiltered = roles?.length
            ? contributions.filter(c => roles.includes(c.role))
            : contributions;

        const active = this.filterAndSortAgents(roleFiltered, context);

        if (roles?.length && active.length === 0) {
            throw new Error(`No agents found for requested roles: ${roles.join(', ')}. Available: ${contributions.map(c => c.role).join(', ')}`);
        }

        if (!roles?.length && active.length === 0) {
            throw new Error(`No agents can handle the current context. Available: ${contributions.map(c => c.role).join(', ')}`);
        }

        return active;
    }
}
