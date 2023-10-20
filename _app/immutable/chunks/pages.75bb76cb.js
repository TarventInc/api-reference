var vh=Object.defineProperty;var Nh=(i,e,t)=>e in i?vh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Fn=(i,e,t)=>(Nh(i,typeof e!="symbol"?e+"":e,t),t),_h=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var nu=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)};var oo=(i,e,t)=>(_h(i,e,"access private method"),t);import{b as Eo}from"./paths.1c52125d.js";import{S as Pn,i as kn,a as tn,t as ln,g as vt,c as Nt,b as Wt,d as pi,m as jt,e as Ht}from"./index.012ade26.js";import{s as _n,e as ie,i as En,d as X,r as et,u as Qp,f as Un,g as Rn,h as Wn,a4 as go,x as tt,y as it,z as rt,R as sr,q as pp,l as yu,m as hu,n as Tu,H as Xn,j as Ie,G as At,a as Fu,c as Cu,U as wh,V as Bh,a7 as cp,o as Uh}from"./scheduler.88297443.js";function pt(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Yp(i,e){const t={},o={},a={$$scope:1};let s=i.length;for(;s--;){const l=i[s],d=e[s];if(d){for(const m in l)m in d||(o[m]=1);for(const m in d)a[m]||(t[m]=d[m],a[m]=1);i[s]=d}else for(const m in l)a[m]=1}for(const l in o)l in t||(t[l]=void 0);return t}function UE(i){return typeof i=="object"&&i!==null?i:{}}function lu(...i){return"/"+i.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}function pu(i){return i.startsWith("/")||i.startsWith("#")}function Kp(i,e){return e.slug(i).replace(/--+/g,"-")}function eu(i){let e,t;const o=i[5].default,a=et(o,i,i[4],null);let s=[{id:i[1]}],l={};for(let d=0;d<s.length;d+=1)l=Qp(l,s[d]);return{c(){e=Un(`h${i[0].depth}`),a&&a.c(),this.h()},l(d){e=Rn(d,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var m=Wn(e);a&&a.l(m),m.forEach(X),this.h()},h(){go(`h${i[0].depth}`)(e,l)},m(d,m){En(d,e,m),a&&a.m(e,null),t=!0},p(d,m){a&&a.p&&(!t||m&16)&&tt(a,o,d,d[4],t?rt(o,d[4],m,null):it(d[4]),null),go(`h${d[0].depth}`)(e,l=Yp(s,[(!t||m&2)&&{id:d[1]}]))},i(d){t||(tn(a,d),t=!0)},o(d){ln(a,d),t=!1},d(d){d&&X(e),a&&a.d(d)}}}function Rh(i){let e=`h${i[0].depth}`,t,o,a=`h${i[0].depth}`&&eu(i);return{c(){a&&a.c(),t=ie()},l(s){a&&a.l(s),t=ie()},m(s,l){a&&a.m(s,l),En(s,t,l),o=!0},p(s,[l]){`h${s[0].depth}`?e?_n(e,`h${s[0].depth}`)?(a.d(1),a=eu(s),e=`h${s[0].depth}`,a.c(),a.m(t.parentNode,t)):a.p(s,l):(a=eu(s),e=`h${s[0].depth}`,a.c(),a.m(t.parentNode,t)):e&&(a.d(1),a=null,e=`h${s[0].depth}`)},i(s){o||(tn(a,s),o=!0)},o(s){ln(a,s),o=!1},d(s){s&&X(t),a&&a.d(s)}}}function xh(i,e,t){let{$$slots:o={},$$scope:a}=e,{token:s}=e,{options:l}=e;const d=void 0;let m;return i.$$set=S=>{"token"in S&&t(0,s=S.token),"options"in S&&t(2,l=S.options),"$$scope"in S&&t(4,a=S.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,m=Kp(s.text,l.slugger))},[s,m,l,d,a,o]}class Lh extends Pn{constructor(e){super(),kn(this,e,xh,Rh,_n,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function Ph(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Un("blockquote"),a&&a.c()},l(s){e=Rn(s,"BLOCKQUOTE",{});var l=Wn(e);a&&a.l(l),l.forEach(X)},m(s,l){En(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(tn(a,s),t=!0)},o(s){ln(a,s),t=!1},d(s){s&&X(e),a&&a.d(s)}}}function kh(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,d=void 0;return i.$$set=m=>{"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class Mh extends Pn{constructor(e){super(),kn(this,e,kh,Ph,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function dp(i,e,t){const o=i.slice();return o[3]=e[t],o}function mp(i){let e,t,o=pt(i[0]),a=[];for(let l=0;l<o.length;l+=1)a[l]=gp(dp(i,o,l));const s=l=>ln(a[l],1,1,()=>{a[l]=null});return{c(){for(let l=0;l<a.length;l+=1)a[l].c();e=ie()},l(l){for(let d=0;d<a.length;d+=1)a[d].l(l);e=ie()},m(l,d){for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(l,d);En(l,e,d),t=!0},p(l,d){if(d&7){o=pt(l[0]);let m;for(m=0;m<o.length;m+=1){const S=dp(l,o,m);a[m]?(a[m].p(S,d),tn(a[m],1)):(a[m]=gp(S),a[m].c(),tn(a[m],1),a[m].m(e.parentNode,e))}for(vt(),m=o.length;m<a.length;m+=1)s(m);Nt()}},i(l){if(!t){for(let d=0;d<o.length;d+=1)tn(a[d]);t=!0}},o(l){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)ln(a[d]);t=!1},d(l){l&&X(e),sr(a,l)}}}function gp(i){let e,t;return e=new zp({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Wt(e.$$.fragment)},l(o){pi(e.$$.fragment,o)},m(o,a){jt(e,o,a),t=!0},p(o,a){const s={};a&1&&(s.token=o[3]),a&2&&(s.renderers=o[1]),a&4&&(s.options=o[2]),e.$set(s)},i(o){t||(tn(e.$$.fragment,o),t=!0)},o(o){ln(e.$$.fragment,o),t=!1},d(o){Ht(e,o)}}}function qh(i){let e,t,o=i[0]&&mp(i);return{c(){o&&o.c(),e=ie()},l(a){o&&o.l(a),e=ie()},m(a,s){o&&o.m(a,s),En(a,e,s),t=!0},p(a,[s]){a[0]?o?(o.p(a,s),s&1&&tn(o,1)):(o=mp(a),o.c(),tn(o,1),o.m(e.parentNode,e)):o&&(vt(),ln(o,1,1,()=>{o=null}),Nt())},i(a){t||(tn(o),t=!0)},o(a){ln(o),t=!1},d(a){a&&X(e),o&&o.d(a)}}}function Jh(i,e,t){let{tokens:o}=e,{renderers:a}=e,{options:s}=e;return i.$$set=l=>{"tokens"in l&&t(0,o=l.tokens),"renderers"in l&&t(1,a=l.renderers),"options"in l&&t(2,s=l.options)},[o,a,s]}class Oo extends Pn{constructor(e){super(),kn(this,e,Jh,qh,_n,{tokens:0,renderers:1,options:2})}}function fp(i){let e,t,o;var a=i[1][i[0].type];function s(l,d){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[$h]},$$scope:{ctx:l}}}}return a&&(e=pp(a,s(i))),{c(){e&&Wt(e.$$.fragment),t=ie()},l(l){e&&pi(e.$$.fragment,l),t=ie()},m(l,d){e&&jt(e,l,d),En(l,t,d),o=!0},p(l,d){if(d&3&&a!==(a=l[1][l[0].type])){if(e){vt();const m=e;ln(m.$$.fragment,1,0,()=>{Ht(m,1)}),Nt()}a?(e=pp(a,s(l)),Wt(e.$$.fragment),tn(e.$$.fragment,1),jt(e,t.parentNode,t)):e=null}else if(a){const m={};d&1&&(m.token=l[0]),d&4&&(m.options=l[2]),d&2&&(m.renderers=l[1]),d&15&&(m.$$scope={dirty:d,ctx:l}),e.$set(m)}},i(l){o||(e&&tn(e.$$.fragment,l),o=!0)},o(l){e&&ln(e.$$.fragment,l),o=!1},d(l){l&&X(t),e&&Ht(e,l)}}}function Gh(i){let e=i[0].raw+"",t;return{c(){t=yu(e)},l(o){t=hu(o,e)},m(o,a){En(o,t,a)},p(o,a){a&1&&e!==(e=o[0].raw+"")&&Tu(t,e)},i:Xn,o:Xn,d(o){o&&X(t)}}}function Vh(i){let e,t;return e=new Oo({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Wt(e.$$.fragment)},l(o){pi(e.$$.fragment,o)},m(o,a){jt(e,o,a),t=!0},p(o,a){const s={};a&1&&(s.tokens=o[0].tokens),a&2&&(s.renderers=o[1]),a&4&&(s.options=o[2]),e.$set(s)},i(o){t||(tn(e.$$.fragment,o),t=!0)},o(o){ln(e.$$.fragment,o),t=!1},d(o){Ht(e,o)}}}function $h(i){let e,t,o,a;const s=[Vh,Gh],l=[];function d(m,S){return"tokens"in m[0]&&m[0].tokens?0:1}return e=d(i),t=l[e]=s[e](i),{c(){t.c(),o=ie()},l(m){t.l(m),o=ie()},m(m,S){l[e].m(m,S),En(m,o,S),a=!0},p(m,S){let y=e;e=d(m),e===y?l[e].p(m,S):(vt(),ln(l[y],1,1,()=>{l[y]=null}),Nt(),t=l[e],t?t.p(m,S):(t=l[e]=s[e](m),t.c()),tn(t,1),t.m(o.parentNode,o))},i(m){a||(tn(t),a=!0)},o(m){ln(t),a=!1},d(m){m&&X(o),l[e].d(m)}}}function Wh(i){let e,t,o=i[1][i[0].type]&&fp(i);return{c(){o&&o.c(),e=ie()},l(a){o&&o.l(a),e=ie()},m(a,s){o&&o.m(a,s),En(a,e,s),t=!0},p(a,[s]){a[1][a[0].type]?o?(o.p(a,s),s&3&&tn(o,1)):(o=fp(a),o.c(),tn(o,1),o.m(e.parentNode,e)):o&&(vt(),ln(o,1,1,()=>{o=null}),Nt())},i(a){t||(tn(o),t=!0)},o(a){ln(o),t=!1},d(a){a&&X(e),o&&o.d(a)}}}function jh(i,e,t){let{token:o}=e,{renderers:a}=e,{options:s}=e;return i.$$set=l=>{"token"in l&&t(0,o=l.token),"renderers"in l&&t(1,a=l.renderers),"options"in l&&t(2,s=l.options)},[o,a,s]}class zp extends Pn{constructor(e){super(),kn(this,e,jh,Wh,_n,{token:0,renderers:1,options:2})}}function Ip(i,e,t){const o=i.slice();return o[4]=e[t],o}function Sp(i){let e,t;return e=new zp({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Wt(e.$$.fragment)},l(o){pi(e.$$.fragment,o)},m(o,a){jt(e,o,a),t=!0},p(o,a){const s={};a&1&&(s.token={...o[4]}),a&2&&(s.options=o[1]),a&4&&(s.renderers=o[2]),e.$set(s)},i(o){t||(tn(e.$$.fragment,o),t=!0)},o(o){ln(e.$$.fragment,o),t=!1},d(o){Ht(e,o)}}}function tu(i){let e,t,o,a=pt(i[0].items),s=[];for(let S=0;S<a.length;S+=1)s[S]=Sp(Ip(i,a,S));const l=S=>ln(s[S],1,1,()=>{s[S]=null});let d=[{start:t=i[0].start||1}],m={};for(let S=0;S<d.length;S+=1)m=Qp(m,d[S]);return{c(){e=Un(i[3]);for(let S=0;S<s.length;S+=1)s[S].c();this.h()},l(S){e=Rn(S,(i[3]||"null").toUpperCase(),{start:!0});var y=Wn(e);for(let F=0;F<s.length;F+=1)s[F].l(y);y.forEach(X),this.h()},h(){go(i[3])(e,m)},m(S,y){En(S,e,y);for(let F=0;F<s.length;F+=1)s[F]&&s[F].m(e,null);o=!0},p(S,y){if(y&7){a=pt(S[0].items);let F;for(F=0;F<a.length;F+=1){const A=Ip(S,a,F);s[F]?(s[F].p(A,y),tn(s[F],1)):(s[F]=Sp(A),s[F].c(),tn(s[F],1),s[F].m(e,null))}for(vt(),F=a.length;F<s.length;F+=1)l(F);Nt()}go(S[3])(e,m=Yp(d,[(!o||y&1&&t!==(t=S[0].start||1))&&{start:t}]))},i(S){if(!o){for(let y=0;y<a.length;y+=1)tn(s[y]);o=!0}},o(S){s=s.filter(Boolean);for(let y=0;y<s.length;y+=1)ln(s[y]);o=!1},d(S){S&&X(e),sr(s,S)}}}function Hh(i){let e=i[3],t,o=i[3]&&tu(i);return{c(){o&&o.c(),t=ie()},l(a){o&&o.l(a),t=ie()},m(a,s){o&&o.m(a,s),En(a,t,s)},p(a,[s]){a[3]?e?_n(e,a[3])?(o.d(1),o=tu(a),e=a[3],o.c(),o.m(t.parentNode,t)):o.p(a,s):(o=tu(a),e=a[3],o.c(),o.m(t.parentNode,t)):e&&(o.d(1),o=null,e=a[3])},i:Xn,o(a){ln(o,a)},d(a){a&&X(t),o&&o.d(a)}}}function Qh(i,e,t){let{token:o}=e,{options:a}=e,{renderers:s}=e,l;return i.$$set=d=>{"token"in d&&t(0,o=d.token),"options"in d&&t(1,a=d.options),"renderers"in d&&t(2,s=d.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,l=o.ordered?"ol":"ul")},[o,a,s,l]}class Yh extends Pn{constructor(e){super(),kn(this,e,Qh,Hh,_n,{token:0,options:1,renderers:2})}}function Kh(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Un("li"),a&&a.c()},l(s){e=Rn(s,"LI",{});var l=Wn(e);a&&a.l(l),l.forEach(X)},m(s,l){En(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(tn(a,s),t=!0)},o(s){ln(a,s),t=!1},d(s){s&&X(e),a&&a.d(s)}}}function zh(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,d=void 0;return i.$$set=m=>{"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class Xh extends Pn{constructor(e){super(),kn(this,e,zh,Kh,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Zh(i){let e;return{c(){e=Un("br")},l(t){e=Rn(t,"BR",{})},m(t,o){En(t,e,o)},p:Xn,i:Xn,o:Xn,d(t){t&&X(e)}}}function nT(i,e,t){return[void 0,void 0,void 0]}class eT extends Pn{constructor(e){super(),kn(this,e,nT,Zh,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tT(i){let e,t,o=i[0].text+"",a,s;return{c(){e=Un("pre"),t=Un("code"),a=yu(o),this.h()},l(l){e=Rn(l,"PRE",{});var d=Wn(e);t=Rn(d,"CODE",{class:!0});var m=Wn(t);a=hu(m,o),m.forEach(X),d.forEach(X),this.h()},h(){Ie(t,"class",s=`lang-${i[0].lang}`)},m(l,d){En(l,e,d),At(e,t),At(t,a)},p(l,[d]){d&1&&o!==(o=l[0].text+"")&&Tu(a,o),d&1&&s!==(s=`lang-${l[0].lang}`)&&Ie(t,"class",s)},i:Xn,o:Xn,d(l){l&&X(e)}}}function iT(i,e,t){let{token:o}=e;const a=void 0,s=void 0;return i.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,a,s]}class rT extends Pn{constructor(e){super(),kn(this,e,iT,tT,_n,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function oT(i){let e,t=i[0].raw.slice(1,i[0].raw.length-1)+"",o;return{c(){e=Un("code"),o=yu(t)},l(a){e=Rn(a,"CODE",{});var s=Wn(e);o=hu(s,t),s.forEach(X)},m(a,s){En(a,e,s),At(e,o)},p(a,[s]){s&1&&t!==(t=a[0].raw.slice(1,a[0].raw.length-1)+"")&&Tu(o,t)},i:Xn,o:Xn,d(a){a&&X(e)}}}function aT(i,e,t){let{token:o}=e;const a=void 0,s=void 0;return i.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,a,s]}class uT extends Pn{constructor(e){super(),kn(this,e,aT,oT,_n,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function yp(i,e,t){const o=i.slice();return o[3]=e[t],o}function hp(i,e,t){const o=i.slice();return o[6]=e[t],o}function Tp(i,e,t){const o=i.slice();return o[9]=e[t],o}function Fp(i){let e,t,o,a;return t=new Oo({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){e=Un("th"),Wt(t.$$.fragment),o=Fu(),this.h()},l(s){e=Rn(s,"TH",{scope:!0});var l=Wn(e);pi(t.$$.fragment,l),o=Cu(l),l.forEach(X),this.h()},h(){Ie(e,"scope","col")},m(s,l){En(s,e,l),jt(t,e,null),At(e,o),a=!0},p(s,l){const d={};l&1&&(d.tokens=s[9].tokens),l&2&&(d.options=s[1]),l&4&&(d.renderers=s[2]),t.$set(d)},i(s){a||(tn(t.$$.fragment,s),a=!0)},o(s){ln(t.$$.fragment,s),a=!1},d(s){s&&X(e),Ht(t)}}}function Cp(i){let e,t,o;return t=new Oo({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){e=Un("td"),Wt(t.$$.fragment)},l(a){e=Rn(a,"TD",{});var s=Wn(e);pi(t.$$.fragment,s),s.forEach(X)},m(a,s){En(a,e,s),jt(t,e,null),o=!0},p(a,s){const l={};s&1&&(l.tokens=a[6].tokens),s&2&&(l.options=a[1]),s&4&&(l.renderers=a[2]),t.$set(l)},i(a){o||(tn(t.$$.fragment,a),o=!0)},o(a){ln(t.$$.fragment,a),o=!1},d(a){a&&X(e),Ht(t)}}}function Ep(i){let e,t,o,a=pt(i[3]),s=[];for(let d=0;d<a.length;d+=1)s[d]=Cp(hp(i,a,d));const l=d=>ln(s[d],1,1,()=>{s[d]=null});return{c(){e=Un("tr");for(let d=0;d<s.length;d+=1)s[d].c();t=Fu()},l(d){e=Rn(d,"TR",{});var m=Wn(e);for(let S=0;S<s.length;S+=1)s[S].l(m);t=Cu(m),m.forEach(X)},m(d,m){En(d,e,m);for(let S=0;S<s.length;S+=1)s[S]&&s[S].m(e,null);At(e,t),o=!0},p(d,m){if(m&7){a=pt(d[3]);let S;for(S=0;S<a.length;S+=1){const y=hp(d,a,S);s[S]?(s[S].p(y,m),tn(s[S],1)):(s[S]=Cp(y),s[S].c(),tn(s[S],1),s[S].m(e,t))}for(vt(),S=a.length;S<s.length;S+=1)l(S);Nt()}},i(d){if(!o){for(let m=0;m<a.length;m+=1)tn(s[m]);o=!0}},o(d){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)ln(s[m]);o=!1},d(d){d&&X(e),sr(s,d)}}}function sT(i){let e,t,o,a,s,l,d=pt(i[0].header),m=[];for(let B=0;B<d.length;B+=1)m[B]=Fp(Tp(i,d,B));const S=B=>ln(m[B],1,1,()=>{m[B]=null});let y=pt(i[0].rows),F=[];for(let B=0;B<y.length;B+=1)F[B]=Ep(yp(i,y,B));const A=B=>ln(F[B],1,1,()=>{F[B]=null});return{c(){e=Un("table"),t=Un("thead"),o=Un("tr");for(let B=0;B<m.length;B+=1)m[B].c();a=Fu(),s=Un("tbody");for(let B=0;B<F.length;B+=1)F[B].c()},l(B){e=Rn(B,"TABLE",{});var R=Wn(e);t=Rn(R,"THEAD",{});var x=Wn(t);o=Rn(x,"TR",{});var z=Wn(o);for(let Vn=0;Vn<m.length;Vn+=1)m[Vn].l(z);z.forEach(X),x.forEach(X),a=Cu(R),s=Rn(R,"TBODY",{});var fn=Wn(s);for(let Vn=0;Vn<F.length;Vn+=1)F[Vn].l(fn);fn.forEach(X),R.forEach(X)},m(B,R){En(B,e,R),At(e,t),At(t,o);for(let x=0;x<m.length;x+=1)m[x]&&m[x].m(o,null);At(e,a),At(e,s);for(let x=0;x<F.length;x+=1)F[x]&&F[x].m(s,null);l=!0},p(B,[R]){if(R&7){d=pt(B[0].header);let x;for(x=0;x<d.length;x+=1){const z=Tp(B,d,x);m[x]?(m[x].p(z,R),tn(m[x],1)):(m[x]=Fp(z),m[x].c(),tn(m[x],1),m[x].m(o,null))}for(vt(),x=d.length;x<m.length;x+=1)S(x);Nt()}if(R&7){y=pt(B[0].rows);let x;for(x=0;x<y.length;x+=1){const z=yp(B,y,x);F[x]?(F[x].p(z,R),tn(F[x],1)):(F[x]=Ep(z),F[x].c(),tn(F[x],1),F[x].m(s,null))}for(vt(),x=y.length;x<F.length;x+=1)A(x);Nt()}},i(B){if(!l){for(let R=0;R<d.length;R+=1)tn(m[R]);for(let R=0;R<y.length;R+=1)tn(F[R]);l=!0}},o(B){m=m.filter(Boolean);for(let R=0;R<m.length;R+=1)ln(m[R]);F=F.filter(Boolean);for(let R=0;R<F.length;R+=1)ln(F[R]);l=!1},d(B){B&&X(e),sr(m,B),sr(F,B)}}}function lT(i,e,t){let{token:o}=e,{options:a}=e,{renderers:s}=e;return i.$$set=l=>{"token"in l&&t(0,o=l.token),"options"in l&&t(1,a=l.options),"renderers"in l&&t(2,s=l.renderers)},[o,a,s]}class pT extends Pn{constructor(e){super(),kn(this,e,lT,sT,_n,{token:0,options:1,renderers:2})}}function cT(i){let e,t=i[0].text+"",o;return{c(){e=new wh(!1),o=ie(),this.h()},l(a){e=Bh(a,!1),o=ie(),this.h()},h(){e.a=o},m(a,s){e.m(t,a,s),En(a,o,s)},p(a,[s]){s&1&&t!==(t=a[0].text+"")&&e.p(t)},i:Xn,o:Xn,d(a){a&&(X(o),e.d())}}}function dT(i,e,t){let{token:o}=e;const a=void 0,s=void 0;return i.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,a,s]}class mT extends Pn{constructor(e){super(),kn(this,e,dT,cT,_n,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function gT(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Un("p"),a&&a.c()},l(s){e=Rn(s,"P",{});var l=Wn(e);a&&a.l(l),l.forEach(X)},m(s,l){En(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(tn(a,s),t=!0)},o(s){ln(a,s),t=!1},d(s){s&&X(e),a&&a.d(s)}}}function fT(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,d=void 0;return i.$$set=m=>{"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class IT extends Pn{constructor(e){super(),kn(this,e,fT,gT,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ST(i){let e,t,o,a;const s=i[4].default,l=et(s,i,i[3],null);return{c(){e=Un("a"),l&&l.c(),this.h()},l(d){e=Rn(d,"A",{href:!0,title:!0});var m=Wn(e);l&&l.l(m),m.forEach(X),this.h()},h(){Ie(e,"href",t=pu(i[0].href)?lu(i[1].baseUrl,i[0].href):i[0].href),Ie(e,"title",o=i[0].title)},m(d,m){En(d,e,m),l&&l.m(e,null),a=!0},p(d,[m]){l&&l.p&&(!a||m&8)&&tt(l,s,d,d[3],a?rt(s,d[3],m,null):it(d[3]),null),(!a||m&3&&t!==(t=pu(d[0].href)?lu(d[1].baseUrl,d[0].href):d[0].href))&&Ie(e,"href",t),(!a||m&1&&o!==(o=d[0].title))&&Ie(e,"title",o)},i(d){a||(tn(l,d),a=!0)},o(d){ln(l,d),a=!1},d(d){d&&X(e),l&&l.d(d)}}}function yT(i,e,t){let{$$slots:o={},$$scope:a}=e,{token:s}=e,{options:l}=e;const d=void 0;return i.$$set=m=>{"token"in m&&t(0,s=m.token),"options"in m&&t(1,l=m.options),"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class hT extends Pn{constructor(e){super(),kn(this,e,yT,ST,_n,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function TT(i){let e;const t=i[4].default,o=et(t,i,i[3],null);return{c(){o&&o.c()},l(a){o&&o.l(a)},m(a,s){o&&o.m(a,s),e=!0},p(a,[s]){o&&o.p&&(!e||s&8)&&tt(o,t,a,a[3],e?rt(t,a[3],s,null):it(a[3]),null)},i(a){e||(tn(o,a),e=!0)},o(a){ln(o,a),e=!1},d(a){o&&o.d(a)}}}function FT(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,d=void 0;return i.$$set=m=>{"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class CT extends Pn{constructor(e){super(),kn(this,e,FT,TT,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ET(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Un("dfn"),a&&a.c()},l(s){e=Rn(s,"DFN",{});var l=Wn(e);a&&a.l(l),l.forEach(X)},m(s,l){En(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(tn(a,s),t=!0)},o(s){ln(a,s),t=!1},d(s){s&&X(e),a&&a.d(s)}}}function OT(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,d=void 0;return i.$$set=m=>{"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class bT extends Pn{constructor(e){super(),kn(this,e,OT,ET,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function DT(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Un("del"),a&&a.c()},l(s){e=Rn(s,"DEL",{});var l=Wn(e);a&&a.l(l),l.forEach(X)},m(s,l){En(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(tn(a,s),t=!0)},o(s){ln(a,s),t=!1},d(s){s&&X(e),a&&a.d(s)}}}function AT(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,d=void 0;return i.$$set=m=>{"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class vT extends Pn{constructor(e){super(),kn(this,e,AT,DT,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function NT(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Un("em"),a&&a.c()},l(s){e=Rn(s,"EM",{});var l=Wn(e);a&&a.l(l),l.forEach(X)},m(s,l){En(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(tn(a,s),t=!0)},o(s){ln(a,s),t=!1},d(s){s&&X(e),a&&a.d(s)}}}function _T(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,d=void 0;return i.$$set=m=>{"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class wT extends Pn{constructor(e){super(),kn(this,e,_T,NT,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function BT(i){let e;return{c(){e=Un("hr")},l(t){e=Rn(t,"HR",{})},m(t,o){En(t,e,o)},p:Xn,i:Xn,o:Xn,d(t){t&&X(e)}}}function UT(i,e,t){return[void 0,void 0,void 0]}class RT extends Pn{constructor(e){super(),kn(this,e,UT,BT,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function xT(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Un("strong"),a&&a.c()},l(s){e=Rn(s,"STRONG",{});var l=Wn(e);a&&a.l(l),l.forEach(X)},m(s,l){En(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(tn(a,s),t=!0)},o(s){ln(a,s),t=!1},d(s){s&&X(e),a&&a.d(s)}}}function LT(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,d=void 0;return i.$$set=m=>{"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class PT extends Pn{constructor(e){super(),kn(this,e,LT,xT,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function kT(i){let e,t,o,a;return{c(){e=Un("img"),this.h()},l(s){e=Rn(s,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){cp(e.src,t=i[0].href)||Ie(e,"src",t),Ie(e,"title",o=i[0].title),Ie(e,"alt",a=i[0].text),Ie(e,"class","markdown-image svelte-z38cge")},m(s,l){En(s,e,l)},p(s,[l]){l&1&&!cp(e.src,t=s[0].href)&&Ie(e,"src",t),l&1&&o!==(o=s[0].title)&&Ie(e,"title",o),l&1&&a!==(a=s[0].text)&&Ie(e,"alt",a)},i:Xn,o:Xn,d(s){s&&X(e)}}}function MT(i,e,t){let{token:o}=e;const a=void 0,s=void 0;return i.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,a,s]}class qT extends Pn{constructor(e){super(),kn(this,e,MT,kT,_n,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function JT(i){let e;const t=i[4].default,o=et(t,i,i[3],null);return{c(){o&&o.c()},l(a){o&&o.l(a)},m(a,s){o&&o.m(a,s),e=!0},p(a,[s]){o&&o.p&&(!e||s&8)&&tt(o,t,a,a[3],e?rt(t,a[3],s,null):it(a[3]),null)},i(a){e||(tn(o,a),e=!0)},o(a){ln(o,a),e=!1},d(a){o&&o.d(a)}}}function GT(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,d=void 0;return i.$$set=m=>{"$$scope"in m&&t(3,a=m.$$scope)},[s,l,d,a,o]}class Op extends Pn{constructor(e){super(),kn(this,e,GT,JT,_n,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Eu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let ci=Eu();function Xp(i){ci=i}const Zp=/[&<>"']/,VT=new RegExp(Zp.source,"g"),nc=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,$T=new RegExp(nc.source,"g"),WT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bp=i=>WT[i];function De(i,e){if(e){if(Zp.test(i))return i.replace(VT,bp)}else if(nc.test(i))return i.replace($T,bp);return i}const jT=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function HT(i){return i.replace(jT,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const QT=/(^|[^\[])\^/g;function hn(i,e){i=typeof i=="string"?i:i.source,e=e||"";const t={replace:(o,a)=>(a=typeof a=="object"&&"source"in a?a.source:a,a=a.replace(QT,"$1"),i=i.replace(o,a),t),getRegex:()=>new RegExp(i,e)};return t}function Dp(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const fo={exec:()=>null};function Ap(i,e){const t=i.replace(/\|/g,(s,l,d)=>{let m=!1,S=l;for(;--S>=0&&d[S]==="\\";)m=!m;return m?"|":" |"}),o=t.split(/ \|/);let a=0;if(o[0].trim()||o.shift(),o.length>0&&!o[o.length-1].trim()&&o.pop(),e)if(o.length>e)o.splice(e);else for(;o.length<e;)o.push("");for(;a<o.length;a++)o[a]=o[a].trim().replace(/\\\|/g,"|");return o}function iu(i,e,t){const o=i.length;if(o===0)return"";let a=0;for(;a<o;){const s=i.charAt(o-a-1);if(s===e&&!t)a++;else if(s!==e&&t)a++;else break}return i.slice(0,o-a)}function YT(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let o=0;o<i.length;o++)if(i[o]==="\\")o++;else if(i[o]===e[0])t++;else if(i[o]===e[1]&&(t--,t<0))return o;return-1}function vp(i,e,t,o){const a=e.href,s=e.title?De(e.title):null,l=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){o.state.inLink=!0;const d={type:"link",raw:t,href:a,title:s,text:l,tokens:o.inlineTokens(l)};return o.state.inLink=!1,d}return{type:"image",raw:t,href:a,title:s,text:De(l)}}function KT(i,e){const t=i.match(/^(\s+)(?:```)/);if(t===null)return e;const o=t[1];return e.split(`
`).map(a=>{const s=a.match(/^\s+/);if(s===null)return a;const[l]=s;return l.length>=o.length?a.slice(o.length):a}).join(`
`)}class Io{constructor(e){Fn(this,"options");Fn(this,"rules");Fn(this,"lexer");this.options=e||ci}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const o=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?o:iu(o,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const o=t[0],a=KT(o,t[3]||"");return{type:"code",raw:o,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:a}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let o=t[2].trim();if(/#$/.test(o)){const a=iu(o,"#");(this.options.pedantic||!a||/ $/.test(a))&&(o=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const o=t[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(o);return this.lexer.state.top=a,{type:"blockquote",raw:t[0],tokens:s,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let o=t[1].trim();const a=o.length>1,s={type:"list",raw:"",ordered:a,start:a?+o.slice(0,-1):"",loose:!1,items:[]};o=a?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=a?o:"[*+-]");const l=new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`);let d="",m="",S=!1;for(;e;){let y=!1;if(!(t=l.exec(e))||this.rules.block.hr.test(e))break;d=t[0],e=e.substring(d.length);let F=t[2].split(`
`,1)[0].replace(/^\t+/,fn=>" ".repeat(3*fn.length)),A=e.split(`
`,1)[0],B=0;this.options.pedantic?(B=2,m=F.trimStart()):(B=t[2].search(/[^ ]/),B=B>4?1:B,m=F.slice(B),B+=t[1].length);let R=!1;if(!F&&/^ *$/.test(A)&&(d+=A+`
`,e=e.substring(A.length+1),y=!0),!y){const fn=new RegExp(`^ {0,${Math.min(3,B-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Vn=new RegExp(`^ {0,${Math.min(3,B-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Dn=new RegExp(`^ {0,${Math.min(3,B-1)}}(?:\`\`\`|~~~)`),wn=new RegExp(`^ {0,${Math.min(3,B-1)}}#`);for(;e;){const xn=e.split(`
`,1)[0];if(A=xn,this.options.pedantic&&(A=A.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Dn.test(A)||wn.test(A)||fn.test(A)||Vn.test(e))break;if(A.search(/[^ ]/)>=B||!A.trim())m+=`
`+A.slice(B);else{if(R||F.search(/[^ ]/)>=4||Dn.test(F)||wn.test(F)||Vn.test(F))break;m+=`
`+A}!R&&!A.trim()&&(R=!0),d+=xn+`
`,e=e.substring(xn.length+1),F=A.slice(B)}}s.loose||(S?s.loose=!0:/\n *\n *$/.test(d)&&(S=!0));let x=null,z;this.options.gfm&&(x=/^\[[ xX]\] /.exec(m),x&&(z=x[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:d,task:!!x,checked:z,loose:!1,text:m,tokens:[]}),s.raw+=d}s.items[s.items.length-1].raw=d.trimEnd(),s.items[s.items.length-1].text=m.trimEnd(),s.raw=s.raw.trimEnd();for(let y=0;y<s.items.length;y++)if(this.lexer.state.top=!1,s.items[y].tokens=this.lexer.blockTokens(s.items[y].text,[]),!s.loose){const F=s.items[y].tokens.filter(B=>B.type==="space"),A=F.length>0&&F.some(B=>/\n.*\n/.test(B.raw));s.loose=A}if(s.loose)for(let y=0;y<s.items.length;y++)s.items[y].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const o=t[1].toLowerCase().replace(/\s+/g," "),a=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:o,raw:t[0],href:a,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(t){if(!/[:|]/.test(t[2]))return;const o={type:"table",raw:t[0],header:Ap(t[1]).map(a=>({text:a,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(o.header.length===o.align.length){let a=o.align.length,s,l,d,m;for(s=0;s<a;s++){const S=o.align[s];S&&(/^ *-+: *$/.test(S)?o.align[s]="right":/^ *:-+: *$/.test(S)?o.align[s]="center":/^ *:-+ *$/.test(S)?o.align[s]="left":o.align[s]=null)}for(a=o.rows.length,s=0;s<a;s++)o.rows[s]=Ap(o.rows[s],o.header.length).map(S=>({text:S,tokens:[]}));for(a=o.header.length,l=0;l<a;l++)o.header[l].tokens=this.lexer.inline(o.header[l].text);for(a=o.rows.length,l=0;l<a;l++)for(m=o.rows[l],d=0;d<m.length;d++)m[d].tokens=this.lexer.inline(m[d].text);return o}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const o=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:o,tokens:this.lexer.inline(o)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:De(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const o=t[2].trim();if(!this.options.pedantic&&/^</.test(o)){if(!/>$/.test(o))return;const l=iu(o.slice(0,-1),"\\");if((o.length-l.length)%2===0)return}else{const l=YT(t[2],"()");if(l>-1){const m=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,m).trim(),t[3]=""}}let a=t[2],s="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);l&&(a=l[1],s=l[3])}else s=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(o)?a=a.slice(1):a=a.slice(1,-1)),vp(t,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let o;if((o=this.rules.inline.reflink.exec(e))||(o=this.rules.inline.nolink.exec(e))){let a=(o[2]||o[1]).replace(/\s+/g," ");if(a=t[a.toLowerCase()],!a){const s=o[0].charAt(0);return{type:"text",raw:s,text:s}}return vp(o,a,o[0],this.lexer)}}emStrong(e,t,o=""){let a=this.rules.inline.emStrong.lDelim.exec(e);if(!a||a[3]&&o.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!o||this.rules.inline.punctuation.exec(o)){const l=[...a[0]].length-1;let d,m,S=l,y=0;const F=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(F.lastIndex=0,t=t.slice(-1*e.length+a[0].length-1);(a=F.exec(t))!=null;){if(d=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!d)continue;if(m=[...d].length,a[3]||a[4]){S+=m;continue}else if((a[5]||a[6])&&l%3&&!((l+m)%3)){y+=m;continue}if(S-=m,S>0)continue;m=Math.min(m,m+S+y);const A=[...e].slice(0,l+a.index+m+1).join("");if(Math.min(l,m)%2){const R=A.slice(1,-1);return{type:"em",raw:A,text:R,tokens:this.lexer.inlineTokens(R)}}const B=A.slice(2,-2);return{type:"strong",raw:A,text:B,tokens:this.lexer.inlineTokens(B)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let o=t[2].replace(/\n/g," ");const a=/[^ ]/.test(o),s=/^ /.test(o)&&/ $/.test(o);return a&&s&&(o=o.substring(1,o.length-1)),o=De(o,!0),{type:"codespan",raw:t[0],text:o}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let o,a;return t[2]==="@"?(o=De(t[1]),a="mailto:"+o):(o=De(t[1]),a=o),{type:"link",raw:t[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let o,a;if(t[2]==="@")o=De(t[0]),a="mailto:"+o;else{let s;do s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(s!==t[0]);o=De(t[0]),t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let o;return this.lexer.state.inRawBlock?o=t[0]:o=De(t[0]),{type:"text",raw:t[0],text:o}}}}const W={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:fo,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};W._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;W._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;W.def=hn(W.def).replace("label",W._label).replace("title",W._title).getRegex();W.bullet=/(?:[*+-]|\d{1,9}[.)])/;W.listItemStart=hn(/^( *)(bull) */).replace("bull",W.bullet).getRegex();W.list=hn(W.list).replace(/bull/g,W.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+W.def.source+")").getRegex();W._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";W._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;W.html=hn(W.html,"i").replace("comment",W._comment).replace("tag",W._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();W.lheading=hn(W.lheading).replace(/bull/g,W.bullet).getRegex();W.paragraph=hn(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.blockquote=hn(W.blockquote).replace("paragraph",W.paragraph).getRegex();W.normal={...W};W.gfm={...W.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};W.gfm.table=hn(W.gfm.table).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.gfm.paragraph=hn(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",W.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.pedantic={...W.normal,html:hn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",W._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:fo,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:hn(W.normal._paragraph).replace("hr",W.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",W.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const k={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:fo,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:fo,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};k._punctuation="\\p{P}$+<=>`^|~";k.punctuation=hn(k.punctuation,"u").replace(/punctuation/g,k._punctuation).getRegex();k.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;k.anyPunctuation=/\\[punct]/g;k._escapes=/\\([punct])/g;k._comment=hn(W._comment).replace("(?:-->|$)","-->").getRegex();k.emStrong.lDelim=hn(k.emStrong.lDelim,"u").replace(/punct/g,k._punctuation).getRegex();k.emStrong.rDelimAst=hn(k.emStrong.rDelimAst,"gu").replace(/punct/g,k._punctuation).getRegex();k.emStrong.rDelimUnd=hn(k.emStrong.rDelimUnd,"gu").replace(/punct/g,k._punctuation).getRegex();k.anyPunctuation=hn(k.anyPunctuation,"gu").replace(/punct/g,k._punctuation).getRegex();k._escapes=hn(k._escapes,"gu").replace(/punct/g,k._punctuation).getRegex();k._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;k._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;k.autolink=hn(k.autolink).replace("scheme",k._scheme).replace("email",k._email).getRegex();k._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;k.tag=hn(k.tag).replace("comment",k._comment).replace("attribute",k._attribute).getRegex();k._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;k._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;k._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;k.link=hn(k.link).replace("label",k._label).replace("href",k._href).replace("title",k._title).getRegex();k.reflink=hn(k.reflink).replace("label",k._label).replace("ref",W._label).getRegex();k.nolink=hn(k.nolink).replace("ref",W._label).getRegex();k.reflinkSearch=hn(k.reflinkSearch,"g").replace("reflink",k.reflink).replace("nolink",k.nolink).getRegex();k.normal={...k};k.pedantic={...k.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:hn(/^!?\[(label)\]\((.*?)\)/).replace("label",k._label).getRegex(),reflink:hn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",k._label).getRegex()};k.gfm={...k.normal,escape:hn(k.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};k.gfm.url=hn(k.gfm.url,"i").replace("email",k.gfm._extended_email).getRegex();k.breaks={...k.gfm,br:hn(k.br).replace("{2,}","*").getRegex(),text:hn(k.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Ye{constructor(e){Fn(this,"tokens");Fn(this,"options");Fn(this,"state");Fn(this,"tokenizer");Fn(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ci,this.options.tokenizer=this.options.tokenizer||new Io,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:W.normal,inline:k.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=k.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=k.breaks:t.inline=k.gfm),this.tokenizer.rules=t}static get rules(){return{block:W,inline:k}}static lex(e,t){return new Ye(t).lex(e)}static lexInline(e,t){return new Ye(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(d,m,S)=>m+"    ".repeat(S.length));let o,a,s,l;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>(o=d.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),t.push(o);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const m=e.slice(1);let S;this.options.extensions.startBlock.forEach(y=>{S=y.call({lexer:this},m),typeof S=="number"&&S>=0&&(d=Math.min(d,S))}),d<1/0&&d>=0&&(s=e.substring(0,d+1))}if(this.state.top&&(o=this.tokenizer.paragraph(s))){a=t[t.length-1],l&&a.type==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(o),l=s.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(o);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let o,a,s,l=e,d,m,S;if(this.tokens.links){const y=Object.keys(this.tokens.links);if(y.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)y.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,d.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(m||(S=""),m=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(y=>(o=y.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))){if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),a=t[t.length-1],a&&o.type==="text"&&a.type==="text"?(a.raw+=o.raw,a.text+=o.text):t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length),a=t[t.length-1],a&&o.type==="text"&&a.type==="text"?(a.raw+=o.raw,a.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,l,S)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let y=1/0;const F=e.slice(1);let A;this.options.extensions.startInline.forEach(B=>{A=B.call({lexer:this},F),typeof A=="number"&&A>=0&&(y=Math.min(y,A))}),y<1/0&&y>=0&&(s=e.substring(0,y+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(S=o.raw.slice(-1)),m=!0,a=t[t.length-1],a&&a.type==="text"?(a.raw+=o.raw,a.text+=o.text):t.push(o);continue}if(e){const y="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return t}}class So{constructor(e){Fn(this,"options");this.options=e||ci}code(e,t,o){var s;const a=(s=(t||"").match(/^\S*/))==null?void 0:s[0];return e=e.replace(/\n$/,"")+`
`,a?'<pre><code class="language-'+De(a)+'">'+(o?e:De(e,!0))+`</code></pre>
`:"<pre><code>"+(o?e:De(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,o){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,o){const a=t?"ol":"ul",s=t&&o!==1?' start="'+o+'"':"";return"<"+a+s+`>
`+e+"</"+a+`>
`}listitem(e,t,o){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const o=t.header?"th":"td";return(t.align?`<${o} align="${t.align}">`:`<${o}>`)+e+`</${o}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,o){const a=Dp(e);if(a===null)return o;e=a;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+o+"</a>",s}image(e,t,o){const a=Dp(e);if(a===null)return o;e=a;let s=`<img src="${e}" alt="${o}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class Ou{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,o){return""+o}image(e,t,o){return""+o}br(){return""}}class ct{constructor(e){Fn(this,"options");Fn(this,"renderer");Fn(this,"textRenderer");this.options=e||ci,this.options.renderer=this.options.renderer||new So,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ou}static parse(e,t){return new ct(t).parse(e)}static parseInline(e,t){return new ct(t).parseInline(e)}parse(e,t=!0){let o="";for(let a=0;a<e.length;a++){const s=e[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const l=s,d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){o+=d||"";continue}}switch(s.type){case"space":continue;case"hr":{o+=this.renderer.hr();continue}case"heading":{const l=s;o+=this.renderer.heading(this.parseInline(l.tokens),l.depth,HT(this.parseInline(l.tokens,this.textRenderer)));continue}case"code":{const l=s;o+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{const l=s;let d="",m="";for(let y=0;y<l.header.length;y++)m+=this.renderer.tablecell(this.parseInline(l.header[y].tokens),{header:!0,align:l.align[y]});d+=this.renderer.tablerow(m);let S="";for(let y=0;y<l.rows.length;y++){const F=l.rows[y];m="";for(let A=0;A<F.length;A++)m+=this.renderer.tablecell(this.parseInline(F[A].tokens),{header:!1,align:l.align[A]});S+=this.renderer.tablerow(m)}o+=this.renderer.table(d,S);continue}case"blockquote":{const l=s,d=this.parse(l.tokens);o+=this.renderer.blockquote(d);continue}case"list":{const l=s,d=l.ordered,m=l.start,S=l.loose;let y="";for(let F=0;F<l.items.length;F++){const A=l.items[F],B=A.checked,R=A.task;let x="";if(A.task){const z=this.renderer.checkbox(!!B);S?A.tokens.length>0&&A.tokens[0].type==="paragraph"?(A.tokens[0].text=z+" "+A.tokens[0].text,A.tokens[0].tokens&&A.tokens[0].tokens.length>0&&A.tokens[0].tokens[0].type==="text"&&(A.tokens[0].tokens[0].text=z+" "+A.tokens[0].tokens[0].text)):A.tokens.unshift({type:"text",text:z+" "}):x+=z+" "}x+=this.parse(A.tokens,S),y+=this.renderer.listitem(x,R,!!B)}o+=this.renderer.list(y,d,m);continue}case"html":{const l=s;o+=this.renderer.html(l.text,l.block);continue}case"paragraph":{const l=s;o+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{let l=s,d=l.tokens?this.parseInline(l.tokens):l.text;for(;a+1<e.length&&e[a+1].type==="text";)l=e[++a],d+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);o+=t?this.renderer.paragraph(d):d;continue}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return o}parseInline(e,t){t=t||this.renderer;let o="";for(let a=0;a<e.length;a++){const s=e[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){o+=l||"";continue}}switch(s.type){case"escape":{const l=s;o+=t.text(l.text);break}case"html":{const l=s;o+=t.html(l.text);break}case"link":{const l=s;o+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{const l=s;o+=t.image(l.href,l.title,l.text);break}case"strong":{const l=s;o+=t.strong(this.parseInline(l.tokens,t));break}case"em":{const l=s;o+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{const l=s;o+=t.codespan(l.text);break}case"br":{o+=t.br();break}case"del":{const l=s;o+=t.del(this.parseInline(l.tokens,t));break}case"text":{const l=s;o+=t.text(l.text);break}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return o}}class ar{constructor(e){Fn(this,"options");this.options=e||ci}preprocess(e){return e}postprocess(e){return e}}Fn(ar,"passThroughHooks",new Set(["preprocess","postprocess"]));var pr,cu,Co,ec;class zT{constructor(...e){nu(this,pr);nu(this,Co);Fn(this,"defaults",Eu());Fn(this,"options",this.setOptions);Fn(this,"parse",oo(this,pr,cu).call(this,Ye.lex,ct.parse));Fn(this,"parseInline",oo(this,pr,cu).call(this,Ye.lexInline,ct.parseInline));Fn(this,"Parser",ct);Fn(this,"parser",ct.parse);Fn(this,"Renderer",So);Fn(this,"TextRenderer",Ou);Fn(this,"Lexer",Ye);Fn(this,"lexer",Ye.lex);Fn(this,"Tokenizer",Io);Fn(this,"Hooks",ar);this.use(...e)}walkTokens(e,t){var a,s;let o=[];for(const l of e)switch(o=o.concat(t.call(this,l)),l.type){case"table":{const d=l;for(const m of d.header)o=o.concat(this.walkTokens(m.tokens,t));for(const m of d.rows)for(const S of m)o=o.concat(this.walkTokens(S.tokens,t));break}case"list":{const d=l;o=o.concat(this.walkTokens(d.items,t));break}default:{const d=l;(s=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&s[d.type]?this.defaults.extensions.childTokens[d.type].forEach(m=>{o=o.concat(this.walkTokens(d[m],t))}):d.tokens&&(o=o.concat(this.walkTokens(d.tokens,t)))}}return o}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(o=>{const a={...o};if(a.async=this.defaults.async||a.async||!1,o.extensions&&(o.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const l=t.renderers[s.name];l?t.renderers[s.name]=function(...d){let m=s.renderer.apply(this,d);return m===!1&&(m=l.apply(this,d)),m}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[s.level];l?l.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),a.extensions=t),o.renderer){const s=this.defaults.renderer||new So(this.defaults);for(const l in o.renderer){const d=o.renderer[l],m=l,S=s[m];s[m]=(...y)=>{let F=d.apply(s,y);return F===!1&&(F=S.apply(s,y)),F||""}}a.renderer=s}if(o.tokenizer){const s=this.defaults.tokenizer||new Io(this.defaults);for(const l in o.tokenizer){const d=o.tokenizer[l],m=l,S=s[m];s[m]=(...y)=>{let F=d.apply(s,y);return F===!1&&(F=S.apply(s,y)),F}}a.tokenizer=s}if(o.hooks){const s=this.defaults.hooks||new ar;for(const l in o.hooks){const d=o.hooks[l],m=l,S=s[m];ar.passThroughHooks.has(l)?s[m]=y=>{if(this.defaults.async)return Promise.resolve(d.call(s,y)).then(A=>S.call(s,A));const F=d.call(s,y);return S.call(s,F)}:s[m]=(...y)=>{let F=d.apply(s,y);return F===!1&&(F=S.apply(s,y)),F}}a.hooks=s}if(o.walkTokens){const s=this.defaults.walkTokens,l=o.walkTokens;a.walkTokens=function(d){let m=[];return m.push(l.call(this,d)),s&&(m=m.concat(s.call(this,d))),m}}this.defaults={...this.defaults,...a}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}}pr=new WeakSet,cu=function(e,t){return(o,a)=>{const s={...a},l={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const d=oo(this,Co,ec).call(this,!!l.silent,!!l.async);if(typeof o>"u"||o===null)return d(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return d(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(o):o).then(m=>e(m,l)).then(m=>l.walkTokens?Promise.all(this.walkTokens(m,l.walkTokens)).then(()=>m):m).then(m=>t(m,l)).then(m=>l.hooks?l.hooks.postprocess(m):m).catch(d);try{l.hooks&&(o=l.hooks.preprocess(o));const m=e(o,l);l.walkTokens&&this.walkTokens(m,l.walkTokens);let S=t(m,l);return l.hooks&&(S=l.hooks.postprocess(S)),S}catch(m){return d(m)}}},Co=new WeakSet,ec=function(e,t){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const a="<p>An error occurred:</p><pre>"+De(o.message+"",!0)+"</pre>";return t?Promise.resolve(a):a}if(t)return Promise.reject(o);throw o}};const si=new zT;function Cn(i,e){return si.parse(i,e)}Cn.options=Cn.setOptions=function(i){return si.setOptions(i),Cn.defaults=si.defaults,Xp(Cn.defaults),Cn};Cn.getDefaults=Eu;Cn.defaults=ci;Cn.use=function(...i){return si.use(...i),Cn.defaults=si.defaults,Xp(Cn.defaults),Cn};Cn.walkTokens=function(i,e){return si.walkTokens(i,e)};Cn.parseInline=si.parseInline;Cn.Parser=ct;Cn.parser=ct.parse;Cn.Renderer=So;Cn.TextRenderer=Ou;Cn.Lexer=Ye;Cn.lexer=Ye.lex;Cn.Tokenizer=Io;Cn.Hooks=ar;Cn.parse=Cn;Cn.options;Cn.setOptions;Cn.use;Cn.walkTokens;Cn.parseInline;ct.parse;Ye.lex;const XT=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,ZT=Object.hasOwnProperty;class tc{constructor(){this.occurrences,this.reset()}slug(e,t){const o=this;let a=nF(e,t===!0);const s=a;for(;ZT.call(o.occurrences,a);)o.occurrences[s]++,a=s+"-"+o.occurrences[s];return o.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function nF(i,e){return typeof i!="string"?"":(e||(i=i.toLowerCase()),i.replace(XT,"").replace(/ /g,"-"))}function eF(i){return new Ye().lex(i)}const tF=()=>({heading:Lh,blockquote:Mh,list:Yh,list_item:Xh,br:eT,code:rT,codespan:uT,table:pT,html:mT,paragraph:IT,link:hT,text:CT,def:bT,del:vT,em:wT,hr:RT,strong:PT,image:qT,space:Op,escape:Op}),iF=()=>({baseUrl:"/",slugger:new tc});function rF(){const i=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||i(e)},Uh(()=>{console.warn=i})}function oF(i){let e,t;return e=new Oo({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Wt(e.$$.fragment)},l(o){pi(e.$$.fragment,o)},m(o,a){jt(e,o,a),t=!0},p(o,[a]){const s={};a&1&&(s.tokens=o[0]),a&2&&(s.renderers=o[1]),a&4&&(s.options=o[2]),e.$set(s)},i(o){t||(tn(e.$$.fragment,o),t=!0)},o(o){ln(e.$$.fragment,o),t=!1},d(o){Ht(e,o)}}}function aF(i,e,t){rF();let{source:o}=e,{options:a={}}=e,{renderers:s={}}=e,l,d,m;return i.$$set=S=>{"source"in S&&t(3,o=S.source),"options"in S&&t(4,a=S.options),"renderers"in S&&t(5,s=S.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,l=eF(o)),t(1,d={...tF(),...s}),t(2,m={...iF(),...a}))},[l,d,m,o,a,s]}class RE extends Pn{constructor(e){super(),kn(this,e,aF,oF,_n,{source:3,options:4,renderers:5})}}const cr={joinUrlPaths:lu,isRelative:pu,generatePathSegment:Kp};var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uF(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ao(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function Np(i){return{convert:e=>{if(typeof e=="object")return e;if(typeof e=="string"){const t=JSON.parse(e);return typeof t!="object"?null:t}return null},asString:e=>JSON.stringify(e),type:e=>e.record(i(e).optional()).optional()}}function uo(i){return{convert:e=>{if(Array.isArray(e))return e;if(typeof e=="string"){const t=JSON.parse(e);return Array.isArray(t)?t:null}return null},asString:e=>JSON.stringify(e),type:e=>e.array(i(e)).optional()}}function _p(i){return{convert:e=>e==null||!i.find(t=>t===e)?null:e,asString:e=>String(e),type:e=>e.enum(i).optional()}}function be(i,e){const t=o=>e.convert(o[i]);return{name:sF(i),key:i,asEnv:o=>({[i]:e.asString(o)}),zod:{type:e.type},get:t,getOrDefault:(o,a)=>t(o)??a}}function sF(i){return i.toLowerCase().replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace("-","").replace("_",""))}var bu={APP_LOGO:be("APP_LOGO",ao()),APP_TITLE:be("APP_TITLE",ao()),APP_FAVICON:be("APP_FAVICON",ao()),SITE_ROOT:be("SITE_ROOT",ao()),SITE_META:be("SITE_META",Np(i=>i.string())),CUSTOM_STYLES:be("CUSTOM_STYLES",uo(i=>i.string())),FIELDS_SORTING:be("FIELDS_SORTING",_p(["default","alphabetical"])),ARGUMENTS_SORTING:be("ARGUMENTS_SORTING",_p(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:be("QUERY_GENERATION_FACTORIES",Np(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:be("PAGES",uo(i=>{const e=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(e),i.string().min(1)])}));return e})),EXTERNAL_LINKS:be("EXTERNAL_LINKS",uo(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:be("DIRECTIVES",uo(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};function lF(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":const e=i.toLowerCase().trim();return e==="true"||e==="t"||e==="1";case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}be("MAGIDOC_GENERATE",lF());var yo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */yo.exports;(function(i,e){(function(){var t,o="4.17.21",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",d="Invalid `variable` option passed into `_.template`",m="__lodash_hash_undefined__",S=500,y="__lodash_placeholder__",F=1,A=2,B=4,R=1,x=2,z=1,fn=2,Vn=4,Dn=8,wn=16,xn=32,re=64,Zn=128,ft=256,w=512,Z=30,oe="...",Ut=800,Kt=16,gr=1,mi=2,fr=3,at=1/0,qe=9007199254740991,gi=17976931348623157e292,zt=0/0,Ae=4294967295,D=Ae-1,J=Ae>>>1,P=[["ary",Zn],["bind",z],["bindKey",fn],["curry",Dn],["curryRight",wn],["flip",w],["partial",xn],["partialRight",re],["rearg",ft]],M="[object Arguments]",In="[object Array]",Mn="[object AsyncFunction]",Sn="[object Boolean]",ve="[object Date]",xi="[object DOMException]",Rt="[object Error]",ne="[object Function]",Uu="[object GeneratorFunction]",Je="[object Map]",Li="[object Number]",$c="[object Null]",It="[object Object]",Ru="[object Promise]",Wc="[object Proxy]",Pi="[object RegExp]",Ge="[object Set]",ki="[object String]",Ir="[object Symbol]",jc="[object Undefined]",Mi="[object WeakMap]",Hc="[object WeakSet]",qi="[object ArrayBuffer]",fi="[object DataView]",Uo="[object Float32Array]",Ro="[object Float64Array]",xo="[object Int8Array]",Lo="[object Int16Array]",Po="[object Int32Array]",ko="[object Uint8Array]",Mo="[object Uint8ClampedArray]",qo="[object Uint16Array]",Jo="[object Uint32Array]",Qc=/\b__p \+= '';/g,Yc=/\b(__p \+=) '' \+/g,Kc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,xu=/&(?:amp|lt|gt|quot|#39);/g,Lu=/[&<>"']/g,zc=RegExp(xu.source),Xc=RegExp(Lu.source),Zc=/<%-([\s\S]+?)%>/g,nd=/<%([\s\S]+?)%>/g,Pu=/<%=([\s\S]+?)%>/g,ed=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,td=/^\w*$/,id=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Go=/[\\^$.*+?()[\]{}|]/g,rd=RegExp(Go.source),Vo=/^\s+/,od=/\s/,ad=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ud=/\{\n\/\* \[wrapped with (.+)\] \*/,sd=/,? & /,ld=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,pd=/[()=,{}\[\]\/\s]/,cd=/\\(\\)?/g,dd=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ku=/\w*$/,md=/^[-+]0x[0-9a-f]+$/i,gd=/^0b[01]+$/i,fd=/^\[object .+?Constructor\]$/,Id=/^0o[0-7]+$/i,Sd=/^(?:0|[1-9]\d*)$/,yd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Sr=/($^)/,hd=/['\n\r\u2028\u2029\\]/g,yr="\\ud800-\\udfff",Td="\\u0300-\\u036f",Fd="\\ufe20-\\ufe2f",Cd="\\u20d0-\\u20ff",Mu=Td+Fd+Cd,qu="\\u2700-\\u27bf",Ju="a-z\\xdf-\\xf6\\xf8-\\xff",Ed="\\xac\\xb1\\xd7\\xf7",Od="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",bd="\\u2000-\\u206f",Dd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Gu="A-Z\\xc0-\\xd6\\xd8-\\xde",Vu="\\ufe0e\\ufe0f",$u=Ed+Od+bd+Dd,$o="['’]",Ad="["+yr+"]",Wu="["+$u+"]",hr="["+Mu+"]",ju="\\d+",vd="["+qu+"]",Hu="["+Ju+"]",Qu="[^"+yr+$u+ju+qu+Ju+Gu+"]",Wo="\\ud83c[\\udffb-\\udfff]",Nd="(?:"+hr+"|"+Wo+")",Yu="[^"+yr+"]",jo="(?:\\ud83c[\\udde6-\\uddff]){2}",Ho="[\\ud800-\\udbff][\\udc00-\\udfff]",Ii="["+Gu+"]",Ku="\\u200d",zu="(?:"+Hu+"|"+Qu+")",_d="(?:"+Ii+"|"+Qu+")",Xu="(?:"+$o+"(?:d|ll|m|re|s|t|ve))?",Zu="(?:"+$o+"(?:D|LL|M|RE|S|T|VE))?",ns=Nd+"?",es="["+Vu+"]?",wd="(?:"+Ku+"(?:"+[Yu,jo,Ho].join("|")+")"+es+ns+")*",Bd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ud="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ts=es+ns+wd,Rd="(?:"+[vd,jo,Ho].join("|")+")"+ts,xd="(?:"+[Yu+hr+"?",hr,jo,Ho,Ad].join("|")+")",Ld=RegExp($o,"g"),Pd=RegExp(hr,"g"),Qo=RegExp(Wo+"(?="+Wo+")|"+xd+ts,"g"),kd=RegExp([Ii+"?"+Hu+"+"+Xu+"(?="+[Wu,Ii,"$"].join("|")+")",_d+"+"+Zu+"(?="+[Wu,Ii+zu,"$"].join("|")+")",Ii+"?"+zu+"+"+Xu,Ii+"+"+Zu,Ud,Bd,ju,Rd].join("|"),"g"),Md=RegExp("["+Ku+yr+Mu+Vu+"]"),qd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Jd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Gd=-1,vn={};vn[Uo]=vn[Ro]=vn[xo]=vn[Lo]=vn[Po]=vn[ko]=vn[Mo]=vn[qo]=vn[Jo]=!0,vn[M]=vn[In]=vn[qi]=vn[Sn]=vn[fi]=vn[ve]=vn[Rt]=vn[ne]=vn[Je]=vn[Li]=vn[It]=vn[Pi]=vn[Ge]=vn[ki]=vn[Mi]=!1;var An={};An[M]=An[In]=An[qi]=An[fi]=An[Sn]=An[ve]=An[Uo]=An[Ro]=An[xo]=An[Lo]=An[Po]=An[Je]=An[Li]=An[It]=An[Pi]=An[Ge]=An[ki]=An[Ir]=An[ko]=An[Mo]=An[qo]=An[Jo]=!0,An[Rt]=An[ne]=An[Mi]=!1;var Vd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},$d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},jd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hd=parseFloat,Qd=parseInt,is=typeof tr=="object"&&tr&&tr.Object===Object&&tr,Yd=typeof self=="object"&&self&&self.Object===Object&&self,Kn=is||Yd||Function("return this")(),Yo=e&&!e.nodeType&&e,Xt=Yo&&!0&&i&&!i.nodeType&&i,rs=Xt&&Xt.exports===Yo,Ko=rs&&is.process,Ne=function(){try{var T=Xt&&Xt.require&&Xt.require("util").types;return T||Ko&&Ko.binding&&Ko.binding("util")}catch{}}(),os=Ne&&Ne.isArrayBuffer,as=Ne&&Ne.isDate,us=Ne&&Ne.isMap,ss=Ne&&Ne.isRegExp,ls=Ne&&Ne.isSet,ps=Ne&&Ne.isTypedArray;function he(T,b,O){switch(O.length){case 0:return T.call(b);case 1:return T.call(b,O[0]);case 2:return T.call(b,O[0],O[1]);case 3:return T.call(b,O[0],O[1],O[2])}return T.apply(b,O)}function Kd(T,b,O,q){for(var nn=-1,gn=T==null?0:T.length;++nn<gn;){var jn=T[nn];b(q,jn,O(jn),T)}return q}function _e(T,b){for(var O=-1,q=T==null?0:T.length;++O<q&&b(T[O],O,T)!==!1;);return T}function zd(T,b){for(var O=T==null?0:T.length;O--&&b(T[O],O,T)!==!1;);return T}function cs(T,b){for(var O=-1,q=T==null?0:T.length;++O<q;)if(!b(T[O],O,T))return!1;return!0}function xt(T,b){for(var O=-1,q=T==null?0:T.length,nn=0,gn=[];++O<q;){var jn=T[O];b(jn,O,T)&&(gn[nn++]=jn)}return gn}function Tr(T,b){var O=T==null?0:T.length;return!!O&&Si(T,b,0)>-1}function zo(T,b,O){for(var q=-1,nn=T==null?0:T.length;++q<nn;)if(O(b,T[q]))return!0;return!1}function Nn(T,b){for(var O=-1,q=T==null?0:T.length,nn=Array(q);++O<q;)nn[O]=b(T[O],O,T);return nn}function Lt(T,b){for(var O=-1,q=b.length,nn=T.length;++O<q;)T[nn+O]=b[O];return T}function Xo(T,b,O,q){var nn=-1,gn=T==null?0:T.length;for(q&&gn&&(O=T[++nn]);++nn<gn;)O=b(O,T[nn],nn,T);return O}function Xd(T,b,O,q){var nn=T==null?0:T.length;for(q&&nn&&(O=T[--nn]);nn--;)O=b(O,T[nn],nn,T);return O}function Zo(T,b){for(var O=-1,q=T==null?0:T.length;++O<q;)if(b(T[O],O,T))return!0;return!1}var Zd=na("length");function nm(T){return T.split("")}function em(T){return T.match(ld)||[]}function ds(T,b,O){var q;return O(T,function(nn,gn,jn){if(b(nn,gn,jn))return q=gn,!1}),q}function Fr(T,b,O,q){for(var nn=T.length,gn=O+(q?1:-1);q?gn--:++gn<nn;)if(b(T[gn],gn,T))return gn;return-1}function Si(T,b,O){return b===b?mm(T,b,O):Fr(T,ms,O)}function tm(T,b,O,q){for(var nn=O-1,gn=T.length;++nn<gn;)if(q(T[nn],b))return nn;return-1}function ms(T){return T!==T}function gs(T,b){var O=T==null?0:T.length;return O?ta(T,b)/O:zt}function na(T){return function(b){return b==null?t:b[T]}}function ea(T){return function(b){return T==null?t:T[b]}}function fs(T,b,O,q,nn){return nn(T,function(gn,jn,On){O=q?(q=!1,gn):b(O,gn,jn,On)}),O}function im(T,b){var O=T.length;for(T.sort(b);O--;)T[O]=T[O].value;return T}function ta(T,b){for(var O,q=-1,nn=T.length;++q<nn;){var gn=b(T[q]);gn!==t&&(O=O===t?gn:O+gn)}return O}function ia(T,b){for(var O=-1,q=Array(T);++O<T;)q[O]=b(O);return q}function rm(T,b){return Nn(b,function(O){return[O,T[O]]})}function Is(T){return T&&T.slice(0,Ts(T)+1).replace(Vo,"")}function Te(T){return function(b){return T(b)}}function ra(T,b){return Nn(b,function(O){return T[O]})}function Ji(T,b){return T.has(b)}function Ss(T,b){for(var O=-1,q=T.length;++O<q&&Si(b,T[O],0)>-1;);return O}function ys(T,b){for(var O=T.length;O--&&Si(b,T[O],0)>-1;);return O}function om(T,b){for(var O=T.length,q=0;O--;)T[O]===b&&++q;return q}var am=ea(Vd),um=ea($d);function sm(T){return"\\"+jd[T]}function lm(T,b){return T==null?t:T[b]}function yi(T){return Md.test(T)}function pm(T){return qd.test(T)}function cm(T){for(var b,O=[];!(b=T.next()).done;)O.push(b.value);return O}function oa(T){var b=-1,O=Array(T.size);return T.forEach(function(q,nn){O[++b]=[nn,q]}),O}function hs(T,b){return function(O){return T(b(O))}}function Pt(T,b){for(var O=-1,q=T.length,nn=0,gn=[];++O<q;){var jn=T[O];(jn===b||jn===y)&&(T[O]=y,gn[nn++]=O)}return gn}function Cr(T){var b=-1,O=Array(T.size);return T.forEach(function(q){O[++b]=q}),O}function dm(T){var b=-1,O=Array(T.size);return T.forEach(function(q){O[++b]=[q,q]}),O}function mm(T,b,O){for(var q=O-1,nn=T.length;++q<nn;)if(T[q]===b)return q;return-1}function gm(T,b,O){for(var q=O+1;q--;)if(T[q]===b)return q;return q}function hi(T){return yi(T)?Im(T):Zd(T)}function Ve(T){return yi(T)?Sm(T):nm(T)}function Ts(T){for(var b=T.length;b--&&od.test(T.charAt(b)););return b}var fm=ea(Wd);function Im(T){for(var b=Qo.lastIndex=0;Qo.test(T);)++b;return b}function Sm(T){return T.match(Qo)||[]}function ym(T){return T.match(kd)||[]}var hm=function T(b){b=b==null?Kn:Ti.defaults(Kn.Object(),b,Ti.pick(Kn,Jd));var O=b.Array,q=b.Date,nn=b.Error,gn=b.Function,jn=b.Math,On=b.Object,aa=b.RegExp,Tm=b.String,we=b.TypeError,Er=O.prototype,Fm=gn.prototype,Fi=On.prototype,Or=b["__core-js_shared__"],br=Fm.toString,Tn=Fi.hasOwnProperty,Cm=0,Fs=function(){var n=/[^.]+$/.exec(Or&&Or.keys&&Or.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Dr=Fi.toString,Em=br.call(On),Om=Kn._,bm=aa("^"+br.call(Tn).replace(Go,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ar=rs?b.Buffer:t,kt=b.Symbol,vr=b.Uint8Array,Cs=Ar?Ar.allocUnsafe:t,Nr=hs(On.getPrototypeOf,On),Es=On.create,Os=Fi.propertyIsEnumerable,_r=Er.splice,bs=kt?kt.isConcatSpreadable:t,Gi=kt?kt.iterator:t,Zt=kt?kt.toStringTag:t,wr=function(){try{var n=ri(On,"defineProperty");return n({},"",{}),n}catch{}}(),Dm=b.clearTimeout!==Kn.clearTimeout&&b.clearTimeout,Am=q&&q.now!==Kn.Date.now&&q.now,vm=b.setTimeout!==Kn.setTimeout&&b.setTimeout,Br=jn.ceil,Ur=jn.floor,ua=On.getOwnPropertySymbols,Nm=Ar?Ar.isBuffer:t,Ds=b.isFinite,_m=Er.join,wm=hs(On.keys,On),Hn=jn.max,ee=jn.min,Bm=q.now,Um=b.parseInt,As=jn.random,Rm=Er.reverse,sa=ri(b,"DataView"),Vi=ri(b,"Map"),la=ri(b,"Promise"),Ci=ri(b,"Set"),$i=ri(b,"WeakMap"),Wi=ri(On,"create"),Rr=$i&&new $i,Ei={},xm=oi(sa),Lm=oi(Vi),Pm=oi(la),km=oi(Ci),Mm=oi($i),xr=kt?kt.prototype:t,ji=xr?xr.valueOf:t,vs=xr?xr.toString:t;function g(n){if(Ln(n)&&!en(n)&&!(n instanceof pn)){if(n instanceof Be)return n;if(Tn.call(n,"__wrapped__"))return Nl(n)}return new Be(n)}var Oi=function(){function n(){}return function(r){if(!Bn(r))return{};if(Es)return Es(r);n.prototype=r;var u=new n;return n.prototype=t,u}}();function Lr(){}function Be(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}g.templateSettings={escape:Zc,evaluate:nd,interpolate:Pu,variable:"",imports:{_:g}},g.prototype=Lr.prototype,g.prototype.constructor=g,Be.prototype=Oi(Lr.prototype),Be.prototype.constructor=Be;function pn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ae,this.__views__=[]}function qm(){var n=new pn(this.__wrapped__);return n.__actions__=de(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=de(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=de(this.__views__),n}function Jm(){if(this.__filtered__){var n=new pn(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Gm(){var n=this.__wrapped__.value(),r=this.__dir__,u=en(n),p=r<0,c=u?n.length:0,f=nf(0,c,this.__views__),I=f.start,h=f.end,C=h-I,v=p?h:I-1,N=this.__iteratees__,U=N.length,L=0,V=ee(C,this.__takeCount__);if(!u||!p&&c==C&&V==C)return Xs(n,this.__actions__);var Y=[];n:for(;C--&&L<V;){v+=r;for(var on=-1,K=n[v];++on<U;){var un=N[on],dn=un.iteratee,Ee=un.type,se=dn(K);if(Ee==mi)K=se;else if(!se){if(Ee==gr)continue n;break n}}Y[L++]=K}return Y}pn.prototype=Oi(Lr.prototype),pn.prototype.constructor=pn;function ni(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var p=n[r];this.set(p[0],p[1])}}function Vm(){this.__data__=Wi?Wi(null):{},this.size=0}function $m(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function Wm(n){var r=this.__data__;if(Wi){var u=r[n];return u===m?t:u}return Tn.call(r,n)?r[n]:t}function jm(n){var r=this.__data__;return Wi?r[n]!==t:Tn.call(r,n)}function Hm(n,r){var u=this.__data__;return this.size+=this.has(n)?0:1,u[n]=Wi&&r===t?m:r,this}ni.prototype.clear=Vm,ni.prototype.delete=$m,ni.prototype.get=Wm,ni.prototype.has=jm,ni.prototype.set=Hm;function St(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var p=n[r];this.set(p[0],p[1])}}function Qm(){this.__data__=[],this.size=0}function Ym(n){var r=this.__data__,u=Pr(r,n);if(u<0)return!1;var p=r.length-1;return u==p?r.pop():_r.call(r,u,1),--this.size,!0}function Km(n){var r=this.__data__,u=Pr(r,n);return u<0?t:r[u][1]}function zm(n){return Pr(this.__data__,n)>-1}function Xm(n,r){var u=this.__data__,p=Pr(u,n);return p<0?(++this.size,u.push([n,r])):u[p][1]=r,this}St.prototype.clear=Qm,St.prototype.delete=Ym,St.prototype.get=Km,St.prototype.has=zm,St.prototype.set=Xm;function yt(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var p=n[r];this.set(p[0],p[1])}}function Zm(){this.size=0,this.__data__={hash:new ni,map:new(Vi||St),string:new ni}}function ng(n){var r=Yr(this,n).delete(n);return this.size-=r?1:0,r}function eg(n){return Yr(this,n).get(n)}function tg(n){return Yr(this,n).has(n)}function ig(n,r){var u=Yr(this,n),p=u.size;return u.set(n,r),this.size+=u.size==p?0:1,this}yt.prototype.clear=Zm,yt.prototype.delete=ng,yt.prototype.get=eg,yt.prototype.has=tg,yt.prototype.set=ig;function ei(n){var r=-1,u=n==null?0:n.length;for(this.__data__=new yt;++r<u;)this.add(n[r])}function rg(n){return this.__data__.set(n,m),this}function og(n){return this.__data__.has(n)}ei.prototype.add=ei.prototype.push=rg,ei.prototype.has=og;function $e(n){var r=this.__data__=new St(n);this.size=r.size}function ag(){this.__data__=new St,this.size=0}function ug(n){var r=this.__data__,u=r.delete(n);return this.size=r.size,u}function sg(n){return this.__data__.get(n)}function lg(n){return this.__data__.has(n)}function pg(n,r){var u=this.__data__;if(u instanceof St){var p=u.__data__;if(!Vi||p.length<a-1)return p.push([n,r]),this.size=++u.size,this;u=this.__data__=new yt(p)}return u.set(n,r),this.size=u.size,this}$e.prototype.clear=ag,$e.prototype.delete=ug,$e.prototype.get=sg,$e.prototype.has=lg,$e.prototype.set=pg;function Ns(n,r){var u=en(n),p=!u&&ai(n),c=!u&&!p&&Vt(n),f=!u&&!p&&!c&&vi(n),I=u||p||c||f,h=I?ia(n.length,Tm):[],C=h.length;for(var v in n)(r||Tn.call(n,v))&&!(I&&(v=="length"||c&&(v=="offset"||v=="parent")||f&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Ct(v,C)))&&h.push(v);return h}function _s(n){var r=n.length;return r?n[Ta(0,r-1)]:t}function cg(n,r){return Kr(de(n),ti(r,0,n.length))}function dg(n){return Kr(de(n))}function pa(n,r,u){(u!==t&&!We(n[r],u)||u===t&&!(r in n))&&ht(n,r,u)}function Hi(n,r,u){var p=n[r];(!(Tn.call(n,r)&&We(p,u))||u===t&&!(r in n))&&ht(n,r,u)}function Pr(n,r){for(var u=n.length;u--;)if(We(n[u][0],r))return u;return-1}function mg(n,r,u,p){return Mt(n,function(c,f,I){r(p,c,u(c),I)}),p}function ws(n,r){return n&&st(r,Qn(r),n)}function gg(n,r){return n&&st(r,ge(r),n)}function ht(n,r,u){r=="__proto__"&&wr?wr(n,r,{configurable:!0,enumerable:!0,value:u,writable:!0}):n[r]=u}function ca(n,r){for(var u=-1,p=r.length,c=O(p),f=n==null;++u<p;)c[u]=f?t:Wa(n,r[u]);return c}function ti(n,r,u){return n===n&&(u!==t&&(n=n<=u?n:u),r!==t&&(n=n>=r?n:r)),n}function Ue(n,r,u,p,c,f){var I,h=r&F,C=r&A,v=r&B;if(u&&(I=c?u(n,p,c,f):u(n)),I!==t)return I;if(!Bn(n))return n;var N=en(n);if(N){if(I=tf(n),!h)return de(n,I)}else{var U=te(n),L=U==ne||U==Uu;if(Vt(n))return el(n,h);if(U==It||U==M||L&&!c){if(I=C||L?{}:Tl(n),!h)return C?Wg(n,gg(I,n)):$g(n,ws(I,n))}else{if(!An[U])return c?n:{};I=rf(n,U,h)}}f||(f=new $e);var V=f.get(n);if(V)return V;f.set(n,I),Yl(n)?n.forEach(function(K){I.add(Ue(K,r,u,K,n,f))}):Hl(n)&&n.forEach(function(K,un){I.set(un,Ue(K,r,u,un,n,f))});var Y=v?C?wa:_a:C?ge:Qn,on=N?t:Y(n);return _e(on||n,function(K,un){on&&(un=K,K=n[un]),Hi(I,un,Ue(K,r,u,un,n,f))}),I}function fg(n){var r=Qn(n);return function(u){return Bs(u,n,r)}}function Bs(n,r,u){var p=u.length;if(n==null)return!p;for(n=On(n);p--;){var c=u[p],f=r[c],I=n[c];if(I===t&&!(c in n)||!f(I))return!1}return!0}function Us(n,r,u){if(typeof n!="function")throw new we(l);return nr(function(){n.apply(t,u)},r)}function Qi(n,r,u,p){var c=-1,f=Tr,I=!0,h=n.length,C=[],v=r.length;if(!h)return C;u&&(r=Nn(r,Te(u))),p?(f=zo,I=!1):r.length>=a&&(f=Ji,I=!1,r=new ei(r));n:for(;++c<h;){var N=n[c],U=u==null?N:u(N);if(N=p||N!==0?N:0,I&&U===U){for(var L=v;L--;)if(r[L]===U)continue n;C.push(N)}else f(r,U,p)||C.push(N)}return C}var Mt=al(ut),Rs=al(ma,!0);function Ig(n,r){var u=!0;return Mt(n,function(p,c,f){return u=!!r(p,c,f),u}),u}function kr(n,r,u){for(var p=-1,c=n.length;++p<c;){var f=n[p],I=r(f);if(I!=null&&(h===t?I===I&&!Ce(I):u(I,h)))var h=I,C=f}return C}function Sg(n,r,u,p){var c=n.length;for(u=rn(u),u<0&&(u=-u>c?0:c+u),p=p===t||p>c?c:rn(p),p<0&&(p+=c),p=u>p?0:zl(p);u<p;)n[u++]=r;return n}function xs(n,r){var u=[];return Mt(n,function(p,c,f){r(p,c,f)&&u.push(p)}),u}function zn(n,r,u,p,c){var f=-1,I=n.length;for(u||(u=af),c||(c=[]);++f<I;){var h=n[f];r>0&&u(h)?r>1?zn(h,r-1,u,p,c):Lt(c,h):p||(c[c.length]=h)}return c}var da=ul(),Ls=ul(!0);function ut(n,r){return n&&da(n,r,Qn)}function ma(n,r){return n&&Ls(n,r,Qn)}function Mr(n,r){return xt(r,function(u){return Et(n[u])})}function ii(n,r){r=Jt(r,n);for(var u=0,p=r.length;n!=null&&u<p;)n=n[lt(r[u++])];return u&&u==p?n:t}function Ps(n,r,u){var p=r(n);return en(n)?p:Lt(p,u(n))}function ae(n){return n==null?n===t?jc:$c:Zt&&Zt in On(n)?Zg(n):mf(n)}function ga(n,r){return n>r}function yg(n,r){return n!=null&&Tn.call(n,r)}function hg(n,r){return n!=null&&r in On(n)}function Tg(n,r,u){return n>=ee(r,u)&&n<Hn(r,u)}function fa(n,r,u){for(var p=u?zo:Tr,c=n[0].length,f=n.length,I=f,h=O(f),C=1/0,v=[];I--;){var N=n[I];I&&r&&(N=Nn(N,Te(r))),C=ee(N.length,C),h[I]=!u&&(r||c>=120&&N.length>=120)?new ei(I&&N):t}N=n[0];var U=-1,L=h[0];n:for(;++U<c&&v.length<C;){var V=N[U],Y=r?r(V):V;if(V=u||V!==0?V:0,!(L?Ji(L,Y):p(v,Y,u))){for(I=f;--I;){var on=h[I];if(!(on?Ji(on,Y):p(n[I],Y,u)))continue n}L&&L.push(Y),v.push(V)}}return v}function Fg(n,r,u,p){return ut(n,function(c,f,I){r(p,u(c),f,I)}),p}function Yi(n,r,u){r=Jt(r,n),n=Ol(n,r);var p=n==null?n:n[lt(xe(r))];return p==null?t:he(p,n,u)}function ks(n){return Ln(n)&&ae(n)==M}function Cg(n){return Ln(n)&&ae(n)==qi}function Eg(n){return Ln(n)&&ae(n)==ve}function Ki(n,r,u,p,c){return n===r?!0:n==null||r==null||!Ln(n)&&!Ln(r)?n!==n&&r!==r:Og(n,r,u,p,Ki,c)}function Og(n,r,u,p,c,f){var I=en(n),h=en(r),C=I?In:te(n),v=h?In:te(r);C=C==M?It:C,v=v==M?It:v;var N=C==It,U=v==It,L=C==v;if(L&&Vt(n)){if(!Vt(r))return!1;I=!0,N=!1}if(L&&!N)return f||(f=new $e),I||vi(n)?Sl(n,r,u,p,c,f):zg(n,r,C,u,p,c,f);if(!(u&R)){var V=N&&Tn.call(n,"__wrapped__"),Y=U&&Tn.call(r,"__wrapped__");if(V||Y){var on=V?n.value():n,K=Y?r.value():r;return f||(f=new $e),c(on,K,u,p,f)}}return L?(f||(f=new $e),Xg(n,r,u,p,c,f)):!1}function bg(n){return Ln(n)&&te(n)==Je}function Ia(n,r,u,p){var c=u.length,f=c,I=!p;if(n==null)return!f;for(n=On(n);c--;){var h=u[c];if(I&&h[2]?h[1]!==n[h[0]]:!(h[0]in n))return!1}for(;++c<f;){h=u[c];var C=h[0],v=n[C],N=h[1];if(I&&h[2]){if(v===t&&!(C in n))return!1}else{var U=new $e;if(p)var L=p(v,N,C,n,r,U);if(!(L===t?Ki(N,v,R|x,p,U):L))return!1}}return!0}function Ms(n){if(!Bn(n)||sf(n))return!1;var r=Et(n)?bm:fd;return r.test(oi(n))}function Dg(n){return Ln(n)&&ae(n)==Pi}function Ag(n){return Ln(n)&&te(n)==Ge}function vg(n){return Ln(n)&&to(n.length)&&!!vn[ae(n)]}function qs(n){return typeof n=="function"?n:n==null?fe:typeof n=="object"?en(n)?Vs(n[0],n[1]):Gs(n):sp(n)}function Sa(n){if(!Zi(n))return wm(n);var r=[];for(var u in On(n))Tn.call(n,u)&&u!="constructor"&&r.push(u);return r}function Ng(n){if(!Bn(n))return df(n);var r=Zi(n),u=[];for(var p in n)p=="constructor"&&(r||!Tn.call(n,p))||u.push(p);return u}function ya(n,r){return n<r}function Js(n,r){var u=-1,p=me(n)?O(n.length):[];return Mt(n,function(c,f,I){p[++u]=r(c,f,I)}),p}function Gs(n){var r=Ua(n);return r.length==1&&r[0][2]?Cl(r[0][0],r[0][1]):function(u){return u===n||Ia(u,n,r)}}function Vs(n,r){return xa(n)&&Fl(r)?Cl(lt(n),r):function(u){var p=Wa(u,n);return p===t&&p===r?ja(u,n):Ki(r,p,R|x)}}function qr(n,r,u,p,c){n!==r&&da(r,function(f,I){if(c||(c=new $e),Bn(f))_g(n,r,I,u,qr,p,c);else{var h=p?p(Pa(n,I),f,I+"",n,r,c):t;h===t&&(h=f),pa(n,I,h)}},ge)}function _g(n,r,u,p,c,f,I){var h=Pa(n,u),C=Pa(r,u),v=I.get(C);if(v){pa(n,u,v);return}var N=f?f(h,C,u+"",n,r,I):t,U=N===t;if(U){var L=en(C),V=!L&&Vt(C),Y=!L&&!V&&vi(C);N=C,L||V||Y?en(h)?N=h:qn(h)?N=de(h):V?(U=!1,N=el(C,!0)):Y?(U=!1,N=tl(C,!0)):N=[]:er(C)||ai(C)?(N=h,ai(h)?N=Xl(h):(!Bn(h)||Et(h))&&(N=Tl(C))):U=!1}U&&(I.set(C,N),c(N,C,p,f,I),I.delete(C)),pa(n,u,N)}function $s(n,r){var u=n.length;if(u)return r+=r<0?u:0,Ct(r,u)?n[r]:t}function Ws(n,r,u){r.length?r=Nn(r,function(f){return en(f)?function(I){return ii(I,f.length===1?f[0]:f)}:f}):r=[fe];var p=-1;r=Nn(r,Te(Q()));var c=Js(n,function(f,I,h){var C=Nn(r,function(v){return v(f)});return{criteria:C,index:++p,value:f}});return im(c,function(f,I){return Vg(f,I,u)})}function wg(n,r){return js(n,r,function(u,p){return ja(n,p)})}function js(n,r,u){for(var p=-1,c=r.length,f={};++p<c;){var I=r[p],h=ii(n,I);u(h,I)&&zi(f,Jt(I,n),h)}return f}function Bg(n){return function(r){return ii(r,n)}}function ha(n,r,u,p){var c=p?tm:Si,f=-1,I=r.length,h=n;for(n===r&&(r=de(r)),u&&(h=Nn(n,Te(u)));++f<I;)for(var C=0,v=r[f],N=u?u(v):v;(C=c(h,N,C,p))>-1;)h!==n&&_r.call(h,C,1),_r.call(n,C,1);return n}function Hs(n,r){for(var u=n?r.length:0,p=u-1;u--;){var c=r[u];if(u==p||c!==f){var f=c;Ct(c)?_r.call(n,c,1):Ea(n,c)}}return n}function Ta(n,r){return n+Ur(As()*(r-n+1))}function Ug(n,r,u,p){for(var c=-1,f=Hn(Br((r-n)/(u||1)),0),I=O(f);f--;)I[p?f:++c]=n,n+=u;return I}function Fa(n,r){var u="";if(!n||r<1||r>qe)return u;do r%2&&(u+=n),r=Ur(r/2),r&&(n+=n);while(r);return u}function an(n,r){return ka(El(n,r,fe),n+"")}function Rg(n){return _s(Ni(n))}function xg(n,r){var u=Ni(n);return Kr(u,ti(r,0,u.length))}function zi(n,r,u,p){if(!Bn(n))return n;r=Jt(r,n);for(var c=-1,f=r.length,I=f-1,h=n;h!=null&&++c<f;){var C=lt(r[c]),v=u;if(C==="__proto__"||C==="constructor"||C==="prototype")return n;if(c!=I){var N=h[C];v=p?p(N,C,h):t,v===t&&(v=Bn(N)?N:Ct(r[c+1])?[]:{})}Hi(h,C,v),h=h[C]}return n}var Qs=Rr?function(n,r){return Rr.set(n,r),n}:fe,Lg=wr?function(n,r){return wr(n,"toString",{configurable:!0,enumerable:!1,value:Qa(r),writable:!0})}:fe;function Pg(n){return Kr(Ni(n))}function Re(n,r,u){var p=-1,c=n.length;r<0&&(r=-r>c?0:c+r),u=u>c?c:u,u<0&&(u+=c),c=r>u?0:u-r>>>0,r>>>=0;for(var f=O(c);++p<c;)f[p]=n[p+r];return f}function kg(n,r){var u;return Mt(n,function(p,c,f){return u=r(p,c,f),!u}),!!u}function Jr(n,r,u){var p=0,c=n==null?p:n.length;if(typeof r=="number"&&r===r&&c<=J){for(;p<c;){var f=p+c>>>1,I=n[f];I!==null&&!Ce(I)&&(u?I<=r:I<r)?p=f+1:c=f}return c}return Ca(n,r,fe,u)}function Ca(n,r,u,p){var c=0,f=n==null?0:n.length;if(f===0)return 0;r=u(r);for(var I=r!==r,h=r===null,C=Ce(r),v=r===t;c<f;){var N=Ur((c+f)/2),U=u(n[N]),L=U!==t,V=U===null,Y=U===U,on=Ce(U);if(I)var K=p||Y;else v?K=Y&&(p||L):h?K=Y&&L&&(p||!V):C?K=Y&&L&&!V&&(p||!on):V||on?K=!1:K=p?U<=r:U<r;K?c=N+1:f=N}return ee(f,D)}function Ys(n,r){for(var u=-1,p=n.length,c=0,f=[];++u<p;){var I=n[u],h=r?r(I):I;if(!u||!We(h,C)){var C=h;f[c++]=I===0?0:I}}return f}function Ks(n){return typeof n=="number"?n:Ce(n)?zt:+n}function Fe(n){if(typeof n=="string")return n;if(en(n))return Nn(n,Fe)+"";if(Ce(n))return vs?vs.call(n):"";var r=n+"";return r=="0"&&1/n==-at?"-0":r}function qt(n,r,u){var p=-1,c=Tr,f=n.length,I=!0,h=[],C=h;if(u)I=!1,c=zo;else if(f>=a){var v=r?null:Yg(n);if(v)return Cr(v);I=!1,c=Ji,C=new ei}else C=r?[]:h;n:for(;++p<f;){var N=n[p],U=r?r(N):N;if(N=u||N!==0?N:0,I&&U===U){for(var L=C.length;L--;)if(C[L]===U)continue n;r&&C.push(U),h.push(N)}else c(C,U,u)||(C!==h&&C.push(U),h.push(N))}return h}function Ea(n,r){return r=Jt(r,n),n=Ol(n,r),n==null||delete n[lt(xe(r))]}function zs(n,r,u,p){return zi(n,r,u(ii(n,r)),p)}function Gr(n,r,u,p){for(var c=n.length,f=p?c:-1;(p?f--:++f<c)&&r(n[f],f,n););return u?Re(n,p?0:f,p?f+1:c):Re(n,p?f+1:0,p?c:f)}function Xs(n,r){var u=n;return u instanceof pn&&(u=u.value()),Xo(r,function(p,c){return c.func.apply(c.thisArg,Lt([p],c.args))},u)}function Oa(n,r,u){var p=n.length;if(p<2)return p?qt(n[0]):[];for(var c=-1,f=O(p);++c<p;)for(var I=n[c],h=-1;++h<p;)h!=c&&(f[c]=Qi(f[c]||I,n[h],r,u));return qt(zn(f,1),r,u)}function Zs(n,r,u){for(var p=-1,c=n.length,f=r.length,I={};++p<c;){var h=p<f?r[p]:t;u(I,n[p],h)}return I}function ba(n){return qn(n)?n:[]}function Da(n){return typeof n=="function"?n:fe}function Jt(n,r){return en(n)?n:xa(n,r)?[n]:vl(yn(n))}var Mg=an;function Gt(n,r,u){var p=n.length;return u=u===t?p:u,!r&&u>=p?n:Re(n,r,u)}var nl=Dm||function(n){return Kn.clearTimeout(n)};function el(n,r){if(r)return n.slice();var u=n.length,p=Cs?Cs(u):new n.constructor(u);return n.copy(p),p}function Aa(n){var r=new n.constructor(n.byteLength);return new vr(r).set(new vr(n)),r}function qg(n,r){var u=r?Aa(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.byteLength)}function Jg(n){var r=new n.constructor(n.source,ku.exec(n));return r.lastIndex=n.lastIndex,r}function Gg(n){return ji?On(ji.call(n)):{}}function tl(n,r){var u=r?Aa(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.length)}function il(n,r){if(n!==r){var u=n!==t,p=n===null,c=n===n,f=Ce(n),I=r!==t,h=r===null,C=r===r,v=Ce(r);if(!h&&!v&&!f&&n>r||f&&I&&C&&!h&&!v||p&&I&&C||!u&&C||!c)return 1;if(!p&&!f&&!v&&n<r||v&&u&&c&&!p&&!f||h&&u&&c||!I&&c||!C)return-1}return 0}function Vg(n,r,u){for(var p=-1,c=n.criteria,f=r.criteria,I=c.length,h=u.length;++p<I;){var C=il(c[p],f[p]);if(C){if(p>=h)return C;var v=u[p];return C*(v=="desc"?-1:1)}}return n.index-r.index}function rl(n,r,u,p){for(var c=-1,f=n.length,I=u.length,h=-1,C=r.length,v=Hn(f-I,0),N=O(C+v),U=!p;++h<C;)N[h]=r[h];for(;++c<I;)(U||c<f)&&(N[u[c]]=n[c]);for(;v--;)N[h++]=n[c++];return N}function ol(n,r,u,p){for(var c=-1,f=n.length,I=-1,h=u.length,C=-1,v=r.length,N=Hn(f-h,0),U=O(N+v),L=!p;++c<N;)U[c]=n[c];for(var V=c;++C<v;)U[V+C]=r[C];for(;++I<h;)(L||c<f)&&(U[V+u[I]]=n[c++]);return U}function de(n,r){var u=-1,p=n.length;for(r||(r=O(p));++u<p;)r[u]=n[u];return r}function st(n,r,u,p){var c=!u;u||(u={});for(var f=-1,I=r.length;++f<I;){var h=r[f],C=p?p(u[h],n[h],h,u,n):t;C===t&&(C=n[h]),c?ht(u,h,C):Hi(u,h,C)}return u}function $g(n,r){return st(n,Ra(n),r)}function Wg(n,r){return st(n,yl(n),r)}function Vr(n,r){return function(u,p){var c=en(u)?Kd:mg,f=r?r():{};return c(u,n,Q(p,2),f)}}function bi(n){return an(function(r,u){var p=-1,c=u.length,f=c>1?u[c-1]:t,I=c>2?u[2]:t;for(f=n.length>3&&typeof f=="function"?(c--,f):t,I&&ue(u[0],u[1],I)&&(f=c<3?t:f,c=1),r=On(r);++p<c;){var h=u[p];h&&n(r,h,p,f)}return r})}function al(n,r){return function(u,p){if(u==null)return u;if(!me(u))return n(u,p);for(var c=u.length,f=r?c:-1,I=On(u);(r?f--:++f<c)&&p(I[f],f,I)!==!1;);return u}}function ul(n){return function(r,u,p){for(var c=-1,f=On(r),I=p(r),h=I.length;h--;){var C=I[n?h:++c];if(u(f[C],C,f)===!1)break}return r}}function jg(n,r,u){var p=r&z,c=Xi(n);function f(){var I=this&&this!==Kn&&this instanceof f?c:n;return I.apply(p?u:this,arguments)}return f}function sl(n){return function(r){r=yn(r);var u=yi(r)?Ve(r):t,p=u?u[0]:r.charAt(0),c=u?Gt(u,1).join(""):r.slice(1);return p[n]()+c}}function Di(n){return function(r){return Xo(ap(op(r).replace(Ld,"")),n,"")}}function Xi(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var u=Oi(n.prototype),p=n.apply(u,r);return Bn(p)?p:u}}function Hg(n,r,u){var p=Xi(n);function c(){for(var f=arguments.length,I=O(f),h=f,C=Ai(c);h--;)I[h]=arguments[h];var v=f<3&&I[0]!==C&&I[f-1]!==C?[]:Pt(I,C);if(f-=v.length,f<u)return ml(n,r,$r,c.placeholder,t,I,v,t,t,u-f);var N=this&&this!==Kn&&this instanceof c?p:n;return he(N,this,I)}return c}function ll(n){return function(r,u,p){var c=On(r);if(!me(r)){var f=Q(u,3);r=Qn(r),u=function(h){return f(c[h],h,c)}}var I=n(r,u,p);return I>-1?c[f?r[I]:I]:t}}function pl(n){return Ft(function(r){var u=r.length,p=u,c=Be.prototype.thru;for(n&&r.reverse();p--;){var f=r[p];if(typeof f!="function")throw new we(l);if(c&&!I&&Qr(f)=="wrapper")var I=new Be([],!0)}for(p=I?p:u;++p<u;){f=r[p];var h=Qr(f),C=h=="wrapper"?Ba(f):t;C&&La(C[0])&&C[1]==(Zn|Dn|xn|ft)&&!C[4].length&&C[9]==1?I=I[Qr(C[0])].apply(I,C[3]):I=f.length==1&&La(f)?I[h]():I.thru(f)}return function(){var v=arguments,N=v[0];if(I&&v.length==1&&en(N))return I.plant(N).value();for(var U=0,L=u?r[U].apply(this,v):N;++U<u;)L=r[U].call(this,L);return L}})}function $r(n,r,u,p,c,f,I,h,C,v){var N=r&Zn,U=r&z,L=r&fn,V=r&(Dn|wn),Y=r&w,on=L?t:Xi(n);function K(){for(var un=arguments.length,dn=O(un),Ee=un;Ee--;)dn[Ee]=arguments[Ee];if(V)var se=Ai(K),Oe=om(dn,se);if(p&&(dn=rl(dn,p,c,V)),f&&(dn=ol(dn,f,I,V)),un-=Oe,V&&un<v){var Jn=Pt(dn,se);return ml(n,r,$r,K.placeholder,u,dn,Jn,h,C,v-un)}var je=U?u:this,bt=L?je[n]:n;return un=dn.length,h?dn=gf(dn,h):Y&&un>1&&dn.reverse(),N&&C<un&&(dn.length=C),this&&this!==Kn&&this instanceof K&&(bt=on||Xi(bt)),bt.apply(je,dn)}return K}function cl(n,r){return function(u,p){return Fg(u,n,r(p),{})}}function Wr(n,r){return function(u,p){var c;if(u===t&&p===t)return r;if(u!==t&&(c=u),p!==t){if(c===t)return p;typeof u=="string"||typeof p=="string"?(u=Fe(u),p=Fe(p)):(u=Ks(u),p=Ks(p)),c=n(u,p)}return c}}function va(n){return Ft(function(r){return r=Nn(r,Te(Q())),an(function(u){var p=this;return n(r,function(c){return he(c,p,u)})})})}function jr(n,r){r=r===t?" ":Fe(r);var u=r.length;if(u<2)return u?Fa(r,n):r;var p=Fa(r,Br(n/hi(r)));return yi(r)?Gt(Ve(p),0,n).join(""):p.slice(0,n)}function Qg(n,r,u,p){var c=r&z,f=Xi(n);function I(){for(var h=-1,C=arguments.length,v=-1,N=p.length,U=O(N+C),L=this&&this!==Kn&&this instanceof I?f:n;++v<N;)U[v]=p[v];for(;C--;)U[v++]=arguments[++h];return he(L,c?u:this,U)}return I}function dl(n){return function(r,u,p){return p&&typeof p!="number"&&ue(r,u,p)&&(u=p=t),r=Ot(r),u===t?(u=r,r=0):u=Ot(u),p=p===t?r<u?1:-1:Ot(p),Ug(r,u,p,n)}}function Hr(n){return function(r,u){return typeof r=="string"&&typeof u=="string"||(r=Le(r),u=Le(u)),n(r,u)}}function ml(n,r,u,p,c,f,I,h,C,v){var N=r&Dn,U=N?I:t,L=N?t:I,V=N?f:t,Y=N?t:f;r|=N?xn:re,r&=~(N?re:xn),r&Vn||(r&=~(z|fn));var on=[n,r,c,V,U,Y,L,h,C,v],K=u.apply(t,on);return La(n)&&bl(K,on),K.placeholder=p,Dl(K,n,r)}function Na(n){var r=jn[n];return function(u,p){if(u=Le(u),p=p==null?0:ee(rn(p),292),p&&Ds(u)){var c=(yn(u)+"e").split("e"),f=r(c[0]+"e"+(+c[1]+p));return c=(yn(f)+"e").split("e"),+(c[0]+"e"+(+c[1]-p))}return r(u)}}var Yg=Ci&&1/Cr(new Ci([,-0]))[1]==at?function(n){return new Ci(n)}:za;function gl(n){return function(r){var u=te(r);return u==Je?oa(r):u==Ge?dm(r):rm(r,n(r))}}function Tt(n,r,u,p,c,f,I,h){var C=r&fn;if(!C&&typeof n!="function")throw new we(l);var v=p?p.length:0;if(v||(r&=~(xn|re),p=c=t),I=I===t?I:Hn(rn(I),0),h=h===t?h:rn(h),v-=c?c.length:0,r&re){var N=p,U=c;p=c=t}var L=C?t:Ba(n),V=[n,r,u,p,c,N,U,f,I,h];if(L&&cf(V,L),n=V[0],r=V[1],u=V[2],p=V[3],c=V[4],h=V[9]=V[9]===t?C?0:n.length:Hn(V[9]-v,0),!h&&r&(Dn|wn)&&(r&=~(Dn|wn)),!r||r==z)var Y=jg(n,r,u);else r==Dn||r==wn?Y=Hg(n,r,h):(r==xn||r==(z|xn))&&!c.length?Y=Qg(n,r,u,p):Y=$r.apply(t,V);var on=L?Qs:bl;return Dl(on(Y,V),n,r)}function fl(n,r,u,p){return n===t||We(n,Fi[u])&&!Tn.call(p,u)?r:n}function Il(n,r,u,p,c,f){return Bn(n)&&Bn(r)&&(f.set(r,n),qr(n,r,t,Il,f),f.delete(r)),n}function Kg(n){return er(n)?t:n}function Sl(n,r,u,p,c,f){var I=u&R,h=n.length,C=r.length;if(h!=C&&!(I&&C>h))return!1;var v=f.get(n),N=f.get(r);if(v&&N)return v==r&&N==n;var U=-1,L=!0,V=u&x?new ei:t;for(f.set(n,r),f.set(r,n);++U<h;){var Y=n[U],on=r[U];if(p)var K=I?p(on,Y,U,r,n,f):p(Y,on,U,n,r,f);if(K!==t){if(K)continue;L=!1;break}if(V){if(!Zo(r,function(un,dn){if(!Ji(V,dn)&&(Y===un||c(Y,un,u,p,f)))return V.push(dn)})){L=!1;break}}else if(!(Y===on||c(Y,on,u,p,f))){L=!1;break}}return f.delete(n),f.delete(r),L}function zg(n,r,u,p,c,f,I){switch(u){case fi:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case qi:return!(n.byteLength!=r.byteLength||!f(new vr(n),new vr(r)));case Sn:case ve:case Li:return We(+n,+r);case Rt:return n.name==r.name&&n.message==r.message;case Pi:case ki:return n==r+"";case Je:var h=oa;case Ge:var C=p&R;if(h||(h=Cr),n.size!=r.size&&!C)return!1;var v=I.get(n);if(v)return v==r;p|=x,I.set(n,r);var N=Sl(h(n),h(r),p,c,f,I);return I.delete(n),N;case Ir:if(ji)return ji.call(n)==ji.call(r)}return!1}function Xg(n,r,u,p,c,f){var I=u&R,h=_a(n),C=h.length,v=_a(r),N=v.length;if(C!=N&&!I)return!1;for(var U=C;U--;){var L=h[U];if(!(I?L in r:Tn.call(r,L)))return!1}var V=f.get(n),Y=f.get(r);if(V&&Y)return V==r&&Y==n;var on=!0;f.set(n,r),f.set(r,n);for(var K=I;++U<C;){L=h[U];var un=n[L],dn=r[L];if(p)var Ee=I?p(dn,un,L,r,n,f):p(un,dn,L,n,r,f);if(!(Ee===t?un===dn||c(un,dn,u,p,f):Ee)){on=!1;break}K||(K=L=="constructor")}if(on&&!K){var se=n.constructor,Oe=r.constructor;se!=Oe&&"constructor"in n&&"constructor"in r&&!(typeof se=="function"&&se instanceof se&&typeof Oe=="function"&&Oe instanceof Oe)&&(on=!1)}return f.delete(n),f.delete(r),on}function Ft(n){return ka(El(n,t,Bl),n+"")}function _a(n){return Ps(n,Qn,Ra)}function wa(n){return Ps(n,ge,yl)}var Ba=Rr?function(n){return Rr.get(n)}:za;function Qr(n){for(var r=n.name+"",u=Ei[r],p=Tn.call(Ei,r)?u.length:0;p--;){var c=u[p],f=c.func;if(f==null||f==n)return c.name}return r}function Ai(n){var r=Tn.call(g,"placeholder")?g:n;return r.placeholder}function Q(){var n=g.iteratee||Ya;return n=n===Ya?qs:n,arguments.length?n(arguments[0],arguments[1]):n}function Yr(n,r){var u=n.__data__;return uf(r)?u[typeof r=="string"?"string":"hash"]:u.map}function Ua(n){for(var r=Qn(n),u=r.length;u--;){var p=r[u],c=n[p];r[u]=[p,c,Fl(c)]}return r}function ri(n,r){var u=lm(n,r);return Ms(u)?u:t}function Zg(n){var r=Tn.call(n,Zt),u=n[Zt];try{n[Zt]=t;var p=!0}catch{}var c=Dr.call(n);return p&&(r?n[Zt]=u:delete n[Zt]),c}var Ra=ua?function(n){return n==null?[]:(n=On(n),xt(ua(n),function(r){return Os.call(n,r)}))}:Xa,yl=ua?function(n){for(var r=[];n;)Lt(r,Ra(n)),n=Nr(n);return r}:Xa,te=ae;(sa&&te(new sa(new ArrayBuffer(1)))!=fi||Vi&&te(new Vi)!=Je||la&&te(la.resolve())!=Ru||Ci&&te(new Ci)!=Ge||$i&&te(new $i)!=Mi)&&(te=function(n){var r=ae(n),u=r==It?n.constructor:t,p=u?oi(u):"";if(p)switch(p){case xm:return fi;case Lm:return Je;case Pm:return Ru;case km:return Ge;case Mm:return Mi}return r});function nf(n,r,u){for(var p=-1,c=u.length;++p<c;){var f=u[p],I=f.size;switch(f.type){case"drop":n+=I;break;case"dropRight":r-=I;break;case"take":r=ee(r,n+I);break;case"takeRight":n=Hn(n,r-I);break}}return{start:n,end:r}}function ef(n){var r=n.match(ud);return r?r[1].split(sd):[]}function hl(n,r,u){r=Jt(r,n);for(var p=-1,c=r.length,f=!1;++p<c;){var I=lt(r[p]);if(!(f=n!=null&&u(n,I)))break;n=n[I]}return f||++p!=c?f:(c=n==null?0:n.length,!!c&&to(c)&&Ct(I,c)&&(en(n)||ai(n)))}function tf(n){var r=n.length,u=new n.constructor(r);return r&&typeof n[0]=="string"&&Tn.call(n,"index")&&(u.index=n.index,u.input=n.input),u}function Tl(n){return typeof n.constructor=="function"&&!Zi(n)?Oi(Nr(n)):{}}function rf(n,r,u){var p=n.constructor;switch(r){case qi:return Aa(n);case Sn:case ve:return new p(+n);case fi:return qg(n,u);case Uo:case Ro:case xo:case Lo:case Po:case ko:case Mo:case qo:case Jo:return tl(n,u);case Je:return new p;case Li:case ki:return new p(n);case Pi:return Jg(n);case Ge:return new p;case Ir:return Gg(n)}}function of(n,r){var u=r.length;if(!u)return n;var p=u-1;return r[p]=(u>1?"& ":"")+r[p],r=r.join(u>2?", ":" "),n.replace(ad,`{
/* [wrapped with `+r+`] */
`)}function af(n){return en(n)||ai(n)||!!(bs&&n&&n[bs])}function Ct(n,r){var u=typeof n;return r=r??qe,!!r&&(u=="number"||u!="symbol"&&Sd.test(n))&&n>-1&&n%1==0&&n<r}function ue(n,r,u){if(!Bn(u))return!1;var p=typeof r;return(p=="number"?me(u)&&Ct(r,u.length):p=="string"&&r in u)?We(u[r],n):!1}function xa(n,r){if(en(n))return!1;var u=typeof n;return u=="number"||u=="symbol"||u=="boolean"||n==null||Ce(n)?!0:td.test(n)||!ed.test(n)||r!=null&&n in On(r)}function uf(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function La(n){var r=Qr(n),u=g[r];if(typeof u!="function"||!(r in pn.prototype))return!1;if(n===u)return!0;var p=Ba(u);return!!p&&n===p[0]}function sf(n){return!!Fs&&Fs in n}var lf=Or?Et:Za;function Zi(n){var r=n&&n.constructor,u=typeof r=="function"&&r.prototype||Fi;return n===u}function Fl(n){return n===n&&!Bn(n)}function Cl(n,r){return function(u){return u==null?!1:u[n]===r&&(r!==t||n in On(u))}}function pf(n){var r=no(n,function(p){return u.size===S&&u.clear(),p}),u=r.cache;return r}function cf(n,r){var u=n[1],p=r[1],c=u|p,f=c<(z|fn|Zn),I=p==Zn&&u==Dn||p==Zn&&u==ft&&n[7].length<=r[8]||p==(Zn|ft)&&r[7].length<=r[8]&&u==Dn;if(!(f||I))return n;p&z&&(n[2]=r[2],c|=u&z?0:Vn);var h=r[3];if(h){var C=n[3];n[3]=C?rl(C,h,r[4]):h,n[4]=C?Pt(n[3],y):r[4]}return h=r[5],h&&(C=n[5],n[5]=C?ol(C,h,r[6]):h,n[6]=C?Pt(n[5],y):r[6]),h=r[7],h&&(n[7]=h),p&Zn&&(n[8]=n[8]==null?r[8]:ee(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=c,n}function df(n){var r=[];if(n!=null)for(var u in On(n))r.push(u);return r}function mf(n){return Dr.call(n)}function El(n,r,u){return r=Hn(r===t?n.length-1:r,0),function(){for(var p=arguments,c=-1,f=Hn(p.length-r,0),I=O(f);++c<f;)I[c]=p[r+c];c=-1;for(var h=O(r+1);++c<r;)h[c]=p[c];return h[r]=u(I),he(n,this,h)}}function Ol(n,r){return r.length<2?n:ii(n,Re(r,0,-1))}function gf(n,r){for(var u=n.length,p=ee(r.length,u),c=de(n);p--;){var f=r[p];n[p]=Ct(f,u)?c[f]:t}return n}function Pa(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var bl=Al(Qs),nr=vm||function(n,r){return Kn.setTimeout(n,r)},ka=Al(Lg);function Dl(n,r,u){var p=r+"";return ka(n,of(p,ff(ef(p),u)))}function Al(n){var r=0,u=0;return function(){var p=Bm(),c=Kt-(p-u);if(u=p,c>0){if(++r>=Ut)return arguments[0]}else r=0;return n.apply(t,arguments)}}function Kr(n,r){var u=-1,p=n.length,c=p-1;for(r=r===t?p:r;++u<r;){var f=Ta(u,c),I=n[f];n[f]=n[u],n[u]=I}return n.length=r,n}var vl=pf(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(id,function(u,p,c,f){r.push(c?f.replace(cd,"$1"):p||u)}),r});function lt(n){if(typeof n=="string"||Ce(n))return n;var r=n+"";return r=="0"&&1/n==-at?"-0":r}function oi(n){if(n!=null){try{return br.call(n)}catch{}try{return n+""}catch{}}return""}function ff(n,r){return _e(P,function(u){var p="_."+u[0];r&u[1]&&!Tr(n,p)&&n.push(p)}),n.sort()}function Nl(n){if(n instanceof pn)return n.clone();var r=new Be(n.__wrapped__,n.__chain__);return r.__actions__=de(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function If(n,r,u){(u?ue(n,r,u):r===t)?r=1:r=Hn(rn(r),0);var p=n==null?0:n.length;if(!p||r<1)return[];for(var c=0,f=0,I=O(Br(p/r));c<p;)I[f++]=Re(n,c,c+=r);return I}function Sf(n){for(var r=-1,u=n==null?0:n.length,p=0,c=[];++r<u;){var f=n[r];f&&(c[p++]=f)}return c}function yf(){var n=arguments.length;if(!n)return[];for(var r=O(n-1),u=arguments[0],p=n;p--;)r[p-1]=arguments[p];return Lt(en(u)?de(u):[u],zn(r,1))}var hf=an(function(n,r){return qn(n)?Qi(n,zn(r,1,qn,!0)):[]}),Tf=an(function(n,r){var u=xe(r);return qn(u)&&(u=t),qn(n)?Qi(n,zn(r,1,qn,!0),Q(u,2)):[]}),Ff=an(function(n,r){var u=xe(r);return qn(u)&&(u=t),qn(n)?Qi(n,zn(r,1,qn,!0),t,u):[]});function Cf(n,r,u){var p=n==null?0:n.length;return p?(r=u||r===t?1:rn(r),Re(n,r<0?0:r,p)):[]}function Ef(n,r,u){var p=n==null?0:n.length;return p?(r=u||r===t?1:rn(r),r=p-r,Re(n,0,r<0?0:r)):[]}function Of(n,r){return n&&n.length?Gr(n,Q(r,3),!0,!0):[]}function bf(n,r){return n&&n.length?Gr(n,Q(r,3),!0):[]}function Df(n,r,u,p){var c=n==null?0:n.length;return c?(u&&typeof u!="number"&&ue(n,r,u)&&(u=0,p=c),Sg(n,r,u,p)):[]}function _l(n,r,u){var p=n==null?0:n.length;if(!p)return-1;var c=u==null?0:rn(u);return c<0&&(c=Hn(p+c,0)),Fr(n,Q(r,3),c)}function wl(n,r,u){var p=n==null?0:n.length;if(!p)return-1;var c=p-1;return u!==t&&(c=rn(u),c=u<0?Hn(p+c,0):ee(c,p-1)),Fr(n,Q(r,3),c,!0)}function Bl(n){var r=n==null?0:n.length;return r?zn(n,1):[]}function Af(n){var r=n==null?0:n.length;return r?zn(n,at):[]}function vf(n,r){var u=n==null?0:n.length;return u?(r=r===t?1:rn(r),zn(n,r)):[]}function Nf(n){for(var r=-1,u=n==null?0:n.length,p={};++r<u;){var c=n[r];p[c[0]]=c[1]}return p}function Ul(n){return n&&n.length?n[0]:t}function _f(n,r,u){var p=n==null?0:n.length;if(!p)return-1;var c=u==null?0:rn(u);return c<0&&(c=Hn(p+c,0)),Si(n,r,c)}function wf(n){var r=n==null?0:n.length;return r?Re(n,0,-1):[]}var Bf=an(function(n){var r=Nn(n,ba);return r.length&&r[0]===n[0]?fa(r):[]}),Uf=an(function(n){var r=xe(n),u=Nn(n,ba);return r===xe(u)?r=t:u.pop(),u.length&&u[0]===n[0]?fa(u,Q(r,2)):[]}),Rf=an(function(n){var r=xe(n),u=Nn(n,ba);return r=typeof r=="function"?r:t,r&&u.pop(),u.length&&u[0]===n[0]?fa(u,t,r):[]});function xf(n,r){return n==null?"":_m.call(n,r)}function xe(n){var r=n==null?0:n.length;return r?n[r-1]:t}function Lf(n,r,u){var p=n==null?0:n.length;if(!p)return-1;var c=p;return u!==t&&(c=rn(u),c=c<0?Hn(p+c,0):ee(c,p-1)),r===r?gm(n,r,c):Fr(n,ms,c,!0)}function Pf(n,r){return n&&n.length?$s(n,rn(r)):t}var kf=an(Rl);function Rl(n,r){return n&&n.length&&r&&r.length?ha(n,r):n}function Mf(n,r,u){return n&&n.length&&r&&r.length?ha(n,r,Q(u,2)):n}function qf(n,r,u){return n&&n.length&&r&&r.length?ha(n,r,t,u):n}var Jf=Ft(function(n,r){var u=n==null?0:n.length,p=ca(n,r);return Hs(n,Nn(r,function(c){return Ct(c,u)?+c:c}).sort(il)),p});function Gf(n,r){var u=[];if(!(n&&n.length))return u;var p=-1,c=[],f=n.length;for(r=Q(r,3);++p<f;){var I=n[p];r(I,p,n)&&(u.push(I),c.push(p))}return Hs(n,c),u}function Ma(n){return n==null?n:Rm.call(n)}function Vf(n,r,u){var p=n==null?0:n.length;return p?(u&&typeof u!="number"&&ue(n,r,u)?(r=0,u=p):(r=r==null?0:rn(r),u=u===t?p:rn(u)),Re(n,r,u)):[]}function $f(n,r){return Jr(n,r)}function Wf(n,r,u){return Ca(n,r,Q(u,2))}function jf(n,r){var u=n==null?0:n.length;if(u){var p=Jr(n,r);if(p<u&&We(n[p],r))return p}return-1}function Hf(n,r){return Jr(n,r,!0)}function Qf(n,r,u){return Ca(n,r,Q(u,2),!0)}function Yf(n,r){var u=n==null?0:n.length;if(u){var p=Jr(n,r,!0)-1;if(We(n[p],r))return p}return-1}function Kf(n){return n&&n.length?Ys(n):[]}function zf(n,r){return n&&n.length?Ys(n,Q(r,2)):[]}function Xf(n){var r=n==null?0:n.length;return r?Re(n,1,r):[]}function Zf(n,r,u){return n&&n.length?(r=u||r===t?1:rn(r),Re(n,0,r<0?0:r)):[]}function nI(n,r,u){var p=n==null?0:n.length;return p?(r=u||r===t?1:rn(r),r=p-r,Re(n,r<0?0:r,p)):[]}function eI(n,r){return n&&n.length?Gr(n,Q(r,3),!1,!0):[]}function tI(n,r){return n&&n.length?Gr(n,Q(r,3)):[]}var iI=an(function(n){return qt(zn(n,1,qn,!0))}),rI=an(function(n){var r=xe(n);return qn(r)&&(r=t),qt(zn(n,1,qn,!0),Q(r,2))}),oI=an(function(n){var r=xe(n);return r=typeof r=="function"?r:t,qt(zn(n,1,qn,!0),t,r)});function aI(n){return n&&n.length?qt(n):[]}function uI(n,r){return n&&n.length?qt(n,Q(r,2)):[]}function sI(n,r){return r=typeof r=="function"?r:t,n&&n.length?qt(n,t,r):[]}function qa(n){if(!(n&&n.length))return[];var r=0;return n=xt(n,function(u){if(qn(u))return r=Hn(u.length,r),!0}),ia(r,function(u){return Nn(n,na(u))})}function xl(n,r){if(!(n&&n.length))return[];var u=qa(n);return r==null?u:Nn(u,function(p){return he(r,t,p)})}var lI=an(function(n,r){return qn(n)?Qi(n,r):[]}),pI=an(function(n){return Oa(xt(n,qn))}),cI=an(function(n){var r=xe(n);return qn(r)&&(r=t),Oa(xt(n,qn),Q(r,2))}),dI=an(function(n){var r=xe(n);return r=typeof r=="function"?r:t,Oa(xt(n,qn),t,r)}),mI=an(qa);function gI(n,r){return Zs(n||[],r||[],Hi)}function fI(n,r){return Zs(n||[],r||[],zi)}var II=an(function(n){var r=n.length,u=r>1?n[r-1]:t;return u=typeof u=="function"?(n.pop(),u):t,xl(n,u)});function Ll(n){var r=g(n);return r.__chain__=!0,r}function SI(n,r){return r(n),n}function zr(n,r){return r(n)}var yI=Ft(function(n){var r=n.length,u=r?n[0]:0,p=this.__wrapped__,c=function(f){return ca(f,n)};return r>1||this.__actions__.length||!(p instanceof pn)||!Ct(u)?this.thru(c):(p=p.slice(u,+u+(r?1:0)),p.__actions__.push({func:zr,args:[c],thisArg:t}),new Be(p,this.__chain__).thru(function(f){return r&&!f.length&&f.push(t),f}))});function hI(){return Ll(this)}function TI(){return new Be(this.value(),this.__chain__)}function FI(){this.__values__===t&&(this.__values__=Kl(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function CI(){return this}function EI(n){for(var r,u=this;u instanceof Lr;){var p=Nl(u);p.__index__=0,p.__values__=t,r?c.__wrapped__=p:r=p;var c=p;u=u.__wrapped__}return c.__wrapped__=n,r}function OI(){var n=this.__wrapped__;if(n instanceof pn){var r=n;return this.__actions__.length&&(r=new pn(this)),r=r.reverse(),r.__actions__.push({func:zr,args:[Ma],thisArg:t}),new Be(r,this.__chain__)}return this.thru(Ma)}function bI(){return Xs(this.__wrapped__,this.__actions__)}var DI=Vr(function(n,r,u){Tn.call(n,u)?++n[u]:ht(n,u,1)});function AI(n,r,u){var p=en(n)?cs:Ig;return u&&ue(n,r,u)&&(r=t),p(n,Q(r,3))}function vI(n,r){var u=en(n)?xt:xs;return u(n,Q(r,3))}var NI=ll(_l),_I=ll(wl);function wI(n,r){return zn(Xr(n,r),1)}function BI(n,r){return zn(Xr(n,r),at)}function UI(n,r,u){return u=u===t?1:rn(u),zn(Xr(n,r),u)}function Pl(n,r){var u=en(n)?_e:Mt;return u(n,Q(r,3))}function kl(n,r){var u=en(n)?zd:Rs;return u(n,Q(r,3))}var RI=Vr(function(n,r,u){Tn.call(n,u)?n[u].push(r):ht(n,u,[r])});function xI(n,r,u,p){n=me(n)?n:Ni(n),u=u&&!p?rn(u):0;var c=n.length;return u<0&&(u=Hn(c+u,0)),io(n)?u<=c&&n.indexOf(r,u)>-1:!!c&&Si(n,r,u)>-1}var LI=an(function(n,r,u){var p=-1,c=typeof r=="function",f=me(n)?O(n.length):[];return Mt(n,function(I){f[++p]=c?he(r,I,u):Yi(I,r,u)}),f}),PI=Vr(function(n,r,u){ht(n,u,r)});function Xr(n,r){var u=en(n)?Nn:Js;return u(n,Q(r,3))}function kI(n,r,u,p){return n==null?[]:(en(r)||(r=r==null?[]:[r]),u=p?t:u,en(u)||(u=u==null?[]:[u]),Ws(n,r,u))}var MI=Vr(function(n,r,u){n[u?0:1].push(r)},function(){return[[],[]]});function qI(n,r,u){var p=en(n)?Xo:fs,c=arguments.length<3;return p(n,Q(r,4),u,c,Mt)}function JI(n,r,u){var p=en(n)?Xd:fs,c=arguments.length<3;return p(n,Q(r,4),u,c,Rs)}function GI(n,r){var u=en(n)?xt:xs;return u(n,eo(Q(r,3)))}function VI(n){var r=en(n)?_s:Rg;return r(n)}function $I(n,r,u){(u?ue(n,r,u):r===t)?r=1:r=rn(r);var p=en(n)?cg:xg;return p(n,r)}function WI(n){var r=en(n)?dg:Pg;return r(n)}function jI(n){if(n==null)return 0;if(me(n))return io(n)?hi(n):n.length;var r=te(n);return r==Je||r==Ge?n.size:Sa(n).length}function HI(n,r,u){var p=en(n)?Zo:kg;return u&&ue(n,r,u)&&(r=t),p(n,Q(r,3))}var QI=an(function(n,r){if(n==null)return[];var u=r.length;return u>1&&ue(n,r[0],r[1])?r=[]:u>2&&ue(r[0],r[1],r[2])&&(r=[r[0]]),Ws(n,zn(r,1),[])}),Zr=Am||function(){return Kn.Date.now()};function YI(n,r){if(typeof r!="function")throw new we(l);return n=rn(n),function(){if(--n<1)return r.apply(this,arguments)}}function Ml(n,r,u){return r=u?t:r,r=n&&r==null?n.length:r,Tt(n,Zn,t,t,t,t,r)}function ql(n,r){var u;if(typeof r!="function")throw new we(l);return n=rn(n),function(){return--n>0&&(u=r.apply(this,arguments)),n<=1&&(r=t),u}}var Ja=an(function(n,r,u){var p=z;if(u.length){var c=Pt(u,Ai(Ja));p|=xn}return Tt(n,p,r,u,c)}),Jl=an(function(n,r,u){var p=z|fn;if(u.length){var c=Pt(u,Ai(Jl));p|=xn}return Tt(r,p,n,u,c)});function Gl(n,r,u){r=u?t:r;var p=Tt(n,Dn,t,t,t,t,t,r);return p.placeholder=Gl.placeholder,p}function Vl(n,r,u){r=u?t:r;var p=Tt(n,wn,t,t,t,t,t,r);return p.placeholder=Vl.placeholder,p}function $l(n,r,u){var p,c,f,I,h,C,v=0,N=!1,U=!1,L=!0;if(typeof n!="function")throw new we(l);r=Le(r)||0,Bn(u)&&(N=!!u.leading,U="maxWait"in u,f=U?Hn(Le(u.maxWait)||0,r):f,L="trailing"in u?!!u.trailing:L);function V(Jn){var je=p,bt=c;return p=c=t,v=Jn,I=n.apply(bt,je),I}function Y(Jn){return v=Jn,h=nr(un,r),N?V(Jn):I}function on(Jn){var je=Jn-C,bt=Jn-v,lp=r-je;return U?ee(lp,f-bt):lp}function K(Jn){var je=Jn-C,bt=Jn-v;return C===t||je>=r||je<0||U&&bt>=f}function un(){var Jn=Zr();if(K(Jn))return dn(Jn);h=nr(un,on(Jn))}function dn(Jn){return h=t,L&&p?V(Jn):(p=c=t,I)}function Ee(){h!==t&&nl(h),v=0,p=C=c=h=t}function se(){return h===t?I:dn(Zr())}function Oe(){var Jn=Zr(),je=K(Jn);if(p=arguments,c=this,C=Jn,je){if(h===t)return Y(C);if(U)return nl(h),h=nr(un,r),V(C)}return h===t&&(h=nr(un,r)),I}return Oe.cancel=Ee,Oe.flush=se,Oe}var KI=an(function(n,r){return Us(n,1,r)}),zI=an(function(n,r,u){return Us(n,Le(r)||0,u)});function XI(n){return Tt(n,w)}function no(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new we(l);var u=function(){var p=arguments,c=r?r.apply(this,p):p[0],f=u.cache;if(f.has(c))return f.get(c);var I=n.apply(this,p);return u.cache=f.set(c,I)||f,I};return u.cache=new(no.Cache||yt),u}no.Cache=yt;function eo(n){if(typeof n!="function")throw new we(l);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function ZI(n){return ql(2,n)}var nS=Mg(function(n,r){r=r.length==1&&en(r[0])?Nn(r[0],Te(Q())):Nn(zn(r,1),Te(Q()));var u=r.length;return an(function(p){for(var c=-1,f=ee(p.length,u);++c<f;)p[c]=r[c].call(this,p[c]);return he(n,this,p)})}),Ga=an(function(n,r){var u=Pt(r,Ai(Ga));return Tt(n,xn,t,r,u)}),Wl=an(function(n,r){var u=Pt(r,Ai(Wl));return Tt(n,re,t,r,u)}),eS=Ft(function(n,r){return Tt(n,ft,t,t,t,r)});function tS(n,r){if(typeof n!="function")throw new we(l);return r=r===t?r:rn(r),an(n,r)}function iS(n,r){if(typeof n!="function")throw new we(l);return r=r==null?0:Hn(rn(r),0),an(function(u){var p=u[r],c=Gt(u,0,r);return p&&Lt(c,p),he(n,this,c)})}function rS(n,r,u){var p=!0,c=!0;if(typeof n!="function")throw new we(l);return Bn(u)&&(p="leading"in u?!!u.leading:p,c="trailing"in u?!!u.trailing:c),$l(n,r,{leading:p,maxWait:r,trailing:c})}function oS(n){return Ml(n,1)}function aS(n,r){return Ga(Da(r),n)}function uS(){if(!arguments.length)return[];var n=arguments[0];return en(n)?n:[n]}function sS(n){return Ue(n,B)}function lS(n,r){return r=typeof r=="function"?r:t,Ue(n,B,r)}function pS(n){return Ue(n,F|B)}function cS(n,r){return r=typeof r=="function"?r:t,Ue(n,F|B,r)}function dS(n,r){return r==null||Bs(n,r,Qn(r))}function We(n,r){return n===r||n!==n&&r!==r}var mS=Hr(ga),gS=Hr(function(n,r){return n>=r}),ai=ks(function(){return arguments}())?ks:function(n){return Ln(n)&&Tn.call(n,"callee")&&!Os.call(n,"callee")},en=O.isArray,fS=os?Te(os):Cg;function me(n){return n!=null&&to(n.length)&&!Et(n)}function qn(n){return Ln(n)&&me(n)}function IS(n){return n===!0||n===!1||Ln(n)&&ae(n)==Sn}var Vt=Nm||Za,SS=as?Te(as):Eg;function yS(n){return Ln(n)&&n.nodeType===1&&!er(n)}function hS(n){if(n==null)return!0;if(me(n)&&(en(n)||typeof n=="string"||typeof n.splice=="function"||Vt(n)||vi(n)||ai(n)))return!n.length;var r=te(n);if(r==Je||r==Ge)return!n.size;if(Zi(n))return!Sa(n).length;for(var u in n)if(Tn.call(n,u))return!1;return!0}function TS(n,r){return Ki(n,r)}function FS(n,r,u){u=typeof u=="function"?u:t;var p=u?u(n,r):t;return p===t?Ki(n,r,t,u):!!p}function Va(n){if(!Ln(n))return!1;var r=ae(n);return r==Rt||r==xi||typeof n.message=="string"&&typeof n.name=="string"&&!er(n)}function CS(n){return typeof n=="number"&&Ds(n)}function Et(n){if(!Bn(n))return!1;var r=ae(n);return r==ne||r==Uu||r==Mn||r==Wc}function jl(n){return typeof n=="number"&&n==rn(n)}function to(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=qe}function Bn(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Ln(n){return n!=null&&typeof n=="object"}var Hl=us?Te(us):bg;function ES(n,r){return n===r||Ia(n,r,Ua(r))}function OS(n,r,u){return u=typeof u=="function"?u:t,Ia(n,r,Ua(r),u)}function bS(n){return Ql(n)&&n!=+n}function DS(n){if(lf(n))throw new nn(s);return Ms(n)}function AS(n){return n===null}function vS(n){return n==null}function Ql(n){return typeof n=="number"||Ln(n)&&ae(n)==Li}function er(n){if(!Ln(n)||ae(n)!=It)return!1;var r=Nr(n);if(r===null)return!0;var u=Tn.call(r,"constructor")&&r.constructor;return typeof u=="function"&&u instanceof u&&br.call(u)==Em}var $a=ss?Te(ss):Dg;function NS(n){return jl(n)&&n>=-qe&&n<=qe}var Yl=ls?Te(ls):Ag;function io(n){return typeof n=="string"||!en(n)&&Ln(n)&&ae(n)==ki}function Ce(n){return typeof n=="symbol"||Ln(n)&&ae(n)==Ir}var vi=ps?Te(ps):vg;function _S(n){return n===t}function wS(n){return Ln(n)&&te(n)==Mi}function BS(n){return Ln(n)&&ae(n)==Hc}var US=Hr(ya),RS=Hr(function(n,r){return n<=r});function Kl(n){if(!n)return[];if(me(n))return io(n)?Ve(n):de(n);if(Gi&&n[Gi])return cm(n[Gi]());var r=te(n),u=r==Je?oa:r==Ge?Cr:Ni;return u(n)}function Ot(n){if(!n)return n===0?n:0;if(n=Le(n),n===at||n===-at){var r=n<0?-1:1;return r*gi}return n===n?n:0}function rn(n){var r=Ot(n),u=r%1;return r===r?u?r-u:r:0}function zl(n){return n?ti(rn(n),0,Ae):0}function Le(n){if(typeof n=="number")return n;if(Ce(n))return zt;if(Bn(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Bn(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Is(n);var u=gd.test(n);return u||Id.test(n)?Qd(n.slice(2),u?2:8):md.test(n)?zt:+n}function Xl(n){return st(n,ge(n))}function xS(n){return n?ti(rn(n),-qe,qe):n===0?n:0}function yn(n){return n==null?"":Fe(n)}var LS=bi(function(n,r){if(Zi(r)||me(r)){st(r,Qn(r),n);return}for(var u in r)Tn.call(r,u)&&Hi(n,u,r[u])}),Zl=bi(function(n,r){st(r,ge(r),n)}),ro=bi(function(n,r,u,p){st(r,ge(r),n,p)}),PS=bi(function(n,r,u,p){st(r,Qn(r),n,p)}),kS=Ft(ca);function MS(n,r){var u=Oi(n);return r==null?u:ws(u,r)}var qS=an(function(n,r){n=On(n);var u=-1,p=r.length,c=p>2?r[2]:t;for(c&&ue(r[0],r[1],c)&&(p=1);++u<p;)for(var f=r[u],I=ge(f),h=-1,C=I.length;++h<C;){var v=I[h],N=n[v];(N===t||We(N,Fi[v])&&!Tn.call(n,v))&&(n[v]=f[v])}return n}),JS=an(function(n){return n.push(t,Il),he(np,t,n)});function GS(n,r){return ds(n,Q(r,3),ut)}function VS(n,r){return ds(n,Q(r,3),ma)}function $S(n,r){return n==null?n:da(n,Q(r,3),ge)}function WS(n,r){return n==null?n:Ls(n,Q(r,3),ge)}function jS(n,r){return n&&ut(n,Q(r,3))}function HS(n,r){return n&&ma(n,Q(r,3))}function QS(n){return n==null?[]:Mr(n,Qn(n))}function YS(n){return n==null?[]:Mr(n,ge(n))}function Wa(n,r,u){var p=n==null?t:ii(n,r);return p===t?u:p}function KS(n,r){return n!=null&&hl(n,r,yg)}function ja(n,r){return n!=null&&hl(n,r,hg)}var zS=cl(function(n,r,u){r!=null&&typeof r.toString!="function"&&(r=Dr.call(r)),n[r]=u},Qa(fe)),XS=cl(function(n,r,u){r!=null&&typeof r.toString!="function"&&(r=Dr.call(r)),Tn.call(n,r)?n[r].push(u):n[r]=[u]},Q),ZS=an(Yi);function Qn(n){return me(n)?Ns(n):Sa(n)}function ge(n){return me(n)?Ns(n,!0):Ng(n)}function ny(n,r){var u={};return r=Q(r,3),ut(n,function(p,c,f){ht(u,r(p,c,f),p)}),u}function ey(n,r){var u={};return r=Q(r,3),ut(n,function(p,c,f){ht(u,c,r(p,c,f))}),u}var ty=bi(function(n,r,u){qr(n,r,u)}),np=bi(function(n,r,u,p){qr(n,r,u,p)}),iy=Ft(function(n,r){var u={};if(n==null)return u;var p=!1;r=Nn(r,function(f){return f=Jt(f,n),p||(p=f.length>1),f}),st(n,wa(n),u),p&&(u=Ue(u,F|A|B,Kg));for(var c=r.length;c--;)Ea(u,r[c]);return u});function ry(n,r){return ep(n,eo(Q(r)))}var oy=Ft(function(n,r){return n==null?{}:wg(n,r)});function ep(n,r){if(n==null)return{};var u=Nn(wa(n),function(p){return[p]});return r=Q(r),js(n,u,function(p,c){return r(p,c[0])})}function ay(n,r,u){r=Jt(r,n);var p=-1,c=r.length;for(c||(c=1,n=t);++p<c;){var f=n==null?t:n[lt(r[p])];f===t&&(p=c,f=u),n=Et(f)?f.call(n):f}return n}function uy(n,r,u){return n==null?n:zi(n,r,u)}function sy(n,r,u,p){return p=typeof p=="function"?p:t,n==null?n:zi(n,r,u,p)}var tp=gl(Qn),ip=gl(ge);function ly(n,r,u){var p=en(n),c=p||Vt(n)||vi(n);if(r=Q(r,4),u==null){var f=n&&n.constructor;c?u=p?new f:[]:Bn(n)?u=Et(f)?Oi(Nr(n)):{}:u={}}return(c?_e:ut)(n,function(I,h,C){return r(u,I,h,C)}),u}function py(n,r){return n==null?!0:Ea(n,r)}function cy(n,r,u){return n==null?n:zs(n,r,Da(u))}function dy(n,r,u,p){return p=typeof p=="function"?p:t,n==null?n:zs(n,r,Da(u),p)}function Ni(n){return n==null?[]:ra(n,Qn(n))}function my(n){return n==null?[]:ra(n,ge(n))}function gy(n,r,u){return u===t&&(u=r,r=t),u!==t&&(u=Le(u),u=u===u?u:0),r!==t&&(r=Le(r),r=r===r?r:0),ti(Le(n),r,u)}function fy(n,r,u){return r=Ot(r),u===t?(u=r,r=0):u=Ot(u),n=Le(n),Tg(n,r,u)}function Iy(n,r,u){if(u&&typeof u!="boolean"&&ue(n,r,u)&&(r=u=t),u===t&&(typeof r=="boolean"?(u=r,r=t):typeof n=="boolean"&&(u=n,n=t)),n===t&&r===t?(n=0,r=1):(n=Ot(n),r===t?(r=n,n=0):r=Ot(r)),n>r){var p=n;n=r,r=p}if(u||n%1||r%1){var c=As();return ee(n+c*(r-n+Hd("1e-"+((c+"").length-1))),r)}return Ta(n,r)}var Sy=Di(function(n,r,u){return r=r.toLowerCase(),n+(u?rp(r):r)});function rp(n){return Ha(yn(n).toLowerCase())}function op(n){return n=yn(n),n&&n.replace(yd,am).replace(Pd,"")}function yy(n,r,u){n=yn(n),r=Fe(r);var p=n.length;u=u===t?p:ti(rn(u),0,p);var c=u;return u-=r.length,u>=0&&n.slice(u,c)==r}function hy(n){return n=yn(n),n&&Xc.test(n)?n.replace(Lu,um):n}function Ty(n){return n=yn(n),n&&rd.test(n)?n.replace(Go,"\\$&"):n}var Fy=Di(function(n,r,u){return n+(u?"-":"")+r.toLowerCase()}),Cy=Di(function(n,r,u){return n+(u?" ":"")+r.toLowerCase()}),Ey=sl("toLowerCase");function Oy(n,r,u){n=yn(n),r=rn(r);var p=r?hi(n):0;if(!r||p>=r)return n;var c=(r-p)/2;return jr(Ur(c),u)+n+jr(Br(c),u)}function by(n,r,u){n=yn(n),r=rn(r);var p=r?hi(n):0;return r&&p<r?n+jr(r-p,u):n}function Dy(n,r,u){n=yn(n),r=rn(r);var p=r?hi(n):0;return r&&p<r?jr(r-p,u)+n:n}function Ay(n,r,u){return u||r==null?r=0:r&&(r=+r),Um(yn(n).replace(Vo,""),r||0)}function vy(n,r,u){return(u?ue(n,r,u):r===t)?r=1:r=rn(r),Fa(yn(n),r)}function Ny(){var n=arguments,r=yn(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var _y=Di(function(n,r,u){return n+(u?"_":"")+r.toLowerCase()});function wy(n,r,u){return u&&typeof u!="number"&&ue(n,r,u)&&(r=u=t),u=u===t?Ae:u>>>0,u?(n=yn(n),n&&(typeof r=="string"||r!=null&&!$a(r))&&(r=Fe(r),!r&&yi(n))?Gt(Ve(n),0,u):n.split(r,u)):[]}var By=Di(function(n,r,u){return n+(u?" ":"")+Ha(r)});function Uy(n,r,u){return n=yn(n),u=u==null?0:ti(rn(u),0,n.length),r=Fe(r),n.slice(u,u+r.length)==r}function Ry(n,r,u){var p=g.templateSettings;u&&ue(n,r,u)&&(r=t),n=yn(n),r=ro({},r,p,fl);var c=ro({},r.imports,p.imports,fl),f=Qn(c),I=ra(c,f),h,C,v=0,N=r.interpolate||Sr,U="__p += '",L=aa((r.escape||Sr).source+"|"+N.source+"|"+(N===Pu?dd:Sr).source+"|"+(r.evaluate||Sr).source+"|$","g"),V="//# sourceURL="+(Tn.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Gd+"]")+`
`;n.replace(L,function(K,un,dn,Ee,se,Oe){return dn||(dn=Ee),U+=n.slice(v,Oe).replace(hd,sm),un&&(h=!0,U+=`' +
__e(`+un+`) +
'`),se&&(C=!0,U+=`';
`+se+`;
__p += '`),dn&&(U+=`' +
((__t = (`+dn+`)) == null ? '' : __t) +
'`),v=Oe+K.length,K}),U+=`';
`;var Y=Tn.call(r,"variable")&&r.variable;if(!Y)U=`with (obj) {
`+U+`
}
`;else if(pd.test(Y))throw new nn(d);U=(C?U.replace(Qc,""):U).replace(Yc,"$1").replace(Kc,"$1;"),U="function("+(Y||"obj")+`) {
`+(Y?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(h?", __e = _.escape":"")+(C?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+U+`return __p
}`;var on=up(function(){return gn(f,V+"return "+U).apply(t,I)});if(on.source=U,Va(on))throw on;return on}function xy(n){return yn(n).toLowerCase()}function Ly(n){return yn(n).toUpperCase()}function Py(n,r,u){if(n=yn(n),n&&(u||r===t))return Is(n);if(!n||!(r=Fe(r)))return n;var p=Ve(n),c=Ve(r),f=Ss(p,c),I=ys(p,c)+1;return Gt(p,f,I).join("")}function ky(n,r,u){if(n=yn(n),n&&(u||r===t))return n.slice(0,Ts(n)+1);if(!n||!(r=Fe(r)))return n;var p=Ve(n),c=ys(p,Ve(r))+1;return Gt(p,0,c).join("")}function My(n,r,u){if(n=yn(n),n&&(u||r===t))return n.replace(Vo,"");if(!n||!(r=Fe(r)))return n;var p=Ve(n),c=Ss(p,Ve(r));return Gt(p,c).join("")}function qy(n,r){var u=Z,p=oe;if(Bn(r)){var c="separator"in r?r.separator:c;u="length"in r?rn(r.length):u,p="omission"in r?Fe(r.omission):p}n=yn(n);var f=n.length;if(yi(n)){var I=Ve(n);f=I.length}if(u>=f)return n;var h=u-hi(p);if(h<1)return p;var C=I?Gt(I,0,h).join(""):n.slice(0,h);if(c===t)return C+p;if(I&&(h+=C.length-h),$a(c)){if(n.slice(h).search(c)){var v,N=C;for(c.global||(c=aa(c.source,yn(ku.exec(c))+"g")),c.lastIndex=0;v=c.exec(N);)var U=v.index;C=C.slice(0,U===t?h:U)}}else if(n.indexOf(Fe(c),h)!=h){var L=C.lastIndexOf(c);L>-1&&(C=C.slice(0,L))}return C+p}function Jy(n){return n=yn(n),n&&zc.test(n)?n.replace(xu,fm):n}var Gy=Di(function(n,r,u){return n+(u?" ":"")+r.toUpperCase()}),Ha=sl("toUpperCase");function ap(n,r,u){return n=yn(n),r=u?t:r,r===t?pm(n)?ym(n):em(n):n.match(r)||[]}var up=an(function(n,r){try{return he(n,t,r)}catch(u){return Va(u)?u:new nn(u)}}),Vy=Ft(function(n,r){return _e(r,function(u){u=lt(u),ht(n,u,Ja(n[u],n))}),n});function $y(n){var r=n==null?0:n.length,u=Q();return n=r?Nn(n,function(p){if(typeof p[1]!="function")throw new we(l);return[u(p[0]),p[1]]}):[],an(function(p){for(var c=-1;++c<r;){var f=n[c];if(he(f[0],this,p))return he(f[1],this,p)}})}function Wy(n){return fg(Ue(n,F))}function Qa(n){return function(){return n}}function jy(n,r){return n==null||n!==n?r:n}var Hy=pl(),Qy=pl(!0);function fe(n){return n}function Ya(n){return qs(typeof n=="function"?n:Ue(n,F))}function Yy(n){return Gs(Ue(n,F))}function Ky(n,r){return Vs(n,Ue(r,F))}var zy=an(function(n,r){return function(u){return Yi(u,n,r)}}),Xy=an(function(n,r){return function(u){return Yi(n,u,r)}});function Ka(n,r,u){var p=Qn(r),c=Mr(r,p);u==null&&!(Bn(r)&&(c.length||!p.length))&&(u=r,r=n,n=this,c=Mr(r,Qn(r)));var f=!(Bn(u)&&"chain"in u)||!!u.chain,I=Et(n);return _e(c,function(h){var C=r[h];n[h]=C,I&&(n.prototype[h]=function(){var v=this.__chain__;if(f||v){var N=n(this.__wrapped__),U=N.__actions__=de(this.__actions__);return U.push({func:C,args:arguments,thisArg:n}),N.__chain__=v,N}return C.apply(n,Lt([this.value()],arguments))})}),n}function Zy(){return Kn._===this&&(Kn._=Om),this}function za(){}function nh(n){return n=rn(n),an(function(r){return $s(r,n)})}var eh=va(Nn),th=va(cs),ih=va(Zo);function sp(n){return xa(n)?na(lt(n)):Bg(n)}function rh(n){return function(r){return n==null?t:ii(n,r)}}var oh=dl(),ah=dl(!0);function Xa(){return[]}function Za(){return!1}function uh(){return{}}function sh(){return""}function lh(){return!0}function ph(n,r){if(n=rn(n),n<1||n>qe)return[];var u=Ae,p=ee(n,Ae);r=Q(r),n-=Ae;for(var c=ia(p,r);++u<n;)r(u);return c}function ch(n){return en(n)?Nn(n,lt):Ce(n)?[n]:de(vl(yn(n)))}function dh(n){var r=++Cm;return yn(n)+r}var mh=Wr(function(n,r){return n+r},0),gh=Na("ceil"),fh=Wr(function(n,r){return n/r},1),Ih=Na("floor");function Sh(n){return n&&n.length?kr(n,fe,ga):t}function yh(n,r){return n&&n.length?kr(n,Q(r,2),ga):t}function hh(n){return gs(n,fe)}function Th(n,r){return gs(n,Q(r,2))}function Fh(n){return n&&n.length?kr(n,fe,ya):t}function Ch(n,r){return n&&n.length?kr(n,Q(r,2),ya):t}var Eh=Wr(function(n,r){return n*r},1),Oh=Na("round"),bh=Wr(function(n,r){return n-r},0);function Dh(n){return n&&n.length?ta(n,fe):0}function Ah(n,r){return n&&n.length?ta(n,Q(r,2)):0}return g.after=YI,g.ary=Ml,g.assign=LS,g.assignIn=Zl,g.assignInWith=ro,g.assignWith=PS,g.at=kS,g.before=ql,g.bind=Ja,g.bindAll=Vy,g.bindKey=Jl,g.castArray=uS,g.chain=Ll,g.chunk=If,g.compact=Sf,g.concat=yf,g.cond=$y,g.conforms=Wy,g.constant=Qa,g.countBy=DI,g.create=MS,g.curry=Gl,g.curryRight=Vl,g.debounce=$l,g.defaults=qS,g.defaultsDeep=JS,g.defer=KI,g.delay=zI,g.difference=hf,g.differenceBy=Tf,g.differenceWith=Ff,g.drop=Cf,g.dropRight=Ef,g.dropRightWhile=Of,g.dropWhile=bf,g.fill=Df,g.filter=vI,g.flatMap=wI,g.flatMapDeep=BI,g.flatMapDepth=UI,g.flatten=Bl,g.flattenDeep=Af,g.flattenDepth=vf,g.flip=XI,g.flow=Hy,g.flowRight=Qy,g.fromPairs=Nf,g.functions=QS,g.functionsIn=YS,g.groupBy=RI,g.initial=wf,g.intersection=Bf,g.intersectionBy=Uf,g.intersectionWith=Rf,g.invert=zS,g.invertBy=XS,g.invokeMap=LI,g.iteratee=Ya,g.keyBy=PI,g.keys=Qn,g.keysIn=ge,g.map=Xr,g.mapKeys=ny,g.mapValues=ey,g.matches=Yy,g.matchesProperty=Ky,g.memoize=no,g.merge=ty,g.mergeWith=np,g.method=zy,g.methodOf=Xy,g.mixin=Ka,g.negate=eo,g.nthArg=nh,g.omit=iy,g.omitBy=ry,g.once=ZI,g.orderBy=kI,g.over=eh,g.overArgs=nS,g.overEvery=th,g.overSome=ih,g.partial=Ga,g.partialRight=Wl,g.partition=MI,g.pick=oy,g.pickBy=ep,g.property=sp,g.propertyOf=rh,g.pull=kf,g.pullAll=Rl,g.pullAllBy=Mf,g.pullAllWith=qf,g.pullAt=Jf,g.range=oh,g.rangeRight=ah,g.rearg=eS,g.reject=GI,g.remove=Gf,g.rest=tS,g.reverse=Ma,g.sampleSize=$I,g.set=uy,g.setWith=sy,g.shuffle=WI,g.slice=Vf,g.sortBy=QI,g.sortedUniq=Kf,g.sortedUniqBy=zf,g.split=wy,g.spread=iS,g.tail=Xf,g.take=Zf,g.takeRight=nI,g.takeRightWhile=eI,g.takeWhile=tI,g.tap=SI,g.throttle=rS,g.thru=zr,g.toArray=Kl,g.toPairs=tp,g.toPairsIn=ip,g.toPath=ch,g.toPlainObject=Xl,g.transform=ly,g.unary=oS,g.union=iI,g.unionBy=rI,g.unionWith=oI,g.uniq=aI,g.uniqBy=uI,g.uniqWith=sI,g.unset=py,g.unzip=qa,g.unzipWith=xl,g.update=cy,g.updateWith=dy,g.values=Ni,g.valuesIn=my,g.without=lI,g.words=ap,g.wrap=aS,g.xor=pI,g.xorBy=cI,g.xorWith=dI,g.zip=mI,g.zipObject=gI,g.zipObjectDeep=fI,g.zipWith=II,g.entries=tp,g.entriesIn=ip,g.extend=Zl,g.extendWith=ro,Ka(g,g),g.add=mh,g.attempt=up,g.camelCase=Sy,g.capitalize=rp,g.ceil=gh,g.clamp=gy,g.clone=sS,g.cloneDeep=pS,g.cloneDeepWith=cS,g.cloneWith=lS,g.conformsTo=dS,g.deburr=op,g.defaultTo=jy,g.divide=fh,g.endsWith=yy,g.eq=We,g.escape=hy,g.escapeRegExp=Ty,g.every=AI,g.find=NI,g.findIndex=_l,g.findKey=GS,g.findLast=_I,g.findLastIndex=wl,g.findLastKey=VS,g.floor=Ih,g.forEach=Pl,g.forEachRight=kl,g.forIn=$S,g.forInRight=WS,g.forOwn=jS,g.forOwnRight=HS,g.get=Wa,g.gt=mS,g.gte=gS,g.has=KS,g.hasIn=ja,g.head=Ul,g.identity=fe,g.includes=xI,g.indexOf=_f,g.inRange=fy,g.invoke=ZS,g.isArguments=ai,g.isArray=en,g.isArrayBuffer=fS,g.isArrayLike=me,g.isArrayLikeObject=qn,g.isBoolean=IS,g.isBuffer=Vt,g.isDate=SS,g.isElement=yS,g.isEmpty=hS,g.isEqual=TS,g.isEqualWith=FS,g.isError=Va,g.isFinite=CS,g.isFunction=Et,g.isInteger=jl,g.isLength=to,g.isMap=Hl,g.isMatch=ES,g.isMatchWith=OS,g.isNaN=bS,g.isNative=DS,g.isNil=vS,g.isNull=AS,g.isNumber=Ql,g.isObject=Bn,g.isObjectLike=Ln,g.isPlainObject=er,g.isRegExp=$a,g.isSafeInteger=NS,g.isSet=Yl,g.isString=io,g.isSymbol=Ce,g.isTypedArray=vi,g.isUndefined=_S,g.isWeakMap=wS,g.isWeakSet=BS,g.join=xf,g.kebabCase=Fy,g.last=xe,g.lastIndexOf=Lf,g.lowerCase=Cy,g.lowerFirst=Ey,g.lt=US,g.lte=RS,g.max=Sh,g.maxBy=yh,g.mean=hh,g.meanBy=Th,g.min=Fh,g.minBy=Ch,g.stubArray=Xa,g.stubFalse=Za,g.stubObject=uh,g.stubString=sh,g.stubTrue=lh,g.multiply=Eh,g.nth=Pf,g.noConflict=Zy,g.noop=za,g.now=Zr,g.pad=Oy,g.padEnd=by,g.padStart=Dy,g.parseInt=Ay,g.random=Iy,g.reduce=qI,g.reduceRight=JI,g.repeat=vy,g.replace=Ny,g.result=ay,g.round=Oh,g.runInContext=T,g.sample=VI,g.size=jI,g.snakeCase=_y,g.some=HI,g.sortedIndex=$f,g.sortedIndexBy=Wf,g.sortedIndexOf=jf,g.sortedLastIndex=Hf,g.sortedLastIndexBy=Qf,g.sortedLastIndexOf=Yf,g.startCase=By,g.startsWith=Uy,g.subtract=bh,g.sum=Dh,g.sumBy=Ah,g.template=Ry,g.times=ph,g.toFinite=Ot,g.toInteger=rn,g.toLength=zl,g.toLower=xy,g.toNumber=Le,g.toSafeInteger=xS,g.toString=yn,g.toUpper=Ly,g.trim=Py,g.trimEnd=ky,g.trimStart=My,g.truncate=qy,g.unescape=Jy,g.uniqueId=dh,g.upperCase=Gy,g.upperFirst=Ha,g.each=Pl,g.eachRight=kl,g.first=Ul,Ka(g,function(){var n={};return ut(g,function(r,u){Tn.call(g.prototype,u)||(n[u]=r)}),n}(),{chain:!1}),g.VERSION=o,_e(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){g[n].placeholder=g}),_e(["drop","take"],function(n,r){pn.prototype[n]=function(u){u=u===t?1:Hn(rn(u),0);var p=this.__filtered__&&!r?new pn(this):this.clone();return p.__filtered__?p.__takeCount__=ee(u,p.__takeCount__):p.__views__.push({size:ee(u,Ae),type:n+(p.__dir__<0?"Right":"")}),p},pn.prototype[n+"Right"]=function(u){return this.reverse()[n](u).reverse()}}),_e(["filter","map","takeWhile"],function(n,r){var u=r+1,p=u==gr||u==fr;pn.prototype[n]=function(c){var f=this.clone();return f.__iteratees__.push({iteratee:Q(c,3),type:u}),f.__filtered__=f.__filtered__||p,f}}),_e(["head","last"],function(n,r){var u="take"+(r?"Right":"");pn.prototype[n]=function(){return this[u](1).value()[0]}}),_e(["initial","tail"],function(n,r){var u="drop"+(r?"":"Right");pn.prototype[n]=function(){return this.__filtered__?new pn(this):this[u](1)}}),pn.prototype.compact=function(){return this.filter(fe)},pn.prototype.find=function(n){return this.filter(n).head()},pn.prototype.findLast=function(n){return this.reverse().find(n)},pn.prototype.invokeMap=an(function(n,r){return typeof n=="function"?new pn(this):this.map(function(u){return Yi(u,n,r)})}),pn.prototype.reject=function(n){return this.filter(eo(Q(n)))},pn.prototype.slice=function(n,r){n=rn(n);var u=this;return u.__filtered__&&(n>0||r<0)?new pn(u):(n<0?u=u.takeRight(-n):n&&(u=u.drop(n)),r!==t&&(r=rn(r),u=r<0?u.dropRight(-r):u.take(r-n)),u)},pn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},pn.prototype.toArray=function(){return this.take(Ae)},ut(pn.prototype,function(n,r){var u=/^(?:filter|find|map|reject)|While$/.test(r),p=/^(?:head|last)$/.test(r),c=g[p?"take"+(r=="last"?"Right":""):r],f=p||/^find/.test(r);c&&(g.prototype[r]=function(){var I=this.__wrapped__,h=p?[1]:arguments,C=I instanceof pn,v=h[0],N=C||en(I),U=function(un){var dn=c.apply(g,Lt([un],h));return p&&L?dn[0]:dn};N&&u&&typeof v=="function"&&v.length!=1&&(C=N=!1);var L=this.__chain__,V=!!this.__actions__.length,Y=f&&!L,on=C&&!V;if(!f&&N){I=on?I:new pn(this);var K=n.apply(I,h);return K.__actions__.push({func:zr,args:[U],thisArg:t}),new Be(K,L)}return Y&&on?n.apply(this,h):(K=this.thru(U),Y?p?K.value()[0]:K.value():K)})}),_e(["pop","push","shift","sort","splice","unshift"],function(n){var r=Er[n],u=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",p=/^(?:pop|shift)$/.test(n);g.prototype[n]=function(){var c=arguments;if(p&&!this.__chain__){var f=this.value();return r.apply(en(f)?f:[],c)}return this[u](function(I){return r.apply(en(I)?I:[],c)})}}),ut(pn.prototype,function(n,r){var u=g[r];if(u){var p=u.name+"";Tn.call(Ei,p)||(Ei[p]=[]),Ei[p].push({name:r,func:u})}}),Ei[$r(t,fn).name]=[{name:"wrapper",func:t}],pn.prototype.clone=qm,pn.prototype.reverse=Jm,pn.prototype.value=Gm,g.prototype.at=yI,g.prototype.chain=hI,g.prototype.commit=TI,g.prototype.next=FI,g.prototype.plant=EI,g.prototype.reverse=OI,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=bI,g.prototype.first=g.prototype.head,Gi&&(g.prototype[Gi]=CI),g},Ti=hm();Xt?((Xt.exports=Ti)._=Ti,Yo._=Ti):Kn._=Ti}).call(tr)})(yo,yo.exports);var pF=yo.exports;const _t=uF(pF),cF="Tarvent API",dF="https://cdn.trvt.io/resource/graphics/logo/RefLogo.png",mF="https://cdn.trvt.io/resource/graphics/logo/favicon-16x16.png",gF=`[{"title":"Welcome","content":"\\n# 👋 Hi\\n\\nWelcome to [Tarvent](https://api.tarvent.com/graphql/)'s GraphQL documentation!\\n"}]`,fF='[{"href":"https://api.tarvent.com","label":"Tarvent API","kind":"Tarvent"},{"href":"https://www.tarvent.com/contact-us","label":"Tarvent support","kind":"Tarvent"}]',IF='{"UUID":"000000000000000000","Byte":"000000","Decimal":0,"Int!":420,"String":"abc"}',SF="true",ic={APP_TITLE:cF,APP_LOGO:dF,APP_FAVICON:mF,PAGES:gF,EXTERNAL_LINKS:fF,QUERY_GENERATION_FACTORIES:IF,MAGIDOC_GENERATE:SF};function xE(i){return i.get(ic)}function Du(i,e){return i.getOrDefault(ic,e)}function mn(i,e){if(!!!i)throw new Error(e)}function wt(i){return typeof i=="object"&&i!==null}function ze(i,e){if(!!!i)throw new Error(e??"Unexpected invariant triggered.")}const yF=/\r\n|[\n\r]/g;function du(i,e){let t=0,o=1;for(const a of i.body.matchAll(yF)){if(typeof a.index=="number"||ze(!1),a.index>=e)break;t=a.index+a[0].length,o+=1}return{line:o,column:e+1-t}}function hF(i){return rc(i.source,du(i.source,i.start))}function rc(i,e){const t=i.locationOffset.column-1,o="".padStart(t)+i.body,a=e.line-1,s=i.locationOffset.line-1,l=e.line+s,d=e.line===1?t:0,m=e.column+d,S=`${i.name}:${l}:${m}
`,y=o.split(/\r\n|[\n\r]/g),F=y[a];if(F.length>120){const A=Math.floor(m/80),B=m%80,R=[];for(let x=0;x<F.length;x+=80)R.push(F.slice(x,x+80));return S+wp([[`${l} |`,R[0]],...R.slice(1,A+1).map(x=>["|",x]),["|","^".padStart(B)],["|",R[A+1]]])}return S+wp([[`${l-1} |`,y[a-1]],[`${l} |`,F],["|","^".padStart(m)],[`${l+1} |`,y[a+1]]])}function wp(i){const e=i.filter(([o,a])=>a!==void 0),t=Math.max(...e.map(([o])=>o.length));return e.map(([o,a])=>o.padStart(t)+(a?" "+a:"")).join(`
`)}function TF(i){const e=i[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:e}class $ extends Error{constructor(e,...t){var o,a,s;const{nodes:l,source:d,positions:m,path:S,originalError:y,extensions:F}=TF(t);super(e),this.name="GraphQLError",this.path=S??void 0,this.originalError=y??void 0,this.nodes=Bp(Array.isArray(l)?l:l?[l]:void 0);const A=Bp((o=this.nodes)===null||o===void 0?void 0:o.map(R=>R.loc).filter(R=>R!=null));this.source=d??(A==null||(a=A[0])===null||a===void 0?void 0:a.source),this.positions=m??(A==null?void 0:A.map(R=>R.start)),this.locations=m&&d?m.map(R=>du(d,R)):A==null?void 0:A.map(R=>du(R.source,R.start));const B=wt(y==null?void 0:y.extensions)?y==null?void 0:y.extensions:void 0;this.extensions=(s=F??B)!==null&&s!==void 0?s:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),y!=null&&y.stack?Object.defineProperty(this,"stack",{value:y.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,$):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(e+=`

`+hF(t.loc));else if(this.source&&this.locations)for(const t of this.locations)e+=`

`+rc(this.source,t);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function Bp(i){return i===void 0||i.length===0?void 0:i}function Yn(i,e,t){return new $(`Syntax Error: ${t}`,{source:i,positions:[e]})}class FF{constructor(e,t,o){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=o}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class oc{constructor(e,t,o,a,s,l){this.kind=e,this.start=t,this.end=o,this.line=a,this.column=s,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const ac={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},CF=new Set(Object.keys(ac));function Up(i){const e=i==null?void 0:i.kind;return typeof e=="string"&&CF.has(e)}var Pe;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Pe||(Pe={}));var H;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(H||(H={}));var E;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(E||(E={}));function mu(i){return i===9||i===32}function lr(i){return i>=48&&i<=57}function uc(i){return i>=97&&i<=122||i>=65&&i<=90}function Au(i){return uc(i)||i===95}function sc(i){return uc(i)||lr(i)||i===95}function EF(i){var e;let t=Number.MAX_SAFE_INTEGER,o=null,a=-1;for(let l=0;l<i.length;++l){var s;const d=i[l],m=OF(d);m!==d.length&&(o=(s=o)!==null&&s!==void 0?s:l,a=l,l!==0&&m<t&&(t=m))}return i.map((l,d)=>d===0?l:l.slice(t)).slice((e=o)!==null&&e!==void 0?e:0,a+1)}function OF(i){let e=0;for(;e<i.length&&mu(i.charCodeAt(e));)++e;return e}function bF(i,e){const t=i.replace(/"""/g,'\\"""'),o=t.split(/\r\n|[\n\r]/g),a=o.length===1,s=o.length>1&&o.slice(1).every(B=>B.length===0||mu(B.charCodeAt(0))),l=t.endsWith('\\"""'),d=i.endsWith('"')&&!l,m=i.endsWith("\\"),S=d||m,y=!(e!=null&&e.minimize)&&(!a||i.length>70||S||s||l);let F="";const A=a&&mu(i.charCodeAt(0));return(y&&!A||s)&&(F+=`
`),F+=t,(y||S)&&(F+=`
`),'"""'+F+'"""'}var _;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(_||(_={}));class DF{constructor(e){const t=new oc(_.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==_.EOF)do if(e.next)e=e.next;else{const t=vF(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===_.COMMENT);return e}}function AF(i){return i===_.BANG||i===_.DOLLAR||i===_.AMP||i===_.PAREN_L||i===_.PAREN_R||i===_.SPREAD||i===_.COLON||i===_.EQUALS||i===_.AT||i===_.BRACKET_L||i===_.BRACKET_R||i===_.BRACE_L||i===_.PIPE||i===_.BRACE_R}function Ui(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function bo(i,e){return lc(i.charCodeAt(e))&&pc(i.charCodeAt(e+1))}function lc(i){return i>=55296&&i<=56319}function pc(i){return i>=56320&&i<=57343}function li(i,e){const t=i.source.body.codePointAt(e);if(t===void 0)return _.EOF;if(t>=32&&t<=126){const o=String.fromCodePoint(t);return o==='"'?`'"'`:`"${o}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function $n(i,e,t,o,a){const s=i.line,l=1+t-i.lineStart;return new oc(e,t,o,s,l,a)}function vF(i,e){const t=i.source.body,o=t.length;let a=e;for(;a<o;){const s=t.charCodeAt(a);switch(s){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++i.line,i.lineStart=a;continue;case 13:t.charCodeAt(a+1)===10?a+=2:++a,++i.line,i.lineStart=a;continue;case 35:return NF(i,a);case 33:return $n(i,_.BANG,a,a+1);case 36:return $n(i,_.DOLLAR,a,a+1);case 38:return $n(i,_.AMP,a,a+1);case 40:return $n(i,_.PAREN_L,a,a+1);case 41:return $n(i,_.PAREN_R,a,a+1);case 46:if(t.charCodeAt(a+1)===46&&t.charCodeAt(a+2)===46)return $n(i,_.SPREAD,a,a+3);break;case 58:return $n(i,_.COLON,a,a+1);case 61:return $n(i,_.EQUALS,a,a+1);case 64:return $n(i,_.AT,a,a+1);case 91:return $n(i,_.BRACKET_L,a,a+1);case 93:return $n(i,_.BRACKET_R,a,a+1);case 123:return $n(i,_.BRACE_L,a,a+1);case 124:return $n(i,_.PIPE,a,a+1);case 125:return $n(i,_.BRACE_R,a,a+1);case 34:return t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34?xF(i,a):wF(i,a)}if(lr(s)||s===45)return _F(i,a,s);if(Au(s))return LF(i,a);throw Yn(i.source,a,s===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Ui(s)||bo(t,a)?`Unexpected character: ${li(i,a)}.`:`Invalid character: ${li(i,a)}.`)}return $n(i,_.EOF,o,o)}function NF(i,e){const t=i.source.body,o=t.length;let a=e+1;for(;a<o;){const s=t.charCodeAt(a);if(s===10||s===13)break;if(Ui(s))++a;else if(bo(t,a))a+=2;else break}return $n(i,_.COMMENT,e,a,t.slice(e+1,a))}function _F(i,e,t){const o=i.source.body;let a=e,s=t,l=!1;if(s===45&&(s=o.charCodeAt(++a)),s===48){if(s=o.charCodeAt(++a),lr(s))throw Yn(i.source,a,`Invalid number, unexpected digit after 0: ${li(i,a)}.`)}else a=ru(i,a,s),s=o.charCodeAt(a);if(s===46&&(l=!0,s=o.charCodeAt(++a),a=ru(i,a,s),s=o.charCodeAt(a)),(s===69||s===101)&&(l=!0,s=o.charCodeAt(++a),(s===43||s===45)&&(s=o.charCodeAt(++a)),a=ru(i,a,s),s=o.charCodeAt(a)),s===46||Au(s))throw Yn(i.source,a,`Invalid number, expected digit but got: ${li(i,a)}.`);return $n(i,l?_.FLOAT:_.INT,e,a,o.slice(e,a))}function ru(i,e,t){if(!lr(t))throw Yn(i.source,e,`Invalid number, expected digit but got: ${li(i,e)}.`);const o=i.source.body;let a=e+1;for(;lr(o.charCodeAt(a));)++a;return a}function wF(i,e){const t=i.source.body,o=t.length;let a=e+1,s=a,l="";for(;a<o;){const d=t.charCodeAt(a);if(d===34)return l+=t.slice(s,a),$n(i,_.STRING,e,a+1,l);if(d===92){l+=t.slice(s,a);const m=t.charCodeAt(a+1)===117?t.charCodeAt(a+2)===123?BF(i,a):UF(i,a):RF(i,a);l+=m.value,a+=m.size,s=a;continue}if(d===10||d===13)break;if(Ui(d))++a;else if(bo(t,a))a+=2;else throw Yn(i.source,a,`Invalid character within String: ${li(i,a)}.`)}throw Yn(i.source,a,"Unterminated string.")}function BF(i,e){const t=i.source.body;let o=0,a=3;for(;a<12;){const s=t.charCodeAt(e+a++);if(s===125){if(a<5||!Ui(o))break;return{value:String.fromCodePoint(o),size:a}}if(o=o<<4|ir(s),o<0)break}throw Yn(i.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+a)}".`)}function UF(i,e){const t=i.source.body,o=Rp(t,e+2);if(Ui(o))return{value:String.fromCodePoint(o),size:6};if(lc(o)&&t.charCodeAt(e+6)===92&&t.charCodeAt(e+7)===117){const a=Rp(t,e+8);if(pc(a))return{value:String.fromCodePoint(o,a),size:12}}throw Yn(i.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+6)}".`)}function Rp(i,e){return ir(i.charCodeAt(e))<<12|ir(i.charCodeAt(e+1))<<8|ir(i.charCodeAt(e+2))<<4|ir(i.charCodeAt(e+3))}function ir(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function RF(i,e){const t=i.source.body;switch(t.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Yn(i.source,e,`Invalid character escape sequence: "${t.slice(e,e+2)}".`)}function xF(i,e){const t=i.source.body,o=t.length;let a=i.lineStart,s=e+3,l=s,d="";const m=[];for(;s<o;){const S=t.charCodeAt(s);if(S===34&&t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34){d+=t.slice(l,s),m.push(d);const y=$n(i,_.BLOCK_STRING,e,s+3,EF(m).join(`
`));return i.line+=m.length-1,i.lineStart=a,y}if(S===92&&t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34&&t.charCodeAt(s+3)===34){d+=t.slice(l,s),l=s+1,s+=4;continue}if(S===10||S===13){d+=t.slice(l,s),m.push(d),S===13&&t.charCodeAt(s+1)===10?s+=2:++s,d="",l=s,a=s;continue}if(Ui(S))++s;else if(bo(t,s))s+=2;else throw Yn(i.source,s,`Invalid character within String: ${li(i,s)}.`)}throw Yn(i.source,s,"Unterminated string.")}function LF(i,e){const t=i.source.body,o=t.length;let a=e+1;for(;a<o;){const s=t.charCodeAt(a);if(sc(s))++a;else break}return $n(i,_.NAME,e,a,t.slice(e,a))}const PF=10,cc=2;function j(i){return Do(i,[])}function Do(i,e){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return kF(i,e);default:return String(i)}}function kF(i,e){if(i===null)return"null";if(e.includes(i))return"[Circular]";const t=[...e,i];if(MF(i)){const o=i.toJSON();if(o!==i)return typeof o=="string"?o:Do(o,t)}else if(Array.isArray(i))return JF(i,t);return qF(i,t)}function MF(i){return typeof i.toJSON=="function"}function qF(i,e){const t=Object.entries(i);return t.length===0?"{}":e.length>cc?"["+GF(i)+"]":"{ "+t.map(([a,s])=>a+": "+Do(s,e)).join(", ")+" }"}function JF(i,e){if(i.length===0)return"[]";if(e.length>cc)return"[Array]";const t=Math.min(PF,i.length),o=i.length-t,a=[];for(let s=0;s<t;++s)a.push(Do(i[s],e));return o===1?a.push("... 1 more item"):o>1&&a.push(`... ${o} more items`),"["+a.join(", ")+"]"}function GF(i){const e=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return e}const gt=globalThis.process?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if(typeof e=="object"&&e!==null){var o;const a=t.prototype[Symbol.toStringTag],s=Symbol.toStringTag in e?e[Symbol.toStringTag]:(o=e.constructor)===null||o===void 0?void 0:o.name;if(a===s){const l=j(e);throw new Error(`Cannot use ${a} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class dc{constructor(e,t="GraphQL request",o={line:1,column:1}){typeof e=="string"||mn(!1,`Body must be a string. Received: ${j(e)}.`),this.body=e,this.name=t,this.locationOffset=o,this.locationOffset.line>0||mn(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||mn(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function VF(i){return gt(i,dc)}function $F(i,e){return new mc(i,e).parseDocument()}function WF(i,e){const t=new mc(i,e);t.expectToken(_.SOF);const o=t.parseValueLiteral(!1);return t.expectToken(_.EOF),o}class mc{constructor(e,t={}){const o=VF(e)?e:new dc(e);this._lexer=new DF(o),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(_.NAME);return this.node(e,{kind:E.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:E.DOCUMENT,definitions:this.many(_.SOF,this.parseDefinition,_.EOF)})}parseDefinition(){if(this.peek(_.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===_.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw Yn(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(_.BRACE_L))return this.node(e,{kind:E.OPERATION_DEFINITION,operation:Pe.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let o;return this.peek(_.NAME)&&(o=this.parseName()),this.node(e,{kind:E.OPERATION_DEFINITION,operation:t,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(_.NAME);switch(e.value){case"query":return Pe.QUERY;case"mutation":return Pe.MUTATION;case"subscription":return Pe.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(_.PAREN_L,this.parseVariableDefinition,_.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:E.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(_.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(_.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(_.DOLLAR),this.node(e,{kind:E.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:E.SELECTION_SET,selections:this.many(_.BRACE_L,this.parseSelection,_.BRACE_R)})}parseSelection(){return this.peek(_.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let o,a;return this.expectOptionalToken(_.COLON)?(o=t,a=this.parseName()):a=t,this.node(e,{kind:E.FIELD,alias:o,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(_.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(_.PAREN_L,t,_.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,o=this.parseName();return this.expectToken(_.COLON),this.node(t,{kind:E.ARGUMENT,name:o,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(_.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(_.NAME)?this.node(e,{kind:E.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:E.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:E.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:E.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case _.BRACKET_L:return this.parseList(e);case _.BRACE_L:return this.parseObject(e);case _.INT:return this.advanceLexer(),this.node(t,{kind:E.INT,value:t.value});case _.FLOAT:return this.advanceLexer(),this.node(t,{kind:E.FLOAT,value:t.value});case _.STRING:case _.BLOCK_STRING:return this.parseStringLiteral();case _.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:E.BOOLEAN,value:!0});case"false":return this.node(t,{kind:E.BOOLEAN,value:!1});case"null":return this.node(t,{kind:E.NULL});default:return this.node(t,{kind:E.ENUM,value:t.value})}case _.DOLLAR:if(e)if(this.expectToken(_.DOLLAR),this._lexer.token.kind===_.NAME){const o=this._lexer.token.value;throw Yn(this._lexer.source,t.start,`Unexpected variable "$${o}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:E.STRING,value:e.value,block:e.kind===_.BLOCK_STRING})}parseList(e){const t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:E.LIST,values:this.any(_.BRACKET_L,t,_.BRACKET_R)})}parseObject(e){const t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:E.OBJECT,fields:this.any(_.BRACE_L,t,_.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,o=this.parseName();return this.expectToken(_.COLON),this.node(t,{kind:E.OBJECT_FIELD,name:o,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(_.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(_.AT),this.node(t,{kind:E.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(_.BRACKET_L)){const o=this.parseTypeReference();this.expectToken(_.BRACKET_R),t=this.node(e,{kind:E.LIST_TYPE,type:o})}else t=this.parseNamedType();return this.expectOptionalToken(_.BANG)?this.node(e,{kind:E.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:E.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(_.STRING)||this.peek(_.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const o=this.parseConstDirectives(),a=this.many(_.BRACE_L,this.parseOperationTypeDefinition,_.BRACE_R);return this.node(e,{kind:E.SCHEMA_DEFINITION,description:t,directives:o,operationTypes:a})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(_.COLON);const o=this.parseNamedType();return this.node(e,{kind:E.OPERATION_TYPE_DEFINITION,operation:t,type:o})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const o=this.parseName(),a=this.parseConstDirectives();return this.node(e,{kind:E.SCALAR_TYPE_DEFINITION,description:t,name:o,directives:a})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const o=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:E.OBJECT_TYPE_DEFINITION,description:t,name:o,interfaces:a,directives:s,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(_.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(_.BRACE_L,this.parseFieldDefinition,_.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),o=this.parseName(),a=this.parseArgumentDefs();this.expectToken(_.COLON);const s=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(e,{kind:E.FIELD_DEFINITION,description:t,name:o,arguments:a,type:s,directives:l})}parseArgumentDefs(){return this.optionalMany(_.PAREN_L,this.parseInputValueDef,_.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),o=this.parseName();this.expectToken(_.COLON);const a=this.parseTypeReference();let s;this.expectOptionalToken(_.EQUALS)&&(s=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(e,{kind:E.INPUT_VALUE_DEFINITION,description:t,name:o,type:a,defaultValue:s,directives:l})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const o=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:E.INTERFACE_TYPE_DEFINITION,description:t,name:o,interfaces:a,directives:s,fields:l})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const o=this.parseName(),a=this.parseConstDirectives(),s=this.parseUnionMemberTypes();return this.node(e,{kind:E.UNION_TYPE_DEFINITION,description:t,name:o,directives:a,types:s})}parseUnionMemberTypes(){return this.expectOptionalToken(_.EQUALS)?this.delimitedMany(_.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const o=this.parseName(),a=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();return this.node(e,{kind:E.ENUM_TYPE_DEFINITION,description:t,name:o,directives:a,values:s})}parseEnumValuesDefinition(){return this.optionalMany(_.BRACE_L,this.parseEnumValueDefinition,_.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),o=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(e,{kind:E.ENUM_VALUE_DEFINITION,description:t,name:o,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Yn(this._lexer.source,this._lexer.token.start,`${so(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const o=this.parseName(),a=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();return this.node(e,{kind:E.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:o,directives:a,fields:s})}parseInputFieldsDefinition(){return this.optionalMany(_.BRACE_L,this.parseInputValueDef,_.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===_.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),o=this.optionalMany(_.BRACE_L,this.parseOperationTypeDefinition,_.BRACE_R);if(t.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:E.SCHEMA_EXTENSION,directives:t,operationTypes:o})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),o=this.parseConstDirectives();if(o.length===0)throw this.unexpected();return this.node(e,{kind:E.SCALAR_TYPE_EXTENSION,name:t,directives:o})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(o.length===0&&a.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:E.OBJECT_TYPE_EXTENSION,name:t,interfaces:o,directives:a,fields:s})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(o.length===0&&a.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:E.INTERFACE_TYPE_EXTENSION,name:t,interfaces:o,directives:a,fields:s})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),o=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(o.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:E.UNION_TYPE_EXTENSION,name:t,directives:o,types:a})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),o=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(o.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:E.ENUM_TYPE_EXTENSION,name:t,directives:o,values:a})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),o=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(o.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:E.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:o,fields:a})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(_.AT);const o=this.parseName(),a=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(e,{kind:E.DIRECTIVE_DEFINITION,description:t,name:o,arguments:a,repeatable:s,locations:l})}parseDirectiveLocations(){return this.delimitedMany(_.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(H,t.value))return t;throw this.unexpected(e)}node(e,t){return this._options.noLocation!==!0&&(t.loc=new FF(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw Yn(this._lexer.source,t.start,`Expected ${gc(e)}, found ${so(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const t=this._lexer.token;if(t.kind===_.NAME&&t.value===e)this.advanceLexer();else throw Yn(this._lexer.source,t.start,`Expected "${e}", found ${so(t)}.`)}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===_.NAME&&t.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const t=e??this._lexer.token;return Yn(this._lexer.source,t.start,`Unexpected ${so(t)}.`)}any(e,t,o){this.expectToken(e);const a=[];for(;!this.expectOptionalToken(o);)a.push(t.call(this));return a}optionalMany(e,t,o){if(this.expectOptionalToken(e)){const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(o));return a}return[]}many(e,t,o){this.expectToken(e);const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(o));return a}delimitedMany(e,t){this.expectOptionalToken(e);const o=[];do o.push(t.call(this));while(this.expectOptionalToken(e));return o}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(e!==void 0&&t.kind!==_.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw Yn(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function so(i){const e=i.value;return gc(i.kind)+(e!=null?` "${e}"`:"")}function gc(i){return AF(i)?`"${i}"`:i}const jF=5;function Ao(i,e){const[t,o]=e?[i,e]:[void 0,i];let a=" Did you mean ";t&&(a+=t+" ");const s=o.map(m=>`"${m}"`);switch(s.length){case 0:return"";case 1:return a+s[0]+"?";case 2:return a+s[0]+" or "+s[1]+"?"}const l=s.slice(0,jF),d=l.pop();return a+l.join(", ")+", or "+d+"?"}function xp(i){return i}function wi(i,e){const t=Object.create(null);for(const o of i)t[e(o)]=o;return t}function ui(i,e,t){const o=Object.create(null);for(const a of i)o[e(a)]=t(a);return o}function Dt(i,e){const t=Object.create(null);for(const o of Object.keys(i))t[o]=e(i[o],o);return t}function HF(i,e){let t=0,o=0;for(;t<i.length&&o<e.length;){let a=i.charCodeAt(t),s=e.charCodeAt(o);if(lo(a)&&lo(s)){let l=0;do++t,l=l*10+a-gu,a=i.charCodeAt(t);while(lo(a)&&l>0);let d=0;do++o,d=d*10+s-gu,s=e.charCodeAt(o);while(lo(s)&&d>0);if(l<d)return-1;if(l>d)return 1}else{if(a<s)return-1;if(a>s)return 1;++t,++o}}return i.length-e.length}const gu=48,QF=57;function lo(i){return!isNaN(i)&&gu<=i&&i<=QF}function vo(i,e){const t=Object.create(null),o=new YF(i),a=Math.floor(i.length*.4)+1;for(const s of e){const l=o.measure(s,a);l!==void 0&&(t[s]=l)}return Object.keys(t).sort((s,l)=>{const d=t[s]-t[l];return d!==0?d:HF(s,l)})}class YF{constructor(e){this._input=e,this._inputLowerCase=e.toLowerCase(),this._inputArray=Lp(this._inputLowerCase),this._rows=[new Array(e.length+1).fill(0),new Array(e.length+1).fill(0),new Array(e.length+1).fill(0)]}measure(e,t){if(this._input===e)return 0;const o=e.toLowerCase();if(this._inputLowerCase===o)return 1;let a=Lp(o),s=this._inputArray;if(a.length<s.length){const y=a;a=s,s=y}const l=a.length,d=s.length;if(l-d>t)return;const m=this._rows;for(let y=0;y<=d;y++)m[0][y]=y;for(let y=1;y<=l;y++){const F=m[(y-1)%3],A=m[y%3];let B=A[0]=y;for(let R=1;R<=d;R++){const x=a[y-1]===s[R-1]?0:1;let z=Math.min(F[R]+1,A[R-1]+1,F[R-1]+x);if(y>1&&R>1&&a[y-1]===s[R-2]&&a[y-2]===s[R-1]){const fn=m[(y-2)%3][R-2];z=Math.min(z,fn+1)}z<B&&(B=z),A[R]=z}if(B>t)return}const S=m[l%3][d];return S<=t?S:void 0}}function Lp(i){const e=i.length,t=new Array(e);for(let o=0;o<e;++o)t[o]=i.charCodeAt(o);return t}function Me(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const e=Object.create(null);for(const[t,o]of Object.entries(i))e[t]=o;return e}function KF(i){return`"${i.replace(zF,XF)}"`}const zF=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function XF(i){return ZF[i.charCodeAt(0)]}const ZF=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],rr=Object.freeze({});function fc(i,e,t=ac){const o=new Map;for(const fn of Object.values(E))o.set(fn,Ic(e,fn));let a,s=Array.isArray(i),l=[i],d=-1,m=[],S=i,y,F;const A=[],B=[];do{d++;const fn=d===l.length,Vn=fn&&m.length!==0;if(fn){if(y=B.length===0?void 0:A[A.length-1],S=F,F=B.pop(),Vn)if(s){S=S.slice();let wn=0;for(const[xn,re]of m){const Zn=xn-wn;re===null?(S.splice(Zn,1),wn++):S[Zn]=re}}else{S=Object.defineProperties({},Object.getOwnPropertyDescriptors(S));for(const[wn,xn]of m)S[wn]=xn}d=a.index,l=a.keys,m=a.edits,s=a.inArray,a=a.prev}else if(F){if(y=s?d:l[d],S=F[y],S==null)continue;A.push(y)}let Dn;if(!Array.isArray(S)){var R,x;Up(S)||mn(!1,`Invalid AST Node: ${j(S)}.`);const wn=fn?(R=o.get(S.kind))===null||R===void 0?void 0:R.leave:(x=o.get(S.kind))===null||x===void 0?void 0:x.enter;if(Dn=wn==null?void 0:wn.call(e,S,y,F,A,B),Dn===rr)break;if(Dn===!1){if(!fn){A.pop();continue}}else if(Dn!==void 0&&(m.push([y,Dn]),!fn))if(Up(Dn))S=Dn;else{A.pop();continue}}if(Dn===void 0&&Vn&&m.push([y,S]),fn)A.pop();else{var z;a={inArray:s,index:d,keys:l,edits:m,prev:a},s=Array.isArray(S),l=s?S:(z=t[S.kind])!==null&&z!==void 0?z:[],d=-1,m=[],F&&B.push(F),F=S}}while(a!==void 0);return m.length!==0?m[m.length-1][1]:i}function nC(i){const e=new Array(i.length).fill(null),t=Object.create(null);for(const o of Object.values(E)){let a=!1;const s=new Array(i.length).fill(void 0),l=new Array(i.length).fill(void 0);for(let m=0;m<i.length;++m){const{enter:S,leave:y}=Ic(i[m],o);a||(a=S!=null||y!=null),s[m]=S,l[m]=y}if(!a)continue;const d={enter(...m){const S=m[0];for(let F=0;F<i.length;F++)if(e[F]===null){var y;const A=(y=s[F])===null||y===void 0?void 0:y.apply(i[F],m);if(A===!1)e[F]=S;else if(A===rr)e[F]=rr;else if(A!==void 0)return A}},leave(...m){const S=m[0];for(let F=0;F<i.length;F++)if(e[F]===null){var y;const A=(y=l[F])===null||y===void 0?void 0:y.apply(i[F],m);if(A===rr)e[F]=rr;else if(A!==void 0&&A!==!1)return A}else e[F]===S&&(e[F]=null)}};t[o]=d}return t}function Ic(i,e){const t=i[e];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function dt(i){return fc(i,tC)}const eC=80,tC={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>G(i.definitions,`

`)},OperationDefinition:{leave(i){const e=cn("(",G(i.variableDefinitions,", "),")"),t=G([i.operation,G([i.name,e]),G(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:e,defaultValue:t,directives:o})=>i+": "+e+cn(" = ",t)+cn(" ",G(o," "))},SelectionSet:{leave:({selections:i})=>He(i)},Field:{leave({alias:i,name:e,arguments:t,directives:o,selectionSet:a}){const s=cn("",i,": ")+e;let l=s+cn("(",G(t,", "),")");return l.length>eC&&(l=s+cn(`(
`,mo(G(t,`
`)),`
)`)),G([l,G(o," "),a]," ")}},Argument:{leave:({name:i,value:e})=>i+": "+e},FragmentSpread:{leave:({name:i,directives:e})=>"..."+i+cn(" ",G(e," "))},InlineFragment:{leave:({typeCondition:i,directives:e,selectionSet:t})=>G(["...",cn("on ",i),G(e," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:e,variableDefinitions:t,directives:o,selectionSet:a})=>`fragment ${i}${cn("(",G(t,", "),")")} on ${e} ${cn("",G(o," ")," ")}`+a},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:e})=>e?bF(i):KF(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+G(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+G(i,", ")+"}"},ObjectField:{leave:({name:i,value:e})=>i+": "+e},Directive:{leave:({name:i,arguments:e})=>"@"+i+cn("(",G(e,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:e,operationTypes:t})=>cn("",i,`
`)+G(["schema",G(e," "),He(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:e})=>i+": "+e},ScalarTypeDefinition:{leave:({description:i,name:e,directives:t})=>cn("",i,`
`)+G(["scalar",e,G(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:e,interfaces:t,directives:o,fields:a})=>cn("",i,`
`)+G(["type",e,cn("implements ",G(t," & ")),G(o," "),He(a)]," ")},FieldDefinition:{leave:({description:i,name:e,arguments:t,type:o,directives:a})=>cn("",i,`
`)+e+(Pp(t)?cn(`(
`,mo(G(t,`
`)),`
)`):cn("(",G(t,", "),")"))+": "+o+cn(" ",G(a," "))},InputValueDefinition:{leave:({description:i,name:e,type:t,defaultValue:o,directives:a})=>cn("",i,`
`)+G([e+": "+t,cn("= ",o),G(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:e,interfaces:t,directives:o,fields:a})=>cn("",i,`
`)+G(["interface",e,cn("implements ",G(t," & ")),G(o," "),He(a)]," ")},UnionTypeDefinition:{leave:({description:i,name:e,directives:t,types:o})=>cn("",i,`
`)+G(["union",e,G(t," "),cn("= ",G(o," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:e,directives:t,values:o})=>cn("",i,`
`)+G(["enum",e,G(t," "),He(o)]," ")},EnumValueDefinition:{leave:({description:i,name:e,directives:t})=>cn("",i,`
`)+G([e,G(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:e,directives:t,fields:o})=>cn("",i,`
`)+G(["input",e,G(t," "),He(o)]," ")},DirectiveDefinition:{leave:({description:i,name:e,arguments:t,repeatable:o,locations:a})=>cn("",i,`
`)+"directive @"+e+(Pp(t)?cn(`(
`,mo(G(t,`
`)),`
)`):cn("(",G(t,", "),")"))+(o?" repeatable":"")+" on "+G(a," | ")},SchemaExtension:{leave:({directives:i,operationTypes:e})=>G(["extend schema",G(i," "),He(e)]," ")},ScalarTypeExtension:{leave:({name:i,directives:e})=>G(["extend scalar",i,G(e," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:e,directives:t,fields:o})=>G(["extend type",i,cn("implements ",G(e," & ")),G(t," "),He(o)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:e,directives:t,fields:o})=>G(["extend interface",i,cn("implements ",G(e," & ")),G(t," "),He(o)]," ")},UnionTypeExtension:{leave:({name:i,directives:e,types:t})=>G(["extend union",i,G(e," "),cn("= ",G(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:e,values:t})=>G(["extend enum",i,G(e," "),He(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:e,fields:t})=>G(["extend input",i,G(e," "),He(t)]," ")}};function G(i,e=""){var t;return(t=i==null?void 0:i.filter(o=>o).join(e))!==null&&t!==void 0?t:""}function He(i){return cn(`{
`,mo(G(i,`
`)),`
}`)}function cn(i,e,t=""){return e!=null&&e!==""?i+e+t:""}function mo(i){return cn("  ",i.replace(/\n/g,`
  `))}function Pp(i){var e;return(e=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&e!==void 0?e:!1}function fu(i,e){switch(i.kind){case E.NULL:return null;case E.INT:return parseInt(i.value,10);case E.FLOAT:return parseFloat(i.value);case E.STRING:case E.ENUM:case E.BOOLEAN:return i.value;case E.LIST:return i.values.map(t=>fu(t,e));case E.OBJECT:return ui(i.fields,t=>t.name.value,t=>fu(t.value,e));case E.VARIABLE:return e==null?void 0:e[i.name.value]}}function ot(i){if(i!=null||mn(!1,"Must provide name."),typeof i=="string"||mn(!1,"Expected name to be a string."),i.length===0)throw new $("Expected name to be a non-empty string.");for(let e=1;e<i.length;++e)if(!sc(i.charCodeAt(e)))throw new $(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Au(i.charCodeAt(0)))throw new $(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function iC(i){if(i==="true"||i==="false"||i==="null")throw new $(`Enum values cannot be named: ${i}`);return ot(i)}function vu(i){return Yt(i)||ye(i)||pe(i)||Xe(i)||Ze(i)||nt(i)||di(i)||le(i)}function Yt(i){return gt(i,Bt)}function ye(i){return gt(i,mt)}function rC(i){if(!ye(i))throw new Error(`Expected ${j(i)} to be a GraphQL Object type.`);return i}function pe(i){return gt(i,ho)}function oC(i){if(!pe(i))throw new Error(`Expected ${j(i)} to be a GraphQL Interface type.`);return i}function Xe(i){return gt(i,To)}function Ze(i){return gt(i,Bi)}function nt(i){return gt(i,Fo)}function di(i){return gt(i,Se)}function le(i){return gt(i,sn)}function Sc(i){return Yt(i)||Ze(i)||nt(i)||Nu(i)&&Sc(i.ofType)}function yc(i){return Yt(i)||ye(i)||pe(i)||Xe(i)||Ze(i)||Nu(i)&&yc(i.ofType)}function hc(i){return Yt(i)||Ze(i)}function aC(i){return pe(i)||Xe(i)}class Se{constructor(e){vu(e)||mn(!1,`Expected ${j(e)} to be a GraphQL type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class sn{constructor(e){Tc(e)||mn(!1,`Expected ${j(e)} to be a GraphQL nullable type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Nu(i){return di(i)||le(i)}function Tc(i){return vu(i)&&!le(i)}function uC(i){if(!Tc(i))throw new Error(`Expected ${j(i)} to be a GraphQL nullable type.`);return i}function LE(i){return Yt(i)||ye(i)||pe(i)||Xe(i)||Ze(i)||nt(i)}function sC(i){if(i){let e=i;for(;Nu(e);)e=e.ofType;return e}}function Fc(i){return typeof i=="function"?i():i}function Cc(i){return typeof i=="function"?i():i}class Bt{constructor(e){var t,o,a,s;const l=(t=e.parseValue)!==null&&t!==void 0?t:xp;this.name=ot(e.name),this.description=e.description,this.specifiedByURL=e.specifiedByURL,this.serialize=(o=e.serialize)!==null&&o!==void 0?o:xp,this.parseValue=l,this.parseLiteral=(a=e.parseLiteral)!==null&&a!==void 0?a:(d,m)=>l(fu(d,m)),this.extensions=Me(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(s=e.extensionASTNodes)!==null&&s!==void 0?s:[],e.specifiedByURL==null||typeof e.specifiedByURL=="string"||mn(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${j(e.specifiedByURL)}.`),e.serialize==null||typeof e.serialize=="function"||mn(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),e.parseLiteral&&(typeof e.parseValue=="function"&&typeof e.parseLiteral=="function"||mn(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class mt{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.isTypeOf=e.isTypeOf,this.extensions=Me(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>Oc(e),this._interfaces=()=>Ec(e),e.isTypeOf==null||typeof e.isTypeOf=="function"||mn(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${j(e.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Dc(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Ec(i){var e;const t=Fc((e=i.interfaces)!==null&&e!==void 0?e:[]);return Array.isArray(t)||mn(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function Oc(i){const e=Cc(i.fields);return _i(e)||mn(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),Dt(e,(t,o)=>{var a;_i(t)||mn(!1,`${i.name}.${o} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||mn(!1,`${i.name}.${o} field resolver must be a function if provided, but got: ${j(t.resolve)}.`);const s=(a=t.args)!==null&&a!==void 0?a:{};return _i(s)||mn(!1,`${i.name}.${o} args must be an object with argument names as keys.`),{name:ot(o),description:t.description,type:t.type,args:bc(s),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Me(t.extensions),astNode:t.astNode}})}function bc(i){return Object.entries(i).map(([e,t])=>({name:ot(e),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Me(t.extensions),astNode:t.astNode}))}function _i(i){return wt(i)&&!Array.isArray(i)}function Dc(i){return Dt(i,e=>({description:e.description,type:e.type,args:Ac(e.args),resolve:e.resolve,subscribe:e.subscribe,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function Ac(i){return ui(i,e=>e.name,e=>({description:e.description,type:e.type,defaultValue:e.defaultValue,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function lC(i){return le(i.type)&&i.defaultValue===void 0}class ho{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Me(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=Oc.bind(void 0,e),this._interfaces=Ec.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||mn(!1,`${this.name} must provide "resolveType" as a function, but got: ${j(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Dc(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class To{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Me(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=pC.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||mn(!1,`${this.name} must provide "resolveType" as a function, but got: ${j(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function pC(i){const e=Fc(i.types);return Array.isArray(e)||mn(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),e}class Bi{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.extensions=Me(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=cC(this.name,e.values),this._valueLookup=new Map(this._values.map(o=>[o.value,o])),this._nameLookup=wi(this._values,o=>o.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(e){return this._nameLookup[e]}serialize(e){const t=this._valueLookup.get(e);if(t===void 0)throw new $(`Enum "${this.name}" cannot represent value: ${j(e)}`);return t.name}parseValue(e){if(typeof e!="string"){const o=j(e);throw new $(`Enum "${this.name}" cannot represent non-string value: ${o}.`+po(this,o))}const t=this.getValue(e);if(t==null)throw new $(`Value "${e}" does not exist in "${this.name}" enum.`+po(this,e));return t.value}parseLiteral(e,t){if(e.kind!==E.ENUM){const a=dt(e);throw new $(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+po(this,a),{nodes:e})}const o=this.getValue(e.value);if(o==null){const a=dt(e);throw new $(`Value "${a}" does not exist in "${this.name}" enum.`+po(this,a),{nodes:e})}return o.value}toConfig(){const e=ui(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function po(i,e){const t=i.getValues().map(a=>a.name),o=vo(e,t);return Ao("the enum value",o)}function cC(i,e){return _i(e)||mn(!1,`${i} values must be an object with value names as keys.`),Object.entries(e).map(([t,o])=>(_i(o)||mn(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${j(o)}.`),{name:iC(t),description:o.description,value:o.value!==void 0?o.value:t,deprecationReason:o.deprecationReason,extensions:Me(o.extensions),astNode:o.astNode}))}class Fo{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.extensions=Me(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=dC.bind(void 0,e)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const e=Dt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function dC(i){const e=Cc(i.fields);return _i(e)||mn(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),Dt(e,(t,o)=>(!("resolve"in t)||mn(!1,`${i.name}.${o} field has a resolve property, but Input Types cannot define resolvers.`),{name:ot(o),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Me(t.extensions),astNode:t.astNode}))}const ou=2147483647,au=-2147483648,mC=new Bt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const e=dr(i);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isInteger(t))throw new $(`Int cannot represent non-integer value: ${j(e)}`);if(t>ou||t<au)throw new $("Int cannot represent non 32-bit signed integer value: "+j(e));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new $(`Int cannot represent non-integer value: ${j(i)}`);if(i>ou||i<au)throw new $(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==E.INT)throw new $(`Int cannot represent non-integer value: ${dt(i)}`,{nodes:i});const e=parseInt(i.value,10);if(e>ou||e<au)throw new $(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return e}}),gC=new Bt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const e=dr(i);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isFinite(t))throw new $(`Float cannot represent non numeric value: ${j(e)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new $(`Float cannot represent non numeric value: ${j(i)}`);return i},parseLiteral(i){if(i.kind!==E.FLOAT&&i.kind!==E.INT)throw new $(`Float cannot represent non numeric value: ${dt(i)}`,i);return parseFloat(i.value)}}),Gn=new Bt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const e=dr(i);if(typeof e=="string")return e;if(typeof e=="boolean")return e?"true":"false";if(typeof e=="number"&&Number.isFinite(e))return e.toString();throw new $(`String cannot represent value: ${j(i)}`)},parseValue(i){if(typeof i!="string")throw new $(`String cannot represent a non string value: ${j(i)}`);return i},parseLiteral(i){if(i.kind!==E.STRING)throw new $(`String cannot represent a non string value: ${dt(i)}`,{nodes:i});return i.value}}),ke=new Bt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const e=dr(i);if(typeof e=="boolean")return e;if(Number.isFinite(e))return e!==0;throw new $(`Boolean cannot represent a non boolean value: ${j(e)}`)},parseValue(i){if(typeof i!="boolean")throw new $(`Boolean cannot represent a non boolean value: ${j(i)}`);return i},parseLiteral(i){if(i.kind!==E.BOOLEAN)throw new $(`Boolean cannot represent a non boolean value: ${dt(i)}`,{nodes:i});return i.value}}),vc=new Bt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const e=dr(i);if(typeof e=="string")return e;if(Number.isInteger(e))return String(e);throw new $(`ID cannot represent value: ${j(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new $(`ID cannot represent value: ${j(i)}`)},parseLiteral(i){if(i.kind!==E.STRING&&i.kind!==E.INT)throw new $("ID cannot represent a non-string and non-integer value: "+dt(i),{nodes:i});return i.value}}),No=Object.freeze([Gn,mC,gC,ke,vc]);function fC(i){return No.some(({name:e})=>i.name===e)}function dr(i){if(wt(i)){if(typeof i.valueOf=="function"){const e=i.valueOf();if(!wt(e))return e}if(typeof i.toJSON=="function")return i.toJSON()}return i}function IC(i){return gt(i,Qt)}class Qt{constructor(e){var t,o;this.name=ot(e.name),this.description=e.description,this.locations=e.locations,this.isRepeatable=(t=e.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Me(e.extensions),this.astNode=e.astNode,Array.isArray(e.locations)||mn(!1,`@${e.name} locations must be an Array.`);const a=(o=e.args)!==null&&o!==void 0?o:{};wt(a)&&!Array.isArray(a)||mn(!1,`@${e.name} args must be an object with argument names as keys.`),this.args=bc(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Ac(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const SC=new Qt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new sn(ke),description:"Included when true."}}}),yC=new Qt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new sn(ke),description:"Skipped when true."}}}),hC="No longer supported",Nc=new Qt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[H.FIELD_DEFINITION,H.ARGUMENT_DEFINITION,H.INPUT_FIELD_DEFINITION,H.ENUM_VALUE],args:{reason:{type:Gn,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:hC}}}),_c=new Qt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[H.SCALAR],args:{url:{type:new sn(Gn),description:"The URL that specifies the behavior of this scalar."}}}),Ri=Object.freeze([SC,yC,Nc,_c]);function TC(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function or(i,e){if(le(e)){const t=or(i,e.ofType);return(t==null?void 0:t.kind)===E.NULL?null:t}if(i===null)return{kind:E.NULL};if(i===void 0)return null;if(di(e)){const t=e.ofType;if(TC(i)){const o=[];for(const a of i){const s=or(a,t);s!=null&&o.push(s)}return{kind:E.LIST,values:o}}return or(i,t)}if(nt(e)){if(!wt(i))return null;const t=[];for(const o of Object.values(e.getFields())){const a=or(i[o.name],o.type);a&&t.push({kind:E.OBJECT_FIELD,name:{kind:E.NAME,value:o.name},value:a})}return{kind:E.OBJECT,fields:t}}if(hc(e)){const t=e.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:E.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const o=String(t);return kp.test(o)?{kind:E.INT,value:o}:{kind:E.FLOAT,value:o}}if(typeof t=="string")return Ze(e)?{kind:E.ENUM,value:t}:e===vc&&kp.test(t)?{kind:E.INT,value:t}:{kind:E.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${j(t)}.`)}ze(!1,"Unexpected input type: "+j(e))}const kp=/^-?(?:0|[1-9][0-9]*)$/,_u=new mt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Gn,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new sn(new Se(new sn(Ke))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new sn(Ke),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Ke,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Ke,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new sn(new Se(new sn(wc))),resolve:i=>i.getDirectives()}})}),wc=new mt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new sn(Gn),resolve:i=>i.name},description:{type:Gn,resolve:i=>i.description},isRepeatable:{type:new sn(ke),resolve:i=>i.isRepeatable},locations:{type:new sn(new Se(new sn(Bc))),resolve:i=>i.locations},args:{type:new sn(new Se(new sn(_o))),args:{includeDeprecated:{type:ke,defaultValue:!1}},resolve(i,{includeDeprecated:e}){return e?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),Bc=new Bi({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:H.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:H.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:H.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:H.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:H.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:H.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:H.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:H.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:H.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:H.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:H.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:H.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:H.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:H.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:H.UNION,description:"Location adjacent to a union definition."},ENUM:{value:H.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:H.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:H.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:H.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Ke=new mt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new sn(xc),resolve(i){if(Yt(i))return bn.SCALAR;if(ye(i))return bn.OBJECT;if(pe(i))return bn.INTERFACE;if(Xe(i))return bn.UNION;if(Ze(i))return bn.ENUM;if(nt(i))return bn.INPUT_OBJECT;if(di(i))return bn.LIST;if(le(i))return bn.NON_NULL;ze(!1,`Unexpected type: "${j(i)}".`)}},name:{type:Gn,resolve:i=>"name"in i?i.name:void 0},description:{type:Gn,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Gn,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new Se(new sn(Uc)),args:{includeDeprecated:{type:ke,defaultValue:!1}},resolve(i,{includeDeprecated:e}){if(ye(i)||pe(i)){const t=Object.values(i.getFields());return e?t:t.filter(o=>o.deprecationReason==null)}}},interfaces:{type:new Se(new sn(Ke)),resolve(i){if(ye(i)||pe(i))return i.getInterfaces()}},possibleTypes:{type:new Se(new sn(Ke)),resolve(i,e,t,{schema:o}){if(aC(i))return o.getPossibleTypes(i)}},enumValues:{type:new Se(new sn(Rc)),args:{includeDeprecated:{type:ke,defaultValue:!1}},resolve(i,{includeDeprecated:e}){if(Ze(i)){const t=i.getValues();return e?t:t.filter(o=>o.deprecationReason==null)}}},inputFields:{type:new Se(new sn(_o)),args:{includeDeprecated:{type:ke,defaultValue:!1}},resolve(i,{includeDeprecated:e}){if(nt(i)){const t=Object.values(i.getFields());return e?t:t.filter(o=>o.deprecationReason==null)}}},ofType:{type:Ke,resolve:i=>"ofType"in i?i.ofType:void 0}})}),Uc=new mt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new sn(Gn),resolve:i=>i.name},description:{type:Gn,resolve:i=>i.description},args:{type:new sn(new Se(new sn(_o))),args:{includeDeprecated:{type:ke,defaultValue:!1}},resolve(i,{includeDeprecated:e}){return e?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new sn(Ke),resolve:i=>i.type},isDeprecated:{type:new sn(ke),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Gn,resolve:i=>i.deprecationReason}})}),_o=new mt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new sn(Gn),resolve:i=>i.name},description:{type:Gn,resolve:i=>i.description},type:{type:new sn(Ke),resolve:i=>i.type},defaultValue:{type:Gn,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:e,defaultValue:t}=i,o=or(t,e);return o?dt(o):null}},isDeprecated:{type:new sn(ke),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Gn,resolve:i=>i.deprecationReason}})}),Rc=new mt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new sn(Gn),resolve:i=>i.name},description:{type:Gn,resolve:i=>i.description},isDeprecated:{type:new sn(ke),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Gn,resolve:i=>i.deprecationReason}})});var bn;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(bn||(bn={}));const xc=new Bi({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:bn.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:bn.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:bn.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:bn.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:bn.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:bn.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:bn.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:bn.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new sn(_u);new sn(Gn);new sn(Gn);const wo=Object.freeze([_u,wc,Bc,Ke,Uc,_o,Rc,xc]);function FC(i){return wo.some(({name:e})=>i.name===e)}class Lc{constructor(e){var t,o;this.__validationErrors=e.assumeValid===!0?[]:void 0,wt(e)||mn(!1,"Must provide configuration object."),!e.types||Array.isArray(e.types)||mn(!1,`"types" must be Array if provided but got: ${j(e.types)}.`),!e.directives||Array.isArray(e.directives)||mn(!1,`"directives" must be Array if provided but got: ${j(e.directives)}.`),this.description=e.description,this.extensions=Me(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=e.query,this._mutationType=e.mutation,this._subscriptionType=e.subscription,this._directives=(o=e.directives)!==null&&o!==void 0?o:Ri;const a=new Set(e.types);if(e.types!=null)for(const s of e.types)a.delete(s),Qe(s,a);this._queryType!=null&&Qe(this._queryType,a),this._mutationType!=null&&Qe(this._mutationType,a),this._subscriptionType!=null&&Qe(this._subscriptionType,a);for(const s of this._directives)if(IC(s))for(const l of s.args)Qe(l.type,a);Qe(_u,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const s of a){if(s==null)continue;const l=s.name;if(l||mn(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=s,pe(s)){for(const d of s.getInterfaces())if(pe(d)){let m=this._implementationsMap[d.name];m===void 0&&(m=this._implementationsMap[d.name]={objects:[],interfaces:[]}),m.interfaces.push(s)}}else if(ye(s)){for(const d of s.getInterfaces())if(pe(d)){let m=this._implementationsMap[d.name];m===void 0&&(m=this._implementationsMap[d.name]={objects:[],interfaces:[]}),m.objects.push(s)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(e){switch(e){case Pe.QUERY:return this.getQueryType();case Pe.MUTATION:return this.getMutationType();case Pe.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(e){return this.getTypeMap()[e]}getPossibleTypes(e){return Xe(e)?e.getTypes():this.getImplementations(e).objects}getImplementations(e){const t=this._implementationsMap[e.name];return t??{objects:[],interfaces:[]}}isSubType(e,t){let o=this._subTypeMap[e.name];if(o===void 0){if(o=Object.create(null),Xe(e))for(const a of e.getTypes())o[a.name]=!0;else{const a=this.getImplementations(e);for(const s of a.objects)o[s.name]=!0;for(const s of a.interfaces)o[s.name]=!0}this._subTypeMap[e.name]=o}return o[t.name]!==void 0}getDirectives(){return this._directives}getDirective(e){return this.getDirectives().find(t=>t.name===e)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Qe(i,e){const t=sC(i);if(!e.has(t)){if(e.add(t),Xe(t))for(const o of t.getTypes())Qe(o,e);else if(ye(t)||pe(t)){for(const o of t.getInterfaces())Qe(o,e);for(const o of Object.values(t.getFields())){Qe(o.type,e);for(const a of o.args)Qe(a.type,e)}}else if(nt(t))for(const o of Object.values(t.getFields()))Qe(o.type,e)}return e}function CC(i){return i.kind===E.SCHEMA_DEFINITION||mr(i)||i.kind===E.DIRECTIVE_DEFINITION}function mr(i){return i.kind===E.SCALAR_TYPE_DEFINITION||i.kind===E.OBJECT_TYPE_DEFINITION||i.kind===E.INTERFACE_TYPE_DEFINITION||i.kind===E.UNION_TYPE_DEFINITION||i.kind===E.ENUM_TYPE_DEFINITION||i.kind===E.INPUT_OBJECT_TYPE_DEFINITION}function EC(i){return i.kind===E.SCHEMA_EXTENSION||wu(i)}function wu(i){return i.kind===E.SCALAR_TYPE_EXTENSION||i.kind===E.OBJECT_TYPE_EXTENSION||i.kind===E.INTERFACE_TYPE_EXTENSION||i.kind===E.UNION_TYPE_EXTENSION||i.kind===E.ENUM_TYPE_EXTENSION||i.kind===E.INPUT_OBJECT_TYPE_EXTENSION}function OC(i){const e=Object.create(null),t=i.getSchema(),o=t?t.getDirectives():Ri;for(const l of o)e[l.name]=l.args.map(d=>d.name);const a=i.getDocument().definitions;for(const l of a)if(l.kind===E.DIRECTIVE_DEFINITION){var s;const d=(s=l.arguments)!==null&&s!==void 0?s:[];e[l.name.value]=d.map(m=>m.name.value)}return{Directive(l){const d=l.name.value,m=e[d];if(l.arguments&&m)for(const S of l.arguments){const y=S.name.value;if(!m.includes(y)){const F=vo(y,m);i.reportError(new $(`Unknown argument "${y}" on directive "@${d}".`+Ao(F),{nodes:S}))}}return!1}}}function bC(i){const e=Object.create(null),t=i.getSchema(),o=t?t.getDirectives():Ri;for(const s of o)e[s.name]=s.locations;const a=i.getDocument().definitions;for(const s of a)s.kind===E.DIRECTIVE_DEFINITION&&(e[s.name.value]=s.locations.map(l=>l.value));return{Directive(s,l,d,m,S){const y=s.name.value,F=e[y];if(!F){i.reportError(new $(`Unknown directive "@${y}".`,{nodes:s}));return}const A=DC(S);A&&!F.includes(A)&&i.reportError(new $(`Directive "@${y}" may not be used on ${A}.`,{nodes:s}))}}}function DC(i){const e=i[i.length-1];switch("kind"in e||ze(!1),e.kind){case E.OPERATION_DEFINITION:return AC(e.operation);case E.FIELD:return H.FIELD;case E.FRAGMENT_SPREAD:return H.FRAGMENT_SPREAD;case E.INLINE_FRAGMENT:return H.INLINE_FRAGMENT;case E.FRAGMENT_DEFINITION:return H.FRAGMENT_DEFINITION;case E.VARIABLE_DEFINITION:return H.VARIABLE_DEFINITION;case E.SCHEMA_DEFINITION:case E.SCHEMA_EXTENSION:return H.SCHEMA;case E.SCALAR_TYPE_DEFINITION:case E.SCALAR_TYPE_EXTENSION:return H.SCALAR;case E.OBJECT_TYPE_DEFINITION:case E.OBJECT_TYPE_EXTENSION:return H.OBJECT;case E.FIELD_DEFINITION:return H.FIELD_DEFINITION;case E.INTERFACE_TYPE_DEFINITION:case E.INTERFACE_TYPE_EXTENSION:return H.INTERFACE;case E.UNION_TYPE_DEFINITION:case E.UNION_TYPE_EXTENSION:return H.UNION;case E.ENUM_TYPE_DEFINITION:case E.ENUM_TYPE_EXTENSION:return H.ENUM;case E.ENUM_VALUE_DEFINITION:return H.ENUM_VALUE;case E.INPUT_OBJECT_TYPE_DEFINITION:case E.INPUT_OBJECT_TYPE_EXTENSION:return H.INPUT_OBJECT;case E.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||ze(!1),t.kind===E.INPUT_OBJECT_TYPE_DEFINITION?H.INPUT_FIELD_DEFINITION:H.ARGUMENT_DEFINITION}default:ze(!1,"Unexpected kind: "+j(e.kind))}}function AC(i){switch(i){case Pe.QUERY:return H.QUERY;case Pe.MUTATION:return H.MUTATION;case Pe.SUBSCRIPTION:return H.SUBSCRIPTION}}function vC(i){const e=i.getSchema(),t=e?e.getTypeMap():Object.create(null),o=Object.create(null);for(const s of i.getDocument().definitions)mr(s)&&(o[s.name.value]=!0);const a=[...Object.keys(t),...Object.keys(o)];return{NamedType(s,l,d,m,S){const y=s.name.value;if(!t[y]&&!o[y]){var F;const A=(F=S[2])!==null&&F!==void 0?F:d,B=A!=null&&NC(A);if(B&&Mp.includes(y))return;const R=vo(y,B?Mp.concat(a):a);i.reportError(new $(`Unknown type "${y}".`+Ao(R),{nodes:s}))}}}}const Mp=[...No,...wo].map(i=>i.name);function NC(i){return"kind"in i&&(CC(i)||EC(i))}function _C(i){var e,t,o;const a=i.getSchema(),s=(e=(t=(o=a==null?void 0:a.astNode)!==null&&o!==void 0?o:a==null?void 0:a.getQueryType())!==null&&t!==void 0?t:a==null?void 0:a.getMutationType())!==null&&e!==void 0?e:a==null?void 0:a.getSubscriptionType();let l=0;return{SchemaDefinition(d){if(s){i.reportError(new $("Cannot define a new schema within a schema extension.",{nodes:d}));return}l>0&&i.reportError(new $("Must provide only one schema definition.",{nodes:d})),++l}}}function wC(i){const e=i.getSchema(),t=Object.create(null);for(const a of i.getDocument().definitions)mr(a)&&(t[a.name.value]=a);return{ScalarTypeExtension:o,ObjectTypeExtension:o,InterfaceTypeExtension:o,UnionTypeExtension:o,EnumTypeExtension:o,InputObjectTypeExtension:o};function o(a){const s=a.name.value,l=t[s],d=e==null?void 0:e.getType(s);let m;if(l?m=BC[l.kind]:d&&(m=UC(d)),m){if(m!==a.kind){const S=RC(a.kind);i.reportError(new $(`Cannot extend non-${S} type "${s}".`,{nodes:l?[l,a]:a}))}}else{const S=Object.keys({...t,...e==null?void 0:e.getTypeMap()}),y=vo(s,S);i.reportError(new $(`Cannot extend type "${s}" because it is not defined.`+Ao(y),{nodes:a.name}))}}}const BC={[E.SCALAR_TYPE_DEFINITION]:E.SCALAR_TYPE_EXTENSION,[E.OBJECT_TYPE_DEFINITION]:E.OBJECT_TYPE_EXTENSION,[E.INTERFACE_TYPE_DEFINITION]:E.INTERFACE_TYPE_EXTENSION,[E.UNION_TYPE_DEFINITION]:E.UNION_TYPE_EXTENSION,[E.ENUM_TYPE_DEFINITION]:E.ENUM_TYPE_EXTENSION,[E.INPUT_OBJECT_TYPE_DEFINITION]:E.INPUT_OBJECT_TYPE_EXTENSION};function UC(i){if(Yt(i))return E.SCALAR_TYPE_EXTENSION;if(ye(i))return E.OBJECT_TYPE_EXTENSION;if(pe(i))return E.INTERFACE_TYPE_EXTENSION;if(Xe(i))return E.UNION_TYPE_EXTENSION;if(Ze(i))return E.ENUM_TYPE_EXTENSION;if(nt(i))return E.INPUT_OBJECT_TYPE_EXTENSION;ze(!1,"Unexpected type: "+j(i))}function RC(i){switch(i){case E.SCALAR_TYPE_EXTENSION:return"scalar";case E.OBJECT_TYPE_EXTENSION:return"object";case E.INTERFACE_TYPE_EXTENSION:return"interface";case E.UNION_TYPE_EXTENSION:return"union";case E.ENUM_TYPE_EXTENSION:return"enum";case E.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:ze(!1,"Unexpected kind: "+j(i))}}function xC(i){var e;const t=Object.create(null),o=i.getSchema(),a=(e=o==null?void 0:o.getDirectives())!==null&&e!==void 0?e:Ri;for(const d of a)t[d.name]=wi(d.args.filter(lC),m=>m.name);const s=i.getDocument().definitions;for(const d of s)if(d.kind===E.DIRECTIVE_DEFINITION){var l;const m=(l=d.arguments)!==null&&l!==void 0?l:[];t[d.name.value]=wi(m.filter(LC),S=>S.name.value)}return{Directive:{leave(d){const m=d.name.value,S=t[m];if(S){var y;const F=(y=d.arguments)!==null&&y!==void 0?y:[],A=new Set(F.map(B=>B.name.value));for(const[B,R]of Object.entries(S))if(!A.has(B)){const x=vu(R.type)?j(R.type):dt(R.type);i.reportError(new $(`Directive "@${m}" argument "${B}" of type "${x}" is required, but it was not provided.`,{nodes:d}))}}}}}}function LC(i){return i.type.kind===E.NON_NULL_TYPE&&i.defaultValue==null}function $t(i,e,t){if(i){if(i.kind===E.VARIABLE){const o=i.name.value;if(t==null||t[o]===void 0)return;const a=t[o];return a===null&&le(e)?void 0:a}if(le(e))return i.kind===E.NULL?void 0:$t(i,e.ofType,t);if(i.kind===E.NULL)return null;if(di(e)){const o=e.ofType;if(i.kind===E.LIST){const s=[];for(const l of i.values)if(qp(l,t)){if(le(o))return;s.push(null)}else{const d=$t(l,o,t);if(d===void 0)return;s.push(d)}return s}const a=$t(i,o,t);return a===void 0?void 0:[a]}if(nt(e)){if(i.kind!==E.OBJECT)return;const o=Object.create(null),a=wi(i.fields,s=>s.name.value);for(const s of Object.values(e.getFields())){const l=a[s.name];if(!l||qp(l.value,t)){if(s.defaultValue!==void 0)o[s.name]=s.defaultValue;else if(le(s.type))return;continue}const d=$t(l.value,s.type,t);if(d===void 0)return;o[s.name]=d}return o}if(hc(e)){let o;try{o=e.parseLiteral(i,t)}catch{return}return o===void 0?void 0:o}ze(!1,"Unexpected input type: "+j(e))}}function qp(i,e){return i.kind===E.VARIABLE&&(e==null||e[i.name.value]===void 0)}function PC(i,e,t){var o;const a={},s=(o=e.arguments)!==null&&o!==void 0?o:[],l=wi(s,d=>d.name.value);for(const d of i.args){const m=d.name,S=d.type,y=l[m];if(!y){if(d.defaultValue!==void 0)a[m]=d.defaultValue;else if(le(S))throw new $(`Argument "${m}" of required type "${j(S)}" was not provided.`,{nodes:e});continue}const F=y.value;let A=F.kind===E.NULL;if(F.kind===E.VARIABLE){const R=F.name.value;if(t==null||!kC(t,R)){if(d.defaultValue!==void 0)a[m]=d.defaultValue;else if(le(S))throw new $(`Argument "${m}" of required type "${j(S)}" was provided the variable "$${R}" which was not provided a runtime value.`,{nodes:F});continue}A=t[R]==null}if(A&&le(S))throw new $(`Argument "${m}" of non-null type "${j(S)}" must not be null.`,{nodes:F});const B=$t(F,S,t);if(B===void 0)throw new $(`Argument "${m}" has invalid value ${dt(F)}.`,{nodes:F});a[m]=B}return a}function Pc(i,e,t){var o;const a=(o=e.directives)===null||o===void 0?void 0:o.find(s=>s.name.value===i.name);if(a)return PC(i,a,t)}function kC(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function kc(i,e){const t=new Map;for(const o of i){const a=e(o),s=t.get(a);s===void 0?t.set(a,[o]):s.push(o)}return t}function MC(i){return{DirectiveDefinition(o){var a;const s=(a=o.arguments)!==null&&a!==void 0?a:[];return t(`@${o.name.value}`,s)},InterfaceTypeDefinition:e,InterfaceTypeExtension:e,ObjectTypeDefinition:e,ObjectTypeExtension:e};function e(o){var a;const s=o.name.value,l=(a=o.fields)!==null&&a!==void 0?a:[];for(const m of l){var d;const S=m.name.value,y=(d=m.arguments)!==null&&d!==void 0?d:[];t(`${s}.${S}`,y)}return!1}function t(o,a){const s=kc(a,l=>l.name.value);for(const[l,d]of s)d.length>1&&i.reportError(new $(`Argument "${o}(${l}:)" can only be defined once.`,{nodes:d.map(m=>m.name)}));return!1}}function qC(i){return{Field:e,Directive:e};function e(t){var o;const a=(o=t.arguments)!==null&&o!==void 0?o:[],s=kc(a,l=>l.name.value);for(const[l,d]of s)d.length>1&&i.reportError(new $(`There can be only one argument named "${l}".`,{nodes:d.map(m=>m.name)}))}}function JC(i){const e=Object.create(null),t=i.getSchema();return{DirectiveDefinition(o){const a=o.name.value;if(t!=null&&t.getDirective(a)){i.reportError(new $(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:o.name}));return}return e[a]?i.reportError(new $(`There can be only one directive named "@${a}".`,{nodes:[e[a],o.name]})):e[a]=o.name,!1}}}function GC(i){const e=Object.create(null),t=i.getSchema(),o=t?t.getDirectives():Ri;for(const d of o)e[d.name]=!d.isRepeatable;const a=i.getDocument().definitions;for(const d of a)d.kind===E.DIRECTIVE_DEFINITION&&(e[d.name.value]=!d.repeatable);const s=Object.create(null),l=Object.create(null);return{enter(d){if(!("directives"in d)||!d.directives)return;let m;if(d.kind===E.SCHEMA_DEFINITION||d.kind===E.SCHEMA_EXTENSION)m=s;else if(mr(d)||wu(d)){const S=d.name.value;m=l[S],m===void 0&&(l[S]=m=Object.create(null))}else m=Object.create(null);for(const S of d.directives){const y=S.name.value;e[y]&&(m[y]?i.reportError(new $(`The directive "@${y}" can only be used once at this location.`,{nodes:[m[y],S]})):m[y]=S)}}}}function VC(i){const e=i.getSchema(),t=e?e.getTypeMap():Object.create(null),o=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(s){var l;const d=s.name.value;o[d]||(o[d]=Object.create(null));const m=(l=s.values)!==null&&l!==void 0?l:[],S=o[d];for(const y of m){const F=y.name.value,A=t[d];Ze(A)&&A.getValue(F)?i.reportError(new $(`Enum value "${d}.${F}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):S[F]?i.reportError(new $(`Enum value "${d}.${F}" can only be defined once.`,{nodes:[S[F],y.name]})):S[F]=y.name}return!1}}function $C(i){const e=i.getSchema(),t=e?e.getTypeMap():Object.create(null),o=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(s){var l;const d=s.name.value;o[d]||(o[d]=Object.create(null));const m=(l=s.fields)!==null&&l!==void 0?l:[],S=o[d];for(const y of m){const F=y.name.value;WC(t[d],F)?i.reportError(new $(`Field "${d}.${F}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):S[F]?i.reportError(new $(`Field "${d}.${F}" can only be defined once.`,{nodes:[S[F],y.name]})):S[F]=y.name}return!1}}function WC(i,e){return ye(i)||pe(i)||nt(i)?i.getFields()[e]!=null:!1}function jC(i){const e=[];let t=Object.create(null);return{ObjectValue:{enter(){e.push(t),t=Object.create(null)},leave(){const o=e.pop();o||ze(!1),t=o}},ObjectField(o){const a=o.name.value;t[a]?i.reportError(new $(`There can be only one input field named "${a}".`,{nodes:[t[a],o.name]})):t[a]=o.name}}}function HC(i){const e=i.getSchema(),t=Object.create(null),o=e?{query:e.getQueryType(),mutation:e.getMutationType(),subscription:e.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(s){var l;const d=(l=s.operationTypes)!==null&&l!==void 0?l:[];for(const m of d){const S=m.operation,y=t[S];o[S]?i.reportError(new $(`Type for ${S} already defined in the schema. It cannot be redefined.`,{nodes:m})):y?i.reportError(new $(`There can be only one ${S} type in schema.`,{nodes:[y,m]})):t[S]=m}return!1}}function QC(i){const e=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:o,ObjectTypeDefinition:o,InterfaceTypeDefinition:o,UnionTypeDefinition:o,EnumTypeDefinition:o,InputObjectTypeDefinition:o};function o(a){const s=a.name.value;if(t!=null&&t.getType(s)){i.reportError(new $(`Type "${s}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return e[s]?i.reportError(new $(`There can be only one type named "${s}".`,{nodes:[e[s],a.name]})):e[s]=a.name,!1}}const YC=Object.freeze([_C,HC,QC,VC,$C,MC,JC,vC,bC,GC,wC,OC,qC,jC,xC]);class KC{constructor(e,t){this._ast=e,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(e){this._onError(e)}getDocument(){return this._ast}getFragment(e){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const o of this.getDocument().definitions)o.kind===E.FRAGMENT_DEFINITION&&(t[o.name.value]=o);this._fragments=t}return t[e]}getFragmentSpreads(e){let t=this._fragmentSpreads.get(e);if(!t){t=[];const o=[e];let a;for(;a=o.pop();)for(const s of a.selections)s.kind===E.FRAGMENT_SPREAD?t.push(s):s.selectionSet&&o.push(s.selectionSet);this._fragmentSpreads.set(e,t)}return t}getRecursivelyReferencedFragments(e){let t=this._recursivelyReferencedFragments.get(e);if(!t){t=[];const o=Object.create(null),a=[e.selectionSet];let s;for(;s=a.pop();)for(const l of this.getFragmentSpreads(s)){const d=l.name.value;if(o[d]!==!0){o[d]=!0;const m=this.getFragment(d);m&&(t.push(m),a.push(m.selectionSet))}}this._recursivelyReferencedFragments.set(e,t)}return t}}class zC extends KC{constructor(e,t,o){super(e,o),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function XC(i,e,t=YC){const o=[],a=new zC(i,e,l=>{o.push(l)}),s=t.map(l=>l(a));return fc(i,nC(s)),o}function ZC(i){const e=XC(i);if(e.length!==0)throw new Error(e.map(t=>t.message).join(`

`))}function nE(i,e){wt(i)&&wt(i.__schema)||mn(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${j(i)}.`);const t=i.__schema,o=ui(t.types,w=>w.name,w=>A(w));for(const w of[...No,...wo])o[w.name]&&(o[w.name]=w);const a=t.queryType?y(t.queryType):null,s=t.mutationType?y(t.mutationType):null,l=t.subscriptionType?y(t.subscriptionType):null,d=t.directives?t.directives.map(ft):[];return new Lc({description:t.description,query:a,mutation:s,subscription:l,types:Object.values(o),directives:d,assumeValid:e==null?void 0:e.assumeValid});function m(w){if(w.kind===bn.LIST){const Z=w.ofType;if(!Z)throw new Error("Decorated type deeper than introspection query.");return new Se(m(Z))}if(w.kind===bn.NON_NULL){const Z=w.ofType;if(!Z)throw new Error("Decorated type deeper than introspection query.");const oe=m(Z);return new sn(uC(oe))}return S(w)}function S(w){const Z=w.name;if(!Z)throw new Error(`Unknown type reference: ${j(w)}.`);const oe=o[Z];if(!oe)throw new Error(`Invalid or incomplete schema, unknown type: ${Z}. Ensure that a full introspection query is used in order to build a client schema.`);return oe}function y(w){return rC(S(w))}function F(w){return oC(S(w))}function A(w){if(w!=null&&w.name!=null&&w.kind!=null)switch(w.kind){case bn.SCALAR:return B(w);case bn.OBJECT:return x(w);case bn.INTERFACE:return z(w);case bn.UNION:return fn(w);case bn.ENUM:return Vn(w);case bn.INPUT_OBJECT:return Dn(w)}const Z=j(w);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Z}.`)}function B(w){return new Bt({name:w.name,description:w.description,specifiedByURL:w.specifiedByURL})}function R(w){if(w.interfaces===null&&w.kind===bn.INTERFACE)return[];if(!w.interfaces){const Z=j(w);throw new Error(`Introspection result missing interfaces: ${Z}.`)}return w.interfaces.map(F)}function x(w){return new mt({name:w.name,description:w.description,interfaces:()=>R(w),fields:()=>wn(w)})}function z(w){return new ho({name:w.name,description:w.description,interfaces:()=>R(w),fields:()=>wn(w)})}function fn(w){if(!w.possibleTypes){const Z=j(w);throw new Error(`Introspection result missing possibleTypes: ${Z}.`)}return new To({name:w.name,description:w.description,types:()=>w.possibleTypes.map(y)})}function Vn(w){if(!w.enumValues){const Z=j(w);throw new Error(`Introspection result missing enumValues: ${Z}.`)}return new Bi({name:w.name,description:w.description,values:ui(w.enumValues,Z=>Z.name,Z=>({description:Z.description,deprecationReason:Z.deprecationReason}))})}function Dn(w){if(!w.inputFields){const Z=j(w);throw new Error(`Introspection result missing inputFields: ${Z}.`)}return new Fo({name:w.name,description:w.description,fields:()=>re(w.inputFields)})}function wn(w){if(!w.fields)throw new Error(`Introspection result missing fields: ${j(w)}.`);return ui(w.fields,Z=>Z.name,xn)}function xn(w){const Z=m(w.type);if(!yc(Z)){const oe=j(Z);throw new Error(`Introspection must provide output type for fields, but received: ${oe}.`)}if(!w.args){const oe=j(w);throw new Error(`Introspection result missing field args: ${oe}.`)}return{description:w.description,deprecationReason:w.deprecationReason,type:Z,args:re(w.args)}}function re(w){return ui(w,Z=>Z.name,Zn)}function Zn(w){const Z=m(w.type);if(!Sc(Z)){const Ut=j(Z);throw new Error(`Introspection must provide input type for arguments, but received: ${Ut}.`)}const oe=w.defaultValue!=null?$t(WF(w.defaultValue),Z):void 0;return{description:w.description,type:Z,defaultValue:oe,deprecationReason:w.deprecationReason}}function ft(w){if(!w.args){const Z=j(w);throw new Error(`Introspection result missing directive args: ${Z}.`)}if(!w.locations){const Z=j(w);throw new Error(`Introspection result missing directive locations: ${Z}.`)}return new Qt({name:w.name,description:w.description,isRepeatable:w.isRepeatable,locations:w.locations.slice(),args:re(w.args)})}}function eE(i,e,t){var o,a,s,l;const d=[],m=Object.create(null),S=[];let y;const F=[];for(const D of e.definitions)if(D.kind===E.SCHEMA_DEFINITION)y=D;else if(D.kind===E.SCHEMA_EXTENSION)F.push(D);else if(mr(D))d.push(D);else if(wu(D)){const J=D.name.value,P=m[J];m[J]=P?P.concat([D]):[D]}else D.kind===E.DIRECTIVE_DEFINITION&&S.push(D);if(Object.keys(m).length===0&&d.length===0&&S.length===0&&F.length===0&&y==null)return i;const A=Object.create(null);for(const D of i.types)A[D.name]=Vn(D);for(const D of d){var B;const J=D.name.value;A[J]=(B=Jp[J])!==null&&B!==void 0?B:Ae(D)}const R={query:i.query&&z(i.query),mutation:i.mutation&&z(i.mutation),subscription:i.subscription&&z(i.subscription),...y&&oe([y]),...oe(F)};return{description:(o=y)===null||o===void 0||(a=o.description)===null||a===void 0?void 0:a.value,...R,types:Object.values(A),directives:[...i.directives.map(fn),...S.map(gr)],extensions:Object.create(null),astNode:(s=y)!==null&&s!==void 0?s:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(F),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function x(D){return di(D)?new Se(x(D.ofType)):le(D)?new sn(x(D.ofType)):z(D)}function z(D){return A[D.name]}function fn(D){const J=D.toConfig();return new Qt({...J,args:Dt(J.args,Z)})}function Vn(D){if(FC(D)||fC(D))return D;if(Yt(D))return xn(D);if(ye(D))return re(D);if(pe(D))return Zn(D);if(Xe(D))return ft(D);if(Ze(D))return wn(D);if(nt(D))return Dn(D);ze(!1,"Unexpected type: "+j(D))}function Dn(D){var J;const P=D.toConfig(),M=(J=m[P.name])!==null&&J!==void 0?J:[];return new Fo({...P,fields:()=>({...Dt(P.fields,In=>({...In,type:x(In.type)})),...at(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function wn(D){var J;const P=D.toConfig(),M=(J=m[D.name])!==null&&J!==void 0?J:[];return new Bi({...P,values:{...P.values,...qe(M)},extensionASTNodes:P.extensionASTNodes.concat(M)})}function xn(D){var J;const P=D.toConfig(),M=(J=m[P.name])!==null&&J!==void 0?J:[];let In=P.specifiedByURL;for(const Sn of M){var Mn;In=(Mn=Gp(Sn))!==null&&Mn!==void 0?Mn:In}return new Bt({...P,specifiedByURL:In,extensionASTNodes:P.extensionASTNodes.concat(M)})}function re(D){var J;const P=D.toConfig(),M=(J=m[P.name])!==null&&J!==void 0?J:[];return new mt({...P,interfaces:()=>[...D.getInterfaces().map(z),...gi(M)],fields:()=>({...Dt(P.fields,w),...mi(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function Zn(D){var J;const P=D.toConfig(),M=(J=m[P.name])!==null&&J!==void 0?J:[];return new ho({...P,interfaces:()=>[...D.getInterfaces().map(z),...gi(M)],fields:()=>({...Dt(P.fields,w),...mi(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function ft(D){var J;const P=D.toConfig(),M=(J=m[P.name])!==null&&J!==void 0?J:[];return new To({...P,types:()=>[...D.getTypes().map(z),...zt(M)],extensionASTNodes:P.extensionASTNodes.concat(M)})}function w(D){return{...D,type:x(D.type),args:D.args&&Dt(D.args,Z)}}function Z(D){return{...D,type:x(D.type)}}function oe(D){const J={};for(const M of D){var P;const In=(P=M.operationTypes)!==null&&P!==void 0?P:[];for(const Mn of In)J[Mn.operation]=Ut(Mn.type)}return J}function Ut(D){var J;const P=D.name.value,M=(J=Jp[P])!==null&&J!==void 0?J:A[P];if(M===void 0)throw new Error(`Unknown type: "${P}".`);return M}function Kt(D){return D.kind===E.LIST_TYPE?new Se(Kt(D.type)):D.kind===E.NON_NULL_TYPE?new sn(Kt(D.type)):Ut(D)}function gr(D){var J;return new Qt({name:D.name.value,description:(J=D.description)===null||J===void 0?void 0:J.value,locations:D.locations.map(({value:P})=>P),isRepeatable:D.repeatable,args:fr(D.arguments),astNode:D})}function mi(D){const J=Object.create(null);for(const In of D){var P;const Mn=(P=In.fields)!==null&&P!==void 0?P:[];for(const Sn of Mn){var M;J[Sn.name.value]={type:Kt(Sn.type),description:(M=Sn.description)===null||M===void 0?void 0:M.value,args:fr(Sn.arguments),deprecationReason:co(Sn),astNode:Sn}}}return J}function fr(D){const J=D??[],P=Object.create(null);for(const In of J){var M;const Mn=Kt(In.type);P[In.name.value]={type:Mn,description:(M=In.description)===null||M===void 0?void 0:M.value,defaultValue:$t(In.defaultValue,Mn),deprecationReason:co(In),astNode:In}}return P}function at(D){const J=Object.create(null);for(const In of D){var P;const Mn=(P=In.fields)!==null&&P!==void 0?P:[];for(const Sn of Mn){var M;const ve=Kt(Sn.type);J[Sn.name.value]={type:ve,description:(M=Sn.description)===null||M===void 0?void 0:M.value,defaultValue:$t(Sn.defaultValue,ve),deprecationReason:co(Sn),astNode:Sn}}}return J}function qe(D){const J=Object.create(null);for(const In of D){var P;const Mn=(P=In.values)!==null&&P!==void 0?P:[];for(const Sn of Mn){var M;J[Sn.name.value]={description:(M=Sn.description)===null||M===void 0?void 0:M.value,deprecationReason:co(Sn),astNode:Sn}}}return J}function gi(D){return D.flatMap(J=>{var P,M;return(P=(M=J.interfaces)===null||M===void 0?void 0:M.map(Ut))!==null&&P!==void 0?P:[]})}function zt(D){return D.flatMap(J=>{var P,M;return(P=(M=J.types)===null||M===void 0?void 0:M.map(Ut))!==null&&P!==void 0?P:[]})}function Ae(D){var J;const P=D.name.value,M=(J=m[P])!==null&&J!==void 0?J:[];switch(D.kind){case E.OBJECT_TYPE_DEFINITION:{var In;const ne=[D,...M];return new mt({name:P,description:(In=D.description)===null||In===void 0?void 0:In.value,interfaces:()=>gi(ne),fields:()=>mi(ne),astNode:D,extensionASTNodes:M})}case E.INTERFACE_TYPE_DEFINITION:{var Mn;const ne=[D,...M];return new ho({name:P,description:(Mn=D.description)===null||Mn===void 0?void 0:Mn.value,interfaces:()=>gi(ne),fields:()=>mi(ne),astNode:D,extensionASTNodes:M})}case E.ENUM_TYPE_DEFINITION:{var Sn;const ne=[D,...M];return new Bi({name:P,description:(Sn=D.description)===null||Sn===void 0?void 0:Sn.value,values:qe(ne),astNode:D,extensionASTNodes:M})}case E.UNION_TYPE_DEFINITION:{var ve;const ne=[D,...M];return new To({name:P,description:(ve=D.description)===null||ve===void 0?void 0:ve.value,types:()=>zt(ne),astNode:D,extensionASTNodes:M})}case E.SCALAR_TYPE_DEFINITION:{var xi;return new Bt({name:P,description:(xi=D.description)===null||xi===void 0?void 0:xi.value,specifiedByURL:Gp(D),astNode:D,extensionASTNodes:M})}case E.INPUT_OBJECT_TYPE_DEFINITION:{var Rt;const ne=[D,...M];return new Fo({name:P,description:(Rt=D.description)===null||Rt===void 0?void 0:Rt.value,fields:()=>at(ne),astNode:D,extensionASTNodes:M})}}}}const Jp=wi([...No,...wo],i=>i.name);function co(i){const e=Pc(Nc,i);return e==null?void 0:e.reason}function Gp(i){const e=Pc(_c,i);return e==null?void 0:e.url}function tE(i,e){i!=null&&i.kind===E.DOCUMENT||mn(!1,"Must provide valid Document AST."),(e==null?void 0:e.assumeValid)!==!0&&(e==null?void 0:e.assumeValidSDL)!==!0&&ZC(i);const o=eE({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,e);if(o.astNode==null)for(const s of o.types)switch(s.name){case"Query":o.query=s;break;case"Mutation":o.mutation=s;break;case"Subscription":o.subscription=s;break}const a=[...o.directives,...Ri.filter(s=>o.directives.every(l=>l.name!==s.name))];return new Lc({...o,directives:a})}function iE(i,e){const t=$F(i,{noLocation:e==null?void 0:e.noLocation,allowLegacyFragmentVariables:e==null?void 0:e.allowLegacyFragmentVariables});return tE(t,{assumeValidSDL:e==null?void 0:e.assumeValidSDL,assumeValid:e==null?void 0:e.assumeValid})}const Vp=`
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
  allAccountStats(startutc: DateTime, endUtc: DateTime, where: AccountOverallStatsFilterInput, order: [AccountOverallStatsSortInput!]): [AccountOverallStats!]
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
  contactCount(input: GetContactCountInput!): Int
  rSSFeed(url: String!): RSSFeed
  allCampaignCombinationStats(id: String!): [CampaignCombinationStats!]
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
  transactionGroupNames(
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
    where: StringOperationFilterInput
  ): StringConnection
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
  changeAccountPlan(newPlanId: String!, allowOverages: Boolean!, allowAutoScaling: Boolean!, itemCount: Int!, couponCode: String): ChgPlanResult
  """Calculate the prorated cost to upgrade a current plan to a new plan."""
  costEstimator(newPlanId: String!, allowOverages: Boolean!, itemCount: Int!, couponCode: String): Estimate
  """
  Cancel a previous requested plan downgrade at the next billing cycle. This can be done at any time before the next billing cycle.
  """
  cancelAccountPlanDowngrade(planType: PlanType!): Boolean
  """Cancel account plan"""
  cancelAccountPlan(planType: PlanType!, reason: String, feedback: String, rating: Int): Boolean
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
  """Indicates if multi-factor authentication is enabled"""
  mfaEnabled: Boolean!
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits. This is only set when getting users within an account.
  """
  isPartner: Boolean!
  """
  Indicates whether the user is a billing user for the account and should recieve billing communication.
  """
  isBillingContact: Boolean!
  """Indicates whether the user should recieve account level communication."""
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


type Transaction {
  replyTo: String!
  from: String!
  recipient: String!
  tags: [String!]!
  id: String!
  subscriberId: String
  parentId: String
  requestId: String!
  groupName: String
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
  fromName: String
  recipientName: String
  recipientType: RecipientType!
  bccRecipients: [String]
  ccRecipients: [String]
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
  createdBy: String
  createdUtc: DateTime!
  modifiedBy: String
  modifiedUtc: DateTime!
  metadata: [TransactionMetadata]
  customHeaders: [TransactionHeader]
  links: [TransactionLink]
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
  CONVERSATION_SENT
  CONVERSATION_RECEIVED
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
  CONVERSATION_RESPONSE_RECIEVED
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
  CONTACT_CONVERSATION_REPLY
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
  """Indicates if multi-factor authentication is enabled"""
  mfaEnabled: SortEnumType
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits. This is only set when getting users within an account.
  """
  isPartner: SortEnumType
  """
  Indicates whether the user is a billing user for the account and should recieve billing communication.
  """
  isBillingContact: SortEnumType
  """Indicates whether the user should recieve account level communication."""
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
  planType: PlanTypeOperationFilterInput
  tvafs: ListFilterInputTypeOfAccountPlanFeatureVMFilterInput
  """Current plan informaiton."""
  currentPlan: AccountPlanInfoFilterInput
  """Next plan infomration if a plan change is scheduled."""
  nextPlan: AccountPlanInfoFilterInput
}


"""
Account plan for a specific service type. Only one active plan per service type is allowed.
"""
input AccountPlanSortInput {
  """Plan type"""
  planType: SortEnumType
  """Current plan informaiton."""
  currentPlan: AccountPlanInfoSortInput
  """Next plan infomration if a plan change is scheduled."""
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
  """Plan type"""
  planType: PlanTypeOperationFilterInput
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
}


"""Account level stats by plan type."""
input AccountOverallStatsSortInput {
  """Plan type"""
  planType: SortEnumType
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
  id: ComparableInt64OperationFilterInput
  subscriberId: ComparableNullableOfInt64OperationFilterInput
  parentId: ComparableNullableOfInt64OperationFilterInput
  requestId: ComparableInt64OperationFilterInput
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
  replyTo: EmailFilterInput
  fromName: StringOperationFilterInput
  from: EmailFilterInput
  recipientName: StringOperationFilterInput
  recipient: EmailFilterInput
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
  tags: ListFilterInputTypeOfTransactionTagFilterInput
  metadata: ListFilterInputTypeOfTransactionMetadataFilterInput
  customHeaders: ListFilterInputTypeOfTransactionHeaderFilterInput
  links: ListFilterInputTypeOfTransactionLinkFilterInput
}


input TransactionSortInput {
  id: SortEnumType
  subscriberId: SortEnumType
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
  replyTo: EmailSortInput
  fromName: SortEnumType
  from: EmailSortInput
  recipientName: SortEnumType
  recipient: EmailSortInput
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
type StringConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  """A list of edges."""
  edges: [StringEdge!]
  """A flattened list of the nodes."""
  nodes: [String!]
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
  planType: PlanTypeOperationFilterInput
  name: StringOperationFilterInput
  description: StringOperationFilterInput
  tiers: ListFilterInputTypeOfItemTierViewModelFilterInput
  features: ListFilterInputTypeOfItemFeatureViewModelFilterInput
  isTrial: BooleanOperationFilterInput
  rank: ComparableInt32OperationFilterInput
  period: ComparableInt32OperationFilterInput
  periodUnit: StringOperationFilterInput
}


input ItemSortInput {
  id: SortEnumType
  """Plan type"""
  planType: SortEnumType
  name: SortEnumType
  description: SortEnumType
  isTrial: SortEnumType
  rank: SortEnumType
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
  planChange: NullableOfPlanChangeTypeOperationFilterInput
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
  planChange: SortEnumType
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
  planType: PlanType!
  tvafs: [tvaf!]!
  """Current plan informaiton."""
  currentPlan: AccountPlanInfo!
  """Next plan infomration if a plan change is scheduled."""
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
  groups: [AudienceGroupInfo!]
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


input ListFilterInputTypeOfTransactionTagFilterInput {
  all: TransactionTagFilterInput
  none: TransactionTagFilterInput
  some: TransactionTagFilterInput
  any: Boolean
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


"""An edge in a connection."""
type StringEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: String!
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
  groups: ListFilterInputTypeOfAudienceGroupInfoViewModelFilterInput
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


type Item {
  id: String!
  """Plan type"""
  planType: PlanType!
  name: String!
  description: String!
  tiers: [ItemTier!]!
  features: [ItemFeature!]!
  isTrial: Boolean!
  rank: Int!
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
  startUtc: ComparableNullableOfDateTimeOperationFilterInput
  endUtc: ComparableNullableOfDateTimeOperationFilterInput
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
  startUtc: SortEnumType
  endUtc: SortEnumType
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


input TransactionTagFilterInput {
  and: [TransactionTagFilterInput!]
  or: [TransactionTagFilterInput!]
  tagHash: ListComparableByteOperationFilterInput
  tag: OldTagFilterInput
  transactionId: ComparableInt64OperationFilterInput
  transaction: TransactionFilterInput
  accountId: ComparableInt64OperationFilterInput
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
  """Quantity of add-ons."""
  quantity: ComparableInt32OperationFilterInput
  """Cost per unit of add-on."""
  unitPrice: ComparableDoubleOperationFilterInput
  """Total cost of add-on."""
  amount: ComparableDoubleOperationFilterInput
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


input OldTagFilterInput {
  and: [OldTagFilterInput!]
  or: [OldTagFilterInput!]
  tagName: StringOperationFilterInput
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
  """Allow overages for the account's transaction plan."""
  transactionAllowOverages: BooleanOperationFilterInput
  """Allow auto scaling for the account's transaction plan."""
  transactionAllowAutoScaling: BooleanOperationFilterInput
  """Account's transaction max limit based on last usage report."""
  transactionMaxLimit: ComparableInt32OperationFilterInput
  """Transaction plan current billing period start date."""
  transactionStartUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Transaction plan current billing period end date."""
  transactionEndUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Transaction plan is annual"""
  transactionIsAnnual: BooleanOperationFilterInput
  """Transaction plan is trial"""
  transactionIsTrial: BooleanOperationFilterInput
  transactionDgScheduled: BooleanOperationFilterInput
  transactionDgSuccessful: BooleanOperationFilterInput
  transactionDgEligibilityStatus: BooleanOperationFilterInput
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


input UpdateFlowWaitUntilInput {
  date: String
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
  """*Max length: 255*"""
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
  """*Max length: 255*"""
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
  contentVariationId: String!
  contentBodies: [UpdateContentVariationContentInput!]!
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
  Campaign can be archived if it is not currently in the send process. Can be archeived if send status is NOT_SCHEDULED, STOPPED, COMPLETED, SYSTEM_STOPPED, or READY_TO_SEND.
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
  If send time count is greater than one, all other variaation counts (subjects, froms, and content) need to be set to 1.
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
  fromName: String
  contactId: String
  audienceId: String
  mockContact: MockContactInput
}


type CampaignPreview {
  subject: String
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
  """*Max length: 50*"""
  tags: [String!]
  enableAutoRetry: Boolean
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
  securityRoleIds: [String!]!
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


"""Service plan credit blocks available for purchase"""
type ServicePlanCredit {
  """Unique credit block ID"""
  id: String!
  """Number of credits in block"""
  qty: Float!
  """Fee to purchase block of credits"""
  fee: Float!
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
  selector: String
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
  """*Max length: 255*"""
  selector: String
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
  addOns: [EstAddOn!]!
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
  TRANSACTION
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
  phone: String!
  """URL of the business website. *Max length: 255*"""
  website: String
  facts: String
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
  planChange: PlanChangeType
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
  hourOffset: Int!
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
  hourOffset: Int!
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


input GetLandingPageStatsInput {
  campaignId: String
  id: String!
  startUtc: DateTime
  endUtc: DateTime
  includeDetails: Boolean
}


input GetLandingPageActionStatsInput {
  campaignId: String
  id: String!
  startUtc: DateTime!
  endUtc: DateTime!
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
  includeDetails: Boolean
}


input GetSurveyActionStatsInput {
  campaignId: String
  id: String!
  startUtc: DateTime!
  endUtc: DateTime!
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


input GetContactCountInput {
  audienceId: String!
  audienceFilters: [AudienceFitlerInput!]!
}


type CampaignLink {
  id: String!
  url: String!
  track: Boolean!
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
  """Plan type"""
  planType: PlanType!
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


"""
The \`Byte\` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255.
"""
scalar Byte


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
  startUtc: DateTime
  endUtc: DateTime
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
}


enum CustomReportJobStatus {
  SUCCESSFUL
  ERROR
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
  startUtc: DateTime
  endUtc: DateTime
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


input AudienceFitlerInput {
  groupId: String
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
  """Quantity of add-ons."""
  quantity: Int!
  """Cost per unit of add-on."""
  unitPrice: Float!
  """Total cost of add-on."""
  amount: Float!
}


type DowngradeResultError {
  """Error description"""
  error: String!
  """Feature name"""
  featureName: String!
  """Feature id"""
  featureId: String!
}


"""Add-on detail"""
type EstAddOn {
  """Unique add-on id"""
  id: String!
  """Name of add-on"""
  name: String!
  """Cost per unit of add-on."""
  unitPrice: Float!
  """Quantity of add-ons."""
  quantity: Int!
  """Total cost of add-on after discounts are applied."""
  amount: Float!
  """Discount applied to add-on costs."""
  discountAmount: Float!
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
  Simplified email address property used to specify the reply email address of the email. This is ignored when reply tracking is enabled. Max length: 320 characters
  """
  sendRepliesTo: String
  """
  Simplified email address property used to specify the BCC email address of the email. This can also be specified in the Recipients collection. Max length: 320 characters
  """
  sendBccTo: String
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
  """
  Indicated that a 'View online' link is included in the content. The link is present, this must be enabled to ensure the system can generated the browser-based version of the email.
  """
  enableViewOnline: Boolean
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


input UpdateContentVariationContentInput {
  mimeType: MimeType!
  content: String!
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
  """Allow overages for the account's transaction plan."""
  transactionAllowOverages: Boolean!
  """Allow auto scaling for the account's transaction plan."""
  transactionAllowAutoScaling: Boolean!
  """Account's transaction max limit based on last usage report."""
  transactionMaxLimit: Int!
  """Transaction plan current billing period start date."""
  transactionStartUtc: DateTime
  """Transaction plan current billing period end date."""
  transactionEndUtc: DateTime
  """Transaction plan is annual"""
  transactionIsAnnual: Boolean
  """Transaction plan is trial"""
  transactionIsTrial: Boolean!
  transactionDgScheduled: Boolean
  transactionDgSuccessful: Boolean
  transactionDgEligibilityStatus: Boolean
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
`;class rE{constructor(e){Fn(this,"mapping");this.mapping=e}getFor(e){return this.mapping.get(e.name)}}var ur;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(ur||(ur={}));function oE(i){const e=new Map;return aE(i,t=>{ye(t)&&uE(t,o=>{const a=Iu(o.type);uu(e,a).references.push({kind:ur.FIELD,parent:t,by:o}),sE(o,l=>{const d=Iu(l.type);uu(e,d).references.push({kind:ur.ARGUMENT,field:o,type:t,by:l})})}),Xe(t)&&t.getTypes().forEach(o=>{uu(e,o).references.push({kind:ur.UNION,by:t})})}),new rE(e)}function aE(i,e){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||e(t)})}function uE(i,e){Object.entries(i.getFields()).forEach(([,t])=>{e(t)})}function sE(i,e){Object.entries(i.args).forEach(([,t])=>{e(t)})}function uu(i,e){let t=i.get(e.name);return t||(t={references:[]},i.set(e.name,t)),t}function Iu(i){return le(i)||di(i)?Iu(i.ofType):i}const ce=FE(),Su=Du(bu.DIRECTIVES,[]);var Wp;const lE=Bo((Wp=ce.getQueryType())==null?void 0:Wp.getFields());var jp;const pE=Bo((jp=ce.getMutationType())==null?void 0:jp.getFields());var Hp;const cE=Bo((Hp=ce.getSubscriptionType())==null?void 0:Hp.getFields()),Bu=_t.keyBy(qc(),i=>i.name.toLocaleLowerCase()),dE=_t.mapValues(Bu,i=>{const e=Su.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return e?e.args.some(t=>t==="*")?i.args:e.args.map(t=>i.args.find(o=>o.name===t)).filter(t=>!!t):[]}),mE=Bo(ce.getTypeMap()),gE=oE(ce);function Bo(i){return _t.mapKeys(i||{},(e,t)=>t.toLocaleLowerCase())}function fE(){return _t.size(ce.getTypeMap())<=10}function IE(){return[su("Queries",ce.getQueryType()),su("Mutations",ce.getMutationType()),su("Subscriptions",ce.getSubscriptionType()),CE(),hE()].filter(i=>!!i)}function su(i,e){return yE(i,SE(e))}function SE(i){return _t.sortBy((i==null?void 0:i.getFields())||{},e=>e.name)}function yE(i,e){return e.length===0?null:{type:"menu",title:i,children:e.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:cr.joinUrlPaths(Eo,i.toLocaleLowerCase(),t.name)}))}}function hE(){return fE()?null:{type:"menu",title:"Types",children:_t.sortBy(_t.map(ce.getTypeMap()),e=>e.name).filter(e=>!e.name.startsWith("__")).map(e=>({type:"page",title:e.name,section:"Types",href:cr.joinUrlPaths(Eo,"types",e.name)}))}}function PE(){return!!ce.getQueryType()}function kE(i){return lE[i.toLocaleLowerCase()]}function ME(){return!!ce.getMutationType()}function qE(i){return pE[i.toLocaleLowerCase()]}function JE(){return!!ce.getSubscriptionType()}function GE(i){return cE[i.toLocaleLowerCase()]}function VE(i){return mE[i.toLocaleLowerCase()]}function TE(i){return Bu[i.toLocaleLowerCase()]}function $E(i){return TE(i.name)!==void 0}function WE(){return _t.size(Bu)>0}function jE(i){return dE[i.name.toLocaleLowerCase()]||[]}function HE(i){if(i)return gE.getFor(i)}function QE(i){return _t.flatMap(i.getFields(),e=>({field:e,possibleDescriptions:Mc(e,i)}))}function Mc(i,e){return i?i.description?[{description:i.description,from:e}]:ye(e)?e.getInterfaces().flatMap(t=>Mc(t.getFields()[i.name],t)):[]:[]}function qc(){return Su.some(i=>(i==null?void 0:i.name)==="*")?ce.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):Su.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?ce.getDirective(i):void 0).filter(i=>!!i)}function FE(){return Vp.trim().length===0?nE(JSON.parse(JSON.stringify({__schema:{types:[]}}))):iE(Vp)}function CE(){const i=qc();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(e=>({type:"page",title:e.name,href:cr.joinUrlPaths(Eo,"directives",e.name),section:"Directives"}))}}const YE=Du(bu.APP_TITLE,"GraphQL Documentation"),Jc=OE().concat(IE());DE(Jc);const EE=Object.freeze(Jc),KE=bE();function OE(){return Du(bu.PAGES,vE()).filter(e=>!!e).map(e=>Vc([],e))}function bE(){const i=AE();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function DE(i){function e(o,a){for(const s of o){if(s.type==="page"){a(s);continue}s.type==="menu"&&e(s.children,a)}}let t;e(i,o=>{t&&(t.next={title:o.title,section:o.section,href:o.href},o.previous={title:t.title,section:t.section,href:t.href}),t=o})}function AE(){return Gc(()=>!0)}function zE(i){return Gc(e=>e.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function Gc(i){function e(t){for(const o of t){if(o.type==="page"&&i(o))return o;if(o.type==="menu"){const a=e(o.children);if(a)return a}}return null}return e(EE)}function Vc(i,e){if(typeof e.content=="string")return{type:"page",title:e.title,content:e.content,href:cr.joinUrlPaths(Eo,...i,$p(e.title))};const t=i.concat([$p(e.title)]);return{type:"menu",title:e.title,children:e.content.map(o=>({...Vc(t,o),section:e.title}))}}function $p(i){return cr.generatePathSegment(i,new tc)}function vE(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{PE as A,tc as B,kE as C,JE as D,GE as E,sC as F,le as G,di as H,Tc as I,hc as J,VE as K,HE as L,QE as M,$E as N,E as O,LE as P,Oo as Q,ur as R,zp as S,RE as T,tr as U,uF as V,_t as _,UE as a,Du as b,Ye as c,ye as d,pt as e,pe as f,Yp as g,Yt as h,Ze as i,Xe as j,nt as k,fE as l,Cn as m,YE as n,xE as o,EE as p,KE as q,zE as r,ce as s,bu as t,cr as u,WE as v,TE as w,jE as x,ME as y,qE as z};
