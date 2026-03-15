import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';
import { resolveDepVersionsPlugin } from '@eclipse-lyra/core/vite-plugin-resolve-deps';
import { readdirSync, readFileSync, existsSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packagesDir = path.resolve(__dirname, '..');
const coreDir = path.resolve(packagesDir, 'core');

function workspaceSourceAliases(): Record<string, string> {
  const alias: Record<string, string> = {};

  alias['@eclipse-lyra/core/core/events'] = path.resolve(coreDir, 'src/core/events.ts');
  alias['@eclipse-lyra/core/externals/third-party'] = path.resolve(coreDir, 'src/externals/third-party.ts');
  alias['@eclipse-lyra/core/externals/lit'] = path.resolve(coreDir, 'src/externals/lit.ts');
  alias['@eclipse-lyra/core/externals/webawesome'] = path.resolve(coreDir, 'src/externals/webawesome.ts');
  alias['@eclipse-lyra/core/parts'] = path.resolve(coreDir, 'src/parts');
  alias['@eclipse-lyra/core/widgets'] = path.resolve(coreDir, 'src/widgets');
  alias['@eclipse-lyra/core/api'] = path.resolve(coreDir, 'src/api/index.ts');
  alias['@eclipse-lyra/core'] = path.resolve(coreDir, 'src/index.ts');

  for (const name of readdirSync(packagesDir, { withFileTypes: true })) {
    if (!name.isDirectory() || !name.name.startsWith('extension-')) continue;
    const pkgDir = path.join(packagesDir, name.name);
    const pkgPath = path.join(pkgDir, 'package.json');
    if (!existsSync(pkgPath)) continue;
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    if (!pkg.name?.startsWith('@eclipse-lyra/')) continue;
    const srcDir = path.join(pkgDir, 'src');
    if (!existsSync(path.join(srcDir, 'index.ts'))) continue;
    if (pkg.exports?.['./api']) alias[`${pkg.name}/api`] = path.join(srcDir, 'api.ts');
    const exports = pkg.exports && typeof pkg.exports === 'object' ? pkg.exports : {};
    for (const [key, value] of Object.entries(exports)) {
      if (key === '.' || !key.startsWith('./')) continue;
      const target = typeof value === 'string' ? value : (value as { import?: string })?.import;
      if (target?.startsWith('./src/')) alias[pkg.name + key] = path.join(pkgDir, target);
    }
    alias[pkg.name] = path.join(srcDir, 'index.ts');
  }

  return alias;
}

export default defineConfig({
  root: __dirname,
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: workspaceSourceAliases(),
  },
  optimizeDeps: {
    exclude: ['@eclipse-lyra/core', '@electric-sql/pglite'],
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
  },
  plugins: [
    resolveDepVersionsPlugin(),
    mkcert(),
    crossOriginIsolation(),
    {
      name: 'watch-workspace-packages',
      configureServer(server) {
        server.watcher.add(packagesDir);
      },
    },
  ],
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
        useDefineForClassFields: false,
      },
    },
  },
  worker: {
    format: 'es',
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('monaco-editor')) return 'monaco';
          if (id.includes('@electric-sql/pglite') || id.includes('pglite')) return 'pglite';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
});
