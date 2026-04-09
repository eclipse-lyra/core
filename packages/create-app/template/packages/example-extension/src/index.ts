import { extensionRegistry } from '@eclipse-docks/core';

extensionRegistry.registerExtension({
  id: 'example-extension',
  name: 'Example',
  description: 'Example extension showing how to add a view to the left side panel',
  loader: () => import('./example-extension-loader'),
  icon: 'puzzle-piece',
});
