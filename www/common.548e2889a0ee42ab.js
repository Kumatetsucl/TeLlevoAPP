"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9629:(O,_,i)=>{i.d(_,{c:()=>r});var v=i(5349),a=i(967),l=i(9203);const r=(t,s)=>{let n,e;const h=(c,E,w)=>{if(typeof document>"u")return;const y=document.elementFromPoint(c,E);y&&s(y)?y!==n&&(o(),m(y,w)):o()},m=(c,E)=>{n=c,e||(e=n);const w=n;(0,v.w)(()=>w.classList.add("ion-activated")),E()},o=(c=!1)=>{if(!n)return;const E=n;(0,v.w)(()=>E.classList.remove("ion-activated")),c&&e!==n&&n.click(),n=void 0};return(0,l.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>h(c.currentX,c.currentY,a.a),onMove:c=>h(c.currentX,c.currentY,a.b),onEnd:()=>{o(!0),(0,a.h)(),e=void 0}})}},4874:(O,_,i)=>{i.d(_,{g:()=>a});var v=i(6225);const a=()=>{if(void 0!==v.w)return v.w.Capacitor}},5085:(O,_,i)=>{i.d(_,{i:()=>v});const v=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(O,_,i)=>{i.r(_),i.d(_,{startFocusVisible:()=>r});const v="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=t=>{let s=[],n=!0;const e=t?t.shadowRoot:document,h=t||document.body,m=p=>{s.forEach(u=>u.classList.remove(v)),p.forEach(u=>u.classList.add(v)),s=p},o=()=>{n=!1,m([])},c=p=>{n=l.includes(p.key),n||m([])},E=p=>{if(n&&void 0!==p.composedPath){const u=p.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));m(u)}},w=()=>{e.activeElement===h&&m([])};return e.addEventListener("keydown",c),e.addEventListener("focusin",E),e.addEventListener("focusout",w),e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("mousedown",o),{destroy:()=>{e.removeEventListener("keydown",c),e.removeEventListener("focusin",E),e.removeEventListener("focusout",w),e.removeEventListener("touchstart",o),e.removeEventListener("mousedown",o)},setFocus:m}}},9988:(O,_,i)=>{i.d(_,{c:()=>a});var v=i(839);const a=s=>{const n=s;let e;return{hasLegacyControl:()=>{if(void 0===e){const m=void 0!==n.label||l(n),o=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot,c=(0,v.h)(n);e=!0===n.legacy||!m&&!o&&null!==c}return e}}},l=s=>!!(r.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||t.includes(s.tagName)&&""!==s.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],t=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(O,_,i)=>{i.d(_,{I:()=>a,a:()=>n,b:()=>e,c:()=>s,d:()=>m,h:()=>h});var v=i(4874),a=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(a||{});const r={getEngine(){const o=window.TapticEngine;if(o)return o;const c=(0,v.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,v.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(o){const c=this.getEngine();if(!c)return;const E=this.isCapacitor()?o.style:o.style.toLowerCase();c.impact({style:E})},notification(o){const c=this.getEngine();if(!c)return;const E=this.isCapacitor()?o.type:o.type.toLowerCase();c.notification({type:E})},selection(){const o=this.isCapacitor()?a.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},t=()=>r.available(),s=()=>{t()&&r.selection()},n=()=>{t()&&r.selectionStart()},e=()=>{t()&&r.selectionChanged()},h=()=>{t()&&r.selectionEnd()},m=o=>{t()&&r.impact(o)}},2874:(O,_,i)=>{i.d(_,{I:()=>s,a:()=>m,b:()=>t,c:()=>E,d:()=>y,f:()=>o,g:()=>h,i:()=>e,p:()=>w,r:()=>p,s:()=>c});var v=i(5861),a=i(839),l=i(6710);const t="ion-content",s=".ion-content-scroll-host",n=`${t}, ${s}`,e=u=>"ION-CONTENT"===u.tagName,h=function(){var u=(0,v.Z)(function*(f){return e(f)?(yield new Promise(g=>(0,a.c)(f,g)),f.getScrollElement()):f});return function(g){return u.apply(this,arguments)}}(),m=u=>u.querySelector(s)||u.querySelector(n),o=u=>u.closest(n),c=(u,f)=>e(u)?u.scrollToTop(f):Promise.resolve(u.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),E=(u,f,g,M)=>e(u)?u.scrollByPoint(f,g,M):Promise.resolve(u.scrollBy({top:g,left:f,behavior:M>0?"smooth":"auto"})),w=u=>(0,l.b)(u,t),y=u=>{if(e(u)){const g=u.scrollY;return u.scrollY=!1,g}return u.style.setProperty("overflow","hidden"),!0},p=(u,f)=>{e(u)?u.scrollY=f:u.style.removeProperty("overflow")}},5307:(O,_,i)=>{i.d(_,{a:()=>v,b:()=>E,c:()=>n,d:()=>w,e:()=>C,f:()=>s,g:()=>y,h:()=>l,i:()=>a,j:()=>M,k:()=>D,l:()=>e,m:()=>o,n:()=>p,o:()=>m,p:()=>t,q:()=>r,r:()=>g,s:()=>d,t:()=>c,u:()=>u,v:()=>f,w:()=>h});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(O,_,i)=>{i.d(_,{c:()=>r,g:()=>t});var v=i(6225),a=i(839),l=i(6710);const r=(n,e,h)=>{let m,o;void 0!==v.w&&"MutationObserver"in v.w&&(m=new MutationObserver(y=>{for(const p of y)for(const u of p.addedNodes)if(u.nodeType===Node.ELEMENT_NODE&&u.slot===e)return h(),void(0,a.r)(()=>c(u))}),m.observe(n,{childList:!0}));const c=y=>{var p;o&&(o.disconnect(),o=void 0),o=new MutationObserver(u=>{h();for(const f of u)for(const g of f.removedNodes)g.nodeType===Node.ELEMENT_NODE&&g.slot===e&&w()}),o.observe(null!==(p=y.parentElement)&&void 0!==p?p:y,{subtree:!0,childList:!0})},w=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{m&&(m.disconnect(),m=void 0),w()}}},t=(n,e,h)=>{const m=null==n?0:n.toString().length,o=s(m,e);if(void 0===h)return o;try{return h(m,e)}catch(c){return(0,l.a)("Exception in provided `counterFormatter`.",c),o}},s=(n,e)=>`${n} / ${e}`},7484:(O,_,i)=>{i.d(_,{K:()=>r,a:()=>l});var v=i(4874),a=function(t){return t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE",t}(a||{}),l=function(t){return t.Body="body",t.Ionic="ionic",t.Native="native",t.None="none",t}(l||{});const r={getEngine(){const t=(0,v.g)();if(null!=t&&t.isPluginAvailable("Keyboard"))return t.Plugins.Keyboard},getResizeMode(){const t=this.getEngine();return null!=t&&t.getResizeMode?t.getResizeMode().catch(s=>{if(s.code!==a.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(O,_,i)=>{i.r(_),i.d(_,{KEYBOARD_DID_CLOSE:()=>t,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>D,keyboardDidClose:()=>u,keyboardDidOpen:()=>y,keyboardDidResize:()=>p,resetKeyboardAssist:()=>m,setKeyboardClose:()=>w,setKeyboardOpen:()=>E,startKeyboardAssist:()=>o,trackViewportChanges:()=>M});var v=i(7484);i(4874),i(6225);const r="ionKeyboardDidShow",t="ionKeyboardDidHide";let n={},e={},h=!1;const m=()=>{n={},e={},h=!1},o=d=>{if(v.K.getEngine())c(d);else{if(!d.visualViewport)return;e=D(d.visualViewport),d.visualViewport.onresize=()=>{M(d),y()||p(d)?E(d):u(d)&&w(d)}}},c=d=>{d.addEventListener("keyboardDidShow",C=>E(d,C)),d.addEventListener("keyboardDidHide",()=>w(d))},E=(d,C)=>{f(d,C),h=!0},w=d=>{g(d),h=!1},y=()=>!h&&n.width===e.width&&(n.height-e.height)*e.scale>150,p=d=>h&&!u(d),u=d=>h&&e.height===d.innerHeight,f=(d,C)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:C?C.keyboardHeight:d.innerHeight-e.height}});d.dispatchEvent(L)},g=d=>{const C=new CustomEvent(t);d.dispatchEvent(C)},M=d=>{n=Object.assign({},e),e=D(d.visualViewport)},D=d=>({width:Math.round(d.width),height:Math.round(d.height),offsetTop:d.offsetTop,offsetLeft:d.offsetLeft,pageTop:d.pageTop,pageLeft:d.pageLeft,scale:d.scale})},3459:(O,_,i)=>{i.d(_,{c:()=>s});var v=i(5861),a=i(6225),l=i(7484);const r=n=>{if(void 0===a.d||n===l.a.None||void 0===n)return null;const e=a.d.querySelector("ion-app");return null!=e?e:a.d.body},t=n=>{const e=r(n);return null===e?0:e.clientHeight},s=function(){var n=(0,v.Z)(function*(e){let h,m,o,c;const E=function(){var f=(0,v.Z)(function*(){const g=yield l.K.getResizeMode(),M=void 0===g?void 0:g.mode;h=()=>{void 0===c&&(c=t(M)),o=!0,w(o,M)},m=()=>{o=!1,w(o,M)},null==a.w||a.w.addEventListener("keyboardWillShow",h),null==a.w||a.w.addEventListener("keyboardWillHide",m)});return function(){return f.apply(this,arguments)}}(),w=(f,g)=>{e&&e(f,y(g))},y=f=>{if(0===c||c===t(f))return;const g=r(f);return null!==g?new Promise(M=>{const d=new ResizeObserver(()=>{g.clientHeight===c&&(d.disconnect(),M())});d.observe(g)}):void 0};return yield E(),{init:E,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",h),null==a.w||a.w.removeEventListener("keyboardWillHide",m),h=m=void 0},isKeyboardVisible:()=>o}});return function(h){return n.apply(this,arguments)}}()},3830:(O,_,i)=>{i.d(_,{c:()=>a});var v=i(5861);const a=()=>{let l;return{lock:function(){var t=(0,v.Z)(function*(){const s=l;let n;return l=new Promise(e=>n=e),void 0!==s&&(yield s),n});return function(){return t.apply(this,arguments)}}()}}},5857:(O,_,i)=>{i.d(_,{c:()=>l});var v=i(6225),a=i(839);const l=(r,t,s)=>{let n;const e=()=>!(void 0===t()||void 0!==r.label||null===s()),m=()=>{const c=t();if(void 0===c)return;if(!e())return void c.style.removeProperty("width");const E=s().scrollWidth;if(0===E&&null===c.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==n)return;const w=n=new IntersectionObserver(y=>{1===y[0].intersectionRatio&&(m(),w.disconnect(),n=void 0)},{threshold:.01,root:r});w.observe(c)}else c.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{e()&&(0,a.r)(()=>{m()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},3781:(O,_,i)=>{i.d(_,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(l,r,t)=>{const s=l*r/t-l+"ms",n=2*Math.PI*r/t;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(l,r,t)=>{const s=r/t,n=l*s-l+"ms",e=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,r,t)=>({y1:14,y2:26,style:{transform:`rotate(${360/t*r+(r<t/2?180:-180)}deg)`,"animation-delay":l*r/t-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,r,t)=>({y1:12,y2:20,style:{transform:`rotate(${360/t*r+(r<t/2?180:-180)}deg)`,"animation-delay":l*r/t-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,r,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/t-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,r,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/t-l+"ms"}})}}},8663:(O,_,i)=>{i.r(_),i.d(_,{createSwipeBackGesture:()=>t});var v=i(839),a=i(5085),l=i(9203);i(619);const t=(s,n,e,h,m)=>{const o=s.ownerDocument.defaultView;let c=(0,a.i)(s);const w=g=>c?-g.deltaX:g.deltaX;return(0,l.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:g=>(c=(0,a.i)(s),(g=>{const{startX:D}=g;return c?D>=o.innerWidth-50:D<=50})(g)&&n()),onStart:e,onMove:g=>{const D=w(g)/o.innerWidth;h(D)},onEnd:g=>{const M=w(g),D=o.innerWidth,d=M/D,C=(g=>c?-g.velocityX:g.velocityX)(g),L=C>=0&&(C>.2||M>D/2),b=(L?1-d:d)*D;let T=0;if(b>5){const A=b/Math.abs(C);T=Math.min(A,540)}m(L,d<=0?.01:(0,v.l)(0,d,.9999),T)}})}},5564:(O,_,i)=>{i.d(_,{w:()=>v});const v=(r,t,s)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(e=>{s(a(e,t))});return n.observe(r,{childList:!0,subtree:!0}),n},a=(r,t)=>{let s;return r.forEach(n=>{for(let e=0;e<n.addedNodes.length;e++)s=l(n.addedNodes[e],t)||s}),s},l=(r,t)=>{if(1!==r.nodeType)return;const s=r;return(s.tagName===t.toUpperCase()?[s]:Array.from(s.querySelectorAll(t))).find(e=>e.value===s.value)}},6466:(O,_,i)=>{i.d(_,{e:()=>r});var v=i(5861),a=i(6242),l=i(2014);let r=(()=>{var t;class s{constructor(e){this.storage=e,this._storage=null,this.initPromise=null,this.init()}init(){var e=this;return(0,v.Z)(function*(){e.initPromise=e.initStorage(),yield e.initPromise})()}initStorage(){var e=this;return(0,v.Z)(function*(){e._storage=yield e.storage.create()})()}getStorage(){return this._storage}whenInitialized(){var e=this;return(0,v.Z)(function*(){return e.initPromise?e.initPromise:Promise.resolve()})()}}return(t=s).\u0275fac=function(e){return new(e||t)(a.LFG(l.K))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),s})()},3554:(O,_,i)=>{i.d(_,{e:()=>t});var v=i(6814),a=i(95),l=i(6728),r=i(6242);let t=(()=>{var s;class n{}return(s=n).\u0275fac=function(h){return new(h||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[v.ez,a.u5,l.Pc]}),n})()}}]);