import{s as U,n as O,c as W,b as X,u as Z,g as ee,d as te}from"../chunks/scheduler.C8nX4UK8.js";import{S as Y,i as B,e as u,s as P,c,a as y,w as k,f as M,d as m,r as l,g as Q,h as s,k as R,t as ae,l as F,b as re,m as G,n as T,o as j,p as K}from"../chunks/index.CSY0SryM.js";import{L as se}from"../chunks/Link.BWCquc93.js";import{p as ne}from"../chunks/stores.rWtvBLR8.js";import{a as le}from"../chunks/avatar_svg.CQJ27--r.js";function ie(f){let e,n,_=`<a href="/"><img src="${le}" alt="SvelteKit" class="svelte-34yzaq"/></a>`,i,v,r,o,$,b="About",g,z,a,t,h="Publications",A,L,p,E,w="Projects",H,I,C,S='<ul class="svelte-34yzaq"><li class="svelte-34yzaq"><a href="https://github.com/antonio-leitao">Github</a></li> <li class="svelte-34yzaq"><a href="https://scholar.google.com/citations?user=kJStlYkAAAAJ&amp;hl=en">Scholar</a></li> <li class="svelte-34yzaq"><a href="https://twitter.com/leitalhao">Twitter</a></li></ul>';return{c(){e=u("header"),n=u("div"),n.innerHTML=_,i=P(),v=u("nav"),r=u("ul"),o=u("li"),$=u("a"),$.textContent=b,z=P(),a=u("li"),t=u("a"),t.textContent=h,L=P(),p=u("li"),E=u("a"),E.textContent=w,I=P(),C=u("nav"),C.innerHTML=S,this.h()},l(q){e=c(q,"HEADER",{class:!0});var d=y(e);n=c(d,"DIV",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-1ctpo3p"&&(n.innerHTML=_),i=M(d),v=c(d,"NAV",{});var V=y(v);r=c(V,"UL",{class:!0});var x=y(r);o=c(x,"LI",{"aria-current":!0,class:!0});var D=y(o);$=c(D,"A",{href:!0,"data-svelte-h":!0}),k($)!=="svelte-6u97gp"&&($.textContent=b),D.forEach(m),z=M(x),a=c(x,"LI",{"aria-current":!0,class:!0});var N=y(a);t=c(N,"A",{href:!0,"data-svelte-h":!0}),k(t)!=="svelte-cij7"&&(t.textContent=h),N.forEach(m),L=M(x),p=c(x,"LI",{"aria-current":!0,class:!0});var J=y(p);E=c(J,"A",{href:!0,"data-svelte-h":!0}),k(E)!=="svelte-1835uiz"&&(E.textContent=w),J.forEach(m),x.forEach(m),V.forEach(m),I=M(d),C=c(d,"NAV",{class:!0,"data-svelte-h":!0}),k(C)!=="svelte-1alsfqp"&&(C.innerHTML=S),d.forEach(m),this.h()},h(){l(n,"class","corner svelte-34yzaq"),l($,"href","/About"),l(o,"aria-current",g=f[0].url.pathname==="/About"?"page":void 0),l(o,"class","svelte-34yzaq"),l(t,"href","/Publications"),l(a,"aria-current",A=f[0].url.pathname==="/Publications"?"page":void 0),l(a,"class","svelte-34yzaq"),l(E,"href","/Projects"),l(p,"aria-current",H=f[0].url.pathname==="/Projects"?"page":void 0),l(p,"class","svelte-34yzaq"),l(r,"class","svelte-34yzaq"),l(C,"class","social svelte-34yzaq"),l(e,"class","svelte-34yzaq")},m(q,d){Q(q,e,d),s(e,n),s(e,i),s(e,v),s(v,r),s(r,o),s(o,$),s(r,z),s(r,a),s(a,t),s(r,L),s(r,p),s(p,E),s(e,I),s(e,C)},p(q,[d]){d&1&&g!==(g=q[0].url.pathname==="/About"?"page":void 0)&&l(o,"aria-current",g),d&1&&A!==(A=q[0].url.pathname==="/Publications"?"page":void 0)&&l(a,"aria-current",A),d&1&&H!==(H=q[0].url.pathname==="/Projects"?"page":void 0)&&l(p,"aria-current",H)},i:O,o:O,d(q){q&&m(e)}}}function oe(f,e,n){let _;return W(f,ne,i=>n(0,_=i)),[_]}class ue extends Y{constructor(e){super(),B(this,e,oe,ie,U,{})}}function ce(f){let e,n,_,i,v,r,o,$,b,g;n=new ue({});const z=f[2].default,a=X(z,f,f[1],null);return b=new se({props:{text:"António Leitão",link:"https://antonio-leitao.github.io/"}}),{c(){e=u("div"),R(n.$$.fragment),_=P(),i=u("main"),a&&a.c(),v=P(),r=u("footer"),o=u("p"),$=ae("Made by "),R(b.$$.fragment),this.h()},l(t){e=c(t,"DIV",{class:!0});var h=y(e);F(n.$$.fragment,h),_=M(h),i=c(h,"MAIN",{class:!0});var A=y(i);a&&a.l(A),v=M(A),r=c(A,"FOOTER",{class:!0});var L=y(r);o=c(L,"P",{});var p=y(o);$=re(p,"Made by "),F(b.$$.fragment,p),p.forEach(m),L.forEach(m),A.forEach(m),h.forEach(m),this.h()},h(){l(r,"class","svelte-13ri00b"),l(i,"class","svelte-13ri00b"),l(e,"class","app svelte-13ri00b")},m(t,h){Q(t,e,h),G(n,e,null),s(e,_),s(e,i),a&&a.m(i,null),s(i,v),s(i,r),s(r,o),s(o,$),G(b,o,null),g=!0},p(t,[h]){a&&a.p&&(!g||h&2)&&Z(a,z,t,t[1],g?te(z,t[1],h,null):ee(t[1]),null)},i(t){g||(T(n.$$.fragment,t),T(a,t),T(b.$$.fragment,t),g=!0)},o(t){j(n.$$.fragment,t),j(a,t),j(b.$$.fragment,t),g=!1},d(t){t&&m(e),K(n),a&&a.d(t),K(b)}}}function fe(f,e,n){let{$$slots:_={},$$scope:i}=e;const v=!0;return f.$$set=r=>{"$$scope"in r&&n(1,i=r.$$scope)},[v,i,_]}class ve extends Y{constructor(e){super(),B(this,e,fe,ce,U,{prerender:0})}get prerender(){return this.$$.ctx[0]}}export{ve as component};