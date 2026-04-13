import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Directory, workspaceService } from '../../src/core/filesys/common';

describe('filesys/opfs contribution', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function getOpfsContribution() {
    return workspaceService.getContributions().find((c) => c.type === 'opfs');
  }

  it('matches opfs input through canHandle', async () => {
    await import('../../src/core/filesys/opfs');
    const contribution = getOpfsContribution();
    expect(contribution?.canHandle({ opfs: true })).toBe(true);
    expect(contribution?.canHandle({ opfs: false })).toBe(false);
    expect(contribution?.canHandle(undefined)).toBeFalsy();
  });

  it('returns undefined from restore for invalid payload', async () => {
    await import('../../src/core/filesys/opfs');
    const contribution = getOpfsContribution();
    expect(await contribution?.restore?.({ nope: true })).toBeUndefined();
  });

  it('connects, restores, and persists OPFS roots', async () => {
    const getDirectory = vi.fn(async () => ({ kind: 'directory', name: 'opfs-root', values: async function* () {} }));
    Object.defineProperty(globalThis, 'navigator', {
      value: { storage: { getDirectory } },
      configurable: true,
    });

    const { OPFSRootDirectory } = await import('../../src/core/filesys/opfs');
    const contribution = getOpfsContribution();
    const connected = await contribution!.connect({ opfs: true });
    expect(connected).toBeInstanceOf(OPFSRootDirectory);
    expect(connected.getName()).toBe('.opfs');
    expect(await contribution!.persist!(connected as Directory)).toEqual({ opfs: true });

    const restored = await contribution!.restore!({ opfs: true });
    expect(restored).toBeInstanceOf(OPFSRootDirectory);
  });

  it('throws when OPFS is not available', async () => {
    Object.defineProperty(globalThis, 'navigator', {
      value: {},
      configurable: true,
    });
    await import('../../src/core/filesys/opfs');
    const contribution = getOpfsContribution();
    await expect(contribution!.connect({ opfs: true })).rejects.toThrow('OPFS is not available in this environment');
  });
});
