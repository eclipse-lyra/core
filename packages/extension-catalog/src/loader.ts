import { html } from "@eclipse-lyra/core/externals/lit";
import { contributionRegistry, SIDEBAR_MAIN } from "@eclipse-lyra/core/api";
import "./lyra-catalog";

contributionRegistry.registerContribution(SIDEBAR_MAIN, {
    name: "catalog",
    label: "Catalog",
    icon: "book",
    component: (id: string) => html`<lyra-catalog id="${id}"></lyra-catalog>`,
} as any);
