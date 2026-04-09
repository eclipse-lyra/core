import type {
  NotebookExecutionResult,
  NotebookKernel,
  NotebookKernelContribution,
} from '@eclipse-docks/extension-notebook';
import { TARGET_NOTEBOOK_KERNELS } from '@eclipse-docks/extension-notebook';
import type { SqlDatabase } from '@eclipse-docks/extension-sqleditor';
import { pgliteSqlAdapterContribution } from './pglite-sqldatabase';

function formatResult(columns: string[], rows: unknown[][]): string {
  if (columns.length === 0 && rows.length === 0) return '';
  const pad = (s: string, w: number) => s.padEnd(w);
  const colWidths = columns.map((c, i) => {
    const maxVal = rows.reduce((m, r) => Math.max(m, String(r[i] ?? '').length), 0);
    return Math.max(c.length, maxVal, 1);
  });
  const sep = colWidths.map((w) => '-'.repeat(w)).join('-+-');
  const header = columns.map((c, i) => pad(c, colWidths[i])).join(' | ');
  const lineRows = rows.map((row) =>
    row.map((v, i) => pad(String(v ?? ''), colWidths[i])).join(' | ')
  );
  return [header, sep, ...lineRows].join('\n');
}

class PgliteNotebookKernel implements NotebookKernel {
  readonly id = 'pglite';
  readonly label = 'PostgreSQL (PGlite)';
  readonly language = 'sql';

  private db: SqlDatabase | null = null;

  private async getDb(): Promise<SqlDatabase> {
    if (!this.db) {
      this.db = await pgliteSqlAdapterContribution.loader();
      await this.db.selectConnection(null);
    }
    return this.db;
  }

  async getVersion(): Promise<string | undefined> {
    try {
      const db = await this.getDb();
      const result = await db.runQuery('SELECT version()');
      const full = (result.rows[0]?.[0] as string) ?? '';
      const short = full.match(/^PostgreSQL \d+\.\d+/)?.[0];
      return short ?? (full || undefined);
    } catch {
      return undefined;
    }
  }

  async execute(code: string): Promise<NotebookExecutionResult> {
    try {
      const db = await this.getDb();
      const result = await db.runQuery(code);
      const data = formatResult(result.columns, result.rows);
      return { data: data || undefined };
    } catch (err) {
      return {
        error: err instanceof Error ? err.message : String(err),
      };
    }
  }

  close(): void {
    if (this.db) {
      void this.db.close();
      this.db = null;
    }
  }
}

export const pgliteNotebookKernelContribution: NotebookKernelContribution = {
  id: 'pglite',
  label: 'PostgreSQL (PGlite)',
  language: 'sql',
  loadKernel: async (): Promise<NotebookKernel> => new PgliteNotebookKernel(),
};
