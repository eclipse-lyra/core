import { DocksPart } from '@eclipse-docks/core';
import { customElement } from 'lit/decorators.js';
import { html } from '@eclipse-docks/core/externals/lit';

@customElement('e2e-coupled-panel')
export class E2eCoupledPanel extends DocksPart {
    protected renderContent() {
        return html`<div data-testid="e2e-coupled-panel-inner">E2E coupled panel</div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'e2e-coupled-panel': E2eCoupledPanel;
    }
}
