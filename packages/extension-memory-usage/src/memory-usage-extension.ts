import {contributionRegistry, HTMLContribution} from "@eclipse-docks/core";
import {TOOLBAR_BOTTOM} from "@eclipse-docks/core";
import "./memory-usage";

contributionRegistry.registerContribution(TOOLBAR_BOTTOM, {
    target: TOOLBAR_BOTTOM,
    label: "Memory",
    component: `<docks-memory-usage></docks-memory-usage>`
} as HTMLContribution)

