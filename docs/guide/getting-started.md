# Getting started

## Prerequisites

- **Node.js** 18 or higher
- **npm** or **pnpm**

## Run the default app

```bash
git clone https://github.com/eclipse-lyra/core.git
cd core
npm install
npm run dev
```

This builds the core package, then starts the default app with the Vite dev server. Open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Build for production

```bash
npm run build        # build core only
npm run build:app    # build the default app (depends on core)
```

The app output is in `packages/app/dist/`.

## Project layout

| Path | Role |
|------|------|
| `packages/core` (`@eclipse-lyra/core`) | Platform: registries, services, UI parts. Import this in apps and extensions. |
| `packages/extension-*` | One package per extension (e.g. command palette, Monaco editor, settings). |
| `packages/app` | Default app: defines the app and imports extensions. Use as a template for your own app. |
| Root | Scripts: `dev`, `build`, `build:app`, `test`, `docs:dev`, `docs:build`. |

Next: [Build your own app](/guide/build-your-own-app) or [Concepts: Architecture](/concepts/architecture).
