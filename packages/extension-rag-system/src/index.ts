import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@eclipse-lyra/core';
import bundle from './i18n.json';
import pkg from '../package.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: pkg.name,
  name: t('EXT_RAG_SYSTEM_NAME'),
  description: t('EXT_RAG_SYSTEM_DESC'),
  loader: () => import("./rag-system-extension"),
  icon: "database",
  experimental: true,
  dependencies: ["@eclipse-lyra/extension-ai-system", "@eclipse-lyra/extension-in-browser-ml"],
});
