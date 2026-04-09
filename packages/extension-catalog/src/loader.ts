import { html } from "@eclipse-docks/core/externals/lit";
import { contributionRegistry, SIDEBAR_MAIN } from "@eclipse-docks/core";
import "./docks-catalog";

contributionRegistry.registerContribution(SIDEBAR_MAIN, {
    name: "catalog",
    label: "Catalog",
    icon: "book",
    component: (id: string) => html`<docks-catalog id="${id}"></docks-catalog>`,
} as any);
