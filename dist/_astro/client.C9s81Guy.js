import{$ as w,b as K,g as I,d as q,c as J,a as C,e as V}from"./solid.DR30-Cs6.js";import{h as X,b as Y}from"./web.Cew7HA3R.js";const L=Symbol("store-raw"),P=Symbol("store-node"),O=Symbol("store-has"),M=Symbol("store-self");function W(n){let e=n[w];if(!e&&(Object.defineProperty(n,w,{value:e=new Proxy(n,Q)}),!Array.isArray(n))){const r=Object.keys(n),f=Object.getOwnPropertyDescriptors(n);for(let o=0,i=r.length;o<i;o++){const l=r[o];f[l].get&&Object.defineProperty(n,l,{enumerable:f[l].enumerable,get:f[l].get.bind(e)})}}return e}function y(n){let e;return n!=null&&typeof n=="object"&&(n[w]||!(e=Object.getPrototypeOf(n))||e===Object.prototype||Array.isArray(n))}function $(n,e=new Set){let r,f,o,i;if(r=n!=null&&n[L])return r;if(!y(n)||e.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):e.add(n);for(let l=0,d=n.length;l<d;l++)o=n[l],(f=$(o,e))!==o&&(n[l]=f)}else{Object.isFrozen(n)?n=Object.assign({},n):e.add(n);const l=Object.keys(n),d=Object.getOwnPropertyDescriptors(n);for(let t=0,c=l.length;t<c;t++)i=l[t],!d[i].get&&(o=n[i],(f=$(o,e))!==o&&(n[i]=f))}return n}function R(n,e){let r=n[e];return r||Object.defineProperty(n,e,{value:r=Object.create(null)}),r}function N(n,e,r){if(n[e])return n[e];const[f,o]=J(r,{equals:!1,internal:!0});return f.$=o,n[e]=f}function B(n,e){const r=Reflect.getOwnPropertyDescriptor(n,e);return!r||r.get||!r.configurable||e===w||e===P||(delete r.value,delete r.writable,r.get=()=>n[w][e]),r}function H(n){I()&&N(R(n,P),M)()}function G(n){return H(n),Reflect.ownKeys(n)}const Q={get(n,e,r){if(e===L)return n;if(e===w)return r;if(e===K)return H(n),r;const f=R(n,P),o=f[e];let i=o?o():n[e];if(e===P||e===O||e==="__proto__")return i;if(!o){const l=Object.getOwnPropertyDescriptor(n,e);I()&&(typeof i!="function"||n.hasOwnProperty(e))&&!(l&&l.get)&&(i=N(f,e,i)())}return y(i)?W(i):i},has(n,e){return e===L||e===w||e===K||e===P||e===O||e==="__proto__"?!0:(I()&&N(R(n,O),e)(),e in n)},set(){return!0},deleteProperty(){return!0},ownKeys:G,getOwnPropertyDescriptor:B};function A(n,e,r,f=!1){if(!f&&n[e]===r)return;const o=n[e],i=n.length;r===void 0?(delete n[e],n[O]&&n[O][e]&&o!==void 0&&n[O][e].$()):(n[e]=r,n[O]&&n[O][e]&&o===void 0&&n[O][e].$());let l=R(n,P),d;if((d=N(l,e,o))&&d.$(()=>r),Array.isArray(n)&&n.length!==i){for(let t=n.length;t<i;t++)(d=l[t])&&d.$();(d=N(l,"length",i))&&d.$(n.length)}(d=l[M])&&d.$()}function z(n,e){const r=Object.keys(e);for(let f=0;f<r.length;f+=1){const o=r[f];A(n,o,e[o])}}function U(n,e){if(typeof e=="function"&&(e=e(n)),e=$(e),Array.isArray(e)){if(n===e)return;let r=0,f=e.length;for(;r<f;r++){const o=e[r];n[r]!==o&&A(n,r,o)}A(n,"length",f)}else z(n,e)}function T(n,e,r=[]){let f,o=n;if(e.length>1){f=e.shift();const l=typeof f,d=Array.isArray(n);if(Array.isArray(f)){for(let t=0;t<f.length;t++)T(n,[f[t]].concat(e),r);return}else if(d&&l==="function"){for(let t=0;t<n.length;t++)f(n[t],t)&&T(n,[t].concat(e),r);return}else if(d&&l==="object"){const{from:t=0,to:c=n.length-1,by:s=1}=f;for(let u=t;u<=c;u+=s)T(n,[u].concat(e),r);return}else if(e.length>1){T(n[f],e,[f].concat(r));return}o=n[f],r=[f].concat(r)}let i=e[0];typeof i=="function"&&(i=i(o,r),i===o)||f===void 0&&i==null||(i=$(i),f===void 0||y(o)&&y(i)&&!Array.isArray(i)?z(o,i):A(n,f,i))}function Z(...[n,e]){const r=$(n||{}),f=Array.isArray(r),o=W(r);function i(...l){q(()=>{f&&l.length===1?U(r,l[0]):T(r,l)})}return[o,i]}const D=Symbol("store-root");function j(n,e,r,f,o){const i=e[r];if(n===i)return;const l=Array.isArray(n);if(r!==D&&(!y(n)||!y(i)||l!==Array.isArray(i)||o&&n[o]!==i[o])){A(e,r,n);return}if(l){if(n.length&&i.length&&(!f||o&&n[0]&&n[0][o]!=null)){let c,s,u,h,a,b,S,g;for(u=0,h=Math.min(i.length,n.length);u<h&&(i[u]===n[u]||o&&i[u]&&n[u]&&i[u][o]===n[u][o]);u++)j(n[u],i,u,f,o);const E=new Array(n.length),_=new Map;for(h=i.length-1,a=n.length-1;h>=u&&a>=u&&(i[h]===n[a]||o&&i[u]&&n[u]&&i[h][o]===n[a][o]);h--,a--)E[a]=i[h];if(u>a||u>h){for(s=u;s<=a;s++)A(i,s,n[s]);for(;s<n.length;s++)A(i,s,E[s]),j(n[s],i,s,f,o);i.length>n.length&&A(i,"length",n.length);return}for(S=new Array(a+1),s=a;s>=u;s--)b=n[s],g=o&&b?b[o]:b,c=_.get(g),S[s]=c===void 0?-1:c,_.set(g,s);for(c=u;c<=h;c++)b=i[c],g=o&&b?b[o]:b,s=_.get(g),s!==void 0&&s!==-1&&(E[s]=i[c],s=S[s],_.set(g,s));for(s=u;s<n.length;s++)s in E?(A(i,s,E[s]),j(n[s],i,s,f,o)):A(i,s,n[s])}else for(let c=0,s=n.length;c<s;c++)j(n[c],i,c,f,o);i.length>n.length&&A(i,"length",n.length);return}const d=Object.keys(n);for(let c=0,s=d.length;c<s;c++)j(n[d[c]],i,d[c],f,o);const t=Object.keys(i);for(let c=0,s=t.length;c<s;c++)n[t[c]]===void 0&&A(i,t[c],void 0)}function k(n,e={}){const{merge:r,key:f="id"}=e,o=$(n);return i=>{if(!y(i)||!y(o))return o;const l=j(o,{[D]:i},D,r,f);return l===void 0?i:l}}const F=new WeakMap;var p=n=>(e,r,f,{client:o})=>{if(!n.hasAttribute("ssr"))return;const i=o!=="only",l=i?X:Y;let d,t={};if(Object.keys(f).length>0){if(o!=="only"){const h=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,a=>a===n?NodeFilter.FILTER_SKIP:a.nodeName==="ASTRO-SLOT"?NodeFilter.FILTER_ACCEPT:a.nodeName==="ASTRO-ISLAND"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP);for(;d=h.nextNode();)t[d.getAttribute("name")||"default"]=d}for(const[h,a]of Object.entries(f))t[h]||(t[h]=document.createElement("astro-slot"),h!=="default"&&t[h].setAttribute("name",h),t[h].innerHTML=a)}const{default:c,...s}=t,u=n.dataset.solidRenderId;if(F.has(n))F.get(n)(k({...r,...s,children:c}));else{const[h,a]=Z({...r,...s,children:c});F.set(n,a);const b=l(()=>{const S=()=>C(e,h);return i?C(V,{get children(){return S()}}):S()},n,{renderId:u});n.addEventListener("astro:unmount",()=>b(),{once:!0})}};export{p as default};
