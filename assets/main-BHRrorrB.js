const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ai-system-extension-D4J3pjgf.js","assets/vendor-Cp2z02o_.js","assets/vendor-CTYeukuQ.css","assets/monaco-DDAjShwT.js","assets/monaco-Dvl_Svmm.css","assets/ai-service-qfDuZP6k.js","assets/command-palette-extension-B6enH3oF.js","assets/command-shell-extension-BdJ-5UHq.js","assets/dataviewer-extension-CnmwqR35.js","assets/duckdb-extension-l7L8syds.js","assets/github-service-extension-COpcbp8j.js","assets/howto-extension-Cn9L3X74.js","assets/in-browser-ml-extension-Tuw9FesW.js","assets/in-browser-ml-service-DHgLdpRm.js","assets/linuxterminal-rMIPCmBp.js","assets/md-editor-extension-CFqwKqN5.js","assets/media-viewer-extension-DIFVadQF.js","assets/memory-usage-extension-BVeDKJcx.js","assets/notebook-extension-5gINdIn7.js","assets/python-runtime-extension-DmHe3tgq.js","assets/pyservice-DnSxwNua.js","assets/package-manager-CYyU5yzO.js","assets/commands-B0d22DbU.js","assets/rag-system-extension-BQS42fHT.js","assets/settings-tree-extension-DkOT4bek.js","assets/sqleditor-extension-C1_Eop7S.js","assets/index-BWpzI2a0.js","assets/webdav-extension-C4256ak4.js","assets/webllmservice-DsuNM6D-.js","assets/webmcp-extension-DqD4vfXE.js"])))=>i.map(i=>d[i]);
import{_ as e,b as g,a as v,d as l,t as m,e as N}from"./vendor-Cp2z02o_.js";import{e as s,i as d,d as C,c as p,S as X,f as z,g as B,T as W,E as G,L as U,h as q}from"./monaco-DDAjShwT.js";import"./pglite-tSqQA80p.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const H="@eclipse-lyra/extension-ai-system",Y={name:H};s.registerExtension({id:Y.name,name:"AI System",description:"AI assistants, chat, and tool execution",loader:()=>e(()=>import("./ai-system-extension-D4J3pjgf.js"),__vite__mapDeps([0,1,2,3,4,5])),icon:"robot"});const K="@eclipse-lyra/extension-command-palette",F={name:K},b=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-BMUzmHSG.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BWYi1YcR.js"),[])}),!0);s.registerExtension({id:F.name,name:b.EXT_COMMANDPALETTE_NAME,description:b.EXT_COMMANDPALETTE_DESC,loader:()=>e(()=>import("./command-palette-extension-B6enH3oF.js"),__vite__mapDeps([6,3,1,2,4])),icon:"terminal"});const Q="@eclipse-lyra/extension-command-shell",J={name:Q},w=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-BNyI7vyE.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BBFwxyT0.js"),[])}),!0);s.registerExtension({id:J.name,name:w.EXT_COMMANDSHELL_NAME,description:w.EXT_COMMANDSHELL_DESC,loader:()=>e(()=>import("./command-shell-extension-BdJ-5UHq.js"),__vite__mapDeps([7,1,2,3,4])),icon:"terminal",experimental:!0});const Z="@eclipse-lyra/extension-dataviewer",ee={name:Z};s.registerExtension({id:ee.name,name:"Data Viewer",description:"Tabular data views, persistence, and CSV/TSV/DuckDB integration",loader:()=>e(()=>import("./dataviewer-extension-CnmwqR35.js"),__vite__mapDeps([8,1,2,3,4])),icon:"table"});const te="@eclipse-lyra/extension-duckdb",ae={name:te},h=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-CrncopA1.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-DrfEnFhW.js"),[])}),!0);s.registerExtension({id:ae.name,name:h.EXT_DUCKDB_NAME,description:h.EXT_DUCKDB_DESC,loader:()=>e(()=>import("./duckdb-extension-l7L8syds.js"),__vite__mapDeps([9,3,1,2,4])),icon:"database",dependencies:["@eclipse-lyra/extension-sqleditor"],experimental:!0});const ie="@eclipse-lyra/extension-github-service",oe={name:ie},re="https://api.github.com";function ne(){const a=C.getCurrentApp();if(a?.metadata?.github){const t=a.metadata.github;if(t.owner&&t.repo)return{owner:t.owner,repo:t.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function se(a=100){try{const t=ne(),n=await fetch(`${re}/repos/${t.owner}/${t.repo}/releases?per_page=${a}`);return n.ok?await n.json():[]}catch(t){return console.error("Failed to fetch releases:",t),[]}}const y=await d(Object.assign({}),!0);s.registerExtension({id:oe.name,name:y.EXT_GITHUB_SERVICE_NAME,description:y.EXT_GITHUB_SERVICE_DESC,loader:()=>e(()=>import("./github-service-extension-COpcbp8j.js"),__vite__mapDeps([10,3,1,2,4])),icon:"code-branch"});const le="@eclipse-lyra/extension-howto-system",de={name:le},x=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-DmIVUxyg.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-3uoiMzXB.js"),[])}),!0);s.registerExtension({id:de.name,name:x.EXT_HOWTO_NAME,description:x.EXT_HOWTO_DESC,loader:()=>e(()=>import("./howto-extension-Cn9L3X74.js"),__vite__mapDeps([11,3,1,2,4,5])),icon:"list-check",experimental:!0});const ce="@eclipse-lyra/extension-in-browser-ml",pe={name:ce},T=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-BWHLrdUd.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BhDsH6Hy.js"),[])}),!0);s.registerExtension({id:pe.name,name:T.EXT_IN_BROWSER_ML_NAME,description:T.EXT_IN_BROWSER_ML_DESC,loader:()=>e(()=>import("./in-browser-ml-extension-Tuw9FesW.js"),__vite__mapDeps([12,3,1,2,4,13])),icon:"brain",experimental:!0});const _e="@eclipse-lyra/extension-linuxterminal",me={name:_e},f=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-Cj9GZiwG.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-B39_inUO.js"),[])}),!0);s.registerExtension({id:me.name,name:f.EXT_LINUXTERMINAL_NAME,description:f.EXT_LINUXTERMINAL_DESC,loader:()=>e(()=>import("./linuxterminal-rMIPCmBp.js"),__vite__mapDeps([14,1,2,3,4])),icon:"terminal",experimental:!0});const ue="@eclipse-lyra/extension-md-editor",Ee={name:ue},O=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-B2JDyIPq.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-B8YbWLGf.js"),[])}),!0);s.registerExtension({id:Ee.name,name:O.EXT_MDEDITOR_NAME,description:O.EXT_MDEDITOR_DESC,loader:()=>e(()=>import("./md-editor-extension-CFqwKqN5.js"),__vite__mapDeps([15,1,2,3,4])),icon:"book"});const ge="@eclipse-lyra/extension-media-viewer",ve={name:ge},A=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-CuPIFKj6.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-CccBnscq.js"),[])}),!0);s.registerExtension({id:ve.name,name:A.EXT_MEDIAVIEWER_NAME,description:A.EXT_MEDIAVIEWER_DESC,loader:()=>e(()=>import("./media-viewer-extension-DIFVadQF.js"),__vite__mapDeps([16,1,2,3,4])),icon:"image"});const be="@eclipse-lyra/extension-memory-usage",we={name:be},D=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-BUzdyc_f.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-B1paTwCo.js"),[])}),!0);s.registerExtension({id:we.name,name:D.EXT_MEMORYUSAGE_NAME,description:D.EXT_MEMORYUSAGE_DESC,loader:()=>e(()=>import("./memory-usage-extension-BVeDKJcx.js"),__vite__mapDeps([17,3,1,2,4])),icon:"microchip"});const he="@eclipse-lyra/extension-notebook",ye={name:he},$=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-NIP_kkww.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-azDELEle.js"),[])}),!0);s.registerExtension({id:ye.name,name:$.EXT_NOTEBOOK_NAME,description:$.EXT_NOTEBOOK_DESC,loader:()=>e(()=>import("./notebook-extension-5gINdIn7.js"),__vite__mapDeps([18,1,2,3,4])),icon:"lyra jupyter",dependencies:["@eclipse-lyra/extension-python-runtime"]});const xe="@eclipse-lyra/extension-python-runtime",Te={name:xe},L=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-Db2TPO8T.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-7WeX-Ffi.js"),[])}),!0);s.registerExtension({id:Te.name,name:L.EXT_PYTHONRUNTIME_NAME,description:L.EXT_PYTHONRUNTIME_DESC,loader:()=>Promise.all([e(()=>import("./python-runtime-extension-DmHe3tgq.js").then(a=>a.a),__vite__mapDeps([19,1,2,3,4,20,21])),e(()=>import("./commands-B0d22DbU.js"),__vite__mapDeps([22,3,1,2,4,20]))]),icon:"lyra python"});const fe="@eclipse-lyra/extension-rag-system",Oe={name:fe},I=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-h3YwzzLh.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-xeLk_Fmf.js"),[])}),!0);s.registerExtension({id:Oe.name,name:I.EXT_RAG_SYSTEM_NAME,description:I.EXT_RAG_SYSTEM_DESC,loader:()=>e(()=>import("./rag-system-extension-BQS42fHT.js").then(a=>a.b),__vite__mapDeps([23,1,2,3,4,13,5])),icon:"database",experimental:!0,dependencies:["@eclipse-lyra/extension-ai-system","@eclipse-lyra/extension-in-browser-ml"]});const Ae="@eclipse-lyra/extension-settings-tree",De={name:Ae},R=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-CNeg7psB.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BrbQnRTh.js"),[])}),!0);s.registerExtension({id:De.name,name:R.EXT_SETTINGS_TREE_NAME,description:R.EXT_SETTINGS_TREE_DESC,loader:()=>e(()=>import("./settings-tree-extension-DkOT4bek.js"),__vite__mapDeps([24,1,2,3,4])),icon:"sitemap"});const $e="@eclipse-lyra/extension-sqleditor",Le={name:$e};s.registerExtension({id:Le.name,name:"SQL Editor",description:"Generic SQL editor with pluggable backends",loader:()=>e(()=>import("./sqleditor-extension-C1_Eop7S.js"),__vite__mapDeps([25,3,1,2,4])),icon:"database"});const Ie="@eclipse-lyra/extension-utils",Re={name:Ie},P=await d(Object.assign({"./i18n.en.json":()=>e(()=>import("./i18n.en-hWm4ZfID.js"),[])}),!0);s.registerExtension({id:Re.name,name:P.EXT_UTILS_NAME,description:P.EXT_UTILS_DESC,loader:()=>e(()=>import("./index-BWpzI2a0.js"),__vite__mapDeps([26,3,1,2,4,20,21])),icon:"toolbox",dependencies:["@eclipse-lyra/extension-python-runtime"]});const Pe="@eclipse-lyra/extension-webdav",Se={name:Pe},S=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-DQHncNMk.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BoMxiQmY.js"),[])}),!0);s.registerExtension({id:Se.name,name:S.EXT_WEBDAV_NAME,description:S.EXT_WEBDAV_DESC,loader:()=>e(()=>import("./webdav-extension-C4256ak4.js"),__vite__mapDeps([27,3,1,2,4])),icon:"cloud",experimental:!0});const Me="@eclipse-lyra/extension-webllm",Ve={name:Me},M=await d(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-0AYXcG1p.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-Cl_T3_Z9.js"),[])}),!0);s.registerExtension({id:Ve.name,name:M.EXT_WEBLLM_NAME,description:M.EXT_WEBLLM_DESC,loader:()=>e(()=>import("./webllmservice-DsuNM6D-.js"),__vite__mapDeps([28,1,2,3,4,5])),icon:"robot",experimental:!0});const je="@eclipse-lyra/extension-webmcp",Ce={name:je};function ke(){return typeof navigator<"u"&&"modelContext"in navigator&&navigator.modelContext!=null}s.registerExtension({id:Ce.name,name:"WebMCP",description:"Exposes app commands as WebMCP tools for browser agents and MCP clients",loader:async()=>{if(!ke())throw new Error("WebMCP extension requires navigator.modelContext (Web Model Context API).");return e(()=>import("./webmcp-extension-DqD4vfXE.js"),__vite__mapDeps([29,3,1,2,4,5]))},icon:"plug",dependencies:["@eclipse-lyra/extension-ai-system"],experimental:!0});var Ne=Object.getOwnPropertyDescriptor,Xe=(a,t,n,r)=>{for(var i=r>1?void 0:r?Ne(t,n):t,o=a.length-1,c;o>=0;o--)(c=a[o])&&(i=c(i)||i);return i};const ze=3,Be=5,We=[{title:"Standup",time:"Today 9:00",location:"Room A"},{title:"Sprint planning",time:"Tomorrow 14:00",location:"Room B"},{title:"Design review",time:"Wed 10:00",location:"Call"}];let u=class extends v{render(){return l`
            <div class="overview">
                <wa-card>
                    <div slot="header" class="card-header">
                        <wa-icon name="list-check"></wa-icon>
                        Tasks
                    </div>
                    <div class="stats">
                        <div class="stat">
                            <span class="stat-value">${Be}</span>
                            <span class="stat-label">Open</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${ze}</span>
                            <span class="stat-label">Done</span>
                        </div>
                    </div>
                </wa-card>
                <wa-card>
                    <div slot="header" class="card-header">
                        <wa-icon name="calendar-days"></wa-icon>
                        Next meetings
                    </div>
                    <ul class="meeting-list">
                        ${We.map(a=>l`
                                <li class="meeting-item">
                                    <span class="meeting-title">${a.title}</span>
                                    <span class="meeting-meta">${a.time} · ${a.location}</span>
                                </li>
                            `)}
                    </ul>
                </wa-card>
            </div>
        `}};u.styles=g`
        :host {
            display: block;
            padding: var(--wa-space-l);
            height: 100%;
            box-sizing: border-box;
        }
        .overview {
            display: grid;
            gap: var(--wa-space-l);
            max-width: 800px;
        }
        .card-header {
            display: flex;
            align-items: center;
            gap: var(--wa-space-s);
            font-weight: 600;
        }
        .stats {
            display: flex;
            gap: var(--wa-space-xl);
            margin-top: var(--wa-space-s);
        }
        .stat {
            display: flex;
            flex-direction: column;
            gap: var(--wa-space-2xs);
        }
        .stat-value {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--wa-color-brand-fill);
        }
        .stat-label {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
        }
        .meeting-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .meeting-item {
            display: flex;
            flex-direction: column;
            gap: var(--wa-space-2xs);
            padding: var(--wa-space-m) 0;
            border-bottom: 1px solid var(--wa-color-neutral-border-subtle);
        }
        .meeting-item:last-child {
            border-bottom: none;
        }
        .meeting-title {
            font-weight: 500;
        }
        .meeting-meta {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
        }
    `;u=Xe([m("lyra-dashboard-welcome")],u);var Ge=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,k=(a,t,n,r)=>{for(var i=r>1?void 0:r?Ue(t,n):t,o=a.length-1,c;o>=0;o--)(c=a[o])&&(i=(r?c(t,n,i):c(i))||i);return r&&i&&Ge(t,n,i),i};const qe=[{id:"1",title:"Review pull request #142",done:!1,due:"Today"},{id:"2",title:"Update documentation",done:!0},{id:"3",title:"Fix login redirect bug",done:!1,due:"Tomorrow"},{id:"4",title:"Prepare sprint demo",done:!1,due:"Fri"},{id:"5",title:"Sync with design team",done:!0}];let _=class extends v{constructor(){super(...arguments),this.tasks=[...qe]}toggleTask(a){this.tasks=this.tasks.map(t=>t.id===a?{...t,done:!t.done}:t)}render(){return l`
            <ul class="taslist">
                ${this.tasks.map(a=>l`
                        <li class="tasitem ${a.done?"done":""}">
                            <wa-checkbox
                                ?checked=${a.done}
                                @change=${()=>this.toggleTask(a.id)}
                                aria-label="${a.title}"
                            ></wa-checkbox>
                            <span class="tastitle">${a.title}</span>
                            ${a.due?l`<span class="tasdue">${a.due}</span>`:""}
                        </li>
                    `)}
            </ul>
        `}};_.styles=g`
        :host {
            display: block;
            padding: var(--wa-space-l);
            height: 100%;
            box-sizing: border-box;
        }
        .taslist {
            list-style: none;
            padding: 0;
            margin: 0;
            max-width: 600px;
        }
        .tasitem {
            display: flex;
            align-items: center;
            gap: var(--wa-space-m);
            padding: var(--wa-space-m) 0;
            border-bottom: 1px solid var(--wa-color-neutral-border-subtle);
        }
        .tasitem:last-child {
            border-bottom: none;
        }
        .tasitem.done .tastitle {
            text-decoration: line-through;
            color: var(--wa-color-text-quiet);
        }
        .tastitle {
            flex: 1;
        }
        .tasdue {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
        }
    `;k([N()],_.prototype,"tasks",2);_=k([m("lyra-dashboard-my-tasks")],_);var He=Object.getOwnPropertyDescriptor,Ye=(a,t,n,r)=>{for(var i=r>1?void 0:r?He(t,n):t,o=a.length-1,c;o>=0;o--)(c=a[o])&&(i=c(i)||i);return i};const V=[{title:"Standup",start:"9:00",end:"9:15",day:"Mon",location:"Room A"},{title:"Sprint planning",start:"14:00",end:"15:30",day:"Tue",location:"Room B"},{title:"Design review",start:"10:00",end:"11:00",day:"Wed",location:"Call"},{title:"1:1 with manager",start:"16:00",end:"16:30",day:"Thu",location:"Room C"},{title:"Retrospective",start:"11:00",end:"12:00",day:"Fri",location:"Room A"}];let E=class extends v{render(){const a=["Mon","Tue","Wed","Thu","Fri"];return l`
            <div class="calendar-section">
                <div class="weeheader">
                    <span></span>
                    ${a.map(t=>l`<span class="day-col">${t}</span>`)}
                </div>
                <div class="meetings-grid">
                    <div class="time-slot"></div>
                    ${a.map(t=>{const n=V.filter(r=>r.day===t);return l`
                            <div class="day-cell">
                                ${n.map(r=>l`
                                        <div class="meeting-card">
                                            <div class="title">${r.title}</div>
                                            <div class="time">${r.start} – ${r.end}</div>
                                            <div class="time">${r.location}</div>
                                        </div>
                                    `)}
                            </div>
                        `})}
                </div>
                <h3 style="margin-top: var(--wa-space-xl); margin-bottom: var(--wa-space-m);">This week</h3>
                <ul class="meeting-list">
                    ${V.map(t=>l`
                            <li>
                                <span class="title">${t.title}</span>
                                <div class="meta">${t.day} ${t.start} – ${t.end} · ${t.location}</div>
                            </li>
                        `)}
                </ul>
            </div>
        `}};E.styles=g`
        :host {
            display: block;
            padding: var(--wa-space-l);
            height: 100%;
            box-sizing: border-box;
        }
        .calendar-section {
            max-width: 700px;
        }
        .weeheader {
            display: grid;
            grid-template-columns: 3rem repeat(5, 1fr);
            gap: var(--wa-space-s);
            padding: var(--wa-space-s) 0;
            font-size: var(--wa-font-size-s);
            font-weight: 600;
            color: var(--wa-color-text-quiet);
            border-bottom: 1px solid var(--wa-color-neutral-border-subtle);
        }
        .day-col {
            text-align: center;
        }
        .meetings-grid {
            display: grid;
            grid-template-columns: 3rem repeat(5, 1fr);
            gap: var(--wa-space-s);
            margin-top: var(--wa-space-m);
        }
        .time-slot {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
            padding-top: var(--wa-space-2xs);
        }
        .day-cell {
            min-height: 80px;
            padding: var(--wa-space-s);
            border-radius: var(--wa-radius-m);
            background: var(--wa-color-neutral-fill-subtle);
        }
        .meeting-card {
            padding: var(--wa-space-s);
            margin-bottom: var(--wa-space-xs);
            border-radius: var(--wa-radius-s);
            background: var(--wa-color-brand-fill);
            color: var(--wa-color-neutral-fill);
            font-size: var(--wa-font-size-s);
        }
        .meeting-card .title {
            font-weight: 600;
        }
        .meeting-card .time {
            opacity: 0.9;
        }
        .meeting-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .meeting-list li {
            padding: var(--wa-space-m);
            border-radius: var(--wa-radius-m);
            background: var(--wa-color-neutral-fill-subtle);
            margin-bottom: var(--wa-space-s);
        }
        .meeting-list .title {
            font-weight: 600;
        }
        .meeting-list .meta {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
            margin-top: var(--wa-space-2xs);
        }
    `;E=Ye([m("lyra-dashboard-meetings")],E);var Ke=Object.getOwnPropertyDescriptor,Fe=(a,t,n,r)=>{for(var i=r>1?void 0:r?Ke(t,n):t,o=a.length-1,c;o>=0;o--)(c=a[o])&&(i=c(i)||i);return i};const Qe=()=>l`
    <div style="padding: var(--wa-space-m); display: flex; justify-content: center; min-width: 48px; min-height: 48px; box-sizing: border-box;">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="4" y="4" width="14" height="14" rx="3" fill="var(--wa-color-brand-fill, #0d6efd)"/>
            <rect x="22" y="4" width="14" height="14" rx="3" fill="var(--wa-color-neutral-fill-subtle, #e9ecef)" stroke="var(--wa-color-neutral-stroke, #dee2e6)" stroke-width="1"/>
            <rect x="4" y="22" width="14" height="14" rx="3" fill="var(--wa-color-neutral-fill-subtle, #e9ecef)" stroke="var(--wa-color-neutral-stroke, #dee2e6)" stroke-width="1"/>
            <rect x="22" y="22" width="14" height="14" rx="3" fill="var(--wa-color-neutral-fill-subtle, #e9ecef)" stroke="var(--wa-color-neutral-stroke, #dee2e6)" stroke-width="1"/>
        </svg> <i>My Dashboard</i>
    </div>
`;p.registerContribution("dashboard-toolbar-top",{label:"Dashboard",slot:"start",component:Qe});let j=class extends U{render(){return l`<slot></slot>`}};j=Fe([m("lyra-view-wrapper")],j);const Je=(a,t,n,r,i)=>({name:a,label:t,icon:n,closable:i??!1,toolbar:!1,component:o=>r()}),Ze=[["dashboard-home","Overview","house",()=>l`<lyra-dashboard-welcome></lyra-dashboard-welcome>`,!1],["dashboard-tasks","My Tasks","list-check",()=>l`<lyra-dashboard-my-tasks></lyra-dashboard-my-tasks>`,!0],["dashboard-meetings","Meetings","calendar-days",()=>l`<lyra-dashboard-meetings></lyra-dashboard-meetings>`,!0]];for(const[a,t,n,r,i]of Ze)p.registerContribution(X,Je(a,t,n,r,i)),p.registerContribution("dashboard-views",{label:t,icon:n,showLabel:!0,command:"open_view_as_editor",params:{name:a}});p.registerContribution("dashboard-views-toolbar-bottom",{label:"Profile",icon:"user",command:"open_user_profile"});p.registerContribution("dashboard-views-toolbar-bottom",{label:"Settings",icon:"gear",command:"open_settings"});const et=()=>l`<style>
      .dashboard-shell {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        box-sizing: border-box;
        padding: var(--wa-space-m);
        gap: var(--wa-space-m);
      }

      .dashboard-main {
        flex: 1;
        min-height: 0;
      }

      .toolbar-top {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        border-radius: var(--wa-radius-l);
        padding: 0 var(--wa-space-m);
        min-height: 48px;
        background-color: var(--wa-color-neutral-fill-surface);
      }
    </style>

    <div class="dashboard-shell">
      <div class="toolbar-top">
        <lyra-toolbar id="dashboard-toolbar-top"></lyra-toolbar>
        <lyra-toolbar id="dashboard-toolbar-top-center"></lyra-toolbar>
        <lyra-toolbar id=${W}></lyra-toolbar>
      </div>
      <lyra-resizable-grid class="dashboard-main" orientation="horizontal" sizes="15%, 85%">
        <lyra-toolbar id="dashboard-views" size="large" orientation="vertical"></lyra-toolbar>
        <lyra-tabs style="padding: 10px;" id=${G}></lyra-tabs>
      </lyra-resizable-grid>
    </div>`;p.registerContribution(z,{id:"dashboard",name:"Dashboard",label:"Dashboard",icon:"table-cells",component:et,onShow(){requestAnimationFrame(()=>{B.execute("open_view_as_editor",{params:{name:"dashboard-home"}})})}});p.registerContribution(q,{label:"Eclipse Lyra",slot:"start",component:()=>l`
    <div
      style="
        display: inline-flex;
        align-items: center;
        gap: var(--wa-space-s);
        padding: 0 var(--wa-space-s);
      "
    >
      <img
        src="/logo.svg"
        alt="Eclipse Lyra"
        style="display: block; height: 28px; width: auto;"
      />
    </div>
  `});const tt=document.getElementById("app-root")??document.body;C.registerApp({name:"Eclipse Lyra",description:"Eclipse Lyra demo app with default extensions.",layoutId:"standard-full",metadata:{github:{owner:"eclipse-lyra",repo:"core"}},releaseHistory:se,extensions:["@eclipse-lyra/extension-utils","@eclipse-lyra/extension-command-palette","@eclipse-lyra/extension-command-shell","@eclipse-lyra/extension-md-editor","@eclipse-lyra/extension-monaco-editor","@eclipse-lyra/extension-media-viewer","@eclipse-lyra/extension-settings-tree","@eclipse-lyra/extension-memory-usage","@eclipse-lyra/extension-ai-system","@eclipse-lyra/extension-dataviewer"]},{autoStart:!0,hostConfig:!0,container:tt});
