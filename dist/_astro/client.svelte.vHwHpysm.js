const zt="[",Gt="]",X={},w=Symbol(),Jt=["touchstart","touchmove"];function Qt(t){return Jt.includes(t)}const Xt=!1;var Nt=Array.isArray,te=Array.from,ee=Object.defineProperty,j=Object.getOwnPropertyDescriptor,re=Object.prototype,ne=Array.prototype,le=Object.getPrototypeOf;const D=2,Ot=4,yt=8,Rt=16,A=32,ut=64,vt=128,K=256,et=512,y=1024,C=2048,U=4096,rt=8192,Y=16384,ue=32768,ie=65536,se=1<<19,oe=1<<20,ft=Symbol("$state");function ae(t){return t===this.v}function fe(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ce(){throw new Error("https://svelte.dev/e/hydration_failed")}function ve(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _e(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function de(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function he(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let pe=!1;function N(t,e){var r={f:0,v:t,reactions:null,equals:ae,version:0};return r}function O(t,e){return p!==null&&Ae()&&p.f&(D|Rt)&&(F===null||!F.includes(t))&&he(),ye(t,e)}function ye(t,e){return t.equals(e)||(t.v=e,t.version=Bt(),kt(t,C),d!==null&&d.f&y&&!(d.f&A)&&(h!==null&&h.includes(t)?(b(d,C),at(d)):k===null?De([t]):k.push(t))),e}function kt(t,e){var r=t.reactions;if(r!==null)for(var l=r.length,n=0;n<l;n++){var u=r[n],s=u.f;s&C||(b(u,e),s&(y|K)&&(s&D?kt(u,U):at(u)))}}function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let B=!1;function z(t){B=t}let R;function _t(t){if(t===null)throw Dt(),X;return R=t}function At(){return _t(wt(R))}function $(t,e=null,r){if(typeof t!="object"||t===null||ft in t)return t;const l=le(t);if(l!==re&&l!==ne)return t;var n=new Map,u=Nt(t),s=N(0);u&&n.set("length",N(t.length));var v;return new Proxy(t,{defineProperty(f,i,o){(!("value"in o)||o.configurable===!1||o.enumerable===!1||o.writable===!1)&&ve();var a=n.get(i);return a===void 0?(a=N(o.value),n.set(i,a)):O(a,$(o.value,v)),!0},deleteProperty(f,i){var o=n.get(i);if(o===void 0)i in f&&n.set(i,N(w));else{if(u&&typeof i=="string"){var a=n.get("length"),c=Number(i);Number.isInteger(c)&&c<a.v&&O(a,c)}O(o,w),mt(s)}return!0},get(f,i,o){if(i===ft)return t;var a=n.get(i),c=i in f;if(a===void 0&&(!c||j(f,i)?.writable)&&(a=N($(c?f[i]:w,v)),n.set(i,a)),a!==void 0){var _=G(a);return _===w?void 0:_}return Reflect.get(f,i,o)},getOwnPropertyDescriptor(f,i){var o=Reflect.getOwnPropertyDescriptor(f,i);if(o&&"value"in o){var a=n.get(i);a&&(o.value=G(a))}else if(o===void 0){var c=n.get(i),_=c?.v;if(c!==void 0&&_!==w)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return o},has(f,i){if(i===ft)return!0;var o=n.get(i),a=o!==void 0&&o.v!==w||Reflect.has(f,i);if(o!==void 0||d!==null&&(!a||j(f,i)?.writable)){o===void 0&&(o=N(a?$(f[i],v):w),n.set(i,o));var c=G(o);if(c===w)return!1}return a},set(f,i,o,a){var c=n.get(i),_=i in f;if(u&&i==="length")for(var E=o;E<c.v;E+=1){var m=n.get(E+"");m!==void 0?O(m,w):E in f&&(m=N(w),n.set(E+"",m))}c===void 0?(!_||j(f,i)?.writable)&&(c=N(void 0),O(c,$(o,v)),n.set(i,c)):(_=c.v!==w,O(c,$(o,v)));var W=Reflect.getOwnPropertyDescriptor(f,i);if(W?.set&&W.set.call(a,o),!_){if(u&&typeof i=="string"){var Z=n.get("length"),T=Number(i);Number.isInteger(T)&&T>=Z.v&&O(Z,T+1)}mt(s)}return!0},ownKeys(f){G(s);var i=Reflect.ownKeys(f).filter(c=>{var _=n.get(c);return _===void 0||_.v!==w});for(var[o,a]of n)a.v!==w&&!(o in f)&&i.push(o);return i},setPrototypeOf(){_e()}})}function mt(t,e=1){O(t,t.v+e)}var xt,St,Ft;function dt(){if(xt===void 0){xt=window;var t=Element.prototype,e=Node.prototype;St=j(e,"firstChild").get,Ft=j(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function we(t=""){return document.createTextNode(t)}function Ct(t){return St.call(t)}function wt(t){return Ft.call(t)}function ge(t){t.textContent=""}function Pt(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var l=e[r];l.f&D?gt(l):P(l)}}}function Ee(t){for(var e=t.parent;e!==null;){if(!(e.f&D))return e;e=e.parent}return null}function It(t){var e,r=d;M(Ee(t));try{Pt(t),e=Vt(t)}finally{M(r)}return e}function $t(t){var e=It(t),r=(S||t.f&K)&&t.deps!==null?U:y;b(t,r),t.equals(e)||(t.v=e,t.version=Bt())}function gt(t){Pt(t),V(t,0),b(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function me(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function it(t,e,r,l=!0){var n=(t&ut)!==0,u=d,s={ctx:x,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|C,first:null,fn:e,last:null,next:null,parent:n?null:u,prev:null,teardown:null,transitions:null,version:0};if(r){var v=q;try{bt(!0),Et(s),s.f|=ue}catch(o){throw P(s),o}finally{bt(v)}}else e!==null&&at(s);var f=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&oe)===0;if(!f&&!n&&l&&(u!==null&&me(s,u),p!==null&&p.f&D)){var i=p;(i.children??=[]).push(s)}return s}function xe(t){const e=it(yt,null,!1);return b(e,y),e.teardown=t,e}function be(t){const e=it(ut,t,!0);return(r={})=>new Promise(l=>{r.outro?Re(e,()=>{P(e),l(void 0)}):(P(e),l(void 0))})}function Te(t){return it(Ot,t,!1)}function Ne(t,e=!0){return it(yt|A,t,!0,e)}function qt(t){var e=t.teardown;if(e!==null){const r=p;L(null);try{e.call(null)}finally{L(r)}}}function Lt(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)gt(e[r])}}function Mt(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var l=r.next;P(r,e),r=l}}function Oe(t){for(var e=t.first;e!==null;){var r=e.next;e.f&A||P(e),e=r}}function P(t,e=!0){var r=!1;if((e||t.f&se)&&t.nodes_start!==null){for(var l=t.nodes_start,n=t.nodes_end;l!==null;){var u=l===n?null:wt(l);l.remove(),l=u}r=!0}Mt(t,e&&!r),Lt(t),V(t,0),b(t,Y);var s=t.transitions;if(s!==null)for(const f of s)f.stop();qt(t);var v=t.parent;v!==null&&v.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var e=t.parent,r=t.prev,l=t.next;r!==null&&(r.next=l),l!==null&&(l.prev=r),e!==null&&(e.first===t&&(e.first=l),e.last===t&&(e.last=r))}function Re(t,e){var r=[];jt(t,r,!0),ke(r,()=>{P(t),e()})}function ke(t,e){var r=t.length;if(r>0){var l=()=>--r||e();for(var n of t)n.out(l)}else e()}function jt(t,e,r){if(!(t.f&rt)){if(t.f^=rt,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&e.push(s);for(var l=t.first;l!==null;){var n=l.next,u=(l.f&ie)!==0||(l.f&A)!==0;jt(l,e,u?r:!1),l=n}}}let tt=!1,nt=!1,lt=null,q=!1;function bt(t){q=t}let ht=[],H=0;let p=null;function L(t){p=t}let d=null;function M(t){d=t}let F=null,h=null,g=0,k=null;function De(t){k=t}let Ht=1,S=!1,x=null;function Bt(){return++Ht}function Ae(){return!pe}function st(t){var e=t.f;if(e&C)return!0;if(e&U){var r=t.deps,l=(e&K)!==0;if(r!==null){var n;if(e&et){for(n=0;n<r.length;n++)(r[n].reactions??=[]).push(t);t.f^=et}for(n=0;n<r.length;n++){var u=r[n];if(st(u)&&$t(u),l&&d!==null&&!S&&!u?.reactions?.includes(t)&&(u.reactions??=[]).push(t),u.version>t.version)return!0}}(!l||d!==null&&!S)&&b(t,y)}return!1}function Se(t,e){for(var r=e;r!==null;){if(r.f&vt)try{r.fn(t);return}catch{r.f^=vt}r=r.parent}throw tt=!1,t}function Fe(t){return(t.f&Y)===0&&(t.parent===null||(t.parent.f&vt)===0)}function ot(t,e,r,l){if(tt){if(r===null&&(tt=!1),Fe(e))throw t;return}r!==null&&(tt=!0);{Se(t,e);return}}function Vt(t){var e=h,r=g,l=k,n=p,u=S,s=F,v=x,f=t.f;h=null,g=0,k=null,p=f&(A|ut)?null:t,S=!q&&(f&K)!==0,F=null,x=t.ctx;try{var i=(0,t.fn)(),o=t.deps;if(h!==null){var a;if(V(t,g),o!==null&&g>0)for(o.length=g+h.length,a=0;a<h.length;a++)o[g+a]=h[a];else t.deps=o=h;if(!S)for(a=g;a<o.length;a++)(o[a].reactions??=[]).push(t)}else o!==null&&g<o.length&&(V(t,g),o.length=g);return i}finally{h=e,g=r,k=l,p=n,S=u,F=s,x=v}}function Ce(t,e){let r=e.reactions;if(r!==null){var l=r.indexOf(t);if(l!==-1){var n=r.length-1;n===0?r=e.reactions=null:(r[l]=r[n],r.pop())}}r===null&&e.f&D&&(h===null||!h.includes(e))&&(b(e,U),e.f&(K|et)||(e.f^=et),V(e,0))}function V(t,e){var r=t.deps;if(r!==null)for(var l=e;l<r.length;l++)Ce(t,r[l])}function Et(t){var e=t.f;if(!(e&Y)){b(t,y);var r=d,l=x;d=t;try{e&Rt?Oe(t):Mt(t),Lt(t),qt(t);var n=Vt(t);t.teardown=typeof n=="function"?n:null,t.version=Ht}catch(u){ot(u,t,r,l||t.ctx)}finally{d=r}}}function Pe(){if(H>1e3){H=0;try{fe()}catch(t){if(lt!==null)ot(t,lt,null);else throw t}}H++}function Ie(t){var e=t.length;if(e!==0){Pe();var r=q;q=!0;try{for(var l=0;l<e;l++){var n=t[l];n.f&y||(n.f^=y);var u=[];Kt(n,u),$e(u)}}finally{q=r}}}function $e(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var l=t[r];if(!(l.f&(Y|rt)))try{st(l)&&(Et(l),l.deps===null&&l.first===null&&l.nodes_start===null&&(l.teardown===null?Yt(l):l.fn=null))}catch(n){ot(n,l,null,l.ctx)}}}function qe(){if(nt=!1,H>1001)return;const t=ht;ht=[],Ie(t),nt||(H=0,lt=null)}function at(t){nt||(nt=!0,queueMicrotask(qe)),lt=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(ut|A)){if(!(r&y))return;e.f^=y}}ht.push(e)}function Kt(t,e){var r=t.first,l=[];t:for(;r!==null;){var n=r.f,u=(n&A)!==0,s=u&&(n&y)!==0,v=r.next;if(!s&&!(n&rt))if(n&yt){if(u)r.f^=y;else try{st(r)&&Et(r)}catch(a){ot(a,r,null,r.ctx)}var f=r.first;if(f!==null){r=f;continue}}else n&Ot&&l.push(r);if(v===null){let a=r.parent;for(;a!==null;){if(t===a)break t;var i=a.next;if(i!==null){r=i;continue t}a=a.parent}}r=v}for(var o=0;o<l.length;o++)f=l[o],e.push(f),Kt(f,e)}function G(t){var e=t.f,r=(e&D)!==0;if(r&&e&Y){var l=It(t);return gt(t),l}if(p!==null){F!==null&&F.includes(t)&&de();var n=p.deps;h===null&&n!==null&&n[g]===t?g++:h===null?h=[t]:h.push(t),k!==null&&d!==null&&d.f&y&&!(d.f&A)&&k.includes(t)&&(b(d,C),at(d))}else if(r&&t.deps===null)for(var u=t,s=u.parent,v=u;s!==null;)if(s.f&D){var f=s;v=f,s=f.parent}else{var i=s;i.deriveds?.includes(v)||(i.deriveds??=[]).push(v);break}return r&&(u=t,st(u)&&$t(u)),t.v}const Le=~(C|U|y);function b(t,e){t.f=t.f&Le|e}function Me(t,e=!1,r){x={p:x,c:null,e:null,m:!1,s:t,x:null,l:null}}function Ye(t){const e=x;if(e!==null){const s=e.e;if(s!==null){var r=d,l=p;e.e=null;try{for(var n=0;n<s.length;n++){var u=s[n];M(u.effect),L(u.reaction),Te(u.fn)}}finally{M(r),L(l)}}x=e.p,e.m=!0}return{}}const je=new Set,Tt=new Set;function J(t){var e=this,r=e.ownerDocument,l=t.type,n=t.composedPath?.()||[],u=n[0]||t.target,s=0,v=t.__root;if(v){var f=n.indexOf(v);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var i=n.indexOf(e);if(i===-1)return;f<=i&&(s=f)}if(u=n[s]||t.target,u!==e){ee(t,"currentTarget",{configurable:!0,get(){return u||r}});var o=p,a=d;L(null),M(null);try{for(var c,_=[];u!==null;){var E=u.assignedSlot||u.parentNode||u.host||null;try{var m=u["__"+l];if(m!==void 0&&!u.disabled)if(Nt(m)){var[W,...Z]=m;W.apply(u,[t,...Z])}else m.call(u,t)}catch(T){c?_.push(T):c=T}if(t.cancelBubble||E===e||E===null)break;u=E}if(c){for(let T of _)queueMicrotask(()=>{throw T});throw c}}finally{t.__root=e,delete t.currentTarget,L(o),M(a)}}}function He(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Ut(t,e){var r=d;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function Wt(t,e){return Zt(t,e)}function Be(t,e){dt(),e.intro=e.intro??!1;const r=e.target,l=B,n=R;try{for(var u=Ct(r);u&&(u.nodeType!==8||u.data!==zt);)u=wt(u);if(!u)throw X;z(!0),_t(u),At();const s=Zt(t,{...e,anchor:u});if(R===null||R.nodeType!==8||R.data!==Gt)throw Dt(),X;return z(!1),s}catch(s){if(s===X)return e.recover===!1&&ce(),dt(),ge(r),z(!1),Wt(t,e);throw s}finally{z(l),_t(n)}}const I=new Map;function Zt(t,{target:e,anchor:r,props:l={},events:n,context:u,intro:s=!0}){dt();var v=new Set,f=a=>{for(var c=0;c<a.length;c++){var _=a[c];if(!v.has(_)){v.add(_);var E=Qt(_);e.addEventListener(_,J,{passive:E});var m=I.get(_);m===void 0?(document.addEventListener(_,J,{passive:E}),I.set(_,1)):I.set(_,m+1)}}};f(te(je)),Tt.add(f);var i=void 0,o=be(()=>{var a=r??e.appendChild(we());return Ne(()=>{if(u){Me({});var c=x;c.c=u}n&&(l.$$events=n),B&&Ut(a,null),i=t(a,l)||{},B&&(d.nodes_end=R),u&&Ye()}),()=>{for(var c of v){e.removeEventListener(c,J);var _=I.get(c);--_===0?(document.removeEventListener(c,J),I.delete(c)):I.set(c,_)}Tt.delete(f),a!==r&&a.parentNode?.removeChild(a)}});return pt.set(i,o),i}let pt=new WeakMap;function Ve(t,e){const r=pt.get(t);return r?(pt.delete(t),r(e)):Promise.resolve()}function Q(t){return(e,...r)=>{var l=t(...r),n;if(B)n=R,At();else{var u=l.render().trim(),s=He(u);n=Ct(s),e.before(n)}const v=l.setup?.(n);Ut(n,n),typeof v=="function"&&xe(v)}}const ct=new WeakMap,Ue=t=>async(e,r,l,{client:n})=>{if(!t.hasAttribute("ssr"))return;let u,s,v={};for(const[i,o]of Object.entries(l))s??={},i==="default"?(s.default=!0,u=Q(()=>({render:()=>`<astro-slot>${o}</astro-slot>`}))):s[i]=Q(()=>({render:()=>`<astro-slot name="${i}">${o}</astro-slot>`})),i==="default"?v.children=Q(()=>({render:()=>`<astro-slot>${o}</astro-slot>`})):v[i]=Q(()=>({render:()=>`<astro-slot name="${i}">${o}</astro-slot>`}));const f={...r,children:u,$$slots:s,...v};if(ct.has(t))ct.get(t).setProps(f);else{const i=Ke(e,t,f,n!=="only");ct.set(t,i),t.addEventListener("astro:unmount",()=>i.destroy(),{once:!0})}};function Ke(t,e,r,l){let n=$(r);const s=(l?Be:Wt)(t,{target:e,props:n});return{setProps(v){Object.assign(n,v);for(const f in n)f in v||delete n[f]},destroy(){Ve(s)}}}export{Ue as default};