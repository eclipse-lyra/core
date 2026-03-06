import { customElement, property, state } from "lit/decorators.js";
import { LyraPart } from "@eclipse-lyra/core";
import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { EditorInput, EditorContentProvider } from "@eclipse-lyra/core";
import type { LyraMonacoWidget } from "./monaco-widget";

@customElement('lyra-monaco-editor')
export class LyraMonacoEditor extends LyraPart implements EditorContentProvider {
    @property({ attribute: false })
    public input?: EditorInput;
    @property()
    public readOnly: boolean = false;

    @state()
    private initialContent: string | undefined = undefined;
    @state()
    private initialUri: string | undefined = undefined;
    @state()
    private initialLanguage: string | undefined = undefined;

    private widgetRef = createRef<LyraMonacoWidget>();

    protected async doInitUI() {
        const file = this.input!.data;
        const textContents = await file.getContents();
        this.initialContent = textContents;
        this.initialUri = file.getName();
        this.initialLanguage = undefined;
        this.requestUpdate();
    }

    private _onContentChange = () => {
        this.markDirty(true);
    };

    public getEditor() {
        return this.widgetRef.value?.getEditor() ?? undefined;
    }

    save(): void {
        const value = this.widgetRef.value?.getContent() ?? '';
        this.input?.data.saveContents(value);
        this.markDirty(false);
    }

    protected doClose() {
        this.widgetRef.value?.dispose();
    }

    public getLanguage(): string | null {
        return this.widgetRef.value?.getLanguage() ?? null;
    }

    public isLanguage(lang: string): boolean {
        return this.widgetRef.value?.isLanguage(lang) ?? false;
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

    render() {
        if (this.initialContent === undefined) {
            return html`<div class="monaco-editor-placeholder"></div>`;
        }
        return html`
            <lyra-monaco-widget
                .value=${this.initialContent}
                .uri=${this.initialUri}
                .language=${this.initialLanguage}
                .readOnly=${this.readOnly}
                @content-change=${this._onContentChange}
                ${ref(this.widgetRef)}
            ></lyra-monaco-widget>
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
        .monaco-editor-placeholder {
            flex: 1;
            min-height: 0;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'lyra-monaco-editor': LyraMonacoEditor;
    }
}
