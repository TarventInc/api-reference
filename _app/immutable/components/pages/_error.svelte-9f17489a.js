import{S as $,i as j,s as k,a as b,k as m,q as y,ae as x,h as c,c as q,l as f,m as v,r as w,n as z,b as D,W as d,u as S,D as W,Q as A}from"../../chunks/paths-bf35da2b.js";import{p as C}from"../../chunks/stores-5b6d04d7.js";function H(a){let n,l,e,r,s=a[0].status+"",o,h,p,_;return document.title=n="Error - "+a[0].status,{c(){l=b(),e=m("div"),r=m("h1"),o=y(s),h=b(),p=m("p"),_=y(a[1]),this.h()},l(t){x("svelte-1wpfhz9",document.head).forEach(c),l=q(t),e=f(t,"DIV",{class:!0});var u=v(e);r=f(u,"H1",{});var E=v(r);o=w(E,s),E.forEach(c),h=q(u),p=f(u,"P",{});var g=v(p);_=w(g,a[1]),g.forEach(c),u.forEach(c),this.h()},h(){z(e,"class","wrapper svelte-1ldjxpt")},m(t,i){D(t,l,i),D(t,e,i),d(e,r),d(r,o),d(e,h),d(e,p),d(p,_)},p(t,[i]){i&1&&n!==(n="Error - "+t[0].status)&&(document.title=n),i&1&&s!==(s=t[0].status+"")&&S(o,s),i&2&&S(_,t[1])},i:W,o:W,d(t){t&&c(l),t&&c(e)}}}function I(a,n,l){let e;A(a,C,s=>l(0,e=s));let r;return a.$$.update=()=>{var s;if(a.$$.dirty&1){const o=((s=e.error)==null?void 0:s.message)||"An unexpected error occurred.";l(1,r=o.endsWith(".")?o:`${o}.`)}},[e,r]}class V extends ${constructor(n){super(),j(this,n,I,H,k,{})}}export{V as default};
