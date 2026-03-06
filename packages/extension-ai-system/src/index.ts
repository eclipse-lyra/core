import { extensionRegistry } from '@eclipse-lyra/core';
import pkg from '../package.json';

extensionRegistry.registerExtension({
  id: pkg.name,
  name: 'AI System',
  description: 'AI assistants, chat, and tool execution',
  loader: () => import('./ai-system-extension'),
  icon: 'robot',
});
