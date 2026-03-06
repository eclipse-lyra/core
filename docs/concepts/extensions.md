# Extensions

**Extensions** are feature units that register with the framework and can provide commands, UI contributions, and editors.

## Extension interface

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique id (e.g. `@eclipse-lyra/extension-command-palette`, typically the package name). |
| `name` | Yes | Human-readable name (can be an i18n label). |
| `description` | No | Short description. |
| `loader` | No | Function that dynamically imports the extension module. Runs when the extension is enabled. |
| `url` | No | URL to load the extension from (alternative to loader). |
| `icon` | No | Icon identifier (e.g. FontAwesome name). |
| `version` | No | Extension version. |
| `author` | No | Author name. |
| `experimental` | No | Mark as experimental. |
| `external` | No | Set when the extension comes from the marketplace. |
| `dependencies` | No | List of extension ids that must load before this one. |

## Lifecycle

1. The app lists extension ids in `AppDefinition.extensions`.
2. The app loader enables those extensions (and their dependencies).
3. For each extension, the **loader** is run (or the module at **url** is loaded).
4. The loader module registers commands, contributions, and editors with the framework.
5. When the app is unloaded, extensions are disabled.

## One package per extension

Each extension typically lives in its own package under `packages/extension-*`, depends on `@eclipse-lyra/core`, and has an entry file that registers the extension and a loader that imports the module that does the real registration.

## Dependencies

Use `dependencies` so that another extension is loaded first (e.g. Python runtime before the notebook). The system resolves order and detects circular dependencies.

See [Create an extension](/guide/create-an-extension).
