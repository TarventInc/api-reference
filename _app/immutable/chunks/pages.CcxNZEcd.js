var AT=Object.defineProperty;var kp=i=>{throw TypeError(i)};var vT=(i,e,t)=>e in i?AT(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var On=(i,e,t)=>vT(i,typeof e!="symbol"?e+"":e,t),NT=(i,e,t)=>e.has(i)||kp("Cannot "+t);var Mp=(i,e,t)=>e.has(i)?kp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);var sr=(i,e,t)=>(NT(i,e,"access private method"),t);import{s as wn,q as oe,l as Fn,d as K,I as qp,t as ku,j as Mu,o as qu,n as ne,a2 as hr,E as et,v as Nc,e as Un,f as Rn,g as jn,ae as wo,F as tt,G as it,H as rt,k as Se,m as At,b as Ju,c as Gu,ah as wT,ai as _T,ak as Jp,K as BT}from"./scheduler.6x_t8-M_.js";import{S as Pn,i as kn,t as nn,g as vt,b as un,e as Nt,c as Ht,a as Ii,m as Qt,d as Yt}from"./index.DNIXW-5M.js";import{b as UT}from"./control.BQo0a-y9.js";function pt(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function wc(i,e){const t={},a={},o={$$scope:1};let u=i.length;for(;u--;){const l=i[u],c=e[u];if(c){for(const d in l)d in c||(a[d]=1);for(const d in c)o[d]||(t[d]=c[d],o[d]=1);i[u]=c}else for(const d in l)o[d]=1}for(const l in a)l in t||(t[l]=void 0);return t}function Rb(i){return typeof i=="object"&&i!==null?i:{}}function Gp(i){let e,t,a;var o=i[1][i[0].type];function u(l,c){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[LT]},$$scope:{ctx:l}}}}return o&&(e=qp(o,u(i))),{c(){e&&Ht(e.$$.fragment),t=oe()},l(l){e&&Ii(e.$$.fragment,l),t=oe()},m(l,c){e&&Qt(e,l,c),Fn(l,t,c),a=!0},p(l,c){if(c&3&&o!==(o=l[1][l[0].type])){if(e){vt();const d=e;un(d.$$.fragment,1,0,()=>{Yt(d,1)}),Nt()}o?(e=qp(o,u(l)),Ht(e.$$.fragment),nn(e.$$.fragment,1),Qt(e,t.parentNode,t)):e=null}else if(o){const d={};c&1&&(d.token=l[0]),c&4&&(d.options=l[2]),c&2&&(d.renderers=l[1]),c&15&&(d.$$scope={dirty:c,ctx:l}),e.$set(d)}},i(l){a||(e&&nn(e.$$.fragment,l),a=!0)},o(l){e&&un(e.$$.fragment,l),a=!1},d(l){l&&K(t),e&&Yt(e,l)}}}function RT(i){let e=i[0].raw+"",t;return{c(){t=ku(e)},l(a){t=Mu(a,e)},m(a,o){Fn(a,t,o)},p(a,o){o&1&&e!==(e=a[0].raw+"")&&qu(t,e)},i:ne,o:ne,d(a){a&&K(t)}}}function xT(i){let e,t;return e=new Jo({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Ht(e.$$.fragment)},l(a){Ii(e.$$.fragment,a)},m(a,o){Qt(e,a,o),t=!0},p(a,o){const u={};o&1&&(u.tokens=a[0].tokens),o&2&&(u.renderers=a[1]),o&4&&(u.options=a[2]),e.$set(u)},i(a){t||(nn(e.$$.fragment,a),t=!0)},o(a){un(e.$$.fragment,a),t=!1},d(a){Yt(e,a)}}}function LT(i){let e,t,a,o;const u=[xT,RT],l=[];function c(d,I){return"tokens"in d[0]&&d[0].tokens?0:1}return e=c(i),t=l[e]=u[e](i),{c(){t.c(),a=oe()},l(d){t.l(d),a=oe()},m(d,I){l[e].m(d,I),Fn(d,a,I),o=!0},p(d,I){let S=e;e=c(d),e===S?l[e].p(d,I):(vt(),un(l[S],1,1,()=>{l[S]=null}),Nt(),t=l[e],t?t.p(d,I):(t=l[e]=u[e](d),t.c()),nn(t,1),t.m(a.parentNode,a))},i(d){o||(nn(t),o=!0)},o(d){un(t),o=!1},d(d){d&&K(a),l[e].d(d)}}}function PT(i){let e,t,a=i[1][i[0].type]&&Gp(i);return{c(){a&&a.c(),e=oe()},l(o){a&&a.l(o),e=oe()},m(o,u){a&&a.m(o,u),Fn(o,e,u),t=!0},p(o,[u]){o[1][o[0].type]?a?(a.p(o,u),u&3&&nn(a,1)):(a=Gp(o),a.c(),nn(a,1),a.m(e.parentNode,e)):a&&(vt(),un(a,1,1,()=>{a=null}),Nt())},i(o){t||(nn(a),t=!0)},o(o){un(a),t=!1},d(o){o&&K(e),a&&a.d(o)}}}function kT(i,e,t){let{token:a}=e,{renderers:o}=e,{options:u}=e;return i.$$set=l=>{"token"in l&&t(0,a=l.token),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[a,o,u]}class _c extends Pn{constructor(e){super(),kn(this,e,kT,PT,wn,{token:0,renderers:1,options:2})}}function Vp(i,e,t){const a=i.slice();return a[3]=e[t],a}function $p(i){let e,t,a=pt(i[0]),o=[];for(let l=0;l<a.length;l+=1)o[l]=jp(Vp(i,a,l));const u=l=>un(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=oe()},l(l){for(let c=0;c<o.length;c+=1)o[c].l(l);e=oe()},m(l,c){for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(l,c);Fn(l,e,c),t=!0},p(l,c){if(c&7){a=pt(l[0]);let d;for(d=0;d<a.length;d+=1){const I=Vp(l,a,d);o[d]?(o[d].p(I,c),nn(o[d],1)):(o[d]=jp(I),o[d].c(),nn(o[d],1),o[d].m(e.parentNode,e))}for(vt(),d=a.length;d<o.length;d+=1)u(d);Nt()}},i(l){if(!t){for(let c=0;c<a.length;c+=1)nn(o[c]);t=!0}},o(l){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)un(o[c]);t=!1},d(l){l&&K(e),hr(o,l)}}}function jp(i){let e,t;return e=new _c({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Ht(e.$$.fragment)},l(a){Ii(e.$$.fragment,a)},m(a,o){Qt(e,a,o),t=!0},p(a,o){const u={};o&1&&(u.token=a[3]),o&2&&(u.renderers=a[1]),o&4&&(u.options=a[2]),e.$set(u)},i(a){t||(nn(e.$$.fragment,a),t=!0)},o(a){un(e.$$.fragment,a),t=!1},d(a){Yt(e,a)}}}function MT(i){let e,t,a=i[0]&&$p(i);return{c(){a&&a.c(),e=oe()},l(o){a&&a.l(o),e=oe()},m(o,u){a&&a.m(o,u),Fn(o,e,u),t=!0},p(o,[u]){o[0]?a?(a.p(o,u),u&1&&nn(a,1)):(a=$p(o),a.c(),nn(a,1),a.m(e.parentNode,e)):a&&(vt(),un(a,1,1,()=>{a=null}),Nt())},i(o){t||(nn(a),t=!0)},o(o){un(a),t=!1},d(o){o&&K(e),a&&a.d(o)}}}function qT(i,e,t){let{tokens:a}=e,{renderers:o}=e,{options:u}=e;return i.$$set=l=>{"tokens"in l&&t(0,a=l.tokens),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[a,o,u]}class Jo extends Pn{constructor(e){super(),kn(this,e,qT,MT,wn,{tokens:0,renderers:1,options:2})}}function Tr(...i){return`/${i.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function Fr(i){return i.startsWith("/")||i.startsWith("#")}function Bc(i,e){return e.slug(i).replace(/--+/g,"-")}function hu(i){let e,t;const a=i[5].default,o=et(a,i,i[4],null);let u=[{id:i[1]}],l={};for(let c=0;c<u.length;c+=1)l=Nc(l,u[c]);return{c(){e=Un(`h${i[0].depth}`),o&&o.c(),this.h()},l(c){e=Rn(c,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var d=jn(e);o&&o.l(d),d.forEach(K),this.h()},h(){wo(`h${i[0].depth}`)(e,l)},m(c,d){Fn(c,e,d),o&&o.m(e,null),t=!0},p(c,d){o&&o.p&&(!t||d&16)&&tt(o,a,c,c[4],t?rt(a,c[4],d,null):it(c[4]),null),wo(`h${c[0].depth}`)(e,l=wc(u,[(!t||d&2)&&{id:c[1]}]))},i(c){t||(nn(o,c),t=!0)},o(c){un(o,c),t=!1},d(c){c&&K(e),o&&o.d(c)}}}function JT(i){let e=`h${i[0].depth}`,t,a,o=`h${i[0].depth}`&&hu(i);return{c(){o&&o.c(),t=oe()},l(u){o&&o.l(u),t=oe()},m(u,l){o&&o.m(u,l),Fn(u,t,l),a=!0},p(u,[l]){`h${u[0].depth}`?e?wn(e,`h${u[0].depth}`)?(o.d(1),o=hu(u),e=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):o.p(u,l):(o=hu(u),e=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):e&&(o.d(1),o=null,e=`h${u[0].depth}`)},i(u){a||(nn(o,u),a=!0)},o(u){un(o,u),a=!1},d(u){u&&K(t),o&&o.d(u)}}}function GT(i,e,t){let{$$slots:a={},$$scope:o}=e,{token:u}=e,{options:l}=e;const c=void 0;let d;return i.$$set=I=>{"token"in I&&t(0,u=I.token),"options"in I&&t(2,l=I.options),"$$scope"in I&&t(4,o=I.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,d=Bc(u.text,l.slugger))},[u,d,l,c,o,a]}class VT extends Pn{constructor(e){super(),kn(this,e,GT,JT,wn,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function $T(i){let e,t;const a=i[4].default,o=et(a,i,i[3],null);return{c(){e=Un("blockquote"),o&&o.c()},l(u){e=Rn(u,"BLOCKQUOTE",{});var l=jn(e);o&&o.l(l),l.forEach(K)},m(u,l){Fn(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,a,u,u[3],t?rt(a,u[3],l,null):it(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){un(o,u),t=!1},d(u){u&&K(e),o&&o.d(u)}}}function jT(i,e,t){let{$$slots:a={},$$scope:o}=e;const u=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class WT extends Pn{constructor(e){super(),kn(this,e,jT,$T,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Wp(i,e,t){const a=i.slice();return a[4]=e[t],a}function Hp(i){let e,t;return e=new _c({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Ht(e.$$.fragment)},l(a){Ii(e.$$.fragment,a)},m(a,o){Qt(e,a,o),t=!0},p(a,o){const u={};o&1&&(u.token={...a[4]}),o&2&&(u.options=a[1]),o&4&&(u.renderers=a[2]),e.$set(u)},i(a){t||(nn(e.$$.fragment,a),t=!0)},o(a){un(e.$$.fragment,a),t=!1},d(a){Yt(e,a)}}}function Tu(i){let e,t,a,o=pt(i[0].items),u=[];for(let I=0;I<o.length;I+=1)u[I]=Hp(Wp(i,o,I));const l=I=>un(u[I],1,1,()=>{u[I]=null});let c=[{start:t=i[0].start||1}],d={};for(let I=0;I<c.length;I+=1)d=Nc(d,c[I]);return{c(){e=Un(i[3]);for(let I=0;I<u.length;I+=1)u[I].c();this.h()},l(I){e=Rn(I,(i[3]||"null").toUpperCase(),{start:!0});var S=jn(e);for(let h=0;h<u.length;h+=1)u[h].l(S);S.forEach(K),this.h()},h(){wo(i[3])(e,d)},m(I,S){Fn(I,e,S);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(e,null);a=!0},p(I,S){if(S&7){o=pt(I[0].items);let h;for(h=0;h<o.length;h+=1){const w=Wp(I,o,h);u[h]?(u[h].p(w,S),nn(u[h],1)):(u[h]=Hp(w),u[h].c(),nn(u[h],1),u[h].m(e,null))}for(vt(),h=o.length;h<u.length;h+=1)l(h);Nt()}wo(I[3])(e,d=wc(c,[(!a||S&1&&t!==(t=I[0].start||1))&&{start:t}]))},i(I){if(!a){for(let S=0;S<o.length;S+=1)nn(u[S]);a=!0}},o(I){u=u.filter(Boolean);for(let S=0;S<u.length;S+=1)un(u[S]);a=!1},d(I){I&&K(e),hr(u,I)}}}function HT(i){let e=i[3],t,a=i[3]&&Tu(i);return{c(){a&&a.c(),t=oe()},l(o){a&&a.l(o),t=oe()},m(o,u){a&&a.m(o,u),Fn(o,t,u)},p(o,[u]){o[3]?e?wn(e,o[3])?(a.d(1),a=Tu(o),e=o[3],a.c(),a.m(t.parentNode,t)):a.p(o,u):(a=Tu(o),e=o[3],a.c(),a.m(t.parentNode,t)):e&&(a.d(1),a=null,e=o[3])},i:ne,o(o){un(a,o)},d(o){o&&K(t),a&&a.d(o)}}}function QT(i,e,t){let{token:a}=e,{options:o}=e,{renderers:u}=e,l;return i.$$set=c=>{"token"in c&&t(0,a=c.token),"options"in c&&t(1,o=c.options),"renderers"in c&&t(2,u=c.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,l=a.ordered?"ol":"ul")},[a,o,u,l]}class YT extends Pn{constructor(e){super(),kn(this,e,QT,HT,wn,{token:0,options:1,renderers:2})}}function KT(i){let e,t;const a=i[4].default,o=et(a,i,i[3],null);return{c(){e=Un("li"),o&&o.c()},l(u){e=Rn(u,"LI",{});var l=jn(e);o&&o.l(l),l.forEach(K)},m(u,l){Fn(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,a,u,u[3],t?rt(a,u[3],l,null):it(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){un(o,u),t=!1},d(u){u&&K(e),o&&o.d(u)}}}function zT(i,e,t){let{$$slots:a={},$$scope:o}=e;const u=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class XT extends Pn{constructor(e){super(),kn(this,e,zT,KT,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ZT(i){let e;return{c(){e=Un("br")},l(t){e=Rn(t,"BR",{})},m(t,a){Fn(t,e,a)},p:ne,i:ne,o:ne,d(t){t&&K(e)}}}function nF(i,e,t){return[void 0,void 0,void 0]}class eF extends Pn{constructor(e){super(),kn(this,e,nF,ZT,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tF(i){let e,t,a=i[0].text+"",o,u;return{c(){e=Un("pre"),t=Un("code"),o=ku(a),this.h()},l(l){e=Rn(l,"PRE",{});var c=jn(e);t=Rn(c,"CODE",{class:!0});var d=jn(t);o=Mu(d,a),d.forEach(K),c.forEach(K),this.h()},h(){Se(t,"class",u=`lang-${i[0].lang}`)},m(l,c){Fn(l,e,c),At(e,t),At(t,o)},p(l,[c]){c&1&&a!==(a=l[0].text+"")&&qu(o,a),c&1&&u!==(u=`lang-${l[0].lang}`)&&Se(t,"class",u)},i:ne,o:ne,d(l){l&&K(e)}}}function iF(i,e,t){let{token:a}=e;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,a=l.token)},[a,o,u]}class rF extends Pn{constructor(e){super(),kn(this,e,iF,tF,wn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function oF(i){let e,t=i[0].raw.slice(1,i[0].raw.length-1)+"",a;return{c(){e=Un("code"),a=ku(t)},l(o){e=Rn(o,"CODE",{});var u=jn(e);a=Mu(u,t),u.forEach(K)},m(o,u){Fn(o,e,u),At(e,a)},p(o,[u]){u&1&&t!==(t=o[0].raw.slice(1,o[0].raw.length-1)+"")&&qu(a,t)},i:ne,o:ne,d(o){o&&K(e)}}}function aF(i,e,t){let{token:a}=e;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,a=l.token)},[a,o,u]}class uF extends Pn{constructor(e){super(),kn(this,e,aF,oF,wn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Qp(i,e,t){const a=i.slice();return a[3]=e[t],a}function Yp(i,e,t){const a=i.slice();return a[6]=e[t],a}function Kp(i,e,t){const a=i.slice();return a[9]=e[t],a}function zp(i){let e,t,a,o;return t=new Jo({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){e=Un("th"),Ht(t.$$.fragment),a=Ju(),this.h()},l(u){e=Rn(u,"TH",{scope:!0});var l=jn(e);Ii(t.$$.fragment,l),a=Gu(l),l.forEach(K),this.h()},h(){Se(e,"scope","col")},m(u,l){Fn(u,e,l),Qt(t,e,null),At(e,a),o=!0},p(u,l){const c={};l&1&&(c.tokens=u[9].tokens),l&2&&(c.options=u[1]),l&4&&(c.renderers=u[2]),t.$set(c)},i(u){o||(nn(t.$$.fragment,u),o=!0)},o(u){un(t.$$.fragment,u),o=!1},d(u){u&&K(e),Yt(t)}}}function Xp(i){let e,t,a;return t=new Jo({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){e=Un("td"),Ht(t.$$.fragment)},l(o){e=Rn(o,"TD",{});var u=jn(e);Ii(t.$$.fragment,u),u.forEach(K)},m(o,u){Fn(o,e,u),Qt(t,e,null),a=!0},p(o,u){const l={};u&1&&(l.tokens=o[6].tokens),u&2&&(l.options=o[1]),u&4&&(l.renderers=o[2]),t.$set(l)},i(o){a||(nn(t.$$.fragment,o),a=!0)},o(o){un(t.$$.fragment,o),a=!1},d(o){o&&K(e),Yt(t)}}}function Zp(i){let e,t,a,o=pt(i[3]),u=[];for(let c=0;c<o.length;c+=1)u[c]=Xp(Yp(i,o,c));const l=c=>un(u[c],1,1,()=>{u[c]=null});return{c(){e=Un("tr");for(let c=0;c<u.length;c+=1)u[c].c();t=Ju()},l(c){e=Rn(c,"TR",{});var d=jn(e);for(let I=0;I<u.length;I+=1)u[I].l(d);t=Gu(d),d.forEach(K)},m(c,d){Fn(c,e,d);for(let I=0;I<u.length;I+=1)u[I]&&u[I].m(e,null);At(e,t),a=!0},p(c,d){if(d&7){o=pt(c[3]);let I;for(I=0;I<o.length;I+=1){const S=Yp(c,o,I);u[I]?(u[I].p(S,d),nn(u[I],1)):(u[I]=Xp(S),u[I].c(),nn(u[I],1),u[I].m(e,t))}for(vt(),I=o.length;I<u.length;I+=1)l(I);Nt()}},i(c){if(!a){for(let d=0;d<o.length;d+=1)nn(u[d]);a=!0}},o(c){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)un(u[d]);a=!1},d(c){c&&K(e),hr(u,c)}}}function sF(i){let e,t,a,o,u,l,c=pt(i[0].header),d=[];for(let b=0;b<c.length;b+=1)d[b]=zp(Kp(i,c,b));const I=b=>un(d[b],1,1,()=>{d[b]=null});let S=pt(i[0].rows),h=[];for(let b=0;b<S.length;b+=1)h[b]=Zp(Qp(i,S,b));const w=b=>un(h[b],1,1,()=>{h[b]=null});return{c(){e=Un("table"),t=Un("thead"),a=Un("tr");for(let b=0;b<d.length;b+=1)d[b].c();o=Ju(),u=Un("tbody");for(let b=0;b<h.length;b+=1)h[b].c()},l(b){e=Rn(b,"TABLE",{});var v=jn(e);t=Rn(v,"THEAD",{});var L=jn(t);a=Rn(L,"TR",{});var j=jn(a);for(let An=0;An<d.length;An+=1)d[An].l(j);j.forEach(K),L.forEach(K),o=Gu(v),u=Rn(v,"TBODY",{});var cn=jn(u);for(let An=0;An<h.length;An+=1)h[An].l(cn);cn.forEach(K),v.forEach(K)},m(b,v){Fn(b,e,v),At(e,t),At(t,a);for(let L=0;L<d.length;L+=1)d[L]&&d[L].m(a,null);At(e,o),At(e,u);for(let L=0;L<h.length;L+=1)h[L]&&h[L].m(u,null);l=!0},p(b,[v]){if(v&7){c=pt(b[0].header);let L;for(L=0;L<c.length;L+=1){const j=Kp(b,c,L);d[L]?(d[L].p(j,v),nn(d[L],1)):(d[L]=zp(j),d[L].c(),nn(d[L],1),d[L].m(a,null))}for(vt(),L=c.length;L<d.length;L+=1)I(L);Nt()}if(v&7){S=pt(b[0].rows);let L;for(L=0;L<S.length;L+=1){const j=Qp(b,S,L);h[L]?(h[L].p(j,v),nn(h[L],1)):(h[L]=Zp(j),h[L].c(),nn(h[L],1),h[L].m(u,null))}for(vt(),L=S.length;L<h.length;L+=1)w(L);Nt()}},i(b){if(!l){for(let v=0;v<c.length;v+=1)nn(d[v]);for(let v=0;v<S.length;v+=1)nn(h[v]);l=!0}},o(b){d=d.filter(Boolean);for(let v=0;v<d.length;v+=1)un(d[v]);h=h.filter(Boolean);for(let v=0;v<h.length;v+=1)un(h[v]);l=!1},d(b){b&&K(e),hr(d,b),hr(h,b)}}}function lF(i,e,t){let{token:a}=e,{options:o}=e,{renderers:u}=e;return i.$$set=l=>{"token"in l&&t(0,a=l.token),"options"in l&&t(1,o=l.options),"renderers"in l&&t(2,u=l.renderers)},[a,o,u]}class pF extends Pn{constructor(e){super(),kn(this,e,lF,sF,wn,{token:0,options:1,renderers:2})}}function cF(i){let e,t=i[0].text+"",a;return{c(){e=new wT(!1),a=oe(),this.h()},l(o){e=_T(o,!1),a=oe(),this.h()},h(){e.a=a},m(o,u){e.m(t,o,u),Fn(o,a,u)},p(o,[u]){u&1&&t!==(t=o[0].text+"")&&e.p(t)},i:ne,o:ne,d(o){o&&(K(a),e.d())}}}function dF(i,e,t){let{token:a}=e;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,a=l.token)},[a,o,u]}class mF extends Pn{constructor(e){super(),kn(this,e,dF,cF,wn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function gF(i){let e,t;const a=i[4].default,o=et(a,i,i[3],null);return{c(){e=Un("p"),o&&o.c()},l(u){e=Rn(u,"P",{});var l=jn(e);o&&o.l(l),l.forEach(K)},m(u,l){Fn(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,a,u,u[3],t?rt(a,u[3],l,null):it(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){un(o,u),t=!1},d(u){u&&K(e),o&&o.d(u)}}}function fF(i,e,t){let{$$slots:a={},$$scope:o}=e;const u=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class IF extends Pn{constructor(e){super(),kn(this,e,fF,gF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function SF(i){let e,t,a,o;const u=i[4].default,l=et(u,i,i[3],null);return{c(){e=Un("a"),l&&l.c(),this.h()},l(c){e=Rn(c,"A",{href:!0,title:!0});var d=jn(e);l&&l.l(d),d.forEach(K),this.h()},h(){Se(e,"href",t=Fr(i[0].href)?Tr(i[1].baseUrl,i[0].href):i[0].href),Se(e,"title",a=i[0].title)},m(c,d){Fn(c,e,d),l&&l.m(e,null),o=!0},p(c,[d]){l&&l.p&&(!o||d&8)&&tt(l,u,c,c[3],o?rt(u,c[3],d,null):it(c[3]),null),(!o||d&3&&t!==(t=Fr(c[0].href)?Tr(c[1].baseUrl,c[0].href):c[0].href))&&Se(e,"href",t),(!o||d&1&&a!==(a=c[0].title))&&Se(e,"title",a)},i(c){o||(nn(l,c),o=!0)},o(c){un(l,c),o=!1},d(c){c&&K(e),l&&l.d(c)}}}function yF(i,e,t){let{$$slots:a={},$$scope:o}=e,{token:u}=e,{options:l}=e;const c=void 0;return i.$$set=d=>{"token"in d&&t(0,u=d.token),"options"in d&&t(1,l=d.options),"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class hF extends Pn{constructor(e){super(),kn(this,e,yF,SF,wn,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function TF(i){let e;const t=i[4].default,a=et(t,i,i[3],null);return{c(){a&&a.c()},l(o){a&&a.l(o)},m(o,u){a&&a.m(o,u),e=!0},p(o,[u]){a&&a.p&&(!e||u&8)&&tt(a,t,o,o[3],e?rt(t,o[3],u,null):it(o[3]),null)},i(o){e||(nn(a,o),e=!0)},o(o){un(a,o),e=!1},d(o){a&&a.d(o)}}}function FF(i,e,t){let{$$slots:a={},$$scope:o}=e;const u=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class CF extends Pn{constructor(e){super(),kn(this,e,FF,TF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function OF(i){let e,t;const a=i[4].default,o=et(a,i,i[3],null);return{c(){e=Un("dfn"),o&&o.c()},l(u){e=Rn(u,"DFN",{});var l=jn(e);o&&o.l(l),l.forEach(K)},m(u,l){Fn(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,a,u,u[3],t?rt(a,u[3],l,null):it(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){un(o,u),t=!1},d(u){u&&K(e),o&&o.d(u)}}}function EF(i,e,t){let{$$slots:a={},$$scope:o}=e;const u=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class bF extends Pn{constructor(e){super(),kn(this,e,EF,OF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function DF(i){let e,t;const a=i[4].default,o=et(a,i,i[3],null);return{c(){e=Un("del"),o&&o.c()},l(u){e=Rn(u,"DEL",{});var l=jn(e);o&&o.l(l),l.forEach(K)},m(u,l){Fn(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,a,u,u[3],t?rt(a,u[3],l,null):it(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){un(o,u),t=!1},d(u){u&&K(e),o&&o.d(u)}}}function AF(i,e,t){let{$$slots:a={},$$scope:o}=e;const u=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class vF extends Pn{constructor(e){super(),kn(this,e,AF,DF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function NF(i){let e,t;const a=i[4].default,o=et(a,i,i[3],null);return{c(){e=Un("em"),o&&o.c()},l(u){e=Rn(u,"EM",{});var l=jn(e);o&&o.l(l),l.forEach(K)},m(u,l){Fn(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,a,u,u[3],t?rt(a,u[3],l,null):it(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){un(o,u),t=!1},d(u){u&&K(e),o&&o.d(u)}}}function wF(i,e,t){let{$$slots:a={},$$scope:o}=e;const u=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class _F extends Pn{constructor(e){super(),kn(this,e,wF,NF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function BF(i){let e;return{c(){e=Un("hr")},l(t){e=Rn(t,"HR",{})},m(t,a){Fn(t,e,a)},p:ne,i:ne,o:ne,d(t){t&&K(e)}}}function UF(i,e,t){return[void 0,void 0,void 0]}class RF extends Pn{constructor(e){super(),kn(this,e,UF,BF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function xF(i){let e,t;const a=i[4].default,o=et(a,i,i[3],null);return{c(){e=Un("strong"),o&&o.c()},l(u){e=Rn(u,"STRONG",{});var l=jn(e);o&&o.l(l),l.forEach(K)},m(u,l){Fn(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,a,u,u[3],t?rt(a,u[3],l,null):it(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){un(o,u),t=!1},d(u){u&&K(e),o&&o.d(u)}}}function LF(i,e,t){let{$$slots:a={},$$scope:o}=e;const u=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class PF extends Pn{constructor(e){super(),kn(this,e,LF,xF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function kF(i){let e,t,a,o;return{c(){e=Un("img"),this.h()},l(u){e=Rn(u,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Jp(e.src,t=Fr(i[0].href)?Tr(i[1].baseUrl,i[0].href):i[0].href)||Se(e,"src",t),Se(e,"title",a=i[0].title),Se(e,"alt",o=i[0].text),Se(e,"class","markdown-image svelte-z38cge")},m(u,l){Fn(u,e,l)},p(u,[l]){l&3&&!Jp(e.src,t=Fr(u[0].href)?Tr(u[1].baseUrl,u[0].href):u[0].href)&&Se(e,"src",t),l&1&&a!==(a=u[0].title)&&Se(e,"title",a),l&1&&o!==(o=u[0].text)&&Se(e,"alt",o)},i:ne,o:ne,d(u){u&&K(e)}}}function MF(i,e,t){let{token:a}=e,{options:o}=e;const u=void 0;return i.$$set=l=>{"token"in l&&t(0,a=l.token),"options"in l&&t(1,o=l.options)},[a,o,u]}class qF extends Pn{constructor(e){super(),kn(this,e,MF,kF,wn,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function JF(i){let e;const t=i[4].default,a=et(t,i,i[3],null);return{c(){a&&a.c()},l(o){a&&a.l(o)},m(o,u){a&&a.m(o,u),e=!0},p(o,[u]){a&&a.p&&(!e||u&8)&&tt(a,t,o,o[3],e?rt(t,o[3],u,null):it(o[3]),null)},i(o){e||(nn(a,o),e=!0)},o(o){un(a,o),e=!1},d(o){a&&a.d(o)}}}function GF(i,e,t){let{$$slots:a={},$$scope:o}=e;const u=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,a]}class nc extends Pn{constructor(e){super(),kn(this,e,GF,JF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const VF=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,$F=Object.hasOwnProperty;class Uc{constructor(){this.occurrences,this.reset()}slug(e,t){const a=this;let o=jF(e,t===!0);const u=o;for(;$F.call(a.occurrences,o);)a.occurrences[u]++,o=u+"-"+a.occurrences[u];return a.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function jF(i,e){return typeof i!="string"?"":(e||(i=i.toLowerCase()),i.replace(VF,"").replace(/ /g,"-"))}function Vu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Si=Vu();function Rc(i){Si=i}const xc=/[&<>"']/,WF=new RegExp(xc.source,"g"),Lc=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,HF=new RegExp(Lc.source,"g"),QF={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ec=i=>QF[i];function Ae(i,e){if(e){if(xc.test(i))return i.replace(WF,ec)}else if(Lc.test(i))return i.replace(HF,ec);return i}const YF=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function KF(i){return i.replace(YF,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const zF=/(^|[^\[])\^/g;function Tn(i,e){let t=typeof i=="string"?i:i.source;e=e||"";const a={replace:(o,u)=>{let l=typeof u=="string"?u:u.source;return l=l.replace(zF,"$1"),t=t.replace(o,l),a},getRegex:()=>new RegExp(t,e)};return a}function tc(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const fr={exec:()=>null};function ic(i,e){const t=i.replace(/\|/g,(u,l,c)=>{let d=!1,I=l;for(;--I>=0&&c[I]==="\\";)d=!d;return d?"|":" |"}),a=t.split(/ \|/);let o=0;if(a[0].trim()||a.shift(),a.length>0&&!a[a.length-1].trim()&&a.pop(),e)if(a.length>e)a.splice(e);else for(;a.length<e;)a.push("");for(;o<a.length;o++)a[o]=a[o].trim().replace(/\\\|/g,"|");return a}function lr(i,e,t){const a=i.length;if(a===0)return"";let o=0;for(;o<a;){const u=i.charAt(a-o-1);if(u===e&&!t)o++;else if(u!==e&&t)o++;else break}return i.slice(0,a-o)}function XF(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let a=0;a<i.length;a++)if(i[a]==="\\")a++;else if(i[a]===e[0])t++;else if(i[a]===e[1]&&(t--,t<0))return a;return-1}function rc(i,e,t,a){const o=e.href,u=e.title?Ae(e.title):null,l=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){a.state.inLink=!0;const c={type:"link",raw:t,href:o,title:u,text:l,tokens:a.inlineTokens(l)};return a.state.inLink=!1,c}return{type:"image",raw:t,href:o,title:u,text:Ae(l)}}function ZF(i,e){const t=i.match(/^(\s+)(?:```)/);if(t===null)return e;const a=t[1];return e.split(`
`).map(o=>{const u=o.match(/^\s+/);if(u===null)return o;const[l]=u;return l.length>=a.length?o.slice(a.length):o}).join(`
`)}class _o{constructor(e){On(this,"options");On(this,"rules");On(this,"lexer");this.options=e||Si}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const a=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?a:lr(a,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const a=t[0],o=ZF(a,t[3]||"");return{type:"code",raw:a,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let a=t[2].trim();if(/#$/.test(a)){const o=lr(a,"#");(this.options.pedantic||!o||/ $/.test(o))&&(a=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:lr(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let a=lr(t[0],`
`).split(`
`),o="",u="";const l=[];for(;a.length>0;){let c=!1;const d=[];let I;for(I=0;I<a.length;I++)if(/^ {0,3}>/.test(a[I]))d.push(a[I]),c=!0;else if(!c)d.push(a[I]);else break;a=a.slice(I);const S=d.join(`
`),h=S.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${S}`:S,u=u?`${u}
${h}`:h;const w=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,l,!0),this.lexer.state.top=w,a.length===0)break;const b=l[l.length-1];if((b==null?void 0:b.type)==="code")break;if((b==null?void 0:b.type)==="blockquote"){const v=b,L=v.raw+`
`+a.join(`
`),j=this.blockquote(L);l[l.length-1]=j,o=o.substring(0,o.length-v.raw.length)+j.raw,u=u.substring(0,u.length-v.text.length)+j.text;break}else if((b==null?void 0:b.type)==="list"){const v=b,L=v.raw+`
`+a.join(`
`),j=this.list(L);l[l.length-1]=j,o=o.substring(0,o.length-b.raw.length)+j.raw,u=u.substring(0,u.length-v.raw.length)+j.raw,a=L.substring(l[l.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:l,text:u}}}list(e){let t=this.rules.block.list.exec(e);if(t){let a=t[1].trim();const o=a.length>1,u={type:"list",raw:"",ordered:o,start:o?+a.slice(0,-1):"",loose:!1,items:[]};a=o?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=o?a:"[*+-]");const l=new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let d=!1,I="",S="";if(!(t=l.exec(e))||this.rules.block.hr.test(e))break;I=t[0],e=e.substring(I.length);let h=t[2].split(`
`,1)[0].replace(/^\t+/,cn=>" ".repeat(3*cn.length)),w=e.split(`
`,1)[0],b=!h.trim(),v=0;if(this.options.pedantic?(v=2,S=h.trimStart()):b?v=t[1].length+1:(v=t[2].search(/[^ ]/),v=v>4?1:v,S=h.slice(v),v+=t[1].length),b&&/^ *$/.test(w)&&(I+=w+`
`,e=e.substring(w.length+1),d=!0),!d){const cn=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),An=new RegExp(`^ {0,${Math.min(3,v-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Sn=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:\`\`\`|~~~)`),_n=new RegExp(`^ {0,${Math.min(3,v-1)}}#`);for(;e;){const xn=e.split(`
`,1)[0];if(w=xn,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Sn.test(w)||_n.test(w)||cn.test(w)||An.test(e))break;if(w.search(/[^ ]/)>=v||!w.trim())S+=`
`+w.slice(v);else{if(b||h.search(/[^ ]/)>=4||Sn.test(h)||_n.test(h)||An.test(h))break;S+=`
`+w}!b&&!w.trim()&&(b=!0),I+=xn+`
`,e=e.substring(xn.length+1),h=w.slice(v)}}u.loose||(c?u.loose=!0:/\n *\n *$/.test(I)&&(c=!0));let L=null,j;this.options.gfm&&(L=/^\[[ xX]\] /.exec(S),L&&(j=L[0]!=="[ ] ",S=S.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:I,task:!!L,checked:j,loose:!1,text:S,tokens:[]}),u.raw+=I}u.items[u.items.length-1].raw=u.items[u.items.length-1].raw.trimEnd(),u.items[u.items.length-1].text=u.items[u.items.length-1].text.trimEnd(),u.raw=u.raw.trimEnd();for(let d=0;d<u.items.length;d++)if(this.lexer.state.top=!1,u.items[d].tokens=this.lexer.blockTokens(u.items[d].text,[]),!u.loose){const I=u.items[d].tokens.filter(h=>h.type==="space"),S=I.length>0&&I.some(h=>/\n.*\n/.test(h.raw));u.loose=S}if(u.loose)for(let d=0;d<u.items.length;d++)u.items[d].loose=!0;return u}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const a=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:a,raw:t[0],href:o,title:u}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const a=ic(t[1]),o=t[2].replace(/^\||\| *$/g,"").split("|"),u=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(a.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?l.align.push("right"):/^ *:-+: *$/.test(c)?l.align.push("center"):/^ *:-+ *$/.test(c)?l.align.push("left"):l.align.push(null);for(let c=0;c<a.length;c++)l.header.push({text:a[c],tokens:this.lexer.inline(a[c]),header:!0,align:l.align[c]});for(const c of u)l.rows.push(ic(c,l.header.length).map((d,I)=>({text:d,tokens:this.lexer.inline(d),header:!1,align:l.align[I]})));return l}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const a=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:a,tokens:this.lexer.inline(a)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Ae(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const a=t[2].trim();if(!this.options.pedantic&&/^</.test(a)){if(!/>$/.test(a))return;const l=lr(a.slice(0,-1),"\\");if((a.length-l.length)%2===0)return}else{const l=XF(t[2],"()");if(l>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let o=t[2],u="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],u=l[3])}else u=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(a)?o=o.slice(1):o=o.slice(1,-1)),rc(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let a;if((a=this.rules.inline.reflink.exec(e))||(a=this.rules.inline.nolink.exec(e))){const o=(a[2]||a[1]).replace(/\s+/g," "),u=t[o.toLowerCase()];if(!u){const l=a[0].charAt(0);return{type:"text",raw:l,text:l}}return rc(a,u,a[0],this.lexer)}}emStrong(e,t,a=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&a.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!a||this.rules.inline.punctuation.exec(a)){const l=[...o[0]].length-1;let c,d,I=l,S=0;const h=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+l);(o=h.exec(t))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(d=[...c].length,o[3]||o[4]){I+=d;continue}else if((o[5]||o[6])&&l%3&&!((l+d)%3)){S+=d;continue}if(I-=d,I>0)continue;d=Math.min(d,d+I+S);const w=[...o[0]][0].length,b=e.slice(0,l+o.index+w+d);if(Math.min(l,d)%2){const L=b.slice(1,-1);return{type:"em",raw:b,text:L,tokens:this.lexer.inlineTokens(L)}}const v=b.slice(2,-2);return{type:"strong",raw:b,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let a=t[2].replace(/\n/g," ");const o=/[^ ]/.test(a),u=/^ /.test(a)&&/ $/.test(a);return o&&u&&(a=a.substring(1,a.length-1)),a=Ae(a,!0),{type:"codespan",raw:t[0],text:a}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let a,o;return t[2]==="@"?(a=Ae(t[1]),o="mailto:"+a):(a=Ae(t[1]),o=a),{type:"link",raw:t[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}}url(e){var a;let t;if(t=this.rules.inline.url.exec(e)){let o,u;if(t[2]==="@")o=Ae(t[0]),u="mailto:"+o;else{let l;do l=t[0],t[0]=((a=this.rules.inline._backpedal.exec(t[0]))==null?void 0:a[0])??"";while(l!==t[0]);o=Ae(t[0]),t[1]==="www."?u="http://"+t[0]:u=t[0]}return{type:"link",raw:t[0],text:o,href:u,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let a;return this.lexer.state.inRawBlock?a=t[0]:a=Ae(t[0]),{type:"text",raw:t[0],text:a}}}}const nC=/^(?: *(?:\n|$))+/,eC=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,tC=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,br=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,iC=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Pc=/(?:[*+-]|\d{1,9}[.)])/,kc=Tn(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Pc).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),$u=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,rC=/^[^\n]+/,ju=/(?!\s*\])(?:\\.|[^\[\]\\])+/,oC=Tn(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ju).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),aC=Tn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Pc).getRegex(),Go="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Wu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,uC=Tn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Wu).replace("tag",Go).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Mc=Tn($u).replace("hr",br).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Go).getRegex(),sC=Tn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Mc).getRegex(),Hu={blockquote:sC,code:eC,def:oC,fences:tC,heading:iC,hr:br,html:uC,lheading:kc,list:aC,newline:nC,paragraph:Mc,table:fr,text:rC},oc=Tn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",br).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Go).getRegex(),lC={...Hu,table:oc,paragraph:Tn($u).replace("hr",br).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",oc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Go).getRegex()},pC={...Hu,html:Tn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Wu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:fr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Tn($u).replace("hr",br).replace("heading",` *#{1,6} *[^
]`).replace("lheading",kc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},qc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,cC=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Jc=/^( {2,}|\\)\n(?!\s*$)/,dC=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Dr="\\p{P}\\p{S}",mC=Tn(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Dr).getRegex(),gC=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,fC=Tn(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Dr).getRegex(),IC=Tn("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Dr).getRegex(),SC=Tn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Dr).getRegex(),yC=Tn(/\\([punct])/,"gu").replace(/punct/g,Dr).getRegex(),hC=Tn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),TC=Tn(Wu).replace("(?:-->|$)","-->").getRegex(),FC=Tn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",TC).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Bo=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,CC=Tn(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Bo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Gc=Tn(/^!?\[(label)\]\[(ref)\]/).replace("label",Bo).replace("ref",ju).getRegex(),Vc=Tn(/^!?\[(ref)\](?:\[\])?/).replace("ref",ju).getRegex(),OC=Tn("reflink|nolink(?!\\()","g").replace("reflink",Gc).replace("nolink",Vc).getRegex(),Qu={_backpedal:fr,anyPunctuation:yC,autolink:hC,blockSkip:gC,br:Jc,code:cC,del:fr,emStrongLDelim:fC,emStrongRDelimAst:IC,emStrongRDelimUnd:SC,escape:qc,link:CC,nolink:Vc,punctuation:mC,reflink:Gc,reflinkSearch:OC,tag:FC,text:dC,url:fr},EC={...Qu,link:Tn(/^!?\[(label)\]\((.*?)\)/).replace("label",Bo).getRegex(),reflink:Tn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Bo).getRegex()},Au={...Qu,escape:Tn(qc).replace("])","~|])").getRegex(),url:Tn(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},bC={...Au,br:Tn(Jc).replace("{2,}","*").getRegex(),text:Tn(Au.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Co={normal:Hu,gfm:lC,pedantic:pC},pr={normal:Qu,gfm:Au,breaks:bC,pedantic:EC};class ze{constructor(e){On(this,"tokens");On(this,"options");On(this,"state");On(this,"tokenizer");On(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Si,this.options.tokenizer=this.options.tokenizer||new _o,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Co.normal,inline:pr.normal};this.options.pedantic?(t.block=Co.pedantic,t.inline=pr.pedantic):this.options.gfm&&(t.block=Co.gfm,this.options.breaks?t.inline=pr.breaks:t.inline=pr.gfm),this.tokenizer.rules=t}static get rules(){return{block:Co,inline:pr}}static lex(e,t){return new ze(t).lex(e)}static lexInline(e,t){return new ze(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const a=this.inlineQueue[t];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],a=!1){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(c,d,I)=>d+"    ".repeat(I.length));let o,u,l;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(o=c.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),u=t[t.length-1],u&&(u.type==="paragraph"||u.type==="text")?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=u.text):t.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),u=t[t.length-1],u&&(u.type==="paragraph"||u.type==="text")?(u.raw+=`
`+o.raw,u.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=u.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),t.push(o);continue}if(l=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const d=e.slice(1);let I;this.options.extensions.startBlock.forEach(S=>{I=S.call({lexer:this},d),typeof I=="number"&&I>=0&&(c=Math.min(c,I))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(l))){u=t[t.length-1],a&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=u.text):t.push(o),a=l.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),u=t[t.length-1],u&&u.type==="text"?(u.raw+=`
`+o.raw,u.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=u.text):t.push(o);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let a,o,u,l=e,c,d,I;if(this.tokens.links){const S=Object.keys(this.tokens.links);if(S.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)S.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,c.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(d||(I=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(S=>(a=S.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))){if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),o=t[t.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):t.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length),o=t[t.length-1],o&&a.type==="text"&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):t.push(a);continue}if(a=this.tokenizer.emStrong(e,l,I)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.del(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),t.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),t.push(a);continue}if(u=e,this.options.extensions&&this.options.extensions.startInline){let S=1/0;const h=e.slice(1);let w;this.options.extensions.startInline.forEach(b=>{w=b.call({lexer:this},h),typeof w=="number"&&w>=0&&(S=Math.min(S,w))}),S<1/0&&S>=0&&(u=e.substring(0,S+1))}if(a=this.tokenizer.inlineText(u)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(I=a.raw.slice(-1)),d=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=a.raw,o.text+=a.text):t.push(a);continue}if(e){const S="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(S);break}else throw new Error(S)}}return t}}class Uo{constructor(e){On(this,"options");On(this,"parser");this.options=e||Si}space(e){return""}code({text:e,lang:t,escaped:a}){var l;const o=(l=(t||"").match(/^\S*/))==null?void 0:l[0],u=e.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+Ae(o)+'">'+(a?u:Ae(u,!0))+`</code></pre>
`:"<pre><code>"+(a?u:Ae(u,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,a=e.start;let o="";for(let c=0;c<e.items.length;c++){const d=e.items[c];o+=this.listitem(d)}const u=t?"ol":"ul",l=t&&a!==1?' start="'+a+'"':"";return"<"+u+l+`>
`+o+"</"+u+`>
`}listitem(e){let t="";if(e.task){const a=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=a+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=a+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:a+" ",text:a+" "}):t+=a+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",a="";for(let u=0;u<e.header.length;u++)a+=this.tablecell(e.header[u]);t+=this.tablerow({text:a});let o="";for(let u=0;u<e.rows.length;u++){const l=e.rows[u];a="";for(let c=0;c<l.length;c++)a+=this.tablecell(l[c]);o+=this.tablerow({text:a})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),a=e.header?"th":"td";return(e.align?`<${a} align="${e.align}">`:`<${a}>`)+t+`</${a}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:a}){const o=this.parser.parseInline(a),u=tc(e);if(u===null)return o;e=u;let l='<a href="'+e+'"';return t&&(l+=' title="'+t+'"'),l+=">"+o+"</a>",l}image({href:e,title:t,text:a}){const o=tc(e);if(o===null)return a;e=o;let u=`<img src="${e}" alt="${a}"`;return t&&(u+=` title="${t}"`),u+=">",u}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Yu{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class ct{constructor(e){On(this,"options");On(this,"renderer");On(this,"textRenderer");this.options=e||Si,this.options.renderer=this.options.renderer||new Uo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Yu}static parse(e,t){return new ct(t).parse(e)}static parseInline(e,t){return new ct(t).parseInline(e)}parse(e,t=!0){let a="";for(let o=0;o<e.length;o++){const u=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const c=u,d=this.options.extensions.renderers[c.type].call({parser:this},c);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){a+=d||"";continue}}const l=u;switch(l.type){case"space":{a+=this.renderer.space(l);continue}case"hr":{a+=this.renderer.hr(l);continue}case"heading":{a+=this.renderer.heading(l);continue}case"code":{a+=this.renderer.code(l);continue}case"table":{a+=this.renderer.table(l);continue}case"blockquote":{a+=this.renderer.blockquote(l);continue}case"list":{a+=this.renderer.list(l);continue}case"html":{a+=this.renderer.html(l);continue}case"paragraph":{a+=this.renderer.paragraph(l);continue}case"text":{let c=l,d=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],d+=`
`+this.renderer.text(c);t?a+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d}]}):a+=d;continue}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return a}parseInline(e,t){t=t||this.renderer;let a="";for(let o=0;o<e.length;o++){const u=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){a+=c||"";continue}}const l=u;switch(l.type){case"escape":{a+=t.text(l);break}case"html":{a+=t.html(l);break}case"link":{a+=t.link(l);break}case"image":{a+=t.image(l);break}case"strong":{a+=t.strong(l);break}case"em":{a+=t.em(l);break}case"codespan":{a+=t.codespan(l);break}case"br":{a+=t.br(l);break}case"del":{a+=t.del(l);break}case"text":{a+=t.text(l);break}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return a}}class Ir{constructor(e){On(this,"options");this.options=e||Si}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}On(Ir,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Rt,$c,vu,jc;class DC{constructor(...e){Mp(this,Rt);On(this,"defaults",Vu());On(this,"options",this.setOptions);On(this,"parse",sr(this,Rt,vu).call(this,ze.lex,ct.parse));On(this,"parseInline",sr(this,Rt,vu).call(this,ze.lexInline,ct.parseInline));On(this,"Parser",ct);On(this,"Renderer",Uo);On(this,"TextRenderer",Yu);On(this,"Lexer",ze);On(this,"Tokenizer",_o);On(this,"Hooks",Ir);this.use(...e)}walkTokens(e,t){var o,u;let a=[];for(const l of e)switch(a=a.concat(t.call(this,l)),l.type){case"table":{const c=l;for(const d of c.header)a=a.concat(this.walkTokens(d.tokens,t));for(const d of c.rows)for(const I of d)a=a.concat(this.walkTokens(I.tokens,t));break}case"list":{const c=l;a=a.concat(this.walkTokens(c.items,t));break}default:{const c=l;(u=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&u[c.type]?this.defaults.extensions.childTokens[c.type].forEach(d=>{const I=c[d].flat(1/0);a=a.concat(this.walkTokens(I,t))}):c.tokens&&(a=a.concat(this.walkTokens(c.tokens,t)))}}return a}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(a=>{const o={...a};if(o.async=this.defaults.async||o.async||!1,a.extensions&&(a.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const l=t.renderers[u.name];l?t.renderers[u.name]=function(...c){let d=u.renderer.apply(this,c);return d===!1&&(d=l.apply(this,c)),d}:t.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[u.level];l?l.unshift(u.tokenizer):t[u.level]=[u.tokenizer],u.start&&(u.level==="block"?t.startBlock?t.startBlock.push(u.start):t.startBlock=[u.start]:u.level==="inline"&&(t.startInline?t.startInline.push(u.start):t.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(t.childTokens[u.name]=u.childTokens)}),o.extensions=t),a.renderer){const u=this.defaults.renderer||new Uo(this.defaults);for(const l in a.renderer){if(!(l in u))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;const c=l;let d=a.renderer[c];a.useNewRenderer||(d=sr(this,Rt,$c).call(this,d,c,u));const I=u[c];u[c]=(...S)=>{let h=d.apply(u,S);return h===!1&&(h=I.apply(u,S)),h||""}}o.renderer=u}if(a.tokenizer){const u=this.defaults.tokenizer||new _o(this.defaults);for(const l in a.tokenizer){if(!(l in u))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const c=l,d=a.tokenizer[c],I=u[c];u[c]=(...S)=>{let h=d.apply(u,S);return h===!1&&(h=I.apply(u,S)),h}}o.tokenizer=u}if(a.hooks){const u=this.defaults.hooks||new Ir;for(const l in a.hooks){if(!(l in u))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const c=l,d=a.hooks[c],I=u[c];Ir.passThroughHooks.has(l)?u[c]=S=>{if(this.defaults.async)return Promise.resolve(d.call(u,S)).then(w=>I.call(u,w));const h=d.call(u,S);return I.call(u,h)}:u[c]=(...S)=>{let h=d.apply(u,S);return h===!1&&(h=I.apply(u,S)),h}}o.hooks=u}if(a.walkTokens){const u=this.defaults.walkTokens,l=a.walkTokens;o.walkTokens=function(c){let d=[];return d.push(l.call(this,c)),u&&(d=d.concat(u.call(this,c))),d}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ze.lex(e,t??this.defaults)}parser(e,t){return ct.parse(e,t??this.defaults)}}Rt=new WeakSet,$c=function(e,t,a){switch(t){case"heading":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,a.parser.parseInline(o.tokens),o.depth,KF(a.parser.parseInline(o.tokens,a.parser.textRenderer)))};case"code":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,o.text,o.lang,!!o.escaped)};case"table":return function(o){if(!o.type||o.type!==t)return e.apply(this,arguments);let u="",l="";for(let d=0;d<o.header.length;d++)l+=this.tablecell({text:o.header[d].text,tokens:o.header[d].tokens,header:!0,align:o.align[d]});u+=this.tablerow({text:l});let c="";for(let d=0;d<o.rows.length;d++){const I=o.rows[d];l="";for(let S=0;S<I.length;S++)l+=this.tablecell({text:I[S].text,tokens:I[S].tokens,header:!1,align:o.align[S]});c+=this.tablerow({text:l})}return e.call(this,u,c)};case"blockquote":return function(o){if(!o.type||o.type!==t)return e.apply(this,arguments);const u=this.parser.parse(o.tokens);return e.call(this,u)};case"list":return function(o){if(!o.type||o.type!==t)return e.apply(this,arguments);const u=o.ordered,l=o.start,c=o.loose;let d="";for(let I=0;I<o.items.length;I++){const S=o.items[I],h=S.checked,w=S.task;let b="";if(S.task){const v=this.checkbox({checked:!!h});c?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=v+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=v+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:v+" "}):b+=v+" "}b+=this.parser.parse(S.tokens,c),d+=this.listitem({type:"list_item",raw:b,text:b,task:w,checked:!!h,loose:c,tokens:S.tokens})}return e.call(this,d,u,l)};case"html":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,o.text,o.block)};case"paragraph":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,this.parser.parseInline(o.tokens))};case"escape":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,o.text)};case"link":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,o.href,o.title,this.parser.parseInline(o.tokens))};case"image":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,o.href,o.title,o.text)};case"strong":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,this.parser.parseInline(o.tokens))};case"em":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,this.parser.parseInline(o.tokens))};case"codespan":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,o.text)};case"del":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,this.parser.parseInline(o.tokens))};case"text":return function(o){return!o.type||o.type!==t?e.apply(this,arguments):e.call(this,o.text)}}return e},vu=function(e,t){return(a,o)=>{const u={...o},l={...this.defaults,...u};this.defaults.async===!0&&u.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const c=sr(this,Rt,jc).call(this,!!l.silent,!!l.async);if(typeof a>"u"||a===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof a!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(a)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(a):a).then(d=>e(d,l)).then(d=>l.hooks?l.hooks.processAllTokens(d):d).then(d=>l.walkTokens?Promise.all(this.walkTokens(d,l.walkTokens)).then(()=>d):d).then(d=>t(d,l)).then(d=>l.hooks?l.hooks.postprocess(d):d).catch(c);try{l.hooks&&(a=l.hooks.preprocess(a));let d=e(a,l);l.hooks&&(d=l.hooks.processAllTokens(d)),l.walkTokens&&this.walkTokens(d,l.walkTokens);let I=t(d,l);return l.hooks&&(I=l.hooks.postprocess(I)),I}catch(d){return c(d)}}},jc=function(e,t){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+Ae(a.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(a);throw a}};const di=new DC;function hn(i,e){return di.parse(i,e)}hn.options=hn.setOptions=function(i){return di.setOptions(i),hn.defaults=di.defaults,Rc(hn.defaults),hn};hn.getDefaults=Vu;hn.defaults=Si;hn.use=function(...i){return di.use(...i),hn.defaults=di.defaults,Rc(hn.defaults),hn};hn.walkTokens=function(i,e){return di.walkTokens(i,e)};hn.parseInline=di.parseInline;hn.Parser=ct;hn.parser=ct.parse;hn.Renderer=Uo;hn.TextRenderer=Yu;hn.Lexer=ze;hn.lexer=ze.lex;hn.Tokenizer=_o;hn.Hooks=Ir;hn.parse=hn;hn.options;hn.setOptions;hn.use;hn.walkTokens;hn.parseInline;ct.parse;ze.lex;function AC(i){return new ze().lex(i)}const vC=()=>({heading:VT,blockquote:WT,list:YT,list_item:XT,br:eF,code:rF,codespan:uF,table:pF,html:mF,paragraph:IF,link:hF,text:CF,def:bF,del:vF,em:_F,hr:RF,strong:PF,image:qF,space:nc,escape:nc}),NC=()=>({baseUrl:"/",slugger:new Uc});function wC(){const i=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||i(e)},BT(()=>{console.warn=i})}function _C(i){let e,t;return e=new Jo({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Ht(e.$$.fragment)},l(a){Ii(e.$$.fragment,a)},m(a,o){Qt(e,a,o),t=!0},p(a,[o]){const u={};o&1&&(u.tokens=a[0]),o&2&&(u.renderers=a[1]),o&4&&(u.options=a[2]),e.$set(u)},i(a){t||(nn(e.$$.fragment,a),t=!0)},o(a){un(e.$$.fragment,a),t=!1},d(a){Yt(e,a)}}}function BC(i,e,t){wC();let{source:a}=e,{options:o={}}=e,{renderers:u={}}=e,l,c,d;return i.$$set=I=>{"source"in I&&t(3,a=I.source),"options"in I&&t(4,o=I.options),"renderers"in I&&t(5,u=I.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,l=AC(a)),t(1,c={...vC(),...u}),t(2,d={...NC(),...o}))},[l,c,d,a,o,u]}class xb extends Pn{constructor(e){super(),kn(this,e,BC,_C,wn,{source:3,options:4,renderers:5})}}const Ar={joinUrlPaths:Tr,isRelative:Fr,generatePathSegment:Bc};var cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function UC(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ro={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ro.exports;(function(i,e){(function(){var t,a="4.17.21",o=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",I=500,S="__lodash_placeholder__",h=1,w=2,b=4,v=1,L=2,j=1,cn=2,An=4,Sn=8,_n=16,xn=32,ae=64,ee=128,ft=256,U=512,z=30,ue="...",xt=800,Xt=16,wr=1,hi=2,_r=3,at=1/0,Ge=9007199254740991,Ti=17976931348623157e292,Zt=NaN,Ne=4294967295,D=Ne-1,G=Ne>>>1,k=[["ary",ee],["bind",j],["bindKey",cn],["curry",Sn],["curryRight",_n],["flip",U],["partial",xn],["partialRight",ae],["rearg",ft]],q="[object Arguments]",gn="[object Array]",Mn="[object AsyncFunction]",fn="[object Boolean]",we="[object Date]",Ji="[object DOMException]",Lt="[object Error]",te="[object Function]",us="[object GeneratorFunction]",Ve="[object Map]",Gi="[object Number]",Vd="[object Null]",It="[object Object]",ss="[object Promise]",$d="[object Proxy]",Vi="[object RegExp]",$e="[object Set]",$i="[object String]",Br="[object Symbol]",jd="[object Undefined]",ji="[object WeakMap]",Wd="[object WeakSet]",Wi="[object ArrayBuffer]",Fi="[object DataView]",Xo="[object Float32Array]",Zo="[object Float64Array]",na="[object Int8Array]",ea="[object Int16Array]",ta="[object Int32Array]",ia="[object Uint8Array]",ra="[object Uint8ClampedArray]",oa="[object Uint16Array]",aa="[object Uint32Array]",Hd=/\b__p \+= '';/g,Qd=/\b(__p \+=) '' \+/g,Yd=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ls=/&(?:amp|lt|gt|quot|#39);/g,ps=/[&<>"']/g,Kd=RegExp(ls.source),zd=RegExp(ps.source),Xd=/<%-([\s\S]+?)%>/g,Zd=/<%([\s\S]+?)%>/g,cs=/<%=([\s\S]+?)%>/g,nm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,em=/^\w*$/,tm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ua=/[\\^$.*+?()[\]{}|]/g,im=RegExp(ua.source),sa=/^\s+/,rm=/\s/,om=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,am=/\{\n\/\* \[wrapped with (.+)\] \*/,um=/,? & /,sm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lm=/[()=,{}\[\]\/\s]/,pm=/\\(\\)?/g,cm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ds=/\w*$/,dm=/^[-+]0x[0-9a-f]+$/i,mm=/^0b[01]+$/i,gm=/^\[object .+?Constructor\]$/,fm=/^0o[0-7]+$/i,Im=/^(?:0|[1-9]\d*)$/,Sm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ur=/($^)/,ym=/['\n\r\u2028\u2029\\]/g,Rr="\\ud800-\\udfff",hm="\\u0300-\\u036f",Tm="\\ufe20-\\ufe2f",Fm="\\u20d0-\\u20ff",ms=hm+Tm+Fm,gs="\\u2700-\\u27bf",fs="a-z\\xdf-\\xf6\\xf8-\\xff",Cm="\\xac\\xb1\\xd7\\xf7",Om="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Em="\\u2000-\\u206f",bm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Is="A-Z\\xc0-\\xd6\\xd8-\\xde",Ss="\\ufe0e\\ufe0f",ys=Cm+Om+Em+bm,la="['’]",Dm="["+Rr+"]",hs="["+ys+"]",xr="["+ms+"]",Ts="\\d+",Am="["+gs+"]",Fs="["+fs+"]",Cs="[^"+Rr+ys+Ts+gs+fs+Is+"]",pa="\\ud83c[\\udffb-\\udfff]",vm="(?:"+xr+"|"+pa+")",Os="[^"+Rr+"]",ca="(?:\\ud83c[\\udde6-\\uddff]){2}",da="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="["+Is+"]",Es="\\u200d",bs="(?:"+Fs+"|"+Cs+")",Nm="(?:"+Ci+"|"+Cs+")",Ds="(?:"+la+"(?:d|ll|m|re|s|t|ve))?",As="(?:"+la+"(?:D|LL|M|RE|S|T|VE))?",vs=vm+"?",Ns="["+Ss+"]?",wm="(?:"+Es+"(?:"+[Os,ca,da].join("|")+")"+Ns+vs+")*",_m="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Bm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ws=Ns+vs+wm,Um="(?:"+[Am,ca,da].join("|")+")"+ws,Rm="(?:"+[Os+xr+"?",xr,ca,da,Dm].join("|")+")",xm=RegExp(la,"g"),Lm=RegExp(xr,"g"),ma=RegExp(pa+"(?="+pa+")|"+Rm+ws,"g"),Pm=RegExp([Ci+"?"+Fs+"+"+Ds+"(?="+[hs,Ci,"$"].join("|")+")",Nm+"+"+As+"(?="+[hs,Ci+bs,"$"].join("|")+")",Ci+"?"+bs+"+"+Ds,Ci+"+"+As,Bm,_m,Ts,Um].join("|"),"g"),km=RegExp("["+Es+Rr+ms+Ss+"]"),Mm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Jm=-1,vn={};vn[Xo]=vn[Zo]=vn[na]=vn[ea]=vn[ta]=vn[ia]=vn[ra]=vn[oa]=vn[aa]=!0,vn[q]=vn[gn]=vn[Wi]=vn[fn]=vn[Fi]=vn[we]=vn[Lt]=vn[te]=vn[Ve]=vn[Gi]=vn[It]=vn[Vi]=vn[$e]=vn[$i]=vn[ji]=!1;var bn={};bn[q]=bn[gn]=bn[Wi]=bn[Fi]=bn[fn]=bn[we]=bn[Xo]=bn[Zo]=bn[na]=bn[ea]=bn[ta]=bn[Ve]=bn[Gi]=bn[It]=bn[Vi]=bn[$e]=bn[$i]=bn[Br]=bn[ia]=bn[ra]=bn[oa]=bn[aa]=!0,bn[Lt]=bn[te]=bn[ji]=!1;var Gm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Vm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$m={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},jm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Wm=parseFloat,Hm=parseInt,_s=typeof cr=="object"&&cr&&cr.Object===Object&&cr,Qm=typeof self=="object"&&self&&self.Object===Object&&self,Xn=_s||Qm||Function("return this")(),ga=e&&!e.nodeType&&e,ni=ga&&!0&&i&&!i.nodeType&&i,Bs=ni&&ni.exports===ga,fa=Bs&&_s.process,_e=function(){try{var C=ni&&ni.require&&ni.require("util").types;return C||fa&&fa.binding&&fa.binding("util")}catch{}}(),Us=_e&&_e.isArrayBuffer,Rs=_e&&_e.isDate,xs=_e&&_e.isMap,Ls=_e&&_e.isRegExp,Ps=_e&&_e.isSet,ks=_e&&_e.isTypedArray;function Te(C,A,E){switch(E.length){case 0:return C.call(A);case 1:return C.call(A,E[0]);case 2:return C.call(A,E[0],E[1]);case 3:return C.call(A,E[0],E[1],E[2])}return C.apply(A,E)}function Ym(C,A,E,J){for(var X=-1,mn=C==null?0:C.length;++X<mn;){var Hn=C[X];A(J,Hn,E(Hn),C)}return J}function Be(C,A){for(var E=-1,J=C==null?0:C.length;++E<J&&A(C[E],E,C)!==!1;);return C}function Km(C,A){for(var E=C==null?0:C.length;E--&&A(C[E],E,C)!==!1;);return C}function Ms(C,A){for(var E=-1,J=C==null?0:C.length;++E<J;)if(!A(C[E],E,C))return!1;return!0}function Pt(C,A){for(var E=-1,J=C==null?0:C.length,X=0,mn=[];++E<J;){var Hn=C[E];A(Hn,E,C)&&(mn[X++]=Hn)}return mn}function Lr(C,A){var E=C==null?0:C.length;return!!E&&Oi(C,A,0)>-1}function Ia(C,A,E){for(var J=-1,X=C==null?0:C.length;++J<X;)if(E(A,C[J]))return!0;return!1}function Nn(C,A){for(var E=-1,J=C==null?0:C.length,X=Array(J);++E<J;)X[E]=A(C[E],E,C);return X}function kt(C,A){for(var E=-1,J=A.length,X=C.length;++E<J;)C[X+E]=A[E];return C}function Sa(C,A,E,J){var X=-1,mn=C==null?0:C.length;for(J&&mn&&(E=C[++X]);++X<mn;)E=A(E,C[X],X,C);return E}function zm(C,A,E,J){var X=C==null?0:C.length;for(J&&X&&(E=C[--X]);X--;)E=A(E,C[X],X,C);return E}function ya(C,A){for(var E=-1,J=C==null?0:C.length;++E<J;)if(A(C[E],E,C))return!0;return!1}var Xm=ha("length");function Zm(C){return C.split("")}function ng(C){return C.match(sm)||[]}function qs(C,A,E){var J;return E(C,function(X,mn,Hn){if(A(X,mn,Hn))return J=mn,!1}),J}function Pr(C,A,E,J){for(var X=C.length,mn=E+(J?1:-1);J?mn--:++mn<X;)if(A(C[mn],mn,C))return mn;return-1}function Oi(C,A,E){return A===A?dg(C,A,E):Pr(C,Js,E)}function eg(C,A,E,J){for(var X=E-1,mn=C.length;++X<mn;)if(J(C[X],A))return X;return-1}function Js(C){return C!==C}function Gs(C,A){var E=C==null?0:C.length;return E?Fa(C,A)/E:Zt}function ha(C){return function(A){return A==null?t:A[C]}}function Ta(C){return function(A){return C==null?t:C[A]}}function Vs(C,A,E,J,X){return X(C,function(mn,Hn,Cn){E=J?(J=!1,mn):A(E,mn,Hn,Cn)}),E}function tg(C,A){var E=C.length;for(C.sort(A);E--;)C[E]=C[E].value;return C}function Fa(C,A){for(var E,J=-1,X=C.length;++J<X;){var mn=A(C[J]);mn!==t&&(E=E===t?mn:E+mn)}return E}function Ca(C,A){for(var E=-1,J=Array(C);++E<C;)J[E]=A(E);return J}function ig(C,A){return Nn(A,function(E){return[E,C[E]]})}function $s(C){return C&&C.slice(0,Qs(C)+1).replace(sa,"")}function Fe(C){return function(A){return C(A)}}function Oa(C,A){return Nn(A,function(E){return C[E]})}function Hi(C,A){return C.has(A)}function js(C,A){for(var E=-1,J=C.length;++E<J&&Oi(A,C[E],0)>-1;);return E}function Ws(C,A){for(var E=C.length;E--&&Oi(A,C[E],0)>-1;);return E}function rg(C,A){for(var E=C.length,J=0;E--;)C[E]===A&&++J;return J}var og=Ta(Gm),ag=Ta(Vm);function ug(C){return"\\"+jm[C]}function sg(C,A){return C==null?t:C[A]}function Ei(C){return km.test(C)}function lg(C){return Mm.test(C)}function pg(C){for(var A,E=[];!(A=C.next()).done;)E.push(A.value);return E}function Ea(C){var A=-1,E=Array(C.size);return C.forEach(function(J,X){E[++A]=[X,J]}),E}function Hs(C,A){return function(E){return C(A(E))}}function Mt(C,A){for(var E=-1,J=C.length,X=0,mn=[];++E<J;){var Hn=C[E];(Hn===A||Hn===S)&&(C[E]=S,mn[X++]=E)}return mn}function kr(C){var A=-1,E=Array(C.size);return C.forEach(function(J){E[++A]=J}),E}function cg(C){var A=-1,E=Array(C.size);return C.forEach(function(J){E[++A]=[J,J]}),E}function dg(C,A,E){for(var J=E-1,X=C.length;++J<X;)if(C[J]===A)return J;return-1}function mg(C,A,E){for(var J=E+1;J--;)if(C[J]===A)return J;return J}function bi(C){return Ei(C)?fg(C):Xm(C)}function je(C){return Ei(C)?Ig(C):Zm(C)}function Qs(C){for(var A=C.length;A--&&rm.test(C.charAt(A)););return A}var gg=Ta($m);function fg(C){for(var A=ma.lastIndex=0;ma.test(C);)++A;return A}function Ig(C){return C.match(ma)||[]}function Sg(C){return C.match(Pm)||[]}var yg=function C(A){A=A==null?Xn:Di.defaults(Xn.Object(),A,Di.pick(Xn,qm));var E=A.Array,J=A.Date,X=A.Error,mn=A.Function,Hn=A.Math,Cn=A.Object,ba=A.RegExp,hg=A.String,Ue=A.TypeError,Mr=E.prototype,Tg=mn.prototype,Ai=Cn.prototype,qr=A["__core-js_shared__"],Jr=Tg.toString,yn=Ai.hasOwnProperty,Fg=0,Ys=function(){var n=/[^.]+$/.exec(qr&&qr.keys&&qr.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Gr=Ai.toString,Cg=Jr.call(Cn),Og=Xn._,Eg=ba("^"+Jr.call(yn).replace(ua,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Vr=Bs?A.Buffer:t,qt=A.Symbol,$r=A.Uint8Array,Ks=Vr?Vr.allocUnsafe:t,jr=Hs(Cn.getPrototypeOf,Cn),zs=Cn.create,Xs=Ai.propertyIsEnumerable,Wr=Mr.splice,Zs=qt?qt.isConcatSpreadable:t,Qi=qt?qt.iterator:t,ei=qt?qt.toStringTag:t,Hr=function(){try{var n=ai(Cn,"defineProperty");return n({},"",{}),n}catch{}}(),bg=A.clearTimeout!==Xn.clearTimeout&&A.clearTimeout,Dg=J&&J.now!==Xn.Date.now&&J.now,Ag=A.setTimeout!==Xn.setTimeout&&A.setTimeout,Qr=Hn.ceil,Yr=Hn.floor,Da=Cn.getOwnPropertySymbols,vg=Vr?Vr.isBuffer:t,nl=A.isFinite,Ng=Mr.join,wg=Hs(Cn.keys,Cn),Qn=Hn.max,ie=Hn.min,_g=J.now,Bg=A.parseInt,el=Hn.random,Ug=Mr.reverse,Aa=ai(A,"DataView"),Yi=ai(A,"Map"),va=ai(A,"Promise"),vi=ai(A,"Set"),Ki=ai(A,"WeakMap"),zi=ai(Cn,"create"),Kr=Ki&&new Ki,Ni={},Rg=ui(Aa),xg=ui(Yi),Lg=ui(va),Pg=ui(vi),kg=ui(Ki),zr=qt?qt.prototype:t,Xi=zr?zr.valueOf:t,tl=zr?zr.toString:t;function g(n){if(Ln(n)&&!Z(n)&&!(n instanceof sn)){if(n instanceof Re)return n;if(yn.call(n,"__wrapped__"))return ip(n)}return new Re(n)}var wi=function(){function n(){}return function(r){if(!Bn(r))return{};if(zs)return zs(r);n.prototype=r;var s=new n;return n.prototype=t,s}}();function Xr(){}function Re(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}g.templateSettings={escape:Xd,evaluate:Zd,interpolate:cs,variable:"",imports:{_:g}},g.prototype=Xr.prototype,g.prototype.constructor=g,Re.prototype=wi(Xr.prototype),Re.prototype.constructor=Re;function sn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ne,this.__views__=[]}function Mg(){var n=new sn(this.__wrapped__);return n.__actions__=me(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=me(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=me(this.__views__),n}function qg(){if(this.__filtered__){var n=new sn(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Jg(){var n=this.__wrapped__.value(),r=this.__dir__,s=Z(n),p=r<0,m=s?n.length:0,f=nI(0,m,this.__views__),y=f.start,T=f.end,O=T-y,N=p?T:y-1,_=this.__iteratees__,R=_.length,P=0,$=ie(O,this.__takeCount__);if(!s||!p&&m==O&&$==O)return Dl(n,this.__actions__);var Q=[];n:for(;O--&&P<$;){N+=r;for(var tn=-1,Y=n[N];++tn<R;){var an=_[tn],pn=an.iteratee,Ee=an.type,pe=pn(Y);if(Ee==hi)Y=pe;else if(!pe){if(Ee==wr)continue n;break n}}Q[P++]=Y}return Q}sn.prototype=wi(Xr.prototype),sn.prototype.constructor=sn;function ti(n){var r=-1,s=n==null?0:n.length;for(this.clear();++r<s;){var p=n[r];this.set(p[0],p[1])}}function Gg(){this.__data__=zi?zi(null):{},this.size=0}function Vg(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function $g(n){var r=this.__data__;if(zi){var s=r[n];return s===d?t:s}return yn.call(r,n)?r[n]:t}function jg(n){var r=this.__data__;return zi?r[n]!==t:yn.call(r,n)}function Wg(n,r){var s=this.__data__;return this.size+=this.has(n)?0:1,s[n]=zi&&r===t?d:r,this}ti.prototype.clear=Gg,ti.prototype.delete=Vg,ti.prototype.get=$g,ti.prototype.has=jg,ti.prototype.set=Wg;function St(n){var r=-1,s=n==null?0:n.length;for(this.clear();++r<s;){var p=n[r];this.set(p[0],p[1])}}function Hg(){this.__data__=[],this.size=0}function Qg(n){var r=this.__data__,s=Zr(r,n);if(s<0)return!1;var p=r.length-1;return s==p?r.pop():Wr.call(r,s,1),--this.size,!0}function Yg(n){var r=this.__data__,s=Zr(r,n);return s<0?t:r[s][1]}function Kg(n){return Zr(this.__data__,n)>-1}function zg(n,r){var s=this.__data__,p=Zr(s,n);return p<0?(++this.size,s.push([n,r])):s[p][1]=r,this}St.prototype.clear=Hg,St.prototype.delete=Qg,St.prototype.get=Yg,St.prototype.has=Kg,St.prototype.set=zg;function yt(n){var r=-1,s=n==null?0:n.length;for(this.clear();++r<s;){var p=n[r];this.set(p[0],p[1])}}function Xg(){this.size=0,this.__data__={hash:new ti,map:new(Yi||St),string:new ti}}function Zg(n){var r=co(this,n).delete(n);return this.size-=r?1:0,r}function nf(n){return co(this,n).get(n)}function ef(n){return co(this,n).has(n)}function tf(n,r){var s=co(this,n),p=s.size;return s.set(n,r),this.size+=s.size==p?0:1,this}yt.prototype.clear=Xg,yt.prototype.delete=Zg,yt.prototype.get=nf,yt.prototype.has=ef,yt.prototype.set=tf;function ii(n){var r=-1,s=n==null?0:n.length;for(this.__data__=new yt;++r<s;)this.add(n[r])}function rf(n){return this.__data__.set(n,d),this}function of(n){return this.__data__.has(n)}ii.prototype.add=ii.prototype.push=rf,ii.prototype.has=of;function We(n){var r=this.__data__=new St(n);this.size=r.size}function af(){this.__data__=new St,this.size=0}function uf(n){var r=this.__data__,s=r.delete(n);return this.size=r.size,s}function sf(n){return this.__data__.get(n)}function lf(n){return this.__data__.has(n)}function pf(n,r){var s=this.__data__;if(s instanceof St){var p=s.__data__;if(!Yi||p.length<o-1)return p.push([n,r]),this.size=++s.size,this;s=this.__data__=new yt(p)}return s.set(n,r),this.size=s.size,this}We.prototype.clear=af,We.prototype.delete=uf,We.prototype.get=sf,We.prototype.has=lf,We.prototype.set=pf;function il(n,r){var s=Z(n),p=!s&&si(n),m=!s&&!p&&jt(n),f=!s&&!p&&!m&&Ri(n),y=s||p||m||f,T=y?Ca(n.length,hg):[],O=T.length;for(var N in n)(r||yn.call(n,N))&&!(y&&(N=="length"||m&&(N=="offset"||N=="parent")||f&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||Ct(N,O)))&&T.push(N);return T}function rl(n){var r=n.length;return r?n[Ma(0,r-1)]:t}function cf(n,r){return mo(me(n),ri(r,0,n.length))}function df(n){return mo(me(n))}function Na(n,r,s){(s!==t&&!He(n[r],s)||s===t&&!(r in n))&&ht(n,r,s)}function Zi(n,r,s){var p=n[r];(!(yn.call(n,r)&&He(p,s))||s===t&&!(r in n))&&ht(n,r,s)}function Zr(n,r){for(var s=n.length;s--;)if(He(n[s][0],r))return s;return-1}function mf(n,r,s,p){return Jt(n,function(m,f,y){r(p,m,s(m),y)}),p}function ol(n,r){return n&&st(r,Yn(r),n)}function gf(n,r){return n&&st(r,fe(r),n)}function ht(n,r,s){r=="__proto__"&&Hr?Hr(n,r,{configurable:!0,enumerable:!0,value:s,writable:!0}):n[r]=s}function wa(n,r){for(var s=-1,p=r.length,m=E(p),f=n==null;++s<p;)m[s]=f?t:pu(n,r[s]);return m}function ri(n,r,s){return n===n&&(s!==t&&(n=n<=s?n:s),r!==t&&(n=n>=r?n:r)),n}function xe(n,r,s,p,m,f){var y,T=r&h,O=r&w,N=r&b;if(s&&(y=m?s(n,p,m,f):s(n)),y!==t)return y;if(!Bn(n))return n;var _=Z(n);if(_){if(y=tI(n),!T)return me(n,y)}else{var R=re(n),P=R==te||R==us;if(jt(n))return Nl(n,T);if(R==It||R==q||P&&!m){if(y=O||P?{}:Ql(n),!T)return O?jf(n,gf(y,n)):$f(n,ol(y,n))}else{if(!bn[R])return m?n:{};y=iI(n,R,T)}}f||(f=new We);var $=f.get(n);if($)return $;f.set(n,y),Op(n)?n.forEach(function(Y){y.add(xe(Y,r,s,Y,n,f))}):Fp(n)&&n.forEach(function(Y,an){y.set(an,xe(Y,r,s,an,n,f))});var Q=N?O?Ka:Ya:O?fe:Yn,tn=_?t:Q(n);return Be(tn||n,function(Y,an){tn&&(an=Y,Y=n[an]),Zi(y,an,xe(Y,r,s,an,n,f))}),y}function ff(n){var r=Yn(n);return function(s){return al(s,n,r)}}function al(n,r,s){var p=s.length;if(n==null)return!p;for(n=Cn(n);p--;){var m=s[p],f=r[m],y=n[m];if(y===t&&!(m in n)||!f(y))return!1}return!0}function ul(n,r,s){if(typeof n!="function")throw new Ue(l);return ar(function(){n.apply(t,s)},r)}function nr(n,r,s,p){var m=-1,f=Lr,y=!0,T=n.length,O=[],N=r.length;if(!T)return O;s&&(r=Nn(r,Fe(s))),p?(f=Ia,y=!1):r.length>=o&&(f=Hi,y=!1,r=new ii(r));n:for(;++m<T;){var _=n[m],R=s==null?_:s(_);if(_=p||_!==0?_:0,y&&R===R){for(var P=N;P--;)if(r[P]===R)continue n;O.push(_)}else f(r,R,p)||O.push(_)}return O}var Jt=Rl(ut),sl=Rl(Ba,!0);function If(n,r){var s=!0;return Jt(n,function(p,m,f){return s=!!r(p,m,f),s}),s}function no(n,r,s){for(var p=-1,m=n.length;++p<m;){var f=n[p],y=r(f);if(y!=null&&(T===t?y===y&&!Oe(y):s(y,T)))var T=y,O=f}return O}function Sf(n,r,s,p){var m=n.length;for(s=en(s),s<0&&(s=-s>m?0:m+s),p=p===t||p>m?m:en(p),p<0&&(p+=m),p=s>p?0:bp(p);s<p;)n[s++]=r;return n}function ll(n,r){var s=[];return Jt(n,function(p,m,f){r(p,m,f)&&s.push(p)}),s}function Zn(n,r,s,p,m){var f=-1,y=n.length;for(s||(s=oI),m||(m=[]);++f<y;){var T=n[f];r>0&&s(T)?r>1?Zn(T,r-1,s,p,m):kt(m,T):p||(m[m.length]=T)}return m}var _a=xl(),pl=xl(!0);function ut(n,r){return n&&_a(n,r,Yn)}function Ba(n,r){return n&&pl(n,r,Yn)}function eo(n,r){return Pt(r,function(s){return Ot(n[s])})}function oi(n,r){r=Vt(r,n);for(var s=0,p=r.length;n!=null&&s<p;)n=n[lt(r[s++])];return s&&s==p?n:t}function cl(n,r,s){var p=r(n);return Z(n)?p:kt(p,s(n))}function se(n){return n==null?n===t?jd:Vd:ei&&ei in Cn(n)?Zf(n):dI(n)}function Ua(n,r){return n>r}function yf(n,r){return n!=null&&yn.call(n,r)}function hf(n,r){return n!=null&&r in Cn(n)}function Tf(n,r,s){return n>=ie(r,s)&&n<Qn(r,s)}function Ra(n,r,s){for(var p=s?Ia:Lr,m=n[0].length,f=n.length,y=f,T=E(f),O=1/0,N=[];y--;){var _=n[y];y&&r&&(_=Nn(_,Fe(r))),O=ie(_.length,O),T[y]=!s&&(r||m>=120&&_.length>=120)?new ii(y&&_):t}_=n[0];var R=-1,P=T[0];n:for(;++R<m&&N.length<O;){var $=_[R],Q=r?r($):$;if($=s||$!==0?$:0,!(P?Hi(P,Q):p(N,Q,s))){for(y=f;--y;){var tn=T[y];if(!(tn?Hi(tn,Q):p(n[y],Q,s)))continue n}P&&P.push(Q),N.push($)}}return N}function Ff(n,r,s,p){return ut(n,function(m,f,y){r(p,s(m),f,y)}),p}function er(n,r,s){r=Vt(r,n),n=Xl(n,r);var p=n==null?n:n[lt(Pe(r))];return p==null?t:Te(p,n,s)}function dl(n){return Ln(n)&&se(n)==q}function Cf(n){return Ln(n)&&se(n)==Wi}function Of(n){return Ln(n)&&se(n)==we}function tr(n,r,s,p,m){return n===r?!0:n==null||r==null||!Ln(n)&&!Ln(r)?n!==n&&r!==r:Ef(n,r,s,p,tr,m)}function Ef(n,r,s,p,m,f){var y=Z(n),T=Z(r),O=y?gn:re(n),N=T?gn:re(r);O=O==q?It:O,N=N==q?It:N;var _=O==It,R=N==It,P=O==N;if(P&&jt(n)){if(!jt(r))return!1;y=!0,_=!1}if(P&&!_)return f||(f=new We),y||Ri(n)?jl(n,r,s,p,m,f):zf(n,r,O,s,p,m,f);if(!(s&v)){var $=_&&yn.call(n,"__wrapped__"),Q=R&&yn.call(r,"__wrapped__");if($||Q){var tn=$?n.value():n,Y=Q?r.value():r;return f||(f=new We),m(tn,Y,s,p,f)}}return P?(f||(f=new We),Xf(n,r,s,p,m,f)):!1}function bf(n){return Ln(n)&&re(n)==Ve}function xa(n,r,s,p){var m=s.length,f=m,y=!p;if(n==null)return!f;for(n=Cn(n);m--;){var T=s[m];if(y&&T[2]?T[1]!==n[T[0]]:!(T[0]in n))return!1}for(;++m<f;){T=s[m];var O=T[0],N=n[O],_=T[1];if(y&&T[2]){if(N===t&&!(O in n))return!1}else{var R=new We;if(p)var P=p(N,_,O,n,r,R);if(!(P===t?tr(_,N,v|L,p,R):P))return!1}}return!0}function ml(n){if(!Bn(n)||uI(n))return!1;var r=Ot(n)?Eg:gm;return r.test(ui(n))}function Df(n){return Ln(n)&&se(n)==Vi}function Af(n){return Ln(n)&&re(n)==$e}function vf(n){return Ln(n)&&ho(n.length)&&!!vn[se(n)]}function gl(n){return typeof n=="function"?n:n==null?Ie:typeof n=="object"?Z(n)?Sl(n[0],n[1]):Il(n):Lp(n)}function La(n){if(!or(n))return wg(n);var r=[];for(var s in Cn(n))yn.call(n,s)&&s!="constructor"&&r.push(s);return r}function Nf(n){if(!Bn(n))return cI(n);var r=or(n),s=[];for(var p in n)p=="constructor"&&(r||!yn.call(n,p))||s.push(p);return s}function Pa(n,r){return n<r}function fl(n,r){var s=-1,p=ge(n)?E(n.length):[];return Jt(n,function(m,f,y){p[++s]=r(m,f,y)}),p}function Il(n){var r=Xa(n);return r.length==1&&r[0][2]?Kl(r[0][0],r[0][1]):function(s){return s===n||xa(s,n,r)}}function Sl(n,r){return nu(n)&&Yl(r)?Kl(lt(n),r):function(s){var p=pu(s,n);return p===t&&p===r?cu(s,n):tr(r,p,v|L)}}function to(n,r,s,p,m){n!==r&&_a(r,function(f,y){if(m||(m=new We),Bn(f))wf(n,r,y,s,to,p,m);else{var T=p?p(tu(n,y),f,y+"",n,r,m):t;T===t&&(T=f),Na(n,y,T)}},fe)}function wf(n,r,s,p,m,f,y){var T=tu(n,s),O=tu(r,s),N=y.get(O);if(N){Na(n,s,N);return}var _=f?f(T,O,s+"",n,r,y):t,R=_===t;if(R){var P=Z(O),$=!P&&jt(O),Q=!P&&!$&&Ri(O);_=O,P||$||Q?Z(T)?_=T:qn(T)?_=me(T):$?(R=!1,_=Nl(O,!0)):Q?(R=!1,_=wl(O,!0)):_=[]:ur(O)||si(O)?(_=T,si(T)?_=Dp(T):(!Bn(T)||Ot(T))&&(_=Ql(O))):R=!1}R&&(y.set(O,_),m(_,O,p,f,y),y.delete(O)),Na(n,s,_)}function yl(n,r){var s=n.length;if(s)return r+=r<0?s:0,Ct(r,s)?n[r]:t}function hl(n,r,s){r.length?r=Nn(r,function(f){return Z(f)?function(y){return oi(y,f.length===1?f[0]:f)}:f}):r=[Ie];var p=-1;r=Nn(r,Fe(H()));var m=fl(n,function(f,y,T){var O=Nn(r,function(N){return N(f)});return{criteria:O,index:++p,value:f}});return tg(m,function(f,y){return Vf(f,y,s)})}function _f(n,r){return Tl(n,r,function(s,p){return cu(n,p)})}function Tl(n,r,s){for(var p=-1,m=r.length,f={};++p<m;){var y=r[p],T=oi(n,y);s(T,y)&&ir(f,Vt(y,n),T)}return f}function Bf(n){return function(r){return oi(r,n)}}function ka(n,r,s,p){var m=p?eg:Oi,f=-1,y=r.length,T=n;for(n===r&&(r=me(r)),s&&(T=Nn(n,Fe(s)));++f<y;)for(var O=0,N=r[f],_=s?s(N):N;(O=m(T,_,O,p))>-1;)T!==n&&Wr.call(T,O,1),Wr.call(n,O,1);return n}function Fl(n,r){for(var s=n?r.length:0,p=s-1;s--;){var m=r[s];if(s==p||m!==f){var f=m;Ct(m)?Wr.call(n,m,1):Ga(n,m)}}return n}function Ma(n,r){return n+Yr(el()*(r-n+1))}function Uf(n,r,s,p){for(var m=-1,f=Qn(Qr((r-n)/(s||1)),0),y=E(f);f--;)y[p?f:++m]=n,n+=s;return y}function qa(n,r){var s="";if(!n||r<1||r>Ge)return s;do r%2&&(s+=n),r=Yr(r/2),r&&(n+=n);while(r);return s}function rn(n,r){return iu(zl(n,r,Ie),n+"")}function Rf(n){return rl(xi(n))}function xf(n,r){var s=xi(n);return mo(s,ri(r,0,s.length))}function ir(n,r,s,p){if(!Bn(n))return n;r=Vt(r,n);for(var m=-1,f=r.length,y=f-1,T=n;T!=null&&++m<f;){var O=lt(r[m]),N=s;if(O==="__proto__"||O==="constructor"||O==="prototype")return n;if(m!=y){var _=T[O];N=p?p(_,O,T):t,N===t&&(N=Bn(_)?_:Ct(r[m+1])?[]:{})}Zi(T,O,N),T=T[O]}return n}var Cl=Kr?function(n,r){return Kr.set(n,r),n}:Ie,Lf=Hr?function(n,r){return Hr(n,"toString",{configurable:!0,enumerable:!1,value:mu(r),writable:!0})}:Ie;function Pf(n){return mo(xi(n))}function Le(n,r,s){var p=-1,m=n.length;r<0&&(r=-r>m?0:m+r),s=s>m?m:s,s<0&&(s+=m),m=r>s?0:s-r>>>0,r>>>=0;for(var f=E(m);++p<m;)f[p]=n[p+r];return f}function kf(n,r){var s;return Jt(n,function(p,m,f){return s=r(p,m,f),!s}),!!s}function io(n,r,s){var p=0,m=n==null?p:n.length;if(typeof r=="number"&&r===r&&m<=G){for(;p<m;){var f=p+m>>>1,y=n[f];y!==null&&!Oe(y)&&(s?y<=r:y<r)?p=f+1:m=f}return m}return Ja(n,r,Ie,s)}function Ja(n,r,s,p){var m=0,f=n==null?0:n.length;if(f===0)return 0;r=s(r);for(var y=r!==r,T=r===null,O=Oe(r),N=r===t;m<f;){var _=Yr((m+f)/2),R=s(n[_]),P=R!==t,$=R===null,Q=R===R,tn=Oe(R);if(y)var Y=p||Q;else N?Y=Q&&(p||P):T?Y=Q&&P&&(p||!$):O?Y=Q&&P&&!$&&(p||!tn):$||tn?Y=!1:Y=p?R<=r:R<r;Y?m=_+1:f=_}return ie(f,D)}function Ol(n,r){for(var s=-1,p=n.length,m=0,f=[];++s<p;){var y=n[s],T=r?r(y):y;if(!s||!He(T,O)){var O=T;f[m++]=y===0?0:y}}return f}function El(n){return typeof n=="number"?n:Oe(n)?Zt:+n}function Ce(n){if(typeof n=="string")return n;if(Z(n))return Nn(n,Ce)+"";if(Oe(n))return tl?tl.call(n):"";var r=n+"";return r=="0"&&1/n==-at?"-0":r}function Gt(n,r,s){var p=-1,m=Lr,f=n.length,y=!0,T=[],O=T;if(s)y=!1,m=Ia;else if(f>=o){var N=r?null:Yf(n);if(N)return kr(N);y=!1,m=Hi,O=new ii}else O=r?[]:T;n:for(;++p<f;){var _=n[p],R=r?r(_):_;if(_=s||_!==0?_:0,y&&R===R){for(var P=O.length;P--;)if(O[P]===R)continue n;r&&O.push(R),T.push(_)}else m(O,R,s)||(O!==T&&O.push(R),T.push(_))}return T}function Ga(n,r){return r=Vt(r,n),n=Xl(n,r),n==null||delete n[lt(Pe(r))]}function bl(n,r,s,p){return ir(n,r,s(oi(n,r)),p)}function ro(n,r,s,p){for(var m=n.length,f=p?m:-1;(p?f--:++f<m)&&r(n[f],f,n););return s?Le(n,p?0:f,p?f+1:m):Le(n,p?f+1:0,p?m:f)}function Dl(n,r){var s=n;return s instanceof sn&&(s=s.value()),Sa(r,function(p,m){return m.func.apply(m.thisArg,kt([p],m.args))},s)}function Va(n,r,s){var p=n.length;if(p<2)return p?Gt(n[0]):[];for(var m=-1,f=E(p);++m<p;)for(var y=n[m],T=-1;++T<p;)T!=m&&(f[m]=nr(f[m]||y,n[T],r,s));return Gt(Zn(f,1),r,s)}function Al(n,r,s){for(var p=-1,m=n.length,f=r.length,y={};++p<m;){var T=p<f?r[p]:t;s(y,n[p],T)}return y}function $a(n){return qn(n)?n:[]}function ja(n){return typeof n=="function"?n:Ie}function Vt(n,r){return Z(n)?n:nu(n,r)?[n]:tp(In(n))}var Mf=rn;function $t(n,r,s){var p=n.length;return s=s===t?p:s,!r&&s>=p?n:Le(n,r,s)}var vl=bg||function(n){return Xn.clearTimeout(n)};function Nl(n,r){if(r)return n.slice();var s=n.length,p=Ks?Ks(s):new n.constructor(s);return n.copy(p),p}function Wa(n){var r=new n.constructor(n.byteLength);return new $r(r).set(new $r(n)),r}function qf(n,r){var s=r?Wa(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.byteLength)}function Jf(n){var r=new n.constructor(n.source,ds.exec(n));return r.lastIndex=n.lastIndex,r}function Gf(n){return Xi?Cn(Xi.call(n)):{}}function wl(n,r){var s=r?Wa(n.buffer):n.buffer;return new n.constructor(s,n.byteOffset,n.length)}function _l(n,r){if(n!==r){var s=n!==t,p=n===null,m=n===n,f=Oe(n),y=r!==t,T=r===null,O=r===r,N=Oe(r);if(!T&&!N&&!f&&n>r||f&&y&&O&&!T&&!N||p&&y&&O||!s&&O||!m)return 1;if(!p&&!f&&!N&&n<r||N&&s&&m&&!p&&!f||T&&s&&m||!y&&m||!O)return-1}return 0}function Vf(n,r,s){for(var p=-1,m=n.criteria,f=r.criteria,y=m.length,T=s.length;++p<y;){var O=_l(m[p],f[p]);if(O){if(p>=T)return O;var N=s[p];return O*(N=="desc"?-1:1)}}return n.index-r.index}function Bl(n,r,s,p){for(var m=-1,f=n.length,y=s.length,T=-1,O=r.length,N=Qn(f-y,0),_=E(O+N),R=!p;++T<O;)_[T]=r[T];for(;++m<y;)(R||m<f)&&(_[s[m]]=n[m]);for(;N--;)_[T++]=n[m++];return _}function Ul(n,r,s,p){for(var m=-1,f=n.length,y=-1,T=s.length,O=-1,N=r.length,_=Qn(f-T,0),R=E(_+N),P=!p;++m<_;)R[m]=n[m];for(var $=m;++O<N;)R[$+O]=r[O];for(;++y<T;)(P||m<f)&&(R[$+s[y]]=n[m++]);return R}function me(n,r){var s=-1,p=n.length;for(r||(r=E(p));++s<p;)r[s]=n[s];return r}function st(n,r,s,p){var m=!s;s||(s={});for(var f=-1,y=r.length;++f<y;){var T=r[f],O=p?p(s[T],n[T],T,s,n):t;O===t&&(O=n[T]),m?ht(s,T,O):Zi(s,T,O)}return s}function $f(n,r){return st(n,Za(n),r)}function jf(n,r){return st(n,Wl(n),r)}function oo(n,r){return function(s,p){var m=Z(s)?Ym:mf,f=r?r():{};return m(s,n,H(p,2),f)}}function _i(n){return rn(function(r,s){var p=-1,m=s.length,f=m>1?s[m-1]:t,y=m>2?s[2]:t;for(f=n.length>3&&typeof f=="function"?(m--,f):t,y&&le(s[0],s[1],y)&&(f=m<3?t:f,m=1),r=Cn(r);++p<m;){var T=s[p];T&&n(r,T,p,f)}return r})}function Rl(n,r){return function(s,p){if(s==null)return s;if(!ge(s))return n(s,p);for(var m=s.length,f=r?m:-1,y=Cn(s);(r?f--:++f<m)&&p(y[f],f,y)!==!1;);return s}}function xl(n){return function(r,s,p){for(var m=-1,f=Cn(r),y=p(r),T=y.length;T--;){var O=y[n?T:++m];if(s(f[O],O,f)===!1)break}return r}}function Wf(n,r,s){var p=r&j,m=rr(n);function f(){var y=this&&this!==Xn&&this instanceof f?m:n;return y.apply(p?s:this,arguments)}return f}function Ll(n){return function(r){r=In(r);var s=Ei(r)?je(r):t,p=s?s[0]:r.charAt(0),m=s?$t(s,1).join(""):r.slice(1);return p[n]()+m}}function Bi(n){return function(r){return Sa(Rp(Up(r).replace(xm,"")),n,"")}}function rr(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var s=wi(n.prototype),p=n.apply(s,r);return Bn(p)?p:s}}function Hf(n,r,s){var p=rr(n);function m(){for(var f=arguments.length,y=E(f),T=f,O=Ui(m);T--;)y[T]=arguments[T];var N=f<3&&y[0]!==O&&y[f-1]!==O?[]:Mt(y,O);if(f-=N.length,f<s)return Jl(n,r,ao,m.placeholder,t,y,N,t,t,s-f);var _=this&&this!==Xn&&this instanceof m?p:n;return Te(_,this,y)}return m}function Pl(n){return function(r,s,p){var m=Cn(r);if(!ge(r)){var f=H(s,3);r=Yn(r),s=function(T){return f(m[T],T,m)}}var y=n(r,s,p);return y>-1?m[f?r[y]:y]:t}}function kl(n){return Ft(function(r){var s=r.length,p=s,m=Re.prototype.thru;for(n&&r.reverse();p--;){var f=r[p];if(typeof f!="function")throw new Ue(l);if(m&&!y&&po(f)=="wrapper")var y=new Re([],!0)}for(p=y?p:s;++p<s;){f=r[p];var T=po(f),O=T=="wrapper"?za(f):t;O&&eu(O[0])&&O[1]==(ee|Sn|xn|ft)&&!O[4].length&&O[9]==1?y=y[po(O[0])].apply(y,O[3]):y=f.length==1&&eu(f)?y[T]():y.thru(f)}return function(){var N=arguments,_=N[0];if(y&&N.length==1&&Z(_))return y.plant(_).value();for(var R=0,P=s?r[R].apply(this,N):_;++R<s;)P=r[R].call(this,P);return P}})}function ao(n,r,s,p,m,f,y,T,O,N){var _=r&ee,R=r&j,P=r&cn,$=r&(Sn|_n),Q=r&U,tn=P?t:rr(n);function Y(){for(var an=arguments.length,pn=E(an),Ee=an;Ee--;)pn[Ee]=arguments[Ee];if($)var pe=Ui(Y),be=rg(pn,pe);if(p&&(pn=Bl(pn,p,m,$)),f&&(pn=Ul(pn,f,y,$)),an-=be,$&&an<N){var Jn=Mt(pn,pe);return Jl(n,r,ao,Y.placeholder,s,pn,Jn,T,O,N-an)}var Qe=R?s:this,bt=P?Qe[n]:n;return an=pn.length,T?pn=mI(pn,T):Q&&an>1&&pn.reverse(),_&&O<an&&(pn.length=O),this&&this!==Xn&&this instanceof Y&&(bt=tn||rr(bt)),bt.apply(Qe,pn)}return Y}function Ml(n,r){return function(s,p){return Ff(s,n,r(p),{})}}function uo(n,r){return function(s,p){var m;if(s===t&&p===t)return r;if(s!==t&&(m=s),p!==t){if(m===t)return p;typeof s=="string"||typeof p=="string"?(s=Ce(s),p=Ce(p)):(s=El(s),p=El(p)),m=n(s,p)}return m}}function Ha(n){return Ft(function(r){return r=Nn(r,Fe(H())),rn(function(s){var p=this;return n(r,function(m){return Te(m,p,s)})})})}function so(n,r){r=r===t?" ":Ce(r);var s=r.length;if(s<2)return s?qa(r,n):r;var p=qa(r,Qr(n/bi(r)));return Ei(r)?$t(je(p),0,n).join(""):p.slice(0,n)}function Qf(n,r,s,p){var m=r&j,f=rr(n);function y(){for(var T=-1,O=arguments.length,N=-1,_=p.length,R=E(_+O),P=this&&this!==Xn&&this instanceof y?f:n;++N<_;)R[N]=p[N];for(;O--;)R[N++]=arguments[++T];return Te(P,m?s:this,R)}return y}function ql(n){return function(r,s,p){return p&&typeof p!="number"&&le(r,s,p)&&(s=p=t),r=Et(r),s===t?(s=r,r=0):s=Et(s),p=p===t?r<s?1:-1:Et(p),Uf(r,s,p,n)}}function lo(n){return function(r,s){return typeof r=="string"&&typeof s=="string"||(r=ke(r),s=ke(s)),n(r,s)}}function Jl(n,r,s,p,m,f,y,T,O,N){var _=r&Sn,R=_?y:t,P=_?t:y,$=_?f:t,Q=_?t:f;r|=_?xn:ae,r&=~(_?ae:xn),r&An||(r&=~(j|cn));var tn=[n,r,m,$,R,Q,P,T,O,N],Y=s.apply(t,tn);return eu(n)&&Zl(Y,tn),Y.placeholder=p,np(Y,n,r)}function Qa(n){var r=Hn[n];return function(s,p){if(s=ke(s),p=p==null?0:ie(en(p),292),p&&nl(s)){var m=(In(s)+"e").split("e"),f=r(m[0]+"e"+(+m[1]+p));return m=(In(f)+"e").split("e"),+(m[0]+"e"+(+m[1]-p))}return r(s)}}var Yf=vi&&1/kr(new vi([,-0]))[1]==at?function(n){return new vi(n)}:Iu;function Gl(n){return function(r){var s=re(r);return s==Ve?Ea(r):s==$e?cg(r):ig(r,n(r))}}function Tt(n,r,s,p,m,f,y,T){var O=r&cn;if(!O&&typeof n!="function")throw new Ue(l);var N=p?p.length:0;if(N||(r&=~(xn|ae),p=m=t),y=y===t?y:Qn(en(y),0),T=T===t?T:en(T),N-=m?m.length:0,r&ae){var _=p,R=m;p=m=t}var P=O?t:za(n),$=[n,r,s,p,m,_,R,f,y,T];if(P&&pI($,P),n=$[0],r=$[1],s=$[2],p=$[3],m=$[4],T=$[9]=$[9]===t?O?0:n.length:Qn($[9]-N,0),!T&&r&(Sn|_n)&&(r&=~(Sn|_n)),!r||r==j)var Q=Wf(n,r,s);else r==Sn||r==_n?Q=Hf(n,r,T):(r==xn||r==(j|xn))&&!m.length?Q=Qf(n,r,s,p):Q=ao.apply(t,$);var tn=P?Cl:Zl;return np(tn(Q,$),n,r)}function Vl(n,r,s,p){return n===t||He(n,Ai[s])&&!yn.call(p,s)?r:n}function $l(n,r,s,p,m,f){return Bn(n)&&Bn(r)&&(f.set(r,n),to(n,r,t,$l,f),f.delete(r)),n}function Kf(n){return ur(n)?t:n}function jl(n,r,s,p,m,f){var y=s&v,T=n.length,O=r.length;if(T!=O&&!(y&&O>T))return!1;var N=f.get(n),_=f.get(r);if(N&&_)return N==r&&_==n;var R=-1,P=!0,$=s&L?new ii:t;for(f.set(n,r),f.set(r,n);++R<T;){var Q=n[R],tn=r[R];if(p)var Y=y?p(tn,Q,R,r,n,f):p(Q,tn,R,n,r,f);if(Y!==t){if(Y)continue;P=!1;break}if($){if(!ya(r,function(an,pn){if(!Hi($,pn)&&(Q===an||m(Q,an,s,p,f)))return $.push(pn)})){P=!1;break}}else if(!(Q===tn||m(Q,tn,s,p,f))){P=!1;break}}return f.delete(n),f.delete(r),P}function zf(n,r,s,p,m,f,y){switch(s){case Fi:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Wi:return!(n.byteLength!=r.byteLength||!f(new $r(n),new $r(r)));case fn:case we:case Gi:return He(+n,+r);case Lt:return n.name==r.name&&n.message==r.message;case Vi:case $i:return n==r+"";case Ve:var T=Ea;case $e:var O=p&v;if(T||(T=kr),n.size!=r.size&&!O)return!1;var N=y.get(n);if(N)return N==r;p|=L,y.set(n,r);var _=jl(T(n),T(r),p,m,f,y);return y.delete(n),_;case Br:if(Xi)return Xi.call(n)==Xi.call(r)}return!1}function Xf(n,r,s,p,m,f){var y=s&v,T=Ya(n),O=T.length,N=Ya(r),_=N.length;if(O!=_&&!y)return!1;for(var R=O;R--;){var P=T[R];if(!(y?P in r:yn.call(r,P)))return!1}var $=f.get(n),Q=f.get(r);if($&&Q)return $==r&&Q==n;var tn=!0;f.set(n,r),f.set(r,n);for(var Y=y;++R<O;){P=T[R];var an=n[P],pn=r[P];if(p)var Ee=y?p(pn,an,P,r,n,f):p(an,pn,P,n,r,f);if(!(Ee===t?an===pn||m(an,pn,s,p,f):Ee)){tn=!1;break}Y||(Y=P=="constructor")}if(tn&&!Y){var pe=n.constructor,be=r.constructor;pe!=be&&"constructor"in n&&"constructor"in r&&!(typeof pe=="function"&&pe instanceof pe&&typeof be=="function"&&be instanceof be)&&(tn=!1)}return f.delete(n),f.delete(r),tn}function Ft(n){return iu(zl(n,t,ap),n+"")}function Ya(n){return cl(n,Yn,Za)}function Ka(n){return cl(n,fe,Wl)}var za=Kr?function(n){return Kr.get(n)}:Iu;function po(n){for(var r=n.name+"",s=Ni[r],p=yn.call(Ni,r)?s.length:0;p--;){var m=s[p],f=m.func;if(f==null||f==n)return m.name}return r}function Ui(n){var r=yn.call(g,"placeholder")?g:n;return r.placeholder}function H(){var n=g.iteratee||gu;return n=n===gu?gl:n,arguments.length?n(arguments[0],arguments[1]):n}function co(n,r){var s=n.__data__;return aI(r)?s[typeof r=="string"?"string":"hash"]:s.map}function Xa(n){for(var r=Yn(n),s=r.length;s--;){var p=r[s],m=n[p];r[s]=[p,m,Yl(m)]}return r}function ai(n,r){var s=sg(n,r);return ml(s)?s:t}function Zf(n){var r=yn.call(n,ei),s=n[ei];try{n[ei]=t;var p=!0}catch{}var m=Gr.call(n);return p&&(r?n[ei]=s:delete n[ei]),m}var Za=Da?function(n){return n==null?[]:(n=Cn(n),Pt(Da(n),function(r){return Xs.call(n,r)}))}:Su,Wl=Da?function(n){for(var r=[];n;)kt(r,Za(n)),n=jr(n);return r}:Su,re=se;(Aa&&re(new Aa(new ArrayBuffer(1)))!=Fi||Yi&&re(new Yi)!=Ve||va&&re(va.resolve())!=ss||vi&&re(new vi)!=$e||Ki&&re(new Ki)!=ji)&&(re=function(n){var r=se(n),s=r==It?n.constructor:t,p=s?ui(s):"";if(p)switch(p){case Rg:return Fi;case xg:return Ve;case Lg:return ss;case Pg:return $e;case kg:return ji}return r});function nI(n,r,s){for(var p=-1,m=s.length;++p<m;){var f=s[p],y=f.size;switch(f.type){case"drop":n+=y;break;case"dropRight":r-=y;break;case"take":r=ie(r,n+y);break;case"takeRight":n=Qn(n,r-y);break}}return{start:n,end:r}}function eI(n){var r=n.match(am);return r?r[1].split(um):[]}function Hl(n,r,s){r=Vt(r,n);for(var p=-1,m=r.length,f=!1;++p<m;){var y=lt(r[p]);if(!(f=n!=null&&s(n,y)))break;n=n[y]}return f||++p!=m?f:(m=n==null?0:n.length,!!m&&ho(m)&&Ct(y,m)&&(Z(n)||si(n)))}function tI(n){var r=n.length,s=new n.constructor(r);return r&&typeof n[0]=="string"&&yn.call(n,"index")&&(s.index=n.index,s.input=n.input),s}function Ql(n){return typeof n.constructor=="function"&&!or(n)?wi(jr(n)):{}}function iI(n,r,s){var p=n.constructor;switch(r){case Wi:return Wa(n);case fn:case we:return new p(+n);case Fi:return qf(n,s);case Xo:case Zo:case na:case ea:case ta:case ia:case ra:case oa:case aa:return wl(n,s);case Ve:return new p;case Gi:case $i:return new p(n);case Vi:return Jf(n);case $e:return new p;case Br:return Gf(n)}}function rI(n,r){var s=r.length;if(!s)return n;var p=s-1;return r[p]=(s>1?"& ":"")+r[p],r=r.join(s>2?", ":" "),n.replace(om,`{
/* [wrapped with `+r+`] */
`)}function oI(n){return Z(n)||si(n)||!!(Zs&&n&&n[Zs])}function Ct(n,r){var s=typeof n;return r=r??Ge,!!r&&(s=="number"||s!="symbol"&&Im.test(n))&&n>-1&&n%1==0&&n<r}function le(n,r,s){if(!Bn(s))return!1;var p=typeof r;return(p=="number"?ge(s)&&Ct(r,s.length):p=="string"&&r in s)?He(s[r],n):!1}function nu(n,r){if(Z(n))return!1;var s=typeof n;return s=="number"||s=="symbol"||s=="boolean"||n==null||Oe(n)?!0:em.test(n)||!nm.test(n)||r!=null&&n in Cn(r)}function aI(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function eu(n){var r=po(n),s=g[r];if(typeof s!="function"||!(r in sn.prototype))return!1;if(n===s)return!0;var p=za(s);return!!p&&n===p[0]}function uI(n){return!!Ys&&Ys in n}var sI=qr?Ot:yu;function or(n){var r=n&&n.constructor,s=typeof r=="function"&&r.prototype||Ai;return n===s}function Yl(n){return n===n&&!Bn(n)}function Kl(n,r){return function(s){return s==null?!1:s[n]===r&&(r!==t||n in Cn(s))}}function lI(n){var r=So(n,function(p){return s.size===I&&s.clear(),p}),s=r.cache;return r}function pI(n,r){var s=n[1],p=r[1],m=s|p,f=m<(j|cn|ee),y=p==ee&&s==Sn||p==ee&&s==ft&&n[7].length<=r[8]||p==(ee|ft)&&r[7].length<=r[8]&&s==Sn;if(!(f||y))return n;p&j&&(n[2]=r[2],m|=s&j?0:An);var T=r[3];if(T){var O=n[3];n[3]=O?Bl(O,T,r[4]):T,n[4]=O?Mt(n[3],S):r[4]}return T=r[5],T&&(O=n[5],n[5]=O?Ul(O,T,r[6]):T,n[6]=O?Mt(n[5],S):r[6]),T=r[7],T&&(n[7]=T),p&ee&&(n[8]=n[8]==null?r[8]:ie(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=m,n}function cI(n){var r=[];if(n!=null)for(var s in Cn(n))r.push(s);return r}function dI(n){return Gr.call(n)}function zl(n,r,s){return r=Qn(r===t?n.length-1:r,0),function(){for(var p=arguments,m=-1,f=Qn(p.length-r,0),y=E(f);++m<f;)y[m]=p[r+m];m=-1;for(var T=E(r+1);++m<r;)T[m]=p[m];return T[r]=s(y),Te(n,this,T)}}function Xl(n,r){return r.length<2?n:oi(n,Le(r,0,-1))}function mI(n,r){for(var s=n.length,p=ie(r.length,s),m=me(n);p--;){var f=r[p];n[p]=Ct(f,s)?m[f]:t}return n}function tu(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Zl=ep(Cl),ar=Ag||function(n,r){return Xn.setTimeout(n,r)},iu=ep(Lf);function np(n,r,s){var p=r+"";return iu(n,rI(p,gI(eI(p),s)))}function ep(n){var r=0,s=0;return function(){var p=_g(),m=Xt-(p-s);if(s=p,m>0){if(++r>=xt)return arguments[0]}else r=0;return n.apply(t,arguments)}}function mo(n,r){var s=-1,p=n.length,m=p-1;for(r=r===t?p:r;++s<r;){var f=Ma(s,m),y=n[f];n[f]=n[s],n[s]=y}return n.length=r,n}var tp=lI(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(tm,function(s,p,m,f){r.push(m?f.replace(pm,"$1"):p||s)}),r});function lt(n){if(typeof n=="string"||Oe(n))return n;var r=n+"";return r=="0"&&1/n==-at?"-0":r}function ui(n){if(n!=null){try{return Jr.call(n)}catch{}try{return n+""}catch{}}return""}function gI(n,r){return Be(k,function(s){var p="_."+s[0];r&s[1]&&!Lr(n,p)&&n.push(p)}),n.sort()}function ip(n){if(n instanceof sn)return n.clone();var r=new Re(n.__wrapped__,n.__chain__);return r.__actions__=me(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function fI(n,r,s){(s?le(n,r,s):r===t)?r=1:r=Qn(en(r),0);var p=n==null?0:n.length;if(!p||r<1)return[];for(var m=0,f=0,y=E(Qr(p/r));m<p;)y[f++]=Le(n,m,m+=r);return y}function II(n){for(var r=-1,s=n==null?0:n.length,p=0,m=[];++r<s;){var f=n[r];f&&(m[p++]=f)}return m}function SI(){var n=arguments.length;if(!n)return[];for(var r=E(n-1),s=arguments[0],p=n;p--;)r[p-1]=arguments[p];return kt(Z(s)?me(s):[s],Zn(r,1))}var yI=rn(function(n,r){return qn(n)?nr(n,Zn(r,1,qn,!0)):[]}),hI=rn(function(n,r){var s=Pe(r);return qn(s)&&(s=t),qn(n)?nr(n,Zn(r,1,qn,!0),H(s,2)):[]}),TI=rn(function(n,r){var s=Pe(r);return qn(s)&&(s=t),qn(n)?nr(n,Zn(r,1,qn,!0),t,s):[]});function FI(n,r,s){var p=n==null?0:n.length;return p?(r=s||r===t?1:en(r),Le(n,r<0?0:r,p)):[]}function CI(n,r,s){var p=n==null?0:n.length;return p?(r=s||r===t?1:en(r),r=p-r,Le(n,0,r<0?0:r)):[]}function OI(n,r){return n&&n.length?ro(n,H(r,3),!0,!0):[]}function EI(n,r){return n&&n.length?ro(n,H(r,3),!0):[]}function bI(n,r,s,p){var m=n==null?0:n.length;return m?(s&&typeof s!="number"&&le(n,r,s)&&(s=0,p=m),Sf(n,r,s,p)):[]}function rp(n,r,s){var p=n==null?0:n.length;if(!p)return-1;var m=s==null?0:en(s);return m<0&&(m=Qn(p+m,0)),Pr(n,H(r,3),m)}function op(n,r,s){var p=n==null?0:n.length;if(!p)return-1;var m=p-1;return s!==t&&(m=en(s),m=s<0?Qn(p+m,0):ie(m,p-1)),Pr(n,H(r,3),m,!0)}function ap(n){var r=n==null?0:n.length;return r?Zn(n,1):[]}function DI(n){var r=n==null?0:n.length;return r?Zn(n,at):[]}function AI(n,r){var s=n==null?0:n.length;return s?(r=r===t?1:en(r),Zn(n,r)):[]}function vI(n){for(var r=-1,s=n==null?0:n.length,p={};++r<s;){var m=n[r];p[m[0]]=m[1]}return p}function up(n){return n&&n.length?n[0]:t}function NI(n,r,s){var p=n==null?0:n.length;if(!p)return-1;var m=s==null?0:en(s);return m<0&&(m=Qn(p+m,0)),Oi(n,r,m)}function wI(n){var r=n==null?0:n.length;return r?Le(n,0,-1):[]}var _I=rn(function(n){var r=Nn(n,$a);return r.length&&r[0]===n[0]?Ra(r):[]}),BI=rn(function(n){var r=Pe(n),s=Nn(n,$a);return r===Pe(s)?r=t:s.pop(),s.length&&s[0]===n[0]?Ra(s,H(r,2)):[]}),UI=rn(function(n){var r=Pe(n),s=Nn(n,$a);return r=typeof r=="function"?r:t,r&&s.pop(),s.length&&s[0]===n[0]?Ra(s,t,r):[]});function RI(n,r){return n==null?"":Ng.call(n,r)}function Pe(n){var r=n==null?0:n.length;return r?n[r-1]:t}function xI(n,r,s){var p=n==null?0:n.length;if(!p)return-1;var m=p;return s!==t&&(m=en(s),m=m<0?Qn(p+m,0):ie(m,p-1)),r===r?mg(n,r,m):Pr(n,Js,m,!0)}function LI(n,r){return n&&n.length?yl(n,en(r)):t}var PI=rn(sp);function sp(n,r){return n&&n.length&&r&&r.length?ka(n,r):n}function kI(n,r,s){return n&&n.length&&r&&r.length?ka(n,r,H(s,2)):n}function MI(n,r,s){return n&&n.length&&r&&r.length?ka(n,r,t,s):n}var qI=Ft(function(n,r){var s=n==null?0:n.length,p=wa(n,r);return Fl(n,Nn(r,function(m){return Ct(m,s)?+m:m}).sort(_l)),p});function JI(n,r){var s=[];if(!(n&&n.length))return s;var p=-1,m=[],f=n.length;for(r=H(r,3);++p<f;){var y=n[p];r(y,p,n)&&(s.push(y),m.push(p))}return Fl(n,m),s}function ru(n){return n==null?n:Ug.call(n)}function GI(n,r,s){var p=n==null?0:n.length;return p?(s&&typeof s!="number"&&le(n,r,s)?(r=0,s=p):(r=r==null?0:en(r),s=s===t?p:en(s)),Le(n,r,s)):[]}function VI(n,r){return io(n,r)}function $I(n,r,s){return Ja(n,r,H(s,2))}function jI(n,r){var s=n==null?0:n.length;if(s){var p=io(n,r);if(p<s&&He(n[p],r))return p}return-1}function WI(n,r){return io(n,r,!0)}function HI(n,r,s){return Ja(n,r,H(s,2),!0)}function QI(n,r){var s=n==null?0:n.length;if(s){var p=io(n,r,!0)-1;if(He(n[p],r))return p}return-1}function YI(n){return n&&n.length?Ol(n):[]}function KI(n,r){return n&&n.length?Ol(n,H(r,2)):[]}function zI(n){var r=n==null?0:n.length;return r?Le(n,1,r):[]}function XI(n,r,s){return n&&n.length?(r=s||r===t?1:en(r),Le(n,0,r<0?0:r)):[]}function ZI(n,r,s){var p=n==null?0:n.length;return p?(r=s||r===t?1:en(r),r=p-r,Le(n,r<0?0:r,p)):[]}function nS(n,r){return n&&n.length?ro(n,H(r,3),!1,!0):[]}function eS(n,r){return n&&n.length?ro(n,H(r,3)):[]}var tS=rn(function(n){return Gt(Zn(n,1,qn,!0))}),iS=rn(function(n){var r=Pe(n);return qn(r)&&(r=t),Gt(Zn(n,1,qn,!0),H(r,2))}),rS=rn(function(n){var r=Pe(n);return r=typeof r=="function"?r:t,Gt(Zn(n,1,qn,!0),t,r)});function oS(n){return n&&n.length?Gt(n):[]}function aS(n,r){return n&&n.length?Gt(n,H(r,2)):[]}function uS(n,r){return r=typeof r=="function"?r:t,n&&n.length?Gt(n,t,r):[]}function ou(n){if(!(n&&n.length))return[];var r=0;return n=Pt(n,function(s){if(qn(s))return r=Qn(s.length,r),!0}),Ca(r,function(s){return Nn(n,ha(s))})}function lp(n,r){if(!(n&&n.length))return[];var s=ou(n);return r==null?s:Nn(s,function(p){return Te(r,t,p)})}var sS=rn(function(n,r){return qn(n)?nr(n,r):[]}),lS=rn(function(n){return Va(Pt(n,qn))}),pS=rn(function(n){var r=Pe(n);return qn(r)&&(r=t),Va(Pt(n,qn),H(r,2))}),cS=rn(function(n){var r=Pe(n);return r=typeof r=="function"?r:t,Va(Pt(n,qn),t,r)}),dS=rn(ou);function mS(n,r){return Al(n||[],r||[],Zi)}function gS(n,r){return Al(n||[],r||[],ir)}var fS=rn(function(n){var r=n.length,s=r>1?n[r-1]:t;return s=typeof s=="function"?(n.pop(),s):t,lp(n,s)});function pp(n){var r=g(n);return r.__chain__=!0,r}function IS(n,r){return r(n),n}function go(n,r){return r(n)}var SS=Ft(function(n){var r=n.length,s=r?n[0]:0,p=this.__wrapped__,m=function(f){return wa(f,n)};return r>1||this.__actions__.length||!(p instanceof sn)||!Ct(s)?this.thru(m):(p=p.slice(s,+s+(r?1:0)),p.__actions__.push({func:go,args:[m],thisArg:t}),new Re(p,this.__chain__).thru(function(f){return r&&!f.length&&f.push(t),f}))});function yS(){return pp(this)}function hS(){return new Re(this.value(),this.__chain__)}function TS(){this.__values__===t&&(this.__values__=Ep(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function FS(){return this}function CS(n){for(var r,s=this;s instanceof Xr;){var p=ip(s);p.__index__=0,p.__values__=t,r?m.__wrapped__=p:r=p;var m=p;s=s.__wrapped__}return m.__wrapped__=n,r}function OS(){var n=this.__wrapped__;if(n instanceof sn){var r=n;return this.__actions__.length&&(r=new sn(this)),r=r.reverse(),r.__actions__.push({func:go,args:[ru],thisArg:t}),new Re(r,this.__chain__)}return this.thru(ru)}function ES(){return Dl(this.__wrapped__,this.__actions__)}var bS=oo(function(n,r,s){yn.call(n,s)?++n[s]:ht(n,s,1)});function DS(n,r,s){var p=Z(n)?Ms:If;return s&&le(n,r,s)&&(r=t),p(n,H(r,3))}function AS(n,r){var s=Z(n)?Pt:ll;return s(n,H(r,3))}var vS=Pl(rp),NS=Pl(op);function wS(n,r){return Zn(fo(n,r),1)}function _S(n,r){return Zn(fo(n,r),at)}function BS(n,r,s){return s=s===t?1:en(s),Zn(fo(n,r),s)}function cp(n,r){var s=Z(n)?Be:Jt;return s(n,H(r,3))}function dp(n,r){var s=Z(n)?Km:sl;return s(n,H(r,3))}var US=oo(function(n,r,s){yn.call(n,s)?n[s].push(r):ht(n,s,[r])});function RS(n,r,s,p){n=ge(n)?n:xi(n),s=s&&!p?en(s):0;var m=n.length;return s<0&&(s=Qn(m+s,0)),To(n)?s<=m&&n.indexOf(r,s)>-1:!!m&&Oi(n,r,s)>-1}var xS=rn(function(n,r,s){var p=-1,m=typeof r=="function",f=ge(n)?E(n.length):[];return Jt(n,function(y){f[++p]=m?Te(r,y,s):er(y,r,s)}),f}),LS=oo(function(n,r,s){ht(n,s,r)});function fo(n,r){var s=Z(n)?Nn:fl;return s(n,H(r,3))}function PS(n,r,s,p){return n==null?[]:(Z(r)||(r=r==null?[]:[r]),s=p?t:s,Z(s)||(s=s==null?[]:[s]),hl(n,r,s))}var kS=oo(function(n,r,s){n[s?0:1].push(r)},function(){return[[],[]]});function MS(n,r,s){var p=Z(n)?Sa:Vs,m=arguments.length<3;return p(n,H(r,4),s,m,Jt)}function qS(n,r,s){var p=Z(n)?zm:Vs,m=arguments.length<3;return p(n,H(r,4),s,m,sl)}function JS(n,r){var s=Z(n)?Pt:ll;return s(n,yo(H(r,3)))}function GS(n){var r=Z(n)?rl:Rf;return r(n)}function VS(n,r,s){(s?le(n,r,s):r===t)?r=1:r=en(r);var p=Z(n)?cf:xf;return p(n,r)}function $S(n){var r=Z(n)?df:Pf;return r(n)}function jS(n){if(n==null)return 0;if(ge(n))return To(n)?bi(n):n.length;var r=re(n);return r==Ve||r==$e?n.size:La(n).length}function WS(n,r,s){var p=Z(n)?ya:kf;return s&&le(n,r,s)&&(r=t),p(n,H(r,3))}var HS=rn(function(n,r){if(n==null)return[];var s=r.length;return s>1&&le(n,r[0],r[1])?r=[]:s>2&&le(r[0],r[1],r[2])&&(r=[r[0]]),hl(n,Zn(r,1),[])}),Io=Dg||function(){return Xn.Date.now()};function QS(n,r){if(typeof r!="function")throw new Ue(l);return n=en(n),function(){if(--n<1)return r.apply(this,arguments)}}function mp(n,r,s){return r=s?t:r,r=n&&r==null?n.length:r,Tt(n,ee,t,t,t,t,r)}function gp(n,r){var s;if(typeof r!="function")throw new Ue(l);return n=en(n),function(){return--n>0&&(s=r.apply(this,arguments)),n<=1&&(r=t),s}}var au=rn(function(n,r,s){var p=j;if(s.length){var m=Mt(s,Ui(au));p|=xn}return Tt(n,p,r,s,m)}),fp=rn(function(n,r,s){var p=j|cn;if(s.length){var m=Mt(s,Ui(fp));p|=xn}return Tt(r,p,n,s,m)});function Ip(n,r,s){r=s?t:r;var p=Tt(n,Sn,t,t,t,t,t,r);return p.placeholder=Ip.placeholder,p}function Sp(n,r,s){r=s?t:r;var p=Tt(n,_n,t,t,t,t,t,r);return p.placeholder=Sp.placeholder,p}function yp(n,r,s){var p,m,f,y,T,O,N=0,_=!1,R=!1,P=!0;if(typeof n!="function")throw new Ue(l);r=ke(r)||0,Bn(s)&&(_=!!s.leading,R="maxWait"in s,f=R?Qn(ke(s.maxWait)||0,r):f,P="trailing"in s?!!s.trailing:P);function $(Jn){var Qe=p,bt=m;return p=m=t,N=Jn,y=n.apply(bt,Qe),y}function Q(Jn){return N=Jn,T=ar(an,r),_?$(Jn):y}function tn(Jn){var Qe=Jn-O,bt=Jn-N,Pp=r-Qe;return R?ie(Pp,f-bt):Pp}function Y(Jn){var Qe=Jn-O,bt=Jn-N;return O===t||Qe>=r||Qe<0||R&&bt>=f}function an(){var Jn=Io();if(Y(Jn))return pn(Jn);T=ar(an,tn(Jn))}function pn(Jn){return T=t,P&&p?$(Jn):(p=m=t,y)}function Ee(){T!==t&&vl(T),N=0,p=O=m=T=t}function pe(){return T===t?y:pn(Io())}function be(){var Jn=Io(),Qe=Y(Jn);if(p=arguments,m=this,O=Jn,Qe){if(T===t)return Q(O);if(R)return vl(T),T=ar(an,r),$(O)}return T===t&&(T=ar(an,r)),y}return be.cancel=Ee,be.flush=pe,be}var YS=rn(function(n,r){return ul(n,1,r)}),KS=rn(function(n,r,s){return ul(n,ke(r)||0,s)});function zS(n){return Tt(n,U)}function So(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Ue(l);var s=function(){var p=arguments,m=r?r.apply(this,p):p[0],f=s.cache;if(f.has(m))return f.get(m);var y=n.apply(this,p);return s.cache=f.set(m,y)||f,y};return s.cache=new(So.Cache||yt),s}So.Cache=yt;function yo(n){if(typeof n!="function")throw new Ue(l);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function XS(n){return gp(2,n)}var ZS=Mf(function(n,r){r=r.length==1&&Z(r[0])?Nn(r[0],Fe(H())):Nn(Zn(r,1),Fe(H()));var s=r.length;return rn(function(p){for(var m=-1,f=ie(p.length,s);++m<f;)p[m]=r[m].call(this,p[m]);return Te(n,this,p)})}),uu=rn(function(n,r){var s=Mt(r,Ui(uu));return Tt(n,xn,t,r,s)}),hp=rn(function(n,r){var s=Mt(r,Ui(hp));return Tt(n,ae,t,r,s)}),ny=Ft(function(n,r){return Tt(n,ft,t,t,t,r)});function ey(n,r){if(typeof n!="function")throw new Ue(l);return r=r===t?r:en(r),rn(n,r)}function ty(n,r){if(typeof n!="function")throw new Ue(l);return r=r==null?0:Qn(en(r),0),rn(function(s){var p=s[r],m=$t(s,0,r);return p&&kt(m,p),Te(n,this,m)})}function iy(n,r,s){var p=!0,m=!0;if(typeof n!="function")throw new Ue(l);return Bn(s)&&(p="leading"in s?!!s.leading:p,m="trailing"in s?!!s.trailing:m),yp(n,r,{leading:p,maxWait:r,trailing:m})}function ry(n){return mp(n,1)}function oy(n,r){return uu(ja(r),n)}function ay(){if(!arguments.length)return[];var n=arguments[0];return Z(n)?n:[n]}function uy(n){return xe(n,b)}function sy(n,r){return r=typeof r=="function"?r:t,xe(n,b,r)}function ly(n){return xe(n,h|b)}function py(n,r){return r=typeof r=="function"?r:t,xe(n,h|b,r)}function cy(n,r){return r==null||al(n,r,Yn(r))}function He(n,r){return n===r||n!==n&&r!==r}var dy=lo(Ua),my=lo(function(n,r){return n>=r}),si=dl(function(){return arguments}())?dl:function(n){return Ln(n)&&yn.call(n,"callee")&&!Xs.call(n,"callee")},Z=E.isArray,gy=Us?Fe(Us):Cf;function ge(n){return n!=null&&ho(n.length)&&!Ot(n)}function qn(n){return Ln(n)&&ge(n)}function fy(n){return n===!0||n===!1||Ln(n)&&se(n)==fn}var jt=vg||yu,Iy=Rs?Fe(Rs):Of;function Sy(n){return Ln(n)&&n.nodeType===1&&!ur(n)}function yy(n){if(n==null)return!0;if(ge(n)&&(Z(n)||typeof n=="string"||typeof n.splice=="function"||jt(n)||Ri(n)||si(n)))return!n.length;var r=re(n);if(r==Ve||r==$e)return!n.size;if(or(n))return!La(n).length;for(var s in n)if(yn.call(n,s))return!1;return!0}function hy(n,r){return tr(n,r)}function Ty(n,r,s){s=typeof s=="function"?s:t;var p=s?s(n,r):t;return p===t?tr(n,r,t,s):!!p}function su(n){if(!Ln(n))return!1;var r=se(n);return r==Lt||r==Ji||typeof n.message=="string"&&typeof n.name=="string"&&!ur(n)}function Fy(n){return typeof n=="number"&&nl(n)}function Ot(n){if(!Bn(n))return!1;var r=se(n);return r==te||r==us||r==Mn||r==$d}function Tp(n){return typeof n=="number"&&n==en(n)}function ho(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Ge}function Bn(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Ln(n){return n!=null&&typeof n=="object"}var Fp=xs?Fe(xs):bf;function Cy(n,r){return n===r||xa(n,r,Xa(r))}function Oy(n,r,s){return s=typeof s=="function"?s:t,xa(n,r,Xa(r),s)}function Ey(n){return Cp(n)&&n!=+n}function by(n){if(sI(n))throw new X(u);return ml(n)}function Dy(n){return n===null}function Ay(n){return n==null}function Cp(n){return typeof n=="number"||Ln(n)&&se(n)==Gi}function ur(n){if(!Ln(n)||se(n)!=It)return!1;var r=jr(n);if(r===null)return!0;var s=yn.call(r,"constructor")&&r.constructor;return typeof s=="function"&&s instanceof s&&Jr.call(s)==Cg}var lu=Ls?Fe(Ls):Df;function vy(n){return Tp(n)&&n>=-Ge&&n<=Ge}var Op=Ps?Fe(Ps):Af;function To(n){return typeof n=="string"||!Z(n)&&Ln(n)&&se(n)==$i}function Oe(n){return typeof n=="symbol"||Ln(n)&&se(n)==Br}var Ri=ks?Fe(ks):vf;function Ny(n){return n===t}function wy(n){return Ln(n)&&re(n)==ji}function _y(n){return Ln(n)&&se(n)==Wd}var By=lo(Pa),Uy=lo(function(n,r){return n<=r});function Ep(n){if(!n)return[];if(ge(n))return To(n)?je(n):me(n);if(Qi&&n[Qi])return pg(n[Qi]());var r=re(n),s=r==Ve?Ea:r==$e?kr:xi;return s(n)}function Et(n){if(!n)return n===0?n:0;if(n=ke(n),n===at||n===-at){var r=n<0?-1:1;return r*Ti}return n===n?n:0}function en(n){var r=Et(n),s=r%1;return r===r?s?r-s:r:0}function bp(n){return n?ri(en(n),0,Ne):0}function ke(n){if(typeof n=="number")return n;if(Oe(n))return Zt;if(Bn(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Bn(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=$s(n);var s=mm.test(n);return s||fm.test(n)?Hm(n.slice(2),s?2:8):dm.test(n)?Zt:+n}function Dp(n){return st(n,fe(n))}function Ry(n){return n?ri(en(n),-Ge,Ge):n===0?n:0}function In(n){return n==null?"":Ce(n)}var xy=_i(function(n,r){if(or(r)||ge(r)){st(r,Yn(r),n);return}for(var s in r)yn.call(r,s)&&Zi(n,s,r[s])}),Ap=_i(function(n,r){st(r,fe(r),n)}),Fo=_i(function(n,r,s,p){st(r,fe(r),n,p)}),Ly=_i(function(n,r,s,p){st(r,Yn(r),n,p)}),Py=Ft(wa);function ky(n,r){var s=wi(n);return r==null?s:ol(s,r)}var My=rn(function(n,r){n=Cn(n);var s=-1,p=r.length,m=p>2?r[2]:t;for(m&&le(r[0],r[1],m)&&(p=1);++s<p;)for(var f=r[s],y=fe(f),T=-1,O=y.length;++T<O;){var N=y[T],_=n[N];(_===t||He(_,Ai[N])&&!yn.call(n,N))&&(n[N]=f[N])}return n}),qy=rn(function(n){return n.push(t,$l),Te(vp,t,n)});function Jy(n,r){return qs(n,H(r,3),ut)}function Gy(n,r){return qs(n,H(r,3),Ba)}function Vy(n,r){return n==null?n:_a(n,H(r,3),fe)}function $y(n,r){return n==null?n:pl(n,H(r,3),fe)}function jy(n,r){return n&&ut(n,H(r,3))}function Wy(n,r){return n&&Ba(n,H(r,3))}function Hy(n){return n==null?[]:eo(n,Yn(n))}function Qy(n){return n==null?[]:eo(n,fe(n))}function pu(n,r,s){var p=n==null?t:oi(n,r);return p===t?s:p}function Yy(n,r){return n!=null&&Hl(n,r,yf)}function cu(n,r){return n!=null&&Hl(n,r,hf)}var Ky=Ml(function(n,r,s){r!=null&&typeof r.toString!="function"&&(r=Gr.call(r)),n[r]=s},mu(Ie)),zy=Ml(function(n,r,s){r!=null&&typeof r.toString!="function"&&(r=Gr.call(r)),yn.call(n,r)?n[r].push(s):n[r]=[s]},H),Xy=rn(er);function Yn(n){return ge(n)?il(n):La(n)}function fe(n){return ge(n)?il(n,!0):Nf(n)}function Zy(n,r){var s={};return r=H(r,3),ut(n,function(p,m,f){ht(s,r(p,m,f),p)}),s}function nh(n,r){var s={};return r=H(r,3),ut(n,function(p,m,f){ht(s,m,r(p,m,f))}),s}var eh=_i(function(n,r,s){to(n,r,s)}),vp=_i(function(n,r,s,p){to(n,r,s,p)}),th=Ft(function(n,r){var s={};if(n==null)return s;var p=!1;r=Nn(r,function(f){return f=Vt(f,n),p||(p=f.length>1),f}),st(n,Ka(n),s),p&&(s=xe(s,h|w|b,Kf));for(var m=r.length;m--;)Ga(s,r[m]);return s});function ih(n,r){return Np(n,yo(H(r)))}var rh=Ft(function(n,r){return n==null?{}:_f(n,r)});function Np(n,r){if(n==null)return{};var s=Nn(Ka(n),function(p){return[p]});return r=H(r),Tl(n,s,function(p,m){return r(p,m[0])})}function oh(n,r,s){r=Vt(r,n);var p=-1,m=r.length;for(m||(m=1,n=t);++p<m;){var f=n==null?t:n[lt(r[p])];f===t&&(p=m,f=s),n=Ot(f)?f.call(n):f}return n}function ah(n,r,s){return n==null?n:ir(n,r,s)}function uh(n,r,s,p){return p=typeof p=="function"?p:t,n==null?n:ir(n,r,s,p)}var wp=Gl(Yn),_p=Gl(fe);function sh(n,r,s){var p=Z(n),m=p||jt(n)||Ri(n);if(r=H(r,4),s==null){var f=n&&n.constructor;m?s=p?new f:[]:Bn(n)?s=Ot(f)?wi(jr(n)):{}:s={}}return(m?Be:ut)(n,function(y,T,O){return r(s,y,T,O)}),s}function lh(n,r){return n==null?!0:Ga(n,r)}function ph(n,r,s){return n==null?n:bl(n,r,ja(s))}function ch(n,r,s,p){return p=typeof p=="function"?p:t,n==null?n:bl(n,r,ja(s),p)}function xi(n){return n==null?[]:Oa(n,Yn(n))}function dh(n){return n==null?[]:Oa(n,fe(n))}function mh(n,r,s){return s===t&&(s=r,r=t),s!==t&&(s=ke(s),s=s===s?s:0),r!==t&&(r=ke(r),r=r===r?r:0),ri(ke(n),r,s)}function gh(n,r,s){return r=Et(r),s===t?(s=r,r=0):s=Et(s),n=ke(n),Tf(n,r,s)}function fh(n,r,s){if(s&&typeof s!="boolean"&&le(n,r,s)&&(r=s=t),s===t&&(typeof r=="boolean"?(s=r,r=t):typeof n=="boolean"&&(s=n,n=t)),n===t&&r===t?(n=0,r=1):(n=Et(n),r===t?(r=n,n=0):r=Et(r)),n>r){var p=n;n=r,r=p}if(s||n%1||r%1){var m=el();return ie(n+m*(r-n+Wm("1e-"+((m+"").length-1))),r)}return Ma(n,r)}var Ih=Bi(function(n,r,s){return r=r.toLowerCase(),n+(s?Bp(r):r)});function Bp(n){return du(In(n).toLowerCase())}function Up(n){return n=In(n),n&&n.replace(Sm,og).replace(Lm,"")}function Sh(n,r,s){n=In(n),r=Ce(r);var p=n.length;s=s===t?p:ri(en(s),0,p);var m=s;return s-=r.length,s>=0&&n.slice(s,m)==r}function yh(n){return n=In(n),n&&zd.test(n)?n.replace(ps,ag):n}function hh(n){return n=In(n),n&&im.test(n)?n.replace(ua,"\\$&"):n}var Th=Bi(function(n,r,s){return n+(s?"-":"")+r.toLowerCase()}),Fh=Bi(function(n,r,s){return n+(s?" ":"")+r.toLowerCase()}),Ch=Ll("toLowerCase");function Oh(n,r,s){n=In(n),r=en(r);var p=r?bi(n):0;if(!r||p>=r)return n;var m=(r-p)/2;return so(Yr(m),s)+n+so(Qr(m),s)}function Eh(n,r,s){n=In(n),r=en(r);var p=r?bi(n):0;return r&&p<r?n+so(r-p,s):n}function bh(n,r,s){n=In(n),r=en(r);var p=r?bi(n):0;return r&&p<r?so(r-p,s)+n:n}function Dh(n,r,s){return s||r==null?r=0:r&&(r=+r),Bg(In(n).replace(sa,""),r||0)}function Ah(n,r,s){return(s?le(n,r,s):r===t)?r=1:r=en(r),qa(In(n),r)}function vh(){var n=arguments,r=In(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Nh=Bi(function(n,r,s){return n+(s?"_":"")+r.toLowerCase()});function wh(n,r,s){return s&&typeof s!="number"&&le(n,r,s)&&(r=s=t),s=s===t?Ne:s>>>0,s?(n=In(n),n&&(typeof r=="string"||r!=null&&!lu(r))&&(r=Ce(r),!r&&Ei(n))?$t(je(n),0,s):n.split(r,s)):[]}var _h=Bi(function(n,r,s){return n+(s?" ":"")+du(r)});function Bh(n,r,s){return n=In(n),s=s==null?0:ri(en(s),0,n.length),r=Ce(r),n.slice(s,s+r.length)==r}function Uh(n,r,s){var p=g.templateSettings;s&&le(n,r,s)&&(r=t),n=In(n),r=Fo({},r,p,Vl);var m=Fo({},r.imports,p.imports,Vl),f=Yn(m),y=Oa(m,f),T,O,N=0,_=r.interpolate||Ur,R="__p += '",P=ba((r.escape||Ur).source+"|"+_.source+"|"+(_===cs?cm:Ur).source+"|"+(r.evaluate||Ur).source+"|$","g"),$="//# sourceURL="+(yn.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Jm+"]")+`
`;n.replace(P,function(Y,an,pn,Ee,pe,be){return pn||(pn=Ee),R+=n.slice(N,be).replace(ym,ug),an&&(T=!0,R+=`' +
__e(`+an+`) +
'`),pe&&(O=!0,R+=`';
`+pe+`;
__p += '`),pn&&(R+=`' +
((__t = (`+pn+`)) == null ? '' : __t) +
'`),N=be+Y.length,Y}),R+=`';
`;var Q=yn.call(r,"variable")&&r.variable;if(!Q)R=`with (obj) {
`+R+`
}
`;else if(lm.test(Q))throw new X(c);R=(O?R.replace(Hd,""):R).replace(Qd,"$1").replace(Yd,"$1;"),R="function("+(Q||"obj")+`) {
`+(Q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(O?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+R+`return __p
}`;var tn=xp(function(){return mn(f,$+"return "+R).apply(t,y)});if(tn.source=R,su(tn))throw tn;return tn}function Rh(n){return In(n).toLowerCase()}function xh(n){return In(n).toUpperCase()}function Lh(n,r,s){if(n=In(n),n&&(s||r===t))return $s(n);if(!n||!(r=Ce(r)))return n;var p=je(n),m=je(r),f=js(p,m),y=Ws(p,m)+1;return $t(p,f,y).join("")}function Ph(n,r,s){if(n=In(n),n&&(s||r===t))return n.slice(0,Qs(n)+1);if(!n||!(r=Ce(r)))return n;var p=je(n),m=Ws(p,je(r))+1;return $t(p,0,m).join("")}function kh(n,r,s){if(n=In(n),n&&(s||r===t))return n.replace(sa,"");if(!n||!(r=Ce(r)))return n;var p=je(n),m=js(p,je(r));return $t(p,m).join("")}function Mh(n,r){var s=z,p=ue;if(Bn(r)){var m="separator"in r?r.separator:m;s="length"in r?en(r.length):s,p="omission"in r?Ce(r.omission):p}n=In(n);var f=n.length;if(Ei(n)){var y=je(n);f=y.length}if(s>=f)return n;var T=s-bi(p);if(T<1)return p;var O=y?$t(y,0,T).join(""):n.slice(0,T);if(m===t)return O+p;if(y&&(T+=O.length-T),lu(m)){if(n.slice(T).search(m)){var N,_=O;for(m.global||(m=ba(m.source,In(ds.exec(m))+"g")),m.lastIndex=0;N=m.exec(_);)var R=N.index;O=O.slice(0,R===t?T:R)}}else if(n.indexOf(Ce(m),T)!=T){var P=O.lastIndexOf(m);P>-1&&(O=O.slice(0,P))}return O+p}function qh(n){return n=In(n),n&&Kd.test(n)?n.replace(ls,gg):n}var Jh=Bi(function(n,r,s){return n+(s?" ":"")+r.toUpperCase()}),du=Ll("toUpperCase");function Rp(n,r,s){return n=In(n),r=s?t:r,r===t?lg(n)?Sg(n):ng(n):n.match(r)||[]}var xp=rn(function(n,r){try{return Te(n,t,r)}catch(s){return su(s)?s:new X(s)}}),Gh=Ft(function(n,r){return Be(r,function(s){s=lt(s),ht(n,s,au(n[s],n))}),n});function Vh(n){var r=n==null?0:n.length,s=H();return n=r?Nn(n,function(p){if(typeof p[1]!="function")throw new Ue(l);return[s(p[0]),p[1]]}):[],rn(function(p){for(var m=-1;++m<r;){var f=n[m];if(Te(f[0],this,p))return Te(f[1],this,p)}})}function $h(n){return ff(xe(n,h))}function mu(n){return function(){return n}}function jh(n,r){return n==null||n!==n?r:n}var Wh=kl(),Hh=kl(!0);function Ie(n){return n}function gu(n){return gl(typeof n=="function"?n:xe(n,h))}function Qh(n){return Il(xe(n,h))}function Yh(n,r){return Sl(n,xe(r,h))}var Kh=rn(function(n,r){return function(s){return er(s,n,r)}}),zh=rn(function(n,r){return function(s){return er(n,s,r)}});function fu(n,r,s){var p=Yn(r),m=eo(r,p);s==null&&!(Bn(r)&&(m.length||!p.length))&&(s=r,r=n,n=this,m=eo(r,Yn(r)));var f=!(Bn(s)&&"chain"in s)||!!s.chain,y=Ot(n);return Be(m,function(T){var O=r[T];n[T]=O,y&&(n.prototype[T]=function(){var N=this.__chain__;if(f||N){var _=n(this.__wrapped__),R=_.__actions__=me(this.__actions__);return R.push({func:O,args:arguments,thisArg:n}),_.__chain__=N,_}return O.apply(n,kt([this.value()],arguments))})}),n}function Xh(){return Xn._===this&&(Xn._=Og),this}function Iu(){}function Zh(n){return n=en(n),rn(function(r){return yl(r,n)})}var nT=Ha(Nn),eT=Ha(Ms),tT=Ha(ya);function Lp(n){return nu(n)?ha(lt(n)):Bf(n)}function iT(n){return function(r){return n==null?t:oi(n,r)}}var rT=ql(),oT=ql(!0);function Su(){return[]}function yu(){return!1}function aT(){return{}}function uT(){return""}function sT(){return!0}function lT(n,r){if(n=en(n),n<1||n>Ge)return[];var s=Ne,p=ie(n,Ne);r=H(r),n-=Ne;for(var m=Ca(p,r);++s<n;)r(s);return m}function pT(n){return Z(n)?Nn(n,lt):Oe(n)?[n]:me(tp(In(n)))}function cT(n){var r=++Fg;return In(n)+r}var dT=uo(function(n,r){return n+r},0),mT=Qa("ceil"),gT=uo(function(n,r){return n/r},1),fT=Qa("floor");function IT(n){return n&&n.length?no(n,Ie,Ua):t}function ST(n,r){return n&&n.length?no(n,H(r,2),Ua):t}function yT(n){return Gs(n,Ie)}function hT(n,r){return Gs(n,H(r,2))}function TT(n){return n&&n.length?no(n,Ie,Pa):t}function FT(n,r){return n&&n.length?no(n,H(r,2),Pa):t}var CT=uo(function(n,r){return n*r},1),OT=Qa("round"),ET=uo(function(n,r){return n-r},0);function bT(n){return n&&n.length?Fa(n,Ie):0}function DT(n,r){return n&&n.length?Fa(n,H(r,2)):0}return g.after=QS,g.ary=mp,g.assign=xy,g.assignIn=Ap,g.assignInWith=Fo,g.assignWith=Ly,g.at=Py,g.before=gp,g.bind=au,g.bindAll=Gh,g.bindKey=fp,g.castArray=ay,g.chain=pp,g.chunk=fI,g.compact=II,g.concat=SI,g.cond=Vh,g.conforms=$h,g.constant=mu,g.countBy=bS,g.create=ky,g.curry=Ip,g.curryRight=Sp,g.debounce=yp,g.defaults=My,g.defaultsDeep=qy,g.defer=YS,g.delay=KS,g.difference=yI,g.differenceBy=hI,g.differenceWith=TI,g.drop=FI,g.dropRight=CI,g.dropRightWhile=OI,g.dropWhile=EI,g.fill=bI,g.filter=AS,g.flatMap=wS,g.flatMapDeep=_S,g.flatMapDepth=BS,g.flatten=ap,g.flattenDeep=DI,g.flattenDepth=AI,g.flip=zS,g.flow=Wh,g.flowRight=Hh,g.fromPairs=vI,g.functions=Hy,g.functionsIn=Qy,g.groupBy=US,g.initial=wI,g.intersection=_I,g.intersectionBy=BI,g.intersectionWith=UI,g.invert=Ky,g.invertBy=zy,g.invokeMap=xS,g.iteratee=gu,g.keyBy=LS,g.keys=Yn,g.keysIn=fe,g.map=fo,g.mapKeys=Zy,g.mapValues=nh,g.matches=Qh,g.matchesProperty=Yh,g.memoize=So,g.merge=eh,g.mergeWith=vp,g.method=Kh,g.methodOf=zh,g.mixin=fu,g.negate=yo,g.nthArg=Zh,g.omit=th,g.omitBy=ih,g.once=XS,g.orderBy=PS,g.over=nT,g.overArgs=ZS,g.overEvery=eT,g.overSome=tT,g.partial=uu,g.partialRight=hp,g.partition=kS,g.pick=rh,g.pickBy=Np,g.property=Lp,g.propertyOf=iT,g.pull=PI,g.pullAll=sp,g.pullAllBy=kI,g.pullAllWith=MI,g.pullAt=qI,g.range=rT,g.rangeRight=oT,g.rearg=ny,g.reject=JS,g.remove=JI,g.rest=ey,g.reverse=ru,g.sampleSize=VS,g.set=ah,g.setWith=uh,g.shuffle=$S,g.slice=GI,g.sortBy=HS,g.sortedUniq=YI,g.sortedUniqBy=KI,g.split=wh,g.spread=ty,g.tail=zI,g.take=XI,g.takeRight=ZI,g.takeRightWhile=nS,g.takeWhile=eS,g.tap=IS,g.throttle=iy,g.thru=go,g.toArray=Ep,g.toPairs=wp,g.toPairsIn=_p,g.toPath=pT,g.toPlainObject=Dp,g.transform=sh,g.unary=ry,g.union=tS,g.unionBy=iS,g.unionWith=rS,g.uniq=oS,g.uniqBy=aS,g.uniqWith=uS,g.unset=lh,g.unzip=ou,g.unzipWith=lp,g.update=ph,g.updateWith=ch,g.values=xi,g.valuesIn=dh,g.without=sS,g.words=Rp,g.wrap=oy,g.xor=lS,g.xorBy=pS,g.xorWith=cS,g.zip=dS,g.zipObject=mS,g.zipObjectDeep=gS,g.zipWith=fS,g.entries=wp,g.entriesIn=_p,g.extend=Ap,g.extendWith=Fo,fu(g,g),g.add=dT,g.attempt=xp,g.camelCase=Ih,g.capitalize=Bp,g.ceil=mT,g.clamp=mh,g.clone=uy,g.cloneDeep=ly,g.cloneDeepWith=py,g.cloneWith=sy,g.conformsTo=cy,g.deburr=Up,g.defaultTo=jh,g.divide=gT,g.endsWith=Sh,g.eq=He,g.escape=yh,g.escapeRegExp=hh,g.every=DS,g.find=vS,g.findIndex=rp,g.findKey=Jy,g.findLast=NS,g.findLastIndex=op,g.findLastKey=Gy,g.floor=fT,g.forEach=cp,g.forEachRight=dp,g.forIn=Vy,g.forInRight=$y,g.forOwn=jy,g.forOwnRight=Wy,g.get=pu,g.gt=dy,g.gte=my,g.has=Yy,g.hasIn=cu,g.head=up,g.identity=Ie,g.includes=RS,g.indexOf=NI,g.inRange=gh,g.invoke=Xy,g.isArguments=si,g.isArray=Z,g.isArrayBuffer=gy,g.isArrayLike=ge,g.isArrayLikeObject=qn,g.isBoolean=fy,g.isBuffer=jt,g.isDate=Iy,g.isElement=Sy,g.isEmpty=yy,g.isEqual=hy,g.isEqualWith=Ty,g.isError=su,g.isFinite=Fy,g.isFunction=Ot,g.isInteger=Tp,g.isLength=ho,g.isMap=Fp,g.isMatch=Cy,g.isMatchWith=Oy,g.isNaN=Ey,g.isNative=by,g.isNil=Ay,g.isNull=Dy,g.isNumber=Cp,g.isObject=Bn,g.isObjectLike=Ln,g.isPlainObject=ur,g.isRegExp=lu,g.isSafeInteger=vy,g.isSet=Op,g.isString=To,g.isSymbol=Oe,g.isTypedArray=Ri,g.isUndefined=Ny,g.isWeakMap=wy,g.isWeakSet=_y,g.join=RI,g.kebabCase=Th,g.last=Pe,g.lastIndexOf=xI,g.lowerCase=Fh,g.lowerFirst=Ch,g.lt=By,g.lte=Uy,g.max=IT,g.maxBy=ST,g.mean=yT,g.meanBy=hT,g.min=TT,g.minBy=FT,g.stubArray=Su,g.stubFalse=yu,g.stubObject=aT,g.stubString=uT,g.stubTrue=sT,g.multiply=CT,g.nth=LI,g.noConflict=Xh,g.noop=Iu,g.now=Io,g.pad=Oh,g.padEnd=Eh,g.padStart=bh,g.parseInt=Dh,g.random=fh,g.reduce=MS,g.reduceRight=qS,g.repeat=Ah,g.replace=vh,g.result=oh,g.round=OT,g.runInContext=C,g.sample=GS,g.size=jS,g.snakeCase=Nh,g.some=WS,g.sortedIndex=VI,g.sortedIndexBy=$I,g.sortedIndexOf=jI,g.sortedLastIndex=WI,g.sortedLastIndexBy=HI,g.sortedLastIndexOf=QI,g.startCase=_h,g.startsWith=Bh,g.subtract=ET,g.sum=bT,g.sumBy=DT,g.template=Uh,g.times=lT,g.toFinite=Et,g.toInteger=en,g.toLength=bp,g.toLower=Rh,g.toNumber=ke,g.toSafeInteger=Ry,g.toString=In,g.toUpper=xh,g.trim=Lh,g.trimEnd=Ph,g.trimStart=kh,g.truncate=Mh,g.unescape=qh,g.uniqueId=cT,g.upperCase=Jh,g.upperFirst=du,g.each=cp,g.eachRight=dp,g.first=up,fu(g,function(){var n={};return ut(g,function(r,s){yn.call(g.prototype,s)||(n[s]=r)}),n}(),{chain:!1}),g.VERSION=a,Be(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){g[n].placeholder=g}),Be(["drop","take"],function(n,r){sn.prototype[n]=function(s){s=s===t?1:Qn(en(s),0);var p=this.__filtered__&&!r?new sn(this):this.clone();return p.__filtered__?p.__takeCount__=ie(s,p.__takeCount__):p.__views__.push({size:ie(s,Ne),type:n+(p.__dir__<0?"Right":"")}),p},sn.prototype[n+"Right"]=function(s){return this.reverse()[n](s).reverse()}}),Be(["filter","map","takeWhile"],function(n,r){var s=r+1,p=s==wr||s==_r;sn.prototype[n]=function(m){var f=this.clone();return f.__iteratees__.push({iteratee:H(m,3),type:s}),f.__filtered__=f.__filtered__||p,f}}),Be(["head","last"],function(n,r){var s="take"+(r?"Right":"");sn.prototype[n]=function(){return this[s](1).value()[0]}}),Be(["initial","tail"],function(n,r){var s="drop"+(r?"":"Right");sn.prototype[n]=function(){return this.__filtered__?new sn(this):this[s](1)}}),sn.prototype.compact=function(){return this.filter(Ie)},sn.prototype.find=function(n){return this.filter(n).head()},sn.prototype.findLast=function(n){return this.reverse().find(n)},sn.prototype.invokeMap=rn(function(n,r){return typeof n=="function"?new sn(this):this.map(function(s){return er(s,n,r)})}),sn.prototype.reject=function(n){return this.filter(yo(H(n)))},sn.prototype.slice=function(n,r){n=en(n);var s=this;return s.__filtered__&&(n>0||r<0)?new sn(s):(n<0?s=s.takeRight(-n):n&&(s=s.drop(n)),r!==t&&(r=en(r),s=r<0?s.dropRight(-r):s.take(r-n)),s)},sn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},sn.prototype.toArray=function(){return this.take(Ne)},ut(sn.prototype,function(n,r){var s=/^(?:filter|find|map|reject)|While$/.test(r),p=/^(?:head|last)$/.test(r),m=g[p?"take"+(r=="last"?"Right":""):r],f=p||/^find/.test(r);m&&(g.prototype[r]=function(){var y=this.__wrapped__,T=p?[1]:arguments,O=y instanceof sn,N=T[0],_=O||Z(y),R=function(an){var pn=m.apply(g,kt([an],T));return p&&P?pn[0]:pn};_&&s&&typeof N=="function"&&N.length!=1&&(O=_=!1);var P=this.__chain__,$=!!this.__actions__.length,Q=f&&!P,tn=O&&!$;if(!f&&_){y=tn?y:new sn(this);var Y=n.apply(y,T);return Y.__actions__.push({func:go,args:[R],thisArg:t}),new Re(Y,P)}return Q&&tn?n.apply(this,T):(Y=this.thru(R),Q?p?Y.value()[0]:Y.value():Y)})}),Be(["pop","push","shift","sort","splice","unshift"],function(n){var r=Mr[n],s=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",p=/^(?:pop|shift)$/.test(n);g.prototype[n]=function(){var m=arguments;if(p&&!this.__chain__){var f=this.value();return r.apply(Z(f)?f:[],m)}return this[s](function(y){return r.apply(Z(y)?y:[],m)})}}),ut(sn.prototype,function(n,r){var s=g[r];if(s){var p=s.name+"";yn.call(Ni,p)||(Ni[p]=[]),Ni[p].push({name:r,func:s})}}),Ni[ao(t,cn).name]=[{name:"wrapper",func:t}],sn.prototype.clone=Mg,sn.prototype.reverse=qg,sn.prototype.value=Jg,g.prototype.at=SS,g.prototype.chain=yS,g.prototype.commit=hS,g.prototype.next=TS,g.prototype.plant=CS,g.prototype.reverse=OS,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=ES,g.prototype.first=g.prototype.head,Qi&&(g.prototype[Qi]=FS),g},Di=yg();ni?((ni.exports=Di)._=Di,ga._=Di):Xn._=Di}).call(cr)})(Ro,Ro.exports);var RC=Ro.exports;const wt=UC(RC);function xC(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":{const e=i.toLowerCase().trim();return e==="true"||e==="t"||e==="1"}case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}function De(i,e){const t=a=>e.convert(a[i]);return{name:LC(i),key:i,asEnv:a=>({[i]:e.asString(a)}),zod:{type:e.type},get:t,getOrDefault:(a,o)=>t(a)??o}}function LC(i){return i.toLowerCase().replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace("-","").replace("_",""))}De("MAGIDOC_GENERATE",xC());function Oo(i){return{convert:e=>{if(Array.isArray(e))return e;if(typeof e=="string"){const t=JSON.parse(e);return Array.isArray(t)?t:null}return null},asString:e=>JSON.stringify(e),type:e=>e.array(i(e)).optional()}}function ac(i){return{convert:e=>{if(typeof e=="object")return e;if(typeof e=="string"){const t=JSON.parse(e);return typeof t!="object"?null:t}return null},asString:e=>JSON.stringify(e),type:e=>e.record(i(e).optional()).optional()}}function Eo(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function uc(i){return{convert:e=>e==null||!i.find(t=>t===e)?null:e,asString:e=>String(e),type:e=>e.enum(i).optional()}}var Vo={APP_LOGO:De("APP_LOGO",Eo()),APP_TITLE:De("APP_TITLE",Eo()),APP_FAVICON:De("APP_FAVICON",Eo()),SITE_ROOT:De("SITE_ROOT",Eo()),SITE_META:De("SITE_META",ac(i=>i.string())),CUSTOM_STYLES:De("CUSTOM_STYLES",Oo(i=>i.string())),FIELDS_SORTING:De("FIELDS_SORTING",uc(["default","alphabetical"])),ARGUMENTS_SORTING:De("ARGUMENTS_SORTING",uc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:De("QUERY_GENERATION_FACTORIES",ac(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:De("PAGES",Oo(i=>{const e=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(e),i.string().min(1)])}));return e})),EXTERNAL_LINKS:De("EXTERNAL_LINKS",Oo(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:De("DIRECTIVES",Oo(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};const PC="Tarvent API",kC="https://cdn.trvt.io/resource/graphics/logo/RefLogo.png",MC="https://cdn.trvt.io/resource/graphics/logo/favicon-16x16.png",qC=`[{"title":"Welcome","content":"\\n# 👋 Hi\\n\\nWelcome to [Tarvent](https://api.tarvent.com/graphql/)'s GraphQL documentation!\\n"}]`,JC='[{"href":"https://api.tarvent.com","label":"Tarvent API","kind":"Tarvent"},{"href":"https://www.tarvent.com/contact-us","label":"Tarvent support","kind":"Tarvent"}]',GC='{"UUID":"000000000000000000","Byte":"000000","Decimal":0,"Int!":420,"String":"abc"}',VC="true",Wc={APP_TITLE:PC,APP_LOGO:kC,APP_FAVICON:MC,PAGES:qC,EXTERNAL_LINKS:JC,QUERY_GENERATION_FACTORIES:GC,MAGIDOC_GENERATE:VC};function Lb(i){return i.get(Wc)}function $o(i,e){return i.getOrDefault(Wc,e)}function jo(){return $o(Vo.SITE_ROOT,UT)}class $C{constructor(e){On(this,"mapping");this.mapping=e}getFor(e){return this.mapping.get(e.name)}}var Sr;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(Sr||(Sr={}));function dn(i,e){if(!!!i)throw new Error(e)}function _t(i){return typeof i=="object"&&i!==null}function Ze(i,e){if(!!!i)throw new Error(e??"Unexpected invariant triggered.")}const jC=/\r\n|[\n\r]/g;function Nu(i,e){let t=0,a=1;for(const o of i.body.matchAll(jC)){if(typeof o.index=="number"||Ze(!1),o.index>=e)break;t=o.index+o[0].length,a+=1}return{line:a,column:e+1-t}}function WC(i){return Hc(i.source,Nu(i.source,i.start))}function Hc(i,e){const t=i.locationOffset.column-1,a="".padStart(t)+i.body,o=e.line-1,u=i.locationOffset.line-1,l=e.line+u,c=e.line===1?t:0,d=e.column+c,I=`${i.name}:${l}:${d}
`,S=a.split(/\r\n|[\n\r]/g),h=S[o];if(h.length>120){const w=Math.floor(d/80),b=d%80,v=[];for(let L=0;L<h.length;L+=80)v.push(h.slice(L,L+80));return I+sc([[`${l} |`,v[0]],...v.slice(1,w+1).map(L=>["|",L]),["|","^".padStart(b)],["|",v[w+1]]])}return I+sc([[`${l-1} |`,S[o-1]],[`${l} |`,h],["|","^".padStart(d)],[`${l+1} |`,S[o+1]]])}function sc(i){const e=i.filter(([a,o])=>o!==void 0),t=Math.max(...e.map(([a])=>a.length));return e.map(([a,o])=>a.padStart(t)+(o?" "+o:"")).join(`
`)}function HC(i){const e=i[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:e}class x extends Error{constructor(e,...t){var a,o,u;const{nodes:l,source:c,positions:d,path:I,originalError:S,extensions:h}=HC(t);super(e),this.name="GraphQLError",this.path=I??void 0,this.originalError=S??void 0,this.nodes=lc(Array.isArray(l)?l:l?[l]:void 0);const w=lc((a=this.nodes)===null||a===void 0?void 0:a.map(v=>v.loc).filter(v=>v!=null));this.source=c??(w==null||(o=w[0])===null||o===void 0?void 0:o.source),this.positions=d??(w==null?void 0:w.map(v=>v.start)),this.locations=d&&c?d.map(v=>Nu(c,v)):w==null?void 0:w.map(v=>Nu(v.source,v.start));const b=_t(S==null?void 0:S.extensions)?S==null?void 0:S.extensions:void 0;this.extensions=(u=h??b)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),S!=null&&S.stack?Object.defineProperty(this,"stack",{value:S.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,x):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(e+=`

`+WC(t.loc));else if(this.source&&this.locations)for(const t of this.locations)e+=`

`+Hc(this.source,t);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function lc(i){return i===void 0||i.length===0?void 0:i}function Kn(i,e,t){return new x(`Syntax Error: ${t}`,{source:i,positions:[e]})}class QC{constructor(e,t,a){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=a}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Qc{constructor(e,t,a,o,u,l){this.kind=e,this.start=t,this.end=a,this.line=o,this.column=u,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Yc={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},YC=new Set(Object.keys(Yc));function pc(i){const e=i==null?void 0:i.kind;return typeof e=="string"&&YC.has(e)}var Me;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Me||(Me={}));var W;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(W||(W={}));var F;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(F||(F={}));function wu(i){return i===9||i===32}function Cr(i){return i>=48&&i<=57}function Kc(i){return i>=97&&i<=122||i>=65&&i<=90}function Ku(i){return Kc(i)||i===95}function zc(i){return Kc(i)||Cr(i)||i===95}function KC(i){var e;let t=Number.MAX_SAFE_INTEGER,a=null,o=-1;for(let l=0;l<i.length;++l){var u;const c=i[l],d=zC(c);d!==c.length&&(a=(u=a)!==null&&u!==void 0?u:l,o=l,l!==0&&d<t&&(t=d))}return i.map((l,c)=>c===0?l:l.slice(t)).slice((e=a)!==null&&e!==void 0?e:0,o+1)}function zC(i){let e=0;for(;e<i.length&&wu(i.charCodeAt(e));)++e;return e}function XC(i,e){const t=i.replace(/"""/g,'\\"""'),a=t.split(/\r\n|[\n\r]/g),o=a.length===1,u=a.length>1&&a.slice(1).every(b=>b.length===0||wu(b.charCodeAt(0))),l=t.endsWith('\\"""'),c=i.endsWith('"')&&!l,d=i.endsWith("\\"),I=c||d,S=!o||i.length>70||I||u||l;let h="";const w=o&&wu(i.charCodeAt(0));return(S&&!w||u)&&(h+=`
`),h+=t,(S||I)&&(h+=`
`),'"""'+h+'"""'}var B;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(B||(B={}));class ZC{constructor(e){const t=new Qc(B.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==B.EOF)do if(e.next)e=e.next;else{const t=eO(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===B.COMMENT);return e}}function nO(i){return i===B.BANG||i===B.DOLLAR||i===B.AMP||i===B.PAREN_L||i===B.PAREN_R||i===B.SPREAD||i===B.COLON||i===B.EQUALS||i===B.AT||i===B.BRACKET_L||i===B.BRACKET_R||i===B.BRACE_L||i===B.PIPE||i===B.BRACE_R}function Mi(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function Wo(i,e){return Xc(i.charCodeAt(e))&&Zc(i.charCodeAt(e+1))}function Xc(i){return i>=55296&&i<=56319}function Zc(i){return i>=56320&&i<=57343}function mi(i,e){const t=i.source.body.codePointAt(e);if(t===void 0)return B.EOF;if(t>=32&&t<=126){const a=String.fromCodePoint(t);return a==='"'?`'"'`:`"${a}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function $n(i,e,t,a,o){const u=i.line,l=1+t-i.lineStart;return new Qc(e,t,a,u,l,o)}function eO(i,e){const t=i.source.body,a=t.length;let o=e;for(;o<a;){const u=t.charCodeAt(o);switch(u){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++i.line,i.lineStart=o;continue;case 13:t.charCodeAt(o+1)===10?o+=2:++o,++i.line,i.lineStart=o;continue;case 35:return tO(i,o);case 33:return $n(i,B.BANG,o,o+1);case 36:return $n(i,B.DOLLAR,o,o+1);case 38:return $n(i,B.AMP,o,o+1);case 40:return $n(i,B.PAREN_L,o,o+1);case 41:return $n(i,B.PAREN_R,o,o+1);case 46:if(t.charCodeAt(o+1)===46&&t.charCodeAt(o+2)===46)return $n(i,B.SPREAD,o,o+3);break;case 58:return $n(i,B.COLON,o,o+1);case 61:return $n(i,B.EQUALS,o,o+1);case 64:return $n(i,B.AT,o,o+1);case 91:return $n(i,B.BRACKET_L,o,o+1);case 93:return $n(i,B.BRACKET_R,o,o+1);case 123:return $n(i,B.BRACE_L,o,o+1);case 124:return $n(i,B.PIPE,o,o+1);case 125:return $n(i,B.BRACE_R,o,o+1);case 34:return t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34?sO(i,o):rO(i,o)}if(Cr(u)||u===45)return iO(i,o,u);if(Ku(u))return lO(i,o);throw Kn(i.source,o,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Mi(u)||Wo(t,o)?`Unexpected character: ${mi(i,o)}.`:`Invalid character: ${mi(i,o)}.`)}return $n(i,B.EOF,a,a)}function tO(i,e){const t=i.source.body,a=t.length;let o=e+1;for(;o<a;){const u=t.charCodeAt(o);if(u===10||u===13)break;if(Mi(u))++o;else if(Wo(t,o))o+=2;else break}return $n(i,B.COMMENT,e,o,t.slice(e+1,o))}function iO(i,e,t){const a=i.source.body;let o=e,u=t,l=!1;if(u===45&&(u=a.charCodeAt(++o)),u===48){if(u=a.charCodeAt(++o),Cr(u))throw Kn(i.source,o,`Invalid number, unexpected digit after 0: ${mi(i,o)}.`)}else o=Fu(i,o,u),u=a.charCodeAt(o);if(u===46&&(l=!0,u=a.charCodeAt(++o),o=Fu(i,o,u),u=a.charCodeAt(o)),(u===69||u===101)&&(l=!0,u=a.charCodeAt(++o),(u===43||u===45)&&(u=a.charCodeAt(++o)),o=Fu(i,o,u),u=a.charCodeAt(o)),u===46||Ku(u))throw Kn(i.source,o,`Invalid number, expected digit but got: ${mi(i,o)}.`);return $n(i,l?B.FLOAT:B.INT,e,o,a.slice(e,o))}function Fu(i,e,t){if(!Cr(t))throw Kn(i.source,e,`Invalid number, expected digit but got: ${mi(i,e)}.`);const a=i.source.body;let o=e+1;for(;Cr(a.charCodeAt(o));)++o;return o}function rO(i,e){const t=i.source.body,a=t.length;let o=e+1,u=o,l="";for(;o<a;){const c=t.charCodeAt(o);if(c===34)return l+=t.slice(u,o),$n(i,B.STRING,e,o+1,l);if(c===92){l+=t.slice(u,o);const d=t.charCodeAt(o+1)===117?t.charCodeAt(o+2)===123?oO(i,o):aO(i,o):uO(i,o);l+=d.value,o+=d.size,u=o;continue}if(c===10||c===13)break;if(Mi(c))++o;else if(Wo(t,o))o+=2;else throw Kn(i.source,o,`Invalid character within String: ${mi(i,o)}.`)}throw Kn(i.source,o,"Unterminated string.")}function oO(i,e){const t=i.source.body;let a=0,o=3;for(;o<12;){const u=t.charCodeAt(e+o++);if(u===125){if(o<5||!Mi(a))break;return{value:String.fromCodePoint(a),size:o}}if(a=a<<4|dr(u),a<0)break}throw Kn(i.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+o)}".`)}function aO(i,e){const t=i.source.body,a=cc(t,e+2);if(Mi(a))return{value:String.fromCodePoint(a),size:6};if(Xc(a)&&t.charCodeAt(e+6)===92&&t.charCodeAt(e+7)===117){const o=cc(t,e+8);if(Zc(o))return{value:String.fromCodePoint(a,o),size:12}}throw Kn(i.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+6)}".`)}function cc(i,e){return dr(i.charCodeAt(e))<<12|dr(i.charCodeAt(e+1))<<8|dr(i.charCodeAt(e+2))<<4|dr(i.charCodeAt(e+3))}function dr(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function uO(i,e){const t=i.source.body;switch(t.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Kn(i.source,e,`Invalid character escape sequence: "${t.slice(e,e+2)}".`)}function sO(i,e){const t=i.source.body,a=t.length;let o=i.lineStart,u=e+3,l=u,c="";const d=[];for(;u<a;){const I=t.charCodeAt(u);if(I===34&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34){c+=t.slice(l,u),d.push(c);const S=$n(i,B.BLOCK_STRING,e,u+3,KC(d).join(`
`));return i.line+=d.length-1,i.lineStart=o,S}if(I===92&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34&&t.charCodeAt(u+3)===34){c+=t.slice(l,u),l=u+1,u+=4;continue}if(I===10||I===13){c+=t.slice(l,u),d.push(c),I===13&&t.charCodeAt(u+1)===10?u+=2:++u,c="",l=u,o=u;continue}if(Mi(I))++u;else if(Wo(t,u))u+=2;else throw Kn(i.source,u,`Invalid character within String: ${mi(i,u)}.`)}throw Kn(i.source,u,"Unterminated string.")}function lO(i,e){const t=i.source.body,a=t.length;let o=e+1;for(;o<a;){const u=t.charCodeAt(o);if(zc(u))++o;else break}return $n(i,B.NAME,e,o,t.slice(e,o))}const pO=10,nd=2;function M(i){return Ho(i,[])}function Ho(i,e){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return cO(i,e);default:return String(i)}}function cO(i,e){if(i===null)return"null";if(e.includes(i))return"[Circular]";const t=[...e,i];if(dO(i)){const a=i.toJSON();if(a!==i)return typeof a=="string"?a:Ho(a,t)}else if(Array.isArray(i))return gO(i,t);return mO(i,t)}function dO(i){return typeof i.toJSON=="function"}function mO(i,e){const t=Object.entries(i);return t.length===0?"{}":e.length>nd?"["+fO(i)+"]":"{ "+t.map(([o,u])=>o+": "+Ho(u,e)).join(", ")+" }"}function gO(i,e){if(i.length===0)return"[]";if(e.length>nd)return"[Array]";const t=Math.min(pO,i.length),a=i.length-t,o=[];for(let u=0;u<t;++u)o.push(Ho(i[u],e));return a===1?o.push("... 1 more item"):a>1&&o.push(`... ${a} more items`),"["+o.join(", ")+"]"}function fO(i){const e=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return e}const IO=globalThis.process&&!0,gt=IO?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if(typeof e=="object"&&e!==null){var a;const o=t.prototype[Symbol.toStringTag],u=Symbol.toStringTag in e?e[Symbol.toStringTag]:(a=e.constructor)===null||a===void 0?void 0:a.name;if(o===u){const l=M(e);throw new Error(`Cannot use ${o} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class ed{constructor(e,t="GraphQL request",a={line:1,column:1}){typeof e=="string"||dn(!1,`Body must be a string. Received: ${M(e)}.`),this.body=e,this.name=t,this.locationOffset=a,this.locationOffset.line>0||dn(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||dn(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function SO(i){return gt(i,ed)}function yO(i,e){return new td(i,e).parseDocument()}function hO(i,e){const t=new td(i,e);t.expectToken(B.SOF);const a=t.parseValueLiteral(!1);return t.expectToken(B.EOF),a}class td{constructor(e,t={}){const a=SO(e)?e:new ed(e);this._lexer=new ZC(a),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(B.NAME);return this.node(e,{kind:F.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:F.DOCUMENT,definitions:this.many(B.SOF,this.parseDefinition,B.EOF)})}parseDefinition(){if(this.peek(B.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===B.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw Kn(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(B.BRACE_L))return this.node(e,{kind:F.OPERATION_DEFINITION,operation:Me.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let a;return this.peek(B.NAME)&&(a=this.parseName()),this.node(e,{kind:F.OPERATION_DEFINITION,operation:t,name:a,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(B.NAME);switch(e.value){case"query":return Me.QUERY;case"mutation":return Me.MUTATION;case"subscription":return Me.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(B.PAREN_L,this.parseVariableDefinition,B.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:F.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(B.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(B.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(B.DOLLAR),this.node(e,{kind:F.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:F.SELECTION_SET,selections:this.many(B.BRACE_L,this.parseSelection,B.BRACE_R)})}parseSelection(){return this.peek(B.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let a,o;return this.expectOptionalToken(B.COLON)?(a=t,o=this.parseName()):o=t,this.node(e,{kind:F.FIELD,alias:a,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(B.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(B.PAREN_L,t,B.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,a=this.parseName();return this.expectToken(B.COLON),this.node(t,{kind:F.ARGUMENT,name:a,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(B.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(B.NAME)?this.node(e,{kind:F.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:F.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:F.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:F.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case B.BRACKET_L:return this.parseList(e);case B.BRACE_L:return this.parseObject(e);case B.INT:return this.advanceLexer(),this.node(t,{kind:F.INT,value:t.value});case B.FLOAT:return this.advanceLexer(),this.node(t,{kind:F.FLOAT,value:t.value});case B.STRING:case B.BLOCK_STRING:return this.parseStringLiteral();case B.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:F.BOOLEAN,value:!0});case"false":return this.node(t,{kind:F.BOOLEAN,value:!1});case"null":return this.node(t,{kind:F.NULL});default:return this.node(t,{kind:F.ENUM,value:t.value})}case B.DOLLAR:if(e)if(this.expectToken(B.DOLLAR),this._lexer.token.kind===B.NAME){const a=this._lexer.token.value;throw Kn(this._lexer.source,t.start,`Unexpected variable "$${a}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:F.STRING,value:e.value,block:e.kind===B.BLOCK_STRING})}parseList(e){const t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:F.LIST,values:this.any(B.BRACKET_L,t,B.BRACKET_R)})}parseObject(e){const t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:F.OBJECT,fields:this.any(B.BRACE_L,t,B.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,a=this.parseName();return this.expectToken(B.COLON),this.node(t,{kind:F.OBJECT_FIELD,name:a,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(B.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(B.AT),this.node(t,{kind:F.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(B.BRACKET_L)){const a=this.parseTypeReference();this.expectToken(B.BRACKET_R),t=this.node(e,{kind:F.LIST_TYPE,type:a})}else t=this.parseNamedType();return this.expectOptionalToken(B.BANG)?this.node(e,{kind:F.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:F.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(B.STRING)||this.peek(B.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const a=this.parseConstDirectives(),o=this.many(B.BRACE_L,this.parseOperationTypeDefinition,B.BRACE_R);return this.node(e,{kind:F.SCHEMA_DEFINITION,description:t,directives:a,operationTypes:o})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(B.COLON);const a=this.parseNamedType();return this.node(e,{kind:F.OPERATION_TYPE_DEFINITION,operation:t,type:a})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const a=this.parseName(),o=this.parseConstDirectives();return this.node(e,{kind:F.SCALAR_TYPE_DEFINITION,description:t,name:a,directives:o})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const a=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:F.OBJECT_TYPE_DEFINITION,description:t,name:a,interfaces:o,directives:u,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(B.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(B.BRACE_L,this.parseFieldDefinition,B.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),a=this.parseName(),o=this.parseArgumentDefs();this.expectToken(B.COLON);const u=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(e,{kind:F.FIELD_DEFINITION,description:t,name:a,arguments:o,type:u,directives:l})}parseArgumentDefs(){return this.optionalMany(B.PAREN_L,this.parseInputValueDef,B.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),a=this.parseName();this.expectToken(B.COLON);const o=this.parseTypeReference();let u;this.expectOptionalToken(B.EQUALS)&&(u=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(e,{kind:F.INPUT_VALUE_DEFINITION,description:t,name:a,type:o,defaultValue:u,directives:l})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const a=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:F.INTERFACE_TYPE_DEFINITION,description:t,name:a,interfaces:o,directives:u,fields:l})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const a=this.parseName(),o=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(e,{kind:F.UNION_TYPE_DEFINITION,description:t,name:a,directives:o,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(B.EQUALS)?this.delimitedMany(B.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const a=this.parseName(),o=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(e,{kind:F.ENUM_TYPE_DEFINITION,description:t,name:a,directives:o,values:u})}parseEnumValuesDefinition(){return this.optionalMany(B.BRACE_L,this.parseEnumValueDefinition,B.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),a=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(e,{kind:F.ENUM_VALUE_DEFINITION,description:t,name:a,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Kn(this._lexer.source,this._lexer.token.start,`${bo(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const a=this.parseName(),o=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(e,{kind:F.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:a,directives:o,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(B.BRACE_L,this.parseInputValueDef,B.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===B.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),a=this.optionalMany(B.BRACE_L,this.parseOperationTypeDefinition,B.BRACE_R);if(t.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:F.SCHEMA_EXTENSION,directives:t,operationTypes:a})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),a=this.parseConstDirectives();if(a.length===0)throw this.unexpected();return this.node(e,{kind:F.SCALAR_TYPE_EXTENSION,name:t,directives:a})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),a=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(a.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(e,{kind:F.OBJECT_TYPE_EXTENSION,name:t,interfaces:a,directives:o,fields:u})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),a=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(a.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(e,{kind:F.INTERFACE_TYPE_EXTENSION,name:t,interfaces:a,directives:o,fields:u})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),a=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(a.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:F.UNION_TYPE_EXTENSION,name:t,directives:a,types:o})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),a=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(a.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:F.ENUM_TYPE_EXTENSION,name:t,directives:a,values:o})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),a=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(a.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:F.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:a,fields:o})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(B.AT);const a=this.parseName(),o=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(e,{kind:F.DIRECTIVE_DEFINITION,description:t,name:a,arguments:o,repeatable:u,locations:l})}parseDirectiveLocations(){return this.delimitedMany(B.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(W,t.value))return t;throw this.unexpected(e)}node(e,t){return this._options.noLocation!==!0&&(t.loc=new QC(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw Kn(this._lexer.source,t.start,`Expected ${id(e)}, found ${bo(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const t=this._lexer.token;if(t.kind===B.NAME&&t.value===e)this.advanceLexer();else throw Kn(this._lexer.source,t.start,`Expected "${e}", found ${bo(t)}.`)}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===B.NAME&&t.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const t=e??this._lexer.token;return Kn(this._lexer.source,t.start,`Unexpected ${bo(t)}.`)}any(e,t,a){this.expectToken(e);const o=[];for(;!this.expectOptionalToken(a);)o.push(t.call(this));return o}optionalMany(e,t,a){if(this.expectOptionalToken(e)){const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(a));return o}return[]}many(e,t,a){this.expectToken(e);const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(a));return o}delimitedMany(e,t){this.expectOptionalToken(e);const a=[];do a.push(t.call(this));while(this.expectOptionalToken(e));return a}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(e!==void 0&&t.kind!==B.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw Kn(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function bo(i){const e=i.value;return id(i.kind)+(e!=null?` "${e}"`:"")}function id(i){return nO(i)?`"${i}"`:i}const TO=5;function Kt(i,e){const[t,a]=e?[i,e]:[void 0,i];let o=" Did you mean ";t&&(o+=t+" ");const u=a.map(d=>`"${d}"`);switch(u.length){case 0:return"";case 1:return o+u[0]+"?";case 2:return o+u[0]+" or "+u[1]+"?"}const l=u.slice(0,TO),c=l.pop();return o+l.join(", ")+", or "+c+"?"}function dc(i){return i}function gi(i,e){const t=Object.create(null);for(const a of i)t[e(a)]=a;return t}function pi(i,e,t){const a=Object.create(null);for(const o of i)a[e(o)]=t(o);return a}function Dt(i,e){const t=Object.create(null);for(const a of Object.keys(i))t[a]=e(i[a],a);return t}function zu(i,e){let t=0,a=0;for(;t<i.length&&a<e.length;){let o=i.charCodeAt(t),u=e.charCodeAt(a);if(Do(o)&&Do(u)){let l=0;do++t,l=l*10+o-_u,o=i.charCodeAt(t);while(Do(o)&&l>0);let c=0;do++a,c=c*10+u-_u,u=e.charCodeAt(a);while(Do(u)&&c>0);if(l<c)return-1;if(l>c)return 1}else{if(o<u)return-1;if(o>u)return 1;++t,++a}}return i.length-e.length}const _u=48,FO=57;function Do(i){return!isNaN(i)&&_u<=i&&i<=FO}function yi(i,e){const t=Object.create(null),a=new CO(i),o=Math.floor(i.length*.4)+1;for(const u of e){const l=a.measure(u,o);l!==void 0&&(t[u]=l)}return Object.keys(t).sort((u,l)=>{const c=t[u]-t[l];return c!==0?c:zu(u,l)})}class CO{constructor(e){this._input=e,this._inputLowerCase=e.toLowerCase(),this._inputArray=mc(this._inputLowerCase),this._rows=[new Array(e.length+1).fill(0),new Array(e.length+1).fill(0),new Array(e.length+1).fill(0)]}measure(e,t){if(this._input===e)return 0;const a=e.toLowerCase();if(this._inputLowerCase===a)return 1;let o=mc(a),u=this._inputArray;if(o.length<u.length){const S=o;o=u,u=S}const l=o.length,c=u.length;if(l-c>t)return;const d=this._rows;for(let S=0;S<=c;S++)d[0][S]=S;for(let S=1;S<=l;S++){const h=d[(S-1)%3],w=d[S%3];let b=w[0]=S;for(let v=1;v<=c;v++){const L=o[S-1]===u[v-1]?0:1;let j=Math.min(h[v]+1,w[v-1]+1,h[v-1]+L);if(S>1&&v>1&&o[S-1]===u[v-2]&&o[S-2]===u[v-1]){const cn=d[(S-2)%3][v-2];j=Math.min(j,cn+1)}j<b&&(b=j),w[v]=j}if(b>t)return}const I=d[l%3][c];return I<=t?I:void 0}}function mc(i){const e=i.length,t=new Array(e);for(let a=0;a<e;++a)t[a]=i.charCodeAt(a);return t}function Je(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const e=Object.create(null);for(const[t,a]of Object.entries(i))e[t]=a;return e}function OO(i){return`"${i.replace(EO,bO)}"`}const EO=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function bO(i){return DO[i.charCodeAt(0)]}const DO=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],mr=Object.freeze({});function rd(i,e,t=Yc){const a=new Map;for(const cn of Object.values(F))a.set(cn,od(e,cn));let o,u=Array.isArray(i),l=[i],c=-1,d=[],I=i,S,h;const w=[],b=[];do{c++;const cn=c===l.length,An=cn&&d.length!==0;if(cn){if(S=b.length===0?void 0:w[w.length-1],I=h,h=b.pop(),An)if(u){I=I.slice();let _n=0;for(const[xn,ae]of d){const ee=xn-_n;ae===null?(I.splice(ee,1),_n++):I[ee]=ae}}else{I=Object.defineProperties({},Object.getOwnPropertyDescriptors(I));for(const[_n,xn]of d)I[_n]=xn}c=o.index,l=o.keys,d=o.edits,u=o.inArray,o=o.prev}else if(h){if(S=u?c:l[c],I=h[S],I==null)continue;w.push(S)}let Sn;if(!Array.isArray(I)){var v,L;pc(I)||dn(!1,`Invalid AST Node: ${M(I)}.`);const _n=cn?(v=a.get(I.kind))===null||v===void 0?void 0:v.leave:(L=a.get(I.kind))===null||L===void 0?void 0:L.enter;if(Sn=_n==null?void 0:_n.call(e,I,S,h,w,b),Sn===mr)break;if(Sn===!1){if(!cn){w.pop();continue}}else if(Sn!==void 0&&(d.push([S,Sn]),!cn))if(pc(Sn))I=Sn;else{w.pop();continue}}if(Sn===void 0&&An&&d.push([S,I]),cn)w.pop();else{var j;o={inArray:u,index:c,keys:l,edits:d,prev:o},u=Array.isArray(I),l=u?I:(j=t[I.kind])!==null&&j!==void 0?j:[],c=-1,d=[],h&&b.push(h),h=I}}while(o!==void 0);return d.length!==0?d[d.length-1][1]:i}function AO(i){const e=new Array(i.length).fill(null),t=Object.create(null);for(const a of Object.values(F)){let o=!1;const u=new Array(i.length).fill(void 0),l=new Array(i.length).fill(void 0);for(let d=0;d<i.length;++d){const{enter:I,leave:S}=od(i[d],a);o||(o=I!=null||S!=null),u[d]=I,l[d]=S}if(!o)continue;const c={enter(...d){const I=d[0];for(let h=0;h<i.length;h++)if(e[h]===null){var S;const w=(S=u[h])===null||S===void 0?void 0:S.apply(i[h],d);if(w===!1)e[h]=I;else if(w===mr)e[h]=mr;else if(w!==void 0)return w}},leave(...d){const I=d[0];for(let h=0;h<i.length;h++)if(e[h]===null){var S;const w=(S=l[h])===null||S===void 0?void 0:S.apply(i[h],d);if(w===mr)e[h]=mr;else if(w!==void 0&&w!==!1)return w}else e[h]===I&&(e[h]=null)}};t[a]=c}return t}function od(i,e){const t=i[e];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function zn(i){return rd(i,NO)}const vO=80,NO={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>V(i.definitions,`

`)},OperationDefinition:{leave(i){const e=ln("(",V(i.variableDefinitions,", "),")"),t=V([i.operation,V([i.name,e]),V(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:e,defaultValue:t,directives:a})=>i+": "+e+ln(" = ",t)+ln(" ",V(a," "))},SelectionSet:{leave:({selections:i})=>Ye(i)},Field:{leave({alias:i,name:e,arguments:t,directives:a,selectionSet:o}){const u=ln("",i,": ")+e;let l=u+ln("(",V(t,", "),")");return l.length>vO&&(l=u+ln(`(
`,No(V(t,`
`)),`
)`)),V([l,V(a," "),o]," ")}},Argument:{leave:({name:i,value:e})=>i+": "+e},FragmentSpread:{leave:({name:i,directives:e})=>"..."+i+ln(" ",V(e," "))},InlineFragment:{leave:({typeCondition:i,directives:e,selectionSet:t})=>V(["...",ln("on ",i),V(e," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:e,variableDefinitions:t,directives:a,selectionSet:o})=>`fragment ${i}${ln("(",V(t,", "),")")} on ${e} ${ln("",V(a," ")," ")}`+o},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:e})=>e?XC(i):OO(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+V(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+V(i,", ")+"}"},ObjectField:{leave:({name:i,value:e})=>i+": "+e},Directive:{leave:({name:i,arguments:e})=>"@"+i+ln("(",V(e,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:e,operationTypes:t})=>ln("",i,`
`)+V(["schema",V(e," "),Ye(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:e})=>i+": "+e},ScalarTypeDefinition:{leave:({description:i,name:e,directives:t})=>ln("",i,`
`)+V(["scalar",e,V(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:e,interfaces:t,directives:a,fields:o})=>ln("",i,`
`)+V(["type",e,ln("implements ",V(t," & ")),V(a," "),Ye(o)]," ")},FieldDefinition:{leave:({description:i,name:e,arguments:t,type:a,directives:o})=>ln("",i,`
`)+e+(gc(t)?ln(`(
`,No(V(t,`
`)),`
)`):ln("(",V(t,", "),")"))+": "+a+ln(" ",V(o," "))},InputValueDefinition:{leave:({description:i,name:e,type:t,defaultValue:a,directives:o})=>ln("",i,`
`)+V([e+": "+t,ln("= ",a),V(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:e,interfaces:t,directives:a,fields:o})=>ln("",i,`
`)+V(["interface",e,ln("implements ",V(t," & ")),V(a," "),Ye(o)]," ")},UnionTypeDefinition:{leave:({description:i,name:e,directives:t,types:a})=>ln("",i,`
`)+V(["union",e,V(t," "),ln("= ",V(a," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:e,directives:t,values:a})=>ln("",i,`
`)+V(["enum",e,V(t," "),Ye(a)]," ")},EnumValueDefinition:{leave:({description:i,name:e,directives:t})=>ln("",i,`
`)+V([e,V(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:e,directives:t,fields:a})=>ln("",i,`
`)+V(["input",e,V(t," "),Ye(a)]," ")},DirectiveDefinition:{leave:({description:i,name:e,arguments:t,repeatable:a,locations:o})=>ln("",i,`
`)+"directive @"+e+(gc(t)?ln(`(
`,No(V(t,`
`)),`
)`):ln("(",V(t,", "),")"))+(a?" repeatable":"")+" on "+V(o," | ")},SchemaExtension:{leave:({directives:i,operationTypes:e})=>V(["extend schema",V(i," "),Ye(e)]," ")},ScalarTypeExtension:{leave:({name:i,directives:e})=>V(["extend scalar",i,V(e," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:e,directives:t,fields:a})=>V(["extend type",i,ln("implements ",V(e," & ")),V(t," "),Ye(a)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:e,directives:t,fields:a})=>V(["extend interface",i,ln("implements ",V(e," & ")),V(t," "),Ye(a)]," ")},UnionTypeExtension:{leave:({name:i,directives:e,types:t})=>V(["extend union",i,V(e," "),ln("= ",V(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:e,values:t})=>V(["extend enum",i,V(e," "),Ye(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:e,fields:t})=>V(["extend input",i,V(e," "),Ye(t)]," ")}};function V(i,e=""){var t;return(t=i==null?void 0:i.filter(a=>a).join(e))!==null&&t!==void 0?t:""}function Ye(i){return ln(`{
`,No(V(i,`
`)),`
}`)}function ln(i,e,t=""){return e!=null&&e!==""?i+e+t:""}function No(i){return ln("  ",i.replace(/\n/g,`
  `))}function gc(i){var e;return(e=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&e!==void 0?e:!1}function Bu(i,e){switch(i.kind){case F.NULL:return null;case F.INT:return parseInt(i.value,10);case F.FLOAT:return parseFloat(i.value);case F.STRING:case F.ENUM:case F.BOOLEAN:return i.value;case F.LIST:return i.values.map(t=>Bu(t,e));case F.OBJECT:return pi(i.fields,t=>t.name.value,t=>Bu(t.value,e));case F.VARIABLE:return e==null?void 0:e[i.name.value]}}function ot(i){if(i!=null||dn(!1,"Must provide name."),typeof i=="string"||dn(!1,"Expected name to be a string."),i.length===0)throw new x("Expected name to be a non-empty string.");for(let e=1;e<i.length;++e)if(!zc(i.charCodeAt(e)))throw new x(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Ku(i.charCodeAt(0)))throw new x(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function wO(i){if(i==="true"||i==="false"||i==="null")throw new x(`Enum values cannot be named: ${i}`);return ot(i)}function Xu(i){return zt(i)||Wn(i)||Vn(i)||qe(i)||nt(i)||ye(i)||he(i)||Dn(i)}function zt(i){return gt(i,Bt)}function Wn(i){return gt(i,dt)}function _O(i){if(!Wn(i))throw new Error(`Expected ${M(i)} to be a GraphQL Object type.`);return i}function Vn(i){return gt(i,xo)}function BO(i){if(!Vn(i))throw new Error(`Expected ${M(i)} to be a GraphQL Interface type.`);return i}function qe(i){return gt(i,Lo)}function nt(i){return gt(i,ki)}function ye(i){return gt(i,Po)}function he(i){return gt(i,ce)}function Dn(i){return gt(i,on)}function Zu(i){return zt(i)||nt(i)||ye(i)||ns(i)&&Zu(i.ofType)}function ad(i){return zt(i)||Wn(i)||Vn(i)||qe(i)||nt(i)||ns(i)&&ad(i.ofType)}function Pi(i){return zt(i)||nt(i)}function Or(i){return Wn(i)||Vn(i)||qe(i)}function ci(i){return Vn(i)||qe(i)}class ce{constructor(e){Xu(e)||dn(!1,`Expected ${M(e)} to be a GraphQL type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class on{constructor(e){ud(e)||dn(!1,`Expected ${M(e)} to be a GraphQL nullable type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function ns(i){return he(i)||Dn(i)}function ud(i){return Xu(i)&&!Dn(i)}function UO(i){if(!ud(i))throw new Error(`Expected ${M(i)} to be a GraphQL nullable type.`);return i}function RO(i){if(i)return Dn(i)?i.ofType:i}function Pb(i){return zt(i)||Wn(i)||Vn(i)||qe(i)||nt(i)||ye(i)}function fi(i){if(i){let e=i;for(;ns(e);)e=e.ofType;return e}}function sd(i){return typeof i=="function"?i():i}function ld(i){return typeof i=="function"?i():i}class Bt{constructor(e){var t,a,o,u;const l=(t=e.parseValue)!==null&&t!==void 0?t:dc;this.name=ot(e.name),this.description=e.description,this.specifiedByURL=e.specifiedByURL,this.serialize=(a=e.serialize)!==null&&a!==void 0?a:dc,this.parseValue=l,this.parseLiteral=(o=e.parseLiteral)!==null&&o!==void 0?o:(c,d)=>l(Bu(c,d)),this.extensions=Je(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(u=e.extensionASTNodes)!==null&&u!==void 0?u:[],e.specifiedByURL==null||typeof e.specifiedByURL=="string"||dn(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${M(e.specifiedByURL)}.`),e.serialize==null||typeof e.serialize=="function"||dn(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),e.parseLiteral&&(typeof e.parseValue=="function"&&typeof e.parseLiteral=="function"||dn(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class dt{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.isTypeOf=e.isTypeOf,this.extensions=Je(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>cd(e),this._interfaces=()=>pd(e),e.isTypeOf==null||typeof e.isTypeOf=="function"||dn(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${M(e.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:md(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function pd(i){var e;const t=sd((e=i.interfaces)!==null&&e!==void 0?e:[]);return Array.isArray(t)||dn(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function cd(i){const e=ld(i.fields);return Li(e)||dn(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),Dt(e,(t,a)=>{var o;Li(t)||dn(!1,`${i.name}.${a} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||dn(!1,`${i.name}.${a} field resolver must be a function if provided, but got: ${M(t.resolve)}.`);const u=(o=t.args)!==null&&o!==void 0?o:{};return Li(u)||dn(!1,`${i.name}.${a} args must be an object with argument names as keys.`),{name:ot(a),description:t.description,type:t.type,args:dd(u),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Je(t.extensions),astNode:t.astNode}})}function dd(i){return Object.entries(i).map(([e,t])=>({name:ot(e),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Je(t.extensions),astNode:t.astNode}))}function Li(i){return _t(i)&&!Array.isArray(i)}function md(i){return Dt(i,e=>({description:e.description,type:e.type,args:gd(e.args),resolve:e.resolve,subscribe:e.subscribe,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function gd(i){return pi(i,e=>e.name,e=>({description:e.description,type:e.type,defaultValue:e.defaultValue,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function fd(i){return Dn(i.type)&&i.defaultValue===void 0}class xo{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Je(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=cd.bind(void 0,e),this._interfaces=pd.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||dn(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:md(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Lo{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Je(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=xO.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||dn(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function xO(i){const e=sd(i.types);return Array.isArray(e)||dn(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),e}class ki{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.extensions=Je(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof e.values=="function"?e.values:fc(this.name,e.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=fc(this.name,this._values())),this._values}getValue(e){return this._nameLookup===null&&(this._nameLookup=gi(this.getValues(),t=>t.name)),this._nameLookup[e]}serialize(e){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(a=>[a.value,a])));const t=this._valueLookup.get(e);if(t===void 0)throw new x(`Enum "${this.name}" cannot represent value: ${M(e)}`);return t.name}parseValue(e){if(typeof e!="string"){const a=M(e);throw new x(`Enum "${this.name}" cannot represent non-string value: ${a}.`+Ao(this,a))}const t=this.getValue(e);if(t==null)throw new x(`Value "${e}" does not exist in "${this.name}" enum.`+Ao(this,e));return t.value}parseLiteral(e,t){if(e.kind!==F.ENUM){const o=zn(e);throw new x(`Enum "${this.name}" cannot represent non-enum value: ${o}.`+Ao(this,o),{nodes:e})}const a=this.getValue(e.value);if(a==null){const o=zn(e);throw new x(`Value "${o}" does not exist in "${this.name}" enum.`+Ao(this,o),{nodes:e})}return a.value}toConfig(){const e=pi(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Ao(i,e){const t=i.getValues().map(o=>o.name),a=yi(e,t);return Kt("the enum value",a)}function fc(i,e){return Li(e)||dn(!1,`${i} values must be an object with value names as keys.`),Object.entries(e).map(([t,a])=>(Li(a)||dn(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${M(a)}.`),{name:wO(t),description:a.description,value:a.value!==void 0?a.value:t,deprecationReason:a.deprecationReason,extensions:Je(a.extensions),astNode:a.astNode}))}class Po{constructor(e){var t,a;this.name=ot(e.name),this.description=e.description,this.extensions=Je(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(a=e.isOneOf)!==null&&a!==void 0?a:!1,this._fields=LO.bind(void 0,e)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const e=Dt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function LO(i){const e=ld(i.fields);return Li(e)||dn(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),Dt(e,(t,a)=>(!("resolve"in t)||dn(!1,`${i.name}.${a} field has a resolve property, but Input Types cannot define resolvers.`),{name:ot(a),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Je(t.extensions),astNode:t.astNode}))}function PO(i){return Dn(i.type)&&i.defaultValue===void 0}function yr(i,e,t){return e===t?!0:Dn(t)?Dn(e)?yr(i,e.ofType,t.ofType):!1:Dn(e)?yr(i,e.ofType,t):he(t)?he(e)?yr(i,e.ofType,t.ofType):!1:he(e)?!1:ci(t)&&(Vn(e)||Wn(e))&&i.isSubType(t,e)}function Ic(i,e,t){return e===t?!0:ci(e)?ci(t)?i.getPossibleTypes(e).some(a=>i.isSubType(t,a)):i.isSubType(e,t):ci(t)?i.isSubType(t,e):!1}const Cu=2147483647,Ou=-2147483648,kO=new Bt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const e=vr(i);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isInteger(t))throw new x(`Int cannot represent non-integer value: ${M(e)}`);if(t>Cu||t<Ou)throw new x("Int cannot represent non 32-bit signed integer value: "+M(e));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new x(`Int cannot represent non-integer value: ${M(i)}`);if(i>Cu||i<Ou)throw new x(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==F.INT)throw new x(`Int cannot represent non-integer value: ${zn(i)}`,{nodes:i});const e=parseInt(i.value,10);if(e>Cu||e<Ou)throw new x(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return e}}),MO=new Bt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const e=vr(i);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isFinite(t))throw new x(`Float cannot represent non numeric value: ${M(e)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new x(`Float cannot represent non numeric value: ${M(i)}`);return i},parseLiteral(i){if(i.kind!==F.FLOAT&&i.kind!==F.INT)throw new x(`Float cannot represent non numeric value: ${zn(i)}`,i);return parseFloat(i.value)}}),Gn=new Bt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const e=vr(i);if(typeof e=="string")return e;if(typeof e=="boolean")return e?"true":"false";if(typeof e=="number"&&Number.isFinite(e))return e.toString();throw new x(`String cannot represent value: ${M(i)}`)},parseValue(i){if(typeof i!="string")throw new x(`String cannot represent a non string value: ${M(i)}`);return i},parseLiteral(i){if(i.kind!==F.STRING)throw new x(`String cannot represent a non string value: ${zn(i)}`,{nodes:i});return i.value}}),ve=new Bt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const e=vr(i);if(typeof e=="boolean")return e;if(Number.isFinite(e))return e!==0;throw new x(`Boolean cannot represent a non boolean value: ${M(e)}`)},parseValue(i){if(typeof i!="boolean")throw new x(`Boolean cannot represent a non boolean value: ${M(i)}`);return i},parseLiteral(i){if(i.kind!==F.BOOLEAN)throw new x(`Boolean cannot represent a non boolean value: ${zn(i)}`,{nodes:i});return i.value}}),Id=new Bt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const e=vr(i);if(typeof e=="string")return e;if(Number.isInteger(e))return String(e);throw new x(`ID cannot represent value: ${M(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new x(`ID cannot represent value: ${M(i)}`)},parseLiteral(i){if(i.kind!==F.STRING&&i.kind!==F.INT)throw new x("ID cannot represent a non-string and non-integer value: "+zn(i),{nodes:i});return i.value}}),Qo=Object.freeze([Gn,kO,MO,ve,Id]);function qO(i){return Qo.some(({name:e})=>i.name===e)}function vr(i){if(_t(i)){if(typeof i.valueOf=="function"){const e=i.valueOf();if(!_t(e))return e}if(typeof i.toJSON=="function")return i.toJSON()}return i}function JO(i){return gt(i,Ut)}class Ut{constructor(e){var t,a;this.name=ot(e.name),this.description=e.description,this.locations=e.locations,this.isRepeatable=(t=e.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Je(e.extensions),this.astNode=e.astNode,Array.isArray(e.locations)||dn(!1,`@${e.name} locations must be an Array.`);const o=(a=e.args)!==null&&a!==void 0?a:{};_t(o)&&!Array.isArray(o)||dn(!1,`@${e.name} args must be an object with argument names as keys.`),this.args=dd(o)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:gd(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const Sd=new Ut({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new on(ve),description:"Included when true."}}}),yd=new Ut({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new on(ve),description:"Skipped when true."}}}),GO="No longer supported",hd=new Ut({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[W.FIELD_DEFINITION,W.ARGUMENT_DEFINITION,W.INPUT_FIELD_DEFINITION,W.ENUM_VALUE],args:{reason:{type:Gn,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:GO}}}),Td=new Ut({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[W.SCALAR],args:{url:{type:new on(Gn),description:"The URL that specifies the behavior of this scalar."}}}),Fd=new Ut({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[W.INPUT_OBJECT],args:{}}),qi=Object.freeze([Sd,yd,hd,Td,Fd]);function VO(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function gr(i,e){if(Dn(e)){const t=gr(i,e.ofType);return(t==null?void 0:t.kind)===F.NULL?null:t}if(i===null)return{kind:F.NULL};if(i===void 0)return null;if(he(e)){const t=e.ofType;if(VO(i)){const a=[];for(const o of i){const u=gr(o,t);u!=null&&a.push(u)}return{kind:F.LIST,values:a}}return gr(i,t)}if(ye(e)){if(!_t(i))return null;const t=[];for(const a of Object.values(e.getFields())){const o=gr(i[a.name],a.type);o&&t.push({kind:F.OBJECT_FIELD,name:{kind:F.NAME,value:a.name},value:o})}return{kind:F.OBJECT,fields:t}}if(Pi(e)){const t=e.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:F.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const a=String(t);return Sc.test(a)?{kind:F.INT,value:a}:{kind:F.FLOAT,value:a}}if(typeof t=="string")return nt(e)?{kind:F.ENUM,value:t}:e===Id&&Sc.test(t)?{kind:F.INT,value:t}:{kind:F.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${M(t)}.`)}Ze(!1,"Unexpected input type: "+M(e))}const Sc=/^-?(?:0|[1-9][0-9]*)$/,es=new dt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Gn,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new on(new ce(new on(Xe))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new on(Xe),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Xe,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Xe,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new on(new ce(new on(Cd))),resolve:i=>i.getDirectives()}})}),Cd=new dt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new on(Gn),resolve:i=>i.name},description:{type:Gn,resolve:i=>i.description},isRepeatable:{type:new on(ve),resolve:i=>i.isRepeatable},locations:{type:new on(new ce(new on(Od))),resolve:i=>i.locations},args:{type:new on(new ce(new on(Yo))),args:{includeDeprecated:{type:ve,defaultValue:!1}},resolve(i,{includeDeprecated:e}){return e?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),Od=new ki({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:W.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:W.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:W.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:W.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:W.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:W.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:W.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:W.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:W.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:W.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:W.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:W.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:W.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:W.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:W.UNION,description:"Location adjacent to a union definition."},ENUM:{value:W.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:W.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:W.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:W.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Xe=new dt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new on(Dd),resolve(i){if(zt(i))return En.SCALAR;if(Wn(i))return En.OBJECT;if(Vn(i))return En.INTERFACE;if(qe(i))return En.UNION;if(nt(i))return En.ENUM;if(ye(i))return En.INPUT_OBJECT;if(he(i))return En.LIST;if(Dn(i))return En.NON_NULL;Ze(!1,`Unexpected type: "${M(i)}".`)}},name:{type:Gn,resolve:i=>"name"in i?i.name:void 0},description:{type:Gn,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Gn,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new ce(new on(Ed)),args:{includeDeprecated:{type:ve,defaultValue:!1}},resolve(i,{includeDeprecated:e}){if(Wn(i)||Vn(i)){const t=Object.values(i.getFields());return e?t:t.filter(a=>a.deprecationReason==null)}}},interfaces:{type:new ce(new on(Xe)),resolve(i){if(Wn(i)||Vn(i))return i.getInterfaces()}},possibleTypes:{type:new ce(new on(Xe)),resolve(i,e,t,{schema:a}){if(ci(i))return a.getPossibleTypes(i)}},enumValues:{type:new ce(new on(bd)),args:{includeDeprecated:{type:ve,defaultValue:!1}},resolve(i,{includeDeprecated:e}){if(nt(i)){const t=i.getValues();return e?t:t.filter(a=>a.deprecationReason==null)}}},inputFields:{type:new ce(new on(Yo)),args:{includeDeprecated:{type:ve,defaultValue:!1}},resolve(i,{includeDeprecated:e}){if(ye(i)){const t=Object.values(i.getFields());return e?t:t.filter(a=>a.deprecationReason==null)}}},ofType:{type:Xe,resolve:i=>"ofType"in i?i.ofType:void 0},isOneOf:{type:ve,resolve:i=>{if(ye(i))return i.isOneOf}}})}),Ed=new dt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new on(Gn),resolve:i=>i.name},description:{type:Gn,resolve:i=>i.description},args:{type:new on(new ce(new on(Yo))),args:{includeDeprecated:{type:ve,defaultValue:!1}},resolve(i,{includeDeprecated:e}){return e?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new on(Xe),resolve:i=>i.type},isDeprecated:{type:new on(ve),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Gn,resolve:i=>i.deprecationReason}})}),Yo=new dt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new on(Gn),resolve:i=>i.name},description:{type:Gn,resolve:i=>i.description},type:{type:new on(Xe),resolve:i=>i.type},defaultValue:{type:Gn,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:e,defaultValue:t}=i,a=gr(t,e);return a?zn(a):null}},isDeprecated:{type:new on(ve),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Gn,resolve:i=>i.deprecationReason}})}),bd=new dt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new on(Gn),resolve:i=>i.name},description:{type:Gn,resolve:i=>i.description},isDeprecated:{type:new on(ve),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Gn,resolve:i=>i.deprecationReason}})});var En;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(En||(En={}));const Dd=new ki({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:En.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:En.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:En.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:En.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:En.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:En.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:En.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:En.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new on(es);new on(Gn);new on(Gn);const Ko=Object.freeze([es,Cd,Od,Xe,Ed,Yo,bd,Dd]);function $O(i){return Ko.some(({name:e})=>i.name===e)}class Ad{constructor(e){var t,a;this.__validationErrors=e.assumeValid===!0?[]:void 0,_t(e)||dn(!1,"Must provide configuration object."),!e.types||Array.isArray(e.types)||dn(!1,`"types" must be Array if provided but got: ${M(e.types)}.`),!e.directives||Array.isArray(e.directives)||dn(!1,`"directives" must be Array if provided but got: ${M(e.directives)}.`),this.description=e.description,this.extensions=Je(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=e.query,this._mutationType=e.mutation,this._subscriptionType=e.subscription,this._directives=(a=e.directives)!==null&&a!==void 0?a:qi;const o=new Set(e.types);if(e.types!=null)for(const u of e.types)o.delete(u),Ke(u,o);this._queryType!=null&&Ke(this._queryType,o),this._mutationType!=null&&Ke(this._mutationType,o),this._subscriptionType!=null&&Ke(this._subscriptionType,o);for(const u of this._directives)if(JO(u))for(const l of u.args)Ke(l.type,o);Ke(es,o),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of o){if(u==null)continue;const l=u.name;if(l||dn(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=u,Vn(u)){for(const c of u.getInterfaces())if(Vn(c)){let d=this._implementationsMap[c.name];d===void 0&&(d=this._implementationsMap[c.name]={objects:[],interfaces:[]}),d.interfaces.push(u)}}else if(Wn(u)){for(const c of u.getInterfaces())if(Vn(c)){let d=this._implementationsMap[c.name];d===void 0&&(d=this._implementationsMap[c.name]={objects:[],interfaces:[]}),d.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(e){switch(e){case Me.QUERY:return this.getQueryType();case Me.MUTATION:return this.getMutationType();case Me.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(e){return this.getTypeMap()[e]}getPossibleTypes(e){return qe(e)?e.getTypes():this.getImplementations(e).objects}getImplementations(e){const t=this._implementationsMap[e.name];return t??{objects:[],interfaces:[]}}isSubType(e,t){let a=this._subTypeMap[e.name];if(a===void 0){if(a=Object.create(null),qe(e))for(const o of e.getTypes())a[o.name]=!0;else{const o=this.getImplementations(e);for(const u of o.objects)a[u.name]=!0;for(const u of o.interfaces)a[u.name]=!0}this._subTypeMap[e.name]=a}return a[t.name]!==void 0}getDirectives(){return this._directives}getDirective(e){return this.getDirectives().find(t=>t.name===e)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Ke(i,e){const t=fi(i);if(!e.has(t)){if(e.add(t),qe(t))for(const a of t.getTypes())Ke(a,e);else if(Wn(t)||Vn(t)){for(const a of t.getInterfaces())Ke(a,e);for(const a of Object.values(t.getFields())){Ke(a.type,e);for(const o of a.args)Ke(o.type,e)}}else if(ye(t))for(const a of Object.values(t.getFields()))Ke(a.type,e)}return e}function mt(i,e){switch(e.kind){case F.LIST_TYPE:{const t=mt(i,e.type);return t&&new ce(t)}case F.NON_NULL_TYPE:{const t=mt(i,e.type);return t&&new on(t)}case F.NAMED_TYPE:return i.getType(e.name.value)}}function jO(i){return i.kind===F.OPERATION_DEFINITION||i.kind===F.FRAGMENT_DEFINITION}function WO(i){return i.kind===F.SCHEMA_DEFINITION||Nr(i)||i.kind===F.DIRECTIVE_DEFINITION}function Nr(i){return i.kind===F.SCALAR_TYPE_DEFINITION||i.kind===F.OBJECT_TYPE_DEFINITION||i.kind===F.INTERFACE_TYPE_DEFINITION||i.kind===F.UNION_TYPE_DEFINITION||i.kind===F.ENUM_TYPE_DEFINITION||i.kind===F.INPUT_OBJECT_TYPE_DEFINITION}function HO(i){return i.kind===F.SCHEMA_EXTENSION||ts(i)}function ts(i){return i.kind===F.SCALAR_TYPE_EXTENSION||i.kind===F.OBJECT_TYPE_EXTENSION||i.kind===F.INTERFACE_TYPE_EXTENSION||i.kind===F.UNION_TYPE_EXTENSION||i.kind===F.ENUM_TYPE_EXTENSION||i.kind===F.INPUT_OBJECT_TYPE_EXTENSION}function QO(i){return{Document(e){for(const t of e.definitions)if(!jO(t)){const a=t.kind===F.SCHEMA_DEFINITION||t.kind===F.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';i.reportError(new x(`The ${a} definition is not executable.`,{nodes:t}))}return!1}}}function YO(i){return{Field(e){const t=i.getParentType();if(t&&!i.getFieldDef()){const o=i.getSchema(),u=e.name.value;let l=Kt("to use an inline fragment on",KO(o,t,u));l===""&&(l=Kt(zO(t,u))),i.reportError(new x(`Cannot query field "${u}" on type "${t.name}".`+l,{nodes:e}))}}}}function KO(i,e,t){if(!ci(e))return[];const a=new Set,o=Object.create(null);for(const l of i.getPossibleTypes(e))if(l.getFields()[t]){a.add(l),o[l.name]=1;for(const c of l.getInterfaces()){var u;c.getFields()[t]&&(a.add(c),o[c.name]=((u=o[c.name])!==null&&u!==void 0?u:0)+1)}}return[...a].sort((l,c)=>{const d=o[c.name]-o[l.name];return d!==0?d:Vn(l)&&i.isSubType(l,c)?-1:Vn(c)&&i.isSubType(c,l)?1:zu(l.name,c.name)}).map(l=>l.name)}function zO(i,e){if(Wn(i)||Vn(i)){const t=Object.keys(i.getFields());return yi(e,t)}return[]}function XO(i){return{InlineFragment(e){const t=e.typeCondition;if(t){const a=mt(i.getSchema(),t);if(a&&!Or(a)){const o=zn(t);i.reportError(new x(`Fragment cannot condition on non composite type "${o}".`,{nodes:t}))}}},FragmentDefinition(e){const t=mt(i.getSchema(),e.typeCondition);if(t&&!Or(t)){const a=zn(e.typeCondition);i.reportError(new x(`Fragment "${e.name.value}" cannot condition on non composite type "${a}".`,{nodes:e.typeCondition}))}}}}function ZO(i){return{...vd(i),Argument(e){const t=i.getArgument(),a=i.getFieldDef(),o=i.getParentType();if(!t&&a&&o){const u=e.name.value,l=a.args.map(d=>d.name),c=yi(u,l);i.reportError(new x(`Unknown argument "${u}" on field "${o.name}.${a.name}".`+Kt(c),{nodes:e}))}}}}function vd(i){const e=Object.create(null),t=i.getSchema(),a=t?t.getDirectives():qi;for(const l of a)e[l.name]=l.args.map(c=>c.name);const o=i.getDocument().definitions;for(const l of o)if(l.kind===F.DIRECTIVE_DEFINITION){var u;const c=(u=l.arguments)!==null&&u!==void 0?u:[];e[l.name.value]=c.map(d=>d.name.value)}return{Directive(l){const c=l.name.value,d=e[c];if(l.arguments&&d)for(const I of l.arguments){const S=I.name.value;if(!d.includes(S)){const h=yi(S,d);i.reportError(new x(`Unknown argument "${S}" on directive "@${c}".`+Kt(h),{nodes:I}))}}return!1}}}function Nd(i){const e=Object.create(null),t=i.getSchema(),a=t?t.getDirectives():qi;for(const u of a)e[u.name]=u.locations;const o=i.getDocument().definitions;for(const u of o)u.kind===F.DIRECTIVE_DEFINITION&&(e[u.name.value]=u.locations.map(l=>l.value));return{Directive(u,l,c,d,I){const S=u.name.value,h=e[S];if(!h){i.reportError(new x(`Unknown directive "@${S}".`,{nodes:u}));return}const w=nE(I);w&&!h.includes(w)&&i.reportError(new x(`Directive "@${S}" may not be used on ${w}.`,{nodes:u}))}}}function nE(i){const e=i[i.length-1];switch("kind"in e||Ze(!1),e.kind){case F.OPERATION_DEFINITION:return eE(e.operation);case F.FIELD:return W.FIELD;case F.FRAGMENT_SPREAD:return W.FRAGMENT_SPREAD;case F.INLINE_FRAGMENT:return W.INLINE_FRAGMENT;case F.FRAGMENT_DEFINITION:return W.FRAGMENT_DEFINITION;case F.VARIABLE_DEFINITION:return W.VARIABLE_DEFINITION;case F.SCHEMA_DEFINITION:case F.SCHEMA_EXTENSION:return W.SCHEMA;case F.SCALAR_TYPE_DEFINITION:case F.SCALAR_TYPE_EXTENSION:return W.SCALAR;case F.OBJECT_TYPE_DEFINITION:case F.OBJECT_TYPE_EXTENSION:return W.OBJECT;case F.FIELD_DEFINITION:return W.FIELD_DEFINITION;case F.INTERFACE_TYPE_DEFINITION:case F.INTERFACE_TYPE_EXTENSION:return W.INTERFACE;case F.UNION_TYPE_DEFINITION:case F.UNION_TYPE_EXTENSION:return W.UNION;case F.ENUM_TYPE_DEFINITION:case F.ENUM_TYPE_EXTENSION:return W.ENUM;case F.ENUM_VALUE_DEFINITION:return W.ENUM_VALUE;case F.INPUT_OBJECT_TYPE_DEFINITION:case F.INPUT_OBJECT_TYPE_EXTENSION:return W.INPUT_OBJECT;case F.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Ze(!1),t.kind===F.INPUT_OBJECT_TYPE_DEFINITION?W.INPUT_FIELD_DEFINITION:W.ARGUMENT_DEFINITION}default:Ze(!1,"Unexpected kind: "+M(e.kind))}}function eE(i){switch(i){case Me.QUERY:return W.QUERY;case Me.MUTATION:return W.MUTATION;case Me.SUBSCRIPTION:return W.SUBSCRIPTION}}function tE(i){return{FragmentSpread(e){const t=e.name.value;i.getFragment(t)||i.reportError(new x(`Unknown fragment "${t}".`,{nodes:e.name}))}}}function wd(i){const e=i.getSchema(),t=e?e.getTypeMap():Object.create(null),a=Object.create(null);for(const u of i.getDocument().definitions)Nr(u)&&(a[u.name.value]=!0);const o=[...Object.keys(t),...Object.keys(a)];return{NamedType(u,l,c,d,I){const S=u.name.value;if(!t[S]&&!a[S]){var h;const w=(h=I[2])!==null&&h!==void 0?h:c,b=w!=null&&iE(w);if(b&&yc.includes(S))return;const v=yi(S,b?yc.concat(o):o);i.reportError(new x(`Unknown type "${S}".`+Kt(v),{nodes:u}))}}}}const yc=[...Qo,...Ko].map(i=>i.name);function iE(i){return"kind"in i&&(WO(i)||HO(i))}function rE(i){let e=0;return{Document(t){e=t.definitions.filter(a=>a.kind===F.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&e>1&&i.reportError(new x("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function oE(i){var e,t,a;const o=i.getSchema(),u=(e=(t=(a=o==null?void 0:o.astNode)!==null&&a!==void 0?a:o==null?void 0:o.getQueryType())!==null&&t!==void 0?t:o==null?void 0:o.getMutationType())!==null&&e!==void 0?e:o==null?void 0:o.getSubscriptionType();let l=0;return{SchemaDefinition(c){if(u){i.reportError(new x("Cannot define a new schema within a schema extension.",{nodes:c}));return}l>0&&i.reportError(new x("Must provide only one schema definition.",{nodes:c})),++l}}}const aE=3;function uE(i){function e(t,a=Object.create(null),o=0){if(t.kind===F.FRAGMENT_SPREAD){const u=t.name.value;if(a[u]===!0)return!1;const l=i.getFragment(u);if(!l)return!1;try{return a[u]=!0,e(l,a,o)}finally{a[u]=void 0}}if(t.kind===F.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(o++,o>=aE))return!0;if("selectionSet"in t&&t.selectionSet){for(const u of t.selectionSet.selections)if(e(u,a,o))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&e(t))return i.reportError(new x("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function sE(i){const e=Object.create(null),t=[],a=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(u){return o(u),!1}};function o(u){if(e[u.name.value])return;const l=u.name.value;e[l]=!0;const c=i.getFragmentSpreads(u.selectionSet);if(c.length!==0){a[l]=t.length;for(const d of c){const I=d.name.value,S=a[I];if(t.push(d),S===void 0){const h=i.getFragment(I);h&&o(h)}else{const h=t.slice(S),w=h.slice(0,-1).map(b=>'"'+b.name.value+'"').join(", ");i.reportError(new x(`Cannot spread fragment "${I}" within itself`+(w!==""?` via ${w}.`:"."),{nodes:h}))}t.pop()}a[l]=void 0}}}function lE(i){let e=Object.create(null);return{OperationDefinition:{enter(){e=Object.create(null)},leave(t){const a=i.getRecursiveVariableUsages(t);for(const{node:o}of a){const u=o.name.value;e[u]!==!0&&i.reportError(new x(t.name?`Variable "$${u}" is not defined by operation "${t.name.value}".`:`Variable "$${u}" is not defined.`,{nodes:[o,t]}))}}},VariableDefinition(t){e[t.variable.name.value]=!0}}}function pE(i){const e=[],t=[];return{OperationDefinition(a){return e.push(a),!1},FragmentDefinition(a){return t.push(a),!1},Document:{leave(){const a=Object.create(null);for(const o of e)for(const u of i.getRecursivelyReferencedFragments(o))a[u.name.value]=!0;for(const o of t){const u=o.name.value;a[u]!==!0&&i.reportError(new x(`Fragment "${u}" is never used.`,{nodes:o}))}}}}}function cE(i){let e=[];return{OperationDefinition:{enter(){e=[]},leave(t){const a=Object.create(null),o=i.getRecursiveVariableUsages(t);for(const{node:u}of o)a[u.name.value]=!0;for(const u of e){const l=u.variable.name.value;a[l]!==!0&&i.reportError(new x(t.name?`Variable "$${l}" is never used in operation "${t.name.value}".`:`Variable "$${l}" is never used.`,{nodes:u}))}}},VariableDefinition(t){e.push(t)}}}function is(i){switch(i.kind){case F.OBJECT:return{...i,fields:dE(i.fields)};case F.LIST:return{...i,values:i.values.map(is)};case F.INT:case F.FLOAT:case F.STRING:case F.BOOLEAN:case F.NULL:case F.ENUM:case F.VARIABLE:return i}}function dE(i){return i.map(e=>({...e,value:is(e.value)})).sort((e,t)=>zu(e.name.value,t.name.value))}function _d(i){return Array.isArray(i)?i.map(([e,t])=>`subfields "${e}" conflict because `+_d(t)).join(" and "):i}function mE(i){const e=new hE,t=new Map;return{SelectionSet(a){const o=gE(i,t,e,i.getParentType(),a);for(const[[u,l],c,d]of o){const I=_d(l);i.reportError(new x(`Fields "${u}" conflict because ${I}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:c.concat(d)}))}}}}function gE(i,e,t,a,o){const u=[],[l,c]=qo(i,e,a,o);if(IE(i,u,e,t,l),c.length!==0)for(let d=0;d<c.length;d++){ko(i,u,e,t,!1,l,c[d]);for(let I=d+1;I<c.length;I++)Mo(i,u,e,t,!1,c[d],c[I])}return u}function ko(i,e,t,a,o,u,l){const c=i.getFragment(l);if(!c)return;const[d,I]=Ru(i,t,c);if(u!==d){rs(i,e,t,a,o,u,d);for(const S of I)a.has(S,l,o)||(a.add(S,l,o),ko(i,e,t,a,o,u,S))}}function Mo(i,e,t,a,o,u,l){if(u===l||a.has(u,l,o))return;a.add(u,l,o);const c=i.getFragment(u),d=i.getFragment(l);if(!c||!d)return;const[I,S]=Ru(i,t,c),[h,w]=Ru(i,t,d);rs(i,e,t,a,o,I,h);for(const b of w)Mo(i,e,t,a,o,u,b);for(const b of S)Mo(i,e,t,a,o,b,l)}function fE(i,e,t,a,o,u,l,c){const d=[],[I,S]=qo(i,e,o,u),[h,w]=qo(i,e,l,c);rs(i,d,e,t,a,I,h);for(const b of w)ko(i,d,e,t,a,I,b);for(const b of S)ko(i,d,e,t,a,h,b);for(const b of S)for(const v of w)Mo(i,d,e,t,a,b,v);return d}function IE(i,e,t,a,o){for(const[u,l]of Object.entries(o))if(l.length>1)for(let c=0;c<l.length;c++)for(let d=c+1;d<l.length;d++){const I=Bd(i,t,a,!1,u,l[c],l[d]);I&&e.push(I)}}function rs(i,e,t,a,o,u,l){for(const[c,d]of Object.entries(u)){const I=l[c];if(I)for(const S of d)for(const h of I){const w=Bd(i,t,a,o,c,S,h);w&&e.push(w)}}}function Bd(i,e,t,a,o,u,l){const[c,d,I]=u,[S,h,w]=l,b=a||c!==S&&Wn(c)&&Wn(S);if(!b){const An=d.name.value,Sn=h.name.value;if(An!==Sn)return[[o,`"${An}" and "${Sn}" are different fields`],[d],[h]];if(!SE(d,h))return[[o,"they have differing arguments"],[d],[h]]}const v=I==null?void 0:I.type,L=w==null?void 0:w.type;if(v&&L&&Uu(v,L))return[[o,`they return conflicting types "${M(v)}" and "${M(L)}"`],[d],[h]];const j=d.selectionSet,cn=h.selectionSet;if(j&&cn){const An=fE(i,e,t,b,fi(v),j,fi(L),cn);return yE(An,o,d,h)}}function SE(i,e){const t=i.arguments,a=e.arguments;if(t===void 0||t.length===0)return a===void 0||a.length===0;if(a===void 0||a.length===0||t.length!==a.length)return!1;const o=new Map(a.map(({name:u,value:l})=>[u.value,l]));return t.every(u=>{const l=u.value,c=o.get(u.name.value);return c===void 0?!1:hc(l)===hc(c)})}function hc(i){return zn(is(i))}function Uu(i,e){return he(i)?he(e)?Uu(i.ofType,e.ofType):!0:he(e)?!0:Dn(i)?Dn(e)?Uu(i.ofType,e.ofType):!0:Dn(e)?!0:Pi(i)||Pi(e)?i!==e:!1}function qo(i,e,t,a){const o=e.get(a);if(o)return o;const u=Object.create(null),l=Object.create(null);Ud(i,t,a,u,l);const c=[u,Object.keys(l)];return e.set(a,c),c}function Ru(i,e,t){const a=e.get(t.selectionSet);if(a)return a;const o=mt(i.getSchema(),t.typeCondition);return qo(i,e,o,t.selectionSet)}function Ud(i,e,t,a,o){for(const u of t.selections)switch(u.kind){case F.FIELD:{const l=u.name.value;let c;(Wn(e)||Vn(e))&&(c=e.getFields()[l]);const d=u.alias?u.alias.value:l;a[d]||(a[d]=[]),a[d].push([e,u,c]);break}case F.FRAGMENT_SPREAD:o[u.name.value]=!0;break;case F.INLINE_FRAGMENT:{const l=u.typeCondition,c=l?mt(i.getSchema(),l):e;Ud(i,c,u.selectionSet,a,o);break}}}function yE(i,e,t,a){if(i.length>0)return[[e,i.map(([o])=>o)],[t,...i.map(([,o])=>o).flat()],[a,...i.map(([,,o])=>o).flat()]]}class hE{constructor(){this._data=new Map}has(e,t,a){var o;const[u,l]=e<t?[e,t]:[t,e],c=(o=this._data.get(u))===null||o===void 0?void 0:o.get(l);return c===void 0?!1:a?!0:a===c}add(e,t,a){const[o,u]=e<t?[e,t]:[t,e],l=this._data.get(o);l===void 0?this._data.set(o,new Map([[u,a]])):l.set(u,a)}}function TE(i){return{InlineFragment(e){const t=i.getType(),a=i.getParentType();if(Or(t)&&Or(a)&&!Ic(i.getSchema(),t,a)){const o=M(a),u=M(t);i.reportError(new x(`Fragment cannot be spread here as objects of type "${o}" can never be of type "${u}".`,{nodes:e}))}},FragmentSpread(e){const t=e.name.value,a=FE(i,t),o=i.getParentType();if(a&&o&&!Ic(i.getSchema(),a,o)){const u=M(o),l=M(a);i.reportError(new x(`Fragment "${t}" cannot be spread here as objects of type "${u}" can never be of type "${l}".`,{nodes:e}))}}}}function FE(i,e){const t=i.getFragment(e);if(t){const a=mt(i.getSchema(),t.typeCondition);if(Or(a))return a}}function CE(i){const e=i.getSchema(),t=Object.create(null);for(const o of i.getDocument().definitions)Nr(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:a,ObjectTypeExtension:a,InterfaceTypeExtension:a,UnionTypeExtension:a,EnumTypeExtension:a,InputObjectTypeExtension:a};function a(o){const u=o.name.value,l=t[u],c=e==null?void 0:e.getType(u);let d;if(l?d=OE[l.kind]:c&&(d=EE(c)),d){if(d!==o.kind){const I=bE(o.kind);i.reportError(new x(`Cannot extend non-${I} type "${u}".`,{nodes:l?[l,o]:o}))}}else{const I=Object.keys({...t,...e==null?void 0:e.getTypeMap()}),S=yi(u,I);i.reportError(new x(`Cannot extend type "${u}" because it is not defined.`+Kt(S),{nodes:o.name}))}}}const OE={[F.SCALAR_TYPE_DEFINITION]:F.SCALAR_TYPE_EXTENSION,[F.OBJECT_TYPE_DEFINITION]:F.OBJECT_TYPE_EXTENSION,[F.INTERFACE_TYPE_DEFINITION]:F.INTERFACE_TYPE_EXTENSION,[F.UNION_TYPE_DEFINITION]:F.UNION_TYPE_EXTENSION,[F.ENUM_TYPE_DEFINITION]:F.ENUM_TYPE_EXTENSION,[F.INPUT_OBJECT_TYPE_DEFINITION]:F.INPUT_OBJECT_TYPE_EXTENSION};function EE(i){if(zt(i))return F.SCALAR_TYPE_EXTENSION;if(Wn(i))return F.OBJECT_TYPE_EXTENSION;if(Vn(i))return F.INTERFACE_TYPE_EXTENSION;if(qe(i))return F.UNION_TYPE_EXTENSION;if(nt(i))return F.ENUM_TYPE_EXTENSION;if(ye(i))return F.INPUT_OBJECT_TYPE_EXTENSION;Ze(!1,"Unexpected type: "+M(i))}function bE(i){switch(i){case F.SCALAR_TYPE_EXTENSION:return"scalar";case F.OBJECT_TYPE_EXTENSION:return"object";case F.INTERFACE_TYPE_EXTENSION:return"interface";case F.UNION_TYPE_EXTENSION:return"union";case F.ENUM_TYPE_EXTENSION:return"enum";case F.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Ze(!1,"Unexpected kind: "+M(i))}}function DE(i){return{...Rd(i),Field:{leave(e){var t;const a=i.getFieldDef();if(!a)return!1;const o=new Set((t=e.arguments)===null||t===void 0?void 0:t.map(u=>u.name.value));for(const u of a.args)if(!o.has(u.name)&&fd(u)){const l=M(u.type);i.reportError(new x(`Field "${a.name}" argument "${u.name}" of type "${l}" is required, but it was not provided.`,{nodes:e}))}}}}}function Rd(i){var e;const t=Object.create(null),a=i.getSchema(),o=(e=a==null?void 0:a.getDirectives())!==null&&e!==void 0?e:qi;for(const c of o)t[c.name]=gi(c.args.filter(fd),d=>d.name);const u=i.getDocument().definitions;for(const c of u)if(c.kind===F.DIRECTIVE_DEFINITION){var l;const d=(l=c.arguments)!==null&&l!==void 0?l:[];t[c.name.value]=gi(d.filter(AE),I=>I.name.value)}return{Directive:{leave(c){const d=c.name.value,I=t[d];if(I){var S;const h=(S=c.arguments)!==null&&S!==void 0?S:[],w=new Set(h.map(b=>b.name.value));for(const[b,v]of Object.entries(I))if(!w.has(b)){const L=Xu(v.type)?M(v.type):zn(v.type);i.reportError(new x(`Directive "@${d}" argument "${b}" of type "${L}" is required, but it was not provided.`,{nodes:c}))}}}}}}function AE(i){return i.type.kind===F.NON_NULL_TYPE&&i.defaultValue==null}function vE(i){return{Field(e){const t=i.getType(),a=e.selectionSet;if(t){if(Pi(fi(t))){if(a){const o=e.name.value,u=M(t);i.reportError(new x(`Field "${o}" must not have a selection since type "${u}" has no subfields.`,{nodes:a}))}}else if(!a){const o=e.name.value,u=M(t);i.reportError(new x(`Field "${o}" of type "${u}" must have a selection of subfields. Did you mean "${o} { ... }"?`,{nodes:e}))}}}}}function Wt(i,e,t){if(i){if(i.kind===F.VARIABLE){const a=i.name.value;if(t==null||t[a]===void 0)return;const o=t[a];return o===null&&Dn(e)?void 0:o}if(Dn(e))return i.kind===F.NULL?void 0:Wt(i,e.ofType,t);if(i.kind===F.NULL)return null;if(he(e)){const a=e.ofType;if(i.kind===F.LIST){const u=[];for(const l of i.values)if(Tc(l,t)){if(Dn(a))return;u.push(null)}else{const c=Wt(l,a,t);if(c===void 0)return;u.push(c)}return u}const o=Wt(i,a,t);return o===void 0?void 0:[o]}if(ye(e)){if(i.kind!==F.OBJECT)return;const a=Object.create(null),o=gi(i.fields,u=>u.name.value);for(const u of Object.values(e.getFields())){const l=o[u.name];if(!l||Tc(l.value,t)){if(u.defaultValue!==void 0)a[u.name]=u.defaultValue;else if(Dn(u.type))return;continue}const c=Wt(l.value,u.type,t);if(c===void 0)return;a[u.name]=c}if(e.isOneOf){const u=Object.keys(a);if(u.length!==1||a[u[0]]===null)return}return a}if(Pi(e)){let a;try{a=e.parseLiteral(i,t)}catch{return}return a===void 0?void 0:a}Ze(!1,"Unexpected input type: "+M(e))}}function Tc(i,e){return i.kind===F.VARIABLE&&(e==null||e[i.name.value]===void 0)}function NE(i,e,t){var a;const o={},u=(a=e.arguments)!==null&&a!==void 0?a:[],l=gi(u,c=>c.name.value);for(const c of i.args){const d=c.name,I=c.type,S=l[d];if(!S){if(c.defaultValue!==void 0)o[d]=c.defaultValue;else if(Dn(I))throw new x(`Argument "${d}" of required type "${M(I)}" was not provided.`,{nodes:e});continue}const h=S.value;let w=h.kind===F.NULL;if(h.kind===F.VARIABLE){const v=h.name.value;if(t==null||!wE(t,v)){if(c.defaultValue!==void 0)o[d]=c.defaultValue;else if(Dn(I))throw new x(`Argument "${d}" of required type "${M(I)}" was provided the variable "$${v}" which was not provided a runtime value.`,{nodes:h});continue}w=t[v]==null}if(w&&Dn(I))throw new x(`Argument "${d}" of non-null type "${M(I)}" must not be null.`,{nodes:h});const b=Wt(h,I,t);if(b===void 0)throw new x(`Argument "${d}" has invalid value ${zn(h)}.`,{nodes:h});o[d]=b}return o}function Er(i,e,t){var a;const o=(a=e.directives)===null||a===void 0?void 0:a.find(u=>u.name.value===i.name);if(o)return NE(i,o,t)}function wE(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function _E(i,e,t,a,o){const u=new Map;return xu(i,e,t,a,o,u,new Set),u}function xu(i,e,t,a,o,u,l){for(const c of o.selections)switch(c.kind){case F.FIELD:{if(!Eu(t,c))continue;const d=BE(c),I=u.get(d);I!==void 0?I.push(c):u.set(d,[c]);break}case F.INLINE_FRAGMENT:{if(!Eu(t,c)||!Fc(i,c,a))continue;xu(i,e,t,a,c.selectionSet,u,l);break}case F.FRAGMENT_SPREAD:{const d=c.name.value;if(l.has(d)||!Eu(t,c))continue;l.add(d);const I=e[d];if(!I||!Fc(i,I,a))continue;xu(i,e,t,a,I.selectionSet,u,l);break}}}function Eu(i,e){const t=Er(yd,e,i);if((t==null?void 0:t.if)===!0)return!1;const a=Er(Sd,e,i);return(a==null?void 0:a.if)!==!1}function Fc(i,e,t){const a=e.typeCondition;if(!a)return!0;const o=mt(i,a);return o===t?!0:ci(o)?i.isSubType(o,t):!1}function BE(i){return i.alias?i.alias.value:i.name.value}function UE(i){return{OperationDefinition(e){if(e.operation==="subscription"){const t=i.getSchema(),a=t.getSubscriptionType();if(a){const o=e.name?e.name.value:null,u=Object.create(null),l=i.getDocument(),c=Object.create(null);for(const I of l.definitions)I.kind===F.FRAGMENT_DEFINITION&&(c[I.name.value]=I);const d=_E(t,c,u,a,e.selectionSet);if(d.size>1){const h=[...d.values()].slice(1).flat();i.reportError(new x(o!=null?`Subscription "${o}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:h}))}for(const I of d.values())I[0].name.value.startsWith("__")&&i.reportError(new x(o!=null?`Subscription "${o}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:I}))}}}}}function os(i,e){const t=new Map;for(const a of i){const o=e(a),u=t.get(o);u===void 0?t.set(o,[a]):u.push(a)}return t}function RE(i){return{DirectiveDefinition(a){var o;const u=(o=a.arguments)!==null&&o!==void 0?o:[];return t(`@${a.name.value}`,u)},InterfaceTypeDefinition:e,InterfaceTypeExtension:e,ObjectTypeDefinition:e,ObjectTypeExtension:e};function e(a){var o;const u=a.name.value,l=(o=a.fields)!==null&&o!==void 0?o:[];for(const d of l){var c;const I=d.name.value,S=(c=d.arguments)!==null&&c!==void 0?c:[];t(`${u}.${I}`,S)}return!1}function t(a,o){const u=os(o,l=>l.name.value);for(const[l,c]of u)c.length>1&&i.reportError(new x(`Argument "${a}(${l}:)" can only be defined once.`,{nodes:c.map(d=>d.name)}));return!1}}function xd(i){return{Field:e,Directive:e};function e(t){var a;const o=(a=t.arguments)!==null&&a!==void 0?a:[],u=os(o,l=>l.name.value);for(const[l,c]of u)c.length>1&&i.reportError(new x(`There can be only one argument named "${l}".`,{nodes:c.map(d=>d.name)}))}}function xE(i){const e=Object.create(null),t=i.getSchema();return{DirectiveDefinition(a){const o=a.name.value;if(t!=null&&t.getDirective(o)){i.reportError(new x(`Directive "@${o}" already exists in the schema. It cannot be redefined.`,{nodes:a.name}));return}return e[o]?i.reportError(new x(`There can be only one directive named "@${o}".`,{nodes:[e[o],a.name]})):e[o]=a.name,!1}}}function Ld(i){const e=Object.create(null),t=i.getSchema(),a=t?t.getDirectives():qi;for(const c of a)e[c.name]=!c.isRepeatable;const o=i.getDocument().definitions;for(const c of o)c.kind===F.DIRECTIVE_DEFINITION&&(e[c.name.value]=!c.repeatable);const u=Object.create(null),l=Object.create(null);return{enter(c){if(!("directives"in c)||!c.directives)return;let d;if(c.kind===F.SCHEMA_DEFINITION||c.kind===F.SCHEMA_EXTENSION)d=u;else if(Nr(c)||ts(c)){const I=c.name.value;d=l[I],d===void 0&&(l[I]=d=Object.create(null))}else d=Object.create(null);for(const I of c.directives){const S=I.name.value;e[S]&&(d[S]?i.reportError(new x(`The directive "@${S}" can only be used once at this location.`,{nodes:[d[S],I]})):d[S]=I)}}}}function LE(i){const e=i.getSchema(),t=e?e.getTypeMap():Object.create(null),a=Object.create(null);return{EnumTypeDefinition:o,EnumTypeExtension:o};function o(u){var l;const c=u.name.value;a[c]||(a[c]=Object.create(null));const d=(l=u.values)!==null&&l!==void 0?l:[],I=a[c];for(const S of d){const h=S.name.value,w=t[c];nt(w)&&w.getValue(h)?i.reportError(new x(`Enum value "${c}.${h}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:S.name})):I[h]?i.reportError(new x(`Enum value "${c}.${h}" can only be defined once.`,{nodes:[I[h],S.name]})):I[h]=S.name}return!1}}function PE(i){const e=i.getSchema(),t=e?e.getTypeMap():Object.create(null),a=Object.create(null);return{InputObjectTypeDefinition:o,InputObjectTypeExtension:o,InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(u){var l;const c=u.name.value;a[c]||(a[c]=Object.create(null));const d=(l=u.fields)!==null&&l!==void 0?l:[],I=a[c];for(const S of d){const h=S.name.value;kE(t[c],h)?i.reportError(new x(`Field "${c}.${h}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:S.name})):I[h]?i.reportError(new x(`Field "${c}.${h}" can only be defined once.`,{nodes:[I[h],S.name]})):I[h]=S.name}return!1}}function kE(i,e){return Wn(i)||Vn(i)||ye(i)?i.getFields()[e]!=null:!1}function ME(i){const e=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const a=t.name.value;return e[a]?i.reportError(new x(`There can be only one fragment named "${a}".`,{nodes:[e[a],t.name]})):e[a]=t.name,!1}}}function Pd(i){const e=[];let t=Object.create(null);return{ObjectValue:{enter(){e.push(t),t=Object.create(null)},leave(){const a=e.pop();a||Ze(!1),t=a}},ObjectField(a){const o=a.name.value;t[o]?i.reportError(new x(`There can be only one input field named "${o}".`,{nodes:[t[o],a.name]})):t[o]=a.name}}}function qE(i){const e=Object.create(null);return{OperationDefinition(t){const a=t.name;return a&&(e[a.value]?i.reportError(new x(`There can be only one operation named "${a.value}".`,{nodes:[e[a.value],a]})):e[a.value]=a),!1},FragmentDefinition:()=>!1}}function JE(i){const e=i.getSchema(),t=Object.create(null),a=e?{query:e.getQueryType(),mutation:e.getMutationType(),subscription:e.getSubscriptionType()}:{};return{SchemaDefinition:o,SchemaExtension:o};function o(u){var l;const c=(l=u.operationTypes)!==null&&l!==void 0?l:[];for(const d of c){const I=d.operation,S=t[I];a[I]?i.reportError(new x(`Type for ${I} already defined in the schema. It cannot be redefined.`,{nodes:d})):S?i.reportError(new x(`There can be only one ${I} type in schema.`,{nodes:[S,d]})):t[I]=d}return!1}}function GE(i){const e=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:a,ObjectTypeDefinition:a,InterfaceTypeDefinition:a,UnionTypeDefinition:a,EnumTypeDefinition:a,InputObjectTypeDefinition:a};function a(o){const u=o.name.value;if(t!=null&&t.getType(u)){i.reportError(new x(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:o.name}));return}return e[u]?i.reportError(new x(`There can be only one type named "${u}".`,{nodes:[e[u],o.name]})):e[u]=o.name,!1}}function VE(i){return{OperationDefinition(e){var t;const a=(t=e.variableDefinitions)!==null&&t!==void 0?t:[],o=os(a,u=>u.variable.name.value);for(const[u,l]of o)l.length>1&&i.reportError(new x(`There can be only one variable named "$${u}".`,{nodes:l.map(c=>c.variable.name)}))}}}function $E(i){let e={};return{OperationDefinition:{enter(){e={}}},VariableDefinition(t){e[t.variable.name.value]=t},ListValue(t){const a=RO(i.getParentInputType());if(!he(a))return li(i,t),!1},ObjectValue(t){const a=fi(i.getInputType());if(!ye(a))return li(i,t),!1;const o=gi(t.fields,u=>u.name.value);for(const u of Object.values(a.getFields()))if(!o[u.name]&&PO(u)){const c=M(u.type);i.reportError(new x(`Field "${a.name}.${u.name}" of required type "${c}" was not provided.`,{nodes:t}))}a.isOneOf&&jE(i,t,a,o,e)},ObjectField(t){const a=fi(i.getParentInputType());if(!i.getInputType()&&ye(a)){const u=yi(t.name.value,Object.keys(a.getFields()));i.reportError(new x(`Field "${t.name.value}" is not defined by type "${a.name}".`+Kt(u),{nodes:t}))}},NullValue(t){const a=i.getInputType();Dn(a)&&i.reportError(new x(`Expected value of type "${M(a)}", found ${zn(t)}.`,{nodes:t}))},EnumValue:t=>li(i,t),IntValue:t=>li(i,t),FloatValue:t=>li(i,t),StringValue:t=>li(i,t),BooleanValue:t=>li(i,t)}}function li(i,e){const t=i.getInputType();if(!t)return;const a=fi(t);if(!Pi(a)){const o=M(t);i.reportError(new x(`Expected value of type "${o}", found ${zn(e)}.`,{nodes:e}));return}try{if(a.parseLiteral(e,void 0)===void 0){const u=M(t);i.reportError(new x(`Expected value of type "${u}", found ${zn(e)}.`,{nodes:e}))}}catch(o){const u=M(t);o instanceof x?i.reportError(o):i.reportError(new x(`Expected value of type "${u}", found ${zn(e)}; `+o.message,{nodes:e,originalError:o}))}}function jE(i,e,t,a,o){var u;const l=Object.keys(a);if(l.length!==1){i.reportError(new x(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[e]}));return}const d=(u=a[l[0]])===null||u===void 0?void 0:u.value,I=!d||d.kind===F.NULL,S=(d==null?void 0:d.kind)===F.VARIABLE;if(I){i.reportError(new x(`Field "${t.name}.${l[0]}" must be non-null.`,{nodes:[e]}));return}if(S){const h=d.name.value;o[h].type.kind!==F.NON_NULL_TYPE&&i.reportError(new x(`Variable "${h}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[e]}))}}function WE(i){return{VariableDefinition(e){const t=mt(i.getSchema(),e.type);if(t!==void 0&&!Zu(t)){const a=e.variable.name.value,o=zn(e.type);i.reportError(new x(`Variable "$${a}" cannot be non-input type "${o}".`,{nodes:e.type}))}}}}function HE(i){let e=Object.create(null);return{OperationDefinition:{enter(){e=Object.create(null)},leave(t){const a=i.getRecursiveVariableUsages(t);for(const{node:o,type:u,defaultValue:l}of a){const c=o.name.value,d=e[c];if(d&&u){const I=i.getSchema(),S=mt(I,d.type);if(S&&!QE(I,S,d.defaultValue,u,l)){const h=M(S),w=M(u);i.reportError(new x(`Variable "$${c}" of type "${h}" used in position expecting type "${w}".`,{nodes:[d,o]}))}}}}},VariableDefinition(t){e[t.variable.name.value]=t}}}function QE(i,e,t,a,o){if(Dn(a)&&!Dn(e)){if(!(t!=null&&t.kind!==F.NULL)&&!(o!==void 0))return!1;const c=a.ofType;return yr(i,e,c)}return yr(i,e,a)}const YE=Object.freeze([uE]);Object.freeze([QO,qE,rE,UE,wd,XO,WE,vE,YO,ME,tE,pE,TE,sE,VE,lE,cE,Nd,Ld,ZO,xd,$E,DE,HE,mE,Pd,...YE]);const KE=Object.freeze([oE,JE,GE,LE,PE,RE,xE,wd,Nd,Ld,CE,vd,xd,Pd,Rd]);class zE{constructor(e,t){this._ast=e,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(e){this._onError(e)}getDocument(){return this._ast}getFragment(e){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const a of this.getDocument().definitions)a.kind===F.FRAGMENT_DEFINITION&&(t[a.name.value]=a);this._fragments=t}return t[e]}getFragmentSpreads(e){let t=this._fragmentSpreads.get(e);if(!t){t=[];const a=[e];let o;for(;o=a.pop();)for(const u of o.selections)u.kind===F.FRAGMENT_SPREAD?t.push(u):u.selectionSet&&a.push(u.selectionSet);this._fragmentSpreads.set(e,t)}return t}getRecursivelyReferencedFragments(e){let t=this._recursivelyReferencedFragments.get(e);if(!t){t=[];const a=Object.create(null),o=[e.selectionSet];let u;for(;u=o.pop();)for(const l of this.getFragmentSpreads(u)){const c=l.name.value;if(a[c]!==!0){a[c]=!0;const d=this.getFragment(c);d&&(t.push(d),o.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(e,t)}return t}}class XE extends zE{constructor(e,t,a){super(e,a),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function ZE(i,e,t=KE){const a=[],o=new XE(i,e,l=>{a.push(l)}),u=t.map(l=>l(o));return rd(i,AO(u)),a}function nb(i){const e=ZE(i);if(e.length!==0)throw new Error(e.map(t=>t.message).join(`

`))}function eb(i,e){_t(i)&&_t(i.__schema)||dn(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${M(i)}.`);const t=i.__schema,a=pi(t.types,U=>U.name,U=>w(U));for(const U of[...Qo,...Ko])a[U.name]&&(a[U.name]=U);const o=t.queryType?S(t.queryType):null,u=t.mutationType?S(t.mutationType):null,l=t.subscriptionType?S(t.subscriptionType):null,c=t.directives?t.directives.map(ft):[];return new Ad({description:t.description,query:o,mutation:u,subscription:l,types:Object.values(a),directives:c,assumeValid:void 0});function d(U){if(U.kind===En.LIST){const z=U.ofType;if(!z)throw new Error("Decorated type deeper than introspection query.");return new ce(d(z))}if(U.kind===En.NON_NULL){const z=U.ofType;if(!z)throw new Error("Decorated type deeper than introspection query.");const ue=d(z);return new on(UO(ue))}return I(U)}function I(U){const z=U.name;if(!z)throw new Error(`Unknown type reference: ${M(U)}.`);const ue=a[z];if(!ue)throw new Error(`Invalid or incomplete schema, unknown type: ${z}. Ensure that a full introspection query is used in order to build a client schema.`);return ue}function S(U){return _O(I(U))}function h(U){return BO(I(U))}function w(U){if(U!=null&&U.name!=null&&U.kind!=null)switch(U.kind){case En.SCALAR:return b(U);case En.OBJECT:return L(U);case En.INTERFACE:return j(U);case En.UNION:return cn(U);case En.ENUM:return An(U);case En.INPUT_OBJECT:return Sn(U)}const z=M(U);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${z}.`)}function b(U){return new Bt({name:U.name,description:U.description,specifiedByURL:U.specifiedByURL})}function v(U){if(U.interfaces===null&&U.kind===En.INTERFACE)return[];if(!U.interfaces){const z=M(U);throw new Error(`Introspection result missing interfaces: ${z}.`)}return U.interfaces.map(h)}function L(U){return new dt({name:U.name,description:U.description,interfaces:()=>v(U),fields:()=>_n(U)})}function j(U){return new xo({name:U.name,description:U.description,interfaces:()=>v(U),fields:()=>_n(U)})}function cn(U){if(!U.possibleTypes){const z=M(U);throw new Error(`Introspection result missing possibleTypes: ${z}.`)}return new Lo({name:U.name,description:U.description,types:()=>U.possibleTypes.map(S)})}function An(U){if(!U.enumValues){const z=M(U);throw new Error(`Introspection result missing enumValues: ${z}.`)}return new ki({name:U.name,description:U.description,values:pi(U.enumValues,z=>z.name,z=>({description:z.description,deprecationReason:z.deprecationReason}))})}function Sn(U){if(!U.inputFields){const z=M(U);throw new Error(`Introspection result missing inputFields: ${z}.`)}return new Po({name:U.name,description:U.description,fields:()=>ae(U.inputFields),isOneOf:U.isOneOf})}function _n(U){if(!U.fields)throw new Error(`Introspection result missing fields: ${M(U)}.`);return pi(U.fields,z=>z.name,xn)}function xn(U){const z=d(U.type);if(!ad(z)){const ue=M(z);throw new Error(`Introspection must provide output type for fields, but received: ${ue}.`)}if(!U.args){const ue=M(U);throw new Error(`Introspection result missing field args: ${ue}.`)}return{description:U.description,deprecationReason:U.deprecationReason,type:z,args:ae(U.args)}}function ae(U){return pi(U,z=>z.name,ee)}function ee(U){const z=d(U.type);if(!Zu(z)){const xt=M(z);throw new Error(`Introspection must provide input type for arguments, but received: ${xt}.`)}const ue=U.defaultValue!=null?Wt(hO(U.defaultValue),z):void 0;return{description:U.description,type:z,defaultValue:ue,deprecationReason:U.deprecationReason}}function ft(U){if(!U.args){const z=M(U);throw new Error(`Introspection result missing directive args: ${z}.`)}if(!U.locations){const z=M(U);throw new Error(`Introspection result missing directive locations: ${z}.`)}return new Ut({name:U.name,description:U.description,isRepeatable:U.isRepeatable,locations:U.locations.slice(),args:ae(U.args)})}}function tb(i,e,t){var a,o,u,l;const c=[],d=Object.create(null),I=[];let S;const h=[];for(const D of e.definitions)if(D.kind===F.SCHEMA_DEFINITION)S=D;else if(D.kind===F.SCHEMA_EXTENSION)h.push(D);else if(Nr(D))c.push(D);else if(ts(D)){const G=D.name.value,k=d[G];d[G]=k?k.concat([D]):[D]}else D.kind===F.DIRECTIVE_DEFINITION&&I.push(D);if(Object.keys(d).length===0&&c.length===0&&I.length===0&&h.length===0&&S==null)return i;const w=Object.create(null);for(const D of i.types)w[D.name]=An(D);for(const D of c){var b;const G=D.name.value;w[G]=(b=Cc[G])!==null&&b!==void 0?b:Ne(D)}const v={query:i.query&&j(i.query),mutation:i.mutation&&j(i.mutation),subscription:i.subscription&&j(i.subscription),...S&&ue([S]),...ue(h)};return{description:(a=S)===null||a===void 0||(o=a.description)===null||o===void 0?void 0:o.value,...v,types:Object.values(w),directives:[...i.directives.map(cn),...I.map(wr)],extensions:Object.create(null),astNode:(u=S)!==null&&u!==void 0?u:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(h),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function L(D){return he(D)?new ce(L(D.ofType)):Dn(D)?new on(L(D.ofType)):j(D)}function j(D){return w[D.name]}function cn(D){const G=D.toConfig();return new Ut({...G,args:Dt(G.args,z)})}function An(D){if($O(D)||qO(D))return D;if(zt(D))return xn(D);if(Wn(D))return ae(D);if(Vn(D))return ee(D);if(qe(D))return ft(D);if(nt(D))return _n(D);if(ye(D))return Sn(D);Ze(!1,"Unexpected type: "+M(D))}function Sn(D){var G;const k=D.toConfig(),q=(G=d[k.name])!==null&&G!==void 0?G:[];return new Po({...k,fields:()=>({...Dt(k.fields,gn=>({...gn,type:L(gn.type)})),...at(q)}),extensionASTNodes:k.extensionASTNodes.concat(q)})}function _n(D){var G;const k=D.toConfig(),q=(G=d[D.name])!==null&&G!==void 0?G:[];return new ki({...k,values:{...k.values,...Ge(q)},extensionASTNodes:k.extensionASTNodes.concat(q)})}function xn(D){var G;const k=D.toConfig(),q=(G=d[k.name])!==null&&G!==void 0?G:[];let gn=k.specifiedByURL;for(const fn of q){var Mn;gn=(Mn=Oc(fn))!==null&&Mn!==void 0?Mn:gn}return new Bt({...k,specifiedByURL:gn,extensionASTNodes:k.extensionASTNodes.concat(q)})}function ae(D){var G;const k=D.toConfig(),q=(G=d[k.name])!==null&&G!==void 0?G:[];return new dt({...k,interfaces:()=>[...D.getInterfaces().map(j),...Ti(q)],fields:()=>({...Dt(k.fields,U),...hi(q)}),extensionASTNodes:k.extensionASTNodes.concat(q)})}function ee(D){var G;const k=D.toConfig(),q=(G=d[k.name])!==null&&G!==void 0?G:[];return new xo({...k,interfaces:()=>[...D.getInterfaces().map(j),...Ti(q)],fields:()=>({...Dt(k.fields,U),...hi(q)}),extensionASTNodes:k.extensionASTNodes.concat(q)})}function ft(D){var G;const k=D.toConfig(),q=(G=d[k.name])!==null&&G!==void 0?G:[];return new Lo({...k,types:()=>[...D.getTypes().map(j),...Zt(q)],extensionASTNodes:k.extensionASTNodes.concat(q)})}function U(D){return{...D,type:L(D.type),args:D.args&&Dt(D.args,z)}}function z(D){return{...D,type:L(D.type)}}function ue(D){const G={};for(const q of D){var k;const gn=(k=q.operationTypes)!==null&&k!==void 0?k:[];for(const Mn of gn)G[Mn.operation]=xt(Mn.type)}return G}function xt(D){var G;const k=D.name.value,q=(G=Cc[k])!==null&&G!==void 0?G:w[k];if(q===void 0)throw new Error(`Unknown type: "${k}".`);return q}function Xt(D){return D.kind===F.LIST_TYPE?new ce(Xt(D.type)):D.kind===F.NON_NULL_TYPE?new on(Xt(D.type)):xt(D)}function wr(D){var G;return new Ut({name:D.name.value,description:(G=D.description)===null||G===void 0?void 0:G.value,locations:D.locations.map(({value:k})=>k),isRepeatable:D.repeatable,args:_r(D.arguments),astNode:D})}function hi(D){const G=Object.create(null);for(const gn of D){var k;const Mn=(k=gn.fields)!==null&&k!==void 0?k:[];for(const fn of Mn){var q;G[fn.name.value]={type:Xt(fn.type),description:(q=fn.description)===null||q===void 0?void 0:q.value,args:_r(fn.arguments),deprecationReason:vo(fn),astNode:fn}}}return G}function _r(D){const G=D??[],k=Object.create(null);for(const gn of G){var q;const Mn=Xt(gn.type);k[gn.name.value]={type:Mn,description:(q=gn.description)===null||q===void 0?void 0:q.value,defaultValue:Wt(gn.defaultValue,Mn),deprecationReason:vo(gn),astNode:gn}}return k}function at(D){const G=Object.create(null);for(const gn of D){var k;const Mn=(k=gn.fields)!==null&&k!==void 0?k:[];for(const fn of Mn){var q;const we=Xt(fn.type);G[fn.name.value]={type:we,description:(q=fn.description)===null||q===void 0?void 0:q.value,defaultValue:Wt(fn.defaultValue,we),deprecationReason:vo(fn),astNode:fn}}}return G}function Ge(D){const G=Object.create(null);for(const gn of D){var k;const Mn=(k=gn.values)!==null&&k!==void 0?k:[];for(const fn of Mn){var q;G[fn.name.value]={description:(q=fn.description)===null||q===void 0?void 0:q.value,deprecationReason:vo(fn),astNode:fn}}}return G}function Ti(D){return D.flatMap(G=>{var k,q;return(k=(q=G.interfaces)===null||q===void 0?void 0:q.map(xt))!==null&&k!==void 0?k:[]})}function Zt(D){return D.flatMap(G=>{var k,q;return(k=(q=G.types)===null||q===void 0?void 0:q.map(xt))!==null&&k!==void 0?k:[]})}function Ne(D){var G;const k=D.name.value,q=(G=d[k])!==null&&G!==void 0?G:[];switch(D.kind){case F.OBJECT_TYPE_DEFINITION:{var gn;const te=[D,...q];return new dt({name:k,description:(gn=D.description)===null||gn===void 0?void 0:gn.value,interfaces:()=>Ti(te),fields:()=>hi(te),astNode:D,extensionASTNodes:q})}case F.INTERFACE_TYPE_DEFINITION:{var Mn;const te=[D,...q];return new xo({name:k,description:(Mn=D.description)===null||Mn===void 0?void 0:Mn.value,interfaces:()=>Ti(te),fields:()=>hi(te),astNode:D,extensionASTNodes:q})}case F.ENUM_TYPE_DEFINITION:{var fn;const te=[D,...q];return new ki({name:k,description:(fn=D.description)===null||fn===void 0?void 0:fn.value,values:Ge(te),astNode:D,extensionASTNodes:q})}case F.UNION_TYPE_DEFINITION:{var we;const te=[D,...q];return new Lo({name:k,description:(we=D.description)===null||we===void 0?void 0:we.value,types:()=>Zt(te),astNode:D,extensionASTNodes:q})}case F.SCALAR_TYPE_DEFINITION:{var Ji;return new Bt({name:k,description:(Ji=D.description)===null||Ji===void 0?void 0:Ji.value,specifiedByURL:Oc(D),astNode:D,extensionASTNodes:q})}case F.INPUT_OBJECT_TYPE_DEFINITION:{var Lt;const te=[D,...q];return new Po({name:k,description:(Lt=D.description)===null||Lt===void 0?void 0:Lt.value,fields:()=>at(te),astNode:D,extensionASTNodes:q,isOneOf:ib(D)})}}}}const Cc=gi([...Qo,...Ko],i=>i.name);function vo(i){const e=Er(hd,i);return e==null?void 0:e.reason}function Oc(i){const e=Er(Td,i);return e==null?void 0:e.url}function ib(i){return!!Er(Fd,i)}function rb(i,e){i!=null&&i.kind===F.DOCUMENT||dn(!1,"Must provide valid Document AST."),(e==null?void 0:e.assumeValid)!==!0&&(e==null?void 0:e.assumeValidSDL)!==!0&&nb(i);const a=tb({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,e);if(a.astNode==null)for(const u of a.types)switch(u.name){case"Query":a.query=u;break;case"Mutation":a.mutation=u;break;case"Subscription":a.subscription=u;break}const o=[...a.directives,...qi.filter(u=>a.directives.every(l=>l.name!==u.name))];return new Ad({...a,directives:o})}function ob(i,e){const t=yO(i,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return rb(t,{assumeValidSDL:void 0,assumeValid:void 0})}function ab(i){const e=new Map;return ub(i,t=>{Wn(t)&&sb(t,a=>{const o=Lu(a.type);bu(e,o).references.push({kind:Sr.FIELD,parent:t,by:a}),lb(a,l=>{const c=Lu(l.type);bu(e,c).references.push({kind:Sr.ARGUMENT,field:a,type:t,by:l})})}),qe(t)&&t.getTypes().forEach(a=>{bu(e,a).references.push({kind:Sr.UNION,by:t})})}),new $C(e)}function ub(i,e){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||e(t)})}function sb(i,e){Object.entries(i.getFields()).forEach(([,t])=>{e(t)})}function lb(i,e){Object.entries(i.args).forEach(([,t])=>{e(t)})}function bu(i,e){let t=i.get(e.name);return t||(t={references:[]},i.set(e.name,t)),t}function Lu(i){return Dn(i)||he(i)?Lu(i.ofType):i}const Ec=`
type Query {
  me: User
  userClaims: [KeyValuePairOfStringAndString!]
  """Returns account information"""
  account: Account
  allAccountEntities(searchValue: String!, includeContacts: Boolean, where: AccountEntityFilterInput, order: [AccountEntitySortInput!]): [AccountEntity!]
  """Users associates with an account"""
  users(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [UserSortInput!]
  ): UserConnection
  """Returns specific user"""
  user(
    """ID of user"""
    id: String!
  ): User
  """Returns active account plans"""
  allAccountPlans(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: AccountPlanFilterInput
    order: [AccountPlanSortInput!]
  ): AccountPlanConnection
  """Returns active account plans"""
  checkAddOnHistory(id: String!): Boolean
  """Returns specific account payment method"""
  accountPaymentMethod: PaymentMethod
  """Returns account invoices"""
  accountInvoices(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [AccountInvoiceInfoSortInput!]
  ): AccountInvoiceInfoConnection
  """Returns specific account invoice"""
  accountInvoice(
    """ID of invoice"""
    id: String!
  ): AccountInvoiceInfo
  """Returns account security groups"""
  securityRoles(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: SecurityRoleFilterInput
    order: [SecurityRoleSortInput!]
  ): SecurityRoleConnection
  """Returns specific account security group"""
  securityRole(id: String!): SecurityRole
  allAccountPlanStats(startUtc: DateTime, endUtc: DateTime, where: AccountOverallStatsFilterInput, order: [AccountOverallStatsSortInput!]): [AccountOverallStats!]
  accountMonthlyGrowthStats: AccountListGrowthStats
  totalContactsByDay(
    input: StatsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TotalContactsByDayFilterInput
    order: [TotalContactsByDaySortInput!]
  ): TotalContactsByDayConnection
  totalEmailsByDay(
    input: StatsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TotalEmailsByDayFilterInput
    order: [TotalEmailsByDaySortInput!]
  ): TotalEmailsByDayConnection
  accountDomain(id: String!): AccountDomain
  accountDomains(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: AccountDomainFilterInput
    order: [AccountDomainSortInput!]
  ): AccountDomainConnection
  permissions(where: PermissionFilterInput, order: [PermissionSortInput!]): [Permission!]
  userInvites(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: InviteFilterInput
    order: [InviteSortInput!]
  ): InviteConnection
  servicePlan(id: String!): ServicePlan
  servicePlans(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: ServicePlanFilterInput
    order: [ServicePlanSortInput!]
  ): ServicePlanConnection
  systemTemplates(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [TemplateInformationSortInput!]
    where: TemplateInformationFilterInput
  ): TemplateInformationConnection
  systemTemplate(id: String!): Template
  templates(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TemplateInformationFilterInput
    order: [TemplateInformationSortInput!]
  ): TemplateInformationConnection
  template(id: String!): Template
  templateTxVariables(input: GetTemplateTxVariablesInput!): [String!]
  templateContent(input: GetTemplateContentInput!): [TemplateContent!]
  templateVersions(id: String!): TemplateVersions
  tags(
    entityType: EntityType
    templateType: TemplateType
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TagFilterInput
    order: [TagSortInput!]
  ): TagConnection
  audience(id: String!): Audience
  audiences(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: AudienceInfoFilterInput
    order: [AudienceInfoSortInput!]
  ): AudienceInfoConnection
  audienceStatsByDay(
    input: GetAudienceStatsByDayInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: AudienceStatsByDayFilterInput
    order: [AudienceStatsByDaySortInput!]
  ): AudienceStatsByDayConnection
  audienceDataField(id: String!): DataField
  audienceDataFields(
    audienceId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: DataFieldFilterInput
    order: [DataFieldSortInput!]
  ): DataFieldConnection
  audienceDataFieldCategories(
    audienceId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: DatafieldCategoryFilterInput
    order: [DatafieldCategorySortInput!]
  ): DatafieldCategoryConnection
  audienceExport(input: GetExportInput!): Export
  audienceExports(
    audienceId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: ExportFilterInput
    order: [ExportSortInput!]
  ): ExportConnection
  audienceGroup(input: GetGroupInput!): Group
  audienceGroups(
    audienceId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: AudienceGroupInfoFilterInput
    order: [AudienceGroupInfoSortInput!]
  ): AudienceGroupInfoConnection
  audienceImport(input: GetImportInput!): Import
  audienceImports(
    audienceId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: ImportFilterInput
    order: [ImportSortInput!]
  ): ImportConnection
  contactConversations(
    contactId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: ContactConversationFilterInput
    order: [ContactConversationSortInput!]
  ): ContactConversationConnection
  contactNotes(
    contactId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: ContactNoteFilterInput
    order: [ContactNoteSortInput!]
  ): ContactNoteConnection
  contact(input: GetContactInput!): Contact
  contactJourneyGoals(
    input: GetAllContactGoalsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: ContactJourneyGoalFilterInput
    order: [ContactJourneyGoalSortInput!]
  ): ContactJourneyGoalConnection
  contactJourneyConversions(
    input: GetAllContactConversionsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: ContactJourneyConversionFilterInput
    order: [ContactJourneyConversionSortInput!]
  ): ContactJourneyConversionConnection
  contacts(
    input: GetAllContactsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [ContactInfoSortInput!]
  ): ContactInfoConnection
  contactEvents(
    input: AllSubscriberEventsByDayInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: SubscriberEventStatsFilterInput
    order: [SubscriberEventStatsSortInput!]
  ): SubscriberEventStatsConnection
  form(input: GetFormInput!): AudienceForm
  forms(
    audienceId: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: FormInfoFilterInput
    order: [FormInfoSortInput!]
  ): FormInfoConnection
  formActionStats(input: GetActionStatsInput!): [ActionStats!]
  formStats(input: GetStatsInput!): StatsResponse
  formResponses(
    id: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: SubmissionResponseFilterInput
    order: [SubmissionResponseSortInput!]
  ): SubmissionResponseConnection
  formQuestion(input: GetQuestionInput!): Question
  formQuestions(
    id: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: QuestionInfoFilterInput
    order: [QuestionInfoSortInput!]
  ): QuestionInfoConnection
  folders(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: FolderFilterInput
    order: [FolderSortInput!]
  ): FolderConnection
  file(id: String!): File
  files(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: FileInfoFilterInput
    order: [FileInfoSortInput!]
  ): FileInfoConnection
  fileStorageStatsByDay(
    input: StatsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: FileStorageStatsByDayFilterInput
    order: [FileStorageStatsByDaySortInput!]
  ): FileStorageStatsByDayConnection
  article(articleId: String!): Article
  articleContent(input: GetArticleContentInput!): Article!
  contentBlock(id: String!): ContentBlock
  contentBlockContent(input: GetContentBlockContentInput!): ContentBlock
  campaign(id: String!): Campaign
  campaignLinks(id: String!): [CampaignLink!]
  campaigns(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: CampaignInfoFilterInput
    order: [CampaignInfoSortInput!]
  ): CampaignInfoConnection
  campaignRecipients(
    id: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: ContactFilterInput
    order: [ContactSortInput!]
  ): ContactConnection
  campaignDataFields(id: String!): [DataField!]
  contactCount(id: String!): Int
  rSSFeed(url: String!): RSSFeed
  allCampaignCombinationStats(input: CampaignCombinationStatsInput!): [CampaignCombinationStats!]
  allCampaignBounceTypeByDomainStats(input: GetCampaignBounceTypeByDomainStatsInput!): [CampaignBounceTypeByDomainStats!]
  allCampaignBounceTypeStats(input: CampaignStatsInput!): [CampaignBounceTypeStats!]
  allCampaignDeviceStats(input: CampaignStatsInput!): [CampaignDeviceStats!]
  allCampaignSoftwareStats(input: CampaignStatsInput!): [CampaignSoftwareStats!]
  allCampaignLinkStats(input: CampaignStatsInput!): [CampaignLinkStats!]!
  allCampaignSocialShareStats(input: CampaignStatsInput!): [CampaignSocialShareStats!]
  campaignStats(input: CampaignStatsInput!): CampaignStats
  """
  SortColumn can be set to 'emailaddr', 'logcount', 'email', or 'events'.
  """
  allCampaignContactEventTypeStats(input: GetCampaignContactEventTypeStatsInput!): [CampaignContactEventTypeStats!]
  campaignHistoryStats(input: CampaignHistoryInput!): CampaignHistory
  campaignContentVariationVersions(
    input: GetContentVariationVersionsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: HistoryFilterInput
    order: [HistorySortInput!]
  ): HistoryConnection
  campaignContentVariation(input: GetContentVariationInput!): CampaignVariationContent
  videoThumbnail(input: GetVideoThumbnailInput!): String
  headers: [KeyValuePairOfStringAndStringValues!]
  countries(where: CountryFilterInput, order: [CountrySortInput!]): [Country!]
  states(where: StateFilterInput, order: [StateSortInput!]): [State!]
  languages(where: LanguageInfoFilterInput, order: [LanguageInfoSortInput!]): [LanguageInfo!]
  survey(id: String!, campaignId: String): Survey
  systemSurvey(id: String!): Survey
  surveys(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: SurveyInfoFilterInput
    order: [SurveyInfoSortInput!]
  ): SurveyInfoConnection
  systemSurveys(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: SurveyInfoFilterInput
    order: [SurveyInfoSortInput!]
  ): SurveyInfoConnection
  surveyActionStats(input: GetSurveyActionStatsInput!): [ActionStats!]
  surveyStats(input: GetSurveyStatsInput!): StatsResponse
  surveyResponses(
    id: String!
    campaignId: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: SubmissionResponseFilterInput
    order: [SubmissionResponseSortInput!]
  ): SubmissionResponseConnection
  surveyQuestion(input: GetSurveyQuestionInput!): Question
  surveyQuestions(
    id: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: QuestionInfoFilterInput
    order: [QuestionInfoSortInput!]
  ): QuestionInfoConnection
  landingPage(id: String!): LandingPage
  systemLandingPage(id: String!): LandingPage
  landingPages(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: LandingPageInfoFilterInput
    order: [LandingPageInfoSortInput!]
  ): LandingPageInfoConnection
  systemLandingPages(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: LandingPageInfoFilterInput
    order: [LandingPageInfoSortInput!]
  ): LandingPageInfoConnection
  landingPageActionStats(input: GetLandingPageActionStatsInput!): [ActionStats!]
  landingPageStats(input: GetLandingPageStatsInput!): StatsResponse
  transaction(id: String!): [Transaction]!
  allTransactions(
    eventType: EmailEventType
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionFilterInput
    order: [TransactionSortInput!]
  ): TransactionConnection
  transactionEvents(
    id: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionEventFilterInput
    order: [TransactionEventSortInput!]
  ): TransactionEventConnection
  transactionGroupNames(where: StringOperationFilterInput): [String!]
  transactionActivity(
    startUtc: DateTime!
    endUtc: DateTime!
    toEmailAddress: String
    fromEmailAddress: String
    groups: [String!]
    tags: [String!]
    eventTypes: [EmailEventType!]
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionActivityFilterInput
    order: [TransactionActivitySortInput!]
  ): TransactionActivityConnection
  transactionPerformance(startUtc: DateTime!, endUtc: DateTime!, groups: [String!], tags: [String!]): TransactionPerformace
  transactionPerformanceBounceStats(startUtc: DateTime!, endUtc: DateTime!, groups: [String!], tags: [String!]): [TransactionPerformanceBounceStats!]
  transactionPerformanceLinkStats(
    startUtc: DateTime!
    endUtc: DateTime!
    groups: [String!]
    tags: [String!]
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionPerformanceLinkStatsFilterInput
    order: [TransactionPerformanceLinkStatsSortInput!]
  ): TransactionPerformanceLinkStatsConnection
  transactionPerformanceDeviceStats(startUtc: DateTime!, endUtc: DateTime!, groups: [String!], tags: [String!]): [TransactionPerformanceDeviceStats!]
  transactionPerformanceSoftwareStats(startUtc: DateTime!, endUtc: DateTime!, groups: [String!], tags: [String!]): [TransactionPerformanceSoftwareStats!]
  transactionDeviceStats(startUtc: DateTime!, endUtc: DateTime!): [TransactionDeviceStats!]
  transactionSoftwareStats(startUtc: DateTime!, endUtc: DateTime!): [TransactionSoftwareStats!]
  transactionFromDomains(
    startUtc: DateTime!
    endUtc: DateTime!
    domains: [String!]
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionFromDomainStatsFilterInput
    order: [TransactionFromDomainStatsSortInput!]
  ): TransactionFromDomainStatsConnection
  transactionRecipientDomains(
    startUtc: DateTime!
    endUtc: DateTime!
    domains: [String!]
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionDomainStatsFilterInput
    order: [TransactionDomainStatsSortInput!]
  ): TransactionDomainStatsConnection
  transactionRecipientBounceDomains(
    startUtc: DateTime!
    endUtc: DateTime!
    domains: [String!]
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionBounceDomainFilterInput
    order: [TransactionBounceDomainSortInput!]
  ): TransactionBounceDomainConnection
  transactionTopRecipientBounceDomains(
    startUtc: DateTime!
    endUtc: DateTime!
    domains: [String!]
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionTopBounceDomainStatsFilterInput
    order: [TransactionTopBounceDomainStatsSortInput!]
  ): TransactionTopBounceDomainStatsConnection
  transactionTrends(
    startUtc: DateTime!
    endUtc: DateTime!
    groups: [String!]
    tags: [String!]
    includeByDay: Boolean
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionStatsFilterInput
    order: [TransactionStatsSortInput!]
  ): TransactionStatsConnection
  transactionTrendsLinks(
    startUtc: DateTime!
    endUtc: DateTime!
    groups: [String!]
    tags: [String!]
    includeByDay: Boolean
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: TransactionLinkStatsFilterInput
    order: [TransactionLinkStatsSortInput!]
  ): TransactionLinkStatsConnection
  journey(id: String!): Journey
  journeys(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [JourneyInfoSortInput!]
    where: JourneyInfoFilterInput
  ): JourneyInfoConnection
  systemJourneys(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [JourneyInfoSortInput!]
    where: JourneyInfoFilterInput
  ): JourneyInfoConnection
  journeyContacts(
    input: GetAllJourneyContactsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: JourneyContactFilterInput
    order: [JourneyContactSortInput!]
  ): JourneyContactConnection
  journeyContactStats(input: JourneyStatsInput!): JourneyContactStats
  journeyContactStatsByDay(
    input: JourneyStatsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: JourneyContactStatsByDayFilterInput
    order: [JourneyContactStatsByDaySortInput!]
  ): JourneyContactStatsByDayConnection
  journeyTags(
    input: JourneyStatsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: JourneyTagStatsFilterInput
    order: [JourneyTagStatsSortInput!]
  ): JourneyTagStatsConnection
  journeyDurations(
    input: JourneyStatsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: JourneyDurationFilterInput
    order: [JourneyDurationSortInput!]
  ): JourneyDurationConnection
  journeyCampaignStats(input: GetJourneyCampaignStatsInput!): [JourneyCampaignStats!]
  journeyConversionStatsByDay(id: String!, conversionId: String!, startUtc: DateTime!, endUtc: DateTime!, hourOffset: Int, minuteOffset: Int): [JourneyActivity!]
  journeyGoalStatsByDay(id: String!, goalId: String!, startUtc: DateTime!, endUtc: DateTime!, hourOffset: Int, minuteOffset: Int): [JourneyActivity!]
  journeyEntriesByDay(id: String!, nodeId: String, startUtc: DateTime!, endUtc: DateTime!, hourOffset: Int, minuteOffset: Int): [JourneyActivity!]
  journeyCompletesByDay(id: String!, nodeId: String, startUtc: DateTime!, endUtc: DateTime!, hourOffset: Int, minuteOffset: Int): [JourneyActivity!]
  journeyExitsByDay(id: String!, nodeId: String, startUtc: DateTime!, endUtc: DateTime!, hourOffset: Int, minuteOffset: Int): [JourneyActivity!]
  journeySiteNotifications(id: String!, startUtc: DateTime!, endUtc: DateTime!, hourOffset: Int, minuteOffset: Int): [JourneySiteNotification!]
  journeySiteNotificationStats(id: String!, journeyId: String!, startUtc: DateTime!, endUtc: DateTime!, hourOffset: Int, minuteOffset: Int): JourneySiteNotificationStats
  journeyNode(input: GetJourneyNodeInput!): JourneyNode
  journeySiteNotification(input: GetJourneySiteNotificationInput!): JourneySiteNotificationInfo
  journeyNodes(
    journeyId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [JourneyNodeInfoSortInput!]
    where: JourneyNodeInfoFilterInput
  ): JourneyNodeInfoConnection
  customApiEvent(id: String!): CustomApiEvent
  customApiEvents(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: CustomApiEventFilterInput
    order: [CustomApiEventSortInput!]
  ): CustomApiEventConnection
  sMSCampaign(id: String!): SMSCampaign
  sMSCampaigns(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: SMSCampaignFilterInput
    order: [SMSCampaignSortInput!]
  ): SMSCampaignConnection
  journeyGoal(id: String!): JourneyGoal
  journeyGoals(
    journeyId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: JourneyGoalFilterInput
    order: [JourneyGoalSortInput!]
  ): JourneyGoalConnection
  journeyGoalContacts(
    input: GetJourneyGoalContactsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [JourneyGoalContactSortInput!]
    where: JourneyGoalContactFilterInput
  ): JourneyGoalContactConnection
  journeyConversion(id: String!): JourneyConversion
  journeyConversions(
    journeyId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: JourneyConversionFilterInput
    order: [JourneyConversionSortInput!]
  ): JourneyConversionConnection
  journeyConversionContacts(
    input: GetJourneyConversionContactsInput!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [JourneyConversionContactSortInput!]
    where: JourneyConversionContactFilterInput
  ): JourneyConversionContactConnection
  accountSuppressionFilter(id: String!): AccountSuppressionFilter
  accountSuppressionFilters(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: AccountSuppressionFilterFilterInput
    order: [AccountSuppressionFilterSortInput!]
  ): AccountSuppressionFilterConnection
  audienceSavedSearch(input: GetSavedSearchInput!): SavedSearch
  audienceSavedSearches(
    audienceId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: SavedSearchInfoFilterInput
    order: [SavedSearchInfoSortInput!]
  ): SavedSearchInfoConnection
  view(id: String!): View
  views(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [ViewSortInput!]
    where: ViewFilterInput
  ): ViewConnection
  accountApiKey(id: String!): AccountApiKeyInfo
  allAccountApiKeys(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: AccountApiKeyInfoFilterInput
    order: [AccountApiKeyInfoSortInput!]
  ): AccountApiKeyInfoConnection
  webhook(id: String!): Webhook
  allWebhooks(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [WebhookSortInput!]
    where: WebhookFilterInput
  ): WebhookConnection
  allUserActivity(
    userId: String
    startUtc: DateTime!
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: UserActivityFilterInput
    order: [UserActivitySortInput!]
  ): UserActivityConnection
  userNotification(id: String!): UserAccountNotification
  allUserNotifications(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: UserAccountNotificationFilterInput
    order: [UserAccountNotificationSortInput!]
  ): UserAccountNotificationConnection
  allCustomReports(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: CustomReportFilterInput
    order: [CustomReportSortInput!]
  ): CustomReportConnection
  customReport(id: String!): CustomReport!
  customReportJob(id: String!): CustomReportJob!
  allPlans(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: ItemFilterInput
    order: [ItemSortInput!]
  ): ItemConnection
  aIRequest(id: String!): AIRequest
  allAIRequests(
    startUtc: DateTime!
    endUtc: DateTime!
    questionKeyWord: String
    contentTypes: [AIContentType!]
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    order: [AIRequestSortInput!]
  ): AIRequestConnection
  artitelliBalance: ArtitelliBalance
  allExports(
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: AccountExportFilterInput
    order: [AccountExportSortInput!]
  ): AccountExportConnection
  export(id: String!): AccountExport
  accountAutoRetryRule(
    id: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """Returns the last _n_ elements from the list."""
    last: Int
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    where: AccountAutoRetryRuleFilterInput
    order: [AccountAutoRetryRuleSortInput!]
  ): AccountAutoRetryRuleConnection
}


type Mutation {
  """Create a new account"""
  createAccount(input: CreateAccountInput!): Account
  """
  Update account information including address information and default settings
  """
  updateAccount(input: UpdateAccountInput!): Account
  checkAlias(input: CheckAliasInput!): Boolean
  """
  Create a new security group to an account. Refer to the **CreateUserAccountGroup** mutation to associate an existing user with the new security group.
  """
  createSecurityRole(input: CreateSecurityRoleInput!): SecurityRole
  """
  Update an account security group including permissions and subscriber list access.
  """
  updateSecurityRole(input: UpdateSecurityRoleInput!): SecurityRole
  """Delete an account security group. Only the group is deleted."""
  deleteSecurityRole(id: String!): Boolean
  """Associate an user with an account security group."""
  createUserSecurityRole(input: CreateUserSecurityRoleInput!): SecurityRole
  """Removes a user from an account security group."""
  deleteUserSecurityRole(input: DeleteUserSecurityRoleInput!): SecurityRole
  downgradeCheck(planType: PlanType!): DowngradeCheckResult
  updateAccountPlanSettings(allowOverages: Boolean!, allowAutoScaling: Boolean!, planType: PlanType!): Boolean
  """
  Change an active plan to a new plan. If upgrading, the payment method will be billing and the account will be upgraded immediately. If downgrading, this will submit a request, which will automatically be performed at the beginning of the next billing cycle.
  """
  changeAccountPlan(newPlanId: String!, allowOverages: Boolean!, allowAutoScaling: Boolean!, itemCount: Int!, couponCode: String, addOns: [AddOnInfoInput!]): ChgPlanResult
  """
  Change an account's add-ons. If upgrading, the payment method will be billed and the add-on will be upgraded immediately. If downgrading, this will submit a request, which will automatically be performed at the beginning of the next billing cycle.
  """
  changeAccountAddOn(id: String!, quantity: Int, storageDays: Int): ChgPlanResult
  """Calculate the prorated cost to upgrade a current plan to a new plan."""
  costEstimator(newPlanId: String!, allowOverages: Boolean!, itemCount: Int!, couponCode: String, addOns: [AddOnInfoInput!]): Estimate
  """Calculate the prorated cost to upgrade a current plan to a new plan."""
  addOnCostEstimator(id: String!, quantity: Int!, storageDays: Int): AddOnPriceSummary
  """
  Cancel a previous requested plan downgrade at the next billing cycle. This can be done at any time before the next billing cycle.
  """
  cancelAccountPlanDowngrade(planType: PlanType!): Boolean
  """Cancel account plan"""
  cancelAccountPlan(planType: PlanType!, reason: String, feedback: String, rating: Int): Boolean
  """Cancel account plan now (internal use only)"""
  cancelAccountPlanNow(planType: PlanType!, reason: String, feedback: String, rating: Int): Boolean
  """Cancel account add-on"""
  cancelAccountAddOn(id: String!): Boolean
  """Create a new payment method to an account."""
  createAccountPaymentMethod(input: CreatePaymentMethodInput!): PaymentMethod
  """Update an existing account payment method.")]"""
  updateAccountPaymentMethod(input: UpdatePaymentMethodInput!): PaymentMethod
  createAccountDomain(input: CreateDomainInput!): AccountDomain
  updateAccountDomain(input: UpdateDomainInput!): AccountDomain
  verifyAccountDomain(id: String!): AccountDomain
  deleteAccountDomain(id: String!): Boolean
  updateUser(input: UpdateUserInput!): User
  requestAccountAccess(input: RequestAccountAccessInput!): Boolean
  deleteAccountUser(input: DeleteAccountUserInput!): Boolean
  deleteUser: Boolean
  createUserInvite(input: CreateUserInviteInput!): Invite
  resendUserInvite(id: String!): Invite
  """
  Processes an existing user invite and added the user to the invite's associated account
  """
  processUserInvite(id: String!): Invite
  revokeUserInvite(id: String!): Invite
  createTag(input: CreateTagInput!): Tag
  updateTag(input: UpdateTagInput!): Tag
  deleteTag(input: DeleteTagInput!): Boolean
  createTransaction(input: CreateTransactionInput!): [TransactionResponse!]
  createTemplate(input: CreateTemplateInput!): Template
  updateTemplate(input: UpdateTemplateInput!): Template
  previewTemplate(input: PreviewTemplateInput!): [PreviewTemplateOutput!]
  previewSystemTemplate(input: PreviewSystemTemplateInput!): [PreviewTemplateOutput!]
  deleteTemplate(id: String!): Boolean
  sendTemplateTest(input: SendTemplateTestInput!): Boolean
  createAudience(input: CreateAudienceInput!): Audience
  updateAudience(input: UpdateAudienceInput!): Audience
  recalculateAudienceStats(id: String!): Audience
  previewAudienceDoubleOptInEmail(input: PreviewDoubleOptInInput!): String
  createAudienceSecurityRole(input: CreateAudienceSecurityRoleInput!): Audience
  deleteAudience(id: String!): Boolean
  deleteAudienceSecurityRole(input: DeleteAudienceSecurityRoleInput!): Audience
  createAudienceDataField(input: CreateDataFieldInput!): DataField
  updateAudienceDataField(input: UpdateDataFieldInput!): DataField
  deleteAudienceDataField(input: DeleteDataFieldInput!): Boolean
  createAudienceDataFieldCategory(input: CreateDataFieldCategoryInput!): DatafieldCategory
  updateAudienceDataFieldCategory(input: UpdateDataFieldCategoryInput!): DatafieldCategory
  deleteAudienceDataFieldCategory(input: DeleteDataFieldCategoryInput!): Boolean
  scheduleExport(input: CreateExportInput!): Boolean
  createAudienceGroup(input: CreateGroupInput!): Group
  updateAudienceGroup(input: UpdateGroupInput!): Group
  deleteAudienceGroup(input: DeleteGroupInput!): Boolean
  scheduleAudienceImport(input: CreateImportInput!): Boolean
  createContactConversation(input: CreateContactConversationInput!): Contact
  createContactNote(input: CreateContactNoteInput!): Contact
  deleteContactNote(input: DeleteContactNoteInput!): Boolean
  createContact(input: CreateContactInput!): Contact
  createContactCustomEvent(id: String!, key: String!): Boolean
  updateContact(input: UpdateContactInput!): Contact
  updateContactTags(input: UpdateContactTagsInput!): Boolean
  updateContactStatus(input: UpdateContactStatusInput!): Boolean
  resetContactBounceCounts(input: ResetBounceCountsInput!): Boolean
  enterContactIntoJourney(id: String!, journeyId: String!): Boolean
  exitContactFromJourney(id: String!, journeyId: String!): Boolean
  resendContactConfirmationEmail(input: ResendConfEmailInput!): Boolean
  createGroupContact(input: CreateGroupContactInput!): Contact
  deleteGroupContact(input: DeleteGroupContactInput!): Contact
  deleteContact(input: DeleteContactInput!): Boolean
  createForm(input: CreateFormInput!): AudienceForm
  updateForm(input: UpdateFormInput!): AudienceForm
  checkPathName(pathName: String!): Boolean
  exportFormSource(input: ExportFormSourceInput!): FormSource
  previewFormEmail(input: PreviewEmailInput!): String
  deleteForm(input: DeleteFormInput!): Boolean
  createFormQuestion(input: CreateQuestionInput!): Question
  updateFormQuestion(input: UpdateQuestionInput!): Question
  deleteFormQuestion(input: DeleteQuestionInput!): Boolean
  createSurvey(input: CreateSurveyInput!): Survey
  updateSurvey(input: UpdateSurveyInput!): Survey
  previewSurvey(id: String): String
  previewSurveyEmail(input: PreviewEmailInput!): String
  deleteSurvey(id: String!): Boolean
  createSurveyQuestion(input: CreateQuestionInput!): Question
  updateSurveyQuestion(input: UpdateQuestionInput!): Question
  deleteSurveyQuestion(input: DeleteQuestionInput!): Boolean
  createLandingPage(input: CreateLandingPageInput!): LandingPage
  updateLandingPage(input: UpdateLandingPageInput!): LandingPage
  embedLandingPageForm(id: String!): Boolean
  previewLandingPage(id: String): String
  exportLandingPageSource(input: ExportFormSourceInput!): FormSource
  deleteLandingPage(id: String!): Boolean
  createFolder(input: CreateFolderInput!): Folder
  updateFolder(input: UpdateFolderInput!): Folder
  deleteFolder(id: String!): Boolean
  createUrlFile(input: CreateUrlFileInput!): File
  updateFile(input: UpdateFileInput!): File
  deleteFile(id: String!): Boolean
  createArticle(input: CreateArticleInput!): Article
  updateArticle(input: UpdateArticleInput!): Article
  previewArticle(input: PreviewArticleInput!): [FileContent!]
  deleteArticle(id: String!): Boolean
  publishArticle(id: String!): Boolean
  unpublishArticle(id: String!): Boolean
  createCampaign(input: CreateCampaignInput!): Campaign
  previewCampaign(input: PreviewCampaignInput!): CampaignPreview
  renderCampaignContentSource(input: RenderContentSourceInput!): CampaignContentSource
  sendCampaignTest(input: SendCampaignTestInput!): Boolean
  updateCampaign(input: UpdateCampaignInput!): Campaign
  markCampaignAsReady(id: String!): Boolean
  markCampaignAsNotReady(id: String!): Boolean
  pauseCampaign(id: String!): Boolean
  stopCampaign(id: String!): Boolean
  resumeCampaign(id: String!): Boolean
  deleteCampaign(id: String!): Boolean
  scheduleCampaign(input: ScheduleCampaignInput!): Boolean
  sendCampaignCopy(id: String!, sendsUtc: [DateTime!]!): Boolean
  selectCampaignMvWinner(input: SelectMvWinnerInput!): Boolean
  validateRSSFeed(url: String!): Boolean
  createCampaignContentVariation(input: CreateContentVariationInput!): CampaignVariationContent
  updateCampaignContentVariation(input: UpdateContentVariationInput!): CampaignVariationContent
  deleteCampaignContentVariation(input: DeleteContentVariationInput!): Boolean
  createContentBlock(input: CreateContentBlockInput!): ContentBlock
  updateContentBlock(input: UpdateContentBlockInput!): ContentBlock
  previewContentBlock(input: PreviewContentBlockInput!): [FileContent!]
  deleteContentBlock(id: String!): Boolean
  publishContentBlock(id: String!): Boolean
  unpublishContentBlock(id: String!): Boolean
  verifyUrl(url: String!): Boolean
  createJourney(input: CreateJourneyInput!): Journey
  updateJourney(input: UpdateJourneyInput!): Journey
  startJourney(id: String!): Boolean
  stopJourney(id: String!): Boolean
  resetJourney(id: String!): Boolean
  deleteJourney(id: String!): Boolean
  createJourneyActionAddContactNote(input: CreateActionAddContactNoteInput!): ActionAddContactNote
  updateJourneyActionAddContactNote(input: UpdateActionAddContactNoteInput!): ActionAddContactNote
  createJourneyActionConvertContact(input: CreateActionConvertContactInput!): ActionConvertContact
  updateJourneyActionConvertContact(input: UpdateActionConvertContactInput!): ActionConvertContact
  createJourneyActionEvaluateGoal(input: CreateActionEvaluateGoalInput!): ActionEvaluateGoal
  updateJourneyActionEvaluateGoal(input: UpdateActionEvaluateGoalInput!): ActionEvaluateGoal
  createJourneyActionSendEmail(input: CreateActionSendEmailInput!): ActionSendEmail
  updateJourneyActionSendEmail(input: UpdateActionSendEmailInput!): ActionSendEmail
  createJourneyActionSendNotificationEmail(input: CreateActionSendNotificationEmailInput!): ActionSendNotifiactionEmail
  updateJourneyActionSendNotificationEmail(input: UpdateActionSendNotificationEmailInput!): ActionSendNotifiactionEmail
  createJourneyActionSendSMS(input: CreateActionSendSMSInput!): ActionSendSMS
  updateJourneyActionSendSMS(input: UpdateActionSendSMSInput!): ActionSendSMS
  createJourneyActionSiteNotification(input: CreateActionSiteNotificationInput!): ActionSiteNotification
  updateJourneyActionSiteNotification(input: UpdateActionSiteNotificationInput!): ActionSiteNotification
  createJourneyActionUpdateContactGroup(input: CreateActionUpdateContactGroupInput!): ActionUpdateContactGroup
  updateJourneyActionUpdateContactGroup(input: UpdateActionUpdateContactGroupInput!): ActionUpdateContactGroup
  createJourneyActionUpdateContactProfile(input: CreateActionUpdateContactProfileInput!): ActionUpdateContactProfile
  updateJourneyActionUpdateContactProfile(input: UpdateActionUpdateContactProfileInput!): ActionUpdateContactProfile
  createJourneyActionUpdateContactStatus(input: CreateActionUpdateContactStatusInput!): ActionUpdateContactStatus
  updateJourneyActionUpdateContactStatus(input: UpdateActionUpdateContactStatusInput!): ActionUpdateContactStatus
  createJourneyActionUpdateContactTag(input: CreateActionUpdateContactTagInput!): ActionUpdateContactTag
  updateJourneyActionUpdateContactTag(input: UpdateActionUpdateContactTagInput!): ActionUpdateContactTag
  createJourneyActionUpdateFacebookAudience(input: CreateActionUpdateFacebookAudienceInput!): ActionUpdateFacebookAudience
  updateJourneyActionUpdateFacebookAudience(input: UpdateActionUpdateFacebookAudienceInput!): ActionUpdateFacebookAudience
  createJourneyActionUpdateJourneyContact(input: CreateActionUpdateJourneyContactInput!): ActionUpdateJourneyContact
  updateJourneyActionUpdateJourneyContact(input: UpdateActionUpdateJourneyContactInput!): ActionUpdateJourneyContact
  createJourneyActionWebhook(input: CreateActionWebhookInput!): ActionWebhook
  updateJourneyActionWebhook(input: UpdateActionWebhookInput!): ActionWebhook
  createJourneyFlowWaitUntil(input: CreateFlowWaitUntilInput!): FlowWaitUntil
  updateJourneyFlowWaitUntil(input: UpdateFlowWaitUntilInput!): FlowWaitUntil
  createJourneyFlowWaitUntilCondition(input: CreateFlowWaitUntilConditionInput!): FlowWaitUntilCondition
  updateJourneyFlowWaitUntilCondition(input: UpdateFlowWaitUntilConditionInput!): FlowWaitUntilCondition
  createJourneyFlowWaitDateField(input: CreateFlowWaitDateFieldInput!): FlowWaitDateField
  updateJourneyFlowWaitDateField(input: UpdateFlowWaitDateFieldInput!): FlowWaitDateField
  createJourneyFlowWaitFieldChange(input: CreateFlowWaitFieldChangeInput!): FlowWaitFieldChange
  updateJourneyFlowWaitFieldChange(input: UpdateFlowWaitFieldChangeInput!): FlowWaitFieldChange
  createJourneyFlowDecisionSplit(input: CreateFlowDecisionSplitInput!): FlowDecisionSplit
  updateJourneyFlowDecisionSplit(input: UpdateFlowDecisionSplitInput!): FlowDecisionSplit
  createJourneyFlowRandomSplit(input: CreateFlowRandomSplitInput!): FlowRandomSplit
  updateJourneyFlowRandomSplit(input: UpdateFlowRandomSplitInput!): FlowRandomSplit
  createJourneyFlowEngagementSplit(input: CreateFlowEngagementSplitInput!): FlowEngagementSplit
  updateJourneyFlowEngagementSplit(input: UpdateFlowEngagementSplitInput!): FlowEngagementSplit
  createJourneyFlowJoin(input: CreateFlowJoinInput!): FlowJoin
  updateJourneyFlowJoin(input: UpdateFlowJoinInput!): FlowJoin
  createJourneyFlowGoTo(input: CreateFlowGoToInput!): FlowGoTo
  updateJourneyFlowGoTo(input: UpdateFlowGoToInput!): FlowGoTo
  createJourneyFlowPath(input: CreateFlowPathInput!): FlowPath
  updateJourneyFlowPath(input: UpdateFlowPathInput!): FlowPath
  deleteJourneyFlowPath(input: DeleteFlowPathInput!): Boolean
  createJourneyTriggerAudience(input: CreateTriggerAudienceInput!): TriggerAudience
  updateJourneyTriggerAudience(input: UpdateTriggerAudienceInput!): TriggerAudience
  createJourneyTriggerContactAdded(input: CreateTriggerContactAddedInput!): TriggerContactAdded
  updateJourneyTriggerContactAdded(input: UpdateTriggerContactAddedInput!): TriggerContactAdded
  createJourneyTriggerCampaign(input: CreateTriggerCampaignInput!): TriggerCampaign
  updateJourneyTriggerCampaign(input: UpdateTriggerCampaignInput!): TriggerCampaign
  createJourneyTriggerConversion(input: CreateTriggerConversionInput!): TriggerConversion
  updateJourneyTriggerConversion(input: UpdateTriggerConversionInput!): TriggerConversion
  createJourneyTriggerCustomEvent(input: CreateTriggerCustomEventInput!): TriggerCustomEvent
  updateJourneyTriggerCustomEvent(input: UpdateTriggerCustomEventInput!): TriggerCustomEvent
  createJourneyTriggerDate(input: CreateTriggerDateInput!): TriggerDate
  updateJourneyTriggerDate(input: UpdateTriggerDateInput!): TriggerDate
  createJourneyTriggerEcommerce(input: CreateTriggerEcommerceInput!): TriggerEcommerce
  updateJourneyTriggerEcommerce(input: UpdateTriggerEcommerceInput!): TriggerEcommerce
  createJourneyTriggerForm(input: CreateTriggerFormInput!): TriggerForm
  updateJourneyTriggerForm(input: UpdateTriggerFormInput!): TriggerForm
  createJourneyTriggerGoal(input: CreateTriggerGoalInput!): TriggerGoal
  updateJourneyTriggerGoal(input: UpdateTriggerGoalInput!): TriggerGoal
  createJourneyTriggerManualInclusion(input: CreateTriggerManualInclusionInput!): TriggerManualInclusion
  updateJourneyTriggerManualInclusion(input: UpdateTriggerManualInclusionInput!): TriggerManualInclusion
  createJourneyTriggerPage(input: CreateTriggerPageInput!): TriggerPage
  updateJourneyTriggerPage(input: UpdateTriggerPageInput!): TriggerPage
  createJourneyTriggerRss(input: CreateTriggerRssInput!): TriggerRss
  updateJourneyTriggerRss(input: UpdateTriggerRssInput!): TriggerRss
  createJourneyTriggerSurvey(input: CreateTriggerSurveyInput!): TriggerSurvey
  updateJourneyTriggerSurvey(input: UpdateTriggerSurveyInput!): TriggerSurvey
  createJourneyTriggerWebpage(input: CreateTriggerWebpageInput!): TriggerWebPage
  updateJourneyTriggerWebpage(input: UpdateTriggerWebpageInput!): TriggerWebPage
  createJourneyTriggerTransaction(input: CreateTriggerTransactionInput!): TriggerTransaction
  updateJourneyTriggerTransaction(input: UpdateTriggerTransactionInput!): TriggerTransaction
  moveJourneyNode(input: MoveJourneyNodeInput!): Boolean
  copyJourneyNode(input: CopyJourneyNodeInput!): Boolean
  deleteJourneyNode(input: DeleteJourneyNodeInput!): Boolean
  createCustomApiEvent(input: CreateCustomApiEventInput!): CustomApiEvent
  updateCustomApiEvent(input: UpdateCustomApiEventInput!): CustomApiEvent
  deleteCustomApiEvent(id: String!): Boolean
  createSMSCampaign(input: CreateSMSCampaignInput!): SMSCampaign
  updateSMSCampaign(input: UpdateSMSCampaignInput!): SMSCampaign
  deleteSMSCampaign(id: String!): Boolean
  createJourneyGoal(input: CreateJourneyGoalInput!): JourneyGoal
  updateJourneyGoal(input: UpdateJourneyGoalInput!): JourneyGoal
  deleteJourneyGoal(id: String!): Boolean
  createJourneyConversion(input: CreateJourneyConversionInput!): JourneyConversion
  updateJourneyConversion(input: UpdateJourneyConversionInput!): JourneyConversion
  deleteJourneyConversion(id: String!): Boolean
  createAccountSuppressionFilter(input: CreateSuppressionFilterInput!): AccountSuppressionFilter
  deleteAccountSuppressionFilter(id: String!): Boolean
  createAccountApiKey(input: CreateAccountApiKeyInput!): AccountApiKey
  revokeAccountApiKey(id: String!): Boolean
  createAudienceSavedSearch(input: CreateSavedSearchInput!): SavedSearch
  updateAudienceSavedSearch(input: UpdateSavedSearchInput!): SavedSearch
  deleteAudienceSavedSearch(input: DeleteSavedSearchInput!): Boolean
  createView(input: CreateViewInput!): View
  updateView(input: UpdateViewInput!): View
  deleteView(id: String!): Boolean
  createWebhook(name: String!, description: String, events: [WebhookEventInput!]!, callBackUrl: String!, filter: ConditionGroupInput, integrationType: IntegrationType, dataSettings: WebhookDataSetting): Webhook
  updateWebhook(id: String!, name: String, description: String, events: [WebhookEventInput!], callBackUrl: String, enabled: Boolean, filter: ConditionGroupInput, integrationType: IntegrationType, dataSettings: WebhookDataSetting): Webhook
  deleteWebhook(id: String!): Boolean
  updateUserNotificationReadStatus(id: String!, isRead: Boolean!): Boolean
  markAllUserNotificationsAsRead: Boolean
  deleteUserNotification(id: String!): Boolean
  updateCustomReport(id: String!, note: String, distributionList: [String!], userIds: [String!]): CustomReport!
  changeCustomReportStatus(id: String!, isEnabled: Boolean!): Boolean!
  deleteCustomReport(id: String!): Boolean!
  deleteCustomReportJob(id: String!): Boolean!
  userFastFactVote(fastFactKey: String!, isLiked: Boolean): Boolean
  createAIRequest(input: CreateAIRequestInput!): AIRequest
  deleteAIRequest(id: String!): Boolean
  createExport(input: CreateAccountExportInput!): AccountExport
  createAccountAutoRetryRule(input: CreateAutoRetryRuleInput!): AccountAutoRetryRule
  updateAccountAutoRetryRule(input: UpdateAutoRetryRuleInput!): AccountAutoRetryRule
  deleteAccountAutoRetryRule(id: String!): Boolean
}


"""User who can access to Tarvent"""
type User {
  securityRoles: [SecurityRole!]!
  """Unique user ID"""
  id: String!
  """System status of user"""
  status: UserStatus!
  """
  User's status within the account. Only populated when getting a user/users within a specific account.
  """
  accountStatus: AccountUserStatus
  """First name"""
  firstName: String
  """Last name"""
  lastName: String
  """
  Optional business phone number used by support to contact user if needed
  """
  businessPhone: String
  """Email address used for notifications"""
  emailAddr: String!
  """Indicates if user is enrolled in Affiliate program"""
  isAffiliate: Boolean!
  """URL used for the Ambassador and Affiliate programs"""
  ambassadorUrl: String!
  """Indicates if multi-factor authentication is enabled"""
  mfaEnabled: Boolean!
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits. This is only set when getting users within an account.
  """
  isPartner: Boolean!
  """
  Indicates whether the user is a billing user for the account and should receive billing communication.
  """
  isBillingContact: Boolean!
  """Indicates whether the user should receive account level communication."""
  isAccountContact: Boolean!
  """
  Unique account id of the first active account the user is associated with
  """
  accountId: String
  """Collection of accounts the user is associated with"""
  accounts: [UserAccountInfo!]!
  """Collection of user settings"""
  settings: [UserSetting!]
  """Collection of permission"""
  permissions: [String!]!
  """Collection of notification preferences"""
  notificationPreferences: [UserNotificationPreference!]!
  """Date/time the user was created"""
  createdUtc: DateTime!
  """
  ID of user who created the user. Refer to the **user** query to get user information.
  """
  createdBy: String!
  """Date/time the user was last modified"""
  modifiedUtc: DateTime!
  """
  ID of user who last modified the user. Refer to the **user** query to get user information.
  """
  modifiedBy: String!
}


"""
Security role associated with an account used to specify user rights at a group level
"""
type SecurityRole {
  """Unique security group ID"""
  id: String!
  """Name of security group"""
  name: String
  """Collections of users associated with the security group"""
  users: [User!]!
  """Collections of permissions granted to the security group"""
  permissions: [Permission!]!
  """Number of users associated with the security group"""
  userCount: Int!
  """Description/purpose of security role"""
  description: String
  """Indicates whether security role is active or not"""
  isActive: Boolean!
  """
  Indicates whether security role is the administrators group. Only one role can be the administrators role.
  """
  isAdmin: Boolean!
  """Date/time the security role was created"""
  createdUtc: DateTime!
  """Id of user who created the security role"""
  createdBy: String
  """Date/time the security role was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the security role"""
  modifiedBy: String
  """Collection of audiences the security role has access to"""
  audiences: [SecurityRoleAudience]
}


"""Unique billing account"""
type Account {
  """Unique account id"""
  id: String!
  """Collections of settings"""
  settings: [AccountSetting!]
  """Collection of users associated with this account"""
  users: [User!]
  """
  User who owns the account. Refer to the **UpdateAccount** mutation to change the owner.
  """
  owner: User
  """Account status"""
  status: AccountStatus!
  """Default mail domain for the account."""
  defaultMailDomain: AccountDomain
  """Unique name to reference the account."""
  name: String!
  """Count of all users within the account."""
  userCount: Int!
  """Account payment status"""
  paymentStatus: PaymentStatus
  """Street address associated with the account."""
  streetAddress: String!
  """Street address 2 associated with the account."""
  streetAddress2: String
  """Address locality associated with the account."""
  addressLocality: String!
  """Address region associated with the account."""
  addressRegion: String!
  """Postal code associated with the account."""
  postalCode: String
  """Address country associated with the account."""
  addressCountry: String!
  """Phone number associated with the account."""
  phone: String!
  """Unique alias for tracking urls"""
  trackingAlias: String
  """Unique alias for pages urls (pages, surveys, and forms)"""
  pagesAlias: String
  """Unique alias for Tarvent application"""
  applicationAlias: String
  """URL of the business website."""
  website: String
  isNewAccount: Boolean!
  isScheduledToDelete: Boolean!
  """
  Maximum amount of hard bounces a contact can have before being marked as undeliverable.
  """
  hardBounceLimit: Int!
  """
  Maximum amount of soft bounces a contact can have before being marked as undeliverable.
  """
  softBounceLimit: Int!
  """Date/time the account was created"""
  createdUtc: DateTime!
  """
  ID of user who created the account. Refer to the **user** query to get user information.
  """
  createdBy: String!
  """Date/time the account was last modified"""
  modifiedUtc: DateTime!
  """
  ID of user who last modified the account. Refer to the **user** query to get user information.
  """
  modifiedBy: String!
  """Collections of security groups"""
  groups: [SecurityRole!]!
  """Collections of domains"""
  domains: [AccountDomain!]!
  """Collections of invites requesting people to register as users"""
  invites: [Invite!]!
  """
  Collections of dedicated IP addresses used for sending transactional and marketing emails
  """
  dedicatedIps: [AccountIp!]!
}


"""Represents the association of a permission to a security role"""
type SecurityRolePermission {
  """Description of permission"""
  description: String!
  """ID of Account"""
  accountId: Long!
  """Permission key to associate"""
  permissionKey: String
  """ID of permission to associate"""
  permissionId: Long!
  """ID of security role"""
  groupId: Long!
  """Security role"""
  group: SecurityRole
}


"""A request for someone to join the account"""
type Invite {
  """Unique invite ID"""
  id: String!
  """First name of invitee"""
  firstName: String!
  """Last name of invitee"""
  lastName: String!
  """Status of invite"""
  status: InviteStatus!
  emailAddr: String!
  securityRoles: [SecurityRole!]
  user: User
  account: Account
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits.
  """
  isPartner: Boolean!
  """
  Indicates whether the user is a billing contact for the account. Defaults to false.
  """
  isBillingContact: Boolean!
  """
  Indicates whether the user should receive account level communication. Defaults to false.
  """
  isAccountContact: Boolean!
  """Language of invitee"""
  language: String
  """Date/time the invite was created"""
  createdUtc: DateTime!
}


"""Discount being applied to a plan"""
type AccountPlanDiscount {
  """Unique discount ID"""
  id: String!
  """Name of discount"""
  name: String!
  """Description of discount"""
  description: String
  """Dollar amount being discounted from plan"""
  discountAmt: Float!
  """Percentage being discounted from plan"""
  discountPct: Float!
  """Indicates whether discount is applied each billing cycle"""
  isRecurring: Boolean!
  """Date/time discount will start being applied"""
  startUtc: DateTime!
  """
  Date/time discount will next be applied. The initial value will be the same as the StartUtc
  """
  nextUtc: DateTime!
  """
  Date/time discount will stop being applied. This only affects recurring discounts.
  """
  endUtc: DateTime
  """Date/time the plan discount was created"""
  createdUtc: DateTime!
  """Id of user who created the plan discount"""
  createdBy: String
  """Date/time the plan discount was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the plan discount"""
  modifiedBy: String
}


type AccountDomain {
  id: String!
  version: String!
  """Only populated for V1 domains"""
  selector: String!
  publicKey: String!
  dnsRecords: [AccountDomainRecord!]!
  domain: String
  type: DomainType!
  isStrict: Boolean!
  """Only used for bounce domains"""
  isOwnerVerified: Boolean
  """Only used for bounce domains"""
  lastOwnerVerifiedUtc: DateTime
  valid: Boolean!
  lastVerifiedUtc: DateTime!
  """Only used for tracking domains. Defaults to 'True'."""
  trackingEnabled: Boolean!
  includedPaths: [String!]
  excludedPaths: [String!]
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
  pages: [AccountDomainPage]
}


type Audience {
  id: String!
  name: String!
  gdprTitle: String
  gdprDescription: String
  gdprLegalTerms: String
  companyName: String
  streetAddress: String
  streetAddress2: String
  addressLocality: String
  addressRegion: String
  postalCode: String
  addressCountry: String
  phone: String
  website: String
  defaultFromEmail: String
  defaultFromText: String
  requireDoubleOptIn: Boolean!
  doubleOptInFromName: String
  doubleOptInFromEmail: String
  doubleOptInSubject: String
  doubleOptInContentHtml: String
  doubleOptInConfirmPageJson: String
  keyFields: [String!]!
  mailDomain: AccountDomain
  dateFormat: String
  dateTimeFormat: String
  numberFormat: String
  totalContacts: Int!
  totalActiveContacts: Int!
  totalUnconfirmedContacts: Int!
  totalUndeliverableContacts: Int!
  totalUnsubscribedContacts: Int!
  totalComplaintContacts: Int!
  totalSuppressedContacts: Int!
  tags: [String!]
  createdUtc: DateTime!
  createdBy: String!
  lastModifiedUtc: DateTime!
  modifiedBy: String!
}


type AIRequest {
  questions: [String!]!
  id: String!
  questionStyle: AIQuestionStyle!
  questionType: AIQuestionType!
  answers: [String]
  tokensPrompt: Int!
  tokensAnswer: Int!
  tokensRemaining: Int!
  createdUtc: DateTime!
  createdBy: String
}


type DataField {
  id: String!
  category: String
  isSystem: Boolean
  dataType: DataType!
  labelText: String
  labelTranslations: Labels
  description: String
  required: Boolean!
  isPublic: Boolean!
  isPrimaryKey: Boolean!
  isGdprField: Boolean!
  mergeTag: String
  defaultValue: String
  minNbr: Decimal
  maxNbr: Decimal
  minUtc: DateTime
  maxUtc: DateTime
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
  conditions: [Condition]
}


type Export {
  id: String!
  audience: Audience
  groups: [Group!]!
  notificationEmail: String!
  name: String
  contactStatus: ContactStatus
  behaviors: [ContactBehavior!]
  fields: [String]
  delimiter: ValueDelimiter!
  status: ExportStatus!
  downloadUrl: String
  createdUtc: DateTime!
  createdBy: String
}


type Subscriber {
  id: String!
  optInIp: String
  confirmedIp: String
  optOutIp: String
  email: String!
  groups: [Group!]!
  tags: [String!]!
  validateSubscriberField(value: String, fieldName: String, cultureCode: String = "en-US"): Boolean!
  referenceId: Long
  firstName: String
  lastName: String
  rating: Float
  longitude: Decimal
  latitude: Decimal
  streetAddress: String
  streetAddress2: String
  addressLocality: String
  addressRegion: String
  postalCode: String
  addressCountry: String
  timeZone: String
  language: String
  sendFormat: SendFormat!
  status: ContactStatus!
  optInUtc: DateTime
  optInSource: OptInSource!
  confirmedUtc: DateTime
  optOutUtc: DateTime
  optOutSource: OptOutSource!
  optOutReason: String
  sbCount: Int!
  hbCount: Int!
  conversations: [ContactConversation]
  notes: [ContactNote]
  profileFields: [ProfileField]
  events: [ContactEvent]
  formEvents: [FormEvent]
  campaigns: [SubscriberCampaign]
  campaignEvents: [CampaignEvent]
  journeys: [JourneySubscriber]
  journeyEvents: [JourneySubscriberEvent]
  journeyConversions: [JourneyConversionSubscriber]
  journeyGoals: [JourneyGoalSubscriber]
  siteNotifications: [SubscriberSiteNotification]
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


type Column {
  dataField: DataField
  index: Int!
  skip: Boolean!
  custom: Boolean!
  fieldName: String
}


type Import {
  id: String!
  groups: [Group!]!
  columns: [Column]
  deleteArea: ImportDeleteArea!
  update: Boolean!
  unsubscribe: Boolean!
  markUndeliverable: Boolean!
  skipFirstRow: Boolean!
  confirmEmail: String
  importEmail: String
  delimiter: ValueDelimiter!
  status: ImportStatus!
  fileRecords: Int!
  recordsAdded: Int!
  recordsUpdated: Int!
  badRecords: Int!
  duplicateRecords: Int!
  jobStartedUtc: DateTime
  jobEndedUtc: DateTime
  errorCode: String
  createdUtc: DateTime!
  createdBy: String
}


type Group {
  id: String!
  name: String
  description: String
  isPublic: Boolean!
  isDynamic: Boolean!
  criteria: ConditionGroup
  totalContacts: Int!
  totalActiveContacts: Int!
  totalUnconfirmedContacts: Int!
  totalUndeliverableContacts: Int!
  totalUnsubscribedContacts: Int!
  totalComplaintContacts: Int!
  totalSuppressedContacts: Int!
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


type ProfileField {
  id: String!
  value: String!
  valueType: RawDataType!
  dataField: DataField
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


type ContactEvent {
  id: String!
  eventUtc: DateTime!
  eventType: EventType!
  customEventKey: String
  entityId: Long
}


type Condition {
  dataField: DataField
  fieldName: String
  operator: Operator!
  value: String
  ignoreYear: Boolean!
}


type Template {
  usage: TemplateUsage!
  versionInfo: TemplateVersions!
  id: String!
  name: String!
  thumbnailUrl: String!
  description: String
  tags: [String!]
  type: TemplateType!
  createdUtc: DateTime!
  modifiedUtc: DateTime!
  contentBodies: [TemplateContent!]!
  versions: [TemplateHistory!]!
}


type Campaign {
  id: String!
  mvWinCombination: String
  variationContents: [CampaignVariationContent!]!
  tags: [String!]!
  replyEmail: String
  audience: AudienceInfo
  scheduledBy: User
  thumbnailUrl: String
  name: String
  description: String
  type: CampaignType!
  language: String
  isOperational: Boolean!
  includeEntireAudience: Boolean!
  enableAutoRetry: Boolean!
  timeJumper: Boolean!
  sendScheduleType: SendScheduleType!
  sendStatus: CampaignSendStatus!
  """Date/time (UTC) the campaign was scheduled."""
  scheduledToSendUtc: DateTime
  sendTimeCount: Int!
  trackReplies: Boolean!
  trackLinkClicks: Boolean!
  trackOpens: Boolean!
  trackBrowser: Boolean!
  trackLocation: Boolean!
  trackHardware: Boolean!
  """Used for tracked domains. Defaults to true."""
  trackDomains: Boolean!
  isMultivariate: Boolean!
  mvGoal: MvGoal!
  mvHypothesis: String
  mvTestPct: Float!
  mvWinType: MvWinType
  mvWinWait: Int!
  mvWinWaitType: MvTimeMeasurement
  mvWinSendWait: Int!
  mvWinSendWaitType: MvTimeMeasurement
  """
  This value is used to determine what time of day the winning campaign should be sent.
  """
  mvWinSendUtc: DateTime
  mVWinManualOverride: Boolean!
  enableAnalytics: Boolean!
  analyticParams: [NameValue]
  customHeaders: [NameValue]
  globalPreheaderInd: Boolean!
  fromCount: Int!
  subjectCount: Int!
  contentCount: Int!
  froms: [CampaignFrom]
  subjects: [CampaignSubject]
  """The date/times the campaign was scheduled to send."""
  sendsUtc: [DateTime!]
  totalContacts: Int!
  totalCombinations: Int!
  journeyStatus: JourneyStatus
  rssCheckFrequency: String
  """Url used to get items from an RSS feed for RSS Campaigns"""
  rssUrl: String
  rssCheckType: TriggerRssCheckType
  rssSendIfNoNewOrUpdatedItems: Boolean
  rssSendWeekDays: String
  rssSendTimeUtc: DateTime
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
  """Mail domain for the campaign."""
  mailDomain: AccountDomain
  journeyId: String
  """
  Can only be set to 'True' for campaigns that are not in the sending process can be marked as archived.
  """
  isArchived: Boolean!
  audienceFilters: [CampaignAudienceFilter]
  combinations: [CampaignCombination]
}


type AudienceInfo {
  customKeyDataField: DataField
  id: String!
  name: String!
  gdprTitle: String
  gdprDescription: String
  gdprLegalTerms: String
  companyName: String
  streetAddress: String
  streetAddress2: String
  addressLocality: String
  addressRegion: String
  postalCode: String
  addressCountry: String
  phone: String
  website: String
  defaultFromEmail: String
  defaultFromText: String
  requireDoubleOptIn: Boolean!
  doubleOptInFromName: String
  doubleOptInFromEmail: String
  doubleOptInSubject: String
  dateFormat: String
  dateTimeFormat: String
  numberFormat: String
  """
  Only populated when getting a list of audiences or when getting a campaign.
  """
  mailDomain: AccountDomain
  totalContacts: Int!
  totalActiveContacts: Int!
  totalUnconfirmedContacts: Int!
  totalUndeliverableContacts: Int!
  totalUnsubscribedContacts: Int!
  totalComplaintContacts: Int!
  totalSuppressedContacts: Int!
  tags: [String!]
  createdUtc: DateTime!
  createdBy: String!
  lastModifiedUtc: DateTime!
  modifiedBy: String!
}


type Question {
  id: String!
  text: String!
  content: String!
  categories: [Question!]
  dataField: DataField
  totalAnswered: Int
  totalSkipped: Int
  otherAnswers: Int
  otherAnswerPct: Float
  type: QuestionType!
  orientation: QuestionOrientation!
  displayOrder: Int!
  required: Boolean!
  allowOther: Boolean!
  sourceType: QuestionSourceType
  sourceName: String
  defaultValue: String
  placeholder: String
  prefixType: String
  prefixContent: String
  suffixType: String
  suffixContent: String
  backgroundPattern: String
  matrixHeaderBackground: String
  boldCategoryText: Boolean!
  categoryBackground: String
  contentStyles: FormQuestionStyles
  ratingType: RatingType
  ratingIconType: RatingIconType
  ratingCount: Int!
  minRatingValue: Int!
  maxRatingValue: Int!
  minRatingTitle: String
  maxRatingTitle: String
  ratingColor: String
  minNbr: Decimal
  maxNbr: Decimal
  minUtc: DateTime
  maxUtc: DateTime
  prefix: String
  suffix: String
  answers: [QuestionAnswer]
}


type QuestionInfo {
  text: String!
  content: String!
  id: String!
  type: QuestionType!
  orientation: QuestionOrientation!
  display: Boolean!
  isActive: Boolean!
  displayOrder: Int!
  required: Boolean!
  allowOther: Boolean!
  sourceType: QuestionSourceType
  sourceName: String!
  overwriteSource: Boolean!
  defaultValue: String!
  placeholder: String!
  prefixType: String
  prefixContent: String
  suffixType: String!
  suffixContent: String!
  backgroundPattern: String!
  matrixHeaderBackground: String!
  boldCategoryText: Boolean!
  categoryBackground: String!
  contentStyles: FormQuestionStyles
  ratingType: RatingType
  ratingCount: Int!
  minRatingValue: Int!
  maxRatingValue: Int!
  minRatingTitle: String!
  maxRatingTitle: String!
  ratingColor: String!
  totalAnswered: Int!
  totalSkipped: Int!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type AudienceForm {
  url: String
  thumbnailUrl: String
  audience: Audience
  id: String!
  name: String!
  pathName: String
  dateFormat: String
  dateTimeFormat: String
  numberFormat: String
  title: String
  description: String
  metaDescription: String
  metaKeywords: String
  shareImageUrl: String
  faviconUrl: String
  scriptingBlock: String
  status: ValidStatus!
  type: AudienceFormType
  translations: Translations
  ftfFormEmailSettings: FtfFormEmail!
  isGdprEnabled: Boolean!
  submitAction: SubmitAction
  questions: [Question!]!
  tags: [String!]
  createdUtc: DateTime!
  createdBy: String!
  modifiedUtc: DateTime!
  modifiedBy: String!
  configurationJson: String!
}


type FormInfo {
  url: String
  thumbnailUrl: String
  type: AudienceFormType!
  id: String!
  name: String!
  pathName: String
  status: ValidStatus!
  dateFormat: String!
  dateTimeFormat: String!
  numberFormat: String!
  title: String!
  description: String
  metaDescription: String!
  metaKeywords: String!
  shareImageUrl: String!
  faviconUrl: String!
  translations: Translations!
  totalVisits: Int!
  uniqueVisits: Int!
  uniqueAbandons: Int!
  totalCompleteSubmits: Int!
  totalPartialSubmits: Int!
  tags: [String!]
  audienceId: String!
  createdUtc: DateTime!
  createdBy: String!
  modifiedUtc: DateTime!
  modifiedBy: String!
}


type SubmitAction {
  addGroups: [Group!]!
  trackDomains: Boolean!
  type: SubmitActionType!
  message: String!
  confirmDialog: DialogSettings
  confirmExternalUrl: String
  sendConfirmEmailInd: Boolean!
  sendConfirmEmail: EmailSettings
  addTags: [String!]
  sendNotificationEmailInd: Boolean!
  sendNotificationEmail: NotificationEmailSettings
  duplicateSubmissionAction: DupSubAction
}


type Survey {
  url: String
  thumbnailUrl: String
  audience: Audience
  id: String!
  name: String!
  pathName: String
  dateFormat: String
  dateTimeFormat: String
  numberFormat: String
  startUtc: DateTime
  endUtc: DateTime
  title: String
  description: String
  metaDescription: String
  metaKeywords: String
  shareImageUrl: String
  faviconUrl: String
  mailDomain: AccountDomain
  scriptingBlock: String
  status: ValidStatus!
  translations: Translations
  isGdprEnabled: Boolean!
  allowMultipleSubmissions: Boolean!
  submitAction: SubmitAction
  questions: [Question!]
  tags: [String!]
  """Collection of campaigns where survey events have been generated from."""
  campaigns: [CampaignInfo!]!
  createdUtc: DateTime!
  createdBy: String!
  modifiedUtc: DateTime!
  modifiedBy: String!
  configurationJson: String!
}


type SurveyInfo {
  url: String
  thumbnailUrl: String
  id: String!
  name: String!
  pathName: String
  status: ValidStatus!
  dateFormat: String!
  dateTimeFormat: String!
  numberFormat: String!
  startUtc: DateTime
  endUtc: DateTime
  title: String!
  description: String
  metaDescription: String!
  metaKeywords: String!
  shareImageUrl: String!
  faviconUrl: String!
  translations: Translations!
  totalVisits: Int!
  uniqueVisits: Int!
  uniqueAbandons: Int!
  totalCompleteSubmits: Int!
  totalPartialSubmits: Int!
  tags: [String!]
  audienceId: String!
  createdUtc: DateTime!
  createdBy: String!
  modifiedUtc: DateTime!
  modifiedBy: String!
}


type QuestionAnswer {
  totalAnswered: Int!
  answeredPct: Float!
  text: String
  value: String
  displayOrder: Int!
}


type LandingPage {
  url: String
  thumbnailUrl: String
  audience: Audience
  id: String!
  name: String!
  pathName: String
  dateFormat: String
  dateTimeFormat: String
  numberFormat: String
  title: String
  description: String
  metaDescription: String
  metaKeywords: String
  shareImageUrl: String
  faviconUrl: String
  scriptingBlock: String
  status: ValidStatus!
  translations: Translations
  isGdprEnabled: Boolean!
  tags: [String!]
  """
  Collection of campaigns where landing page events have been generated from.
  """
  campaigns: [CampaignInfo!]!
  createdUtc: DateTime!
  createdBy: String!
  modifiedUtc: DateTime!
  modifiedBy: String!
  configurationJson: String!
}


type LandingPageInfo {
  url: String
  thumbnailUrl: String
  id: String!
  name: String!
  pathName: String
  status: ValidStatus!
  dateFormat: String!
  dateTimeFormat: String!
  numberFormat: String!
  title: String!
  description: String
  metaDescription: String!
  metaKeywords: String!
  shareImageUrl: String!
  faviconUrl: String!
  translations: Translations!
  totalVisits: Int!
  uniqueVisits: Int!
  uniqueAbandons: Int!
  totalCompleteSubmits: Int!
  totalPartialSubmits: Int!
  tags: [String!]
  audienceId: String!
  createdUtc: DateTime!
  createdBy: String!
  modifiedUtc: DateTime!
  modifiedBy: String!
}


type FileInfo {
  thumbnailUrl: String!
  id: String!
  folderId: String!
  name: String!
  publicUrl: String
  type: FileType!
  editorType: EditorType
  size: Int
  tags: [String!]
  createdUtc: DateTime!
  modifiedUtc: DateTime!
}


type Journey {
  id: String!
  defaultFromEmail: String
  audience: AudienceInfo
  tags: [String!]!
  totalConversions: Int!
  name: String
  description: String
  startedUtc: DateTime
  lastResetUtc: DateTime
  status: JourneyStatus!
  reEntryType: JourneyReEntryType!
  defaultFromName: String
  totalActive: Int!
  totalEntries: Int!
  totalExits: Int!
  totalCompletes: Int!
  totalEmailsSent: Int!
  goalsComplete: Int!
  totalRevenue: Float!
  totalEmailNodes: Int!
  totalNotificationEmailNodes: Int!
  totalSMSNodes: Int!
  totalSiteNotificationNodes: Int!
  createdBy: String
  createdUtc: DateTime!
  modifiedBy: String
  modifiedUtc: DateTime!
  """Mail domain for the journey."""
  mailDomain: AccountDomain
  nodes: [JourneyN]
  goals: [JourneyGoal]
  conversions: [JourneyConversion]
  subscribers: [JourneySubscriber]
  subscriberEvents: [JourneySubscriberEvent]
  campaigns: [Campaign]
  sMSCampaigns: [SMSCampaign]
}


type JourneyInfo {
  thumbnailUrl: String
  id: String!
  audienceId: String
  name: String!
  description: String!
  status: JourneyStatus
  reEntryType: JourneyReEntryType!
  tags: [String!]
  totalEmailNodes: Int!
  totalNotificationEmailNodes: Int!
  totalSMSNodes: Int!
  totalSiteNotificationNodes: Int!
  createdBy: String
  createdUtc: DateTime
  modifiedBy: String
  modifiedUtc: DateTime
}


type TriggerManualInclusion implements JourneyNode {
  checkFrequency: String
  scope: JourneyNodeScope
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerAudience implements JourneyNode {
  event: TriggerAudienceEvent
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerForm implements JourneyNode {
  form: AudienceForm
  event: TriggerFormEvent
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerSurvey implements JourneyNode {
  survey: AudienceForm
  event: TriggerFormEvent
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerFormEvent {
  formQuestion: Question
  type: TriggerFormEventType
  deviceTypes: [DeviceType!]
  operator: Operator
  value: String
}


type TriggerPage implements JourneyNode {
  page: AudienceForm
  referredFromFilter: String
  event: TriggerPageEvent
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerWebPage implements JourneyNode {
  domain: AccountDomain
  path: String
  referredFromFilter: String
  event: TriggerWebpageEvent
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerCampaign implements JourneyNode {
  scope: String
  event: TriggerCampaignEvent
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerDate implements JourneyNode {
  event: TriggerDateEvent
  checkFrequency: String
  scope: JourneyNodeScope
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerRss implements JourneyNode {
  event: TriggerRssEvent
  checkFrequency: String
  pageUrl: String
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerGoal implements JourneyNode {
  goal: JourneyGoal
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerConversion implements JourneyNode {
  conversion: JourneyConversion
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerEcommerce implements JourneyNode {
  event: TriggerEcommerceEvent
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerCustomEvent implements JourneyNode {
  customEvent: CustomApiEvent
  event: TriggerApiEvent
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type TriggerTransaction implements JourneyNode {
  groupName: String
  event: TriggerTransactionEvent
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type FlowWaitFieldChange implements JourneyNode {
  dataField: DataField
  waitLimit: String
  fieldValue: String
  matchPattern: String
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type FlowWaitUntil implements JourneyNode {
  date: String
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type FlowWaitUntilCondition implements JourneyNode {
  waitLimit: String
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type FlowWaitDateField implements JourneyNode {
  dataField: DataField
  waitLimit: String
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type FlowDecisionSplit implements JourneyNode {
  paths: [FlowPath!]
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type FlowRandomSplit implements JourneyNode {
  paths: [FlowPath!]
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type FlowEngagementSplit implements JourneyNode {
  campaign: Campaign
  paths: [FlowPath!]
  event: FlowEngagementSplitEvent
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type FlowJoin implements JourneyNode {
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type FlowGoTo implements JourneyNode {
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionUpdateJourneyContact implements JourneyNode {
  actionJourney: JourneyInfo
  operator: ActionOperator
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionSendEmail implements JourneyNode {
  campaign: Campaign
  deliveryWindow: DeliveryWindow
  rssUrl: String
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionSiteNotification implements JourneyNode {
  domain: AccountDomain
  path: String
  notification: SiteNotification
  settings: SiteNotificationSettings
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionSendSMS implements JourneyNode {
  smsCampaign: SMSCampaign
  deliveryWindow: DeliveryWindow
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionSendNotifiactionEmail implements JourneyNode {
  notification: JourneyNodeNotification
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionUpdateContactStatus implements JourneyNode {
  newStatus: ContactStatus
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionConvertContact implements JourneyNode {
  conversion: JourneyConversion
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionUpdateContactProfile implements JourneyNode {
  dataField: DataField
  newValue: String
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionUpdateContactTag implements JourneyNode {
  tag: String
  operator: ActionOperator
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionUpdateContactGroup implements JourneyNode {
  groupId: String
  operator: ActionOperator
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionAddContactNote implements JourneyNode {
  noteText: String
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionUpdateFacebookAudience implements JourneyNode {
  fbAdAccountId: String
  fbAudienceId: String
  operator: ActionOperator
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionEvaluateGoal implements JourneyNode {
  goal: JourneyGoal
  continueJourney: Boolean
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type ActionWebhook implements JourneyNode {
  webhookUrl: String
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type CampaignInfo {
  thumbnailUrl: String
  id: String!
  audienceId: String!
  type: CampaignType!
  name: String
  description: String
  campaignContentInfo: [CampaignContentInfo!]
  language: String
  isMultivariate: Boolean
  isArchived: Boolean!
  journeyStatus: JourneyStatus
  journeyId: String
  scheduledToSendUtc: DateTime
  timeJumper: Boolean!
  sendScheduleType: SendScheduleType!
  sendStatus: CampaignSendStatus!
  sendsUtc: [DateTime!]
  mvWinType: MvWinType
  mvWinWait: Int!
  mvWinWaitType: MvTimeMeasurement
  tags: [String!]
  createdUtc: DateTime
  createdBy: String
  modifiedUtc: DateTime
  modifiedBy: String
}


type JourneyNodeInfo {
  previousNodeIds: [String!]
  """Used for tags, groups, journey contact, and Facebook audience."""
  actionOperator: ActionOperator
  """Used for SendEmail and SendSMS actions."""
  messageId: String
  """Used for SendEmail action."""
  campaignThumbnailUrl: String
  id: String!
  name: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  nextNodeId: String
  enableMv: Boolean
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics
  paths: [FlowPath!]
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


type CampaignLinkStats {
  linkId: String!
  formType: FormType
  entityName: String
  entityType: EntityType
  url: String
  feedItem: Boolean!
  track: Boolean!
  totalLinkClicks: Int!
  totalLinkClicksPct: Float!
  totalUniqueLinkClicks: Int!
  totalUniqueLinkClicksPct: Float!
}


type TemplateInformation {
  thumbnailUrl: String!
  id: String!
  name: String!
  language: String
  description: String
  category: Category
  modifiedBy: String
  modifiedUtc: DateTime
  createdBy: String
  createdUtc: DateTime
  tags: [String!]!
  type: TemplateType!
}


type UserAccountNotification {
  """Message describing notification"""
  message: String
  variables: [KeyValuePairOfStringAndString!]!
  id: String!
  notificationType: GlobalNotificationType!
  scope: AccountUserNotifScope!
  status: AccountUserNotifStatus!
  isRead: Boolean!
  entityId: String
  entityType: EntityType
  isProgress: Boolean!
  completedPercentage: Float
  correlationId: UUID
  weight: Int!
  """CSV value. Contain all the parent ids needed to get a resource."""
  parentIds: String
  createdUtc: DateTime!
  createdBy: String!
  modifiedUtc: DateTime!
  modifiedBy: String!
}


type Webhook {
  events: [WebhookEvent!]
  id: String!
  name: String
  description: String
  callBackUrl: String
  enabled: Boolean!
  filter: ConditionGroup
  integrationType: IntegrationType
  """
  Used when passing contact data in webhook payload. Defaults to 'BASIC'. When set to 'BASIC' only id, key, email will be passed. When set to 'EXTENDED', all the contact's data will be passed.
  """
  dataSetting: WebhookDataSetting!
  createdBy: String
  createdUtc: DateTime!
  modifiedBy: String
  modifiedUtc: DateTime!
}


interface JourneyNode {
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


enum ApplyPolicy {
  BEFORE_RESOLVER
  AFTER_RESOLVER
}


"""The possible status of a user"""
enum UserStatus {
  """Active status"""
  ACTIVE
  """Suspended status"""
  SUSPENDED
  """Deleted status"""
  DELETED
  """Inactive status"""
  INACTIVE
}


enum AccountUserStatus {
  """Active within the account"""
  ACTIVE
  """Inactive within the account"""
  INACTIVE
}


type UserAccountInfo {
  id: String!
  name: String!
  userStatus: AccountUserStatus!
  status: AccountStatusDto!
  paymentStatus: PaymentStatus
}


"""User settings used to personalize Tarvent for a specific user"""
type UserSetting {
  """Unique setting ID"""
  id: String!
  """Name of setting"""
  name: String!
  """Description of setting"""
  description: String!
  """Setting value"""
  value: String!
}


type UserNotificationPreference {
  """Id of global notification."""
  id: String!
  """Name of global notification."""
  name: String!
  emailNotifications: Boolean!
  inAppNotifications: Boolean!
}


"""The \`DateTime\` scalar represents an ISO-8601 compliant date time type."""
scalar DateTime


"""Represents an permission that can be granted to a security group"""
type Permission {
  """Unique permission ID"""
  id: String!
  """Unique name of permission"""
  name: String
  """Unique key of permission"""
  key: String
  """Description of the actions that can be performed with this permission"""
  description: String
  category: String
  """Collection of users"""
  users: [UserPermission]
}


"""
Represents the association of a security role and audience the role has access to
"""
type SecurityRoleAudience {
  """ID of audience"""
  audienceId: String!
  """Date/time the association was created"""
  createdUtc: DateTime!
  """Id of user who created the association"""
  createdBy: String
  """Date/time the association was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the association"""
  modifiedBy: String
}


"""An account setting that configures various aspects of the system."""
type AccountSetting {
  """Unique setting id"""
  id: String!
  """Name of setting"""
  name: String!
  """Description of setting"""
  description: String!
  """Setting value"""
  value: String!
}


"""The possible statuses for an account"""
enum AccountStatus {
  """Account is active"""
  ACTIVE
  """Account is closed"""
  CLOSED
  """Account is suspending pending internal review"""
  SUSPENDED_REVIEW
  """Account is suspending due to outstanding balance"""
  SUSPENDED_PAYMENT
  """Account is suspending due to malicious activity"""
  SUSPENDED_MALICIOUS
  """Account is suspending due to payment fraud"""
  SUSPENDED_FRAUD
}


"""Payment status reported by payment processor"""
enum PaymentStatus {
  """Payment approved and paid"""
  PAID
  """Payment not paid"""
  NOT_PAID
  """Error wile processing payment"""
  ERROR
  """Payment is pending"""
  PENDING
}


"""Dedicated IP used to send transactional and/or marketing email"""
type AccountIp {
  """Unique dedicated IP ID"""
  id: String!
  """Unique name of dedicated IP"""
  name: String
  """Date/time the dedicated IP was created"""
  createdUtc: DateTime!
  """Id of user who created the dedicated IP"""
  createdBy: String
  """Date/time the dedicated IP was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the dedicated IP"""
  modifiedBy: String
}


"""
The \`Long\` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long


"""The possible status of a user invite"""
enum InviteStatus {
  """Pending acceptance"""
  PENDING
  """Invite accepted and invitees has completed user registration"""
  ACCEPTED
  """Invite has expired"""
  EXPIRED
}


type AccountDomainRecord {
  recordType: DomainRecordType!
  hostName: String
  value: String
  currentValue: String
  dmarcDomain: String
  priority: Int!
  """In seconds"""
  timeToLive: Int!
  status: DomainRecordStatus!
}


enum DomainType {
  MAIL
  FROM
  TRACKING
}


type AccountDomainPage {
  id: Long!
  pageUrl: String
  createdBy: String
  createdUtc: DateTime!
  accountId: Long!
  domainId: Long!
  domain: AccountDomain
}


enum AIQuestionStyle {
  BASIC
  ADVANCED
}


enum AIQuestionType {
  KEYWORD
  TOPIC
}


"""The possible subscriber list data field data types"""
enum DataType {
  """Text up to 256k, which is typically 256 characters in most languages"""
  TEXT
  """Date only data type, no time is stored"""
  DATE
  """Date and time"""
  DATE_TIME
  """Numerically value stored with only a decimal separator"""
  NUMBER
  """Partial date stored as m/d"""
  BIRTHDAY
  """US postal code"""
  ZIP_CODE
  """Phone number conforming to the United States phone number format"""
  PHONE
  """International phone number with little formatting restrictions"""
  INT_PHONE
  """Fully qualified URL to an external image"""
  IMAGE
  """Fully qualified URL"""
  URL
  """
  State within the United States. When used in a form, this field is rendered as a dropdown with all states listed.
  """
  STATE
  """
  Country. When used in a form, this field is rendered as a dropdown with all countries listed in English
  """
  COUNTRY
  """Correctly formatted email address"""
  EMAIL
}


type Labels {
  streetAddress: LabelTranslations
  streetAddress2: LabelTranslations
  addressLocality: LabelTranslations
  addressRegion: LabelTranslations
  postalCode: LabelTranslations
  addressCountry: LabelTranslations
}


"""The built-in \`Decimal\` scalar type."""
scalar Decimal


"""The possible status of a contact"""
enum ContactStatus {
  """Active status"""
  ACTIVE
  """
  Undeliverable status. A contact is assigned this status after the system detects too many bounces (based on bounce types). Once this status is assigned, no emails will be sent to the contact.
  """
  UNDELIVERABLE
  """
  Opt-out/unsubscribed status. Once this status is assign, no emails will be sent to the contact.
  """
  OPT_OUT
  """
  Pending opt-in/subscribe status (system status). Contacts are assigned this status when double opt-in is required for a audience and the system is waiting for the contact to click the link within their opt-in confirmation email. No emails will be sent to the contact until confirm their opt-in.
  """
  PENDING_CONFIRM
  """
  Spam/complaint status. A contact is assigned this status if they report an email as spam through their ISP or via email. Once this status is assigned, no emails will be sent to the contact.
  """
  SPAM
  """Cleaned status. Future use."""
  CLEANED
  """Auto suppressed status."""
  AUTO_SUPPRESSED
  """Manually suppressed status."""
  MANUALLY_SUPPRESSED
}


enum ContactBehavior {
  OPENED_CAMPAIGN
  CLICKED_CAMPAIGN_LINK
  COMPLAINED
  UNSUBSCRIBED
  SUBSCRIBED
}


"""The possible value delimiters that can be used within a data file"""
enum ValueDelimiter {
  """Tab delimiter between values"""
  TAB
  """Comma ',' delimiter (CSV) between values"""
  COMMA
  """Semicolon ';' delimiter between values"""
  SEMICOLON
  """Pipe '|' delimiter between values"""
  PIPE
}


"""The possible status of an export job"""
enum ExportStatus {
  """Export job is queued waiting for processing"""
  PENDING
  """Export job is currently being processed"""
  PROCESSING
  """Export job has been completed"""
  COMPLETED
  """Export job has failed"""
  FAILED
}


"""
Indicated the preferred email content type a contact would like to receive, if possible
"""
enum SendFormat {
  """HTML and plain text"""
  MULTIPART
  """HTML only"""
  HTML
  """Plain text only"""
  TEXT
}


"""The possible sources for a contact opt-in"""
enum OptInSource {
  NONE
  """File import"""
  FILE_IMPORT
  """URL"""
  URL
  """Manual entry through Tarvent"""
  MANUAL
  """Link within the email"""
  EMAIL_LINK
  """Subscribe form"""
  PROFILE_UPDATE
  """API call"""
  API
}


"""The possible sources for a subscriber opt-out"""
enum OptOutSource {
  """Subscriber has not opted out"""
  NONE
  """File import"""
  FILE_IMPORT
  """URL"""
  URL
  """Manual entry through Tarvent"""
  MANUAL
  """Link within the email"""
  EMAIL_LINK
  """Subscribe form"""
  PROFILE_UPDATE
  """API call"""
  API
}


type ContactConversation {
  id: String!
  fromContact: Boolean!
  message: String
  status: Status!
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


type ContactNote {
  id: String!
  message: String
  status: Status!
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


type FormEvent {
  id: Long!
  respondentId: Long!
  eventUtc: DateTime!
  eventType: EventType!
  readSeconds: Int!
  isCta: Boolean!
  ipAddress: [Byte!]
  software: SoftwareType
  os: OperatingSystemType
  device: DeviceType
  timeSpentMinutes: Float
  pageId: Long!
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
  Contact: Subscriber
  form: Form
}


type SubscriberCampaign {
  subscriberId: Long!
  subscriber: Subscriber
  campaignId: Long!
  campaign: Campaign
  sent: Int!
  sentUtc: DateTime!
  delivered: Int!
  opened: Int!
  clicked: Int!
  providedFeedback: Int!
  providedRating: Int!
  viewedOnline: Int!
  socialShare: Int!
  forwardedToFriend: Int!
  printed: Int!
  complained: Int!
  unsubscribed: Int!
  soft: Int!
  hard: Int!
  accountId: Long!
}


type CampaignEvent {
  id: Long!
  eventUtc: DateTime!
  eventType: EmailEventType!
  emailDomain: String
  readSeconds: Int
  ipAddress: [Byte!]
  software: SoftwareType
  os: OperatingSystemType
  device: DeviceType
  sharedOn: SocialPlatform
  serverResponse: String
  linkId: Long
  combinationId: Long
  subscriberId: Long
  subscriber: Subscriber
  campaignId: Long!
  campaign: Campaign
  accountId: Long!
}


type JourneySubscriber {
  id: Long!
  instanceId: String
  status: JourneyContactStatus!
  entryUtc: DateTime!
  entryEntityType: EntityType
  entryEntityId: Long
  entrySubEntityId: Long
  entryEventType: EventType
  entryNodeId: Long!
  exitUtc: DateTime
  exitNodeId: Long
  currentPreviousNodeId: Long
  currentNextNodeId: Long
  currentModifiedUtc: DateTime!
  accountId: Long!
  subscriberId: Long!
  subscriber: Subscriber
  journeyId: Long!
  journey: Journey
}


type JourneySubscriberEvent {
  id: Long!
  instanceId: String
  subscriberId: Long!
  subscriber: Subscriber
  journeyId: Long!
  journey: Journey
  nodeId: Long!
  previousNodeIds: [Long!]
  nextNodeId: Long
  executed: Boolean!
  skipped: Boolean!
  createdUtc: DateTime!
  accountId: Long!
  isDeleted: Boolean!
}


type JourneyConversionSubscriber {
  value: Float!
  conversionId: Long!
  conversion: JourneyConversion
  subscriberId: Long!
  subscriber: Subscriber
  createdUtc: DateTime!
  accountId: Long!
}


type JourneyGoalSubscriber {
  goalId: Long!
  goal: JourneyGoal
  subscriberId: Long!
  subscriber: Subscriber
  createdUtc: DateTime!
  accountId: Long!
}


type SubscriberSiteNotification {
  id: Long!
  createdUtc: DateTime!
  accountId: Long!
  siteNotificationId: Long!
  siteNotification: JourneyN
  subscriberId: Long!
  subscriber: Subscriber
  isDeleted: Boolean!
}


"""
Scope of list synchronization with the data file is considered the master source
"""
enum ImportDeleteArea {
  """Do not synchronize data"""
  NONE
  """
  Delete from the subscriber list if the subscriber is not included in the data file
  """
  SUBSCRIBER_LIST
  """
  Delete from selected groups if the subscriber is not included in the data file
  """
  SELECTED_GROUPS
}


"""The possible status of an import job"""
enum ImportStatus {
  """import job is queued waiting for processing"""
  PENDING
  """import job is currently being processed"""
  PROCESSING
  """import job has been completed"""
  COMPLETED
  """import job has failed"""
  FAILED
}


type ConditionGroup {
  operator: ConditionGroupOperator!
  conditions: [Condition]
  conditionGroups: [ConditionGroup]
}


"""Determines the raw data type for each subscriber list data field"""
enum RawDataType {
  """Text/string"""
  STRING
  """Number (supports decimals)"""
  NUMBER
  """Date/time"""
  DATE_TIME
}


enum EventType {
  DELIVERED
  OPEN
  CLICK
  REPLIED
  RATING
  CREATED
  PROCESSED
  VIEW_ONLINE
  SOCIAL_SHARE
  FORWARD
  FORWARD_TO_FRIEND
  VIEW_PROFILE
  PRINT
  FRIEND_OPTIN
  CONTENT_ERROR
  RETRY
  HARD
  SOFT
  SOFT_SENDER_AUTH
  SOFT_IP
  SOFT_DNS
  BLOCK
  BLOCK_CONTENT
  BLOCK_SENDER
  DECLINED
  INVALID_EMAIL
  SUPPRESSED
  COMPLAINT
  UNSUBSCRIBED
  SUBSCRIBED
  GROUP_ADDED
  GROUP_REMOVED
  TAG_ADDED
  TAG_REMOVED
  FIELD_UPDATED
  NOTE_ADDED
  CONFIRMED_OPT_IN
  GOAL_REACHED
  CONVERSION_AWARDED
  CUSTOM_EVENT
  VISITED_WEB_PAGE
  REFERRED_FROM
  VIEWED_SITE_NOTIFICATION
  DISMISSED_SITE_NOTIFICATION
  CONTACT_ADDED
  CAMPAIGN_SENT
  VIEWED_FORM
  VIEWED_EXPIRED_SURVEY
  SUBMITTED_COMPLETE_FORM
  SUBMITTED_PARTIAL_FORM
  ABANDONED_FORM
  CTA
  ENTERED_JOURNEY
  EXITED_JOURNEY
  COMPLETED_JOURNEY
  STEP_PROCESSED
}


"""
The possible operators used for condition builders throughout the application
"""
enum Operator {
  """Equal"""
  EQUAL
  """Not equal"""
  NOT_EQUAL
  """Greater than"""
  GREATER_THAN
  """Greater than equal to"""
  GREATER_THAN_EQUAL_TO
  """Less than"""
  LESS_THAN
  """Less than equal to"""
  LESS_THAN_EQUAL_TO
  """Starts with"""
  STARTS_WITH
  """Does not start with"""
  NOT_START_WITH
  """Contains"""
  CONTAINS
  """Does not contain"""
  NOT_CONTAINS
  """Is blank or null"""
  IS_BLANK
  """Is not blank or not null"""
  NOT_BLANK
  """Month is (Date or DateTime fields only)"""
  MONTH_IS
  """Day is (Date or DateTime fields only)"""
  DAY_IS
  """Week is (Date or DateTime fields only)"""
  WEEK_IS
  """Year is (Date or DateTime fields only)"""
  YEAR_IS
  """Contains"""
  IS_WITHIN
  """Does not contain"""
  NOT_WITHIN
  IF_TRUE
  IF_FALSE
}


type TemplateUsage {
  sentCampaigns: Int!
  draftCampaigns: Int!
  campaigns: [TemplateCampaign!]!
}


type TemplateVersions {
  versions: [TemplateVersion!]!
}


"""Indicates the type of template"""
enum TemplateType {
  """Drag drop template"""
  DRAG_DROP
  """HTML markup template"""
  HTML_MARKUP
  """Plain text template"""
  PLAIN_TEXT
  """AMP HTML markup template"""
  AMP_MARKUP
}


type TemplateContent {
  mimeType: MimeType!
  content: String!
}


type TemplateHistory {
  version: Float!
  lastModifiedUtc: DateTime!
}


type CampaignVariationContent {
  id: String
  thumbnailUrl: String
  createdUtc: DateTime!
  validStoryImage: Boolean!
  validStoryTitle: Boolean!
  validStoryDescription: Boolean!
  validContent: Boolean!
  validLinks: Boolean!
  validContactInformation: Boolean!
  validUnsubscribeLink: Boolean!
  contentBodies: [ContentBody]
  versions: [History]
}


enum CampaignType {
  """Drag drop campaign"""
  DRAG_DROP
  """RSS campaign"""
  RSS
  """HTML markup campaign"""
  HTML_MARKUP
  """Plain text campaign"""
  PLAIN_TEXT
  """AMP HTML markup campaign"""
  AMP_MARKUP
}


"""Defines when a campaign is sent"""
enum SendScheduleType {
  """Sends the campaign immediately"""
  IMMEDIATE
  """Sends the campaign at a later date"""
  DELAYED
}


"""The current send status of a campaign"""
enum CampaignSendStatus {
  """No scheduled send date"""
  NOT_SCHEDULED
  """Campaign has been scheduled and waiting to be processed"""
  PENDING
  """
  Campaign validation and pre-processing has been completed. Campaign is now queued for sending.
  """
  QUEUED
  """Campaign is being sent."""
  PROCESSING
  """Campaign has been paused and no emails are being sent"""
  PAUSED
  """Campaign has been stopped by a user."""
  STOPPED
  """
  Campaign has been sent and is awaiting multi-variant winner to be selected
  """
  SENT_PENDING_AB_WINNER
  """
  Campaign has completed all processing and has been sent to all subscribers
  """
  COMPLETED
  """Campaign has been stopped by the system due to one or more errors"""
  SYSTEM_STOPPED
  """Campaign has been prepared to send and is ready to go."""
  READY_TO_SEND
}


enum MvGoal {
  NONE
  """Increase open rates"""
  INCREASE_OPENS
  """Increase overall click-through rates"""
  INCREASE_CLICKS
  """Increase click-through rates using link styles/colors"""
  INCREASE_CLICKS_WITH_LINKS
  """Increase click-through rates using email layouts"""
  INCREASE_CLICKS_WITH_LAYOUT
  """Increase engagement using subject lines"""
  INCREASE_ENGAGMENT_WITH_SUBJECT
  """Increase engagement using various sender information (from text/email)"""
  INCREASE_ENGAGMENT_WITH_SENDER_INFO
  """Increase deliverability using improved content"""
  INCREASE_DELIVERABILITY
  """Increase website conversions through increased engagement"""
  INCREASE_WEBSITE_CONVERSIONS
  """Determine best time of day to send campaigns"""
  DETERMINE_BEST_SEND_TIME_OF_DAY
  """Determine best day of week to send campaigns"""
  DETERMINE_BEST_SEND_DAY_OF_WEEK
  """Other goal"""
  OTHER_GOAL
}


"""
Event type used to determine winner variant of a multi-variant test campaign
"""
enum MvWinType {
  """Multi-variant testing not enabled"""
  NONE
  """
  Overall link click rate or click rate of a specific link within a campaign (based on unique email recipients)
  """
  CLICK_RATE
  """Email open rate"""
  OPEN_RATE
  """The winner is picked manually"""
  MANUAL
  """Sender reputation of email (successfully delivered emails)"""
  SENDER_REPUTATION
  """Email shares"""
  SHARES
  """Engagement of email"""
  ENGAGEMENT_SCORE
}


enum MvTimeMeasurement {
  HOUR
  DAY
  WEEK
  """Only used for journey campaigns."""
  CONTACTS
}


type NameValue {
  name: String
  value: String
}


type CampaignFrom {
  nameNotEmpty: Boolean!
  nameIsUnique: Boolean!
  name: String
  email: String
}


type CampaignSubject {
  subjectNotEmpty: Boolean!
  subjectValidWordCount: Boolean!
  subjectValidEmojiCount: Boolean!
  subjectValidPunctuation: Boolean!
  subject: String
  preheader: String
}


enum JourneyStatus {
  RUNNING
  NOT_RUNNING
}


enum TriggerRssCheckType {
  CREATED
  UPDATED
  CREATED_OR_UPDATED
}


type CampaignAudienceFilter {
  group: Group
}


type CampaignCombination {
  id: Long!
  fromId: Int!
  subjectId: Int!
  contentVariationId: Int!
  sentUtc: DateTime!
  totalContacts: Int!
  totalSent: Int!
  uniqueSuppressed: Int!
  uniqueHardBounce: Int!
  uniqueSoftBounce: Int!
  totalBounce: Int!
  totalDelivered: Int!
  totalOpens: Int!
  uniqueOpens: Int!
  totalClicks: Int!
  uniqueClicks: Int!
  uniqueOptOut: Int!
  uniqueSpam: Int!
  totalReplies: Int!
  uniqueReplies: Int!
  totalProfile: Int!
  uniqueProfile: Int!
  totalSTF: Int!
  uniqueSTF: Int!
  totalSocialShare: Int!
  uniqueSocialShare: Int!
  totalSTFOptIn: Int!
  uniqueSTFOptIn: Int!
  senderReputation: Float!
  engagementScore: Float!
  statUtc: DateTime
  campaignId: Long!
  campaign: Campaign
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
  accountId: Long!
}


"""Determines how a questions form input is rendered"""
enum QuestionType {
  """Single line text box"""
  SHORT_TEXT
  """Multi-line text area"""
  LONG_TEXT
  """Dropdown/Select box"""
  DROPDOWN
  """Checkbox"""
  CHECKBOX
  """Radio button"""
  RADIO
  """Rating"""
  RATING
  """
  Matrix/Grid style questions (rows) with multiple answers (columns) using checkboxes
  """
  MATRIX_CHECKBOX
  """
  Matrix/Grid style questions (rows) with multiple answers (columns) using radio buttons
  """
  MATRIX_RADIO
  """
  Hidden data that can get values from the URL and passed through to the subscriber's profile
  """
  HIDDEN
  """Date only data type, no time is stored"""
  DATE
  """Date and time"""
  DATE_TIME
  """Numerically value stored with only a decimal separator"""
  NUMBER
  """Partial date stored as m/d"""
  BIRTHDAY
  """US postal code"""
  ZIP_CODE
  """Phone number conforming to the United States phone number format"""
  PHONE
  """
  Full address in a single value formatted as Street Address|Streest Address 2|AddressLocality|AddressRegion|PostalCode|AddressCountry
  """
  ADDRESS_BLOCK
  """Audience groups"""
  GROUPS
  """Opt out"""
  OPT_OUT
  """Opt out reason"""
  OPT_OUT_REASON
  """General Data Protection Regulation (GDPR)"""
  GDPR
  """Forward To Friend"""
  FORWARD_TO_FRIEND
  """Text"""
  TEXT
  """Image"""
  IMAGE
  """Code"""
  CODE
  """International Phone"""
  INT_PHONE
}


"""Determines a question's orientation."""
enum QuestionOrientation {
  """Horizontal orientation"""
  HORIZONTAL
  """Vertical orientation"""
  VERTICAL
}


enum QuestionSourceType {
  URL
  COOKIES
  CUSTOM
}


type FormQuestionStyles {
  fontSize: String
  fontFamily: String
  fontColor: String
  lineHeight: String
  fontStyle: String
  textTransform: String
  textDecoration: String
  letterSpacing: String
  wordSpacing: String
  padding: String
  backgroundColor: String
  backgroundImage: String
  align: String
  width: String
  borderRadius: String
  fullMobileWidth: Boolean
}


enum RatingType {
  NUMBER
  ICON
  SLIDER
}


enum RatingIconType {
  STAR
  FACE
}


enum ValidStatus {
  VALID
  INVALID
}


enum AudienceFormType {
  SUBSCRIBE
  PROFILE_UPDATE
  UNSUBSCRIBE
  FORWARD_TO_FRIEND
}


type Translations {
  required: String
  formError: String
  minLengthError: String
  maxLengthError: String
  placeholder: String
  formatError: String
  invalidDataError: String
  ftfTitle: String
  ftfFriends: String
  ftfNote: String
  ftfInformation: String
  name: String
  note: String
  addFriend: String
  close: String
  otherText: String
}


type FtfFormEmail {
  fromName: String
  fromEmail: String
  subject: String
  contentHtml: String
}


"""
Actions that can be performed after a submission. Use journeys to perform additional actions.
"""
enum SubmitActionType {
  """Display a message in place for the form without the page refreshing"""
  DISPLAY_MESSAGE
  """Display a dialog in place for the form without the page refreshing"""
  DISPLAY_DIALOG
  """
  Redirect to an external URL such as a website, social media site, and more.
  """
  REDIRECT_TO_URL
  """Redirect to a landing page within Tarvent"""
  REDIRECT_TO_PAGE
}


type DialogSettings {
  content: String!
  iconType: DialogIconType
  iconColor: String
  iconUrl: String
  buttonActionType: DialogButtonActionType!
  buttonText: String
  redirectExternalUrl: String
  buttonColor: String
}


type EmailSettings {
  fromText: String!
  fromEmail: String!
  subject: String!
  contentHtml: String!
}


type NotificationEmailSettings {
  dataAttachmentFormat: DataAttachmentFormat!
  contentHtml: String!
}


type DupSubAction {
  type: DuplicateSubmissionActionType!
  renderType: ErrorAction!
  message: String!
  dialog: DialogSettings
}


"""The type of library file"""
enum FileType {
  """
  Image file which includes the follow extensions: .jpg, .jpe, .jpeg, .gif, .png, .bmp, .psd, .tif, .tiff, .svg, .indd, .ai, .eps
  """
  IMAGE
  """File such as a Microsoft Word or Adobe PDF document"""
  FILE
  """Article"""
  ARTICLE
  """A block of content"""
  CONTENT_BLOCK
}


enum EditorType {
  DRAG_DROP
  CODE
}


enum JourneyReEntryType {
  NO_RE_ENTRY
  RE_ENTER_ANYTIME
  RE_ENTER_AFTER_EXIT
}


type JourneyN {
  id: Long!
  originalNodeId: Long
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  key: String
  dbIsConfigured: Boolean!
  isConfigured: Boolean!
  isDefault: Boolean
  processedUtc: DateTime
  configuration: JourneyNodeConfiguration
  evaluated: Int!
  performed: Int!
  previousNodeIds: [Long!]
  nextNodeId: Long
  nextNode: JourneyN
  movedUtc: DateTime
  previousNextNodeId: Long
  createdBy: String
  createdUtc: DateTime!
  modifiedBy: String
  modifiedUtc: DateTime!
  isDeleted: Boolean!
  accountId: Long!
  campaignId: Long
  campaign: Campaign
  journeyId: Long!
  journey: Journey
  nextNodes: [JourneyN]
  siteNotificationSubscribers: [SubscriberSiteNotification]
  eventPayload: EventPayload
}


type JourneyGoal {
  id: String!
  name: String
  description: String
  type: JourneyGoalType!
  """Only used for GLOBAL goals"""
  filter: ConditionGroup
  conversion: JourneyConversion
  createdBy: String
  createdUtc: DateTime!
  modifiedBy: String
  modifiedUtc: DateTime!
  journeyId: String!
}


type JourneyConversion {
  id: String!
  name: String
  description: String
  value: Float!
  createdBy: String
  createdUtc: DateTime!
  modifiedBy: String
  modifiedUtc: DateTime!
  journeyId: String!
}


type SMSCampaign {
  id: String!
  name: String
  description: String
  fromNumber: String
  message: String
  subject: String
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


enum JourneyNodeScope {
  ALL_CONTACTS_BEFORE_JOURNEY_STARTED
  NEW_CONTACTS_AFTER_JOUNEY_STARTED
  ALL_CONTACTS
}


enum JourneyNodeType {
  TRIGGER_MANUAL_INCLUSION
  TRIGGER_AUDIENCE
  TRIGGER_FORM
  TRIGGER_PAGE
  TRIGGER_WEBPAGE
  TRIGGER_CAMPAIGN
  TRIGGER_DATE
  TRIGGER_RSS
  TRIGGER_GOAL
  TRIGGER_CONVERSION
  TRIGGER_ECOMMERCE
  TRIGGER_CUSTOM_EVENT
  TRIGGER_SURVEY
  TRIGGER_TRANSACTION
  TRIGGER_CONTACT_ADDED
  ACTION_SEND_EMAIL
  ACTION_SITE_NOTIFICATION
  ACTION_SEND_SMS
  ACTION_SEND_NOTIFICATION_EMAIL
  ACTION_UPDATE_CONTACT_STATUS
  ACTION_CONVERT_CONTACT
  ACTION_UPDATE_CONTACT_PROFILE
  ACTION_UPDATE_CONTACT_TAG
  ACTION_UPDATE_CONTACT_GROUP
  ACTION_ADD_CONTACT_NOTE
  ACTION_UPDATE_FACEBOOK_AUDIENCE
  ACTION_EVALUATE_GOAL
  ACTION_WEBHOOK
  ACTION_UPDATE_JOURNEY_CONTACT
  FLOW_WAIT_FIELD_CHANGE
  FLOW_WAIT
  FLOW_WAIT_UNTIL_DATE_FIELD
  FLOW_DECISION_SPLIT
  FLOW_RANDOM_SPLIT
  FLOW_ENGAGEMENT_SPLIT
  FLOW_JOIN
  FLOW_GO_TO
  FLOW_WAIT_UNTIL_CONDITION
  """System use only"""
  SYSTEM_FLOW_PATH
}


enum TerminatorType {
  ENTRY_TRIGGER
  EXIT_TRIGGER
}


type NodeStatistics {
  evaluated: Int!
  performed: Int!
}


type Error {
  field: String
  message: String
  developerNotes: String
  errorCode: Int!
}


type TriggerAudienceEvent {
  type: TriggerAudienceEventType
  """
  Comma delimited string of ids/tags is supported as well as a single id/tag for group and tag filtering.
  """
  fieldName: String
}


enum TriggerFormEventType {
  VIEWED_FORM
  VIEWED_EXPIRED_SURVEY
  SUBMITTED_COMPLETE_FORM
  SUBMITTED_PARTIAL_FORM
  ABANDONED_FORM
  SUBMITTED_FORM
}


"""Identifies the type of device that generated an event"""
enum DeviceType {
  """Desktop device such as a desktop computer, TV, or laptop"""
  DESKTOP
  """Mobile phone"""
  MOBILE_PHONE
  """Mobile device such as a smart watch"""
  MOBILE_DEVICE
  """Tablet device"""
  TABLET
  """Other device"""
  OTHER
}


type TriggerPageEvent {
  type: TriggerPageEventType
  deviceTypes: [DeviceType!]
  visitType: WebPageVisitType
  ctaPerformed: Boolean
}


type TriggerWebpageEvent {
  type: TriggerWebPageEventType
  deviceTypes: [DeviceType!]
  visitType: WebPageVisitType
  siteVisitType: WebPageVisitType
}


type TriggerCampaignEvent {
  type: TriggerCampaignEventType
  linkScope: String
  matchPattern: String
  deviceTypes: [DeviceType!]
  sharedOn: SocialPlatform
}


type TriggerDateEvent {
  value: String
  fieldName: String
  operator: Operator
  ignoreYear: Boolean
}


type TriggerRssEvent {
  rssCheckType: TriggerRssCheckType
}


type TriggerEcommerceEvent {
  type: TriggerEcommerceEventType
  storeId: String
  products: [String!]
  productOperator: TriggerEcommerceProductOperator
  categories: [String!]
  categoryOperator: TriggerEcommerceCategoryOperator
  orderValue: Float
  orderOperator: TriggerEcommerceOrderOperator
}


type CustomApiEvent {
  id: String!
  key: String
  name: String
  description: String
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


type TriggerApiEvent {
  eventKey: String
}


type TriggerTransactionEvent {
  type: TriggerTransactionEventType
  linkScope: String
  matchPattern: String
  deviceTypes: [DeviceType!]
}


type FlowPath {
  id: String!
  name: String
  nextNodeId: String
  """Used for FlowRandomSplit"""
  percentage: Int
  """Used for FlowDecisionSplit"""
  filter: ConditionGroup
  """Used for FlowEngagementSplit"""
  engaged: Boolean
  """Used for FlowDecisionSplit"""
  isDefault: Boolean!
  isDeleted: Boolean!
}


type FlowEngagementSplitEvent {
  type: TriggerCampaignEventType
  linkScope: String
  matchPattern: String
  deviceTypes: [DeviceType!]
  sharedOn: SocialPlatform
}


enum ActionOperator {
  ADD
  REMOVE
}


type DeliveryWindow {
  sendImmediate: Boolean!
  timeUtc: DateTime
  weekDays: String
  timeJumper: Boolean!
}


type SiteNotification {
  title: String
  messageHtml: String
}


type SiteNotificationSettings {
  tags: [String!]
  displayType: DisplayType
  positionX: PositionX
  positionY: PositionY
  animationType: AnimationType
  buttonType: ButtonType
  buttonText: String!
  buttonPosition: ButtonPosition
  iconUrl: String
  icon: IconType
  iconColor: String
  buttonColor: String
}


type JourneyNodeNotification {
  settings: JourneyNodeNoticificationSettings
  header: JourneyNodeNoticificationHeader
  content: JourneyNodeNoticificationContent
  variables: [JourneyNameValue!]
  recipients: [JourneyNodeNoticificationRecipient]
}


type CampaignContentInfo {
  id: String!
  createdUtc: DateTime!
  validStoryImage: Boolean!
  validStoryTitle: Boolean!
  validStoryDescription: Boolean!
  validContent: Boolean!
  validLinks: Boolean!
  validContactInformation: Boolean!
  validUnsubscribeLink: Boolean!
}


enum FormType {
  SUBSCRIBE
  PROFILE_UPDATE
  UNSUBSCRIBE
  FORWARD_TO_FRIEND
  SURVEY
  LANDING_PAGE
}


enum EntityType {
  GENERAL
  AUDIENCE
  CAMPAIGN
  JOURNEY
  CONTACT
  TEMPLATE
  TRANSACTION
  ARTICLE
  CONTENT_BLOCK
  FILE
  IMAGE
  FORM
  SURVEY
  PAGE
  EXPORT
  CUSTOM_REPORT
  API_KEY
  VIEW
  CAMPAIGN_CONTENT
  FOLDER
  FORM_QUESTION
  CONTACT_EVENT
  CONTACT_JOURNEY_CONVERSION
  CONTACT_JOURNEY_GOAL
  CONTACT_NOTE
  CONTACT_CONVERSATION
  AUDIENCE_IMPORT
  AUDIENCE_GROUP
  AUDIENCE_EXPORT
  DATAFIELD_CATEGORY
  ACCOUNT_TAG
  USER_INVITE
  DEDICATED_IP
  ACCOUNT_INVOICE
  PAYMENT_METHOD
  USER
  ACCOUNT_PLAN
  ACCOUNT
  WEBHOOK
  GROUP
  SEGMENT
  DATAFIELD
  GOAL
  CONVERSION
  JOURNEY_NODE
  CUSTOM_EVENT
  SECURITY_ROLE
  ACCOUNT_DOMAIN
}


type Category {
  id: String!
  name: String!
  type: CategoryType!
  isSystem: Boolean!
  createdUtc: DateTime
  createdBy: String
  modifiedUtc: DateTime
  modifiedBy: String
}


type KeyValuePairOfStringAndString {
  key: String!
  value: String!
}


enum GlobalNotificationType {
  CAMPAIGN_CONFIRMATION
  CAMPAIGN_FAILURE
  CAMPAIGN_MV_MANUAL_WIN_REMINDER
  CAMPAIGN_MV_WINNER_PICKED
  CAMPAIGN_MV_CONFIRMATION
  CONTACT_CONVERSATION_REPLY
  EXPORT
  IMPORT
  IMPORT_ERROR
  TRIAL_ENDING_NOTICE
  DOMAIN_VALIDATION
  REPORT_READY
  SYSTEM
  CUSTOM_REPORT_JOB_CLEANUP_WARNING
  CUSTOM_REPORT_JOB_DELETED
  MAX_USER_COUNT_REACHED
  SYSTEM_EMAIL_ONLY
  SYSTEM_IN_APP_ONLY
}


enum AccountUserNotifScope {
  SYSTEM
  ACCOUNT
  DIRECT_TO_USER
}


enum AccountUserNotifStatus {
  INFORMATION
  COMPLETED
  FAILED
  WARNING
  IN_PROGRESS
}


scalar UUID


type WebhookEvent {
  entityType: EntityType
  eventType: EventType!
}


enum IntegrationType {
  ZAPIER
}


enum WebhookDataSetting {
  BASIC
  EXTENDED
}


input AccountEntityFilterInput {
  and: [AccountEntityFilterInput!]
  or: [AccountEntityFilterInput!]
  entityType: EntityTypeOperationFilterInput
  entityTypeName: StringOperationFilterInput
  entityId: ComparableInt64OperationFilterInput
  entityName: StringOperationFilterInput
  parentEntityId: ComparableNullableOfInt64OperationFilterInput
  parentEntityName: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
}


input AccountEntitySortInput {
  entityType: SortEnumType
  entityTypeName: SortEnumType
  entityId: SortEnumType
  entityName: SortEnumType
  parentEntityId: SortEnumType
  parentEntityName: SortEnumType
  modifiedUtc: SortEnumType
}


"""User who can access to Tarvent"""
input UserSortInput {
  """Unique user ID"""
  id: SortEnumType
  """System status of user"""
  status: SortEnumType
  """
  User's status within the account. Only populated when getting a user/users within a specific account.
  """
  accountStatus: SortEnumType
  """First name"""
  firstName: SortEnumType
  """Last name"""
  lastName: SortEnumType
  """
  Optional business phone number used by support to contact user if needed
  """
  businessPhone: SortEnumType
  """Email address used for notifications"""
  emailAddr: SortEnumType
  """Indicates if user is enrolled in Affiliate program"""
  isAffiliate: SortEnumType
  """URL used for the Ambassador and Affiliate programs"""
  ambassadorUrl: SortEnumType
  """Indicates if multi-factor authentication is enabled"""
  mfaEnabled: SortEnumType
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits. This is only set when getting users within an account.
  """
  isPartner: SortEnumType
  """
  Indicates whether the user is a billing user for the account and should receive billing communication.
  """
  isBillingContact: SortEnumType
  """Indicates whether the user should receive account level communication."""
  isAccountContact: SortEnumType
  """
  Unique account id of the first active account the user is associated with
  """
  accountId: SortEnumType
  """Date/time the user was created"""
  createdUtc: SortEnumType
  """
  ID of user who created the user. Refer to the **user** query to get user information.
  """
  createdBy: SortEnumType
  """Date/time the user was last modified"""
  modifiedUtc: SortEnumType
  """
  ID of user who last modified the user. Refer to the **user** query to get user information.
  """
  modifiedBy: SortEnumType
}


"""
Account plan for a specific service type. Only one active plan per service type is allowed.
"""
input AccountPlanFilterInput {
  and: [AccountPlanFilterInput!]
  or: [AccountPlanFilterInput!]
  """Plan type"""
  type: PlanTypeOperationFilterInput
  tvafs: ListFilterInputTypeOfAccountPlanFeatureVMFilterInput
  """Current plan information."""
  currentPlan: AccountPlanInfoFilterInput
  """Next plan information if a plan change is scheduled."""
  nextPlan: AccountPlanInfoFilterInput
}


"""
Account plan for a specific service type. Only one active plan per service type is allowed.
"""
input AccountPlanSortInput {
  """Plan type"""
  type: SortEnumType
  """Current plan information."""
  currentPlan: AccountPlanInfoSortInput
  """Next plan information if a plan change is scheduled."""
  nextPlan: AccountPlanInfoSortInput
}


input AccountInvoiceInfoSortInput {
  """Unique invoice ID"""
  id: SortEnumType
  """Total amount being billed"""
  totalAmount: SortEnumType
  """Amount paid after discounts and credits"""
  amountPaid: SortEnumType
  """Status of invoice"""
  status: SortEnumType
  """Invoice due date/time"""
  dueUtc: SortEnumType
  """Service period start date/time"""
  billPeriodStartUtc: SortEnumType
  """Service period end date/time"""
  billPeriodEndUtc: SortEnumType
  """Url to download pdf"""
  pdfDownloadUrl: SortEnumType
}


"""
Security role associated with an account used to specify user rights at a group level
"""
input SecurityRoleFilterInput {
  and: [SecurityRoleFilterInput!]
  or: [SecurityRoleFilterInput!]
  """Unique security role ID"""
  id: ComparableInt64OperationFilterInput
  """Unique name of security role"""
  groupName: StringOperationFilterInput
  """Description/purpose of security role"""
  description: StringOperationFilterInput
  """Indicates whether security role is active or not"""
  isActive: BooleanOperationFilterInput
  """
  Indicates whether security role is the administrators group. Only one role can be the administrators role.
  """
  isAdmin: BooleanOperationFilterInput
  """Date/time the security role was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the security role"""
  createdBy: StringOperationFilterInput
  """Date/time the security role was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the security role"""
  modifiedBy: StringOperationFilterInput
  """Collection of permissions granted to the security role"""
  permissions: ListFilterInputTypeOfSecurityRolePermissionFilterInput
  """Collection of users associated with the security role"""
  users: ListFilterInputTypeOfSecurityRoleUserFilterInput
  """Collection of audiences the security role has access to"""
  audiences: ListFilterInputTypeOfSecurityRoleAudienceFilterInput
}


"""
Security role associated with an account used to specify user rights at a group level
"""
input SecurityRoleSortInput {
  """Unique security role ID"""
  id: SortEnumType
  """Unique name of security role"""
  groupName: SortEnumType
  """Description/purpose of security role"""
  description: SortEnumType
  """Indicates whether security role is active or not"""
  isActive: SortEnumType
  """
  Indicates whether security role is the administrators group. Only one role can be the administrators role.
  """
  isAdmin: SortEnumType
  """Date/time the security role was created"""
  createdUtc: SortEnumType
  """Id of user who created the security role"""
  createdBy: SortEnumType
  """Date/time the security role was last modified"""
  modifiedUtc: SortEnumType
  """Id of user who last modified the security role"""
  modifiedBy: SortEnumType
}


"""Account level stats by plan type."""
input AccountOverallStatsFilterInput {
  and: [AccountOverallStatsFilterInput!]
  or: [AccountOverallStatsFilterInput!]
  """Plan Id"""
  id: StringOperationFilterInput
  """Plan type"""
  type: PlanTypeOperationFilterInput
  """Sender reputation for this plan."""
  senderReputation: ComparableDoubleOperationFilterInput
  """Engagement reputation for this plan."""
  engagementScore: ComparableDoubleOperationFilterInput
  """Sender reputation for the account. This includes all plan types."""
  accountSenderReputation: ComparableDoubleOperationFilterInput
  """Engagement reputation for the account. This includes all plan types."""
  accountEngagementScore: ComparableDoubleOperationFilterInput
  """Amount of storage for the account."""
  storageBytes: ComparableInt32OperationFilterInput
  """
  Item count for plan. For transaction plans this represents to total amount of sent transaction (To, CC, and BCC recipients). For email marketing this represents the max contact count in the date range sent
  """
  itemCount: ComparableInt32OperationFilterInput
  """Account level stats by add-on type."""
  addOns: ListFilterInputTypeOfAccountPlanAddOnStatsFilterInput
}


"""Account level stats by plan type."""
input AccountOverallStatsSortInput {
  """Plan Id"""
  id: SortEnumType
  """Plan type"""
  type: SortEnumType
  """Sender reputation for this plan."""
  senderReputation: SortEnumType
  """Engagement reputation for this plan."""
  engagementScore: SortEnumType
  """Sender reputation for the account. This includes all plan types."""
  accountSenderReputation: SortEnumType
  """Engagement reputation for the account. This includes all plan types."""
  accountEngagementScore: SortEnumType
  """Amount of storage for the account."""
  storageBytes: SortEnumType
  """
  Item count for plan. For transaction plans this represents to total amount of sent transaction (To, CC, and BCC recipients). For email marketing this represents the max contact count in the date range sent
  """
  itemCount: SortEnumType
}


input TotalContactsByDayFilterInput {
  and: [TotalContactsByDayFilterInput!]
  or: [TotalContactsByDayFilterInput!]
  statUtc: ComparableDateTimeOperationFilterInput
  totalActiveContacts: ComparableInt32OperationFilterInput
}


input TotalContactsByDaySortInput {
  statUtc: SortEnumType
  totalActiveContacts: SortEnumType
}


input TotalEmailsByDayFilterInput {
  and: [TotalEmailsByDayFilterInput!]
  or: [TotalEmailsByDayFilterInput!]
  statUtc: ComparableDateTimeOperationFilterInput
  totalEmails: ComparableInt32OperationFilterInput
}


input TotalEmailsByDaySortInput {
  statUtc: SortEnumType
  totalEmails: SortEnumType
}


"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [UserEdge!]
  """A flattened list of the nodes."""
  nodes: [User!]
  totalCount: Int!
}


"""A connection to a list of items."""
type AccountPlanConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AccountPlanEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountPlan]
  totalCount: Int!
}


"""A connection to a list of items."""
type AccountInvoiceInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AccountInvoiceInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountInvoiceInfo!]
  totalCount: Int!
}


"""A connection to a list of items."""
type SecurityRoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [SecurityRoleEdge!]
  """A flattened list of the nodes."""
  nodes: [SecurityRole!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TotalContactsByDayConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TotalContactsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [TotalContactsByDay!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TotalEmailsByDayConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TotalEmailsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [TotalEmailsByDay!]
  totalCount: Int!
}


input AccountDomainFilterInput {
  and: [AccountDomainFilterInput!]
  or: [AccountDomainFilterInput!]
  id: ComparableInt64OperationFilterInput
  domain: StringOperationFilterInput
  type: DomainTypeOperationFilterInput
  isStrict: BooleanOperationFilterInput
  """Only used for bounce domains"""
  isOwnerVerified: BooleanOperationFilterInput
  """Only used for bounce domains"""
  lastOwnerVerifiedUtc: ComparableNullableOfDateTimeOperationFilterInput
  valid: BooleanOperationFilterInput
  lastVerifiedUtc: ComparableDateTimeOperationFilterInput
  """Only used for tracking domains. Defaults to 'True'."""
  trackingEnabled: BooleanOperationFilterInput
  includedPaths: ListStringOperationFilterInput
  excludedPaths: ListStringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  selectors: ListFilterInputTypeOfAccountDomainSelectorFilterInput
  pages: ListFilterInputTypeOfAccountDomainPageFilterInput
}


input AccountDomainSortInput {
  id: SortEnumType
  domain: SortEnumType
  type: SortEnumType
  isStrict: SortEnumType
  """Only used for bounce domains"""
  isOwnerVerified: SortEnumType
  """Only used for bounce domains"""
  lastOwnerVerifiedUtc: SortEnumType
  valid: SortEnumType
  lastVerifiedUtc: SortEnumType
  """Only used for tracking domains. Defaults to 'True'."""
  trackingEnabled: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type AccountDomainConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AccountDomainEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountDomain!]
  totalCount: Int!
}


"""Represents an permission that can be granted to a security group"""
input PermissionFilterInput {
  and: [PermissionFilterInput!]
  or: [PermissionFilterInput!]
  """Unique permission ID"""
  id: ComparableInt64OperationFilterInput
  """Unique name of permission"""
  name: StringOperationFilterInput
  """Unique key of permission"""
  key: StringOperationFilterInput
  """Description of the actions that can be performed with this permission"""
  description: StringOperationFilterInput
  category: StringOperationFilterInput
  """Collection of users"""
  users: ListFilterInputTypeOfUserPermissionFilterInput
}


"""Represents an permission that can be granted to a security group"""
input PermissionSortInput {
  """Unique permission ID"""
  id: SortEnumType
  """Unique name of permission"""
  name: SortEnumType
  """Unique key of permission"""
  key: SortEnumType
  """Description of the actions that can be performed with this permission"""
  description: SortEnumType
  category: SortEnumType
}


"""A request for someone to join the account"""
input InviteFilterInput {
  and: [InviteFilterInput!]
  or: [InviteFilterInput!]
  """Unique invite ID"""
  id: ComparableInt64OperationFilterInput
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits.
  """
  isPartner: BooleanOperationFilterInput
  """
  Indicates whether the user is a billing contact for the account. Defaults to false.
  """
  isBillingContact: BooleanOperationFilterInput
  """
  Indicates whether the user should receive account level communication. Defaults to false.
  """
  isAccountContact: BooleanOperationFilterInput
  """First name of invitee"""
  firstName: StringOperationFilterInput
  """Last name of invitee"""
  lastName: StringOperationFilterInput
  """Language of invitee"""
  language: StringOperationFilterInput
  """Email address of invitee"""
  emailAddr: EmailFilterInput
  """
  Comma-delimited string of security group IDs that the user will be associated with once registered.
  """
  securityGroupIds: StringOperationFilterInput
  """Status of invite"""
  inviteStatus: InviteStatusOperationFilterInput
  """Date/time the invite was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """ID of the account"""
  accountId: ComparableInt64OperationFilterInput
  """ID of user that created the invite"""
  userId: ComparableInt64OperationFilterInput
}


"""A request for someone to join the account"""
input InviteSortInput {
  """Unique invite ID"""
  id: SortEnumType
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits.
  """
  isPartner: SortEnumType
  """
  Indicates whether the user is a billing contact for the account. Defaults to false.
  """
  isBillingContact: SortEnumType
  """
  Indicates whether the user should receive account level communication. Defaults to false.
  """
  isAccountContact: SortEnumType
  """First name of invitee"""
  firstName: SortEnumType
  """Last name of invitee"""
  lastName: SortEnumType
  """Language of invitee"""
  language: SortEnumType
  """Email address of invitee"""
  emailAddr: EmailSortInput
  """
  Comma-delimited string of security group IDs that the user will be associated with once registered.
  """
  securityGroupIds: SortEnumType
  """Status of invite"""
  inviteStatus: SortEnumType
  """Date/time the invite was created"""
  createdUtc: SortEnumType
  """ID of the account"""
  accountId: SortEnumType
  """ID of user that created the invite"""
  userId: SortEnumType
}


"""A connection to a list of items."""
type InviteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [InviteEdge!]
  """A flattened list of the nodes."""
  nodes: [Invite!]
  totalCount: Int!
}


"""
Service plan for a specific service type. When creating an account, a service plan is selected, which creates and account plan based on the service plan.
"""
input ServicePlanFilterInput {
  and: [ServicePlanFilterInput!]
  or: [ServicePlanFilterInput!]
  """Unique service plan ID"""
  id: StringOperationFilterInput
  """Name of service plan"""
  name: StringOperationFilterInput
  """Description of service plan"""
  description: StringOperationFilterInput
  """Service plan type"""
  serviceType: ServiceTypeOperationFilterInput
  """
  Non-monetary value of a credit within a service plan. This is only used for plans that use credits.
  """
  creditValue: ComparableDoubleOperationFilterInput
  """Internal use only"""
  _do: ComparableInt32OperationFilterInput
  """
  Collection of scales used for recurring plans based, for example, number of active subscribers.
  """
  scales: ListFilterInputTypeOfServicePlanScaleFilterInput
  """
  Collection of credits available for purchase when using a credit-based service plan.
  """
  credits: ListFilterInputTypeOfServicePlanCreditItemFilterInput
  """Collections of features available with the service plan"""
  features: ListFilterInputTypeOfServicePlanFeatureViewModelFilterInput
}


"""
Service plan for a specific service type. When creating an account, a service plan is selected, which creates and account plan based on the service plan.
"""
input ServicePlanSortInput {
  """Unique service plan ID"""
  id: SortEnumType
  """Name of service plan"""
  name: SortEnumType
  """Description of service plan"""
  description: SortEnumType
  """Service plan type"""
  serviceType: SortEnumType
  """
  Non-monetary value of a credit within a service plan. This is only used for plans that use credits.
  """
  creditValue: SortEnumType
  """Internal use only"""
  _do: SortEnumType
}


"""A connection to a list of items."""
type ServicePlanConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ServicePlanEdge!]
  """A flattened list of the nodes."""
  nodes: [ServicePlan!]
  totalCount: Int!
}


input TemplateInformationSortInput {
  id: SortEnumType
  name: SortEnumType
  language: SortEnumType
  description: SortEnumType
  thumbnailUrl: SortEnumType
  templateContentUrl: SortEnumType
  category: CategorySortInput
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
  createdBy: SortEnumType
  createdUtc: SortEnumType
  type: SortEnumType
  accountId: SortEnumType
}


input TemplateInformationFilterInput {
  and: [TemplateInformationFilterInput!]
  or: [TemplateInformationFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  language: StringOperationFilterInput
  description: StringOperationFilterInput
  thumbnailUrl: StringOperationFilterInput
  templateContentUrl: StringOperationFilterInput
  category: CategoryFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableNullableOfDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableNullableOfDateTimeOperationFilterInput
  tags: ListStringOperationFilterInput
  history: ListFilterInputTypeOfTemplateHistoryFilterInput
  type: TemplateTypeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


"""A connection to a list of items."""
type TemplateInformationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TemplateInformationEdge!]
  """A flattened list of the nodes."""
  nodes: [TemplateInformation!]
  totalCount: Int!
}


input TagFilterInput {
  and: [TagFilterInput!]
  or: [TagFilterInput!]
  name: StringOperationFilterInput
  type: EntityTypeOperationFilterInput
  isSystem: BooleanOperationFilterInput
  count: ComparableInt32OperationFilterInput
}


input TagSortInput {
  name: SortEnumType
  type: SortEnumType
  isSystem: SortEnumType
  count: SortEnumType
}


"""A connection to a list of items."""
type TagConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TagEdge!]
  """A flattened list of the nodes."""
  nodes: [Tag!]
  totalCount: Int!
}


input AudienceInfoFilterInput {
  and: [AudienceInfoFilterInput!]
  or: [AudienceInfoFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  gdprTitle: StringOperationFilterInput
  gdprDescription: StringOperationFilterInput
  gdprLegalTerms: StringOperationFilterInput
  companyName: StringOperationFilterInput
  streetAddress: StringOperationFilterInput
  streetAddress2: StringOperationFilterInput
  addressLocality: StringOperationFilterInput
  addressRegion: StringOperationFilterInput
  postalCode: StringOperationFilterInput
  addressCountry: StringOperationFilterInput
  phone: StringOperationFilterInput
  website: StringOperationFilterInput
  defaultFromEmail: StringOperationFilterInput
  defaultFromText: StringOperationFilterInput
  requireDoubleOptIn: BooleanOperationFilterInput
  doubleOptInFromName: StringOperationFilterInput
  doubleOptInFromEmail: StringOperationFilterInput
  doubleOptInSubject: StringOperationFilterInput
  customKeyDataFieldId: ComparableNullableOfInt64OperationFilterInput
  dateFormat: StringOperationFilterInput
  dateTimeFormat: StringOperationFilterInput
  numberFormat: StringOperationFilterInput
  """
  Only populated when getting a list of audiences or when getting a campaign.
  """
  mailDomain: AccountDomainFilterInput
  totalContacts: ComparableInt32OperationFilterInput
  totalActiveContacts: ComparableInt32OperationFilterInput
  totalUnconfirmedContacts: ComparableInt32OperationFilterInput
  totalUndeliverableContacts: ComparableInt32OperationFilterInput
  totalUnsubscribedContacts: ComparableInt32OperationFilterInput
  totalComplaintContacts: ComparableInt32OperationFilterInput
  totalSuppressedContacts: ComparableInt32OperationFilterInput
  tags: ListStringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  lastModifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input AudienceInfoSortInput {
  id: SortEnumType
  name: SortEnumType
  gdprTitle: SortEnumType
  gdprDescription: SortEnumType
  gdprLegalTerms: SortEnumType
  companyName: SortEnumType
  streetAddress: SortEnumType
  streetAddress2: SortEnumType
  addressLocality: SortEnumType
  addressRegion: SortEnumType
  postalCode: SortEnumType
  addressCountry: SortEnumType
  phone: SortEnumType
  website: SortEnumType
  defaultFromEmail: SortEnumType
  defaultFromText: SortEnumType
  requireDoubleOptIn: SortEnumType
  doubleOptInFromName: SortEnumType
  doubleOptInFromEmail: SortEnumType
  doubleOptInSubject: SortEnumType
  customKeyDataFieldId: SortEnumType
  dateFormat: SortEnumType
  dateTimeFormat: SortEnumType
  numberFormat: SortEnumType
  """
  Only populated when getting a list of audiences or when getting a campaign.
  """
  mailDomain: AccountDomainSortInput
  totalContacts: SortEnumType
  totalActiveContacts: SortEnumType
  totalUnconfirmedContacts: SortEnumType
  totalUndeliverableContacts: SortEnumType
  totalUnsubscribedContacts: SortEnumType
  totalComplaintContacts: SortEnumType
  totalSuppressedContacts: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  lastModifiedUtc: SortEnumType
  modifiedBy: SortEnumType
  accountId: SortEnumType
}


input AudienceStatsByDayFilterInput {
  and: [AudienceStatsByDayFilterInput!]
  or: [AudienceStatsByDayFilterInput!]
  statUtc: ComparableDateTimeOperationFilterInput
  contacts: ComparableInt32OperationFilterInput
  activeContacts: ComparableInt32OperationFilterInput
  pendingContacts: ComparableInt32OperationFilterInput
  undeliverableContacts: ComparableInt32OperationFilterInput
  unsubscribedContacts: ComparableInt32OperationFilterInput
  complaintContacts: ComparableInt32OperationFilterInput
  scrubbedContacts: ComparableInt32OperationFilterInput
}


input AudienceStatsByDaySortInput {
  statUtc: SortEnumType
  contacts: SortEnumType
  activeContacts: SortEnumType
  pendingContacts: SortEnumType
  undeliverableContacts: SortEnumType
  unsubscribedContacts: SortEnumType
  complaintContacts: SortEnumType
  scrubbedContacts: SortEnumType
}


"""A connection to a list of items."""
type AudienceInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AudienceInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [AudienceInfo!]
  totalCount: Int!
}


"""A connection to a list of items."""
type AudienceStatsByDayConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AudienceStatsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [AudienceStatsByDay!]
  totalCount: Int!
}


input DataFieldFilterInput {
  and: [DataFieldFilterInput!]
  or: [DataFieldFilterInput!]
  id: ComparableInt64OperationFilterInput
  dataType: DataTypeOperationFilterInput
  labelText: StringOperationFilterInput
  labelTranslations: LabelsFilterInput
  description: StringOperationFilterInput
  required: BooleanOperationFilterInput
  isPublic: BooleanOperationFilterInput
  isPrimaryKey: BooleanOperationFilterInput
  isGdprField: BooleanOperationFilterInput
  mergeTag: StringOperationFilterInput
  defaultValue: StringOperationFilterInput
  minNbr: ComparableNullableOfDecimalOperationFilterInput
  maxNbr: ComparableNullableOfDecimalOperationFilterInput
  minUtc: ComparableNullableOfDateTimeOperationFilterInput
  maxUtc: ComparableNullableOfDateTimeOperationFilterInput
  category: DatafieldCategoryFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  conditions: ListFilterInputTypeOfRuleFilterInput
}


input DataFieldSortInput {
  id: SortEnumType
  dataType: SortEnumType
  labelText: SortEnumType
  labelTranslations: LabelsSortInput
  description: SortEnumType
  required: SortEnumType
  isPublic: SortEnumType
  isPrimaryKey: SortEnumType
  isGdprField: SortEnumType
  mergeTag: SortEnumType
  defaultValue: SortEnumType
  minNbr: SortEnumType
  maxNbr: SortEnumType
  minUtc: SortEnumType
  maxUtc: SortEnumType
  category: DatafieldCategorySortInput
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type DataFieldConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [DataFieldEdge!]
  """A flattened list of the nodes."""
  nodes: [DataField!]
  totalCount: Int!
}


input DatafieldCategoryFilterInput {
  and: [DatafieldCategoryFilterInput!]
  or: [DatafieldCategoryFilterInput!]
  id: ComparableInt64OperationFilterInput
  categoryName: StringOperationFilterInput
}


input DatafieldCategorySortInput {
  id: SortEnumType
  categoryName: SortEnumType
}


"""A connection to a list of items."""
type DatafieldCategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [DatafieldCategoryEdge!]
  """A flattened list of the nodes."""
  nodes: [DatafieldCategory!]
  totalCount: Int!
}


input ExportFilterInput {
  and: [ExportFilterInput!]
  or: [ExportFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  notificationEmail: EmailFilterInput
  contactStatus: NullableOfSubscriberStatusOperationFilterInput
  groupIds: ListComparableInt64OperationFilterInput
  behaviors: ListContactBehaviorOperationFilterInput
  fields: ListStringOperationFilterInput
  delimiter: ValueDelimiterOperationFilterInput
  status: ExportStatusOperationFilterInput
  downloadUrl: StringOperationFilterInput
  audienceId: ComparableInt64OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
}


input ExportSortInput {
  id: SortEnumType
  name: SortEnumType
  notificationEmail: EmailSortInput
  contactStatus: SortEnumType
  delimiter: SortEnumType
  status: SortEnumType
  downloadUrl: SortEnumType
  audienceId: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
}


"""A connection to a list of items."""
type ExportConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ExportEdge!]
  """A flattened list of the nodes."""
  nodes: [Export!]
  totalCount: Int!
}


input AudienceGroupInfoFilterInput {
  and: [AudienceGroupInfoFilterInput!]
  or: [AudienceGroupInfoFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  isPublic: BooleanOperationFilterInput
  isDynamic: BooleanOperationFilterInput
}


input AudienceGroupInfoSortInput {
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  isPublic: SortEnumType
  isDynamic: SortEnumType
}


"""A connection to a list of items."""
type AudienceGroupInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AudienceGroupInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [AudienceGroupInfo!]
  totalCount: Int!
}


input ImportFilterInput {
  and: [ImportFilterInput!]
  or: [ImportFilterInput!]
  id: ComparableInt64OperationFilterInput
  groups: ListComparableInt64OperationFilterInput
  columns: ListFilterInputTypeOfColumnFilterInput
  deleteArea: ImportDeleteAreaOperationFilterInput
  update: BooleanOperationFilterInput
  unsubscribe: BooleanOperationFilterInput
  markUndeliverable: BooleanOperationFilterInput
  skipFirstRow: BooleanOperationFilterInput
  confirmEmail: StringOperationFilterInput
  importEmail: StringOperationFilterInput
  delimiter: ValueDelimiterOperationFilterInput
  status: ImportStatusOperationFilterInput
  fileRecords: ComparableInt32OperationFilterInput
  recordsAdded: ComparableInt32OperationFilterInput
  recordsUpdated: ComparableInt32OperationFilterInput
  badRecords: ComparableInt32OperationFilterInput
  duplicateRecords: ComparableInt32OperationFilterInput
  jobStartedUtc: ComparableNullableOfDateTimeOperationFilterInput
  jobEndedUtc: ComparableNullableOfDateTimeOperationFilterInput
  errorCode: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
}


input ImportSortInput {
  id: SortEnumType
  deleteArea: SortEnumType
  update: SortEnumType
  unsubscribe: SortEnumType
  markUndeliverable: SortEnumType
  skipFirstRow: SortEnumType
  confirmEmail: SortEnumType
  importEmail: SortEnumType
  delimiter: SortEnumType
  status: SortEnumType
  fileRecords: SortEnumType
  recordsAdded: SortEnumType
  recordsUpdated: SortEnumType
  badRecords: SortEnumType
  duplicateRecords: SortEnumType
  jobStartedUtc: SortEnumType
  jobEndedUtc: SortEnumType
  errorCode: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
}


"""A connection to a list of items."""
type ImportConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ImportEdge!]
  """A flattened list of the nodes."""
  nodes: [Import!]
  totalCount: Int!
}


input ContactConversationFilterInput {
  and: [ContactConversationFilterInput!]
  or: [ContactConversationFilterInput!]
  id: ComparableInt64OperationFilterInput
  fromContact: BooleanOperationFilterInput
  message: StringOperationFilterInput
  status: StatusOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input ContactConversationSortInput {
  id: SortEnumType
  fromContact: SortEnumType
  message: SortEnumType
  status: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type ContactConversationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ContactConversationEdge!]
  """A flattened list of the nodes."""
  nodes: [ContactConversation!]
  totalCount: Int!
}


input ContactNoteFilterInput {
  and: [ContactNoteFilterInput!]
  or: [ContactNoteFilterInput!]
  id: ComparableInt64OperationFilterInput
  message: StringOperationFilterInput
  status: StatusOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input ContactNoteSortInput {
  id: SortEnumType
  message: SortEnumType
  status: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type ContactNoteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ContactNoteEdge!]
  """A flattened list of the nodes."""
  nodes: [ContactNote!]
  totalCount: Int!
}


input ContactJourneyGoalFilterInput {
  and: [ContactJourneyGoalFilterInput!]
  or: [ContactJourneyGoalFilterInput!]
  goalReachedUtc: ComparableDateTimeOperationFilterInput
  journeyName: StringOperationFilterInput
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  type: JourneyGoalTypeOperationFilterInput
  """Only used for GLOBAL goals"""
  filter: ConditionGroupFilterInput
  conversion: JourneyConversionFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  journeyId: ComparableInt64OperationFilterInput
}


input ContactJourneyGoalSortInput {
  goalReachedUtc: SortEnumType
  journeyName: SortEnumType
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  type: SortEnumType
  """Only used for GLOBAL goals"""
  filter: ConditionGroupSortInput
  conversion: JourneyConversionSortInput
  createdBy: SortEnumType
  createdUtc: SortEnumType
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
  journeyId: SortEnumType
}


input ContactJourneyConversionFilterInput {
  and: [ContactJourneyConversionFilterInput!]
  or: [ContactJourneyConversionFilterInput!]
  journeyName: StringOperationFilterInput
  valueWhenConverted: ComparableDoubleOperationFilterInput
  convertedUtc: ComparableDateTimeOperationFilterInput
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  value: ComparableDoubleOperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  journeyId: ComparableInt64OperationFilterInput
}


input ContactJourneyConversionSortInput {
  journeyName: SortEnumType
  valueWhenConverted: SortEnumType
  convertedUtc: SortEnumType
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  value: SortEnumType
  createdBy: SortEnumType
  createdUtc: SortEnumType
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
  journeyId: SortEnumType
}


input ContactInfoSortInput {
  id: SortEnumType
  firstName: SortEnumType
  lastName: SortEnumType
  rating: SortEnumType
  longitude: SortEnumType
  latitude: SortEnumType
  streetAddress: SortEnumType
  streetAddress2: SortEnumType
  addressLocality: SortEnumType
  addressRegion: SortEnumType
  postalCode: SortEnumType
  addressCountry: SortEnumType
  timeZone: SortEnumType
  language: SortEnumType
  sendFormat: SortEnumType
  status: SortEnumType
  email: SortEnumType
  optInUtc: SortEnumType
  optInSource: SortEnumType
  optInIp: SortEnumType
  confirmedUtc: SortEnumType
  confirmedIp: SortEnumType
  optOutUtc: SortEnumType
  optOutSource: SortEnumType
  optOutIp: SortEnumType
  optOutReason: SortEnumType
  softBounceCount: SortEnumType
  hardBounceCount: SortEnumType
  audienceId: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


input SubscriberEventStatsFilterInput {
  and: [SubscriberEventStatsFilterInput!]
  or: [SubscriberEventStatsFilterInput!]
  entityType: EntityTypeOperationFilterInput
  entityId: ComparableInt64OperationFilterInput
  combinationId: ComparableInt64OperationFilterInput
  eventType: EventTypeOperationFilterInput
  serverResponse: StringOperationFilterInput
  eventUtc: ComparableDateTimeOperationFilterInput
}


input SubscriberEventStatsSortInput {
  entityType: SortEnumType
  entityId: SortEnumType
  combinationId: SortEnumType
  eventType: SortEnumType
  serverResponse: SortEnumType
  eventUtc: SortEnumType
}


"""A connection to a list of items."""
type ContactJourneyGoalConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ContactJourneyGoalEdge!]
  """A flattened list of the nodes."""
  nodes: [ContactJourneyGoal!]
  totalCount: Int!
}


"""A connection to a list of items."""
type ContactJourneyConversionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ContactJourneyConversionEdge!]
  """A flattened list of the nodes."""
  nodes: [ContactJourneyConversion!]
  totalCount: Int!
}


"""A connection to a list of items."""
type ContactInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ContactInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [ContactInfo!]
  totalCount: Int!
}


"""A connection to a list of items."""
type SubscriberEventStatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [SubscriberEventStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [SubscriberEventStats!]
  totalCount: Int!
}


input FormInfoFilterInput {
  and: [FormInfoFilterInput!]
  or: [FormInfoFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  pathName: StringOperationFilterInput
  status: ValidStatusOperationFilterInput
  type: NullableOfFormTypeOperationFilterInput
  dateFormat: StringOperationFilterInput
  dateTimeFormat: StringOperationFilterInput
  numberFormat: StringOperationFilterInput
  startUtc: ComparableNullableOfDateTimeOperationFilterInput
  endUtc: ComparableNullableOfDateTimeOperationFilterInput
  title: StringOperationFilterInput
  description: StringOperationFilterInput
  metaDescription: StringOperationFilterInput
  metaKeywords: StringOperationFilterInput
  shareImageUrl: StringOperationFilterInput
  faviconUrl: StringOperationFilterInput
  translations: TranslationsFilterInput
  totalVisits: ComparableInt32OperationFilterInput
  uniqueVisits: ComparableInt32OperationFilterInput
  uniqueAbandons: ComparableInt32OperationFilterInput
  totalCompleteSubmits: ComparableInt32OperationFilterInput
  totalPartialSubmits: ComparableInt32OperationFilterInput
  tags: ListStringOperationFilterInput
  audienceId: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input FormInfoSortInput {
  id: SortEnumType
  name: SortEnumType
  pathName: SortEnumType
  status: SortEnumType
  type: SortEnumType
  dateFormat: SortEnumType
  dateTimeFormat: SortEnumType
  numberFormat: SortEnumType
  startUtc: SortEnumType
  endUtc: SortEnumType
  title: SortEnumType
  description: SortEnumType
  metaDescription: SortEnumType
  metaKeywords: SortEnumType
  shareImageUrl: SortEnumType
  faviconUrl: SortEnumType
  translations: TranslationsSortInput
  totalVisits: SortEnumType
  uniqueVisits: SortEnumType
  uniqueAbandons: SortEnumType
  totalCompleteSubmits: SortEnumType
  totalPartialSubmits: SortEnumType
  audienceId: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
  accountId: SortEnumType
}


input SubmissionResponseFilterInput {
  and: [SubmissionResponseFilterInput!]
  or: [SubmissionResponseFilterInput!]
  id: ComparableInt64OperationFilterInput
  submissionUtc: ComparableDateTimeOperationFilterInput
  timeSpentMinutes: ComparableDoubleOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  eventType: EventTypeOperationFilterInput
  contactId: ComparableNullableOfInt64OperationFilterInput
  sourceId: ComparableNullableOfInt64OperationFilterInput
  respondentId: ComparableInt64OperationFilterInput
  answers: ListFilterInputTypeOfSubmissionAnswerFilterInput
}


input SubmissionResponseSortInput {
  id: SortEnumType
  submissionUtc: SortEnumType
  timeSpentMinutes: SortEnumType
  createdUtc: SortEnumType
  eventType: SortEnumType
  contactId: SortEnumType
  sourceId: SortEnumType
  respondentId: SortEnumType
}


"""A connection to a list of items."""
type FormInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [FormInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [FormInfo!]
  totalCount: Int!
}


"""A connection to a list of items."""
type SubmissionResponseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [SubmissionResponseEdge!]
  """A flattened list of the nodes."""
  nodes: [SubmissionResponse!]
  totalCount: Int!
}


input QuestionInfoFilterInput {
  and: [QuestionInfoFilterInput!]
  or: [QuestionInfoFilterInput!]
  id: StringOperationFilterInput
  text: StringOperationFilterInput
  type: QuestionTypeOperationFilterInput
  orientation: QuestionOrientationOperationFilterInput
  display: BooleanOperationFilterInput
  isActive: BooleanOperationFilterInput
  displayOrder: ComparableInt32OperationFilterInput
  required: BooleanOperationFilterInput
  allowOther: BooleanOperationFilterInput
  sourceType: NullableOfQuestionSourceTypeOperationFilterInput
  sourceName: StringOperationFilterInput
  overwriteSource: BooleanOperationFilterInput
  defaultValue: StringOperationFilterInput
  placeholder: StringOperationFilterInput
  prefixType: StringOperationFilterInput
  prefixContent: StringOperationFilterInput
  suffixType: StringOperationFilterInput
  suffixContent: StringOperationFilterInput
  backgroundPattern: StringOperationFilterInput
  matrixHeaderBackground: StringOperationFilterInput
  boldCategoryText: BooleanOperationFilterInput
  categoryBackground: StringOperationFilterInput
  contentStyles: FormQuestionStylesFilterInput
  ratingType: NullableOfRatingTypeOperationFilterInput
  ratingCount: ComparableInt32OperationFilterInput
  minRatingValue: ComparableInt32OperationFilterInput
  maxRatingValue: ComparableInt32OperationFilterInput
  minRatingTitle: StringOperationFilterInput
  maxRatingTitle: StringOperationFilterInput
  ratingColor: StringOperationFilterInput
  totalAnswered: ComparableInt32OperationFilterInput
  totalSkipped: ComparableInt32OperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
}


input QuestionInfoSortInput {
  id: SortEnumType
  text: SortEnumType
  type: SortEnumType
  orientation: SortEnumType
  display: SortEnumType
  isActive: SortEnumType
  displayOrder: SortEnumType
  required: SortEnumType
  allowOther: SortEnumType
  sourceType: SortEnumType
  sourceName: SortEnumType
  overwriteSource: SortEnumType
  defaultValue: SortEnumType
  placeholder: SortEnumType
  prefixType: SortEnumType
  prefixContent: SortEnumType
  suffixType: SortEnumType
  suffixContent: SortEnumType
  backgroundPattern: SortEnumType
  matrixHeaderBackground: SortEnumType
  boldCategoryText: SortEnumType
  categoryBackground: SortEnumType
  contentStyles: FormQuestionStylesSortInput
  ratingType: SortEnumType
  ratingCount: SortEnumType
  minRatingValue: SortEnumType
  maxRatingValue: SortEnumType
  minRatingTitle: SortEnumType
  maxRatingTitle: SortEnumType
  ratingColor: SortEnumType
  totalAnswered: SortEnumType
  totalSkipped: SortEnumType
  createdBy: SortEnumType
  createdUtc: SortEnumType
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
}


"""A connection to a list of items."""
type QuestionInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [QuestionInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [QuestionInfo!]
  totalCount: Int!
}


input FolderFilterInput {
  and: [FolderFilterInput!]
  or: [FolderFilterInput!]
  id: StringOperationFilterInput
  parentId: StringOperationFilterInput
  name: StringOperationFilterInput
  hasChildren: BooleanOperationFilterInput
}


input FolderSortInput {
  id: SortEnumType
  parentId: SortEnumType
  name: SortEnumType
  hasChildren: SortEnumType
}


"""A connection to a list of items."""
type FolderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [FolderEdge!]
  """A flattened list of the nodes."""
  nodes: [Folder!]
  totalCount: Int!
}


input FileInfoFilterInput {
  and: [FileInfoFilterInput!]
  or: [FileInfoFilterInput!]
  id: ComparableInt64OperationFilterInput
  folderId: StringOperationFilterInput
  name: StringOperationFilterInput
  thumbnailUrl: StringOperationFilterInput
  contentUrl: StringOperationFilterInput
  publicUrl: StringOperationFilterInput
  type: FileTypeOperationFilterInput
  editorType: NullableOfEditorTypeOperationFilterInput
  size: ComparableNullableOfInt32OperationFilterInput
  tags: ListStringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  versions: ListFilterInputTypeOfVersionFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input FileInfoSortInput {
  id: SortEnumType
  folderId: SortEnumType
  name: SortEnumType
  thumbnailUrl: SortEnumType
  contentUrl: SortEnumType
  publicUrl: SortEnumType
  type: SortEnumType
  editorType: SortEnumType
  size: SortEnumType
  createdUtc: SortEnumType
  modifiedUtc: SortEnumType
  accountId: SortEnumType
}


input FileStorageStatsByDayFilterInput {
  and: [FileStorageStatsByDayFilterInput!]
  or: [FileStorageStatsByDayFilterInput!]
  accountId: ComparableInt64OperationFilterInput
  statUtc: ComparableDateTimeOperationFilterInput
  totalStorage: ComparableInt32OperationFilterInput
  generalStorage: ComparableInt32OperationFilterInput
  imageStorage: ComparableInt32OperationFilterInput
}


input FileStorageStatsByDaySortInput {
  accountId: SortEnumType
  statUtc: SortEnumType
  totalStorage: SortEnumType
  generalStorage: SortEnumType
  imageStorage: SortEnumType
}


"""A connection to a list of items."""
type FileInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [FileInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [FileInfo!]
  totalCount: Int!
}


"""A connection to a list of items."""
type FileStorageStatsByDayConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [FileStorageStatsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [FileStorageStatsByDay!]
  totalCount: Int!
}


input CampaignInfoFilterInput {
  and: [CampaignInfoFilterInput!]
  or: [CampaignInfoFilterInput!]
  id: StringOperationFilterInput
  audienceId: StringOperationFilterInput
  type: CampaignTypeOperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  campaignContentInfo: ListFilterInputTypeOfCampaignContentHistoryFilterInput
  language: StringOperationFilterInput
  isMultivariate: BooleanOperationFilterInput
  isArchived: BooleanOperationFilterInput
  journeyStatus: NullableOfJourneyStatusOperationFilterInput
  journeyId: ComparableNullableOfInt64OperationFilterInput
  scheduledToSendUtc: ComparableNullableOfDateTimeOperationFilterInput
  timeJumper: BooleanOperationFilterInput
  sendScheduleType: SendScheduleTypeOperationFilterInput
  sendStatus: CampaignSendStatusOperationFilterInput
  sendsUtc: ListComparableDateTimeOperationFilterInput
  mvWinType: NullableOfMvWinTypeOperationFilterInput
  mvWinWait: ComparableInt32OperationFilterInput
  mvWinWaitType: NullableOfMvTimeMeasurementOperationFilterInput
  tags: ListStringOperationFilterInput
  createdUtc: ComparableNullableOfDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableNullableOfDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input CampaignInfoSortInput {
  id: SortEnumType
  audienceId: SortEnumType
  type: SortEnumType
  name: SortEnumType
  description: SortEnumType
  language: SortEnumType
  isMultivariate: SortEnumType
  isArchived: SortEnumType
  journeyStatus: SortEnumType
  journeyId: SortEnumType
  scheduledToSendUtc: SortEnumType
  timeJumper: SortEnumType
  sendScheduleType: SortEnumType
  sendStatus: SortEnumType
  mvWinType: SortEnumType
  mvWinWait: SortEnumType
  mvWinWaitType: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


input ContactFilterInput {
  and: [ContactFilterInput!]
  or: [ContactFilterInput!]
  id: StringOperationFilterInput
  firstName: StringOperationFilterInput
  lastName: StringOperationFilterInput
  rating: ComparableNullableOfDoubleOperationFilterInput
  longitude: ComparableNullableOfDecimalOperationFilterInput
  latitude: ComparableNullableOfDecimalOperationFilterInput
  streetAddress: StringOperationFilterInput
  streetAddress2: StringOperationFilterInput
  addressLocality: StringOperationFilterInput
  addressRegion: StringOperationFilterInput
  postalCode: StringOperationFilterInput
  addressCountry: StringOperationFilterInput
  timeZone: StringOperationFilterInput
  language: StringOperationFilterInput
  sendFormat: SendFormatOperationFilterInput
  status: ContactStatusOperationFilterInput
  email: StringOperationFilterInput
  optInUtc: ComparableNullableOfDateTimeOperationFilterInput
  optInSource: OptInSourceOperationFilterInput
  optInIp: StringOperationFilterInput
  confirmedUtc: ComparableNullableOfDateTimeOperationFilterInput
  confirmedIp: StringOperationFilterInput
  optOutUtc: ComparableNullableOfDateTimeOperationFilterInput
  optOutSource: OptOutSourceOperationFilterInput
  optOutIp: StringOperationFilterInput
  optOutReason: StringOperationFilterInput
  softBounceCount: ComparableInt32OperationFilterInput
  hardBounceCount: ComparableInt32OperationFilterInput
  audienceId: StringOperationFilterInput
  groups: ListFilterInputTypeOfAudienceGroupInfoViewModelFilterInput
  profileFields: ListFilterInputTypeOfProfileFieldFilterInput
  tags: ListStringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input ContactSortInput {
  id: SortEnumType
  firstName: SortEnumType
  lastName: SortEnumType
  rating: SortEnumType
  longitude: SortEnumType
  latitude: SortEnumType
  streetAddress: SortEnumType
  streetAddress2: SortEnumType
  addressLocality: SortEnumType
  addressRegion: SortEnumType
  postalCode: SortEnumType
  addressCountry: SortEnumType
  timeZone: SortEnumType
  language: SortEnumType
  sendFormat: SortEnumType
  status: SortEnumType
  email: SortEnumType
  optInUtc: SortEnumType
  optInSource: SortEnumType
  optInIp: SortEnumType
  confirmedUtc: SortEnumType
  confirmedIp: SortEnumType
  optOutUtc: SortEnumType
  optOutSource: SortEnumType
  optOutIp: SortEnumType
  optOutReason: SortEnumType
  softBounceCount: SortEnumType
  hardBounceCount: SortEnumType
  audienceId: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type CampaignInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [CampaignInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [CampaignInfo!]
  totalCount: Int!
}


"""A connection to a list of items."""
type ContactConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ContactEdge!]
  """A flattened list of the nodes."""
  nodes: [Contact!]
  totalCount: Int!
}


input HistoryFilterInput {
  and: [HistoryFilterInput!]
  or: [HistoryFilterInput!]
  version: ComparableDoubleOperationFilterInput
  lastModifiedUtc: ComparableDateTimeOperationFilterInput
}


input HistorySortInput {
  version: SortEnumType
  lastModifiedUtc: SortEnumType
}


"""A connection to a list of items."""
type HistoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [HistoryEdge!]
  """A flattened list of the nodes."""
  nodes: [History!]
  totalCount: Int!
}


input CountryFilterInput {
  and: [CountryFilterInput!]
  or: [CountryFilterInput!]
  code: StringOperationFilterInput
  name: StringOperationFilterInput
}


input CountrySortInput {
  code: SortEnumType
  name: SortEnumType
}


input StateFilterInput {
  and: [StateFilterInput!]
  or: [StateFilterInput!]
  code: StringOperationFilterInput
  name: StringOperationFilterInput
}


input StateSortInput {
  code: SortEnumType
  name: SortEnumType
}


input LanguageInfoFilterInput {
  and: [LanguageInfoFilterInput!]
  or: [LanguageInfoFilterInput!]
  language: StringOperationFilterInput
  name: StringOperationFilterInput
}


input LanguageInfoSortInput {
  language: SortEnumType
  name: SortEnumType
}


input SurveyInfoFilterInput {
  and: [SurveyInfoFilterInput!]
  or: [SurveyInfoFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  pathName: StringOperationFilterInput
  status: ValidStatusOperationFilterInput
  dateFormat: StringOperationFilterInput
  dateTimeFormat: StringOperationFilterInput
  numberFormat: StringOperationFilterInput
  startUtc: ComparableNullableOfDateTimeOperationFilterInput
  endUtc: ComparableNullableOfDateTimeOperationFilterInput
  title: StringOperationFilterInput
  description: StringOperationFilterInput
  metaDescription: StringOperationFilterInput
  metaKeywords: StringOperationFilterInput
  shareImageUrl: StringOperationFilterInput
  faviconUrl: StringOperationFilterInput
  translations: TranslationsFilterInput
  totalVisits: ComparableInt32OperationFilterInput
  uniqueVisits: ComparableInt32OperationFilterInput
  uniqueAbandons: ComparableInt32OperationFilterInput
  totalCompleteSubmits: ComparableInt32OperationFilterInput
  totalPartialSubmits: ComparableInt32OperationFilterInput
  tags: ListStringOperationFilterInput
  audienceId: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input SurveyInfoSortInput {
  id: SortEnumType
  name: SortEnumType
  pathName: SortEnumType
  status: SortEnumType
  dateFormat: SortEnumType
  dateTimeFormat: SortEnumType
  numberFormat: SortEnumType
  startUtc: SortEnumType
  endUtc: SortEnumType
  title: SortEnumType
  description: SortEnumType
  metaDescription: SortEnumType
  metaKeywords: SortEnumType
  shareImageUrl: SortEnumType
  faviconUrl: SortEnumType
  translations: TranslationsSortInput
  totalVisits: SortEnumType
  uniqueVisits: SortEnumType
  uniqueAbandons: SortEnumType
  totalCompleteSubmits: SortEnumType
  totalPartialSubmits: SortEnumType
  audienceId: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
  accountId: SortEnumType
}


"""A connection to a list of items."""
type SurveyInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [SurveyInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [SurveyInfo!]
  totalCount: Int!
}


input LandingPageInfoFilterInput {
  and: [LandingPageInfoFilterInput!]
  or: [LandingPageInfoFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  pathName: StringOperationFilterInput
  status: ValidStatusOperationFilterInput
  dateFormat: StringOperationFilterInput
  dateTimeFormat: StringOperationFilterInput
  numberFormat: StringOperationFilterInput
  title: StringOperationFilterInput
  description: StringOperationFilterInput
  metaDescription: StringOperationFilterInput
  metaKeywords: StringOperationFilterInput
  shareImageUrl: StringOperationFilterInput
  faviconUrl: StringOperationFilterInput
  translations: TranslationsFilterInput
  totalVisits: ComparableInt32OperationFilterInput
  uniqueVisits: ComparableInt32OperationFilterInput
  uniqueAbandons: ComparableInt32OperationFilterInput
  totalCompleteSubmits: ComparableInt32OperationFilterInput
  totalPartialSubmits: ComparableInt32OperationFilterInput
  tags: ListStringOperationFilterInput
  audienceId: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input LandingPageInfoSortInput {
  id: SortEnumType
  name: SortEnumType
  pathName: SortEnumType
  status: SortEnumType
  dateFormat: SortEnumType
  dateTimeFormat: SortEnumType
  numberFormat: SortEnumType
  title: SortEnumType
  description: SortEnumType
  metaDescription: SortEnumType
  metaKeywords: SortEnumType
  shareImageUrl: SortEnumType
  faviconUrl: SortEnumType
  translations: TranslationsSortInput
  totalVisits: SortEnumType
  uniqueVisits: SortEnumType
  uniqueAbandons: SortEnumType
  totalCompleteSubmits: SortEnumType
  totalPartialSubmits: SortEnumType
  audienceId: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
  accountId: SortEnumType
}


"""A connection to a list of items."""
type LandingPageInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [LandingPageInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [LandingPageInfo!]
  totalCount: Int!
}


input TransactionFilterInput {
  and: [TransactionFilterInput!]
  or: [TransactionFilterInput!]
  id: StringOperationFilterInput
  contactId: StringOperationFilterInput
  parentId: StringOperationFilterInput
  requestId: StringOperationFilterInput
  groupName: StringOperationFilterInput
  """Processing status"""
  status: TransactionStatusOperationFilterInput
  sendAtUtc: ComparableDateTimeOperationFilterInput
  processedUtc: ComparableNullableOfDateTimeOperationFilterInput
  trackOpens: BooleanOperationFilterInput
  trackClicks: BooleanOperationFilterInput
  trackReplies: BooleanOperationFilterInput
  trackDomains: BooleanOperationFilterInput
  stripQueryString: BooleanOperationFilterInput
  showRecipients: BooleanOperationFilterInput
  ignoreSuppressCheck: BooleanOperationFilterInput
  autoGenerateText: BooleanOperationFilterInput
  autoGenerateHtml: BooleanOperationFilterInput
  enableViewOnline: BooleanOperationFilterInput
  enableAnalytics: BooleanOperationFilterInput
  subject: StringOperationFilterInput
  replyToName: StringOperationFilterInput
  replyTo: StringOperationFilterInput
  fromName: StringOperationFilterInput
  from: StringOperationFilterInput
  recipientName: StringOperationFilterInput
  recipient: StringOperationFilterInput
  recipientType: RecipientTypeOperationFilterInput
  bccRecipients: ListStringOperationFilterInput
  ccRecipients: ListStringOperationFilterInput
  sendCount: ComparableInt32OperationFilterInput
  openCount: ComparableInt32OperationFilterInput
  readSeconds: ComparableInt32OperationFilterInput
  clickCount: ComparableInt32OperationFilterInput
  bounceCategory: NullableOfEmailEventTypeOperationFilterInput
  complaint: BooleanOperationFilterInput
  unsubscribe: BooleanOperationFilterInput
  bounceError: StringOperationFilterInput
  error: StringOperationFilterInput
  device: NullableOfDeviceTypeOperationFilterInput
  software: NullableOfSoftwareTypeOperationFilterInput
  os: NullableOfOperatingSystemTypeOperationFilterInput
  retryNbr: ComparableNullableOfInt32OperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  tags: ListStringOperationFilterInput
  metadata: ListFilterInputTypeOfTransactionMetadataFilterInput
  customHeaders: ListFilterInputTypeOfTransactionHeaderFilterInput
  links: ListFilterInputTypeOfTransactionLinkFilterInput
}


input TransactionSortInput {
  id: SortEnumType
  contactId: SortEnumType
  parentId: SortEnumType
  requestId: SortEnumType
  groupName: SortEnumType
  """Processing status"""
  status: SortEnumType
  sendAtUtc: SortEnumType
  processedUtc: SortEnumType
  trackOpens: SortEnumType
  trackClicks: SortEnumType
  trackReplies: SortEnumType
  trackDomains: SortEnumType
  stripQueryString: SortEnumType
  showRecipients: SortEnumType
  ignoreSuppressCheck: SortEnumType
  autoGenerateText: SortEnumType
  autoGenerateHtml: SortEnumType
  enableViewOnline: SortEnumType
  enableAnalytics: SortEnumType
  subject: SortEnumType
  replyToName: SortEnumType
  replyTo: SortEnumType
  fromName: SortEnumType
  from: SortEnumType
  recipientName: SortEnumType
  recipient: SortEnumType
  recipientType: SortEnumType
  sendCount: SortEnumType
  openCount: SortEnumType
  readSeconds: SortEnumType
  clickCount: SortEnumType
  bounceCategory: SortEnumType
  complaint: SortEnumType
  unsubscribe: SortEnumType
  bounceError: SortEnumType
  error: SortEnumType
  device: SortEnumType
  software: SortEnumType
  os: SortEnumType
  retryNbr: SortEnumType
  createdBy: SortEnumType
  createdUtc: SortEnumType
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
}


input TransactionEventFilterInput {
  and: [TransactionEventFilterInput!]
  or: [TransactionEventFilterInput!]
  conteactId: ComparableNullableOfInt64OperationFilterInput
  eventUtc: ComparableDateTimeOperationFilterInput
  eventType: EmailEventTypeOperationFilterInput
  emailDomain: StringOperationFilterInput
  readSeconds: ComparableNullableOfInt32OperationFilterInput
  ipAddress: ListComparableByteOperationFilterInput
  software: NullableOfSoftwareTypeOperationFilterInput
  os: NullableOfOperatingSystemTypeOperationFilterInput
  device: NullableOfDeviceTypeOperationFilterInput
  serverResponse: StringOperationFilterInput
  transactionLinkId: ComparableNullableOfInt64OperationFilterInput
}


input TransactionEventSortInput {
  conteactId: SortEnumType
  eventUtc: SortEnumType
  eventType: SortEnumType
  emailDomain: SortEnumType
  readSeconds: SortEnumType
  software: SortEnumType
  os: SortEnumType
  device: SortEnumType
  serverResponse: SortEnumType
  transactionLinkId: SortEnumType
}


input StringOperationFilterInput {
  and: [StringOperationFilterInput!]
  or: [StringOperationFilterInput!]
  eq: String
  neq: String
  contains: String
  ncontains: String
  in: [String]
  nin: [String]
  startsWith: String
  nstartsWith: String
  endsWith: String
  nendsWith: String
}


input TransactionActivityFilterInput {
  and: [TransactionActivityFilterInput!]
  or: [TransactionActivityFilterInput!]
  id: ComparableInt64OperationFilterInput
  sendAtUtc: ComparableDateTimeOperationFilterInput
  subject: StringOperationFilterInput
  fromAddress: StringOperationFilterInput
  toAddress: StringOperationFilterInput
  group: StringOperationFilterInput
  bounceCategory: NullableOfEmailEventTypeOperationFilterInput
  bounceError: StringOperationFilterInput
}


input TransactionActivitySortInput {
  id: SortEnumType
  sendAtUtc: SortEnumType
  subject: SortEnumType
  fromAddress: SortEnumType
  toAddress: SortEnumType
  group: SortEnumType
  bounceCategory: SortEnumType
  bounceError: SortEnumType
}


input TransactionPerformanceLinkStatsFilterInput {
  and: [TransactionPerformanceLinkStatsFilterInput!]
  or: [TransactionPerformanceLinkStatsFilterInput!]
  linkName: StringOperationFilterInput
  totalClicks: ComparableInt32OperationFilterInput
  uniqueClicks: ComparableInt32OperationFilterInput
}


input TransactionPerformanceLinkStatsSortInput {
  linkName: SortEnumType
  totalClicks: SortEnumType
  uniqueClicks: SortEnumType
}


input TransactionFromDomainStatsFilterInput {
  and: [TransactionFromDomainStatsFilterInput!]
  or: [TransactionFromDomainStatsFilterInput!]
  valid: BooleanOperationFilterInput
  lastVerifiedUtc: ComparableDateTimeOperationFilterInput
  domain: StringOperationFilterInput
  requests: ComparableInt32OperationFilterInput
  transactions: ComparableInt32OperationFilterInput
  created: ComparableInt32OperationFilterInput
  processed: ComparableInt32OperationFilterInput
  hardBounce: ComparableInt32OperationFilterInput
  softBounce: ComparableInt32OperationFilterInput
  softSenderAuth: ComparableInt32OperationFilterInput
  softIp: ComparableInt32OperationFilterInput
  softDns: ComparableInt32OperationFilterInput
  block: ComparableInt32OperationFilterInput
  blockContent: ComparableInt32OperationFilterInput
  blockSender: ComparableInt32OperationFilterInput
  declined: ComparableInt32OperationFilterInput
  invalidEmail: ComparableInt32OperationFilterInput
  delivered: ComparableInt32OperationFilterInput
  opens: ComparableInt32OperationFilterInput
  uniqueOpens: ComparableInt32OperationFilterInput
  clicks: ComparableInt32OperationFilterInput
  uniqueClicks: ComparableInt32OperationFilterInput
  uniqueOptOut: ComparableInt32OperationFilterInput
  uniqueComplaints: ComparableInt32OperationFilterInput
  feedback: ComparableInt32OperationFilterInput
  uniqueFeedback: ComparableInt32OperationFilterInput
  rating: ComparableInt32OperationFilterInput
  uniqueRating: ComparableInt32OperationFilterInput
  viewOnline: ComparableInt32OperationFilterInput
  uniqueViewOnline: ComparableInt32OperationFilterInput
}


input TransactionFromDomainStatsSortInput {
  valid: SortEnumType
  lastVerifiedUtc: SortEnumType
  domain: SortEnumType
  requests: SortEnumType
  transactions: SortEnumType
  created: SortEnumType
  processed: SortEnumType
  hardBounce: SortEnumType
  softBounce: SortEnumType
  softSenderAuth: SortEnumType
  softIp: SortEnumType
  softDns: SortEnumType
  block: SortEnumType
  blockContent: SortEnumType
  blockSender: SortEnumType
  declined: SortEnumType
  invalidEmail: SortEnumType
  delivered: SortEnumType
  opens: SortEnumType
  uniqueOpens: SortEnumType
  clicks: SortEnumType
  uniqueClicks: SortEnumType
  uniqueOptOut: SortEnumType
  uniqueComplaints: SortEnumType
  feedback: SortEnumType
  uniqueFeedback: SortEnumType
  rating: SortEnumType
  uniqueRating: SortEnumType
  viewOnline: SortEnumType
  uniqueViewOnline: SortEnumType
}


input TransactionDomainStatsFilterInput {
  and: [TransactionDomainStatsFilterInput!]
  or: [TransactionDomainStatsFilterInput!]
  domain: StringOperationFilterInput
  requests: ComparableInt32OperationFilterInput
  transactions: ComparableInt32OperationFilterInput
  created: ComparableInt32OperationFilterInput
  processed: ComparableInt32OperationFilterInput
  hardBounce: ComparableInt32OperationFilterInput
  softBounce: ComparableInt32OperationFilterInput
  softSenderAuth: ComparableInt32OperationFilterInput
  softIp: ComparableInt32OperationFilterInput
  softDns: ComparableInt32OperationFilterInput
  block: ComparableInt32OperationFilterInput
  blockContent: ComparableInt32OperationFilterInput
  blockSender: ComparableInt32OperationFilterInput
  declined: ComparableInt32OperationFilterInput
  invalidEmail: ComparableInt32OperationFilterInput
  delivered: ComparableInt32OperationFilterInput
  opens: ComparableInt32OperationFilterInput
  uniqueOpens: ComparableInt32OperationFilterInput
  clicks: ComparableInt32OperationFilterInput
  uniqueClicks: ComparableInt32OperationFilterInput
  uniqueOptOut: ComparableInt32OperationFilterInput
  uniqueComplaints: ComparableInt32OperationFilterInput
  feedback: ComparableInt32OperationFilterInput
  uniqueFeedback: ComparableInt32OperationFilterInput
  rating: ComparableInt32OperationFilterInput
  uniqueRating: ComparableInt32OperationFilterInput
  viewOnline: ComparableInt32OperationFilterInput
  uniqueViewOnline: ComparableInt32OperationFilterInput
}


input TransactionDomainStatsSortInput {
  domain: SortEnumType
  requests: SortEnumType
  transactions: SortEnumType
  created: SortEnumType
  processed: SortEnumType
  hardBounce: SortEnumType
  softBounce: SortEnumType
  softSenderAuth: SortEnumType
  softIp: SortEnumType
  softDns: SortEnumType
  block: SortEnumType
  blockContent: SortEnumType
  blockSender: SortEnumType
  declined: SortEnumType
  invalidEmail: SortEnumType
  delivered: SortEnumType
  opens: SortEnumType
  uniqueOpens: SortEnumType
  clicks: SortEnumType
  uniqueClicks: SortEnumType
  uniqueOptOut: SortEnumType
  uniqueComplaints: SortEnumType
  feedback: SortEnumType
  uniqueFeedback: SortEnumType
  rating: SortEnumType
  uniqueRating: SortEnumType
  viewOnline: SortEnumType
  uniqueViewOnline: SortEnumType
}


input TransactionBounceDomainFilterInput {
  and: [TransactionBounceDomainFilterInput!]
  or: [TransactionBounceDomainFilterInput!]
  eventUtc: ComparableDateTimeOperationFilterInput
  domain: StringOperationFilterInput
  eventType: EmailEventTypeOperationFilterInput
  errorDetail: StringOperationFilterInput
}


input TransactionBounceDomainSortInput {
  eventUtc: SortEnumType
  domain: SortEnumType
  eventType: SortEnumType
  errorDetail: SortEnumType
}


input TransactionTopBounceDomainStatsFilterInput {
  and: [TransactionTopBounceDomainStatsFilterInput!]
  or: [TransactionTopBounceDomainStatsFilterInput!]
  hardBounce: ComparableInt32OperationFilterInput
  hardBouncePct: ComparableDoubleOperationFilterInput
  softBounce: ComparableInt32OperationFilterInput
  softBouncePct: ComparableDoubleOperationFilterInput
  softSenderAuth: ComparableInt32OperationFilterInput
  softSenderAuthPct: ComparableDoubleOperationFilterInput
  softIp: ComparableInt32OperationFilterInput
  softIpPct: ComparableDoubleOperationFilterInput
  softDns: ComparableInt32OperationFilterInput
  softDnsPct: ComparableDoubleOperationFilterInput
  block: ComparableInt32OperationFilterInput
  blockPct: ComparableDoubleOperationFilterInput
  blockContent: ComparableInt32OperationFilterInput
  blockContentPct: ComparableDoubleOperationFilterInput
  blockSender: ComparableInt32OperationFilterInput
  blockSenderPct: ComparableDoubleOperationFilterInput
  domain: StringOperationFilterInput
  bounceCount: ComparableInt32OperationFilterInput
}


input TransactionTopBounceDomainStatsSortInput {
  hardBounce: SortEnumType
  hardBouncePct: SortEnumType
  softBounce: SortEnumType
  softBouncePct: SortEnumType
  softSenderAuth: SortEnumType
  softSenderAuthPct: SortEnumType
  softIp: SortEnumType
  softIpPct: SortEnumType
  softDns: SortEnumType
  softDnsPct: SortEnumType
  block: SortEnumType
  blockPct: SortEnumType
  blockContent: SortEnumType
  blockContentPct: SortEnumType
  blockSender: SortEnumType
  blockSenderPct: SortEnumType
  domain: SortEnumType
  bounceCount: SortEnumType
}


input TransactionStatsFilterInput {
  and: [TransactionStatsFilterInput!]
  or: [TransactionStatsFilterInput!]
  statUtc: ComparableNullableOfDateTimeOperationFilterInput
  requests: ComparableInt32OperationFilterInput
  transactions: ComparableInt32OperationFilterInput
  created: ComparableInt32OperationFilterInput
  processed: ComparableInt32OperationFilterInput
  hardBounce: ComparableInt32OperationFilterInput
  softBounce: ComparableInt32OperationFilterInput
  softSenderAuth: ComparableInt32OperationFilterInput
  softIp: ComparableInt32OperationFilterInput
  softDns: ComparableInt32OperationFilterInput
  block: ComparableInt32OperationFilterInput
  blockContent: ComparableInt32OperationFilterInput
  blockSender: ComparableInt32OperationFilterInput
  declined: ComparableInt32OperationFilterInput
  invalidEmail: ComparableInt32OperationFilterInput
  delivered: ComparableInt32OperationFilterInput
  opens: ComparableInt32OperationFilterInput
  uniqueOpens: ComparableInt32OperationFilterInput
  clicks: ComparableInt32OperationFilterInput
  uniqueClicks: ComparableInt32OperationFilterInput
  uniqueOptOut: ComparableInt32OperationFilterInput
  uniqueComplaints: ComparableInt32OperationFilterInput
  feedback: ComparableInt32OperationFilterInput
  uniqueFeedback: ComparableInt32OperationFilterInput
  rating: ComparableInt32OperationFilterInput
  uniqueRating: ComparableInt32OperationFilterInput
  viewOnline: ComparableInt32OperationFilterInput
  uniqueViewOnline: ComparableInt32OperationFilterInput
}


input TransactionStatsSortInput {
  statUtc: SortEnumType
  requests: SortEnumType
  transactions: SortEnumType
  created: SortEnumType
  processed: SortEnumType
  hardBounce: SortEnumType
  softBounce: SortEnumType
  softSenderAuth: SortEnumType
  softIp: SortEnumType
  softDns: SortEnumType
  block: SortEnumType
  blockContent: SortEnumType
  blockSender: SortEnumType
  declined: SortEnumType
  invalidEmail: SortEnumType
  delivered: SortEnumType
  opens: SortEnumType
  uniqueOpens: SortEnumType
  clicks: SortEnumType
  uniqueClicks: SortEnumType
  uniqueOptOut: SortEnumType
  uniqueComplaints: SortEnumType
  feedback: SortEnumType
  uniqueFeedback: SortEnumType
  rating: SortEnumType
  uniqueRating: SortEnumType
  viewOnline: SortEnumType
  uniqueViewOnline: SortEnumType
}


input TransactionLinkStatsFilterInput {
  and: [TransactionLinkStatsFilterInput!]
  or: [TransactionLinkStatsFilterInput!]
  statUtc: ComparableNullableOfDateTimeOperationFilterInput
  linkName: StringOperationFilterInput
  clicked: ComparableInt32OperationFilterInput
  uniqueClicked: ComparableInt32OperationFilterInput
}


input TransactionLinkStatsSortInput {
  statUtc: SortEnumType
  linkName: SortEnumType
  clicked: SortEnumType
  uniqueClicked: SortEnumType
}


"""A connection to a list of items."""
type TransactionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionEdge!]
  """A flattened list of the nodes."""
  nodes: [Transaction!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionEventConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionEventEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionEvent!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionActivityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionActivityEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionActivity!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionPerformanceLinkStatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionPerformanceLinkStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionPerformanceLinkStats!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionFromDomainStatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionFromDomainStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionFromDomainStats!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionDomainStatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionDomainStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionDomainStats!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionBounceDomainConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionBounceDomainEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionBounceDomain!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionTopBounceDomainStatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionTopBounceDomainStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionTopBounceDomainStats!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionStatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionStats!]
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionLinkStatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [TransactionLinkStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionLinkStats!]
  totalCount: Int!
}


input JourneyInfoSortInput {
  id: SortEnumType
  audienceId: SortEnumType
  name: SortEnumType
  description: SortEnumType
  status: SortEnumType
  reEntryType: SortEnumType
  totalEmailNodes: SortEnumType
  totalNotificationEmailNodes: SortEnumType
  totalSMSNodes: SortEnumType
  totalSiteNotificationNodes: SortEnumType
  createdBy: SortEnumType
  createdUtc: SortEnumType
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
}


input JourneyInfoFilterInput {
  and: [JourneyInfoFilterInput!]
  or: [JourneyInfoFilterInput!]
  id: StringOperationFilterInput
  audienceId: StringOperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  status: NullableOfJourneyStatusOperationFilterInput
  reEntryType: JourneyReEntryTypeOperationFilterInput
  tags: ListStringOperationFilterInput
  totalEmailNodes: ComparableInt32OperationFilterInput
  totalNotificationEmailNodes: ComparableInt32OperationFilterInput
  totalSMSNodes: ComparableInt32OperationFilterInput
  totalSiteNotificationNodes: ComparableInt32OperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableNullableOfDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableNullableOfDateTimeOperationFilterInput
}


input JourneyContactFilterInput {
  and: [JourneyContactFilterInput!]
  or: [JourneyContactFilterInput!]
  id: StringOperationFilterInput
  email: StringOperationFilterInput
  tags: ListStringOperationFilterInput
  status: JourneyContactStatusOperationFilterInput
  entryUtc: ComparableDateTimeOperationFilterInput
  exitUtc: ComparableNullableOfDateTimeOperationFilterInput
  entryCount: ComparableInt32OperationFilterInput
}


input JourneyContactSortInput {
  id: SortEnumType
  email: SortEnumType
  status: SortEnumType
  entryUtc: SortEnumType
  exitUtc: SortEnumType
  entryCount: SortEnumType
}


input JourneyContactStatsByDayFilterInput {
  and: [JourneyContactStatsByDayFilterInput!]
  or: [JourneyContactStatsByDayFilterInput!]
  StatUtc: ComparableDateTimeOperationFilterInput
  statType: JourneyContactStatusOperationFilterInput
  contactCount: ComparableInt32OperationFilterInput
}


input JourneyContactStatsByDaySortInput {
  StatUtc: SortEnumType
  statType: SortEnumType
  contactCount: SortEnumType
}


input JourneyTagStatsFilterInput {
  and: [JourneyTagStatsFilterInput!]
  or: [JourneyTagStatsFilterInput!]
  tagName: StringOperationFilterInput
  contactCount: ComparableInt32OperationFilterInput
}


input JourneyTagStatsSortInput {
  tagName: SortEnumType
  contactCount: SortEnumType
}


input JourneyDurationFilterInput {
  and: [JourneyDurationFilterInput!]
  or: [JourneyDurationFilterInput!]
  duration: ComparableInt32OperationFilterInput
  contactCount: ComparableInt32OperationFilterInput
}


input JourneyDurationSortInput {
  duration: SortEnumType
  contactCount: SortEnumType
}


"""A connection to a list of items."""
type JourneyInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyInfo!]
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyContactConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyContactEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyContact!]
}


"""A connection to a list of items."""
type JourneyContactStatsByDayConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyContactStatsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyContactStatsByDay!]
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyTagStatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyTagStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyTagStats!]
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyDurationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyDurationEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyDuration!]
  totalCount: Int!
}


input JourneyNodeInfoSortInput {
  id: SortEnumType
  name: SortEnumType
  type: SortEnumType
  terminatorType: SortEnumType
  nextNodeId: SortEnumType
  """Used for SendEmail and SendSMS actions."""
  messageId: SortEnumType
  enableMv: SortEnumType
  isConfigured: SortEnumType
  isDeleted: SortEnumType
  statistics: NodeStatisticsSortInput
  configuration: JourneyNodeConfigurationSortInput
  campaign: CampaignSortInput
  createdBy: SortEnumType
  createdUtc: SortEnumType
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
}


input JourneyNodeInfoFilterInput {
  and: [JourneyNodeInfoFilterInput!]
  or: [JourneyNodeInfoFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  type: JourneyNodeTypeOperationFilterInput
  terminatorType: NullableOfTerminatorTypeOperationFilterInput
  previousNodeIds: ListComparableInt64OperationFilterInput
  nextNodeId: StringOperationFilterInput
  """Used for SendEmail and SendSMS actions."""
  messageId: StringOperationFilterInput
  enableMv: BooleanOperationFilterInput
  isConfigured: BooleanOperationFilterInput
  isDeleted: BooleanOperationFilterInput
  statistics: NodeStatisticsFilterInput
  configuration: JourneyNodeConfigurationFilterInput
  campaign: CampaignFilterInput
  paths: ListFilterInputTypeOfFlowPathViewModelFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
}


"""A connection to a list of items."""
type JourneyNodeInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyNodeInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyNodeInfo!]
  totalCount: Int!
}


input CustomApiEventFilterInput {
  and: [CustomApiEventFilterInput!]
  or: [CustomApiEventFilterInput!]
  id: ComparableInt64OperationFilterInput
  key: StringOperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input CustomApiEventSortInput {
  id: SortEnumType
  key: SortEnumType
  name: SortEnumType
  description: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type CustomApiEventConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [CustomApiEventEdge!]
  """A flattened list of the nodes."""
  nodes: [CustomApiEvent!]
  totalCount: Int!
}


input SMSCampaignFilterInput {
  and: [SMSCampaignFilterInput!]
  or: [SMSCampaignFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  fromNumber: StringOperationFilterInput
  message: StringOperationFilterInput
  subject: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input SMSCampaignSortInput {
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  fromNumber: SortEnumType
  message: SortEnumType
  subject: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type SMSCampaignConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [SMSCampaignEdge!]
  """A flattened list of the nodes."""
  nodes: [SMSCampaign!]
  totalCount: Int!
}


input JourneyGoalFilterInput {
  and: [JourneyGoalFilterInput!]
  or: [JourneyGoalFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  type: JourneyGoalTypeOperationFilterInput
  """Only used for GLOBAL goals"""
  filter: ConditionGroupFilterInput
  conversion: JourneyConversionFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  journeyId: ComparableInt64OperationFilterInput
}


input JourneyGoalSortInput {
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  type: SortEnumType
  """Only used for GLOBAL goals"""
  filter: ConditionGroupSortInput
  conversion: JourneyConversionSortInput
  createdBy: SortEnumType
  createdUtc: SortEnumType
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
  journeyId: SortEnumType
}


input JourneyGoalContactSortInput {
  contact: ContactInfoSortInput
  evaluatedUtc: SortEnumType
}


input JourneyGoalContactFilterInput {
  and: [JourneyGoalContactFilterInput!]
  or: [JourneyGoalContactFilterInput!]
  contact: ContactInfoFilterInput
  evaluatedUtc: ComparableDateTimeOperationFilterInput
}


"""A connection to a list of items."""
type JourneyGoalConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyGoalEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyGoal!]
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyGoalContactConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyGoalContactEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyGoalContact!]
  totalCount: Int!
}


input JourneyConversionFilterInput {
  and: [JourneyConversionFilterInput!]
  or: [JourneyConversionFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  value: ComparableDoubleOperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  journeyId: ComparableInt64OperationFilterInput
}


input JourneyConversionSortInput {
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  value: SortEnumType
  createdBy: SortEnumType
  createdUtc: SortEnumType
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
  journeyId: SortEnumType
}


input JourneyConversionContactSortInput {
  contact: ContactInfoSortInput
  conversionUtc: SortEnumType
}


input JourneyConversionContactFilterInput {
  and: [JourneyConversionContactFilterInput!]
  or: [JourneyConversionContactFilterInput!]
  contact: ContactInfoFilterInput
  conversionUtc: ComparableDateTimeOperationFilterInput
}


"""A connection to a list of items."""
type JourneyConversionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyConversionEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyConversion!]
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyConversionContactConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [JourneyConversionContactEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyConversionContact!]
  totalCount: Int!
}


"""
Suppresses emails sent to specific email address or domains that should never receive emails from the account
"""
input AccountSuppressionFilterFilterInput {
  and: [AccountSuppressionFilterFilterInput!]
  or: [AccountSuppressionFilterFilterInput!]
  """Unique suppression filter ID"""
  id: ComparableInt64OperationFilterInput
  """Local part of email address to filter (left side of @ symbol"""
  localPart: StringOperationFilterInput
  """Domain of email address to filter (right side of @ symbol"""
  domain: StringOperationFilterInput
  """Reason the filter is being added"""
  reason: StringOperationFilterInput
  """Date/time the setting was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the setting"""
  createdBy: StringOperationFilterInput
}


"""
Suppresses emails sent to specific email address or domains that should never receive emails from the account
"""
input AccountSuppressionFilterSortInput {
  """Unique suppression filter ID"""
  id: SortEnumType
  """Local part of email address to filter (left side of @ symbol"""
  localPart: SortEnumType
  """Domain of email address to filter (right side of @ symbol"""
  domain: SortEnumType
  """Reason the filter is being added"""
  reason: SortEnumType
  """Date/time the setting was created"""
  createdUtc: SortEnumType
  """Id of user who created the setting"""
  createdBy: SortEnumType
}


"""A connection to a list of items."""
type AccountSuppressionFilterConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AccountSuppressionFilterEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountSuppressionFilter!]
  totalCount: Int!
}


input SavedSearchInfoFilterInput {
  and: [SavedSearchInfoFilterInput!]
  or: [SavedSearchInfoFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
}


input SavedSearchInfoSortInput {
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
}


"""A connection to a list of items."""
type SavedSearchInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [SavedSearchInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [SavedSearchInfo!]
  totalCount: Int!
}


input ViewSortInput {
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  type: SortEnumType
  jsonConfiguration: SortEnumType
  isPrivate: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


input ViewFilterInput {
  and: [ViewFilterInput!]
  or: [ViewFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  type: EntityTypeOperationFilterInput
  jsonConfiguration: StringOperationFilterInput
  isPrivate: BooleanOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


"""A connection to a list of items."""
type ViewConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ViewEdge!]
  """A flattened list of the nodes."""
  nodes: [View!]
  totalCount: Int!
}


input AccountApiKeyInfoFilterInput {
  and: [AccountApiKeyInfoFilterInput!]
  or: [AccountApiKeyInfoFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  permissionKeys: ListStringOperationFilterInput
  audiences: ListStringOperationFilterInput
}


input AccountApiKeyInfoSortInput {
  id: SortEnumType
  name: SortEnumType
}


"""A connection to a list of items."""
type AccountApiKeyInfoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AccountApiKeyInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountApiKeyInfo!]
  totalCount: Int!
}


input WebhookSortInput {
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  callBackUrl: SortEnumType
  enabled: SortEnumType
  filter: ConditionGroupSortInput
  integrationType: SortEnumType
  """
  Used when passing contact data in webhook payload. Defaults to 'BASIC'. When set to 'BASIC' only id, key, email will be passed. When set to 'EXTENDED', all the contact's data will be passed.
  """
  dataSetting: SortEnumType
  createdBy: SortEnumType
  createdUtc: SortEnumType
  modifiedBy: SortEnumType
  modifiedUtc: SortEnumType
}


input WebhookFilterInput {
  and: [WebhookFilterInput!]
  or: [WebhookFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  events: ListFilterInputTypeOfWebhookEventFilterInput
  callBackUrl: StringOperationFilterInput
  enabled: BooleanOperationFilterInput
  filter: ConditionGroupFilterInput
  integrationType: NullableOfIntegrationTypeOperationFilterInput
  """
  Used when passing contact data in webhook payload. Defaults to 'BASIC'. When set to 'BASIC' only id, key, email will be passed. When set to 'EXTENDED', all the contact's data will be passed.
  """
  dataSetting: WebhookDataSettingOperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
}


"""A connection to a list of items."""
type WebhookConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [WebhookEdge!]
  """A flattened list of the nodes."""
  nodes: [Webhook!]
  totalCount: Int!
}


input UserActivityFilterInput {
  and: [UserActivityFilterInput!]
  or: [UserActivityFilterInput!]
  userEmail: StringOperationFilterInput
  accountName: StringOperationFilterInput
  isApiKey: BooleanOperationFilterInput
  ipAddress: ListComparableByteOperationFilterInput
  callDurationMs: ComparableInt32OperationFilterInput
  entityId: ComparableInt64OperationFilterInput
  entityName: StringOperationFilterInput
  entityType: EntityTypeOperationFilterInput
  complexity: ComparableInt32OperationFilterInput
  maxDepth: ComparableInt32OperationFilterInput
  callType: GraphQLCallTypeOperationFilterInput
  callName: StringOperationFilterInput
  callGeneratedErrors: BooleanOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  userId: ComparableInt64OperationFilterInput
}


input UserActivitySortInput {
  userEmail: SortEnumType
  accountName: SortEnumType
  isApiKey: SortEnumType
  callDurationMs: SortEnumType
  entityId: SortEnumType
  entityName: SortEnumType
  entityType: SortEnumType
  complexity: SortEnumType
  maxDepth: SortEnumType
  callType: SortEnumType
  callName: SortEnumType
  callGeneratedErrors: SortEnumType
  createdUtc: SortEnumType
  userId: SortEnumType
}


"""A connection to a list of items."""
type UserActivityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [UserActivityEdge!]
  """A flattened list of the nodes."""
  nodes: [UserActivity!]
  totalCount: Int!
}


input UserAccountNotificationFilterInput {
  and: [UserAccountNotificationFilterInput!]
  or: [UserAccountNotificationFilterInput!]
  id: ComparableInt64OperationFilterInput
  notificationType: GlobalNotificationTypeOperationFilterInput
  scope: AccountUserNotifScopeOperationFilterInput
  status: AccountUserNotifStatusOperationFilterInput
  isRead: BooleanOperationFilterInput
  entityId: ComparableNullableOfInt64OperationFilterInput
  entityType: NullableOfEntityTypeOperationFilterInput
  isProgress: BooleanOperationFilterInput
  completedPercentage: ComparableNullableOfDoubleOperationFilterInput
  correlationId: ComparableNullableOfGuidOperationFilterInput
  weight: ComparableInt32OperationFilterInput
  variables: DictionaryOfStringAndStringFilterInput
  """CSV value. Contain all the parent ids needed to get a resource."""
  parentIds: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input UserAccountNotificationSortInput {
  id: SortEnumType
  notificationType: SortEnumType
  scope: SortEnumType
  status: SortEnumType
  isRead: SortEnumType
  entityId: SortEnumType
  entityType: SortEnumType
  isProgress: SortEnumType
  completedPercentage: SortEnumType
  correlationId: SortEnumType
  weight: SortEnumType
  """CSV value. Contain all the parent ids needed to get a resource."""
  parentIds: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type UserAccountNotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [UserAccountNotificationEdge!]
  """A flattened list of the nodes."""
  nodes: [UserAccountNotification!]
  totalCount: Int!
}


input CustomReportFilterInput {
  and: [CustomReportFilterInput!]
  or: [CustomReportFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  note: StringOperationFilterInput
  isEnabled: BooleanOperationFilterInput
  distributionList: ListStringOperationFilterInput
  userIds: ListStringOperationFilterInput
  containsPII: BooleanOperationFilterInput
  isInitialized: BooleanOperationFilterInput
  lastRunUtc: ComparableNullableOfDateTimeOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  jobs: ListFilterInputTypeOfCustomReportJobFilterInput
}


input CustomReportSortInput {
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  note: SortEnumType
  isEnabled: SortEnumType
  containsPII: SortEnumType
  isInitialized: SortEnumType
  lastRunUtc: SortEnumType
  createdUtc: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type CustomReportConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [CustomReportEdge!]
  """A flattened list of the nodes."""
  nodes: [CustomReport!]
  totalCount: Int!
}


input ItemFilterInput {
  and: [ItemFilterInput!]
  or: [ItemFilterInput!]
  id: StringOperationFilterInput
  """Plan type"""
  type: PlanTypeOperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  tiers: ListFilterInputTypeOfItemTierViewModelFilterInput
  features: ListFilterInputTypeOfItemFeatureViewModelFilterInput
  addOns: ListFilterInputTypeOfItemAddOnViewModelFilterInput
  isTrial: BooleanOperationFilterInput
  period: ComparableInt32OperationFilterInput
  periodUnit: StringOperationFilterInput
}


input ItemSortInput {
  id: SortEnumType
  """Plan type"""
  type: SortEnumType
  name: SortEnumType
  description: SortEnumType
  isTrial: SortEnumType
  period: SortEnumType
  periodUnit: SortEnumType
}


"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [ItemEdge!]
  """A flattened list of the nodes."""
  nodes: [Item!]
  totalCount: Int!
}


input AIRequestSortInput {
  id: SortEnumType
  questionStyle: SortEnumType
  questionType: SortEnumType
  tokensPrompt: SortEnumType
  tokensAnswer: SortEnumType
  tokensRemaining: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
}


"""A connection to a list of items."""
type AIRequestConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AIRequestEdge!]
  """A flattened list of the nodes."""
  nodes: [AIRequest!]
  totalCount: Int!
}


input AccountExportFilterInput {
  and: [AccountExportFilterInput!]
  or: [AccountExportFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  type: ExportTypeOperationFilterInput
  downloadUrl: StringOperationFilterInput
  configuration: ExportConfigFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input AccountExportSortInput {
  id: SortEnumType
  name: SortEnumType
  type: SortEnumType
  downloadUrl: SortEnumType
  configuration: ExportConfigSortInput
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type AccountExportConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AccountExportEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountExport!]
  totalCount: Int!
}


input AccountAutoRetryRuleFilterInput {
  and: [AccountAutoRetryRuleFilterInput!]
  or: [AccountAutoRetryRuleFilterInput!]
  id: ComparableInt64OperationFilterInput
  communicationType: CommunicationTypeOperationFilterInput
  sendingDomain: StringOperationFilterInput
  recipientDomain: StringOperationFilterInput
  bounceCategory: BounceCategoryOperationFilterInput
  retries: ListComparableInt32OperationFilterInput
  isActive: BooleanOperationFilterInput
  createdBy: ComparableInt64OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
}


input AccountAutoRetryRuleSortInput {
  id: SortEnumType
  communicationType: SortEnumType
  sendingDomain: SortEnumType
  recipientDomain: SortEnumType
  bounceCategory: SortEnumType
  isActive: SortEnumType
  createdBy: SortEnumType
  createdUtc: SortEnumType
}


"""A connection to a list of items."""
type AccountAutoRetryRuleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [AccountAutoRetryRuleEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountAutoRetryRule]
  totalCount: Int!
}


input EntityTypeOperationFilterInput {
  eq: EntityType
  neq: EntityType
  in: [EntityType!]
  nin: [EntityType!]
}


input ComparableInt64OperationFilterInput {
  eq: Long
  neq: Long
  in: [Long!]
  nin: [Long!]
  gt: Long
  ngt: Long
  gte: Long
  ngte: Long
  lt: Long
  nlt: Long
  lte: Long
  nlte: Long
}


input ComparableNullableOfInt64OperationFilterInput {
  eq: Long
  neq: Long
  in: [Long]
  nin: [Long]
  gt: Long
  ngt: Long
  gte: Long
  ngte: Long
  lt: Long
  nlt: Long
  lte: Long
  nlte: Long
}


input ComparableDateTimeOperationFilterInput {
  eq: DateTime
  neq: DateTime
  in: [DateTime!]
  nin: [DateTime!]
  gt: DateTime
  ngt: DateTime
  gte: DateTime
  ngte: DateTime
  lt: DateTime
  nlt: DateTime
  lte: DateTime
  nlte: DateTime
}


enum SortEnumType {
  ASC
  DESC
}


input PlanTypeOperationFilterInput {
  eq: PlanType
  neq: PlanType
  in: [PlanType!]
  nin: [PlanType!]
}


input ListFilterInputTypeOfAccountPlanFeatureVMFilterInput {
  all: tvafFilterInput
  none: tvafFilterInput
  some: tvafFilterInput
  any: Boolean
}


"""Information about current or next plan"""
input AccountPlanInfoFilterInput {
  and: [AccountPlanInfoFilterInput!]
  or: [AccountPlanInfoFilterInput!]
  """Plan id"""
  id: StringOperationFilterInput
  """Plan name"""
  name: StringOperationFilterInput
  """Number of period units withing a billing cycle"""
  period: ComparableInt32OperationFilterInput
  """Period duration within a billing cycle"""
  periodUnit: StringOperationFilterInput
  """Start date of the current billing period"""
  startUtc: ComparableDateTimeOperationFilterInput
  """End date of the current billing period"""
  endUtc: ComparableDateTimeOperationFilterInput
  """Plan add ons"""
  addOns: ListFilterInputTypeOfAccountPlanAddOnVMFilterInput
  """Indicates if the plan is a trial plan"""
  isTrial: BooleanOperationFilterInput
  """Plan change type"""
  pendingChangeType: NullableOfPlanChangeTypeOperationFilterInput
  """True if there are invoices that are due."""
  hasDueInvoices: BooleanOperationFilterInput
  """True if overages are allowed."""
  overageEnabled: BooleanOperationFilterInput
  """True if autoscaling plan is allowed."""
  autoScaleEnabled: BooleanOperationFilterInput
  """
  This the minimum number of items (contacts or transactions) allowed within the current scale range. Based on last billing period usage.
  """
  tierMinLimit: ComparableInt32OperationFilterInput
  """
  This the maximum number of items (contacts or transactions) allowed within the current scale range. Based on last billing period usage.
  """
  tierMaxLimit: ComparableInt32OperationFilterInput
  """
  This the minimum number of items (contacts or transactions) allowed within the current scale range.
  """
  nextTierMinLimit: ComparableInt32OperationFilterInput
  """
  This the maximum number of items (contacts or transactions) allowed within the current scale range.
  """
  nextTierMaxLimit: ComparableInt32OperationFilterInput
  """Quantity of items"""
  quantity: ComparableInt32OperationFilterInput
  """Cost of plan"""
  amount: ComparableDoubleOperationFilterInput
  """Quantity of overage items"""
  overageQuantity: ComparableInt32OperationFilterInput
  """Overage cost of plan"""
  overageAmount: ComparableDoubleOperationFilterInput
}


"""Information about current or next plan"""
input AccountPlanInfoSortInput {
  """Plan id"""
  id: SortEnumType
  """Plan name"""
  name: SortEnumType
  """Number of period units withing a billing cycle"""
  period: SortEnumType
  """Period duration within a billing cycle"""
  periodUnit: SortEnumType
  """Start date of the current billing period"""
  startUtc: SortEnumType
  """End date of the current billing period"""
  endUtc: SortEnumType
  """Indicates if the plan is a trial plan"""
  isTrial: SortEnumType
  """Plan change type"""
  pendingChangeType: SortEnumType
  """True if there are invoices that are due."""
  hasDueInvoices: SortEnumType
  """True if overages are allowed."""
  overageEnabled: SortEnumType
  """True if autoscaling plan is allowed."""
  autoScaleEnabled: SortEnumType
  """
  This the minimum number of items (contacts or transactions) allowed within the current scale range. Based on last billing period usage.
  """
  tierMinLimit: SortEnumType
  """
  This the maximum number of items (contacts or transactions) allowed within the current scale range. Based on last billing period usage.
  """
  tierMaxLimit: SortEnumType
  """
  This the minimum number of items (contacts or transactions) allowed within the current scale range.
  """
  nextTierMinLimit: SortEnumType
  """
  This the maximum number of items (contacts or transactions) allowed within the current scale range.
  """
  nextTierMaxLimit: SortEnumType
  """Quantity of items"""
  quantity: SortEnumType
  """Cost of plan"""
  amount: SortEnumType
  """Quantity of overage items"""
  overageQuantity: SortEnumType
  """Overage cost of plan"""
  overageAmount: SortEnumType
}


input BooleanOperationFilterInput {
  eq: Boolean
  neq: Boolean
}


input ListFilterInputTypeOfSecurityRolePermissionFilterInput {
  all: SecurityRolePermissionFilterInput
  none: SecurityRolePermissionFilterInput
  some: SecurityRolePermissionFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSecurityRoleUserFilterInput {
  all: SecurityRoleUserFilterInput
  none: SecurityRoleUserFilterInput
  some: SecurityRoleUserFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSecurityRoleAudienceFilterInput {
  all: SecurityRoleAudienceFilterInput
  none: SecurityRoleAudienceFilterInput
  some: SecurityRoleAudienceFilterInput
  any: Boolean
}


input ComparableDoubleOperationFilterInput {
  eq: Float
  neq: Float
  in: [Float!]
  nin: [Float!]
  gt: Float
  ngt: Float
  gte: Float
  ngte: Float
  lt: Float
  nlt: Float
  lte: Float
  nlte: Float
}


input ComparableInt32OperationFilterInput {
  eq: Int
  neq: Int
  in: [Int!]
  nin: [Int!]
  gt: Int
  ngt: Int
  gte: Int
  ngte: Int
  lt: Int
  nlt: Int
  lte: Int
  nlte: Int
}


input ListFilterInputTypeOfAccountPlanAddOnStatsFilterInput {
  all: AccountPlanAddOnStatsFilterInput
  none: AccountPlanAddOnStatsFilterInput
  some: AccountPlanAddOnStatsFilterInput
  any: Boolean
}


"""Information about pagination in a connection."""
type PageInfo {
  """
  Indicates whether more edges exist following the set defined by the clients arguments.
  """
  hasNextPage: Boolean!
  """
  Indicates whether more edges exist prior the set defined by the clients arguments.
  """
  hasPreviousPage: Boolean!
  """When paginating backwards, the cursor to continue."""
  startCursor: String
  """When paginating forwards, the cursor to continue."""
  endCursor: String
}


"""An edge in a connection."""
type UserEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: User!
}


"""
Account plan for a specific service type. Only one active plan per service type is allowed.
"""
type AccountPlan {
  """Plan type"""
  type: PlanType!
  tvafs: [tvaf!]!
  """Current plan information."""
  currentPlan: AccountPlanInfo!
  """Next plan information if a plan change is scheduled."""
  nextPlan: AccountPlanInfo
}


"""An edge in a connection."""
type AccountPlanEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountPlan
}


type AccountInvoiceInfo {
  """Unique invoice ID"""
  id: String!
  """Total amount being billed"""
  totalAmount: Float!
  """Amount paid after discounts and credits"""
  amountPaid: Float!
  """Status of invoice"""
  status: InvoiceStatus!
  """Invoice due date/time"""
  dueUtc: DateTime
  """Service period start date/time"""
  billPeriodStartUtc: DateTime!
  """Service period end date/time"""
  billPeriodEndUtc: DateTime!
  """Url to download pdf"""
  pdfDownloadUrl: String!
  """
  Collection of line items detailing the specific services being invoiced for
  """
  lineItems: [AccountInvoiceLineItemInfo!]!
}


"""An edge in a connection."""
type AccountInvoiceInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountInvoiceInfo!
}


"""An edge in a connection."""
type SecurityRoleEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: SecurityRole!
}


type TotalContactsByDay {
  statUtc: DateTime!
  totalActiveContacts: Int!
}


"""An edge in a connection."""
type TotalContactsByDayEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TotalContactsByDay!
}


type TotalEmailsByDay {
  statUtc: DateTime!
  totalEmails: Int!
}


"""An edge in a connection."""
type TotalEmailsByDayEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TotalEmailsByDay!
}


input DomainTypeOperationFilterInput {
  eq: DomainType
  neq: DomainType
  in: [DomainType!]
  nin: [DomainType!]
}


input ComparableNullableOfDateTimeOperationFilterInput {
  eq: DateTime
  neq: DateTime
  in: [DateTime]
  nin: [DateTime]
  gt: DateTime
  ngt: DateTime
  gte: DateTime
  ngte: DateTime
  lt: DateTime
  nlt: DateTime
  lte: DateTime
  nlte: DateTime
}


input ListStringOperationFilterInput {
  all: StringOperationFilterInput
  none: StringOperationFilterInput
  some: StringOperationFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountDomainSelectorFilterInput {
  all: AccountDomainSelectorFilterInput
  none: AccountDomainSelectorFilterInput
  some: AccountDomainSelectorFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountDomainPageFilterInput {
  all: AccountDomainPageFilterInput
  none: AccountDomainPageFilterInput
  some: AccountDomainPageFilterInput
  any: Boolean
}


"""An edge in a connection."""
type AccountDomainEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountDomain!
}


input ListFilterInputTypeOfUserPermissionFilterInput {
  all: UserPermissionFilterInput
  none: UserPermissionFilterInput
  some: UserPermissionFilterInput
  any: Boolean
}


input EmailFilterInput {
  and: [EmailFilterInput!]
  or: [EmailFilterInput!]
  """255 character limit"""
  domain: StringOperationFilterInput
  """65 character limit"""
  localPart: StringOperationFilterInput
}


input InviteStatusOperationFilterInput {
  eq: InviteStatus
  neq: InviteStatus
  in: [InviteStatus!]
  nin: [InviteStatus!]
}


input EmailSortInput {
  """255 character limit"""
  domain: SortEnumType
  """65 character limit"""
  localPart: SortEnumType
}


"""An edge in a connection."""
type InviteEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Invite!
}


input ServiceTypeOperationFilterInput {
  eq: ServiceType
  neq: ServiceType
  in: [ServiceType!]
  nin: [ServiceType!]
}


input ListFilterInputTypeOfServicePlanScaleFilterInput {
  all: ServicePlanScaleFilterInput
  none: ServicePlanScaleFilterInput
  some: ServicePlanScaleFilterInput
  any: Boolean
}


input ListFilterInputTypeOfServicePlanCreditItemFilterInput {
  all: ServicePlanCreditFilterInput
  none: ServicePlanCreditFilterInput
  some: ServicePlanCreditFilterInput
  any: Boolean
}


input ListFilterInputTypeOfServicePlanFeatureViewModelFilterInput {
  all: ServicePlanFeatureFilterInput
  none: ServicePlanFeatureFilterInput
  some: ServicePlanFeatureFilterInput
  any: Boolean
}


"""
Service plan for a specific service type. When creating an account, a service plan is selected, which creates and account plan based on the service plan.
"""
type ServicePlan {
  """Unique service plan ID"""
  id: String!
  """Name of service plan"""
  name: String!
  """Description of service plan"""
  description: String!
  """Service plan type"""
  serviceType: ServiceType!
  """
  Non-monetary value of a credit within a service plan. This is only used for plans that use credits.
  """
  creditValue: Float!
  """Internal use only"""
  _do: Int!
  """
  Collection of scales used for recurring plans based, for example, number of active subscribers.
  """
  scales: [ServicePlanScale!]!
  """
  Collection of credits available for purchase when using a credit-based service plan.
  """
  credits: [ServicePlanCredit!]!
  """Collections of features available with the service plan"""
  features: [ServicePlanFeature!]!
}


"""An edge in a connection."""
type ServicePlanEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: ServicePlan!
}


input CategorySortInput {
  id: SortEnumType
  name: SortEnumType
  type: SortEnumType
  isSystem: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


input CategoryFilterInput {
  and: [CategoryFilterInput!]
  or: [CategoryFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  type: CategoryTypeOperationFilterInput
  isSystem: BooleanOperationFilterInput
  createdUtc: ComparableNullableOfDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableNullableOfDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input ListFilterInputTypeOfTemplateHistoryFilterInput {
  all: TemplateHistoryFilterInput
  none: TemplateHistoryFilterInput
  some: TemplateHistoryFilterInput
  any: Boolean
}


input TemplateTypeOperationFilterInput {
  eq: TemplateType
  neq: TemplateType
  in: [TemplateType!]
  nin: [TemplateType!]
}


"""An edge in a connection."""
type TemplateInformationEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TemplateInformation!
}


type Tag {
  name: String!
  type: EntityType!
  isSystem: Boolean
  count: Int!
}


"""An edge in a connection."""
type TagEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Tag!
}


"""An edge in a connection."""
type AudienceInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AudienceInfo!
}


type AudienceStatsByDay {
  statUtc: DateTime!
  contacts: Int!
  activeContacts: Int!
  pendingContacts: Int!
  undeliverableContacts: Int!
  unsubscribedContacts: Int!
  complaintContacts: Int!
  scrubbedContacts: Int!
}


"""An edge in a connection."""
type AudienceStatsByDayEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AudienceStatsByDay!
}


input DataTypeOperationFilterInput {
  eq: DataType
  neq: DataType
  in: [DataType!]
  nin: [DataType!]
}


input LabelsFilterInput {
  and: [LabelsFilterInput!]
  or: [LabelsFilterInput!]
  streetAddress: LabelTranslationsFilterInput
  streetAddress2: LabelTranslationsFilterInput
  addressLocality: LabelTranslationsFilterInput
  addressRegion: LabelTranslationsFilterInput
  postalCode: LabelTranslationsFilterInput
  addressCountry: LabelTranslationsFilterInput
}


input ComparableNullableOfDecimalOperationFilterInput {
  eq: Decimal
  neq: Decimal
  in: [Decimal]
  nin: [Decimal]
  gt: Decimal
  ngt: Decimal
  gte: Decimal
  ngte: Decimal
  lt: Decimal
  nlt: Decimal
  lte: Decimal
  nlte: Decimal
}


input ListFilterInputTypeOfRuleFilterInput {
  all: ConditionFilterInput
  none: ConditionFilterInput
  some: ConditionFilterInput
  any: Boolean
}


input LabelsSortInput {
  streetAddress: LabelTranslationsSortInput
  streetAddress2: LabelTranslationsSortInput
  addressLocality: LabelTranslationsSortInput
  addressRegion: LabelTranslationsSortInput
  postalCode: LabelTranslationsSortInput
  addressCountry: LabelTranslationsSortInput
}


"""An edge in a connection."""
type DataFieldEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: DataField!
}


type DatafieldCategory {
  id: String!
  categoryName: String
}


"""An edge in a connection."""
type DatafieldCategoryEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: DatafieldCategory!
}


input NullableOfSubscriberStatusOperationFilterInput {
  eq: ContactStatus
  neq: ContactStatus
  in: [ContactStatus]
  nin: [ContactStatus]
}


input ListComparableInt64OperationFilterInput {
  all: ComparableInt64OperationFilterInput
  none: ComparableInt64OperationFilterInput
  some: ComparableInt64OperationFilterInput
  any: Boolean
}


input ListContactBehaviorOperationFilterInput {
  all: ContactBehaviorOperationFilterInput
  none: ContactBehaviorOperationFilterInput
  some: ContactBehaviorOperationFilterInput
  any: Boolean
}


input ValueDelimiterOperationFilterInput {
  eq: ValueDelimiter
  neq: ValueDelimiter
  in: [ValueDelimiter!]
  nin: [ValueDelimiter!]
}


input ExportStatusOperationFilterInput {
  eq: ExportStatus
  neq: ExportStatus
  in: [ExportStatus!]
  nin: [ExportStatus!]
}


"""An edge in a connection."""
type ExportEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Export!
}


type AudienceGroupInfo {
  id: String!
  name: String
  description: String
  isPublic: Boolean!
  isDynamic: Boolean!
}


"""An edge in a connection."""
type AudienceGroupInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AudienceGroupInfo!
}


input ListFilterInputTypeOfColumnFilterInput {
  all: ColumnFilterInput
  none: ColumnFilterInput
  some: ColumnFilterInput
  any: Boolean
}


input ImportDeleteAreaOperationFilterInput {
  eq: ImportDeleteArea
  neq: ImportDeleteArea
  in: [ImportDeleteArea!]
  nin: [ImportDeleteArea!]
}


input ImportStatusOperationFilterInput {
  eq: ImportStatus
  neq: ImportStatus
  in: [ImportStatus!]
  nin: [ImportStatus!]
}


"""An edge in a connection."""
type ImportEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Import!
}


input StatusOperationFilterInput {
  eq: Status
  neq: Status
  in: [Status!]
  nin: [Status!]
}


"""An edge in a connection."""
type ContactConversationEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: ContactConversation!
}


"""An edge in a connection."""
type ContactNoteEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: ContactNote!
}


input JourneyGoalTypeOperationFilterInput {
  eq: JourneyGoalType
  neq: JourneyGoalType
  in: [JourneyGoalType!]
  nin: [JourneyGoalType!]
}


input ConditionGroupFilterInput {
  and: [ConditionGroupFilterInput!]
  or: [ConditionGroupFilterInput!]
  operator: ConditionGroupOperatorOperationFilterInput
  conditions: ListFilterInputTypeOfRuleFilterInput
  conditionGroups: ListFilterInputTypeOfRuleGroupFilterInput
}


input ConditionGroupSortInput {
  operator: SortEnumType
}


input EventTypeOperationFilterInput {
  eq: EventType
  neq: EventType
  in: [EventType!]
  nin: [EventType!]
}


type ContactJourneyGoal {
  goalReachedUtc: DateTime!
  journeyName: String!
  id: String!
  name: String
  description: String
  type: JourneyGoalType!
  """Only used for GLOBAL goals"""
  filter: ConditionGroup
  conversion: JourneyConversion
  createdBy: String
  createdUtc: DateTime!
  modifiedBy: String
  modifiedUtc: DateTime!
  journeyId: String!
}


"""An edge in a connection."""
type ContactJourneyGoalEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: ContactJourneyGoal!
}


type ContactJourneyConversion {
  journeyName: String!
  valueWhenConverted: Float!
  convertedUtc: DateTime!
  id: String!
  name: String
  description: String
  value: Float!
  createdBy: String
  createdUtc: DateTime!
  modifiedBy: String
  modifiedUtc: DateTime!
  journeyId: String!
}


"""An edge in a connection."""
type ContactJourneyConversionEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: ContactJourneyConversion!
}


type ContactInfo {
  id: String!
  firstName: String
  lastName: String
  rating: Float
  longitude: Decimal
  latitude: Decimal
  streetAddress: String
  streetAddress2: String
  addressLocality: String
  addressRegion: String
  postalCode: String
  addressCountry: String
  timeZone: String
  language: String
  sendFormat: SendFormat!
  status: ContactStatus!
  email: String!
  optInUtc: DateTime
  optInSource: OptInSource!
  optInIp: String
  confirmedUtc: DateTime
  confirmedIp: String
  optOutUtc: DateTime
  optOutSource: OptOutSource!
  optOutIp: String
  optOutReason: String
  softBounceCount: Int!
  hardBounceCount: Int!
  audienceId: String!
  tags: [String!]
  createdUtc: DateTime!
  createdBy: String!
  modifiedUtc: DateTime!
  modifiedBy: String!
}


"""An edge in a connection."""
type ContactInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: ContactInfo!
}


type SubscriberEventStats {
  entityType: EntityType!
  entityId: String!
  combinationId: String!
  eventType: EventType!
  serverResponse: String
  eventUtc: DateTime!
}


"""An edge in a connection."""
type SubscriberEventStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: SubscriberEventStats!
}


input ValidStatusOperationFilterInput {
  eq: ValidStatus
  neq: ValidStatus
  in: [ValidStatus!]
  nin: [ValidStatus!]
}


input NullableOfFormTypeOperationFilterInput {
  eq: FormType
  neq: FormType
  in: [FormType]
  nin: [FormType]
}


input TranslationsFilterInput {
  and: [TranslationsFilterInput!]
  or: [TranslationsFilterInput!]
  required: StringOperationFilterInput
  formError: StringOperationFilterInput
  minLengthError: StringOperationFilterInput
  maxLengthError: StringOperationFilterInput
  placeholder: StringOperationFilterInput
  formatError: StringOperationFilterInput
  invalidDataError: StringOperationFilterInput
  ftfTitle: StringOperationFilterInput
  ftfFriends: StringOperationFilterInput
  ftfNote: StringOperationFilterInput
  ftfInformation: StringOperationFilterInput
  name: StringOperationFilterInput
  note: StringOperationFilterInput
  addFriend: StringOperationFilterInput
  close: StringOperationFilterInput
  otherText: StringOperationFilterInput
}


input TranslationsSortInput {
  required: SortEnumType
  formError: SortEnumType
  minLengthError: SortEnumType
  maxLengthError: SortEnumType
  placeholder: SortEnumType
  formatError: SortEnumType
  invalidDataError: SortEnumType
  ftfTitle: SortEnumType
  ftfFriends: SortEnumType
  ftfNote: SortEnumType
  ftfInformation: SortEnumType
  name: SortEnumType
  note: SortEnumType
  addFriend: SortEnumType
  close: SortEnumType
  otherText: SortEnumType
}


input ListFilterInputTypeOfSubmissionAnswerFilterInput {
  all: SubmissionAnswerFilterInput
  none: SubmissionAnswerFilterInput
  some: SubmissionAnswerFilterInput
  any: Boolean
}


"""An edge in a connection."""
type FormInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: FormInfo!
}


type SubmissionResponse {
  id: String!
  submissionUtc: DateTime!
  timeSpentMinutes: Float!
  createdUtc: DateTime!
  eventType: EventType!
  contactId: String
  sourceId: String
  respondentId: String!
  answers: [SubmissionAnswer]
}


"""An edge in a connection."""
type SubmissionResponseEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: SubmissionResponse!
}


input QuestionTypeOperationFilterInput {
  eq: QuestionType
  neq: QuestionType
  in: [QuestionType!]
  nin: [QuestionType!]
}


input QuestionOrientationOperationFilterInput {
  eq: QuestionOrientation
  neq: QuestionOrientation
  in: [QuestionOrientation!]
  nin: [QuestionOrientation!]
}


input NullableOfQuestionSourceTypeOperationFilterInput {
  eq: QuestionSourceType
  neq: QuestionSourceType
  in: [QuestionSourceType]
  nin: [QuestionSourceType]
}


input FormQuestionStylesFilterInput {
  and: [FormQuestionStylesFilterInput!]
  or: [FormQuestionStylesFilterInput!]
  fontSize: StringOperationFilterInput
  fontFamily: StringOperationFilterInput
  fontColor: StringOperationFilterInput
  lineHeight: StringOperationFilterInput
  fontStyle: StringOperationFilterInput
  textTransform: StringOperationFilterInput
  textDecoration: StringOperationFilterInput
  letterSpacing: StringOperationFilterInput
  wordSpacing: StringOperationFilterInput
  padding: StringOperationFilterInput
  backgroundColor: StringOperationFilterInput
  backgroundImage: StringOperationFilterInput
  align: StringOperationFilterInput
  width: StringOperationFilterInput
  borderRadius: StringOperationFilterInput
  fullMobileWidth: BooleanOperationFilterInput
}


input NullableOfRatingTypeOperationFilterInput {
  eq: RatingType
  neq: RatingType
  in: [RatingType]
  nin: [RatingType]
}


input FormQuestionStylesSortInput {
  fontSize: SortEnumType
  fontFamily: SortEnumType
  fontColor: SortEnumType
  lineHeight: SortEnumType
  fontStyle: SortEnumType
  textTransform: SortEnumType
  textDecoration: SortEnumType
  letterSpacing: SortEnumType
  wordSpacing: SortEnumType
  padding: SortEnumType
  backgroundColor: SortEnumType
  backgroundImage: SortEnumType
  align: SortEnumType
  width: SortEnumType
  borderRadius: SortEnumType
  fullMobileWidth: SortEnumType
}


"""An edge in a connection."""
type QuestionInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: QuestionInfo!
}


type Folder {
  id: String!
  parentId: String
  name: String!
  hasChildren: Boolean!
}


"""An edge in a connection."""
type FolderEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Folder!
}


input FileTypeOperationFilterInput {
  eq: FileType
  neq: FileType
  in: [FileType!]
  nin: [FileType!]
}


input NullableOfEditorTypeOperationFilterInput {
  eq: EditorType
  neq: EditorType
  in: [EditorType]
  nin: [EditorType]
}


input ComparableNullableOfInt32OperationFilterInput {
  eq: Int
  neq: Int
  in: [Int]
  nin: [Int]
  gt: Int
  ngt: Int
  gte: Int
  ngte: Int
  lt: Int
  nlt: Int
  lte: Int
  nlte: Int
}


input ListFilterInputTypeOfVersionFilterInput {
  all: VersionFilterInput
  none: VersionFilterInput
  some: VersionFilterInput
  any: Boolean
}


"""An edge in a connection."""
type FileInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: FileInfo!
}


type FileStorageStatsByDay {
  accountId: Long!
  statUtc: DateTime!
  totalStorage: Int!
  generalStorage: Int!
  imageStorage: Int!
}


"""An edge in a connection."""
type FileStorageStatsByDayEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: FileStorageStatsByDay!
}


input CampaignTypeOperationFilterInput {
  eq: CampaignType
  neq: CampaignType
  in: [CampaignType!]
  nin: [CampaignType!]
}


input ListFilterInputTypeOfCampaignContentHistoryFilterInput {
  all: CampaignContentInfoFilterInput
  none: CampaignContentInfoFilterInput
  some: CampaignContentInfoFilterInput
  any: Boolean
}


input NullableOfJourneyStatusOperationFilterInput {
  eq: JourneyStatus
  neq: JourneyStatus
  in: [JourneyStatus]
  nin: [JourneyStatus]
}


input SendScheduleTypeOperationFilterInput {
  eq: SendScheduleType
  neq: SendScheduleType
  in: [SendScheduleType!]
  nin: [SendScheduleType!]
}


input CampaignSendStatusOperationFilterInput {
  eq: CampaignSendStatus
  neq: CampaignSendStatus
  in: [CampaignSendStatus!]
  nin: [CampaignSendStatus!]
}


input ListComparableDateTimeOperationFilterInput {
  all: ComparableDateTimeOperationFilterInput
  none: ComparableDateTimeOperationFilterInput
  some: ComparableDateTimeOperationFilterInput
  any: Boolean
}


input NullableOfMvWinTypeOperationFilterInput {
  eq: MvWinType
  neq: MvWinType
  in: [MvWinType]
  nin: [MvWinType]
}


input NullableOfMvTimeMeasurementOperationFilterInput {
  eq: MvTimeMeasurement
  neq: MvTimeMeasurement
  in: [MvTimeMeasurement]
  nin: [MvTimeMeasurement]
}


input ComparableNullableOfDoubleOperationFilterInput {
  eq: Float
  neq: Float
  in: [Float]
  nin: [Float]
  gt: Float
  ngt: Float
  gte: Float
  ngte: Float
  lt: Float
  nlt: Float
  lte: Float
  nlte: Float
}


input SendFormatOperationFilterInput {
  eq: SendFormat
  neq: SendFormat
  in: [SendFormat!]
  nin: [SendFormat!]
}


input ContactStatusOperationFilterInput {
  eq: ContactStatus
  neq: ContactStatus
  in: [ContactStatus!]
  nin: [ContactStatus!]
}


input OptInSourceOperationFilterInput {
  eq: OptInSource
  neq: OptInSource
  in: [OptInSource!]
  nin: [OptInSource!]
}


input OptOutSourceOperationFilterInput {
  eq: OptOutSource
  neq: OptOutSource
  in: [OptOutSource!]
  nin: [OptOutSource!]
}


input ListFilterInputTypeOfAudienceGroupInfoViewModelFilterInput {
  all: AudienceGroupInfoFilterInput
  none: AudienceGroupInfoFilterInput
  some: AudienceGroupInfoFilterInput
  any: Boolean
}


input ListFilterInputTypeOfProfileFieldFilterInput {
  all: ProfileFieldFilterInput
  none: ProfileFieldFilterInput
  some: ProfileFieldFilterInput
  any: Boolean
}


"""An edge in a connection."""
type CampaignInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: CampaignInfo!
}


type Contact {
  id: String!
  firstName: String
  lastName: String
  rating: Float
  longitude: Decimal
  latitude: Decimal
  streetAddress: String
  streetAddress2: String
  addressLocality: String
  addressRegion: String
  postalCode: String
  addressCountry: String
  timeZone: String
  language: String
  sendFormat: SendFormat!
  status: ContactStatus!
  email: String!
  optInUtc: DateTime
  optInSource: OptInSource!
  optInIp: String
  confirmedUtc: DateTime
  confirmedIp: String
  optOutUtc: DateTime
  optOutSource: OptOutSource!
  optOutIp: String
  optOutReason: String
  softBounceCount: Int!
  hardBounceCount: Int!
  audienceId: String!
  groups: [AudienceGroupInfo!]
  profileFields: [ProfileField!]
  tags: [String!]
  createdUtc: DateTime!
  createdBy: String!
  modifiedUtc: DateTime!
  modifiedBy: String!
}


"""An edge in a connection."""
type ContactEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Contact!
}


type History {
  version: Float!
  lastModifiedUtc: DateTime!
}


"""An edge in a connection."""
type HistoryEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: History!
}


"""An edge in a connection."""
type SurveyInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: SurveyInfo!
}


"""An edge in a connection."""
type LandingPageInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: LandingPageInfo!
}


input TransactionStatusOperationFilterInput {
  eq: TransactionStatus
  neq: TransactionStatus
  in: [TransactionStatus!]
  nin: [TransactionStatus!]
}


input RecipientTypeOperationFilterInput {
  eq: RecipientType
  neq: RecipientType
  in: [RecipientType!]
  nin: [RecipientType!]
}


input NullableOfEmailEventTypeOperationFilterInput {
  eq: EmailEventType
  neq: EmailEventType
  in: [EmailEventType]
  nin: [EmailEventType]
}


input NullableOfDeviceTypeOperationFilterInput {
  eq: DeviceType
  neq: DeviceType
  in: [DeviceType]
  nin: [DeviceType]
}


input NullableOfSoftwareTypeOperationFilterInput {
  eq: SoftwareType
  neq: SoftwareType
  in: [SoftwareType]
  nin: [SoftwareType]
}


input NullableOfOperatingSystemTypeOperationFilterInput {
  eq: OperatingSystemType
  neq: OperatingSystemType
  in: [OperatingSystemType]
  nin: [OperatingSystemType]
}


input ListFilterInputTypeOfTransactionMetadataFilterInput {
  all: TransactionMetadataFilterInput
  none: TransactionMetadataFilterInput
  some: TransactionMetadataFilterInput
  any: Boolean
}


input ListFilterInputTypeOfTransactionHeaderFilterInput {
  all: TransactionHeaderFilterInput
  none: TransactionHeaderFilterInput
  some: TransactionHeaderFilterInput
  any: Boolean
}


input ListFilterInputTypeOfTransactionLinkFilterInput {
  all: TransactionLinkFilterInput
  none: TransactionLinkFilterInput
  some: TransactionLinkFilterInput
  any: Boolean
}


input EmailEventTypeOperationFilterInput {
  eq: EmailEventType
  neq: EmailEventType
  in: [EmailEventType!]
  nin: [EmailEventType!]
}


input ListComparableByteOperationFilterInput {
  all: ComparableByteOperationFilterInput
  none: ComparableByteOperationFilterInput
  some: ComparableByteOperationFilterInput
  any: Boolean
}


type Transaction {
  id: String!
  contactId: String
  parentId: String
  requestId: String!
  groupName: String!
  """Processing status"""
  status: TransactionStatus!
  sendAtUtc: DateTime!
  processedUtc: DateTime
  trackOpens: Boolean!
  trackClicks: Boolean!
  trackReplies: Boolean!
  trackDomains: Boolean!
  stripQueryString: Boolean!
  showRecipients: Boolean!
  ignoreSuppressCheck: Boolean!
  autoGenerateText: Boolean!
  autoGenerateHtml: Boolean!
  enableViewOnline: Boolean!
  enableAnalytics: Boolean!
  subject: String
  replyToName: String
  replyTo: String
  fromName: String
  from: String
  recipientName: String
  recipient: String!
  recipientType: RecipientType!
  bccRecipients: [String!]!
  ccRecipients: [String!]!
  sendCount: Int!
  openCount: Int!
  readSeconds: Int!
  clickCount: Int!
  bounceCategory: EmailEventType
  complaint: Boolean!
  unsubscribe: Boolean!
  bounceError: String
  error: String
  device: DeviceType
  software: SoftwareType
  os: OperatingSystemType
  retryNbr: Int
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
  tags: [String!]!
  metadata: [TransactionMetadata!]!
  customHeaders: [TransactionHeader!]!
  links: [TransactionLink!]!
}


"""An edge in a connection."""
type TransactionEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Transaction!
}


type TransactionEvent {
  conteactId: String
  eventUtc: DateTime!
  eventType: EmailEventType!
  emailDomain: String
  readSeconds: Int
  ipAddress: [Byte!]
  software: SoftwareType
  os: OperatingSystemType
  device: DeviceType
  serverResponse: String
  transactionLinkId: String
}


"""An edge in a connection."""
type TransactionEventEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionEvent!
}


type TransactionActivity {
  id: String!
  sendAtUtc: DateTime!
  subject: String
  fromAddress: String
  toAddress: String
  group: String
  bounceCategory: EmailEventType
  bounceError: String
}


"""An edge in a connection."""
type TransactionActivityEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionActivity!
}


type TransactionPerformanceLinkStats {
  linkName: String
  totalClicks: Int!
  uniqueClicks: Int!
}


"""An edge in a connection."""
type TransactionPerformanceLinkStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionPerformanceLinkStats!
}


type TransactionFromDomainStats {
  valid: Boolean!
  lastVerifiedUtc: DateTime!
  domain: String
  requests: Int!
  transactions: Int!
  created: Int!
  processed: Int!
  hardBounce: Int!
  softBounce: Int!
  softSenderAuth: Int!
  softIp: Int!
  softDns: Int!
  block: Int!
  blockContent: Int!
  blockSender: Int!
  declined: Int!
  invalidEmail: Int!
  delivered: Int!
  opens: Int!
  uniqueOpens: Int!
  clicks: Int!
  uniqueClicks: Int!
  uniqueOptOut: Int!
  uniqueComplaints: Int!
  feedback: Int!
  uniqueFeedback: Int!
  rating: Int!
  uniqueRating: Int!
  viewOnline: Int!
  uniqueViewOnline: Int!
}


"""An edge in a connection."""
type TransactionFromDomainStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionFromDomainStats!
}


type TransactionDomainStats {
  domain: String
  requests: Int!
  transactions: Int!
  created: Int!
  processed: Int!
  hardBounce: Int!
  softBounce: Int!
  softSenderAuth: Int!
  softIp: Int!
  softDns: Int!
  block: Int!
  blockContent: Int!
  blockSender: Int!
  declined: Int!
  invalidEmail: Int!
  delivered: Int!
  opens: Int!
  uniqueOpens: Int!
  clicks: Int!
  uniqueClicks: Int!
  uniqueOptOut: Int!
  uniqueComplaints: Int!
  feedback: Int!
  uniqueFeedback: Int!
  rating: Int!
  uniqueRating: Int!
  viewOnline: Int!
  uniqueViewOnline: Int!
}


"""An edge in a connection."""
type TransactionDomainStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionDomainStats!
}


type TransactionBounceDomain {
  eventUtc: DateTime!
  domain: String
  eventType: EmailEventType!
  errorDetail: String
}


"""An edge in a connection."""
type TransactionBounceDomainEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionBounceDomain!
}


type TransactionTopBounceDomainStats {
  hardBounce: Int!
  hardBouncePct: Float!
  softBounce: Int!
  softBouncePct: Float!
  softSenderAuth: Int!
  softSenderAuthPct: Float!
  softIp: Int!
  softIpPct: Float!
  softDns: Int!
  softDnsPct: Float!
  block: Int!
  blockPct: Float!
  blockContent: Int!
  blockContentPct: Float!
  blockSender: Int!
  blockSenderPct: Float!
  domain: String
  bounceCount: Int!
}


"""An edge in a connection."""
type TransactionTopBounceDomainStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionTopBounceDomainStats!
}


type TransactionStats {
  statUtc: DateTime
  requests: Int!
  transactions: Int!
  created: Int!
  processed: Int!
  hardBounce: Int!
  softBounce: Int!
  softSenderAuth: Int!
  softIp: Int!
  softDns: Int!
  block: Int!
  blockContent: Int!
  blockSender: Int!
  declined: Int!
  invalidEmail: Int!
  delivered: Int!
  opens: Int!
  uniqueOpens: Int!
  clicks: Int!
  uniqueClicks: Int!
  uniqueOptOut: Int!
  uniqueComplaints: Int!
  feedback: Int!
  uniqueFeedback: Int!
  rating: Int!
  uniqueRating: Int!
  viewOnline: Int!
  uniqueViewOnline: Int!
}


"""An edge in a connection."""
type TransactionStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionStats!
}


type TransactionLinkStats {
  statUtc: DateTime
  linkName: String
  clicked: Int!
  uniqueClicked: Int!
}


"""An edge in a connection."""
type TransactionLinkStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionLinkStats!
}


input JourneyReEntryTypeOperationFilterInput {
  eq: JourneyReEntryType
  neq: JourneyReEntryType
  in: [JourneyReEntryType!]
  nin: [JourneyReEntryType!]
}


input JourneyContactStatusOperationFilterInput {
  eq: JourneyContactStatus
  neq: JourneyContactStatus
  in: [JourneyContactStatus!]
  nin: [JourneyContactStatus!]
}


"""An edge in a connection."""
type JourneyInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyInfo!
}


type JourneyContact {
  id: String
  email: String
  tags: [String]
  status: JourneyContactStatus!
  entryUtc: DateTime!
  exitUtc: DateTime
  entryCount: Int!
}


"""An edge in a connection."""
type JourneyContactEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyContact!
}


type JourneyContactStatsByDay {
  StatUtc: DateTime!
  statType: JourneyContactStatus!
  contactCount: Int!
}


"""An edge in a connection."""
type JourneyContactStatsByDayEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyContactStatsByDay!
}


type JourneyTagStats {
  tagName: String
  contactCount: Int!
}


"""An edge in a connection."""
type JourneyTagStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyTagStats!
}


type JourneyDuration {
  duration: Int!
  contactCount: Int!
}


"""An edge in a connection."""
type JourneyDurationEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyDuration!
}


input NodeStatisticsSortInput {
  evaluated: SortEnumType
  performed: SortEnumType
}


input JourneyNodeConfigurationSortInput {
  noteText: SortEnumType
  newValue: SortEnumType
  fbAdAccountId: SortEnumType
  fbAudienceId: SortEnumType
  entityId: SortEnumType
  systemFieldName: SortEnumType
  journeyId: SortEnumType
  continueJourney: SortEnumType
  notification: JourneyNodeNotificationSortInput
  deliveryWindow: DeliveryWindowSortInput
  siteNotification: SiteNotificationSortInput
  settings: SiteNotificationSettingsSortInput
  actionOperator: SortEnumType
  newStatus: SortEnumType
  filter: ConditionGroupSortInput
  percentage: SortEnumType
  pointValue: SortEnumType
  expireInterval: SortEnumType
  expireUtc: SortEnumType
  date: SortEnumType
  waitLimit: SortEnumType
  checkFrequency: SortEnumType
  campaignScope: SortEnumType
  scope: SortEnumType
  event: JourneyNodeEventSortInput
  referredFromFilter: SortEnumType
  path: SortEnumType
  eventKey: SortEnumType
  engaged: SortEnumType
  webhookUrl: SortEnumType
  txGroupName: SortEnumType
}


input CampaignSortInput {
  id: SortEnumType
  name: SortEnumType
  description: SortEnumType
  type: SortEnumType
  language: SortEnumType
  isOperational: SortEnumType
  replyEmail: EmailSortInput
  includeEntireAudience: SortEnumType
  enableAutoRetry: SortEnumType
  timeJumper: SortEnumType
  sendScheduleType: SortEnumType
  sendStatus: SortEnumType
  """Date/time (UTC) the campaign was scheduled."""
  scheduledToSendUtc: SortEnumType
  scheduledBy: SortEnumType
  sendTimeCount: SortEnumType
  trackReplies: SortEnumType
  trackLinkClicks: SortEnumType
  trackOpens: SortEnumType
  trackBrowser: SortEnumType
  trackLocation: SortEnumType
  trackHardware: SortEnumType
  """Used for tracked domains. Defaults to true."""
  trackDomains: SortEnumType
  isMultivariate: SortEnumType
  mvGoal: SortEnumType
  mvHypothesis: SortEnumType
  mvTestPct: SortEnumType
  mvWinType: SortEnumType
  mvWinWait: SortEnumType
  mvWinWaitType: SortEnumType
  mvWinSendWait: SortEnumType
  mvWinSendWaitType: SortEnumType
  """
  This value is used to determine what time of day the winning campaign should be sent.
  """
  mvWinSendUtc: SortEnumType
  mvWinCombination: SortEnumType
  mVWinManualOverride: SortEnumType
  enableAnalytics: SortEnumType
  globalPreheaderInd: SortEnumType
  fromCount: SortEnumType
  subjectCount: SortEnumType
  contentCount: SortEnumType
  totalContacts: SortEnumType
  totalCombinations: SortEnumType
  journeyStatus: SortEnumType
  rssCheckFrequency: SortEnumType
  """Url used to get items from an RSS feed for RSS Campaigns"""
  rssUrl: SortEnumType
  rssCheckType: SortEnumType
  rssSendIfNoNewOrUpdatedItems: SortEnumType
  rssSendWeekDays: SortEnumType
  rssSendTimeUtc: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
  """Mail domain for the campaign."""
  mailDomain: AccountDomainSortInput
  audience: SubscriberListSortInput
  journeyId: SortEnumType
  """
  Can only be set to 'True' for campaigns that are not in the sending process can be marked as archived.
  """
  isArchived: SortEnumType
}


input JourneyNodeTypeOperationFilterInput {
  eq: JourneyNodeType
  neq: JourneyNodeType
  in: [JourneyNodeType!]
  nin: [JourneyNodeType!]
}


input NullableOfTerminatorTypeOperationFilterInput {
  eq: TerminatorType
  neq: TerminatorType
  in: [TerminatorType]
  nin: [TerminatorType]
}


input NodeStatisticsFilterInput {
  and: [NodeStatisticsFilterInput!]
  or: [NodeStatisticsFilterInput!]
  evaluated: ComparableInt32OperationFilterInput
  performed: ComparableInt32OperationFilterInput
}


input JourneyNodeConfigurationFilterInput {
  and: [JourneyNodeConfigurationFilterInput!]
  or: [JourneyNodeConfigurationFilterInput!]
  noteText: StringOperationFilterInput
  newValue: StringOperationFilterInput
  tags: ListStringOperationFilterInput
  fbAdAccountId: StringOperationFilterInput
  fbAudienceId: StringOperationFilterInput
  entityId: ComparableInt64OperationFilterInput
  entityIds: ListComparableInt64OperationFilterInput
  systemFieldName: StringOperationFilterInput
  journeyId: ComparableInt64OperationFilterInput
  continueJourney: BooleanOperationFilterInput
  notification: JourneyNodeNotificationFilterInput
  deliveryWindow: DeliveryWindowFilterInput
  siteNotification: SiteNotificationFilterInput
  settings: SiteNotificationSettingsFilterInput
  actionOperator: NullableOfActionOperatorOperationFilterInput
  newStatus: NullableOfSubscriberStatusOperationFilterInput
  filter: ConditionGroupFilterInput
  percentage: ComparableNullableOfInt32OperationFilterInput
  pointValue: ComparableNullableOfDoubleOperationFilterInput
  expireInterval: StringOperationFilterInput
  expireUtc: ComparableNullableOfDateTimeOperationFilterInput
  date: StringOperationFilterInput
  waitLimit: StringOperationFilterInput
  checkFrequency: StringOperationFilterInput
  campaignScope: StringOperationFilterInput
  scope: NullableOfJourneyNodeScopeOperationFilterInput
  event: JourneyNodeEventFilterInput
  referredFromFilter: StringOperationFilterInput
  path: StringOperationFilterInput
  eventKey: StringOperationFilterInput
  engaged: BooleanOperationFilterInput
  webhookUrl: StringOperationFilterInput
  txGroupName: StringOperationFilterInput
}


input CampaignFilterInput {
  and: [CampaignFilterInput!]
  or: [CampaignFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  type: CampaignTypeOperationFilterInput
  language: StringOperationFilterInput
  isOperational: BooleanOperationFilterInput
  replyEmail: EmailFilterInput
  includeEntireAudience: BooleanOperationFilterInput
  enableAutoRetry: BooleanOperationFilterInput
  timeJumper: BooleanOperationFilterInput
  sendScheduleType: SendScheduleTypeOperationFilterInput
  sendStatus: CampaignSendStatusOperationFilterInput
  """Date/time (UTC) the campaign was scheduled."""
  scheduledToSendUtc: ComparableNullableOfDateTimeOperationFilterInput
  scheduledBy: ComparableNullableOfInt64OperationFilterInput
  sendTimeCount: ComparableInt32OperationFilterInput
  trackReplies: BooleanOperationFilterInput
  trackLinkClicks: BooleanOperationFilterInput
  trackOpens: BooleanOperationFilterInput
  trackBrowser: BooleanOperationFilterInput
  trackLocation: BooleanOperationFilterInput
  trackHardware: BooleanOperationFilterInput
  """Used for tracked domains. Defaults to true."""
  trackDomains: BooleanOperationFilterInput
  isMultivariate: BooleanOperationFilterInput
  mvGoal: MvGoalOperationFilterInput
  mvHypothesis: StringOperationFilterInput
  mvTestPct: ComparableDoubleOperationFilterInput
  mvWinType: NullableOfMvWinTypeOperationFilterInput
  mvWinWait: ComparableInt32OperationFilterInput
  mvWinWaitType: NullableOfMvTimeMeasurementOperationFilterInput
  mvWinSendWait: ComparableInt32OperationFilterInput
  mvWinSendWaitType: NullableOfMvTimeMeasurementOperationFilterInput
  """
  This value is used to determine what time of day the winning campaign should be sent.
  """
  mvWinSendUtc: ComparableNullableOfDateTimeOperationFilterInput
  mvWinCombination: ComparableInt64OperationFilterInput
  mVWinManualOverride: BooleanOperationFilterInput
  enableAnalytics: BooleanOperationFilterInput
  analyticParams: ListFilterInputTypeOfNameValueFilterInput
  customHeaders: ListFilterInputTypeOfNameValueFilterInput
  globalPreheaderInd: BooleanOperationFilterInput
  fromCount: ComparableInt32OperationFilterInput
  subjectCount: ComparableInt32OperationFilterInput
  contentCount: ComparableInt32OperationFilterInput
  froms: ListFilterInputTypeOfCampaignFromFilterInput
  subjects: ListFilterInputTypeOfCampaignSubjectFilterInput
  """The date/times the campaign was scheduled to send."""
  sendsUtc: ListComparableDateTimeOperationFilterInput
  variationContents: ListFilterInputTypeOfCampaignVariationContentFilterInput
  totalContacts: ComparableInt32OperationFilterInput
  totalCombinations: ComparableInt32OperationFilterInput
  journeyStatus: NullableOfJourneyStatusOperationFilterInput
  rssCheckFrequency: StringOperationFilterInput
  """Url used to get items from an RSS feed for RSS Campaigns"""
  rssUrl: StringOperationFilterInput
  rssCheckType: NullableOfTriggerRssCheckTypeOperationFilterInput
  rssSendIfNoNewOrUpdatedItems: BooleanOperationFilterInput
  rssSendWeekDays: StringOperationFilterInput
  rssSendTimeUtc: ComparableNullableOfDateTimeOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  """Mail domain for the campaign."""
  mailDomain: AccountDomainFilterInput
  audience: SubscriberListFilterInput
  journeyId: ComparableNullableOfInt64OperationFilterInput
  """
  Can only be set to 'True' for campaigns that are not in the sending process can be marked as archived.
  """
  isArchived: BooleanOperationFilterInput
  tags: ListFilterInputTypeOfCampaignTagFilterInput
  audienceFilters: ListFilterInputTypeOfCampaignAudienceFilterFilterInput
  combinations: ListFilterInputTypeOfCampaignCombinationFilterInput
}


input ListFilterInputTypeOfFlowPathViewModelFilterInput {
  all: FlowPathFilterInput
  none: FlowPathFilterInput
  some: FlowPathFilterInput
  any: Boolean
}


"""An edge in a connection."""
type JourneyNodeInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyNodeInfo!
}


"""An edge in a connection."""
type CustomApiEventEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: CustomApiEvent!
}


"""An edge in a connection."""
type SMSCampaignEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: SMSCampaign!
}


input ContactInfoFilterInput {
  and: [ContactInfoFilterInput!]
  or: [ContactInfoFilterInput!]
  id: StringOperationFilterInput
  firstName: StringOperationFilterInput
  lastName: StringOperationFilterInput
  rating: ComparableNullableOfDoubleOperationFilterInput
  longitude: ComparableNullableOfDecimalOperationFilterInput
  latitude: ComparableNullableOfDecimalOperationFilterInput
  streetAddress: StringOperationFilterInput
  streetAddress2: StringOperationFilterInput
  addressLocality: StringOperationFilterInput
  addressRegion: StringOperationFilterInput
  postalCode: StringOperationFilterInput
  addressCountry: StringOperationFilterInput
  timeZone: StringOperationFilterInput
  language: StringOperationFilterInput
  sendFormat: SendFormatOperationFilterInput
  status: ContactStatusOperationFilterInput
  email: StringOperationFilterInput
  optInUtc: ComparableNullableOfDateTimeOperationFilterInput
  optInSource: OptInSourceOperationFilterInput
  optInIp: StringOperationFilterInput
  confirmedUtc: ComparableNullableOfDateTimeOperationFilterInput
  confirmedIp: StringOperationFilterInput
  optOutUtc: ComparableNullableOfDateTimeOperationFilterInput
  optOutSource: OptOutSourceOperationFilterInput
  optOutIp: StringOperationFilterInput
  optOutReason: StringOperationFilterInput
  softBounceCount: ComparableInt32OperationFilterInput
  hardBounceCount: ComparableInt32OperationFilterInput
  audienceId: StringOperationFilterInput
  tags: ListStringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


"""An edge in a connection."""
type JourneyGoalEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyGoal!
}


type JourneyGoalContact {
  contact: ContactInfo!
  evaluatedUtc: DateTime!
}


"""An edge in a connection."""
type JourneyGoalContactEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyGoalContact!
}


"""An edge in a connection."""
type JourneyConversionEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyConversion!
}


type JourneyConversionContact {
  contact: ContactInfo!
  conversionUtc: DateTime!
}


"""An edge in a connection."""
type JourneyConversionContactEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyConversionContact!
}


"""
Suppresses emails sent to specific email address or domains that should never receive emails from the account
"""
type AccountSuppressionFilter {
  """Unique suppression filter ID"""
  id: String!
  """Local part of email address to filter (left side of @ symbol"""
  localPart: String
  """Domain of email address to filter (right side of @ symbol"""
  domain: String
  """Reason the filter is being added"""
  reason: String
  """Date/time the setting was created"""
  createdUtc: DateTime!
  """Id of user who created the setting"""
  createdBy: String!
}


"""An edge in a connection."""
type AccountSuppressionFilterEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountSuppressionFilter!
}


type SavedSearchInfo {
  id: String!
  name: String!
  description: String!
}


"""An edge in a connection."""
type SavedSearchInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: SavedSearchInfo!
}


type View {
  id: String!
  name: String
  description: String
  type: EntityType!
  jsonConfiguration: String
  isPrivate: Boolean!
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


"""An edge in a connection."""
type ViewEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: View!
}


type AccountApiKeyInfo {
  id: String!
  name: String!
  permissionKeys: [String!]!
  audiences: [String!]!
}


"""An edge in a connection."""
type AccountApiKeyInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountApiKeyInfo!
}


input ListFilterInputTypeOfWebhookEventFilterInput {
  all: WebhookEventFilterInput
  none: WebhookEventFilterInput
  some: WebhookEventFilterInput
  any: Boolean
}


input NullableOfIntegrationTypeOperationFilterInput {
  eq: IntegrationType
  neq: IntegrationType
  in: [IntegrationType]
  nin: [IntegrationType]
}


input WebhookDataSettingOperationFilterInput {
  eq: WebhookDataSetting
  neq: WebhookDataSetting
  in: [WebhookDataSetting!]
  nin: [WebhookDataSetting!]
}


"""An edge in a connection."""
type WebhookEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Webhook!
}


input GraphQLCallTypeOperationFilterInput {
  eq: GraphQLCallType
  neq: GraphQLCallType
  in: [GraphQLCallType!]
  nin: [GraphQLCallType!]
}


type UserActivity {
  userEmail: String!
  accountName: String
  isApiKey: Boolean!
  ipAddress: [Byte!]
  callDurationMs: Int!
  entityId: String
  entityName: String
  entityType: EntityType!
  complexity: Int!
  maxDepth: Int!
  callType: GraphQLCallType!
  callName: String!
  callGeneratedErrors: Boolean!
  createdUtc: DateTime!
  userId: String
}


"""An edge in a connection."""
type UserActivityEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: UserActivity!
}


input GlobalNotificationTypeOperationFilterInput {
  eq: GlobalNotificationType
  neq: GlobalNotificationType
  in: [GlobalNotificationType!]
  nin: [GlobalNotificationType!]
}


input AccountUserNotifScopeOperationFilterInput {
  eq: AccountUserNotifScope
  neq: AccountUserNotifScope
  in: [AccountUserNotifScope!]
  nin: [AccountUserNotifScope!]
}


input AccountUserNotifStatusOperationFilterInput {
  eq: AccountUserNotifStatus
  neq: AccountUserNotifStatus
  in: [AccountUserNotifStatus!]
  nin: [AccountUserNotifStatus!]
}


input NullableOfEntityTypeOperationFilterInput {
  eq: EntityType
  neq: EntityType
  in: [EntityType]
  nin: [EntityType]
}


input ComparableNullableOfGuidOperationFilterInput {
  eq: UUID
  neq: UUID
  in: [UUID]
  nin: [UUID]
  gt: UUID
  ngt: UUID
  gte: UUID
  ngte: UUID
  lt: UUID
  nlt: UUID
  lte: UUID
  nlte: UUID
}


input DictionaryOfStringAndStringFilterInput {
  and: [DictionaryOfStringAndStringFilterInput!]
  or: [DictionaryOfStringAndStringFilterInput!]
  comparer: IEqualityComparerOfStringFilterInput
  count: ComparableInt32OperationFilterInput
  keys: ListStringOperationFilterInput
  values: ListStringOperationFilterInput
}


"""An edge in a connection."""
type UserAccountNotificationEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: UserAccountNotification!
}


input ListFilterInputTypeOfCustomReportJobFilterInput {
  all: CustomReportJobFilterInput
  none: CustomReportJobFilterInput
  some: CustomReportJobFilterInput
  any: Boolean
}


type CustomReport {
  id: String!
  name: String
  description: String
  note: String
  isEnabled: Boolean!
  distributionList: [String]
  userIds: [String]
  containsPII: Boolean!
  isInitialized: Boolean!
  lastRunUtc: DateTime
  createdUtc: DateTime!
  modifiedUtc: DateTime!
  modifiedBy: String
  jobs: [CustomReportJob]
}


"""An edge in a connection."""
type CustomReportEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: CustomReport!
}


input ListFilterInputTypeOfItemTierViewModelFilterInput {
  all: ItemTierFilterInput
  none: ItemTierFilterInput
  some: ItemTierFilterInput
  any: Boolean
}


input ListFilterInputTypeOfItemFeatureViewModelFilterInput {
  all: ItemFeatureFilterInput
  none: ItemFeatureFilterInput
  some: ItemFeatureFilterInput
  any: Boolean
}


input ListFilterInputTypeOfItemAddOnViewModelFilterInput {
  all: ItemAddOnFilterInput
  none: ItemAddOnFilterInput
  some: ItemAddOnFilterInput
  any: Boolean
}


type Item {
  id: String!
  """Plan type"""
  type: PlanType!
  name: String!
  description: String!
  tiers: [ItemTier!]!
  features: [ItemFeature!]!
  addOns: [ItemAddOn!]!
  isTrial: Boolean!
  period: Int!
  periodUnit: String!
}


"""An edge in a connection."""
type ItemEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Item!
}


"""An edge in a connection."""
type AIRequestEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AIRequest!
}


input ExportTypeOperationFilterInput {
  eq: ExportType
  neq: ExportType
  in: [ExportType!]
  nin: [ExportType!]
}


input ExportConfigFilterInput {
  and: [ExportConfigFilterInput!]
  or: [ExportConfigFilterInput!]
  entityId: ComparableNullableOfInt64OperationFilterInput
  """Used for survey respondent logs"""
  campaignId: ComparableNullableOfInt64OperationFilterInput
  """Used for campaign event logs"""
  combinationId: ComparableNullableOfInt64OperationFilterInput
  """Email event types used for Campaign and Transaction event exports"""
  emailEvents: ListEmailEventTypeOperationFilterInput
  """Delimiter for export file."""
  delimiter: ValueDelimiterOperationFilterInput
  """Return all contact fields for Campaign event log exports"""
  allFields: BooleanOperationFilterInput
  """Contact fields used for Campaign event log exports"""
  fields: ListStringOperationFilterInput
  startUtc: ComparableNullableOfDateTimeOperationFilterInput
  endUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Hour offset for Campaign event log exports"""
  hourOffset: ComparableNullableOfInt32OperationFilterInput
  """Minute offset for Campaign event log exports"""
  minuteOffset: ComparableNullableOfInt32OperationFilterInput
  """List of tags for filtering on transaction reporting."""
  tags: ListStringOperationFilterInput
  """
  List of transaction groups for filtering on transaction event reporting.
  """
  txGroups: ListStringOperationFilterInput
}


input ExportConfigSortInput {
  entityId: SortEnumType
  """Used for survey respondent logs"""
  campaignId: SortEnumType
  """Used for campaign event logs"""
  combinationId: SortEnumType
  """Delimiter for export file."""
  delimiter: SortEnumType
  """Return all contact fields for Campaign event log exports"""
  allFields: SortEnumType
  startUtc: SortEnumType
  endUtc: SortEnumType
  """Hour offset for Campaign event log exports"""
  hourOffset: SortEnumType
  """Minute offset for Campaign event log exports"""
  minuteOffset: SortEnumType
}


type AccountExport {
  id: String!
  name: String
  type: ExportType!
  downloadUrl: String
  configuration: ExportConfig
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


"""An edge in a connection."""
type AccountExportEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountExport!
}


input CommunicationTypeOperationFilterInput {
  eq: CommunicationType
  neq: CommunicationType
  in: [CommunicationType!]
  nin: [CommunicationType!]
}


input BounceCategoryOperationFilterInput {
  eq: BounceCategory
  neq: BounceCategory
  in: [BounceCategory!]
  nin: [BounceCategory!]
}


input ListComparableInt32OperationFilterInput {
  all: ComparableInt32OperationFilterInput
  none: ComparableInt32OperationFilterInput
  some: ComparableInt32OperationFilterInput
  any: Boolean
}


type AccountAutoRetryRule {
  id: String!
  communicationType: CommunicationType!
  sendingDomain: String
  recipientDomain: String
  bounceCategory: BounceCategory!
  retries: [Int!]
  isActive: Boolean!
  createdBy: String!
  createdUtc: DateTime!
}


"""An edge in a connection."""
type AccountAutoRetryRuleEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountAutoRetryRule
}


input tvafFilterInput {
  and: [tvafFilterInput!]
  or: [tvafFilterInput!]
  kc: ComparableGuidOperationFilterInput
  limit: ComparableInt64OperationFilterInput
}


input ListFilterInputTypeOfAccountPlanAddOnVMFilterInput {
  all: AccountPlanAddOnFilterInput
  none: AccountPlanAddOnFilterInput
  some: AccountPlanAddOnFilterInput
  any: Boolean
}


input NullableOfPlanChangeTypeOperationFilterInput {
  eq: PlanChangeType
  neq: PlanChangeType
  in: [PlanChangeType]
  nin: [PlanChangeType]
}


"""Represents the association of a permission to a security role"""
input SecurityRolePermissionFilterInput {
  and: [SecurityRolePermissionFilterInput!]
  or: [SecurityRolePermissionFilterInput!]
  """ID of Account"""
  accountId: ComparableInt64OperationFilterInput
  """Permission key to associate"""
  permissionKey: StringOperationFilterInput
  """ID of permission to associate"""
  permissionId: ComparableInt64OperationFilterInput
  """ID of security role"""
  groupId: ComparableInt64OperationFilterInput
  """Security role"""
  group: SecurityRoleFilterInput
}


"""Represents the association of a user to a security role"""
input SecurityRoleUserFilterInput {
  and: [SecurityRoleUserFilterInput!]
  or: [SecurityRoleUserFilterInput!]
  """ID of the security role"""
  securityRoleId: ComparableInt64OperationFilterInput
  """ID of the user"""
  userId: ComparableInt64OperationFilterInput
  """Indicates whether association is active or not"""
  isActive: BooleanOperationFilterInput
  """Date/time the association was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the association"""
  createdBy: StringOperationFilterInput
  """Date/time the association was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the association"""
  modifiedBy: StringOperationFilterInput
  """ID of the account"""
  accountId: ComparableInt64OperationFilterInput
}


"""
Represents the association of a security role and audience the role has access to
"""
input SecurityRoleAudienceFilterInput {
  and: [SecurityRoleAudienceFilterInput!]
  or: [SecurityRoleAudienceFilterInput!]
  """ID of audience"""
  audienceId: ComparableInt64OperationFilterInput
  """Date/time the association was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the association"""
  createdBy: StringOperationFilterInput
  """Date/time the association was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the association"""
  modifiedBy: StringOperationFilterInput
}


input AccountPlanAddOnStatsFilterInput {
  and: [AccountPlanAddOnStatsFilterInput!]
  or: [AccountPlanAddOnStatsFilterInput!]
  """Add-on id"""
  id: StringOperationFilterInput
  """Add-on type"""
  type: AddOnTypeOperationFilterInput
  """Sender reputation for this add-on."""
  senderReputation: ComparableDoubleOperationFilterInput
  """Engagement reputation for this add-on."""
  engagementScore: ComparableDoubleOperationFilterInput
  """Sender reputation for the account."""
  accountSenderReputation: ComparableDoubleOperationFilterInput
  """Engagement reputation for the account."""
  accountEngagementScore: ComparableDoubleOperationFilterInput
  """Amount of storage for the account."""
  storageBytes: ComparableInt32OperationFilterInput
  """
  Item count for add-on. For transaction add-ons this represents to total amount of sent transaction (To, CC, and BCC recipients).
  """
  itemCount: ComparableInt32OperationFilterInput
}


input AccountDomainSelectorFilterInput {
  and: [AccountDomainSelectorFilterInput!]
  or: [AccountDomainSelectorFilterInput!]
  id: ComparableInt64OperationFilterInput
  selector: StringOperationFilterInput
  publicKey: StringOperationFilterInput
  isActive: BooleanOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  domainId: ComparableInt64OperationFilterInput
  domain: AccountDomainFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input AccountDomainPageFilterInput {
  and: [AccountDomainPageFilterInput!]
  or: [AccountDomainPageFilterInput!]
  id: ComparableInt64OperationFilterInput
  pageUrl: StringOperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  domainId: ComparableInt64OperationFilterInput
  domain: AccountDomainFilterInput
}


input UserPermissionFilterInput {
  and: [UserPermissionFilterInput!]
  or: [UserPermissionFilterInput!]
  userId: ComparableInt64OperationFilterInput
  user: UseruseruserFilterInput
  permissionId: ComparableInt64OperationFilterInput
  permission: PermissionFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
}


"""Subscriber list scales associated with a service plan"""
input ServicePlanScaleFilterInput {
  and: [ServicePlanScaleFilterInput!]
  or: [ServicePlanScaleFilterInput!]
  """Unique service plan scale ID"""
  id: ComparableInt64OperationFilterInput
  """Minimum limit of scale"""
  minLimit: ComparableInt32OperationFilterInput
  """Maximum limit of scale"""
  maxLimit: ComparableInt32OperationFilterInput
  """Scale fee"""
  fee: ComparableDoubleOperationFilterInput
}


"""Service plan credit blocks available for purchase"""
input ServicePlanCreditFilterInput {
  and: [ServicePlanCreditFilterInput!]
  or: [ServicePlanCreditFilterInput!]
  """Unique credit block ID"""
  id: ComparableInt64OperationFilterInput
  """Number of credits in block"""
  qty: ComparableDoubleOperationFilterInput
  """Fee to purchase block of credits"""
  fee: ComparableDoubleOperationFilterInput
}


"""Service plan feature used to configure Tarvent"""
input ServicePlanFeatureFilterInput {
  and: [ServicePlanFeatureFilterInput!]
  or: [ServicePlanFeatureFilterInput!]
  """Name of feature"""
  name: StringOperationFilterInput
  """Description of feature"""
  description: StringOperationFilterInput
  """Feature limit if applicable"""
  limit: ComparableInt64OperationFilterInput
  """Description of limit if applicable"""
  limitDescription: StringOperationFilterInput
  """Internal use only"""
  _do: ComparableInt32OperationFilterInput
}


input CategoryTypeOperationFilterInput {
  eq: CategoryType
  neq: CategoryType
  in: [CategoryType!]
  nin: [CategoryType!]
}


input TemplateHistoryFilterInput {
  and: [TemplateHistoryFilterInput!]
  or: [TemplateHistoryFilterInput!]
  version: ComparableDoubleOperationFilterInput
  lastModifiedUtc: ComparableDateTimeOperationFilterInput
}


input LabelTranslationsFilterInput {
  and: [LabelTranslationsFilterInput!]
  or: [LabelTranslationsFilterInput!]
  defaultValue: StringOperationFilterInput
  translations: ListFilterInputTypeOfTranslationFilterInput
}


input ConditionFilterInput {
  and: [ConditionFilterInput!]
  or: [ConditionFilterInput!]
  fieldName: StringOperationFilterInput
  dataFieldId: ComparableNullableOfInt64OperationFilterInput
  operator: OperatorOperationFilterInput
  value: StringOperationFilterInput
  ignoreYear: BooleanOperationFilterInput
}


input LabelTranslationsSortInput {
  defaultValue: SortEnumType
}


input ContactBehaviorOperationFilterInput {
  eq: ContactBehavior
  neq: ContactBehavior
  in: [ContactBehavior!]
  nin: [ContactBehavior!]
}


input ColumnFilterInput {
  and: [ColumnFilterInput!]
  or: [ColumnFilterInput!]
  index: ComparableInt32OperationFilterInput
  skip: BooleanOperationFilterInput
  custom: BooleanOperationFilterInput
  fieldName: StringOperationFilterInput
  dataFieldId: ComparableNullableOfInt64OperationFilterInput
}


input ConditionGroupOperatorOperationFilterInput {
  eq: ConditionGroupOperator
  neq: ConditionGroupOperator
  in: [ConditionGroupOperator!]
  nin: [ConditionGroupOperator!]
}


input ListFilterInputTypeOfRuleGroupFilterInput {
  all: ConditionGroupFilterInput
  none: ConditionGroupFilterInput
  some: ConditionGroupFilterInput
  any: Boolean
}


input SubmissionAnswerFilterInput {
  and: [SubmissionAnswerFilterInput!]
  or: [SubmissionAnswerFilterInput!]
  questionId: ComparableInt64OperationFilterInput
  answerText: StringOperationFilterInput
}


input VersionFilterInput {
  and: [VersionFilterInput!]
  or: [VersionFilterInput!]
  id: ComparableDoubleOperationFilterInput
  lastModifiedUtc: ComparableDateTimeOperationFilterInput
}


input CampaignContentInfoFilterInput {
  and: [CampaignContentInfoFilterInput!]
  or: [CampaignContentInfoFilterInput!]
  id: ComparableInt64OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  validStoryImage: BooleanOperationFilterInput
  validStoryTitle: BooleanOperationFilterInput
  validStoryDescription: BooleanOperationFilterInput
  validContent: BooleanOperationFilterInput
  validLinks: BooleanOperationFilterInput
  validContactInformation: BooleanOperationFilterInput
  validUnsubscribeLink: BooleanOperationFilterInput
}


input ProfileFieldFilterInput {
  and: [ProfileFieldFilterInput!]
  or: [ProfileFieldFilterInput!]
  id: ComparableInt64OperationFilterInput
  stringValue: StringOperationFilterInput
  dateTimeValue: ComparableNullableOfDateTimeOperationFilterInput
  numberValue: ComparableNullableOfDecimalOperationFilterInput
  dataFieldId: ComparableInt64OperationFilterInput
  dataField: DataFieldFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input TransactionMetadataFilterInput {
  and: [TransactionMetadataFilterInput!]
  or: [TransactionMetadataFilterInput!]
  name: StringOperationFilterInput
  value: StringOperationFilterInput
}


input TransactionHeaderFilterInput {
  and: [TransactionHeaderFilterInput!]
  or: [TransactionHeaderFilterInput!]
  name: StringOperationFilterInput
  value: StringOperationFilterInput
}


input TransactionLinkFilterInput {
  and: [TransactionLinkFilterInput!]
  or: [TransactionLinkFilterInput!]
  id: ComparableInt64OperationFilterInput
  linkUri: StringOperationFilterInput
  linkName: StringOperationFilterInput
}


input ComparableByteOperationFilterInput {
  eq: Byte
  neq: Byte
  in: [Byte!]
  nin: [Byte!]
  gt: Byte
  ngt: Byte
  gte: Byte
  ngte: Byte
  lt: Byte
  nlt: Byte
  lte: Byte
  nlte: Byte
}


input JourneyNodeNotificationSortInput {
  settings: JourneyNodeNoticificationSettingsSortInput
  header: JourneyNodeNoticificationHeaderSortInput
  content: JourneyNodeNoticificationContentSortInput
}


input DeliveryWindowSortInput {
  sendImmediate: SortEnumType
  timeUtc: SortEnumType
  weekDays: SortEnumType
  timeJumper: SortEnumType
}


input SiteNotificationSortInput {
  title: SortEnumType
  messageHtml: SortEnumType
}


input SiteNotificationSettingsSortInput {
  displayType: SortEnumType
  positionX: SortEnumType
  positionY: SortEnumType
  animationType: SortEnumType
  buttonType: SortEnumType
  buttonText: SortEnumType
  buttonPosition: SortEnumType
  iconUrl: SortEnumType
  icon: SortEnumType
  iconColor: SortEnumType
  buttonColor: SortEnumType
}


input JourneyNodeEventSortInput {
  type: SortEnumType
  campaignType: SortEnumType
  transactionType: SortEnumType
  audienceType: SortEnumType
  ecommerceType: SortEnumType
  formType: SortEnumType
  pageType: SortEnumType
  webPageType: SortEnumType
  linkScope: SortEnumType
  matchPattern: SortEnumType
  sharedOn: SortEnumType
  fieldName: SortEnumType
  operator: SortEnumType
  value: SortEnumType
  ignoreYear: SortEnumType
  customEventKey: SortEnumType
  storeId: SortEnumType
  productOperator: SortEnumType
  categoryOperator: SortEnumType
  orderValue: SortEnumType
  orderOperator: SortEnumType
  questionId: SortEnumType
  visitType: SortEnumType
  siteVisitType: SortEnumType
  ctaPerformed: SortEnumType
  minChangeCount: SortEnumType
  formQuestionId: SortEnumType
  rssCheckType: SortEnumType
}


input SubscriberListSortInput {
  id: SortEnumType
  name: SortEnumType
  company: SortEnumType
  streetAddress: SortEnumType
  streetAddress2: SortEnumType
  addressLocality: SortEnumType
  addressRegion: SortEnumType
  postalCode: SortEnumType
  addressCountry: SortEnumType
  phone: SortEnumType
  website: SortEnumType
  defaultFromEmail: SortEnumType
  defaultFromText: SortEnumType
  requireDoubleOptIn: SortEnumType
  customKeyFieldId: SortEnumType
  totalSubscribers: SortEnumType
  totalActiveSubscribers: SortEnumType
  totalUnconfirmedSubscribers: SortEnumType
  totalUndeliverableSubscribers: SortEnumType
  totalUnsubscribedSubscribers: SortEnumType
  totalComplaintSubscribers: SortEnumType
  totalScrubbedSubscribers: SortEnumType
  gdprTitle: SortEnumType
  gdprDescription: SortEnumType
  gdprLegalTerms: SortEnumType
  doubleOptInFromName: SortEnumType
  doubleOptInFromEmail: EmailSortInput
  doubleOptInSubject: SortEnumType
  bounceDomainId: SortEnumType
  bounceDomain: AccountDomainSortInput
  lastStatRecalcUtc: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  lastModifiedUtc: SortEnumType
  modifiedBy: SortEnumType
}


input JourneyNodeNotificationFilterInput {
  and: [JourneyNodeNotificationFilterInput!]
  or: [JourneyNodeNotificationFilterInput!]
  settings: JourneyNodeNoticificationSettingsFilterInput
  header: JourneyNodeNoticificationHeaderFilterInput
  content: JourneyNodeNoticificationContentFilterInput
  variables: ListFilterInputTypeOfJourneyNameValueFilterInput
  recipients: ListFilterInputTypeOfJourneyNodeNoticificationRecipientFilterInput
}


input DeliveryWindowFilterInput {
  and: [DeliveryWindowFilterInput!]
  or: [DeliveryWindowFilterInput!]
  sendImmediate: BooleanOperationFilterInput
  timeUtc: ComparableNullableOfDateTimeOperationFilterInput
  weekDays: StringOperationFilterInput
  timeJumper: BooleanOperationFilterInput
}


input SiteNotificationFilterInput {
  and: [SiteNotificationFilterInput!]
  or: [SiteNotificationFilterInput!]
  title: StringOperationFilterInput
  messageHtml: StringOperationFilterInput
}


input SiteNotificationSettingsFilterInput {
  and: [SiteNotificationSettingsFilterInput!]
  or: [SiteNotificationSettingsFilterInput!]
  tags: ListStringOperationFilterInput
  displayType: NullableOfDisplayTypeOperationFilterInput
  positionX: NullableOfPositionXOperationFilterInput
  positionY: NullableOfPositionYOperationFilterInput
  animationType: NullableOfAnimationTypeOperationFilterInput
  buttonType: NullableOfButtonTypeOperationFilterInput
  buttonText: StringOperationFilterInput
  buttonPosition: NullableOfButtonPositionOperationFilterInput
  iconUrl: StringOperationFilterInput
  icon: NullableOfIconTypeOperationFilterInput
  iconColor: StringOperationFilterInput
  buttonColor: StringOperationFilterInput
}


input NullableOfActionOperatorOperationFilterInput {
  eq: ActionOperator
  neq: ActionOperator
  in: [ActionOperator]
  nin: [ActionOperator]
}


input NullableOfJourneyNodeScopeOperationFilterInput {
  eq: JourneyNodeScope
  neq: JourneyNodeScope
  in: [JourneyNodeScope]
  nin: [JourneyNodeScope]
}


input JourneyNodeEventFilterInput {
  and: [JourneyNodeEventFilterInput!]
  or: [JourneyNodeEventFilterInput!]
  type: NullableOfEventTypeOperationFilterInput
  campaignType: NullableOfTriggerCampaignEventTypeOperationFilterInput
  transactionType: NullableOfTriggerTransactionEventTypeOperationFilterInput
  audienceType: NullableOfTriggerAudienceEventTypeOperationFilterInput
  ecommerceType: NullableOfTriggerEcommerceEventTypeOperationFilterInput
  formType: NullableOfTriggerFormEventTypeOperationFilterInput
  pageType: NullableOfTriggerPageEventTypeOperationFilterInput
  webPageType: NullableOfTriggerWebPageEventTypeOperationFilterInput
  linkScope: StringOperationFilterInput
  matchPattern: StringOperationFilterInput
  deviceTypes: ListDeviceTypeOperationFilterInput
  sharedOn: NullableOfSocialPlatformOperationFilterInput
  fieldName: StringOperationFilterInput
  operator: NullableOfOperatorOperationFilterInput
  value: StringOperationFilterInput
  ignoreYear: BooleanOperationFilterInput
  customEventKey: ComparableNullableOfInt64OperationFilterInput
  storeId: StringOperationFilterInput
  products: ListStringOperationFilterInput
  productOperator: NullableOfTriggerEcommerceProductOperatorOperationFilterInput
  categories: ListStringOperationFilterInput
  categoryOperator: NullableOfTriggerEcommerceCategoryOperatorOperationFilterInput
  orderValue: ComparableNullableOfDoubleOperationFilterInput
  orderOperator: NullableOfTriggerEcommerceOrderOperatorOperationFilterInput
  questionId: ComparableNullableOfInt64OperationFilterInput
  visitType: NullableOfWebPageVisitTypeOperationFilterInput
  siteVisitType: NullableOfWebPageVisitTypeOperationFilterInput
  ctaPerformed: BooleanOperationFilterInput
  minChangeCount: ComparableNullableOfInt32OperationFilterInput
  formQuestionId: ComparableNullableOfInt64OperationFilterInput
  rssCheckType: NullableOfTriggerRssCheckTypeOperationFilterInput
}


input MvGoalOperationFilterInput {
  eq: MvGoal
  neq: MvGoal
  in: [MvGoal!]
  nin: [MvGoal!]
}


input ListFilterInputTypeOfNameValueFilterInput {
  all: NameValueFilterInput
  none: NameValueFilterInput
  some: NameValueFilterInput
  any: Boolean
}


input ListFilterInputTypeOfCampaignFromFilterInput {
  all: CampaignFromFilterInput
  none: CampaignFromFilterInput
  some: CampaignFromFilterInput
  any: Boolean
}


input ListFilterInputTypeOfCampaignSubjectFilterInput {
  all: CampaignSubjectFilterInput
  none: CampaignSubjectFilterInput
  some: CampaignSubjectFilterInput
  any: Boolean
}


input ListFilterInputTypeOfCampaignVariationContentFilterInput {
  all: CampaignVariationContentFilterInput
  none: CampaignVariationContentFilterInput
  some: CampaignVariationContentFilterInput
  any: Boolean
}


input NullableOfTriggerRssCheckTypeOperationFilterInput {
  eq: TriggerRssCheckType
  neq: TriggerRssCheckType
  in: [TriggerRssCheckType]
  nin: [TriggerRssCheckType]
}


input SubscriberListFilterInput {
  and: [SubscriberListFilterInput!]
  or: [SubscriberListFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  company: StringOperationFilterInput
  streetAddress: StringOperationFilterInput
  streetAddress2: StringOperationFilterInput
  addressLocality: StringOperationFilterInput
  addressRegion: StringOperationFilterInput
  postalCode: StringOperationFilterInput
  addressCountry: StringOperationFilterInput
  phone: StringOperationFilterInput
  website: StringOperationFilterInput
  defaultFromEmail: StringOperationFilterInput
  defaultFromText: StringOperationFilterInput
  requireDoubleOptIn: BooleanOperationFilterInput
  customKeyFieldId: ComparableNullableOfInt64OperationFilterInput
  keyFields: ListStringOperationFilterInput
  totalSubscribers: ComparableInt32OperationFilterInput
  totalActiveSubscribers: ComparableInt32OperationFilterInput
  totalUnconfirmedSubscribers: ComparableInt32OperationFilterInput
  totalUndeliverableSubscribers: ComparableInt32OperationFilterInput
  totalUnsubscribedSubscribers: ComparableInt32OperationFilterInput
  totalComplaintSubscribers: ComparableInt32OperationFilterInput
  totalScrubbedSubscribers: ComparableInt32OperationFilterInput
  gdprTitle: StringOperationFilterInput
  gdprDescription: StringOperationFilterInput
  gdprLegalTerms: StringOperationFilterInput
  doubleOptInFromName: StringOperationFilterInput
  doubleOptInFromEmail: EmailFilterInput
  doubleOptInSubject: StringOperationFilterInput
  bounceDomainId: ComparableNullableOfInt64OperationFilterInput
  bounceDomain: AccountDomainFilterInput
  dataFields: ListFilterInputTypeOfDataFieldFilterInput
  groups: ListFilterInputTypeOfGroupFilterInput
  contacts: ListFilterInputTypeOfSubscriberFilterInput
  imports: ListFilterInputTypeOfImportFilterInput
  exports: ListFilterInputTypeOfExportFilterInput
  tags: ListFilterInputTypeOfSubscriberListTagFilterInput
  datafieldCategories: ListFilterInputTypeOfDatafieldCategoryFilterInput
  campaigns: ListFilterInputTypeOfCampaignFilterInput
  """Collection of journeys"""
  journeys: ListFilterInputTypeOfJourneyFilterInput
  lastStatRecalcUtc: ComparableDateTimeOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  lastModifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input ListFilterInputTypeOfCampaignTagFilterInput {
  all: CampaignTagFilterInput
  none: CampaignTagFilterInput
  some: CampaignTagFilterInput
  any: Boolean
}


input ListFilterInputTypeOfCampaignAudienceFilterFilterInput {
  all: CampaignAudienceFilterFilterInput
  none: CampaignAudienceFilterFilterInput
  some: CampaignAudienceFilterFilterInput
  any: Boolean
}


input ListFilterInputTypeOfCampaignCombinationFilterInput {
  all: CampaignCombinationFilterInput
  none: CampaignCombinationFilterInput
  some: CampaignCombinationFilterInput
  any: Boolean
}


input FlowPathFilterInput {
  and: [FlowPathFilterInput!]
  or: [FlowPathFilterInput!]
  id: StringOperationFilterInput
  name: StringOperationFilterInput
  nextNodeId: StringOperationFilterInput
  """Used for FlowRandomSplit"""
  percentage: ComparableNullableOfInt32OperationFilterInput
  """Used for FlowDecisionSplit"""
  filter: ConditionGroupFilterInput
  """Used for FlowEngagementSplit"""
  engaged: BooleanOperationFilterInput
  """Used for FlowDecisionSplit"""
  isDefault: BooleanOperationFilterInput
  isDeleted: BooleanOperationFilterInput
}


input WebhookEventFilterInput {
  and: [WebhookEventFilterInput!]
  or: [WebhookEventFilterInput!]
  entityType: NullableOfEntityTypeOperationFilterInput
  eventType: EventTypeOperationFilterInput
}


input IEqualityComparerOfStringFilterInput {
  and: [IEqualityComparerOfStringFilterInput!]
  or: [IEqualityComparerOfStringFilterInput!]
}


input CustomReportJobFilterInput {
  and: [CustomReportJobFilterInput!]
  or: [CustomReportJobFilterInput!]
  id: ComparableInt64OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  deletedUtc: ComparableNullableOfDateTimeOperationFilterInput
  downloadUrl: StringOperationFilterInput
  status: CustomReportJobStatusOperationFilterInput
}


input ItemTierFilterInput {
  and: [ItemTierFilterInput!]
  or: [ItemTierFilterInput!]
  minLimit: ComparableInt32OperationFilterInput
  maxLimit: ComparableInt32OperationFilterInput
  fee: ComparableDoubleOperationFilterInput
}


"""Plan feature used to configure Tarvent"""
input ItemFeatureFilterInput {
  and: [ItemFeatureFilterInput!]
  or: [ItemFeatureFilterInput!]
  """Unique feature ID"""
  id: StringOperationFilterInput
  """Name of feature"""
  name: StringOperationFilterInput
  """Description of feature"""
  description: StringOperationFilterInput
  """Feature limit if applicable"""
  limit: ComparableInt64OperationFilterInput
}


input ItemAddOnFilterInput {
  and: [ItemAddOnFilterInput!]
  or: [ItemAddOnFilterInput!]
  id: StringOperationFilterInput
  type: AddOnTypeOperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  freeCreditsAmt: ComparableInt32OperationFilterInput
  lifeTimeInd: BooleanOperationFilterInput
  allowOveragesInd: BooleanOperationFilterInput
  """Fee information for add on."""
  fees: ItemAddOnFeesFilterInput
}


input ListEmailEventTypeOperationFilterInput {
  all: EmailEventTypeOperationFilterInput
  none: EmailEventTypeOperationFilterInput
  some: EmailEventTypeOperationFilterInput
  any: Boolean
}


input ComparableGuidOperationFilterInput {
  eq: UUID
  neq: UUID
  in: [UUID!]
  nin: [UUID!]
  gt: UUID
  ngt: UUID
  gte: UUID
  ngte: UUID
  lt: UUID
  nlt: UUID
  lte: UUID
  nlte: UUID
}


"""Add-on detail"""
input AccountPlanAddOnFilterInput {
  and: [AccountPlanAddOnFilterInput!]
  or: [AccountPlanAddOnFilterInput!]
  """Unique add-on id"""
  id: StringOperationFilterInput
  """Name of add-on"""
  name: StringOperationFilterInput
  """Type of add-on"""
  type: AddOnTypeOperationFilterInput
  """Indicates if this add-on has free credits"""
  freeCreditsInd: BooleanOperationFilterInput
  """Add-on pending change type. Will be null if there is no change."""
  pendingChangeType: NullableOfAddOnChangeTypeOperationFilterInput
  """Add-on credits."""
  credits: ComparableInt32OperationFilterInput
  """Add-on credit price."""
  creditPrice: ComparableDoubleOperationFilterInput
  """Only set for Transaction Email add-on"""
  storageDays: ComparableInt32OperationFilterInput
  """Only set for Transaction Email add-on"""
  storageDaysPrice: ComparableDoubleOperationFilterInput
  """Total price of add-on"""
  totalPrice: ComparableDoubleOperationFilterInput
  """
  Overage fee of add-on based on quantity of credits used (updated daily).
  """
  overageFee: ComparableDoubleOperationFilterInput
  """Quantity of credits used (updated daily)."""
  qtyUsed: ComparableInt32OperationFilterInput
}


input AddOnTypeOperationFilterInput {
  eq: AddOnType
  neq: AddOnType
  in: [AddOnType!]
  nin: [AddOnType!]
}


input UseruseruserFilterInput {
  and: [UseruseruserFilterInput!]
  or: [UseruseruserFilterInput!]
  id: ComparableInt64OperationFilterInput
  """Status of user"""
  status: UserStatusOperationFilterInput
  """SSO user ID"""
  ssoId: StringOperationFilterInput
  """Identity provider"""
  identityProvider: UserIdentityProviderOperationFilterInput
  """First name"""
  firstName: StringOperationFilterInput
  """Last name"""
  lastName: StringOperationFilterInput
  """
  Optional business phone number used by support to contact user if needed
  """
  businessPhone: StringOperationFilterInput
  """Email address used for notifications"""
  emailAddr: EmailFilterInput
  """Indicates if user is enrolled in Affiliate program"""
  isAffiliate: BooleanOperationFilterInput
  """Indicates if multi-factor authentication is enabled"""
  mfaEnabled: BooleanOperationFilterInput
  """Date/time the user was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the user"""
  createdBy: StringOperationFilterInput
  """Date/time the user was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the user"""
  modifiedBy: StringOperationFilterInput
  """Collection of accounts associated with the user"""
  accounts: ListFilterInputTypeOfUserAccountFilterInput
  """Collection of user invites created by the user"""
  userInvites: ListFilterInputTypeOfUserInviteFilterInput
  """Collection of permissions"""
  permissions: ListFilterInputTypeOfUserPermissionFilterInput
  """Collection of fast facts"""
  fastFacts: ListFilterInputTypeOfUserFastFactFilterInput
}


input ListFilterInputTypeOfTranslationFilterInput {
  all: TranslationFilterInput
  none: TranslationFilterInput
  some: TranslationFilterInput
  any: Boolean
}


input OperatorOperationFilterInput {
  eq: Operator
  neq: Operator
  in: [Operator!]
  nin: [Operator!]
}


input JourneyNodeNoticificationSettingsSortInput {
  language: SortEnumType
  sendAtUtc: SortEnumType
  sendRepliesTo: SortEnumType
  sendBccTo: SortEnumType
  showRecipients: SortEnumType
  content: JourneyNodeNoticificationContentSettingsSortInput
  analytics: JourneyNodeNoticificationAnalyticsSortInput
  contactData: JourneyNodeNoticificationContactDataSettingsSortInput
}


input JourneyNodeNoticificationHeaderSortInput {
  subject: SortEnumType
  bounceDomain: SortEnumType
  from: JourneyNodeNoticificationBaseRecipientSortInput
  replyTo: JourneyNodeNoticificationBaseRecipientSortInput
}


input JourneyNodeNoticificationContentSortInput {
  contentHtml: SortEnumType
}


input JourneyNodeNoticificationSettingsFilterInput {
  and: [JourneyNodeNoticificationSettingsFilterInput!]
  or: [JourneyNodeNoticificationSettingsFilterInput!]
  language: StringOperationFilterInput
  sendAtUtc: ComparableNullableOfDateTimeOperationFilterInput
  sendRepliesTo: StringOperationFilterInput
  sendBccTo: StringOperationFilterInput
  showRecipients: BooleanOperationFilterInput
  content: JourneyNodeNoticificationContentSettingsFilterInput
  analytics: JourneyNodeNoticificationAnalyticsFilterInput
  contactData: JourneyNodeNoticificationContactDataSettingsFilterInput
}


input JourneyNodeNoticificationHeaderFilterInput {
  and: [JourneyNodeNoticificationHeaderFilterInput!]
  or: [JourneyNodeNoticificationHeaderFilterInput!]
  subject: StringOperationFilterInput
  bounceDomain: StringOperationFilterInput
  from: JourneyNodeNoticificationBaseRecipientFilterInput
  replyTo: JourneyNodeNoticificationBaseRecipientFilterInput
  customHeaders: ListFilterInputTypeOfJourneyNameValueFilterInput
}


input JourneyNodeNoticificationContentFilterInput {
  and: [JourneyNodeNoticificationContentFilterInput!]
  or: [JourneyNodeNoticificationContentFilterInput!]
  contentHtml: StringOperationFilterInput
}


input ListFilterInputTypeOfJourneyNameValueFilterInput {
  all: JourneyNameValueFilterInput
  none: JourneyNameValueFilterInput
  some: JourneyNameValueFilterInput
  any: Boolean
}


input ListFilterInputTypeOfJourneyNodeNoticificationRecipientFilterInput {
  all: JourneyNodeNoticificationRecipientFilterInput
  none: JourneyNodeNoticificationRecipientFilterInput
  some: JourneyNodeNoticificationRecipientFilterInput
  any: Boolean
}


input NullableOfDisplayTypeOperationFilterInput {
  eq: DisplayType
  neq: DisplayType
  in: [DisplayType]
  nin: [DisplayType]
}


input NullableOfPositionXOperationFilterInput {
  eq: PositionX
  neq: PositionX
  in: [PositionX]
  nin: [PositionX]
}


input NullableOfPositionYOperationFilterInput {
  eq: PositionY
  neq: PositionY
  in: [PositionY]
  nin: [PositionY]
}


input NullableOfAnimationTypeOperationFilterInput {
  eq: AnimationType
  neq: AnimationType
  in: [AnimationType]
  nin: [AnimationType]
}


input NullableOfButtonTypeOperationFilterInput {
  eq: ButtonType
  neq: ButtonType
  in: [ButtonType]
  nin: [ButtonType]
}


input NullableOfButtonPositionOperationFilterInput {
  eq: ButtonPosition
  neq: ButtonPosition
  in: [ButtonPosition]
  nin: [ButtonPosition]
}


input NullableOfIconTypeOperationFilterInput {
  eq: IconType
  neq: IconType
  in: [IconType]
  nin: [IconType]
}


input NullableOfEventTypeOperationFilterInput {
  eq: EventType
  neq: EventType
  in: [EventType]
  nin: [EventType]
}


input NullableOfTriggerCampaignEventTypeOperationFilterInput {
  eq: TriggerCampaignEventType
  neq: TriggerCampaignEventType
  in: [TriggerCampaignEventType]
  nin: [TriggerCampaignEventType]
}


input NullableOfTriggerTransactionEventTypeOperationFilterInput {
  eq: TriggerTransactionEventType
  neq: TriggerTransactionEventType
  in: [TriggerTransactionEventType]
  nin: [TriggerTransactionEventType]
}


input NullableOfTriggerAudienceEventTypeOperationFilterInput {
  eq: TriggerAudienceEventType
  neq: TriggerAudienceEventType
  in: [TriggerAudienceEventType]
  nin: [TriggerAudienceEventType]
}


input NullableOfTriggerEcommerceEventTypeOperationFilterInput {
  eq: TriggerEcommerceEventType
  neq: TriggerEcommerceEventType
  in: [TriggerEcommerceEventType]
  nin: [TriggerEcommerceEventType]
}


input NullableOfTriggerFormEventTypeOperationFilterInput {
  eq: TriggerFormEventType
  neq: TriggerFormEventType
  in: [TriggerFormEventType]
  nin: [TriggerFormEventType]
}


input NullableOfTriggerPageEventTypeOperationFilterInput {
  eq: TriggerPageEventType
  neq: TriggerPageEventType
  in: [TriggerPageEventType]
  nin: [TriggerPageEventType]
}


input NullableOfTriggerWebPageEventTypeOperationFilterInput {
  eq: TriggerWebPageEventType
  neq: TriggerWebPageEventType
  in: [TriggerWebPageEventType]
  nin: [TriggerWebPageEventType]
}


input ListDeviceTypeOperationFilterInput {
  all: DeviceTypeOperationFilterInput
  none: DeviceTypeOperationFilterInput
  some: DeviceTypeOperationFilterInput
  any: Boolean
}


input NullableOfSocialPlatformOperationFilterInput {
  eq: SocialPlatform
  neq: SocialPlatform
  in: [SocialPlatform]
  nin: [SocialPlatform]
}


input NullableOfOperatorOperationFilterInput {
  eq: Operator
  neq: Operator
  in: [Operator]
  nin: [Operator]
}


input NullableOfTriggerEcommerceProductOperatorOperationFilterInput {
  eq: TriggerEcommerceProductOperator
  neq: TriggerEcommerceProductOperator
  in: [TriggerEcommerceProductOperator]
  nin: [TriggerEcommerceProductOperator]
}


input NullableOfTriggerEcommerceCategoryOperatorOperationFilterInput {
  eq: TriggerEcommerceCategoryOperator
  neq: TriggerEcommerceCategoryOperator
  in: [TriggerEcommerceCategoryOperator]
  nin: [TriggerEcommerceCategoryOperator]
}


input NullableOfTriggerEcommerceOrderOperatorOperationFilterInput {
  eq: TriggerEcommerceOrderOperator
  neq: TriggerEcommerceOrderOperator
  in: [TriggerEcommerceOrderOperator]
  nin: [TriggerEcommerceOrderOperator]
}


input NullableOfWebPageVisitTypeOperationFilterInput {
  eq: WebPageVisitType
  neq: WebPageVisitType
  in: [WebPageVisitType]
  nin: [WebPageVisitType]
}


input NameValueFilterInput {
  and: [NameValueFilterInput!]
  or: [NameValueFilterInput!]
  name: StringOperationFilterInput
  value: StringOperationFilterInput
}


input CampaignFromFilterInput {
  and: [CampaignFromFilterInput!]
  or: [CampaignFromFilterInput!]
  nameNotEmpty: BooleanOperationFilterInput
  nameIsUnique: BooleanOperationFilterInput
  name: StringOperationFilterInput
  email: StringOperationFilterInput
}


input CampaignSubjectFilterInput {
  and: [CampaignSubjectFilterInput!]
  or: [CampaignSubjectFilterInput!]
  subjectNotEmpty: BooleanOperationFilterInput
  subjectValidWordCount: BooleanOperationFilterInput
  subjectValidEmojiCount: BooleanOperationFilterInput
  subjectValidPunctuation: BooleanOperationFilterInput
  subject: StringOperationFilterInput
  preheader: StringOperationFilterInput
}


input CampaignVariationContentFilterInput {
  and: [CampaignVariationContentFilterInput!]
  or: [CampaignVariationContentFilterInput!]
  id: StringOperationFilterInput
  thumbnailUrl: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  validStoryImage: BooleanOperationFilterInput
  validStoryTitle: BooleanOperationFilterInput
  validStoryDescription: BooleanOperationFilterInput
  validContent: BooleanOperationFilterInput
  validLinks: BooleanOperationFilterInput
  validContactInformation: BooleanOperationFilterInput
  validUnsubscribeLink: BooleanOperationFilterInput
  contentBodies: ListFilterInputTypeOfContentBodyFilterInput
  versions: ListFilterInputTypeOfHistoryFilterInput
}


input ListFilterInputTypeOfDataFieldFilterInput {
  all: DataFieldFilterInput
  none: DataFieldFilterInput
  some: DataFieldFilterInput
  any: Boolean
}


input ListFilterInputTypeOfGroupFilterInput {
  all: GroupFilterInput
  none: GroupFilterInput
  some: GroupFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubscriberFilterInput {
  all: SubscriberFilterInput
  none: SubscriberFilterInput
  some: SubscriberFilterInput
  any: Boolean
}


input ListFilterInputTypeOfImportFilterInput {
  all: ImportFilterInput
  none: ImportFilterInput
  some: ImportFilterInput
  any: Boolean
}


input ListFilterInputTypeOfExportFilterInput {
  all: ExportFilterInput
  none: ExportFilterInput
  some: ExportFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubscriberListTagFilterInput {
  all: AudienceTagFilterInput
  none: AudienceTagFilterInput
  some: AudienceTagFilterInput
  any: Boolean
}


input ListFilterInputTypeOfDatafieldCategoryFilterInput {
  all: DatafieldCategoryFilterInput
  none: DatafieldCategoryFilterInput
  some: DatafieldCategoryFilterInput
  any: Boolean
}


input ListFilterInputTypeOfCampaignFilterInput {
  all: CampaignFilterInput
  none: CampaignFilterInput
  some: CampaignFilterInput
  any: Boolean
}


input ListFilterInputTypeOfJourneyFilterInput {
  all: JourneyFilterInput
  none: JourneyFilterInput
  some: JourneyFilterInput
  any: Boolean
}


input CampaignTagFilterInput {
  and: [CampaignTagFilterInput!]
  or: [CampaignTagFilterInput!]
  tagHash: ListComparableByteOperationFilterInput
  tag: OldTagFilterInput
  campaignId: ComparableInt64OperationFilterInput
  campaign: CampaignFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input CampaignAudienceFilterFilterInput {
  and: [CampaignAudienceFilterFilterInput!]
  or: [CampaignAudienceFilterFilterInput!]
  group: GroupFilterInput
}


input CampaignCombinationFilterInput {
  and: [CampaignCombinationFilterInput!]
  or: [CampaignCombinationFilterInput!]
  id: ComparableInt64OperationFilterInput
  fromId: ComparableInt32OperationFilterInput
  subjectId: ComparableInt32OperationFilterInput
  contentVariationId: ComparableInt32OperationFilterInput
  sentUtc: ComparableDateTimeOperationFilterInput
  totalContacts: ComparableInt32OperationFilterInput
  totalSent: ComparableInt32OperationFilterInput
  uniqueSuppressed: ComparableInt32OperationFilterInput
  uniqueHardBounce: ComparableInt32OperationFilterInput
  uniqueSoftBounce: ComparableInt32OperationFilterInput
  totalBounce: ComparableInt32OperationFilterInput
  totalDelivered: ComparableInt32OperationFilterInput
  totalOpens: ComparableInt32OperationFilterInput
  uniqueOpens: ComparableInt32OperationFilterInput
  totalClicks: ComparableInt32OperationFilterInput
  uniqueClicks: ComparableInt32OperationFilterInput
  uniqueOptOut: ComparableInt32OperationFilterInput
  uniqueSpam: ComparableInt32OperationFilterInput
  totalReplies: ComparableInt32OperationFilterInput
  uniqueReplies: ComparableInt32OperationFilterInput
  totalProfile: ComparableInt32OperationFilterInput
  uniqueProfile: ComparableInt32OperationFilterInput
  totalSTF: ComparableInt32OperationFilterInput
  uniqueSTF: ComparableInt32OperationFilterInput
  totalSocialShare: ComparableInt32OperationFilterInput
  uniqueSocialShare: ComparableInt32OperationFilterInput
  totalSTFOptIn: ComparableInt32OperationFilterInput
  uniqueSTFOptIn: ComparableInt32OperationFilterInput
  senderReputation: ComparableDoubleOperationFilterInput
  engagementScore: ComparableDoubleOperationFilterInput
  statUtc: ComparableNullableOfDateTimeOperationFilterInput
  campaignId: ComparableInt64OperationFilterInput
  campaign: CampaignFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input CustomReportJobStatusOperationFilterInput {
  eq: CustomReportJobStatus
  neq: CustomReportJobStatus
  in: [CustomReportJobStatus!]
  nin: [CustomReportJobStatus!]
}


input ItemAddOnFeesFilterInput {
  and: [ItemAddOnFeesFilterInput!]
  or: [ItemAddOnFeesFilterInput!]
  unitOfMeasure: StringOperationFilterInput
  credits: ListFilterInputTypeOfItemAddOnFeeOptionFilterInput
  storageDays: ListFilterInputTypeOfItemAddOnStorageDaysFilterInput
}


input NullableOfAddOnChangeTypeOperationFilterInput {
  eq: AddOnChangeType
  neq: AddOnChangeType
  in: [AddOnChangeType]
  nin: [AddOnChangeType]
}


input UserStatusOperationFilterInput {
  eq: UserStatus
  neq: UserStatus
  in: [UserStatus!]
  nin: [UserStatus!]
}


input UserIdentityProviderOperationFilterInput {
  eq: UserIdentityProvider
  neq: UserIdentityProvider
  in: [UserIdentityProvider!]
  nin: [UserIdentityProvider!]
}


input ListFilterInputTypeOfUserAccountFilterInput {
  all: UserAccountFilterInput
  none: UserAccountFilterInput
  some: UserAccountFilterInput
  any: Boolean
}


input ListFilterInputTypeOfUserInviteFilterInput {
  all: InviteFilterInput
  none: InviteFilterInput
  some: InviteFilterInput
  any: Boolean
}


input ListFilterInputTypeOfUserFastFactFilterInput {
  all: UserFastFactFilterInput
  none: UserFastFactFilterInput
  some: UserFastFactFilterInput
  any: Boolean
}


input TranslationFilterInput {
  and: [TranslationFilterInput!]
  or: [TranslationFilterInput!]
  language: StringOperationFilterInput
  value: StringOperationFilterInput
}


input JourneyNodeNoticificationContentSettingsSortInput {
  autoGenerateText: SortEnumType
  autoGenerateHtml: SortEnumType
}


input JourneyNodeNoticificationAnalyticsSortInput {
  enable: SortEnumType
}


input JourneyNodeNoticificationContactDataSettingsSortInput {
  dataLocation: SortEnumType
  attachementFormat: SortEnumType
  zipAttachement: SortEnumType
  includeContactOriginalData: SortEnumType
  includeContactCurrentData: SortEnumType
}


input JourneyNodeNoticificationBaseRecipientSortInput {
  name: SortEnumType
  emailAddress: SortEnumType
}


input JourneyNodeNoticificationContentSettingsFilterInput {
  and: [JourneyNodeNoticificationContentSettingsFilterInput!]
  or: [JourneyNodeNoticificationContentSettingsFilterInput!]
  autoGenerateText: BooleanOperationFilterInput
  autoGenerateHtml: BooleanOperationFilterInput
}


input JourneyNodeNoticificationAnalyticsFilterInput {
  and: [JourneyNodeNoticificationAnalyticsFilterInput!]
  or: [JourneyNodeNoticificationAnalyticsFilterInput!]
  enable: BooleanOperationFilterInput
  parameters: ListFilterInputTypeOfJourneyNameValueFilterInput
}


input JourneyNodeNoticificationContactDataSettingsFilterInput {
  and: [JourneyNodeNoticificationContactDataSettingsFilterInput!]
  or: [JourneyNodeNoticificationContactDataSettingsFilterInput!]
  dataLocation: JourneyNodeNotificationContactDataLocationOperationFilterInput
  attachementFormat: NullableOfJourneyNodeNotificationAttachmentFormatOperationFilterInput
  zipAttachement: BooleanOperationFilterInput
  includeContactOriginalData: BooleanOperationFilterInput
  includeContactCurrentData: BooleanOperationFilterInput
}


input JourneyNodeNoticificationBaseRecipientFilterInput {
  and: [JourneyNodeNoticificationBaseRecipientFilterInput!]
  or: [JourneyNodeNoticificationBaseRecipientFilterInput!]
  name: StringOperationFilterInput
  emailAddress: StringOperationFilterInput
}


input JourneyNameValueFilterInput {
  and: [JourneyNameValueFilterInput!]
  or: [JourneyNameValueFilterInput!]
  name: StringOperationFilterInput
  value: StringOperationFilterInput
}


input JourneyNodeNoticificationRecipientFilterInput {
  and: [JourneyNodeNoticificationRecipientFilterInput!]
  or: [JourneyNodeNoticificationRecipientFilterInput!]
  name: StringOperationFilterInput
  emailAddress: StringOperationFilterInput
  type: NullableOfRecipientTypeOperationFilterInput
  variables: ListFilterInputTypeOfJourneyNameValueFilterInput
}


input DeviceTypeOperationFilterInput {
  eq: DeviceType
  neq: DeviceType
  in: [DeviceType!]
  nin: [DeviceType!]
}


input ListFilterInputTypeOfContentBodyFilterInput {
  all: ContentBodyFilterInput
  none: ContentBodyFilterInput
  some: ContentBodyFilterInput
  any: Boolean
}


input ListFilterInputTypeOfHistoryFilterInput {
  all: HistoryFilterInput
  none: HistoryFilterInput
  some: HistoryFilterInput
  any: Boolean
}


input GroupFilterInput {
  and: [GroupFilterInput!]
  or: [GroupFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  isPublic: BooleanOperationFilterInput
  isDynamic: BooleanOperationFilterInput
  criteria: ConditionGroupFilterInput
  totalContacts: ComparableInt32OperationFilterInput
  totalActiveContacts: ComparableInt32OperationFilterInput
  totalUnconfirmedContacts: ComparableInt32OperationFilterInput
  totalUndeliverableContacts: ComparableInt32OperationFilterInput
  totalUnsubscribedContacts: ComparableInt32OperationFilterInput
  totalComplaintContacts: ComparableInt32OperationFilterInput
  totalSuppressedContacts: ComparableInt32OperationFilterInput
  groupContacts: ListFilterInputTypeOfGroupSubscriberFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input SubscriberFilterInput {
  and: [SubscriberFilterInput!]
  or: [SubscriberFilterInput!]
  id: ComparableInt64OperationFilterInput
  referenceId: ComparableNullableOfInt64OperationFilterInput
  firstName: StringOperationFilterInput
  lastName: StringOperationFilterInput
  rating: ComparableNullableOfDoubleOperationFilterInput
  longitude: ComparableNullableOfDecimalOperationFilterInput
  latitude: ComparableNullableOfDecimalOperationFilterInput
  streetAddress: StringOperationFilterInput
  streetAddress2: StringOperationFilterInput
  addressLocality: StringOperationFilterInput
  addressRegion: StringOperationFilterInput
  postalCode: StringOperationFilterInput
  addressCountry: StringOperationFilterInput
  timeZone: StringOperationFilterInput
  language: StringOperationFilterInput
  sendFormat: SendFormatOperationFilterInput
  status: ContactStatusOperationFilterInput
  email: EmailFilterInput
  optInUtc: ComparableNullableOfDateTimeOperationFilterInput
  optInSource: OptInSourceOperationFilterInput
  optInIp: ListComparableByteOperationFilterInput
  confirmedUtc: ComparableNullableOfDateTimeOperationFilterInput
  confirmedIp: ListComparableByteOperationFilterInput
  optOutUtc: ComparableNullableOfDateTimeOperationFilterInput
  optOutSource: OptOutSourceOperationFilterInput
  optOutIp: ListComparableByteOperationFilterInput
  optOutReason: StringOperationFilterInput
  sbCount: ComparableInt32OperationFilterInput
  hbCount: ComparableInt32OperationFilterInput
  conversations: ListFilterInputTypeOfSubscriberConversationFilterInput
  notes: ListFilterInputTypeOfSubscriberNoteFilterInput
  groupSubscribers: ListFilterInputTypeOfGroupSubscriberFilterInput
  profileFields: ListFilterInputTypeOfProfileFieldFilterInput
  tags: ListFilterInputTypeOfSubscriberTagFilterInput
  events: ListFilterInputTypeOfSubscriberEventFilterInput
  formEvents: ListFilterInputTypeOfFormEventFilterInput
  campaigns: ListFilterInputTypeOfSubscriberCampaignFilterInput
  campaignEvents: ListFilterInputTypeOfCampaignEventFilterInput
  journeys: ListFilterInputTypeOfJourneySubscriberFilterInput
  journeyEvents: ListFilterInputTypeOfJourneySubscriberEventFilterInput
  journeyConversions: ListFilterInputTypeOfJourneyConversionSubscriberFilterInput
  journeyGoals: ListFilterInputTypeOfJourneyGoalSubscriberFilterInput
  siteNotifications: ListFilterInputTypeOfSubscriberSiteNotificationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


input AudienceTagFilterInput {
  and: [AudienceTagFilterInput!]
  or: [AudienceTagFilterInput!]
  tag: OldTagFilterInput
}


input JourneyFilterInput {
  and: [JourneyFilterInput!]
  or: [JourneyFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  startedUtc: ComparableNullableOfDateTimeOperationFilterInput
  lastResetUtc: ComparableNullableOfDateTimeOperationFilterInput
  status: JourneyStatusOperationFilterInput
  reEntryType: JourneyReEntryTypeOperationFilterInput
  defaultFromName: StringOperationFilterInput
  defaultFromEmail: EmailFilterInput
  totalActive: ComparableInt32OperationFilterInput
  totalEntries: ComparableInt32OperationFilterInput
  totalExits: ComparableInt32OperationFilterInput
  totalCompletes: ComparableInt32OperationFilterInput
  totalEmailsSent: ComparableInt32OperationFilterInput
  goalsComplete: ComparableInt32OperationFilterInput
  totalRevenue: ComparableDoubleOperationFilterInput
  totalEmailNodes: ComparableInt32OperationFilterInput
  totalNotificationEmailNodes: ComparableInt32OperationFilterInput
  totalSMSNodes: ComparableInt32OperationFilterInput
  totalSiteNotificationNodes: ComparableInt32OperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Mail domain for the journey."""
  mailDomain: AccountDomainFilterInput
  nodes: ListFilterInputTypeOfJourneyNodeFilterInput
  tags: ListFilterInputTypeOfJourneyTagFilterInput
  goals: ListFilterInputTypeOfJourneyGoalFilterInput
  conversions: ListFilterInputTypeOfJourneyConversionFilterInput
  subscribers: ListFilterInputTypeOfJourneySubscriberFilterInput
  subscriberEvents: ListFilterInputTypeOfJourneySubscriberEventFilterInput
  campaigns: ListFilterInputTypeOfCampaignFilterInput
  sMSCampaigns: ListFilterInputTypeOfSMSCampaignFilterInput
}


input OldTagFilterInput {
  and: [OldTagFilterInput!]
  or: [OldTagFilterInput!]
  tagName: StringOperationFilterInput
}


input ListFilterInputTypeOfItemAddOnFeeOptionFilterInput {
  all: ItemAddOnFeeOptionFilterInput
  none: ItemAddOnFeeOptionFilterInput
  some: ItemAddOnFeeOptionFilterInput
  any: Boolean
}


input ListFilterInputTypeOfItemAddOnStorageDaysFilterInput {
  all: ItemAddOnStorageDaysFilterInput
  none: ItemAddOnStorageDaysFilterInput
  some: ItemAddOnStorageDaysFilterInput
  any: Boolean
}


"""Represents tha association of an account and user"""
input UserAccountFilterInput {
  and: [UserAccountFilterInput!]
  or: [UserAccountFilterInput!]
  """ID of account"""
  accountId: ComparableInt64OperationFilterInput
  """Account"""
  account: GlobalAccountFilterInput
  """ID of user"""
  userId: ComparableInt64OperationFilterInput
  """User"""
  user: UseruseruserFilterInput
  """Date/time the user was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Date/time the user was invited"""
  invitedUtc: ComparableDateTimeOperationFilterInput
  """ID of user who created the invite"""
  invitedBy: StringOperationFilterInput
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits.
  """
  isPartner: BooleanOperationFilterInput
  """
  Indicates whether the user is a billing user for the account and should recieve billing communications.
  """
  isBillingContact: BooleanOperationFilterInput
  """
  Indicates whether the user should recieve account level communications.
  """
  isAccountContact: BooleanOperationFilterInput
  """Indicates the user account association is active"""
  isActive: BooleanOperationFilterInput
}


input UserFastFactFilterInput {
  and: [UserFastFactFilterInput!]
  or: [UserFastFactFilterInput!]
  fastFactKey: StringOperationFilterInput
  userId: ComparableInt64OperationFilterInput
  user: UseruseruserFilterInput
  isLiked: BooleanOperationFilterInput
}


input JourneyNodeNotificationContactDataLocationOperationFilterInput {
  eq: JourneyNodeNotificationContactDataLocation
  neq: JourneyNodeNotificationContactDataLocation
  in: [JourneyNodeNotificationContactDataLocation!]
  nin: [JourneyNodeNotificationContactDataLocation!]
}


input NullableOfJourneyNodeNotificationAttachmentFormatOperationFilterInput {
  eq: JourneyNodeNotificationAttachmentFormat
  neq: JourneyNodeNotificationAttachmentFormat
  in: [JourneyNodeNotificationAttachmentFormat]
  nin: [JourneyNodeNotificationAttachmentFormat]
}


input NullableOfRecipientTypeOperationFilterInput {
  eq: RecipientType
  neq: RecipientType
  in: [RecipientType]
  nin: [RecipientType]
}


input ContentBodyFilterInput {
  and: [ContentBodyFilterInput!]
  or: [ContentBodyFilterInput!]
  mimeType: MimeTypeOperationFilterInput
  content: StringOperationFilterInput
}


input ListFilterInputTypeOfGroupSubscriberFilterInput {
  all: GroupContactFilterInput
  none: GroupContactFilterInput
  some: GroupContactFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubscriberConversationFilterInput {
  all: ContactConversationFilterInput
  none: ContactConversationFilterInput
  some: ContactConversationFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubscriberNoteFilterInput {
  all: ContactNoteFilterInput
  none: ContactNoteFilterInput
  some: ContactNoteFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubscriberTagFilterInput {
  all: ContactTagFilterInput
  none: ContactTagFilterInput
  some: ContactTagFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubscriberEventFilterInput {
  all: ContactEventFilterInput
  none: ContactEventFilterInput
  some: ContactEventFilterInput
  any: Boolean
}


input ListFilterInputTypeOfFormEventFilterInput {
  all: FormEventFilterInput
  none: FormEventFilterInput
  some: FormEventFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubscriberCampaignFilterInput {
  all: SubscriberCampaignFilterInput
  none: SubscriberCampaignFilterInput
  some: SubscriberCampaignFilterInput
  any: Boolean
}


input ListFilterInputTypeOfCampaignEventFilterInput {
  all: CampaignEventFilterInput
  none: CampaignEventFilterInput
  some: CampaignEventFilterInput
  any: Boolean
}


input ListFilterInputTypeOfJourneySubscriberFilterInput {
  all: JourneySubscriberFilterInput
  none: JourneySubscriberFilterInput
  some: JourneySubscriberFilterInput
  any: Boolean
}


input ListFilterInputTypeOfJourneySubscriberEventFilterInput {
  all: JourneySubscriberEventFilterInput
  none: JourneySubscriberEventFilterInput
  some: JourneySubscriberEventFilterInput
  any: Boolean
}


input ListFilterInputTypeOfJourneyConversionSubscriberFilterInput {
  all: JourneyConversionSubscriberFilterInput
  none: JourneyConversionSubscriberFilterInput
  some: JourneyConversionSubscriberFilterInput
  any: Boolean
}


input ListFilterInputTypeOfJourneyGoalSubscriberFilterInput {
  all: JourneyGoalSubscriberFilterInput
  none: JourneyGoalSubscriberFilterInput
  some: JourneyGoalSubscriberFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubscriberSiteNotificationFilterInput {
  all: SubscriberSiteNotificationFilterInput
  none: SubscriberSiteNotificationFilterInput
  some: SubscriberSiteNotificationFilterInput
  any: Boolean
}


input JourneyStatusOperationFilterInput {
  eq: JourneyStatus
  neq: JourneyStatus
  in: [JourneyStatus!]
  nin: [JourneyStatus!]
}


input ListFilterInputTypeOfJourneyNodeFilterInput {
  all: JourneyNFilterInput
  none: JourneyNFilterInput
  some: JourneyNFilterInput
  any: Boolean
}


input ListFilterInputTypeOfJourneyTagFilterInput {
  all: JourneyTagFilterInput
  none: JourneyTagFilterInput
  some: JourneyTagFilterInput
  any: Boolean
}


input ListFilterInputTypeOfJourneyGoalFilterInput {
  all: JourneyGoalFilterInput
  none: JourneyGoalFilterInput
  some: JourneyGoalFilterInput
  any: Boolean
}


input ListFilterInputTypeOfJourneyConversionFilterInput {
  all: JourneyConversionFilterInput
  none: JourneyConversionFilterInput
  some: JourneyConversionFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSMSCampaignFilterInput {
  all: SMSCampaignFilterInput
  none: SMSCampaignFilterInput
  some: SMSCampaignFilterInput
  any: Boolean
}


input ItemAddOnFeeOptionFilterInput {
  and: [ItemAddOnFeeOptionFilterInput!]
  or: [ItemAddOnFeeOptionFilterInput!]
  quantity: ComparableInt32OperationFilterInput
  price: ComparableDoubleOperationFilterInput
  overageFee: ComparableDoubleOperationFilterInput
}


input ItemAddOnStorageDaysFilterInput {
  and: [ItemAddOnStorageDaysFilterInput!]
  or: [ItemAddOnStorageDaysFilterInput!]
  days: ComparableInt32OperationFilterInput
  feePct: ComparableDoubleOperationFilterInput
}


"""Unique billing account"""
input GlobalAccountFilterInput {
  and: [GlobalAccountFilterInput!]
  or: [GlobalAccountFilterInput!]
  """Unique global account ID"""
  id: ComparableInt64OperationFilterInput
  """Unique name of account"""
  accountName: StringOperationFilterInput
  """ID of user who owns the account"""
  accountOwnerId: ComparableInt64OperationFilterInput
  """Current account status"""
  status: AccountStatusDtoOperationFilterInput
  """Account status"""
  statusChangeUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Reason for the status change."""
  statusChangeReason: StringOperationFilterInput
  """Current account payment status"""
  paymentStatus: NullableOfPaymentStatusOperationFilterInput
  """Indicates whether account has been soft deleted"""
  isDeleted: BooleanOperationFilterInput
  """Reason account was deleted"""
  deleteReason: StringOperationFilterInput
  """Street address associated with the account."""
  streetAddress: StringOperationFilterInput
  """Street address 2 associated with the account."""
  streetAddress2: StringOperationFilterInput
  """Address locality associated with the account."""
  addressLocality: StringOperationFilterInput
  """Address region associated with the account."""
  addressRegion: StringOperationFilterInput
  """Postal code associated with the account."""
  postalCode: StringOperationFilterInput
  """Address country associated with the account."""
  addressCountry: StringOperationFilterInput
  """Unique alias for tracking urls"""
  trackingAlias: StringOperationFilterInput
  """Unique alias for pages urls (pages, surveys, and forms)"""
  pagesAlias: StringOperationFilterInput
  """Unique alias for Tarvent application"""
  applicationAlias: StringOperationFilterInput
  """URL of the business website."""
  website: UriFilterInput
  """Phone number associated with the account."""
  phone: StringOperationFilterInput
  """Please provide and feedback you feel we should know."""
  feedback: StringOperationFilterInput
  """
  Please rate our customer service using a scale of 1 to 5 where 1 is *very dissatisfied* and 5 is *very satisfied*.
  """
  customerRating: ComparableInt32OperationFilterInput
  """Allow overages for the account's email marketing plan."""
  emailMarketingAllowOverages: BooleanOperationFilterInput
  """Allow auto scaling for the account's email marketing plan."""
  emailMarketingAllowAutoScaling: BooleanOperationFilterInput
  """Account's contact max limit based on last usage report."""
  emailMarketingMaxLimit: ComparableInt32OperationFilterInput
  """Email marketing plan current billing period start date."""
  emailMarketingStartUtc: ComparableDateTimeOperationFilterInput
  """Email marketing plan current billing period end date."""
  emailMarketingEndUtc: ComparableDateTimeOperationFilterInput
  """Email marketing plan is annual"""
  emailMarketingIsAnnual: BooleanOperationFilterInput
  """Email marketing plan is trial"""
  emailMarketingIsTrial: BooleanOperationFilterInput
  emailMarketingDgScheduled: BooleanOperationFilterInput
  emailMarketingDgSuccessful: BooleanOperationFilterInput
  emailMarketingDgEligibilityStatus: BooleanOperationFilterInput
  """Current Chargebee subscription ID"""
  currentSubscriptionId: ComparableInt64OperationFilterInput
  """Current Chargebee plan name"""
  currentPlanName: StringOperationFilterInput
  """Current billing period start date/time"""
  currentBillingStartUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Current billing period end date/time"""
  currentBillingEndUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Next Chargebee subscription ID"""
  nextSubscriptionId: ComparableNullableOfInt64OperationFilterInput
  """Next Chargebee plan name"""
  nextPlanName: StringOperationFilterInput
  """Next billing period start date/time"""
  nextBillingStartUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Next billing period end date/time"""
  nextBillingEndUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Plan change indicator: 0 = downgrade, 1 = upgrade, null = no change"""
  planChangeInd: BooleanOperationFilterInput
  allowOverages: BooleanOperationFilterInput
  allowAutoScaling: BooleanOperationFilterInput
  """Payment gateway customer profile ID"""
  customerProfileId: StringOperationFilterInput
  """Accounting system account ID (currently Quickbooks Online)"""
  accountingId: StringOperationFilterInput
  """Date/time the global account was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the global account"""
  createdBy: StringOperationFilterInput
  """Date/time the global account was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the global account"""
  modifiedBy: StringOperationFilterInput
  """Collection of users"""
  users: ListFilterInputTypeOfUserAccountFilterInput
  """Collection of user invites"""
  userInvites: ListFilterInputTypeOfUserInviteFilterInput
  """Collection of plans"""
  plans: ListFilterInputTypeOfAccountServicePlanFilterInput
  """Collection of payment methods"""
  paymentMethods: ListFilterInputTypeOfAccountPaymentMethodFilterInput
  """Collection of invoices"""
  invoices: ListFilterInputTypeOfAccountInvoiceFilterInput
  """Collection of add-on"""
  addOns: ListFilterInputTypeOfAccountAddOnHistoryFilterInput
  """Collection of dedicated IPs"""
  ips: ListFilterInputTypeOfAccountIpFilterInput
  """Collection of credit balance changes"""
  creditBalances: ListFilterInputTypeOfAccountCreditBalanceFilterInput
  """Collection of discounts"""
  discounts: ListFilterInputTypeOfAccountDiscountFilterInput
  """Collection of fees"""
  fees: ListFilterInputTypeOfAccountFeeFilterInput
  """Collection of status changes"""
  statusActivities: ListFilterInputTypeOfAccountStatusActivityFilterInput
  """Collection of form path names"""
  formPathNames: ListFilterInputTypeOfAccountFormPathNameFilterInput
  """Collection of sending domains"""
  sendingDomains: ListFilterInputTypeOfAccountSendingDomainFilterInput
  """Collection of bounce domains"""
  bounceDomains: ListFilterInputTypeOfAccountBounceDomainFilterInput
  """Collection of Chargebee subscriptions (plans)"""
  subscriptions: ListFilterInputTypeOfAccountSubscriptionFilterInput
  """Collection of facts"""
  facts: ListFilterInputTypeOfAccountFactFilterInput
}


input MimeTypeOperationFilterInput {
  eq: MimeType
  neq: MimeType
  in: [MimeType!]
  nin: [MimeType!]
}


input GroupContactFilterInput {
  and: [GroupContactFilterInput!]
  or: [GroupContactFilterInput!]
  contact: SubscriberFilterInput
  groupId: ComparableInt64OperationFilterInput
  group: GroupFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input ContactTagFilterInput {
  and: [ContactTagFilterInput!]
  or: [ContactTagFilterInput!]
  tag: OldTagFilterInput
}


input ContactEventFilterInput {
  and: [ContactEventFilterInput!]
  or: [ContactEventFilterInput!]
  id: ComparableInt64OperationFilterInput
  eventUtc: ComparableDateTimeOperationFilterInput
  eventType: EventTypeOperationFilterInput
  customEventKey: StringOperationFilterInput
  entityId: ComparableNullableOfInt64OperationFilterInput
}


input FormEventFilterInput {
  and: [FormEventFilterInput!]
  or: [FormEventFilterInput!]
  id: ComparableInt64OperationFilterInput
  respondentId: ComparableInt64OperationFilterInput
  eventUtc: ComparableDateTimeOperationFilterInput
  eventType: EventTypeOperationFilterInput
  readSeconds: ComparableInt32OperationFilterInput
  isCta: BooleanOperationFilterInput
  ipAddress: ListComparableByteOperationFilterInput
  software: NullableOfSoftwareTypeOperationFilterInput
  os: NullableOfOperatingSystemTypeOperationFilterInput
  device: NullableOfDeviceTypeOperationFilterInput
  timeSpentMinutes: ComparableNullableOfDoubleOperationFilterInput
  pageId: ComparableInt64OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  Contact: SubscriberFilterInput
  form: FormFilterInput
}


input SubscriberCampaignFilterInput {
  and: [SubscriberCampaignFilterInput!]
  or: [SubscriberCampaignFilterInput!]
  subscriberId: ComparableInt64OperationFilterInput
  subscriber: SubscriberFilterInput
  campaignId: ComparableInt64OperationFilterInput
  campaign: CampaignFilterInput
  sent: ComparableInt32OperationFilterInput
  sentUtc: ComparableDateTimeOperationFilterInput
  delivered: ComparableInt32OperationFilterInput
  opened: ComparableInt32OperationFilterInput
  clicked: ComparableInt32OperationFilterInput
  providedFeedback: ComparableInt32OperationFilterInput
  providedRating: ComparableInt32OperationFilterInput
  viewedOnline: ComparableInt32OperationFilterInput
  socialShare: ComparableInt32OperationFilterInput
  forwardedToFriend: ComparableInt32OperationFilterInput
  printed: ComparableInt32OperationFilterInput
  complained: ComparableInt32OperationFilterInput
  unsubscribed: ComparableInt32OperationFilterInput
  soft: ComparableInt32OperationFilterInput
  hard: ComparableInt32OperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input CampaignEventFilterInput {
  and: [CampaignEventFilterInput!]
  or: [CampaignEventFilterInput!]
  id: ComparableInt64OperationFilterInput
  eventUtc: ComparableDateTimeOperationFilterInput
  eventType: EmailEventTypeOperationFilterInput
  emailDomain: StringOperationFilterInput
  readSeconds: ComparableNullableOfInt32OperationFilterInput
  ipAddress: ListComparableByteOperationFilterInput
  software: NullableOfSoftwareTypeOperationFilterInput
  os: NullableOfOperatingSystemTypeOperationFilterInput
  device: NullableOfDeviceTypeOperationFilterInput
  sharedOn: NullableOfSocialPlatformOperationFilterInput
  serverResponse: StringOperationFilterInput
  linkId: ComparableNullableOfInt64OperationFilterInput
  combinationId: ComparableNullableOfInt64OperationFilterInput
  subscriberId: ComparableNullableOfInt64OperationFilterInput
  subscriber: SubscriberFilterInput
  campaignId: ComparableInt64OperationFilterInput
  campaign: CampaignFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input JourneySubscriberFilterInput {
  and: [JourneySubscriberFilterInput!]
  or: [JourneySubscriberFilterInput!]
  id: ComparableInt64OperationFilterInput
  instanceId: StringOperationFilterInput
  status: JourneyContactStatusOperationFilterInput
  entryUtc: ComparableDateTimeOperationFilterInput
  entryEntityType: NullableOfEntityTypeOperationFilterInput
  entryEntityId: ComparableNullableOfInt64OperationFilterInput
  entrySubEntityId: ComparableNullableOfInt64OperationFilterInput
  entryEventType: NullableOfEventTypeOperationFilterInput
  entryNodeId: ComparableInt64OperationFilterInput
  exitUtc: ComparableNullableOfDateTimeOperationFilterInput
  exitNodeId: ComparableNullableOfInt64OperationFilterInput
  currentPreviousNodeId: ComparableNullableOfInt64OperationFilterInput
  currentNextNodeId: ComparableNullableOfInt64OperationFilterInput
  currentModifiedUtc: ComparableDateTimeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  subscriberId: ComparableInt64OperationFilterInput
  subscriber: SubscriberFilterInput
  journeyId: ComparableInt64OperationFilterInput
  journey: JourneyFilterInput
}


input JourneySubscriberEventFilterInput {
  and: [JourneySubscriberEventFilterInput!]
  or: [JourneySubscriberEventFilterInput!]
  id: ComparableInt64OperationFilterInput
  instanceId: StringOperationFilterInput
  subscriberId: ComparableInt64OperationFilterInput
  subscriber: SubscriberFilterInput
  journeyId: ComparableInt64OperationFilterInput
  journey: JourneyFilterInput
  nodeId: ComparableInt64OperationFilterInput
  previousNodeIds: ListComparableInt64OperationFilterInput
  nextNodeId: ComparableNullableOfInt64OperationFilterInput
  executed: BooleanOperationFilterInput
  skipped: BooleanOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  isDeleted: BooleanOperationFilterInput
}


input JourneyConversionSubscriberFilterInput {
  and: [JourneyConversionSubscriberFilterInput!]
  or: [JourneyConversionSubscriberFilterInput!]
  value: ComparableDoubleOperationFilterInput
  conversionId: ComparableInt64OperationFilterInput
  conversion: JourneyConversionFilterInput
  subscriberId: ComparableInt64OperationFilterInput
  subscriber: SubscriberFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input JourneyGoalSubscriberFilterInput {
  and: [JourneyGoalSubscriberFilterInput!]
  or: [JourneyGoalSubscriberFilterInput!]
  goalId: ComparableInt64OperationFilterInput
  goal: JourneyGoalFilterInput
  subscriberId: ComparableInt64OperationFilterInput
  subscriber: SubscriberFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input SubscriberSiteNotificationFilterInput {
  and: [SubscriberSiteNotificationFilterInput!]
  or: [SubscriberSiteNotificationFilterInput!]
  id: ComparableInt64OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  siteNotificationId: ComparableInt64OperationFilterInput
  siteNotification: JourneyNFilterInput
  subscriberId: ComparableInt64OperationFilterInput
  subscriber: SubscriberFilterInput
  isDeleted: BooleanOperationFilterInput
}


input JourneyNFilterInput {
  and: [JourneyNFilterInput!]
  or: [JourneyNFilterInput!]
  id: ComparableInt64OperationFilterInput
  originalNodeId: ComparableNullableOfInt64OperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  type: JourneyNodeTypeOperationFilterInput
  terminatorType: NullableOfTerminatorTypeOperationFilterInput
  key: StringOperationFilterInput
  dbIsConfigured: BooleanOperationFilterInput
  isConfigured: BooleanOperationFilterInput
  isDefault: BooleanOperationFilterInput
  processedUtc: ComparableNullableOfDateTimeOperationFilterInput
  configuration: JourneyNodeConfigurationFilterInput
  evaluated: ComparableInt32OperationFilterInput
  performed: ComparableInt32OperationFilterInput
  previousNodeIds: ListComparableInt64OperationFilterInput
  nextNodeId: ComparableNullableOfInt64OperationFilterInput
  nextNode: JourneyNFilterInput
  movedUtc: ComparableNullableOfDateTimeOperationFilterInput
  previousNextNodeId: ComparableNullableOfInt64OperationFilterInput
  createdBy: StringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  isDeleted: BooleanOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  campaignId: ComparableNullableOfInt64OperationFilterInput
  campaign: CampaignFilterInput
  journeyId: ComparableInt64OperationFilterInput
  journey: JourneyFilterInput
  nextNodes: ListFilterInputTypeOfJourneyNodeFilterInput
  siteNotificationSubscribers: ListFilterInputTypeOfSubscriberSiteNotificationFilterInput
  eventPayload: EventPayloadFilterInput
}


input JourneyTagFilterInput {
  and: [JourneyTagFilterInput!]
  or: [JourneyTagFilterInput!]
  tagHash: ListComparableByteOperationFilterInput
  tag: OldTagFilterInput
  journeyId: ComparableInt64OperationFilterInput
  journey: JourneyFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input AccountStatusDtoOperationFilterInput {
  eq: AccountStatusDto
  neq: AccountStatusDto
  in: [AccountStatusDto!]
  nin: [AccountStatusDto!]
}


input NullableOfPaymentStatusOperationFilterInput {
  eq: PaymentStatus
  neq: PaymentStatus
  in: [PaymentStatus]
  nin: [PaymentStatus]
}


input UriFilterInput {
  and: [UriFilterInput!]
  or: [UriFilterInput!]
  absolutePath: StringOperationFilterInput
  absoluteUri: StringOperationFilterInput
  localPath: StringOperationFilterInput
  authority: StringOperationFilterInput
  hostNameType: UriHostNameTypeOperationFilterInput
  isDefaultPort: BooleanOperationFilterInput
  isFile: BooleanOperationFilterInput
  isLoopback: BooleanOperationFilterInput
  pathAndQuery: StringOperationFilterInput
  segments: ListStringOperationFilterInput
  isUnc: BooleanOperationFilterInput
  host: StringOperationFilterInput
  port: ComparableInt32OperationFilterInput
  query: StringOperationFilterInput
  fragment: StringOperationFilterInput
  scheme: StringOperationFilterInput
  originalString: StringOperationFilterInput
  dnsSafeHost: StringOperationFilterInput
  idnHost: StringOperationFilterInput
  isAbsoluteUri: BooleanOperationFilterInput
  userEscaped: BooleanOperationFilterInput
  userInfo: StringOperationFilterInput
}


input ListFilterInputTypeOfAccountServicePlanFilterInput {
  all: AccountServicePlanFilterInput
  none: AccountServicePlanFilterInput
  some: AccountServicePlanFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountPaymentMethodFilterInput {
  all: AccountPaymentMethodFilterInput
  none: AccountPaymentMethodFilterInput
  some: AccountPaymentMethodFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountInvoiceFilterInput {
  all: AccountInvoice2FilterInput
  none: AccountInvoice2FilterInput
  some: AccountInvoice2FilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountAddOnHistoryFilterInput {
  all: AccountAddOnHistoryFilterInput
  none: AccountAddOnHistoryFilterInput
  some: AccountAddOnHistoryFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountIpFilterInput {
  all: AccountIpFilterInput
  none: AccountIpFilterInput
  some: AccountIpFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountCreditBalanceFilterInput {
  all: AccountCreditBalanceFilterInput
  none: AccountCreditBalanceFilterInput
  some: AccountCreditBalanceFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountDiscountFilterInput {
  all: AccountPlanDiscountFilterInput
  none: AccountPlanDiscountFilterInput
  some: AccountPlanDiscountFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountFeeFilterInput {
  all: AccountFeeFilterInput
  none: AccountFeeFilterInput
  some: AccountFeeFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountStatusActivityFilterInput {
  all: AccountStatusActivityFilterInput
  none: AccountStatusActivityFilterInput
  some: AccountStatusActivityFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountFormPathNameFilterInput {
  all: AccountFormPathNameFilterInput
  none: AccountFormPathNameFilterInput
  some: AccountFormPathNameFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountSendingDomainFilterInput {
  all: AccountSendingDomainFilterInput
  none: AccountSendingDomainFilterInput
  some: AccountSendingDomainFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountBounceDomainFilterInput {
  all: AccountBounceDomainFilterInput
  none: AccountBounceDomainFilterInput
  some: AccountBounceDomainFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountSubscriptionFilterInput {
  all: AccountSubscriptionFilterInput
  none: AccountSubscriptionFilterInput
  some: AccountSubscriptionFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountFactFilterInput {
  all: AccountFactFilterInput
  none: AccountFactFilterInput
  some: AccountFactFilterInput
  any: Boolean
}


input FormFilterInput {
  and: [FormFilterInput!]
  or: [FormFilterInput!]
  id: ComparableInt64OperationFilterInput
  name: StringOperationFilterInput
  pathName: StringOperationFilterInput
  title: StringOperationFilterInput
  description: StringOperationFilterInput
  metaDescription: StringOperationFilterInput
  metaKeywords: StringOperationFilterInput
  shareImageUrl: StringOperationFilterInput
  faviconUrl: StringOperationFilterInput
  scriptingBlockUrl: StringOperationFilterInput
  status: ValidStatusOperationFilterInput
  type: NullableOfFormTypeOperationFilterInput
  translations: TranslationsFilterInput
  startUtc: ComparableNullableOfDateTimeOperationFilterInput
  endUtc: ComparableNullableOfDateTimeOperationFilterInput
  isGdprEnabled: BooleanOperationFilterInput
  allowMultipleSubmissions: BooleanOperationFilterInput
  embeddedFormId: ComparableNullableOfInt64OperationFilterInput
  submitActionType: SubmitActionTypeOperationFilterInput
  submitActionMessage: StringOperationFilterInput
  submitActionGroupIds: ListComparableInt64OperationFilterInput
  submitActionTags: ListStringOperationFilterInput
  submitActionDiagContent: StringOperationFilterInput
  submitActionDiagIcon: NullableOfDialogIconTypeOperationFilterInput
  submitActionDiagIconColor: StringOperationFilterInput
  submitActionDiagIconUrl: StringOperationFilterInput
  submitActionDiagActionType: DialogButtonActionTypeOperationFilterInput
  submitActionDiagButtonText: StringOperationFilterInput
  submitActionDiagButtonUrl: StringOperationFilterInput
  submitActionDiagButtonColor: StringOperationFilterInput
  trackDomains: BooleanOperationFilterInput
  submitActionExternalUrl: StringOperationFilterInput
  submitActionSendConfEmail: BooleanOperationFilterInput
  submitActionConfEmailFromText: StringOperationFilterInput
  submitActionConfEmailFromEmail: EmailFilterInput
  submitActionConfEmailSubject: StringOperationFilterInput
  submitActionSendNotifEmail: BooleanOperationFilterInput
  submitActionNotifEmailAttachmentFormat: DataAttachmentFormatOperationFilterInput
  submitActionDupEmailType: DuplicateSubmissionActionTypeOperationFilterInput
  submitActionDupEmailMessageType: ErrorActionOperationFilterInput
  submitActionDupEmailMessage: StringOperationFilterInput
  submitActionDupEmailDiagContent: StringOperationFilterInput
  submitActionDupEmailDiagIcon: NullableOfDialogIconTypeOperationFilterInput
  submitActionDupEmailDiagIconColor: StringOperationFilterInput
  submitActionDupEmailDiagIconUrl: StringOperationFilterInput
  submitActionDupEmailDiagActionType: DialogButtonActionTypeOperationFilterInput
  submitActionDupEmailDiagButtonText: StringOperationFilterInput
  submitActionDupEmailDiagButtonUrl: StringOperationFilterInput
  submitActionDupEmailDiagButtonColor: StringOperationFilterInput
  submitActionDupEmailExternalUrl: StringOperationFilterInput
  submitActionMultiSubErrorActionType: NullableOfErrorActionTypeOperationFilterInput
  submitActionMultiSubErrorExternalUrl: StringOperationFilterInput
  availErrorActionType: NullableOfErrorActionTypeOperationFilterInput
  availErrorExternalUrl: StringOperationFilterInput
  ftfEmailFromName: StringOperationFilterInput
  ftfEmailFromEmail: EmailFilterInput
  ftfEmailSubject: StringOperationFilterInput
  totalVisits: ComparableInt32OperationFilterInput
  totalCompleteSubmits: ComparableInt32OperationFilterInput
  totalPartialSubmits: ComparableInt32OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  """
  Bounce domain for the form. Only used for surveys that are not associated with a audience.
  """
  bounceDomain: AccountDomainFilterInput
  notifications: ListFilterInputTypeOfNotificationFilterInput
  questions: ListFilterInputTypeOfFormQuestionFilterInput
  events: ListFilterInputTypeOfFormEventFilterInput
  tags: ListFilterInputTypeOfFormTagFilterInput
  links: ListFilterInputTypeOfFormLinkFilterInput
  respondents: ListFilterInputTypeOfSubmissionResponseFilterInput
}


input EventPayloadFilterInput {
  and: [EventPayloadFilterInput!]
  or: [EventPayloadFilterInput!]
  subject: SubjectFilterInput
  event: EventFilterInput
}


input UriHostNameTypeOperationFilterInput {
  eq: UriHostNameType
  neq: UriHostNameType
  in: [UriHostNameType!]
  nin: [UriHostNameType!]
}


"""
Account plan for a specific service type. Only one active plan per service type is allowed.
"""
input AccountServicePlanFilterInput {
  and: [AccountServicePlanFilterInput!]
  or: [AccountServicePlanFilterInput!]
  """Unique account plan ID"""
  id: ComparableInt64OperationFilterInput
  """
  Date/time that the trial plan will end at which time a new plan much be selected for the account to remain active.
  """
  trialEndUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Indicates whether account plan is active"""
  isActive: BooleanOperationFilterInput
  """Date/time the plan started"""
  startUtc: ComparableDateTimeOperationFilterInput
  """Start date/time of current billing period"""
  currentBillStartUtc: ComparableDateTimeOperationFilterInput
  """End date/time of current billing period"""
  currentBillEndUtc: ComparableDateTimeOperationFilterInput
  """Start date/time of next billing period"""
  nextBillUtc: ComparableDateTimeOperationFilterInput
  """Indicates whether the plan is Pay-As-You-Go"""
  isPrepay: BooleanOperationFilterInput
  """ID of next plan when downgrading plans"""
  nextPlanId: ComparableInt64OperationFilterInput
  """
  ID of credit block to be purchased when downgrading from a scale-based plan to credit-based plan
  """
  nextPlanCreditItemId: ComparableInt64OperationFilterInput
  """
  ID of credit block to automatically purchase when account credit balance is equal to or below *MinimumCredits*
  """
  autoRefillCreditItemId: ComparableInt64OperationFilterInput
  """
  Minimum credit balance that will trigger more credits to be automatically purchased
  """
  minimumCredits: ComparableDoubleOperationFilterInput
  """Date/time the service plan was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the service plan"""
  createdBy: StringOperationFilterInput
  """Date/time the service plan was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the service plan"""
  modifiedBy: StringOperationFilterInput
  """ID of the service plan"""
  servicePlanId: ComparableInt64OperationFilterInput
  """Service plan"""
  servicePlan: ServicePlanDtoFilterInput
  """ID of the account"""
  accountId: ComparableInt64OperationFilterInput
  """Account"""
  account: GlobalAccountFilterInput
}


"""
Method of payment saved to pay future invoices automatically. Please note that no sensitive credit card information is stored within Tarvent.
"""
input AccountPaymentMethodFilterInput {
  and: [AccountPaymentMethodFilterInput!]
  or: [AccountPaymentMethodFilterInput!]
  """Unique payment method ID"""
  id: ComparableInt64OperationFilterInput
  """Unique nickname of payment method"""
  nickname: StringOperationFilterInput
  """2 digit expiration month"""
  expMonth: ComparableInt32OperationFilterInput
  """4 digit expiration year"""
  expYear: ComparableInt32OperationFilterInput
  """
  Indicates whether payment method is the default method to be used to automatically pay invoices. Only one payment method can be the default.
  """
  isDefault: BooleanOperationFilterInput
  """Last 4 digits of credit card to assist in identifying payment method"""
  last4Digits: StringOperationFilterInput
  """Type of credit card"""
  cardNetwork: CreditCardNetworkOperationFilterInput
  """Date/time the payment method was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the payment method"""
  createdBy: StringOperationFilterInput
  """Date/time the payment method was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the payment method"""
  modifiedBy: StringOperationFilterInput
}


"""Represents services that have been billed to the account."""
input AccountInvoice2FilterInput {
  and: [AccountInvoice2FilterInput!]
  or: [AccountInvoice2FilterInput!]
  """Unique invoice ID"""
  id: ComparableInt64OperationFilterInput
  """Order/invoice ID"""
  orderNbr: StringOperationFilterInput
  """Amount being billed"""
  amount: ComparableDoubleOperationFilterInput
  """Total amount being billed"""
  totalAmount: ComparableDoubleOperationFilterInput
  """Status of invoice"""
  invoiceStatus: InvoiceStatusOperationFilterInput
  """Service period start date/time"""
  servicePeriodStartUtc: ComparableDateTimeOperationFilterInput
  """Service period end date/time"""
  servicePeriodEndUtc: ComparableDateTimeOperationFilterInput
  """Invoice due date/time"""
  dueUtc: ComparableDateTimeOperationFilterInput
  """Date/time the invoice was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the invoice"""
  createdBy: StringOperationFilterInput
  """Date/time the invoice was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the invoice"""
  modifiedBy: StringOperationFilterInput
  """
  Collection of line items detailing the specific services being invoiced for
  """
  lineItems: ListFilterInputTypeOfAccountInvoiceLineItemFilterInput
  """Collection of payment receipts for the invoice"""
  receipts: ListFilterInputTypeOfAccountReceiptFilterInput
}


input AccountAddOnHistoryFilterInput {
  and: [AccountAddOnHistoryFilterInput!]
  or: [AccountAddOnHistoryFilterInput!]
  id: ComparableInt64OperationFilterInput
  addOnType: AddOnTypeOperationFilterInput
  purchaseUtc: ComparableDateTimeOperationFilterInput
  purchaseInvoiceNbr: StringOperationFilterInput
  qtyPurchased: ComparableInt32OperationFilterInput
  qtyPrice: ComparableDoubleOperationFilterInput
  """Transaction Email add-on only."""
  storageDays: ComparableInt32OperationFilterInput
  storageDaysPrice: ComparableDoubleOperationFilterInput
  qtyUsed: ComparableInt32OperationFilterInput
  additionalFees: ComparableDoubleOperationFilterInput
  additionalFeesDscr: StringOperationFilterInput
  additionalFeesInvoiceNbr: StringOperationFilterInput
  doNotRenew: BooleanOperationFilterInput
  isCancelled: BooleanOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
}


"""Dedicated IP used to send transactional and/or marketing email"""
input AccountIpFilterInput {
  and: [AccountIpFilterInput!]
  or: [AccountIpFilterInput!]
  """Unique dedicated IP ID"""
  id: ComparableInt64OperationFilterInput
  """Unique name of dedicated IP"""
  name: StringOperationFilterInput
  """Date/time the dedicated IP was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the dedicated IP"""
  createdBy: StringOperationFilterInput
  """Date/time the dedicated IP was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the dedicated IP"""
  modifiedBy: StringOperationFilterInput
}


"""
Tracks the historical credit balance of an account plan that uses credits
"""
input AccountCreditBalanceFilterInput {
  and: [AccountCreditBalanceFilterInput!]
  or: [AccountCreditBalanceFilterInput!]
  """Unique plan credit balance ID"""
  id: ComparableInt64OperationFilterInput
  """Current credit balance"""
  balance: ComparableDoubleOperationFilterInput
  """Reason for balance increase/decrease"""
  reasonCode: StringOperationFilterInput
  """Value of credit increase/decrease"""
  creditValue: ComparableDoubleOperationFilterInput
  """Service type associated with credits"""
  serviceType: ServiceTypeOperationFilterInput
  """Date/time the credit balance was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the credit balance"""
  createdBy: StringOperationFilterInput
  """ID of the account"""
  accountId: ComparableInt64OperationFilterInput
  """Account"""
  account: GlobalAccountFilterInput
}


"""Discount being applied to a plan"""
input AccountPlanDiscountFilterInput {
  and: [AccountPlanDiscountFilterInput!]
  or: [AccountPlanDiscountFilterInput!]
  """Unique plan discount ID"""
  id: ComparableInt64OperationFilterInput
  """Description of discount"""
  description: StringOperationFilterInput
  """Dollar amount being discounted from plan"""
  discountAmt: ComparableDoubleOperationFilterInput
  """Percentage being discounted from plan"""
  discountPct: ComparableDoubleOperationFilterInput
  """Indicates whether discount is applied each billing cycle"""
  isRecurring: BooleanOperationFilterInput
  """Date/time discount will start being applied"""
  startUtc: ComparableDateTimeOperationFilterInput
  """
  Date/time discount will next be applied. The initial value will be the same as the StartUtc
  """
  nextUtc: ComparableDateTimeOperationFilterInput
  """
  Date/time discount will stop being applied. This only affects recurring discounts.
  """
  endUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Date/time the plan discount was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the plan discount"""
  createdBy: StringOperationFilterInput
  """Date/time the plan discount was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the plan discount"""
  modifiedBy: StringOperationFilterInput
}


"""Represents additional fees that may be applied to an account"""
input AccountFeeFilterInput {
  and: [AccountFeeFilterInput!]
  or: [AccountFeeFilterInput!]
  """Unique fee ID"""
  id: ComparableInt64OperationFilterInput
  """Description of fee"""
  description: StringOperationFilterInput
  """Fee rate to be charged"""
  rate: ComparableDoubleOperationFilterInput
  """Quantity of fee to be charged"""
  qty: ComparableInt32OperationFilterInput
  """Total fee amount ot be charged"""
  fee: ComparableDoubleOperationFilterInput
  """Service type of the fee being charged"""
  serviceType: ServiceTypeOperationFilterInput
  """Indicates whether fee is charged each billing cycle"""
  isRecurring: BooleanOperationFilterInput
  """Date/time fee will start being applied"""
  startUtc: ComparableDateTimeOperationFilterInput
  """
  Date/time fee will next be applied. The initial value will be the same as the StartUtc
  """
  nextUtc: ComparableDateTimeOperationFilterInput
  """
  Date/time fee will stop being applied. This only affects recurring discounts.
  """
  endUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Number of billing cycles between each fee charge."""
  billCycleInterval: ComparableInt32OperationFilterInput
  """Date/time the fee was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the fee"""
  createdBy: StringOperationFilterInput
  """Date/time the fee was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the fee"""
  modifiedBy: StringOperationFilterInput
  """Id of the account"""
  accountId: ComparableInt64OperationFilterInput
  """Account"""
  account: GlobalAccountFilterInput
}


"""Represents a history of account status changes"""
input AccountStatusActivityFilterInput {
  and: [AccountStatusActivityFilterInput!]
  or: [AccountStatusActivityFilterInput!]
  """Unique status change ID"""
  id: ComparableInt64OperationFilterInput
  """Previous status of account"""
  oldStatus: AccountStatusDtoOperationFilterInput
  """New status of account"""
  newStatus: AccountStatusDtoOperationFilterInput
  """Date/time status was changed"""
  startUtc: ComparableNullableOfDateTimeOperationFilterInput
  """
  Date/time has to be changed back in cases where the status is set to *Relax* or *Hibernate*
  """
  endUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Date/time the status history was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the status history"""
  createdBy: StringOperationFilterInput
  """ID of the account"""
  accountId: ComparableInt64OperationFilterInput
  """Account"""
  account: GlobalAccountFilterInput
}


input AccountFormPathNameFilterInput {
  and: [AccountFormPathNameFilterInput!]
  or: [AccountFormPathNameFilterInput!]
  id: ComparableInt64OperationFilterInput
  pathName: StringOperationFilterInput
  formId: ComparableInt64OperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  account: GlobalAccountFilterInput
}


input AccountSendingDomainFilterInput {
  and: [AccountSendingDomainFilterInput!]
  or: [AccountSendingDomainFilterInput!]
  hash: ListComparableByteOperationFilterInput
  domain: StringOperationFilterInput
  selector: StringOperationFilterInput
  isValid: BooleanOperationFilterInput
  isValidUtc: ComparableNullableOfDateTimeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  account: GlobalAccountFilterInput
}


input AccountBounceDomainFilterInput {
  and: [AccountBounceDomainFilterInput!]
  or: [AccountBounceDomainFilterInput!]
  id: ComparableInt64OperationFilterInput
  domain: StringOperationFilterInput
  isValid: BooleanOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  account: GlobalAccountFilterInput
}


input AccountSubscriptionFilterInput {
  and: [AccountSubscriptionFilterInput!]
  or: [AccountSubscriptionFilterInput!]
  """PlanType of subscription"""
  planType: PlanTypeOperationFilterInput
  """Current Chargebee subscription ID"""
  currentSubscriptionId: ComparableInt64OperationFilterInput
  """Current Chargebee plan id"""
  currentPlanId: StringOperationFilterInput
  """Current Chargebee plan name"""
  currentPlanName: StringOperationFilterInput
  """
  Current plan item limit. Based on tier selected when choosing plan or the previous month's tier limit.
  """
  currentPlanItemLimit: ComparableInt32OperationFilterInput
  """Current billing period start date/time"""
  currentBillingStartUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Current billing period end date/time"""
  currentBillingEndUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Next Chargebee subscription ID"""
  nextSubscriptionId: ComparableNullableOfInt64OperationFilterInput
  """Next Chargebee plan id"""
  nextPlanId: StringOperationFilterInput
  """Next Chargebee plan name"""
  nextPlanName: StringOperationFilterInput
  """Next billing period start date/time"""
  nextBillingStartUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Next billing period end date/time"""
  nextBillingEndUtc: ComparableNullableOfDateTimeOperationFilterInput
  """
  Next plan item limit. Based on tier selected when choosing plan or the previous month's tier limit.
  """
  nextPlanItemLimit: ComparableInt32OperationFilterInput
  """Plan change indicator: 0 = downgrade, 1 = upgrade, null = no change"""
  planChangeInd: BooleanOperationFilterInput
  allowOverages: BooleanOperationFilterInput
  allowAutoScaling: BooleanOperationFilterInput
  isActive: BooleanOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  account: GlobalAccountFilterInput
}


input AccountFactFilterInput {
  and: [AccountFactFilterInput!]
  or: [AccountFactFilterInput!]
  name: StringOperationFilterInput
  value: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  account: GlobalAccountFilterInput
}


input SubmitActionTypeOperationFilterInput {
  eq: SubmitActionType
  neq: SubmitActionType
  in: [SubmitActionType!]
  nin: [SubmitActionType!]
}


input NullableOfDialogIconTypeOperationFilterInput {
  eq: DialogIconType
  neq: DialogIconType
  in: [DialogIconType]
  nin: [DialogIconType]
}


input DialogButtonActionTypeOperationFilterInput {
  eq: DialogButtonActionType
  neq: DialogButtonActionType
  in: [DialogButtonActionType!]
  nin: [DialogButtonActionType!]
}


input DataAttachmentFormatOperationFilterInput {
  eq: DataAttachmentFormat
  neq: DataAttachmentFormat
  in: [DataAttachmentFormat!]
  nin: [DataAttachmentFormat!]
}


input DuplicateSubmissionActionTypeOperationFilterInput {
  eq: DuplicateSubmissionActionType
  neq: DuplicateSubmissionActionType
  in: [DuplicateSubmissionActionType!]
  nin: [DuplicateSubmissionActionType!]
}


input ErrorActionOperationFilterInput {
  eq: ErrorAction
  neq: ErrorAction
  in: [ErrorAction!]
  nin: [ErrorAction!]
}


input NullableOfErrorActionTypeOperationFilterInput {
  eq: ErrorAction
  neq: ErrorAction
  in: [ErrorAction]
  nin: [ErrorAction]
}


input ListFilterInputTypeOfNotificationFilterInput {
  all: NotificationFilterInput
  none: NotificationFilterInput
  some: NotificationFilterInput
  any: Boolean
}


input ListFilterInputTypeOfFormQuestionFilterInput {
  all: QuestionFilterInput
  none: QuestionFilterInput
  some: QuestionFilterInput
  any: Boolean
}


input ListFilterInputTypeOfFormTagFilterInput {
  all: FormTagFilterInput
  none: FormTagFilterInput
  some: FormTagFilterInput
  any: Boolean
}


input ListFilterInputTypeOfFormLinkFilterInput {
  all: FormLinkFilterInput
  none: FormLinkFilterInput
  some: FormLinkFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubmissionResponseFilterInput {
  all: SubmissionResponseFilterInput
  none: SubmissionResponseFilterInput
  some: SubmissionResponseFilterInput
  any: Boolean
}


input SubjectFilterInput {
  and: [SubjectFilterInput!]
  or: [SubjectFilterInput!]
  id: ComparableInt64OperationFilterInput
  type: SubjectTypeOperationFilterInput
}


input EventFilterInput {
  and: [EventFilterInput!]
  or: [EventFilterInput!]
  accountId: ComparableInt64OperationFilterInput
  entityType: EntityTypeOperationFilterInput
  eventType: EventTypeOperationFilterInput
  dateUtc: ComparableNullableOfDateTimeOperationFilterInput
  initiator: EventInitiatorOperationFilterInput
  network: EventNetworkFilterInput
  client: EventClientFilterInput
}


"""Plan based on a service type that can be available to accounts"""
input ServicePlanDtoFilterInput {
  and: [ServicePlanDtoFilterInput!]
  or: [ServicePlanDtoFilterInput!]
  """Unique service plan ID"""
  id: ComparableInt64OperationFilterInput
  """Unique name of service plan"""
  planName: StringOperationFilterInput
  """Unique internal service plan name"""
  internalPlanName: StringOperationFilterInput
  """Description of service plan"""
  description: StringOperationFilterInput
  """
  Indicates whether service plan is a trial plan. Only one service plan can be a trail per service type
  """
  isTrial: BooleanOperationFilterInput
  """Number of days a trial plan can be used before an upgrade is required"""
  trialDays: ComparableInt32OperationFilterInput
  """Order of which the service plan is displayed"""
  displayOrder: ComparableInt32OperationFilterInput
  """
  Determines the perceived value of the service plan used to determine if the plan is an upgrade/downgrade from another service plan
  """
  rank: ComparableDoubleOperationFilterInput
  """Non-monetary value of each credit"""
  creditValue: ComparableDoubleOperationFilterInput
  """Service type associated with the plan"""
  serviceType: ServiceTypeOperationFilterInput
  """Indicates whether service plan is displayed on websites/applications"""
  isPublic: BooleanOperationFilterInput
  """Indicates whether service plan is active"""
  isActive: BooleanOperationFilterInput
  """Date/time the service plan was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the service plan"""
  createdBy: StringOperationFilterInput
  """Date/time the service plan was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the service plan"""
  modifiedBy: StringOperationFilterInput
  """Collection of features"""
  features: ListFilterInputTypeOfServicePlanFeatureFilterInput
  """Collection of scales"""
  scales: ListFilterInputTypeOfServicePlanScaleFilterInput
  """Collection of credit blocks"""
  credits: ListFilterInputTypeOfServicePlanCreditItemFilterInput
  """Collection of Account service plans"""
  accountServicePlans: ListFilterInputTypeOfAccountServicePlanFilterInput
  """Collection of Account invoice line items"""
  accountInvoiceLineItems: ListFilterInputTypeOfAccountInvoiceLineItemFilterInput
}


input CreditCardNetworkOperationFilterInput {
  eq: CreditCardNetwork
  neq: CreditCardNetwork
  in: [CreditCardNetwork!]
  nin: [CreditCardNetwork!]
}


input InvoiceStatusOperationFilterInput {
  eq: InvoiceStatus
  neq: InvoiceStatus
  in: [InvoiceStatus!]
  nin: [InvoiceStatus!]
}


input ListFilterInputTypeOfAccountInvoiceLineItemFilterInput {
  all: AccountInvoiceLineItemFilterInput
  none: AccountInvoiceLineItemFilterInput
  some: AccountInvoiceLineItemFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAccountReceiptFilterInput {
  all: AccountReceiptFilterInput
  none: AccountReceiptFilterInput
  some: AccountReceiptFilterInput
  any: Boolean
}


input NotificationFilterInput {
  and: [NotificationFilterInput!]
  or: [NotificationFilterInput!]
  id: ComparableInt64OperationFilterInput
  subscriberListMessageType: SubscriberListMessageTypeOperationFilterInput
  enabled: BooleanOperationFilterInput
  fromText: StringOperationFilterInput
  fromEmail: EmailFilterInput
  subject: StringOperationFilterInput
  notificationContents: ListFilterInputTypeOfNotificationContentFilterInput
  formId: ComparableInt64OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input QuestionFilterInput {
  and: [QuestionFilterInput!]
  or: [QuestionFilterInput!]
  id: ComparableInt64OperationFilterInput
  text: StringOperationFilterInput
  type: QuestionTypeOperationFilterInput
  orientation: QuestionOrientationOperationFilterInput
  displayOrder: ComparableInt32OperationFilterInput
  required: BooleanOperationFilterInput
  allowOther: BooleanOperationFilterInput
  sourceType: NullableOfQuestionSourceTypeOperationFilterInput
  sourceName: StringOperationFilterInput
  defaultValue: StringOperationFilterInput
  placeholder: StringOperationFilterInput
  prefixType: StringOperationFilterInput
  prefixContent: StringOperationFilterInput
  suffixType: StringOperationFilterInput
  suffixContent: StringOperationFilterInput
  backgroundPattern: StringOperationFilterInput
  matrixHeaderBackground: StringOperationFilterInput
  boldCategoryText: BooleanOperationFilterInput
  categoryBackground: StringOperationFilterInput
  contentStyles: FormQuestionStylesFilterInput
  ratingType: NullableOfRatingTypeOperationFilterInput
  ratingIconType: NullableOfRatingIconTypeOperationFilterInput
  ratingCount: ComparableInt32OperationFilterInput
  minRatingValue: ComparableInt32OperationFilterInput
  maxRatingValue: ComparableInt32OperationFilterInput
  minRatingTitle: StringOperationFilterInput
  maxRatingTitle: StringOperationFilterInput
  ratingColor: StringOperationFilterInput
  minNbr: ComparableNullableOfDecimalOperationFilterInput
  maxNbr: ComparableNullableOfDecimalOperationFilterInput
  minUtc: ComparableNullableOfDateTimeOperationFilterInput
  maxUtc: ComparableNullableOfDateTimeOperationFilterInput
  prefix: StringOperationFilterInput
  suffix: StringOperationFilterInput
  totalAnswered: ComparableInt32OperationFilterInput
  totalSkipped: ComparableInt32OperationFilterInput
  dataField: DataFieldFilterInput
  answers: ListFilterInputTypeOfFormQuestionAnswerFilterInput
}


input FormTagFilterInput {
  and: [FormTagFilterInput!]
  or: [FormTagFilterInput!]
  tagHash: ListComparableByteOperationFilterInput
  tag: OldTagFilterInput
  formId: ComparableInt64OperationFilterInput
  form: FormFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input FormLinkFilterInput {
  and: [FormLinkFilterInput!]
  or: [FormLinkFilterInput!]
  id: ComparableInt64OperationFilterInput
  hash: ListComparableByteOperationFilterInput
  url: StringOperationFilterInput
  linkName: StringOperationFilterInput
  track: BooleanOperationFilterInput
  isCta: BooleanOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  formId: ComparableInt64OperationFilterInput
  form: FormFilterInput
}


input SubjectTypeOperationFilterInput {
  eq: SubjectType
  neq: SubjectType
  in: [SubjectType!]
  nin: [SubjectType!]
}


input EventInitiatorOperationFilterInput {
  eq: EventInitiator
  neq: EventInitiator
  in: [EventInitiator!]
  nin: [EventInitiator!]
}


input EventNetworkFilterInput {
  and: [EventNetworkFilterInput!]
  or: [EventNetworkFilterInput!]
  ip: StringOperationFilterInput
  protocol: StringOperationFilterInput
  httpVerb: StringOperationFilterInput
}


input EventClientFilterInput {
  and: [EventClientFilterInput!]
  or: [EventClientFilterInput!]
  device: NullableOfDeviceTypeOperationFilterInput
  software: NullableOfSoftwareTypeOperationFilterInput
  os: NullableOfOperatingSystemTypeOperationFilterInput
  referrer: StringOperationFilterInput
}


input ListFilterInputTypeOfServicePlanFeatureFilterInput {
  all: ServicePlanFeatureDtoFilterInput
  none: ServicePlanFeatureDtoFilterInput
  some: ServicePlanFeatureDtoFilterInput
  any: Boolean
}


"""Line items detail the specific services being invoiced for"""
input AccountInvoiceLineItemFilterInput {
  and: [AccountInvoiceLineItemFilterInput!]
  or: [AccountInvoiceLineItemFilterInput!]
  """Unique line item ID"""
  id: ComparableInt64OperationFilterInput
  """Service type"""
  serviceType: NullableOfServiceTypeOperationFilterInput
  """Description of service being invoiced for"""
  description: StringOperationFilterInput
  """Service type fee rate"""
  rate: ComparableDoubleOperationFilterInput
  """Number of items for the respective service type"""
  qty: ComparableDoubleOperationFilterInput
  """Total amount due for this line item"""
  amount: ComparableDoubleOperationFilterInput
  """Indicates whether line item is a discount or not"""
  isDiscount: BooleanOperationFilterInput
  """Date/time the line item was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the line item"""
  createdBy: StringOperationFilterInput
  """Date/time the line item was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the line item"""
  modifiedBy: StringOperationFilterInput
}


"""Payment receipt associated with an invoice that was paid"""
input AccountReceiptFilterInput {
  and: [AccountReceiptFilterInput!]
  or: [AccountReceiptFilterInput!]
  """Unique receipt ID"""
  id: ComparableInt64OperationFilterInput
  """Payment transaction ID"""
  transactionId: StringOperationFilterInput
  """Amount charged to payment method"""
  amount: ComparableDoubleOperationFilterInput
  """Reason credit card was declined."""
  reason: CardDeclineReasonOperationFilterInput
  """Payment status"""
  status: PaymentStatusOperationFilterInput
  """Nickname of payment method used to make payment"""
  paymentNickname: StringOperationFilterInput
  """2 digit expiration month"""
  paymentExpMonth: ComparableNullableOfInt32OperationFilterInput
  """4 digit expiration year"""
  paymentExpYear: ComparableNullableOfInt32OperationFilterInput
  """Last 4 digits of credit card to assist in identifying payment method"""
  paymentLast4Digits: StringOperationFilterInput
  """Type of credit card"""
  paymentCardNetwork: NullableOfCreditCardNetworkOperationFilterInput
  """Date/time the receipt was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who receipt the invoice"""
  createdBy: StringOperationFilterInput
  """
  ID of invoice associated with the receipt. Refer to the **accountInvoice** query to get invoice details.
  """
  invoiceId: ComparableInt64OperationFilterInput
}


input SubscriberListMessageTypeOperationFilterInput {
  eq: SubscriberListMessageType
  neq: SubscriberListMessageType
  in: [SubscriberListMessageType!]
  nin: [SubscriberListMessageType!]
}


input ListFilterInputTypeOfNotificationContentFilterInput {
  all: NotificationContentFilterInput
  none: NotificationContentFilterInput
  some: NotificationContentFilterInput
  any: Boolean
}


input NullableOfRatingIconTypeOperationFilterInput {
  eq: RatingIconType
  neq: RatingIconType
  in: [RatingIconType]
  nin: [RatingIconType]
}


input ListFilterInputTypeOfFormQuestionAnswerFilterInput {
  all: QuestionAnswerFilterInput
  none: QuestionAnswerFilterInput
  some: QuestionAnswerFilterInput
  any: Boolean
}


"""Represents the configuration of a feature within a service plan"""
input ServicePlanFeatureDtoFilterInput {
  and: [ServicePlanFeatureDtoFilterInput!]
  or: [ServicePlanFeatureDtoFilterInput!]
  """Unique service plan feature ID"""
  id: ComparableInt64OperationFilterInput
  """Limit of feature when the account status is *Active*"""
  activeLimit: ComparableInt64OperationFilterInput
  """Limit of feature when the account status is *Relax*"""
  relaxLimit: ComparableInt64OperationFilterInput
  """Limit of feature when the account status is *Hibernate*"""
  hibernateLimit: ComparableInt64OperationFilterInput
  """Limit of feature when the account status is *Suspend*"""
  suspendLimit: ComparableInt64OperationFilterInput
  """Description of feature when the account status is *Active*"""
  activeDescription: StringOperationFilterInput
  """Description of feature when the account status is *Relax*"""
  relaxDescription: StringOperationFilterInput
  """Description of feature when the account status is *Hibernate*"""
  hibernateDescription: StringOperationFilterInput
  """Description of feature when the account status is *Suspend*"""
  suspendDescription: StringOperationFilterInput
  """Date/time the service plan feature was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the service plan feature"""
  createdBy: StringOperationFilterInput
  """Date/time the service plan feature was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the service plan feature"""
  modifiedBy: StringOperationFilterInput
  """ID of the Service plan"""
  servicePlanId: ComparableInt64OperationFilterInput
  """Service plan"""
  servicePlan: ServicePlanDtoFilterInput
  """ID of the Feature"""
  globalFeatureId: ComparableInt64OperationFilterInput
  """Feature"""
  globalFeature: GlobalFeatureFilterInput
}


input NullableOfServiceTypeOperationFilterInput {
  eq: ServiceType
  neq: ServiceType
  in: [ServiceType]
  nin: [ServiceType]
}


input CardDeclineReasonOperationFilterInput {
  eq: CardDeclineReason
  neq: CardDeclineReason
  in: [CardDeclineReason!]
  nin: [CardDeclineReason!]
}


input PaymentStatusOperationFilterInput {
  eq: PaymentStatus
  neq: PaymentStatus
  in: [PaymentStatus!]
  nin: [PaymentStatus!]
}


input NullableOfCreditCardNetworkOperationFilterInput {
  eq: CreditCardNetwork
  neq: CreditCardNetwork
  in: [CreditCardNetwork]
  nin: [CreditCardNetwork]
}


input NotificationContentFilterInput {
  and: [NotificationContentFilterInput!]
  or: [NotificationContentFilterInput!]
  id: ComparableInt64OperationFilterInput
  mimeType: StringOperationFilterInput
  dataBlobId: StringOperationFilterInput
  workingDataBlobId: StringOperationFilterInput
  recoveryDataBlobId: StringOperationFilterInput
  thumbnailUrl: StringOperationFilterInput
  validContent: BooleanOperationFilterInput
  autoSaveUtc: ComparableNullableOfDateTimeOperationFilterInput
  notificationId: ComparableInt64OperationFilterInput
  notification: NotificationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


input QuestionAnswerFilterInput {
  and: [QuestionAnswerFilterInput!]
  or: [QuestionAnswerFilterInput!]
  text: StringOperationFilterInput
  value: StringOperationFilterInput
  displayOrder: ComparableInt32OperationFilterInput
}


"""Global feature that can be added to a service plan"""
input GlobalFeatureFilterInput {
  and: [GlobalFeatureFilterInput!]
  or: [GlobalFeatureFilterInput!]
  """Unique ID of feature"""
  id: ComparableInt64OperationFilterInput
  """Unique key code of feature"""
  keyCode: ComparableNullableOfGuidOperationFilterInput
  """Unique name of feature"""
  name: StringOperationFilterInput
  """Unique feature key"""
  key: StringOperationFilterInput
  """Description of feature"""
  description: StringOperationFilterInput
  """Indicates whether feature is displayed on websites/applications"""
  isPublic: BooleanOperationFilterInput
  """Order in which the feature is displayed"""
  displayOrder: ComparableInt32OperationFilterInput
  """Indicates whether features is active"""
  isActive: BooleanOperationFilterInput
  """Date/time the feature was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the feature"""
  createdBy: StringOperationFilterInput
  """Date/time the feature was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the feature"""
  modifiedBy: StringOperationFilterInput
  """Collection of service plan features"""
  servicePlanFeatures: ListFilterInputTypeOfServicePlanFeatureFilterInput
}


input UpdateActionUpdateJourneyContactInput {
  actionJourneyId: String
  operator: ActionOperator
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionUpdateJourneyContactInput {
  actionJourneyId: String
  operator: ActionOperator
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateFacebookAudienceInput {
  fbAdAccountId: String
  fbAudienceId: String
  operator: ActionOperator
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionUpdateFacebookAudienceInput {
  fbAdAccountId: String
  fbAudienceId: String
  operator: ActionOperator
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateContactTagInput {
  """Comma delimited string of tags is supported as well as a tag."""
  tag: String
  operator: ActionOperator
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionUpdateContactTagInput {
  """Comma delimited string of tags is supported as well as a tag."""
  tag: String
  operator: ActionOperator
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateContactStatusInput {
  newStatus: ContactStatus
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionUpdateContactStatusInput {
  newStatus: ContactStatus
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateContactProfileInput {
  fieldName: String
  newValue: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionUpdateContactProfileInput {
  fieldName: String
  newValue: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateContactGroupInput {
  """Comma delimited string of ids is supported as well as a single id."""
  groupId: String
  operator: ActionOperator
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionUpdateContactGroupInput {
  """Comma delimited string of ids is supported as well as a single id."""
  groupId: String
  operator: ActionOperator
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionSiteNotificationInput {
  path: String
  domainId: String
  notification: SiteNotificationInput
  settings: SiteNotificationSettingsInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionSiteNotificationInput {
  path: String
  domainId: String
  notification: SiteNotificationInput
  settings: SiteNotificationSettingsInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionSendSMSInput {
  deliveryWindow: DeliveryWindowInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionSendSMSInput {
  deliveryWindow: DeliveryWindowInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionSendNotificationEmailInput {
  notification: JourneyNodeNotificationInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionSendNotificationEmailInput {
  notification: JourneyNodeNotificationInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionSendEmailInput {
  deliveryWindow: DeliveryWindowInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionSendEmailInput {
  isMultivariate: Boolean
  deliveryWindow: DeliveryWindowInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionEvaluateGoalInput {
  goalId: String
  continueJourney: Boolean
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionEvaluateGoalInput {
  goalId: String
  continueJourney: Boolean
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionConvertContactInput {
  conversionId: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionConvertContactInput {
  conversionId: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionAddContactNoteInput {
  noteText: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateActionAddContactNoteInput {
  noteText: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateJourneyInput {
  id: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 1000*"""
  description: String
  """*Max length: 50*"""
  defaultFromName: String
  """*Max length: 320*"""
  defaultFromEmail: String
  reEntryType: JourneyReEntryType
  mailDomainId: String
  """*Max length: 50*"""
  tags: [String!]
}


input CreateJourneyInput {
  """*Max length: 100*"""
  name: String!
  """*Max length: 1000*"""
  description: String
  """*Max length: 50*"""
  tags: [String!]
  reEntryType: JourneyReEntryType
  referenceJourneyId: String
  audienceId: String!
}


input PreviewContentBlockInput {
  id: String!
  contactId: String
  audienceId: String
  mockContact: MockContactInput
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
}


input UpdateContentBlockInput {
  id: String!
  folderId: String
  """100 character limit"""
  name: String
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """255 character limit"""
  description: String
  tags: [String!]
  contentBodies: [UpdateContentBlockContentInput!]
}


input CreateContentBlockInput {
  folderId: String!
  """*Max length: 100*"""
  name: String!
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """*Max length: 255*"""
  description: String
  editorType: EditorType!
  type: ContentBlockType!
  """50 character limit"""
  tags: [String!]
  contentBodies: [CreateContentBlockContentInput!]!
}


input DeleteContentVariationInput {
  campaignId: String!
  contentVariationId: String!
}


input UpdateContentVariationInput {
  campaignId: String!
  """
  Use collection to update one or more content variations within the same campaign.
  """
  contentVariations: [UpdateContentVariationInformationInput!]!
}


input CreateContentVariationInput {
  campaignId: String!
  """Only used for journey campaigns."""
  templateType: TemplateType
  copyFirstContentVariationContent: Boolean
  referenceTemplateId: String
  previousCampaignId: String
}


input SelectMvWinnerInput {
  campaignId: String!
  combinationId: Int!
}


input ScheduleCampaignInput {
  id: String!
  timeJumper: Boolean
  sendsUtc: [DateTime!]!
}


input UpdateCampaignInput {
  id: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes).
  """
  language: String
  includeEntireAudience: Boolean
  isOperational: Boolean
  """*Max length: 320*"""
  replyEmail: String
  mailDomainId: String
  audienceId: String
  """
  Campaign can be archived if it is not currently in the send process. Can be archived if send status is NOT_SCHEDULED, STOPPED, COMPLETED, SYSTEM_STOPPED, or READY_TO_SEND.
  """
  isArchived: Boolean
  """Enable auto retry using account's auto retry rule (if plan allows)"""
  enableAutoRetry: Boolean
  """
  Gets or sets a value indicating whether to use TimeJumper to send winner variation based on user's timezone.
  """
  timeJumper: Boolean
  sendScheduleType: SendScheduleType
  """
  If send time count is greater than one, all other variation counts (subjects, froms, and content) need to be set to 1.
  """
  sendTimeCount: Int
  """Gets or sets a value indicating whether to track replies."""
  trackReplies: Boolean
  """Gets or sets a value indicating whether to track links."""
  trackLinkClicks: Boolean
  """Gets or sets a value indicating whether track opens."""
  trackOpens: Boolean
  trackBrowser: Boolean
  trackLocation: Boolean
  trackHardware: Boolean
  trackDomains: Boolean
  mvGoal: MvGoal
  mvHypothesis: String
  mvTestPct: Float
  """Gets or sets the type of multi-variant winner selection to perform."""
  mvWinType: MvWinType
  """Gets or sets how many hours to wait before picking a winner."""
  mvWinWait: Int
  mvWinWaitType: MvTimeMeasurement
  """
  Gets or sets the number of hours to wait after winner is selected to send winner
  """
  mvWinSendWait: Int
  """
  Gets or sets a JSON array of date/times in UTC format for each send time when using AB testing (send times type only)
  """
  mvWinSendWaitType: MvTimeMeasurement
  """
  Used to determine time of day to send winning campaign. Date portion of value will be ignored.
  """
  mvWinSendUtc: DateTime
  enableAnalytics: Boolean
  analyticParams: [ParamNameValueInput!]
  customHeaders: [ParamNameValueInput!]
  audienceFilters: [UpdateCampaignAudienceInput!]
  fromCount: Int
  subjectCount: Int
  contentCount: Int
  froms: [FromInput!]
  globalPreheaderInd: Boolean
  subjects: [SubjectInput!]
  """Only used for RSS campaigns"""
  rssCheckFrequency: String
  """Only used for RSS campaigns"""
  rssUrl: String
  """Only used for RSS campaigns"""
  rssCheckType: TriggerRssCheckType
  """Only used for RSS campaigns"""
  rssSendIfNoNewOrUpdatedItems: Boolean
  """Only used for RSS campaigns"""
  rssSendWeekDays: String
  """Only used for RSS campaigns"""
  rssSendTimeUtc: DateTime
  """*Max length: 50*"""
  tags: [String!]
}


input SendCampaignTestInput {
  id: String!
  """
  Value can be a single email address or a comma delimited list of email addresses.
  """
  recipients: String
  """
  Defaults to the first from in the Campaign or a Tarvent default if not passed.
  """
  from: FromInput
  """Defaults to the first subject in the Campaign if not passed."""
  subject: SubjectInput
  """Defaults to the first content variation in the Campaign if not passed."""
  contentVariationId: String
  audienceGroups: [String!]
  contactId: String
  audienceId: String
  mockContact: MockContactInput
}


input RenderContentSourceInput {
  campaignId: String!
  contentVariationId: String!
}


type CampaignContentSource {
  contentBodies: [ContentBody!]!
}


input PreviewCampaignInput {
  campaignId: String!
  contentVariationId: String
  subject: String
  preheader: String
  fromName: String
  contactId: String
  audienceId: String
  mockContact: MockContactInput
}


type CampaignPreview {
  subject: String
  preheader: String
  fromName: String
  contentBodies: [ContentBody!]!
}


input CreateCampaignInput {
  type: CampaignType!
  audienceId: String!
  referenceTemplateId: String
  previousCampaignId: String
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes).
  """
  language: String
  """Defaults to false"""
  isMultivariate: Boolean
  """*Max length: 100*"""
  name: String!
  """*Max length: 255*"""
  description: String
  """*Max length: 320*"""
  replyEmail: String
  """*Max length: 50*"""
  tags: [String!]
  enableAutoRetry: Boolean
  """
  If set, this will override target audience settings when copying from a previous campaign
  """
  includeEntireAudience: Boolean
  """
  Sets target audience groups and/or segments when not sending to the entire audience
  """
  audienceFilters: [UpdateCampaignAudienceInput!]
}


input PreviewArticleInput {
  id: String!
  contactId: String
  audienceId: String
  mockContact: MockContactInput
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
}


type FileContent {
  mimeType: MimeType!
  content: String
}


input UpdateArticleInput {
  id: String!
  folderId: String
  """*Max length: 100*"""
  name: String
  """*Max length: 100*"""
  title: String
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  defaultLayout: ArticleDefaultLayout
  """*Max length: 255*"""
  description: String
  """50 character limit"""
  tags: [String!]
  contentBodies: [UpdateArticleContentInput!]
}


input CreateArticleInput {
  folderId: String!
  """*Max length: 100*"""
  name: String!
  """*Max length: 100*"""
  title: String
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  defaultLayout: ArticleDefaultLayout
  """*Max length: 255*"""
  description: String
  """50 character limit"""
  tags: [String!]
  contentBodies: [CreateArticleContentInput!]
}


input UpdateFileInput {
  id: String!
  name: String
  folderId: String
  tags: [String!]
}


input CreateUrlFileInput {
  folderId: String!
  """100 character limit. If not passed, the file name will be used."""
  name: String
  fileUrl: String!
  """*Max length: 50*"""
  tags: [String!]
  """Defaults to false if not passed."""
  overwrite: Boolean
}


input UpdateFolderInput {
  id: String!
  """100 character limit"""
  name: String
  parentId: String
}


input CreateFolderInput {
  parentId: String!
  """*Max length: 50*"""
  name: String!
}


"""Subscriber list scales associated with a service plan"""
type ServicePlanScale {
  """Unique service plan scale ID"""
  id: String!
  """Minimum limit of scale"""
  minLimit: Int!
  """Maximum limit of scale"""
  maxLimit: Int!
  """Scale fee"""
  fee: Float!
}


input UpdateLandingPageInput {
  id: String!
  name: String
  pathName: String
  title: String
  description: String
  metaDescription: String
  metaKeywords: String
  shareImageUrl: String
  faviconUrl: String
  translations: UpdateTranslationsInput
  status: ValidStatus
  isGdprEnabled: Boolean
  scriptingBlock: String
  configurationJson: String
  tags: [String!]
}


input CreateLandingPageInput {
  """*Max length: 100*"""
  name: String!
  referenceLandingPageId: String
  previousLandingPageId: String
  """*Max length: 100*"""
  pathName: String
  """*Max length: 255*"""
  description: String
  """*Max length: 50*"""
  tags: [String!]
}


input UpdateSurveyInput {
  id: String!
  startUtc: DateTime
  endUtc: DateTime
  name: String
  pathName: String
  title: String
  description: String
  metaDescription: String
  metaKeywords: String
  shareImageUrl: String
  faviconUrl: String
  """Only used when survey is not associated with an audience."""
  mailDomainId: String
  translations: UpdateTranslationsInput
  status: ValidStatus
  isGdprEnabled: Boolean
  scriptingBlock: String
  configurationJson: String
  tags: [String!]
  submitAction: UpdateSubmitActionInput
}


input CreateSurveyInput {
  """*Max length: 100*"""
  name: String!
  referenceSurveyId: String
  previousSurveyId: String
  """*Max length: 100*"""
  pathName: String
  """*Max length: 255*"""
  description: String
  """*Max length: 50*"""
  tags: [String!]
  audienceId: String
}


input DeleteQuestionInput {
  id: String!
  parentId: String!
}


input UpdateQuestionInput {
  id: String!
  parentId: String!
  """*Max length: 255*"""
  text: String
  orientation: QuestionOrientation
  displayOrder: Int
  required: Boolean
  allowOther: Boolean
  sourceType: QuestionSourceType
  """*Max length: 100*"""
  sourceName: String
  """*Max length: 300*"""
  defaultValue: String
  placeholder: String
  prefixType: String
  prefixContent: String
  suffixType: String
  suffixContent: String
  backgroundPattern: String
  matrixHeaderBackground: String
  boldCategoryText: Boolean
  categoryBackground: String
  content: String
  contentStyles: UpdateFormQuestionStylesInput
  ratingType: RatingType
  ratingIconType: RatingIconType
  ratingCount: Int
  minRatingValue: Int
  maxRatingValue: Int
  """*Max length: 100*"""
  minRatingTitle: String
  """*Max length: 100*"""
  maxRatingTitle: String
  """*Max length: 50*"""
  ratingColor: String
  minNbr: Decimal
  maxNbr: Decimal
  minUtc: DateTime
  maxUtc: DateTime
  """*Max length: 50*"""
  prefix: String
  """*Max length: 50*"""
  suffix: String
  answers: [QuestionAnswerInput!]
  categories: [QuestionCategoryInput!]
}


input CreateQuestionInput {
  parentId: String!
  """*Max length: 255*"""
  text: String!
  type: QuestionType!
  orientation: QuestionOrientation
  displayOrder: Int!
  required: Boolean!
  allowOther: Boolean
  sourceType: QuestionSourceType
  """*Max length: 100*"""
  sourceName: String
  """*Max length: 300*"""
  defaultValue: String
  placeholder: String
  prefixType: String
  prefixContent: String
  suffixType: String
  suffixContent: String
  backgroundPattern: String
  matrixHeaderBackground: String
  boldCategoryText: Boolean
  categoryBackground: String
  content: String
  contentStyles: FormQuestionStylesInput
  ratingType: RatingType
  ratingIconType: RatingIconType
  ratingCount: Int
  minRatingValue: Int
  maxRatingValue: Int
  """*Max length: 100*"""
  minRatingTitle: String
  """*Max length: 100*"""
  maxRatingTitle: String
  """*Max length: 50*"""
  ratingColor: String
  minNbr: Decimal
  maxNbr: Decimal
  minUtc: DateTime
  maxUtc: DateTime
  dataFieldId: String
  answers: [QuestionAnswerInput!]
  categories: [QuestionCategoryInput!]
}


input DeleteFormInput {
  id: String!
  """Required when form type is not 'Survey'."""
  audienceId: String
}


input PreviewEmailInput {
  formId: String!
  emailType: EmailType!
  contactId: String
  audienceId: String
  mockContact: MockContactInput
}


input ExportFormSourceInput {
  id: String!
  """Required if type is not set to 'Survey' or 'LandingPage'."""
  audienceId: String
}


type FormSource {
  linkedSource: String!
  unlinkedSource: String!
}


input UpdateFormInput {
  id: String!
  audienceId: String
  startUtc: DateTime
  endUtc: DateTime
  name: String
  pathName: String
  title: String
  description: String
  metaDescription: String
  metaKeywords: String
  shareImageUrl: String
  faviconUrl: String
  translations: UpdateTranslationsInput
  ftfFormEmail: FtfFormEmailInput
  status: ValidStatus
  isGdprEnabled: Boolean
  scriptingBlock: String
  configurationJson: String
  tags: [String!]
  submitAction: UpdateSubmitActionInput
}


input CreateFormInput {
  """*Max length: 100*"""
  name: String!
  previousFormId: String
  """*Max length: 100*"""
  pathName: String
  """*Max length: 255*"""
  description: String
  type: AudienceFormType!
  """*Max length: 50*"""
  tags: [String!]
  audienceId: String!
}


input DeleteContactInput {
  id: String!
  audienceId: String!
}


input DeleteGroupContactInput {
  id: String!
  audienceId: String!
  groupId: String!
}


input CreateGroupContactInput {
  id: String!
  audienceId: String!
  groupId: String!
}


input ResendConfEmailInput {
  id: String!
  audienceId: String!
}


input ResetBounceCountsInput {
  id: String
  emailAddress: String
  audienceId: String
  """If not passed or set to null, all bounce stats will be reset to 0."""
  bounceStatType: BounceStatType
}


input UpdateContactStatusInput {
  id: String
  emailAddress: String
  audienceId: String
  status: ContactStatus!
}


input UpdateContactTagsInput {
  id: String
  emailAddress: String
  audienceId: String
  operator: ActionOperator!
  """*Max length: 50*"""
  tags: [String!]!
}


input UpdateContactInput {
  id: String
  emailAddress: String
  audienceId: String
  """*Max length: 100*"""
  firstName: String
  """*Max length: 100*"""
  lastName: String
  """Needs to be in valid Ip format (000.000.000.000)"""
  contactIp: String
  longitude: Decimal
  latitude: Decimal
  """*Max length: 100*"""
  streetAddress: String
  """*Max length: 50*"""
  streetAddress2: String
  """*Max length: 100*"""
  addressLocality: String
  """*Max length: 100*"""
  addressRegion: String
  """*Max length: 15*"""
  postalCode: String
  """*Max length: 100*"""
  addressCountry: String
  """
  Must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to "Auto".
  """
  timeZone: String
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """320 character limit"""
  email: String
  sendFormat: SendFormat
  """Needs to be in valid Ip format (000.000.000.000)"""
  optInIp: String
  optOutUtc: DateTime
  optOutSource: OptOutSource
  """Needs to be in valid Ip format (000.000.000.000)"""
  optOutIp: String
  """255 character limit"""
  optOutReason: String
  groupIds: [String!]
  profile: [UpdateProfileFieldInput!]
  tags: [String!]
}


input CreateContactInput {
  """*Max length: 100*"""
  firstName: String
  """*Max length: 100*"""
  lastName: String
  """Needs to be in valid Ip format (000.000.000.000)"""
  contactIp: String
  longitude: Decimal
  latitude: Decimal
  """*Max length: 100*"""
  streetAddress: String
  """*Max length: 50*"""
  streetAddress2: String
  """*Max length: 100*"""
  addressLocality: String
  """*Max length: 100*"""
  addressRegion: String
  """*Max length: 15*"""
  postalCode: String
  """*Max length: 100*"""
  addressCountry: String
  """
  The value must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to *Auto*.
  """
  timeZone: String
  """
  The value must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to *Auto*.
  """
  language: String
  """*Max length: 100*"""
  email: String!
  """Defaults to Multipart"""
  sendFormat: SendFormat
  optInUtc: DateTime
  """Needs to be in valid Ip format (000.000.000.000)"""
  optInIp: String
  optOutUtc: DateTime
  optOutSource: OptOutSource
  """Needs to be in valid Ip format (000.000.000.000)"""
  optOutIp: String
  """*Max length: 255*"""
  optOutReason: String
  audienceId: String!
  groupIds: [String!]
  profile: [CreateProfileFieldInput!]
  """*Max length: 50*"""
  tags: [String!]
  """
  Update an existing contact if one already exists with saem unique identifier. Defaults to false.
  """
  updateExisting: Boolean
  """Defaults to add only."""
  audienceGroupManagementType: AudienceGroupManagementType
  """Defaults to add only."""
  tagManagementType: TagManagementType
}


input DeleteContactNoteInput {
  id: String!
  contactId: String!
}


input CreateContactNoteInput {
  contactId: String!
  """*Max length: 255*"""
  message: String!
}


input CreateContactConversationInput {
  contactId: String!
  message: String!
}


input CreateImportInput {
  audienceId: String!
  dataFileId: String!
  groups: [String!]
  columns: [DataColumnInput!]!
  deleteArea: ImportDeleteArea
  update: Boolean!
  unsubscribe: Boolean!
  markUndeliverable: Boolean
  skipFirstRow: Boolean!
  """*Max length: 320*"""
  confirmEmail: String!
  delimiter: ValueDelimiter!
}


input DeleteGroupInput {
  id: String!
  audienceId: String!
  deleteType: GroupDeleteType!
}


input UpdateGroupInput {
  id: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  isPublic: Boolean
  isDynamic: Boolean
  criteria: ConditionGroupInput
  audienceId: String!
}


input CreateGroupInput {
  """*Max length: 100*"""
  name: String!
  """*Max length: 255*"""
  description: String
  isPublic: Boolean!
  isDynamic: Boolean!
  criteria: ConditionGroupInput
  audienceId: String!
}


input CreateExportInput {
  audienceId: String!
  """*Max length: 100*"""
  name: String!
  """*Max length: 320*"""
  notificationEmail: String!
  delimiter: ValueDelimiter!
  contactStatus: ContactStatus
  entireList: Boolean!
  allFields: Boolean!
  allBehaviors: Boolean!
  groupIds: [String!]
  fields: [String!]
  behaviors: [ContactBehavior!]
}


input DeleteDataFieldCategoryInput {
  id: String!
  audienceId: String!
}


input UpdateDataFieldCategoryInput {
  id: String!
  audienceId: String!
  categoryName: String!
}


input CreateDataFieldCategoryInput {
  audienceId: String!
  categoryName: String!
}


"""Service plan credit blocks available for purchase"""
type ServicePlanCredit {
  """Unique credit block ID"""
  id: String!
  """Number of credits in block"""
  qty: Float!
  """Fee to purchase block of credits"""
  fee: Float!
}


input DeleteDataFieldInput {
  id: String!
  audienceId: String!
}


input UpdateDataFieldInput {
  id: String!
  dataType: DataType
  """*Max length: 50*"""
  category: String
  """*Max length: 50*"""
  labelText: String
  """*Max length: 200*"""
  description: String
  labelTranslations: LabelsInput
  required: Boolean
  isGdprField: Boolean
  isPublic: Boolean
  """*Max length: 50*"""
  mergeTag: String
  """*Max length: 255*"""
  defaultValue: String
  minNbr: Decimal
  maxNbr: Decimal
  minUtc: DateTime
  maxUtc: DateTime
  audienceId: String!
}


input CreateDataFieldInput {
  dataType: DataType!
  """*Max length: 50*"""
  category: String
  """*Max length: 50*"""
  labelText: String!
  """*Max length: 200*"""
  description: String
  labelTranslations: LabelsInput
  required: Boolean!
  isGdprField: Boolean!
  isPublic: Boolean!
  """*Max length: 50*"""
  mergeTag: String
  """*Max length: 255*"""
  defaultValue: String
  minNbr: Decimal
  maxNbr: Decimal
  minUtc: DateTime
  maxUtc: DateTime
  audienceId: String!
}


input DeleteAudienceSecurityRoleInput {
  securityRoleId: String!
  audienceId: String!
}


input CreateAudienceSecurityRoleInput {
  securityRoleId: String!
  audienceId: String!
}


input PreviewDoubleOptInInput {
  id: String!
  contactId: String
  mockContact: MockContactInput
}


input UpdateAudienceInput {
  id: String!
  """
  List of key fields used to generated a contact's unique identifier. Each value must be a valid system field merge tag or a datafield id.
  """
  keyFields: [String!]
  """*Max length: 100*"""
  name: String
  """*Max length: 100*"""
  gdprTitle: String
  """*Max length: 255*"""
  gdprDescription: String
  """*Max length: 255*"""
  gdprLegalTerms: String
  mailDomainId: String
  """*Max length: 50*"""
  tags: [String!]
  """*Max length: 255*"""
  companyName: String
  """*Max length: 100*"""
  streetAddress: String
  """*Max length: 50*"""
  streetAddress2: String
  """*Max length: 100*"""
  addressLocality: String
  """*Max length: 100*"""
  addressRegion: String
  """*Max length: 15*"""
  postalCode: String
  """*Max length: 100*"""
  addressCountry: String
  """*Max length: 25*"""
  phone: String
  """*Max length: 50*"""
  defaultFromName: String
  """*Max length: 320*"""
  defaultFromEmail: String
  requireDoubleOptIn: Boolean
  doubleOptIn: UpdateDoubleOptInInput
}


input CreateAudienceInput {
  """*Max length: 100*"""
  name: String!
  """*Max length: 100*"""
  gdprTitle: String
  """*Max length: 255*"""
  gdprDescription: String
  """*Max length: 255*"""
  gdprLegalText: String
  mailDomainId: String
  """*Max length: 50*"""
  tags: [String!]
  """*Max length: 255*"""
  companyName: String!
  """*Max length: 100*"""
  streetAddress: String!
  """*Max length: 50*"""
  streetAddress2: String
  """*Max length: 100*"""
  addressLocality: String!
  """*Max length: 100*"""
  addressRegion: String!
  """*Max length: 15*"""
  postalCode: String!
  """*Max length: 100*"""
  addressCountry: String!
  """*Max length: 25*"""
  phone: String!
  securityRoleIds: [String!]
}


input SendTemplateTestInput {
  """
  If an id is passed, the saved content for the template will be used in the test.
  """
  id: String
  """*Max length: 500*"""
  subject: String!
  """*Max length: 255*"""
  fromText: String
  """*Max length: 320*"""
  fromEmail: String
  """
  Value can be a single email address or a comma delimited list of email addresses.
  """
  recipients: String
  audienceGroups: [String!]
  contents: [SendTemplateTestContentInput!]
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
}


input PreviewSystemTemplateInput {
  templateId: String
  """
  The type is only used if the template id is null or 0 and the type is not null.
  """
  type: TemplateType
  contactId: String
  audienceId: String
  mockContact: MockContactInput
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
}


input PreviewTemplateInput {
  templateId: String!
  contactId: String
  audienceId: String
  mockContact: MockContactInput
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
}


type PreviewTemplateOutput {
  mimeType: MimeType
  preRenderJsonString: String
  finalContent: String
}


input UpdateTemplateInput {
  id: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  """*Max length: 50*"""
  tags: [String!]
  contentBodies: [UpdateTemplateContentInput!]
}


input CreateTemplateInput {
  type: TemplateType
  referenceTemplateId: String
  """*Max length: 100*"""
  name: String!
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes).
  """
  language: String!
  description: String
  listId: String
  """*Max length: 50*"""
  tags: [String!]
}


input CreateTransactionInput {
  """
  Specify a name to group similar email types for better reporting. For example, 'order confirmations'. Max length: 100 characters
  """
  groupName: String
  """
  Settings that control various options and behaviors of a transactional email.
  """
  settings: TransactionSettingsInput!
  """
  Collection of one or more tags associated with a transaction for tag-based reporting. Max length per tag: 50 characters
  """
  tags: [String!]
  """
  Collection of meta data (aka reference data) used for both standard and custom report. Max length: Name: 50 characters, Value: 255 characters.
  """
  metadata: [NameValueInput!]
  """Object used to define various header-related settings."""
  header: TransactionHeaderInput!
  """
  Object used to populate one-or more content types (ie. HTML, text, AMP, etc.) that will be sent as the body of the email.
  """
  content: TransactionContentInput!
  """
  Collection of dynamic data that will be merged into the content and/or header of the email based on the variable name. Max length: Name: 50 characters, Value: 50 characters.
  """
  variables: [NameValueInput!]
  """Collection of recipients that will receive the email"""
  recipients: [TransactionRecipientInput!]!
}


type TransactionResponse {
  transactionId: String!
  requestId: String!
  emailAddress: String!
  errorCode: String!
  errorMsg: String!
}


input DeleteTagInput {
  """50 character limit"""
  tagName: String!
}


input UpdateTagInput {
  """50 character limit"""
  oldTagName: String!
  """50 character limit"""
  newTagName: String!
}


input CreateTagInput {
  """50 character limit"""
  tagName: String!
}


"""Service plan feature used to configure Tarvent"""
type ServicePlanFeature {
  """Name of feature"""
  name: String!
  """Description of feature"""
  description: String!
  """Feature limit if applicable"""
  limit: String
  """Description of limit if applicable"""
  limitDescription: String!
  """Internal use only"""
  _do: Int!
}


input CreateUserInviteInput {
  """*Max length: 100*"""
  firstName: String!
  """*Max length: 100*"""
  lastName: String!
  """*Max length: 320*"""
  emailAddress: String!
  securityRoleIds: [String!]!
  """
  Used for dynamic branding/authentication within the invite email. *Max length: 100*
  """
  cId: String
  """*Max length: 255*"""
  message: String
  """
  Indicates whether the user is a partner user (not employee) for the account. Defaults to false.
  """
  isPartner: Boolean
  """
  Indicates whether the user is a billing contact for the account. Defaults to false.
  """
  isBillingContact: Boolean
  """
  Indicates whether the user should receive account level communication. Defaults to false.
  """
  isAccountContact: Boolean
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
}


input DeleteAccountUserInput {
  id: String!
  accountId: String!
}


input RequestAccountAccessInput {
  """*Max length: 320*"""
  adminEmailAddress: String!
  """*Max length: 255*"""
  message: String
}


input UpdateUserInput {
  id: String!
  """*Max length: 100*"""
  firstName: String
  """*Max length: 100*"""
  lastName: String
  """*Max length: 25*"""
  phoneNumber: String
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  isActive: Boolean
  isBillingContact: Boolean
  isAccountContact: Boolean
  """
  Must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to "Auto".
  """
  timezone: String
  theme: AppTheme
  """Notification preferences for the account id passed"""
  notificationPreferences: [UserNotificationPreferenceInput!]
}


input UpdateDomainInput {
  id: String!
  """Tracking domains only"""
  trackingEnabled: Boolean
  """Tracking domains only"""
  includedPaths: [String!]
  """Tracking domains only"""
  excludedPaths: [String!]
}


input CreateDomainInput {
  """*Max length: 255*"""
  domain: String!
  type: DomainType!
  """Sending domains only"""
  isStrict: Boolean
  """Tracking domains only"""
  trackingEnabled: Boolean
  """Tracking domains only"""
  includedPaths: [String!]
  """Tracking domains only"""
  excludedPaths: [String!]
}


"""Input type for *UpdatePaymentMethod*"""
input UpdatePaymentMethodInput {
  """
  Credit card information used for future payments using this payment method. Will only be used if payment method is a Credit Card.
  """
  creditCardInfo: UpdateCreditCardInfoInput
  """
  Billing address information used for future payments using this payment method.
  """
  billingAddress: UpdateBillingAddressInput
}


"""Input type for *CreatePaymentMethod*"""
input CreatePaymentMethodInput {
  """
  Credit card information used for future payments using this payment method. Refer to the **updatePaymentMethod** mutation for information on updating the payment method.
  """
  creditCardInfo: AddCreditCardInfoInput!
  """
  Billing address information used for future payments using this payment method. Refer to the **updatePaymentMethod** mutation for information on updating the payment method if the billing address changes.
  """
  billingAddress: AddBillingAddressInput!
}


type AddOnPriceSummary {
  id: String
  type: AddOnType!
  credits: Int!
  creditPrice: Float!
  """Only set for Transaction Email add-on"""
  storageDays: Int!
  """Only set for Transaction Email add-on"""
  storageDaysPrice: Float!
  totalPrice: Float!
  effectiveUtc: DateTime!
}


"""Summary of estimate results."""
type Estimate {
  """True when change is applied at end of term."""
  isNextInvoice: Boolean!
  """Type of plan change"""
  planChange: PlanChangeType!
  """Total cost before discounts are applied."""
  subtotal: Float!
  """Total discounts for plan with addons."""
  discountAmount: Float!
  """Total cost after discounts are applied."""
  totalAmount: Float!
  """Total credits applied."""
  creditApplied: Float!
  """Amount due after discounts and credits are applied."""
  amountDue: Float!
  """Currency code used for payment."""
  currencyCode: String!
  """True if coupon code provided is valid."""
  isValidCoupon: Boolean!
  """Information about current plan."""
  currentPlan: PlanInfo
  """Information about next plan."""
  nextPlan: PlanInfo!
  """Collection of coupons applied."""
  coupons: [EstCoupon!]!
  """Collection of addons included with plan charges."""
  addOns: [AddOnPriceSummary!]!
}


input AddOnInfoInput {
  id: String!
  quantity: Int!
  storageDays: Int
}


"""Change plan result"""
type ChgPlanResult {
  """Amount paid from payment method."""
  amountPaid: Float!
  """Payment status"""
  paymentStatus: PaymentStatus!
  """Type of plan change"""
  planChange: PlanChangeType!
}


enum PlanType {
  EMAIL_MARKETING
}


type DowngradeCheckResult {
  """Indicates if account is eligible for downgrade."""
  eligibleForDowngrade: Boolean!
  """
  Collection of errors preventing account from being elible for downgrade.
  """
  errors: [DowngradeResultError!]!
}


"""Input type for *DeleteUserAccountGroup*"""
input DeleteUserSecurityRoleInput {
  """
  ID of user to associate. Refer to the **Users** query to get a list of users associated with the account. *Max length: 19*
  """
  id: String!
  """
  ID of group of associate user with. Refer to the **accountGroups** query to get a list of groups. *Max length: 19*
  """
  groupId: String!
}


"""Input type for *CreateUserAccountGroup*"""
input CreateUserSecurityRoleInput {
  """
  ID of user to associate. Refer to the **Users** query to get a list of users associated with the account. *Max length: 19*
  """
  id: String!
  """
  ID of security role of associate user with. Refer to the **accountGroups** query to get a list of groups. *Max length: 19*
  """
  securityRoleId: String!
}


"""Input type for *UpdateSecurityRole*"""
input UpdateSecurityRoleInput {
  id: String!
  """Unique name to reference the role. *Max length: 100*"""
  name: String
  """
  Internal description typically used to define the purpose of the role. *Max length: 255*
  """
  description: String
  """
  List of permissions, in the form of permission key names, that will be granted to the role. The keys are defined by the system. Refer to the **permissions** query to retrieve permission keys.
  """
  permissionKeys: [String!]
  """
  List of audience IDs that the group will have access to. Refer to the **audiences** query to retrieve all audiences for the account.
  """
  audiences: [String!]
}


"""Input type for *CreateAccountGroup*"""
input CreateSecurityRoleInput {
  """Unique name to reference the group. *Max length: 100*"""
  name: String!
  """
  Internal description typically used to define the purpose of the group. *Max length: 255*
  """
  description: String
  """
  List of permissions, in the form of permission key names, that will be granted to the group. The keys are defined by the system. Refer to the **permissions** query to retrieve permission keys.
  """
  permissionKeys: [String!]!
  """
  List of audience IDs that the group will have access to. Refer to the **audiences** query to retrieve all audiences for the account.
  """
  audiences: [String!]
}


input CheckAliasInput {
  alias: String!
}


"""Input type for *UpdateAccount*"""
input UpdateAccountInput {
  """ID of user who owns the account. *Max length: 255*"""
  ownerId: String
  """Unique name to reference the account. *Max length: 255*"""
  name: String
  """Street address associated with the account. *Max length: 100*"""
  streetAddress: String
  """Street address 2 associated with the account. *Max length: 50*"""
  streetAddress2: String
  """Address locality associated with the account. *Max length: 100*"""
  addressLocality: String
  """Address region associated with the account. *Max length: 100*"""
  addressRegion: String
  """Postal code associated with the account. *Max length: 15*"""
  postalCode: String
  """Address country associated with the account. *Max length: 100*"""
  addressCountry: String
  """Phone number associated with the account. *Max length: 25*"""
  phone: String
  """URL of the business website. *Max length: 255*"""
  website: String
  """
  Must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to "Auto".
  """
  timezone: String
  """Unique alias for tracking urls. *Max length: 50*"""
  trackingAlias: String
  """
  Unique alias for pages urls (pages, surveys, and forms).  *Max length: 50*
  """
  pagesAlias: String
  """Unique alias for Tarvent application. *Max length: 50*"""
  applicationAlias: String
  """Default mail domain for the account."""
  mailDomainId: String
  """
  Maximum amount of hard bounces a contact can have before being marked as undeliverable.
  """
  hardBounceLimit: Int
  """
  Maximum amount of soft bounces a contact can have before being marked as undeliverable.
  """
  softBounceLimit: Int
}


"""Input type for *CreateAccount*"""
input CreateAccountInput {
  """Unique name to reference the account. *Max length: 255*"""
  name: String!
  """Street address associated with the account. *Max length: 100*"""
  streetAddress: String!
  """Street address 2 associated with the account. *Max length: 50*"""
  streetAddress2: String
  """Address locality associated with the account. *Max length: 100*"""
  addressLocality: String!
  """Address region associated with the account. *Max length: 100*"""
  addressRegion: String!
  """Postal code associated with the account. *Max length: 15*"""
  postalCode: String!
  """Address country associated with the account. *Max length: 100*"""
  addressCountry: String!
  """Phone number associated with the account. *Max length: 25*"""
  phone: String
  """URL of the business website. *Max length: 255*"""
  website: String
  """
  Must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to "Auto".
  """
  timezone: String
  facts: String
  """ID of affiliate enrolled in affiliate program"""
  affiliateId: String
  """Internal Use only"""
  partnerId: String
  """Internal Use only"""
  pAC: String
}


type ArtitelliBalance {
  tokensRemaining: Int!
}


enum AIContentType {
  SUBJECT
  SENTENCE
  PARAGRAPH
}


type CustomReportJob {
  id: String!
  createdUtc: DateTime!
  deletedUtc: DateTime
  downloadUrl: String
  status: CustomReportJobStatus!
}


type tvaf {
  kc: UUID!
  limit: String
}


"""Information about current or next plan"""
type AccountPlanInfo {
  """Plan id"""
  id: String!
  """Plan name"""
  name: String!
  """Number of period units withing a billing cycle"""
  period: Int!
  """Period duration within a billing cycle"""
  periodUnit: String!
  """Start date of the current billing period"""
  startUtc: DateTime!
  """End date of the current billing period"""
  endUtc: DateTime!
  """Plan add ons"""
  addOns: [AccountPlanAddOn!]!
  """Indicates if the plan is a trial plan"""
  isTrial: Boolean!
  """Plan change type"""
  pendingChangeType: PlanChangeType
  """True if there are invoices that are due."""
  hasDueInvoices: Boolean!
  """True if overages are allowed."""
  overageEnabled: Boolean!
  """True if autoscaling plan is allowed."""
  autoScaleEnabled: Boolean!
  """
  This the minimum number of items (contacts or transactions) allowed within the current scale range. Based on last billing period usage.
  """
  tierMinLimit: Int!
  """
  This the maximum number of items (contacts or transactions) allowed within the current scale range. Based on last billing period usage.
  """
  tierMaxLimit: Int!
  """
  This the minimum number of items (contacts or transactions) allowed within the current scale range.
  """
  nextTierMinLimit: Int!
  """
  This the maximum number of items (contacts or transactions) allowed within the current scale range.
  """
  nextTierMaxLimit: Int!
  """Quantity of items"""
  quantity: Int!
  """Cost of plan"""
  amount: Float!
  """Quantity of overage items"""
  overageQuantity: Int!
  """Overage cost of plan"""
  overageAmount: Float!
}


input GetSavedSearchInput {
  id: String!
  audienceId: String!
}


type SavedSearch {
  id: String!
  name: String!
  description: String!
  criteria: ConditionGroup!
}


enum InvoiceStatus {
  """Invoice paid in full"""
  PAID
  """Invoice pending payment processing"""
  PENDING
  """Payment for invoice failed"""
  PAYMENT_FAILED
}


input GetJourneyConversionContactsInput {
  id: String!
  journeyId: String!
  startUtc: DateTime
  endUtc: DateTime
  minuteOffset: Int
}


input GetJourneyGoalContactsInput {
  id: String!
  journeyId: String!
  startUtc: DateTime
  endUtc: DateTime
  minuteOffset: Int
}


input GetJourneySiteNotificationInput {
  id: String!
  audienceId: String!
}


type JourneySiteNotificationInfo {
  id: String!
  name: String
  description: String
  journeyId: String!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


input GetJourneyNodeInput {
  id: String!
  journeyId: String!
}


type JourneySiteNotificationStats {
  id: String!
  name: String
  description: String
  modifiedUtc: DateTime!
  viewCount: Int!
  contactCount: Int!
  dailyStats: [JourneySiteNotificationDailyStats!]
}


type JourneySiteNotification {
  id: String!
  name: String
  description: String
  modifiedUtc: DateTime!
  contactCount: Int!
  viewCount: Int!
  dismissedCount: Int!
}


type JourneyActivity {
  eventUtc: DateTime!
  count: Int!
}


input GetJourneyCampaignStatsInput {
  campaignId: String
  combinationId: String
  id: String!
  minuteOffset: Int!
  startUtc: DateTime!
  endUtc: DateTime!
}


type JourneyCampaignStats {
  nodeId: String
  nodeName: String
  nodeModifiedUtc: DateTime!
  campaignId: String
  totalSent: Int!
  uniqueSuppressed: Int!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  totalClicks: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  clickToOpenPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  totalReplies: Int!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  totalProfile: Int!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  totalSTF: Int!
  uniqueSTF: Int!
  uniqueSTFPct: Float!
  totalSocialShare: Int!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  totalSTFOptIn: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  senderReputation: Float!
  engagementScore: Float!
  senderReputationAvg: Float!
  engagementScoreAvg: Float!
}


input JourneyStatsInput {
  id: String!
  minuteOffset: Int!
  startUtc: DateTime!
  endUtc: DateTime!
}


type JourneyContactStats {
  activeRate: Float!
  active: Int!
  entries: Int!
  completionRate: Float!
  completed: Int!
  exitRate: Float!
  exited: Int!
}


input GetAllJourneyContactsInput {
  id: String!
  """Contact criteria"""
  criteria: ConditionGroupInput
  journeyNodeId: String
  journeyContactMangType: JourneyContactMangType
  startUtc: DateTime
  endUtc: DateTime
  minuteOffset: Int
}


type TransactionSoftwareStats {
  software: SoftwareType!
  requests: Int!
  transactions: Int!
  created: Int!
  processed: Int!
  hardBounce: Int!
  softBounce: Int!
  softSenderAuth: Int!
  softIp: Int!
  softDns: Int!
  block: Int!
  blockContent: Int!
  blockSender: Int!
  declined: Int!
  invalidEmail: Int!
  delivered: Int!
  opens: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  clicks: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueOptOut: Int!
  uniqueComplaints: Int!
  feedback: Int!
  uniqueFeedback: Int!
  rating: Int!
  uniqueRating: Int!
  viewOnline: Int!
  uniqueViewOnline: Int!
}


type TransactionDeviceStats {
  device: DeviceType!
  requests: Int!
  transactions: Int!
  created: Int!
  processed: Int!
  hardBounce: Int!
  softBounce: Int!
  softSenderAuth: Int!
  softIp: Int!
  softDns: Int!
  block: Int!
  blockContent: Int!
  blockSender: Int!
  declined: Int!
  invalidEmail: Int!
  delivered: Int!
  opens: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  clicks: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueOptOut: Int!
  uniqueComplaints: Int!
  feedback: Int!
  uniqueFeedback: Int!
  rating: Int!
  uniqueRating: Int!
  viewOnline: Int!
  uniqueViewOnline: Int!
}


type TransactionPerformanceSoftwareStats {
  software: SoftwareType!
  uniqueOpens: Int!
  totalOpens: Int!
  uniqueOpenPct: Float!
  uniqueClicks: Int!
  totalClicks: Int!
  uniqueClickPct: Float!
}


type TransactionPerformanceDeviceStats {
  device: DeviceType!
  uniqueOpens: Int!
  totalOpens: Int!
  uniqueOpenPct: Float!
  uniqueClicks: Int!
  totalClicks: Int!
  uniqueClickPct: Float!
}


type TransactionPerformanceBounceStats {
  domain: String
  totalSent: Int!
  uniqueHardBounc: Int!
  uniqueHardBouncePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  uniqueSoftSenderAuth: Int!
  uniqueSoftSenderAuthPct: Float!
  uniqueSoftIp: Int!
  uniqueSoftIpPct: Float!
  uniqueSoftDns: Int!
  uniqueSoftDnsPct: Float!
  uniqueBlock: Int!
  uniqueBlockPct: Float!
  uniqueContentBlock: Int!
  uniqueContentBlockPct: Float!
  uniqueSenderBlock: Int!
  uniqueSenderBlockPct: Float!
}


type TransactionPerformace {
  totalSent: Int!
  uniqueSuppressed: Int!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  totalClicks: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  clickToOpenPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  totalReplies: Int!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  totalProfile: Int!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  totalSTF: Int!
  uniqueSTF: Int!
  uniqueSTFPct: Float!
  totalSocialShare: Int!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  totalSTFOptIn: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  senderReputation: Float!
  engagementScore: Float!
}


"""
The possible email events that can be triggered by both transactional and marketing emails
"""
enum EmailEventType {
  """Successfully received email by the receiving mail server."""
  DELIVERED
  """An email was opened as detected by downloading images within an email."""
  OPEN
  """A link was clicked."""
  CLICK
  """Contact replied."""
  REPLIED
  """A rating was provided."""
  RATING
  """
  A transactional email send request was successfully created for processing.
  """
  CREATED
  """A transaction email send request was processed and an email was sent."""
  PROCESSED
  """The email was viewed online."""
  VIEW_ONLINE
  """The email was shared on social media."""
  SOCIAL_SHARE
  """The email was manually forwarded to another recipient."""
  FORWARD
  """The email was forwarded to a friend using Forward-To-Friends features."""
  FORWARD_TO_FRIEND
  """
  The recipient viewed their profile by clicking a link within the email.
  """
  VIEW_PROFILE
  """The recipient printed a copy of the email."""
  PRINT
  """The person who the recipient forwarded the email to opted in."""
  FRIEND_OPTIN
  """There was an issue processing content for the email."""
  CONTENT_ERROR
  """
  The email was not delivered due to a permanent hard bounce error such as a *Mailbox does not exist* error.
  """
  HARD
  """
  The email was not delivered due to a temporary soft bounce error such as a *Mailbox is full* error. This error is only logged after multiple attempts have been made to deliver the email.
  """
  SOFT
  """
  The email was not delivered due to a temporary soft bounce error resulting from an email authentication issue such as DMARC or DKIM.
  """
  SOFT_SENDER_AUTH
  """
  The email was not delivered due to a temporary soft bounce error resulting from the sending mail server's IP being blocked. Our deliverability specialist monitor these errors closely.
  """
  SOFT_IP
  """
  The email was not delivered due to a temporary soft bounce error resulting from the recipient's email domain having DNS issues.
  """
  SOFT_DNS
  """Only used for event type contacts within reports."""
  ALL_BOUNCES
  """
  The email was not delivered due to a temporary soft bounce error resulting from a block for unknown reasons.
  """
  BLOCK
  """
  The email was not delivered due to a temporary soft bounce error resulting from a block because of the email content.
  """
  BLOCK_CONTENT
  """
  The email was not delivered due to a temporary soft bounce error resulting from a block because of the sending domain or email content.
  """
  BLOCK_SENDER
  """
  The system was not able to deliver the transactional email due to invalid data.
  """
  DECLINED
  """
  The system was not able to deliver the transactional email due an invalid email address.
  """
  INVALID_EMAIL
  """
  The system was not able to deliver the transactional due to the recipient's email address being suppressed.
  """
  SUPPRESSED
  """The recipient reported the email as SPAM."""
  COMPLAINT
  """
  The recipient unsubscribed from a list using a link within an email received.
  """
  UNSUBSCRIBED
}


type AccountInvoiceLineItemInfo {
  """Description of service being invoiced for"""
  description: String!
  """Service type fee rate"""
  rate: Float!
  """Number of items for the respective service type"""
  qty: Float!
  """Total amount due for this line item"""
  amount: Float!
  """Indicates whether line item is a discount or not"""
  isDiscount: Boolean!
  """Service period start date/time"""
  billPeriodStartUtc: DateTime!
  """Service period end date/time"""
  billPeriodEndUtc: DateTime!
}


input GetLandingPageStatsInput {
  campaignId: String
  id: String!
  startUtc: DateTime
  endUtc: DateTime
  hourOffset: Int
  minuteOffset: Int
  includeDetails: Boolean
}


input GetLandingPageActionStatsInput {
  campaignId: String
  id: String!
  startUtc: DateTime!
  endUtc: DateTime!
  hourOffset: Int
  minuteOffset: Int
}


input GetSurveyQuestionInput {
  """
  Used to filter question stats on submissions generated from a campaign.
  """
  campaignId: String
  id: String!
  parentId: String!
}


input GetSurveyStatsInput {
  campaignId: String
  id: String!
  startUtc: DateTime
  endUtc: DateTime
  hourOffset: Int
  minuteOffset: Int
  includeDetails: Boolean
}


input GetSurveyActionStatsInput {
  campaignId: String
  id: String!
  startUtc: DateTime!
  endUtc: DateTime!
  hourOffset: Int
  minuteOffset: Int
}


type LanguageInfo {
  language: String
  name: String
}


type State {
  code: String
  name: String
}


type Country {
  code: String
  name: String
}


type KeyValuePairOfStringAndStringValues {
  key: String!
  value: [String]!
}


input GetVideoThumbnailInput {
  videoSource: VideoSource!
  imageIndex: Int!
  videoId: String!
}


input GetContentVariationInput {
  campaignId: String!
  contentVariationId: String!
  versionId: Float
}


input GetContentVariationVersionsInput {
  campaignId: String!
  contentVariationId: String!
}


input CampaignHistoryInput {
  startUtc: DateTime!
  endUtc: DateTime!
  hourOffset: Int
  minuteOffset: Int
}


type CampaignHistory {
  overviewStats: CampaignHistoryOverviewStats!
  campaignHistoryStats: [CampaignHistoryStats!]!
}


input GetCampaignContactEventTypeStatsInput {
  id: String!
  combinationId: String
  eventType: EmailEventType!
  sortDirection: SortDirection
  sortField: String
  pageSize: Int!
  page: Int!
  emailAddress: String
  linkId: String
}


type CampaignContactEventTypeStats {
  contactId: String!
  status: ContactStatus!
  audienceId: String!
  eventType: EmailEventType!
  serverResponse: String
  emailAddress: String
  tags: String
  pageNumber: Int!
  totalNbrPages: Int!
  totalRecords: Int!
}


type CampaignStats {
  campaignId: String
  totalSent: Int!
  uniqueSuppressed: Int!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  totalClicks: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  clickToOpenPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  totalReplies: Int!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  totalProfile: Int!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  totalSTF: Int!
  uniqueSTF: Int!
  uniqueSTFPct: Float!
  totalSocialShare: Int!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  totalSTFOptIn: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  senderReputation: Float!
  engagementScore: Float!
  senderReputationAvg: Float!
  engagementScoreAvg: Float!
}


type CampaignSocialShareStats {
  socialNetwork: SocialPlatform!
  totalShares: Int!
  totalNetworkShares: Int!
  totalNetworkSharesPct: Int!
  uniqueNetworkShares: Int!
  uniqueNetworkSharesPct: Int!
}


type CampaignSoftwareStats {
  software: SoftwareType!
  allOpens: Int!
  totalOpens: Int!
  totalOpenPct: Float!
  uniqueOpens: Int!
  uniqueOpenPct: Float!
  allClicks: Int!
  totalClicks: Int!
  totalClicksPct: Float!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
}


type CampaignDeviceStats {
  device: DeviceType!
  allOpens: Int!
  totalOpens: Int!
  totalOpenPct: Float!
  uniqueOpens: Int!
  uniqueOpenPct: Float!
  allClicks: Int!
  totalClicks: Int!
  totalClicksPct: Float!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
}


input CampaignStatsInput {
  id: String!
  combinationId: String
  """Only used for RSS campaigns"""
  startUtc: DateTime
  """Only used for RSS campaigns"""
  endUtc: DateTime
}


type CampaignBounceTypeStats {
  totalBounces: Int!
  hBGeneral: Int!
  hBGeneralPct: Float!
  sBGeneral: Int!
  sBGeneralPct: Float!
  sBSenderAuth: Int!
  sBSenderAuthPct: Float!
  sBIpBlock: Int!
  sBIpBlockPct: Float!
  sBDNS: Int!
  sBDNSPct: Float!
  sBBlock: Int!
  sBBlockPct: Float!
  sBBlockContent: Int!
  sBBlockContentPct: Float!
  sBBlockSender: Int!
  sBBlockSenderPct: Float!
}


input GetCampaignBounceTypeByDomainStatsInput {
  id: String!
  combinationId: String
  domain: String
}


type CampaignBounceTypeByDomainStats {
  domain: String
  domainBounces: Int!
  totalBounces: Int!
  hBGeneral: Int!
  hBGeneralPct: Float!
  sBGeneral: Int!
  sBGeneralPct: Float!
  sBSenderAuth: Int!
  sBSenderAuthPct: Float!
  sBIpBlock: Int!
  sBIpBlockPct: Float!
  sBDNS: Int!
  sBDNSPct: Float!
  sBBlock: Int!
  sBBlockPct: Float!
  sBBlockContent: Int!
  sBBlockContentPct: Float!
  sBBlockSender: Int!
  sBBlockSenderPct: Float!
}


input CampaignCombinationStatsInput {
  id: String!
  """Only used for Journey campaigns"""
  startUtc: DateTime
  """Only used for Journey campaigns"""
  endUtc: DateTime
  """Only used for Journey campaigns"""
  minuteOffset: Int
}


type CampaignCombinationStats {
  id: String!
  fromName: String!
  fromEmail: String!
  subject: String!
  contentThumbnailUrl: String!
  totalSent: Int!
  uniqueSuppressed: Int!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  totalClicks: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  clickToOpenPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  totalReplies: Int!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  totalProfile: Int!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  totalSTF: Int!
  uniqueSTF: Int!
  uniqueSTFPct: Float!
  totalSocialShare: Int!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  totalSTFOptIn: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  senderReputation: Float!
  engagementScore: Float!
  senderReputationAvg: Float!
  engagementScoreAvg: Float!
}


"""RSS Feed Information and Items"""
type RSSFeed {
  """RSS feed title"""
  title: String
  """RSS feed description. Can contain HTML."""
  description: String
  """RSS feed description text. HTML is stripped out of value."""
  descriptionText: String
  """RSS feed categories."""
  categories: [String]
  """RSS feed copyright information"""
  copyright: String
  """Total count of items available in the RSS feed."""
  totalItemCount: Int!
  """
  Indicates whether or not the feed has any changes since the last check.
  """
  changesDetected: Boolean!
  """
  Collection of items from the RSS feed. Each item has standard fields (title, description, image url, etc.) as well as feed specific fields. Feed specific fields start with 'fd-'.
  """
  items: [RSSFeedItem]
}


type CampaignLink {
  id: String!
  url: String!
  track: Boolean!
  feedItem: Boolean!
  formType: FormType
  entityType: EntityType
  entityName: String
}


input GetContentBlockContentInput {
  id: String!
  versionId: Float
}


type ContentBlock {
  id: String!
  folderId: String!
  name: String!
  language: String
  description: String
  editorType: EditorType
  type: ContentBlockType
  createdUtc: DateTime!
  modifiedUtc: DateTime!
  publishedUtc: DateTime
  versionInfo: ContentBlockVersions!
  tags: [String!]
  contentBodies: [ContentBlockContent!]
}


input GetArticleContentInput {
  id: String!
  versionId: Float
}


type Article {
  id: String!
  folderId: String!
  name: String!
  title: String
  language: String
  defaultLayout: ArticleDefaultLayout
  description: String
  createdUtc: DateTime!
  modifiedUtc: DateTime!
  publishedUtc: DateTime
  versionInfo: ArticleVersions!
  tags: [String!]
  contentBodies: [ArticleContent!]
}


type File {
  id: String!
  name: String!
  publicUrl: String!
  thumbnailUrl: String
  size: Int!
  type: FileType!
  uploadedUtc: DateTime!
  tags: [String!]!
}


input GetQuestionInput {
  id: String!
  parentId: String!
}


input GetStatsInput {
  id: String!
  startUtc: DateTime
  endUtc: DateTime
  hourOffset: Int
  minuteOffset: Int
  includeDetails: Boolean
}


type StatsResponse {
  summary: Stat
  data: [Stat!]!
}


input GetActionStatsInput {
  id: String!
  startUtc: DateTime!
  endUtc: DateTime!
  hourOffset: Int
  minuteOffset: Int
}


type ActionStats {
  name: String!
  totalCount: Int!
  uniqueCount: Int!
  isCta: Boolean!
}


input GetFormInput {
  id: String!
  """Required if IsSurvey is set to 'false'."""
  audienceId: String
}


input AllSubscriberEventsByDayInput {
  id: String!
  startUtc: DateTime!
  endUtc: DateTime!
}


input GetAllContactsInput {
  audienceId: String!
  """Audience group or segment id"""
  groupId: String
  """Contact criteria"""
  criteria: ConditionGroupInput
}


input GetAllContactConversionsInput {
  id: String!
  audienceId: String!
}


input GetAllContactGoalsInput {
  id: String!
  audienceId: String!
}


input GetContactInput {
  id: String
  emailAddress: String
  audienceId: String
}


"""Service type associated with a service plan"""
enum ServiceType {
  """Monthly email marketing service"""
  EMAIL_MARKETING
  """Pay-As-You-Go email marketing service"""
  EMAIL_MARKETING_PREPAY
  """Monthly transactional email marketing service"""
  TRANSACTION
  """Pay-As-You-Go transactional email marketing service"""
  TRANSACTION_PREPAY
  """Monthly SMS (text messaging) marketing service"""
  SMS
  """Pay-As-You-Go SMS (text messaging) marketing service"""
  SMS_PREPAY
  FILE_STORAGE
  ADDITIONAL_IP
  PROFESSIONAL_SERVICES
  ADDITIONAL_SERVICES
  EMAIL_MARKETING_DISCOUNT
  EMAIL_MARKETING_PRE_PAY_DISCOUNT
  TRANSACTION_DISCOUNT
  TRANSACTION_PRE_PAY_DISCOUNT
  FEE
  RELAXED_DISCOUNT
  HIBERNATE_DISCOUNT
  GENERAL_DISCOUNT
}


input GetImportInput {
  id: String!
  audienceId: String!
}


input GetGroupInput {
  id: String!
  audienceId: String!
}


input GetExportInput {
  audienceId: String!
  id: String!
}


input GetAudienceStatsByDayInput {
  id: String!
  startUtc: DateTime!
  endUtc: DateTime!
}


input GetTemplateContentInput {
  id: String!
  versionId: Float
}


input GetTemplateTxVariablesInput {
  """
  If a template id and content bodies are passed, the content bodies will be ignore and only transaction variables from the template will be returned.
  """
  id: String
  contentBodies: [GetTemplateTxVarContentInput!]
}


input StatsInput {
  startUtc: DateTime!
  endUtc: DateTime!
}


type AccountListGrowthStats {
  growthThisMonth: Int!
  """Average for up to the last 6 months"""
  averageMonthlyGrowth: Float!
}


"""Account level stats by plan type."""
type AccountOverallStats {
  """Plan Id"""
  id: String
  """Plan type"""
  type: PlanType!
  """Sender reputation for this plan."""
  senderReputation: Float!
  """Engagement reputation for this plan."""
  engagementScore: Float!
  """Sender reputation for the account. This includes all plan types."""
  accountSenderReputation: Float!
  """Engagement reputation for the account. This includes all plan types."""
  accountEngagementScore: Float!
  """Amount of storage for the account."""
  storageBytes: Int!
  """
  Item count for plan. For transaction plans this represents to total amount of sent transaction (To, CC, and BCC recipients). For email marketing this represents the max contact count in the date range sent
  """
  itemCount: Int!
  """Account level stats by add-on type."""
  addOns: [AccountPlanAddOnStats]
}


"""
The possible statuses for various items such as subscriber notes and conversations
"""
enum Status {
  """Item is active and visible"""
  ACTIVE
  """Item is inactive not not accessible"""
  INACTIVE
  """Item is marked for deletion"""
  DELETED
}


type PaymentMethod {
  paymentMethodType: PaymentMethodType!
  creditCardInfo: PaymentMethodCreditCard
  bankAccountInfo: PaymentMethodBankAccount
}


type AccountEntity {
  entityType: EntityType!
  entityTypeName: String
  entityId: String!
  entityName: String
  parentEntityId: String
  parentEntityName: String
  modifiedUtc: DateTime!
}


input CreateActionWebhookInput {
  webhookUrl: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionWebhookInput {
  webhookUrl: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowWaitUntilInput {
  date: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowWaitUntilInput {
  date: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowWaitUntilConditionInput {
  waitLimit: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowWaitUntilConditionInput {
  waitLimit: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowWaitDateFieldInput {
  waitLimit: String
  dataFieldId: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowWaitDateFieldInput {
  waitLimit: String
  dataFieldId: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowWaitFieldChangeInput {
  dataFieldId: String
  waitLimit: String
  matchPattern: String
  fieldValue: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowWaitFieldChangeInput {
  dataFieldId: String
  waitLimit: String
  matchPattern: String
  fieldValue: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowDecisionSplitInput {
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowDecisionSplitInput {
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowRandomSplitInput {
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowRandomSplitInput {
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowEngagementSplitInput {
  campaignId: String
  event: TriggerCampaignEventType
  linkScope: String
  matchPattern: String
  deviceTypes: [DeviceType!]
  sharedOn: SocialPlatform
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowEngagementSplitInput {
  campaignId: String
  event: TriggerCampaignEventType
  linkScope: String
  matchPattern: String
  deviceTypes: [DeviceType!]
  sharedOn: SocialPlatform
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowJoinInput {
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowJoinInput {
  nextNodeId: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowGoToInput {
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowGoToInput {
  nextNodeId: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateFlowPathInput {
  percentage: Int
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowPathInput {
  percentage: Int
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input DeleteFlowPathInput {
  id: String!
}


input CreateTriggerAudienceInput {
  event: TriggerAudienceEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerAudienceInput {
  event: TriggerAudienceEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


type TriggerContactAdded implements JourneyNode {
  filter: ConditionGroup
  id: String!
  name: String
  description: String
  type: JourneyNodeType!
  terminatorType: TerminatorType
  previousNodeIds: [String!]
  nextNodeId: String
  isConfigured: Boolean!
  isDeleted: Boolean!
  statistics: NodeStatistics!
  errors: [Error!]!
  createdBy: String!
  createdUtc: DateTime!
  modifiedBy: String!
  modifiedUtc: DateTime!
}


input CreateTriggerContactAddedInput {
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerContactAddedInput {
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerCampaignInput {
  scope: String
  event: TriggerCampaignEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerCampaignInput {
  scope: String
  event: TriggerCampaignEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerConversionInput {
  """This is used to validate the conversion id passed."""
  conversionJourneyId: String
  conversionId: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerConversionInput {
  """This is used to validate the conversion id passed."""
  conversionJourneyId: String
  conversionId: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerCustomEventInput {
  eventKey: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerCustomEventInput {
  eventKey: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerDateInput {
  checkFrequency: String
  scope: JourneyNodeScope
  event: TriggerDateEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerDateInput {
  checkFrequency: String
  scope: JourneyNodeScope
  event: TriggerDateEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerEcommerceInput {
  event: TriggerEcommerceEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerEcommerceInput {
  event: TriggerEcommerceEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerFormInput {
  formId: String
  event: TriggerFormEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerFormInput {
  formId: String
  event: TriggerFormEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerGoalInput {
  """This is used to validate the goal id passed."""
  goalJourneyId: String
  goalId: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerGoalInput {
  """This is used to validate the goal id passed."""
  goalJourneyId: String
  goalId: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerManualInclusionInput {
  checkFrequency: String
  scope: JourneyNodeScope
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerManualInclusionInput {
  checkFrequency: String
  scope: JourneyNodeScope
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerPageInput {
  pageId: String
  referredFromFilter: String
  event: TriggerPageEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerPageInput {
  pageId: String
  referredFromFilter: String
  event: TriggerPageEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerRssInput {
  checkFrequency: String
  pageUrl: String
  event: TriggerRssEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerRssInput {
  checkFrequency: String
  pageUrl: String
  event: TriggerRssEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerSurveyInput {
  surveyId: String
  event: TriggerFormEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerSurveyInput {
  surveyId: String
  event: TriggerFormEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerWebpageInput {
  path: String
  referredFromFilter: String
  domainId: String
  event: TriggerWebpageEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerWebpageInput {
  path: String
  domainId: String
  referredFromFilter: String
  event: TriggerWebpageEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input CreateTriggerTransactionInput {
  groupName: String
  event: TriggerTransactionEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  previousNodeIds: [String!]
  nextNodeId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerTransactionInput {
  groupName: String
  event: TriggerTransactionEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
}


input MoveJourneyNodeInput {
  id: String!
  journeyId: String!
  pathId: String
  """Required when moving a node in an active journey."""
  activeContactAction: ActiveJourneyContactAction
  includeNodesAfter: Boolean
  previousNodeIds: [String!]
}


input CopyJourneyNodeInput {
  id: String!
  journeyId: String!
  includeNodesAfter: Boolean
  pathId: String
  previousNodeIds: [String!]
}


input DeleteJourneyNodeInput {
  id: String!
  keepPathId: String
}


input CreateCustomApiEventInput {
  """100 character limit"""
  name: String!
  """255 character limit"""
  description: String
}


input UpdateCustomApiEventInput {
  id: String!
  """100 character limit"""
  name: String
  """255 character limit"""
  description: String
}


input CreateSMSCampaignInput {
  """100 character limit"""
  name: String!
  """255 character limit"""
  description: String
  """15 character limit"""
  fromNumber: String!
  """255 character limit"""
  message: String
  """100 character limit"""
  subject: String
}


input UpdateSMSCampaignInput {
  id: String!
  """100 character limit"""
  name: String
  """255 character limit"""
  description: String
  """15 character limit"""
  fromNumber: String
  """255 character limit"""
  message: String
  """100 character limit"""
  subject: String
}


input CreateJourneyGoalInput {
  journeyId: String!
  """100 character limit"""
  name: String!
  """255 character limit"""
  description: String
  type: JourneyGoalType!
  conversionId: String
  filter: ConditionGroupInput
}


input UpdateJourneyGoalInput {
  id: String!
  journeyId: String!
  """100 character limit"""
  name: String
  """255 character limit"""
  description: String
  type: JourneyGoalType
  conversionId: String
  """Only used for GLOBAL goals"""
  filter: ConditionGroupInput
}


input CreateJourneyConversionInput {
  journeyId: String!
  """100 character limit"""
  name: String!
  """255 character limit"""
  description: String
  value: Float!
}


input UpdateJourneyConversionInput {
  id: String!
  journeyId: String!
  """100 character limit"""
  name: String
  """255 character limit"""
  description: String
  value: Float
}


input CreateSuppressionFilterInput {
  localPart: String
  domain: String
  reason: String
}


type AccountApiKey {
  id: String!
  name: String!
  apiKey: String!
  permissionKeys: [String!]!
  audiences: [String!]!
}


input CreateAccountApiKeyInput {
  """Unique name to reference the api key. *Max length: 100*"""
  name: String!
  """
  List of permissions, in the form of permission key names, that will be granted to the group. The keys are defined by the system. Refer to the **permissions** query to retrieve permission keys.
  """
  permissionKeys: [String!]!
  """
  List of audience IDs that the group will have access to. Refer to the **audiences** query to retrieve all audiences for the account.
  """
  audiences: [String!]
}


input CreateSavedSearchInput {
  """*Max length: 100*"""
  name: String!
  """*Max length: 255*"""
  description: String
  criteria: ConditionGroupInput!
  audienceId: String!
}


input UpdateSavedSearchInput {
  id: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 255*"""
  description: String
  criteria: ConditionGroupInput
  audienceId: String!
}


input DeleteSavedSearchInput {
  id: String!
  audienceId: String!
}


input CreateViewInput {
  """100 character limit"""
  name: String!
  """255 character limit"""
  description: String
  type: EntityType!
  jsonConfiguration: String!
  isPrivate: Boolean
}


input UpdateViewInput {
  id: String!
  """100 character limit"""
  name: String
  """255 character limit"""
  description: String
  jsonConfiguration: String
  isPrivate: Boolean
}


input WebhookEventInput {
  entityType: EntityType
  eventType: EventType!
}


input ConditionGroupInput {
  operator: ConditionGroupOperator!
  conditions: [ConditionInput!]
  conditionGroups: [ConditionGroupInput!]
}


input CreateAIRequestInput {
  """BASIC or ADVANCED question style"""
  questionStyle: AIQuestionStyle!
  """
  Question type. When set to KEYWORD, multiple questions can be passed. When Set to TOPIC, only one question can be passed.
  """
  questionType: AIQuestionType!
  """
  Content/answer type. Answers can be formatted as words, sentences, or paragraphs.
  """
  contentType: AIContentType!
  """
  Content limit represents the maximum number of characters to be returned.
  """
  contentLimit: Int!
  """Questions used to generate answers."""
  questions: [String!]!
  """Number of answer variations to be returned."""
  answerCount: Int!
  """AI model to be used to generate answers"""
  model: String!
}


input CreateAccountExportInput {
  name: String!
  type: ExportType!
  configuration: ExportConfigInput
}


input CreateAutoRetryRuleInput {
  """Communication type the retry rule will be applied to."""
  communicationType: CommunicationType!
  """Sending domain. *Max length: 65*"""
  sendingDomain: String!
  """Recipient domain. *Max length: 65*"""
  recipientDomain: String!
  """Bounce category the rule will be applied to."""
  bounceCategory: BounceCategory!
  """
  List of retry intervals (in hours) *Must be between 1 and 72, no more than 8 intervals allowed*
  """
  retries: [Int!]!
}


input UpdateAutoRetryRuleInput {
  id: String!
  """Communication type the retry rule will be applied to."""
  communicationType: CommunicationType
  """Sending domain. *Max length: 65*"""
  sendingDomain: String
  """Recipient domain. *Max length: 65*"""
  recipientDomain: String
  """Bounce category the rule will be applied to."""
  bounceCategory: BounceCategory
  """
  List of retry intervals (in hours) *Must be between 1 and 72, no more than 8 intervals allowed*
  """
  retries: [Int!]
  """Indicates whether or not the auto retry rule is active"""
  isActive: Boolean
}


"""The possible states for an account"""
enum AccountStatusDto {
  """Account is active"""
  ACTIVE
  """Account is closed"""
  CLOSED
  """Account is suspending pending internal review"""
  SUSPENDED_REVIEW
  """Account is suspending due to outstanding balance"""
  SUSPENDED_PAYMENT
  """Account is suspending due to malicious activity"""
  SUSPENDED_MALICIOUS
  """Account is suspending due to payment fraud"""
  SUSPENDED_FRAUD
}


type UserPermission {
  userId: Long!
  user: Useruseruser
  permissionId: Long!
  permission: Permission
  createdUtc: DateTime!
}


enum DomainRecordType {
  CNAME
  TXT
}


enum DomainRecordStatus {
  MISSING
  INVALID
  VALID
}


type LabelTranslations {
  defaultValue: String
  translations: [Translation]
}


"""
The \`Byte\` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255.
"""
scalar Byte


enum SoftwareType {
  ALEXA
  ANDROID
  AOL
  APPLE_MAIL
  BLACK_BERRY
  GOOGLE_MAIL
  OPERA
  OUTLOOK
  OUTLOOK_DOT_COM
  THUNDERBIRD
  YAHOO_MAIL
  EDGE
  CHROME
  FIREFOX
  SAFARI
  OTHER
}


enum OperatingSystemType {
  ANDROID
  CHROME_OS
  IOS
  LINUX
  MAC_OS
  WINDOWS
  OTHER
}


type Form {
  id: Long!
  name: String
  pathName: String
  title: String
  description: String
  metaDescription: String
  metaKeywords: String
  shareImageUrl: String
  faviconUrl: String
  scriptingBlockUrl: String
  status: ValidStatus!
  type: FormType
  translations: Translations
  startUtc: DateTime
  endUtc: DateTime
  isGdprEnabled: Boolean!
  allowMultipleSubmissions: Boolean!
  embeddedFormId: Long
  submitActionType: SubmitActionType!
  submitActionMessage: String
  submitActionGroupIds: [Long!]
  submitActionTags: [String!]
  submitActionDiagContent: String
  submitActionDiagIcon: DialogIconType
  submitActionDiagIconColor: String
  submitActionDiagIconUrl: String
  submitActionDiagActionType: DialogButtonActionType!
  submitActionDiagButtonText: String
  submitActionDiagButtonUrl: String
  submitActionDiagButtonColor: String
  trackDomains: Boolean!
  submitActionExternalUrl: String
  submitActionSendConfEmail: Boolean!
  submitActionConfEmailFromText: String
  submitActionConfEmailFromEmail: Email
  submitActionConfEmailSubject: String
  submitActionSendNotifEmail: Boolean!
  submitActionNotifEmailAttachmentFormat: DataAttachmentFormat!
  submitActionDupEmailType: DuplicateSubmissionActionType!
  submitActionDupEmailMessageType: ErrorAction!
  submitActionDupEmailMessage: String
  submitActionDupEmailDiagContent: String
  submitActionDupEmailDiagIcon: DialogIconType
  submitActionDupEmailDiagIconColor: String
  submitActionDupEmailDiagIconUrl: String
  submitActionDupEmailDiagActionType: DialogButtonActionType!
  submitActionDupEmailDiagButtonText: String
  submitActionDupEmailDiagButtonUrl: String
  submitActionDupEmailDiagButtonColor: String
  submitActionDupEmailExternalUrl: String
  submitActionMultiSubErrorActionType: ErrorAction
  submitActionMultiSubErrorExternalUrl: String
  availErrorActionType: ErrorAction
  availErrorExternalUrl: String
  ftfEmailFromName: String
  ftfEmailFromEmail: Email
  ftfEmailSubject: String
  totalVisits: Int!
  totalCompleteSubmits: Int!
  totalPartialSubmits: Int!
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
  accountId: Long!
  """
  Bounce domain for the form. Only used for surveys that are not associated with a audience.
  """
  bounceDomain: AccountDomain
  notifications: [Notification]
  questions: [Question]
  events: [FormEvent]
  tags: [FormTag]
  links: [FormLink]
  respondents: [SubmissionResponse]
}


enum SocialPlatform {
  ANY
  FACEBOOK
  LINKED_IN
  TWITTER
  PINTEREST
}


enum JourneyContactStatus {
  ACTIVE
  COMPLETED
  EXITED
  DELETED
}


"""
The operator used within the condition builder when multiple condition groups are present
"""
enum ConditionGroupOperator {
  """All condition groups must be true"""
  AND
  """At least one condition group must be true"""
  OR
}


type TemplateCampaign {
  name: String!
  status: CampaignSendStatus!
  sentUtc: DateTime
}


type TemplateVersion {
  id: String!
  lastModifiedUtc: DateTime!
}


"""
The mime type of the content for a content block, transaction, or campaign
"""
enum MimeType {
  """HTML"""
  HTML
  """Plain text"""
  TEXT
  """AMP for email"""
  AMP
  """Markdown"""
  MARKDOWN
}


type ContentBody {
  mimeType: MimeType!
  content: String
}


"""
Thank you icon to display when displaying a message after the form is submitted
"""
enum DialogIconType {
  """No icon"""
  NONE
  """Clipboard with check mark"""
  CLIPBOARD
  """Circle with check mark"""
  CIRCLE_CHECK_MARK
  """Thumbs up"""
  THUMBS_UP
  """Check mark"""
  CHECK_MARK
  """Exclamation triangle"""
  EXCLAMATION_TRIANGLE
  """Exclamation circle"""
  EXCLAMATION_CIRCLE
  """Information circle"""
  INFO_CIRCLE
  """Exclamation square"""
  EXCLAMATION_SQUARE
}


enum DialogButtonActionType {
  REDIRECT_TO_URL
  CLOSE_AND_SHOW_RESULTS
  CLOSE_AND_SHOW_ANSWERS
}


"""
Used to set the type of notification email attachment that will include the form data submitted.
"""
enum DataAttachmentFormat {
  """No attachment will be included"""
  NO_ATTACHMENT
  """JSON formatted document will be attached"""
  JSON
  """CSV formatted document will be attached"""
  CSV
}


"""
The possible form actions that can be performed when a duplicate email is submitted. This action is in addition to the other form actions that can be performed after form submission.
"""
enum DuplicateSubmissionActionType {
  """Ignore the duplicate email and all date submitted."""
  IGNORE
  """
  Update the contact's/respondent's profile/answers. This may allow unknown parties to update another contact's/respondent's profile/answers
  """
  UPDATE
  """Display an error to the form visitor"""
  SHOW_ERROR
}


enum ErrorAction {
  """Display a message in place for the form without the page refreshing"""
  DISPLAY_MESSAGE
  """Display a dialog in place for the form without the page refreshing"""
  DISPLAY_DIALOG
}


type JourneyNodeConfiguration {
  noteText: String
  newValue: String
  tags: [String!]
  fbAdAccountId: String
  fbAudienceId: String
  entityId: Long!
  entityIds: [Long!]!
  systemFieldName: String
  journeyId: Long!
  continueJourney: Boolean!
  notification: JourneyNodeNotification!
  deliveryWindow: DeliveryWindow!
  siteNotification: SiteNotification!
  settings: SiteNotificationSettings!
  actionOperator: ActionOperator
  newStatus: ContactStatus
  filter: ConditionGroup
  percentage: Int
  pointValue: Float
  expireInterval: String
  expireUtc: DateTime
  date: String
  waitLimit: String
  checkFrequency: String
  campaignScope: String
  scope: JourneyNodeScope
  event: JourneyNodeEvent
  referredFromFilter: String
  path: String
  eventKey: String
  engaged: Boolean
  webhookUrl: String!
  txGroupName: String
}


type EventPayload {
  subject: Subject
  event: Event
}


enum JourneyGoalType {
  GLOBAL
  IN_FLOW
}


enum TriggerAudienceEventType {
  UNSUBSCRIBED
  SUBSCRIBED
  GROUP_ADDED
  GROUP_REMOVED
  TAG_ADDED
  TAG_REMOVED
  FIELD_UPDATED
  CONFIRMED_OPT_IN
}


enum TriggerPageEventType {
  VIEWED_FORM
  CTA
}


enum WebPageVisitType {
  ANY
  ONE_TIME
  TWO_TO_FIVE_TIMES
  SIX_TO_TEN_TIMES
  ELEVEN_TO_FIFTEEN_TIMES
  SIXTEEN_PLUS_TIMES
}


enum TriggerWebPageEventType {
  VISITED
}


enum TriggerCampaignEventType {
  DELIVERED
  OPEN
  CLICK
  REPLIED
  VIEW_ONLINE
  SOCIAL_SHARE
  FORWARD_TO_FRIEND
  VIEW_PROFILE
  HARD
  SOFT
  SOFT_SENDER_AUTH
  SOFT_IP
  SOFT_DNS
  BLOCK
  BLOCK_CONTENT
  BLOCK_SENDER
  COMPLAINT
  UNSUBSCRIBED
}


enum TriggerEcommerceEventType {
  PURCHASE
  ABANDON_CART
}


enum TriggerEcommerceProductOperator {
  ALL
  ANY
  NOT_ANY
}


enum TriggerEcommerceCategoryOperator {
  ALL
  ANY
  NOT_ANY
}


enum TriggerEcommerceOrderOperator {
  NOT_ANY
  EQUAL
  NOT_EQUAL
  GREATER_THAN
  GREATER_THAN_EQUAL_TO
  LESS_THAN
  LESS_THAN_EQUAL_TO
}


enum TriggerTransactionEventType {
  DELIVERED
  OPEN
  CLICK
  REPLIED
  CREATED
  PROCESSED
  VIEW_ONLINE
  FORWARD_TO_FRIEND
  HARD
  SOFT
  SOFT_SENDER_AUTH
  SOFT_IP
  SOFT_DNS
  BLOCK
  BLOCK_CONTENT
  BLOCK_SENDER
  DECLINED
  INVALID_EMAIL
  SUPPRESSED
  COMPLAINT
}


enum DisplayType {
  DIALOG
  TOAST
}


enum PositionX {
  LEFT
  CENTER
  RIGHT
}


enum PositionY {
  TOP
  MIDDLE
  BOTTOM
}


enum AnimationType {
  FADE_IN
  SLIDE_IN
}


enum ButtonType {
  NONE
  BUTTON
  TEXT
}


enum ButtonPosition {
  LEFT
  CENTER
  RIGHT
}


enum IconType {
  """No icon"""
  NONE
  """Clipboard with check mark"""
  CLIPBOARD
  """Circle with check mark"""
  CIRCLE_CHECK_MARK
  """Thumbs up"""
  THUMBS_UP
  """Check mark"""
  CHECK_MARK
  """Exclamation triangle"""
  EXCLAMATION_TRIANGLE
  """Exclamation circle"""
  EXCLAMATION_CIRCLE
  """Information circle"""
  INFO_CIRCLE
  """Exclamation square"""
  EXCLAMATION_SQUARE
}


type JourneyNodeNoticificationSettings {
  language: String
  sendAtUtc: DateTime
  sendRepliesTo: String
  sendBccTo: String
  showRecipients: Boolean
  content: JourneyNodeNoticificationContentSettings
  analytics: JourneyNodeNoticificationAnalytics
  contactData: JourneyNodeNoticificationContactDataSettings
}


type JourneyNodeNoticificationHeader {
  subject: String
  bounceDomain: String
  from: JourneyNodeNoticificationBaseRecipient
  replyTo: JourneyNodeNoticificationBaseRecipient
  customHeaders: [JourneyNameValue!]
}


type JourneyNodeNoticificationContent {
  contentHtml: String
}


type JourneyNameValue {
  name: String
  value: String
}


type JourneyNodeNoticificationRecipient {
  name: String
  emailAddress: String
  type: RecipientType
  variables: [JourneyNameValue!]
}


enum CategoryType {
  ARTICLE
  TEMPLATE
  JOURNEY
}


type SubmissionAnswer {
  questionId: String!
  answerText: String
}


enum TransactionStatus {
  """Transaction was successfully created in our system and is processing."""
  CREATED
  """Transaction was successfully sent"""
  PROCESSED
  """
  Transaction failed to send. Refer to 'Error' property for more information.
  """
  FAILED
}


"""The possible recipient types within a transaction email"""
enum RecipientType {
  """Recipient is *To* field of email"""
  TO
  """Recipient in *CC* (carbon copy) field of email"""
  CC
  """Recipient in *BCC* (blind carbon copy) field of email"""
  BCC
}


type TransactionMetadata {
  name: String
  value: String
}


type TransactionHeader {
  name: String
  value: String
}


type TransactionLink {
  id: String!
  linkUri: String
  linkName: String
}


enum GraphQLCallType {
  MUTATION
  QUERY
}


type ItemTier {
  minLimit: Int!
  maxLimit: Int!
  fee: Float!
}


"""Plan feature used to configure Tarvent"""
type ItemFeature {
  """Unique feature ID"""
  id: String!
  """Name of feature"""
  name: String!
  """Description of feature"""
  description: String!
  """Feature limit if applicable"""
  limit: String
}


type ItemAddOn {
  id: String!
  type: AddOnType!
  name: String!
  description: String!
  freeCreditsAmt: Int!
  lifeTimeInd: Boolean!
  allowOveragesInd: Boolean!
  """Fee information for add on."""
  fees: ItemAddOnFees!
}


enum ExportType {
  CAMPAIGN_EVENT_LOGS
  CAMPAIGN_HISTORY
  TRANSACTION_EVENT_LOGS
  TRANSACTION_SENDER_DOMAIN
  TRANSACTION_RECIPIENT_DOMAIN
  USER_ACTIVITY
  SURVEY_RESPONDENT_LOGS
}


type ExportConfig {
  entityId: String
  """Used for survey respondent logs"""
  campaignId: String
  """Used for campaign event logs"""
  combinationId: String
  """Email event types used for Campaign and Transaction event exports"""
  emailEvents: [EmailEventType!]
  """Delimiter for export file."""
  delimiter: ValueDelimiter!
  """Return all contact fields for Campaign event log exports"""
  allFields: Boolean
  """Contact fields used for Campaign event log exports"""
  fields: [String!]
  startUtc: DateTime
  endUtc: DateTime
  """Hour offset for Campaign event log exports"""
  hourOffset: Int
  """Minute offset for Campaign event log exports"""
  minuteOffset: Int
  """List of tags for filtering on transaction reporting."""
  tags: [String!]
  """
  List of transaction groups for filtering on transaction event reporting.
  """
  txGroups: [String!]
}


enum CommunicationType {
  TRANSACTION
  EMAIL_MARKETING
}


enum BounceCategory {
  HARD
  SOFT
  SOFT_SENDER_AUTH
  SOFT_IP
  SOFT_DNS
  BLOCK
  BLOCK_CONTENT
  BLOCK_SENDER
  ANY_SOFT
}


"""Plan change"""
enum PlanChangeType {
  """Plan will be downgraded"""
  DOWNGRADE
  """Plan will be upgraded"""
  UPGRADE
  """Plan will change tiers"""
  ONLY_TIER
  """Plan will be deleted at the end of the term"""
  DELETE
}


enum AddOnType {
  TRANSACTIONAL_EMAIL
  SMS
  CRM
  CUSTOM_REPORT
}


enum CustomReportJobStatus {
  SUCCESSFUL
  ERROR
}


"""Add-on change"""
enum AddOnChangeType {
  """Add-on will be downgraded"""
  DOWNGRADE
  """Add-on will be upgraded"""
  UPGRADE
  """Add-on will be removed"""
  REMOVE
}


enum UserIdentityProvider {
  LOCAL
  FACEBOOK
  AMAZON
  GOOGLE
  MICROSOFT
}


enum JourneyNodeNotificationContactDataLocation {
  NONE
  BODY
  ATTACHMENT
  BODY_AND_ATTACHMENT
}


enum JourneyNodeNotificationAttachmentFormat {
  JSON
  XML
}


enum UriHostNameType {
  UNKNOWN
  BASIC
  DNS
  I_PV4
  I_PV6
}


"""The possible credit card types that are currently supported"""
enum CreditCardNetwork {
  """Visa credit card"""
  VISA
  """Mastercard credit card"""
  MASTERCARD
  """American Express credit card"""
  AMERICAN_EXPRESS
  """Discover credit card"""
  DISCOVER
  """JCB credit card"""
  JCB
  """Diners Club credit card"""
  DINERS_CLUB
  OTHER
}


enum SubjectType {
  CONTACT
  TRANSACTION
  CAMPAIGN
  FORM
  PAGE
  SURVEY
}


enum EventInitiator {
  API
  USER
  JOURNEY
  CONTACT
}


"""The possible messaging type used when a form is submitted"""
enum SubscriberListMessageType {
  """Opt-in/subscribe confirmation email"""
  OPT_IN_CONFIRMATION
  """Opt-in/subscribe notification email"""
  OPT_IN_NOTIFICATION
  """Opt-in/subscribe welcome message"""
  OPT_IN_WELCOME
  """Opt-out/unsubscribe confirmation email"""
  OPT_OUT_CONFIRM
  """Opt-out/unsubscribe notification email"""
  OUT_OUT_NOTIFICATION
  """Profile update confirmation email"""
  PROFILE_UPDATE_CONFIRM
  """Profile update notification email"""
  PROFILE_UPDATE_NOTIFICATION
  """Forward to a friend confirmation email"""
  FORWARD_TO_FRIEND
  """Forward to a friend notification email"""
  FORWARD_TO_FRIEND_NOTIFICATION
  """Conversation response notification"""
  CONVERSATION_RESPONSE
}


"""The possible reasons a credit card payment was declined"""
enum CardDeclineReason {
  """
  No reason could be determined based on the error from the processing center
  """
  NO_REASON
  """Insufficient funds likely due to credit limit reached"""
  INSUFFICIENT_FUNDS
  """Credit card was expired"""
  EXPIRED
}


type ItemAddOnFees {
  unitOfMeasure: String!
  credits: [ItemAddOnFeeOption!]!
  storageDays: [ItemAddOnStorageDays!]!
}


type JourneyNodeNoticificationBaseRecipient {
  name: String
  emailAddress: String
}


type JourneyNodeNoticificationContactDataSettings {
  dataLocation: JourneyNodeNotificationContactDataLocation!
  attachementFormat: JourneyNodeNotificationAttachmentFormat
  zipAttachement: Boolean
  includeContactOriginalData: Boolean
  includeContactCurrentData: Boolean
}


type JourneyNodeNoticificationAnalytics {
  enable: Boolean!
  parameters: [JourneyNameValue!]
}


type JourneyNodeNoticificationContentSettings {
  autoGenerateText: Boolean!
  autoGenerateHtml: Boolean!
}


type Event {
  accountId: Long!
  entityType: EntityType!
  eventType: EventType!
  dateUtc: DateTime
  initiator: EventInitiator!
  network: EventNetwork
  client: EventClient
}


type Subject {
  id: Long!
  type: SubjectType!
}


type JourneyNodeEvent {
  type: EventType
  campaignType: TriggerCampaignEventType
  transactionType: TriggerTransactionEventType
  audienceType: TriggerAudienceEventType
  ecommerceType: TriggerEcommerceEventType
  formType: TriggerFormEventType
  pageType: TriggerPageEventType
  webPageType: TriggerWebPageEventType
  linkScope: String
  matchPattern: String
  deviceTypes: [DeviceType!]
  sharedOn: SocialPlatform
  fieldName: String
  operator: Operator
  value: String
  ignoreYear: Boolean
  customEventKey: Long
  storeId: String
  products: [String!]
  productOperator: TriggerEcommerceProductOperator
  categories: [String!]
  categoryOperator: TriggerEcommerceCategoryOperator
  orderValue: Float
  orderOperator: TriggerEcommerceOrderOperator
  questionId: Long
  visitType: WebPageVisitType
  siteVisitType: WebPageVisitType
  ctaPerformed: Boolean
  minChangeCount: Int
  formQuestionId: Long
  rssCheckType: TriggerRssCheckType
}


type FormLink {
  id: Long!
  hash: [Byte!]
  url: String
  linkName: String
  track: Boolean!
  isCta: Boolean!
  accountId: Long!
  formId: Long!
  form: Form
}


type FormTag {
  tagHash: [Byte!]
  tag: OldTag
  formId: Long!
  form: Form
  accountId: Long!
}


type Notification {
  id: Long!
  subscriberListMessageType: SubscriberListMessageType!
  enabled: Boolean!
  fromText: String
  fromEmail: Email
  subject: String
  notificationContents: [NotificationContent]
  formId: Long!
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
  accountId: Long!
}


type Email {
  """255 character limit"""
  domain: String
  """65 character limit"""
  localPart: String
}


type Translation {
  language: String
  value: String
}


type Useruseruser {
  id: Long!
  """Status of user"""
  status: UserStatus!
  """SSO user ID"""
  ssoId: String
  """Identity provider"""
  identityProvider: UserIdentityProvider!
  """First name"""
  firstName: String
  """Last name"""
  lastName: String
  """
  Optional business phone number used by support to contact user if needed
  """
  businessPhone: String
  """Email address used for notifications"""
  emailAddr: Email
  """Indicates if user is enrolled in Affiliate program"""
  isAffiliate: Boolean!
  """Indicates if multi-factor authentication is enabled"""
  mfaEnabled: Boolean!
  """Date/time the user was created"""
  createdUtc: DateTime!
  """Id of user who created the user"""
  createdBy: String
  """Date/time the user was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the user"""
  modifiedBy: String
  """Collection of accounts associated with the user"""
  accounts: [UserAccount]
  """Collection of user invites created by the user"""
  userInvites: [Invite]
  """Collection of permissions"""
  permissions: [UserPermission]
  """Collection of fast facts"""
  fastFacts: [UserFastFact]
}


input ExportConfigInput {
  """
  Not required for transaction exports. Required for every other export type.
  """
  entityId: String
  """Optionally used for survey respondent logs"""
  campaignId: String
  """Optionally used for campaign event logs"""
  combinationId: String
  """Email event types used for Campaign and Transaction event log exports"""
  emailEvents: [EmailEventType!]
  """Delimiter for export file. Defaults to comma."""
  delimiter: ValueDelimiter
  """Return all contact fields for Campaign event log exports"""
  allFields: Boolean
  """Contact fields used for Campaign event log exports"""
  fields: [String!]
  startUtc: DateTime
  endUtc: DateTime
  """Hour offset for Campaign event log exports"""
  hourOffset: Int
  """Minute offset for Campaign event log exports"""
  minuteOffset: Int
  """List of tags for filtering transaction event log exports."""
  tags: [String!]
  """
  List of transaction groups for filtering transaction event log exports.
  """
  txGroups: [String!]
}


input ConditionInput {
  fieldName: String
  dataFieldId: String
  operator: Operator!
  value: String
}


enum ActiveJourneyContactAction {
  KEEP_CONTACTS_IN_NODE
  MOVE_CONTACTS_TO_NEXT_NODE_BEFORE_MOVE
  END_JOURNEY
}


input TriggerTransactionEventInput {
  type: TriggerTransactionEventType
  linkScope: String
  matchPattern: String
  deviceTypes: [DeviceType!]
}


input TriggerWebpageEventInput {
  type: TriggerWebPageEventType
  deviceTypes: [DeviceType!]
  visitType: WebPageVisitType
  siteVisitType: WebPageVisitType
}


input TriggerRssEventInput {
  rssCheckType: TriggerRssCheckType
}


input TriggerPageEventInput {
  type: TriggerPageEventType
  deviceTypes: [DeviceType!]
  visitType: WebPageVisitType
  ctaPerformed: Boolean
}


input TriggerFormEventInput {
  type: TriggerFormEventType!
  deviceTypes: [DeviceType!]
  questionId: String
  operator: Operator
  value: String
}


input TriggerEcommerceEventInput {
  type: TriggerEcommerceEventType
  storeId: String
  products: [String!]
  productOperator: TriggerEcommerceProductOperator
  categories: [String!]
  categoryOperator: TriggerEcommerceCategoryOperator
  orderValue: Float
  orderOperator: TriggerEcommerceOrderOperator
}


input TriggerDateEventInput {
  value: String
  fieldName: String
  operator: Operator
  ignoreYear: Boolean
}


input TriggerCampaignEventInput {
  type: TriggerCampaignEventType
  linkScope: String
  matchPattern: String
  deviceTypes: [DeviceType!]
  sharedOn: SocialPlatform
}


input TriggerAudienceEventInput {
  type: TriggerAudienceEventType
  """
  Comma delimited string of ids/tags is supported as well as a single id/tag for group and tag filtering.
  """
  fieldName: String
}


type PaymentMethodBankAccount {
  accountNumber: String!
  routingNumber: String!
  bankName: String!
  bankAccountHolderType: BankAccountHolderType!
  bankAccountType: BankAccountType!
  firstName: String!
  lastName: String!
}


type PaymentMethodCreditCard {
  """2 digit expiration month"""
  expMonth: Int!
  """4 digit expiration year"""
  expYear: Int!
  """Last 4 digits of credit card to assist in identifying payment method"""
  last4Digits: String!
  """Type of credit card"""
  cardNetwork: CreditCardNetwork!
  billingAddress: BillingAddress!
}


enum PaymentMethodType {
  CREDIT_CARD
  BANK_ACCOUNT
}


type AccountPlanAddOnStats {
  """Add-on id"""
  id: String
  """Add-on type"""
  type: AddOnType!
  """Sender reputation for this add-on."""
  senderReputation: Float!
  """Engagement reputation for this add-on."""
  engagementScore: Float!
  """Sender reputation for the account."""
  accountSenderReputation: Float!
  """Engagement reputation for the account."""
  accountEngagementScore: Float!
  """Amount of storage for the account."""
  storageBytes: Int!
  """
  Item count for add-on. For transaction add-ons this represents to total amount of sent transaction (To, CC, and BCC recipients).
  """
  itemCount: Int!
}


input GetTemplateTxVarContentInput {
  mimeType: MimeType!
  content: String!
}


type Stat {
  statUtc: DateTime
  clicks: Int!
  uniqueClicks: Int!
  views: Int!
  uniqueViews: Int!
  totalSubmits: Int!
  totalSubmitRate: Float!
  submittedCompleteForm: Int!
  uniqueSubmittedCompleteForm: Int!
  timePerSubmittedCompleteForm: Int!
  submittedCompleteFormRate: Float!
  submittedPartialForm: Int!
  uniqueSubmittedPartialForm: Int!
  timePerSubmittedPartialForm: Int!
  submittedPartialFormRate: Float!
  ctaPerformed: Int!
  uniqueCtaPerformed: Int!
  timePerCta: Int!
  conversionRate: Float!
  uniqueConversionRate: Float!
  totalCtaPerformed: Int!
  uniqueTotalCtaPerformed: Int!
  timePerTotalCta: Int!
  totalConversionRate: Float!
  uniqueTotalConversionRate: Float!
  bounces: Int!
  uniqueBounces: Int!
  bounceRate: Float!
}


type ArticleContent {
  mimeType: MimeType!
  content: String!
}


type ArticleVersions {
  versions: [ArticleVersion!]!
}


"""The possible default layouts for an article"""
enum ArticleDefaultLayout {
  """2 columns with the image left, title top, content below"""
  PTL_TTR_CBR
  """2 columns with the image right, title top, content below"""
  PTR_TTL_CBL
  """1 column with image, then title, then content all stacked"""
  PTC_TCC_CBC
  """1 column with title, then content, then image all stacked"""
  PBC_TTC_CCC
  """1 column with title then content all stacked"""
  PNA_TTL_CBL
  """2 column with image left, content right"""
  PTL_TNA_CTR
  """2 column with image right, content left"""
  PT_R_TNA_CTL
}


type ContentBlockContent {
  mimeType: MimeType!
  content: String!
}


type ContentBlockVersions {
  versions: [ContentBlockVersion!]!
}


"""Possible types for a content block's content"""
enum ContentBlockType {
  """HTML content."""
  HTML
  """Plain text content."""
  TEXT
  """Amp content."""
  AMP
}


type RSSFeedItem {
  fields: [RSSFeedItemField]
  categories: [String]
}


enum SortDirection {
  ASC
  DESC
}


type CampaignHistoryStats {
  campaignId: String
  combinationId: String
  name: String
  sentUtc: DateTime
  enableMvTesting: Boolean
  totalSent: Int!
  uniqueSuppressed: Int!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  totalClicks: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  clickToOpenPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  totalReplies: Int!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  totalProfile: Int!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  totalSTF: Int!
  uniqueSTF: Int!
  uniqueSTFPct: Float!
  totalSocialShare: Int!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  totalSTFOptIn: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  senderReputation: Float!
  engagementScore: Float!
}


type CampaignHistoryOverviewStats {
  totalSent: Int!
  uniqueSuppressed: Int!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  totalClicks: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  clickToOpenPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  totalReplies: Int!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  totalProfile: Int!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  totalSTF: Int!
  uniqueSTF: Int!
  uniqueSTFPct: Float!
  totalSocialShare: Int!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  totalSTFOptIn: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  senderReputation: Float!
  engagementScore: Float!
}


enum VideoSource {
  """Video is from YouTube"""
  YOU_TUBE
  """Video is from Vimeo"""
  VIMEO
}


enum JourneyContactMangType {
  MANUALLY_ENTERED
  MANUALLY_EXITED
}


type JourneySiteNotificationDailyStats {
  statUtc: DateTime
  viewCount: Int!
}


"""Add-on detail"""
type AccountPlanAddOn {
  """Unique add-on id"""
  id: String!
  """Name of add-on"""
  name: String!
  """Type of add-on"""
  type: AddOnType!
  """Indicates if this add-on has free credits"""
  freeCreditsInd: Boolean!
  """Add-on pending change type. Will be null if there is no change."""
  pendingChangeType: AddOnChangeType
  """Add-on credits."""
  credits: Int!
  """Add-on credit price."""
  creditPrice: Float!
  """Only set for Transaction Email add-on"""
  storageDays: Int!
  """Only set for Transaction Email add-on"""
  storageDaysPrice: Float!
  """Total price of add-on"""
  totalPrice: Float!
  """
  Overage fee of add-on based on quantity of credits used (updated daily).
  """
  overageFee: Float!
  """Quantity of credits used (updated daily)."""
  qtyUsed: Int!
}


type DowngradeResultError {
  """Error description"""
  error: String!
  """Feature name"""
  featureName: String!
  """Feature id"""
  featureId: String!
}


"""Coupon detail"""
type EstCoupon {
  """Coupon code"""
  code: String!
  """Coupon duration"""
  duration: CouponDurationType!
}


"""Plan details"""
type PlanInfo {
  """Unique plan id"""
  id: String!
  """Plan name"""
  name: String!
  """Start of billing period for plan."""
  startUtc: DateTime!
  """End of billing period for plan."""
  endUtc: DateTime!
  """
  Cost of plan before discounts are applied. For current plan this will equal the amount to be credited.
  """
  amount: Float!
  """Amount above plan tier if overages are allowed."""
  overageAmount: Float!
  """Item quantity for plan."""
  quantity: Int!
  """Quantity above plan tier if overages are allowed."""
  overageQuantity: Int!
  """Total amount of discount applied to the plan."""
  discountAmount: Float!
}


"""Payment method billing address information"""
input AddBillingAddressInput {
  """First name displayed on the credit card. *Max length: 100*"""
  firstName: String!
  """Last name displayed on the credit card. *Max length: 100*"""
  lastName: String!
  """Street address associated with the credit card. *Max length: 100*"""
  streetAddress: String!
  """Street address associated with the credit card. *Max length: 50*"""
  streetAddress2: String
  """Address locality associated with the credit card. *Max length: 100*"""
  addressLocality: String!
  """Address region associated with the credit card. *Max length: 100*"""
  addressRegion: String!
  """Postal code associated with the credit card. *Max length: 15*"""
  postalCode: String!
  """Address country associated with the credit card. *Max length: 100*"""
  addressCountry: String!
}


"""Credit card information"""
input AddCreditCardInfoInput {
  """Credit card number. *Required: 13-16 digits*"""
  cardNumber: String!
  """2 digit expiration month."""
  expirationMonth: Int!
  """4 digit expiration year."""
  expirationYear: Int!
  """3 or 4 digit security code"""
  cvv: Int!
}


"""Payment method billing address information"""
input UpdateBillingAddressInput {
  """First name displayed on the credit card. *Max length: 100*"""
  firstName: String!
  """Last name displayed on the credit card. *Max length: 100*"""
  lastName: String!
  """Street address associated with the credit card. *Max length: 100*"""
  streetAddress: String!
  """Street address 2 associated with the credit card. *Max length: 50*"""
  streetAddress2: String
  """Address locality associated with the credit card. *Max length: 100*"""
  addressLocality: String!
  """Address region associated with the credit card. *Max length: 100*"""
  addressRegion: String!
  """Zip/Postal code associated with the credit card. *Max length: 15*"""
  postalCode: String!
  """Address country associated with the credit card. *Max length: 100*"""
  addressCountry: String!
}


"""Credit card expiration date"""
input UpdateCreditCardInfoInput {
  """2 digit expiration month."""
  expirationMonth: Int!
  """4 digit expiration year."""
  expirationYear: Int!
}


input UserNotificationPreferenceInput {
  """Id of global notification"""
  notificationId: String!
  """If true, user will recieve email notifictaions if available."""
  emailNotifications: Boolean!
  """If true, user will recieve in app notifictaions if available."""
  inAppNotifications: Boolean!
}


"""The possible application themes"""
enum AppTheme {
  """Light mode"""
  LIGHT
  """Dark mode"""
  DARK
}


"""Represents a recipient that will receive the transactional email."""
input TransactionRecipientInput {
  """
  Name of the recipient to be displayed in the email. Max length: 255 characters
  """
  name: String
  """
  Email address of the recipient to be displayed in the email. Max length: 320 characters
  """
  emailAddress: String
  """
  ID of known contact within a Tarvent audience. This must be the Tarvent ID. If the ID is set, the Name and EmailAddress properties are ignored.
  """
  contactId: String
  """Specified the type of recipient being added."""
  type: RecipientType
  """
  Collection of recipient-specific meta data (aka reference data) used for both standard and custom report. Please note that this data will supersede transaction-level metadata. Max length: Name: 50 characters, Value: 255 characters.
  """
  metadata: [NameValueInput!]
  """
  Collection of recipient-specific dynamic data that will be merged into the content and/or header of the email based on the variable name. Please note that this data will supersede transaction-level variables. Max length: Name: 50 characters, Value: 50 characters.
  """
  variables: [NameValueInput!]
}


input TransactionContentInput {
  """
  Template ID used to retrieve content for the email. This setting takes priority over ContentBodies.
  """
  templateId: String
  """
  Collection of content that will be added to the email and displayed based on the recipient's email client settings. This is ignored if the TemplateId is specified.
  """
  contentBodies: [TransactionContentBodyInput!]
}


input TransactionHeaderInput {
  """
  Subject line of the email that will be displayed within the recipients email client. Max length: 500 characters
  """
  subject: String!
  """
  Domain used for sending email with strict DMARC policies are in place. Contact Tarvent support if you need to implement this. Max length: 255 characters
  """
  mailDomain: String
  """Contact to be displayed as the sender of the email."""
  from: TransactionFromInput!
  """
  Contact recipients will send reply emails to. This field is ignored if Replies is enabled in the TransactionTrackingInput object.
  """
  replyTo: TransactionReplyToInput
  """
  Collection of headers (name/value pairs) that will be added to the header of the email, but not displayed to the recipient. This is typically used for automated reply email processing when headers are present.
  """
  customHeaders: [NameValueInput!]
}


input NameValueInput {
  name: String!
  value: String!
}


input TransactionSettingsInput {
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes). Defaults to 'en-US'
  """
  language: String
  """
  UTC Date and time that the email will be schedule for sending. Set to NULL to send immediately.
  """
  sendAtUtc: DateTime
  """Indicates the tracking settings to be used by the transaction."""
  tracking: TransactionTrackingInput
  """
  Indicates if all non-BCC recipients in the Recipients collection will be displayed to all recipients of this email. It is advised not to enable this without proper testing to ensure the results are desired.
  """
  showRecipients: Boolean
  """
  Indicates that the transaction recipients will not be validated against to account suppression rules, this allowing anyone specified to receive the email, even if they are on the suppression list.
  """
  ignoreSuppressCheck: Boolean!
  """
  Specify sandbox settings used to test various return types of error handling in your code.
  """
  sandbox: TransactionSandboxInput
  """
  Specifies whether HTMl and/or text content is automatically generated based on the content provided.
  """
  content: TransactionContentSettingsInput
  """Specified the analytics settings used for the transaction."""
  analytics: TransactionAnalyticsInput
}


input UpdateTemplateContentInput {
  mimeType: MimeType!
  content: String!
}


input SendTemplateTestContentInput {
  mimeType: MimeType!
  content: String!
}


input UpdateDoubleOptInInput {
  """*Max length: 100*"""
  fromName: String
  """*Max length: 360*"""
  fromEmail: String
  """*Max length: 255*"""
  subject: String
  contentHtml: String
  confirmPageJson: String
}


input LabelsInput {
  streetAddress: LabelTranslationsInput
  streetAddress2: LabelTranslationsInput
  addressLocality: LabelTranslationsInput
  addressRegion: LabelTranslationsInput
  postalCode: LabelTranslationsInput
  addressCountry: LabelTranslationsInput
}


enum GroupDeleteType {
  DELETE_CONTACTS_IN_AUDIENCE
  LEAVE_CONTACTS_IN_AUDIENCE
  DELETE_IF_NOT_IN_OTHER_GROUPS
}


"""Either FieldName or DataFieldId need to be passed to be valid."""
input DataColumnInput {
  skip: Boolean!
  """
  *Max length: 100*  FieldName is used for system fields (email) and datafields (datafield id).
  """
  fieldName: String
}


enum TagManagementType {
  REPLACE_EXISTING
  ADD_NEW_TAGS_ONLY
}


enum AudienceGroupManagementType {
  REPLACE_EXISTING
  ADD_NEW_GROUPS_ONLY
}


input CreateProfileFieldInput {
  dataFieldId: String
  labelText: String
  value: String!
}


input UpdateProfileFieldInput {
  dataFieldId: String
  labelText: String
  value: String!
}


enum BounceStatType {
  HARD
  SOFT
}


input FtfFormEmailInput {
  """*Max length: 100*"""
  fromName: String
  """*Max length: 360*"""
  fromEmail: String
  """*Max length: 255*"""
  subject: String
  contentHtml: String
}


enum EmailType {
  THANK_YOU
  CONFIRMATION
  FORWARD_TO_FRIEND
}


input FormQuestionStylesInput {
  fontSize: String
  fontFamily: String
  fontColor: String
  lineHeight: String
  fontStyle: String
  textTransform: String
  textDecoration: String
  letterSpacing: String
  wordSpacing: String
  padding: String
  backgroundColor: String
  backgroundImage: String
  align: String
  width: String
  borderRadius: String
  fullMobileWidth: Boolean
}


input QuestionCategoryInput {
  """*Max length: 255*"""
  text: String!
  displayOrder: Int!
  """*Max length: 300*"""
  defaultValue: String
}


input QuestionAnswerInput {
  displayOrder: Int!
  """*Max length: 300*"""
  text: String!
  """*Max length: 300*"""
  value: String
}


input UpdateFormQuestionStylesInput {
  fontSize: String
  fontFamily: String
  fontColor: String
  lineHeight: String
  fontStyle: String
  textTransform: String
  textDecoration: String
  letterSpacing: String
  wordSpacing: String
  padding: String
  backgroundColor: String
  backgroundImage: String
  align: String
  width: String
  borderRadius: String
  fullMobileWidth: Boolean
}


input UpdateSubmitActionInput {
  type: SubmitActionType
  trackDomains: Boolean
  message: String
  confirmDialog: DialogSettingsInput
  confirmExternalUrl: String
  sendConfirmEmailInd: Boolean
  sendConfirmEmail: EmailSettingsInput
  addGroups: [String!]
  addTags: [String!]
  sendNotificationEmailInd: Boolean
  sendNotificationEmail: NotifEmailSettingsInput
  duplicateSubmissionAction: FormDupSubActionInput
}


input UpdateTranslationsInput {
  required: String!
  formError: String!
  minLengthError: String!
  maxLengthError: String!
  placeholder: String!
  formatError: String!
  invalidDataError: String!
  ftfTitle: String!
  ftfFriends: String!
  ftfNote: String!
  ftfInformation: String!
  name: String!
  note: String!
  addFriend: String!
  close: String!
  otherText: String!
}


input CreateArticleContentInput {
  mimeType: MimeType!
  content: String!
}


input UpdateArticleContentInput {
  mimeType: MimeType!
  content: String!
}


input SubjectInput {
  """*Max length: 100*"""
  subject: String!
  """*Max length: 100*"""
  preheader: String
}


input FromInput {
  """*Max length: 100*"""
  name: String
  """*Max length: 320*"""
  email: String!
}


input UpdateCampaignAudienceInput {
  groupId: String!
}


input ParamNameValueInput {
  """*Max length: 75*"""
  name: String!
  """*Max length: 75*"""
  value: String!
}


input UpdateContentVariationInformationInput {
  contentVariationId: String!
  contentBodies: [UpdateContentVariationContentInput!]!
}


input CreateContentBlockContentInput {
  mimeType: MimeType!
  content: String!
}


input UpdateContentBlockContentInput {
  mimeType: MimeType!
  content: String!
}


input KeyValuePairOfStringAndStringInput {
  key: String!
  value: String!
}


input MockContactInput {
  firstName: String
  lastName: String
  longitude: Decimal
  latitude: Decimal
  streetAddress: String
  streetAddress2: String
  addressLocality: String
  addressRegion: String
  postalCode: String
  addressCountry: String
  timeZone: String
  language: String
  email: String
  profileFields: [MockProfileFieldInput!]
}


input JourneyNodeNotificationInput {
  settings: JourneyNodeNoticificationSettingsInput
  header: JourneyNodeNoticificationHeaderInput
  content: JourneyNodeNoticificationContentInput
  variables: [JourneyNameValueInput!]
  recipients: [JourneyNodeNoticificationRecipientInput]
}


input DeliveryWindowInput {
  sendImmediate: Boolean!
  timeUtc: DateTime
  weekDays: String
  timeJumper: Boolean!
}


input SiteNotificationSettingsInput {
  tags: [String!]
  displayType: DisplayType
  positionX: PositionX
  positionY: PositionY
  animationType: AnimationType
  buttonType: ButtonType
  buttonText: String!
  buttonPosition: ButtonPosition
  iconUrl: String
  icon: IconType
  iconColor: String
  buttonColor: String
}


input SiteNotificationInput {
  title: String
  messageHtml: String
}


input JourneyNodeNoticificationRecipientInput {
  name: String
  emailAddress: String
  type: RecipientType
  variables: [JourneyNameValueInput!]
}


input JourneyNameValueInput {
  name: String
  value: String
}


input JourneyNodeNoticificationContentInput {
  contentHtml: String
}


input JourneyNodeNoticificationHeaderInput {
  subject: String
  bounceDomain: String
  from: JourneyNodeNoticificationBaseRecipientInput
  replyTo: JourneyNodeNoticificationBaseRecipientInput
  customHeaders: [JourneyNameValueInput!]
}


input JourneyNodeNoticificationSettingsInput {
  language: String
  sendAtUtc: DateTime
  sendRepliesTo: String
  sendBccTo: String
  showRecipients: Boolean
  content: JourneyNodeNoticificationContentSettingsInput
  analytics: JourneyNodeNoticificationAnalyticsInput
  contactData: JourneyNodeNoticificationContactDataSettingsInput
}


input MockProfileFieldInput {
  dataFieldId: String
  value: String
}


input UpdateContentVariationContentInput {
  mimeType: MimeType!
  content: String!
}


input FormDupSubActionInput {
  type: DuplicateSubmissionActionType
  renderType: ErrorAction
  message: String
  dialog: DialogSettingsInput
}


input NotifEmailSettingsInput {
  dataAttachmentFormat: DataAttachmentFormat
  contentHtml: String
}


input EmailSettingsInput {
  fromText: String
  fromEmail: String
  subject: String
  contentHtml: String
}


input DialogSettingsInput {
  content: String
  iconType: DialogIconType
  iconColor: String
  iconUrl: String
  buttonActionType: DialogButtonActionType
  buttonText: String
  redirectExternalUrl: String
  buttonColor: String
}


input LabelTranslationsInput {
  defaultValue: String
  translations: [TranslationInput]
}


input TransactionAnalyticsInput {
  """
  Indicated if analytics parameters will be appended to the end of each link URL within the body of the email.
  """
  enable: Boolean!
  """
  Analytics parameters (name/value pair) to be appended to each link URL within the body of the emails.
  """
  parameters: [NameValueInput!]
}


input TransactionContentSettingsInput {
  """
  Indicates whether a text version of the HTML content will be automatically generated.
  """
  autoGenerateText: Boolean!
  """
  Indicates whether a HTML version of the text content will be automatically generated.
  """
  autoGenerateHtml: Boolean!
}


input TransactionSandboxInput {
  """Indicates whether the sandbox mode is enabled."""
  enable: Boolean!
  """
  Indicates the forced error code to be return when creating a transaction. This is used for error handling in your code.
  """
  errorType: SandboxErrorType!
}


input TransactionTrackingInput {
  """Indicates whether email open events are tracked."""
  opens: Boolean
  """
  Indicates whether link click events are tracked. When enabled, links are rewritten to point to Tarvent before being automatically redirected to the intended link.
  """
  clicks: Boolean
  """
  Indicates whether the entire URL or base URL should be tracked. This should be enabled for deep links the are unique to each recipient to provide useful reporting.
  """
  stripQueryString: Boolean
  """
  Indicates if reply emails are tracked, filtered, and forwarded. If enabled, the reply email address settings will be used for forward replies after being tracked.
  """
  replies: Boolean
  """
  Indicated if site tracking is enabled when a contact ID is passed for a recipient instead of an email address.
  """
  domains: Boolean
}


input TransactionReplyToInput {
  """
  Name of the contact to be displayed when replying to the email, if reply tracking is disabled. Max length: 255 characters
  """
  name: String
  """
  Email address of the contact to be displayed when replying to the email, if reply tracking is disabled. If reply tracking is enabled, valid replies will be forwarded to this email address after being tracked. Max length: 320 characters
  """
  emailAddress: String!
}


input TransactionFromInput {
  """
  Name of the contact to be displayed as the sender of the email. Max length: 255 characters
  """
  name: String
  """
  Email address of the contact to be displayed as the sender of the email. Max length: 320 characters
  """
  emailAddress: String!
}


input TransactionContentBodyInput {
  """
  Indicates if click tracking is enabled. This will change the URL to a trackable URL will will redirect the recipient to the real URL once the click is tracked.
  """
  clickTracking: Boolean
  """
  Defines the character set used by the email client to render the body of the email. In most cases, UTF-8 is highly suggested.
  """
  charset: Charset
  """
  Defines the mime type of the content. Multiple mime types can be included in a single email. The recipient's email client will decide which mime type to render.
  """
  mimeType: MimeType!
  """
  The content that will be send for the specific mime type once variable data is merged in.
  """
  bodyContent: String!
}


"""Coupon duration"""
enum CouponDurationType {
  """One time coupon."""
  UNKNOWN
  """One time coupon."""
  ONE_TIME
  """Coupon applied for a limited time."""
  LIMITED
  """Coupon applied for the life of the account."""
  FOREVER
}


type RSSFeedItemField {
  name: String
  value: String
  type: RSSFeedItemFieldType!
}


type ContentBlockVersion {
  id: Float!
  lastModifiedUtc: DateTime!
}


type ArticleVersion {
  id: Float!
  lastModifiedUtc: DateTime!
}


"""Billing address information associated with a payment method."""
type BillingAddress {
  """First name displayed on the credit card."""
  firstName: String!
  """Last name displayed on the credit card."""
  lastName: String!
  """Street address associated with the credit card."""
  streetAddress: String!
  """Street address 2 associated with the credit card."""
  streetAddress2: String
  """Address locality associated with the credit card."""
  addressLocality: String!
  """Address region associated with the credit card."""
  addressRegion: String!
  """Postal code associated with the credit card."""
  postalCode: String!
  """Address country associated with the credit card."""
  addressCountry: String!
}


enum BankAccountType {
  CHECKING
  SAVINGS
  BUSINESS_CHECKING
  CURRENT
}


enum BankAccountHolderType {
  INDIVIDUAL
  COMPANY
}


type UserFastFact {
  fastFactKey: String
  userId: Long!
  user: Useruseruser
  isLiked: Boolean
}


"""Represents tha association of an account and user"""
type UserAccount {
  """ID of account"""
  accountId: Long!
  """Account"""
  account: GlobalAccount
  """ID of user"""
  userId: Long!
  """User"""
  user: Useruseruser
  """Date/time the user was created"""
  createdUtc: DateTime!
  """Date/time the user was invited"""
  invitedUtc: DateTime!
  """ID of user who created the invite"""
  invitedBy: String
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits.
  """
  isPartner: Boolean!
  """
  Indicates whether the user is a billing user for the account and should recieve billing communications.
  """
  isBillingContact: Boolean!
  """
  Indicates whether the user should recieve account level communications.
  """
  isAccountContact: Boolean!
  """Indicates the user account association is active"""
  isActive: Boolean!
}


type NotificationContent {
  id: Long!
  mimeType: String
  dataBlobId: String
  workingDataBlobId: String
  recoveryDataBlobId: String
  thumbnailUrl: String
  validContent: Boolean!
  autoSaveUtc: DateTime
  notificationId: Long!
  notification: Notification
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
  accountId: Long!
}


type OldTag {
  tagName: String
}


type EventClient {
  device: DeviceType
  software: SoftwareType
  os: OperatingSystemType
  referrer: String
}


type EventNetwork {
  ip: String
  protocol: String
  httpVerb: String
}


type ItemAddOnStorageDays {
  days: Int!
  feePct: Float!
}


type ItemAddOnFeeOption {
  quantity: Int!
  price: Float!
  overageFee: Float!
}


"""Unique billing account"""
type GlobalAccount {
  """Unique global account ID"""
  id: Long!
  """Unique name of account"""
  accountName: String
  """ID of user who owns the account"""
  accountOwnerId: Long!
  """Current account status"""
  status: AccountStatusDto!
  """Account status"""
  statusChangeUtc: DateTime
  """Reason for the status change."""
  statusChangeReason: String
  """Current account payment status"""
  paymentStatus: PaymentStatus
  """Indicates whether account has been soft deleted"""
  isDeleted: Boolean!
  """Reason account was deleted"""
  deleteReason: String
  """Street address associated with the account."""
  streetAddress: String
  """Street address 2 associated with the account."""
  streetAddress2: String
  """Address locality associated with the account."""
  addressLocality: String
  """Address region associated with the account."""
  addressRegion: String
  """Postal code associated with the account."""
  postalCode: String
  """Address country associated with the account."""
  addressCountry: String
  """Unique alias for tracking urls"""
  trackingAlias: String
  """Unique alias for pages urls (pages, surveys, and forms)"""
  pagesAlias: String
  """Unique alias for Tarvent application"""
  applicationAlias: String
  """URL of the business website."""
  website: URL
  """Phone number associated with the account."""
  phone: String
  """Please provide and feedback you feel we should know."""
  feedback: String
  """
  Please rate our customer service using a scale of 1 to 5 where 1 is *very dissatisfied* and 5 is *very satisfied*.
  """
  customerRating: Int!
  """Allow overages for the account's email marketing plan."""
  emailMarketingAllowOverages: Boolean!
  """Allow auto scaling for the account's email marketing plan."""
  emailMarketingAllowAutoScaling: Boolean!
  """Account's contact max limit based on last usage report."""
  emailMarketingMaxLimit: Int!
  """Email marketing plan current billing period start date."""
  emailMarketingStartUtc: DateTime!
  """Email marketing plan current billing period end date."""
  emailMarketingEndUtc: DateTime!
  """Email marketing plan is annual"""
  emailMarketingIsAnnual: Boolean!
  """Email marketing plan is trial"""
  emailMarketingIsTrial: Boolean!
  emailMarketingDgScheduled: Boolean
  emailMarketingDgSuccessful: Boolean
  emailMarketingDgEligibilityStatus: Boolean
  """Current Chargebee subscription ID"""
  currentSubscriptionId: Long!
  """Current Chargebee plan name"""
  currentPlanName: String
  """Current billing period start date/time"""
  currentBillingStartUtc: DateTime
  """Current billing period end date/time"""
  currentBillingEndUtc: DateTime
  """Next Chargebee subscription ID"""
  nextSubscriptionId: Long
  """Next Chargebee plan name"""
  nextPlanName: String
  """Next billing period start date/time"""
  nextBillingStartUtc: DateTime
  """Next billing period end date/time"""
  nextBillingEndUtc: DateTime
  """Plan change indicator: 0 = downgrade, 1 = upgrade, null = no change"""
  planChangeInd: Boolean
  allowOverages: Boolean!
  allowAutoScaling: Boolean!
  """Payment gateway customer profile ID"""
  customerProfileId: String
  """Accounting system account ID (currently Quickbooks Online)"""
  accountingId: String
  """Date/time the global account was created"""
  createdUtc: DateTime!
  """Id of user who created the global account"""
  createdBy: String
  """Date/time the global account was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the global account"""
  modifiedBy: String
  """Collection of users"""
  users: [UserAccount]
  """Collection of user invites"""
  userInvites: [Invite]
  """Collection of plans"""
  plans: [AccountServicePlan]
  """Collection of payment methods"""
  paymentMethods: [AccountPaymentMethod]
  """Collection of invoices"""
  invoices: [AccountInvoice2]
  """Collection of add-on"""
  addOns: [AccountAddOnHistory]
  """Collection of dedicated IPs"""
  ips: [AccountIp]
  """Collection of credit balance changes"""
  creditBalances: [AccountCreditBalance]
  """Collection of discounts"""
  discounts: [AccountPlanDiscount]
  """Collection of fees"""
  fees: [AccountFee]
  """Collection of status changes"""
  statusActivities: [AccountStatusActivity]
  """Collection of form path names"""
  formPathNames: [AccountFormPathName]
  """Collection of sending domains"""
  sendingDomains: [AccountSendingDomain]
  """Collection of bounce domains"""
  bounceDomains: [AccountBounceDomain]
  """Collection of Chargebee subscriptions (plans)"""
  subscriptions: [AccountSubscription]
  """Collection of facts"""
  facts: [AccountFact]
}


enum RSSFeedItemFieldType {
  STANDARD
  FEED_SPECIFIC
}


"""The possible character sets that can be used to encode content."""
enum Charset {
  """UTF-8, which is the common and default character set used."""
  UTF8
}


"""
Type of simulated error that can be returned within a transaction email API call for sandbox testing
"""
enum SandboxErrorType {
  """No error desired for testing"""
  NONE
  """Used to return a specific error number"""
  ERROR
  """Return an *invalid email* error"""
  INVALID_EMAIL
}


input TranslationInput {
  language: String
  value: String
}


input JourneyNodeNoticificationContactDataSettingsInput {
  dataLocation: JourneyNodeNotificationContactDataLocation!
  attachementFormat: JourneyNodeNotificationAttachmentFormat
  zipAttachement: Boolean
  includeContactOriginalData: Boolean
  includeContactCurrentData: Boolean
}


input JourneyNodeNoticificationAnalyticsInput {
  enable: Boolean!
  parameters: [JourneyNameValueInput!]
}


input JourneyNodeNoticificationContentSettingsInput {
  autoGenerateText: Boolean!
  autoGenerateHtml: Boolean!
}


input JourneyNodeNoticificationBaseRecipientInput {
  name: String
  emailAddress: String
}


type AccountFact {
  name: String
  value: String
  accountId: Long!
  account: GlobalAccount
}


type AccountSubscription {
  """PlanType of subscription"""
  planType: PlanType!
  """Current Chargebee subscription ID"""
  currentSubscriptionId: Long!
  """Current Chargebee plan id"""
  currentPlanId: String
  """Current Chargebee plan name"""
  currentPlanName: String
  """
  Current plan item limit. Based on tier selected when choosing plan or the previous month's tier limit.
  """
  currentPlanItemLimit: Int!
  """Current billing period start date/time"""
  currentBillingStartUtc: DateTime
  """Current billing period end date/time"""
  currentBillingEndUtc: DateTime
  """Next Chargebee subscription ID"""
  nextSubscriptionId: Long
  """Next Chargebee plan id"""
  nextPlanId: String
  """Next Chargebee plan name"""
  nextPlanName: String
  """Next billing period start date/time"""
  nextBillingStartUtc: DateTime
  """Next billing period end date/time"""
  nextBillingEndUtc: DateTime
  """
  Next plan item limit. Based on tier selected when choosing plan or the previous month's tier limit.
  """
  nextPlanItemLimit: Int!
  """Plan change indicator: 0 = downgrade, 1 = upgrade, null = no change"""
  planChangeInd: Boolean
  allowOverages: Boolean!
  allowAutoScaling: Boolean!
  isActive: Boolean!
  accountId: Long!
  account: GlobalAccount
}


type AccountBounceDomain {
  id: Long!
  domain: String
  isValid: Boolean!
  accountId: Long!
  account: GlobalAccount
}


type AccountSendingDomain {
  hash: [Byte!]
  domain: String
  selector: String
  isValid: Boolean!
  isValidUtc: DateTime
  accountId: Long!
  account: GlobalAccount
}


type AccountFormPathName {
  id: Long!
  pathName: String
  formId: Long!
  accountId: Long!
  account: GlobalAccount
}


"""Represents a history of account status changes"""
type AccountStatusActivity {
  """Unique status change ID"""
  id: Long!
  """Previous status of account"""
  oldStatus: AccountStatusDto!
  """New status of account"""
  newStatus: AccountStatusDto!
  """Date/time status was changed"""
  startUtc: DateTime
  """
  Date/time has to be changed back in cases where the status is set to *Relax* or *Hibernate*
  """
  endUtc: DateTime
  """Date/time the status history was created"""
  createdUtc: DateTime!
  """Id of user who created the status history"""
  createdBy: String
  """ID of the account"""
  accountId: Long!
  """Account"""
  account: GlobalAccount
}


"""Represents additional fees that may be applied to an account"""
type AccountFee {
  """Unique fee ID"""
  id: Long!
  """Description of fee"""
  description: String
  """Fee rate to be charged"""
  rate: Float!
  """Quantity of fee to be charged"""
  qty: Int!
  """Total fee amount ot be charged"""
  fee: Float!
  """Service type of the fee being charged"""
  serviceType: ServiceType!
  """Indicates whether fee is charged each billing cycle"""
  isRecurring: Boolean!
  """Date/time fee will start being applied"""
  startUtc: DateTime!
  """
  Date/time fee will next be applied. The initial value will be the same as the StartUtc
  """
  nextUtc: DateTime!
  """
  Date/time fee will stop being applied. This only affects recurring discounts.
  """
  endUtc: DateTime
  """Number of billing cycles between each fee charge."""
  billCycleInterval: Int!
  """Date/time the fee was created"""
  createdUtc: DateTime!
  """Id of user who created the fee"""
  createdBy: String
  """Date/time the fee was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the fee"""
  modifiedBy: String
  """Id of the account"""
  accountId: Long!
  """Account"""
  account: GlobalAccount
}


"""
Tracks the historical credit balance of an account plan that uses credits
"""
type AccountCreditBalance {
  """Unique plan credit balance ID"""
  id: Long!
  """Current credit balance"""
  balance: Float!
  """Reason for balance increase/decrease"""
  reasonCode: String
  """Value of credit increase/decrease"""
  creditValue: Float!
  """Service type associated with credits"""
  serviceType: ServiceType!
  """Date/time the credit balance was created"""
  createdUtc: DateTime!
  """Id of user who created the credit balance"""
  createdBy: String
  """ID of the account"""
  accountId: Long!
  """Account"""
  account: GlobalAccount
}


type AccountAddOnHistory {
  id: String!
  addOnType: AddOnType!
  purchaseUtc: DateTime!
  purchaseInvoiceNbr: String
  qtyPurchased: Int!
  qtyPrice: Float!
  """Transaction Email add-on only."""
  storageDays: Int!
  storageDaysPrice: Float!
  qtyUsed: Int!
  additionalFees: Float!
  additionalFeesDscr: String
  additionalFeesInvoiceNbr: String
  doNotRenew: Boolean!
  isCancelled: Boolean!
  createdUtc: DateTime!
  createdBy: String
  modifiedUtc: DateTime!
  modifiedBy: String
}


"""Represents services that have been billed to the account."""
type AccountInvoice2 {
  """Unique invoice ID"""
  id: Long!
  """Order/invoice ID"""
  orderNbr: String
  """Amount being billed"""
  amount: Float!
  """Total amount being billed"""
  totalAmount: Float!
  """Status of invoice"""
  invoiceStatus: InvoiceStatus!
  """Service period start date/time"""
  servicePeriodStartUtc: DateTime!
  """Service period end date/time"""
  servicePeriodEndUtc: DateTime!
  """Invoice due date/time"""
  dueUtc: DateTime!
  """Date/time the invoice was created"""
  createdUtc: DateTime!
  """Id of user who created the invoice"""
  createdBy: String
  """Date/time the invoice was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the invoice"""
  modifiedBy: String
  """
  Collection of line items detailing the specific services being invoiced for
  """
  lineItems: [AccountInvoiceLineItem]
  """Collection of payment receipts for the invoice"""
  receipts: [AccountReceipt]
}


"""
Method of payment saved to pay future invoices automatically. Please note that no sensitive credit card information is stored within Tarvent.
"""
type AccountPaymentMethod {
  """Unique payment method ID"""
  id: Long!
  """Unique nickname of payment method"""
  nickname: String
  """2 digit expiration month"""
  expMonth: Int!
  """4 digit expiration year"""
  expYear: Int!
  """
  Indicates whether payment method is the default method to be used to automatically pay invoices. Only one payment method can be the default.
  """
  isDefault: Boolean!
  """Last 4 digits of credit card to assist in identifying payment method"""
  last4Digits: String
  """Type of credit card"""
  cardNetwork: CreditCardNetwork!
  """Date/time the payment method was created"""
  createdUtc: DateTime!
  """Id of user who created the payment method"""
  createdBy: String
  """Date/time the payment method was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the payment method"""
  modifiedBy: String
}


"""
Account plan for a specific service type. Only one active plan per service type is allowed.
"""
type AccountServicePlan {
  """Unique account plan ID"""
  id: Long!
  """
  Date/time that the trial plan will end at which time a new plan much be selected for the account to remain active.
  """
  trialEndUtc: DateTime
  """Indicates whether account plan is active"""
  isActive: Boolean!
  """Date/time the plan started"""
  startUtc: DateTime!
  """Start date/time of current billing period"""
  currentBillStartUtc: DateTime!
  """End date/time of current billing period"""
  currentBillEndUtc: DateTime!
  """Start date/time of next billing period"""
  nextBillUtc: DateTime!
  """Indicates whether the plan is Pay-As-You-Go"""
  isPrepay: Boolean!
  """ID of next plan when downgrading plans"""
  nextPlanId: Long!
  """
  ID of credit block to be purchased when downgrading from a scale-based plan to credit-based plan
  """
  nextPlanCreditItemId: Long!
  """
  ID of credit block to automatically purchase when account credit balance is equal to or below *MinimumCredits*
  """
  autoRefillCreditItemId: Long!
  """
  Minimum credit balance that will trigger more credits to be automatically purchased
  """
  minimumCredits: Float!
  """Date/time the service plan was created"""
  createdUtc: DateTime!
  """Id of user who created the service plan"""
  createdBy: String
  """Date/time the service plan was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the service plan"""
  modifiedBy: String
  """ID of the service plan"""
  servicePlanId: Long!
  """Service plan"""
  servicePlan: ServicePlanDto
  """ID of the account"""
  accountId: Long!
  """Account"""
  account: GlobalAccount
}


scalar URL


"""Plan based on a service type that can be available to accounts"""
type ServicePlanDto {
  """Unique service plan ID"""
  id: Long!
  """Unique name of service plan"""
  planName: String
  """Unique internal service plan name"""
  internalPlanName: String
  """Description of service plan"""
  description: String
  """
  Indicates whether service plan is a trial plan. Only one service plan can be a trail per service type
  """
  isTrial: Boolean!
  """Number of days a trial plan can be used before an upgrade is required"""
  trialDays: Int!
  """Order of which the service plan is displayed"""
  displayOrder: Int!
  """
  Determines the perceived value of the service plan used to determine if the plan is an upgrade/downgrade from another service plan
  """
  rank: Float!
  """Non-monetary value of each credit"""
  creditValue: Float!
  """Service type associated with the plan"""
  serviceType: ServiceType!
  """Indicates whether service plan is displayed on websites/applications"""
  isPublic: Boolean!
  """Indicates whether service plan is active"""
  isActive: Boolean!
  """Date/time the service plan was created"""
  createdUtc: DateTime!
  """Id of user who created the service plan"""
  createdBy: String
  """Date/time the service plan was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the service plan"""
  modifiedBy: String
  """Collection of features"""
  features: [ServicePlanFeatureDto]
  """Collection of scales"""
  scales: [ServicePlanScale]
  """Collection of credit blocks"""
  credits: [ServicePlanCredit]
  """Collection of Account service plans"""
  accountServicePlans: [AccountServicePlan]
  """Collection of Account invoice line items"""
  accountInvoiceLineItems: [AccountInvoiceLineItem]
}


"""Payment receipt associated with an invoice that was paid"""
type AccountReceipt {
  """Unique receipt ID"""
  id: String!
  """Payment transaction ID"""
  transactionId: String
  """Amount charged to payment method"""
  amount: Float!
  """Reason credit card was declined."""
  reason: CardDeclineReason!
  """Payment status"""
  status: PaymentStatus!
  """Nickname of payment method used to make payment"""
  paymentNickname: String
  """2 digit expiration month"""
  paymentExpMonth: Int
  """4 digit expiration year"""
  paymentExpYear: Int
  """Last 4 digits of credit card to assist in identifying payment method"""
  paymentLast4Digits: String
  """Type of credit card"""
  paymentCardNetwork: CreditCardNetwork
  """Date/time the receipt was created"""
  createdUtc: DateTime!
  """Id of user who receipt the invoice"""
  createdBy: String
  """
  ID of invoice associated with the receipt. Refer to the **accountInvoice** query to get invoice details.
  """
  invoiceId: String!
}


"""Line items detail the specific services being invoiced for"""
type AccountInvoiceLineItem {
  """Unique line item ID"""
  id: String!
  """Service type"""
  serviceType: ServiceType
  """Description of service being invoiced for"""
  description: String
  """Service type fee rate"""
  rate: Float!
  """Number of items for the respective service type"""
  qty: Float!
  """Total amount due for this line item"""
  amount: Float!
  """Indicates whether line item is a discount or not"""
  isDiscount: Boolean!
  """Date/time the line item was created"""
  createdUtc: DateTime!
  """Id of user who created the line item"""
  createdBy: String
  """Date/time the line item was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the line item"""
  modifiedBy: String
}


"""Represents the configuration of a feature within a service plan"""
type ServicePlanFeatureDto {
  """Unique service plan feature ID"""
  id: Long!
  """Limit of feature when the account status is *Active*"""
  activeLimit: Long!
  """Limit of feature when the account status is *Relax*"""
  relaxLimit: Long!
  """Limit of feature when the account status is *Hibernate*"""
  hibernateLimit: Long!
  """Limit of feature when the account status is *Suspend*"""
  suspendLimit: Long!
  """Description of feature when the account status is *Active*"""
  activeDescription: String
  """Description of feature when the account status is *Relax*"""
  relaxDescription: String
  """Description of feature when the account status is *Hibernate*"""
  hibernateDescription: String
  """Description of feature when the account status is *Suspend*"""
  suspendDescription: String
  """Date/time the service plan feature was created"""
  createdUtc: DateTime!
  """Id of user who created the service plan feature"""
  createdBy: String
  """Date/time the service plan feature was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the service plan feature"""
  modifiedBy: String
  """ID of the Service plan"""
  servicePlanId: Long!
  """Service plan"""
  servicePlan: ServicePlanDto
  """ID of the Feature"""
  globalFeatureId: Long!
  """Feature"""
  globalFeature: GlobalFeature
}


"""Global feature that can be added to a service plan"""
type GlobalFeature {
  """Unique ID of feature"""
  id: Long!
  """Unique key code of feature"""
  keyCode: UUID
  """Unique name of feature"""
  name: String
  """Unique feature key"""
  key: String
  """Description of feature"""
  description: String
  """Indicates whether feature is displayed on websites/applications"""
  isPublic: Boolean!
  """Order in which the feature is displayed"""
  displayOrder: Int!
  """Indicates whether features is active"""
  isActive: Boolean!
  """Date/time the feature was created"""
  createdUtc: DateTime!
  """Id of user who created the feature"""
  createdBy: String
  """Date/time the feature was last modified"""
  modifiedUtc: DateTime!
  """Id of user who last modified the feature"""
  modifiedBy: String
  """Collection of service plan features"""
  servicePlanFeatures: [ServicePlanFeatureDto]
}


"""
The \`@defer\` directive may be provided for fragment spreads and inline fragments to inform the executor to delay the execution of the current fragment to indicate deprioritization of the current fragment. A query with \`@defer\` directive will cause the request to potentially return multiple responses, where non-deferred data is delivered in the initial response and data deferred is delivered in a subsequent response. \`@include\` and \`@skip\` take precedence over \`@defer\`.
"""
directive @defer(
  """
  If this argument label has a value other than null, it will be passed on to the result of this defer directive. This label is intended to give client applications a way to identify to which fragment a deferred result belongs to.
  """
  label: String
  """Deferred when true."""
  if: Boolean
) on FRAGMENT_SPREAD | INLINE_FRAGMENT
"""
The \`@stream\` directive may be provided for a field of \`List\` type so that the backend can leverage technology such as asynchronous iterators to provide a partial list in the initial response, and additional list items in subsequent responses. \`@include\` and \`@skip\` take precedence over \`@stream\`.
"""
directive @stream(
  """
  If this argument label has a value other than null, it will be passed on to the result of this stream directive. This label is intended to give client applications a way to identify to which fragment a streamed result belongs to.
  """
  label: String
  """The initial elements that shall be send down to the consumer."""
  initialCount: Int! = 0
  """Streamed when true."""
  if: Boolean
) on FIELD
directive @authorize(
  """
  The name of the authorization policy that determines access to the annotated resource.
  """
  policy: String
  """Roles that are allowed to access the annotated resource."""
  roles: [String!]
  """
  Defines when when the resolver shall be executed.By default the resolver is executed after the policy has determined that the current user is allowed to access the field.
  """
  apply: ApplyPolicy! = BEFORE_RESOLVER
) repeatable on SCHEMA | OBJECT | FIELD_DEFINITION
`,de=Cb(),Pu=$o(Vo.DIRECTIVES,[]);var Dc;const pb=zo((Dc=de.getQueryType())==null?void 0:Dc.getFields());var Ac;const cb=zo((Ac=de.getMutationType())==null?void 0:Ac.getFields());var vc;const db=zo((vc=de.getSubscriptionType())==null?void 0:vc.getFields()),as=wt.keyBy(Md(),i=>i.name.toLocaleLowerCase()),mb=wt.mapValues(as,i=>{const e=Pu.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return e?e.args.some(t=>t==="*")?i.args:e.args.map(t=>i.args.find(a=>a.name===t)).filter(t=>!!t):[]}),gb=zo(de.getTypeMap()),fb=ab(de);function zo(i){return wt.mapKeys(i||{},(e,t)=>t.toLocaleLowerCase())}function Ib(){return wt.size(de.getTypeMap())<=10}function Sb(){return[Du("Queries",de.getQueryType()),Du("Mutations",de.getMutationType()),Du("Subscriptions",de.getSubscriptionType()),Ob(),Tb()].filter(i=>!!i)}function Du(i,e){return hb(i,yb(e))}function yb(i){return wt.sortBy((i==null?void 0:i.getFields())||{},e=>e.name)}function hb(i,e){return e.length===0?null:{type:"menu",title:i,children:e.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:Ar.joinUrlPaths(jo(),i.toLocaleLowerCase(),t.name)}))}}function Tb(){return Ib()?null:{type:"menu",title:"Types",children:wt.sortBy(wt.map(de.getTypeMap()),e=>e.name).filter(e=>!e.name.startsWith("__")).map(e=>({type:"page",title:e.name,section:"Types",href:Ar.joinUrlPaths(jo(),"types",e.name)}))}}function kb(){return!!de.getQueryType()}function Mb(i){return pb[i.toLocaleLowerCase()]}function qb(){return!!de.getMutationType()}function Jb(i){return cb[i.toLocaleLowerCase()]}function Gb(){return!!de.getSubscriptionType()}function Vb(i){return db[i.toLocaleLowerCase()]}function $b(i){return gb[i.toLocaleLowerCase()]}function Fb(i){return as[i.toLocaleLowerCase()]}function jb(i){return Fb(i.name)!==void 0}function Wb(){return wt.size(as)>0}function Hb(i){return mb[i.name.toLocaleLowerCase()]||[]}function Qb(i){if(i)return fb.getFor(i)}function Yb(i){return wt.flatMap(i.getFields(),e=>({field:e,possibleDescriptions:kd(e,i)}))}function kd(i,e){return i?i.description?[{description:i.description,from:e}]:Wn(e)?e.getInterfaces().flatMap(t=>kd(t.getFields()[i.name],t)):[]:[]}function Md(){return Pu.some(i=>(i==null?void 0:i.name)==="*")?de.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):Pu.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?de.getDirective(i):void 0).filter(i=>!!i)}function Cb(){return Ec.trim().length===0?eb(JSON.parse(JSON.stringify({__schema:{types:[]}}))):ob(Ec)}function Ob(){const i=Md();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(e=>({type:"page",title:e.name,href:Ar.joinUrlPaths(jo(),"directives",e.name),section:"Directives"}))}}const Kb=$o(Vo.APP_TITLE,"GraphQL Documentation"),qd=bb().concat(Sb());Ab(qd);const Eb=Object.freeze(qd),zb=Db();function bb(){return $o(Vo.PAGES,Nb()).filter(e=>!!e).map(e=>Gd([],e))}function Db(){const i=vb();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function Ab(i){function e(a,o){for(const u of a){if(u.type==="page"){o(u);continue}u.type==="menu"&&e(u.children,o)}}let t;e(i,a=>{t&&(t.next={title:a.title,section:a.section,href:a.href},a.previous={title:t.title,section:t.section,href:t.href}),t=a})}function vb(){return Jd(()=>!0)}function Xb(i){return Jd(e=>e.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function Jd(i){function e(t){for(const a of t){if(a.type==="page"&&i(a))return a;if(a.type==="menu"){const o=e(a.children);if(o)return o}}return null}return e(Eb)}function Gd(i,e){if(typeof e.content=="string")return{type:"page",title:e.title,content:e.content,href:Ar.joinUrlPaths(jo(),...i,bc(e.title))};const t=i.concat([bc(e.title)]);return{type:"menu",title:e.title,children:e.content.map(a=>({...Gd(t,a),section:e.title}))}}function bc(i){return Ar.generatePathSegment(i,new Uc)}function Nb(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{UC as A,Ib as B,$b as C,Qb as D,zt as E,nt as F,Vn as G,qe as H,Wn as I,ye as J,F as K,Yb as L,fi as M,Pi as N,Lb as O,Jo as P,_c as Q,Sr as R,xb as S,Uc as T,hn as U,ze as V,Kb as W,wt as _,qb as a,kb as b,Mb as c,Gb as d,Vb as e,Xb as f,Jb as g,zb as h,wc as i,Rb as j,Wb as k,Fb as l,Hb as m,jo as n,jb as o,Eb as p,pt as q,ud as r,de as s,he as t,Ar as u,Dn as v,Pb as w,$o as x,Vo as y,cr as z};
