import { extensionRegistry } from '@eclipse-docks/core';
import pkg from '../package.json';

extensionRegistry.registerExtension({
  id: pkg.name,
  name: 'Data Viewer',
  description: 'Tabular data views, persistence, and CSV/TSV/DuckDB integration',
  loader: () => import('./dataviewer-extension'),
  icon: 'table',
});
