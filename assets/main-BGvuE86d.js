const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/github-service-extension-6avU7OHf-CH9a0Dzo.js","assets/dist-BU543HA6.js","assets/chunk-DseTPa7n.js","assets/preload-helper-rov5CBGT.js","assets/fs-access-D-fDaJ8V-BUpCKyMj.js","assets/dist-C8Q35nOq.css","assets/ai-system-extension-u12yX2lg-DPTBVw5_.js","assets/ai-service-_8yd8pWc-BX02i-ri.js","assets/command-palette-extension-DP53lL4g-CQT7dt5p.js","assets/lit-tdNexHTt.js","assets/command-shell-extension-B7Tkc0Kz-CRAWZ69h.js","assets/loader-DqUeEcTA.js","assets/dataviewer-extension-DKO_uqFP-BaAULc-Z.js","assets/duckdb-extension-B40T7F65-CtQK3UoZ.js","assets/tslib.es6-C_fUrL_W.js","assets/api-DU-z0suX.js","assets/dist-CsvOtmE8.js","assets/notebook-kernel-api-c9l3_84P-DFy2usuT.js","assets/howto-extension-BQfgRwmb-C2QSvg4j.js","assets/api-DOqYeapm.js","assets/in-browser-ml-extension-B_JuNITB-DJHuPext.js","assets/in-browser-ml-service-18Xw5br1-Lq5I5qxA.js","assets/linuxterminal-Bv55CZiY-DfhzOymZ.js","assets/md-editor-extension-8oqW93mK-CGViC31v.js","assets/media-viewer-extension-CpuQxfjF-DUTe_eho.js","assets/memory-usage-extension-Yl6iXGvQ-CzULf1R0.js","assets/monaco-editor-extension-BAeimqAZ-DWwLk_JT.js","assets/editor.api2-CmFNvybj-BDK4B0fX.js","assets/monaco.contribution-CdHWOuG1-DR9ZTpKW.js","assets/workers-CGROc86k-C1jl_dvh.js","assets/pglite-extension-CLG4sGBr-BVDiteVq.js","assets/python-runtime-extension-CS7adESG-DoLdYK_j.js","assets/editor-python-run-Cs68X5JL-QAZR9L0c.js","assets/package-manager-DcDiJbD3-DBaR9624.js","assets/pyservice-DufKqR-H-CutotCqB.js","assets/commands-CgwOcWiX-B04fO5Bq.js","assets/rag-system-extension-BE7Q_0rq-BK_e_3Yw.js","assets/rag-service-Cymd0ECr-BhB3UtxM.js","assets/settings-tree-extension-BpPkyN9--BDslpW4q.js","assets/sqleditor-extension-CFNQ6Cj0-918gEPPE.js","assets/commands-DXblDlOb-CHDBWpnz.js","assets/api-DMEDbw7S-Bi1nwJLI.js","assets/webdav-extension-BnWGwdSi-C80Qxl8z.js","assets/webllmservice-Bdz7vrud-DrUamCxT.js","assets/__vite-browser-external-2Viimrv2.js","assets/webmcp-extension-vZl42m8K-CM6Qjmsv.js"])))=>i.map(i=>d[i]);
import{C as e,G as t,I as n,K as r,R as i,_ as a,d as ee,f as te,h as o,ht as s,j as c,mt as l,o as ne,r as u,s as d,ut as f,y as p}from"./dist-BU543HA6.js";import{t as m}from"./preload-helper-rov5CBGT.js";import"./lit-tdNexHTt.js";import"./dist-CsvOtmE8.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var re={name:`@eclipse-docks/extension-github-service`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},h=`https://api.github.com`;function g(){let e=p.getCurrentApp();if(e?.metadata?.github){let t=e.metadata.github;if(t.owner&&t.repo)return{owner:t.owner,repo:t.repo}}throw Error(`GitHub repository not configured. Specify metadata.github in AppDefinition.`)}async function _(e=100){try{let t=g(),n=await fetch(`${h}/repos/${t.owner}/${t.repo}/releases?per_page=${e}`);return n.ok?await n.json():[]}catch(e){return console.error(`Failed to fetch releases:`,e),[]}}var v=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-GSWgOjeX-DCvPH9Zx.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-Bhvk9DkV-DIfLRVG-.js`),[])}),!0);e.registerExtension({id:re.name,name:v.EXT_GITHUB_SERVICE_NAME,description:v.EXT_GITHUB_SERVICE_DESC,loader:()=>m(()=>import(`./github-service-extension-6avU7OHf-CH9a0Dzo.js`),__vite__mapDeps([0,1,2,3,4,5])),icon:`code-branch`}),e.registerExtension({id:{name:`@eclipse-docks/extension-ai-system`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-docks/core":`*`,marked:`^12.0.0 || ^16.4.1`,lit:`^3.0.0`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}}.name,name:`AI System`,description:`AI assistants, chat, and tool execution`,loader:()=>m(()=>import(`./ai-system-extension-u12yX2lg-DPTBVw5_.js`),__vite__mapDeps([6,1,2,3,4,5,7])),icon:`robot`});var ie={name:`@eclipse-docks/extension-command-palette`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-docks/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},y=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-BAIyaWGM-DiUYqV_Q.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-4m_srIpA-DdwiiPgZ.js`),[])}),!0);e.registerExtension({id:ie.name,name:y.EXT_COMMANDPALETTE_NAME,description:y.EXT_COMMANDPALETTE_DESC,loader:()=>m(()=>import(`./command-palette-extension-DP53lL4g-CQT7dt5p.js`),__vite__mapDeps([8,1,2,3,4,5,9])),icon:`terminal`});var b={name:`@eclipse-docks/extension-command-shell`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-docks/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},x=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-B28toTLm-CDyGxKzZ.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-Bjs1E9b5-pwTLmCxM.js`),[])}),!0);e.registerExtension({id:b.name,name:x.EXT_COMMANDSHELL_NAME,description:x.EXT_COMMANDSHELL_DESC,loader:()=>m(()=>import(`./command-shell-extension-B7Tkc0Kz-CRAWZ69h.js`),__vite__mapDeps([10,1,2,3,4,5])),icon:`terminal`,experimental:!0}),e.registerExtension({id:`@eclipse-docks/extension-catalog`,name:`Catalog`,description:`Browse and checkout resources from a catalog`,loader:()=>m(()=>import(`./loader-DqUeEcTA.js`),__vite__mapDeps([11,1,2,3,4,5,9])),icon:`book`}),e.registerExtension({id:{name:`@eclipse-docks/extension-dataviewer`,version:`0.0.0`,repository:{type:`git`,url:`https://github.com/eclipse-docks/core`},type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-docks/core":`*`,papaparse:`^5.5.3`},devDependencies:{"@types/papaparse":`^5.5.2`,typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`}}.name,name:`Data Viewer`,description:`Tabular data views, persistence, and CSV/TSV/DuckDB integration`,loader:()=>m(()=>import(`./dataviewer-extension-DKO_uqFP-BaAULc-Z.js`),__vite__mapDeps([12,1,2,3,4,5,9])),icon:`table`});var S={name:`@eclipse-docks/extension-duckdb`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@duckdb/duckdb-wasm":`1.33.1-dev20.0`,"@eclipse-docks/core":`*`,"@eclipse-docks/extension-catalog":`*`,"@eclipse-docks/extension-notebook":`*`,"@eclipse-docks/extension-sqleditor":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},C=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-DcvaIwdb-QfFM7h-t.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-CEVgAB1e-Cnthg3o1.js`),[])}),!0);e.registerExtension({id:S.name,name:C.EXT_DUCKDB_NAME,description:C.EXT_DUCKDB_DESC,loader:()=>m(()=>import(`./duckdb-extension-B40T7F65-CtQK3UoZ.js`),__vite__mapDeps([13,1,2,3,4,5,14,15,16,17])),icon:`database`,dependencies:[`@eclipse-docks/extension-sqleditor`],experimental:!0});var w={name:`@eclipse-docks/extension-howto-system`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`,"@eclipse-docks/extension-ai-system":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},T=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-5w94fisR-Xg09Y-20.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-LfC8hyxS-Dyw2I1pJ.js`),[])}),!0);e.registerExtension({id:w.name,name:T.EXT_HOWTO_NAME,description:T.EXT_HOWTO_DESC,loader:()=>m(()=>import(`./howto-extension-BQfgRwmb-C2QSvg4j.js`),__vite__mapDeps([18,1,2,3,4,5,7,19])),icon:`list-check`,experimental:!0});var E={name:`@eclipse-docks/extension-in-browser-ml`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-docks/core":`*`,"@huggingface/transformers":`^3.8.0`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},D=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-CeMAAFVI-dN1cVZK_.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-4Ii3SXJ7-BGiVIEVo.js`),[])}),!0);e.registerExtension({id:E.name,name:D.EXT_IN_BROWSER_ML_NAME,description:D.EXT_IN_BROWSER_ML_DESC,loader:()=>m(()=>import(`./in-browser-ml-extension-B_JuNITB-DJHuPext.js`),__vite__mapDeps([20,1,2,3,4,5,9,21])),icon:`brain`,experimental:!0});var O={name:`@eclipse-docks/extension-linuxterminal`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`,"@xterm/xterm":`^5.5.0`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},k=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-CvJHtYUb-CAHmG8Qn.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-xxZwzQa1-Cy2dQkxc.js`),[])}),!0);e.registerExtension({id:O.name,name:k.EXT_LINUXTERMINAL_NAME,description:k.EXT_LINUXTERMINAL_DESC,loader:()=>m(()=>import(`./linuxterminal-Bv55CZiY-DfhzOymZ.js`),__vite__mapDeps([22,1,2,3,4,5])),icon:`terminal`,experimental:!0});var ae={name:`@eclipse-docks/extension-md-editor`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`,marked:`^12.0.0 || ^16.4.1`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},A=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-B-XSgGEO-Cj5rfxjQ.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-C1spZCa1-oJO9UWrr.js`),[])}),!0);e.registerExtension({id:ae.name,name:A.EXT_MDEDITOR_NAME,description:A.EXT_MDEDITOR_DESC,loader:()=>m(()=>import(`./md-editor-extension-8oqW93mK-CGViC31v.js`),__vite__mapDeps([23,1,2,3,4,5])),icon:`book`});var j={name:`@eclipse-docks/extension-media-viewer`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},M=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-BgRO7Rh7-BoMgytNJ.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-DyeoJm7D-CPZtuitT.js`),[])}),!0);e.registerExtension({id:j.name,name:M.EXT_MEDIAVIEWER_NAME,description:M.EXT_MEDIAVIEWER_DESC,loader:()=>m(()=>import(`./media-viewer-extension-CpuQxfjF-DUTe_eho.js`),__vite__mapDeps([24,1,2,3,4,5])),icon:`image`});var N={name:`@eclipse-docks/extension-memory-usage`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},P=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-CvKdEf6o-CKybYrBG.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-BMzjKj3o-CT75s1LN.js`),[])}),!0);e.registerExtension({id:N.name,name:P.EXT_MEMORYUSAGE_NAME,description:P.EXT_MEMORYUSAGE_DESC,loader:()=>m(()=>import(`./memory-usage-extension-Yl6iXGvQ-CzULf1R0.js`),__vite__mapDeps([25,1,2,3,4,5])),icon:`microchip`});var F={name:`@eclipse-docks/extension-monaco-editor`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./widget":{types:`./dist/monaco-widget.d.ts`,import:`./dist/widget.js`}},dependencies:{"@eclipse-docks/core":`*`,"monaco-editor":`0.55.1`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},I=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-TtWptOTJ-DaQac9IN.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-DY_jLw5Z-DjsexpCy.js`),[])}),!0);e.registerExtension({id:F.name,name:I.EXT_MONACO_NAME,description:I.EXT_MONACO_DESC,loader:()=>m(()=>import(`./monaco-editor-extension-BAeimqAZ-DWwLk_JT.js`),__vite__mapDeps([26,1,2,3,4,5,27,28,29])),icon:`file-pen`}),e.registerExtension({id:{name:`@eclipse-docks/extension-pglite`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-docks/core":`*`,"@eclipse-docks/extension-catalog":`*`,"@eclipse-docks/extension-notebook":`*`,"@eclipse-docks/extension-sqleditor":`*`,"@electric-sql/pglite":`^0.3.0`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}}.name,name:`PGlite`,description:`In-browser PostgreSQL via PGlite`,loader:()=>m(()=>import(`./pglite-extension-CLG4sGBr-BVDiteVq.js`),__vite__mapDeps([30,1,2,3,4,5,15,16,17])),icon:`database`,dependencies:[`@eclipse-docks/extension-sqleditor`],experimental:!0});var L={name:`@eclipse-docks/extension-python-runtime`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-docks/core":`*`,"@eclipse-docks/extension-monaco-editor":`*`,"@eclipse-docks/extension-notebook":`*`,pyodide:`^0.29.3`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},R=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-CHoexpTu-DKzeL8P0.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-BSbqitYs-BMl1Prme.js`),[])}),!0);e.registerExtension({id:L.name,name:R.EXT_PYTHONRUNTIME_NAME,description:R.EXT_PYTHONRUNTIME_DESC,loader:()=>Promise.all([m(()=>import(`./python-runtime-extension-CS7adESG-DoLdYK_j.js`),__vite__mapDeps([31,1,2,3,4,5,16,17,32,33,34])),m(()=>import(`./commands-CgwOcWiX-B04fO5Bq.js`),__vite__mapDeps([35,1,2,3,4,5,34]))]),icon:`docks python`});var z={name:`@eclipse-docks/extension-rag-system`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},dependencies:{"@eclipse-docks/core":`*`,"@eclipse-docks/extension-ai-system":`*`,"@eclipse-docks/extension-in-browser-ml":`*`,"@langchain/core":`^1.0.0`,"@langchain/textsplitters":`^1.0.0`,"pdfjs-dist":`^4.0.0`,rxdb:`^15.0.0`,rxjs:`^7.8.0`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},B=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-C4Oy9SoE-Cm4QWIFI.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-BGbyrXax-DrmzWtCV.js`),[])}),!0);e.registerExtension({id:z.name,name:B.EXT_RAG_SYSTEM_NAME,description:B.EXT_RAG_SYSTEM_DESC,loader:()=>m(()=>import(`./rag-system-extension-BE7Q_0rq-BK_e_3Yw.js`),__vite__mapDeps([36,1,2,3,4,5,37,7,19,21])),icon:`database`,experimental:!0,dependencies:[`@eclipse-docks/extension-ai-system`,`@eclipse-docks/extension-in-browser-ml`]});var V={name:`@eclipse-docks/extension-settings-tree`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},H=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-BNVmjm3M-CVzMSGNi.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-4qIo7_K0-7KwuJq2z.js`),[])}),!0);e.registerExtension({id:V.name,name:H.EXT_SETTINGS_TREE_NAME,description:H.EXT_SETTINGS_TREE_DESC,loader:()=>m(()=>import(`./settings-tree-extension-BpPkyN9--BDslpW4q.js`),__vite__mapDeps([38,1,2,3,4,5])),icon:`sitemap`}),e.registerExtension({id:{name:`@eclipse-docks/extension-sqleditor`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-docks/core":`*`,"@eclipse-docks/extension-monaco-editor":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}}.name,name:`SQL Editor`,description:`Generic SQL editor with pluggable backends`,loader:()=>m(()=>import(`./sqleditor-extension-CFNQ6Cj0-918gEPPE.js`),__vite__mapDeps([39,1,2,3,4,5,9])),icon:`database`});var U={name:`@eclipse-docks/extension-utils`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`,"@eclipse-docks/extension-python-runtime":`*`,jszip:`^3.10.1`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},W=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-DpWotOVv-B_pzwV4E.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-4j7sK8PT-Dc41TORN.js`),[])}),!0);e.registerExtension({id:U.name,name:W.EXT_UTILS_NAME,description:W.EXT_UTILS_DESC,loader:()=>m(()=>import(`./commands-DXblDlOb-CHDBWpnz.js`),__vite__mapDeps([40,1,2,3,4,5,41,33,34])),icon:`toolbox`,dependencies:[`@eclipse-docks/extension-python-runtime`]});var G={name:`@eclipse-docks/extension-webdav`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},K=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-BGXJczCl-DYmbVvCd.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-D2QUvBv9-DZnMdxFH.js`),[])}),!0);e.registerExtension({id:G.name,name:K.EXT_WEBDAV_NAME,description:K.EXT_WEBDAV_DESC,loader:()=>m(()=>import(`./webdav-extension-BnWGwdSi-C80Qxl8z.js`),__vite__mapDeps([42,1,2,3,4,5])),icon:`cloud`,experimental:!0});var q={name:`@eclipse-docks/extension-webllm`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`,"@eclipse-docks/extension-ai-system":`*`,"@mlc-ai/web-llm":`^0.2.79`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}},J=await u(Object.assign({"./i18n.de.json":()=>m(()=>import(`./i18n.de-CQxA5kmG-BJIYWfu4.js`),[]),"./i18n.en.json":()=>m(()=>import(`./i18n.en-BIC1ZmXn-f4-GqRRW.js`),[])}),!0);e.registerExtension({id:q.name,name:J.EXT_WEBLLM_NAME,description:J.EXT_WEBLLM_DESC,loader:()=>m(()=>import(`./webllmservice-Bdz7vrud-DrUamCxT.js`),__vite__mapDeps([43,1,2,3,4,5,7,19,44])),icon:`robot`,experimental:!0});var oe={name:`@eclipse-docks/extension-webmcp`,version:`0.0.0`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-docks/core":`*`,"@eclipse-docks/extension-ai-system":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-docks/core`}};function se(){return typeof navigator<`u`&&`modelContext`in navigator&&navigator.modelContext!=null}e.registerExtension({id:oe.name,name:`WebMCP`,description:`Exposes app commands as WebMCP tools for browser agents and MCP clients`,loader:async()=>{if(!se())throw Error(`WebMCP extension requires navigator.modelContext (Web Model Context API).`);return m(()=>import(`./webmcp-extension-vZl42m8K-CM6Qjmsv.js`),__vite__mapDeps([45,1,2,3,4,5,7,19]))},icon:`plug`,dependencies:[`@eclipse-docks/extension-ai-system`],experimental:!0});var ce=3,le=5,ue=[{title:`Standup`,time:`Today 9:00`,location:`Room A`},{title:`Sprint planning`,time:`Tomorrow 14:00`,location:`Room B`},{title:`Design review`,time:`Wed 10:00`,location:`Call`}],Y=class extends f{static{this.styles=s`
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
    `}render(){return l`
            <div class="overview">
                <wa-card>
                    <div slot="header" class="card-header">
                        <wa-icon name="list-check"></wa-icon>
                        Tasks
                    </div>
                    <div class="stats">
                        <div class="stat">
                            <span class="stat-value">${le}</span>
                            <span class="stat-label">Open</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${ce}</span>
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
                        ${ue.map(e=>l`
                                <li class="meeting-item">
                                    <span class="meeting-title">${e.title}</span>
                                    <span class="meeting-meta">${e.time} · ${e.location}</span>
                                </li>
                            `)}
                    </ul>
                </wa-card>
            </div>
        `}};Y=c([i(`docks-dashboard-welcome`)],Y);var de=[{id:`1`,title:`Review pull request #142`,done:!1,due:`Today`},{id:`2`,title:`Update documentation`,done:!0},{id:`3`,title:`Fix login redirect bug`,done:!1,due:`Tomorrow`},{id:`4`,title:`Prepare sprint demo`,done:!1,due:`Fri`},{id:`5`,title:`Sync with design team`,done:!0}],X=class extends f{constructor(...e){super(...e),this.tasks=[...de]}static{this.styles=s`
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
    `}toggleTask(e){this.tasks=this.tasks.map(t=>t.id===e?{...t,done:!t.done}:t)}render(){return l`
            <ul class="taslist">
                ${this.tasks.map(e=>l`
                        <li class="tasitem ${e.done?`done`:``}">
                            <wa-checkbox
                                ?checked=${e.done}
                                @change=${()=>this.toggleTask(e.id)}
                                aria-label="${e.title}"
                            ></wa-checkbox>
                            <span class="tastitle">${e.title}</span>
                            ${e.due?l`<span class="tasdue">${e.due}</span>`:``}
                        </li>
                    `)}
            </ul>
        `}};c([n()],X.prototype,`tasks`,void 0),X=c([i(`docks-dashboard-my-tasks`)],X);var Z=[{title:`Standup`,start:`9:00`,end:`9:15`,day:`Mon`,location:`Room A`},{title:`Sprint planning`,start:`14:00`,end:`15:30`,day:`Tue`,location:`Room B`},{title:`Design review`,start:`10:00`,end:`11:00`,day:`Wed`,location:`Call`},{title:`1:1 with manager`,start:`16:00`,end:`16:30`,day:`Thu`,location:`Room C`},{title:`Retrospective`,start:`11:00`,end:`12:00`,day:`Fri`,location:`Room A`}],Q=class extends f{static{this.styles=s`
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
    `}render(){let e=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`];return l`
            <div class="calendar-section">
                <div class="weeheader">
                    <span></span>
                    ${e.map(e=>l`<span class="day-col">${e}</span>`)}
                </div>
                <div class="meetings-grid">
                    <div class="time-slot"></div>
                    ${e.map(e=>l`
                            <div class="day-cell">
                                ${Z.filter(t=>t.day===e).map(e=>l`
                                        <div class="meeting-card">
                                            <div class="title">${e.title}</div>
                                            <div class="time">${e.start} – ${e.end}</div>
                                            <div class="time">${e.location}</div>
                                        </div>
                                    `)}
                            </div>
                        `)}
                </div>
                <h3 style="margin-top: var(--wa-space-xl); margin-bottom: var(--wa-space-m);">This week</h3>
                <ul class="meeting-list">
                    ${Z.map(e=>l`
                            <li>
                                <span class="title">${e.title}</span>
                                <div class="meta">${e.day} ${e.start} – ${e.end} · ${e.location}</div>
                            </li>
                        `)}
                </ul>
            </div>
        `}};Q=c([i(`docks-dashboard-meetings`)],Q),r.registerContribution(`dashboard-toolbar-top`,{label:`Dashboard`,slot:`start`,component:()=>l`
    <div
      style="padding: var(--wa-space-m); display: flex; justify-content: center; align-items: center; gap: var(--wa-space-s); min-width: 48px; min-height: 48px; box-sizing: border-box;"
    >
      <img src="/favicon.svg" width="40" height="40" alt="" />
      <i>My Dashboard</i>
    </div>
`});var $=class extends ne{renderContent(){return l`<slot></slot>`}};$=c([i(`docks-view-wrapper`)],$);var fe=(e,t,n,r,i)=>({name:e,label:t,icon:n,closable:i??!1,toolbar:!1,component:e=>r()}),pe=[[`dashboard-home`,`Overview`,`house`,()=>l`<docks-dashboard-welcome></docks-dashboard-welcome>`,!1],[`dashboard-tasks`,`My Tasks`,`list-check`,()=>l`<docks-dashboard-my-tasks></docks-dashboard-my-tasks>`,!0],[`dashboard-meetings`,`Meetings`,`calendar-days`,()=>l`<docks-dashboard-meetings></docks-dashboard-meetings>`,!0]];for(let[e,t,n,i,a]of pe)r.registerContribution(te,fe(e,t,n,i,a)),r.registerContribution(`dashboard-views`,{label:t,icon:n,showLabel:!0,command:`open_view_as_editor`,params:{name:e}});r.registerContribution(`dashboard-views-toolbar-bottom`,{label:`Profile`,icon:`user`,command:`open_user_profile`}),r.registerContribution(`dashboard-views-toolbar-bottom`,{label:`Settings`,icon:`gear`,command:`open_settings`}),r.registerContribution(ee,{id:`dashboard`,name:`Dashboard`,label:`Dashboard`,icon:`table-cells`,component:()=>l`<style>
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
        <docks-toolbar id="dashboard-toolbar-top"></docks-toolbar>
        <docks-toolbar id="dashboard-toolbar-top-center"></docks-toolbar>
        <docks-toolbar id=${a}></docks-toolbar>
      </div>
      <docks-resizable-grid class="dashboard-main" orientation="horizontal" sizes="15%, 85%">
        <docks-toolbar id="dashboard-views" size="large" orientation="vertical"></docks-toolbar>
        <docks-tabs style="padding: 10px;" id=${d}></docks-tabs>
      </docks-resizable-grid>
    </div>`,onShow(){requestAnimationFrame(()=>{t.execute(`open_view_as_editor`,{params:{name:`dashboard-home`}}).catch(()=>{})})}}),r.registerContribution(o,{label:`Eclipse Docks`,slot:`start`,component:()=>l`
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
        alt="Eclipse Docks"
        style="display: block; height: 28px; width: auto;"
      />
    </div>
  `});var me=document.getElementById(`app-root`)??document.body;p.registerApp({name:`Eclipse Docks`,description:`Eclipse Docks demo app with default extensions.`,layoutId:`standard-full`,metadata:{github:{owner:`eclipse-docks`,repo:`core`}},releaseHistory:_,extensions:[`@eclipse-docks/extension-command-palette`,`@eclipse-docks/extension-command-shell`,`@eclipse-docks/extension-catalog`,`@eclipse-docks/extension-md-editor`,`@eclipse-docks/extension-monaco-editor`,`@eclipse-docks/extension-media-viewer`,`@eclipse-docks/extension-settings-tree`,`@eclipse-docks/extension-memory-usage`,`@eclipse-docks/extension-ai-system`,`@eclipse-docks/extension-dataviewer`]},{autoStart:!0,hostConfig:!0,container:me});