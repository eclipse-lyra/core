import type {
  NotebookExecutionResult,
  NotebookKernel,
  NotebookKernelContribution,
} from '@eclipse-lyra/extension-notebook';
import { TARGET_NOTEBOOK_KERNELS } from '@eclipse-lyra/extension-notebook';
import { duckdbSqlAdapterContribution } from './duckdb-sqldatabase';
import type { SqlDatabase } from '@eclipse-lyra/extension-sqleditor';

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

class DuckdbNotebookKernel implements NotebookKernel {
  readonly id = 'duckdb';
  readonly label = 'DuckDB';
  readonly language = 'sql';

  private db: SqlDatabase | null = null;

  private async getDb(): Promise<SqlDatabase> {
    if (!this.db) {
      this.db = await duckdbSqlAdapterContribution.loader();
      await this.db.selectConnection(null);
    }
    return this.db;
  }

  async getVersion(): Promise<string | undefined> {
    try {
      const db = await this.getDb();
      const result = await db.runQuery("SELECT version()");
      return (result.rows[0]?.[0] as string) ?? undefined;
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

export const duckdbNotebookKernelContribution: NotebookKernelContribution = {
  id: 'duckdb',
  label: 'DuckDB',
  language: 'sql',
  loadKernel: async (): Promise<NotebookKernel> => new DuckdbNotebookKernel(),
};
