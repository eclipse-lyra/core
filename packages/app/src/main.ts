import 'pace-js/themes/blue/pace-theme-minimal.css';
import Pace from 'pace-js';
import { appLoaderService, applyAppHostConfig, commandRegistry, EDITOR_AREA_MAIN, TOOLBAR_MAIN_RIGHT, TOOLBAR_MAIN, type RenderDescriptor, TOOLBAR_MAIN_CENTER, TOOLBAR_BOTTOM, TOOLBAR_BOTTOM_CENTER, TOOLBAR_BOTTOM_END } from '@eclipse-lyra/core';
import appPkg from '../package.json';

Pace.start();

applyAppHostConfig({
  packageInfo: {
    name: appPkg.name,
    version: appPkg.version,
    dependencies: appPkg.dependencies,
    devDependencies: appPkg.devDependencies,
  },
  marketplaceCatalogUrls: (appPkg as any).marketplace?.catalogUrls,
});

import '@eclipse-lyra/extension-utils';
import '@eclipse-lyra/extension-md-editor';
import '@eclipse-lyra/extension-media-viewer';
import '@eclipse-lyra/extension-memory-usage';
import '@eclipse-lyra/extension-monaco-editor';
import '@eclipse-lyra/extension-settings-tree';

import '@eclipse-lyra/extension-github-service';
import '@eclipse-lyra/extension-python-runtime';
import '@eclipse-lyra/extension-linuxterminal';
import '@eclipse-lyra/extension-webllm';
import '@eclipse-lyra/extension-notebook';
import '@eclipse-lyra/extension-command-palette';
import '@eclipse-lyra/extension-command-shell';
import '@eclipse-lyra/extension-webdav';
import '@eclipse-lyra/extension-in-browser-ml';
import '@eclipse-lyra/extension-ai-system';
import '@eclipse-lyra/extension-rag-system';
import '@eclipse-lyra/extension-howto-system';
import '@eclipse-lyra/extension-webmcp';
import '@eclipse-lyra/extension-duckdb';


import './default-app';
import './dashboard-app';
import './branding';