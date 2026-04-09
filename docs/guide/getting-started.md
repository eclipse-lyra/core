# Getting started

## Prerequisites

- **Node.js** 18 or higher
- **npm** or **pnpm**

## Run the default app

```bash
git clone https://github.com/eclipse-docks/core.git
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

## Create a new app

To scaffold a new Eclipse Docks app (monorepo with app + example extension) without cloning this repo:

```bash
npm create @eclipse-docks/app my-app
cd my-app
npm run dev
```

See [Build your own app](/guide/build-your-own-app) for details and for customizing or building from the monorepo.

## Project layout (this repo)

| Path | Role |
|------|------|
| `packages/core` (`@eclipse-docks/core`) | Platform: registries, services, UI parts. Import this in apps and extensions. |
| `packages/extension-*` | One package per extension (e.g. command palette, Monaco editor, settings). |
| `packages/app` | Default app in this repo: defines the app and imports extensions. Use as reference when working in the monorepo. |
| `packages/create-app` | Scaffolder: `npm create @eclipse-docks/app` generates a new app elsewhere. |
| Root | Scripts: `dev`, `build`, `build:app`, `test`, `docs:dev`, `docs:build`. |

Next: [Build your own app](/guide/build-your-own-app) or [Concepts: Architecture](/concepts/architecture).
