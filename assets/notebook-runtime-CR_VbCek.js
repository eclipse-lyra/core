import{d as a,h as k,C as f,c as b,k as C,j as y,m as v,b as $,n as x,e as h,t as _}from"./vendor-DlX8FWQM.js";import{L as K,A,s as R,z as E,c as M,J as I}from"./monaco-Cp131h44.js";import{T as w}from"./pglite-FiEFosRY.js";var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,d=(e,t,l,n)=>{for(var i=n>1?void 0:n?T(t,l):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,l,i):s(i))||i);return n&&i&&S(t,l,i),i};const m=I("NotebookRuntime");let c=class extends K{constructor(){super(...arguments),this.cellOutputs=new Map,this.executingCells=new Set,this.availableKernels=[],this.selectedKernelId=null,this.kernel=null,this.kernelConnected=!1,this.kernelConnecting=!1,this.kernelVersion=void 0,this.editingMarkdownCells=new Set,this.executionCounter=0,this.isRunningAll=!1,this.highlightedCellIndex=-1,this.focusedCellIndex=-1,this.cancelRunAll=!1,this.cellWidgetRefs=new Map,this.cellHeights=new Map}doClose(){this.input=void 0,this.notebook=void 0,this.cellOutputs.clear(),this.executingCells.clear(),this.cellWidgetRefs.clear(),this.cellHeights.clear(),this.focusedCellIndex=-1,this.unsubscribeContributionsToken&&(A(this.unsubscribeContributionsToken),this.unsubscribeContributionsToken=void 0),this.kernel?.close&&Promise.resolve(this.kernel.close()),this.kernel=null,this.kernelConnected=!1,this.kernelVersion=void 0}async save(){if(!(!this.notebook||!this.input))try{this.saveEditorContents(),this.notebook.cells.forEach((l,n)=>{if(l.cell_type==="code"){const i=this.cellOutputs.get(n);l.outputs=i?this.convertOutputToJupyter(i,l.execution_count):[]}});const e=JSON.stringify(this.notebook,null,2);await this.input.data.saveContents(e),this.markDirty(!1)}catch(e){throw console.error("Failed to save notebook:",e),e}}doBeforeUI(){this.loadNotebook()}async onKernelDropdownSelect(e){const l=(e.detail?.item?.value??"")||null;this.selectedKernelId!==l&&(this.kernel?.close&&Promise.resolve(this.kernel.close()),this.kernel=null,this.kernelConnected=!1,this.kernelVersion=void 0,this.selectedKernelId=l,this.notebook&&(this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.kernel=l??void 0),this.cellOutputs.clear(),this.executionCounter=0,this.notebook?.cells?.forEach(n=>{n.cell_type==="code"&&(n.execution_count=null,n.outputs=[])}),this.resetCellState(),await this.ensureKernelLoaded(),this.requestUpdate(),this.updateToolbar())}renderToolbar(){const e=this.availableKernels;e.length>0;const t=this.selectedKernelId?e.find(s=>s.id===this.selectedKernelId)?.label??this.selectedKernelId:"Select kernel",l=this.kernelConnecting?"Connecting...":this.kernelConnected?"Kernel connected":"Kernel disconnected",n=this.kernelConnecting?"Connecting...":this.kernelConnected?this.kernelVersion??"Connected":"Not connected",i=this.kernelConnected?"var(--wa-color-green-40)":this.kernelConnecting?"var(--wa-color-warning-500)":"var(--wa-color-red-40)",o=this.isRunningAll?a`
            <wa-button size="small" appearance="plain" @click=${()=>this.cancelAllCells()} title="Cancel running all cells">
                <wa-icon name="stop" label="Stop"></wa-icon>
                Cancel All
            </wa-button>
        `:a`
            <wa-button size="small" appearance="plain" @click=${()=>this.runAllCells()} title="Run all code cells sequentially">
                <wa-icon name="play" label="Run"></wa-icon>
                Run All
            </wa-button>
        `;return a`
            <wa-dropdown
                class="kernel-select"
                placement="bottom-start"
                distance="4"
                size="small"
                @wa-select=${s=>{this.onKernelDropdownSelect(s)}}
            >
                <wa-button
                    slot="trigger"
                    appearance="plain"
                    size="small"
                    with-caret
                    title="Notebook kernel"
                >
                    ${t}
                </wa-button>
                ${e.map(s=>a`
                        <wa-dropdown-item
                            value=${s.id}
                            type="checkbox"
                            ?checked=${s.id===this.selectedKernelId}
                        >
                            ${s.label}
                        </wa-dropdown-item>
                    `)}
            </wa-dropdown>
            ${o}
            <wa-button
                size="small"
                appearance="plain"
                @click=${()=>this.clearAllOutputs()}
                title="Clear all outputs and reset execution counter"
            >
                <wa-icon name="eraser" label="Clear"></wa-icon>
                Clear Outputs
            </wa-button>
            ${this.kernel?.restart?a`
                <wa-button
                    size="small"
                    appearance="plain"
                    @click=${()=>{this.restartKernel()}}
                    title="Restart kernel"
                    ?disabled=${!this.kernelConnected||this.kernelConnecting}
                >
                    <wa-icon name="arrows-rotate" label="Restart"></wa-icon>
                    Restart Kernel
                </wa-button>
            `:""}
            ${this.kernel?.openPackageManager?a`
                <wa-button
                    size="small"
                    appearance="plain"
                    @click=${()=>this.openPackageManager()}
                    title="Manage packages"
                >
                    <wa-icon name="box" label="Packages"></wa-icon>
                    Packages
                </wa-button>
            `:""}
            ${this.kernel?this.kernel.connect?a`
                <wa-button
                    appearance="plain"
                    size="small"
                    style="display: flex; align-items: center; gap: 0.5rem;"
                    ?disabled=${this.kernelConnecting}
                    @click=${()=>{this.connectKernel()}}
                    title=${l}
                >
                    <wa-icon name="circle" label="Kernel status" style=${k({color:i})}></wa-icon>
                    ${n}
                </wa-button>
            `:a`
                <span style="display: flex; align-items: center; gap: 0.5rem;" title=${l}>
                    <wa-icon name="circle" label="Kernel status" style=${k({color:i})}></wa-icon>
                    ${n}
                </span>
            `:""}
        `}async connectKernel(){if(!(this.kernelConnecting||!this.kernel?.connect))try{this.kernelConnecting=!0,this.requestUpdate(),this.updateToolbar(),await this.kernel.connect({requiredPackages:this.notebook?.metadata?.required_packages}),this.kernelConnected=!0,this.kernel.getVersion&&(this.kernelVersion=await this.kernel.getVersion())}catch(e){m.error("Failed to connect kernel",e)}finally{this.kernelConnecting=!1,this.requestUpdate(),this.updateToolbar()}}async doInitUI(){this.unsubscribeContributionsToken=R(E,e=>{e?.target===w&&this.refreshKernels()}),await this.refreshKernels()}resolveDefaultKernelId(e){if(!e.length)return null;const t=this.notebook?.metadata?.kernel;if(t&&e.some(i=>i.id===t))return t;const l=e.find(i=>i.id==="python");if(l)return l.id;const n=e.find(i=>i.id==="javascript");return n?n.id:e[0].id}async refreshKernels(){const e=M.getContributions(w);this.availableKernels=e,!this.selectedKernelId&&e.length&&(this.selectedKernelId=this.resolveDefaultKernelId(e),this.notebook&&this.selectedKernelId&&(this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.kernel=this.selectedKernelId)),this.selectedKernelId&&!e.some(t=>t.id===this.selectedKernelId)&&(this.selectedKernelId=e.length?e[0].id:null),this.requestUpdate(),await this.ensureKernelLoaded(),this.updateToolbar()}async ensureKernelLoaded(){const e=this.selectedKernelId;if(!e||this.kernel?.id===e)return;this.kernel?.close&&Promise.resolve(this.kernel.close()),this.kernel=null,this.kernelConnected=!1,this.kernelVersion=void 0;const t=this.availableKernels.find(l=>l.id===e);if(t)try{this.kernelConnecting=!0,this.requestUpdate(),this.updateToolbar();const l=await t.loadKernel();if(this.selectedKernelId!==e)return;this.kernel=l,l.connect&&await l.connect({requiredPackages:this.notebook?.metadata?.required_packages}),this.kernelConnected=!0,l.getVersion&&(this.kernelVersion=await l.getVersion())}catch(l){m.error("Failed to load kernel",e,l)}finally{this.kernelConnecting=!1,this.requestUpdate(),this.updateToolbar()}}async loadNotebook(){const t=await this.input.data.getContents();try{this.notebook=JSON.parse(t)}catch(l){console.error("Failed to parse notebook:",l),this.notebook={cells:[{cell_type:"markdown",source:[`# Error
Failed to parse notebook file.`]}]}}if(this.notebook?.metadata?.kernel&&(this.selectedKernelId=this.notebook.metadata.kernel),this.notebook?.cells){const l=this.notebook.cells.filter(n=>n.cell_type==="code").map(n=>n.execution_count??0).reduce((n,i)=>Math.max(n,i),0);this.executionCounter=l,this.notebook.cells.forEach((n,i)=>{if(n.cell_type==="code"&&n.outputs&&n.outputs.length>0){const o=this.convertOutputFromJupyter(n.outputs[0]);o&&this.cellOutputs.set(i,o)}})}this.refreshKernels()}getCellSource(e){return Array.isArray(e.source)?e.source.join(""):e.source}convertOutputToJupyter(e,t){if(e.type==="execute_result"){const l={};return e.imageData&&(l["image/png"]=e.imageData),e.data&&(l["text/plain"]=e.data),[{output_type:"execute_result",data:l,execution_count:t,metadata:{}}]}else if(e.type==="error")return[{output_type:"error",ename:"Error",evalue:e.data,traceback:[e.data]}];return[]}convertOutputFromJupyter(e){return e.output_type==="execute_result"&&e.data?{type:"execute_result",data:e.data["text/plain"]||"",imageData:e.data["image/png"]||void 0}:e.output_type==="error"?{type:"error",data:e.evalue||e.traceback?.join(`
`)||"Unknown error"}:null}renderHeaderActions(e,t){return a`
            <div class="cell-header-actions">
                ${t||""}
                ${t?a`<span class="divider"></span>`:""}
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(e,"code")} title="Add code cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="code" label="Code"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(e,"markdown")} title="Add markdown cell before">
                    <wa-icon name="plus"></wa-icon>
                    <wa-icon name="font" label="Markdown"></wa-icon>
                </wa-button>
                <span class="divider"></span>
                <wa-button size="small" appearance="plain" @click=${()=>this.deleteCell(e)} title="Delete cell" ?disabled=${this.notebook.cells.length<=1}>
                    <wa-icon name="trash" label="Delete cell"></wa-icon>
                </wa-button>
            </div>
        `}renderFooterActions(e){return a`
            <div class="cell-footer">
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(e+1,"code")} title="Add code cell after">
                    <wa-icon name="code" label="Code"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
                <wa-button size="small" appearance="plain" @click=${()=>this.addCell(e+1,"markdown")} title="Add markdown cell after">
                    <wa-icon name="font" label="Markdown"></wa-icon>
                    <wa-icon name="plus"></wa-icon>
                </wa-button>
            </div>
        `}stringToSourceArray(e){if(!e)return[""];const t=e.split(`
`).map(l=>l+`
`);return t.length>0&&(t[t.length-1]=t[t.length-1].replace(/\n$/,"")),t}createCell(e){const t={cell_type:e,source:[""],metadata:{}};return e==="code"&&(t.execution_count=null,t.outputs=[]),t}async executeCell(e){const t=this.notebook.cells[e];if(t.cell_type==="code"){this.executingCells.add(e),this.requestUpdate();try{await this.ensureKernelLoaded();const l=this.kernel;if(!l){this.executingCells.has(e)&&this.cellOutputs.set(e,{type:"error",data:"No kernel selected"});return}const n=this.getCellWidgetRef(e).value,i=n?n.getContent():this.getCellSource(t);if(i==null)return;const o=await l.execute(i);o.error?this.cellOutputs.set(e,{type:"error",data:o.error}):this.cellOutputs.set(e,{type:"execute_result",data:o.data,imageData:o.imageData}),this.executionCounter++,t.execution_count=this.executionCounter,this.markDirty(!0)}catch(l){this.executingCells.has(e)&&this.cellOutputs.set(e,{type:"error",data:l instanceof Error?l.message:String(l)})}finally{this.executingCells.delete(e),this.requestUpdate()}}}cancelExecution(e){this.kernel?.interrupt?this.kernel.interrupt():(this.cellOutputs.set(e,{type:"error",data:"Cancellation not supported for this kernel"}),this.executingCells.delete(e),this.requestUpdate())}clearAllOutputs(){this.cellOutputs.clear(),this.executionCounter=0,this.notebook?.cells&&this.notebook.cells.forEach(e=>{e.cell_type==="code"&&(e.execution_count=null,e.outputs=[])}),this.markDirty(!0),this.requestUpdate()}async restartKernel(){if(!(!this.kernel?.restart||this.kernelConnecting))try{this.kernelConnecting=!0,this.requestUpdate(),this.updateToolbar(),await this.kernel.restart(),this.kernelConnected=!0,this.kernel.getVersion&&(this.kernelVersion=await this.kernel.getVersion())}catch(e){m.error("Failed to restart kernel",e)}finally{this.kernelConnecting=!1,this.requestUpdate(),this.updateToolbar()}}async runAllCells(){if(this.notebook?.cells){this.isRunningAll=!0,this.cancelRunAll=!1,this.requestUpdate();try{for(let e=0;e<this.notebook.cells.length&&!this.cancelRunAll;e++)this.notebook.cells[e].cell_type==="code"&&await this.executeCell(e)}finally{this.isRunningAll=!1,this.cancelRunAll=!1,this.requestUpdate()}}}cancelAllCells(){this.cancelRunAll=!0,this.kernel?.interrupt?.()}toggleMarkdownEdit(e){this.editingMarkdownCells.has(e)?this.editingMarkdownCells.delete(e):this.editingMarkdownCells.add(e),this.requestUpdate()}saveMarkdownEdit(e,t){const n=t.target.value;if(this.notebook&&this.notebook.cells[e]){const i=this.notebook.cells[e],o=this.getCellSource(i);i.source=this.stringToSourceArray(n),o!==n&&this.markDirty(!0)}this.editingMarkdownCells.delete(e),this.requestUpdate()}renderMarkdownCell(e,t){const l=this.getCellSource(e),n=!l||l.trim()==="";if(this.editingMarkdownCells.has(t)){const r=a`
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${u=>{const p=u.target.closest(".markdown-cell")?.querySelector("textarea");p&&this.saveMarkdownEdit(t,{target:p})}}
                    title="Save changes">
                    <wa-icon name="check" label="Save"></wa-icon>
                </wa-button>
                <wa-button 
                    size="small" 
                    appearance="plain"
                    @click=${()=>this.toggleMarkdownEdit(t)}
                    title="Cancel editing">
                    <wa-icon name="xmark" label="Cancel"></wa-icon>
                </wa-button>
            `;return a`
                <div class="cell-wrapper">
                    <wa-animation 
                        name="bounce" 
                        duration="1000" 
                        iterations="1"
                        ?play=${this.highlightedCellIndex===t}
                        @wa-finish=${()=>this.highlightedCellIndex=-1}>
                        <div class="cell markdown-cell editing">
                            <div class="cell-header">
                                ${this.renderHeaderActions(t,r)}
                                <span class="cell-label">Markdown</span>
                            </div>
                            <textarea 
                                class="markdown-editor"
                                .value=${l}
                                @blur=${u=>this.saveMarkdownEdit(t,u)}
                                placeholder="Enter markdown content here... (# for headings, ** for bold, etc.)"></textarea>
                            ${this.renderFooterActions(t)}
                        </div>
                    </wa-animation>
                </div>
            `}const o=f.parse(l),s=a`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.toggleMarkdownEdit(t)}
                title="Edit markdown">
                <wa-icon name="pencil" label="Edit"></wa-icon>
            </wa-button>
        `;return a`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===t}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell markdown-cell ${n?"empty":""}" @dblclick=${()=>this.toggleMarkdownEdit(t)}>
                        <div class="cell-header">
                            ${this.renderHeaderActions(t,s)}
                            <span class="cell-label"></span>
                        </div>
                        <div class="cell-content">
                            ${n?a`
                                <div class="markdown-placeholder">
                                    <wa-icon name="font" label="Markdown"></wa-icon>
                                    <span>Double-click or click the pencil icon to edit markdown</span>
                                </div>
                            `:b(o)}
                        </div>
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCodeCell(e,t){const l=this.cellOutputs.get(t),n=this.executingCells.has(t),i=this.getCellSource(e),o=this.kernel?.language??"javascript",r=`${this.input?.data?.getWorkspacePath?.()??"notebook"}-cell-${t}`,u=this.cellHeights.get(t)??Math.max(100,i.split(`
`).length*19+10),p=n?a`
            <wa-button 
                size="small" 
                appearance="plain"
                @click=${()=>this.cancelExecution(t)}
                title="Stop execution">
                <wa-icon name="stop" label="Stop" style="color: var(--wa-color-danger-500);"></wa-icon>
            </wa-button>
        `:a`
            <lyra-command 
                cmd="notebook.runCell"
                icon="play"
                title="Run cell"
                size="small"
                appearance="plain"
                .params=${{cellIndex:t}}>
            </lyra-command>
        `;return a`
            <div class="cell-wrapper">
                <wa-animation 
                    name="bounce" 
                    duration="1000" 
                    iterations="1"
                    ?play=${this.highlightedCellIndex===t}
                    @wa-finish=${()=>this.highlightedCellIndex=-1}>
                    <div class="cell code-cell ${n?"executing":""}">
                        <div class="cell-header">
                            <span class="cell-label">
                                ${n?a`
                                    In [<wa-animation name="pulse" duration="1000" iterations="Infinity" ?play=${n}>
                                        <span class="executing-indicator">*</span>
                                    </wa-animation>]
                                `:a`
                                    In [${e.execution_count??" "}]
                                `}
                            </span>
                            ${this.renderHeaderActions(t,p)}
                        </div>
                        <div
                            class="cell-input monaco-container"
                            style=${k({height:`${u}px`})}
                            @wheel=${g=>this.onCellWheel(t,g)}
                        >
                            <lyra-monaco-widget
                                .value=${i}
                                .language=${o}
                                .uri=${r}
                                ?autoLayout=${!0}
                                @content-change=${()=>this.markDirty(!0)}
                                @editor-focus=${()=>{this.focusedCellIndex=t}}
                                @editor-blur=${()=>{this.focusedCellIndex===t&&(this.focusedCellIndex=-1)}}
                                @content-height-changed=${g=>this.onCellHeightChange(t,g.detail.height)}
                                ${C(this.getCellWidgetRef(t))}
                            ></lyra-monaco-widget>
                        </div>
                        ${l?a`
                            <div class="cell-output ${l.type==="error"?"output-error":""}">
                                <div class="output-label">Out [${t+1}]:</div>
                                ${l.imageData?a`
                                    <img src="data:image/png;base64,${l.imageData}" alt="Output image" class="output-image" />
                                `:""}
                                ${l.data?a`<pre><code>${l.data}</code></pre>`:""}
                            </div>
                        `:""}
                        ${this.renderFooterActions(t)}
                    </div>
                </wa-animation>
            </div>
        `}renderCell(e,t){if(e.cell_type==="markdown")return this.renderMarkdownCell(e,t);if(e.cell_type==="code")return this.renderCodeCell(e,t);{const l=this.getCellSource(e);return a`
                <div class="cell raw-cell">
                    <pre><code>${l}</code></pre>
                </div>
            `}}addCell(e,t="code"){this.notebook&&(this.saveEditorContents(),this.shiftIndices(e,"up"),this.notebook.cells.splice(e,0,this.createCell(t)),t==="markdown"&&this.editingMarkdownCells.add(e),this.resetCellState(),this.highlightedCellIndex=e,this.updateComplete.then(()=>{this.scrollToCell(e)}))}scrollToCell(e){const t=this.shadowRoot?.querySelectorAll(".cell-wrapper")[e];if(!t)return;const l=this.closest("wa-scroller");if(!l){t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});return}const n=l.getBoundingClientRect(),i=t.getBoundingClientRect(),s=l.scrollTop+(i.top-n.top)-n.height/2+i.height/2;l.scrollTo({top:s,behavior:"smooth"})}saveEditorContents(){this.notebook?.cells.forEach((e,t)=>{if(e.cell_type!=="code")return;const n=this.getCellWidgetRef(t).value?.getContent();n!=null&&(e.source=this.stringToSourceArray(n))})}resetCellState(){this.markDirty(!0)}deleteCell(e){!this.notebook||this.notebook.cells.length<=1||(this.saveEditorContents(),this.cellOutputs.delete(e),this.executingCells.delete(e),this.editingMarkdownCells.delete(e),this.notebook.cells.splice(e,1),this.shiftIndices(e,"down"),this.resetCellState())}shiftIndices(e,t){const l=t==="up"?1:-1,n=t==="up"?r=>r>=e:r=>r>e,i=t==="up"?(r,u)=>u-r:(r,u)=>r-u,o=r=>{Array.from(r.keys()).filter(n).sort(i).forEach(p=>{const g=r.get(p);r.delete(p),r.set(p+l,g)})},s=r=>{Array.from(r).filter(n).sort(i).forEach(p=>{r.delete(p),r.add(p+l)})};o(this.cellOutputs),s(this.executingCells),s(this.editingMarkdownCells),o(this.cellWidgetRefs),o(this.cellHeights)}getCellWidgetRef(e){return this.cellWidgetRefs.has(e)||this.cellWidgetRefs.set(e,y()),this.cellWidgetRefs.get(e)}onCellHeightChange(e,t){const i=Math.max(100,t+10);this.cellHeights.get(e)!==i&&(this.cellHeights=new Map(this.cellHeights),this.cellHeights.set(e,i),this.requestUpdate(),this.updateComplete.then(()=>this.getCellWidgetRef(e).value?.layout?.()))}onCellWheel(e,t){const n=this.getCellWidgetRef(e).value?.getEditor();if(!n)return;const i=n.getScrollTop(),o=n.getScrollHeight(),s=n.getContentHeight(),r=o>s,u=t.deltaY<0&&i<=0||t.deltaY>0&&i+s>=o;(!r||u)&&t.stopImmediatePropagation()}openPackageManager(){if(!this.kernel?.openPackageManager)return;const e=this.notebook?.metadata?.required_packages??[];this.kernel.openPackageManager({requiredPackages:e,onPackageAdded:t=>{this.notebook&&(this.notebook.metadata||(this.notebook.metadata={}),this.notebook.metadata.required_packages||(this.notebook.metadata.required_packages=[]),this.notebook.metadata.required_packages.includes(t)||(this.notebook.metadata.required_packages.push(t),this.markDirty(!0)))},onPackageRemoved:t=>{if(!this.notebook?.metadata?.required_packages)return;const l=this.notebook.metadata.required_packages.indexOf(t);l>-1&&(this.notebook.metadata.required_packages.splice(l,1),this.markDirty(!0))}})}updated(e){super.updated(e),(e.has("kernelConnected")||e.has("kernelConnecting")||e.has("kernelVersion")||e.has("isRunningAll")||e.has("availableKernels")||e.has("selectedKernelId"))&&this.updateToolbar()}render(){return this.notebook?a`
            <div class="noteboocells">
                ${v(this.notebook.cells,(e,t)=>t,(e,t)=>this.renderCell(e,t))}
            </div>
        `:a`<div class="loading">Loading notebook...</div>`}};c.styles=$`
        :host {
            display: block;
            width: 100%;
        }

        .kernel-select {
            max-width: 10rem;
        }

        .noteboocells {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
            width: 100%;
            box-sizing: border-box;
        }

        .cell-wrapper {
            position: relative;
        }

        .cell {
            border-radius: 4px;
            overflow: hidden;
            opacity: 0.9;
            position: relative;
        }

        .cell-header-actions {
            display: flex;
            gap: 0.25rem;
            align-items: center;
            opacity: 0.5;
            transition: opacity 0.2s;
        }

        .cell-header-actions .divider {
            width: 1px;
            height: 1rem;
            background: var(--wa-color-outline);
            margin: 0 0.25rem;
            opacity: 0.5;
        }

        .cell-header:hover .cell-header-actions {
            opacity: 1;
        }

        .cell-footer {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: flex-start;
            padding: 0.5rem;
            border-top: 1px solid var(--wa-color-outline);
            opacity: 0.5;
            transition: opacity 0.2s;
        }

        .cell-footer:hover {
            opacity: 1;
        }

        .markdown-cell {
            cursor: pointer;
            transition: opacity 0.2s;
        }

        .markdown-cell:hover:not(.editing) {
            opacity: 0.9;
        }
        
        .markdown-cell .cell-content {
            padding: 1rem;
        }

        .markdown-cell.editing {
            cursor: default;
            padding: 0;
        }
        
        .markdown-cell.editing .cell-actions {
            display: none;
        }

        .markdown-editor {
            width: 100%;
            min-height: 200px;
            padding: 1rem;
            font-family: monospace;
            font-size: 0.95rem;
            line-height: 1.6;
            border: none;
            outline: none;
            resize: vertical;
            background: transparent;
            color: inherit;
        }

        .code-cell {
            border-left: 3px solid var(--wa-color-primary-500);
            transition: all 0.3s ease;
        }
        
        .code-cell.executing {
            border-left: 4px solid var(--wa-color-primary-500);
            box-shadow: 0 0 0 2px var(--wa-color-primary-500, rgba(59, 130, 246, 0.3));
            animation: pulse-cell 2s ease-in-out infinite;
        }
        
        @keyframes pulse-cell {
            0%, 100% {
                box-shadow: 0 0 0 2px var(--wa-color-primary-500, rgba(59, 130, 246, 0.3));
                opacity: 1;
            }
            50% {
                box-shadow: 0 0 0 4px var(--wa-color-primary-500, rgba(59, 130, 246, 0.5));
                opacity: 0.95;
            }
        }

        .cell-header {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            flex-wrap: nowrap;
        }

        .cell-label {
            font-family: monospace;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .executing-indicator {
            display: inline-block;
            color: var(--wa-color-primary-500);
            font-weight: bold;
            font-size: 1.2em;
        }

        .cell-input {
            margin: 0;
        }

        .monaco-container {
            min-height: 100px;
            height: auto;
            width: 100%;
        }

        .cell-output {
            padding: 1rem;
        }

        .output-label {
            font-family: monospace;
            font-weight: bold;
            margin-bottom: 0.5rem;
            opacity: 0.7;
        }

        .cell-output pre {
            margin: 0;
            overflow-x: auto;
        }

        .cell-output code {
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
        }

        .output-image {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0.5rem 0;
            border-radius: 4px;
        }

        .output-error {
            border-left: 3px solid var(--wa-color-danger-500);
        }

        .raw-cell {
            padding: 1rem;
        }

        .raw-cell pre {
            margin: 0;
        }

        .loading {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-size: 1.2rem;
        }

        .markdown-placeholder {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            padding: 3rem 1rem;
            opacity: 0.5;
            font-style: italic;
            transition: opacity 0.2s;
        }

        .markdown-cell.empty:hover .markdown-placeholder {
            opacity: 0.8;
        }

        .markdown-placeholder wa-icon {
            font-size: 1.5rem;
        }
    `;d([x({attribute:!1})],c.prototype,"input",2);d([h()],c.prototype,"notebook",2);d([h()],c.prototype,"cellOutputs",2);d([h()],c.prototype,"executingCells",2);d([h()],c.prototype,"availableKernels",2);d([h()],c.prototype,"selectedKernelId",2);d([h()],c.prototype,"kernel",2);d([h()],c.prototype,"kernelConnected",2);d([h()],c.prototype,"kernelConnecting",2);d([h()],c.prototype,"kernelVersion",2);d([h()],c.prototype,"editingMarkdownCells",2);d([h()],c.prototype,"executionCounter",2);d([h()],c.prototype,"isRunningAll",2);d([h()],c.prototype,"highlightedCellIndex",2);d([h()],c.prototype,"cellHeights",2);c=d([_("lyra-notebook-editor")],c);export{c as LyraNotebookEditor};
