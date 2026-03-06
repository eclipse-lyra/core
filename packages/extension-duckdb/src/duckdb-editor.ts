import { customElement, property, state } from "lit/decorators.js";
import { LyraPart } from "@eclipse-lyra/core";
import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { styleMap } from "lit/directives/style-map.js";
import { EditorInput, EditorContentProvider, toastError, toastInfo, promptDialog, confirmDialog, activePartSignal } from "@eclipse-lyra/core";
import { LyraMonacoWidget } from "@eclipse-lyra/extension-monaco-editor";
import { duckdbService, duckdbExtensionManagerService, type DuckDBDatabase, type DuckDBQueryResult } from "./api";

const MAX_TAB_LABEL = 28;
const DB_NAME_REGEX = /^[a-zA-Z0-9_.-]+$/;

interface ResultTab {
  id: string;
  label: string;
  sql: string;
  result: DuckDBQueryResult | { error: string };
}

function truncateLabel(sql: string): string {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  if (oneLine.length <= MAX_TAB_LABEL) return oneLine;
  return oneLine.slice(0, MAX_TAB_LABEL) + "…";
}

@customElement("lyra-duckdb-editor")
export class LyraDuckDBEditor extends LyraPart implements EditorContentProvider {
  @property({ attribute: false })
  public input?: EditorInput;

  @property({ type: Boolean })
  public readOnly = false;

  @state()
  private initialContent: string | undefined = undefined;

  @state()
  private initialUri: string | undefined = undefined;

  @state()
  private resultTabs: ResultTab[] = [];

  @state()
  private activeResultId: string | null = null;

  @state()
  private running = false;

  @state()
  private availableDatabases: string[] = [];

  @state()
  private selectedDbName: string | null = null;

  private widgetRef = createRef<LyraMonacoWidget>();
  private tabGroupRef = createRef<HTMLElement & { active: string }>();
  private tabIdCounter = 0;
  private db: DuckDBDatabase | null = null;

  protected async doInitUI() {
    const file = this.input!.data;
    const textContents = await file.getContents();
    this.initialContent = textContents;
    this.initialUri = file.getName();
    this.watch(activePartSignal, () => {
      if (activePartSignal.get() === this) this.refreshDatabaseList();
    });
    await this.refreshDatabaseList();
    this.requestUpdate();
  }

  private async refreshDatabaseList(): Promise<void> {
    try {
      this.availableDatabases = await duckdbService.listDatabases();
    } catch {
      this.availableDatabases = [];
    }
    this.requestUpdate();
    this.updateToolbar();
  }

  private _onContentChange = () => {
    this.markDirty(true);
  };

  save(): void {
    const value = this.widgetRef.value?.getContent() ?? "";
    this.input?.data.saveContents(value);
    this.markDirty(false);
  }

  protected doClose() {
    this.widgetRef.value?.dispose();
    if (this.db) {
      void this.db.close();
      this.db = null;
    }
  }

  public getLanguage(): string | null {
    return "sql";
  }

  public isLanguage(lang: string): boolean {
    return lang.toLowerCase() === "sql";
  }

  public getContent(): string | null {
    return this.widgetRef.value?.getContent() ?? null;
  }

  public getSelection(): string | null {
    return this.widgetRef.value?.getSelection() ?? null;
  }

  public getSnippet(lines: number = 5): { snippet: string; cursorLine: number } | null {
    return this.widgetRef.value?.getSnippet(lines) ?? null;
  }

  public getFilePath(): string | null {
    return this.input?.data?.getWorkspacePath() ?? null;
  }

  private async runQuery(useSelectionOnly = false): Promise<void> {
    const sql = useSelectionOnly
      ? this.getSelection()?.trim()
      : (this.getSelection()?.trim() || this.getContent()?.trim());
    if (!sql) {
      toastError(useSelectionOnly ? "No selection to run" : "No SQL to run");
      return;
    }
    if (this.running) return;

    this.running = true;
    const id = `result-${++this.tabIdCounter}`;
    const label = truncateLabel(sql);
    this.resultTabs = [...this.resultTabs, { id, label, sql, result: { columns: [], rows: [] } }];
    this.activeResultId = id;
    this.requestUpdate();
    this.updateToolbar();

    const timeoutMs = 60_000;
    const timeoutId = window.setTimeout(() => this.clearRunningState(), timeoutMs);

    try {
      const dbName = this.selectedDbName ?? undefined;
      if (!this.db || this.db.name !== (dbName ?? null)) {
        if (this.db) {
          void this.db.close();
          this.db = null;
        }
        this.db = await duckdbService.open(dbName);
      }
      const result = await this.db.runQuery(sql);
      this.resultTabs = this.resultTabs.map((t) =>
        t.id === id ? { ...t, result } : t
      );
    } catch (err) {
      const error = err instanceof Error ? err.message : String(err);
      this.resultTabs = this.resultTabs.map((t) =>
        t.id === id ? { ...t, result: { error } } : t
      );
    } finally {
      window.clearTimeout(timeoutId);
      this.running = false;
      this.activeResultId = id;
      this.requestUpdate();
      this.updateToolbar();
    }
  }

  private clearRunningState(): void {
    if (this.running) {
      this.running = false;
      this.requestUpdate();
      this.updateToolbar();
    }
  }

  private closeTab(id: string): void {
    const idx = this.resultTabs.findIndex((t) => t.id === id);
    if (idx < 0) return;
    const next = this.resultTabs.filter((t) => t.id !== id);
    this.resultTabs = next;
    if (this.activeResultId === id) {
      const prevIdx = Math.min(idx, next.length - 1);
      this.activeResultId = next[prevIdx]?.id ?? null;
    }
    this.requestUpdate();
    this.updateToolbar();
  }

  private renderResultPanel(tab: ResultTab) {
    if ("error" in tab.result) {
      return html`
        <div class="result-error">
          <pre>${tab.result.error}</pre>
        </div>
      `;
    }
    const { columns, rows } = tab.result;
    if (columns.length === 0 && rows.length === 0) {
      return html`<div class="result-empty">Query returned no rows.</div>`;
    }
    return html`
      <div class="result-table-wrap">
        <table class="result-table">
          <thead>
            <tr>
              ${columns.map((col) => html`<th>${col}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${rows.map(
              (row) => html`
                <tr>
                  ${row.map((cell) => html`<td>${String(cell ?? "")}</td>`)}
                </tr>
              `
            )}
          </tbody>
        </table>
      </div>
    `;
  }

  private onDatabaseChange(e: Event) {
    const select = e.target as { value?: string };
    const value = select?.value ?? "";
    const next = value === "" ? null : value;
    if (this.selectedDbName === next) return;
    this.selectedDbName = next;
    if (this.db) {
      void this.db.close();
      this.db = null;
    }
    this.requestUpdate();
  }

  private async addNewDatabase(): Promise<void> {
    const raw = await promptDialog("New database name", "");
    if (raw == null) return;
    const name = raw.trim();
    if (!name) {
      toastError("Name cannot be empty");
      return;
    }
    if (!DB_NAME_REGEX.test(name)) {
      toastError("Name may only contain letters, numbers, and . _ -");
      return;
    }
    if (this.availableDatabases.includes(name)) {
      toastError(`Database "${name}" already exists`);
      return;
    }
    try {
      const newDb = await duckdbService.open(name);
      await newDb.close();
      this.selectedDbName = name;
      if (this.db) {
        void this.db.close();
        this.db = null;
      }
      await this.refreshDatabaseList();
      toastInfo(`Database "${name}" created`);
    } catch (err) {
      toastError(err instanceof Error ? err.message : String(err));
    }
  }

  private async deleteSelectedDatabase(): Promise<void> {
    const name = this.selectedDbName;
    const label = name === null ? "In-memory" : name;
    const ok = await confirmDialog(`Delete database "${label}"?`);
    if (!ok) return;
    if (name === null) {
      if (this.db) {
        void this.db.close();
        this.db = null;
      }
    } else {
      try {
        await duckdbService.delete(name);
        if (this.db?.name === name) this.db = null;
        this.selectedDbName = null;
        await this.refreshDatabaseList();
      } catch (err) {
        toastError(err instanceof Error ? err.message : String(err));
        return;
      }
    }
    this.requestUpdate();
    this.updateToolbar();
  }

  protected renderToolbar() {
    const dbValue = this.selectedDbName ?? "";
    return html`
      <wa-select
        class="db-select"
        size="small"
        value=${dbValue}
        title="Database (OPFS)"
        @change=${(e: Event) => this.onDatabaseChange(e)}
      >
        <wa-option value="">In-memory</wa-option>
        ${this.availableDatabases.map(
          (name) => html`<wa-option value=${name}>${name}</wa-option>`
        )}
      </wa-select>
      <wa-button
        size="small"
        appearance="plain"
        title="New database"
        @click=${() => this.addNewDatabase()}
      >
        <wa-icon name="plus" label="New"></wa-icon>
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        title=${this.selectedDbName === null ? "Clear in-memory database" : `Delete database "${this.selectedDbName}"`}
        @click=${() => this.deleteSelectedDatabase()}
      >
        <wa-icon name="trash" label="Delete"></wa-icon>
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        title="Manage DuckDB extensions"
        @click=${() =>
          duckdbExtensionManagerService.showExtensionManager({
            db: this.db,
            databaseLabel: this.selectedDbName === null ? "In-memory" : this.selectedDbName,
          })}
      >
        <wa-icon name="puzzle-piece" label="Extensions"></wa-icon>
        Extensions
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${this.running}
        @click=${() => this.runQuery(true)}
        title="Run selection only"
      >
        <wa-icon name="i-cursor" label="Run selection"></wa-icon>
        ${this.running ? "Running…" : "Run selection"}
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${this.running}
        @click=${() => this.runQuery(false)}
        title="Run all SQL"
      >
        <wa-icon name="play" label="Run"></wa-icon>
        ${this.running ? "Running…" : "Run all"}
      </wa-button>
    `;
  }

  protected updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has("resultTabs") || changedProperties.has("running")) {
      this.updateToolbar();
    }
    const activeId = this.activeResultId ?? this.resultTabs[0]?.id ?? "";
    if (activeId && this.tabGroupRef.value && this.tabGroupRef.value.active !== activeId) {
      this.tabGroupRef.value.active = activeId;
    }
  }

  render() {
    if (this.initialContent === undefined) {
      return html`<div class="editor-placeholder"></div>`;
    }

    const hasResults = this.resultTabs.length > 0;
    const activeId = this.activeResultId ?? this.resultTabs[0]?.id ?? "";

    return html`
      <wa-split-panel
        class="editor-split"
        orientation="vertical"
        position="60"
      >
        <div slot="start" class="editor-area">
          <lyra-monaco-widget
            .value=${this.initialContent}
            .uri=${this.initialUri}
            .language=${"sql"}
            .readOnly=${this.readOnly}
            @content-change=${this._onContentChange}
            ${ref(this.widgetRef)}
          ></lyra-monaco-widget>
        </div>
        <div slot="end" class="results-area">
          ${hasResults
            ? html`
                <wa-tab-group
                  class="result-tabs"
                  .active=${activeId}
                  ${ref(this.tabGroupRef)}
                  @wa-tab-show=${(e: CustomEvent<{ name: string }>) => {
                    this.activeResultId = e.detail?.name ?? null;
                  }}
                >
                  ${this.resultTabs.flatMap((tab) => [
                    html`<wa-tab panel="${tab.id}">${tab.label}</wa-tab>`,
                    html`<wa-button
                      slot="nav"
                      tabindex="-1"
                      appearance="plain"
                      size="small"
                      class="tab-close"
                      title="Close tab"
                      @click=${() => this.closeTab(tab.id)}
                    >
                      <wa-icon name="xmark" label="Close"></wa-icon>
                    </wa-button>`,
                    html`<wa-tab-panel name="${tab.id}">${this.renderResultPanel(tab)}</wa-tab-panel>`,
                  ])}
                </wa-tab-group>
              `
            : html`
                <div class="results-empty">
                  Run a query to see results in a new tab.
                </div>
              `}
        </div>
      </wa-split-panel>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      height: 100%;
    }
    .db-select {
      max-width: 10rem;
    }
    .editor-split {
      flex: 1;
      min-height: 0;
      height: 100%;
    }
    .editor-area,
    .results-area {
      height: 100%;
      min-height: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .editor-area monaco-widget {
      flex: 1;
      min-height: 0;
    }
    .editor-placeholder {
      flex: 1;
      min-height: 0;
    }
    .result-tabs {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }
    .result-tabs::part(body) {
      flex: 1;
      min-height: 0;
      overflow: auto;
    }
    .result-tabs .tab-close {
      margin-left: -0.25rem;
      padding: 0.2rem;
    }
    .results-empty {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--wa-color-neutral-500, #6b7280);
      font-size: 0.875rem;
    }
    .result-table-wrap {
      overflow: auto;
      padding: 0.75rem;
    }
    .result-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.8125rem;
    }
    .result-table th,
    .result-table td {
      padding: 0.35rem 0.75rem;
      text-align: left;
      border-bottom: 1px solid var(--wa-color-neutral-200, #e5e7eb);
    }
    .result-table th {
      font-weight: 600;
      background: var(--wa-color-neutral-100, #f3f4f6);
    }
    .result-table tbody tr:hover {
      background: var(--wa-color-neutral-50, #f9fafb);
    }
    .result-error {
      padding: 0.75rem;
      color: var(--wa-color-red-60, #dc2626);
      font-family: ui-monospace, monospace;
      font-size: 0.8125rem;
    }
    .result-error pre {
      margin: 0;
      white-space: pre-wrap;
    }
    .result-empty {
      padding: 0.75rem;
      color: var(--wa-color-neutral-500, #6b7280);
      font-size: 0.875rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "lyra-duckdb-editor": LyraDuckDBEditor;
  }
}
