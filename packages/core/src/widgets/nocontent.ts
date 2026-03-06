import {css, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'

import {LyraWidget} from "./widget";

@customElement('lyra-no-content')
export class LyraNoContent extends LyraWidget {

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
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'lyra-no-content': LyraNoContent
    }
}
