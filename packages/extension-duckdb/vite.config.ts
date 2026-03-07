import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DUCKDB_PKG = '@duckdb/duckdb-wasm';

/** Only the main API; .wasm?url and .worker.js?url stay bundled so downstream gets URLs, not build-machine paths. */
const isDuckdbMainEntry = (id: string): boolean =>
  (id === DUCKDB_PKG || id.includes(DUCKDB_PKG)) &&
  !id.includes('.wasm') &&
  !id.includes('worker.js');

const isExternal = (id: string): boolean => {
  if (id.startsWith('./') || id.startsWith('../')) return false;
  if (path.isAbsolute(id) && id.includes('/src/')) return false;
  if (isDuckdbMainEntry(id)) return true;
  return true;
};

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist',
      entryRoot: 'src',
      rollupTypes: false,
      tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json'),
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        api: path.resolve(__dirname, 'src/api.ts'),
      },
      formats: ['es'],
      fileName: (_, name) => `${name}.js`,
    },
    rollupOptions: {
      external: isExternal,
      output: {
        format: 'es',
        paths: (id) => (isDuckdbMainEntry(id) ? DUCKDB_PKG : id),
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: false,
  },
});
