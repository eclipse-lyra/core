import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@eclipse-lyra/core';
import bundle from './i18n.json';
import pkg from '../package.json';

export type { GitHubRelease } from './github-service';
export {
    getGitHubConfig,
    fetchReleases,
    fetchLatestRelease,
    fetchReleaseByTag,
    isNewerVersion,
} from './github-service';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: pkg.name,
  name: t('EXT_GITHUB_SERVICE_NAME'),
  description: t('EXT_GITHUB_SERVICE_DESC'),
  loader: () => import("./github-service-extension"),
  icon: "code-branch",
});
