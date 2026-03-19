import { Signal } from "@lit-labs/signals";
import { TemplateResult } from "lit";
import { publish } from "./events";
import { rootContext } from "./di";
import { contributionTargetMappingRegistry } from "./contribution-mapping";

export const TOPIC_CONTRIBUTEIONS_CHANGED = "events/contributionregistry/contributionsChanged"

export interface ContributionChangeEvent {
    target: string;
    contributions: Contribution[];
}

export interface Contribution {
    /** Optional globally unique, namespaced contribution name (e.g. "view.filebrowser"). */
    name?: string;
    target?: string;
    label: string;
    icon?: string;
    slot?: string;
}

export interface CommandContribution extends Contribution {
    command: string;
    params?: Record<string, any>;
    showLabel?: boolean;
    disabled?: (() => boolean) | Signal.Computed<boolean>;
}

export interface HTMLContribution extends Contribution {
    component: string | (() => TemplateResult)
}

export interface TabContribution extends Contribution {
    name: string;
    /**
     * Stable editor-type identifier used for contribution targets (for example `toolbar:${editorId}`).
     * Needed because `name` is often tab-instance specific (such as file/path based) and would
     * fragment toolbar contributions across many dynamic targets.
     */
    editorId?: string;
    closable?: boolean;
    noOverflow?: boolean;
    /** When true or omitted, a lyra-toolbar is rendered for this tab; when false, no toolbar is shown. */
    toolbar?: boolean;
    /** When true or omitted, a contextmenu is rendered for this tab; when false, no context menu is shown. */
    contextMenu?: boolean;
    component?: (id: string) => TemplateResult;
}

export interface IconContribution extends Contribution {
    mappings: Record<string, string>;
    priority?: number;
}

export interface LayoutContribution extends Contribution {
    id: string;
    name: string;
    /** Optional icon name (e.g. Font Awesome) for the layout switcher. */
    icon?: string;
    component: string | { tag: string; attributes?: Record<string, string> } | (() => TemplateResult);
    onShow?: () => void | Promise<void>;
}

class ContributionRegistry {
    private contributions: Map<string, Contribution[]> = new Map();

    registerContribution<T extends Contribution>(target: string, contribution: T) {
        const targetSlot = this.getOrCreateSlot(target);
        if ("command" in contribution) {
            const cmd = contribution as unknown as CommandContribution
            if (cmd.disabled instanceof Function) {
                cmd.disabled = new Signal.Computed<boolean>(cmd.disabled)
            }
        }
        targetSlot.push(contribution);
        publish(TOPIC_CONTRIBUTEIONS_CHANGED, { target, contributions: targetSlot } as ContributionChangeEvent);

        const effectiveTargets = contributionTargetMappingRegistry.getEffectiveTargets(target, contribution);
        for (const effectiveTarget of effectiveTargets) {
            if (effectiveTarget === target) continue;
            const contributionsForSlot = this.getContributions(effectiveTarget);
            publish(TOPIC_CONTRIBUTEIONS_CHANGED, { target: effectiveTarget, contributions: contributionsForSlot } as ContributionChangeEvent);
        }
    }

    /**
     * Returns all contributions whose *effective* targets include the given slot.
     *
     * Note: This currently scans all registered contributions and resolves
     * remaps on each call (O(N) in number of contributions). This is acceptable
     * for typical Lyra apps (dozens/hundreds of contributions and few slots),
     * but if contribution counts grow significantly we may want to introduce a
     * cached index of effective targets per slot to keep lookups O(1).
     */
    getContributions<T extends Contribution>(target: string): T[] {
        const results: T[] = [];
        for (const [originalTarget, list] of this.contributions.entries()) {
            const typedList = list as T[];
            for (const contribution of typedList) {
                const effectiveTargets = contributionTargetMappingRegistry.getEffectiveTargets(originalTarget, contribution);
                if (effectiveTargets.includes(target)) {
                    results.push(contribution);
                }
            }
        }
        if (results.length === 0) {
            this.getOrCreateSlot(target);
        }
        return results;
    }

    private getOrCreateSlot(target: string): Contribution[] {
        if (!this.contributions.has(target)) {
            this.contributions.set(target, []);
        }
        return this.contributions.get(target)!;
    }
}

export const contributionRegistry = new ContributionRegistry()
rootContext.put("contributionRegistry", contributionRegistry)