# Architecture

## Layers

```
┌─────────────────────────────────────────────────────────────┐
│  Applications (packages/app, or custom apps)                 │
│  – AppDefinition: id, extensions, contributions, render     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  App Loader (core)                                          │
│  – App registration & lifecycle  – Extension enable/disable │
│  – Contribution registration     – Render app root         │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐   ┌─────────────────┐   ┌───────────────┐
│  Extensions   │   │  Contributions   │   │   Commands    │
│  Registry     │   │  Registry       │   │   Registry    │
│  (per-app)    │   │  (tabs, toolbars)│   │   (handlers)  │
└───────────────┘   └─────────────────┘   └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  UI (core)                                                   │
│  lyra-standard-layout · lyra-tabs · lyra-toolbar · lyra-filebrowser · …    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Core services                                               │
│  Workspace · Settings · Editor registry · Tasks · Events · DI│
└─────────────────────────────────────────────────────────────┘
```

## Monorepo layout

| Path | Role |
|------|------|
| **`packages/core`** (`@eclipse-lyra/core`) | Platform: registries, services, parts, widgets, dialogs. No extension logic; extensions live in separate packages. |
| **`packages/extension-*`** | One package per extension. Each depends on core and registers commands, contributions, and optionally editors. |
| **`packages/app`** | Default app: imports core and extensions, defines `AppDefinition` and `extensions[]`, registers with the app loader. Use as a template. |
| **Root** | Workspace root. Scripts: `dev`, `build`, `build:app`, `test`, `docs:dev`, `docs:build`. |

## Main concepts

- **Apps** — Implement `AppDefinition`: `id`, `name`, `version`, `extensions[]`, optional `contributions`, `render` (string tag, `{ tag, attributes }`, or Lit template), `initialize` / `dispose`.
- **Extensions** — Register with `extensionRegistry`; provide a loader that runs when the extension is enabled. Register commands, contributions, editors.
- **Contributions** — Declarative UI: tabs (sidebars, editor area), toolbar buttons, HTML blocks. Targets include `SIDEBAR_MAIN`, `SIDEBAR_AUXILIARY`, `TOOLBAR_MAIN_RIGHT`, `TOOLBAR_BOTTOM_END`, etc.
- **Commands** — Id and handlers (optional `canExecute`). Toolbars and menus reference commands; the command palette and AI can execute them.

Next: [Apps](/concepts/apps), [Extensions](/concepts/extensions), [Contributions](/concepts/contributions), [Commands](/concepts/commands).
