import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';
import { resolveDepVersionsPlugin } from '@eclipse-docks/core/vite-plugin-resolve-deps';
import { localAliasesPlugin } from '@eclipse-docks/core/vite-plugin-local-aliases';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {},
  plugins: [
    resolveDepVersionsPlugin(),
    localAliasesPlugin({
      useSrcInDev: true,
      patterns: [
        { folderPrefix: 'extension-' },
      ],
    }),
    mkcert(),
    crossOriginIsolation(),
  ],
  worker: {
    format: 'es',
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    assetsInlineLimit: 0,
    rolldownOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
