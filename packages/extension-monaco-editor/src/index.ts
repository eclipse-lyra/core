import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@eclipse-lyra/core';
import bundle from './i18n.json';
import pkg from '../package.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: pkg.name,
  name: t('EXT_MONACO_NAME'),
  description: t('EXT_MONACO_DESC'),
  loader: () => import("./monaco-editor-extension"),
  icon: "file-pen",
});

export { MONACO_EDITOR_TOOLBAR_TARGET_PREFIX } from './monaco-toolbar-constants';
export { LyraMonacoWidget } from './monaco-widget';
