(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function a(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=a(l);fetch(l.href,u)}})();function Vx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dd={exports:{}},fs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1;function Zw(){if(e1)return fs;e1=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:e,type:s,key:f,ref:l!==void 0?l:null,props:u}}return fs.Fragment=i,fs.jsx=a,fs.jsxs=a,fs}var t1;function Iw(){return t1||(t1=1,Dd.exports=Zw()),Dd.exports}var d=Iw(),Md={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1;function Xw(){if(i1)return fe;i1=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=v&&R[v]||R["@@iterator"],typeof R=="function"?R:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,k={};function B(R,P,Q){this.props=R,this.context=P,this.refs=k,this.updater=Q||A}B.prototype.isReactComponent={},B.prototype.setState=function(R,P){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,P,"setState")},B.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function O(){}O.prototype=B.prototype;function H(R,P,Q){this.props=R,this.context=P,this.refs=k,this.updater=Q||A}var M=H.prototype=new O;M.constructor=H,T(M,B.prototype),M.isPureReactComponent=!0;var Y=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function I(R,P,Q,J,ne,he){return Q=he.ref,{$$typeof:e,type:R,key:P,ref:Q!==void 0?Q:null,props:he}}function X(R,P){return I(R.type,P,void 0,void 0,void 0,R.props)}function W(R){return typeof R=="object"&&R!==null&&R.$$typeof===e}function ie(R){var P={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Q){return P[Q]})}var ve=/\/+/g;function Ne(R,P){return typeof R=="object"&&R!==null&&R.key!=null?ie(""+R.key):P.toString(36)}function Ue(){}function Be(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(Ue,Ue):(R.status="pending",R.then(function(P){R.status==="pending"&&(R.status="fulfilled",R.value=P)},function(P){R.status==="pending"&&(R.status="rejected",R.reason=P)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function Pe(R,P,Q,J,ne){var he=typeof R;(he==="undefined"||he==="boolean")&&(R=null);var se=!1;if(R===null)se=!0;else switch(he){case"bigint":case"string":case"number":se=!0;break;case"object":switch(R.$$typeof){case e:case i:se=!0;break;case y:return se=R._init,Pe(se(R._payload),P,Q,J,ne)}}if(se)return ne=ne(R),se=J===""?"."+Ne(R,0):J,Y(ne)?(Q="",se!=null&&(Q=se.replace(ve,"$&/")+"/"),Pe(ne,P,Q,"",function(ut){return ut})):ne!=null&&(W(ne)&&(ne=X(ne,Q+(ne.key==null||R&&R.key===ne.key?"":(""+ne.key).replace(ve,"$&/")+"/")+se)),P.push(ne)),1;se=0;var et=J===""?".":J+":";if(Y(R))for(var je=0;je<R.length;je++)J=R[je],he=et+Ne(J,je),se+=Pe(J,P,Q,he,ne);else if(je=S(R),typeof je=="function")for(R=je.call(R),je=0;!(J=R.next()).done;)J=J.value,he=et+Ne(J,je++),se+=Pe(J,P,Q,he,ne);else if(he==="object"){if(typeof R.then=="function")return Pe(Be(R),P,Q,J,ne);throw P=String(R),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return se}function U(R,P,Q){if(R==null)return R;var J=[],ne=0;return Pe(R,J,"","",function(he){return P.call(Q,he,ne++)}),J}function Z(R){if(R._status===-1){var P=R._result;P=P(),P.then(function(Q){(R._status===0||R._status===-1)&&(R._status=1,R._result=Q)},function(Q){(R._status===0||R._status===-1)&&(R._status=2,R._result=Q)}),R._status===-1&&(R._status=0,R._result=P)}if(R._status===1)return R._result.default;throw R._result}var ee=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function ue(){}return fe.Children={map:U,forEach:function(R,P,Q){U(R,function(){P.apply(this,arguments)},Q)},count:function(R){var P=0;return U(R,function(){P++}),P},toArray:function(R){return U(R,function(P){return P})||[]},only:function(R){if(!W(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},fe.Component=B,fe.Fragment=a,fe.Profiler=l,fe.PureComponent=H,fe.StrictMode=s,fe.Suspense=g,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,fe.__COMPILER_RUNTIME={__proto__:null,c:function(R){return N.H.useMemoCache(R)}},fe.cache=function(R){return function(){return R.apply(null,arguments)}},fe.cloneElement=function(R,P,Q){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var J=T({},R.props),ne=R.key,he=void 0;if(P!=null)for(se in P.ref!==void 0&&(he=void 0),P.key!==void 0&&(ne=""+P.key),P)!K.call(P,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&P.ref===void 0||(J[se]=P[se]);var se=arguments.length-2;if(se===1)J.children=Q;else if(1<se){for(var et=Array(se),je=0;je<se;je++)et[je]=arguments[je+2];J.children=et}return I(R.type,ne,void 0,void 0,he,J)},fe.createContext=function(R){return R={$$typeof:f,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},fe.createElement=function(R,P,Q){var J,ne={},he=null;if(P!=null)for(J in P.key!==void 0&&(he=""+P.key),P)K.call(P,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ne[J]=P[J]);var se=arguments.length-2;if(se===1)ne.children=Q;else if(1<se){for(var et=Array(se),je=0;je<se;je++)et[je]=arguments[je+2];ne.children=et}if(R&&R.defaultProps)for(J in se=R.defaultProps,se)ne[J]===void 0&&(ne[J]=se[J]);return I(R,he,void 0,void 0,null,ne)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(R){return{$$typeof:p,render:R}},fe.isValidElement=W,fe.lazy=function(R){return{$$typeof:y,_payload:{_status:-1,_result:R},_init:Z}},fe.memo=function(R,P){return{$$typeof:m,type:R,compare:P===void 0?null:P}},fe.startTransition=function(R){var P=N.T,Q={};N.T=Q;try{var J=R(),ne=N.S;ne!==null&&ne(Q,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ue,ee)}catch(he){ee(he)}finally{N.T=P}},fe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},fe.use=function(R){return N.H.use(R)},fe.useActionState=function(R,P,Q){return N.H.useActionState(R,P,Q)},fe.useCallback=function(R,P){return N.H.useCallback(R,P)},fe.useContext=function(R){return N.H.useContext(R)},fe.useDebugValue=function(){},fe.useDeferredValue=function(R,P){return N.H.useDeferredValue(R,P)},fe.useEffect=function(R,P,Q){var J=N.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(R,P)},fe.useId=function(){return N.H.useId()},fe.useImperativeHandle=function(R,P,Q){return N.H.useImperativeHandle(R,P,Q)},fe.useInsertionEffect=function(R,P){return N.H.useInsertionEffect(R,P)},fe.useLayoutEffect=function(R,P){return N.H.useLayoutEffect(R,P)},fe.useMemo=function(R,P){return N.H.useMemo(R,P)},fe.useOptimistic=function(R,P){return N.H.useOptimistic(R,P)},fe.useReducer=function(R,P,Q){return N.H.useReducer(R,P,Q)},fe.useRef=function(R){return N.H.useRef(R)},fe.useState=function(R){return N.H.useState(R)},fe.useSyncExternalStore=function(R,P,Q){return N.H.useSyncExternalStore(R,P,Q)},fe.useTransition=function(){return N.H.useTransition()},fe.version="19.1.0",fe}var n1;function u0(){return n1||(n1=1,Md.exports=Xw()),Md.exports}var w=u0();const vt=Vx(w);var Od={exports:{}},hs={},kd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function Qw(){return a1||(a1=1,function(e){function i(U,Z){var ee=U.length;U.push(Z);e:for(;0<ee;){var ue=ee-1>>>1,R=U[ue];if(0<l(R,Z))U[ue]=Z,U[ee]=R,ee=ue;else break e}}function a(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var Z=U[0],ee=U.pop();if(ee!==Z){U[0]=ee;e:for(var ue=0,R=U.length,P=R>>>1;ue<P;){var Q=2*(ue+1)-1,J=U[Q],ne=Q+1,he=U[ne];if(0>l(J,ee))ne<R&&0>l(he,J)?(U[ue]=he,U[ne]=ee,ue=ne):(U[ue]=J,U[Q]=ee,ue=Q);else if(ne<R&&0>l(he,ee))U[ue]=he,U[ne]=ee,ue=ne;else break e}}return Z}function l(U,Z){var ee=U.sortIndex-Z.sortIndex;return ee!==0?ee:U.id-Z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();e.unstable_now=function(){return f.now()-p}}var g=[],m=[],y=1,v=null,S=3,A=!1,T=!1,k=!1,B=!1,O=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function Y(U){for(var Z=a(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=U)s(m),Z.sortIndex=Z.expirationTime,i(g,Z);else break;Z=a(m)}}function N(U){if(k=!1,Y(U),!T)if(a(g)!==null)T=!0,K||(K=!0,Ne());else{var Z=a(m);Z!==null&&Pe(N,Z.startTime-U)}}var K=!1,I=-1,X=5,W=-1;function ie(){return B?!0:!(e.unstable_now()-W<X)}function ve(){if(B=!1,K){var U=e.unstable_now();W=U;var Z=!0;try{e:{T=!1,k&&(k=!1,H(I),I=-1),A=!0;var ee=S;try{t:{for(Y(U),v=a(g);v!==null&&!(v.expirationTime>U&&ie());){var ue=v.callback;if(typeof ue=="function"){v.callback=null,S=v.priorityLevel;var R=ue(v.expirationTime<=U);if(U=e.unstable_now(),typeof R=="function"){v.callback=R,Y(U),Z=!0;break t}v===a(g)&&s(g),Y(U)}else s(g);v=a(g)}if(v!==null)Z=!0;else{var P=a(m);P!==null&&Pe(N,P.startTime-U),Z=!1}}break e}finally{v=null,S=ee,A=!1}Z=void 0}}finally{Z?Ne():K=!1}}}var Ne;if(typeof M=="function")Ne=function(){M(ve)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Be=Ue.port2;Ue.port1.onmessage=ve,Ne=function(){Be.postMessage(null)}}else Ne=function(){O(ve,0)};function Pe(U,Z){I=O(function(){U(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_next=function(U){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var ee=S;S=Z;try{return U()}finally{S=ee}},e.unstable_requestPaint=function(){B=!0},e.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=S;S=U;try{return Z()}finally{S=ee}},e.unstable_scheduleCallback=function(U,Z,ee){var ue=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ue+ee:ue):ee=ue,U){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=ee+R,U={id:y++,callback:Z,priorityLevel:U,startTime:ee,expirationTime:R,sortIndex:-1},ee>ue?(U.sortIndex=ee,i(m,U),a(g)===null&&U===a(m)&&(k?(H(I),I=-1):k=!0,Pe(N,ee-ue))):(U.sortIndex=R,i(g,U),T||A||(T=!0,K||(K=!0,Ne()))),U},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(U){var Z=S;return function(){var ee=S;S=Z;try{return U.apply(this,arguments)}finally{S=ee}}}}(zd)),zd}var r1;function Jw(){return r1||(r1=1,kd.exports=Qw()),kd.exports}var Bd={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function Ww(){if(s1)return ht;s1=1;var e=u0();function i(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(g,m,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:g,containerInfo:m,implementation:y}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ht.createPortal=function(g,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return u(g,m,null,y)},ht.flushSync=function(g){var m=f.T,y=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=m,s.p=y,s.d.f()}},ht.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},ht.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},ht.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var y=m.as,v=p(y,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:A}):y==="script"&&s.d.X(g,{crossOrigin:v,integrity:S,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ht.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},ht.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,v=p(y,m.crossOrigin);s.d.L(g,y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ht.preloadModule=function(g,m){if(typeof g=="string")if(m){var y=p(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},ht.requestFormReset=function(g){s.d.r(g)},ht.unstable_batchedUpdates=function(g,m){return g(m)},ht.useFormState=function(g,m,y){return f.H.useFormState(g,m,y)},ht.useFormStatus=function(){return f.H.useHostTransitionStatus()},ht.version="19.1.0",ht}var o1;function e3(){if(o1)return Bd.exports;o1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),Bd.exports=Ww(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1;function t3(){if(l1)return hs;l1=1;var e=Jw(),i=u0(),a=e3();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var c=r.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===r)return p(c),t;if(h===o)return p(c),n;h=h.sibling}throw Error(s(188))}if(r.return!==o.return)r=c,o=h;else{for(var x=!1,j=c.child;j;){if(j===r){x=!0,r=c,o=h;break}if(j===o){x=!0,o=c,r=h;break}j=j.sibling}if(!x){for(j=h.child;j;){if(j===r){x=!0,r=h,o=c;break}if(j===o){x=!0,o=h,r=c;break}j=j.sibling}if(!x)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),M=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function Ne(t){return t===null||typeof t!="object"?null:(t=ve&&t[ve]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Symbol.for("react.client.reference");function Be(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case B:return"Profiler";case k:return"StrictMode";case N:return"Suspense";case K:return"SuspenseList";case W:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case M:return(t.displayName||"Context")+".Provider";case H:return(t._context.displayName||"Context")+".Consumer";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:Be(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return Be(t(n))}catch{}}return null}var Pe=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ue=[],R=-1;function P(t){return{current:t}}function Q(t){0>R||(t.current=ue[R],ue[R]=null,R--)}function J(t,n){R++,ue[R]=t.current,t.current=n}var ne=P(null),he=P(null),se=P(null),et=P(null);function je(t,n){switch(J(se,n),J(he,t),J(ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Rg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Rg(n),t=Dg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(ne),J(ne,t)}function ut(){Q(ne),Q(he),Q(se)}function jn(t){t.memoizedState!==null&&J(et,t);var n=ne.current,r=Dg(n,t.type);n!==r&&(J(he,t),J(ne,r))}function vi(t){he.current===t&&(Q(ne),Q(he)),et.current===t&&(Q(et),os._currentValue=ee)}var Vt=Object.prototype.hasOwnProperty,gc=e.unstable_scheduleCallback,yc=e.unstable_cancelCallback,Ev=e.unstable_shouldYield,Cv=e.unstable_requestPaint,ri=e.unstable_now,Rv=e.unstable_getCurrentPriorityLevel,lh=e.unstable_ImmediatePriority,ch=e.unstable_UserBlockingPriority,Gs=e.unstable_NormalPriority,Dv=e.unstable_LowPriority,uh=e.unstable_IdlePriority,Mv=e.log,Ov=e.unstable_setDisableYieldValue,mr=null,Ct=null;function Gi(t){if(typeof Mv=="function"&&Ov(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(mr,t)}catch{}}var Rt=Math.clz32?Math.clz32:Bv,kv=Math.log,zv=Math.LN2;function Bv(t){return t>>>=0,t===0?32:31-(kv(t)/zv|0)|0}var Ks=256,Zs=4194304;function An(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Is(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var j=o&134217727;return j!==0?(o=j&~h,o!==0?c=An(o):(x&=j,x!==0?c=An(x):r||(r=j&~t,r!==0&&(c=An(r))))):(j=o&~h,j!==0?c=An(j):x!==0?c=An(x):r||(r=o&~t,r!==0&&(c=An(r)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:c}function gr(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function $v(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dh(){var t=Ks;return Ks<<=1,(Ks&4194048)===0&&(Ks=256),t}function fh(){var t=Zs;return Zs<<=1,(Zs&62914560)===0&&(Zs=4194304),t}function xc(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function yr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Nv(t,n,r,o,c,h){var x=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var j=t.entanglements,E=t.expirationTimes,L=t.hiddenUpdates;for(r=x&~r;0<r;){var F=31-Rt(r),G=1<<F;j[F]=0,E[F]=-1;var V=L[F];if(V!==null)for(L[F]=null,F=0;F<V.length;F++){var _=V[F];_!==null&&(_.lane&=-536870913)}r&=~G}o!==0&&hh(t,o,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(x&~n))}function hh(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Rt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function ph(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Rt(r),c=1<<o;c&n|t[o]&n&&(t[o]|=n),r&=~c}}function bc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function mh(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Zg(t.type))}function Lv(t,n){var r=Z.p;try{return Z.p=t,n()}finally{Z.p=r}}var Ki=Math.random().toString(36).slice(2),dt="__reactFiber$"+Ki,wt="__reactProps$"+Ki,na="__reactContainer$"+Ki,wc="__reactEvents$"+Ki,Vv="__reactListeners$"+Ki,_v="__reactHandles$"+Ki,gh="__reactResources$"+Ki,xr="__reactMarker$"+Ki;function Sc(t){delete t[dt],delete t[wt],delete t[wc],delete t[Vv],delete t[_v]}function aa(t){var n=t[dt];if(n)return n;for(var r=t.parentNode;r;){if(n=r[na]||r[dt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=zg(t);t!==null;){if(r=t[dt])return r;t=zg(t)}return n}t=r,r=t.parentNode}return null}function ra(t){if(t=t[dt]||t[na]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function br(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function sa(t){var n=t[gh];return n||(n=t[gh]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tt(t){t[xr]=!0}var yh=new Set,xh={};function Tn(t,n){oa(t,n),oa(t+"Capture",n)}function oa(t,n){for(xh[t]=n,t=0;t<n.length;t++)yh.add(n[t])}var Hv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bh={},vh={};function Uv(t){return Vt.call(vh,t)?!0:Vt.call(bh,t)?!1:Hv.test(t)?vh[t]=!0:(bh[t]=!0,!1)}function Xs(t,n,r){if(Uv(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Qs(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function wi(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}var jc,wh;function la(t){if(jc===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);jc=n&&n[1]||"",wh=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jc+t+wh}var Ac=!1;function Tc(t,n){if(!t||Ac)return"";Ac=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(_){var V=_}Reflect.construct(t,[],G)}else{try{G.call()}catch(_){V=_}t.call(G.prototype)}}else{try{throw Error()}catch(_){V=_}(G=t())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(_){if(_&&V&&typeof _.stack=="string")return[_.stack,V.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],j=h[1];if(x&&j){var E=x.split(`
`),L=j.split(`
`);for(c=o=0;o<E.length&&!E[o].includes("DetermineComponentFrameRoot");)o++;for(;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;if(o===E.length||c===L.length)for(o=E.length-1,c=L.length-1;1<=o&&0<=c&&E[o]!==L[c];)c--;for(;1<=o&&0<=c;o--,c--)if(E[o]!==L[c]){if(o!==1||c!==1)do if(o--,c--,0>c||E[o]!==L[c]){var F=`
`+E[o].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=o&&0<=c);break}}}finally{Ac=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?la(r):""}function Pv(t){switch(t.tag){case 26:case 27:case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 15:return Tc(t.type,!1);case 11:return Tc(t.type.render,!1);case 1:return Tc(t.type,!0);case 31:return la("Activity");default:return""}}function Sh(t){try{var n="";do n+=Pv(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function _t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jh(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fv(t){var n=jh(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){o=""+x,h.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Js(t){t._valueTracker||(t._valueTracker=Fv(t))}function Ah(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=jh(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function Ws(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qv=/[\n"\\]/g;function Ht(t){return t.replace(qv,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ec(t,n,r,o,c,h,x,j){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_t(n)):t.value!==""+_t(n)&&(t.value=""+_t(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,x,_t(n)):r!=null?Cc(t,x,_t(r)):o!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?t.name=""+_t(j):t.removeAttribute("name")}function Th(t,n,r,o,c,h,x,j){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;r=r!=null?""+_t(r):"",n=n!=null?""+_t(n):r,j||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=j?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Cc(t,n,r){n==="number"&&Ws(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function ca(t,n,r,o){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&o&&(t[r].defaultSelected=!0)}else{for(r=""+_t(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Eh(t,n,r){if(n!=null&&(n=""+_t(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+_t(r):""}function Ch(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(Pe(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=_t(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function ua(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Yv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rh(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Yv.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Dh(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&Rh(t,c,o)}else for(var h in n)n.hasOwnProperty(h)&&Rh(t,h,n[h])}function Rc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function eo(t){return Kv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Dc=null;function Mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var da=null,fa=null;function Mh(t){var n=ra(t);if(n&&(t=n.stateNode)){var r=t[wt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ec(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var c=o[wt]||null;if(!c)throw Error(s(90));Ec(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Ah(o)}break e;case"textarea":Eh(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&ca(t,!!r.multiple,n,!1)}}}var Oc=!1;function Oh(t,n,r){if(Oc)return t(n,r);Oc=!0;try{var o=t(n);return o}finally{if(Oc=!1,(da!==null||fa!==null)&&(Ho(),da&&(n=da,t=fa,fa=da=null,Mh(n),t)))for(n=0;n<t.length;n++)Mh(t[n])}}function vr(t,n){var r=t.stateNode;if(r===null)return null;var o=r[wt]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(Si)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){kc=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{kc=!1}var Zi=null,zc=null,to=null;function kh(){if(to)return to;var t,n=zc,r=n.length,o,c="value"in Zi?Zi.value:Zi.textContent,h=c.length;for(t=0;t<r&&n[t]===c[t];t++);var x=r-t;for(o=1;o<=x&&n[r-o]===c[h-o];o++);return to=c.slice(t,1<o?1-o:void 0)}function io(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function zh(){return!1}function St(t){function n(r,o,c,h,x){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var j in t)t.hasOwnProperty(j)&&(r=t[j],this[j]=r?r(h):h[j]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?no:zh,this.isPropagationStopped=zh,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),n}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=St(En),Sr=y({},En,{view:0,detail:0}),Zv=St(Sr),Bc,$c,jr,ro=y({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jr&&(jr&&t.type==="mousemove"?(Bc=t.screenX-jr.screenX,$c=t.screenY-jr.screenY):$c=Bc=0,jr=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Bh=St(ro),Iv=y({},ro,{dataTransfer:0}),Xv=St(Iv),Qv=y({},Sr,{relatedTarget:0}),Nc=St(Qv),Jv=y({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=St(Jv),e2=y({},En,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t2=St(e2),i2=y({},En,{data:0}),$h=St(i2),n2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s2(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=r2[t])?!!n[t]:!1}function Lc(){return s2}var o2=y({},Sr,{key:function(t){if(t.key){var n=n2[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l2=St(o2),c2=y({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=St(c2),u2=y({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),d2=St(u2),f2=y({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),h2=St(f2),p2=y({},ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m2=St(p2),g2=y({},En,{newState:0,oldState:0}),y2=St(g2),x2=[9,13,27,32],Vc=Si&&"CompositionEvent"in window,Ar=null;Si&&"documentMode"in document&&(Ar=document.documentMode);var b2=Si&&"TextEvent"in window&&!Ar,Lh=Si&&(!Vc||Ar&&8<Ar&&11>=Ar),Vh=" ",_h=!1;function Hh(t,n){switch(t){case"keyup":return x2.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ha=!1;function v2(t,n){switch(t){case"compositionend":return Uh(n);case"keypress":return n.which!==32?null:(_h=!0,Vh);case"textInput":return t=n.data,t===Vh&&_h?null:t;default:return null}}function w2(t,n){if(ha)return t==="compositionend"||!Vc&&Hh(t,n)?(t=kh(),to=zc=Zi=null,ha=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lh&&n.locale!=="ko"?null:n.data;default:return null}}var S2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!S2[t.type]:n==="textarea"}function Fh(t,n,r,o){da?fa?fa.push(o):fa=[o]:da=o,n=Go(n,"onChange"),0<n.length&&(r=new ao("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var Tr=null,Er=null;function j2(t){jg(t,0)}function so(t){var n=br(t);if(Ah(n))return t}function qh(t,n){if(t==="change")return n}var Yh=!1;if(Si){var _c;if(Si){var Hc="oninput"in document;if(!Hc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Hc=typeof Gh.oninput=="function"}_c=Hc}else _c=!1;Yh=_c&&(!document.documentMode||9<document.documentMode)}function Kh(){Tr&&(Tr.detachEvent("onpropertychange",Zh),Er=Tr=null)}function Zh(t){if(t.propertyName==="value"&&so(Er)){var n=[];Fh(n,Er,t,Mc(t)),Oh(j2,n)}}function A2(t,n,r){t==="focusin"?(Kh(),Tr=n,Er=r,Tr.attachEvent("onpropertychange",Zh)):t==="focusout"&&Kh()}function T2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return so(Er)}function E2(t,n){if(t==="click")return so(n)}function C2(t,n){if(t==="input"||t==="change")return so(n)}function R2(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Dt=typeof Object.is=="function"?Object.is:R2;function Cr(t,n){if(Dt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!Vt.call(n,c)||!Dt(t[c],n[c]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xh(t,n){var r=Ih(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ih(r)}}function Qh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Jh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ws(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Ws(t.document)}return n}function Uc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var D2=Si&&"documentMode"in document&&11>=document.documentMode,pa=null,Pc=null,Rr=null,Fc=!1;function Wh(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Fc||pa==null||pa!==Ws(o)||(o=pa,"selectionStart"in o&&Uc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Rr&&Cr(Rr,o)||(Rr=o,o=Go(Pc,"onSelect"),0<o.length&&(n=new ao("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=pa)))}function Cn(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var ma={animationend:Cn("Animation","AnimationEnd"),animationiteration:Cn("Animation","AnimationIteration"),animationstart:Cn("Animation","AnimationStart"),transitionrun:Cn("Transition","TransitionRun"),transitionstart:Cn("Transition","TransitionStart"),transitioncancel:Cn("Transition","TransitionCancel"),transitionend:Cn("Transition","TransitionEnd")},qc={},ep={};Si&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Rn(t){if(qc[t])return qc[t];if(!ma[t])return t;var n=ma[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in ep)return qc[t]=n[r];return t}var tp=Rn("animationend"),ip=Rn("animationiteration"),np=Rn("animationstart"),M2=Rn("transitionrun"),O2=Rn("transitionstart"),k2=Rn("transitioncancel"),ap=Rn("transitionend"),rp=new Map,Yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yc.push("scrollEnd");function Wt(t,n){rp.set(t,n),Tn(n,[t])}var sp=new WeakMap;function Ut(t,n){if(typeof t=="object"&&t!==null){var r=sp.get(t);return r!==void 0?r:(n={value:t,source:n,stack:Sh(n)},sp.set(t,n),n)}return{value:t,source:n,stack:Sh(n)}}var Pt=[],ga=0,Gc=0;function oo(){for(var t=ga,n=Gc=ga=0;n<t;){var r=Pt[n];Pt[n++]=null;var o=Pt[n];Pt[n++]=null;var c=Pt[n];Pt[n++]=null;var h=Pt[n];if(Pt[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}h!==0&&op(r,c,h)}}function lo(t,n,r,o){Pt[ga++]=t,Pt[ga++]=n,Pt[ga++]=r,Pt[ga++]=o,Gc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Kc(t,n,r,o){return lo(t,n,r,o),co(t)}function ya(t,n){return lo(t,null,null,n),co(t)}function op(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var c=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Rt(r),t=h.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=r|536870912),h):null}function co(t){if(50<Wr)throw Wr=0,Wu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var xa={};function z2(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,n,r,o){return new z2(t,n,r,o)}function Zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,n){var r=t.alternate;return r===null?(r=Mt(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function lp(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function uo(t,n,r,o,c,h){var x=0;if(o=t,typeof t=="function")Zc(t)&&(x=1);else if(typeof t=="string")x=$w(t,r,ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case W:return t=Mt(31,r,n,c),t.elementType=W,t.lanes=h,t;case T:return Dn(r.children,c,h,n);case k:x=8,c|=24;break;case B:return t=Mt(12,r,n,c|2),t.elementType=B,t.lanes=h,t;case N:return t=Mt(13,r,n,c),t.elementType=N,t.lanes=h,t;case K:return t=Mt(19,r,n,c),t.elementType=K,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:case M:x=10;break e;case H:x=9;break e;case Y:x=11;break e;case I:x=14;break e;case X:x=16,o=null;break e}x=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Mt(x,r,n,c),n.elementType=t,n.type=o,n.lanes=h,n}function Dn(t,n,r,o){return t=Mt(7,t,o,n),t.lanes=r,t}function Ic(t,n,r){return t=Mt(6,t,null,n),t.lanes=r,t}function Xc(t,n,r){return n=Mt(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ba=[],va=0,fo=null,ho=0,Ft=[],qt=0,Mn=null,Ai=1,Ti="";function On(t,n){ba[va++]=ho,ba[va++]=fo,fo=t,ho=n}function cp(t,n,r){Ft[qt++]=Ai,Ft[qt++]=Ti,Ft[qt++]=Mn,Mn=t;var o=Ai;t=Ti;var c=32-Rt(o)-1;o&=~(1<<c),r+=1;var h=32-Rt(n)+c;if(30<h){var x=c-c%5;h=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Ai=1<<32-Rt(n)+c|r<<c|o,Ti=h+t}else Ai=1<<h|r<<c|o,Ti=t}function Qc(t){t.return!==null&&(On(t,1),cp(t,1,0))}function Jc(t){for(;t===fo;)fo=ba[--va],ba[va]=null,ho=ba[--va],ba[va]=null;for(;t===Mn;)Mn=Ft[--qt],Ft[qt]=null,Ti=Ft[--qt],Ft[qt]=null,Ai=Ft[--qt],Ft[qt]=null}var xt=null,Fe=null,Se=!1,kn=null,si=!1,Wc=Error(s(519));function zn(t){var n=Error(s(418,""));throw Or(Ut(n,t)),Wc}function up(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[dt]=t,n[wt]=o,r){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(r=0;r<ts.length;r++)xe(ts[r],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Th(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Js(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Ch(n,o.value,o.defaultValue,o.children),Js(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Cg(n.textContent,r)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=Ko),n=!0):n=!1,n||zn(t)}function dp(t){for(xt=t.return;xt;)switch(xt.tag){case 5:case 13:si=!1;return;case 27:case 3:si=!0;return;default:xt=xt.return}}function Dr(t){if(t!==xt)return!1;if(!Se)return dp(t),Se=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||md(t.type,t.memoizedProps)),r=!r),r&&Fe&&zn(t),dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){Fe=ti(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}Fe=null}}else n===27?(n=Fe,dn(t.type)?(t=bd,bd=null,Fe=t):Fe=n):Fe=xt?ti(t.stateNode.nextSibling):null;return!0}function Mr(){Fe=xt=null,Se=!1}function fp(){var t=kn;return t!==null&&(Tt===null?Tt=t:Tt.push.apply(Tt,t),kn=null),t}function Or(t){kn===null?kn=[t]:kn.push(t)}var eu=P(null),Bn=null,Ei=null;function Ii(t,n,r){J(eu,n._currentValue),n._currentValue=r}function Ci(t){t._currentValue=eu.current,Q(eu)}function tu(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function iu(t,n,r,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var x=c.child;h=h.firstContext;e:for(;h!==null;){var j=h;h=c;for(var E=0;E<n.length;E++)if(j.context===n[E]){h.lanes|=r,j=h.alternate,j!==null&&(j.lanes|=r),tu(h.return,r,t),o||(x=null);break e}h=j.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=r,h=x.alternate,h!==null&&(h.lanes|=r),tu(x,r,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function kr(t,n,r,o){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var j=c.type;Dt(c.pendingProps.value,x.value)||(t!==null?t.push(j):t=[j])}}else if(c===et.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(os):t=[os])}c=c.return}t!==null&&iu(n,t,r,o),n.flags|=262144}function po(t){for(t=t.firstContext;t!==null;){if(!Dt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $n(t){Bn=t,Ei=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ft(t){return hp(Bn,t)}function mo(t,n){return Bn===null&&$n(t),hp(t,n)}function hp(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ei===null){if(t===null)throw Error(s(308));Ei=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ei=Ei.next=n;return r}var B2=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},$2=e.unstable_scheduleCallback,N2=e.unstable_NormalPriority,Je={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nu(){return{controller:new B2,data:new Map,refCount:0}}function zr(t){t.refCount--,t.refCount===0&&$2(N2,function(){t.controller.abort()})}var Br=null,au=0,wa=0,Sa=null;function L2(t,n){if(Br===null){var r=Br=[];au=0,wa=sd(),Sa={status:"pending",value:void 0,then:function(o){r.push(o)}}}return au++,n.then(pp,pp),n}function pp(){if(--au===0&&Br!==null){Sa!==null&&(Sa.status="fulfilled");var t=Br;Br=null,wa=0,Sa=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function V2(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var mp=U.S;U.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&L2(t,n),mp!==null&&mp(t,n)};var Nn=P(null);function ru(){var t=Nn.current;return t!==null?t:Oe.pooledCache}function go(t,n){n===null?J(Nn,Nn.current):J(Nn,n.pool)}function gp(){var t=ru();return t===null?null:{parent:Je._currentValue,pool:t}}var $r=Error(s(460)),yp=Error(s(474)),yo=Error(s(542)),su={then:function(){}};function xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xo(){}function bp(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(xo,xo),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wp(t),t;default:if(typeof n.status=="string")n.then(xo,xo);else{if(t=Oe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wp(t),t}throw Nr=n,$r}}var Nr=null;function vp(){if(Nr===null)throw Error(s(459));var t=Nr;return Nr=null,t}function wp(t){if(t===$r||t===yo)throw Error(s(483))}var Xi=!1;function ou(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ji(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Te&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=co(t),op(t,null,r),n}return lo(t,o,n,r),co(t)}function Lr(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,ph(t,r)}}function cu(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var x={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?c=h=x:h=h.next=x,r=r.next}while(r!==null);h===null?c=h=n:h=h.next=n}else c=h=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var uu=!1;function Vr(){if(uu){var t=Sa;if(t!==null)throw t}}function _r(t,n,r,o){uu=!1;var c=t.updateQueue;Xi=!1;var h=c.firstBaseUpdate,x=c.lastBaseUpdate,j=c.shared.pending;if(j!==null){c.shared.pending=null;var E=j,L=E.next;E.next=null,x===null?h=L:x.next=L,x=E;var F=t.alternate;F!==null&&(F=F.updateQueue,j=F.lastBaseUpdate,j!==x&&(j===null?F.firstBaseUpdate=L:j.next=L,F.lastBaseUpdate=E))}if(h!==null){var G=c.baseState;x=0,F=L=E=null,j=h;do{var V=j.lane&-536870913,_=V!==j.lane;if(_?(be&V)===V:(o&V)===V){V!==0&&V===wa&&(uu=!0),F!==null&&(F=F.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var le=t,re=j;V=n;var De=r;switch(re.tag){case 1:if(le=re.payload,typeof le=="function"){G=le.call(De,G,V);break e}G=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=re.payload,V=typeof le=="function"?le.call(De,G,V):le,V==null)break e;G=y({},G,V);break e;case 2:Xi=!0}}V=j.callback,V!==null&&(t.flags|=64,_&&(t.flags|=8192),_=c.callbacks,_===null?c.callbacks=[V]:_.push(V))}else _={lane:V,tag:j.tag,payload:j.payload,callback:j.callback,next:null},F===null?(L=F=_,E=G):F=F.next=_,x|=V;if(j=j.next,j===null){if(j=c.shared.pending,j===null)break;_=j,j=_.next,_.next=null,c.lastBaseUpdate=_,c.shared.pending=null}}while(!0);F===null&&(E=G),c.baseState=E,c.firstBaseUpdate=L,c.lastBaseUpdate=F,h===null&&(c.shared.lanes=0),on|=x,t.lanes=x,t.memoizedState=G}}function Sp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function jp(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Sp(r[t],n)}var ja=P(null),bo=P(0);function Ap(t,n){t=Bi,J(bo,t),J(ja,n),Bi=t|n.baseLanes}function du(){J(bo,Bi),J(ja,ja.current)}function fu(){Bi=bo.current,Q(ja),Q(bo)}var Wi=0,me=null,Ce=null,Ie=null,vo=!1,Aa=!1,Ln=!1,wo=0,Hr=0,Ta=null,_2=0;function Ge(){throw Error(s(321))}function hu(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Dt(t[r],n[r]))return!1;return!0}function pu(t,n,r,o,c,h){return Wi=h,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?om:lm,Ln=!1,h=r(o,c),Ln=!1,Aa&&(h=Ep(n,r,o,c)),Tp(t),h}function Tp(t){U.H=Co;var n=Ce!==null&&Ce.next!==null;if(Wi=0,Ie=Ce=me=null,vo=!1,Hr=0,Ta=null,n)throw Error(s(300));t===null||it||(t=t.dependencies,t!==null&&po(t)&&(it=!0))}function Ep(t,n,r,o){me=t;var c=0;do{if(Aa&&(Ta=null),Hr=0,Aa=!1,25<=c)throw Error(s(301));if(c+=1,Ie=Ce=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}U.H=G2,h=n(r,o)}while(Aa);return h}function H2(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?Ur(n):n,t=t.useState()[0],(Ce!==null?Ce.memoizedState:null)!==t&&(me.flags|=1024),n}function mu(){var t=wo!==0;return wo=0,t}function gu(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function yu(t){if(vo){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vo=!1}Wi=0,Ie=Ce=me=null,Aa=!1,Hr=wo=0,Ta=null}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?me.memoizedState=Ie=t:Ie=Ie.next=t,Ie}function Xe(){if(Ce===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var n=Ie===null?me.memoizedState:Ie.next;if(n!==null)Ie=n,Ce=t;else{if(t===null)throw me.alternate===null?Error(s(467)):Error(s(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ie===null?me.memoizedState=Ie=t:Ie=Ie.next=t}return Ie}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ur(t){var n=Hr;return Hr+=1,Ta===null&&(Ta=[]),t=bp(Ta,t,n),n=me,(Ie===null?n.memoizedState:Ie.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?om:lm),t}function So(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ur(t);if(t.$$typeof===M)return ft(t)}throw Error(s(438,String(t)))}function bu(t){var n=null,r=me.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=xu(),me.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=ie;return n.index++,r}function Ri(t,n){return typeof n=="function"?n(t):n}function jo(t){var n=Xe();return vu(n,Ce,t)}function vu(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var c=t.baseQueue,h=o.pending;if(h!==null){if(c!==null){var x=c.next;c.next=h.next,h.next=x}n.baseQueue=c=h,o.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var j=x=null,E=null,L=n,F=!1;do{var G=L.lane&-536870913;if(G!==L.lane?(be&G)===G:(Wi&G)===G){var V=L.revertLane;if(V===0)E!==null&&(E=E.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),G===wa&&(F=!0);else if((Wi&V)===V){L=L.next,V===wa&&(F=!0);continue}else G={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(j=E=G,x=h):E=E.next=G,me.lanes|=V,on|=V;G=L.action,Ln&&r(h,G),h=L.hasEagerState?L.eagerState:r(h,G)}else V={lane:G,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},E===null?(j=E=V,x=h):E=E.next=V,me.lanes|=G,on|=G;L=L.next}while(L!==null&&L!==n);if(E===null?x=h:E.next=j,!Dt(h,t.memoizedState)&&(it=!0,F&&(r=Sa,r!==null)))throw r;t.memoizedState=h,t.baseState=x,t.baseQueue=E,o.lastRenderedState=h}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function wu(t){var n=Xe(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,c=r.pending,h=n.memoizedState;if(c!==null){r.pending=null;var x=c=c.next;do h=t(h,x.action),x=x.next;while(x!==c);Dt(h,n.memoizedState)||(it=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function Cp(t,n,r){var o=me,c=Xe(),h=Se;if(h){if(r===void 0)throw Error(s(407));r=r()}else r=n();var x=!Dt((Ce||c).memoizedState,r);x&&(c.memoizedState=r,it=!0),c=c.queue;var j=Mp.bind(null,o,c,t);if(Pr(2048,8,j,[t]),c.getSnapshot!==n||x||Ie!==null&&Ie.memoizedState.tag&1){if(o.flags|=2048,Ea(9,Ao(),Dp.bind(null,o,c,r,n),null),Oe===null)throw Error(s(349));h||(Wi&124)!==0||Rp(o,n,r)}return r}function Rp(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=me.updateQueue,n===null?(n=xu(),me.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Dp(t,n,r,o){n.value=r,n.getSnapshot=o,Op(n)&&kp(t)}function Mp(t,n,r){return r(function(){Op(n)&&kp(t)})}function Op(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Dt(t,r)}catch{return!0}}function kp(t){var n=ya(t,2);n!==null&&$t(n,t,2)}function Su(t){var n=jt();if(typeof t=="function"){var r=t;if(t=r(),Ln){Gi(!0);try{r()}finally{Gi(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:t},n}function zp(t,n,r,o){return t.baseState=r,vu(t,Ce,typeof o=="function"?o:Ri)}function U2(t,n,r,o,c){if(Eo(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};U.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,Bp(n,h)):(h.next=r.next,n.pending=r.next=h)}}function Bp(t,n){var r=n.action,o=n.payload,c=t.state;if(n.isTransition){var h=U.T,x={};U.T=x;try{var j=r(c,o),E=U.S;E!==null&&E(x,j),$p(t,n,j)}catch(L){ju(t,n,L)}finally{U.T=h}}else try{h=r(c,o),$p(t,n,h)}catch(L){ju(t,n,L)}}function $p(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Np(t,n,o)},function(o){return ju(t,n,o)}):Np(t,n,r)}function Np(t,n,r){n.status="fulfilled",n.value=r,Lp(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Bp(t,r)))}function ju(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Lp(n),n=n.next;while(n!==o)}t.action=null}function Lp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Vp(t,n){return n}function _p(t,n){if(Se){var r=Oe.formState;if(r!==null){e:{var o=me;if(Se){if(Fe){t:{for(var c=Fe,h=si;c.nodeType!==8;){if(!h){c=null;break t}if(c=ti(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Fe=ti(c.nextSibling),o=c.data==="F!";break e}}zn(o)}o=!1}o&&(n=r[0])}}return r=jt(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vp,lastRenderedState:n},r.queue=o,r=am.bind(null,me,o),o.dispatch=r,o=Su(!1),h=Ru.bind(null,me,!1,o.queue),o=jt(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,r=U2.bind(null,me,c,h,r),c.dispatch=r,o.memoizedState=t,[n,r,!1]}function Hp(t){var n=Xe();return Up(n,Ce,t)}function Up(t,n,r){if(n=vu(t,n,Vp)[0],t=jo(Ri)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ur(n)}catch(x){throw x===$r?yo:x}else o=n;n=Xe();var c=n.queue,h=c.dispatch;return r!==n.memoizedState&&(me.flags|=2048,Ea(9,Ao(),P2.bind(null,c,r),null)),[o,h,t]}function P2(t,n){t.action=n}function Pp(t){var n=Xe(),r=Ce;if(r!==null)return Up(n,r,t);Xe(),n=n.memoizedState,r=Xe();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function Ea(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=me.updateQueue,n===null&&(n=xu(),me.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Ao(){return{destroy:void 0,resource:void 0}}function Fp(){return Xe().memoizedState}function To(t,n,r,o){var c=jt();o=o===void 0?null:o,me.flags|=t,c.memoizedState=Ea(1|n,Ao(),r,o)}function Pr(t,n,r,o){var c=Xe();o=o===void 0?null:o;var h=c.memoizedState.inst;Ce!==null&&o!==null&&hu(o,Ce.memoizedState.deps)?c.memoizedState=Ea(n,h,r,o):(me.flags|=t,c.memoizedState=Ea(1|n,h,r,o))}function qp(t,n){To(8390656,8,t,n)}function Yp(t,n){Pr(2048,8,t,n)}function Gp(t,n){return Pr(4,2,t,n)}function Kp(t,n){return Pr(4,4,t,n)}function Zp(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ip(t,n,r){r=r!=null?r.concat([t]):null,Pr(4,4,Zp.bind(null,n,t),r)}function Au(){}function Xp(t,n){var r=Xe();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&hu(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function Qp(t,n){var r=Xe();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&hu(n,o[1]))return o[0];if(o=t(),Ln){Gi(!0);try{t()}finally{Gi(!1)}}return r.memoizedState=[o,n],o}function Tu(t,n,r){return r===void 0||(Wi&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=eg(),me.lanes|=t,on|=t,r)}function Jp(t,n,r,o){return Dt(r,n)?r:ja.current!==null?(t=Tu(t,r,o),Dt(t,n)||(it=!0),t):(Wi&42)===0?(it=!0,t.memoizedState=r):(t=eg(),me.lanes|=t,on|=t,n)}function Wp(t,n,r,o,c){var h=Z.p;Z.p=h!==0&&8>h?h:8;var x=U.T,j={};U.T=j,Ru(t,!1,n,r);try{var E=c(),L=U.S;if(L!==null&&L(j,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=V2(E,o);Fr(t,n,F,Bt(t))}else Fr(t,n,o,Bt(t))}catch(G){Fr(t,n,{then:function(){},status:"rejected",reason:G},Bt())}finally{Z.p=h,U.T=x}}function F2(){}function Eu(t,n,r,o){if(t.tag!==5)throw Error(s(476));var c=em(t).queue;Wp(t,c,n,ee,r===null?F2:function(){return tm(t),r(o)})}function em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:ee},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function tm(t){var n=em(t).next.queue;Fr(t,n,{},Bt())}function Cu(){return ft(os)}function im(){return Xe().memoizedState}function nm(){return Xe().memoizedState}function q2(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=Bt();t=Qi(r);var o=Ji(n,t,r);o!==null&&($t(o,n,r),Lr(o,n,r)),n={cache:nu()},t.payload=n;return}n=n.return}}function Y2(t,n,r){var o=Bt();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Eo(t)?rm(n,r):(r=Kc(t,n,r,o),r!==null&&($t(r,t,o),sm(r,n,o)))}function am(t,n,r){var o=Bt();Fr(t,n,r,o)}function Fr(t,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Eo(t))rm(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,j=h(x,r);if(c.hasEagerState=!0,c.eagerState=j,Dt(j,x))return lo(t,n,c,0),Oe===null&&oo(),!1}catch{}finally{}if(r=Kc(t,n,c,o),r!==null)return $t(r,t,o),sm(r,n,o),!0}return!1}function Ru(t,n,r,o){if(o={lane:2,revertLane:sd(),action:o,hasEagerState:!1,eagerState:null,next:null},Eo(t)){if(n)throw Error(s(479))}else n=Kc(t,r,o,2),n!==null&&$t(n,t,2)}function Eo(t){var n=t.alternate;return t===me||n!==null&&n===me}function rm(t,n){Aa=vo=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function sm(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,ph(t,r)}}var Co={readContext:ft,use:So,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge},om={readContext:ft,use:So,useCallback:function(t,n){return jt().memoizedState=[t,n===void 0?null:n],t},useContext:ft,useEffect:qp,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,To(4194308,4,Zp.bind(null,n,t),r)},useLayoutEffect:function(t,n){return To(4194308,4,t,n)},useInsertionEffect:function(t,n){To(4,2,t,n)},useMemo:function(t,n){var r=jt();n=n===void 0?null:n;var o=t();if(Ln){Gi(!0);try{t()}finally{Gi(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=jt();if(r!==void 0){var c=r(n);if(Ln){Gi(!0);try{r(n)}finally{Gi(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Y2.bind(null,me,t),[o.memoizedState,t]},useRef:function(t){var n=jt();return t={current:t},n.memoizedState=t},useState:function(t){t=Su(t);var n=t.queue,r=am.bind(null,me,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Au,useDeferredValue:function(t,n){var r=jt();return Tu(r,t,n)},useTransition:function(){var t=Su(!1);return t=Wp.bind(null,me,t.queue,!0,!1),jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=me,c=jt();if(Se){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),Oe===null)throw Error(s(349));(be&124)!==0||Rp(o,n,r)}c.memoizedState=r;var h={value:r,getSnapshot:n};return c.queue=h,qp(Mp.bind(null,o,h,t),[t]),o.flags|=2048,Ea(9,Ao(),Dp.bind(null,o,h,r,n),null),r},useId:function(){var t=jt(),n=Oe.identifierPrefix;if(Se){var r=Ti,o=Ai;r=(o&~(1<<32-Rt(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=wo++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=_2++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Cu,useFormState:_p,useActionState:_p,useOptimistic:function(t){var n=jt();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Ru.bind(null,me,!0,r),r.dispatch=n,[t,n]},useMemoCache:bu,useCacheRefresh:function(){return jt().memoizedState=q2.bind(null,me)}},lm={readContext:ft,use:So,useCallback:Xp,useContext:ft,useEffect:Yp,useImperativeHandle:Ip,useInsertionEffect:Gp,useLayoutEffect:Kp,useMemo:Qp,useReducer:jo,useRef:Fp,useState:function(){return jo(Ri)},useDebugValue:Au,useDeferredValue:function(t,n){var r=Xe();return Jp(r,Ce.memoizedState,t,n)},useTransition:function(){var t=jo(Ri)[0],n=Xe().memoizedState;return[typeof t=="boolean"?t:Ur(t),n]},useSyncExternalStore:Cp,useId:im,useHostTransitionStatus:Cu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t,n){var r=Xe();return zp(r,Ce,t,n)},useMemoCache:bu,useCacheRefresh:nm},G2={readContext:ft,use:So,useCallback:Xp,useContext:ft,useEffect:Yp,useImperativeHandle:Ip,useInsertionEffect:Gp,useLayoutEffect:Kp,useMemo:Qp,useReducer:wu,useRef:Fp,useState:function(){return wu(Ri)},useDebugValue:Au,useDeferredValue:function(t,n){var r=Xe();return Ce===null?Tu(r,t,n):Jp(r,Ce.memoizedState,t,n)},useTransition:function(){var t=wu(Ri)[0],n=Xe().memoizedState;return[typeof t=="boolean"?t:Ur(t),n]},useSyncExternalStore:Cp,useId:im,useHostTransitionStatus:Cu,useFormState:Pp,useActionState:Pp,useOptimistic:function(t,n){var r=Xe();return Ce!==null?zp(r,Ce,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:bu,useCacheRefresh:nm},Ca=null,qr=0;function Ro(t){var n=qr;return qr+=1,Ca===null&&(Ca=[]),bp(Ca,t,n)}function Yr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Do(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function cm(t){var n=t._init;return n(t._payload)}function um(t){function n(z,D){if(t){var $=z.deletions;$===null?(z.deletions=[D],z.flags|=16):$.push(D)}}function r(z,D){if(!t)return null;for(;D!==null;)n(z,D),D=D.sibling;return null}function o(z){for(var D=new Map;z!==null;)z.key!==null?D.set(z.key,z):D.set(z.index,z),z=z.sibling;return D}function c(z,D){return z=ji(z,D),z.index=0,z.sibling=null,z}function h(z,D,$){return z.index=$,t?($=z.alternate,$!==null?($=$.index,$<D?(z.flags|=67108866,D):$):(z.flags|=67108866,D)):(z.flags|=1048576,D)}function x(z){return t&&z.alternate===null&&(z.flags|=67108866),z}function j(z,D,$,q){return D===null||D.tag!==6?(D=Ic($,z.mode,q),D.return=z,D):(D=c(D,$),D.return=z,D)}function E(z,D,$,q){var te=$.type;return te===T?F(z,D,$.props.children,q,$.key):D!==null&&(D.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===X&&cm(te)===D.type)?(D=c(D,$.props),Yr(D,$),D.return=z,D):(D=uo($.type,$.key,$.props,null,z.mode,q),Yr(D,$),D.return=z,D)}function L(z,D,$,q){return D===null||D.tag!==4||D.stateNode.containerInfo!==$.containerInfo||D.stateNode.implementation!==$.implementation?(D=Xc($,z.mode,q),D.return=z,D):(D=c(D,$.children||[]),D.return=z,D)}function F(z,D,$,q,te){return D===null||D.tag!==7?(D=Dn($,z.mode,q,te),D.return=z,D):(D=c(D,$),D.return=z,D)}function G(z,D,$){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Ic(""+D,z.mode,$),D.return=z,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return $=uo(D.type,D.key,D.props,null,z.mode,$),Yr($,D),$.return=z,$;case A:return D=Xc(D,z.mode,$),D.return=z,D;case X:var q=D._init;return D=q(D._payload),G(z,D,$)}if(Pe(D)||Ne(D))return D=Dn(D,z.mode,$,null),D.return=z,D;if(typeof D.then=="function")return G(z,Ro(D),$);if(D.$$typeof===M)return G(z,mo(z,D),$);Do(z,D)}return null}function V(z,D,$,q){var te=D!==null?D.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return te!==null?null:j(z,D,""+$,q);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===te?E(z,D,$,q):null;case A:return $.key===te?L(z,D,$,q):null;case X:return te=$._init,$=te($._payload),V(z,D,$,q)}if(Pe($)||Ne($))return te!==null?null:F(z,D,$,q,null);if(typeof $.then=="function")return V(z,D,Ro($),q);if($.$$typeof===M)return V(z,D,mo(z,$),q);Do(z,$)}return null}function _(z,D,$,q,te){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return z=z.get($)||null,j(D,z,""+q,te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return z=z.get(q.key===null?$:q.key)||null,E(D,z,q,te);case A:return z=z.get(q.key===null?$:q.key)||null,L(D,z,q,te);case X:var ge=q._init;return q=ge(q._payload),_(z,D,$,q,te)}if(Pe(q)||Ne(q))return z=z.get($)||null,F(D,z,q,te,null);if(typeof q.then=="function")return _(z,D,$,Ro(q),te);if(q.$$typeof===M)return _(z,D,$,mo(D,q),te);Do(D,q)}return null}function le(z,D,$,q){for(var te=null,ge=null,ae=D,oe=D=0,at=null;ae!==null&&oe<$.length;oe++){ae.index>oe?(at=ae,ae=null):at=ae.sibling;var we=V(z,ae,$[oe],q);if(we===null){ae===null&&(ae=at);break}t&&ae&&we.alternate===null&&n(z,ae),D=h(we,D,oe),ge===null?te=we:ge.sibling=we,ge=we,ae=at}if(oe===$.length)return r(z,ae),Se&&On(z,oe),te;if(ae===null){for(;oe<$.length;oe++)ae=G(z,$[oe],q),ae!==null&&(D=h(ae,D,oe),ge===null?te=ae:ge.sibling=ae,ge=ae);return Se&&On(z,oe),te}for(ae=o(ae);oe<$.length;oe++)at=_(ae,z,oe,$[oe],q),at!==null&&(t&&at.alternate!==null&&ae.delete(at.key===null?oe:at.key),D=h(at,D,oe),ge===null?te=at:ge.sibling=at,ge=at);return t&&ae.forEach(function(gn){return n(z,gn)}),Se&&On(z,oe),te}function re(z,D,$,q){if($==null)throw Error(s(151));for(var te=null,ge=null,ae=D,oe=D=0,at=null,we=$.next();ae!==null&&!we.done;oe++,we=$.next()){ae.index>oe?(at=ae,ae=null):at=ae.sibling;var gn=V(z,ae,we.value,q);if(gn===null){ae===null&&(ae=at);break}t&&ae&&gn.alternate===null&&n(z,ae),D=h(gn,D,oe),ge===null?te=gn:ge.sibling=gn,ge=gn,ae=at}if(we.done)return r(z,ae),Se&&On(z,oe),te;if(ae===null){for(;!we.done;oe++,we=$.next())we=G(z,we.value,q),we!==null&&(D=h(we,D,oe),ge===null?te=we:ge.sibling=we,ge=we);return Se&&On(z,oe),te}for(ae=o(ae);!we.done;oe++,we=$.next())we=_(ae,z,oe,we.value,q),we!==null&&(t&&we.alternate!==null&&ae.delete(we.key===null?oe:we.key),D=h(we,D,oe),ge===null?te=we:ge.sibling=we,ge=we);return t&&ae.forEach(function(Kw){return n(z,Kw)}),Se&&On(z,oe),te}function De(z,D,$,q){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:e:{for(var te=$.key;D!==null;){if(D.key===te){if(te=$.type,te===T){if(D.tag===7){r(z,D.sibling),q=c(D,$.props.children),q.return=z,z=q;break e}}else if(D.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===X&&cm(te)===D.type){r(z,D.sibling),q=c(D,$.props),Yr(q,$),q.return=z,z=q;break e}r(z,D);break}else n(z,D);D=D.sibling}$.type===T?(q=Dn($.props.children,z.mode,q,$.key),q.return=z,z=q):(q=uo($.type,$.key,$.props,null,z.mode,q),Yr(q,$),q.return=z,z=q)}return x(z);case A:e:{for(te=$.key;D!==null;){if(D.key===te)if(D.tag===4&&D.stateNode.containerInfo===$.containerInfo&&D.stateNode.implementation===$.implementation){r(z,D.sibling),q=c(D,$.children||[]),q.return=z,z=q;break e}else{r(z,D);break}else n(z,D);D=D.sibling}q=Xc($,z.mode,q),q.return=z,z=q}return x(z);case X:return te=$._init,$=te($._payload),De(z,D,$,q)}if(Pe($))return le(z,D,$,q);if(Ne($)){if(te=Ne($),typeof te!="function")throw Error(s(150));return $=te.call($),re(z,D,$,q)}if(typeof $.then=="function")return De(z,D,Ro($),q);if($.$$typeof===M)return De(z,D,mo(z,$),q);Do(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,D!==null&&D.tag===6?(r(z,D.sibling),q=c(D,$),q.return=z,z=q):(r(z,D),q=Ic($,z.mode,q),q.return=z,z=q),x(z)):r(z,D)}return function(z,D,$,q){try{qr=0;var te=De(z,D,$,q);return Ca=null,te}catch(ae){if(ae===$r||ae===yo)throw ae;var ge=Mt(29,ae,null,z.mode);return ge.lanes=q,ge.return=z,ge}finally{}}}var Ra=um(!0),dm=um(!1),Yt=P(null),oi=null;function en(t){var n=t.alternate;J(We,We.current&1),J(Yt,t),oi===null&&(n===null||ja.current!==null||n.memoizedState!==null)&&(oi=t)}function fm(t){if(t.tag===22){if(J(We,We.current),J(Yt,t),oi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(oi=t)}}else tn()}function tn(){J(We,We.current),J(Yt,Yt.current)}function Di(t){Q(Yt),oi===t&&(oi=null),Q(We)}var We=P(0);function Mo(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||xd(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Du(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:y({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Mu={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=Bt(),c=Qi(o);c.payload=n,r!=null&&(c.callback=r),n=Ji(t,c,o),n!==null&&($t(n,t,o),Lr(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=Bt(),c=Qi(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=Ji(t,c,o),n!==null&&($t(n,t,o),Lr(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=Bt(),o=Qi(r);o.tag=2,n!=null&&(o.callback=n),n=Ji(t,o,r),n!==null&&($t(n,t,r),Lr(n,t,r))}};function hm(t,n,r,o,c,h,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!Cr(r,o)||!Cr(c,h):!0}function pm(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&Mu.enqueueReplaceState(n,n.state,null)}function Vn(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=y({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var Oo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function mm(t){Oo(t)}function gm(t){console.error(t)}function ym(t){Oo(t)}function ko(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function xm(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ou(t,n,r){return r=Qi(r),r.tag=3,r.payload={element:null},r.callback=function(){ko(t,n)},r}function bm(t){return t=Qi(t),t.tag=3,t}function vm(t,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;t.payload=function(){return c(h)},t.callback=function(){xm(n,r,o)}}var x=r.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){xm(n,r,o),typeof c!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var j=o.stack;this.componentDidCatch(o.value,{componentStack:j!==null?j:""})})}function K2(t,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&kr(n,r,c,!0),r=Yt.current,r!==null){switch(r.tag){case 13:return oi===null?td():r.alternate===null&&qe===0&&(qe=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===su?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),nd(t,o,c)),!1;case 22:return r.flags|=65536,o===su?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),nd(t,o,c)),!1}throw Error(s(435,r.tag))}return nd(t,o,c),td(),!1}if(Se)return n=Yt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Wc&&(t=Error(s(422),{cause:o}),Or(Ut(t,r)))):(o!==Wc&&(n=Error(s(423),{cause:o}),Or(Ut(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Ut(o,r),c=Ou(t.stateNode,o,c),cu(t,c),qe!==4&&(qe=2)),!1;var h=Error(s(520),{cause:o});if(h=Ut(h,r),Jr===null?Jr=[h]:Jr.push(h),qe!==4&&(qe=2),n===null)return!0;o=Ut(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=Ou(r.stateNode,o,t),cu(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ln===null||!ln.has(h))))return r.flags|=65536,c&=-c,r.lanes|=c,c=bm(c),vm(c,t,r,o),cu(r,c),!1}r=r.return}while(r!==null);return!1}var wm=Error(s(461)),it=!1;function st(t,n,r,o){n.child=t===null?dm(n,null,r,o):Ra(n,t.child,r,o)}function Sm(t,n,r,o,c){r=r.render;var h=n.ref;if("ref"in o){var x={};for(var j in o)j!=="ref"&&(x[j]=o[j])}else x=o;return $n(n),o=pu(t,n,r,x,h,c),j=mu(),t!==null&&!it?(gu(t,n,c),Mi(t,n,c)):(Se&&j&&Qc(n),n.flags|=1,st(t,n,o,c),n.child)}function jm(t,n,r,o,c){if(t===null){var h=r.type;return typeof h=="function"&&!Zc(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,Am(t,n,h,o,c)):(t=uo(r.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!_u(t,c)){var x=h.memoizedProps;if(r=r.compare,r=r!==null?r:Cr,r(x,o)&&t.ref===n.ref)return Mi(t,n,c)}return n.flags|=1,t=ji(h,o),t.ref=n.ref,t.return=n,n.child=t}function Am(t,n,r,o,c){if(t!==null){var h=t.memoizedProps;if(Cr(h,o)&&t.ref===n.ref)if(it=!1,n.pendingProps=o=h,_u(t,c))(t.flags&131072)!==0&&(it=!0);else return n.lanes=t.lanes,Mi(t,n,c)}return ku(t,n,r,o,c)}function Tm(t,n,r){var o=n.pendingProps,c=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|r:r,t!==null){for(c=n.child=t.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Em(t,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&go(n,h!==null?h.cachePool:null),h!==null?Ap(n,h):du(),fm(n);else return n.lanes=n.childLanes=536870912,Em(t,n,h!==null?h.baseLanes|r:r,r)}else h!==null?(go(n,h.cachePool),Ap(n,h),tn(),n.memoizedState=null):(t!==null&&go(n,null),du(),tn());return st(t,n,c,r),n.child}function Em(t,n,r,o){var c=ru();return c=c===null?null:{parent:Je._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&go(n,null),du(),fm(n),t!==null&&kr(t,n,o,!0),null}function zo(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function ku(t,n,r,o,c){return $n(n),r=pu(t,n,r,o,void 0,c),o=mu(),t!==null&&!it?(gu(t,n,c),Mi(t,n,c)):(Se&&o&&Qc(n),n.flags|=1,st(t,n,r,c),n.child)}function Cm(t,n,r,o,c,h){return $n(n),n.updateQueue=null,r=Ep(n,o,r,c),Tp(t),o=mu(),t!==null&&!it?(gu(t,n,h),Mi(t,n,h)):(Se&&o&&Qc(n),n.flags|=1,st(t,n,r,h),n.child)}function Rm(t,n,r,o,c){if($n(n),n.stateNode===null){var h=xa,x=r.contextType;typeof x=="object"&&x!==null&&(h=ft(x)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Mu,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},ou(n),x=r.contextType,h.context=typeof x=="object"&&x!==null?ft(x):xa,h.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Du(n,r,x,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Mu.enqueueReplaceState(h,h.state,null),_r(n,o,h,c),Vr(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var j=n.memoizedProps,E=Vn(r,j);h.props=E;var L=h.context,F=r.contextType;x=xa,typeof F=="object"&&F!==null&&(x=ft(F));var G=r.getDerivedStateFromProps;F=typeof G=="function"||typeof h.getSnapshotBeforeUpdate=="function",j=n.pendingProps!==j,F||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(j||L!==x)&&pm(n,h,o,x),Xi=!1;var V=n.memoizedState;h.state=V,_r(n,o,h,c),Vr(),L=n.memoizedState,j||V!==L||Xi?(typeof G=="function"&&(Du(n,r,G,o),L=n.memoizedState),(E=Xi||hm(n,r,E,o,V,L,x))?(F||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=L),h.props=o,h.state=L,h.context=x,o=E):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,lu(t,n),x=n.memoizedProps,F=Vn(r,x),h.props=F,G=n.pendingProps,V=h.context,L=r.contextType,E=xa,typeof L=="object"&&L!==null&&(E=ft(L)),j=r.getDerivedStateFromProps,(L=typeof j=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==G||V!==E)&&pm(n,h,o,E),Xi=!1,V=n.memoizedState,h.state=V,_r(n,o,h,c),Vr();var _=n.memoizedState;x!==G||V!==_||Xi||t!==null&&t.dependencies!==null&&po(t.dependencies)?(typeof j=="function"&&(Du(n,r,j,o),_=n.memoizedState),(F=Xi||hm(n,r,F,o,V,_,E)||t!==null&&t.dependencies!==null&&po(t.dependencies))?(L||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,_,E),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,_,E)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&V===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&V===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_),h.props=o,h.state=_,h.context=E,o=F):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&V===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&V===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,zo(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Ra(n,t.child,null,c),n.child=Ra(n,null,r,c)):st(t,n,r,c),n.memoizedState=h.state,t=n.child):t=Mi(t,n,c),t}function Dm(t,n,r,o){return Mr(),n.flags|=256,st(t,n,r,o),n.child}var zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bu(t){return{baseLanes:t,cachePool:gp()}}function $u(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=Gt),t}function Mm(t,n,r){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=t!==null&&t.memoizedState===null?!1:(We.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?en(n):tn(),Se){var j=Fe,E;if(E=j){e:{for(E=j,j=si;E.nodeType!==8;){if(!j){j=null;break e}if(E=ti(E.nextSibling),E===null){j=null;break e}}j=E}j!==null?(n.memoizedState={dehydrated:j,treeContext:Mn!==null?{id:Ai,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},E=Mt(18,null,null,0),E.stateNode=j,E.return=n,n.child=E,xt=n,Fe=null,E=!0):E=!1}E||zn(n)}if(j=n.memoizedState,j!==null&&(j=j.dehydrated,j!==null))return xd(j)?n.lanes=32:n.lanes=536870912,null;Di(n)}return j=o.children,o=o.fallback,c?(tn(),c=n.mode,j=Bo({mode:"hidden",children:j},c),o=Dn(o,c,r,null),j.return=n,o.return=n,j.sibling=o,n.child=j,c=n.child,c.memoizedState=Bu(r),c.childLanes=$u(t,x,r),n.memoizedState=zu,o):(en(n),Nu(n,j))}if(E=t.memoizedState,E!==null&&(j=E.dehydrated,j!==null)){if(h)n.flags&256?(en(n),n.flags&=-257,n=Lu(t,n,r)):n.memoizedState!==null?(tn(),n.child=t.child,n.flags|=128,n=null):(tn(),c=o.fallback,j=n.mode,o=Bo({mode:"visible",children:o.children},j),c=Dn(c,j,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Ra(n,t.child,null,r),o=n.child,o.memoizedState=Bu(r),o.childLanes=$u(t,x,r),n.memoizedState=zu,n=c);else if(en(n),xd(j)){if(x=j.nextSibling&&j.nextSibling.dataset,x)var L=x.dgst;x=L,o=Error(s(419)),o.stack="",o.digest=x,Or({value:o,source:null,stack:null}),n=Lu(t,n,r)}else if(it||kr(t,n,r,!1),x=(r&t.childLanes)!==0,it||x){if(x=Oe,x!==null&&(o=r&-r,o=(o&42)!==0?1:bc(o),o=(o&(x.suspendedLanes|r))!==0?0:o,o!==0&&o!==E.retryLane))throw E.retryLane=o,ya(t,o),$t(x,t,o),wm;j.data==="$?"||td(),n=Lu(t,n,r)}else j.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=E.treeContext,Fe=ti(j.nextSibling),xt=n,Se=!0,kn=null,si=!1,t!==null&&(Ft[qt++]=Ai,Ft[qt++]=Ti,Ft[qt++]=Mn,Ai=t.id,Ti=t.overflow,Mn=n),n=Nu(n,o.children),n.flags|=4096);return n}return c?(tn(),c=o.fallback,j=n.mode,E=t.child,L=E.sibling,o=ji(E,{mode:"hidden",children:o.children}),o.subtreeFlags=E.subtreeFlags&65011712,L!==null?c=ji(L,c):(c=Dn(c,j,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,j=t.child.memoizedState,j===null?j=Bu(r):(E=j.cachePool,E!==null?(L=Je._currentValue,E=E.parent!==L?{parent:L,pool:L}:E):E=gp(),j={baseLanes:j.baseLanes|r,cachePool:E}),c.memoizedState=j,c.childLanes=$u(t,x,r),n.memoizedState=zu,o):(en(n),r=t.child,t=r.sibling,r=ji(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=r,n.memoizedState=null,r)}function Nu(t,n){return n=Bo({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bo(t,n){return t=Mt(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Lu(t,n,r){return Ra(n,t.child,null,r),t=Nu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Om(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),tu(t.return,n,r)}function Vu(t,n,r,o,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=r,h.tailMode=c)}function km(t,n,r){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(st(t,n,o.children,r),o=We.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Om(t,r,n);else if(t.tag===19)Om(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(J(We,o),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&Mo(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Vu(n,!1,c,r,h);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Mo(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}Vu(n,!0,r,null,h);break;case"together":Vu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Mi(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),on|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(kr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=ji(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=ji(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function _u(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&po(t)))}function Z2(t,n,r){switch(n.tag){case 3:je(n,n.stateNode.containerInfo),Ii(n,Je,t.memoizedState.cache),Mr();break;case 27:case 5:jn(n);break;case 4:je(n,n.stateNode.containerInfo);break;case 10:Ii(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(en(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Mm(t,n,r):(en(n),t=Mi(t,n,r),t!==null?t.sibling:null);en(n);break;case 19:var c=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(kr(t,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return km(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),J(We,We.current),o)break;return null;case 22:case 23:return n.lanes=0,Tm(t,n,r);case 24:Ii(n,Je,t.memoizedState.cache)}return Mi(t,n,r)}function zm(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)it=!0;else{if(!_u(t,r)&&(n.flags&128)===0)return it=!1,Z2(t,n,r);it=(t.flags&131072)!==0}else it=!1,Se&&(n.flags&1048576)!==0&&cp(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Zc(o)?(t=Vn(o,t),n.tag=1,n=Rm(null,n,o,t,r)):(n.tag=0,n=ku(null,n,o,t,r));else{if(o!=null){if(c=o.$$typeof,c===Y){n.tag=11,n=Sm(null,n,o,t,r);break e}else if(c===I){n.tag=14,n=jm(null,n,o,t,r);break e}}throw n=Be(o)||o,Error(s(306,n,""))}}return n;case 0:return ku(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=Vn(o,n.pendingProps),Rm(t,n,o,c,r);case 3:e:{if(je(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,lu(t,n),_r(n,o,null,r);var x=n.memoizedState;if(o=x.cache,Ii(n,Je,o),o!==h.cache&&iu(n,[Je],r,!0),Vr(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Dm(t,n,o,r);break e}else if(o!==c){c=Ut(Error(s(424)),n),Or(c),n=Dm(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Fe=ti(t.firstChild),xt=n,Se=!0,kn=null,si=!0,r=dm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Mr(),o===c){n=Mi(t,n,r);break e}st(t,n,o,r)}n=n.child}return n;case 26:return zo(t,n),t===null?(r=Lg(n.type,null,n.pendingProps,null))?n.memoizedState=r:Se||(r=n.type,t=n.pendingProps,o=Zo(se.current).createElement(r),o[dt]=n,o[wt]=t,lt(o,r,t),tt(o),n.stateNode=o):n.memoizedState=Lg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return jn(n),t===null&&Se&&(o=n.stateNode=Bg(n.type,n.pendingProps,se.current),xt=n,si=!0,c=Fe,dn(n.type)?(bd=c,Fe=ti(o.firstChild)):Fe=c),st(t,n,n.pendingProps.children,r),zo(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=o=Fe)&&(o=Sw(o,n.type,n.pendingProps,si),o!==null?(n.stateNode=o,xt=n,Fe=ti(o.firstChild),si=!1,c=!0):c=!1),c||zn(n)),jn(n),c=n.type,h=n.pendingProps,x=t!==null?t.memoizedProps:null,o=h.children,md(c,h)?o=null:x!==null&&md(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=pu(t,n,H2,null,null,r),os._currentValue=c),zo(t,n),st(t,n,o,r),n.child;case 6:return t===null&&Se&&((t=r=Fe)&&(r=jw(r,n.pendingProps,si),r!==null?(n.stateNode=r,xt=n,Fe=null,t=!0):t=!1),t||zn(n)),null;case 13:return Mm(t,n,r);case 4:return je(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ra(n,null,o,r):st(t,n,o,r),n.child;case 11:return Sm(t,n,n.type,n.pendingProps,r);case 7:return st(t,n,n.pendingProps,r),n.child;case 8:return st(t,n,n.pendingProps.children,r),n.child;case 12:return st(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Ii(n,n.type,o.value),st(t,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,$n(n),c=ft(c),o=o(c),n.flags|=1,st(t,n,o,r),n.child;case 14:return jm(t,n,n.type,n.pendingProps,r);case 15:return Am(t,n,n.type,n.pendingProps,r);case 19:return km(t,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},t===null?(r=Bo(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=ji(t.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Tm(t,n,r);case 24:return $n(n),o=ft(Je),t===null?(c=ru(),c===null&&(c=Oe,h=nu(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=r),c=h),n.memoizedState={parent:o,cache:c},ou(n),Ii(n,Je,c)):((t.lanes&r)!==0&&(lu(t,n),_r(n,null,null,r),Vr()),c=t.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ii(n,Je,o)):(o=h.cache,Ii(n,Je,o),o!==c.cache&&iu(n,[Je],r,!0))),st(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Oi(t){t.flags|=4}function Bm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pg(n)){if(n=Yt.current,n!==null&&((be&4194048)===be?oi!==null:(be&62914560)!==be&&(be&536870912)===0||n!==oi))throw Nr=su,yp;t.flags|=8192}}function $o(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?fh():536870912,t.lanes|=n,ka|=n)}function Gr(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Le(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function I2(t,n,r){var o=n.pendingProps;switch(Jc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Le(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ci(Je),ut(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dr(n)?Oi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fp())),Le(n),null;case 26:return r=n.memoizedState,t===null?(Oi(n),r!==null?(Le(n),Bm(n,r)):(Le(n),n.flags&=-16777217)):r?r!==t.memoizedState?(Oi(n),Le(n),Bm(n,r)):(Le(n),n.flags&=-16777217):(t.memoizedProps!==o&&Oi(n),Le(n),n.flags&=-16777217),null;case 27:vi(n),r=se.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Oi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Le(n),null}t=ne.current,Dr(n)?up(n):(t=Bg(c,o,r),n.stateNode=t,Oi(n))}return Le(n),null;case 5:if(vi(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Oi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Le(n),null}if(t=ne.current,Dr(n))up(n);else{switch(c=Zo(se.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}t[dt]=n,t[wt]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(lt(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Oi(n)}}return Le(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Oi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,Dr(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,c=xt,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[dt]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Cg(t.nodeValue,r)),t||zn(n)}else t=Zo(t).createTextNode(o),t[dt]=n,n.stateNode=t}return Le(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Dr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[dt]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),c=!1}else c=fp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Di(n),n):(Di(n),null)}if(Di(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),$o(n,n.updateQueue),Le(n),null;case 4:return ut(),t===null&&ud(n.stateNode.containerInfo),Le(n),null;case 10:return Ci(n.type),Le(n),null;case 19:if(Q(We),c=n.memoizedState,c===null)return Le(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)Gr(c,!1);else{if(qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Mo(t),h!==null){for(n.flags|=128,Gr(c,!1),t=h.updateQueue,n.updateQueue=t,$o(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)lp(r,t),r=r.sibling;return J(We,We.current&1|2),n.child}t=t.sibling}c.tail!==null&&ri()>Vo&&(n.flags|=128,o=!0,Gr(c,!1),n.lanes=4194304)}else{if(!o)if(t=Mo(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,$o(n,t),Gr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Se)return Le(n),null}else 2*ri()-c.renderingStartTime>Vo&&r!==536870912&&(n.flags|=128,o=!0,Gr(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(t=c.last,t!==null?t.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ri(),n.sibling=null,t=We.current,J(We,o?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return Di(n),fu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),r=n.updateQueue,r!==null&&$o(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&Q(Nn),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ci(Je),Le(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function X2(t,n){switch(Jc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ci(Je),ut(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return vi(n),null;case 13:if(Di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(We),null;case 4:return ut(),null;case 10:return Ci(n.type),null;case 22:case 23:return Di(n),fu(),t!==null&&Q(Nn),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ci(Je),null;case 25:return null;default:return null}}function $m(t,n){switch(Jc(n),n.tag){case 3:Ci(Je),ut();break;case 26:case 27:case 5:vi(n);break;case 4:ut();break;case 13:Di(n);break;case 19:Q(We);break;case 10:Ci(n.type);break;case 22:case 23:Di(n),fu(),t!==null&&Q(Nn);break;case 24:Ci(Je)}}function Kr(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){o=void 0;var h=r.create,x=r.inst;o=h(),x.destroy=o}r=r.next}while(r!==c)}}catch(j){Me(n,n.return,j)}}function nn(t,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){var x=o.inst,j=x.destroy;if(j!==void 0){x.destroy=void 0,c=n;var E=r,L=j;try{L()}catch(F){Me(c,E,F)}}}o=o.next}while(o!==h)}}catch(F){Me(n,n.return,F)}}function Nm(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{jp(n,r)}catch(o){Me(t,t.return,o)}}}function Lm(t,n,r){r.props=Vn(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Me(t,n,o)}}function Zr(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(c){Me(t,n,c)}}function li(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Me(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Me(t,n,c)}else r.current=null}function Vm(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Me(t,t.return,c)}}function Hu(t,n,r){try{var o=t.stateNode;yw(o,t.type,r,n),o[wt]=n}catch(c){Me(t,t.return,c)}}function _m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&dn(t.type)||t.tag===4}function Uu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&dn(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pu(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ko));else if(o!==4&&(o===27&&dn(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Pu(t,n,r),t=t.sibling;t!==null;)Pu(t,n,r),t=t.sibling}function No(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&dn(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(No(t,n,r),t=t.sibling;t!==null;)No(t,n,r),t=t.sibling}function Hm(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);lt(n,o,r),n[dt]=t,n[wt]=r}catch(h){Me(t,t.return,h)}}var ki=!1,Ke=!1,Fu=!1,Um=typeof WeakSet=="function"?WeakSet:Set,nt=null;function Q2(t,n){if(t=t.containerInfo,hd=el,t=Jh(t),Uc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var x=0,j=-1,E=-1,L=0,F=0,G=t,V=null;t:for(;;){for(var _;G!==r||c!==0&&G.nodeType!==3||(j=x+c),G!==h||o!==0&&G.nodeType!==3||(E=x+o),G.nodeType===3&&(x+=G.nodeValue.length),(_=G.firstChild)!==null;)V=G,G=_;for(;;){if(G===t)break t;if(V===r&&++L===c&&(j=x),V===h&&++F===o&&(E=x),(_=G.nextSibling)!==null)break;G=V,V=G.parentNode}G=_}r=j===-1||E===-1?null:{start:j,end:E}}else r=null}r=r||{start:0,end:0}}else r=null;for(pd={focusedElem:t,selectionRange:r},el=!1,nt=n;nt!==null;)if(n=nt,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,nt=t;else for(;nt!==null;){switch(n=nt,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,c=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var le=Vn(r.type,c,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(le,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(re){Me(r,r.return,re)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)yd(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,nt=t;break}nt=n.return}}function Pm(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:an(t,r),o&4&&Kr(5,r);break;case 1:if(an(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(x){Me(r,r.return,x)}else{var c=Vn(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Me(r,r.return,x)}}o&64&&Nm(r),o&512&&Zr(r,r.return);break;case 3:if(an(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{jp(t,n)}catch(x){Me(r,r.return,x)}}break;case 27:n===null&&o&4&&Hm(r);case 26:case 5:an(t,r),n===null&&o&4&&Vm(r),o&512&&Zr(r,r.return);break;case 12:an(t,r);break;case 13:an(t,r),o&4&&Ym(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=sw.bind(null,r),Aw(t,r))));break;case 22:if(o=r.memoizedState!==null||ki,!o){n=n!==null&&n.memoizedState!==null||Ke,c=ki;var h=Ke;ki=o,(Ke=n)&&!h?rn(t,r,(r.subtreeFlags&8772)!==0):an(t,r),ki=c,Ke=h}break;case 30:break;default:an(t,r)}}function Fm(t){var n=t.alternate;n!==null&&(t.alternate=null,Fm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Sc(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,At=!1;function zi(t,n,r){for(r=r.child;r!==null;)qm(t,n,r),r=r.sibling}function qm(t,n,r){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(mr,r)}catch{}switch(r.tag){case 26:Ke||li(r,n),zi(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ke||li(r,n);var o=$e,c=At;dn(r.type)&&($e=r.stateNode,At=!1),zi(t,n,r),ns(r.stateNode),$e=o,At=c;break;case 5:Ke||li(r,n);case 6:if(o=$e,c=At,$e=null,zi(t,n,r),$e=o,At=c,$e!==null)if(At)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(r.stateNode)}catch(h){Me(r,n,h)}else try{$e.removeChild(r.stateNode)}catch(h){Me(r,n,h)}break;case 18:$e!==null&&(At?(t=$e,kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),ds(t)):kg($e,r.stateNode));break;case 4:o=$e,c=At,$e=r.stateNode.containerInfo,At=!0,zi(t,n,r),$e=o,At=c;break;case 0:case 11:case 14:case 15:Ke||nn(2,r,n),Ke||nn(4,r,n),zi(t,n,r);break;case 1:Ke||(li(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Lm(r,n,o)),zi(t,n,r);break;case 21:zi(t,n,r);break;case 22:Ke=(o=Ke)||r.memoizedState!==null,zi(t,n,r),Ke=o;break;default:zi(t,n,r)}}function Ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ds(t)}catch(r){Me(n,n.return,r)}}function J2(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Um),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Um),n;default:throw Error(s(435,t.tag))}}function qu(t,n){var r=J2(t);n.forEach(function(o){var c=ow.bind(null,t,o);r.has(o)||(r.add(o),o.then(c,c))})}function Ot(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],h=t,x=n,j=x;e:for(;j!==null;){switch(j.tag){case 27:if(dn(j.type)){$e=j.stateNode,At=!1;break e}break;case 5:$e=j.stateNode,At=!1;break e;case 3:case 4:$e=j.stateNode.containerInfo,At=!0;break e}j=j.return}if($e===null)throw Error(s(160));qm(h,x,c),$e=null,At=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Gm(n,t),n=n.sibling}var ei=null;function Gm(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ot(n,t),kt(t),o&4&&(nn(3,t,t.return),Kr(3,t),nn(5,t,t.return));break;case 1:Ot(n,t),kt(t),o&512&&(Ke||r===null||li(r,r.return)),o&64&&ki&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=ei;if(Ot(n,t),kt(t),o&512&&(Ke||r===null||li(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[xr]||h[dt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),lt(h,o,r),h[dt]=t,tt(h),o=h;break e;case"link":var x=Hg("link","href",c).get(o+(r.href||""));if(x){for(var j=0;j<x.length;j++)if(h=x[j],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){x.splice(j,1);break t}}h=c.createElement(o),lt(h,o,r),c.head.appendChild(h);break;case"meta":if(x=Hg("meta","content",c).get(o+(r.content||""))){for(j=0;j<x.length;j++)if(h=x[j],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){x.splice(j,1);break t}}h=c.createElement(o),lt(h,o,r),c.head.appendChild(h);break;default:throw Error(s(468,o))}h[dt]=t,tt(h),o=h}t.stateNode=o}else Ug(c,t.type,t.stateNode);else t.stateNode=_g(c,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?Ug(c,t.type,t.stateNode):_g(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Hu(t,t.memoizedProps,r.memoizedProps)}break;case 27:Ot(n,t),kt(t),o&512&&(Ke||r===null||li(r,r.return)),r!==null&&o&4&&Hu(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Ot(n,t),kt(t),o&512&&(Ke||r===null||li(r,r.return)),t.flags&32){c=t.stateNode;try{ua(c,"")}catch(_){Me(t,t.return,_)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Hu(t,c,r!==null?r.memoizedProps:c)),o&1024&&(Fu=!0);break;case 6:if(Ot(n,t),kt(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(_){Me(t,t.return,_)}}break;case 3:if(Qo=null,c=ei,ei=Io(n.containerInfo),Ot(n,t),ei=c,kt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(_){Me(t,t.return,_)}Fu&&(Fu=!1,Km(t));break;case 4:o=ei,ei=Io(t.stateNode.containerInfo),Ot(n,t),kt(t),ei=o;break;case 12:Ot(n,t),kt(t);break;case 13:Ot(n,t),kt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Xu=ri()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,qu(t,o)));break;case 22:c=t.memoizedState!==null;var E=r!==null&&r.memoizedState!==null,L=ki,F=Ke;if(ki=L||c,Ke=F||E,Ot(n,t),Ke=F,ki=L,kt(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||E||ki||Ke||_n(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){E=r=n;try{if(h=E.stateNode,c)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{j=E.stateNode;var G=E.memoizedProps.style,V=G!=null&&G.hasOwnProperty("display")?G.display:null;j.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(_){Me(E,E.return,_)}}}else if(n.tag===6){if(r===null){E=n;try{E.stateNode.nodeValue=c?"":E.memoizedProps}catch(_){Me(E,E.return,_)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,qu(t,r))));break;case 19:Ot(n,t),kt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,qu(t,o)));break;case 30:break;case 21:break;default:Ot(n,t),kt(t)}}function kt(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(_m(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var c=r.stateNode,h=Uu(t);No(t,h,c);break;case 5:var x=r.stateNode;r.flags&32&&(ua(x,""),r.flags&=-33);var j=Uu(t);No(t,j,x);break;case 3:case 4:var E=r.stateNode.containerInfo,L=Uu(t);Pu(t,L,E);break;default:throw Error(s(161))}}catch(F){Me(t,t.return,F)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Km(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function an(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pm(t,n.alternate,n),n=n.sibling}function _n(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:nn(4,n,n.return),_n(n);break;case 1:li(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Lm(n,n.return,r),_n(n);break;case 27:ns(n.stateNode);case 26:case 5:li(n,n.return),_n(n);break;case 22:n.memoizedState===null&&_n(n);break;case 30:_n(n);break;default:_n(n)}t=t.sibling}}function rn(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:rn(c,h,r),Kr(4,h);break;case 1:if(rn(c,h,r),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(L){Me(o,o.return,L)}if(o=h,c=o.updateQueue,c!==null){var j=o.stateNode;try{var E=c.shared.hiddenCallbacks;if(E!==null)for(c.shared.hiddenCallbacks=null,c=0;c<E.length;c++)Sp(E[c],j)}catch(L){Me(o,o.return,L)}}r&&x&64&&Nm(h),Zr(h,h.return);break;case 27:Hm(h);case 26:case 5:rn(c,h,r),r&&o===null&&x&4&&Vm(h),Zr(h,h.return);break;case 12:rn(c,h,r);break;case 13:rn(c,h,r),r&&x&4&&Ym(c,h);break;case 22:h.memoizedState===null&&rn(c,h,r),Zr(h,h.return);break;case 30:break;default:rn(c,h,r)}n=n.sibling}}function Yu(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&zr(r))}function Gu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zr(t))}function ci(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zm(t,n,r,o),n=n.sibling}function Zm(t,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ci(t,n,r,o),c&2048&&Kr(9,n);break;case 1:ci(t,n,r,o);break;case 3:ci(t,n,r,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zr(t)));break;case 12:if(c&2048){ci(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,x=h.id,j=h.onPostCommit;typeof j=="function"&&j(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(E){Me(n,n.return,E)}}else ci(t,n,r,o);break;case 13:ci(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?ci(t,n,r,o):Ir(t,n):h._visibility&2?ci(t,n,r,o):(h._visibility|=2,Da(t,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&Yu(x,n);break;case 24:ci(t,n,r,o),c&2048&&Gu(n.alternate,n);break;default:ci(t,n,r,o)}}function Da(t,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,x=n,j=r,E=o,L=x.flags;switch(x.tag){case 0:case 11:case 15:Da(h,x,j,E,c),Kr(8,x);break;case 23:break;case 22:var F=x.stateNode;x.memoizedState!==null?F._visibility&2?Da(h,x,j,E,c):Ir(h,x):(F._visibility|=2,Da(h,x,j,E,c)),c&&L&2048&&Yu(x.alternate,x);break;case 24:Da(h,x,j,E,c),c&&L&2048&&Gu(x.alternate,x);break;default:Da(h,x,j,E,c)}n=n.sibling}}function Ir(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,c=o.flags;switch(o.tag){case 22:Ir(r,o),c&2048&&Yu(o.alternate,o);break;case 24:Ir(r,o),c&2048&&Gu(o.alternate,o);break;default:Ir(r,o)}n=n.sibling}}var Xr=8192;function Ma(t){if(t.subtreeFlags&Xr)for(t=t.child;t!==null;)Im(t),t=t.sibling}function Im(t){switch(t.tag){case 26:Ma(t),t.flags&Xr&&t.memoizedState!==null&&Lw(ei,t.memoizedState,t.memoizedProps);break;case 5:Ma(t);break;case 3:case 4:var n=ei;ei=Io(t.stateNode.containerInfo),Ma(t),ei=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Xr,Xr=16777216,Ma(t),Xr=n):Ma(t));break;default:Ma(t)}}function Xm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Qr(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];nt=o,Jm(o,t)}Xm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qm(t),t=t.sibling}function Qm(t){switch(t.tag){case 0:case 11:case 15:Qr(t),t.flags&2048&&nn(9,t,t.return);break;case 3:Qr(t);break;case 12:Qr(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Lo(t)):Qr(t);break;default:Qr(t)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];nt=o,Jm(o,t)}Xm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:nn(8,n,n.return),Lo(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Lo(n));break;default:Lo(n)}t=t.sibling}}function Jm(t,n){for(;nt!==null;){var r=nt;switch(r.tag){case 0:case 11:case 15:nn(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:zr(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,nt=o;else e:for(r=t;nt!==null;){o=nt;var c=o.sibling,h=o.return;if(Fm(o),o===r){nt=null;break e}if(c!==null){c.return=h,nt=c;break e}nt=h}}}var W2={getCacheForType:function(t){var n=ft(Je),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},ew=typeof WeakMap=="function"?WeakMap:Map,Te=0,Oe=null,ye=null,be=0,Ee=0,zt=null,sn=!1,Oa=!1,Ku=!1,Bi=0,qe=0,on=0,Hn=0,Zu=0,Gt=0,ka=0,Jr=null,Tt=null,Iu=!1,Xu=0,Vo=1/0,_o=null,ln=null,ot=0,cn=null,za=null,Ba=0,Qu=0,Ju=null,Wm=null,Wr=0,Wu=null;function Bt(){if((Te&2)!==0&&be!==0)return be&-be;if(U.T!==null){var t=wa;return t!==0?t:sd()}return mh()}function eg(){Gt===0&&(Gt=(be&536870912)===0||Se?dh():536870912);var t=Yt.current;return t!==null&&(t.flags|=32),Gt}function $t(t,n,r){(t===Oe&&(Ee===2||Ee===9)||t.cancelPendingCommit!==null)&&($a(t,0),un(t,be,Gt,!1)),yr(t,r),((Te&2)===0||t!==Oe)&&(t===Oe&&((Te&2)===0&&(Hn|=r),qe===4&&un(t,be,Gt,!1)),ui(t))}function tg(t,n,r){if((Te&6)!==0)throw Error(s(327));var o=!r&&(n&124)===0&&(n&t.expiredLanes)===0||gr(t,n),c=o?nw(t,n):id(t,n,!0),h=o;do{if(c===0){Oa&&!o&&un(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!tw(r)){c=id(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var j=t;c=Jr;var E=j.current.memoizedState.isDehydrated;if(E&&($a(j,x).flags|=256),x=id(j,x,!1),x!==2){if(Ku&&!E){j.errorRecoveryDisabledLanes|=h,Hn|=h,c=4;break e}h=Tt,Tt=c,h!==null&&(Tt===null?Tt=h:Tt.push.apply(Tt,h))}c=x}if(h=!1,c!==2)continue}}if(c===1){$a(t,0),un(t,n,0,!0);break}e:{switch(o=t,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:un(o,n,Gt,!sn);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Xu+300-ri(),10<c)){if(un(o,n,Gt,!sn),Is(o,0,!0)!==0)break e;o.timeoutHandle=Mg(ig.bind(null,o,r,Tt,_o,Iu,n,Gt,Hn,ka,sn,h,2,-0,0),c);break e}ig(o,r,Tt,_o,Iu,n,Gt,Hn,ka,sn,h,0,-0,0)}}break}while(!0);ui(t)}function ig(t,n,r,o,c,h,x,j,E,L,F,G,V,_){if(t.timeoutHandle=-1,G=n.subtreeFlags,(G&8192||(G&16785408)===16785408)&&(ss={stylesheets:null,count:0,unsuspend:Nw},Im(n),G=Vw(),G!==null)){t.cancelPendingCommit=G(cg.bind(null,t,n,h,r,o,c,x,j,E,F,1,V,_)),un(t,h,x,!L);return}cg(t,n,h,r,o,c,x,j,E)}function tw(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],h=c.getSnapshot;c=c.value;try{if(!Dt(h(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(t,n,r,o){n&=~Zu,n&=~Hn,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var h=31-Rt(c),x=1<<h;o[h]=-1,c&=~x}r!==0&&hh(t,r,n)}function Ho(){return(Te&6)===0?(es(0),!1):!0}function ed(){if(ye!==null){if(Ee===0)var t=ye.return;else t=ye,Ei=Bn=null,yu(t),Ca=null,qr=0,t=ye;for(;t!==null;)$m(t.alternate,t),t=t.return;ye=null}}function $a(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,bw(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ed(),Oe=t,ye=r=ji(t.current,null),be=n,Ee=0,zt=null,sn=!1,Oa=gr(t,n),Ku=!1,ka=Gt=Zu=Hn=on=qe=0,Tt=Jr=null,Iu=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Rt(o),h=1<<c;n|=t[c],o&=~h}return Bi=n,oo(),r}function ng(t,n){me=null,U.H=Co,n===$r||n===yo?(n=vp(),Ee=3):n===yp?(n=vp(),Ee=4):Ee=n===wm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,zt=n,ye===null&&(qe=1,ko(t,Ut(n,t.current)))}function ag(){var t=U.H;return U.H=Co,t===null?Co:t}function rg(){var t=U.A;return U.A=W2,t}function td(){qe=4,sn||(be&4194048)!==be&&Yt.current!==null||(Oa=!0),(on&134217727)===0&&(Hn&134217727)===0||Oe===null||un(Oe,be,Gt,!1)}function id(t,n,r){var o=Te;Te|=2;var c=ag(),h=rg();(Oe!==t||be!==n)&&(_o=null,$a(t,n)),n=!1;var x=qe;e:do try{if(Ee!==0&&ye!==null){var j=ye,E=zt;switch(Ee){case 8:ed(),x=6;break e;case 3:case 2:case 9:case 6:Yt.current===null&&(n=!0);var L=Ee;if(Ee=0,zt=null,Na(t,j,E,L),r&&Oa){x=0;break e}break;default:L=Ee,Ee=0,zt=null,Na(t,j,E,L)}}iw(),x=qe;break}catch(F){ng(t,F)}while(!0);return n&&t.shellSuspendCounter++,Ei=Bn=null,Te=o,U.H=c,U.A=h,ye===null&&(Oe=null,be=0,oo()),x}function iw(){for(;ye!==null;)sg(ye)}function nw(t,n){var r=Te;Te|=2;var o=ag(),c=rg();Oe!==t||be!==n?(_o=null,Vo=ri()+500,$a(t,n)):Oa=gr(t,n);e:do try{if(Ee!==0&&ye!==null){n=ye;var h=zt;t:switch(Ee){case 1:Ee=0,zt=null,Na(t,n,h,1);break;case 2:case 9:if(xp(h)){Ee=0,zt=null,og(n);break}n=function(){Ee!==2&&Ee!==9||Oe!==t||(Ee=7),ui(t)},h.then(n,n);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:xp(h)?(Ee=0,zt=null,og(n)):(Ee=0,zt=null,Na(t,n,h,7));break;case 5:var x=null;switch(ye.tag){case 26:x=ye.memoizedState;case 5:case 27:var j=ye;if(!x||Pg(x)){Ee=0,zt=null;var E=j.sibling;if(E!==null)ye=E;else{var L=j.return;L!==null?(ye=L,Uo(L)):ye=null}break t}}Ee=0,zt=null,Na(t,n,h,5);break;case 6:Ee=0,zt=null,Na(t,n,h,6);break;case 8:ed(),qe=6;break e;default:throw Error(s(462))}}aw();break}catch(F){ng(t,F)}while(!0);return Ei=Bn=null,U.H=o,U.A=c,Te=r,ye!==null?0:(Oe=null,be=0,oo(),qe)}function aw(){for(;ye!==null&&!Ev();)sg(ye)}function sg(t){var n=zm(t.alternate,t,Bi);t.memoizedProps=t.pendingProps,n===null?Uo(t):ye=n}function og(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Cm(r,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Cm(r,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:yu(n);default:$m(r,n),n=ye=lp(n,Bi),n=zm(r,n,Bi)}t.memoizedProps=t.pendingProps,n===null?Uo(t):ye=n}function Na(t,n,r,o){Ei=Bn=null,yu(n),Ca=null,qr=0;var c=n.return;try{if(K2(t,c,n,r,be)){qe=1,ko(t,Ut(r,t.current)),ye=null;return}}catch(h){if(c!==null)throw ye=c,h;qe=1,ko(t,Ut(r,t.current)),ye=null;return}n.flags&32768?(Se||o===1?t=!0:Oa||(be&536870912)!==0?t=!1:(sn=t=!0,(o===2||o===9||o===3||o===6)&&(o=Yt.current,o!==null&&o.tag===13&&(o.flags|=16384))),lg(n,t)):Uo(n)}function Uo(t){var n=t;do{if((n.flags&32768)!==0){lg(n,sn);return}t=n.return;var r=I2(n.alternate,n,Bi);if(r!==null){ye=r;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);qe===0&&(qe=5)}function lg(t,n){do{var r=X2(t.alternate,t);if(r!==null){r.flags&=32767,ye=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=r}while(t!==null);qe=6,ye=null}function cg(t,n,r,o,c,h,x,j,E){t.cancelPendingCommit=null;do Po();while(ot!==0);if((Te&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Gc,Nv(t,r,h,x,j,E),t===Oe&&(ye=Oe=null,be=0),za=n,cn=t,Ba=r,Qu=h,Ju=c,Wm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lw(Gs,function(){return pg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,c=Z.p,Z.p=2,x=Te,Te|=4;try{Q2(t,n,r)}finally{Te=x,Z.p=c,U.T=o}}ot=1,ug(),dg(),fg()}}function ug(){if(ot===1){ot=0;var t=cn,n=za,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null;var o=Z.p;Z.p=2;var c=Te;Te|=4;try{Gm(n,t);var h=pd,x=Jh(t.containerInfo),j=h.focusedElem,E=h.selectionRange;if(x!==j&&j&&j.ownerDocument&&Qh(j.ownerDocument.documentElement,j)){if(E!==null&&Uc(j)){var L=E.start,F=E.end;if(F===void 0&&(F=L),"selectionStart"in j)j.selectionStart=L,j.selectionEnd=Math.min(F,j.value.length);else{var G=j.ownerDocument||document,V=G&&G.defaultView||window;if(V.getSelection){var _=V.getSelection(),le=j.textContent.length,re=Math.min(E.start,le),De=E.end===void 0?re:Math.min(E.end,le);!_.extend&&re>De&&(x=De,De=re,re=x);var z=Xh(j,re),D=Xh(j,De);if(z&&D&&(_.rangeCount!==1||_.anchorNode!==z.node||_.anchorOffset!==z.offset||_.focusNode!==D.node||_.focusOffset!==D.offset)){var $=G.createRange();$.setStart(z.node,z.offset),_.removeAllRanges(),re>De?(_.addRange($),_.extend(D.node,D.offset)):($.setEnd(D.node,D.offset),_.addRange($))}}}}for(G=[],_=j;_=_.parentNode;)_.nodeType===1&&G.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<G.length;j++){var q=G[j];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}el=!!hd,pd=hd=null}finally{Te=c,Z.p=o,U.T=r}}t.current=n,ot=2}}function dg(){if(ot===2){ot=0;var t=cn,n=za,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=U.T,U.T=null;var o=Z.p;Z.p=2;var c=Te;Te|=4;try{Pm(t,n.alternate,n)}finally{Te=c,Z.p=o,U.T=r}}ot=3}}function fg(){if(ot===4||ot===3){ot=0,Cv();var t=cn,n=za,r=Ba,o=Wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ot=5:(ot=0,za=cn=null,hg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ln=null),vc(r),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(mr,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,c=Z.p,Z.p=2,U.T=null;try{for(var h=t.onRecoverableError,x=0;x<o.length;x++){var j=o[x];h(j.value,{componentStack:j.stack})}}finally{U.T=n,Z.p=c}}(Ba&3)!==0&&Po(),ui(t),c=t.pendingLanes,(r&4194090)!==0&&(c&42)!==0?t===Wu?Wr++:(Wr=0,Wu=t):Wr=0,es(0)}}function hg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zr(n)))}function Po(t){return ug(),dg(),fg(),pg()}function pg(){if(ot!==5)return!1;var t=cn,n=Qu;Qu=0;var r=vc(Ba),o=U.T,c=Z.p;try{Z.p=32>r?32:r,U.T=null,r=Ju,Ju=null;var h=cn,x=Ba;if(ot=0,za=cn=null,Ba=0,(Te&6)!==0)throw Error(s(331));var j=Te;if(Te|=4,Qm(h.current),Zm(h,h.current,x,r),Te=j,es(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(mr,h)}catch{}return!0}finally{Z.p=c,U.T=o,hg(t,n)}}function mg(t,n,r){n=Ut(r,n),n=Ou(t.stateNode,n,2),t=Ji(t,n,2),t!==null&&(yr(t,2),ui(t))}function Me(t,n,r){if(t.tag===3)mg(t,t,r);else for(;n!==null;){if(n.tag===3){mg(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ln===null||!ln.has(o))){t=Ut(r,t),r=bm(2),o=Ji(n,r,2),o!==null&&(vm(r,o,n,t),yr(o,2),ui(o));break}}n=n.return}}function nd(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new ew;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(Ku=!0,c.add(r),t=rw.bind(null,t,n,r),n.then(t,t))}function rw(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Oe===t&&(be&r)===r&&(qe===4||qe===3&&(be&62914560)===be&&300>ri()-Xu?(Te&2)===0&&$a(t,0):Zu|=r,ka===be&&(ka=0)),ui(t)}function gg(t,n){n===0&&(n=fh()),t=ya(t,n),t!==null&&(yr(t,n),ui(t))}function sw(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),gg(t,r)}function ow(t,n){var r=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),gg(t,r)}function lw(t,n){return gc(t,n)}var Fo=null,La=null,ad=!1,qo=!1,rd=!1,Un=0;function ui(t){t!==La&&t.next===null&&(La===null?Fo=La=t:La=La.next=t),qo=!0,ad||(ad=!0,uw())}function es(t,n){if(!rd&&qo){rd=!0;do for(var r=!1,o=Fo;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var x=o.suspendedLanes,j=o.pingedLanes;h=(1<<31-Rt(42|t)+1)-1,h&=c&~(x&~j),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,vg(o,h))}else h=be,h=Is(o,o===Oe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||gr(o,h)||(r=!0,vg(o,h));o=o.next}while(r);rd=!1}}function cw(){yg()}function yg(){qo=ad=!1;var t=0;Un!==0&&(xw()&&(t=Un),Un=0);for(var n=ri(),r=null,o=Fo;o!==null;){var c=o.next,h=xg(o,n);h===0?(o.next=null,r===null?Fo=c:r.next=c,c===null&&(La=r)):(r=o,(t!==0||(h&3)!==0)&&(qo=!0)),o=c}es(t)}function xg(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var x=31-Rt(h),j=1<<x,E=c[x];E===-1?((j&r)===0||(j&o)!==0)&&(c[x]=$v(j,n)):E<=n&&(t.expiredLanes|=j),h&=~j}if(n=Oe,r=be,r=Is(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Ee===2||Ee===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&yc(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||gr(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&yc(o),vc(r)){case 2:case 8:r=ch;break;case 32:r=Gs;break;case 268435456:r=uh;break;default:r=Gs}return o=bg.bind(null,t),r=gc(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&yc(o),t.callbackPriority=2,t.callbackNode=null,2}function bg(t,n){if(ot!==0&&ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Po()&&t.callbackNode!==r)return null;var o=be;return o=Is(t,t===Oe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(tg(t,o,n),xg(t,ri()),t.callbackNode!=null&&t.callbackNode===r?bg.bind(null,t):null)}function vg(t,n){if(Po())return null;tg(t,n,!0)}function uw(){vw(function(){(Te&6)!==0?gc(lh,cw):yg()})}function sd(){return Un===0&&(Un=dh()),Un}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:eo(""+t)}function Sg(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function dw(t,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var h=wg((c[wt]||null).action),x=o.submitter;x&&(n=(n=x[wt]||null)?wg(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var j=new ao("action","action",null,o,c);t.push({event:j,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Un!==0){var E=x?Sg(c,x):new FormData(c);Eu(r,{pending:!0,data:E,method:c.method,action:h},null,E)}}else typeof h=="function"&&(j.preventDefault(),E=x?Sg(c,x):new FormData(c),Eu(r,{pending:!0,data:E,method:c.method,action:h},h,E))},currentTarget:c}]})}}for(var od=0;od<Yc.length;od++){var ld=Yc[od],fw=ld.toLowerCase(),hw=ld[0].toUpperCase()+ld.slice(1);Wt(fw,"on"+hw)}Wt(tp,"onAnimationEnd"),Wt(ip,"onAnimationIteration"),Wt(np,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(M2,"onTransitionRun"),Wt(O2,"onTransitionStart"),Wt(k2,"onTransitionCancel"),Wt(ap,"onTransitionEnd"),oa("onMouseEnter",["mouseout","mouseover"]),oa("onMouseLeave",["mouseout","mouseover"]),oa("onPointerEnter",["pointerout","pointerover"]),oa("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ts));function jg(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],c=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var j=o[x],E=j.instance,L=j.currentTarget;if(j=j.listener,E!==h&&c.isPropagationStopped())break e;h=j,c.currentTarget=L;try{h(c)}catch(F){Oo(F)}c.currentTarget=null,h=E}else for(x=0;x<o.length;x++){if(j=o[x],E=j.instance,L=j.currentTarget,j=j.listener,E!==h&&c.isPropagationStopped())break e;h=j,c.currentTarget=L;try{h(c)}catch(F){Oo(F)}c.currentTarget=null,h=E}}}}function xe(t,n){var r=n[wc];r===void 0&&(r=n[wc]=new Set);var o=t+"__bubble";r.has(o)||(Ag(n,t,2,!1),r.add(o))}function cd(t,n,r){var o=0;n&&(o|=4),Ag(r,t,o,n)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function ud(t){if(!t[Yo]){t[Yo]=!0,yh.forEach(function(r){r!=="selectionchange"&&(pw.has(r)||cd(r,!1,t),cd(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Yo]||(n[Yo]=!0,cd("selectionchange",!1,n))}}function Ag(t,n,r,o){switch(Zg(n)){case 2:var c=Uw;break;case 8:c=Pw;break;default:c=Ad}r=c.bind(null,n,r,t),c=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function dd(t,n,r,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var j=o.stateNode.containerInfo;if(j===c)break;if(x===4)for(x=o.return;x!==null;){var E=x.tag;if((E===3||E===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;j!==null;){if(x=aa(j),x===null)return;if(E=x.tag,E===5||E===6||E===26||E===27){o=h=x;continue e}j=j.parentNode}}o=o.return}Oh(function(){var L=h,F=Mc(r),G=[];e:{var V=rp.get(t);if(V!==void 0){var _=ao,le=t;switch(t){case"keypress":if(io(r)===0)break e;case"keydown":case"keyup":_=l2;break;case"focusin":le="focus",_=Nc;break;case"focusout":le="blur",_=Nc;break;case"beforeblur":case"afterblur":_=Nc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=d2;break;case tp:case ip:case np:_=Wv;break;case ap:_=h2;break;case"scroll":case"scrollend":_=Zv;break;case"wheel":_=m2;break;case"copy":case"cut":case"paste":_=t2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Nh;break;case"toggle":case"beforetoggle":_=y2}var re=(n&4)!==0,De=!re&&(t==="scroll"||t==="scrollend"),z=re?V!==null?V+"Capture":null:V;re=[];for(var D=L,$;D!==null;){var q=D;if($=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||$===null||z===null||(q=vr(D,z),q!=null&&re.push(is(D,q,$))),De)break;D=D.return}0<re.length&&(V=new _(V,le,null,r,F),G.push({event:V,listeners:re}))}}if((n&7)===0){e:{if(V=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",V&&r!==Dc&&(le=r.relatedTarget||r.fromElement)&&(aa(le)||le[na]))break e;if((_||V)&&(V=F.window===F?F:(V=F.ownerDocument)?V.defaultView||V.parentWindow:window,_?(le=r.relatedTarget||r.toElement,_=L,le=le?aa(le):null,le!==null&&(De=u(le),re=le.tag,le!==De||re!==5&&re!==27&&re!==6)&&(le=null)):(_=null,le=L),_!==le)){if(re=Bh,q="onMouseLeave",z="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(re=Nh,q="onPointerLeave",z="onPointerEnter",D="pointer"),De=_==null?V:br(_),$=le==null?V:br(le),V=new re(q,D+"leave",_,r,F),V.target=De,V.relatedTarget=$,q=null,aa(F)===L&&(re=new re(z,D+"enter",le,r,F),re.target=$,re.relatedTarget=De,q=re),De=q,_&&le)t:{for(re=_,z=le,D=0,$=re;$;$=Va($))D++;for($=0,q=z;q;q=Va(q))$++;for(;0<D-$;)re=Va(re),D--;for(;0<$-D;)z=Va(z),$--;for(;D--;){if(re===z||z!==null&&re===z.alternate)break t;re=Va(re),z=Va(z)}re=null}else re=null;_!==null&&Tg(G,V,_,re,!1),le!==null&&De!==null&&Tg(G,De,le,re,!0)}}e:{if(V=L?br(L):window,_=V.nodeName&&V.nodeName.toLowerCase(),_==="select"||_==="input"&&V.type==="file")var te=qh;else if(Ph(V))if(Yh)te=C2;else{te=T2;var ge=A2}else _=V.nodeName,!_||_.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?L&&Rc(L.elementType)&&(te=qh):te=E2;if(te&&(te=te(t,L))){Fh(G,te,r,F);break e}ge&&ge(t,V,L),t==="focusout"&&L&&V.type==="number"&&L.memoizedProps.value!=null&&Cc(V,"number",V.value)}switch(ge=L?br(L):window,t){case"focusin":(Ph(ge)||ge.contentEditable==="true")&&(pa=ge,Pc=L,Rr=null);break;case"focusout":Rr=Pc=pa=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Wh(G,r,F);break;case"selectionchange":if(D2)break;case"keydown":case"keyup":Wh(G,r,F)}var ae;if(Vc)e:{switch(t){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else ha?Hh(t,r)&&(oe="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(oe="onCompositionStart");oe&&(Lh&&r.locale!=="ko"&&(ha||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ha&&(ae=kh()):(Zi=F,zc="value"in Zi?Zi.value:Zi.textContent,ha=!0)),ge=Go(L,oe),0<ge.length&&(oe=new $h(oe,t,null,r,F),G.push({event:oe,listeners:ge}),ae?oe.data=ae:(ae=Uh(r),ae!==null&&(oe.data=ae)))),(ae=b2?v2(t,r):w2(t,r))&&(oe=Go(L,"onBeforeInput"),0<oe.length&&(ge=new $h("onBeforeInput","beforeinput",null,r,F),G.push({event:ge,listeners:oe}),ge.data=ae)),dw(G,t,L,r,F)}jg(G,n)})}function is(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Go(t,n){for(var r=n+"Capture",o=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=vr(t,r),c!=null&&o.unshift(is(t,c,h)),c=vr(t,n),c!=null&&o.push(is(t,c,h))),t.tag===3)return o;t=t.return}return[]}function Va(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tg(t,n,r,o,c){for(var h=n._reactName,x=[];r!==null&&r!==o;){var j=r,E=j.alternate,L=j.stateNode;if(j=j.tag,E!==null&&E===o)break;j!==5&&j!==26&&j!==27||L===null||(E=L,c?(L=vr(r,h),L!=null&&x.unshift(is(r,L,E))):c||(L=vr(r,h),L!=null&&x.push(is(r,L,E)))),r=r.return}x.length!==0&&t.push({event:n,listeners:x})}var mw=/\r\n?/g,gw=/\u0000|\uFFFD/g;function Eg(t){return(typeof t=="string"?t:""+t).replace(mw,`
`).replace(gw,"")}function Cg(t,n){return n=Eg(n),Eg(t)===n}function Ko(){}function Re(t,n,r,o,c,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ua(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ua(t,""+o);break;case"className":Qs(t,"class",o);break;case"tabIndex":Qs(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Qs(t,r,o);break;case"style":Dh(t,o,h);break;case"data":if(n!=="object"){Qs(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=eo(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&Re(t,n,"name",c.name,c,null),Re(t,n,"formEncType",c.formEncType,c,null),Re(t,n,"formMethod",c.formMethod,c,null),Re(t,n,"formTarget",c.formTarget,c,null)):(Re(t,n,"encType",c.encType,c,null),Re(t,n,"method",c.method,c,null),Re(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=eo(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Ko);break;case"onScroll":o!=null&&xe("scroll",t);break;case"onScrollEnd":o!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=eo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Xs(t,"popover",o);break;case"xlinkActuate":wi(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":wi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":wi(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":wi(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":wi(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":wi(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":wi(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":wi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":wi(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xs(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Gv.get(r)||r,Xs(t,r,o))}}function fd(t,n,r,o,c,h){switch(r){case"style":Dh(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?ua(t,o):(typeof o=="number"||typeof o=="bigint")&&ua(t,""+o);break;case"onScroll":o!=null&&xe("scroll",t);break;case"onScrollEnd":o!=null&&xe("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ko);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xh.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),h=t[wt]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,c);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Xs(t,r,o)}}}function lt(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var o=!1,c=!1,h;for(h in r)if(r.hasOwnProperty(h)){var x=r[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Re(t,n,h,x,r,null)}}c&&Re(t,n,"srcSet",r.srcSet,r,null),o&&Re(t,n,"src",r.src,r,null);return;case"input":xe("invalid",t);var j=h=x=c=null,E=null,L=null;for(o in r)if(r.hasOwnProperty(o)){var F=r[o];if(F!=null)switch(o){case"name":c=F;break;case"type":x=F;break;case"checked":E=F;break;case"defaultChecked":L=F;break;case"value":h=F;break;case"defaultValue":j=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,n));break;default:Re(t,n,o,F,r,null)}}Th(t,h,j,E,L,x,c,!1),Js(t);return;case"select":xe("invalid",t),o=x=h=null;for(c in r)if(r.hasOwnProperty(c)&&(j=r[c],j!=null))switch(c){case"value":h=j;break;case"defaultValue":x=j;break;case"multiple":o=j;default:Re(t,n,c,j,r,null)}n=h,r=x,t.multiple=!!o,n!=null?ca(t,!!o,n,!1):r!=null&&ca(t,!!o,r,!0);return;case"textarea":xe("invalid",t),h=c=o=null;for(x in r)if(r.hasOwnProperty(x)&&(j=r[x],j!=null))switch(x){case"value":o=j;break;case"defaultValue":c=j;break;case"children":h=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(91));break;default:Re(t,n,x,j,r,null)}Ch(t,o,c,h),Js(t);return;case"option":for(E in r)if(r.hasOwnProperty(E)&&(o=r[E],o!=null))switch(E){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Re(t,n,E,o,r,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(o=0;o<ts.length;o++)xe(ts[o],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in r)if(r.hasOwnProperty(L)&&(o=r[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Re(t,n,L,o,r,null)}return;default:if(Rc(n)){for(F in r)r.hasOwnProperty(F)&&(o=r[F],o!==void 0&&fd(t,n,F,o,r,void 0));return}}for(j in r)r.hasOwnProperty(j)&&(o=r[j],o!=null&&Re(t,n,j,o,r,null))}function yw(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,x=null,j=null,E=null,L=null,F=null;for(_ in r){var G=r[_];if(r.hasOwnProperty(_)&&G!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":E=G;default:o.hasOwnProperty(_)||Re(t,n,_,null,o,G)}}for(var V in o){var _=o[V];if(G=r[V],o.hasOwnProperty(V)&&(_!=null||G!=null))switch(V){case"type":h=_;break;case"name":c=_;break;case"checked":L=_;break;case"defaultChecked":F=_;break;case"value":x=_;break;case"defaultValue":j=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,n));break;default:_!==G&&Re(t,n,V,_,o,G)}}Ec(t,x,j,E,L,F,h,c);return;case"select":_=x=j=V=null;for(h in r)if(E=r[h],r.hasOwnProperty(h)&&E!=null)switch(h){case"value":break;case"multiple":_=E;default:o.hasOwnProperty(h)||Re(t,n,h,null,o,E)}for(c in o)if(h=o[c],E=r[c],o.hasOwnProperty(c)&&(h!=null||E!=null))switch(c){case"value":V=h;break;case"defaultValue":j=h;break;case"multiple":x=h;default:h!==E&&Re(t,n,c,h,o,E)}n=j,r=x,o=_,V!=null?ca(t,!!r,V,!1):!!o!=!!r&&(n!=null?ca(t,!!r,n,!0):ca(t,!!r,r?[]:"",!1));return;case"textarea":_=V=null;for(j in r)if(c=r[j],r.hasOwnProperty(j)&&c!=null&&!o.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:Re(t,n,j,null,o,c)}for(x in o)if(c=o[x],h=r[x],o.hasOwnProperty(x)&&(c!=null||h!=null))switch(x){case"value":V=c;break;case"defaultValue":_=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&Re(t,n,x,c,o,h)}Eh(t,V,_);return;case"option":for(var le in r)if(V=r[le],r.hasOwnProperty(le)&&V!=null&&!o.hasOwnProperty(le))switch(le){case"selected":t.selected=!1;break;default:Re(t,n,le,null,o,V)}for(E in o)if(V=o[E],_=r[E],o.hasOwnProperty(E)&&V!==_&&(V!=null||_!=null))switch(E){case"selected":t.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:Re(t,n,E,V,o,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in r)V=r[re],r.hasOwnProperty(re)&&V!=null&&!o.hasOwnProperty(re)&&Re(t,n,re,null,o,V);for(L in o)if(V=o[L],_=r[L],o.hasOwnProperty(L)&&V!==_&&(V!=null||_!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,n));break;default:Re(t,n,L,V,o,_)}return;default:if(Rc(n)){for(var De in r)V=r[De],r.hasOwnProperty(De)&&V!==void 0&&!o.hasOwnProperty(De)&&fd(t,n,De,void 0,o,V);for(F in o)V=o[F],_=r[F],!o.hasOwnProperty(F)||V===_||V===void 0&&_===void 0||fd(t,n,F,V,o,_);return}}for(var z in r)V=r[z],r.hasOwnProperty(z)&&V!=null&&!o.hasOwnProperty(z)&&Re(t,n,z,null,o,V);for(G in o)V=o[G],_=r[G],!o.hasOwnProperty(G)||V===_||V==null&&_==null||Re(t,n,G,V,o,_)}var hd=null,pd=null;function Zo(t){return t.nodeType===9?t:t.ownerDocument}function Rg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function md(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gd=null;function xw(){var t=window.event;return t&&t.type==="popstate"?t===gd?!1:(gd=t,!0):(gd=null,!1)}var Mg=typeof setTimeout=="function"?setTimeout:void 0,bw=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,vw=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(t){return Og.resolve(null).then(t).catch(ww)}:Mg;function ww(t){setTimeout(function(){throw t})}function dn(t){return t==="head"}function kg(t,n){var r=n,o=0,c=0;do{var h=r.nextSibling;if(t.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"){if(0<o&&8>o){r=o;var x=t.ownerDocument;if(r&1&&ns(x.documentElement),r&2&&ns(x.body),r&4)for(r=x.head,ns(r),x=r.firstChild;x;){var j=x.nextSibling,E=x.nodeName;x[xr]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&x.rel.toLowerCase()==="stylesheet"||r.removeChild(x),x=j}}if(c===0){t.removeChild(h),ds(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:o=r.charCodeAt(0)-48;else o=0;r=h}while(r);ds(n)}function yd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":yd(r),Sc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Sw(t,n,r,o){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[xr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=ti(t.nextSibling),t===null)break}return null}function jw(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=ti(t.nextSibling),t===null))return null;return t}function xd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Aw(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var bd=null;function zg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function Bg(t,n,r){switch(n=Zo(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ns(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Sc(t)}var Kt=new Map,$g=new Set;function Io(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=Z.d;Z.d={f:Tw,r:Ew,D:Cw,C:Rw,L:Dw,m:Mw,X:kw,S:Ow,M:zw};function Tw(){var t=$i.f(),n=Ho();return t||n}function Ew(t){var n=ra(t);n!==null&&n.tag===5&&n.type==="form"?tm(n):$i.r(t)}var _a=typeof document>"u"?null:document;function Ng(t,n,r){var o=_a;if(o&&typeof n=="string"&&n){var c=Ht(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),$g.has(c)||($g.add(c),t={rel:t,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),lt(n,"link",t),tt(n),o.head.appendChild(n)))}}function Cw(t){$i.D(t),Ng("dns-prefetch",t,null)}function Rw(t,n){$i.C(t,n),Ng("preconnect",t,n)}function Dw(t,n,r){$i.L(t,n,r);var o=_a;if(o&&t&&n){var c='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Ht(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Ht(r.imageSizes)+'"]')):c+='[href="'+Ht(t)+'"]';var h=c;switch(n){case"style":h=Ha(t);break;case"script":h=Ua(t)}Kt.has(h)||(t=y({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Kt.set(h,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(as(h))||n==="script"&&o.querySelector(rs(h))||(n=o.createElement("link"),lt(n,"link",t),tt(n),o.head.appendChild(n)))}}function Mw(t,n){$i.m(t,n);var r=_a;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(t)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ua(t)}if(!Kt.has(h)&&(t=y({rel:"modulepreload",href:t},n),Kt.set(h,t),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(rs(h)))return}o=r.createElement("link"),lt(o,"link",t),tt(o),r.head.appendChild(o)}}}function Ow(t,n,r){$i.S(t,n,r);var o=_a;if(o&&t){var c=sa(o).hoistableStyles,h=Ha(t);n=n||"default";var x=c.get(h);if(!x){var j={loading:0,preload:null};if(x=o.querySelector(as(h)))j.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Kt.get(h))&&vd(t,r);var E=x=o.createElement("link");tt(E),lt(E,"link",t),E._p=new Promise(function(L,F){E.onload=L,E.onerror=F}),E.addEventListener("load",function(){j.loading|=1}),E.addEventListener("error",function(){j.loading|=2}),j.loading|=4,Xo(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:j},c.set(h,x)}}}function kw(t,n){$i.X(t,n);var r=_a;if(r&&t){var o=sa(r).hoistableScripts,c=Ua(t),h=o.get(c);h||(h=r.querySelector(rs(c)),h||(t=y({src:t,async:!0},n),(n=Kt.get(c))&&wd(t,n),h=r.createElement("script"),tt(h),lt(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function zw(t,n){$i.M(t,n);var r=_a;if(r&&t){var o=sa(r).hoistableScripts,c=Ua(t),h=o.get(c);h||(h=r.querySelector(rs(c)),h||(t=y({src:t,async:!0,type:"module"},n),(n=Kt.get(c))&&wd(t,n),h=r.createElement("script"),tt(h),lt(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Lg(t,n,r,o){var c=(c=se.current)?Io(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Ha(r.href),r=sa(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Ha(r.href);var h=sa(c).hoistableStyles,x=h.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,x),(h=c.querySelector(as(t)))&&!h._p&&(x.instance=h,x.state.loading=5),Kt.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Kt.set(t,r),h||Bw(c,t,r,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ua(r),r=sa(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ha(t){return'href="'+Ht(t)+'"'}function as(t){return'link[rel="stylesheet"]['+t+"]"}function Vg(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function Bw(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),lt(n,"link",r),tt(n),t.head.appendChild(n))}function Ua(t){return'[src="'+Ht(t)+'"]'}function rs(t){return"script[async]"+t}function _g(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ht(r.href)+'"]');if(o)return n.instance=o,tt(o),o;var c=y({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tt(o),lt(o,"style",c),Xo(o,r.precedence,t),n.instance=o;case"stylesheet":c=Ha(r.href);var h=t.querySelector(as(c));if(h)return n.state.loading|=4,n.instance=h,tt(h),h;o=Vg(r),(c=Kt.get(c))&&vd(o,c),h=(t.ownerDocument||t).createElement("link"),tt(h);var x=h;return x._p=new Promise(function(j,E){x.onload=j,x.onerror=E}),lt(h,"link",o),n.state.loading|=4,Xo(h,r.precedence,t),n.instance=h;case"script":return h=Ua(r.src),(c=t.querySelector(rs(h)))?(n.instance=c,tt(c),c):(o=r,(c=Kt.get(h))&&(o=y({},r),wd(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),tt(c),lt(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Xo(o,r.precedence,t));return n.instance}function Xo(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,x=0;x<o.length;x++){var j=o[x];if(j.dataset.precedence===n)h=j;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function vd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Qo=null;function Hg(t,n,r){if(Qo===null){var o=new Map,c=Qo=new Map;c.set(r,o)}else c=Qo,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var h=r[c];if(!(h[xr]||h[dt]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=t+x;var j=o.get(x);j?j.push(h):o.set(x,[h])}}return o}function Ug(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function $w(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ss=null;function Nw(){}function Lw(t,n,r){if(ss===null)throw Error(s(475));var o=ss;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Ha(r.href),h=t.querySelector(as(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Jo.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,tt(h);return}h=t.ownerDocument||t,r=Vg(r),(c=Kt.get(c))&&vd(r,c),h=h.createElement("link"),tt(h);var x=h;x._p=new Promise(function(j,E){x.onload=j,x.onerror=E}),lt(h,"link",r),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Jo.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Vw(){if(ss===null)throw Error(s(475));var t=ss;return t.stylesheets&&t.count===0&&Sd(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&Sd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function Jo(){if(this.count--,this.count===0){if(this.stylesheets)Sd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wo=null;function Sd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wo=new Map,n.forEach(_w,t),Wo=null,Jo.call(t))}function _w(t,n){if(!(n.state.loading&4)){var r=Wo.get(t);if(r)var o=r.get(null);else{r=new Map,Wo.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var x=c[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(r.set(x.dataset.precedence,x),o=x)}o&&r.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),h=r.get(x)||o,h===o&&r.set(null,c),r.set(x,c),this.count++,o=Jo.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var os={$$typeof:M,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Hw(t,n,r,o,c,h,x,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.hiddenUpdates=xc(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Fg(t,n,r,o,c,h,x,j,E,L,F,G){return t=new Hw(t,n,r,x,j,E,L,G),n=1,h===!0&&(n|=24),h=Mt(3,null,null,n),t.current=h,h.stateNode=t,n=nu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},ou(h),t}function qg(t){return t?(t=xa,t):xa}function Yg(t,n,r,o,c,h){c=qg(c),o.context===null?o.context=c:o.pendingContext=c,o=Qi(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Ji(t,o,n),r!==null&&($t(r,t,n),Lr(r,t,n))}function Gg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function jd(t,n){Gg(t,n),(t=t.alternate)&&Gg(t,n)}function Kg(t){if(t.tag===13){var n=ya(t,67108864);n!==null&&$t(n,t,67108864),jd(t,67108864)}}var el=!0;function Uw(t,n,r,o){var c=U.T;U.T=null;var h=Z.p;try{Z.p=2,Ad(t,n,r,o)}finally{Z.p=h,U.T=c}}function Pw(t,n,r,o){var c=U.T;U.T=null;var h=Z.p;try{Z.p=8,Ad(t,n,r,o)}finally{Z.p=h,U.T=c}}function Ad(t,n,r,o){if(el){var c=Td(o);if(c===null)dd(t,n,o,tl,r),Ig(t,o);else if(qw(c,t,n,r,o))o.stopPropagation();else if(Ig(t,o),n&4&&-1<Fw.indexOf(t)){for(;c!==null;){var h=ra(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=An(h.pendingLanes);if(x!==0){var j=h;for(j.pendingLanes|=2,j.entangledLanes|=2;x;){var E=1<<31-Rt(x);j.entanglements[1]|=E,x&=~E}ui(h),(Te&6)===0&&(Vo=ri()+500,es(0))}}break;case 13:j=ya(h,2),j!==null&&$t(j,h,2),Ho(),jd(h,2)}if(h=Td(o),h===null&&dd(t,n,o,tl,r),h===c)break;c=h}c!==null&&o.stopPropagation()}else dd(t,n,o,null,r)}}function Td(t){return t=Mc(t),Ed(t)}var tl=null;function Ed(t){if(tl=null,t=aa(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tl=t,null}function Zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rv()){case lh:return 2;case ch:return 8;case Gs:case Dv:return 32;case uh:return 268435456;default:return 32}default:return 32}}var Cd=!1,fn=null,hn=null,pn=null,ls=new Map,cs=new Map,mn=[],Fw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ig(t,n){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":ls.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(n.pointerId)}}function us(t,n,r,o,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=ra(n),n!==null&&Kg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function qw(t,n,r,o,c){switch(n){case"focusin":return fn=us(fn,t,n,r,o,c),!0;case"dragenter":return hn=us(hn,t,n,r,o,c),!0;case"mouseover":return pn=us(pn,t,n,r,o,c),!0;case"pointerover":var h=c.pointerId;return ls.set(h,us(ls.get(h)||null,t,n,r,o,c)),!0;case"gotpointercapture":return h=c.pointerId,cs.set(h,us(cs.get(h)||null,t,n,r,o,c)),!0}return!1}function Xg(t){var n=aa(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,Lv(t.priority,function(){if(r.tag===13){var o=Bt();o=bc(o);var c=ya(r,o);c!==null&&$t(c,r,o),jd(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Td(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Dc=o,r.target.dispatchEvent(o),Dc=null}else return n=ra(r),n!==null&&Kg(n),t.blockedOn=r,!1;n.shift()}return!0}function Qg(t,n,r){il(t)&&r.delete(n)}function Yw(){Cd=!1,fn!==null&&il(fn)&&(fn=null),hn!==null&&il(hn)&&(hn=null),pn!==null&&il(pn)&&(pn=null),ls.forEach(Qg),cs.forEach(Qg)}function nl(t,n){t.blockedOn===n&&(t.blockedOn=null,Cd||(Cd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yw)))}var al=null;function Jg(t){al!==t&&(al=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){al===t&&(al=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Ed(o||r)===null)continue;break}var h=ra(r);h!==null&&(t.splice(n,3),n-=3,Eu(h,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function ds(t){function n(E){return nl(E,t)}fn!==null&&nl(fn,t),hn!==null&&nl(hn,t),pn!==null&&nl(pn,t),ls.forEach(n),cs.forEach(n);for(var r=0;r<mn.length;r++){var o=mn[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<mn.length&&(r=mn[0],r.blockedOn===null);)Xg(r),r.blockedOn===null&&mn.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],h=r[o+1],x=c[wt]||null;if(typeof h=="function")x||Jg(r);else if(x){var j=null;if(h&&h.hasAttribute("formAction")){if(c=h,x=h[wt]||null)j=x.formAction;else if(Ed(c)!==null)continue}else j=x.action;typeof j=="function"?r[o+1]=j:(r.splice(o,3),o-=3),Jg(r)}}}function Rd(t){this._internalRoot=t}rl.prototype.render=Rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=Bt();Yg(r,o,t,n,null,null)},rl.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Yg(t.current,2,null,t,null,null),Ho(),n[na]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var n=mh();t={blockedOn:null,target:t,priority:n};for(var r=0;r<mn.length&&n!==0&&n<mn[r].priority;r++);mn.splice(r,0,t),r===0&&Xg(t)}};var Wg=i.version;if(Wg!=="19.1.0")throw Error(s(527,Wg,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Gw={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{mr=sl.inject(Gw),Ct=sl}catch{}}return hs.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",c=mm,h=gm,x=ym,j=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(j=n.unstable_transitionCallbacks)),n=Fg(t,1,!1,null,null,r,o,c,h,x,j,null),t[na]=n.current,ud(t),new Rd(n)},hs.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,c="",h=mm,x=gm,j=ym,E=null,L=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(j=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(E=r.unstable_transitionCallbacks),r.formState!==void 0&&(L=r.formState)),n=Fg(t,1,!0,n,r??null,o,c,h,x,j,E,L),n.context=qg(null),r=n.current,o=Bt(),o=bc(o),c=Qi(o),c.callback=null,Ji(r,c,o),r=o,n.current.lanes=r,yr(n,r),ui(n),t[na]=n.current,ud(t),new rl(n)},hs.version="19.1.0",hs}var c1;function i3(){if(c1)return Od.exports;c1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),Od.exports=t3(),Od.exports}var n3=i3();const a3=Vx(n3);var ps={},u1;function r3(){if(u1)return ps;u1=1,Object.defineProperty(ps,"__esModule",{value:!0}),ps.parse=f,ps.serialize=m;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function f(S,A){const T=new u,k=S.length;if(k<2)return T;const B=(A==null?void 0:A.decode)||y;let O=0;do{const H=S.indexOf("=",O);if(H===-1)break;const M=S.indexOf(";",O),Y=M===-1?k:M;if(H>Y){O=S.lastIndexOf(";",H-1)+1;continue}const N=p(S,O,H),K=g(S,H,N),I=S.slice(N,K);if(T[I]===void 0){let X=p(S,H+1,Y),W=g(S,Y,X);const ie=B(S.slice(X,W));T[I]=ie}O=Y+1}while(O<k);return T}function p(S,A,T){do{const k=S.charCodeAt(A);if(k!==32&&k!==9)return A}while(++A<T);return T}function g(S,A,T){for(;A>T;){const k=S.charCodeAt(--A);if(k!==32&&k!==9)return A+1}return T}function m(S,A,T){const k=(T==null?void 0:T.encode)||encodeURIComponent;if(!e.test(S))throw new TypeError(`argument name is invalid: ${S}`);const B=k(A);if(!i.test(B))throw new TypeError(`argument val is invalid: ${A}`);let O=S+"="+B;if(!T)return O;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);O+="; Max-Age="+T.maxAge}if(T.domain){if(!a.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);O+="; Domain="+T.domain}if(T.path){if(!s.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);O+="; Path="+T.path}if(T.expires){if(!v(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);O+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(O+="; HttpOnly"),T.secure&&(O+="; Secure"),T.partitioned&&(O+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return O}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function v(S){return l.call(S)==="[object Date]"}return ps}r3();var d1="popstate";function s3(e={}){function i(s,l){let{pathname:u,search:f,hash:p}=s.location;return Of("",{pathname:u,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function a(s,l){return typeof l=="string"?l:Rs(l)}return l3(i,a,null,e)}function _e(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}function xi(e,i){if(!e){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function o3(){return Math.random().toString(36).substring(2,10)}function f1(e,i){return{usr:e.state,key:e.key,idx:i}}function Of(e,i,a=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof i=="string"?lr(i):i,state:a,key:i&&i.key||s||o3()}}function Rs({pathname:e="/",search:i="",hash:a=""}){return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function lr(e){let i={};if(e){let a=e.indexOf("#");a>=0&&(i.hash=e.substring(a),e=e.substring(0,a));let s=e.indexOf("?");s>=0&&(i.search=e.substring(s),e=e.substring(0,s)),e&&(i.pathname=e)}return i}function l3(e,i,a,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,p="POP",g=null,m=y();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function y(){return(f.state||{idx:null}).idx}function v(){p="POP";let B=y(),O=B==null?null:B-m;m=B,g&&g({action:p,location:k.location,delta:O})}function S(B,O){p="PUSH";let H=Of(k.location,B,O);m=y()+1;let M=f1(H,m),Y=k.createHref(H);try{f.pushState(M,"",Y)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(Y)}u&&g&&g({action:p,location:k.location,delta:1})}function A(B,O){p="REPLACE";let H=Of(k.location,B,O);m=y();let M=f1(H,m),Y=k.createHref(H);f.replaceState(M,"",Y),u&&g&&g({action:p,location:k.location,delta:0})}function T(B){return c3(B)}let k={get action(){return p},get location(){return e(l,f)},listen(B){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(d1,v),g=B,()=>{l.removeEventListener(d1,v),g=null}},createHref(B){return i(l,B)},createURL:T,encodeLocation(B){let O=T(B);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:S,replace:A,go(B){return f.go(B)}};return k}function c3(e,i=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),_e(a,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Rs(e);return s=s.replace(/ $/,"%20"),!i&&s.startsWith("//")&&(s=a+s),new URL(s,a)}function _x(e,i,a="/"){return u3(e,i,a,!1)}function u3(e,i,a,s){let l=typeof i=="string"?lr(i):i,u=Ui(l.pathname||"/",a);if(u==null)return null;let f=Hx(e);d3(f);let p=null;for(let g=0;p==null&&g<f.length;++g){let m=S3(u);p=v3(f[g],m,s)}return p}function Hx(e,i=[],a=[],s=""){let l=(u,f,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};g.relativePath.startsWith("/")&&(_e(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let m=Hi([s,g.relativePath]),y=a.concat(g);u.children&&u.children.length>0&&(_e(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Hx(u.children,i,y,m)),!(u.path==null&&!u.index)&&i.push({path:m,score:x3(m,u.index),routesMeta:y})};return e.forEach((u,f)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))l(u,f);else for(let g of Ux(u.path))l(u,f,g)}),i}function Ux(e){let i=e.split("/");if(i.length===0)return[];let[a,...s]=i,l=a.endsWith("?"),u=a.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=Ux(s.join("/")),p=[];return p.push(...f.map(g=>g===""?u:[u,g].join("/"))),l&&p.push(...f),p.map(g=>e.startsWith("/")&&g===""?"/":g)}function d3(e){e.sort((i,a)=>i.score!==a.score?a.score-i.score:b3(i.routesMeta.map(s=>s.childrenIndex),a.routesMeta.map(s=>s.childrenIndex)))}var f3=/^:[\w-]+$/,h3=3,p3=2,m3=1,g3=10,y3=-2,h1=e=>e==="*";function x3(e,i){let a=e.split("/"),s=a.length;return a.some(h1)&&(s+=y3),i&&(s+=p3),a.filter(l=>!h1(l)).reduce((l,u)=>l+(f3.test(u)?h3:u===""?m3:g3),s)}function b3(e,i){return e.length===i.length&&e.slice(0,-1).every((s,l)=>s===i[l])?e[e.length-1]-i[i.length-1]:0}function v3(e,i,a=!1){let{routesMeta:s}=e,l={},u="/",f=[];for(let p=0;p<s.length;++p){let g=s[p],m=p===s.length-1,y=u==="/"?i:i.slice(u.length)||"/",v=Hl({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},y),S=g.route;if(!v&&m&&a&&!s[s.length-1].route.index&&(v=Hl({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},y)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:Hi([u,v.pathname]),pathnameBase:E3(Hi([u,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(u=Hi([u,v.pathnameBase]))}return f}function Hl(e,i){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,s]=w3(e.path,e.caseSensitive,e.end),l=i.match(a);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:v},S)=>{if(y==="*"){let T=p[S]||"";f=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const A=p[S];return v&&!A?m[y]=void 0:m[y]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:e}}function w3(e,i=!1,a=!0){xi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,i?void 0:"i"),s]}function S3(e){try{return e.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return xi(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),e}}function Ui(e,i){if(i==="/")return e;if(!e.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,s=e.charAt(a);return s&&s!=="/"?null:e.slice(a)||"/"}function j3(e,i="/"){let{pathname:a,search:s="",hash:l=""}=typeof e=="string"?lr(e):e;return{pathname:a?a.startsWith("/")?a:A3(a,i):i,search:C3(s),hash:R3(l)}}function A3(e,i){let a=i.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?a.length>1&&a.pop():l!=="."&&a.push(l)}),a.length>1?a.join("/"):"/"}function $d(e,i,a,s){return`Cannot include a '${e}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function T3(e){return e.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function Px(e){let i=T3(e);return i.map((a,s)=>s===i.length-1?a.pathname:a.pathnameBase)}function Fx(e,i,a,s=!1){let l;typeof e=="string"?l=lr(e):(l={...e},_e(!l.pathname||!l.pathname.includes("?"),$d("?","pathname","search",l)),_e(!l.pathname||!l.pathname.includes("#"),$d("#","pathname","hash",l)),_e(!l.search||!l.search.includes("#"),$d("#","search","hash",l)));let u=e===""||l.pathname==="",f=u?"/":l.pathname,p;if(f==null)p=a;else{let v=i.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),v-=1;l.pathname=S.join("/")}p=v>=0?i[v]:"/"}let g=j3(l,p),m=f&&f!=="/"&&f.endsWith("/"),y=(u||f===".")&&a.endsWith("/");return!g.pathname.endsWith("/")&&(m||y)&&(g.pathname+="/"),g}var Hi=e=>e.join("/").replace(/\/\/+/g,"/"),E3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,R3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function D3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var qx=["POST","PUT","PATCH","DELETE"];new Set(qx);var M3=["GET",...qx];new Set(M3);var cr=w.createContext(null);cr.displayName="DataRouter";var ic=w.createContext(null);ic.displayName="DataRouterState";var Yx=w.createContext({isTransitioning:!1});Yx.displayName="ViewTransition";var O3=w.createContext(new Map);O3.displayName="Fetchers";var k3=w.createContext(null);k3.displayName="Await";var bi=w.createContext(null);bi.displayName="Navigation";var _s=w.createContext(null);_s.displayName="Location";var qi=w.createContext({outlet:null,matches:[],isDataRoute:!1});qi.displayName="Route";var d0=w.createContext(null);d0.displayName="RouteError";function z3(e,{relative:i}={}){_e(Hs(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:s}=w.useContext(bi),{hash:l,pathname:u,search:f}=Us(e,{relative:i}),p=u;return a!=="/"&&(p=u==="/"?a:Hi([a,u])),s.createHref({pathname:p,search:f,hash:l})}function Hs(){return w.useContext(_s)!=null}function Yi(){return _e(Hs(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(_s).location}var Gx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kx(e){w.useContext(bi).static||w.useLayoutEffect(e)}function B3(){let{isDataRoute:e}=w.useContext(qi);return e?K3():$3()}function $3(){_e(Hs(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(cr),{basename:i,navigator:a}=w.useContext(bi),{matches:s}=w.useContext(qi),{pathname:l}=Yi(),u=JSON.stringify(Px(s)),f=w.useRef(!1);return Kx(()=>{f.current=!0}),w.useCallback((g,m={})=>{if(xi(f.current,Gx),!f.current)return;if(typeof g=="number"){a.go(g);return}let y=Fx(g,JSON.parse(u),l,m.relative==="path");e==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Hi([i,y.pathname])),(m.replace?a.replace:a.push)(y,m.state,m)},[i,a,u,l,e])}w.createContext(null);function Us(e,{relative:i}={}){let{matches:a}=w.useContext(qi),{pathname:s}=Yi(),l=JSON.stringify(Px(a));return w.useMemo(()=>Fx(e,JSON.parse(l),s,i==="path"),[e,l,s,i])}function N3(e,i){return Zx(e,i)}function Zx(e,i,a,s){var H;_e(Hs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=w.useContext(bi),{matches:f}=w.useContext(qi),p=f[f.length-1],g=p?p.params:{},m=p?p.pathname:"/",y=p?p.pathnameBase:"/",v=p&&p.route;{let M=v&&v.path||"";Ix(m,!v||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let S=Yi(),A;if(i){let M=typeof i=="string"?lr(i):i;_e(y==="/"||((H=M.pathname)==null?void 0:H.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${M.pathname}" was given in the \`location\` prop.`),A=M}else A=S;let T=A.pathname||"/",k=T;if(y!=="/"){let M=y.replace(/^\//,"").split("/");k="/"+T.replace(/^\//,"").split("/").slice(M.length).join("/")}let B=!u&&a&&a.matches&&a.matches.length>0?a.matches:_x(e,{pathname:k});xi(v||B!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),xi(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=U3(B&&B.map(M=>Object.assign({},M,{params:Object.assign({},g,M.params),pathname:Hi([y,l.encodeLocation?l.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:Hi([y,l.encodeLocation?l.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),f,a,s);return i&&O?w.createElement(_s.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},O):O}function L3(){let e=G3(),i=D3(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:u},"ErrorBoundary")," or"," ",w.createElement("code",{style:u},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},i),a?w.createElement("pre",{style:l},a):null,f)}var V3=w.createElement(L3,null),_3=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?w.createElement(qi.Provider,{value:this.props.routeContext},w.createElement(d0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function H3({routeContext:e,match:i,children:a}){let s=w.useContext(cr);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),w.createElement(qi.Provider,{value:e},a)}function U3(e,i=[],a=null,s=null){if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(i.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let l=e,u=a==null?void 0:a.errors;if(u!=null){let g=l.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);_e(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,p=-1;if(a)for(let g=0;g<l.length;g++){let m=l[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=g),m.route.id){let{loaderData:y,errors:v}=a,S=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||S){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((g,m,y)=>{let v,S=!1,A=null,T=null;a&&(v=u&&m.route.id?u[m.route.id]:void 0,A=m.route.errorElement||V3,f&&(p<0&&y===0?(Ix("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):p===y&&(S=!0,T=m.route.hydrateFallbackElement||null)));let k=i.concat(l.slice(0,y+1)),B=()=>{let O;return v?O=A:S?O=T:m.route.Component?O=w.createElement(m.route.Component,null):m.route.element?O=m.route.element:O=g,w.createElement(H3,{match:m,routeContext:{outlet:g,matches:k,isDataRoute:a!=null},children:O})};return a&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?w.createElement(_3,{location:a.location,revalidation:a.revalidation,component:A,error:v,children:B(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):B()},null)}function f0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P3(e){let i=w.useContext(cr);return _e(i,f0(e)),i}function F3(e){let i=w.useContext(ic);return _e(i,f0(e)),i}function q3(e){let i=w.useContext(qi);return _e(i,f0(e)),i}function h0(e){let i=q3(e),a=i.matches[i.matches.length-1];return _e(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function Y3(){return h0("useRouteId")}function G3(){var s;let e=w.useContext(d0),i=F3("useRouteError"),a=h0("useRouteError");return e!==void 0?e:(s=i.errors)==null?void 0:s[a]}function K3(){let{router:e}=P3("useNavigate"),i=h0("useNavigate"),a=w.useRef(!1);return Kx(()=>{a.current=!0}),w.useCallback(async(l,u={})=>{xi(a.current,Gx),a.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:i,...u}))},[e,i])}var p1={};function Ix(e,i,a){!i&&!p1[e]&&(p1[e]=!0,xi(!1,a))}w.memo(Z3);function Z3({routes:e,future:i,state:a}){return Zx(e,void 0,a,i)}function Fn(e){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function I3({basename:e="/",children:i=null,location:a,navigationType:s="POP",navigator:l,static:u=!1}){_e(!Hs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),p=w.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof a=="string"&&(a=lr(a));let{pathname:g="/",search:m="",hash:y="",state:v=null,key:S="default"}=a,A=w.useMemo(()=>{let T=Ui(g,f);return T==null?null:{location:{pathname:T,search:m,hash:y,state:v,key:S},navigationType:s}},[f,g,m,y,v,S,s]);return xi(A!=null,`<Router basename="${f}"> is not able to match the URL "${g}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:w.createElement(bi.Provider,{value:p},w.createElement(_s.Provider,{children:i,value:A}))}function X3({children:e,location:i}){return N3(kf(e),i)}function kf(e,i=[]){let a=[];return w.Children.forEach(e,(s,l)=>{if(!w.isValidElement(s))return;let u=[...i,l];if(s.type===w.Fragment){a.push.apply(a,kf(s.props.children,u));return}_e(s.type===Fn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=kf(s.props.children,u)),a.push(f)}),a}var Al="get",Tl="application/x-www-form-urlencoded";function nc(e){return e!=null&&typeof e.tagName=="string"}function Q3(e){return nc(e)&&e.tagName.toLowerCase()==="button"}function J3(e){return nc(e)&&e.tagName.toLowerCase()==="form"}function W3(e){return nc(e)&&e.tagName.toLowerCase()==="input"}function e4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function t4(e,i){return e.button===0&&(!i||i==="_self")&&!e4(e)}var ol=null;function i4(){if(ol===null)try{new FormData(document.createElement("form"),0),ol=!1}catch{ol=!0}return ol}var n4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nd(e){return e!=null&&!n4.has(e)?(xi(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tl}"`),null):e}function a4(e,i){let a,s,l,u,f;if(J3(e)){let p=e.getAttribute("action");s=p?Ui(p,i):null,a=e.getAttribute("method")||Al,l=Nd(e.getAttribute("enctype"))||Tl,u=new FormData(e)}else if(Q3(e)||W3(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=e.getAttribute("formaction")||p.getAttribute("action");if(s=g?Ui(g,i):null,a=e.getAttribute("formmethod")||p.getAttribute("method")||Al,l=Nd(e.getAttribute("formenctype"))||Nd(p.getAttribute("enctype"))||Tl,u=new FormData(p,e),!i4()){let{name:m,type:y,value:v}=e;if(y==="image"){let S=m?`${m}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else m&&u.append(m,v)}}else{if(nc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Al,s=null,l=Tl,f=e}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:a.toLowerCase(),encType:l,formData:u,body:f}}function p0(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}async function r4(e,i){if(e.id in i)return i[e.id];try{let a=await import(e.module);return i[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function s4(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function o4(e,i,a){let s=await Promise.all(e.map(async l=>{let u=i.routes[l.route.id];if(u){let f=await r4(u,a);return f.links?f.links():[]}return[]}));return d4(s.flat(1).filter(s4).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function m1(e,i,a,s,l,u){let f=(g,m)=>a[m]?g.route.id!==a[m].route.id:!0,p=(g,m)=>{var y;return a[m].pathname!==g.pathname||((y=a[m].route.path)==null?void 0:y.endsWith("*"))&&a[m].params["*"]!==g.params["*"]};return u==="assets"?i.filter((g,m)=>f(g,m)||p(g,m)):u==="data"?i.filter((g,m)=>{var v;let y=s.routes[g.route.id];if(!y||!y.hasLoader)return!1;if(f(g,m)||p(g,m))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=a[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function l4(e,i,{includeHydrateFallback:a}={}){return c4(e.map(s=>{let l=i.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),a&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function c4(e){return[...new Set(e)]}function u4(e){let i={},a=Object.keys(e).sort();for(let s of a)i[s]=e[s];return i}function d4(e,i){let a=new Set;return new Set(i),e.reduce((s,l)=>{let u=JSON.stringify(u4(l));return a.has(u)||(a.add(u),s.push({key:u,link:l})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var f4=new Set([100,101,204,205]);function h4(e,i){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname="_root.data":i&&Ui(a.pathname,i)==="/"?a.pathname=`${i.replace(/\/$/,"")}/_root.data`:a.pathname=`${a.pathname.replace(/\/$/,"")}.data`,a}function Xx(){let e=w.useContext(cr);return p0(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function p4(){let e=w.useContext(ic);return p0(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var m0=w.createContext(void 0);m0.displayName="FrameworkContext";function Qx(){let e=w.useContext(m0);return p0(e,"You must render this element inside a <HydratedRouter> element"),e}function m4(e,i){let a=w.useContext(m0),[s,l]=w.useState(!1),[u,f]=w.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:m,onMouseLeave:y,onTouchStart:v}=i,S=w.useRef(null);w.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let k=O=>{O.forEach(H=>{f(H.isIntersecting)})},B=new IntersectionObserver(k,{threshold:.5});return S.current&&B.observe(S.current),()=>{B.disconnect()}}},[e]),w.useEffect(()=>{if(s){let k=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(k)}}},[s]);let A=()=>{l(!0)},T=()=>{l(!1),f(!1)};return a?e!=="intent"?[u,S,{}]:[u,S,{onFocus:ms(p,A),onBlur:ms(g,T),onMouseEnter:ms(m,A),onMouseLeave:ms(y,T),onTouchStart:ms(v,A)}]:[!1,S,{}]}function ms(e,i){return a=>{e&&e(a),a.defaultPrevented||i(a)}}function g4({page:e,...i}){let{router:a}=Xx(),s=w.useMemo(()=>_x(a.routes,e,a.basename),[a.routes,e,a.basename]);return s?w.createElement(x4,{page:e,matches:s,...i}):null}function y4(e){let{manifest:i,routeModules:a}=Qx(),[s,l]=w.useState([]);return w.useEffect(()=>{let u=!1;return o4(e,i,a).then(f=>{u||l(f)}),()=>{u=!0}},[e,i,a]),s}function x4({page:e,matches:i,...a}){let s=Yi(),{manifest:l,routeModules:u}=Qx(),{basename:f}=Xx(),{loaderData:p,matches:g}=p4(),m=w.useMemo(()=>m1(e,i,g,l,s,"data"),[e,i,g,l,s]),y=w.useMemo(()=>m1(e,i,g,l,s,"assets"),[e,i,g,l,s]),v=w.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let T=new Set,k=!1;if(i.forEach(O=>{var M;let H=l.routes[O.route.id];!H||!H.hasLoader||(!m.some(Y=>Y.route.id===O.route.id)&&O.route.id in p&&((M=u[O.route.id])!=null&&M.shouldRevalidate)||H.hasClientLoader?k=!0:T.add(O.route.id))}),T.size===0)return[];let B=h4(e,f);return k&&T.size>0&&B.searchParams.set("_routes",i.filter(O=>T.has(O.route.id)).map(O=>O.route.id).join(",")),[B.pathname+B.search]},[f,p,s,l,m,i,e,u]),S=w.useMemo(()=>l4(y,l),[y,l]),A=y4(y);return w.createElement(w.Fragment,null,v.map(T=>w.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...a})),S.map(T=>w.createElement("link",{key:T,rel:"modulepreload",href:T,...a})),A.map(({key:T,link:k})=>w.createElement("link",{key:T,...k})))}function b4(...e){return i=>{e.forEach(a=>{typeof a=="function"?a(i):a!=null&&(a.current=i)})}}var Jx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jx&&(window.__reactRouterVersion="7.6.0")}catch{}function v4({basename:e,children:i,window:a}){let s=w.useRef();s.current==null&&(s.current=s3({window:a,v5Compat:!0}));let l=s.current,[u,f]=w.useState({action:l.action,location:l.location}),p=w.useCallback(g=>{w.startTransition(()=>f(g))},[f]);return w.useLayoutEffect(()=>l.listen(p),[l,p]),w.createElement(I3,{basename:e,children:i,location:u.location,navigationType:u.action,navigator:l})}var Wx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lt=w.forwardRef(function({onClick:i,discover:a="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,state:p,target:g,to:m,preventScrollReset:y,viewTransition:v,...S},A){let{basename:T}=w.useContext(bi),k=typeof m=="string"&&Wx.test(m),B,O=!1;if(typeof m=="string"&&k&&(B=m,Jx))try{let W=new URL(window.location.href),ie=m.startsWith("//")?new URL(W.protocol+m):new URL(m),ve=Ui(ie.pathname,T);ie.origin===W.origin&&ve!=null?m=ve+ie.search+ie.hash:O=!0}catch{xi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=z3(m,{relative:l}),[M,Y,N]=m4(s,S),K=A4(m,{replace:f,state:p,target:g,preventScrollReset:y,relative:l,viewTransition:v});function I(W){i&&i(W),W.defaultPrevented||K(W)}let X=w.createElement("a",{...S,...N,href:B||H,onClick:O||u?i:I,ref:b4(A,Y),target:g,"data-discover":!k&&a==="render"?"true":void 0});return M&&!k?w.createElement(w.Fragment,null,X,w.createElement(g4,{page:H})):X});Lt.displayName="Link";var w4=w.forwardRef(function({"aria-current":i="page",caseSensitive:a=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:p,children:g,...m},y){let v=Us(f,{relative:m.relative}),S=Yi(),A=w.useContext(ic),{navigator:T,basename:k}=w.useContext(bi),B=A!=null&&D4(v)&&p===!0,O=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,H=S.pathname,M=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;a||(H=H.toLowerCase(),M=M?M.toLowerCase():null,O=O.toLowerCase()),M&&k&&(M=Ui(M,k)||M);const Y=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let N=H===O||!l&&H.startsWith(O)&&H.charAt(Y)==="/",K=M!=null&&(M===O||!l&&M.startsWith(O)&&M.charAt(O.length)==="/"),I={isActive:N,isPending:K,isTransitioning:B},X=N?i:void 0,W;typeof s=="function"?W=s(I):W=[s,N?"active":null,K?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ie=typeof u=="function"?u(I):u;return w.createElement(Lt,{...m,"aria-current":X,className:W,ref:y,style:ie,to:f,viewTransition:p},typeof g=="function"?g(I):g)});w4.displayName="NavLink";var S4=w.forwardRef(({discover:e="render",fetcherKey:i,navigate:a,reloadDocument:s,replace:l,state:u,method:f=Al,action:p,onSubmit:g,relative:m,preventScrollReset:y,viewTransition:v,...S},A)=>{let T=C4(),k=R4(p,{relative:m}),B=f.toLowerCase()==="get"?"get":"post",O=typeof p=="string"&&Wx.test(p),H=M=>{if(g&&g(M),M.defaultPrevented)return;M.preventDefault();let Y=M.nativeEvent.submitter,N=(Y==null?void 0:Y.getAttribute("formmethod"))||f;T(Y||M.currentTarget,{fetcherKey:i,method:N,navigate:a,replace:l,state:u,relative:m,preventScrollReset:y,viewTransition:v})};return w.createElement("form",{ref:A,method:B,action:k,onSubmit:s?g:H,...S,"data-discover":!O&&e==="render"?"true":void 0})});S4.displayName="Form";function j4(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e5(e){let i=w.useContext(cr);return _e(i,j4(e)),i}function A4(e,{target:i,replace:a,state:s,preventScrollReset:l,relative:u,viewTransition:f}={}){let p=B3(),g=Yi(),m=Us(e,{relative:u});return w.useCallback(y=>{if(t4(y,i)){y.preventDefault();let v=a!==void 0?a:Rs(g)===Rs(m);p(e,{replace:v,state:s,preventScrollReset:l,relative:u,viewTransition:f})}},[g,p,m,a,s,i,e,l,u,f])}var T4=0,E4=()=>`__${String(++T4)}__`;function C4(){let{router:e}=e5("useSubmit"),{basename:i}=w.useContext(bi),a=Y3();return w.useCallback(async(s,l={})=>{let{action:u,method:f,encType:p,formData:g,body:m}=a4(s,i);if(l.navigate===!1){let y=l.fetcherKey||E4();await e.fetch(y,a,l.action||u,{preventScrollReset:l.preventScrollReset,formData:g,body:m,formMethod:l.method||f,formEncType:l.encType||p,flushSync:l.flushSync})}else await e.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:g,body:m,formMethod:l.method||f,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:a,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,i,a])}function R4(e,{relative:i}={}){let{basename:a}=w.useContext(bi),s=w.useContext(qi);_e(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...Us(e||".",{relative:i})},f=Yi();if(e==null){u.search=f.search;let p=new URLSearchParams(u.search),g=p.getAll("index");if(g.some(y=>y==="")){p.delete("index"),g.filter(v=>v).forEach(v=>p.append("index",v));let y=p.toString();u.search=y?`?${y}`:""}}return(!e||e===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(u.pathname=u.pathname==="/"?a:Hi([a,u.pathname])),Rs(u)}function D4(e,i={}){let a=w.useContext(Yx);_e(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=e5("useViewTransitionState"),l=Us(e,{relative:i.relative});if(!a.isTransitioning)return!1;let u=Ui(a.currentLocation.pathname,s)||a.currentLocation.pathname,f=Ui(a.nextLocation.pathname,s)||a.nextLocation.pathname;return Hl(l.pathname,f)!=null||Hl(l.pathname,u)!=null}[...f4];var mt=function(){return mt=Object.assign||function(i){for(var a,s=1,l=arguments.length;s<l;s++){a=arguments[s];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(i[u]=a[u])}return i},mt.apply(this,arguments)};function Ul(e,i,a){if(a||arguments.length===2)for(var s=0,l=i.length,u;s<l;s++)(u||!(s in i))&&(u||(u=Array.prototype.slice.call(i,0,s)),u[s]=i[s]);return e.concat(u||Array.prototype.slice.call(i))}var ze="-ms-",ws="-moz-",Ae="-webkit-",t5="comm",ac="rule",g0="decl",M4="@import",i5="@keyframes",O4="@layer",n5=Math.abs,y0=String.fromCharCode,zf=Object.assign;function k4(e,i){return rt(e,0)^45?(((i<<2^rt(e,0))<<2^rt(e,1))<<2^rt(e,2))<<2^rt(e,3):0}function a5(e){return e.trim()}function _i(e,i){return(e=i.exec(e))?e[0]:e}function pe(e,i,a){return e.replace(i,a)}function El(e,i,a){return e.indexOf(i,a)}function rt(e,i){return e.charCodeAt(i)|0}function tr(e,i,a){return e.slice(i,a)}function fi(e){return e.length}function r5(e){return e.length}function xs(e,i){return i.push(e),e}function z4(e,i){return e.map(i).join("")}function g1(e,i){return e.filter(function(a){return!_i(a,i)})}var rc=1,ir=1,s5=0,Jt=0,Qe=0,ur="";function sc(e,i,a,s,l,u,f,p){return{value:e,root:i,parent:a,type:s,props:l,children:u,line:rc,column:ir,length:f,return:"",siblings:p}}function yn(e,i){return zf(sc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},i)}function Pa(e){for(;e.root;)e=yn(e.root,{children:[e]});xs(e,e.siblings)}function B4(){return Qe}function $4(){return Qe=Jt>0?rt(ur,--Jt):0,ir--,Qe===10&&(ir=1,rc--),Qe}function ai(){return Qe=Jt<s5?rt(ur,Jt++):0,ir++,Qe===10&&(ir=1,rc++),Qe}function In(){return rt(ur,Jt)}function Cl(){return Jt}function oc(e,i){return tr(ur,e,i)}function Bf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N4(e){return rc=ir=1,s5=fi(ur=e),Jt=0,[]}function L4(e){return ur="",e}function Ld(e){return a5(oc(Jt-1,$f(e===91?e+2:e===40?e+1:e)))}function V4(e){for(;(Qe=In())&&Qe<33;)ai();return Bf(e)>2||Bf(Qe)>3?"":" "}function _4(e,i){for(;--i&&ai()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return oc(e,Cl()+(i<6&&In()==32&&ai()==32))}function $f(e){for(;ai();)switch(Qe){case e:return Jt;case 34:case 39:e!==34&&e!==39&&$f(Qe);break;case 40:e===41&&$f(e);break;case 92:ai();break}return Jt}function H4(e,i){for(;ai()&&e+Qe!==57;)if(e+Qe===84&&In()===47)break;return"/*"+oc(i,Jt-1)+"*"+y0(e===47?e:ai())}function U4(e){for(;!Bf(In());)ai();return oc(e,Jt)}function P4(e){return L4(Rl("",null,null,null,[""],e=N4(e),0,[0],e))}function Rl(e,i,a,s,l,u,f,p,g){for(var m=0,y=0,v=f,S=0,A=0,T=0,k=1,B=1,O=1,H=0,M="",Y=l,N=u,K=s,I=M;B;)switch(T=H,H=ai()){case 40:if(T!=108&&rt(I,v-1)==58){El(I+=pe(Ld(H),"&","&\f"),"&\f",n5(m?p[m-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:I+=Ld(H);break;case 9:case 10:case 13:case 32:I+=V4(T);break;case 92:I+=_4(Cl()-1,7);continue;case 47:switch(In()){case 42:case 47:xs(F4(H4(ai(),Cl()),i,a,g),g);break;default:I+="/"}break;case 123*k:p[m++]=fi(I)*O;case 125*k:case 59:case 0:switch(H){case 0:case 125:B=0;case 59+y:O==-1&&(I=pe(I,/\f/g,"")),A>0&&fi(I)-v&&xs(A>32?x1(I+";",s,a,v-1,g):x1(pe(I," ","")+";",s,a,v-2,g),g);break;case 59:I+=";";default:if(xs(K=y1(I,i,a,m,y,l,p,M,Y=[],N=[],v,u),u),H===123)if(y===0)Rl(I,i,K,K,Y,u,v,p,N);else switch(S===99&&rt(I,3)===110?100:S){case 100:case 108:case 109:case 115:Rl(e,K,K,s&&xs(y1(e,K,K,0,0,l,p,M,l,Y=[],v,N),N),l,N,v,p,s?Y:N);break;default:Rl(I,K,K,K,[""],N,0,p,N)}}m=y=A=0,k=O=1,M=I="",v=f;break;case 58:v=1+fi(I),A=T;default:if(k<1){if(H==123)--k;else if(H==125&&k++==0&&$4()==125)continue}switch(I+=y0(H),H*k){case 38:O=y>0?1:(I+="\f",-1);break;case 44:p[m++]=(fi(I)-1)*O,O=1;break;case 64:In()===45&&(I+=Ld(ai())),S=In(),y=v=fi(M=I+=U4(Cl())),H++;break;case 45:T===45&&fi(I)==2&&(k=0)}}return u}function y1(e,i,a,s,l,u,f,p,g,m,y,v){for(var S=l-1,A=l===0?u:[""],T=r5(A),k=0,B=0,O=0;k<s;++k)for(var H=0,M=tr(e,S+1,S=n5(B=f[k])),Y=e;H<T;++H)(Y=a5(B>0?A[H]+" "+M:pe(M,/&\f/g,A[H])))&&(g[O++]=Y);return sc(e,i,a,l===0?ac:p,g,m,y,v)}function F4(e,i,a,s){return sc(e,i,a,t5,y0(B4()),tr(e,2,-2),0,s)}function x1(e,i,a,s,l){return sc(e,i,a,g0,tr(e,0,s),tr(e,s+1,-1),s,l)}function o5(e,i,a){switch(k4(e,i)){case 5103:return Ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+e+e;case 4789:return ws+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+e+ws+e+ze+e+e;case 5936:switch(rt(e,i+11)){case 114:return Ae+e+ze+pe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ae+e+ze+pe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ae+e+ze+pe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ae+e+ze+e+e;case 6165:return Ae+e+ze+"flex-"+e+e;case 5187:return Ae+e+pe(e,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+ze+"flex-$1$2")+e;case 5443:return Ae+e+ze+"flex-item-"+pe(e,/flex-|-self/g,"")+(_i(e,/flex-|baseline/)?"":ze+"grid-row-"+pe(e,/flex-|-self/g,""))+e;case 4675:return Ae+e+ze+"flex-line-pack"+pe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ae+e+ze+pe(e,"shrink","negative")+e;case 5292:return Ae+e+ze+pe(e,"basis","preferred-size")+e;case 6060:return Ae+"box-"+pe(e,"-grow","")+Ae+e+ze+pe(e,"grow","positive")+e;case 4554:return Ae+pe(e,/([^-])(transform)/g,"$1"+Ae+"$2")+e;case 6187:return pe(pe(pe(e,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),e,"")+e;case 5495:case 3959:return pe(e,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return pe(pe(e,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+e+e;case 4200:if(!_i(e,/flex-|baseline/))return ze+"grid-column-align"+tr(e,i)+e;break;case 2592:case 3360:return ze+pe(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(s,l){return i=l,_i(s.props,/grid-\w+-end/)})?~El(e+(a=a[i].value),"span",0)?e:ze+pe(e,"-start","")+e+ze+"grid-row-span:"+(~El(a,"span",0)?_i(a,/\d+/):+_i(a,/\d+/)-+_i(e,/\d+/))+";":ze+pe(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(s){return _i(s.props,/grid-\w+-start/)})?e:ze+pe(pe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return pe(e,/(.+)-inline(.+)/,Ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fi(e)-1-i>6)switch(rt(e,i+1)){case 109:if(rt(e,i+4)!==45)break;case 102:return pe(e,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+ws+(rt(e,i+3)==108?"$3":"$2-$3"))+e;case 115:return~El(e,"stretch",0)?o5(pe(e,"stretch","fill-available"),i,a)+e:e}break;case 5152:case 5920:return pe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,u,f,p,g,m){return ze+l+":"+u+m+(f?ze+l+"-span:"+(p?g:+g-+u)+m:"")+e});case 4949:if(rt(e,i+6)===121)return pe(e,":",":"+Ae)+e;break;case 6444:switch(rt(e,rt(e,14)===45?18:11)){case 120:return pe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(rt(e,14)===45?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+ze+"$2box$3")+e;case 100:return pe(e,":",":"+ze)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(e,"scroll-","scroll-snap-")+e}return e}function Pl(e,i){for(var a="",s=0;s<e.length;s++)a+=i(e[s],s,e,i)||"";return a}function q4(e,i,a,s){switch(e.type){case O4:if(e.children.length)break;case M4:case g0:return e.return=e.return||e.value;case t5:return"";case i5:return e.return=e.value+"{"+Pl(e.children,s)+"}";case ac:if(!fi(e.value=e.props.join(",")))return""}return fi(a=Pl(e.children,s))?e.return=e.value+"{"+a+"}":""}function Y4(e){var i=r5(e);return function(a,s,l,u){for(var f="",p=0;p<i;p++)f+=e[p](a,s,l,u)||"";return f}}function G4(e){return function(i){i.root||(i=i.return)&&e(i)}}function K4(e,i,a,s){if(e.length>-1&&!e.return)switch(e.type){case g0:e.return=o5(e.value,e.length,a);return;case i5:return Pl([yn(e,{value:pe(e.value,"@","@"+Ae)})],s);case ac:if(e.length)return z4(a=e.props,function(l){switch(_i(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pa(yn(e,{props:[pe(l,/:(read-\w+)/,":"+ws+"$1")]})),Pa(yn(e,{props:[l]})),zf(e,{props:g1(a,s)});break;case"::placeholder":Pa(yn(e,{props:[pe(l,/:(plac\w+)/,":"+Ae+"input-$1")]})),Pa(yn(e,{props:[pe(l,/:(plac\w+)/,":"+ws+"$1")]})),Pa(yn(e,{props:[pe(l,/:(plac\w+)/,ze+"input-$1")]})),Pa(yn(e,{props:[l]})),zf(e,{props:g1(a,s)});break}return""})}}var Z4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},nr=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",l5="active",c5="data-styled-version",lc="6.1.18",x0=`/*!sc*/
`,Fl=typeof window<"u"&&typeof document<"u",I4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),cc=Object.freeze([]),ar=Object.freeze({});function X4(e,i,a){return a===void 0&&(a=ar),e.theme!==a.theme&&e.theme||i||a.theme}var u5=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Q4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,J4=/(^-|-$)/g;function b1(e){return e.replace(Q4,"-").replace(J4,"")}var W4=/(a)(d)/gi,ll=52,v1=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nf(e){var i,a="";for(i=Math.abs(e);i>ll;i=i/ll|0)a=v1(i%ll)+a;return(v1(i%ll)+a).replace(W4,"$1-$2")}var Vd,d5=5381,Za=function(e,i){for(var a=i.length;a;)e=33*e^i.charCodeAt(--a);return e},f5=function(e){return Za(d5,e)};function e7(e){return Nf(f5(e)>>>0)}function t7(e){return e.displayName||e.name||"Component"}function _d(e){return typeof e=="string"&&!0}var h5=typeof Symbol=="function"&&Symbol.for,p5=h5?Symbol.for("react.memo"):60115,i7=h5?Symbol.for("react.forward_ref"):60112,n7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r7=((Vd={})[i7]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vd[p5]=m5,Vd);function w1(e){return("type"in(i=e)&&i.type.$$typeof)===p5?m5:"$$typeof"in e?r7[e.$$typeof]:n7;var i}var s7=Object.defineProperty,o7=Object.getOwnPropertyNames,S1=Object.getOwnPropertySymbols,l7=Object.getOwnPropertyDescriptor,c7=Object.getPrototypeOf,j1=Object.prototype;function g5(e,i,a){if(typeof i!="string"){if(j1){var s=c7(i);s&&s!==j1&&g5(e,s,a)}var l=o7(i);S1&&(l=l.concat(S1(i)));for(var u=w1(e),f=w1(i),p=0;p<l.length;++p){var g=l[p];if(!(g in a7||a&&a[g]||f&&g in f||u&&g in u)){var m=l7(i,g);try{s7(e,g,m)}catch{}}}}return e}function ea(e){return typeof e=="function"}function b0(e){return typeof e=="object"&&"styledComponentId"in e}function Yn(e,i){return e&&i?"".concat(e," ").concat(i):e||i||""}function A1(e,i){if(e.length===0)return"";for(var a=e[0],s=1;s<e.length;s++)a+=e[s];return a}function Ds(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Lf(e,i,a){if(a===void 0&&(a=!1),!a&&!Ds(e)&&!Array.isArray(e))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)e[s]=Lf(e[s],i[s]);else if(Ds(i))for(var s in i)e[s]=Lf(e[s],i[s]);return e}function v0(e,i){Object.defineProperty(e,"toString",{value:i})}function ta(e){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var u7=function(){function e(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return e.prototype.indexOfGroup=function(i){for(var a=0,s=0;s<i;s++)a+=this.groupSizes[s];return a},e.prototype.insertRules=function(i,a){if(i>=this.groupSizes.length){for(var s=this.groupSizes,l=s.length,u=l;i>=u;)if((u<<=1)<0)throw ta(16,"".concat(i));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var f=l;f<u;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(i+1),g=(f=0,a.length);f<g;f++)this.tag.insertRule(p,a[f])&&(this.groupSizes[i]++,p++)},e.prototype.clearGroup=function(i){if(i<this.length){var a=this.groupSizes[i],s=this.indexOfGroup(i),l=s+a;this.groupSizes[i]=0;for(var u=s;u<l;u++)this.tag.deleteRule(s)}},e.prototype.getGroup=function(i){var a="";if(i>=this.length||this.groupSizes[i]===0)return a;for(var s=this.groupSizes[i],l=this.indexOfGroup(i),u=l+s,f=l;f<u;f++)a+="".concat(this.tag.getRule(f)).concat(x0);return a},e}(),Dl=new Map,ql=new Map,Ml=1,cl=function(e){if(Dl.has(e))return Dl.get(e);for(;ql.has(Ml);)Ml++;var i=Ml++;return Dl.set(e,i),ql.set(i,e),i},d7=function(e,i){Ml=i+1,Dl.set(e,i),ql.set(i,e)},f7="style[".concat(nr,"][").concat(c5,'="').concat(lc,'"]'),h7=new RegExp("^".concat(nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),p7=function(e,i,a){for(var s,l=a.split(","),u=0,f=l.length;u<f;u++)(s=l[u])&&e.registerName(i,s)},m7=function(e,i){for(var a,s=((a=i.textContent)!==null&&a!==void 0?a:"").split(x0),l=[],u=0,f=s.length;u<f;u++){var p=s[u].trim();if(p){var g=p.match(h7);if(g){var m=0|parseInt(g[1],10),y=g[2];m!==0&&(d7(y,m),p7(e,y,g[3]),e.getTag().insertRules(m,l)),l.length=0}else l.push(p)}}},T1=function(e){for(var i=document.querySelectorAll(f7),a=0,s=i.length;a<s;a++){var l=i[a];l&&l.getAttribute(nr)!==l5&&(m7(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function g7(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var y5=function(e){var i=document.head,a=e||i,s=document.createElement("style"),l=function(p){var g=Array.from(p.querySelectorAll("style[".concat(nr,"]")));return g[g.length-1]}(a),u=l!==void 0?l.nextSibling:null;s.setAttribute(nr,l5),s.setAttribute(c5,lc);var f=g7();return f&&s.setAttribute("nonce",f),a.insertBefore(s,u),s},y7=function(){function e(i){this.element=y5(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var s=document.styleSheets,l=0,u=s.length;l<u;l++){var f=s[l];if(f.ownerNode===a)return f}throw ta(17)}(this.element),this.length=0}return e.prototype.insertRule=function(i,a){try{return this.sheet.insertRule(a,i),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},e.prototype.getRule=function(i){var a=this.sheet.cssRules[i];return a&&a.cssText?a.cssText:""},e}(),x7=function(){function e(i){this.element=y5(i),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(i,a){if(i<=this.length&&i>=0){var s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},e.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},e}(),b7=function(){function e(i){this.rules=[],this.length=0}return e.prototype.insertRule=function(i,a){return i<=this.length&&(this.rules.splice(i,0,a),this.length++,!0)},e.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},e.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},e}(),E1=Fl,v7={isServer:!Fl,useCSSOMInjection:!I4},x5=function(){function e(i,a,s){i===void 0&&(i=ar),a===void 0&&(a={});var l=this;this.options=mt(mt({},v7),i),this.gs=a,this.names=new Map(s),this.server=!!i.isServer,!this.server&&Fl&&E1&&(E1=!1,T1(this)),v0(this,function(){return function(u){for(var f=u.getTag(),p=f.length,g="",m=function(v){var S=function(O){return ql.get(O)}(v);if(S===void 0)return"continue";var A=u.names.get(S),T=f.getGroup(v);if(A===void 0||!A.size||T.length===0)return"continue";var k="".concat(nr,".g").concat(v,'[id="').concat(S,'"]'),B="";A!==void 0&&A.forEach(function(O){O.length>0&&(B+="".concat(O,","))}),g+="".concat(T).concat(k,'{content:"').concat(B,'"}').concat(x0)},y=0;y<p;y++)m(y);return g}(l)})}return e.registerId=function(i){return cl(i)},e.prototype.rehydrate=function(){!this.server&&Fl&&T1(this)},e.prototype.reconstructWithOptions=function(i,a){return a===void 0&&(a=!0),new e(mt(mt({},this.options),i),this.gs,a&&this.names||void 0)},e.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(i=function(a){var s=a.useCSSOMInjection,l=a.target;return a.isServer?new b7(l):s?new y7(l):new x7(l)}(this.options),new u7(i)));var i},e.prototype.hasNameForId=function(i,a){return this.names.has(i)&&this.names.get(i).has(a)},e.prototype.registerName=function(i,a){if(cl(i),this.names.has(i))this.names.get(i).add(a);else{var s=new Set;s.add(a),this.names.set(i,s)}},e.prototype.insertRules=function(i,a,s){this.registerName(i,a),this.getTag().insertRules(cl(i),s)},e.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},e.prototype.clearRules=function(i){this.getTag().clearGroup(cl(i)),this.clearNames(i)},e.prototype.clearTag=function(){this.tag=void 0},e}(),w7=/&/g,S7=/^\s*\/\/.*$/gm;function b5(e,i){return e.map(function(a){return a.type==="rule"&&(a.value="".concat(i," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(i," ")),a.props=a.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=b5(a.children,i)),a})}function j7(e){var i,a,s,l=ar,u=l.options,f=u===void 0?ar:u,p=l.plugins,g=p===void 0?cc:p,m=function(S,A,T){return T.startsWith(a)&&T.endsWith(a)&&T.replaceAll(a,"").length>0?".".concat(i):S},y=g.slice();y.push(function(S){S.type===ac&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(w7,a).replace(s,m))}),f.prefix&&y.push(K4),y.push(q4);var v=function(S,A,T,k){A===void 0&&(A=""),T===void 0&&(T=""),k===void 0&&(k="&"),i=k,a=A,s=new RegExp("\\".concat(a,"\\b"),"g");var B=S.replace(S7,""),O=P4(T||A?"".concat(T," ").concat(A," { ").concat(B," }"):B);f.namespace&&(O=b5(O,f.namespace));var H=[];return Pl(O,Y4(y.concat(G4(function(M){return H.push(M)})))),H};return v.hash=g.length?g.reduce(function(S,A){return A.name||ta(15),Za(S,A.name)},d5).toString():"",v}var A7=new x5,Vf=j7(),v5=vt.createContext({shouldForwardProp:void 0,styleSheet:A7,stylis:Vf});v5.Consumer;vt.createContext(void 0);function C1(){return w.useContext(v5)}var T7=function(){function e(i,a){var s=this;this.inject=function(l,u){u===void 0&&(u=Vf);var f=s.name+u.hash;l.hasNameForId(s.id,f)||l.insertRules(s.id,f,u(s.rules,f,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=a,v0(this,function(){throw ta(12,String(s.name))})}return e.prototype.getName=function(i){return i===void 0&&(i=Vf),this.name+i.hash},e}(),E7=function(e){return e>="A"&&e<="Z"};function R1(e){for(var i="",a=0;a<e.length;a++){var s=e[a];if(a===1&&s==="-"&&e[0]==="-")return e;E7(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var w5=function(e){return e==null||e===!1||e===""},S5=function(e){var i,a,s=[];for(var l in e){var u=e[l];e.hasOwnProperty(l)&&!w5(u)&&(Array.isArray(u)&&u.isCss||ea(u)?s.push("".concat(R1(l),":"),u,";"):Ds(u)?s.push.apply(s,Ul(Ul(["".concat(l," {")],S5(u),!1),["}"],!1)):s.push("".concat(R1(l),": ").concat((i=l,(a=u)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||i in Z4||i.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return s};function Xn(e,i,a,s){if(w5(e))return[];if(b0(e))return[".".concat(e.styledComponentId)];if(ea(e)){if(!ea(u=e)||u.prototype&&u.prototype.isReactComponent||!i)return[e];var l=e(i);return Xn(l,i,a,s)}var u;return e instanceof T7?a?(e.inject(a,s),[e.getName(s)]):[e]:Ds(e)?S5(e):Array.isArray(e)?Array.prototype.concat.apply(cc,e.map(function(f){return Xn(f,i,a,s)})):[e.toString()]}function C7(e){for(var i=0;i<e.length;i+=1){var a=e[i];if(ea(a)&&!b0(a))return!1}return!0}var R7=f5(lc),D7=function(){function e(i,a,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&C7(i),this.componentId=a,this.baseHash=Za(R7,a),this.baseStyle=s,x5.registerId(a)}return e.prototype.generateAndInjectStyles=function(i,a,s){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,a,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))l=Yn(l,this.staticRulesId);else{var u=A1(Xn(this.rules,i,a,s)),f=Nf(Za(this.baseHash,u)>>>0);if(!a.hasNameForId(this.componentId,f)){var p=s(u,".".concat(f),void 0,this.componentId);a.insertRules(this.componentId,f,p)}l=Yn(l,f),this.staticRulesId=f}else{for(var g=Za(this.baseHash,s.hash),m="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")m+=v;else if(v){var S=A1(Xn(v,i,a,s));g=Za(g,S+y),m+=S}}if(m){var A=Nf(g>>>0);a.hasNameForId(this.componentId,A)||a.insertRules(this.componentId,A,s(m,".".concat(A),void 0,this.componentId)),l=Yn(l,A)}}return l},e}(),Yl=vt.createContext(void 0);Yl.Consumer;function M7(e){var i=vt.useContext(Yl),a=w.useMemo(function(){return function(s,l){if(!s)throw ta(14);if(ea(s)){var u=s(l);return u}if(Array.isArray(s)||typeof s!="object")throw ta(8);return l?mt(mt({},l),s):s}(e.theme,i)},[e.theme,i]);return e.children?vt.createElement(Yl.Provider,{value:a},e.children):null}var Hd={};function O7(e,i,a){var s=b0(e),l=e,u=!_d(e),f=i.attrs,p=f===void 0?cc:f,g=i.componentId,m=g===void 0?function(Y,N){var K=typeof Y!="string"?"sc":b1(Y);Hd[K]=(Hd[K]||0)+1;var I="".concat(K,"-").concat(e7(lc+K+Hd[K]));return N?"".concat(N,"-").concat(I):I}(i.displayName,i.parentComponentId):g,y=i.displayName,v=y===void 0?function(Y){return _d(Y)?"styled.".concat(Y):"Styled(".concat(t7(Y),")")}(e):y,S=i.displayName&&i.componentId?"".concat(b1(i.displayName),"-").concat(i.componentId):i.componentId||m,A=s&&l.attrs?l.attrs.concat(p).filter(Boolean):p,T=i.shouldForwardProp;if(s&&l.shouldForwardProp){var k=l.shouldForwardProp;if(i.shouldForwardProp){var B=i.shouldForwardProp;T=function(Y,N){return k(Y,N)&&B(Y,N)}}else T=k}var O=new D7(a,S,s?l.componentStyle:void 0);function H(Y,N){return function(K,I,X){var W=K.attrs,ie=K.componentStyle,ve=K.defaultProps,Ne=K.foldedComponentIds,Ue=K.styledComponentId,Be=K.target,Pe=vt.useContext(Yl),U=C1(),Z=K.shouldForwardProp||U.shouldForwardProp,ee=X4(I,Pe,ve)||ar,ue=function(he,se,et){for(var je,ut=mt(mt({},se),{className:void 0,theme:et}),jn=0;jn<he.length;jn+=1){var vi=ea(je=he[jn])?je(ut):je;for(var Vt in vi)ut[Vt]=Vt==="className"?Yn(ut[Vt],vi[Vt]):Vt==="style"?mt(mt({},ut[Vt]),vi[Vt]):vi[Vt]}return se.className&&(ut.className=Yn(ut.className,se.className)),ut}(W,I,ee),R=ue.as||Be,P={};for(var Q in ue)ue[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&ue.theme===ee||(Q==="forwardedAs"?P.as=ue.forwardedAs:Z&&!Z(Q,R)||(P[Q]=ue[Q]));var J=function(he,se){var et=C1(),je=he.generateAndInjectStyles(se,et.styleSheet,et.stylis);return je}(ie,ue),ne=Yn(Ne,Ue);return J&&(ne+=" "+J),ue.className&&(ne+=" "+ue.className),P[_d(R)&&!u5.has(R)?"class":"className"]=ne,X&&(P.ref=X),w.createElement(R,P)}(M,Y,N)}H.displayName=v;var M=vt.forwardRef(H);return M.attrs=A,M.componentStyle=O,M.displayName=v,M.shouldForwardProp=T,M.foldedComponentIds=s?Yn(l.foldedComponentIds,l.styledComponentId):"",M.styledComponentId=S,M.target=s?l.target:e,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Y){this._foldedDefaultProps=s?function(N){for(var K=[],I=1;I<arguments.length;I++)K[I-1]=arguments[I];for(var X=0,W=K;X<W.length;X++)Lf(N,W[X],!0);return N}({},l.defaultProps,Y):Y}}),v0(M,function(){return".".concat(M.styledComponentId)}),u&&g5(M,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function D1(e,i){for(var a=[e[0]],s=0,l=i.length;s<l;s+=1)a.push(i[s],e[s+1]);return a}var M1=function(e){return Object.assign(e,{isCss:!0})};function k7(e){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];if(ea(e)||Ds(e))return M1(Xn(D1(cc,Ul([e],i,!0))));var s=e;return i.length===0&&s.length===1&&typeof s[0]=="string"?Xn(s):M1(Xn(D1(s,i)))}function _f(e,i,a){if(a===void 0&&(a=ar),!i)throw ta(1,i);var s=function(l){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return e(i,a,k7.apply(void 0,Ul([l],u,!1)))};return s.attrs=function(l){return _f(e,i,mt(mt({},a),{attrs:Array.prototype.concat(a.attrs,l).filter(Boolean)}))},s.withConfig=function(l){return _f(e,i,mt(mt({},a),l))},s}var j5=function(e){return _f(O7,e)},b=j5;u5.forEach(function(e){b[e]=j5(e)});const z7=(e,i,a,s)=>{var u,f,p,g;const l=[a,{code:i,...s||{}}];if((f=(u=e==null?void 0:e.services)==null?void 0:u.logger)!=null&&f.forward)return e.services.logger.forward(l,"warn","react-i18next::",!0);Qn(l[0])&&(l[0]=`react-i18next:: ${l[0]}`),(g=(p=e==null?void 0:e.services)==null?void 0:p.logger)!=null&&g.warn?e.services.logger.warn(...l):console!=null&&console.warn&&console.warn(...l)},O1={},Hf=(e,i,a,s)=>{Qn(a)&&O1[a]||(Qn(a)&&(O1[a]=new Date),z7(e,i,a,s))},A5=(e,i)=>()=>{if(e.isInitialized)i();else{const a=()=>{setTimeout(()=>{e.off("initialized",a)},0),i()};e.on("initialized",a)}},Uf=(e,i,a)=>{e.loadNamespaces(i,A5(e,a))},k1=(e,i,a,s)=>{if(Qn(a)&&(a=[a]),e.options.preload&&e.options.preload.indexOf(i)>-1)return Uf(e,a,s);a.forEach(l=>{e.options.ns.indexOf(l)<0&&e.options.ns.push(l)}),e.loadLanguages(i,A5(e,s))},B7=(e,i,a={})=>!i.languages||!i.languages.length?(Hf(i,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:i.languages}),!0):i.hasLoadedNamespace(e,{lng:a.lng,precheck:(s,l)=>{var u;if(((u=a.bindI18n)==null?void 0:u.indexOf("languageChanging"))>-1&&s.services.backendConnector.backend&&s.isLanguageChangingTo&&!l(s.isLanguageChangingTo,e))return!1}}),Qn=e=>typeof e=="string",$7=e=>typeof e=="object"&&e!==null,N7=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,L7={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},V7=e=>L7[e],_7=e=>e.replace(N7,V7);let Pf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:_7};const H7=(e={})=>{Pf={...Pf,...e}},U7=()=>Pf;let T5;const P7=e=>{T5=e},F7=()=>T5,q7={type:"3rdParty",init(e){H7(e.options.react),P7(e)}},Y7=w.createContext();class G7{constructor(){this.usedNamespaces={}}addUsedNamespaces(i){i.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const K7=(e,i)=>{const a=w.useRef();return w.useEffect(()=>{a.current=e},[e,i]),a.current},E5=(e,i,a,s)=>e.getFixedT(i,a,s),Z7=(e,i,a,s)=>w.useCallback(E5(e,i,a,s),[e,i,a,s]),ke=(e,i={})=>{var Y,N,K,I;const{i18n:a}=i,{i18n:s,defaultNS:l}=w.useContext(Y7)||{},u=a||s||F7();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new G7),!u){Hf(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const X=(ie,ve)=>Qn(ve)?ve:$7(ve)&&Qn(ve.defaultValue)?ve.defaultValue:Array.isArray(ie)?ie[ie.length-1]:ie,W=[X,{},!1];return W.t=X,W.i18n={},W.ready=!1,W}(Y=u.options.react)!=null&&Y.wait&&Hf(u,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...U7(),...u.options.react,...i},{useSuspense:p,keyPrefix:g}=f;let m=l||((N=u.options)==null?void 0:N.defaultNS);m=Qn(m)?[m]:m||["translation"],(I=(K=u.reportNamespaces).addUsedNamespaces)==null||I.call(K,m);const y=(u.isInitialized||u.initializedStoreOnce)&&m.every(X=>B7(X,u,f)),v=Z7(u,i.lng||null,f.nsMode==="fallback"?m:m[0],g),S=()=>v,A=()=>E5(u,i.lng||null,f.nsMode==="fallback"?m:m[0],g),[T,k]=w.useState(S);let B=m.join();i.lng&&(B=`${i.lng}${B}`);const O=K7(B),H=w.useRef(!0);w.useEffect(()=>{const{bindI18n:X,bindI18nStore:W}=f;H.current=!0,!y&&!p&&(i.lng?k1(u,i.lng,m,()=>{H.current&&k(A)}):Uf(u,m,()=>{H.current&&k(A)})),y&&O&&O!==B&&H.current&&k(A);const ie=()=>{H.current&&k(A)};return X&&(u==null||u.on(X,ie)),W&&(u==null||u.store.on(W,ie)),()=>{H.current=!1,u&&(X==null||X.split(" ").forEach(ve=>u.off(ve,ie))),W&&u&&W.split(" ").forEach(ve=>u.store.off(ve,ie))}},[u,B]),w.useEffect(()=>{H.current&&y&&k(S)},[u,g,y]);const M=[T,u,y];if(M.t=T,M.i18n=u,M.ready=y,y||!y&&!p)return M;throw new Promise(X=>{i.lng?k1(u,i.lng,m,()=>X()):Uf(u,m,()=>X())})},de=e=>typeof e=="string",gs=()=>{let e,i;const a=new Promise((s,l)=>{e=s,i=l});return a.resolve=e,a.reject=i,a},z1=e=>e==null?"":""+e,I7=(e,i,a)=>{e.forEach(s=>{i[s]&&(a[s]=i[s])})},X7=/###/g,B1=e=>e&&e.indexOf("###")>-1?e.replace(X7,"."):e,$1=e=>!e||de(e),Ss=(e,i,a)=>{const s=de(i)?i.split("."):i;let l=0;for(;l<s.length-1;){if($1(e))return{};const u=B1(s[l]);!e[u]&&a&&(e[u]=new a),Object.prototype.hasOwnProperty.call(e,u)?e=e[u]:e={},++l}return $1(e)?{}:{obj:e,k:B1(s[l])}},N1=(e,i,a)=>{const{obj:s,k:l}=Ss(e,i,Object);if(s!==void 0||i.length===1){s[l]=a;return}let u=i[i.length-1],f=i.slice(0,i.length-1),p=Ss(e,f,Object);for(;p.obj===void 0&&f.length;)u=`${f[f.length-1]}.${u}`,f=f.slice(0,f.length-1),p=Ss(e,f,Object),p!=null&&p.obj&&typeof p.obj[`${p.k}.${u}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${u}`]=a},Q7=(e,i,a,s)=>{const{obj:l,k:u}=Ss(e,i,Object);l[u]=l[u]||[],l[u].push(a)},Gl=(e,i)=>{const{obj:a,k:s}=Ss(e,i);if(a&&Object.prototype.hasOwnProperty.call(a,s))return a[s]},J7=(e,i,a)=>{const s=Gl(e,a);return s!==void 0?s:Gl(i,a)},C5=(e,i,a)=>{for(const s in i)s!=="__proto__"&&s!=="constructor"&&(s in e?de(e[s])||e[s]instanceof String||de(i[s])||i[s]instanceof String?a&&(e[s]=i[s]):C5(e[s],i[s],a):e[s]=i[s]);return e},Fa=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var W7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const e6=e=>de(e)?e.replace(/[&<>"'\/]/g,i=>W7[i]):e;class t6{constructor(i){this.capacity=i,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(i){const a=this.regExpMap.get(i);if(a!==void 0)return a;const s=new RegExp(i);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(i,s),this.regExpQueue.push(i),s}}const i6=[" ",",","?","!",";"],n6=new t6(20),a6=(e,i,a)=>{i=i||"",a=a||"";const s=i6.filter(f=>i.indexOf(f)<0&&a.indexOf(f)<0);if(s.length===0)return!0;const l=n6.getRegExp(`(${s.map(f=>f==="?"?"\\?":f).join("|")})`);let u=!l.test(e);if(!u){const f=e.indexOf(a);f>0&&!l.test(e.substring(0,f))&&(u=!0)}return u},Ff=(e,i,a=".")=>{if(!e)return;if(e[i])return Object.prototype.hasOwnProperty.call(e,i)?e[i]:void 0;const s=i.split(a);let l=e;for(let u=0;u<s.length;){if(!l||typeof l!="object")return;let f,p="";for(let g=u;g<s.length;++g)if(g!==u&&(p+=a),p+=s[g],f=l[p],f!==void 0){if(["string","number","boolean"].indexOf(typeof f)>-1&&g<s.length-1)continue;u+=g-u+1;break}l=f}return l},Ms=e=>e==null?void 0:e.replace("_","-"),r6={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,i){var a,s;(s=(a=console==null?void 0:console[e])==null?void 0:a.apply)==null||s.call(a,console,i)}};class Kl{constructor(i,a={}){this.init(i,a)}init(i,a={}){this.prefix=a.prefix||"i18next:",this.logger=i||r6,this.options=a,this.debug=a.debug}log(...i){return this.forward(i,"log","",!0)}warn(...i){return this.forward(i,"warn","",!0)}error(...i){return this.forward(i,"error","")}deprecate(...i){return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(i,a,s,l){return l&&!this.debug?null:(de(i[0])&&(i[0]=`${s}${this.prefix} ${i[0]}`),this.logger[a](i))}create(i){return new Kl(this.logger,{prefix:`${this.prefix}:${i}:`,...this.options})}clone(i){return i=i||this.options,i.prefix=i.prefix||this.prefix,new Kl(this.logger,i)}}var hi=new Kl;class uc{constructor(){this.observers={}}on(i,a){return i.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const l=this.observers[s].get(a)||0;this.observers[s].set(a,l+1)}),this}off(i,a){if(this.observers[i]){if(!a){delete this.observers[i];return}this.observers[i].delete(a)}}emit(i,...a){this.observers[i]&&Array.from(this.observers[i].entries()).forEach(([l,u])=>{for(let f=0;f<u;f++)l(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([l,u])=>{for(let f=0;f<u;f++)l.apply(l,[i,...a])})}}class L1 extends uc{constructor(i,a={ns:["translation"],defaultNS:"translation"}){super(),this.data=i||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}removeNamespaces(i){const a=this.options.ns.indexOf(i);a>-1&&this.options.ns.splice(a,1)}getResource(i,a,s,l={}){var m,y;const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,f=l.ignoreJSONStructure!==void 0?l.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;i.indexOf(".")>-1?p=i.split("."):(p=[i,a],s&&(Array.isArray(s)?p.push(...s):de(s)&&u?p.push(...s.split(u)):p.push(s)));const g=Gl(this.data,p);return!g&&!a&&!s&&i.indexOf(".")>-1&&(i=p[0],a=p[1],s=p.slice(2).join(".")),g||!f||!de(s)?g:Ff((y=(m=this.data)==null?void 0:m[i])==null?void 0:y[a],s,u)}addResource(i,a,s,l,u={silent:!1}){const f=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let p=[i,a];s&&(p=p.concat(f?s.split(f):s)),i.indexOf(".")>-1&&(p=i.split("."),l=a,a=p[1]),this.addNamespaces(a),N1(this.data,p,l),u.silent||this.emit("added",i,a,s,l)}addResources(i,a,s,l={silent:!1}){for(const u in s)(de(s[u])||Array.isArray(s[u]))&&this.addResource(i,a,u,s[u],{silent:!0});l.silent||this.emit("added",i,a,s)}addResourceBundle(i,a,s,l,u,f={silent:!1,skipCopy:!1}){let p=[i,a];i.indexOf(".")>-1&&(p=i.split("."),l=s,s=a,a=p[1]),this.addNamespaces(a);let g=Gl(this.data,p)||{};f.skipCopy||(s=JSON.parse(JSON.stringify(s))),l?C5(g,s,u):g={...g,...s},N1(this.data,p,g),f.silent||this.emit("added",i,a,s)}removeResourceBundle(i,a){this.hasResourceBundle(i,a)&&delete this.data[i][a],this.removeNamespaces(a),this.emit("removed",i,a)}hasResourceBundle(i,a){return this.getResource(i,a)!==void 0}getResourceBundle(i,a){return a||(a=this.options.defaultNS),this.getResource(i,a)}getDataByLanguage(i){return this.data[i]}hasLanguageSomeTranslations(i){const a=this.getDataByLanguage(i);return!!(a&&Object.keys(a)||[]).find(l=>a[l]&&Object.keys(a[l]).length>0)}toJSON(){return this.data}}var R5={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,i,a,s,l){return e.forEach(u=>{var f;i=((f=this.processors[u])==null?void 0:f.process(i,a,s,l))??i}),i}};const V1={},_1=e=>!de(e)&&typeof e!="boolean"&&typeof e!="number";class Zl extends uc{constructor(i,a={}){super(),I7(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],i,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=hi.create("translator")}changeLanguage(i){i&&(this.language=i)}exists(i,a={interpolation:{}}){const s={...a};if(i==null)return!1;const l=this.resolve(i,s);return(l==null?void 0:l.res)!==void 0}extractFromKey(i,a){let s=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const l=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let u=a.ns||this.options.defaultNS||[];const f=s&&i.indexOf(s)>-1,p=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!a6(i,s,l);if(f&&!p){const g=i.match(this.interpolator.nestingRegexp);if(g&&g.length>0)return{key:i,namespaces:de(u)?[u]:u};const m=i.split(s);(s!==l||s===l&&this.options.ns.indexOf(m[0])>-1)&&(u=m.shift()),i=m.join(l)}return{key:i,namespaces:de(u)?[u]:u}}translate(i,a,s){let l=typeof a=="object"?{...a}:a;if(typeof l!="object"&&this.options.overloadTranslationOptionHandler&&(l=this.options.overloadTranslationOptionHandler(arguments)),typeof options=="object"&&(l={...l}),l||(l={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);const u=l.returnDetails!==void 0?l.returnDetails:this.options.returnDetails,f=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,{key:p,namespaces:g}=this.extractFromKey(i[i.length-1],l),m=g[g.length-1];let y=l.nsSeparator!==void 0?l.nsSeparator:this.options.nsSeparator;y===void 0&&(y=":");const v=l.lng||this.language,S=l.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((v==null?void 0:v.toLowerCase())==="cimode")return S?u?{res:`${m}${y}${p}`,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:m,usedParams:this.getUsedParamsDetails(l)}:`${m}${y}${p}`:u?{res:p,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:m,usedParams:this.getUsedParamsDetails(l)}:p;const A=this.resolve(i,l);let T=A==null?void 0:A.res;const k=(A==null?void 0:A.usedKey)||p,B=(A==null?void 0:A.exactUsedKey)||p,O=["[object Number]","[object Function]","[object RegExp]"],H=l.joinArrays!==void 0?l.joinArrays:this.options.joinArrays,M=!this.i18nFormat||this.i18nFormat.handleAsObject,Y=l.count!==void 0&&!de(l.count),N=Zl.hasDefaultValue(l),K=Y?this.pluralResolver.getSuffix(v,l.count,l):"",I=l.ordinal&&Y?this.pluralResolver.getSuffix(v,l.count,{ordinal:!1}):"",X=Y&&!l.ordinal&&l.count===0,W=X&&l[`defaultValue${this.options.pluralSeparator}zero`]||l[`defaultValue${K}`]||l[`defaultValue${I}`]||l.defaultValue;let ie=T;M&&!T&&N&&(ie=W);const ve=_1(ie),Ne=Object.prototype.toString.apply(ie);if(M&&ie&&ve&&O.indexOf(Ne)<0&&!(de(H)&&Array.isArray(ie))){if(!l.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const Ue=this.options.returnedObjectHandler?this.options.returnedObjectHandler(k,ie,{...l,ns:g}):`key '${p} (${this.language})' returned an object instead of string.`;return u?(A.res=Ue,A.usedParams=this.getUsedParamsDetails(l),A):Ue}if(f){const Ue=Array.isArray(ie),Be=Ue?[]:{},Pe=Ue?B:k;for(const U in ie)if(Object.prototype.hasOwnProperty.call(ie,U)){const Z=`${Pe}${f}${U}`;N&&!T?Be[U]=this.translate(Z,{...l,defaultValue:_1(W)?W[U]:void 0,joinArrays:!1,ns:g}):Be[U]=this.translate(Z,{...l,joinArrays:!1,ns:g}),Be[U]===Z&&(Be[U]=ie[U])}T=Be}}else if(M&&de(H)&&Array.isArray(T))T=T.join(H),T&&(T=this.extendTranslation(T,i,l,s));else{let Ue=!1,Be=!1;!this.isValidLookup(T)&&N&&(Ue=!0,T=W),this.isValidLookup(T)||(Be=!0,T=p);const U=(l.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&Be?void 0:T,Z=N&&W!==T&&this.options.updateMissing;if(Be||Ue||Z){if(this.logger.log(Z?"updateKey":"missingKey",v,m,p,Z?W:T),f){const P=this.resolve(p,{...l,keySeparator:!1});P&&P.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ee=[];const ue=this.languageUtils.getFallbackCodes(this.options.fallbackLng,l.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ue&&ue[0])for(let P=0;P<ue.length;P++)ee.push(ue[P]);else this.options.saveMissingTo==="all"?ee=this.languageUtils.toResolveHierarchy(l.lng||this.language):ee.push(l.lng||this.language);const R=(P,Q,J)=>{var he;const ne=N&&J!==T?J:U;this.options.missingKeyHandler?this.options.missingKeyHandler(P,m,Q,ne,Z,l):(he=this.backendConnector)!=null&&he.saveMissing&&this.backendConnector.saveMissing(P,m,Q,ne,Z,l),this.emit("missingKey",P,m,Q,T)};this.options.saveMissing&&(this.options.saveMissingPlurals&&Y?ee.forEach(P=>{const Q=this.pluralResolver.getSuffixes(P,l);X&&l[`defaultValue${this.options.pluralSeparator}zero`]&&Q.indexOf(`${this.options.pluralSeparator}zero`)<0&&Q.push(`${this.options.pluralSeparator}zero`),Q.forEach(J=>{R([P],p+J,l[`defaultValue${J}`]||W)})}):R(ee,p,W))}T=this.extendTranslation(T,i,l,A,s),Be&&T===p&&this.options.appendNamespaceToMissingKey&&(T=`${m}${y}${p}`),(Be||Ue)&&this.options.parseMissingKeyHandler&&(T=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${m}${y}${p}`:p,Ue?T:void 0,l))}return u?(A.res=T,A.usedParams=this.getUsedParamsDetails(l),A):T}extendTranslation(i,a,s,l,u){var g,m;if((g=this.i18nFormat)!=null&&g.parse)i=this.i18nFormat.parse(i,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||l.usedLng,l.usedNS,l.usedKey,{resolved:l});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const y=de(i)&&(((m=s==null?void 0:s.interpolation)==null?void 0:m.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let v;if(y){const A=i.match(this.interpolator.nestingRegexp);v=A&&A.length}let S=s.replace&&!de(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),i=this.interpolator.interpolate(i,S,s.lng||this.language||l.usedLng,s),y){const A=i.match(this.interpolator.nestingRegexp),T=A&&A.length;v<T&&(s.nest=!1)}!s.lng&&l&&l.res&&(s.lng=this.language||l.usedLng),s.nest!==!1&&(i=this.interpolator.nest(i,(...A)=>(u==null?void 0:u[0])===A[0]&&!s.context?(this.logger.warn(`It seems you are nesting recursively key: ${A[0]} in key: ${a[0]}`),null):this.translate(...A,a),s)),s.interpolation&&this.interpolator.reset()}const f=s.postProcess||this.options.postProcess,p=de(f)?[f]:f;return i!=null&&(p!=null&&p.length)&&s.applyPostProcessor!==!1&&(i=R5.handle(p,i,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...l,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),i}resolve(i,a={}){let s,l,u,f,p;return de(i)&&(i=[i]),i.forEach(g=>{if(this.isValidLookup(s))return;const m=this.extractFromKey(g,a),y=m.key;l=y;let v=m.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const S=a.count!==void 0&&!de(a.count),A=S&&!a.ordinal&&a.count===0,T=a.context!==void 0&&(de(a.context)||typeof a.context=="number")&&a.context!=="",k=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);v.forEach(B=>{var O,H;this.isValidLookup(s)||(p=B,!V1[`${k[0]}-${B}`]&&((O=this.utils)!=null&&O.hasLoadedNamespace)&&!((H=this.utils)!=null&&H.hasLoadedNamespace(p))&&(V1[`${k[0]}-${B}`]=!0,this.logger.warn(`key "${l}" for languages "${k.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(M=>{var K;if(this.isValidLookup(s))return;f=M;const Y=[y];if((K=this.i18nFormat)!=null&&K.addLookupKeys)this.i18nFormat.addLookupKeys(Y,y,M,B,a);else{let I;S&&(I=this.pluralResolver.getSuffix(M,a.count,a));const X=`${this.options.pluralSeparator}zero`,W=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(S&&(Y.push(y+I),a.ordinal&&I.indexOf(W)===0&&Y.push(y+I.replace(W,this.options.pluralSeparator)),A&&Y.push(y+X)),T){const ie=`${y}${this.options.contextSeparator}${a.context}`;Y.push(ie),S&&(Y.push(ie+I),a.ordinal&&I.indexOf(W)===0&&Y.push(ie+I.replace(W,this.options.pluralSeparator)),A&&Y.push(ie+X))}}let N;for(;N=Y.pop();)this.isValidLookup(s)||(u=N,s=this.getResource(M,B,N,a))}))})}),{res:s,usedKey:l,exactUsedKey:u,usedLng:f,usedNS:p}}isValidLookup(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}getResource(i,a,s,l={}){var u;return(u=this.i18nFormat)!=null&&u.getResource?this.i18nFormat.getResource(i,a,s,l):this.resourceStore.getResource(i,a,s,l)}getUsedParamsDetails(i={}){const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=i.replace&&!de(i.replace);let l=s?i.replace:i;if(s&&typeof i.count<"u"&&(l.count=i.count),this.options.interpolation.defaultVariables&&(l={...this.options.interpolation.defaultVariables,...l}),!s){l={...l};for(const u of a)delete l[u]}return l}static hasDefaultValue(i){const a="defaultValue";for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s)&&a===s.substring(0,a.length)&&i[s]!==void 0)return!0;return!1}}class H1{constructor(i){this.options=i,this.supportedLngs=this.options.supportedLngs||!1,this.logger=hi.create("languageUtils")}getScriptPartFromCode(i){if(i=Ms(i),!i||i.indexOf("-")<0)return null;const a=i.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(i){if(i=Ms(i),!i||i.indexOf("-")<0)return i;const a=i.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(i){if(de(i)&&i.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(i)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?i.toLowerCase():i)}return this.options.cleanCode||this.options.lowerCaseLng?i.toLowerCase():i}isSupportedCode(i){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(i=this.getLanguagePartFromCode(i)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(i)>-1}getBestMatchFromCodes(i){if(!i)return null;let a;return i.forEach(s=>{if(a)return;const l=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(l))&&(a=l)}),!a&&this.options.supportedLngs&&i.forEach(s=>{if(a)return;const l=this.getScriptPartFromCode(s);if(this.isSupportedCode(l))return a=l;const u=this.getLanguagePartFromCode(s);if(this.isSupportedCode(u))return a=u;a=this.options.supportedLngs.find(f=>{if(f===u)return f;if(!(f.indexOf("-")<0&&u.indexOf("-")<0)&&(f.indexOf("-")>0&&u.indexOf("-")<0&&f.substring(0,f.indexOf("-"))===u||f.indexOf(u)===0&&u.length>1))return f})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(i,a){if(!i)return[];if(typeof i=="function"&&(i=i(a)),de(i)&&(i=[i]),Array.isArray(i))return i;if(!a)return i.default||[];let s=i[a];return s||(s=i[this.getScriptPartFromCode(a)]),s||(s=i[this.formatLanguageCode(a)]),s||(s=i[this.getLanguagePartFromCode(a)]),s||(s=i.default),s||[]}toResolveHierarchy(i,a){const s=this.getFallbackCodes(a||this.options.fallbackLng||[],i),l=[],u=f=>{f&&(this.isSupportedCode(f)?l.push(f):this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`))};return de(i)&&(i.indexOf("-")>-1||i.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(i)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(i)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(i))):de(i)&&u(this.formatLanguageCode(i)),s.forEach(f=>{l.indexOf(f)<0&&u(this.formatLanguageCode(f))}),l}}const U1={zero:0,one:1,two:2,few:3,many:4,other:5},P1={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class s6{constructor(i,a={}){this.languageUtils=i,this.options=a,this.logger=hi.create("pluralResolver"),this.pluralRulesCache={}}addRule(i,a){this.rules[i]=a}clearCache(){this.pluralRulesCache={}}getRule(i,a={}){const s=Ms(i==="dev"?"en":i),l=a.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:s,type:l});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let f;try{f=new Intl.PluralRules(s,{type:l})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),P1;if(!i.match(/-|_/))return P1;const g=this.languageUtils.getLanguagePartFromCode(i);f=this.getRule(g,a)}return this.pluralRulesCache[u]=f,f}needsPlural(i,a={}){let s=this.getRule(i,a);return s||(s=this.getRule("dev",a)),(s==null?void 0:s.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(i,a,s={}){return this.getSuffixes(i,s).map(l=>`${a}${l}`)}getSuffixes(i,a={}){let s=this.getRule(i,a);return s||(s=this.getRule("dev",a)),s?s.resolvedOptions().pluralCategories.sort((l,u)=>U1[l]-U1[u]).map(l=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${l}`):[]}getSuffix(i,a,s={}){const l=this.getRule(i,s);return l?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${l.select(a)}`:(this.logger.warn(`no plural rule found for: ${i}`),this.getSuffix("dev",a,s))}}const F1=(e,i,a,s=".",l=!0)=>{let u=J7(e,i,a);return!u&&l&&de(a)&&(u=Ff(e,a,s),u===void 0&&(u=Ff(i,a,s))),u},Ud=e=>e.replace(/\$/g,"$$$$");class o6{constructor(i={}){var a;this.logger=hi.create("interpolator"),this.options=i,this.format=((a=i==null?void 0:i.interpolation)==null?void 0:a.format)||(s=>s),this.init(i)}init(i={}){i.interpolation||(i.interpolation={escapeValue:!0});const{escape:a,escapeValue:s,useRawValueToEscape:l,prefix:u,prefixEscaped:f,suffix:p,suffixEscaped:g,formatSeparator:m,unescapeSuffix:y,unescapePrefix:v,nestingPrefix:S,nestingPrefixEscaped:A,nestingSuffix:T,nestingSuffixEscaped:k,nestingOptionsSeparator:B,maxReplaces:O,alwaysFormat:H}=i.interpolation;this.escape=a!==void 0?a:e6,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=l!==void 0?l:!1,this.prefix=u?Fa(u):f||"{{",this.suffix=p?Fa(p):g||"}}",this.formatSeparator=m||",",this.unescapePrefix=y?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":y||"",this.nestingPrefix=S?Fa(S):A||Fa("$t("),this.nestingSuffix=T?Fa(T):k||Fa(")"),this.nestingOptionsSeparator=B||",",this.maxReplaces=O||1e3,this.alwaysFormat=H!==void 0?H:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const i=(a,s)=>(a==null?void 0:a.source)===s?(a.lastIndex=0,a):new RegExp(s,"g");this.regexp=i(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=i(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=i(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(i,a,s,l){var A;let u,f,p;const g=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=T=>{if(T.indexOf(this.formatSeparator)<0){const H=F1(a,g,T,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(H,void 0,s,{...l,...a,interpolationkey:T}):H}const k=T.split(this.formatSeparator),B=k.shift().trim(),O=k.join(this.formatSeparator).trim();return this.format(F1(a,g,B,this.options.keySeparator,this.options.ignoreJSONStructure),O,s,{...l,...a,interpolationkey:B})};this.resetRegExp();const y=(l==null?void 0:l.missingInterpolationHandler)||this.options.missingInterpolationHandler,v=((A=l==null?void 0:l.interpolation)==null?void 0:A.skipOnVariables)!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:T=>Ud(T)},{regex:this.regexp,safeValue:T=>this.escapeValue?Ud(this.escape(T)):Ud(T)}].forEach(T=>{for(p=0;u=T.regex.exec(i);){const k=u[1].trim();if(f=m(k),f===void 0)if(typeof y=="function"){const O=y(i,u,l);f=de(O)?O:""}else if(l&&Object.prototype.hasOwnProperty.call(l,k))f="";else if(v){f=u[0];continue}else this.logger.warn(`missed to pass in variable ${k} for interpolating ${i}`),f="";else!de(f)&&!this.useRawValueToEscape&&(f=z1(f));const B=T.safeValue(f);if(i=i.replace(u[0],B),v?(T.regex.lastIndex+=f.length,T.regex.lastIndex-=u[0].length):T.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),i}nest(i,a,s={}){let l,u,f;const p=(g,m)=>{const y=this.nestingOptionsSeparator;if(g.indexOf(y)<0)return g;const v=g.split(new RegExp(`${y}[ ]*{`));let S=`{${v[1]}`;g=v[0],S=this.interpolate(S,f);const A=S.match(/'/g),T=S.match(/"/g);(((A==null?void 0:A.length)??0)%2===0&&!T||T.length%2!==0)&&(S=S.replace(/'/g,'"'));try{f=JSON.parse(S),m&&(f={...m,...f})}catch(k){return this.logger.warn(`failed parsing options string in nesting for key ${g}`,k),`${g}${y}${S}`}return f.defaultValue&&f.defaultValue.indexOf(this.prefix)>-1&&delete f.defaultValue,g};for(;l=this.nestingRegexp.exec(i);){let g=[];f={...s},f=f.replace&&!de(f.replace)?f.replace:f,f.applyPostProcessor=!1,delete f.defaultValue;let m=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){const y=l[1].split(this.formatSeparator).map(v=>v.trim());l[1]=y.shift(),g=y,m=!0}if(u=a(p.call(this,l[1].trim(),f),f),u&&l[0]===i&&!de(u))return u;de(u)||(u=z1(u)),u||(this.logger.warn(`missed to resolve ${l[1]} for nesting ${i}`),u=""),m&&(u=g.reduce((y,v)=>this.format(y,v,s.lng,{...s,interpolationkey:l[1].trim()}),u.trim())),i=i.replace(l[0],u),this.regexp.lastIndex=0}return i}}const l6=e=>{let i=e.toLowerCase().trim();const a={};if(e.indexOf("(")>-1){const s=e.split("(");i=s[0].toLowerCase().trim();const l=s[1].substring(0,s[1].length-1);i==="currency"&&l.indexOf(":")<0?a.currency||(a.currency=l.trim()):i==="relativetime"&&l.indexOf(":")<0?a.range||(a.range=l.trim()):l.split(";").forEach(f=>{if(f){const[p,...g]=f.split(":"),m=g.join(":").trim().replace(/^'+|'+$/g,""),y=p.trim();a[y]||(a[y]=m),m==="false"&&(a[y]=!1),m==="true"&&(a[y]=!0),isNaN(m)||(a[y]=parseInt(m,10))}})}return{formatName:i,formatOptions:a}},q1=e=>{const i={};return(a,s,l)=>{let u=l;l&&l.interpolationkey&&l.formatParams&&l.formatParams[l.interpolationkey]&&l[l.interpolationkey]&&(u={...u,[l.interpolationkey]:void 0});const f=s+JSON.stringify(u);let p=i[f];return p||(p=e(Ms(s),l),i[f]=p),p(a)}},c6=e=>(i,a,s)=>e(Ms(a),s)(i);class u6{constructor(i={}){this.logger=hi.create("formatter"),this.options=i,this.init(i)}init(i,a={interpolation:{}}){this.formatSeparator=a.interpolation.formatSeparator||",";const s=a.cacheInBuiltFormats?q1:c6;this.formats={number:s((l,u)=>{const f=new Intl.NumberFormat(l,{...u});return p=>f.format(p)}),currency:s((l,u)=>{const f=new Intl.NumberFormat(l,{...u,style:"currency"});return p=>f.format(p)}),datetime:s((l,u)=>{const f=new Intl.DateTimeFormat(l,{...u});return p=>f.format(p)}),relativetime:s((l,u)=>{const f=new Intl.RelativeTimeFormat(l,{...u});return p=>f.format(p,u.range||"day")}),list:s((l,u)=>{const f=new Intl.ListFormat(l,{...u});return p=>f.format(p)})}}add(i,a){this.formats[i.toLowerCase().trim()]=a}addCached(i,a){this.formats[i.toLowerCase().trim()]=q1(a)}format(i,a,s,l={}){const u=a.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(p=>p.indexOf(")")>-1)){const p=u.findIndex(g=>g.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,p)].join(this.formatSeparator)}return u.reduce((p,g)=>{var v;const{formatName:m,formatOptions:y}=l6(g);if(this.formats[m]){let S=p;try{const A=((v=l==null?void 0:l.formatParams)==null?void 0:v[l.interpolationkey])||{},T=A.locale||A.lng||l.locale||l.lng||s;S=this.formats[m](p,T,{...y,...l,...A})}catch(A){this.logger.warn(A)}return S}else this.logger.warn(`there was no format function for ${m}`);return p},i)}}const d6=(e,i)=>{e.pending[i]!==void 0&&(delete e.pending[i],e.pendingCount--)};class f6 extends uc{constructor(i,a,s,l={}){var u,f;super(),this.backend=i,this.store=a,this.services=s,this.languageUtils=s.languageUtils,this.options=l,this.logger=hi.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=l.maxParallelReads||10,this.readingCalls=0,this.maxRetries=l.maxRetries>=0?l.maxRetries:5,this.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,this.state={},this.queue=[],(f=(u=this.backend)==null?void 0:u.init)==null||f.call(u,s,l.backend,l)}queueLoad(i,a,s,l){const u={},f={},p={},g={};return i.forEach(m=>{let y=!0;a.forEach(v=>{const S=`${m}|${v}`;!s.reload&&this.store.hasResourceBundle(m,v)?this.state[S]=2:this.state[S]<0||(this.state[S]===1?f[S]===void 0&&(f[S]=!0):(this.state[S]=1,y=!1,f[S]===void 0&&(f[S]=!0),u[S]===void 0&&(u[S]=!0),g[v]===void 0&&(g[v]=!0)))}),y||(p[m]=!0)}),(Object.keys(u).length||Object.keys(f).length)&&this.queue.push({pending:f,pendingCount:Object.keys(f).length,loaded:{},errors:[],callback:l}),{toLoad:Object.keys(u),pending:Object.keys(f),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(g)}}loaded(i,a,s){const l=i.split("|"),u=l[0],f=l[1];a&&this.emit("failedLoading",u,f,a),!a&&s&&this.store.addResourceBundle(u,f,s,void 0,void 0,{skipCopy:!0}),this.state[i]=a?-1:2,a&&s&&(this.state[i]=0);const p={};this.queue.forEach(g=>{Q7(g.loaded,[u],f),d6(g,i),a&&g.errors.push(a),g.pendingCount===0&&!g.done&&(Object.keys(g.loaded).forEach(m=>{p[m]||(p[m]={});const y=g.loaded[m];y.length&&y.forEach(v=>{p[m][v]===void 0&&(p[m][v]=!0)})}),g.done=!0,g.errors.length?g.callback(g.errors):g.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(g=>!g.done)}read(i,a,s,l=0,u=this.retryTimeout,f){if(!i.length)return f(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:a,fcName:s,tried:l,wait:u,callback:f});return}this.readingCalls++;const p=(m,y)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(m&&y&&l<this.maxRetries){setTimeout(()=>{this.read.call(this,i,a,s,l+1,u*2,f)},u);return}f(m,y)},g=this.backend[s].bind(this.backend);if(g.length===2){try{const m=g(i,a);m&&typeof m.then=="function"?m.then(y=>p(null,y)).catch(p):p(null,m)}catch(m){p(m)}return}return g(i,a,p)}prepareLoading(i,a,s={},l){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();de(i)&&(i=this.languageUtils.toResolveHierarchy(i)),de(a)&&(a=[a]);const u=this.queueLoad(i,a,s,l);if(!u.toLoad.length)return u.pending.length||l(),null;u.toLoad.forEach(f=>{this.loadOne(f)})}load(i,a,s){this.prepareLoading(i,a,{},s)}reload(i,a,s){this.prepareLoading(i,a,{reload:!0},s)}loadOne(i,a=""){const s=i.split("|"),l=s[0],u=s[1];this.read(l,u,"read",void 0,void 0,(f,p)=>{f&&this.logger.warn(`${a}loading namespace ${u} for language ${l} failed`,f),!f&&p&&this.logger.log(`${a}loaded namespace ${u} for language ${l}`,p),this.loaded(i,f,p)})}saveMissing(i,a,s,l,u,f={},p=()=>{}){var g,m,y,v,S;if((m=(g=this.services)==null?void 0:g.utils)!=null&&m.hasLoadedNamespace&&!((v=(y=this.services)==null?void 0:y.utils)!=null&&v.hasLoadedNamespace(a))){this.logger.warn(`did not save key "${s}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if((S=this.backend)!=null&&S.create){const A={...f,isUpdate:u},T=this.backend.create.bind(this.backend);if(T.length<6)try{let k;T.length===5?k=T(i,a,s,l,A):k=T(i,a,s,l),k&&typeof k.then=="function"?k.then(B=>p(null,B)).catch(p):p(null,k)}catch(k){p(k)}else T(i,a,s,l,p,A)}!i||!i[0]||this.store.addResource(i[0],a,s,l)}}}const Y1=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let i={};if(typeof e[1]=="object"&&(i=e[1]),de(e[1])&&(i.defaultValue=e[1]),de(e[2])&&(i.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const a=e[3]||e[2];Object.keys(a).forEach(s=>{i[s]=a[s]})}return i},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),G1=e=>{var i,a;return de(e.ns)&&(e.ns=[e.ns]),de(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),de(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((a=(i=e.supportedLngs)==null?void 0:i.indexOf)==null?void 0:a.call(i,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},ul=()=>{},h6=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(a=>{typeof e[a]=="function"&&(e[a]=e[a].bind(e))})};class Os extends uc{constructor(i={},a){if(super(),this.options=G1(i),this.services={},this.logger=hi,this.modules={external:[]},h6(this),a&&!this.isInitialized&&!i.isClone){if(!this.options.initAsync)return this.init(i,a),this;setTimeout(()=>{this.init(i,a)},0)}}init(i={},a){this.isInitializing=!0,typeof i=="function"&&(a=i,i={}),i.defaultNS==null&&i.ns&&(de(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const s=Y1();this.options={...s,...this.options,...G1(i)},this.options.interpolation={...s.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const l=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?hi.init(l(this.modules.logger),this.options):hi.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=u6;const y=new H1(this.options);this.store=new L1(this.options.resources,this.options);const v=this.services;v.logger=hi,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new s6(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),m&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(v.formatter=l(m),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new o6(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new f6(l(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(S,...A)=>{this.emit(S,...A)}),this.modules.languageDetector&&(v.languageDetector=l(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=l(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Zl(this.services,this.options),this.translator.on("*",(S,...A)=>{this.emit(S,...A)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,a||(a=ul),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=(...y)=>this.store[m](...y)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=(...y)=>(this.store[m](...y),this)});const p=gs(),g=()=>{const m=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(v),a(y,v)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?g():setTimeout(g,0),p}loadResources(i,a=ul){var u,f;let s=a;const l=de(i)?i:this.language;if(typeof i=="function"&&(s=i),!this.options.resources||this.options.partialBundledLanguages){if((l==null?void 0:l.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const p=[],g=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(v=>{v!=="cimode"&&p.indexOf(v)<0&&p.push(v)})};l?g(l):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(y=>g(y)),(f=(u=this.options.preload)==null?void 0:u.forEach)==null||f.call(u,m=>g(m)),this.services.backendConnector.load(p,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(m)})}else s(null)}reloadResources(i,a,s){const l=gs();return typeof i=="function"&&(s=i,i=void 0),typeof a=="function"&&(s=a,a=void 0),i||(i=this.languages),a||(a=this.options.ns),s||(s=ul),this.services.backendConnector.reload(i,a,u=>{l.resolve(),s(u)}),l}use(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&R5.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}setResolvedLanguage(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1)){for(let a=0;a<this.languages.length;a++){const s=this.languages[a];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}!this.resolvedLanguage&&this.languages.indexOf(i)<0&&this.store.hasLanguageSomeTranslations(i)&&(this.resolvedLanguage=i,this.languages.unshift(i))}}changeLanguage(i,a){this.isLanguageChangingTo=i;const s=gs();this.emit("languageChanging",i);const l=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,g)=>{g?this.isLanguageChangingTo===i&&(l(g),this.translator.changeLanguage(g),this.isLanguageChangingTo=void 0,this.emit("languageChanged",g),this.logger.log("languageChanged",g)):this.isLanguageChangingTo=void 0,s.resolve((...m)=>this.t(...m)),a&&a(p,(...m)=>this.t(...m))},f=p=>{var y,v;!i&&!p&&this.services.languageDetector&&(p=[]);const g=de(p)?p:p&&p[0],m=this.store.hasLanguageSomeTranslations(g)?g:this.services.languageUtils.getBestMatchFromCodes(de(p)?[p]:p);m&&(this.language||l(m),this.translator.language||this.translator.changeLanguage(m),(v=(y=this.services.languageDetector)==null?void 0:y.cacheUserLanguage)==null||v.call(y,m)),this.loadResources(m,S=>{u(S,m)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(i),s}getFixedT(i,a,s){const l=(u,f,...p)=>{let g;typeof f!="object"?g=this.options.overloadTranslationOptionHandler([u,f].concat(p)):g={...f},g.lng=g.lng||l.lng,g.lngs=g.lngs||l.lngs,g.ns=g.ns||l.ns,g.keyPrefix!==""&&(g.keyPrefix=g.keyPrefix||s||l.keyPrefix);const m=this.options.keySeparator||".";let y;return g.keyPrefix&&Array.isArray(u)?y=u.map(v=>`${g.keyPrefix}${m}${v}`):y=g.keyPrefix?`${g.keyPrefix}${m}${u}`:u,this.t(y,g)};return de(i)?l.lng=i:l.lngs=i,l.ns=a,l.keyPrefix=s,l}t(...i){var a;return(a=this.translator)==null?void 0:a.translate(...i)}exists(...i){var a;return(a=this.translator)==null?void 0:a.exists(...i)}setDefaultNamespace(i){this.options.defaultNS=i}hasLoadedNamespace(i,a={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=a.lng||this.resolvedLanguage||this.languages[0],l=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const f=(p,g)=>{const m=this.services.backendConnector.state[`${p}|${g}`];return m===-1||m===0||m===2};if(a.precheck){const p=a.precheck(this,f);if(p!==void 0)return p}return!!(this.hasResourceBundle(s,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||f(s,i)&&(!l||f(u,i)))}loadNamespaces(i,a){const s=gs();return this.options.ns?(de(i)&&(i=[i]),i.forEach(l=>{this.options.ns.indexOf(l)<0&&this.options.ns.push(l)}),this.loadResources(l=>{s.resolve(),a&&a(l)}),s):(a&&a(),Promise.resolve())}loadLanguages(i,a){const s=gs();de(i)&&(i=[i]);const l=this.options.preload||[],u=i.filter(f=>l.indexOf(f)<0&&this.services.languageUtils.isSupportedCode(f));return u.length?(this.options.preload=l.concat(u),this.loadResources(f=>{s.resolve(),a&&a(f)}),s):(a&&a(),Promise.resolve())}dir(i){var l,u;if(i||(i=this.resolvedLanguage||(((l=this.languages)==null?void 0:l.length)>0?this.languages[0]:this.language)),!i)return"rtl";const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=((u=this.services)==null?void 0:u.languageUtils)||new H1(Y1());return a.indexOf(s.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(i={},a){return new Os(i,a)}cloneInstance(i={},a=ul){const s=i.forkResourceStore;s&&delete i.forkResourceStore;const l={...this.options,...i,isClone:!0},u=new Os(l);if((i.debug!==void 0||i.prefix!==void 0)&&(u.logger=u.logger.clone(i)),["store","services","language"].forEach(p=>{u[p]=this[p]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},s){const p=Object.keys(this.store.data).reduce((g,m)=>(g[m]={...this.store.data[m]},g[m]=Object.keys(g[m]).reduce((y,v)=>(y[v]={...g[m][v]},y),g[m]),g),{});u.store=new L1(p,l),u.services.resourceStore=u.store}return u.translator=new Zl(u.services,l),u.translator.on("*",(p,...g)=>{u.emit(p,...g)}),u.init(l,a),u.translator.options=l,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const yt=Os.createInstance();yt.createInstance=Os.createInstance;yt.createInstance;yt.dir;yt.init;yt.loadResources;yt.reloadResources;yt.use;yt.changeLanguage;yt.getFixedT;yt.t;yt.exists;yt.setDefaultNamespace;yt.hasLoadedNamespace;yt.loadNamespaces;yt.loadLanguages;const{slice:p6,forEach:m6}=[];function g6(e){return m6.call(p6.call(arguments,1),i=>{if(i)for(const a in i)e[a]===void 0&&(e[a]=i[a])}),e}function y6(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(a=>a.test(e))}const K1=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,x6=function(e,i){const s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},l=encodeURIComponent(i);let u=`${e}=${l}`;if(s.maxAge>0){const f=s.maxAge-0;if(Number.isNaN(f))throw new Error("maxAge should be a Number");u+=`; Max-Age=${Math.floor(f)}`}if(s.domain){if(!K1.test(s.domain))throw new TypeError("option domain is invalid");u+=`; Domain=${s.domain}`}if(s.path){if(!K1.test(s.path))throw new TypeError("option path is invalid");u+=`; Path=${s.path}`}if(s.expires){if(typeof s.expires.toUTCString!="function")throw new TypeError("option expires is invalid");u+=`; Expires=${s.expires.toUTCString()}`}if(s.httpOnly&&(u+="; HttpOnly"),s.secure&&(u+="; Secure"),s.sameSite)switch(typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s.partitioned&&(u+="; Partitioned"),u},Z1={create(e,i,a,s){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};a&&(l.expires=new Date,l.expires.setTime(l.expires.getTime()+a*60*1e3)),s&&(l.domain=s),document.cookie=x6(e,encodeURIComponent(i),l)},read(e){const i=`${e}=`,a=document.cookie.split(";");for(let s=0;s<a.length;s++){let l=a[s];for(;l.charAt(0)===" ";)l=l.substring(1,l.length);if(l.indexOf(i)===0)return l.substring(i.length,l.length)}return null},remove(e){this.create(e,"",-1)}};var b6={name:"cookie",lookup(e){let{lookupCookie:i}=e;if(i&&typeof document<"u")return Z1.read(i)||void 0},cacheUserLanguage(e,i){let{lookupCookie:a,cookieMinutes:s,cookieDomain:l,cookieOptions:u}=i;a&&typeof document<"u"&&Z1.create(a,e,s,l,u)}},v6={name:"querystring",lookup(e){var s;let{lookupQuerystring:i}=e,a;if(typeof window<"u"){let{search:l}=window.location;!window.location.search&&((s=window.location.hash)==null?void 0:s.indexOf("?"))>-1&&(l=window.location.hash.substring(window.location.hash.indexOf("?")));const f=l.substring(1).split("&");for(let p=0;p<f.length;p++){const g=f[p].indexOf("=");g>0&&f[p].substring(0,g)===i&&(a=f[p].substring(g+1))}}return a}};let qa=null;const I1=()=>{if(qa!==null)return qa;try{if(qa=typeof window<"u"&&window.localStorage!==null,!qa)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{qa=!1}return qa};var w6={name:"localStorage",lookup(e){let{lookupLocalStorage:i}=e;if(i&&I1())return window.localStorage.getItem(i)||void 0},cacheUserLanguage(e,i){let{lookupLocalStorage:a}=i;a&&I1()&&window.localStorage.setItem(a,e)}};let Ya=null;const X1=()=>{if(Ya!==null)return Ya;try{if(Ya=typeof window<"u"&&window.sessionStorage!==null,!Ya)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Ya=!1}return Ya};var S6={name:"sessionStorage",lookup(e){let{lookupSessionStorage:i}=e;if(i&&X1())return window.sessionStorage.getItem(i)||void 0},cacheUserLanguage(e,i){let{lookupSessionStorage:a}=i;a&&X1()&&window.sessionStorage.setItem(a,e)}},j6={name:"navigator",lookup(e){const i=[];if(typeof navigator<"u"){const{languages:a,userLanguage:s,language:l}=navigator;if(a)for(let u=0;u<a.length;u++)i.push(a[u]);s&&i.push(s),l&&i.push(l)}return i.length>0?i:void 0}},A6={name:"htmlTag",lookup(e){let{htmlTag:i}=e,a;const s=i||(typeof document<"u"?document.documentElement:null);return s&&typeof s.getAttribute=="function"&&(a=s.getAttribute("lang")),a}},T6={name:"path",lookup(e){var l;let{lookupFromPathIndex:i}=e;if(typeof window>"u")return;const a=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?(l=a[typeof i=="number"?i:0])==null?void 0:l.replace("/",""):void 0}},E6={name:"subdomain",lookup(e){var l,u;let{lookupFromSubdomainIndex:i}=e;const a=typeof i=="number"?i+1:1,s=typeof window<"u"&&((u=(l=window.location)==null?void 0:l.hostname)==null?void 0:u.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(s)return s[a]}};let D5=!1;try{document.cookie,D5=!0}catch{}const M5=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];D5||M5.splice(1,1);const C6=()=>({order:M5,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class O5{constructor(i){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(i,a)}init(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=i,this.options=g6(a,this.options||{},C6()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=l=>l.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=s,this.addDetector(b6),this.addDetector(v6),this.addDetector(w6),this.addDetector(S6),this.addDetector(j6),this.addDetector(A6),this.addDetector(T6),this.addDetector(E6)}addDetector(i){return this.detectors[i.name]=i,this}detect(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,a=[];return i.forEach(s=>{if(this.detectors[s]){let l=this.detectors[s].lookup(this.options);l&&typeof l=="string"&&(l=[l]),l&&(a=a.concat(l))}}),a=a.filter(s=>s!=null&&!y6(s)).map(s=>this.options.convertDetectedLanguage(s)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?a:a.length>0?a[0]:null}cacheUserLanguage(i){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;a&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(i)>-1||a.forEach(s=>{this.detectors[s]&&this.detectors[s].cacheUserLanguage(i,this.options)}))}}O5.type="languageDetector";const R6={home:"Home",restaurant:"Restaurant",spa:"SPA",sports:"Sports",beauty:"Beauty Salon",spa_and_beauty:"SPA & Beauty",about:"About Us",promotions:"Promotions",contacts:"Contacts"},D6={book:"Book Now",book_now:"Book Now",learn_more:"Learn More",view_all:"View All",read_more:"Read More",submit:"Submit",scroll_down:"Scroll",name:"Name",email:"Email",phone:"Phone",message:"Message",date:"Date",time:"Time",people:"People",special_requests:"Special Requests",address:"73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu",phone_number:"+66 62 480 5877",select_language:"Select Language",photo_placeholder:"Photo will be added"},M6={hero:{title:"KAIF - Jungle Club & Spa",subtitle:"Ultimate Relaxation and Wellness Experience in Phuket",cta:"Explore Our Services"},services:{title:"Our Services",restaurant:{title:"Restaurant",description:"Experience 5 different cuisines in our exceptional restaurant"},spa:{title:"SPA",description:"Rejuvenate yourself in Thailand's largest sauna"},sports:{title:"Sports Facilities",description:"Stay fit with our 70+ equipment gym and specialized areas"},beauty:{title:"Beauty Salon",description:"Full-cycle salon for all your beauty needs"}},promotions:{title:"Special Offers",day_pass:{title:"Day in Complex",price:"390 THB",description:"Access to gym, pool, ice bath and sauna"},charity:{title:"Charity Workout",price:"200 THB",description:"Saturday training with professional athletes, proceeds go to Child Watch Phuket Foundation"}},about_preview:{title:"About KAIF",description:"KAIF is Phuket's premier wellness complex offering world-class facilities for mind, body and soul",features:{largest_sauna:"Thailand's largest sauna (50m²)",hammams:"Thai and Turkish hammams",restaurant:"Restaurant with 5 cuisines",gym:"70+ equipment gym",pool:"25m swimming pool",fight_club:"Professional fight club"}},location:{title:"Find Us",description:"Conveniently located in Kathu, just minutes away from Patong"}},O6={title:"Restaurant",description:"Experience the exceptional flavors from five different cuisines in our restaurant",menu:{title:"Our Menu",description:"Discover a variety of flavors in our menu created by talented chefs",coming_soon:"Our menu with detailed dish information will be available here soon",categories:{breakfast:"Breakfast",soups:"Soups",salads:"Salads & Appetizers",main:"Main Courses"}},booking:{title:"Book a Table",description:"Reserve your table to guarantee your spot",coming_soon:"Online booking will be available soon. For now, please call us for reservations."},cuisines:{title:"Our Cuisines",description:"Experience culinary delights from around the world"},chef:"Chef's Recommendations",slider:{slide1:{title:"Exquisite Cuisine",description:"Discover unique flavors from five different world cuisines in our restaurant"},slide2:{title:"Comfortable Atmosphere",description:"Enjoy your meal in a cozy atmosphere with a view of the tropical garden"},slide3:{title:"Fresh Ingredients",description:"We use only fresh and quality ingredients to prepare our dishes"}},bookTable:"Book a Table",dish_details:{ingredients:"Ingredients",nutritional_info:"Nutritional Information"}},k6={title:"SPA",description:"Rejuvenate your mind and body in Thailand's largest sauna",services:{title:"Our Services",categories:{sauna:"Sauna",hammam:"Hammam",massage:"Massage",treatments:"SPA Treatments"}},booking:{title:"Book a Treatment",description:"Reserve your SPA experience"},facility:{title:"Our Facilities",largest_sauna:"Largest sauna in Thailand (50m²)",hammams:"Thai and Turkish hammams"}},z6={title:"Sports Facilities",description:"State-of-the-art exercise facilities for everyone",hero:{tag:"Fitness & Sports",title:"Reach new <span>sports heights</span> with KAIF",subtitle:"Our premium sports facilities are designed to accommodate various fitness levels and goals.",cta:"Explore Facilities",primary_cta:"Book a training",secondary_cta:"Learn more",stats:{facilities:"Sports Facilities",trainers:"Professional Trainers",access:"Access for Residents"}},gym:{tag:"Our Services",facility_tag:"Fitness",section_title:"Premium Sports Facilities",section_subtitle:"Discover the world of fitness and sports at KAIF Jungle Club. Our modern services are designed to give you the opportunity to train with pleasure and reach new heights.",title:"Gym",description1:"Spacious modern gym with cardio and strength equipment of high class. The gym is equipped with everything necessary for full-fledged training and maintaining physical fitness.",description2:"Guests have access to personal lockers, showers, as well as personal trainer services by appointment."},dance:{facility_tag:"Dancing",title:"Dance Studio",description1:"Spacious dance studio with professional parquet flooring, mirrored walls and modern audio system.",description2:"The studio offers group and individual lessons in various directions: modern dance, ballroom dancing, yoga, stretching, pilates and other directions.",schedule_button:"Schedule"},gallery:{tag:"Our Moments",title:"Gallery",subtitle:"Captured moments of sports life at KAIF Jungle Club & SPA. Join our community and share your own achievements",yoga:"Sunset Yoga",subtitle_yoga:"Daily classes",training:"Training with a personal trainer",subtitle_training:"Individual approach",swimming:"Swimming Pool",subtitle_swimming:"Relaxation and recovery"},schedule:{tag:"Planning",title:"Class Schedule",description:"Weekly class schedule with professional instructors",coming_soon:"Training schedule will be available soon. For current information, please contact us.",contact_button:"Contact Us"},facilities:{tag:"Our facilities",subtitle:"KAIF offers a wide selection of premium sports spaces with cutting-edge equipment and professional trainers to help you achieve your fitness goals.",title:"Our Facilities",gym:{title:"Gym",description:"Over 70 pieces of professional equipment",hours:"06:00 - 23:00",capacity:"Up to 40 people",description1:"Our gym is equipped with modern premium equipment from leading manufacturers. Here you will find everything you need for effective workouts - from free weights to the latest generation of cardio machines.",description2:"The spacious room with panoramic windows creates the perfect atmosphere for training, and professional trainers are always ready to help create an individual program.",feature1:"Premium Technogym and Life Fitness equipment",feature2:"Functional training area",feature3:"Individual training with certified trainers"},book_button:"Book a training session",fight:{title:"Fight Club",description:"Professional boxing and MMA facility",hours:"08:00 - 22:00",capacity:"Up to 25 people",description1:"KAIF Fighting Club is a modern space for training in various martial arts. Professional ring, punching bags, heavy bags, and special flooring create ideal conditions for both beginners and experienced fighters.",description2:"Our trainers are experienced fighters and champions who will help you master techniques and achieve high results in your chosen martial art.",feature1:"Professional boxing ring",feature2:"Boxing, Muay Thai, and MMA training",feature3:"Trainers with international certifications"},fight_club:{title:"Fight Club",description:"Professional boxing and MMA facility",hours:"08:00 - 22:00",capacity:"Up to 25 people",description1:"KAIF Fighting Club is a modern space for training in various martial arts. Professional ring, punching bags, heavy bags, and special flooring create ideal conditions for both beginners and experienced fighters.",description2:"Our trainers are experienced fighters and champions who will help you master techniques and achieve high results in your chosen martial art.",feature1:"Professional boxing ring",feature2:"Boxing, Muay Thai, and MMA training",feature3:"Trainers with international certifications"},dance:{title:"Dance Studio",description:"For yoga and dance classes",hours:"09:00 - 21:00",capacity:"Up to 30 people",description1:"Spacious dance studio with professional flooring, mirrored walls and advanced audio system creates ideal conditions for various dance styles and group classes.",description2:"Classes in modern and classical dance styles are held here, as well as group fitness training under the guidance of experienced instructors.",feature4:"Flexible schedule for group and individual classes",schedule_title:"Classes and Schedule",schedule_subtitle:"Find the right class",filter_label:"Filter:",filter_all:"All",filter_group:"Group",filter_personal:"Personal",filter_events:"Events"}},membership:{title:"Membership Options",description:"Choose the plan that works for you"},charity:{title:"Charity Workouts",description:"Saturday workouts with professional athletes, all proceeds go to Child Watch Phuket Foundation"}},B6={title:"Beauty Salon",description:"Full-cycle beauty salon for all your needs",services:{title:"Our Services",categories:{cosmetology:"Cosmetology",laser:"Laser Procedures",endosphere:"Endosphere Therapy",nails:"Nail Care",hair:"Hair Styling & Care"}},specialists:{title:"Our Specialists",description:"Meet our professional team"},booking:{title:"Book an Appointment",description:"Schedule your beauty treatment"}},$6={title:"About Us",description:"KAIF - Jungle Club & Spa is Phuket's premier wellness complex",overview:{title:"Complex Overview",description:"Detailed information about all our facilities"},features:{title:"Key Features",largest_sauna:"Thailand's largest sauna (50m²)",hammams:"Thai and Turkish hammams",restaurant:"Restaurant with 5 cuisines",dance_studio:"Dance and yoga studio (available for rent)",gym:"Fitness center with 70+ equipment",beauty_salon:"Full-cycle beauty salon",pool:"25m swimming pool",massage:"Various massage techniques",fight_club:"Fight club",kids_room:"Kids room (ages 3-14)"},gallery:{title:"Gallery",description:"High-quality photos of all facilities"},mission:{title:"Our Mission",description:"To provide an exceptional wellness experience in Phuket"}},N6={title:"Promotions",description:"Special offers and deals",day_pass:{title:"Day in Complex",price:"390 THB",description:"Access to gym, pool, ice bath and sauna",terms:"Terms and conditions apply"},charity:{title:"Charity Workout",price:"200 THB",description:"Saturday training with professional athletes",foundation:"All proceeds go to Child Watch Phuket Foundation"},seasonal:{title:"Seasonal Offers",description:"Limited-time offers"},loyalty:{title:"Loyalty Program",description:"Rewards for our regular customers"}},L6={title:"Contact Us",form:{title:"Get in Touch",success:"Your message has been sent successfully!",error:"An error occurred. Please try again."},info:{title:"Contact Information",hours:"Opening Hours: 7:00 - 22:00 daily"},feedback:{title:"Feedback",description:"We value your opinion"}},V6={navigation:R6,common:D6,home:M6,restaurant:O6,spa:k6,sports:z6,beauty:B6,about:$6,promotions:N6,contacts:L6},_6={home:"Главная",restaurant:"Ресторан",spa:"СПА",sports:"Спорт",beauty:"Салон красоты",spa_and_beauty:"СПА и Красота",about:"О нас",promotions:"Акции",contacts:"Контакты"},H6={book:"Забронировать",learn_more:"Узнать больше",view_all:"Смотреть всё",read_more:"Читать далее",submit:"Отправить",scroll_down:"Прокрутить",name:"Имя",email:"Email",phone:"Телефон",message:"Сообщение",date:"Дата",time:"Время",people:"Количество человек",special_requests:"Особые пожелания",address:"73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu",phone_number:"+66 62 480 5877",select_language:"Выбрать язык"},U6={hero:{title:"KAIF - Jungle Club & Spa",subtitle:"Уникальный опыт релаксации и оздоровления на Пхукете",cta:"Наши услуги"},services:{title:"Наши услуги",restaurant:{title:"Ресторан",description:"Попробуйте 5 различных кухонь в нашем исключительном ресторане"},spa:{title:"СПА",description:"Восстановите силы в самой большой сауне Таиланда"},sports:{title:"Спортивный комплекс",description:"Поддерживайте форму в нашем зале с более чем 70 тренажерами"},beauty:{title:"Салон красоты",description:"Салон полного цикла для всех ваших потребностей красоты"}},promotions:{title:"Специальные предложения",day_pass:{title:"День в комплексе",price:"390 THB",description:"Доступ к тренажерному залу, бассейну, ледяной купели и сауне"},charity:{title:"Благотворительная тренировка",price:"200 THB",description:"Субботняя тренировка с профессиональными спортсменами, сборы идут в фонд Child Watch Phuket Foundation"}},about_preview:{title:"О KAIF",description:"KAIF - это премиальный оздоровительный комплекс на Пхукете, предлагающий услуги мирового класса для ума, тела и души",features:{largest_sauna:"Самая большая сауна в Таиланде (50м²)",hammams:"Тайский и турецкий хаммам",restaurant:"Ресторан с 5 кухнями",gym:"Тренажерный зал с более чем 70 тренажерами",pool:"Бассейн 25м",fight_club:"Профессиональный бойцовский клуб"}},location:{title:"Как нас найти",description:"Удобно расположены в Кату, всего в нескольких минутах от Патонга"}},P6={title:"Ресторан",description:"Погрузитесь в исключительные вкусы пяти различных кухонь в нашем ресторане",menu:{title:"Наше меню",description:"Откройте для себя разнообразие вкусов в нашем меню, созданном талантливыми шеф-поварами",coming_soon:"Скоро здесь появится наше меню с возможностью просмотра каждого блюда",categories:{breakfast:"Завтраки",soups:"Супы",salads:"Салаты и закуски",main:"Основные блюда"}},booking:{title:"Забронировать стол",description:"Заранее зарезервируйте столик для гарантированного места",coming_soon:"Онлайн-бронирование скоро будет доступно. Пока что, пожалуйста, позвоните нам для резервации."},cuisines:{title:"Наши кухни",description:"Попробуйте кулинарные изыски со всего мира"},chef:"Рекомендации шеф-повара",slider:{slide1:{title:"Изысканная кухня",description:"Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане"},slide2:{title:"Атмосфера комфорта",description:"Наслаждайтесь едой в уютной атмосфере с видом на тропический сад"},slide3:{title:"Свежие ингредиенты",description:"Мы используем только свежие и качественные ингредиенты для приготовления наших блюд"}},bookTable:"Забронировать стол",dish_details:{ingredients:"Ингредиенты",nutritional_info:"Пищевая ценность"}},F6={title:"СПА",description:"Восстановите свои силы в самой большой сауне Таиланда",services:{title:"Наши услуги",categories:{sauna:"Сауна",hammam:"Хаммам",massage:"Массаж",treatments:"СПА-процедуры"}},booking:{title:"Записаться на процедуру",description:"Забронируйте СПА-процедуру"},facility:{title:"Наши объекты",largest_sauna:"Крупнейшая сауна в Таиланде (50м²)",hammams:"Тайский и турецкий хаммам"}},q6={title:"Спортивный комплекс",description:"Современные тренировочные объекты для всех",facilities:{title:"Наши объекты",gym:{title:"Тренажерный зал",description:"Более 70 единиц профессионального оборудования"},fight_club:{title:"Бойцовский клуб",description:"Профессиональное оборудование для бокса и ММА"},swimming:{title:"Центр плавания",description:"Плавательная дорожка 25м"},dance:{title:"Танцевальная студия",description:"Для занятий йогой и танцами"}},schedule:{title:"Расписание занятий",description:"Еженедельное расписание с профессиональными инструкторами"},membership:{title:"Варианты членства",description:"Выберите план, который подходит именно вам"},charity:{title:"Благотворительные тренировки",description:"Субботние тренировки с профессиональными спортсменами, все сборы идут в фонд Child Watch Phuket Foundation"}},Y6={title:"Салон красоты",description:"Салон красоты полного цикла для всех ваших потребностей",services:{title:"Наши услуги",categories:{cosmetology:"Косметология",laser:"Лазерные процедуры",endosphere:"Эндосфера-терапия",nails:"Уход за ногтями",hair:"Укладка и уход за волосами"}},specialists:{title:"Наши специалисты",description:"Познакомьтесь с нашей профессиональной командой"},booking:{title:"Записаться на прием",description:"Запланируйте процедуру красоты"}},G6={title:"О нас",description:"KAIF - Jungle Club & Spa — премиальный оздоровительный комплекс на Пхукете",overview:{title:"Обзор комплекса",description:"Подробная информация о всех наших объектах"},features:{title:"Ключевые особенности",largest_sauna:"Самая большая сауна в Таиланде (50м²)",hammams:"Тайский и турецкий хаммам",restaurant:"Ресторан с 5 кухнями",dance_studio:"Студия танцев и йоги (доступна для аренды)",gym:"Фитнес-центр с более чем 70 тренажерами",beauty_salon:"Салон красоты полного цикла",pool:"Бассейн 25м",massage:"Различные техники массажа",fight_club:"Бойцовский клуб",kids_room:"Детская комната (от 3 до 14 лет)"},gallery:{title:"Галерея",description:"Высококачественные фотографии всех объектов"},mission:{title:"Наша миссия",description:"Предоставить исключительный опыт оздоровления на Пхукете"}},K6={title:"Акции",description:"Специальные предложения",day_pass:{title:"День в комплексе",price:"390 THB",description:"Доступ к тренажерному залу, бассейну, ледяной купели и сауне",terms:"Применяются условия и положения"},charity:{title:"Благотворительная тренировка",price:"200 THB",description:"Субботняя тренировка с профессиональными спортсменами",foundation:"Все сборы идут в фонд Child Watch Phuket Foundation"},seasonal:{title:"Сезонные предложения",description:"Предложения с ограниченным сроком действия"},loyalty:{title:"Программа лояльности",description:"Бонусы для наших постоянных клиентов"}},Z6={title:"Контакты",form:{title:"Связаться с нами",success:"Ваше сообщение успешно отправлено!",error:"Произошла ошибка. Пожалуйста, попробуйте снова."},info:{title:"Контактная информация",hours:"Часы работы: 8:00 - 22:00 ежедневно"},feedback:{title:"Обратная связь",description:"Нам важно ваше мнение"}},I6={navigation:_6,common:H6,home:U6,restaurant:P6,spa:F6,sports:q6,beauty:Y6,about:G6,promotions:K6,contacts:Z6},X6={home:"หน้าแรก",restaurant:"ร้านอาหาร",spa:"สปา",sports:"กีฬา",beauty:"ซาลอนความงาม",spa_and_beauty:"สปาและความงาม",about:"เกี่ยวกับเรา",promotions:"โปรโมชั่น",contacts:"ติดต่อ"},Q6={book:"จองตอนนี้",learn_more:"เรียนรู้เพิ่มเติม",view_all:"ดูทั้งหมด",read_more:"อ่านเพิ่มเติม",submit:"ส่ง",scroll_down:"เลื่อน",name:"ชื่อ",email:"อีเมล",phone:"โทรศัพท์",message:"ข้อความ",date:"วันที่",time:"เวลา",people:"จำนวนคน",special_requests:"คำขอพิเศษ",address:"73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu",phone_number:"+66 62 480 5877",select_language:"เลือกภาษา"},J6={hero:{title:"KAIF - Jungle Club & Spa",subtitle:"ประสบการณ์การผ่อนคลายและความเป็นอยู่ที่ดีที่สุดในภูเก็ต",cta:"สำรวจบริการของเรา"},services:{title:"บริการของเรา",restaurant:{title:"ร้านอาหาร",description:"สัมผัสประสบการณ์อาหาร 5 สัญชาติในร้านอาหารพิเศษของเรา"},spa:{title:"สปา",description:"ฟื้นฟูร่างกายในซาวน่าที่ใหญ่ที่สุดในประเทศไทย"},sports:{title:"สิ่งอำนวยความสะดวกด้านกีฬา",description:"ออกกำลังกายกับอุปกรณ์กว่า 70 ชิ้นและพื้นที่เฉพาะทาง"},beauty:{title:"ซาลอนความงาม",description:"ซาลอนครบวงจรสำหรับความต้องการด้านความงามทั้งหมดของคุณ"}},promotions:{title:"ข้อเสนอพิเศษ",day_pass:{title:"วันในคอมเพล็กซ์",price:"390 บาท",description:"เข้าถึงยิม สระว่ายน้ำ อ่างน้ำแข็ง และซาวน่า"},charity:{title:"การออกกำลังกายเพื่อการกุศล",price:"200 บาท",description:"การฝึกวันเสาร์กับนักกีฬามืออาชีพ รายได้มอบให้กับมูลนิธิ Child Watch Phuket"}},about_preview:{title:"เกี่ยวกับ KAIF",description:"KAIF คือคอมเพล็กซ์เพื่อสุขภาพชั้นนำของภูเก็ตที่นำเสนอสิ่งอำนวยความสะดวกระดับโลกสำหรับจิตใจ ร่างกาย และจิตวิญญาณ",features:{largest_sauna:"ซาวน่าที่ใหญ่ที่สุดในประเทศไทย (50ตร.ม.)",hammams:"หอบไอน้ำแบบไทยและตุรกี",restaurant:"ร้านอาหาร 5 สัญชาติ",gym:"ยิมพร้อมอุปกรณ์กว่า 70 ชิ้น",pool:"สระว่ายน้ำขนาด 25 เมตร",fight_club:"คลับมวยมืออาชีพ"}},location:{title:"ค้นหาเรา",description:"ตั้งอยู่อย่างสะดวกในกะทู้ ห่างจากป่าตองเพียงไม่กี่นาที"}},W6={title:"ร้านอาหาร",description:"สัมผัสรสชาติที่พิเศษจากห้าสัญชาติอาหารในร้านอาหารของเรา",menu:{title:"เมนูของเรา",description:"ค้นพบความหลากหลายของรสชาติในเมนูของเราที่สร้างสรรค์โดยเชฟที่มีพรสวรรค์",coming_soon:"เมนูของเราพร้อมข้อมูลอาหารโดยละเอียดจะพร้อมให้บริการในเร็วๆนี้",categories:{breakfast:"อาหารเช้า",soups:"ซุป",salads:"สลัดและอาหารเรียกน้ำย่อย",main:"อาหารจานหลัก"}},booking:{title:"จองโต๊ะ",description:"สำรองที่นั่งของคุณเพื่อการันตีที่นั่ง",coming_soon:"การจองออนไลน์จะพร้อมให้บริการในเร็วๆนี้ ในขณะนี้ โปรดโทรหาเราเพื่อจอง"},cuisines:{title:"อาหารของเรา",description:"สัมผัสความอร่อยจากทั่วโลก"},chef:"คำแนะนำจากเชฟ",slider:{slide1:{title:"อาหารชั้นเลิศ",description:"ค้นพบรสชาติที่ไม่เหมือนใครจากห้าสัญชาติอาหารที่แตกต่างกันในร้านอาหารของเรา"},slide2:{title:"บรรยากาศที่สบาย",description:"เพลิดเพลินกับอาหารในบรรยากาศที่อบอุ่นพร้อมวิวสวนเขตร้อน"},slide3:{title:"วัตถุดิบที่สดใหม่",description:"เราใช้เฉพาะวัตถุดิบที่สดและมีคุณภาพในการปรุงอาหารของเรา"}},bookTable:"จองโต๊ะ",dish_details:{ingredients:"ส่วนประกอบ",nutritional_info:"ข้อมูลทางโภชนาการ"}},eS={title:"สปา",description:"ฟื้นฟูจิตใจและร่างกายในซาวน่าที่ใหญ่ที่สุดในประเทศไทย",services:{title:"บริการของเรา",categories:{sauna:"ซาวน่า",hammam:"หอบไอน้ำ",massage:"นวด",treatments:"ทรีทเมนต์สปา"}},booking:{title:"จองทรีทเมนต์",description:"สำรองประสบการณ์สปาของคุณ"},facility:{title:"สิ่งอำนวยความสะดวกของเรา",largest_sauna:"ซาวน่าที่ใหญ่ที่สุดในประเทศไทย (50ตร.ม.)",hammams:"หอบไอน้ำแบบไทยและตุรกี"}},tS={title:"สิ่งอำนวยความสะดวกด้านกีฬา",description:"สิ่งอำนวยความสะดวกในการออกกำลังกายที่ทันสมัยสำหรับทุกคน",facilities:{title:"สิ่งอำนวยความสะดวกของเรา",gym:{title:"ยิม",description:"อุปกรณ์มืออาชีพกว่า 70 ชิ้น"},fight_club:{title:"คลับมวย",description:"สิ่งอำนวยความสะดวกมวยและ MMA มืออาชีพ"},swimming:{title:"ศูนย์ว่ายน้ำ",description:"ทางว่ายน้ำขนาด 25 เมตร"},dance:{title:"สตูดิโอเต้นรำ",description:"สำหรับคลาสโยคะและเต้นรำ"}},schedule:{title:"ตารางเรียน",description:"ตารางเรียนรายสัปดาห์กับผู้ฝึกสอนมืออาชีพ"},membership:{title:"ตัวเลือกสมาชิก",description:"เลือกแผนที่เหมาะกับคุณ"},charity:{title:"การออกกำลังกายเพื่อการกุศล",description:"การออกกำลังกายวันเสาร์กับนักกีฬามืออาชีพ รายได้ทั้งหมดมอบให้กับมูลนิธิ Child Watch Phuket"}},iS={title:"ซาลอนความงาม",description:"ซาลอนความงามครบวงจรสำหรับความต้องการทั้งหมดของคุณ",services:{title:"บริการของเรา",categories:{cosmetology:"เวชสำอาง",laser:"หัตถการเลเซอร์",endosphere:"บำบัดเอนโดสเฟียร์",nails:"ดูแลเล็บ",hair:"จัดแต่งทรงผมและดูแล"}},specialists:{title:"ผู้เชี่ยวชาญของเรา",description:"พบกับทีมมืออาชีพของเรา"},booking:{title:"จองนัดหมาย",description:"กำหนดเวลาทรีทเมนต์ความงามของคุณ"}},nS={title:"เกี่ยวกับเรา",description:"KAIF - Jungle Club & Spa คือคอมเพล็กซ์เพื่อสุขภาพชั้นนำของภูเก็ต",overview:{title:"ภาพรวมคอมเพล็กซ์",description:"ข้อมูลโดยละเอียดเกี่ยวกับสิ่งอำนวยความสะดวกทั้งหมดของเรา"},features:{title:"คุณสมบัติหลัก",largest_sauna:"ซาวน่าที่ใหญ่ที่สุดในประเทศไทย (50ตร.ม.)",hammams:"หอบไอน้ำแบบไทยและตุรกี",restaurant:"ร้านอาหาร 5 สัญชาติ",dance_studio:"สตูดิโอเต้นรำและโยคะ (มีให้เช่า)",gym:"ศูนย์ฟิตเนสพร้อมอุปกรณ์กว่า 70 ชิ้น",beauty_salon:"ซาลอนความงามครบวงจร",pool:"สระว่ายน้ำขนาด 25 เมตร",massage:"เทคนิคการนวดหลากหลาย",fight_club:"คลับมวย",kids_room:"ห้องเด็ก (อายุ 3-14 ปี)"},gallery:{title:"แกลเลอรี",description:"ภาพคุณภาพสูงของสิ่งอำนวยความสะดวกทั้งหมด"},mission:{title:"พันธกิจของเรา",description:"เพื่อมอบประสบการณ์ด้านสุขภาพที่ยอดเยี่ยมในภูเก็ต"}},aS={title:"โปรโมชั่น",description:"ข้อเสนอและดีลพิเศษ",day_pass:{title:"วันในคอมเพล็กซ์",price:"390 บาท",description:"เข้าถึงยิม สระว่ายน้ำ อ่างน้ำแข็ง และซาวน่า",terms:"เงื่อนไขและข้อกำหนดนำมาใช้"},charity:{title:"การออกกำลังกายเพื่อการกุศล",price:"200 บาท",description:"การฝึกวันเสาร์กับนักกีฬามืออาชีพ",foundation:"รายได้ทั้งหมดมอบให้กับมูลนิธิ Child Watch Phuket"},seasonal:{title:"ข้อเสนอตามฤดูกาล",description:"ข้อเสนอระยะเวลาจำกัด"},loyalty:{title:"โปรแกรมลูกค้าประจำ",description:"รางวัลสำหรับลูกค้าประจำของเรา"}},rS={title:"ติดต่อเรา",form:{title:"ติดต่อ",success:"ส่งข้อความของคุณเรียบร้อยแล้ว!",error:"เกิดข้อผิดพลาด โปรดลองอีกครั้ง"},info:{title:"ข้อมูลติดต่อ",hours:"เวลาทำการ: 8:00 - 22:00 ทุกวัน"},feedback:{title:"ข้อเสนอแนะ",description:"เราให้ความสำคัญกับความคิดเห็นของคุณ"}},sS={navigation:X6,common:Q6,home:J6,restaurant:W6,spa:eS,sports:tS,beauty:iS,about:nS,promotions:aS,contacts:rS};yt.use(O5).use(q7).init({resources:{en:{translation:V6},ru:{translation:I6},th:{translation:sS}},fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});const oS={colors:{primary:"#90B3A7",secondary:"#D4A574",tertiary:"#B8C4A8",energy:"#E8734A",power:"#2D5B69",fresh:"#4A90B8",background:"#F5F3F0",surface:"#FFFFFF",surfaceSecondary:"#FDFCFA",text:{primary:"#2C3E2D",secondary:"#5A6B5D",light:"#8B9A8E",white:"#FFFFFF",dark:"#1A2B1D"},zones:{spa:"#90B3A7",restaurant:"#D4A574",fitness:"#E8734A",combat:"#2D5B69",pool:"#4A90B8",beauty:"#C8A8E9",sauna:"#8B7355"},success:"#7FB069",warning:"#E9B44C",error:"#E07A5F",info:"#4A90B8",gradients:{primary:"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)",secondary:"linear-gradient(135deg, #D4A574 0%, #E1B885 100%)",energy:"linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)",power:"linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)",fresh:"linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)",spa:"linear-gradient(135deg, #90B3A7 0%, #B8C4A8 50%, #A8C5B8 100%)",fitness:"linear-gradient(135deg, #E8734A 0%, #D4A574 50%, #F28A5F 100%)",combat:"linear-gradient(135deg, #2D5B69 0%, #1A2B1D 50%, #3D7084 100%)",pool:"linear-gradient(135deg, #4A90B8 0%, #90B3A7 50%, #5FA3CC 100%)",nature:"linear-gradient(135deg, #B8C4A8 0%, #A8C5B8 50%, #90B3A7 100%)",wellness:"linear-gradient(45deg, #F5F3F0 0%, #E8E5E0 100%)",hero:"linear-gradient(135deg, rgba(144, 179, 167, 0.9) 0%, rgba(232, 115, 74, 0.2) 50%, rgba(212, 165, 116, 0.8) 100%)",dynamic:"linear-gradient(45deg, #E8734A 0%, #2D5B69 50%, #4A90B8 100%)",strength:"linear-gradient(135deg, #2D5B69 0%, #E8734A 100%)"},overlay:{light:"rgba(245, 243, 240, 0.9)",medium:"rgba(144, 179, 167, 0.8)",dark:"rgba(44, 62, 45, 0.7)",energy:"rgba(232, 115, 74, 0.8)",power:"rgba(45, 91, 105, 0.8)"}},fonts:{primary:'"Inter", -apple-system, BlinkMacSystemFont, sans-serif',heading:'"Poppins", -apple-system, BlinkMacSystemFont, sans-serif',elegant:'"Playfair Display", Georgia, serif',strong:'"Oswald", Impact, sans-serif',mono:'"JetBrains Mono", Consolas, monospace'},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},shadows:{xs:"0 1px 2px 0 rgba(144, 179, 167, 0.05)",sm:"0 1px 3px 0 rgba(144, 179, 167, 0.08), 0 1px 2px 0 rgba(144, 179, 167, 0.06)",md:"0 4px 6px -1px rgba(144, 179, 167, 0.08), 0 2px 4px -1px rgba(144, 179, 167, 0.06)",lg:"0 10px 15px -3px rgba(144, 179, 167, 0.08), 0 4px 6px -2px rgba(144, 179, 167, 0.05)",xl:"0 20px 25px -5px rgba(144, 179, 167, 0.08), 0 10px 10px -5px rgba(144, 179, 167, 0.04)","2xl":"0 25px 50px -12px rgba(144, 179, 167, 0.25)",glow:"0 0 20px rgba(144, 179, 167, 0.15)",glowSecondary:"0 0 20px rgba(212, 165, 116, 0.15)",glowEnergy:"0 0 25px rgba(232, 115, 74, 0.2)",glowPower:"0 0 25px rgba(45, 91, 105, 0.2)",glowFresh:"0 0 25px rgba(74, 144, 184, 0.2)",dynamic:"0 8px 32px rgba(232, 115, 74, 0.15), 0 4px 16px rgba(45, 91, 105, 0.1)",strong:"0 12px 40px rgba(45, 91, 105, 0.2), 0 6px 20px rgba(232, 115, 74, 0.1)"},borderRadius:{none:"0",xs:"2px",sm:"4px",md:"8px",lg:"12px",xl:"16px","2xl":"24px","3xl":"32px",full:"50%",organic:"40% 60% 70% 30% / 40% 50% 60% 50%",dynamic:"20px 40px 20px 40px"},animation:{duration:{fast:"150ms",normal:"300ms",slow:"500ms",slower:"800ms",dynamic:"200ms"},easing:{linear:"linear",easeIn:"cubic-bezier(0.4, 0, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.2, 1)",easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",natural:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",bounce:"cubic-bezier(0.68, -0.55, 0.265, 1.55)",power:"cubic-bezier(0.19, 1, 0.22, 1)",dynamic:"cubic-bezier(0.25, 0.1, 0.25, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"}},spacing:{0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem"},zIndex:{hide:-1,base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},w0=w.createContext({});function S0(e){const i=w.useRef(null);return i.current===null&&(i.current=e()),i.current}const j0=typeof window<"u",k5=j0?w.useLayoutEffect:w.useEffect,dc=w.createContext(null);function A0(e,i){e.indexOf(i)===-1&&e.push(i)}function T0(e,i){const a=e.indexOf(i);a>-1&&e.splice(a,1)}const Pi=(e,i,a)=>a>i?i:a<e?e:a;let E0=()=>{};const Fi={},z5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function B5(e){return typeof e=="object"&&e!==null}const $5=e=>/^0[^.\s]+$/u.test(e);function C0(e){let i;return()=>(i===void 0&&(i=e()),i)}const Xt=e=>e,lS=(e,i)=>a=>i(e(a)),Ps=(...e)=>e.reduce(lS),ks=(e,i,a)=>{const s=i-e;return s===0?1:(a-e)/s};class R0{constructor(){this.subscriptions=[]}add(i){return A0(this.subscriptions,i),()=>T0(this.subscriptions,i)}notify(i,a,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](i,a,s);else for(let u=0;u<l;u++){const f=this.subscriptions[u];f&&f(i,a,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const pi=e=>e*1e3,mi=e=>e/1e3;function N5(e,i){return i?e*(1e3/i):0}const L5=(e,i,a)=>(((1-3*a+3*i)*e+(3*a-6*i))*e+3*i)*e,cS=1e-7,uS=12;function dS(e,i,a,s,l){let u,f,p=0;do f=i+(a-i)/2,u=L5(f,s,l)-e,u>0?a=f:i=f;while(Math.abs(u)>cS&&++p<uS);return f}function Fs(e,i,a,s){if(e===i&&a===s)return Xt;const l=u=>dS(u,0,1,e,a);return u=>u===0||u===1?u:L5(l(u),i,s)}const V5=e=>i=>i<=.5?e(2*i)/2:(2-e(2*(1-i)))/2,_5=e=>i=>1-e(1-i),H5=Fs(.33,1.53,.69,.99),D0=_5(H5),U5=V5(D0),P5=e=>(e*=2)<1?.5*D0(e):.5*(2-Math.pow(2,-10*(e-1))),M0=e=>1-Math.sin(Math.acos(e)),F5=_5(M0),q5=V5(M0),fS=Fs(.42,0,1,1),hS=Fs(0,0,.58,1),Y5=Fs(.42,0,.58,1),pS=e=>Array.isArray(e)&&typeof e[0]!="number",G5=e=>Array.isArray(e)&&typeof e[0]=="number",mS={linear:Xt,easeIn:fS,easeInOut:Y5,easeOut:hS,circIn:M0,circInOut:q5,circOut:F5,backIn:D0,backInOut:U5,backOut:H5,anticipate:P5},gS=e=>typeof e=="string",Q1=e=>{if(G5(e)){E0(e.length===4);const[i,a,s,l]=e;return Fs(i,a,s,l)}else if(gS(e))return mS[e];return e},dl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],J1={value:null};function yS(e,i){let a=new Set,s=new Set,l=!1,u=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1},g=0;function m(v){f.has(v)&&(y.schedule(v),e()),g++,v(p)}const y={schedule:(v,S=!1,A=!1)=>{const k=A&&l?a:s;return S&&f.add(v),k.has(v)||k.add(v),v},cancel:v=>{s.delete(v),f.delete(v)},process:v=>{if(p=v,l){u=!0;return}l=!0,[a,s]=[s,a],a.forEach(m),i&&J1.value&&J1.value.frameloop[i].push(g),g=0,a.clear(),l=!1,u&&(u=!1,y.process(v))}};return y}const xS=40;function K5(e,i){let a=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>a=!0,f=dl.reduce((M,Y)=>(M[Y]=yS(u,i?Y:void 0),M),{}),{setup:p,read:g,resolveKeyframes:m,preUpdate:y,update:v,preRender:S,render:A,postRender:T}=f,k=()=>{const M=Fi.useManualTiming?l.timestamp:performance.now();a=!1,Fi.useManualTiming||(l.delta=s?1e3/60:Math.max(Math.min(M-l.timestamp,xS),1)),l.timestamp=M,l.isProcessing=!0,p.process(l),g.process(l),m.process(l),y.process(l),v.process(l),S.process(l),A.process(l),T.process(l),l.isProcessing=!1,a&&i&&(s=!1,e(k))},B=()=>{a=!0,s=!0,l.isProcessing||e(k)};return{schedule:dl.reduce((M,Y)=>{const N=f[Y];return M[Y]=(K,I=!1,X=!1)=>(a||B(),N.schedule(K,I,X)),M},{}),cancel:M=>{for(let Y=0;Y<dl.length;Y++)f[dl[Y]].cancel(M)},state:l,steps:f}}const{schedule:He,cancel:bn,state:ct,steps:Pd}=K5(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xt,!0);let Ol;function bS(){Ol=void 0}const Et={now:()=>(Ol===void 0&&Et.set(ct.isProcessing||Fi.useManualTiming?ct.timestamp:performance.now()),Ol),set:e=>{Ol=e,queueMicrotask(bS)}},Z5=e=>i=>typeof i=="string"&&i.startsWith(e),O0=Z5("--"),vS=Z5("var(--"),k0=e=>vS(e)?wS.test(e.split("/*")[0].trim()):!1,wS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,dr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},zs={...dr,transform:e=>Pi(0,1,e)},fl={...dr,default:1},js=e=>Math.round(e*1e5)/1e5,z0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function SS(e){return e==null}const jS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,B0=(e,i)=>a=>!!(typeof a=="string"&&jS.test(a)&&a.startsWith(e)||i&&!SS(a)&&Object.prototype.hasOwnProperty.call(a,i)),I5=(e,i,a)=>s=>{if(typeof s!="string")return s;const[l,u,f,p]=s.match(z0);return{[e]:parseFloat(l),[i]:parseFloat(u),[a]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},AS=e=>Pi(0,255,e),Fd={...dr,transform:e=>Math.round(AS(e))},Gn={test:B0("rgb","red"),parse:I5("red","green","blue"),transform:({red:e,green:i,blue:a,alpha:s=1})=>"rgba("+Fd.transform(e)+", "+Fd.transform(i)+", "+Fd.transform(a)+", "+js(zs.transform(s))+")"};function TS(e){let i="",a="",s="",l="";return e.length>5?(i=e.substring(1,3),a=e.substring(3,5),s=e.substring(5,7),l=e.substring(7,9)):(i=e.substring(1,2),a=e.substring(2,3),s=e.substring(3,4),l=e.substring(4,5),i+=i,a+=a,s+=s,l+=l),{red:parseInt(i,16),green:parseInt(a,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const qf={test:B0("#"),parse:TS,transform:Gn.transform},qs=e=>({test:i=>typeof i=="string"&&i.endsWith(e)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${e}`}),xn=qs("deg"),gi=qs("%"),ce=qs("px"),ES=qs("vh"),CS=qs("vw"),W1={...gi,parse:e=>gi.parse(e)/100,transform:e=>gi.transform(e*100)},Ia={test:B0("hsl","hue"),parse:I5("hue","saturation","lightness"),transform:({hue:e,saturation:i,lightness:a,alpha:s=1})=>"hsla("+Math.round(e)+", "+gi.transform(js(i))+", "+gi.transform(js(a))+", "+js(zs.transform(s))+")"},pt={test:e=>Gn.test(e)||qf.test(e)||Ia.test(e),parse:e=>Gn.test(e)?Gn.parse(e):Ia.test(e)?Ia.parse(e):qf.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Gn.transform(e):Ia.transform(e)},RS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function DS(e){var i,a;return isNaN(e)&&typeof e=="string"&&(((i=e.match(z0))==null?void 0:i.length)||0)+(((a=e.match(RS))==null?void 0:a.length)||0)>0}const X5="number",Q5="color",MS="var",OS="var(",ey="${}",kS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Bs(e){const i=e.toString(),a=[],s={color:[],number:[],var:[]},l=[];let u=0;const p=i.replace(kS,g=>(pt.test(g)?(s.color.push(u),l.push(Q5),a.push(pt.parse(g))):g.startsWith(OS)?(s.var.push(u),l.push(MS),a.push(g)):(s.number.push(u),l.push(X5),a.push(parseFloat(g))),++u,ey)).split(ey);return{values:a,split:p,indexes:s,types:l}}function J5(e){return Bs(e).values}function W5(e){const{split:i,types:a}=Bs(e),s=i.length;return l=>{let u="";for(let f=0;f<s;f++)if(u+=i[f],l[f]!==void 0){const p=a[f];p===X5?u+=js(l[f]):p===Q5?u+=pt.transform(l[f]):u+=l[f]}return u}}const zS=e=>typeof e=="number"?0:e;function BS(e){const i=J5(e);return W5(e)(i.map(zS))}const vn={test:DS,parse:J5,createTransformer:W5,getAnimatableNone:BS};function qd(e,i,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+(i-e)*6*a:a<1/2?i:a<2/3?e+(i-e)*(2/3-a)*6:e}function $S({hue:e,saturation:i,lightness:a,alpha:s}){e/=360,i/=100,a/=100;let l=0,u=0,f=0;if(!i)l=u=f=a;else{const p=a<.5?a*(1+i):a+i-a*i,g=2*a-p;l=qd(g,p,e+1/3),u=qd(g,p,e),f=qd(g,p,e-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(f*255),alpha:s}}function Il(e,i){return a=>a>0?i:e}const Ve=(e,i,a)=>e+(i-e)*a,Yd=(e,i,a)=>{const s=e*e,l=a*(i*i-s)+s;return l<0?0:Math.sqrt(l)},NS=[qf,Gn,Ia],LS=e=>NS.find(i=>i.test(e));function ty(e){const i=LS(e);if(!i)return!1;let a=i.parse(e);return i===Ia&&(a=$S(a)),a}const iy=(e,i)=>{const a=ty(e),s=ty(i);if(!a||!s)return Il(e,i);const l={...a};return u=>(l.red=Yd(a.red,s.red,u),l.green=Yd(a.green,s.green,u),l.blue=Yd(a.blue,s.blue,u),l.alpha=Ve(a.alpha,s.alpha,u),Gn.transform(l))},Yf=new Set(["none","hidden"]);function VS(e,i){return Yf.has(e)?a=>a<=0?e:i:a=>a>=1?i:e}function _S(e,i){return a=>Ve(e,i,a)}function $0(e){return typeof e=="number"?_S:typeof e=="string"?k0(e)?Il:pt.test(e)?iy:PS:Array.isArray(e)?eb:typeof e=="object"?pt.test(e)?iy:HS:Il}function eb(e,i){const a=[...e],s=a.length,l=e.map((u,f)=>$0(u)(u,i[f]));return u=>{for(let f=0;f<s;f++)a[f]=l[f](u);return a}}function HS(e,i){const a={...e,...i},s={};for(const l in a)e[l]!==void 0&&i[l]!==void 0&&(s[l]=$0(e[l])(e[l],i[l]));return l=>{for(const u in s)a[u]=s[u](l);return a}}function US(e,i){const a=[],s={color:0,var:0,number:0};for(let l=0;l<i.values.length;l++){const u=i.types[l],f=e.indexes[u][s[u]],p=e.values[f]??0;a[l]=p,s[u]++}return a}const PS=(e,i)=>{const a=vn.createTransformer(i),s=Bs(e),l=Bs(i);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?Yf.has(e)&&!l.values.length||Yf.has(i)&&!s.values.length?VS(e,i):Ps(eb(US(s,l),l.values),a):Il(e,i)};function tb(e,i,a){return typeof e=="number"&&typeof i=="number"&&typeof a=="number"?Ve(e,i,a):$0(e)(e,i)}const FS=e=>{const i=({timestamp:a})=>e(a);return{start:(a=!0)=>He.update(i,a),stop:()=>bn(i),now:()=>ct.isProcessing?ct.timestamp:Et.now()}},ib=(e,i,a=10)=>{let s="";const l=Math.max(Math.round(i/a),2);for(let u=0;u<l;u++)s+=e(u/(l-1))+", ";return`linear(${s.substring(0,s.length-2)})`},Xl=2e4;function N0(e){let i=0;const a=50;let s=e.next(i);for(;!s.done&&i<Xl;)i+=a,s=e.next(i);return i>=Xl?1/0:i}function qS(e,i=100,a){const s=a({...e,keyframes:[0,i]}),l=Math.min(N0(s),Xl);return{type:"keyframes",ease:u=>s.next(l*u).value/i,duration:mi(l)}}const YS=5;function nb(e,i,a){const s=Math.max(i-YS,0);return N5(a-e(s),i-s)}const Ye={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ny=.001;function GS({duration:e=Ye.duration,bounce:i=Ye.bounce,velocity:a=Ye.velocity,mass:s=Ye.mass}){let l,u,f=1-i;f=Pi(Ye.minDamping,Ye.maxDamping,f),e=Pi(Ye.minDuration,Ye.maxDuration,mi(e)),f<1?(l=m=>{const y=m*f,v=y*e,S=y-a,A=Gf(m,f),T=Math.exp(-v);return ny-S/A*T},u=m=>{const v=m*f*e,S=v*a+a,A=Math.pow(f,2)*Math.pow(m,2)*e,T=Math.exp(-v),k=Gf(Math.pow(m,2),f);return(-l(m)+ny>0?-1:1)*((S-A)*T)/k}):(l=m=>{const y=Math.exp(-m*e),v=(m-a)*e+1;return-.001+y*v},u=m=>{const y=Math.exp(-m*e),v=(a-m)*(e*e);return y*v});const p=5/e,g=ZS(l,u,p);if(e=pi(e),isNaN(g))return{stiffness:Ye.stiffness,damping:Ye.damping,duration:e};{const m=Math.pow(g,2)*s;return{stiffness:m,damping:f*2*Math.sqrt(s*m),duration:e}}}const KS=12;function ZS(e,i,a){let s=a;for(let l=1;l<KS;l++)s=s-e(s)/i(s);return s}function Gf(e,i){return e*Math.sqrt(1-i*i)}const IS=["duration","bounce"],XS=["stiffness","damping","mass"];function ay(e,i){return i.some(a=>e[a]!==void 0)}function QS(e){let i={velocity:Ye.velocity,stiffness:Ye.stiffness,damping:Ye.damping,mass:Ye.mass,isResolvedFromDuration:!1,...e};if(!ay(e,XS)&&ay(e,IS))if(e.visualDuration){const a=e.visualDuration,s=2*Math.PI/(a*1.2),l=s*s,u=2*Pi(.05,1,1-(e.bounce||0))*Math.sqrt(l);i={...i,mass:Ye.mass,stiffness:l,damping:u}}else{const a=GS(e);i={...i,...a,mass:Ye.mass},i.isResolvedFromDuration=!0}return i}function Ql(e=Ye.visualDuration,i=Ye.bounce){const a=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:i}:e;let{restSpeed:s,restDelta:l}=a;const u=a.keyframes[0],f=a.keyframes[a.keyframes.length-1],p={done:!1,value:u},{stiffness:g,damping:m,mass:y,duration:v,velocity:S,isResolvedFromDuration:A}=QS({...a,velocity:-mi(a.velocity||0)}),T=S||0,k=m/(2*Math.sqrt(g*y)),B=f-u,O=mi(Math.sqrt(g/y)),H=Math.abs(B)<5;s||(s=H?Ye.restSpeed.granular:Ye.restSpeed.default),l||(l=H?Ye.restDelta.granular:Ye.restDelta.default);let M;if(k<1){const N=Gf(O,k);M=K=>{const I=Math.exp(-k*O*K);return f-I*((T+k*O*B)/N*Math.sin(N*K)+B*Math.cos(N*K))}}else if(k===1)M=N=>f-Math.exp(-O*N)*(B+(T+O*B)*N);else{const N=O*Math.sqrt(k*k-1);M=K=>{const I=Math.exp(-k*O*K),X=Math.min(N*K,300);return f-I*((T+k*O*B)*Math.sinh(X)+N*B*Math.cosh(X))/N}}const Y={calculatedDuration:A&&v||null,next:N=>{const K=M(N);if(A)p.done=N>=v;else{let I=N===0?T:0;k<1&&(I=N===0?pi(T):nb(M,N,K));const X=Math.abs(I)<=s,W=Math.abs(f-K)<=l;p.done=X&&W}return p.value=p.done?f:K,p},toString:()=>{const N=Math.min(N0(Y),Xl),K=ib(I=>Y.next(N*I).value,N,30);return N+"ms "+K},toTransition:()=>{}};return Y}Ql.applyToOptions=e=>{const i=qS(e,100,Ql);return e.ease=i.ease,e.duration=pi(i.duration),e.type="keyframes",e};function Kf({keyframes:e,velocity:i=0,power:a=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:f,min:p,max:g,restDelta:m=.5,restSpeed:y}){const v=e[0],S={done:!1,value:v},A=X=>p!==void 0&&X<p||g!==void 0&&X>g,T=X=>p===void 0?g:g===void 0||Math.abs(p-X)<Math.abs(g-X)?p:g;let k=a*i;const B=v+k,O=f===void 0?B:f(B);O!==B&&(k=O-v);const H=X=>-k*Math.exp(-X/s),M=X=>O+H(X),Y=X=>{const W=H(X),ie=M(X);S.done=Math.abs(W)<=m,S.value=S.done?O:ie};let N,K;const I=X=>{A(S.value)&&(N=X,K=Ql({keyframes:[S.value,T(S.value)],velocity:nb(M,X,S.value),damping:l,stiffness:u,restDelta:m,restSpeed:y}))};return I(0),{calculatedDuration:null,next:X=>{let W=!1;return!K&&N===void 0&&(W=!0,Y(X),I(X)),N!==void 0&&X>=N?K.next(X-N):(!W&&Y(X),S)}}}function JS(e,i,a){const s=[],l=a||Fi.mix||tb,u=e.length-1;for(let f=0;f<u;f++){let p=l(e[f],e[f+1]);if(i){const g=Array.isArray(i)?i[f]||Xt:i;p=Ps(g,p)}s.push(p)}return s}function WS(e,i,{clamp:a=!0,ease:s,mixer:l}={}){const u=e.length;if(E0(u===i.length),u===1)return()=>i[0];if(u===2&&i[0]===i[1])return()=>i[1];const f=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),i=[...i].reverse());const p=JS(i,s,l),g=p.length,m=y=>{if(f&&y<e[0])return i[0];let v=0;if(g>1)for(;v<e.length-2&&!(y<e[v+1]);v++);const S=ks(e[v],e[v+1],y);return p[v](S)};return a?y=>m(Pi(e[0],e[u-1],y)):m}function e8(e,i){const a=e[e.length-1];for(let s=1;s<=i;s++){const l=ks(0,i,s);e.push(Ve(a,1,l))}}function t8(e){const i=[0];return e8(i,e.length-1),i}function i8(e,i){return e.map(a=>a*i)}function n8(e,i){return e.map(()=>i||Y5).splice(0,e.length-1)}function As({duration:e=300,keyframes:i,times:a,ease:s="easeInOut"}){const l=pS(s)?s.map(Q1):Q1(s),u={done:!1,value:i[0]},f=i8(a&&a.length===i.length?a:t8(i),e),p=WS(f,i,{ease:Array.isArray(l)?l:n8(i,l)});return{calculatedDuration:e,next:g=>(u.value=p(g),u.done=g>=e,u)}}const a8=e=>e!==null;function L0(e,{repeat:i,repeatType:a="loop"},s,l=1){const u=e.filter(a8),p=l<0||i&&a!=="loop"&&i%2===1?0:u.length-1;return!p||s===void 0?u[p]:s}const r8={decay:Kf,inertia:Kf,tween:As,keyframes:As,spring:Ql};function ab(e){typeof e.type=="string"&&(e.type=r8[e.type])}class V0{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,a){return this.finished.then(i,a)}}const s8=e=>e/100;class _0 extends V0{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=(a=!0)=>{var s,l;if(a){const{motionValue:u}=this.options;u&&u.updatedAt!==Et.now()&&this.tick(Et.now())}this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(l=(s=this.options).onStop)==null||l.call(s))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;ab(i);const{type:a=As,repeat:s=0,repeatDelay:l=0,repeatType:u,velocity:f=0}=i;let{keyframes:p}=i;const g=a||As;g!==As&&typeof p[0]!="number"&&(this.mixKeyframes=Ps(s8,tb(p[0],p[1])),p=[0,100]);const m=g({...i,keyframes:p});u==="mirror"&&(this.mirroredGenerator=g({...i,keyframes:[...p].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=N0(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(s+1)-l,this.generator=m}updateTime(i){const a=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(i,a=!1){const{generator:s,totalDuration:l,mixKeyframes:u,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:g}=this;if(this.startTime===null)return s.next(0);const{delay:m=0,keyframes:y,repeat:v,repeatType:S,repeatDelay:A,type:T,onUpdate:k,finalKeyframe:B}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-l/this.speed,this.startTime)),a?this.currentTime=i:this.updateTime(i);const O=this.currentTime-m*(this.playbackSpeed>=0?1:-1),H=this.playbackSpeed>=0?O<0:O>l;this.currentTime=Math.max(O,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let M=this.currentTime,Y=s;if(v){const X=Math.min(this.currentTime,l)/p;let W=Math.floor(X),ie=X%1;!ie&&X>=1&&(ie=1),ie===1&&W--,W=Math.min(W,v+1),!!(W%2)&&(S==="reverse"?(ie=1-ie,A&&(ie-=A/p)):S==="mirror"&&(Y=f)),M=Pi(0,1,ie)*p}const N=H?{done:!1,value:y[0]}:Y.next(M);u&&(N.value=u(N.value));let{done:K}=N;!H&&g!==null&&(K=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return I&&T!==Kf&&(N.value=L0(y,this.options,B,this.speed)),k&&k(N.value),I&&this.finish(),N}then(i,a){return this.finished.then(i,a)}get duration(){return mi(this.calculatedDuration)}get time(){return mi(this.currentTime)}set time(i){var a;i=pi(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(a=this.driver)==null||a.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(Et.now());const a=this.playbackSpeed!==i;this.playbackSpeed=i,a&&(this.time=mi(this.currentTime))}play(){var l,u;if(this.isStopped)return;const{driver:i=FS,startTime:a}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),(u=(l=this.options).onPlay)==null||u.call(l);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=a??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Et.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,a;this.notifyFinished(),this.teardown(),this.state="finished",(a=(i=this.options).onComplete)==null||a.call(i)}cancel(){var i,a;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(a=(i=this.options).onCancel)==null||a.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var a;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(a=this.driver)==null||a.stop(),i.observe(this)}}function o8(e){for(let i=1;i<e.length;i++)e[i]??(e[i]=e[i-1])}const Kn=e=>e*180/Math.PI,Zf=e=>{const i=Kn(Math.atan2(e[1],e[0]));return If(i)},l8={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Zf,rotateZ:Zf,skewX:e=>Kn(Math.atan(e[1])),skewY:e=>Kn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},If=e=>(e=e%360,e<0&&(e+=360),e),ry=Zf,sy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),oy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),c8={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:sy,scaleY:oy,scale:e=>(sy(e)+oy(e))/2,rotateX:e=>If(Kn(Math.atan2(e[6],e[5]))),rotateY:e=>If(Kn(Math.atan2(-e[2],e[0]))),rotateZ:ry,rotate:ry,skewX:e=>Kn(Math.atan(e[4])),skewY:e=>Kn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Xf(e){return e.includes("scale")?1:0}function Qf(e,i){if(!e||e==="none")return Xf(i);const a=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,l;if(a)s=c8,l=a;else{const p=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=l8,l=p}if(!l)return Xf(i);const u=s[i],f=l[1].split(",").map(d8);return typeof u=="function"?u(f):f[u]}const u8=(e,i)=>{const{transform:a="none"}=getComputedStyle(e);return Qf(a,i)};function d8(e){return parseFloat(e.trim())}const fr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],hr=new Set(fr),ly=e=>e===dr||e===ce,f8=new Set(["x","y","z"]),h8=fr.filter(e=>!f8.has(e));function p8(e){const i=[];return h8.forEach(a=>{const s=e.getValue(a);s!==void 0&&(i.push([a,s.get()]),s.set(a.startsWith("scale")?1:0))}),i}const Jn={width:({x:e},{paddingLeft:i="0",paddingRight:a="0"})=>e.max-e.min-parseFloat(i)-parseFloat(a),height:({y:e},{paddingTop:i="0",paddingBottom:a="0"})=>e.max-e.min-parseFloat(i)-parseFloat(a),top:(e,{top:i})=>parseFloat(i),left:(e,{left:i})=>parseFloat(i),bottom:({y:e},{top:i})=>parseFloat(i)+(e.max-e.min),right:({x:e},{left:i})=>parseFloat(i)+(e.max-e.min),x:(e,{transform:i})=>Qf(i,"x"),y:(e,{transform:i})=>Qf(i,"y")};Jn.translateX=Jn.x;Jn.translateY=Jn.y;const Wn=new Set;let Jf=!1,Wf=!1,e0=!1;function rb(){if(Wf){const e=Array.from(Wn).filter(s=>s.needsMeasurement),i=new Set(e.map(s=>s.element)),a=new Map;i.forEach(s=>{const l=p8(s);l.length&&(a.set(s,l),s.render())}),e.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const l=a.get(s);l&&l.forEach(([u,f])=>{var p;(p=s.getValue(u))==null||p.set(f)})}),e.forEach(s=>s.measureEndState()),e.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Wf=!1,Jf=!1,Wn.forEach(e=>e.complete(e0)),Wn.clear()}function sb(){Wn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Wf=!0)})}function m8(){e0=!0,sb(),rb(),e0=!1}class H0{constructor(i,a,s,l,u,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=a,this.name=s,this.motionValue=l,this.element=u,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Wn.add(this),Jf||(Jf=!0,He.read(sb),He.resolveKeyframes(rb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:a,element:s,motionValue:l}=this;if(i[0]===null){const u=l==null?void 0:l.get(),f=i[i.length-1];if(u!==void 0)i[0]=u;else if(s&&a){const p=s.readValue(a,f);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=f),l&&u===void 0&&l.set(i[0])}o8(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Wn.delete(this)}cancel(){this.state==="scheduled"&&(Wn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const g8=e=>e.startsWith("--");function y8(e,i,a){g8(i)?e.style.setProperty(i,a):e.style[i]=a}const x8=C0(()=>window.ScrollTimeline!==void 0),b8={};function v8(e,i){const a=C0(e);return()=>b8[i]??a()}const ob=v8(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),bs=([e,i,a,s])=>`cubic-bezier(${e}, ${i}, ${a}, ${s})`,cy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:bs([0,.65,.55,1]),circOut:bs([.55,0,1,.45]),backIn:bs([.31,.01,.66,-.59]),backOut:bs([.33,1.53,.69,.99])};function lb(e,i){if(e)return typeof e=="function"?ob()?ib(e,i):"ease-out":G5(e)?bs(e):Array.isArray(e)?e.map(a=>lb(a,i)||cy.easeOut):cy[e]}function w8(e,i,a,{delay:s=0,duration:l=300,repeat:u=0,repeatType:f="loop",ease:p="easeOut",times:g}={},m=void 0){const y={[i]:a};g&&(y.offset=g);const v=lb(p,l);Array.isArray(v)&&(y.easing=v);const S={delay:s,duration:l,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:u+1,direction:f==="reverse"?"alternate":"normal"};return m&&(S.pseudoElement=m),e.animate(y,S)}function cb(e){return typeof e=="function"&&"applyToOptions"in e}function S8({type:e,...i}){return cb(e)&&ob()?e.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class j8 extends V0{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:a,name:s,keyframes:l,pseudoElement:u,allowFlatten:f=!1,finalKeyframe:p,onComplete:g}=i;this.isPseudoElement=!!u,this.allowFlatten=f,this.options=i,E0(typeof i.type!="string");const m=S8(i);this.animation=w8(a,s,l,m,u),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const y=L0(l,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):y8(a,s,y),this.animation.cancel()}g==null||g(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,a;(a=(i=this.animation).finish)==null||a.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,a;this.isPseudoElement||(a=(i=this.animation).commitStyles)==null||a.call(i)}get duration(){var a,s;const i=((s=(a=this.animation.effect)==null?void 0:a.getComputedTiming)==null?void 0:s.call(a).duration)||0;return mi(Number(i))}get time(){return mi(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=pi(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:a}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&x8()?(this.animation.timeline=i,Xt):a(this)}}const ub={anticipate:P5,backInOut:U5,circInOut:q5};function A8(e){return e in ub}function T8(e){typeof e.ease=="string"&&A8(e.ease)&&(e.ease=ub[e.ease])}const uy=10;class E8 extends j8{constructor(i){T8(i),ab(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:a,onUpdate:s,onComplete:l,element:u,...f}=this.options;if(!a)return;if(i!==void 0){a.set(i);return}const p=new _0({...f,autoplay:!1}),g=pi(this.finishedTime??this.time);a.setWithVelocity(p.sample(g-uy).value,p.sample(g).value,uy),p.stop()}}const dy=(e,i)=>i==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(vn.test(e)||e==="0")&&!e.startsWith("url("));function C8(e){const i=e[0];if(e.length===1)return!0;for(let a=0;a<e.length;a++)if(e[a]!==i)return!0}function R8(e,i,a,s){const l=e[0];if(l===null)return!1;if(i==="display"||i==="visibility")return!0;const u=e[e.length-1],f=dy(l,i),p=dy(u,i);return!f||!p?!1:C8(e)||(a==="spring"||cb(a))&&s}function U0(e){return B5(e)&&"offsetHeight"in e}const D8=new Set(["opacity","clipPath","filter","transform"]),M8=C0(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function O8(e){var m;const{motionValue:i,name:a,repeatDelay:s,repeatType:l,damping:u,type:f}=e;if(!U0((m=i==null?void 0:i.owner)==null?void 0:m.current))return!1;const{onUpdate:p,transformTemplate:g}=i.owner.getProps();return M8()&&a&&D8.has(a)&&(a!=="transform"||!g)&&!p&&!s&&l!=="mirror"&&u!==0&&f!=="inertia"}const k8=40;class z8 extends V0{constructor({autoplay:i=!0,delay:a=0,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:f="loop",keyframes:p,name:g,motionValue:m,element:y,...v}){var T;super(),this.stop=()=>{var k,B;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(B=this.keyframeResolver)==null||B.cancel()},this.createdAt=Et.now();const S={autoplay:i,delay:a,type:s,repeat:l,repeatDelay:u,repeatType:f,name:g,motionValue:m,element:y,...v},A=(y==null?void 0:y.KeyframeResolver)||H0;this.keyframeResolver=new A(p,(k,B,O)=>this.onKeyframesResolved(k,B,S,!O),g,m,y),(T=this.keyframeResolver)==null||T.scheduleResolve()}onKeyframesResolved(i,a,s,l){this.keyframeResolver=void 0;const{name:u,type:f,velocity:p,delay:g,isHandoff:m,onUpdate:y}=s;this.resolvedAt=Et.now(),R8(i,u,f,p)||((Fi.instantAnimations||!g)&&(y==null||y(L0(i,s,a))),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const S={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>k8?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...s,keyframes:i},A=!m&&O8(S)?new E8({...S,element:S.motionValue.owner.current}):new _0(S);A.finished.then(()=>this.notifyFinished()).catch(Xt),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(i,a){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),m8()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}const B8=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $8(e){const i=B8.exec(e);if(!i)return[,];const[,a,s,l]=i;return[`--${a??s}`,l]}function db(e,i,a=1){const[s,l]=$8(e);if(!s)return;const u=window.getComputedStyle(i).getPropertyValue(s);if(u){const f=u.trim();return z5(f)?parseFloat(f):f}return k0(l)?db(l,i,a+1):l}function P0(e,i){return(e==null?void 0:e[i])??(e==null?void 0:e.default)??e}const fb=new Set(["width","height","top","left","right","bottom",...fr]),N8={test:e=>e==="auto",parse:e=>e},hb=e=>i=>i.test(e),pb=[dr,ce,gi,xn,CS,ES,N8],fy=e=>pb.find(hb(e));function L8(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||$5(e):!0}const V8=new Set(["brightness","contrast","saturate","opacity"]);function _8(e){const[i,a]=e.slice(0,-1).split("(");if(i==="drop-shadow")return e;const[s]=a.match(z0)||[];if(!s)return e;const l=a.replace(s,"");let u=V8.has(i)?1:0;return s!==a&&(u*=100),i+"("+u+l+")"}const H8=/\b([a-z-]*)\(.*?\)/gu,t0={...vn,getAnimatableNone:e=>{const i=e.match(H8);return i?i.map(_8).join(" "):e}},hy={...dr,transform:Math.round},U8={rotate:xn,rotateX:xn,rotateY:xn,rotateZ:xn,scale:fl,scaleX:fl,scaleY:fl,scaleZ:fl,skew:xn,skewX:xn,skewY:xn,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:zs,originX:W1,originY:W1,originZ:ce},F0={borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,backgroundPositionX:ce,backgroundPositionY:ce,...U8,zIndex:hy,fillOpacity:zs,strokeOpacity:zs,numOctaves:hy},P8={...F0,color:pt,backgroundColor:pt,outlineColor:pt,fill:pt,stroke:pt,borderColor:pt,borderTopColor:pt,borderRightColor:pt,borderBottomColor:pt,borderLeftColor:pt,filter:t0,WebkitFilter:t0},mb=e=>P8[e];function gb(e,i){let a=mb(e);return a!==t0&&(a=vn),a.getAnimatableNone?a.getAnimatableNone(i):void 0}const F8=new Set(["auto","none","0"]);function q8(e,i,a){let s=0,l;for(;s<e.length&&!l;){const u=e[s];typeof u=="string"&&!F8.has(u)&&Bs(u).values.length&&(l=e[s]),s++}if(l&&a)for(const u of i)e[u]=gb(a,l)}class Y8 extends H0{constructor(i,a,s,l,u){super(i,a,s,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:a,name:s}=this;if(!a||!a.current)return;super.readKeyframes();for(let g=0;g<i.length;g++){let m=i[g];if(typeof m=="string"&&(m=m.trim(),k0(m))){const y=db(m,a.current);y!==void 0&&(i[g]=y),g===i.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!fb.has(s)||i.length!==2)return;const[l,u]=i,f=fy(l),p=fy(u);if(f!==p)if(ly(f)&&ly(p))for(let g=0;g<i.length;g++){const m=i[g];typeof m=="string"&&(i[g]=parseFloat(m))}else Jn[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:a}=this,s=[];for(let l=0;l<i.length;l++)(i[l]===null||L8(i[l]))&&s.push(l);s.length&&q8(i,s,a)}measureInitialState(){const{element:i,unresolvedKeyframes:a,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Jn[s](i.measureViewportBox(),window.getComputedStyle(i.current)),a[0]=this.measuredOrigin;const l=a[a.length-1];l!==void 0&&i.getValue(s,l).jump(l,!1)}measureEndState(){var p;const{element:i,name:a,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const l=i.getValue(a);l&&l.jump(this.measuredOrigin,!1);const u=s.length-1,f=s[u];s[u]=Jn[a](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([g,m])=>{i.getValue(g).set(m)}),this.resolveNoneKeyframes()}}function G8(e,i,a){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let s=document;const l=(a==null?void 0:a[e])??s.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}const py=30,K8=e=>!isNaN(parseFloat(e));class Z8{constructor(i,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,l=!0)=>{var f,p;const u=Et.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const g of this.dependents)g.dirty();l&&((p=this.events.renderRequest)==null||p.notify(this.current))},this.hasAnimated=!1,this.setCurrent(i),this.owner=a.owner}setCurrent(i){this.current=i,this.updatedAt=Et.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=K8(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,a){this.events[i]||(this.events[i]=new R0);const s=this.events[i].add(a);return i==="change"?()=>{s(),He.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,a){this.passiveEffect=i,this.stopPassiveEffect=a}set(i,a=!0){!a||!this.passiveEffect?this.updateAndNotify(i,a):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,a,s){this.set(a),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,a=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Et.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>py)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,py);return N5(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(i){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=i(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,a;(i=this.dependents)==null||i.clear(),(a=this.events.destroy)==null||a.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(e,i){return new Z8(e,i)}const yb=(e,i)=>i&&typeof e=="number"?i.transform(e):e,{schedule:q0}=K5(queueMicrotask,!1),ni={x:!1,y:!1};function xb(){return ni.x||ni.y}function I8(e){return e==="x"||e==="y"?ni[e]?null:(ni[e]=!0,()=>{ni[e]=!1}):ni.x||ni.y?null:(ni.x=ni.y=!0,()=>{ni.x=ni.y=!1})}function bb(e,i){const a=G8(e),s=new AbortController,l={passive:!0,...i,signal:s.signal};return[a,l,()=>s.abort()]}function my(e){return!(e.pointerType==="touch"||xb())}function X8(e,i,a={}){const[s,l,u]=bb(e,a),f=p=>{if(!my(p))return;const{target:g}=p,m=i(g,p);if(typeof m!="function"||!g)return;const y=v=>{my(v)&&(m(v),g.removeEventListener("pointerleave",y))};g.addEventListener("pointerleave",y,l)};return s.forEach(p=>{p.addEventListener("pointerenter",f,l)}),u}const vb=(e,i)=>i?e===i?!0:vb(e,i.parentElement):!1,Y0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Q8=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function J8(e){return Q8.has(e.tagName)||e.tabIndex!==-1}const kl=new WeakSet;function gy(e){return i=>{i.key==="Enter"&&e(i)}}function Gd(e,i){e.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const W8=(e,i)=>{const a=e.currentTarget;if(!a)return;const s=gy(()=>{if(kl.has(a))return;Gd(a,"down");const l=gy(()=>{Gd(a,"up")}),u=()=>Gd(a,"cancel");a.addEventListener("keyup",l,i),a.addEventListener("blur",u,i)});a.addEventListener("keydown",s,i),a.addEventListener("blur",()=>a.removeEventListener("keydown",s),i)};function yy(e){return Y0(e)&&!xb()}function e9(e,i,a={}){const[s,l,u]=bb(e,a),f=p=>{const g=p.currentTarget;if(!yy(p))return;kl.add(g);const m=i(g,p),y=(A,T)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",S),kl.has(g)&&kl.delete(g),yy(A)&&typeof m=="function"&&m(A,{success:T})},v=A=>{y(A,g===window||g===document||a.useGlobalTarget||vb(g,A.target))},S=A=>{y(A,!1)};window.addEventListener("pointerup",v,l),window.addEventListener("pointercancel",S,l)};return s.forEach(p=>{(a.useGlobalTarget?window:p).addEventListener("pointerdown",f,l),U0(p)&&(p.addEventListener("focus",m=>W8(m,l)),!J8(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),u}function wb(e){return B5(e)&&"ownerSVGElement"in e}function t9(e){return wb(e)&&e.tagName==="svg"}const gt=e=>!!(e&&e.getVelocity),i9=[...pb,pt,vn],n9=e=>i9.find(hb(e)),G0=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class a9 extends w.Component{getSnapshotBeforeUpdate(i){const a=this.props.childRef.current;if(a&&i.isPresent&&!this.props.isPresent){const s=a.offsetParent,l=U0(s)&&s.offsetWidth||0,u=this.props.sizeRef.current;u.height=a.offsetHeight||0,u.width=a.offsetWidth||0,u.top=a.offsetTop,u.left=a.offsetLeft,u.right=l-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function r9({children:e,isPresent:i,anchorX:a}){const s=w.useId(),l=w.useRef(null),u=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=w.useContext(G0);return w.useInsertionEffect(()=>{const{width:p,height:g,top:m,left:y,right:v}=u.current;if(i||!l.current||!p||!g)return;const S=a==="left"?`left: ${y}`:`right: ${v}`;l.current.dataset.motionPopId=s;const A=document.createElement("style");return f&&(A.nonce=f),document.head.appendChild(A),A.sheet&&A.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${g}px !important;
            ${S}px !important;
            top: ${m}px !important;
          }
        `),()=>{document.head.contains(A)&&document.head.removeChild(A)}},[i]),d.jsx(a9,{isPresent:i,childRef:l,sizeRef:u,children:w.cloneElement(e,{ref:l})})}const s9=({children:e,initial:i,isPresent:a,onExitComplete:s,custom:l,presenceAffectsLayout:u,mode:f,anchorX:p})=>{const g=S0(o9),m=w.useId();let y=!0,v=w.useMemo(()=>(y=!1,{id:m,initial:i,isPresent:a,custom:l,onExitComplete:S=>{g.set(S,!0);for(const A of g.values())if(!A)return;s&&s()},register:S=>(g.set(S,!1),()=>g.delete(S))}),[a,g,s]);return u&&y&&(v={...v}),w.useMemo(()=>{g.forEach((S,A)=>g.set(A,!1))},[a]),w.useEffect(()=>{!a&&!g.size&&s&&s()},[a]),f==="popLayout"&&(e=d.jsx(r9,{isPresent:a,anchorX:p,children:e})),d.jsx(dc.Provider,{value:v,children:e})};function o9(){return new Map}function Sb(e=!0){const i=w.useContext(dc);if(i===null)return[!0,null];const{isPresent:a,onExitComplete:s,register:l}=i,u=w.useId();w.useEffect(()=>{if(e)return l(u)},[e]);const f=w.useCallback(()=>e&&s&&s(u),[u,s,e]);return!a&&s?[!1,f]:[!0]}const hl=e=>e.key||"";function xy(e){const i=[];return w.Children.forEach(e,a=>{w.isValidElement(a)&&i.push(a)}),i}const ia=({children:e,custom:i,initial:a=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:u="sync",propagate:f=!1,anchorX:p="left"})=>{const[g,m]=Sb(f),y=w.useMemo(()=>xy(e),[e]),v=f&&!g?[]:y.map(hl),S=w.useRef(!0),A=w.useRef(y),T=S0(()=>new Map),[k,B]=w.useState(y),[O,H]=w.useState(y);k5(()=>{S.current=!1,A.current=y;for(let N=0;N<O.length;N++){const K=hl(O[N]);v.includes(K)?T.delete(K):T.get(K)!==!0&&T.set(K,!1)}},[O,v.length,v.join("-")]);const M=[];if(y!==k){let N=[...y];for(let K=0;K<O.length;K++){const I=O[K],X=hl(I);v.includes(X)||(N.splice(K,0,I),M.push(I))}return u==="wait"&&M.length&&(N=M),H(xy(N)),B(y),null}const{forceRender:Y}=w.useContext(w0);return d.jsx(d.Fragment,{children:O.map(N=>{const K=hl(N),I=f&&!g?!1:y===O||v.includes(K),X=()=>{if(T.has(K))T.set(K,!0);else return;let W=!0;T.forEach(ie=>{ie||(W=!1)}),W&&(Y==null||Y(),H(A.current),f&&(m==null||m()),s&&s())};return d.jsx(s9,{isPresent:I,initial:!S.current||a?void 0:!1,custom:i,presenceAffectsLayout:l,mode:u,onExitComplete:I?void 0:X,anchorX:p,children:N},K)})})},jb=w.createContext({strict:!1}),by={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},sr={};for(const e in by)sr[e]={isEnabled:i=>by[e].some(a=>!!i[a])};function l9(e){for(const i in e)sr[i]={...sr[i],...e[i]}}const c9=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Jl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||c9.has(e)}let Ab=e=>!Jl(e);function u9(e){e&&(Ab=i=>i.startsWith("on")?!Jl(i):e(i))}try{u9(require("@emotion/is-prop-valid").default)}catch{}function d9(e,i,a){const s={};for(const l in e)l==="values"&&typeof e.values=="object"||(Ab(l)||a===!0&&Jl(l)||!i&&!Jl(l)||e.draggable&&l.startsWith("onDrag"))&&(s[l]=e[l]);return s}function f9(e){if(typeof Proxy>"u")return e;const i=new Map,a=(...s)=>e(...s);return new Proxy(a,{get:(s,l)=>l==="create"?e:(i.has(l)||i.set(l,e(l)),i.get(l))})}const fc=w.createContext({});function hc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function $s(e){return typeof e=="string"||Array.isArray(e)}const K0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Z0=["initial",...K0];function pc(e){return hc(e.animate)||Z0.some(i=>$s(e[i]))}function Tb(e){return!!(pc(e)||e.variants)}function h9(e,i){if(pc(e)){const{initial:a,animate:s}=e;return{initial:a===!1||$s(a)?a:void 0,animate:$s(s)?s:void 0}}return e.inherit!==!1?i:{}}function p9(e){const{initial:i,animate:a}=h9(e,w.useContext(fc));return w.useMemo(()=>({initial:i,animate:a}),[vy(i),vy(a)])}function vy(e){return Array.isArray(e)?e.join(" "):e}const m9=Symbol.for("motionComponentSymbol");function Xa(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function g9(e,i,a){return w.useCallback(s=>{s&&e.onMount&&e.onMount(s),i&&(s?i.mount(s):i.unmount()),a&&(typeof a=="function"?a(s):Xa(a)&&(a.current=s))},[i])}const I0=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),y9="framerAppearId",Eb="data-"+I0(y9),Cb=w.createContext({});function x9(e,i,a,s,l){var k,B;const{visualElement:u}=w.useContext(fc),f=w.useContext(jb),p=w.useContext(dc),g=w.useContext(G0).reducedMotion,m=w.useRef(null);s=s||f.renderer,!m.current&&s&&(m.current=s(e,{visualState:i,parent:u,props:a,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g}));const y=m.current,v=w.useContext(Cb);y&&!y.projection&&l&&(y.type==="html"||y.type==="svg")&&b9(m.current,a,l,v);const S=w.useRef(!1);w.useInsertionEffect(()=>{y&&S.current&&y.update(a,p)});const A=a[Eb],T=w.useRef(!!A&&!((k=window.MotionHandoffIsComplete)!=null&&k.call(window,A))&&((B=window.MotionHasOptimisedAnimation)==null?void 0:B.call(window,A)));return k5(()=>{y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),q0.render(y.render),T.current&&y.animationState&&y.animationState.animateChanges())}),w.useEffect(()=>{y&&(!T.current&&y.animationState&&y.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var O;(O=window.MotionHandoffMarkAsComplete)==null||O.call(window,A)}),T.current=!1))}),y}function b9(e,i,a,s){const{layoutId:l,layout:u,drag:f,dragConstraints:p,layoutScroll:g,layoutRoot:m,layoutCrossfade:y}=i;e.projection=new a(e.latestValues,i["data-framer-portal-id"]?void 0:Rb(e.parent)),e.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!f||p&&Xa(p),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:g,layoutRoot:m})}function Rb(e){if(e)return e.options.allowProjection!==!1?e.projection:Rb(e.parent)}function v9({preloadedFeatures:e,createVisualElement:i,useRender:a,useVisualState:s,Component:l}){e&&l9(e);function u(p,g){let m;const y={...w.useContext(G0),...p,layoutId:w9(p)},{isStatic:v}=y,S=p9(p),A=s(p,v);if(!v&&j0){S9();const T=j9(y);m=T.MeasureLayout,S.visualElement=x9(l,A,y,i,T.ProjectionNode)}return d.jsxs(fc.Provider,{value:S,children:[m&&S.visualElement?d.jsx(m,{visualElement:S.visualElement,...y}):null,a(l,p,g9(A,S.visualElement,g),A,v,S.visualElement)]})}u.displayName=`motion.${typeof l=="string"?l:`create(${l.displayName??l.name??""})`}`;const f=w.forwardRef(u);return f[m9]=l,f}function w9({layoutId:e}){const i=w.useContext(w0).id;return i&&e!==void 0?i+"-"+e:e}function S9(e,i){w.useContext(jb).strict}function j9(e){const{drag:i,layout:a}=sr;if(!i&&!a)return{};const s={...i,...a};return{MeasureLayout:i!=null&&i.isEnabled(e)||a!=null&&a.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const Ns={};function A9(e){for(const i in e)Ns[i]=e[i],O0(i)&&(Ns[i].isCSSVariable=!0)}function Db(e,{layout:i,layoutId:a}){return hr.has(e)||e.startsWith("origin")||(i||a!==void 0)&&(!!Ns[e]||e==="opacity")}const T9={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},E9=fr.length;function C9(e,i,a){let s="",l=!0;for(let u=0;u<E9;u++){const f=fr[u],p=e[f];if(p===void 0)continue;let g=!0;if(typeof p=="number"?g=p===(f.startsWith("scale")?1:0):g=parseFloat(p)===0,!g||a){const m=yb(p,F0[f]);if(!g){l=!1;const y=T9[f]||f;s+=`${y}(${m}) `}a&&(i[f]=m)}}return s=s.trim(),a?s=a(i,l?"":s):l&&(s="none"),s}function X0(e,i,a){const{style:s,vars:l,transformOrigin:u}=e;let f=!1,p=!1;for(const g in i){const m=i[g];if(hr.has(g)){f=!0;continue}else if(O0(g)){l[g]=m;continue}else{const y=yb(m,F0[g]);g.startsWith("origin")?(p=!0,u[g]=y):s[g]=y}}if(i.transform||(f||a?s.transform=C9(i,e.transform,a):s.transform&&(s.transform="none")),p){const{originX:g="50%",originY:m="50%",originZ:y=0}=u;s.transformOrigin=`${g} ${m} ${y}`}}const Q0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Mb(e,i,a){for(const s in i)!gt(i[s])&&!Db(s,a)&&(e[s]=i[s])}function R9({transformTemplate:e},i){return w.useMemo(()=>{const a=Q0();return X0(a,i,e),Object.assign({},a.vars,a.style)},[i])}function D9(e,i){const a=e.style||{},s={};return Mb(s,a,e),Object.assign(s,R9(e,i)),s}function M9(e,i){const a={},s=D9(e,i);return e.drag&&e.dragListener!==!1&&(a.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(a.tabIndex=0),a.style=s,a}const O9={offset:"stroke-dashoffset",array:"stroke-dasharray"},k9={offset:"strokeDashoffset",array:"strokeDasharray"};function z9(e,i,a=1,s=0,l=!0){e.pathLength=1;const u=l?O9:k9;e[u.offset]=ce.transform(-s);const f=ce.transform(i),p=ce.transform(a);e[u.array]=`${f} ${p}`}function Ob(e,{attrX:i,attrY:a,attrScale:s,pathLength:l,pathSpacing:u=1,pathOffset:f=0,...p},g,m,y){if(X0(e,p,m),g){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:S}=e;v.transform&&(S.transform=v.transform,delete v.transform),(S.transform||v.transformOrigin)&&(S.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),S.transform&&(S.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete v.transformBox),i!==void 0&&(v.x=i),a!==void 0&&(v.y=a),s!==void 0&&(v.scale=s),l!==void 0&&z9(v,l,u,f,!1)}const kb=()=>({...Q0(),attrs:{}}),zb=e=>typeof e=="string"&&e.toLowerCase()==="svg";function B9(e,i,a,s){const l=w.useMemo(()=>{const u=kb();return Ob(u,i,zb(s),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[i]);if(e.style){const u={};Mb(u,e.style,e),l.style={...u,...l.style}}return l}const $9=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function J0(e){return typeof e!="string"||e.includes("-")?!1:!!($9.indexOf(e)>-1||/[A-Z]/u.test(e))}function N9(e=!1){return(a,s,l,{latestValues:u},f)=>{const g=(J0(a)?B9:M9)(s,u,f,a),m=d9(s,typeof a=="string",e),y=a!==w.Fragment?{...m,...g,ref:l}:{},{children:v}=s,S=w.useMemo(()=>gt(v)?v.get():v,[v]);return w.createElement(a,{...y,children:S})}}function wy(e){const i=[{},{}];return e==null||e.values.forEach((a,s)=>{i[0][s]=a.get(),i[1][s]=a.getVelocity()}),i}function W0(e,i,a,s){if(typeof i=="function"){const[l,u]=wy(s);i=i(a!==void 0?a:e.custom,l,u)}if(typeof i=="string"&&(i=e.variants&&e.variants[i]),typeof i=="function"){const[l,u]=wy(s);i=i(a!==void 0?a:e.custom,l,u)}return i}function zl(e){return gt(e)?e.get():e}function L9({scrapeMotionValuesFromProps:e,createRenderState:i},a,s,l){return{latestValues:V9(a,s,l,e),renderState:i()}}const Bb=e=>(i,a)=>{const s=w.useContext(fc),l=w.useContext(dc),u=()=>L9(e,i,s,l);return a?u():S0(u)};function V9(e,i,a,s){const l={},u=s(e,{});for(const S in u)l[S]=zl(u[S]);let{initial:f,animate:p}=e;const g=pc(e),m=Tb(e);i&&m&&!g&&e.inherit!==!1&&(f===void 0&&(f=i.initial),p===void 0&&(p=i.animate));let y=a?a.initial===!1:!1;y=y||f===!1;const v=y?p:f;if(v&&typeof v!="boolean"&&!hc(v)){const S=Array.isArray(v)?v:[v];for(let A=0;A<S.length;A++){const T=W0(e,S[A]);if(T){const{transitionEnd:k,transition:B,...O}=T;for(const H in O){let M=O[H];if(Array.isArray(M)){const Y=y?M.length-1:0;M=M[Y]}M!==null&&(l[H]=M)}for(const H in k)l[H]=k[H]}}}return l}function eh(e,i,a){var u;const{style:s}=e,l={};for(const f in s)(gt(s[f])||i.style&&gt(i.style[f])||Db(f,e)||((u=a==null?void 0:a.getValue(f))==null?void 0:u.liveStyle)!==void 0)&&(l[f]=s[f]);return l}const _9={useVisualState:Bb({scrapeMotionValuesFromProps:eh,createRenderState:Q0})};function $b(e,i,a){const s=eh(e,i,a);for(const l in e)if(gt(e[l])||gt(i[l])){const u=fr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[u]=e[l]}return s}const H9={useVisualState:Bb({scrapeMotionValuesFromProps:$b,createRenderState:kb})};function U9(e,i){return function(s,{forwardMotionProps:l}={forwardMotionProps:!1}){const f={...J0(s)?H9:_9,preloadedFeatures:e,useRender:N9(l),createVisualElement:i,Component:s};return v9(f)}}function Ls(e,i,a){const s=e.getProps();return W0(s,i,a!==void 0?a:s.custom,e)}const i0=e=>Array.isArray(e);function P9(e,i,a){e.hasValue(i)?e.getValue(i).set(a):e.addValue(i,rr(a))}function F9(e){return i0(e)?e[e.length-1]||0:e}function q9(e,i){const a=Ls(e,i);let{transitionEnd:s={},transition:l={},...u}=a||{};u={...u,...s};for(const f in u){const p=F9(u[f]);P9(e,f,p)}}function Y9(e){return!!(gt(e)&&e.add)}function n0(e,i){const a=e.getValue("willChange");if(Y9(a))return a.add(i);if(!a&&Fi.WillChange){const s=new Fi.WillChange("auto");e.addValue("willChange",s),s.add(i)}}function Nb(e){return e.props[Eb]}const G9=e=>e!==null;function K9(e,{repeat:i,repeatType:a="loop"},s){const l=e.filter(G9),u=i&&a!=="loop"&&i%2===1?0:l.length-1;return l[u]}const Z9={type:"spring",stiffness:500,damping:25,restSpeed:10},I9=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),X9={type:"keyframes",duration:.8},Q9={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},J9=(e,{keyframes:i})=>i.length>2?X9:hr.has(e)?e.startsWith("scale")?I9(i[1]):Z9:Q9;function W9({when:e,delay:i,delayChildren:a,staggerChildren:s,staggerDirection:l,repeat:u,repeatType:f,repeatDelay:p,from:g,elapsed:m,...y}){return!!Object.keys(y).length}const th=(e,i,a,s={},l,u)=>f=>{const p=P0(s,e)||{},g=p.delay||s.delay||0;let{elapsed:m=0}=s;m=m-pi(g);const y={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-m,onUpdate:S=>{i.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:e,motionValue:i,element:u?void 0:l};W9(p)||Object.assign(y,J9(e,y)),y.duration&&(y.duration=pi(y.duration)),y.repeatDelay&&(y.repeatDelay=pi(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(v=!0)),(Fi.instantAnimations||Fi.skipAnimations)&&(v=!0,y.duration=0,y.delay=0),y.allowFlatten=!p.type&&!p.ease,v&&!u&&i.get()!==void 0){const S=K9(y.keyframes,p);if(S!==void 0){He.update(()=>{y.onUpdate(S),y.onComplete()});return}}return p.isSync?new _0(y):new z8(y)};function ej({protectedKeys:e,needsAnimating:i},a){const s=e.hasOwnProperty(a)&&i[a]!==!0;return i[a]=!1,s}function Lb(e,i,{delay:a=0,transitionOverride:s,type:l}={}){let{transition:u=e.getDefaultTransition(),transitionEnd:f,...p}=i;s&&(u=s);const g=[],m=l&&e.animationState&&e.animationState.getState()[l];for(const y in p){const v=e.getValue(y,e.latestValues[y]??null),S=p[y];if(S===void 0||m&&ej(m,y))continue;const A={delay:a,...P0(u||{},y)},T=v.get();if(T!==void 0&&!v.isAnimating&&!Array.isArray(S)&&S===T&&!A.velocity)continue;let k=!1;if(window.MotionHandoffAnimation){const O=Nb(e);if(O){const H=window.MotionHandoffAnimation(O,y,He);H!==null&&(A.startTime=H,k=!0)}}n0(e,y),v.start(th(y,v,S,e.shouldReduceMotion&&fb.has(y)?{type:!1}:A,e,k));const B=v.animation;B&&g.push(B)}return f&&Promise.all(g).then(()=>{He.update(()=>{f&&q9(e,f)})}),g}function a0(e,i,a={}){var g;const s=Ls(e,i,a.type==="exit"?(g=e.presenceContext)==null?void 0:g.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=s||{};a.transitionOverride&&(l=a.transitionOverride);const u=s?()=>Promise.all(Lb(e,s,a)):()=>Promise.resolve(),f=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:S}=l;return tj(e,i,y+m,v,S,a)}:()=>Promise.resolve(),{when:p}=l;if(p){const[m,y]=p==="beforeChildren"?[u,f]:[f,u];return m().then(()=>y())}else return Promise.all([u(),f(a.delay)])}function tj(e,i,a=0,s=0,l=1,u){const f=[],p=(e.variantChildren.size-1)*s,g=l===1?(m=0)=>m*s:(m=0)=>p-m*s;return Array.from(e.variantChildren).sort(ij).forEach((m,y)=>{m.notify("AnimationStart",i),f.push(a0(m,i,{...u,delay:a+g(y)}).then(()=>m.notify("AnimationComplete",i)))}),Promise.all(f)}function ij(e,i){return e.sortNodePosition(i)}function nj(e,i,a={}){e.notify("AnimationStart",i);let s;if(Array.isArray(i)){const l=i.map(u=>a0(e,u,a));s=Promise.all(l)}else if(typeof i=="string")s=a0(e,i,a);else{const l=typeof i=="function"?Ls(e,i,a.custom):i;s=Promise.all(Lb(e,l,a))}return s.then(()=>{e.notify("AnimationComplete",i)})}function Vb(e,i){if(!Array.isArray(i))return!1;const a=i.length;if(a!==e.length)return!1;for(let s=0;s<a;s++)if(i[s]!==e[s])return!1;return!0}const aj=Z0.length;function _b(e){if(!e)return;if(!e.isControllingVariants){const a=e.parent?_b(e.parent)||{}:{};return e.props.initial!==void 0&&(a.initial=e.props.initial),a}const i={};for(let a=0;a<aj;a++){const s=Z0[a],l=e.props[s];($s(l)||l===!1)&&(i[s]=l)}return i}const rj=[...K0].reverse(),sj=K0.length;function oj(e){return i=>Promise.all(i.map(({animation:a,options:s})=>nj(e,a,s)))}function lj(e){let i=oj(e),a=Sy(),s=!0;const l=g=>(m,y)=>{var S;const v=Ls(e,y,g==="exit"?(S=e.presenceContext)==null?void 0:S.custom:void 0);if(v){const{transition:A,transitionEnd:T,...k}=v;m={...m,...k,...T}}return m};function u(g){i=g(e)}function f(g){const{props:m}=e,y=_b(e.parent)||{},v=[],S=new Set;let A={},T=1/0;for(let B=0;B<sj;B++){const O=rj[B],H=a[O],M=m[O]!==void 0?m[O]:y[O],Y=$s(M),N=O===g?H.isActive:null;N===!1&&(T=B);let K=M===y[O]&&M!==m[O]&&Y;if(K&&s&&e.manuallyAnimateOnMount&&(K=!1),H.protectedKeys={...A},!H.isActive&&N===null||!M&&!H.prevProp||hc(M)||typeof M=="boolean")continue;const I=cj(H.prevProp,M);let X=I||O===g&&H.isActive&&!K&&Y||B>T&&Y,W=!1;const ie=Array.isArray(M)?M:[M];let ve=ie.reduce(l(O),{});N===!1&&(ve={});const{prevResolvedValues:Ne={}}=H,Ue={...Ne,...ve},Be=Z=>{X=!0,S.has(Z)&&(W=!0,S.delete(Z)),H.needsAnimating[Z]=!0;const ee=e.getValue(Z);ee&&(ee.liveStyle=!1)};for(const Z in Ue){const ee=ve[Z],ue=Ne[Z];if(A.hasOwnProperty(Z))continue;let R=!1;i0(ee)&&i0(ue)?R=!Vb(ee,ue):R=ee!==ue,R?ee!=null?Be(Z):S.add(Z):ee!==void 0&&S.has(Z)?Be(Z):H.protectedKeys[Z]=!0}H.prevProp=M,H.prevResolvedValues=ve,H.isActive&&(A={...A,...ve}),s&&e.blockInitialAnimation&&(X=!1),X&&(!(K&&I)||W)&&v.push(...ie.map(Z=>({animation:Z,options:{type:O}})))}if(S.size){const B={};if(typeof m.initial!="boolean"){const O=Ls(e,Array.isArray(m.initial)?m.initial[0]:m.initial);O&&O.transition&&(B.transition=O.transition)}S.forEach(O=>{const H=e.getBaseTarget(O),M=e.getValue(O);M&&(M.liveStyle=!0),B[O]=H??null}),v.push({animation:B})}let k=!!v.length;return s&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(k=!1),s=!1,k?i(v):Promise.resolve()}function p(g,m){var v;if(a[g].isActive===m)return Promise.resolve();(v=e.variantChildren)==null||v.forEach(S=>{var A;return(A=S.animationState)==null?void 0:A.setActive(g,m)}),a[g].isActive=m;const y=f(g);for(const S in a)a[S].protectedKeys={};return y}return{animateChanges:f,setActive:p,setAnimateFunction:u,getState:()=>a,reset:()=>{a=Sy(),s=!0}}}function cj(e,i){return typeof i=="string"?i!==e:Array.isArray(i)?!Vb(i,e):!1}function Pn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Sy(){return{animate:Pn(!0),whileInView:Pn(),whileHover:Pn(),whileTap:Pn(),whileDrag:Pn(),whileFocus:Pn(),exit:Pn()}}class Sn{constructor(i){this.isMounted=!1,this.node=i}update(){}}class uj extends Sn{constructor(i){super(i),i.animationState||(i.animationState=lj(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();hc(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:a}=this.node.prevProps||{};i!==a&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let dj=0;class fj extends Sn{constructor(){super(...arguments),this.id=dj++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:a}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const l=this.node.animationState.setActive("exit",!i);a&&!i&&l.then(()=>{a(this.id)})}mount(){const{register:i,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const hj={animation:{Feature:uj},exit:{Feature:fj}};function Vs(e,i,a,s={passive:!0}){return e.addEventListener(i,a,s),()=>e.removeEventListener(i,a)}function Ys(e){return{point:{x:e.pageX,y:e.pageY}}}const pj=e=>i=>Y0(i)&&e(i,Ys(i));function Ts(e,i,a,s){return Vs(e,i,pj(a),s)}function Hb({top:e,left:i,right:a,bottom:s}){return{x:{min:i,max:a},y:{min:e,max:s}}}function mj({x:e,y:i}){return{top:i.min,right:e.max,bottom:i.max,left:e.min}}function gj(e,i){if(!i)return e;const a=i({x:e.left,y:e.top}),s=i({x:e.right,y:e.bottom});return{top:a.y,left:a.x,bottom:s.y,right:s.x}}const Ub=1e-4,yj=1-Ub,xj=1+Ub,Pb=.01,bj=0-Pb,vj=0+Pb;function bt(e){return e.max-e.min}function wj(e,i,a){return Math.abs(e-i)<=a}function jy(e,i,a,s=.5){e.origin=s,e.originPoint=Ve(i.min,i.max,e.origin),e.scale=bt(a)/bt(i),e.translate=Ve(a.min,a.max,e.origin)-e.originPoint,(e.scale>=yj&&e.scale<=xj||isNaN(e.scale))&&(e.scale=1),(e.translate>=bj&&e.translate<=vj||isNaN(e.translate))&&(e.translate=0)}function Es(e,i,a,s){jy(e.x,i.x,a.x,s?s.originX:void 0),jy(e.y,i.y,a.y,s?s.originY:void 0)}function Ay(e,i,a){e.min=a.min+i.min,e.max=e.min+bt(i)}function Sj(e,i,a){Ay(e.x,i.x,a.x),Ay(e.y,i.y,a.y)}function Ty(e,i,a){e.min=i.min-a.min,e.max=e.min+bt(i)}function Cs(e,i,a){Ty(e.x,i.x,a.x),Ty(e.y,i.y,a.y)}const Ey=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qa=()=>({x:Ey(),y:Ey()}),Cy=()=>({min:0,max:0}),Ze=()=>({x:Cy(),y:Cy()});function It(e){return[e("x"),e("y")]}function Kd(e){return e===void 0||e===1}function r0({scale:e,scaleX:i,scaleY:a}){return!Kd(e)||!Kd(i)||!Kd(a)}function qn(e){return r0(e)||Fb(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Fb(e){return Ry(e.x)||Ry(e.y)}function Ry(e){return e&&e!=="0%"}function Wl(e,i,a){const s=e-a,l=i*s;return a+l}function Dy(e,i,a,s,l){return l!==void 0&&(e=Wl(e,l,s)),Wl(e,a,s)+i}function s0(e,i=0,a=1,s,l){e.min=Dy(e.min,i,a,s,l),e.max=Dy(e.max,i,a,s,l)}function qb(e,{x:i,y:a}){s0(e.x,i.translate,i.scale,i.originPoint),s0(e.y,a.translate,a.scale,a.originPoint)}const My=.999999999999,Oy=1.0000000000001;function jj(e,i,a,s=!1){const l=a.length;if(!l)return;i.x=i.y=1;let u,f;for(let p=0;p<l;p++){u=a[p],f=u.projectionDelta;const{visualElement:g}=u.options;g&&g.props.style&&g.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Wa(e,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,qb(e,f)),s&&qn(u.latestValues)&&Wa(e,u.latestValues))}i.x<Oy&&i.x>My&&(i.x=1),i.y<Oy&&i.y>My&&(i.y=1)}function Ja(e,i){e.min=e.min+i,e.max=e.max+i}function ky(e,i,a,s,l=.5){const u=Ve(e.min,e.max,l);s0(e,i,a,u,s)}function Wa(e,i){ky(e.x,i.x,i.scaleX,i.scale,i.originX),ky(e.y,i.y,i.scaleY,i.scale,i.originY)}function Yb(e,i){return Hb(gj(e.getBoundingClientRect(),i))}function Aj(e,i,a){const s=Yb(e,a),{scroll:l}=i;return l&&(Ja(s.x,l.offset.x),Ja(s.y,l.offset.y)),s}const Gb=({current:e})=>e?e.ownerDocument.defaultView:null,zy=(e,i)=>Math.abs(e-i);function Tj(e,i){const a=zy(e.x,i.x),s=zy(e.y,i.y);return Math.sqrt(a**2+s**2)}class Kb{constructor(i,a,{transformPagePoint:s,contextWindow:l,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Id(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,A=Tj(v.offset,{x:0,y:0})>=3;if(!S&&!A)return;const{point:T}=v,{timestamp:k}=ct;this.history.push({...T,timestamp:k});const{onStart:B,onMove:O}=this.handlers;S||(B&&B(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,v)},this.handlePointerMove=(v,S)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Zd(S,this.transformPagePoint),He.update(this.updatePoint,!0)},this.handlePointerUp=(v,S)=>{this.end();const{onEnd:A,onSessionEnd:T,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const B=Id(v.type==="pointercancel"?this.lastMoveEventInfo:Zd(S,this.transformPagePoint),this.history);this.startEvent&&A&&A(v,B),T&&T(v,B)},!Y0(i))return;this.dragSnapToOrigin=u,this.handlers=a,this.transformPagePoint=s,this.contextWindow=l||window;const f=Ys(i),p=Zd(f,this.transformPagePoint),{point:g}=p,{timestamp:m}=ct;this.history=[{...g,timestamp:m}];const{onSessionStart:y}=a;y&&y(i,Id(p,this.history)),this.removeListeners=Ps(Ts(this.contextWindow,"pointermove",this.handlePointerMove),Ts(this.contextWindow,"pointerup",this.handlePointerUp),Ts(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),bn(this.updatePoint)}}function Zd(e,i){return i?{point:i(e.point)}:e}function By(e,i){return{x:e.x-i.x,y:e.y-i.y}}function Id({point:e},i){return{point:e,delta:By(e,Zb(i)),offset:By(e,Ej(i)),velocity:Cj(i,.1)}}function Ej(e){return e[0]}function Zb(e){return e[e.length-1]}function Cj(e,i){if(e.length<2)return{x:0,y:0};let a=e.length-1,s=null;const l=Zb(e);for(;a>=0&&(s=e[a],!(l.timestamp-s.timestamp>pi(i)));)a--;if(!s)return{x:0,y:0};const u=mi(l.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const f={x:(l.x-s.x)/u,y:(l.y-s.y)/u};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function Rj(e,{min:i,max:a},s){return i!==void 0&&e<i?e=s?Ve(i,e,s.min):Math.max(e,i):a!==void 0&&e>a&&(e=s?Ve(a,e,s.max):Math.min(e,a)),e}function $y(e,i,a){return{min:i!==void 0?e.min+i:void 0,max:a!==void 0?e.max+a-(e.max-e.min):void 0}}function Dj(e,{top:i,left:a,bottom:s,right:l}){return{x:$y(e.x,a,l),y:$y(e.y,i,s)}}function Ny(e,i){let a=i.min-e.min,s=i.max-e.max;return i.max-i.min<e.max-e.min&&([a,s]=[s,a]),{min:a,max:s}}function Mj(e,i){return{x:Ny(e.x,i.x),y:Ny(e.y,i.y)}}function Oj(e,i){let a=.5;const s=bt(e),l=bt(i);return l>s?a=ks(i.min,i.max-s,e.min):s>l&&(a=ks(e.min,e.max-l,i.min)),Pi(0,1,a)}function kj(e,i){const a={};return i.min!==void 0&&(a.min=i.min-e.min),i.max!==void 0&&(a.max=i.max-e.min),a}const o0=.35;function zj(e=o0){return e===!1?e=0:e===!0&&(e=o0),{x:Ly(e,"left","right"),y:Ly(e,"top","bottom")}}function Ly(e,i,a){return{min:Vy(e,i),max:Vy(e,a)}}function Vy(e,i){return typeof e=="number"?e:e[i]||0}const Bj=new WeakMap;class $j{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ze(),this.visualElement=i}start(i,{snapToCursor:a=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),a&&this.snapToCursor(Ys(y).point)},u=(y,v)=>{const{drag:S,dragPropagation:A,onDragStart:T}=this.getProps();if(S&&!A&&(this.openDragLock&&this.openDragLock(),this.openDragLock=I8(S),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),It(B=>{let O=this.getAxisMotionValue(B).get()||0;if(gi.test(O)){const{projection:H}=this.visualElement;if(H&&H.layout){const M=H.layout.layoutBox[B];M&&(O=bt(M)*(parseFloat(O)/100))}}this.originPoint[B]=O}),T&&He.postRender(()=>T(y,v)),n0(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},f=(y,v)=>{const{dragPropagation:S,dragDirectionLock:A,onDirectionLock:T,onDrag:k}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:B}=v;if(A&&this.currentDirection===null){this.currentDirection=Nj(B),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",v.point,B),this.updateAxis("y",v.point,B),this.visualElement.render(),k&&k(y,v)},p=(y,v)=>this.stop(y,v),g=()=>It(y=>{var v;return this.getAnimationState(y)==="paused"&&((v=this.getAxisMotionValue(y).animation)==null?void 0:v.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Kb(i,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:Gb(this.visualElement)})}stop(i,a){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:l}=a;this.startAnimation(l);const{onDragEnd:u}=this.getProps();u&&He.postRender(()=>u(i,a))}cancel(){this.isDragging=!1;const{projection:i,animationState:a}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}updateAxis(i,a,s){const{drag:l}=this.getProps();if(!s||!pl(i,l,this.currentDirection))return;const u=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=Rj(f,this.constraints[i],this.elastic[i])),u.set(f)}resolveConstraints(){var u;const{dragConstraints:i,dragElastic:a}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,l=this.constraints;i&&Xa(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=Dj(s.layoutBox,i):this.constraints=!1,this.elastic=zj(a),l!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&It(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=kj(s.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:a}=this.getProps();if(!i||!Xa(i))return!1;const s=i.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=Aj(s,l.root,this.visualElement.getTransformPagePoint());let f=Mj(l.layout.layoutBox,u);if(a){const p=a(mj(f));this.hasMutatedConstraints=!!p,p&&(f=Hb(p))}return f}startAnimation(i){const{drag:a,dragMomentum:s,dragElastic:l,dragTransition:u,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),g=this.constraints||{},m=It(y=>{if(!pl(y,a,this.currentDirection))return;let v=g&&g[y]||{};f&&(v={min:0,max:0});const S=l?200:1e6,A=l?40:1e7,T={type:"inertia",velocity:s?i[y]:0,bounceStiffness:S,bounceDamping:A,timeConstant:750,restDelta:1,restSpeed:10,...u,...v};return this.startAxisValueAnimation(y,T)});return Promise.all(m).then(p)}startAxisValueAnimation(i,a){const s=this.getAxisMotionValue(i);return n0(this.visualElement,i),s.start(th(i,s,0,a,this.visualElement,!1))}stopAnimation(){It(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){It(i=>{var a;return(a=this.getAxisMotionValue(i).animation)==null?void 0:a.pause()})}getAnimationState(i){var a;return(a=this.getAxisMotionValue(i).animation)==null?void 0:a.state}getAxisMotionValue(i){const a=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),l=s[a];return l||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){It(a=>{const{drag:s}=this.getProps();if(!pl(a,s,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(a);if(l&&l.layout){const{min:f,max:p}=l.layout.layoutBox[a];u.set(i[a]-Ve(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:a}=this.getProps(),{projection:s}=this.visualElement;if(!Xa(a)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};It(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const g=p.get();l[f]=Oj({min:g,max:g},this.constraints[f])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),It(f=>{if(!pl(f,i,null))return;const p=this.getAxisMotionValue(f),{min:g,max:m}=this.constraints[f];p.set(Ve(g,m,l[f]))})}addListeners(){if(!this.visualElement.current)return;Bj.set(this.visualElement,this);const i=this.visualElement.current,a=Ts(i,"pointerdown",g=>{const{drag:m,dragListener:y=!0}=this.getProps();m&&y&&this.start(g)}),s=()=>{const{dragConstraints:g}=this.getProps();Xa(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),He.read(s);const f=Vs(window,"resize",()=>this.scalePositionWithinConstraints()),p=l.addEventListener("didUpdate",({delta:g,hasLayoutChanged:m})=>{this.isDragging&&m&&(It(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=g[y].translate,v.set(v.get()+g[y].translate))}),this.visualElement.render())});return()=>{f(),a(),u(),p&&p()}}getProps(){const i=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:f=o0,dragMomentum:p=!0}=i;return{...i,drag:a,dragDirectionLock:s,dragPropagation:l,dragConstraints:u,dragElastic:f,dragMomentum:p}}}function pl(e,i,a){return(i===!0||i===e)&&(a===null||a===e)}function Nj(e,i=10){let a=null;return Math.abs(e.y)>i?a="y":Math.abs(e.x)>i&&(a="x"),a}class Lj extends Sn{constructor(i){super(i),this.removeGroupControls=Xt,this.removeListeners=Xt,this.controls=new $j(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xt}unmount(){this.removeGroupControls(),this.removeListeners()}}const _y=e=>(i,a)=>{e&&He.postRender(()=>e(i,a))};class Vj extends Sn{constructor(){super(...arguments),this.removePointerDownListener=Xt}onPointerDown(i){this.session=new Kb(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Gb(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:a,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:_y(i),onStart:_y(a),onMove:s,onEnd:(u,f)=>{delete this.session,l&&He.postRender(()=>l(u,f))}}}mount(){this.removePointerDownListener=Ts(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Bl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hy(e,i){return i.max===i.min?0:e/(i.max-i.min)*100}const ys={correct:(e,i)=>{if(!i.target)return e;if(typeof e=="string")if(ce.test(e))e=parseFloat(e);else return e;const a=Hy(e,i.target.x),s=Hy(e,i.target.y);return`${a}% ${s}%`}},_j={correct:(e,{treeScale:i,projectionDelta:a})=>{const s=e,l=vn.parse(e);if(l.length>5)return s;const u=vn.createTransformer(e),f=typeof l[0]!="number"?1:0,p=a.x.scale*i.x,g=a.y.scale*i.y;l[0+f]/=p,l[1+f]/=g;const m=Ve(p,g,.5);return typeof l[2+f]=="number"&&(l[2+f]/=m),typeof l[3+f]=="number"&&(l[3+f]/=m),u(l)}};class Hj extends w.Component{componentDidMount(){const{visualElement:i,layoutGroup:a,switchLayoutGroup:s,layoutId:l}=this.props,{projection:u}=i;A9(Uj),u&&(a.group&&a.group.add(u),s&&s.register&&l&&s.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Bl.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:a,visualElement:s,drag:l,isPresent:u}=this.props,{projection:f}=s;return f&&(f.isPresent=u,l||i.layoutDependency!==a||a===void 0||i.isPresent!==u?f.willUpdate():this.safeToRemove(),i.isPresent!==u&&(u?f.promote():f.relegate()||He.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),q0.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:a,switchLayoutGroup:s}=this.props,{projection:l}=i;l&&(l.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Ib(e){const[i,a]=Sb(),s=w.useContext(w0);return d.jsx(Hj,{...e,layoutGroup:s,switchLayoutGroup:w.useContext(Cb),isPresent:i,safeToRemove:a})}const Uj={borderRadius:{...ys,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ys,borderTopRightRadius:ys,borderBottomLeftRadius:ys,borderBottomRightRadius:ys,boxShadow:_j};function Pj(e,i,a){const s=gt(e)?e:rr(e);return s.start(th("",s,i,a)),s.animation}const Fj=(e,i)=>e.depth-i.depth;class qj{constructor(){this.children=[],this.isDirty=!1}add(i){A0(this.children,i),this.isDirty=!0}remove(i){T0(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(Fj),this.isDirty=!1,this.children.forEach(i)}}function Yj(e,i){const a=Et.now(),s=({timestamp:l})=>{const u=l-a;u>=i&&(bn(s),e(u-i))};return He.setup(s,!0),()=>bn(s)}const Xb=["TopLeft","TopRight","BottomLeft","BottomRight"],Gj=Xb.length,Uy=e=>typeof e=="string"?parseFloat(e):e,Py=e=>typeof e=="number"||ce.test(e);function Kj(e,i,a,s,l,u){l?(e.opacity=Ve(0,a.opacity??1,Zj(s)),e.opacityExit=Ve(i.opacity??1,0,Ij(s))):u&&(e.opacity=Ve(i.opacity??1,a.opacity??1,s));for(let f=0;f<Gj;f++){const p=`border${Xb[f]}Radius`;let g=Fy(i,p),m=Fy(a,p);if(g===void 0&&m===void 0)continue;g||(g=0),m||(m=0),g===0||m===0||Py(g)===Py(m)?(e[p]=Math.max(Ve(Uy(g),Uy(m),s),0),(gi.test(m)||gi.test(g))&&(e[p]+="%")):e[p]=m}(i.rotate||a.rotate)&&(e.rotate=Ve(i.rotate||0,a.rotate||0,s))}function Fy(e,i){return e[i]!==void 0?e[i]:e.borderRadius}const Zj=Qb(0,.5,F5),Ij=Qb(.5,.95,Xt);function Qb(e,i,a){return s=>s<e?0:s>i?1:a(ks(e,i,s))}function qy(e,i){e.min=i.min,e.max=i.max}function Zt(e,i){qy(e.x,i.x),qy(e.y,i.y)}function Yy(e,i){e.translate=i.translate,e.scale=i.scale,e.originPoint=i.originPoint,e.origin=i.origin}function Gy(e,i,a,s,l){return e-=i,e=Wl(e,1/a,s),l!==void 0&&(e=Wl(e,1/l,s)),e}function Xj(e,i=0,a=1,s=.5,l,u=e,f=e){if(gi.test(i)&&(i=parseFloat(i),i=Ve(f.min,f.max,i/100)-f.min),typeof i!="number")return;let p=Ve(u.min,u.max,s);e===u&&(p-=i),e.min=Gy(e.min,i,a,p,l),e.max=Gy(e.max,i,a,p,l)}function Ky(e,i,[a,s,l],u,f){Xj(e,i[a],i[s],i[l],i.scale,u,f)}const Qj=["x","scaleX","originX"],Jj=["y","scaleY","originY"];function Zy(e,i,a,s){Ky(e.x,i,Qj,a?a.x:void 0,s?s.x:void 0),Ky(e.y,i,Jj,a?a.y:void 0,s?s.y:void 0)}function Iy(e){return e.translate===0&&e.scale===1}function Jb(e){return Iy(e.x)&&Iy(e.y)}function Xy(e,i){return e.min===i.min&&e.max===i.max}function Wj(e,i){return Xy(e.x,i.x)&&Xy(e.y,i.y)}function Qy(e,i){return Math.round(e.min)===Math.round(i.min)&&Math.round(e.max)===Math.round(i.max)}function Wb(e,i){return Qy(e.x,i.x)&&Qy(e.y,i.y)}function Jy(e){return bt(e.x)/bt(e.y)}function Wy(e,i){return e.translate===i.translate&&e.scale===i.scale&&e.originPoint===i.originPoint}class eA{constructor(){this.members=[]}add(i){A0(this.members,i),i.scheduleRender()}remove(i){if(T0(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(i){const a=this.members.findIndex(l=>i===l);if(a===0)return!1;let s;for(let l=a;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){s=u;break}}return s?(this.promote(s),!0):!1}promote(i,a){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,a&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:l}=i.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:a,resumingFrom:s}=i;a.onExitComplete&&a.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function tA(e,i,a){let s="";const l=e.x.translate/i.x,u=e.y.translate/i.y,f=(a==null?void 0:a.z)||0;if((l||u||f)&&(s=`translate3d(${l}px, ${u}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),a){const{transformPerspective:m,rotate:y,rotateX:v,rotateY:S,skewX:A,skewY:T}=a;m&&(s=`perspective(${m}px) ${s}`),y&&(s+=`rotate(${y}deg) `),v&&(s+=`rotateX(${v}deg) `),S&&(s+=`rotateY(${S}deg) `),A&&(s+=`skewX(${A}deg) `),T&&(s+=`skewY(${T}deg) `)}const p=e.x.scale*i.x,g=e.y.scale*i.y;return(p!==1||g!==1)&&(s+=`scale(${p}, ${g})`),s||"none"}const Xd=["","X","Y","Z"],iA={visibility:"hidden"},nA=1e3;let aA=0;function Qd(e,i,a,s){const{latestValues:l}=i;l[e]&&(a[e]=l[e],i.setStaticValue(e,0),s&&(s[e]=0))}function ev(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:i}=e.options;if(!i)return;const a=Nb(i);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:l,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(a,"transform",He,!(l||u))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&ev(s)}function tv({attachResizeListener:e,defaultParent:i,measureScroll:a,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(f={},p=i==null?void 0:i()){this.id=aA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(oA),this.nodes.forEach(fA),this.nodes.forEach(hA),this.nodes.forEach(lA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new qj)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new R0),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const g=this.eventHandlers.get(f);g&&g.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=wb(f)&&!t9(f),this.instance=f;const{layoutId:p,layout:g,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||p)&&(this.isLayoutDirty=!0),e){let y;const v=()=>this.root.updateBlockedByResize=!1;e(f,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=Yj(v,250),Bl.hasAnimatedSinceResize&&(Bl.hasAnimatedSinceResize=!1,this.nodes.forEach(tx))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||g)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:S,layout:A})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||m.getDefaultTransition()||xA,{onLayoutAnimationStart:k,onLayoutAnimationComplete:B}=m.getProps(),O=!this.targetLayout||!Wb(this.targetLayout,A),H=!v&&S;if(this.options.layoutRoot||this.resumeFrom||H||v&&(O||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,H);const M={...P0(T,"layout"),onPlay:k,onComplete:B};(m.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else v||tx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=A})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),bn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pA),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ev(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:p,layout:g}=this.options;if(p===void 0&&!g)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ex);return}this.isUpdating||this.nodes.forEach(uA),this.isUpdating=!1,this.nodes.forEach(dA),this.nodes.forEach(rA),this.nodes.forEach(sA),this.clearAllSnapshots();const p=Et.now();ct.delta=Pi(0,1e3/60,p-ct.timestamp),ct.timestamp=p,ct.isProcessing=!0,Pd.update.process(ct),Pd.preRender.process(ct),Pd.render.process(ct),ct.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,q0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cA),this.sharedNodes.forEach(mA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,He.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){He.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!bt(this.snapshot.measuredBox.x)&&!bt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const g=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:g,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Jb(this.projectionDelta),g=this.getTransformTemplate(),m=g?g(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;f&&this.instance&&(p||qn(this.latestValues)||y)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let g=this.removeElementScroll(p);return f&&(g=this.removeTransform(g)),bA(g),{animationId:this.root.animationId,measuredBox:p,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:f}=this.options;if(!f)return Ze();const p=f.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(vA))){const{scroll:y}=this.root;y&&(Ja(p.x,y.offset.x),Ja(p.y,y.offset.y))}return p}removeElementScroll(f){var g;const p=Ze();if(Zt(p,f),(g=this.scroll)!=null&&g.wasRoot)return p;for(let m=0;m<this.path.length;m++){const y=this.path[m],{scroll:v,options:S}=y;y!==this.root&&v&&S.layoutScroll&&(v.wasRoot&&Zt(p,f),Ja(p.x,v.offset.x),Ja(p.y,v.offset.y))}return p}applyTransform(f,p=!1){const g=Ze();Zt(g,f);for(let m=0;m<this.path.length;m++){const y=this.path[m];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Wa(g,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),qn(y.latestValues)&&Wa(g,y.latestValues)}return qn(this.latestValues)&&Wa(g,this.latestValues),g}removeTransform(f){const p=Ze();Zt(p,f);for(let g=0;g<this.path.length;g++){const m=this.path[g];if(!m.instance||!qn(m.latestValues))continue;r0(m.latestValues)&&m.updateSnapshot();const y=Ze(),v=m.measurePageBox();Zt(y,v),Zy(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return qn(this.latestValues)&&Zy(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ct.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var S;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==p;if(!(f||g&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=ct.timestamp,!this.targetDelta&&!this.relativeTarget){const A=this.getClosestProjectingParent();A&&A.layout&&this.animationProgress!==1?(this.relativeParent=A,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ze(),this.relativeTargetOrigin=Ze(),Cs(this.relativeTargetOrigin,this.layout.layoutBox,A.layout.layoutBox),Zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ze(),this.targetWithTransforms=Ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Sj(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Zt(this.target,this.layout.layoutBox),qb(this.target,this.targetDelta)):Zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const A=this.getClosestProjectingParent();A&&!!A.resumingFrom==!!this.resumingFrom&&!A.options.layoutScroll&&A.target&&this.animationProgress!==1?(this.relativeParent=A,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ze(),this.relativeTargetOrigin=Ze(),Cs(this.relativeTargetOrigin,this.target,A.target),Zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||r0(this.parent.latestValues)||Fb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var T;const f=this.getLead(),p=!!this.resumingFrom||this!==f;let g=!0;if((this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty)&&(g=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===ct.timestamp&&(g=!1),g)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;Zt(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,S=this.treeScale.y;jj(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Ze());const{target:A}=f;if(!A){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Yy(this.prevProjectionDelta.x,this.projectionDelta.x),Yy(this.prevProjectionDelta.y,this.projectionDelta.y)),Es(this.projectionDelta,this.layoutCorrected,A,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==S||!Wy(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",A))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qa(),this.projectionDelta=Qa(),this.projectionDeltaWithTransform=Qa()}setAnimationOrigin(f,p=!1){const g=this.snapshot,m=g?g.latestValues:{},y={...this.latestValues},v=Qa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=Ze(),A=g?g.source:void 0,T=this.layout?this.layout.source:void 0,k=A!==T,B=this.getStack(),O=!B||B.members.length<=1,H=!!(k&&!O&&this.options.crossfade===!0&&!this.path.some(yA));this.animationProgress=0;let M;this.mixTargetDelta=Y=>{const N=Y/1e3;ix(v.x,f.x,N),ix(v.y,f.y,N),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Cs(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),gA(this.relativeTarget,this.relativeTargetOrigin,S,N),M&&Wj(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=Ze()),Zt(M,this.relativeTarget)),k&&(this.animationValues=y,Kj(y,m,this.latestValues,N,H,O)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var p,g,m;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(!1),(m=(g=this.resumingFrom)==null?void 0:g.currentAnimation)==null||m.stop(!1),this.pendingAnimation&&(bn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=He.update(()=>{Bl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=rr(0)),this.currentAnimation=Pj(this.motionValue,[0,1e3],{...f,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),f.onUpdate&&f.onUpdate(y)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(nA),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:g,layout:m,latestValues:y}=f;if(!(!p||!g||!m)){if(this!==f&&this.layout&&m&&iv(this.options.animationType,this.layout.layoutBox,m.layoutBox)){g=this.target||Ze();const v=bt(this.layout.layoutBox.x);g.x.min=f.target.x.min,g.x.max=g.x.min+v;const S=bt(this.layout.layoutBox.y);g.y.min=f.target.y.min,g.y.max=g.y.min+S}Zt(p,g),Wa(p,y),Es(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new eA),this.sharedNodes.get(f).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var p;const{layoutId:f}=this.options;return f?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:f}=this.options;return f?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:g}={}){const m=this.getStack();m&&m.promote(this,g),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:g}=f;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(p=!0),!p)return;const m={};g.z&&Qd("z",f,m,this.animationValues);for(let y=0;y<Xd.length;y++)Qd(`rotate${Xd[y]}`,f,m,this.animationValues),Qd(`skew${Xd[y]}`,f,m,this.animationValues);f.render();for(const y in m)f.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);f.scheduleRender()}getProjectionStyles(f){if(!this.instance||this.isSVG)return;if(!this.isVisible)return iA;const p={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=zl(f==null?void 0:f.pointerEvents)||"",p.transform=g?g(this.latestValues,""):"none",p;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=zl(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!qn(this.latestValues)&&(A.transform=g?g({},""):"none",this.hasProjected=!1),A}const y=m.animationValues||m.latestValues;this.applyTransformsToTarget(),p.transform=tA(this.projectionDeltaWithTransform,this.treeScale,y),g&&(p.transform=g(y,p.transform));const{x:v,y:S}=this.projectionDelta;p.transformOrigin=`${v.origin*100}% ${S.origin*100}% 0`,m.animationValues?p.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:p.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const A in Ns){if(y[A]===void 0)continue;const{correct:T,applyTo:k,isCSSVariable:B}=Ns[A],O=p.transform==="none"?y[A]:T(y[A],m);if(k){const H=k.length;for(let M=0;M<H;M++)p[k[M]]=O}else B?this.options.visualElement.renderState.vars[A]=O:p[A]=O}return this.options.layoutId&&(p.pointerEvents=m===this?zl(f==null?void 0:f.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var p;return(p=f.currentAnimation)==null?void 0:p.stop(!1)}),this.root.nodes.forEach(ex),this.root.sharedNodes.clear()}}}function rA(e){e.updateLayout()}function sA(e){var a;const i=((a=e.resumeFrom)==null?void 0:a.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=e.layout,{animationType:u}=e.options,f=i.source!==e.layout.source;u==="size"?It(v=>{const S=f?i.measuredBox[v]:i.layoutBox[v],A=bt(S);S.min=s[v].min,S.max=S.min+A}):iv(u,i.layoutBox,s)&&It(v=>{const S=f?i.measuredBox[v]:i.layoutBox[v],A=bt(s[v]);S.max=S.min+A,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[v].max=e.relativeTarget[v].min+A)});const p=Qa();Es(p,s,i.layoutBox);const g=Qa();f?Es(g,e.applyTransform(l,!0),i.measuredBox):Es(g,s,i.layoutBox);const m=!Jb(p);let y=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:S,layout:A}=v;if(S&&A){const T=Ze();Cs(T,i.layoutBox,S.layoutBox);const k=Ze();Cs(k,s,A.layoutBox),Wb(T,k)||(y=!0),v.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=T,e.relativeParent=v)}}}e.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:g,layoutDelta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:y})}else if(e.isLead()){const{onExitComplete:s}=e.options;s&&s()}e.options.transition=void 0}function oA(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function lA(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function cA(e){e.clearSnapshot()}function ex(e){e.clearMeasurements()}function uA(e){e.isLayoutDirty=!1}function dA(e){const{visualElement:i}=e.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),e.resetTransform()}function tx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function fA(e){e.resolveTargetDelta()}function hA(e){e.calcProjection()}function pA(e){e.resetSkewAndRotation()}function mA(e){e.removeLeadSnapshot()}function ix(e,i,a){e.translate=Ve(i.translate,0,a),e.scale=Ve(i.scale,1,a),e.origin=i.origin,e.originPoint=i.originPoint}function nx(e,i,a,s){e.min=Ve(i.min,a.min,s),e.max=Ve(i.max,a.max,s)}function gA(e,i,a,s){nx(e.x,i.x,a.x,s),nx(e.y,i.y,a.y,s)}function yA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const xA={duration:.45,ease:[.4,0,.1,1]},ax=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),rx=ax("applewebkit/")&&!ax("chrome/")?Math.round:Xt;function sx(e){e.min=rx(e.min),e.max=rx(e.max)}function bA(e){sx(e.x),sx(e.y)}function iv(e,i,a){return e==="position"||e==="preserve-aspect"&&!wj(Jy(i),Jy(a),.2)}function vA(e){var i;return e!==e.root&&((i=e.scroll)==null?void 0:i.wasRoot)}const wA=tv({attachResizeListener:(e,i)=>Vs(e,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Jd={current:void 0},nv=tv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Jd.current){const e=new wA({});e.mount(window),e.setOptions({layoutScroll:!0}),Jd.current=e}return Jd.current},resetTransform:(e,i)=>{e.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),SA={pan:{Feature:Vj},drag:{Feature:Lj,ProjectionNode:nv,MeasureLayout:Ib}};function ox(e,i,a){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",a==="Start");const l="onHover"+a,u=s[l];u&&He.postRender(()=>u(i,Ys(i)))}class jA extends Sn{mount(){const{current:i}=this.node;i&&(this.unmount=X8(i,(a,s)=>(ox(this.node,s,"Start"),l=>ox(this.node,l,"End"))))}unmount(){}}class AA extends Sn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ps(Vs(this.node.current,"focus",()=>this.onFocus()),Vs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function lx(e,i,a){const{props:s}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",a==="Start");const l="onTap"+(a==="End"?"":a),u=s[l];u&&He.postRender(()=>u(i,Ys(i)))}class TA extends Sn{mount(){const{current:i}=this.node;i&&(this.unmount=e9(i,(a,s)=>(lx(this.node,s,"Start"),(l,{success:u})=>lx(this.node,l,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const l0=new WeakMap,Wd=new WeakMap,EA=e=>{const i=l0.get(e.target);i&&i(e)},CA=e=>{e.forEach(EA)};function RA({root:e,...i}){const a=e||document;Wd.has(a)||Wd.set(a,{});const s=Wd.get(a),l=JSON.stringify(i);return s[l]||(s[l]=new IntersectionObserver(CA,{root:e,...i})),s[l]}function DA(e,i,a){const s=RA(i);return l0.set(e,a),s.observe(e),()=>{l0.delete(e),s.unobserve(e)}}const MA={some:0,all:1};class OA extends Sn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:a,margin:s,amount:l="some",once:u}=i,f={root:a?a.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:MA[l]},p=g=>{const{isIntersecting:m}=g;if(this.isInView===m||(this.isInView=m,u&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),S=m?y:v;S&&S(g)};return DA(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:a}=this.node;["amount","margin","root"].some(kA(i,a))&&this.startObserver()}unmount(){}}function kA({viewport:e={}},{viewport:i={}}={}){return a=>e[a]!==i[a]}const zA={inView:{Feature:OA},tap:{Feature:TA},focus:{Feature:AA},hover:{Feature:jA}},BA={layout:{ProjectionNode:nv,MeasureLayout:Ib}},c0={current:null},av={current:!1};function $A(){if(av.current=!0,!!j0)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),i=()=>c0.current=e.matches;e.addListener(i),i()}else c0.current=!1}const NA=new WeakMap;function LA(e,i,a){for(const s in i){const l=i[s],u=a[s];if(gt(l))e.addValue(s,l);else if(gt(u))e.addValue(s,rr(l,{owner:e}));else if(u!==l)if(e.hasValue(s)){const f=e.getValue(s);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=e.getStaticValue(s);e.addValue(s,rr(f!==void 0?f:l,{owner:e}))}}for(const s in a)i[s]===void 0&&e.removeValue(s);return i}const cx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class VA{scrapeMotionValuesFromProps(i,a,s){return{}}constructor({parent:i,props:a,presenceContext:s,reducedMotionConfig:l,blockInitialAnimation:u,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=H0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Et.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,He.render(this.render,!1,!0))};const{latestValues:g,renderState:m}=f;this.latestValues=g,this.baseTarget={...g},this.initialValues=a.initial?{...g}:{},this.renderState=m,this.parent=i,this.props=a,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=l,this.options=p,this.blockInitialAnimation=!!u,this.isControllingVariants=pc(a),this.isVariantNode=Tb(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(a,{},this);for(const S in v){const A=v[S];g[S]!==void 0&&gt(A)&&A.set(g[S],!1)}}mount(i){this.current=i,NA.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,s)=>this.bindToMotionValue(s,a)),av.current||$A(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:c0.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),bn(this.notifyUpdate),bn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}bindToMotionValue(i,a){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=hr.has(i);s&&this.onBindTransform&&this.onBindTransform();const l=a.on("change",p=>{this.latestValues[i]=p,this.props.onUpdate&&He.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),u=a.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,a)),this.valueSubscriptions.set(i,()=>{l(),u(),f&&f(),a.owner&&a.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in sr){const a=sr[i];if(!a)continue;const{isEnabled:s,Feature:l}=a;if(!this.features[i]&&l&&s(this.props)&&(this.features[i]=new l(this)),this.features[i]){const u=this.features[i];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ze()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,a){this.latestValues[i]=a}update(i,a){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let s=0;s<cx.length;s++){const l=cx[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,f=i[u];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=LA(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(i),()=>a.variantChildren.delete(i)}addValue(i,a){const s=this.values.get(i);a!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,a),this.values.set(i,a),this.latestValues[i]=a.get())}removeValue(i){this.values.delete(i);const a=this.valueSubscriptions.get(i);a&&(a(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,a){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&a!==void 0&&(s=rr(a===null?void 0:a,{owner:this}),this.addValue(i,s)),s}readValue(i,a){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(z5(s)||$5(s))?s=parseFloat(s):!n9(s)&&vn.test(a)&&(s=gb(i,a)),this.setBaseTarget(i,gt(s)?s.get():s)),gt(s)?s.get():s}setBaseTarget(i,a){this.baseTarget[i]=a}getBaseTarget(i){var u;const{initial:a}=this.props;let s;if(typeof a=="string"||typeof a=="object"){const f=W0(this.props,a,(u=this.presenceContext)==null?void 0:u.custom);f&&(s=f[i])}if(a&&s!==void 0)return s;const l=this.getBaseTargetFromProps(this.props,i);return l!==void 0&&!gt(l)?l:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,a){return this.events[i]||(this.events[i]=new R0),this.events[i].add(a)}notify(i,...a){this.events[i]&&this.events[i].notify(...a)}}class rv extends VA{constructor(){super(...arguments),this.KeyframeResolver=Y8}sortInstanceNodePosition(i,a){return i.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(i,a){return i.style?i.style[a]:void 0}removeValueFromRenderState(i,{vars:a,style:s}){delete a[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;gt(i)&&(this.childSubscription=i.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}function sv(e,{style:i,vars:a},s,l){Object.assign(e.style,i,l&&l.getProjectionStyles(s));for(const u in a)e.style.setProperty(u,a[u])}function _A(e){return window.getComputedStyle(e)}class HA extends rv{constructor(){super(...arguments),this.type="html",this.renderInstance=sv}readValueFromInstance(i,a){var s;if(hr.has(a))return(s=this.projection)!=null&&s.isProjecting?Xf(a):u8(i,a);{const l=_A(i),u=(O0(a)?l.getPropertyValue(a):l[a])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:a}){return Yb(i,a)}build(i,a,s){X0(i,a,s.transformTemplate)}scrapeMotionValuesFromProps(i,a,s){return eh(i,a,s)}}const ov=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function UA(e,i,a,s){sv(e,i,void 0,s);for(const l in i.attrs)e.setAttribute(ov.has(l)?l:I0(l),i.attrs[l])}class PA extends rv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ze}getBaseTargetFromProps(i,a){return i[a]}readValueFromInstance(i,a){if(hr.has(a)){const s=mb(a);return s&&s.default||0}return a=ov.has(a)?a:I0(a),i.getAttribute(a)}scrapeMotionValuesFromProps(i,a,s){return $b(i,a,s)}build(i,a,s){Ob(i,a,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,a,s,l){UA(i,a,s,l)}mount(i){this.isSVGTag=zb(i.tagName),super.mount(i)}}const FA=(e,i)=>J0(e)?new PA(i):new HA(i,{allowProjection:e!==w.Fragment}),qA=U9({...hj,...zA,...SA,...BA},FA),C=f9(qA),YA=b(C.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({theme:e})=>{var i;return((i=e==null?void 0:e.zIndex)==null?void 0:i.sticky)||1100}};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${({$scrolled:e,theme:i})=>e?`
    background: rgba(253, 252, 250, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(144, 179, 167, 0.1);
    box-shadow: 0 4px 6px -1px rgba(144, 179, 167, 0.08), 0 2px 4px -1px rgba(144, 179, 167, 0.06);
  `:`
    background: rgba(245, 243, 240, 0.8);
    backdrop-filter: blur(10px);
  `}
`,GA=b.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,KA=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  
  @media (min-width: 1024px) {
    height: 5.5rem;
  }
`,ux=b(C.div)`
  display: flex;
  align-items: center;
  cursor: pointer;
`,dx=b.div`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Playfair Display", serif'}};
  font-size: 2rem;
  font-weight: 700;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.primary)||"#2C3E2D"}};
  letter-spacing: -0.02em;
  
  background: linear-gradient(135deg, 
    ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.primary)||"#90B3A7"}} 0%, 
    ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.secondary)||"#D4A574"}} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;b.div`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.75rem;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.light)||"#8B9A8E"}};
  margin-left: 0.5rem;
  margin-top: 0.25rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    display: none;
  }
`;const ZA=b.nav`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`,IA=b.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`,XA=b.li`
  position: relative;
`,QA=b(Lt)`
  position: relative;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.primary)||"#2C3E2D"}};
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 0.5rem 0;
  letter-spacing: 0.01em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.primary)||"#90B3A7"}}, 
      ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.secondary)||"#D4A574"}}
    );
    transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 1px;
  }
  
  &:hover {
    color: ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.primary)||"#90B3A7"}};
    transform: translateY(-1px);
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
  
  &.active {
    color: ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.primary)||"#90B3A7"}};
    font-weight: 600;
  }
`,JA=b.div`
  position: relative;
  z-index: 100;
`,WA=b(C.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(144, 179, 167, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 12px;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.primary)||"#2C3E2D"}};
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    background: rgba(144, 179, 167, 0.15);
    border-color: rgba(144, 179, 167, 0.3);
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(144, 179, 167, 0.1);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &.open svg {
    transform: rotate(180deg);
  }
`,eT=b(C.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 150px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 16px;
  padding: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(144, 179, 167, 0.1), 0 4px 6px -2px rgba(144, 179, 167, 0.05);
  overflow: hidden;
`,ef=b(C.button)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: ${({$active:e})=>e?"rgba(144, 179, 167, 0.1)":"transparent"};
  color: ${({$active:e,theme:i})=>{var a,s,l;return e?((a=i==null?void 0:i.colors)==null?void 0:a.primary)||"#90B3A7":((l=(s=i==null?void 0:i.colors)==null?void 0:s.text)==null?void 0:l.primary)||"#2C3E2D"}};
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: ${({$active:e})=>e?"600":"500"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    background: rgba(144, 179, 167, 0.1);
    color: ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.primary)||"#90B3A7"}};
  }
`,tT=b(C.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background: rgba(144, 179, 167, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 8px;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.primary)||"#2C3E2D"}};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  @media (min-width: 1024px) {
    display: none;
  }
  
  &:hover {
    background: rgba(144, 179, 167, 0.15);
    transform: translateY(-1px);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
`,iT=b(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 62, 45, 0.5);
  backdrop-filter: blur(4px);
  z-index: 90;
  
  @media (min-width: 1024px) {
    display: none;
  }
`,nT=b(C.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 20rem;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(144, 179, 167, 0.1);
  z-index: 95;
  overflow-y: auto;
  
  @media (min-width: 1024px) {
    display: none;
  }
`,aT=b.div`
  padding: 2rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`,rT=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(144, 179, 167, 0.1);
`,sT=b(C.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background: rgba(144, 179, 167, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 8px;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.primary)||"#2C3E2D"}};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(144, 179, 167, 0.2);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,oT=b.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
`,lT=b.li`
  margin-bottom: 0.5rem;
`,cT=b(Lt)`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.primary)||"#2C3E2D"}};
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover,
  &.active {
    background: rgba(144, 179, 167, 0.1);
    color: ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.primary)||"#90B3A7"}};
    transform: translateX(0.25rem);
  }
  
  &.active {
    font-weight: 600;
  }
`,uT=b.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(144, 179, 167, 0.1);
`,dT=b.h3`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.light)||"#8B9A8E"}};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`,fT=b.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`,tf=b(C.button)`
  padding: 0.75rem;
  background: ${({$active:e})=>e?"rgba(144, 179, 167, 0.15)":"rgba(144, 179, 167, 0.05)"};
  border: 1px solid ${({$active:e})=>e?"rgba(144, 179, 167, 0.3)":"rgba(144, 179, 167, 0.1)"};
  border-radius: 8px;
  color: ${({$active:e,theme:i})=>{var a,s,l;return e?((a=i==null?void 0:i.colors)==null?void 0:a.primary)||"#90B3A7":((l=(s=i==null?void 0:i.colors)==null?void 0:s.text)==null?void 0:l.primary)||"#2C3E2D"}};
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: ${({$active:e})=>e?"600":"500"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(144, 179, 167, 0.15);
    border-color: rgba(144, 179, 167, 0.3);
  }
`,hT=()=>{const{t:e,i18n:i}=ke(),a=Yi(),[s,l]=w.useState(!1),[u,f]=w.useState(!1),[p,g]=w.useState(!1),m=w.useRef(null),y=M=>a.pathname===M;w.useEffect(()=>{const M=()=>{l(window.scrollY>20)};return window.addEventListener("scroll",M),()=>window.removeEventListener("scroll",M)},[]),w.useEffect(()=>{const M=Y=>{m.current&&!m.current.contains(Y.target)&&g(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]),w.useEffect(()=>{f(!1)},[a.pathname]);const v=M=>{i.changeLanguage(M),g(!1)},S=()=>{switch(i.language){case"en":return"EN";case"ru":return"RU";case"th":return"TH";default:return"EN"}},A=[{path:"/",label:e("navigation.home")},{path:"/restaurant",label:e("navigation.restaurant")},{path:"/spa",label:e("navigation.spa_and_beauty")},{path:"/sports",label:e("navigation.sports")},{path:"/contacts",label:e("navigation.contacts")}],T={hidden:{y:-100,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:[.25,.46,.45,.94]}}},k={hover:{scale:1.05,transition:{duration:.3}}},B={hidden:{x:"100%"},visible:{x:0,transition:{type:"spring",damping:25,stiffness:200}}},O={hidden:{opacity:0},visible:{opacity:1}},H={hidden:{opacity:0,y:-10,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.2,ease:"easeOut"}}};return d.jsxs(d.Fragment,{children:[d.jsx(YA,{$scrolled:s,variants:T,initial:"hidden",animate:"visible",children:d.jsx(GA,{children:d.jsxs(KA,{children:[d.jsx(Lt,{to:"/",children:d.jsx(ux,{variants:k,whileHover:"hover",children:d.jsx(dx,{children:"KAIF"})})}),d.jsx(ZA,{children:d.jsx(IA,{children:A.map(M=>d.jsx(XA,{children:d.jsx(QA,{to:M.path,className:y(M.path)?"active":"",children:M.label})},M.path))})}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsxs(JA,{ref:m,children:[d.jsxs(WA,{onClick:()=>g(!p),className:p?"open":"",whileHover:{scale:1.02},whileTap:{scale:.98},children:[S(),d.jsx("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),d.jsx(ia,{children:p&&d.jsxs(eT,{variants:H,initial:"hidden",animate:"visible",exit:"hidden",children:[d.jsx(ef,{$active:i.language==="en",onClick:()=>v("en"),whileHover:{x:2},children:"English"}),d.jsx(ef,{$active:i.language==="ru",onClick:()=>v("ru"),whileHover:{x:2},children:"Русский"}),d.jsx(ef,{$active:i.language==="th",onClick:()=>v("th"),whileHover:{x:2},children:"ไทย"})]})})]}),d.jsx(tT,{onClick:()=>f(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:d.jsx("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]})})}),d.jsx(ia,{children:u&&d.jsxs(d.Fragment,{children:[d.jsx(iT,{variants:O,initial:"hidden",animate:"visible",exit:"hidden",onClick:()=>f(!1)}),d.jsx(nT,{variants:B,initial:"hidden",animate:"visible",exit:"hidden",children:d.jsxs(aT,{children:[d.jsxs(rT,{children:[d.jsx(ux,{children:d.jsx(dx,{style:{fontSize:"1.5rem"},children:"KAIF"})}),d.jsx(sT,{onClick:()=>f(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:d.jsx("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),d.jsx(oT,{children:A.map((M,Y)=>d.jsx(lT,{children:d.jsx(C.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:Y*.1}},children:d.jsx(cT,{to:M.path,className:y(M.path)?"active":"",children:M.label})})},M.path))}),d.jsxs(uT,{children:[d.jsx(dT,{children:e("common.select_language")}),d.jsxs(fT,{children:[d.jsx(tf,{$active:i.language==="en",onClick:()=>{v("en"),f(!1)},whileHover:{scale:1.02},whileTap:{scale:.98},children:"EN"}),d.jsx(tf,{$active:i.language==="ru",onClick:()=>{v("ru"),f(!1)},whileHover:{scale:1.02},whileTap:{scale:.98},children:"RU"}),d.jsx(tf,{$active:i.language==="th",onClick:()=>{v("th"),f(!1)},whileHover:{scale:1.02},whileTap:{scale:.98},children:"TH"})]})]})]})})]})})]})};function pT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const or=w.forwardRef(pT);function mT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z",clipRule:"evenodd"}))}const gT=w.forwardRef(mT);function yT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z",clipRule:"evenodd"}))}const fx=w.forwardRef(yT);function xT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z",clipRule:"evenodd"}))}const bT=w.forwardRef(xT);function vT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{d:"M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"}),w.createElement("path",{fillRule:"evenodd",d:"M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z",clipRule:"evenodd"}))}const wT=w.forwardRef(vT);function ST({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{d:"M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"}),w.createElement("path",{d:"M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"}))}const hx=w.forwardRef(ST);function jT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"}))}const AT=w.forwardRef(jT);function TT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"}))}const ET=w.forwardRef(TT);function CT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const RT=w.forwardRef(CT);function DT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",clipRule:"evenodd"}))}const MT=w.forwardRef(DT);function OT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z",clipRule:"evenodd"}))}const wn=w.forwardRef(OT);function kT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{d:"M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z"}),w.createElement("path",{fillRule:"evenodd",d:"M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z",clipRule:"evenodd"}))}const nf=w.forwardRef(kT);function zT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{d:"M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"}))}const af=w.forwardRef(zT);function BT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{d:"m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"}))}const lv=w.forwardRef(BT);function $T({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",clipRule:"evenodd"}))}const NT=w.forwardRef($T);function LT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",clipRule:"evenodd"}))}const Zn=w.forwardRef(LT);function VT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const _T=w.forwardRef(VT);function HT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",clipRule:"evenodd"}))}const Qt=w.forwardRef(HT);function UT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"}))}const PT=w.forwardRef(UT);function FT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",clipRule:"evenodd"}))}const ml=w.forwardRef(FT);function qT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z",clipRule:"evenodd"}))}const YT=w.forwardRef(qT);function GT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z",clipRule:"evenodd"}))}const er=w.forwardRef(GT);function KT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",clipRule:"evenodd"}))}const yi=w.forwardRef(KT);function ZT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z",clipRule:"evenodd"}))}const IT=w.forwardRef(ZT);function XT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{d:"M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z"}),w.createElement("path",{d:"M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z"}),w.createElement("path",{d:"M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"}))}const px=w.forwardRef(XT);function QT({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{fillRule:"evenodd",d:"M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z",clipRule:"evenodd"}),w.createElement("path",{d:"M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"}))}const $l=w.forwardRef(QT),JT=b.footer`
  position: relative;
  background: linear-gradient(135deg, 
    rgba(44, 62, 45, 0.95) 0%,
    rgba(90, 107, 93, 0.9) 50%,
    rgba(44, 62, 45, 0.95) 100%
  );
  color: white;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(144, 179, 167, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(200, 168, 233, 0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`,WT=b.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 1.5rem 2rem;
  
  @media (min-width: 1024px) {
    padding: 5rem 2rem 2rem;
  }
`,eE=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 3rem;
  }
`,tE=b(C.div)`
  @media (max-width: 1023px) {
    text-align: center;
    grid-column: 1 / -1;
  }
`,iE=b(C.div)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Playfair Display", serif'}};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 1) 0%, 
    rgba(144, 179, 167, 0.9) 50%,
    rgba(212, 165, 116, 0.8) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;b.p`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
`;const nE=b.p`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 350px;
  
  @media (max-width: 1023px) {
    margin-left: auto;
    margin-right: auto;
  }
`,aE=b.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
  }
`,rf=b(C.a)`
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: linear-gradient(135deg, 
      rgba(144, 179, 167, 0.8) 0%, 
      rgba(212, 165, 116, 0.6) 100%
    );
    border-color: rgba(255, 255, 255, 0.4);
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,sf=b(C.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`,of=b.h3`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Playfair Display", serif'}};
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2rem;
    height: 2px;
    background: linear-gradient(90deg, 
      rgba(144, 179, 167, 0.8) 0%, 
      rgba(212, 165, 116, 0.6) 100%
    );
    border-radius: 1px;
    
    @media (min-width: 1024px) {
      left: 0;
      transform: none;
    }
  }
`,mx=b(Lt)`
  display: block;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateX(4px);
  }
`,gl=b(C.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
    text-align: left;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: rgba(144, 179, 167, 0.8);
    margin-top: 0.125rem;
    flex-shrink: 0;
  }
`,yl=b.div`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`,rE=b.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`,sE=b.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,oE=b.p`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  
  .highlight {
    color: rgba(144, 179, 167, 0.8);
    font-weight: 500;
  }
`,lE=b.div`
  display: flex;
  gap: 2rem;
  
  a {
    font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`,lf=b(C.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${({$variant:e})=>{switch(e){case"secondary":return"linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, rgba(184, 196, 168, 0.06) 100%)";case"tertiary":return"linear-gradient(135deg, rgba(184, 196, 168, 0.08) 0%, rgba(144, 179, 167, 0.06) 100%)";default:return"linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(212, 165, 116, 0.06) 100%)"}}};
  filter: blur(60px);
  z-index: 2;
  pointer-events: none;
  
  &.deco-1 {
    top: -50px;
    left: 10%;
  }
  
  &.deco-2 {
    top: 30%;
    right: 5%;
  }
  
  &.deco-3 {
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
`,cE=()=>{const{t:e}=ke(),i={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},a={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.46,.45,.94]}}},s={animate:{y:[0,-15,0],transition:{duration:12,repeat:1/0,ease:"easeInOut"}}},l=new Date().getFullYear(),u=[{path:"/",label:e("navigation.home"),id:"home"},{path:"/restaurant",label:e("navigation.restaurant"),id:"restaurant"},{path:"/spa",label:e("navigation.spa_and_beauty"),id:"spa"},{path:"/sports",label:e("navigation.sports"),id:"sports-main"},{path:"/about",label:e("navigation.about"),id:"about"},{path:"/contacts",label:e("navigation.contacts"),id:"contacts"},{path:"/promotions",label:e("navigation.promotions"),id:"promotions"}],f=[{path:"/spa",label:"Сауна и хаммам",id:"spa-sauna"},{path:"/restaurant",label:"Ресторан",id:"restaurant"},{path:"/sports",label:"Фитнес-центр",id:"sports-fitness"},{path:"/beauty",label:"Салон красоты",id:"beauty"},{path:"/sports",label:"Бойцовский клуб",id:"sports-club"},{path:"/promotions",label:"Акции",id:"promotions"}];return d.jsxs(JT,{children:[d.jsx(lf,{className:"deco-1",$variant:"primary",variants:s,animate:"animate"}),d.jsx(lf,{className:"deco-2",$variant:"secondary",variants:s,animate:"animate",style:{animationDelay:"-4s"}}),d.jsx(lf,{className:"deco-3",$variant:"tertiary",variants:s,animate:"animate",style:{animationDelay:"-8s"}}),d.jsx(WT,{children:d.jsxs(C.div,{variants:i,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsxs(eE,{children:[d.jsxs(tE,{variants:a,children:[d.jsx(iE,{whileHover:{scale:1.05},transition:{duration:.3},children:"KAIF"}),d.jsx(nE,{children:"Премиальный оздоровительный комплекс на Пхукете. Мы создаем уникальный опыт wellness для восстановления гармонии тела и души."}),d.jsxs(aE,{children:[d.jsx(rf,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.95},children:d.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),d.jsx(rf,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.95},children:d.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{d:"M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.717 0-4.915-2.198-4.915-4.915S5.732 7.158 8.449 7.158s4.915 2.198 4.915 4.915-2.198 4.915-4.915 4.915zm7.44-9.622a1.158 1.158 0 11-2.316 0 1.158 1.158 0 012.316 0z"})})}),d.jsx(rf,{href:`tel:${e("common.phone_number")}`,whileHover:{scale:1.1},whileTap:{scale:.95},children:d.jsx(Qt,{})})]})]}),d.jsxs(sf,{variants:a,children:[d.jsx(of,{children:"Навигация"}),u.map(p=>d.jsx(mx,{to:p.path,children:p.label},p.id))]}),d.jsxs(sf,{variants:a,children:[d.jsx(of,{children:"Услуги"}),f.map(p=>d.jsx(mx,{to:p.path,children:p.label},p.id))]}),d.jsxs(sf,{variants:a,children:[d.jsx(of,{children:"Контакты"}),d.jsxs(gl,{children:[d.jsx(Zn,{}),d.jsx(yl,{children:e("common.address")})]}),d.jsxs(gl,{children:[d.jsx(Qt,{}),d.jsx(yl,{children:d.jsx(rE,{href:`tel:${e("common.phone_number")}`,children:e("common.phone_number")})})]}),d.jsxs(gl,{children:[d.jsx(wn,{}),d.jsxs(yl,{children:["Ежедневно",d.jsx("br",{}),"8:00 - 22:00"]})]}),d.jsxs(gl,{children:[d.jsx(lv,{}),d.jsx(yl,{children:d.jsxs("span",{style:{color:"rgba(184, 196, 168, 0.8)"},children:["Child Watch Phuket",d.jsx("br",{}),"Foundation"]})})]})]})]}),d.jsxs(sE,{children:[d.jsxs(oE,{children:["© ",l," ",d.jsx("span",{className:"highlight",children:"KAIF"}),". Все права защищены."]}),d.jsxs(lE,{children:[d.jsx("a",{href:"/privacy",children:"Политика конфиденциальности"}),d.jsx("a",{href:"/terms",children:"Условия использования"})]})]})]})})]})},uE=({children:e})=>{const i=Yi();return w.useEffect(()=>{window.scrollTo(0,0)},[i.pathname]),d.jsxs("div",{className:"flex flex-col min-h-screen",children:[d.jsx(hT,{}),d.jsx("main",{className:"flex-grow pt-16",children:e}),d.jsx(cE,{})]})},dE=b.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: #000;
`,fE=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 100%);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`,hE=b.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,pE=b.div`
  margin-bottom: 5rem;
  max-width: 800px;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,mE=b(C.div)`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.7);
    margin-right: 1rem;
  }
`,gE=b(C.h1)`
  font-size: clamp(5rem, 12vw, 10rem);
  font-weight: 700;
  line-height: 0.9;
  margin: 0 0 1.5rem;
  letter-spacing: -2px;
  background: linear-gradient(to right, #FFFFFF 0%, #A0A0A0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`,yE=b(C.h2)`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 300;
  color: white;
  margin: 0 0 2rem;
  max-width: 650px;
`,xE=b(C.p)`
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 550px;
`,bE=b(C.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`,vE=b(Lt)`
  padding: 1.25rem 3rem;
  background: white;
  color: black;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-5px);
  }
`,wE=b.button`
  padding: 1.25rem 3rem;
  background: transparent;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: white;
    transform: translateY(-5px);
  }
`,SE=b.div`
  margin-top: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -5rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`,jE=b(C.h3)`
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3rem;
  display: inline-block;
`,AE=b.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,TE=b(C.div)`
  position: relative;
  padding: 2rem;
  background-color: rgba(15, 15, 15, 0.5);
  backdrop-filter: blur(10px);
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid ${e=>e.$isActivity?"#3a3a3a":"#2a2a2a"};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(25, 25, 25, 0.8);
    transform: translateY(-10px);
    border-bottom-color: ${e=>e.$isActivity?"#505050":"#404040"};
  }
`,EE=b.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.8rem;
  background: ${e=>e.$isActivity?"#333333":"#222222"};
  border-radius: 2px;
  color: white;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: white;
    margin-right: 0.5rem;
  }
`,CE=b.h4`
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  margin: 0 0 1rem;
`,RE=b.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`,DE=b.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: clamp(3rem, 10vw, 8rem);
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
  }
`,ME=b(C.div)`
  text-align: center;
`,OE=b.div`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 0.5rem;
`,kE=b.div`
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`,zE=b(C.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`,BE=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})}),$E=()=>{const e=[{title:"Фитнес-центр",description:"70+ тренажеров, кардио-зона, персональные тренировки",isActivity:!0},{title:"Боевые искусства",description:"MMA, бокс, муай-тай с профессиональными тренерами",isActivity:!0},{title:"Бассейн 25м",description:"Олимпийский стандарт с подогревом воды",isActivity:!0},{title:"СПА-центр",description:"Тайский массаж, ароматерапия, релаксация",isActivity:!1},{title:"Ресторан",description:"5 кухонь мира с панорамной террасой",isActivity:!1},{title:"Салон красоты",description:"Косметология, уходы, парикмахерские услуги",isActivity:!1}],i=[{number:"7",label:"ЗОН ОТДЫХА"},{number:"50м²",label:"САУНА"},{number:"70+",label:"ТРЕНАЖЕРОВ"}],[a,s]=w.useState(!1);return w.useEffect(()=>{const l=setTimeout(()=>{s(!0)},1e3);return()=>clearTimeout(l)},[]),d.jsxs(dE,{children:[d.jsx(fE,{children:d.jsx("img",{src:"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",alt:"KAIF Fitness"})}),d.jsxs(hE,{children:[d.jsxs(pE,{children:[d.jsx(mE,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6},children:"Премиальный комплекс на Пхукете"}),d.jsx(gE,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"KAIF"}),d.jsx(yE,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:"Многофункциональный комплекс"}),d.jsx(xE,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:"Современное пространство, объединяющее фитнес, релаксацию, гастрономию и красоту в одном месте"}),d.jsxs(bE,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[d.jsx(vE,{to:"/spa",children:"ЗАБРОНИРОВАТЬ"}),d.jsx(wE,{children:"ВИРТУАЛЬНЫЙ ТУР"})]})]}),d.jsxs("div",{children:[d.jsxs(SE,{children:[d.jsx(jE,{initial:{opacity:0,y:30},animate:{opacity:a?1:0,y:a?0:30},transition:{duration:.6},children:"Наши услуги"}),d.jsx(AE,{children:e.map((l,u)=>d.jsxs(TE,{$isActivity:l.isActivity,initial:{opacity:0,y:30},animate:{opacity:a?1:0,y:a?0:30},transition:{duration:.6,delay:u*.1+.3},children:[d.jsx(EE,{$isActivity:l.isActivity,children:l.isActivity?"АКТИВНОСТЬ":"РЕЛАКСАЦИЯ"}),d.jsx(CE,{children:l.title}),d.jsx(RE,{children:l.description})]},u))})]}),d.jsx(DE,{children:i.map((l,u)=>d.jsxs(ME,{initial:{opacity:0,scale:.9},animate:{opacity:a?1:0,scale:a?1:.9},transition:{duration:.7,delay:u*.2+.5},children:[d.jsx(OE,{children:l.number}),d.jsx(kE,{children:l.label})]},u))})]}),d.jsxs(zE,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:1.5},children:[d.jsx(BE,{}),d.jsx("span",{children:"Прокрутите вниз"})]})]})]})},NE=b.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, 
    ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.background)||"#F5F3F0"}} 0%,
    rgba(245, 243, 240, 0.8) 100%
  );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(232, 115, 74, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(144, 179, 167, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(74, 144, 184, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`,LE=b.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,VE=b(C.div)`
  text-align: center;
  margin-bottom: 5rem;
`,_E=b(C.h2)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  background: linear-gradient(135deg, 
    ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.primary)||"#2C3E2D"}} 0%,
    ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.energy)||"#E8734A"}} 50%,
    ${({theme:e})=>{var i;return((i=e==null?void 0:e.colors)==null?void 0:i.primary)||"#90B3A7"}} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,HE=b(C.p)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.secondary)||"#5A6B5D"}};
  max-width: 600px;
  margin: 0 auto;
`,UE=b(C.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`,PE=b(C.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: ${({$active:e,$zone:i})=>e?i==="energy"?"linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)":"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)":"rgba(255, 255, 255, 0.8)"};
  color: ${({$active:e,$zone:i,theme:a})=>{var s,l;return e?"white":i==="energy"?((s=a==null?void 0:a.colors)==null?void 0:s.energy)||"#E8734A":((l=a==null?void 0:a.colors)==null?void 0:l.primary)||"#90B3A7"}};
  border: 2px solid ${({$zone:e,theme:i})=>{var a,s;return e==="energy"?((a=i==null?void 0:i.colors)==null?void 0:a.energy)||"#E8734A":((s=i==null?void 0:i.colors)==null?void 0:s.primary)||"#90B3A7"}};
  border-radius: 50px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({$zone:e})=>e==="energy"?"0 10px 30px rgba(232, 115, 74, 0.3)":"0 10px 30px rgba(144, 179, 167, 0.3)"};
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,FE=b(C.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,cv=b(C.div)`
  background: ${({$zone:e})=>{switch(e){case"fitness":return"linear-gradient(135deg, rgba(232, 115, 74, 0.05) 0%, rgba(232, 115, 74, 0.02) 100%)";case"combat":return"linear-gradient(135deg, rgba(45, 91, 105, 0.05) 0%, rgba(45, 91, 105, 0.02) 100%)";case"pool":return"linear-gradient(135deg, rgba(74, 144, 184, 0.05) 0%, rgba(74, 144, 184, 0.02) 100%)";case"spa":return"linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(144, 179, 167, 0.02) 100%)";case"restaurant":return"linear-gradient(135deg, rgba(212, 165, 116, 0.05) 0%, rgba(212, 165, 116, 0.02) 100%)";case"beauty":return"linear-gradient(135deg, rgba(200, 168, 233, 0.05) 0%, rgba(200, 168, 233, 0.02) 100%)";case"sauna":return"linear-gradient(135deg, rgba(139, 115, 85, 0.05) 0%, rgba(139, 115, 85, 0.02) 100%)";default:return"rgba(255, 255, 255, 0.8)"}}};
  
  backdrop-filter: blur(20px);
  border: 1px solid ${({$zone:e})=>{switch(e){case"fitness":return"rgba(232, 115, 74, 0.15)";case"combat":return"rgba(45, 91, 105, 0.15)";case"pool":return"rgba(74, 144, 184, 0.15)";case"spa":return"rgba(144, 179, 167, 0.15)";case"restaurant":return"rgba(212, 165, 116, 0.15)";case"beauty":return"rgba(200, 168, 233, 0.15)";case"sauna":return"rgba(139, 115, 85, 0.15)";default:return"rgba(144, 179, 167, 0.1)"}}};
  
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({$zone:e})=>{switch(e){case"fitness":case"combat":case"pool":return"linear-gradient(90deg, transparent, rgba(232, 115, 74, 0.1), transparent)";default:return"linear-gradient(90deg, transparent, rgba(144, 179, 167, 0.1), transparent)"}}};
    transition: left 0.6s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: ${({$zone:e})=>{switch(e){case"fitness":return"0 25px 50px rgba(232, 115, 74, 0.2)";case"combat":return"0 25px 50px rgba(45, 91, 105, 0.2)";case"pool":return"0 25px 50px rgba(74, 144, 184, 0.2)";case"spa":return"0 25px 50px rgba(144, 179, 167, 0.2)";case"restaurant":return"0 25px 50px rgba(212, 165, 116, 0.2)";case"beauty":return"0 25px 50px rgba(200, 168, 233, 0.2)";case"sauna":return"0 25px 50px rgba(139, 115, 85, 0.2)";default:return"0 25px 50px rgba(144, 179, 167, 0.15)"}}};
    border-color: ${({$zone:e})=>{switch(e){case"fitness":return"rgba(232, 115, 74, 0.3)";case"combat":return"rgba(45, 91, 105, 0.3)";case"pool":return"rgba(74, 144, 184, 0.3)";case"spa":return"rgba(144, 179, 167, 0.3)";case"restaurant":return"rgba(212, 165, 116, 0.3)";case"beauty":return"rgba(200, 168, 233, 0.3)";case"sauna":return"rgba(139, 115, 85, 0.3)";default:return"rgba(144, 179, 167, 0.2)"}}};
  }
  
  &:hover::before {
    left: 100%;
  }
`,qE=b.div`
  position: relative;
  z-index: 2;
  width: 4rem;
  height: 4rem;
  margin: 0 auto 2rem;
  background: ${({$zone:e})=>{switch(e){case"fitness":return"linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)";case"combat":return"linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)";case"pool":return"linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)";case"spa":return"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)";case"restaurant":return"linear-gradient(135deg, #D4A574 0%, #E1B885 100%)";case"beauty":return"linear-gradient(135deg, #C8A8E9 0%, #D4B8F0 100%)";case"sauna":return"linear-gradient(135deg, #8B7355 0%, #A08866 100%)";default:return"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)"}}};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: white;
  transition: all 0.4s ease;
  flex-shrink: 0;
  
  /* Анимация для энергичных зон */
  ${({$zone:e})=>(e==="fitness"||e==="combat"||e==="pool")&&`
    animation: energyPulse 3s ease-in-out infinite;
  `}
  
  ${cv}:hover & {
    transform: scale(1.1) ${({$zone:e})=>e==="fitness"||e==="combat"?"rotate(10deg)":"rotate(-5deg)"};
  }
`,YE=b.h3`
  position: relative;
  z-index: 2;
  font-family: ${({$zone:e,theme:i})=>{var a,s;return e==="fitness"||e==="combat"?((a=i==null?void 0:i.fonts)==null?void 0:a.strong)||'"Oswald", sans-serif':((s=i==null?void 0:i.fonts)==null?void 0:s.elegant)||'"Playfair Display", serif'}};
  font-size: ${({$zone:e})=>e==="fitness"||e==="combat"?"1.25rem":"1.5rem"};
  font-weight: ${({$zone:e})=>"600"};
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.primary)||"#2C3E2D"}};
  margin-bottom: 1rem;
  text-transform: ${({$zone:e})=>e==="fitness"||e==="combat"?"uppercase":"none"};
  letter-spacing: ${({$zone:e})=>e==="fitness"||e==="combat"?"0.05em":"0"};
  line-height: 1.3;
`,GE=b.p`
  position: relative;
  z-index: 2;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.secondary)||"#5A6B5D"}};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`,KE=b.ul`
  position: relative;
  z-index: 2;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,ZE=b.li`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: ${({theme:e})=>{var i,a;return((a=(i=e==null?void 0:e.colors)==null?void 0:i.text)==null?void 0:a.secondary)||"#5A6B5D"}};
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({$zone:e})=>{switch(e){case"fitness":return"#E8734A";case"combat":return"#2D5B69";case"pool":return"#4A90B8";case"spa":return"#90B3A7";case"restaurant":return"#D4A574";case"beauty":return"#C8A8E9";case"sauna":return"#8B7355";default:return"#90B3A7"}}};
    font-weight: bold;
  }
`,IE=b(C.button)`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({$zone:e})=>{switch(e){case"fitness":return"linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)";case"combat":return"linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)";case"pool":return"linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)";case"spa":return"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)";case"restaurant":return"linear-gradient(135deg, #D4A574 0%, #E1B885 100%)";case"beauty":return"linear-gradient(135deg, #C8A8E9 0%, #D4B8F0 100%)";case"sauna":return"linear-gradient(135deg, #8B7355 0%, #A08866 100%)";default:return"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)"}}};
  color: white;
  border: none;
  border-radius: 25px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({$zone:e})=>{switch(e){case"fitness":return"0 6px 20px rgba(232, 115, 74, 0.4)";case"combat":return"0 6px 20px rgba(45, 91, 105, 0.4)";case"pool":return"0 6px 20px rgba(74, 144, 184, 0.4)";case"spa":return"0 6px 20px rgba(144, 179, 167, 0.4)";case"restaurant":return"0 6px 20px rgba(212, 165, 116, 0.4)";case"beauty":return"0 6px 20px rgba(200, 168, 233, 0.4)";case"sauna":return"0 6px 20px rgba(139, 115, 85, 0.4)";default:return"0 6px 20px rgba(144, 179, 167, 0.4)"}}};
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`,XE=()=>{const{t:e}=ke(),[i,a]=w.useState("energy"),s={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},l={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.46,.45,.94]}}},u={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:[.25,.46,.45,.94]}}},f=[{id:"energy",name:"Активность",icon:d.jsx(gT,{})},{id:"relax",name:"Релаксация",icon:d.jsx(lv,{})}],g={energy:[{zone:"fitness",icon:"💪",title:"Фитнес-центр",description:"Современный тренажерный зал с профессиональным оборудованием для всех видов тренировок.",features:["70+ современных тренажеров","Кардио-зона","Функциональный тренинг","Персональные тренировки"],link:"/sports"},{zone:"combat",icon:"🥊",title:"Боевые искусства",description:"Профессиональные тренировки по MMA, боксу и муай-тай под руководством опытных тренеров.",features:["MMA и бокс","Муай-тай","Профессиональный ринг","Групповые и индивидуальные занятия"],link:"/sports"},{zone:"pool",icon:"🏊‍♀️",title:"Бассейн",description:"25-метровый бассейн олимпийского стандарта для плавания и водных тренировок.",features:["25м олимпийский стандарт","Подогрев воды","Aqua-фитнес","Детская зона"],link:"/sports"}],relax:[{zone:"spa",icon:"🧘‍♀️",title:"СПА-центр",description:"Оазис спокойствия с широким спектром расслабляющих и восстанавливающих процедур.",features:["Тайский массаж","Aromatherapy","Горячие камни","Релакс-зоны"],link:"/spa"},{zone:"sauna",icon:"🔥",title:"Сауна и хаммам",description:"Самая большая сауна в Таиланде и традиционный турецкий хаммам.",features:["50м² финская сауна","Турецкий хаммам","Ледяной бассейн","Релакс-зона"],link:"/spa"},{zone:"beauty",icon:"💅",title:"Салон красоты",description:"Полный спектр beauty-услуг от профессиональных мастеров.",features:["Уход за лицом и телом","Маникюр и педикюр","Парикмахерские услуги","Косметология"],link:"/beauty"},{zone:"restaurant",icon:"🍽️",title:"Ресторан",description:"Изысканная кухня пяти стран мира в атмосфере элегантности и комфорта.",features:["5 кухонь мира","Авторские блюда","Винная карта","Панорамная терраса"],link:"/restaurant"}]}[i]||[];return d.jsx(NE,{children:d.jsx(LE,{children:d.jsxs(C.div,{variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsxs(VE,{children:[d.jsx(_E,{variants:l,children:"Наши услуги"}),d.jsx(HE,{variants:l,children:"Выберите свой путь: динамичная активность или расслабляющая релаксация"})]}),d.jsx(UE,{variants:l,children:f.map(m=>d.jsxs(PE,{$zone:m.id,$active:i===m.id,onClick:()=>a(m.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.icon,m.name]},m.id))}),d.jsx(ia,{mode:"wait",children:d.jsx(FE,{variants:s,initial:"hidden",animate:"visible",exit:"hidden",children:g.map((m,y)=>d.jsxs(cv,{$zone:m.zone,variants:u,whileHover:{scale:1.02,transition:{duration:.3}},children:[d.jsx(qE,{$zone:m.zone,children:m.icon}),d.jsx(YE,{$zone:m.zone,children:m.title}),d.jsx(GE,{children:m.description}),d.jsx(KE,{children:m.features.map((v,S)=>d.jsx(ZE,{$zone:m.zone,children:v},S))}),d.jsx(Lt,{to:m.link,children:d.jsxs(IE,{$zone:m.zone,whileHover:{scale:1.02},whileTap:{scale:.98},children:["Подробнее",d.jsx(or,{})]})})]},`${i}-${y}`))},i)})]})})})},QE=b.section`
  position: relative;
  padding: 8rem 0;
  background: #fafafa;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(0, 0, 0, 0.01) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
`,JE=b.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,WE=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`,eC=b(C.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`,tC=b(C.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
  }
`,iC=b(C.h2)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,gx=b(C.p)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 2.5rem;
  font-weight: 400;
  max-width: 500px;
  
  @media (max-width: 1023px) {
    margin-left: auto;
    margin-right: auto;
  }
`,nC=b(C.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,aC=b(C.div)`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-color: #e2e8f0;
  }
`,rC=b.div`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
  line-height: 1;
`,sC=b.div`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  line-height: 1.3;
`;b(C.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    background: #1e293b;
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.2);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`;const oC=b(C.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,uv=b(C.div)`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border-color: #e2e8f0;
  }
`,lC=b.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1.5rem;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #475569;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${uv}:hover & {
    transform: scale(1.05);
    background: #0f172a;
    color: white;
    border-color: #0f172a;
  }
`,cC=b.h3`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`,uC=b.p`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,dC=()=>{const{t:e}=ke(),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},a={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5,ease:[.25,.1,.25,1]}}},s={hidden:{y:30,opacity:0},visible:f=>({y:0,opacity:1,transition:{duration:.5,delay:f*.1,ease:[.25,.1,.25,1]}})},l=[{number:"50м²",label:"Самая большая сауна"},{number:"70+",label:"Тренажеров"},{number:"5",label:"Кухонь мира"},{number:"25м",label:"Олимпийский бассейн"}],u=[{icon:d.jsx(er,{}),title:"СПА-комплекс",description:"Самая большая сауна в Таиланде, хаммам и массажные кабинеты"},{icon:d.jsx(fx,{}),title:"Тренажерный зал",description:"Более 70 современных тренажеров и профессиональные тренеры"},{icon:d.jsx($l,{}),title:"Боевые искусства",description:"MMA, бокс, муай-тай с профессиональными тренерами"},{icon:d.jsx(fx,{}),title:"Олимпийский бассейн",description:"25-метровый бассейн с подогревом и аква-фитнесом"},{icon:d.jsx(er,{}),title:"Ресторан",description:"5 кухонь мира, здоровое питание и панорамная терраса"},{icon:d.jsx(er,{}),title:"Салон красоты",description:"Косметология, уходы, парикмахерские услуги"}];return d.jsx(QE,{children:d.jsx(JE,{children:d.jsx(C.div,{variants:i,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:d.jsxs(WE,{children:[d.jsxs(eC,{children:[d.jsxs(tC,{variants:a,children:[d.jsx(AT,{}),"О комплексе"]}),d.jsxs(iC,{variants:a,children:["Многофункциональный",d.jsx("br",{}),"комплекс KAIF"]}),d.jsx(gx,{variants:a,children:"KAIF PHUKET – это премиальный комплекс, где вы восстанавливаете силы, заряжаетесь энергией и наслаждаетесь каждым моментом. Всё здесь создано так, чтобы вам хотелось вернуться: тренировки, которые вдохновляют, отдых, который наполняет, и атмосфера, которая дарит настоящий кайф."}),d.jsx(gx,{variants:a,children:"Мы создали уникальное пространство на Пхукете, где премиальный сервис встречается с тайским гостеприимством. KAIF — это не просто спа-комплекс, это философия здорового образа жизни и гармонии."}),d.jsx(nC,{variants:a,children:l.map((f,p)=>d.jsxs(aC,{variants:s,whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(rC,{children:f.number}),d.jsx(sC,{children:f.label})]},p))})]}),d.jsx(oC,{children:u.map((f,p)=>d.jsx(C.div,{variants:s,custom:p,whileInView:"visible",viewport:{once:!0,amount:.3},children:d.jsxs(uv,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(lC,{children:f.icon}),d.jsx(cC,{children:f.title}),d.jsx(uC,{children:f.description})]})},p))})]})})})})},fC=b.section`
  position: relative;
  padding: 8rem 0;
  background: white;
  overflow: hidden;
`,hC=b.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,pC=b(C.div)`
  text-align: center;
  margin-bottom: 4rem;
`,mC=b(C.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
  }
`,gC=b(C.h2)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,yC=b(C.p)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`,xC=b(C.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`,xl=b.div`
  background: #fafafa;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  min-width: 80px;
`,bl=b.div`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.25rem;
`,vl=b.div`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,bC=b(C.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,dv=b(C.div)`
  background: #fafafa;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    border-color: #e2e8f0;
  }
`,vC=b.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1rem;
  background: #0f172a;
  color: white;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 16px;
`,wC=b.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.5rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  transition: all 0.3s ease;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${dv}:hover & {
    transform: scale(1.05);
    background: #0f172a;
    color: white;
    border-color: #0f172a;
  }
`,SC=b.h3`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.2;
`,jC=b.p`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`,AC=b.div`
  margin-bottom: 2rem;
`,TC=b.span`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  color: #94a3b8;
  text-decoration: line-through;
  margin-right: 0.75rem;
`,EC=b.span`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
`,CC=b.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`,RC=b.li`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background: #0f172a;
    border-radius: 50%;
  }
  
  svg {
    position: absolute;
    left: 0.125rem;
    top: 0.625rem;
    width: 0.5rem;
    height: 0.5rem;
    color: white;
  }
`,DC=b(C.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  width: 100%;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    background: #1e293b;
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.2);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`,MC=()=>{const{t:e}=ke(),[i,a]=w.useState({days:7,hours:23,minutes:45,seconds:30});w.useEffect(()=>{const p=setInterval(()=>{a(g=>g.seconds>0?{...g,seconds:g.seconds-1}:g.minutes>0?{...g,minutes:g.minutes-1,seconds:59}:g.hours>0?{...g,hours:g.hours-1,minutes:59,seconds:59}:g.days>0?{...g,days:g.days-1,hours:23,minutes:59,seconds:59}:g)},1e3);return()=>clearInterval(p)},[]);const s={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},u={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:"easeOut"}}},f=[{badge:"Популярное",icon:d.jsx(yi,{}),title:"Безлимит фитнес",description:"Неограниченный доступ к тренажерному залу, групповым тренировкам и бассейну. Персональная программа в подарок!",oldPrice:"6,000",newPrice:"3,990",currency:"THB/мес",features:["Все зоны фитнес-центра","Групповые тренировки","Персональная программа","Доступ к бассейну","Раздевалки premium"],link:"/promotions/fitness-unlimited"},{badge:"Новинка",icon:d.jsx(yi,{}),title:"SPA-релакс пакет",description:"Комплекс расслабляющих процедур: массаж, сауна, хаммам. Полное восстановление за один день.",oldPrice:"3,400",newPrice:"2,390",currency:"THB",features:["Тайский массаж 90 мин","Финская сауна","Турецкий хаммам","Ароматерапия","Травяной чай"],link:"/promotions/spa-relax"},{badge:"Ограничено",icon:d.jsx(yi,{}),title:"Гастро-тур",description:"Дегустационное меню из 5 кухонь мира. Авторские блюда от шеф-повара с винным сопровождением.",oldPrice:"2,600",newPrice:"1,800",currency:"THB",features:["Меню из 5 кухонь","Винное сопровождение","Авторские десерты","Панорамная терраса","Живая музыка"],link:"/promotions/gastro-tour"}];return d.jsx(fC,{children:d.jsx(hC,{children:d.jsxs(C.div,{variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsxs(pC,{children:[d.jsxs(mC,{variants:l,children:[d.jsx(IT,{}),"Специальные предложения"]}),d.jsx(gC,{variants:l,children:"Выгодные предложения"}),d.jsx(yC,{variants:l,children:"Эксклюзивные скидки и выгодные пакеты услуг для наших гостей"})]}),d.jsxs(xC,{variants:l,children:[d.jsxs(xl,{children:[d.jsx(bl,{children:i.days}),d.jsx(vl,{children:"Дней"})]}),d.jsxs(xl,{children:[d.jsx(bl,{children:i.hours}),d.jsx(vl,{children:"Часов"})]}),d.jsxs(xl,{children:[d.jsx(bl,{children:i.minutes}),d.jsx(vl,{children:"Минут"})]}),d.jsxs(xl,{children:[d.jsx(bl,{children:i.seconds}),d.jsx(vl,{children:"Секунд"})]})]}),d.jsx(bC,{children:f.map((p,g)=>d.jsx(C.div,{variants:u,custom:g,whileInView:"visible",viewport:{once:!0,amount:.3},children:d.jsxs(dv,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(vC,{children:p.badge}),d.jsx(wC,{children:p.icon}),d.jsx(SC,{children:p.title}),d.jsx(jC,{children:p.description}),d.jsxs(AC,{children:[d.jsxs(TC,{children:[p.oldPrice," ",p.currency]}),d.jsxs(EC,{children:[p.newPrice," ",p.currency]})]}),d.jsx(CC,{children:p.features.map((m,y)=>d.jsxs(RC,{children:[d.jsx(RT,{}),m]},y))}),d.jsx(Lt,{to:p.link,children:d.jsxs(DC,{whileHover:{scale:1.02},whileTap:{scale:.98},children:["Забронировать",d.jsx(or,{})]})})]})},g))})]})})})},OC=b.section`
  position: relative;
  padding: 8rem 0;
  background: #fafafa;
  overflow: hidden;
`,kC=b.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,zC=b(C.div)`
  text-align: center;
  margin-bottom: 4rem;
`,BC=b(C.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
  }
`,$C=b(C.h2)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,NC=b(C.p)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`,LC=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,VC=b(C.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,fv=b(C.div)`
  background: white;
  border: 1px solid ${({$isOpen:e})=>e?"#e2e8f0":"#f1f5f9"};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${({$isOpen:e})=>e&&`
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  `}
  
  &:hover {
    border-color: #e2e8f0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
`,_C=b.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fafc;
  }
`,HC=b.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,UC=b.div`
  width: 2.5rem;
  height: 2.5rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  ${fv}:hover & {
    background: #0f172a;
    color: white;
    border-color: #0f172a;
  }
`,PC=b.h3`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;
`,FC=b(C.div)`
  width: 2rem;
  height: 2rem;
  background: ${({$isOpen:e})=>e?"#0f172a":"#f1f5f9"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$isOpen:e})=>e?"white":"#475569"};
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`,qC=b(C.div)`
  overflow: hidden;
`,YC=b.div`
  padding: 0 2rem 2rem 5.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 2rem 1.5rem;
  }
`,GC=b.p`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
`,KC=b(C.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Nl=b(C.div)`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-color: #e2e8f0;
  }
`,cf=b.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1.5rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  transition: all 0.3s ease;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${Nl}:hover & {
    background: #0f172a;
    color: white;
    border-color: #0f172a;
    transform: scale(1.05);
  }
`,uf=b.h3`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.3;
`,df=b.p`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,ff=b.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Ga=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
    flex-shrink: 0;
  }
`,ZC=()=>{const{t:e}=ke(),[i,a]=w.useState(null),s=m=>{a(i===m?null:m)},l={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},u={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},f={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},p={hidden:{height:0,opacity:0,transition:{height:{duration:.3},opacity:{duration:.2}}},visible:{height:"auto",opacity:1,transition:{height:{duration:.4,ease:[.25,.46,.45,.94]},opacity:{duration:.3,delay:.1}}}},g=[{category:"general",icon:d.jsx(ml,{}),question:"Что включает в себя комплекс KAIF?",answer:"KAIF - это многофункциональный комплекс, включающий фитнес-центр с 70+ тренажерами, боевые искусства, 25-метровый бассейн, СПА-центр, самую большую сауну в Таиланде (50м²), турецкий хаммам, салон красоты и ресторан с 5 кухнями мира."},{category:"general",icon:d.jsx(wn,{}),question:"Режим работы комплекса?",answer:"Мы работаем ежедневно с 6:00 до 23:00. Некоторые зоны (СПА, ресторан) могут иметь отдельный график. Рекомендуем уточнять время работы конкретных услуг при бронировании."},{category:"booking",icon:d.jsx($l,{}),question:"Как забронировать услуги?",answer:"Бронирование доступно через наш сайт, мобильное приложение, по телефону +66 76 123 456 или WhatsApp. Рекомендуем бронировать заранее, особенно СПА-процедуры и столики в ресторане."},{category:"booking",icon:d.jsx(nf,{}),question:"Можно ли приобрести абонементы?",answer:"Да! У нас есть различные абонементы: дневные, недельные, месячные и годовые. Также доступны комбинированные пакеты, включающие несколько услуг со скидкой до 30%."},{category:"services",icon:d.jsx($l,{}),question:"Нужен ли опыт для занятий?",answer:'Нет! У нас есть программы для всех уровней подготовки. Новичкам предоставляем вводный инструктаж, персональные консультации и программы "первые шаги" для безопасного начала тренировок.'},{category:"services",icon:d.jsx(Zn,{}),question:"Какие СПА-процедуры доступны?",answer:"Мы предлагаем традиционный тайский массаж, ароматерапию, массаж горячими камнями, балийские ритуалы, европейские косметологические процедуры и авторские wellness-программы."},{category:"payment",icon:d.jsx(nf,{}),question:"Какие способы оплаты принимаются?",answer:"Принимаем наличные (THB, USD, EUR), банковские карты всех систем, мобильные платежи, криптовалюты и банковские переводы. Доступна рассрочка для крупных пакетов услуг."},{category:"payment",icon:d.jsx(ml,{}),question:"Есть ли программа лояльности?",answer:"Да! Программа KAIF Rewards дает накопительные скидки, бонусы за приведение друзей, эксклюзивные мероприятия и приоритетное бронирование. Накопленные баллы можно тратить на любые услуги."}];return d.jsx(OC,{children:d.jsx(kC,{children:d.jsxs(C.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsxs(zC,{children:[d.jsxs(BC,{variants:u,children:[d.jsx(hx,{}),"Ответы на вопросы"]}),d.jsx($C,{variants:u,children:"Часто задаваемые вопросы"}),d.jsx(NC,{variants:u,children:"Всё, что нужно знать о нашем многофункциональном комплексе"})]}),d.jsxs(LC,{children:[d.jsx(VC,{children:g.map((m,y)=>d.jsx(C.div,{variants:f,custom:y,whileInView:"visible",viewport:{once:!0,amount:.3},children:d.jsxs(fv,{$isOpen:i===y,children:[d.jsxs(_C,{onClick:()=>s(y),children:[d.jsxs(HC,{children:[d.jsx(UC,{children:m.icon}),d.jsx(PC,{children:m.question})]}),d.jsx(FC,{$isOpen:i===y,animate:{rotate:i===y?180:0},transition:{duration:.3,ease:"easeInOut"},children:i===y?d.jsx(_T,{}):d.jsx(PT,{})})]}),d.jsx(ia,{children:i===y&&d.jsx(qC,{variants:p,initial:"hidden",animate:"visible",exit:"hidden",children:d.jsx(YC,{children:d.jsx(GC,{children:m.answer})})})})]})},y))}),d.jsxs(KC,{children:[d.jsx(C.div,{variants:u,children:d.jsxs(Nl,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(cf,{children:d.jsx(Qt,{})}),d.jsx(uf,{children:"Служба поддержки"}),d.jsx(df,{children:"Наша команда готова помочь вам 24/7. Свяжитесь с нами любым удобным способом."}),d.jsxs(ff,{children:[d.jsxs(Ga,{children:[d.jsx(Zn,{}),"Пхукет, Таиланд"]}),d.jsxs(Ga,{children:[d.jsx(wn,{}),"24/7 поддержка"]})]})]})}),d.jsx(C.div,{variants:u,children:d.jsxs(Nl,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(cf,{children:d.jsx(hx,{})}),d.jsx(uf,{children:"WhatsApp чат"}),d.jsx(df,{children:"Быстрые ответы в мессенджере. Бронирование, вопросы, поддержка - всё в одном чате."}),d.jsxs(ff,{children:[d.jsxs(Ga,{children:[d.jsx($l,{}),"Мгновенные ответы"]}),d.jsxs(Ga,{children:[d.jsx(Qt,{}),"Персональный менеджер"]})]})]})}),d.jsx(C.div,{variants:u,children:d.jsxs(Nl,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(cf,{children:d.jsx(ml,{})}),d.jsx(uf,{children:"Персональные консультации"}),d.jsx(df,{children:"Индивидуальный подход к каждому гостю. Поможем составить программу под ваши цели."}),d.jsxs(ff,{children:[d.jsxs(Ga,{children:[d.jsx(ml,{}),"Бесплатная консультация"]}),d.jsxs(Ga,{children:[d.jsx(nf,{}),"Гибкая оплата"]})]})]})})]})]})]})})})},IC=b.section`
  position: relative;
  padding: 8rem 0 4rem;
  background: white;
  overflow: hidden;
`,XC=b.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,QC=b(C.div)`
  text-align: center;
  margin-bottom: 4rem;
`,JC=b(C.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
  }
`,WC=b(C.h2)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,eR=b(C.p)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`,tR=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,iR=b(C.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ll=b(C.div)`
  background: #fafafa;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-color: #e2e8f0;
  }
`,hf=b.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.5rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  transition: all 0.3s ease;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${Ll}:hover & {
    background: #0f172a;
    color: white;
    border-color: #0f172a;
    transform: scale(1.05);
  }
`,pf=b.h3`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.3;
`,mf=b.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ni=b.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
    flex-shrink: 0;
  }
`,nR=b(C.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  margin-top: 1rem;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    background: #1e293b;
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.2);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(2px);
  }
`,aR=b(C.div)`
  position: relative;
`,rR=b.div`
  background: #fafafa;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;b(C.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    background: #1e293b;
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.2);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.05);
  }
`;const sR=b(C.div)`
  margin-top: 4rem;
  text-align: center;
`,oR=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Vl=b(C.div)`
  background: #fafafa;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    border-color: #e2e8f0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  }
`,gf=b.div`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 auto 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  transition: all 0.3s ease;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  ${Vl}:hover & {
    background: #0f172a;
    color: white;
    border-color: #0f172a;
    transform: scale(1.05);
  }
`,yf=b.h4`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;
`,xf=b.p`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
`,lR=()=>{const{t:e}=ke(),i={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1}}},a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},s={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.5,ease:"easeOut"}}},l=()=>{window.open("tel:+66761234567")};return d.jsx(IC,{children:d.jsx(XC,{children:d.jsxs(C.div,{variants:i,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsxs(QC,{children:[d.jsxs(JC,{variants:a,children:[d.jsx(Zn,{}),"Найдите нас"]}),d.jsx(WC,{variants:a,children:"Как добраться"}),d.jsx(eR,{variants:a,children:"Мы находимся в самом сердце Пхукета, в окружении тропических джунглей"})]}),d.jsxs(tR,{children:[d.jsxs(iR,{children:[d.jsx(C.div,{variants:s,children:d.jsxs(Ll,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(hf,{children:d.jsx(Zn,{})}),d.jsx(pf,{children:"Наш адрес"}),d.jsxs(mf,{children:[d.jsxs(Ni,{children:[d.jsx(Zn,{}),"123 Jungle Road, Patong, Phuket 83150"]}),d.jsxs(Ni,{children:[d.jsx(bT,{}),"Район Патонг, в 10 минутах от пляжа"]}),d.jsxs(Ni,{children:[d.jsx(px,{}),"Бесплатная парковка для гостей"]})]})]})}),d.jsx(C.div,{variants:s,children:d.jsxs(Ll,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(hf,{children:d.jsx(wn,{})}),d.jsx(pf,{children:"Часы работы"}),d.jsxs(mf,{children:[d.jsxs(Ni,{children:[d.jsx(wn,{}),"Ежедневно: 6:00 - 23:00"]}),d.jsxs(Ni,{children:[d.jsx(wT,{}),"СПА: 9:00 - 22:00"]}),d.jsxs(Ni,{children:[d.jsx(NT,{}),"Ресторан: 11:00 - 23:30"]})]})]})}),d.jsx(C.div,{variants:s,children:d.jsxs(Ll,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(hf,{children:d.jsx(Qt,{})}),d.jsx(pf,{children:"Контакты"}),d.jsxs(mf,{children:[d.jsxs(Ni,{children:[d.jsx(Qt,{}),"+66 76 123 4567"]}),d.jsxs(Ni,{children:[d.jsx(af,{}),"WhatsApp: +66 98 765 4321"]}),d.jsxs(Ni,{children:[d.jsx(af,{}),"info@kaif-phuket.com"]}),d.jsxs(nR,{onClick:l,whileHover:{scale:1.02},whileTap:{scale:.98},children:[d.jsx(Qt,{}),"Позвонить сейчас"]})]})]})})]}),d.jsx(aR,{variants:a,children:d.jsx(rR,{children:d.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8203398120136!2d98.3536249!3d7.913827999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031603c054903%3A0x818d8108ef4f8a55!2sKAIF%20%E2%80%93%20Jungle%20club%20%26%20SPA!5e0!3m2!1sru!2sth!4v1748031844024!5m2!1sru!2sth",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Расположение KAIF - Jungle Club & Spa"})})})]}),d.jsxs(sR,{variants:a,children:[d.jsx(C.h3,{style:{fontFamily:"Poppins, sans-serif",fontSize:"1.5rem",fontWeight:600,color:"#0f172a",marginBottom:"1rem"},children:"Как добраться"}),d.jsxs(oR,{children:[d.jsx(C.div,{variants:s,children:d.jsxs(Vl,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(gf,{children:d.jsx(af,{})}),d.jsx(yf,{children:"Из аэропорта"}),d.jsx(xf,{children:"45 минут на такси или трансфере. Мы организуем встречу в аэропорту."})]})}),d.jsx(C.div,{variants:s,children:d.jsxs(Vl,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(gf,{children:d.jsx(Zn,{})}),d.jsx(yf,{children:"От пляжа Патонг"}),d.jsx(xf,{children:"10 минут пешком или 3 минуты на тук-туке через джунгли."})]})}),d.jsx(C.div,{variants:s,children:d.jsxs(Vl,{whileHover:{scale:1.02,transition:{duration:.2}},children:[d.jsx(gf,{children:d.jsx(px,{})}),d.jsx(yf,{children:"На арендованном авто"}),d.jsx(xf,{children:"Бесплатная охраняемая парковка на 50 мест прямо у входа."})]})})]})]})]})})})},cR=()=>d.jsxs(C.main,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:[d.jsx($E,{}),d.jsx(XE,{}),d.jsx(dC,{}),d.jsx(MC,{}),d.jsx(ZC,{}),d.jsx(lR,{})]});function uR({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"}))}const dR=w.forwardRef(uR);function fR({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))}const hR=w.forwardRef(fR);function pR({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const wl=w.forwardRef(pR);function mR({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const gR=w.forwardRef(mR);function yR({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const bf=w.forwardRef(yR);function xR({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"}))}const bR=w.forwardRef(xR);function vR({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"}))}const ii=w.forwardRef(vR);function wR({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"}))}const SR=w.forwardRef(wR);function jR({title:e,titleId:i,...a},s){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),e?w.createElement("title",{id:i},e):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"}))}const _l=w.forwardRef(jR),AR=b(C.div)`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`;b.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;b(C.button)`
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: ${e=>e.active?"#D29B84":"#E0E8E1"};
  color: ${e=>e.active?"white":"#333333"};
  font-weight: ${e=>e.active?"600":"500"};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    background-color: ${e=>e.active?"#D29B84":"#d0d8d1"};
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
  }
`;b(C.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;const TR=b(C.div)`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;b.div`
  height: 200px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${TR}:hover &::after {
    opacity: 1;
  }
`;b.div`
  padding: 1.5rem;
`;b.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  color: #333333;
`;b.p`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;b.div`
  font-weight: 600;
  color: #D29B84;
  font-size: 1.1rem;
`;b.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;b.span`
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  background-color: #f0f0f0;
  border-radius: 20px;
  color: #666666;
`;b(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
`;b(C.div)`
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;b.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  
  @media (min-width: 768px) {
    height: 100%;
  }
`;b.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;b(C.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 2.5rem;
  max-width: 530px;
  font-weight: 300;
`;b.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  color: #333333;
`;b.p`
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;b.div`
  font-weight: 600;
  color: #D29B84;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;b.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333333;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    padding: 0.25rem 0;
    font-size: 0.9rem;
    color: #666666;
    display: flex;
    align-items: center;
    
    &:before {
      content: '•';
      color: #D29B84;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;b(C.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
`;b.section`
  height: 100vh;
  min-height: 700px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background};
  padding: 0;
  margin: 0;
`;b.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  position: relative;
  z-index: 5;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;b(C.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;b(C.div)`
  position: relative;
  z-index: 10;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  color: white;
`;b(C.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(210, 155, 132, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.accent||"#B08D57"};
    transform: translateY(-3px);
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;const ER=()=>{const{t:e}=ke(),[i,a]=w.useState(0),[s,l]=w.useState("all"),u=w.useRef(null),f=w.useRef(null),p=[{id:1,name:e("restaurant.menu.items.salad.name","Свежий салат с авокадо"),description:e("restaurant.menu.items.salad.description","Свежие овощи, авокадо и орехи с оливковым маслом"),price:"฿320",image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",tags:["vegetarian","healthy"],popular:!0,category:"lunch"},{id:2,name:e("restaurant.menu.items.pasta.name","Паста с морепродуктами"),description:e("restaurant.menu.items.pasta.description","Итальянская паста с креветками и мидиями в сливочном соусе"),price:"฿450",image:"https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",tags:["seafood","italian"],popular:!1,category:"dinner"},{id:3,name:e("restaurant.menu.items.pancakes.name","Блинчики с ягодами"),description:e("restaurant.menu.items.pancakes.description","Пушистые блинчики со свежими ягодами и кленовым сиропом"),price:"฿280",image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",tags:["sweet","breakfast"],popular:!0,category:"breakfast"},{id:4,name:e("restaurant.menu.items.steak.name","Стейк с овощами гриль"),description:e("restaurant.menu.items.steak.description","Сочный стейк средней прожарки с овощами гриль и специальным соусом"),price:"฿750",image:"https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",tags:["meat","grill"],popular:!1,category:"dinner"},{id:5,name:e("restaurant.menu.items.smoothie.name","Фруктовый смузи"),description:e("restaurant.menu.items.smoothie.description","Свежий смузи из сезонных фруктов и ягод с йогуртом"),price:"฿180",image:"https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",tags:["drink","healthy","fruit"],popular:!0,category:"drinks"},{id:6,name:e("restaurant.menu.items.cheesecake.name","Чизкейк с клубникой"),description:e("restaurant.menu.items.cheesecake.description","Нежный чизкейк со свежей клубникой и клубничным соусом"),price:"฿220",image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",tags:["dessert","sweet"],popular:!1,category:"desserts"}],g=[{id:1,image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",title:e("restaurant.slider.slide1.title","Изысканная кухня"),description:e("restaurant.slider.slide1.description","Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане")},{id:2,image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",title:e("restaurant.slider.slide2.title","Атмосфера комфорта"),description:e("restaurant.slider.slide2.description","Наслаждайтесь едой в уютной атмосфере с видом на тропический сад")},{id:3,image:"https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",title:e("restaurant.slider.slide3.title","Свежие ингредиенты"),description:e("restaurant.slider.slide3.description","Мы используем только свежие и качественные ингредиенты для приготовления наших блюд")}];return w.useEffect(()=>(u.current=setInterval(()=>{a(m=>(m+1)%g.length)},5e3),()=>{u.current&&clearInterval(u.current)}),[g.length]),d.jsxs(AR,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[d.jsxs("section",{className:"py-24 px-4 md:px-8 relative overflow-hidden",style:{position:"relative"},children:[d.jsx("div",{className:"absolute inset-0 z-0",style:{backgroundImage:"url('https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",backgroundSize:"cover",backgroundPosition:"center",filter:"blur(8px) brightness(0.7)",transform:"scale(1.1)"}}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"}),d.jsx(C.div,{className:"absolute top-20 right-20 w-64 h-64 rounded-full bg-primary opacity-5",animate:{scale:[1,1.2,1],rotate:[0,90,0]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}}),d.jsx(C.div,{className:"absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary opacity-5",animate:{scale:[1,1.3,1],rotate:[0,-90,0]},transition:{duration:15,repeat:1/0,ease:"easeInOut",delay:2}}),d.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh] relative z-10",children:[d.jsxs(C.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.7},className:"bg-black bg-opacity-40 p-8 rounded-xl backdrop-blur-sm",children:[d.jsx("span",{className:"inline-block py-1 px-3 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-4 backdrop-blur-sm",children:e("restaurant.hero.label","Our Restaurant")}),d.jsxs("h1",{className:"text-4xl md:text-5xl font-bold font-playfair mb-6 leading-tight relative text-white",children:[e("restaurant.hero.title","Exquisite Cuisine")," ",d.jsx("span",{className:"text-primary",children:e("restaurant.hero.highlight","with a Modern Twist")}),d.jsx("div",{className:"w-24 h-1.5 bg-primary mt-6 rounded-full"})]}),d.jsx("p",{className:"text-lg text-white mb-8 max-w-lg",children:e("restaurant.hero.subtitle","Our chefs create unique dishes by combining traditional recipes with new culinary techniques.")}),d.jsxs(C.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 text-lg border-2 border-white",onClick:()=>{var m;(m=f.current)==null||m.scrollIntoView({behavior:"smooth"})},children:[d.jsx("span",{className:"text-xl",children:e("restaurant.hero.button","Наше меню")}),d.jsx(or,{className:"w-6 h-6"})]})]}),d.jsx(C.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.7},className:"relative",children:d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"w-[400px] h-[400px] mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl",children:d.jsx("img",{src:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Elegant dish",className:"w-full h-full object-cover"})}),d.jsxs(C.div,{className:"absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(yi,{className:"w-5 h-5 text-primary"}),d.jsx("p",{className:"font-medium",children:"4.9 (1.2k+)"})]}),d.jsx("p",{className:"text-sm text-gray-500",children:e("restaurant.hero.reviews","Excellent Reviews")})]}),d.jsxs(C.div,{className:"absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(wn,{className:"w-5 h-5 text-primary"}),d.jsxs("p",{className:"font-medium",children:["30-45 ",e("restaurant.hero.min","min")]})]}),d.jsx("p",{className:"text-sm text-gray-500",children:e("restaurant.hero.delivery","Delivery Time")})]}),d.jsx(C.div,{className:"absolute bottom-10 right-10 bg-primary text-white py-1.5 px-4 rounded-full text-sm font-medium shadow-lg",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.7},children:e("restaurant.hero.featured","Featured")})]})})]})]}),d.jsxs("section",{ref:f,className:"py-20 px-4 md:px-8 max-w-7xl mx-auto",id:"menu-section",children:[d.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},className:"text-center mb-12",children:[d.jsx("span",{className:"inline-block py-1 px-3 rounded-full bg-opacity-10 bg-primary text-primary text-sm font-medium mb-4",children:e("restaurant.menu.tag","Изысканные блюда")}),d.jsx("h2",{className:"text-3xl md:text-4xl font-bold font-playfair mb-6",children:e("restaurant.menu.title","Наше меню")}),d.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:e("restaurant.menu.description","Откройте для себя разнообразие вкусов в нашем меню, созданном талантливыми шеф-поварами")})]}),d.jsxs("div",{className:"mb-16",children:[d.jsx(C.div,{className:"flex justify-center flex-wrap gap-3 mb-12",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:["all","breakfast","lunch","dinner","desserts","drinks"].map(m=>d.jsx(C.button,{style:{padding:"0.625rem 1.25rem",borderRadius:"9999px",fontSize:"0.875rem",fontWeight:"500",transition:"all 0.3s ease",backgroundColor:s===m?"#D29B84":"#FFFFFF",color:s===m?"#FFFFFF":"#4B5563",border:`2px solid ${s===m?"#D29B84":"#D1D5DB"}`,boxShadow:s===m?"0 4px 6px rgba(0, 0, 0, 0.1)":"0 1px 2px rgba(0, 0, 0, 0.05)"},whileHover:{y:-3},whileTap:{y:0},onClick:()=>l(m),children:e(`restaurant.menu.categories.${m}`,m.charAt(0).toUpperCase()+m.slice(1))},m))}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:p.filter(m=>s==="all"||m.category===s).map((m,y)=>d.jsxs(C.div,{className:"bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1*y},whileHover:{y:-10},children:[d.jsxs("div",{className:"h-64 overflow-hidden relative",children:[d.jsx("img",{src:m.image,alt:m.name,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"}),m.popular&&d.jsx("div",{className:"absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full",children:e("restaurant.menu.popular","Popular")})]}),d.jsxs("div",{className:"p-6",children:[d.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:m.tags.map(v=>{const S={vegetarian:"bg-green-50 text-green-600",healthy:"bg-primary bg-opacity-10 text-primary",seafood:"bg-blue-50 text-blue-600",italian:"bg-yellow-50 text-yellow-600",meat:"bg-red-50 text-red-600",grill:"bg-orange-50 text-orange-600",sweet:"bg-pink-50 text-pink-600",breakfast:"bg-indigo-50 text-indigo-600",dessert:"bg-purple-50 text-purple-600",drink:"bg-cyan-50 text-cyan-600",fruit:"bg-lime-50 text-lime-600"};return d.jsx("span",{className:`inline-block px-2 py-1 text-xs font-medium rounded-full ${S[v]||"bg-gray-50 text-gray-600"}`,children:e(`restaurant.menu.tags.${v}`,v.charAt(0).toUpperCase()+v.slice(1))},v)})}),d.jsx("h3",{className:"text-xl font-bold mb-2 font-playfair",children:m.name}),d.jsx("p",{className:"text-gray-600 mb-4",children:m.description}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("span",{className:"text-primary text-xl font-bold",children:m.price}),d.jsxs(C.button,{className:"flex items-center justify-center gap-2 px-3 py-2 bg-primary rounded-full text-white transition-all duration-300",whileHover:{scale:1.1},whileTap:{scale:.9},title:e("restaurant.menu.add_to_order","Добавить в заказ"),children:[d.jsx(YT,{className:"w-4 h-4"}),d.jsx("span",{className:"text-sm font-medium",children:e("restaurant.menu.add","Добавить")})]})]})]})]},m.id))}),d.jsxs("div",{className:"text-center mt-12",children:[d.jsxs(C.button,{className:"inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg border-2 border-white hover:bg-opacity-90 transition-all duration-300 relative z-10",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{var m;(m=f.current)==null||m.scrollIntoView({behavior:"smooth"})},children:[d.jsx("span",{className:"text-base font-bold",children:e("restaurant.menu.view_all","Открыть полное меню")}),d.jsx(or,{className:"w-5 h-5"})]}),d.jsx("p",{className:"mt-2 text-gray-600 font-medium",children:e("restaurant.menu.navigation_hint","Нажмите, чтобы перейти к полному меню ресторана")})]})]})]}),d.jsxs("section",{className:"py-24 bg-gray-50 relative overflow-hidden",children:[d.jsx(C.div,{className:"absolute top-20 right-20 w-64 h-64 rounded-full bg-primary opacity-5",animate:{scale:[1,1.2,1],rotate:[0,90,0]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}}),d.jsx(C.div,{className:"absolute bottom-20 left-20 w-40 h-40 rounded-full bg-primary opacity-5",animate:{scale:[1,1.3,1],rotate:[0,-90,0]},transition:{duration:15,repeat:1/0,ease:"easeInOut",delay:2}}),d.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-8 relative z-10",children:d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[d.jsxs(C.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7},children:[d.jsx("span",{className:"inline-block py-1 px-3 rounded-full bg-opacity-10 bg-primary text-primary text-sm font-medium mb-4",children:e("restaurant.booking.label","Бронирование")}),d.jsx("h2",{className:"text-3xl md:text-4xl font-bold font-playfair mb-6",children:e("restaurant.booking.title","Забронируйте стол в нашем ресторане")}),d.jsx("p",{className:"text-lg text-gray-600 mb-8",children:e("restaurant.booking.description","Заранее зарезервируйте столик для особого события или просто для гарантированного места в нашем ресторане.")}),d.jsxs("div",{className:"flex flex-col md:flex-row gap-6 mb-8",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center",children:d.jsx(wn,{className:"w-5 h-5 text-primary"})}),d.jsxs("div",{children:[d.jsx("p",{className:"font-medium",children:e("restaurant.booking.open_hours","Часы работы")}),d.jsx("p",{className:"text-gray-500 text-sm",children:"10:00 - 22:00"})]})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center",children:d.jsx(Qt,{className:"w-5 h-5 text-primary"})}),d.jsxs("div",{children:[d.jsx("p",{className:"font-medium",children:e("restaurant.booking.reservation","Резервация")}),d.jsx("p",{className:"text-gray-500 text-sm",children:e("common.phone_number")})]})]})]}),d.jsxs("a",{href:"tel:+66624805877",className:"inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 text-lg",children:[e("restaurant.booking.call_now","Позвонить сейчас"),d.jsx(Qt,{className:"w-5 h-5"})]})]}),d.jsxs(C.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7},className:"relative",children:[d.jsxs("div",{className:"relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl",children:[d.jsx("img",{src:"https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Restaurant interior",className:"w-full h-full object-cover"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"})]}),d.jsx(C.div,{className:"absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},children:d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:"flex",children:[1,2,3,4,5].map(m=>d.jsx(yi,{className:"w-5 h-5 text-yellow-400"},m))}),d.jsx("div",{className:"h-6 w-px bg-gray-300"}),d.jsx("p",{className:"font-medium",children:"4.9 (2.5k+)"})]})})]})]})})]})]})},CR="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85",RR="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",DR=b.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #fcfaf8 0%,
    #f7f4f0 60%,
    #f4f0eb 100%
  );
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(144, 179, 167, 0.07) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.07) 0%, transparent 50%),
      radial-gradient(ellipse at 60% 40%, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
    z-index: 1;
    pointer-events: none;
  }
`;b.div`
  display: none;
`;const MR=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;
`,yx=b(C.div)`
  position: absolute;
  border-radius: 50%;
  background: ${e=>e.$color};
  filter: blur(${e=>e.$blur||"30px"});
  opacity: ${e=>e.$opacity||.25};
  mix-blend-mode: ${e=>e.$blendMode||"normal"};
  will-change: transform;
`;b(C.div)`
  position: absolute;
  background: ${e=>e.$gradient||"linear-gradient(135deg, rgba(144, 179, 167, 0.2) 0%, rgba(144, 179, 167, 0.01) 100%)"};
  border-radius: ${e=>e.$borderRadius||"30% 70% 70% 30% / 30% 30% 70% 70%"};
  filter: blur(${e=>e.$blur||"0px"});
  opacity: ${e=>e.$opacity||.1};
  z-index: ${e=>e.$zIndex||1};
  mix-blend-mode: ${e=>e.$blendMode||"normal"};
  transform-origin: center center;
  box-shadow: ${e=>e.$shadow||"none"};
  border: ${e=>e.$border||"none"};
  overflow: ${e=>e.$overflow||"visible"};
  will-change: transform;
`;const OR=b.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 1280px) {
    padding: 0 3rem;
  }
`,kR=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (min-width: 1024px) {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 2rem;
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: 0.85fr 1.15fr;
    gap: 4rem;
  }
`,zR=b(C.div)`
  position: relative;
  text-align: left;
  max-width: 600px;
  z-index: 10;
  
  @media (max-width: 1023px) {
    text-align: center;
    margin: 0 auto;
    padding-top: 2rem;
  }
`,BR=b(C.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.12) 0%, rgba(144, 179, 167, 0.15) 100%);
  border: 1px solid rgba(212, 165, 116, 0.2);
  border-radius: 30px;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 500;
  color: #8A6C55;
  backdrop-filter: blur(20px);
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(212, 165, 116, 0.08);
  letter-spacing: 0.03em;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #D4A574;
  }
`,$R=b(C.h1)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, 
    #5A6B5D 0%, 
    #7A8A7D 40%, 
    #90B3A7 70%, 
    #D4A574 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  text-shadow: 0px 10px 30px rgba(90, 107, 93, 0.1);
`,NR=b(C.h2)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: #7A8A7D;
  letter-spacing: 0.02em;
`,LR=b(C.p)`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.7;
  color: #6B7B6E;
  margin-bottom: 3rem;
  max-width: 480px;
`,VR=b(C.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
    max-width: 400px;
    margin: 0 auto 3rem;
  }
`,_R=b(C.div)`
  text-align: center;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  border: 1px solid rgba(144, 179, 167, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(144, 179, 167, 0.06);
  
  @media (min-width: 1024px) {
    text-align: center;
  }
`,HR=b.div`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.elegant)||'"Playfair Display", serif'}};
  font-size: 1.875rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 0.5rem;
  line-height: 1;
`,UR=b.div`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: #7A8A7D;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,PR=b(C.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`,FR=b(C.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.1rem 2.75rem;
  background: linear-gradient(135deg, #D4A574 0%, #90B3A7 100%);
  color: white;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  box-shadow: 0 10px 30px rgba(212, 165, 116, 0.3), 0 5px 15px rgba(144, 179, 167, 0.2);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.02em;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%);
    transition: all 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 165, 116, 0.4), 0 8px 20px rgba(144, 179, 167, 0.2);
  }
  
  &:hover::before {
    transform: translateY(100%);
  }
  
  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`,qR=b(C.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.8);
  color: #5A6B5D;
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(144, 179, 167, 0.4);
    transform: translateY(-1px);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`,YR=b(C.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,GR=b(C.div)`
  position: relative;
  height: 400px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(144, 179, 167, 0.15), 0 10px 30px rgba(212, 165, 116, 0.1);
  margin-bottom: 2rem;
  
  @media (min-width: 1024px) {
    height: 480px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
    filter: brightness(1.03) saturate(1.05);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(212, 165, 116, 0.05) 0%, 
      rgba(144, 179, 167, 0.05) 50%,
      rgba(184, 196, 168, 0.05) 100%
    );
    z-index: 1;
  }
`,KR=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,hv=b(C.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(212, 165, 116, 0.1);
  border-radius: 24px;
  padding: 1.75rem 1.5rem;
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  cursor: pointer;
  text-align: center;
  box-shadow: 0 5px 15px rgba(144, 179, 167, 0.05);
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(212, 165, 116, 0.25);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(144, 179, 167, 0.1), 0 10px 20px rgba(212, 165, 116, 0.05);
  }
`,ZR=b.div`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto 1.25rem;
  background: linear-gradient(135deg, #D4A574 0%, #90B3A7 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 10px 25px rgba(212, 165, 116, 0.2);
  transition: all 0.4s ease;
  
  ${hv}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 35px rgba(212, 165, 116, 0.25);
  }
`,IR=b.h3`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 0.875rem;
  font-weight: 600;
  color: #5A6B5D;
  margin: 0 0 0.5rem;
`,XR=b.p`
  font-family: ${({theme:e})=>{var i;return((i=e==null?void 0:e.fonts)==null?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.75rem;
  color: #7A8A7D;
  margin: 0;
  line-height: 1.4;
`,QR=()=>{const{t:e}=ke(),i=w.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{duration:.6,staggerChildren:.08}}}),[]),a=w.useMemo(()=>({hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}}),[]);w.useMemo(()=>({initial:{y:0},animate:{y:[-5,5,-5],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}}),[]);const s=[{icon:"🌿",title:"Тайский массаж",description:"Традиционные техники релаксации"},{icon:"♨️",title:"Сауна & Хаммам",description:"Паровые и тепловые процедуры"},{icon:"💆‍♀️",title:"Косметология",description:"Премиальные уходовые процедуры"},{icon:"🧘‍♀️",title:"Wellness",description:"Комплексные программы здоровья"}],l=[{number:"15+",label:"Специалистов"},{number:"30+",label:"Процедур"},{number:"50м²",label:"Сауна"}];return d.jsxs(DR,{children:[d.jsxs(MR,{children:[d.jsx(yx,{$color:"linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(184, 196, 168, 0.05) 100%)",style:{width:"200px",height:"200px",top:"15%",left:"10%"},animate:{y:[-5,5,-5]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}),d.jsx(yx,{$color:"linear-gradient(135deg, rgba(184, 196, 168, 0.04) 0%, rgba(144, 179, 167, 0.04) 100%)",style:{width:"150px",height:"150px",top:"60%",right:"15%"}})]}),d.jsx(OR,{children:d.jsx(C.div,{variants:i,initial:"hidden",animate:"visible",children:d.jsxs(kR,{children:[d.jsxs(zR,{children:[d.jsxs(BR,{variants:a,children:[d.jsx(er,{}),"SPA & Wellness"]}),d.jsx($R,{variants:a,children:"Оазис спокойствия"}),d.jsx(NR,{variants:a,children:"Центр красоты и восстановления"}),d.jsx(LR,{variants:a,children:"Откройте для себя мир гармонии и релаксации. Наши профессиональные мастера создадут для вас атмосферу полного восстановления и обновления."}),d.jsx(VR,{variants:a,children:l.map((u,f)=>d.jsxs(_R,{variants:a,whileHover:{scale:1.05},children:[d.jsx(HR,{children:u.number}),d.jsx(UR,{children:u.label})]},f))}),d.jsxs(PR,{variants:a,children:[d.jsx(Lt,{to:"/contacts",children:d.jsxs(FR,{whileHover:{scale:1.03},whileTap:{scale:.97},children:["Записаться на процедуру",d.jsx(or,{})]})}),d.jsxs(qR,{whileHover:{scale:1.03},whileTap:{scale:.97},children:[d.jsx(yi,{}),"Наши услуги"]})]})]}),d.jsxs(YR,{variants:a,children:[d.jsxs(C.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},style:{position:"relative"},children:[d.jsx(GR,{whileHover:{scale:1.02},transition:{duration:.5},children:d.jsx("img",{src:CR,alt:"SPA и релаксация",loading:"eager"})}),d.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.3},style:{position:"absolute",bottom:"15%",right:"-10%",width:"40%",height:"180px",borderRadius:"24px",overflow:"hidden",boxShadow:"0 10px 30px rgba(144, 179, 167, 0.15)",zIndex:5,display:"none"},css:`
                    @media (min-width: 1280px) {
                      display: block !important;
                    }
                  `,children:d.jsx("img",{src:RR,alt:"Детали SPA",style:{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(1.05) saturate(1.05)"}})})]}),d.jsx(KR,{children:s.map((u,f)=>d.jsxs(hv,{variants:a,whileHover:{scale:1.03},transition:{delay:f*.05},children:[d.jsx(ZR,{children:u.icon}),d.jsx(IR,{children:u.title}),d.jsx(XR,{children:u.description})]},f))})]})]})})})]})},JR="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",WR="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",eD="https://images.unsplash.com/photo-1554157628-d1e1a0a36b83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",tD="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",iD="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",nD="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",aD="https://images.unsplash.com/photo-1560869713-2cc18e9d0d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",rD="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",sD="https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",oD="https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",lD="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",cD=b.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #fdfcfb 0%,
    #f5f3f0 50%,
    #ede9e4 100%
  );
  position: relative;
  overflow: hidden;
`,uD=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`,xx=b(C.div)`
  position: absolute;
  border-radius: 50%;
  background: ${e=>e.$color};
  filter: blur(60px);
  opacity: 0.3;
`,dD=b.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,fD=b(C.h2)`
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  background: linear-gradient(135deg, #5A6B5D 0%, #7A8A7D 50%, #90B3A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  width: 100%;
`,hD=b(C.p)`
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: #7A8A7D;
  text-align: center;
  max-width: 700px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 400;
`,pD=b.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,bx=b(C.button)`
  padding: 1rem 2.5rem;
  border: none;
  background-color: ${e=>e.active?"linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)":"rgba(255, 255, 255, 0.7)"};
  color: ${e=>e.active?"white":"#5A6B5D"};
  border: 1px solid ${e=>e.active?"transparent":"rgba(144, 179, 167, 0.2)"};
  border-radius: 50px;
  font-weight: ${e=>e.active?"600":"500"};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  backdrop-filter: blur(10px);
  box-shadow: ${e=>e.active?"0 8px 25px rgba(144, 179, 167, 0.3)":"0 4px 15px rgba(144, 179, 167, 0.08)"};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${e=>e.active?"100%":"0%"};
    height: 100%;
    background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${e=>!e.active&&"white"};
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.2);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  &:focus {
    outline: none;
  }
`,mD=b(C.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,mc=b(C.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #90B3A7, #B8C4A8);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(144, 179, 167, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }
  
  &:hover::before {
    opacity: 1;
  }
`,gD=b.div`
  height: 240px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
      rgba(144, 179, 167, 0) 60%, 
      rgba(144, 179, 167, 0.1) 100%
    );
    z-index: 1;
    transition: opacity 0.3s ease;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;
  }
  
  ${mc}:hover & img {
    transform: scale(1.08);
  }
`,yD=b.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,xD=b.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.heading)||'"Poppins", sans-serif'}};
  color: #5A6B5D;
  position: relative;
  transition: color 0.3s ease;
  
  ${mc}:hover & {
    color: #90B3A7;
  }
`,bD=b.p`
  font-size: 1rem;
  color: #7A8A7D;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
  font-weight: 400;
`,vD=b.div`
  font-weight: 700;
  color: #90B3A7;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.elegant)||'"Playfair Display", serif'}};
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: #90B3A7;
    margin-right: 0.75rem;
    border-radius: 1px;
  }
`,wD=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
`,SD=b.span`
  background: rgba(144, 179, 167, 0.1);
  color: #5A6B5D;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(144, 179, 167, 0.15);
  
  ${mc}:hover & {
    background: rgba(144, 179, 167, 0.15);
    color: #90B3A7;
  }
`,jD=b(C.button)`
  background: rgba(144, 179, 167, 0.1);
  color: #5A6B5D;
  border: 1px solid rgba(144, 179, 167, 0.2);
  padding: 0.9rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.primary)||"Inter, sans-serif"}};
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  align-self: flex-start;
  position: relative;
  overflow: hidden;
  z-index: 1;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.2);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`,AD=()=>{const{t:e}=ke(),[i,a]=w.useState(0),u=i===0?[{id:1,title:"Тайский массаж",description:"Традиционный тайский массаж для полного расслабления и восстановления энергии.",price:"1,500 ฿",image:JR,features:["60 мин","Восстановление","Релакс"]},{id:2,title:"Ароматерапевтический массаж",description:"Массаж с использованием эфирных масел для глубокого расслабления и ароматерапии.",price:"1,800 ฿",image:WR,features:["90 мин","Ароматерапия","Антистресс"]},{id:3,title:"Финская сауна",description:"Традиционная финская сауна с высокой температурой для детоксикации организма.",price:"800 ฿",image:eD,features:["30 мин","Детокс","Очищение"]},{id:4,title:"Хаммам",description:"Турецкая баня с паром и пилингом для глубокого очищения кожи.",price:"1,000 ฿",image:tD,features:["45 мин","Пилинг","Увлажнение"]},{id:5,title:"Плавание в бассейне",description:"Доступ к нашему бассейну с контролируемой температурой на целый день.",price:"500 ฿",image:iD,features:["Весь день","Фитнес","Релакс"]},{id:6,title:"Гидромассажная ванна",description:"Расслабляющая гидромассажная ванна с пузырьками для снятия напряжения.",price:"700 ฿",image:nD,features:["30 мин","Релаксация","Гидротерапия"]}]:[{id:1,title:"Стрижка и укладка",description:"Профессиональная стрижка и укладка от наших опытных стилистов.",price:"1,200 ฿",image:aD,features:["60 мин","Стрижка","Укладка"]},{id:2,title:"Окрашивание волос",description:"Профессиональное окрашивание волос с использованием качественных красителей.",price:"2,500 ฿",image:rD,features:["120 мин","Окрашивание","Уход"]},{id:3,title:"Маникюр",description:"Классический маникюр с покрытием гель-лаком на выбор.",price:"800 ฿",image:sD,features:["60 мин","Маникюр","Гель-лак"]},{id:4,title:"Педикюр",description:"Педикюр с массажем ног и покрытием гель-лаком.",price:"1,000 ฿",image:oD,features:["75 мин","Педикюр","Массаж"]},{id:5,title:"Очищающая маска для лица",description:"Глубокое очищение кожи лица с использованием профессиональных средств.",price:"1,300 ฿",image:lD,features:["45 мин","Очищение","Увлажнение"]},{id:6,title:"Антивозрастной уход",description:"Комплексный уход за лицом с антивозрастным эффектом.",price:"2,200 ฿",image:"https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",features:["90 мин","Омоложение","Лифтинг"]}],f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},p={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},g={initial:{y:0},animate:{y:[-15,15,-15],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}};return d.jsxs(cD,{id:"services",children:[d.jsxs(uD,{children:[d.jsx(xx,{$color:"linear-gradient(135deg, rgba(144, 179, 167, 0.06) 0%, rgba(184, 196, 168, 0.06) 100%)",style:{width:"300px",height:"300px",top:"5%",left:"5%"},variants:g,initial:"initial",animate:"animate"}),d.jsx(xx,{$color:"linear-gradient(135deg, rgba(184, 196, 168, 0.05) 0%, rgba(144, 179, 167, 0.05) 100%)",style:{width:"200px",height:"200px",top:"70%",right:"10%"},variants:g,initial:"initial",animate:"animate",transition:{delay:4}})]}),d.jsxs(dD,{children:[d.jsx(fD,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:e("spa.services.title","Наши услуги")}),d.jsx(hD,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Откройте для себя мир релаксации и красоты с нашими профессиональными услугами."}),d.jsxs(pD,{children:[d.jsx(bx,{active:i===0,onClick:()=>a(0),whileHover:{scale:1.02},whileTap:{scale:.98},children:"SPA & Wellness"}),d.jsx(bx,{active:i===1,onClick:()=>a(1),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Beauty & Care"})]}),d.jsx(mD,{variants:f,initial:"hidden",animate:"visible",children:u.map((m,y)=>d.jsxs(mc,{variants:p,whileHover:{scale:1.02},transition:{delay:y*.1},children:[d.jsx(gD,{children:d.jsx("img",{src:m.image,alt:m.title})}),d.jsxs(yD,{children:[d.jsx(xD,{children:m.title}),d.jsx(bD,{children:m.description}),d.jsx(wD,{children:m.features.map((v,S)=>d.jsx(SD,{children:v},S))}),d.jsx(vD,{children:m.price}),d.jsxs(jD,{whileHover:{scale:1.02},whileTap:{scale:.98},children:["Забронировать",d.jsx(dR,{})]})]})]},m.id))},i)]})]})},TD=b.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #f5f3f0 0%,
    #ede9e4 50%,
    #e6e2dc 100%
  );
  position: relative;
  overflow: hidden;
`,ED=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`,vx=b(C.div)`
  position: absolute;
  border-radius: 50%;
  background: ${e=>e.$color};
  filter: blur(50px);
  opacity: 0.4;
`,CD=b.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,RD=b(C.h2)`
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  background: linear-gradient(135deg, #5A6B5D 0%, #7A8A7D 50%, #90B3A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  width: 100%;
`,DD=b(C.p)`
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: #7A8A7D;
  text-align: center;
  max-width: 700px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 400;
`,MD=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ih=b(C.div)`
  background: rgba(255, 255, 255, 0.7);
  padding: 2.5rem 2rem;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(144, 179, 167, 0.15);
    background: rgba(255, 255, 255, 0.9);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -80px;
    left: -80px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(144, 179, 167, 0.1) 0%, rgba(144, 179, 167, 0) 70%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,OD=b.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.15) 0%, rgba(184, 196, 168, 0.15) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #90B3A7;
  font-size: 2rem;
  transition: all 0.3s ease;
  border: 2px solid rgba(144, 179, 167, 0.1);
  
  ${ih}:hover & {
    background: linear-gradient(135deg, rgba(144, 179, 167, 0.25) 0%, rgba(184, 196, 168, 0.25) 100%);
    transform: scale(1.05) rotate(-3deg);
    border-color: rgba(144, 179, 167, 0.2);
  }
  
  svg {
    width: 36px;
    height: 36px;
  }
`,kD=b.h3`
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.heading)||'"Poppins", sans-serif'}};
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #5A6B5D;
  transition: color 0.3s ease;
  
  ${ih}:hover & {
    color: #90B3A7;
  }
`,zD=b.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #7A8A7D;
  margin-bottom: 0;
  font-weight: 400;
`,BD=()=>{const{t:e}=ke(),i=[{id:1,icon:d.jsx(ii,{}),title:"Премиум качество",description:"Используем только лучшие продукты и оборудование для всех процедур"},{id:2,icon:d.jsx(bR,{}),title:"Полное расслабление",description:"Создаем атмосферу комфорта для вашего расслабления и отдыха"},{id:3,icon:d.jsx(_l,{}),title:"Опытные мастера",description:"Специалисты с многолетним опытом и постоянным развитием навыков"},{id:4,icon:d.jsx(SR,{}),title:"Индивидуальный подход",description:"Учитываем ваши пожелания и особенности для максимального результата"}],a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},s={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},l={initial:{y:0},animate:{y:[-12,12,-12],transition:{duration:10,repeat:1/0,ease:"easeInOut"}}};return d.jsxs(TD,{children:[d.jsxs(ED,{children:[d.jsx(vx,{$color:"linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(184, 196, 168, 0.05) 100%)",style:{width:"250px",height:"250px",top:"15%",right:"10%"},variants:l,initial:"initial",animate:"animate"}),d.jsx(vx,{$color:"linear-gradient(135deg, rgba(184, 196, 168, 0.04) 0%, rgba(144, 179, 167, 0.04) 100%)",style:{width:"180px",height:"180px",bottom:"20%",left:"15%"},variants:l,initial:"initial",animate:"animate",transition:{delay:5}})]}),d.jsxs(CD,{children:[d.jsx(RD,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Почему выбирают нас"}),d.jsx(DD,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"Узнайте, что делает наш SPA & Wellness центр особенным и почему клиенты возвращаются к нам снова"}),d.jsx(MD,{as:C.div,variants:a,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},children:i.map(u=>d.jsxs(ih,{variants:s,whileHover:{scale:1.02},children:[d.jsx(OD,{children:u.icon}),d.jsx(kD,{children:u.title}),d.jsx(zD,{children:u.description})]},u.id))})]})]})},$D=b.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #f5f3f0 0%,
    #ede9e4 50%,
    #e6e2dc 100%
  );
  position: relative;
  overflow: hidden;
`,ND=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`,wx=b(C.div)`
  position: absolute;
  border-radius: 50%;
  background: ${e=>e.$color};
  filter: blur(45px);
  opacity: 0.4;
`,LD=b.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,VD=b(C.h2)`
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  background: linear-gradient(135deg, #5A6B5D 0%, #7A8A7D 50%, #90B3A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  width: 100%;
`,_D=b(C.p)`
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: #7A8A7D;
  text-align: center;
  max-width: 700px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 400;
`,HD=b(C.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,UD=b(C.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(144, 179, 167, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }
  
  &::before {
    content: '\\201C';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    font-family: Georgia, serif;
    line-height: 1;
    color: rgba(144, 179, 167, 0.15);
    z-index: 0;
  }
`,PD=b.div`
  position: relative;
  z-index: 1;
`,FD=b.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #6B7B6E;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 400;
`,qD=b.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,YD=b.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid rgba(144, 179, 167, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,GD=b.div`
  display: flex;
  flex-direction: column;
`,KD=b.span`
  font-weight: 600;
  color: #5A6B5D;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`,ZD=b.span`
  font-size: 0.9rem;
  color: #7A8A7D;
  font-weight: 400;
`,ID=b.div`
  display: flex;
  margin-top: 0.5rem;
  color: #90B3A7;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
`,XD=()=>{const{t:e}=ke(),i=[{id:1,text:"Я была в восторге от процедур в KAIF SPA. Массаж был потрясающим, а персонал очень внимательным. Обязательно вернусь снова!",name:"Анна Смирнова",role:"Постоянный клиент",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",rating:5},{id:2,text:"Отличный сервис и приятная атмосфера. Мастера действительно знают свое дело. Рекомендую всем, кто хочет полноценно отдохнуть.",name:"Михаил Петров",role:"Турист из Москвы",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",rating:5},{id:3,text:"Процедуры в салоне красоты просто волшебные! Мои волосы и кожа выглядят потрясающе. Спасибо команде KAIF за профессионализм.",name:"Елена Козлова",role:"Резидент Пхукета",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",rating:5}],a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},s={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},l={initial:{y:0},animate:{y:[-10,10,-10],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}};return d.jsxs($D,{children:[d.jsxs(ND,{children:[d.jsx(wx,{$color:"linear-gradient(135deg, rgba(144, 179, 167, 0.06) 0%, rgba(184, 196, 168, 0.06) 100%)",style:{width:"220px",height:"220px",top:"10%",right:"15%"},variants:l,initial:"initial",animate:"animate"}),d.jsx(wx,{$color:"linear-gradient(135deg, rgba(184, 196, 168, 0.05) 0%, rgba(144, 179, 167, 0.05) 100%)",style:{width:"160px",height:"160px",bottom:"15%",left:"10%"},variants:l,initial:"initial",animate:"animate",transition:{delay:4}})]}),d.jsxs(LD,{children:[d.jsx(VD,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Отзывы наших клиентов"}),d.jsx(_D,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"Узнайте, что говорят о нас клиенты, которые уже испытали наши SPA и beauty-услуги"}),d.jsx(HD,{variants:a,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},children:i.map(u=>d.jsx(UD,{variants:s,whileHover:{scale:1.02},children:d.jsxs(PD,{children:[d.jsx(FD,{children:u.text}),d.jsxs(qD,{children:[d.jsx(YD,{children:d.jsx("img",{src:u.avatar,alt:u.name})}),d.jsxs(GD,{children:[d.jsx(KD,{children:u.name}),d.jsx(ZD,{children:u.role}),d.jsx(ID,{children:[...Array(u.rating)].map((f,p)=>d.jsx(yi,{},p))})]})]})]})},u.id))})]})]})},QD=b.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #ede9e4 0%,
    #e6e2dc 50%,
    #ddd8d0 100%
  );
  position: relative;
  overflow: hidden;
`,JD=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`,Sx=b(C.div)`
  position: absolute;
  border-radius: 50%;
  background: ${e=>e.$color};
  filter: blur(40px);
  opacity: 0.5;
`,WD=b.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,eM=b(C.h2)`
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  background: linear-gradient(135deg, #5A6B5D 0%, #7A8A7D 50%, #90B3A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  width: 100%;
`,tM=b(C.p)`
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: #7A8A7D;
  text-align: center;
  max-width: 700px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 400;
`,iM=b(C.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 3.5rem;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 20px 60px rgba(144, 179, 167, 0.12);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #90B3A7, #B8C4A8);
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`,nM=b.p`
  text-align: center;
  color: #6B7B6E;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 400;
`,aM=b.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`,rM=b(C.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
  color: white;
  font-weight: 600;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(144, 179, 167, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  text-decoration: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(135deg, #7A8A7D 0%, #90B3A7 100%);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    box-shadow: 0 15px 35px rgba(144, 179, 167, 0.4);
    transform: translateY(-2px);
    color: white;
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`,sM=b(C.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.8);
  color: #5A6B5D;
  font-weight: 600;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  border: 2px solid rgba(144, 179, 167, 0.3);
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  text-decoration: none;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-2px);
    border-color: rgba(144, 179, 167, 0.5);
    box-shadow: 0 10px 25px rgba(144, 179, 167, 0.2);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`,oM=()=>{const{t:e}=ke(),i={initial:{y:0},animate:{y:[-8,8,-8],transition:{duration:6,repeat:1/0,ease:"easeInOut"}}};return d.jsxs(QD,{children:[d.jsxs(JD,{children:[d.jsx(Sx,{$color:"linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(184, 196, 168, 0.08) 100%)",style:{width:"200px",height:"200px",top:"20%",left:"15%"},variants:i,initial:"initial",animate:"animate"}),d.jsx(Sx,{$color:"linear-gradient(135deg, rgba(184, 196, 168, 0.06) 0%, rgba(144, 179, 167, 0.06) 100%)",style:{width:"150px",height:"150px",bottom:"25%",right:"20%"},variants:i,initial:"initial",animate:"animate",transition:{delay:3}})]}),d.jsxs(WD,{children:[d.jsx(eM,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:"Записаться на процедуру"}),d.jsx(tM,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:"Забронируйте SPA-процедуру или услугу салона красоты для полного расслабления"}),d.jsxs(iM,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},children:[d.jsx(nM,{children:"Онлайн-бронирование скоро будет доступно. Пока что, пожалуйста, позвоните нам для записи или отправьте сообщение в WhatsApp."}),d.jsxs(aM,{children:[d.jsxs(rM,{href:"tel:+66624805877",whileHover:{scale:1.03},whileTap:{scale:.97},children:[d.jsx(Qt,{}),"+66 62 480 5877"]}),d.jsxs(sM,{href:"https://wa.me/66624805877",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},children:["WhatsApp",d.jsx(MT,{})]})]})]})]})]})};var pv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jx=vt.createContext&&vt.createContext(pv),lM=["attr","size","title"];function cM(e,i){if(e==null)return{};var a=uM(e,i),s,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)s=u[l],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}function uM(e,i){if(e==null)return{};var a={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(i.indexOf(s)>=0)continue;a[s]=e[s]}return a}function ec(){return ec=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},ec.apply(this,arguments)}function Ax(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),a.push.apply(a,s)}return a}function tc(e){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Ax(Object(a),!0).forEach(function(s){dM(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ax(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function dM(e,i,a){return i=fM(i),i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function fM(e){var i=hM(e,"string");return typeof i=="symbol"?i:i+""}function hM(e,i){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var s=a.call(e,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function mv(e){return e&&e.map((i,a)=>vt.createElement(i.tag,tc({key:a},i.attr),mv(i.child)))}function gv(e){return i=>vt.createElement(pM,ec({attr:tc({},e.attr)},i),mv(e.child))}function pM(e){var i=a=>{var{attr:s,size:l,title:u}=e,f=cM(e,lM),p=l||a.size||"1em",g;return a.className&&(g=a.className),e.className&&(g=(g?g+" ":"")+e.className),vt.createElement("svg",ec({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,s,f,{className:g,style:tc(tc({color:e.color||a.color},a.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&vt.createElement("title",null,u),e.children)};return jx!==void 0?vt.createElement(jx.Consumer,null,a=>i(a)):i(pv)}function mM(e){return gv({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function gM(e){return gv({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}const yM=b.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #ede9e4 0%,
    #e6e2dc 50%,
    #ddd8d0 100%
  );
  position: relative;
  overflow: hidden;
`,xM=b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`,Tx=b(C.div)`
  position: absolute;
  border-radius: 50%;
  background: ${e=>e.$color};
  filter: blur(50px);
  opacity: 0.3;
`,bM=b.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`,vM=b(C.h2)`
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  background: linear-gradient(135deg, #5A6B5D 0%, #7A8A7D 50%, #90B3A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
`,wM=b.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,SM=b(C.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  overflow: hidden;
  border: 1px solid rgba(144, 179, 167, 0.1);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(144, 179, 167, 0.12);
    background: rgba(255, 255, 255, 0.9);
  }
`,jM=b(C.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${e=>e.$isOpen?"white":"#5A6B5D"};
  background: ${e=>e.$isOpen?"linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)":"transparent"};
  transition: all 0.3s ease;
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.heading)||'"Poppins", sans-serif'}};

  &:hover {
    background: ${e=>e.$isOpen?"linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)":"rgba(144, 179, 167, 0.1)"};
    color: ${e=>e.$isOpen?"white":"#90B3A7"};
  }
`,AM=b(C.div)`
  padding: 0 2rem 1.5rem 2rem;
  font-size: 1rem;
  color: #6B7B6E;
  line-height: 1.7;
  overflow: hidden;
  font-weight: 400;
  font-family: ${e=>{var i,a;return((a=(i=e.theme)==null?void 0:i.fonts)==null?void 0:a.primary)||"Inter, sans-serif"}};
`,TM=b.span`
  font-size: 1rem;
  color: ${e=>e.$isOpen?"white":"#90B3A7"};
  transition: all 0.3s ease;
  transform: ${e=>e.$isOpen?"rotate(180deg)":"rotate(0deg)"};
`,EM=()=>{const{t:e}=ke(),[i,a]=w.useState(null),s=p=>{a(i===p?null:p)},l={hidden:{opacity:0,height:0,y:-10},visible:{opacity:1,height:"auto",y:0,transition:{duration:.4,ease:"easeInOut"}},exit:{opacity:0,height:0,y:-10,transition:{duration:.3,ease:"easeInOut"}}},u={initial:{y:0},animate:{y:[-5,5,-5],transition:{duration:8,repeat:1/0,ease:"easeInOut"}}},f=[{key:"faq1",question:"Какие услуги предлагает SPA-центр?",answer:"Мы предлагаем широкий спектр услуг: тайский массаж, ароматерапия, сауну, хаммам, косметологические процедуры и услуги салона красоты."},{key:"faq2",question:"Как записаться на процедуру?",answer:"Вы можете записаться по телефону +66 62 480 5877, через WhatsApp или лично посетив наш центр. Онлайн-бронирование скоро будет доступно."},{key:"faq3",question:"Каковы правила отмены записи?",answer:"Мы просим уведомлять об отмене не менее чем за 24 часа. При отмене менее чем за 24 часа может взиматься плата за отмену."},{key:"faq4",question:"Есть ли подарочные сертификаты?",answer:"Да, мы предлагаем подарочные сертификаты различного номинала. Их можно приобрести у нас в центре или забронировать по телефону."},{key:"faq5",question:"Нужно ли что-то приносить с собой?",answer:"Мы предоставляем все необходимое: полотенца, халаты, тапочки. Вам нужно только прийти и расслабиться."}];return d.jsxs(yM,{children:[d.jsxs(xM,{children:[d.jsx(Tx,{$color:"linear-gradient(135deg, rgba(144, 179, 167, 0.04) 0%, rgba(184, 196, 168, 0.04) 100%)",style:{width:"200px",height:"200px",top:"20%",left:"20%"},variants:u,initial:"initial",animate:"animate"}),d.jsx(Tx,{$color:"linear-gradient(135deg, rgba(184, 196, 168, 0.03) 0%, rgba(144, 179, 167, 0.03) 100%)",style:{width:"150px",height:"150px",bottom:"30%",right:"25%"},variants:u,initial:"initial",animate:"animate",transition:{delay:4}})]}),d.jsxs(bM,{children:[d.jsx(vM,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},children:"Часто задаваемые вопросы"}),d.jsx(wM,{children:f.map((p,g)=>d.jsxs(SM,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:g*.1},whileHover:{scale:1.01},children:[d.jsxs(jM,{onClick:()=>s(g),$isOpen:i===g,children:[p.question,d.jsx(TM,{$isOpen:i===g,children:i===g?d.jsx(mM,{}):d.jsx(gM,{})})]}),d.jsx(ia,{children:i===g&&d.jsx(AM,{variants:l,initial:"hidden",animate:"visible",exit:"exit",children:p.answer})})]},p.key))})]})]})},CM=b(C.div)`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`,yv=b(C.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(210, 155, 132, 0.05) 0%, rgba(224, 232, 225, 0.05) 100%);
  filter: blur(70px);
  z-index: 0;
  pointer-events: none;
`,RM=b(yv)`
  width: 50vw;
  height: 50vw;
  top: -10%;
  right: -15%;
  opacity: 0.6;
`,DM=b(yv)`
  width: 60vw;
  height: 60vw;
  bottom: 10%;
  left: -20%;
  opacity: 0.4;
`,MM=()=>{const{t:e}=ke(),i={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},a={initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1}};return d.jsxs(CM,{initial:"initial",animate:"animate",exit:"exit",variants:i,transition:{duration:.6},children:[d.jsx(RM,{variants:a,animate:{scale:[1,1.05,1],opacity:[.6,.7,.6]},transition:{duration:8,repeat:1/0,repeatType:"reverse",delay:.2}}),d.jsx(DM,{variants:a,animate:{scale:[1,1.1,1],opacity:[.4,.5,.4]},transition:{duration:10,repeat:1/0,repeatType:"reverse",delay:.4}}),d.jsx(QR,{}),d.jsx(AD,{}),d.jsx(BD,{}),d.jsx(XD,{}),d.jsx(EM,{}),d.jsx(oM,{})]})},OM=b.section`
  min-height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #111;
  overflow: hidden;
`,kM=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    filter: brightness(0.6);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%);
  }
`,zM=b.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;
  
  @media (min-width: 1024px) {
    grid-template-columns: 7fr 5fr;
    gap: 5rem;
  }
`,BM=b(C.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #FFFFFF;
  text-align: left;
`;b(C.span)`
  display: inline-block;
  background-color: rgba(210, 155, 132, 0.2);
  color: ${e=>e.theme.colors.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(210, 155, 132, 0.3);
`;const $M=b(C.h1)`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  position: relative;
  
  span {
    color: ${e=>e.theme.colors.primary};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.2em;
      background-color: ${e=>e.theme.colors.primary};
      opacity: 0.3;
      border-radius: 2px;
    }
  }
`,NM=b(C.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  max-width: 580px;
  font-weight: 300;
`,LM=b(C.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`,VM=b(C.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px rgba(210, 155, 132, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: width 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 25px rgba(210, 155, 132, 0.4);
    transform: translateY(-3px);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,_M=b(C.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  color: white;
  font-weight: 600;
  padding: 1.15rem 2.45rem;
  border-radius: 50px;
  cursor: pointer;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    transition: width 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,HM=b(C.div)`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,vf=b(C.div)`
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: ${e=>e.theme.colors.primary};
    margin-bottom: 1rem;
    border-radius: 3px;
    opacity: 0.7;
  }
`,wf=b.span`
  font-size: 2.8rem;
  font-weight: 700;
  font-family: ${e=>e.theme.fonts.heading};
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1;
`,Sf=b.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
`,UM=b(C.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  
  @media (max-width: 1023px) {
    justify-content: center;
  }
`,PM=b(C.img)`
  max-width: 100%;
  height: auto;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
`,FM=()=>{const{t:e}=ke();return d.jsxs(OM,{children:[d.jsx(kM,{}),d.jsxs(zM,{children:[d.jsxs(BM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},style:{paddingTop:"2rem"},children:[d.jsx($M,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:e("sports.hero.title","Достигайте новых <span>спортивных высот</span> с KAIF")}),d.jsx(NM,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:e("sports.hero.subtitle","В KAIF Jungle Club & SPA вы найдете все необходимое для активного образа жизни, тренировок и спортивного развлечения в атмосфере роскоши и комфорта.")}),d.jsxs(LM,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[d.jsxs(VM,{whileHover:{scale:1.03},whileTap:{scale:.97},children:[e("sports.hero.primary_cta","Записаться на тренировку"),d.jsx(hR,{})]}),d.jsxs(_M,{whileHover:{scale:1.03},whileTap:{scale:.97},children:[e("sports.hero.secondary_cta","Узнать подробнее"),d.jsx(gR,{})]})]}),d.jsxs(HM,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[d.jsxs(vf,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.8},children:[d.jsx(wf,{children:"5+"}),d.jsx(Sf,{children:e("sports.hero.stats.facilities","Спортивных объектов")})]}),d.jsxs(vf,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.9},children:[d.jsx(wf,{children:"10+"}),d.jsx(Sf,{children:e("sports.hero.stats.trainers","Профессиональных тренеров")})]}),d.jsxs(vf,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:1},children:[d.jsx(wf,{children:"24/7"}),d.jsx(Sf,{children:e("sports.hero.stats.access","Доступ для резидентов")})]})]})]}),d.jsx(UM,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.8,delay:.4},style:{marginTop:"2rem"},children:d.jsx(PM,{src:"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Sports facility",whileHover:{scale:1.03},transition:{duration:.5}})})]})]})},jf=b(C.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 6rem 0;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  &:nth-child(even) {
    grid-template-columns: 1fr 1fr;
    
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
    
    .facility-content {
      order: 2;
      
      @media (max-width: 992px) {
        order: 1;
      }
    }
    
    .facility-gallery {
      order: 1;
      
      @media (max-width: 992px) {
        order: 2;
      }
    }
  }
  
  &:first-child {
    margin-top: 0;
  }
`,Af=b.h3`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 0.8rem;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 3px;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: 2px;
  }
`,Tf=b.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`,Ef=b.div`
  position: relative;
  direction: ltr;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 230px);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 180px);
  }
`,Li=b(C.div)`
  height: 100%;
  background-color: ${e=>e.theme.colors.secondary};
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: ${e=>e.theme.shadows.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%);
    opacity: 0.7;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: scale(1.03);
    box-shadow: ${e=>e.theme.shadows.xl};
    
    &::after {
      opacity: 1;
    }
  }
  
  &:first-child {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`,di=b(C.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${e=>e.theme.colors.primary};
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
  
  span {
    font-size: 1rem;
    color: ${e=>e.theme.colors.text.secondary};
  }
`,Cf=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,Ka=b.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${e=>e.theme.colors.primary};
    margin-right: 0.75rem;
  }
  
  span {
    font-size: 0.95rem;
    color: ${e=>e.theme.colors.text.secondary};
  }
`;b(C.div)`
  width: 100%;
  margin: 2rem 0 3rem;
  overflow: visible;
  background-color: transparent;
  position: relative;
`;b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #6366f1, transparent);
  }
  
  .title-wrapper {
    h3 {
      font-family: ${e=>e.theme.fonts.heading};
      font-size: 1.5rem;
      font-weight: 600;
      color: #222;
      margin: 0 0 0.5rem 0;
      letter-spacing: 0.5px;
      position: relative;
    }
    
    p {
      color: #666;
      font-size: 0.85rem;
      margin: 0;
      line-height: 1.5;
      max-width: 500px;
    }
  }
`;b.div`
  font-size: 0.85rem;
  color: #4b5563;
  font-weight: 600;
  margin-right: 0.75rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
`;b.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.75rem;
  position: relative;
  padding: 1rem 1.25rem;
  background: rgba(249, 250, 251, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
  border: 1px solid rgba(255,255,255,0.7);
`;b.button`
  background: ${e=>e.active?"linear-gradient(135deg, #6366f1, #8b5cf6)":"transparent"};
  color: ${e=>e.active?"#fff":"#888"};
  border: ${e=>e.active?"none":"1px solid #e5e7eb"};
  padding: ${e=>e.active?"6px 14px":"5px 12px"};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  box-shadow: ${e=>e.active?"0 4px 10px rgba(99, 102, 241, 0.25)":"none"};
  transform-origin: center;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-1px);
    border-color: ${e=>e.active?"none":"#cbd5e1"};
    color: ${e=>e.active?"#fff":"#333"};
    box-shadow: ${e=>e.active?"0 6px 15px rgba(99, 102, 241, 0.3)":"0 2px 6px rgba(0,0,0,0.04)"};    
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: ${e=>e.active?"0 2px 5px rgba(99, 102, 241, 0.2)":"none"};
  }
  
  &:focus {
    outline: none;
  }
`;b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
  perspective: 1000px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
`;const pr=b(C.div)`
  background-color: white;
  background-image: ${e=>e.isPrimary?"linear-gradient(135deg, rgba(249, 250, 251, 0.9), rgba(243, 244, 246, 0.4))":"none"};
  border-radius: 16px;
  padding: 24px;
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(229, 231, 235, 0.7);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01), 0 1px 3px rgba(0, 0, 0, 0.02);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 0;
    background: linear-gradient(to bottom, #6366f1, #8b5cf6);
    transition: height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0.85;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px) rotateX(2deg);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.07), 0 10px 10px rgba(0, 0, 0, 0.04);
    border-color: rgba(203, 213, 225, 0.6);
    
    &::before {
      height: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-2px);
    transition: all 0.1s;
  }
`;b.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    color: #999;
  }
  
  span {
    font-size: 0.8rem;
    color: #666;
    font-weight: 500;
  }
`;b.h4`
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #111827;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #6366f1, transparent);
    transition: width 0.3s ease;
  }
  
  ${pr}:hover & {
    &::after {
      width: 100%;
    }
  }
`;b.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    color: #999;
  }
  
  span {
    font-size: 0.75rem;
    color: #777;
  }
`;b.span`
  display: inline-block;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 4px 10px;
  border-radius: 20px;
  background-color: ${e=>e.type==="personal"?"rgba(37, 99, 235, 0.1)":e.type==="event"?"rgba(219, 39, 119, 0.1)":e.type==="group"?"rgba(75, 85, 99, 0.1)":e.color==="green"?"rgba(22, 163, 74, 0.1)":e.color==="yellow"?"rgba(245, 158, 11, 0.1)":e.color==="red"?"rgba(220, 38, 38, 0.1)":"rgba(75, 85, 99, 0.1)"};
  color: ${e=>e.type==="personal"?"#2563eb":e.type==="event"?"#db2777":e.color==="green"?"#16a34a":e.color==="yellow"?"#f59e0b":e.color==="red"?"#dc2626":"#4b5563"};
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
  transform: translateY(0);
  
  ${pr}:hover & {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px ${e=>e.type==="personal"?"rgba(37, 99, 235, 0.15)":e.type==="event"?"rgba(219, 39, 119, 0.15)":e.color==="green"?"rgba(22, 163, 74, 0.15)":e.color==="yellow"?"rgba(245, 158, 11, 0.15)":e.color==="red"?"rgba(220, 38, 38, 0.15)":"rgba(75, 85, 99, 0.15)"};
  }
`;b.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  gap: 6px;
  transition: all 0.3s ease;
`;b.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;b(C.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.55rem 1.2rem;
  font-family: ${e=>e.theme.fonts.body};
  font-weight: 500;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
  }
`;b.div`
  text-align: center;
  padding: 1rem 0;
  font-style: italic;
  color: #6b7280;
  font-size: 0.8rem;
  margin-top: 1.5rem;
  background: rgba(249, 250, 251, 0.7);
  border-radius: 8px;
  border: 1px dashed #e5e7eb;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent);
  }
`;b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  ${pr}:hover & {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
`;b.div`
  font-size: 0.8rem;
  color: #6366f1;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.1);
  padding: 3px 8px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  ${pr}:hover & {
    background: rgba(99, 102, 241, 0.15);
    box-shadow: 0 2px 5px rgba(99, 102, 241, 0.1);
  }
`;b.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  transform: translateX(0);
  
  svg {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    color: #6b7280;
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 0.8rem;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  ${pr}:hover & {
    transform: translateX(3px);
    
    svg {
      color: #6366f1;
      transform: scale(1.1);
    }
    
    span {
      color: #374151;
    }
  }
`;b.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  transform: translateX(0);
  
  svg {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    color: #6b7280;
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 0.8rem;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  ${pr}:hover & {
    transform: translateX(3px);
    transition-delay: 0.05s;
    
    svg {
      color: #6366f1;
      transform: scale(1.1);
    }
    
    span {
      color: #374151;
    }
  }
`;b.div`
  display: ${e=>e.active?"block":"none"};
  animation: ${e=>e.active?"fadeIn 0.5s ease":"none"};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;b.div`
  padding: 3rem 2rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  border-radius: 16px;
  width: 100%;
  grid-column: 1 / -1;
  border: 1px dashed #e5e7eb;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    opacity: 0.3;
  }
`;const qM=b(C.div)`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`,nh=b.section`
  padding: 9rem 2rem;
  background-color: ${e=>e.bgColor||e.theme.colors.background};
  position: relative;
  overflow: hidden;
  
  &:nth-child(even) {
    background-color: ${e=>e.bgColor||e.theme.colors.surface};
  }
`,ah=b(C.span)`
  display: inline-block;
  background-color: rgba(210, 155, 132, 0.1);
  color: ${e=>e.theme.colors.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`,xv=b(C.h2)`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: ${e=>e.theme.colors.text.primary};
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 700;
  
  span {
    color: ${e=>e.theme.colors.primary};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.15em;
      background-color: ${e=>e.theme.colors.primary};
      opacity: 0.3;
      border-radius: 2px;
    }
  }
`,bv=b(C.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${e=>e.theme.colors.text.secondary};
  text-align: center;
  max-width: 800px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 300;
`,rh=b.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,sh=b(C.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary}10, ${e=>e.theme.colors.primary}30);
  filter: blur(60px);
  z-index: 1;
`,YM=b(sh)`
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
`,GM=b(sh)`
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -200px;
`;b(sh)`
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
`;const Sl=b(C.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(210, 155, 132, 0.25);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: width 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 6px 20px rgba(210, 155, 132, 0.35);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,KM="/Kaif-test/assets/gym-1-CnkDcUEU.JPG",ZM="/Kaif-test/assets/gym-2-DzuyA8fG.JPG",IM="/Kaif-test/assets/gym-3-Jg52iATt.JPG",XM="/Kaif-test/assets/fight-1-YGz9VxJh.jpg",QM="/Kaif-test/assets/fight-2-CCvRgy_G.jpg",JM="/Kaif-test/assets/fight-3-D1BQSPAQ.jpg",WM=()=>{const{t:e}=ke(),[i,a]=w.useState("all"),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}};return d.jsxs(nh,{children:[d.jsx(YM,{animate:{scale:[1,1.1,1],opacity:[.7,.9,.7]},transition:{duration:8,repeat:1/0,repeatType:"reverse"}}),d.jsxs(rh,{children:[d.jsxs("div",{style:{textAlign:"center"},children:[d.jsx(ah,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:e("sports.facilities.tag","Наши объекты")}),d.jsx(xv,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:e("sports.facilities.title","Современные <span>спортивные</span> пространства")}),d.jsx(bv,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:e("sports.facilities.subtitle","KAIF предлагает широкий выбор премиальных спортивных пространств с передовым оборудованием и профессиональными тренерами, которые помогут вам достичь ваших фитнес-целей.")})]}),d.jsxs(jf,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:[d.jsxs("div",{className:"facility-content",children:[d.jsx(Af,{children:e("sports.facilities.gym.title","Тренажерный зал")}),d.jsxs(Cf,{children:[d.jsxs(Ka,{children:[d.jsx(bf,{}),d.jsx("span",{children:e("sports.facilities.gym.hours","06:00 - 23:00")})]}),d.jsxs(Ka,{children:[d.jsx(_l,{}),d.jsx("span",{children:e("sports.facilities.gym.capacity","До 40 человек")})]})]}),d.jsxs(Tf,{children:[d.jsx("p",{children:e("sports.facilities.gym.description1","Наш тренажерный зал оснащен современным оборудованием премиум-класса от ведущих производителей. Здесь вы найдете все необходимое для эффективных тренировок - от свободных весов до кардиотренажеров последнего поколения.")}),d.jsx("p",{children:e("sports.facilities.gym.description2","Просторное помещение с панорамными окнами создает идеальную атмосферу для тренировок, а профессиональные тренеры всегда готовы помочь составить индивидуальную программу.")})]}),d.jsxs(C.div,{variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.gym.feature1","Премиальное оборудование Technogym и Life Fitness")})]}),d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.gym.feature2","Зона функционального тренинга")})]}),d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.gym.feature3","Индивидуальные тренировки с сертифицированными тренерами")})]})]}),d.jsx(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},style:{marginTop:"2rem"},children:d.jsxs(Sl,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[e("sports.facilities.book_button","Забронировать тренировку"),d.jsx(wl,{style:{width:"18px",height:"18px"}})]})})]}),d.jsx("div",{className:"facility-gallery",children:d.jsxs(Ef,{children:[d.jsx(Li,{src:KM,whileHover:{scale:1.03},transition:{duration:.4}}),d.jsx(Li,{src:ZM,whileHover:{scale:1.03},transition:{duration:.4}}),d.jsx(Li,{src:IM,whileHover:{scale:1.03},transition:{duration:.4}})]})})]}),d.jsxs(jf,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:[d.jsxs("div",{className:"facility-content",children:[d.jsx(Af,{children:e("sports.facilities.fight.title","Бойцовский клуб")}),d.jsxs(Cf,{children:[d.jsxs(Ka,{children:[d.jsx(bf,{}),d.jsx("span",{children:e("sports.facilities.fight.hours","08:00 - 22:00")})]}),d.jsxs(Ka,{children:[d.jsx(_l,{}),d.jsx("span",{children:e("sports.facilities.fight.capacity","До 25 человек")})]})]}),d.jsxs(Tf,{children:[d.jsx("p",{children:e("sports.facilities.fight.description1","Бойцовский клуб KAIF — это современное пространство для тренировок по различным видам единоборств. Профессиональный ринг, груши, мешки, и специальное покрытие создают идеальные условия как для новичков, так и для опытных бойцов.")}),d.jsx("p",{children:e("sports.facilities.fight.description2","Наши тренеры — опытные бойцы и чемпионы, которые помогут освоить технику и достичь высоких результатов в выбранном боевом искусстве.")})]}),d.jsxs(C.div,{variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.fight.feature1","Профессиональный боксерский ринг")})]}),d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.fight.feature2","Тренировки по боксу, тайскому боксу, ММА")})]}),d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.fight.feature3","Тренеры с международными сертификатами")})]})]}),d.jsx(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},style:{marginTop:"2rem"},children:d.jsxs(Sl,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[e("sports.facilities.book_button","Забронировать тренировку"),d.jsx(wl,{style:{width:"18px",height:"18px"}})]})})]}),d.jsx("div",{className:"facility-gallery",children:d.jsxs(Ef,{children:[d.jsx(Li,{src:XM,whileHover:{scale:1.03},transition:{duration:.4}}),d.jsx(Li,{src:QM,whileHover:{scale:1.03},transition:{duration:.4}}),d.jsx(Li,{src:JM,whileHover:{scale:1.03},transition:{duration:.4}})]})})]}),d.jsxs(jf,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:[d.jsxs("div",{className:"facility-content",children:[d.jsx(Af,{children:e("sports.facilities.dance.title","Танцевальная студия")}),d.jsxs(Cf,{children:[d.jsxs(Ka,{children:[d.jsx(bf,{}),d.jsx("span",{children:e("sports.facilities.dance.hours","09:00 - 21:00")})]}),d.jsxs(Ka,{children:[d.jsx(_l,{}),d.jsx("span",{children:e("sports.facilities.dance.capacity","До 30 человек")})]})]}),d.jsxs(Tf,{children:[d.jsx("p",{children:e("sports.facilities.dance.description1","Просторная танцевальная студия с профессиональным покрытием, зеркальными стенами и передовой аудиосистемой создает идеальные условия для различных танцевальных направлений и групповых занятий.")}),d.jsx("p",{children:e("sports.facilities.dance.description2","Здесь проходят занятия по современным и классическим танцевальным направлениям, а также групповые фитнес-тренировки под руководством опытных инструкторов.")})]}),d.jsx(C.div,{variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.dance.feature4","Гибкое расписание групповых и индивидуальных занятий")})]})}),d.jsx(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},style:{margin:"2rem 0"},children:d.jsxs(Sl,{whileHover:{scale:1.05,boxShadow:"0 15px 30px rgba(0, 0, 0, 0.1)"},whileTap:{scale:.95},style:{display:"flex",margin:"0 auto"},onClick:()=>window.location.href="#schedule",children:[e("sports.facilities.dance.view_schedule","Посмотреть расписание"),d.jsx(wl,{style:{width:"18px",height:"18px",marginLeft:"8px"}})]})}),d.jsxs(C.div,{variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.dance.feature1","Профессиональное танцевальное покрытие")})]}),d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.dance.feature2","Широкий выбор танцевальных направлений")})]}),d.jsxs(di,{variants:l,children:[d.jsx(ii,{}),d.jsx("span",{children:e("sports.facilities.dance.feature3","Групповые и индивидуальные занятия")})]})]}),d.jsx(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},style:{marginTop:"2rem"},children:d.jsxs(Sl,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[e("sports.facilities.book_button","Забронировать занятие"),d.jsx(wl,{style:{width:"18px",height:"18px"}})]})})]}),d.jsx("div",{className:"facility-gallery",children:d.jsxs(Ef,{children:[d.jsx(Li,{src:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",whileHover:{scale:1.03},transition:{duration:.4}}),d.jsx(Li,{src:"https://images.unsplash.com/photo-1508215885820-4585e56135c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",whileHover:{scale:1.03},transition:{duration:.4}}),d.jsx(Li,{src:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",whileHover:{scale:1.03},transition:{duration:.4}})]})})]})]})]})},eO=b.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto 0;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: var(--shadow-wellness-lg);
  
  @media (max-width: 768px) {
    margin: 2rem auto 0;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    margin: 1.5rem auto 0;
    border-radius: 12px;
  }
`,tO=b(C.div)`
  display: flex;
  width: 100%;
  height: 100%;
`,iO=b(C.div)`
  flex-shrink: 0;
  width: 100%;
  height: 500px;
  position: relative;
  
  @media (max-width: 768px) {
    height: 400px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .slide-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    color: white;
    transition: all 0.3s ease;
    
    @media (max-width: 480px) {
      padding: 1.5rem;
    }
  }
  
  .slide-title {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  
  .slide-subtitle {
    font-size: 1rem;
    opacity: 0.9;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`,Ex=b.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  color: var(--color-text-primary);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
`,nO=b.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: 480px) {
    gap: 8px;
    margin-top: 15px;
  }
`,aO=b.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>e.active?"var(--color-primary)":"rgba(144, 179, 167, 0.3)"};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"var(--color-primary)":"rgba(144, 179, 167, 0.5)"};
  }
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;b(C.div)`
  height: 280px;
  background-color: var(--color-surface);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-wellness);
  transition: all 0.3s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  .photo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    color: white;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-wellness-lg);
    
    img {
      transform: scale(1.05);
    }
    
    .photo-overlay {
      padding-bottom: 2rem;
    }
  }
  
  .photo-title {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  .photo-subtitle {
    font-size: 0.85rem;
    opacity: 0.8;
  }
`;b(C.div)`
  height: 280px;
  background-color: var(--color-secondary);
  background-opacity: 0.1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;const Vi=[{id:1,image:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",title:"Тренажерный зал",subtitle:"Современное оборудование"},{id:2,image:"https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",title:"Бойцовский клуб",subtitle:"Профессиональный ринг"},{id:3,image:"https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",title:"Персональный тренинг",subtitle:"Индивидуальный подход"},{id:4,image:"https://images.unsplash.com/photo-1576443486731-ab46ed3a0a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",title:"Бассейн",subtitle:"Релаксация и восстановление"}],rO=()=>{const{t:e}=ke(),[i,a]=w.useState(0),[s,l]=w.useState(0),[u,f]=w.useState(!1),[p,g]=w.useState(0),[m,y]=w.useState(0),[v,S]=w.useState(!0);w.useEffect(()=>{let N;return v&&(N=setInterval(()=>{T()},5e3)),()=>{N&&clearInterval(N)}},[i,v]);const A=()=>{l(-1),a(N=>N===0?Vi.length-1:N-1)},T=()=>{l(1),a(N=>N===Vi.length-1?0:N+1)},k=N=>{l(N>i?1:-1),a(N)},B=N=>{g(N.touches[0].clientX),f(!0),S(!1)},O=N=>{u&&y(N.touches[0].clientX)},H=()=>{f(!1),S(!0),p-m>75?T():m-p>75&&A()},M=N=>{N.key==="ArrowLeft"?A():N.key==="ArrowRight"&&T()},Y={enter:N=>({x:N>0?1e3:-1e3,opacity:0}),center:{x:0,opacity:1},exit:N=>({x:N<0?1e3:-1e3,opacity:0})};return w.useEffect(()=>(window.addEventListener("keydown",M),()=>{window.removeEventListener("keydown",M)}),[i]),d.jsxs(nh,{id:"gallery",children:[d.jsx(GM,{animate:{scale:[1,1.15,1],opacity:[.6,.8,.6]},transition:{duration:10,repeat:1/0,repeatType:"reverse",delay:1}}),d.jsxs(rh,{children:[d.jsxs("div",{style:{textAlign:"center"},children:[d.jsx(ah,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:e("sports.gallery.tag","Фото")}),d.jsx(xv,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:e("sports.gallery.title","Gallery")}),d.jsx(bv,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:e("sports.gallery.subtitle","Captured moments of sports life at KAIF Jungle Club & SPA. Join our community and share your own achievements")})]}),d.jsxs(eO,{onTouchStart:B,onTouchMove:O,onTouchEnd:H,tabIndex:"0",onMouseEnter:()=>S(!1),onMouseLeave:()=>S(!0),children:[d.jsx(ia,{initial:!1,custom:s,children:d.jsx(tO,{children:d.jsxs(iO,{custom:s,variants:Y,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:[d.jsx("img",{src:Vi[i].image,alt:Vi[i].title,loading:"lazy"}),d.jsxs("div",{className:"slide-overlay",children:[d.jsx("div",{className:"slide-title",children:e(`sports.gallery.${Vi[i].title.toLowerCase().replace(/\s+/g,"_")}`,Vi[i].title)}),d.jsx("div",{className:"slide-subtitle",children:e(`sports.gallery.subtitle_${Vi[i].title.toLowerCase().replace(/\s+/g,"_")}`,Vi[i].subtitle)})]})]},i)})}),d.jsx(Ex,{className:"prev",onClick:A,"aria-label":"Предыдущий слайд",children:"‹"}),d.jsx(Ex,{className:"next",onClick:T,"aria-label":"Следующий слайд",children:"›"}),d.jsx(nO,{children:Vi.map((N,K)=>d.jsx(aO,{active:K===i,onClick:()=>k(K),"aria-label":`Перейти к слайду ${K+1}`},K))})]})]})]})},sO=b.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--color-surface);
  border-radius: 16px;
  box-shadow: var(--shadow-wellness-lg);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    margin: 0.7rem 0;
    border-radius: 12px;
  }
`,oO=b.h2`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`,lO=b.h3`
  font-family: var(--font-primary);
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,cO=b.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding: 0.5rem;
  background: var(--color-surface-secondary);
  border-radius: 16px;
  box-shadow: var(--shadow-wellness);
  
  @media (max-width: 768px) {
    gap: 0.25rem;
    padding: 0.5rem 0.25rem;
    margin-bottom: 1.5rem;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    gap: 0.2rem;
    padding: 0.4rem 0.2rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
  }
`,uO=b.button`
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: none;
  background: ${e=>e.isSelected?"var(--color-primary)":"var(--color-surface)"};
  color: ${e=>e.isSelected?"var(--color-text-white)":"var(--color-text-primary)"};
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${e=>e.isSelected?"var(--shadow-glow)":"var(--shadow-wellness)"};
  min-width: 80px;
  transition: var(--transition-natural);
  transform: ${e=>e.isSelected?"translateY(-3px) scale(1.05)":"none"};
  position: relative;
  overflow: hidden;
  z-index: ${e=>e.isSelected?"2":"1"};
  
  &::before {
    content: '';
    position: absolute;
    top: ${e=>e.isSelected?"-10%":"100%"};
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--color-tertiary);
    transition: var(--transition-natural);
    opacity: ${e=>e.isSelected?"1":"0"};
  }
  
  &:hover {
    transform: ${e=>e.isSelected?"translateY(-3px) scale(1.05)":"translateY(-2px)"};
    box-shadow: var(--shadow-wellness-lg);
    background: ${e=>e.isSelected?"var(--color-primary)":"var(--color-secondary)"};
    color: var(--color-text-white);
    
    &::before {
      top: ${e=>e.isSelected?"-10%":"0"};
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    min-width: 70px;
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    min-width: 55px;
    flex: 1;
    padding: 0.4rem 0.3rem;
    font-size: 0.8rem;
    border-radius: 8px;
    transform: ${e=>e.isSelected?"translateY(-2px) scale(1.02)":"none"};
    display: flex;
    flex-direction: column;
    align-items: center;
    
    span {
      display: block;
      line-height: 1.2;
    }
  }
`,dO=b.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 4px;
  
  @media (max-width: 768px) {
    border-spacing: 2px;
  }
  
  @media (max-width: 480px) {
    border-spacing: 3px 4px;
    margin-top: 0.5rem;
  }
`,fO=b.th`
  padding: 1rem 0.5rem;
  text-align: center;
  font-weight: 700;
  color: ${e=>e.isSelected?"var(--color-primary)":"var(--color-text-primary)"};
  background: ${e=>e.isSelected?"rgba(144, 179, 167, 0.15)":"transparent"};
  border-radius: 12px 12px 0 0;
  transition: var(--transition-natural);
  position: relative;
  border-bottom: ${e=>e.isSelected?"3px solid var(--color-primary)":"none"};
  transform: ${e=>e.isSelected?"translateY(-4px)":"none"};
  box-shadow: ${e=>e.isSelected?"var(--shadow-wellness)":"none"};
  
  .day-name {
    display: block;
    font-size: ${e=>e.isSelected?"1.1rem":"1rem"};
    margin-bottom: 0.25rem;
    font-family: var(--font-primary);
    font-weight: ${e=>e.isSelected?"800":"700"};
    letter-spacing: ${e=>e.isSelected?"0.5px":"normal"};
  }
  
  .day-number {
    display: block;
    font-size: 0.9rem;
    opacity: ${e=>e.isSelected?"1":"0.7"};
    font-family: var(--font-primary);
  }
  
  &::after {
    content: ${e=>e.isSelected?'"▾"':'""'};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    color: var(--color-primary);
    opacity: ${e=>e.isSelected?"1":"0"};
    transition: var(--transition-natural);
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 0.3rem;
    border-radius: 8px 8px 0 0;
    display: ${e=>e.hiddenOnMobile?"none":"table-cell"};
    width: ${e=>e.isSelected?"100%":"0"};
    
    .day-name {
      font-size: ${e=>e.isSelected?"0.95rem":"0.85rem"};
      margin-bottom: 0.1rem;
    }
    
    .day-number {
      font-size: 0.75rem;
    }
    
    &::after {
      bottom: -8px;
      font-size: 12px;
    }
  }
`,Cx=b.td`
  padding: 0.5rem;
  text-align: right;
  font-weight: 600;
  font-family: var(--font-primary);
  color: var(--color-text-secondary);
  width: 80px;
  
  @media (max-width: 768px) {
    width: 60px;
    padding: 0.4rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    padding: 0.3rem 0.1rem 0.3rem 0;
    font-size: 0.75rem;
    position: sticky;
    left: 0;
    background: var(--color-surface);
    z-index: 2;
  }
`,Rx=b.td`
  padding: 0.75rem 0.5rem;
  background-color: ${e=>e.bgColor||"transparent"};
  text-align: center;
  border-radius: 12px;
  box-shadow: ${e=>e.bgColor?"var(--shadow-wellness)":"none"};
  transition: var(--transition-natural);
  position: relative;
  height: 80px;
  width: ${e=>e.isCurrentDay?"14%":"13%"};
  overflow: hidden;
  cursor: ${e=>e.hasClass?"pointer":"default"};
  border: ${e=>e.hasClass&&e.isCurrentDay?"2px solid var(--color-primary)":"none"};
  transform: ${e=>e.hasClass&&e.isCurrentDay?"scale(1.02)":"none"};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(144, 179, 167, 0.3), rgba(144, 179, 167, 0.1));
    opacity: 0;
    transition: var(--transition-natural);
    border-radius: 12px;
    z-index: 1;
  }
  
  &:hover {
    transform: ${e=>e.hasClass?"translateY(-3px) scale(1.03)":"none"};
    box-shadow: ${e=>e.hasClass?"0 5px 15px rgba(144, 179, 167, 0.4)":"none"};
    z-index: 2;
    border: ${e=>e.hasClass?"2px solid var(--color-primary)":"none"};
    
    &::before {
      opacity: ${e=>e.hasClass?"1":"0"};
    }
  }
  
  @media (max-width: 768px) {
    height: 70px;
    padding: 0.5rem 0.3rem;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    height: auto;
    min-height: 60px;
    padding: 0.3rem 0.2rem;
    width: auto;
    display: ${e=>e.hiddenOnMobile?"none":"table-cell"};
    border-radius: 8px;
  }
`,hO=b.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,pO=b.div`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,mO=b.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`,gO=b.div`
  font-size: 0.75rem;
  font-weight: 500;
  font-style: italic;
  color: var(--color-text-secondary);
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`,vs=[{name:"MON",number:"1",fullName:"Понедельник"},{name:"TUE",number:"2",fullName:"Вторник"},{name:"WED",number:"3",fullName:"Среда"},{name:"THU",number:"4",fullName:"Четверг"},{name:"FRI",number:"5",fullName:"Пятница"},{name:"SAT",number:"6",fullName:"Суббота"},{name:"SUN",number:"7",fullName:"Воскресенье"}],Dx=["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"],Mx=["YOGA","STRETCHING","MOBILITY","ZUMBA","BARRE","HIGH HEELS","TABATA","FITNESS","STRONG NATION","CIRCL MOBILITY"],Ox=["Anna K.","Michael S.","Elena G.","Sergei T.","Maria V.","Alexey D.","Viktoria Z.","Dmitry L.","Natalia M.","Ivan P."],yO=()=>{const e=[];return vs.forEach((i,a)=>{const s=3+Math.floor(Math.random()*3);for(let l=0;l<s;l++){const u=9+Math.floor(Math.random()*9),f=45+Math.floor(Math.random()*4)*15,p=Mx[Math.floor(Math.random()*Mx.length)],g=Ox[Math.floor(Math.random()*Ox.length)],m=10+Math.floor(Math.random()*11),y=Math.floor(Math.random()*(m+1));e.push({id:`class-${a}-${l}`,day:a,startTime:`${u}:00`,classType:p,trainer:g,duration:f,maxParticipants:m,currentParticipants:y})}}),e},xO=e=>({YOGA:"rgba(144, 179, 167, 0.2)",STRETCHING:"rgba(200, 168, 233, 0.2)",MOBILITY:"rgba(144, 179, 167, 0.15)",ZUMBA:"rgba(212, 165, 116, 0.2)",BARRE:"rgba(212, 165, 116, 0.15)","HIGH HEELS":"rgba(200, 168, 233, 0.15)",TABATA:"rgba(212, 165, 116, 0.25)",FITNESS:"rgba(144, 179, 167, 0.25)","STRONG NATION":"rgba(200, 168, 233, 0.25)","CIRCL MOBILITY":"rgba(144, 179, 167, 0.18)"})[e]||"rgba(144, 179, 167, 0.1)",bO=()=>{const{t:e}=ke(),[i,a]=w.useState([]),[s,l]=w.useState(!0),[u,f]=w.useState(new Date().getDay()===0?6:new Date().getDay()-1),[p,g]=w.useState(window.innerWidth<=480);return w.useEffect(()=>{(async()=>{l(!0),await new Promise(v=>setTimeout(v,500));const y=yO();a(y),l(!1)})()},[]),w.useEffect(()=>{const m=()=>{g(window.innerWidth<=480)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),d.jsx(nh,{id:"schedule",children:d.jsxs(rh,{children:[d.jsxs("div",{style:{textAlign:"center"},children:[d.jsx(ah,{children:e("sports.schedule.tag","Расписание")}),d.jsx(oO,{children:"SCHEDULE"}),d.jsx(lO,{children:"ВЫБЕРИТЕ ДЕНЬ НЕДЕЛИ"})]}),d.jsxs(sO,{children:[d.jsx(cO,{children:vs.map((m,y)=>d.jsxs(uO,{isSelected:y===u,onClick:()=>f(y),children:[d.jsx("span",{children:m.name}),d.jsx("span",{style:{fontSize:"0.8rem",opacity:.8},children:m.number})]},m.name))}),d.jsxs(dO,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{style:{width:p?"40px":"80px"}}),vs.map((m,y)=>d.jsxs(fO,{isSelected:y===u,hiddenOnMobile:p&&y!==u,children:[d.jsx("span",{className:"day-name",children:m.name}),d.jsx("span",{className:"day-number",children:m.number})]},m.name))]})}),d.jsx("tbody",{children:s?Dx.map((m,y)=>d.jsxs("tr",{children:[d.jsx(Cx,{children:m}),vs.map((v,S)=>d.jsx(Rx,{children:Math.random()>.7&&d.jsx("div",{style:{height:"100%",background:"#f3f4f6",borderRadius:"4px",animation:"pulse 1.5s infinite"}})},`loading-cell-${S}-${y}`))]},`loading-row-${y}`)):Dx.map((m,y)=>d.jsxs("tr",{children:[d.jsx(Cx,{children:m}),vs.map((v,S)=>{const A=i.find(T=>T.day===S&&T.startTime===m);return d.jsx(Rx,{bgColor:A?xO(A.classType):"transparent",hasClass:!!A,isCurrentDay:S===u,hiddenOnMobile:p&&S!==u,children:A&&d.jsxs(hO,{children:[d.jsx(pO,{children:A.classType}),d.jsxs(mO,{children:[A.duration," мин"]}),d.jsx(gO,{children:A.trainer})]})},`cell-${S}-${y}`)})]},`time-row-${y}`))})]})]})]})})},vO=()=>d.jsxs(qM,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[d.jsx(FM,{}),d.jsx(WM,{}),d.jsx(rO,{}),d.jsx(bO,{})]}),wO=b.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background-color: #000;
  overflow: hidden;
`,SO=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1601397922721-4292554b5e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
  }
`,jO=b.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;
  
  @media (min-width: 1024px) {
    grid-template-columns: 6fr 5fr;
    gap: 5rem;
  }
`,AO=b(C.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #FFFFFF;
  text-align: left;
`,TO=b(C.h1)`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 80px;
    height: 3px;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: 3px;
  }
`,EO=b(C.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 540px;
  font-weight: 300;
`,CO=b(C.div)`
  display: flex;
  gap: 3.5rem;
  margin-bottom: 3.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`,Rf=b(C.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 40px;
    height: 2px;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: 3px;
    opacity: 0.7;
  }
`,Df=b.span`
  font-size: 2.8rem;
  font-weight: 700;
  font-family: ${e=>e.theme.fonts.heading};
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1;
`,Mf=b.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
`,RO=b(C.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`,DO=b(C.div)`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1023px) {
    display: none;
  }
`,MO=b(C.img)`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`,OO=b(C.div)`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`;b.section`
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  
  &:nth-child(even) {
    background-color: ${e=>e.bgColor||e.theme.colors.surface};
  }
`;const vv=b(C.span)`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: rgba(210, 155, 132, 0.1);
  color: ${e=>e.theme.colors.primary};
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
`,wv=b(C.h2)`
  font-family: ${e=>e.theme.fonts.heading||'"Playfair Display", serif'};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 1.5rem;
  line-height: 1.2;
`,Sv=b(C.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.text.secondary};
  max-width: 700px;
  margin: 0 auto 3rem;
`,oh=b.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,jv=b.div`
  text-align: center;
  margin-bottom: 5rem;
`,kO=b(C.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(210, 155, 132, 0.3);
  transition: all 0.3s ease;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,zO=b(C.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  color: white;
  font-weight: 600;
  padding: 1.15rem 2.45rem;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,BO={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,staggerChildren:.2}}},jl={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},$O=()=>{const{t:e}=ke();return d.jsxs(wO,{children:[d.jsx(SO,{}),d.jsxs(jO,{children:[d.jsxs(AO,{variants:BO,initial:"hidden",animate:"visible",children:[d.jsx(C.div,{variants:jl,children:d.jsx(TO,{children:e("beauty.hero.title","Современный салон красоты в сердце Пхукета")})}),d.jsx(C.div,{variants:jl,children:d.jsx(EO,{children:e("beauty.hero.subtitle","Мы предлагаем широкий спектр услуг по уходу за волосами, кожей и телом с использованием премиальных продуктов и инновационных методик.")})}),d.jsxs(CO,{variants:jl,children:[d.jsxs(Rf,{children:[d.jsx(Df,{children:"10+"}),d.jsx(Mf,{children:e("beauty.hero.stat1","Лет опыта")})]}),d.jsxs(Rf,{children:[d.jsx(Df,{children:"15+"}),d.jsx(Mf,{children:e("beauty.hero.stat2","Мастеров")})]}),d.jsxs(Rf,{children:[d.jsx(Df,{children:"4.9"}),d.jsx(Mf,{children:e("beauty.hero.stat3","Рейтинг")})]})]}),d.jsxs(RO,{variants:jl,children:[d.jsxs(kO,{as:Lt,to:"/booking",children:[e("beauty.hero.cta_primary","Записаться"),d.jsx(or,{})]}),d.jsxs(zO,{as:Lt,to:"/beauty-services",children:[e("beauty.hero.cta_secondary","Узнать больше"),d.jsx(er,{})]})]})]}),d.jsxs(DO,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.3},children:[d.jsx(MO,{src:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Beauty salon",initial:{y:20},animate:{y:0},transition:{duration:3,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}}),d.jsx(C.div,{style:{position:"absolute",top:"15%",right:"-5%",backgroundColor:"white",borderRadius:"50%",padding:"12px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.1)",display:"flex",alignItems:"center",justifyContent:"center"},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5,delay:1.2},children:d.jsx(er,{style:{width:30,height:30,color:"#D29B84"}})}),d.jsxs(C.div,{style:{position:"absolute",bottom:"15%",left:"-5%",backgroundColor:"white",borderRadius:"20px",padding:"15px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.1)",display:"flex",alignItems:"center",gap:"10px"},initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:1.5},children:[d.jsx("div",{style:{display:"flex"},children:[1,2,3,4,5].map(i=>d.jsx(yi,{style:{width:20,height:20,color:"#F59E0B"}},i))}),d.jsx("span",{style:{fontWeight:600},children:e("beauty.hero.reviews","500+ отзывов")})]})]})]})]})},NO=b.section`
  padding: 8rem 2rem;
  background-color: ${e=>e.theme.colors.background};
`,LO=b.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
`,kx=b.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: ${e=>e.active?"600":"400"};
  color: ${e=>e.active?e.theme.colors.primary:e.theme.colors.text.secondary};
  padding: 0.5rem 2rem;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${e=>e.active?e.theme.colors.primary:"transparent"};
    border-radius: 3px;
    transition: all 0.3s ease;
  }
`,VO=b(C.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Av=b(C.div)`
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`,_O=b.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${Av}:hover & img {
    transform: scale(1.1);
  }
`,HO=b.div`
  padding: 2rem;
`,UO=b.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${e=>e.theme.colors.text.primary};
`,PO=b.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 1.5rem;
`,FO=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`,qO=b.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary};
`,YO=b.button`
  padding: 0.6rem 1.5rem;
  background-color: rgba(210, 155, 132, 0.1);
  color: ${e=>e.theme.colors.primary};
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary};
    color: white;
  }
`,GO=b.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,KO=b.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: ${e=>e.theme.colors.text.secondary};
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${e=>e.theme.colors.primary};
  }
`,ZO=[{id:1,title:"Стрижка и укладка",description:"Профессиональная стрижка и укладка от опытных стилистов.",price:"1,200 ฿",image:"https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["60 мин","Консультация","Стайлинг"]},{id:2,title:"Окрашивание волос",description:"Окрашивание волос с использованием премиальных красителей.",price:"2,500 ฿",image:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["120 мин","Консультация","Уход за волосами"]},{id:3,title:"Маникюр и педикюр",description:"Комплексный уход за ногтями рук и ног с покрытием гель-лаком.",price:"1,800 ฿",image:"https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["90 мин","Дизайн ногтей","Увлажнение"]},{id:4,title:"Уход за лицом",description:"Процедуры по уходу за лицом с использованием органической косметики.",price:"1,500 ฿",image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["60 мин","Глубокое очищение","Массаж лица"]},{id:5,title:"Наращивание ресниц",description:"Профессиональное наращивание ресниц различных объемов.",price:"1,600 ฿",image:"https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["90 мин","Консультация","Натуральный эффект"]},{id:6,title:"Макияж",description:"Профессиональный макияж для любого случая с использованием люксовых брендов.",price:"1,300 ฿",image:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["60 мин","Консультация","Индивидуальный подход"]}],IO=[{id:1,title:"Тайский массаж",description:"Традиционный тайский массаж для полного расслабления и восстановления энергии.",price:"1,500 ฿",image:"https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["60 мин","Восстановление","Релакс"]},{id:2,title:"Аромамассаж",description:"Ароматерапевтический массаж с использованием эфирных масел премиум-класса.",price:"1,800 ฿",image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["90 мин","Расслабление","Ароматерапия"]},{id:3,title:"Массаж горячими камнями",description:"Специальная техника массажа с использованием гладких нагретых камней.",price:"2,000 ฿",image:"https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["90 мин","Детоксикация","Глубокая релаксация"]},{id:4,title:"Травяной пилинг",description:"Обновление кожи с помощью натуральных тайских трав и скрабов.",price:"1,300 ฿",image:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["45 мин","Очищение","Обновление"]},{id:5,title:"СПА для лица",description:"Комплексный уход за лицом с использованием натуральных компонентов.",price:"1,700 ฿",image:"https://images.unsplash.com/photo-1515489202285-5675ba9bc5c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["60 мин","Питание","Омоложение"]},{id:6,title:"Фут-массаж",description:"Традиционный тайский массаж стоп для снятия усталости и напряжения.",price:"1,100 ฿",image:"https://images.unsplash.com/photo-1582653521877-0f6cc0b1c85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",features:["45 мин","Снятие напряжения","Точечное воздействие"]}],XO={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},QO={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5}}},JO=()=>{const{t:e}=ke(),[i,a]=w.useState("beauty"),s=i==="beauty"?ZO:IO;return d.jsx(NO,{id:"services",children:d.jsxs(oh,{children:[d.jsxs(jv,{children:[d.jsx(vv,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:e("beauty.services.tag","Наши услуги")}),d.jsx(wv,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:e("beauty.services.title","Предлагаем широкий спектр услуг")}),d.jsx(Sv,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:e("beauty.services.description","Мы используем только лучшие косметические средства и инновационные техники для достижения максимального результата. Каждая процедура адаптирована под индивидуальные потребности клиента.")})]}),d.jsxs(LO,{children:[d.jsx(kx,{active:i==="beauty",onClick:()=>a("beauty"),children:e("beauty.services.tab_beauty","Красота")}),d.jsx(kx,{active:i==="spa",onClick:()=>a("spa"),children:e("beauty.services.tab_spa","СПА")})]}),d.jsx(ia,{mode:"wait",children:d.jsx(VO,{variants:XO,initial:"hidden",whileInView:"visible",viewport:{once:!0},exit:{opacity:0},children:s.map(l=>d.jsxs(Av,{variants:QO,children:[d.jsx(_O,{children:d.jsx("img",{src:l.image,alt:l.title})}),d.jsxs(HO,{children:[d.jsx(UO,{children:l.title}),d.jsx(PO,{children:l.description}),d.jsx(GO,{children:l.features.map((u,f)=>d.jsxs(KO,{children:[d.jsx(ET,{}),u]},f))}),d.jsxs(FO,{children:[d.jsx(qO,{children:l.price}),d.jsx(YO,{children:e("beauty.services.book_button","Забронировать")})]})]})]},l.id))},i)})]})})},WO=b.section`
  padding: 8rem 2rem;
  background-color: ${e=>e.theme.colors.surface};
`,ek=b(C.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Tv=b(C.div)`
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`,tk=b.div`
  height: 300px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${Tv}:hover & img {
    transform: scale(1.05);
  }
`,ik=b.div`
  padding: 2rem;
`,nk=b.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,ak=b.p`
  font-size: 1rem;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`,rk=b.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 1.5rem;
`,sk=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`,ok=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
  svg {
    width: 18px;
    height: 18px;
    color: #F59E0B;
  }
  
  span {
    font-weight: 600;
    font-size: 0.95rem;
  }
`,lk=b.div`
  font-size: 0.95rem;
  font-weight: 600;
`,ck=[{id:1,name:"Анна Петрова",position:"Стилист-парикмахер",description:"Более 8 лет опыта в создании уникальных образов. Специализируется на сложном окрашивании и стрижках.",image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",rating:4.9,experience:"8 лет"},{id:2,name:"Михаил Соколов",position:"Визажист",description:"Опытный визажист с международным образованием. Создает безупречный макияж для любого случая.",image:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",rating:4.8,experience:"6 лет"},{id:3,name:"Елена Иванова",position:"Мастер маникюра и педикюра",description:"Профессионал в области ухода за ногтями. Специализируется на сложном дизайне и спа-процедурах.",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",rating:4.9,experience:"7 лет"}],uk={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},dk={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5}}},fk=()=>{const{t:e}=ke();return d.jsx(WO,{id:"team",children:d.jsxs(oh,{children:[d.jsxs(jv,{children:[d.jsx(vv,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:e("beauty.team.tag","Наши специалисты")}),d.jsx(wv,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:e("beauty.team.title","Профессиональная команда")}),d.jsx(Sv,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:e("beauty.team.description","Наши опытные мастера прошли обучение в лучших школах красоты и постоянно совершенствуют свои навыки. Мы гордимся профессионализмом и творческим подходом наших специалистов.")})]}),d.jsx(ek,{variants:uk,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:ck.map(i=>d.jsxs(Tv,{variants:dk,children:[d.jsx(tk,{children:d.jsx("img",{src:i.image,alt:i.name})}),d.jsxs(ik,{children:[d.jsx(nk,{children:i.name}),d.jsx(ak,{children:i.position}),d.jsx(rk,{children:i.description}),d.jsxs(sk,{children:[d.jsxs(ok,{children:[d.jsx(yi,{}),d.jsx("span",{children:i.rating})]}),d.jsxs(lk,{children:[e("beauty.team.experience","Опыт"),": ",i.experience]})]})]})]},i.id))})]})})},hk=b.section`
  padding: 8rem 2rem;
  background-color: ${e=>e.theme.colors.background};
`,pk=b.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`,mk=b(C.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,gk=b.span`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: rgba(210, 155, 132, 0.1);
  color: ${e=>e.theme.colors.primary};
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
`,yk=b.h2`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  font-family: ${e=>e.theme.fonts.heading||'"Playfair Display", serif'};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: ${e=>e.theme.colors.text.primary};
`,xk=b.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 2rem;
`,bk=b.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`,zx=b.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Bx=b.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgba(210, 155, 132, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${e=>e.theme.colors.primary};
  }
`,$x=b.div`
  display: flex;
  flex-direction: column;
`,Nx=b.p`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: ${e=>e.theme.colors.text.primary};
`,Lx=b.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,vk=b.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(210, 155, 132, 0.3);
  transition: all 0.3s ease;
  text-decoration: none;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary}CC;
  }
`,wk=b(C.div)`
  position: relative;
`,Sk=b.div`
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,jk=b(C.div)`
  position: absolute;
  bottom: -1.5rem;
  left: -1.5rem;
  background-color: white;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 2;
`,Ak=b.div`
  display: flex;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #F59E0B;
  }
`,Tk=b.p`
  font-weight: 600;
  font-size: 1rem;
`,Ek=()=>{const{t:e}=ke();return d.jsx(hk,{id:"booking",children:d.jsx(oh,{children:d.jsxs(pk,{children:[d.jsxs(mk,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7},children:[d.jsx(gk,{children:e("beauty.booking.label","Бронирование")}),d.jsx(yk,{children:e("beauty.booking.title","Запишитесь на процедуру прямо сейчас")}),d.jsx(xk,{children:e("beauty.booking.description","Забронируйте удобное время для процедуры и позвольте нашим мастерам позаботиться о вашей красоте и самочувствии.")}),d.jsxs(bk,{children:[d.jsxs(zx,{children:[d.jsx(Bx,{children:d.jsx(wn,{})}),d.jsxs($x,{children:[d.jsx(Nx,{children:e("beauty.booking.open_hours","Часы работы")}),d.jsx(Lx,{children:"10:00 - 21:00"})]})]}),d.jsxs(zx,{children:[d.jsx(Bx,{children:d.jsx(Qt,{})}),d.jsxs($x,{children:[d.jsx(Nx,{children:e("beauty.booking.reservation","Резервация")}),d.jsx(Lx,{children:e("common.phone_number","+66 624 805 877")})]})]})]}),d.jsxs(vk,{href:"tel:+66624805877",children:[e("beauty.booking.call_now","Позвонить сейчас"),d.jsx(Qt,{})]})]}),d.jsxs(wk,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7},children:[d.jsx(Sk,{children:d.jsx("img",{src:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Beauty salon interior"})}),d.jsxs(jk,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},children:[d.jsx(Ak,{children:[1,2,3,4,5].map(i=>d.jsx(yi,{},i))}),d.jsx(Tk,{children:"4.9 (2.8k+)"})]})]})]})})})},Ck=()=>d.jsxs(OO,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[d.jsx($O,{}),d.jsx(JO,{}),d.jsx(fk,{}),d.jsx(Ek,{})]}),Rk=b.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`,Dk=({title:e,description:i,icon:a="🏗️"})=>{const{t:s}=ke();return d.jsxs(Rk,{children:[d.jsx("div",{className:"text-5xl mb-6",children:a}),d.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-4",children:e}),d.jsx("p",{className:"text-gray-600 max-w-2xl mb-8",children:i}),d.jsx(Lt,{to:"/",className:"btn-primary",children:s("navigation.home")})]})},Mk=()=>{const{t:e}=ke();return d.jsx(Dk,{title:e("contacts.title"),description:e("contacts.form.title"),icon:"📞"})};function Ok(){const{i18n:e}=ke();return w.useEffect(()=>{document.documentElement.dir=e.dir(),document.documentElement.lang=e.language},[e.language]),d.jsx(M7,{theme:oS,children:d.jsx(v4,{children:d.jsx("div",{className:"App",children:d.jsx(uE,{children:d.jsxs(X3,{children:[d.jsx(Fn,{path:"/",element:d.jsx(cR,{})}),d.jsx(Fn,{path:"/restaurant",element:d.jsx(ER,{})}),d.jsx(Fn,{path:"/spa",element:d.jsx(MM,{})}),d.jsx(Fn,{path:"/sports",element:d.jsx(vO,{})}),d.jsx(Fn,{path:"/beauty",element:d.jsx(Ck,{})}),d.jsx(Fn,{path:"/contacts",element:d.jsx(Mk,{})})]})})})})})}const kk=()=>d.jsx("div",{className:"flex items-center justify-center h-screen",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})});a3.createRoot(document.getElementById("root")).render(d.jsx(vt.StrictMode,{children:d.jsx(w.Suspense,{fallback:d.jsx(kk,{}),children:d.jsx(Ok,{})})}));
