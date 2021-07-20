var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let l,i=!1;function s(t,n,e,o){for(;t<n;){const c=t+(n-t>>1);e(c)<=o?t=c+1:n=c}return t}function u(t,n){i?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let c=0;for(let t=0;t<n.length;t++){const r=s(1,c+1,(t=>n[e[t]].claim_order),n[t].claim_order)-1;o[t]=e[r]+1;const l=r+1;e[l]=t,c=Math.max(l,c)}const r=[],l=[];let i=n.length-1;for(let t=e[c]+1;0!=t;t=o[t-1]){for(r.push(n[t-1]);i>=t;i--)l.push(n[i]);i--}for(;i>=0;i--)l.push(n[i]);r.reverse(),l.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<l.length;n++){for(;e<r.length&&l[n].claim_order>=r[e].claim_order;)e++;const o=e<r.length?r[e]:null;t.insertBefore(l[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function a(t,n,e){i&&!e?u(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function m(){return h("")}function g(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function _(t,n){t.value=null==n?"":n}function b(t){l=t}function x(){const t=function(){if(!l)throw new Error("Function called outside component initialization");return l}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const c=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,c)}))}}}const y=[],q=[],k=[],w=[],E=Promise.resolve();let C=!1;function N(t){k.push(t)}let A=!1;const B=new Set;function M(){if(!A){A=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];b(n),S(n.$$)}for(b(null),y.length=0;q.length;)q.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];B.has(n)||(B.add(n),n())}k.length=0}while(y.length);for(;w.length;)w.pop()();C=!1,A=!1,B.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const T=new Set;let j;function L(){j={r:0,c:[],p:j}}function O(){j.r||o(j.c),j=j.p}function I(t,n){t&&t.i&&(T.delete(t),t.i(n))}function P(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),j.c.push((()=>{T.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function z(t){t&&t.c()}function F(t,e,r,l){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,r),l||N((()=>{const e=s.map(n).filter(c);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(N)}function G(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function R(t,n){-1===t.$$.dirty[0]&&(y.push(t),C||(C=!0,E.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function D(n,c,r,s,u,a,f=[-1]){const h=l;b(n);const p=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:c.context||[]),callbacks:e(),dirty:f,skip_bound:!1};let m=!1;if(p.ctx=r?r(n,c.props||{},((t,e,...o)=>{const c=o.length?o[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),m&&R(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),c.target){if(c.hydrate){i=!0;const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();c.intro&&I(n.$$.fragment),F(n,c.target,c.anchor,c.customElement),i=!1,M()}b(h)}class H{$destroy(){G(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(n){let e,c,r,l,i,s,m,b,x,y,q,k,w,E,C,N,A;return{c(){e=f("div"),c=f("div"),r=f("h2"),l=h("Nome: \r\n\t\t"),i=f("input"),s=p(),m=f("h2"),b=h("Livello: "),x=f("strong"),y=h(n[1]),q=p(),k=f("div"),w=f("button"),w.textContent="-",E=p(),C=f("button"),C.textContent="+",$(i,"type","text"),$(i,"class","svelte-qqgpdd"),$(r,"id","nome"),$(r,"class","svelte-qqgpdd"),$(c,"id","name-container"),$(c,"class","svelte-qqgpdd"),$(w,"class","button sub svelte-qqgpdd"),$(C,"class","button add svelte-qqgpdd"),$(k,"class","buttons svelte-qqgpdd"),$(e,"class","item svelte-qqgpdd")},m(t,o){a(t,e,o),u(e,c),u(c,r),u(r,l),u(r,i),_(i,n[0]),u(e,s),u(e,m),u(m,b),u(m,x),u(x,y),u(e,q),u(e,k),u(k,w),u(k,E),u(k,C),N||(A=[g(i,"input",n[3]),g(w,"click",n[4]),g(C,"click",n[2])],N=!0)},p(t,[n]){1&n&&i.value!==t[0]&&_(i,t[0]),2&n&&v(y,t[1])},i:t,o:t,d(t){t&&d(e),N=!1,o(A)}}}function K(t,n,e){const o=x();let c="Persibaldo",r=1;return[c,r,function(){e(1,r<10?r+=1:r),10===r&&o("lvlwin",{nome:c})},function(){c=this.value,e(0,c)},()=>{e(1,1===r?r:r-=1)}]}class Q extends H{constructor(t){super(),D(this,t,K,J,r,{})}}function U(n){let e,o,c,r,l,i,s;return{c(){e=f("div"),o=f("h1"),c=h(n[0]),r=p(),l=f("h3"),l.textContent="hai vinto!!!",i=p(),s=f("a"),s.textContent="Ricomincia",$(o,"class","svelte-vysllb"),$(l,"class","svelte-vysllb"),$(s,"href","./index.html"),$(s,"class","svelte-vysllb"),$(e,"class","svelte-vysllb")},m(t,n){a(t,e,n),u(e,o),u(o,c),u(e,r),u(e,l),u(e,i),u(e,s)},p(t,[n]){1&n&&v(c,t[0])},i:t,o:t,d(t){t&&d(e)}}}function V(t,n,e){let{nome:o}=n;return t.$$set=t=>{"nome"in t&&e(0,o=t.nome)},[o]}class W extends H{constructor(t){super(),D(this,t,V,U,r,{nome:0})}}function X(t,n,e){const o=t.slice();return o[6]=n[e],o}function Y(t){let n,e,o,c;const r=[tt,Z],l=[];function i(t,n){return 0==t[1]?0:1}return n=i(t),e=l[n]=r[n](t),{c(){e.c(),o=m()},m(t,e){l[n].m(t,e),a(t,o,e),c=!0},p(t,c){let s=n;n=i(t),n===s?l[n].p(t,c):(L(),P(l[s],1,1,(()=>{l[s]=null})),O(),e=l[n],e?e.p(t,c):(e=l[n]=r[n](t),e.c()),I(e,1),e.m(o.parentNode,o))},i(t){c||(I(e),c=!0)},o(t){P(e),c=!1},d(t){l[n].d(t),t&&d(o)}}}function Z(t){let n,e;return n=new W({props:{nome:t[2]}}),{c(){z(n.$$.fragment)},m(t,o){F(n,t,o),e=!0},p(t,e){const o={};4&e&&(o.nome=t[2]),n.$set(o)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function tt(t){let n,e,o=t[0],c=[];for(let n=0;n<o.length;n+=1)c[n]=nt(X(t,o,n));const r=t=>P(c[t],1,1,(()=>{c[t]=null}));return{c(){for(let t=0;t<c.length;t+=1)c[t].c();n=m()},m(t,o){for(let n=0;n<c.length;n+=1)c[n].m(t,o);a(t,n,o),e=!0},p(t,e){if(17&e){let l;for(o=t[0],l=0;l<o.length;l+=1){const r=X(t,o,l);c[l]?(c[l].p(r,e),I(c[l],1)):(c[l]=nt(r),c[l].c(),I(c[l],1),c[l].m(n.parentNode,n))}for(L(),l=o.length;l<c.length;l+=1)r(l);O()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)I(c[t]);e=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)P(c[t]);e=!1},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t),t&&d(n)}}}function nt(t){let n,e;return n=new Q({props:{id:t[6].id}}),n.$on("lvlwin",t[4]),{c(){z(n.$$.fragment)},m(t,o){F(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.id=t[6].id),n.$set(o)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function et(t){let n,e,o,c,r,l,i,s,h,m,v,_=t[0].length>0&&Y(t);return{c(){n=p(),e=f("div"),o=f("h1"),o.textContent="Munchkin Tools",c=p(),r=f("button"),r.textContent="Aggiungi Giocatore",l=p(),_&&_.c(),i=p(),s=f("div"),document.title="Munchkin Counter Tools",$(o,"id","title"),$(o,"class","svelte-tgn6p2"),$(r,"id","aggiungi-giocatore"),$(r,"class","svelte-tgn6p2"),$(s,"class","lista-giocatori"),$(e,"class","container svelte-tgn6p2")},m(d,f){a(d,n,f),a(d,e,f),u(e,o),u(e,c),u(e,r),u(e,l),_&&_.m(e,null),u(e,i),u(e,s),h=!0,m||(v=g(r,"click",t[3]),m=!0)},p(t,[n]){t[0].length>0?_?(_.p(t,n),1&n&&I(_,1)):(_=Y(t),_.c(),I(_,1),_.m(e,i)):_&&(L(),P(_,1,1,(()=>{_=null})),O())},i(t){h||(I(_),h=!0)},o(t){P(_),h=!1},d(t){t&&d(n),t&&d(e),_&&_.d(),m=!1,v()}}}function ot(t,n,e){let o=[],c=0,r=!1,l="";return[o,r,l,function(){e(0,o=[...o,{id:c,livello:1}]),c++},function(t){e(1,r=!0),e(2,l=t.detail.nome),console.log(l)}]}return new class extends H{constructor(t){super(),D(this,t,ot,et,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
