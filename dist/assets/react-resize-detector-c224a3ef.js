import{R as F,r as f}from"./react-1c86ef5d.js";import{r as U}from"./react-dom-534b76c5.js";import{t as I,d as L}from"./lodash-342afa4b.js";var D=function(n,t){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var a in e)e.hasOwnProperty(a)&&(r[a]=e[a])},D(n,t)};function N(n,t){D(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var S=function(){return S=Object.assign||function(t){for(var r,e=1,a=arguments.length;e<a;e++){r=arguments[e];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(t[d]=r[d])}return t},S.apply(this,arguments)};function V(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(r[e[a]]=n[e[a]]);return r}var q=function(n,t,r,e){switch(t){case"debounce":return L(n,r,e);case"throttle":return I(n,r,e);default:return n}},W=function(n){return typeof n=="function"},M=function(){return typeof window>"u"},x=function(n){return n instanceof Element||n instanceof HTMLDocument};(function(n){N(t,n);function t(r){var e=n.call(this,r)||this;e.cancelHandler=function(){e.resizeHandler&&e.resizeHandler.cancel&&(e.resizeHandler.cancel(),e.resizeHandler=null)},e.attachObserver=function(){var s=e.props,o=s.targetRef,u=s.observerOptions;if(!M()){o&&o.current&&(e.targetRef.current=o.current);var i=e.getElement();i&&(e.observableElement&&e.observableElement===i||(e.observableElement=i,e.resizeObserver.observe(i,u)))}},e.getElement=function(){var s=e.props,o=s.querySelector,u=s.targetDomEl;if(M())return null;if(o)return document.querySelector(o);if(u&&x(u))return u;if(e.targetRef&&x(e.targetRef.current))return e.targetRef.current;var i=U.findDOMNode(e);if(!i)return null;var v=e.getRenderType();switch(v){case"renderProp":return i;case"childFunction":return i;case"child":return i;case"childArray":return i;default:return i.parentElement}},e.createResizeHandler=function(s){var o=e.props,u=o.handleWidth,i=u===void 0?!0:u,v=o.handleHeight,b=v===void 0?!0:v,g=o.onResize;if(!(!i&&!b)){var y=function(l){var p=l.width,R=l.height;e.state.width===p&&e.state.height===R||e.state.width===p&&!b||e.state.height===R&&!i||(g==null||g(p,R),e.setState({width:p,height:R}))};s.forEach(function(l){var p=l&&l.contentRect||{},R=p.width,m=p.height,z=!e.skipOnMount&&!M();z&&y({width:R,height:m}),e.skipOnMount=!1})}},e.getRenderType=function(){var s=e.props,o=s.render,u=s.children;return W(o)?"renderProp":W(u)?"childFunction":f.isValidElement(u)?"child":Array.isArray(u)?"childArray":"parent"};var a=r.skipOnMount,d=r.refreshMode,w=r.refreshRate,O=w===void 0?1e3:w,_=r.refreshOptions;return e.state={width:void 0,height:void 0},e.sizeRef={current:e.state},e.skipOnMount=a,e.targetRef=f.createRef(),e.observableElement=null,M()||(e.resizeHandler=q(e.createResizeHandler,d,O,_),e.resizeObserver=new window.ResizeObserver(e.resizeHandler)),e}return t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver(),this.sizeRef.current=this.state},t.prototype.componentWillUnmount=function(){M()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var r=this.props,e=r.render,a=r.children,d=r.nodeType,w=d===void 0?"div":d,O=this.state,_=O.width,s=O.height,o={width:_,height:s,targetRef:this.targetRef},u=this.getRenderType();switch(u){case"renderProp":return e==null?void 0:e(o);case"childFunction":{var i=a;return i==null?void 0:i(o)}case"child":{var v=a;if(v.type&&typeof v.type=="string"){o.targetRef;var b=V(o,["targetRef"]);return f.cloneElement(v,b)}return f.cloneElement(v,o)}case"childArray":{var g=a;return g.map(function(y){return!!y&&f.cloneElement(y,o)})}default:return F.createElement(w,null)}},t})(f.PureComponent);function K(n){var t=n===void 0?{}:n,r=t.skipOnMount,e=r===void 0?!1:r,a=t.refreshMode,d=t.refreshRate,w=d===void 0?1e3:d,O=t.refreshOptions,_=t.handleWidth,s=_===void 0?!0:_,o=t.handleHeight,u=o===void 0?!0:o,i=t.targetRef,v=t.observerOptions,b=t.onResize,g=f.useRef(e),y=f.useState({width:void 0,height:void 0}),l=y[0],p=y[1],R=f.useState((i==null?void 0:i.current)||null),m=R[0],z=R[1];i&&setTimeout(function(){i.current!==m&&z(i.current)},0);var k=f.useCallback(function(c){c!==m&&z(c)},[m]);k.current=m,f.useEffect(function(){return function(){z(null),k.current=null}},[]);var T=f.useCallback(function(c,h){return!(c.width===h.width&&c.height===h.height||c.width===h.width&&!u||c.height===h.height&&!s)},[s,u]),j=f.useCallback(function(c){if(!(!s&&!u)){if(g.current){g.current=!1;return}c.forEach(function(h){var H=(h==null?void 0:h.contentRect)||{},E=H.width,A=H.height;p(function(C){return T(C,{width:E,height:A})?{width:E,height:A}:C})})}},[s,u,g,T]),P=f.useCallback(q(j,a,w,O),[j,a,w,O]);return f.useEffect(function(){var c;return m?(c=new window.ResizeObserver(P),c.observe(m,v)):(l.width||l.height)&&p({width:void 0,height:void 0}),function(){var h,H,E;(h=c==null?void 0:c.disconnect)===null||h===void 0||h.call(c),(E=(H=P).cancel)===null||E===void 0||E.call(H)}},[P,m]),f.useEffect(function(){b==null||b(l.width,l.height)},[l]),S({ref:k},l)}export{K as u};
