System.register(["./@babel-legacy-16afe681.js","./resolve-pathname-legacy-db29410e.js","./value-equal-legacy-2d08b20f.js","./tiny-invariant-legacy-73612b60.js"],(function(n,t){"use strict";var e,i,o,a;return{setters:[n=>{e=n._},n=>{i=n.r},n=>{o=n.v},n=>{a=n.i}],execute:function(){function t(n){return"/"===n.charAt(0)?n:"/"+n}function r(n){return"/"===n.charAt(0)?n.substr(1):n}function c(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function s(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function u(n){var t=n.pathname,e=n.search,i=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),i&&"#"!==i&&(o+="#"===i.charAt(0)?i:"#"+i),o}function f(n,t,o,a){var r;"string"==typeof n?(r=function(n){var t=n||"/",e="",i="",o=t.indexOf("#");-1!==o&&(i=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(e=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===e?"":e,hash:"#"===i?"":i}}(n),r.state=t):(void 0===(r=e({},n)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==t&&void 0===r.state&&(r.state=t));try{r.pathname=decodeURI(r.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return o&&(r.key=o),a?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=i(r.pathname,a.pathname)):r.pathname=a.pathname:r.pathname||(r.pathname="/"),r}function h(){var n=null,t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,i,o){if(null!=n){var a="function"==typeof n?n(t,e):n;"string"==typeof a?"function"==typeof i?i(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(n){var e=!0;function i(){e&&n.apply(void 0,arguments)}return t.push(i),function(){e=!1,t=t.filter((function(n){return n!==i}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];t.forEach((function(n){return n.apply(void 0,e)}))}}}n({a:function(n){void 0===n&&(n={}),d||a(!1);var i=window.history;window.navigator.userAgent.indexOf("Firefox");var o=n,r=o.getUserConfirmation,v=void 0===r?l:r,p=o.hashType,w=void 0===p?"slash":p,O=n.basename?s(t(n.basename)):"",b=m[w],k=b.encodePath,T=b.decodePath;function A(){var n=T(P());return O&&(n=c(n,O)),f(n)}var L=h();function E(n){e(G,n),G.length=i.length,L.notifyListeners(G.location,G.action)}var S=!1,C=null;function U(){var n,t,e=P(),i=k(e);if(e!==i)x(i);else{var o=A(),a=G.location;if(!S&&(t=o,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(C===u(o))return;C=null,function(n){if(S)S=!1,E();else{var t="POP";L.confirmTransitionTo(n,t,v,(function(e){e?E({action:t,location:n}):function(n){var t=G.location,e=M.lastIndexOf(u(t));-1===e&&(e=0);var i=M.lastIndexOf(u(n));-1===i&&(i=0);var o=e-i;o&&(S=!0,j(o))}(n)}))}}(o)}}var I=P(),R=k(I);I!==R&&x(R);var H=A(),M=[u(H)];function j(n){i.go(n)}var F=0;function B(n){1===(F+=n)&&1===n?window.addEventListener(g,U):0===F&&window.removeEventListener(g,U)}var q=!1,G={length:i.length,action:"POP",location:H,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=y(window.location.href)),e+"#"+k(O+u(n))},push:function(n,t){var e="PUSH",i=f(n,void 0,void 0,G.location);L.confirmTransitionTo(i,e,v,(function(n){if(n){var t=u(i),o=k(O+t);if(P()!==o){C=t,function(n){window.location.hash=n}(o);var a=M.lastIndexOf(u(G.location)),r=M.slice(0,a+1);r.push(t),M=r,E({action:e,location:i})}else E()}}))},replace:function(n,t){var e="REPLACE",i=f(n,void 0,void 0,G.location);L.confirmTransitionTo(i,e,v,(function(n){if(n){var t=u(i),o=k(O+t);P()!==o&&(C=t,x(o));var a=M.indexOf(u(G.location));-1!==a&&(M[a]=t),E({action:e,location:i})}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(n){void 0===n&&(n=!1);var t=L.setPrompt(n);return q||(B(1),q=!0),function(){return q&&(q=!1,B(-1)),t()}},listen:function(n){var t=L.appendListener(n);return B(1),function(){B(-1),t()}}};return G},b:function(n){void 0===n&&(n={});var t=n,i=t.getUserConfirmation,o=t.initialEntries,a=void 0===o?["/"]:o,r=t.initialIndex,c=void 0===r?0:r,s=t.keyLength,d=void 0===s?6:s,l=h();function v(n){e(P,n),P.length=P.entries.length,l.notifyListeners(P.location,P.action)}function p(){return Math.random().toString(36).substr(2,d)}var w=O(c,0,a.length-1),g=a.map((function(n){return f(n,void 0,"string"==typeof n?p():n.key||p())})),m=u;function y(n){var t=O(P.index+n,0,P.entries.length-1),e=P.entries[t];l.confirmTransitionTo(e,"POP",i,(function(n){n?v({action:"POP",location:e,index:t}):v()}))}var P={length:g.length,action:"POP",location:g[w],index:w,entries:g,createHref:m,push:function(n,t){var e="PUSH",o=f(n,t,p(),P.location);l.confirmTransitionTo(o,e,i,(function(n){if(n){var t=P.index+1,i=P.entries.slice(0);i.length>t?i.splice(t,i.length-t,o):i.push(o),v({action:e,location:o,index:t,entries:i})}}))},replace:function(n,t){var e="REPLACE",o=f(n,t,p(),P.location);l.confirmTransitionTo(o,e,i,(function(n){n&&(P.entries[P.index]=o,v({action:e,location:o}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(n){var t=P.index+n;return t>=0&&t<P.entries.length},block:function(n){return void 0===n&&(n=!1),l.setPrompt(n)},listen:function(n){return l.appendListener(n)}};return P},c:function(n){void 0===n&&(n={}),d||a(!1);var i,o=window.history,r=(-1===(i=window.navigator.userAgent).indexOf("Android 2.")&&-1===i.indexOf("Android 4.0")||-1===i.indexOf("Mobile Safari")||-1!==i.indexOf("Chrome")||-1!==i.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,g=!(-1===window.navigator.userAgent.indexOf("Trident")),m=n,y=m.forceRefresh,P=void 0!==y&&y,x=m.getUserConfirmation,O=void 0===x?l:x,b=m.keyLength,k=void 0===b?6:b,T=n.basename?s(t(n.basename)):"";function A(n){var t=n||{},e=t.key,i=t.state,o=window.location,a=o.pathname+o.search+o.hash;return T&&(a=c(a,T)),f(a,i,e)}function L(){return Math.random().toString(36).substr(2,k)}var E=h();function S(n){e(W,n),W.length=o.length,E.notifyListeners(W.location,W.action)}function C(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||R(A(n.state))}function U(){R(A(w()))}var I=!1;function R(n){I?(I=!1,S()):E.confirmTransitionTo(n,"POP",O,(function(t){t?S({action:"POP",location:n}):function(n){var t=W.location,e=M.indexOf(t.key);-1===e&&(e=0);var i=M.indexOf(n.key);-1===i&&(i=0);var o=e-i;o&&(I=!0,F(o))}(n)}))}var H=A(w()),M=[H.key];function j(n){return T+u(n)}function F(n){o.go(n)}var B=0;function q(n){1===(B+=n)&&1===n?(window.addEventListener(v,C),g&&window.addEventListener(p,U)):0===B&&(window.removeEventListener(v,C),g&&window.removeEventListener(p,U))}var G=!1,W={length:o.length,action:"POP",location:H,createHref:j,push:function(n,t){var e="PUSH",i=f(n,t,L(),W.location);E.confirmTransitionTo(i,e,O,(function(n){if(n){var t=j(i),a=i.key,c=i.state;if(r)if(o.pushState({key:a,state:c},null,t),P)window.location.href=t;else{var s=M.indexOf(W.location.key),u=M.slice(0,s+1);u.push(i.key),M=u,S({action:e,location:i})}else window.location.href=t}}))},replace:function(n,t){var e="REPLACE",i=f(n,t,L(),W.location);E.confirmTransitionTo(i,e,O,(function(n){if(n){var t=j(i),a=i.key,c=i.state;if(r)if(o.replaceState({key:a,state:c},null,t),P)window.location.replace(t);else{var s=M.indexOf(W.location.key);-1!==s&&(M[s]=i.key),S({action:e,location:i})}else window.location.replace(t)}}))},go:F,goBack:function(){F(-1)},goForward:function(){F(1)},block:function(n){void 0===n&&(n=!1);var t=E.setPrompt(n);return G||(q(1),G=!0),function(){return G&&(G=!1,q(-1)),t()}},listen:function(n){var t=E.appendListener(n);return q(1),function(){q(-1),t()}}};return W},d:f,e:u,l:function(n,t){return n.pathname===t.pathname&&n.search===t.search&&n.hash===t.hash&&n.key===t.key&&o(n.state,t.state)}});var d=!("undefined"==typeof window||!window.document||!window.document.createElement);function l(n,t){t(window.confirm(n))}var v="popstate",p="hashchange";function w(){try{return window.history.state||{}}catch(n){return{}}}var g="hashchange",m={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+r(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:r,decodePath:t},slash:{encodePath:t,decodePath:t}};function y(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function P(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function x(n){window.location.replace(y(window.location.href)+"#"+n)}function O(n,t,e){return Math.min(Math.max(n,t),e)}}}}));
