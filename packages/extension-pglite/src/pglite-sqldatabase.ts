import type { PGlite } from '@electric-sql/pglite';
import type {
  SqlAdapterContribution,
  SqlConnectionInfo,
  SqlDatabase,
  SqlDatabaseExtensionInfo,
} from '@eclipse-docks/extension-sqleditor';
import {
  appSettings,
  toastError,
  toastInfo,
  promptDialog,
} from '@eclipse-docks/core';
import {
  listPgliteExtensions,
  loadPgliteExtensionModule,
} from './pglite-extensions';

async function createPglite(
  persistentId?: string,
  extensions?: Record<string, unknown>,
): Promise<PGlite> {
  const { PGlite: PGliteCtor } = await import('@electric-sql/pglite');
  const options =
    extensions && Object.keys(extensions).length > 0 ? { extensions } : {};
  const AnyPGlite = PGliteCtor as unknown as {
    new (dataDirOrOptions?: unknown, optionsOrUndefined?: unknown): PGlite;
  };
  return persistentId
    ? new AnyPGlite(`idb://${persistentId}`, options)
    : new AnyPGlite(options);
}
const PGLITE_DB_SETTING_KEY = 'pglite.databases';
const DB_NAME_REGEX = /^[a-zA-Z0-9_.-]+$/;

async function getDatabaseNames(): Promise<string[]> {
  const stored = await appSettings.get(PGLITE_DB_SETTING_KEY);
  if (!Array.isArray(stored)) return [];
  return stored.filter((name): name is string => typeof name === 'string').sort();
}

async function saveDatabaseNames(names: string[]): Promise<void> {
  await appSettings.set(PGLITE_DB_SETTING_KEY, [...new Set(names)].sort());
}

class PgliteSqlDatabase implements SqlDatabase {
  readonly engineId = 'pglite';

  private db: PGlite | null = null;
  private currentId: string | null = null;
  private enabledExtensions = new Set<string>();

  get currentConnectionId(): string | null {
    return this.currentId;
  }

  async listConnections(): Promise<SqlConnectionInfo[]> {
    const names = await getDatabaseNames();
    return [
      {
        id: null,
        label: 'In-memory',
        isDefault: true,
      },
      ...names.map((name) => ({
        id: name,
        label: name,
      })),
    ];
  }

  async selectConnection(id: string | null): Promise<void> {
    if (this.db && this.currentId === id) return;
    if (this.db && this.db.close) {
      await this.db.close();
    }
    this.db = null;
    const extensions = await this.resolveEnabledExtensions();
    this.db = await createPglite(id ?? undefined, extensions);
    this.currentId = id;
  }

  async readVersion(): Promise<string> {
    try {
      if (!this.db) return '';
      const result = await this.runQuery('SELECT version()');
      const full = (result.rows[0]?.[0] as string) ?? '';
      const short = full.match(/^PostgreSQL \d+\.\d+/)?.[0];
      return short ?? full;
    } catch {
      return '';
    }
  }

  async runQuery(sql: string): Promise<{ columns: string[]; rows: unknown[][] }> {
    if (!this.db) {
      await this.selectConnection(null);
    }
    if (!this.db) {
      return { columns: [], rows: [] };
    }
    const result = await this.db.query(sql);
    const rows = Array.isArray(result.rows) ? (result.rows as Record<string, unknown>[]) : [];
    if (!rows.length) return { columns: [], rows: [] };
    const columns = Object.keys(rows[0]);
    const matrix = rows.map((row) => columns.map((c) => row[c]));
    return { columns, rows: matrix };
  }

  async close(): Promise<void> {
    if (!this.db) return;
    await this.db.close?.();
    this.db = null;
    this.currentId = null;
  }

  async createConnection(): Promise<SqlConnectionInfo | null> {
    const raw = await promptDialog('New PGlite database name', '');
    if (raw == null) return null;
    const name = raw.trim();
    if (!name) {
      toastError('Name cannot be empty');
      return null;
    }
    if (!DB_NAME_REGEX.test(name)) {
      toastError('Name may only contain letters, numbers, and . _ -');
      return null;
    }
    const existing = await getDatabaseNames();
    if (existing.includes(name)) {
      toastError(`Database "${name}" already exists`);
      return null;
    }
    await saveDatabaseNames([...existing, name]);
    toastInfo(`Database "${name}" created`);
    return {
      id: name,
      label: name,
      isDefault: false,
    };
  }

  async deleteConnection(id: string): Promise<void> {
    if (!id) return;
    const names = await getDatabaseNames();
    if (!names.includes(id)) return;
    const next = names.filter((n) => n !== id);
    await saveDatabaseNames(next);
    if (this.currentId === id) {
      await this.close();
    }
  }

  async listDbExtensions(): Promise<SqlDatabaseExtensionInfo[]> {
    if (!this.db) {
      await this.selectConnection(null);
    }
    if (!this.db) {
      return listPgliteExtensions().map<SqlDatabaseExtensionInfo>((def) => ({
        id: def.id,
        label: def.label,
        description: def.description,
        installed: false,
      }));
    }

    const result = await this.db.query('SELECT extname FROM pg_extension');
    const rows = Array.isArray(result.rows)
      ? (result.rows as Record<string, unknown>[])
      : [];
    const installedNames = new Set(
      rows
        .map((row) => row.extname)
        .filter((name): name is string => typeof name === 'string'),
    );

    return listPgliteExtensions().map<SqlDatabaseExtensionInfo>((def) => ({
      id: def.id,
      label: def.label,
      description: def.description,
      installed: installedNames.has(def.id),
    }));
  }

  async enableDbExtension(id: string): Promise<void> {
    this.enabledExtensions.add(id);
    if (this.db) {
      await this.db.close?.();
      this.db = null;
    }
    await this.selectConnection(this.currentId ?? null);
    if (!this.db) return;
    const db = this.db as PGlite;
    await db.query(`CREATE EXTENSION IF NOT EXISTS ${id};`);
  }

  private async resolveEnabledExtensions(): Promise<
    Record<string, unknown> | undefined
  > {
    if (!this.enabledExtensions.size) {
      return undefined;
    }
    const entries: [string, unknown][] = await Promise.all(
      [...this.enabledExtensions].map(
        async (extId): Promise<[string, unknown]> => [
          extId,
          await loadPgliteExtensionModule(extId),
        ],
      ),
    );
    const result: Record<string, unknown> = {};
    for (const [extId, ext] of entries) {
      result[extId] = ext;
    }
    return result;
  }
}

export const pgliteSqlAdapterContribution: SqlAdapterContribution = {
  id: 'pglite',
  label: 'PostgreSQL (PGlite)',
  icon: 'database',
  loader: async () => new PgliteSqlDatabase(),
};

