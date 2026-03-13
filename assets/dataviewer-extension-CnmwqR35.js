import{b as S,n as $,e as u,a as P,d as l,t as x,l as C,P as D}from"./vendor-Cp2z02o_.js";import{s as L,z as d,x as T,L as _,A as V,t as f,v as z,c as I,P as O,j as E,F as N}from"./monaco-DDAjShwT.js";function j(){return crypto.randomUUID()}const K="dataview/publish",A="dataview/added",y="dataview/",m=y+"index";class q{init(){this.subscriptionToken===void 0&&(this.subscriptionToken=L(K,t=>{this.handlePublish(t)}))}async handlePublish(t){const a=j(),s=Date.now(),i={id:t.id??a,title:t.title,data:t.data,source:t.source,createdAt:s};await d.persistObject(y+a,i);const r=await d.getObject(m),n=Array.isArray(r)?r:[];n.push({storageKey:a,title:t.title,source:t.source,createdAt:s}),await d.persistObject(m,n),T(A,{storageKey:a,title:t.title,createdAt:s})}async listViews(){const t=await d.getObject(m);return!Array.isArray(t)||t.length===0?[]:typeof t[0]=="string"?t.map(s=>({storageKey:s,title:s,createdAt:0})):[...t].sort((s,i)=>s.createdAt-i.createdAt)}async getView(t){return await d.getObject(y+t)??null}async deleteView(t){const a=await d.getObject(m),s=Array.isArray(a)?a.filter(i=>i.storageKey!==t):[];await d.persistObject(m,s),await d.persistObject(y+t,null)}async clearAllViews(){const t=await d.getObject(m),a=Array.isArray(t)?t:[];await Promise.all(a.map(s=>d.persistObject(y+s.storageKey,null))),await d.persistObject(m,[])}}const p=new q;var F=Object.defineProperty,R=Object.getOwnPropertyDescriptor,w=(e,t,a,s)=>{for(var i=s>1?void 0:s?R(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&F(t,a,i),i};function v(e){return e==null?"":String(e)}function U(e,t){return e.length===0?!1:e.every(a=>{const s=a[t];if(s==null)return!0;const i=Number(s);return Number.isFinite(i)})}function M(e,t,a){if(a){const s=Number(e),i=Number(t);return Number.isFinite(s)?Number.isFinite(i)?s-i:-1:Number.isFinite(i)?1:0}return v(e).localeCompare(v(t),void 0,{numeric:!0})}let c=class extends P{constructor(){super(...arguments),this.data={columns:[],rows:[]},this.emptyMessage="No data.",this.sortColumnIndex=null,this.sortDirection="asc",this.filterQuery="",this.pageSize=25,this.currentPage=0}get columns(){return Array.isArray(this.data?.columns)?this.data.columns:[]}get rows(){return Array.isArray(this.data?.rows)?this.data.rows:[]}get filteredRows(){const e=this.filterQuery.trim().toLowerCase();return e?this.rows.filter(t=>t.some(a=>v(a).toLowerCase().includes(e))):this.rows}get sortedRows(){const e=this.filteredRows;if(this.sortColumnIndex==null||this.sortColumnIndex<0)return e;const t=this.sortColumnIndex,a=U(e,t),s=this.sortDirection==="asc"?1:-1;return[...e].sort((i,r)=>{const n=i[t],o=r[t];return s*M(n,o,a)})}get totalRows(){return this.sortedRows.length}get pageCount(){const e=this.totalRows;return e===0?1:Math.ceil(e/this.pageSize)}get pagedRows(){const e=this.sortedRows,a=this.clampedPage*this.pageSize;return e.slice(a,a+this.pageSize)}get clampedPage(){const e=this.pageCount;return e<=0?0:Math.min(this.currentPage,e-1)}goToPage(e){const t=Math.max(0,this.pageCount-1);this.currentPage=Math.max(0,Math.min(e,t)),this.requestUpdate()}onPageSizeChange(e){const t=e.target.value,a=parseInt(t,10);!Number.isFinite(a)||a<1||(this.pageSize=a,this.currentPage=0,this.requestUpdate())}onSort(e){this.sortColumnIndex===e?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumnIndex=e,this.sortDirection="asc"),this.requestUpdate()}onFilterInput(e){this.filterQuery=e.target.value,this.requestUpdate()}clearFilter(){this.filterQuery="",this.requestUpdate()}getSortAria(e){return this.sortColumnIndex!==e?"none":this.sortDirection==="asc"?"ascending":"descending"}render(){const{columns:e}=this,t=this.totalRows,a=this.pagedRows,s=this.clampedPage,i=this.pageCount,r=t===0?0:s*this.pageSize+1,n=Math.min((s+1)*this.pageSize,t);return e.length===0&&t===0&&this.rows.length===0?l`<div class="table-empty">${this.emptyMessage}</div>`:l`
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
            ${c.PAGE_SIZE_OPTIONS.map(o=>l`<wa-option value=${String(o)}>${o}</wa-option>`)}
          </wa-select>
          <span class="paging-summary" aria-live="polite">
            ${t===0?"0 rows":`${r}–${n} of ${t}`}
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
              ${e.map((o,g)=>l`
                  <th scope="col" role="columnheader" aria-sort=${this.getSortAria(g)}>
                    <button
                      type="button"
                      class="th-sort"
                      @click=${()=>this.onSort(g)}
                      title="Sort by ${o}"
                    >
                      <span class="th-label">${o}</span>
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
            ${a.length===0?l`<tr><td colspan=${e.length} class="table-empty-cell">No matching rows.</td></tr>`:a.map(o=>l`
                    <tr>
                      ${o.map(g=>l`<td>${v(g)}</td>`)}
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
  `;w([$({attribute:!1})],c.prototype,"data",2);w([$({type:String})],c.prototype,"emptyMessage",2);w([u()],c.prototype,"sortColumnIndex",2);w([u()],c.prototype,"sortDirection",2);w([u()],c.prototype,"filterQuery",2);w([u()],c.prototype,"pageSize",2);w([u()],c.prototype,"currentPage",2);c=w([x("lyra-data-table")],c);var k=Object.defineProperty,H=Object.getOwnPropertyDescriptor,b=(e,t,a,s)=>{for(var i=s>1?void 0:s?H(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(s?n(t,a,i):n(i))||i);return s&&i&&k(t,a,i),i};let h=class extends _{constructor(){super(...arguments),this.dataview=null,this.persistedList=[],this.selectedStorageKey="",this.selectedView=null,this.loadingList=!0,this.autoActivateTab=!0}get displayed(){return this.selectedView??this.dataview}get hasData(){const e=this.displayed;if(!e)return!1;const{columns:t,rows:a}=e.data;return Array.isArray(t)&&Array.isArray(a)&&(t.length>0||a.length>0)}toCsv(e){const{columns:t,rows:a}=e.data,s=n=>{if(n==null)return"";const o=String(n);return/[",\n]/.test(o)?`"${o.replace(/"/g,'""')}"`:o},i=t.map(s).join(","),r=a.map(n=>n.map(s).join(",")).join(`
`);return r?`${i}
${r}`:i}async onExportCsv(){const e=this.displayed;if(!(!e||!this.hasData))try{const t=this.toCsv(e),a=e.title?.trim()||"dataview",s=new Date().toISOString().replace(/[:.]/g,"-"),i=`${a.replace(/[^a-zA-Z0-9-_]+/g,"_")}-${s}.csv`,r=await V("directory");if(!r)return;this.executeCommand("touch",{path:`${r}/${i}`,contents:t})}catch(t){f(t instanceof Error?t.message:String(t))}}async doInitUI(){const e=await this.getDialogSetting();e&&typeof e.autoActivateTab=="boolean"&&(this.autoActivateTab=e.autoActivateTab),this.subscribe(A,async()=>{await this.refreshPersistedList(!0),this.autoActivateTab&&this.activateContainingTab()}),await this.refreshPersistedList(!1)}async refreshPersistedList(e){this.loadingList=!0,this.requestUpdate();try{if(this.persistedList=await p.listViews(),e&&this.persistedList.length>0){const t=this.persistedList[this.persistedList.length-1];this.selectedStorageKey=t.storageKey,this.selectedView=await p.getView(t.storageKey)}else this.selectedStorageKey?this.selectedView=await p.getView(this.selectedStorageKey):this.selectedView=null}catch(t){f(t instanceof Error?t.message:String(t)),this.persistedList=[],this.selectedView=null}finally{this.loadingList=!1,this.requestUpdate(),this.updateToolbar()}}async selectStorageKey(e){if(this.selectedStorageKey=e,!e){this.selectedView=null,this.requestUpdate(),this.updateToolbar();return}try{this.selectedView=await p.getView(e)}catch(t){f(t instanceof Error?t.message:String(t)),this.selectedView=null}this.requestUpdate(),this.updateToolbar()}async onAutoActivateChange(e){const t=e.target.checked;this.autoActivateTab=t;const a=await this.getDialogSetting()??{};await this.setDialogSetting({...a,autoActivateTab:t}),this.updateToolbar()}async onHistorySelect(e){const t=e.detail?.item?.value??"";!t||t==="__stats__"||await this.selectStorageKey(t)}async onDeleteView(e,t){e.stopPropagation(),e.preventDefault();try{await p.deleteView(t),this.selectedStorageKey===t&&(this.selectedStorageKey="",this.selectedView=null),await this.refreshPersistedList(!0)}catch(a){f(a instanceof Error?a.message:String(a))}}async onClearHistory(){try{await p.clearAllViews(),this.selectedStorageKey="",this.selectedView=null,await this.refreshPersistedList(!1)}catch(e){f(e instanceof Error?e.message:String(e))}}renderToolbar(){const e=this.selectedView??this.dataview,t=this.persistedList.find(o=>o.storageKey===this.selectedStorageKey),a=t?.title??e?.title??(this.persistedList.length>0?"Latest data view":"No data"),s=t?.createdAt??e?.createdAt?new Date(t?.createdAt??e?.createdAt).toLocaleString():null,i=e?.source??null,r=i?`${a} · ${i}`:a,n=s?`${r} (${s})`:r;return l`
        <wa-dropdown
          placement="bottom-start"
          distance="4"
          size="small"
          hoist
          @wa-select=${o=>this.onHistorySelect(o)}
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

          ${this.persistedList.map(o=>l`
              <wa-dropdown-item value=${o.storageKey}>
                ${o.source?`${o.title} · ${o.source}`:o.title}
                ${o.createdAt?l`<span style="opacity: 0.7; margin-left: 0.5rem; font-size: 0.75em;">
                      (${new Date(o.createdAt).toLocaleString()})
                    </span>`:null}
                <wa-button
                  slot="details"
                  appearance="plain"
                  size="small"
                  title="Delete data view"
                  @click=${g=>this.onDeleteView(g,o.storageKey)}
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
          @change=${o=>this.onAutoActivateChange(o)}
          style="margin-top: 0.5rem;"
        >
          Auto-show
        </wa-switch>

        ${C(e,()=>l`<wa-divider orientation="vertical"></wa-divider><span>${n}</span>`)}
    `}renderTable(e){return this.hasData?l`<lyra-data-table .data=${e.data}></lyra-data-table>`:l`<div class="result-empty">No data.</div>`}render(){const e=this.displayed;return e!=null?this.renderTable(e):l`<div class="result-empty">No data.</div>`}};h.styles=S`
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
  `;b([$({attribute:!1})],h.prototype,"dataview",2);b([u()],h.prototype,"persistedList",2);b([u()],h.prototype,"selectedStorageKey",2);b([u()],h.prototype,"selectedView",2);b([u()],h.prototype,"loadingList",2);b([u()],h.prototype,"autoActivateTab",2);h=b([x("lyra-dataview")],h);function W(e){const t=D.parse(e,{header:!0,skipEmptyLines:!0}),a=t.meta.fields??[],s=t.data.map(i=>a.map(r=>i[r]));return{columns:a,rows:s}}p.init();z.put("dataviewerService",p);I.registerContribution(O,{name:"view.dataviewer",label:"Data Views",icon:"table",component:e=>l`<lyra-dataview id="${e}"></lyra-dataview>`});E.registerEditorInputHandler({editorId:"system.dataviewer-table",label:"Table",icon:"table",ranking:800,canHandle:e=>{if(!(e instanceof N))return!1;const t=e.getName().toLowerCase();return t.endsWith(".csv")||t.endsWith(".tsv")},handle:async e=>{const t=e.getName(),a=await e.getContents(),{columns:s,rows:i}=W(a??""),r={columns:s,rows:i};return{title:t,data:r,key:t,icon:"table",noOverflow:!1,state:{},component:()=>l`<lyra-data-table .data=${r}></lyra-data-table>`}}});function B(){}export{B as default};
