import{_ as Et,d as le,W as pe,a as it,X as ge,Y as de,Z as he,o as Mt,f as Ft,g as Nt,M as be,$ as ye,a0 as _e,j as $e}from"./entry.fe5cfb3e.js";var Te=typeof global=="object"&&global&&global.Object===Object&&global;const Ut=Te;var ve=typeof self=="object"&&self&&self.Object===Object&&self,me=Ut||ve||Function("return this")();const g=me;var je=g.Symbol;const p=je;var Dt=Object.prototype,we=Dt.hasOwnProperty,Oe=Dt.toString,P=p?p.toStringTag:void 0;function Se(t){var e=we.call(t,P),r=t[P];try{t[P]=void 0;var n=!0}catch{}var o=Oe.call(t);return n&&(e?t[P]=r:delete t[P]),o}var Ae=Object.prototype,Pe=Ae.toString;function Ce(t){return Pe.call(t)}var xe="[object Null]",Ie="[object Undefined]",st=p?p.toStringTag:void 0;function T(t){return t==null?t===void 0?Ie:xe:st&&st in Object(t)?Se(t):Ce(t)}function v(t){return t!=null&&typeof t=="object"}var Ee="[object Symbol]";function H(t){return typeof t=="symbol"||v(t)&&T(t)==Ee}function Bt(t,e){for(var r=-1,n=t==null?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}var Me=Array.isArray;const m=Me;var Fe=1/0,ct=p?p.prototype:void 0,ut=ct?ct.toString:void 0;function Lt(t){if(typeof t=="string")return t;if(m(t))return Bt(t,Lt)+"";if(H(t))return ut?ut.call(t):"";var e=t+"";return e=="0"&&1/t==-Fe?"-0":e}function E(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function Ne(t){return t}var Ue="[object AsyncFunction]",De="[object Function]",Be="[object GeneratorFunction]",Le="[object Proxy]";function Gt(t){if(!E(t))return!1;var e=T(t);return e==De||e==Be||e==Ue||e==Le}var Ge=g["__core-js_shared__"];const B=Ge;var ft=function(){var t=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function ze(t){return!!ft&&ft in t}var Re=Function.prototype,Ke=Re.toString;function j(t){if(t!=null){try{return Ke.call(t)}catch{}try{return t+""}catch{}}return""}var He=/[\\^$.*+?()[\]{}|]/g,Ve=/^\[object .+?Constructor\]$/,We=Function.prototype,Ye=Object.prototype,Xe=We.toString,Ze=Ye.hasOwnProperty,qe=RegExp("^"+Xe.call(Ze).replace(He,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Je(t){if(!E(t)||ze(t))return!1;var e=Gt(t)?qe:Ve;return e.test(j(t))}function Qe(t,e){return t==null?void 0:t[e]}function w(t,e){var r=Qe(t,e);return Je(r)?r:void 0}var ke=w(g,"WeakMap");const G=ke;var lt=Object.create,tr=function(){function t(){}return function(e){if(!E(e))return{};if(lt)return lt(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const er=tr;function rr(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function nr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var or=800,ar=16,ir=Date.now;function sr(t){var e=0,r=0;return function(){var n=ir(),o=ar-(n-r);if(r=n,o>0){if(++e>=or)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function cr(t){return function(){return t}}var ur=function(){try{var t=w(Object,"defineProperty");return t({},"",{}),t}catch{}}();const N=ur;var fr=N?function(t,e){return N(t,"toString",{configurable:!0,enumerable:!1,value:cr(e),writable:!0})}:Ne;const lr=fr;var pr=sr(lr);const gr=pr;function dr(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var hr=9007199254740991,br=/^(?:0|[1-9]\d*)$/;function yr(t,e){var r=typeof t;return e=e??hr,!!e&&(r=="number"||r!="symbol"&&br.test(t))&&t>-1&&t%1==0&&t<e}function zt(t,e,r){e=="__proto__"&&N?N(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function Rt(t,e){return t===e||t!==t&&e!==e}var _r=Object.prototype,$r=_r.hasOwnProperty;function Kt(t,e,r){var n=t[e];(!($r.call(t,e)&&Rt(n,r))||r===void 0&&!(e in t))&&zt(t,e,r)}function M(t,e,r,n){var o=!r;r||(r={});for(var a=-1,i=e.length;++a<i;){var u=e[a],f=n?n(r[u],t[u],u,r,t):void 0;f===void 0&&(f=t[u]),o?zt(r,u,f):Kt(r,u,f)}return r}var pt=Math.max;function Tr(t,e,r){return e=pt(e===void 0?t.length-1:e,0),function(){for(var n=arguments,o=-1,a=pt(n.length-e,0),i=Array(a);++o<a;)i[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=r(i),rr(t,this,u)}}var vr=9007199254740991;function Ht(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=vr}function Vt(t){return t!=null&&Ht(t.length)&&!Gt(t)}var mr=Object.prototype;function V(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||mr;return t===r}function jr(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var wr="[object Arguments]";function gt(t){return v(t)&&T(t)==wr}var Wt=Object.prototype,Or=Wt.hasOwnProperty,Sr=Wt.propertyIsEnumerable,Ar=gt(function(){return arguments}())?gt:function(t){return v(t)&&Or.call(t,"callee")&&!Sr.call(t,"callee")};const Yt=Ar;function Pr(){return!1}var Xt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,dt=Xt&&typeof module=="object"&&module&&!module.nodeType&&module,Cr=dt&&dt.exports===Xt,ht=Cr?g.Buffer:void 0,xr=ht?ht.isBuffer:void 0,Ir=xr||Pr;const Zt=Ir;var Er="[object Arguments]",Mr="[object Array]",Fr="[object Boolean]",Nr="[object Date]",Ur="[object Error]",Dr="[object Function]",Br="[object Map]",Lr="[object Number]",Gr="[object Object]",zr="[object RegExp]",Rr="[object Set]",Kr="[object String]",Hr="[object WeakMap]",Vr="[object ArrayBuffer]",Wr="[object DataView]",Yr="[object Float32Array]",Xr="[object Float64Array]",Zr="[object Int8Array]",qr="[object Int16Array]",Jr="[object Int32Array]",Qr="[object Uint8Array]",kr="[object Uint8ClampedArray]",tn="[object Uint16Array]",en="[object Uint32Array]",c={};c[Yr]=c[Xr]=c[Zr]=c[qr]=c[Jr]=c[Qr]=c[kr]=c[tn]=c[en]=!0;c[Er]=c[Mr]=c[Vr]=c[Fr]=c[Wr]=c[Nr]=c[Ur]=c[Dr]=c[Br]=c[Lr]=c[Gr]=c[zr]=c[Rr]=c[Kr]=c[Hr]=!1;function rn(t){return v(t)&&Ht(t.length)&&!!c[T(t)]}function W(t){return function(e){return t(e)}}var qt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,C=qt&&typeof module=="object"&&module&&!module.nodeType&&module,nn=C&&C.exports===qt,L=nn&&Ut.process,on=function(){try{var t=C&&C.require&&C.require("util").types;return t||L&&L.binding&&L.binding("util")}catch{}}();const S=on;var bt=S&&S.isTypedArray,an=bt?W(bt):rn;const sn=an;var cn=Object.prototype,un=cn.hasOwnProperty;function Jt(t,e){var r=m(t),n=!r&&Yt(t),o=!r&&!n&&Zt(t),a=!r&&!n&&!o&&sn(t),i=r||n||o||a,u=i?jr(t.length,String):[],f=u.length;for(var l in t)(e||un.call(t,l))&&!(i&&(l=="length"||o&&(l=="offset"||l=="parent")||a&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||yr(l,f)))&&u.push(l);return u}function Qt(t,e){return function(r){return t(e(r))}}var fn=Qt(Object.keys,Object);const ln=fn;var pn=Object.prototype,gn=pn.hasOwnProperty;function dn(t){if(!V(t))return ln(t);var e=[];for(var r in Object(t))gn.call(t,r)&&r!="constructor"&&e.push(r);return e}function Y(t){return Vt(t)?Jt(t):dn(t)}function hn(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var bn=Object.prototype,yn=bn.hasOwnProperty;function _n(t){if(!E(t))return hn(t);var e=V(t),r=[];for(var n in t)n=="constructor"&&(e||!yn.call(t,n))||r.push(n);return r}function X(t){return Vt(t)?Jt(t,!0):_n(t)}var $n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tn=/^\w*$/;function vn(t,e){if(m(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||H(t)?!0:Tn.test(t)||!$n.test(t)||e!=null&&t in Object(e)}var mn=w(Object,"create");const x=mn;function jn(){this.__data__=x?x(null):{},this.size=0}function wn(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var On="__lodash_hash_undefined__",Sn=Object.prototype,An=Sn.hasOwnProperty;function Pn(t){var e=this.__data__;if(x){var r=e[t];return r===On?void 0:r}return An.call(e,t)?e[t]:void 0}var Cn=Object.prototype,xn=Cn.hasOwnProperty;function In(t){var e=this.__data__;return x?e[t]!==void 0:xn.call(e,t)}var En="__lodash_hash_undefined__";function Mn(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=x&&e===void 0?En:e,this}function $(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}$.prototype.clear=jn;$.prototype.delete=wn;$.prototype.get=Pn;$.prototype.has=In;$.prototype.set=Mn;function Fn(){this.__data__=[],this.size=0}function U(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}var Nn=Array.prototype,Un=Nn.splice;function Dn(t){var e=this.__data__,r=U(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Un.call(e,r,1),--this.size,!0}function Bn(t){var e=this.__data__,r=U(e,t);return r<0?void 0:e[r][1]}function Ln(t){return U(this.__data__,t)>-1}function Gn(t,e){var r=this.__data__,n=U(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function d(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}d.prototype.clear=Fn;d.prototype.delete=Dn;d.prototype.get=Bn;d.prototype.has=Ln;d.prototype.set=Gn;var zn=w(g,"Map");const I=zn;function Rn(){this.size=0,this.__data__={hash:new $,map:new(I||d),string:new $}}function Kn(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function D(t,e){var r=t.__data__;return Kn(e)?r[typeof e=="string"?"string":"hash"]:r.map}function Hn(t){var e=D(this,t).delete(t);return this.size-=e?1:0,e}function Vn(t){return D(this,t).get(t)}function Wn(t){return D(this,t).has(t)}function Yn(t,e){var r=D(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function b(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}b.prototype.clear=Rn;b.prototype.delete=Hn;b.prototype.get=Vn;b.prototype.has=Wn;b.prototype.set=Yn;var Xn="Expected a function";function Z(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Xn);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(Z.Cache||b),r}Z.Cache=b;var Zn=500;function qn(t){var e=Z(t,function(n){return r.size===Zn&&r.clear(),n}),r=e.cache;return e}var Jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qn=/\\(\\)?/g,kn=qn(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Jn,function(r,n,o,a){e.push(o?a.replace(Qn,"$1"):n||r)}),e});const to=kn;function eo(t){return t==null?"":Lt(t)}function q(t,e){return m(t)?t:vn(t,e)?[t]:to(eo(t))}var ro=1/0;function kt(t){if(typeof t=="string"||H(t))return t;var e=t+"";return e=="0"&&1/t==-ro?"-0":e}function no(t,e){e=q(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[kt(e[r++])];return r&&r==n?t:void 0}function J(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}var yt=p?p.isConcatSpreadable:void 0;function oo(t){return m(t)||Yt(t)||!!(yt&&t&&t[yt])}function te(t,e,r,n,o){var a=-1,i=t.length;for(r||(r=oo),o||(o=[]);++a<i;){var u=t[a];e>0&&r(u)?e>1?te(u,e-1,r,n,o):J(o,u):n||(o[o.length]=u)}return o}function ao(t){var e=t==null?0:t.length;return e?te(t,1):[]}function io(t){return gr(Tr(t,void 0,ao),t+"")}var so=Qt(Object.getPrototypeOf,Object);const Q=so;var co="[object Object]",uo=Function.prototype,fo=Object.prototype,ee=uo.toString,lo=fo.hasOwnProperty,po=ee.call(Object);function go(t){if(!v(t)||T(t)!=co)return!1;var e=Q(t);if(e===null)return!0;var r=lo.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&ee.call(r)==po}function ho(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),r=r>o?o:r,r<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+e];return a}function bo(){this.__data__=new d,this.size=0}function yo(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function _o(t){return this.__data__.get(t)}function $o(t){return this.__data__.has(t)}var To=200;function vo(t,e){var r=this.__data__;if(r instanceof d){var n=r.__data__;if(!I||n.length<To-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new b(n)}return r.set(t,e),this.size=r.size,this}function A(t){var e=this.__data__=new d(t);this.size=e.size}A.prototype.clear=bo;A.prototype.delete=yo;A.prototype.get=_o;A.prototype.has=$o;A.prototype.set=vo;function mo(t,e){return t&&M(e,Y(e),t)}function jo(t,e){return t&&M(e,X(e),t)}var re=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_t=re&&typeof module=="object"&&module&&!module.nodeType&&module,wo=_t&&_t.exports===re,$t=wo?g.Buffer:void 0,Tt=$t?$t.allocUnsafe:void 0;function Oo(t,e){if(e)return t.slice();var r=t.length,n=Tt?Tt(r):new t.constructor(r);return t.copy(n),n}function So(t,e){for(var r=-1,n=t==null?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}function ne(){return[]}var Ao=Object.prototype,Po=Ao.propertyIsEnumerable,vt=Object.getOwnPropertySymbols,Co=vt?function(t){return t==null?[]:(t=Object(t),So(vt(t),function(e){return Po.call(t,e)}))}:ne;const k=Co;function xo(t,e){return M(t,k(t),e)}var Io=Object.getOwnPropertySymbols,Eo=Io?function(t){for(var e=[];t;)J(e,k(t)),t=Q(t);return e}:ne;const oe=Eo;function Mo(t,e){return M(t,oe(t),e)}function ae(t,e,r){var n=e(t);return m(t)?n:J(n,r(t))}function Fo(t){return ae(t,Y,k)}function ie(t){return ae(t,X,oe)}var No=w(g,"DataView");const z=No;var Uo=w(g,"Promise");const R=Uo;var Do=w(g,"Set");const K=Do;var mt="[object Map]",Bo="[object Object]",jt="[object Promise]",wt="[object Set]",Ot="[object WeakMap]",St="[object DataView]",Lo=j(z),Go=j(I),zo=j(R),Ro=j(K),Ko=j(G),_=T;(z&&_(new z(new ArrayBuffer(1)))!=St||I&&_(new I)!=mt||R&&_(R.resolve())!=jt||K&&_(new K)!=wt||G&&_(new G)!=Ot)&&(_=function(t){var e=T(t),r=e==Bo?t.constructor:void 0,n=r?j(r):"";if(n)switch(n){case Lo:return St;case Go:return mt;case zo:return jt;case Ro:return wt;case Ko:return Ot}return e});const tt=_;var Ho=Object.prototype,Vo=Ho.hasOwnProperty;function Wo(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&Vo.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var Yo=g.Uint8Array;const At=Yo;function et(t){var e=new t.constructor(t.byteLength);return new At(e).set(new At(t)),e}function Xo(t,e){var r=e?et(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var Zo=/\w*$/;function qo(t){var e=new t.constructor(t.source,Zo.exec(t));return e.lastIndex=t.lastIndex,e}var Pt=p?p.prototype:void 0,Ct=Pt?Pt.valueOf:void 0;function Jo(t){return Ct?Object(Ct.call(t)):{}}function Qo(t,e){var r=e?et(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var ko="[object Boolean]",ta="[object Date]",ea="[object Map]",ra="[object Number]",na="[object RegExp]",oa="[object Set]",aa="[object String]",ia="[object Symbol]",sa="[object ArrayBuffer]",ca="[object DataView]",ua="[object Float32Array]",fa="[object Float64Array]",la="[object Int8Array]",pa="[object Int16Array]",ga="[object Int32Array]",da="[object Uint8Array]",ha="[object Uint8ClampedArray]",ba="[object Uint16Array]",ya="[object Uint32Array]";function _a(t,e,r){var n=t.constructor;switch(e){case sa:return et(t);case ko:case ta:return new n(+t);case ca:return Xo(t,r);case ua:case fa:case la:case pa:case ga:case da:case ha:case ba:case ya:return Qo(t,r);case ea:return new n;case ra:case aa:return new n(t);case na:return qo(t);case oa:return new n;case ia:return Jo(t)}}function $a(t){return typeof t.constructor=="function"&&!V(t)?er(Q(t)):{}}var Ta="[object Map]";function va(t){return v(t)&&tt(t)==Ta}var xt=S&&S.isMap,ma=xt?W(xt):va;const ja=ma;var wa="[object Set]";function Oa(t){return v(t)&&tt(t)==wa}var It=S&&S.isSet,Sa=It?W(It):Oa;const Aa=Sa;var Pa=1,Ca=2,xa=4,se="[object Arguments]",Ia="[object Array]",Ea="[object Boolean]",Ma="[object Date]",Fa="[object Error]",ce="[object Function]",Na="[object GeneratorFunction]",Ua="[object Map]",Da="[object Number]",ue="[object Object]",Ba="[object RegExp]",La="[object Set]",Ga="[object String]",za="[object Symbol]",Ra="[object WeakMap]",Ka="[object ArrayBuffer]",Ha="[object DataView]",Va="[object Float32Array]",Wa="[object Float64Array]",Ya="[object Int8Array]",Xa="[object Int16Array]",Za="[object Int32Array]",qa="[object Uint8Array]",Ja="[object Uint8ClampedArray]",Qa="[object Uint16Array]",ka="[object Uint32Array]",s={};s[se]=s[Ia]=s[Ka]=s[Ha]=s[Ea]=s[Ma]=s[Va]=s[Wa]=s[Ya]=s[Xa]=s[Za]=s[Ua]=s[Da]=s[ue]=s[Ba]=s[La]=s[Ga]=s[za]=s[qa]=s[Ja]=s[Qa]=s[ka]=!0;s[Fa]=s[ce]=s[Ra]=!1;function F(t,e,r,n,o,a){var i,u=e&Pa,f=e&Ca,l=e&xa;if(r&&(i=o?r(t,n,o,a):r(t)),i!==void 0)return i;if(!E(t))return t;var rt=m(t);if(rt){if(i=Wo(t),!u)return nr(t,i)}else{var O=tt(t),nt=O==ce||O==Na;if(Zt(t))return Oo(t,u);if(O==ue||O==se||nt&&!o){if(i=f||nt?{}:$a(t),!u)return f?Mo(t,jo(i,t)):xo(t,mo(i,t))}else{if(!s[O])return o?t:{};i=_a(t,O,u)}}a||(a=new A);var ot=a.get(t);if(ot)return ot;a.set(t,i),Aa(t)?t.forEach(function(h){i.add(F(h,e,r,h,t,a))}):ja(t)&&t.forEach(function(h,y){i.set(y,F(h,e,r,y,t,a))});var fe=l?f?ie:Fo:f?X:Y,at=rt?void 0:fe(t);return dr(at||t,function(h,y){at&&(y=h,h=t[y]),Kt(i,y,F(h,e,r,y,t,a))}),i}function ti(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function ei(t,e){return e.length<2?t:no(t,ho(e,0,-1))}function ri(t,e){return e=q(e,t),t=ei(t,e),t==null||delete t[kt(ti(e))]}function ni(t){return go(t)?void 0:t}var oi=1,ai=2,ii=4,si=io(function(t,e){var r={};if(t==null)return r;var n=!1;e=Bt(e,function(a){return a=q(a,t),n||(n=a.length>1),a}),M(t,ie(t),r),n&&(r=F(r,oi|ai|ii,ni));for(var o=e.length;o--;)ri(r,e[o]);return r});const ci=si,ui=le({inheritAttrs:!1,props:{as:{type:String,default:"div"},ui:{type:Object,default:()=>({})}},setup(t,{attrs:e}){const r=pe(),n=it(()=>ge({},t.ui,r.ui.container)),o=it(()=>de(he(n.value.base,n.value.padding,n.value.constrained),e.class));return{attrs:ci(e,["class"]),ui:n,containerClass:o}}});function fi(t,e,r,n,o,a){return Mt(),Ft(_e(t.as),ye({class:t.containerClass},t.attrs),{default:Nt(()=>[be(t.$slots,"default")]),_:3},16,["class"])}const li=Et(ui,[["render",fi]]),pi={},gi=$e("span",{class:"font-bold text-lg"},"ProjectM",-1);function di(t,e){const r=li;return Mt(),Ft(r,{ui:{base:"w-full flex rounded-md bg-blue-500",padding:"p-1 sm:p-2 lg:p-4",constrained:""}},{default:Nt(()=>[gi]),_:1})}const bi=Et(pi,[["render",di]]);export{b as M,p as S,At as U,li as _,bi as a,tt as b,Zt as c,A as d,Rt as e,sn as f,Fo as g,v as h,m as i,ci as o};
