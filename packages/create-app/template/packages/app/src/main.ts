import Pace from 'pace-js';
import 'pace-js/themes/blue/pace-theme-minimal.css';

Pace.start();

import '@eclipse-lyra/extension-md-editor';
import '@eclipse-lyra/extension-media-viewer';
import '@eclipse-lyra/extension-memory-usage';
import '@eclipse-lyra/extension-monaco-editor';
import '@eclipse-lyra/extension-settings-tree';
import '@eclipse-lyra/extension-utils';
import '@eclipse-lyra/extension-ai-system';
import '@eclipse-lyra/extension-command-palette';
import '@eclipse-lyra/extension-notebook';
import '@eclipse-lyra/extension-python-runtime';

import 'example-extension';

import { appLoaderService, contributionRegistry, type HTMLContribution, TOOLBAR_MAIN } from '@eclipse-lyra/core';

contributionRegistry.registerContribution(TOOLBAR_MAIN, {
  label: 'Brand',
  slot: 'start',
  component: '<span style="margin-right: 1rem;">{{APP_NAME}}</span>',
} as HTMLContribution);

appLoaderService.registerApp(
  {
    extensions: [
      '@eclipse-lyra/extension-utils',
      '@eclipse-lyra/extension-command-palette',
      '@eclipse-lyra/extension-md-editor',
      '@eclipse-lyra/extension-monaco-editor',
      '@eclipse-lyra/extension-media-viewer',
      '@eclipse-lyra/extension-settings-tree',
      '@eclipse-lyra/extension-memory-usage',
      '@eclipse-lyra/extension-ai-system',
      'example-extension',
    ],
  },
  { autoStart: true, hostConfig: true }
);
