import { html } from "lit";
import { contributionRegistry, type HTMLContribution } from "../core/contributionregistry";
import {
    PANEL_BOTTOM,
    SIDEBAR_MAIN,
    TOOLBAR_BOTTOM_END,
    TOOLBAR_MAIN_RIGHT
} from "../core/constants";
import {
    VIEW_FILEBROWSER,
    VIEW_LOG_TERMINAL,
    TOOLBAR_APP_SWITCHER,
    TOOLBAR_FAST_VIEWS,
    TOOLBAR_INFO,
    TOOLBAR_LANGUAGE_SELECTOR
} from "../core/ui-ids";

contributionRegistry.registerContribution(SIDEBAR_MAIN, {
    name: VIEW_FILEBROWSER,
    label: "Workspace",
    icon: "folder-open",
    component: (id: string) => html`<lyra-filebrowser id="${id}"></lyra-filebrowser>`
});

contributionRegistry.registerContribution(PANEL_BOTTOM, {
    name: VIEW_LOG_TERMINAL,
    label: "Log Messages",
    icon: "list",
    component: (id: string) => html`<lyra-log-terminal id="${id}"></lyra-log-terminal>`
});

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_END, {
    name: TOOLBAR_INFO,
    label: "Info",
    icon: "circle-info",
    command: "show_version_info",
    showLabel: true,
});

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_END, {
    name: TOOLBAR_FAST_VIEWS,
    label: `Fast Views`,
    component: `<lyra-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></lyra-fastviews>`
});

contributionRegistry.registerContribution(TOOLBAR_BOTTOM_END, {
    name: TOOLBAR_LANGUAGE_SELECTOR,
    label: "Language",
    component: () => html`<lyra-language-selector></lyra-language-selector>`
});

contributionRegistry.registerContribution(TOOLBAR_MAIN_RIGHT, {
    name: TOOLBAR_APP_SWITCHER,
    label: "App Switcher",
    component: () => html`<lyra-layout-switcher></lyra-layout-switcher>`
} as HTMLContribution);

