System.register([],(function(t,i){"use strict";return{execute:function(){const i=Math.PI,s=2*i,h=1e-6,_=s-h;function e(t){this._+=t[0];for(let i=1,s=t.length;i<s;++i)this._+=arguments[i]+t[i]}t("P",class{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?e:function(t){let i=Math.floor(t);if(!(i>=0))throw new Error(`invalid digits: ${t}`);if(i>15)return e;const s=10**i;return function(t){this._+=t[0];for(let i=1,h=t.length;i<h;++i)this._+=Math.round(arguments[i]*s)/s+t[i]}}(t)}moveTo(t,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+i}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,i){this._append`L${this._x1=+t},${this._y1=+i}`}quadraticCurveTo(t,i,s,h){this._append`Q${+t},${+i},${this._x1=+s},${this._y1=+h}`}bezierCurveTo(t,i,s,h,_,e){this._append`C${+t},${+i},${+s},${+h},${this._x1=+_},${this._y1=+e}`}arcTo(t,s,_,e,$){if(t=+t,s=+s,_=+_,e=+e,($=+$)<0)throw new Error(`negative radius: ${$}`);let n=this._x1,a=this._y1,r=_-t,o=e-s,p=n-t,l=a-s,u=p*p+l*l;if(null===this._x1)this._append`M${this._x1=t},${this._y1=s}`;else if(u>h)if(Math.abs(l*r-o*p)>h&&$){let x=_-n,d=e-a,c=r*r+o*o,y=x*x+d*d,M=Math.sqrt(c),f=Math.sqrt(u),g=$*Math.tan((i-Math.acos((c+u-y)/(2*M*f)))/2),v=g/f,w=g/M;Math.abs(v-1)>h&&this._append`L${t+v*p},${s+v*l}`,this._append`A${$},${$},0,0,${+(l*x>p*d)},${this._x1=t+w*r},${this._y1=s+w*o}`}else this._append`L${this._x1=t},${this._y1=s}`}arc(t,e,$,n,a,r){if(t=+t,e=+e,r=!!r,($=+$)<0)throw new Error(`negative radius: ${$}`);let o=$*Math.cos(n),p=$*Math.sin(n),l=t+o,u=e+p,x=1^r,d=r?n-a:a-n;null===this._x1?this._append`M${l},${u}`:(Math.abs(this._x1-l)>h||Math.abs(this._y1-u)>h)&&this._append`L${l},${u}`,$&&(d<0&&(d=d%s+s),d>_?this._append`A${$},${$},0,1,${x},${t-o},${e-p}A${$},${$},0,1,${x},${this._x1=l},${this._y1=u}`:d>h&&this._append`A${$},${$},0,${+(d>=i)},${x},${this._x1=t+$*Math.cos(a)},${this._y1=e+$*Math.sin(a)}`)}rect(t,i,s,h){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+i}h${s=+s}v${+h}h${-s}Z`}toString(){return this._}})}}}));