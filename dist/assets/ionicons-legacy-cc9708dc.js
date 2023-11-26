System.register([],(function(e,t){"use strict";return{execute:function(){const t=!0,n=!0,o=!0,s=!1,r=!1;let l,i,a,$=!1,c=!1,d=!1,f=!1,m=null,h=!1;const u="http://www.w3.org/1999/xlink",g={},p=e=>"object"==(e=typeof e)||"function"===e,b=(e,t,...n)=>{let o=null,s=null,r=null,l=!1,i=!1;const a=[],$=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?$(o):null!=o&&"boolean"!=typeof o&&((l="function"!=typeof e&&!p(o))&&(o=String(o)),l&&i?a[a.length-1].$text$+=o:a.push(l?y(null,o):o),i=l)};if($(n),t){t.key&&(s=t.key),t.name&&(r=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,a,w);const c=y(e,null);return c.$attrs$=t,a.length>0&&(c.$children$=a),c.$key$=s,c.$name$=r,c},y=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null};return n},v={},w={forEach:(e,t)=>e.map(N).forEach(t),map:(e,t)=>e.map(N).map(t).map(k)},N=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),k=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),b(e.vtag,t,...e.vchildren||[])}const t=y(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},S=new WeakMap,x=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,o=t.$flags$,s=(t.$tagName$,()=>{}),r=((e,t,n,o)=>{var s;let r=C(t,n);const l=fe.get(r);if(e=11===e.nodeType?e:ue,l)if("string"==typeof l){e=e.head||e;let t,n=S.get(e);if(n||S.set(e,n=new Set),!n.has(r)){{t=ue.createElement("style"),t.innerHTML=l;const n=null!==(s=pe.$nonce$)&&void 0!==s?s:function(e){var t,n,o;return null!==(o=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==o?o:void 0}(ue);null!=n&&t.setAttribute("nonce",n),e.insertBefore(t,e.querySelector("link"))}n&&n.add(r)}}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return r})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$);10&o&&(n["s-sc"]=r,n.classList.add(r+"-h"),2&o&&n.classList.add(r+"-s")),s()},C=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),L=(e,t,n,o,s,r)=>{if(n!==o){let i=ce(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=T(n),r=T(o);t.remove(...s.filter((e=>e&&!r.includes(e)))),t.add(...r.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)n&&o[t]===n[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("key"===t);else if("ref"===t)o&&o(e);else if(e.__lookupSetter__(t)||"o"!==t[0]||"n"!==t[1]){const $=p(o);if((i||$&&null!==o)&&!s)try{if(e.tagName.includes("-"))e[t]=o;else{const s=null==o?"":o;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(l){}let c=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,c=!0),null==o||!1===o?!1===o&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(u,t):e.removeAttribute(t)):(!i||4&r||s)&&!$&&(o=!0===o?"":o,c?e.setAttributeNS(u,t,o):e.setAttribute(t,o))}else t="-"===t[2]?t.slice(3):ce(he,a)?a.slice(2):a[2]+t.slice(3),n&&pe.rel(e,t,n,!1),o&&pe.ael(e,t,o,!1)}},R=/\s/,T=e=>e?e.split(R):[],E=(e,t,n,o)=>{const s=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,r=e&&e.$attrs$||g,l=t.$attrs$||g;for(o in r)o in l||L(s,o,r[o],void 0,n,t.$flags$);for(o in l)L(s,o,r[o],l[o],n,t.$flags$)},M=(e,t,n,o)=>{const s=t.$children$[n];let r,c,m,h=0;if($||(d=!0,"slot"===s.$tag$&&(l&&o.classList.add(l+"-s"),s.$flags$|=s.$children$?2:1)),null!==s.$text$)r=s.$elm$=ue.createTextNode(s.$text$);else if(1&s.$flags$)r=s.$elm$=ue.createTextNode("");else{if(f||(f="svg"===s.$tag$),r=s.$elm$=ue.createElementNS(f?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&s.$flags$?"slot-fb":s.$tag$),f&&"foreignObject"===s.$tag$&&(f=!1),E(null,s,f),null!=l&&r["s-si"]!==l&&r.classList.add(r["s-si"]=l),s.$children$)for(h=0;h<s.$children$.length;++h)c=M(e,s,h,r),c&&r.appendChild(c);"svg"===s.$tag$?f=!1:"foreignObject"===r.tagName&&(f=!0)}return r["s-hn"]=a,3&s.$flags$&&(r["s-sr"]=!0,r["s-cr"]=i,r["s-sn"]=s.$name$||"",m=e&&e.$children$&&e.$children$[n],m&&m.$tag$===s.$tag$&&e.$elm$&&A(e.$elm$,!1)),r},A=(e,t)=>{pe.$flags$|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==a&&e["s-ol"]&&(_(e).insertBefore(e,I(e)),e["s-ol"].remove(),e["s-ol"]=void 0,d=!0),t&&A(e,t)}pe.$flags$&=-2},O=(e,t,n,o,s,r)=>{let l,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===a&&(i=i.shadowRoot);s<=r;++s)o[s]&&(l=M(null,n,s,e),l&&(o[s].$elm$=l,i.insertBefore(l,I(t))))},j=(e,t,n,o,s)=>{for(;t<=n;++t)(o=e[t])&&(s=o.$elm$,H(o),c=!0,s["s-ol"]?s["s-ol"].remove():A(s,!0),s.remove())},z=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),I=e=>e&&e["s-ol"]||e,_=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,P=(e,t)=>{const n=t.$elm$=e.$elm$,o=e.$children$,s=t.$children$,r=t.$tag$,l=t.$text$;let i;null===l?(f="svg"===r||"foreignObject"!==r&&f,"slot"===r||E(e,t,f),null!==o&&null!==s?((e,t,n,o)=>{let s,r,l=0,i=0,a=0,$=0,c=t.length-1,d=t[0],f=t[c],m=o.length-1,h=o[0],u=o[m];for(;l<=c&&i<=m;)if(null==d)d=t[++l];else if(null==f)f=t[--c];else if(null==h)h=o[++i];else if(null==u)u=o[--m];else if(z(d,h))P(d,h),d=t[++l],h=o[++i];else if(z(f,u))P(f,u),f=t[--c],u=o[--m];else if(z(d,u))"slot"!==d.$tag$&&"slot"!==u.$tag$||A(d.$elm$.parentNode,!1),P(d,u),e.insertBefore(d.$elm$,f.$elm$.nextSibling),d=t[++l],u=o[--m];else if(z(f,h))"slot"!==d.$tag$&&"slot"!==u.$tag$||A(f.$elm$.parentNode,!1),P(f,h),e.insertBefore(f.$elm$,d.$elm$),f=t[--c],h=o[++i];else{for(a=-1,$=l;$<=c;++$)if(t[$]&&null!==t[$].$key$&&t[$].$key$===h.$key$){a=$;break}a>=0?(r=t[a],r.$tag$!==h.$tag$?s=M(t&&t[i],n,a,e):(P(r,h),t[a]=void 0,s=r.$elm$),h=o[++i]):(s=M(t&&t[i],n,i,e),h=o[++i]),s&&_(d.$elm$).insertBefore(s,I(d.$elm$))}l>c?O(e,null==o[m+1]?null:o[m+1].$elm$,n,o,i,m):i>m&&j(t,l,c)})(n,o,t,s):null!==s?(null!==e.$text$&&(n.textContent=""),O(n,null,t,s,0,s.length-1)):null!==o&&j(o,0,o.length-1),f&&"svg"===r&&(f=!1)):(i=n["s-cr"])?i.parentNode.textContent=l:e.$text$!==l&&(n.data=l)},V=e=>{const t=e.childNodes;let n,o,s,r,l,i;for(o=0,s=t.length;o<s;o++)if(n=t[o],1===n.nodeType){if(n["s-sr"])for(l=n["s-sn"],n.hidden=!1,r=0;r<s;r++)if(i=t[r].nodeType,t[r]["s-hn"]!==n["s-hn"]||""!==l){if(1===i&&l===t[r].getAttribute("slot")){n.hidden=!0;break}}else if(1===i||3===i&&""!==t[r].textContent.trim()){n.hidden=!0;break}V(n)}},X=[],B=e=>{let t,n,o,s,r,l,i=0;const a=e.childNodes,$=a.length;for(;i<$;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(o=n.parentNode.childNodes,s=t["s-sn"],l=o.length-1;l>=0;l--)n=o[l],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(U(n,s)?(r=X.find((e=>e.$nodeToRelocate$===n)),c=!0,n["s-sn"]=n["s-sn"]||s,r?r.$slotRefNode$=t:X.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&X.map((e=>{U(e.$nodeToRelocate$,n["s-sn"])&&(r=X.find((e=>e.$nodeToRelocate$===n)),r&&!e.$slotRefNode$&&(e.$slotRefNode$=r.$slotRefNode$))}))):X.some((e=>e.$nodeToRelocate$===n))||X.push({$nodeToRelocate$:n}));1===t.nodeType&&B(t)}},U=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,H=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(H)},W=(e,t)=>{const n=e.$hostElement$,o=e.$cmpMeta$,s=e.$vnode$||y(null,null),r=(f=t)&&f.$tag$===v?t:b(null,null,t);var f;if(a=n.tagName,o.$attrsToReflect$&&(r.$attrs$=r.$attrs$||{},o.$attrsToReflect$.map((([e,t])=>r.$attrs$[t]=n[e]))),r.$tag$=null,r.$flags$|=4,e.$vnode$=r,r.$elm$=s.$elm$=n.shadowRoot||n,l=n["s-sc"],i=n["s-cr"],$=0!=(1&o.$flags$),c=!1,P(s,r),pe.$flags$|=1,d){let e,t,n,o,s,l;B(r.$elm$);let i=0;for(;i<X.length;i++)e=X[i],t=e.$nodeToRelocate$,t["s-ol"]||(n=ue.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<X.length;i++)if(e=X[i],t=e.$nodeToRelocate$,e.$slotRefNode$){for(o=e.$slotRefNode$.parentNode,s=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(l=n["s-nr"],l&&l["s-sn"]===t["s-sn"]&&o===l.parentNode&&(l=l.nextSibling,!l||!l["s-nr"])){s=l;break}(!s&&o!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),o.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}c&&V(r.$elm$),pe.$flags$&=-2,X.length=0},D=(e,t)=>(e.$flags$|=16,e.$ancestorComponent$,Ce((()=>q(e,t)))),q=(e,t)=>{const n=e.$hostElement$,o=(e.$cmpMeta$.$tagName$,()=>{}),s=n;let r;return r=K(s,t?"componentWillLoad":"componentWillUpdate"),r=Q(r,(()=>K(s,"componentWillRender"))),o(),Q(r,(()=>F(e,s,t)))},F=async(e,t,n)=>{const o=e.$hostElement$,s=(e.$cmpMeta$.$tagName$,()=>{});o["s-rc"],n&&x(e);const r=(e.$cmpMeta$.$tagName$,()=>{});G(e,t,o),r(),s(),J(e)},G=(e,r,l)=>{try{m=r,r=r.render&&r.render(),e.$flags$&=-17,e.$flags$|=2,(t||n)&&(o||n)&&(s||W(e,r))}catch(i){de(i,e.$hostElement$)}return m=null,null},J=e=>{e.$cmpMeta$.$tagName$;const t=()=>{},n=e.$hostElement$;e.$ancestorComponent$,K(n,"componentDidRender"),64&e.$flags$?(K(n,"componentDidUpdate"),t()):(e.$flags$|=64,K(n,"componentDidLoad"),t())},K=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(o){de(o)}},Q=(e,t)=>e&&e.then?e.then(t):t(),Y=(e,t,n,o)=>{const s=ae(e),r=e,l=s.$instanceValues$.get(t),i=s.$flags$,a=r;var $,c;$=n,c=o.$members$[t][0],n=null==$||p($)?$:4&c?"false"!==$&&(""===$||!!$):2&c?parseFloat($):1&c?String($):$;const d=Number.isNaN(l)&&Number.isNaN(n);if(n!==l&&!d){if(s.$instanceValues$.set(t,n),o.$watchers$&&128&i){const e=o.$watchers$[t];e&&e.map((e=>{try{a[e](n,l,t)}catch(o){de(o,r)}}))}if(2==(18&i)){if(a.componentShouldUpdate&&!1===a.componentShouldUpdate(n,l,t))return;D(s,!1)}}},Z=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const n=Object.entries(t.$members$),o=e.prototype;n.map((([e,[n]])=>{(31&n||32&n)&&Object.defineProperty(o,e,{get(){return t=e,ae(this).$instanceValues$.get(t);var t},set(n){Y(this,e,n,t)},configurable:!0,enumerable:!0})}));{const s=new Map;o.attributeChangedCallback=function(e,t,n){pe.jmp((()=>{const t=s.get(e);if(this.hasOwnProperty(t))n=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return;this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const o=n[1]||e;return s.set(o,e),512&n[0]&&t.$attrsToReflect$.push([e,o]),o}))}}return e},ee=async(e,t,n,o,s)=>{if(0==(32&t.$flags$)&&(s=e.constructor,t.$flags$|=32,customElements.whenDefined(n.$tagName$).then((()=>t.$flags$|=128)),s.style)){let o=s.style;"string"!=typeof o&&(o=o[t.$modeName$=(e=>me.map((t=>t(e))).find((e=>!!e)))(e)]);const r=C(n,t.$modeName$);if(!fe.has(r)){const e=(n.$tagName$,()=>{});((e,t,n)=>{let o=fe.get(e);ye&&n?(o=o||new CSSStyleSheet,"string"==typeof o?o=t:o.replaceSync(t)):o=t,fe.set(e,o)})(r,o,!!(1&n.$flags$)),e()}}t.$ancestorComponent$,D(t,!0)},te=e=>{const t=e["s-cr"]=ue.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ne=(e,t)=>{const n={$flags$:t[0],$tagName$:t[1]};n.$members$=t[2],n.$listeners$=t[3],n.$watchers$=e.$watchers$,n.$attrsToReflect$=[];const o=e.prototype.connectedCallback,s=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){$e(this,n)},connectedCallback(){(e=>{if(0==(1&pe.$flags$)){const t=ae(e),n=t.$cmpMeta$,o=(n.$tagName$,()=>{});1&t.$flags$?(oe(e,t,n.$listeners$),t.$lazyInstance$):(t.$flags$|=1,12&n.$flags$&&te(e),n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),ee(e,t,n)),o()}})(this),o&&o.call(this)},disconnectedCallback(){(e=>{if(0==(1&pe.$flags$)){const t=ae(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this),s&&s.call(this)},__attachShadow(){this.attachShadow({mode:"open",delegatesFocus:!!(16&n.$flags$)})}}),e.is=n.$tagName$,Z(e,n)},oe=(e,t,n,o)=>{n&&n.map((([n,o,s])=>{const r=re(e,n),l=se(t,s),i=le(n);pe.ael(r,o,l,i),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>pe.rel(r,o,l,i)))}))},se=(e,t)=>n=>{try{r||e.$hostElement$[t](n)}catch(o){de(o)}},re=(e,t)=>4&t?ue:8&t?he:16&t?ue.body:e,le=e=>be?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),ie=new WeakMap,ae=e=>ie.get(e),$e=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return oe(e,n,t.$listeners$),ie.set(e,n)},ce=(e,t)=>t in e,de=(e,t)=>(0,console.error)(e,t),fe=new Map,me=[],he="undefined"!=typeof window?window:{},ue=he.document||{head:{}},ge=he.HTMLElement||class{},pe={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o),ce:(e,t)=>new CustomEvent(e,t)},be=(()=>{let e=!1;try{ue.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(t){}return e})(),ye=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),ve=[],we=[],Ne=(e,t)=>n=>{e.push(n),h||(h=!0,t&&4&pe.$flags$?xe(Se):pe.raf(Se))},ke=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){de(t)}e.length=0},Se=()=>{ke(ve),ke(we),(h=ve.length>0)&&pe.raf(Se)},xe=e=>{return Promise.resolve(t).then(e);var t},Ce=Ne(we,!0);let Le;const Re=e=>{const t=(()=>{if("undefined"==typeof window)return new Map;if(!Le){const e=window;e.Ionicons=e.Ionicons||{},Le=e.Ionicons.map=e.Ionicons.map||new Map}return Le})().get(e);return t||(e=>{const t=new URL(e,pe.$resourcesUrl$);return t.origin!==he.location.origin?t.href:t.pathname})(`svg/${e}.svg`)},Te=(e,t,n,o,s)=>(n="ios"===(n&&Oe(n))?"ios":"md",o&&"ios"===n?e=Oe(o):s&&"md"===n?e=Oe(s):(e||!t||Me(t)||(e=t),Ae(e)&&(e=Oe(e))),Ae(e)&&""!==e.trim()?""!==e.replace(/[a-z]|-|\d/gi,"")?null:e:null),Ee=e=>Ae(e)&&(e=e.trim(),Me(e))?e:null,Me=e=>e.length>0&&/(\/|\.)/.test(e),Ae=e=>"string"==typeof e,Oe=e=>e.toLowerCase(),je=e=>{if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;if(Ae(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(let t=0;t<e.childNodes.length;t++)if(!je(e.childNodes[t]))return!1}return!0},ze=new Map,Ie=new Map;let _e;const Pe=(e,t)=>{let n=Ie.get(e);if(!n){if("undefined"==typeof fetch||"undefined"==typeof document)return ze.set(e,""),Promise.resolve();if((e=>e.startsWith("data:image/svg+xml"))(e)&&(e=>-1!==e.indexOf(";utf8,"))(e)){_e||(_e=new DOMParser);const t=_e.parseFromString(e,"text/html").querySelector("svg");return t&&ze.set(e,t.outerHTML),Promise.resolve()}n=fetch(e).then((n=>{if(n.ok)return n.text().then((n=>{n&&!1!==t&&(n=(e=>{const t=document.createElement("div");t.innerHTML=e;for(let o=t.childNodes.length-1;o>=0;o--)"svg"!==t.childNodes[o].nodeName.toLowerCase()&&t.removeChild(t.childNodes[o]);const n=t.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()){const e=n.getAttribute("class")||"";if(n.setAttribute("class",(e+" s-ion-icon").trim()),je(n))return t.innerHTML}return""})(n)),ze.set(e,n||"")}));ze.set(e,"")})),Ie.set(e,n)}return n},Ve=ne(class extends ge{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.iconName=null,this.inheritedAttributes={},this.isVisible=!1,this.mode=Xe(),this.lazy=!1,this.sanitize=!0}componentWillLoad(){this.inheritedAttributes=((e,t=[])=>{const n={};return t.forEach((t=>{e.hasAttribute(t)&&(null!==e.getAttribute(t)&&(n[t]=e.getAttribute(t)),e.removeAttribute(t))})),n})(this.el,["aria-label"])}connectedCallback(){this.waitUntilVisible(this.el,"50px",(()=>{this.isVisible=!0,this.loadIcon()}))}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(e,t,n){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const o=this.io=new window.IntersectionObserver((e=>{e[0].isIntersecting&&(o.disconnect(),this.io=void 0,n())}),{rootMargin:t});o.observe(e)}else n()}loadIcon(){if(this.isVisible){const e=(e=>{let t=Ee(e.src);if(t)return t;if(t=Te(e.name,e.icon,e.mode,e.ios,e.md),t)return Re(t);if(e.icon){if(t=Ee(e.icon),t)return t;if(t=Ee(e.icon[e.mode]),t)return t}return null})(this);e&&(ze.has(e)?this.svgContent=ze.get(e):Pe(e,this.sanitize).then((()=>this.svgContent=ze.get(e))))}this.iconName=Te(this.name,this.icon,this.mode,this.ios,this.md)}render(){const{flipRtl:e,iconName:t,inheritedAttributes:n,el:o}=this,s=this.mode||"md",r=!!t&&(t.includes("arrow")||t.includes("chevron"))&&!1!==e,l=e||r;return b(v,Object.assign({role:"img",class:Object.assign(Object.assign({[s]:!0},Be(this.color)),{[`icon-${this.size}`]:!!this.size,"flip-rtl":l,"icon-rtl":l&&(i=o,i&&""!==i.dir?"rtl"===i.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase()))})},n),this.svgContent?b("div",{class:"icon-inner",innerHTML:this.svgContent}):b("div",{class:"icon-inner"}));var i}static get assetsDirs(){return["svg"]}get el(){return this}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}}static get style(){return":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"}},[1,"ion-icon",{mode:[1025],color:[1],ios:[1],md:[1],flipRtl:[4,"flip-rtl"],name:[513],src:[1],icon:[8],size:[1],lazy:[4],sanitize:[4],svgContent:[32],isVisible:[32]}]),Xe=()=>"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md",Be=e=>e?{"ion-color":!0,[`ion-color-${e}`]:!0}:null;e("d",(function(){"undefined"!=typeof customElements&&["ion-icon"].forEach((e=>{"ion-icon"===e&&(customElements.get(e)||customElements.define(e,Ve))}))}))}}}));