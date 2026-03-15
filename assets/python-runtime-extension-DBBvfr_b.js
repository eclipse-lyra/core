const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/python-editor-D1v7-A2O.js","assets/vendor-DlX8FWQM.js","assets/vendor-CTYeukuQ.css","assets/monaco-m3uC0Av4.js","assets/monaco-Dvl_Svmm.css","assets/pyservice-B0GYzvjy.js","assets/package-manager-DNETSOPe.js","assets/pglite-D5Q8bqdb.js"])))=>i.map(i=>d[i]);
import{d as h,_ as y}from"./vendor-DlX8FWQM.js";import{w as g,c as u,r as l,t as f,j as m,I as v}from"./monaco-m3uC0Av4.js";import{T as P}from"./pglite-D5Q8bqdb.js";import{P as s}from"./pyservice-B0GYzvjy.js";import{p as c}from"./package-manager-DNETSOPe.js";class _{constructor(){this.id="python",this.label="Python",this.language="python",this.pyenv=null,this.requiredPackages=[]}async connect(t){if(this.pyenv)return;this.requiredPackages=t?.requiredPackages??[],this.pyenv=new s;const e=await g.getWorkspace();await this.pyenv.init(e),this.requiredPackages.length>0&&await this.pyenv.loadPackages(this.requiredPackages);try{await this.pyenv.execCode(`
try:
    import matplotlib
    matplotlib.use('agg')
    import matplotlib.pyplot as plt
    import io
    import base64
    _original_show = plt.show
    _display_data = None
    def _patched_show(*args, **kwargs):
        global _display_data
        if plt.get_fignums():
            fig = plt.gcf()
            buffer = io.BytesIO()
            fig.savefig(buffer, format='png', bbox_inches='tight', dpi=100)
            buffer.seek(0)
            _display_data = base64.b64encode(buffer.read()).decode('utf-8')
            plt.close(fig)
        pass
    plt.show = _patched_show
except ImportError:
    pass
`)}catch{}}async execute(t){if(this.pyenv||await this.connect(),!this.pyenv)return{error:"Python kernel not initialized"};try{const e=await this.pyenv.execCode(t),i=[];if(e&&typeof e=="object"&&"console"in e){const a=e.console;if(Array.isArray(a)&&a.length>0){const o=a.filter(p=>p&&String(p).trim());o.length>0&&i.push(...o.map(String))}}let r;try{const a=await this.pyenv.execCode('_display_data if "_display_data" in dir() else None'),o=a&&typeof a=="object"&&a!==null&&"result"in a?a.result:a;o!=null&&String(o)!=="None"&&String(o)!=="undefined"&&(r=String(o),await this.pyenv.execCode("_display_data = None"))}catch{}if(!r){const a=e&&typeof e=="object"&&e!==null&&"result"in e?e.result:e;if(a!=null&&String(a)!=="undefined"){const o=String(a);o&&o!=="undefined"&&i.push(o)}}return{data:i.length>0?i.join(`
`):void 0,imageData:r}}catch(e){return{error:e instanceof Error?e.message:String(e)}}}async getVersion(){if(this.pyenv)try{return await this.pyenv.getVersion()??void 0}catch{return}}interrupt(){this.pyenv?.interrupt?.()}async restart(){this.pyenv&&(this.pyenv.close(),this.pyenv=null),await this.connect()}openPackageManager(t){this.pyenv&&c.showPackageManager({packages:t?.requiredPackages??[],pyenv:this.pyenv,onPackageAdded:t?.onPackageAdded,onPackageRemoved:t?.onPackageRemoved})}close(){this.pyenv&&(this.pyenv.close(),this.pyenv=null)}}const k={id:"python",label:"Python",language:"python",loadKernel:async()=>new _},w="# @py-packages:",d=/^#\s*@py-packages:\s*(.+)$/i;function b(n){const e=(n.split(`
`)[0]??"").match(d);return e?e[1].split(",").map(i=>i.trim()).filter(i=>i.length>0):[]}function N(n,t){const e=n.split(`
`),i=e.findIndex(a=>d.test(a)),r=t.length>0?`${w} ${t.join(", ")}`:null;return i>=0?r?e[i]=r:e.splice(i,1):r&&e.unshift(r),e.join(`
`)}u.registerContribution(P,k);l({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async n=>{const t=n.params?.script;if(!t)return;const e=new s;await e.init(void 0,{params:n.params}),await e.execScript(t)}}});l({command:{id:"python.openEditorPackageManager",name:"Manage packages",description:"Manage Python packages for the editor environment",parameters:[]},handler:{canExecute:n=>!!n.activeEditor?.isLanguage?.("python"),execute:async n=>{const t=n.activeEditor;if(!t){f("No active editor");return}const e=t?.getContent?.()??"",i=b(e),r=t.getPyEnv?.();c.showPackageManager({packages:i,pyenv:r})}}});m.registerEditorInputHandler({editorId:"system.python-editor",label:"Python",icon:"lyra python",lazyInit:async()=>{await y(()=>import("./python-editor-D1v7-A2O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))},canHandle:n=>n instanceof v&&n.getName().toLowerCase().endsWith(".py"),ranking:1e3,handle:async n=>{const t={title:n.getWorkspacePath(),data:n,key:n.getWorkspacePath(),icon:"python",noOverflow:!1,state:{},component:()=>null};return t.component=()=>h`<lyra-python-editor .input=${t}></lyra-python-editor>`,t}});const R=Object.freeze(Object.defineProperty({__proto__:null,PyEnv:s,pythonPackageManagerService:c},Symbol.toStringTag,{value:"Module"}));export{R as a,N as c,b as p};
