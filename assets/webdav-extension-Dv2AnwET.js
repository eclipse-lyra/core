import{U as S,x as u,w as c,D as h,F as E,R as F,X as N,B as v,r as V,Y as T,c as O}from"./monaco-wqKCAqma.js";import{e as y,t as $,d as b}from"./vendor-CbQe4k-6.js";class D{constructor(e){if(this.baseUrl=e.url,e.username!==void 0){const t=`${e.username}:${e.password??""}`;this.authHeader=`Basic ${btoa(t)}`}}async propfind(e,t=1){const o=await fetch(new URL(e,this.baseUrl).href,{method:"PROPFIND",headers:this.buildHeaders({Depth:t.toString(),"Content-Type":"application/xml"}),body:`<?xml version="1.0" encoding="UTF-8"?>
            <d:propfind xmlns:d="DAV:">
                <d:prop>
                    <d:displayname/>
                    <d:resourcetype/>
                    <d:getcontenttype/>
                    <d:getcontentlength/>
                    <d:getlastmodified/>
                    <d:getetag/>
                </d:prop>
            </d:propfind>`});if(!o.ok)throw new Error(`WebDAV PROPFIND failed with status ${o.status}`);const a=await o.text();return this.parseMultiStatus(a)}async getFile(e){const t=await fetch(new URL(e,this.baseUrl).href,{method:"GET",headers:this.buildHeaders()});if(!t.ok)throw new Error(`WebDAV GET failed with status ${t.status}`);return await t.blob()}async putFile(e,t){const s=typeof t=="string"?new Blob([t]):t,o=await fetch(new URL(e,this.baseUrl).href,{method:"PUT",headers:this.buildHeaders({"Content-Type":"application/octet-stream"}),body:s});if(!o.ok)throw new Error(`WebDAV PUT failed with status ${o.status}`)}async deleteResource(e){const t=await fetch(new URL(e,this.baseUrl).href,{method:"DELETE",headers:this.buildHeaders()});if(!t.ok)throw new Error(`WebDAV DELETE failed with status ${t.status}`)}async createDirectory(e){const t=await fetch(new URL(e,this.baseUrl).href,{method:"MKCOL",headers:this.buildHeaders()});if(!t.ok)throw new Error(`WebDAV MKCOL failed with status ${t.status}`)}async moveResource(e,t){const s=new URL(t,this.baseUrl).href,o=await fetch(new URL(e,this.baseUrl).href,{method:"MOVE",headers:this.buildHeaders({Destination:s,Overwrite:"F"})});if(!o.ok)throw new Error(`WebDAV MOVE failed with status ${o.status}`)}async copyResource(e,t){const s=new URL(t,this.baseUrl).href,o=await fetch(new URL(e,this.baseUrl).href,{method:"COPY",headers:this.buildHeaders({Destination:s,Overwrite:"F"})});if(!o.ok)throw new Error(`WebDAV COPY failed with status ${o.status}`)}buildHeaders(e){const t={...e??{}};return this.authHeader&&(t.Authorization=this.authHeader),t}parseMultiStatus(e){const o=new DOMParser().parseFromString(e,"text/xml").querySelectorAll("response"),a=[];return o.forEach(n=>{const i=n.querySelector("href")?.textContent||"",l=new URL(i,this.baseUrl).href,w=n.querySelector("displayname")?.textContent||"",R=!!n.querySelector("resourcetype")?.querySelector("collection"),A=n.querySelector("getcontenttype")?.textContent||void 0,x=n.querySelector("getcontentlength")?.textContent,k=x?parseInt(x):void 0,C=n.querySelector("getlastmodified")?.textContent,L=C?new Date(C):void 0,P=n.querySelector("getetag")?.textContent||void 0;a.push({href:l,displayName:w||l.split("/").filter(Boolean).pop()||"",isDirectory:R,contentType:A,contentLength:k,lastModified:L,etag:P})}),a}getBaseUrl(){return this.baseUrl}}class U extends E{constructor(e,t,s){super(),this.client=e,this.resource=t,this.parent=s}getName(){return this.resource.displayName}getParent(){return this.parent}async getContents(e){const t=await this.client.getFile(this.resource.href);return!e||e?.contentType===F.TEXT?await t.text():e?.blob?t:e?.uri?URL.createObjectURL(t):await t.arrayBuffer()}async saveContents(e,t){await this.client.putFile(this.resource.href,e),u(h,c.getWorkspaceSync()??this.getWorkspace())}async size(){return this.resource.contentLength??null}async delete(){await this.client.deleteResource(this.resource.href),u(h,c.getWorkspaceSync()??this.getWorkspace())}async copyTo(e){const t=await this.getWorkspace().getResource(e,{create:!0});if(!t)throw new Error(`Failed to create target file: ${e}`);const s=await this.getContents({blob:!0});await t.saveContents(s)}async rename(e){if(this.getName()===e)return;const t=this.resource.href.split("/");t[t.length-1]=e;const s=t.join("/");await this.client.moveResource(this.resource.href,s),this.resource.href=s,this.resource.displayName=e,u(h,c.getWorkspaceSync()??this.getWorkspace())}}class d extends S{constructor(e,t,s,o){super(),this.client=e,this.resource=t,this.parent=s,this.connectionInfo=o}getName(){return this.resource.displayName}getParent(){return this.parent}async listChildren(e=!1){if(e||!this.children){const t=await this.client.propfind(this.resource.href,1);this.children=new Map;for(let s=1;s<t.length;s++){const o=t[s],a=o.isDirectory?new d(this.client,o,this):new U(this.client,o,this);this.children.set(o.displayName,a)}}return Array.from(this.children.values())}async getResource(e,t){if(!e)throw new Error("No path provided");const s=e.split("/").filter(a=>a.trim());let o=this;for(let a=0;a<s.length;a++){const n=s[a];if(o instanceof d){if(await o.listChildren(),!o.children)return null;let i=o.children.get(n);if(!i&&t?.create){const l=this.buildPath(o.resource.href,n);if(a<s.length-1){await this.client.createDirectory(l);const w={href:l,displayName:n,isDirectory:!0};i=new d(this.client,w,o),o.children.set(n,i)}else{await this.client.putFile(l,"");const w={href:l,displayName:n,isDirectory:!1,contentLength:0};return i=new U(this.client,w,o),o.children.set(n,i),u(h,c.getWorkspaceSync()??this.getWorkspace()),i}}if(!i)return null;o=i}}return o}async delete(e,t=!0){if(!e)return this.getParent()?.delete(this.getName());const s=this.buildPath(this.resource.href,e);await this.client.deleteResource(s),this.children?.delete(e),u(h,c.getWorkspaceSync()??this.getWorkspace())}async copyTo(e){for(const t of await this.listChildren()){const s=[e,t.getName()].join("/");await t.copyTo(s)}}async rename(e){if(this.getName()===e)return;const t=this.resource.href.split("/").filter(Boolean);t[t.length-1]=e;const s="/"+t.join("/")+"/";await this.client.moveResource(this.resource.href,s),this.resource.href=s,this.resource.displayName=e,u(h,c.getWorkspaceSync()??this.getWorkspace())}touch(){u(h,c.getWorkspaceSync()??this.getWorkspace())}buildPath(e,t){return e.endsWith("/")?e+t:e+"/"+t}getClient(){return this.client}getConnectionInfo(){return this.connectionInfo?this.connectionInfo:{url:this.client.getBaseUrl()}}}var H=Object.defineProperty,q=Object.getOwnPropertyDescriptor,f=(r,e,t,s)=>{for(var o=s>1?void 0:s?q(e,t):e,a=r.length-1,n;a>=0;a--)(n=r[a])&&(o=(s?n(e,t,o):n(o))||o);return s&&o&&H(e,t,o),o};const g=v("WebDAV");let p=class extends N{constructor(){super(...arguments),this.url="",this.username="",this.password="",this.connecting=!1,this.showHelp=!1}getResult(){return this}async handleConnect(){if(!this.url)return g.error("Please provide a URL"),!1;try{new URL(this.url)}catch{return g.error("Invalid URL format"),!1}this.connecting=!0;try{let r;const e=this.url.match(/^(https?:\/\/[^\/]+)\/(?:index\.php\/)?s\/([A-Za-z0-9]+)/);if(e){const t=e[1],s=e[2];r={url:`${t}/public.php/webdav/`,username:s,password:this.password||""}}else r={url:this.url,...this.username&&this.password&&{username:this.username,password:this.password}};return await c.connectWorkspace(r),g.info("Successfully connected to WebDAV workspace"),this.dispatchEvent(new CustomEvent("connected",{bubbles:!0,composed:!0})),!0}catch(r){return r instanceof Error?g.error(`Connection failed: ${r.message}`):g.error("Failed to connect to WebDAV server"),!1}finally{this.connecting=!1}}toggleHelp(){this.showHelp=!this.showHelp}render(){return b`
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
                    @input=${r=>this.url=r.target.value}
                    required
                    help-text="The full WebDAV endpoint URL">
                </wa-input>
                
                <wa-input
                    label="Username (optional)"
                    placeholder="username"
                    .value=${this.username}
                    @input=${r=>this.username=r.target.value}
                    help-text="Leave empty for public/shared folders">
                </wa-input>
                
                <wa-input
                    type="password"
                    label="Password (optional)"
                    placeholder="Password or App Password"
                    .value=${this.password}
                    @input=${r=>this.password=r.target.value}
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
        `}};f([y()],p.prototype,"url",2);f([y()],p.prototype,"username",2);f([y()],p.prototype,"password",2);f([y()],p.prototype,"connecting",2);f([y()],p.prototype,"showHelp",2);p=f([$("lyra-webdav-connect")],p);const m=v("WebDAV");V({command:{id:"workspace.connect.webdav",name:"WebDAV / NextCloud",description:"Connect to WebDAV servers, Nextcloud shares, ownCloud, and other cloud storage",parameters:[{name:"url",type:"string",description:"WebDAV URL: share link (https://cloud.example.com/s/TOKEN) or direct endpoint",required:!1},{name:"password",type:"string",description:"Password (if required)",required:!1}]},handler:{execute:async r=>{const e=r.parameters?.url,t=r.parameters?.password;if(!e){await T.open("webdav-connect-dialog");return}try{let s;const o=e.match(/^(https?:\/\/[^\/]+)\/(?:index\.php\/)?s\/([A-Za-z0-9]+)/);if(o){const a=o[1],n=o[2];s={url:`${a}/public.php/webdav/`,username:n,password:t||""}}else s={url:e,...t&&{username:"",password:t}};await c.connectWorkspace(s),m.info("Connected to WebDAV workspace")}catch(s){s instanceof Error?m.error(`Failed to connect: ${s.message}`):m.error("Failed to connect to WebDAV workspace")}}},contribution:{target:"filebrowser.connections",name:"filebrowser.connections.webdav",label:"WebDAV / NextCloud",icon:"cloud"}});const M=v("WebDAVExtension");c.registerContribution({type:"webdav",name:"webdav",canHandle(r){return r&&typeof r=="object"&&"url"in r&&typeof r.url=="string"},async connect(r){const e=new D(r),t={href:r.url,displayName:W(r.url),isDirectory:!0};return new d(e,t,void 0,r)},async restore(r){if(!(!r||!r.url))try{const e={url:r.url,username:r.username,password:r.password?B(r.password):void 0},t=new D(e),s={href:r.url,displayName:W(r.url),isDirectory:!0};return new d(t,s,void 0,e)}catch(e){M.error("Failed to restore WebDAV workspace:",e);return}},async persist(r){if(r instanceof d){const e=r.getConnectionInfo();return e?{url:e.url,...e.username!==void 0?{username:e.username}:{},...e.password!==void 0?{password:I(e.password)}:{}}:null}return null}});O.registerContribution("dialogs",{label:"Connect to WebDAV / NextCloud",icon:"cloud",name:"dialog.webdav.connect",id:"webdav-connect-dialog",buttons:[{id:"help",label:"Show help",variant:"neutral"},{id:"cancel",label:"Cancel",variant:"default"},{id:"connect",label:"Connect",variant:"primary"}],component:r=>b`<lyra-webdav-connect></lyra-webdav-connect>`,onButton:async(r,e,t)=>{const s=e;return r==="help"?(s?.toggleHelp(),!1):r==="connect"?s?.handleConnect?await s.handleConnect()?(t?.close?.(),!0):!1:!0:(r==="cancel"&&t?.close?.(),!0)}});function W(r){try{const t=new URL(r).pathname.split("/").filter(Boolean);return t[t.length-1]||"workspace"}catch{return"workspace"}}function I(r){try{const t=new TextEncoder().encode(r);let s="";for(const o of t)s+=String.fromCharCode(o);return btoa(s)}catch{return r}}function B(r){try{const e=atob(r),t=new Uint8Array(e.length);for(let o=0;o<e.length;o++)t[o]=e.charCodeAt(o);return new TextDecoder().decode(t)}catch{return r}}export{D as WebDAVClient,d as WebDAVDirectoryResource,U as WebDAVFileResource};
