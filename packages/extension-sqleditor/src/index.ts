import { extensionRegistry } from '@eclipse-docks/core';
import pkg from '../package.json';
export type {
  SqlConnectionInfo,
  SqlDatabaseExtensionInfo,
  SqlAdapterAction,
  SqlDatabase,
  SqlAdapterContribution,
} from './sql-api';
export { TARGET_SQL_ADAPTERS } from './sql-api';

extensionRegistry.registerExtension({
  id: pkg.name,
  name: 'SQL Editor',
  description: 'Generic SQL editor with pluggable backends',
  loader: () => import('./sqleditor-extension'),
  icon: 'database',
});

