// @vitest-environment jsdom
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { html } from 'lit';

const { getCurrentLayoutId, getRegisteredLayouts, setPreferredLayoutId } = vi.hoisted(() => ({
  getCurrentLayoutId: vi.fn(() => 'a'),
  getRegisteredLayouts: vi.fn(() => [
    { id: 'a', name: 'Layout A', icon: 'table-cells' },
    { id: 'b', name: 'Layout B', icon: 'table-cells' },
  ]),
  setPreferredLayoutId: vi.fn(async () => undefined),
}));

vi.mock('../../src/core/apploader', () => ({
  appLoaderService: {
    getCurrentLayoutId,
    getRegisteredLayouts,
    setPreferredLayoutId,
  },
}));

vi.mock('../../src/core/icon-utils', () => ({
  icon: () => html`<span data-testid="mock-icon"></span>`,
}));

describe('layout-switcher', () => {
  beforeAll(() => {
    if (typeof globalThis.requestAnimationFrame === 'undefined') {
      globalThis.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(cb, 0) as unknown as number;
    }
    if (typeof globalThis.requestIdleCallback === 'undefined') {
      globalThis.requestIdleCallback = (cb: IdleRequestCallback) => setTimeout(cb, 0) as unknown as number;
    }
  });

  it('renders a dropdown when more than one layout is registered', async () => {
    getCurrentLayoutId.mockReturnValue('a');
    getRegisteredLayouts.mockReturnValue([
      { id: 'a', name: 'Layout A', icon: 'table-cells' },
      { id: 'b', name: 'Layout B', icon: 'table-cells' },
    ]);

    await import('../../src/components/layout-switcher');
    const el = document.createElement('docks-layout-switcher');
    document.body.appendChild(el);
    await customElements.whenDefined('docks-layout-switcher');
    await el.updateComplete;

    const root = el.shadowRoot;
    expect(root?.querySelector('wa-dropdown')).toBeTruthy();
    expect(root?.querySelectorAll('wa-dropdown-item').length).toBe(2);

    el.remove();
  });

  it('renders nothing when only one layout exists', async () => {
    getRegisteredLayouts.mockReturnValue([{ id: 'single', name: 'Only', icon: 'table-cells' }]);

    await import('../../src/components/layout-switcher');
    const el = document.createElement('docks-layout-switcher');
    document.body.appendChild(el);
    await customElements.whenDefined('docks-layout-switcher');
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector('wa-dropdown')).toBeNull();

    el.remove();
  });
});
