import { rootContext, contributionRegistry } from '@eclipse-lyra/core';
import { TARGET_NOTEBOOK_KERNELS } from '@eclipse-lyra/extension-notebook';
import { registerDuckdbCatalog } from './duckdb-catalog';
import { duckdbService } from './duckdb-service';
import { duckdbSqlAdapterContribution } from './duckdb-sqldatabase';
import { duckdbNotebookKernelContribution } from './duckdb-notebook-kernel';

export default function () {
  registerDuckdbCatalog();
  rootContext.put('duckdbService', duckdbService);
  contributionRegistry.registerContribution(
    'system.sqladapters',
    duckdbSqlAdapterContribution,
  );
  contributionRegistry.registerContribution(
    TARGET_NOTEBOOK_KERNELS,
    duckdbNotebookKernelContribution,
  );
}
