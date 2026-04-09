# Add a command and toolbar button

Use `registerAll` to register the command, handler, and the toolbar (or other UI) contribution in one call:

```ts
import { registerAll, TOOLBAR_MAIN_RIGHT } from '@eclipse-docks/core';

registerAll({
  command: {
    id: 'myext.do-action',
    name: 'Do action',
    description: 'Runs the action',
  },
  handler: {
    execute: async (context) => {
      // run the action
    },
    canExecute: (context) => someCondition, // optional
  },
  contribution: {
    target: TOOLBAR_MAIN_RIGHT,
    label: 'Do action',
    icon: 'bolt',
    showLabel: false,
  },
});
```

The **contribution** object must include `target` (the contribution target, e.g. a toolbar constant). The framework registers the command and adds a button (or menu item) that runs it. You can omit `contribution` if you only want to register the command (e.g. for the command palette or AI) and add UI elsewhere.

Common toolbar targets:

- `TOOLBAR_MAIN`, `TOOLBAR_MAIN_RIGHT`, `TOOLBAR_MAIN_CENTER`
- `TOOLBAR_BOTTOM`, `TOOLBAR_BOTTOM_END`, `TOOLBAR_BOTTOM_CENTER`

The command palette and AI can also execute registered commands by id.

See [Concepts: Commands](/concepts/commands) for full command and contribution options.
