import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isExternal = (id: string): boolean => !id.startsWith('./') && !id.startsWith('../') && !(path.isAbsolute(id) && id.includes('/src/'));

export default defineConfig({
  plugins: [dts({ outDir: 'dist', entryRoot: 'src', rollupTypes: false, tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json') })],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        'vite-pwa-plugin': path.resolve(__dirname, 'src/vite-pwa-plugin.ts'),
      },
      formats: ['es'],
    },
    rolldownOptions: { external: isExternal, output: { format: 'es' } },
    outDir: 'dist', sourcemap: true, minify: false,
  },
});
