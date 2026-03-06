import { appLoaderService } from "@eclipse-lyra/core";

appLoaderService.registerApp(
    {
      id: 'dev-standard-app',
      name: 'Default App',
      version: '0.0.0',
      description: 'Default app!space application',
      extensions: [
        '@eclipse-lyra/extension-utils',
        '@eclipse-lyra/extension-command-palette',
        '@eclipse-lyra/extension-command-shell',
        '@eclipse-lyra/extension-md-editor',
        '@eclipse-lyra/extension-monaco-editor',
        '@eclipse-lyra/extension-media-viewer',
        '@eclipse-lyra/extension-settings-tree',
        '@eclipse-lyra/extension-memory-usage',
        '@eclipse-lyra/extension-ai-system',
        '@eclipse-lyra/extension-webmcp',
        '@eclipse-lyra/extension-duckdb',
      ],
    },
    { autoStart: true }
  );