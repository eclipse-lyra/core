import { extensionRegistry } from '@eclipse-docks/core';
import pkg from '../package.json';

extensionRegistry.registerExtension({
  id: pkg.name,
  name: 'CereusDB',
  description:
    'Spatial SQL in the browser (SedonaDB / Apache DataFusion)',
  loader: () => import('./cereusdb-extension'),
  icon: 'database',
  dependencies: ['@eclipse-docks/extension-sqleditor'],
  experimental: true,
});
