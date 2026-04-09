import {css, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'

import {DocksWidget} from "./widget";

@customElement('docks-no-content')
export class DocksNoContent extends DocksWidget {

    @property()
    private message: string = "No content.";

    @property()
    private icon: string = "info-circle";

    render() {
        return html`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `
    }

    static styles = css`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        h3 {
            margin: 0;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            text-align: center;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'docks-no-content': DocksNoContent
    }
}
