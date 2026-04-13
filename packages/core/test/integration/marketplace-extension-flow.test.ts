import { beforeEach, describe, expect, it, vi } from 'vitest';

const persisted: Record<string, any> = {};
const appSettingsGetMock = vi.fn(async (key: string) => persisted[key]);
const appSettingsSetMock = vi.fn(async (key: string, value: any) => {
  persisted[key] = value;
});
const publishMock = vi.fn();
const subscribeMock = vi.fn();
const taskRunAsyncMock = vi.fn(async (_name: string, fn: () => Promise<unknown>) => fn());

vi.mock('../../src/core/settingsservice', () => ({
  appSettings: {
    get: appSettingsGetMock,
    set: appSettingsSetMock,
  },
  TOPIC_SETTINGS_CHANGED: 'events/settings/changed',
}));

vi.mock('../../src/core/events', () => ({
  publish: publishMock,
  subscribe: subscribeMock,
}));

vi.mock('../../src/core/logger', () => ({
  createLogger: vi.fn(() => ({ debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn() })),
  default: { debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));

vi.mock('../../src/core/toast', () => ({
  toastError: vi.fn(),
  toastInfo: vi.fn(),
}));

vi.mock('../../src/core/taskservice', () => ({
  taskService: { runAsync: taskRunAsyncMock },
}));

vi.mock('../../src/core/di', () => ({
  rootContext: { put: vi.fn() },
  uiContext: { getProxy: vi.fn(() => ({})) },
}));

vi.mock('../../src/core/esmsh-service', () => ({
  esmShService: {
    isSourceIdentifier: vi.fn(() => false),
    normalizeToEsmSh: vi.fn((s: string) => s),
    extractPackageName: vi.fn(() => null),
  },
}));

describe('Marketplace + Extension integration flow', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    Object.keys(persisted).forEach((k) => delete persisted[k]);
    persisted.extensions = [];
    persisted['extensions.external'] = [];
    persisted['marketplace.catalogUrls'] = [];
    (globalThis as any).fetch = vi.fn(async (_url: string) => ({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => ({
        name: 'Catalog',
        extensions: [
          {
            id: 'market.ext',
            name: 'Marketplace Extension',
            loader: async () => ({ default: vi.fn() }),
          },
        ],
      }),
    }));
  });

  it('refresh registers marketplace extension and keeps duplicate refresh idempotent', async () => {
    const { extensionRegistry } = await import('../../src/core/extensionregistry');
    const { marketplaceRegistry } = await import('../../src/core/marketplaceregistry');

    await marketplaceRegistry.addCatalogUrl('https://example.com/catalog.json');
    const afterFirstRefresh = extensionRegistry.getExtensions().filter((e) => e.id === 'market.ext');
    expect(afterFirstRefresh).toHaveLength(1);
    expect(afterFirstRefresh[0].external).toBe(true);

    await marketplaceRegistry.refreshCatalogs();
    const afterSecondRefresh = extensionRegistry.getExtensions().filter((e) => e.id === 'market.ext');
    expect(afterSecondRefresh).toHaveLength(1);
  });

  it('loads enabled marketplace extension through extension registry', async () => {
    const { extensionRegistry } = await import('../../src/core/extensionregistry');
    const { marketplaceRegistry } = await import('../../src/core/marketplaceregistry');

    await marketplaceRegistry.addCatalogUrl('https://example.com/catalog.json');
    await extensionRegistry.enableAsync('market.ext');
    expect(extensionRegistry.isEnabled('market.ext')).toBe(true);

    await extensionRegistry.loadEnabledExtensions();
    expect(extensionRegistry.isLoaded('market.ext')).toBe(true);
  });

  it('reloads extension enablement after settings-changed event', async () => {
    const { extensionRegistry } = await import('../../src/core/extensionregistry');
    extensionRegistry.registerExtension({
      id: 'toggle.ext',
      name: 'Toggle Extension',
      loader: async () => ({}),
    });

    persisted.extensions = [];
    expect(extensionRegistry.isEnabled('toggle.ext')).toBe(false);

    persisted.extensions = [{ id: 'toggle.ext', enabled: true }];
    const [, settingsChangedHandler] =
      subscribeMock.mock.calls.find(([topic]) => topic === 'events/settings/changed') ?? [];
    expect(settingsChangedHandler).toBeTypeOf('function');
    await settingsChangedHandler();
    await Promise.resolve();

    expect(extensionRegistry.isEnabled('toggle.ext')).toBe(true);
  });
});
