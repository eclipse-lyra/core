import type { CatalogContribution } from "@eclipse-docks/extension-catalog/api";
import { registerCatalog } from "@eclipse-docks/extension-catalog/api";

const NOTEBOOK_CATALOG: CatalogContribution = {
    label: "Notebooks",
    icon: "docks jupyter",
    contributionId: "catalog.notebooks",
    items: [
        {
            label: "JavaScript",
            icon: "file-code",
            contributionId: "catalog.notebooks.javascript",
            items: [
                { label: "JavaScript basics", icon: "docks jupyter", state: { url: new URL("./catalog/javascript-basics.ipynb", import.meta.url).href, filename: "javascript-basics.ipynb" } },
            ],
        },
        {
            label: "DuckDB",
            icon: "file-code",
            contributionId: "catalog.notebooks.duckdb",
            items: [
                { label: "DuckDB in notebooks", icon: "docks jupyter", state: { url: new URL("./catalog/duckdb-sample.ipynb", import.meta.url).href, filename: "duckdb-sample.ipynb" } },
            ],
        },
        {
            label: "PGlite",
            icon: "file-code",
            contributionId: "catalog.notebooks.pglite",
            items: [
                { label: "PostgreSQL in notebooks", icon: "docks jupyter", state: { url: new URL("./catalog/pglite-sample.ipynb", import.meta.url).href, filename: "pglite-sample.ipynb" } },
            ],
        },
    ],
};

export function registerNotebookCatalog(): void {
    registerCatalog(NOTEBOOK_CATALOG);
}
