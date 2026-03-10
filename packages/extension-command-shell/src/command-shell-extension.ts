import { html } from "lit";
import { contributionRegistry, PANEL_BOTTOM, SYSTEM_LANGUAGE_BUNDLES } from "@eclipse-lyra/core";
import { i18nLazy } from "@eclipse-lyra/core";
import commandshellBundle from "./commandshell.json";
import "./command-shell";

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, commandshellBundle as any);

contributionRegistry.registerContribution(PANEL_BOTTOM, {
  name: "command-shell",
  label: "Command Shell",
  icon: "terminal",
  component: (id: string) => html`<lyra-command-shell id="${id}"></lyra-command-shell>`,
});
