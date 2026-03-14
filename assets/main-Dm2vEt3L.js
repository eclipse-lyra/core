const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/github-service-extension-4qEY8v8w.js","assets/monaco-wqKCAqma.js","assets/vendor-CbQe4k-6.js","assets/vendor-CTYeukuQ.css","assets/monaco-Dvl_Svmm.css","assets/ai-system-extension-BFcr4GD1.js","assets/ai-service-IXXPIwXT.js","assets/command-palette-extension-SDkzTrN9.js","assets/command-shell-extension-BoeMe-kN.js","assets/dataviewer-extension-CqQz3eZ9.js","assets/duckdb-extension-DL4OqO5J.js","assets/pglite-8u3caWn4.js","assets/howto-extension-D5VD_OaM.js","assets/in-browser-ml-extension-B-WTgGfm.js","assets/in-browser-ml-service-B5u1tZ1j.js","assets/linuxterminal-YLDzQUBh.js","assets/md-editor-extension-D7gtwncK.js","assets/media-viewer-extension-DDthDhUP.js","assets/memory-usage-extension-CJGfndQF.js","assets/python-runtime-extension-BQFqWiCO.js","assets/pyservice-BgffyEt2.js","assets/package-manager-BgG47JEJ.js","assets/commands-fkpS9iGF.js","assets/rag-system-extension-C69jjYQH.js","assets/settings-tree-extension-Cr2na4hi.js","assets/sqleditor-extension-Bns-1XUz.js","assets/index-DqJ2Z9dW.js","assets/webdav-extension-Dv2AnwET.js","assets/webllmservice-BzXdzUOa.js","assets/webmcp-extension-CxZpppFS.js"])))=>i.map(i=>d[i]);
import{d as j,i as c,e as n,c as p,S as k,f as N,g as X,T as z,E as W,L as B,h as G}from"./monaco-wqKCAqma.js";import{_ as e,b as g,a as v,d as l,t as m,e as U}from"./vendor-CbQe4k-6.js";import"./pglite-8u3caWn4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const q="@eclipse-lyra/extension-github-service",H={name:q},Y="https://api.github.com";function F(){const a=j.getCurrentApp();if(a?.metadata?.github){const t=a.metadata.github;if(t.owner&&t.repo)return{owner:t.owner,repo:t.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function K(a=100){try{const t=F(),s=await fetch(`${Y}/repos/${t.owner}/${t.repo}/releases?per_page=${a}`);return s.ok?await s.json():[]}catch(t){return console.error("Failed to fetch releases:",t),[]}}const b=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-Bn_TGH4j.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-Famg4yHh.js"),[])}),!0);n.registerExtension({id:H.name,name:b.EXT_GITHUB_SERVICE_NAME,description:b.EXT_GITHUB_SERVICE_DESC,loader:()=>e(()=>import("./github-service-extension-4qEY8v8w.js"),__vite__mapDeps([0,1,2,3,4])),icon:"code-branch"});const Q="@eclipse-lyra/extension-ai-system",J={name:Q};n.registerExtension({id:J.name,name:"AI System",description:"AI assistants, chat, and tool execution",loader:()=>e(()=>import("./ai-system-extension-BFcr4GD1.js"),__vite__mapDeps([5,2,3,1,4,6])),icon:"robot"});const Z="@eclipse-lyra/extension-command-palette",ee={name:Z},w=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-BMUzmHSG.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BWYi1YcR.js"),[])}),!0);n.registerExtension({id:ee.name,name:w.EXT_COMMANDPALETTE_NAME,description:w.EXT_COMMANDPALETTE_DESC,loader:()=>e(()=>import("./command-palette-extension-SDkzTrN9.js"),__vite__mapDeps([7,1,2,3,4])),icon:"terminal"});const te="@eclipse-lyra/extension-command-shell",ae={name:te},h=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-BNyI7vyE.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BBFwxyT0.js"),[])}),!0);n.registerExtension({id:ae.name,name:h.EXT_COMMANDSHELL_NAME,description:h.EXT_COMMANDSHELL_DESC,loader:()=>e(()=>import("./command-shell-extension-BoeMe-kN.js"),__vite__mapDeps([8,2,3,1,4])),icon:"terminal",experimental:!0});const ie="@eclipse-lyra/extension-dataviewer",oe={name:ie};n.registerExtension({id:oe.name,name:"Data Viewer",description:"Tabular data views, persistence, and CSV/TSV/DuckDB integration",loader:()=>e(()=>import("./dataviewer-extension-CqQz3eZ9.js"),__vite__mapDeps([9,2,3,1,4])),icon:"table"});const re="@eclipse-lyra/extension-duckdb",se={name:re},y=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-CrncopA1.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-DrfEnFhW.js"),[])}),!0);n.registerExtension({id:se.name,name:y.EXT_DUCKDB_NAME,description:y.EXT_DUCKDB_DESC,loader:()=>e(()=>import("./duckdb-extension-DL4OqO5J.js"),__vite__mapDeps([10,1,2,3,4,11])),icon:"database",dependencies:["@eclipse-lyra/extension-sqleditor"],experimental:!0});const ne="@eclipse-lyra/extension-howto-system",le={name:ne},x=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-DmIVUxyg.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-3uoiMzXB.js"),[])}),!0);n.registerExtension({id:le.name,name:x.EXT_HOWTO_NAME,description:x.EXT_HOWTO_DESC,loader:()=>e(()=>import("./howto-extension-D5VD_OaM.js"),__vite__mapDeps([12,1,2,3,4,6])),icon:"list-check",experimental:!0});const de="@eclipse-lyra/extension-in-browser-ml",ce={name:de},T=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-BWHLrdUd.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BhDsH6Hy.js"),[])}),!0);n.registerExtension({id:ce.name,name:T.EXT_IN_BROWSER_ML_NAME,description:T.EXT_IN_BROWSER_ML_DESC,loader:()=>e(()=>import("./in-browser-ml-extension-B-WTgGfm.js"),__vite__mapDeps([13,1,2,3,4,14])),icon:"brain",experimental:!0});const pe="@eclipse-lyra/extension-linuxterminal",_e={name:pe},f=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-Cj9GZiwG.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-B39_inUO.js"),[])}),!0);n.registerExtension({id:_e.name,name:f.EXT_LINUXTERMINAL_NAME,description:f.EXT_LINUXTERMINAL_DESC,loader:()=>e(()=>import("./linuxterminal-YLDzQUBh.js"),__vite__mapDeps([15,2,3,1,4])),icon:"terminal",experimental:!0});const me="@eclipse-lyra/extension-md-editor",ue={name:me},A=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-B2JDyIPq.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-B8YbWLGf.js"),[])}),!0);n.registerExtension({id:ue.name,name:A.EXT_MDEDITOR_NAME,description:A.EXT_MDEDITOR_DESC,loader:()=>e(()=>import("./md-editor-extension-D7gtwncK.js"),__vite__mapDeps([16,2,3,1,4])),icon:"book"});const Ee="@eclipse-lyra/extension-media-viewer",ge={name:Ee},O=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-CuPIFKj6.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-CccBnscq.js"),[])}),!0);n.registerExtension({id:ge.name,name:O.EXT_MEDIAVIEWER_NAME,description:O.EXT_MEDIAVIEWER_DESC,loader:()=>e(()=>import("./media-viewer-extension-DDthDhUP.js"),__vite__mapDeps([17,2,3,1,4])),icon:"image"});const ve="@eclipse-lyra/extension-memory-usage",be={name:ve},D=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-BUzdyc_f.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-B1paTwCo.js"),[])}),!0);n.registerExtension({id:be.name,name:D.EXT_MEMORYUSAGE_NAME,description:D.EXT_MEMORYUSAGE_DESC,loader:()=>e(()=>import("./memory-usage-extension-CJGfndQF.js"),__vite__mapDeps([18,1,2,3,4])),icon:"microchip"});const we="@eclipse-lyra/extension-python-runtime",he={name:we},L=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-Db2TPO8T.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-7WeX-Ffi.js"),[])}),!0);n.registerExtension({id:he.name,name:L.EXT_PYTHONRUNTIME_NAME,description:L.EXT_PYTHONRUNTIME_DESC,loader:()=>Promise.all([e(()=>import("./python-runtime-extension-BQFqWiCO.js").then(a=>a.a),__vite__mapDeps([19,2,3,1,4,11,20,21])),e(()=>import("./commands-fkpS9iGF.js"),__vite__mapDeps([22,1,2,3,4,20]))]),icon:"lyra python"});const ye="@eclipse-lyra/extension-rag-system",xe={name:ye},$=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-h3YwzzLh.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-xeLk_Fmf.js"),[])}),!0);n.registerExtension({id:xe.name,name:$.EXT_RAG_SYSTEM_NAME,description:$.EXT_RAG_SYSTEM_DESC,loader:()=>e(()=>import("./rag-system-extension-C69jjYQH.js").then(a=>a.b),__vite__mapDeps([23,2,3,1,4,14,6])),icon:"database",experimental:!0,dependencies:["@eclipse-lyra/extension-ai-system","@eclipse-lyra/extension-in-browser-ml"]});const Te="@eclipse-lyra/extension-settings-tree",fe={name:Te},I=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-CNeg7psB.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BrbQnRTh.js"),[])}),!0);n.registerExtension({id:fe.name,name:I.EXT_SETTINGS_TREE_NAME,description:I.EXT_SETTINGS_TREE_DESC,loader:()=>e(()=>import("./settings-tree-extension-Cr2na4hi.js"),__vite__mapDeps([24,2,3,1,4])),icon:"sitemap"});const Ae="@eclipse-lyra/extension-sqleditor",Oe={name:Ae};n.registerExtension({id:Oe.name,name:"SQL Editor",description:"Generic SQL editor with pluggable backends",loader:()=>e(()=>import("./sqleditor-extension-Bns-1XUz.js"),__vite__mapDeps([25,1,2,3,4])),icon:"database"});const De="@eclipse-lyra/extension-utils",Le={name:De},R=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-B0D_N7UR.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-hWm4ZfID.js"),[])}),!0);n.registerExtension({id:Le.name,name:R.EXT_UTILS_NAME,description:R.EXT_UTILS_DESC,loader:()=>e(()=>import("./index-DqJ2Z9dW.js"),__vite__mapDeps([26,1,2,3,4,20,21])),icon:"toolbox",dependencies:["@eclipse-lyra/extension-python-runtime"]});const $e="@eclipse-lyra/extension-webdav",Ie={name:$e},P=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-DQHncNMk.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BoMxiQmY.js"),[])}),!0);n.registerExtension({id:Ie.name,name:P.EXT_WEBDAV_NAME,description:P.EXT_WEBDAV_DESC,loader:()=>e(()=>import("./webdav-extension-Dv2AnwET.js"),__vite__mapDeps([27,1,2,3,4])),icon:"cloud",experimental:!0});const Re="@eclipse-lyra/extension-webllm",Pe={name:Re},S=await c(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-0AYXcG1p.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-Cl_T3_Z9.js"),[])}),!0);n.registerExtension({id:Pe.name,name:S.EXT_WEBLLM_NAME,description:S.EXT_WEBLLM_DESC,loader:()=>e(()=>import("./webllmservice-BzXdzUOa.js"),__vite__mapDeps([28,2,3,1,4,6])),icon:"robot",experimental:!0});const Se="@eclipse-lyra/extension-webmcp",Me={name:Se};function Ve(){return typeof navigator<"u"&&"modelContext"in navigator&&navigator.modelContext!=null}n.registerExtension({id:Me.name,name:"WebMCP",description:"Exposes app commands as WebMCP tools for browser agents and MCP clients",loader:async()=>{if(!Ve())throw new Error("WebMCP extension requires navigator.modelContext (Web Model Context API).");return e(()=>import("./webmcp-extension-CxZpppFS.js"),__vite__mapDeps([29,1,2,3,4,6]))},icon:"plug",dependencies:["@eclipse-lyra/extension-ai-system"],experimental:!0});var je=Object.getOwnPropertyDescriptor,Ce=(a,t,s,r)=>{for(var i=r>1?void 0:r?je(t,s):t,o=a.length-1,d;o>=0;o--)(d=a[o])&&(i=d(i)||i);return i};const ke=3,Ne=5,Xe=[{title:"Standup",time:"Today 9:00",location:"Room A"},{title:"Sprint planning",time:"Tomorrow 14:00",location:"Room B"},{title:"Design review",time:"Wed 10:00",location:"Call"}];let u=class extends v{render(){return l`
            <div class="overview">
                <wa-card>
                    <div slot="header" class="card-header">
                        <wa-icon name="list-check"></wa-icon>
                        Tasks
                    </div>
                    <div class="stats">
                        <div class="stat">
                            <span class="stat-value">${Ne}</span>
                            <span class="stat-label">Open</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${ke}</span>
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
                        ${Xe.map(a=>l`
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
    `;u=Ce([m("lyra-dashboard-welcome")],u);var ze=Object.defineProperty,We=Object.getOwnPropertyDescriptor,C=(a,t,s,r)=>{for(var i=r>1?void 0:r?We(t,s):t,o=a.length-1,d;o>=0;o--)(d=a[o])&&(i=(r?d(t,s,i):d(i))||i);return r&&i&&ze(t,s,i),i};const Be=[{id:"1",title:"Review pull request #142",done:!1,due:"Today"},{id:"2",title:"Update documentation",done:!0},{id:"3",title:"Fix login redirect bug",done:!1,due:"Tomorrow"},{id:"4",title:"Prepare sprint demo",done:!1,due:"Fri"},{id:"5",title:"Sync with design team",done:!0}];let _=class extends v{constructor(){super(...arguments),this.tasks=[...Be]}toggleTask(a){this.tasks=this.tasks.map(t=>t.id===a?{...t,done:!t.done}:t)}render(){return l`
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
    `;C([U()],_.prototype,"tasks",2);_=C([m("lyra-dashboard-my-tasks")],_);var Ge=Object.getOwnPropertyDescriptor,Ue=(a,t,s,r)=>{for(var i=r>1?void 0:r?Ge(t,s):t,o=a.length-1,d;o>=0;o--)(d=a[o])&&(i=d(i)||i);return i};const M=[{title:"Standup",start:"9:00",end:"9:15",day:"Mon",location:"Room A"},{title:"Sprint planning",start:"14:00",end:"15:30",day:"Tue",location:"Room B"},{title:"Design review",start:"10:00",end:"11:00",day:"Wed",location:"Call"},{title:"1:1 with manager",start:"16:00",end:"16:30",day:"Thu",location:"Room C"},{title:"Retrospective",start:"11:00",end:"12:00",day:"Fri",location:"Room A"}];let E=class extends v{render(){const a=["Mon","Tue","Wed","Thu","Fri"];return l`
            <div class="calendar-section">
                <div class="weeheader">
                    <span></span>
                    ${a.map(t=>l`<span class="day-col">${t}</span>`)}
                </div>
                <div class="meetings-grid">
                    <div class="time-slot"></div>
                    ${a.map(t=>{const s=M.filter(r=>r.day===t);return l`
                            <div class="day-cell">
                                ${s.map(r=>l`
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
                    ${M.map(t=>l`
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
    `;E=Ue([m("lyra-dashboard-meetings")],E);var qe=Object.getOwnPropertyDescriptor,He=(a,t,s,r)=>{for(var i=r>1?void 0:r?qe(t,s):t,o=a.length-1,d;o>=0;o--)(d=a[o])&&(i=d(i)||i);return i};const Ye=()=>l`
    <div style="padding: var(--wa-space-m); display: flex; justify-content: center; min-width: 48px; min-height: 48px; box-sizing: border-box;">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="4" y="4" width="14" height="14" rx="3" fill="var(--wa-color-brand-fill, #0d6efd)"/>
            <rect x="22" y="4" width="14" height="14" rx="3" fill="var(--wa-color-neutral-fill-subtle, #e9ecef)" stroke="var(--wa-color-neutral-stroke, #dee2e6)" stroke-width="1"/>
            <rect x="4" y="22" width="14" height="14" rx="3" fill="var(--wa-color-neutral-fill-subtle, #e9ecef)" stroke="var(--wa-color-neutral-stroke, #dee2e6)" stroke-width="1"/>
            <rect x="22" y="22" width="14" height="14" rx="3" fill="var(--wa-color-neutral-fill-subtle, #e9ecef)" stroke="var(--wa-color-neutral-stroke, #dee2e6)" stroke-width="1"/>
        </svg> <i>My Dashboard</i>
    </div>
`;p.registerContribution("dashboard-toolbar-top",{label:"Dashboard",slot:"start",component:Ye});let V=class extends B{render(){return l`<slot></slot>`}};V=He([m("lyra-view-wrapper")],V);const Fe=(a,t,s,r,i)=>({name:a,label:t,icon:s,closable:i??!1,toolbar:!1,component:o=>r()}),Ke=[["dashboard-home","Overview","house",()=>l`<lyra-dashboard-welcome></lyra-dashboard-welcome>`,!1],["dashboard-tasks","My Tasks","list-check",()=>l`<lyra-dashboard-my-tasks></lyra-dashboard-my-tasks>`,!0],["dashboard-meetings","Meetings","calendar-days",()=>l`<lyra-dashboard-meetings></lyra-dashboard-meetings>`,!0]];for(const[a,t,s,r,i]of Ke)p.registerContribution(k,Fe(a,t,s,r,i)),p.registerContribution("dashboard-views",{label:t,icon:s,showLabel:!0,command:"open_view_as_editor",params:{name:a}});p.registerContribution("dashboard-views-toolbar-bottom",{label:"Profile",icon:"user",command:"open_user_profile"});p.registerContribution("dashboard-views-toolbar-bottom",{label:"Settings",icon:"gear",command:"open_settings"});const Qe=()=>l`<style>
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
        <lyra-toolbar id=${z}></lyra-toolbar>
      </div>
      <lyra-resizable-grid class="dashboard-main" orientation="horizontal" sizes="15%, 85%">
        <lyra-toolbar id="dashboard-views" size="large" orientation="vertical"></lyra-toolbar>
        <lyra-tabs style="padding: 10px;" id=${W}></lyra-tabs>
      </lyra-resizable-grid>
    </div>`;p.registerContribution(N,{id:"dashboard",name:"Dashboard",label:"Dashboard",icon:"table-cells",component:Qe,onShow(){requestAnimationFrame(()=>{X.execute("open_view_as_editor",{params:{name:"dashboard-home"}})})}});p.registerContribution(G,{label:"Eclipse Lyra",slot:"start",component:()=>l`
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
  `});const Je=document.getElementById("app-root")??document.body;j.registerApp({name:"Eclipse Lyra",description:"Eclipse Lyra demo app with default extensions.",layoutId:"standard-full",metadata:{github:{owner:"eclipse-lyra",repo:"core"}},releaseHistory:K,extensions:["@eclipse-lyra/extension-utils","@eclipse-lyra/extension-command-palette","@eclipse-lyra/extension-command-shell","@eclipse-lyra/extension-md-editor","@eclipse-lyra/extension-monaco-editor","@eclipse-lyra/extension-media-viewer","@eclipse-lyra/extension-settings-tree","@eclipse-lyra/extension-memory-usage","@eclipse-lyra/extension-ai-system","@eclipse-lyra/extension-dataviewer"]},{autoStart:!0,hostConfig:!0,container:Je});
