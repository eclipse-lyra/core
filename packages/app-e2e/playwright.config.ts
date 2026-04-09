import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, devices } from '@playwright/test';

const packageRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(packageRoot, '../..');

export default defineConfig({
    testDir: path.join(packageRoot, 'e2e'),
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: process.env.CI ? 'github' : 'list',
    use: {
        baseURL: 'http://127.0.0.1:4173',
        screenshot: 'on',
        trace: 'on-first-retry',
    },
    projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
    webServer: {
        command:
            'npm run build -w @eclipse-docks/core && npm run build -w @eclipse-docks/app-e2e && E2E_HTTP_PREVIEW=1 npm run preview -w @eclipse-docks/app-e2e -- --host 127.0.0.1 --port 4173 --strictPort',
        cwd: repoRoot,
        url: 'http://127.0.0.1:4173',
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
    },
});
