!function(){function o(o,e,n){return(e=function(o){var e=function(o,e){if("object"!=typeof o||null===o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var t=n.call(o,e||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(o)}(o,"string");return"symbol"==typeof e?e:String(e)}(e))in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}System.register(["./react-legacy-3829ae20.js","./react-dom-legacy-13139992.js","./@ionic-legacy-84271293.js","./react-router-legacy-a5ec83be.js","./mapbox-gl-legacy-da4baff0.js","./hoist-non-react-statics-legacy-080251f1.js","./scheduler-legacy-acde4bc8.js","./@stencil-legacy-64075f81.js","./tslib-legacy-aae76428.js","./history-legacy-a3d855c2.js","./@babel-legacy-6ba21f19.js","./resolve-pathname-legacy-db29410e.js","./tiny-invariant-legacy-73612b60.js","./ionicons-legacy-cc9708dc.js","./prop-types-legacy-0b6df2aa.js","./path-to-regexp-legacy-182ac09c.js"],(function(e,n){"use strict";var t,i,s,r,c,l,a,d,h,u,g,f,m,x,p,j,b,S,v,k,y,w,I,A,N,D,L,T,B,E,C,M;return{setters:[o=>{t=o.r,i=o.j,s=o.R},o=>{r=o.c},o=>{c=o.I,l=o.a,a=o.b,d=o.c,h=o.d,u=o.e,g=o.f,f=o.g,m=o.h,x=o.i,p=o.j,j=o.k,b=o.l,S=o.m,v=o.n,k=o.o,y=o.p,w=o.q,I=o.r,A=o.s,N=o.t,D=o.u,L=o.v,T=o.w,B=o.x},o=>{E=o.u,C=o.R},o=>{M=o.m},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".container{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container strong{font-size:20px;line-height:26px}#container p{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a{text-decoration:none}:root{--ion-color-primary: #3880ff;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #5260ff;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}@media (prefers-color-scheme: dark){body{--ion-color-primary: #428cff;--ion-color-primary-rgb: 66,140,255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255,255,255;--ion-color-primary-shade: #3a7be0;--ion-color-primary-tint: #5598ff;--ion-color-secondary: #50c8ff;--ion-color-secondary-rgb: 80,200,255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255,255,255;--ion-color-secondary-shade: #46b0e0;--ion-color-secondary-tint: #62ceff;--ion-color-tertiary: #6a64ff;--ion-color-tertiary-rgb: 106,100,255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255,255,255;--ion-color-tertiary-shade: #5d58e0;--ion-color-tertiary-tint: #7974ff;--ion-color-success: #2fdf75;--ion-color-success-rgb: 47,223,117;--ion-color-success-contrast: #000000;--ion-color-success-contrast-rgb: 0,0,0;--ion-color-success-shade: #29c467;--ion-color-success-tint: #44e283;--ion-color-warning: #ffd534;--ion-color-warning-rgb: 255,213,52;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0,0,0;--ion-color-warning-shade: #e0bb2e;--ion-color-warning-tint: #ffd948;--ion-color-danger: #ff4961;--ion-color-danger-rgb: 255,73,97;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255,255,255;--ion-color-danger-shade: #e04055;--ion-color-danger-tint: #ff5b71;--ion-color-dark: #f4f5f8;--ion-color-dark-rgb: 244,245,248;--ion-color-dark-contrast: #000000;--ion-color-dark-contrast-rgb: 0,0,0;--ion-color-dark-shade: #d7d8da;--ion-color-dark-tint: #f5f6f9;--ion-color-medium: #989aa2;--ion-color-medium-rgb: 152,154,162;--ion-color-medium-contrast: #000000;--ion-color-medium-contrast-rgb: 0,0,0;--ion-color-medium-shade: #86888f;--ion-color-medium-tint: #a2a4ab;--ion-color-light: #222428;--ion-color-light-rgb: 34,36,40;--ion-color-light-contrast: #ffffff;--ion-color-light-contrast-rgb: 255,255,255;--ion-color-light-shade: #1e2023;--ion-color-light-tint: #383a3e}.ios body{--ion-background-color: #000000;--ion-background-color-rgb: 0,0,0;--ion-text-color: #ffffff;--ion-text-color-rgb: 255,255,255;--ion-color-step-50: #0d0d0d;--ion-color-step-100: #1a1a1a;--ion-color-step-150: #262626;--ion-color-step-200: #333333;--ion-color-step-250: #404040;--ion-color-step-300: #4d4d4d;--ion-color-step-350: #595959;--ion-color-step-400: #666666;--ion-color-step-450: #737373;--ion-color-step-500: #808080;--ion-color-step-550: #8c8c8c;--ion-color-step-600: #999999;--ion-color-step-650: #a6a6a6;--ion-color-step-700: #b3b3b3;--ion-color-step-750: #bfbfbf;--ion-color-step-800: #cccccc;--ion-color-step-850: #d9d9d9;--ion-color-step-900: #e6e6e6;--ion-color-step-950: #f2f2f2;--ion-item-background: #000000;--ion-card-background: #1c1c1d}.ios ion-modal{--ion-background-color: var(--ion-color-step-100);--ion-toolbar-background: var(--ion-color-step-150);--ion-toolbar-border-color: var(--ion-color-step-250)}.md body{--ion-background-color: #121212;--ion-background-color-rgb: 18,18,18;--ion-text-color: #ffffff;--ion-text-color-rgb: 255,255,255;--ion-border-color: #222222;--ion-color-step-50: #1e1e1e;--ion-color-step-100: #2a2a2a;--ion-color-step-150: #363636;--ion-color-step-200: #414141;--ion-color-step-250: #4d4d4d;--ion-color-step-300: #595959;--ion-color-step-350: #656565;--ion-color-step-400: #717171;--ion-color-step-450: #7d7d7d;--ion-color-step-500: #898989;--ion-color-step-550: #949494;--ion-color-step-600: #a0a0a0;--ion-color-step-650: #acacac;--ion-color-step-700: #b8b8b8;--ion-color-step-750: #c4c4c4;--ion-color-step-800: #d0d0d0;--ion-color-step-850: #dbdbdb;--ion-color-step-900: #e7e7e7;--ion-color-step-950: #f3f3f3;--ion-item-background: #1e1e1e;--ion-toolbar-background: #1f1f1f;--ion-tab-bar-background: #1f1f1f;--ion-card-background: #1e1e1e}}.map-container{height:1000px}.sidebar{background-color:rgba(35,55,75,.9);color:#fff;padding:6px 12px;font-family:monospace;z-index:1;position:absolute;top:0;left:0;margin:12px;border-radius:4px}\n",document.head.appendChild(e);class n{constructor(){o(this,"userList",void 0),o(this,"statusList",void 0),this.statusList=["Active","In-active","Idle"],this.userList=[{id:1,name:"John Doe",email:"johndoe@example.com",password:"password1",role:"admin",status:"active"},{id:2,name:"Jane Smith",email:"janesmith@example.com",password:"password2",role:"driver",status:"active"},{id:3,name:"Alice Johnson",email:"alicejohnson@example.com",password:"password3",role:"user",status:"active"}]}findUser(o){return this.userList.find((e=>e.email===o))}getStatuses(){return this.statusList}}const R=()=>{const[o,e]=t.useState();t.useState();const s=new n,r=E();return i.jsxs("div",{children:[i.jsx("h4",{className:"ion-text-center ion-margin-top",children:"VC Shuttle"}),i.jsx("form",{onSubmit:e=>{if(null===o)console.log("Invalid username");else{var n=s.findUser("janesmith@example.com");console.log(n),"driver"==(null==n?void 0:n.role)?r.push("/DriverHomePage"):"user"==(null==n?void 0:n.role)?r.push("/StudentHome"):"admin"==(null==n?void 0:n.role)&&r.push("/AdminHomePage")}},children:i.jsx(c,{children:i.jsx(l,{className:"ion-justify-content-center ion-align-items-center",style:{height:"10%"},children:i.jsxs(a,{size:"12",sizeMd:"6",sizeLg:"4",sizeXl:"3",children:[i.jsx("div",{className:"ion-text-center ion-padding",children:i.jsx("img",{src:"/assets/placeholderimage_logo-38cb3909.png",alt:"Place holder logo",width:"50%"})}),i.jsx(d,{className:"ion-margin-top",label:"Email","label-placement":"floating",type:"email",fill:"outline",placeholder:"Enter email",value:o,onIonChange:o=>{e(o.detail.value)}}),i.jsx(d,{className:"ion-margin-top",label:"Password","label-placement":"floating",type:"password",fill:"outline",placeholder:"Enter Password"}),i.jsx(h,{className:"ion-margin-top",type:"submit",expand:"block",children:"Log In"})]})})})})]})},H=()=>i.jsxs(u,{children:[i.jsx(g,{}),i.jsx(f,{children:i.jsx(R,{})})]});class P{constructor(){o(this,"shuttles",void 0),this.shuttles=[{shuttleID:1,shuttleName:"Shuttle 1",driverID:"Driver1",numberOfseats:20,status:"Active"},{shuttleID:2,shuttleName:"Shuttle 2",driverID:"Driver2",numberOfseats:30,status:"Inactive"},{shuttleID:3,shuttleName:"Shuttle 3",driverID:"Driver3",numberOfseats:30,status:"Inactive"}]}getShuttles(){return this.shuttles}addShuttle(o){this.shuttles.push(o)}removeShuttle(o){this.shuttles=this.shuttles.filter((e=>e.shuttleID!==o))}}const Y=({onShuttleSelect:o})=>{const[e,n]=t.useState([]),s=new P;return t.useEffect((()=>{n(s.getShuttles())}),[]),i.jsx("div",{children:i.jsx(m,{children:i.jsx(x,{className:"ion-padding",children:i.jsx(p,{"aria-label":"Shuttles",placeholder:"Select a Shuttle",onIonChange:e=>o(e.detail.value),children:e.map((o=>i.jsx(j,{value:o.shuttleID,children:o.shuttleName},o.shuttleID)))})})})})},z=()=>i.jsx("div",{children:i.jsxs(b,{children:[i.jsx(g,{title:"Title",children:i.jsxs(S,{className:"ion-padding",children:[i.jsx("div",{children:i.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtklEQVR4nO2RPQ6CQBBGX4GV2utVjF6Du4itXsRCb6PcwVISChutlmwyJoYs+8d08pIpCN83LwwwkUEBlMAZqIEGaAHTm1be1ZItpetlDdwdy0zk3ICVT3AdsdzIXHyCRkHw9Am+oQ3pbH/6QUEuZhKoncj+sFR2KYKx8weCPTAHqohlrmxQsJDnZYTAlR3kIYFKiocIQT9rdwxyUrj/0SeYKQgKAnwk+A4Fczv2TK/Qpyp0dOgAM4XfTq0lFMYAAAAASUVORK5CYII=",alt:"BusIcon"})}),"4 / 24 Seats"]})}),i.jsx(v,{className:"ion-padding",children:"VC Sancdton - Sandton Gautrain"}),i.jsx(k,{children:"https://ionicframework.com/docs/api/progress-bar"}),i.jsx(y,{children:"Here's a small text description for the card content."}),i.jsx(y,{children:"Here's a small text description for the card content."}),i.jsx(h,{routerLink:"/StudentMap",className:"ion-padding",children:"Track"})]})});class Q{constructor(){o(this,"bookings",void 0),this.bookings=[{bookingId:1,session:"Morning",shuttleID:123,bookingStatus:"inActive",startLocation:"ABC Street",endLocation:"XYZ Avenue",bookingTime:new Date("2022-01-01T09:00:00")},{bookingId:2,session:"Afternoon",shuttleID:456,bookingStatus:"Active",startLocation:"DEF Road",endLocation:"LMN Lane",bookingTime:new Date("2022-01-02T14:30:00")},{bookingId:3,session:"Evening",shuttleID:456,bookingStatus:"Active",startLocation:"Helo Road",endLocation:"Ball Lane",bookingTime:new Date("2022-01-02T14:30:00")},{bookingId:4,session:"MidAfternoon",shuttleID:456,bookingStatus:"inActive",startLocation:"Helo Road",endLocation:"Ball Lane",bookingTime:new Date("2022-01-02T14:30:00")}]}static getInstance(){return Q.instance||(Q.instance=new Q),Q.instance}getBookings(){return console.log(this.bookings.length),this.bookings}getActiveBookings(){return this.bookings.filter((o=>"Active"===o.bookingStatus))}addBooking(o){this.bookings.push(o),console.log(o)}removeBooking(o){this.bookings=this.bookings.filter((e=>e.bookingId!==o))}}o(Q,"instance",void 0);const F=()=>{const[o,e]=t.useState([]),n=new Q;return t.useEffect((()=>{e(n.getActiveBookings())}),[]),i.jsx("div",{className:"ion-padding",children:i.jsx(m,{children:o.map((o=>i.jsxs(x,{children:[i.jsx(w,{children:o.session}),i.jsxs(w,{children:[o.startLocation," to ",o.endLocation]})]},o.bookingId)))})})},U=()=>i.jsxs(u,{children:[i.jsx(g,{children:i.jsx(I,{children:i.jsx(A,{children:"Home"})})}),i.jsxs(f,{className:"ion-padding",children:[i.jsx(h,{routerLink:"/ShuttleBooking",className:"ion-padding",children:"Book"}),i.jsx(Y,{onShuttleSelect:function(o){throw new Error("Function not implemented.")}}),i.jsx(z,{}),i.jsx(h,{routerLink:"/StudentBookingList",className:"ion-padding",children:"LIST"}),i.jsx(F,{})]})]});class V{constructor(){o(this,"schedules",void 0),this.schedules=[{scheduleID:1,scheduleName:"Session 1",startTime:new Date(2023,8,5,9,0,0),endTime:new Date(2023,8,5,10,0,0)},{scheduleID:2,scheduleName:"Session 2",startTime:new Date(2023,8,6,9,0,0),endTime:new Date(2023,8,6,10,0,0)},{scheduleID:3,scheduleName:"Session 3",startTime:new Date(2023,8,7,9,0,0),endTime:new Date(2023,8,7,10,0,0)},{scheduleID:4,scheduleName:"Session 4",startTime:new Date(2023,8,8,9,0,0),endTime:new Date(2023,8,8,10,0,0)},{scheduleID:5,scheduleName:"Session 5",startTime:new Date(2023,8,9,9,0,0),endTime:new Date(2023,8,9,10,0,0)}]}getSchedules(){return this.schedules}}const K=({onScheduleSelect:o})=>{const[e,n]=t.useState([]),s=new V;return t.useEffect((()=>{n(s.getSchedules())}),[]),i.jsx("div",{children:i.jsx(m,{children:i.jsx(x,{className:"ion-padding",children:i.jsx(p,{"aria-label":"Schedules",placeholder:"Select a Time slot",onIonChange:e=>o(e.detail.value),children:e.map((o=>i.jsx(j,{value:o.scheduleName,children:o.scheduleName},o.scheduleID)))})})})})};class O{constructor(){o(this,"locations",void 0),this.locations=[{locationId:1,locationName:"Newyork"},{locationId:2,locationName:"Tokyo"},{locationId:3,locationName:"London"}]}getLocations(){return this.locations}getexcludedLocations(o){return this.locations.filter((e=>e.locationName===o))}}const X=({onLocationSelect:o})=>{const[e,n]=t.useState([]),s=new O;return t.useEffect((()=>{n(s.getLocations())}),[]),i.jsx("div",{children:i.jsx(m,{children:i.jsx(x,{className:"ion-padding",children:i.jsx(p,{"aria-label":"Locations",placeholder:"Select a Location",onIonChange:e=>o(e.detail.value),children:e.map((o=>i.jsx(j,{value:o.locationName,children:o.locationName},o.locationId)))})})})})},Z=()=>{const o=Q.getInstance(),[e,n]=t.useState(null),[s,r]=t.useState(null),[c,l]=t.useState(null),[a,d]=t.useState(null);return i.jsx("form",{onSubmit:n=>{if(null===e||null===s||null===c||null===a)console.error("Please select all values.");else{n.preventDefault();const t={bookingId:1,session:s,shuttleID:e,bookingStatus:"Active",startLocation:c,endLocation:a,bookingTime:new Date};o.addBooking(t)}},children:i.jsxs(u,{children:[i.jsx(g,{children:i.jsx(I,{children:i.jsx(A,{children:"Shuttle Booking"})})}),i.jsxs(f,{className:"ion-padding",children:[i.jsx(Y,{onShuttleSelect:n}),i.jsx(K,{onScheduleSelect:r}),i.jsx(w,{children:"Start location"}),".",i.jsx(X,{onLocationSelect:l}),i.jsx(w,{children:"End location"}),i.jsx(X,{onLocationSelect:d}),i.jsx(h,{className:"ion-margin-top",type:"submit",children:"Submit"})]})]})})},G=()=>{const[o,e]=t.useState([]),[n,s]=t.useState([]),r=Q.getInstance();return t.useEffect((()=>{e(r.getBookings()),s(r.getActiveBookings())}),[]),i.jsxs("div",{children:[i.jsx(N,{className:"ion-padding",children:"Active"}),i.jsx(m,{inset:!0,children:n.map((o=>i.jsxs(x,{children:[i.jsx(w,{children:o.session}),i.jsxs(w,{children:[o.startLocation," to ",o.endLocation]})]},o.bookingId)))}),i.jsx(N,{className:"ion-padding",children:"All Bookings"}),i.jsx(m,{inset:!0,children:o.map((o=>i.jsxs(x,{children:[i.jsx(w,{children:o.session}),i.jsxs(w,{children:[o.startLocation," to ",o.endLocation]}),i.jsx(w,{children:o.bookingStatus})]},o.bookingId)))})]})},J=()=>i.jsxs(u,{children:[i.jsx(g,{children:i.jsx(I,{children:i.jsx(A,{children:"Booking list"})})}),i.jsx(f,{className:"ion-padding",children:i.jsx(G,{})})]}),q=({onDriverStatusSelect:o})=>{const[e,s]=t.useState([]),r=new n;t.useEffect((()=>{s(r.getStatuses())}),[]);return i.jsx("div",{children:i.jsx(m,{children:i.jsx(x,{className:"ion-padding",children:i.jsx(p,{"aria-label":"Status",placeholder:"Status",onIonChange:e=>{const n=e.detail.value;o(n)},children:e.map((o=>i.jsx(j,{value:o,children:o},o)))})})})})},W=()=>i.jsx("div",{children:i.jsxs(b,{children:[i.jsx(g,{children:i.jsx(S,{className:"ion-padding",children:"4 / 24 Seats"})}),i.jsx(y,{children:"Session : Morning (06:00-09:00)"}),i.jsx(y,{children:"My status: Active"}),i.jsx(y,{children:"Start location - end Location"}),i.jsx(h,{routerLink:"/StudentMap",className:"ion-padding",children:"MAP"})]})}),_=()=>{const[o,e]=t.useState();return i.jsxs(u,{children:[i.jsx(g,{children:i.jsx(I,{children:i.jsx(A,{children:"Driver"})})}),i.jsxs(f,{className:"ion-padding",children:[i.jsx(q,{onDriverStatusSelect:o=>{e(o),console.log("Selected Driver Status:",o)}}),i.jsx(h,{routerLink:"/ShuttleBooking",className:"ion-padding",children:"ROUTE"}),i.jsx(W,{})]})]})};M.accessToken="pk.eyJ1IjoidGhlcmVhbGJvbmdhIiwiYSI6ImNsbG0yMXF2dTJqZm0zZ21nbm43b3RyamYifQ.DeWMvQ5HgM53BMjgWqc2TQ";const $=()=>{const o=t.useRef(null),e=t.useRef(null),[n,s]=t.useState(-70.9),[r,c]=t.useState(42.35),[l,a]=t.useState(9);return t.useEffect((()=>{e.current||(e.current=new M.Map({container:o.current,style:"mapbox://styles/mapbox/streets-v12",center:[n,r],zoom:l}),e.current.on("move",(()=>{s(e.current.getCenter().lng.toFixed(4)),c(e.current.getCenter().lat.toFixed(4)),a(e.current.getZoom().toFixed(2))})))})),i.jsxs("div",{children:[i.jsxs("div",{className:"sidebar",children:["Longitude: ",n," | Latitude: ",r," | Zoom: ",l]}),i.jsx("div",{ref:o,className:"map-container"})]})},oo=()=>i.jsxs(u,{children:[i.jsx(g,{children:i.jsx(I,{children:i.jsx(A,{children:"Page Title"})})}),i.jsx(f,{className:"ion-padding",children:i.jsx($,{})})]}),eo=()=>i.jsxs(u,{children:[i.jsx(g,{children:i.jsx(I,{children:i.jsx(A,{children:"Admin homePage"})})}),i.jsx(f,{className:"ion-padding",children:"UI goes here..."})]});D();const no=()=>i.jsx(L,{children:i.jsx(T,{children:i.jsxs(B,{children:[i.jsx(C,{exact:!0,path:"/",children:i.jsx(H,{})}),i.jsx(C,{exact:!0,path:"/StudentHome",children:i.jsx(U,{})}),i.jsx(C,{exact:!0,path:"/DriverHomePage",children:i.jsx(_,{})}),i.jsx(C,{children:i.jsx(eo,{})}),i.jsx(C,{exact:!0,path:"/ShuttleBooking",children:i.jsx(Z,{})}),i.jsx(C,{exact:!0,path:"/StudentBookingList",children:i.jsx(J,{})}),i.jsx(C,{exact:!0,path:"/StudentMap",children:i.jsx(oo,{})})]})})}),to=document.getElementById("root");r(to).render(i.jsx(s.StrictMode,{children:i.jsx(no,{})}))}}}))}();
