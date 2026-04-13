import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    setupFiles: ['test/setup-indexeddb.ts'],
    include: [
      'test/units/**/*.test.ts',
      'test/integration/**/*.test.ts',
      'test/components/**/*.test.ts',
    ],
    exclude: ['node_modules', 'dist'],
    globals: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.ts'],
      exclude: ['**/*.d.ts'],
    },
  },
});
