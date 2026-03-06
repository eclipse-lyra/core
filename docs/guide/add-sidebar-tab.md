# Add a sidebar tab

Register a **tab contribution** to place a tab in the main or auxiliary sidebar.

## Targets

- `SIDEBAR_MAIN` — main sidebar (e.g. file tree).
- `SIDEBAR_AUXILIARY` — secondary sidebar.

Import the constants from `@eclipse-lyra/core` (they are re-exported from the API).

## Example

```ts
import { contributionRegistry, SIDEBAR_MAIN } from '@eclipse-lyra/core';
import { html } from 'lit';

contributionRegistry.registerContribution(SIDEBAR_MAIN, {
  target: SIDEBAR_MAIN,
  label: 'My panel',
  name: 'My panel',
  icon: 'folder',
  closable: true,
  component: (id: string) => html`<div class="my-panel">Content for ${id}</div>`,
});
```

- **name** — tab label.
- **editorId** — optional; links the tab to an editor type.
- **closable** — whether the tab can be closed.
- **component** — optional function that returns a Lit `TemplateResult` for the tab content.

See [Concepts: Contributions](/concepts/contributions) for all contribution types and targets.
