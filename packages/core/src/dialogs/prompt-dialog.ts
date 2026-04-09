import { html, css, PropertyValues } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { DocksDialogContent } from "../parts/dialog-content";
import { contributionRegistry } from "../core/contributionregistry";
import { DIALOG_CONTRIBUTION_TARGET, OK_BUTTON, CANCEL_BUTTON, DialogContribution, dialogService } from "../core/dialogservice";

@customElement('docks-prompt-dialog-content')
export class DocksPromptDialogContent extends DocksDialogContent {
    @property({ type: String })
    message: string = '';

    @property({ type: String, attribute: 'default-value' })
    defaultValue: string = '';

    @property({ type: Boolean })
    markdown: boolean = false;

    @state()
    private inputValue: string = '';

    static styles = [
        ...DocksDialogContent.styles,
        css`
            wa-input {
                width: 100%;
            }
        `
    ];

    async firstUpdated(changedProperties: PropertyValues) {
        super.firstUpdated(changedProperties);
        this.inputValue = this.defaultValue;

        await this.updateComplete;
        const input = this.shadowRoot?.querySelector('wa-input');
        if (input) {
            const inputEl = (input as any).shadowRoot?.querySelector('input');
            if (inputEl) {
                inputEl.focus();
                inputEl.select();
            }
        }
    }

    getResult(): string | null {
        return this.inputValue;
    }

    private handleInput(e: Event) {
        this.inputValue = (e.target as any).value;
    }

    private handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('dialog-ok', { bubbles: true, composed: true }));
        } else if (e.key === 'Escape') {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('dialog-cancel', { bubbles: true, composed: true }));
        }
    }

    render() {
        return html`
            ${this.renderMessage(this.message, this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'docks-prompt-dialog-content': DocksPromptDialogContent;
    }
}

contributionRegistry.registerContribution(DIALOG_CONTRIBUTION_TARGET, {
    id: 'prompt',
    label: 'Input',
    buttons: [OK_BUTTON, CANCEL_BUTTON],
    component: (state?: any) => {
        if (!state) {
            return html`<div>Error: No prompt dialog state</div>`;
        }
        
        return html`
            <docks-prompt-dialog-content 
                .message="${state.message}"
                .defaultValue="${state.defaultValue}"
                .markdown="${state.markdown}"
            ></docks-prompt-dialog-content>
        `;
    },
    onButton: async (id: string, result: any, state?: any) => {
        if (!state) {
            return true;
        }
        
        if (id === 'ok') {
            state.resolve(result || '');
        } else {
            state.resolve(null);
        }
        
        return true;
    }
});

export async function promptDialog(message: string, defaultValue: string = '', markdown: boolean = false): Promise<string | null> {
    return new Promise((resolve) => {
        dialogService.open('prompt', {
            message,
            defaultValue,
            markdown,
            resolve
        });
    });
}