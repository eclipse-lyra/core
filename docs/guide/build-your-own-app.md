# Build your own app

## Recommended: scaffold with create-app

The easiest way to start is to scaffold a new app with the official CLI. You get a monorepo with an app package and an example extension.

```bash
npm create @eclipse-docks/app my-app
cd my-app
npm run dev
```

This creates a project with:

- **`packages/app`** — The Docks app (entry point, extension list, logo). Edit `packages/app/src/main.ts` to add or remove extensions and customize the toolbar.
- **`packages/example-extension`** — A sample extension that adds a view to the left sidebar (same tab bar as the Workspace / file browser). Use it as a reference for your own extensions.

### Customizing the logo

The splash screen and toolbar use **`public/logo.svg`**. To brand your app, replace this file with your own SVG (keep the name `logo.svg`). The same asset is shown on the loading overlay and in the main toolbar; no code changes are required.

From the new project root: `npm run dev` starts the app, `npm run build` builds it, `npm run preview` previews the production build. See the generated `README.md` in the project for a short overview.

## Alternative: manual setup in the monorepo

If you prefer to work inside the Eclipse Docks repo or copy the default app by hand:

1. **Create or copy the app package**  
   Add a new package under `packages/` (e.g. `packages/my-app`) or duplicate `packages/app`. Ensure the root `package.json` `workspaces` includes `packages/*`.

2. **Install and wire the app**  
   In the app package, depend on `@eclipse-docks/core` and the extensions you need (`@eclipse-docks/extension-*`).

3. **Entry point**  
   In your app entry (e.g. `main.ts`):
   - Import the extensions you need (side-effect imports so they register).
   - Call `appLoaderService.registerApp(appDefinition, { autoStart: true, hostConfig: true })`. Add `marketplaceCatalogUrls` and optionally `dependencies` to the app definition if you use the marketplace or want to show dependency versions in About.

4. **App definition**  
   Minimal example (default layout is `standard`, i.e. IDE):

```ts
import { appLoaderService } from '@eclipse-docks/core';

appLoaderService.registerApp(
  {
    extensions: [
      '@eclipse-docks/extension-command-palette',
      '@eclipse-docks/extension-settings-tree',
      '@eclipse-docks/extension-ai-system',
    ],
    layout: 'standard',
  },
  { autoStart: true, hostConfig: true }
);
```

Use `layout: { id: 'standard', props: { 'show-bottom-panel': true } }` to parameterize the layout (props are applied as attributes when rendering).

To add another layout (e.g. dashboard), register a **LayoutContribution** to the `SYSTEM_LAYOUTS` slot (`id`, `name`, `component`, optional `onShow`). Users switch between layouts via the toolbar layout switcher.

5. **Run and build**  
   From the repo root: `npm run dev` (or run the app package's dev script). For production: `npm run build` then build the app package; output will be in the app's `dist/`.  
   For branding, add or replace **`public/logo.svg`** in the app package; it is used for the loading splash and the main toolbar.

See [Concepts: Apps](/concepts/apps) for all `AppDefinition` options and layout registration.
