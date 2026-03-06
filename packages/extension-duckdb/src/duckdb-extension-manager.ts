import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { rootContext } from "@eclipse-lyra/core";
import type { DuckDBDatabase } from "./duckdb-service";

export const DUCKDB_AVAILABLE_EXTENSIONS: { name: string; description: string }[] = [
  { name: "json", description: "JSON file and functions" },
  { name: "parquet", description: "Parquet file support" },
  { name: "csv", description: "CSV file support" },
  { name: "httpfs", description: "HTTP(S) and S3 access" },
  { name: "fts", description: "Full-text search" },
  { name: "inet", description: "IP address types" },
  { name: "jemalloc", description: "Memory allocator" },
  { name: "substrait", description: "Substrait integration" },
];

export interface DuckDBExtensionManagerOptions {
  db: DuckDBDatabase | null;
  databaseLabel: string;
}

@customElement("lyra-duckdb-extension-manager")
export class LyraDuckDBExtensionManager extends LitElement {
  @property({ type: Boolean })
  open = false;

  @property({ attribute: false })
  db: DuckDBDatabase | null = null;

  @property()
  databaseLabel = "In-memory";

  @state()
  private selectedExtensions = new Set<string>();

  @state()
  private installing = false;

  @state()
  private installError: string | null = null;

  public configure(options: DuckDBExtensionManagerOptions) {
    this.db = options.db;
    this.databaseLabel = options.databaseLabel;
    this.selectedExtensions = new Set();
    this.installError = null;
  }

  public show() {
    this.open = true;
  }

  public hide() {
    this.open = false;
  }

  private toggleExtension(name: string) {
    const next = new Set(this.selectedExtensions);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    this.selectedExtensions = next;
    this.installError = null;
  }

  private async installSelected() {
    if (!this.db || this.selectedExtensions.size === 0) return;
    this.installing = true;
    this.installError = null;
    const toInstall = [...this.selectedExtensions];
    try {
      for (const name of toInstall) {
        await this.db.enableExtension(name);
      }
      this.selectedExtensions = new Set();
    } catch (err) {
      this.installError = err instanceof Error ? err.message : String(err);
    } finally {
      this.installing = false;
    }
  }

  render() {
    const dbReady = this.db !== null;
    const canInstall = dbReady && this.selectedExtensions.size > 0 && !this.installing;

    return html`
      <wa-dialog
        label="DuckDB extensions"
        ?open=${this.open}
        @wa-after-hide=${() => {
          this.open = false;
          this.dispatchEvent(new CustomEvent("hide", { bubbles: true, composed: true }));
        }}
      >
        <div class="extension-manager">
          <p class="extension-manager-description">
            Database: <strong>${this.databaseLabel}</strong>. Select extensions to install.
          </p>

          ${!dbReady
            ? html`
                <wa-alert variant="warning" open>
                  <wa-icon slot="icon" name="triangle-exclamation"></wa-icon>
                  Open or create a database and run a query first so a connection exists.
                </wa-alert>
              `
            : ""}

          ${this.installError
            ? html`
                <wa-alert variant="danger" open closable @wa-after-hide=${() => (this.installError = null)}>
                  <wa-icon slot="icon" name="circle-exclamation"></wa-icon>
                  ${this.installError}
                </wa-alert>
              `
            : ""}

          <div class="extension-list">
            <div class="extension-list-header">
              <strong>Available extensions</strong>
            </div>
            ${repeat(
              DUCKDB_AVAILABLE_EXTENSIONS,
              (ext) => ext.name,
              (ext) => html`
                <div class="extension-item">
                  <wa-checkbox
                    ?checked=${this.selectedExtensions.has(ext.name)}
                    ?disabled=${!dbReady}
                    @wa-change=${() => this.toggleExtension(ext.name)}
                  >
                    <span class="extension-name">${ext.name}</span>
                    <span class="extension-desc">${ext.description}</span>
                  </wa-checkbox>
                </div>
              `
            )}
          </div>
        </div>
        <div slot="footer" class="extension-manager-footer">
          <wa-button
            variant="primary"
            ?disabled=${!canInstall}
            @click=${() => this.installSelected()}
          >
            ${this.installing ? "Installing…" : `Install selected (${this.selectedExtensions.size})`}
          </wa-button>
          <wa-button variant="default" @click=${() => this.hide()}>
            Done
          </wa-button>
        </div>
      </wa-dialog>
    `;
  }

  static styles = css`
    :host {
      display: contents;
    }

    .extension-manager {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }

    .extension-manager-description {
      margin: 0;
      font-size: 0.95rem;
      opacity: 0.9;
    }

    .extension-list {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      max-height: 360px;
      overflow-y: auto;
    }

    .extension-list-header {
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--wa-color-neutral-200, #e5e7eb);
      margin-bottom: 0.25rem;
    }

    .extension-item {
      display: flex;
      align-items: center;
      padding: 0.5rem 0;
    }

    .extension-item wa-checkbox {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex: 1;
    }

    .extension-name {
      font-family: ui-monospace, monospace;
      font-size: 0.95rem;
      min-width: 6rem;
    }

    .extension-desc {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .extension-manager-footer {
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;
      padding-top: 1rem;
      border-top: 1px solid var(--wa-color-neutral-200, #e5e7eb);
    }
  `;
}

class DuckDBExtensionManagerService {
  private managerInstance: LyraDuckDBExtensionManager | null = null;

  public showExtensionManager(options: DuckDBExtensionManagerOptions): LyraDuckDBExtensionManager {
    if (!this.managerInstance) {
      this.managerInstance = document.createElement("lyra-duckdb-extension-manager") as LyraDuckDBExtensionManager;
      document.body.appendChild(this.managerInstance);
    }
    this.managerInstance.configure(options);
    this.managerInstance.show();
    return this.managerInstance;
  }

  public getManager(): LyraDuckDBExtensionManager | null {
    return this.managerInstance;
  }
}

export const duckdbExtensionManagerService = new DuckDBExtensionManagerService();
rootContext.put("duckdbExtensionManagerService", duckdbExtensionManagerService);

declare global {
  interface HTMLElementTagNameMap {
    "lyra-duckdb-extension-manager": LyraDuckDBExtensionManager;
  }
}
