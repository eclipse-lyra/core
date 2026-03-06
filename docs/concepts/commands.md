# Commands

**Commands** are named actions with handlers. They are registered with `registerAll` (or `commandRegistry.registerCommand` / `registerHandler`) and referenced by toolbars, menus, the command palette, and AI.

## Registration

Use `registerAll` with a command descriptor and handler:

```ts
import { registerAll } from '@eclipse-lyra/core';

registerAll({
  command: {
    id: 'myext.save',
    name: 'Save',
    description: 'Saves the current document',
  },
  handler: {
    execute: async (context) => {
      // run the action; context.params, context.activeEditor, etc.
    },
    canExecute: (context) => booleanOrComputed, // optional
  },
});
```

- **command** — Object with `id`, `name`, `description`; optional `parameters`, `output`, `llm` for AI.
- **handler** — Object with `execute(context)` and optional `canExecute(context)`. When `canExecute` returns false, the command is disabled in UI (e.g. toolbar button greyed out).
- **contribution** — Optional. If provided with `target`, registers a command contribution to that target (e.g. toolbar) in one call.

## Using commands in UI

Toolbar buttons and menu items use **command contributions**: you register a contribution with `command: 'command.id'`. The framework binds the button to the command and runs the handler on click.

## Execution

Commands can be run programmatically or via:

- Toolbar/menu (through command contributions).
- Command palette (extension).
- AI system (extension).

See [Add a command and toolbar button](/guide/add-command-toolbar).
