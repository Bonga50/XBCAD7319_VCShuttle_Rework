System.register([],(function(t,i){"use strict";return{execute:function(){function i(t,i){if((n=(t=i?t.toExponential(i-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function n(t){return(t=i(Math.abs(t)))?t[1]:NaN}t({a:function(t,i){return t=Math.abs(t),i=Math.abs(i)-t,Math.max(0,n(i)-n(t))+1},b:function(t,i){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(n(i)/3)))-n(Math.abs(t)))},f:o,p:function(t){return Math.max(0,-n(Math.abs(t)))}});var r,e=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function o(t){if(!(i=e.exec(t)))throw new Error("invalid format: "+t);var i;return new a({fill:i[1],align:i[2],sign:i[3],symbol:i[4],zero:i[5],width:i[6],comma:i[7],precision:i[8]&&i[8].slice(1),trim:i[9],type:i[10]})}function a(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function s(t,n){var r=i(t,n);if(!r)return t+"";var e=r[0],o=r[1];return o<0?"0."+new Array(-o).join("0")+e:e.length>o+1?e.slice(0,o+1)+"."+e.slice(o+1):e+new Array(o-e.length+2).join("0")}o.prototype=a.prototype,a.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};const c={"%":(t,i)=>(100*t).toFixed(i),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,i)=>t.toExponential(i),f:(t,i)=>t.toFixed(i),g:(t,i)=>t.toPrecision(i),o:t=>Math.round(t).toString(8),p:(t,i)=>s(100*t,i),r:s,s:function(t,n){var e=i(t,n);if(!e)return t+"";var o=e[0],a=e[1],s=a-(r=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,c=o.length;return s===c?o:s>c?o+new Array(s-c+1).join("0"):s>0?o.slice(0,s)+"."+o.slice(s):"0."+new Array(1-s).join("0")+i(t,Math.max(0,n+s-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function h(t){return t}var u,l,f,m=Array.prototype.map,d=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function g(t){var i,e,a=void 0===t.grouping||void 0===t.thousands?h:(i=m.call(t.grouping,Number),e=t.thousands+"",function(t,n){for(var r=t.length,o=[],a=0,s=i[0],c=0;r>0&&s>0&&(c+s+1>n&&(s=Math.max(1,n-c)),o.push(t.substring(r-=s,r+s)),!((c+=s+1)>n));)s=i[a=(a+1)%i.length];return o.reverse().join(e)}),s=void 0===t.currency?"":t.currency[0]+"",u=void 0===t.currency?"":t.currency[1]+"",l=void 0===t.decimal?".":t.decimal+"",f=void 0===t.numerals?h:function(t){return function(i){return i.replace(/[0-9]/g,(function(i){return t[+i]}))}}(m.call(t.numerals,String)),g=void 0===t.percent?"%":t.percent+"",p=void 0===t.minus?"−":t.minus+"",v=void 0===t.nan?"NaN":t.nan+"";function M(t){var i=(t=o(t)).fill,n=t.align,e=t.sign,h=t.symbol,m=t.zero,M=t.width,y=t.comma,b=t.precision,x=t.trim,w=t.type;"n"===w?(y=!0,w="g"):c[w]||(void 0===b&&(b=12),x=!0,w="g"),(m||"0"===i&&"="===n)&&(m=!0,i="0",n="=");var S="$"===h?s:"#"===h&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",k="$"===h?u:/[%p]/.test(w)?g:"",z=c[w],A=/[defgprs%]/.test(w);function N(t){var o,s,c,h=S,u=k;if("c"===w)u=z(t)+u,t="";else{var g=(t=+t)<0||1/t<0;if(t=isNaN(t)?v:z(Math.abs(t),b),x&&(t=function(t){t:for(var i,n=t.length,r=1,e=-1;r<n;++r)switch(t[r]){case".":e=i=r;break;case"0":0===e&&(e=r),i=r;break;default:if(!+t[r])break t;e>0&&(e=0)}return e>0?t.slice(0,e)+t.slice(i+1):t}(t)),g&&0==+t&&"+"!==e&&(g=!1),h=(g?"("===e?e:p:"-"===e||"("===e?"":e)+h,u=("s"===w?d[8+r/3]:"")+u+(g&&"("===e?")":""),A)for(o=-1,s=t.length;++o<s;)if(48>(c=t.charCodeAt(o))||c>57){u=(46===c?l+t.slice(o+1):t.slice(o))+u,t=t.slice(0,o);break}}y&&!m&&(t=a(t,1/0));var N=h.length+t.length+u.length,j=N<M?new Array(M-N+1).join(i):"";switch(y&&m&&(t=a(j+t,j.length?M-u.length:1/0),j=""),n){case"<":t=h+t+u+j;break;case"=":t=h+j+t+u;break;case"^":t=j.slice(0,N=j.length>>1)+h+t+u+j.slice(N);break;default:t=j+h+t+u}return f(t)}return b=void 0===b?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),N.toString=function(){return t+""},N}return{format:M,formatPrefix:function(t,i){var r=M(((t=o(t)).type="f",t)),e=3*Math.max(-8,Math.min(8,Math.floor(n(i)/3))),a=Math.pow(10,-e),s=d[8+e/3];return function(t){return r(a*t)+s}}}}t("d",l),t("c",f),u=g({thousands:",",grouping:[3],currency:["$",""]}),t("d",l=u.format),t("c",f=u.formatPrefix)}}}));