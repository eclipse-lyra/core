/** Shared surface used by each variant worker entry. */
export type CereusDbApi = {
  sqlJSON: (sql: string) => Promise<Record<string, unknown>[]>;
  version: () => string;
};

type CereusWorkerMessage = {
  id: number;
  type: 'init' | 'sql' | 'version';
  sql?: string;
};

type CreateDb = () => Promise<CereusDbApi>;

export function runCereusWorker(createDb: CreateDb): void {
  let db: CereusDbApi | null = null;

  const ensureDb = async (): Promise<CereusDbApi> => {
    if (!db) {
      db = await createDb();
    }
    return db;
  };

  self.onmessage = async (e: MessageEvent<CereusWorkerMessage>) => {
    const { id, type, sql } = e.data;
    try {
      if (type === 'init') {
        await ensureDb();
        (self as unknown as Worker).postMessage({ id, ok: true });
        return;
      }
      if (type === 'sql' && typeof sql === 'string') {
        const rows = await (await ensureDb()).sqlJSON(sql);
        (self as unknown as Worker).postMessage({ id, ok: true, rows });
        return;
      }
      if (type === 'version') {
        const version = (await ensureDb()).version();
        (self as unknown as Worker).postMessage({ id, ok: true, version });
        return;
      }
      throw new Error(`Unknown CereusDB worker message: ${String(type)}`);
    } catch (err) {
      (self as unknown as Worker).postMessage({
        id,
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  };
}
