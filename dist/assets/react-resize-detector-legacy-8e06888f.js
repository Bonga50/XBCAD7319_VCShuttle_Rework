System.register(["./react-legacy-e2963388.js","./react-dom-legacy-7a987115.js","./lodash-legacy-7af03d14.js"],(function(e,t){"use strict";var r,n,i,o,c;return{setters:[e=>{r=e.R,n=e.r},e=>{i=e.r},e=>{o=e.t,c=e.d}],execute:function(){e("u",(function(e){var t=void 0===e?{}:e,r=t.skipOnMount,i=void 0!==r&&r,o=t.refreshMode,c=t.refreshRate,l=void 0===c?1e3:c,s=t.refreshOptions,h=t.handleWidth,d=void 0===h||h,f=t.handleHeight,p=void 0===f||f,v=t.targetRef,g=t.observerOptions,y=t.onResize,b=n.useRef(i),w=n.useState({width:void 0,height:void 0}),O=w[0],m=w[1],R=n.useState((null==v?void 0:v.current)||null),E=R[0],z=R[1];v&&setTimeout((function(){v.current!==E&&z(v.current)}),0);var H=n.useCallback((function(e){e!==E&&z(e)}),[E]);H.current=E,n.useEffect((function(){return function(){z(null),H.current=null}}),[]);var j=n.useCallback((function(e,t){return(e.width!==t.width||e.height!==t.height)&&!(e.width===t.width&&!p||e.height===t.height&&!d)}),[d,p]),M=n.useCallback((function(e){(d||p)&&(b.current?b.current=!1:e.forEach((function(e){var t=(null==e?void 0:e.contentRect)||{},r=t.width,n=t.height;m((function(e){return j(e,{width:r,height:n})?{width:r,height:n}:e}))})))}),[d,p,b,j]),P=n.useCallback(a(M,o,l,s),[M,o,l,s]);return n.useEffect((function(){var e;return E?(e=new window.ResizeObserver(P)).observe(E,g):(O.width||O.height)&&m({width:void 0,height:void 0}),function(){var t,r,n;null===(t=null==e?void 0:e.disconnect)||void 0===t||t.call(e),null===(n=(r=P).cancel)||void 0===n||n.call(r)}}),[P,E]),n.useEffect((function(){null==y||y(O.width,O.height)}),[O]),u({ref:H},O)}));var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},t(e,r)},u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)},a=function(e,t,r,n){switch(t){case"debounce":return c(e,r,n);case"throttle":return o(e,r,n);default:return e}},l=function(e){return"function"==typeof e},s=function(){return"undefined"==typeof window},h=function(e){return e instanceof Element||e instanceof HTMLDocument};!function(e){function o(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!s()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(s())return null;if(t)return document.querySelector(t);if(n&&h(n))return n;if(r.targetRef&&h(r.targetRef.current))return r.targetRef.current;var o=i.findDOMNode(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,c=void 0===o||o,u=t.onResize;(i||c)&&e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!s()&&function(e){var t=e.width,n=e.height;r.state.width===t&&r.state.height===n||r.state.width===t&&!c||r.state.height===n&&!i||(null==u||u(t,n),r.setState({width:t,height:n}))}({width:n,height:o}),r.skipOnMount=!1}))},r.getRenderType=function(){var e=r.props,t=e.render,i=e.children;return l(t)?"renderProp":l(i)?"childFunction":n.isValidElement(i)?"child":Array.isArray(i)?"childArray":"parent"};var o=t.skipOnMount,c=t.refreshMode,u=t.refreshRate,d=void 0===u?1e3:u,f=t.refreshOptions;return r.state={width:void 0,height:void 0},r.sizeRef={current:r.state},r.skipOnMount=o,r.targetRef=n.createRef(),r.observableElement=null,s()||(r.resizeHandler=a(r.createResizeHandler,c,d,f),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)})(o,e),o.prototype.componentDidMount=function(){this.attachObserver()},o.prototype.componentDidUpdate=function(){this.attachObserver(),this.sizeRef.current=this.state},o.prototype.componentWillUnmount=function(){s()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},o.prototype.render=function(){var e=this.props,t=e.render,i=e.children,o=e.nodeType,c=void 0===o?"div":o,u=this.state,a={width:u.width,height:u.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return null==t?void 0:t(a);case"childFunction":var l=i;return null==l?void 0:l(a);case"child":var s=i;if(s.type&&"string"==typeof s.type){var h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(a,["targetRef"]);return n.cloneElement(s,h)}return n.cloneElement(s,a);case"childArray":return i.map((function(e){return!!e&&n.cloneElement(e,a)}));default:return r.createElement(c,null)}}}(n.PureComponent)}}}));