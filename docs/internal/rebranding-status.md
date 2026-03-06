# Rebranding status (Appspace → Eclipse Lyra)

## Done

- **Package names**: All packages use `@eclipse-lyra/*` (core, app, extension-*).
- **Root package**: `@eclipse-lyra/core-monorepo`, repo URL `github.com/eclipse-lyra/core`.
- **Custom elements**: All use `lyra-*` (e.g. `lyra-standard-layout`).
- **IndexedDB / persistence**: `eclipse-lyra-workspace-idb`, `eclipse-lyra-persistence`.
- **Toolbar logo**: `lyra-toolbar-logo.svg` (constellation + “Eclipse Lyra” text).
- **GitHub workflow**: `build-and-deploy.yml` uses `@eclipse-lyra/core` and step name “Build Lyra app”.

## CI/CD pipelines

| Workflow | Status |
|----------|--------|
| **ci.yml** | No package names; uses root `npm run build` / `build:app` / `type-check` — OK. |
| **build-and-deploy.yml** | Fixed: core build uses `@eclipse-lyra/core`, step renamed to “Build Lyra app”. Still uses `app.kispace.de` for CNAME and deployment URL (see below). |
| **publish.yml** | Uses `packages/core` and `packages/extension-*` paths only — OK. |
| **create-release.yml** | No branding references — OK. |

## Unit tests

- **Status**: No old branding in unit tests. All `packages/core/test/units/*.test.ts` and other test files use no `appspace` / `kispace` / `@kispace-io` / `k-*` references; nothing to change.

## Remaining (optional / product decisions)

- **README.md**: Still “Appspace”, `kispace-io`, `app.kispace.de`, `k-standard-layout` → update to Eclipse Lyra and `lyra-standard-layout` when repo/domain are final. **Update:** README is now rebranded; repo and clone URL point to eclipse-lyra/core.
- **docs/** (VitePress): Rebranded — title “Eclipse Lyra”, repo link `eclipse-lyra/core`, all examples use `@eclipse-lyra/core` and `lyra-standard-layout`.
- **packages/app/package.json**: Description “Appspace”, marketplace catalog URLs `kispace-io/appspace-marketplace` — update when Eclipse Lyra marketplace exists.
- **packages/core/package.json**: Description “Appspace platform core” — can be updated to “Eclipse Lyra core”.
- **Extension copy**: `extension-howto-system` and `extension-ai-system` use “AppSpace” and `appspace.onboarding` / `appspace.ai-setup` in user-facing strings and IDs — consider “Eclipse Lyra” and `eclipse-lyra.*` IDs.
- **packages/app/src/default-app.ts**: Description “Default app!space application” — update to “Default Eclipse Lyra application”.
- **extension-duckdb**: Comment “e.g. `appspace`” for DB name — can stay or become “e.g. `lyra`”.
- **Deployment URL**: CNAME and step summary still point to `app.kispace.de`; change when an Eclipse Lyra deployment domain is chosen.

## Doc references

- Docs and README use `lyra-standard-layout` and `@eclipse-lyra/*` throughout. Repo is at [eclipse-lyra/core](https://github.com/eclipse-lyra/core).
