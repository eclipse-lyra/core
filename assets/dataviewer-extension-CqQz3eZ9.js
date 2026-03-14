import{b as S,n as $,e as u,a as P,d as l,t as x,l as C,P as D}from"./vendor-CbQe4k-6.js";import{s as L,z as d,x as T,L as _,A as V,t as f,v as z,c as I,P as O,j as E,F as N}from"./monaco-wqKCAqma.js";function j(){return crypto.randomUUID()}const K="dataview/publish",A="dataview/added",y="dataview/",m=y+"index";class q{init(){this.subscriptionToken===void 0&&(this.subscriptionToken=L(K,e=>{this.handlePublish(e)}))}async handlePublish(e){const a=j(),s=Date.now(),i={id:e.id??a,title:e.title,data:e.data,source:e.source,createdAt:s};await d.persistObject(y+a,i);const o=await d.getObject(m),n=Array.isArray(o)?o:[];n.push({storageKey:a,title:e.title,source:e.source,createdAt:s}),await d.persistObject(m,n),T(A,{storageKey:a,title:e.title,createdAt:s})}async listViews(){const e=await d.getObject(m);return!Array.isArray(e)||e.length===0?[]:typeof e[0]=="string"?e.map(s=>({storageKey:s,title:s,createdAt:0})):[...e].sort((s,i)=>s.createdAt-i.createdAt)}async getView(e){return await d.getObject(y+e)??null}async deleteView(e){const a=await d.getObject(m),s=Array.isArray(a)?a.filter(i=>i.storageKey!==e):[];await d.persistObject(m,s),await d.persistObject(y+e,null)}async clearAllViews(){const e=await d.getObject(m),a=Array.isArray(e)?e:[];await Promise.all(a.map(s=>d.persistObject(y+s.storageKey,null))),await d.persistObject(m,[])}}const p=new q;var F=Object.defineProperty,R=Object.getOwnPropertyDescriptor,w=(t,e,a,s)=>{for(var i=s>1?void 0:s?R(e,a):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(s?n(e,a,i):n(i))||i);return s&&i&&F(e,a,i),i};function v(t){return t==null?"":String(t)}function U(t,e){return t.length===0?!1:t.every(a=>{const s=a[e];if(s==null)return!0;const i=Number(s);return Number.isFinite(i)})}function k(t,e,a){if(a){const s=Number(t),i=Number(e);return Number.isFinite(s)?Number.isFinite(i)?s-i:-1:Number.isFinite(i)?1:0}return v(t).localeCompare(v(e),void 0,{numeric:!0})}let c=class extends P{constructor(){super(...arguments),this.data={columns:[],rows:[]},this.emptyMessage="No data.",this.sortColumnIndex=null,this.sortDirection="asc",this.filterQuery="",this.pageSize=25,this.currentPage=0}get columns(){return Array.isArray(this.data?.columns)?this.data.columns:[]}get rows(){return Array.isArray(this.data?.rows)?this.data.rows:[]}get filteredRows(){const t=this.filterQuery.trim().toLowerCase();return t?this.rows.filter(e=>e.some(a=>v(a).toLowerCase().includes(t))):this.rows}get sortedRows(){const t=this.filteredRows;if(this.sortColumnIndex==null||this.sortColumnIndex<0)return t;const e=this.sortColumnIndex,a=U(t,e),s=this.sortDirection==="asc"?1:-1;return[...t].sort((i,o)=>{const n=i[e],r=o[e];return s*k(n,r,a)})}get totalRows(){return this.sortedRows.length}get pageCount(){const t=this.totalRows;return t===0?1:Math.ceil(t/this.pageSize)}get pagedRows(){const t=this.sortedRows,a=this.clampedPage*this.pageSize;return t.slice(a,a+this.pageSize)}get clampedPage(){const t=this.pageCount;return t<=0?0:Math.min(this.currentPage,t-1)}goToPage(t){const e=Math.max(0,this.pageCount-1);this.currentPage=Math.max(0,Math.min(t,e)),this.requestUpdate()}onPageSizeChange(t){const e=t.target.value,a=parseInt(e,10);!Number.isFinite(a)||a<1||(this.pageSize=a,this.currentPage=0,this.requestUpdate())}onSort(t){this.sortColumnIndex===t?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumnIndex=t,this.sortDirection="asc"),this.requestUpdate()}onFilterInput(t){this.filterQuery=t.target.value,this.requestUpdate()}clearFilter(){this.filterQuery="",this.requestUpdate()}getSortAria(t){return this.sortColumnIndex!==t?"none":this.sortDirection==="asc"?"ascending":"descending"}render(){const{columns:t}=this,e=this.totalRows,a=this.pagedRows,s=this.clampedPage,i=this.pageCount,o=e===0?0:s*this.pageSize+1,n=Math.min((s+1)*this.pageSize,e);return t.length===0&&e===0&&this.rows.length===0?l`<div class="table-empty">${this.emptyMessage}</div>`:l`
      <div class="table-toolbar">
        <wa-input
          class="filter-input"
          placeholder="Filter…"
          .value=${this.filterQuery}
          @input=${this.onFilterInput}
          @wa-clear=${this.clearFilter}
          with-clear
          size="small"
          aria-label="Filter rows"
        >
          <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
        </wa-input>
        <div class="paging-controls">
          <wa-select
            class="page-size-select"
            size="small"
            .value=${String(this.pageSize)}
            title="Rows per page"
            @change=${this.onPageSizeChange}
          >
            ${c.PAGE_SIZE_OPTIONS.map(r=>l`<wa-option value=${String(r)}>${r}</wa-option>`)}
          </wa-select>
          <span class="paging-summary" aria-live="polite">
            ${e===0?"0 rows":`${o}–${n} of ${e}`}
          </span>
          <wa-button
            size="small"
            appearance="plain"
            title="Previous page"
            ?disabled=${i<=1||s<=0}
            @click=${()=>this.goToPage(s-1)}
          >
            <wa-icon name="chevron-left" label="Previous"></wa-icon>
          </wa-button>
          <wa-button
            size="small"
            appearance="plain"
            title="Next page"
            ?disabled=${i<=1||s>=i-1}
            @click=${()=>this.goToPage(s+1)}
          >
            <wa-icon name="chevron-right" label="Next"></wa-icon>
          </wa-button>
        </div>
      </div>
      <div class="table-wrap">
        <table class="result-table">
          <thead>
            <tr>
              ${t.map((r,g)=>l`
                  <th scope="col" role="columnheader" aria-sort=${this.getSortAria(g)}>
                    <button
                      type="button"
                      class="th-sort"
                      @click=${()=>this.onSort(g)}
                      title="Sort by ${r}"
                    >
                      <span class="th-label">${r}</span>
                      ${this.sortColumnIndex===g?l`<wa-icon
                            name=${this.sortDirection==="asc"?"arrow-up":"arrow-down"}
                            label=${this.sortDirection}
                          ></wa-icon>`:l`<wa-icon name="arrows-up-down" label="Sort"></wa-icon>`}
                    </button>
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${a.length===0?l`<tr><td colspan=${t.length} class="table-empty-cell">No matching rows.</td></tr>`:a.map(r=>l`
                    <tr>
                      ${r.map(g=>l`<td>${v(g)}</td>`)}
                    </tr>
                  `)}
          </tbody>
        </table>
      </div>
    `}};c.PAGE_SIZE_OPTIONS=[10,25,50,100];c.styles=S`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
    }
    .table-empty {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    .table-toolbar {
      flex: none;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.25rem 0;
      flex-wrap: wrap;
    }
    .filter-input {
      max-width: 280px;
    }
    .paging-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
    }
    .page-size-select {
    }
    .paging-summary {
      font-size: 0.8125rem;
      color: var(--wa-color-text-quiet);
      min-width: 5rem;
    }
    .table-wrap {
      flex: 1;
      min-height: 0;
      overflow: auto;
      border: 1px solid var(--wa-color-neutral-border-quiet);
      border-radius: var(--wa-border-radius-medium, 0.25rem);
    }
    .result-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
      color: var(--wa-color-text-normal);
    }
    .result-table th,
    .result-table td {
      padding: 0.5rem 0.75rem;
      text-align: left;
      border-bottom: 1px solid var(--wa-color-neutral-border-quiet);
    }
    .result-table th {
      position: sticky;
      top: 0;
      z-index: 1;
      background: var(--wa-color-surface-lowered);
      font-weight: 600;
      white-space: nowrap;
      color: var(--wa-color-text-normal);
      box-shadow: 0 1px 0 0 var(--wa-color-neutral-border-quiet);
    }
    .result-table tbody tr:nth-child(even) td {
      background: var(--wa-color-surface-default);
    }
    .result-table tbody tr:nth-child(odd) td {
      background: var(--wa-color-surface-lowered);
    }
    .result-table tbody tr:hover td {
      background: var(--wa-color-neutral-fill-normal);
    }
    .th-sort {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      width: 100%;
      padding: 0;
      border: none;
      background: none;
      font: inherit;
      cursor: pointer;
      color: inherit;
      text-align: left;
    }
    .th-sort:hover {
      opacity: 0.85;
    }
    .th-label {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .th-sort wa-icon {
      flex-shrink: 0;
      opacity: 0.7;
      font-size: 0.75em;
    }
    .table-empty-cell {
      color: var(--wa-color-text-quiet);
      font-style: italic;
      text-align: center;
    }
  `;w([$({attribute:!1})],c.prototype,"data",2);w([$({type:String})],c.prototype,"emptyMessage",2);w([u()],c.prototype,"sortColumnIndex",2);w([u()],c.prototype,"sortDirection",2);w([u()],c.prototype,"filterQuery",2);w([u()],c.prototype,"pageSize",2);w([u()],c.prototype,"currentPage",2);c=w([x("lyra-data-table")],c);var M=Object.defineProperty,W=Object.getOwnPropertyDescriptor,b=(t,e,a,s)=>{for(var i=s>1?void 0:s?W(e,a):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(s?n(e,a,i):n(i))||i);return s&&i&&M(e,a,i),i};let h=class extends _{constructor(){super(...arguments),this.dataview=null,this.persistedList=[],this.selectedStorageKey="",this.selectedView=null,this.loadingList=!0,this.autoActivateTab=!0}get displayed(){return this.selectedView??this.dataview}get hasData(){const t=this.displayed;if(!t)return!1;const{columns:e,rows:a}=t.data;return Array.isArray(e)&&Array.isArray(a)&&(e.length>0||a.length>0)}toCsv(t){const{columns:e,rows:a}=t.data,s=n=>{if(n==null)return"";const r=String(n);return/[",\n]/.test(r)?`"${r.replace(/"/g,'""')}"`:r},i=e.map(s).join(","),o=a.map(n=>n.map(s).join(",")).join(`
`);return o?`${i}
${o}`:i}async onExportCsv(){const t=this.displayed;if(!(!t||!this.hasData))try{const e=this.toCsv(t),a=t.title?.trim()||"dataview",s=new Date().toISOString().replace(/[:.]/g,"-"),i=`${a.replace(/[^a-zA-Z0-9-_]+/g,"_")}-${s}.csv`,o=await V("directory");if(!o)return;this.executeCommand("touch",{path:`${o}/${i}`,contents:e})}catch(e){f(e instanceof Error?e.message:String(e))}}async doInitUI(){const t=await this.getDialogSetting();t&&typeof t.autoActivateTab=="boolean"&&(this.autoActivateTab=t.autoActivateTab),this.subscribe(A,async()=>{await this.refreshPersistedList(!0),this.autoActivateTab&&this.activateContainingTab()}),await this.refreshPersistedList(!1)}async refreshPersistedList(t){this.loadingList=!0,this.requestUpdate();try{if(this.persistedList=await p.listViews(),t&&this.persistedList.length>0){const e=this.persistedList[this.persistedList.length-1];this.selectedStorageKey=e.storageKey,this.selectedView=await p.getView(e.storageKey)}else this.selectedStorageKey?this.selectedView=await p.getView(this.selectedStorageKey):this.selectedView=null}catch(e){f(e instanceof Error?e.message:String(e)),this.persistedList=[],this.selectedView=null}finally{this.loadingList=!1,this.requestUpdate(),this.updateToolbar()}}async selectStorageKey(t){if(this.selectedStorageKey=t,!t){this.selectedView=null,this.requestUpdate(),this.updateToolbar();return}try{this.selectedView=await p.getView(t)}catch(e){f(e instanceof Error?e.message:String(e)),this.selectedView=null}this.requestUpdate(),this.updateToolbar()}async onAutoActivateChange(t){const e=t.target.checked;this.autoActivateTab=e;const a=await this.getDialogSetting()??{};await this.setDialogSetting({...a,autoActivateTab:e}),this.updateToolbar()}async onHistorySelect(t){const e=t.detail?.item?.value??"";!e||e==="__stats__"||await this.selectStorageKey(e)}async onDeleteView(t,e){t.stopPropagation(),t.preventDefault();try{await p.deleteView(e),this.selectedStorageKey===e&&(this.selectedStorageKey="",this.selectedView=null),await this.refreshPersistedList(!0)}catch(a){f(a instanceof Error?a.message:String(a))}}async onClearHistory(){try{await p.clearAllViews(),this.selectedStorageKey="",this.selectedView=null,await this.refreshPersistedList(!1)}catch(t){f(t instanceof Error?t.message:String(t))}}renderToolbar(){const t=this.selectedView??this.dataview,e=this.persistedList.find(r=>r.storageKey===this.selectedStorageKey),a=e?.title??t?.title??(this.persistedList.length>0?"Latest data view":"No data"),s=e?.createdAt??t?.createdAt?new Date(e?.createdAt??t?.createdAt).toLocaleString():null,i=t?.source??null,o=i?`${a} · ${i}`:a,n=s?`${o} (${s})`:o;return l`
        <wa-dropdown
          placement="bottom-start"
          distance="4"
          size="small"
          hoist
          @wa-select=${r=>this.onHistorySelect(r)}
        >
          <wa-button
            slot="trigger"
            appearance="plain"
            size="small"
            with-caret
            title="Data view history"
          >
            <wa-icon name="clock-rotate-left" label="History"></wa-icon>
          </wa-button>

          <wa-dropdown-item value="__stats__" disabled>
            ${this.persistedList.length} data view${this.persistedList.length===1?"":"s"}
            ${this.persistedList.length>0?l`
                  <wa-button
                    slot="details"
                    appearance="plain"
                    size="small"
                    title="Clear history"
                    @click=${()=>this.onClearHistory()}
                  >
                    <wa-icon name="trash" label="Clear history"></wa-icon>
                  </wa-button>
                `:null}
          </wa-dropdown-item>

          ${this.persistedList.map(r=>l`
              <wa-dropdown-item value=${r.storageKey}>
                ${r.source?`${r.title} · ${r.source}`:r.title}
                ${r.createdAt?l`<span style="opacity: 0.7; margin-left: 0.5rem; font-size: 0.75em;">
                      (${new Date(r.createdAt).toLocaleString()})
                    </span>`:null}
                <wa-button
                  slot="details"
                  appearance="plain"
                  size="small"
                  title="Delete data view"
                  @click=${g=>this.onDeleteView(g,r.storageKey)}
                >
                  <wa-icon name="trash" label="Delete"></wa-icon>
                </wa-button>
              </wa-dropdown-item>
            `)}

        </wa-dropdown>

        <wa-divider orientation="vertical"></wa-divider>

        <wa-button
          size="small"
          appearance="plain"
          title="Export current data view to CSV"
          ?disabled=${!this.hasData}
          @click=${()=>this.onExportCsv()}
        >
          <wa-icon name="file-csv" label="Export CSV"></wa-icon>
        </wa-button>

        <wa-switch
          ?checked=${this.autoActivateTab}
          size="small"
          title="Switch to this tab when new results arrive"
          @change=${r=>this.onAutoActivateChange(r)}
          style="margin-top: 0.5rem;"
        >
          Auto-show
        </wa-switch>

        ${C(t,()=>l`<wa-divider orientation="vertical"></wa-divider><span>${n}</span>`)}
    `}renderTable(t){return this.hasData?l`<lyra-data-table .data=${t.data}></lyra-data-table>`:l`<div class="result-empty">No data.</div>`}render(){const t=this.displayed;return t!=null?this.renderTable(t):l`<div class="result-empty">No data.</div>`}};h.styles=S`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .result-empty {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
  `;b([$({attribute:!1})],h.prototype,"dataview",2);b([u()],h.prototype,"persistedList",2);b([u()],h.prototype,"selectedStorageKey",2);b([u()],h.prototype,"selectedView",2);b([u()],h.prototype,"loadingList",2);b([u()],h.prototype,"autoActivateTab",2);h=b([x("lyra-dataview")],h);function H(t){const e=D.parse(t,{header:!0,skipEmptyLines:!0}),a=e.meta.fields??[],s=e.data.map(i=>a.map(o=>i[o]));return{columns:a,rows:s}}p.init();z.put("dataviewerService",p);I.registerContribution(O,{name:"view.dataviewer",label:"Data Views",icon:"table",component:t=>l`<lyra-dataview id="${t}"></lyra-dataview>`});E.registerEditorInputHandler({editorId:"system.dataviewer-table",label:"Table",icon:"table",ranking:800,canHandle:t=>{if(!(t instanceof N))return!1;const e=t.getName().toLowerCase();return e.endsWith(".csv")||e.endsWith(".tsv")},handle:async t=>{t.getName();const e=await t.getContents(),{columns:a,rows:s}=H(e??""),i={columns:a,rows:s};return{title:t.getWorkspacePath(),data:i,key:t.getWorkspacePath(),icon:"table",noOverflow:!1,state:{},component:()=>l`<lyra-data-table .data=${i}></lyra-data-table>`}}});function B(){}export{B as default};
