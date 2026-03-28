import { LyraContainer } from "./container";
import { property } from "lit/decorators.js";
import { css, CSSResultGroup, html, PropertyValues, TemplateResult, nothing } from "lit";
import { partDirtySignal, activePartSignal } from "../core/appstate";
import { CommandStack } from "../core/commandregistry";
import { TabContribution } from "../core/contributionregistry";
import type { LyraTabs } from "./tabs";
import { ifDefined } from "lit/directives/if-defined.js";
import { LyraContextMenu } from "./contextmenu";

export abstract class LyraPart extends LyraContainer {
    protected scrollMode: 'scroller' | 'native' = 'scroller';

    @property()
    private dirty: boolean = false

    @property({ attribute: false })
    public tabContribution?: TabContribution;
    
    @property({ type: Boolean, attribute: false })
    public isEditor: boolean = false;

    protected commandStack?: CommandStack;

    public getCommandStack(): CommandStack | undefined {
        return this.commandStack;
    }

    /**
     * Override this method to provide toolbar content for this part.
     * This is a lightweight alternative to registering toolbar contributions
     * for actions that are scoped to this part instance.
     * 
     * IMPORTANT: Event handlers MUST use arrow functions to preserve the component's 'this' context.
     * The toolbar template is rendered in a different component (lyra-toolbar), so direct method 
     * references lose their binding.
     * 
     * ✅ Correct:
     *   @click=${() => this.myMethod()}
     *   @click=${(e) => this.handleClick(e)}
     * 
     * ❌ Wrong (this will be bound to the toolbar, not your component):
     *   @click=${this.myMethod}
     * 
     * Example:
     * ```typescript
     * protected renderToolbar() {
     *     return html`
     *         <wa-button @click=${() => this.save()} title="Save">
     *             <wa-icon name="save"></wa-icon>
     *         </wa-button>
     *     `;
     * }
     * ```
     * 
     * @returns TemplateResult with toolbar items, or nothing if no toolbar needed
     */
    protected renderToolbar(): TemplateResult | typeof nothing {
        return nothing;
    }

    /**
     * Activates the tab that contains this part by walking up the DOM to the first
     * lyra-tabs ancestor and activating the tab panel that contains this part.
     * Crosses Shadow DOM boundaries (e.g. wa-tab-group) via getRootNode().host.
     * No-op if this part is not inside a lyra-tabs / wa-tab-panel.
     */
    protected activateContainingTab(): void {
        let el: Element | null = this;
        let panelName: string | null = null;
        let tabsEl: Element | null = null;
        while (el) {
            const tag = el.tagName?.toLowerCase();
            if (tag === 'wa-tab-panel') {
                panelName = el.getAttribute('name');
            }
            if (tag === 'lyra-tabs') {
                tabsEl = el;
                break;
            }
            const parent: Element | null = el.parentElement;
            if (parent) {
                el = parent;
            } else {
                const root = el.getRootNode();
                el = root instanceof ShadowRoot ? (root.host as Element) : null;
            }
        }
        if (tabsEl && panelName != null && panelName !== '') {
            (tabsEl as LyraTabs).activate(panelName);
        }
    }

    /**
     * Override this method to provide context menu content for this part.
     * This is a lightweight alternative to registering context menu contributions
     * for actions that are scoped to this part instance.
     * 
     * IMPORTANT: Event handlers MUST use arrow functions to preserve the component's 'this' context.
     * The context menu is rendered in a different component (contextmenu), so direct method 
     * references lose their binding.
     * 
     * ✅ Correct:
     *   @click=${() => this.myMethod()}
     *   @click=${(e) => this.handleClick(e)}
     * 
     * ❌ Wrong (this will be bound to the context menu, not your component):
     *   @click=${this.myMethod}
     * 
     * Example:
     * ```typescript
     * protected renderContextMenu() {
     *     return html`
     *         <wa-dropdown-item @click=${() => this.open()}>
     *             <wa-icon name="folder-open"></wa-icon>
     *             Open
     *         </wa-dropdown-item>
     *         <wa-divider></wa-divider>
     *         <wa-dropdown-item @click=${() => this.delete()}>
     *             <wa-icon name="trash"></wa-icon>
     *             Delete
     *         </wa-dropdown-item>
     *     `;
     * }
     * ```
     * 
     * @returns TemplateResult with context menu items, or nothing if no context menu needed
     */
    protected renderContextMenu(): TemplateResult | typeof nothing {
        return nothing;
    }

    protected renderContent(): TemplateResult | typeof nothing {
        return nothing;
    }

    private getToolbarTarget(): string | undefined {
        const contributionKey = this.tabContribution?.editorId ?? this.id ?? this.tabContribution?.name;
        return contributionKey ? `toolbar:${contributionKey}` : undefined;
    }

    private getContextMenuTarget(): string | undefined {
        const contributionKey = this.tabContribution?.editorId ?? this.id ?? this.tabContribution?.name;
        return contributionKey ? `contextmenu:${contributionKey}` : undefined;
    }

    private onContentContextMenu = (event: MouseEvent): void => {
        const contextMenu = this.renderRoot.querySelector('lyra-contextmenu') as LyraContextMenu | null;
        if (!contextMenu) return;
        if (contextMenu.show({ x: event.clientX, y: event.clientY }, event)) {
            event.preventDefault();
        }
    };

    private syncIsEditorCapability(): void {
        const next = this.save !== LyraPart.prototype.save;
        if (next === this.isEditor) return;
        this.isEditor = next;
    }

    protected render() {
        const toolbarTarget = this.getToolbarTarget();
        const contextMenuTarget = this.getContextMenuTarget();
        const toolbarEnabled = this.tabContribution?.toolbar !== false;
        const contextMenuEnabled = this.tabContribution?.contextMenu !== false;
        const scrollMode = this.scrollMode;
        const scopeTokens = this.isEditor ? ['system.editors', '.system.editors'] : [];
        const content = this.renderContent();
        const contentNode = scrollMode === 'scroller'
            ? html`
                <wa-scroller class="part-content-scroll" orientation="vertical">
                    <div class="part-content-inner">${content}</div>
                </wa-scroller>
            `
            : html`<div class="part-content-inner">${content}</div>`;
        return html`
            <div class="part-shell">
                ${toolbarEnabled ? html`
                    <lyra-toolbar
                        class="part-toolbar"
                        id=${ifDefined(toolbarTarget)}
                        .scopeTokens=${scopeTokens}
                        .partToolbarRenderer=${() => this.renderToolbar()}>
                    </lyra-toolbar>
                ` : nothing}
                <div class="part-content ${scrollMode === 'native' ? 'native-scroll' : ''}" @contextmenu=${contextMenuEnabled ? this.onContentContextMenu : undefined}>
                    ${contentNode}
                </div>
                ${contextMenuEnabled ? html`
                    <lyra-contextmenu
                        id=${ifDefined(contextMenuTarget)}
                        .scopeTokens=${scopeTokens}
                        .partContextMenuRenderer=${() => this.renderContextMenu()}>
                    </lyra-contextmenu>
                ` : nothing}
            </div>
        `;
    }

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
        this.syncIsEditorCapability();

        if (_changedProperties.has("dirty")) {
            const dirty = _changedProperties.get("dirty")
            if (dirty !== undefined) {
                this.dispatchEvent(new CustomEvent("dirty", {detail: this.dirty, bubbles: true}))
            }
        }
    }

    protected doClose() {
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Don't automatically close when disconnected - the element might just be moving
        // Call close() explicitly when actually closing the part
    }

    public close() {
        this.doClose()
    }

    connectedCallback() {
        super.connectedCallback();
        this.syncIsEditorCapability();
        queueMicrotask(() => this.syncIsEditorCapability());
    }

    save() {
    }

    public isDirty() {
        return this.dirty
    }

    public markDirty(dirty: boolean) {
        this.dirty = dirty
        partDirtySignal.set(null as unknown as LyraPart)
        partDirtySignal.set(this)
        activePartSignal.set(null as unknown as LyraPart)
        activePartSignal.set(this)
    }

    private static readonly baseStyles = css`
        :host {
            display: block;
        }

        .part-shell {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            height: 100%;
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .part-content {
            min-height: 0;
            overflow: hidden;
            position: relative;
        }

        .part-content.native-scroll {
            overflow: auto;
        }

        .part-content-scroll {
            width: 100%;
            height: 100%;
        }

        .part-content-inner {
            height: 100%;
            min-height: 100%;
        }

        .part-toolbar {
            min-height: 0;
        }
    `;

    protected static finalizeStyles(styles?: CSSResultGroup) {
        const own = super.finalizeStyles(styles);
        return [LyraPart.baseStyles, ...own];
    }
}