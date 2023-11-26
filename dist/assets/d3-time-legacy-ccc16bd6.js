System.register(["./d3-array-legacy-a76cf2d1.js"],(function(e,t){"use strict";var n,r;return{setters:[e=>{n=e.f,r=e.t}],execute:function(){const t=new Date,s=new Date;function o(e,n,r,a){function g(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return g.floor=t=>(e(t=new Date(+t)),t),g.ceil=t=>(e(t=new Date(t-1)),n(t,1),e(t),t),g.round=e=>{const t=g(e),n=g.ceil(e);return e-t<n-e?t:n},g.offset=(e,t)=>(n(e=new Date(+e),null==t?1:Math.floor(t)),e),g.range=(t,r,s)=>{const o=[];if(t=g.ceil(t),s=null==s?1:Math.floor(s),!(t<r&&s>0))return o;let a;do{o.push(a=new Date(+t)),n(t,s),e(t)}while(a<t&&t<r);return o},g.filter=t=>o((n=>{if(n>=n)for(;e(n),!t(n);)n.setTime(n-1)}),((e,r)=>{if(e>=e)if(r<0)for(;++r<=0;)for(;n(e,-1),!t(e););else for(;--r>=0;)for(;n(e,1),!t(e););})),r&&(g.count=(n,o)=>(t.setTime(+n),s.setTime(+o),e(t),e(s),Math.floor(r(t,s))),g.every=e=>(e=Math.floor(e),isFinite(e)&&e>0?e>1?g.filter(a?t=>a(t)%e==0:t=>g.count(0,t)%e==0):g:null)),g}const a=o((()=>{}),((e,t)=>{e.setTime(+e+t)}),((e,t)=>t-e));a.every=e=>(e=Math.floor(e),isFinite(e)&&e>0?e>1?o((t=>{t.setTime(Math.floor(t/e)*e)}),((t,n)=>{t.setTime(+t+n*e)}),((t,n)=>(n-t)/e)):a:null),a.range;const g=1e3,l=6e4,u=36e5,i=864e5,T=6048e5,c=2592e6,f=31536e6,C=e("s",o((e=>{e.setTime(e-e.getMilliseconds())}),((e,t)=>{e.setTime(+e+t*g)}),((e,t)=>(t-e)/g),(e=>e.getUTCSeconds())));C.range;const U=e("t",o((e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*g)}),((e,t)=>{e.setTime(+e+t*l)}),((e,t)=>(t-e)/l),(e=>e.getMinutes())));U.range;const M=e("u",o((e=>{e.setUTCSeconds(0,0)}),((e,t)=>{e.setTime(+e+t*l)}),((e,t)=>(t-e)/l),(e=>e.getUTCMinutes())));M.range;const h=e("a",o((e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*g-e.getMinutes()*l)}),((e,t)=>{e.setTime(+e+t*u)}),((e,t)=>(t-e)/u),(e=>e.getHours())));h.range;const D=e("h",o((e=>{e.setUTCMinutes(0,0,0)}),((e,t)=>{e.setTime(+e+t*u)}),((e,t)=>(t-e)/u),(e=>e.getUTCHours())));D.range;const F=e("b",o((e=>e.setHours(0,0,0,0)),((e,t)=>e.setDate(e.getDate()+t)),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*l)/i),(e=>e.getDate()-1)));F.range,e("i",o((e=>{e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+t)}),((e,t)=>(t-e)/i),(e=>e.getUTCDate()-1))).range;const Y=o((e=>{e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+t)}),((e,t)=>(t-e)/i),(e=>Math.floor(e/i)));function m(e){return o((t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)}),((e,t)=>{e.setDate(e.getDate()+7*t)}),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*l)/T))}Y.range;const y=e("c",m(0)),H=e("p",m(1)),d=m(2),v=m(3),w=e("q",m(4)),S=m(5),z=m(6);function O(e){return o((t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+7*t)}),((e,t)=>(t-e)/T))}y.range,H.range,d.range,v.range,w.range,S.range,z.range;const p=e("j",O(0)),b=e("o",O(1)),j=O(2),x=O(3),k=e("r",O(4)),q=O(5),A=O(6);p.range,b.range,j.range,x.range,k.range,q.range,A.range;const B=e("d",o((e=>{e.setDate(1),e.setHours(0,0,0,0)}),((e,t)=>{e.setMonth(e.getMonth()+t)}),((e,t)=>t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())),(e=>e.getMonth())));B.range;const E=e("k",o((e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)}),((e,t)=>t.getUTCMonth()-e.getUTCMonth()+12*(t.getUTCFullYear()-e.getUTCFullYear())),(e=>e.getUTCMonth())));E.range;const G=e("e",o((e=>{e.setMonth(0,1),e.setHours(0,0,0,0)}),((e,t)=>{e.setFullYear(e.getFullYear()+t)}),((e,t)=>t.getFullYear()-e.getFullYear()),(e=>e.getFullYear())));G.every=e=>isFinite(e=Math.floor(e))&&e>0?o((t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)}),((t,n)=>{t.setFullYear(t.getFullYear()+n*e)})):null,G.range;const I=e("l",o((e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)}),((e,t)=>t.getUTCFullYear()-e.getUTCFullYear()),(e=>e.getUTCFullYear())));function J(e,t,s,o,U,M){const h=[[C,1,g],[C,5,5e3],[C,15,15e3],[C,30,3e4],[M,1,l],[M,5,3e5],[M,15,9e5],[M,30,18e5],[U,1,u],[U,3,108e5],[U,6,216e5],[U,12,432e5],[o,1,i],[o,2,1728e5],[s,1,T],[t,1,c],[t,3,7776e6],[e,1,f]];function D(t,s,o){const g=Math.abs(s-t)/o,l=n((([,,e])=>e)).right(h,g);if(l===h.length)return e.every(r(t/f,s/f,o));if(0===l)return a.every(Math.max(r(t,s,o),1));const[u,i]=h[g/h[l-1][2]<h[l][2]/g?l-1:l];return u.every(i)}return[function(e,t,n){const r=t<e;r&&([e,t]=[t,e]);const s=n&&"function"==typeof n.range?n:D(e,t,n),o=s?s.range(e,+t+1):[];return r?o.reverse():o},D]}I.every=e=>isFinite(e=Math.floor(e))&&e>0?o((t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),((t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)})):null,I.range;const[K,L]=J(I,E,p,Y,D,M);e({n:K,m:L});const[N,P]=J(G,B,y,F,h,U);e({g:N,f:P})}}}));