# Packages overview

| Package | Role |
|---------|------|
| **@eclipse-lyra/core** | Platform: registries (extensions, contributions, commands), services (workspace, settings, dialogs, tasks, events), UI parts and widgets. Import this in apps and extensions. |
| **@eclipse-lyra/app** | Default app: defines the app and imports extensions. Use as a template for your own app. |
| **@eclipse-lyra/extension-ai-system** | AI integration (chat, prompts, context). |
| **@eclipse-lyra/extension-command-palette** | Command palette UI. |
| **@eclipse-lyra/extension-settings-tree** | Settings tree UI. |
| **@eclipse-lyra/extension-monaco-editor** | Monaco code editor. |
| **@eclipse-lyra/extension-md-editor** | Markdown editor. |
| **@eclipse-lyra/extension-media-viewer** | Media (image, etc.) viewer. |
| **@eclipse-lyra/extension-notebook** | Notebook runtime and UI. |
| **@eclipse-lyra/extension-python-runtime** | Python runtime (e.g. Pyodide). |
| **@eclipse-lyra/extension-linuxterminal** | Terminal. |
| **@eclipse-lyra/extension-webllm** | Web LLM integration. |
| **@eclipse-lyra/extension-in-browser-ml** | In-browser ML (e.g. transformers). |
| **@eclipse-lyra/extension-rag-system** | RAG (retrieval-augmented generation) and document indexing. |
| **@eclipse-lyra/extension-howto-system** | How-to / tutorial system. |
| **@eclipse-lyra/extension-webdav** | WebDAV workspace and commands. |
| **@eclipse-lyra/extension-download** | Download arbitrary resources from any URL to the workspace. (superseded by `@eclipse-lyra/extension-utils`'s `wget` command) |
| **@eclipse-lyra/extension-unzip** | Unzip support. (superseded by `@eclipse-lyra/extension-utils`) |
| **@eclipse-lyra/extension-memory-usage** | Memory usage display. |
| **@eclipse-lyra/extension-certs** | Certificate handling. (superseded by `@eclipse-lyra/extension-utils`) |
| **@eclipse-lyra/extension-utils** | Convenience utility extension combining wget-style download, unzip, and certificate tools. |
| **@eclipse-lyra/extension-github-service** | GitHub service integration. |

Add only the extensions your app needs to `AppDefinition.extensions` and import their packages so they register with the framework.
