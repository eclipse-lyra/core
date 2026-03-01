import {html} from "lit";
import type {EditorInput} from "@kispace-io/core";
import {File} from "@kispace-io/core";
import {activeEditorSignal} from "@kispace-io/core";
import type {ExecutionContext} from "@kispace-io/core";
import {NotebookData, isNotebookEditorLike} from "./notebook-types";

export default ({editorRegistry, commandRegistry, contributionRegistry}: any) => {
    const INITIAL_NOTEBOOK_CONTENT: NotebookData = {
        cells: [
            {
                cell_type: 'markdown',
                source: ['Press the **Run** button in the code cell below to execute it.'],
                metadata: {}
            },
            {
                cell_type: 'code',
                source: ['print("Hello, World!")'],
                execution_count: null,
                outputs: [],
                metadata: {}
            }
        ],
        metadata: {},
        nbformat: 4,
        nbformat_minor: 4
    };
    commandRegistry.registerHandler('python', {
        ranking: 10,
        canExecute: (context: ExecutionContext) => {
            const activeEditor = activeEditorSignal.get();
            if (isNotebookEditorLike(activeEditor)) {
                const cellIndex = context.params?.cellIndex;
                if (cellIndex !== undefined) {
                    return cellIndex >= 0 && cellIndex < (activeEditor.notebook?.cells.length ?? 0);
                }
                return activeEditor.focusedCellIndex >= 0;
            }
            return false;
        },
        execute: async (context: ExecutionContext) => {
            const activeEditor = activeEditorSignal.get();
            if (isNotebookEditorLike(activeEditor)) {
                const cellIndex = context.params?.cellIndex ?? activeEditor.focusedCellIndex;
                if (cellIndex >= 0) {
                    await activeEditor.executeCell(cellIndex);
                }
            }
        }
    });

    editorRegistry.registerEditorInputHandler({
        editorId: "system.notebook-editor",
        label: "Jupyter Notebook",
        icon: "k jupyter",
        lazyInit: () => import('./notebook-runtime'),
        canHandle: (input: any) => input instanceof File && input.getName().toLowerCase().endsWith(".ipynb"),
        handle: async (input: File) => {
            const editorInput = {
                title: input.getName(),
                data: input,
                key: input.getName(),
                icon: "k jupyter",
                noOverflow: true,
                state: {},
            } as EditorInput;
            editorInput.widgetFactory = () => html`
                <k-notebook-editor .input=${editorInput}></k-notebook-editor>`;
            return editorInput;
        },
        ranking: 100,
    });

    contributionRegistry.registerContribution('filebrowser.create', {
        label: 'Jupyter Notebook',
        icon: 'k jupyter',
        command: 'touch',
        params: {
            path: "notebook.ipynb",
            extension: '.ipynb',
            ask: true,
            contents: JSON.stringify(INITIAL_NOTEBOOK_CONTENT, null, 2)
        }
    });
};


