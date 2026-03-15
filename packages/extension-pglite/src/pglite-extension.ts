import { contributionRegistry } from '@eclipse-lyra/core';
import { TARGET_NOTEBOOK_KERNELS } from '@eclipse-lyra/extension-notebook';
import { registerPgliteCatalog } from './pglite-catalog';
import { pgliteSqlAdapterContribution } from './pglite-sqldatabase';
import { pgliteNotebookKernelContribution } from './pglite-notebook-kernel';

export default function activate() {
  registerPgliteCatalog();
  contributionRegistry.registerContribution('system.sqladapters', pgliteSqlAdapterContribution);
  contributionRegistry.registerContribution(TARGET_NOTEBOOK_KERNELS, pgliteNotebookKernelContribution);
}

