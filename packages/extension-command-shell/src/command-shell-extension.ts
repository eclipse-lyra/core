import { html } from "lit";
import { contributionRegistry, PANEL_BOTTOM } from "@eclipse-docks/core";
import "./command-shell";

contributionRegistry.registerContribution(PANEL_BOTTOM, {
  name: "command-shell",
  label: "Command Shell",
  icon: "terminal",
  component: (id: string) => html`<docks-command-shell id="${id}"></docks-command-shell>`,
});
