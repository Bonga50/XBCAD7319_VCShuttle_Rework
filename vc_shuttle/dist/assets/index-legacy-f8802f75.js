!function(){function o(o,e,n){return(e=function(o){var e=function(o,e){if("object"!=typeof o||null===o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var r=n.call(o,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(o)}(o,"string");return"symbol"==typeof e?e:String(e)}(e))in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}System.register(["./react-legacy-05c10a62.js","./react-dom-legacy-475c7fb9.js","./@ionic-legacy-86646565.js","./react-router-legacy-636376fc.js","./hoist-non-react-statics-legacy-caf953ca.js","./scheduler-legacy-acde4bc8.js","./@stencil-legacy-64075f81.js","./tslib-legacy-aae76428.js","./history-legacy-a3d855c2.js","./@babel-legacy-6ba21f19.js","./resolve-pathname-legacy-db29410e.js","./tiny-invariant-legacy-73612b60.js","./ionicons-legacy-cc9708dc.js","./prop-types-legacy-aeb06a43.js","./path-to-regexp-legacy-1aa07878.js"],(function(e,n){"use strict";var r,t,i,s,c,l,a,d,h,g,f,u,m,b,p,x,j,k,y,A,v,w,S,I,D,N,T,L,B,E;return{setters:[o=>{r=o.j,t=o.r,i=o.R},o=>{s=o.c},o=>{c=o.I,l=o.a,a=o.b,d=o.c,h=o.d,g=o.e,f=o.f,u=o.g,m=o.h,b=o.i,p=o.j,x=o.k,j=o.l,k=o.m,y=o.n,A=o.o,v=o.p,w=o.q,S=o.r,I=o.s,D=o.t,N=o.u,T=o.v,L=o.w,B=o.x},o=>{E=o.R},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".container{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container strong{font-size:20px;line-height:26px}#container p{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a{text-decoration:none}:root{--ion-color-primary: #3880ff;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #5260ff;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}@media (prefers-color-scheme: dark){body{--ion-color-primary: #428cff;--ion-color-primary-rgb: 66,140,255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255,255,255;--ion-color-primary-shade: #3a7be0;--ion-color-primary-tint: #5598ff;--ion-color-secondary: #50c8ff;--ion-color-secondary-rgb: 80,200,255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255,255,255;--ion-color-secondary-shade: #46b0e0;--ion-color-secondary-tint: #62ceff;--ion-color-tertiary: #6a64ff;--ion-color-tertiary-rgb: 106,100,255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255,255,255;--ion-color-tertiary-shade: #5d58e0;--ion-color-tertiary-tint: #7974ff;--ion-color-success: #2fdf75;--ion-color-success-rgb: 47,223,117;--ion-color-success-contrast: #000000;--ion-color-success-contrast-rgb: 0,0,0;--ion-color-success-shade: #29c467;--ion-color-success-tint: #44e283;--ion-color-warning: #ffd534;--ion-color-warning-rgb: 255,213,52;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0,0,0;--ion-color-warning-shade: #e0bb2e;--ion-color-warning-tint: #ffd948;--ion-color-danger: #ff4961;--ion-color-danger-rgb: 255,73,97;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255,255,255;--ion-color-danger-shade: #e04055;--ion-color-danger-tint: #ff5b71;--ion-color-dark: #f4f5f8;--ion-color-dark-rgb: 244,245,248;--ion-color-dark-contrast: #000000;--ion-color-dark-contrast-rgb: 0,0,0;--ion-color-dark-shade: #d7d8da;--ion-color-dark-tint: #f5f6f9;--ion-color-medium: #989aa2;--ion-color-medium-rgb: 152,154,162;--ion-color-medium-contrast: #000000;--ion-color-medium-contrast-rgb: 0,0,0;--ion-color-medium-shade: #86888f;--ion-color-medium-tint: #a2a4ab;--ion-color-light: #222428;--ion-color-light-rgb: 34,36,40;--ion-color-light-contrast: #ffffff;--ion-color-light-contrast-rgb: 255,255,255;--ion-color-light-shade: #1e2023;--ion-color-light-tint: #383a3e}.ios body{--ion-background-color: #000000;--ion-background-color-rgb: 0,0,0;--ion-text-color: #ffffff;--ion-text-color-rgb: 255,255,255;--ion-color-step-50: #0d0d0d;--ion-color-step-100: #1a1a1a;--ion-color-step-150: #262626;--ion-color-step-200: #333333;--ion-color-step-250: #404040;--ion-color-step-300: #4d4d4d;--ion-color-step-350: #595959;--ion-color-step-400: #666666;--ion-color-step-450: #737373;--ion-color-step-500: #808080;--ion-color-step-550: #8c8c8c;--ion-color-step-600: #999999;--ion-color-step-650: #a6a6a6;--ion-color-step-700: #b3b3b3;--ion-color-step-750: #bfbfbf;--ion-color-step-800: #cccccc;--ion-color-step-850: #d9d9d9;--ion-color-step-900: #e6e6e6;--ion-color-step-950: #f2f2f2;--ion-item-background: #000000;--ion-card-background: #1c1c1d}.ios ion-modal{--ion-background-color: var(--ion-color-step-100);--ion-toolbar-background: var(--ion-color-step-150);--ion-toolbar-border-color: var(--ion-color-step-250)}.md body{--ion-background-color: #121212;--ion-background-color-rgb: 18,18,18;--ion-text-color: #ffffff;--ion-text-color-rgb: 255,255,255;--ion-border-color: #222222;--ion-color-step-50: #1e1e1e;--ion-color-step-100: #2a2a2a;--ion-color-step-150: #363636;--ion-color-step-200: #414141;--ion-color-step-250: #4d4d4d;--ion-color-step-300: #595959;--ion-color-step-350: #656565;--ion-color-step-400: #717171;--ion-color-step-450: #7d7d7d;--ion-color-step-500: #898989;--ion-color-step-550: #949494;--ion-color-step-600: #a0a0a0;--ion-color-step-650: #acacac;--ion-color-step-700: #b8b8b8;--ion-color-step-750: #c4c4c4;--ion-color-step-800: #d0d0d0;--ion-color-step-850: #dbdbdb;--ion-color-step-900: #e7e7e7;--ion-color-step-950: #f3f3f3;--ion-item-background: #1e1e1e;--ion-toolbar-background: #1f1f1f;--ion-tab-bar-background: #1f1f1f;--ion-card-background: #1e1e1e}}\n",document.head.appendChild(e);const n=()=>r.jsxs("div",{children:[r.jsx("h4",{className:"ion-text-center ion-margin-top",children:"VC Shuttle"}),r.jsx("form",{children:r.jsx(c,{children:r.jsx(l,{className:"ion-justify-content-center ion-align-items-center",style:{height:"10%"},children:r.jsxs(a,{size:"12",sizeMd:"6",sizeLg:"4",sizeXl:"3",children:[r.jsx("div",{className:"ion-text-center ion-padding",children:r.jsx("img",{src:"/assets/placeholderimage_logo-38cb3909.png",alt:"Place holder logo",width:"50%"})}),r.jsxs("form",{children:[r.jsx(d,{className:"ion-margin-top",label:"Email","label-placement":"floating",type:"email",fill:"outline",placeholder:"Enter email"}),r.jsx(d,{className:"ion-margin-top",label:"Password","label-placement":"floating",type:"password",fill:"outline",placeholder:"Enter Password"}),r.jsx(h,{routerLink:"/StudentHome",className:"ion-margin-top",expand:"block",children:"Log In"})]})]})})})})]}),C=()=>r.jsxs(g,{children:[r.jsx(f,{}),r.jsx(u,{children:r.jsx(n,{})})]});class R{constructor(){o(this,"shuttles",void 0),this.shuttles=[{shuttleID:1,shuttleName:"Shuttle 1",driverID:"Driver1",numberOfseats:20,status:"Active"},{shuttleID:2,shuttleName:"Shuttle 2",driverID:"Driver2",numberOfseats:30,status:"Inactive"},{shuttleID:3,shuttleName:"Shuttle 3",driverID:"Driver3",numberOfseats:30,status:"Inactive"}]}getShuttles(){return this.shuttles}addShuttle(o){this.shuttles.push(o)}removeShuttle(o){this.shuttles=this.shuttles.filter((e=>e.shuttleID!==o))}}const H=()=>{const[o,e]=t.useState([]),n=new R;return t.useEffect((()=>{e(n.getShuttles())}),[]),r.jsx("div",{children:r.jsx(m,{children:r.jsx(b,{className:"ion-padding",children:r.jsx(p,{"aria-label":"Shuttles",placeholder:"Select a Shuttle",children:o.map((o=>r.jsx(x,{value:o.shuttleID,children:o.shuttleName},o.shuttleID)))})})})})},Y=()=>r.jsx("div",{children:r.jsx(j,{children:r.jsxs(f,{title:"Title",children:[r.jsxs(k,{className:"ion-padding",children:[r.jsx("div",{children:r.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtklEQVR4nO2RPQ6CQBBGX4GV2utVjF6Du4itXsRCb6PcwVISChutlmwyJoYs+8d08pIpCN83LwwwkUEBlMAZqIEGaAHTm1be1ZItpetlDdwdy0zk3ICVT3AdsdzIXHyCRkHw9Am+oQ3pbH/6QUEuZhKoncj+sFR2KYKx8weCPTAHqohlrmxQsJDnZYTAlR3kIYFKiocIQT9rdwxyUrj/0SeYKQgKAnwk+A4Fczv2TK/Qpyp0dOgAM4XfTq0lFMYAAAAASUVORK5CYII=",alt:"BusIcon"})}),"4 / 24 Seats"]}),r.jsx(y,{className:"ion-padding",children:"VC Sancdton - Sandton Gautrain"}),r.jsx(A,{children:"https://ionicframework.com/docs/api/progress-bar"}),r.jsx(v,{children:"Here's a small text description for the card content."}),r.jsx(v,{children:"Here's a small text description for the card content."}),r.jsx(h,{className:"ion-padding",children:"Track"})]})})});class z{constructor(){o(this,"bookings",void 0),this.bookings=[{bookingId:1,session:"Morning",shuttleID:123,bookingStatus:"inActive",startLocation:"ABC Street",endLocation:"XYZ Avenue",bookingTime:new Date("2022-01-01T09:00:00")},{bookingId:2,session:"Afternoon",shuttleID:456,bookingStatus:"Active",startLocation:"DEF Road",endLocation:"LMN Lane",bookingTime:new Date("2022-01-02T14:30:00")},{bookingId:3,session:"Evening",shuttleID:456,bookingStatus:"Active",startLocation:"Helo Road",endLocation:"Ball Lane",bookingTime:new Date("2022-01-02T14:30:00")},{bookingId:4,session:"MidAfternoon",shuttleID:456,bookingStatus:"inActive",startLocation:"Helo Road",endLocation:"Ball Lane",bookingTime:new Date("2022-01-02T14:30:00")}]}getBookings(){return this.bookings}getActiveBookings(){return this.bookings.filter((o=>"Active"===o.bookingStatus))}addBooking(o){this.bookings.push(o)}removeBooking(o){this.bookings=this.bookings.filter((e=>e.bookingId!==o))}}const K=()=>{const[o,e]=t.useState([]),n=new z;return t.useEffect((()=>{e(n.getActiveBookings())}),[]),r.jsx("div",{className:"ion-padding",children:r.jsx(m,{children:o.map((o=>r.jsxs(b,{children:[r.jsx(w,{children:o.session}),r.jsxs(w,{children:[o.startLocation," to ",o.endLocation]})]},o.bookingId)))})})},M=()=>r.jsxs(g,{children:[r.jsx(f,{children:r.jsx(S,{children:r.jsx(I,{children:"Home"})})}),r.jsxs(u,{className:"ion-padding",children:[r.jsx(h,{routerLink:"/ShuttleBooking",className:"ion-padding",children:"Book"}),r.jsx(H,{}),r.jsx(Y,{}),r.jsx(h,{routerLink:"/StudentBookingList",className:"ion-padding",children:"LIST"}),r.jsx(K,{})]})]});class P{constructor(){o(this,"schedules",void 0),this.schedules=[{scheduleID:1,scheduleName:"Session 1",startTime:new Date(2023,8,5,9,0,0),endTime:new Date(2023,8,5,10,0,0)},{scheduleID:2,scheduleName:"Session 2",startTime:new Date(2023,8,6,9,0,0),endTime:new Date(2023,8,6,10,0,0)},{scheduleID:3,scheduleName:"Session 3",startTime:new Date(2023,8,7,9,0,0),endTime:new Date(2023,8,7,10,0,0)},{scheduleID:4,scheduleName:"Session 4",startTime:new Date(2023,8,8,9,0,0),endTime:new Date(2023,8,8,10,0,0)},{scheduleID:5,scheduleName:"Session 5",startTime:new Date(2023,8,9,9,0,0),endTime:new Date(2023,8,9,10,0,0)}]}getSchedules(){return this.schedules}}const Q=()=>{const[o,e]=t.useState([]),n=new P;return t.useEffect((()=>{e(n.getSchedules())}),[]),r.jsx("div",{children:r.jsx(m,{children:r.jsx(b,{className:"ion-padding",children:r.jsx(p,{"aria-label":"Schedules",placeholder:"Select a Time slot",children:o.map((o=>r.jsx(x,{value:o.scheduleName,children:o.scheduleName},o.scheduleID)))})})})})},V=()=>r.jsxs(g,{children:[r.jsx(f,{children:r.jsx(S,{children:r.jsx(I,{children:"Shuttle Booking"})})}),r.jsxs(u,{className:"ion-padding",children:[r.jsx(H,{}),r.jsx(Q,{})]})]}),O=()=>{const[o,e]=t.useState([]),[n,i]=t.useState([]),s=new z;return t.useEffect((()=>{e(s.getBookings())}),[]),t.useEffect((()=>{i(s.getActiveBookings())}),[]),r.jsxs("div",{children:[r.jsx(D,{className:"ion-padding",children:"Active"}),r.jsx(m,{children:n.map((o=>r.jsxs(b,{children:[r.jsx(w,{children:o.session}),r.jsxs(w,{children:[o.startLocation," to ",o.endLocation]})]},o.bookingId)))}),r.jsx(D,{className:"ion-padding",children:"All Bookings"}),r.jsx(m,{children:o.map((o=>r.jsxs(b,{children:[r.jsx(w,{children:o.session}),r.jsxs(w,{children:[o.startLocation," to ",o.endLocation]}),r.jsx(w,{children:o.bookingStatus})]},o.bookingId)))})]})},X=()=>r.jsxs(g,{children:[r.jsx(f,{children:r.jsx(S,{children:r.jsx(I,{children:"Booking list"})})}),r.jsx(u,{className:"ion-padding",children:r.jsx(O,{})})]});N();const F=()=>r.jsx(T,{children:r.jsx(L,{children:r.jsxs(B,{children:[r.jsx(E,{exact:!0,path:"/",children:r.jsx(C,{})}),r.jsx(E,{exact:!0,path:"/StudentHome",children:r.jsx(M,{})}),r.jsx(E,{exact:!0,path:"/ShuttleBooking",children:r.jsx(V,{})}),r.jsx(E,{exact:!0,path:"/StudentBookingList",children:r.jsx(X,{})})]})})}),U=document.getElementById("root");s(U).render(r.jsx(i.StrictMode,{children:r.jsx(F,{})}))}}}))}();
