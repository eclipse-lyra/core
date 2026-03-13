import{R as F,x as u,w as c,D as d,F as N,Q as L,W as T,B as v,r as O,X as V,c as q}from"./monaco-sI_ifpX8.js";import{B as E,e as y,t as $,d as b}from"./vendor-3BPrCeYx.js";class W{constructor(e){this.baseUrl=e.url;const t={baseURL:e.url,headers:{"Content-Type":"application/xml"},maxRedirects:5};e.username!==void 0&&(t.auth={username:e.username,password:e.password||""}),this.axios=E.create(t)}async propfind(e,t=1){const o=await this.axios.request({method:"PROPFIND",url:e,headers:{Depth:t.toString()},data:`<?xml version="1.0" encoding="UTF-8"?>
            <d:propfind xmlns:d="DAV:">
                <d:prop>
                    <d:displayname/>
                    <d:resourcetype/>
                    <d:getcontenttype/>
                    <d:getcontentlength/>
                    <d:getlastmodified/>
                    <d:getetag/>
                </d:prop>
            </d:propfind>`});return this.parseMultiStatus(o.data)}async getFile(e){return(await this.axios.get(e,{responseType:"arraybuffer"})).data}async putFile(e,t){await this.axios.put(e,t,{headers:{"Content-Type":"application/octet-stream"}})}async deleteResource(e){await this.axios.delete(e)}async createDirectory(e){await this.axios.request({method:"MKCOL",url:e})}async moveResource(e,t){const r=new URL(t,this.baseUrl).href;await this.axios.request({method:"MOVE",url:e,headers:{Destination:r,Overwrite:"F"}})}async copyResource(e,t){const r=new URL(t,this.baseUrl).href;await this.axios.request({method:"COPY",url:e,headers:{Destination:r,Overwrite:"F"}})}parseMultiStatus(e){const o=new DOMParser().parseFromString(e,"text/xml").querySelectorAll("response"),a=[];return o.forEach(n=>{const i=n.querySelector("href")?.textContent||"",l=new URL(i,this.baseUrl).href,f=n.querySelector("displayname")?.textContent||"",A=!!n.querySelector("resourcetype")?.querySelector("collection"),S=n.querySelector("getcontenttype")?.textContent||void 0,x=n.querySelector("getcontentlength")?.textContent,k=x?parseInt(x):void 0,C=n.querySelector("getlastmodified")?.textContent,U=C?new Date(C):void 0,P=n.querySelector("getetag")?.textContent||void 0;a.push({href:l,displayName:f||l.split("/").filter(Boolean).pop()||"",isDirectory:A,contentType:S,contentLength:k,lastModified:U,etag:P})}),a}getBaseUrl(){return this.baseUrl}}class D extends N{constructor(e,t,r){super(),this.client=e,this.resource=t,this.parent=r}getName(){return this.resource.displayName}getParent(){return this.parent}async getContents(e){const t=await this.client.getFile(this.resource.href);if(!e||e?.contentType===L.TEXT)return new TextDecoder().decode(t);if(e?.blob)return new Blob([t]);if(e?.uri){const r=new Blob([t]);return URL.createObjectURL(r)}return t}async saveContents(e,t){await this.client.putFile(this.resource.href,e),u(d,c.getWorkspaceSync()??this.getWorkspace())}async size(){return this.resource.contentLength??null}async delete(){await this.client.deleteResource(this.resource.href),u(d,c.getWorkspaceSync()??this.getWorkspace())}async copyTo(e){const t=await this.getWorkspace().getResource(e,{create:!0});if(!t)throw new Error(`Failed to create target file: ${e}`);const r=await this.getContents({blob:!0});await t.saveContents(r)}async rename(e){if(this.getName()===e)return;const t=this.resource.href.split("/");t[t.length-1]=e;const r=t.join("/");await this.client.moveResource(this.resource.href,r),this.resource.href=r,this.resource.displayName=e,u(d,c.getWorkspaceSync()??this.getWorkspace())}}class p extends F{constructor(e,t,r,o){super(),this.client=e,this.resource=t,this.parent=r,this.connectionInfo=o}getName(){return this.resource.displayName}getParent(){return this.parent}async listChildren(e=!1){if(e||!this.children){const t=await this.client.propfind(this.resource.href,1);this.children=new Map;for(let r=1;r<t.length;r++){const o=t[r],a=o.isDirectory?new p(this.client,o,this):new D(this.client,o,this);this.children.set(o.displayName,a)}}return Array.from(this.children.values())}async getResource(e,t){if(!e)throw new Error("No path provided");const r=e.split("/").filter(a=>a.trim());let o=this;for(let a=0;a<r.length;a++){const n=r[a];if(o instanceof p){if(await o.listChildren(),!o.children)return null;let i=o.children.get(n);if(!i&&t?.create){const l=this.buildPath(o.resource.href,n);if(a<r.length-1){await this.client.createDirectory(l);const f={href:l,displayName:n,isDirectory:!0};i=new p(this.client,f,o),o.children.set(n,i)}else{await this.client.putFile(l,"");const f={href:l,displayName:n,isDirectory:!1,contentLength:0};return i=new D(this.client,f,o),o.children.set(n,i),u(d,c.getWorkspaceSync()??this.getWorkspace()),i}}if(!i)return null;o=i}}return o}async delete(e,t=!0){if(!e)return this.getParent()?.delete(this.getName());const r=this.buildPath(this.resource.href,e);await this.client.deleteResource(r),this.children?.delete(e),u(d,c.getWorkspaceSync()??this.getWorkspace())}async copyTo(e){for(const t of await this.listChildren()){const r=[e,t.getName()].join("/");await t.copyTo(r)}}async rename(e){if(this.getName()===e)return;const t=this.resource.href.split("/").filter(Boolean);t[t.length-1]=e;const r="/"+t.join("/")+"/";await this.client.moveResource(this.resource.href,r),this.resource.href=r,this.resource.displayName=e,u(d,c.getWorkspaceSync()??this.getWorkspace())}touch(){u(d,c.getWorkspaceSync()??this.getWorkspace())}buildPath(e,t){return e.endsWith("/")?e+t:e+"/"+t}getClient(){return this.client}getConnectionInfo(){return this.connectionInfo?this.connectionInfo:{url:this.client.getBaseUrl()}}}var B=Object.defineProperty,M=Object.getOwnPropertyDescriptor,g=(s,e,t,r)=>{for(var o=r>1?void 0:r?M(e,t):e,a=s.length-1,n;a>=0;a--)(n=s[a])&&(o=(r?n(e,t,o):n(o))||o);return r&&o&&B(e,t,o),o};const w=v("WebDAV");let h=class extends T{constructor(){super(...arguments),this.url="",this.username="",this.password="",this.connecting=!1,this.showHelp=!1}getResult(){return this}async handleConnect(){if(!this.url)return w.error("Please provide a URL"),!1;try{new URL(this.url)}catch{return w.error("Invalid URL format"),!1}this.connecting=!0;try{let s;const e=this.url.match(/^(https?:\/\/[^\/]+)\/(?:index\.php\/)?s\/([A-Za-z0-9]+)/);if(e){const t=e[1],r=e[2];s={url:`${t}/public.php/webdav/`,username:r,password:this.password||""}}else s={url:this.url,...this.username&&this.password&&{username:this.username,password:this.password}};return await c.connectWorkspace(s),w.info("Successfully connected to WebDAV workspace"),this.dispatchEvent(new CustomEvent("connected",{bubbles:!0,composed:!0})),!0}catch(s){return s instanceof Error?w.error(`Connection failed: ${s.message}`):w.error("Failed to connect to WebDAV server"),!1}finally{this.connecting=!1}}toggleHelp(){this.showHelp=!this.showHelp}render(){return b`
            <style>
                .webdav-connect-dialog {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 500px;
                    padding: 1.5rem;
                    height: 420px;
                    box-sizing: border-box;
                    overflow-y: auto;
                }
                
                .webdav-connect-dialog h2 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }
                
                .password-warning {
                    font-size: 0.8rem;
                    color: var(--wa-color-neutral-400);
                    margin: 0.25rem 0 0.5rem 0;
                }
                
                .help-text {
                    background: var(--wa-color-neutral-50);
                    padding: 1rem;
                    border-radius: 4px;
                    font-size: 0.875rem;
                    margin-top: 1rem;
                }
                
                .help-text h3 {
                    margin-top: 0;
                    font-size: 1rem;
                }
                
                .help-text p {
                    margin: 0.5rem 0;
                }
                
                .help-text code {
                    display: block;
                    background: var(--wa-color-neutral-100);
                    padding: 0.5rem;
                    border-radius: 3px;
                    margin: 0.5rem 0;
                    font-family: monospace;
                    word-break: breaall;
                }
                
                .help-toggle {
                    cursor: pointer;
                    color: var(--wa-color-primary-600);
                    font-size: 0.875rem;
                    text-decoration: underline;
                }
            </style>
            
            <div class="webdav-connect-dialog">
                <wa-input
                    label="WebDAV URL"
                    placeholder="https://cloud.example.com/remote.php/dav/files/username/"
                    .value=${this.url}
                    @input=${s=>this.url=s.target.value}
                    required
                    help-text="The full WebDAV endpoint URL">
                </wa-input>
                
                <wa-input
                    label="Username (optional)"
                    placeholder="username"
                    .value=${this.username}
                    @input=${s=>this.username=s.target.value}
                    help-text="Leave empty for public/shared folders">
                </wa-input>
                
                <wa-input
                    type="password"
                    label="Password (optional)"
                    placeholder="Password or App Password"
                    .value=${this.password}
                    @input=${s=>this.password=s.target.value}
                    help-text="Leave empty for public/shared folders. Use an app password if 2FA is enabled.">
                </wa-input>
                <p class="password-warning">
                    Passwords are stored locally in this browser (base64 encoded). Only use this on machines you trust.
                </p>
                
                ${this.showHelp?b`
                    <div class="help-text">
                        <h3>WebDAV Connection Help</h3>
                        
                        <p><strong>Public/Shared Folders:</strong></p>
                        <p>For publicly shared WebDAV folders, just enter the URL and leave username/password empty.</p>
                        
                        <p><strong>Nextcloud Public Shares:</strong></p>
                        <p>For Nextcloud public shares (e.g., https://cloud.example.com/s/TOKEN):</p>
                        <ul>
                            <li><strong>URL:</strong> You can paste the share link directly into the URL field.</li>
                            <li><strong>Username:</strong> Will be filled automatically from the share token.</li>
                            <li><strong>Password:</strong> Leave empty (or enter the share password if the link is protected).</li>
                        </ul>
                        
                        <p><strong>Nextcloud Personal Files:</strong></p>
                        <p>Your WebDAV URL should look like:</p>
                        <code>https://your-cloud.com/remote.php/dav/files/USERNAME/</code>
                        
                        <p><strong>ownCloud:</strong></p>
                        <code>https://your-owncloud.com/remote.php/dav/files/USERNAME/</code>
                        
                        <p><strong>Two-Factor Authentication:</strong></p>
                        <p>If you have 2FA enabled:</p>
                        <ol>
                            <li>Go to your account settings</li>
                            <li>Find "Security" or "App passwords"</li>
                            <li>Generate a new app password</li>
                            <li>Use that password here instead of your regular password</li>
                        </ol>
                        
                        <p><strong>CORS Issues:</strong></p>
                        <p>If connection fails, your WebDAV server may need CORS configuration. 
                        Contact your administrator or check the server documentation.</p>
                        
                        <p><strong>Security note:</strong> Connection details (including password, if provided) are stored locally in this browser using base64 encoding. Only use this on machines and profiles you trust.</p>
                    </div>
                `:""}
            </div>
        `}};g([y()],h.prototype,"url",2);g([y()],h.prototype,"username",2);g([y()],h.prototype,"password",2);g([y()],h.prototype,"connecting",2);g([y()],h.prototype,"showHelp",2);h=g([$("lyra-webdav-connect")],h);const m=v("WebDAV");O({command:{id:"workspace.connect.webdav",name:"WebDAV / NextCloud",description:"Connect to WebDAV servers, Nextcloud shares, ownCloud, and other cloud storage",parameters:[{name:"url",type:"string",description:"WebDAV URL: share link (https://cloud.example.com/s/TOKEN) or direct endpoint",required:!1},{name:"password",type:"string",description:"Password (if required)",required:!1}]},handler:{execute:async s=>{const e=s.parameters?.url,t=s.parameters?.password;if(!e){await V.open("webdav-connect-dialog");return}try{let r;const o=e.match(/^(https?:\/\/[^\/]+)\/(?:index\.php\/)?s\/([A-Za-z0-9]+)/);if(o){const a=o[1],n=o[2];r={url:`${a}/public.php/webdav/`,username:n,password:t||""}}else r={url:e,...t&&{username:"",password:t}};await c.connectWorkspace(r),m.info("Connected to WebDAV workspace")}catch(r){r instanceof Error?m.error(`Failed to connect: ${r.message}`):m.error("Failed to connect to WebDAV workspace")}}},contribution:{target:"filebrowser.connections",name:"filebrowser.connections.webdav",label:"WebDAV / NextCloud",icon:"cloud"}});const I=v("WebDAVExtension");c.registerContribution({type:"webdav",name:"webdav",canHandle(s){return s&&typeof s=="object"&&"url"in s&&typeof s.url=="string"},async connect(s){const e=new W(s),t={href:s.url,displayName:R(s.url),isDirectory:!0};return new p(e,t,void 0,s)},async restore(s){if(!(!s||!s.url))try{const e={url:s.url,username:s.username,password:s.password?H(s.password):void 0},t=new W(e),r={href:s.url,displayName:R(s.url),isDirectory:!0};return new p(t,r,void 0,e)}catch(e){I.error("Failed to restore WebDAV workspace:",e);return}},async persist(s){if(s instanceof p){const e=s.getConnectionInfo();return e?{url:e.url,...e.username!==void 0?{username:e.username}:{},...e.password!==void 0?{password:j(e.password)}:{}}:null}return null}});q.registerContribution("dialogs",{label:"Connect to WebDAV / NextCloud",icon:"cloud",name:"dialog.webdav.connect",id:"webdav-connect-dialog",buttons:[{id:"help",label:"Show help",variant:"neutral"},{id:"cancel",label:"Cancel",variant:"default"},{id:"connect",label:"Connect",variant:"primary"}],component:s=>b`<lyra-webdav-connect></lyra-webdav-connect>`,onButton:async(s,e,t)=>{const r=e;return s==="help"?(r?.toggleHelp(),!1):s==="connect"?r?.handleConnect?await r.handleConnect()?(t?.close?.(),!0):!1:!0:(s==="cancel"&&t?.close?.(),!0)}});function R(s){try{const t=new URL(s).pathname.split("/").filter(Boolean);return t[t.length-1]||"workspace"}catch{return"workspace"}}function j(s){try{const t=new TextEncoder().encode(s);let r="";for(const o of t)r+=String.fromCharCode(o);return btoa(r)}catch{return s}}function H(s){try{const e=atob(s),t=new Uint8Array(e.length);for(let o=0;o<e.length;o++)t[o]=e.charCodeAt(o);return new TextDecoder().decode(t)}catch{return s}}export{W as WebDAVClient,p as WebDAVDirectoryResource,D as WebDAVFileResource};
