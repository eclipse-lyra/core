import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Directory as DirectoryRef, Resource as ResourceRef } from '../../src/core/filesys/common';

const getObjectMock = vi.fn();
const persistObjectMock = vi.fn();
const publishMock = vi.fn();

vi.mock('../../src/core/persistenceservice', () => ({
  persistenceService: {
    getObject: getObjectMock,
    persistObject: persistObjectMock,
  },
}));

vi.mock('../../src/core/events', () => ({
  publish: publishMock,
}));

vi.mock('../../src/core/di', () => ({
  rootContext: { put: vi.fn() },
}));

vi.mock('../../src/core/logger', () => ({
  createLogger: vi.fn(() => ({ debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn() })),
}));

describe('filesys/common surfaces', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    getObjectMock.mockResolvedValue(null);
    persistObjectMock.mockResolvedValue(undefined);
  });

  it('sorts resources with resourceComparator and supports StringFile', async () => {
    const {
      resourceComparator,
      StringFile,
      File,
      Directory,
    } = await import('../../src/core/filesys/common');

    class D extends Directory {
      constructor(private readonly n: string) {
        super();
      }
      getName() {
        return this.n;
      }
      getParent() {
        return undefined;
      }
      async listChildren() {
        return [];
      }
      async getResource() {
        return null;
      }
      touch() {}
      async delete() {}
      async copyTo() {}
      async rename() {}
    }

    class F extends File {
      constructor(private readonly n: string) {
        super();
      }
      getName() {
        return this.n;
      }
      getParent() {
        return undefined;
      }
      async getContents() {
        return '';
      }
      async saveContents() {}
      async size() {
        return 0;
      }
      async delete() {}
      async copyTo() {}
      async rename() {}
    }

    const d = new D('a');
    const f = new F('b');
    expect(resourceComparator(d, f)).toBeLessThan(0);
    expect(resourceComparator(f, d)).toBeGreaterThan(0);
    expect(resourceComparator(new D('m'), new D('n'))).toBeLessThan(0);

    const sf = new StringFile('hi', 'x.txt');
    expect(await sf.getContents()).toBe('hi');
    expect(await sf.size()).toBe(2);
    await sf.saveContents('yo');
    expect(await sf.getContents()).toBe('yo');
    await expect(sf.copyTo('p')).rejects.toThrow('Not supported');
    expect(() => {
      void sf.delete();
    }).toThrow('Not supported');
    await expect(sf.rename('y')).rejects.toThrow('Not supported');
  });

  it('routes CompositeDirectory getResource, touch, and root errors', async () => {
    const { CompositeDirectory, Directory } = await import('../../src/core/filesys/common');

    const touchChild = vi.fn();
    class LeafDir extends Directory {
      constructor(private readonly n: string) {
        super();
      }
      getName() {
        return this.n;
      }
      getParent() {
        return undefined;
      }
      async listChildren() {
        return [];
      }
      async getResource(path: string) {
        return path === 'nested.txt' ? ({ getName: () => 'nested.txt' } as any) : null;
      }
      touch() {
        touchChild();
      }
      async delete() {}
      async copyTo() {}
      async rename() {}
    }

    const leaf = new LeafDir('proj');
    const composite = new CompositeDirectory([leaf]);
    expect(await composite.getResource('')).toBeNull();
    expect(await composite.getResource('missing/x')).toBeNull();
    expect(await composite.getResource('proj')).toBe(leaf);
    expect(await composite.getResource('proj/nested.txt')).toBeTruthy();
    composite.touch();
    expect(touchChild).toHaveBeenCalled();
    await expect(composite.delete()).rejects.toThrow('workspace root');
    await expect(composite.copyTo('x')).rejects.toThrow('workspace root');
    await expect(composite.rename('x')).rejects.toThrow('workspace root');
    expect(composite.getFolderByName('proj')).toBe(leaf);
  });

  it('throws from placeholder and unavailable folder directories', async () => {
    const {
      MissingContributionDirectory,
      UnavailableWorkspaceFolderDirectory,
      isWorkspaceFolderPlaceholder,
    } = await import('../../src/core/filesys/common');

    const missing = new MissingContributionDirectory({
      backendType: 'x',
      name: 'M',
      data: {},
    });
    const bad = new UnavailableWorkspaceFolderDirectory({
      backendType: 'y',
      name: 'U',
      data: {},
      reason: 'offline',
    });
    expect(isWorkspaceFolderPlaceholder(missing)).toBe(true);
    expect(isWorkspaceFolderPlaceholder(bad)).toBe(true);
    expect(bad.getFailureReason()).toBe('offline');
    await expect(missing.getResource('p')).rejects.toThrow('not available');
    await expect(bad.getResource('p')).rejects.toThrow('unavailable');
  });

  it('computes workspace path using composite folder mapping', async () => {
    const { CompositeDirectory, File, Directory, workspaceService } = await import('../../src/core/filesys/common');

    class Root extends Directory {
      constructor(private readonly n: string) {
        super();
      }
      getName() {
        return this.n;
      }
      getParent() {
        return undefined;
      }
      async listChildren() {
        return [];
      }
      async getResource() {
        return null;
      }
      touch() {}
      async delete() {}
      async copyTo() {}
      async rename() {}
    }

    class Sub extends Directory {
      constructor(
        private readonly n: string,
        private readonly p: DirectoryRef
      ) {
        super();
      }
      getName() {
        return this.n;
      }
      getParent() {
        return this.p;
      }
      async listChildren() {
        return [];
      }
      async getResource() {
        return null;
      }
      touch() {}
      async delete() {}
      async copyTo() {}
      async rename() {}
    }

    class LeafFile extends File {
      constructor(
        private readonly n: string,
        private readonly p: DirectoryRef
      ) {
        super();
      }
      getName() {
        return this.n;
      }
      getParent() {
        return this.p;
      }
      async getContents() {
        return '';
      }
      async saveContents() {}
      async size() {
        return 0;
      }
      async delete() {}
      async copyTo() {}
      async rename() {}
    }

    const root = new Root('RootA');
    const sub = new Sub('inner', root);
    const file = new LeafFile('f.txt', sub);
    const composite = new CompositeDirectory([root]);
    vi.spyOn(workspaceService, 'getWorkspaceSync').mockReturnValue(composite as any);
    expect(file.getWorkspacePath()).toBe('RootA/inner/f.txt');
    vi.mocked(workspaceService.getWorkspaceSync).mockRestore();
  });
});

describe('filesys/common WorkspaceService operations', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    getObjectMock.mockResolvedValue(null);
    persistObjectMock.mockResolvedValue(undefined);
  });

  async function loadWorkspaceModule() {
    const mod = await import('../../src/core/filesys/common');
    await mod.workspaceService.getFolders();
    return mod;
  }

  it('replaces missing contribution with unavailable when restore throws', async () => {
    getObjectMock.mockResolvedValue({
      folders: [{ type: 'bad', data: { name: 'Bad' } }],
    });
    const { workspaceService, isWorkspaceFolderPlaceholder } = await loadWorkspaceModule();
    workspaceService.registerContribution({
      type: 'bad',
      name: 'bad',
      canHandle: () => false,
      connect: async () => {
        throw new Error('unused');
      },
      restore: async () => {
        throw new Error('network down');
      },
    });
    await new Promise((r) => setTimeout(r, 0));
    const ws = await workspaceService.getWorkspace();
    const roots = await ws!.listChildren(false);
    expect(roots).toHaveLength(1);
    expect(isWorkspaceFolderPlaceholder(roots[0] as any)).toBe(true);
    expect((roots[0] as any).getFailureReason()).toBe('network down');
  });

  it('replaces missing contribution with unavailable when restore returns nothing', async () => {
    getObjectMock.mockResolvedValue({
      folders: [{ type: 'empty', data: { name: 'Empty' } }],
    });
    const { workspaceService, isWorkspaceFolderPlaceholder } = await loadWorkspaceModule();
    workspaceService.registerContribution({
      type: 'empty',
      name: 'empty',
      canHandle: () => false,
      connect: async () => {
        throw new Error('unused');
      },
      restore: async () => undefined,
    });
    await new Promise((r) => setTimeout(r, 0));
    const ws = await workspaceService.getWorkspace();
    const roots = await ws!.listChildren(false);
    expect(roots).toHaveLength(1);
    expect(isWorkspaceFolderPlaceholder(roots[0] as any)).toBe(true);
    expect((roots[0] as any).getFailureReason()).toContain('Could not restore');
  });

  it('supports getFolderInfo, updateFolderName, disconnectFolder, copyResource, and unsupported copy', async () => {
    const { workspaceService, File, Directory, Resource } = await import('../../src/core/filesys/common');

    class MemDir extends Directory {
      private readonly children = new Map<string, ResourceRef>();
      constructor(
        private readonly n: string,
        private readonly parentDir?: DirectoryRef
      ) {
        super();
      }
      getName() {
        return this.n;
      }
      getParent() {
        return this.parentDir;
      }
      async listChildren() {
        return [...this.children.values()];
      }
      addChild(r: ResourceRef) {
        this.children.set(r.getName(), r);
      }
      async getResource(path: string, options?: { create?: boolean }): Promise<ResourceRef | null> {
        const parts = path.split('/').filter(Boolean);
        if (parts.length === 0) return null;
        const [head, ...rest] = parts;
        const next = this.children.get(head);
        if (!next) {
          if (!options?.create) return null;
          if (rest.length > 0) {
            const sub = new MemDir(head, this);
            this.children.set(head, sub);
            return sub.getResource(rest.join('/'), options);
          }
          const f = new MemFile(head, this);
          this.children.set(head, f);
          return f;
        }
        if (rest.length === 0) return next;
        if (next instanceof MemDir) {
          return next.getResource(rest.join('/'), options);
        }
        return null;
      }
      touch() {}
      async delete(name?: string) {
        if (name) this.children.delete(name);
      }
      async copyTo() {}
      async rename() {}
    }

    class MemFile extends File {
      private body = '';
      constructor(
        private readonly n: string,
        private readonly parentDir: DirectoryRef
      ) {
        super();
      }
      getName() {
        return this.n;
      }
      getParent() {
        return this.parentDir;
      }
      async getContents(opts?: { blob?: boolean }) {
        if (opts?.blob) return new Blob([this.body], { type: 'text/plain' });
        return this.body;
      }
      async saveContents(c: any) {
        this.body = typeof c === 'string' ? c : await (c as Blob).text();
      }
      async size() {
        return this.body.length;
      }
      async delete() {
        const p = this.parentDir as MemDir;
        await p.delete(this.n);
      }
      async copyTo() {}
      async rename() {}
    }

    await workspaceService.getFolders();

    workspaceService.registerContribution({
      type: 'mem2',
      name: 'm2',
      canHandle: (i: any) => i?.mem2 === true,
      connect: async () => {
        const root = new MemDir('SrcRoot');
        root.addChild(new MemFile('a.txt', root));
        return root;
      },
      persist: async () => ({ mem2: true }),
    });
    workspaceService.registerContribution({
      type: 'mem3',
      name: 'm3',
      canHandle: (i: any) => i?.mem3 === true,
      connect: async () => new MemDir('DestRoot'),
      persist: async () => ({ mem3: true }),
    });

    await workspaceService.disconnectWorkspace();
    await workspaceService.connectFolder({ mem2: true });
    await workspaceService.connectFolder({ mem3: true });

    const ws = await workspaceService.getWorkspace();
    const roots = await ws!.listChildren(false);
    const srcRoot = roots.find((r) => r.getName() === 'SrcRoot') as MemDir;
    const destRoot = roots.find((r) => r.getName() === 'DestRoot') as MemDir;
    expect(srcRoot && destRoot).toBeTruthy();

    const info = await workspaceService.getFolderInfoForDirectory(srcRoot);
    expect(info?.backendName).toBe('m2');

    await workspaceService.updateFolderName(srcRoot, 'RenamedSrc');
    expect((await workspaceService.getFolderInfoForDirectory(srcRoot))?.name).toBe('RenamedSrc');

    const file = (await srcRoot.getResource('a.txt')) as MemFile;
    await file.saveContents('payload');
    await workspaceService.copyResource(file, destRoot, { newName: 'b.txt' });
    const copied = (await destRoot.getResource('b.txt')) as MemFile;
    expect(await copied.getContents()).toBe('payload');

    expect(await workspaceService.isResourceInCurrentWorkspace(file)).toBe(true);
    await workspaceService.disconnectFolder(srcRoot);
    expect(await workspaceService.isResourceInCurrentWorkspace(file)).toBe(false);

    class Weird extends Resource {
      getName() {
        return 'w';
      }
      getParent() {
        return undefined;
      }
      async delete() {}
      async copyTo() {}
      async rename() {}
    }
    await expect(workspaceService.copyResource(new Weird() as any, destRoot)).rejects.toThrow(
      'Unsupported resource type'
    );

    await workspaceService.disconnectWorkspace();
  });
});
