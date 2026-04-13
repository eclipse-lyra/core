// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest';

const { activePartGet } = vi.hoisted(() => ({
  activePartGet: vi.fn(),
}));

vi.mock('../../src/core/appstate', () => ({
  activePartSignal: { get: () => activePartGet() },
}));

vi.mock('../../src/core/apploader', () => ({
  appLoaderService: { getCurrentApp: vi.fn(() => null) },
}));

vi.mock('../../src/core/signals', () => ({
  watchSignal: vi.fn(),
}));

vi.mock('../../src/core/i18n', () => ({
  i18n: vi.fn(async () => ({ NO_PART: 'No part' })),
}));

describe('document-title (component helpers)', () => {
  beforeEach(() => {
    activePartGet.mockReset();
  });

  it('getActivePartDisplayName returns NO_PART when nothing is focused', async () => {
    activePartGet.mockReturnValue(undefined);
    const { getActivePartDisplayName } = await import('../../src/components/document-title');
    expect(getActivePartDisplayName()).toBe('No part');
  });

  it('prefers tab contribution label when present', async () => {
    activePartGet.mockReturnValue({
      tabContribution: { label: 'Editor' },
      getAttribute: () => null,
    });
    const { getActivePartDisplayName } = await import('../../src/components/document-title');
    expect(getActivePartDisplayName()).toBe('Editor');
  });

  it('falls back to element id when label is missing', async () => {
    activePartGet.mockReturnValue({
      tabContribution: {},
      getAttribute: (name: string) => (name === 'id' ? 'part-1' : null),
    });
    const { getActivePartDisplayName } = await import('../../src/components/document-title');
    expect(getActivePartDisplayName()).toBe('part-1');
  });
});
