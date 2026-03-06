# Create an extension

## 1. New package

Create a new package under `packages/` (e.g. `packages/extension-myfeature`) with:

- `package.json` — name `@eclipse-lyra/extension-myfeature`, dependency on `@eclipse-lyra/core`.
- `tsconfig.json` — extends or matches the repo TypeScript setup.
- `src/index.ts` — entry that registers the extension.

Ensure the root `package.json` workspaces include `packages/*`.

## 2. Register the extension

In `src/index.ts`, register with `extensionRegistry` and provide a **loader** that runs when the extension is enabled:

```ts
import {
  extensionRegistry,
  contributionRegistry,
  commandRegistry,
  i18nLazy,
  SYSTEM_LANGUAGE_BUNDLES,
} from '@eclipse-lyra/core';
import bundle from './i18n.json';
import pkg from '../package.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: pkg.name,
  name: t('EXT_MYFEATURE_NAME'),
  description: t('EXT_MYFEATURE_DESC'),
  loader: () => import('./myfeature-extension'),
  icon: 'puzzle-piece',
  dependencies: ['@eclipse-lyra/extension-someother'], // optional
});
```

The extension id should match the package name (e.g. `@eclipse-lyra/extension-myfeature`).

The **loader** should dynamically import the module that performs the actual registration (commands, contributions, editors).

## 3. Loader module

In `myfeature-extension.ts` (or similar), register commands and optionally the UI contribution (e.g. toolbar button) in one call:

```ts
import { registerAll, TOOLBAR_MAIN_RIGHT } from '@eclipse-lyra/core';

registerAll({
  command: {
    id: 'myfeature.do-something',
    name: 'Do something',
    description: 'Runs the feature action',
  },
  handler: {
    execute: (_context) => { /* ... */ },
    canExecute: (context) => true, // optional
  },
  contribution: {
    target: TOOLBAR_MAIN_RIGHT,
    label: 'Do something',
    icon: 'bolt',
  },
});
```

You can also register the contribution separately with `contributionRegistry.registerContribution(target, { command, label, icon, ... })` if you prefer.

## 4. i18n (optional)

Use `i18nLazy('extensions')` and register a language bundle with `SYSTEM_LANGUAGE_BUNDLES` so names and descriptions are translated. Provide `i18n.json` with keys like `EXT_MYFEATURE_NAME` and `EXT_MYFEATURE_DESC`.

See [Concepts: Extensions](/concepts/extensions) and [Add a sidebar tab](/guide/add-sidebar-tab), [Add a command and toolbar button](/guide/add-command-toolbar).
