const nd="modulepreload",ld=function(e){return"/"+e},$n={},Ot=function(t,i,r){let o=Promise.resolve();if(i&&i.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");o=c(i.map(h=>{if(h=ld(h),h in $n)return;$n[h]=!0;const u=h.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${f}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":nd,u||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((g,b)=>{m.addEventListener("load",g),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};class Da{constructor(t){this.children=[],this.variables=t,this.proxy=new Proxy(t,this)}get(t,i){return t[i]||this.parent?.getProxy()[i]}set(t,i,r){t[i]=r}put(t,i){this.variables[t]=i}getProxy(){return this.proxy}createChild(t={}){const i=new Da(t);return i.parent=this,this.children.push(i),i}getChildren(){return this.children}getParent(){return this.parent}destroy(){const t=this.parent?.children.indexOf(this);t!==void 0&&t>=0&&this.parent?.children.splice(t,1),this.parent=void 0}}const $t=new Da({}),ki=$t.createChild({});const _o=globalThis,Oa=_o.ShadowRoot&&(_o.ShadyCSS===void 0||_o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ia=Symbol(),Sn=new WeakMap;let Il=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==Ia)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Oa&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=Sn.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Sn.set(i,t))}return t}toString(){return this.cssText}};const cd=e=>new Il(typeof e=="string"?e:e+"",void 0,Ia),C=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Il(i,e,Ia)},dd=(e,t)=>{if(Oa)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),o=_o.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)}},En=Oa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return cd(i)})(e):e;const{is:hd,defineProperty:ud,getOwnPropertyDescriptor:pd,getOwnPropertyNames:fd,getOwnPropertySymbols:md,getPrototypeOf:gd}=Object,cs=globalThis,An=cs.trustedTypes,bd=An?An.emptyScript:"",wd=cs.reactiveElementPolyfillSupport,Wr=(e,t)=>e,Mo={toAttribute(e,t){switch(t){case Boolean:e=e?bd:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Pa=(e,t)=>!hd(e,t),Ln={attribute:!0,type:String,converter:Mo,reflect:!1,useDefault:!1,hasChanged:Pa};Symbol.metadata??=Symbol("metadata"),cs.litPropertyMetadata??=new WeakMap;let tr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Ln){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,i);o!==void 0&&ud(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){const{get:o,set:s}=pd(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get:o,set(a){const l=o?.call(this);s?.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ln}static _$Ei(){if(this.hasOwnProperty(Wr("elementProperties")))return;const t=gd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Wr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wr("properties"))){const i=this.properties,r=[...fd(i),...md(i)];for(const o of r)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[r,o]of i)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const o=this._$Eu(i,r);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(En(o))}else t!==void 0&&i.push(En(t));return i}static _$Eu(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$ET(t,i){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:Mo).toAttribute(i,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,i){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Mo;this._$Em=o;const l=a.fromAttribute(i,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,i,r,o=!1,s){if(t!==void 0){const a=this.constructor;if(o===!1&&(s=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??Pa)(s,i)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:r,reflect:o,wrapped:s},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??i??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(i=void 0),this._$AL.set(t,i)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r){const{wrapped:a}=s,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(i)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};tr.elementStyles=[],tr.shadowRootOptions={mode:"open"},tr[Wr("elementProperties")]=new Map,tr[Wr("finalized")]=new Map,wd?.({ReactiveElement:tr}),(cs.reactiveElementVersions??=[]).push("2.1.2");const Ma=globalThis,_n=e=>e,No=Ma.trustedTypes,Tn=No?No.createPolicy("lit-html",{createHTML:e=>e}):void 0,Pl="$lit$",ri=`lit$${Math.random().toFixed(9).slice(2)}$`,Ml="?"+ri,vd=`<${Ml}>`,Ii=document,Zr=()=>Ii.createComment(""),Qr=e=>e===null||typeof e!="object"&&typeof e!="function",Na=Array.isArray,yd=e=>Na(e)||typeof e?.[Symbol.iterator]=="function",Ts=`[ 	
\f\r]`,Rr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zn=/-->/g,Rn=/>/g,Ei=RegExp(`>|${Ts}(?:([^\\s"'>=/]+)(${Ts}*=${Ts}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dn=/'/g,On=/"/g,Nl=/^(?:script|style|textarea|title)$/i,xd=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),p=xd(1),Ft=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),In=new WeakMap,Ri=Ii.createTreeWalker(Ii,129);function Fl(e,t){if(!Na(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tn!==void 0?Tn.createHTML(t):t}const kd=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":t===3?"<math>":"",a=Rr;for(let l=0;l<i;l++){const c=e[l];let h,u,f=-1,m=0;for(;m<c.length&&(a.lastIndex=m,u=a.exec(c),u!==null);)m=a.lastIndex,a===Rr?u[1]==="!--"?a=zn:u[1]!==void 0?a=Rn:u[2]!==void 0?(Nl.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=Ei):u[3]!==void 0&&(a=Ei):a===Ei?u[0]===">"?(a=o??Rr,f=-1):u[1]===void 0?f=-2:(f=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?Ei:u[3]==='"'?On:Dn):a===On||a===Dn?a=Ei:a===zn||a===Rn?a=Rr:(a=Ei,o=void 0);const g=a===Ei&&e[l+1].startsWith("/>")?" ":"";s+=a===Rr?c+vd:f>=0?(r.push(h),c.slice(0,f)+Pl+c.slice(f)+ri+g):c+ri+(f===-2?l:g)}return[Fl(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Jr{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,a=0;const l=t.length-1,c=this.parts,[h,u]=kd(t,i);if(this.el=Jr.createElement(h,r),Ri.currentNode=this.el.content,i===2||i===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Ri.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(Pl)){const m=u[a++],g=o.getAttribute(f).split(ri),b=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?$d:b[1]==="?"?Sd:b[1]==="@"?Ed:hs}),o.removeAttribute(f)}else f.startsWith(ri)&&(c.push({type:6,index:s}),o.removeAttribute(f));if(Nl.test(o.tagName)){const f=o.textContent.split(ri),m=f.length-1;if(m>0){o.textContent=No?No.emptyScript:"";for(let g=0;g<m;g++)o.append(f[g],Zr()),Ri.nextNode(),c.push({type:2,index:++s});o.append(f[m],Zr())}}}else if(o.nodeType===8)if(o.data===Ml)c.push({type:2,index:s});else{let f=-1;for(;(f=o.data.indexOf(ri,f+1))!==-1;)c.push({type:7,index:s}),f+=ri.length-1}s++}}static createElement(t,i){const r=Ii.createElement("template");return r.innerHTML=t,r}}function nr(e,t,i=e,r){if(t===Ft)return t;let o=r!==void 0?i._$Co?.[r]:i._$Cl;const s=Qr(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,i,r)),r!==void 0?(i._$Co??=[])[r]=o:i._$Cl=o),o!==void 0&&(t=nr(e,o._$AS(e,t.values),o,r)),t}class Cd{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:r}=this._$AD,o=(t?.creationScope??Ii).importNode(i,!0);Ri.currentNode=o;let s=Ri.nextNode(),a=0,l=0,c=r[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new ds(s,s.nextSibling,this,t):c.type===1?h=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(h=new Ad(s,this,t)),this._$AV.push(h),c=r[++l]}a!==c?.index&&(s=Ri.nextNode(),a++)}return Ri.currentNode=Ii,o}p(t){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}let ds=class Bl{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,r,o){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=nr(this,t,i),Qr(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==Ft&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==R&&Qr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ii.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Jr.createElement(Fl(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(i);else{const s=new Cd(o,this),a=s.u(this.options);s.p(i),this.T(a),this._$AH=s}}_$AC(t){let i=In.get(t.strings);return i===void 0&&In.set(t.strings,i=new Jr(t)),i}k(t){Na(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new Bl(this.O(Zr()),this.O(Zr()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const r=_n(t).nextSibling;_n(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},hs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,o,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=R}_$AI(t,i=this,r,o){const s=this.strings;let a=!1;if(s===void 0)t=nr(this,t,i,0),a=!Qr(t)||t!==this._$AH&&t!==Ft,a&&(this._$AH=t);else{const l=t;let c,h;for(t=s[0],c=0;c<s.length-1;c++)h=nr(this,l[r+c],i,c),h===Ft&&(h=this._$AH[c]),a||=!Qr(h)||h!==this._$AH[c],h===R?t=R:t!==R&&(t+=(h??"")+s[c+1]),this._$AH[c]=h}a&&!o&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},$d=class extends hs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}},Sd=class extends hs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==R)}},Ed=class extends hs{constructor(t,i,r,o,s){super(t,i,r,o,s),this.type=5}_$AI(t,i=this){if((t=nr(this,t,i,0)??R)===Ft)return;const r=this._$AH,o=t===R&&r!==R||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==R&&(r===R||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ad=class{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){nr(this,t)}};const Ld={I:ds},_d=Ma.litHtmlPolyfillSupport;_d?.(Jr,ds),(Ma.litHtmlVersions??=[]).push("3.3.2");const ae=(e,t,i)=>{const r=i?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const s=i?.renderBefore??null;r._$litPart$=o=new ds(t.insertBefore(Zr(),s),s,void 0,i??{})}return o._$AI(e),o};const Fa=globalThis;let Oi=class extends tr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ae(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ft}};Oi._$litElement$=!0,Oi.finalized=!0,Fa.litElementHydrateSupport?.({LitElement:Oi});const Td=Fa.litElementPolyfillSupport;Td?.({LitElement:Oi});(Fa.litElementVersions??=[]).push("4.2.2");const zd=!1,Ul="app-toolbars-main",$r="app-toolbars-main-right",Vl="app-toolbars-main-center",ql="app-toolbars-bottom",us="app-toolbars-bottom-center",no="app-toolbars-bottom-end",Hl="system-views",Fo="system.layouts",oi="editor-area-main",Bo="sidebar-main",Wl="sidebar-main-bottom",jl="sidebar-auxiliary",Ba="panel-bottom",Rd="command-save",Kl=!1;var Ua=(e=>(e[e.LEFT=0]="LEFT",e[e.MIDDLE=1]="MIDDLE",e[e.RIGHT=2]="RIGHT",e[e.BACK=3]="BACK",e[e.FORWARD=4]="FORWARD",e))(Ua||{});const Dd=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:Rd,EDITOR_AREA_MAIN:oi,HIDE_DOT_RESOURCE:Kl,MouseButton:Ua,PANEL_BOTTOM:Ba,SIDEBAR_AUXILIARY:jl,SIDEBAR_MAIN:Bo,SIDEBAR_MAIN_BOTTOM:Wl,SYSTEM_LAYOUTS:Fo,SYSTEM_VIEWS:Hl,TOOLBAR_BOTTOM:ql,TOOLBAR_BOTTOM_CENTER:us,TOOLBAR_BOTTOM_END:no,TOOLBAR_MAIN:Ul,TOOLBAR_MAIN_CENTER:Vl,TOOLBAR_MAIN_RIGHT:$r},Symbol.toStringTag,{value:"Module"}));var Rw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Od(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var To={exports:{}};var Id=To.exports,Pn;function Pd(){return Pn||(Pn=1,(function(e){(function(t,i){e.exports?e.exports=i():t.Toastify=i()})(Id,function(t){var i=function(a){return new i.lib.init(a)},r="1.12.0";i.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},i.lib=i.prototype={toastify:r,constructor:i,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||i.defaults.text,this.options.node=a.node||i.defaults.node,this.options.duration=a.duration===0?0:a.duration||i.defaults.duration,this.options.selector=a.selector||i.defaults.selector,this.options.callback=a.callback||i.defaults.callback,this.options.destination=a.destination||i.defaults.destination,this.options.newWindow=a.newWindow||i.defaults.newWindow,this.options.close=a.close||i.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":i.defaults.gravity,this.options.positionLeft=a.positionLeft||i.defaults.positionLeft,this.options.position=a.position||i.defaults.position,this.options.backgroundColor=a.backgroundColor||i.defaults.backgroundColor,this.options.avatar=a.avatar||i.defaults.avatar,this.options.className=a.className||i.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?i.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||i.defaults.onClick,this.options.offset=a.offset||i.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:i.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||i.defaults.ariaLive,this.options.style=a.style||i.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var l in this.options.style)a.style[l]=this.options.style[l];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(c):a.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var h=document.createElement("button");h.type="button",h.setAttribute("aria-label","Close"),h.className="toast-close",h.innerHTML="&#10006;",h.addEventListener("click",(function(E){E.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?a.insertAdjacentElement("afterbegin",h):a.appendChild(h)}if(this.options.stopOnFocus&&this.options.duration>0){var f=this;a.addEventListener("mouseover",function(E){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){f.removeElement(a)},f.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(E){E.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(E){E.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var m=o("x",this.options),g=o("y",this.options),b=this.options.position=="left"?m:"-"+m,y=this.options.gravity=="toastify-top"?g:"-"+g;a.style.transform="translate("+b+","+y+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var l=i.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,l),i.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),i.reposition()}).bind(this),400)}},i.reposition=function(){for(var a={top:15,bottom:15},l={top:15,bottom:15},c={top:15,bottom:15},h=document.getElementsByClassName("toastify"),u,f=0;f<h.length;f++){s(h[f],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var m=h[f].offsetHeight;u=u.substr(9,u.length-1);var g=15,b=window.innerWidth>0?window.innerWidth:screen.width;b<=360?(h[f].style[u]=c[u]+"px",c[u]+=m+g):s(h[f],"toastify-left")===!0?(h[f].style[u]=a[u]+"px",a[u]+=m+g):(h[f].style[u]=l[u]+"px",l[u]+=m+g)}return this};function o(a,l){return l.offset[a]?isNaN(l.offset[a])?l.offset[a]:l.offset[a]+"px":"0px"}function s(a,l){return!a||typeof l!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(l)>-1)}return i.lib.init.prototype=i.lib,i})})(To)),To.exports}var Md=Pd();const Nd=Od(Md),Mn={debug:0,info:1,warning:2,error:3};let Fd="debug";const er={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Uo=null;const aa=[];function Te(e){if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);if(e instanceof Error)return`${e.name}: ${e.message}`;try{return JSON.stringify(e)}catch{return String(e)}}class Bd{constructor(t){this.source=t}info(t,...i){const r=i.length===0?t:`${t} ${i.map(o=>Te(o)).join(" ")}`;this.log(r,"info")}warning(t,...i){const r=i.length===0?t:`${t} ${i.map(o=>Te(o)).join(" ")}`;this.log(r,"warning")}warn(t,...i){const r=i.length===0?t:`${t} ${i.map(o=>Te(o)).join(" ")}`;this.log(r,"warning")}error(t,...i){const r=i.length===0?t:`${t} ${i.map(o=>Te(o)).join(" ")}`;this.log(r,"error")}debug(t,...i){const r=i.length===0?t:`${t} ${i.map(o=>Te(o)).join(" ")}`;this.log(r,"debug")}log(t,i){ir(this.source,t,i)}}function Ud(e){return Mn[e]>=Mn[Fd]}function ir(e,t,i){Ud(i)&&(Uo?Uo(e,t,i):(aa.push({source:e,message:t,level:i}),er[i==="error"?"error":i==="warning"?"warn":i==="debug"?"debug":"log"](`[${e}] ${t}`)))}function Vd(){console.log=function(...e){er.log.apply(console,e),ir("Console",e.map(t=>Te(t)).join(" "),"info")},console.info=function(...e){er.info.apply(console,e),ir("Console",e.map(t=>Te(t)).join(" "),"info")},console.warn=function(...e){er.warn.apply(console,e),ir("Console",e.map(t=>Te(t)).join(" "),"warning")},console.error=function(...e){er.error.apply(console,e),ir("Console",e.map(t=>Te(t)).join(" "),"error")},console.debug=function(...e){er.debug.apply(console,e),ir("Console",e.map(t=>Te(t)).join(" "),"debug")}}Vd();function qd(e){for(Uo=e;aa.length>0;){const t=aa.shift();t&&e(t.source,t.message,t.level)}}function Hd(){Uo=null}function Je(e){return new Bd(e)}const Z=Je("System");$t.put("logger",Z);const Va=Je("Toast"),Wd=4e3,jd={duration:Wd,gravity:"bottom",position:"right",close:!0},qa=(e,t)=>{Nd({...jd,text:e,style:t}).showToast()},si=e=>{Va.info(e),qa(e,{background:"var(--wa-color-brand-50)",color:"var(--wa-color-brand-on)"})},At=e=>{Va.error(e),qa(e,{background:"var(--wa-color-danger-50)",color:"var(--wa-color-danger-on)"})},Kd=e=>{Va.warn(e),qa(e,{background:"var(--wa-color-warning-50)",color:"var(--wa-color-warning-on)"})};class Gd{constructor(){this.subscriptions=new Map,this.tokenCounter=0}subscribe(t,i){this.subscriptions.has(t)||this.subscriptions.set(t,new Map);const r=`token_${++this.tokenCounter}_${Date.now()}`;return this.subscriptions.get(t).set(r,i),r}unsubscribe(t){for(const[i,r]of this.subscriptions.entries())if(r.has(t)){r.delete(t),r.size===0&&this.subscriptions.delete(i);return}}publish(t,i){const r=this.subscriptions.get(t);return!r||r.size===0?!1:(queueMicrotask(()=>{r.forEach(o=>{try{o(i)}catch(s){console.error(`Error in event callback for topic "${t}":`,s)}})}),!0)}clearAllSubscriptions(){this.subscriptions.clear()}clearSubscriptions(t){this.subscriptions.delete(t)}}const Ha=new Gd,It=(e,t)=>Ha.subscribe(e,t),Xd=e=>{Ha.unsubscribe(e)},F=(e,t)=>Ha.publish(e,t),Yd="eclipse-lyra-persistence",Br="keyval",Zd=1;let zs=null;function Nn(){return zs||(zs=new Promise((e,t)=>{const i=indexedDB.open(Yd,Zd);i.onerror=()=>t(i.error),i.onsuccess=()=>e(i.result),i.onupgradeneeded=r=>{r.target.result.createObjectStore(Br)}})),zs}class Qd{async persistObject(t,i){const r=await Nn();return new Promise((o,s)=>{const l=r.transaction(Br,"readwrite").objectStore(Br),c=i==null?l.delete(t):l.put(i,t);c.onsuccess=()=>o(),c.onerror=()=>s(c.error)})}async getObject(t){const i=await Nn();return new Promise((r,o)=>{const a=i.transaction(Br,"readonly").objectStore(Br).get(t);a.onsuccess=()=>r(a.result),a.onerror=()=>o(a.error)})}}const Ae=new Qd;$t.put("persistenceService",Ae);const Qi=".geospace/settings.json",Rs="dialogSettings",_i="events/settings/changed";function Gl(e,t){if(t){for(const[i,r]of Object.entries(t))if(r&&typeof r=="object"){const o=e[i];o?.properties&&r.properties?Gl(o.properties,r.properties):e[i]={...r,properties:r.properties?{...r.properties}:void 0}}}}class Jd{constructor(){this.mergedSchema={type:"object",properties:{}}}async checkSettings(){this.appSettings||(this.appSettings=await Ae.getObject(Qi),this.appSettings||(this.appSettings={},await Ae.persistObject(Qi,this.appSettings)),F(_i,this.appSettings))}registerSchema(t){const i=t.properties??(t.type==="object"?{}:void 0);i&&(this.mergedSchema.properties||(this.mergedSchema.properties={}),Gl(this.mergedSchema.properties,i))}getCategories(){const t=this.mergedSchema.properties;return t?Object.entries(t).filter(([,i])=>i&&typeof i=="object").map(([i,r])=>({id:i,label:r.title??i,order:typeof r.order=="number"?r.order:0,schema:r})).sort((i,r)=>i.order-r.order):[]}getSchemaForCategory(t){return this.mergedSchema.properties?.[t]}getSchemaForSettingKey(t){const i=t.split(".").filter(Boolean);if(i.length===0)return this.mergedSchema;let r=this.mergedSchema;for(const o of i)if(r=r?.properties?.[o],!r)return;return r}traversePath(t,i,r){if(i.length===0)return null;let o=t;const s=i.length-1;for(let a=0;a<s;a++){const l=i[a];if(o[l]===void 0){if(!r)return null;o[l]={}}if(o[l]===null||typeof o[l]!="object")return null;o=o[l]}return{parent:o,key:i[s]}}async getAt(t){await this.checkSettings();const i=t.split(".").filter(Boolean);if(i.length===0)return this.appSettings;const r=this.traversePath(this.appSettings,i,!1);if(r)return r.parent[r.key]}async setAt(t,i){await this.checkSettings();const r=t.split(".").filter(Boolean);if(r.length===0)return;const o=this.traversePath(this.appSettings,r,!0);o&&(o.parent[o.key]=i,await Ae.persistObject(Qi,this.appSettings),F(_i,this.appSettings))}async get(t){return await this.checkSettings(),this.appSettings[t]}async set(t,i){await this.checkSettings(),this.appSettings[t]=i,await Ae.persistObject(Qi,this.appSettings),F(_i,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(t){this.appSettings=t,await Ae.persistObject(Qi,this.appSettings),F(_i,this.appSettings)}async getDialogSetting(t){return await this.checkSettings(),(this.appSettings[Rs]||{})[t]}async setDialogSetting(t,i){await this.checkSettings();const r=this.appSettings[Rs]||{};r[t]=i,this.appSettings[Rs]=r,await Ae.persistObject(Qi,this.appSettings),F(_i,this.appSettings)}}const ct=new Jd;$t.put("appSettings",ct);var th=Object.defineProperty,eh=(e,t,i)=>t in e?th(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Ds=(e,t,i)=>(eh(e,typeof t!="symbol"?t+"":t,i),i),ih=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Os=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},wo=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Fn=(e,t,i)=>(ih(e,t,"access private method"),i);function Xl(e,t){return Object.is(e,t)}let nt=null,jr=!1,zo=1;const Vo=Symbol("SIGNAL");function rr(e){const t=nt;return nt=e,t}function rh(){return nt}function oh(){return jr}const Wa={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ps(e){if(jr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(nt===null)return;nt.consumerOnSignalRead(e);const t=nt.nextProducerIndex++;if(lr(nt),t<nt.producerNode.length&&nt.producerNode[t]!==e&&na(nt)){const i=nt.producerNode[t];fs(i,nt.producerIndexOfThis[t])}nt.producerNode[t]!==e&&(nt.producerNode[t]=e,nt.producerIndexOfThis[t]=na(nt)?Ql(e,nt,t):0),nt.producerLastReadVersion[t]=e.version}function sh(){zo++}function Yl(e){if(!(!e.dirty&&e.lastCleanEpoch===zo)){if(!e.producerMustRecompute(e)&&!dh(e)){e.dirty=!1,e.lastCleanEpoch=zo;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=zo}}function Zl(e){if(e.liveConsumerNode===void 0)return;const t=jr;jr=!0;try{for(const i of e.liveConsumerNode)i.dirty||nh(i)}finally{jr=t}}function ah(){return nt?.consumerAllowSignalWrites!==!1}function nh(e){var t;e.dirty=!0,Zl(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function lh(e){return e&&(e.nextProducerIndex=0),rr(e)}function ch(e,t){if(rr(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(na(e))for(let i=e.nextProducerIndex;i<e.producerNode.length;i++)fs(e.producerNode[i],e.producerIndexOfThis[i]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function dh(e){lr(e);for(let t=0;t<e.producerNode.length;t++){const i=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==i.version||(Yl(i),r!==i.version))return!0}return!1}function Ql(e,t,i){var r;if(ja(e),lr(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let o=0;o<e.producerNode.length;o++)e.producerIndexOfThis[o]=Ql(e.producerNode[o],e,o)}return e.liveConsumerIndexOfThis.push(i),e.liveConsumerNode.push(t)-1}function fs(e,t){var i;if(ja(e),lr(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(i=e.unwatched)==null||i.call(e.wrapper);for(let o=0;o<e.producerNode.length;o++)fs(e.producerNode[o],e.producerIndexOfThis[o])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const o=e.liveConsumerIndexOfThis[t],s=e.liveConsumerNode[t];lr(s),s.producerIndexOfThis[o]=t}}function na(e){var t;return e.consumerIsAlwaysLive||(((t=e?.liveConsumerNode)==null?void 0:t.length)??0)>0}function lr(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function ja(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function Jl(e){if(Yl(e),ps(e),e.value===la)throw e.error;return e.value}function hh(e){const t=Object.create(uh);t.computation=e;const i=()=>Jl(t);return i[Vo]=t,i}const Is=Symbol("UNSET"),Ps=Symbol("COMPUTING"),la=Symbol("ERRORED"),uh={...Wa,value:Is,dirty:!0,error:null,equal:Xl,producerMustRecompute(e){return e.value===Is||e.value===Ps},producerRecomputeValue(e){if(e.value===Ps)throw new Error("Detected cycle in computations.");const t=e.value;e.value=Ps;const i=lh(e);let r,o=!1;try{r=e.computation.call(e.wrapper),o=t!==Is&&t!==la&&e.equal.call(e.wrapper,t,r)}catch(s){r=la,e.error=s}finally{ch(e,i)}if(o){e.value=t;return}e.value=r,e.version++}};function ph(){throw new Error}let fh=ph;function mh(){fh()}function gh(e){const t=Object.create(vh);t.value=e;const i=()=>(ps(t),t.value);return i[Vo]=t,i}function bh(){return ps(this),this.value}function wh(e,t){ah()||mh(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,yh(e))}const vh={...Wa,equal:Xl,value:void 0};function yh(e){e.version++,sh(),Zl(e)}const mt=Symbol("node");var wt;(e=>{var t,i,r,o;class s{constructor(c,h={}){wo(this,i),Ds(this,t);const f=gh(c)[Vo];if(this[mt]=f,f.wrapper=this,h){const m=h.equals;m&&(f.equal=m),f.watched=h[e.subtle.watched],f.unwatched=h[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return bh.call(this[mt])}set(c){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(oh())throw new Error("Writes to signals not permitted during Watcher callback");const h=this[mt];wh(h,c)}}t=mt,i=new WeakSet,e.isState=l=>typeof l=="object"&&Os(i,l),e.State=s;class a{constructor(c,h){wo(this,o),Ds(this,r);const f=hh(c)[Vo];if(f.consumerAllowSignalWrites=!0,this[mt]=f,f.wrapper=this,h){const m=h.equals;m&&(f.equal=m),f.watched=h[e.subtle.watched],f.unwatched=h[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Jl(this[mt])}}r=mt,o=new WeakSet,e.isComputed=l=>typeof l=="object"&&Os(o,l),e.Computed=a,(l=>{var c,h,u,f;function m($){let L,S=null;try{S=rr(null),L=$()}finally{rr(S)}return L}l.untrack=m;function g($){var L;if(!(0,e.isComputed)($)&&!(0,e.isWatcher)($))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((L=$[mt].producerNode)==null?void 0:L.map(S=>S.wrapper))??[]}l.introspectSources=g;function b($){var L;if(!(0,e.isComputed)($)&&!(0,e.isState)($))throw new TypeError("Called introspectSinks without a Signal argument");return((L=$[mt].liveConsumerNode)==null?void 0:L.map(S=>S.wrapper))??[]}l.introspectSinks=b;function y($){if(!(0,e.isComputed)($)&&!(0,e.isState)($))throw new TypeError("Called hasSinks without a Signal argument");const L=$[mt].liveConsumerNode;return L?L.length>0:!1}l.hasSinks=y;function E($){if(!(0,e.isComputed)($)&&!(0,e.isWatcher)($))throw new TypeError("Called hasSources without a Computed or Watcher argument");const L=$[mt].producerNode;return L?L.length>0:!1}l.hasSources=E;class _{constructor(L){wo(this,h),wo(this,u),Ds(this,c);let S=Object.create(Wa);S.wrapper=this,S.consumerMarkedDirty=L,S.consumerIsAlwaysLive=!0,S.consumerAllowSignalWrites=!1,S.producerNode=[],this[mt]=S}watch(...L){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Fn(this,u,f).call(this,L);const S=this[mt];S.dirty=!1;const O=rr(S);for(const it of L)ps(it[mt]);rr(O)}unwatch(...L){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Fn(this,u,f).call(this,L);const S=this[mt];lr(S);for(let O=S.producerNode.length-1;O>=0;O--)if(L.includes(S.producerNode[O].wrapper)){fs(S.producerNode[O],S.producerIndexOfThis[O]);const it=S.producerNode.length-1;if(S.producerNode[O]=S.producerNode[it],S.producerIndexOfThis[O]=S.producerIndexOfThis[it],S.producerNode.length--,S.producerIndexOfThis.length--,S.nextProducerIndex--,O<S.producerNode.length){const Gt=S.producerIndexOfThis[O],Et=S.producerNode[O];ja(Et),Et.liveConsumerIndexOfThis[Gt]=O}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[mt].producerNode.filter(S=>S.dirty).map(S=>S.wrapper)}}c=mt,h=new WeakSet,u=new WeakSet,f=function($){for(const L of $)if(!(0,e.isComputed)(L)&&!(0,e.isState)(L))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=$=>Os(h,$),l.Watcher=_;function A(){var $;return($=rh())==null?void 0:$.wrapper}l.currentComputed=A,l.watched=Symbol("watched"),l.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(wt||(wt={}));let Ms=!1;const Bn=new wt.subtle.Watcher(()=>{Ms||(Ms=!0,queueMicrotask(()=>{Ms=!1;for(const e of Bn.getPending())e.get();Bn.watch()}))}),xh=Symbol("SignalWatcherBrand"),kh=new FinalizationRegistry(e=>{e.unwatch(...wt.subtle.introspectSources(e))}),Un=new WeakMap;function Ch(e){return e[xh]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new Map,this._$So=new wt.State(0),this._$Si=!1}_$Sl(){var t,i;const r=[],o=[];this._$St.forEach((a,l)=>{(a?.beforeUpdate?r:o).push(l)});const s=(t=this.h)===null||t===void 0?void 0:t.getPending().filter(a=>a!==this._$Su&&!this._$St.has(a));r.forEach(a=>a.get()),(i=this._$Su)===null||i===void 0||i.get(),s.forEach(a=>a.get()),o.forEach(a=>a.get())}_$Sv(){this.isUpdatePending||queueMicrotask(()=>{this.isUpdatePending||this._$Sl()})}_$S_(){if(this.h!==void 0)return;this._$Su=new wt.Computed(()=>{this._$So.get(),super.performUpdate()});const t=this.h=new wt.subtle.Watcher(function(){const i=Un.get(this);i!==void 0&&(i._$Si===!1&&(new Set(this.getPending()).has(i._$Su)?i.requestUpdate():i._$Sv()),this.watch())});Un.set(t,this),kh.register(this,t),t.watch(this._$Su),t.watch(...Array.from(this._$St).map(([i])=>i))}_$Sp(){if(this.h===void 0)return;let t=!1;this.h.unwatch(...wt.subtle.introspectSources(this.h).filter(i=>{var r;const o=((r=this._$St.get(i))===null||r===void 0?void 0:r.manualDispose)!==!0;return o&&this._$St.delete(i),t||(t=!o),o})),t||(this._$Su=void 0,this.h=void 0,this._$St.clear())}updateEffect(t,i){var r;this._$S_();const o=new wt.Computed(()=>{t()});return this.h.watch(o),this._$St.set(o,i),(r=i?.beforeUpdate)!==null&&r!==void 0&&r?wt.subtle.untrack(()=>o.get()):this.updateComplete.then(()=>wt.subtle.untrack(()=>o.get())),()=>{this._$St.delete(o),this.h.unwatch(o),this.isConnected===!1&&this._$Sp()}}performUpdate(){this.isUpdatePending&&(this._$S_(),this._$Si=!0,this._$So.set(this._$So.get()+1),this._$Si=!1,this._$Sl())}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}}}const me={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Sr=e=>(...t)=>({_$litDirective$:e,values:t});let Er=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const{I:$h}=Ld,Vn=e=>e,Sh=(e,t)=>e?._$litType$!==void 0,tc=e=>e.strings===void 0,qn=()=>document.createComment(""),Dr=(e,t,i)=>{const r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(i===void 0){const s=r.insertBefore(qn(),o),a=r.insertBefore(qn(),o);i=new $h(s,a,e,e.options)}else{const s=i._$AB.nextSibling,a=i._$AM,l=a!==e;if(l){let c;i._$AQ?.(e),i._$AM=e,i._$AP!==void 0&&(c=e._$AU)!==a._$AU&&i._$AP(c)}if(s!==o||l){let c=i._$AA;for(;c!==s;){const h=Vn(c).nextSibling;Vn(r).insertBefore(c,o),c=h}}}return i},Ai=(e,t,i=e)=>(e._$AI(t,i),e),Eh={},ec=(e,t=Eh)=>e._$AH=t,Ah=e=>e._$AH,Ns=e=>{e._$AR(),e._$AA.remove()};const Kr=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const r of i)r._$AO?.(t,!1),Kr(r,t);return!0},qo=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},ic=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Th(t)}};function Lh(e){this._$AN!==void 0?(qo(this),this._$AM=e,ic(this)):this._$AM=e}function _h(e,t=!1,i=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let s=i;s<r.length;s++)Kr(r[s],!1),qo(r[s]);else r!=null&&(Kr(r,!1),qo(r));else Kr(this,e)}const Th=e=>{e.type==me.CHILD&&(e._$AP??=_h,e._$AQ??=Lh)};class zh extends Er{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),ic(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(Kr(this,t),qo(this))}setValue(t){if(tc(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}let Fs=!1;const Hn=new wt.subtle.Watcher(async()=>{Fs||(Fs=!0,queueMicrotask(()=>{Fs=!1;for(const e of Hn.getPending())e.get();Hn.watch()}))});wt.State;wt.Computed;const Ci=(e,t)=>new wt.State(e,t);class Rh{constructor(){this.globalNameRemaps=new Map,this.appNameRemaps=new Map}setGlobalNameRemap(t,i){this.globalNameRemaps.set(t,this.normalizeTargets(i))}resetForTesting(){this.globalNameRemaps.clear(),this.appNameRemaps.clear()}applyAppNameRemaps(t){if(this.appNameRemaps.clear(),!!t)for(const i of t)this.appNameRemaps.set(i.name,this.normalizeTargets(i.targets))}getEffectiveTargets(t,i){const r=i.name;if(!r)return[t];const o=this.appNameRemaps.get(r);if(o)return o.length>0?o:[];const s=this.globalNameRemaps.get(r);return s?s.length>0?s:[]:[t]}listNameRemaps(){const t={},i=new Set([...this.globalNameRemaps.keys(),...this.appNameRemaps.keys()]);for(const r of i)t[r]={appTargets:this.appNameRemaps.get(r),globalTargets:this.globalNameRemaps.get(r)};return t}normalizeTargets(t){const i=new Set,r=[];for(const o of t)!o||i.has(o)||(i.add(o),r.push(o));return r}}const Ho=new Rh;$t.put("contributionTargetMappingRegistry",Ho);const we="events/contributionregistry/contributionsChanged";class Dh{constructor(){this.contributions=new Map}registerContribution(t,i){const r=this.getOrCreateSlot(t);if("command"in i){const s=i;s.disabled instanceof Function&&(s.disabled=new wt.Computed(s.disabled))}r.push(i),F(we,{target:t,contributions:r});const o=Ho.getEffectiveTargets(t,i);for(const s of o){if(s===t)continue;const a=this.getContributions(s);F(we,{target:s,contributions:a})}}getContributions(t){const i=[];for(const[r,o]of this.contributions.entries()){const s=o;for(const a of s)Ho.getEffectiveTargets(r,a).includes(t)&&i.push(a)}return i.length===0&&this.getOrCreateSlot(t),i}getOrCreateSlot(t){return this.contributions.has(t)||this.contributions.set(t,[]),this.contributions.get(t)}}const H=new Dh;$t.put("contributionRegistry",H);const ee=Ci(null),Gr=Ci(null),ca=Ci(null),da=Ci(0),Le=Ci(void 0);Ci({name:"",timestamp:0});class Oh{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,da.set(this.updateCounter)}run(t,i){const r=this.createProgressMonitor(t);try{this.tasks.push(r),this.notifyUpdate(),i(r)}finally{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()}}async runAsync(t,i){const r=this.createProgressMonitor(t);return this.tasks.push(r),this.notifyUpdate(),i(r).finally(()=>{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()})}createProgressMonitor(t){const i={name:t,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(i,{set:(r,o,s)=>(r[o]=s,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const cr=new Oh;$t.put("taskService",cr);const Wo="language",to="en";function Ih(e,t){return t?e.replace(/\{(\w+)\}/g,(i,r)=>t[r]!==void 0?t[r]:i):e}const Ro=new Set([to]),Ka=Ci(Ro);let Ga=null;function Ph(e){let t=!1;for(const i of e){const r=i.toLowerCase().replace("-","_");Ro.has(r)||(Ro.add(r),t=!0)}if(t&&(Ka.set(new Set(Ro)),Ga===null)){const i=ms();i!==Pi.get()&&Pi.set(i)}}function ms(){const e=navigator.languages?.length?navigator.languages:[navigator.language||to],t=Ka.get();for(const i of e){const r=i.split("-")[0].toLowerCase();if(t.has(r))return r}return to}const Pi=Ci(ms());async function Mh(){const e=await ct.get(Wo);Ga=e??null,Pi.set(e||ms())}It(_i,e=>{Ga=e?.[Wo]??null,Pi.set(e?.[Wo]||ms())});Mh();async function Ar(e,t=!1){const i={};await Promise.all(Object.entries(e).map(async([a,l])=>{const c=await l(),h=c&&"default"in c?c.default:c,m=(a.match(/\.([a-zA-Z-_]+)\.json$/)?.[1]??to).toLowerCase().replace("-","_");i[m]=h})),Ph(Object.keys(i));const r=a=>{const c=Pi.get().toLowerCase().replace("-","_"),[h,u]=c.split("_"),f=u?[`${h}_${u}`,h]:[h];f.push(to);for(const m of f){const g=i[m];if(g&&a in g)return g[a]}return a},o=Object.assign({},{then:void 0,catch:void 0,finally:void 0}),s={get(a,l){if(l in a)return a[l];const c=r(l),h=(u=>Ih(r(l),u));return h.toString=()=>t?r(l):c,h.valueOf=()=>t?r(l):c,h[Symbol.toPrimitive]=()=>t?r(l):c,t&&(h.toJSON=()=>r(l)),h}};return new Proxy(o,s)}const Nh=Je("EsmShService"),ut=class ut{isEsmShUrl(t){try{const i=new URL(t);return i.hostname==="esm.sh"||i.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(t){return this.isEsmShUrl(t)||this.isHttpUrl(t)?!1:this.parseSource(t)!==null}isHttpUrl(t){try{const i=new URL(t);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}parseSource(t){return!t||typeof t!="string"||(t=t.trim(),this.isHttpUrl(t))?null:t.startsWith(ut.GITHUB_PREFIX)?this.parseGitHubSource(t):t.startsWith(ut.JSR_PREFIX)?this.parseJsrSource(t):t.startsWith(ut.PR_PREFIX)?this.parsePrSource(t):this.parseNpmSource(t)}parseGitHubSource(t){const r=t.substring(ut.GITHUB_PREFIX.length).split("/");if(r.length<2)return null;const o=r[0],s=r[1];let a,l,c;const h=s.match(/^(.+?)(@(.+))?$/);return h?(a=h[1],l=h[3],r.length>2&&(c=r.slice(2).join("/")),{type:"github",owner:o,repo:a,version:l,path:c}):null}parseJsrSource(t){const i=t.substring(ut.JSR_PREFIX.length);if(!i.startsWith("@"))return null;const r=i.split("/");if(r.length<2)return null;const o=r[0],s=r[1];let a,l,c;const h=s.match(/^(.+?)(@(.+))?$/);return h?(a=`${o}/${h[1]}`,l=h[3],r.length>2&&(c=r.slice(2).join("/")),{type:"jsr",package:a,version:l,path:c}):null}parsePrSource(t){const r=t.substring(ut.PR_PREFIX.length).split("/");if(r.length<2)return null;const o=r[0],s=r[1];let a,l;const c=s.match(/^(.+?)@(.+)$/);return c?(a=c[1],l=c[2]):a=s,{type:"pr",owner:o,repo:a,commit:l}}parseNpmSource(t){const i=t.split("/"),r=i[0];let o,s,a;const l=r.match(/^(.+?)(@(.+))?$/);return l?(o=l[1],s=l[3],i.length>1&&(a=i.slice(1).join("/")),{type:"npm",package:o,version:s,path:a}):null}buildEsmShUrl(t,i){let r=ut.ESM_SH_BASE;switch(t.type){case"npm":r+=`/${t.package}`,t.version&&(r+=`@${t.version}`),t.path&&(r+=`/${t.path}`);break;case"github":r+=`/${ut.GITHUB_PREFIX}${t.owner}/${t.repo}`,t.version&&(r+=`@${t.version}`),t.path&&(r+=`/${t.path}`);break;case"jsr":r+=`/${ut.JSR_PREFIX}${t.package}`,t.version&&(r+=`@${t.version}`),t.path&&(r+=`/${t.path}`);break;case"pr":r+=`/${ut.PR_PREFIX}${t.owner}/${t.repo}`,t.commit&&(r+=`@${t.commit}`);break}const o=[];if(i?.deps){const s=Object.entries(i.deps).map(([a,l])=>`${a}@${l}`).join(",");o.push(`deps=${encodeURIComponent(s)}`)}return i?.target&&o.push(`target=${encodeURIComponent(i.target)}`),i?.dev&&o.push("dev"),i?.bundle===!1?o.push("bundle=false"):i?.bundle===!0&&o.push("bundle"),o.length>0&&(r+=`?${o.join("&")}`),r}normalizeToEsmSh(t,i){if(this.isEsmShUrl(t)||this.isHttpUrl(t))return t;const r=this.parseSource(t);return r?this.buildEsmShUrl(r,i):(Nh.warn(`Could not parse source identifier: ${t}`),t)}extractPackageName(t){const i=this.parseSource(t);if(!i)return null;switch(i.type){case"npm":return i.package||null;case"github":return`${i.owner}/${i.repo}`;case"jsr":return i.package||null;case"pr":return`${i.owner}/${i.repo}`}}isGitHubUrl(t){try{const i=new URL(t);return i.hostname==="github.com"||i.hostname==="www.github.com"}catch{return t.startsWith("https://github.com/")||t.startsWith("http://github.com/")}}convertGitHubUrlToSource(t){try{const r=new URL(t).pathname.split("/").filter(h=>h);if(r.length<2)throw new Error("Invalid GitHub URL format");const o=r[0];let s=r[1].replace(/\.git$/,""),a,l;r.length>2&&(r[2]==="blob"||r[2]==="tree"?(a=r[3]||"main",r[2]==="blob"&&r.length>4&&(l=r.slice(4).join("/"))):r[2]==="commit"?a=r[3]:l=r.slice(2).join("/"));let c=`${ut.GITHUB_PREFIX}${o}/${s}`;return a&&(c+=`@${a}`),l&&(c+=`/${l}`),c}catch{const i=t.match(/github\.com\/([^\/]+)\/([^\/]+)/);return i?`${ut.GITHUB_PREFIX}${i[1]}/${i[2].replace(/\.git$/,"")}`:t}}async fetchGitHubPackageJson(t){if(t.type!=="github")throw new Error("Source must be a GitHub source");const i=t.owner,r=t.repo,o=t.version||"main",s=`https://raw.githubusercontent.com/${i}/${r}/${o}/package.json`,a=await fetch(s);if(!a.ok)throw new Error(`Failed to fetch package.json: ${a.statusText}`);return await a.json()}};ut.ESM_SH_BASE="https://esm.sh",ut.GITHUB_PREFIX="gh/",ut.JSR_PREFIX="jsr/",ut.PR_PREFIX="pr/";let ha=ut;const ze=new ha;$t.put("esmShService",ze);const rc="events/commandregistry/commandRegistered";class Fh{constructor(t,i,r,o,s){this.id=t,this.name=i,this.description=r,this.parameters=o||[],this.output=s||[]}}class Bh{constructor(){this.commands={},this.handlers=new Map}registerHandler(t,i){this.handlers.has(t)||this.handlers.set(t,[]);const r=this.handlers.get(t);r.push(i),r.sort((o,s)=>(s.ranking??0)-(o.ranking??0))}getHandler(t){return this.handlers.get(t)}createExecutionContext(t){return{params:t||{},activePart:ee.get(),activeEditor:Gr.get()}}execute(t,i={}){const r=this.getHandler(t);if(!r)throw Z.debug(`[CommandRegistry] No handlers registered for command: ${t}`),new Error(`No handlers registered for command: ${t}`);const o=this.getCommand(t),s=i.params?` params: ${JSON.stringify(i.params)}`:"";Z.debug(`[CommandRegistry] Executing command: ${t}${o?` (${o.name})`:""}${s}`);for(const a of r)if(a.canExecute===void 0||a.canExecute(i))try{const l=a.execute(i);return Z.debug(`[CommandRegistry] Command executed successfully: ${t} (result: ${l})`),l}catch(l){const c=l instanceof Error?l.message:String(l);throw Z.error(`[CommandRegistry] Command execution failed: ${t} - ${c}`),l}Z.error(`[CommandRegistry] No handler found to execute command: ${t}`)}createAndRegisterCommand(t,i,r,o,s){const a=new Fh(t,i,r,o);this.registerCommand(a),s&&this.registerHandler(t,s)}registerCommand(t){this.commands[t.id]=t,F(rc,t)}hasCommand(t){return t in this.commands}listCommands(t){return t?Object.values(this.commands).filter(i=>(ci.getHandler(i.id)||[]).some(o=>o.canExecute===void 0||o.canExecute(t))).reduce((i,r)=>(i[r.id]=r,i),{}):this.commands}getCommand(t){return this.commands[t]}registerAll(t){const i=t.command.id;this.registerCommand(t.command),t.handler&&this.registerHandler(i,t.handler),t.contribution&&t.contribution.target&&H.registerContribution(t.contribution.target,{command:i,...t.contribution})}}const ci=new Bh;$t.put("commandRegistry",ci);const St=e=>{ci.registerAll(e)},Ur="events/extensionsregistry/extensionsConfigChanged",Or="extensions",Wn="extensions.external";class Uh{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,It(_i,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then()})}async loadPersistedExternalExtensions(){try{const t=await ct.get(Wn);t&&Array.isArray(t)&&t.forEach(i=>{this.extensions[i.id]=i})}catch(t){Z.error(`Failed to load persisted external extensions: ${t}`)}}async savePersistedExternalExtensions(){try{const t=Object.values(this.extensions).filter(i=>i.external);await ct.set(Wn,t)}catch(t){Z.error(`Failed to save persisted external extensions: ${t}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await ct.get(Or),this.extensionsSettings||(await ct.set(Or,[]),this.extensionsSettings=await ct.get(Or)),F(Ur,this.extensionsSettings))}registerExtension(t){this.extensions[t.id]=t,Z.debug(`Registered extension: ${t.id}`),t.external&&this.savePersistedExternalExtensions().catch(i=>{Z.error(`Failed to persist external extension: ${i}`)}),F(Ur,this.extensionsSettings)}async loadExtensionFromUrl(t,i){Z.info(`Loading extension from URL: ${t}...`);try{let r=t,o=`Extension from ${t}`;if(ze.isSourceIdentifier(t)){const a=ze.extractPackageName(t);a&&(o=`Extension: ${a}`),r=ze.normalizeToEsmSh(t),Z.debug(`Converted source identifier to esm.sh URL: ${t} -> ${r}`)}const s=i||`url:${r}`;if(this.isEnabled(s))return Z.info(`Extension from URL ${r} is already enabled`),s;if(!this.extensions[s]){const a={id:s,name:o,description:`Extension loaded from: ${t}`,url:r};this.registerExtension(a),Z.info(`Registered extension from URL: ${s}`)}return this.enable(s,!1),Z.info(`Successfully enabled extension from URL: ${r}`),s}catch(r){throw Z.error(`Failed to load extension from URL ${t}: ${r}`),r}}getExtensions(){return Object.values(this.extensions)}async loadEnabledExtensions(){await this.checkExtensionsConfig();const i=(this.extensionsSettings??[]).filter(r=>this.isEnabled(r.id)&&this.extensions[r.id]).map(r=>this.load(r.id).catch(o=>{At("Extension could not be loaded: "+o.message)}));await Promise.all(i)}isEnabled(t){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(i=>i.id===t&&i.enabled)}isLoaded(t){return this.loadedExtensions.has(t)}enable(t,i=!1){this.isEnabled(t)||(Z.debug(`Loading extension: ${t}`),this.load(t).then(()=>{this.updateEnablement(t,!0,i)}).catch(r=>{Z.error(`Could not load extension: ${t}: ${r}`)}))}async load(t,i=[]){if(this.loadedExtensions.has(t))return;const r=this.loadingPromises.get(t);if(r)return r;if(i.includes(t)){const a=[...i,t].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const o=this.extensions[t];if(!o)throw new Error("Extension not found: "+t);const s=(async()=>{try{if(Z.debug(`Loading extension: ${t}`),o.dependencies&&o.dependencies.length>0){const l=[...i,t];for(const c of o.dependencies)await this.load(c,l),this.isEnabled(c)||(await this.updateEnablementAsync(c,!0,!1),Z.debug(`Auto-enabled dependency: ${c}`))}const a=await cr.runAsync("Loading extension: "+o.name,async()=>{if(o.loader)return o.loader();if(o.url){let l=o.url;return ze.isSourceIdentifier(o.url)&&(l=ze.normalizeToEsmSh(o.url),Z.debug(`Normalized extension URL: ${o.url} -> ${l}`)),import(l)}});if(this.loadedExtensions.add(t),a?.default instanceof Function)try{a.default(ki.getProxy())}catch(l){throw Z.error(`Error executing extension function for ${t}: ${l}`),l}}catch(a){throw this.loadedExtensions.delete(t),a}finally{this.loadingPromises.delete(t)}})();return this.loadingPromises.set(t,s),s}disable(t,i=!1){this.isEnabled(t)&&this.updateEnablement(t,!1,i)}updateEnablement(t,i,r){this.checkExtensionsConfig().then(()=>{const o=this.extensionsSettings?.find(s=>s.id==t);o?o.enabled=i:this.extensionsSettings?.push({id:t,enabled:i}),ct.set(Or,this.extensionsSettings).then(()=>{if(r){const s=this.extensions[t];si(i?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}F(Ur,this.extensionsSettings)})})}async updateEnablementAsync(t,i,r){await this.checkExtensionsConfig();const o=this.extensionsSettings?.find(s=>s.id==t);if(o?o.enabled=i:this.extensionsSettings?.push({id:t,enabled:i}),await ct.set(Or,this.extensionsSettings),r){const s=this.extensions[t];si(i?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}F(Ur,this.extensionsSettings)}}const st=new Uh;$t.put("extensionRegistry",st);const jn=["alt","ctrl","meta","shift"],oc={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},Vh={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},qh={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},Hh=new Set(Object.keys(oc));function Kn(e){return qh[e]??e}class Wh{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),It(rc,t=>{t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)})}registerExistingCommandBindings(){const t=ci.listCommands();Object.values(t).forEach(i=>{i.keyBinding&&this.registerKeyBinding(i.id,i.keyBinding)})}parseKeyBinding(t){if(!t||t.trim()==="")return null;const i=t.toUpperCase().split("+").map(a=>a.trim());if(i.length===0)return null;const r=i[i.length-1],o=i.slice(0,-1);if(i.length===1&&Hh.has(r))return null;const s={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const a of o){const l=oc[a];if(l===void 0)return null;s[l]=!0}return s.key=Kn(r),s}getBindingKey(t){return[...jn.filter(r=>t[r]),t.key.toUpperCase()].join("+")}registerKeyBinding(t,i){const r=this.parseKeyBinding(i);if(!r)return Z.error(`Invalid key binding: ${i}`),!1;r.commandId=t;const o=this.getBindingKey(r);this.bindings.has(o)||this.bindings.set(o,[]);const s=this.bindings.get(o);if(s.find(c=>c.commandId===t))return Z.error(`Key binding ${i} already registered for command ${t}`),!1;const l=s.find(c=>c.commandId!==t);return l?(Z.warn(`Key binding ${i} already used by command ${l.commandId}; refusing for ${t}`),!1):(s.push(r),!0)}unregisterKeyBinding(t,i){if(i){const r=this.parseKeyBinding(i);if(r){const o=this.getBindingKey(r),s=this.bindings.get(o);if(s){const a=s.filter(l=>l.commandId!==t);a.length===0?this.bindings.delete(o):this.bindings.set(o,a)}}}else for(const[r,o]of this.bindings.entries()){const s=o.filter(a=>a.commandId!==t);s.length===0?this.bindings.delete(r):this.bindings.set(r,s)}}getKeyBindingsForCommand(t){const i=[];for(const r of this.bindings.values())for(const o of r)o.commandId===t&&i.push(this.formatKeyBinding(o));return i.sort()}formatKeyBinding(t){const i=jn.filter(o=>t[o]).map(o=>Vh[o]),r=t.key.length===1?t.key.toUpperCase():t.key.charAt(0).toUpperCase()+t.key.slice(1).toLowerCase();return i.push(r),i.join("+")}handleKeyDown(t){if(!this.enabled)return;const i={commandId:"",key:Kn(t.key.toUpperCase()),ctrl:t.ctrlKey,alt:t.altKey,shift:t.shiftKey,meta:t.metaKey},r=this.getBindingKey(i),o=this.bindings.get(r);if(o&&o.length>0){const s=o[0];try{t.preventDefault(),t.stopPropagation();const a=ci.createExecutionContext({});ci.execute(s.commandId,a),Z.debug(`Executed command via key binding: ${s.commandId}`)}catch(a){Z.error(`Failed to execute command ${s.commandId}: ${a.message}`)}}}setEnabled(t){this.enabled=t}isEnabled(){return this.enabled}getAllBindings(){const t=new Map;for(const[i,r]of this.bindings)t.set(i,[...r]);return t}clearAll(){this.bindings.clear()}}const sc=new Wh;$t.put("keyBindingManager",sc);let ua=class extends Er{constructor(t){if(super(t),this.it=R,t.type!==me.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||t==null)return this._t=void 0,this.it=t;if(t===Ft)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};ua.directiveName="unsafeHTML",ua.resultType=1;const je=Sr(ua);function Xa(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ji=Xa();function ac(e){ji=e}var Ti={exec:()=>null};function B(e,t=""){let i=typeof e=="string"?e:e.source,r={replace:(o,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(Dt.caret,"$1"),i=i.replace(o,a),r},getRegex:()=>new RegExp(i,t)};return r}var jh=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Dt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},Kh=/^(?:[ \t]*(?:\n|$))+/,Gh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Xh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,lo=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Yh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ya=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,nc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,lc=B(nc).replace(/bull/g,Ya).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Zh=B(nc).replace(/bull/g,Ya).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Za=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Qh=/^[^\n]+/,Qa=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Jh=B(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qa).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),tu=B(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ya).getRegex(),gs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ja=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,eu=B("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ja).replace("tag",gs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),cc=B(Za).replace("hr",lo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gs).getRegex(),iu=B(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",cc).getRegex(),tn={blockquote:iu,code:Gh,def:Jh,fences:Xh,heading:Yh,hr:lo,html:eu,lheading:lc,list:tu,newline:Kh,paragraph:cc,table:Ti,text:Qh},Gn=B("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",lo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gs).getRegex(),ru={...tn,lheading:Zh,table:Gn,paragraph:B(Za).replace("hr",lo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Gn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gs).getRegex()},ou={...tn,html:B(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ja).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ti,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:B(Za).replace("hr",lo).replace("heading",` *#{1,6} *[^
]`).replace("lheading",lc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},su=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,au=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,dc=/^( {2,}|\\)\n(?!\s*$)/,nu=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,bs=/[\p{P}\p{S}]/u,en=/[\s\p{P}\p{S}]/u,hc=/[^\s\p{P}\p{S}]/u,lu=B(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,en).getRegex(),uc=/(?!~)[\p{P}\p{S}]/u,cu=/(?!~)[\s\p{P}\p{S}]/u,du=/(?:[^\s\p{P}\p{S}]|~)/u,pc=/(?![*_])[\p{P}\p{S}]/u,hu=/(?![*_])[\s\p{P}\p{S}]/u,uu=/(?:[^\s\p{P}\p{S}]|[*_])/u,pu=B(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",jh?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),fc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,fu=B(fc,"u").replace(/punct/g,bs).getRegex(),mu=B(fc,"u").replace(/punct/g,uc).getRegex(),mc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",gu=B(mc,"gu").replace(/notPunctSpace/g,hc).replace(/punctSpace/g,en).replace(/punct/g,bs).getRegex(),bu=B(mc,"gu").replace(/notPunctSpace/g,du).replace(/punctSpace/g,cu).replace(/punct/g,uc).getRegex(),wu=B("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,hc).replace(/punctSpace/g,en).replace(/punct/g,bs).getRegex(),vu=B(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,pc).getRegex(),yu="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",xu=B(yu,"gu").replace(/notPunctSpace/g,uu).replace(/punctSpace/g,hu).replace(/punct/g,pc).getRegex(),ku=B(/\\(punct)/,"gu").replace(/punct/g,bs).getRegex(),Cu=B(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$u=B(Ja).replace("(?:-->|$)","-->").getRegex(),Su=B("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$u).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),jo=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Eu=B(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",jo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),gc=B(/^!?\[(label)\]\[(ref)\]/).replace("label",jo).replace("ref",Qa).getRegex(),bc=B(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qa).getRegex(),Au=B("reflink|nolink(?!\\()","g").replace("reflink",gc).replace("nolink",bc).getRegex(),Xn=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,rn={_backpedal:Ti,anyPunctuation:ku,autolink:Cu,blockSkip:pu,br:dc,code:au,del:Ti,delLDelim:Ti,delRDelim:Ti,emStrongLDelim:fu,emStrongRDelimAst:gu,emStrongRDelimUnd:wu,escape:su,link:Eu,nolink:bc,punctuation:lu,reflink:gc,reflinkSearch:Au,tag:Su,text:nu,url:Ti},Lu={...rn,link:B(/^!?\[(label)\]\((.*?)\)/).replace("label",jo).getRegex(),reflink:B(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",jo).getRegex()},pa={...rn,emStrongRDelimAst:bu,emStrongLDelim:mu,delLDelim:vu,delRDelim:xu,url:B(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Xn).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:B(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Xn).getRegex()},_u={...pa,br:B(dc).replace("{2,}","*").getRegex(),text:B(pa.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},vo={normal:tn,gfm:ru,pedantic:ou},Ir={normal:rn,gfm:pa,breaks:_u,pedantic:Lu},Tu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Yn=e=>Tu[e];function Ee(e,t){if(t){if(Dt.escapeTest.test(e))return e.replace(Dt.escapeReplace,Yn)}else if(Dt.escapeTestNoEncode.test(e))return e.replace(Dt.escapeReplaceNoEncode,Yn);return e}function Zn(e){try{e=encodeURI(e).replace(Dt.percentDecode,"%")}catch{return null}return e}function Qn(e,t){let i=e.replace(Dt.findPipe,(s,a,l)=>{let c=!1,h=a;for(;--h>=0&&l[h]==="\\";)c=!c;return c?"|":" |"}),r=i.split(Dt.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(Dt.slashPipe,"|");return r}function Pr(e,t,i){let r=e.length;if(r===0)return"";let o=0;for(;o<r&&e.charAt(r-o-1)===t;)o++;return e.slice(0,r-o)}function zu(e,t){if(e.indexOf(t[1])===-1)return-1;let i=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])i++;else if(e[r]===t[1]&&(i--,i<0))return r;return i>0?-2:-1}function Ru(e,t=0){let i=t,r="";for(let o of e)if(o==="	"){let s=4-i%4;r+=" ".repeat(s),i+=s}else r+=o,i++;return r}function Jn(e,t,i,r,o){let s=t.href,a=t.title||null,l=e[1].replace(o.other.outputLinkReplace,"$1");r.state.inLink=!0;let c={type:e[0].charAt(0)==="!"?"image":"link",raw:i,href:s,title:a,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,c}function Du(e,t,i){let r=e.match(i.other.indentCodeCompensation);if(r===null)return t;let o=r[1];return t.split(`
`).map(s=>{let a=s.match(i.other.beginningSpace);if(a===null)return s;let[l]=a;return l.length>=o.length?s.slice(o.length):s}).join(`
`)}var Ko=class{options;rules;lexer;constructor(e){this.options=e||ji}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let i=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Pr(i,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let i=t[0],r=Du(i,t[3]||"",this.rules);return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(this.rules.other.endingHash.test(i)){let r=Pr(i,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(i=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Pr(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let i=Pr(t[0],`
`).split(`
`),r="",o="",s=[];for(;i.length>0;){let a=!1,l=[],c;for(c=0;c<i.length;c++)if(this.rules.other.blockquoteStart.test(i[c]))l.push(i[c]),a=!0;else if(!a)l.push(i[c]);else break;i=i.slice(c);let h=l.join(`
`),u=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${h}`:h,o=o?`${o}
${u}`:u;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,s,!0),this.lexer.state.top=f,i.length===0)break;let m=s.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let g=m,b=g.raw+`
`+i.join(`
`),y=this.blockquote(b);s[s.length-1]=y,r=r.substring(0,r.length-g.raw.length)+y.raw,o=o.substring(0,o.length-g.text.length)+y.text;break}else if(m?.type==="list"){let g=m,b=g.raw+`
`+i.join(`
`),y=this.list(b);s[s.length-1]=y,r=r.substring(0,r.length-m.raw.length)+y.raw,o=o.substring(0,o.length-g.raw.length)+y.raw,i=b.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim(),r=i.length>1,o={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");let s=this.rules.other.listItemRegex(i),a=!1;for(;e;){let c=!1,h="",u="";if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;h=t[0],e=e.substring(h.length);let f=Ru(t[2].split(`
`,1)[0],t[1].length),m=e.split(`
`,1)[0],g=!f.trim(),b=0;if(this.options.pedantic?(b=2,u=f.trimStart()):g?b=t[1].length+1:(b=f.search(this.rules.other.nonSpaceChar),b=b>4?1:b,u=f.slice(b),b+=t[1].length),g&&this.rules.other.blankLine.test(m)&&(h+=m+`
`,e=e.substring(m.length+1),c=!0),!c){let y=this.rules.other.nextBulletRegex(b),E=this.rules.other.hrRegex(b),_=this.rules.other.fencesBeginRegex(b),A=this.rules.other.headingBeginRegex(b),$=this.rules.other.htmlBeginRegex(b),L=this.rules.other.blockquoteBeginRegex(b);for(;e;){let S=e.split(`
`,1)[0],O;if(m=S,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),O=m):O=m.replace(this.rules.other.tabCharGlobal,"    "),_.test(m)||A.test(m)||$.test(m)||L.test(m)||y.test(m)||E.test(m))break;if(O.search(this.rules.other.nonSpaceChar)>=b||!m.trim())u+=`
`+O.slice(b);else{if(g||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||_.test(f)||A.test(f)||E.test(f))break;u+=`
`+m}g=!m.trim(),h+=S+`
`,e=e.substring(S.length+1),f=O.slice(b)}}o.loose||(a?o.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(a=!0)),o.items.push({type:"list_item",raw:h,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),o.raw+=h}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let c of o.items){if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),c.task){if(c.text=c.text.replace(this.rules.other.listReplaceTask,""),c.tokens[0]?.type==="text"||c.tokens[0]?.type==="paragraph"){c.tokens[0].raw=c.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),c.tokens[0].text=c.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let h=this.rules.other.listTaskCheckbox.exec(c.raw);if(h){let u={type:"checkbox",raw:h[0]+" ",checked:h[0]!=="[ ]"};c.checked=u.checked,o.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=u.raw+c.tokens[0].raw,c.tokens[0].text=u.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(u)):c.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):c.tokens.unshift(u)}}if(!o.loose){let h=c.tokens.filter(f=>f.type==="space"),u=h.length>0&&h.some(f=>this.rules.other.anyLine.test(f.raw));o.loose=u}}if(o.loose)for(let c of o.items){c.loose=!0;for(let h of c.tokens)h.type==="text"&&(h.type="paragraph")}return o}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let i=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:i,raw:t[0],href:r,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let i=Qn(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:t[0],header:[],align:[],rows:[]};if(i.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?s.align.push("right"):this.rules.other.tableAlignCenter.test(a)?s.align.push("center"):this.rules.other.tableAlignLeft.test(a)?s.align.push("left"):s.align.push(null);for(let a=0;a<i.length;a++)s.header.push({text:i[a],tokens:this.lexer.inline(i[a]),header:!0,align:s.align[a]});for(let a of o)s.rows.push(Qn(a,s.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[c]})));return s}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let i=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let s=Pr(i.slice(0,-1),"\\");if((i.length-s.length)%2===0)return}else{let s=zu(t[2],"()");if(s===-2)return;if(s>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let r=t[2],o="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],o=s[3])}else o=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?r=r.slice(1):r=r.slice(1,-1)),Jn(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let r=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=t[r.toLowerCase()];if(!o){let s=i[0].charAt(0);return{type:"text",raw:s,text:s}}return Jn(i,o,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!i||this.rules.inline.punctuation.exec(i))){let o=[...r[0]].length-1,s,a,l=o,c=0,h=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+o);(r=h.exec(t))!=null;){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s)continue;if(a=[...s].length,r[3]||r[4]){l+=a;continue}else if((r[5]||r[6])&&o%3&&!((o+a)%3)){c+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);let u=[...r[0]][0].length,f=e.slice(0,o+r.index+u+a);if(Math.min(o,a)%2){let g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}let m=f.slice(2,-2);return{type:"strong",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(i),o=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return r&&o&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:t[0],text:i}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,i=""){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!i||this.rules.inline.punctuation.exec(i))){let o=[...r[0]].length-1,s,a,l=o,c=this.rules.inline.delRDelim;for(c.lastIndex=0,t=t.slice(-1*e.length+o);(r=c.exec(t))!=null;){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s||(a=[...s].length,a!==o))continue;if(r[3]||r[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let h=[...r[0]][0].length,u=e.slice(0,o+r.index+h+a),f=u.slice(o,-o);return{type:"del",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let i,r;return t[2]==="@"?(i=t[1],r="mailto:"+i):(i=t[1],r=i),{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let i,r;if(t[2]==="@")i=t[0],r="mailto:"+i;else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(o!==t[0]);i=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let i=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:i}}}},ge=class fa{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||ji,this.options.tokenizer=this.options.tokenizer||new Ko,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:Dt,block:vo.normal,inline:Ir.normal};this.options.pedantic?(i.block=vo.pedantic,i.inline=Ir.pedantic):this.options.gfm&&(i.block=vo.gfm,this.options.breaks?i.inline=Ir.breaks:i.inline=Ir.gfm),this.tokenizer.rules=i}static get rules(){return{block:vo,inline:Ir}}static lex(t,i){return new fa(i).lex(t)}static lexInline(t,i){return new fa(i).inlineTokens(t)}lex(t){t=t.replace(Dt.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let r=this.inlineQueue[i];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,i=[],r=!1){for(this.options.pedantic&&(t=t.replace(Dt.tabCharGlobal,"    ").replace(Dt.spaceLine,""));t;){let o;if(this.options.extensions?.block?.some(a=>(o=a.call({lexer:this},t,i))?(t=t.substring(o.raw.length),i.push(o),!0):!1))continue;if(o=this.tokenizer.space(t)){t=t.substring(o.raw.length);let a=i.at(-1);o.raw.length===1&&a!==void 0?a.raw+=`
`:i.push(o);continue}if(o=this.tokenizer.code(t)){t=t.substring(o.raw.length);let a=i.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.text,this.inlineQueue.at(-1).src=a.text):i.push(o);continue}if(o=this.tokenizer.fences(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.heading(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.hr(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.blockquote(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.list(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.html(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.def(t)){t=t.substring(o.raw.length);let a=i.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},i.push(o));continue}if(o=this.tokenizer.table(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.lheading(t)){t=t.substring(o.raw.length),i.push(o);continue}let s=t;if(this.options.extensions?.startBlock){let a=1/0,l=t.slice(1),c;this.options.extensions.startBlock.forEach(h=>{c=h.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=t.substring(0,a+1))}if(this.state.top&&(o=this.tokenizer.paragraph(s))){let a=i.at(-1);r&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):i.push(o),r=s.length!==t.length,t=t.substring(o.raw.length);continue}if(o=this.tokenizer.text(t)){t=t.substring(o.raw.length);let a=i.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):i.push(o);continue}if(t){let a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let r=t,o=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)s=o[2]?o[2].length:0,r=r.slice(0,o.index+s)+"["+"a".repeat(o[0].length-s-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let a=!1,l="";for(;t;){a||(l=""),a=!1;let c;if(this.options.extensions?.inline?.some(u=>(c=u.call({lexer:this},t,i))?(t=t.substring(c.raw.length),i.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);let u=i.at(-1);c.type==="text"&&u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):i.push(c);continue}if(c=this.tokenizer.emStrong(t,r,l)){t=t.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.del(t,r,l)){t=t.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),i.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),i.push(c);continue}let h=t;if(this.options.extensions?.startInline){let u=1/0,f=t.slice(1),m;this.options.extensions.startInline.forEach(g=>{m=g.call({lexer:this},f),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(h=t.substring(0,u+1))}if(c=this.tokenizer.inlineText(h)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),a=!0;let u=i.at(-1);u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):i.push(c);continue}if(t){let u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return i}},Go=class{options;parser;constructor(e){this.options=e||ji}space(e){return""}code({text:e,lang:t,escaped:i}){let r=(t||"").match(Dt.notSpaceStart)?.[0],o=e.replace(Dt.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Ee(r)+'">'+(i?o:Ee(o,!0))+`</code></pre>
`:"<pre><code>"+(i?o:Ee(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,i=e.start,r="";for(let a=0;a<e.items.length;a++){let l=e.items[a];r+=this.listitem(l)}let o=t?"ol":"ul",s=t&&i!==1?' start="'+i+'"':"";return"<"+o+s+`>
`+r+"</"+o+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",i="";for(let o=0;o<e.header.length;o++)i+=this.tablecell(e.header[o]);t+=this.tablerow({text:i});let r="";for(let o=0;o<e.rows.length;o++){let s=e.rows[o];i="";for(let a=0;a<s.length;a++)i+=this.tablecell(s[a]);r+=this.tablerow({text:i})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ee(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){let r=this.parser.parseInline(i),o=Zn(e);if(o===null)return r;e=o;let s='<a href="'+e+'"';return t&&(s+=' title="'+Ee(t)+'"'),s+=">"+r+"</a>",s}image({href:e,title:t,text:i,tokens:r}){r&&(i=this.parser.parseInline(r,this.parser.textRenderer));let o=Zn(e);if(o===null)return Ee(i);e=o;let s=`<img src="${e}" alt="${Ee(i)}"`;return t&&(s+=` title="${Ee(t)}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ee(e.text)}},on=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},be=class ma{options;renderer;textRenderer;constructor(t){this.options=t||ji,this.options.renderer=this.options.renderer||new Go,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new on}static parse(t,i){return new ma(i).parse(t)}static parseInline(t,i){return new ma(i).parseInline(t)}parse(t){let i="";for(let r=0;r<t.length;r++){let o=t[r];if(this.options.extensions?.renderers?.[o.type]){let a=o,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){i+=l||"";continue}}let s=o;switch(s.type){case"space":{i+=this.renderer.space(s);break}case"hr":{i+=this.renderer.hr(s);break}case"heading":{i+=this.renderer.heading(s);break}case"code":{i+=this.renderer.code(s);break}case"table":{i+=this.renderer.table(s);break}case"blockquote":{i+=this.renderer.blockquote(s);break}case"list":{i+=this.renderer.list(s);break}case"checkbox":{i+=this.renderer.checkbox(s);break}case"html":{i+=this.renderer.html(s);break}case"def":{i+=this.renderer.def(s);break}case"paragraph":{i+=this.renderer.paragraph(s);break}case"text":{i+=this.renderer.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}parseInline(t,i=this.renderer){let r="";for(let o=0;o<t.length;o++){let s=t[o];if(this.options.extensions?.renderers?.[s.type]){let l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=l||"";continue}}let a=s;switch(a.type){case"escape":{r+=i.text(a);break}case"html":{r+=i.html(a);break}case"link":{r+=i.link(a);break}case"image":{r+=i.image(a);break}case"checkbox":{r+=i.checkbox(a);break}case"strong":{r+=i.strong(a);break}case"em":{r+=i.em(a);break}case"codespan":{r+=i.codespan(a);break}case"br":{r+=i.br(a);break}case"del":{r+=i.del(a);break}case"text":{r+=i.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}},Vr=class{options;block;constructor(e){this.options=e||ji}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?ge.lex:ge.lexInline}provideParser(){return this.block?be.parse:be.parseInline}},Ou=class{defaults=Xa();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=be;Renderer=Go;TextRenderer=on;Lexer=ge;Tokenizer=Ko;Hooks=Vr;constructor(...e){this.use(...e)}walkTokens(e,t){let i=[];for(let r of e)switch(i=i.concat(t.call(this,r)),r.type){case"table":{let o=r;for(let s of o.header)i=i.concat(this.walkTokens(s.tokens,t));for(let s of o.rows)for(let a of s)i=i.concat(this.walkTokens(a.tokens,t));break}case"list":{let o=r;i=i.concat(this.walkTokens(o.items,t));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(s=>{let a=o[s].flat(1/0);i=i.concat(this.walkTokens(a,t))}):o.tokens&&(i=i.concat(this.walkTokens(o.tokens,t)))}}return i}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{let r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let s=t.renderers[o.name];s?t.renderers[o.name]=function(...a){let l=o.renderer.apply(this,a);return l===!1&&(l=s.apply(this,a)),l}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=t[o.level];s?s.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),r.extensions=t),i.renderer){let o=this.defaults.renderer||new Go(this.defaults);for(let s in i.renderer){if(!(s in o))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let a=s,l=i.renderer[a],c=o[a];o[a]=(...h)=>{let u=l.apply(o,h);return u===!1&&(u=c.apply(o,h)),u||""}}r.renderer=o}if(i.tokenizer){let o=this.defaults.tokenizer||new Ko(this.defaults);for(let s in i.tokenizer){if(!(s in o))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let a=s,l=i.tokenizer[a],c=o[a];o[a]=(...h)=>{let u=l.apply(o,h);return u===!1&&(u=c.apply(o,h)),u}}r.tokenizer=o}if(i.hooks){let o=this.defaults.hooks||new Vr;for(let s in i.hooks){if(!(s in o))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let a=s,l=i.hooks[a],c=o[a];Vr.passThroughHooks.has(s)?o[a]=h=>{if(this.defaults.async&&Vr.passThroughHooksRespectAsync.has(s))return(async()=>{let f=await l.call(o,h);return c.call(o,f)})();let u=l.call(o,h);return c.call(o,u)}:o[a]=(...h)=>{if(this.defaults.async)return(async()=>{let f=await l.apply(o,h);return f===!1&&(f=await c.apply(o,h)),f})();let u=l.apply(o,h);return u===!1&&(u=c.apply(o,h)),u}}r.hooks=o}if(i.walkTokens){let o=this.defaults.walkTokens,s=i.walkTokens;r.walkTokens=function(a){let l=[];return l.push(s.call(this,a)),o&&(l=l.concat(o.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ge.lex(e,t??this.defaults)}parser(e,t){return be.parse(e,t??this.defaults)}parseMarkdown(e){return(t,i)=>{let r={...i},o={...this.defaults,...r},s=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=e),o.async)return(async()=>{let a=o.hooks?await o.hooks.preprocess(t):t,l=await(o.hooks?await o.hooks.provideLexer():e?ge.lex:ge.lexInline)(a,o),c=o.hooks?await o.hooks.processAllTokens(l):l;o.walkTokens&&await Promise.all(this.walkTokens(c,o.walkTokens));let h=await(o.hooks?await o.hooks.provideParser():e?be.parse:be.parseInline)(c,o);return o.hooks?await o.hooks.postprocess(h):h})().catch(s);try{o.hooks&&(t=o.hooks.preprocess(t));let a=(o.hooks?o.hooks.provideLexer():e?ge.lex:ge.lexInline)(t,o);o.hooks&&(a=o.hooks.processAllTokens(a)),o.walkTokens&&this.walkTokens(a,o.walkTokens);let l=(o.hooks?o.hooks.provideParser():e?be.parse:be.parseInline)(a,o);return o.hooks&&(l=o.hooks.postprocess(l)),l}catch(a){return s(a)}}}onError(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+Ee(i.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(i);throw i}}},Mi=new Ou;function j(e,t){return Mi.parse(e,t)}j.options=j.setOptions=function(e){return Mi.setOptions(e),j.defaults=Mi.defaults,ac(j.defaults),j};j.getDefaults=Xa;j.defaults=ji;j.use=function(...e){return Mi.use(...e),j.defaults=Mi.defaults,ac(j.defaults),j};j.walkTokens=function(e,t){return Mi.walkTokens(e,t)};j.parseInline=Mi.parseInline;j.Parser=be;j.parser=be.parse;j.Renderer=Go;j.TextRenderer=on;j.Lexer=ge;j.lexer=ge.lex;j.Tokenizer=Ko;j.Hooks=Vr;j.parse=j;j.options;j.setOptions;j.use;j.walkTokens;j.parseInline;be.parse;ge.lex;const wc=(e,t)=>{const i=new wt.subtle.Watcher(async()=>{try{await 0,t(e.get())}finally{i.watch(e)}});return i.watch(e),e.get(),()=>{i.unwatch(e)}};Object.defineProperty(Oi.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});const Iu=Ch(Oi);class co extends Iu{constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(t=>Xd(t)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(t=>t()),this.signalCleanups.clear()}subscribe(t,i){const r=It(t,i.bind(this));this.eventSubscriptions.add(r)}showInfo(t){si(t)}showError(t){At(t)}nobubble(t){return i=>{i.stopPropagation(),t.bind(this)(i)}}command(t,i={}){return()=>{this.executeCommand(t,i)}}executeCommand(t,i){const r=ci.createExecutionContext(i);ci.execute(t,r)}watch(t,i){const r=wc(t,i.bind(this));this.signalCleanups.add(r)}firstUpdated(t){super.firstUpdated(t),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(t){t(),this.updateLater()}}class $i extends co{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const t=[];let i=this;for(;i&&i!==document.body&&i!==document.documentElement;){const r=i.getAttribute("id");if(r){t.unshift(`#${r}`);break}const o=i.tagName.toLowerCase(),s=i.parentElement;if(!s)break;const l=Array.from(s.children).filter(c=>c.tagName.toLowerCase()===o).indexOf(i);l>=0?t.unshift(`${o}:${l}`):t.unshift(o),i=s}return t.length>0?t.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const t=this.tagName.toLowerCase(),i=this.getAttribute("id");if(i){this.settingsKey=`${t}:${i}`;return}const r=this.buildDOMTreePath();r&&(this.settingsKey=`${t}:${r}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await ct.getDialogSetting(this.settingsKey)}async setDialogSetting(t){this.initializeSettingsKey(),this.settingsKey&&await ct.setDialogSetting(this.settingsKey,t)}}const Cn=class Cn extends $i{dispose(){}getResult(){}renderMessage(t,i=!1){if(i){const r=j.parse(t,{async:!1});return p`<div class="dialog-message" style="white-space: normal;">${je(r)}</div>`}return p`<div class="dialog-message" style="white-space: pre-line;">${t}</div>`}};Cn.styles=[C`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let Ke=Cn;const Li=Je("DialogService"),dr="dialogs",ws={id:"ok",label:"OK",variant:"primary"},vc={id:"cancel",label:"Cancel",variant:"default"},Pu={id:"close",label:"Close",variant:"default"};let Ji=null;function Mu(){return(!Ji||!document.body.contains(Ji))&&(Ji=document.createElement("div"),Ji.id="global-dialog-container",document.body.appendChild(Ji)),Ji}class Nu{constructor(){this.contributions=new Map,this.contributionsChangeScheduled=!1,this.loadContributions(),It(we,t=>{t.target===dr&&(this.contributionsChangeScheduled||(this.contributionsChangeScheduled=!0,queueMicrotask(()=>{this.contributionsChangeScheduled=!1,this.loadContributions()})))})}loadContributions(){const t=H.getContributions(dr);this.contributions.clear();for(const i of t){if(!i.id){Li.warn("Dialog contribution missing id, skipping");continue}if(!i.component){Li.warn(`Dialog contribution "${i.id}" has no component function, skipping`);continue}if(!i.onButton){Li.warn(`Dialog contribution "${i.id}" has no onButton callback, skipping`);continue}this.contributions.set(i.id,i)}}async open(t,i){const r=this.contributions.get(t);if(!r)throw Li.error(`Dialog "${t}" not found`),new Error(`Dialog "${t}" not found`);return new Promise(o=>{const s=Mu();let a=!0,l=null;const c=async()=>{if(a){if(a=!1,l)try{await l.dispose()}catch(g){const b=g instanceof Error?g.message:String(g);Li.error(`Error disposing dialog content for "${t}": ${b}`)}try{const g=l?l.getResult():void 0;await r.onButton("close",g,f)}catch(g){const b=g instanceof Error?g.message:String(g);Li.error(`Error executing close callback for dialog "${t}": ${b}`)}ae(p``,s),o()}},h=async g=>{try{const b=l?l.getResult():void 0;await r.onButton(g,b,f)!==!1&&c()}catch(b){const y=b instanceof Error?b.message:String(b);Li.error(`Error executing button callback for dialog "${t}": ${y}`),c()}},u=r.buttons&&r.buttons.length>0?r.buttons:[ws];i&&typeof i=="object"&&(i.close=c);const f={...i,close:c},m=p`
                <wa-dialog label="${r.label||t}" open @wa-request-close=${c}>
                    <style>
                        .dialog-service-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 400px;
                        }
                        
                        .dialog-service-footer {
                            display: flex;
                            gap: 0.5rem;
                            justify-content: flex-end;
                            margin-top: 1rem;
                            padding-top: 1rem;
                            border-top: 1px solid var(--wa-color-neutral-20);
                        }

                        :host-context(.wa-light) .dialog-service-footer {
                            border-top-color: var(--wa-color-neutral-80);
                        }
                    </style>
                    
                    <div class="dialog-service-content" 
                         @dialog-ok=${()=>{const g=u.find(b=>b.id==="ok");g&&h(g.id)}}
                         @dialog-cancel=${()=>{const g=u.find(b=>b.id==="cancel");g?h(g.id):c()}}>
                        ${r.component(i)}
                        
                        <div class="dialog-service-footer">
                            ${u.map(g=>p`
                                <wa-button 
                                    variant="${g.variant||"default"}"
                                    ?disabled=${g.disabled}
                                    @click=${()=>h(g.id)}
                                >
                                    ${g.label}
                                </wa-button>
                            `)}
                        </div>
                    </div>
                </wa-dialog>
            `;ae(m,s),(async()=>{const g=Array.from(s.querySelectorAll("*"));for(const b of g)if(b instanceof Ke){await b.updateComplete,l=b;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(t){return this.contributions.has(t)}}const sn=new Nu;$t.put("dialogService",sn);class an extends $i{}const v=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const Fu={attribute:!0,type:String,converter:Mo,reflect:!1,hasChanged:Pa},Bu=(e=Fu,t,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),r==="accessor"){const{name:a}=i;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,c,e,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,e,l),l}}}if(r==="setter"){const{name:a}=i;return function(l){const c=this[a];t.call(this,l),this.requestUpdate(a,c,e,!0,l)}}throw Error("Unsupported decorator location: "+r)};function d(e){return(t,i)=>typeof i=="object"?Bu(e,t,i):((r,o,s)=>{const a=o.hasOwnProperty(s);return o.constructor.createProperty(s,r),a?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}function w(e){return d({...e,state:!0,attribute:!1})}function vs(e){return(t,i)=>{const r=typeof t=="function"?t:t[i];Object.assign(r,e)}}const yc=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);function x(e,t){return(i,r,o)=>{const s=a=>a.renderRoot?.querySelector(e)??null;return yc(i,r,{get(){return s(this)}})}}function Uu(e){return(t,i)=>yc(t,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var Vu=Object.defineProperty,qu=(e,t,i,r)=>{for(var o=void 0,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(t,i,o)||o);return o&&Vu(t,i,o),o};class Qt extends an{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return R}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}activateContainingTab(){let t=this,i=null,r=null;for(;t;){const o=t.tagName?.toLowerCase();if(o==="wa-tab-panel"&&(i=t.getAttribute("name")),o==="lyra-tabs"){r=t;break}const s=t.parentElement;if(s)t=s;else{const a=t.getRootNode();t=a instanceof ShadowRoot?a.host:null}}r&&i!=null&&i!==""&&r.activate(i)}renderContextMenu(){return R}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(t){super.updated(t),t.has("dirty")&&t.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(t){this.dirty=t,ca.set(null),ca.set(this),ee.set(null),ee.set(this)}}qu([d()],Qt.prototype,"dirty");const te="events/filesys/workspaceChanged",ei="events/filesys/workspaceConnected",Nt=Je("WorkspaceService");class xc{constructor(){this.state={}}getWorkspacePath(){const t=[];let i=this,r;for(;i;){t.push(i.getName());const s=i.getParent();s||(r=i),i=s}t.reverse();const o=typeof Y?.getWorkspaceSync=="function"?Y.getWorkspaceSync():void 0;if(o&&r&&"isDirectChild"in o&&typeof o.isDirectChild=="function"&&o.isDirectChild(r)){const s=o.getFolderNameForDirectory(r);if(s&&t.length>0)return t.length>1?s+"/"+t.slice(1).join("/"):s}return t.shift(),t.join("/")}getWorkspace(){let t=this;for(;t;){const i=t.getParent();if(i)t=i;else break}return t}}var nn=(e=>(e[e.TEXT=0]="TEXT",e[e.BINARY=1]="BINARY",e))(nn||{}),kc=(e=>(e[e.BASE64=0]="BASE64",e))(kc||{});class He extends xc{}class De extends xc{}class Hu extends De{constructor(t,i="/"){super(),this.displayName=i,this.entriesByName=new Map(t.map(r=>[r.getName(),r]))}getFolderNameForDirectory(t){for(const[i,r]of this.entriesByName)if(r===t)return i}isDirectChild(t){return this.getFolderNameForDirectory(t)!==void 0}getName(){return this.displayName}getParent(){}async listChildren(t){return Array.from(this.entriesByName.values())}async getResource(t,i){if(!t||!t.trim())return null;const r=t.indexOf("/"),o=r>=0?t.slice(0,r).trim():t.trim(),s=r>=0?t.slice(r+1).trim():"",a=this.entriesByName.get(o);return a?s?a.getResource(s,i):a:null}touch(){for(const t of this.entriesByName.values())t.touch()}async delete(t,i){throw new Error("Delete not supported on workspace root")}async copyTo(t){throw new Error("Copy not supported on workspace root")}async rename(t){throw new Error("Rename not supported on workspace root")}getFolderByName(t){return this.entriesByName.get(t)}}const tl="workspace_data",ls=class ls{constructor(){this._currentWorkspace=void 0,this.folders=[],this.contributions=new Map;let t;this.initPromise=new Promise(i=>{t=i}),this.loadPersistedWorkspace(t)}getWorkspaceSync(){return this._currentWorkspace}registerContribution(t){this.contributions.set(t.type,t)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(t){Nt.debug("Restoring workspace from persistence");try{const i=await Ae.getObject(tl);if(i||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),i?.folders&&Array.isArray(i.folders)&&i.folders.length>0){const r=i.folders.map(s=>({type:s.type,data:s.data}));await this.resolveFolders(r);const o=this.buildComposite();this.workspace=Promise.resolve(o),this._currentWorkspace=o??void 0,o&&(F(ei,o),Nt.debug("Workspace restored from persisted folders")),t();return}if(i&&i.type&&i.data!==void 0){const r=this.contributions.get(i.type);if(r?.restore)try{const o=await r.restore(i.data);if(o){this.folders=[{type:i.type,data:i.data,directory:o}];const s=this.buildComposite();this.workspace=Promise.resolve(s),this._currentWorkspace=s??void 0,this.currentType=i.type,await this.persistFolders(),F(ei,s),Nt.debug("Workspace restored from legacy format")}}catch(o){Nt.error("Failed to restore legacy workspace:",o)}}this.workspace||(this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0),t()}finally{if(this.folders.length===0)try{await this.connectFolder({indexeddb:!0,name:ls.DEFAULT_INDEXEDDB_FOLDER_NAME}),Nt.debug("Connected default IndexedDB workspace")}catch(i){Nt.warn("Failed to connect default IndexedDB folder",i)}}}async resolveFolders(t){this.folders=[];for(const i of t){const r=this.contributions.get(i.type);if(r?.restore)try{const o=await r.restore(i.data);o&&this.folders.push({type:i.type,data:i.data,directory:o})}catch(o){Nt.warn(`Failed to restore folder (${i.type}):`,o)}}}buildComposite(){if(this.folders.length!==0)return new Hu(this.folders.map(t=>t.directory))}async persistFolders(){const t=this.folders.length>0?{folders:this.folders.map(i=>({type:i.type,data:i.data}))}:null;await Ae.persistObject(tl,t),await Ae.persistObject("workspace",null),Nt.debug(`Persisted ${this.folders.length} folder(s)`)}async getFolders(){return await this.initPromise,this.folders.map(t=>({name:t.directory.getName(),type:t.type}))}async getFolderInfoForDirectory(t){await this.initPromise;const i=this.folders.find(a=>a.directory===t);if(!i)return;const r=i.data&&typeof i.data=="object"&&i.data.name||i.directory.getName(),s=this.contributions.get(i.type)?.name??i.type;return{name:r,type:i.type,backendName:s}}async updateFolderName(t,i){await this.initPromise;const r=this.folders.find(s=>s.directory===t);if(!r)return;r.data&&typeof r.data=="object"?r.data={...r.data,name:i}:r.data={name:i},await this.persistFolders();const o=this.buildComposite();this.workspace=Promise.resolve(o),this._currentWorkspace=o??void 0,F(ei,o),Nt.debug(`Updated folder name: ${i}`)}async connectFolder(t){await this.initPromise;const i=Array.from(this.contributions.values()).find(c=>c.canHandle(t));if(!i)throw new Error("No workspace contribution can handle this input");const r=t?.name??i.type;Nt.debug(`Connecting workspace: ${i.type}, ${r}`);const o=await i.connect(t),s=i.persist?await i.persist(o):t;this.folders.push({type:i.type,data:s,directory:o}),await this.persistFolders(),this.currentType=this.folders.length===1?i.type:void 0;const a=this.buildComposite();this.workspace=Promise.resolve(a),this._currentWorkspace=a,F(ei,a);const l=o.getName();return Nt.info(`Workspace connected: ${i.type} (${l})`),a}async disconnectFolder(t){await this.initPromise;const i=this.folders.findIndex(s=>s.directory===t);if(i<0)return;const r=this.folders[i];Nt.debug(`Disconnecting folder: ${r.directory.getName()} (${r.type})`),this.folders.splice(i,1),await this.persistFolders(),this.folders.length>0?this.currentType=this.folders[0].type:(this.currentType=void 0,Nt.info("Workspace disconnected"));const o=this.buildComposite();this.workspace=Promise.resolve(o),this._currentWorkspace=o??void 0,F(ei,o)}async connectWorkspace(t){return this.connectFolder(t)}async getWorkspace(){if(await this.initPromise,!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return this.folders.length>0}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){await this.initPromise,this.workspace=Promise.resolve(void 0),this._currentWorkspace=void 0,this.folders=[],this.currentType=void 0,await this.persistFolders(),F(ei,void 0),Nt.info("Workspace disconnected")}};ls.DEFAULT_INDEXEDDB_FOLDER_NAME="My Folder";let ga=ls;const Y=new ga;$t.put("workspaceService",Y);class ba extends He{constructor(t,i){super(),this.fileHandle=t,this.parent=i}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(t){const i=await this.fileHandle.getFile();return!t||t?.contentType==nn.TEXT?await i.text():t?.encoding==kc.BASE64||t?.uri?URL.createObjectURL(i):t?.blob?i:i.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(t,i){const r=await this.fileHandle.createWritable();if(t&&typeof t.pipeTo=="function")await t.pipeTo(r);else{const o=r.getWriter();try{await o.write(t)}finally{await o.close()}}}async copyTo(t){const i=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(t,{create:!0})).saveContents(i)}async rename(t){const i=this.getParent();if(!i)throw new Error("Cannot rename root resource");if(this.getName()!==t){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(t)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):r}await i.listChildren(!0),F(te,Y.getWorkspaceSync()??this.getWorkspace())}}}class Re extends De{constructor(t,i){super(),this.dirHandle=t,this.parent=i}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(t=!1){return t||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const i={};try{for await(const r of this.dirHandle.values()){const s=r.kind==="file"?new ba(r,this):new Re(r,this);i[s.getName()]=s}}catch(r){if(r.name==="NotFoundError")return this.files={},[];throw r}return this.files=i,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(t,i){if(!t)throw new Error("No path provided");const r=t.split("/");let o=this,s=!1;try{for(let a=0;a<r.length;a++){let l=r[a];if(l&&(l=l.trim()),!l)break;if(o instanceof Re){if(await o.listChildren(),!o.files)return null;const c=o.files[l];if(c)o=c;else if(i?.create)if(s=!0,a<r.length-1)try{const h=await o.dirHandle.getDirectoryHandle(l,{create:!0}),u=new Re(h,o);o.files[l]=u,o=u,o instanceof Re&&await o.listChildren();continue}catch(h){throw h.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${r.slice(0,a+1).join("/")}`):h}else try{const h=await o.dirHandle.getFileHandle(l,{create:!0}),u=new ba(h,o);return o.files[l]=u,u}catch(h){throw h.name==="NotFoundError"?new Error(`File not found or not accessible: ${r.join("/")}`):h}else return null}}}finally{s&&F(te,Y.getWorkspaceSync()??this.getWorkspace())}return o}touch(){F(te,Y.getWorkspaceSync()??this.getWorkspace())}async delete(t,i=!0){if(!t){const r=this.getParent();return r instanceof Re&&(await r.listChildren(),r.files&&delete r.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,r?.delete(this.getName())}return this.dirHandle.removeEntry(t,{recursive:i}).then(async()=>{this.files&&delete this.files[t],F(te,Y.getWorkspaceSync()??this.getWorkspace())})}async copyTo(t){for(const i of await this.listChildren()){const r=[t,i.getName()].join("/");await i.copyTo(r)}}async rename(t){const i=this.getParent();if(!i)throw new Error("Cannot rename workspace root");if(this.getName()!==t){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(t)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):r}await i.listChildren(!0),F(te,Y.getWorkspaceSync()??this.getWorkspace())}}}Y.registerContribution({type:"filesystem",name:"fs",canHandle(e){return e&&"kind"in e&&e.kind==="directory"},async connect(e){return new Re(e)},async restore(e){if(e&&"kind"in e&&e.kind==="directory")return new Re(e,void 0)},async persist(e){return e instanceof Re?e.getHandle():null}});const el=Object.freeze(Object.defineProperty({__proto__:null,FileSysDirHandleResource:Re,FileSysFileHandleResource:ba},Symbol.toStringTag,{value:"Module"})),Wu=".opfs";async function il(){if(typeof navigator>"u"||!navigator.storage?.getDirectory)throw new Error("OPFS is not available in this environment");return await navigator.storage.getDirectory()}class Bs extends De{constructor(t){super(),this.inner=t}getName(){return Wu}getParent(){return this.inner.getParent()}async listChildren(t){return this.inner.listChildren(t)}async getResource(t,i){return this.inner.getResource(t,i)}touch(){this.inner.touch()}async delete(t,i){return this.inner.delete(t,i)}async copyTo(t){return this.inner.copyTo(t)}async rename(t){return this.inner.rename(t)}}Y.registerContribution({type:"opfs",name:"opfs",canHandle(e){return e&&typeof e=="object"&&e.opfs===!0},async connect(e){const t=await il(),r=(await Ot(()=>Promise.resolve().then(()=>el),[])).FileSysDirHandleResource,o=new r(t);return new Bs(o)},async restore(e){if(e&&typeof e=="object"&&e.opfs===!0){const t=await il(),r=(await Ot(()=>Promise.resolve().then(()=>el),void 0)).FileSysDirHandleResource,o=new r(t);return new Bs(o)}},async persist(e){return e instanceof Bs?{opfs:!0}:null}});const ju="eclipse-lyra-workspace-idb",Ut="files";let Us=null;async function ui(){if(typeof indexedDB>"u")throw new Error("IndexedDB is not available in this environment");return Us||(Us=new Promise((e,t)=>{const i=indexedDB.open(ju,1);i.onerror=()=>t(i.error),i.onsuccess=()=>e(i.result),i.onupgradeneeded=r=>{const o=r.target.result;o.objectStoreNames.contains(Ut)||o.createObjectStore(Ut)}})),Us}async function Ku(){const e="IndexedDB",t=await Y.getFolders(),i=new Set(t.filter(o=>o.type==="indexeddb").map(o=>o.name));if(!i.has(e))return e;let r=1;for(;i.has(`${e} (${r})`);)r+=1;return`${e} (${r})`}function hr(e){return e?e.split("/").filter(Boolean).join("/"):""}function qr(e,t){const i=hr(e),r=hr(t);return i?r?`${i}/${r}`:i:r}function ur(e,t){const i=hr(t);return i?`${e}/${i}`:e}function Gu(e,t){const i=hr(t);return i?`${e}/${i}/`:`${e}/`}async function Do(e,t){const o=(await ui()).transaction(Ut,"readonly").objectStore(Ut),s=t?ur(e,t):e;return await new Promise((a,l)=>{const c=o.get(s);c.onsuccess=()=>a(c.result),c.onerror=()=>l(c.error)})}async function Xr(e,t,i){const s=(await ui()).transaction(Ut,"readwrite").objectStore(Ut),a=t?ur(e,t):e;await new Promise((l,c)=>{const h=s.put(i,a);h.onsuccess=()=>l(),h.onerror=()=>c(h.error)})}async function rl(e,t){const o=(await ui()).transaction(Ut,"readwrite").objectStore(Ut),s=t?ur(e,t):e;await new Promise((a,l)=>{const c=o.delete(s);c.onsuccess=()=>a(),c.onerror=()=>l(c.error)})}async function Xu(e,t){const o=(await ui()).transaction(Ut,"readwrite").objectStore(Ut),s=ur(e,t),a=s+"/",l=o.openCursor();await new Promise((c,h)=>{l.onerror=()=>h(l.error),l.onsuccess=u=>{const f=u.target.result;if(!f){c();return}const m=String(f.key);(m===s||m.startsWith(a))&&f.delete(),f.continue()}})}async function Yu(e,t,i){const s=(await ui()).transaction(Ut,"readwrite").objectStore(Ut),a=ur(e,t),l=ur(e,i),c=s.openCursor(),h=[];await new Promise((u,f)=>{c.onerror=()=>f(c.error),c.onsuccess=m=>{const g=m.target.result;if(!g){u();return}const b=String(g.key);if(b===a||b.startsWith(a+"/")){const y=b.slice(a.length),E=l+y,_=g.value;h.push(()=>{g.delete(),s.put(_,E)})}g.continue()}});for(const u of h)u()}async function Zu(e,t){const o=(await ui()).transaction(Ut,"readonly").objectStore(Ut),s=Gu(e,t),a=o.openCursor(),l=new Set,c=new Map;await new Promise((u,f)=>{a.onerror=()=>f(a.error),a.onsuccess=m=>{const g=m.target.result;if(!g){u();return}const b=String(g.key),y=g.value;if(!b.startsWith(s)){g.continue();return}const E=b.slice(s.length);if(!E){g.continue();return}const _=E.indexOf("/"),A=_===-1?E:E.slice(0,_);_===-1?y.type==="dir"?l.add(A):c.set(A,y):l.add(A),g.continue()}});const h=[];for(const u of l)h.push({name:u,entry:{type:"dir"},type:"dir"});for(const[u,f]of c)l.has(u)||h.push({name:u,entry:f,type:"file"});return h}function Qu(e){return e instanceof _e?e.getRootId():""}class Vs extends He{constructor(t,i){super(),this.path=hr(t),this.parent=i}getName(){const t=this.path.split("/");return t[t.length-1]||""}getParent(){return this.parent}getRootId(){return Qu(this.parent)}async delete(){await rl(this.getRootId(),this.path),F(te,Y.getWorkspaceSync()??this.getWorkspace())}async getContents(t){const i=await Do(this.getRootId(),this.path);let r=i?.content;if(typeof r=="string"){const s=new Blob([r],{type:i?.mimeType||"text/plain"});r=s,i&&(i.content=s,await Xr(this.getRootId(),this.path,i))}if(!t||t.contentType===nn.TEXT)return r?await r.text():"";let o;return r?o=r:o=new Blob([],{type:i?.mimeType}),t.blob?o:t.uri?URL.createObjectURL(o):o.stream()}async saveContents(t,i){let r,o;if(t instanceof Blob)r=t,o=t.type||void 0;else if(typeof t=="string")o="text/plain",r=new Blob([t],{type:o});else{const s=String(t??"");o="text/plain",r=new Blob([s],{type:o})}await Xr(this.getRootId(),this.path,{type:"file",content:r,mimeType:o}),F(te,Y.getWorkspaceSync()??this.getWorkspace())}async size(){const i=(await Do(this.getRootId(),this.path))?.content;return i?i.size:null}async copyTo(t){const i=await this.getContents({blob:!0}),r=await this.getWorkspace().getResource(t,{create:!0});if(!r)throw new Error(`Failed to create target file: ${t}`);await r.saveContents(i)}async rename(t){if(this.getName()===t)return;const i=this.getParent(),r=i instanceof _e?i.getPath():"",o=qr(r,t),s=this.getRootId(),a=await Do(s,this.path);if(!a)throw new Error("File not found in IndexedDB");await rl(s,this.path),await Xr(s,o,a),F(te,Y.getWorkspaceSync()??this.getWorkspace())}}class _e extends De{constructor(t,i){super(),this.path=hr(t),this.parent=i}getPath(){return this.path}getName(){if(!this.path)return"";const t=this.path.split("/");return t[t.length-1]}getParent(){return this.parent}getRoot(){const t=this.getParent();return t?t.getRoot():this}getRootId(){const t=this.getRoot();return t instanceof Oo?t.getRootId():""}async listChildren(t){const i=await Zu(this.getRootId(),this.path),r=[];for(const o of i){const s=qr(this.path,o.name);o.type==="dir"?r.push(new _e(s,this)):r.push(new Vs(s,this))}return r}async getResource(t,i){if(!t)throw new Error("No path provided");const r=t.split("/").filter(s=>s.trim());let o=this;for(let s=0;s<r.length;s++){const a=r[s],l=s===r.length-1,c=o.getPath(),h=qr(c,a),u=this.getRootId(),f=await Do(u,h);if(!f){if(!i?.create)return null;if(l)return await Xr(u,h,{type:"file",content:new Blob([])}),F(te,Y.getWorkspaceSync()??this.getWorkspace()),new Vs(h,o);await Xr(u,h,{type:"dir"}),o=new _e(h,o);continue}if(l)return f.type==="dir"?new _e(h,o):new Vs(h,o);if(f.type!=="dir")return null;o=new _e(h,o)}return o}touch(){F(te,Y.getWorkspaceSync()??this.getWorkspace())}async delete(t,i=!0){if(!t){const o=this.getParent();if(o instanceof _e){await o.delete(this.getName());return}return}const r=qr(this.path,t);await Xu(this.getRootId(),r),F(te,Y.getWorkspaceSync()??this.getWorkspace())}async copyTo(t){for(const i of await this.listChildren(!1)){const r=[t,i.getName()].join("/");await i.copyTo(r)}}async rename(t){if(this.getName()===t)return;const i=this.getParent();if(!(i instanceof _e))throw new Error("Cannot rename IndexedDB root directory");const r=this.getPath(),o=qr(i.getPath(),t);await Yu(this.getRootId(),r,o),F(te,Y.getWorkspaceSync()??this.getWorkspace())}}class Oo extends _e{constructor(t,i){super(""),this.displayName=t||"IndexedDB",this.rootId=i}getRootId(){return this.rootId}getName(){return this.displayName}getParent(){}async rename(t){const i=String(t??"").trim();!i||i===this.displayName||(this.displayName=i,await Y.updateFolderName(this,i))}}function Ju(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"default-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}Y.registerContribution({type:"indexeddb",name:"idb",canHandle(e){return e&&typeof e=="object"&&e.indexeddb===!0},async connect(e){await ui();const t=e.name&&String(e.name).trim(),i=t&&t.length>0?t:await Ku(),r=Ju();return new Oo(i,r)},async restore(e){if(e&&typeof e=="object"&&e.indexeddb===!0&&e.rootId){await ui();const t=e.name&&String(e.name).trim()||"IndexedDB";return new Oo(t,String(e.rootId))}},async persist(e){return e instanceof Oo?{indexeddb:!0,name:e.getName(),rootId:e.getRootId()}:null}});class tp{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,It(ei,()=>{}),It(we,t=>{t.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const t=H.getContributions("system.icons");return this.cachedIconContributions=[...t].sort((i,r)=>{const o=i.priority??0,s=r.priority??0;return s!==o?s-o:i.label.localeCompare(r.label)}),this.cachedIconContributions}setupEventListeners(t){if(this.listenersAttached)return;this.listenersAttached=!0;const i=s=>{const a=s.detail;a&&Array.from(a.querySelectorAll("*")).filter(c=>c instanceof Qt).forEach(c=>{ee.set(c),c.isEditor&&Gr.set(c)})};t.addEventListener("tab-shown",i);const r=s=>{const a=s.detail;Array.from(a.querySelectorAll("*")).filter(c=>c instanceof Qt).forEach(c=>{ee.get()==c&&ee.set(null),Gr.get()==c&&Gr.set(null)})};t.addEventListener("tab-closed",r);const o=s=>{const l=s.closest("wa-tab-panel").getAttribute("name");t.markDirty(l,s.isDirty())};this.signalCleanup=wc(ca,o)}registerEditorInputHandler(t){this.editorInputHandlers.push({definition:t,initialized:!1}),this.editorInputHandlers.sort((i,r)=>{const o=i.definition.ranking??0;return(r.definition.ranking??0)-o})}async ensureHandlerInitialized(t){const i=t.definition;!i.lazyInit||t.initialized||(t.lazyInitPromise||(t.lazyInitPromise=Promise.resolve(i.lazyInit()).then(()=>{t.initialized=!0,t.lazyInitPromise=void 0}).catch(r=>{throw t.lazyInitPromise=void 0,r})),await t.lazyInitPromise)}getEditorOptionsForInput(t){const i=new Set,r=[];for(const o of this.editorInputHandlers){const s=o.definition;!s.canHandle(t)||i.has(s.editorId)||(i.add(s.editorId),r.push({editorId:s.editorId,title:s.label,icon:s.icon}))}return r}async handleInput(t,i){if(i!==void 0){const r=this.editorInputHandlers.find(o=>o.definition.editorId===i);if(r){await this.ensureHandlerInitialized(r);const o=await r.definition.handle(t);return o&&(o.editorId=r.definition.editorId),o}return}for(let r=0;r<this.editorInputHandlers.length;r++){const o=this.editorInputHandlers[r],s=o.definition;if(s.canHandle(t)){await this.ensureHandlerInitialized(o);const a=await s.handle(t);return a&&(a.editorId=s.editorId),a}}}getEditorArea(){return document.querySelector(`lyra-tabs#${oi}`)}async loadEditor(t,i){if(!t||("component"in t||(t=await this.handleInput(t,i)),!t||!("component"in t)))return;const r=t.editorId??i;r&&(t.editorId=r),await this.openTab({name:t.key,editorId:r,label:t.title,icon:t.icon,closable:!0,noOverflow:t.noOverflow,component:t.component})}async openTab(t){const i=this.getEditorArea();if(!i){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(i),i.has(t.name)){i.activate(t.name);return}i.open(t)}getFileIcon(t){const i=t.includes(".")?t.split(".").pop()?.toLowerCase()||"":t.toLowerCase(),r=this.getSortedIconContributions();if(r.length===0)return"file";for(const o of r)if(o.mappings&&o.mappings[i])return o.mappings[i];return"file"}}const pr=new tp;$t.put("editorRegistry",pr);H.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const Xt=Je("MarketplaceRegistry"),ol="events/marketplaceregistry/changed",sl="marketplace.catalogUrls";class ep{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(t=>{Xt.error(`Failed to refresh catalogs on init: ${t.message}`)})})}async loadCatalogUrls(){try{const t=await ct.get(sl);this.catalogUrls=Array.isArray(t)?t:[]}catch(t){Xt.error(`Failed to load catalog URLs: ${t}`),this.catalogUrls=[]}}async saveCatalogUrls(){await ct.set(sl,this.catalogUrls),F(ol,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(t){if(!this.isValidUrl(t))throw new Error(`Invalid catalog URL: ${t}`);if(this.catalogUrls.includes(t)){Xt.debug(`Catalog URL already exists: ${t}`);return}this.catalogUrls.push(t),await this.saveCatalogUrls(),Xt.debug(`Added catalog URL: ${t}`);try{await this.refreshCatalogs()}catch(i){Xt.warn(`Failed to refresh catalogs immediately after adding: ${i}`)}}async addCatalogUrls(t){let i=0;for(const r of t){if(!this.isValidUrl(r)){Xt.warn(`Skipping invalid catalog URL: ${r}`);continue}this.catalogUrls.includes(r)||(this.catalogUrls.push(r),Xt.debug(`Added catalog URL: ${r}`),i++)}if(i!==0){await this.saveCatalogUrls();try{await this.refreshCatalogs()}catch(r){Xt.warn(`Failed to refresh catalogs after adding URLs: ${r}`)}}}async removeCatalogUrl(t){const i=this.catalogUrls.indexOf(t);i!==-1&&(this.catalogUrls.splice(i,1),await this.saveCatalogUrls(),Xt.info(`Removed catalog URL: ${t}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(t){try{const i=new URL(t);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}async fetchCatalog(t){const i=this.loadingPromises.get(t);if(i)return i;const r=(async()=>{try{const o=await fetch(t,{method:"GET",headers:{Accept:"application/json"}});if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);const s=await o.json();if(!s.extensions||!Array.isArray(s.extensions))throw new Error("Invalid catalog format: extensions array is required");return{name:s.name,description:s.description,extensions:s.extensions||[]}}catch(o){throw Xt.error(`Failed to fetch catalog from ${t}: ${o}`),o}finally{this.loadingPromises.delete(t)}})();return this.loadingPromises.set(t,r),r}async refreshCatalogs(){const t=this.catalogUrls.map(o=>this.fetchCatalog(o).catch(s=>(Xt.warn(`Failed to refresh catalog ${o}: ${s.message}`),null))),i=await Promise.allSettled(t);let r=0;i.forEach(o=>{if(o.status==="fulfilled"&&o.value){const s=o.value;s.extensions&&s.extensions.forEach(a=>{if(!st.getExtensions().find(l=>l.id===a.id)){const l={...a,external:!0};st.registerExtension(l),r++}})}}),Xt.debug(`Refreshed ${this.catalogUrls.length} catalogs, ${r} extensions registered`),r>0&&Xt.info(`Marketplace: ${r} new extension(s) available`),F(ol,{type:"refreshed"})}getMarketplaceExtension(t){const i=st.getExtensions().find(r=>r.id===t);if(i&&i.external)return i}isMarketplaceExtension(t){const i=st.getExtensions().find(r=>r.id===t);return i!==void 0&&i.external===!0}}const Cc=new ep;$t.put("marketplaceRegistry",Cc);var al={name:"@eclipse-lyra/app",version:"0.0.0",description:"Default app template built on Appspace. Use as a starting point for downstream applications.",dependencies:{"@eclipse-lyra/core":"0.0.0","@eclipse-lyra/extension-ai-system":"0.0.0","@eclipse-lyra/extension-command-palette":"0.0.0","@eclipse-lyra/extension-command-shell":"0.0.0","@eclipse-lyra/extension-dataviewer":"0.0.0","@eclipse-lyra/extension-sqleditor":"0.0.0","@eclipse-lyra/extension-duckdb":"0.0.0","@eclipse-lyra/extension-pglite":"0.0.0","@eclipse-lyra/extension-github-service":"0.0.0","@eclipse-lyra/extension-howto-system":"0.0.0","@eclipse-lyra/extension-in-browser-ml":"0.0.0","@eclipse-lyra/extension-linuxterminal":"0.0.0","@eclipse-lyra/extension-md-editor":"0.0.0","@eclipse-lyra/extension-media-viewer":"0.0.0","@eclipse-lyra/extension-memory-usage":"0.0.0","@eclipse-lyra/extension-monaco-editor":"0.0.0","@eclipse-lyra/extension-notebook":"0.0.0","@eclipse-lyra/extension-python-runtime":"0.0.0","@eclipse-lyra/extension-rag-system":"0.0.0","@eclipse-lyra/extension-settings-tree":"0.0.0","@eclipse-lyra/extension-utils":"0.0.0","@eclipse-lyra/extension-webdav":"0.0.0","@eclipse-lyra/extension-webllm":"0.0.0","@eclipse-lyra/extension-webmcp":"0.0.0","pace-js":"1.2.4"},marketplaceCatalogUrls:["https://raw.githubusercontent.com/kispace-io/appspace-marketplace/main/catalogs/extensions.json","https://raw.githubusercontent.com/kispace-io/appspace-marketplace/main/catalogs/apps.json"]};const M=Je("AppLoader");function nl(e){if(!e)return"standard";const t=e.layout??e.layoutId;return typeof t=="object"?t.id:t??"standard"}function ip(e){const t={};for(const[i,r]of Object.entries(e))t[i]=typeof r=="boolean"?r?"true":"false":r;return t}function qe(e){return e instanceof Error?e.message:String(e)}function rp(e){try{const i=new URL(e).pathname.split("/").filter(Boolean);return i.length>0?i[i.length-1]:void 0}catch{const t=e.split("/").filter(Boolean);return t.length>0?t[t.length-1]:void 0}}function op(){const t=window.location.pathname.split("/").filter(Boolean);if(t.length===0)return;const i=t[0];if(!(!i||i==="index.html"||i.endsWith(".html")))return i}const ii=class ii{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(t,i){if(i?.hostConfig===!0&&typeof al<"u"){const r=al;t.name===void 0&&(t.name=r.name),t.version===void 0&&(t.version=r.version),t.description===void 0&&(t.description=r.description),t.dependencies===void 0&&(t.dependencies=r.dependencies),t.marketplaceCatalogUrls===void 0&&(t.marketplaceCatalogUrls=r.marketplaceCatalogUrls)}t.name=t.name??"app",t.version=t.version??"0.0.0",this.apps.has(t.name)&&M.warn(`App '${t.name}' is already registered. Overwriting.`),t.marketplaceCatalogUrls?.length&&Cc.addCatalogUrls(t.marketplaceCatalogUrls).catch(()=>{}),this.apps.set(t.name,t),i?.defaultAppName&&(this.defaultAppName=i.defaultAppName),i?.container&&(this.container=i.container),i?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(t){this.systemRequiredExtensions.add(t)}async loadAppFromUrl(t){M.info(`Loading app from URL: ${t}...`);try{const i=await import(t);if(!i.default)throw new Error(`Module at ${t} does not have a default export`);const r=i.default;if(!r.name||!r.version)throw new Error(`Module at ${t} does not export a valid AppDefinition (name and version required)`);return M.info(`Successfully loaded app definition from URL: ${r.name}`),r}catch(i){throw M.error(`Failed to load app from URL ${t}: ${qe(i)}`),i}}async start(){if(this.started){M.debug("AppLoader already started");return}this.started=!0;const t=new URLSearchParams(window.location.search),i=t.get("app"),r=t.get("appId"),o=op(),s=this.apps.size;let a;if(i&&(a=rp(i),a&&M.info(`Extracted app ID from URL path: ${a}`)),o&&M.info(`Extracted app ID from current page path: ${o}`),i)try{M.info(`URL parameter 'app' found: ${i}, attempting to load extension or app`);try{await st.loadExtensionFromUrl(i),M.info(`Successfully loaded extension from URL: ${i}`)}catch(c){M.info(`Failed to load as extension, trying as app definition: ${qe(c)}`);try{const h=await this.loadAppFromUrl(i);if(this.registerApp(h),!h.name)throw new Error("App from URL has no name after registration");await this.loadApp(h.name,this.container),M.info(`Successfully loaded app from URL: ${i}`);return}catch(h){throw M.error(`Failed to load from URL as both extension and app: ${qe(h)}`),h}}}catch(c){M.error(`Failed to load from URL parameter, falling back to default app: ${qe(c)}`)}const l=await this.selectAppToLoad({appIdFromUrl:r,appIdFromPath:o,appIdFromAppUrl:a,appsBeforeExtension:s});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}findAppNameBySegment(t){if(this.apps.has(t))return t;for(const i of this.apps.values())if(i.path===t||i.name&&i.name.endsWith("/"+t))return i.name??void 0}async loadApp(t,i){const r=this.apps.get(t);if(!r)throw new Error(`App '${t}' not found. Make sure it's registered.`);if(this.currentApp&&(M.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(M.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{st.disable(s)}))),Ho.applyAppNameRemaps(r.remaps),r.remaps?.length){const s=new Set;for(const a of r.remaps)for(const l of a.targets)s.add(l);for(const a of s){const l=H.getContributions(a);F(we,{target:a,contributions:l})}}r.contributions&&(M.info("Registering app contributions..."),r.contributions.ui&&(r.contributions.ui.forEach(s=>{const a=s.target;a&&H.registerContribution(a,s)}),M.info(`Registered ${r.contributions.ui.length} UI contributions`)),r.contributions.extensions&&(r.contributions.extensions.forEach(s=>{st.registerExtension(s)}),M.info(`Registered ${r.contributions.extensions.length} app extensions`)));const o=new Set(r.extensions||[]);this.systemRequiredExtensions.forEach(s=>o.add(s)),r.extensions=Array.from(o),await st.loadEnabledExtensions(),r.extensions.length>0&&r.extensions.forEach(s=>{st.enable(s)}),r.initialize&&(M.info(`Initializing ${r.name}...`),await r.initialize()),this.currentApp=r,M.info(`App ${r.name} loaded successfully`),this.preferredLayoutId=await this.getPreferredLayoutId(),this.updateDocumentMetadata(r),i&&this.renderApp(i),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appName:r.name}}))}updateDocumentMetadata(t){if(document.title=t.name??"",t.metadata?.favicon){const i=t.metadata.favicon;let r=document.querySelector("link[rel*='icon']");r||(r=document.createElement("link"),r.rel="icon",document.head.appendChild(r)),r.type="image/svg+xml",r.href=i}}renderApp(t){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const i=this.preferredLayoutId??nl(this.currentApp),r=H.getContributions(Fo);let o=r.find(c=>c.id===i);if(o||(M.warn(`Layout '${i}' not found, falling back to 'standard'`),o=r.find(c=>c.id==="standard")),!o)throw new Error(`No layout found for layoutId '${i}' and no 'standard' layout registered.`);const s=o.component;let a={};s&&typeof s=="object"&&"tag"in s&&s.attributes&&(a={...s.attributes});const l=this.currentApp?.layout;if(typeof l=="object"&&l.id===i&&l.props&&Object.assign(a,ip(l.props)),t.innerHTML="",typeof s=="string"){const c=document.createElement(s);for(const[h,u]of Object.entries(a))c.setAttribute(h,u);t.appendChild(c)}else if(s&&typeof s=="object"&&"tag"in s){const c=document.createElement(s.tag);for(const[h,u]of Object.entries(a))c.setAttribute(h,u);t.appendChild(c)}else if(typeof s=="function")ae(s(),t);else throw new Error(`Layout '${o.id}' has invalid component.`);o.onShow&&requestAnimationFrame(()=>{Promise.resolve(o.onShow()).catch(c=>M.error(`Layout onShow failed for '${o.id}': ${qe(c)}`))})}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await ct.get(ii.PREFERRED_APP_KEY)}catch(t){M.debug(`Failed to get preferred app ID from settings: ${qe(t)}`);return}}async setPreferredAppId(t){if(!this.apps.has(t))throw new Error(`App '${t}' not found. Make sure it's registered.`);try{await ct.set(ii.PREFERRED_APP_KEY,t),this.defaultAppName=t,M.info(`Set preferred app to: ${t}`)}catch(i){throw M.error(`Failed to persist preferred app: ${qe(i)}`),i}}getRegisteredLayouts(){return H.getContributions(Fo)}getCurrentLayoutId(){return this.preferredLayoutId??nl(this.currentApp)}async getPreferredLayoutId(){try{return await ct.get(ii.PREFERRED_LAYOUT_KEY)}catch(t){M.debug(`Failed to get preferred layout ID: ${qe(t)}`);return}}async setPreferredLayoutId(t){if(!this.getRegisteredLayouts().some(r=>r.id===t))throw new Error(`Layout '${t}' not found.`);try{await ct.set(ii.PREFERRED_LAYOUT_KEY,t),this.preferredLayoutId=t,M.info(`Set preferred layout to: ${t}`),this.currentApp&&this.container&&this.renderApp(this.container),window.dispatchEvent(new CustomEvent("layout-changed",{detail:{layoutId:t}}))}catch(r){throw M.error(`Failed to persist preferred layout: ${qe(r)}`),r}}async selectAppToLoad(t){const{appIdFromUrl:i,appIdFromPath:r,appIdFromAppUrl:o,appsBeforeExtension:s}=t;if(i){const c=this.findAppNameBySegment(i)??i;if(this.apps.has(c))return M.info(`Loading app specified by URL parameter 'appId': ${c}`),c;M.warn(`App '${i}' from URL parameter not found`)}if(r){const c=this.findAppNameBySegment(r);if(c)return M.info(`Loading app from URL path: ${r}`),c;M.debug(`App for path '${r}' not found, continuing search`)}if(o){const c=this.findAppNameBySegment(o)??o;if(this.apps.has(c))return M.info(`Loading app using segment from app URL path: ${c}`),c}if(this.apps.size>s){const c=Array.from(this.apps.values()).slice(s);if(c.length>0){const h=c[0];return M.info(`Loading app registered by extension: ${h.name}`),h.name}}const a=await this.getPreferredAppId();if(a&&this.apps.has(a))return M.info(`Loading preferred app from settings: ${a}`),a;if(this.defaultAppName&&this.apps.has(this.defaultAppName))return this.defaultAppName;this.defaultAppName&&M.warn(`Default app '${this.defaultAppName}' not found`);const l=this.getRegisteredApps();if(l.length>0)return l[0].name}};ii.PREFERRED_APP_KEY="preferredAppName",ii.PREFERRED_LAYOUT_KEY="preferredLayoutId";let wa=ii;const ai=new wa;$t.put("appLoaderService",ai);var sp=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,ho=(e,t,i,r)=>{for(var o=r>1?void 0:r?ap(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&sp(t,i,o),o};let Ni=class extends Ke{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(e){super.firstUpdated(e),this.inputValue=this.defaultValue,await this.updateComplete;const t=this.shadowRoot?.querySelector("wa-input");if(t){const i=t.shadowRoot?.querySelector("input");i&&(i.focus(),i.select())}}getResult(){return this.inputValue}handleInput(e){this.inputValue=e.target.value}handleKeyDown(e){e.key==="Enter"?(e.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):e.key==="Escape"&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};Ni.styles=[...Ke.styles,C`
            wa-input {
                width: 100%;
            }
        `];ho([d({type:String})],Ni.prototype,"message",2);ho([d({type:String,attribute:"default-value"})],Ni.prototype,"defaultValue",2);ho([d({type:Boolean})],Ni.prototype,"markdown",2);ho([w()],Ni.prototype,"inputValue",2);Ni=ho([v("lyra-prompt-dialog-content")],Ni);H.registerContribution(dr,{id:"prompt",label:"Input",buttons:[ws,vc],component:e=>e?p`
            <lyra-prompt-dialog-content 
                .message="${e.message}"
                .defaultValue="${e.defaultValue}"
                .markdown="${e.markdown}"
            ></lyra-prompt-dialog-content>
        `:p`<div>Error: No prompt dialog state</div>`,onButton:async(e,t,i)=>(i&&(e==="ok"?i.resolve(t||""):i.resolve(null)),!0)});async function np(e,t="",i=!1){return new Promise(r=>{sn.open("prompt",{message:e,defaultValue:t,markdown:i,resolve:r})})}var lp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,ln=(e,t,i,r)=>{for(var o=r>1?void 0:r?cp(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&lp(t,i,o),o};let Xo=class extends Ke{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};ln([d({type:String})],Xo.prototype,"message",2);ln([d({type:Boolean})],Xo.prototype,"markdown",2);Xo=ln([v("lyra-info-dialog-content")],Xo);H.registerContribution(dr,{id:"info",label:"Information",buttons:[ws],component:e=>e?p`
            <lyra-info-dialog-content 
                .message="${e.message}"
                .markdown="${e.markdown}"
            ></lyra-info-dialog-content>
        `:p`<div>Error: No info dialog state</div>`,onButton:async(e,t,i)=>(i&&i.resolve&&i.resolve(),!0)});var dp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,cn=(e,t,i,r)=>{for(var o=r>1?void 0:r?hp(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&dp(t,i,o),o};let Yo=class extends Ke{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};cn([d({type:String})],Yo.prototype,"message",2);cn([d({type:Boolean})],Yo.prototype,"markdown",2);Yo=cn([v("lyra-confirm-dialog-content")],Yo);H.registerContribution(dr,{id:"confirm",label:"Confirm",buttons:[ws,vc],component:e=>e?p`
            <lyra-confirm-dialog-content 
                .message="${e.message}"
                .markdown="${e.markdown}"
            ></lyra-confirm-dialog-content>
        `:p`<div>Error: No confirm dialog state</div>`,onButton:async(e,t,i)=>(i&&(e==="ok"?i.resolve(!0):i.resolve(!1)),!0)});async function $c(e,t=!1){return new Promise(i=>{sn.open("confirm",{message:e,markdown:t,resolve:i})})}var up=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,Ki=(e,t,i,r)=>{for(var o=r>1?void 0:r?pp(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&up(t,i,o),o};let Ge=class extends Ke{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(e){super.firstUpdated(e),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const t=this.closest("wa-dialog");t&&(this.dialogElement=t,this.updateDialogLabel());const i=this.closest(".dialog-service-content");if(i){const r=i.parentElement?.querySelector(".dialog-service-footer");r&&(r.style.display="none")}}updated(e){super.updated(e),e.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),e.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(e,t,i){this.currentTitle=e,this.currentMessage=t,this.actions=[...i],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(e){e.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const e=this.actions.filter(i=>i.label!=="Close"),t=this.actions.filter(i=>i.label==="Close");return p`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${e.map(i=>p`
                            <wa-button 
                                variant="${i.variant||"default"}"
                                ?disabled=${i.disabled}
                                @click=${()=>this.handleActionClick(i)}
                            >
                                ${i.label}
                            </wa-button>
                        `)}
                    </div>
                    <div class="dialog-actions-right">
                        ${t.map(i=>p`
                            <wa-button 
                                variant="${i.variant||"primary"}"
                                @click=${()=>{this.handleActionClick(i),this.handleClose()}}
                            >
                                ${i.label}
                            </wa-button>
                        `)}
                    </div>
                </div>
            </div>
        `}};Ge.styles=[...Ke.styles,C`
            :host {
                display: block;
            }

            :host-context(.dialog-service-content) {
                padding: 0;
            }
            
            .dialog-content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                min-width: 400px;
                max-width: 600px;
                height: 500px;
                padding: 1rem;
            }
            
            .dialog-scroller {
                flex: 1;
                overflow-y: auto;
            }
            
            .dialog-actions {
                display: flex;
                gap: 0.5rem;
                justify-content: space-between;
                margin-top: 0.5rem;
            }
            
            .dialog-actions-left,
            .dialog-actions-right {
                display: flex;
                gap: 0.5rem;
            }
        `];Ki([d({type:String})],Ge.prototype,"title",2);Ki([d({type:String})],Ge.prototype,"message",2);Ki([d({type:Boolean})],Ge.prototype,"markdown",2);Ki([w()],Ge.prototype,"actions",2);Ki([w()],Ge.prototype,"currentTitle",2);Ki([w()],Ge.prototype,"currentMessage",2);Ge=Ki([v("lyra-navigable-info-dialog-content")],Ge);H.registerContribution(dr,{id:"navigable-info",label:"Information",buttons:[Pu],component:e=>{if(!e)return p`<div>Error: No navigable info dialog state</div>`;const t=p`
            <lyra-navigable-info-dialog-content 
                .title="${e.title}"
                .message="${e.message}"
                .markdown="${e.markdown}"
            ></lyra-navigable-info-dialog-content>
        `;return(async()=>{const i=document.querySelector("lyra-navigable-info-dialog-content");i&&(await i.updateComplete,i.actions=e.actions||[],i.resolveCallback=e.resolve,e.updateDialogRef&&(e.updateDialogRef.current=(r,o,s)=>{i.updateDialog(r,o,s)}))})(),t},onButton:async(e,t,i)=>i&&e==="close"&&i.resolve?(i.resolve(),!0):!1});const fp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",mp="/assets/jupyter-C78Cpfql.svg",gp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='4'%20y='3'%20width='12'%20height='8'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2'%20y1='20'%20x2='18'%20y2='20'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='20'%20y1='2'%20x2='20'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",bp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='10'%20y='4'%20width='12'%20height='16'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='9'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='2.5'%20y1='15'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",wp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='8'%20y='4'%20width='8'%20height='8'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='21.5'%20y1='2'%20x2='21.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='6'%20y1='20'%20x2='18'%20y2='20'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",vp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20aria-hidden='true'%3e%3crect%20x='8'%20y='4'%20width='8'%20height='16'%20rx='1.25'%20ry='1.25'%20fill='none'%20stroke='currentColor'%20stroke-width='1.25'%20stroke-linejoin='round'/%3e%3cline%20x1='2.5'%20y1='2'%20x2='2.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cline%20x1='21.5'%20y1='2'%20x2='21.5'%20y2='22'%20stroke='%233b82f6'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",yp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";var sr=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var dn=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};const va=new Set,or=new Map;let zi,hn="ltr",un="en";const Sc=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Sc){const e=new MutationObserver(Ac);hn=document.documentElement.dir||"ltr",un=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ec(...e){e.map(t=>{const i=t.$code.toLowerCase();or.has(i)?or.set(i,Object.assign(Object.assign({},or.get(i)),t)):or.set(i,t),zi||(zi=t)}),Ac()}function Ac(){Sc&&(hn=document.documentElement.dir||"ltr",un=document.documentElement.lang||navigator.language),[...va.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let xp=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){va.add(this.host)}hostDisconnected(){va.delete(this.host)}dir(){return`${this.host.dir||hn}`.toLowerCase()}lang(){return`${this.host.lang||un}`.toLowerCase()}getTranslationData(t){var i,r;const o=new Intl.Locale(t.replace(/_/g,"-")),s=o?.language.toLowerCase(),a=(r=(i=o?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&r!==void 0?r:"",l=or.get(`${s}-${a}`),c=or.get(s);return{locale:o,language:s,region:a,primary:l,secondary:c}}exists(t,i){var r;const{primary:o,secondary:s}=this.getTranslationData((r=i.lang)!==null&&r!==void 0?r:this.lang());return i=Object.assign({includeFallback:!1},i),!!(o&&o[t]||s&&s[t]||i.includeFallback&&zi&&zi[t])}term(t,...i){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let s;if(r&&r[t])s=r[t];else if(o&&o[t])s=o[t];else if(zi&&zi[t])s=zi[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...i):s}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,i)}};var Lc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};Ec(Lc);var kp=Lc;var W=class extends xp{};Ec(kp);var Cp=C`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: calc(var(--icon-size) * 0.75);
    background: none;
    border: solid var(--wa-border-width-s) currentColor;
    background-color: rgb(0 0 0 / 50%);
    border-radius: var(--wa-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: opacity var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host([play]:hover) .control-box {
      opacity: 1;
    }
  }

  :where(:host([play]:not(:hover))) .control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }

  /* Show control box on keyboard focus */
  .animated-image {
    &:focus {
      outline: none;
    }

    &:focus-visible .control-box {
      opacity: 1;
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }
`;function k(e,t){const i={waitUntilFirstUpdate:!1,...t};return(r,o)=>{const{update:s}=r,a=Array.isArray(e)?e:[e];r.update=function(l){a.forEach(c=>{const h=c;if(l.has(h)){const u=l.get(h),f=this[h];u!==f&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](u,f)}}),s.call(this,l)}}}var $p=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,_c=e=>{throw TypeError(e)},n=(e,t,i,r)=>{for(var o=r>1?void 0:r?Sp(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&$p(t,i,o),o},Tc=(e,t,i)=>t.has(e)||_c("Cannot "+i),Ep=(e,t,i)=>(Tc(e,t,"read from private field"),t.get(e)),Ap=(e,t,i)=>t.has(e)?_c("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Lp=(e,t,i,r)=>(Tc(e,t,"write to private field"),t.set(e,i),i);var _p=C`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }

  [hidden] {
    display: none !important;
  }
`,Io,z=class extends Oi{constructor(){super(),Ap(this,Io,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,i)=>{if(this.internals?.states)try{i?this.internals.states.add(t):this.internals.states.delete(t)}catch(r){if(String(r).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw r}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,i]of e.elementProperties)i.default==="inherit"&&i.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${i.initial}`,!0)}static get styles(){const e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[_p,...e]}attributeChangedCallback(e,t,i){Ep(this,Io)||(this.constructor.elementProperties.forEach((r,o)=>{r.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),Lp(this,Io,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&this[i]==null&&(this[i]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){const i=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});i.error=t,this.dispatchEvent(i)}throw t}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};Io=new WeakMap;n([d()],z.prototype,"dir",2);n([d()],z.prototype,"lang",2);n([d({type:Boolean,reflect:!0,attribute:"did-ssr"})],z.prototype,"didSSR",2);const zc="important",Tp=" !"+zc,rt=Sr(class extends Er{constructor(e){if(super(e),e.type!==me.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const r=e[i];return r==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?i.removeProperty(r):i[r]=null);for(const r in t){const o=t[r];if(o!=null){this.ft.add(r);const s=typeof o=="string"&&o.endsWith(Tp);r.includes("-")||s?i.setProperty(r,s?o.slice(0,-11):o,s?zc:""):i[r]=o}}return Ft}});var ve=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.play=!this.play)}handleLoad(){const e=document.createElement("canvas"),{width:t,height:i}=this.animatedImage;e.width=t,e.height=i,e.getContext("2d").drawImage(this.animatedImage,0,0,t,i),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new dn),this.isLoaded=!0)}handleError(){this.dispatchEvent(new sr)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const t=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return p`
      <div
        class="animated-image"
        tabindex="0"
        role="button"
        aria-pressed=${this.play?"true":"false"}
        aria-label=${t}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <img
          class="animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          role="presentation"
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?p`
              <img
                class="frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                role="presentation"
              />

              <div part="control-box" class="control-box" aria-hidden="true">
                <slot name="play-icon">
                  <wa-icon
                    name="play"
                    library="system"
                    variant="solid"
                    class="default"
                    style=${rt({"margin-inline-start":"3px"})}
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};ve.css=Cp;n([x(".animated")],ve.prototype,"animatedImage",2);n([w()],ve.prototype,"frozenFrame",2);n([w()],ve.prototype,"isLoaded",2);n([d()],ve.prototype,"src",2);n([d()],ve.prototype,"alt",2);n([d({type:Boolean,reflect:!0})],ve.prototype,"play",2);n([k("play",{waitUntilFirstUpdate:!0})],ve.prototype,"handlePlayChange",1);n([k("src")],ve.prototype,"handleSrcChange",1);ve=n([v("wa-animated-image")],ve);var zp=C`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* Animations */
  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin-pulse;
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  /* Keyframes */
  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']) {
      animation: none !important;
      transition: none !important;
    }
  }
  @keyframes beat {
    0%,
    90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--beat-scale, 1.25));
    }
  }

  @keyframes fade {
    50% {
      opacity: var(--fade-opacity, 0.4);
    }
  }

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.125));
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(var(--bounce-start-scale-x, 1.1), var(--bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      transform: scale(var(--bounce-jump-scale-x, 0.9), var(--bounce-jump-scale-y, 1.1))
        translateY(var(--bounce-height, -0.5em));
    }
    50% {
      transform: scale(var(--bounce-land-scale-x, 1.05), var(--bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--bounce-rebound, -0.125em));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes flip {
    50% {
      transform: rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -180deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(-15deg);
    }
    4% {
      transform: rotate(15deg);
    }
    8%,
    24% {
      transform: rotate(-18deg);
    }
    12%,
    28% {
      transform: rotate(18deg);
    }
    16% {
      transform: rotate(-22deg);
    }
    20% {
      transform: rotate(22deg);
    }
    32% {
      transform: rotate(-12deg);
    }
    36% {
      transform: rotate(12deg);
    }
    40%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-pulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function Rp(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var qs={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},Dp={name:"system",resolver:(e,t="classic",i="solid")=>{let o=qs[i][e]??qs.regular[e]??qs.regular["circle-question"];return o?Rp(o):""}},Op=Dp;var ya="",xa="";function ll(e){ya=e}function Ip(e=""){if(!ya){const t=document.querySelector("[data-webawesome]");if(t?.hasAttribute("data-webawesome")){const i=new URL(t.getAttribute("data-webawesome")??"",window.location.href).pathname;ll(i)}else{const r=[...document.getElementsByTagName("script")].find(o=>o.src.endsWith("webawesome.js")||o.src.endsWith("webawesome.loader.js")||o.src.endsWith("webawesome.ssr-loader.js"));if(r){const o=String(r.getAttribute("src"));ll(o.split("/").slice(0,-1).join("/"))}}}return ya.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}function Pp(e){xa=e}function Mp(){if(!xa){const e=document.querySelector("[data-fa-kit-code]");e&&Pp(e.getAttribute("data-fa-kit-code")||"")}return xa}var cl="7.1.0";function Np(e,t,i){const r=Mp(),o=r.length>0;let s="solid";return t==="notdog"&&(i==="solid"&&(s="notdog-solid"),i==="duo-solid"&&(s="notdog-duo-solid")),t==="notdog-duo"&&(s="notdog-duo-solid"),t==="chisel"&&(s="chisel-regular"),t==="etch"&&(s="etch-solid"),t==="jelly"&&(s="jelly-regular",i==="duo-regular"&&(s="jelly-duo-regular"),i==="fill-regular"&&(s="jelly-fill-regular")),t==="jelly-duo"&&(s="jelly-duo-regular"),t==="jelly-fill"&&(s="jelly-fill-regular"),t==="slab"&&((i==="solid"||i==="regular")&&(s="slab-regular"),i==="press-regular"&&(s="slab-press-regular")),t==="slab-press"&&(s="slab-press-regular"),t==="thumbprint"&&(s="thumbprint-light"),t==="whiteboard"&&(s="whiteboard-semibold"),t==="utility"&&(s="utility-semibold"),t==="utility-duo"&&(s="utility-duo-semibold"),t==="utility-fill"&&(s="utility-fill-semibold"),t==="classic"&&(i==="thin"&&(s="thin"),i==="light"&&(s="light"),i==="regular"&&(s="regular"),i==="solid"&&(s="solid")),t==="sharp"&&(i==="thin"&&(s="sharp-thin"),i==="light"&&(s="sharp-light"),i==="regular"&&(s="sharp-regular"),i==="solid"&&(s="sharp-solid")),t==="duotone"&&(i==="thin"&&(s="duotone-thin"),i==="light"&&(s="duotone-light"),i==="regular"&&(s="duotone-regular"),i==="solid"&&(s="duotone")),t==="sharp-duotone"&&(i==="thin"&&(s="sharp-duotone-thin"),i==="light"&&(s="sharp-duotone-light"),i==="regular"&&(s="sharp-duotone-regular"),i==="solid"&&(s="sharp-duotone-solid")),t==="brands"&&(s="brands"),o?`https://ka-p.fontawesome.com/releases/v${cl}/svgs/${s}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${cl}/svgs/${s}/${e}.svg`}var Fp={name:"default",resolver:(e,t="classic",i="solid")=>Np(e,t,i),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute("data-duotone-initialized")){const{family:i,variant:r}=t;if(i==="duotone"||i==="sharp-duotone"||i==="notdog-duo"||i==="notdog"&&r==="duo-solid"||i==="jelly-duo"||i==="jelly"&&r==="duo-regular"||i==="utility-duo"||i==="thumbprint"){const o=[...e.querySelectorAll("path")],s=o.find(l=>!l.hasAttribute("opacity")),a=o.find(l=>l.hasAttribute("opacity"));if(!s||!a)return;if(s.setAttribute("data-duotone-primary",""),a.setAttribute("data-duotone-secondary",""),t.swapOpacity&&s&&a){const l=a.getAttribute("opacity")||"0.4";s.style.setProperty("--path-opacity",l),a.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},Bp=Fp;var Up="classic",Zo=[Bp,Op],Qo=[];function Vp(e){Qo.push(e)}function qp(e){Qo=Qo.filter(t=>t!==e)}function Hs(e){return Zo.find(t=>t.name===e)}function Hp(e,t){Wp(e),Zo.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),Qo.forEach(i=>{i.library===e&&i.setIcon()})}function Wp(e){Zo=Zo.filter(t=>t.name!==e)}function jp(){return Up}var Mr=Symbol(),yo=Symbol(),Ws,js=new Map,yt=class extends z{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(e,t)=>{let i;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=p`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(r,this),this.svg}try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Mr:yo}catch{return yo}try{const r=document.createElement("div");r.innerHTML=await i.text();const o=r.firstElementChild;if(o?.tagName?.toLowerCase()!=="svg")return Mr;Ws||(Ws=new DOMParser);const a=Ws.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Mr}catch{return Mr}}}connectedCallback(){super.connectedCallback(),Vp(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),qp(this)}getIconSource(){const e=Hs(this.library),t=this.family||jp();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:e,fromLibrary:t}=this.getIconSource(),i=t?Hs(this.library):void 0;if(!e){this.svg=null;return}let r=js.get(e);r||(r=this.resolveIcon(e,i),js.set(e,r));const o=await r;if(o===yo&&js.delete(e),e===this.getIconSource().url){if(Sh(o)){this.svg=o;return}switch(o){case yo:case Mr:this.svg=null,this.dispatchEvent(new sr);break;default:this.svg=o.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new dn)}}}updated(e){super.updated(e);const t=Hs(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);const i=this.shadowRoot?.querySelector("svg");i&&t?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:p`<svg part="svg" width="16" height="16"></svg>`}};yt.css=zp;n([w()],yt.prototype,"svg",2);n([d({reflect:!0})],yt.prototype,"name",2);n([d({reflect:!0})],yt.prototype,"family",2);n([d({reflect:!0})],yt.prototype,"variant",2);n([d({attribute:"auto-width",type:Boolean,reflect:!0})],yt.prototype,"autoWidth",2);n([d({attribute:"swap-opacity",type:Boolean,reflect:!0})],yt.prototype,"swapOpacity",2);n([d()],yt.prototype,"src",2);n([d()],yt.prototype,"label",2);n([d({reflect:!0})],yt.prototype,"library",2);n([d({type:Number,reflect:!0})],yt.prototype,"rotate",2);n([d({type:String,reflect:!0})],yt.prototype,"flip",2);n([d({type:String,reflect:!0})],yt.prototype,"animation",2);n([k("label")],yt.prototype,"handleLabelChange",1);n([k(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],yt.prototype,"setIcon",1);yt=n([v("wa-icon")],yt);var dl=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}};var Kp=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}};var Gp=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}};var Xp=C`
  :host {
    display: contents;
  }
`;const Yp=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Zp=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Qp=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Jp=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],tf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ef=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],rf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],of=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],sf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],af=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],nf=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],lf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],cf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],df=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],hf=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],uf=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],pf=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],ff=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],mf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],gf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],bf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],wf=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],vf=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],yf=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],xf=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],kf=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Cf=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],$f=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Sf=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Ef=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Af=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Lf=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],_f=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Tf=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],zf=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Rf=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Df=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Of=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],If=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Pf=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Mf=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Nf=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ff=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Bf=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Uf=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Vf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],qf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Hf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Wf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],jf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Kf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Gf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Xf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Yf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Zf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Qf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Jf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],tm=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],em=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],im=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],rm=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],om=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],sm=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],am=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],nm=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],lm=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],cm=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],dm=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],hm=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],um=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],pm=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],fm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],mm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],gm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],bm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],wm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],vm=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ym=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],xm=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],km=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],$m=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Sm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Em=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Am=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Lm=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],_m=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Tm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],zm=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Rm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Dm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Om=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Im=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Pm=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Mm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Nm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Fm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Bm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Rc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Um=Object.freeze(Object.defineProperty({__proto__:null,backInDown:df,backInLeft:hf,backInRight:uf,backInUp:pf,backOutDown:ff,backOutLeft:mf,backOutRight:gf,backOutUp:bf,bounce:Yp,bounceIn:wf,bounceInDown:vf,bounceInLeft:yf,bounceInRight:xf,bounceInUp:kf,bounceOut:Cf,bounceOutDown:$f,bounceOutLeft:Sf,bounceOutRight:Ef,bounceOutUp:Af,easings:Rc,fadeIn:Lf,fadeInBottomLeft:_f,fadeInBottomRight:Tf,fadeInDown:zf,fadeInDownBig:Rf,fadeInLeft:Df,fadeInLeftBig:Of,fadeInRight:If,fadeInRightBig:Pf,fadeInTopLeft:Mf,fadeInTopRight:Nf,fadeInUp:Ff,fadeInUpBig:Bf,fadeOut:Uf,fadeOutBottomLeft:Vf,fadeOutBottomRight:qf,fadeOutDown:Hf,fadeOutDownBig:Wf,fadeOutLeft:jf,fadeOutLeftBig:Kf,fadeOutRight:Gf,fadeOutRightBig:Xf,fadeOutTopLeft:Yf,fadeOutTopRight:Zf,fadeOutUp:Qf,fadeOutUpBig:Jf,flash:Zp,flip:tm,flipInX:em,flipInY:im,flipOutX:rm,flipOutY:om,headShake:Qp,heartBeat:Jp,hinge:Am,jackInTheBox:Lm,jello:tf,lightSpeedInLeft:sm,lightSpeedInRight:am,lightSpeedOutLeft:nm,lightSpeedOutRight:lm,pulse:ef,rollIn:_m,rollOut:Tm,rotateIn:cm,rotateInDownLeft:dm,rotateInDownRight:hm,rotateInUpLeft:um,rotateInUpRight:pm,rotateOut:fm,rotateOutDownLeft:mm,rotateOutDownRight:gm,rotateOutUpLeft:bm,rotateOutUpRight:wm,rubberBand:rf,shake:of,shakeX:sf,shakeY:af,slideInDown:vm,slideInLeft:ym,slideInRight:xm,slideInUp:km,slideOutDown:Cm,slideOutLeft:$m,slideOutRight:Sm,slideOutUp:Em,swing:nf,tada:lf,wobble:cf,zoomIn:zm,zoomInDown:Rm,zoomInLeft:Dm,zoomInRight:Om,zoomInUp:Im,zoomOut:Pm,zoomOutDown:Mm,zoomOutLeft:Nm,zoomOutRight:Fm,zoomOutUp:Bm},Symbol.toStringTag,{value:"Module"}));var dt=class extends z{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Kp)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Gp)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const e=Rc[this.easing]??this.easing,t=this.keyframes??Um[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!t?!1:(this.destroyAnimation(),this.animation=r.animate(t,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new dl)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new dl)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};dt.css=Xp;n([Uu("slot")],dt.prototype,"defaultSlot",2);n([d()],dt.prototype,"name",2);n([d({type:Boolean,reflect:!0})],dt.prototype,"play",2);n([d({type:Number})],dt.prototype,"delay",2);n([d()],dt.prototype,"direction",2);n([d({type:Number})],dt.prototype,"duration",2);n([d()],dt.prototype,"easing",2);n([d({attribute:"end-delay",type:Number})],dt.prototype,"endDelay",2);n([d()],dt.prototype,"fill",2);n([d({type:Number})],dt.prototype,"iterations",2);n([d({attribute:"iteration-start",type:Number})],dt.prototype,"iterationStart",2);n([d({attribute:!1})],dt.prototype,"keyframes",2);n([d({attribute:"playback-rate",type:Number})],dt.prototype,"playbackRate",2);n([k(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],dt.prototype,"handleAnimationChange",1);n([k("play")],dt.prototype,"handlePlayChange",1);n([k("playbackRate")],dt.prototype,"handlePlaybackRateChange",1);dt=n([v("wa-animation")],dt);var Vm=C`
  :host {
    --size: 3rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    color: var(--wa-color-neutral-on-normal);
    font: inherit;
    font-size: calc(var(--size) * 0.4);
    vertical-align: middle;
    background-color: var(--wa-color-neutral-fill-normal);
    border-radius: var(--wa-border-radius-circle);
    user-select: none;
    -webkit-user-select: none;
  }

  :host([shape='square']) {
    border-radius: 0;
  }

  :host([shape='rounded']) {
    border-radius: var(--wa-border-radius-m);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: inherit;
  }
`;var Ie=class extends z{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new sr)}render(){const e=p`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let t=p``;return this.initials?t=p`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:t=p`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,p` ${this.image&&!this.hasError?e:t} `}};Ie.css=Vm;n([w()],Ie.prototype,"hasError",2);n([d()],Ie.prototype,"image",2);n([d()],Ie.prototype,"label",2);n([d()],Ie.prototype,"initials",2);n([d()],Ie.prototype,"loading",2);n([d({reflect:!0})],Ie.prototype,"shape",2);n([k("image")],Ie.prototype,"handleImageChange",1);Ie=n([v("wa-avatar")],Ie);var ys=C`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;var qm=C`
  :host {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.375em 0.625em;
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    font-size: max(var(--wa-font-size-2xs), 0.75em);
    font-weight: var(--wa-font-weight-semibold);
    line-height: 1;
    white-space: nowrap;
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
    border-radius: var(--wa-border-radius-s);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

    color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance='filled']) {
    --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
  }

  :host([appearance='accent']) {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
  }

  /* Pill modifier */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }

  /* Pulse attention */
  :host([attention='pulse']) {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  /* Bounce attention */
  :host([attention='bounce']) {
    animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  ::slotted(wa-icon) {
    margin-inline-end: var(--wa-space-2xs, 0.25em);
    opacity: 90%;
    line-height: 1;
    height: 0.85em;
  }
`;var Fi=class extends z{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return p` <slot part="base" role="status"></slot>`}};Fi.css=[ys,qm];n([d({reflect:!0})],Fi.prototype,"variant",2);n([d({reflect:!0})],Fi.prototype,"appearance",2);n([d({type:Boolean,reflect:!0})],Fi.prototype,"pill",2);n([d({reflect:!0})],Fi.prototype,"attention",2);Fi=n([v("wa-badge")],Fi);var Hm=C`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var fr=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="wa-breadcrumb-item");e.forEach((t,i)=>{const r=t.querySelector('[slot="separator"]');r===null?t.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),p`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <wa-icon
            name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"}
            library="system"
            variant="solid"
          ></wa-icon>
        </slot>
      </span>
    `}};fr.css=Hm;n([x("slot")],fr.prototype,"defaultSlot",2);n([x('slot[name="separator"]')],fr.prototype,"separatorSlot",2);n([d()],fr.prototype,"label",2);fr=n([v("wa-breadcrumb")],fr);var Wm=C`
  :host {
    color: var(--wa-color-text-link);
    display: inline-flex;
    align-items: center;
    font: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: var(--wa-line-height-normal);
    white-space: nowrap;
  }

  :host(:last-of-type) {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: inline-block;
    font: inherit;
    text-decoration: none;
    color: currentColor;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:not(:last-of-type)) .label:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:not(:last-of-type)) .label:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .label:focus {
    outline: none;
  }

  .label:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .start,
  .end {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start,
  .end {
    display: inline-flex;
    color: var(--wa-color-text-quiet);
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--wa-space-s);
  }

  ::slotted([slot='end']) {
    margin-inline-start: var(--wa-space-s);
  }

  :host(:last-of-type) .separator {
    display: none;
  }

  .separator {
    color: var(--wa-color-text-quiet);
    display: inline-flex;
    align-items: center;
    margin: 0 var(--wa-space-s);
    user-select: none;
    -webkit-user-select: none;
  }
`;const T=e=>e??R;var Xe=class extends z{constructor(){super(...arguments),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="wa-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return p`
      <span part="start" class="start">
        <slot name="start"></slot>
      </span>

      ${this.renderType==="link"?p`
            <a
              part="label"
              class="label label-link"
              href="${this.href}"
              target="${T(this.target?this.target:void 0)}"
              rel=${T(this.target?this.rel:void 0)}
            >
              <slot></slot>
            </a>
          `:""}
      ${this.renderType==="button"?p`
            <button part="label" type="button" class="label label-button">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </button>
          `:""}
      ${this.renderType==="dropdown"?p`
            <div part="label" class="label label-dropdown">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
          `:""}

      <span part="end" class="end">
        <slot name="end"></slot>
      </span>

      <span part="separator" class="separator" aria-hidden="true">
        <slot name="separator"></slot>
      </span>
    `}};Xe.css=Wm;n([x("slot:not([name])")],Xe.prototype,"defaultSlot",2);n([w()],Xe.prototype,"renderType",2);n([d()],Xe.prototype,"href",2);n([d()],Xe.prototype,"target",2);n([d()],Xe.prototype,"rel",2);n([k("href",{waitUntilFirstUpdate:!0})],Xe.prototype,"hrefChanged",1);Xe=n([v("wa-breadcrumb-item")],Xe);var uo=()=>({checkValidity(e){const t=e.input,i={message:"",isValid:!0,invalidKeys:[]};if(!t)return i;let r=!0;if("checkValidity"in t&&(r=t.checkValidity()),r)return i;if(i.isValid=!1,"validationMessage"in t&&(i.message=t.validationMessage),!("validity"in t))return i.invalidKeys.push("customError"),i;for(const o in t.validity){if(o==="valid")continue;const s=o;t.validity[s]&&i.invalidKeys.push(s)}return i}});var pn=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var jm=()=>({observedAttributes:["custom-error"],checkValidity(e){const t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),J=class extends z{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new pn))},this.handleInteraction=e=>{const t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[jm()]}static get observedAttributes(){const e=new Set(super.observedAttributes||[]);for(const t of this.validators)if(t.observedAttributes)for(const i of t.observedAttributes)e.add(i);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")){const t=this.value;if(Array.isArray(t)){if(this.name){const i=new FormData;for(const r of t)i.append(this.name,r);this.setValue(i,i)}}else this.setValue(t,t)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute("form",e):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){const t=e[0],i=e[1];let r=e[2];r||(r=this.validationTarget),this.internals.setValidity(t,i,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const e=!!this.required,t=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&i),this.customStates.set("user-valid",t&&i)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){const[t,i]=e;this.internals.setFormValue(t,i)}get allValidators(){const e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const e=this.allValidators;if(!e?.length)return;const t={customError:!!this.customError},i=this.validationTarget||this.input||void 0;let r="";for(const o of e){const{isValid:s,message:a,invalidKeys:l}=o.checkValidity(this);s||(r||(r=a),l?.length>=0&&l.forEach(c=>t[c]=!0))}r||(r=this.validationMessage),this.setValidity(t,r,i)}};J.formAssociated=!0;n([d({reflect:!0})],J.prototype,"name",2);n([d({type:Boolean})],J.prototype,"disabled",2);n([d({state:!0,attribute:!1})],J.prototype,"valueHasChanged",2);n([d({state:!0,attribute:!1})],J.prototype,"hasInteracted",2);n([d({attribute:"custom-error",reflect:!0})],J.prototype,"customError",2);n([d({attribute:!1,state:!0,type:Object})],J.prototype,"validity",1);var Km=C`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  .button.is-icon-button:has(wa-icon) {
    width: auto;
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-radius: var(--wa-border-radius-pill);
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }

  /*
   * Button group border radius modifications
   */

  /* Remove border radius from all grouped buttons by default */
  :host(.wa-button-group__button) .button {
    border-radius: 0;
  }

  /* Horizontal orientation */
  :host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-end-start-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Vertical orientation */
  :host(.wa-button-group__vertical) {
    flex: 1 1 auto;
  }

  :host(.wa-button-group__vertical) .button {
    width: 100%;
    justify-content: start;
  }

  :host(.wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-start-end-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Handle pill modifier for button groups */
  :host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-end-start-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-start-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }
`;var jt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const r=i.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var Tt=C`
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
`;const D=Sr(class extends Er{constructor(e){if(super(e),e.type!==me.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const i=e.element.classList;for(const r of this.st)r in t||(i.remove(r),this.st.delete(r));for(const r in t){const o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return Ft}});const Dc=Symbol.for(""),Gm=e=>{if(e?.r===Dc)return e?._$litStatic$},hl=(e,...t)=>({_$litStatic$:t.reduce((i,r,o)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:Dc}),ul=new Map,Xm=e=>(t,...i)=>{const r=i.length;let o,s;const a=[],l=[];let c,h=0,u=!1;for(;h<r;){for(c=t[h];h<r&&(s=i[h],(o=Gm(s))!==void 0);)c+=o+t[++h],u=!0;h!==r&&l.push(s),a.push(c),h++}if(h===r&&a.push(t[r]),u){const f=a.join("$$lit$$");(t=ul.get(f))===void 0&&(a.raw=a,ul.set(f,t=a)),i=l}return e(t,...i)},Ks=Xm(p);var G=class extends J{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new jt(this,"[default]","start","end"),this.localize=new W(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,uo()]}constructLightDOMButton(){const e=document.createElement("button");for(const t of this.attributes)t.name!=="style"&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position="absolute !important",e.style.width="0 !important",e.style.height="0 !important",e.style.clipPath="inset(50%) !important",e.style.overflow="hidden !important",e.style.whiteSpace="nowrap !important",this.name&&(e.name=this.name),e.value=this.value||"",e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;const i=this.constructLightDOMButton();this.parentElement?.append(i),i.click(),i.remove()}handleInvalid(){this.dispatchEvent(new pn)}handleLabelSlotChange(){const e=this.labelSlot.assignedNodes({flatten:!0});let t=!1,i=!1,r=!1,o=!1;[...e].forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){const a=s;a.localName==="wa-icon"?(i=!0,t||(t=a.label!==void 0)):o=!0}else s.nodeType===Node.TEXT_NODE&&(s.textContent?.trim()||"").length>0&&(r=!0)}),this.isIconButton=i&&!r&&!o,this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=this.isLink(),t=e?hl`a`:hl`button`;return Ks`
      <${t}
        part="base"
        class=${D({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${T(e?void 0:this.disabled)}
        type=${T(e?void 0:this.type)}
        title=${this.title}
        name=${T(e?void 0:this.name)}
        value=${T(e?void 0:this.value)}
        href=${T(e?this.href:void 0)}
        target=${T(e?this.target:void 0)}
        download=${T(e?this.download:void 0)}
        rel=${T(e&&this.rel?this.rel:void 0)}
        role=${T(e?void 0:"button")}
        aria-disabled=${T(e&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ks`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Ks`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};G.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};G.css=[Km,ys,Tt];n([x(".button")],G.prototype,"button",2);n([x("slot:not([name])")],G.prototype,"labelSlot",2);n([w()],G.prototype,"invalid",2);n([w()],G.prototype,"isIconButton",2);n([d()],G.prototype,"title",2);n([d({reflect:!0})],G.prototype,"variant",2);n([d({reflect:!0})],G.prototype,"appearance",2);n([d({reflect:!0})],G.prototype,"size",2);n([d({attribute:"with-caret",type:Boolean,reflect:!0})],G.prototype,"withCaret",2);n([d({type:Boolean})],G.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],G.prototype,"loading",2);n([d({type:Boolean,reflect:!0})],G.prototype,"pill",2);n([d()],G.prototype,"type",2);n([d({reflect:!0})],G.prototype,"name",2);n([d({reflect:!0})],G.prototype,"value",2);n([d({reflect:!0})],G.prototype,"href",2);n([d()],G.prototype,"target",2);n([d()],G.prototype,"rel",2);n([d()],G.prototype,"download",2);n([d({attribute:"formaction"})],G.prototype,"formAction",2);n([d({attribute:"formenctype"})],G.prototype,"formEnctype",2);n([d({attribute:"formmethod"})],G.prototype,"formMethod",2);n([d({attribute:"formnovalidate",type:Boolean})],G.prototype,"formNoValidate",2);n([d({attribute:"formtarget"})],G.prototype,"formTarget",2);n([k("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);G=n([v("wa-button")],G);var Ym=C`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-dasharray: 75, 100;
    stroke-dashoffset: -5;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;var ka=class extends z{constructor(){super(...arguments),this.localize=new W(this)}render(){return p`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};ka.css=Ym;ka=n([v("wa-spinner")],ka);var Zm=C`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;
    gap: 1px;

    @media (hover: hover) {
      > :hover,
      &::slotted(:hover) {
        z-index: 1;
      }
    }

    /* Focus and checked are always on top */
    > :focus,
    &::slotted(:focus),
    > [aria-checked='true'],
    &::slotted([aria-checked='true']),
    > [checked],
    &::slotted([checked]) {
      z-index: 2 !important;
    }
  }
  :host([orientation='vertical']) .button-group {
    flex-direction: column;
  }

  /* Button groups with at least one outlined button will not have a gap and instead have borders overlap */
  .button-group.has-outlined {
    gap: 0;

    &:not([aria-orientation='vertical']):not(.button-group-vertical)::slotted(:not(:first-child)) {
      margin-inline-start: calc(-1 * var(--border-width));
    }

    &:is([aria-orientation='vertical'], .button-group-vertical)::slotted(:not(:first-child)) {
      margin-block-start: calc(-1 * var(--border-width));
    }
  }
`;var pi=class extends z{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(e){super.updated(e),e.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(e){Nr(e.target)?.classList.add("button-focus")}handleBlur(e){Nr(e.target)?.classList.remove("button-focus")}handleMouseOver(e){Nr(e.target)?.classList.add("button-hover")}handleMouseOut(e){Nr(e.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,e.forEach(t=>{const i=e.indexOf(t),r=Nr(t);r&&(r.appearance==="outlined"&&(this.hasOutlined=!0),r.classList.add("wa-button-group__button"),r.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),r.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),r.classList.toggle("wa-button-group__button-first",i===0),r.classList.toggle("wa-button-group__button-inner",i>0&&i<e.length-1),r.classList.toggle("wa-button-group__button-last",i===e.length-1),r.classList.toggle("wa-button-group__button-radio",r.tagName.toLowerCase()==="wa-radio-button"))})}render(){return p`
      <slot
        part="base"
        class=${D({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};pi.css=[Zm];n([x("slot")],pi.prototype,"defaultSlot",2);n([w()],pi.prototype,"disableRole",2);n([w()],pi.prototype,"hasOutlined",2);n([d()],pi.prototype,"label",2);n([d({reflect:!0})],pi.prototype,"orientation",2);pi=n([v("wa-button-group")],pi);function Nr(e){const t="wa-button, wa-radio-button";return e.closest(t)??e.querySelector(t)}var Qm=C`
  :host {
    display: flex;
    position: relative;
    align-items: stretch;
    border-radius: var(--wa-panel-border-radius);
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
    border-style: var(--wa-panel-border-style);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
    padding: 1em;
  }

  /* Appearance modifiers */
  :host([appearance~='plain']) {
    background-color: transparent;
    border-color: transparent;
  }

  :host([appearance~='outlined']) {
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance~='filled']) {
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: transparent;
  }

  :host([appearance~='filled-outlined']) {
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  }

  :host([appearance~='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;

    [part~='icon'] {
      color: currentColor;
    }
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-on-quiet);
    font-size: 1.25em;
  }

  ::slotted([slot='icon']) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  [part~='message'] {
    flex: 1 1 auto;
    display: block;
    overflow: hidden;
  }
`;var mr=class extends z{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return p`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};mr.css=[Qm,ys,Tt];n([d({reflect:!0})],mr.prototype,"variant",2);n([d({reflect:!0})],mr.prototype,"appearance",2);n([d({reflect:!0})],mr.prototype,"size",2);mr=n([v("wa-callout")],mr);var Jm=C`
  :host {
    --spacing: var(--wa-space-l);

    /* Internal calculated properties */
    --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));

    display: flex;
    flex-direction: column;
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-s);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  :host([appearance='outlined']) {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='accent']) {
    color: var(--wa-color-neutral-on-loud);
    background-color: var(--wa-color-neutral-fill-loud);
    border-color: transparent;
  }

  /* Take care of top and bottom radii */
  .media,
  :host(:not([with-media])) .header,
  :host(:not([with-media], [with-header])) .body {
    border-start-start-radius: var(--inner-border-radius);
    border-start-end-radius: var(--inner-border-radius);
  }

  :host(:not([with-footer])) .body,
  .footer {
    border-end-start-radius: var(--inner-border-radius);
    border-end-end-radius: var(--inner-border-radius);
  }

  .media {
    display: flex;
    overflow: hidden;

    &::slotted(*) {
      display: block;
      width: 100%;
      border-radius: 0 !important;
    }
  }

  /* Round all corners for plain appearance */
  :host([appearance='plain']) .media {
    border-radius: var(--inner-border-radius);

    &::slotted(*) {
      border-radius: inherit !important;
    }
  }

  .header {
    display: block;
    border-block-end-style: inherit;
    border-block-end-color: var(--wa-color-surface-border);
    border-block-end-width: var(--wa-panel-border-width);
    padding: calc(var(--spacing) / 2) var(--spacing);
  }

  .body {
    display: block;
    padding: var(--spacing);
  }

  .footer {
    display: block;
    border-block-start-style: inherit;
    border-block-start-color: var(--wa-color-surface-border);
    border-block-start-width: var(--wa-panel-border-width);
    padding: var(--spacing);
  }

  /* Push slots to sides when the action slots renders */
  .has-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :host(:not([with-header])) .header,
  :host(:not([with-footer])) .footer,
  :host(:not([with-media])) .media {
    display: none;
  }

  /* Orientation Styles */
  :host([orientation='horizontal']) {
    flex-direction: row;

    .media {
      border-start-start-radius: var(--inner-border-radius);
      border-end-start-radius: var(--inner-border-radius);
      border-start-end-radius: 0;

      &::slotted(*) {
        block-size: 100%;
        inline-size: 100%;
        object-fit: cover;
      }
    }
  }

  :host([orientation='horizontal']) ::slotted([slot='body']) {
    display: block;
    height: 100%;
    margin: 0;
  }

  :host([orientation='horizontal']) ::slotted([slot='actions']) {
    display: flex;
    align-items: center;
    padding: var(--spacing);
  }
`;var fi=class extends z{constructor(){super(...arguments),this.hasSlotController=new jt(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?p`
        <slot name="media" part="media" class="media"></slot>
        <slot part="body" class="body"></slot>
        <slot name="actions" part="actions" class="actions"></slot>
      `:p`
      <slot name="media" part="media" class="media"></slot>

      ${this.hasSlotController.test("header-actions")?p` <header part="header" class="header has-actions">
            <slot name="header"></slot>
            <slot name="header-actions"></slot>
          </header>`:p` <header part="header" class="header">
            <slot name="header"></slot>
          </header>`}

      <slot part="body" class="body"></slot>
      ${this.hasSlotController.test("footer-actions")?p` <footer part="footer" class="footer has-actions">
            <slot name="footer"></slot>
            <slot name="footer-actions"></slot>
          </footer>`:p` <footer part="footer" class="footer">
            <slot name="footer"></slot>
          </footer>`}
    `}};fi.css=[Tt,Jm];n([d({reflect:!0})],fi.prototype,"appearance",2);n([d({attribute:"with-header",type:Boolean,reflect:!0})],fi.prototype,"withHeader",2);n([d({attribute:"with-media",type:Boolean,reflect:!0})],fi.prototype,"withMedia",2);n([d({attribute:"with-footer",type:Boolean,reflect:!0})],fi.prototype,"withFooter",2);n([d({reflect:!0})],fi.prototype,"orientation",2);fi=n([v("wa-card")],fi);var tg=class extends Event{constructor(e){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};const eg="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let ig=(e=21)=>{let t="",i=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=eg[i[e]&63];return t};function N(e,t,i){const r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>i?r(i):r(e)}function xs(e=""){return`${e}${ig()}`}var rg=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var og=C`
  :host {
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;
    --slide-gap: var(--wa-space-m, 1rem); /* fallback value is necessary */

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--wa-space-m);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--wa-space-s);
  }

  .slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--wa-border-radius-m);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.slides) {
      scroll-behavior: auto;
    }
  }

  .slides-horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .slides-vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .slides-dragging,
  .slides-dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(wa-carousel-item) {
    height: 100%;
  }

  .slides::-webkit-scrollbar {
    display: none;
  }

  .navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--wa-font-size-l);
  }

  .navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    font-size: inherit;
    color: var(--wa-color-text-quiet);
    padding: var(--wa-space-xs);
    cursor: pointer;
    transition: var(--wa-transition-normal) color;
    appearance: none;
  }

  .navigation-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .navigation-button-disabled::part(base) {
    pointer-events: none;
  }

  .navigation-button-previous {
    grid-column: 1;
    grid-row: 1;
  }

  .navigation-button-next {
    grid-column: 3;
    grid-row: 1;
  }

  .pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--wa-border-radius-circle);
    width: var(--wa-space-s);
    height: var(--wa-space-s);
    background-color: var(--wa-color-neutral-fill-normal);
    padding: 0;
    margin: 0;
    transition: transform var(--wa-transition-slow);
  }

  .pagination-item-active {
    background-color: var(--wa-form-control-activated-color);
    transform: scale(1.25);
  }

  /* Focus styles */
  .slides:focus-visible,
  .navigation-button:focus-visible,
  .pagination-item:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
`;function ye(e,t){return new Promise(i=>{function r(o){o.target===e&&(e.removeEventListener(t,r),i())}e.addEventListener(t,r)})}async function Jo(e,t,i){return e.animate(t,i).finished.catch(()=>{})}function tt(e,t){return new Promise(i=>{const r=new AbortController,{signal:o}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let s=()=>{e.classList.remove(t),i(),r.abort()};e.addEventListener("animationend",s,{once:!0,signal:o}),e.addEventListener("animationcancel",s,{once:!0,signal:o})})}function ts(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e)||0:e.indexOf("s")>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}function pl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function*sg(e,t){if(e!==void 0){let i=0;for(const r of e)yield t(r,i++)}}function*ag(e,t,i=1){const r=t===void 0?0:e;t??=e;for(let o=r;i>0?o<t:t<o;o+=i)yield o}(()=>{const e=(r,o)=>{let s=0;return function(...a){window.clearTimeout(s),s=window.setTimeout(()=>{r.call(this,...a)},o)}},t=(r,o,s)=>{const a=r[o];r[o]=function(...l){a.call(this,...l),s.call(this,a,...l)}};if(!("onscrollend"in window)){const r=new Set,o=new WeakMap,s=l=>{r.add(l.pointerId)},a=l=>{r.delete(l.pointerId)};document.addEventListener("pointerdown",s),document.addEventListener("pointerup",a),t(EventTarget.prototype,"addEventListener",function(l,c){if(c!=="scroll")return;const h=e(()=>{r.size?h():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",h,{passive:!0}),o.set(this,h)}),t(EventTarget.prototype,"removeEventListener",function(l,c){if(c!=="scroll")return;const h=o.get(this);h&&l.call(this,"scroll",h,{passive:!0})})}})();var et=class extends z{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new rg(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new W(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const r=e.scrollLeft,o=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==r||i!==o)&&(e.scrollTo({left:r,top:o,behavior:pl()?"auto":"smooth"}),await ye(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(i=>[...i.addedNodes,...i.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:i,loop:r}=this,o=r?e/i:(e-t)/i+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),i=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+i*i)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,i=this.localize.dir()==="rtl",r=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!i&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft",s=e.key==="ArrowUp"||!i&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight";e.preventDefault(),s&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{const a=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');a&&a.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const l of t){const c=l.target;c.toggleAttribute("inert",!l.isIntersecting),c.classList.toggle("--in-view",l.isIntersecting),c.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const i=t.find(l=>l.isIntersecting);if(!i)return;const r=this.getSlides({excludeClones:!1}),o=this.getSlides().length,s=r.indexOf(i.target),a=this.loop?s-this.slidesPerPage:s;if(i&&(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone"))){const l=Number(i.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,i=e.slice(-t),r=e.slice(0,t);i.reverse().forEach((o,s)=>{const a=o.cloneNode(!0);a.setAttribute("data-clone",String(e.length-s-1)),this.prepend(a)}),r.forEach((o,s)=>{const a=o.cloneNode(!0);a.setAttribute("data-clone",String(s)),this.append(a)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,i)=>{t.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new tg({index:this.activeSlide,slide:e[this.activeSlide]}))}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((i,r)=>{(r+t)%t===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:i,loop:r}=this,o=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!o.length)return;const a=r?(e+o.length)%o.length:N(e,0,o.length-i);this.activeSlide=a;const l=this.localize.dir()==="rtl",c=N(e+(r?i:0)+(l?i-1:0),0,s.length-1),h=s[c];this.scrollToSlide(h,pl()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,r=i.getBoundingClientRect(),o=e.getBoundingClientRect(),s=o.left-r.left,a=o.top-r.top;s||a?(this.pendingSlideChange=!0,i.scrollTo({left:s+i.scrollLeft,top:a+i.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this;let i=0,r=0,o=!1,s=!1;this.hasUpdated&&(i=this.getPageCount(),r=this.getCurrentPage(),o=this.canScrollPrev(),s=this.canScrollNext());const a=this.localize.dir()==="rtl";return p`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${D({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style=${rt({"--slides-per-page":this.slidesPerPage})}
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot @slotchange=${()=>this.requestUpdate()}></slot>
        </div>

        ${this.navigation?p`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${D({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${a?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${D({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${a?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?p`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${sg(ag(i),l=>{const c=l===r;return p`
                    <button
                      part="pagination-item ${c?"pagination-item-active":""}"
                      class="${D({"pagination-item":!0,"pagination-item-active":c})}"
                      role="tab"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,i)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(l*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:p``}
      </div>
    `}};et.css=og;n([d({type:Boolean,reflect:!0})],et.prototype,"loop",2);n([d({type:Number,reflect:!0})],et.prototype,"slides",2);n([d({type:Number,reflect:!0})],et.prototype,"currentSlide",2);n([d({type:Boolean,reflect:!0})],et.prototype,"navigation",2);n([d({type:Boolean,reflect:!0})],et.prototype,"pagination",2);n([d({type:Boolean,reflect:!0})],et.prototype,"autoplay",2);n([d({type:Number,attribute:"autoplay-interval"})],et.prototype,"autoplayInterval",2);n([d({type:Number,attribute:"slides-per-page"})],et.prototype,"slidesPerPage",2);n([d({type:Number,attribute:"slides-per-move"})],et.prototype,"slidesPerMove",2);n([d()],et.prototype,"orientation",2);n([d({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],et.prototype,"mouseDragging",2);n([x(".slides")],et.prototype,"scrollContainer",2);n([x(".pagination")],et.prototype,"paginationContainer",2);n([w()],et.prototype,"activeSlide",2);n([w()],et.prototype,"scrolling",2);n([w()],et.prototype,"dragging",2);n([vs({passive:!0})],et.prototype,"handleScroll",1);n([k("loop",{waitUntilFirstUpdate:!0}),k("slidesPerPage",{waitUntilFirstUpdate:!0})],et.prototype,"initializeSlides",1);n([k("activeSlide")],et.prototype,"handleSlideChange",1);n([k("slidesPerMove")],et.prototype,"updateSlidesSnap",1);n([k("autoplay")],et.prototype,"handleAutoplayChange",1);et=n([v("wa-carousel")],et);var ng=C`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;var Ca=class extends z{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return p` <slot></slot> `}};Ca.css=ng;Ca=n([v("wa-carousel-item")],Ca);var ks=(e={})=>{let{validationElement:t,validationProperty:i}=e;t||(t=Object.assign(document.createElement("input"),{required:!0})),i||(i="value");const r={observedAttributes:["required"],message:t.validationMessage,checkValidity(o){const s={message:"",isValid:!0,invalidKeys:[]};return(o.required??o.hasAttribute("required"))&&!o[i]&&(s.message=typeof r.message=="function"?r.message(o):r.message||"",s.isValid=!1,s.invalidKeys.push("valueMissing")),s}};return r};var Fe=C`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`;var lg=C`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`;const Bi=Sr(class extends Er{constructor(e){if(super(e),e.type!==me.PROPERTY&&e.type!==me.ATTRIBUTE&&e.type!==me.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!tc(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ft||t===R)return t;const i=e.element,r=e.name;if(e.type===me.PROPERTY){if(t===i[r])return Ft}else if(e.type===me.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(r))return Ft}else if(e.type===me.ATTRIBUTE&&i.getAttribute(r)===t+"")return Ft;return ec(e),t}});var pt=class extends J{constructor(){super(...arguments),this.hasSlotController=new jt(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){const e=[ks({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){const e=this._value||"on";return this.checked?e:null}set value(e){this._value=e}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),t=this.hint?!0:!!e,i=!this.checked&&this.indeterminate,r=i?"indeterminate":"check",o=i?"indeterminate":"check";return p`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${T(this._value)}
            .indeterminate=${Bi(this.indeterminate)}
            .checked=${Bi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${o}-icon icon" library="system" name=${r}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${t?"false":"true"}
        class="${D({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};pt.css=[Fe,Tt,lg];pt.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};n([x('input[type="checkbox"]')],pt.prototype,"input",2);n([d()],pt.prototype,"title",2);n([d({reflect:!0})],pt.prototype,"name",2);n([d({reflect:!0})],pt.prototype,"value",1);n([d({reflect:!0})],pt.prototype,"size",2);n([d({type:Boolean})],pt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],pt.prototype,"indeterminate",2);n([d({type:Boolean,attribute:!1})],pt.prototype,"checked",2);n([d({type:Boolean,reflect:!0,attribute:"checked"})],pt.prototype,"defaultChecked",2);n([d({type:Boolean,reflect:!0})],pt.prototype,"required",2);n([d()],pt.prototype,"hint",2);n([k("defaultChecked")],pt.prototype,"handleDefaultCheckedChange",1);n([k(["checked","indeterminate"])],pt.prototype,"handleStateChange",1);n([k("disabled")],pt.prototype,"handleDisabledChange",1);pt=n([v("wa-checkbox")],pt);var cg=C`
  :host {
    --grid-width: 17em;
    --grid-height: 12em;
    --grid-handle-size: 1.25em;
    --slider-height: 1em;
    --slider-handle-size: calc(var(--slider-height) + 0.25em);
  }

  .color-picker {
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    border-color: var(--wa-color-surface-border);
    box-shadow: var(--wa-shadow-m);
    color: var(--color);
    font: inherit;
    font-size: inherit;
    user-select: none;
    width: var(--grid-width);
    -webkit-user-select: none;
  }

  .grid {
    position: relative;
    height: var(--grid-height);
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: var(--wa-border-radius-circle);
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    border: solid 0.125rem white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .grid-handle-dragging {
    cursor: none;
    scale: 1.5;
  }

  .grid-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .controls {
    padding: 0.75em;
    display: flex;
    align-items: center;
  }

  .sliders {
    flex: 1 1 auto;
  }

  .slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--wa-border-radius-s);
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .slider:not(:last-of-type) {
    margin-bottom: 0.75em;
  }

  .slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    border-radius: var(--wa-border-radius-circle);
    border: solid 0.125rem white;
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .slider-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .alpha .alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3em;
    height: 3em;
    border: none;
    border-radius: var(--wa-border-radius-circle);
    background: none;
    font-size: inherit;
    margin-inline-start: 0.75em;
    cursor: copy;
    forced-color-adjust: none;
  }

  .preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .preview:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  }

  .preview-color-copied {
    animation: pulse 850ms;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .user-input {
    display: flex;
    align-items: center;
    padding: 0 0.75em 0.75em 0.75em;
  }

  .user-input wa-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;

    &::part(form-control-label) {
      /* Visually hidden */
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
      border: none !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      padding: 0 !important;
    }
  }

  .user-input wa-button-group {
    margin-inline-start: 0.75em;

    &::part(base) {
      flex-wrap: nowrap;
    }
  }

  .user-input wa-button:first-of-type {
    min-width: 3em;
    max-width: 3em;
  }

  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(1.5em, 100%), 1fr));
    grid-gap: 0.5em;
    justify-items: center;
    border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
      var(--wa-color-surface-border);
    padding: 0.5em;
    forced-color-adjust: none;
  }

  .swatch {
    position: relative;
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: var(--wa-border-radius-s);
  }

  .swatch .swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .swatch:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .transparent-bg {
    background-image:
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
    background-size: 0.5rem 0.5rem;
    background-position:
      0 0,
      0 0,
      -0.25rem -0.25rem,
      0.25rem 0.25rem;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    .grid,
    .grid-handle,
    .slider,
    .slider-handle,
    .preview,
    .swatch,
    .swatch-color {
      pointer-events: none;
    }
  }

  /*
   * Color dropdown
   */

  .color-dropdown {
    display: contents;
  }

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--wa-color-surface-raised);
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    overflow: visible;
  }

  .trigger {
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    forced-color-adjust: none;
    width: var(--wa-form-control-height);
    height: var(--wa-form-control-height);
    border-radius: var(--wa-form-control-border-radius);
  }

  .trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
      inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
  }

  .trigger-empty:before {
    background-color: transparent;
  }

  .trigger:focus-visible {
    outline: none;
  }

  .trigger:focus-visible:not(.trigger:disabled) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([disabled]) :is(.label, .trigger) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-control.form-control-has-label .label {
    cursor: pointer;
    display: inline-block;
  }
`;function Yr(e,t){function i(o){const s=e.getBoundingClientRect(),a=e.ownerDocument.defaultView,l=s.left+a.pageXOffset,c=s.top+a.pageYOffset,h=o.pageX-l,u=o.pageY-c;t?.onMove&&t.onMove(h,u)}function r(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",r),t?.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",r),t?.initialEvent instanceof PointerEvent&&i(t.initialEvent)}var Gs=typeof window<"u"&&"ontouchstart"in window,xo=class{constructor(e,t){this.isActive=!1,this.isDragging=!1,this.handleDragStart=i=>{const r="touches"in i?i.touches[0].clientX:i.clientX,o="touches"in i?i.touches[0].clientY:i.clientY;this.isDragging||!Gs&&i.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(r,o))},this.handleDragStop=i=>{const r="changedTouches"in i?i.changedTouches[0].clientX:i.clientX,o="changedTouches"in i?i.changedTouches[0].clientY:i.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(r,o)},this.handleDragMove=i=>{const r="touches"in i?i.touches[0].clientX:i.clientX,o="touches"in i?i.touches[0].clientY:i.clientY;window.getSelection()?.removeAllRanges(),this.options.move(r,o)},this.element=e,this.options={start:()=>{},stop:()=>{},move:()=>{},...t},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),Gs&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),Gs&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(e){(e!==void 0?e:!this.isActive)?this.start():this.stop()}};var Oc=C`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;function vt(e,t){dg(e)&&(e="100%");const i=hg(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function ko(e){return Math.min(1,Math.max(0,e))}function dg(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function hg(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Ic(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Co(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Di(e){return e.length===1?"0"+e:String(e)}function ug(e,t,i){return{r:vt(e,255)*255,g:vt(t,255)*255,b:vt(i,255)*255}}function fl(e,t,i){e=vt(e,255),t=vt(t,255),i=vt(i,255);const r=Math.max(e,t,i),o=Math.min(e,t,i);let s=0,a=0;const l=(r+o)/2;if(r===o)a=0,s=0;else{const c=r-o;switch(a=l>.5?c/(2-r-o):c/(r+o),r){case e:s=(t-i)/c+(t<i?6:0);break;case t:s=(i-e)/c+2;break;case i:s=(e-t)/c+4;break}s/=6}return{h:s,s:a,l}}function Xs(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*(6*i):i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function pg(e,t,i){let r,o,s;if(e=vt(e,360),t=vt(t,100),i=vt(i,100),t===0)o=i,s=i,r=i;else{const a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;r=Xs(l,a,e+1/3),o=Xs(l,a,e),s=Xs(l,a,e-1/3)}return{r:r*255,g:o*255,b:s*255}}function ml(e,t,i){e=vt(e,255),t=vt(t,255),i=vt(i,255);const r=Math.max(e,t,i),o=Math.min(e,t,i);let s=0;const a=r,l=r-o,c=r===0?0:l/r;if(r===o)s=0;else{switch(r){case e:s=(t-i)/l+(t<i?6:0);break;case t:s=(i-e)/l+2;break;case i:s=(e-t)/l+4;break}s/=6}return{h:s,s:c,v:a}}function fg(e,t,i){e=vt(e,360)*6,t=vt(t,100),i=vt(i,100);const r=Math.floor(e),o=e-r,s=i*(1-t),a=i*(1-o*t),l=i*(1-(1-o)*t),c=r%6,h=[i,a,s,s,l,i][c],u=[l,i,i,a,s,s][c],f=[s,s,l,i,i,a][c];return{r:h*255,g:u*255,b:f*255}}function gl(e,t,i,r){const o=[Di(Math.round(e).toString(16)),Di(Math.round(t).toString(16)),Di(Math.round(i).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function mg(e,t,i,r,o){const s=[Di(Math.round(e).toString(16)),Di(Math.round(t).toString(16)),Di(Math.round(i).toString(16)),Di(bg(r))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function gg(e,t,i,r){const o=e/100,s=t/100,a=i/100,l=r/100,c=255*(1-o)*(1-l),h=255*(1-s)*(1-l),u=255*(1-a)*(1-l);return{r:c,g:h,b:u}}function bl(e,t,i){let r=1-e/255,o=1-t/255,s=1-i/255,a=Math.min(r,o,s);return a===1?(r=0,o=0,s=0):(r=(r-a)/(1-a)*100,o=(o-a)/(1-a)*100,s=(s-a)/(1-a)*100),a*=100,{c:Math.round(r),m:Math.round(o),y:Math.round(s),k:Math.round(a)}}function bg(e){return Math.round(parseFloat(e)*255).toString(16)}function wl(e){return Zt(e)/255}function Zt(e){return parseInt(e,16)}function wg(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const $a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function vg(e){let t={r:0,g:0,b:0},i=1,r=null,o=null,s=null,a=!1,l=!1;return typeof e=="string"&&(e=kg(e)),typeof e=="object"&&(Yt(e.r)&&Yt(e.g)&&Yt(e.b)?(t=ug(e.r,e.g,e.b),a=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Yt(e.h)&&Yt(e.s)&&Yt(e.v)?(r=Co(e.s),o=Co(e.v),t=fg(e.h,r,o),a=!0,l="hsv"):Yt(e.h)&&Yt(e.s)&&Yt(e.l)?(r=Co(e.s),s=Co(e.l),t=pg(e.h,r,s),a=!0,l="hsl"):Yt(e.c)&&Yt(e.m)&&Yt(e.y)&&Yt(e.k)&&(t=gg(e.c,e.m,e.y,e.k),a=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(i=e.a)),i=Ic(i),{ok:a,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:i}}const yg="[-\\+]?\\d+%?",xg="[-\\+]?\\d*\\.\\d+%?",ni="(?:"+xg+")|(?:"+yg+")",Ys="[\\s|\\(]+("+ni+")[,|\\s]+("+ni+")[,|\\s]+("+ni+")\\s*\\)?",$o="[\\s|\\(]+("+ni+")[,|\\s]+("+ni+")[,|\\s]+("+ni+")[,|\\s]+("+ni+")\\s*\\)?",se={CSS_UNIT:new RegExp(ni),rgb:new RegExp("rgb"+Ys),rgba:new RegExp("rgba"+$o),hsl:new RegExp("hsl"+Ys),hsla:new RegExp("hsla"+$o),hsv:new RegExp("hsv"+Ys),hsva:new RegExp("hsva"+$o),cmyk:new RegExp("cmyk"+$o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function kg(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if($a[e])e=$a[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=se.rgb.exec(e);return i?{r:i[1],g:i[2],b:i[3]}:(i=se.rgba.exec(e),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=se.hsl.exec(e),i?{h:i[1],s:i[2],l:i[3]}:(i=se.hsla.exec(e),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=se.hsv.exec(e),i?{h:i[1],s:i[2],v:i[3]}:(i=se.hsva.exec(e),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=se.cmyk.exec(e),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=se.hex8.exec(e),i?{r:Zt(i[1]),g:Zt(i[2]),b:Zt(i[3]),a:wl(i[4]),format:t?"name":"hex8"}:(i=se.hex6.exec(e),i?{r:Zt(i[1]),g:Zt(i[2]),b:Zt(i[3]),format:t?"name":"hex"}:(i=se.hex4.exec(e),i?{r:Zt(i[1]+i[1]),g:Zt(i[2]+i[2]),b:Zt(i[3]+i[3]),a:wl(i[4]+i[4]),format:t?"name":"hex8"}:(i=se.hex3.exec(e),i?{r:Zt(i[1]+i[1]),g:Zt(i[2]+i[2]),b:Zt(i[3]+i[3]),format:t?"name":"hex"}:!1))))))))))}function Yt(e){return typeof e=="number"?!Number.isNaN(e):se.CSS_UNIT.test(e)}class ot{constructor(t="",i={}){if(t instanceof ot)return t;typeof t=="number"&&(t=wg(t)),this.originalInput=t;const r=vg(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??r.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let i,r,o;const s=t.r/255,a=t.g/255,l=t.b/255;return s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),l<=.03928?o=l/12.92:o=Math.pow((l+.055)/1.055,2.4),.2126*i+.7152*r+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=Ic(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=ml(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=ml(this.r,this.g,this.b),i=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?`hsv(${i}, ${r}%, ${o}%)`:`hsva(${i}, ${r}%, ${o}%, ${this.roundA})`}toHsl(){const t=fl(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=fl(this.r,this.g,this.b),i=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?`hsl(${i}, ${r}%, ${o}%)`:`hsla(${i}, ${r}%, ${o}%, ${this.roundA})`}toHex(t=!1){return gl(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return mg(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),i=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${i}, ${r})`:`rgba(${t}, ${i}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=i=>`${Math.round(vt(i,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=i=>Math.round(vt(i,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...bl(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:i,y:r,k:o}=bl(this.r,this.g,this.b);return`cmyk(${t}, ${i}, ${r}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+gl(this.r,this.g,this.b,!1);for(const[i,r]of Object.entries($a))if(t===r)return i;return!1}toString(t){const i=!!t;t=t??this.format;let r=!1;const o=this.a<1&&this.a>=0;return!i&&o&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ot(this.toString())}lighten(t=10){const i=this.toHsl();return i.l+=t/100,i.l=ko(i.l),new ot(i)}brighten(t=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(t/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(t/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(t/100)))),new ot(i)}darken(t=10){const i=this.toHsl();return i.l-=t/100,i.l=ko(i.l),new ot(i)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const i=this.toHsl();return i.s-=t/100,i.s=ko(i.s),new ot(i)}saturate(t=10){const i=this.toHsl();return i.s+=t/100,i.s=ko(i.s),new ot(i)}greyscale(){return this.desaturate(100)}spin(t){const i=this.toHsl(),r=(i.h+t)%360;return i.h=r<0?360+r:r,new ot(i)}mix(t,i=50){const r=this.toRgb(),o=new ot(t).toRgb(),s=i/100,a={r:(o.r-r.r)*s+r.r,g:(o.g-r.g)*s+r.g,b:(o.b-r.b)*s+r.b,a:(o.a-r.a)*s+r.a};return new ot(a)}analogous(t=6,i=30){const r=this.toHsl(),o=360/i,s=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,s.push(new ot(r));return s}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ot(t)}monochromatic(t=6){const i=this.toHsv(),{h:r}=i,{s:o}=i;let{v:s}=i;const a=[],l=1/t;for(;t--;)a.push(new ot({h:r,s:o,v:s})),s=(s+l)%1;return a}splitcomplement(){const t=this.toHsl(),{h:i}=t;return[this,new ot({h:(i+72)%360,s:t.s,l:t.l}),new ot({h:(i+216)%360,s:t.s,l:t.l})]}onBackground(t){const i=this.toRgb(),r=new ot(t).toRgb(),o=i.a+r.a*(1-i.a);return new ot({r:(i.r*i.a+r.r*r.a*(1-i.a))/o,g:(i.g*i.a+r.g*r.a*(1-i.a))/o,b:(i.b*i.a+r.b*r.a*(1-i.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const i=this.toHsl(),{h:r}=i,o=[this],s=360/t;for(let a=1;a<t;a++)o.push(new ot({h:(r+a*s)%360,s:i.s,l:i.l}));return o}equals(t){const i=new ot(t);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var I=class extends J{constructor(){super(),this.hasSlotController=new jt(this,"hint","label"),this.isSafeValue=!1,this.localize=new W(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focus(),this.hide();return}e.key==="Tab"&&setTimeout(()=>{const t=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||t?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{const i=e.composedPath().some(r=>r instanceof Element&&(r.closest(".color-picker")||r===this.trigger));this&&!i&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const e=[ks()];return[...super.validators,...e]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".slider.alpha"),i=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value,s=this.value;i.focus(),e.preventDefault(),Yr(t,{onMove:a=>{this.alpha=N(a/r*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".slider.hue"),i=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect();let o=this.value,s=this.value;i.focus(),e.preventDefault(),Yr(t,{onMove:a=>{this.hue=N(a/r*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".grid"),i=t.querySelector(".grid-handle"),{width:r,height:o}=t.getBoundingClientRect();let s=this.value,a=this.value;i.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Yr(t,{onMove:(l,c)=>{this.saturation=N(l/r*100,0,100),this.brightness=N(100-c/o*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=N(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=N(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=N(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=N(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=N(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=N(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=N(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=N(this.brightness-t,0,100),this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(e){const t=e.target,i=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||""):this.value="",this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()==="")return null;const t=new ot(e);if(!t.isValid)return null;const i=t.toHsl(),r=t.toRgb(),o=t.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;const s={h:i.h||0,s:(i.s||0)*100,l:(i.l||0)*100,a:i.a||0},a=t.toHexString(),l=t.toHex8String(),c={h:o.h||0,s:(o.s||0)*100,v:(o.v||0)*100,a:o.a||0};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(t=>{const i=this.value;this.setColor(t.sRGBHex),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(e,t,i,r=100){const o=new ot(`hsva(${e}, ${t}%, ${i}%, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){super.willUpdate(e),e.has("value")&&this.handleValueChange(e.get("value")||"",this.value||"")}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(t);i!==null?(this.inputValue=this.value||"",this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=e??""}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){const e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.popup?.active&&this.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new pn),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}updateAccessibleTrigger(){const e=this.trigger;e&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,ye(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,ye(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await tt(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await tt(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const e=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t,o=this.saturation,s=100-this.brightness,a=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(c=>c.trim()!==""),l=p`
      <div
        part="base"
        class=${D({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${rt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${D({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${rt({top:`${s}%`,left:`${o}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${T(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${rt({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${T(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?p`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${rt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${rt({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${T(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${rt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="small"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${this.withoutFormatToggle?"":p`
                  <wa-button
                    part="format-button"
                    size="small"
                    appearance="outlined"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `}
            ${this.hasEyeDropper?p`
                  <wa-button
                    part="eyedropper-button"
                    size="small"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></wa-icon>
                  </wa-button>
                `:""}
          </wa-button-group>
        </div>

        ${a.length>0?p`
              <div part="swatches" class="swatches">
                ${a.map(c=>{const h=this.parseColor(c);return h?p`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${T(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${c}
                      @click=${()=>this.selectSwatch(c)}
                      @keydown=${u=>!this.disabled&&u.key==="Enter"&&this.setColor(h.hexa)}
                    >
                      <div class="swatch-color" style=${rt({backgroundColor:h.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return p`
      <div
        class=${D({container:!0,"form-control":!0,"form-control-has-label":i})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${D({label:!0,"has-label":i})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${D({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${rt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${D({"has-slotted":r})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement="bottom-start"
        distance="0"
        skidding="0"
        sync="width"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${l}
      </wa-popup>
    `}};I.css=[Oc,Tt,Fe,cg];I.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};n([x('[part~="base"]')],I.prototype,"base",2);n([x('[part~="input"]')],I.prototype,"input",2);n([x('[part~="form-control-label"]')],I.prototype,"triggerLabel",2);n([x('[part~="form-control-input"]')],I.prototype,"triggerButton",2);n([x(".color-popup")],I.prototype,"popup",2);n([x('[part~="preview"]')],I.prototype,"previewButton",2);n([x('[part~="trigger"]')],I.prototype,"trigger",2);n([w()],I.prototype,"hasFocus",2);n([w()],I.prototype,"isDraggingGridHandle",2);n([w()],I.prototype,"isEmpty",2);n([w()],I.prototype,"inputValue",2);n([w()],I.prototype,"hue",2);n([w()],I.prototype,"saturation",2);n([w()],I.prototype,"brightness",2);n([w()],I.prototype,"alpha",2);n([w()],I.prototype,"value",1);n([d({attribute:"value",reflect:!0})],I.prototype,"defaultValue",2);n([d({attribute:"with-label",reflect:!0,type:Boolean})],I.prototype,"withLabel",2);n([d({attribute:"with-hint",reflect:!0,type:Boolean})],I.prototype,"withHint",2);n([w()],I.prototype,"hasEyeDropper",2);n([d()],I.prototype,"label",2);n([d({attribute:"hint"})],I.prototype,"hint",2);n([d()],I.prototype,"format",2);n([d({reflect:!0})],I.prototype,"size",2);n([d({attribute:"without-format-toggle",type:Boolean})],I.prototype,"withoutFormatToggle",2);n([d({reflect:!0})],I.prototype,"name",2);n([d({type:Boolean})],I.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],I.prototype,"open",2);n([d({type:Boolean})],I.prototype,"opacity",2);n([d({type:Boolean})],I.prototype,"uppercase",2);n([d()],I.prototype,"swatches",2);n([d({type:Boolean,reflect:!0})],I.prototype,"required",2);n([vs({passive:!1})],I.prototype,"handleTouchMove",1);n([k("format",{waitUntilFirstUpdate:!0})],I.prototype,"handleFormatChange",1);n([k("opacity")],I.prototype,"handleOpacityChange",1);n([k("value")],I.prototype,"handleValueChange",1);n([k("open",{waitUntilFirstUpdate:!0})],I.prototype,"handleOpenChange",1);I=n([v("wa-color-picker")],I);var Pc=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function fn(e,t){const i=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!i&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&Cg(t)})}function Cg(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;const i=[...t.elements];if(i.length===1){t.requestSubmit(null);return}const r=i.find(o=>o.type==="submit"&&!o.matches(":disabled"));r&&(["input","button"].includes(r.localName)?t.requestSubmit(r):r.click())}var $g=C`
  :host {
    border-width: 0;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;var P=class extends J{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new jt(this,"hint","label"),this.localize=new W(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,uo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new Pc),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){fn(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){const o=t??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(e,o,s,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t,o=this.withClear&&!this.disabled&&!this.readonly,s=this.hasUpdated&&o&&(typeof this.value=="number"||this.value&&this.value.length>0);return p`
      <label
        part="form-control-label label"
        class=${D({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${T(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${T(this.placeholder)}
          minlength=${T(this.minlength)}
          maxlength=${T(this.maxlength)}
          min=${T(this.min)}
          max=${T(this.max)}
          step=${T(this.step)}
          .value=${Bi(this.value??"")}
          autocapitalize=${T(this.autocapitalize)}
          autocomplete=${T(this.autocomplete)}
          autocorrect=${T(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${T(this.pattern)}
          enterkeyhint=${T(this.enterkeyhint)}
          inputmode=${T(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${s?p`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?p`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?p`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:p`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${D({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};P.css=[Tt,Fe,$g];P.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};n([x("input")],P.prototype,"input",2);n([d()],P.prototype,"title",2);n([d({reflect:!0})],P.prototype,"type",2);n([w()],P.prototype,"value",1);n([d({attribute:"value",reflect:!0})],P.prototype,"defaultValue",2);n([d({reflect:!0})],P.prototype,"size",2);n([d({reflect:!0})],P.prototype,"appearance",2);n([d({type:Boolean,reflect:!0})],P.prototype,"pill",2);n([d()],P.prototype,"label",2);n([d({attribute:"hint"})],P.prototype,"hint",2);n([d({attribute:"with-clear",type:Boolean})],P.prototype,"withClear",2);n([d()],P.prototype,"placeholder",2);n([d({type:Boolean,reflect:!0})],P.prototype,"readonly",2);n([d({attribute:"password-toggle",type:Boolean})],P.prototype,"passwordToggle",2);n([d({attribute:"password-visible",type:Boolean})],P.prototype,"passwordVisible",2);n([d({attribute:"without-spin-buttons",type:Boolean})],P.prototype,"withoutSpinButtons",2);n([d({type:Boolean,reflect:!0})],P.prototype,"required",2);n([d()],P.prototype,"pattern",2);n([d({type:Number})],P.prototype,"minlength",2);n([d({type:Number})],P.prototype,"maxlength",2);n([d()],P.prototype,"min",2);n([d()],P.prototype,"max",2);n([d()],P.prototype,"step",2);n([d()],P.prototype,"autocapitalize",2);n([d()],P.prototype,"autocorrect",2);n([d()],P.prototype,"autocomplete",2);n([d({type:Boolean})],P.prototype,"autofocus",2);n([d()],P.prototype,"enterkeyhint",2);n([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],P.prototype,"spellcheck",2);n([d()],P.prototype,"inputmode",2);n([d({attribute:"with-label",type:Boolean})],P.prototype,"withLabel",2);n([d({attribute:"with-hint",type:Boolean})],P.prototype,"withHint",2);n([k("step",{waitUntilFirstUpdate:!0})],P.prototype,"handleStepChange",1);P=n([v("wa-input")],P);var Mc=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var Sg=C`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --show-duration: 100ms;
    --hide-duration: 100ms;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: 3;
  }

  :host([data-current-placement~='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement~='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement~='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;const mi=Math.min,Jt=Math.max,es=Math.round,So=Math.floor,Oe=e=>({x:e,y:e}),Eg={left:"right",right:"left",bottom:"top",top:"bottom"},Ag={start:"end",end:"start"};function Sa(e,t,i){return Jt(e,mi(t,i))}function Lr(e,t){return typeof e=="function"?e(t):e}function gi(e){return e.split("-")[0]}function _r(e){return e.split("-")[1]}function Nc(e){return e==="x"?"y":"x"}function mn(e){return e==="y"?"height":"width"}const Lg=new Set(["top","bottom"]);function We(e){return Lg.has(gi(e))?"y":"x"}function gn(e){return Nc(We(e))}function _g(e,t,i){i===void 0&&(i=!1);const r=_r(e),o=gn(e),s=mn(o);let a=o==="x"?r===(i?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=is(a)),[a,is(a)]}function Tg(e){const t=is(e);return[Ea(e),t,Ea(t)]}function Ea(e){return e.replace(/start|end/g,t=>Ag[t])}const vl=["left","right"],yl=["right","left"],zg=["top","bottom"],Rg=["bottom","top"];function Dg(e,t,i){switch(e){case"top":case"bottom":return i?t?yl:vl:t?vl:yl;case"left":case"right":return t?zg:Rg;default:return[]}}function Og(e,t,i,r){const o=_r(e);let s=Dg(gi(e),i==="start",r);return o&&(s=s.map(a=>a+"-"+o),t&&(s=s.concat(s.map(Ea)))),s}function is(e){return e.replace(/left|right|bottom|top/g,t=>Eg[t])}function Ig(e){return{top:0,right:0,bottom:0,left:0,...e}}function Fc(e){return typeof e!="number"?Ig(e):{top:e,right:e,bottom:e,left:e}}function rs(e){const{x:t,y:i,width:r,height:o}=e;return{width:r,height:o,top:i,left:t,right:t+r,bottom:i+o,x:t,y:i}}function xl(e,t,i){let{reference:r,floating:o}=e;const s=We(t),a=gn(t),l=mn(a),c=gi(t),h=s==="y",u=r.x+r.width/2-o.width/2,f=r.y+r.height/2-o.height/2,m=r[l]/2-o[l]/2;let g;switch(c){case"top":g={x:u,y:r.y-o.height};break;case"bottom":g={x:u,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:f};break;case"left":g={x:r.x-o.width,y:f};break;default:g={x:r.x,y:r.y}}switch(_r(t)){case"start":g[a]-=m*(i&&h?-1:1);break;case"end":g[a]+=m*(i&&h?-1:1);break}return g}async function Pg(e,t){var i;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:m=!1,padding:g=0}=Lr(t,e),b=Fc(g),E=l[m?f==="floating"?"reference":"floating":f],_=rs(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(E)))==null||i?E:E.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:h,rootBoundary:u,strategy:c})),A=f==="floating"?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),L=await(s.isElement==null?void 0:s.isElement($))?await(s.getScale==null?void 0:s.getScale($))||{x:1,y:1}:{x:1,y:1},S=rs(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:$,strategy:c}):A);return{top:(_.top-S.top+b.top)/L.y,bottom:(S.bottom-_.bottom+b.bottom)/L.y,left:(_.left-S.left+b.left)/L.x,right:(S.right-_.right+b.right)/L.x}}const Mg=async(e,t,i)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:a}=i,l=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:f}=xl(h,r,c),m=r,g={},b=0;for(let E=0;E<l.length;E++){var y;const{name:_,fn:A}=l[E],{x:$,y:L,data:S,reset:O}=await A({x:u,y:f,initialPlacement:r,placement:m,strategy:o,middlewareData:g,rects:h,platform:{...a,detectOverflow:(y=a.detectOverflow)!=null?y:Pg},elements:{reference:e,floating:t}});u=$??u,f=L??f,g={...g,[_]:{...g[_],...S}},O&&b<=50&&(b++,typeof O=="object"&&(O.placement&&(m=O.placement),O.rects&&(h=O.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):O.rects),{x:u,y:f}=xl(h,m,c)),E=-1)}return{x:u,y:f,placement:m,strategy:o,middlewareData:g}},Ng=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:r,placement:o,rects:s,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:u=0}=Lr(e,t)||{};if(h==null)return{};const f=Fc(u),m={x:i,y:r},g=gn(o),b=mn(g),y=await a.getDimensions(h),E=g==="y",_=E?"top":"left",A=E?"bottom":"right",$=E?"clientHeight":"clientWidth",L=s.reference[b]+s.reference[g]-m[g]-s.floating[b],S=m[g]-s.reference[g],O=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let it=O?O[$]:0;(!it||!await(a.isElement==null?void 0:a.isElement(O)))&&(it=l.floating[$]||s.floating[b]);const Gt=L/2-S/2,Et=it/2-y[b]/2-1,zt=mi(f[_],Et),de=mi(f[A],Et),Rt=zt,he=it-y[b]-de,ht=it/2-y[b]/2+Gt,Si=Sa(Rt,ht,he),Ve=!c.arrow&&_r(o)!=null&&ht!==Si&&s.reference[b]/2-(ht<Rt?zt:de)-y[b]/2<0,ue=Ve?ht<Rt?ht-Rt:ht-he:0;return{[g]:m[g]+ue,data:{[g]:Si,centerOffset:ht-Si-ue,...Ve&&{alignmentOffset:ue}},reset:Ve}}}),Fg=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,r;const{placement:o,middlewareData:s,rects:a,initialPlacement:l,platform:c,elements:h}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...E}=Lr(e,t);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const _=gi(o),A=We(l),$=gi(l)===l,L=await(c.isRTL==null?void 0:c.isRTL(h.floating)),S=m||($||!y?[is(l)]:Tg(l)),O=b!=="none";!m&&O&&S.push(...Og(l,y,b,L));const it=[l,...S],Gt=await c.detectOverflow(t,E),Et=[];let zt=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&Et.push(Gt[_]),f){const ht=_g(o,a,L);Et.push(Gt[ht[0]],Gt[ht[1]])}if(zt=[...zt,{placement:o,overflows:Et}],!Et.every(ht=>ht<=0)){var de,Rt;const ht=(((de=s.flip)==null?void 0:de.index)||0)+1,Si=it[ht];if(Si&&(!(f==="alignment"?A!==We(Si):!1)||zt.every(pe=>We(pe.placement)===A?pe.overflows[0]>0:!0)))return{data:{index:ht,overflows:zt},reset:{placement:Si}};let Ve=(Rt=zt.filter(ue=>ue.overflows[0]<=0).sort((ue,pe)=>ue.overflows[1]-pe.overflows[1])[0])==null?void 0:Rt.placement;if(!Ve)switch(g){case"bestFit":{var he;const ue=(he=zt.filter(pe=>{if(O){const ti=We(pe.placement);return ti===A||ti==="y"}return!0}).map(pe=>[pe.placement,pe.overflows.filter(ti=>ti>0).reduce((ti,ad)=>ti+ad,0)]).sort((pe,ti)=>pe[1]-ti[1])[0])==null?void 0:he[0];ue&&(Ve=ue);break}case"initialPlacement":Ve=l;break}if(o!==Ve)return{reset:{placement:Ve}}}return{}}}},Bg=new Set(["left","top"]);async function Ug(e,t){const{placement:i,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=gi(i),l=_r(i),c=We(i)==="y",h=Bg.has(a)?-1:1,u=s&&c?-1:1,f=Lr(t,e);let{mainAxis:m,crossAxis:g,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return l&&typeof b=="number"&&(g=l==="end"?b*-1:b),c?{x:g*u,y:m*h}:{x:m*h,y:g*u}}const Vg=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,r;const{x:o,y:s,placement:a,middlewareData:l}=t,c=await Ug(t,e);return a===((i=l.offset)==null?void 0:i.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:o+c.x,y:s+c.y,data:{...c,placement:a}}}}},qg=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:r,placement:o,platform:s}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:_=>{let{x:A,y:$}=_;return{x:A,y:$}}},...h}=Lr(e,t),u={x:i,y:r},f=await s.detectOverflow(t,h),m=We(gi(o)),g=Nc(m);let b=u[g],y=u[m];if(a){const _=g==="y"?"top":"left",A=g==="y"?"bottom":"right",$=b+f[_],L=b-f[A];b=Sa($,b,L)}if(l){const _=m==="y"?"top":"left",A=m==="y"?"bottom":"right",$=y+f[_],L=y-f[A];y=Sa($,y,L)}const E=c.fn({...t,[g]:b,[m]:y});return{...E,data:{x:E.x-i,y:E.y-r,enabled:{[g]:a,[m]:l}}}}}},Hg=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,r;const{placement:o,rects:s,platform:a,elements:l}=t,{apply:c=()=>{},...h}=Lr(e,t),u=await a.detectOverflow(t,h),f=gi(o),m=_r(o),g=We(o)==="y",{width:b,height:y}=s.floating;let E,_;f==="top"||f==="bottom"?(E=f,_=m===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(_=f,E=m==="end"?"top":"bottom");const A=y-u.top-u.bottom,$=b-u.left-u.right,L=mi(y-u[E],A),S=mi(b-u[_],$),O=!t.middlewareData.shift;let it=L,Gt=S;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(Gt=$),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(it=A),O&&!m){const zt=Jt(u.left,0),de=Jt(u.right,0),Rt=Jt(u.top,0),he=Jt(u.bottom,0);g?Gt=b-2*(zt!==0||de!==0?zt+de:Jt(u.left,u.right)):it=y-2*(Rt!==0||he!==0?Rt+he:Jt(u.top,u.bottom))}await c({...t,availableWidth:Gt,availableHeight:it});const Et=await a.getDimensions(l.floating);return b!==Et.width||y!==Et.height?{reset:{rects:!0}}:{}}}};function Cs(){return typeof window<"u"}function Tr(e){return Bc(e)?(e.nodeName||"").toLowerCase():"#document"}function ie(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Be(e){var t;return(t=(Bc(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Bc(e){return Cs()?e instanceof Node||e instanceof ie(e).Node:!1}function xe(e){return Cs()?e instanceof Element||e instanceof ie(e).Element:!1}function Pe(e){return Cs()?e instanceof HTMLElement||e instanceof ie(e).HTMLElement:!1}function kl(e){return!Cs()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ie(e).ShadowRoot}const Wg=new Set(["inline","contents"]);function po(e){const{overflow:t,overflowX:i,overflowY:r,display:o}=ke(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!Wg.has(o)}const jg=new Set(["table","td","th"]);function Kg(e){return jg.has(Tr(e))}const Gg=[":popover-open",":modal"];function $s(e){return Gg.some(t=>{try{return e.matches(t)}catch{return!1}})}const Xg=["transform","translate","scale","rotate","perspective"],Yg=["transform","translate","scale","rotate","perspective","filter"],Zg=["paint","layout","strict","content"];function Ss(e){const t=bn(),i=xe(e)?ke(e):e;return Xg.some(r=>i[r]?i[r]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||Yg.some(r=>(i.willChange||"").includes(r))||Zg.some(r=>(i.contain||"").includes(r))}function Qg(e){let t=bi(e);for(;Pe(t)&&!gr(t);){if(Ss(t))return t;if($s(t))return null;t=bi(t)}return null}function bn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Jg=new Set(["html","body","#document"]);function gr(e){return Jg.has(Tr(e))}function ke(e){return ie(e).getComputedStyle(e)}function Es(e){return xe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function bi(e){if(Tr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||kl(e)&&e.host||Be(e);return kl(t)?t.host:t}function Uc(e){const t=bi(e);return gr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Pe(t)&&po(t)?t:Uc(t)}function br(e,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const o=Uc(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),a=ie(o);if(s){const l=Aa(a);return t.concat(a,a.visualViewport||[],po(o)?o:[],l&&i?br(l):[])}return t.concat(o,br(o,[],i))}function Aa(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Vc(e){const t=ke(e);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Pe(e),s=o?e.offsetWidth:i,a=o?e.offsetHeight:r,l=es(i)!==s||es(r)!==a;return l&&(i=s,r=a),{width:i,height:r,$:l}}function wn(e){return xe(e)?e:e.contextElement}function ar(e){const t=wn(e);if(!Pe(t))return Oe(1);const i=t.getBoundingClientRect(),{width:r,height:o,$:s}=Vc(t);let a=(s?es(i.width):i.width)/r,l=(s?es(i.height):i.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const tb=Oe(0);function qc(e){const t=ie(e);return!bn()||!t.visualViewport?tb:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function eb(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==ie(e)?!1:t}function Ui(e,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=wn(e);let a=Oe(1);t&&(r?xe(r)&&(a=ar(r)):a=ar(e));const l=eb(s,i,r)?qc(s):Oe(0);let c=(o.left+l.x)/a.x,h=(o.top+l.y)/a.y,u=o.width/a.x,f=o.height/a.y;if(s){const m=ie(s),g=r&&xe(r)?ie(r):r;let b=m,y=Aa(b);for(;y&&r&&g!==b;){const E=ar(y),_=y.getBoundingClientRect(),A=ke(y),$=_.left+(y.clientLeft+parseFloat(A.paddingLeft))*E.x,L=_.top+(y.clientTop+parseFloat(A.paddingTop))*E.y;c*=E.x,h*=E.y,u*=E.x,f*=E.y,c+=$,h+=L,b=ie(y),y=Aa(b)}}return rs({width:u,height:f,x:c,y:h})}function As(e,t){const i=Es(e).scrollLeft;return t?t.left+i:Ui(Be(e)).left+i}function Hc(e,t){const i=e.getBoundingClientRect(),r=i.left+t.scrollLeft-As(e,i),o=i.top+t.scrollTop;return{x:r,y:o}}function ib(e){let{elements:t,rect:i,offsetParent:r,strategy:o}=e;const s=o==="fixed",a=Be(r),l=t?$s(t.floating):!1;if(r===a||l&&s)return i;let c={scrollLeft:0,scrollTop:0},h=Oe(1);const u=Oe(0),f=Pe(r);if((f||!f&&!s)&&((Tr(r)!=="body"||po(a))&&(c=Es(r)),Pe(r))){const g=Ui(r);h=ar(r),u.x=g.x+r.clientLeft,u.y=g.y+r.clientTop}const m=a&&!f&&!s?Hc(a,c):Oe(0);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-c.scrollLeft*h.x+u.x+m.x,y:i.y*h.y-c.scrollTop*h.y+u.y+m.y}}function rb(e){return Array.from(e.getClientRects())}function ob(e){const t=Be(e),i=Es(e),r=e.ownerDocument.body,o=Jt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Jt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-i.scrollLeft+As(e);const l=-i.scrollTop;return ke(r).direction==="rtl"&&(a+=Jt(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:a,y:l}}const Cl=25;function sb(e,t){const i=ie(e),r=Be(e),o=i.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,c=0;if(o){s=o.width,a=o.height;const u=bn();(!u||u&&t==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}const h=As(r);if(h<=0){const u=r.ownerDocument,f=u.body,m=getComputedStyle(f),g=u.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,b=Math.abs(r.clientWidth-f.clientWidth-g);b<=Cl&&(s-=b)}else h<=Cl&&(s+=h);return{width:s,height:a,x:l,y:c}}const ab=new Set(["absolute","fixed"]);function nb(e,t){const i=Ui(e,!0,t==="fixed"),r=i.top+e.clientTop,o=i.left+e.clientLeft,s=Pe(e)?ar(e):Oe(1),a=e.clientWidth*s.x,l=e.clientHeight*s.y,c=o*s.x,h=r*s.y;return{width:a,height:l,x:c,y:h}}function $l(e,t,i){let r;if(t==="viewport")r=sb(e,i);else if(t==="document")r=ob(Be(e));else if(xe(t))r=nb(t,i);else{const o=qc(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return rs(r)}function Wc(e,t){const i=bi(e);return i===t||!xe(i)||gr(i)?!1:ke(i).position==="fixed"||Wc(i,t)}function lb(e,t){const i=t.get(e);if(i)return i;let r=br(e,[],!1).filter(l=>xe(l)&&Tr(l)!=="body"),o=null;const s=ke(e).position==="fixed";let a=s?bi(e):e;for(;xe(a)&&!gr(a);){const l=ke(a),c=Ss(a);!c&&l.position==="fixed"&&(o=null),(s?!c&&!o:!c&&l.position==="static"&&!!o&&ab.has(o.position)||po(a)&&!c&&Wc(e,a))?r=r.filter(u=>u!==a):o=l,a=bi(a)}return t.set(e,r),r}function cb(e){let{element:t,boundary:i,rootBoundary:r,strategy:o}=e;const a=[...i==="clippingAncestors"?$s(t)?[]:lb(t,this._c):[].concat(i),r],l=a[0],c=a.reduce((h,u)=>{const f=$l(t,u,o);return h.top=Jt(f.top,h.top),h.right=mi(f.right,h.right),h.bottom=mi(f.bottom,h.bottom),h.left=Jt(f.left,h.left),h},$l(t,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function db(e){const{width:t,height:i}=Vc(e);return{width:t,height:i}}function hb(e,t,i){const r=Pe(t),o=Be(t),s=i==="fixed",a=Ui(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=Oe(0);function h(){c.x=As(o)}if(r||!r&&!s)if((Tr(t)!=="body"||po(o))&&(l=Es(t)),r){const g=Ui(t,!0,s,t);c.x=g.x+t.clientLeft,c.y=g.y+t.clientTop}else o&&h();s&&!r&&o&&h();const u=o&&!r&&!s?Hc(o,l):Oe(0),f=a.left+l.scrollLeft-c.x-u.x,m=a.top+l.scrollTop-c.y-u.y;return{x:f,y:m,width:a.width,height:a.height}}function Zs(e){return ke(e).position==="static"}function Sl(e,t){if(!Pe(e)||ke(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return Be(e)===i&&(i=i.ownerDocument.body),i}function jc(e,t){const i=ie(e);if($s(e))return i;if(!Pe(e)){let o=bi(e);for(;o&&!gr(o);){if(xe(o)&&!Zs(o))return o;o=bi(o)}return i}let r=Sl(e,t);for(;r&&Kg(r)&&Zs(r);)r=Sl(r,t);return r&&gr(r)&&Zs(r)&&!Ss(r)?i:r||Qg(e)||i}const ub=async function(e){const t=this.getOffsetParent||jc,i=this.getDimensions,r=await i(e.floating);return{reference:hb(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function pb(e){return ke(e).direction==="rtl"}const Po={convertOffsetParentRelativeRectToViewportRelativeRect:ib,getDocumentElement:Be,getClippingRect:cb,getOffsetParent:jc,getElementRects:ub,getClientRects:rb,getDimensions:db,getScale:ar,isElement:xe,isRTL:pb};function Kc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function fb(e,t){let i=null,r;const o=Be(e);function s(){var l;clearTimeout(r),(l=i)==null||l.disconnect(),i=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const h=e.getBoundingClientRect(),{left:u,top:f,width:m,height:g}=h;if(l||t(),!m||!g)return;const b=So(f),y=So(o.clientWidth-(u+m)),E=So(o.clientHeight-(f+g)),_=So(u),$={rootMargin:-b+"px "+-y+"px "+-E+"px "+-_+"px",threshold:Jt(0,mi(1,c))||1};let L=!0;function S(O){const it=O[0].intersectionRatio;if(it!==c){if(!L)return a();it?a(!1,it):r=setTimeout(()=>{a(!1,1e-7)},1e3)}it===1&&!Kc(h,e.getBoundingClientRect())&&a(),L=!1}try{i=new IntersectionObserver(S,{...$,root:o.ownerDocument})}catch{i=new IntersectionObserver(S,$)}i.observe(e)}return a(!0),s}function Gc(e,t,i,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,h=wn(e),u=o||s?[...h?br(h):[],...br(t)]:[];u.forEach(_=>{o&&_.addEventListener("scroll",i,{passive:!0}),s&&_.addEventListener("resize",i)});const f=h&&l?fb(h,i):null;let m=-1,g=null;a&&(g=new ResizeObserver(_=>{let[A]=_;A&&A.target===h&&g&&(g.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var $;($=g)==null||$.observe(t)})),i()}),h&&!c&&g.observe(h),g.observe(t));let b,y=c?Ui(e):null;c&&E();function E(){const _=Ui(e);y&&!Kc(y,_)&&i(),y=_,b=requestAnimationFrame(E)}return i(),()=>{var _;u.forEach(A=>{o&&A.removeEventListener("scroll",i),s&&A.removeEventListener("resize",i)}),f?.(),(_=g)==null||_.disconnect(),g=null,c&&cancelAnimationFrame(b)}}const Xc=Vg,Yc=qg,Zc=Fg,El=Hg,mb=Ng,Qc=(e,t,i)=>{const r=new Map,o={platform:Po,...i},s={...o.platform,_c:r};return Mg(e,t,{...o,platform:s})};function gb(e){return bb(e)}function Qs(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function bb(e){for(let t=e;t;t=Qs(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Qs(e);t;t=Qs(t)){if(!(t instanceof Element))continue;const i=getComputedStyle(t);if(i.display!=="contents"&&(i.position!=="static"||Ss(i)||t.tagName==="BODY"))return t}return null}function Al(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var Eo=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),X=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let r=0,o=0,s=0,a=0,l=0,c=0,h=0,u=0;i?e.top<t.top?(r=e.left,o=e.bottom,s=e.right,a=e.bottom,l=t.left,c=t.top,h=t.right,u=t.top):(r=t.left,o=t.bottom,s=t.right,a=t.bottom,l=e.left,c=e.top,h=e.right,u=e.top):e.left<t.left?(r=e.right,o=e.top,s=t.left,a=t.top,l=e.right,c=e.bottom,h=t.left,u=t.bottom):(r=t.right,o=t.top,s=e.left,a=e.top,l=t.right,c=t.bottom,h=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Al(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Gc(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;const e=[Xc({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(El({apply:({rects:r})=>{const o=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${r.reference.width}px`:"",this.popup.style.height=s?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let t;Eo&&!Al(this.anchor)&&this.boundary==="scroll"&&(t=br(this.anchorEl).filter(r=>r instanceof Element)),this.flip&&e.push(Zc({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Yc({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(El({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(mb({element:this.arrowEl,padding:this.arrowPadding}));const i=Eo?r=>Po.getOffsetParent(r,gb):Po.getOffsetParent;Qc(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:Eo?"absolute":"fixed",platform:{...Po,getOffsetParent:i}}).then(({x:r,y:o,middlewareData:s,placement:a})=>{const l=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${r}px`,top:`${o}px`}),this.arrow){const h=s.arrow.x,u=s.arrow.y;let f="",m="",g="",b="";if(this.arrowPlacement==="start"){const y=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=l?y:"",b=l?"":y}else if(this.arrowPlacement==="end"){const y=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=l?"":y,b=l?y:"",g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(b=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(b=typeof h=="number"?`${h}px`:"",f=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:f,right:m,bottom:g,left:b,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Mc)}render(){return p`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${D({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${D({popup:!0,"popup-active":this.active,"popup-fixed":!Eo,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?p`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};X.css=Sg;n([x(".popup")],X.prototype,"popup",2);n([x(".arrow")],X.prototype,"arrowEl",2);n([d()],X.prototype,"anchor",2);n([d({type:Boolean,reflect:!0})],X.prototype,"active",2);n([d({reflect:!0})],X.prototype,"placement",2);n([d()],X.prototype,"boundary",2);n([d({type:Number})],X.prototype,"distance",2);n([d({type:Number})],X.prototype,"skidding",2);n([d({type:Boolean})],X.prototype,"arrow",2);n([d({attribute:"arrow-placement"})],X.prototype,"arrowPlacement",2);n([d({attribute:"arrow-padding",type:Number})],X.prototype,"arrowPadding",2);n([d({type:Boolean})],X.prototype,"flip",2);n([d({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],X.prototype,"flipFallbackPlacements",2);n([d({attribute:"flip-fallback-strategy"})],X.prototype,"flipFallbackStrategy",2);n([d({type:Object})],X.prototype,"flipBoundary",2);n([d({attribute:"flip-padding",type:Number})],X.prototype,"flipPadding",2);n([d({type:Boolean})],X.prototype,"shift",2);n([d({type:Object})],X.prototype,"shiftBoundary",2);n([d({attribute:"shift-padding",type:Number})],X.prototype,"shiftPadding",2);n([d({attribute:"auto-size"})],X.prototype,"autoSize",2);n([d()],X.prototype,"sync",2);n([d({type:Object})],X.prototype,"autoSizeBoundary",2);n([d({attribute:"auto-size-padding",type:Number})],X.prototype,"autoSizePadding",2);n([d({attribute:"hover-bridge",type:Boolean})],X.prototype,"hoverBridge",2);X=n([v("wa-popup")],X);var wb=C`
  :host {
    --divider-width: 0.125rem;
    --handle-size: 2.5rem;

    display: block;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .before,
  .after {
    display: block;

    &::slotted(img),
    &::slotted(svg) {
      display: block;
      max-width: 100% !important;
      height: auto;
    }

    &::slotted(:not(img, svg)) {
      isolation: isolate;
    }
  }

  .after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  /* Disable pointer-events while dragging. This is especially important for iframes. */
  :host(:state(dragging)) {
    .before,
    .after {
      pointer-events: none;
    }
  }

  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--wa-color-surface-default);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.4);
    color: var(--wa-color-neutral-on-quiet);
    cursor: inherit;
    z-index: 10;
  }

  .handle:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
`;var wr=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.position=50}handleDrag(e){const{width:t}=this.getBoundingClientRect(),i=this.localize.dir()==="rtl";e.preventDefault(),Yr(this,{onMove:r=>{this.customStates.set("dragging",!0),this.position=parseFloat(N(r/t*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:e})}handleKeyDown(e){const t=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight")&&(o-=r),(t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft")&&(o+=r),e.key==="Home"&&(o=0),e.key==="End"&&(o=100),o=N(o,0,100),this.position=o}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${rt({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${rt({left:e?`${100-this.position}%`:`${this.position}%`})}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <div
          part="handle"
          class="handle"
          role="scrollbar"
          aria-valuenow=${this.position}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-controls="comparison"
          tabindex="0"
        >
          <slot name="handle">
            <wa-icon library="system" name="grip-vertical" variant="solid"></wa-icon>
          </slot>
        </div>
      </div>
    `}};wr.css=wb;n([x(".handle")],wr.prototype,"handle",2);n([d({type:Number,reflect:!0})],wr.prototype,"position",2);n([k("position",{waitUntilFirstUpdate:!0})],wr.prototype,"handlePositionChange",1);wr=n([v("wa-comparison")],wr);var vb=class extends Event{constructor(e){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var yb=C`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    padding: 0.5em;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  slot[name='success-icon'] {
    color: var(--wa-color-success-on-quiet);
  }

  slot[name='error-icon'] {
    color: var(--wa-color-danger-on-quiet);
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  .show {
    animation: show 100ms ease;
  }

  .hide {
    animation: show 100ms ease reverse;
  }

  @keyframes show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;var xt=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),i=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let o=this.from,s="";i?[o,s]=this.from.trim().split("."):r&&([o,s]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in t?t.getElementById(o):null;a?r?e=a.getAttribute(s)||"":i?e=a[s]||"":e=a.textContent||"":(this.showStatus("error"),this.dispatchEvent(new sr))}if(!e)this.showStatus("error"),this.dispatchEvent(new sr);else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.dispatchEvent(new vb({value:e}))}catch{this.showStatus("error"),this.dispatchEvent(new sr)}}async showStatus(e){const t=e==="success"?this.successIcon:this.errorIcon;await tt(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=e,t.hidden=!1,await tt(t,"show"),setTimeout(async()=>{await tt(t,"hide"),t.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await tt(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return p`
      <button
        class="button"
        part="button"
        type="button"
        id="copy-button"
        ?disabled=${this.disabled}
        @click=${this.handleCopy}
      >
        <!-- Render a visually hidden label to appease the accessibility checking gods -->
        <span class="wa-visually-hidden">${this.currentLabel}</span>
        <slot part="copy-icon" name="copy-icon">
          <wa-icon library="system" name="copy" variant="regular"></wa-icon>
        </slot>
        <slot part="success-icon" name="success-icon" variant="solid" hidden>
          <wa-icon library="system" name="check"></wa-icon>
        </slot>
        <slot part="error-icon" name="error-icon" variant="solid" hidden>
          <wa-icon library="system" name="xmark"></wa-icon>
        </slot>
        <wa-tooltip
          class=${D({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
          for="copy-button"
          placement=${this.tooltipPlacement}
          ?disabled=${this.disabled}
          exportparts="
            base:tooltip__base,
            base__popup:tooltip__base__popup,
            base__arrow:tooltip__base__arrow,
            body:tooltip__body
          "
          >${this.currentLabel}</wa-tooltip
        >
      </button>
    `}};xt.css=[Oc,yb];n([x('slot[name="copy-icon"]')],xt.prototype,"copyIcon",2);n([x('slot[name="success-icon"]')],xt.prototype,"successIcon",2);n([x('slot[name="error-icon"]')],xt.prototype,"errorIcon",2);n([x("wa-tooltip")],xt.prototype,"tooltip",2);n([w()],xt.prototype,"isCopying",2);n([w()],xt.prototype,"status",2);n([d()],xt.prototype,"value",2);n([d()],xt.prototype,"from",2);n([d({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);n([d({attribute:"copy-label"})],xt.prototype,"copyLabel",2);n([d({attribute:"success-label"})],xt.prototype,"successLabel",2);n([d({attribute:"error-label"})],xt.prototype,"errorLabel",2);n([d({attribute:"feedback-duration",type:Number})],xt.prototype,"feedbackDuration",2);n([d({attribute:"tooltip-placement"})],xt.prototype,"tooltipPlacement",2);xt=n([v("wa-copy-button")],xt);var xb=C`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip::part(arrow) {
    border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
  }
`;var Gi=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Xi=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};var Yi=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var Zi=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var at=class extends z{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=!!this.anchor?.matches(":hover"),t=this.matches(":hover");if(e||t)return;clearTimeout(this.hoverTimeout),e||t||(this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay))}}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=xs("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}addToAriaLabelledBy(e,t){const r=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);r.includes(t)||(r.push(t),e.setAttribute("aria-labelledby",r.join(" ")))}removeFromAriaLabelledBy(e,t){const o=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(s=>s!==t);o.length>0?e.setAttribute("aria-labelledby",o.join(" ")):e.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const e=new Gi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await tt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Zi)}else{const e=new Xi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await tt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Yi)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,i=this.anchor;if(t===i)return;const{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener("blur",this.handleBlur,{capture:!0,signal:r}),t.addEventListener("focus",this.handleFocus,{capture:!0,signal:r}),t.addEventListener("click",this.handleClick,{signal:r}),t.addEventListener("mouseover",this.handleMouseOver,{signal:r}),t.addEventListener("mouseout",this.handleMouseOut,{signal:r})),i&&(this.removeFromAriaLabelledBy(i,this.id),i.removeEventListener("blur",this.handleBlur,{capture:!0}),i.removeEventListener("focus",this.handleFocus,{capture:!0}),i.removeEventListener("click",this.handleClick),i.removeEventListener("mouseover",this.handleMouseOver),i.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ye(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,ye(this,"wa-after-hide")}render(){return p`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${D({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};at.css=xb;at.dependencies={"wa-popup":X};n([x("slot:not([name])")],at.prototype,"defaultSlot",2);n([x(".body")],at.prototype,"body",2);n([x("wa-popup")],at.prototype,"popup",2);n([d()],at.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],at.prototype,"disabled",2);n([d({type:Number})],at.prototype,"distance",2);n([d({type:Boolean,reflect:!0})],at.prototype,"open",2);n([d({type:Number})],at.prototype,"skidding",2);n([d({attribute:"show-delay",type:Number})],at.prototype,"showDelay",2);n([d({attribute:"hide-delay",type:Number})],at.prototype,"hideDelay",2);n([d()],at.prototype,"trigger",2);n([d({attribute:"without-arrow",type:Boolean,reflect:!0})],at.prototype,"withoutArrow",2);n([d()],at.prototype,"for",2);n([w()],at.prototype,"anchor",2);n([k("open",{waitUntilFirstUpdate:!0})],at.prototype,"handleOpenChange",1);n([k("for")],at.prototype,"handleForChange",1);n([k(["distance","placement","skidding"])],at.prototype,"handleOptionsChange",1);n([k("disabled")],at.prototype,"handleDisabledChange",1);at=n([v("wa-tooltip")],at);var kb=C`
  :host {
    --spacing: var(--wa-space-m);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: block;
  }

  details {
    display: block;
    overflow-anchor: none;
    border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-panel-border-radius);
    color: var(--wa-color-text-normal);

    /* Print styles */
    @media print {
      background: none;
      border: solid var(--wa-border-width-s) var(--wa-color-surface-border);

      summary {
        list-style: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) details {
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
  }

  :host([appearance='outlined']) details {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-border-quiet);
  }

  :host([disabled]) details {
    opacity: 0.5;
    cursor: not-allowed;
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing);
    padding: var(--spacing); /* Add padding here */
    border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));
    }
  }

  :host([open]) summary {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  /* 'Start' icon placement */
  :host([icon-placement='start']) summary {
    flex-direction: row-reverse;
    justify-content: start;
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-text-quiet);
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  :host([open]) [part~='icon'] {
    rotate: 90deg;
  }

  :host([open]:dir(rtl)) [part~='icon'] {
    rotate: -90deg;
  }

  :host([open]) slot[name='expand-icon'],
  :host(:not([open])) slot[name='collapse-icon'] {
    display: none;
  }

  .body.animating {
    overflow: hidden;
  }

  .content {
    display: block;
    padding-block-start: var(--spacing);
    padding-inline: var(--spacing); /* Add horizontal padding */
    padding-block-end: var(--spacing); /* Add bottom padding */
  }
`;var Pt=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(e){e.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(e){e.composedPath().some(r=>{if(!(r instanceof HTMLElement))return!1;const o=r.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(o)?!0:r instanceof J?!("disabled"in r)||!r.disabled:!1})||(e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(i=>{i!==this&&i.open&&(i.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const e=new Gi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const t=ts(getComputedStyle(this.body).getPropertyValue("--show-duration"));await Jo(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new Zi)}else{const e=new Xi;if(this.dispatchEvent(e),e.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const t=ts(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await Jo(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Yi)}}async show(){if(!(this.open||this.disabled))return this.open=!0,ye(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ye(this,"wa-after-hide")}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
      <details part="base">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${D({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};Pt.css=kb;n([x("details")],Pt.prototype,"details",2);n([x("summary")],Pt.prototype,"header",2);n([x(".body")],Pt.prototype,"body",2);n([x(".expand-icon-slot")],Pt.prototype,"expandIconSlot",2);n([w()],Pt.prototype,"isAnimating",2);n([d({type:Boolean,reflect:!0})],Pt.prototype,"open",2);n([d()],Pt.prototype,"summary",2);n([d({reflect:!0})],Pt.prototype,"name",2);n([d({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);n([d({reflect:!0})],Pt.prototype,"appearance",2);n([d({attribute:"icon-placement",reflect:!0})],Pt.prototype,"iconPlacement",2);n([k("open",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleOpenChange",1);Pt=n([v("wa-details")],Pt);var Cb=C`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`;function $b(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var La=new Set;function Sb(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Eb(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function os(e){if(La.add(e),!document.documentElement.classList.contains("wa-scroll-lock")){const t=Sb()+Eb();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),t<2&&(i=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",i),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${t}px`)}}function ss(e){La.delete(e),La.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function _a(e,t,i="vertical",r="smooth"){const o=$b(e,t),s=o.top+t.scrollTop,a=o.left+t.scrollLeft,l=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,h=t.scrollTop,u=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(a<l?t.scrollTo({left:a,behavior:r}):a+e.clientWidth>c&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:r})),(i==="vertical"||i==="both")&&(s<h?t.scrollTo({top:s,behavior:r}):s+e.clientHeight>u&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:r}))}function Ls(e){return e.split(" ").map(t=>t.trim()).filter(t=>t!=="")}var Ye=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.hasSlotController=new jt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),os(this))}disconnectedCallback(){super.disconnectedCallback(),ss(this),this.removeOpenListeners()}async requestClose(e){const t=new Xi({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,tt(this.dialog,"pulse");return}this.removeOpenListeners(),await tt(this.dialog,"hide"),this.open=!1,this.dialog.close(),ss(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new Yi)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains("hide")&&e.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(e){const i=e.target.closest('[data-dialog="close"]');i&&(e.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await tt(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const e=new Gi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),os(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await tt(this.dialog,"show"),this.dispatchEvent(new Zi)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return p`
      <dialog
        part="dialog"
        class=${D({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?p`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${i=>this.requestClose(i.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${t?p`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Ye.css=Cb;n([x(".dialog")],Ye.prototype,"dialog",2);n([d({type:Boolean,reflect:!0})],Ye.prototype,"open",2);n([d({reflect:!0})],Ye.prototype,"label",2);n([d({attribute:"without-header",type:Boolean,reflect:!0})],Ye.prototype,"withoutHeader",2);n([d({attribute:"light-dismiss",type:Boolean})],Ye.prototype,"lightDismiss",2);n([k("open",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleOpenChange",1);Ye=n([v("wa-dialog")],Ye);document.addEventListener("click",e=>{const t=e.target.closest("[data-dialog]");if(t instanceof Element){const[i,r]=Ls(t.getAttribute("data-dialog")||"");if(i==="open"&&r?.length){const s=t.getRootNode().getElementById(r);s?.localName==="wa-dialog"?s.open=!0:console.warn(`A dialog with an ID of "${r}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var Ab=C`
  :host {
    --color: var(--wa-color-surface-border);
    --width: var(--wa-border-width-s);
    --spacing: var(--wa-space-m);
  }

  :host(:not([orientation='vertical'])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([orientation='vertical']) {
    display: inline-block;
    height: 100%;
    border-inline-start: solid var(--width) var(--color);
    margin: 0 var(--spacing);
    min-block-size: 1lh;
  }
`;var eo=class extends z{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};eo.css=Ab;n([d({reflect:!0})],eo.prototype,"orientation",2);n([k("orientation")],eo.prototype,"handleVerticalChange",1);eo=n([v("wa-divider")],eo);var Lb=C`
  :host {
    --size: 25rem;
    --spacing: var(--wa-space-l);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    background-color: var(--wa-color-surface-raised);
    border: none;
    box-shadow: var(--wa-shadow-l);
    overflow: auto;
    padding: 0;
    margin: 0;
    animation-duration: var(--show-duration);
    animation-timing-function: ease;

    &.show::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }

    &.hide::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }

    &.show.top {
      animation: show-drawer-from-top var(--show-duration) ease;
    }

    &.hide.top {
      animation: show-drawer-from-top var(--hide-duration) ease reverse;
    }

    &.show.end {
      animation: show-drawer-from-end var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.hide.end {
      animation: show-drawer-from-end var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.show.bottom {
      animation: show-drawer-from-bottom var(--show-duration) ease;
    }

    &.hide.bottom {
      animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
    }

    &.show.start {
      animation: show-drawer-from-start var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.hide.start {
      animation: show-drawer-from-start var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .drawer:focus {
    outline: none;
  }

  .top {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .end {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .bottom {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .start {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .header {
    display: flex;
    flex-wrap: nowrap;
    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer::backdrop {
    /*
        NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
        remove the fallback values here.
      */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.01;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-drawer {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-drawer-from-top {
    from {
      opacity: 0;
      translate: 0 -100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-end {
    from {
      opacity: 0;
      translate: 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-bottom {
    from {
      opacity: 0;
      translate: 0 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-start {
    from {
      opacity: 0;
      translate: -100% 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .drawer {
      border: solid 1px white;
    }
  }
`;var Me=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.hasSlotController=new jt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),os(this))}disconnectedCallback(){super.disconnectedCallback(),ss(this),this.removeOpenListeners()}async requestClose(e){const t=new Xi({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,tt(this.drawer,"pulse");return}this.removeOpenListeners(),await tt(this.drawer,"hide"),this.open=!1,this.drawer.close(),ss(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new Yi)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),!this.drawer.classList.contains("hide")&&e.target===this.drawer&&this.requestClose(this.drawer)}handleDialogClick(e){const i=e.target.closest('[data-drawer="close"]');i&&(e.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(e){e.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await tt(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const e=new Gi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),os(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.drawer.focus()}),await tt(this.drawer,"show"),this.dispatchEvent(new Zi)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return p`
      <dialog
        part="dialog"
        class=${D({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?p`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${i=>this.requestClose(i.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${t?p`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Me.css=Lb;n([x(".drawer")],Me.prototype,"drawer",2);n([d({type:Boolean,reflect:!0})],Me.prototype,"open",2);n([d({reflect:!0})],Me.prototype,"label",2);n([d({reflect:!0})],Me.prototype,"placement",2);n([d({attribute:"without-header",type:Boolean,reflect:!0})],Me.prototype,"withoutHeader",2);n([d({attribute:"light-dismiss",type:Boolean})],Me.prototype,"lightDismiss",2);n([k("open",{waitUntilFirstUpdate:!0})],Me.prototype,"handleOpenChange",1);Me=n([v("wa-drawer")],Me);document.addEventListener("click",e=>{const t=e.target.closest("[data-drawer]");if(t instanceof Element){const[i,r]=Ls(t.getAttribute("data-drawer")||"");if(i==="open"&&r?.length){const s=t.getRootNode().getElementById(r);s?.localName==="wa-drawer"?s.open=!0:console.warn(`A drawer with an ID of "${r}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var _b=class extends Event{constructor(e){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};var Tb=C`
  :host {
    --show-duration: 50ms;
    --hide-duration: 50ms;
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet) !important;
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;function*Jc(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Jc(e.shadowRoot.activeElement)))}var Js=new Set,Bt=class extends z{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new W(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{const t=this.localize.dir()==="rtl";if(e.key==="Escape"){const u=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,u?.focus();return}const i=[...Jc()].find(u=>u.localName==="wa-dropdown-item"),r=i?.localName==="wa-dropdown-item",o=this.getCurrentSubmenuItem(),s=!!o;let a,l,c;s?(a=this.getSubmenuItems(o),l=a.find(u=>u.active||u===i),c=l?a.indexOf(l):-1):(a=this.getItems(),l=a.find(u=>u.active||u===i),c=l?a.indexOf(l):-1);let h;if(e.key==="ArrowUp"&&(e.preventDefault(),e.stopPropagation(),c>0?h=a[c-1]:h=a[a.length-1]),e.key==="ArrowDown"&&(e.preventDefault(),e.stopPropagation(),c!==-1&&c<a.length-1?h=a[c+1]:h=a[0]),e.key===(t?"ArrowLeft":"ArrowRight")&&r&&l&&l.hasSubmenu){e.preventDefault(),e.stopPropagation(),l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((f,m)=>f.active=m===0),u[0].focus())},0);return}if(e.key===(t?"ArrowRight":"ArrowLeft")&&s){e.preventDefault(),e.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus(),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(m=>{m!==u&&(m.active=!1)})},0));return}if((e.key==="Home"||e.key==="End")&&(e.preventDefault(),e.stopPropagation(),h=e.key==="Home"?a[0]:a[a.length-1]),e.key==="Tab"&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=e.key,a.some(u=>{const f=(u.textContent||"").trim().toLowerCase(),m=this.userTypedQuery.trim().toLowerCase();return f.startsWith(m)?(h=u,!0):!1})),h){e.preventDefault(),e.stopPropagation(),a.forEach(u=>u.active=u===h),h.focus();return}(e.key==="Enter"||e.key===" "&&this.userTypedQuery==="")&&r&&l&&(e.preventDefault(),e.stopPropagation(),l.hasSubmenu?(l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((f,m)=>f.active=m===0),u[0].focus())},0)):this.makeSelection(l))},this.handleDocumentPointerDown=e=>{e.composedPath().some(r=>r instanceof HTMLElement?r===this||r.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{const t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;const i=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl",o=r?i.right:i.left,s=r?Math.max(e.clientX,o):Math.min(e.clientX,o),a=Math.max(i.top,Math.min(e.clientY,i.bottom));t.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${s}px`),t.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${a}px`);const l=e.composedPath(),c=t.matches(":hover"),h=!!t.submenuElement?.matches(":hover"),u=c||!!l.find(m=>m===t),f=h||!!l.find(m=>m instanceof HTMLElement&&m.closest('[part="submenu"]')===t.submenuElement);!u&&!f&&setTimeout(()=>{!c&&!h&&(t.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(e){if(e.has("open")){const t=e.get("open");if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has("size")&&this.syncItemSizes()}getItems(e=!1){const t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(i=>i.localName==="wa-dropdown-item");return e?t:t.filter(i=>!i.disabled)}getSubmenuItems(e,t=!1){const i=e.shadowRoot?.querySelector('slot[name="submenu"]')||e.querySelector('slot[name="submenu"]');if(!i)return[];const r=i.assignedElements({flatten:!0}).filter(o=>o.localName==="wa-dropdown-item");return t?r:r.filter(o=>!o.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(t=>t.localName==="wa-dropdown-item").forEach(t=>t.size=this.size)}addToSubmenuStack(e){const t=this.openSubmenuStack.indexOf(e);t!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1):this.openSubmenuStack.push(e)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(t=>{t.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){const t=e.closest('wa-dropdown-item:not([slot="submenu"])');let i;t?i=this.getSubmenuItems(t,!0):i=this.getItems(!0),i.forEach(r=>{r!==e&&r.submenuOpen&&(r.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;const t=new Gi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}if(this.popup.active)return;Js.forEach(r=>r.open=!1),this.popup.active=!0,this.open=!0,Js.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await tt(this.menu,"show");const i=this.getItems();i.length>0&&(i.forEach((r,o)=>r.active=o===0),i[0].focus()),this.dispatchEvent(new Zi)}async hideMenu(){if(!this.popup||!this.menu)return;const e=new Xi({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,Js.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await tt(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Yi)}handleMenuClick(e){const t=e.target.closest("wa-dropdown-item");if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.submenuOpen=!0),e.stopPropagation();return}this.makeSelection(t)}}async handleMenuSlotChange(){const e=this.getItems(!0);await Promise.all(e.map(r=>r.updateComplete)),this.syncItemSizes();const t=e.some(r=>r.type==="checkbox"),i=e.some(r=>r.hasSubmenu);e.forEach((r,o)=>{r.active=o===0,r.checkboxAdjacent=t,r.submenuAdjacent=i})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){const t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);const t=Gc(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);const i=e.submenuElement.querySelector('slot[name="submenu"]');i&&(i.removeEventListener("slotchange",Bt.handleSubmenuSlotChange),i.addEventListener("slotchange",Bt.handleSubmenuSlotChange),Bt.handleSubmenuSlotChange({target:i}))}static handleSubmenuSlotChange(e){const t=e.target;if(!t)return;const i=t.assignedElements().filter(s=>s.localName==="wa-dropdown-item");if(i.length===0)return;const r=i.some(s=>s.hasSubmenu),o=i.some(s=>s.type==="checkbox");i.forEach(s=>{s.submenuAdjacent=r,s.checkboxAdjacent=o})}processSubmenuItems(e){if(!e.submenuElement)return;const t=this.getSubmenuItems(e,!0),i=t.some(r=>r.hasSubmenu);t.forEach(r=>{r.submenuAdjacent=i})}cleanupSubmenuPosition(e){const t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;const i=this.localize.dir()==="rtl"?"left-start":"right-start";Qc(e,e.submenuElement,{placement:i,middleware:[Xc({mainAxis:0,crossAxis:-5}),Zc({fallbackStrategy:"bestFit"}),Yc({padding:8})]}).then(({x:r,y:o,placement:s})=>{e.submenuElement.setAttribute("data-placement",s),Object.assign(e.submenuElement.style,{left:`${r}px`,top:`${o}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){e.submenuElement.style.setProperty("--safe-triangle-visible","none");return}e.submenuElement.style.setProperty("--safe-triangle-visible","block");const i=e.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${r?i.right:i.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${i.top}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${r?i.right:i.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${i.bottom}px`)}makeSelection(e){const t=this.getTrigger();if(e.disabled)return;e.type==="checkbox"&&(e.checked=!e.checked);const i=new _b({item:e});this.dispatchEvent(i),i.defaultPrevented||(this.open=!1,t?.focus())}async syncAriaAttributes(){const e=this.getTrigger();let t;e&&(e.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await e.updateComplete,t=e.shadowRoot.querySelector('[part="base"]')):t=e,t.hasAttribute("id")||t.setAttribute("id",xs("wa-dropdown-trigger-")),t.setAttribute("aria-haspopup","menu"),t.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false"))}render(){let e=this.hasUpdated?this.popup?.active:this.open;return p`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${e}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};Bt.css=[Tt,Tb];n([x("slot:not([name])")],Bt.prototype,"defaultSlot",2);n([x("#menu")],Bt.prototype,"menu",2);n([x("wa-popup")],Bt.prototype,"popup",2);n([d({type:Boolean,reflect:!0})],Bt.prototype,"open",2);n([d({reflect:!0})],Bt.prototype,"size",2);n([d({reflect:!0})],Bt.prototype,"placement",2);n([d({type:Number})],Bt.prototype,"distance",2);n([d({type:Number})],Bt.prototype,"skidding",2);Bt=n([v("wa-dropdown")],Bt);var zb=C`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, 50ms) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, 50ms) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;var Mt=class extends z{constructor(){super(...arguments),this.hasSlotController=new jt(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(e){e.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),e.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),e.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),e.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),e.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){const e=this.submenuElement;!this.hasSubmenu||!e||!this.isConnected||(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await tt(e,"show"),setTimeout(()=>{const t=this.getSubmenuItems();t.length>0&&(t.forEach((i,r)=>i.active=r===0),t[0].focus())},0))}notifyParentOfOpening(){const e=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);const t=this.parentElement;t&&[...t.children].filter(r=>r!==this&&r.localName==="wa-dropdown-item"&&r.getAttribute("slot")===this.getAttribute("slot")&&r.submenuOpen).forEach(r=>{r.submenuOpen=!1})}async closeSubmenu(){const e=this.submenuElement;!this.hasSubmenu||!e||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),e.hidden||(await tt(e,"hide"),e?.isConnected&&(e.hidden=!0,e.removeAttribute("data-visible"),e.hidePopover?.())))}getSubmenuItems(){return[...this.children].filter(e=>e.localName==="wa-dropdown-item"&&e.getAttribute("slot")==="submenu"&&!e.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return p`
      ${this.type==="checkbox"?p`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?p`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?p`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:""}
    `}};Mt.css=zb;n([x("#submenu")],Mt.prototype,"submenuElement",2);n([d({type:Boolean})],Mt.prototype,"active",2);n([d({reflect:!0})],Mt.prototype,"variant",2);n([d({reflect:!0})],Mt.prototype,"size",2);n([d({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],Mt.prototype,"checkboxAdjacent",2);n([d({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],Mt.prototype,"submenuAdjacent",2);n([d()],Mt.prototype,"value",2);n([d({reflect:!0})],Mt.prototype,"type",2);n([d({type:Boolean})],Mt.prototype,"checked",2);n([d({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],Mt.prototype,"submenuOpen",2);n([w()],Mt.prototype,"hasSubmenu",2);Mt=n([v("wa-dropdown-item")],Mt);var io=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?e:t,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),o=i[r]+this.unit,s=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:o,unitDisplay:this.display})}};n([d({type:Number})],io.prototype,"value",2);n([d()],io.prototype,"unit",2);n([d()],io.prototype,"display",2);io=n([v("wa-format-bytes")],io);var Vt=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(e.getMilliseconds()))return;const i=this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t});return p`<time datetime=${e.toISOString()}>${i}</time>`}};n([d()],Vt.prototype,"date",2);n([d()],Vt.prototype,"weekday",2);n([d()],Vt.prototype,"era",2);n([d()],Vt.prototype,"year",2);n([d()],Vt.prototype,"month",2);n([d()],Vt.prototype,"day",2);n([d()],Vt.prototype,"hour",2);n([d()],Vt.prototype,"minute",2);n([d()],Vt.prototype,"second",2);n([d({attribute:"time-zone-name"})],Vt.prototype,"timeZoneName",2);n([d({attribute:"time-zone"})],Vt.prototype,"timeZone",2);n([d({attribute:"hour-format"})],Vt.prototype,"hourFormat",2);Vt=n([v("wa-format-date")],Vt);var ne=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};n([d({type:Number})],ne.prototype,"value",2);n([d()],ne.prototype,"type",2);n([d({attribute:"without-grouping",type:Boolean})],ne.prototype,"withoutGrouping",2);n([d()],ne.prototype,"currency",2);n([d({attribute:"currency-display"})],ne.prototype,"currencyDisplay",2);n([d({attribute:"minimum-integer-digits",type:Number})],ne.prototype,"minimumIntegerDigits",2);n([d({attribute:"minimum-fraction-digits",type:Number})],ne.prototype,"minimumFractionDigits",2);n([d({attribute:"maximum-fraction-digits",type:Number})],ne.prototype,"maximumFractionDigits",2);n([d({attribute:"minimum-significant-digits",type:Number})],ne.prototype,"minimumSignificantDigits",2);n([d({attribute:"maximum-significant-digits",type:Number})],ne.prototype,"maximumSignificantDigits",2);ne=n([v("wa-format-number")],ne);var Ll=class extends Event{constructor(e){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var Rb=C`
  :host {
    display: block;
  }
`;var ta=new Map;function Db(e,t="cors"){const i=ta.get(e);if(i!==void 0)return Promise.resolve(i);const r=fetch(e,{mode:t}).then(async o=>{const s={ok:o.ok,status:o.status,html:await o.text()};return ta.set(e,s),s});return ta.set(e,r),r}var Vi=class extends z{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(i=>t.setAttribute(i.name,i.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await Db(e,this.mode);if(e!==this.src)return;if(!t.ok){this.dispatchEvent(new Ll({status:t.status}));return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.dispatchEvent(new dn)}catch{this.dispatchEvent(new Ll({status:-1}))}}render(){return p`<slot></slot>`}};Vi.css=Rb;n([d()],Vi.prototype,"src",2);n([d()],Vi.prototype,"mode",2);n([d({attribute:"allow-scripts",type:Boolean})],Vi.prototype,"allowScripts",2);n([k("src")],Vi.prototype,"handleSrcChange",1);Vi=n([v("wa-include")],Vi);var Ob=class extends Event{constructor(e){super("wa-intersect",{bubbles:!1,cancelable:!1,composed:!0}),this.detail=e}};var Ib=C`
  :host {
    display: contents;
  }
`;var Ce=class extends z{constructor(){super(...arguments),this.intersectionObserver=null,this.observedElements=new Map,this.root=null,this.rootMargin="0px",this.threshold="0",this.intersectClass="",this.once=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}parseThreshold(){return Ls(this.threshold).map(t=>{const i=parseFloat(t);return isNaN(i)?0:N(i,0,1)})}resolveRoot(){if(!this.root)return null;try{const t=this.getRootNode().getElementById(this.root);return t||console.warn(`Root element with ID "${this.root}" could not be found.`,this),t}catch{return console.warn(`Invalid selector for root: "${this.root}"`,this),null}}startObserver(){if(this.stopObserver(),this.disabled)return;const e=this.parseThreshold(),t=this.resolveRoot();this.intersectionObserver=new IntersectionObserver(r=>{r.forEach(o=>{const s=this.observedElements.get(o.target)??!1,a=o.isIntersecting;this.observedElements.set(o.target,a),this.intersectClass&&(a?o.target.classList.add(this.intersectClass):o.target.classList.remove(this.intersectClass));const l=new Ob({entry:o});this.dispatchEvent(l),a&&!s&&this.once&&(this.intersectionObserver?.unobserve(o.target),this.observedElements.delete(o.target))})},{root:t,rootMargin:this.rootMargin,threshold:e});const i=this.shadowRoot.querySelector("slot");i!==null&&i.assignedElements({flatten:!0}).forEach(o=>{this.intersectionObserver?.observe(o),this.observedElements.set(o,!1)})}stopObserver(){this.intersectClass&&this.observedElements.forEach((e,t)=>{t.classList.remove(this.intersectClass)}),this.intersectionObserver?.disconnect(),this.intersectionObserver=null,this.observedElements.clear()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleOptionsChange(){this.startObserver()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ce.css=Ib;n([d()],Ce.prototype,"root",2);n([d({attribute:"root-margin"})],Ce.prototype,"rootMargin",2);n([d()],Ce.prototype,"threshold",2);n([d({attribute:"intersect-class"})],Ce.prototype,"intersectClass",2);n([d({type:Boolean,reflect:!0})],Ce.prototype,"once",2);n([d({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);n([k("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);n([k("root",{waitUntilFirstUpdate:!0}),k("rootMargin",{waitUntilFirstUpdate:!0}),k("threshold",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOptionsChange",1);Ce=n([v("wa-intersection-observer")],Ce);var Pb=class extends Event{constructor(e){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var Mb=C`
  :host {
    display: contents;
  }
`;var $e=class extends z{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.dispatchEvent(new Pb({mutationList:e}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return p` <slot></slot> `}};$e.css=Mb;n([d({reflect:!0})],$e.prototype,"attr",2);n([d({attribute:"attr-old-value",type:Boolean,reflect:!0})],$e.prototype,"attrOldValue",2);n([d({attribute:"char-data",type:Boolean,reflect:!0})],$e.prototype,"charData",2);n([d({attribute:"char-data-old-value",type:Boolean,reflect:!0})],$e.prototype,"charDataOldValue",2);n([d({attribute:"child-list",type:Boolean,reflect:!0})],$e.prototype,"childList",2);n([d({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);n([k("disabled")],$e.prototype,"handleDisabledChange",1);n([k("attr",{waitUntilFirstUpdate:!0}),k("attr-old-value",{waitUntilFirstUpdate:!0}),k("char-data",{waitUntilFirstUpdate:!0}),k("char-data-old-value",{waitUntilFirstUpdate:!0}),k("childList",{waitUntilFirstUpdate:!0})],$e.prototype,"handleChange",1);$e=n([v("wa-mutation-observer")],$e);var Nb=C`
  .number-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: inherit;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    padding: 0;

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    /* Style disabled inputs */
    &:has(input:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    .number-field {
      background-color: var(--wa-form-control-background-color);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-quiet);
          background-color: var(--wa-color-neutral-fill-quiet);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-quiet), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-quiet), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-fill-quiet);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled-outlined']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([pill]) {
    .number-field,
    .stepper {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  .number-field {
    /* Show autofill styles over the entire number field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input {
      flex: auto;
      height: 100%;
      width: auto;
      min-width: 0;
      margin: 0;
      padding: 0 var(--wa-form-control-padding-inline);
      outline: none;
      box-shadow: none;
      border: none;
      background-color: transparent;
      font: inherit;
      transition: inherit;
      cursor: inherit;
      -webkit-appearance: none;

      /* Center-align and use tabular numbers for better alignment */
      text-align: center;
      font-variant-numeric: tabular-nums;

      /* Hide the number spinners in Firefox */
      -moz-appearance: textfield;

      /* Hide the number spinners in Chrome/Safari */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        display: none;
      }

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:focus {
      outline: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 1;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start {
    justify-content: start;
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .end {
    justify-content: end;
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  /*
   * Steppers - horizontal layout with minus on start, plus on end
   */

  .stepper {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    height: calc(100% - var(--wa-form-control-border-width) * 2);
    flex: 0 0 auto;
    border: none;
    border-radius: calc(var(--wa-form-control-border-radius) - var(--wa-form-control-border-width) * 2);
    background: transparent;
    cursor: pointer;
    margin: var(--wa-form-control-border-width);
    padding: 0;
    font-size: inherit;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
    }
  }

  :host([without-steppers]) .stepper {
    display: none;
  }
`;var Q=class extends J{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new jt(this,"hint","label"),this.localize=new W(this),this.title="",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.placeholder="",this.readonly=!1,this.required=!1,this.step=1,this.withoutSteppers=!1,this.inputmode="numeric",this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,uo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isAtMin(){if(this.min===void 0)return!1;const e=parseFloat(this.value||"");return!isNaN(e)&&e<=this.min}get isAtMax(){if(this.max===void 0)return!1;const e=parseFloat(this.value||"");return!isNaN(e)&&e>=this.max}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(){this.value=this.input.value}handleKeyDown(e){fn(e,this),(e.key==="ArrowUp"||e.key==="ArrowDown")&&requestAnimationFrame(()=>{this.value!==this.input.value&&(this.value=this.input.value)})}handleStepperClick(e){this.disabled||this.readonly||(e==="up"?this.input.stepUp():this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.input.focus())}maintainFocusOnPointerDown(e){e.preventDefault(),this.input.focus()}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t;return p`
      <label
        part="form-control-label label"
        class=${D({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="number-field">
        ${this.withoutSteppers?"":p`
              <button
                part="stepper stepper-decrement"
                class="stepper stepper-decrement"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("decrement")}
                ?disabled=${this.disabled||this.readonly||this.isAtMin}
                @pointerdown=${this.maintainFocusOnPointerDown}
                @click=${()=>this.handleStepperClick("down")}
              >
                <slot name="decrement-icon">
                  <wa-icon name="minus" library="system"></wa-icon>
                </slot>
              </button>
            `}

        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type="number"
          inputmode=${T(this.inputmode)}
          title=${this.title}
          name=${T(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${T(this.placeholder)}
          min=${T(this.min)}
          max=${T(this.max)}
          step=${T(this.step)}
          .value=${Bi(this.value??"")}
          autocomplete=${T(this.autocomplete)}
          ?autofocus=${this.autofocus}
          enterkeyhint=${T(this.enterkeyhint)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        <slot name="end" part="end" class="end"></slot>

        ${this.withoutSteppers?"":p`
              <button
                part="stepper stepper-increment"
                class="stepper stepper-increment"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("increment")}
                ?disabled=${this.disabled||this.readonly||this.isAtMax}
                @pointerdown=${this.maintainFocusOnPointerDown}
                @click=${()=>this.handleStepperClick("up")}
              >
                <slot name="increment-icon">
                  <wa-icon name="plus" library="system"></wa-icon>
                </slot>
              </button>
            `}
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${D({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};Q.css=[Tt,Fe,Nb];Q.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};n([x("input")],Q.prototype,"input",2);n([d()],Q.prototype,"title",2);n([w()],Q.prototype,"value",1);n([d({attribute:"value",reflect:!0})],Q.prototype,"defaultValue",2);n([d({reflect:!0})],Q.prototype,"size",2);n([d({reflect:!0})],Q.prototype,"appearance",2);n([d({type:Boolean,reflect:!0})],Q.prototype,"pill",2);n([d()],Q.prototype,"label",2);n([d({attribute:"hint"})],Q.prototype,"hint",2);n([d()],Q.prototype,"placeholder",2);n([d({type:Boolean,reflect:!0})],Q.prototype,"readonly",2);n([d({type:Boolean,reflect:!0})],Q.prototype,"required",2);n([d({type:Number})],Q.prototype,"min",2);n([d({type:Number})],Q.prototype,"max",2);n([d()],Q.prototype,"step",2);n([d({attribute:"without-steppers",type:Boolean})],Q.prototype,"withoutSteppers",2);n([d()],Q.prototype,"autocomplete",2);n([d({type:Boolean})],Q.prototype,"autofocus",2);n([d()],Q.prototype,"enterkeyhint",2);n([d()],Q.prototype,"inputmode",2);n([d({attribute:"with-label",type:Boolean})],Q.prototype,"withLabel",2);n([d({attribute:"with-hint",type:Boolean})],Q.prototype,"withHint",2);n([k("step",{waitUntilFirstUpdate:!0})],Q.prototype,"handleStepChange",1);Q=n([v("wa-number-input")],Q);var Fb=C`
  :host {
    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    line-height: var(--wa-line-height-condensed);
    transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host([disabled]:state(current)) {
    background-color: var(--wa-color-brand-fill-loud);
    color: var(--wa-color-brand-on-loud);
    opacity: 1;
  }

  :host([disabled]) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;function Hr(e,t=0){if(!e||!globalThis.Node)return"";if(typeof e[Symbol.iterator]=="function")return(Array.isArray(e)?e:[...e]).map(o=>Hr(o,--t)).join("");let i=e;if(i.nodeType===Node.TEXT_NODE)return i.textContent??"";if(i.nodeType===Node.ELEMENT_NODE){let r=i;if(r.hasAttribute("slot")||r.matches("style, script"))return"";if(r instanceof HTMLSlotElement){let o=r.assignedNodes({flatten:!0});if(o.length>0)return Hr(o,--t)}return t>-1?Hr(r,--t):r.textContent??""}return i.hasChildNodes()?Hr(i.childNodes,--t):""}var Se=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=e=>{e.type==="mouseenter"?this.customStates.set("hover",!0):e.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(e){const t=this._label;this._label=e||"",this._label!==t&&this.requestUpdate("label",t)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{const e=this.closest("wa-select");e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())}),customElements.whenDefined("wa-combobox").then(()=>{const e=this.closest("wa-combobox");e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())})):this.isInitialized=!0}willUpdate(e){if(e.has("defaultSelected")&&!this.closest("wa-combobox, wa-select")?.hasInteracted){const t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}super.willUpdate(e)}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),e.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),e.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let e=this.defaultLabel;this.defaultLabel=Hr(this).trim();let t=this.defaultLabel!==e;return!this._label&&t&&this.requestUpdate("label",e),t}render(){return p`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};Se.css=Fb;n([x(".label")],Se.prototype,"defaultSlot",2);n([w()],Se.prototype,"current",2);n([d({reflect:!0})],Se.prototype,"value",2);n([d({type:Boolean})],Se.prototype,"disabled",2);n([d({type:Boolean,attribute:!1})],Se.prototype,"selected",2);n([d({type:Boolean,attribute:"selected"})],Se.prototype,"defaultSelected",2);n([d()],Se.prototype,"label",1);n([w()],Se.prototype,"defaultLabel",2);Se=n([v("wa-option")],Se);var Bb=C`
  :host {
    --arrow-size: 0.375rem;
    --max-width: 25rem;
    --show-duration: 100ms;
    --hide-duration: 100ms;

    /* Internal calculated properties */
    --arrow-diagonal-size: calc((var(--arrow-size) * sin(45deg)));

    display: contents;

    /** Defaults for inherited CSS properties */
    font-size: var(--wa-font-size-m);
    line-height: var(--wa-line-height-normal);
    text-align: start;
    white-space: normal;
  }

  /* The native dialog element */
  .dialog {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    overflow: visible;
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &[open] {
      display: block;
    }
  }

  /* The <wa-popup> element */
  .popover {
    --arrow-size: inherit;
    --show-duration: inherit;
    --hide-duration: inherit;

    pointer-events: auto;

    &::part(arrow) {
      background-color: var(--wa-color-surface-default);
      border-top: none;
      border-left: none;
      border-bottom: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      border-right: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      box-shadow: none;
    }
  }

  .popover[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .popover[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .popover[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .popover[placement^='right']::part(popup) {
    transform-origin: left;
  }

  /* Body */
  .body {
    display: flex;
    flex-direction: column;
    width: max-content;
    max-width: var(--max-width);
    padding: var(--wa-space-l);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-l);
    color: var(--wa-color-text-normal);
    user-select: none;
    -webkit-user-select: none;
  }
`;var ea=new Set,kt=class extends z{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=e=>{e.target.closest('[data-popover="close"]')&&(e.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=e=>{this.anchor&&e.composedPath().includes(this.anchor)||e.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=xs("wa-popover-")),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(e){e.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const e=new Gi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}ea.forEach(t=>t.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,ea.add(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await tt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Zi)}else{const e=new Xi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),ea.delete(this),await tt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Yi)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,i=this.anchor;if(t===i)return;const{signal:r}=this.eventController;t&&t.addEventListener("click",this.handleAnchorClick,{signal:r}),i&&i.removeEventListener("click",this.handleAnchorClick),this.anchor=t,this.for&&!t&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,ye(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,ye(this,"wa-after-hide")}render(){return p`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${D({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};kt.css=Bb;kt.dependencies={"wa-popup":X};n([x("dialog")],kt.prototype,"dialog",2);n([x(".body")],kt.prototype,"body",2);n([x("wa-popup")],kt.prototype,"popup",2);n([w()],kt.prototype,"anchor",2);n([d()],kt.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],kt.prototype,"open",2);n([d({type:Number})],kt.prototype,"distance",2);n([d({type:Number})],kt.prototype,"skidding",2);n([d()],kt.prototype,"for",2);n([d({attribute:"without-arrow",type:Boolean,reflect:!0})],kt.prototype,"withoutArrow",2);n([k("open",{waitUntilFirstUpdate:!0})],kt.prototype,"handleOpenChange",1);n([k("for")],kt.prototype,"handleForChange",1);n([k(["distance","placement","skidding"])],kt.prototype,"handleOptionsChange",1);kt=n([v("wa-popover")],kt);var Ub=C`
  :host {
    --track-height: 1rem;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);

    display: flex;
  }

  .progress-bar {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    overflow: hidden;
    height: var(--track-height);
    border-radius: var(--wa-border-radius-pill);
    background-color: var(--track-color);
    color: var(--wa-color-brand-on-loud);
    font-size: var(--wa-font-size-s);
  }

  .indicator {
    width: var(--percentage);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--indicator-color);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1;
    font-weight: var(--wa-font-weight-semibold);
    transition: all var(--wa-transition-slow, 200ms) var(--wa-transition-easing, ease);
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  :host([indeterminate]) .indicator {
    position: absolute;
    inset-block: 0;
    inline-size: 50%;
    animation: wa-progress-indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--wa-color-surface-default);
    }

    .indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes wa-progress-indeterminate {
    0% {
      inset-inline-start: -50%;
    }

    75%,
    100% {
      inset-inline-start: 100%;
    }
  }
`;var vr=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.indeterminate=!1,this.label=""}updated(e){e.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${N(this.value,0,100)}%`)})}render(){return p`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${T(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":p` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};vr.css=Ub;n([d({type:Number,reflect:!0})],vr.prototype,"value",2);n([d({type:Boolean,reflect:!0})],vr.prototype,"indeterminate",2);n([d()],vr.prototype,"label",2);vr=n([v("wa-progress-bar")],vr);var Vb=C`
  :host {
    --size: 8rem;
    --track-width: 0.25em; /* avoid using rems here */
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-width: var(--track-width);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;var qi=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*t,r=i-this.value/100*i;this.indicatorOffset=`${r}px`}}render(){return p`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${rt({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${rt({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};qi.css=Vb;n([x(".indicator")],qi.prototype,"indicator",2);n([w()],qi.prototype,"indicatorOffset",2);n([d({type:Number,reflect:!0})],qi.prototype,"value",2);n([d()],qi.prototype,"label",2);qi=n([v("wa-progress-ring")],qi);var qb=C`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  canvas {
    width: 100%;
    height: 100%;
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }
`,ia,re=class extends z{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(e){super.firstUpdated(e),this.hasUpdated&&this.generate()}generate(){if(!this.hasUpdated)return;if(!ia){Ot(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(t=>{ia=t.default,this.generate()});return}this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`;const e=getComputedStyle(this);ia.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||e.color,background:this.background||null,size:this.size*2},this.canvas),this.generated=!0}render(){return p`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        @transitionend=${e=>{e.propertyName==="color"&&this.generate()}}
      ></canvas>
    `}};re.css=qb;n([x("canvas")],re.prototype,"canvas",2);n([d()],re.prototype,"value",2);n([d()],re.prototype,"label",2);n([d({type:Number})],re.prototype,"size",2);n([d()],re.prototype,"fill",2);n([d()],re.prototype,"background",2);n([d({type:Number})],re.prototype,"radius",2);n([d({attribute:"error-correction"})],re.prototype,"errorCorrection",2);n([w()],re.prototype,"generated",2);n([k(["background","errorCorrection","fill","radius","size","value"],{waitUntilFirstUpdate:!0})],re.prototype,"generate",1);re=n([v("wa-qr-code")],re);var Hb=C`
  :host {
    --checked-icon-color: var(--wa-form-control-activated-color);
    --checked-icon-scale: 0.7;

    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  :host(:not(:state(checked))) svg circle {
    opacity: 0;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default spacing for default appearance radios */
  :host([appearance='default']) {
    margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
  }

  :host([appearance='default'][data-wa-radio-horizontal]) {
    margin-block: 0;
    margin-inline: 0.5em; /* Half of the original 1em gap on each side */
  }

  /* Remove margin from first/last items to prevent extra space */
  :host([appearance='default'][data-wa-radio-first]) {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([appearance='default'][data-wa-radio-last]) {
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  /* Button appearance have no spacing, they get handled by the overlap margins below */
  :host([appearance='button']) {
    margin: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  /* Default appearance */
  :host([appearance='default']) {
    .control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      border-color: var(--wa-form-control-border-color);
      border-radius: 50%;
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      background-color: var(--wa-form-control-background-color);
      color: transparent;
      transition:
        background var(--wa-transition-normal),
        border-color var(--wa-transition-fast),
        box-shadow var(--wa-transition-fast),
        color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);

      margin-inline-end: 0.5em;
    }

    .checked-icon {
      display: flex;
      fill: currentColor;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      scale: var(--checked-icon-scale);
    }
  }

  /* Button appearance */
  :host([appearance='button']) {
    .control {
      display: none;
    }
  }

  /* Checked */
  :host(:state(checked)) .control {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-background-color);
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Button overlap margins */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`;var Ze=class extends J{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this.setAttribute("aria-disabled",t?"true":"false"),t?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return p`
      <span part="control" class="control">
        ${this.checked?p`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};Ze.css=[Fe,Tt,Hb];n([w()],Ze.prototype,"checked",2);n([w()],Ze.prototype,"forceDisabled",2);n([d({reflect:!0})],Ze.prototype,"value",2);n([d({reflect:!0})],Ze.prototype,"appearance",2);n([d({reflect:!0})],Ze.prototype,"size",2);n([d({type:Boolean})],Ze.prototype,"disabled",2);Ze=n([v("wa-radio")],Ze);var Wb=C`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0; /* Radios handle their own spacing */
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }
`;var Lt=class extends J{constructor(){super(),this.hasSlotController=new jt(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const t=e.target.closest("wa-radio");if(!t||t.disabled||t.forceDisabled||this.disabled)return;const i=this.value;this.value=t.value,t.checked=!0;const r=this.getAllRadios();for(const o of r)t!==o&&(o.checked=!1,o.setAttribute("tabindex","-1"));this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const e=[ks({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:xs("__wa-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}get validationTarget(){const e=this.querySelector(":is(wa-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("size")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();if(e.forEach((t,i)=>{this.size&&t.setAttribute("size",this.size),t.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),t.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),t.toggleAttribute("data-wa-radio-first",i===0),t.toggleAttribute("data-wa-radio-inner",i!==0&&i!==e.length-1),t.toggleAttribute("data-wa-radio-last",i===e.length-1),t.forceDisabled=this.disabled}),await Promise.all(e.map(async t=>{await t.updateComplete,!t.disabled&&t.value===this.value?t.checked=!0:t.checked=!1})),this.disabled)e.forEach(t=>{t.tabIndex=-1});else{const t=e.filter(r=>!r.disabled),i=t.find(r=>r.checked);t.length>0&&(i?t.forEach(r=>{r.tabIndex=r.checked?0:-1}):t.forEach((r,o)=>{r.tabIndex=o===0?0:-1})),e.filter(r=>r.disabled).forEach(r=>{r.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios().filter(l=>!l.disabled);if(t.length<=0)return;e.preventDefault();const i=this.value,r=t.find(l=>l.checked)??t[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let s=t.indexOf(r)+o;s||(s=0),s<0&&(s=t.length-1),s>t.length-1&&(s=0);const a=t.some(l=>l.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(l=>{l.checked=!1,a||l.setAttribute("tabindex","-1")}),this.value=t[s].value,t[s].checked=!0,a?t[s].shadowRoot.querySelector("button").focus():(t[s].setAttribute("tabindex","0"),t[s].focus()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const t=this.getAllRadios(),i=t.find(s=>s.checked),r=t.find(s=>!s.disabled),o=i||r;o&&o.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t;return p`
      <fieldset
        part="form-control"
        class=${D({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${D({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${D({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};Lt.css=[Tt,Fe,Wb];Lt.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};n([x("slot:not([name])")],Lt.prototype,"defaultSlot",2);n([d()],Lt.prototype,"label",2);n([d({attribute:"hint"})],Lt.prototype,"hint",2);n([d({reflect:!0})],Lt.prototype,"name",2);n([d({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);n([d({reflect:!0})],Lt.prototype,"orientation",2);n([w()],Lt.prototype,"value",1);n([d({attribute:"value",reflect:!0})],Lt.prototype,"defaultValue",2);n([d({reflect:!0})],Lt.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Lt.prototype,"required",2);n([d({type:Boolean,attribute:"with-label"})],Lt.prototype,"withLabel",2);n([d({type:Boolean,attribute:"with-hint"})],Lt.prototype,"withHint",2);Lt=n([v("wa-radio-group")],Lt);var _l=class extends Event{constructor(e){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var jb=C`
  :host {
    --symbol-color: var(--wa-color-neutral-on-quiet);
    --symbol-color-active: var(--wa-color-yellow-70);
    --symbol-spacing: 0.125em;

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--wa-border-radius-m);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .symbols {
    display: inline-flex;
    gap: 0.125em;
    position: relative;
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .symbols > * {
    padding: var(--symbol-spacing);
  }

  .symbol-active,
  .partial-filled {
    color: var(--symbol-color-active);
  }

  .partial-symbol-container {
    position: relative;
  }

  .partial-filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .symbol {
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
    pointer-events: none;
  }

  .symbol-hover {
    scale: 1.2;
  }

  .rating-readonly .symbols {
    cursor: default;
  }

  :host([disabled]) .symbol-hover,
  .rating-readonly .symbol-hover {
    scale: none;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  :host([disabled]) .symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .symbol-active {
      color: SelectedItem;
    }
  }
`;var Ct=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(e,t)=>t?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:i,right:r,width:o}=this.rating.getBoundingClientRect(),s=t?this.roundToPrecision((r-e)/o*this.max,this.precision):this.roundToPrecision((e-i)/o*this.max,this.precision);return N(s,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"){const o=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"){const o=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}roundToPrecision(e,t=.5){const i=1/t;return Math.ceil(e*i)/i}handleHoverValueChange(){this.dispatchEvent(new _l({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new _l({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir,t=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,p`
      <div
        part="base"
        class=${D({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="symbols">
          ${t.map(r=>{const o=i>=r+1;return i>r&&i<r+1?p`
                <span
                  class=${D({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(i)===r+1})}
                  role="presentation"
                >
                  <div
                    style=${rt({clipPath:e?`inset(0 ${(i-r)*100}% 0 0)`:`inset(0 0 0 ${(i-r)*100}%)`})}
                  >
                    ${je(this.getSymbol(r+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${rt({clipPath:e?`inset(0 0 0 ${100-(i-r)*100}%)`:`inset(0 ${100-(i-r)*100}% 0 0)`})}
                  >
                    ${je(this.getSymbol(r+1,!0))}
                  </div>
                </span>
              `:p`
              <span
                class=${D({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(i)===r+1,"symbol-active":i>=r+1})}
                role="presentation"
              >
                ${je(this.getSymbol(r+1,o))}
              </span>
            `})}
        </span>
      </div>
    `}};Ct.css=[Tt,jb];n([x(".rating")],Ct.prototype,"rating",2);n([w()],Ct.prototype,"hoverValue",2);n([w()],Ct.prototype,"isHovering",2);n([d()],Ct.prototype,"label",2);n([d({type:Number})],Ct.prototype,"value",2);n([d({type:Number})],Ct.prototype,"max",2);n([d({type:Number})],Ct.prototype,"precision",2);n([d({type:Boolean,reflect:!0})],Ct.prototype,"readonly",2);n([d({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);n([d()],Ct.prototype,"getSymbol",2);n([d({reflect:!0})],Ct.prototype,"size",2);n([vs({passive:!0})],Ct.prototype,"handleTouchMove",1);n([k("hoverValue")],Ct.prototype,"handleHoverValueChange",1);n([k("isHovering")],Ct.prototype,"handleIsHoveringChange",1);Ct=n([v("wa-rating")],Ct);var Kb=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],wi=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=t.getTime()-e.getTime(),{unit:r,value:o}=Kb.find(s=>Math.abs(i)<s.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/o),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;r==="minute"?s=Ao("second"):r==="hour"?s=Ao("minute"):r==="day"?s=Ao("hour"):s=Ao("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),s)}return p`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};n([w()],wi.prototype,"isoTime",2);n([w()],wi.prototype,"relativeTime",2);n([d()],wi.prototype,"date",2);n([d()],wi.prototype,"format",2);n([d()],wi.prototype,"numeric",2);n([d({type:Boolean})],wi.prototype,"sync",2);wi=n([v("wa-relative-time")],wi);function Ao(e){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return i-Date.now()%i}var Gb=class extends Event{constructor(e){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var Xb=C`
  :host {
    display: contents;
  }
`;var ro=class extends z{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.dispatchEvent(new Gb({entries:e}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],t.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};ro.css=Xb;n([d({type:Boolean,reflect:!0})],ro.prototype,"disabled",2);n([k("disabled",{waitUntilFirstUpdate:!0})],ro.prototype,"handleDisabledChange",1);ro=n([v("wa-resize-observer")],ro);var Yb=C`
  :host {
    --shadow-color: var(--wa-color-surface-default);
    --shadow-size: 2rem;

    /* private (defined dynamically) */
    --start-shadow-opacity: 0;
    --end-shadow-opacity: 0;

    display: block;
    position: relative;
    max-width: 100%;
    isolation: isolate;
  }

  :host([orientation='vertical']) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #content {
    z-index: 1; /* below shadows */
    border-radius: inherit;
    scroll-behavior: smooth;
    scrollbar-width: thin;

    /* Prevent text in mobile Safari from being larger when the container width larger than the viewport */
    -webkit-text-size-adjust: 100%;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  :host([without-scrollbar]) #content {
    scrollbar-width: none;
  }

  :host([orientation='horizontal']) #content {
    overflow-x: auto;
    overflow-y: hidden;
  }

  :host([orientation='vertical']) #content {
    flex: 1 1 auto;
    min-height: 0; /* This is crucial for flex children to respect overflow */
    overflow-x: hidden;
    overflow-y: auto;
  }

  #start-shadow,
  #end-shadow {
    z-index: 2;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
  }

  /* Horizontal shadows */
  :host([orientation='horizontal']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      top: 0;
      bottom: 0;
      width: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      &:dir(ltr) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }
    }

    #end-shadow {
      &:dir(ltr) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }
    }
  }

  /* Vertical shadows */
  :host([orientation='vertical']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      right: 0;
      left: 0;
      height: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      top: 0;
      background: linear-gradient(to bottom, var(--shadow-color), transparent 100%);
    }

    #end-shadow {
      bottom: 0;
      background: linear-gradient(to top, var(--shadow-color), transparent 100%);
    }
  }
`;var Qe=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(e){e.key==="Home"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),e.key==="End"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const e=Math.ceil(this.content.clientWidth),t=Math.abs(Math.ceil(this.content.scrollLeft)),r=Math.ceil(this.content.scrollWidth)-e;this.canScroll=r>0;const o=Math.min(1,t/(r*.05)),s=Math.min(1,(r-t)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(o||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}else{const e=Math.ceil(this.content.clientHeight),t=Math.abs(Math.ceil(this.content.scrollTop)),r=Math.ceil(this.content.scrollHeight)-e;this.canScroll=r>0;const o=Math.min(1,t/(r*.05)),s=Math.min(1,(r-t)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(o||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}}render(){return p`
      ${this.withoutShadow?"":p`
            <div id="start-shadow" part="start-shadow" aria-hidden="true"></div>
            <div id="end-shadow" part="end-shadow" aria-hidden="true"></div>
          `}

      <div
        id="content"
        part="content"
        role="region"
        aria-label=${this.localize.term("scrollableRegion")}
        aria-orientation=${this.orientation}
        tabindex=${this.canScroll?"0":"-1"}
        @keydown=${this.handleKeyDown}
        @scroll=${this.updateScroll}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Qe.css=[Yb];n([x("#content")],Qe.prototype,"content",2);n([w()],Qe.prototype,"canScroll",2);n([d({reflect:!0})],Qe.prototype,"orientation",2);n([d({attribute:"without-scrollbar",type:Boolean,reflect:!0})],Qe.prototype,"withoutScrollbar",2);n([d({attribute:"without-shadow",type:Boolean,reflect:!0})],Qe.prototype,"withoutShadow",2);n([vs({passive:!0})],Qe.prototype,"updateScroll",1);Qe=n([v("wa-scroller")],Qe);var Zb=C`
  :host {
    --tag-max-size: 10ch;
    --show-duration: 100ms;
    --hide-duration: 100ms;
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    :host([multiple]) .select:not(.placeholder-visible) & {
      padding-inline-start: 0;
      padding-block: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));
    }

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .select:not(.placeholder-visible) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: 0.25em;
    gap: 0.25em;

    &::slotted(wa-tag) {
      cursor: pointer !important;
    }

    .disabled &,
    .disabled &::slotted(wa-tag) {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .start::slotted(*) {
    margin-inline: var(--wa-form-control-padding-inline);
  }

  /* Clear button */
  [part~='clear-button'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) ease;
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding-block: 0.5em;
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;var U=class extends J{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new jt(this,"hint","label"),this.localize=new W(this),this.selectionOrder=new Map,this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>p`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${e.value}
          @wa-remove=${t=>this.handleTagRemove(t,e)}
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=t.closest('[part~="clear-button"]')!==null,r=t.closest("wa-button")!==null;if(!(i||r)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),s=o.indexOf(this.currentOption);let a=Math.max(0,s);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(a=s+1,a>o.length-1&&(a=0)):e.key==="ArrowUp"?(a=s-1,a<0&&(a=o.length-1)):e.key==="Home"?a=0:e.key==="End"&&(a=o.length-1),this.setCurrentOption(o[a])}if(e.key?.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const s of o)if(s.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){const e=[ks({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(e){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]),this._value=e??null,this.value!==t&&(this.valueHasChanged=!0,this.requestUpdate("value",t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),e==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(i=>!i.disabled).map(i=>i.value));let t=e;return e!=null&&(t=e.filter(i=>this.optionValues.has(i)),t=this.multiple?t:t[0],t=t??null),t}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const t=this.getAllOptions().filter(i=>i.hasAttribute("selected")||i.defaultSelected);if(t.length>0){const i=t.map(r=>r.value);this._defaultValue=this.multiple?i:i[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){const i=e.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="wa-button");this.disabled||i||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==null&&(this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new Pc),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("wa-option");i&&!i.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);const i=e.filter(r=>t.includes(r.value));this.setSelectedOptions(i)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let i=t;if(!i){const r=e.target.closest("wa-tag[data-value]");if(r){const o=r.dataset.value;i=this.selectedOptions.find(s=>s.value===o)}}i&&(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(e){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(r=>{i.includes(r)||(r.selected=!1)}),i.length&&i.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions().filter(a=>{if(!this.hasInteracted&&!this.valueHasChanged){const l=this.defaultValue,c=Array.isArray(l)?l:[l];return a.hasAttribute("selected")||a.defaultSelected||a.selected||c?.includes(a.value)}return a.selected}),i=new Set(t.map(a=>a.value));for(const a of this.selectionOrder.keys())i.has(a)||this.selectionOrder.delete(a);let o=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(const a of t)this.selectionOrder.has(a.value)||this.selectionOrder.set(a.value,o++);this.selectedOptions=t.sort((a,l)=>{const c=this.selectionOrder.get(a.value)??0,h=this.selectionOrder.get(l.value)??0;return c-h});let s=new Set(this.selectedOptions.map(a=>a.value));if(s.size>0||this._value){const a=this._value;if(this._value==null){let l=this.defaultValue??[];this._value=Array.isArray(l)?l:[l]}this._value=this._value?.filter(l=>!this.optionValues?.has(l))??null,this._value?.unshift(...s),this.requestUpdate("value",a)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const a=this.selectedOptions[0];this.displayLabel=a?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return i?typeof i=="string"?je(i):i:null}else if(t===this.maxOptionsVisible)return p`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],i=e.filter(r=>t.includes(r.value));this.setSelectedOptions(i),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const e=new Gi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await tt(this.popup.popup,"show"),this.currentOption&&_a(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Zi)}else{const e=new Xi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await tt(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Yi)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ye(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ye(this,"wa-after-hide")}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t,o=(this.hasUpdated||zd)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,s=!!(this.placeholder&&(!this.value||this.value.length===0));return p`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control-has-label":i})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${D({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${D({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":s})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?p`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${o?p`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${D({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};U.css=[Zb,Fe,Tt];n([x(".select")],U.prototype,"popup",2);n([x(".combobox")],U.prototype,"combobox",2);n([x(".display-input")],U.prototype,"displayInput",2);n([x(".value-input")],U.prototype,"valueInput",2);n([x(".listbox")],U.prototype,"listbox",2);n([w()],U.prototype,"displayLabel",2);n([w()],U.prototype,"currentOption",2);n([w()],U.prototype,"selectedOptions",2);n([w()],U.prototype,"optionValues",2);n([d({reflect:!0})],U.prototype,"name",2);n([d({attribute:!1})],U.prototype,"defaultValue",1);n([d({attribute:"value",reflect:!1})],U.prototype,"value",1);n([d({reflect:!0})],U.prototype,"size",2);n([d()],U.prototype,"placeholder",2);n([d({type:Boolean,reflect:!0})],U.prototype,"multiple",2);n([d({attribute:"max-options-visible",type:Number})],U.prototype,"maxOptionsVisible",2);n([d({type:Boolean})],U.prototype,"disabled",2);n([d({attribute:"with-clear",type:Boolean})],U.prototype,"withClear",2);n([d({type:Boolean,reflect:!0})],U.prototype,"open",2);n([d({reflect:!0})],U.prototype,"appearance",2);n([d({type:Boolean,reflect:!0})],U.prototype,"pill",2);n([d()],U.prototype,"label",2);n([d({reflect:!0})],U.prototype,"placement",2);n([d({attribute:"hint"})],U.prototype,"hint",2);n([d({attribute:"with-label",type:Boolean})],U.prototype,"withLabel",2);n([d({attribute:"with-hint",type:Boolean})],U.prototype,"withHint",2);n([d({type:Boolean,reflect:!0})],U.prototype,"required",2);n([d({attribute:!1})],U.prototype,"getTag",2);n([k("disabled",{waitUntilFirstUpdate:!0})],U.prototype,"handleDisabledChange",1);n([k("value",{waitUntilFirstUpdate:!0})],U.prototype,"handleValueChange",1);n([k("open",{waitUntilFirstUpdate:!0})],U.prototype,"handleOpenChange",1);U=n([v("wa-select")],U);var Qb=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};var Jb=C`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`;var vi=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new Qb)}render(){return p`
      <slot part="content" class="content"></slot>

      ${this.withRemove?p`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};vi.css=[Jb,ys,Tt];n([d({reflect:!0})],vi.prototype,"variant",2);n([d({reflect:!0})],vi.prototype,"appearance",2);n([d({reflect:!0})],vi.prototype,"size",2);n([d({type:Boolean,reflect:!0})],vi.prototype,"pill",2);n([d({attribute:"with-remove",type:Boolean})],vi.prototype,"withRemove",2);vi=n([v("wa-tag")],vi);var t0=C`
  :host {
    --color: var(--wa-color-neutral-fill-normal);
    --sheen-color: color-mix(in oklab, var(--color), var(--wa-color-surface-raised));

    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--wa-border-radius-pill);
  }

  :host([effect='sheen']) .indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  :host([effect='pulse']) .indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;var as=class extends z{constructor(){super(...arguments),this.effect="none"}render(){return p` <div part="indicator" class="indicator"></div> `}};as.css=t0;n([d({reflect:!0})],as.prototype,"effect",2);as=n([v("wa-skeleton")],as);var e0=C`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label:has(*:not(:empty)) ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`;var i0=()=>{const e=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(t){const i={message:"",isValid:!0,invalidKeys:[]},r=(o,s,a,l)=>{const c=document.createElement("input");return c.type="range",c.min=String(s),c.max=String(a),c.step=String(l),c.value=String(o),c.checkValidity(),c.validationMessage};if(t.required&&!t.hasInteracted)return i.isValid=!1,i.invalidKeys.push("valueMissing"),i.message=e.validationMessage||"Please fill out this field.",i;if(t.isRange){const o=t.minValue,s=t.maxValue;if(o<t.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=r(o,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,i;if(s>t.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=r(s,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,i;if(t.step&&t.step!==1){const a=(o-t.min)%t.step!==0,l=(s-t.min)%t.step!==0;if(a||l){i.isValid=!1,i.invalidKeys.push("stepMismatch");const c=a?o:s;return i.message=r(c,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,i}}}else{const o=t.value;if(o<t.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=r(o,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,i;if(o>t.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=r(o,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,i;if(t.step&&t.step!==1&&(o-t.min)%t.step!==0)return i.isValid=!1,i.invalidKeys.push("stepMismatch"),i.message=r(o,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,i}return i}}},V=class extends J{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new jt(this,"hint","label"),this.localize=new W(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,i0()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){e=Number(e)??this.minValue,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new xo(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new xo(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new xo(this.track,{start:(e,t)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const i=this.getValueFromCoordinates(e,t),r=Math.abs(i-this.minValue),o=Math.abs(i-this.maxValue);if(r===o)if(i>this.maxValue)this.activeThumb="max";else if(i<this.minValue)this.activeThumb="min";else{const s=this.localize.dir()==="rtl",a=this.orientation==="vertical",l=a?t:e,c=this.lastTrackPosition||l;this.lastTrackPosition=l;const h=l>c!==s&&!a||l<c&&a;this.activeThumb=h?"max":"min"}else this.activeThumb=r<=o?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(e,t,this.activeThumb),this.showRangeTooltips()},move:(e,t)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,t,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new xo(this.slider,{start:(e,t)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(e,t),this.showTooltip()},move:(e,t)=>{this.setValueFromCoordinates(e,t)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(e){if(e.has("range")&&this.requestUpdate(),this.isRange?(e.has("minValue")||e.has("maxValue"))&&(this.minValue=N(this.minValue,this.min,this.maxValue),this.maxValue=N(this.maxValue,this.minValue,this.max),this.updateFormValue()):e.has("value")&&(this.value=N(this.value,this.min,this.max),this.setValue(String(this.value))),(e.has("min")||e.has("max"))&&(this.isRange?(this.minValue=N(this.minValue,this.min,this.max),this.maxValue=N(this.maxValue,this.min,this.max)):this.value=N(this.value,this.min,this.max)),e.has("disabled")&&this.customStates.set("disabled",this.disabled),e.has("disabled")||e.has("readonly")){const t=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(t),this.draggableThumbMax&&this.draggableThumbMax.toggle(t)),this.draggableTrack&&this.draggableTrack.toggle(t)}super.updated(e)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(e){const t=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,i=Number(this.step),r=Number(this.min),o=Number(this.max);return e=Math.round(e/i)*i,e=N(e,r,o),parseFloat(e.toFixed(t))}getPercentageFromValue(e){return(e-this.min)/(this.max-this.min)*100}getValueFromCoordinates(e,t){const i=this.localize.dir()==="rtl",r=this.orientation==="vertical",{top:o,right:s,bottom:a,left:l,height:c,width:h}=this.trackBoundingClientRect,u=r?t:e,f=r?{start:o,end:a,size:c}:{start:l,end:s,size:h},g=(r||i?f.end-u:u-f.start)/f.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*g)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const e=this.shadowRoot?.activeElement;e===this.thumbMin||e===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(e){const t=e.target;this.isRange?(t===this.thumbMin?this.activeThumb="min":t===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(e){const t=this.localize.dir()==="rtl",i=e.target;if(this.disabled||this.readonly||this.isRange&&(i===this.thumbMin?this.activeThumb="min":i===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const r=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let o=r;switch(e.key){case"ArrowUp":case(t?"ArrowLeft":"ArrowRight"):e.preventDefault(),o=this.clampAndRoundToStep(r+this.step);break;case"ArrowDown":case(t?"ArrowRight":"ArrowLeft"):e.preventDefault(),o=this.clampAndRoundToStep(r-this.step);break;case"Home":e.preventDefault(),o=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":e.preventDefault(),o=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":e.preventDefault();const s=Math.max(r+(this.max-this.min)/10,r+this.step);o=this.clampAndRoundToStep(s);break;case"PageDown":e.preventDefault();const a=Math.min(r-(this.max-this.min)/10,r-this.step);o=this.clampAndRoundToStep(a);break;case"Enter":fn(e,this);return}o!==r&&(this.isRange?(this.activeThumb==="min"?o>this.maxValue?(this.maxValue=o,this.minValue=o):this.minValue=Math.max(this.min,o):o<this.minValue?(this.minValue=o,this.maxValue=o):this.maxValue=Math.min(this.max,o),this.updateFormValue()):this.value=N(o,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(e){e.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(e,t){const i=this.value;this.value=this.getValueFromCoordinates(e,t),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(e,t,i){const r=this.getValueFromCoordinates(e,t),o=i==="min"?this.minValue:this.maxValue;i==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),o!==(i==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(e&&(e.open=!0),t&&(t.open=!1)):this.activeThumb==="max"&&(t&&(t.open=!0),e&&(e.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");e&&(e.open=!1),t&&(t.open=!1)}updateFormValue(){if(this.isRange){const e=new FormData;e.append(this.name||"",String(this.minValue)),e.append(this.name||"",String(this.maxValue)),this.setValue(e)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const e=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=N(e,this.min,this.maxValue),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value-this.step);this.value=e}}stepUp(){if(this.isRange){const e=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=N(e,this.minValue,this.max),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value+this.step);this.value=e}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("hint"),i=this.label?!0:!!e,r=this.hint?!0:!!t,o=this.hasSlotController.test("reference"),s=D({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),a=[];if(this.withMarkers)for(let m=this.min;m<=this.max;m+=this.step)a.push(this.getPercentageFromValue(m));const l=p`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${D({vh:!i,"has-label":i})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,c=p`
      <div
        id="hint"
        part="hint"
        class=${D({"has-slotted":r})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,h=this.withMarkers?p`
          <div id="markers" part="markers">
            ${a.map(m=>p`<span part="marker" class="marker" style=${rt({"--position":`${m}%`})}></span>`)}
          </div>
        `:"",u=o?p`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",f=(m,g)=>this.withTooltip?p`
            <wa-tooltip
              id=${`tooltip${m!=="thumb"?"-"+m:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${m}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(g):this.localize.number(g)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const m=N(this.getPercentageFromValue(this.minValue),0,100),g=N(this.getPercentageFromValue(this.maxValue),0,100);return p`
        ${l}

        <div id="slider" part="slider" class=${s}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${rt({"--start":`${Math.min(m,g)}%`,"--end":`${Math.max(m,g)}%`})}
            ></div>

            ${h}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${rt({"--position":`${m}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${rt({"--position":`${g}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${u} ${c}
        </div>

        ${f("thumb-min",this.minValue)} ${f("thumb-max",this.maxValue)}
      `}else{const m=N(this.getPercentageFromValue(this.value),0,100),g=N(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return p`
        ${l}

        <div
          id="slider"
          part="slider"
          class=${s}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${rt({"--start":`${g}%`,"--end":`${m}%`})}
            ></div>

            ${h}
            <span id="thumb" part="thumb" style=${rt({"--position":`${m}%`})}></span>
          </div>

          ${u} ${c}
        </div>

        ${f("thumb",this.value)}
      `}}};V.formAssociated=!0;V.observeSlots=!0;V.css=[Tt,Fe,e0];n([x("#slider")],V.prototype,"slider",2);n([x("#thumb")],V.prototype,"thumb",2);n([x("#thumb-min")],V.prototype,"thumbMin",2);n([x("#thumb-max")],V.prototype,"thumbMax",2);n([x("#track")],V.prototype,"track",2);n([x("#tooltip")],V.prototype,"tooltip",2);n([d()],V.prototype,"label",2);n([d({attribute:"hint"})],V.prototype,"hint",2);n([d({reflect:!0})],V.prototype,"name",2);n([d({type:Number,attribute:"min-value"})],V.prototype,"minValue",2);n([d({type:Number,attribute:"max-value"})],V.prototype,"maxValue",2);n([d({attribute:"value",reflect:!0,type:Number})],V.prototype,"defaultValue",2);n([w()],V.prototype,"value",1);n([d({type:Boolean,reflect:!0})],V.prototype,"range",2);n([d({type:Boolean})],V.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],V.prototype,"readonly",2);n([d({reflect:!0})],V.prototype,"orientation",2);n([d({reflect:!0})],V.prototype,"size",2);n([d({attribute:"indicator-offset",type:Number})],V.prototype,"indicatorOffset",2);n([d({type:Number})],V.prototype,"min",2);n([d({type:Number})],V.prototype,"max",2);n([d({type:Number})],V.prototype,"step",2);n([d({type:Boolean,reflect:!0})],V.prototype,"required",2);n([d({type:Boolean})],V.prototype,"autofocus",2);n([d({attribute:"tooltip-distance",type:Number})],V.prototype,"tooltipDistance",2);n([d({attribute:"tooltip-placement",reflect:!0})],V.prototype,"tooltipPlacement",2);n([d({attribute:"with-markers",type:Boolean})],V.prototype,"withMarkers",2);n([d({attribute:"with-tooltip",type:Boolean})],V.prototype,"withTooltip",2);n([d({attribute:!1})],V.prototype,"valueFormatter",2);V=n([v("wa-slider")],V);var r0=C`
  :host {
    --divider-width: 0.25rem;
    --divider-hit-area: 0.75rem;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--wa-color-neutral-border-normal);
    color: var(--wa-color-neutral-on-normal);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    outline: var(--wa-focus-ring);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([orientation='vertical'], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([orientation='vertical'])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([orientation='vertical']) {
    flex-direction: column;
  }

  :host([orientation='vertical']:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([orientation='vertical']) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;var qt=class extends z{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new W(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Yr(this,{onMove:(i,r)=>{let o=this.orientation==="vertical"?r:i;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(a=>{let l;a.endsWith("%")?l=this.size*(parseFloat(a)/100):l=parseFloat(a),t&&this.orientation==="horizontal"&&(l=this.size-l),o>=l-this.snapThreshold&&o<=l+this.snapThreshold&&(o=l)}),this.position=N(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&this.orientation==="horizontal"||e.key==="ArrowUp"&&this.orientation==="vertical")&&(t-=i),(e.key==="ArrowRight"&&this.orientation==="horizontal"||e.key==="ArrowDown"&&this.orientation==="vertical")&&(t+=i),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const r=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=r})}this.position=N(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.orientation==="vertical"?i:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new Mc)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",t=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",i=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.style||(this.style={}),this.primary==="end"?i&&this.orientation==="horizontal"?this.style[e]=`${r} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${r}`:i&&this.orientation==="horizontal"?this.style[e]=`${o} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${o}`,this.style[t]="",p`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${T(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};qt.css=r0;n([x(".divider")],qt.prototype,"divider",2);n([d({type:Number,reflect:!0})],qt.prototype,"position",2);n([d({attribute:"position-in-pixels",type:Number})],qt.prototype,"positionInPixels",2);n([d({reflect:!0})],qt.prototype,"orientation",2);n([d({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);n([d()],qt.prototype,"primary",2);n([d()],qt.prototype,"snap",2);n([d({type:Number,attribute:"snap-threshold"})],qt.prototype,"snapThreshold",2);n([k("position")],qt.prototype,"handlePositionChange",1);n([k("positionInPixels")],qt.prototype,"handlePositionInPixelsChange",1);n([k("vertical")],qt.prototype,"handleVerticalChange",1);qt=n([v("wa-split-panel")],qt);var o0=C`
  :host {
    --height: var(--wa-form-control-toggle-size);
    --width: calc(var(--height) * 1.75);
    --thumb-size: 0.75em;

    display: inline-flex;
    line-height: var(--wa-form-control-value-line-height);
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    color: var(--wa-form-control-value-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--height);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    transition-property: translate, background, border-color, box-shadow;
    transition-duration: var(--wa-transition-normal);
    transition-timing-function: var(--wa-transition-easing);
  }

  .switch .thumb {
    aspect-ratio: 1 / 1;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    translate: calc((var(--width) - var(--height)) / -2);
    transition: inherit;
  }

  .input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Focus */
  label:not(.disabled) .input:focus-visible ~ .switch .thumb {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Checked */
  .checked .switch {
    background-color: var(--wa-form-control-activated-color);
    border-color: var(--wa-form-control-activated-color);
  }

  .checked .switch .thumb {
    background-color: var(--wa-color-surface-default);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Disabled */
  label:has(> :disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part~='label'] {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  @media (forced-colors: active) {
    :checked:enabled + .switch:hover .thumb,
    :checked + .switch .thumb {
      background-color: ButtonText;
    }
  }
`;var ft=class extends J{constructor(){super(...arguments),this.hasSlotController=new jt(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,uo()]}get value(){return this._value??"on"}set value(e){this._value=e}firstUpdated(e){super.firstUpdated(e),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(e??"on",t)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,t=this.hint?!0:!!e;return p`
      <label
        part="base"
        class=${D({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${T(this.value)}
          .checked=${Bi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${D({"has-slotted":t})}
        aria-hidden=${t?"false":"true"}
        >${this.hint}</slot
      >
    `}};ft.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};ft.css=[Fe,Tt,o0];n([x('input[type="checkbox"]')],ft.prototype,"input",2);n([d()],ft.prototype,"title",2);n([d({reflect:!0})],ft.prototype,"name",2);n([d({reflect:!0})],ft.prototype,"value",1);n([d({reflect:!0})],ft.prototype,"size",2);n([d({type:Boolean})],ft.prototype,"disabled",2);n([d({type:Boolean,attribute:!1})],ft.prototype,"checked",2);n([d({type:Boolean,attribute:"checked",reflect:!0})],ft.prototype,"defaultChecked",2);n([d({type:Boolean,reflect:!0})],ft.prototype,"required",2);n([d({attribute:"hint"})],ft.prototype,"hint",2);n([d({attribute:"with-hint",type:Boolean})],ft.prototype,"withHint",2);n([k("defaultChecked")],ft.prototype,"handleDefaultCheckedChange",1);n([k(["checked"])],ft.prototype,"handleStateChange",1);n([k("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);ft=n([v("wa-switch")],ft);var s0=C`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
    font-weight: var(--wa-font-weight-action);
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font: inherit;
    padding: 1em 1.5em;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);

    ::slotted(wa-icon:first-child) {
      margin-inline-end: 0.5em;
    }

    ::slotted(wa-icon:last-child) {
      margin-inline-start: 0.5em;
    }
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])) .tab {
      color: currentColor;
    }
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) .tab {
    outline: var(--wa-focus-ring);
    outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
  }

  :host([active]:not([disabled])) {
    color: var(--wa-color-brand-on-quiet);
  }

  :host([disabled]) .tab {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (forced-colors: active) {
    :host([active]:not([disabled])) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var a0=0,Ne=class extends z{constructor(){super(...arguments),this.attrId=++a0,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,p`
      <div
        part="base"
        class=${D({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Ne.css=s0;n([x(".tab")],Ne.prototype,"tab",2);n([d({reflect:!0})],Ne.prototype,"panel",2);n([d({type:Boolean,reflect:!0})],Ne.prototype,"active",2);n([d({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);n([d({type:Number,reflect:!0})],Ne.prototype,"tabIndex",2);n([k("active")],Ne.prototype,"handleActiveChange",1);n([k("disabled")],Ne.prototype,"handleDisabledChange",1);Ne=n([v("wa-tab")],Ne);var n0=class extends Event{constructor(e){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var l0=class extends Event{constructor(e){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var c0=C`
  :host {
    --indicator-color: var(--wa-color-brand-fill-loud);
    --track-color: var(--wa-color-neutral-fill-normal);
    --track-width: 0.125rem;

    /* Private */
    --safe-track-width: max(0.5px, round(var(--track-width), 0.5px));

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tabs {
    display: flex;
    position: relative;
  }

  .indicator {
    position: absolute;
  }

  .tab-group-has-scroll-controls .nav-container {
    position: relative;
    padding: 0 1.5em;
  }

  .body {
    display: block;
  }

  .scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5em;
  }

  .scroll-button-start {
    inset-inline-start: 0;
  }

  .scroll-button-end {
    inset-inline-end: 0;
  }

  /*
    * Top
    */

  .tab-group-top {
    flex-direction: column;
  }

  .tab-group-top .nav-container {
    order: 1;
  }

  .tab-group-top .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-top .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-top .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-top .indicator {
    bottom: calc(-1 * var(--safe-track-width));
    border-bottom: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-top .body {
    order: 2;
  }

  .tab-group-top ::slotted(wa-tab[active]) {
    border-block-end: solid var(--safe-track-width) var(--indicator-color);
    margin-block-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-top ::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Bottom
    */

  .tab-group-bottom {
    flex-direction: column;
  }

  .tab-group-bottom .nav-container {
    order: 2;
  }

  .tab-group-bottom .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-bottom .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-bottom .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-bottom .indicator {
    top: calc(-1 * var(--safe-track-width));
    border-top: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-bottom .body {
    order: 1;
  }

  .tab-group-bottom ::slotted(wa-tab[active]) {
    border-block-start: solid var(--safe-track-width) var(--indicator-color);
    margin-block-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-bottom ::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Start
    */

  .tab-group-start {
    flex-direction: row;
  }

  .tab-group-start .nav-container {
    order: 1;
  }

  .tab-group-start .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-start .indicator {
    inset-inline-end: calc(-1 * var(--safe-track-width));
    border-right: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-start .body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group-start ::slotted(wa-tab[active]) {
    border-inline-end: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-start ::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }

  /*
    * End
    */

  .tab-group-end {
    flex-direction: row;
  }

  .tab-group-end .nav-container {
    order: 2;
  }

  .tab-group-end .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-end .indicator {
    inset-inline-start: calc(-1 * var(--safe-track-width));
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-end .body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group-end ::slotted(wa-tab[active]) {
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-end ::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }
`;var oe=class extends z{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new W(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels());const t=e.filter(i=>i.target.closest("wa-tab-group")===this);if(t.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(t.some(i=>i.attributeName==="active")){const r=t.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="wa-tab").map(o=>o.target).find(o=>o.active);r&&r.closest("wa-tab-group")===this&&this.setActiveTab(r)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,i)=>{if(t[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const r=this.tabs.find(o=>o.panel===this.active);r&&this.setActiveTab(r)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});i.unobserve(t[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const i=e.target.closest("wa-tab");i?.closest("wa-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(e){const i=e.target.closest("wa-tab");if(i?.closest("wa-tab-group")===this){if(["Enter"," "].includes(e.key)){i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),e.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.tabs.find(l=>l.matches(":focus")),s=this.localize.dir()==="rtl";let a=null;if(o?.tagName.toLowerCase()==="wa-tab"){if(e.key==="Home")a=this.focusableTabs[0];else if(e.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const l=this.tabs.findIndex(c=>c===o);a=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const l=this.tabs.findIndex(c=>c===o);a=this.findNextFocusableTab(l,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===a?0:-1}),["top","bottom"].includes(this.placement)&&_a(a,this.nav,"horizontal"),e.preventDefault()}}}}findNextFocusableTab(e,t){let i=null;const r=t==="forward"?1:-1;let o=e+r;for(;e<this.tabs.length;){if(i=this.tabs[o]||null,i===null){t==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;o+=r}return i}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:"auto",...t},e.closest("wa-tab-group")===this&&e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.active=e.panel,this.activeTab=e,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>r.active=r.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&_a(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&this.dispatchEvent(new n0({name:i.panel})),this.dispatchEvent(new l0({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(i=>i.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const e=this.tabs.find(t=>t.panel===this.active);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
      <div
        part="base"
        class=${D({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?p`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${e?"chevron-right":"chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              `:""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?p`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${e?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};oe.css=c0;n([x(".tab-group")],oe.prototype,"tabGroup",2);n([x(".body")],oe.prototype,"body",2);n([x(".nav")],oe.prototype,"nav",2);n([w()],oe.prototype,"hasScrollControls",2);n([d({reflect:!0})],oe.prototype,"active",2);n([d()],oe.prototype,"placement",2);n([d()],oe.prototype,"activation",2);n([d({attribute:"without-scroll-controls",type:Boolean})],oe.prototype,"withoutScrollControls",2);n([k("active")],oe.prototype,"updateActiveTab",1);n([k("withoutScrollControls",{waitUntilFirstUpdate:!0})],oe.prototype,"updateScrollControls",1);oe=n([v("wa-tab-group")],oe);var d0=C`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var h0=0,yr=class extends z{constructor(){super(...arguments),this.attrId=++h0,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return p`
      <slot
        part="base"
        class=${D({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};yr.css=d0;n([d({reflect:!0})],yr.prototype,"name",2);n([d({type:Boolean,reflect:!0})],yr.prototype,"active",2);n([k("active")],yr.prototype,"handleActiveChange",1);yr=n([v("wa-tab-panel")],yr);var u0=C`
  :host {
    border-width: 0;
  }

  .textarea {
    display: grid;
    align-items: center;
    margin: 0;
    border: none;
    outline: none;
    cursor: inherit;
    font: inherit;
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    -webkit-appearance: none;

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .textarea {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    font: inherit;
    color: inherit;
    padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
    min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    box-shadow: none;
    margin: 0;

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &:focus {
      outline: none;
    }
  }

  /* Shared textarea and size-adjuster positioning */
  .control,
  .size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    padding: 0;
  }

  textarea::-webkit-search-decoration,
  textarea::-webkit-search-cancel-button,
  textarea::-webkit-search-results-button,
  textarea::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /*
   * Resize types
   */

  :host([resize='none']) textarea {
    resize: none;
  }

  textarea,
  :host([resize='vertical']) textarea {
    resize: vertical;
  }

  :host([resize='horizontal']) textarea {
    resize: horizontal;
  }

  :host([resize='both']) textarea {
    resize: both;
  }

  :host([resize='auto']) textarea {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;var q=class extends J{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new jt(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,uo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const e=this.input.value;this.value=e}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(e){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(e){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const e=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${e}px`}if(this.input.style.height){const e=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${e}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(e){e.has("resize")&&this.setTextareaDimensions(),super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){const o=t??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(e,o,s,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t;return p`
      <label
        part="form-control-label label"
        class=${D({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${T(this.name)}
          .value=${Bi(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${T(this.placeholder)}
          rows=${T(this.rows)}
          minlength=${T(this.minlength)}
          maxlength=${T(this.maxlength)}
          autocapitalize=${T(this.autocapitalize)}
          autocorrect=${T(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${T(this.spellcheck)}
          enterkeyhint=${T(this.enterkeyhint)}
          inputmode=${T(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize!=="auto"}></div>
      </div>

      <slot
        id="hint"
        name="hint"
        part="hint"
        aria-hidden=${r?"false":"true"}
        class=${D({"has-slotted":r})}
        >${this.hint}</slot
      >
    `}};q.css=[u0,Fe,Tt];n([x(".control")],q.prototype,"input",2);n([x('[part~="base"]')],q.prototype,"base",2);n([x(".size-adjuster")],q.prototype,"sizeAdjuster",2);n([d()],q.prototype,"title",2);n([d({reflect:!0})],q.prototype,"name",2);n([w()],q.prototype,"value",1);n([d({attribute:"value",reflect:!0})],q.prototype,"defaultValue",2);n([d({reflect:!0})],q.prototype,"size",2);n([d({reflect:!0})],q.prototype,"appearance",2);n([d()],q.prototype,"label",2);n([d({attribute:"hint"})],q.prototype,"hint",2);n([d()],q.prototype,"placeholder",2);n([d({type:Number})],q.prototype,"rows",2);n([d({reflect:!0})],q.prototype,"resize",2);n([d({type:Boolean})],q.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],q.prototype,"readonly",2);n([d({type:Boolean,reflect:!0})],q.prototype,"required",2);n([d({type:Number})],q.prototype,"minlength",2);n([d({type:Number})],q.prototype,"maxlength",2);n([d()],q.prototype,"autocapitalize",2);n([d()],q.prototype,"autocorrect",2);n([d()],q.prototype,"autocomplete",2);n([d({type:Boolean})],q.prototype,"autofocus",2);n([d()],q.prototype,"enterkeyhint",2);n([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],q.prototype,"spellcheck",2);n([d()],q.prototype,"inputmode",2);n([d({attribute:"with-label",type:Boolean})],q.prototype,"withLabel",2);n([d({attribute:"with-hint",type:Boolean})],q.prototype,"withHint",2);n([k("rows",{waitUntilFirstUpdate:!0})],q.prototype,"handleRowsChange",1);n([k("value",{waitUntilFirstUpdate:!0})],q.prototype,"handleValueChange",1);q=n([v("wa-textarea")],q);var p0=class extends Event{constructor(e){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var f0=C`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--wa-color-surface-border);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--wa-space-l);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;var m0=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}};var g0=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}};var b0=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var w0=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var v0=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var y0=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var x0=C`
  :host {
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: block;
    color: var(--wa-color-text-normal);
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(wa-icon) {
    margin-inline-end: var(--wa-space-xs);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
  }

  .checkbox {
    line-height: var(--wa-form-control-value-line-height);
    pointer-events: none;
  }

  .expand-button,
  .checkbox,
  .label {
    font-family: inherit;
    font-size: var(--wa-font-size-m);
    font-weight: inherit;
  }

  .checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wa-color-text-quiet);
    width: 2em;
    height: 2em;
    flex-shrink: 0;
    cursor: pointer;
  }

  .expand-button {
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .tree-item-expanded .expand-button {
    rotate: 90deg;
  }

  .tree-item-expanded:dir(rtl) .expand-button {
    rotate: -90deg;
  }

  .tree-item-expanded:not(.tree-item-loading) slot[name='expand-icon'],
  .tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-icon-slot {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-button {
    cursor: default;
  }

  .tree-item-loading .expand-icon-slot wa-icon {
    display: none;
  }

  .expand-button-visible {
    cursor: pointer;
  }

  .item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  :host([disabled]) .item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .item {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item-selected .item {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-inline-start-color: var(--wa-color-brand-fill-loud);
  }

  :host(:not([aria-disabled='true'])) .expand-button {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: flex;
    align-items: center;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--wa-space-m)));
  }

  /* Indentation lines */
  .children {
    position: relative;
  }

  .children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    inset-inline-start: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item-selected .item {
      outline: dashed 1px SelectedItem;
    }
  }
`;function lt(e,t,i){return e?t(e):i?.(e)}var K=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new v0);const e=ts(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await Jo(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new y0)}isNestedItem(){const e=this.parentElement;return!!e&&K.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new b0),this.childrenContainer.hidden=!1;const e=ts(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await Jo(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new w0)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new g0)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new m0)}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>K.isTreeItem(t)&&(e||!t.disabled)):[]}render(){const e=this.localize.dir()==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return p`
      <div
        part="base"
        class="${D({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":t})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${D({"expand-button":!0,"expand-button-visible":t})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${lt(this.loading,()=>p` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>p`
                  <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${lt(this.selectable,()=>p`
              <wa-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Bi(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `)}

          <slot class="label" part="label"></slot>
        </div>

        <div class="children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};K.css=x0;n([w()],K.prototype,"indeterminate",2);n([w()],K.prototype,"isLeaf",2);n([w()],K.prototype,"loading",2);n([w()],K.prototype,"selectable",2);n([d({type:Boolean,reflect:!0})],K.prototype,"expanded",2);n([d({type:Boolean,reflect:!0})],K.prototype,"selected",2);n([d({type:Boolean,reflect:!0})],K.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],K.prototype,"lazy",2);n([x("slot:not([name])")],K.prototype,"defaultSlot",2);n([x("slot[name=children]")],K.prototype,"childrenSlot",2);n([x(".item")],K.prototype,"itemElement",2);n([x(".children")],K.prototype,"childrenContainer",2);n([x(".expand-button slot")],K.prototype,"expandButtonSlot",2);n([k("loading",{waitUntilFirstUpdate:!0})],K.prototype,"handleLoadingChange",1);n([k("disabled")],K.prototype,"handleDisabledChange",1);n([k("expanded")],K.prototype,"handleExpandedState",1);n([k("indeterminate")],K.prototype,"handleIndeterminateStateChange",1);n([k("selected")],K.prototype,"handleSelectedChange",1);n([k("expanded",{waitUntilFirstUpdate:!0})],K.prototype,"handleExpandedChange",1);n([k("expanded",{waitUntilFirstUpdate:!0})],K.prototype,"handleExpandAnimation",1);n([k("lazy",{waitUntilFirstUpdate:!0})],K.prototype,"handleLazyChange",1);K=n([v("wa-tree-item")],K);function Tl(e,t=!1){function i(s){const a=s.getChildrenItems({includeDisabled:!1});if(a.length){const l=a.every(h=>h.selected),c=a.every(h=>!h.selected&&!h.indeterminate);s.selected=l,s.indeterminate=!l&&!c}}function r(s){const a=s.parentElement;K.isTreeItem(a)&&(i(a),r(a))}function o(s){for(const a of s.getChildrenItems())a.selected=t?s.selected||a.selected:!a.disabled&&s.selected,o(a);t&&i(s)}o(e),r(e)}var yi=class extends z{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new W(this),this.initTreeItem=e=>{e.updateComplete.then(()=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const i=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(i===null?e.append(r):i.hasAttribute("data-default")&&i.replaceWith(r))})})},this.handleTreeChanged=e=>{for(const t of e){const i=[...t.addedNodes].filter(K.isTreeItem),r=[...t.removedNodes].filter(K.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),K.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(e){const i=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const r=i.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${e}-icon`,r}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Tl(e);else if(this.selection==="single"||e.isLeaf){const r=this.getAllTreeItems();for(const o of r)o.selected=o===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const i=this.selectedItems;(t.length!==i.length||i.some(r=>!t.includes(r)))&&Promise.all(i.map(r=>r.updateComplete)).then(()=>{this.dispatchEvent(new p0({selection:i}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(e){e?.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(o=>["input","textarea"].includes(o?.tagName?.toLowerCase())))return;const t=this.getFocusableItems(),i=this.matches(":dir(ltr)"),r=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const o=t.findIndex(c=>c.matches(":focus")),s=t[o],a=c=>{const h=t[N(c,0,t.length-1)];this.focusItem(h)},l=c=>{s.expanded=c};e.key==="ArrowDown"?a(o+1):e.key==="ArrowUp"?a(o-1):i&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?a(o+1):l(!0):i&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?a(o-1):l(!1):e.key==="Home"?a(0):e.key==="End"?a(t.length-1):(e.key==="Enter"||e.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(e){const t=e.target,i=t.closest("wa-tree-item"),r=e.composedPath().some(o=>o?.classList?.contains("expand-button"));!i||i.disabled||t!==this.clickTarget||(r?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const i of t)i.updateComplete.then(()=>{i.selectable=e});e&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(i=>{i.updateComplete.then(()=>{Tl(i,!0)})}))}get selectedItems(){const e=this.getAllTreeItems(),t=i=>i.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(i=>{if(i.disabled)return!1;const r=i.parentElement?.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||t.has(r))&&t.add(i),!t.has(i)})}render(){return p`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};yi.css=f0;n([x("slot:not([name])")],yi.prototype,"defaultSlot",2);n([x("slot[name=expand-icon]")],yi.prototype,"expandedIconSlot",2);n([x("slot[name=collapse-icon]")],yi.prototype,"collapsedIconSlot",2);n([d()],yi.prototype,"selection",2);n([k("selection")],yi.prototype,"handleSelectionChange",1);yi=n([v("wa-tree")],yi);var k0=C`
  :host {
    display: block;
    position: relative;
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: hidden;
    border-radius: var(--wa-border-radius-m);
  }

  #frame-container {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% / var(--zoom));
    height: calc(100% / var(--zoom));
    transform: scale(var(--zoom));
    transform-origin: 0 0;
  }

  #iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: inherit;
    /* Prevent the iframe from being selected, e.g. by a double click. Doesn't affect selection withing the iframe. */
    user-select: none;
    -webkit-user-select: none;
  }

  #controls {
    display: flex;
    position: absolute;
    bottom: 0.5em;
    align-items: center;
    font-weight: var(--wa-font-weight-semibold);
    padding: 0.25em 0.5em;
    gap: 0.5em;
    border-radius: var(--wa-border-radius-s);
    background: #000b;
    color: white;
    font-size: min(12px, 0.75em);
    user-select: none;
    -webkit-user-select: none;

    &:dir(ltr) {
      right: 0.5em;
    }

    &:dir(rtl) {
      left: 0.5em;
    }

    button {
      display: flex;
      align-items: center;
      padding: 0.25em;
      border: none;
      background: none;
      color: inherit;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        outline-offset: var(--wa-focus-ring-offset);
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    span {
      min-width: 4.5ch; /* extra space so numbers don't shift */
      font-variant-numeric: tabular-nums;
      text-align: center;
    }
  }
`;var Ht=class extends z{constructor(){super(...arguments),this.localize=new W(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(e){const t=Ls(e),i=[];for(const r of t){let o;if(r.endsWith("%")){const s=parseFloat(r.slice(0,-1));if(!isNaN(s))o=Math.max(0,s/100);else continue}else if(o=parseFloat(r),!isNaN(o))o=Math.max(0,o);else continue;i.push(o)}return[...new Set(i)].sort((r,o)=>r-o)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let e=0,t=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let i=1;i<this.availableZoomLevels.length;i++){const r=Math.abs(this.availableZoomLevels[i]-this.zoom);r<t&&(t=r,e=i)}return e}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(e){if(e.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),e.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const t=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[t]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[t])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const e=this.getCurrentZoomIndex();e<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[e+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const e=this.getCurrentZoomIndex();e>0&&(this.zoom=this.availableZoomLevels[e-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return p`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${T(this.sandbox??void 0)}
          src=${T(this.src??void 0)}
          srcdoc=${T(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?"":p`
            <div id="controls" part="controls">
              <button
                part="zoom-out-button"
                aria-label=${this.localize.term("zoomOut")}
                @click=${this.zoomOut}
                ?disabled=${this.isZoomOutDisabled()}
              >
                <slot name="zoom-out-icon">
                  <wa-icon name="minus" label="Zoom out"></wa-icon>
                </slot>
              </button>
              <span>${this.localize.number(this.zoom,{style:"percent",maximumFractionDigits:1})}</span>
              <button
                part="zoom-in-button"
                aria-label=${this.localize.term("zoomIn")}
                @click=${this.zoomIn}
                ?disabled=${this.isZoomInDisabled()}
              >
                <slot name="zoom-in-icon">
                  <wa-icon name="plus" label="Zoom in"></wa-icon>
                </slot>
              </button>
            </div>
          `}
    `}};Ht.css=k0;n([x("#iframe")],Ht.prototype,"iframe",2);n([d()],Ht.prototype,"src",2);n([d()],Ht.prototype,"srcdoc",2);n([d({type:Boolean})],Ht.prototype,"allowfullscreen",2);n([d()],Ht.prototype,"loading",2);n([d()],Ht.prototype,"referrerpolicy",2);n([d()],Ht.prototype,"sandbox",2);n([d({type:Number,reflect:!0})],Ht.prototype,"zoom",2);n([d({attribute:"zoom-levels"})],Ht.prototype,"zoomLevels",2);n([d({type:Boolean,attribute:"without-controls",reflect:!0})],Ht.prototype,"withoutControls",2);n([d({type:Boolean,attribute:"without-interaction",reflect:!0})],Ht.prototype,"withoutInteraction",2);Ht=n([v("wa-zoomable-frame")],Ht);new MutationObserver(e=>{for(const{addedNodes:t}of e)for(const i of t)i.nodeType===Node.ELEMENT_NODE&&C0(i)});async function C0(e){const t=e instanceof Element?e.tagName.toLowerCase():"",i=t?.startsWith("wa-"),r=[...e.querySelectorAll(":not(:defined)")].map(a=>a.tagName.toLowerCase()).filter(a=>a.startsWith("wa-"));i&&!customElements.get(t)&&r.push(t);const o=[...new Set(r)],s=await Promise.allSettled(o.map(a=>$0(a)));for(const a of s)a.status==="rejected"&&console.warn(a.reason);await new Promise(requestAnimationFrame),e.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function $0(e){if(customElements.get(e))return Promise.resolve();const t=e.replace(/^wa-/i,""),i=Ip(`components/${t}/${t}.js`);return new Promise((r,o)=>{import(i).then(()=>r()).catch(()=>o(new Error(`Unable to autoload <${e}> from ${i}`)))})}Hp("lyra",{resolver:e=>new URL(Object.assign({"../icons/js.svg":fp,"../icons/jupyter.svg":mp,"../icons/layout-standard-bottom-panel.svg":gp,"../icons/layout-standard-bottom-sidebar.svg":bp,"../icons/layout-standard-full.svg":wp,"../icons/layout-standard.svg":vp,"../icons/python.svg":yp})[`../icons/${e}.svg`],import.meta.url).href,mutator:e=>{e.setAttribute("fill","currentColor"),e.setAttribute("stroke","currentColor")}});var S0=Object.defineProperty,E0=Object.getOwnPropertyDescriptor,Ue=(e,t,i,r)=>{for(var o=r>1?void 0:r?E0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&S0(t,i,o),o};const A0=150;function ra(e,t,i,r,o){const a=`Toolbar ${e??"default"}`,l=i.filter(h=>h.slot===e&&r(h)),c=e==="start"?p`<slot name="start"></slot>`:e==="end"?p`<slot name="end"></slot>`:p`<slot></slot>`;return p`
        <wa-button-group orientation=${t} label=${a}>
            ${c}
            ${l.map(o)}
        </wa-button-group>
    `}let le=class extends $i{constructor(){super(...arguments),this.position="start",this.orientation="horizontal",this.align="start",this.size="small",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[],this.compact=!1,this.resizeObserver=null,this.resizeDebounceTimer=null,this.overflowCheckScheduled=!1,this.onResize=()=>{this.resizeDebounceTimer!==null&&clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=setTimeout(()=>{this.resizeDebounceTimer=null,this.updateCompactFromSpace()},A0)}}updateCompactFromSpace(){const e=this.shadowRoot?.querySelector(".toolbar-items");if(!e)return;const t=e.scrollWidth>e.clientWidth;this.compact!==t&&(this.compact=t,this.requestUpdate())}scheduleOverflowCheck(){this.overflowCheckScheduled||(this.overflowCheckScheduled=!0,requestAnimationFrame(()=>{this.overflowCheckScheduled=!1,this.updateCompactFromSpace()}))}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=null,this.resizeDebounceTimer!==null&&(clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=null),super.disconnectedCallback()}updated(e){super.updated?.(e),this.compact||this.scheduleOverflowCheck()}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),It(we,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[i]=e.split(":");if(t===`${i}:*`)return!0;const r=t.split(":");if(r.length===2){const o=r[1];if(o==="system.editors"||o===".system.editors")return this.isEditor&&e.startsWith(`${i}:`)}return!1}loadContributions(e){const t=H.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[i]=e.split(":"),r=`${i}:*`,o=H.getContributions(r),s=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const l of a){const c=`${i}:${l}`,h=H.getContributions(c);s.push(...h)}}this.contributions=[...o,...s,...t]}isToolbarItem(e){return"command"in e||"component"in e}contributionCreator(e){if("command"in e){const t=e,i=!this.compact&&!!t.showLabel;return p`
                <wa-button @click=${()=>this.executeCommand(t.command,t.params||{})}
                           title=${t.label}
                           ?disabled="${t.disabled?.get()}"
                           appearance="plain" size=${this.size}>
                    <wa-icon name=${t.icon} label="${t.label}"></wa-icon>
                    ${i?t.label:""}
                </wa-button>
            `}if("component"in e){const t=e.component;return t instanceof Function?t():je(t)}return p`<span>unknown contribution type: ${typeof e}</span>`}render(){const e=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"",t=this.orientation==="vertical"?"column":"row",i={start:"flex-start",center:"center",end:"flex-end"},r=this.contributionCreator.bind(this),o=this.isToolbarItem.bind(this);return p`
            <div class="toolbar-items" style=${rt({"flex-direction":t,"align-items":i[this.align],"justify-content":this.position})}>
                ${ra("start",this.orientation,this.contributions,o,r)}
                ${e}
                ${ra(void 0,this.orientation,this.contributions,o,r)}
                ${ra("end",this.orientation,this.contributions,o,r)}
            </div>
        `}};le.styles=C`
        :host {
            display: flex;
            flex-direction: row;
            --wa-form-control-padding-inline: var(--wa-space-2xs);
        }

        :host([orientation="vertical"]) {
            flex-direction: column;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
            gap: var(--wa-space-2xs);
        }
    `;Ue([d()],le.prototype,"position",2);Ue([d({reflect:!0})],le.prototype,"orientation",2);Ue([d({reflect:!0})],le.prototype,"align",2);Ue([d({reflect:!0})],le.prototype,"size",2);Ue([d({type:Boolean,attribute:"is-editor"})],le.prototype,"isEditor",2);Ue([d({attribute:!1})],le.prototype,"partToolbarContent",2);Ue([d({attribute:!1})],le.prototype,"partToolbarRenderer",2);Ue([w()],le.prototype,"contributions",2);Ue([w()],le.prototype,"compact",2);le=Ue([v("lyra-toolbar")],le);const di=()=>new L0;class L0{}const oa=new WeakMap,hi=Sr(class extends zh{render(e){return R}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),R}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=oa.get(t);i===void 0&&(i=new WeakMap,oa.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?oa.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var _0=Object.defineProperty,T0=Object.getOwnPropertyDescriptor,fo=(e,t,i,r)=>{for(var o=r>1?void 0:r?T0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&_0(t,i,o),o};let Hi=class extends co{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const e=this.name.trim().split(/ +/),t=e.pop(),i=e.pop();return p`
            <wa-icon library="${i||R}" variant="${this.variant||R}"
                         family="${this.family||R}" name=${t} label="${this.label||this.name||R}"></wa-icon>`}};Hi.styles=C`
        :host {
            display: contents;
        }
    `;fo([d()],Hi.prototype,"name",2);fo([d()],Hi.prototype,"family",2);fo([d()],Hi.prototype,"variant",2);fo([d()],Hi.prototype,"label",2);Hi=fo([v("lyra-icon")],Hi);var z0=Object.defineProperty,R0=Object.getOwnPropertyDescriptor,Kt=(e,t,i,r)=>{for(var o=r>1?void 0:r?R0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&z0(t,i,o),o};let _t=class extends co{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(e){if(!this.disabled){if(e&&e.stopPropagation(),this.action){this.action(e);return}if(this.cmd){const t=this.closest("wa-dropdown");t&&t.open!==void 0&&(t.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(e){const t=e.target;t&&t.open!==void 0&&(t.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const e=sc.getKeyBindingsForCommand(this.cmd);return e.length>0?e[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),It(we,e=>{this.dropdown&&e.target===this.dropdown&&(this.dropdownContributions=e.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=H.getContributions(this.dropdown),this.requestUpdate())}renderContribution(e){if("command"in e){const t=e,i=t.disabled?.get();return p`
                <lyra-command 
                    cmd="${t.command}"
                    icon="${t.icon||""}"
                    .params=${t.params||{}}
                    ?disabled="${i}">
                    ${t.label}
                </lyra-command>
            `}if("component"in e){const i=e.component;return i instanceof Function?i():je(i)}return R}render(){const e=this.getKeybinding();return this.isInDropdown()?p`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${t=>this.handleClick(t)}>
                    <lyra-icon name="${this.icon}" label="${this.title}" slot="icon"></lyra-icon>
                    <slot></slot>
                    ${e?p`<span class="keybinding">${e}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?p`
                <wa-dropdown 
                    placement=${this.placement}
                    @wa-select=${t=>this.handleSelect(t)}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        variant=${this.variant}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${e?`${this.title} (${e})`:this.title}>
                        <lyra-icon slot="start" name="${this.icon}" label="${this.title}"></lyra-icon>
                        <slot></slot>
                        ${this.label?this.title:R}
                    </wa-button>
                    
                    ${this.title?p`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:R}
                    
                    ${this.dropdownContributions.map(t=>this.renderContribution(t))}
                    
                    ${this.cmd?p`
                        <wa-divider></wa-divider>
                        <lyra-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                            ${this.title}
                        </lyra-command>
                    `:R}
                </wa-dropdown>
            `:p`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${e?`${this.title} (${e})`:this.title}
                @click=${t=>this.handleClick(t)}>
                <lyra-icon slot="start" name="${this.icon}" label="${this.title}"></lyra-icon>
                <slot></slot>
            </wa-button>
        `}};_t.styles=C`
        :host {
            display: inline-block;
        }

        .keybinding {
            margin-left: auto;
            padding: 2px 6px;
            background: var(--wa-color-neutral-15);
            border: 1px solid var(--wa-color-neutral-25);
            border-radius: 3px;
            font-size: 10px;
            font-family: monospace;
            opacity: 0.7;
        }

        :host-context(.wa-light) .keybinding {
            background: var(--wa-color-neutral-85);
            border: 1px solid var(--wa-color-neutral-75);
        }
    `;Kt([d()],_t.prototype,"cmd",2);Kt([d({type:Object,attribute:!1})],_t.prototype,"action",2);Kt([d()],_t.prototype,"title",2);Kt([d()],_t.prototype,"label",2);Kt([d()],_t.prototype,"icon",2);Kt([d({type:Boolean})],_t.prototype,"disabled",2);Kt([d()],_t.prototype,"appearance",2);Kt([d()],_t.prototype,"variant",2);Kt([d()],_t.prototype,"size",2);Kt([d({type:Object,attribute:!1})],_t.prototype,"params",2);Kt([d()],_t.prototype,"dropdown",2);Kt([d()],_t.prototype,"placement",2);Kt([w()],_t.prototype,"dropdownContributions",2);_t=Kt([v("lyra-command")],_t);var D0=Object.defineProperty,O0=Object.getOwnPropertyDescriptor,zr=(e,t,i,r)=>{for(var o=r>1?void 0:r?O0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&D0(t,i,o),o};let xi=class extends $i{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=di(),this.dropdownRef=di(),this.boundHandleDocumentPointerDown=this.handleDocumentPointerDown.bind(this)}handleDocumentPointerDown(e){if(!this.isOpen)return;const t=e.composedPath();this.dropdownRef.value&&t.includes(this.dropdownRef.value)||t.some(i=>i.getAttribute?.("part")==="submenu")||this.onClose()}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),It(we,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[i]=e.split(":");if(t===`${i}:*`)return!0;const r=t.split(":");if(r.length===2){const o=r[1];if(o==="system.editors"||o===".system.editors")return this.isEditor&&e.startsWith(`${i}:`)}return!1}loadContributions(e){const t=H.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[i]=e.split(":"),r=`${i}:*`,o=H.getContributions(r),s=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const l of a){const c=`${i}:${l}`,h=H.getContributions(c);s.push(...h)}}this.contributions=[...o,...s,...t]}getElementFromPoint(e,t){let i=document.elementFromPoint(e,t);if(!i)return null;for(;i;){const r=i.shadowRoot;if(r){const o=r.elementFromPoint(e,t);if(o&&o!==i){i=o;continue}}break}return i}triggerClickUnderCursor(e){const t=this.getElementFromPoint(e.clientX,e.clientY);if(t){const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY,button:0,buttons:0,detail:1,which:1});t.dispatchEvent(i)}}show(e,t){t&&this.triggerClickUnderCursor(t),this.position=e,this.isOpen=!0,this.updateComplete.then(()=>{document.addEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})})}onClose(){this.isOpen=!1,document.removeEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})}renderContribution(e){if("command"in e){const t=e,i=t.disabled?.get();return p`
                <lyra-command
                    cmd="${t.command}"
                    icon="${t.icon??""}"
                    .params=${t.params??{}}
                    ?disabled="${i}">
                    ${t.label}
                </lyra-command>
            `}else if("component"in e){const t=e.component;return t instanceof Function?t():je(t)}return R}render(){if(!this.isOpen)return R;const e=this.partContextMenuRenderer?this.partContextMenuRenderer():R;return p`
            <wa-dropdown
                ${hi(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}>
                
                <div 
                    slot="trigger"
                    ${hi(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${e}
                ${this.contributions.map(t=>this.renderContribution(t))}
            </wa-dropdown>
        `}};xi.styles=C`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            pointer-events: none;
            z-index: 10000;
        }

        wa-dropdown {
            pointer-events: auto;
            min-width: 200px;
        }
        
        wa-dropdown::part(menu) {
            min-width: 200px;
        }
    `;zr([d({type:Boolean,attribute:"is-editor"})],xi.prototype,"isEditor",2);zr([d({attribute:!1})],xi.prototype,"partContextMenuRenderer",2);zr([w()],xi.prototype,"contributions",2);zr([w()],xi.prototype,"isOpen",2);zr([w()],xi.prototype,"position",2);xi=zr([v("lyra-contextmenu")],xi);const zl=(e,t,i)=>{const r=new Map;for(let o=t;o<=i;o++)r.set(e[o],o);return r},I0=Sr(class extends Er{constructor(e){if(super(e),e.type!==me.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let r;i===void 0?i=t:t!==void 0&&(r=t);const o=[],s=[];let a=0;for(const l of e)o[a]=r?r(l,a):a,s[a]=i(l,a),a++;return{values:s,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,r]){const o=Ah(e),{values:s,keys:a}=this.dt(t,i,r);if(!Array.isArray(o))return this.ut=a,s;const l=this.ut??=[],c=[];let h,u,f=0,m=o.length-1,g=0,b=s.length-1;for(;f<=m&&g<=b;)if(o[f]===null)f++;else if(o[m]===null)m--;else if(l[f]===a[g])c[g]=Ai(o[f],s[g]),f++,g++;else if(l[m]===a[b])c[b]=Ai(o[m],s[b]),m--,b--;else if(l[f]===a[b])c[b]=Ai(o[f],s[b]),Dr(e,c[b+1],o[f]),f++,b--;else if(l[m]===a[g])c[g]=Ai(o[m],s[g]),Dr(e,o[f],o[m]),m--,g++;else if(h===void 0&&(h=zl(a,g,b),u=zl(l,f,m)),h.has(l[f]))if(h.has(l[m])){const y=u.get(a[g]),E=y!==void 0?o[y]:null;if(E===null){const _=Dr(e,o[f]);Ai(_,s[g]),c[g]=_}else c[g]=Ai(E,s[g]),Dr(e,o[f],E),o[y]=null;g++}else Ns(o[m]),m--;else Ns(o[f]),f++;for(;g<=b;){const y=Dr(e,c[b+1]);Ai(y,s[g]),c[g++]=y}for(;f<=m;){const y=o[f++];y!==null&&Ns(y)}return this.ut=a,ec(e,c),Ft}});var P0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,vn=(e,t,i,r)=>{for(var o=r>1?void 0:r?M0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&P0(t,i,o),o};let oo=class extends an{constructor(){super(...arguments),this.placement="top",this.contributions=[],this.tabGroup=di(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("lyra-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",e=>{const t=this.getTabPanel(e.detail.name);t&&(this.updateToolbarFromComponent(t),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(t),this.setupToolbarResizeObserver(t)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:t})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",e=>{const i=e.target.closest("wa-tab-panel");i&&(this.updateToolbarFromComponent(i),requestAnimationFrame(()=>this.updateToolbarHeightVariable(i)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",e=>{const i=e.target.closest("wa-tab-panel");i&&this.updateContextMenuFromComponent(i)}),this.tabGroup.value.addEventListener("click",e=>{const t=e.target,i=t.closest("wa-tab");if(i){const a=i.getAttribute("panel");if(a){const l=this.getTabPanel(a);if(l){const c=l.querySelector(".tab-content");if(c&&c.firstElementChild){const h=c.firstElementChild;h instanceof Qt&&ee.set(h)}}}return}const r=t.closest("wa-scroller.tab-content");if(!r)return;const o=r.closest("wa-tab-panel");if(!o)return;const s=o.querySelector(".tab-content");if(s&&s.firstElementChild){const a=s.firstElementChild;a instanceof Qt&&ee.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",e=>{const t=e,i=t.target.closest("wa-scroller.tab-content");if(!i)return;t.preventDefault();const r=i.closest("wa-tab-panel");r&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(r);const o=r.querySelector("lyra-contextmenu");o&&o.show({x:t.clientX,y:t.clientY},t)})}))}),It(we,e=>{!this.containerId||e.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(e){if(super.updated(e),e.has("contributions")){const t=this.containerId===oi;this.contributions.forEach(i=>{const r=this.getTabPanel(i.name);if(!r)return;const o=r.querySelector(".tab-content");if(o&&o.firstElementChild){const s=o.firstElementChild;s instanceof Qt&&(s.tabContribution=i,s.isEditor=t)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(r))})}}has(e){return this.tabGroup.value?!!this.getTabPanel(e):!1}activate(e){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",e)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(e){if(this.contributions.find(i=>i.name===e.name)){this.activate(e.name);return}this.contributions.push(e),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(e.name);const i=this.getTabPanel(e.name);if(i){const r=i.querySelector(".tab-content");if(r&&r.firstElementChild){const o=r.firstElementChild;o instanceof Qt&&(o.tabContribution=e,o.isEditor=this.containerId===oi)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(i),this.updateToolbarHeightVariable(i),this.setupToolbarResizeObserver(i)})}})}handleTabAuxClick(e,t){e.button===Ua.MIDDLE&&t.closable&&this.closeTab(e,t.name)}async closeTab(e,t){if(e.stopPropagation(),this.isDirty(t)&&!await $c("Unsaved changes will be lost: Do you really want to close?"))return;const i=this.getTabPanel(t);if(!i)return;const r=this.contributions.find(s=>s.name===t);if(!r)return;this.cleanupTabInstance(i);const o=this.contributions.indexOf(r);o>-1&&this.contributions.splice(o,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:i})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(e,t){this.getTab(e).classList.toggle("part-dirty",t)}isDirty(e){return this.getTab(e).classList.contains("part-dirty")}loadAndResolveContributions(){this.containerId&&(this.contributions=H.getContributions(this.containerId),this.requestUpdate())}cleanupTabInstance(e){const t=this.resizeObservers.get(e);t&&(t.disconnect(),this.resizeObservers.delete(e));const i=e.querySelector(".tab-content");if(i&&i.firstElementChild){const r=i.firstElementChild;"close"in r&&typeof r.close=="function"&&r.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const e=this.tabGroup.value.querySelectorAll("wa-tab");if(e.length>0){const t=e.item(0).getAttribute("panel");t&&this.tabGroup.value.setAttribute("active",t)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(e){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${e}']`):null}getTab(e){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${e}']`):null}updateToolbarFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const i=t.firstElementChild;if(!(i instanceof Qt)||!i.renderToolbar)return;const r=e.querySelector("lyra-toolbar");r&&(r.partToolbarRenderer=()=>i.renderToolbar(),r.requestUpdate())}updateContextMenuFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const i=t.firstElementChild;if(!(i instanceof Qt)||!i.renderContextMenu)return;const r=e.querySelector("lyra-contextmenu");r&&(r.partContextMenuRenderer=()=>i.renderContextMenu(),r.requestUpdate())}updateToolbarHeightVariable(e){const t=e.querySelector(".tab-toolbar");if(!t)return;const i=t.offsetHeight;e.style.setProperty("--toolbar-height",`${i}px`)}setupToolbarResizeObserver(e){if(this.resizeObservers.has(e))return;const t=e.querySelector(".tab-toolbar");if(!t)return;const i=new ResizeObserver(()=>{this.updateToolbarHeightVariable(e)});i.observe(t),this.resizeObservers.set(e,i)}render(){const e=ai.getCurrentApp();return p`
            <wa-tab-group ${hi(this.tabGroup)} placement=${this.placement}>
                ${lt(this.contributions.length===0,()=>p`
                        <div class="empty-state">
                            ${lt(e,()=>p`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${e.name}</h2>
                                        ${lt(e.description,()=>p`<p class="empty-description">${e.description}</p>`)}
                                    </div>
                                `,()=>p`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>I0(this.contributions,t=>t.name,t=>p`
                            <wa-tab panel="${t.name}"
                                    @auxclick="${i=>this.handleTabAuxClick(i,t)}">
                                <lyra-icon name="${t.icon}"></lyra-icon>
                                ${t.label}
                                ${lt(t.closable,()=>p`
                                    <wa-icon name="xmark" label="Close"  @click="${i=>this.closeTab(i,t.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${t.name}">
                                ${lt(t.toolbar!==!1,()=>p`
                                    <lyra-toolbar id="toolbar:${t.editorId??t.name}"
                                               class="tab-toolbar"
                                               ?is-editor="${this.containerId===oi}"></lyra-toolbar>
                                `)}
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${t.component?t.component(t.name):R}
                                </wa-scroller>
                                ${lt(t.contextMenu!==!1,()=>p`
                                    <lyra-contextmenu id="contextmenu:${t.name}"
                                                   ?is-editor="${this.containerId===oi}"></lyra-contextmenu>
                                `)}
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};oo.styles=C`
        :host {
            height: 100%;
            width: 100%;
        }

        wa-tab-group {
            height: 100%;
            width: 100%;
        }

        wa-tab-group::part(base) {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            height: 100%;
            width: 100%;
        }

        wa-tab-panel[active] {
            display: grid;
            grid-template-rows: minmax(0, 1fr);
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
        }

        .tab-content {
            position: absolute;
            top: calc(var(--toolbar-height, 0px));
            right: 0;
            left: 0;
            height: calc(100% - var(--toolbar-height, 0px));
        }

        wa-tab::part(base) {
            padding: 3px 0.5rem;
        }

        wa-tab-panel {
            --padding: 0px;
        }

        .part-dirty::part(base) {
            font-style: italic;
            color: var(--wa-color-danger-fill-loud)
        }

        .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            grid-row: 2;
        }

        .empty-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            gap: 0.75rem;
            opacity: 0.3;
        }

        .empty-title {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 500;
            color: var(--wa-color-text-quiet);
        }

        .empty-description {
            margin: 0;
            font-size: 1rem;
            color: var(--wa-color-text-quiet);
            max-width: 500px;
        }

        .empty-icon {
            font-size: 6rem;
            opacity: 0.2;
            color: var(--wa-color-text-quiet);
        }
    `;vn([d({reflect:!0})],oo.prototype,"placement",2);vn([w()],oo.prototype,"contributions",2);oo=vn([v("lyra-tabs")],oo);var N0=Object.defineProperty,F0=Object.getOwnPropertyDescriptor,mo=(e,t,i,r)=>{for(var o=r>1?void 0:r?F0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&N0(t,i,o),o};let xr=class extends $i{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=e=>{if(!this.resizing)return;const i=(this.orientation==="horizontal"?e.clientX:e.clientY)-this.resizing.startPos,r=[...this.resizing.startSizes];r[this.resizing.handleIndex]+=i,r[this.resizing.handleIndex+1]-=i;const o=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=o*.05;if(r[this.resizing.handleIndex]>=s&&r[this.resizing.handleIndex+1]>=s){this.resizing.currentSizes=r;const a=r.map((l,c)=>{const u=`${(l/o*100).toFixed(2)}%`;return c===r.length-1?u:`${u} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const e=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(t=>`${(t/e*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const e=Array.from(this.children).filter(t=>t.tagName!=="STYLE"&&t.tagName!=="SCRIPT"&&!t.classList.contains("resize-handle"));if(e.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=e,!this.settingsLoaded){this.settingsLoaded=!0;const t=await this.getDialogSetting();if(t&&Array.isArray(t.sizes)&&t.sizes.length===this.gridChildren.length){this.gridSizes=t.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(t=>t.trim());else{const t=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>t)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(e){super.updated(e),e.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((t,i)=>{t.style.overflow="hidden",t.style.height="100%",t.style.width="100%",t.style.gridColumn=this.orientation==="horizontal"?`${i*2+1}`:"1",t.style.gridRow=this.orientation==="vertical"?`${i*2+1}`:"1",t.style.display="flex",t.style.flexDirection="column"}))}startResize(e,t){if(e.preventDefault(),t>=this.gridChildren.length-1)return;const i=this.orientation==="horizontal"?e.clientX:e.clientY,r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,o=this.gridSizes.map(s=>s.endsWith("%")?parseFloat(s)/100*r:(s.endsWith("px"),parseFloat(s)));this.resizing={handleIndex:t,startPos:i,startSizes:o},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return R;const e=this.gridSizes.flatMap((t,i)=>i===this.gridSizes.length-1?[t]:[t,"1px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=e,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=e),this.style.overflow="hidden",p`
            <style>
                .resize-handle {
                    position: relative;
                    z-index: 10;
                    background-color: var(--wa-color-neutral-border-quiet);
                    transition: background-color var(--wa-transition-fast);
                }
                
                .resize-handle:hover {
                    background-color: var(--wa-color-brand-fill-normal);
                }
            </style>
            
            ${this.gridChildren.map((t,i)=>{if(i<this.gridChildren.length-1){const r=this.orientation==="horizontal"?`${i*2+2}`:"1",o=this.orientation==="vertical"?`${i*2+2}`:"1";return p`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${r};
                                grid-row: ${o};
                            "
                            @mousedown=${s=>this.startResize(s,i)}
                        ></div>
                    `}return R})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};mo([d()],xr.prototype,"orientation",2);mo([d()],xr.prototype,"sizes",2);mo([w()],xr.prototype,"gridSizes",2);mo([w()],xr.prototype,"gridChildren",2);xr=mo([v("lyra-resizable-grid")],xr);const Rl=(e,t)=>!e.leaf&&t.leaf?-1:e.leaf&&!t.leaf?1:e.label.localeCompare(t.label);var B0=Object.defineProperty,U0=Object.getOwnPropertyDescriptor,yn=(e,t,i,r)=>{for(var o=r>1?void 0:r?U0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&B0(t,i,o),o};const Lo=Je("LyraFileBrowser"),fe=await Ar(Object.assign({"./filebrowser.de.json":()=>Ot(()=>import("./filebrowser.de-BDyGxBGM.js"),[]),"./filebrowser.en.json":()=>Ot(()=>import("./filebrowser.en-DuKn3BNV.js"),[])})),V0=250;let so=class extends Qt{constructor(){super(...arguments),this.fileEditorOptions=[],this.treeRef=di(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),It(we,e=>{e.target==="system.icons"&&this.requestUpdate()}),this.subscribe(te,e=>this.onWorkspaceChanged(e)),this.subscribe(ei,e=>this.onWorkspaceConnected(e))}disconnectedCallback(){this.workspaceChangedDebounceId!==void 0&&(clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=void 0),this.pendingWorkspaceDir=void 0,super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.setupDragAndDrop()}updated(e){super.updated(e),e.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const e=await Y.getWorkspace();await this.loadWorkspace(e??void 0)}renderToolbar(){return p`
            <lyra-command icon="folder-open" title="${fe.CONNECT_WORKSPACE}" dropdown="filebrowser.connections"></lyra-command>
            <lyra-command cmd="refresh_resource" icon="repeat" title="${fe.REFRESH_RESOURCE}"></lyra-command>
            <lyra-command cmd="touch" icon="plus" title="${fe.CREATE_NEW}" dropdown="filebrowser.create"></lyra-command>
        `}renderContextMenu(){const e=Le.get(),t=e instanceof He?e:null,i=t&&this.fileEditorOptions.length>0;return p`
            <lyra-command cmd="open_editor" icon="folder-open">${fe.OPEN}</lyra-command>
            ${i?p`
                <wa-dropdown-item>
                    <lyra-icon name="folder-open" slot="icon"></lyra-icon>
                    ${fe.OPEN_WITH}
                    ${this.fileEditorOptions.map(r=>p`
                        <lyra-command
                            slot="submenu"
                            cmd="open_editor"
                            icon="${r.icon??"file"}"
                            .params=${{path:t.getWorkspacePath(),editorId:r.editorId}}>
                            ${r.title}
                        </lyra-command>
                    `)}
                </wa-dropdown-item>
            `:R}
            <lyra-command cmd="touch" icon="plus" dropdown="filebrowser.create">${fe.CREATE_NEW}</lyra-command>
        `}onWorkspaceChanged(e){this.pendingWorkspaceDir=e,this.workspaceChangedDebounceId!==void 0&&clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=setTimeout(()=>{this.workspaceChangedDebounceId=void 0;const t=this.pendingWorkspaceDir;this.pendingWorkspaceDir=void 0,t?this.applyWorkspaceChange(t):this.loadWorkspace(void 0,!0)},V0)}async applyWorkspaceChange(e){Le.set(void 0),await this.loadWorkspace(e,!0),await this.syncTreeSelection()}async onWorkspaceConnected(e){await this.loadWorkspace(e,!0)}async loadWorkspace(e,t=!1){this.workspaceDir=e,e?this.root=await this.resourceToTreeNode(e,!0,t):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const t=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];t.length>0&&Le.set(t[0].model?.data)}async resourceToTreeNode(e,t=!1,i=!1){const r=e instanceof He,o={data:e,label:e.getName(),leaf:r,children:[]};if(e instanceof De&&!e.getParent())try{const s=await Y.getFolderInfoForDirectory(e);s?.backendName&&(o.workspaceTag=s.backendName)}catch(s){Lo.debug("Failed to get workspace info for directory",s)}if(e instanceof De&&t){for(const s of await e.listChildren(i)){const a=await this.resourceToTreeNode(s,!0);o.children.push(a)}o.children.sort(Rl)}return o}createTreeItems(e,t=!1){if(!e)return p``;const i=!e.leaf&&e.children.length===0,r=e.data,o=r instanceof He,s=o?pr.getFileIcon(r.getName()):e.icon||"folder-open",a=e.workspaceTag;return p`
            <wa-tree-item 
                draggable=${o}
                @dragstart=${o?this.nobubble(l=>this.onDragStart(l,r)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(l=>this.onLazyLoad(l,e))}
                .model=${e} 
                ?expanded=${t}
                ?lazy=${i}>
                <span class="tree-label">
                    <wa-icon name=${s} label="${e.leaf?fe.FILE:fe.FOLDER}"></wa-icon>
                    <span class="tree-label-text">${e.label}</span>
                    ${!e.leaf&&a?p`<wa-badge appearance="outlined" variant="neutral" style="font-size: var(--wa-font-size-xs);">${a}</wa-badge>`:null}
                </span>
                ${e.children.map(l=>this.createTreeItems(l,!1))}
            </wa-tree-item>`}onDragStart(e,t){if(!e.dataTransfer)return;const i=t.getWorkspacePath(),r=t.getName();if(e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain",i),e.dataTransfer.setData("application/x-workspace-file",i),e.dataTransfer.setData("text/uri-list",i),e.dataTransfer.setDragImage){const o=document.createElement("div");o.textContent=r,o.style.position="absolute",o.style.top="-1000px",o.style.padding="4px 8px",o.style.background="var(--wa-color-neutral-10)",o.style.border="1px solid var(--wa-color-neutral-30)",o.style.borderRadius="4px",document.body.appendChild(o),e.dataTransfer.setDragImage(o,0,0),setTimeout(()=>document.body.removeChild(o),0)}}async onLazyLoad(e,t){const i=t.data;i instanceof De&&t.children.length===0&&await this.loadNodeChildren(t,i)}async loadNodeChildren(e,t){if(!this.loadingNodes.has(e)){this.loadingNodes.add(e);try{for(const i of await t.listChildren(!1)){Kl&&i.getName().startsWith(".");const r=await this.resourceToTreeNode(i,!1);e.children.push(r)}e.children.sort(Rl),this.requestUpdate()}catch(i){Lo.error("Failed to load directory children:",i)}finally{this.loadingNodes.delete(e)}}}async onFileDoubleClicked(e){const i=e.currentTarget.model.data;i instanceof He&&(Le.set(i),this.executeCommand("open_editor",{}))}onSelectionChanged(e){const t=e.detail.selection;if(t&&t.length>0){const r=t[0].model.data;Le.set(r),r instanceof He?(this.fileEditorOptions=pr.getEditorOptionsForInput(r),this.updateContextMenu()):(this.fileEditorOptions=[],this.updateContextMenu())}else Le.set(void 0),this.fileEditorOptions=[],this.updateContextMenu()}setupDragAndDrop(){const e=this.treeRef.value;if(!e)return;const t=s=>{if(!s.dataTransfer?.types.includes("Files"))return;s.preventDefault(),s.dataTransfer.dropEffect="copy",e.classList.add("drag-over");const l=s.target.closest("wa-tree-item");l&&l!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=l,l.classList.add("drop-target"))},i=s=>{s.dataTransfer?.types.includes("Files")&&(s.preventDefault(),e.classList.add("drag-over"))},r=s=>{const a=e.getBoundingClientRect(),l=s.clientX,c=s.clientY;(l<=a.left||l>=a.right||c<=a.top||c>=a.bottom)&&(e.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},o=async s=>{if(s.preventDefault(),e.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!s.dataTransfer||!this.workspaceDir)return;const a=Array.from(s.dataTransfer.files);if(a.length===0)return;const l=await this.getDropTarget(s);await this.handleFilesDrop(a,l)};e.removeEventListener("dragover",t),e.removeEventListener("dragenter",i),e.removeEventListener("dragleave",r),e.removeEventListener("drop",o),e.addEventListener("dragover",t),e.addEventListener("dragenter",i),e.addEventListener("dragleave",r),e.addEventListener("drop",o)}async getDropTarget(e){const i=e.target.closest("wa-tree-item");if(i){const o=i.model.data;if(o instanceof De)return o;const s=o.getParent();if(s)return s}return this.workspaceDir}async handleFilesDrop(e,t){const i=e.length;let r=0,o=0,s=0;for(const a of e)try{const l=this.buildTargetPath(t,a.name);if(await this.workspaceDir.getResource(l)&&!await $c(fe.FILE_EXISTS_OVERWRITE({fileName:a.name}))){s++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(a),r++}catch(l){Lo.error(`Failed to upload ${a.name}:`,l),o++}Lo.info(`Uploaded ${r}/${i} files${s>0?`, ${s} skipped`:""}${o>0?`, ${o} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(e,t){const i=e.getWorkspacePath();return i?`${i}/${t}`:t}render(){return p`
            <div class="tree" ${hi(this.treeRef)} style="--drop-files-text: '${fe.DROP_FILES_HERE}'">
                ${lt(!this.workspaceDir,()=>p`
                    <lyra-no-content message="${fe.SELECT_WORKSPACE}"></lyra-no-content>`,()=>lt(this.root,()=>p`
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.root.children.map(e=>this.createTreeItems(e,!0))}
                </wa-tree>`,()=>p``))}
            </div>
        `}};so.styles=C`
        :host {
        }
        
        .tree {
            height: 100%;
            position: relative;
            transition: all 0.2s ease;
        }
        
        .tree.drag-over {
            background-color: var(--wa-color-brand-fill-quiet);
            outline: 2px dashed var(--wa-color-brand-border-normal);
            outline-offset: -4px;
            border-radius: var(--wa-border-radius-medium);
        }
        
        .tree.drag-over::before {
            content: var(--drop-files-text);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            padding: var(--wa-spacing-large);
            border-radius: var(--wa-border-radius-large);
            font-weight: bold;
            pointer-events: none;
            z-index: 1000;
            opacity: 0.3;
        }

        .tree-label {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
        }

        .tree-label-text {
            white-space: nowrap;
        }

        wa-tree-item.drop-target {
            background-color: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            border-radius: var(--wa-border-radius-small);
            outline: 2px solid var(--wa-color-brand-border-loud);
            outline-offset: -2px;
        }
    `;yn([w()],so.prototype,"root",2);yn([w()],so.prototype,"fileEditorOptions",2);so=yn([v("lyra-filebrowser")],so);var q0=Object.getOwnPropertyDescriptor,H0=(e,t,i,r)=>{for(var o=r>1?void 0:r?q0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o};const Ta=await Ar(Object.assign({"./tasks.de.json":()=>Ot(()=>import("./tasks.de-Bm0wNkDH.js"),[]),"./tasks.en.json":()=>Ot(()=>import("./tasks.en-eCglTKJa.js"),[])}));H.registerContribution(us,{component:"<lyra-tasks></lyra-tasks>"});let Fr=null;function td(){return Fr||(Fr=document.createElement("div"),Fr.id="progress-dialog-container",document.body.appendChild(Fr)),Fr}function Dl(){return td().querySelector("wa-dialog")}function W0(){ed(!0)}function ed(e=!1){const t=td(),i=cr.getActiveTasks();if(i.length===0){ae(p``,t);return}const o=Dl();if(!(e||o?.open===!0))return;const a=()=>{const h=Dl();h&&(h.open=!1)},l=()=>{ae(p``,t)},c=p`
        <wa-dialog 
            label="${Ta.ACTIVE_TASKS}" 
            open
            light-dismiss
            style="--width: 600px;"
            @wa-request-close=${a}
            @wa-after-hide=${l}
        >
            <style>
                .progress-dialog-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .tasitem {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: var(--wa-color-neutral-10);
                    border-radius: 8px;
                    border: 1px solid var(--wa-color-neutral-20);
                }
                
                :host-context(.wa-light) .tasitem {
                    background: var(--wa-color-neutral-95);
                    border: 1px solid var(--wa-color-neutral-85);
                }
                
                .tasheader {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .tasname {
                    font-weight: 600;
                    font-size: 1rem;
                    color: var(--wa-color-neutral-90);
                }
                
                :host-context(.wa-light) .tasname {
                    color: var(--wa-color-neutral-10);
                }
                
                .tasmessage {
                    font-size: 0.875rem;
                    color: var(--wa-color-neutral-70);
                    margin-top: 0.25rem;
                }
                
                :host-context(.wa-light) .tasmessage {
                    color: var(--wa-color-neutral-30);
                }
                
                .tasprogress {
                    margin-top: 0.5rem;
                }
                
                wa-progress-bar {
                    --tracheight: 1.5rem;
                }
                
                wa-progress-bar::part(label) {
                    text-align: center;
                    width: 100%;
                    font-size: 0.875rem;
                }
                
                .no-tasks {
                    text-align: center;
                    padding: 2rem;
                    color: var(--wa-color-neutral-60);
                }
                
                :host-context(.wa-light) .no-tasks {
                    color: var(--wa-color-neutral-40);
                }
            </style>
            
            <div class="progress-dialog-content">
                ${i.map(h=>{const u=h.progress>=0||h.totalSteps>0,f=h.progress>=0?h.progress:h.totalSteps>0?Math.round(h.currentStep/h.totalSteps*100):0,m=h.progress<0&&h.totalSteps>0;return p`
                        <div class="tasitem">
                            <div class="tasheader">
                                <wa-icon name="hourglass" style="color: var(--wa-color-warning-fill-loud);"></wa-icon>
                                <div style="flex: 1;">
                                    <div class="tasname">${h.name}</div>
                                    ${h.message?p`
                                        <div class="tasmessage">${h.message}</div>
                                    `:""}
                                </div>
                            </div>
                            <div class="tasprogress">
                                ${u?p`
                                    <wa-progress-bar value="${f}">
                                        ${m?`${h.currentStep}/${h.totalSteps} - `:""}${f}%
                                    </wa-progress-bar>
                                `:p`
                                    <wa-progress-bar indeterminate></wa-progress-bar>
                                `}
                            </div>
                        </div>
                    `})}
            </div>
        </wa-dialog>
    `;ae(c,t)}let za=class extends Qt{doBeforeUI(){this.watch(da,()=>{ed(),this.requestUpdate()})}handleIndicatorClick(){W0()}render(){da.get();const t=cr.getActiveTasks().length;return t===0?p``:p`
            <div class="tasindicator" @click=${this.handleIndicatorClick} title="${Ta.ACTIVE_TASKS_TITLE({taskCount:t.toString()})}">
                <wa-spinner
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);"
                    label="${Ta.ACTIVE_TASKS}"
                ></wa-spinner>
                <wa-badge appearance="outlined" variant="neutral" pill>${t}</wa-badge>
                <div class="tasbar-wrap"><wa-progress-bar indeterminate></wa-progress-bar></div>
            </div>
        `}};za.styles=C`
        :host {
            display: flex;
            align-items: center;
        }
        
        .tasindicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .tasindicator:hover {
            background: var(--wa-color-neutral-15);
        }
        
        :host-context(.wa-light) .tasindicator:hover {
            background: var(--wa-color-neutral-85);
        }
        
        .tascount {
            font-size: 0.875rem;
            color: var(--wa-color-neutral-70);
        }
        
        :host-context(.wa-light) .tascount {
            color: var(--wa-color-neutral-30);
        }
        
        .tasbar-wrap {
            width: 3rem;
        }
        
        .tasbar-wrap wa-progress-bar {
            --tracheight: 4px;
        }
    `;za=H0([v("lyra-tasks")],za);var j0=Object.getOwnPropertyDescriptor,K0=(e,t,i,r)=>{for(var o=r>1?void 0:r?j0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o};const sa=await Ar(Object.assign({"./partname.de.json":()=>Ot(()=>import("./partname.de-iLAwhB2n.js"),[]),"./partname.en.json":()=>Ot(()=>import("./partname.en-DGb3aT7k.js"),[])}));H.registerContribution(us,{component:"<lyra-part-name></lyra-part-name>"});let Ol=class extends $i{doBeforeUI(){this.watch(ee,()=>{this.requestUpdate()})}getPartName(){const e=ee.get();return e&&(e.tabContribution?.label||e.getAttribute("id"))||sa.NO_PART}render(){const t=ee.get()?.tabContribution?.icon||"box";return p`
            <wa-button 
                appearance="plain"
                size="small"
                title="${sa.ACTIVE_PART}">
                <lyra-icon slot="start" name="${t}" label="Part"></lyra-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Ol=K0([v("lyra-part-name")],Ol);var G0=Object.defineProperty,X0=Object.getOwnPropertyDescriptor,go=(e,t,i,r)=>{for(var o=r>1?void 0:r?X0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&G0(t,i,o),o};const Y0=Je("LyraExtensions"),gt=await Ar(Object.assign({"./extensions.de.json":()=>Ot(()=>import("./extensions.de-C2K7_1Fj.js"),[]),"./extensions.en.json":()=>Ot(()=>import("./extensions.en-BWVq_zKr.js"),[])}));let Wi=class extends Qt{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){It(Ur,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(e){st.enable(e.id,!0),this.requestUpdate()}disable(e){st.disable(e.id,!0),this.requestUpdate()}isExtensionRequired(e){const t=ai.getCurrentApp();return!t||!t.extensions?!1:t.extensions.includes(e)}selectionChanged(e){const t=e.detail.selection||[];t.length>0&&t[0].model?this.selectedExtension=t[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return st.getExtensions();const e=this.filterText.toLowerCase();return st.getExtensions().filter(t=>String(t.name).toLowerCase().includes(e)||(t.description?String(t.description).toLowerCase().includes(e):!1)||t.id.toLowerCase().includes(e))}getGroupedExtensions(){const e=this.getFilteredExtensions(),t=[],i=[];return e.forEach(r=>{st.isEnabled(r.id)?t.push(r):i.push(r)}),t.sort((r,o)=>String(r.name).localeCompare(String(o.name))),i.sort((r,o)=>String(r.name).localeCompare(String(o.name))),{enabled:t,available:i}}isExternalExtension(e){return e.external===!0}handleFilterInput(e){this.filterText=e.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const e=await np("Enter extension URL or source identifier:","",!1);if(!e)return;await cr.runAsync("Registering extension",async()=>{let t=e;ze.isGitHubUrl(e)&&(t=ze.convertGitHubUrlToSource(e));const i=ze.parseSource(t);i?.type==="github"?await this.fetchGitHubMetadata(i,t):(this.registerExtensionData={url:t,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(e){At(`Failed to register extension: ${e}`)}}async fetchGitHubMetadata(e,t){try{const i=await ze.fetchGitHubPackageJson(e),r=e.owner,o=e.repo,s=i.name||`ext.${r}-${o}`,a=i.name||`${r}/${o}`,l=i.description||"",c=i.version||"",h=i.author||(typeof i.author=="string"?i.author:i.author?.name)||"";this.registerExtensionData={id:s,name:a,description:l,url:t,version:c,author:h,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(i){Y0.warn(`Could not fetch package.json, using defaults: ${i}`),this.registerExtensionData={url:t,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){At("URL is required");return}if(!this.registerExtensionData.id){At("Extension ID is required");return}if(!this.registerExtensionData.name){At("Extension name is required");return}try{await cr.runAsync("Registering extension",async()=>{const e={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};st.registerExtension(e),await st.loadExtensionFromUrl(this.registerExtensionData.url,e.id),si(`Extension ${e.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(e){At(`Failed to register extension: ${e}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return p`
            <wa-input
                placeholder="${gt.FILTER_PLACEHOLDER}"
                .value=${this.filterText}
                @input=${e=>this.handleFilterInput(e)}
                @wa-clear=${()=>this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
            <wa-button 
                variant="primary" 
                appearance="plain"
                @click=${()=>this.handleRegisterExtension()}
                title="Register a new extension">
                <wa-icon name="plus" label="Add"></wa-icon>
                Register Extension
            </wa-button>
        `}render(){const e=this.getGroupedExtensions(),t=e.enabled.length>0||e.available.length>0;return p`
            ${lt(this.showRegisterDialog,()=>p`
                <wa-dialog 
                    label="Register Extension"
                    open
                    @wa-request-close=${()=>this.cancelRegisterExtension()}
                    style="--wa-dialog-width: 500px;">
                    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
                        <wa-input
                            label="Extension ID *"
                            .value=${this.registerExtensionData.id||""}
                            @input=${i=>{this.registerExtensionData.id=i.target.value,this.requestUpdate()}}
                            required
                            hint="Unique identifier for the extension (e.g., 'ext.my-extension')">
                        </wa-input>
                        
                        <wa-input
                            label="Name *"
                            .value=${this.registerExtensionData.name||""}
                            @input=${i=>{this.registerExtensionData.name=i.target.value,this.requestUpdate()}}
                            required
                            hint="Display name of the extension">
                        </wa-input>
                        
                        <wa-input
                            label="Description"
                            .value=${this.registerExtensionData.description||""}
                            @input=${i=>{this.registerExtensionData.description=i.target.value,this.requestUpdate()}}
                            hint="Description of what the extension does">
                        </wa-input>
                        
                        <wa-input
                            label="URL *"
                            .value=${this.registerExtensionData.url||""}
                            @input=${i=>{this.registerExtensionData.url=i.target.value,this.requestUpdate()}}
                            required
                            readonly
                            hint="Extension source URL or identifier">
                        </wa-input>
                        
                        <div style="display: flex; gap: 0.5rem;">
                            <wa-input
                                label="Version"
                                .value=${this.registerExtensionData.version||""}
                                @input=${i=>{this.registerExtensionData.version=i.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension version">
                            </wa-input>
                            
                            <wa-input
                                label="Author"
                                .value=${this.registerExtensionData.author||""}
                                @input=${i=>{this.registerExtensionData.author=i.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension author">
                            </wa-input>
                        </div>
                        
                        <wa-input
                            label="Icon"
                            .value=${this.registerExtensionData.icon||"puzzle-piece"}
                            @input=${i=>{this.registerExtensionData.icon=i.target.value,this.requestUpdate()}}
                            hint="Icon name (FontAwesome icon)">
                        </wa-input>
                        
                        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
                            <wa-button 
                                variant="default" 
                                @click=${()=>this.cancelRegisterExtension()}>
                                Cancel
                            </wa-button>
                            <wa-button 
                                variant="primary" 
                                @click=${()=>this.confirmRegisterExtension()}
                                ?disabled=${!this.registerExtensionData.id||!this.registerExtensionData.name||!this.registerExtensionData.url}>
                                Register
                            </wa-button>
                        </div>
                    </div>
                </wa-dialog>
            `)}
            <wa-split-panel position="30" class="extensions-split-panel">
                <div slot="start" class="extensions-tree-panel">
                    <wa-scroller class="extensions-tree-scroller" orientation="vertical">
                        <wa-tree 
                            selection="leaf"
                            style="--indent-guide-width: 1px;" 
                            @wa-selection-change="${this.selectionChanged}">
                            ${t?p`
                                ${e.enabled.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                            ${gt.INSTALLED} (${e.enabled.length})
                                        </span>
                                        ${e.enabled.map(i=>{const r=this.isExternalExtension(i);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                                    <span><lyra-icon name="${i.icon}"></lyra-icon></span> ${i.name}${r?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                                ${e.available.length>0?p`
                                    <wa-tree-item expanded>
                                        <span>
                                            <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                            ${gt.AVAILABLE} (${e.available.length})
                                        </span>
                                        ${e.available.map(i=>{const r=this.isExternalExtension(i);return p`
                                                <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                                    <span><lyra-icon name="${i.icon}"></lyra-icon></span> ${i.name}${r?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                                </wa-tree-item>
                                            `})}
                                    </wa-tree-item>
                                `:""}
                            `:""}
                            ${t?"":p`
                                <div style="padding: 1em; text-align: center; opacity: 0.7;">
                                    ${gt.NO_MATCHES({filterText:this.filterText})}
                                </div>
                            `}
                        </wa-tree>
                    </wa-scroller>
                </div>
                <wa-scroller slot="end" class="extensions-detail-scroller" orientation="vertical">
                <div class="extensions-detail-content">
                    ${lt(this.selectedExtension,i=>{const r=this.isExternalExtension(i),o=st.isEnabled(i.id);return p`
                                <h1><lyra-icon name="${i.icon}"></lyra-icon> ${i.name}${r?" (External)":""}</h1>
                                ${lt(r,()=>p`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${gt.EXTERNAL_EXTENSION}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${lt(o,()=>p`
                                        <wa-button 
                                            title="${this.isExtensionRequired(i.id)?gt.REQUIRED_HINT:gt.DISABLE_TITLE}" 
                                            @click="${()=>this.disable(i)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(i.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${gt.UNINSTALL}
                                        </wa-button>
                                        ${lt(this.isExtensionRequired(i.id),()=>p`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${gt.REQUIRED_HINT}</span>
                                            </div>
                                        `)}
                                    `,()=>p`
                                        <wa-button 
                                            title="${gt.ENABLE_TITLE}" 
                                            @click="${()=>this.enable(i)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${gt.INSTALL}
                                        </wa-button>
                                    `)}
                                </div>

                                ${lt(i.experimental,()=>p`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${gt.EXPERIMENTAL}</i></small>
                                    </div>
                                `)}

                                ${lt(i.version||i.author,()=>p`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${lt(i.version,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${gt.VERSION} <strong>${i.version}</strong></span>
                                            </div>
                                        `)}
                                        ${lt(i.author,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${gt.AUTHOR} <strong>${i.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${i.description}</p>

                                ${lt(i.dependencies&&i.dependencies.length>0,()=>p`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${gt.DEPENDENCIES}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${i.dependencies.map(s=>{const a=st.getExtensions().find(c=>c.id===s),l=st.isEnabled(s);return p`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${l?"check-circle":"circle"}" 
                                                            style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        <lyra-icon name="${a?.icon||"puzzle-piece"}"></lyra-icon>
                                                        <span>${a?.name||s}</span>
                                                        ${l?"":p`
                                                            <span class="dependency-badge">${gt.NOT_INSTALLED}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${gt.DEPENDENCIES_HINT}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
                </wa-scroller>
            </wa-split-panel>
        `}};Wi.styles=C`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .extensions-split-panel {
            flex: 1;
            min-height: 0;
            height: 100%;
        }

        .extensions-tree-panel {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 0;
            overflow: hidden;
        }

        .extensions-tree-scroller {
            flex: 1;
            min-height: 0;
        }

        .extensions-detail-scroller {
            height: 100%;
            min-height: 0;
        }

        .extensions-detail-content {
            padding: 1em;
        }

        wa-tree-item > span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        wa-tree-item:has(> wa-tree-item) {
            font-weight: 500;
        }

        .dependencies-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .dependency-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-surface-variant);
        }

        .dependency-item wa-icon:first-child {
            flex-shrink: 0;
        }

        .dependency-item icon {
            flex-shrink: 0;
        }

        .dependency-item span:not(.dependency-badge) {
            flex: 1;
        }

        .dependency-badge {
            font-size: 0.85rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-warning-100);
            color: var(--wa-color-warning-900);
        }

        .required-hint {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.75rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
        }

        .required-hint wa-icon {
            flex-shrink: 0;
        }

        .required-hint span {
            line-height: 1.4;
        }

        .marketplace-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.375rem 0.875rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
            font-weight: 500;
            margin-top: 0.75rem;
            margin-bottom: 0.5rem;
            border: 1px solid var(--wa-color-primary-30);
        }
    `;go([w()],Wi.prototype,"selectedExtension",2);go([w()],Wi.prototype,"filterText",2);go([w()],Wi.prototype,"showRegisterDialog",2);go([w()],Wi.prototype,"registerExtensionData",2);Wi=go([v("lyra-extensions")],Wi);var Z0=Object.defineProperty,Q0=Object.getOwnPropertyDescriptor,_s=(e,t,i,r)=>{for(var o=r>1?void 0:r?Q0(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&Z0(t,i,o),o};const bt=await Ar(Object.assign({"./logterminal.de.json":()=>Ot(()=>import("./logterminal.de-EcKGbnDh.js"),[]),"./logterminal.en.json":()=>Ot(()=>import("./logterminal.en-DpFjNbQM.js"),[])}));let kr=class extends Qt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=di()}connectedCallback(){super.connectedCallback(),this.loadSettings(),qd(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Hd()}log(e,t,i="info"){const r={timestamp:new Date,level:i,source:e,message:t};this.messages=[...this.messages,r],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const o=this.containerRef.value;o&&(o.scrollTop=o.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(e=>e.level===this.filter)}formatTimestamp(e){return e.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(e){switch(e){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(e){switch(e){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const e=this.messages.filter(o=>o.level==="info").length,t=this.messages.filter(o=>o.level==="warning").length,i=this.messages.filter(o=>o.level==="error").length,r=this.messages.filter(o=>o.level==="debug").length;return p`
            <lyra-command 
                icon="list"
                title="${bt.ALL_LOGS}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${bt.ALL} (${this.messages.length})
            </lyra-command>

            <lyra-command 
                icon="circle-info"
                title="${bt.INFO_LOGS}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${bt.INFO}${e>0?` (${e})`:""}
            </lyra-command>

            <lyra-command 
                icon="triangle-exclamation"
                title="${bt.WARNING_LOGS}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${bt.WARNINGS}${t>0?` (${t})`:""}
            </lyra-command>

            <lyra-command 
                icon="circle-xmark"
                title="${bt.ERROR_LOGS}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${bt.ERRORS}${i>0?` (${i})`:""}
            </lyra-command>

            <lyra-command 
                icon="bug"
                title="${bt.DEBUG_LOGS}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${bt.DEBUG}${r>0?` (${r})`:""}
            </lyra-command>

            <wa-divider orientation="vertical"></wa-divider>

            <lyra-command 
                icon="arrow-down" 
                title="${this.autoScroll?bt.AUTO_SCROLL_ENABLED:bt.AUTO_SCROLL_DISABLED}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?bt.AUTO_SCROLL:bt.MANUAL}
            </lyra-command>

            <lyra-command 
                icon="trash" 
                title="${bt.CLEAR_LOGS}"
                .action=${()=>this.clear()}>
                ${bt.CLEAR}
            </lyra-command>
        `}render(){const e=this.getFilteredMessages();return p`
            <div class="log-terminal">
                <div class="messages" ${hi(this.containerRef)}>
                    ${e.length===0?p`<div class="empty-state">${bt.NO_LOG_MESSAGES}</div>`:e.map(t=>p`
                            <div class="message" data-level="${t.level}">
                                <span class="timestamp">${this.formatTimestamp(t.timestamp)}</span>
                                <wa-icon 
                                    name="${this.getLevelIcon(t.level)}" 
                                    label="${t.level}"
                                    style="color: ${this.getLevelColor(t.level)}">
                                </wa-icon>
                                <span class="source">[${t.source}]</span>
                                <span class="text">${t.message}</span>
                            </div>
                        `)}
                </div>
            </div>
        `}async loadSettings(){const e=await this.getDialogSetting();e&&(typeof e.filter=="string"&&(e.filter==="all"||["info","warning","error","debug"].includes(e.filter))&&(this.filter=e.filter),typeof e.autoScroll=="boolean"&&(this.autoScroll=e.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};kr.styles=C`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .log-terminal {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .messages {
            flex: 1;
            overflow-y: auto;
            padding: 0.5rem;
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            line-height: 1.5;
        }

        .message {
            display: flex;
            gap: 0.5rem;
            padding: 0.25rem 0.5rem;
            align-items: baseline;
            border-radius: var(--wa-border-radius-small);
        }

        .message:hover {
            background: var(--wa-color-neutral-background-hover);
        }

        .timestamp {
            color: var(--wa-color-neutral-text-subtle);
            font-size: 0.75rem;
            white-space: nowrap;
        }

        .source {
            color: var(--wa-color-primary-text);
            font-weight: 500;
            white-space: nowrap;
        }

        .text {
            color: var(--wa-color-neutral-text);
            word-break: breaword;
        }

        .message[data-level="error"] .text {
            color: var(--wa-color-danger-text);
        }

        .message[data-level="warning"] .text {
            color: var(--wa-color-warning-text);
        }

        .message[data-level="debug"] .text {
            color: var(--wa-color-neutral-text-subtle);
        }

        .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: var(--wa-color-neutral-text-subtle);
            font-style: italic;
        }

        wa-icon {
            flex-shrink: 0;
        }
    `;_s([w()],kr.prototype,"messages",2);_s([w()],kr.prototype,"autoScroll",2);_s([w()],kr.prototype,"filter",2);kr=_s([v("lyra-log-terminal")],kr);var J0=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,ce=(e,t,i,r)=>{for(var o=r>1?void 0:r?tw(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&J0(t,i,o),o};const ew=await Ar(Object.assign({"./fastviews.de.json":()=>Ot(()=>import("./fastviews.de-CU9Rj7sS.js"),[]),"./fastviews.en.json":()=>Ot(()=>import("./fastviews.en-DnZQwCTs.js"),[])}));let Wt=class extends co{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=di(),this.tabsRef=di(),this.resizeHandleRef=di(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(e){if(!this.disabled)if(this.containerId){const t=document.querySelector(`lyra-tabs#${this.containerId}`);if(!t){console.error(`fastviews: Tab container with id "${this.containerId}" not found`);return}t.open(e)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const t=this.tabsRef.value;t&&t.open(e)})}handleDrawerHide(){this.drawerOpen=!1}startResize(e){e.preventDefault(),e.stopPropagation();const t=this.drawerRef.value;if(!t)return;let r=(()=>{const a=t.shadowRoot?.querySelector('[part="panel"]');if(a&&a.offsetWidth>0)return a.offsetWidth;const h=(window.getComputedStyle(t).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(h){const u=parseFloat(h[1]),f=h[2];if(f==="px")return u;if(f==="vw")return u/100*window.innerWidth;if(f==="vh")return u/100*window.innerHeight;if(f==="%")return u/100*window.innerWidth}return 0})();r===0&&(r=window.innerWidth*.5);const o=a=>{this.resizing&&(a.preventDefault(),a.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-a.clientX,c=Math.round(this.resizing.startSize+l),h=200,u=Math.round(window.innerWidth*.9);if(c>=h&&c<=u){this.drawerSize=`${c}px`;const f=this.drawerRef.value;f&&(f.style.setProperty("--size",this.drawerSize),f.style.setProperty("transition","none"))}this.resizing.rafId=null}))},s=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const a=this.drawerRef.value;a&&a.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:e.clientX,startSize:r,handleMouseMove:o,handleMouseUp:s,rafId:null},document.addEventListener("mousemove",o,{passive:!1}),document.addEventListener("mouseup",s,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),It(we,e=>{this.target&&e.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const e=H.getContributions(this.target);this.tabContributions=e.filter(t=>"name"in t),this.requestUpdate()}renderTabContribution(e){return p`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(e)}>
                <lyra-icon name="${e.icon||""}" label="${e.label}" slot="icon"></lyra-icon>
                ${e.label}
            </wa-dropdown-item>
        `}render(){return!this.target||this.tabContributions.length===0?R:p`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    <lyra-icon slot="start" name="${this.icon}" label="${this.title}"></lyra-icon>
                    <slot></slot>
                </wa-button>
                
                ${this.title?p`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:R}
                
                ${this.tabContributions.map(e=>this.renderTabContribution(e))}
            </wa-dropdown>

            ${this.containerId?R:p`
                <wa-drawer 
                    ${hi(this.drawerRef)}
                    label="${this.title||ew.FAST_VIEWS}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${hi(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <lyra-tabs 
                        ${hi(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </lyra-tabs>
                </wa-drawer>
            `}
        `}};Wt.styles=C`
        :host {
            display: inline-block;
        }

        wa-drawer {
            position: relative;
        }

        wa-drawer::part(panel) {
            position: relative;
        }

        .resize-handle {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            cursor: col-resize;
            z-index: 1000;
            background: transparent;
            transition: background-color 0.2s;
            user-select: none;
            touch-action: none;
        }

        .resize-handle:hover {
            background: var(--wa-color-brand-fill-loud);
        }

        .resize-handle:active {
            background: var(--wa-color-brand-fill-loud);
        }
    `;ce([d()],Wt.prototype,"target",2);ce([d()],Wt.prototype,"title",2);ce([d()],Wt.prototype,"icon",2);ce([d({type:Boolean})],Wt.prototype,"disabled",2);ce([d()],Wt.prototype,"appearance",2);ce([d()],Wt.prototype,"size",2);ce([d()],Wt.prototype,"placement",2);ce([d()],Wt.prototype,"containerId",2);ce([w()],Wt.prototype,"tabContributions",2);ce([w()],Wt.prototype,"drawerOpen",2);ce([w()],Wt.prototype,"drawerSize",2);Wt=ce([v("lyra-fastviews")],Wt);var iw=Object.getOwnPropertyDescriptor,rw=(e,t,i,r)=>{for(var o=r>1?void 0:r?iw(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o};function ow(){let e=document.getElementById("global-dialog-container");return e||(e=document.createElement("div"),e.id="global-dialog-container",document.body.appendChild(e)),e}const id=e=>{try{return new Intl.DisplayNames([e],{type:"language"}).of(e)||e.toUpperCase()}catch{return e.toUpperCase()}},sw=()=>[...Ka.get()].sort(),aw=async()=>{const e=sw(),t=Pi.get();return new Promise(i=>{const r=ow();let o=!1;const s=()=>{const h=r.querySelector("wa-dialog");h&&!o&&(h.open=!1)},a=()=>{o||(o=!0,ae(p``,r),i())},l=async h=>{await ct.set(Wo,h),s()},c=p`
            <wa-dialog 
                label="Select Language" 
                open 
                light-dismiss
                @wa-request-close=${s}
                @wa-after-hide=${a}>
                <style>
                    .language-list {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                        padding: 1rem;
                        min-width: 300px;
                        max-height: 400px;
                        overflow-y: auto;
                    }
                    
                    .language-item {
                        display: flex;
                        align-items: center;
                        padding: 0.75rem;
                        border-radius: var(--wa-border-radius-small);
                        cursor: pointer;
                        transition: background-color 0.2s;
                    }
                    
                    .language-item:hover {
                        background-color: var(--wa-color-neutral-fill-quiet);
                    }
                    
                    .language-item.active {
                        background-color: var(--wa-color-brand-fill-quiet);
                        font-weight: 600;
                    }
                    
                    .language-code {
                        font-family: monospace;
                        margin-right: 0.75rem;
                        min-width: 3rem;
                        color: var(--wa-color-neutral-600);
                    }
                    
                    .language-name {
                        flex: 1;
                    }
                </style>
                
                <div class="language-list">
                    ${e.map(h=>p`
                        <div 
                            class="language-item ${h===t?"active":""}"
                            @click=${()=>l(h)}>
                            <span class="language-code">${h.toUpperCase()}</span>
                            <span class="language-name">${id(h)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;ae(c,r)})};let Ra=class extends $i{render(){const e=Pi.get(),t=id(e),i=`${e.toUpperCase()} ${t}`;return p`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${t}"
                @click=${()=>aw()}>
                ${i}
            </wa-button>
        `}};Ra.styles=C`
        :host {
            display: inline-block;
        }
    `;Ra=rw([v("lyra-language-selector")],Ra);var nw=Object.defineProperty,lw=Object.getOwnPropertyDescriptor,rd=(e,t,i,r)=>{for(var o=r>1?void 0:r?lw(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&nw(t,i,o),o};let ns=class extends $i{constructor(){super(...arguments),this.currentLayoutId="standard"}doBeforeUI(){this.currentLayoutId=ai.getCurrentLayoutId();const e=()=>{this.currentLayoutId=ai.getCurrentLayoutId(),this.requestUpdate()};return window.addEventListener("app-loaded",e),window.addEventListener("layout-changed",e),()=>{window.removeEventListener("app-loaded",e),window.removeEventListener("layout-changed",e)}}async handleSelect(e){const t=e.detail?.item?.value;if(!(!t||t===this.currentLayoutId))try{await ai.setPreferredLayoutId(t)}catch(i){console.error("Failed to switch layout:",i)}}render(){const e=ai.getRegisteredLayouts();if(e.length<=1)return p``;const i=e.find(r=>r.id===this.currentLayoutId)?.name??this.currentLayoutId;return p`
            <wa-dropdown
                placement="bottom-end"
                distance="4"
                size="small"
                @wa-select=${this.handleSelect}>
                <wa-button
                    slot="trigger"
                    appearance="plain"
                    size="small"
                    with-caret
                    title="Switch layout (current: ${i})">
                    <wa-icon name="table-cells" label="Layout"></wa-icon>
                </wa-button>
                ${e.map(r=>p`
                        <wa-dropdown-item
                            value="${r.id}"
                            type="checkbox"
                            ?checked=${r.id===this.currentLayoutId}>
                            ${r.icon?p`<lyra-icon slot="icon" name="${r.icon}" label="${r.name}"></lyra-icon>`:""}
                            ${r.name}
                        </wa-dropdown-item>
                    `)}
            </wa-dropdown>
        `}};ns.styles=C`
        :host {
            display: inline-block;
        }
    `;rd([w()],ns.prototype,"currentLayoutId",2);ns=rd([v("lyra-layout-switcher")],ns);var cw=Object.defineProperty,dw=Object.getOwnPropertyDescriptor,xn=(e,t,i,r)=>{for(var o=r>1?void 0:r?dw(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&cw(t,i,o),o};let ao=class extends co{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return p`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};ao.styles=C`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;xn([d()],ao.prototype,"message",2);xn([d()],ao.prototype,"icon",2);ao=xn([v("lyra-no-content")],ao);const hw="view.filebrowser",uw="view.logTerminal",pw="toolbar.info",fw="toolbar.fastViews",mw="toolbar.languageSelector",gw="toolbar.appSwitcher";H.registerContribution(Bo,{name:hw,label:"Workspace",icon:"folder-open",component:e=>p`<lyra-filebrowser id="${e}"></lyra-filebrowser>`});H.registerContribution(Ba,{name:uw,label:"Log Messages",icon:"list",component:e=>p`<lyra-log-terminal id="${e}"></lyra-log-terminal>`});H.registerContribution(no,{name:pw,label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});H.registerContribution(no,{name:fw,label:"Fast Views",component:'<lyra-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></lyra-fastviews>'});H.registerContribution(no,{name:mw,label:"Language",component:()=>p`<lyra-language-selector></lyra-language-selector>`});H.registerContribution($r,{name:gw,label:"App Switcher",component:()=>p`<lyra-layout-switcher></lyra-layout-switcher>`});var bw=Object.defineProperty,ww=Object.getOwnPropertyDescriptor,bo=(e,t,i,r)=>{for(var o=r>1?void 0:r?ww(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&bw(t,i,o),o};let Cr=class extends an{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return p`
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                }
                
                html {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }
                
                body {
                    height: 100%;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                
                lyra-standard-layout {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                lyra-standard-layout .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                lyra-standard-layout .toolbar-bottom {
                    width: 100%;
                    border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    display: grid;
                    grid-template-columns: 1fr 2fr auto;
                    align-items: center;
                    flex-shrink: 0;
                    min-height: 32px;
                    padding: 0 var(--wa-space-s);
                    box-sizing: border-box;
                }
                
                lyra-standard-layout .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                lyra-standard-layout .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <div class="toolbar-top">
                <lyra-toolbar id=${Ul}></lyra-toolbar>
                <lyra-toolbar id=${Vl}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${$r}></lyra-toolbar>
            </div>
            
            <lyra-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes=${this.getGridSizes()}>
                
                ${this.showLeftSidebar?p`
                        ${this.showBottomSidebar?p`
                                <lyra-resizable-grid 
                                    id="left-sidebar-split" 
                                    orientation="vertical" 
                                    sizes="50%, 50%">
                                    <lyra-tabs id="${Bo}"></lyra-tabs>
                                    <lyra-tabs id="${Wl}"></lyra-tabs>
                                </lyra-resizable-grid>
                            `:p`<lyra-tabs id="${Bo}"></lyra-tabs>`}
                    `:R}
                
                ${this.showBottomPanel?p`
                        <lyra-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <lyra-tabs id="${oi}"></lyra-tabs>
                            <lyra-tabs id="${Ba}"></lyra-tabs>
                        </lyra-resizable-grid>
                    `:p`<lyra-tabs id="${oi}"></lyra-tabs>`}
                
                ${this.showAuxSidebar?p`<lyra-tabs id="${jl}"></lyra-tabs>`:R}
            </lyra-resizable-grid>
            
            <div class="toolbar-bottom">
                <lyra-toolbar id=${ql}></lyra-toolbar>
                <lyra-toolbar id=${us}></lyra-toolbar>
                <lyra-toolbar class="toolbar-end" id=${no}></lyra-toolbar>
            </div>
        `}};bo([d({type:Boolean,attribute:"show-bottom-sidebar"})],Cr.prototype,"showBottomSidebar",2);bo([d({type:Boolean,attribute:"show-bottom-panel"})],Cr.prototype,"showBottomPanel",2);bo([d({type:Boolean,attribute:"show-left-sidebar"})],Cr.prototype,"showLeftSidebar",2);bo([d({type:Boolean,attribute:"show-aux-sidebar"})],Cr.prototype,"showAuxSidebar",2);Cr=bo([v("lyra-standard-layout")],Cr);const vw=[{id:"standard",name:"Standard",label:"Standard",icon:"lyra layout-standard",component:"lyra-standard-layout"},{id:"standard-bottom-panel",name:"Standard (bottom panel)",label:"Standard (bottom panel)",icon:"lyra layout-standard-bottom-panel",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true"}}},{id:"standard-bottom-sidebar",name:"Standard (bottom sidebar)",label:"Standard (bottom sidebar)",icon:"lyra layout-standard-bottom-sidebar",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-sidebar":"true"}}},{id:"standard-full",name:"Standard (panel + sidebar)",label:"Standard (panel + sidebar)",icon:"lyra layout-standard-full",component:{tag:"lyra-standard-layout",attributes:{"show-bottom-panel":"true","show-bottom-sidebar":"true"}}}];for(const e of vw)H.registerContribution(Fo,e);async function yw(e,t=!0){const i=await Y.getWorkspace();if(!i)return null;const r=e?.path;return t&&!r?null:{workspace:i,path:r||""}}function kn(e){return e&&typeof e.getContent=="function"&&typeof e.getSelection=="function"&&typeof e.getSnippet=="function"&&typeof e.getLanguage=="function"&&typeof e.getFilePath=="function"}function li(e=!1){const t={filePath:null,language:null};return e?{...t,snippet:null,cursorLine:null}:t}async function xw(e,t=!0){const i=await yw(e,t);if(!i)return null;const{workspace:r,path:o}=i;if(!o)return null;try{const s=await r.getResource(o);return!s||!(s instanceof He)?null:{workspace:r,path:o,file:s}}catch{return null}}St({command:{id:"disconnect_folder",name:"Disconnect folder",description:"Disconnects a folder from the workspace"},handler:{execute:async()=>{const e=Le.get();if(!(e instanceof De&&e.getParent()===void 0)){At("Select a folder root to disconnect.");return}try{await Y.disconnectFolder(e)}catch(t){At(t.message)}}},contribution:{target:"contextmenu:filebrowser",label:"Disconnect folder",icon:"folder-minus",disabled:()=>{const e=Le.get();return!(e instanceof De&&e.getParent()===void 0)}}});St({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async e=>{await window.showDirectoryPicker({mode:"readwrite"}).then(t=>Y.connectWorkspace(t)).catch(t=>{At(t.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});St({command:{id:"connect_opfs",name:"OPFS",description:"Connect to Origin Private File System (browser storage)",parameters:[]},handler:{execute:async()=>{try{await Y.connectFolder({opfs:!0})}catch(e){At(e.message)}}},contribution:{target:"filebrowser.connections",label:"OPFS (Browser Storage)",icon:"database"}});St({command:{id:"connect_indexeddb",name:"IndexedDB",description:"Connect to IndexedDB-backed workspace (browser storage)",parameters:[{name:"name",description:"Optional display name for this IndexedDB workspace root",required:!1}]},handler:{execute:async e=>{const t=e.params?.name;try{await Y.connectFolder({indexeddb:!0,name:t})}catch(i){At(i.message)}}},contribution:{target:"filebrowser.connections",label:"IndexedDB (Browser Storage)",icon:"database"}});St({command:{id:"refresh_resource",name:"Refresh resource",description:"Refreshes the connected folder of the selected resource, or the whole workspace if nothing is selected",parameters:[]},handler:{execute:async()=>{const e=Le.get();if(e){e.getWorkspace().touch();return}const t=await Y.getWorkspace();if(!t){At("No workspace selected.");return}t.touch()}}});St({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"The path of the file to open within the workspace; if omitted, the active selection is opened",required:!1},{name:"editorId",description:"Open with this editor id; if omitted, use default editor",required:!1}]},handler:{execute:async e=>{const t=e.params?.path,i=e.params?.editorId;let r=null;if(t)r=(await xw({path:t}))?.file??null;else{const o=Le.get();r=o instanceof He?o:null}r&&await pr.loadEditor(r,i)}}});St({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async e=>{const t=e.activeEditor;if(!kn(t))return{...li(),content:null};try{return{content:t.getContent(),filePath:t.getFilePath(),language:t.getLanguage()}}catch{return{...li(),content:null}}}}});St({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async e=>{const t=e.activeEditor;if(!kn(t))return{...li(),selection:null};try{return{selection:t.getSelection(),filePath:t.getFilePath(),language:t.getLanguage()}}catch{return{...li(),selection:null}}}}});St({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async e=>{const t=e.activeEditor;if(!kn(t))return li(!0);try{const i=e.params?.lines?parseInt(e.params.lines,10):5;if(isNaN(i)||i<0)return li(!0);const r=t.getSnippet(i);return r?{snippet:r.snippet,filePath:t.getFilePath(),language:t.getLanguage(),cursorLine:r.cursorLine}:li(!0)}catch{return li(!0)}}}});St({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async e=>{const t=ai.getCurrentApp();if(!t){At("No app loaded");return}const i=t.dependencies??{},r=Object.keys(i).length>0,o=r?p`
                    <wa-tree style="--indent-guide-width: 1px;">
                        <wa-tree-item expanded>
                            <span>${t.name??""}</span>
                            ${Object.entries(i).map(([A,$])=>p`
                                <wa-tree-item>
                                    <span>${A} <small>${$}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    </wa-tree>
                `:p``;let s=null;const a=()=>(s||(s=document.getElementById("global-dialog-container")||document.createElement("div"),s.id||(s.id="global-dialog-container",document.body.appendChild(s))),s),l=()=>{s&&ae(p``,s)},c=A=>{const $=j.parse(A,{async:!1});return p`${je($)}`};let h=[];if(t.releaseHistory)if(typeof t.releaseHistory=="function")try{h=await t.releaseHistory()}catch(A){console.error("Failed to load release history from app:",A),h=[]}else h=t.releaseHistory;const u=t.version??"0.0.0",f=h.length>0?h.findIndex(A=>A.tag_name===u):-1,m=f>=0?f:0;let g=m;const b=A=>{if(h.length===0)return"";const $=h[A],L=$.tag_name===u;let S=`**Version:** ${$.tag_name}`;L&&(S+=" (Current)"),S+=`

`;const O=new Date($.published_at).toLocaleDateString();if(S+=`**Released:** ${O}

`,!L){const it=u.replace(/^v/,""),Gt=$.tag_name.replace(/^v/,""),Et=it.split(".").map(Number),zt=Gt.split(".").map(Number);let de=!1;for(let Rt=0;Rt<Math.max(Et.length,zt.length);Rt++){const he=Et[Rt]||0,ht=zt[Rt]||0;if(ht>he){de=!0;break}if(ht<he)break}de&&(S+=`⚠️ **Update available - reload page to update**

`)}return $.body&&(S+=`---

${$.body}`),S},y=()=>{l()},E=()=>{l()},_=A=>{const $=b(A),L=h.length>0,S=p`
                    <wa-dialog 
                        label="About ${t.name??""} - ${t.version??"0.0.0"}"
                        open 
                        light-dismiss
                        style="--width: 600px;"
                        @wa-request-close=${y}
                        @wa-after-hide=${E}
                    >
                        <style>
                            .dialog-content {
                                height: 600px;
                            }
                            
                            wa-tree-item > span small {
                                color: var(--wa-color-neutral-60);
                                font-size: 0.875em;
                                margin-left: 0.5rem;
                            }
                        </style>
                        <small>${t.description??""}</small>
                        <div class="dialog-content">
                            <wa-tab-group>
                                ${h.length>0?p`
                                    <wa-tab slot="nav" panel="release">Release History</wa-tab>
                                    <wa-tab-panel name="release">
                                        ${c($)}
                                    </wa-tab-panel>
                                `:""}
                                
                                ${r?p`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${o}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${L?p`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${A===h.length-1}
                                    @click=${()=>{A<h.length-1&&(g=A+1,_(g))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${A===0}
                                    @click=${()=>{A>0&&(g=A-1,_(g))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;ae(S,a())};return _(m),new Promise(A=>{const $=()=>{s?.querySelector("wa-dialog[open]")?setTimeout($,100):A()};$()})}}});St({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async e=>{const t=Gr.get()||ee.get();t&&t.isDirty()&&t.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const e=ee.get();return!e||!e.isDirty()}}});const od="theme";async function sd(e){const t=document.documentElement;t.classList.remove("wa-dark","wa-light"),t.classList.add(e)}async function kw(){const e=await ct.get(od);await sd(e||"wa-dark")}async function Cw(e){await ct.set(od,e)}St({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async e=>{const i=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await sd(i),await Cw(i)}},contribution:{target:$r,icon:"circle-half-stroke",label:"Theme Switcher"}});kw().catch(e=>{console.error("Failed to load theme preference:",e)});St({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async e=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:$r,icon:"expand",label:"Fullscreen"}});St({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:e=>{const t={title:"Extensions",data:{},key:"system.extensions",icon:"puzzle-piece",state:{},noOverflow:!0,component:()=>p`<lyra-extensions></lyra-extensions>`};pr.loadEditor(t,"extensions-editor").then()}},contribution:{target:$r,icon:"puzzle-piece",label:"Open Extensions"}});St({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async e=>st.getExtensions().map(i=>({id:i.id,name:i.name,description:i.description,experimental:i.experimental,enabled:st.isEnabled(i.id)}))}});St({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:e,type:t}})=>{e&&(t==="error"?At(e):si(e))}}});St({command:{id:"open_view_as_editor",name:"Open view as editor",description:"Opens a dashboard view in the editor area",parameters:[{name:"name",description:"View contribution name",required:!0},{name:"sourceContributionSlot",description:"source contribution slot (default: SYSTEM_VIEWS)",required:!1}]},handler:{execute:async({params:e})=>{const t=e?.name;if(!t)return;const i=e?.sourceContributionSlot??Hl,o=H.getContributions(i).find(s=>s.name===t);o?.component&&await pr.openTab(o)}}});$t.put("constants",Dd);ki.put("html",p);ki.put("render",ae);ki.put("toastInfo",si);ki.put("toastError",At);ki.put("toastWarning",Kd);ki.put("publish",F);ki.put("subscribe",It);export{rt as $,R as A,$c as B,_i as C,jl as D,oi as E,ql as F,St as G,$t as H,di as I,hi as J,F as K,Qt as L,Vl as M,Ae as N,He as O,Ba as P,Je as Q,we as R,Hl as S,$r as T,te as U,ei as V,wc as W,Gr as X,ca as Y,co as Z,Ot as _,C as a,no as a0,Ci as a1,cd as a2,Z as a3,np as a4,si as a5,Kd as a6,nn as a7,De as a8,Le as a9,Xd as aa,Rw as ab,ae as ac,rc as ad,Oi as b,p as c,H as d,st as e,Fo as f,Od as g,ci as h,Ar as i,Ul as j,ai as k,pr as l,ct as m,d as n,lt as o,je as p,x as q,w as r,I0 as s,v as t,At as u,ki as v,Y as w,cr as x,$i as y,It as z};
