import {html, nothing} from "lit";
import {customElement, property} from "lit/decorators.js";

import {
    EDITOR_AREA_MAIN,
    SIDEBAR_MAIN,
    SIDEBAR_MAIN_BOTTOM,
    SIDEBAR_AUXILIARY,
    PANEL_BOTTOM,
    TOOLBAR_MAIN,
    TOOLBAR_MAIN_CENTER,
    TOOLBAR_MAIN_RIGHT,
    TOOLBAR_BOTTOM,
    TOOLBAR_BOTTOM_CENTER,
    TOOLBAR_BOTTOM_END
} from "../core/constants";
import {LyraContainer} from "../parts/container";

@customElement('lyra-standard-layout')
export class LyraStandardLayout extends LyraContainer {
    @property({type: Boolean, attribute: 'show-bottom-sidebar'})
    showBottomSidebar: boolean = false;

    @property({type: Boolean, attribute: 'show-bottom-panel'})
    showBottomPanel: boolean = false;

    @property({type: Boolean, attribute: 'show-left-sidebar'})
    showLeftSidebar: boolean = true;

    @property({type: Boolean, attribute: 'show-aux-sidebar'})
    showAuxSidebar: boolean = true;

    createRenderRoot() {
        return this;
    }

    private getGridSizes(): string {
        if (this.showLeftSidebar && this.showAuxSidebar) {
            return "15%, 65%, 20%";
        }
        if (this.showLeftSidebar) {
            return "15%, 85%";
        }
        if (this.showAuxSidebar) {
            return "80%, 20%";
        }
        return "100%";
    }

    render() {
        return html`
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                }
                
                html {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }
                
                body {
                    height: 100%;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                
                lyra-standard-layout {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                lyra-standard-layout .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                lyra-standard-layout .toolbar-bottom {
                    width: 100%;
                    border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    display: grid;
                    grid-template-columns: 1fr 2fr auto;
                    align-items: center;
                    flex-shrink: 0;
                    min-height: 32px;
                    padding: 0 var(--wa-space-s);
                    box-sizing: border-box;
                }
                
                lyra-standard-layout .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                lyra-standard-layout .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <div class="toolbar-top">
                <lyra-toolbar id=${TOOLBAR_MAIN}></lyra-toolbar>
                <lyra-toolbar id=${TOOLBAR_MAIN_CENTER}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${TOOLBAR_MAIN_RIGHT}></lyra-toolbar>
            </div>
            
            <lyra-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes=${this.getGridSizes()}>
                
                ${this.showLeftSidebar
                    ? html`
                        ${this.showBottomSidebar
                            ? html`
                                <lyra-resizable-grid 
                                    id="left-sidebar-split" 
                                    orientation="vertical" 
                                    sizes="50%, 50%">
                                    <lyra-tabs id="${SIDEBAR_MAIN}"></lyra-tabs>
                                    <lyra-tabs id="${SIDEBAR_MAIN_BOTTOM}"></lyra-tabs>
                                </lyra-resizable-grid>
                            `
                            : html`<lyra-tabs id="${SIDEBAR_MAIN}"></lyra-tabs>`
                        }
                    `
                    : nothing
                }
                
                ${this.showBottomPanel
                    ? html`
                        <lyra-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <lyra-tabs id="${EDITOR_AREA_MAIN}"></lyra-tabs>
                            <lyra-tabs id="${PANEL_BOTTOM}"></lyra-tabs>
                        </lyra-resizable-grid>
                    `
                    : html`<lyra-tabs id="${EDITOR_AREA_MAIN}"></lyra-tabs>`
                }
                
                ${this.showAuxSidebar
                    ? html`<lyra-tabs id="${SIDEBAR_AUXILIARY}"></lyra-tabs>`
                    : nothing
                }
            </lyra-resizable-grid>
            
            <div class="toolbar-bottom">
                <lyra-toolbar id=${TOOLBAR_BOTTOM}></lyra-toolbar>
                <lyra-toolbar id=${TOOLBAR_BOTTOM_CENTER}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${TOOLBAR_BOTTOM_END}></lyra-toolbar>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'lyra-standard-layout': LyraStandardLayout;
    }
}
