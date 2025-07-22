var TT=Object.defineProperty;var FT=(i,e,t)=>e in i?TT(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var yn=(i,e,t)=>FT(i,typeof e!="symbol"?e+"":e,t);import{s as wn,d as K,c as Cn,q as ae,I as Pp,n as te,b as Ps,l as ks,t as xs,a2 as Sr,D as et,v as Oc,E as tt,F as it,G as rt,ae as Ao,j as _n,k as Wn,o as Bn,f as Se,e as vt,g as Ls,m as Ms,ah as CT,ai as ET,ak as kp,K as OT}from"./scheduler.BRkQt4do.js";import{S as xn,i as Ln,t as sn,a as nn,g as At,e as Nt,d as jt,b as Ht,m as Qt,c as gi}from"./index.BzjUemo1.js";import{b as bT}from"./control.CAhGI6Lz.js";function pt(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function bc(i,e){const t={},o={},a={$$scope:1};let s=i.length;for(;s--;){const l=i[s],c=e[s];if(c){for(const d in l)d in c||(o[d]=1);for(const d in c)a[d]||(t[d]=c[d],a[d]=1);i[s]=c}else for(const d in l)a[d]=1}for(const l in o)l in t||(t[l]=void 0);return t}function Ob(i){return typeof i=="object"&&i!==null?i:{}}function xp(i){let e,t,o;var a=i[1][i[0].type];function s(l,c){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[AT]},$$scope:{ctx:l}}}}return a&&(e=Pp(a,s(i))),{c(){e&&Ht(e.$$.fragment),t=ae()},l(l){e&&gi(e.$$.fragment,l),t=ae()},m(l,c){e&&Qt(e,l,c),Cn(l,t,c),o=!0},p(l,c){if(c&3&&a!==(a=l[1][l[0].type])){if(e){At();const d=e;sn(d.$$.fragment,1,0,()=>{jt(d,1)}),Nt()}a?(e=Pp(a,s(l)),Ht(e.$$.fragment),nn(e.$$.fragment,1),Qt(e,t.parentNode,t)):e=null}else if(a){const d={};c&1&&(d.token=l[0]),c&4&&(d.options=l[2]),c&2&&(d.renderers=l[1]),c&15&&(d.$$scope={dirty:c,ctx:l}),e.$set(d)}},i(l){o||(e&&nn(e.$$.fragment,l),o=!0)},o(l){e&&sn(e.$$.fragment,l),o=!1},d(l){l&&K(t),e&&jt(e,l)}}}function DT(i){let e=i[0].raw+"",t;return{c(){t=xs(e)},l(o){t=ks(o,e)},m(o,a){Cn(o,t,a)},p(o,a){a&1&&e!==(e=o[0].raw+"")&&Ps(t,e)},i:te,o:te,d(o){o&&K(t)}}}function vT(i){let e,t;return e=new Mo({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Ht(e.$$.fragment)},l(o){gi(e.$$.fragment,o)},m(o,a){Qt(e,o,a),t=!0},p(o,a){const s={};a&1&&(s.tokens=o[0].tokens),a&2&&(s.renderers=o[1]),a&4&&(s.options=o[2]),e.$set(s)},i(o){t||(nn(e.$$.fragment,o),t=!0)},o(o){sn(e.$$.fragment,o),t=!1},d(o){jt(e,o)}}}function AT(i){let e,t,o,a;const s=[vT,DT],l=[];function c(d,I){return"tokens"in d[0]&&d[0].tokens?0:1}return e=c(i),t=l[e]=s[e](i),{c(){t.c(),o=ae()},l(d){t.l(d),o=ae()},m(d,I){l[e].m(d,I),Cn(d,o,I),a=!0},p(d,I){let S=e;e=c(d),e===S?l[e].p(d,I):(At(),sn(l[S],1,1,()=>{l[S]=null}),Nt(),t=l[e],t?t.p(d,I):(t=l[e]=s[e](d),t.c()),nn(t,1),t.m(o.parentNode,o))},i(d){a||(nn(t),a=!0)},o(d){sn(t),a=!1},d(d){d&&K(o),l[e].d(d)}}}function NT(i){let e,t,o=i[1][i[0].type]&&xp(i);return{c(){o&&o.c(),e=ae()},l(a){o&&o.l(a),e=ae()},m(a,s){o&&o.m(a,s),Cn(a,e,s),t=!0},p(a,[s]){a[1][a[0].type]?o?(o.p(a,s),s&3&&nn(o,1)):(o=xp(a),o.c(),nn(o,1),o.m(e.parentNode,e)):o&&(At(),sn(o,1,1,()=>{o=null}),Nt())},i(a){t||(nn(o),t=!0)},o(a){sn(o),t=!1},d(a){a&&K(e),o&&o.d(a)}}}function wT(i,e,t){let{token:o}=e,{renderers:a}=e,{options:s}=e;return i.$$set=l=>{"token"in l&&t(0,o=l.token),"renderers"in l&&t(1,a=l.renderers),"options"in l&&t(2,s=l.options)},[o,a,s]}class Dc extends xn{constructor(e){super(),Ln(this,e,wT,NT,wn,{token:0,renderers:1,options:2})}}function Lp(i,e,t){const o=i.slice();return o[3]=e[t],o}function Mp(i){let e,t,o=pt(i[0]),a=[];for(let l=0;l<o.length;l+=1)a[l]=qp(Lp(i,o,l));const s=l=>sn(a[l],1,1,()=>{a[l]=null});return{c(){for(let l=0;l<a.length;l+=1)a[l].c();e=ae()},l(l){for(let c=0;c<a.length;c+=1)a[c].l(l);e=ae()},m(l,c){for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(l,c);Cn(l,e,c),t=!0},p(l,c){if(c&7){o=pt(l[0]);let d;for(d=0;d<o.length;d+=1){const I=Lp(l,o,d);a[d]?(a[d].p(I,c),nn(a[d],1)):(a[d]=qp(I),a[d].c(),nn(a[d],1),a[d].m(e.parentNode,e))}for(At(),d=o.length;d<a.length;d+=1)s(d);Nt()}},i(l){if(!t){for(let c=0;c<o.length;c+=1)nn(a[c]);t=!0}},o(l){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)sn(a[c]);t=!1},d(l){l&&K(e),Sr(a,l)}}}function qp(i){let e,t;return e=new Dc({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Ht(e.$$.fragment)},l(o){gi(e.$$.fragment,o)},m(o,a){Qt(e,o,a),t=!0},p(o,a){const s={};a&1&&(s.token=o[3]),a&2&&(s.renderers=o[1]),a&4&&(s.options=o[2]),e.$set(s)},i(o){t||(nn(e.$$.fragment,o),t=!0)},o(o){sn(e.$$.fragment,o),t=!1},d(o){jt(e,o)}}}function RT(i){let e,t,o=i[0]&&Mp(i);return{c(){o&&o.c(),e=ae()},l(a){o&&o.l(a),e=ae()},m(a,s){o&&o.m(a,s),Cn(a,e,s),t=!0},p(a,[s]){a[0]?o?(o.p(a,s),s&1&&nn(o,1)):(o=Mp(a),o.c(),nn(o,1),o.m(e.parentNode,e)):o&&(At(),sn(o,1,1,()=>{o=null}),Nt())},i(a){t||(nn(o),t=!0)},o(a){sn(o),t=!1},d(a){a&&K(e),o&&o.d(a)}}}function _T(i,e,t){let{tokens:o}=e,{renderers:a}=e,{options:s}=e;return i.$$set=l=>{"tokens"in l&&t(0,o=l.tokens),"renderers"in l&&t(1,a=l.renderers),"options"in l&&t(2,s=l.options)},[o,a,s]}class Mo extends xn{constructor(e){super(),Ln(this,e,_T,RT,wn,{tokens:0,renderers:1,options:2})}}function hr(...i){return`/${i.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function yr(i){return i.startsWith("/")||i.startsWith("#")}function vc(i,e){return e.slug(i).replace(/--+/g,"-")}function Ss(i){let e,t;const o=i[5].default,a=et(o,i,i[4],null);let s=[{id:i[1]}],l={};for(let c=0;c<s.length;c+=1)l=Oc(l,s[c]);return{c(){e=Bn(`h${i[0].depth}`),a&&a.c(),this.h()},l(c){e=_n(c,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var d=Wn(e);a&&a.l(d),d.forEach(K),this.h()},h(){Ao(`h${i[0].depth}`)(e,l)},m(c,d){Cn(c,e,d),a&&a.m(e,null),t=!0},p(c,d){a&&a.p&&(!t||d&16)&&tt(a,o,c,c[4],t?rt(o,c[4],d,null):it(c[4]),null),Ao(`h${c[0].depth}`)(e,l=bc(s,[(!t||d&2)&&{id:c[1]}]))},i(c){t||(nn(a,c),t=!0)},o(c){sn(a,c),t=!1},d(c){c&&K(e),a&&a.d(c)}}}function BT(i){let e=`h${i[0].depth}`,t,o,a=`h${i[0].depth}`&&Ss(i);return{c(){a&&a.c(),t=ae()},l(s){a&&a.l(s),t=ae()},m(s,l){a&&a.m(s,l),Cn(s,t,l),o=!0},p(s,[l]){`h${s[0].depth}`?e?wn(e,`h${s[0].depth}`)?(a.d(1),a=Ss(s),e=`h${s[0].depth}`,a.c(),a.m(t.parentNode,t)):a.p(s,l):(a=Ss(s),e=`h${s[0].depth}`,a.c(),a.m(t.parentNode,t)):e&&(a.d(1),a=null,e=`h${s[0].depth}`)},i(s){o||(nn(a,s),o=!0)},o(s){sn(a,s),o=!1},d(s){s&&K(t),a&&a.d(s)}}}function UT(i,e,t){let{$$slots:o={},$$scope:a}=e,{token:s}=e,{options:l}=e;const c=void 0;let d;return i.$$set=I=>{"token"in I&&t(0,s=I.token),"options"in I&&t(2,l=I.options),"$$scope"in I&&t(4,a=I.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,d=vc(s.text,l.slugger))},[s,d,l,c,a,o]}class PT extends xn{constructor(e){super(),Ln(this,e,UT,BT,wn,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function kT(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Bn("blockquote"),a&&a.c()},l(s){e=_n(s,"BLOCKQUOTE",{});var l=Wn(e);a&&a.l(l),l.forEach(K)},m(s,l){Cn(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(nn(a,s),t=!0)},o(s){sn(a,s),t=!1},d(s){s&&K(e),a&&a.d(s)}}}function xT(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class LT extends xn{constructor(e){super(),Ln(this,e,xT,kT,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Gp(i,e,t){const o=i.slice();return o[4]=e[t],o}function Jp(i){let e,t;return e=new Dc({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Ht(e.$$.fragment)},l(o){gi(e.$$.fragment,o)},m(o,a){Qt(e,o,a),t=!0},p(o,a){const s={};a&1&&(s.token={...o[4]}),a&2&&(s.options=o[1]),a&4&&(s.renderers=o[2]),e.$set(s)},i(o){t||(nn(e.$$.fragment,o),t=!0)},o(o){sn(e.$$.fragment,o),t=!1},d(o){jt(e,o)}}}function hs(i){let e,t,o,a=pt(i[0].items),s=[];for(let I=0;I<a.length;I+=1)s[I]=Jp(Gp(i,a,I));const l=I=>sn(s[I],1,1,()=>{s[I]=null});let c=[{start:t=i[0].start||1}],d={};for(let I=0;I<c.length;I+=1)d=Oc(d,c[I]);return{c(){e=Bn(i[3]);for(let I=0;I<s.length;I+=1)s[I].c();this.h()},l(I){e=_n(I,(i[3]||"null").toUpperCase(),{start:!0});var S=Wn(e);for(let y=0;y<s.length;y+=1)s[y].l(S);S.forEach(K),this.h()},h(){Ao(i[3])(e,d)},m(I,S){Cn(I,e,S);for(let y=0;y<s.length;y+=1)s[y]&&s[y].m(e,null);o=!0},p(I,S){if(S&7){a=pt(I[0].items);let y;for(y=0;y<a.length;y+=1){const _=Gp(I,a,y);s[y]?(s[y].p(_,S),nn(s[y],1)):(s[y]=Jp(_),s[y].c(),nn(s[y],1),s[y].m(e,null))}for(At(),y=a.length;y<s.length;y+=1)l(y);Nt()}Ao(I[3])(e,d=bc(c,[(!o||S&1&&t!==(t=I[0].start||1))&&{start:t}]))},i(I){if(!o){for(let S=0;S<a.length;S+=1)nn(s[S]);o=!0}},o(I){s=s.filter(Boolean);for(let S=0;S<s.length;S+=1)sn(s[S]);o=!1},d(I){I&&K(e),Sr(s,I)}}}function MT(i){let e=i[3],t,o=i[3]&&hs(i);return{c(){o&&o.c(),t=ae()},l(a){o&&o.l(a),t=ae()},m(a,s){o&&o.m(a,s),Cn(a,t,s)},p(a,[s]){a[3]?e?wn(e,a[3])?(o.d(1),o=hs(a),e=a[3],o.c(),o.m(t.parentNode,t)):o.p(a,s):(o=hs(a),e=a[3],o.c(),o.m(t.parentNode,t)):e&&(o.d(1),o=null,e=a[3])},i:te,o(a){sn(o,a)},d(a){a&&K(t),o&&o.d(a)}}}function qT(i,e,t){let{token:o}=e,{options:a}=e,{renderers:s}=e,l;return i.$$set=c=>{"token"in c&&t(0,o=c.token),"options"in c&&t(1,a=c.options),"renderers"in c&&t(2,s=c.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,l=o.ordered?"ol":"ul")},[o,a,s,l]}class GT extends xn{constructor(e){super(),Ln(this,e,qT,MT,wn,{token:0,options:1,renderers:2})}}function JT(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Bn("li"),a&&a.c()},l(s){e=_n(s,"LI",{});var l=Wn(e);a&&a.l(l),l.forEach(K)},m(s,l){Cn(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(nn(a,s),t=!0)},o(s){sn(a,s),t=!1},d(s){s&&K(e),a&&a.d(s)}}}function VT(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class $T extends xn{constructor(e){super(),Ln(this,e,VT,JT,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function WT(i){let e;return{c(){e=Bn("br")},l(t){e=_n(t,"BR",{})},m(t,o){Cn(t,e,o)},p:te,i:te,o:te,d(t){t&&K(e)}}}function jT(i,e,t){return[void 0,void 0,void 0]}class HT extends xn{constructor(e){super(),Ln(this,e,jT,WT,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function QT(i){let e,t,o=i[0].text+"",a,s;return{c(){e=Bn("pre"),t=Bn("code"),a=xs(o),this.h()},l(l){e=_n(l,"PRE",{});var c=Wn(e);t=_n(c,"CODE",{class:!0});var d=Wn(t);a=ks(d,o),d.forEach(K),c.forEach(K),this.h()},h(){Se(t,"class",s=`lang-${i[0].lang}`)},m(l,c){Cn(l,e,c),vt(e,t),vt(t,a)},p(l,[c]){c&1&&o!==(o=l[0].text+"")&&Ps(a,o),c&1&&s!==(s=`lang-${l[0].lang}`)&&Se(t,"class",s)},i:te,o:te,d(l){l&&K(e)}}}function YT(i,e,t){let{token:o}=e;const a=void 0,s=void 0;return i.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,a,s]}class KT extends xn{constructor(e){super(),Ln(this,e,YT,QT,wn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zT(i){let e,t=i[0].raw.slice(1,i[0].raw.length-1)+"",o;return{c(){e=Bn("code"),o=xs(t)},l(a){e=_n(a,"CODE",{});var s=Wn(e);o=ks(s,t),s.forEach(K)},m(a,s){Cn(a,e,s),vt(e,o)},p(a,[s]){s&1&&t!==(t=a[0].raw.slice(1,a[0].raw.length-1)+"")&&Ps(o,t)},i:te,o:te,d(a){a&&K(e)}}}function XT(i,e,t){let{token:o}=e;const a=void 0,s=void 0;return i.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,a,s]}class ZT extends xn{constructor(e){super(),Ln(this,e,XT,zT,wn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Vp(i,e,t){const o=i.slice();return o[3]=e[t],o}function $p(i,e,t){const o=i.slice();return o[6]=e[t],o}function Wp(i,e,t){const o=i.slice();return o[9]=e[t],o}function jp(i){let e,t,o,a;return t=new Mo({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){e=Bn("th"),Ht(t.$$.fragment),o=Ms(),this.h()},l(s){e=_n(s,"TH",{scope:!0});var l=Wn(e);gi(t.$$.fragment,l),o=Ls(l),l.forEach(K),this.h()},h(){Se(e,"scope","col")},m(s,l){Cn(s,e,l),Qt(t,e,null),vt(e,o),a=!0},p(s,l){const c={};l&1&&(c.tokens=s[9].tokens),l&2&&(c.options=s[1]),l&4&&(c.renderers=s[2]),t.$set(c)},i(s){a||(nn(t.$$.fragment,s),a=!0)},o(s){sn(t.$$.fragment,s),a=!1},d(s){s&&K(e),jt(t)}}}function Hp(i){let e,t,o;return t=new Mo({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){e=Bn("td"),Ht(t.$$.fragment)},l(a){e=_n(a,"TD",{});var s=Wn(e);gi(t.$$.fragment,s),s.forEach(K)},m(a,s){Cn(a,e,s),Qt(t,e,null),o=!0},p(a,s){const l={};s&1&&(l.tokens=a[6].tokens),s&2&&(l.options=a[1]),s&4&&(l.renderers=a[2]),t.$set(l)},i(a){o||(nn(t.$$.fragment,a),o=!0)},o(a){sn(t.$$.fragment,a),o=!1},d(a){a&&K(e),jt(t)}}}function Qp(i){let e,t,o,a=pt(i[3]),s=[];for(let c=0;c<a.length;c+=1)s[c]=Hp($p(i,a,c));const l=c=>sn(s[c],1,1,()=>{s[c]=null});return{c(){e=Bn("tr");for(let c=0;c<s.length;c+=1)s[c].c();t=Ms()},l(c){e=_n(c,"TR",{});var d=Wn(e);for(let I=0;I<s.length;I+=1)s[I].l(d);t=Ls(d),d.forEach(K)},m(c,d){Cn(c,e,d);for(let I=0;I<s.length;I+=1)s[I]&&s[I].m(e,null);vt(e,t),o=!0},p(c,d){if(d&7){a=pt(c[3]);let I;for(I=0;I<a.length;I+=1){const S=$p(c,a,I);s[I]?(s[I].p(S,d),nn(s[I],1)):(s[I]=Hp(S),s[I].c(),nn(s[I],1),s[I].m(e,t))}for(At(),I=a.length;I<s.length;I+=1)l(I);Nt()}},i(c){if(!o){for(let d=0;d<a.length;d+=1)nn(s[d]);o=!0}},o(c){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)sn(s[d]);o=!1},d(c){c&&K(e),Sr(s,c)}}}function nF(i){let e,t,o,a,s,l,c=pt(i[0].header),d=[];for(let v=0;v<c.length;v+=1)d[v]=jp(Wp(i,c,v));const I=v=>sn(d[v],1,1,()=>{d[v]=null});let S=pt(i[0].rows),y=[];for(let v=0;v<S.length;v+=1)y[v]=Qp(Vp(i,S,v));const _=v=>sn(y[v],1,1,()=>{y[v]=null});return{c(){e=Bn("table"),t=Bn("thead"),o=Bn("tr");for(let v=0;v<d.length;v+=1)d[v].c();a=Ms(),s=Bn("tbody");for(let v=0;v<y.length;v+=1)y[v].c()},l(v){e=_n(v,"TABLE",{});var A=Wn(e);t=_n(A,"THEAD",{});var k=Wn(t);o=_n(k,"TR",{});var W=Wn(o);for(let vn=0;vn<d.length;vn+=1)d[vn].l(W);W.forEach(K),k.forEach(K),a=Ls(A),s=_n(A,"TBODY",{});var cn=Wn(s);for(let vn=0;vn<y.length;vn+=1)y[vn].l(cn);cn.forEach(K),A.forEach(K)},m(v,A){Cn(v,e,A),vt(e,t),vt(t,o);for(let k=0;k<d.length;k+=1)d[k]&&d[k].m(o,null);vt(e,a),vt(e,s);for(let k=0;k<y.length;k+=1)y[k]&&y[k].m(s,null);l=!0},p(v,[A]){if(A&7){c=pt(v[0].header);let k;for(k=0;k<c.length;k+=1){const W=Wp(v,c,k);d[k]?(d[k].p(W,A),nn(d[k],1)):(d[k]=jp(W),d[k].c(),nn(d[k],1),d[k].m(o,null))}for(At(),k=c.length;k<d.length;k+=1)I(k);Nt()}if(A&7){S=pt(v[0].rows);let k;for(k=0;k<S.length;k+=1){const W=Vp(v,S,k);y[k]?(y[k].p(W,A),nn(y[k],1)):(y[k]=Qp(W),y[k].c(),nn(y[k],1),y[k].m(s,null))}for(At(),k=S.length;k<y.length;k+=1)_(k);Nt()}},i(v){if(!l){for(let A=0;A<c.length;A+=1)nn(d[A]);for(let A=0;A<S.length;A+=1)nn(y[A]);l=!0}},o(v){d=d.filter(Boolean);for(let A=0;A<d.length;A+=1)sn(d[A]);y=y.filter(Boolean);for(let A=0;A<y.length;A+=1)sn(y[A]);l=!1},d(v){v&&K(e),Sr(d,v),Sr(y,v)}}}function eF(i,e,t){let{token:o}=e,{options:a}=e,{renderers:s}=e;return i.$$set=l=>{"token"in l&&t(0,o=l.token),"options"in l&&t(1,a=l.options),"renderers"in l&&t(2,s=l.renderers)},[o,a,s]}class tF extends xn{constructor(e){super(),Ln(this,e,eF,nF,wn,{token:0,options:1,renderers:2})}}function iF(i){let e,t=i[0].text+"",o;return{c(){e=new ET(!1),o=ae(),this.h()},l(a){e=CT(a,!1),o=ae(),this.h()},h(){e.a=o},m(a,s){e.m(t,a,s),Cn(a,o,s)},p(a,[s]){s&1&&t!==(t=a[0].text+"")&&e.p(t)},i:te,o:te,d(a){a&&(K(o),e.d())}}}function rF(i,e,t){let{token:o}=e;const a=void 0,s=void 0;return i.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,a,s]}class oF extends xn{constructor(e){super(),Ln(this,e,rF,iF,wn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function aF(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Bn("p"),a&&a.c()},l(s){e=_n(s,"P",{});var l=Wn(e);a&&a.l(l),l.forEach(K)},m(s,l){Cn(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(nn(a,s),t=!0)},o(s){sn(a,s),t=!1},d(s){s&&K(e),a&&a.d(s)}}}function sF(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class uF extends xn{constructor(e){super(),Ln(this,e,sF,aF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function lF(i){let e,t,o,a;const s=i[4].default,l=et(s,i,i[3],null);return{c(){e=Bn("a"),l&&l.c(),this.h()},l(c){e=_n(c,"A",{href:!0,title:!0});var d=Wn(e);l&&l.l(d),d.forEach(K),this.h()},h(){Se(e,"href",t=yr(i[0].href)?hr(i[1].baseUrl,i[0].href):i[0].href),Se(e,"title",o=i[0].title)},m(c,d){Cn(c,e,d),l&&l.m(e,null),a=!0},p(c,[d]){l&&l.p&&(!a||d&8)&&tt(l,s,c,c[3],a?rt(s,c[3],d,null):it(c[3]),null),(!a||d&3&&t!==(t=yr(c[0].href)?hr(c[1].baseUrl,c[0].href):c[0].href))&&Se(e,"href",t),(!a||d&1&&o!==(o=c[0].title))&&Se(e,"title",o)},i(c){a||(nn(l,c),a=!0)},o(c){sn(l,c),a=!1},d(c){c&&K(e),l&&l.d(c)}}}function pF(i,e,t){let{$$slots:o={},$$scope:a}=e,{token:s}=e,{options:l}=e;const c=void 0;return i.$$set=d=>{"token"in d&&t(0,s=d.token),"options"in d&&t(1,l=d.options),"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class cF extends xn{constructor(e){super(),Ln(this,e,pF,lF,wn,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function dF(i){let e;const t=i[4].default,o=et(t,i,i[3],null);return{c(){o&&o.c()},l(a){o&&o.l(a)},m(a,s){o&&o.m(a,s),e=!0},p(a,[s]){o&&o.p&&(!e||s&8)&&tt(o,t,a,a[3],e?rt(t,a[3],s,null):it(a[3]),null)},i(a){e||(nn(o,a),e=!0)},o(a){sn(o,a),e=!1},d(a){o&&o.d(a)}}}function mF(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class fF extends xn{constructor(e){super(),Ln(this,e,mF,dF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function gF(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Bn("dfn"),a&&a.c()},l(s){e=_n(s,"DFN",{});var l=Wn(e);a&&a.l(l),l.forEach(K)},m(s,l){Cn(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(nn(a,s),t=!0)},o(s){sn(a,s),t=!1},d(s){s&&K(e),a&&a.d(s)}}}function IF(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class SF extends xn{constructor(e){super(),Ln(this,e,IF,gF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function hF(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Bn("del"),a&&a.c()},l(s){e=_n(s,"DEL",{});var l=Wn(e);a&&a.l(l),l.forEach(K)},m(s,l){Cn(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(nn(a,s),t=!0)},o(s){sn(a,s),t=!1},d(s){s&&K(e),a&&a.d(s)}}}function yF(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class TF extends xn{constructor(e){super(),Ln(this,e,yF,hF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function FF(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Bn("em"),a&&a.c()},l(s){e=_n(s,"EM",{});var l=Wn(e);a&&a.l(l),l.forEach(K)},m(s,l){Cn(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(nn(a,s),t=!0)},o(s){sn(a,s),t=!1},d(s){s&&K(e),a&&a.d(s)}}}function CF(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class EF extends xn{constructor(e){super(),Ln(this,e,CF,FF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function OF(i){let e;return{c(){e=Bn("hr")},l(t){e=_n(t,"HR",{})},m(t,o){Cn(t,e,o)},p:te,i:te,o:te,d(t){t&&K(e)}}}function bF(i,e,t){return[void 0,void 0,void 0]}class DF extends xn{constructor(e){super(),Ln(this,e,bF,OF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function vF(i){let e,t;const o=i[4].default,a=et(o,i,i[3],null);return{c(){e=Bn("strong"),a&&a.c()},l(s){e=_n(s,"STRONG",{});var l=Wn(e);a&&a.l(l),l.forEach(K)},m(s,l){Cn(s,e,l),a&&a.m(e,null),t=!0},p(s,[l]){a&&a.p&&(!t||l&8)&&tt(a,o,s,s[3],t?rt(o,s[3],l,null):it(s[3]),null)},i(s){t||(nn(a,s),t=!0)},o(s){sn(a,s),t=!1},d(s){s&&K(e),a&&a.d(s)}}}function AF(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class NF extends xn{constructor(e){super(),Ln(this,e,AF,vF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function wF(i){let e,t,o,a;return{c(){e=Bn("img"),this.h()},l(s){e=_n(s,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){kp(e.src,t=yr(i[0].href)?hr(i[1].baseUrl,i[0].href):i[0].href)||Se(e,"src",t),Se(e,"title",o=i[0].title),Se(e,"alt",a=i[0].text),Se(e,"class","markdown-image svelte-z38cge")},m(s,l){Cn(s,e,l)},p(s,[l]){l&3&&!kp(e.src,t=yr(s[0].href)?hr(s[1].baseUrl,s[0].href):s[0].href)&&Se(e,"src",t),l&1&&o!==(o=s[0].title)&&Se(e,"title",o),l&1&&a!==(a=s[0].text)&&Se(e,"alt",a)},i:te,o:te,d(s){s&&K(e)}}}function RF(i,e,t){let{token:o}=e,{options:a}=e;const s=void 0;return i.$$set=l=>{"token"in l&&t(0,o=l.token),"options"in l&&t(1,a=l.options)},[o,a,s]}class _F extends xn{constructor(e){super(),Ln(this,e,RF,wF,wn,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function BF(i){let e;const t=i[4].default,o=et(t,i,i[3],null);return{c(){o&&o.c()},l(a){o&&o.l(a)},m(a,s){o&&o.m(a,s),e=!0},p(a,[s]){o&&o.p&&(!e||s&8)&&tt(o,t,a,a[3],e?rt(t,a[3],s,null):it(a[3]),null)},i(a){e||(nn(o,a),e=!0)},o(a){sn(o,a),e=!1},d(a){o&&o.d(a)}}}function UF(i,e,t){let{$$slots:o={},$$scope:a}=e;const s=void 0,l=void 0,c=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[s,l,c,a,o]}class Yp extends xn{constructor(e){super(),Ln(this,e,UF,BF,wn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const PF=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,kF=Object.hasOwnProperty;class Ac{constructor(){this.occurrences,this.reset()}slug(e,t){const o=this;let a=xF(e,t===!0);const s=a;for(;kF.call(o.occurrences,a);)o.occurrences[s]++,a=s+"-"+o.occurrences[s];return o.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function xF(i,e){return typeof i!="string"?"":(e||(i=i.toLowerCase()),i.replace(PF,"").replace(/ /g,"-"))}function qs(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ii=qs();function Nc(i){Ii=i}const wc=/[&<>"']/,LF=new RegExp(wc.source,"g"),Rc=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,MF=new RegExp(Rc.source,"g"),qF={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Kp=i=>qF[i];function ve(i,e){if(e){if(wc.test(i))return i.replace(LF,Kp)}else if(Rc.test(i))return i.replace(MF,Kp);return i}const GF=/(^|[^\[])\^/g;function Fn(i,e){let t=typeof i=="string"?i:i.source;e=e||"";const o={replace:(a,s)=>{let l=typeof s=="string"?s:s.source;return l=l.replace(GF,"$1"),t=t.replace(a,l),o},getRegex:()=>new RegExp(t,e)};return o}function zp(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const mr={exec:()=>null};function Xp(i,e){const t=i.replace(/\|/g,(s,l,c)=>{let d=!1,I=l;for(;--I>=0&&c[I]==="\\";)d=!d;return d?"|":" |"}),o=t.split(/ \|/);let a=0;if(o[0].trim()||o.shift(),o.length>0&&!o[o.length-1].trim()&&o.pop(),e)if(o.length>e)o.splice(e);else for(;o.length<e;)o.push("");for(;a<o.length;a++)o[a]=o[a].trim().replace(/\\\|/g,"|");return o}function sr(i,e,t){const o=i.length;if(o===0)return"";let a=0;for(;a<o&&i.charAt(o-a-1)===e;)a++;return i.slice(0,o-a)}function JF(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let o=0;o<i.length;o++)if(i[o]==="\\")o++;else if(i[o]===e[0])t++;else if(i[o]===e[1]&&(t--,t<0))return o;return-1}function Zp(i,e,t,o){const a=e.href,s=e.title?ve(e.title):null,l=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){o.state.inLink=!0;const c={type:"link",raw:t,href:a,title:s,text:l,tokens:o.inlineTokens(l)};return o.state.inLink=!1,c}return{type:"image",raw:t,href:a,title:s,text:ve(l)}}function VF(i,e){const t=i.match(/^(\s+)(?:```)/);if(t===null)return e;const o=t[1];return e.split(`
`).map(a=>{const s=a.match(/^\s+/);if(s===null)return a;const[l]=s;return l.length>=o.length?a.slice(o.length):a}).join(`
`)}class No{constructor(e){yn(this,"options");yn(this,"rules");yn(this,"lexer");this.options=e||Ii}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const o=t[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?o:sr(o,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const o=t[0],a=VF(o,t[3]||"");return{type:"code",raw:o,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:a}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let o=t[2].trim();if(/#$/.test(o)){const a=sr(o,"#");(this.options.pedantic||!a||/ $/.test(a))&&(o=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:sr(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let o=sr(t[0],`
`).split(`
`),a="",s="";const l=[];for(;o.length>0;){let c=!1;const d=[];let I;for(I=0;I<o.length;I++)if(/^ {0,3}>/.test(o[I]))d.push(o[I]),c=!0;else if(!c)d.push(o[I]);else break;o=o.slice(I);const S=d.join(`
`),y=S.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");a=a?`${a}
${S}`:S,s=s?`${s}
${y}`:y;const _=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(y,l,!0),this.lexer.state.top=_,o.length===0)break;const v=l[l.length-1];if((v==null?void 0:v.type)==="code")break;if((v==null?void 0:v.type)==="blockquote"){const A=v,k=A.raw+`
`+o.join(`
`),W=this.blockquote(k);l[l.length-1]=W,a=a.substring(0,a.length-A.raw.length)+W.raw,s=s.substring(0,s.length-A.text.length)+W.text;break}else if((v==null?void 0:v.type)==="list"){const A=v,k=A.raw+`
`+o.join(`
`),W=this.list(k);l[l.length-1]=W,a=a.substring(0,a.length-v.raw.length)+W.raw,s=s.substring(0,s.length-A.raw.length)+W.raw,o=k.substring(l[l.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:l,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let o=t[1].trim();const a=o.length>1,s={type:"list",raw:"",ordered:a,start:a?+o.slice(0,-1):"",loose:!1,items:[]};o=a?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=a?o:"[*+-]");const l=new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let d=!1,I="",S="";if(!(t=l.exec(e))||this.rules.block.hr.test(e))break;I=t[0],e=e.substring(I.length);let y=t[2].split(`
`,1)[0].replace(/^\t+/,cn=>" ".repeat(3*cn.length)),_=e.split(`
`,1)[0],v=!y.trim(),A=0;if(this.options.pedantic?(A=2,S=y.trimStart()):v?A=t[1].length+1:(A=t[2].search(/[^ ]/),A=A>4?1:A,S=y.slice(A),A+=t[1].length),v&&/^[ \t]*$/.test(_)&&(I+=_+`
`,e=e.substring(_.length+1),d=!0),!d){const cn=new RegExp(`^ {0,${Math.min(3,A-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),vn=new RegExp(`^ {0,${Math.min(3,A-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),hn=new RegExp(`^ {0,${Math.min(3,A-1)}}(?:\`\`\`|~~~)`),Un=new RegExp(`^ {0,${Math.min(3,A-1)}}#`),Hn=new RegExp(`^ {0,${Math.min(3,A-1)}}<[a-z].*>`,"i");for(;e;){const Kn=e.split(`
`,1)[0];let Pn;if(_=Kn,this.options.pedantic?(_=_.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),Pn=_):Pn=_.replace(/\t/g,"    "),hn.test(_)||Un.test(_)||Hn.test(_)||cn.test(_)||vn.test(_))break;if(Pn.search(/[^ ]/)>=A||!_.trim())S+=`
`+Pn.slice(A);else{if(v||y.replace(/\t/g,"    ").search(/[^ ]/)>=4||hn.test(y)||Un.test(y)||vn.test(y))break;S+=`
`+_}!v&&!_.trim()&&(v=!0),I+=Kn+`
`,e=e.substring(Kn.length+1),y=Pn.slice(A)}}s.loose||(c?s.loose=!0:/\n[ \t]*\n[ \t]*$/.test(I)&&(c=!0));let k=null,W;this.options.gfm&&(k=/^\[[ xX]\] /.exec(S),k&&(W=k[0]!=="[ ] ",S=S.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:I,task:!!k,checked:W,loose:!1,text:S,tokens:[]}),s.raw+=I}s.items[s.items.length-1].raw=s.items[s.items.length-1].raw.trimEnd(),s.items[s.items.length-1].text=s.items[s.items.length-1].text.trimEnd(),s.raw=s.raw.trimEnd();for(let d=0;d<s.items.length;d++)if(this.lexer.state.top=!1,s.items[d].tokens=this.lexer.blockTokens(s.items[d].text,[]),!s.loose){const I=s.items[d].tokens.filter(y=>y.type==="space"),S=I.length>0&&I.some(y=>/\n.*\n/.test(y.raw));s.loose=S}if(s.loose)for(let d=0;d<s.items.length;d++)s.items[d].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const o=t[1].toLowerCase().replace(/\s+/g," "),a=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:o,raw:t[0],href:a,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const o=Xp(t[1]),a=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(o.length===a.length){for(const c of a)/^ *-+: *$/.test(c)?l.align.push("right"):/^ *:-+: *$/.test(c)?l.align.push("center"):/^ *:-+ *$/.test(c)?l.align.push("left"):l.align.push(null);for(let c=0;c<o.length;c++)l.header.push({text:o[c],tokens:this.lexer.inline(o[c]),header:!0,align:l.align[c]});for(const c of s)l.rows.push(Xp(c,l.header.length).map((d,I)=>({text:d,tokens:this.lexer.inline(d),header:!1,align:l.align[I]})));return l}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const o=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:o,tokens:this.lexer.inline(o)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:ve(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const o=t[2].trim();if(!this.options.pedantic&&/^</.test(o)){if(!/>$/.test(o))return;const l=sr(o.slice(0,-1),"\\");if((o.length-l.length)%2===0)return}else{const l=JF(t[2],"()");if(l>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let a=t[2],s="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);l&&(a=l[1],s=l[3])}else s=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(o)?a=a.slice(1):a=a.slice(1,-1)),Zp(t,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let o;if((o=this.rules.inline.reflink.exec(e))||(o=this.rules.inline.nolink.exec(e))){const a=(o[2]||o[1]).replace(/\s+/g," "),s=t[a.toLowerCase()];if(!s){const l=o[0].charAt(0);return{type:"text",raw:l,text:l}}return Zp(o,s,o[0],this.lexer)}}emStrong(e,t,o=""){let a=this.rules.inline.emStrongLDelim.exec(e);if(!a||a[3]&&o.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!o||this.rules.inline.punctuation.exec(o)){const l=[...a[0]].length-1;let c,d,I=l,S=0;const y=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(y.lastIndex=0,t=t.slice(-1*e.length+l);(a=y.exec(t))!=null;){if(c=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!c)continue;if(d=[...c].length,a[3]||a[4]){I+=d;continue}else if((a[5]||a[6])&&l%3&&!((l+d)%3)){S+=d;continue}if(I-=d,I>0)continue;d=Math.min(d,d+I+S);const _=[...a[0]][0].length,v=e.slice(0,l+a.index+_+d);if(Math.min(l,d)%2){const k=v.slice(1,-1);return{type:"em",raw:v,text:k,tokens:this.lexer.inlineTokens(k)}}const A=v.slice(2,-2);return{type:"strong",raw:v,text:A,tokens:this.lexer.inlineTokens(A)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let o=t[2].replace(/\n/g," ");const a=/[^ ]/.test(o),s=/^ /.test(o)&&/ $/.test(o);return a&&s&&(o=o.substring(1,o.length-1)),o=ve(o,!0),{type:"codespan",raw:t[0],text:o}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let o,a;return t[2]==="@"?(o=ve(t[1]),a="mailto:"+o):(o=ve(t[1]),a=o),{type:"link",raw:t[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}url(e){var o;let t;if(t=this.rules.inline.url.exec(e)){let a,s;if(t[2]==="@")a=ve(t[0]),s="mailto:"+a;else{let l;do l=t[0],t[0]=((o=this.rules.inline._backpedal.exec(t[0]))==null?void 0:o[0])??"";while(l!==t[0]);a=ve(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:a,href:s,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let o;return this.lexer.state.inRawBlock?o=t[0]:o=ve(t[0]),{type:"text",raw:t[0],text:o}}}}const $F=/^(?:[ \t]*(?:\n|$))+/,WF=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,jF=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Er=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,HF=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_c=/(?:[*+-]|\d{1,9}[.)])/,Bc=Fn(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,_c).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Gs=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,QF=/^[^\n]+/,Js=/(?!\s*\])(?:\\.|[^\[\]\\])+/,YF=Fn(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Js).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),KF=Fn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_c).getRegex(),qo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Vs=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,zF=Fn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Vs).replace("tag",qo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Uc=Fn(Gs).replace("hr",Er).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qo).getRegex(),XF=Fn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Uc).getRegex(),$s={blockquote:XF,code:WF,def:YF,fences:jF,heading:HF,hr:Er,html:zF,lheading:Bc,list:KF,newline:$F,paragraph:Uc,table:mr,text:QF},nc=Fn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Er).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qo).getRegex(),ZF={...$s,table:nc,paragraph:Fn(Gs).replace("hr",Er).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qo).getRegex()},nC={...$s,html:Fn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Vs).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:mr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Fn(Gs).replace("hr",Er).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Bc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Pc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,eC=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,kc=/^( {2,}|\\)\n(?!\s*$)/,tC=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Or="\\p{P}\\p{S}",iC=Fn(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Or).getRegex(),rC=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,oC=Fn(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Or).getRegex(),aC=Fn("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Or).getRegex(),sC=Fn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Or).getRegex(),uC=Fn(/\\([punct])/,"gu").replace(/punct/g,Or).getRegex(),lC=Fn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),pC=Fn(Vs).replace("(?:-->|$)","-->").getRegex(),cC=Fn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",pC).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),wo=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,dC=Fn(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",wo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xc=Fn(/^!?\[(label)\]\[(ref)\]/).replace("label",wo).replace("ref",Js).getRegex(),Lc=Fn(/^!?\[(ref)\](?:\[\])?/).replace("ref",Js).getRegex(),mC=Fn("reflink|nolink(?!\\()","g").replace("reflink",xc).replace("nolink",Lc).getRegex(),Ws={_backpedal:mr,anyPunctuation:uC,autolink:lC,blockSkip:rC,br:kc,code:eC,del:mr,emStrongLDelim:oC,emStrongRDelimAst:aC,emStrongRDelimUnd:sC,escape:Pc,link:dC,nolink:Lc,punctuation:iC,reflink:xc,reflinkSearch:mC,tag:cC,text:tC,url:mr},fC={...Ws,link:Fn(/^!?\[(label)\]\((.*?)\)/).replace("label",wo).getRegex(),reflink:Fn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",wo).getRegex()},bs={...Ws,escape:Fn(Pc).replace("])","~|])").getRegex(),url:Fn(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},gC={...bs,br:Fn(kc).replace("{2,}","*").getRegex(),text:Fn(bs.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},To={normal:$s,gfm:ZF,pedantic:nC},ur={normal:Ws,gfm:bs,breaks:gC,pedantic:fC};class Ae{constructor(e){yn(this,"tokens");yn(this,"options");yn(this,"state");yn(this,"tokenizer");yn(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ii,this.options.tokenizer=this.options.tokenizer||new No,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:To.normal,inline:ur.normal};this.options.pedantic?(t.block=To.pedantic,t.inline=ur.pedantic):this.options.gfm&&(t.block=To.gfm,this.options.breaks?t.inline=ur.breaks:t.inline=ur.gfm),this.tokenizer.rules=t}static get rules(){return{block:To,inline:ur}}static lex(e,t){return new Ae(t).lex(e)}static lexInline(e,t){return new Ae(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const o=this.inlineQueue[t];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],o=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let a,s,l;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(a=c.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))){if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length),a.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+a.raw,s.text+=`
`+a.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+a.raw,s.text+=`
`+a.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(l=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const d=e.slice(1);let I;this.options.extensions.startBlock.forEach(S=>{I=S.call({lexer:this},d),typeof I=="number"&&I>=0&&(c=Math.min(c,I))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(l))){s=t[t.length-1],o&&(s==null?void 0:s.type)==="paragraph"?(s.raw+=`
`+a.raw,s.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(a),o=l.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+a.raw,s.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(a);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let o,a,s,l=e,c,d,I;if(this.tokens.links){const S=Object.keys(this.tokens.links);if(S.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)S.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,c.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(d||(I=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(S=>(o=S.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))){if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),a=t[t.length-1],a&&o.type==="text"&&a.type==="text"?(a.raw+=o.raw,a.text+=o.text):t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length),a=t[t.length-1],a&&o.type==="text"&&a.type==="text"?(a.raw+=o.raw,a.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,l,I)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let S=1/0;const y=e.slice(1);let _;this.options.extensions.startInline.forEach(v=>{_=v.call({lexer:this},y),typeof _=="number"&&_>=0&&(S=Math.min(S,_))}),S<1/0&&S>=0&&(s=e.substring(0,S+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(I=o.raw.slice(-1)),d=!0,a=t[t.length-1],a&&a.type==="text"?(a.raw+=o.raw,a.text+=o.text):t.push(o);continue}if(e){const S="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(S);break}else throw new Error(S)}}return t}}class Ro{constructor(e){yn(this,"options");yn(this,"parser");this.options=e||Ii}space(e){return""}code({text:e,lang:t,escaped:o}){var l;const a=(l=(t||"").match(/^\S*/))==null?void 0:l[0],s=e.replace(/\n$/,"")+`
`;return a?'<pre><code class="language-'+ve(a)+'">'+(o?s:ve(s,!0))+`</code></pre>
`:"<pre><code>"+(o?s:ve(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,o=e.start;let a="";for(let c=0;c<e.items.length;c++){const d=e.items[c];a+=this.listitem(d)}const s=t?"ol":"ul",l=t&&o!==1?' start="'+o+'"':"";return"<"+s+l+`>
`+a+"</"+s+`>
`}listitem(e){let t="";if(e.task){const o=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=o+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=o+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:o+" ",text:o+" "}):t+=o+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",o="";for(let s=0;s<e.header.length;s++)o+=this.tablecell(e.header[s]);t+=this.tablerow({text:o});let a="";for(let s=0;s<e.rows.length;s++){const l=e.rows[s];o="";for(let c=0;c<l.length;c++)o+=this.tablecell(l[c]);a+=this.tablerow({text:o})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+a+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),o=e.header?"th":"td";return(e.align?`<${o} align="${e.align}">`:`<${o}>`)+t+`</${o}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:o}){const a=this.parser.parseInline(o),s=zp(e);if(s===null)return a;e=s;let l='<a href="'+e+'"';return t&&(l+=' title="'+t+'"'),l+=">"+a+"</a>",l}image({href:e,title:t,text:o}){const a=zp(e);if(a===null)return o;e=a;let s=`<img src="${e}" alt="${o}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class js{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class qe{constructor(e){yn(this,"options");yn(this,"renderer");yn(this,"textRenderer");this.options=e||Ii,this.options.renderer=this.options.renderer||new Ro,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new js}static parse(e,t){return new qe(t).parse(e)}static parseInline(e,t){return new qe(t).parseInline(e)}parse(e,t=!0){let o="";for(let a=0;a<e.length;a++){const s=e[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const c=s,d=this.options.extensions.renderers[c.type].call({parser:this},c);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){o+=d||"";continue}}const l=s;switch(l.type){case"space":{o+=this.renderer.space(l);continue}case"hr":{o+=this.renderer.hr(l);continue}case"heading":{o+=this.renderer.heading(l);continue}case"code":{o+=this.renderer.code(l);continue}case"table":{o+=this.renderer.table(l);continue}case"blockquote":{o+=this.renderer.blockquote(l);continue}case"list":{o+=this.renderer.list(l);continue}case"html":{o+=this.renderer.html(l);continue}case"paragraph":{o+=this.renderer.paragraph(l);continue}case"text":{let c=l,d=this.renderer.text(c);for(;a+1<e.length&&e[a+1].type==="text";)c=e[++a],d+=`
`+this.renderer.text(c);t?o+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d}]}):o+=d;continue}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return o}parseInline(e,t){t=t||this.renderer;let o="";for(let a=0;a<e.length;a++){const s=e[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const c=this.options.extensions.renderers[s.type].call({parser:this},s);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){o+=c||"";continue}}const l=s;switch(l.type){case"escape":{o+=t.text(l);break}case"html":{o+=t.html(l);break}case"link":{o+=t.link(l);break}case"image":{o+=t.image(l);break}case"strong":{o+=t.strong(l);break}case"em":{o+=t.em(l);break}case"codespan":{o+=t.codespan(l);break}case"br":{o+=t.br(l);break}case"del":{o+=t.del(l);break}case"text":{o+=t.text(l);break}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return o}}class fr{constructor(e){yn(this,"options");yn(this,"block");this.options=e||Ii}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Ae.lex:Ae.lexInline}provideParser(){return this.block?qe.parse:qe.parseInline}}yn(fr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class IC{constructor(...e){yn(this,"defaults",qs());yn(this,"options",this.setOptions);yn(this,"parse",this.parseMarkdown(!0));yn(this,"parseInline",this.parseMarkdown(!1));yn(this,"Parser",qe);yn(this,"Renderer",Ro);yn(this,"TextRenderer",js);yn(this,"Lexer",Ae);yn(this,"Tokenizer",No);yn(this,"Hooks",fr);this.use(...e)}walkTokens(e,t){var a,s;let o=[];for(const l of e)switch(o=o.concat(t.call(this,l)),l.type){case"table":{const c=l;for(const d of c.header)o=o.concat(this.walkTokens(d.tokens,t));for(const d of c.rows)for(const I of d)o=o.concat(this.walkTokens(I.tokens,t));break}case"list":{const c=l;o=o.concat(this.walkTokens(c.items,t));break}default:{const c=l;(s=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&s[c.type]?this.defaults.extensions.childTokens[c.type].forEach(d=>{const I=c[d].flat(1/0);o=o.concat(this.walkTokens(I,t))}):c.tokens&&(o=o.concat(this.walkTokens(c.tokens,t)))}}return o}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(o=>{const a={...o};if(a.async=this.defaults.async||a.async||!1,o.extensions&&(o.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const l=t.renderers[s.name];l?t.renderers[s.name]=function(...c){let d=s.renderer.apply(this,c);return d===!1&&(d=l.apply(this,c)),d}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[s.level];l?l.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),a.extensions=t),o.renderer){const s=this.defaults.renderer||new Ro(this.defaults);for(const l in o.renderer){if(!(l in s))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;const c=l,d=o.renderer[c],I=s[c];s[c]=(...S)=>{let y=d.apply(s,S);return y===!1&&(y=I.apply(s,S)),y||""}}a.renderer=s}if(o.tokenizer){const s=this.defaults.tokenizer||new No(this.defaults);for(const l in o.tokenizer){if(!(l in s))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const c=l,d=o.tokenizer[c],I=s[c];s[c]=(...S)=>{let y=d.apply(s,S);return y===!1&&(y=I.apply(s,S)),y}}a.tokenizer=s}if(o.hooks){const s=this.defaults.hooks||new fr;for(const l in o.hooks){if(!(l in s))throw new Error(`hook '${l}' does not exist`);if(["options","block"].includes(l))continue;const c=l,d=o.hooks[c],I=s[c];fr.passThroughHooks.has(l)?s[c]=S=>{if(this.defaults.async)return Promise.resolve(d.call(s,S)).then(_=>I.call(s,_));const y=d.call(s,S);return I.call(s,y)}:s[c]=(...S)=>{let y=d.apply(s,S);return y===!1&&(y=I.apply(s,S)),y}}a.hooks=s}if(o.walkTokens){const s=this.defaults.walkTokens,l=o.walkTokens;a.walkTokens=function(c){let d=[];return d.push(l.call(this,c)),s&&(d=d.concat(s.call(this,c))),d}}this.defaults={...this.defaults,...a}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ae.lex(e,t??this.defaults)}parser(e,t){return qe.parse(e,t??this.defaults)}parseMarkdown(e){return(o,a)=>{const s={...a},l={...this.defaults,...s},c=this.onError(!!l.silent,!!l.async);if(this.defaults.async===!0&&s.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof o>"u"||o===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));l.hooks&&(l.hooks.options=l,l.hooks.block=e);const d=l.hooks?l.hooks.provideLexer():e?Ae.lex:Ae.lexInline,I=l.hooks?l.hooks.provideParser():e?qe.parse:qe.parseInline;if(l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(o):o).then(S=>d(S,l)).then(S=>l.hooks?l.hooks.processAllTokens(S):S).then(S=>l.walkTokens?Promise.all(this.walkTokens(S,l.walkTokens)).then(()=>S):S).then(S=>I(S,l)).then(S=>l.hooks?l.hooks.postprocess(S):S).catch(c);try{l.hooks&&(o=l.hooks.preprocess(o));let S=d(o,l);l.hooks&&(S=l.hooks.processAllTokens(S)),l.walkTokens&&this.walkTokens(S,l.walkTokens);let y=I(S,l);return l.hooks&&(y=l.hooks.postprocess(y)),y}catch(S){return c(S)}}}onError(e,t){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const a="<p>An error occurred:</p><pre>"+ve(o.message+"",!0)+"</pre>";return t?Promise.resolve(a):a}if(t)return Promise.reject(o);throw o}}}const ci=new IC;function Tn(i,e){return ci.parse(i,e)}Tn.options=Tn.setOptions=function(i){return ci.setOptions(i),Tn.defaults=ci.defaults,Nc(Tn.defaults),Tn};Tn.getDefaults=qs;Tn.defaults=Ii;Tn.use=function(...i){return ci.use(...i),Tn.defaults=ci.defaults,Nc(Tn.defaults),Tn};Tn.walkTokens=function(i,e){return ci.walkTokens(i,e)};Tn.parseInline=ci.parseInline;Tn.Parser=qe;Tn.parser=qe.parse;Tn.Renderer=Ro;Tn.TextRenderer=js;Tn.Lexer=Ae;Tn.lexer=Ae.lex;Tn.Tokenizer=No;Tn.Hooks=fr;Tn.parse=Tn;Tn.options;Tn.setOptions;Tn.use;Tn.walkTokens;Tn.parseInline;qe.parse;Ae.lex;function SC(i){return new Ae().lex(i)}const hC=()=>({heading:PT,blockquote:LT,list:GT,list_item:$T,br:HT,code:KT,codespan:ZT,table:tF,html:oF,paragraph:uF,link:cF,text:fF,def:SF,del:TF,em:EF,hr:DF,strong:NF,image:_F,space:Yp,escape:Yp}),yC=()=>({baseUrl:"/",slugger:new Ac});function TC(){const i=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||i(e)},OT(()=>{console.warn=i})}function FC(i){let e,t;return e=new Mo({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Ht(e.$$.fragment)},l(o){gi(e.$$.fragment,o)},m(o,a){Qt(e,o,a),t=!0},p(o,[a]){const s={};a&1&&(s.tokens=o[0]),a&2&&(s.renderers=o[1]),a&4&&(s.options=o[2]),e.$set(s)},i(o){t||(nn(e.$$.fragment,o),t=!0)},o(o){sn(e.$$.fragment,o),t=!1},d(o){jt(e,o)}}}function CC(i,e,t){TC();let{source:o}=e,{options:a={}}=e,{renderers:s={}}=e,l,c,d;return i.$$set=I=>{"source"in I&&t(3,o=I.source),"options"in I&&t(4,a=I.options),"renderers"in I&&t(5,s=I.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,l=SC(o)),t(1,c={...hC(),...s}),t(2,d={...yC(),...a}))},[l,c,d,o,a,s]}class bb extends xn{constructor(e){super(),Ln(this,e,CC,FC,wn,{source:3,options:4,renderers:5})}}const br={joinUrlPaths:hr,isRelative:yr,generatePathSegment:vc};var lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function EC(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _o={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */_o.exports;(function(i,e){(function(){var t,o="4.17.21",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",I=500,S="__lodash_placeholder__",y=1,_=2,v=4,A=1,k=2,W=1,cn=2,vn=4,hn=8,Un=16,Hn=32,Kn=64,Pn=128,gt=256,B=512,z=30,se="...",Ut=800,zt=16,Ar=1,hi=2,Nr=3,at=1/0,$e=9007199254740991,yi=17976931348623157e292,Xt=NaN,we=4294967295,b=we-1,J=we>>>1,L=[["ary",Pn],["bind",W],["bindKey",cn],["curry",hn],["curryRight",Un],["flip",B],["partial",Hn],["partialRight",Kn],["rearg",gt]],q="[object Arguments]",fn="[object Array]",Mn="[object AsyncFunction]",gn="[object Boolean]",Re="[object Date]",qi="[object DOMException]",Pt="[object Error]",ie="[object Function]",ru="[object GeneratorFunction]",We="[object Map]",Gi="[object Number]",kd="[object Null]",It="[object Object]",ou="[object Promise]",xd="[object Proxy]",Ji="[object RegExp]",je="[object Set]",Vi="[object String]",wr="[object Symbol]",Ld="[object Undefined]",$i="[object WeakMap]",Md="[object WeakSet]",Wi="[object ArrayBuffer]",Ti="[object DataView]",Ko="[object Float32Array]",zo="[object Float64Array]",Xo="[object Int8Array]",Zo="[object Int16Array]",na="[object Int32Array]",ea="[object Uint8Array]",ta="[object Uint8ClampedArray]",ia="[object Uint16Array]",ra="[object Uint32Array]",qd=/\b__p \+= '';/g,Gd=/\b(__p \+=) '' \+/g,Jd=/(__e\(.*?\)|\b__t\)) \+\n'';/g,au=/&(?:amp|lt|gt|quot|#39);/g,su=/[&<>"']/g,Vd=RegExp(au.source),$d=RegExp(su.source),Wd=/<%-([\s\S]+?)%>/g,jd=/<%([\s\S]+?)%>/g,uu=/<%=([\s\S]+?)%>/g,Hd=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qd=/^\w*$/,Yd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oa=/[\\^$.*+?()[\]{}|]/g,Kd=RegExp(oa.source),aa=/^\s+/,zd=/\s/,Xd=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Zd=/\{\n\/\* \[wrapped with (.+)\] \*/,nm=/,? & /,em=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,tm=/[()=,{}\[\]\/\s]/,im=/\\(\\)?/g,rm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,lu=/\w*$/,om=/^[-+]0x[0-9a-f]+$/i,am=/^0b[01]+$/i,sm=/^\[object .+?Constructor\]$/,um=/^0o[0-7]+$/i,lm=/^(?:0|[1-9]\d*)$/,pm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rr=/($^)/,cm=/['\n\r\u2028\u2029\\]/g,_r="\\ud800-\\udfff",dm="\\u0300-\\u036f",mm="\\ufe20-\\ufe2f",fm="\\u20d0-\\u20ff",pu=dm+mm+fm,cu="\\u2700-\\u27bf",du="a-z\\xdf-\\xf6\\xf8-\\xff",gm="\\xac\\xb1\\xd7\\xf7",Im="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Sm="\\u2000-\\u206f",hm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",mu="A-Z\\xc0-\\xd6\\xd8-\\xde",fu="\\ufe0e\\ufe0f",gu=gm+Im+Sm+hm,sa="['’]",ym="["+_r+"]",Iu="["+gu+"]",Br="["+pu+"]",Su="\\d+",Tm="["+cu+"]",hu="["+du+"]",yu="[^"+_r+gu+Su+cu+du+mu+"]",ua="\\ud83c[\\udffb-\\udfff]",Fm="(?:"+Br+"|"+ua+")",Tu="[^"+_r+"]",la="(?:\\ud83c[\\udde6-\\uddff]){2}",pa="[\\ud800-\\udbff][\\udc00-\\udfff]",Fi="["+mu+"]",Fu="\\u200d",Cu="(?:"+hu+"|"+yu+")",Cm="(?:"+Fi+"|"+yu+")",Eu="(?:"+sa+"(?:d|ll|m|re|s|t|ve))?",Ou="(?:"+sa+"(?:D|LL|M|RE|S|T|VE))?",bu=Fm+"?",Du="["+fu+"]?",Em="(?:"+Fu+"(?:"+[Tu,la,pa].join("|")+")"+Du+bu+")*",Om="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",bm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vu=Du+bu+Em,Dm="(?:"+[Tm,la,pa].join("|")+")"+vu,vm="(?:"+[Tu+Br+"?",Br,la,pa,ym].join("|")+")",Am=RegExp(sa,"g"),Nm=RegExp(Br,"g"),ca=RegExp(ua+"(?="+ua+")|"+vm+vu,"g"),wm=RegExp([Fi+"?"+hu+"+"+Eu+"(?="+[Iu,Fi,"$"].join("|")+")",Cm+"+"+Ou+"(?="+[Iu,Fi+Cu,"$"].join("|")+")",Fi+"?"+Cu+"+"+Eu,Fi+"+"+Ou,bm,Om,Su,Dm].join("|"),"g"),Rm=RegExp("["+Fu+_r+pu+fu+"]"),_m=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Bm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Um=-1,An={};An[Ko]=An[zo]=An[Xo]=An[Zo]=An[na]=An[ea]=An[ta]=An[ia]=An[ra]=!0,An[q]=An[fn]=An[Wi]=An[gn]=An[Ti]=An[Re]=An[Pt]=An[ie]=An[We]=An[Gi]=An[It]=An[Ji]=An[je]=An[Vi]=An[$i]=!1;var bn={};bn[q]=bn[fn]=bn[Wi]=bn[Ti]=bn[gn]=bn[Re]=bn[Ko]=bn[zo]=bn[Xo]=bn[Zo]=bn[na]=bn[We]=bn[Gi]=bn[It]=bn[Ji]=bn[je]=bn[Vi]=bn[wr]=bn[ea]=bn[ta]=bn[ia]=bn[ra]=!0,bn[Pt]=bn[ie]=bn[$i]=!1;var Pm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},km={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Lm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mm=parseFloat,qm=parseInt,Au=typeof lr=="object"&&lr&&lr.Object===Object&&lr,Gm=typeof self=="object"&&self&&self.Object===Object&&self,ne=Au||Gm||Function("return this")(),da=e&&!e.nodeType&&e,Zt=da&&!0&&i&&!i.nodeType&&i,Nu=Zt&&Zt.exports===da,ma=Nu&&Au.process,_e=function(){try{var C=Zt&&Zt.require&&Zt.require("util").types;return C||ma&&ma.binding&&ma.binding("util")}catch{}}(),wu=_e&&_e.isArrayBuffer,Ru=_e&&_e.isDate,_u=_e&&_e.isMap,Bu=_e&&_e.isRegExp,Uu=_e&&_e.isSet,Pu=_e&&_e.isTypedArray;function Te(C,D,O){switch(O.length){case 0:return C.call(D);case 1:return C.call(D,O[0]);case 2:return C.call(D,O[0],O[1]);case 3:return C.call(D,O[0],O[1],O[2])}return C.apply(D,O)}function Jm(C,D,O,G){for(var X=-1,mn=C==null?0:C.length;++X<mn;){var Qn=C[X];D(G,Qn,O(Qn),C)}return G}function Be(C,D){for(var O=-1,G=C==null?0:C.length;++O<G&&D(C[O],O,C)!==!1;);return C}function Vm(C,D){for(var O=C==null?0:C.length;O--&&D(C[O],O,C)!==!1;);return C}function ku(C,D){for(var O=-1,G=C==null?0:C.length;++O<G;)if(!D(C[O],O,C))return!1;return!0}function kt(C,D){for(var O=-1,G=C==null?0:C.length,X=0,mn=[];++O<G;){var Qn=C[O];D(Qn,O,C)&&(mn[X++]=Qn)}return mn}function Ur(C,D){var O=C==null?0:C.length;return!!O&&Ci(C,D,0)>-1}function fa(C,D,O){for(var G=-1,X=C==null?0:C.length;++G<X;)if(O(D,C[G]))return!0;return!1}function Nn(C,D){for(var O=-1,G=C==null?0:C.length,X=Array(G);++O<G;)X[O]=D(C[O],O,C);return X}function xt(C,D){for(var O=-1,G=D.length,X=C.length;++O<G;)C[X+O]=D[O];return C}function ga(C,D,O,G){var X=-1,mn=C==null?0:C.length;for(G&&mn&&(O=C[++X]);++X<mn;)O=D(O,C[X],X,C);return O}function $m(C,D,O,G){var X=C==null?0:C.length;for(G&&X&&(O=C[--X]);X--;)O=D(O,C[X],X,C);return O}function Ia(C,D){for(var O=-1,G=C==null?0:C.length;++O<G;)if(D(C[O],O,C))return!0;return!1}var Wm=Sa("length");function jm(C){return C.split("")}function Hm(C){return C.match(em)||[]}function xu(C,D,O){var G;return O(C,function(X,mn,Qn){if(D(X,mn,Qn))return G=mn,!1}),G}function Pr(C,D,O,G){for(var X=C.length,mn=O+(G?1:-1);G?mn--:++mn<X;)if(D(C[mn],mn,C))return mn;return-1}function Ci(C,D,O){return D===D?af(C,D,O):Pr(C,Lu,O)}function Qm(C,D,O,G){for(var X=O-1,mn=C.length;++X<mn;)if(G(C[X],D))return X;return-1}function Lu(C){return C!==C}function Mu(C,D){var O=C==null?0:C.length;return O?ya(C,D)/O:Xt}function Sa(C){return function(D){return D==null?t:D[C]}}function ha(C){return function(D){return C==null?t:C[D]}}function qu(C,D,O,G,X){return X(C,function(mn,Qn,En){O=G?(G=!1,mn):D(O,mn,Qn,En)}),O}function Ym(C,D){var O=C.length;for(C.sort(D);O--;)C[O]=C[O].value;return C}function ya(C,D){for(var O,G=-1,X=C.length;++G<X;){var mn=D(C[G]);mn!==t&&(O=O===t?mn:O+mn)}return O}function Ta(C,D){for(var O=-1,G=Array(C);++O<C;)G[O]=D(O);return G}function Km(C,D){return Nn(D,function(O){return[O,C[O]]})}function Gu(C){return C&&C.slice(0,Wu(C)+1).replace(aa,"")}function Fe(C){return function(D){return C(D)}}function Fa(C,D){return Nn(D,function(O){return C[O]})}function ji(C,D){return C.has(D)}function Ju(C,D){for(var O=-1,G=C.length;++O<G&&Ci(D,C[O],0)>-1;);return O}function Vu(C,D){for(var O=C.length;O--&&Ci(D,C[O],0)>-1;);return O}function zm(C,D){for(var O=C.length,G=0;O--;)C[O]===D&&++G;return G}var Xm=ha(Pm),Zm=ha(km);function nf(C){return"\\"+Lm[C]}function ef(C,D){return C==null?t:C[D]}function Ei(C){return Rm.test(C)}function tf(C){return _m.test(C)}function rf(C){for(var D,O=[];!(D=C.next()).done;)O.push(D.value);return O}function Ca(C){var D=-1,O=Array(C.size);return C.forEach(function(G,X){O[++D]=[X,G]}),O}function $u(C,D){return function(O){return C(D(O))}}function Lt(C,D){for(var O=-1,G=C.length,X=0,mn=[];++O<G;){var Qn=C[O];(Qn===D||Qn===S)&&(C[O]=S,mn[X++]=O)}return mn}function kr(C){var D=-1,O=Array(C.size);return C.forEach(function(G){O[++D]=G}),O}function of(C){var D=-1,O=Array(C.size);return C.forEach(function(G){O[++D]=[G,G]}),O}function af(C,D,O){for(var G=O-1,X=C.length;++G<X;)if(C[G]===D)return G;return-1}function sf(C,D,O){for(var G=O+1;G--;)if(C[G]===D)return G;return G}function Oi(C){return Ei(C)?lf(C):Wm(C)}function He(C){return Ei(C)?pf(C):jm(C)}function Wu(C){for(var D=C.length;D--&&zd.test(C.charAt(D)););return D}var uf=ha(xm);function lf(C){for(var D=ca.lastIndex=0;ca.test(C);)++D;return D}function pf(C){return C.match(ca)||[]}function cf(C){return C.match(wm)||[]}var df=function C(D){D=D==null?ne:bi.defaults(ne.Object(),D,bi.pick(ne,Bm));var O=D.Array,G=D.Date,X=D.Error,mn=D.Function,Qn=D.Math,En=D.Object,Ea=D.RegExp,mf=D.String,Ue=D.TypeError,xr=O.prototype,ff=mn.prototype,Di=En.prototype,Lr=D["__core-js_shared__"],Mr=ff.toString,Sn=Di.hasOwnProperty,gf=0,ju=function(){var n=/[^.]+$/.exec(Lr&&Lr.keys&&Lr.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),qr=Di.toString,If=Mr.call(En),Sf=ne._,hf=Ea("^"+Mr.call(Sn).replace(oa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gr=Nu?D.Buffer:t,Mt=D.Symbol,Jr=D.Uint8Array,Hu=Gr?Gr.allocUnsafe:t,Vr=$u(En.getPrototypeOf,En),Qu=En.create,Yu=Di.propertyIsEnumerable,$r=xr.splice,Ku=Mt?Mt.isConcatSpreadable:t,Hi=Mt?Mt.iterator:t,ni=Mt?Mt.toStringTag:t,Wr=function(){try{var n=oi(En,"defineProperty");return n({},"",{}),n}catch{}}(),yf=D.clearTimeout!==ne.clearTimeout&&D.clearTimeout,Tf=G&&G.now!==ne.Date.now&&G.now,Ff=D.setTimeout!==ne.setTimeout&&D.setTimeout,jr=Qn.ceil,Hr=Qn.floor,Oa=En.getOwnPropertySymbols,Cf=Gr?Gr.isBuffer:t,zu=D.isFinite,Ef=xr.join,Of=$u(En.keys,En),Yn=Qn.max,re=Qn.min,bf=G.now,Df=D.parseInt,Xu=Qn.random,vf=xr.reverse,ba=oi(D,"DataView"),Qi=oi(D,"Map"),Da=oi(D,"Promise"),vi=oi(D,"Set"),Yi=oi(D,"WeakMap"),Ki=oi(En,"create"),Qr=Yi&&new Yi,Ai={},Af=ai(ba),Nf=ai(Qi),wf=ai(Da),Rf=ai(vi),_f=ai(Yi),Yr=Mt?Mt.prototype:t,zi=Yr?Yr.valueOf:t,Zu=Yr?Yr.toString:t;function f(n){if(kn(n)&&!Z(n)&&!(n instanceof un)){if(n instanceof Pe)return n;if(Sn.call(n,"__wrapped__"))return np(n)}return new Pe(n)}var Ni=function(){function n(){}return function(r){if(!Rn(r))return{};if(Qu)return Qu(r);n.prototype=r;var u=new n;return n.prototype=t,u}}();function Kr(){}function Pe(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}f.templateSettings={escape:Wd,evaluate:jd,interpolate:uu,variable:"",imports:{_:f}},f.prototype=Kr.prototype,f.prototype.constructor=f,Pe.prototype=Ni(Kr.prototype),Pe.prototype.constructor=Pe;function un(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=we,this.__views__=[]}function Bf(){var n=new un(this.__wrapped__);return n.__actions__=me(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=me(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=me(this.__views__),n}function Uf(){if(this.__filtered__){var n=new un(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Pf(){var n=this.__wrapped__.value(),r=this.__dir__,u=Z(n),p=r<0,m=u?n.length:0,g=Hg(0,m,this.__views__),h=g.start,T=g.end,E=T-h,N=p?T:h-1,w=this.__iteratees__,U=w.length,x=0,$=re(E,this.__takeCount__);if(!u||!p&&m==E&&$==E)return El(n,this.__actions__);var Q=[];n:for(;E--&&x<$;){N+=r;for(var tn=-1,Y=n[N];++tn<U;){var an=w[tn],pn=an.iteratee,Oe=an.type,pe=pn(Y);if(Oe==hi)Y=pe;else if(!pe){if(Oe==Ar)continue n;break n}}Q[x++]=Y}return Q}un.prototype=Ni(Kr.prototype),un.prototype.constructor=un;function ei(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var p=n[r];this.set(p[0],p[1])}}function kf(){this.__data__=Ki?Ki(null):{},this.size=0}function xf(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function Lf(n){var r=this.__data__;if(Ki){var u=r[n];return u===d?t:u}return Sn.call(r,n)?r[n]:t}function Mf(n){var r=this.__data__;return Ki?r[n]!==t:Sn.call(r,n)}function qf(n,r){var u=this.__data__;return this.size+=this.has(n)?0:1,u[n]=Ki&&r===t?d:r,this}ei.prototype.clear=kf,ei.prototype.delete=xf,ei.prototype.get=Lf,ei.prototype.has=Mf,ei.prototype.set=qf;function St(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var p=n[r];this.set(p[0],p[1])}}function Gf(){this.__data__=[],this.size=0}function Jf(n){var r=this.__data__,u=zr(r,n);if(u<0)return!1;var p=r.length-1;return u==p?r.pop():$r.call(r,u,1),--this.size,!0}function Vf(n){var r=this.__data__,u=zr(r,n);return u<0?t:r[u][1]}function $f(n){return zr(this.__data__,n)>-1}function Wf(n,r){var u=this.__data__,p=zr(u,n);return p<0?(++this.size,u.push([n,r])):u[p][1]=r,this}St.prototype.clear=Gf,St.prototype.delete=Jf,St.prototype.get=Vf,St.prototype.has=$f,St.prototype.set=Wf;function ht(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var p=n[r];this.set(p[0],p[1])}}function jf(){this.size=0,this.__data__={hash:new ei,map:new(Qi||St),string:new ei}}function Hf(n){var r=lo(this,n).delete(n);return this.size-=r?1:0,r}function Qf(n){return lo(this,n).get(n)}function Yf(n){return lo(this,n).has(n)}function Kf(n,r){var u=lo(this,n),p=u.size;return u.set(n,r),this.size+=u.size==p?0:1,this}ht.prototype.clear=jf,ht.prototype.delete=Hf,ht.prototype.get=Qf,ht.prototype.has=Yf,ht.prototype.set=Kf;function ti(n){var r=-1,u=n==null?0:n.length;for(this.__data__=new ht;++r<u;)this.add(n[r])}function zf(n){return this.__data__.set(n,d),this}function Xf(n){return this.__data__.has(n)}ti.prototype.add=ti.prototype.push=zf,ti.prototype.has=Xf;function Qe(n){var r=this.__data__=new St(n);this.size=r.size}function Zf(){this.__data__=new St,this.size=0}function ng(n){var r=this.__data__,u=r.delete(n);return this.size=r.size,u}function eg(n){return this.__data__.get(n)}function tg(n){return this.__data__.has(n)}function ig(n,r){var u=this.__data__;if(u instanceof St){var p=u.__data__;if(!Qi||p.length<a-1)return p.push([n,r]),this.size=++u.size,this;u=this.__data__=new ht(p)}return u.set(n,r),this.size=u.size,this}Qe.prototype.clear=Zf,Qe.prototype.delete=ng,Qe.prototype.get=eg,Qe.prototype.has=tg,Qe.prototype.set=ig;function nl(n,r){var u=Z(n),p=!u&&si(n),m=!u&&!p&&$t(n),g=!u&&!p&&!m&&Bi(n),h=u||p||m||g,T=h?Ta(n.length,mf):[],E=T.length;for(var N in n)(r||Sn.call(n,N))&&!(h&&(N=="length"||m&&(N=="offset"||N=="parent")||g&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||Ct(N,E)))&&T.push(N);return T}function el(n){var r=n.length;return r?n[xa(0,r-1)]:t}function rg(n,r){return po(me(n),ii(r,0,n.length))}function og(n){return po(me(n))}function va(n,r,u){(u!==t&&!Ye(n[r],u)||u===t&&!(r in n))&&yt(n,r,u)}function Xi(n,r,u){var p=n[r];(!(Sn.call(n,r)&&Ye(p,u))||u===t&&!(r in n))&&yt(n,r,u)}function zr(n,r){for(var u=n.length;u--;)if(Ye(n[u][0],r))return u;return-1}function ag(n,r,u,p){return qt(n,function(m,g,h){r(p,m,u(m),h)}),p}function tl(n,r){return n&&ut(r,zn(r),n)}function sg(n,r){return n&&ut(r,ge(r),n)}function yt(n,r,u){r=="__proto__"&&Wr?Wr(n,r,{configurable:!0,enumerable:!0,value:u,writable:!0}):n[r]=u}function Aa(n,r){for(var u=-1,p=r.length,m=O(p),g=n==null;++u<p;)m[u]=g?t:us(n,r[u]);return m}function ii(n,r,u){return n===n&&(u!==t&&(n=n<=u?n:u),r!==t&&(n=n>=r?n:r)),n}function ke(n,r,u,p,m,g){var h,T=r&y,E=r&_,N=r&v;if(u&&(h=m?u(n,p,m,g):u(n)),h!==t)return h;if(!Rn(n))return n;var w=Z(n);if(w){if(h=Yg(n),!T)return me(n,h)}else{var U=oe(n),x=U==ie||U==ru;if($t(n))return Dl(n,T);if(U==It||U==q||x&&!m){if(h=E||x?{}:Wl(n),!T)return E?Lg(n,sg(h,n)):xg(n,tl(h,n))}else{if(!bn[U])return m?n:{};h=Kg(n,U,T)}}g||(g=new Qe);var $=g.get(n);if($)return $;g.set(n,h),Tp(n)?n.forEach(function(Y){h.add(ke(Y,r,u,Y,n,g))}):hp(n)&&n.forEach(function(Y,an){h.set(an,ke(Y,r,u,an,n,g))});var Q=N?E?Qa:Ha:E?ge:zn,tn=w?t:Q(n);return Be(tn||n,function(Y,an){tn&&(an=Y,Y=n[an]),Xi(h,an,ke(Y,r,u,an,n,g))}),h}function ug(n){var r=zn(n);return function(u){return il(u,n,r)}}function il(n,r,u){var p=u.length;if(n==null)return!p;for(n=En(n);p--;){var m=u[p],g=r[m],h=n[m];if(h===t&&!(m in n)||!g(h))return!1}return!0}function rl(n,r,u){if(typeof n!="function")throw new Ue(l);return or(function(){n.apply(t,u)},r)}function Zi(n,r,u,p){var m=-1,g=Ur,h=!0,T=n.length,E=[],N=r.length;if(!T)return E;u&&(r=Nn(r,Fe(u))),p?(g=fa,h=!1):r.length>=a&&(g=ji,h=!1,r=new ti(r));n:for(;++m<T;){var w=n[m],U=u==null?w:u(w);if(w=p||w!==0?w:0,h&&U===U){for(var x=N;x--;)if(r[x]===U)continue n;E.push(w)}else g(r,U,p)||E.push(w)}return E}var qt=Rl(st),ol=Rl(wa,!0);function lg(n,r){var u=!0;return qt(n,function(p,m,g){return u=!!r(p,m,g),u}),u}function Xr(n,r,u){for(var p=-1,m=n.length;++p<m;){var g=n[p],h=r(g);if(h!=null&&(T===t?h===h&&!Ee(h):u(h,T)))var T=h,E=g}return E}function pg(n,r,u,p){var m=n.length;for(u=en(u),u<0&&(u=-u>m?0:m+u),p=p===t||p>m?m:en(p),p<0&&(p+=m),p=u>p?0:Cp(p);u<p;)n[u++]=r;return n}function al(n,r){var u=[];return qt(n,function(p,m,g){r(p,m,g)&&u.push(p)}),u}function ee(n,r,u,p,m){var g=-1,h=n.length;for(u||(u=Xg),m||(m=[]);++g<h;){var T=n[g];r>0&&u(T)?r>1?ee(T,r-1,u,p,m):xt(m,T):p||(m[m.length]=T)}return m}var Na=_l(),sl=_l(!0);function st(n,r){return n&&Na(n,r,zn)}function wa(n,r){return n&&sl(n,r,zn)}function Zr(n,r){return kt(r,function(u){return Et(n[u])})}function ri(n,r){r=Jt(r,n);for(var u=0,p=r.length;n!=null&&u<p;)n=n[lt(r[u++])];return u&&u==p?n:t}function ul(n,r,u){var p=r(n);return Z(n)?p:xt(p,u(n))}function ue(n){return n==null?n===t?Ld:kd:ni&&ni in En(n)?jg(n):oI(n)}function Ra(n,r){return n>r}function cg(n,r){return n!=null&&Sn.call(n,r)}function dg(n,r){return n!=null&&r in En(n)}function mg(n,r,u){return n>=re(r,u)&&n<Yn(r,u)}function _a(n,r,u){for(var p=u?fa:Ur,m=n[0].length,g=n.length,h=g,T=O(g),E=1/0,N=[];h--;){var w=n[h];h&&r&&(w=Nn(w,Fe(r))),E=re(w.length,E),T[h]=!u&&(r||m>=120&&w.length>=120)?new ti(h&&w):t}w=n[0];var U=-1,x=T[0];n:for(;++U<m&&N.length<E;){var $=w[U],Q=r?r($):$;if($=u||$!==0?$:0,!(x?ji(x,Q):p(N,Q,u))){for(h=g;--h;){var tn=T[h];if(!(tn?ji(tn,Q):p(n[h],Q,u)))continue n}x&&x.push(Q),N.push($)}}return N}function fg(n,r,u,p){return st(n,function(m,g,h){r(p,u(m),g,h)}),p}function nr(n,r,u){r=Jt(r,n),n=Yl(n,r);var p=n==null?n:n[lt(Le(r))];return p==null?t:Te(p,n,u)}function ll(n){return kn(n)&&ue(n)==q}function gg(n){return kn(n)&&ue(n)==Wi}function Ig(n){return kn(n)&&ue(n)==Re}function er(n,r,u,p,m){return n===r?!0:n==null||r==null||!kn(n)&&!kn(r)?n!==n&&r!==r:Sg(n,r,u,p,er,m)}function Sg(n,r,u,p,m,g){var h=Z(n),T=Z(r),E=h?fn:oe(n),N=T?fn:oe(r);E=E==q?It:E,N=N==q?It:N;var w=E==It,U=N==It,x=E==N;if(x&&$t(n)){if(!$t(r))return!1;h=!0,w=!1}if(x&&!w)return g||(g=new Qe),h||Bi(n)?Jl(n,r,u,p,m,g):$g(n,r,E,u,p,m,g);if(!(u&A)){var $=w&&Sn.call(n,"__wrapped__"),Q=U&&Sn.call(r,"__wrapped__");if($||Q){var tn=$?n.value():n,Y=Q?r.value():r;return g||(g=new Qe),m(tn,Y,u,p,g)}}return x?(g||(g=new Qe),Wg(n,r,u,p,m,g)):!1}function hg(n){return kn(n)&&oe(n)==We}function Ba(n,r,u,p){var m=u.length,g=m,h=!p;if(n==null)return!g;for(n=En(n);m--;){var T=u[m];if(h&&T[2]?T[1]!==n[T[0]]:!(T[0]in n))return!1}for(;++m<g;){T=u[m];var E=T[0],N=n[E],w=T[1];if(h&&T[2]){if(N===t&&!(E in n))return!1}else{var U=new Qe;if(p)var x=p(N,w,E,n,r,U);if(!(x===t?er(w,N,A|k,p,U):x))return!1}}return!0}function pl(n){if(!Rn(n)||nI(n))return!1;var r=Et(n)?hf:sm;return r.test(ai(n))}function yg(n){return kn(n)&&ue(n)==Ji}function Tg(n){return kn(n)&&oe(n)==je}function Fg(n){return kn(n)&&So(n.length)&&!!An[ue(n)]}function cl(n){return typeof n=="function"?n:n==null?Ie:typeof n=="object"?Z(n)?fl(n[0],n[1]):ml(n):Bp(n)}function Ua(n){if(!rr(n))return Of(n);var r=[];for(var u in En(n))Sn.call(n,u)&&u!="constructor"&&r.push(u);return r}function Cg(n){if(!Rn(n))return rI(n);var r=rr(n),u=[];for(var p in n)p=="constructor"&&(r||!Sn.call(n,p))||u.push(p);return u}function Pa(n,r){return n<r}function dl(n,r){var u=-1,p=fe(n)?O(n.length):[];return qt(n,function(m,g,h){p[++u]=r(m,g,h)}),p}function ml(n){var r=Ka(n);return r.length==1&&r[0][2]?Hl(r[0][0],r[0][1]):function(u){return u===n||Ba(u,n,r)}}function fl(n,r){return Xa(n)&&jl(r)?Hl(lt(n),r):function(u){var p=us(u,n);return p===t&&p===r?ls(u,n):er(r,p,A|k)}}function no(n,r,u,p,m){n!==r&&Na(r,function(g,h){if(m||(m=new Qe),Rn(g))Eg(n,r,h,u,no,p,m);else{var T=p?p(ns(n,h),g,h+"",n,r,m):t;T===t&&(T=g),va(n,h,T)}},ge)}function Eg(n,r,u,p,m,g,h){var T=ns(n,u),E=ns(r,u),N=h.get(E);if(N){va(n,u,N);return}var w=g?g(T,E,u+"",n,r,h):t,U=w===t;if(U){var x=Z(E),$=!x&&$t(E),Q=!x&&!$&&Bi(E);w=E,x||$||Q?Z(T)?w=T:qn(T)?w=me(T):$?(U=!1,w=Dl(E,!0)):Q?(U=!1,w=vl(E,!0)):w=[]:ar(E)||si(E)?(w=T,si(T)?w=Ep(T):(!Rn(T)||Et(T))&&(w=Wl(E))):U=!1}U&&(h.set(E,w),m(w,E,p,g,h),h.delete(E)),va(n,u,w)}function gl(n,r){var u=n.length;if(u)return r+=r<0?u:0,Ct(r,u)?n[r]:t}function Il(n,r,u){r.length?r=Nn(r,function(g){return Z(g)?function(h){return ri(h,g.length===1?g[0]:g)}:g}):r=[Ie];var p=-1;r=Nn(r,Fe(H()));var m=dl(n,function(g,h,T){var E=Nn(r,function(N){return N(g)});return{criteria:E,index:++p,value:g}});return Ym(m,function(g,h){return kg(g,h,u)})}function Og(n,r){return Sl(n,r,function(u,p){return ls(n,p)})}function Sl(n,r,u){for(var p=-1,m=r.length,g={};++p<m;){var h=r[p],T=ri(n,h);u(T,h)&&tr(g,Jt(h,n),T)}return g}function bg(n){return function(r){return ri(r,n)}}function ka(n,r,u,p){var m=p?Qm:Ci,g=-1,h=r.length,T=n;for(n===r&&(r=me(r)),u&&(T=Nn(n,Fe(u)));++g<h;)for(var E=0,N=r[g],w=u?u(N):N;(E=m(T,w,E,p))>-1;)T!==n&&$r.call(T,E,1),$r.call(n,E,1);return n}function hl(n,r){for(var u=n?r.length:0,p=u-1;u--;){var m=r[u];if(u==p||m!==g){var g=m;Ct(m)?$r.call(n,m,1):qa(n,m)}}return n}function xa(n,r){return n+Hr(Xu()*(r-n+1))}function Dg(n,r,u,p){for(var m=-1,g=Yn(jr((r-n)/(u||1)),0),h=O(g);g--;)h[p?g:++m]=n,n+=u;return h}function La(n,r){var u="";if(!n||r<1||r>$e)return u;do r%2&&(u+=n),r=Hr(r/2),r&&(n+=n);while(r);return u}function rn(n,r){return es(Ql(n,r,Ie),n+"")}function vg(n){return el(Ui(n))}function Ag(n,r){var u=Ui(n);return po(u,ii(r,0,u.length))}function tr(n,r,u,p){if(!Rn(n))return n;r=Jt(r,n);for(var m=-1,g=r.length,h=g-1,T=n;T!=null&&++m<g;){var E=lt(r[m]),N=u;if(E==="__proto__"||E==="constructor"||E==="prototype")return n;if(m!=h){var w=T[E];N=p?p(w,E,T):t,N===t&&(N=Rn(w)?w:Ct(r[m+1])?[]:{})}Xi(T,E,N),T=T[E]}return n}var yl=Qr?function(n,r){return Qr.set(n,r),n}:Ie,Ng=Wr?function(n,r){return Wr(n,"toString",{configurable:!0,enumerable:!1,value:cs(r),writable:!0})}:Ie;function wg(n){return po(Ui(n))}function xe(n,r,u){var p=-1,m=n.length;r<0&&(r=-r>m?0:m+r),u=u>m?m:u,u<0&&(u+=m),m=r>u?0:u-r>>>0,r>>>=0;for(var g=O(m);++p<m;)g[p]=n[p+r];return g}function Rg(n,r){var u;return qt(n,function(p,m,g){return u=r(p,m,g),!u}),!!u}function eo(n,r,u){var p=0,m=n==null?p:n.length;if(typeof r=="number"&&r===r&&m<=J){for(;p<m;){var g=p+m>>>1,h=n[g];h!==null&&!Ee(h)&&(u?h<=r:h<r)?p=g+1:m=g}return m}return Ma(n,r,Ie,u)}function Ma(n,r,u,p){var m=0,g=n==null?0:n.length;if(g===0)return 0;r=u(r);for(var h=r!==r,T=r===null,E=Ee(r),N=r===t;m<g;){var w=Hr((m+g)/2),U=u(n[w]),x=U!==t,$=U===null,Q=U===U,tn=Ee(U);if(h)var Y=p||Q;else N?Y=Q&&(p||x):T?Y=Q&&x&&(p||!$):E?Y=Q&&x&&!$&&(p||!tn):$||tn?Y=!1:Y=p?U<=r:U<r;Y?m=w+1:g=w}return re(g,b)}function Tl(n,r){for(var u=-1,p=n.length,m=0,g=[];++u<p;){var h=n[u],T=r?r(h):h;if(!u||!Ye(T,E)){var E=T;g[m++]=h===0?0:h}}return g}function Fl(n){return typeof n=="number"?n:Ee(n)?Xt:+n}function Ce(n){if(typeof n=="string")return n;if(Z(n))return Nn(n,Ce)+"";if(Ee(n))return Zu?Zu.call(n):"";var r=n+"";return r=="0"&&1/n==-at?"-0":r}function Gt(n,r,u){var p=-1,m=Ur,g=n.length,h=!0,T=[],E=T;if(u)h=!1,m=fa;else if(g>=a){var N=r?null:Jg(n);if(N)return kr(N);h=!1,m=ji,E=new ti}else E=r?[]:T;n:for(;++p<g;){var w=n[p],U=r?r(w):w;if(w=u||w!==0?w:0,h&&U===U){for(var x=E.length;x--;)if(E[x]===U)continue n;r&&E.push(U),T.push(w)}else m(E,U,u)||(E!==T&&E.push(U),T.push(w))}return T}function qa(n,r){return r=Jt(r,n),n=Yl(n,r),n==null||delete n[lt(Le(r))]}function Cl(n,r,u,p){return tr(n,r,u(ri(n,r)),p)}function to(n,r,u,p){for(var m=n.length,g=p?m:-1;(p?g--:++g<m)&&r(n[g],g,n););return u?xe(n,p?0:g,p?g+1:m):xe(n,p?g+1:0,p?m:g)}function El(n,r){var u=n;return u instanceof un&&(u=u.value()),ga(r,function(p,m){return m.func.apply(m.thisArg,xt([p],m.args))},u)}function Ga(n,r,u){var p=n.length;if(p<2)return p?Gt(n[0]):[];for(var m=-1,g=O(p);++m<p;)for(var h=n[m],T=-1;++T<p;)T!=m&&(g[m]=Zi(g[m]||h,n[T],r,u));return Gt(ee(g,1),r,u)}function Ol(n,r,u){for(var p=-1,m=n.length,g=r.length,h={};++p<m;){var T=p<g?r[p]:t;u(h,n[p],T)}return h}function Ja(n){return qn(n)?n:[]}function Va(n){return typeof n=="function"?n:Ie}function Jt(n,r){return Z(n)?n:Xa(n,r)?[n]:Zl(In(n))}var _g=rn;function Vt(n,r,u){var p=n.length;return u=u===t?p:u,!r&&u>=p?n:xe(n,r,u)}var bl=yf||function(n){return ne.clearTimeout(n)};function Dl(n,r){if(r)return n.slice();var u=n.length,p=Hu?Hu(u):new n.constructor(u);return n.copy(p),p}function $a(n){var r=new n.constructor(n.byteLength);return new Jr(r).set(new Jr(n)),r}function Bg(n,r){var u=r?$a(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.byteLength)}function Ug(n){var r=new n.constructor(n.source,lu.exec(n));return r.lastIndex=n.lastIndex,r}function Pg(n){return zi?En(zi.call(n)):{}}function vl(n,r){var u=r?$a(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.length)}function Al(n,r){if(n!==r){var u=n!==t,p=n===null,m=n===n,g=Ee(n),h=r!==t,T=r===null,E=r===r,N=Ee(r);if(!T&&!N&&!g&&n>r||g&&h&&E&&!T&&!N||p&&h&&E||!u&&E||!m)return 1;if(!p&&!g&&!N&&n<r||N&&u&&m&&!p&&!g||T&&u&&m||!h&&m||!E)return-1}return 0}function kg(n,r,u){for(var p=-1,m=n.criteria,g=r.criteria,h=m.length,T=u.length;++p<h;){var E=Al(m[p],g[p]);if(E){if(p>=T)return E;var N=u[p];return E*(N=="desc"?-1:1)}}return n.index-r.index}function Nl(n,r,u,p){for(var m=-1,g=n.length,h=u.length,T=-1,E=r.length,N=Yn(g-h,0),w=O(E+N),U=!p;++T<E;)w[T]=r[T];for(;++m<h;)(U||m<g)&&(w[u[m]]=n[m]);for(;N--;)w[T++]=n[m++];return w}function wl(n,r,u,p){for(var m=-1,g=n.length,h=-1,T=u.length,E=-1,N=r.length,w=Yn(g-T,0),U=O(w+N),x=!p;++m<w;)U[m]=n[m];for(var $=m;++E<N;)U[$+E]=r[E];for(;++h<T;)(x||m<g)&&(U[$+u[h]]=n[m++]);return U}function me(n,r){var u=-1,p=n.length;for(r||(r=O(p));++u<p;)r[u]=n[u];return r}function ut(n,r,u,p){var m=!u;u||(u={});for(var g=-1,h=r.length;++g<h;){var T=r[g],E=p?p(u[T],n[T],T,u,n):t;E===t&&(E=n[T]),m?yt(u,T,E):Xi(u,T,E)}return u}function xg(n,r){return ut(n,za(n),r)}function Lg(n,r){return ut(n,Vl(n),r)}function io(n,r){return function(u,p){var m=Z(u)?Jm:ag,g=r?r():{};return m(u,n,H(p,2),g)}}function wi(n){return rn(function(r,u){var p=-1,m=u.length,g=m>1?u[m-1]:t,h=m>2?u[2]:t;for(g=n.length>3&&typeof g=="function"?(m--,g):t,h&&le(u[0],u[1],h)&&(g=m<3?t:g,m=1),r=En(r);++p<m;){var T=u[p];T&&n(r,T,p,g)}return r})}function Rl(n,r){return function(u,p){if(u==null)return u;if(!fe(u))return n(u,p);for(var m=u.length,g=r?m:-1,h=En(u);(r?g--:++g<m)&&p(h[g],g,h)!==!1;);return u}}function _l(n){return function(r,u,p){for(var m=-1,g=En(r),h=p(r),T=h.length;T--;){var E=h[n?T:++m];if(u(g[E],E,g)===!1)break}return r}}function Mg(n,r,u){var p=r&W,m=ir(n);function g(){var h=this&&this!==ne&&this instanceof g?m:n;return h.apply(p?u:this,arguments)}return g}function Bl(n){return function(r){r=In(r);var u=Ei(r)?He(r):t,p=u?u[0]:r.charAt(0),m=u?Vt(u,1).join(""):r.slice(1);return p[n]()+m}}function Ri(n){return function(r){return ga(Rp(wp(r).replace(Am,"")),n,"")}}function ir(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var u=Ni(n.prototype),p=n.apply(u,r);return Rn(p)?p:u}}function qg(n,r,u){var p=ir(n);function m(){for(var g=arguments.length,h=O(g),T=g,E=_i(m);T--;)h[T]=arguments[T];var N=g<3&&h[0]!==E&&h[g-1]!==E?[]:Lt(h,E);if(g-=N.length,g<u)return Ll(n,r,ro,m.placeholder,t,h,N,t,t,u-g);var w=this&&this!==ne&&this instanceof m?p:n;return Te(w,this,h)}return m}function Ul(n){return function(r,u,p){var m=En(r);if(!fe(r)){var g=H(u,3);r=zn(r),u=function(T){return g(m[T],T,m)}}var h=n(r,u,p);return h>-1?m[g?r[h]:h]:t}}function Pl(n){return Ft(function(r){var u=r.length,p=u,m=Pe.prototype.thru;for(n&&r.reverse();p--;){var g=r[p];if(typeof g!="function")throw new Ue(l);if(m&&!h&&uo(g)=="wrapper")var h=new Pe([],!0)}for(p=h?p:u;++p<u;){g=r[p];var T=uo(g),E=T=="wrapper"?Ya(g):t;E&&Za(E[0])&&E[1]==(Pn|hn|Hn|gt)&&!E[4].length&&E[9]==1?h=h[uo(E[0])].apply(h,E[3]):h=g.length==1&&Za(g)?h[T]():h.thru(g)}return function(){var N=arguments,w=N[0];if(h&&N.length==1&&Z(w))return h.plant(w).value();for(var U=0,x=u?r[U].apply(this,N):w;++U<u;)x=r[U].call(this,x);return x}})}function ro(n,r,u,p,m,g,h,T,E,N){var w=r&Pn,U=r&W,x=r&cn,$=r&(hn|Un),Q=r&B,tn=x?t:ir(n);function Y(){for(var an=arguments.length,pn=O(an),Oe=an;Oe--;)pn[Oe]=arguments[Oe];if($)var pe=_i(Y),be=zm(pn,pe);if(p&&(pn=Nl(pn,p,m,$)),g&&(pn=wl(pn,g,h,$)),an-=be,$&&an<N){var Gn=Lt(pn,pe);return Ll(n,r,ro,Y.placeholder,u,pn,Gn,T,E,N-an)}var Ke=U?u:this,bt=x?Ke[n]:n;return an=pn.length,T?pn=aI(pn,T):Q&&an>1&&pn.reverse(),w&&E<an&&(pn.length=E),this&&this!==ne&&this instanceof Y&&(bt=tn||ir(bt)),bt.apply(Ke,pn)}return Y}function kl(n,r){return function(u,p){return fg(u,n,r(p),{})}}function oo(n,r){return function(u,p){var m;if(u===t&&p===t)return r;if(u!==t&&(m=u),p!==t){if(m===t)return p;typeof u=="string"||typeof p=="string"?(u=Ce(u),p=Ce(p)):(u=Fl(u),p=Fl(p)),m=n(u,p)}return m}}function Wa(n){return Ft(function(r){return r=Nn(r,Fe(H())),rn(function(u){var p=this;return n(r,function(m){return Te(m,p,u)})})})}function ao(n,r){r=r===t?" ":Ce(r);var u=r.length;if(u<2)return u?La(r,n):r;var p=La(r,jr(n/Oi(r)));return Ei(r)?Vt(He(p),0,n).join(""):p.slice(0,n)}function Gg(n,r,u,p){var m=r&W,g=ir(n);function h(){for(var T=-1,E=arguments.length,N=-1,w=p.length,U=O(w+E),x=this&&this!==ne&&this instanceof h?g:n;++N<w;)U[N]=p[N];for(;E--;)U[N++]=arguments[++T];return Te(x,m?u:this,U)}return h}function xl(n){return function(r,u,p){return p&&typeof p!="number"&&le(r,u,p)&&(u=p=t),r=Ot(r),u===t?(u=r,r=0):u=Ot(u),p=p===t?r<u?1:-1:Ot(p),Dg(r,u,p,n)}}function so(n){return function(r,u){return typeof r=="string"&&typeof u=="string"||(r=Me(r),u=Me(u)),n(r,u)}}function Ll(n,r,u,p,m,g,h,T,E,N){var w=r&hn,U=w?h:t,x=w?t:h,$=w?g:t,Q=w?t:g;r|=w?Hn:Kn,r&=~(w?Kn:Hn),r&vn||(r&=-4);var tn=[n,r,m,$,U,Q,x,T,E,N],Y=u.apply(t,tn);return Za(n)&&Kl(Y,tn),Y.placeholder=p,zl(Y,n,r)}function ja(n){var r=Qn[n];return function(u,p){if(u=Me(u),p=p==null?0:re(en(p),292),p&&zu(u)){var m=(In(u)+"e").split("e"),g=r(m[0]+"e"+(+m[1]+p));return m=(In(g)+"e").split("e"),+(m[0]+"e"+(+m[1]-p))}return r(u)}}var Jg=vi&&1/kr(new vi([,-0]))[1]==at?function(n){return new vi(n)}:fs;function Ml(n){return function(r){var u=oe(r);return u==We?Ca(r):u==je?of(r):Km(r,n(r))}}function Tt(n,r,u,p,m,g,h,T){var E=r&cn;if(!E&&typeof n!="function")throw new Ue(l);var N=p?p.length:0;if(N||(r&=-97,p=m=t),h=h===t?h:Yn(en(h),0),T=T===t?T:en(T),N-=m?m.length:0,r&Kn){var w=p,U=m;p=m=t}var x=E?t:Ya(n),$=[n,r,u,p,m,w,U,g,h,T];if(x&&iI($,x),n=$[0],r=$[1],u=$[2],p=$[3],m=$[4],T=$[9]=$[9]===t?E?0:n.length:Yn($[9]-N,0),!T&&r&(hn|Un)&&(r&=-25),!r||r==W)var Q=Mg(n,r,u);else r==hn||r==Un?Q=qg(n,r,T):(r==Hn||r==(W|Hn))&&!m.length?Q=Gg(n,r,u,p):Q=ro.apply(t,$);var tn=x?yl:Kl;return zl(tn(Q,$),n,r)}function ql(n,r,u,p){return n===t||Ye(n,Di[u])&&!Sn.call(p,u)?r:n}function Gl(n,r,u,p,m,g){return Rn(n)&&Rn(r)&&(g.set(r,n),no(n,r,t,Gl,g),g.delete(r)),n}function Vg(n){return ar(n)?t:n}function Jl(n,r,u,p,m,g){var h=u&A,T=n.length,E=r.length;if(T!=E&&!(h&&E>T))return!1;var N=g.get(n),w=g.get(r);if(N&&w)return N==r&&w==n;var U=-1,x=!0,$=u&k?new ti:t;for(g.set(n,r),g.set(r,n);++U<T;){var Q=n[U],tn=r[U];if(p)var Y=h?p(tn,Q,U,r,n,g):p(Q,tn,U,n,r,g);if(Y!==t){if(Y)continue;x=!1;break}if($){if(!Ia(r,function(an,pn){if(!ji($,pn)&&(Q===an||m(Q,an,u,p,g)))return $.push(pn)})){x=!1;break}}else if(!(Q===tn||m(Q,tn,u,p,g))){x=!1;break}}return g.delete(n),g.delete(r),x}function $g(n,r,u,p,m,g,h){switch(u){case Ti:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Wi:return!(n.byteLength!=r.byteLength||!g(new Jr(n),new Jr(r)));case gn:case Re:case Gi:return Ye(+n,+r);case Pt:return n.name==r.name&&n.message==r.message;case Ji:case Vi:return n==r+"";case We:var T=Ca;case je:var E=p&A;if(T||(T=kr),n.size!=r.size&&!E)return!1;var N=h.get(n);if(N)return N==r;p|=k,h.set(n,r);var w=Jl(T(n),T(r),p,m,g,h);return h.delete(n),w;case wr:if(zi)return zi.call(n)==zi.call(r)}return!1}function Wg(n,r,u,p,m,g){var h=u&A,T=Ha(n),E=T.length,N=Ha(r),w=N.length;if(E!=w&&!h)return!1;for(var U=E;U--;){var x=T[U];if(!(h?x in r:Sn.call(r,x)))return!1}var $=g.get(n),Q=g.get(r);if($&&Q)return $==r&&Q==n;var tn=!0;g.set(n,r),g.set(r,n);for(var Y=h;++U<E;){x=T[U];var an=n[x],pn=r[x];if(p)var Oe=h?p(pn,an,x,r,n,g):p(an,pn,x,n,r,g);if(!(Oe===t?an===pn||m(an,pn,u,p,g):Oe)){tn=!1;break}Y||(Y=x=="constructor")}if(tn&&!Y){var pe=n.constructor,be=r.constructor;pe!=be&&"constructor"in n&&"constructor"in r&&!(typeof pe=="function"&&pe instanceof pe&&typeof be=="function"&&be instanceof be)&&(tn=!1)}return g.delete(n),g.delete(r),tn}function Ft(n){return es(Ql(n,t,ip),n+"")}function Ha(n){return ul(n,zn,za)}function Qa(n){return ul(n,ge,Vl)}var Ya=Qr?function(n){return Qr.get(n)}:fs;function uo(n){for(var r=n.name+"",u=Ai[r],p=Sn.call(Ai,r)?u.length:0;p--;){var m=u[p],g=m.func;if(g==null||g==n)return m.name}return r}function _i(n){var r=Sn.call(f,"placeholder")?f:n;return r.placeholder}function H(){var n=f.iteratee||ds;return n=n===ds?cl:n,arguments.length?n(arguments[0],arguments[1]):n}function lo(n,r){var u=n.__data__;return Zg(r)?u[typeof r=="string"?"string":"hash"]:u.map}function Ka(n){for(var r=zn(n),u=r.length;u--;){var p=r[u],m=n[p];r[u]=[p,m,jl(m)]}return r}function oi(n,r){var u=ef(n,r);return pl(u)?u:t}function jg(n){var r=Sn.call(n,ni),u=n[ni];try{n[ni]=t;var p=!0}catch{}var m=qr.call(n);return p&&(r?n[ni]=u:delete n[ni]),m}var za=Oa?function(n){return n==null?[]:(n=En(n),kt(Oa(n),function(r){return Yu.call(n,r)}))}:gs,Vl=Oa?function(n){for(var r=[];n;)xt(r,za(n)),n=Vr(n);return r}:gs,oe=ue;(ba&&oe(new ba(new ArrayBuffer(1)))!=Ti||Qi&&oe(new Qi)!=We||Da&&oe(Da.resolve())!=ou||vi&&oe(new vi)!=je||Yi&&oe(new Yi)!=$i)&&(oe=function(n){var r=ue(n),u=r==It?n.constructor:t,p=u?ai(u):"";if(p)switch(p){case Af:return Ti;case Nf:return We;case wf:return ou;case Rf:return je;case _f:return $i}return r});function Hg(n,r,u){for(var p=-1,m=u.length;++p<m;){var g=u[p],h=g.size;switch(g.type){case"drop":n+=h;break;case"dropRight":r-=h;break;case"take":r=re(r,n+h);break;case"takeRight":n=Yn(n,r-h);break}}return{start:n,end:r}}function Qg(n){var r=n.match(Zd);return r?r[1].split(nm):[]}function $l(n,r,u){r=Jt(r,n);for(var p=-1,m=r.length,g=!1;++p<m;){var h=lt(r[p]);if(!(g=n!=null&&u(n,h)))break;n=n[h]}return g||++p!=m?g:(m=n==null?0:n.length,!!m&&So(m)&&Ct(h,m)&&(Z(n)||si(n)))}function Yg(n){var r=n.length,u=new n.constructor(r);return r&&typeof n[0]=="string"&&Sn.call(n,"index")&&(u.index=n.index,u.input=n.input),u}function Wl(n){return typeof n.constructor=="function"&&!rr(n)?Ni(Vr(n)):{}}function Kg(n,r,u){var p=n.constructor;switch(r){case Wi:return $a(n);case gn:case Re:return new p(+n);case Ti:return Bg(n,u);case Ko:case zo:case Xo:case Zo:case na:case ea:case ta:case ia:case ra:return vl(n,u);case We:return new p;case Gi:case Vi:return new p(n);case Ji:return Ug(n);case je:return new p;case wr:return Pg(n)}}function zg(n,r){var u=r.length;if(!u)return n;var p=u-1;return r[p]=(u>1?"& ":"")+r[p],r=r.join(u>2?", ":" "),n.replace(Xd,`{
/* [wrapped with `+r+`] */
`)}function Xg(n){return Z(n)||si(n)||!!(Ku&&n&&n[Ku])}function Ct(n,r){var u=typeof n;return r=r??$e,!!r&&(u=="number"||u!="symbol"&&lm.test(n))&&n>-1&&n%1==0&&n<r}function le(n,r,u){if(!Rn(u))return!1;var p=typeof r;return(p=="number"?fe(u)&&Ct(r,u.length):p=="string"&&r in u)?Ye(u[r],n):!1}function Xa(n,r){if(Z(n))return!1;var u=typeof n;return u=="number"||u=="symbol"||u=="boolean"||n==null||Ee(n)?!0:Qd.test(n)||!Hd.test(n)||r!=null&&n in En(r)}function Zg(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Za(n){var r=uo(n),u=f[r];if(typeof u!="function"||!(r in un.prototype))return!1;if(n===u)return!0;var p=Ya(u);return!!p&&n===p[0]}function nI(n){return!!ju&&ju in n}var eI=Lr?Et:Is;function rr(n){var r=n&&n.constructor,u=typeof r=="function"&&r.prototype||Di;return n===u}function jl(n){return n===n&&!Rn(n)}function Hl(n,r){return function(u){return u==null?!1:u[n]===r&&(r!==t||n in En(u))}}function tI(n){var r=go(n,function(p){return u.size===I&&u.clear(),p}),u=r.cache;return r}function iI(n,r){var u=n[1],p=r[1],m=u|p,g=m<(W|cn|Pn),h=p==Pn&&u==hn||p==Pn&&u==gt&&n[7].length<=r[8]||p==(Pn|gt)&&r[7].length<=r[8]&&u==hn;if(!(g||h))return n;p&W&&(n[2]=r[2],m|=u&W?0:vn);var T=r[3];if(T){var E=n[3];n[3]=E?Nl(E,T,r[4]):T,n[4]=E?Lt(n[3],S):r[4]}return T=r[5],T&&(E=n[5],n[5]=E?wl(E,T,r[6]):T,n[6]=E?Lt(n[5],S):r[6]),T=r[7],T&&(n[7]=T),p&Pn&&(n[8]=n[8]==null?r[8]:re(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=m,n}function rI(n){var r=[];if(n!=null)for(var u in En(n))r.push(u);return r}function oI(n){return qr.call(n)}function Ql(n,r,u){return r=Yn(r===t?n.length-1:r,0),function(){for(var p=arguments,m=-1,g=Yn(p.length-r,0),h=O(g);++m<g;)h[m]=p[r+m];m=-1;for(var T=O(r+1);++m<r;)T[m]=p[m];return T[r]=u(h),Te(n,this,T)}}function Yl(n,r){return r.length<2?n:ri(n,xe(r,0,-1))}function aI(n,r){for(var u=n.length,p=re(r.length,u),m=me(n);p--;){var g=r[p];n[p]=Ct(g,u)?m[g]:t}return n}function ns(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Kl=Xl(yl),or=Ff||function(n,r){return ne.setTimeout(n,r)},es=Xl(Ng);function zl(n,r,u){var p=r+"";return es(n,zg(p,sI(Qg(p),u)))}function Xl(n){var r=0,u=0;return function(){var p=bf(),m=zt-(p-u);if(u=p,m>0){if(++r>=Ut)return arguments[0]}else r=0;return n.apply(t,arguments)}}function po(n,r){var u=-1,p=n.length,m=p-1;for(r=r===t?p:r;++u<r;){var g=xa(u,m),h=n[g];n[g]=n[u],n[u]=h}return n.length=r,n}var Zl=tI(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(Yd,function(u,p,m,g){r.push(m?g.replace(im,"$1"):p||u)}),r});function lt(n){if(typeof n=="string"||Ee(n))return n;var r=n+"";return r=="0"&&1/n==-at?"-0":r}function ai(n){if(n!=null){try{return Mr.call(n)}catch{}try{return n+""}catch{}}return""}function sI(n,r){return Be(L,function(u){var p="_."+u[0];r&u[1]&&!Ur(n,p)&&n.push(p)}),n.sort()}function np(n){if(n instanceof un)return n.clone();var r=new Pe(n.__wrapped__,n.__chain__);return r.__actions__=me(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function uI(n,r,u){(u?le(n,r,u):r===t)?r=1:r=Yn(en(r),0);var p=n==null?0:n.length;if(!p||r<1)return[];for(var m=0,g=0,h=O(jr(p/r));m<p;)h[g++]=xe(n,m,m+=r);return h}function lI(n){for(var r=-1,u=n==null?0:n.length,p=0,m=[];++r<u;){var g=n[r];g&&(m[p++]=g)}return m}function pI(){var n=arguments.length;if(!n)return[];for(var r=O(n-1),u=arguments[0],p=n;p--;)r[p-1]=arguments[p];return xt(Z(u)?me(u):[u],ee(r,1))}var cI=rn(function(n,r){return qn(n)?Zi(n,ee(r,1,qn,!0)):[]}),dI=rn(function(n,r){var u=Le(r);return qn(u)&&(u=t),qn(n)?Zi(n,ee(r,1,qn,!0),H(u,2)):[]}),mI=rn(function(n,r){var u=Le(r);return qn(u)&&(u=t),qn(n)?Zi(n,ee(r,1,qn,!0),t,u):[]});function fI(n,r,u){var p=n==null?0:n.length;return p?(r=u||r===t?1:en(r),xe(n,r<0?0:r,p)):[]}function gI(n,r,u){var p=n==null?0:n.length;return p?(r=u||r===t?1:en(r),r=p-r,xe(n,0,r<0?0:r)):[]}function II(n,r){return n&&n.length?to(n,H(r,3),!0,!0):[]}function SI(n,r){return n&&n.length?to(n,H(r,3),!0):[]}function hI(n,r,u,p){var m=n==null?0:n.length;return m?(u&&typeof u!="number"&&le(n,r,u)&&(u=0,p=m),pg(n,r,u,p)):[]}function ep(n,r,u){var p=n==null?0:n.length;if(!p)return-1;var m=u==null?0:en(u);return m<0&&(m=Yn(p+m,0)),Pr(n,H(r,3),m)}function tp(n,r,u){var p=n==null?0:n.length;if(!p)return-1;var m=p-1;return u!==t&&(m=en(u),m=u<0?Yn(p+m,0):re(m,p-1)),Pr(n,H(r,3),m,!0)}function ip(n){var r=n==null?0:n.length;return r?ee(n,1):[]}function yI(n){var r=n==null?0:n.length;return r?ee(n,at):[]}function TI(n,r){var u=n==null?0:n.length;return u?(r=r===t?1:en(r),ee(n,r)):[]}function FI(n){for(var r=-1,u=n==null?0:n.length,p={};++r<u;){var m=n[r];p[m[0]]=m[1]}return p}function rp(n){return n&&n.length?n[0]:t}function CI(n,r,u){var p=n==null?0:n.length;if(!p)return-1;var m=u==null?0:en(u);return m<0&&(m=Yn(p+m,0)),Ci(n,r,m)}function EI(n){var r=n==null?0:n.length;return r?xe(n,0,-1):[]}var OI=rn(function(n){var r=Nn(n,Ja);return r.length&&r[0]===n[0]?_a(r):[]}),bI=rn(function(n){var r=Le(n),u=Nn(n,Ja);return r===Le(u)?r=t:u.pop(),u.length&&u[0]===n[0]?_a(u,H(r,2)):[]}),DI=rn(function(n){var r=Le(n),u=Nn(n,Ja);return r=typeof r=="function"?r:t,r&&u.pop(),u.length&&u[0]===n[0]?_a(u,t,r):[]});function vI(n,r){return n==null?"":Ef.call(n,r)}function Le(n){var r=n==null?0:n.length;return r?n[r-1]:t}function AI(n,r,u){var p=n==null?0:n.length;if(!p)return-1;var m=p;return u!==t&&(m=en(u),m=m<0?Yn(p+m,0):re(m,p-1)),r===r?sf(n,r,m):Pr(n,Lu,m,!0)}function NI(n,r){return n&&n.length?gl(n,en(r)):t}var wI=rn(op);function op(n,r){return n&&n.length&&r&&r.length?ka(n,r):n}function RI(n,r,u){return n&&n.length&&r&&r.length?ka(n,r,H(u,2)):n}function _I(n,r,u){return n&&n.length&&r&&r.length?ka(n,r,t,u):n}var BI=Ft(function(n,r){var u=n==null?0:n.length,p=Aa(n,r);return hl(n,Nn(r,function(m){return Ct(m,u)?+m:m}).sort(Al)),p});function UI(n,r){var u=[];if(!(n&&n.length))return u;var p=-1,m=[],g=n.length;for(r=H(r,3);++p<g;){var h=n[p];r(h,p,n)&&(u.push(h),m.push(p))}return hl(n,m),u}function ts(n){return n==null?n:vf.call(n)}function PI(n,r,u){var p=n==null?0:n.length;return p?(u&&typeof u!="number"&&le(n,r,u)?(r=0,u=p):(r=r==null?0:en(r),u=u===t?p:en(u)),xe(n,r,u)):[]}function kI(n,r){return eo(n,r)}function xI(n,r,u){return Ma(n,r,H(u,2))}function LI(n,r){var u=n==null?0:n.length;if(u){var p=eo(n,r);if(p<u&&Ye(n[p],r))return p}return-1}function MI(n,r){return eo(n,r,!0)}function qI(n,r,u){return Ma(n,r,H(u,2),!0)}function GI(n,r){var u=n==null?0:n.length;if(u){var p=eo(n,r,!0)-1;if(Ye(n[p],r))return p}return-1}function JI(n){return n&&n.length?Tl(n):[]}function VI(n,r){return n&&n.length?Tl(n,H(r,2)):[]}function $I(n){var r=n==null?0:n.length;return r?xe(n,1,r):[]}function WI(n,r,u){return n&&n.length?(r=u||r===t?1:en(r),xe(n,0,r<0?0:r)):[]}function jI(n,r,u){var p=n==null?0:n.length;return p?(r=u||r===t?1:en(r),r=p-r,xe(n,r<0?0:r,p)):[]}function HI(n,r){return n&&n.length?to(n,H(r,3),!1,!0):[]}function QI(n,r){return n&&n.length?to(n,H(r,3)):[]}var YI=rn(function(n){return Gt(ee(n,1,qn,!0))}),KI=rn(function(n){var r=Le(n);return qn(r)&&(r=t),Gt(ee(n,1,qn,!0),H(r,2))}),zI=rn(function(n){var r=Le(n);return r=typeof r=="function"?r:t,Gt(ee(n,1,qn,!0),t,r)});function XI(n){return n&&n.length?Gt(n):[]}function ZI(n,r){return n&&n.length?Gt(n,H(r,2)):[]}function nS(n,r){return r=typeof r=="function"?r:t,n&&n.length?Gt(n,t,r):[]}function is(n){if(!(n&&n.length))return[];var r=0;return n=kt(n,function(u){if(qn(u))return r=Yn(u.length,r),!0}),Ta(r,function(u){return Nn(n,Sa(u))})}function ap(n,r){if(!(n&&n.length))return[];var u=is(n);return r==null?u:Nn(u,function(p){return Te(r,t,p)})}var eS=rn(function(n,r){return qn(n)?Zi(n,r):[]}),tS=rn(function(n){return Ga(kt(n,qn))}),iS=rn(function(n){var r=Le(n);return qn(r)&&(r=t),Ga(kt(n,qn),H(r,2))}),rS=rn(function(n){var r=Le(n);return r=typeof r=="function"?r:t,Ga(kt(n,qn),t,r)}),oS=rn(is);function aS(n,r){return Ol(n||[],r||[],Xi)}function sS(n,r){return Ol(n||[],r||[],tr)}var uS=rn(function(n){var r=n.length,u=r>1?n[r-1]:t;return u=typeof u=="function"?(n.pop(),u):t,ap(n,u)});function sp(n){var r=f(n);return r.__chain__=!0,r}function lS(n,r){return r(n),n}function co(n,r){return r(n)}var pS=Ft(function(n){var r=n.length,u=r?n[0]:0,p=this.__wrapped__,m=function(g){return Aa(g,n)};return r>1||this.__actions__.length||!(p instanceof un)||!Ct(u)?this.thru(m):(p=p.slice(u,+u+(r?1:0)),p.__actions__.push({func:co,args:[m],thisArg:t}),new Pe(p,this.__chain__).thru(function(g){return r&&!g.length&&g.push(t),g}))});function cS(){return sp(this)}function dS(){return new Pe(this.value(),this.__chain__)}function mS(){this.__values__===t&&(this.__values__=Fp(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function fS(){return this}function gS(n){for(var r,u=this;u instanceof Kr;){var p=np(u);p.__index__=0,p.__values__=t,r?m.__wrapped__=p:r=p;var m=p;u=u.__wrapped__}return m.__wrapped__=n,r}function IS(){var n=this.__wrapped__;if(n instanceof un){var r=n;return this.__actions__.length&&(r=new un(this)),r=r.reverse(),r.__actions__.push({func:co,args:[ts],thisArg:t}),new Pe(r,this.__chain__)}return this.thru(ts)}function SS(){return El(this.__wrapped__,this.__actions__)}var hS=io(function(n,r,u){Sn.call(n,u)?++n[u]:yt(n,u,1)});function yS(n,r,u){var p=Z(n)?ku:lg;return u&&le(n,r,u)&&(r=t),p(n,H(r,3))}function TS(n,r){var u=Z(n)?kt:al;return u(n,H(r,3))}var FS=Ul(ep),CS=Ul(tp);function ES(n,r){return ee(mo(n,r),1)}function OS(n,r){return ee(mo(n,r),at)}function bS(n,r,u){return u=u===t?1:en(u),ee(mo(n,r),u)}function up(n,r){var u=Z(n)?Be:qt;return u(n,H(r,3))}function lp(n,r){var u=Z(n)?Vm:ol;return u(n,H(r,3))}var DS=io(function(n,r,u){Sn.call(n,u)?n[u].push(r):yt(n,u,[r])});function vS(n,r,u,p){n=fe(n)?n:Ui(n),u=u&&!p?en(u):0;var m=n.length;return u<0&&(u=Yn(m+u,0)),ho(n)?u<=m&&n.indexOf(r,u)>-1:!!m&&Ci(n,r,u)>-1}var AS=rn(function(n,r,u){var p=-1,m=typeof r=="function",g=fe(n)?O(n.length):[];return qt(n,function(h){g[++p]=m?Te(r,h,u):nr(h,r,u)}),g}),NS=io(function(n,r,u){yt(n,u,r)});function mo(n,r){var u=Z(n)?Nn:dl;return u(n,H(r,3))}function wS(n,r,u,p){return n==null?[]:(Z(r)||(r=r==null?[]:[r]),u=p?t:u,Z(u)||(u=u==null?[]:[u]),Il(n,r,u))}var RS=io(function(n,r,u){n[u?0:1].push(r)},function(){return[[],[]]});function _S(n,r,u){var p=Z(n)?ga:qu,m=arguments.length<3;return p(n,H(r,4),u,m,qt)}function BS(n,r,u){var p=Z(n)?$m:qu,m=arguments.length<3;return p(n,H(r,4),u,m,ol)}function US(n,r){var u=Z(n)?kt:al;return u(n,Io(H(r,3)))}function PS(n){var r=Z(n)?el:vg;return r(n)}function kS(n,r,u){(u?le(n,r,u):r===t)?r=1:r=en(r);var p=Z(n)?rg:Ag;return p(n,r)}function xS(n){var r=Z(n)?og:wg;return r(n)}function LS(n){if(n==null)return 0;if(fe(n))return ho(n)?Oi(n):n.length;var r=oe(n);return r==We||r==je?n.size:Ua(n).length}function MS(n,r,u){var p=Z(n)?Ia:Rg;return u&&le(n,r,u)&&(r=t),p(n,H(r,3))}var qS=rn(function(n,r){if(n==null)return[];var u=r.length;return u>1&&le(n,r[0],r[1])?r=[]:u>2&&le(r[0],r[1],r[2])&&(r=[r[0]]),Il(n,ee(r,1),[])}),fo=Tf||function(){return ne.Date.now()};function GS(n,r){if(typeof r!="function")throw new Ue(l);return n=en(n),function(){if(--n<1)return r.apply(this,arguments)}}function pp(n,r,u){return r=u?t:r,r=n&&r==null?n.length:r,Tt(n,Pn,t,t,t,t,r)}function cp(n,r){var u;if(typeof r!="function")throw new Ue(l);return n=en(n),function(){return--n>0&&(u=r.apply(this,arguments)),n<=1&&(r=t),u}}var rs=rn(function(n,r,u){var p=W;if(u.length){var m=Lt(u,_i(rs));p|=Hn}return Tt(n,p,r,u,m)}),dp=rn(function(n,r,u){var p=W|cn;if(u.length){var m=Lt(u,_i(dp));p|=Hn}return Tt(r,p,n,u,m)});function mp(n,r,u){r=u?t:r;var p=Tt(n,hn,t,t,t,t,t,r);return p.placeholder=mp.placeholder,p}function fp(n,r,u){r=u?t:r;var p=Tt(n,Un,t,t,t,t,t,r);return p.placeholder=fp.placeholder,p}function gp(n,r,u){var p,m,g,h,T,E,N=0,w=!1,U=!1,x=!0;if(typeof n!="function")throw new Ue(l);r=Me(r)||0,Rn(u)&&(w=!!u.leading,U="maxWait"in u,g=U?Yn(Me(u.maxWait)||0,r):g,x="trailing"in u?!!u.trailing:x);function $(Gn){var Ke=p,bt=m;return p=m=t,N=Gn,h=n.apply(bt,Ke),h}function Q(Gn){return N=Gn,T=or(an,r),w?$(Gn):h}function tn(Gn){var Ke=Gn-E,bt=Gn-N,Up=r-Ke;return U?re(Up,g-bt):Up}function Y(Gn){var Ke=Gn-E,bt=Gn-N;return E===t||Ke>=r||Ke<0||U&&bt>=g}function an(){var Gn=fo();if(Y(Gn))return pn(Gn);T=or(an,tn(Gn))}function pn(Gn){return T=t,x&&p?$(Gn):(p=m=t,h)}function Oe(){T!==t&&bl(T),N=0,p=E=m=T=t}function pe(){return T===t?h:pn(fo())}function be(){var Gn=fo(),Ke=Y(Gn);if(p=arguments,m=this,E=Gn,Ke){if(T===t)return Q(E);if(U)return bl(T),T=or(an,r),$(E)}return T===t&&(T=or(an,r)),h}return be.cancel=Oe,be.flush=pe,be}var JS=rn(function(n,r){return rl(n,1,r)}),VS=rn(function(n,r,u){return rl(n,Me(r)||0,u)});function $S(n){return Tt(n,B)}function go(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Ue(l);var u=function(){var p=arguments,m=r?r.apply(this,p):p[0],g=u.cache;if(g.has(m))return g.get(m);var h=n.apply(this,p);return u.cache=g.set(m,h)||g,h};return u.cache=new(go.Cache||ht),u}go.Cache=ht;function Io(n){if(typeof n!="function")throw new Ue(l);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function WS(n){return cp(2,n)}var jS=_g(function(n,r){r=r.length==1&&Z(r[0])?Nn(r[0],Fe(H())):Nn(ee(r,1),Fe(H()));var u=r.length;return rn(function(p){for(var m=-1,g=re(p.length,u);++m<g;)p[m]=r[m].call(this,p[m]);return Te(n,this,p)})}),os=rn(function(n,r){var u=Lt(r,_i(os));return Tt(n,Hn,t,r,u)}),Ip=rn(function(n,r){var u=Lt(r,_i(Ip));return Tt(n,Kn,t,r,u)}),HS=Ft(function(n,r){return Tt(n,gt,t,t,t,r)});function QS(n,r){if(typeof n!="function")throw new Ue(l);return r=r===t?r:en(r),rn(n,r)}function YS(n,r){if(typeof n!="function")throw new Ue(l);return r=r==null?0:Yn(en(r),0),rn(function(u){var p=u[r],m=Vt(u,0,r);return p&&xt(m,p),Te(n,this,m)})}function KS(n,r,u){var p=!0,m=!0;if(typeof n!="function")throw new Ue(l);return Rn(u)&&(p="leading"in u?!!u.leading:p,m="trailing"in u?!!u.trailing:m),gp(n,r,{leading:p,maxWait:r,trailing:m})}function zS(n){return pp(n,1)}function XS(n,r){return os(Va(r),n)}function ZS(){if(!arguments.length)return[];var n=arguments[0];return Z(n)?n:[n]}function nh(n){return ke(n,v)}function eh(n,r){return r=typeof r=="function"?r:t,ke(n,v,r)}function th(n){return ke(n,y|v)}function ih(n,r){return r=typeof r=="function"?r:t,ke(n,y|v,r)}function rh(n,r){return r==null||il(n,r,zn(r))}function Ye(n,r){return n===r||n!==n&&r!==r}var oh=so(Ra),ah=so(function(n,r){return n>=r}),si=ll(function(){return arguments}())?ll:function(n){return kn(n)&&Sn.call(n,"callee")&&!Yu.call(n,"callee")},Z=O.isArray,sh=wu?Fe(wu):gg;function fe(n){return n!=null&&So(n.length)&&!Et(n)}function qn(n){return kn(n)&&fe(n)}function uh(n){return n===!0||n===!1||kn(n)&&ue(n)==gn}var $t=Cf||Is,lh=Ru?Fe(Ru):Ig;function ph(n){return kn(n)&&n.nodeType===1&&!ar(n)}function ch(n){if(n==null)return!0;if(fe(n)&&(Z(n)||typeof n=="string"||typeof n.splice=="function"||$t(n)||Bi(n)||si(n)))return!n.length;var r=oe(n);if(r==We||r==je)return!n.size;if(rr(n))return!Ua(n).length;for(var u in n)if(Sn.call(n,u))return!1;return!0}function dh(n,r){return er(n,r)}function mh(n,r,u){u=typeof u=="function"?u:t;var p=u?u(n,r):t;return p===t?er(n,r,t,u):!!p}function as(n){if(!kn(n))return!1;var r=ue(n);return r==Pt||r==qi||typeof n.message=="string"&&typeof n.name=="string"&&!ar(n)}function fh(n){return typeof n=="number"&&zu(n)}function Et(n){if(!Rn(n))return!1;var r=ue(n);return r==ie||r==ru||r==Mn||r==xd}function Sp(n){return typeof n=="number"&&n==en(n)}function So(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=$e}function Rn(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function kn(n){return n!=null&&typeof n=="object"}var hp=_u?Fe(_u):hg;function gh(n,r){return n===r||Ba(n,r,Ka(r))}function Ih(n,r,u){return u=typeof u=="function"?u:t,Ba(n,r,Ka(r),u)}function Sh(n){return yp(n)&&n!=+n}function hh(n){if(eI(n))throw new X(s);return pl(n)}function yh(n){return n===null}function Th(n){return n==null}function yp(n){return typeof n=="number"||kn(n)&&ue(n)==Gi}function ar(n){if(!kn(n)||ue(n)!=It)return!1;var r=Vr(n);if(r===null)return!0;var u=Sn.call(r,"constructor")&&r.constructor;return typeof u=="function"&&u instanceof u&&Mr.call(u)==If}var ss=Bu?Fe(Bu):yg;function Fh(n){return Sp(n)&&n>=-$e&&n<=$e}var Tp=Uu?Fe(Uu):Tg;function ho(n){return typeof n=="string"||!Z(n)&&kn(n)&&ue(n)==Vi}function Ee(n){return typeof n=="symbol"||kn(n)&&ue(n)==wr}var Bi=Pu?Fe(Pu):Fg;function Ch(n){return n===t}function Eh(n){return kn(n)&&oe(n)==$i}function Oh(n){return kn(n)&&ue(n)==Md}var bh=so(Pa),Dh=so(function(n,r){return n<=r});function Fp(n){if(!n)return[];if(fe(n))return ho(n)?He(n):me(n);if(Hi&&n[Hi])return rf(n[Hi]());var r=oe(n),u=r==We?Ca:r==je?kr:Ui;return u(n)}function Ot(n){if(!n)return n===0?n:0;if(n=Me(n),n===at||n===-at){var r=n<0?-1:1;return r*yi}return n===n?n:0}function en(n){var r=Ot(n),u=r%1;return r===r?u?r-u:r:0}function Cp(n){return n?ii(en(n),0,we):0}function Me(n){if(typeof n=="number")return n;if(Ee(n))return Xt;if(Rn(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Rn(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Gu(n);var u=am.test(n);return u||um.test(n)?qm(n.slice(2),u?2:8):om.test(n)?Xt:+n}function Ep(n){return ut(n,ge(n))}function vh(n){return n?ii(en(n),-$e,$e):n===0?n:0}function In(n){return n==null?"":Ce(n)}var Ah=wi(function(n,r){if(rr(r)||fe(r)){ut(r,zn(r),n);return}for(var u in r)Sn.call(r,u)&&Xi(n,u,r[u])}),Op=wi(function(n,r){ut(r,ge(r),n)}),yo=wi(function(n,r,u,p){ut(r,ge(r),n,p)}),Nh=wi(function(n,r,u,p){ut(r,zn(r),n,p)}),wh=Ft(Aa);function Rh(n,r){var u=Ni(n);return r==null?u:tl(u,r)}var _h=rn(function(n,r){n=En(n);var u=-1,p=r.length,m=p>2?r[2]:t;for(m&&le(r[0],r[1],m)&&(p=1);++u<p;)for(var g=r[u],h=ge(g),T=-1,E=h.length;++T<E;){var N=h[T],w=n[N];(w===t||Ye(w,Di[N])&&!Sn.call(n,N))&&(n[N]=g[N])}return n}),Bh=rn(function(n){return n.push(t,Gl),Te(bp,t,n)});function Uh(n,r){return xu(n,H(r,3),st)}function Ph(n,r){return xu(n,H(r,3),wa)}function kh(n,r){return n==null?n:Na(n,H(r,3),ge)}function xh(n,r){return n==null?n:sl(n,H(r,3),ge)}function Lh(n,r){return n&&st(n,H(r,3))}function Mh(n,r){return n&&wa(n,H(r,3))}function qh(n){return n==null?[]:Zr(n,zn(n))}function Gh(n){return n==null?[]:Zr(n,ge(n))}function us(n,r,u){var p=n==null?t:ri(n,r);return p===t?u:p}function Jh(n,r){return n!=null&&$l(n,r,cg)}function ls(n,r){return n!=null&&$l(n,r,dg)}var Vh=kl(function(n,r,u){r!=null&&typeof r.toString!="function"&&(r=qr.call(r)),n[r]=u},cs(Ie)),$h=kl(function(n,r,u){r!=null&&typeof r.toString!="function"&&(r=qr.call(r)),Sn.call(n,r)?n[r].push(u):n[r]=[u]},H),Wh=rn(nr);function zn(n){return fe(n)?nl(n):Ua(n)}function ge(n){return fe(n)?nl(n,!0):Cg(n)}function jh(n,r){var u={};return r=H(r,3),st(n,function(p,m,g){yt(u,r(p,m,g),p)}),u}function Hh(n,r){var u={};return r=H(r,3),st(n,function(p,m,g){yt(u,m,r(p,m,g))}),u}var Qh=wi(function(n,r,u){no(n,r,u)}),bp=wi(function(n,r,u,p){no(n,r,u,p)}),Yh=Ft(function(n,r){var u={};if(n==null)return u;var p=!1;r=Nn(r,function(g){return g=Jt(g,n),p||(p=g.length>1),g}),ut(n,Qa(n),u),p&&(u=ke(u,y|_|v,Vg));for(var m=r.length;m--;)qa(u,r[m]);return u});function Kh(n,r){return Dp(n,Io(H(r)))}var zh=Ft(function(n,r){return n==null?{}:Og(n,r)});function Dp(n,r){if(n==null)return{};var u=Nn(Qa(n),function(p){return[p]});return r=H(r),Sl(n,u,function(p,m){return r(p,m[0])})}function Xh(n,r,u){r=Jt(r,n);var p=-1,m=r.length;for(m||(m=1,n=t);++p<m;){var g=n==null?t:n[lt(r[p])];g===t&&(p=m,g=u),n=Et(g)?g.call(n):g}return n}function Zh(n,r,u){return n==null?n:tr(n,r,u)}function ny(n,r,u,p){return p=typeof p=="function"?p:t,n==null?n:tr(n,r,u,p)}var vp=Ml(zn),Ap=Ml(ge);function ey(n,r,u){var p=Z(n),m=p||$t(n)||Bi(n);if(r=H(r,4),u==null){var g=n&&n.constructor;m?u=p?new g:[]:Rn(n)?u=Et(g)?Ni(Vr(n)):{}:u={}}return(m?Be:st)(n,function(h,T,E){return r(u,h,T,E)}),u}function ty(n,r){return n==null?!0:qa(n,r)}function iy(n,r,u){return n==null?n:Cl(n,r,Va(u))}function ry(n,r,u,p){return p=typeof p=="function"?p:t,n==null?n:Cl(n,r,Va(u),p)}function Ui(n){return n==null?[]:Fa(n,zn(n))}function oy(n){return n==null?[]:Fa(n,ge(n))}function ay(n,r,u){return u===t&&(u=r,r=t),u!==t&&(u=Me(u),u=u===u?u:0),r!==t&&(r=Me(r),r=r===r?r:0),ii(Me(n),r,u)}function sy(n,r,u){return r=Ot(r),u===t?(u=r,r=0):u=Ot(u),n=Me(n),mg(n,r,u)}function uy(n,r,u){if(u&&typeof u!="boolean"&&le(n,r,u)&&(r=u=t),u===t&&(typeof r=="boolean"?(u=r,r=t):typeof n=="boolean"&&(u=n,n=t)),n===t&&r===t?(n=0,r=1):(n=Ot(n),r===t?(r=n,n=0):r=Ot(r)),n>r){var p=n;n=r,r=p}if(u||n%1||r%1){var m=Xu();return re(n+m*(r-n+Mm("1e-"+((m+"").length-1))),r)}return xa(n,r)}var ly=Ri(function(n,r,u){return r=r.toLowerCase(),n+(u?Np(r):r)});function Np(n){return ps(In(n).toLowerCase())}function wp(n){return n=In(n),n&&n.replace(pm,Xm).replace(Nm,"")}function py(n,r,u){n=In(n),r=Ce(r);var p=n.length;u=u===t?p:ii(en(u),0,p);var m=u;return u-=r.length,u>=0&&n.slice(u,m)==r}function cy(n){return n=In(n),n&&$d.test(n)?n.replace(su,Zm):n}function dy(n){return n=In(n),n&&Kd.test(n)?n.replace(oa,"\\$&"):n}var my=Ri(function(n,r,u){return n+(u?"-":"")+r.toLowerCase()}),fy=Ri(function(n,r,u){return n+(u?" ":"")+r.toLowerCase()}),gy=Bl("toLowerCase");function Iy(n,r,u){n=In(n),r=en(r);var p=r?Oi(n):0;if(!r||p>=r)return n;var m=(r-p)/2;return ao(Hr(m),u)+n+ao(jr(m),u)}function Sy(n,r,u){n=In(n),r=en(r);var p=r?Oi(n):0;return r&&p<r?n+ao(r-p,u):n}function hy(n,r,u){n=In(n),r=en(r);var p=r?Oi(n):0;return r&&p<r?ao(r-p,u)+n:n}function yy(n,r,u){return u||r==null?r=0:r&&(r=+r),Df(In(n).replace(aa,""),r||0)}function Ty(n,r,u){return(u?le(n,r,u):r===t)?r=1:r=en(r),La(In(n),r)}function Fy(){var n=arguments,r=In(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Cy=Ri(function(n,r,u){return n+(u?"_":"")+r.toLowerCase()});function Ey(n,r,u){return u&&typeof u!="number"&&le(n,r,u)&&(r=u=t),u=u===t?we:u>>>0,u?(n=In(n),n&&(typeof r=="string"||r!=null&&!ss(r))&&(r=Ce(r),!r&&Ei(n))?Vt(He(n),0,u):n.split(r,u)):[]}var Oy=Ri(function(n,r,u){return n+(u?" ":"")+ps(r)});function by(n,r,u){return n=In(n),u=u==null?0:ii(en(u),0,n.length),r=Ce(r),n.slice(u,u+r.length)==r}function Dy(n,r,u){var p=f.templateSettings;u&&le(n,r,u)&&(r=t),n=In(n),r=yo({},r,p,ql);var m=yo({},r.imports,p.imports,ql),g=zn(m),h=Fa(m,g),T,E,N=0,w=r.interpolate||Rr,U="__p += '",x=Ea((r.escape||Rr).source+"|"+w.source+"|"+(w===uu?rm:Rr).source+"|"+(r.evaluate||Rr).source+"|$","g"),$="//# sourceURL="+(Sn.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Um+"]")+`
`;n.replace(x,function(Y,an,pn,Oe,pe,be){return pn||(pn=Oe),U+=n.slice(N,be).replace(cm,nf),an&&(T=!0,U+=`' +
__e(`+an+`) +
'`),pe&&(E=!0,U+=`';
`+pe+`;
__p += '`),pn&&(U+=`' +
((__t = (`+pn+`)) == null ? '' : __t) +
'`),N=be+Y.length,Y}),U+=`';
`;var Q=Sn.call(r,"variable")&&r.variable;if(!Q)U=`with (obj) {
`+U+`
}
`;else if(tm.test(Q))throw new X(c);U=(E?U.replace(qd,""):U).replace(Gd,"$1").replace(Jd,"$1;"),U="function("+(Q||"obj")+`) {
`+(Q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(E?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+U+`return __p
}`;var tn=_p(function(){return mn(g,$+"return "+U).apply(t,h)});if(tn.source=U,as(tn))throw tn;return tn}function vy(n){return In(n).toLowerCase()}function Ay(n){return In(n).toUpperCase()}function Ny(n,r,u){if(n=In(n),n&&(u||r===t))return Gu(n);if(!n||!(r=Ce(r)))return n;var p=He(n),m=He(r),g=Ju(p,m),h=Vu(p,m)+1;return Vt(p,g,h).join("")}function wy(n,r,u){if(n=In(n),n&&(u||r===t))return n.slice(0,Wu(n)+1);if(!n||!(r=Ce(r)))return n;var p=He(n),m=Vu(p,He(r))+1;return Vt(p,0,m).join("")}function Ry(n,r,u){if(n=In(n),n&&(u||r===t))return n.replace(aa,"");if(!n||!(r=Ce(r)))return n;var p=He(n),m=Ju(p,He(r));return Vt(p,m).join("")}function _y(n,r){var u=z,p=se;if(Rn(r)){var m="separator"in r?r.separator:m;u="length"in r?en(r.length):u,p="omission"in r?Ce(r.omission):p}n=In(n);var g=n.length;if(Ei(n)){var h=He(n);g=h.length}if(u>=g)return n;var T=u-Oi(p);if(T<1)return p;var E=h?Vt(h,0,T).join(""):n.slice(0,T);if(m===t)return E+p;if(h&&(T+=E.length-T),ss(m)){if(n.slice(T).search(m)){var N,w=E;for(m.global||(m=Ea(m.source,In(lu.exec(m))+"g")),m.lastIndex=0;N=m.exec(w);)var U=N.index;E=E.slice(0,U===t?T:U)}}else if(n.indexOf(Ce(m),T)!=T){var x=E.lastIndexOf(m);x>-1&&(E=E.slice(0,x))}return E+p}function By(n){return n=In(n),n&&Vd.test(n)?n.replace(au,uf):n}var Uy=Ri(function(n,r,u){return n+(u?" ":"")+r.toUpperCase()}),ps=Bl("toUpperCase");function Rp(n,r,u){return n=In(n),r=u?t:r,r===t?tf(n)?cf(n):Hm(n):n.match(r)||[]}var _p=rn(function(n,r){try{return Te(n,t,r)}catch(u){return as(u)?u:new X(u)}}),Py=Ft(function(n,r){return Be(r,function(u){u=lt(u),yt(n,u,rs(n[u],n))}),n});function ky(n){var r=n==null?0:n.length,u=H();return n=r?Nn(n,function(p){if(typeof p[1]!="function")throw new Ue(l);return[u(p[0]),p[1]]}):[],rn(function(p){for(var m=-1;++m<r;){var g=n[m];if(Te(g[0],this,p))return Te(g[1],this,p)}})}function xy(n){return ug(ke(n,y))}function cs(n){return function(){return n}}function Ly(n,r){return n==null||n!==n?r:n}var My=Pl(),qy=Pl(!0);function Ie(n){return n}function ds(n){return cl(typeof n=="function"?n:ke(n,y))}function Gy(n){return ml(ke(n,y))}function Jy(n,r){return fl(n,ke(r,y))}var Vy=rn(function(n,r){return function(u){return nr(u,n,r)}}),$y=rn(function(n,r){return function(u){return nr(n,u,r)}});function ms(n,r,u){var p=zn(r),m=Zr(r,p);u==null&&!(Rn(r)&&(m.length||!p.length))&&(u=r,r=n,n=this,m=Zr(r,zn(r)));var g=!(Rn(u)&&"chain"in u)||!!u.chain,h=Et(n);return Be(m,function(T){var E=r[T];n[T]=E,h&&(n.prototype[T]=function(){var N=this.__chain__;if(g||N){var w=n(this.__wrapped__),U=w.__actions__=me(this.__actions__);return U.push({func:E,args:arguments,thisArg:n}),w.__chain__=N,w}return E.apply(n,xt([this.value()],arguments))})}),n}function Wy(){return ne._===this&&(ne._=Sf),this}function fs(){}function jy(n){return n=en(n),rn(function(r){return gl(r,n)})}var Hy=Wa(Nn),Qy=Wa(ku),Yy=Wa(Ia);function Bp(n){return Xa(n)?Sa(lt(n)):bg(n)}function Ky(n){return function(r){return n==null?t:ri(n,r)}}var zy=xl(),Xy=xl(!0);function gs(){return[]}function Is(){return!1}function Zy(){return{}}function nT(){return""}function eT(){return!0}function tT(n,r){if(n=en(n),n<1||n>$e)return[];var u=we,p=re(n,we);r=H(r),n-=we;for(var m=Ta(p,r);++u<n;)r(u);return m}function iT(n){return Z(n)?Nn(n,lt):Ee(n)?[n]:me(Zl(In(n)))}function rT(n){var r=++gf;return In(n)+r}var oT=oo(function(n,r){return n+r},0),aT=ja("ceil"),sT=oo(function(n,r){return n/r},1),uT=ja("floor");function lT(n){return n&&n.length?Xr(n,Ie,Ra):t}function pT(n,r){return n&&n.length?Xr(n,H(r,2),Ra):t}function cT(n){return Mu(n,Ie)}function dT(n,r){return Mu(n,H(r,2))}function mT(n){return n&&n.length?Xr(n,Ie,Pa):t}function fT(n,r){return n&&n.length?Xr(n,H(r,2),Pa):t}var gT=oo(function(n,r){return n*r},1),IT=ja("round"),ST=oo(function(n,r){return n-r},0);function hT(n){return n&&n.length?ya(n,Ie):0}function yT(n,r){return n&&n.length?ya(n,H(r,2)):0}return f.after=GS,f.ary=pp,f.assign=Ah,f.assignIn=Op,f.assignInWith=yo,f.assignWith=Nh,f.at=wh,f.before=cp,f.bind=rs,f.bindAll=Py,f.bindKey=dp,f.castArray=ZS,f.chain=sp,f.chunk=uI,f.compact=lI,f.concat=pI,f.cond=ky,f.conforms=xy,f.constant=cs,f.countBy=hS,f.create=Rh,f.curry=mp,f.curryRight=fp,f.debounce=gp,f.defaults=_h,f.defaultsDeep=Bh,f.defer=JS,f.delay=VS,f.difference=cI,f.differenceBy=dI,f.differenceWith=mI,f.drop=fI,f.dropRight=gI,f.dropRightWhile=II,f.dropWhile=SI,f.fill=hI,f.filter=TS,f.flatMap=ES,f.flatMapDeep=OS,f.flatMapDepth=bS,f.flatten=ip,f.flattenDeep=yI,f.flattenDepth=TI,f.flip=$S,f.flow=My,f.flowRight=qy,f.fromPairs=FI,f.functions=qh,f.functionsIn=Gh,f.groupBy=DS,f.initial=EI,f.intersection=OI,f.intersectionBy=bI,f.intersectionWith=DI,f.invert=Vh,f.invertBy=$h,f.invokeMap=AS,f.iteratee=ds,f.keyBy=NS,f.keys=zn,f.keysIn=ge,f.map=mo,f.mapKeys=jh,f.mapValues=Hh,f.matches=Gy,f.matchesProperty=Jy,f.memoize=go,f.merge=Qh,f.mergeWith=bp,f.method=Vy,f.methodOf=$y,f.mixin=ms,f.negate=Io,f.nthArg=jy,f.omit=Yh,f.omitBy=Kh,f.once=WS,f.orderBy=wS,f.over=Hy,f.overArgs=jS,f.overEvery=Qy,f.overSome=Yy,f.partial=os,f.partialRight=Ip,f.partition=RS,f.pick=zh,f.pickBy=Dp,f.property=Bp,f.propertyOf=Ky,f.pull=wI,f.pullAll=op,f.pullAllBy=RI,f.pullAllWith=_I,f.pullAt=BI,f.range=zy,f.rangeRight=Xy,f.rearg=HS,f.reject=US,f.remove=UI,f.rest=QS,f.reverse=ts,f.sampleSize=kS,f.set=Zh,f.setWith=ny,f.shuffle=xS,f.slice=PI,f.sortBy=qS,f.sortedUniq=JI,f.sortedUniqBy=VI,f.split=Ey,f.spread=YS,f.tail=$I,f.take=WI,f.takeRight=jI,f.takeRightWhile=HI,f.takeWhile=QI,f.tap=lS,f.throttle=KS,f.thru=co,f.toArray=Fp,f.toPairs=vp,f.toPairsIn=Ap,f.toPath=iT,f.toPlainObject=Ep,f.transform=ey,f.unary=zS,f.union=YI,f.unionBy=KI,f.unionWith=zI,f.uniq=XI,f.uniqBy=ZI,f.uniqWith=nS,f.unset=ty,f.unzip=is,f.unzipWith=ap,f.update=iy,f.updateWith=ry,f.values=Ui,f.valuesIn=oy,f.without=eS,f.words=Rp,f.wrap=XS,f.xor=tS,f.xorBy=iS,f.xorWith=rS,f.zip=oS,f.zipObject=aS,f.zipObjectDeep=sS,f.zipWith=uS,f.entries=vp,f.entriesIn=Ap,f.extend=Op,f.extendWith=yo,ms(f,f),f.add=oT,f.attempt=_p,f.camelCase=ly,f.capitalize=Np,f.ceil=aT,f.clamp=ay,f.clone=nh,f.cloneDeep=th,f.cloneDeepWith=ih,f.cloneWith=eh,f.conformsTo=rh,f.deburr=wp,f.defaultTo=Ly,f.divide=sT,f.endsWith=py,f.eq=Ye,f.escape=cy,f.escapeRegExp=dy,f.every=yS,f.find=FS,f.findIndex=ep,f.findKey=Uh,f.findLast=CS,f.findLastIndex=tp,f.findLastKey=Ph,f.floor=uT,f.forEach=up,f.forEachRight=lp,f.forIn=kh,f.forInRight=xh,f.forOwn=Lh,f.forOwnRight=Mh,f.get=us,f.gt=oh,f.gte=ah,f.has=Jh,f.hasIn=ls,f.head=rp,f.identity=Ie,f.includes=vS,f.indexOf=CI,f.inRange=sy,f.invoke=Wh,f.isArguments=si,f.isArray=Z,f.isArrayBuffer=sh,f.isArrayLike=fe,f.isArrayLikeObject=qn,f.isBoolean=uh,f.isBuffer=$t,f.isDate=lh,f.isElement=ph,f.isEmpty=ch,f.isEqual=dh,f.isEqualWith=mh,f.isError=as,f.isFinite=fh,f.isFunction=Et,f.isInteger=Sp,f.isLength=So,f.isMap=hp,f.isMatch=gh,f.isMatchWith=Ih,f.isNaN=Sh,f.isNative=hh,f.isNil=Th,f.isNull=yh,f.isNumber=yp,f.isObject=Rn,f.isObjectLike=kn,f.isPlainObject=ar,f.isRegExp=ss,f.isSafeInteger=Fh,f.isSet=Tp,f.isString=ho,f.isSymbol=Ee,f.isTypedArray=Bi,f.isUndefined=Ch,f.isWeakMap=Eh,f.isWeakSet=Oh,f.join=vI,f.kebabCase=my,f.last=Le,f.lastIndexOf=AI,f.lowerCase=fy,f.lowerFirst=gy,f.lt=bh,f.lte=Dh,f.max=lT,f.maxBy=pT,f.mean=cT,f.meanBy=dT,f.min=mT,f.minBy=fT,f.stubArray=gs,f.stubFalse=Is,f.stubObject=Zy,f.stubString=nT,f.stubTrue=eT,f.multiply=gT,f.nth=NI,f.noConflict=Wy,f.noop=fs,f.now=fo,f.pad=Iy,f.padEnd=Sy,f.padStart=hy,f.parseInt=yy,f.random=uy,f.reduce=_S,f.reduceRight=BS,f.repeat=Ty,f.replace=Fy,f.result=Xh,f.round=IT,f.runInContext=C,f.sample=PS,f.size=LS,f.snakeCase=Cy,f.some=MS,f.sortedIndex=kI,f.sortedIndexBy=xI,f.sortedIndexOf=LI,f.sortedLastIndex=MI,f.sortedLastIndexBy=qI,f.sortedLastIndexOf=GI,f.startCase=Oy,f.startsWith=by,f.subtract=ST,f.sum=hT,f.sumBy=yT,f.template=Dy,f.times=tT,f.toFinite=Ot,f.toInteger=en,f.toLength=Cp,f.toLower=vy,f.toNumber=Me,f.toSafeInteger=vh,f.toString=In,f.toUpper=Ay,f.trim=Ny,f.trimEnd=wy,f.trimStart=Ry,f.truncate=_y,f.unescape=By,f.uniqueId=rT,f.upperCase=Uy,f.upperFirst=ps,f.each=up,f.eachRight=lp,f.first=rp,ms(f,function(){var n={};return st(f,function(r,u){Sn.call(f.prototype,u)||(n[u]=r)}),n}(),{chain:!1}),f.VERSION=o,Be(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){f[n].placeholder=f}),Be(["drop","take"],function(n,r){un.prototype[n]=function(u){u=u===t?1:Yn(en(u),0);var p=this.__filtered__&&!r?new un(this):this.clone();return p.__filtered__?p.__takeCount__=re(u,p.__takeCount__):p.__views__.push({size:re(u,we),type:n+(p.__dir__<0?"Right":"")}),p},un.prototype[n+"Right"]=function(u){return this.reverse()[n](u).reverse()}}),Be(["filter","map","takeWhile"],function(n,r){var u=r+1,p=u==Ar||u==Nr;un.prototype[n]=function(m){var g=this.clone();return g.__iteratees__.push({iteratee:H(m,3),type:u}),g.__filtered__=g.__filtered__||p,g}}),Be(["head","last"],function(n,r){var u="take"+(r?"Right":"");un.prototype[n]=function(){return this[u](1).value()[0]}}),Be(["initial","tail"],function(n,r){var u="drop"+(r?"":"Right");un.prototype[n]=function(){return this.__filtered__?new un(this):this[u](1)}}),un.prototype.compact=function(){return this.filter(Ie)},un.prototype.find=function(n){return this.filter(n).head()},un.prototype.findLast=function(n){return this.reverse().find(n)},un.prototype.invokeMap=rn(function(n,r){return typeof n=="function"?new un(this):this.map(function(u){return nr(u,n,r)})}),un.prototype.reject=function(n){return this.filter(Io(H(n)))},un.prototype.slice=function(n,r){n=en(n);var u=this;return u.__filtered__&&(n>0||r<0)?new un(u):(n<0?u=u.takeRight(-n):n&&(u=u.drop(n)),r!==t&&(r=en(r),u=r<0?u.dropRight(-r):u.take(r-n)),u)},un.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},un.prototype.toArray=function(){return this.take(we)},st(un.prototype,function(n,r){var u=/^(?:filter|find|map|reject)|While$/.test(r),p=/^(?:head|last)$/.test(r),m=f[p?"take"+(r=="last"?"Right":""):r],g=p||/^find/.test(r);m&&(f.prototype[r]=function(){var h=this.__wrapped__,T=p?[1]:arguments,E=h instanceof un,N=T[0],w=E||Z(h),U=function(an){var pn=m.apply(f,xt([an],T));return p&&x?pn[0]:pn};w&&u&&typeof N=="function"&&N.length!=1&&(E=w=!1);var x=this.__chain__,$=!!this.__actions__.length,Q=g&&!x,tn=E&&!$;if(!g&&w){h=tn?h:new un(this);var Y=n.apply(h,T);return Y.__actions__.push({func:co,args:[U],thisArg:t}),new Pe(Y,x)}return Q&&tn?n.apply(this,T):(Y=this.thru(U),Q?p?Y.value()[0]:Y.value():Y)})}),Be(["pop","push","shift","sort","splice","unshift"],function(n){var r=xr[n],u=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",p=/^(?:pop|shift)$/.test(n);f.prototype[n]=function(){var m=arguments;if(p&&!this.__chain__){var g=this.value();return r.apply(Z(g)?g:[],m)}return this[u](function(h){return r.apply(Z(h)?h:[],m)})}}),st(un.prototype,function(n,r){var u=f[r];if(u){var p=u.name+"";Sn.call(Ai,p)||(Ai[p]=[]),Ai[p].push({name:r,func:u})}}),Ai[ro(t,cn).name]=[{name:"wrapper",func:t}],un.prototype.clone=Bf,un.prototype.reverse=Uf,un.prototype.value=Pf,f.prototype.at=pS,f.prototype.chain=cS,f.prototype.commit=dS,f.prototype.next=mS,f.prototype.plant=gS,f.prototype.reverse=IS,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=SS,f.prototype.first=f.prototype.head,Hi&&(f.prototype[Hi]=fS),f},bi=df();Zt?((Zt.exports=bi)._=bi,da._=bi):ne._=bi}).call(lr)})(_o,_o.exports);var OC=_o.exports;const wt=EC(OC);function bC(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":{const e=i.toLowerCase().trim();return e==="true"||e==="t"||e==="1"}case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}function De(i,e){const t=o=>e.convert(o[i]);return{name:DC(i),key:i,asEnv:o=>({[i]:e.asString(o)}),zod:{type:e.type},get:t,getOrDefault:(o,a)=>t(o)??a}}function DC(i){return i.toLowerCase().replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace("-","").replace("_",""))}De("MAGIDOC_GENERATE",bC());function Fo(i){return{convert:e=>{if(Array.isArray(e))return e;if(typeof e=="string"){const t=JSON.parse(e);return Array.isArray(t)?t:null}return null},asString:e=>JSON.stringify(e),type:e=>e.array(i(e)).optional()}}function ec(i){return{convert:e=>{if(typeof e=="object")return e;if(typeof e=="string"){const t=JSON.parse(e);return typeof t!="object"?null:t}return null},asString:e=>JSON.stringify(e),type:e=>e.record(i(e).optional()).optional()}}function Co(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function tc(i){return{convert:e=>e==null||!i.find(t=>t===e)?null:e,asString:e=>String(e),type:e=>e.enum(i).optional()}}var Go={APP_LOGO:De("APP_LOGO",Co()),APP_TITLE:De("APP_TITLE",Co()),APP_FAVICON:De("APP_FAVICON",Co()),SITE_ROOT:De("SITE_ROOT",Co()),SITE_META:De("SITE_META",ec(i=>i.string())),CUSTOM_STYLES:De("CUSTOM_STYLES",Fo(i=>i.string())),FIELDS_SORTING:De("FIELDS_SORTING",tc(["default","alphabetical"])),ARGUMENTS_SORTING:De("ARGUMENTS_SORTING",tc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:De("QUERY_GENERATION_FACTORIES",ec(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:De("PAGES",Fo(i=>{const e=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(e),i.string().min(1)])}));return e})),EXTERNAL_LINKS:De("EXTERNAL_LINKS",Fo(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:De("DIRECTIVES",Fo(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};const vC="Tarvent API",AC="https://cdn.trvt.io/resource/graphics/logo/RefLogo.png",NC="https://cdn.trvt.io/resource/graphics/logo/favicon-16x16.png",wC=`[{"title":"Welcome","content":"\\n# 👋 Hi\\n\\nWelcome to [Tarvent](https://api.tarvent.com/graphql/)'s GraphQL documentation!\\n"}]`,RC='[{"href":"https://api.tarvent.com","label":"Tarvent API","kind":"Tarvent"},{"href":"https://www.tarvent.com/contact-us","label":"Tarvent support","kind":"Tarvent"}]',_C='{"UUID":"000000000000000000","Byte":"000000","Decimal":0,"Int!":420,"String":"abc","TimeSpan":"P0Y0M0DT0H0M0S"}',BC="true",Mc={APP_TITLE:vC,APP_LOGO:AC,APP_FAVICON:NC,PAGES:wC,EXTERNAL_LINKS:RC,QUERY_GENERATION_FACTORIES:_C,MAGIDOC_GENERATE:BC};function Db(i){return i.get(Mc)}function Jo(i,e){return i.getOrDefault(Mc,e)}function Vo(){return Jo(Go.SITE_ROOT,bT)}class UC{constructor(e){yn(this,"mapping");this.mapping=e}getFor(e){return this.mapping.get(e.name)}}var gr;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(gr||(gr={}));function dn(i,e){if(!!!i)throw new Error(e)}function Rt(i){return typeof i=="object"&&i!==null}function Ze(i,e){if(!!!i)throw new Error(e??"Unexpected invariant triggered.")}const PC=/\r\n|[\n\r]/g;function Ds(i,e){let t=0,o=1;for(const a of i.body.matchAll(PC)){if(typeof a.index=="number"||Ze(!1),a.index>=e)break;t=a.index+a[0].length,o+=1}return{line:o,column:e+1-t}}function kC(i){return qc(i.source,Ds(i.source,i.start))}function qc(i,e){const t=i.locationOffset.column-1,o="".padStart(t)+i.body,a=e.line-1,s=i.locationOffset.line-1,l=e.line+s,c=e.line===1?t:0,d=e.column+c,I=`${i.name}:${l}:${d}
`,S=o.split(/\r\n|[\n\r]/g),y=S[a];if(y.length>120){const _=Math.floor(d/80),v=d%80,A=[];for(let k=0;k<y.length;k+=80)A.push(y.slice(k,k+80));return I+ic([[`${l} |`,A[0]],...A.slice(1,_+1).map(k=>["|",k]),["|","^".padStart(v)],["|",A[_+1]]])}return I+ic([[`${l-1} |`,S[a-1]],[`${l} |`,y],["|","^".padStart(d)],[`${l+1} |`,S[a+1]]])}function ic(i){const e=i.filter(([o,a])=>a!==void 0),t=Math.max(...e.map(([o])=>o.length));return e.map(([o,a])=>o.padStart(t)+(a?" "+a:"")).join(`
`)}function xC(i){const e=i[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:e}class P extends Error{constructor(e,...t){var o,a,s;const{nodes:l,source:c,positions:d,path:I,originalError:S,extensions:y}=xC(t);super(e),this.name="GraphQLError",this.path=I??void 0,this.originalError=S??void 0,this.nodes=rc(Array.isArray(l)?l:l?[l]:void 0);const _=rc((o=this.nodes)===null||o===void 0?void 0:o.map(A=>A.loc).filter(A=>A!=null));this.source=c??(_==null||(a=_[0])===null||a===void 0?void 0:a.source),this.positions=d??(_==null?void 0:_.map(A=>A.start)),this.locations=d&&c?d.map(A=>Ds(c,A)):_==null?void 0:_.map(A=>Ds(A.source,A.start));const v=Rt(S==null?void 0:S.extensions)?S==null?void 0:S.extensions:void 0;this.extensions=(s=y??v)!==null&&s!==void 0?s:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),S!=null&&S.stack?Object.defineProperty(this,"stack",{value:S.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,P):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(e+=`

`+kC(t.loc));else if(this.source&&this.locations)for(const t of this.locations)e+=`

`+qc(this.source,t);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function rc(i){return i===void 0||i.length===0?void 0:i}function Xn(i,e,t){return new P(`Syntax Error: ${t}`,{source:i,positions:[e]})}class LC{constructor(e,t,o){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=o}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Gc{constructor(e,t,o,a,s,l){this.kind=e,this.start=t,this.end=o,this.line=a,this.column=s,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Jc={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},MC=new Set(Object.keys(Jc));function oc(i){const e=i==null?void 0:i.kind;return typeof e=="string"&&MC.has(e)}var Ge;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Ge||(Ge={}));var j;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(j||(j={}));var F;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(F||(F={}));function vs(i){return i===9||i===32}function Tr(i){return i>=48&&i<=57}function Vc(i){return i>=97&&i<=122||i>=65&&i<=90}function Hs(i){return Vc(i)||i===95}function $c(i){return Vc(i)||Tr(i)||i===95}function qC(i){var e;let t=Number.MAX_SAFE_INTEGER,o=null,a=-1;for(let l=0;l<i.length;++l){var s;const c=i[l],d=GC(c);d!==c.length&&(o=(s=o)!==null&&s!==void 0?s:l,a=l,l!==0&&d<t&&(t=d))}return i.map((l,c)=>c===0?l:l.slice(t)).slice((e=o)!==null&&e!==void 0?e:0,a+1)}function GC(i){let e=0;for(;e<i.length&&vs(i.charCodeAt(e));)++e;return e}function JC(i,e){const t=i.replace(/"""/g,'\\"""'),o=t.split(/\r\n|[\n\r]/g),a=o.length===1,s=o.length>1&&o.slice(1).every(v=>v.length===0||vs(v.charCodeAt(0))),l=t.endsWith('\\"""'),c=i.endsWith('"')&&!l,d=i.endsWith("\\"),I=c||d,S=!a||i.length>70||I||s||l;let y="";const _=a&&vs(i.charCodeAt(0));return(S&&!_||s)&&(y+=`
`),y+=t,(S||I)&&(y+=`
`),'"""'+y+'"""'}var R;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(R||(R={}));class VC{constructor(e){const t=new Gc(R.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==R.EOF)do if(e.next)e=e.next;else{const t=WC(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===R.COMMENT);return e}}function $C(i){return i===R.BANG||i===R.DOLLAR||i===R.AMP||i===R.PAREN_L||i===R.PAREN_R||i===R.SPREAD||i===R.COLON||i===R.EQUALS||i===R.AT||i===R.BRACKET_L||i===R.BRACKET_R||i===R.BRACE_L||i===R.PIPE||i===R.BRACE_R}function Li(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function $o(i,e){return Wc(i.charCodeAt(e))&&jc(i.charCodeAt(e+1))}function Wc(i){return i>=55296&&i<=56319}function jc(i){return i>=56320&&i<=57343}function di(i,e){const t=i.source.body.codePointAt(e);if(t===void 0)return R.EOF;if(t>=32&&t<=126){const o=String.fromCodePoint(t);return o==='"'?`'"'`:`"${o}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function $n(i,e,t,o,a){const s=i.line,l=1+t-i.lineStart;return new Gc(e,t,o,s,l,a)}function WC(i,e){const t=i.source.body,o=t.length;let a=e;for(;a<o;){const s=t.charCodeAt(a);switch(s){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++i.line,i.lineStart=a;continue;case 13:t.charCodeAt(a+1)===10?a+=2:++a,++i.line,i.lineStart=a;continue;case 35:return jC(i,a);case 33:return $n(i,R.BANG,a,a+1);case 36:return $n(i,R.DOLLAR,a,a+1);case 38:return $n(i,R.AMP,a,a+1);case 40:return $n(i,R.PAREN_L,a,a+1);case 41:return $n(i,R.PAREN_R,a,a+1);case 46:if(t.charCodeAt(a+1)===46&&t.charCodeAt(a+2)===46)return $n(i,R.SPREAD,a,a+3);break;case 58:return $n(i,R.COLON,a,a+1);case 61:return $n(i,R.EQUALS,a,a+1);case 64:return $n(i,R.AT,a,a+1);case 91:return $n(i,R.BRACKET_L,a,a+1);case 93:return $n(i,R.BRACKET_R,a,a+1);case 123:return $n(i,R.BRACE_L,a,a+1);case 124:return $n(i,R.PIPE,a,a+1);case 125:return $n(i,R.BRACE_R,a,a+1);case 34:return t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34?XC(i,a):QC(i,a)}if(Tr(s)||s===45)return HC(i,a,s);if(Hs(s))return ZC(i,a);throw Xn(i.source,a,s===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Li(s)||$o(t,a)?`Unexpected character: ${di(i,a)}.`:`Invalid character: ${di(i,a)}.`)}return $n(i,R.EOF,o,o)}function jC(i,e){const t=i.source.body,o=t.length;let a=e+1;for(;a<o;){const s=t.charCodeAt(a);if(s===10||s===13)break;if(Li(s))++a;else if($o(t,a))a+=2;else break}return $n(i,R.COMMENT,e,a,t.slice(e+1,a))}function HC(i,e,t){const o=i.source.body;let a=e,s=t,l=!1;if(s===45&&(s=o.charCodeAt(++a)),s===48){if(s=o.charCodeAt(++a),Tr(s))throw Xn(i.source,a,`Invalid number, unexpected digit after 0: ${di(i,a)}.`)}else a=ys(i,a,s),s=o.charCodeAt(a);if(s===46&&(l=!0,s=o.charCodeAt(++a),a=ys(i,a,s),s=o.charCodeAt(a)),(s===69||s===101)&&(l=!0,s=o.charCodeAt(++a),(s===43||s===45)&&(s=o.charCodeAt(++a)),a=ys(i,a,s),s=o.charCodeAt(a)),s===46||Hs(s))throw Xn(i.source,a,`Invalid number, expected digit but got: ${di(i,a)}.`);return $n(i,l?R.FLOAT:R.INT,e,a,o.slice(e,a))}function ys(i,e,t){if(!Tr(t))throw Xn(i.source,e,`Invalid number, expected digit but got: ${di(i,e)}.`);const o=i.source.body;let a=e+1;for(;Tr(o.charCodeAt(a));)++a;return a}function QC(i,e){const t=i.source.body,o=t.length;let a=e+1,s=a,l="";for(;a<o;){const c=t.charCodeAt(a);if(c===34)return l+=t.slice(s,a),$n(i,R.STRING,e,a+1,l);if(c===92){l+=t.slice(s,a);const d=t.charCodeAt(a+1)===117?t.charCodeAt(a+2)===123?YC(i,a):KC(i,a):zC(i,a);l+=d.value,a+=d.size,s=a;continue}if(c===10||c===13)break;if(Li(c))++a;else if($o(t,a))a+=2;else throw Xn(i.source,a,`Invalid character within String: ${di(i,a)}.`)}throw Xn(i.source,a,"Unterminated string.")}function YC(i,e){const t=i.source.body;let o=0,a=3;for(;a<12;){const s=t.charCodeAt(e+a++);if(s===125){if(a<5||!Li(o))break;return{value:String.fromCodePoint(o),size:a}}if(o=o<<4|pr(s),o<0)break}throw Xn(i.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+a)}".`)}function KC(i,e){const t=i.source.body,o=ac(t,e+2);if(Li(o))return{value:String.fromCodePoint(o),size:6};if(Wc(o)&&t.charCodeAt(e+6)===92&&t.charCodeAt(e+7)===117){const a=ac(t,e+8);if(jc(a))return{value:String.fromCodePoint(o,a),size:12}}throw Xn(i.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+6)}".`)}function ac(i,e){return pr(i.charCodeAt(e))<<12|pr(i.charCodeAt(e+1))<<8|pr(i.charCodeAt(e+2))<<4|pr(i.charCodeAt(e+3))}function pr(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function zC(i,e){const t=i.source.body;switch(t.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Xn(i.source,e,`Invalid character escape sequence: "${t.slice(e,e+2)}".`)}function XC(i,e){const t=i.source.body,o=t.length;let a=i.lineStart,s=e+3,l=s,c="";const d=[];for(;s<o;){const I=t.charCodeAt(s);if(I===34&&t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34){c+=t.slice(l,s),d.push(c);const S=$n(i,R.BLOCK_STRING,e,s+3,qC(d).join(`
`));return i.line+=d.length-1,i.lineStart=a,S}if(I===92&&t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34&&t.charCodeAt(s+3)===34){c+=t.slice(l,s),l=s+1,s+=4;continue}if(I===10||I===13){c+=t.slice(l,s),d.push(c),I===13&&t.charCodeAt(s+1)===10?s+=2:++s,c="",l=s,a=s;continue}if(Li(I))++s;else if($o(t,s))s+=2;else throw Xn(i.source,s,`Invalid character within String: ${di(i,s)}.`)}throw Xn(i.source,s,"Unterminated string.")}function ZC(i,e){const t=i.source.body,o=t.length;let a=e+1;for(;a<o;){const s=t.charCodeAt(a);if($c(s))++a;else break}return $n(i,R.NAME,e,a,t.slice(e,a))}const nE=10,Hc=2;function M(i){return Wo(i,[])}function Wo(i,e){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return eE(i,e);default:return String(i)}}function eE(i,e){if(i===null)return"null";if(e.includes(i))return"[Circular]";const t=[...e,i];if(tE(i)){const o=i.toJSON();if(o!==i)return typeof o=="string"?o:Wo(o,t)}else if(Array.isArray(i))return rE(i,t);return iE(i,t)}function tE(i){return typeof i.toJSON=="function"}function iE(i,e){const t=Object.entries(i);return t.length===0?"{}":e.length>Hc?"["+oE(i)+"]":"{ "+t.map(([a,s])=>a+": "+Wo(s,e)).join(", ")+" }"}function rE(i,e){if(i.length===0)return"[]";if(e.length>Hc)return"[Array]";const t=Math.min(nE,i.length),o=i.length-t,a=[];for(let s=0;s<t;++s)a.push(Wo(i[s],e));return o===1?a.push("... 1 more item"):o>1&&a.push(`... ${o} more items`),"["+a.join(", ")+"]"}function oE(i){const e=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return e}const aE=globalThis.process&&!0,ft=aE?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if(typeof e=="object"&&e!==null){var o;const a=t.prototype[Symbol.toStringTag],s=Symbol.toStringTag in e?e[Symbol.toStringTag]:(o=e.constructor)===null||o===void 0?void 0:o.name;if(a===s){const l=M(e);throw new Error(`Cannot use ${a} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Qc{constructor(e,t="GraphQL request",o={line:1,column:1}){typeof e=="string"||dn(!1,`Body must be a string. Received: ${M(e)}.`),this.body=e,this.name=t,this.locationOffset=o,this.locationOffset.line>0||dn(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||dn(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function sE(i){return ft(i,Qc)}function uE(i,e){return new Yc(i,e).parseDocument()}function lE(i,e){const t=new Yc(i,e);t.expectToken(R.SOF);const o=t.parseValueLiteral(!1);return t.expectToken(R.EOF),o}class Yc{constructor(e,t={}){const o=sE(e)?e:new Qc(e);this._lexer=new VC(o),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(R.NAME);return this.node(e,{kind:F.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:F.DOCUMENT,definitions:this.many(R.SOF,this.parseDefinition,R.EOF)})}parseDefinition(){if(this.peek(R.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===R.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw Xn(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(R.BRACE_L))return this.node(e,{kind:F.OPERATION_DEFINITION,operation:Ge.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let o;return this.peek(R.NAME)&&(o=this.parseName()),this.node(e,{kind:F.OPERATION_DEFINITION,operation:t,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(R.NAME);switch(e.value){case"query":return Ge.QUERY;case"mutation":return Ge.MUTATION;case"subscription":return Ge.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(R.PAREN_L,this.parseVariableDefinition,R.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:F.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(R.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(R.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(R.DOLLAR),this.node(e,{kind:F.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:F.SELECTION_SET,selections:this.many(R.BRACE_L,this.parseSelection,R.BRACE_R)})}parseSelection(){return this.peek(R.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let o,a;return this.expectOptionalToken(R.COLON)?(o=t,a=this.parseName()):a=t,this.node(e,{kind:F.FIELD,alias:o,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(R.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(R.PAREN_L,t,R.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,o=this.parseName();return this.expectToken(R.COLON),this.node(t,{kind:F.ARGUMENT,name:o,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(R.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(R.NAME)?this.node(e,{kind:F.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:F.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:F.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:F.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case R.BRACKET_L:return this.parseList(e);case R.BRACE_L:return this.parseObject(e);case R.INT:return this.advanceLexer(),this.node(t,{kind:F.INT,value:t.value});case R.FLOAT:return this.advanceLexer(),this.node(t,{kind:F.FLOAT,value:t.value});case R.STRING:case R.BLOCK_STRING:return this.parseStringLiteral();case R.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:F.BOOLEAN,value:!0});case"false":return this.node(t,{kind:F.BOOLEAN,value:!1});case"null":return this.node(t,{kind:F.NULL});default:return this.node(t,{kind:F.ENUM,value:t.value})}case R.DOLLAR:if(e)if(this.expectToken(R.DOLLAR),this._lexer.token.kind===R.NAME){const o=this._lexer.token.value;throw Xn(this._lexer.source,t.start,`Unexpected variable "$${o}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:F.STRING,value:e.value,block:e.kind===R.BLOCK_STRING})}parseList(e){const t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:F.LIST,values:this.any(R.BRACKET_L,t,R.BRACKET_R)})}parseObject(e){const t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:F.OBJECT,fields:this.any(R.BRACE_L,t,R.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,o=this.parseName();return this.expectToken(R.COLON),this.node(t,{kind:F.OBJECT_FIELD,name:o,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(R.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(R.AT),this.node(t,{kind:F.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(R.BRACKET_L)){const o=this.parseTypeReference();this.expectToken(R.BRACKET_R),t=this.node(e,{kind:F.LIST_TYPE,type:o})}else t=this.parseNamedType();return this.expectOptionalToken(R.BANG)?this.node(e,{kind:F.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:F.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(R.STRING)||this.peek(R.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const o=this.parseConstDirectives(),a=this.many(R.BRACE_L,this.parseOperationTypeDefinition,R.BRACE_R);return this.node(e,{kind:F.SCHEMA_DEFINITION,description:t,directives:o,operationTypes:a})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(R.COLON);const o=this.parseNamedType();return this.node(e,{kind:F.OPERATION_TYPE_DEFINITION,operation:t,type:o})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const o=this.parseName(),a=this.parseConstDirectives();return this.node(e,{kind:F.SCALAR_TYPE_DEFINITION,description:t,name:o,directives:a})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const o=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:F.OBJECT_TYPE_DEFINITION,description:t,name:o,interfaces:a,directives:s,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(R.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(R.BRACE_L,this.parseFieldDefinition,R.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),o=this.parseName(),a=this.parseArgumentDefs();this.expectToken(R.COLON);const s=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(e,{kind:F.FIELD_DEFINITION,description:t,name:o,arguments:a,type:s,directives:l})}parseArgumentDefs(){return this.optionalMany(R.PAREN_L,this.parseInputValueDef,R.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),o=this.parseName();this.expectToken(R.COLON);const a=this.parseTypeReference();let s;this.expectOptionalToken(R.EQUALS)&&(s=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(e,{kind:F.INPUT_VALUE_DEFINITION,description:t,name:o,type:a,defaultValue:s,directives:l})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const o=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:F.INTERFACE_TYPE_DEFINITION,description:t,name:o,interfaces:a,directives:s,fields:l})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const o=this.parseName(),a=this.parseConstDirectives(),s=this.parseUnionMemberTypes();return this.node(e,{kind:F.UNION_TYPE_DEFINITION,description:t,name:o,directives:a,types:s})}parseUnionMemberTypes(){return this.expectOptionalToken(R.EQUALS)?this.delimitedMany(R.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const o=this.parseName(),a=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();return this.node(e,{kind:F.ENUM_TYPE_DEFINITION,description:t,name:o,directives:a,values:s})}parseEnumValuesDefinition(){return this.optionalMany(R.BRACE_L,this.parseEnumValueDefinition,R.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),o=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(e,{kind:F.ENUM_VALUE_DEFINITION,description:t,name:o,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Xn(this._lexer.source,this._lexer.token.start,`${Eo(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const o=this.parseName(),a=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();return this.node(e,{kind:F.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:o,directives:a,fields:s})}parseInputFieldsDefinition(){return this.optionalMany(R.BRACE_L,this.parseInputValueDef,R.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===R.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),o=this.optionalMany(R.BRACE_L,this.parseOperationTypeDefinition,R.BRACE_R);if(t.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:F.SCHEMA_EXTENSION,directives:t,operationTypes:o})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),o=this.parseConstDirectives();if(o.length===0)throw this.unexpected();return this.node(e,{kind:F.SCALAR_TYPE_EXTENSION,name:t,directives:o})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(o.length===0&&a.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:F.OBJECT_TYPE_EXTENSION,name:t,interfaces:o,directives:a,fields:s})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(o.length===0&&a.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:F.INTERFACE_TYPE_EXTENSION,name:t,interfaces:o,directives:a,fields:s})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),o=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(o.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:F.UNION_TYPE_EXTENSION,name:t,directives:o,types:a})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),o=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(o.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:F.ENUM_TYPE_EXTENSION,name:t,directives:o,values:a})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),o=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(o.length===0&&a.length===0)throw this.unexpected();return this.node(e,{kind:F.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:o,fields:a})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(R.AT);const o=this.parseName(),a=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(e,{kind:F.DIRECTIVE_DEFINITION,description:t,name:o,arguments:a,repeatable:s,locations:l})}parseDirectiveLocations(){return this.delimitedMany(R.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(j,t.value))return t;throw this.unexpected(e)}node(e,t){return this._options.noLocation!==!0&&(t.loc=new LC(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw Xn(this._lexer.source,t.start,`Expected ${Kc(e)}, found ${Eo(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const t=this._lexer.token;if(t.kind===R.NAME&&t.value===e)this.advanceLexer();else throw Xn(this._lexer.source,t.start,`Expected "${e}", found ${Eo(t)}.`)}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===R.NAME&&t.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const t=e??this._lexer.token;return Xn(this._lexer.source,t.start,`Unexpected ${Eo(t)}.`)}any(e,t,o){this.expectToken(e);const a=[];for(;!this.expectOptionalToken(o);)a.push(t.call(this));return a}optionalMany(e,t,o){if(this.expectOptionalToken(e)){const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(o));return a}return[]}many(e,t,o){this.expectToken(e);const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(o));return a}delimitedMany(e,t){this.expectOptionalToken(e);const o=[];do o.push(t.call(this));while(this.expectOptionalToken(e));return o}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(e!==void 0&&t.kind!==R.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw Xn(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function Eo(i){const e=i.value;return Kc(i.kind)+(e!=null?` "${e}"`:"")}function Kc(i){return $C(i)?`"${i}"`:i}const pE=5;function Yt(i,e){const[t,o]=e?[i,e]:[void 0,i];let a=" Did you mean ";t&&(a+=t+" ");const s=o.map(d=>`"${d}"`);switch(s.length){case 0:return"";case 1:return a+s[0]+"?";case 2:return a+s[0]+" or "+s[1]+"?"}const l=s.slice(0,pE),c=l.pop();return a+l.join(", ")+", or "+c+"?"}function sc(i){return i}function mi(i,e){const t=Object.create(null);for(const o of i)t[e(o)]=o;return t}function li(i,e,t){const o=Object.create(null);for(const a of i)o[e(a)]=t(a);return o}function Dt(i,e){const t=Object.create(null);for(const o of Object.keys(i))t[o]=e(i[o],o);return t}function Qs(i,e){let t=0,o=0;for(;t<i.length&&o<e.length;){let a=i.charCodeAt(t),s=e.charCodeAt(o);if(Oo(a)&&Oo(s)){let l=0;do++t,l=l*10+a-As,a=i.charCodeAt(t);while(Oo(a)&&l>0);let c=0;do++o,c=c*10+s-As,s=e.charCodeAt(o);while(Oo(s)&&c>0);if(l<c)return-1;if(l>c)return 1}else{if(a<s)return-1;if(a>s)return 1;++t,++o}}return i.length-e.length}const As=48,cE=57;function Oo(i){return!isNaN(i)&&As<=i&&i<=cE}function Si(i,e){const t=Object.create(null),o=new dE(i),a=Math.floor(i.length*.4)+1;for(const s of e){const l=o.measure(s,a);l!==void 0&&(t[s]=l)}return Object.keys(t).sort((s,l)=>{const c=t[s]-t[l];return c!==0?c:Qs(s,l)})}class dE{constructor(e){this._input=e,this._inputLowerCase=e.toLowerCase(),this._inputArray=uc(this._inputLowerCase),this._rows=[new Array(e.length+1).fill(0),new Array(e.length+1).fill(0),new Array(e.length+1).fill(0)]}measure(e,t){if(this._input===e)return 0;const o=e.toLowerCase();if(this._inputLowerCase===o)return 1;let a=uc(o),s=this._inputArray;if(a.length<s.length){const S=a;a=s,s=S}const l=a.length,c=s.length;if(l-c>t)return;const d=this._rows;for(let S=0;S<=c;S++)d[0][S]=S;for(let S=1;S<=l;S++){const y=d[(S-1)%3],_=d[S%3];let v=_[0]=S;for(let A=1;A<=c;A++){const k=a[S-1]===s[A-1]?0:1;let W=Math.min(y[A]+1,_[A-1]+1,y[A-1]+k);if(S>1&&A>1&&a[S-1]===s[A-2]&&a[S-2]===s[A-1]){const cn=d[(S-2)%3][A-2];W=Math.min(W,cn+1)}W<v&&(v=W),_[A]=W}if(v>t)return}const I=d[l%3][c];return I<=t?I:void 0}}function uc(i){const e=i.length,t=new Array(e);for(let o=0;o<e;++o)t[o]=i.charCodeAt(o);return t}function Ve(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const e=Object.create(null);for(const[t,o]of Object.entries(i))e[t]=o;return e}function mE(i){return`"${i.replace(fE,gE)}"`}const fE=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function gE(i){return IE[i.charCodeAt(0)]}const IE=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],cr=Object.freeze({});function zc(i,e,t=Jc){const o=new Map;for(const cn of Object.values(F))o.set(cn,Xc(e,cn));let a,s=Array.isArray(i),l=[i],c=-1,d=[],I=i,S,y;const _=[],v=[];do{c++;const cn=c===l.length,vn=cn&&d.length!==0;if(cn){if(S=v.length===0?void 0:_[_.length-1],I=y,y=v.pop(),vn)if(s){I=I.slice();let Un=0;for(const[Hn,Kn]of d){const Pn=Hn-Un;Kn===null?(I.splice(Pn,1),Un++):I[Pn]=Kn}}else{I=Object.defineProperties({},Object.getOwnPropertyDescriptors(I));for(const[Un,Hn]of d)I[Un]=Hn}c=a.index,l=a.keys,d=a.edits,s=a.inArray,a=a.prev}else if(y){if(S=s?c:l[c],I=y[S],I==null)continue;_.push(S)}let hn;if(!Array.isArray(I)){var A,k;oc(I)||dn(!1,`Invalid AST Node: ${M(I)}.`);const Un=cn?(A=o.get(I.kind))===null||A===void 0?void 0:A.leave:(k=o.get(I.kind))===null||k===void 0?void 0:k.enter;if(hn=Un==null?void 0:Un.call(e,I,S,y,_,v),hn===cr)break;if(hn===!1){if(!cn){_.pop();continue}}else if(hn!==void 0&&(d.push([S,hn]),!cn))if(oc(hn))I=hn;else{_.pop();continue}}if(hn===void 0&&vn&&d.push([S,I]),cn)_.pop();else{var W;a={inArray:s,index:c,keys:l,edits:d,prev:a},s=Array.isArray(I),l=s?I:(W=t[I.kind])!==null&&W!==void 0?W:[],c=-1,d=[],y&&v.push(y),y=I}}while(a!==void 0);return d.length!==0?d[d.length-1][1]:i}function SE(i){const e=new Array(i.length).fill(null),t=Object.create(null);for(const o of Object.values(F)){let a=!1;const s=new Array(i.length).fill(void 0),l=new Array(i.length).fill(void 0);for(let d=0;d<i.length;++d){const{enter:I,leave:S}=Xc(i[d],o);a||(a=I!=null||S!=null),s[d]=I,l[d]=S}if(!a)continue;const c={enter(...d){const I=d[0];for(let y=0;y<i.length;y++)if(e[y]===null){var S;const _=(S=s[y])===null||S===void 0?void 0:S.apply(i[y],d);if(_===!1)e[y]=I;else if(_===cr)e[y]=cr;else if(_!==void 0)return _}},leave(...d){const I=d[0];for(let y=0;y<i.length;y++)if(e[y]===null){var S;const _=(S=l[y])===null||S===void 0?void 0:S.apply(i[y],d);if(_===cr)e[y]=cr;else if(_!==void 0&&_!==!1)return _}else e[y]===I&&(e[y]=null)}};t[o]=c}return t}function Xc(i,e){const t=i[e];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function Zn(i){return zc(i,yE)}const hE=80,yE={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>V(i.definitions,`

`)},OperationDefinition:{leave(i){const e=ln("(",V(i.variableDefinitions,", "),")"),t=V([i.operation,V([i.name,e]),V(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:e,defaultValue:t,directives:o})=>i+": "+e+ln(" = ",t)+ln(" ",V(o," "))},SelectionSet:{leave:({selections:i})=>ze(i)},Field:{leave({alias:i,name:e,arguments:t,directives:o,selectionSet:a}){const s=ln("",i,": ")+e;let l=s+ln("(",V(t,", "),")");return l.length>hE&&(l=s+ln(`(
`,vo(V(t,`
`)),`
)`)),V([l,V(o," "),a]," ")}},Argument:{leave:({name:i,value:e})=>i+": "+e},FragmentSpread:{leave:({name:i,directives:e})=>"..."+i+ln(" ",V(e," "))},InlineFragment:{leave:({typeCondition:i,directives:e,selectionSet:t})=>V(["...",ln("on ",i),V(e," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:e,variableDefinitions:t,directives:o,selectionSet:a})=>`fragment ${i}${ln("(",V(t,", "),")")} on ${e} ${ln("",V(o," ")," ")}`+a},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:e})=>e?JC(i):mE(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+V(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+V(i,", ")+"}"},ObjectField:{leave:({name:i,value:e})=>i+": "+e},Directive:{leave:({name:i,arguments:e})=>"@"+i+ln("(",V(e,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:e,operationTypes:t})=>ln("",i,`
`)+V(["schema",V(e," "),ze(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:e})=>i+": "+e},ScalarTypeDefinition:{leave:({description:i,name:e,directives:t})=>ln("",i,`
`)+V(["scalar",e,V(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:e,interfaces:t,directives:o,fields:a})=>ln("",i,`
`)+V(["type",e,ln("implements ",V(t," & ")),V(o," "),ze(a)]," ")},FieldDefinition:{leave:({description:i,name:e,arguments:t,type:o,directives:a})=>ln("",i,`
`)+e+(lc(t)?ln(`(
`,vo(V(t,`
`)),`
)`):ln("(",V(t,", "),")"))+": "+o+ln(" ",V(a," "))},InputValueDefinition:{leave:({description:i,name:e,type:t,defaultValue:o,directives:a})=>ln("",i,`
`)+V([e+": "+t,ln("= ",o),V(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:e,interfaces:t,directives:o,fields:a})=>ln("",i,`
`)+V(["interface",e,ln("implements ",V(t," & ")),V(o," "),ze(a)]," ")},UnionTypeDefinition:{leave:({description:i,name:e,directives:t,types:o})=>ln("",i,`
`)+V(["union",e,V(t," "),ln("= ",V(o," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:e,directives:t,values:o})=>ln("",i,`
`)+V(["enum",e,V(t," "),ze(o)]," ")},EnumValueDefinition:{leave:({description:i,name:e,directives:t})=>ln("",i,`
`)+V([e,V(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:e,directives:t,fields:o})=>ln("",i,`
`)+V(["input",e,V(t," "),ze(o)]," ")},DirectiveDefinition:{leave:({description:i,name:e,arguments:t,repeatable:o,locations:a})=>ln("",i,`
`)+"directive @"+e+(lc(t)?ln(`(
`,vo(V(t,`
`)),`
)`):ln("(",V(t,", "),")"))+(o?" repeatable":"")+" on "+V(a," | ")},SchemaExtension:{leave:({directives:i,operationTypes:e})=>V(["extend schema",V(i," "),ze(e)]," ")},ScalarTypeExtension:{leave:({name:i,directives:e})=>V(["extend scalar",i,V(e," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:e,directives:t,fields:o})=>V(["extend type",i,ln("implements ",V(e," & ")),V(t," "),ze(o)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:e,directives:t,fields:o})=>V(["extend interface",i,ln("implements ",V(e," & ")),V(t," "),ze(o)]," ")},UnionTypeExtension:{leave:({name:i,directives:e,types:t})=>V(["extend union",i,V(e," "),ln("= ",V(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:e,values:t})=>V(["extend enum",i,V(e," "),ze(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:e,fields:t})=>V(["extend input",i,V(e," "),ze(t)]," ")}};function V(i,e=""){var t;return(t=i==null?void 0:i.filter(o=>o).join(e))!==null&&t!==void 0?t:""}function ze(i){return ln(`{
`,vo(V(i,`
`)),`
}`)}function ln(i,e,t=""){return e!=null&&e!==""?i+e+t:""}function vo(i){return ln("  ",i.replace(/\n/g,`
  `))}function lc(i){var e;return(e=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&e!==void 0?e:!1}function Ns(i,e){switch(i.kind){case F.NULL:return null;case F.INT:return parseInt(i.value,10);case F.FLOAT:return parseFloat(i.value);case F.STRING:case F.ENUM:case F.BOOLEAN:return i.value;case F.LIST:return i.values.map(t=>Ns(t,e));case F.OBJECT:return li(i.fields,t=>t.name.value,t=>Ns(t.value,e));case F.VARIABLE:return e==null?void 0:e[i.name.value]}}function ot(i){if(i!=null||dn(!1,"Must provide name."),typeof i=="string"||dn(!1,"Expected name to be a string."),i.length===0)throw new P("Expected name to be a non-empty string.");for(let e=1;e<i.length;++e)if(!$c(i.charCodeAt(e)))throw new P(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Hs(i.charCodeAt(0)))throw new P(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function TE(i){if(i==="true"||i==="false"||i==="null")throw new P(`Enum values cannot be named: ${i}`);return ot(i)}function Ys(i){return Kt(i)||jn(i)||Vn(i)||Je(i)||nt(i)||he(i)||ye(i)||Dn(i)}function Kt(i){return ft(i,_t)}function jn(i){return ft(i,dt)}function FE(i){if(!jn(i))throw new Error(`Expected ${M(i)} to be a GraphQL Object type.`);return i}function Vn(i){return ft(i,Bo)}function CE(i){if(!Vn(i))throw new Error(`Expected ${M(i)} to be a GraphQL Interface type.`);return i}function Je(i){return ft(i,Uo)}function nt(i){return ft(i,xi)}function he(i){return ft(i,Po)}function ye(i){return ft(i,ce)}function Dn(i){return ft(i,on)}function Ks(i){return Kt(i)||nt(i)||he(i)||zs(i)&&Ks(i.ofType)}function Zc(i){return Kt(i)||jn(i)||Vn(i)||Je(i)||nt(i)||zs(i)&&Zc(i.ofType)}function ki(i){return Kt(i)||nt(i)}function Fr(i){return jn(i)||Vn(i)||Je(i)}function pi(i){return Vn(i)||Je(i)}class ce{constructor(e){Ys(e)||dn(!1,`Expected ${M(e)} to be a GraphQL type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class on{constructor(e){nd(e)||dn(!1,`Expected ${M(e)} to be a GraphQL nullable type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function zs(i){return ye(i)||Dn(i)}function nd(i){return Ys(i)&&!Dn(i)}function EE(i){if(!nd(i))throw new Error(`Expected ${M(i)} to be a GraphQL nullable type.`);return i}function OE(i){if(i)return Dn(i)?i.ofType:i}function vb(i){return Kt(i)||jn(i)||Vn(i)||Je(i)||nt(i)||he(i)}function fi(i){if(i){let e=i;for(;zs(e);)e=e.ofType;return e}}function ed(i){return typeof i=="function"?i():i}function td(i){return typeof i=="function"?i():i}class _t{constructor(e){var t,o,a,s;const l=(t=e.parseValue)!==null&&t!==void 0?t:sc;this.name=ot(e.name),this.description=e.description,this.specifiedByURL=e.specifiedByURL,this.serialize=(o=e.serialize)!==null&&o!==void 0?o:sc,this.parseValue=l,this.parseLiteral=(a=e.parseLiteral)!==null&&a!==void 0?a:(c,d)=>l(Ns(c,d)),this.extensions=Ve(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(s=e.extensionASTNodes)!==null&&s!==void 0?s:[],e.specifiedByURL==null||typeof e.specifiedByURL=="string"||dn(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${M(e.specifiedByURL)}.`),e.serialize==null||typeof e.serialize=="function"||dn(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),e.parseLiteral&&(typeof e.parseValue=="function"&&typeof e.parseLiteral=="function"||dn(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class dt{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.isTypeOf=e.isTypeOf,this.extensions=Ve(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>rd(e),this._interfaces=()=>id(e),e.isTypeOf==null||typeof e.isTypeOf=="function"||dn(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${M(e.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:ad(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function id(i){var e;const t=ed((e=i.interfaces)!==null&&e!==void 0?e:[]);return Array.isArray(t)||dn(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function rd(i){const e=td(i.fields);return Pi(e)||dn(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),Dt(e,(t,o)=>{var a;Pi(t)||dn(!1,`${i.name}.${o} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||dn(!1,`${i.name}.${o} field resolver must be a function if provided, but got: ${M(t.resolve)}.`);const s=(a=t.args)!==null&&a!==void 0?a:{};return Pi(s)||dn(!1,`${i.name}.${o} args must be an object with argument names as keys.`),{name:ot(o),description:t.description,type:t.type,args:od(s),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Ve(t.extensions),astNode:t.astNode}})}function od(i){return Object.entries(i).map(([e,t])=>({name:ot(e),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Ve(t.extensions),astNode:t.astNode}))}function Pi(i){return Rt(i)&&!Array.isArray(i)}function ad(i){return Dt(i,e=>({description:e.description,type:e.type,args:sd(e.args),resolve:e.resolve,subscribe:e.subscribe,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function sd(i){return li(i,e=>e.name,e=>({description:e.description,type:e.type,defaultValue:e.defaultValue,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function ud(i){return Dn(i.type)&&i.defaultValue===void 0}class Bo{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Ve(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=rd.bind(void 0,e),this._interfaces=id.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||dn(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:ad(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Uo{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Ve(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=bE.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||dn(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function bE(i){const e=ed(i.types);return Array.isArray(e)||dn(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),e}class xi{constructor(e){var t;this.name=ot(e.name),this.description=e.description,this.extensions=Ve(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof e.values=="function"?e.values:pc(this.name,e.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=pc(this.name,this._values())),this._values}getValue(e){return this._nameLookup===null&&(this._nameLookup=mi(this.getValues(),t=>t.name)),this._nameLookup[e]}serialize(e){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(o=>[o.value,o])));const t=this._valueLookup.get(e);if(t===void 0)throw new P(`Enum "${this.name}" cannot represent value: ${M(e)}`);return t.name}parseValue(e){if(typeof e!="string"){const o=M(e);throw new P(`Enum "${this.name}" cannot represent non-string value: ${o}.`+bo(this,o))}const t=this.getValue(e);if(t==null)throw new P(`Value "${e}" does not exist in "${this.name}" enum.`+bo(this,e));return t.value}parseLiteral(e,t){if(e.kind!==F.ENUM){const a=Zn(e);throw new P(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+bo(this,a),{nodes:e})}const o=this.getValue(e.value);if(o==null){const a=Zn(e);throw new P(`Value "${a}" does not exist in "${this.name}" enum.`+bo(this,a),{nodes:e})}return o.value}toConfig(){const e=li(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function bo(i,e){const t=i.getValues().map(a=>a.name),o=Si(e,t);return Yt("the enum value",o)}function pc(i,e){return Pi(e)||dn(!1,`${i} values must be an object with value names as keys.`),Object.entries(e).map(([t,o])=>(Pi(o)||dn(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${M(o)}.`),{name:TE(t),description:o.description,value:o.value!==void 0?o.value:t,deprecationReason:o.deprecationReason,extensions:Ve(o.extensions),astNode:o.astNode}))}class Po{constructor(e){var t,o;this.name=ot(e.name),this.description=e.description,this.extensions=Ve(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(o=e.isOneOf)!==null&&o!==void 0?o:!1,this._fields=DE.bind(void 0,e)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const e=Dt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function DE(i){const e=td(i.fields);return Pi(e)||dn(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),Dt(e,(t,o)=>(!("resolve"in t)||dn(!1,`${i.name}.${o} field has a resolve property, but Input Types cannot define resolvers.`),{name:ot(o),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Ve(t.extensions),astNode:t.astNode}))}function vE(i){return Dn(i.type)&&i.defaultValue===void 0}function Ir(i,e,t){return e===t?!0:Dn(t)?Dn(e)?Ir(i,e.ofType,t.ofType):!1:Dn(e)?Ir(i,e.ofType,t):ye(t)?ye(e)?Ir(i,e.ofType,t.ofType):!1:ye(e)?!1:pi(t)&&(Vn(e)||jn(e))&&i.isSubType(t,e)}function cc(i,e,t){return e===t?!0:pi(e)?pi(t)?i.getPossibleTypes(e).some(o=>i.isSubType(t,o)):i.isSubType(e,t):pi(t)?i.isSubType(t,e):!1}const Ts=2147483647,Fs=-2147483648,AE=new _t({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const e=Dr(i);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isInteger(t))throw new P(`Int cannot represent non-integer value: ${M(e)}`);if(t>Ts||t<Fs)throw new P("Int cannot represent non 32-bit signed integer value: "+M(e));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new P(`Int cannot represent non-integer value: ${M(i)}`);if(i>Ts||i<Fs)throw new P(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==F.INT)throw new P(`Int cannot represent non-integer value: ${Zn(i)}`,{nodes:i});const e=parseInt(i.value,10);if(e>Ts||e<Fs)throw new P(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return e}}),NE=new _t({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const e=Dr(i);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isFinite(t))throw new P(`Float cannot represent non numeric value: ${M(e)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new P(`Float cannot represent non numeric value: ${M(i)}`);return i},parseLiteral(i){if(i.kind!==F.FLOAT&&i.kind!==F.INT)throw new P(`Float cannot represent non numeric value: ${Zn(i)}`,i);return parseFloat(i.value)}}),Jn=new _t({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const e=Dr(i);if(typeof e=="string")return e;if(typeof e=="boolean")return e?"true":"false";if(typeof e=="number"&&Number.isFinite(e))return e.toString();throw new P(`String cannot represent value: ${M(i)}`)},parseValue(i){if(typeof i!="string")throw new P(`String cannot represent a non string value: ${M(i)}`);return i},parseLiteral(i){if(i.kind!==F.STRING)throw new P(`String cannot represent a non string value: ${Zn(i)}`,{nodes:i});return i.value}}),Ne=new _t({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const e=Dr(i);if(typeof e=="boolean")return e;if(Number.isFinite(e))return e!==0;throw new P(`Boolean cannot represent a non boolean value: ${M(e)}`)},parseValue(i){if(typeof i!="boolean")throw new P(`Boolean cannot represent a non boolean value: ${M(i)}`);return i},parseLiteral(i){if(i.kind!==F.BOOLEAN)throw new P(`Boolean cannot represent a non boolean value: ${Zn(i)}`,{nodes:i});return i.value}}),ld=new _t({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const e=Dr(i);if(typeof e=="string")return e;if(Number.isInteger(e))return String(e);throw new P(`ID cannot represent value: ${M(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new P(`ID cannot represent value: ${M(i)}`)},parseLiteral(i){if(i.kind!==F.STRING&&i.kind!==F.INT)throw new P("ID cannot represent a non-string and non-integer value: "+Zn(i),{nodes:i});return i.value}}),jo=Object.freeze([Jn,AE,NE,Ne,ld]);function wE(i){return jo.some(({name:e})=>i.name===e)}function Dr(i){if(Rt(i)){if(typeof i.valueOf=="function"){const e=i.valueOf();if(!Rt(e))return e}if(typeof i.toJSON=="function")return i.toJSON()}return i}function RE(i){return ft(i,Bt)}class Bt{constructor(e){var t,o;this.name=ot(e.name),this.description=e.description,this.locations=e.locations,this.isRepeatable=(t=e.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Ve(e.extensions),this.astNode=e.astNode,Array.isArray(e.locations)||dn(!1,`@${e.name} locations must be an Array.`);const a=(o=e.args)!==null&&o!==void 0?o:{};Rt(a)&&!Array.isArray(a)||dn(!1,`@${e.name} args must be an object with argument names as keys.`),this.args=od(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:sd(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const pd=new Bt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new on(Ne),description:"Included when true."}}}),cd=new Bt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new on(Ne),description:"Skipped when true."}}}),_E="No longer supported",dd=new Bt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[j.FIELD_DEFINITION,j.ARGUMENT_DEFINITION,j.INPUT_FIELD_DEFINITION,j.ENUM_VALUE],args:{reason:{type:Jn,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:_E}}}),md=new Bt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[j.SCALAR],args:{url:{type:new on(Jn),description:"The URL that specifies the behavior of this scalar."}}}),fd=new Bt({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[j.INPUT_OBJECT],args:{}}),Mi=Object.freeze([pd,cd,dd,md,fd]);function BE(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function dr(i,e){if(Dn(e)){const t=dr(i,e.ofType);return(t==null?void 0:t.kind)===F.NULL?null:t}if(i===null)return{kind:F.NULL};if(i===void 0)return null;if(ye(e)){const t=e.ofType;if(BE(i)){const o=[];for(const a of i){const s=dr(a,t);s!=null&&o.push(s)}return{kind:F.LIST,values:o}}return dr(i,t)}if(he(e)){if(!Rt(i))return null;const t=[];for(const o of Object.values(e.getFields())){const a=dr(i[o.name],o.type);a&&t.push({kind:F.OBJECT_FIELD,name:{kind:F.NAME,value:o.name},value:a})}return{kind:F.OBJECT,fields:t}}if(ki(e)){const t=e.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:F.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const o=String(t);return dc.test(o)?{kind:F.INT,value:o}:{kind:F.FLOAT,value:o}}if(typeof t=="string")return nt(e)?{kind:F.ENUM,value:t}:e===ld&&dc.test(t)?{kind:F.INT,value:t}:{kind:F.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${M(t)}.`)}Ze(!1,"Unexpected input type: "+M(e))}const dc=/^-?(?:0|[1-9][0-9]*)$/,Xs=new dt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Jn,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new on(new ce(new on(ct))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new on(ct),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:ct,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:ct,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new on(new ce(new on(gd))),resolve:i=>i.getDirectives()}})}),gd=new dt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new on(Jn),resolve:i=>i.name},description:{type:Jn,resolve:i=>i.description},isRepeatable:{type:new on(Ne),resolve:i=>i.isRepeatable},locations:{type:new on(new ce(new on(Id))),resolve:i=>i.locations},args:{type:new on(new ce(new on(Ho))),args:{includeDeprecated:{type:Ne,defaultValue:!1}},resolve(i,{includeDeprecated:e}){return e?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),Id=new xi({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:j.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:j.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:j.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:j.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:j.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:j.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:j.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:j.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:j.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:j.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:j.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:j.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:j.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:j.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:j.UNION,description:"Location adjacent to a union definition."},ENUM:{value:j.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:j.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:j.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:j.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),ct=new dt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new on(yd),resolve(i){if(Kt(i))return On.SCALAR;if(jn(i))return On.OBJECT;if(Vn(i))return On.INTERFACE;if(Je(i))return On.UNION;if(nt(i))return On.ENUM;if(he(i))return On.INPUT_OBJECT;if(ye(i))return On.LIST;if(Dn(i))return On.NON_NULL;Ze(!1,`Unexpected type: "${M(i)}".`)}},name:{type:Jn,resolve:i=>"name"in i?i.name:void 0},description:{type:Jn,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Jn,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new ce(new on(Sd)),args:{includeDeprecated:{type:Ne,defaultValue:!1}},resolve(i,{includeDeprecated:e}){if(jn(i)||Vn(i)){const t=Object.values(i.getFields());return e?t:t.filter(o=>o.deprecationReason==null)}}},interfaces:{type:new ce(new on(ct)),resolve(i){if(jn(i)||Vn(i))return i.getInterfaces()}},possibleTypes:{type:new ce(new on(ct)),resolve(i,e,t,{schema:o}){if(pi(i))return o.getPossibleTypes(i)}},enumValues:{type:new ce(new on(hd)),args:{includeDeprecated:{type:Ne,defaultValue:!1}},resolve(i,{includeDeprecated:e}){if(nt(i)){const t=i.getValues();return e?t:t.filter(o=>o.deprecationReason==null)}}},inputFields:{type:new ce(new on(Ho)),args:{includeDeprecated:{type:Ne,defaultValue:!1}},resolve(i,{includeDeprecated:e}){if(he(i)){const t=Object.values(i.getFields());return e?t:t.filter(o=>o.deprecationReason==null)}}},ofType:{type:ct,resolve:i=>"ofType"in i?i.ofType:void 0},isOneOf:{type:Ne,resolve:i=>{if(he(i))return i.isOneOf}}})}),Sd=new dt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new on(Jn),resolve:i=>i.name},description:{type:Jn,resolve:i=>i.description},args:{type:new on(new ce(new on(Ho))),args:{includeDeprecated:{type:Ne,defaultValue:!1}},resolve(i,{includeDeprecated:e}){return e?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new on(ct),resolve:i=>i.type},isDeprecated:{type:new on(Ne),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Jn,resolve:i=>i.deprecationReason}})}),Ho=new dt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new on(Jn),resolve:i=>i.name},description:{type:Jn,resolve:i=>i.description},type:{type:new on(ct),resolve:i=>i.type},defaultValue:{type:Jn,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:e,defaultValue:t}=i,o=dr(t,e);return o?Zn(o):null}},isDeprecated:{type:new on(Ne),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Jn,resolve:i=>i.deprecationReason}})}),hd=new dt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new on(Jn),resolve:i=>i.name},description:{type:Jn,resolve:i=>i.description},isDeprecated:{type:new on(Ne),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Jn,resolve:i=>i.deprecationReason}})});var On;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(On||(On={}));const yd=new xi({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:On.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:On.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:On.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:On.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:On.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:On.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:On.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:On.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new on(Xs);new on(Jn);new on(Jn);const Qo=Object.freeze([Xs,gd,Id,ct,Sd,Ho,hd,yd]);function UE(i){return Qo.some(({name:e})=>i.name===e)}class Td{constructor(e){var t,o;this.__validationErrors=e.assumeValid===!0?[]:void 0,Rt(e)||dn(!1,"Must provide configuration object."),!e.types||Array.isArray(e.types)||dn(!1,`"types" must be Array if provided but got: ${M(e.types)}.`),!e.directives||Array.isArray(e.directives)||dn(!1,`"directives" must be Array if provided but got: ${M(e.directives)}.`),this.description=e.description,this.extensions=Ve(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=e.query,this._mutationType=e.mutation,this._subscriptionType=e.subscription,this._directives=(o=e.directives)!==null&&o!==void 0?o:Mi;const a=new Set(e.types);if(e.types!=null)for(const s of e.types)a.delete(s),Xe(s,a);this._queryType!=null&&Xe(this._queryType,a),this._mutationType!=null&&Xe(this._mutationType,a),this._subscriptionType!=null&&Xe(this._subscriptionType,a);for(const s of this._directives)if(RE(s))for(const l of s.args)Xe(l.type,a);Xe(Xs,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const s of a){if(s==null)continue;const l=s.name;if(l||dn(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=s,Vn(s)){for(const c of s.getInterfaces())if(Vn(c)){let d=this._implementationsMap[c.name];d===void 0&&(d=this._implementationsMap[c.name]={objects:[],interfaces:[]}),d.interfaces.push(s)}}else if(jn(s)){for(const c of s.getInterfaces())if(Vn(c)){let d=this._implementationsMap[c.name];d===void 0&&(d=this._implementationsMap[c.name]={objects:[],interfaces:[]}),d.objects.push(s)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(e){switch(e){case Ge.QUERY:return this.getQueryType();case Ge.MUTATION:return this.getMutationType();case Ge.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(e){return this.getTypeMap()[e]}getPossibleTypes(e){return Je(e)?e.getTypes():this.getImplementations(e).objects}getImplementations(e){const t=this._implementationsMap[e.name];return t??{objects:[],interfaces:[]}}isSubType(e,t){let o=this._subTypeMap[e.name];if(o===void 0){if(o=Object.create(null),Je(e))for(const a of e.getTypes())o[a.name]=!0;else{const a=this.getImplementations(e);for(const s of a.objects)o[s.name]=!0;for(const s of a.interfaces)o[s.name]=!0}this._subTypeMap[e.name]=o}return o[t.name]!==void 0}getDirectives(){return this._directives}getDirective(e){return this.getDirectives().find(t=>t.name===e)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Xe(i,e){const t=fi(i);if(!e.has(t)){if(e.add(t),Je(t))for(const o of t.getTypes())Xe(o,e);else if(jn(t)||Vn(t)){for(const o of t.getInterfaces())Xe(o,e);for(const o of Object.values(t.getFields())){Xe(o.type,e);for(const a of o.args)Xe(a.type,e)}}else if(he(t))for(const o of Object.values(t.getFields()))Xe(o.type,e)}return e}function mt(i,e){switch(e.kind){case F.LIST_TYPE:{const t=mt(i,e.type);return t&&new ce(t)}case F.NON_NULL_TYPE:{const t=mt(i,e.type);return t&&new on(t)}case F.NAMED_TYPE:return i.getType(e.name.value)}}function PE(i){return i.kind===F.OPERATION_DEFINITION||i.kind===F.FRAGMENT_DEFINITION}function kE(i){return i.kind===F.SCHEMA_DEFINITION||vr(i)||i.kind===F.DIRECTIVE_DEFINITION}function vr(i){return i.kind===F.SCALAR_TYPE_DEFINITION||i.kind===F.OBJECT_TYPE_DEFINITION||i.kind===F.INTERFACE_TYPE_DEFINITION||i.kind===F.UNION_TYPE_DEFINITION||i.kind===F.ENUM_TYPE_DEFINITION||i.kind===F.INPUT_OBJECT_TYPE_DEFINITION}function xE(i){return i.kind===F.SCHEMA_EXTENSION||Zs(i)}function Zs(i){return i.kind===F.SCALAR_TYPE_EXTENSION||i.kind===F.OBJECT_TYPE_EXTENSION||i.kind===F.INTERFACE_TYPE_EXTENSION||i.kind===F.UNION_TYPE_EXTENSION||i.kind===F.ENUM_TYPE_EXTENSION||i.kind===F.INPUT_OBJECT_TYPE_EXTENSION}function LE(i){return{Document(e){for(const t of e.definitions)if(!PE(t)){const o=t.kind===F.SCHEMA_DEFINITION||t.kind===F.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';i.reportError(new P(`The ${o} definition is not executable.`,{nodes:t}))}return!1}}}function ME(i){return{Field(e){const t=i.getParentType();if(t&&!i.getFieldDef()){const a=i.getSchema(),s=e.name.value;let l=Yt("to use an inline fragment on",qE(a,t,s));l===""&&(l=Yt(GE(t,s))),i.reportError(new P(`Cannot query field "${s}" on type "${t.name}".`+l,{nodes:e}))}}}}function qE(i,e,t){if(!pi(e))return[];const o=new Set,a=Object.create(null);for(const l of i.getPossibleTypes(e))if(l.getFields()[t]){o.add(l),a[l.name]=1;for(const c of l.getInterfaces()){var s;c.getFields()[t]&&(o.add(c),a[c.name]=((s=a[c.name])!==null&&s!==void 0?s:0)+1)}}return[...o].sort((l,c)=>{const d=a[c.name]-a[l.name];return d!==0?d:Vn(l)&&i.isSubType(l,c)?-1:Vn(c)&&i.isSubType(c,l)?1:Qs(l.name,c.name)}).map(l=>l.name)}function GE(i,e){if(jn(i)||Vn(i)){const t=Object.keys(i.getFields());return Si(e,t)}return[]}function JE(i){return{InlineFragment(e){const t=e.typeCondition;if(t){const o=mt(i.getSchema(),t);if(o&&!Fr(o)){const a=Zn(t);i.reportError(new P(`Fragment cannot condition on non composite type "${a}".`,{nodes:t}))}}},FragmentDefinition(e){const t=mt(i.getSchema(),e.typeCondition);if(t&&!Fr(t)){const o=Zn(e.typeCondition);i.reportError(new P(`Fragment "${e.name.value}" cannot condition on non composite type "${o}".`,{nodes:e.typeCondition}))}}}}function VE(i){return{...Fd(i),Argument(e){const t=i.getArgument(),o=i.getFieldDef(),a=i.getParentType();if(!t&&o&&a){const s=e.name.value,l=o.args.map(d=>d.name),c=Si(s,l);i.reportError(new P(`Unknown argument "${s}" on field "${a.name}.${o.name}".`+Yt(c),{nodes:e}))}}}}function Fd(i){const e=Object.create(null),t=i.getSchema(),o=t?t.getDirectives():Mi;for(const l of o)e[l.name]=l.args.map(c=>c.name);const a=i.getDocument().definitions;for(const l of a)if(l.kind===F.DIRECTIVE_DEFINITION){var s;const c=(s=l.arguments)!==null&&s!==void 0?s:[];e[l.name.value]=c.map(d=>d.name.value)}return{Directive(l){const c=l.name.value,d=e[c];if(l.arguments&&d)for(const I of l.arguments){const S=I.name.value;if(!d.includes(S)){const y=Si(S,d);i.reportError(new P(`Unknown argument "${S}" on directive "@${c}".`+Yt(y),{nodes:I}))}}return!1}}}function Cd(i){const e=Object.create(null),t=i.getSchema(),o=t?t.getDirectives():Mi;for(const s of o)e[s.name]=s.locations;const a=i.getDocument().definitions;for(const s of a)s.kind===F.DIRECTIVE_DEFINITION&&(e[s.name.value]=s.locations.map(l=>l.value));return{Directive(s,l,c,d,I){const S=s.name.value,y=e[S];if(!y){i.reportError(new P(`Unknown directive "@${S}".`,{nodes:s}));return}const _=$E(I);_&&!y.includes(_)&&i.reportError(new P(`Directive "@${S}" may not be used on ${_}.`,{nodes:s}))}}}function $E(i){const e=i[i.length-1];switch("kind"in e||Ze(!1),e.kind){case F.OPERATION_DEFINITION:return WE(e.operation);case F.FIELD:return j.FIELD;case F.FRAGMENT_SPREAD:return j.FRAGMENT_SPREAD;case F.INLINE_FRAGMENT:return j.INLINE_FRAGMENT;case F.FRAGMENT_DEFINITION:return j.FRAGMENT_DEFINITION;case F.VARIABLE_DEFINITION:return j.VARIABLE_DEFINITION;case F.SCHEMA_DEFINITION:case F.SCHEMA_EXTENSION:return j.SCHEMA;case F.SCALAR_TYPE_DEFINITION:case F.SCALAR_TYPE_EXTENSION:return j.SCALAR;case F.OBJECT_TYPE_DEFINITION:case F.OBJECT_TYPE_EXTENSION:return j.OBJECT;case F.FIELD_DEFINITION:return j.FIELD_DEFINITION;case F.INTERFACE_TYPE_DEFINITION:case F.INTERFACE_TYPE_EXTENSION:return j.INTERFACE;case F.UNION_TYPE_DEFINITION:case F.UNION_TYPE_EXTENSION:return j.UNION;case F.ENUM_TYPE_DEFINITION:case F.ENUM_TYPE_EXTENSION:return j.ENUM;case F.ENUM_VALUE_DEFINITION:return j.ENUM_VALUE;case F.INPUT_OBJECT_TYPE_DEFINITION:case F.INPUT_OBJECT_TYPE_EXTENSION:return j.INPUT_OBJECT;case F.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Ze(!1),t.kind===F.INPUT_OBJECT_TYPE_DEFINITION?j.INPUT_FIELD_DEFINITION:j.ARGUMENT_DEFINITION}default:Ze(!1,"Unexpected kind: "+M(e.kind))}}function WE(i){switch(i){case Ge.QUERY:return j.QUERY;case Ge.MUTATION:return j.MUTATION;case Ge.SUBSCRIPTION:return j.SUBSCRIPTION}}function jE(i){return{FragmentSpread(e){const t=e.name.value;i.getFragment(t)||i.reportError(new P(`Unknown fragment "${t}".`,{nodes:e.name}))}}}function Ed(i){const e=i.getSchema(),t=e?e.getTypeMap():Object.create(null),o=Object.create(null);for(const s of i.getDocument().definitions)vr(s)&&(o[s.name.value]=!0);const a=[...Object.keys(t),...Object.keys(o)];return{NamedType(s,l,c,d,I){const S=s.name.value;if(!t[S]&&!o[S]){var y;const _=(y=I[2])!==null&&y!==void 0?y:c,v=_!=null&&HE(_);if(v&&mc.includes(S))return;const A=Si(S,v?mc.concat(a):a);i.reportError(new P(`Unknown type "${S}".`+Yt(A),{nodes:s}))}}}}const mc=[...jo,...Qo].map(i=>i.name);function HE(i){return"kind"in i&&(kE(i)||xE(i))}function QE(i){let e=0;return{Document(t){e=t.definitions.filter(o=>o.kind===F.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&e>1&&i.reportError(new P("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function YE(i){var e,t,o;const a=i.getSchema(),s=(e=(t=(o=a==null?void 0:a.astNode)!==null&&o!==void 0?o:a==null?void 0:a.getQueryType())!==null&&t!==void 0?t:a==null?void 0:a.getMutationType())!==null&&e!==void 0?e:a==null?void 0:a.getSubscriptionType();let l=0;return{SchemaDefinition(c){if(s){i.reportError(new P("Cannot define a new schema within a schema extension.",{nodes:c}));return}l>0&&i.reportError(new P("Must provide only one schema definition.",{nodes:c})),++l}}}const KE=3;function zE(i){function e(t,o=Object.create(null),a=0){if(t.kind===F.FRAGMENT_SPREAD){const s=t.name.value;if(o[s]===!0)return!1;const l=i.getFragment(s);if(!l)return!1;try{return o[s]=!0,e(l,o,a)}finally{o[s]=void 0}}if(t.kind===F.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(a++,a>=KE))return!0;if("selectionSet"in t&&t.selectionSet){for(const s of t.selectionSet.selections)if(e(s,o,a))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&e(t))return i.reportError(new P("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function XE(i){const e=Object.create(null),t=[],o=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(s){return a(s),!1}};function a(s){if(e[s.name.value])return;const l=s.name.value;e[l]=!0;const c=i.getFragmentSpreads(s.selectionSet);if(c.length!==0){o[l]=t.length;for(const d of c){const I=d.name.value,S=o[I];if(t.push(d),S===void 0){const y=i.getFragment(I);y&&a(y)}else{const y=t.slice(S),_=y.slice(0,-1).map(v=>'"'+v.name.value+'"').join(", ");i.reportError(new P(`Cannot spread fragment "${I}" within itself`+(_!==""?` via ${_}.`:"."),{nodes:y}))}t.pop()}o[l]=void 0}}}function ZE(i){let e=Object.create(null);return{OperationDefinition:{enter(){e=Object.create(null)},leave(t){const o=i.getRecursiveVariableUsages(t);for(const{node:a}of o){const s=a.name.value;e[s]!==!0&&i.reportError(new P(t.name?`Variable "$${s}" is not defined by operation "${t.name.value}".`:`Variable "$${s}" is not defined.`,{nodes:[a,t]}))}}},VariableDefinition(t){e[t.variable.name.value]=!0}}}function nO(i){const e=[],t=[];return{OperationDefinition(o){return e.push(o),!1},FragmentDefinition(o){return t.push(o),!1},Document:{leave(){const o=Object.create(null);for(const a of e)for(const s of i.getRecursivelyReferencedFragments(a))o[s.name.value]=!0;for(const a of t){const s=a.name.value;o[s]!==!0&&i.reportError(new P(`Fragment "${s}" is never used.`,{nodes:a}))}}}}}function eO(i){let e=[];return{OperationDefinition:{enter(){e=[]},leave(t){const o=Object.create(null),a=i.getRecursiveVariableUsages(t);for(const{node:s}of a)o[s.name.value]=!0;for(const s of e){const l=s.variable.name.value;o[l]!==!0&&i.reportError(new P(t.name?`Variable "$${l}" is never used in operation "${t.name.value}".`:`Variable "$${l}" is never used.`,{nodes:s}))}}},VariableDefinition(t){e.push(t)}}}function nu(i){switch(i.kind){case F.OBJECT:return{...i,fields:tO(i.fields)};case F.LIST:return{...i,values:i.values.map(nu)};case F.INT:case F.FLOAT:case F.STRING:case F.BOOLEAN:case F.NULL:case F.ENUM:case F.VARIABLE:return i}}function tO(i){return i.map(e=>({...e,value:nu(e.value)})).sort((e,t)=>Qs(e.name.value,t.name.value))}function Od(i){return Array.isArray(i)?i.map(([e,t])=>`subfields "${e}" conflict because `+Od(t)).join(" and "):i}function iO(i){const e=new lO,t=new Map;return{SelectionSet(o){const a=rO(i,t,e,i.getParentType(),o);for(const[[s,l],c,d]of a){const I=Od(l);i.reportError(new P(`Fields "${s}" conflict because ${I}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:c.concat(d)}))}}}}function rO(i,e,t,o,a){const s=[],[l,c]=Lo(i,e,o,a);if(aO(i,s,e,t,l),c.length!==0)for(let d=0;d<c.length;d++){ko(i,s,e,t,!1,l,c[d]);for(let I=d+1;I<c.length;I++)xo(i,s,e,t,!1,c[d],c[I])}return s}function ko(i,e,t,o,a,s,l){const c=i.getFragment(l);if(!c)return;const[d,I]=Rs(i,t,c);if(s!==d){eu(i,e,t,o,a,s,d);for(const S of I)o.has(S,l,a)||(o.add(S,l,a),ko(i,e,t,o,a,s,S))}}function xo(i,e,t,o,a,s,l){if(s===l||o.has(s,l,a))return;o.add(s,l,a);const c=i.getFragment(s),d=i.getFragment(l);if(!c||!d)return;const[I,S]=Rs(i,t,c),[y,_]=Rs(i,t,d);eu(i,e,t,o,a,I,y);for(const v of _)xo(i,e,t,o,a,s,v);for(const v of S)xo(i,e,t,o,a,v,l)}function oO(i,e,t,o,a,s,l,c){const d=[],[I,S]=Lo(i,e,a,s),[y,_]=Lo(i,e,l,c);eu(i,d,e,t,o,I,y);for(const v of _)ko(i,d,e,t,o,I,v);for(const v of S)ko(i,d,e,t,o,y,v);for(const v of S)for(const A of _)xo(i,d,e,t,o,v,A);return d}function aO(i,e,t,o,a){for(const[s,l]of Object.entries(a))if(l.length>1)for(let c=0;c<l.length;c++)for(let d=c+1;d<l.length;d++){const I=bd(i,t,o,!1,s,l[c],l[d]);I&&e.push(I)}}function eu(i,e,t,o,a,s,l){for(const[c,d]of Object.entries(s)){const I=l[c];if(I)for(const S of d)for(const y of I){const _=bd(i,t,o,a,c,S,y);_&&e.push(_)}}}function bd(i,e,t,o,a,s,l){const[c,d,I]=s,[S,y,_]=l,v=o||c!==S&&jn(c)&&jn(S);if(!v){const vn=d.name.value,hn=y.name.value;if(vn!==hn)return[[a,`"${vn}" and "${hn}" are different fields`],[d],[y]];if(!sO(d,y))return[[a,"they have differing arguments"],[d],[y]]}const A=I==null?void 0:I.type,k=_==null?void 0:_.type;if(A&&k&&ws(A,k))return[[a,`they return conflicting types "${M(A)}" and "${M(k)}"`],[d],[y]];const W=d.selectionSet,cn=y.selectionSet;if(W&&cn){const vn=oO(i,e,t,v,fi(A),W,fi(k),cn);return uO(vn,a,d,y)}}function sO(i,e){const t=i.arguments,o=e.arguments;if(t===void 0||t.length===0)return o===void 0||o.length===0;if(o===void 0||o.length===0||t.length!==o.length)return!1;const a=new Map(o.map(({name:s,value:l})=>[s.value,l]));return t.every(s=>{const l=s.value,c=a.get(s.name.value);return c===void 0?!1:fc(l)===fc(c)})}function fc(i){return Zn(nu(i))}function ws(i,e){return ye(i)?ye(e)?ws(i.ofType,e.ofType):!0:ye(e)?!0:Dn(i)?Dn(e)?ws(i.ofType,e.ofType):!0:Dn(e)?!0:ki(i)||ki(e)?i!==e:!1}function Lo(i,e,t,o){const a=e.get(o);if(a)return a;const s=Object.create(null),l=Object.create(null);Dd(i,t,o,s,l);const c=[s,Object.keys(l)];return e.set(o,c),c}function Rs(i,e,t){const o=e.get(t.selectionSet);if(o)return o;const a=mt(i.getSchema(),t.typeCondition);return Lo(i,e,a,t.selectionSet)}function Dd(i,e,t,o,a){for(const s of t.selections)switch(s.kind){case F.FIELD:{const l=s.name.value;let c;(jn(e)||Vn(e))&&(c=e.getFields()[l]);const d=s.alias?s.alias.value:l;o[d]||(o[d]=[]),o[d].push([e,s,c]);break}case F.FRAGMENT_SPREAD:a[s.name.value]=!0;break;case F.INLINE_FRAGMENT:{const l=s.typeCondition,c=l?mt(i.getSchema(),l):e;Dd(i,c,s.selectionSet,o,a);break}}}function uO(i,e,t,o){if(i.length>0)return[[e,i.map(([a])=>a)],[t,...i.map(([,a])=>a).flat()],[o,...i.map(([,,a])=>a).flat()]]}class lO{constructor(){this._data=new Map}has(e,t,o){var a;const[s,l]=e<t?[e,t]:[t,e],c=(a=this._data.get(s))===null||a===void 0?void 0:a.get(l);return c===void 0?!1:o?!0:o===c}add(e,t,o){const[a,s]=e<t?[e,t]:[t,e],l=this._data.get(a);l===void 0?this._data.set(a,new Map([[s,o]])):l.set(s,o)}}function pO(i){return{InlineFragment(e){const t=i.getType(),o=i.getParentType();if(Fr(t)&&Fr(o)&&!cc(i.getSchema(),t,o)){const a=M(o),s=M(t);i.reportError(new P(`Fragment cannot be spread here as objects of type "${a}" can never be of type "${s}".`,{nodes:e}))}},FragmentSpread(e){const t=e.name.value,o=cO(i,t),a=i.getParentType();if(o&&a&&!cc(i.getSchema(),o,a)){const s=M(a),l=M(o);i.reportError(new P(`Fragment "${t}" cannot be spread here as objects of type "${s}" can never be of type "${l}".`,{nodes:e}))}}}}function cO(i,e){const t=i.getFragment(e);if(t){const o=mt(i.getSchema(),t.typeCondition);if(Fr(o))return o}}function dO(i){const e=i.getSchema(),t=Object.create(null);for(const a of i.getDocument().definitions)vr(a)&&(t[a.name.value]=a);return{ScalarTypeExtension:o,ObjectTypeExtension:o,InterfaceTypeExtension:o,UnionTypeExtension:o,EnumTypeExtension:o,InputObjectTypeExtension:o};function o(a){const s=a.name.value,l=t[s],c=e==null?void 0:e.getType(s);let d;if(l?d=mO[l.kind]:c&&(d=fO(c)),d){if(d!==a.kind){const I=gO(a.kind);i.reportError(new P(`Cannot extend non-${I} type "${s}".`,{nodes:l?[l,a]:a}))}}else{const I=Object.keys({...t,...e==null?void 0:e.getTypeMap()}),S=Si(s,I);i.reportError(new P(`Cannot extend type "${s}" because it is not defined.`+Yt(S),{nodes:a.name}))}}}const mO={[F.SCALAR_TYPE_DEFINITION]:F.SCALAR_TYPE_EXTENSION,[F.OBJECT_TYPE_DEFINITION]:F.OBJECT_TYPE_EXTENSION,[F.INTERFACE_TYPE_DEFINITION]:F.INTERFACE_TYPE_EXTENSION,[F.UNION_TYPE_DEFINITION]:F.UNION_TYPE_EXTENSION,[F.ENUM_TYPE_DEFINITION]:F.ENUM_TYPE_EXTENSION,[F.INPUT_OBJECT_TYPE_DEFINITION]:F.INPUT_OBJECT_TYPE_EXTENSION};function fO(i){if(Kt(i))return F.SCALAR_TYPE_EXTENSION;if(jn(i))return F.OBJECT_TYPE_EXTENSION;if(Vn(i))return F.INTERFACE_TYPE_EXTENSION;if(Je(i))return F.UNION_TYPE_EXTENSION;if(nt(i))return F.ENUM_TYPE_EXTENSION;if(he(i))return F.INPUT_OBJECT_TYPE_EXTENSION;Ze(!1,"Unexpected type: "+M(i))}function gO(i){switch(i){case F.SCALAR_TYPE_EXTENSION:return"scalar";case F.OBJECT_TYPE_EXTENSION:return"object";case F.INTERFACE_TYPE_EXTENSION:return"interface";case F.UNION_TYPE_EXTENSION:return"union";case F.ENUM_TYPE_EXTENSION:return"enum";case F.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Ze(!1,"Unexpected kind: "+M(i))}}function IO(i){return{...vd(i),Field:{leave(e){var t;const o=i.getFieldDef();if(!o)return!1;const a=new Set((t=e.arguments)===null||t===void 0?void 0:t.map(s=>s.name.value));for(const s of o.args)if(!a.has(s.name)&&ud(s)){const l=M(s.type);i.reportError(new P(`Field "${o.name}" argument "${s.name}" of type "${l}" is required, but it was not provided.`,{nodes:e}))}}}}}function vd(i){var e;const t=Object.create(null),o=i.getSchema(),a=(e=o==null?void 0:o.getDirectives())!==null&&e!==void 0?e:Mi;for(const c of a)t[c.name]=mi(c.args.filter(ud),d=>d.name);const s=i.getDocument().definitions;for(const c of s)if(c.kind===F.DIRECTIVE_DEFINITION){var l;const d=(l=c.arguments)!==null&&l!==void 0?l:[];t[c.name.value]=mi(d.filter(SO),I=>I.name.value)}return{Directive:{leave(c){const d=c.name.value,I=t[d];if(I){var S;const y=(S=c.arguments)!==null&&S!==void 0?S:[],_=new Set(y.map(v=>v.name.value));for(const[v,A]of Object.entries(I))if(!_.has(v)){const k=Ys(A.type)?M(A.type):Zn(A.type);i.reportError(new P(`Directive "@${d}" argument "${v}" of type "${k}" is required, but it was not provided.`,{nodes:c}))}}}}}}function SO(i){return i.type.kind===F.NON_NULL_TYPE&&i.defaultValue==null}function hO(i){return{Field(e){const t=i.getType(),o=e.selectionSet;if(t){if(ki(fi(t))){if(o){const a=e.name.value,s=M(t);i.reportError(new P(`Field "${a}" must not have a selection since type "${s}" has no subfields.`,{nodes:o}))}}else if(!o){const a=e.name.value,s=M(t);i.reportError(new P(`Field "${a}" of type "${s}" must have a selection of subfields. Did you mean "${a} { ... }"?`,{nodes:e}))}}}}}function Wt(i,e,t){if(i){if(i.kind===F.VARIABLE){const o=i.name.value;if(t==null||t[o]===void 0)return;const a=t[o];return a===null&&Dn(e)?void 0:a}if(Dn(e))return i.kind===F.NULL?void 0:Wt(i,e.ofType,t);if(i.kind===F.NULL)return null;if(ye(e)){const o=e.ofType;if(i.kind===F.LIST){const s=[];for(const l of i.values)if(gc(l,t)){if(Dn(o))return;s.push(null)}else{const c=Wt(l,o,t);if(c===void 0)return;s.push(c)}return s}const a=Wt(i,o,t);return a===void 0?void 0:[a]}if(he(e)){if(i.kind!==F.OBJECT)return;const o=Object.create(null),a=mi(i.fields,s=>s.name.value);for(const s of Object.values(e.getFields())){const l=a[s.name];if(!l||gc(l.value,t)){if(s.defaultValue!==void 0)o[s.name]=s.defaultValue;else if(Dn(s.type))return;continue}const c=Wt(l.value,s.type,t);if(c===void 0)return;o[s.name]=c}if(e.isOneOf){const s=Object.keys(o);if(s.length!==1||o[s[0]]===null)return}return o}if(ki(e)){let o;try{o=e.parseLiteral(i,t)}catch{return}return o===void 0?void 0:o}Ze(!1,"Unexpected input type: "+M(e))}}function gc(i,e){return i.kind===F.VARIABLE&&(e==null||e[i.name.value]===void 0)}function yO(i,e,t){var o;const a={},s=(o=e.arguments)!==null&&o!==void 0?o:[],l=mi(s,c=>c.name.value);for(const c of i.args){const d=c.name,I=c.type,S=l[d];if(!S){if(c.defaultValue!==void 0)a[d]=c.defaultValue;else if(Dn(I))throw new P(`Argument "${d}" of required type "${M(I)}" was not provided.`,{nodes:e});continue}const y=S.value;let _=y.kind===F.NULL;if(y.kind===F.VARIABLE){const A=y.name.value;if(t==null||!TO(t,A)){if(c.defaultValue!==void 0)a[d]=c.defaultValue;else if(Dn(I))throw new P(`Argument "${d}" of required type "${M(I)}" was provided the variable "$${A}" which was not provided a runtime value.`,{nodes:y});continue}_=t[A]==null}if(_&&Dn(I))throw new P(`Argument "${d}" of non-null type "${M(I)}" must not be null.`,{nodes:y});const v=Wt(y,I,t);if(v===void 0)throw new P(`Argument "${d}" has invalid value ${Zn(y)}.`,{nodes:y});a[d]=v}return a}function Cr(i,e,t){var o;const a=(o=e.directives)===null||o===void 0?void 0:o.find(s=>s.name.value===i.name);if(a)return yO(i,a,t)}function TO(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function FO(i,e,t,o,a){const s=new Map;return _s(i,e,t,o,a,s,new Set),s}function _s(i,e,t,o,a,s,l){for(const c of a.selections)switch(c.kind){case F.FIELD:{if(!Cs(t,c))continue;const d=CO(c),I=s.get(d);I!==void 0?I.push(c):s.set(d,[c]);break}case F.INLINE_FRAGMENT:{if(!Cs(t,c)||!Ic(i,c,o))continue;_s(i,e,t,o,c.selectionSet,s,l);break}case F.FRAGMENT_SPREAD:{const d=c.name.value;if(l.has(d)||!Cs(t,c))continue;l.add(d);const I=e[d];if(!I||!Ic(i,I,o))continue;_s(i,e,t,o,I.selectionSet,s,l);break}}}function Cs(i,e){const t=Cr(cd,e,i);if((t==null?void 0:t.if)===!0)return!1;const o=Cr(pd,e,i);return(o==null?void 0:o.if)!==!1}function Ic(i,e,t){const o=e.typeCondition;if(!o)return!0;const a=mt(i,o);return a===t?!0:pi(a)?i.isSubType(a,t):!1}function CO(i){return i.alias?i.alias.value:i.name.value}function EO(i){return{OperationDefinition(e){if(e.operation==="subscription"){const t=i.getSchema(),o=t.getSubscriptionType();if(o){const a=e.name?e.name.value:null,s=Object.create(null),l=i.getDocument(),c=Object.create(null);for(const I of l.definitions)I.kind===F.FRAGMENT_DEFINITION&&(c[I.name.value]=I);const d=FO(t,c,s,o,e.selectionSet);if(d.size>1){const y=[...d.values()].slice(1).flat();i.reportError(new P(a!=null?`Subscription "${a}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:y}))}for(const I of d.values())I[0].name.value.startsWith("__")&&i.reportError(new P(a!=null?`Subscription "${a}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:I}))}}}}}function tu(i,e){const t=new Map;for(const o of i){const a=e(o),s=t.get(a);s===void 0?t.set(a,[o]):s.push(o)}return t}function OO(i){return{DirectiveDefinition(o){var a;const s=(a=o.arguments)!==null&&a!==void 0?a:[];return t(`@${o.name.value}`,s)},InterfaceTypeDefinition:e,InterfaceTypeExtension:e,ObjectTypeDefinition:e,ObjectTypeExtension:e};function e(o){var a;const s=o.name.value,l=(a=o.fields)!==null&&a!==void 0?a:[];for(const d of l){var c;const I=d.name.value,S=(c=d.arguments)!==null&&c!==void 0?c:[];t(`${s}.${I}`,S)}return!1}function t(o,a){const s=tu(a,l=>l.name.value);for(const[l,c]of s)c.length>1&&i.reportError(new P(`Argument "${o}(${l}:)" can only be defined once.`,{nodes:c.map(d=>d.name)}));return!1}}function Ad(i){return{Field:e,Directive:e};function e(t){var o;const a=(o=t.arguments)!==null&&o!==void 0?o:[],s=tu(a,l=>l.name.value);for(const[l,c]of s)c.length>1&&i.reportError(new P(`There can be only one argument named "${l}".`,{nodes:c.map(d=>d.name)}))}}function bO(i){const e=Object.create(null),t=i.getSchema();return{DirectiveDefinition(o){const a=o.name.value;if(t!=null&&t.getDirective(a)){i.reportError(new P(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:o.name}));return}return e[a]?i.reportError(new P(`There can be only one directive named "@${a}".`,{nodes:[e[a],o.name]})):e[a]=o.name,!1}}}function Nd(i){const e=Object.create(null),t=i.getSchema(),o=t?t.getDirectives():Mi;for(const c of o)e[c.name]=!c.isRepeatable;const a=i.getDocument().definitions;for(const c of a)c.kind===F.DIRECTIVE_DEFINITION&&(e[c.name.value]=!c.repeatable);const s=Object.create(null),l=Object.create(null);return{enter(c){if(!("directives"in c)||!c.directives)return;let d;if(c.kind===F.SCHEMA_DEFINITION||c.kind===F.SCHEMA_EXTENSION)d=s;else if(vr(c)||Zs(c)){const I=c.name.value;d=l[I],d===void 0&&(l[I]=d=Object.create(null))}else d=Object.create(null);for(const I of c.directives){const S=I.name.value;e[S]&&(d[S]?i.reportError(new P(`The directive "@${S}" can only be used once at this location.`,{nodes:[d[S],I]})):d[S]=I)}}}}function DO(i){const e=i.getSchema(),t=e?e.getTypeMap():Object.create(null),o=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(s){var l;const c=s.name.value;o[c]||(o[c]=Object.create(null));const d=(l=s.values)!==null&&l!==void 0?l:[],I=o[c];for(const S of d){const y=S.name.value,_=t[c];nt(_)&&_.getValue(y)?i.reportError(new P(`Enum value "${c}.${y}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:S.name})):I[y]?i.reportError(new P(`Enum value "${c}.${y}" can only be defined once.`,{nodes:[I[y],S.name]})):I[y]=S.name}return!1}}function vO(i){const e=i.getSchema(),t=e?e.getTypeMap():Object.create(null),o=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(s){var l;const c=s.name.value;o[c]||(o[c]=Object.create(null));const d=(l=s.fields)!==null&&l!==void 0?l:[],I=o[c];for(const S of d){const y=S.name.value;AO(t[c],y)?i.reportError(new P(`Field "${c}.${y}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:S.name})):I[y]?i.reportError(new P(`Field "${c}.${y}" can only be defined once.`,{nodes:[I[y],S.name]})):I[y]=S.name}return!1}}function AO(i,e){return jn(i)||Vn(i)||he(i)?i.getFields()[e]!=null:!1}function NO(i){const e=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const o=t.name.value;return e[o]?i.reportError(new P(`There can be only one fragment named "${o}".`,{nodes:[e[o],t.name]})):e[o]=t.name,!1}}}function wd(i){const e=[];let t=Object.create(null);return{ObjectValue:{enter(){e.push(t),t=Object.create(null)},leave(){const o=e.pop();o||Ze(!1),t=o}},ObjectField(o){const a=o.name.value;t[a]?i.reportError(new P(`There can be only one input field named "${a}".`,{nodes:[t[a],o.name]})):t[a]=o.name}}}function wO(i){const e=Object.create(null);return{OperationDefinition(t){const o=t.name;return o&&(e[o.value]?i.reportError(new P(`There can be only one operation named "${o.value}".`,{nodes:[e[o.value],o]})):e[o.value]=o),!1},FragmentDefinition:()=>!1}}function RO(i){const e=i.getSchema(),t=Object.create(null),o=e?{query:e.getQueryType(),mutation:e.getMutationType(),subscription:e.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(s){var l;const c=(l=s.operationTypes)!==null&&l!==void 0?l:[];for(const d of c){const I=d.operation,S=t[I];o[I]?i.reportError(new P(`Type for ${I} already defined in the schema. It cannot be redefined.`,{nodes:d})):S?i.reportError(new P(`There can be only one ${I} type in schema.`,{nodes:[S,d]})):t[I]=d}return!1}}function _O(i){const e=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:o,ObjectTypeDefinition:o,InterfaceTypeDefinition:o,UnionTypeDefinition:o,EnumTypeDefinition:o,InputObjectTypeDefinition:o};function o(a){const s=a.name.value;if(t!=null&&t.getType(s)){i.reportError(new P(`Type "${s}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return e[s]?i.reportError(new P(`There can be only one type named "${s}".`,{nodes:[e[s],a.name]})):e[s]=a.name,!1}}function BO(i){return{OperationDefinition(e){var t;const o=(t=e.variableDefinitions)!==null&&t!==void 0?t:[],a=tu(o,s=>s.variable.name.value);for(const[s,l]of a)l.length>1&&i.reportError(new P(`There can be only one variable named "$${s}".`,{nodes:l.map(c=>c.variable.name)}))}}}function UO(i){let e={};return{OperationDefinition:{enter(){e={}}},VariableDefinition(t){e[t.variable.name.value]=t},ListValue(t){const o=OE(i.getParentInputType());if(!ye(o))return ui(i,t),!1},ObjectValue(t){const o=fi(i.getInputType());if(!he(o))return ui(i,t),!1;const a=mi(t.fields,s=>s.name.value);for(const s of Object.values(o.getFields()))if(!a[s.name]&&vE(s)){const c=M(s.type);i.reportError(new P(`Field "${o.name}.${s.name}" of required type "${c}" was not provided.`,{nodes:t}))}o.isOneOf&&PO(i,t,o,a,e)},ObjectField(t){const o=fi(i.getParentInputType());if(!i.getInputType()&&he(o)){const s=Si(t.name.value,Object.keys(o.getFields()));i.reportError(new P(`Field "${t.name.value}" is not defined by type "${o.name}".`+Yt(s),{nodes:t}))}},NullValue(t){const o=i.getInputType();Dn(o)&&i.reportError(new P(`Expected value of type "${M(o)}", found ${Zn(t)}.`,{nodes:t}))},EnumValue:t=>ui(i,t),IntValue:t=>ui(i,t),FloatValue:t=>ui(i,t),StringValue:t=>ui(i,t),BooleanValue:t=>ui(i,t)}}function ui(i,e){const t=i.getInputType();if(!t)return;const o=fi(t);if(!ki(o)){const a=M(t);i.reportError(new P(`Expected value of type "${a}", found ${Zn(e)}.`,{nodes:e}));return}try{if(o.parseLiteral(e,void 0)===void 0){const s=M(t);i.reportError(new P(`Expected value of type "${s}", found ${Zn(e)}.`,{nodes:e}))}}catch(a){const s=M(t);a instanceof P?i.reportError(a):i.reportError(new P(`Expected value of type "${s}", found ${Zn(e)}; `+a.message,{nodes:e,originalError:a}))}}function PO(i,e,t,o,a){var s;const l=Object.keys(o);if(l.length!==1){i.reportError(new P(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[e]}));return}const d=(s=o[l[0]])===null||s===void 0?void 0:s.value,I=!d||d.kind===F.NULL,S=(d==null?void 0:d.kind)===F.VARIABLE;if(I){i.reportError(new P(`Field "${t.name}.${l[0]}" must be non-null.`,{nodes:[e]}));return}if(S){const y=d.name.value;a[y].type.kind!==F.NON_NULL_TYPE&&i.reportError(new P(`Variable "${y}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[e]}))}}function kO(i){return{VariableDefinition(e){const t=mt(i.getSchema(),e.type);if(t!==void 0&&!Ks(t)){const o=e.variable.name.value,a=Zn(e.type);i.reportError(new P(`Variable "$${o}" cannot be non-input type "${a}".`,{nodes:e.type}))}}}}function xO(i){let e=Object.create(null);return{OperationDefinition:{enter(){e=Object.create(null)},leave(t){const o=i.getRecursiveVariableUsages(t);for(const{node:a,type:s,defaultValue:l}of o){const c=a.name.value,d=e[c];if(d&&s){const I=i.getSchema(),S=mt(I,d.type);if(S&&!LO(I,S,d.defaultValue,s,l)){const y=M(S),_=M(s);i.reportError(new P(`Variable "$${c}" of type "${y}" used in position expecting type "${_}".`,{nodes:[d,a]}))}}}}},VariableDefinition(t){e[t.variable.name.value]=t}}}function LO(i,e,t,o,a){if(Dn(o)&&!Dn(e)){if(!(t!=null&&t.kind!==F.NULL)&&!(a!==void 0))return!1;const c=o.ofType;return Ir(i,e,c)}return Ir(i,e,o)}const MO=Object.freeze([zE]);Object.freeze([LE,wO,QE,EO,Ed,JE,kO,hO,ME,NO,jE,nO,pO,XE,BO,ZE,eO,Cd,Nd,VE,Ad,UO,IO,xO,iO,wd,...MO]);const qO=Object.freeze([YE,RO,_O,DO,vO,OO,bO,Ed,Cd,Nd,dO,Fd,Ad,wd,vd]);class GO{constructor(e,t){this._ast=e,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(e){this._onError(e)}getDocument(){return this._ast}getFragment(e){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const o of this.getDocument().definitions)o.kind===F.FRAGMENT_DEFINITION&&(t[o.name.value]=o);this._fragments=t}return t[e]}getFragmentSpreads(e){let t=this._fragmentSpreads.get(e);if(!t){t=[];const o=[e];let a;for(;a=o.pop();)for(const s of a.selections)s.kind===F.FRAGMENT_SPREAD?t.push(s):s.selectionSet&&o.push(s.selectionSet);this._fragmentSpreads.set(e,t)}return t}getRecursivelyReferencedFragments(e){let t=this._recursivelyReferencedFragments.get(e);if(!t){t=[];const o=Object.create(null),a=[e.selectionSet];let s;for(;s=a.pop();)for(const l of this.getFragmentSpreads(s)){const c=l.name.value;if(o[c]!==!0){o[c]=!0;const d=this.getFragment(c);d&&(t.push(d),a.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(e,t)}return t}}class JO extends GO{constructor(e,t,o){super(e,o),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function VO(i,e,t=qO){const o=[],a=new JO(i,e,l=>{o.push(l)}),s=t.map(l=>l(a));return zc(i,SE(s)),o}function $O(i){const e=VO(i);if(e.length!==0)throw new Error(e.map(t=>t.message).join(`

`))}function WO(i,e){Rt(i)&&Rt(i.__schema)||dn(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${M(i)}.`);const t=i.__schema,o=li(t.types,B=>B.name,B=>_(B));for(const B of[...jo,...Qo])o[B.name]&&(o[B.name]=B);const a=t.queryType?S(t.queryType):null,s=t.mutationType?S(t.mutationType):null,l=t.subscriptionType?S(t.subscriptionType):null,c=t.directives?t.directives.map(gt):[];return new Td({description:t.description,query:a,mutation:s,subscription:l,types:Object.values(o),directives:c,assumeValid:void 0});function d(B){if(B.kind===On.LIST){const z=B.ofType;if(!z)throw new Error("Decorated type deeper than introspection query.");return new ce(d(z))}if(B.kind===On.NON_NULL){const z=B.ofType;if(!z)throw new Error("Decorated type deeper than introspection query.");const se=d(z);return new on(EE(se))}return I(B)}function I(B){const z=B.name;if(!z)throw new Error(`Unknown type reference: ${M(B)}.`);const se=o[z];if(!se)throw new Error(`Invalid or incomplete schema, unknown type: ${z}. Ensure that a full introspection query is used in order to build a client schema.`);return se}function S(B){return FE(I(B))}function y(B){return CE(I(B))}function _(B){if(B!=null&&B.name!=null&&B.kind!=null)switch(B.kind){case On.SCALAR:return v(B);case On.OBJECT:return k(B);case On.INTERFACE:return W(B);case On.UNION:return cn(B);case On.ENUM:return vn(B);case On.INPUT_OBJECT:return hn(B)}const z=M(B);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${z}.`)}function v(B){return new _t({name:B.name,description:B.description,specifiedByURL:B.specifiedByURL})}function A(B){if(B.interfaces===null&&B.kind===On.INTERFACE)return[];if(!B.interfaces){const z=M(B);throw new Error(`Introspection result missing interfaces: ${z}.`)}return B.interfaces.map(y)}function k(B){return new dt({name:B.name,description:B.description,interfaces:()=>A(B),fields:()=>Un(B)})}function W(B){return new Bo({name:B.name,description:B.description,interfaces:()=>A(B),fields:()=>Un(B)})}function cn(B){if(!B.possibleTypes){const z=M(B);throw new Error(`Introspection result missing possibleTypes: ${z}.`)}return new Uo({name:B.name,description:B.description,types:()=>B.possibleTypes.map(S)})}function vn(B){if(!B.enumValues){const z=M(B);throw new Error(`Introspection result missing enumValues: ${z}.`)}return new xi({name:B.name,description:B.description,values:li(B.enumValues,z=>z.name,z=>({description:z.description,deprecationReason:z.deprecationReason}))})}function hn(B){if(!B.inputFields){const z=M(B);throw new Error(`Introspection result missing inputFields: ${z}.`)}return new Po({name:B.name,description:B.description,fields:()=>Kn(B.inputFields),isOneOf:B.isOneOf})}function Un(B){if(!B.fields)throw new Error(`Introspection result missing fields: ${M(B)}.`);return li(B.fields,z=>z.name,Hn)}function Hn(B){const z=d(B.type);if(!Zc(z)){const se=M(z);throw new Error(`Introspection must provide output type for fields, but received: ${se}.`)}if(!B.args){const se=M(B);throw new Error(`Introspection result missing field args: ${se}.`)}return{description:B.description,deprecationReason:B.deprecationReason,type:z,args:Kn(B.args)}}function Kn(B){return li(B,z=>z.name,Pn)}function Pn(B){const z=d(B.type);if(!Ks(z)){const Ut=M(z);throw new Error(`Introspection must provide input type for arguments, but received: ${Ut}.`)}const se=B.defaultValue!=null?Wt(lE(B.defaultValue),z):void 0;return{description:B.description,type:z,defaultValue:se,deprecationReason:B.deprecationReason}}function gt(B){if(!B.args){const z=M(B);throw new Error(`Introspection result missing directive args: ${z}.`)}if(!B.locations){const z=M(B);throw new Error(`Introspection result missing directive locations: ${z}.`)}return new Bt({name:B.name,description:B.description,isRepeatable:B.isRepeatable,locations:B.locations.slice(),args:Kn(B.args)})}}function jO(i,e,t){var o,a,s,l;const c=[],d=Object.create(null),I=[];let S;const y=[];for(const b of e.definitions)if(b.kind===F.SCHEMA_DEFINITION)S=b;else if(b.kind===F.SCHEMA_EXTENSION)y.push(b);else if(vr(b))c.push(b);else if(Zs(b)){const J=b.name.value,L=d[J];d[J]=L?L.concat([b]):[b]}else b.kind===F.DIRECTIVE_DEFINITION&&I.push(b);if(Object.keys(d).length===0&&c.length===0&&I.length===0&&y.length===0&&S==null)return i;const _=Object.create(null);for(const b of i.types)_[b.name]=vn(b);for(const b of c){var v;const J=b.name.value;_[J]=(v=Sc[J])!==null&&v!==void 0?v:we(b)}const A={query:i.query&&W(i.query),mutation:i.mutation&&W(i.mutation),subscription:i.subscription&&W(i.subscription),...S&&se([S]),...se(y)};return{description:(o=S)===null||o===void 0||(a=o.description)===null||a===void 0?void 0:a.value,...A,types:Object.values(_),directives:[...i.directives.map(cn),...I.map(Ar)],extensions:Object.create(null),astNode:(s=S)!==null&&s!==void 0?s:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(y),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function k(b){return ye(b)?new ce(k(b.ofType)):Dn(b)?new on(k(b.ofType)):W(b)}function W(b){return _[b.name]}function cn(b){const J=b.toConfig();return new Bt({...J,args:Dt(J.args,z)})}function vn(b){if(UE(b)||wE(b))return b;if(Kt(b))return Hn(b);if(jn(b))return Kn(b);if(Vn(b))return Pn(b);if(Je(b))return gt(b);if(nt(b))return Un(b);if(he(b))return hn(b);Ze(!1,"Unexpected type: "+M(b))}function hn(b){var J;const L=b.toConfig(),q=(J=d[L.name])!==null&&J!==void 0?J:[];return new Po({...L,fields:()=>({...Dt(L.fields,fn=>({...fn,type:k(fn.type)})),...at(q)}),extensionASTNodes:L.extensionASTNodes.concat(q)})}function Un(b){var J;const L=b.toConfig(),q=(J=d[b.name])!==null&&J!==void 0?J:[];return new xi({...L,values:{...L.values,...$e(q)},extensionASTNodes:L.extensionASTNodes.concat(q)})}function Hn(b){var J;const L=b.toConfig(),q=(J=d[L.name])!==null&&J!==void 0?J:[];let fn=L.specifiedByURL;for(const gn of q){var Mn;fn=(Mn=hc(gn))!==null&&Mn!==void 0?Mn:fn}return new _t({...L,specifiedByURL:fn,extensionASTNodes:L.extensionASTNodes.concat(q)})}function Kn(b){var J;const L=b.toConfig(),q=(J=d[L.name])!==null&&J!==void 0?J:[];return new dt({...L,interfaces:()=>[...b.getInterfaces().map(W),...yi(q)],fields:()=>({...Dt(L.fields,B),...hi(q)}),extensionASTNodes:L.extensionASTNodes.concat(q)})}function Pn(b){var J;const L=b.toConfig(),q=(J=d[L.name])!==null&&J!==void 0?J:[];return new Bo({...L,interfaces:()=>[...b.getInterfaces().map(W),...yi(q)],fields:()=>({...Dt(L.fields,B),...hi(q)}),extensionASTNodes:L.extensionASTNodes.concat(q)})}function gt(b){var J;const L=b.toConfig(),q=(J=d[L.name])!==null&&J!==void 0?J:[];return new Uo({...L,types:()=>[...b.getTypes().map(W),...Xt(q)],extensionASTNodes:L.extensionASTNodes.concat(q)})}function B(b){return{...b,type:k(b.type),args:b.args&&Dt(b.args,z)}}function z(b){return{...b,type:k(b.type)}}function se(b){const J={};for(const q of b){var L;const fn=(L=q.operationTypes)!==null&&L!==void 0?L:[];for(const Mn of fn)J[Mn.operation]=Ut(Mn.type)}return J}function Ut(b){var J;const L=b.name.value,q=(J=Sc[L])!==null&&J!==void 0?J:_[L];if(q===void 0)throw new Error(`Unknown type: "${L}".`);return q}function zt(b){return b.kind===F.LIST_TYPE?new ce(zt(b.type)):b.kind===F.NON_NULL_TYPE?new on(zt(b.type)):Ut(b)}function Ar(b){var J;return new Bt({name:b.name.value,description:(J=b.description)===null||J===void 0?void 0:J.value,locations:b.locations.map(({value:L})=>L),isRepeatable:b.repeatable,args:Nr(b.arguments),astNode:b})}function hi(b){const J=Object.create(null);for(const fn of b){var L;const Mn=(L=fn.fields)!==null&&L!==void 0?L:[];for(const gn of Mn){var q;J[gn.name.value]={type:zt(gn.type),description:(q=gn.description)===null||q===void 0?void 0:q.value,args:Nr(gn.arguments),deprecationReason:Do(gn),astNode:gn}}}return J}function Nr(b){const J=b??[],L=Object.create(null);for(const fn of J){var q;const Mn=zt(fn.type);L[fn.name.value]={type:Mn,description:(q=fn.description)===null||q===void 0?void 0:q.value,defaultValue:Wt(fn.defaultValue,Mn),deprecationReason:Do(fn),astNode:fn}}return L}function at(b){const J=Object.create(null);for(const fn of b){var L;const Mn=(L=fn.fields)!==null&&L!==void 0?L:[];for(const gn of Mn){var q;const Re=zt(gn.type);J[gn.name.value]={type:Re,description:(q=gn.description)===null||q===void 0?void 0:q.value,defaultValue:Wt(gn.defaultValue,Re),deprecationReason:Do(gn),astNode:gn}}}return J}function $e(b){const J=Object.create(null);for(const fn of b){var L;const Mn=(L=fn.values)!==null&&L!==void 0?L:[];for(const gn of Mn){var q;J[gn.name.value]={description:(q=gn.description)===null||q===void 0?void 0:q.value,deprecationReason:Do(gn),astNode:gn}}}return J}function yi(b){return b.flatMap(J=>{var L,q;return(L=(q=J.interfaces)===null||q===void 0?void 0:q.map(Ut))!==null&&L!==void 0?L:[]})}function Xt(b){return b.flatMap(J=>{var L,q;return(L=(q=J.types)===null||q===void 0?void 0:q.map(Ut))!==null&&L!==void 0?L:[]})}function we(b){var J;const L=b.name.value,q=(J=d[L])!==null&&J!==void 0?J:[];switch(b.kind){case F.OBJECT_TYPE_DEFINITION:{var fn;const ie=[b,...q];return new dt({name:L,description:(fn=b.description)===null||fn===void 0?void 0:fn.value,interfaces:()=>yi(ie),fields:()=>hi(ie),astNode:b,extensionASTNodes:q})}case F.INTERFACE_TYPE_DEFINITION:{var Mn;const ie=[b,...q];return new Bo({name:L,description:(Mn=b.description)===null||Mn===void 0?void 0:Mn.value,interfaces:()=>yi(ie),fields:()=>hi(ie),astNode:b,extensionASTNodes:q})}case F.ENUM_TYPE_DEFINITION:{var gn;const ie=[b,...q];return new xi({name:L,description:(gn=b.description)===null||gn===void 0?void 0:gn.value,values:$e(ie),astNode:b,extensionASTNodes:q})}case F.UNION_TYPE_DEFINITION:{var Re;const ie=[b,...q];return new Uo({name:L,description:(Re=b.description)===null||Re===void 0?void 0:Re.value,types:()=>Xt(ie),astNode:b,extensionASTNodes:q})}case F.SCALAR_TYPE_DEFINITION:{var qi;return new _t({name:L,description:(qi=b.description)===null||qi===void 0?void 0:qi.value,specifiedByURL:hc(b),astNode:b,extensionASTNodes:q})}case F.INPUT_OBJECT_TYPE_DEFINITION:{var Pt;const ie=[b,...q];return new Po({name:L,description:(Pt=b.description)===null||Pt===void 0?void 0:Pt.value,fields:()=>at(ie),astNode:b,extensionASTNodes:q,isOneOf:HO(b)})}}}}const Sc=mi([...jo,...Qo],i=>i.name);function Do(i){const e=Cr(dd,i);return e==null?void 0:e.reason}function hc(i){const e=Cr(md,i);return e==null?void 0:e.url}function HO(i){return!!Cr(fd,i)}function QO(i,e){i!=null&&i.kind===F.DOCUMENT||dn(!1,"Must provide valid Document AST."),(e==null?void 0:e.assumeValid)!==!0&&(e==null?void 0:e.assumeValidSDL)!==!0&&$O(i);const o=jO({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,e);if(o.astNode==null)for(const s of o.types)switch(s.name){case"Query":o.query=s;break;case"Mutation":o.mutation=s;break;case"Subscription":o.subscription=s;break}const a=[...o.directives,...Mi.filter(s=>o.directives.every(l=>l.name!==s.name))];return new Td({...o,directives:a})}function YO(i,e){const t=uE(i,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return QO(t,{assumeValidSDL:void 0,assumeValid:void 0})}function KO(i){const e=new Map;return zO(i,t=>{jn(t)&&XO(t,o=>{const a=Bs(o.type);Es(e,a).references.push({kind:gr.FIELD,parent:t,by:o}),ZO(o,l=>{const c=Bs(l.type);Es(e,c).references.push({kind:gr.ARGUMENT,field:o,type:t,by:l})})}),Je(t)&&t.getTypes().forEach(o=>{Es(e,o).references.push({kind:gr.UNION,by:t})})}),new UC(e)}function zO(i,e){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||e(t)})}function XO(i,e){Object.entries(i.getFields()).forEach(([,t])=>{e(t)})}function ZO(i,e){Object.entries(i.args).forEach(([,t])=>{e(t)})}function Es(i,e){let t=i.get(e.name);return t||(t={references:[]},i.set(e.name,t)),t}function Bs(i){return Dn(i)||ye(i)?Bs(i.ofType):i}const yc=`
type Query {
  aIRequest(id: String!): AIRequest
  account: Account
  accountApiKey(id: String!): AccountApiKeyInfo
  accountAutoRetryRule(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    id: String
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AccountAutoRetryRuleSortInput!]
    where: AccountAutoRetryRuleFilterInput
  ): AccountAutoRetryRuleConnection
  """Return a specific account integration"""
  accountIntegration(id: String!): AccountIntegration
  accountInvoice(id: String!): AccountInvoiceInfo
  accountInvoices(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AccountInvoiceInfoSortInput!]
  ): AccountInvoiceInfoConnection
  accountMonthlyGrowthStats: AccountListGrowthStats
  accountPaymentMethod: PaymentMethod
  accountSuppressionFilter(id: String!): AccountSuppressionFilter
  accountSuppressionFilters(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AccountSuppressionFilterSortInput!]
    where: AccountSuppressionFilterFilterInput
  ): AccountSuppressionFilterConnection
  """Number of accounts by day for a given month"""
  affiliateAccountStatsByDay(reportingMonth: DateTime!): [AffiliateAccountStat!]
  """
  Get a list of accounts associate associated with the logged in affiliate
  """
  affiliateAccounts(reportType: ReportType!, reportingMonth: DateTime!): [AffiliateAccount!]
  """Get affiliate payment"""
  affiliatePayment(paymentId: Int!): AffiliatePayment!
  """Get affiliate payments"""
  affiliatePayments(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AffiliatePaymentSortInput!]
    where: AffiliatePaymentFilterInput
  ): AffiliatePaymentConnection
  """
  Get a list of accounts associate associated with the logged in affiliate
  """
  affiliateStats(reportingMonth: DateTime!): AffiliateStats!
  allAIRequests(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    contentTypes: [AIContentType!]
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AIRequestSortInput!]
    questionKeyWord: String
    startUtc: DateTime!
  ): AIRequestConnection
  allAccountApiKeys(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AccountApiKeyInfoSortInput!]
    where: AccountApiKeyInfoFilterInput
  ): AccountApiKeyInfoConnection
  allAccountEntities(includeContacts: Boolean, order: [AccountEntitySortInput!], searchValue: String!, where: AccountEntityFilterInput): [AccountEntity!]
  """
  Return a list of account integrations. Integration partner information is not included.
  """
  allAccountIntegrations(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AccountIntegrationSortInput!]
    where: AccountIntegrationFilterInput
  ): AccountIntegrationConnection
  allAccountPlanStats(endUtc: DateTime, order: [AccountOverallStatsSortInput!], startUtc: DateTime, where: AccountOverallStatsFilterInput): [AccountOverallStats!]
  allAccountPlans(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AccountPlanSortInput!]
    where: AccountPlanFilterInput
  ): AccountPlanConnection
  allCampaignBounceTypeByDomainStats(input: GetCampaignBounceTypeByDomainStatsInput!): [CampaignBounceTypeByDomainStats!]
  allCampaignBounceTypeStats(input: CampaignStatsInput!): [CampaignBounceTypeStats!]
  allCampaignCombinationStats(input: CampaignCombinationStatsInput!): [CampaignCombinationStats!]
  """
  SortColumn can be set to 'emailaddr', 'logcount', 'email', or 'events'.
  """
  allCampaignContactEventTypeStats(input: GetCampaignContactEventTypeStatsInput!): [CampaignContactEventTypeStats!]
  allCampaignDeviceStats(input: CampaignStatsInput!): [CampaignDeviceStats!]
  allCampaignLinkStats(input: CampaignStatsInput!): [CampaignLinkStats!]!
  allCampaignSocialShareStats(input: CampaignStatsInput!): [CampaignSocialShareStats!]
  allCampaignSoftwareStats(input: CampaignStatsInput!): [CampaignSoftwareStats!]
  allCustomReports(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [CustomReportSortInput!]
    where: CustomReportFilterInput
  ): CustomReportConnection
  allExports(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AccountExportSortInput!]
    where: AccountExportFilterInput
  ): AccountExportConnection
  """Return a list of integrations"""
  allIntegrationPartners(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [IntegrationPartnerSortInput!]
    where: IntegrationPartnerFilterInput
  ): IntegrationPartnerConnection
  allPlans(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ItemSortInput!]
    where: ItemFilterInput
  ): ItemConnection
  allTransactions(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    eventType: EmailEventType
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionSortInput!]
    where: TransactionFilterInput
  ): TransactionConnection
  allUserActivity(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [UserActivitySortInput!]
    startUtc: DateTime!
    userId: String
    where: UserActivityFilterInput
  ): UserActivityConnection
  allUserNotifications(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [UserAccountNotificationSortInput!]
    where: UserAccountNotificationFilterInput
  ): UserAccountNotificationConnection
  allWebhooks(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [WebhookSortInput!]
    where: WebhookFilterInput
  ): WebhookConnection
  article(articleId: String!): Article
  articleContent(input: GetArticleContentInput!): Article!
  artitelliBalance: ArtitelliBalance
  audience(id: String!): Audience
  audienceDataField(id: String!): DataField
  audienceDataFieldCategories(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    audienceId: String!
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [DatafieldCategorySortInput!]
    where: DatafieldCategoryFilterInput
  ): DatafieldCategoryConnection
  audienceDataFields(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    audienceId: String!
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [DataFieldSortInput!]
    where: DataFieldFilterInput
  ): DataFieldConnection
  audienceExport(input: GetExportInput!): Export
  audienceExports(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    audienceId: String!
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ExportSortInput!]
    where: ExportFilterInput
  ): ExportConnection
  audienceGroup(input: GetGroupInput!): Group
  audienceGroups(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    audienceId: String!
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AudienceGroupInfoSortInput!]
    where: AudienceGroupInfoFilterInput
  ): AudienceGroupInfoConnection
  audienceImport(input: GetImportInput!): Import
  audienceImports(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    audienceId: String!
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ImportSortInput!]
    where: ImportFilterInput
  ): ImportConnection
  audienceSavedSearch(input: GetSavedSearchInput!): SavedSearch
  audienceSavedSearches(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    audienceId: String!
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [SavedSearchInfoSortInput!]
    where: SavedSearchInfoFilterInput
  ): SavedSearchInfoConnection
  audienceStatsByDay(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: GetAudienceStatsByDayInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AudienceStatsByDaySortInput!]
    where: AudienceStatsByDayFilterInput
  ): AudienceStatsByDayConnection
  audiences(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [AudienceInfoSortInput!]
    where: AudienceInfoFilterInput
  ): AudienceInfoConnection
  campaign(id: String!): Campaign
  campaignContentVariation(input: GetContentVariationInput!): CampaignVariationContent
  campaignContentVariationVersions(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: GetContentVariationVersionsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [HistorySortInput!]
    where: HistoryFilterInput
  ): HistoryConnection
  campaignDataFields(id: String!): CampaignDataFields
  campaignHistoryStats(input: CampaignHistoryInput!): CampaignHistory
  campaignLinks(id: String!): [CampaignLink!]
  campaignRecipients(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    id: String!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ContactSortInput!]
    where: ContactFilterInput
  ): ContactConnection
  campaignStats(input: CampaignStatsInput!): CampaignStats
  campaigns(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [CampaignInfoSortInput!]
    where: CampaignInfoFilterInput
  ): CampaignInfoConnection
  checkAddOnHistory(id: String!): Boolean
  """Check if an integration can be synced"""
  checkSyncEligibility(integrationId: String!): SyncEligibilityResult!
  contact(input: GetContactInput!): Contact
  contactConversations(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    contactId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ContactConversationSortInput!]
    where: ContactConversationFilterInput
  ): ContactConversationConnection
  contactCount(id: String!): Int
  contactEvents(input: AllSubscriberEventsByDayInput!): [SubscriberEventStats!]!
  contactJourneyConversions(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: GetAllContactConversionsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ContactJourneyConversionSortInput!]
    where: ContactJourneyConversionFilterInput
  ): ContactJourneyConversionConnection
  contactJourneyGoals(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: GetAllContactGoalsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ContactJourneyGoalSortInput!]
    where: ContactJourneyGoalFilterInput
  ): ContactJourneyGoalConnection
  contactNotes(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    contactId: String!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ContactNoteSortInput!]
    where: ContactNoteFilterInput
  ): ContactNoteConnection
  contacts(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: GetAllContactsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ContactSortInput!]
  ): ContactConnection
  contentBlock(id: String!): ContentBlock
  contentBlockContent(input: GetContentBlockContentInput!): ContentBlock
  countries(order: [CountrySortInput!], where: CountryFilterInput): [Country!]
  customApiEvent(id: String!): CustomApiEvent
  customApiEvents(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [CustomApiEventSortInput!]
    where: CustomApiEventFilterInput
  ): CustomApiEventConnection
  customReport(id: String!): CustomReport!
  customReportJob(id: String!): CustomReportJob!
  domain(id: String!): Domain
  domains(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [DomainSortInput!]
    where: DomainFilterInput
  ): DomainConnection
  export(id: String!): AccountExport
  """Get current field mappings for an integration"""
  fieldMappings(integrationId: String!): [FieldMapping!]!
  file(id: String!): File
  fileStorageStatsByDay(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: StatsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [FileStorageStatsByDaySortInput!]
    where: FileStorageStatsByDayFilterInput
  ): FileStorageStatsByDayConnection
  files(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [FileInfoSortInput!]
    where: FileInfoFilterInput
  ): FileInfoConnection
  folders(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [FolderSortInput!]
    where: FolderFilterInput
  ): FolderConnection
  form(input: GetFormInput!): AudienceForm
  formActionStats(input: GetActionStatsInput!): [ActionStats!]
  formQuestion(input: GetQuestionInput!): Question
  formQuestions(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    id: String!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [QuestionInfoSortInput!]
    where: QuestionInfoFilterInput
  ): QuestionInfoConnection
  formResponses(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    id: String!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [SubmissionResponseSortInput!]
    where: SubmissionResponseFilterInput
  ): SubmissionResponseConnection
  formStats(input: GetStatsInput!): StatsResponse
  forms(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    audienceId: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [FormInfoSortInput!]
    where: FormInfoFilterInput
  ): FormInfoConnection
  headers: [KeyValuePairOfStringAndStringValues!]
  """Get available custom fields for an integration"""
  integrationCustomFields(integrationId: String!): [IntegrationCustomField!]!
  """Return a specific integration"""
  integrationPartner(id: String!): IntegrationPartner
  """Get sync history for an integration"""
  integrationSyncHistory(integrationId: String!, limit: Int!): [AccountIntegrationSyncJob!]!
  journey(id: String!): Journey
  journeyCampaignStats(input: GetJourneyCampaignStatsInput!): [JourneyCampaignStats!]
  journeyCompletesByDay(endUtc: DateTime!, id: String!, minuteOffset: Int, nodeId: String, startUtc: DateTime!): [JourneyActivity!]
  journeyContactStats(input: JourneyStatsInput!): JourneyContactStats
  journeyContactStatsByDay(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: JourneyStatsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyContactStatsByDaySortInput!]
    where: JourneyContactStatsByDayFilterInput
  ): JourneyContactStatsByDayConnection
  journeyContacts(input: GetAllJourneyContactsInput!): [ReportJourneyContact!]
  journeyConversion(id: String!): JourneyConversion
  journeyConversionContacts(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: GetJourneyConversionContactsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyConversionContactSortInput!]
    where: JourneyConversionContactFilterInput
  ): JourneyConversionContactConnection
  journeyConversionStatsByDay(conversionId: String!, endUtc: DateTime!, id: String!, minuteOffset: Int, startUtc: DateTime!): [JourneyActivity!]
  journeyConversions(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    journeyId: String!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyConversionSortInput!]
    where: JourneyConversionFilterInput
  ): JourneyConversionConnection
  journeyDurations(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: JourneyStatsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyDurationSortInput!]
    where: JourneyDurationFilterInput
  ): JourneyDurationConnection
  journeyEntriesByDay(endUtc: DateTime!, id: String!, minuteOffset: Int, nodeId: String, startUtc: DateTime!): [JourneyActivity!]
  journeyExitsByDay(endUtc: DateTime!, id: String!, minuteOffset: Int, nodeId: String, startUtc: DateTime!): [JourneyActivity!]
  journeyGoal(id: String!): JourneyGoal
  journeyGoalContacts(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: GetJourneyGoalContactsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyGoalContactSortInput!]
    where: JourneyGoalContactFilterInput
  ): JourneyGoalContactConnection
  journeyGoalStatsByDay(endUtc: DateTime!, goalId: String!, id: String!, minuteOffset: Int, startUtc: DateTime!): [JourneyActivity!]
  journeyGoals(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    journeyId: String!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyGoalSortInput!]
    where: JourneyGoalFilterInput
  ): JourneyGoalConnection
  journeyNode(input: GetJourneyNodeInput!): JourneyNode
  journeyNodes(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    journeyId: String!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyNodeInfoSortInput!]
    where: JourneyNodeInfoFilterInput
  ): JourneyNodeInfoConnection
  journeySiteNotification(input: GetJourneySiteNotificationInput!): JourneySiteNotificationInfo
  journeySiteNotificationStats(endUtc: DateTime!, hourOffset: Int, id: String!, journeyId: String!, minuteOffset: Int, startUtc: DateTime!): JourneySiteNotificationStats
  journeySiteNotifications(endUtc: DateTime!, hourOffset: Int, id: String!, minuteOffset: Int, startUtc: DateTime!): [JourneySiteNotification!]
  journeyTags(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: JourneyStatsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyTagStatsSortInput!]
    where: JourneyTagStatsFilterInput
  ): JourneyTagStatsConnection
  journeys(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyInfoSortInput!]
    where: JourneyInfoFilterInput
  ): JourneyInfoConnection
  landingPage(id: String!): LandingPage
  landingPageActionStats(input: GetLandingPageActionStatsInput!): [ActionStats!]
  landingPageStats(input: GetLandingPageStatsInput!): StatsResponse
  landingPages(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [LandingPageInfoSortInput!]
    where: LandingPageInfoFilterInput
  ): LandingPageInfoConnection
  languages(order: [LanguageInfoSortInput!], where: LanguageInfoFilterInput): [LanguageInfo!]
  """Get the last sync job for an integration"""
  lastIntegrationSync(integrationId: String!): AccountIntegrationSyncJob
  me: User
  permissions(order: [PermissionSortInput!], where: PermissionFilterInput): [Permission!]
  rssFeed(url: String!): RSSFeed!
  sMSCampaign(id: String!): SMSCampaign
  sMSCampaigns(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [SMSCampaignSortInput!]
    where: SMSCampaignFilterInput
  ): SMSCampaignConnection
  securityRole(id: String!): SecurityRole
  securityRoles(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [SecurityRoleSortInput!]
    where: SecurityRoleFilterInput
  ): SecurityRoleConnection
  servicePlan(id: String!): ServicePlan
  servicePlans(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ServicePlanSortInput!]
    where: ServicePlanFilterInput
  ): ServicePlanConnection
  states(order: [StateSortInput!], where: StateFilterInput): [State!]
  survey(campaignId: String, id: String!): Survey
  surveyActionStats(input: GetSurveyActionStatsInput!): [ActionStats!]
  surveyQuestion(input: GetSurveyQuestionInput!): Question
  surveyQuestions(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    id: String!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [QuestionInfoSortInput!]
    where: QuestionInfoFilterInput
  ): QuestionInfoConnection
  surveyResponses(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    campaignId: String
    """Returns the first _n_ elements from the list."""
    first: Int
    id: String!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [SubmissionResponseSortInput!]
    where: SubmissionResponseFilterInput
  ): SubmissionResponseConnection
  surveyStats(input: GetSurveyStatsInput!): StatsResponse
  surveys(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [SurveyInfoSortInput!]
    where: SurveyInfoFilterInput
  ): SurveyInfoConnection
  systemJourneys(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [JourneyInfoSortInput!]
    where: JourneyInfoFilterInput
  ): JourneyInfoConnection
  systemLandingPage(id: String!): LandingPage
  systemLandingPages(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [LandingPageInfoSortInput!]
    where: LandingPageInfoFilterInput
  ): LandingPageInfoConnection
  systemSurvey(id: String!): Survey
  systemSurveys(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [SurveyInfoSortInput!]
    where: SurveyInfoFilterInput
  ): SurveyInfoConnection
  systemTemplate(id: String!): Template
  systemTemplates(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TemplateInformationSortInput!]
    where: TemplateInformationFilterInput
  ): TemplateInformationConnection
  tags(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    entityType: EntityType
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TagSortInput!]
    templateType: TemplateType
    where: TagFilterInput
  ): TagConnection
  template(id: String!): Template
  templateContent(input: GetTemplateContentInput!): [TemplateContent!]
  templateTxVariables(input: GetTemplateTxVariablesInput!): [String!]
  templateVersions(id: String!): TemplateVersions
  templates(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TemplateInformationSortInput!]
    where: TemplateInformationFilterInput
  ): TemplateInformationConnection
  totalContactsByDay(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: StatsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TotalContactsByDaySortInput!]
    where: TotalContactsByDayFilterInput
  ): TotalContactsByDayConnection
  totalEmailsByDay(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    input: StatsInput!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TotalEmailsByDaySortInput!]
    where: TotalEmailsByDayFilterInput
  ): TotalEmailsByDayConnection
  transaction(id: String!): [Transaction]!
  transactionActivity(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    endUtc: DateTime!
    eventTypes: [EmailEventType!]
    """Returns the first _n_ elements from the list."""
    first: Int
    fromEmailAddress: String
    groups: [String!]
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionActivitySortInput!]
    startUtc: DateTime!
    tags: [String!]
    toEmailAddress: String
    where: TransactionActivityFilterInput
  ): TransactionActivityConnection
  transactionDeviceStats(endUtc: DateTime!, startUtc: DateTime!): [TransactionDeviceStats!]
  transactionEvents(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    id: String!
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionEventSortInput!]
    where: TransactionEventFilterInput
  ): TransactionEventConnection
  transactionFromDomains(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    domains: [String!]
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionFromDomainStatsSortInput!]
    startUtc: DateTime!
    where: TransactionFromDomainStatsFilterInput
  ): TransactionFromDomainStatsConnection
  transactionGroupNames(where: StringOperationFilterInput): [String!]
  transactionPerformance(endUtc: DateTime!, groups: [String!], startUtc: DateTime!, tags: [String!]): TransactionPerformace
  transactionPerformanceBounceStats(endUtc: DateTime!, groups: [String!], startUtc: DateTime!, tags: [String!]): [TransactionPerformanceBounceStats!]
  transactionPerformanceDeviceStats(endUtc: DateTime!, groups: [String!], startUtc: DateTime!, tags: [String!]): [TransactionPerformanceDeviceStats!]
  transactionPerformanceLinkStats(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    groups: [String!]
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionPerformanceLinkStatsSortInput!]
    startUtc: DateTime!
    tags: [String!]
    where: TransactionPerformanceLinkStatsFilterInput
  ): TransactionPerformanceLinkStatsConnection
  transactionPerformanceSoftwareStats(endUtc: DateTime!, groups: [String!], startUtc: DateTime!, tags: [String!]): [TransactionPerformanceSoftwareStats!]
  transactionRecipientBounceDomains(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    domains: [String!]
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionBounceDomainSortInput!]
    startUtc: DateTime!
    where: TransactionBounceDomainFilterInput
  ): TransactionBounceDomainConnection
  transactionRecipientDomains(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    domains: [String!]
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionDomainStatsSortInput!]
    startUtc: DateTime!
    where: TransactionDomainStatsFilterInput
  ): TransactionDomainStatsConnection
  transactionSoftwareStats(endUtc: DateTime!, startUtc: DateTime!): [TransactionSoftwareStats!]
  transactionTopRecipientBounceDomains(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    domains: [String!]
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionTopBounceDomainStatsSortInput!]
    startUtc: DateTime!
    where: TransactionTopBounceDomainStatsFilterInput
  ): TransactionTopBounceDomainStatsConnection
  transactionTrends(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    groups: [String!]
    includeByDay: Boolean
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionStatsSortInput!]
    startUtc: DateTime!
    tags: [String!]
    where: TransactionStatsFilterInput
  ): TransactionStatsConnection
  transactionTrendsLinks(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    endUtc: DateTime!
    """Returns the first _n_ elements from the list."""
    first: Int
    groups: [String!]
    includeByDay: Boolean
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [TransactionLinkStatsSortInput!]
    startUtc: DateTime!
    tags: [String!]
    where: TransactionLinkStatsFilterInput
  ): TransactionLinkStatsConnection
  user(id: String!): User
  userClaims: [KeyValuePairOfStringAndString!]
  userInvites(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [InviteSortInput!]
    where: InviteFilterInput
  ): InviteConnection
  userNotification(id: String!): UserAccountNotification
  users(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [UserSortInput!]
  ): UserConnection
  videoThumbnail(input: GetVideoThumbnailInput!): String
  view(id: String!): View
  views(
    """Returns the elements in the list that come after the specified cursor."""
    after: String
    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String
    """Returns the first _n_ elements from the list."""
    first: Int
    """Returns the last _n_ elements from the list."""
    last: Int
    order: [ViewSortInput!]
    where: ViewFilterInput
  ): ViewConnection
  webhook(id: String!): Webhook
}


type Mutation {
  addOnCostEstimator(id: String!, quantity: Int!, storageDays: Int): AddOnPriceSummary
  bulkDeleteContact(input: DeleteBulkContactInput!): BulkDeleteStatus!
  cancelAccountAddOn(id: String!): Boolean
  cancelAccountPlan(feedback: String, planType: PlanType!, rating: Int, reason: String): Boolean
  cancelAccountPlanDowngrade(planType: PlanType!): Boolean
  cancelAccountPlanNow(feedback: String, planType: PlanType!, rating: Int, reason: String): Boolean
  changeAccountAddOn(id: String!, quantity: Int, storageDays: Int): ChgPlanResult
  changeAccountPlan(addOns: [AddOnInfoInput!], allowAutoScaling: Boolean!, allowOverages: Boolean!, couponCode: String, itemCount: Int!, newPlanId: String!): ChgPlanResult
  changeCustomReportStatus(id: String!, isEnabled: Boolean!): Boolean!
  checkAlias(input: CheckAliasInput!): Boolean
  checkPathName(pathName: String!): Boolean
  copyJourneyNode(input: CopyJourneyNodeInput!): Boolean
  costEstimator(addOns: [AddOnInfoInput!], allowOverages: Boolean!, couponCode: String, itemCount: Int!, newPlanId: String!): Estimate
  createAIRequest(input: CreateAIRequestInput!): AIRequest
  createAccount(input: CreateAccountInput!): Account
  createAccountApiKey(input: CreateAccountApiKeyInput!): AccountApiKey
  createAccountAutoRetryRule(input: CreateAutoRetryRuleInput!): AccountAutoRetryRule
  createAccountPaymentMethod(input: CreatePaymentMethodInput!): PaymentMethod
  createAccountSuppressionFilter(input: CreateSuppressionFilterInput!): AccountSuppressionFilter
  """
  Create an affiliate application for a Tarvent user. Only one application per user is allowed and is not associated with an account.
  """
  createAffiliateApp(input: AffiliateApplicationInput!): AffiliateApplication
  """Create an affiliate payment request"""
  createAffiliatePayment: AffiliatePayment
  createArticle(input: CreateArticleInput!): Article
  createAudience(input: CreateAudienceInput!): Audience
  createAudienceDataField(input: CreateDataFieldInput!): DataField
  createAudienceDataFieldCategory(input: CreateDataFieldCategoryInput!): DatafieldCategory
  createAudienceGroup(input: CreateGroupInput!): Group
  createAudienceSavedSearch(input: CreateSavedSearchInput!): SavedSearch
  createAudienceSecurityRole(input: CreateAudienceSecurityRoleInput!): Audience
  createAudienceWebhook(audienceId: String!): AudienceWebhook!
  createCampaign(input: CreateCampaignInput!): Campaign
  createCampaignContentVariation(input: CreateContentVariationInput!): CampaignVariationContent
  createContact(input: CreateContactInput!): Contact
  createContactConversation(input: CreateContactConversationInput!): Contact
  createContactCustomEvent(id: String!, key: String!): Boolean
  createContactNote(input: CreateContactNoteInput!): Contact
  createContentBlock(input: CreateContentBlockInput!): ContentBlock
  createCustomApiEvent(input: CreateCustomApiEventInput!): CustomApiEvent
  createDomain(domain: String!, sendingEnabled: Boolean!, siteTrackingEnabled: Boolean!): Domain
  createExport(input: CreateAccountExportInput!): AccountExport
  createFolder(input: CreateFolderInput!): Folder
  createForm(input: CreateFormInput!): AudienceForm
  createFormQuestion(input: CreateQuestionInput!): Question
  createGroupContact(input: CreateGroupContactInput!): Contact
  """Create a new account integration"""
  createIntegration(input: CreateIntegrationInput!): AccountIntegration!
  createJourney(input: CreateJourneyInput!): Journey
  createJourneyActionAddContactNote(input: CreateActionAddContactNoteInput!): ActionAddContactNote
  createJourneyActionConvertContact(input: CreateActionConvertContactInput!): ActionConvertContact
  createJourneyActionEvaluateGoal(input: CreateActionEvaluateGoalInput!): ActionEvaluateGoal
  createJourneyActionSendEmail(input: CreateActionSendEmailInput!): ActionSendEmail
  createJourneyActionSendNotificationEmail(input: CreateActionSendNotificationEmailInput!): ActionSendNotifiactionEmail
  createJourneyActionSendSMS(input: CreateActionSendSMSInput!): ActionSendSMS
  createJourneyActionSiteNotification(input: CreateActionSiteNotificationInput!): ActionSiteNotification
  createJourneyActionUpdateContactGroup(input: CreateActionUpdateContactGroupInput!): ActionUpdateContactGroup
  createJourneyActionUpdateContactProfile(input: CreateActionUpdateContactProfileInput!): ActionUpdateContactProfile
  createJourneyActionUpdateContactStatus(input: CreateActionUpdateContactStatusInput!): ActionUpdateContactStatus
  createJourneyActionUpdateContactTag(input: CreateActionUpdateContactTagInput!): ActionUpdateContactTag
  createJourneyActionUpdateFacebookAudience(input: CreateActionUpdateFacebookAudienceInput!): ActionUpdateFacebookAudience
  createJourneyActionUpdateJourneyContact(input: CreateActionUpdateJourneyContactInput!): ActionUpdateJourneyContact
  createJourneyActionWebhook(input: CreateActionWebhookInput!): ActionWebhook
  createJourneyConversion(input: CreateJourneyConversionInput!): JourneyConversion
  createJourneyFlowDecisionSplit(input: CreateFlowDecisionSplitInput!): FlowDecisionSplit
  createJourneyFlowEngagementSplit(input: CreateFlowEngagementSplitInput!): FlowEngagementSplit
  createJourneyFlowGoTo(input: CreateFlowGoToInput!): FlowGoTo
  createJourneyFlowJoin(input: CreateFlowJoinInput!): FlowJoin
  createJourneyFlowPath(input: CreateFlowPathInput!): FlowPath
  createJourneyFlowRandomSplit(input: CreateFlowRandomSplitInput!): FlowRandomSplit
  createJourneyFlowWaitDateField(input: CreateFlowWaitDateFieldInput!): FlowWaitDateField
  createJourneyFlowWaitFieldChange(input: CreateFlowWaitFieldChangeInput!): FlowWaitFieldChange
  createJourneyFlowWaitUntil(input: CreateFlowWaitUntilInput!): FlowWaitUntil
  createJourneyFlowWaitUntilCondition(input: CreateFlowWaitUntilConditionInput!): FlowWaitUntilCondition
  createJourneyGoal(input: CreateJourneyGoalInput!): JourneyGoal
  createJourneyTriggerAudience(input: CreateTriggerAudienceInput!): TriggerAudience
  createJourneyTriggerCampaign(input: CreateTriggerCampaignInput!): TriggerCampaign
  createJourneyTriggerContactAdded(input: CreateTriggerContactAddedInput!): TriggerContactAdded
  createJourneyTriggerConversion(input: CreateTriggerConversionInput!): TriggerConversion
  createJourneyTriggerCustomEvent(input: CreateTriggerCustomEventInput!): TriggerCustomEvent
  createJourneyTriggerDate(input: CreateTriggerDateInput!): TriggerDate
  createJourneyTriggerEcommerce(input: CreateTriggerEcommerceInput!): TriggerEcommerce
  createJourneyTriggerForm(input: CreateTriggerFormInput!): TriggerForm
  createJourneyTriggerGoal(input: CreateTriggerGoalInput!): TriggerGoal
  createJourneyTriggerManualInclusion(input: CreateTriggerManualInclusionInput!): TriggerManualInclusion
  createJourneyTriggerPage(input: CreateTriggerPageInput!): TriggerPage
  createJourneyTriggerRss(input: CreateTriggerRssInput!): TriggerRss
  createJourneyTriggerSurvey(input: CreateTriggerSurveyInput!): TriggerSurvey
  createJourneyTriggerTransaction(input: CreateTriggerTransactionInput!): TriggerTransaction
  createJourneyTriggerWebpage(input: CreateTriggerWebpageInput!): TriggerWebPage
  createLandingPage(input: CreateLandingPageInput!): LandingPage
  createSMSCampaign(input: CreateSMSCampaignInput!): SMSCampaign
  createSecurityRole(input: CreateSecurityRoleInput!): SecurityRole
  createSurvey(input: CreateSurveyInput!): Survey
  createSurveyQuestion(input: CreateQuestionInput!): Question
  createTag(input: CreateTagInput!): Tag
  createTemplate(input: CreateTemplateInput!): Template
  createTransaction(input: CreateTransactionInput!): [TransactionResponse!]
  createUrlFile(input: CreateUrlFileInput!): File
  createUserInvite(input: CreateUserInviteInput!): Invite
  createUserSecurityRole(input: CreateUserSecurityRoleInput!): SecurityRole
  createView(input: CreateViewInput!): View
  createWebhook(callBackUrl: String!, dataSettings: WebhookDataSetting, description: String, events: [WebhookEventInput!]!, filter: ConditionGroupInput, integrationType: IntegrationType, name: String!): Webhook
  """Temporarily deactivate an integration (can be reactivated later)"""
  deactivateIntegration(id: String!): Boolean!
  deleteAIRequest(id: String!): Boolean
  deleteAccountAutoRetryRule(id: String!): Boolean
  deleteAccountSuppressionFilter(id: String!): Boolean
  deleteAccountUser(input: DeleteAccountUserInput!): Boolean
  deleteArticle(id: String!): Boolean
  deleteAudience(id: String!): Boolean
  deleteAudienceDataField(input: DeleteDataFieldInput!): Boolean
  deleteAudienceDataFieldCategory(input: DeleteDataFieldCategoryInput!): Boolean
  deleteAudienceGroup(input: DeleteGroupInput!): Boolean
  deleteAudienceSavedSearch(input: DeleteSavedSearchInput!): Boolean
  deleteAudienceSecurityRole(input: DeleteAudienceSecurityRoleInput!): Audience
  deleteAudienceWebhook(audienceId: String!): Boolean!
  deleteCampaign(id: String!): Boolean
  deleteCampaignContentVariation(input: DeleteContentVariationInput!): Boolean
  deleteContact(input: DeleteContactInput!): Boolean
  deleteContactNote(input: DeleteContactNoteInput!): Boolean
  deleteContentBlock(id: String!): Boolean
  deleteCustomApiEvent(id: String!): Boolean
  deleteCustomReport(id: String!): Boolean!
  deleteCustomReportJob(id: String!): Boolean!
  deleteDomain(id: String!): Boolean!
  deleteFile(id: String!): Boolean
  deleteFolder(id: String!): Boolean
  deleteForm(input: DeleteFormInput!): Boolean
  deleteFormQuestion(input: DeleteQuestionInput!): Boolean
  deleteGroupContact(input: DeleteGroupContactInput!): Contact
  """Soft delete an account integration"""
  deleteIntegration(id: String!): Boolean!
  deleteJourney(id: String!): Boolean
  deleteJourneyConversion(id: String!): Boolean
  deleteJourneyFlowPath(input: DeleteFlowPathInput!): Boolean
  deleteJourneyGoal(id: String!): Boolean
  deleteJourneyNode(input: DeleteJourneyNodeInput!): Boolean
  deleteLandingPage(id: String!): Boolean
  deleteSMSCampaign(id: String!): Boolean
  deleteSecurityRole(id: String!): Boolean
  deleteSurvey(id: String!): Boolean
  deleteSurveyQuestion(input: DeleteQuestionInput!): Boolean
  deleteTag(input: DeleteTagInput!): Boolean
  deleteTemplate(id: String!): Boolean
  deleteUser: Boolean
  deleteUserNotification(id: String!): Boolean
  deleteUserSecurityRole(input: DeleteUserSecurityRoleInput!): SecurityRole
  deleteView(id: String!): Boolean
  deleteWebhook(id: String!): Boolean
  downgradeCheck(planType: PlanType!): DowngradeCheckResult
  embedLandingPageForm(id: String!): Boolean
  enterContactIntoJourney(id: String!, journeyId: String!): Boolean
  exitContactFromJourney(id: String!, journeyId: String!): Boolean
  exportFormSource(input: ExportFormSourceInput!): FormSource
  exportLandingPageSource(input: ExportFormSourceInput!): FormSource
  markAllUserNotificationsAsRead: Boolean
  markCampaignAsNotReady(id: String!): Boolean
  markCampaignAsReady(id: String!): Boolean
  moveJourneyNode(input: MoveJourneyNodeInput!): Boolean
  pauseCampaign(id: String!): Boolean
  previewArticle(input: PreviewArticleInput!): [FileContent!]
  previewAudienceDoubleOptInEmail(input: PreviewDoubleOptInInput!): String
  previewCampaign(input: PreviewCampaignInput!): CampaignPreview
  previewContentBlock(input: PreviewContentBlockInput!): [FileContent!]
  previewFormEmail(input: PreviewEmailInput!): String
  previewLandingPage(id: String): String
  previewSurvey(id: String): String
  previewSurveyEmail(input: PreviewEmailInput!): String
  previewSystemTemplate(input: PreviewSystemTemplateInput!): [PreviewTemplateOutput!]
  previewTemplate(input: PreviewTemplateInput!): [PreviewTemplateOutput!]
  processUserInvite(id: String!): Invite
  publishArticle(id: String!): Boolean
  publishContentBlock(id: String!): Boolean
  """Reactivate a previously deactivated integration"""
  reactivateIntegration(id: String!): Boolean!
  recalculateAudienceStats(id: String!): Audience
  """Register webhooks for an integration"""
  registerIntegrationWebhooks(integrationId: String!): WebhookRegistrationResult!
  renderCampaignContentSource(input: RenderContentSourceInput!): CampaignContentSource
  requestAccountAccess(input: RequestAccountAccessInput!): Boolean
  resendContactConfirmationEmail(input: ResendConfEmailInput!): Boolean
  """
  Resend the Double Opt-in email to contacts based on search criteria, list of contact ID, or all pending contacts for an audience.
  """
  resendDoiEmail(input: ResendDoiEmailInput!): ResendDoiEmail
  resendUserInvite(id: String!): Invite
  resetContactBounceCounts(input: ResetBounceCountsInput!): Boolean
  resetJourney(id: String!): Boolean
  """Mark sync errors as resolved"""
  resolveSyncErrors(input: ResolveSyncErrorsInput!): Boolean!
  resumeCampaign(id: String!): Boolean
  """Retry failed sync errors"""
  retrySyncErrors(input: RetrySyncErrorsInput!): RetryResult!
  revokeAccountApiKey(id: String!): Boolean
  revokeUserInvite(id: String!): Invite
  scheduleAudienceImport(input: CreateImportInput!): Boolean
  scheduleCampaign(input: ScheduleCampaignInput!): Boolean
  scheduleExport(input: CreateExportInput!): Boolean
  """
  Schedule a sync for an integration to import contacts from the integration partner
  """
  scheduleIntegrationSync(input: ScheduleSyncInput!): AccountIntegrationSyncJob!
  selectCampaignMvWinner(input: SelectMvWinnerInput!): Boolean
  sendCampaignCopy(id: String!, sendsUtc: [DateTime!]!): Boolean
  sendCampaignTest(input: SendCampaignTestInput!): Boolean
  sendTemplateTest(input: SendTemplateTestInput!): Boolean
  startJourney(id: String!): Boolean
  stopCampaign(id: String!): Boolean
  stopJourney(id: String!): Boolean
  """Test connection for an integration"""
  testIntegrationConnection(integrationId: String!): CredentialTestResult!
  unpublishArticle(id: String!): Boolean
  unpublishContentBlock(id: String!): Boolean
  updateAccount(input: UpdateAccountInput!): Account
  updateAccountAutoRetryRule(input: UpdateAutoRetryRuleInput!): AccountAutoRetryRule
  updateAccountPaymentMethod(input: UpdatePaymentMethodInput!): PaymentMethod
  updateAccountPlanSettings(allowAutoScaling: Boolean!, allowOverages: Boolean!, planType: PlanType!): Boolean
  updateArticle(input: UpdateArticleInput!): Article
  updateAudience(input: UpdateAudienceInput!): Audience
  updateAudienceDataField(input: UpdateDataFieldInput!): DataField
  updateAudienceDataFieldCategory(input: UpdateDataFieldCategoryInput!): DatafieldCategory
  updateAudienceGroup(input: UpdateGroupInput!): Group
  updateAudienceSavedSearch(input: UpdateSavedSearchInput!): SavedSearch
  updateCampaign(input: UpdateCampaignInput!): Campaign
  updateCampaignContentVariation(input: UpdateContentVariationInput!): CampaignVariationContent
  updateContact(input: UpdateContactInput!): Contact
  updateContactStatus(input: UpdateContactStatusInput!): Boolean
  updateContactTags(input: UpdateContactTagsInput!): Boolean
  updateContentBlock(input: UpdateContentBlockInput!): ContentBlock
  updateCustomApiEvent(input: UpdateCustomApiEventInput!): CustomApiEvent
  updateCustomReport(distributionList: [String!], id: String!, note: String, userIds: [String!]): CustomReport!
  updateDomain(request: UpdateDomainV2Input!): Domain
  updateFile(input: UpdateFileInput!): File
  updateFolder(input: UpdateFolderInput!): Folder
  updateForm(input: UpdateFormInput!): AudienceForm
  updateFormQuestion(input: UpdateQuestionInput!): Question
  """Update an existing account integration"""
  updateIntegration(input: UpdateIntegrationInput!): AccountIntegration!
  updateJourney(input: UpdateJourneyInput!): Journey
  updateJourneyActionAddContactNote(input: UpdateActionAddContactNoteInput!): ActionAddContactNote
  updateJourneyActionConvertContact(input: UpdateActionConvertContactInput!): ActionConvertContact
  updateJourneyActionEvaluateGoal(input: UpdateActionEvaluateGoalInput!): ActionEvaluateGoal
  updateJourneyActionSendEmail(input: UpdateActionSendEmailInput!): ActionSendEmail
  updateJourneyActionSendNotificationEmail(input: UpdateActionSendNotificationEmailInput!): ActionSendNotifiactionEmail
  updateJourneyActionSendSMS(input: UpdateActionSendSMSInput!): ActionSendSMS
  updateJourneyActionSiteNotification(input: UpdateActionSiteNotificationInput!): ActionSiteNotification
  updateJourneyActionUpdateContactGroup(input: UpdateActionUpdateContactGroupInput!): ActionUpdateContactGroup
  updateJourneyActionUpdateContactProfile(input: UpdateActionUpdateContactProfileInput!): ActionUpdateContactProfile
  updateJourneyActionUpdateContactStatus(input: UpdateActionUpdateContactStatusInput!): ActionUpdateContactStatus
  updateJourneyActionUpdateContactTag(input: UpdateActionUpdateContactTagInput!): ActionUpdateContactTag
  updateJourneyActionUpdateFacebookAudience(input: UpdateActionUpdateFacebookAudienceInput!): ActionUpdateFacebookAudience
  updateJourneyActionUpdateJourneyContact(input: UpdateActionUpdateJourneyContactInput!): ActionUpdateJourneyContact
  updateJourneyActionWebhook(input: UpdateActionWebhookInput!): ActionWebhook
  updateJourneyConversion(input: UpdateJourneyConversionInput!): JourneyConversion
  updateJourneyFlowDecisionSplit(input: UpdateFlowDecisionSplitInput!): FlowDecisionSplit
  updateJourneyFlowEngagementSplit(input: UpdateFlowEngagementSplitInput!): FlowEngagementSplit
  updateJourneyFlowGoTo(input: UpdateFlowGoToInput!): FlowGoTo
  updateJourneyFlowJoin(input: UpdateFlowJoinInput!): FlowJoin
  updateJourneyFlowPath(input: UpdateFlowPathInput!): FlowPath
  updateJourneyFlowRandomSplit(input: UpdateFlowRandomSplitInput!): FlowRandomSplit
  updateJourneyFlowWaitDateField(input: UpdateFlowWaitDateFieldInput!): FlowWaitDateField
  updateJourneyFlowWaitFieldChange(input: UpdateFlowWaitFieldChangeInput!): FlowWaitFieldChange
  updateJourneyFlowWaitUntil(input: UpdateFlowWaitUntilInput!): FlowWaitUntil
  updateJourneyFlowWaitUntilCondition(input: UpdateFlowWaitUntilConditionInput!): FlowWaitUntilCondition
  updateJourneyGoal(input: UpdateJourneyGoalInput!): JourneyGoal
  updateJourneyTriggerAudience(input: UpdateTriggerAudienceInput!): TriggerAudience
  updateJourneyTriggerCampaign(input: UpdateTriggerCampaignInput!): TriggerCampaign
  updateJourneyTriggerContactAdded(input: UpdateTriggerContactAddedInput!): TriggerContactAdded
  updateJourneyTriggerConversion(input: UpdateTriggerConversionInput!): TriggerConversion
  updateJourneyTriggerCustomEvent(input: UpdateTriggerCustomEventInput!): TriggerCustomEvent
  updateJourneyTriggerDate(input: UpdateTriggerDateInput!): TriggerDate
  updateJourneyTriggerEcommerce(input: UpdateTriggerEcommerceInput!): TriggerEcommerce
  updateJourneyTriggerForm(input: UpdateTriggerFormInput!): TriggerForm
  updateJourneyTriggerGoal(input: UpdateTriggerGoalInput!): TriggerGoal
  updateJourneyTriggerManualInclusion(input: UpdateTriggerManualInclusionInput!): TriggerManualInclusion
  updateJourneyTriggerPage(input: UpdateTriggerPageInput!): TriggerPage
  updateJourneyTriggerRss(input: UpdateTriggerRssInput!): TriggerRss
  updateJourneyTriggerSurvey(input: UpdateTriggerSurveyInput!): TriggerSurvey
  updateJourneyTriggerTransaction(input: UpdateTriggerTransactionInput!): TriggerTransaction
  updateJourneyTriggerWebpage(input: UpdateTriggerWebpageInput!): TriggerWebPage
  updateLandingPage(input: UpdateLandingPageInput!): LandingPage
  updateSMSCampaign(input: UpdateSMSCampaignInput!): SMSCampaign
  updateSecurityRole(input: UpdateSecurityRoleInput!): SecurityRole
  updateSurvey(input: UpdateSurveyInput!): Survey
  updateSurveyQuestion(input: UpdateQuestionInput!): Question
  """Update sync error status (for system use)"""
  updateSyncErrorStatus(errorId: Long!, resolution: String, resolvedBy: String, status: Int!): UpdateSyncErrorResult!
  updateTag(input: UpdateTagInput!): Tag
  updateTemplate(input: UpdateTemplateInput!): Template
  updateUser(input: UpdateUserInput!): User
  updateUserNotificationReadStatus(id: String!, isRead: Boolean!): Boolean
  updateView(input: UpdateViewInput!): View
  updateWebhook(callBackUrl: String, dataSettings: WebhookDataSetting, description: String, enabled: Boolean, events: [WebhookEventInput!], filter: ConditionGroupInput, id: String!, integrationType: IntegrationType, name: String): Webhook
  userFastFactVote(fastFactKey: String!, isLiked: Boolean): Boolean
  validateRSSFeed(url: String!): Boolean
  verifyUrl(url: String!): Boolean
}


"""User who can access to Tarvent"""
type User {
  """
  Unique account id of the first active account the user is associated with
  """
  accountId: String
  """
  User's status within the account. Only populated when getting a user/users within a specific account.
  """
  accountStatus: AccountUserStatus
  """Collection of accounts the user is associated with"""
  accounts: [UserAccountInfo!]!
  """Date of when user became an affiliate"""
  affiliateStartUtc: DateTime
  """URL used for the Ambassador and Affiliate programs"""
  ambassadorUrl: String!
  """
  Optional business phone number used by support to contact user if needed
  """
  businessPhone: String
  """
  ID of user who created the user. Refer to the **user** query to get user information.
  """
  createdBy: String!
  """Date/time the user was created"""
  createdUtc: DateTime!
  """Email address used for notifications"""
  emailAddr: String!
  """First name"""
  firstName: String
  """Unique user ID"""
  id: String!
  """Indicates whether the user should receive account level communication."""
  isAccountContact: Boolean!
  """Indicates if user is enrolled in Affiliate program"""
  isAffiliate: Boolean!
  """
  Indicates whether the user is a billing user for the account and should receive billing communication.
  """
  isBillingContact: Boolean!
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits. This is only set when getting users within an account.
  """
  isPartner: Boolean!
  """Last name"""
  lastName: String
  """Indicates if multi-factor authentication is enabled"""
  mfaEnabled: Boolean!
  """
  ID of user who last modified the user. Refer to the **user** query to get user information.
  """
  modifiedBy: String!
  """Date/time the user was last modified"""
  modifiedUtc: DateTime!
  """Collection of notification preferences"""
  notificationPreferences: [UserNotificationPreference!]!
  """Collection of permission"""
  permissions: [String!]!
  """ID of root folder for active account"""
  rootFolderId: String
  securityRoles: [SecurityRole!]!
  """Collection of user settings"""
  settings: [UserSetting!]
  """System status of user"""
  status: UserStatus!
}


"""
Security role associated with an account used to specify user rights at a group level
"""
type SecurityRole {
  """Collection of audiences the security role has access to"""
  audiences: [SecurityRoleAudience]
  """Id of user who created the security role"""
  createdBy: String
  """Date/time the security role was created"""
  createdUtc: DateTime!
  """Description/purpose of security role"""
  description: String
  """Unique security group ID"""
  id: String!
  """Indicates whether security role is active or not"""
  isActive: Boolean!
  """
  Indicates whether security role is the administrators group. Only one role can be the administrators role.
  """
  isAdmin: Boolean!
  """Id of user who last modified the security role"""
  modifiedBy: String
  """Date/time the security role was last modified"""
  modifiedUtc: DateTime!
  """Name of security group"""
  name: String
  """Collections of permissions granted to the security group"""
  permissions: [Permission!]!
  """Number of users associated with the security group"""
  userCount: Int!
  """Collections of users associated with the security group"""
  users: [User!]!
}


"""Unique billing account"""
type Account {
  """Address country associated with the account."""
  addressCountry: String!
  """Address locality associated with the account."""
  addressLocality: String!
  """Address region associated with the account."""
  addressRegion: String!
  """Unique alias for Tarvent application"""
  applicationAlias: String
  """
  ID of user who created the account. Refer to the **user** query to get user information.
  """
  createdBy: String!
  """Date/time the account was created"""
  createdUtc: DateTime!
  """
  Collections of dedicated IP addresses used for sending transactional and marketing emails
  """
  dedicatedIps: [AccountIp!]!
  """Collections of domains"""
  domains: [Domain!]!
  """Collections of security groups"""
  groups: [SecurityRole!]!
  """
  Maximum amount of hard bounces a contact can have before being marked as undeliverable.
  """
  hardBounceLimit: Int!
  """Unique account id"""
  id: String!
  """Industry that the account's business operates within."""
  industry: Int
  """Collections of invites requesting people to register as users"""
  invites: [Invite!]!
  isNewAccount: Boolean!
  isScheduledToDelete: Boolean!
  """
  ID of user who last modified the account. Refer to the **user** query to get user information.
  """
  modifiedBy: String!
  """Date/time the account was last modified"""
  modifiedUtc: DateTime!
  """Unique name to reference the account."""
  name: String!
  """
  User who owns the account. Refer to the **UpdateAccount** mutation to change the owner.
  """
  owner: User
  """Unique alias for pages urls (pages, surveys, and forms)"""
  pagesAlias: String
  """Account payment status"""
  paymentStatus: PaymentStatus
  """Phone number associated with the account."""
  phone: String!
  """Postal code associated with the account."""
  postalCode: String
  """Collections of settings"""
  settings: [AccountSetting!]!
  """
  Maximum amount of soft bounces a contact can have before being marked as undeliverable.
  """
  softBounceLimit: Int!
  """Account status"""
  status: AccountStatus!
  """Street address associated with the account."""
  streetAddress: String!
  """Street address 2 associated with the account."""
  streetAddress2: String
  """Unique alias for tracking urls"""
  trackingAlias: String
  """Count of all users within the account."""
  userCount: Int!
  """Collection of users associated with this account"""
  users: [User!]!
  """URL of the business website."""
  website: String
}


"""Represents the association of a permission to a security role"""
type SecurityRolePermission {
  """ID of Account"""
  accountId: Long!
  """Description of permission"""
  description: String!
  """Security role"""
  group: SecurityRole
  """ID of security role"""
  groupId: Long!
  """ID of permission to associate"""
  permissionId: Long!
  """Permission key to associate"""
  permissionKey: String
}


"""A request for someone to join the account"""
type Invite {
  account: Account
  """Date/time the invite was created"""
  createdUtc: DateTime!
  emailAddr: String!
  """First name of invitee"""
  firstName: String!
  """Unique invite ID"""
  id: String!
  """
  Indicates whether the user should receive account level communication. Defaults to false.
  """
  isAccountContact: Boolean!
  """
  Indicates whether the user is a billing contact for the account. Defaults to false.
  """
  isBillingContact: Boolean!
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits.
  """
  isPartner: Boolean!
  """Language of invitee"""
  language: String
  """Last name of invitee"""
  lastName: String!
  securityRoles: [SecurityRole!]
  """Status of invite"""
  status: InviteStatus!
  user: User
}


"""Discount being applied to a plan"""
type AccountPlanDiscount {
  """Id of user who created the plan discount"""
  createdBy: String
  """Date/time the plan discount was created"""
  createdUtc: DateTime!
  """Description of discount"""
  description: String
  """Dollar amount being discounted from plan"""
  discountAmt: Float!
  """Percentage being discounted from plan"""
  discountPct: Float!
  """
  Date/time discount will stop being applied. This only affects recurring discounts.
  """
  endUtc: DateTime
  """Unique discount ID"""
  id: String!
  """Indicates whether discount is applied each billing cycle"""
  isRecurring: Boolean!
  """Id of user who last modified the plan discount"""
  modifiedBy: String
  """Date/time the plan discount was last modified"""
  modifiedUtc: DateTime!
  """Name of discount"""
  name: String!
  """
  Date/time discount will next be applied. The initial value will be the same as the StartUtc
  """
  nextUtc: DateTime!
  """Date/time discount will start being applied"""
  startUtc: DateTime!
}


type Audience {
  addressCountry: String
  addressLocality: String
  addressRegion: String
  companyName: String
  createdBy: String!
  createdUtc: DateTime!
  dateFormat: String
  dateTimeFormat: String
  defaultFromEmail: String
  defaultFromText: String
  doubleOptInConfirmAction: SubmitActionType!
  doubleOptInConfirmExternalUrl: String
  doubleOptInConfirmPageJson: String
  doubleOptInContentHtml: String
  doubleOptInFromEmail: String
  doubleOptInFromName: String
  doubleOptInSubject: String
  gdprDescription: String
  gdprLegalTerms: String
  gdprTitle: String
  hasWebhook: Boolean!
  id: String!
  keyFields: [String!]!
  lastModifiedUtc: DateTime!
  modifiedBy: String!
  name: String!
  numberFormat: String
  phone: String
  postalCode: String
  requireDoubleOptIn: Boolean!
  streetAddress: String
  streetAddress2: String
  tags: [String!]
  totalActiveContacts: Int!
  totalComplaintContacts: Int!
  totalContacts: Int!
  totalSuppressedContacts: Int!
  totalUnconfirmedContacts: Int!
  totalUndeliverableContacts: Int!
  totalUnsubscribedContacts: Int!
  website: String
}


type AIRequest {
  answers: [String]
  createdBy: String
  createdUtc: DateTime!
  id: String!
  questionStyle: AIQuestionStyle!
  questionType: AIQuestionType!
  questions: [String!]!
  tokensAnswer: Int!
  tokensPrompt: Int!
  tokensRemaining: Int!
}


type DataField {
  category: String
  conditions: [Condition]
  createdBy: String
  createdUtc: DateTime!
  dataType: DataType!
  defaultValue: String
  description: String
  id: ID!
  isGdprField: Boolean!
  isPrimaryKey: Boolean!
  isPublic: Boolean!
  isSystem: Boolean
  labelText: String
  labelTranslations: Labels
  maxNbr: Decimal
  maxUtc: DateTime
  mergeTag: String
  minNbr: Decimal
  minUtc: DateTime
  modifiedBy: String
  modifiedUtc: DateTime!
  required: Boolean!
}


type Export {
  audience: Audience
  behaviors: [ContactBehavior!]
  contactStatus: ContactStatus
  createdBy: String
  createdUtc: DateTime!
  delimiter: ValueDelimiter!
  downloadUrl: String
  fields: [String]
  groups: [Group!]!
  id: String!
  name: String
  notificationEmail: String!
  status: ExportStatus!
}


type Contact {
  accountId: Long!
  addressCountry: String
  addressLocality: String
  addressRegion: String
  audienceId: Long!
  confirmedIp: String!
  confirmedUtc: DateTime
  createdBy: String!
  createdUtc: DateTime!
  email: String!
  firstName: String
  groups: [Group]
  hardBounceCount: Int!
  id: ID!
  language: String
  """
  Represents the count of up to the five most recently bounced campaigns for this contact. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Bounced: Int!
  """
  Represents the count of up to the five most recent campaigns for this contact with link click events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Clicked: Int!
  """
  Represents the count of up to the five most recent campaigns for this contact. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Count: Int!
  """
  Represents the count of up to the five most recently delivered campaigns for this contact. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Delivered: Int!
  """
  Represents the count of up to the five most recent campaigns for this contact with Forward-to-friend events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Forward: Int!
  """
  Represents the count of up to the five most recent campaigns for this contact with open events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Opened: Int!
  """
  Represents the count of up to the five most recent campaigns for this contact with reply events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Replied: Int!
  """
  Represents the count of up to the five most recent campaigns for this contact with social share events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Shared: Int!
  """Date/time of last campaign bounce"""
  lastBounced: DateTime
  """Date/time of last campaign link click"""
  lastClicked: DateTime
  """Date/time of last campaign delivery"""
  lastDelivered: DateTime
  """Date/time of last campaign forwarded to a friend"""
  lastForward: DateTime
  lastName: String
  """Date/time of last campaign opened"""
  lastOpened: DateTime
  """Date/time of last campaign reply"""
  lastReplied: DateTime
  """Date/time of last campaign shared on social media"""
  lastShared: DateTime
  latitude: Decimal
  longitude: Decimal
  modifiedBy: String!
  modifiedUtc: DateTime!
  optInIp: String!
  optInSource: OptInSource!
  optInUtc: DateTime
  optOutIp: String!
  optOutReason: String
  optOutSource: OptOutSource!
  optOutUtc: DateTime
  postalCode: String
  profileFields: [ProfileField!]!
  rating: Float
  sendFormat: SendFormat!
  softBounceCount: Int!
  status: ContactStatus!
  streetAddress: String
  streetAddress2: String
  tagList: [String!]!
  tags: [String]
  timeZone: String
}


type Column {
  custom: Boolean!
  dataField: DataField
  fieldName: String
  index: Int!
  skip: Boolean!
}


type Import {
  badRecords: Int!
  columns: [Column]
  confirmEmail: String
  createdBy: String
  createdUtc: DateTime!
  deleteArea: ImportDeleteArea!
  delimiter: ValueDelimiter!
  duplicateRecords: Int!
  errorCode: String
  errorFileUrl: String
  fileRecords: Int!
  groups: [Group!]!
  id: String!
  importEmail: String
  jobEndedUtc: DateTime
  jobStartedUtc: DateTime
  language: String
  markUndeliverable: Boolean!
  recordsAdded: Int!
  recordsUpdated: Int!
  skipFirstRow: Boolean!
  status: ImportStatus!
  unsubscribe: Boolean!
  update: Boolean!
}


type Group {
  createdBy: String
  createdUtc: DateTime!
  criteria: ConditionGroup
  description: String
  id: ID!
  isDynamic: Boolean!
  isPublic: Boolean!
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  totalActiveContacts: Int!
  totalComplaintContacts: Int!
  totalContacts: Int!
  totalSuppressedContacts: Int!
  totalUnconfirmedContacts: Int!
  totalUndeliverableContacts: Int!
  totalUnsubscribedContacts: Int!
}


type ProfileField {
  createdBy: String!
  createdUtc: DateTime!
  dataField: DataField!
  id: ID!
  modifiedBy: String!
  modifiedUtc: DateTime!
  value: String!
  valueType: RawDataType!
}


type ContactEvent {
  customEventKey: String
  domainId: Long
  entityId: Long
  eventType: EventType!
  eventUtc: DateTime!
  id: String!
}


type Condition {
  dataField: DataField
  fieldName: String
  ignoreYear: Boolean!
  operator: Operator!
  value: String
}


type Template {
  contentBodies: [TemplateContent!]!
  createdUtc: DateTime!
  description: String
  id: String!
  modifiedUtc: DateTime!
  name: String!
  tags: [String!]
  thumbnailUrl: String!
  type: TemplateType!
  usage: TemplateUsage!
  versionInfo: TemplateVersions!
  versions: [TemplateHistory!]!
}


type Campaign {
  analyticParams: [NameValue!]!
  audience: AudienceInfo
  audienceFilters: [CampaignAudienceFilter!]!
  combinations: [CampaignCombination!]!
  """
  The estimated number of contacts the campaign will be sent to, determined by the campaign's contact criteria. This number is not updated in real time and may differ from the actual number of contacts reached.
  """
  contactCount: Long!
  contentCount: Int!
  createdBy: String!
  createdUtc: DateTime!
  customHeaders: [NameValue!]
  description: String
  enableAnalytics: Boolean!
  enableAutoRetry: Boolean!
  fromCount: Int!
  froms: [CampaignFrom!]!
  globalPreheaderInd: Boolean!
  id: ID!
  includeEntireAudience: Boolean!
  """
  Can only be set to 'True' for campaigns that are not in the sending process can be marked as archived.
  """
  isArchived: Boolean!
  isMultivariate: Boolean!
  isOperational: Boolean!
  journeyId: String
  language: String
  modifiedBy: String!
  modifiedUtc: DateTime!
  mvGoal: MvGoal!
  mvHypothesis: String
  mvTestPct: Float!
  mvWinCombination: String
  mvWinManualOverride: Boolean!
  """
  This value is used to determine what time of day the winning campaign should be sent.
  """
  mvWinSendUtc: DateTime
  mvWinSendWait: Int!
  mvWinSendWaitType: MvTimeMeasurement
  mvWinType: MvWinType
  mvWinWait: Int!
  mvWinWaitType: MvTimeMeasurement
  name: String!
  """
  Id of the parent campaign ID for RSS campaigns only. If populated, this represents an RSS campaign job.
  """
  parentId: Long
  replyEmail: String
  """
  Indicates what type of check to run against the RSS feed to help determine if a job should be sent.
  """
  rssCheckType: RssCheckType
  """CRON Expression used to determine when to send RSS campaign jobs"""
  rssSendFrequency: String
  """
  Indicates if a job should be sent, even if no RSS items have been added or updated since the last check.
  """
  rssSendIfNoNewOrUpdatedItems: Boolean
  """Url used to get items from an RSS feed for RSS Campaigns"""
  rssUrl: String
  scheduledBy: User
  """Date/time (UTC) the campaign was scheduled."""
  scheduledToSendUtc: DateTime
  sendScheduleType: SendScheduleType!
  sendStatus: CampaignSendStatus!
  sendTimeCount: Int!
  """The date/times the campaign was scheduled to send."""
  sendsUtc: [DateTime!]
  sentUtc: DateTime
  stopReason: String
  subjectCount: Int!
  subjects: [CampaignSubject!]!
  tags: [String!]!
  thumbnailUrl: String!
  timeJumper: Boolean!
  totalCombinations: Int!
  totalContacts: Int!
  trackBrowser: Boolean!
  """Used for tracked domains. Defaults to true."""
  trackDomains: Boolean!
  trackHardware: Boolean!
  trackLinkClicks: Boolean!
  trackLocation: Boolean!
  trackOpens: Boolean!
  trackReplies: Boolean!
  type: CampaignType!
  variationContents: [CampaignVariationContent!]!
}


type AudienceInfo {
  addressCountry: String
  addressLocality: String
  addressRegion: String
  companyName: String
  createdBy: String!
  createdUtc: DateTime!
  customKeyDataField: DataField
  dateFormat: String
  dateTimeFormat: String
  defaultFromEmail: String
  defaultFromText: String
  doubleOptInFromEmail: String
  doubleOptInFromName: String
  doubleOptInSubject: String
  gdprDescription: String
  gdprLegalTerms: String
  gdprTitle: String
  hasWebhook: Boolean!
  id: String!
  lastModifiedUtc: DateTime!
  modifiedBy: String!
  name: String!
  numberFormat: String
  phone: String
  postalCode: String
  requireDoubleOptIn: Boolean!
  streetAddress: String
  streetAddress2: String
  tags: [String!]
  totalActiveContacts: Int!
  totalComplaintContacts: Int!
  totalContacts: Int!
  totalSuppressedContacts: Int!
  totalUnconfirmedContacts: Int!
  totalUndeliverableContacts: Int!
  totalUnsubscribedContacts: Int!
  website: String
}


type Question {
  allowOther: Boolean!
  """
  A collection of answers used for various question types, including dropdown, radio button, checkbox, and matrix.
  """
  answers: [QuestionAnswer]
  backgroundPattern: String
  boldCategoryText: Boolean!
  categories: [Question!]
  categoryBackground: String
  content: String!
  contentStyles: FormQuestionStyles
  dataField: DataField
  defaultValue: String
  displayOrder: Int!
  id: String!
  matrixHeaderBackground: String
  maxNbr: Decimal
  maxRatingTitle: String
  maxRatingValue: Int!
  maxUtc: DateTime
  minNbr: Decimal
  minRatingTitle: String
  minRatingValue: Int!
  minUtc: DateTime
  orientation: QuestionOrientation!
  otherAnswerPct: Float
  otherAnswers: Int
  placeholder: String
  """
  List of answers that will show at the top of the input. Currently this is only used for 'Country' question types.
  """
  preferredAnswers: [String]
  prefix: String
  prefixContent: String
  prefixType: String
  ratingColor: String
  ratingCount: Int!
  ratingIconType: RatingIconType
  ratingType: RatingType
  required: Boolean!
  sourceName: String
  sourceType: QuestionSourceType
  suffix: String
  suffixContent: String
  suffixType: String
  text: String!
  totalAnswered: Int
  totalSkipped: Int
  type: QuestionType!
}


type QuestionInfo {
  allowOther: Boolean!
  backgroundPattern: String!
  boldCategoryText: Boolean!
  categoryBackground: String!
  content: String!
  contentStyles: FormQuestionStyles
  createdBy: String!
  createdUtc: DateTime!
  defaultValue: String!
  display: Boolean!
  displayOrder: Int!
  id: String!
  isActive: Boolean!
  matrixHeaderBackground: String!
  maxRatingTitle: String!
  maxRatingValue: Int!
  minRatingTitle: String!
  minRatingValue: Int!
  modifiedBy: String!
  modifiedUtc: DateTime!
  orientation: QuestionOrientation!
  overwriteSource: Boolean!
  placeholder: String!
  preferredAnswers: [String!]!
  prefixContent: String
  prefixType: String
  ratingColor: String!
  ratingCount: Int!
  ratingType: RatingType
  required: Boolean!
  sourceName: String!
  sourceType: QuestionSourceType
  suffixContent: String!
  suffixType: String!
  text: String!
  totalAnswered: Int!
  totalSkipped: Int!
  type: QuestionType!
}


type AudienceForm {
  audience: Audience
  configurationJson: String!
  createdBy: String!
  createdUtc: DateTime!
  dateFormat: String
  dateTimeFormat: String
  description: String
  faviconUrl: String
  ftfFormEmailSettings: FtfFormEmail!
  id: String!
  isGdprEnabled: Boolean!
  metaDescription: String
  metaKeywords: String
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String!
  numberFormat: String
  pathName: String
  questions: [Question!]!
  scriptingBlock: String
  shareImageUrl: String
  status: ValidStatus!
  submitAction: SubmitAction
  tags: [String!]
  thumbnailUrl: String
  title: String
  translations: Translations
  type: AudienceFormType
  url: String
}


type FormInfo {
  audienceId: String!
  createdBy: String!
  createdUtc: DateTime!
  dateFormat: String!
  dateTimeFormat: String!
  description: String
  faviconUrl: String!
  id: String!
  metaDescription: String!
  metaKeywords: String!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String!
  numberFormat: String!
  pathName: String
  shareImageUrl: String!
  status: ValidStatus!
  tags: [String!]
  thumbnailUrl: String
  title: String!
  totalCompleteSubmits: Int!
  totalPartialSubmits: Int!
  totalVisits: Int!
  translations: Translations!
  type: AudienceFormType!
  uniqueAbandons: Int!
  uniqueVisits: Int!
  url: String
}


type SubmitAction {
  addGroups: [Group!]!
  addTags: [String!]
  confirmDialog: DialogSettings
  confirmExternalUrl: String
  duplicateSubmissionAction: DupSubAction
  message: String!
  sendConfirmEmail: EmailSettings
  sendConfirmEmailInd: Boolean!
  sendNotificationEmail: NotificationEmailSettings
  sendNotificationEmailInd: Boolean!
  trackDomains: Boolean!
  type: SubmitActionType!
}


type Survey {
  allowMultipleSubmissions: Boolean!
  audience: Audience
  """Collection of campaigns where survey events have been generated from."""
  campaigns: [CampaignInfo!]!
  configurationJson: String!
  createdBy: String!
  createdUtc: DateTime!
  dateFormat: String
  dateTimeFormat: String
  description: String
  endUtc: DateTime
  faviconUrl: String
  id: String!
  isGdprEnabled: Boolean!
  metaDescription: String
  metaKeywords: String
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String!
  numberFormat: String
  pathName: String
  questions: [Question!]
  scriptingBlock: String
  shareImageUrl: String
  startUtc: DateTime
  status: ValidStatus!
  submitAction: SubmitAction
  tags: [String!]
  thumbnailUrl: String
  title: String
  translations: Translations
  url: String
}


type SurveyInfo {
  audienceId: String!
  createdBy: String!
  createdUtc: DateTime!
  dateFormat: String!
  dateTimeFormat: String!
  description: String
  endUtc: DateTime
  faviconUrl: String!
  id: String!
  metaDescription: String!
  metaKeywords: String!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String!
  numberFormat: String!
  pathName: String
  shareImageUrl: String!
  startUtc: DateTime
  status: ValidStatus!
  tags: [String!]
  thumbnailUrl: String
  title: String!
  totalCompleteSubmits: Int!
  totalPartialSubmits: Int!
  totalVisits: Int!
  translations: Translations!
  uniqueAbandons: Int!
  uniqueVisits: Int!
  url: String
}


type QuestionAnswer {
  answeredPct: Float!
  displayOrder: Int!
  text: String
  totalAnswered: Int!
  value: String
}


type LandingPage {
  audience: Audience
  """
  Collection of campaigns where landing page events have been generated from.
  """
  campaigns: [CampaignInfo!]!
  configurationJson: String!
  createdBy: String!
  createdUtc: DateTime!
  dateFormat: String
  dateTimeFormat: String
  description: String
  faviconUrl: String
  id: String!
  isGdprEnabled: Boolean!
  metaDescription: String
  metaKeywords: String
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String!
  numberFormat: String
  pathName: String
  scriptingBlock: String
  shareImageUrl: String
  status: ValidStatus!
  tags: [String!]
  thumbnailUrl: String
  title: String
  translations: Translations
  url: String
}


type LandingPageInfo {
  audienceId: String!
  createdBy: String!
  createdUtc: DateTime!
  dateFormat: String!
  dateTimeFormat: String!
  description: String
  faviconUrl: String!
  id: String!
  metaDescription: String!
  metaKeywords: String!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String!
  numberFormat: String!
  pathName: String
  shareImageUrl: String!
  status: ValidStatus!
  tags: [String!]
  thumbnailUrl: String
  title: String!
  totalCompleteSubmits: Int!
  totalPartialSubmits: Int!
  totalVisits: Int!
  translations: Translations!
  uniqueAbandons: Int!
  uniqueVisits: Int!
  url: String
}


type FileInfo {
  createdUtc: DateTime!
  editorType: EditorType
  folderId: String!
  id: String!
  modifiedUtc: DateTime!
  name: String!
  publicUrl: String
  size: Int
  tags: [String!]
  thumbnailUrl: String!
  type: FileType!
}


type Journey {
  audience: AudienceInfo
  campaigns: [Campaign]
  conversions: [JourneyConversion]
  createdBy: String
  createdUtc: DateTime!
  defaultFromEmail: String
  defaultFromName: String
  description: String
  goals: [JourneyGoal]
  goalsComplete: Int!
  id: String!
  lastResetUtc: DateTime
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  nodes: [JourneyN]
  reEntryType: JourneyReEntryType!
  sMSCampaigns: [SMSCampaign]
  startedUtc: DateTime
  status: JourneyStatus!
  subscriberEvents: [JourneySubscriberEvent]
  subscribers: [JourneySubscriber]
  tags: [String!]!
  totalActive: Int!
  totalCompletes: Int!
  totalConversions: Int!
  totalEmailNodes: Int!
  totalEmailsSent: Int!
  totalEntries: Int!
  totalExits: Int!
  totalNotificationEmailNodes: Int!
  totalRevenue: Float!
  totalSMSNodes: Int!
  totalSiteNotificationNodes: Int!
}


type JourneyInfo {
  audienceId: String
  createdBy: String
  createdUtc: DateTime
  description: String!
  id: String!
  modifiedBy: String
  modifiedUtc: DateTime
  name: String!
  reEntryType: JourneyReEntryType!
  status: JourneyStatus
  tags: [String!]
  thumbnailUrl: String
  totalEmailNodes: Int!
  totalNotificationEmailNodes: Int!
  totalSMSNodes: Int!
  totalSiteNotificationNodes: Int!
}


type TriggerManualInclusion implements JourneyNode {
  checkFrequency: String
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  scope: JourneyNodeScope
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerAudience implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: TriggerAudienceEvent
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerForm implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: TriggerFormEvent
  filter: ConditionGroup
  form: AudienceForm
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerSurvey implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: TriggerFormEvent
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  survey: AudienceForm
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerFormEvent {
  deviceTypes: [DeviceType!]
  formQuestion: Question
  operator: Operator
  type: TriggerFormEventType
  value: String
}


type TriggerPage implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: TriggerPageEvent
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  page: AudienceForm
  previousNodeIds: [String!]
  referredFromFilter: String
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerWebPage implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  domain: Domain
  errors: [Error!]!
  event: TriggerWebpageEvent
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  path: String
  previousNodeIds: [String!]
  referredFromFilter: String
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerCampaign implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: TriggerCampaignEvent
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  scope: String
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerDate implements JourneyNode {
  checkFrequency: String
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: TriggerDateEvent
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  scope: JourneyNodeScope
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerRss implements JourneyNode {
  checkFrequency: String
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: TriggerRssEvent
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  pageUrl: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerGoal implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  goal: JourneyGoal
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerConversion implements JourneyNode {
  conversion: JourneyConversion
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerEcommerce implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: TriggerEcommerceEvent
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerCustomEvent implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  customEvent: CustomApiEvent
  description: String
  errors: [Error!]!
  event: TriggerApiEvent
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type TriggerTransaction implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: TriggerTransactionEvent
  filter: ConditionGroup
  groupName: String
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type FlowWaitFieldChange implements JourneyNode {
  continueJourney: Boolean
  createdBy: String!
  createdUtc: DateTime!
  dataField: DataField
  description: String
  errors: [Error!]!
  fieldValue: String
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  matchPattern: String
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
  waitLimit: String
}


type FlowWaitUntil implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  date: String
  description: String
  errors: [Error!]!
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type FlowWaitUntilCondition implements JourneyNode {
  continueJourney: Boolean
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
  waitLimit: String
}


type FlowWaitDateField implements JourneyNode {
  continueJourney: Boolean
  createdBy: String!
  createdUtc: DateTime!
  dataField: DataField
  description: String
  errors: [Error!]!
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
  waitLimit: String
}


type FlowDecisionSplit implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  paths: [FlowPath!]
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type FlowRandomSplit implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  paths: [FlowPath!]
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type FlowEngagementSplit implements JourneyNode {
  campaign: Campaign
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  event: FlowEngagementSplitEvent
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  paths: [FlowPath!]
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type FlowJoin implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type FlowGoTo implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionUpdateJourneyContact implements JourneyNode {
  actionJourney: JourneyInfo
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  operator: ActionOperator
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionSendEmail implements JourneyNode {
  campaign: Campaign
  createdBy: String!
  createdUtc: DateTime!
  deliveryWindow: DeliveryWindow
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  rssUrl: String
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionSiteNotification implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  domain: Domain
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  notification: SiteNotification
  path: String
  previousNodeIds: [String!]
  settings: SiteNotificationSettings
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionSendSMS implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  deliveryWindow: DeliveryWindow
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  smsCampaign: SMSCampaign
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionSendNotifiactionEmail implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  notification: JourneyNodeNotification
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionUpdateContactStatus implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  newStatus: ContactStatus
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionConvertContact implements JourneyNode {
  conversion: JourneyConversion
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionUpdateContactProfile implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  dataField: DataField
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  newValue: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionUpdateContactTag implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  operator: ActionOperator
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  tag: String
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionUpdateContactGroup implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  groupId: String
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  operator: ActionOperator
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionAddContactNote implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  noteText: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionUpdateFacebookAudience implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  fbAdAccountId: String
  fbAudienceId: String
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  operator: ActionOperator
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionEvaluateGoal implements JourneyNode {
  continueJourney: Boolean
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  goal: JourneyGoal
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type ActionWebhook implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
  webhookUrl: String
}


type CampaignInfo {
  audienceId: String!
  campaignContentInfo: [CampaignContentInfo!]
  createdBy: String
  createdUtc: DateTime
  description: String
  id: String!
  isArchived: Boolean!
  isMultivariate: Boolean
  journeyId: String
  journeyStatus: JourneyStatus
  language: String
  modifiedBy: String
  modifiedUtc: DateTime
  mvWinType: MvWinType
  mvWinWait: Int!
  mvWinWaitType: MvTimeMeasurement
  name: String
  parentId: String
  scheduledToSendUtc: DateTime
  sendScheduleType: SendScheduleType!
  sendStatus: CampaignSendStatus!
  sendsUtc: [DateTime!]
  sentUtc: DateTime
  stopReason: String
  tags: [String!]
  thumbnailUrl: String
  timeJumper: Boolean!
  type: CampaignType!
}


type JourneyNodeInfo {
  """Used for tags, groups, journey contact, and Facebook audience."""
  actionOperator: ActionOperator
  """Used for SendEmail action."""
  campaignThumbnailUrl: String
  createdBy: String!
  createdUtc: DateTime!
  enableMv: Boolean
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  """Used for SendEmail and SendSMS actions."""
  messageId: String
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  paths: [FlowPath!]
  previousNodeIds: [String!]
  statistics: NodeStatistics
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type CampaignLinkStats {
  entityName: String
  entityType: EntityType
  feedItem: Boolean!
  formType: FormType
  linkId: String!
  totalLinkClicks: Int!
  totalLinkClicksPct: Float!
  totalUniqueLinkClicks: Int!
  totalUniqueLinkClicksPct: Float!
  track: Boolean!
  url: String
}


type TemplateInformation {
  category: Category
  createdBy: String
  createdUtc: DateTime
  description: String
  id: String!
  language: String
  modifiedBy: String
  modifiedUtc: DateTime
  name: String!
  tags: [String!]!
  thumbnailUrl: String!
  type: TemplateType!
}


type UserAccountNotification {
  completedPercentage: Float
  correlationId: UUID
  createdBy: String!
  createdUtc: DateTime!
  entityId: String
  entityType: EntityType
  id: String!
  isProgress: Boolean!
  isRead: Boolean!
  """Message describing notification"""
  message: String
  modifiedBy: String!
  modifiedUtc: DateTime!
  notificationType: GlobalNotificationType!
  """CSV value. Contain all the parent ids needed to get a resource."""
  parentIds: String
  scope: AccountUserNotifScope!
  status: AccountUserNotifStatus!
  variables: [KeyValuePairOfStringAndString!]!
  weight: Int!
}


type Webhook {
  callBackUrl: String
  createdBy: String
  createdUtc: DateTime!
  """
  Used when passing contact data in webhook payload. Defaults to 'BASIC'. When set to 'BASIC' only id, key, email will be passed. When set to 'EXTENDED', all the contact's data will be passed.
  """
  dataSetting: WebhookDataSetting!
  description: String
  enabled: Boolean!
  events: [WebhookEvent!]
  filter: ConditionGroup
  id: String!
  integrationType: IntegrationType
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
}


type Domain {
  """Id of user who created the domain"""
  createdBy: String!
  """Date/time the domain was created"""
  createdUtc: DateTime!
  """Status of DKIM record 1 check"""
  dkim1Status: DnsRecordStatus!
  """Status of DKIM record 2 check"""
  dkim2Status: DnsRecordStatus!
  """Policy defined in the existing DMARC DNS record"""
  dmarcPolicy: String
  """Status of DMARC record."""
  dmarcStatus: DnsRecordStatus!
  """Domain name"""
  domainName: String!
  """
  Indicates whether email will use domain for the MAILFROM (different from FROM)
  """
  enableMailFrom: Boolean!
  """URL paths to exclude from site tracking"""
  excludePaths: [String!]
  """Unique domain id"""
  id: ID!
  """URL paths to include for site tracking"""
  includePaths: [String!]
  """Id of user who last modified the domain"""
  modifiedBy: String!
  """Date/time the domain was last modified"""
  modifiedUtc: DateTime!
  """Status of MX record check (CNAME or MX record)"""
  mxStatus: DnsRecordStatus!
  """Indicates the advanced status of this domain for custom MAILFROM."""
  sendingDomainAdvancedValid: Boolean!
  """Indicates the status of this domain for sending"""
  sendingDomainValid: Boolean!
  """Date of last send verification checks"""
  sendingDomainVerifiedUtc: DateTime
  """Results of verification checks"""
  sendingDomainVerifyResult: DomainResult
  """Indicates of mail can be sent for this domain (FROM address only)"""
  sendingEnabled: Boolean!
  """Indicates site tracking is enabled"""
  siteTrackingEnabled: Boolean!
  """Indicates whether site tracking script was found on domain's website"""
  siteTrackingValid: Boolean!
  """Date of last site tracking verification checks"""
  siteTrackingVerifiedUtc: DateTime
  """Status of SPF record"""
  spfStatus: DnsRecordStatus!
}


interface JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  type: JourneyNodeType!
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


"""The \`DateTime\` scalar represents an ISO-8601 compliant date time type."""
scalar DateTime


type UserAccountInfo {
  id: String!
  name: String!
  paymentStatus: PaymentStatus
  status: AccountStatusDto!
  userStatus: AccountUserStatus!
}


"""User settings used to personalize Tarvent for a specific user"""
type UserSetting {
  """Description of setting"""
  description: String!
  """Unique setting ID"""
  id: String!
  """Name of setting"""
  name: String!
  """Setting value"""
  value: String!
}


type UserNotificationPreference {
  emailNotifications: Boolean!
  """Id of global notification."""
  id: String!
  inAppNotifications: Boolean!
  """Name of global notification."""
  name: String!
}


"""Represents an permission that can be granted to a security group"""
type Permission {
  category: String
  """Description of the actions that can be performed with this permission"""
  description: String
  """Unique permission ID"""
  id: String!
  """Unique key of permission"""
  key: String
  """Unique name of permission"""
  name: String
  """Collection of users"""
  users: [UserPermission]
}


"""
Represents the association of a security role and audience the role has access to
"""
type SecurityRoleAudience {
  """ID of audience"""
  audienceId: String!
  """Id of user who created the association"""
  createdBy: String
  """Date/time the association was created"""
  createdUtc: DateTime!
  """Id of user who last modified the association"""
  modifiedBy: String
  """Date/time the association was last modified"""
  modifiedUtc: DateTime!
}


"""An account setting that configures various aspects of the system."""
type AccountSetting {
  """Description of setting"""
  description: String!
  """Unique setting id"""
  id: String!
  """Name of setting"""
  name: String!
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
  """Id of user who created the dedicated IP"""
  createdBy: String
  """Date/time the dedicated IP was created"""
  createdUtc: DateTime!
  """Unique dedicated IP ID"""
  id: String!
  """Id of user who last modified the dedicated IP"""
  modifiedBy: String
  """Date/time the dedicated IP was last modified"""
  modifiedUtc: DateTime!
  """Unique name of dedicated IP"""
  name: String
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


"""
Actions that can be performed after a submission. Use journeys to perform additional actions.
"""
enum SubmitActionType {
  """
  Display a message in place for the form without the page refreshing. For Double Opt-In confirmation, this displays the confirmation page.
  """
  DISPLAY_MESSAGE
  """
  Display a dialog in place for the form without the page refreshing. This is not used for Double Opt-In confirmation.
  """
  DISPLAY_DIALOG
  """
  Redirect to an external URL such as a website, social media site, and more.
  """
  REDIRECT_TO_URL
  """Redirect to a landing page within Tarvent"""
  REDIRECT_TO_PAGE
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
  addressCountry: LabelTranslations
  addressLocality: LabelTranslations
  addressRegion: LabelTranslations
  postalCode: LabelTranslations
  streetAddress: LabelTranslations
  streetAddress2: LabelTranslations
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
  conditionGroups: [ConditionGroup]
  conditions: [Condition]
  operator: ConditionGroupOperator!
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
  campaigns: [TemplateCampaign!]!
  draftCampaigns: Int!
  sentCampaigns: Int!
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
  content: String!
  mimeType: MimeType!
}


type TemplateHistory {
  lastModifiedUtc: DateTime!
  version: Float!
}


type CampaignVariationContent {
  contentBodies: [ContentBody]
  createdUtc: DateTime!
  id: String
  thumbnailUrl: String
  validContactInformation: Boolean!
  validContent: Boolean!
  validLinks: Boolean!
  validStoryDescription: Boolean!
  validStoryImage: Boolean!
  validStoryTitle: Boolean!
  validUnsubscribeLink: Boolean!
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
  email: String
  name: String
  nameIsUnique: Boolean!
  nameNotEmpty: Boolean!
}


type CampaignSubject {
  preheader: String
  subject: String
  subjectNotEmpty: Boolean!
  subjectValidEmojiCount: Boolean!
  subjectValidPunctuation: Boolean!
  subjectValidWordCount: Boolean!
}


enum RssCheckType {
  CREATED
  UPDATED
  CREATED_OR_UPDATED
}


type CampaignAudienceFilter {
  group: Group
  include: Boolean!
}


type CampaignCombination {
  accountId: Long!
  campaign: Campaign
  campaignId: Long!
  contentVariationId: Int!
  createdBy: String
  createdUtc: DateTime!
  engagementScore: Float!
  fromId: Int!
  id: Long!
  modifiedBy: String
  modifiedUtc: DateTime!
  senderReputation: Float!
  sentUtc: DateTime!
  statUtc: DateTime
  subjectId: Int!
  totalBounce: Int!
  totalClicks: Int!
  totalContacts: Int!
  totalDelivered: Int!
  totalOpens: Int!
  totalProfile: Int!
  totalReplies: Int!
  totalSTF: Int!
  totalSTFOptIn: Int!
  totalSent: Int!
  totalSocialShare: Int!
  uniqueClicks: Int!
  uniqueHardBounce: Int!
  uniqueOpens: Int!
  uniqueOptOut: Int!
  uniqueProfile: Int!
  uniqueReplies: Int!
  uniqueSTF: Int!
  uniqueSTFOptIn: Int!
  uniqueSocialShare: Int!
  uniqueSoftBounce: Int!
  uniqueSpam: Int!
  uniqueSuppressed: Int!
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
  Full address in a single value formatted as Street Address|Street Address 2|AddressLocality|AddressRegion|PostalCode|AddressCountry
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
  """Country"""
  COUNTRY
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
  align: String
  backgroundColor: String
  backgroundImage: String
  borderRadius: String
  fontColor: String
  fontFamily: String
  fontSize: String
  fontStyle: String
  fullMobileWidth: Boolean
  letterSpacing: String
  lineHeight: String
  padding: String
  textDecoration: String
  textTransform: String
  width: String
  wordSpacing: String
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
  addFriend: String
  close: String
  formError: String
  formatError: String
  ftfFriends: String
  ftfInformation: String
  ftfNote: String
  ftfTitle: String
  invalidDataError: String
  maxLengthError: String
  minLengthError: String
  name: String
  note: String
  otherText: String
  placeholder: String
  required: String
}


type FtfFormEmail {
  contentHtml: String
  fromEmail: String
  fromName: String
  subject: String
}


type DialogSettings {
  buttonActionType: DialogButtonActionType!
  buttonColor: String
  buttonText: String
  content: String!
  iconColor: String
  iconType: DialogIconType
  iconUrl: String
  redirectExternalUrl: String
}


type EmailSettings {
  contentHtml: String!
  fromEmail: String!
  fromText: String!
  subject: String!
}


type NotificationEmailSettings {
  contentHtml: String!
  dataAttachmentFormat: DataAttachmentFormat!
}


type DupSubAction {
  dialog: DialogSettings
  message: String!
  renderType: ErrorAction!
  type: DuplicateSubmissionActionType!
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


enum JourneyStatus {
  RUNNING
  NOT_RUNNING
}


enum JourneyReEntryType {
  NO_RE_ENTRY
  RE_ENTER_ANYTIME
  RE_ENTER_AFTER_EXIT
}


type JourneyN {
  accountId: Long!
  campaign: Campaign
  campaignId: Long
  configuration: JourneyNodeConfiguration
  createdBy: String
  createdUtc: DateTime!
  dbIsConfigured: Boolean!
  description: String
  domain: Domain
  evaluated: Int!
  eventPayload: EventPayload
  id: Long!
  isConfigured: Boolean!
  isDefault: Boolean
  isDeleted: Boolean!
  journey: Journey
  journeyId: Long!
  key: String
  modifiedBy: String
  modifiedUtc: DateTime!
  movedUtc: DateTime
  name: String
  nextNode: JourneyN
  nextNodeId: Long
  nextNodes: [JourneyN]
  originalNodeId: Long
  pending: Int!
  performed: Int!
  previousNextNodeId: Long
  previousNodeIds: [Long!]
  processedUtc: DateTime
  siteNotificationSubscribers: [SubscriberSiteNotification]
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


type JourneyGoal {
  conversion: JourneyConversion
  createdBy: String
  createdUtc: DateTime!
  description: String
  """Only used for GLOBAL goals"""
  filter: ConditionGroup
  id: String!
  journeyId: String!
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  type: JourneyGoalType!
}


type JourneyConversion {
  createdBy: String
  createdUtc: DateTime!
  description: String
  id: String!
  journeyId: String!
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  value: Float!
}


type JourneySubscriber {
  accountId: Long!
  currentModifiedUtc: DateTime!
  currentNextNodeId: Long
  currentPreviousNodeId: Long
  entryEntityId: Long
  entryEntityType: EntityType
  entryEventType: EventType
  entryNodeId: Long!
  entrySubEntityId: Long
  entryUtc: DateTime!
  exitNodeId: Long
  exitUtc: DateTime
  id: Long!
  instanceId: String
  journey: Journey
  journeyId: Long!
  status: JourneyContactStatus!
  subscriber: Contact
  subscriberId: Long!
}


type JourneySubscriberEvent {
  accountId: Long!
  createdUtc: DateTime!
  executed: Boolean!
  id: Long!
  instanceId: String
  isDeleted: Boolean!
  journey: Journey
  journeyId: Long!
  nextNodeId: Long
  nodeId: Long!
  previousNodeIds: [Long!]
  processedUtc: DateTime
  skipped: Boolean!
  subscriber: Contact
  subscriberId: Long!
}


type SMSCampaign {
  createdBy: String
  createdUtc: DateTime!
  description: String
  fromNumber: String
  id: String!
  message: String
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  subject: String
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
  pending: Int!
  performed: Int!
}


type Error {
  developerNotes: String
  errorCode: Int!
  field: String
  message: String
}


type TriggerAudienceEvent {
  """
  Comma delimited string of ids/tags is supported as well as a single id/tag for group and tag filtering.
  """
  fieldName: String
  type: TriggerAudienceEventType
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
  ctaPerformed: Boolean
  deviceTypes: [DeviceType!]
  type: TriggerPageEventType
  visitType: WebPageVisitType
}


type TriggerWebpageEvent {
  deviceTypes: [DeviceType!]
  siteVisitType: WebPageVisitType
  type: TriggerWebPageEventType
  visitType: WebPageVisitType
}


type TriggerCampaignEvent {
  deviceTypes: [DeviceType!]
  linkScope: String
  matchPattern: String
  sharedOn: SocialPlatform
  type: TriggerCampaignEventType
}


type TriggerDateEvent {
  fieldName: String
  ignoreYear: Boolean
  operator: Operator
  value: String
}


type TriggerRssEvent {
  rssCheckType: TriggerRssCheckType
}


type TriggerEcommerceEvent {
  categories: [String!]
  categoryOperator: TriggerEcommerceCategoryOperator
  orderOperator: TriggerEcommerceOrderOperator
  orderValue: Float
  productOperator: TriggerEcommerceProductOperator
  products: [String!]
  storeId: String
  type: TriggerEcommerceEventType
}


type CustomApiEvent {
  createdBy: String
  createdUtc: DateTime!
  description: String
  id: String!
  key: String
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
}


type TriggerApiEvent {
  eventKey: String
}


type TriggerTransactionEvent {
  deviceTypes: [DeviceType!]
  linkScope: String
  matchPattern: String
  type: TriggerTransactionEventType
}


type FlowPath {
  """Used for FlowEngagementSplit"""
  engaged: Boolean
  """Used for FlowDecisionSplit"""
  filter: ConditionGroup
  id: String!
  """Used for FlowDecisionSplit"""
  isDefault: Boolean!
  isDeleted: Boolean!
  name: String
  nextNodeId: String
  """Used for FlowRandomSplit"""
  percentage: Int
}


type FlowEngagementSplitEvent {
  deviceTypes: [DeviceType!]
  linkScope: String
  matchPattern: String
  sharedOn: SocialPlatform
  type: TriggerCampaignEventType
}


enum ActionOperator {
  ADD
  REMOVE
}


type DeliveryWindow {
  sendImmediate: Boolean!
  timeJumper: Boolean!
  timeUtc: DateTime
  weekDays: String
}


type SiteNotification {
  messageHtml: String
  title: String
}


type SiteNotificationSettings {
  animationType: AnimationType
  buttonColor: String
  buttonPosition: ButtonPosition
  buttonText: String!
  buttonType: ButtonType
  displayType: DisplayType
  icon: IconType
  iconColor: String
  iconUrl: String
  positionX: PositionX
  positionY: PositionY
  tags: [String!]
}


type JourneyNodeNotification {
  content: JourneyNodeNoticificationContent
  header: JourneyNodeNoticificationHeader
  recipients: [JourneyNodeNoticificationRecipient]
  settings: JourneyNodeNoticificationSettings
  variables: [JourneyNameValue!]
}


type CampaignContentInfo {
  createdUtc: DateTime!
  id: String!
  validContactInformation: Boolean!
  validContent: Boolean!
  validLinks: Boolean!
  validStoryDescription: Boolean!
  validStoryImage: Boolean!
  validStoryTitle: Boolean!
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
  INTEGRATION
  ACCOUNT_INTEGRATION
}


type Category {
  createdBy: String
  createdUtc: DateTime
  id: String!
  isSystem: Boolean!
  modifiedBy: String
  modifiedUtc: DateTime
  name: String!
  type: CategoryType!
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


enum DnsRecordStatus {
  MISSING
  INVALID
  VALID
}


type DomainResult {
  advancedRecords: [DnsRecordResult!]!
  dmarcResult: DmarcResult
  domain: String!
  enableMailFrom: Boolean!
  isAdvancedValid: Boolean!
  isValid: Boolean!
  mxResult: MxResult
  recordResults: [DnsRecordResult!]!
  spfResult: SpfResult
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
  """Date of when user became an affiliate"""
  affiliateStartUtc: SortEnumType
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
  """ID of root folder for active account"""
  rootFolderId: SortEnumType
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
  """A list of edges."""
  edges: [UserEdge!]
  """A flattened list of the nodes."""
  nodes: [User!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type AccountPlanConnection {
  """A list of edges."""
  edges: [AccountPlanEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountPlan]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type AccountInvoiceInfoConnection {
  """A list of edges."""
  edges: [AccountInvoiceInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountInvoiceInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type SecurityRoleConnection {
  """A list of edges."""
  edges: [SecurityRoleEdge!]
  """A flattened list of the nodes."""
  nodes: [SecurityRole!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TotalContactsByDayConnection {
  """A list of edges."""
  edges: [TotalContactsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [TotalContactsByDay!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TotalEmailsByDayConnection {
  """A list of edges."""
  edges: [TotalEmailsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [TotalEmailsByDay!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [InviteEdge!]
  """A flattened list of the nodes."""
  nodes: [Invite!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [ServicePlanEdge!]
  """A flattened list of the nodes."""
  nodes: [ServicePlan!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [TemplateInformationEdge!]
  """A flattened list of the nodes."""
  nodes: [TemplateInformation!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [TagEdge!]
  """A flattened list of the nodes."""
  nodes: [Tag!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  hasWebhook: BooleanOperationFilterInput
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
  hasWebhook: SortEnumType
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
  """A list of edges."""
  edges: [AudienceInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [AudienceInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type AudienceStatsByDayConnection {
  """A list of edges."""
  edges: [AudienceStatsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [AudienceStatsByDay!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


input DataFieldFilterInput {
  and: [DataFieldFilterInput!]
  or: [DataFieldFilterInput!]
  id: IdOperationFilterInput
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
  """A list of edges."""
  edges: [DataFieldEdge!]
  """A flattened list of the nodes."""
  nodes: [DataField!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [DatafieldCategoryEdge!]
  """A flattened list of the nodes."""
  nodes: [DatafieldCategory!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [ExportEdge!]
  """A flattened list of the nodes."""
  nodes: [Export!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [AudienceGroupInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [AudienceGroupInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  errorFileUrl: StringOperationFilterInput
  language: StringOperationFilterInput
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
  errorFileUrl: SortEnumType
  language: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
}


"""A connection to a list of items."""
type ImportConnection {
  """A list of edges."""
  edges: [ImportEdge!]
  """A flattened list of the nodes."""
  nodes: [Import!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [ContactConversationEdge!]
  """A flattened list of the nodes."""
  nodes: [ContactConversation!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [ContactNoteEdge!]
  """A flattened list of the nodes."""
  nodes: [ContactNote!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  confirmedUtc: SortEnumType
  optOutUtc: SortEnumType
  optOutSource: SortEnumType
  optOutReason: SortEnumType
  softBounceCount: SortEnumType
  hardBounceCount: SortEnumType
  """Date/time of last campaign delivery"""
  lastDelivered: SortEnumType
  """Date/time of last campaign bounce"""
  lastBounced: SortEnumType
  """Date/time of last campaign opened"""
  lastOpened: SortEnumType
  """Date/time of last campaign link click"""
  lastClicked: SortEnumType
  """Date/time of last campaign reply"""
  lastReplied: SortEnumType
  """Date/time of last campaign shared on social media"""
  lastShared: SortEnumType
  """Date/time of last campaign forwarded to a friend"""
  lastForward: SortEnumType
  """
  Represents the count of up to the five most recently delivered campaigns for this contact. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Delivered: SortEnumType
  """
  Represents the count of up to the five most recently bounced campaigns for this contact. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Bounced: SortEnumType
  """
  Represents the count of up to the five most recent campaigns for this contact with open events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Opened: SortEnumType
  """
  Represents the count of up to the five most recent campaigns for this contact with link click events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Clicked: SortEnumType
  """
  Represents the count of up to the five most recent campaigns for this contact with reply events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Replied: SortEnumType
  """
  Represents the count of up to the five most recent campaigns for this contact with social share events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Shared: SortEnumType
  """
  Represents the count of up to the five most recent campaigns for this contact with Forward-to-friend events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Forward: SortEnumType
  """
  Represents the count of up to the five most recent campaigns for this contact. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Count: SortEnumType
  audienceId: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
  accountId: SortEnumType
}


"""A connection to a list of items."""
type ContactJourneyGoalConnection {
  """A list of edges."""
  edges: [ContactJourneyGoalEdge!]
  """A flattened list of the nodes."""
  nodes: [ContactJourneyGoal!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type ContactJourneyConversionConnection {
  """A list of edges."""
  edges: [ContactJourneyConversionEdge!]
  """A flattened list of the nodes."""
  nodes: [ContactJourneyConversion!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type ContactConnection {
  """A list of edges."""
  edges: [ContactEdge!]
  """A flattened list of the nodes."""
  nodes: [Contact!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [FormInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [FormInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type SubmissionResponseConnection {
  """A list of edges."""
  edges: [SubmissionResponseEdge!]
  """A flattened list of the nodes."""
  nodes: [SubmissionResponse!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  preferredAnswers: ListStringOperationFilterInput
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
  """A list of edges."""
  edges: [QuestionInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [QuestionInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [FolderEdge!]
  """A flattened list of the nodes."""
  nodes: [Folder!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [FileInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [FileInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type FileStorageStatsByDayConnection {
  """A list of edges."""
  edges: [FileStorageStatsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [FileStorageStatsByDay!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


input CampaignInfoFilterInput {
  and: [CampaignInfoFilterInput!]
  or: [CampaignInfoFilterInput!]
  id: StringOperationFilterInput
  parentId: StringOperationFilterInput
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
  stopReason: StringOperationFilterInput
  sendsUtc: ListComparableDateTimeOperationFilterInput
  sentUtc: ComparableNullableOfDateTimeOperationFilterInput
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
  parentId: SortEnumType
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
  stopReason: SortEnumType
  sentUtc: SortEnumType
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
  id: IdOperationFilterInput
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
  optInIp: ListComparableByteOperationFilterInput
  confirmedUtc: ComparableNullableOfDateTimeOperationFilterInput
  confirmedIp: ListComparableByteOperationFilterInput
  optOutUtc: ComparableNullableOfDateTimeOperationFilterInput
  optOutSource: OptOutSourceOperationFilterInput
  optOutIp: ListComparableByteOperationFilterInput
  optOutReason: StringOperationFilterInput
  softBounceCount: ComparableInt32OperationFilterInput
  hardBounceCount: ComparableInt32OperationFilterInput
  """Date/time of last campaign delivery"""
  lastDelivered: ComparableNullableOfDateTimeOperationFilterInput
  """Date/time of last campaign bounce"""
  lastBounced: ComparableNullableOfDateTimeOperationFilterInput
  """Date/time of last campaign opened"""
  lastOpened: ComparableNullableOfDateTimeOperationFilterInput
  """Date/time of last campaign link click"""
  lastClicked: ComparableNullableOfDateTimeOperationFilterInput
  """Date/time of last campaign reply"""
  lastReplied: ComparableNullableOfDateTimeOperationFilterInput
  """Date/time of last campaign shared on social media"""
  lastShared: ComparableNullableOfDateTimeOperationFilterInput
  """Date/time of last campaign forwarded to a friend"""
  lastForward: ComparableNullableOfDateTimeOperationFilterInput
  """
  Represents the count of up to the five most recently delivered campaigns for this contact. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Delivered: ComparableInt32OperationFilterInput
  """
  Represents the count of up to the five most recently bounced campaigns for this contact. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Bounced: ComparableInt32OperationFilterInput
  """
  Represents the count of up to the five most recent campaigns for this contact with open events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Opened: ComparableInt32OperationFilterInput
  """
  Represents the count of up to the five most recent campaigns for this contact with link click events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Clicked: ComparableInt32OperationFilterInput
  """
  Represents the count of up to the five most recent campaigns for this contact with reply events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Replied: ComparableInt32OperationFilterInput
  """
  Represents the count of up to the five most recent campaigns for this contact with social share events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Shared: ComparableInt32OperationFilterInput
  """
  Represents the count of up to the five most recent campaigns for this contact with Forward-to-friend events. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Forward: ComparableInt32OperationFilterInput
  """
  Represents the count of up to the five most recent campaigns for this contact. (If fewer than five campaigns have been sent—e.g., for new accounts—only the available campaigns are included.)
  """
  last5Count: ComparableInt32OperationFilterInput
  audienceId: ComparableInt64OperationFilterInput
  profileFields: ListFilterInputTypeOfProfileFieldFilterInput
  tagList: ListStringOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
}


"""A connection to a list of items."""
type CampaignInfoConnection {
  """A list of edges."""
  edges: [CampaignInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [CampaignInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [HistoryEdge!]
  """A flattened list of the nodes."""
  nodes: [History!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


input CountryFilterInput {
  and: [CountryFilterInput!]
  or: [CountryFilterInput!]
  name: StringOperationFilterInput
  code: StringOperationFilterInput
}


input CountrySortInput {
  name: SortEnumType
  code: SortEnumType
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
  """A list of edges."""
  edges: [SurveyInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [SurveyInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [LandingPageInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [LandingPageInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [TransactionEdge!]
  """A flattened list of the nodes."""
  nodes: [Transaction!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionEventConnection {
  """A list of edges."""
  edges: [TransactionEventEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionEvent!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionActivityConnection {
  """A list of edges."""
  edges: [TransactionActivityEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionActivity!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionPerformanceLinkStatsConnection {
  """A list of edges."""
  edges: [TransactionPerformanceLinkStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionPerformanceLinkStats!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionFromDomainStatsConnection {
  """A list of edges."""
  edges: [TransactionFromDomainStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionFromDomainStats!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionDomainStatsConnection {
  """A list of edges."""
  edges: [TransactionDomainStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionDomainStats!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionBounceDomainConnection {
  """A list of edges."""
  edges: [TransactionBounceDomainEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionBounceDomain!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionTopBounceDomainStatsConnection {
  """A list of edges."""
  edges: [TransactionTopBounceDomainStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionTopBounceDomainStats!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionStatsConnection {
  """A list of edges."""
  edges: [TransactionStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionStats!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type TransactionLinkStatsConnection {
  """A list of edges."""
  edges: [TransactionLinkStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [TransactionLinkStats!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [JourneyInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyContactStatsByDayConnection {
  """A list of edges."""
  edges: [JourneyContactStatsByDayEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyContactStatsByDay!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyTagStatsConnection {
  """A list of edges."""
  edges: [JourneyTagStatsEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyTagStats!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyDurationConnection {
  """A list of edges."""
  edges: [JourneyDurationEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyDuration!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [JourneyNodeInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyNodeInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [CustomApiEventEdge!]
  """A flattened list of the nodes."""
  nodes: [CustomApiEvent!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [SMSCampaignEdge!]
  """A flattened list of the nodes."""
  nodes: [SMSCampaign!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [JourneyGoalEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyGoal!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyGoalContactConnection {
  """A list of edges."""
  edges: [JourneyGoalContactEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyGoalContact!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [JourneyConversionEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyConversion!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""A connection to a list of items."""
type JourneyConversionContactConnection {
  """A list of edges."""
  edges: [JourneyConversionContactEdge!]
  """A flattened list of the nodes."""
  nodes: [JourneyConversionContact!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [AccountSuppressionFilterEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountSuppressionFilter!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [SavedSearchInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [SavedSearchInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [ViewEdge!]
  """A flattened list of the nodes."""
  nodes: [View!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [AccountApiKeyInfoEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountApiKeyInfo!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [WebhookEdge!]
  """A flattened list of the nodes."""
  nodes: [Webhook!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [UserActivityEdge!]
  """A flattened list of the nodes."""
  nodes: [UserActivity!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [UserAccountNotificationEdge!]
  """A flattened list of the nodes."""
  nodes: [UserAccountNotification!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [CustomReportEdge!]
  """A flattened list of the nodes."""
  nodes: [CustomReport!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [ItemEdge!]
  """A flattened list of the nodes."""
  nodes: [Item!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [AIRequestEdge!]
  """A flattened list of the nodes."""
  nodes: [AIRequest!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [AccountExportEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountExport!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """A list of edges."""
  edges: [AccountAutoRetryRuleEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountAutoRetryRule]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


input AffiliatePaymentFilterInput {
  and: [AffiliatePaymentFilterInput!]
  or: [AffiliatePaymentFilterInput!]
  """Payment Id"""
  id: ComparableInt32OperationFilterInput
  """Date of payment request from affiliate"""
  requestDate: ComparableDateTimeOperationFilterInput
  """Payment amount paid"""
  paymentAmount: ComparableNullableOfDecimalOperationFilterInput
  """Date of payment to affiliate"""
  paymentDate: ComparableNullableOfDateTimeOperationFilterInput
  """Payment reference Id from payment gateway"""
  referenceId: StringOperationFilterInput
  """Payment status"""
  paymentStatus: AffiliatePaymentStatusOperationFilterInput
}


input AffiliatePaymentSortInput {
  """Payment Id"""
  id: SortEnumType
  """Date of payment request from affiliate"""
  requestDate: SortEnumType
  """Payment amount paid"""
  paymentAmount: SortEnumType
  """Date of payment to affiliate"""
  paymentDate: SortEnumType
  """Payment reference Id from payment gateway"""
  referenceId: SortEnumType
  """Payment status"""
  paymentStatus: SortEnumType
}


"""A connection to a list of items."""
type AffiliatePaymentConnection {
  """A list of edges."""
  edges: [AffiliatePaymentEdge!]
  """A flattened list of the nodes."""
  nodes: [AffiliatePayment!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


input DomainFilterInput {
  and: [DomainFilterInput!]
  or: [DomainFilterInput!]
  """Unique domain id"""
  id: IdOperationFilterInput
  """Domain name"""
  domainName: StringOperationFilterInput
  """
  Indicates whether email will use domain for the MAILFROM (different from FROM)
  """
  enableMailFrom: BooleanOperationFilterInput
  """Status of DKIM record 1 check"""
  dkim1Status: DnsRecordStatusOperationFilterInput
  """Status of DKIM record 2 check"""
  dkim2Status: DnsRecordStatusOperationFilterInput
  """Status of MX record check (CNAME or MX record)"""
  mxStatus: DnsRecordStatusOperationFilterInput
  """Status of SPF record"""
  spfStatus: DnsRecordStatusOperationFilterInput
  """Status of DMARC record."""
  dmarcStatus: DnsRecordStatusOperationFilterInput
  """Policy defined in the existing DMARC DNS record"""
  dmarcPolicy: StringOperationFilterInput
  """Indicates of mail can be sent for this domain (FROM address only)"""
  sendingEnabled: BooleanOperationFilterInput
  """Indicates the status of this domain for sending"""
  sendingDomainValid: BooleanOperationFilterInput
  """Indicates the advanced status of this domain for custom MAILFROM."""
  sendingDomainAdvancedValid: BooleanOperationFilterInput
  """Date of last send verification checks"""
  sendingDomainVerifiedUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Results of verification checks"""
  sendingDomainVerifyResult: DomainResultFilterInput
  """URL paths to exclude from site tracking"""
  excludePaths: ListStringOperationFilterInput
  """URL paths to include for site tracking"""
  includePaths: ListStringOperationFilterInput
  """Indicates site tracking is enabled"""
  siteTrackingEnabled: BooleanOperationFilterInput
  """Indicates whether site tracking script was found on domain's website"""
  siteTrackingValid: BooleanOperationFilterInput
  """Date of last site tracking verification checks"""
  siteTrackingVerifiedUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Date/time the domain was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Id of user who created the domain"""
  createdBy: StringOperationFilterInput
  """Date/time the domain was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Id of user who last modified the domain"""
  modifiedBy: StringOperationFilterInput
}


input DomainSortInput {
  """Unique domain id"""
  id: SortEnumType
  """Domain name"""
  domainName: SortEnumType
  """
  Indicates whether email will use domain for the MAILFROM (different from FROM)
  """
  enableMailFrom: SortEnumType
  """Status of DKIM record 1 check"""
  dkim1Status: SortEnumType
  """Status of DKIM record 2 check"""
  dkim2Status: SortEnumType
  """Status of MX record check (CNAME or MX record)"""
  mxStatus: SortEnumType
  """Status of SPF record"""
  spfStatus: SortEnumType
  """Status of DMARC record."""
  dmarcStatus: SortEnumType
  """Policy defined in the existing DMARC DNS record"""
  dmarcPolicy: SortEnumType
  """Indicates of mail can be sent for this domain (FROM address only)"""
  sendingEnabled: SortEnumType
  """Indicates the status of this domain for sending"""
  sendingDomainValid: SortEnumType
  """Indicates the advanced status of this domain for custom MAILFROM."""
  sendingDomainAdvancedValid: SortEnumType
  """Date of last send verification checks"""
  sendingDomainVerifiedUtc: SortEnumType
  """Results of verification checks"""
  sendingDomainVerifyResult: DomainResultSortInput
  """Indicates site tracking is enabled"""
  siteTrackingEnabled: SortEnumType
  """Indicates whether site tracking script was found on domain's website"""
  siteTrackingValid: SortEnumType
  """Date of last site tracking verification checks"""
  siteTrackingVerifiedUtc: SortEnumType
  """Date/time the domain was created"""
  createdUtc: SortEnumType
  """Id of user who created the domain"""
  createdBy: SortEnumType
  """Date/time the domain was last modified"""
  modifiedUtc: SortEnumType
  """Id of user who last modified the domain"""
  modifiedBy: SortEnumType
}


"""A connection to a list of items."""
type DomainConnection {
  """A list of edges."""
  edges: [DomainEdge!]
  """A flattened list of the nodes."""
  nodes: [Domain!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""
Represents an integration partner that provides OAuth-based integration
"""
input IntegrationPartnerFilterInput {
  and: [IntegrationPartnerFilterInput!]
  or: [IntegrationPartnerFilterInput!]
  """Unique identifier of integration partner"""
  id: IdOperationFilterInput
  """
  Display name of the integration partner (e.g., "Salesforce", "HubSpot")
  """
  name: StringOperationFilterInput
  """URL to integration partner's logo for light backgrounds"""
  lightLogoUrl: StringOperationFilterInput
  """URL to integration partner's logo for dark backgrounds"""
  darkLogoUrl: StringOperationFilterInput
  """URL to integration partner's help docs"""
  helpUrl: StringOperationFilterInput
  """Description of the integration partner and its capabilities"""
  dscr: StringOperationFilterInput
  """Indicates if an embeddable UI widget is available. System use only"""
  isEmbed: BooleanOperationFilterInput
  """Indicates if the integration is configurable"""
  isConfigurable: BooleanOperationFilterInput
  """Category of integration (e.g., CRM, Email Marketing, Analytics)"""
  integrationCategory: IntegrationCategoryOperationFilterInput
  """Type of authentication used by this partner. 1=ApiKey, 2=OAuth2"""
  authType: ComparableByteOperationFilterInput
  """For Tarvent use only"""
  clientId: StringOperationFilterInput
  """CSV of permissions we're requesting authorization for"""
  permissions: StringOperationFilterInput
}


"""
Represents an integration partner that provides OAuth-based integration
"""
input IntegrationPartnerSortInput {
  """Unique identifier of integration partner"""
  id: SortEnumType
  """
  Display name of the integration partner (e.g., "Salesforce", "HubSpot")
  """
  name: SortEnumType
  """URL to integration partner's logo for light backgrounds"""
  lightLogoUrl: SortEnumType
  """URL to integration partner's logo for dark backgrounds"""
  darkLogoUrl: SortEnumType
  """URL to integration partner's help docs"""
  helpUrl: SortEnumType
  """Description of the integration partner and its capabilities"""
  dscr: SortEnumType
  """Indicates if an embeddable UI widget is available. System use only"""
  isEmbed: SortEnumType
  """Indicates if the integration is configurable"""
  isConfigurable: SortEnumType
  """Category of integration (e.g., CRM, Email Marketing, Analytics)"""
  integrationCategory: SortEnumType
  """Type of authentication used by this partner. 1=ApiKey, 2=OAuth2"""
  authType: SortEnumType
  """For Tarvent use only"""
  clientId: SortEnumType
  """CSV of permissions we're requesting authorization for"""
  permissions: SortEnumType
}


"""A connection to a list of items."""
type IntegrationPartnerConnection {
  """A list of edges."""
  edges: [IntegrationPartnerEdge!]
  """A flattened list of the nodes."""
  nodes: [IntegrationPartner!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
  totalCount: Int!
}


"""
Represents an active integration between an account and an integration partner
"""
input AccountIntegrationFilterInput {
  and: [AccountIntegrationFilterInput!]
  or: [AccountIntegrationFilterInput!]
  """Unique identifier for this account integration"""
  id: IdOperationFilterInput
  """ID of the account that owns this integration"""
  accountId: IdOperationFilterInput
  """The integration partner ID for this integration"""
  integrationPartnerId: ComparableInt64OperationFilterInput
  """User-friendly name for this specific integration instance"""
  integrationName: StringOperationFilterInput
  """The audience that this integration will integrate with."""
  audienceId: IdOperationFilterInput
  """Type of OAuth token (typically "Bearer")"""
  tokenType: StringOperationFilterInput
  """Scope/permissions granted to this integration"""
  tokenScope: StringOperationFilterInput
  """When the current access token expires"""
  accessTokenExpiresAt: ComparableDateTimeOperationFilterInput
  """When the system should next check if token refresh is needed"""
  nextRefreshCheckUtc: ComparableDateTimeOperationFilterInput
  """When the token was last successfully refreshed"""
  lastTokenRefreshUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Number of consecutive token refresh attempts made"""
  tokenRefreshAttempts: ComparableInt32OperationFilterInput
  """Current connection status of this integration"""
  connectionStatus: ConnectionStatusOperationFilterInput
  """Last error message encountered (if any)"""
  lastErrorMessage: StringOperationFilterInput
  """When the last error occurred"""
  lastErrorUtc: ComparableNullableOfDateTimeOperationFilterInput
  """Number of consecutive errors encountered"""
  consecutiveErrorCount: ComparableInt32OperationFilterInput
  """Whether this integration is currently active"""
  isActive: BooleanOperationFilterInput
  """Whether this integration is currently deleted"""
  isDeleted: BooleanOperationFilterInput
  """Whether this integration has been quarantined due to repeated failures"""
  isQuarantined: BooleanOperationFilterInput
  """When this integration was created"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Who created this integration"""
  createdBy: StringOperationFilterInput
  """When this integration was last modified"""
  modifiedUtc: ComparableDateTimeOperationFilterInput
  """Who last modified this integration"""
  modifiedBy: StringOperationFilterInput
  """Email address for sync notifications"""
  notificationEmail: StringOperationFilterInput
  """Email address used to establish integration"""
  ownerEmail: StringOperationFilterInput
  syncFilters: StringOperationFilterInput
  """The integration partner for this integration"""
  integrationPartner: IntegrationPartnerFilterInput
}


"""
Represents an active integration between an account and an integration partner
"""
input AccountIntegrationSortInput {
  """Unique identifier for this account integration"""
  id: SortEnumType
  """ID of the account that owns this integration"""
  accountId: SortEnumType
  """The integration partner ID for this integration"""
  integrationPartnerId: SortEnumType
  """User-friendly name for this specific integration instance"""
  integrationName: SortEnumType
  """The audience that this integration will integrate with."""
  audienceId: SortEnumType
  """Type of OAuth token (typically "Bearer")"""
  tokenType: SortEnumType
  """Scope/permissions granted to this integration"""
  tokenScope: SortEnumType
  """When the current access token expires"""
  accessTokenExpiresAt: SortEnumType
  """When the system should next check if token refresh is needed"""
  nextRefreshCheckUtc: SortEnumType
  """When the token was last successfully refreshed"""
  lastTokenRefreshUtc: SortEnumType
  """Number of consecutive token refresh attempts made"""
  tokenRefreshAttempts: SortEnumType
  """Current connection status of this integration"""
  connectionStatus: SortEnumType
  """Last error message encountered (if any)"""
  lastErrorMessage: SortEnumType
  """When the last error occurred"""
  lastErrorUtc: SortEnumType
  """Number of consecutive errors encountered"""
  consecutiveErrorCount: SortEnumType
  """Whether this integration is currently active"""
  isActive: SortEnumType
  """Whether this integration is currently deleted"""
  isDeleted: SortEnumType
  """Whether this integration has been quarantined due to repeated failures"""
  isQuarantined: SortEnumType
  """When this integration was created"""
  createdUtc: SortEnumType
  """Who created this integration"""
  createdBy: SortEnumType
  """When this integration was last modified"""
  modifiedUtc: SortEnumType
  """Who last modified this integration"""
  modifiedBy: SortEnumType
  """Email address for sync notifications"""
  notificationEmail: SortEnumType
  """Email address used to establish integration"""
  ownerEmail: SortEnumType
  syncFilters: SortEnumType
  """The integration partner for this integration"""
  integrationPartner: IntegrationPartnerSortInput
}


"""A connection to a list of items."""
type AccountIntegrationConnection {
  """A list of edges."""
  edges: [AccountIntegrationEdge!]
  """A flattened list of the nodes."""
  nodes: [AccountIntegration!]
  """Information to aid in pagination."""
  pageInfo: PageInfo!
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
  """When paginating forwards, the cursor to continue."""
  endCursor: String
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
  """Current plan information."""
  currentPlan: AccountPlanInfo!
  """Next plan information if a plan change is scheduled."""
  nextPlan: AccountPlanInfo
  tvafs: [tvaf!]!
  """Plan type"""
  type: PlanType!
}


"""An edge in a connection."""
type AccountPlanEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountPlan
}


type AccountInvoiceInfo {
  """Amount paid after discounts and credits"""
  amountPaid: Float!
  """Service period end date/time"""
  billPeriodEndUtc: DateTime!
  """Service period start date/time"""
  billPeriodStartUtc: DateTime!
  """Invoice due date/time"""
  dueUtc: DateTime
  """Unique invoice ID"""
  id: String!
  """
  Collection of line items detailing the specific services being invoiced for
  """
  lineItems: [AccountInvoiceLineItemInfo!]!
  """Url to download pdf"""
  pdfDownloadUrl: String!
  """Status of invoice"""
  status: InvoiceStatus!
  """Total amount being billed"""
  totalAmount: Float!
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
  """Internal use only"""
  _do: Int!
  """
  Non-monetary value of a credit within a service plan. This is only used for plans that use credits.
  """
  creditValue: Float!
  """
  Collection of credits available for purchase when using a credit-based service plan.
  """
  credits: [ServicePlanCredit!]!
  """Description of service plan"""
  description: String!
  """Collections of features available with the service plan"""
  features: [ServicePlanFeature!]!
  """Unique service plan ID"""
  id: String!
  """Name of service plan"""
  name: String!
  """
  Collection of scales used for recurring plans based, for example, number of active subscribers.
  """
  scales: [ServicePlanScale!]!
  """Service plan type"""
  serviceType: ServiceType!
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
  count: Int!
  isSystem: Boolean
  name: String!
  type: EntityType!
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
  activeContacts: Int!
  complaintContacts: Int!
  contacts: Int!
  pendingContacts: Int!
  scrubbedContacts: Int!
  statUtc: DateTime!
  undeliverableContacts: Int!
  unsubscribedContacts: Int!
}


"""An edge in a connection."""
type AudienceStatsByDayEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AudienceStatsByDay!
}


input IdOperationFilterInput {
  eq: ID
  neq: ID
  in: [ID]
  nin: [ID]
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
  categoryName: String
  id: String!
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
  description: String
  id: String!
  isDynamic: Boolean!
  isPublic: Boolean!
  name: String
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


type ContactConversation {
  createdBy: String
  createdUtc: DateTime!
  fromContact: Boolean!
  id: String!
  message: String
  modifiedBy: String
  modifiedUtc: DateTime!
  status: Status!
}


"""An edge in a connection."""
type ContactConversationEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: ContactConversation!
}


type ContactNote {
  createdBy: String
  createdUtc: DateTime!
  id: String!
  message: String
  modifiedBy: String
  modifiedUtc: DateTime!
  status: Status!
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


type ContactJourneyGoal {
  conversion: JourneyConversion
  createdBy: String
  createdUtc: DateTime!
  description: String
  """Only used for GLOBAL goals"""
  filter: ConditionGroup
  goalReachedUtc: DateTime!
  id: String!
  journeyId: String!
  journeyName: String!
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  type: JourneyGoalType!
}


"""An edge in a connection."""
type ContactJourneyGoalEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: ContactJourneyGoal!
}


type ContactJourneyConversion {
  convertedUtc: DateTime!
  createdBy: String
  createdUtc: DateTime!
  description: String
  id: String!
  journeyId: String!
  journeyName: String!
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  value: Float!
  valueWhenConverted: Float!
}


"""An edge in a connection."""
type ContactJourneyConversionEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: ContactJourneyConversion!
}


"""An edge in a connection."""
type ContactEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Contact!
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


input EventTypeOperationFilterInput {
  eq: EventType
  neq: EventType
  in: [EventType!]
  nin: [EventType!]
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
  answers: [SubmissionAnswer]
  contactId: String
  createdUtc: DateTime!
  eventType: EventType!
  id: String!
  respondentId: String!
  sourceId: String
  submissionUtc: DateTime!
  timeSpentMinutes: Float!
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
  hasChildren: Boolean!
  id: String!
  name: String!
  parentId: String
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
  generalStorage: Int!
  imageStorage: Int!
  statUtc: DateTime!
  totalStorage: Int!
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


input ListComparableByteOperationFilterInput {
  all: ComparableByteOperationFilterInput
  none: ComparableByteOperationFilterInput
  some: ComparableByteOperationFilterInput
  any: Boolean
}


input OptOutSourceOperationFilterInput {
  eq: OptOutSource
  neq: OptOutSource
  in: [OptOutSource!]
  nin: [OptOutSource!]
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


type History {
  lastModifiedUtc: DateTime!
  version: Float!
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


type Transaction {
  autoGenerateHtml: Boolean!
  autoGenerateText: Boolean!
  bccRecipients: [String!]!
  bounceCategory: EmailEventType
  bounceError: String
  ccRecipients: [String!]!
  clickCount: Int!
  complaint: Boolean!
  contactId: String
  createdBy: String!
  createdUtc: DateTime!
  customHeaders: [TransactionHeader!]!
  device: DeviceType
  enableAnalytics: Boolean!
  enableViewOnline: Boolean!
  error: String
  from: String
  fromName: String
  groupName: String!
  id: String!
  ignoreSuppressCheck: Boolean!
  links: [TransactionLink!]!
  metadata: [TransactionMetadata!]!
  modifiedBy: String!
  modifiedUtc: DateTime!
  openCount: Int!
  os: OperatingSystemType
  parentId: String
  processedUtc: DateTime
  readSeconds: Int!
  recipient: String!
  recipientName: String
  recipientType: RecipientType!
  replyTo: String
  replyToName: String
  requestId: String!
  retryNbr: Int
  sendAtUtc: DateTime!
  sendCount: Int!
  showRecipients: Boolean!
  software: SoftwareType
  """Processing status"""
  status: TransactionStatus!
  stripQueryString: Boolean!
  subject: String
  tags: [String!]!
  trackClicks: Boolean!
  trackDomains: Boolean!
  trackOpens: Boolean!
  trackReplies: Boolean!
  unsubscribe: Boolean!
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
  device: DeviceType
  emailDomain: String
  eventType: EmailEventType!
  eventUtc: DateTime!
  ipAddress: [Byte!]
  os: OperatingSystemType
  readSeconds: Int
  serverResponse: String
  software: SoftwareType
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
  bounceCategory: EmailEventType
  bounceError: String
  fromAddress: String
  group: String
  id: String!
  sendAtUtc: DateTime!
  subject: String
  toAddress: String
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
  block: Int!
  blockContent: Int!
  blockSender: Int!
  clicks: Int!
  created: Int!
  declined: Int!
  delivered: Int!
  domain: String
  feedback: Int!
  hardBounce: Int!
  invalidEmail: Int!
  lastVerifiedUtc: DateTime!
  opens: Int!
  processed: Int!
  rating: Int!
  requests: Int!
  softBounce: Int!
  softDns: Int!
  softIp: Int!
  softSenderAuth: Int!
  transactions: Int!
  uniqueClicks: Int!
  uniqueComplaints: Int!
  uniqueFeedback: Int!
  uniqueOpens: Int!
  uniqueOptOut: Int!
  uniqueRating: Int!
  uniqueViewOnline: Int!
  valid: Boolean!
  viewOnline: Int!
}


"""An edge in a connection."""
type TransactionFromDomainStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionFromDomainStats!
}


type TransactionDomainStats {
  block: Int!
  blockContent: Int!
  blockSender: Int!
  clicks: Int!
  created: Int!
  declined: Int!
  delivered: Int!
  domain: String
  feedback: Int!
  hardBounce: Int!
  invalidEmail: Int!
  opens: Int!
  processed: Int!
  rating: Int!
  requests: Int!
  softBounce: Int!
  softDns: Int!
  softIp: Int!
  softSenderAuth: Int!
  transactions: Int!
  uniqueClicks: Int!
  uniqueComplaints: Int!
  uniqueFeedback: Int!
  uniqueOpens: Int!
  uniqueOptOut: Int!
  uniqueRating: Int!
  uniqueViewOnline: Int!
  viewOnline: Int!
}


"""An edge in a connection."""
type TransactionDomainStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionDomainStats!
}


type TransactionBounceDomain {
  domain: String
  errorDetail: String
  eventType: EmailEventType!
  eventUtc: DateTime!
}


"""An edge in a connection."""
type TransactionBounceDomainEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionBounceDomain!
}


type TransactionTopBounceDomainStats {
  block: Int!
  blockContent: Int!
  blockContentPct: Float!
  blockPct: Float!
  blockSender: Int!
  blockSenderPct: Float!
  bounceCount: Int!
  domain: String
  hardBounce: Int!
  hardBouncePct: Float!
  softBounce: Int!
  softBouncePct: Float!
  softDns: Int!
  softDnsPct: Float!
  softIp: Int!
  softIpPct: Float!
  softSenderAuth: Int!
  softSenderAuthPct: Float!
}


"""An edge in a connection."""
type TransactionTopBounceDomainStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionTopBounceDomainStats!
}


type TransactionStats {
  block: Int!
  blockContent: Int!
  blockSender: Int!
  clicks: Int!
  created: Int!
  declined: Int!
  delivered: Int!
  feedback: Int!
  hardBounce: Int!
  invalidEmail: Int!
  opens: Int!
  processed: Int!
  rating: Int!
  requests: Int!
  softBounce: Int!
  softDns: Int!
  softIp: Int!
  softSenderAuth: Int!
  statUtc: DateTime
  transactions: Int!
  uniqueClicks: Int!
  uniqueComplaints: Int!
  uniqueFeedback: Int!
  uniqueOpens: Int!
  uniqueOptOut: Int!
  uniqueRating: Int!
  uniqueViewOnline: Int!
  viewOnline: Int!
}


"""An edge in a connection."""
type TransactionStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: TransactionStats!
}


type TransactionLinkStats {
  clicked: Int!
  linkName: String
  statUtc: DateTime
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


type JourneyContactStatsByDay {
  StatUtc: DateTime!
  contactCount: Int!
  statType: JourneyContactStatus!
}


"""An edge in a connection."""
type JourneyContactStatsByDayEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyContactStatsByDay!
}


type JourneyTagStats {
  contactCount: Int!
  tagName: String
}


"""An edge in a connection."""
type JourneyTagStatsEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: JourneyTagStats!
}


type JourneyDuration {
  contactCount: Int!
  duration: Int!
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
  pending: SortEnumType
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
  stopReason: SortEnumType
  """Date/time (UTC) the campaign was scheduled."""
  scheduledToSendUtc: SortEnumType
  scheduledBy: SortEnumType
  sendTimeCount: SortEnumType
  sentUtc: SortEnumType
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
  mvWinManualOverride: SortEnumType
  enableAnalytics: SortEnumType
  globalPreheaderInd: SortEnumType
  fromCount: SortEnumType
  subjectCount: SortEnumType
  contentCount: SortEnumType
  """
  The estimated number of contacts the campaign will be sent to, determined by the campaign's contact criteria. This number is not updated in real time and may differ from the actual number of contacts reached.
  """
  contactCount: SortEnumType
  totalContacts: SortEnumType
  totalCombinations: SortEnumType
  """CRON Expression used to determine when to send RSS campaign jobs"""
  rssSendFrequency: SortEnumType
  """Url used to get items from an RSS feed for RSS Campaigns"""
  rssUrl: SortEnumType
  """
  Indicates what type of check to run against the RSS feed to help determine if a job should be sent.
  """
  rssCheckType: SortEnumType
  """
  Indicates if a job should be sent, even if no RSS items have been added or updated since the last check.
  """
  rssSendIfNoNewOrUpdatedItems: SortEnumType
  """
  Id of the parent campaign ID for RSS campaigns only. If populated, this represents an RSS campaign job.
  """
  parentId: SortEnumType
  createdUtc: SortEnumType
  createdBy: SortEnumType
  modifiedUtc: SortEnumType
  modifiedBy: SortEnumType
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
  pending: ComparableInt32OperationFilterInput
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
  id: IdOperationFilterInput
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
  stopReason: StringOperationFilterInput
  """Date/time (UTC) the campaign was scheduled."""
  scheduledToSendUtc: ComparableNullableOfDateTimeOperationFilterInput
  scheduledBy: ComparableNullableOfInt64OperationFilterInput
  sendTimeCount: ComparableInt32OperationFilterInput
  sentUtc: ComparableNullableOfDateTimeOperationFilterInput
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
  mvWinManualOverride: BooleanOperationFilterInput
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
  """
  The estimated number of contacts the campaign will be sent to, determined by the campaign's contact criteria. This number is not updated in real time and may differ from the actual number of contacts reached.
  """
  contactCount: ComparableInt64OperationFilterInput
  totalContacts: ComparableInt32OperationFilterInput
  totalCombinations: ComparableInt32OperationFilterInput
  """CRON Expression used to determine when to send RSS campaign jobs"""
  rssSendFrequency: StringOperationFilterInput
  """Url used to get items from an RSS feed for RSS Campaigns"""
  rssUrl: StringOperationFilterInput
  """
  Indicates what type of check to run against the RSS feed to help determine if a job should be sent.
  """
  rssCheckType: NullableOfRssCheckTypeOperationFilterInput
  """
  Indicates if a job should be sent, even if no RSS items have been added or updated since the last check.
  """
  rssSendIfNoNewOrUpdatedItems: BooleanOperationFilterInput
  """
  Id of the parent campaign ID for RSS campaigns only. If populated, this represents an RSS campaign job.
  """
  parentId: ComparableNullableOfInt64OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  createdBy: StringOperationFilterInput
  modifiedUtc: ComparableDateTimeOperationFilterInput
  modifiedBy: StringOperationFilterInput
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
  """Id of user who created the setting"""
  createdBy: String!
  """Date/time the setting was created"""
  createdUtc: DateTime!
  """Domain of email address to filter (right side of @ symbol"""
  domain: String
  """Unique suppression filter ID"""
  id: String!
  """Local part of email address to filter (left side of @ symbol"""
  localPart: String
  """Reason the filter is being added"""
  reason: String
}


"""An edge in a connection."""
type AccountSuppressionFilterEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountSuppressionFilter!
}


type SavedSearchInfo {
  description: String!
  id: String!
  name: String!
}


"""An edge in a connection."""
type SavedSearchInfoEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: SavedSearchInfo!
}


type View {
  createdBy: String
  createdUtc: DateTime!
  description: String
  id: String!
  isPrivate: Boolean!
  jsonConfiguration: String
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  type: EntityType!
}


"""An edge in a connection."""
type ViewEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: View!
}


type AccountApiKeyInfo {
  audiences: [String!]!
  id: String!
  name: String!
  permissionKeys: [String!]!
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
  accountName: String
  callDurationMs: Int!
  callGeneratedErrors: Boolean!
  callName: String!
  callType: GraphQLCallType!
  complexity: Int!
  createdUtc: DateTime!
  entityId: String
  entityName: String
  entityType: EntityType!
  ipAddress: [Byte!]
  isApiKey: Boolean!
  maxDepth: Int!
  userEmail: String!
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
  containsPII: Boolean!
  createdUtc: DateTime!
  description: String
  distributionList: [String]
  id: String!
  isEnabled: Boolean!
  isInitialized: Boolean!
  jobs: [CustomReportJob]
  lastRunUtc: DateTime
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  note: String
  userIds: [String]
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
  addOns: [ItemAddOn!]!
  description: String!
  features: [ItemFeature!]!
  id: String!
  isTrial: Boolean!
  name: String!
  period: Int!
  periodUnit: String!
  tiers: [ItemTier!]!
  """Plan type"""
  type: PlanType!
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
  configuration: ExportConfig
  createdBy: String
  createdUtc: DateTime!
  downloadUrl: String
  id: String!
  modifiedBy: String
  modifiedUtc: DateTime!
  name: String
  type: ExportType!
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
  bounceCategory: BounceCategory!
  communicationType: CommunicationType!
  createdBy: String!
  createdUtc: DateTime!
  id: String!
  isActive: Boolean!
  recipientDomain: String
  retries: [Int!]
  sendingDomain: String
}


"""An edge in a connection."""
type AccountAutoRetryRuleEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountAutoRetryRule
}


input AffiliatePaymentStatusOperationFilterInput {
  eq: AffiliatePaymentStatus
  neq: AffiliatePaymentStatus
  in: [AffiliatePaymentStatus!]
  nin: [AffiliatePaymentStatus!]
}


type AffiliatePayment {
  """Payment Id"""
  id: Int!
  """Payment amount paid"""
  paymentAmount: Decimal
  """Date of payment to affiliate"""
  paymentDate: DateTime
  """Payment status"""
  paymentStatus: AffiliatePaymentStatus!
  """Payment reference Id from payment gateway"""
  referenceId: String
  """Date of payment request from affiliate"""
  requestDate: DateTime!
}


"""An edge in a connection."""
type AffiliatePaymentEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AffiliatePayment!
}


input DnsRecordStatusOperationFilterInput {
  eq: DnsRecordStatus
  neq: DnsRecordStatus
  in: [DnsRecordStatus!]
  nin: [DnsRecordStatus!]
}


input DomainResultFilterInput {
  and: [DomainResultFilterInput!]
  or: [DomainResultFilterInput!]
  domain: StringOperationFilterInput
  dmarcResult: DmarcResultFilterInput
  mxResult: MxResultFilterInput
  spfResult: SpfResultFilterInput
  enableMailFrom: BooleanOperationFilterInput
  isValid: BooleanOperationFilterInput
  isAdvancedValid: BooleanOperationFilterInput
  recordResults: ListFilterInputTypeOfDnsRecordResultFilterInput
  advancedRecords: ListFilterInputTypeOfDnsRecordResultFilterInput
}


input DomainResultSortInput {
  domain: SortEnumType
  dmarcResult: DmarcResultSortInput
  mxResult: MxResultSortInput
  spfResult: SpfResultSortInput
  enableMailFrom: SortEnumType
  isValid: SortEnumType
  isAdvancedValid: SortEnumType
}


"""An edge in a connection."""
type DomainEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: Domain!
}


input IntegrationCategoryOperationFilterInput {
  eq: IntegrationCategory
  neq: IntegrationCategory
  in: [IntegrationCategory!]
  nin: [IntegrationCategory!]
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


"""
Represents an integration partner that provides OAuth-based integration
"""
type IntegrationPartner {
  """Type of authentication used by this partner. 1=ApiKey, 2=OAuth2"""
  authType: Byte!
  """For Tarvent use only"""
  clientId: String!
  """URL to integration partner's logo for dark backgrounds"""
  darkLogoUrl: String!
  """Description of the integration partner and its capabilities"""
  dscr: String!
  """URL to integration partner's help docs"""
  helpUrl: String!
  """Unique identifier of integration partner"""
  id: ID!
  """Category of integration (e.g., CRM, Email Marketing, Analytics)"""
  integrationCategory: IntegrationCategory!
  """Indicates if the integration is configurable"""
  isConfigurable: Boolean!
  """Indicates if an embeddable UI widget is available. System use only"""
  isEmbed: Boolean!
  """URL to integration partner's logo for light backgrounds"""
  lightLogoUrl: String!
  """
  Display name of the integration partner (e.g., "Salesforce", "HubSpot")
  """
  name: String!
  """CSV of permissions we're requesting authorization for"""
  permissions: String!
}


"""An edge in a connection."""
type IntegrationPartnerEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: IntegrationPartner!
}


input ConnectionStatusOperationFilterInput {
  eq: ConnectionStatus
  neq: ConnectionStatus
  in: [ConnectionStatus!]
  nin: [ConnectionStatus!]
}


"""
Represents an active integration between an account and an integration partner
"""
type AccountIntegration {
  """When the current access token expires"""
  accessTokenExpiresAt: DateTime!
  """ID of the account that owns this integration"""
  accountId: ID!
  """The audience that this integration will integrate with."""
  audienceId: ID!
  """Current connection status of this integration"""
  connectionStatus: ConnectionStatus!
  """Number of consecutive errors encountered"""
  consecutiveErrorCount: Int!
  """Who created this integration"""
  createdBy: String!
  """When this integration was created"""
  createdUtc: DateTime!
  """Unique identifier for this account integration"""
  id: ID!
  """User-friendly name for this specific integration instance"""
  integrationName: String!
  """The integration partner for this integration"""
  integrationPartner: IntegrationPartner!
  """The integration partner ID for this integration"""
  integrationPartnerId: Long!
  """Whether this integration is currently active"""
  isActive: Boolean!
  """Whether this integration is currently deleted"""
  isDeleted: Boolean!
  """Whether this integration has been quarantined due to repeated failures"""
  isQuarantined: Boolean!
  """Last error message encountered (if any)"""
  lastErrorMessage: String
  """When the last error occurred"""
  lastErrorUtc: DateTime
  """When the token was last successfully refreshed"""
  lastTokenRefreshUtc: DateTime
  """Who last modified this integration"""
  modifiedBy: String!
  """When this integration was last modified"""
  modifiedUtc: DateTime!
  """When the system should next check if token refresh is needed"""
  nextRefreshCheckUtc: DateTime!
  """Email address for sync notifications"""
  notificationEmail: String
  """Email address used to establish integration"""
  ownerEmail: String
  syncFilters: String
  """Number of consecutive token refresh attempts made"""
  tokenRefreshAttempts: Int!
  """Scope/permissions granted to this integration"""
  tokenScope: String
  """Type of OAuth token (typically "Bearer")"""
  tokenType: String
}


"""An edge in a connection."""
type AccountIntegrationEdge {
  """A cursor for use in pagination."""
  cursor: String!
  """The item at the end of the edge."""
  node: AccountIntegration!
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


input UserPermissionFilterInput {
  and: [UserPermissionFilterInput!]
  or: [UserPermissionFilterInput!]
  userId: ComparableInt64OperationFilterInput
  user: UserUserUserFilterInput
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
  id: IdOperationFilterInput
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
  doubleOptInConfirmAction: SortEnumType
  doubleOptInConfirmExternalUrl: SortEnumType
  hasWebhook: SortEnumType
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


input NullableOfRssCheckTypeOperationFilterInput {
  eq: RssCheckType
  neq: RssCheckType
  in: [RssCheckType]
  nin: [RssCheckType]
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
  doubleOptInConfirmAction: SubmitActionTypeOperationFilterInput
  doubleOptInConfirmExternalUrl: StringOperationFilterInput
  hasWebhook: BooleanOperationFilterInput
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


input DmarcResultFilterInput {
  and: [DmarcResultFilterInput!]
  or: [DmarcResultFilterInput!]
  hasError: BooleanOperationFilterInput
  errorMessage: StringOperationFilterInput
  recordDomain: StringOperationFilterInput
  policy: StringOperationFilterInput
  status: DnsRecordStatusOperationFilterInput
  isNative: BooleanOperationFilterInput
  suggestedRecord: DnsRecordFilterInput
  currentRecord: DnsRecordFilterInput
}


input MxResultFilterInput {
  and: [MxResultFilterInput!]
  or: [MxResultFilterInput!]
  hasError: BooleanOperationFilterInput
  errorMessage: StringOperationFilterInput
  recordDomain: StringOperationFilterInput
  recordCount: ComparableInt32OperationFilterInput
  status: DnsRecordStatusOperationFilterInput
  isNative: BooleanOperationFilterInput
  tarventMailServer: BooleanOperationFilterInput
  suggestedRecord: DnsRecordFilterInput
  currentRecord: DnsRecordFilterInput
}


input SpfResultFilterInput {
  and: [SpfResultFilterInput!]
  or: [SpfResultFilterInput!]
  hasError: BooleanOperationFilterInput
  errorMessage: StringOperationFilterInput
  recordDomain: StringOperationFilterInput
  policy: StringOperationFilterInput
  status: DnsRecordStatusOperationFilterInput
  isNative: BooleanOperationFilterInput
  hasTarvent: BooleanOperationFilterInput
  suggestedRecord: DnsRecordFilterInput
  currentRecord: DnsRecordFilterInput
}


input ListFilterInputTypeOfDnsRecordResultFilterInput {
  all: DnsRecordResultFilterInput
  none: DnsRecordResultFilterInput
  some: DnsRecordResultFilterInput
  any: Boolean
}


input DmarcResultSortInput {
  hasError: SortEnumType
  errorMessage: SortEnumType
  recordDomain: SortEnumType
  policy: SortEnumType
  status: SortEnumType
  isNative: SortEnumType
  suggestedRecord: DnsRecordSortInput
  currentRecord: DnsRecordSortInput
}


input MxResultSortInput {
  hasError: SortEnumType
  errorMessage: SortEnumType
  recordDomain: SortEnumType
  recordCount: SortEnumType
  status: SortEnumType
  isNative: SortEnumType
  tarventMailServer: SortEnumType
  suggestedRecord: DnsRecordSortInput
  currentRecord: DnsRecordSortInput
}


input SpfResultSortInput {
  hasError: SortEnumType
  errorMessage: SortEnumType
  recordDomain: SortEnumType
  policy: SortEnumType
  status: SortEnumType
  isNative: SortEnumType
  hasTarvent: SortEnumType
  suggestedRecord: DnsRecordSortInput
  currentRecord: DnsRecordSortInput
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


input UserUserUserFilterInput {
  and: [UserUserUserFilterInput!]
  or: [UserUserUserFilterInput!]
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
  """Date of when user became an affiliate"""
  affiliateStartUtc: ComparableNullableOfDateTimeOperationFilterInput
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
  """Collection of Affiliate applications"""
  affiliateApplications: ListFilterInputTypeOfAffiliateAppFilterInput
  """Collection of Affiliate payments"""
  affiliatePayments: ListFilterInputTypeOfAffiliatePaymentFilterInput
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


input NullableOfTriggerRssCheckTypeOperationFilterInput {
  eq: TriggerRssCheckType
  neq: TriggerRssCheckType
  in: [TriggerRssCheckType]
  nin: [TriggerRssCheckType]
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


input SubmitActionTypeOperationFilterInput {
  eq: SubmitActionType
  neq: SubmitActionType
  in: [SubmitActionType!]
  nin: [SubmitActionType!]
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
  all: ContactFilterInput
  none: ContactFilterInput
  some: ContactFilterInput
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
  include: BooleanOperationFilterInput
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


input DnsRecordFilterInput {
  and: [DnsRecordFilterInput!]
  or: [DnsRecordFilterInput!]
  type: DnsRecordTypeOperationFilterInput
  host: StringOperationFilterInput
  value: StringOperationFilterInput
  ttl: ComparableInt32OperationFilterInput
  preference: ComparableInt32OperationFilterInput
  policy: StringOperationFilterInput
  errorMsg: StringOperationFilterInput
}


input DnsRecordResultFilterInput {
  and: [DnsRecordResultFilterInput!]
  or: [DnsRecordResultFilterInput!]
  type: DnsRecordTypeOperationFilterInput
  status: DnsRecordStatusOperationFilterInput
  currentRecord: DnsRecordFilterInput
  suggestedRecord: DnsRecordFilterInput
}


input DnsRecordSortInput {
  type: SortEnumType
  host: SortEnumType
  value: SortEnumType
  ttl: SortEnumType
  preference: SortEnumType
  policy: SortEnumType
  errorMsg: SortEnumType
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


input ListFilterInputTypeOfAffiliateAppFilterInput {
  all: AffiliateAppFilterInput
  none: AffiliateAppFilterInput
  some: AffiliateAppFilterInput
  any: Boolean
}


input ListFilterInputTypeOfAffiliatePaymentFilterInput {
  all: AffiliatePaymentFilterInput
  none: AffiliatePaymentFilterInput
  some: AffiliatePaymentFilterInput
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
  id: IdOperationFilterInput
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


input DnsRecordTypeOperationFilterInput {
  eq: DnsRecordType
  neq: DnsRecordType
  in: [DnsRecordType!]
  nin: [DnsRecordType!]
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
  user: UserUserUserFilterInput
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
  user: UserUserUserFilterInput
  isLiked: BooleanOperationFilterInput
}


"""User affiliate application"""
input AffiliateAppFilterInput {
  and: [AffiliateAppFilterInput!]
  or: [AffiliateAppFilterInput!]
  """Unique application Id"""
  id: ComparableInt32OperationFilterInput
  """Date application was submitted"""
  createdUtc: ComparableDateTimeOperationFilterInput
  """Size of affiliate's marketing audience"""
  audienceSize: ComparableInt32OperationFilterInput
  """Marketing channels used by affiliate"""
  marketingChannels: StringOperationFilterInput
  """Urls to marketing channels used by affiliate"""
  marketingChannelUrls: StringOperationFilterInput
  """Sample of marketing content used by affiliate"""
  contentSample: StringOperationFilterInput
  agreePayoutEmail: BooleanOperationFilterInput
  agreeProgram: BooleanOperationFilterInput
  applicationStatus: AffiliateApplicationStatusOperationFilterInput
  """Comments from Tarvent regarding the application"""
  applicationComments: StringOperationFilterInput
  """Date of last application status change"""
  statusChangedUtc: ComparableDateTimeOperationFilterInput
  """Id of User who submitted application"""
  userId: ComparableInt64OperationFilterInput
  """User who submitted application"""
  user: UserUserUserFilterInput
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
  """Industry that the account's business operates within."""
  industry: ComparableNullableOfInt32OperationFilterInput
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
  """Collection of domains"""
  domains: ListFilterInputTypeOfDomainFilterInput
}


input AffiliateApplicationStatusOperationFilterInput {
  eq: AffiliateApplicationStatus
  neq: AffiliateApplicationStatus
  in: [AffiliateApplicationStatus!]
  nin: [AffiliateApplicationStatus!]
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
  contact: ContactFilterInput
  groupId: ComparableInt64OperationFilterInput
  group: GroupFilterInput
  accountId: ComparableInt64OperationFilterInput
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
  domain: DomainFilterInput
  evaluated: ComparableInt32OperationFilterInput
  performed: ComparableInt32OperationFilterInput
  pending: ComparableInt32OperationFilterInput
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
  subscriber: ContactFilterInput
  journeyId: ComparableInt64OperationFilterInput
  journey: JourneyFilterInput
}


input JourneySubscriberEventFilterInput {
  and: [JourneySubscriberEventFilterInput!]
  or: [JourneySubscriberEventFilterInput!]
  id: ComparableInt64OperationFilterInput
  instanceId: StringOperationFilterInput
  subscriberId: ComparableInt64OperationFilterInput
  subscriber: ContactFilterInput
  journeyId: ComparableInt64OperationFilterInput
  journey: JourneyFilterInput
  nodeId: ComparableInt64OperationFilterInput
  previousNodeIds: ListComparableInt64OperationFilterInput
  nextNodeId: ComparableNullableOfInt64OperationFilterInput
  executed: BooleanOperationFilterInput
  skipped: BooleanOperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  processedUtc: ComparableNullableOfDateTimeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  isDeleted: BooleanOperationFilterInput
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


input ListFilterInputTypeOfDomainFilterInput {
  all: DomainFilterInput
  none: DomainFilterInput
  some: DomainFilterInput
  any: Boolean
}


input ListFilterInputTypeOfSubscriberSiteNotificationFilterInput {
  all: SubscriberSiteNotificationFilterInput
  none: SubscriberSiteNotificationFilterInput
  some: SubscriberSiteNotificationFilterInput
  any: Boolean
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


input SubscriberSiteNotificationFilterInput {
  and: [SubscriberSiteNotificationFilterInput!]
  or: [SubscriberSiteNotificationFilterInput!]
  id: ComparableInt64OperationFilterInput
  createdUtc: ComparableDateTimeOperationFilterInput
  accountId: ComparableInt64OperationFilterInput
  siteNotificationId: ComparableInt64OperationFilterInput
  siteNotification: JourneyNFilterInput
  subscriberId: ComparableInt64OperationFilterInput
  subscriber: ContactFilterInput
  isDeleted: BooleanOperationFilterInput
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


input UpdateActionEvaluateGoalInput {
  continueJourney: Boolean
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  goalId: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateActionEvaluateGoalInput {
  continueJourney: Boolean
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  goalId: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionConvertContactInput {
  conversionId: String
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateActionConvertContactInput {
  conversionId: String
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionAddContactNoteInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  noteText: String
}


input CreateActionAddContactNoteInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  noteText: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateJourneyInput {
  """*Max length: 320*"""
  defaultFromEmail: String
  """*Max length: 50*"""
  defaultFromName: String
  """*Max length: 1000*"""
  description: String
  id: String!
  """*Max length: 100*"""
  name: String
  reEntryType: JourneyReEntryType
  """*Max length: 50*"""
  tags: [String!]
}


input CreateJourneyInput {
  audienceId: String!
  """*Max length: 1000*"""
  description: String
  """*Max length: 100*"""
  name: String!
  reEntryType: JourneyReEntryType
  referenceJourneyId: String
  """*Max length: 50*"""
  tags: [String!]
}


input PreviewContentBlockInput {
  audienceId: String
  contactId: String
  id: String!
  mockContact: MockContactInput
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
}


input UpdateContentBlockInput {
  contentBodies: [UpdateContentBlockContentInput!]
  """255 character limit"""
  description: String
  folderId: String
  id: String!
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """100 character limit"""
  name: String
  tags: [String!]
}


input CreateContentBlockInput {
  contentBodies: [CreateContentBlockContentInput!]!
  """*Max length: 255*"""
  description: String
  editorType: EditorType!
  folderId: String!
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """*Max length: 100*"""
  name: String!
  """50 character limit"""
  tags: [String!]
  type: ContentBlockType!
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
  copyFirstContentVariationContent: Boolean
  previousCampaignId: String
  referenceTemplateId: String
  """Only used for journey campaigns."""
  templateType: TemplateType
}


input SelectMvWinnerInput {
  campaignId: String!
  combinationId: Int!
}


input ScheduleCampaignInput {
  id: String!
  sendsUtc: [DateTime!]!
  timeJumper: Boolean
}


input UpdateCampaignInput {
  analyticParams: [ParamNameValueInput!]
  audienceFilters: [UpdateCampaignAudienceInput!]
  audienceId: String
  contentCount: Int
  customHeaders: [ParamNameValueInput!]
  """*Max length: 255*"""
  description: String
  enableAnalytics: Boolean
  """Enable auto retry using account's auto retry rule (if plan allows)"""
  enableAutoRetry: Boolean
  fromCount: Int
  froms: [FromInput!]
  globalPreheaderInd: Boolean
  id: String!
  includeEntireAudience: Boolean
  """
  Campaign can be archived if it is not currently in the send process. Can be archived if send status is NOT_SCHEDULED, STOPPED, COMPLETED, SYSTEM_STOPPED, or READY_TO_SEND.
  """
  isArchived: Boolean
  isOperational: Boolean
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes).
  """
  language: String
  mvGoal: MvGoal
  mvHypothesis: String
  mvTestPct: Float
  """
  Used to determine time of day to send winning campaign. Date portion of value will be ignored.
  """
  mvWinSendUtc: DateTime
  mvWinSendWait: Int
  mvWinSendWaitType: MvTimeMeasurement
  mvWinType: MvWinType
  mvWinWait: Int
  mvWinWaitType: MvTimeMeasurement
  """*Max length: 100*"""
  name: String
  """*Max length: 320*"""
  replyEmail: String
  """Only used for RSS campaigns"""
  rssCheckType: RssCheckType
  """Only used for RSS campaigns"""
  rssSendFrequency: String
  """Only used for RSS campaigns"""
  rssSendIfNoNewOrUpdatedItems: Boolean
  """Only used for RSS campaigns"""
  rssUrl: String
  sendScheduleType: SendScheduleType
  """
  If send time count is greater than one, all other variation counts (subjects, froms, and content) need to be set to 1.
  """
  sendTimeCount: Int
  subjectCount: Int
  subjects: [SubjectInput!]
  """*Max length: 50*"""
  tags: [String!]
  timeJumper: Boolean
  trackBrowser: Boolean
  trackDomains: Boolean
  trackHardware: Boolean
  trackLinkClicks: Boolean
  trackLocation: Boolean
  trackOpens: Boolean
  trackReplies: Boolean
}


input SendCampaignTestInput {
  audienceGroups: [String!]
  audienceId: String
  contactId: String
  """Defaults to the first content variation in the Campaign if not passed."""
  contentVariationId: String
  """
  Defaults to the first from in the Campaign or a Tarvent default if not passed.
  """
  from: FromInput
  id: String!
  mockContact: MockContactInput
  """
  Value can be a single email address or a comma delimited list of email addresses.
  """
  recipients: String
  """Defaults to the first subject in the Campaign if not passed."""
  subject: SubjectInput
}


input RenderContentSourceInput {
  campaignId: String!
  contentVariationId: String!
}


type CampaignContentSource {
  contentBodies: [ContentBody!]!
}


input PreviewCampaignInput {
  audienceId: String
  campaignId: String!
  contactId: String
  contentVariationId: String
  fromName: String
  mockContact: MockContactInput
  preheader: String
  subject: String
}


type CampaignPreview {
  contentBodies: [ContentBody!]!
  fromName: String
  preheader: String
  subject: String
}


input CreateCampaignInput {
  """
  Sets target audience groups and/or segments. If including the entire audience, only excluded groups or segments are allowed.
  """
  audienceFilters: [UpdateCampaignAudienceInput!]
  """
  Defines which audience will be used to select merge tags and contacts from.
  """
  audienceId: String!
  """Description of campaign. *Max length: 255"""
  description: String
  """
  Indicates if auto-retry rules should be enabled. This is for future use only.
  """
  enableAutoRetry: Boolean
  """
  If set, this will override target audience settings when copying from a previous campaign
  """
  includeEntireAudience: Boolean
  """Indicates this is a multivariate campaign."""
  isMultivariate: Boolean
  """
  Language used to encode the content of the campaign. [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes).
  """
  language: String
  """Campaign name. Max length: 100"""
  name: String!
  """System use for RSS only"""
  parentId: String
  """
  Campaign that will be copied from to create the campaign. This supersedes the ReferenceTemplateId
  """
  previousCampaignId: String
  """Template that will be used for the campaign"""
  referenceTemplateId: String
  """
  Email address used for replies. If this is specified, Tarvent cannot process or filter remote bounces, out-of-office emails, and other emails you may not want to receive. However, the recipient will see a more friendly reply-to email address. Max length: 320
  """
  replyEmail: String
  """Tags to be associated with the campaign. Max length: 100 per tag"""
  tags: [String!]
  """Indicates the type of campaign and editor that will be used."""
  type: CampaignType!
}


input PreviewArticleInput {
  audienceId: String
  contactId: String
  id: String!
  mockContact: MockContactInput
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
}


type FileContent {
  content: String
  mimeType: MimeType!
}


input UpdateArticleInput {
  contentBodies: [UpdateArticleContentInput!]
  defaultLayout: ArticleDefaultLayout
  """*Max length: 255*"""
  description: String
  folderId: String
  id: String!
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """*Max length: 100*"""
  name: String
  """50 character limit"""
  tags: [String!]
  """*Max length: 100*"""
  title: String
}


input CreateArticleInput {
  contentBodies: [CreateArticleContentInput!]
  defaultLayout: ArticleDefaultLayout
  """*Max length: 255*"""
  description: String
  folderId: String!
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """*Max length: 100*"""
  name: String!
  """50 character limit"""
  tags: [String!]
  """*Max length: 100*"""
  title: String
}


input UpdateFileInput {
  folderId: String
  id: String!
  name: String
  tags: [String!]
}


input CreateUrlFileInput {
  fileUrl: String!
  folderId: String!
  """100 character limit. If not passed, the file name will be used."""
  name: String
  """Defaults to false if not passed."""
  overwrite: Boolean
  """*Max length: 50*"""
  tags: [String!]
}


input UpdateFolderInput {
  id: String!
  """100 character limit"""
  name: String
  parentId: String
}


input CreateFolderInput {
  """*Max length: 50*"""
  name: String!
  parentId: String!
}


input UpdateLandingPageInput {
  configurationJson: String
  description: String
  faviconUrl: String
  id: String!
  isGdprEnabled: Boolean
  metaDescription: String
  metaKeywords: String
  name: String
  pathName: String
  scriptingBlock: String
  shareImageUrl: String
  status: ValidStatus
  tags: [String!]
  title: String
  translations: UpdateTranslationsInput
}


input CreateLandingPageInput {
  """*Max length: 255*"""
  description: String
  """*Max length: 100*"""
  name: String!
  """*Max length: 100*"""
  pathName: String
  previousLandingPageId: String
  referenceLandingPageId: String
  """*Max length: 50*"""
  tags: [String!]
}


input UpdateSurveyInput {
  configurationJson: String
  description: String
  endUtc: DateTime
  faviconUrl: String
  id: String!
  isGdprEnabled: Boolean
  metaDescription: String
  metaKeywords: String
  name: String
  pathName: String
  scriptingBlock: String
  shareImageUrl: String
  startUtc: DateTime
  status: ValidStatus
  submitAction: UpdateSubmitActionInput
  tags: [String!]
  title: String
  """Only used when survey is not associated with an audience."""
  translations: UpdateTranslationsInput
}


input CreateSurveyInput {
  audienceId: String
  """*Max length: 255*"""
  description: String
  """*Max length: 100*"""
  name: String!
  """*Max length: 100*"""
  pathName: String
  previousSurveyId: String
  referenceSurveyId: String
  """*Max length: 50*"""
  tags: [String!]
}


input DeleteQuestionInput {
  id: String!
  parentId: String!
}


input UpdateQuestionInput {
  allowOther: Boolean
  answers: [QuestionAnswerInput!]
  backgroundPattern: String
  boldCategoryText: Boolean
  categories: [QuestionCategoryInput!]
  categoryBackground: String
  content: String
  contentStyles: UpdateFormQuestionStylesInput
  """*Max length: 300*"""
  defaultValue: String
  displayOrder: Int
  id: String!
  matrixHeaderBackground: String
  maxNbr: Decimal
  """*Max length: 100*"""
  maxRatingTitle: String
  maxRatingValue: Int
  maxUtc: DateTime
  minNbr: Decimal
  """*Max length: 100*"""
  minRatingTitle: String
  minRatingValue: Int
  minUtc: DateTime
  orientation: QuestionOrientation
  parentId: String!
  placeholder: String
  preferredAnswers: [String!]
  """*Max length: 50*"""
  prefix: String
  prefixContent: String
  prefixType: String
  """*Max length: 50*"""
  ratingColor: String
  ratingCount: Int
  ratingIconType: RatingIconType
  ratingType: RatingType
  required: Boolean
  """*Max length: 100*"""
  sourceName: String
  sourceType: QuestionSourceType
  """*Max length: 50*"""
  suffix: String
  suffixContent: String
  suffixType: String
  """*Max length: 255*"""
  text: String
}


input CreateQuestionInput {
  allowOther: Boolean
  answers: [QuestionAnswerInput!]
  backgroundPattern: String
  boldCategoryText: Boolean
  categories: [QuestionCategoryInput!]
  categoryBackground: String
  content: String
  contentStyles: FormQuestionStylesInput
  dataFieldId: String
  """*Max length: 300*"""
  defaultValue: String
  displayOrder: Int!
  matrixHeaderBackground: String
  maxNbr: Decimal
  """*Max length: 100*"""
  maxRatingTitle: String
  maxRatingValue: Int
  maxUtc: DateTime
  minNbr: Decimal
  """*Max length: 100*"""
  minRatingTitle: String
  minRatingValue: Int
  minUtc: DateTime
  orientation: QuestionOrientation
  parentId: String!
  placeholder: String
  preferredAnswers: [String!]
  prefixContent: String
  prefixType: String
  """*Max length: 50*"""
  ratingColor: String
  ratingCount: Int
  ratingIconType: RatingIconType
  ratingType: RatingType
  required: Boolean!
  """*Max length: 100*"""
  sourceName: String
  sourceType: QuestionSourceType
  suffixContent: String
  suffixType: String
  """*Max length: 255*"""
  text: String!
  type: QuestionType!
}


input DeleteFormInput {
  """Required when form type is not 'Survey'."""
  audienceId: String
  id: String!
}


input PreviewEmailInput {
  audienceId: String
  contactId: String
  emailType: EmailType!
  formId: String!
  mockContact: MockContactInput
}


input ExportFormSourceInput {
  """Required if type is not set to 'Survey' or 'LandingPage'."""
  audienceId: String
  id: String!
}


type FormSource {
  linkedSource: String!
  unlinkedSource: String!
}


input UpdateFormInput {
  audienceId: String
  configurationJson: String
  description: String
  endUtc: DateTime
  faviconUrl: String
  ftfFormEmail: FtfFormEmailInput
  id: String!
  isGdprEnabled: Boolean
  metaDescription: String
  metaKeywords: String
  name: String
  pathName: String
  scriptingBlock: String
  shareImageUrl: String
  startUtc: DateTime
  status: ValidStatus
  submitAction: UpdateSubmitActionInput
  tags: [String!]
  title: String
  translations: UpdateTranslationsInput
}


input CreateFormInput {
  audienceId: String!
  """*Max length: 255*"""
  description: String
  """*Max length: 100*"""
  name: String!
  """*Max length: 100*"""
  pathName: String
  previousFormId: String
  """*Max length: 50*"""
  tags: [String!]
  type: AudienceFormType!
}


input ResendDoiEmailInput {
  """
  Audience Id. If no contact list or criteria is passed, all pending contacts for the audience will be resent the Double Opt-In email to confirm their subscription.
  """
  audienceId: String!
  """
  Collection of contact ids. If contact Ids is provided, criteria will be ignored.
  """
  contactIds: [String!]
  """Criteria used to select contacts."""
  criteria: ConditionGroupInput
}


"""
Results of resending the Double Opt-in confirmation email to pending contacts
"""
type ResendDoiEmail {
  """Number of contacts selected to be sent the confirmation email"""
  contactCount: Int!
  """Number of contacts that failed to be sent confirmation email"""
  failCount: Int!
  """Number of contacts successfully sent the confirmation email"""
  sendCount: Int!
}


input DeleteBulkContactInput {
  """Audience id"""
  audienceId: String!
  """A list of contact IDs to delete. This supersedes and criteria passed."""
  contactIds: [String!]
  """Contact criteria"""
  criteria: ConditionGroupInput
  """Audience group or segment id"""
  groupId: String
}


enum BulkDeleteStatus {
  """The bulk request has been completed."""
  COMPLETED
  """
  The bulk request has partially completed due to time restrictions. Please resubmit the request to continue.
  """
  PARTIAL
}


input DeleteContactInput {
  audienceId: String!
  id: String!
}


input DeleteGroupContactInput {
  audienceId: String!
  groupId: String!
  id: String!
}


input CreateGroupContactInput {
  audienceId: String!
  groupId: String!
  id: String!
}


input ResendConfEmailInput {
  audienceId: String!
  id: String!
}


input ResetBounceCountsInput {
  audienceId: String
  """If not passed or set to null, all bounce stats will be reset to 0."""
  bounceStatType: BounceStatType
  emailAddress: String
  id: String
}


input UpdateContactStatusInput {
  audienceId: String
  emailAddress: String
  id: String
  status: ContactStatus!
}


input UpdateContactTagsInput {
  audienceId: String
  emailAddress: String
  id: String
  operator: ActionOperator!
  """*Max length: 50*"""
  tags: [String!]!
}


input UpdateContactInput {
  """*Value will be truncated at 100 characters*"""
  addressCountry: String
  """*Value will be truncated at 100 characters*"""
  addressLocality: String
  """*Value will be truncated at 100 characters*"""
  addressRegion: String
  audienceId: String
  """Needs to be in valid Ip format (000.000.000.000)"""
  contactIp: String
  """320 character limit"""
  email: String
  emailAddress: String
  """*Value will be truncated at 100 characters*"""
  firstName: String
  groupIds: [String!]
  id: String
  """
  Determines whether private groups will also be updated. For submissions from forms, this is typically false since the user can't see private groups.
  """
  ignorePrivateGroups: Boolean
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """*Value will be truncated at 100 characters*"""
  lastName: String
  latitude: Decimal
  longitude: Decimal
  """Needs to be in valid IPv4 format (000.000.000.000)"""
  optInIp: String
  """Needs to be in valid IPv4 format (000.000.000.000)"""
  optOutIp: String
  """Value will be truncated at 255 characters"""
  optOutReason: String
  optOutSource: OptOutSource
  optOutUtc: DateTime
  """*Value will be truncated at 15 characters*"""
  postalCode: String
  profile: [UpdateProfileFieldInput!]
  sendFormat: SendFormat
  """*Value will be truncated at 100 characters*"""
  streetAddress: String
  """*Value will be truncated at 50 characters*"""
  streetAddress2: String
  tags: [String!]
  """
  Must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to "Auto".
  """
  timeZone: String
}


input CreateContactInput {
  """*Value will be truncated at 100 characters*"""
  addressCountry: String
  """*Value will be truncated at 100 characters*"""
  addressLocality: String
  """*Value will be truncated at 100 characters*"""
  addressRegion: String
  """Defaults to add only."""
  audienceGroupManagementType: AudienceGroupManagementType
  audienceId: String!
  """Needs to be in valid Ip format (000.000.000.000)"""
  contactIp: String
  """*Max length: 320*"""
  email: String!
  """*Value will be truncated at 100 characters*"""
  firstName: String
  groupIds: [String!]
  """
  The value must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to *Auto*.
  """
  language: String
  """*Value will be truncated at 100 characters*"""
  lastName: String
  latitude: Decimal
  longitude: Decimal
  """Needs to be in valid Ip format (000.000.000.000)"""
  optInIp: String
  optInUtc: DateTime
  """Needs to be in valid Ip format (000.000.000.000)"""
  optOutIp: String
  """*Value will be truncated at 255 characters*"""
  optOutReason: String
  optOutSource: OptOutSource
  optOutUtc: DateTime
  """*Value will be truncated at 15 characters*"""
  postalCode: String
  profile: [CreateProfileFieldInput!]
  """Defaults to Multipart"""
  sendFormat: SendFormat
  """
  Skip double opt-in process. Only applies when the audience the contact is being added to requires double opt-in. Defaults to false.
  """
  skipDoubleOptIn: Boolean
  """*Value will be truncated at 100 characters*"""
  streetAddress: String
  """*Value will be truncated at 50 characters*"""
  streetAddress2: String
  """Defaults to add only."""
  tagManagementType: TagManagementType
  """*Max length: 50*"""
  tags: [String!]
  """
  The value must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to *Auto*.
  """
  timeZone: String
  """
  Update an existing contact if one already exists with same unique identifier. Defaults to false.
  """
  updateExisting: Boolean
}


input DeleteContactNoteInput {
  contactId: String!
  id: String!
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
  columns: [DataColumnInput!]!
  """*Max length: 320*"""
  confirmEmail: String!
  dataFileId: String!
  deleteArea: ImportDeleteArea
  delimiter: ValueDelimiter!
  groups: [String!]
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes).
  """
  language: String
  markUndeliverable: Boolean
  skipFirstRow: Boolean!
  unsubscribe: Boolean!
  update: Boolean!
}


input DeleteGroupInput {
  audienceId: String!
  deleteType: GroupDeleteType!
  id: String!
}


input UpdateGroupInput {
  audienceId: String!
  criteria: ConditionGroupInput
  """*Max length: 255*"""
  description: String
  id: String!
  isDynamic: Boolean
  isPublic: Boolean
  """*Max length: 100*"""
  name: String
}


input CreateGroupInput {
  audienceId: String!
  criteria: ConditionGroupInput
  """*Max length: 255*"""
  description: String
  isDynamic: Boolean!
  isPublic: Boolean!
  """*Max length: 100*"""
  name: String!
}


input CreateExportInput {
  allBehaviors: Boolean!
  allFields: Boolean!
  audienceId: String!
  behaviors: [ContactBehavior!]
  contactStatus: ContactStatus
  delimiter: ValueDelimiter!
  entireList: Boolean!
  fields: [String!]
  groupIds: [String!]
  """*Max length: 100*"""
  name: String!
  """*Max length: 320*"""
  notificationEmail: String!
}


input DeleteDataFieldCategoryInput {
  audienceId: String!
  id: String!
}


input UpdateDataFieldCategoryInput {
  audienceId: String!
  categoryName: String!
  id: String!
}


input CreateDataFieldCategoryInput {
  audienceId: String!
  categoryName: String!
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


input DeleteDataFieldInput {
  audienceId: String!
  id: String!
}


input UpdateDataFieldInput {
  audienceId: String!
  """*Max length: 50*"""
  category: String
  dataType: DataType
  """*Max length: 255*"""
  defaultValue: String
  """*Max length: 200*"""
  description: String
  id: String!
  isGdprField: Boolean
  isPublic: Boolean
  """*Max length: 50*"""
  labelText: String
  labelTranslations: LabelsInput
  maxNbr: Decimal
  maxUtc: DateTime
  """*Max length: 50*"""
  mergeTag: String
  minNbr: Decimal
  minUtc: DateTime
  required: Boolean
}


input CreateDataFieldInput {
  audienceId: String!
  """*Max length: 50*"""
  category: String
  dataType: DataType!
  """*Max length: 255*"""
  defaultValue: String
  """*Max length: 200*"""
  description: String
  isGdprField: Boolean!
  isPublic: Boolean!
  """*Max length: 50*"""
  labelText: String!
  labelTranslations: LabelsInput
  maxNbr: Decimal
  maxUtc: DateTime
  """*Max length: 50*"""
  mergeTag: String
  minNbr: Decimal
  minUtc: DateTime
  required: Boolean!
}


input DeleteAudienceSecurityRoleInput {
  audienceId: String!
  securityRoleId: String!
}


input CreateAudienceSecurityRoleInput {
  audienceId: String!
  securityRoleId: String!
}


input PreviewDoubleOptInInput {
  contactId: String
  id: String!
  mockContact: MockContactInput
}


type AudienceWebhook {
  apiKey: String!
  insertOnlyUrl: String!
  updateInsertUrl: String!
}


input UpdateAudienceInput {
  """*Max length: 100*"""
  addressCountry: String
  """*Max length: 100*"""
  addressLocality: String
  """*Max length: 100*"""
  addressRegion: String
  """*Max length: 255*"""
  companyName: String
  """*Max length: 320*"""
  defaultFromEmail: String
  """*Max length: 50*"""
  defaultFromName: String
  doubleOptIn: UpdateDoubleOptInInput
  """*Max length: 255*"""
  gdprDescription: String
  """*Max length: 255*"""
  gdprLegalTerms: String
  """*Max length: 100*"""
  gdprTitle: String
  id: String!
  """
  List of key fields used to generated a contact's unique identifier. Each value must be a valid system field merge tag or a datafield id.
  """
  keyFields: [String!]
  """*Max length: 100*"""
  name: String
  """*Max length: 25*"""
  phone: String
  """*Max length: 15*"""
  postalCode: String
  requireDoubleOptIn: Boolean
  """*Max length: 100*"""
  streetAddress: String
  """*Max length: 50*"""
  streetAddress2: String
  """*Max length: 50*"""
  tags: [String!]
}


input CreateAudienceInput {
  """*Max length: 100*"""
  addressCountry: String!
  """*Max length: 100*"""
  addressLocality: String!
  """*Max length: 100*"""
  addressRegion: String!
  """*Max length: 255*"""
  companyName: String!
  """*Max length: 255*"""
  gdprDescription: String
  """*Max length: 255*"""
  gdprLegalText: String
  """*Max length: 100*"""
  gdprTitle: String
  """*Max length: 100*"""
  name: String!
  """*Max length: 25*"""
  phone: String!
  """*Max length: 15*"""
  postalCode: String!
  securityRoleIds: [String!]
  """*Max length: 100*"""
  streetAddress: String!
  """*Max length: 50*"""
  streetAddress2: String
  """*Max length: 50*"""
  tags: [String!]
}


input SendTemplateTestInput {
  audienceGroups: [String!]
  contents: [SendTemplateTestContentInput!]
  """*Max length: 320*"""
  fromEmail: String
  """*Max length: 255*"""
  fromText: String
  """
  If an id is passed, the saved content for the template will be used in the test.
  """
  id: String
  """
  Value can be a single email address or a comma delimited list of email addresses.
  """
  recipients: String
  """*Max length: 500*"""
  subject: String!
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
}


input PreviewSystemTemplateInput {
  audienceId: String
  contactId: String
  mockContact: MockContactInput
  templateId: String
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
  """
  The type is only used if the template id is null or 0 and the type is not null.
  """
  type: TemplateType
}


input PreviewTemplateInput {
  audienceId: String
  contactId: String
  mockContact: MockContactInput
  templateId: String!
  transactionVariables: [KeyValuePairOfStringAndStringInput!]
}


type PreviewTemplateOutput {
  finalContent: String
  mimeType: MimeType
  preRenderJsonString: String
}


input UpdateTemplateInput {
  contentBodies: [UpdateTemplateContentInput!]
  """*Max length: 255*"""
  description: String
  id: String!
  """*Max length: 100*"""
  name: String
  """*Max length: 50*"""
  tags: [String!]
}


input CreateTemplateInput {
  description: String
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes).
  """
  language: String!
  listId: String
  """*Max length: 100*"""
  name: String!
  referenceTemplateId: String
  """*Max length: 50*"""
  tags: [String!]
  type: TemplateType
}


input CreateTransactionInput {
  """
  Object used to populate one-or more content types (ie. HTML, text, AMP, etc.) that will be sent as the body of the email.
  """
  content: TransactionContentInput!
  """
  Specify a name to group similar email types for better reporting. For example, 'order confirmations'. Max length: 100 characters
  """
  groupName: String
  """Object used to define various header-related settings."""
  header: TransactionHeaderInput!
  """
  Collection of meta data (aka reference data) used for both standard and custom report. Max length: Name: 50 characters, Value: 255 characters.
  """
  metadata: [NameValueInput!]
  """Collection of recipients that will receive the email"""
  recipients: [TransactionRecipientInput!]!
  """
  Settings that control various options and behaviors of a transactional email.
  """
  settings: TransactionSettingsInput!
  """
  Collection of one or more tags associated with a transaction for tag-based reporting. Max length per tag: 50 characters
  """
  tags: [String!]
  """
  Collection of dynamic data that will be merged into the content and/or header of the email based on the variable name. Max length: Name: 50 characters, Value: 50 characters.
  """
  variables: [NameValueInput!]
}


type TransactionResponse {
  emailAddress: String!
  errorCode: String!
  errorMsg: String!
  requestId: String!
  transactionId: String!
}


input DeleteTagInput {
  """50 character limit"""
  tagName: String!
}


input UpdateTagInput {
  """50 character limit"""
  newTagName: String!
  """50 character limit"""
  oldTagName: String!
}


input CreateTagInput {
  """50 character limit"""
  tagName: String!
}


input CreateUserInviteInput {
  """
  Used for dynamic branding/authentication within the invite email. *Max length: 100*
  """
  cId: String
  """*Max length: 320*"""
  emailAddress: String!
  """*Max length: 100*"""
  firstName: String!
  """
  Indicates whether the user should receive account level communication. Defaults to false.
  """
  isAccountContact: Boolean
  """
  Indicates whether the user is a billing contact for the account. Defaults to false.
  """
  isBillingContact: Boolean
  """
  Indicates whether the user is a partner user (not employee) for the account. Defaults to false.
  """
  isPartner: Boolean
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """*Max length: 100*"""
  lastName: String!
  """*Max length: 255*"""
  message: String
  securityRoleIds: [String!]!
}


input DeleteAccountUserInput {
  accountId: String!
  id: String!
}


input RequestAccountAccessInput {
  """*Max length: 320*"""
  adminEmailAddress: String!
  """*Max length: 255*"""
  message: String
}


input UpdateUserInput {
  """*Max length: 100*"""
  firstName: String
  id: String!
  isAccountContact: Boolean
  isActive: Boolean
  isBillingContact: Boolean
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes) or set to "Auto".
  """
  language: String
  """*Max length: 100*"""
  lastName: String
  """Notification preferences for the account id passed"""
  notificationPreferences: [UserNotificationPreferenceInput!]
  """*Max length: 25*"""
  phoneNumber: String
  theme: AppTheme
  """
  Must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to "Auto".
  """
  timezone: String
}


"""Input type for *UpdatePaymentMethod*"""
input UpdatePaymentMethodInput {
  """
  Billing address information used for future payments using this payment method.
  """
  billingAddress: UpdateBillingAddressInput
  """
  Credit card information used for future payments using this payment method. Will only be used if payment method is a Credit Card.
  """
  creditCardInfo: UpdateCreditCardInfoInput
}


"""Input type for *CreatePaymentMethod*"""
input CreatePaymentMethodInput {
  """
  Billing address information used for future payments using this payment method. Refer to the **updatePaymentMethod** mutation for information on updating the payment method if the billing address changes.
  """
  billingAddress: AddBillingAddressInput!
  """
  Credit card information used for future payments using this payment method. Refer to the **updatePaymentMethod** mutation for information on updating the payment method.
  """
  creditCardInfo: AddCreditCardInfoInput!
}


type AddOnPriceSummary {
  creditPrice: Float!
  credits: Int!
  effectiveUtc: DateTime!
  id: String
  """Only set for Transaction Email add-on"""
  storageDays: Int!
  """Only set for Transaction Email add-on"""
  storageDaysPrice: Float!
  totalPrice: Float!
  type: AddOnType!
}


"""Summary of estimate results."""
type Estimate {
  """Collection of addons included with plan charges."""
  addOns: [AddOnPriceSummary!]!
  """Amount due after discounts and credits are applied."""
  amountDue: Float!
  """Collection of coupons applied."""
  coupons: [EstCoupon!]!
  """Total credits applied."""
  creditApplied: Float!
  """Currency code used for payment."""
  currencyCode: String!
  """Information about current plan."""
  currentPlan: PlanInfo
  """Total discounts for plan with addons."""
  discountAmount: Float!
  """True when change is applied at end of term."""
  isNextInvoice: Boolean!
  """True if coupon code provided is valid."""
  isValidCoupon: Boolean!
  """Information about next plan."""
  nextPlan: PlanInfo!
  """Type of plan change"""
  planChange: PlanChangeType!
  """Total cost before discounts are applied."""
  subtotal: Float!
  """Total cost after discounts are applied."""
  totalAmount: Float!
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
  ID of group of associate user with. Refer to the **accountGroups** query to get a list of groups. *Max length: 19*
  """
  groupId: String!
  """
  ID of user to associate. Refer to the **Users** query to get a list of users associated with the account. *Max length: 19*
  """
  id: String!
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
  """
  List of audience IDs that the group will have access to. Refer to the **audiences** query to retrieve all audiences for the account.
  """
  audiences: [String!]
  """
  Internal description typically used to define the purpose of the role. *Max length: 255*
  """
  description: String
  id: String!
  """Unique name to reference the role. *Max length: 100*"""
  name: String
  """
  List of permissions, in the form of permission key names, that will be granted to the role. The keys are defined by the system. Refer to the **permissions** query to retrieve permission keys.
  """
  permissionKeys: [String!]
}


"""Input type for *CreateAccountGroup*"""
input CreateSecurityRoleInput {
  """
  List of audience IDs that the group will have access to. Refer to the **audiences** query to retrieve all audiences for the account.
  """
  audiences: [String!]
  """
  Internal description typically used to define the purpose of the group. *Max length: 255*
  """
  description: String
  """Unique name to reference the group. *Max length: 100*"""
  name: String!
  """
  List of permissions, in the form of permission key names, that will be granted to the group. The keys are defined by the system. Refer to the **permissions** query to retrieve permission keys.
  """
  permissionKeys: [String!]!
}


input CheckAliasInput {
  alias: String!
}


"""Input type for *UpdateAccount*"""
input UpdateAccountInput {
  """Address country associated with the account. *Max length: 100*"""
  addressCountry: String
  """Address locality associated with the account. *Max length: 100*"""
  addressLocality: String
  """Address region associated with the account. *Max length: 100*"""
  addressRegion: String
  """Unique alias for Tarvent application. *Max length: 50*"""
  applicationAlias: String
  """
  Used internally to store the Google fonts used for a specific account that are outside the standard Google fonts supported by Tarvent.
  """
  googleFonts: String
  """
  Maximum amount of hard bounces a contact can have before being marked as undeliverable.
  """
  hardBounceLimit: Int
  """Industry that the account's business operates within."""
  industry: Int
  """
  Must be a valid [BCP 47 language tag](https://gist.github.com/typpo/b2b828a35e683b9bf8db91b5404f1bd1) or set to "Auto".
  """
  language: String
  """Unique name to reference the account. *Max length: 255*"""
  name: String
  """ID of user who owns the account. *Max length: 255*"""
  ownerId: String
  """
  Unique alias for pages urls (pages, surveys, and forms).  *Max length: 50*
  """
  pagesAlias: String
  """Phone number associated with the account. *Max length: 25*"""
  phone: String
  """Postal code associated with the account. *Max length: 15*"""
  postalCode: String
  """
  Maximum amount of soft bounces a contact can have before being marked as undeliverable.
  """
  softBounceLimit: Int
  """Street address associated with the account. *Max length: 100*"""
  streetAddress: String
  """Street address 2 associated with the account. *Max length: 50*"""
  streetAddress2: String
  """
  Must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to "Auto".
  """
  timezone: String
  """Unique alias for tracking urls. *Max length: 50*"""
  trackingAlias: String
  """URL of the business website. *Max length: 255*"""
  website: String
}


"""Input type for *CreateAccount*"""
input CreateAccountInput {
  """Address country associated with the account. *Max length: 100*"""
  addressCountry: String!
  """Address locality associated with the account. *Max length: 100*"""
  addressLocality: String!
  """Address region associated with the account. *Max length: 100*"""
  addressRegion: String!
  """Affiliate ID to get credit for the account"""
  affiliateId: String
  facts: String
  """Industry that the account's business operates within."""
  industry: Int!
  """Unique name to reference the account. *Max length: 255*"""
  name: String!
  """Internal Use only"""
  pAC: String
  """Internal Use only"""
  partnerId: String
  """Phone number associated with the account. *Max length: 25*"""
  phone: String
  """Postal code associated with the account. *Max length: 15*"""
  postalCode: String!
  """Street address associated with the account. *Max length: 100*"""
  streetAddress: String!
  """Street address 2 associated with the account. *Max length: 50*"""
  streetAddress2: String
  """
  Must be a valid [IANA timezone](https://www.iana.org/time-zones) or set to "Auto".
  """
  timezone: String
  """URL of the business website. *Max length: 255*"""
  website: String
}


type SyncEligibilityResult {
  canSync: Boolean!
  issues: [SyncIssue!]!
  reason: String
}


"""Represents a sync job for an account integration"""
type AccountIntegrationSyncJob {
  """The account integration this sync job relates to"""
  accountIntegration: AccountIntegration
  """ID of the account integration this sync job relates to"""
  accountIntegrationId: ID!
  """When the sync job was completed"""
  completedUtc: DateTime
  """Number of contacts created during sync"""
  contactsCreated: Int!
  """Number of contacts that failed to sync"""
  contactsFailed: Int!
  """Total number of contacts processed during sync"""
  contactsProcessed: Int!
  """Number of contacts skipped during sync"""
  contactsSkipped: Int!
  """Number of contacts updated during sync"""
  contactsUpdated: Int!
  """Who created this sync job"""
  createdBy: String
  """When this sync job was created"""
  createdUtc: DateTime!
  """Duration of the sync job in milliseconds"""
  durationMs: Long
  """Error message if the sync job failed"""
  errorMessage: String
  """Unique identifier for this sync job"""
  id: ID!
  """Whether the sync job completed successfully"""
  isCompleted: Boolean!
  """Whether the sync job failed"""
  isFailed: Boolean!
  """Whether the sync job is currently running"""
  isRunning: Boolean!
  """When this sync job was modified"""
  modifiedUtc: DateTime!
  """When the sync job was started"""
  startedUtc: DateTime
  """Current status of the sync job"""
  status: SyncJobStatus!
  """Success rate as a percentage"""
  successRate: Decimal
  """List of sync errors that occurred during this job"""
  syncErrors: [AccountIntegrationSyncError]
  """Mode of sync (incremental or full)"""
  syncMode: SyncMode!
  """Type of sync that was performed"""
  syncType: SyncType!
}


"""
Configuration for mapping a field between integration partner and Tarvent
"""
type FieldMapping {
  """Unique identifier of the field in the integration partner system"""
  integrationFieldId: String!
  """Display name of the field in the integration partner system"""
  integrationFieldName: String!
  """Whether this field is required in the integration partner system"""
  integrationFieldRequired: Boolean!
  """
  Data type of the field in the integration partner system (e.g., Text, Number, Date)
  """
  integrationFieldType: String!
  """
  Whether Tarvent is the master for this field. If true, Tarvent updates integration partner. If false, integration partner updates Tarvent.
  """
  isTarventMaster: Boolean!
  """Merge tag of the corresponding Tarvent field data field"""
  tarventMergeTag: String!
}


type IntegrationCustomField {
  id: String!
  isRequired: Boolean!
  name: String!
  type: String!
}


type tvaf {
  kc: UUID!
  limit: String
}


type AffiliateAccountStat {
  """Number of active accounts as of this day"""
  activeAccounts: Int!
  """Number of affiliate link clicks as of this day"""
  clicks: Int!
  """Number of lost accounts on this day"""
  lostAccounts: Int!
  """Number of new accounts create on this day"""
  newAccounts: Int!
  """Number of pending accounts as of this day"""
  pendingAccounts: Int!
  """Date of statistic"""
  statDate: DateTime!
}


type AffiliateStats {
  """Number of active account, which includes trial accounts"""
  activeAccounts: Int!
  """Affiliate commission level with 1 being the lowest."""
  affiliateLevel: Int!
  """Number of affiliate link clicks received."""
  clicks: Int!
  """
  Commission that can be paid when payment is requested for the reporting month.
  """
  commissionPayable: Float!
  """
  Current month's MRR (monthly recurring revenue for all accounts, including pending.
  """
  currentMonthMrr: Float!
  """
  Last month's MRR (monthly recurring revenue for all accounts, including pending.
  """
  lastMonthMrr: Float!
  """Amount of last commission payment to the affiliate."""
  lastPaymentAmount: Float!
  """Date of last commission payment to the affiliate."""
  lastPaymentDate: DateTime
  """
  Commission that will be payable after the 60-day hold period for the reporting month.
  """
  pendingCommissionPayable: Float!
  """Total commission earned over the life of the affiliate's account."""
  totalCommission: Float!
  """Total commission that can be paid when payment is requested."""
  totalCommissionPayable: Float!
  """Total commission that will be payable after the 60-day hold period."""
  totalPendingCommissionPayable: Float!
}


enum ReportType {
  """Accounts newly created"""
  NEW_ACCOUNTS
  """Accounts that have closed"""
  LOST_ACCOUNTS
  """Accounts within the waiting period before commission can be paid"""
  PENDING_ACCOUNTS
  """Active accounts"""
  ACTIVE_ACCOUNTS
}


type AffiliateAccount {
  """Number of days since account was created"""
  accountAge: Int!
  """Account closed date in UTC"""
  closedUtc: DateTime!
  """Account create date in UTC"""
  createdUtc: DateTime!
  """Affiliate Account ID"""
  id: String!
}


enum InvoiceStatus {
  """Invoice paid in full"""
  PAID
  """Invoice pending payment processing"""
  PENDING
  """Payment for invoice failed"""
  PAYMENT_FAILED
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
  createdUtc: DateTime!
  deletedUtc: DateTime
  downloadUrl: String
  id: String!
  status: CustomReportJobStatus!
}


type AccountInvoiceLineItemInfo {
  """Total amount due for this line item"""
  amount: Float!
  """Service period end date/time"""
  billPeriodEndUtc: DateTime!
  """Service period start date/time"""
  billPeriodStartUtc: DateTime!
  """Description of service being invoiced for"""
  description: String!
  """Indicates whether line item is a discount or not"""
  isDiscount: Boolean!
  """Number of items for the respective service type"""
  qty: Float!
  """Service type fee rate"""
  rate: Float!
}


"""Service type associated with a service plan"""
enum ServiceType {
  """Email marketing service"""
  EMAIL_MARKETING
  EMAIL_MARKETING_OVERAGE
  """Pay-As-You-Go email marketing service"""
  EMAIL_MARKETING_PREPAY
  """Monthly transactional email marketing service"""
  TRANSACTION
  TRANSACTION_ADD_ON
  TRANSACTION_ADD_ON_OVERAGE
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
  SMS_CREDITS_ADDON
  CUSTOM_REPORT
}


input GetSavedSearchInput {
  audienceId: String!
  id: String!
}


type SavedSearch {
  criteria: ConditionGroup!
  description: String!
  id: String!
  name: String!
}


"""Subscriber list scales associated with a service plan"""
type ServicePlanScale {
  """Scale fee"""
  fee: Float!
  """Unique service plan scale ID"""
  id: String!
  """Maximum limit of scale"""
  maxLimit: Int!
  """Minimum limit of scale"""
  minLimit: Int!
}


input GetJourneyConversionContactsInput {
  endUtc: DateTime
  id: String!
  journeyId: String!
  minuteOffset: Int
  startUtc: DateTime
}


input GetJourneyGoalContactsInput {
  endUtc: DateTime
  id: String!
  journeyId: String!
  minuteOffset: Int
  startUtc: DateTime
}


input GetJourneySiteNotificationInput {
  audienceId: String!
  id: String!
}


type JourneySiteNotificationInfo {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  id: String!
  journeyId: String!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
}


input GetJourneyNodeInput {
  id: String!
  journeyId: String!
}


type JourneySiteNotificationStats {
  contactCount: Int!
  dailyStats: [JourneySiteNotificationDailyStats!]
  description: String
  id: String!
  modifiedUtc: DateTime!
  name: String
  viewCount: Int!
}


type JourneySiteNotification {
  contactCount: Int!
  description: String
  dismissedCount: Int!
  id: String!
  modifiedUtc: DateTime!
  name: String
  viewCount: Int!
}


type JourneyActivity {
  count: Int!
  eventUtc: DateTime!
}


input GetJourneyCampaignStatsInput {
  campaignId: String
  combinationId: String
  endUtc: DateTime!
  id: String!
  minuteOffset: Int!
  startUtc: DateTime!
}


type JourneyCampaignStats {
  campaignId: String
  clickToOpenPct: Float!
  engagementScore: Float!
  engagementScoreAvg: Float!
  nodeId: String
  nodeModifiedUtc: DateTime!
  nodeName: String
  senderReputation: Float!
  senderReputationAvg: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalClicks: Int!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  totalProfile: Int!
  totalReplies: Int!
  totalSTF: Int!
  totalSTFOptIn: Int!
  totalSent: Int!
  totalSocialShare: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  uniqueSTF: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  uniqueSTFPct: Float!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  uniqueSuppressed: Int!
}


input JourneyStatsInput {
  endUtc: DateTime!
  id: String!
  minuteOffset: Int!
  startUtc: DateTime!
}


type JourneyContactStats {
  active: Int!
  activeRate: Float!
  completed: Int!
  completionRate: Float!
  entries: Int!
  exitRate: Float!
  exited: Int!
}


input GetAllJourneyContactsInput {
  """
  Filter results to only return contacts with an email address that contains all or part of an email address.
  """
  emailAddress: String
  """End date based on the Contact's journey entry date/time"""
  endUtc: DateTime
  """Journey Id"""
  id: String!
  """
  Minute offset of local time to UTC time. This is used to offset the log dates.
  """
  minuteOffset: Int
  """
  Filter results to only return contacts that have passed through a specific node.
  """
  nodeId: String
  """Number of page to return. Default: 1"""
  page: Int
  """Number of rows to return at one time. Default: 50, Max: 100."""
  pageSize: Int
  """Sort direction of the sort column. Default: ASC"""
  sortDirection: SortDirection
  """
  Field to sort the results by. Values include EMAIL, CONTACTSTATUS, JOURNEYSTATUS, ENTRYUTC, ENTRYNODENAME, EXITUTC, EXITNODENAME, PREVIOUSNODENAME, NEXTNODENAME. Default: ENTRYUTC
  """
  sortField: String
  """Start date based on the Contact's journey entry date/time"""
  startUtc: DateTime
  """
  Filters results of contacts based on how they entered or exited a journey
  """
  traverseScope: JourneyContactTraverseScope!
}


type ReportJourneyContact {
  """Contact status"""
  contactStatus: ContactStatus!
  """Contact email address"""
  email: String!
  """
  Id of the entry trigger node that the contact entered the journey from. If there is no value, the contact was added to the journey manually.
  """
  entryNodeId: String
  """
  Name of the entry trigger node that the contact entered the journey from. If there is no value, the contact was added to the journey manually.
  """
  entryNodeName: String
  """
  Type of the entry trigger node that the contact entered the journey from. If there is no value, the contact was added to the journey manually.
  """
  entryNodeType: JourneyNodeType
  """Date the contact entered the journey"""
  entryUtc: DateTime!
  """
  Id of the exit trigger node that the contact entered the journey from. If there is no value, the contact was removed from the journey manually.
  """
  exitNodeId: String
  """
  Name of the exit trigger node that the contact entered the journey from. If there is no value, the contact was removed from the journey manually.
  """
  exitNodeName: String
  """
  Type of the exit trigger node that the contact entered the journey from. If there is no value, the contact was removed from the journey manually.
  """
  exitNodeType: JourneyNodeType
  """Date the contact exited the journey"""
  exitUtc: DateTime
  """Contact Id"""
  id: String!
  """Contact status in journey"""
  journeyStatus: JourneyContactStatus!
  """
  Id of the next node that the contact pass through. If there is no value, or the value is 0, then the contact has reached the end of the journey.
  """
  nextNodeId: String
  """
  Name of the next node that the contact pass through. If there is no value, or the value is 0, then the contact has reached the end of the journey.
  """
  nextNodeName: String
  """
  Type of the next node that the contact pass through. If there is no value, or the value is 0, then the contact has reached the end of the journey.
  """
  nextNodeType: JourneyNodeType
  """Current page of reporting data based on the number of rows per page."""
  pageNumber: Int!
  """
  Id of the previous node that the contact passed through. If there is no value, or the value is 0, then this was the first node in the journey after the entry trigger nodes.
  """
  previousNodeId: String
  """
  Name of the previous node that the contact passed through. If there is no value, then this was the first node in the journey after the entry trigger nodes.
  """
  previousNodeName: String
  """
  Type of the previous node that the contact passed through. If there is no value, then this was the first node in the journey after the entry trigger nodes.
  """
  previousNodeType: JourneyNodeType
  """Contact tags"""
  tags: [String!]!
  """
  Total number of reporting data pages based on the number of rows per page and total rows.
  """
  totalNbrPages: Int!
  """Total number of reporting data rows based on the criteria set."""
  totalRecords: Int!
}


type TransactionSoftwareStats {
  block: Int!
  blockContent: Int!
  blockSender: Int!
  clicks: Int!
  created: Int!
  declined: Int!
  delivered: Int!
  feedback: Int!
  hardBounce: Int!
  invalidEmail: Int!
  opens: Int!
  processed: Int!
  rating: Int!
  requests: Int!
  softBounce: Int!
  softDns: Int!
  softIp: Int!
  softSenderAuth: Int!
  software: SoftwareType!
  transactions: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueComplaints: Int!
  uniqueFeedback: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  uniqueOptOut: Int!
  uniqueRating: Int!
  uniqueViewOnline: Int!
  viewOnline: Int!
}


type TransactionDeviceStats {
  block: Int!
  blockContent: Int!
  blockSender: Int!
  clicks: Int!
  created: Int!
  declined: Int!
  delivered: Int!
  device: DeviceType!
  feedback: Int!
  hardBounce: Int!
  invalidEmail: Int!
  opens: Int!
  processed: Int!
  rating: Int!
  requests: Int!
  softBounce: Int!
  softDns: Int!
  softIp: Int!
  softSenderAuth: Int!
  transactions: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueComplaints: Int!
  uniqueFeedback: Int!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  uniqueOptOut: Int!
  uniqueRating: Int!
  uniqueViewOnline: Int!
  viewOnline: Int!
}


type TransactionPerformanceSoftwareStats {
  software: SoftwareType!
  totalClicks: Int!
  totalOpens: Int!
  uniqueClickPct: Float!
  uniqueClicks: Int!
  uniqueOpenPct: Float!
  uniqueOpens: Int!
}


type TransactionPerformanceDeviceStats {
  device: DeviceType!
  totalClicks: Int!
  totalOpens: Int!
  uniqueClickPct: Float!
  uniqueClicks: Int!
  uniqueOpenPct: Float!
  uniqueOpens: Int!
}


type TransactionPerformanceBounceStats {
  domain: String
  totalSent: Int!
  uniqueBlock: Int!
  uniqueBlockPct: Float!
  uniqueContentBlock: Int!
  uniqueContentBlockPct: Float!
  uniqueHardBounc: Int!
  uniqueHardBouncePct: Float!
  uniqueSenderBlock: Int!
  uniqueSenderBlockPct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  uniqueSoftDns: Int!
  uniqueSoftDnsPct: Float!
  uniqueSoftIp: Int!
  uniqueSoftIpPct: Float!
  uniqueSoftSenderAuth: Int!
  uniqueSoftSenderAuthPct: Float!
}


type TransactionPerformace {
  clickToOpenPct: Float!
  engagementScore: Float!
  senderReputation: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalClicks: Int!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  totalProfile: Int!
  totalReplies: Int!
  totalSTF: Int!
  totalSTFOptIn: Int!
  totalSent: Int!
  totalSocialShare: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  uniqueSTF: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  uniqueSTFPct: Float!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  uniqueSuppressed: Int!
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


"""Service plan credit blocks available for purchase"""
type ServicePlanCredit {
  """Fee to purchase block of credits"""
  fee: Float!
  """Unique credit block ID"""
  id: String!
  """Number of credits in block"""
  qty: Float!
}


input GetLandingPageStatsInput {
  campaignId: String
  endUtc: DateTime
  hourOffset: Int
  id: String!
  includeDetails: Boolean
  minuteOffset: Int
  startUtc: DateTime
}


input GetLandingPageActionStatsInput {
  campaignId: String
  endUtc: DateTime!
  hourOffset: Int
  id: String!
  minuteOffset: Int
  startUtc: DateTime!
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
  endUtc: DateTime
  hourOffset: Int
  id: String!
  includeDetails: Boolean
  minuteOffset: Int
  startUtc: DateTime
}


input GetSurveyActionStatsInput {
  campaignId: String
  endUtc: DateTime!
  hourOffset: Int
  id: String!
  minuteOffset: Int
  startUtc: DateTime!
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
  code: String!
  name: String!
}


type KeyValuePairOfStringAndStringValues {
  key: String!
  value: [String]!
}


input GetVideoThumbnailInput {
  imageIndex: Int!
  videoId: String!
  videoSource: VideoSource!
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
  endUtc: DateTime!
  hourOffset: Int
  minuteOffset: Int
  startUtc: DateTime!
}


type CampaignHistory {
  campaignHistoryStats: [CampaignHistoryStats!]!
  overviewStats: CampaignHistoryOverviewStats!
}


input GetCampaignContactEventTypeStatsInput {
  combinationId: String
  emailAddress: String
  eventType: EmailEventType!
  id: String!
  linkId: String
  page: Int!
  pageSize: Int!
  sortDirection: SortDirection
  sortField: String
}


type CampaignContactEventTypeStats {
  audienceId: String!
  contactId: String!
  emailAddress: String
  eventType: EmailEventType!
  pageNumber: Int!
  serverResponse: String
  status: ContactStatus!
  tags: String
  totalNbrPages: Int!
  totalRecords: Int!
}


type CampaignStats {
  campaignId: String
  clickToOpenPct: Float!
  engagementScore: Float!
  engagementScoreAvg: Float!
  senderReputation: Float!
  senderReputationAvg: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalClicks: Int!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  totalProfile: Int!
  totalReplies: Int!
  totalSTF: Int!
  totalSTFOptIn: Int!
  totalSent: Int!
  totalSocialShare: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  uniqueSTF: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  uniqueSTFPct: Float!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  uniqueSuppressed: Int!
}


type CampaignSocialShareStats {
  socialNetwork: SocialPlatform!
  totalNetworkShares: Int!
  totalNetworkSharesPct: Int!
  totalShares: Int!
  uniqueNetworkShares: Int!
  uniqueNetworkSharesPct: Int!
}


type CampaignSoftwareStats {
  allClicks: Int!
  allOpens: Int!
  software: SoftwareType!
  totalClicks: Int!
  totalClicksPct: Float!
  totalOpenPct: Float!
  totalOpens: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueOpenPct: Float!
  uniqueOpens: Int!
}


type CampaignDeviceStats {
  allClicks: Int!
  allOpens: Int!
  device: DeviceType!
  totalClicks: Int!
  totalClicksPct: Float!
  totalOpenPct: Float!
  totalOpens: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueOpenPct: Float!
  uniqueOpens: Int!
}


input CampaignStatsInput {
  combinationId: String
  """Only used for RSS campaigns"""
  endUtc: DateTime
  id: String!
  """Only used for RSS campaigns"""
  startUtc: DateTime
}


type CampaignBounceTypeStats {
  hBGeneral: Int!
  hBGeneralPct: Float!
  sBBlock: Int!
  sBBlockContent: Int!
  sBBlockContentPct: Float!
  sBBlockPct: Float!
  sBBlockSender: Int!
  sBBlockSenderPct: Float!
  sBDNS: Int!
  sBDNSPct: Float!
  sBGeneral: Int!
  sBGeneralPct: Float!
  sBIpBlock: Int!
  sBIpBlockPct: Float!
  sBSenderAuth: Int!
  sBSenderAuthPct: Float!
  totalBounces: Int!
}


input GetCampaignBounceTypeByDomainStatsInput {
  combinationId: String
  domain: String
  id: String!
}


type CampaignBounceTypeByDomainStats {
  domain: String
  domainBounces: Int!
  hBGeneral: Int!
  hBGeneralPct: Float!
  sBBlock: Int!
  sBBlockContent: Int!
  sBBlockContentPct: Float!
  sBBlockPct: Float!
  sBBlockSender: Int!
  sBBlockSenderPct: Float!
  sBDNS: Int!
  sBDNSPct: Float!
  sBGeneral: Int!
  sBGeneralPct: Float!
  sBIpBlock: Int!
  sBIpBlockPct: Float!
  sBSenderAuth: Int!
  sBSenderAuthPct: Float!
  totalBounces: Int!
}


input CampaignCombinationStatsInput {
  """Only used for Journey campaigns"""
  endUtc: DateTime
  id: String!
  """Only used for Journey campaigns"""
  minuteOffset: Int
  """Only used for Journey campaigns"""
  startUtc: DateTime
}


type CampaignCombinationStats {
  clickToOpenPct: Float!
  contentThumbnailUrl: String!
  engagementScore: Float!
  engagementScoreAvg: Float!
  fromEmail: String!
  fromName: String!
  id: String!
  senderReputation: Float!
  senderReputationAvg: Float!
  subject: String!
  totalBounce: Int!
  totalBouncePct: Float!
  totalClicks: Int!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  totalProfile: Int!
  totalReplies: Int!
  totalSTF: Int!
  totalSTFOptIn: Int!
  totalSent: Int!
  totalSocialShare: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  uniqueSTF: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  uniqueSTFPct: Float!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  uniqueSuppressed: Int!
}


"""RSS Feed Information and Items"""
type RSSFeed {
  """RSS feed categories."""
  categories: [String]
  """
  Indicates whether or not the feed has any changes since the last check.
  """
  changesDetected: Boolean!
  """RSS feed copyright information"""
  copyright: String
  """RSS feed description. Can contain HTML."""
  description: String
  """RSS feed description text. HTML is stripped out of value."""
  descriptionText: String
  """
  Collection of items from the RSS feed. Each item has standard fields (title, description, image url, etc.) as well as feed specific fields. Feed specific fields start with 'fd-'.
  """
  items: [RSSFeedItem]
  """RSS feed title"""
  title: String
  """Total count of items available in the RSS feed."""
  totalItemCount: Int!
}


type CampaignDataFields {
  dataFields: [DataField!]!
  hasGroups: Boolean!
  hasTags: Boolean!
}


type CampaignLink {
  entityName: String
  entityType: EntityType
  feedItem: Boolean!
  formType: FormType
  id: String!
  track: Boolean!
  url: String!
}


input GetContentBlockContentInput {
  id: String!
  versionId: Float
}


type ContentBlock {
  contentBodies: [ContentBlockContent!]
  createdUtc: DateTime!
  description: String
  editorType: EditorType
  folderId: String!
  id: String!
  language: String
  modifiedUtc: DateTime!
  name: String!
  publishedUtc: DateTime
  tags: [String!]
  type: ContentBlockType
  versionInfo: ContentBlockVersions!
}


input GetArticleContentInput {
  id: String!
  versionId: Float
}


type Article {
  contentBodies: [ArticleContent!]
  createdUtc: DateTime!
  defaultLayout: ArticleDefaultLayout
  description: String
  folderId: String!
  id: String!
  language: String
  modifiedUtc: DateTime!
  name: String!
  publishedUtc: DateTime
  tags: [String!]
  title: String
  versionInfo: ArticleVersions!
}


type File {
  id: String!
  name: String!
  publicUrl: String!
  size: Int!
  tags: [String!]!
  thumbnailUrl: String
  type: FileType!
  uploadedUtc: DateTime!
}


input GetQuestionInput {
  id: String!
  parentId: String!
}


input GetStatsInput {
  endUtc: DateTime
  hourOffset: Int
  id: String!
  includeDetails: Boolean
  minuteOffset: Int
  startUtc: DateTime
}


type StatsResponse {
  data: [Stat!]!
  summary: Stat
}


input GetActionStatsInput {
  endUtc: DateTime!
  hourOffset: Int
  id: String!
  minuteOffset: Int
  startUtc: DateTime!
}


type ActionStats {
  isCta: Boolean!
  name: String!
  totalCount: Int!
  uniqueCount: Int!
}


input GetFormInput {
  """Required if IsSurvey is set to 'false'."""
  audienceId: String
  id: String!
}


input AllSubscriberEventsByDayInput {
  """End date based on the Contact's activity date/time"""
  endUtc: DateTime!
  """Contact Id"""
  id: String!
  """Number of page to return. Default: 1"""
  page: Int
  """Number of rows to return at one time. Default: 50, Max: 100."""
  pageSize: Int
  """Start date based on the Contact's activity date/time"""
  startUtc: DateTime!
}


type SubscriberEventStats {
  """Combination ID: Only applicable to multivariate campaign events"""
  combinationId: String!
  """Id of entity that generated the event"""
  entityId: String!
  """Type of entity that generated the event"""
  entityType: EntityType!
  """Name of subject from which the event was created."""
  eventSubject: String
  """Event type"""
  eventType: EventType!
  """Event date in UTC time"""
  eventUtc: DateTime!
  """Bounce response from receiving mail server"""
  serverResponse: String
}


input GetAllContactsInput {
  audienceId: String!
  """Contact criteria"""
  criteria: ConditionGroupInput
  """Audience group or segment id"""
  groupId: String
}


input GetAllContactConversionsInput {
  audienceId: String!
  id: String!
}


input GetAllContactGoalsInput {
  audienceId: String!
  id: String!
}


input GetContactInput {
  audienceId: String
  emailAddress: String
  id: String
}


input GetImportInput {
  audienceId: String!
  id: String!
}


input GetGroupInput {
  audienceId: String!
  id: String!
  includeStats: Boolean
}


input GetExportInput {
  audienceId: String!
  id: String!
}


input GetAudienceStatsByDayInput {
  endUtc: DateTime!
  id: String!
  startUtc: DateTime!
}


input GetTemplateContentInput {
  id: String!
  versionId: Float
}


input GetTemplateTxVariablesInput {
  contentBodies: [GetTemplateTxVarContentInput!]
  """
  If a template id and content bodies are passed, the content bodies will be ignore and only transaction variables from the template will be returned.
  """
  id: String
}


enum JourneyGoalType {
  GLOBAL
  IN_FLOW
}


input StatsInput {
  endUtc: DateTime!
  startUtc: DateTime!
}


type AccountListGrowthStats {
  """Average for up to the last 6 months"""
  averageMonthlyGrowth: Float!
  growthThisMonth: Int!
}


"""Account level stats by plan type."""
type AccountOverallStats {
  """Engagement reputation for the account. This includes all plan types."""
  accountEngagementScore: Float!
  """Sender reputation for the account. This includes all plan types."""
  accountSenderReputation: Float!
  """Account level stats by add-on type."""
  addOns: [AccountPlanAddOnStats]
  """Engagement reputation for this plan."""
  engagementScore: Float!
  """Plan Id"""
  id: String
  """
  Item count for plan. For transaction plans this represents to total amount of sent transaction (To, CC, and BCC recipients). For email marketing this represents the max contact count in the date range sent
  """
  itemCount: Int!
  """Sender reputation for this plan."""
  senderReputation: Float!
  """Amount of storage for the account."""
  storageBytes: Int!
  """Plan type"""
  type: PlanType!
}


type SubmissionAnswer {
  answerText: String
  questionId: String!
}


type PaymentMethod {
  bankAccountInfo: PaymentMethodBankAccount
  creditCardInfo: PaymentMethodCreditCard
  paymentMethodType: PaymentMethodType!
}


type AccountEntity {
  entityId: String!
  entityName: String
  entityType: EntityType!
  entityTypeName: String
  modifiedUtc: DateTime!
  parentEntityId: String
  parentEntityName: String
}


input CreateActionSendEmailInput {
  deliveryWindow: DeliveryWindowInput
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  isMultivariate: Boolean
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionSendEmailInput {
  deliveryWindow: DeliveryWindowInput
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateActionSendNotificationEmailInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  notification: JourneyNodeNotificationInput
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionSendNotificationEmailInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  notification: JourneyNodeNotificationInput
}


input CreateActionSendSMSInput {
  deliveryWindow: DeliveryWindowInput
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionSendSMSInput {
  deliveryWindow: DeliveryWindowInput
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateActionSiteNotificationInput {
  """*Max length: 255*"""
  description: String
  domainId: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  notification: SiteNotificationInput
  path: String
  previousNodeIds: [String!]
  settings: SiteNotificationSettingsInput
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionSiteNotificationInput {
  """*Max length: 255*"""
  description: String
  domainId: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  notification: SiteNotificationInput
  path: String
  settings: SiteNotificationSettingsInput
}


input CreateActionUpdateContactGroupInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  """Comma delimited string of ids is supported as well as a single id."""
  groupId: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  operator: ActionOperator
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateContactGroupInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  """Comma delimited string of ids is supported as well as a single id."""
  groupId: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  operator: ActionOperator
}


input CreateActionUpdateContactProfileInput {
  """*Max length: 255*"""
  description: String
  fieldName: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  newValue: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateContactProfileInput {
  """*Max length: 255*"""
  description: String
  fieldName: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  newValue: String
}


input CreateActionUpdateContactStatusInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  newStatus: ContactStatus
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateContactStatusInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  newStatus: ContactStatus
}


input CreateActionUpdateContactTagInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  operator: ActionOperator
  previousNodeIds: [String!]
  """Comma delimited string of tags is supported as well as a tag."""
  tag: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateContactTagInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  operator: ActionOperator
  """Comma delimited string of tags is supported as well as a tag."""
  tag: String
}


input CreateActionUpdateFacebookAudienceInput {
  """*Max length: 255*"""
  description: String
  fbAdAccountId: String
  fbAudienceId: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  operator: ActionOperator
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateFacebookAudienceInput {
  """*Max length: 255*"""
  description: String
  fbAdAccountId: String
  fbAudienceId: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  operator: ActionOperator
}


input CreateActionUpdateJourneyContactInput {
  actionJourneyId: String
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  operator: ActionOperator
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateActionUpdateJourneyContactInput {
  actionJourneyId: String
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  operator: ActionOperator
}


input CreateActionWebhookInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
  webhookUrl: String
}


input UpdateActionWebhookInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  webhookUrl: String
}


input CreateFlowWaitUntilInput {
  date: String
  """*Max length: 255*"""
  description: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowWaitUntilInput {
  date: String
  """*Max length: 255*"""
  description: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateFlowWaitUntilConditionInput {
  """
  If a contact does not satisfy the condition and reaches the end of the wait limit, let them continue through the journey. Defaults to true
  """
  continueJourney: Boolean
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
  waitLimit: String
}


input UpdateFlowWaitUntilConditionInput {
  """
  If a contact does not satisfy the condition and reaches the end of the wait limit, let them continue through the journey. Defaults to true
  """
  continueJourney: Boolean
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  waitLimit: String
}


input CreateFlowWaitDateFieldInput {
  """
  If a contact does not satisfy the condition and reaches the end of the wait limit, let them continue through the journey. Defaults to true
  """
  continueJourney: Boolean
  dataFieldId: String
  """*Max length: 255*"""
  description: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
  waitLimit: String
}


input UpdateFlowWaitDateFieldInput {
  """
  If a contact does not satisfy the condition and reaches the end of the wait limit, let them continue through the journey. Defaults to true
  """
  continueJourney: Boolean
  dataFieldId: String
  """*Max length: 255*"""
  description: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  waitLimit: String
}


input CreateFlowWaitFieldChangeInput {
  """
  If a contact does not satisfy the condition and reaches the end of the wait limit, let them continue through the journey. Defaults to true
  """
  continueJourney: Boolean
  dataFieldId: String
  """*Max length: 255*"""
  description: String
  fieldValue: String
  journeyId: String!
  matchPattern: String
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
  waitLimit: String
}


input UpdateFlowWaitFieldChangeInput {
  """
  If a contact does not satisfy the condition and reaches the end of the wait limit, let them continue through the journey. Defaults to true
  """
  continueJourney: Boolean
  dataFieldId: String
  """*Max length: 255*"""
  description: String
  fieldValue: String
  id: String!
  journeyId: String!
  matchPattern: String
  """*Max length: 100*"""
  name: String
  waitLimit: String
}


input CreateFlowDecisionSplitInput {
  """*Max length: 255*"""
  description: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowDecisionSplitInput {
  """*Max length: 255*"""
  description: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateFlowRandomSplitInput {
  """*Max length: 255*"""
  description: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowRandomSplitInput {
  """*Max length: 255*"""
  description: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateFlowEngagementSplitInput {
  campaignId: String
  """*Max length: 255*"""
  description: String
  deviceTypes: [DeviceType!]
  event: TriggerCampaignEventType
  journeyId: String!
  linkScope: String
  matchPattern: String
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  sharedOn: SocialPlatform
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowEngagementSplitInput {
  campaignId: String
  """*Max length: 255*"""
  description: String
  deviceTypes: [DeviceType!]
  event: TriggerCampaignEventType
  id: String!
  journeyId: String!
  linkScope: String
  matchPattern: String
  """*Max length: 100*"""
  name: String
  sharedOn: SocialPlatform
}


input CreateFlowJoinInput {
  """*Max length: 255*"""
  description: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowJoinInput {
  """*Max length: 255*"""
  description: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
}


input CreateFlowGoToInput {
  """*Max length: 255*"""
  description: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowGoToInput {
  """*Max length: 255*"""
  description: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
}


input CreateFlowPathInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  percentage: Int
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateFlowPathInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  percentage: Int
}


input DeleteFlowPathInput {
  id: String!
}


input CreateTriggerAudienceInput {
  """*Max length: 255*"""
  description: String
  event: TriggerAudienceEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerAudienceInput {
  """*Max length: 255*"""
  description: String
  event: TriggerAudienceEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


type TriggerContactAdded implements JourneyNode {
  createdBy: String!
  createdUtc: DateTime!
  description: String
  errors: [Error!]!
  filter: ConditionGroup
  id: String!
  isConfigured: Boolean!
  isDeleted: Boolean!
  modifiedBy: String!
  modifiedUtc: DateTime!
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  statistics: NodeStatistics!
  terminatorType: TerminatorType
  type: JourneyNodeType!
}


input CreateTriggerContactAddedInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerContactAddedInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateTriggerCampaignInput {
  """*Max length: 255*"""
  description: String
  event: TriggerCampaignEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  scope: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerCampaignInput {
  """*Max length: 255*"""
  description: String
  event: TriggerCampaignEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  scope: String
}


input CreateTriggerConversionInput {
  conversionId: String
  """This is used to validate the conversion id passed."""
  conversionJourneyId: String
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerConversionInput {
  conversionId: String
  """This is used to validate the conversion id passed."""
  conversionJourneyId: String
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateTriggerCustomEventInput {
  """*Max length: 255*"""
  description: String
  eventKey: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerCustomEventInput {
  """*Max length: 255*"""
  description: String
  eventKey: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateTriggerDateInput {
  checkFrequency: String
  """*Max length: 255*"""
  description: String
  event: TriggerDateEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  scope: JourneyNodeScope
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerDateInput {
  checkFrequency: String
  """*Max length: 255*"""
  description: String
  event: TriggerDateEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  scope: JourneyNodeScope
}


input CreateTriggerEcommerceInput {
  """*Max length: 255*"""
  description: String
  event: TriggerEcommerceEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerEcommerceInput {
  """*Max length: 255*"""
  description: String
  event: TriggerEcommerceEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateTriggerFormInput {
  """*Max length: 255*"""
  description: String
  event: TriggerFormEventInput
  filter: ConditionGroupInput
  formId: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerFormInput {
  """*Max length: 255*"""
  description: String
  event: TriggerFormEventInput
  filter: ConditionGroupInput
  formId: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateTriggerGoalInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  goalId: String
  """This is used to validate the goal id passed."""
  goalJourneyId: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerGoalInput {
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  goalId: String
  """This is used to validate the goal id passed."""
  goalJourneyId: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input CreateTriggerManualInclusionInput {
  checkFrequency: String
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  scope: JourneyNodeScope
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerManualInclusionInput {
  checkFrequency: String
  """*Max length: 255*"""
  description: String
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  scope: JourneyNodeScope
}


input CreateTriggerPageInput {
  """*Max length: 255*"""
  description: String
  event: TriggerPageEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  pageId: String
  previousNodeIds: [String!]
  referredFromFilter: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerPageInput {
  """*Max length: 255*"""
  description: String
  event: TriggerPageEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  pageId: String
  referredFromFilter: String
}


input CreateTriggerRssInput {
  checkFrequency: String
  """*Max length: 255*"""
  description: String
  event: TriggerRssEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  pageUrl: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerRssInput {
  checkFrequency: String
  """*Max length: 255*"""
  description: String
  event: TriggerRssEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  pageUrl: String
}


input CreateTriggerSurveyInput {
  """*Max length: 255*"""
  description: String
  event: TriggerFormEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  surveyId: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerSurveyInput {
  """*Max length: 255*"""
  description: String
  event: TriggerFormEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  surveyId: String
}


input CreateTriggerWebpageInput {
  """*Max length: 255*"""
  description: String
  domainId: String
  event: TriggerWebpageEventInput
  filter: ConditionGroupInput
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  path: String
  previousNodeIds: [String!]
  referredFromFilter: String
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerWebpageInput {
  """*Max length: 255*"""
  description: String
  domainId: String
  event: TriggerWebpageEventInput
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
  path: String
  referredFromFilter: String
}


input CreateTriggerTransactionInput {
  """*Max length: 255*"""
  description: String
  event: TriggerTransactionEventInput
  filter: ConditionGroupInput
  groupName: String
  journeyId: String!
  """*Max length: 100*"""
  name: String
  nextNodeId: String
  previousNodeIds: [String!]
  """Only used for 'Trigger' nodes"""
  terminatorType: TerminatorType
}


input UpdateTriggerTransactionInput {
  """*Max length: 255*"""
  description: String
  event: TriggerTransactionEventInput
  filter: ConditionGroupInput
  groupName: String
  id: String!
  journeyId: String!
  """*Max length: 100*"""
  name: String
}


input MoveJourneyNodeInput {
  """Required when moving a node in an active journey."""
  activeContactAction: ActiveJourneyContactAction
  id: String!
  includeNodesAfter: Boolean
  journeyId: String!
  pathId: String
  previousNodeIds: [String!]
}


input CopyJourneyNodeInput {
  id: String!
  includeNodesAfter: Boolean
  journeyId: String!
  pathId: String
  previousNodeIds: [String!]
}


input DeleteJourneyNodeInput {
  id: String!
  keepPathId: String
}


input CreateCustomApiEventInput {
  """255 character limit"""
  description: String
  """100 character limit"""
  name: String!
}


input UpdateCustomApiEventInput {
  """255 character limit"""
  description: String
  id: String!
  """100 character limit"""
  name: String
}


input CreateSMSCampaignInput {
  """255 character limit"""
  description: String
  """15 character limit"""
  fromNumber: String!
  """255 character limit"""
  message: String
  """100 character limit"""
  name: String!
  """100 character limit"""
  subject: String
}


input UpdateSMSCampaignInput {
  """255 character limit"""
  description: String
  """15 character limit"""
  fromNumber: String
  id: String!
  """255 character limit"""
  message: String
  """100 character limit"""
  name: String
  """100 character limit"""
  subject: String
}


input CreateJourneyGoalInput {
  conversionId: String
  """255 character limit"""
  description: String
  filter: ConditionGroupInput
  journeyId: String!
  """100 character limit"""
  name: String!
  type: JourneyGoalType!
}


input UpdateJourneyGoalInput {
  conversionId: String
  """255 character limit"""
  description: String
  """Only used for GLOBAL goals"""
  filter: ConditionGroupInput
  id: String!
  journeyId: String!
  """100 character limit"""
  name: String
  type: JourneyGoalType
}


input CreateJourneyConversionInput {
  """255 character limit"""
  description: String
  journeyId: String!
  """100 character limit"""
  name: String!
  value: Float!
}


input UpdateJourneyConversionInput {
  """255 character limit"""
  description: String
  id: String!
  journeyId: String!
  """100 character limit"""
  name: String
  value: Float
}


input CreateSuppressionFilterInput {
  domain: String
  localPart: String
  reason: String
}


type AccountApiKey {
  apiKey: String!
  audiences: [String!]!
  id: String!
  name: String!
  permissionKeys: [String!]!
}


input CreateAccountApiKeyInput {
  """
  List of audience IDs that the group will have access to. Refer to the **audiences** query to retrieve all audiences for the account.
  """
  audiences: [String!]
  """Unique name to reference the api key. *Max length: 100*"""
  name: String!
  """
  List of permissions, in the form of permission key names, that will be granted to the group. The keys are defined by the system. Refer to the **permissions** query to retrieve permission keys.
  """
  permissionKeys: [String!]!
}


input CreateSavedSearchInput {
  audienceId: String!
  criteria: ConditionGroupInput!
  """*Max length: 255*"""
  description: String
  """*Max length: 100*"""
  name: String!
}


input UpdateSavedSearchInput {
  audienceId: String!
  criteria: ConditionGroupInput
  """*Max length: 255*"""
  description: String
  id: String!
  """*Max length: 100*"""
  name: String
}


input DeleteSavedSearchInput {
  audienceId: String!
  id: String!
}


input CreateViewInput {
  """255 character limit"""
  description: String
  isPrivate: Boolean
  jsonConfiguration: String!
  """100 character limit"""
  name: String!
  type: EntityType!
}


input UpdateViewInput {
  """255 character limit"""
  description: String
  id: String!
  isPrivate: Boolean
  jsonConfiguration: String
  """100 character limit"""
  name: String
}


input WebhookEventInput {
  entityType: EntityType
  eventType: EventType!
}


input ConditionGroupInput {
  conditionGroups: [ConditionGroupInput!]
  conditions: [ConditionInput!]
  operator: ConditionGroupOperator!
}


input CreateAIRequestInput {
  """Number of answer variations to be returned."""
  answerCount: Int!
  """
  Content limit represents the maximum number of characters to be returned.
  """
  contentLimit: Int!
  """
  Content/answer type. Answers can be formatted as words, sentences, or paragraphs.
  """
  contentType: AIContentType!
  """AI model to be used to generate answers"""
  model: String!
  """BASIC or ADVANCED question style"""
  questionStyle: AIQuestionStyle!
  """
  Question type. When set to KEYWORD, multiple questions can be passed. When Set to TOPIC, only one question can be passed.
  """
  questionType: AIQuestionType!
  """Questions used to generate answers."""
  questions: [String!]!
}


input CreateAccountExportInput {
  configuration: ExportConfigInput
  name: String!
  type: ExportType!
}


"""Information about current or next plan"""
type AccountPlanInfo {
  """Plan add ons"""
  addOns: [AccountPlanAddOn!]!
  """Cost of plan"""
  amount: Float!
  """True if autoscaling plan is allowed."""
  autoScaleEnabled: Boolean!
  """End date of the current billing period"""
  endUtc: DateTime!
  """True if there are invoices that are due."""
  hasDueInvoices: Boolean!
  """Plan id"""
  id: String!
  """Indicates if the plan is a trial plan"""
  isTrial: Boolean!
  """Plan name"""
  name: String!
  """
  This the maximum number of items (contacts or transactions) allowed within the current scale range.
  """
  nextTierMaxLimit: Int!
  """
  This the minimum number of items (contacts or transactions) allowed within the current scale range.
  """
  nextTierMinLimit: Int!
  """Overage cost of plan"""
  overageAmount: Float!
  """True if overages are allowed."""
  overageEnabled: Boolean!
  """Quantity of overage items"""
  overageQuantity: Int!
  """Plan change type"""
  pendingChangeType: PlanChangeType
  """Number of period units withing a billing cycle"""
  period: Int!
  """Period duration within a billing cycle"""
  periodUnit: String!
  """Quantity of items"""
  quantity: Int!
  """Start date of the current billing period"""
  startUtc: DateTime!
  """
  This the maximum number of items (contacts or transactions) allowed within the current scale range. Based on last billing period usage.
  """
  tierMaxLimit: Int!
  """
  This the minimum number of items (contacts or transactions) allowed within the current scale range. Based on last billing period usage.
  """
  tierMinLimit: Int!
}


input CreateAutoRetryRuleInput {
  """Bounce category the rule will be applied to."""
  bounceCategory: BounceCategory!
  """Communication type the retry rule will be applied to."""
  communicationType: CommunicationType!
  """Recipient domain. *Max length: 65*"""
  recipientDomain: String!
  """
  List of retry intervals (in hours) *Must be between 1 and 72, no more than 8 intervals allowed*
  """
  retries: [Int!]!
  """Sending domain. *Max length: 65*"""
  sendingDomain: String!
}


input UpdateAutoRetryRuleInput {
  """Bounce category the rule will be applied to."""
  bounceCategory: BounceCategory
  """Communication type the retry rule will be applied to."""
  communicationType: CommunicationType
  id: String!
  """Indicates whether or not the auto retry rule is active"""
  isActive: Boolean
  """Recipient domain. *Max length: 65*"""
  recipientDomain: String
  """
  List of retry intervals (in hours) *Must be between 1 and 72, no more than 8 intervals allowed*
  """
  retries: [Int!]
  """Sending domain. *Max length: 65*"""
  sendingDomain: String
}


type AffiliateApplication {
  """
  Indicates user understands rules regarding the affiliate payout email address
  """
  agreePayoutEmail: Boolean!
  """Indicates user agrees to affiliate program rules"""
  agreeProgram: Boolean!
  """Status of affiliate application"""
  applicationStatus: AffiliateApplicationStatus!
  """Size of affiliate's marketing audience"""
  audienceSize: Int!
  """Sample of marketing content used by affiliate"""
  contentSample: String
  """Date application was submitted"""
  createdUtc: DateTime!
  """Unique application Id"""
  id: Int!
  """Urls to marketing channels used by affiliate"""
  marketingChannelUrls: String
  """Marketing channels used by affiliate"""
  marketingChannels: String
  """Date of last application status change"""
  statusChangedUtc: DateTime!
}


input AffiliateApplicationInput {
  """
  Indicates user understands rules regarding the affiliate payout email address
  """
  agreePayoutEmail: Boolean!
  """Indicates user agrees to affiliate program rules"""
  agreeProgram: Boolean!
  """Size of affiliate's marketing audience"""
  audienceSize: Int!
  """Sample of marketing content used by affiliate"""
  contentSample: String!
  """Urls to marketing channels used by affiliate"""
  marketingChannelUrls: String!
  """Marketing channels used by affiliate"""
  marketingChannels: String!
}


input UpdateDomainV2Input {
  """URL paths to exclude from site tracking"""
  excludePaths: [String!]
  id: String!
  """URL paths to include for site tracking"""
  includePaths: [String!]
  """Indicates of mail can be sent for this domain (FROM address only)"""
  sendingEnabled: Boolean
  """Indicates site tracking is enabled"""
  siteTrackingEnabled: Boolean
}


"""Input for creating a new integration"""
input CreateIntegrationInput {
  """API key for authentication (required for API key integrations)"""
  apiKey: String
  """ID of the Tarvent audience to sync with"""
  audienceId: String!
  """User-friendly name for this integration instance"""
  integrationName: String!
  """ID of the integration partner to connect with"""
  integrationPartnerId: String!
  """
  OAuth token data from authorization flow (required for OAuth integrations)
  """
  tokenData: OAuthTokenDataInput
}


"""Input for updating an existing integration"""
input UpdateIntegrationInput {
  """
  Complete integration configuration including field mappings and sync settings
  """
  configuration: IntegrationConfigurationInput
  """ID of the integration to update"""
  integrationId: String!
  """New name for the integration (optional)"""
  integrationName: String
}


type CredentialTestResult {
  details: String
  errorMessage: String
  isSuccess: Boolean!
  ownerEmail: String!
}


type WebhookRegistrationResult {
  errorMessage: String
  isSuccess: Boolean!
  webhookId: String
}


"""Input for scheduling an integration sync"""
input ScheduleSyncInput {
  """ID of the integration to sync"""
  integrationId: String!
  """Whether to perform a full sync (true) or incremental sync (false)"""
  isFullSync: Boolean!
}


type RetryResult {
  errorMessage: String
  errorsFailed: Int!
  errorsResolved: Int!
  errorsRetried: Int!
  isSuccess: Boolean!
}


input RetrySyncErrorsInput {
  errorIds: [String!]
  syncJobId: String!
}


input ResolveSyncErrorsInput {
  errorIds: [String!]!
  resolution: String
}


type UpdateSyncErrorResult {
  message: String!
  success: Boolean!
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
  createdUtc: DateTime!
  permission: Permission
  permissionId: Long!
  user: UserUserUser
  userId: Long!
}


type LabelTranslations {
  defaultValue: String
  translations: [Translation]
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
  sentUtc: DateTime
  status: CampaignSendStatus!
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
  content: String
  mimeType: MimeType!
}


"""Service plan feature used to configure Tarvent"""
type ServicePlanFeature {
  """Internal use only"""
  _do: Int!
  """Description of feature"""
  description: String!
  """Feature limit if applicable"""
  limit: String
  """Description of limit if applicable"""
  limitDescription: String!
  """Name of feature"""
  name: String!
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
  actionOperator: ActionOperator
  campaignScope: String
  checkFrequency: String
  continueJourney: Boolean!
  date: String
  deliveryWindow: DeliveryWindow!
  engaged: Boolean
  entityId: Long!
  entityIds: [Long!]!
  event: JourneyNodeEvent
  eventKey: String
  expireInterval: String
  expireUtc: DateTime
  fbAdAccountId: String
  fbAudienceId: String
  filter: ConditionGroup
  journeyId: Long!
  newStatus: ContactStatus
  newValue: String
  noteText: String
  notification: JourneyNodeNotification!
  path: String
  percentage: Int
  pointValue: Float
  referredFromFilter: String
  scope: JourneyNodeScope
  settings: SiteNotificationSettings!
  siteNotification: SiteNotification!
  systemFieldName: String
  tags: [String!]
  txGroupName: String
  waitLimit: String
  webhookUrl: String!
}


type SubscriberSiteNotification {
  accountId: Long!
  createdUtc: DateTime!
  id: Long!
  isDeleted: Boolean!
  siteNotification: JourneyN
  siteNotificationId: Long!
  subscriber: Contact
  subscriberId: Long!
}


type EventPayload {
  event: Event
  subject: Subject
}


enum JourneyContactStatus {
  ACTIVE
  COMPLETED
  EXITED
  DELETED
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
  AT_LEAST_ONE_TIME
  AT_LEAST_TWO_TIMES
  AT_LEAST_SIX_TIMES
  AT_LEAST_ELEVEN_TIMES
  AT_LEAST_SIXTEEN_TIMES
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


enum SocialPlatform {
  ANY
  FACEBOOK
  LINKED_IN
  TWITTER
  PINTEREST
}


enum TriggerRssCheckType {
  CREATED
  UPDATED
  CREATED_OR_UPDATED
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
  analytics: JourneyNodeNoticificationAnalytics
  contactData: JourneyNodeNoticificationContactDataSettings
  content: JourneyNodeNoticificationContentSettings
  language: String
  sendAtUtc: DateTime
  sendBccTo: String
  showRecipients: Boolean
}


type JourneyNodeNoticificationHeader {
  bounceDomain: String
  customHeaders: [JourneyNameValue!]
  from: JourneyNodeNoticificationBaseRecipient
  replyTo: JourneyNodeNoticificationBaseRecipient
  subject: String
}


type JourneyNodeNoticificationContent {
  contentHtml: String
}


type JourneyNameValue {
  name: String
  value: String
}


type JourneyNodeNoticificationRecipient {
  emailAddress: String
  name: String
  type: RecipientType
  variables: [JourneyNameValue!]
}


enum CategoryType {
  ARTICLE
  TEMPLATE
  JOURNEY
}


type DmarcResult {
  currentRecord: DnsRecord
  errorMessage: String!
  hasError: Boolean!
  isNative: Boolean!
  policy: String!
  recordDomain: String!
  status: DnsRecordStatus!
  suggestedRecord: DnsRecord
}


type MxResult {
  currentRecord: DnsRecord
  errorMessage: String!
  hasError: Boolean!
  isNative: Boolean!
  recordCount: Int!
  recordDomain: String!
  status: DnsRecordStatus!
  suggestedRecord: DnsRecord
  tarventMailServer: Boolean!
}


type SpfResult {
  currentRecord: DnsRecord
  errorMessage: String!
  hasError: Boolean!
  hasTarvent: Boolean!
  isNative: Boolean!
  policy: String!
  recordDomain: String!
  status: DnsRecordStatus!
  suggestedRecord: DnsRecord
}


type DnsRecordResult {
  currentRecord: DnsRecord
  status: DnsRecordStatus!
  suggestedRecord: DnsRecord
  type: DnsRecordType!
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
  linkName: String
  linkUri: String
}


"""
The \`Byte\` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255.
"""
scalar Byte


type ContactInfo {
  addressCountry: String
  addressLocality: String
  addressRegion: String
  audienceId: String!
  confirmedIp: String
  confirmedUtc: DateTime
  createdBy: String!
  createdUtc: DateTime!
  email: String!
  firstName: String
  hardBounceCount: Int!
  id: String!
  language: String
  lastName: String
  latitude: Decimal
  longitude: Decimal
  modifiedBy: String!
  modifiedUtc: DateTime!
  optInIp: String
  optInSource: OptInSource!
  optInUtc: DateTime
  optOutIp: String
  optOutReason: String
  optOutSource: OptOutSource!
  optOutUtc: DateTime
  postalCode: String
  rating: Float
  sendFormat: SendFormat!
  softBounceCount: Int!
  status: ContactStatus!
  streetAddress: String
  streetAddress2: String
  tags: [String!]
  timeZone: String
}


enum GraphQLCallType {
  MUTATION
  QUERY
}


type ItemTier {
  fee: Float!
  maxLimit: Int!
  minLimit: Int!
}


"""Plan feature used to configure Tarvent"""
type ItemFeature {
  """Description of feature"""
  description: String!
  """Unique feature ID"""
  id: String!
  """Feature limit if applicable"""
  limit: String
  """Name of feature"""
  name: String!
}


type ItemAddOn {
  allowOveragesInd: Boolean!
  description: String!
  """Fee information for add on."""
  fees: ItemAddOnFees!
  freeCreditsAmt: Int!
  id: String!
  lifeTimeInd: Boolean!
  name: String!
  type: AddOnType!
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
  """Return all contact fields for Campaign event log exports"""
  allFields: Boolean
  """Used for survey respondent logs"""
  campaignId: String
  """Used for campaign event logs"""
  combinationId: String
  """Delimiter for export file."""
  delimiter: ValueDelimiter!
  """Email event types used for Campaign and Transaction event exports"""
  emailEvents: [EmailEventType!]
  endUtc: DateTime
  entityId: String
  """Contact fields used for Campaign event log exports"""
  fields: [String!]
  """Hour offset for Campaign event log exports"""
  hourOffset: Int
  """Minute offset for Campaign event log exports"""
  minuteOffset: Int
  startUtc: DateTime
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


enum AffiliatePaymentStatus {
  REQUESTED
  PROCESSING
  PAID
  DECLINED
}


"""Categories of integrations available"""
enum IntegrationCategory {
  """Marketplace/Deal site"""
  MARKETPLACE
  """Customer Relationship Management systems"""
  CRM
  """E-commerce platforms"""
  ECOMMERCE
  """Platform-as-a-Service providers and cloud application platforms"""
  PAAS
  """Email marketing and automation platforms"""
  EMAIL_MARKETING
  """Analytics and reporting tools"""
  ANALYTICS
  """Social media platforms"""
  SOCIAL_MEDIA
  """Project management tools"""
  PROJECT_MANAGEMENT
  """Communication platforms"""
  COMMUNICATION
  """Storage and file management"""
  STORAGE
  """Other/miscellaneous integrations"""
  OTHER
}


"""Connection status of an account integration"""
enum ConnectionStatus {
  """Integration is connected and functioning normally"""
  CONNECTED
  """Integration has been disconnected"""
  DISCONNECTED
  """Integration has encountered an error"""
  ERROR
  """Integration's access token has expired and needs refresh"""
  TOKEN_EXPIRED
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


enum DnsRecordType {
  DKIM_K1
  DKIM_K2
  MX
  DMARC
  SPF
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


"""Affiliate application status"""
enum AffiliateApplicationStatus {
  """Affiliate application submitted"""
  SUBMITTED
  """Affiliate application is being reviewed by Tarvent"""
  IN_REVIEW
  """Affiliate application is approved"""
  APPROVED
  """Affiliate application is declined"""
  DECLINED
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
  credits: [ItemAddOnFeeOption!]!
  storageDays: [ItemAddOnStorageDays!]!
  unitOfMeasure: String!
}


type DnsRecord {
  errorMsg: String!
  host: String!
  policy: String!
  preference: Int!
  ttl: Int!
  type: DnsRecordType!
  value: String!
}


type JourneyNodeNoticificationBaseRecipient {
  emailAddress: String
  name: String
}


type JourneyNodeNoticificationContactDataSettings {
  attachementFormat: JourneyNodeNotificationAttachmentFormat
  dataLocation: JourneyNodeNotificationContactDataLocation!
  includeContactCurrentData: Boolean
  includeContactOriginalData: Boolean
  zipAttachement: Boolean
}


type JourneyNodeNoticificationAnalytics {
  enable: Boolean!
  parameters: [JourneyNameValue!]
}


type JourneyNodeNoticificationContentSettings {
  autoGenerateHtml: Boolean!
  autoGenerateText: Boolean!
}


type Event {
  accountId: Long!
  client: EventClient
  dateUtc: DateTime
  entityType: EntityType!
  eventType: EventType!
  initiator: EventInitiator!
  network: EventNetwork
}


type Subject {
  id: Long!
  type: SubjectType!
}


type JourneyNodeEvent {
  audienceType: TriggerAudienceEventType
  campaignType: TriggerCampaignEventType
  categories: [String!]
  categoryOperator: TriggerEcommerceCategoryOperator
  ctaPerformed: Boolean
  customEventKey: Long
  deviceTypes: [DeviceType!]
  ecommerceType: TriggerEcommerceEventType
  fieldName: String
  formQuestionId: Long
  formType: TriggerFormEventType
  ignoreYear: Boolean
  linkScope: String
  matchPattern: String
  minChangeCount: Int
  operator: Operator
  orderOperator: TriggerEcommerceOrderOperator
  orderValue: Float
  pageType: TriggerPageEventType
  productOperator: TriggerEcommerceProductOperator
  products: [String!]
  questionId: Long
  rssCheckType: TriggerRssCheckType
  sharedOn: SocialPlatform
  siteVisitType: WebPageVisitType
  storeId: String
  transactionType: TriggerTransactionEventType
  type: EventType
  value: String
  visitType: WebPageVisitType
  webPageType: TriggerWebPageEventType
}


type Translation {
  language: String
  value: String
}


type UserUserUser {
  """Collection of accounts associated with the user"""
  accounts: [UserAccount]
  """Collection of Affiliate applications"""
  affiliateApplications: [AffiliateApp]
  """Collection of Affiliate payments"""
  affiliatePayments: [AffiliatePayment]
  """Date of when user became an affiliate"""
  affiliateStartUtc: DateTime
  """
  Optional business phone number used by support to contact user if needed
  """
  businessPhone: String
  """Id of user who created the user"""
  createdBy: String
  """Date/time the user was created"""
  createdUtc: DateTime!
  """Email address used for notifications"""
  emailAddr: Email
  """Collection of fast facts"""
  fastFacts: [UserFastFact]
  """First name"""
  firstName: String
  id: Long!
  """Identity provider"""
  identityProvider: UserIdentityProvider!
  """Indicates if user is enrolled in Affiliate program"""
  isAffiliate: Boolean!
  """Last name"""
  lastName: String
  """Indicates if multi-factor authentication is enabled"""
  mfaEnabled: Boolean!
  """Id of user who last modified the user"""
  modifiedBy: String
  """Date/time the user was last modified"""
  modifiedUtc: DateTime!
  """Collection of permissions"""
  permissions: [UserPermission]
  """SSO user ID"""
  ssoId: String
  """Status of user"""
  status: UserStatus!
  """Collection of user invites created by the user"""
  userInvites: [Invite]
}


"""Input for complete integration configuration"""
input IntegrationConfigurationInput {
  """List of field mappings between integration partner and Tarvent fields"""
  fieldMappings: [FieldMappingInput!]!
  """Email address for integration notifications"""
  notificationEmail: String
  """Partner-specific sync filters and settings as JSON string"""
  syncFilters: String
}


input OAuthTokenDataInput {
  accessToken: String
  expiresIn: Int!
  refreshToken: String
  scope: String
  tokenType: String
}


"""Add-on detail"""
type AccountPlanAddOn {
  """Add-on credit price."""
  creditPrice: Float!
  """Add-on credits."""
  credits: Int!
  """Indicates if this add-on has free credits"""
  freeCreditsInd: Boolean!
  """Unique add-on id"""
  id: String!
  """Name of add-on"""
  name: String!
  """
  Overage fee of add-on based on quantity of credits used (updated daily).
  """
  overageFee: Float!
  """Add-on pending change type. Will be null if there is no change."""
  pendingChangeType: AddOnChangeType
  """Quantity of credits used (updated daily)."""
  qtyUsed: Int!
  """Only set for Transaction Email add-on"""
  storageDays: Int!
  """Only set for Transaction Email add-on"""
  storageDaysPrice: Float!
  """Total price of add-on"""
  totalPrice: Float!
  """Type of add-on"""
  type: AddOnType!
}


input ExportConfigInput {
  """Return all contact fields for Campaign event log exports"""
  allFields: Boolean
  """Optionally used for survey respondent logs"""
  campaignId: String
  """Optionally used for campaign event logs"""
  combinationId: String
  """Delimiter for export file. Defaults to comma."""
  delimiter: ValueDelimiter
  """Email event types used for Campaign and Transaction event log exports"""
  emailEvents: [EmailEventType!]
  endUtc: DateTime
  """
  Not required for transaction exports. Required for every other export type.
  """
  entityId: String
  """Contact fields used for Campaign event log exports"""
  fields: [String!]
  """Hour offset for Campaign event log exports"""
  hourOffset: Int
  """Minute offset for Campaign event log exports"""
  minuteOffset: Int
  startUtc: DateTime
  """List of tags for filtering transaction event log exports."""
  tags: [String!]
  """
  List of transaction groups for filtering transaction event log exports.
  """
  txGroups: [String!]
}


input ConditionInput {
  dataFieldId: String
  fieldName: String
  operator: Operator!
  value: String
}


enum ActiveJourneyContactAction {
  KEEP_CONTACTS_IN_NODE
  MOVE_CONTACTS_TO_NEXT_NODE_BEFORE_MOVE
  END_JOURNEY
}


input TriggerTransactionEventInput {
  deviceTypes: [DeviceType!]
  linkScope: String
  matchPattern: String
  type: TriggerTransactionEventType
}


input TriggerWebpageEventInput {
  deviceTypes: [DeviceType!]
  siteVisitType: WebPageVisitType
  type: TriggerWebPageEventType
  visitType: WebPageVisitType
}


input TriggerRssEventInput {
  rssCheckType: TriggerRssCheckType
}


input TriggerPageEventInput {
  ctaPerformed: Boolean
  deviceTypes: [DeviceType!]
  type: TriggerPageEventType
  visitType: WebPageVisitType
}


input TriggerFormEventInput {
  deviceTypes: [DeviceType!]
  operator: Operator
  questionId: String
  type: TriggerFormEventType!
  value: String
}


input TriggerEcommerceEventInput {
  categories: [String!]
  categoryOperator: TriggerEcommerceCategoryOperator
  orderOperator: TriggerEcommerceOrderOperator
  orderValue: Float
  productOperator: TriggerEcommerceProductOperator
  products: [String!]
  storeId: String
  type: TriggerEcommerceEventType
}


input TriggerDateEventInput {
  fieldName: String
  ignoreYear: Boolean
  operator: Operator
  value: String
}


input TriggerCampaignEventInput {
  deviceTypes: [DeviceType!]
  linkScope: String
  matchPattern: String
  sharedOn: SocialPlatform
  type: TriggerCampaignEventType
}


input TriggerAudienceEventInput {
  """
  Comma delimited string of ids/tags is supported as well as a single id/tag for group and tag filtering.
  """
  fieldName: String
  type: TriggerAudienceEventType
}


input SiteNotificationSettingsInput {
  animationType: AnimationType
  buttonColor: String
  buttonPosition: ButtonPosition
  buttonText: String!
  buttonType: ButtonType
  displayType: DisplayType
  icon: IconType
  iconColor: String
  iconUrl: String
  positionX: PositionX
  positionY: PositionY
  tags: [String!]
}


input SiteNotificationInput {
  messageHtml: String
  title: String
}


input JourneyNodeNotificationInput {
  content: JourneyNodeNoticificationContentInput
  header: JourneyNodeNoticificationHeaderInput
  recipients: [JourneyNodeNoticificationRecipientInput]
  settings: JourneyNodeNoticificationSettingsInput
  variables: [JourneyNameValueInput!]
}


input DeliveryWindowInput {
  sendImmediate: Boolean!
  timeJumper: Boolean!
  timeUtc: DateTime
  weekDays: String
}


type PaymentMethodBankAccount {
  accountNumber: String!
  bankAccountHolderType: BankAccountHolderType!
  bankAccountType: BankAccountType!
  bankName: String!
  firstName: String!
  lastName: String!
  routingNumber: String!
}


type PaymentMethodCreditCard {
  billingAddress: BillingAddress!
  """Type of credit card"""
  cardNetwork: CreditCardNetwork!
  """2 digit expiration month"""
  expMonth: Int!
  """4 digit expiration year"""
  expYear: Int!
  """Last 4 digits of credit card to assist in identifying payment method"""
  last4Digits: String!
}


enum PaymentMethodType {
  CREDIT_CARD
  BANK_ACCOUNT
}


type AccountPlanAddOnStats {
  """Engagement reputation for the account."""
  accountEngagementScore: Float!
  """Sender reputation for the account."""
  accountSenderReputation: Float!
  """Engagement reputation for this add-on."""
  engagementScore: Float!
  """Add-on id"""
  id: String
  """
  Item count for add-on. For transaction add-ons this represents to total amount of sent transaction (To, CC, and BCC recipients).
  """
  itemCount: Int!
  """Sender reputation for this add-on."""
  senderReputation: Float!
  """Amount of storage for the account."""
  storageBytes: Int!
  """Add-on type"""
  type: AddOnType!
}


input GetTemplateTxVarContentInput {
  content: String!
  mimeType: MimeType!
}


type Stat {
  bounceRate: Float!
  bounces: Int!
  clicks: Int!
  conversionRate: Float!
  ctaPerformed: Int!
  statUtc: DateTime
  submittedCompleteForm: Int!
  submittedCompleteFormRate: Float!
  submittedPartialForm: Int!
  submittedPartialFormRate: Float!
  timePerCta: Int!
  timePerSubmittedCompleteForm: Int!
  timePerSubmittedPartialForm: Int!
  timePerTotalCta: Int!
  totalConversionRate: Float!
  totalCtaPerformed: Int!
  totalSubmitRate: Float!
  totalSubmits: Int!
  uniqueBounces: Int!
  uniqueClicks: Int!
  uniqueConversionRate: Float!
  uniqueCtaPerformed: Int!
  uniqueSubmittedCompleteForm: Int!
  uniqueSubmittedPartialForm: Int!
  uniqueTotalConversionRate: Float!
  uniqueTotalCtaPerformed: Int!
  uniqueViews: Int!
  views: Int!
}


type ArticleContent {
  content: String!
  mimeType: MimeType!
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
  content: String!
  mimeType: MimeType!
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
  categories: [String]
  fields: [RSSFeedItemField]
}


type CampaignHistoryStats {
  campaignId: String
  clickToOpenPct: Float!
  combinationId: String
  enableMvTesting: Boolean
  engagementScore: Float!
  name: String
  senderReputation: Float!
  sentUtc: DateTime
  totalBounce: Int!
  totalBouncePct: Float!
  totalClicks: Int!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  totalProfile: Int!
  totalReplies: Int!
  totalSTF: Int!
  totalSTFOptIn: Int!
  totalSent: Int!
  totalSocialShare: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  uniqueSTF: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  uniqueSTFPct: Float!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  uniqueSuppressed: Int!
}


type CampaignHistoryOverviewStats {
  clickToOpenPct: Float!
  engagementScore: Float!
  senderReputation: Float!
  totalBounce: Int!
  totalBouncePct: Float!
  totalClicks: Int!
  totalDelivered: Int!
  totalDeliveredPct: Float!
  totalOpens: Int!
  totalProfile: Int!
  totalReplies: Int!
  totalSTF: Int!
  totalSTFOptIn: Int!
  totalSent: Int!
  totalSocialShare: Int!
  uniqueClicks: Int!
  uniqueClicksPct: Float!
  uniqueHardBounce: Int!
  uniqueHardBouncePct: Float!
  uniqueOpens: Int!
  uniqueOpensPct: Float!
  uniqueOptOut: Int!
  uniqueOptOutPct: Float!
  uniqueProfile: Int!
  uniqueProfilePct: Float!
  uniqueReplies: Int!
  uniqueRepliesPct: Float!
  uniqueSTF: Int!
  uniqueSTFOptIn: Int!
  uniqueSTFOptInPct: Float!
  uniqueSTFPct: Float!
  uniqueSocialShare: Int!
  uniqueSocialSharePct: Float!
  uniqueSoftBounce: Int!
  uniqueSoftBouncePct: Float!
  uniqueSpam: Int!
  uniqueSpamPct: Float!
  uniqueSuppressed: Int!
}


enum VideoSource {
  """Video is from YouTube"""
  YOU_TUBE
  """Video is from Vimeo"""
  VIMEO
}


enum SortDirection {
  ASC
  DESC
}


"""Defines how a contact traversed into or out of the journey"""
enum JourneyContactTraverseScope {
  """Contacts that were added to the journey via any method."""
  ANY
  """
  Contacts that were manually added to the journey via the app, API, or integration partner.
  """
  MANUALLY_ENTERED
  """
  Contacts that were manually removed from the journey via the app, API, or integration partner.
  """
  MANUALLY_EXITED
}


type JourneySiteNotificationDailyStats {
  statUtc: DateTime
  viewCount: Int!
}


"""Represents an error that occurred during a sync job"""
type AccountIntegrationSyncError {
  """How long ago this error occurred"""
  age: TimeSpan!
  """
  Identifier of the contact that failed to sync (email or integration contact ID)
  """
  contactIdentifier: String
  """When this error occurred"""
  createdUtc: DateTime!
  """Additional error details in JSON format"""
  errorDetails: String
  """Human-readable error message"""
  errorMessage: String
  """Type of error that occurred"""
  errorType: String
  """Unique identifier for this sync error"""
  id: ID!
  """Whether this error is pending retry"""
  isPendingRetry: Boolean!
  """Whether this error has been resolved"""
  isResolved: Boolean!
  """Whether this error should be skipped"""
  isSkipped: Boolean!
  """Who or what resolved this error"""
  resolvedBy: String
  """When this error was resolved"""
  resolvedUtc: DateTime
  """Current status of this error"""
  status: SyncErrorStatus!
  """The sync job this error relates to"""
  syncJob: AccountIntegrationSyncJob
  """ID of the sync job this error relates to"""
  syncJobId: Long!
}


"""Status of a sync job"""
enum SyncJobStatus {
  """Sync job is waiting to be processed"""
  PENDING
  """Sync job is currently running"""
  RUNNING
  """Sync job completed successfully"""
  COMPLETED
  """Sync job failed with errors"""
  FAILED
}


"""Mode of sync operation"""
enum SyncMode {
  """Only sync changes since last sync"""
  INCREMENTAL
  """Sync all contacts regardless of last sync"""
  FULL
}


"""Type of sync operation"""
enum SyncType {
  """Manual sync initiated by user"""
  MANUAL
  """Scheduled sync running automatically"""
  SCHEDULED
  """Sync triggered by webhook"""
  WEBHOOK
}


type SyncIssue {
  code: Int!
  message: String!
}


type DowngradeResultError {
  """Error description"""
  error: String!
  """Feature id"""
  featureId: String!
  """Feature name"""
  featureName: String!
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
  """
  Cost of plan before discounts are applied. For current plan this will equal the amount to be credited.
  """
  amount: Float!
  """Total amount of discount applied to the plan."""
  discountAmount: Float!
  """End of billing period for plan."""
  endUtc: DateTime!
  """Unique plan id"""
  id: String!
  """Plan name"""
  name: String!
  """Amount above plan tier if overages are allowed."""
  overageAmount: Float!
  """Quantity above plan tier if overages are allowed."""
  overageQuantity: Int!
  """Item quantity for plan."""
  quantity: Int!
  """Start of billing period for plan."""
  startUtc: DateTime!
}


"""Payment method billing address information"""
input AddBillingAddressInput {
  """Address country associated with the credit card. *Max length: 100*"""
  addressCountry: String!
  """Address locality associated with the credit card. *Max length: 100*"""
  addressLocality: String!
  """Address region associated with the credit card. *Max length: 100*"""
  addressRegion: String!
  """First name displayed on the credit card. *Max length: 100*"""
  firstName: String!
  """Last name displayed on the credit card. *Max length: 100*"""
  lastName: String!
  """Postal code associated with the credit card. *Max length: 15*"""
  postalCode: String!
  """Street address associated with the credit card. *Max length: 100*"""
  streetAddress: String!
  """Street address associated with the credit card. *Max length: 50*"""
  streetAddress2: String
}


"""Credit card information"""
input AddCreditCardInfoInput {
  """Credit card number. *Required: 13-16 digits*"""
  cardNumber: String!
  """3 or 4 digit security code"""
  cvv: String!
  """2 digit expiration month."""
  expirationMonth: Int!
  """4 digit expiration year."""
  expirationYear: Int!
}


"""Payment method billing address information"""
input UpdateBillingAddressInput {
  """Address country associated with the credit card. *Max length: 100*"""
  addressCountry: String!
  """Address locality associated with the credit card. *Max length: 100*"""
  addressLocality: String!
  """Address region associated with the credit card. *Max length: 100*"""
  addressRegion: String!
  """First name displayed on the credit card. *Max length: 100*"""
  firstName: String!
  """Last name displayed on the credit card. *Max length: 100*"""
  lastName: String!
  """Zip/Postal code associated with the credit card. *Max length: 15*"""
  postalCode: String!
  """Street address associated with the credit card. *Max length: 100*"""
  streetAddress: String!
  """Street address 2 associated with the credit card. *Max length: 50*"""
  streetAddress2: String
}


"""Credit card expiration date"""
input UpdateCreditCardInfoInput {
  """2 digit expiration month."""
  expirationMonth: Int!
  """4 digit expiration year."""
  expirationYear: Int!
}


input UserNotificationPreferenceInput {
  """If true, user will recieve email notifictaions if available."""
  emailNotifications: Boolean!
  """If true, user will recieve in app notifictaions if available."""
  inAppNotifications: Boolean!
  """Id of global notification"""
  notificationId: String!
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
  ID of known contact within a Tarvent audience. This must be the Tarvent ID. If the ID is set, the Name and EmailAddress properties are ignored.
  """
  contactId: String
  """
  Email address of the recipient to be displayed in the email. Max length: 320 characters
  """
  emailAddress: String
  """
  Collection of recipient-specific meta data (aka reference data) used for both standard and custom report. Please note that this data will supersede transaction-level metadata. Max length: Name: 50 characters, Value: 255 characters.
  """
  metadata: [NameValueInput!]
  """
  Name of the recipient to be displayed in the email. Max length: 255 characters
  """
  name: String
  """Specified the type of recipient being added."""
  type: RecipientType
  """
  Collection of recipient-specific dynamic data that will be merged into the content and/or header of the email based on the variable name. Please note that this data will supersede transaction-level variables. Max length: Name: 50 characters, Value: 50 characters.
  """
  variables: [NameValueInput!]
}


input TransactionContentInput {
  """
  Collection of content that will be added to the email and displayed based on the recipient's email client settings. This is ignored if the TemplateId is specified.
  """
  contentBodies: [TransactionContentBodyInput!]
  """
  Template ID used to retrieve content for the email. This setting takes priority over ContentBodies.
  """
  templateId: String
}


input TransactionHeaderInput {
  """
  Collection of headers (name/value pairs) that will be added to the header of the email, but not displayed to the recipient. This is typically used for automated reply email processing when headers are present.
  """
  customHeaders: [NameValueInput!]
  """Contact to be displayed as the sender of the email."""
  from: TransactionFromInput!
  """
  Domain used for sending email with strict DMARC policies are in place. Contact Tarvent support if you need to implement this. Max length: 255 characters
  """
  mailDomain: String
  """
  Contact recipients will send reply emails to. This field is ignored if Replies is enabled in the TransactionTrackingInput object.
  """
  replyTo: TransactionReplyToInput
  """
  Subject line of the email that will be displayed within the recipients email client. Max length: 500 characters
  """
  subject: String!
}


input NameValueInput {
  name: String!
  value: String!
}


input TransactionSettingsInput {
  """Specified the analytics settings used for the transaction."""
  analytics: TransactionAnalyticsInput
  """
  Specifies whether HTMl and/or text content is automatically generated based on the content provided.
  """
  content: TransactionContentSettingsInput
  """
  Indicates that the transaction recipients will not be validated against to account suppression rules, this allowing anyone specified to receive the email, even if they are on the suppression list.
  """
  ignoreSuppressCheck: Boolean!
  """
  Must be a valid [culture code](https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/supported-culture-codes). Defaults to 'en-US'
  """
  language: String
  """
  Specify sandbox settings used to test various return types of error handling in your code.
  """
  sandbox: TransactionSandboxInput
  """
  UTC Date and time that the email will be schedule for sending. Set to NULL to send immediately.
  """
  sendAtUtc: DateTime
  """
  Indicates if all non-BCC recipients in the Recipients collection will be displayed to all recipients of this email. It is advised not to enable this without proper testing to ensure the results are desired.
  """
  showRecipients: Boolean
  """Indicates the tracking settings to be used by the transaction."""
  tracking: TransactionTrackingInput
}


input UpdateTemplateContentInput {
  content: String!
  mimeType: MimeType!
}


input SendTemplateTestContentInput {
  content: String!
  mimeType: MimeType!
}


input UpdateDoubleOptInInput {
  confirmAction: SubmitActionType!
  confirmExternalUrl: String
  confirmPageJson: String
  contentHtml: String
  """*Max length: 360*"""
  fromEmail: String
  """*Max length: 100*"""
  fromName: String
  """*Max length: 255*"""
  subject: String
}


input LabelsInput {
  addressCountry: LabelTranslationsInput
  addressLocality: LabelTranslationsInput
  addressRegion: LabelTranslationsInput
  postalCode: LabelTranslationsInput
  streetAddress: LabelTranslationsInput
  streetAddress2: LabelTranslationsInput
}


enum GroupDeleteType {
  DELETE_CONTACTS_IN_AUDIENCE
  LEAVE_CONTACTS_IN_AUDIENCE
  DELETE_IF_NOT_IN_OTHER_GROUPS
}


"""Either FieldName or DataFieldId need to be passed to be valid."""
input DataColumnInput {
  """
  *Max length: 100*  FieldName is used for system fields (email) and data fields (datafield id).
  """
  fieldName: String
  skip: Boolean!
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
  """Value will be truncated at 255 characters"""
  value: String!
}


input UpdateProfileFieldInput {
  dataFieldId: String
  labelText: String
  """Value will be truncated at 255 characters"""
  value: String!
}


enum BounceStatType {
  HARD
  SOFT
}


input FtfFormEmailInput {
  contentHtml: String
  """*Max length: 360*"""
  fromEmail: String
  """*Max length: 100*"""
  fromName: String
  """*Max length: 255*"""
  subject: String
}


enum EmailType {
  THANK_YOU
  CONFIRMATION
  FORWARD_TO_FRIEND
}


input FormQuestionStylesInput {
  align: String
  backgroundColor: String
  backgroundImage: String
  borderRadius: String
  fontColor: String
  fontFamily: String
  fontSize: String
  fontStyle: String
  fullMobileWidth: Boolean
  letterSpacing: String
  lineHeight: String
  padding: String
  textDecoration: String
  textTransform: String
  width: String
  wordSpacing: String
}


input QuestionCategoryInput {
  """*Max length: 300*"""
  defaultValue: String
  displayOrder: Int!
  """*Max length: 255*"""
  text: String!
}


input QuestionAnswerInput {
  displayOrder: Int!
  """*Max length: 300*"""
  text: String!
  """*Max length: 300*"""
  value: String
}


input UpdateFormQuestionStylesInput {
  align: String
  backgroundColor: String
  backgroundImage: String
  borderRadius: String
  fontColor: String
  fontFamily: String
  fontSize: String
  fontStyle: String
  fullMobileWidth: Boolean
  letterSpacing: String
  lineHeight: String
  padding: String
  textDecoration: String
  textTransform: String
  width: String
  wordSpacing: String
}


input UpdateSubmitActionInput {
  addGroups: [String!]
  addTags: [String!]
  confirmDialog: DialogSettingsInput
  confirmExternalUrl: String
  duplicateSubmissionAction: FormDupSubActionInput
  message: String
  sendConfirmEmail: EmailSettingsInput
  sendConfirmEmailInd: Boolean
  sendNotificationEmail: NotifEmailSettingsInput
  sendNotificationEmailInd: Boolean
  trackDomains: Boolean
  type: SubmitActionType
}


input UpdateTranslationsInput {
  addFriend: String!
  close: String!
  formError: String!
  formatError: String!
  ftfFriends: String!
  ftfInformation: String!
  ftfNote: String!
  ftfTitle: String!
  invalidDataError: String!
  maxLengthError: String!
  minLengthError: String!
  name: String!
  note: String!
  otherText: String!
  placeholder: String!
  required: String!
}


input CreateArticleContentInput {
  content: String!
  mimeType: MimeType!
}


input UpdateArticleContentInput {
  content: String!
  mimeType: MimeType!
}


input SubjectInput {
  """*Max length: 100*"""
  preheader: String
  """*Max length: 100*"""
  subject: String!
}


input FromInput {
  """*Max length: 320*"""
  email: String!
  """*Max length: 100*"""
  name: String
}


input UpdateCampaignAudienceInput {
  groupId: String!
  include: Boolean
}


input ParamNameValueInput {
  """*Max length: 75*"""
  name: String!
  """*Max length: 75*"""
  value: String!
}


input UpdateContentVariationInformationInput {
  contentBodies: [UpdateContentVariationContentInput!]!
  contentVariationId: String!
}


input CreateContentBlockContentInput {
  content: String!
  mimeType: MimeType!
}


input UpdateContentBlockContentInput {
  content: String!
  mimeType: MimeType!
}


input KeyValuePairOfStringAndStringInput {
  key: String!
  value: String!
}


input MockContactInput {
  addressCountry: String
  addressLocality: String
  addressRegion: String
  email: String
  firstName: String
  groups: [String!]
  language: String
  lastName: String
  latitude: Decimal
  longitude: Decimal
  postalCode: String
  profileFields: [MockProfileFieldInput!]
  streetAddress: String
  streetAddress2: String
  tags: [String!]
  timeZone: String
}


input MockProfileFieldInput {
  dataFieldId: String
  value: String
}


input UpdateContentVariationContentInput {
  content: String!
  mimeType: MimeType!
}


input FormDupSubActionInput {
  dialog: DialogSettingsInput
  message: String
  renderType: ErrorAction
  type: DuplicateSubmissionActionType
}


input NotifEmailSettingsInput {
  contentHtml: String
  dataAttachmentFormat: DataAttachmentFormat
}


input EmailSettingsInput {
  contentHtml: String
  fromEmail: String
  fromText: String
  subject: String
}


input DialogSettingsInput {
  buttonActionType: DialogButtonActionType
  buttonColor: String
  buttonText: String
  content: String
  iconColor: String
  iconType: DialogIconType
  iconUrl: String
  redirectExternalUrl: String
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
  Indicates whether a HTML version of the text content will be automatically generated.
  """
  autoGenerateHtml: Boolean!
  """
  Indicates whether a text version of the HTML content will be automatically generated.
  """
  autoGenerateText: Boolean!
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
  """
  Indicates whether link click events are tracked. When enabled, links are rewritten to point to Tarvent before being automatically redirected to the intended link.
  """
  clicks: Boolean
  """
  Indicated if site tracking is enabled when a contact ID is passed for a recipient instead of an email address.
  """
  domains: Boolean
  """Indicates whether email open events are tracked."""
  opens: Boolean
  """
  Indicates if reply emails are tracked, filtered, and forwarded. If enabled, the reply email address settings will be used for forward replies after being tracked.
  """
  replies: Boolean
  """
  Indicates whether the entire URL or base URL should be tracked. This should be enabled for deep links the are unique to each recipient to provide useful reporting.
  """
  stripQueryString: Boolean
}


input TransactionReplyToInput {
  """
  Email address of the contact to be displayed when replying to the email, if reply tracking is disabled. If reply tracking is enabled, valid replies will be forwarded to this email address after being tracked. Max length: 320 characters
  """
  emailAddress: String!
  """
  Name of the contact to be displayed when replying to the email, if reply tracking is disabled. Max length: 255 characters
  """
  name: String
}


input TransactionFromInput {
  """
  Email address of the contact to be displayed as the sender of the email. Max length: 320 characters
  """
  emailAddress: String!
  """
  Name of the contact to be displayed as the sender of the email. Max length: 255 characters
  """
  name: String
}


input TransactionContentBodyInput {
  """
  The content that will be send for the specific mime type once variable data is merged in.
  """
  bodyContent: String!
  """
  Defines the character set used by the email client to render the body of the email. In most cases, UTF-8 is highly suggested.
  """
  charset: Charset
  """
  Indicates if click tracking is enabled. This will change the URL to a trackable URL will will redirect the recipient to the real URL once the click is tracked.
  """
  clickTracking: Boolean
  """
  Defines the mime type of the content. Multiple mime types can be included in a single email. The recipient's email client will decide which mime type to render.
  """
  mimeType: MimeType!
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


"""The \`TimeSpan\` scalar represents an ISO-8601 compliant duration type."""
scalar TimeSpan


"""Status of a sync error"""
enum SyncErrorStatus {
  """Error is pending resolution"""
  PENDING
  """Error should be retried"""
  RETRY
  """Error should be skipped"""
  SKIP
  """Error has been resolved"""
  RESOLVED
}


type RSSFeedItemField {
  name: String
  type: RSSFeedItemFieldType!
  value: String
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
  """Address country associated with the credit card."""
  addressCountry: String!
  """Address locality associated with the credit card."""
  addressLocality: String!
  """Address region associated with the credit card."""
  addressRegion: String!
  """First name displayed on the credit card."""
  firstName: String!
  """Last name displayed on the credit card."""
  lastName: String!
  """Postal code associated with the credit card."""
  postalCode: String!
  """Street address associated with the credit card."""
  streetAddress: String!
  """Street address 2 associated with the credit card."""
  streetAddress2: String
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


input JourneyNodeNoticificationRecipientInput {
  emailAddress: String
  name: String
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
  bounceDomain: String
  customHeaders: [JourneyNameValueInput!]
  from: JourneyNodeNoticificationBaseRecipientInput
  replyTo: JourneyNodeNoticificationBaseRecipientInput
  subject: String
}


input JourneyNodeNoticificationSettingsInput {
  analytics: JourneyNodeNoticificationAnalyticsInput
  contactData: JourneyNodeNoticificationContactDataSettingsInput
  content: JourneyNodeNoticificationContentSettingsInput
  language: String
  sendAtUtc: DateTime
  sendBccTo: String
  showRecipients: Boolean
}


"""Input for mapping fields between integration partner and Tarvent"""
input FieldMappingInput {
  """Unique identifier of the field in the integration partner system"""
  integrationFieldId: String!
  """Display name of the field in the integration partner system"""
  integrationFieldName: String!
  """
  Whether Tarvent is the master for this field. If true, Tarvent updates integration partner. If false, integration partner updates Tarvent.
  """
  isTarventMaster: Boolean!
  """Merge tag of the corresponding Tarvent field data field"""
  tarventMergeTag: String!
}


"""User affiliate application"""
type AffiliateApp {
  agreePayoutEmail: Boolean!
  agreeProgram: Boolean!
  """Comments from Tarvent regarding the application"""
  applicationComments: String
  applicationStatus: AffiliateApplicationStatus!
  """Size of affiliate's marketing audience"""
  audienceSize: Int!
  """Sample of marketing content used by affiliate"""
  contentSample: String
  """Date application was submitted"""
  createdUtc: DateTime!
  """Unique application Id"""
  id: Int!
  """Urls to marketing channels used by affiliate"""
  marketingChannelUrls: String
  """Marketing channels used by affiliate"""
  marketingChannels: String
  """Date of last application status change"""
  statusChangedUtc: DateTime!
  """User who submitted application"""
  user: UserUserUser
  """Id of User who submitted application"""
  userId: Long!
}


type UserFastFact {
  fastFactKey: String
  isLiked: Boolean
  user: UserUserUser
  userId: Long!
}


"""Represents tha association of an account and user"""
type UserAccount {
  """Account"""
  account: GlobalAccount
  """ID of account"""
  accountId: Long!
  """Date/time the user was created"""
  createdUtc: DateTime!
  """ID of user who created the invite"""
  invitedBy: String
  """Date/time the user was invited"""
  invitedUtc: DateTime!
  """
  Indicates whether the user should recieve account level communications.
  """
  isAccountContact: Boolean!
  """Indicates the user account association is active"""
  isActive: Boolean!
  """
  Indicates whether the user is a billing user for the account and should recieve billing communications.
  """
  isBillingContact: Boolean!
  """
  Indicates whether the user is a partner user (not employee) for the account. Please note partner users do not count against any plan user limits.
  """
  isPartner: Boolean!
  """User"""
  user: UserUserUser
  """ID of user"""
  userId: Long!
}


type Email {
  """255 character limit"""
  domain: String
  """65 character limit"""
  localPart: String
}


type EventClient {
  device: DeviceType
  os: OperatingSystemType
  referrer: String
  software: SoftwareType
}


type EventNetwork {
  httpVerb: String
  ip: String
  protocol: String
}


type ItemAddOnStorageDays {
  days: Int!
  feePct: Float!
}


type ItemAddOnFeeOption {
  overageFee: Float!
  price: Float!
  quantity: Int!
}


"""Unique billing account"""
type GlobalAccount {
  """Unique name of account"""
  accountName: String
  """ID of user who owns the account"""
  accountOwnerId: Long!
  """Accounting system account ID (currently Quickbooks Online)"""
  accountingId: String
  """Collection of add-on"""
  addOns: [AccountAddOnHistory]
  """Address country associated with the account."""
  addressCountry: String
  """Address locality associated with the account."""
  addressLocality: String
  """Address region associated with the account."""
  addressRegion: String
  allowAutoScaling: Boolean!
  allowOverages: Boolean!
  """Unique alias for Tarvent application"""
  applicationAlias: String
  """Collection of bounce domains"""
  bounceDomains: [AccountBounceDomain]
  """Id of user who created the global account"""
  createdBy: String
  """Date/time the global account was created"""
  createdUtc: DateTime!
  """Collection of credit balance changes"""
  creditBalances: [AccountCreditBalance]
  """Current billing period end date/time"""
  currentBillingEndUtc: DateTime
  """Current billing period start date/time"""
  currentBillingStartUtc: DateTime
  """Current Chargebee plan name"""
  currentPlanName: String
  """Current Chargebee subscription ID"""
  currentSubscriptionId: Long!
  """Payment gateway customer profile ID"""
  customerProfileId: String
  """
  Please rate our customer service using a scale of 1 to 5 where 1 is *very dissatisfied* and 5 is *very satisfied*.
  """
  customerRating: Int!
  """Reason account was deleted"""
  deleteReason: String
  """Collection of discounts"""
  discounts: [AccountPlanDiscount]
  """Collection of domains"""
  domains: [Domain]
  """Allow auto scaling for the account's email marketing plan."""
  emailMarketingAllowAutoScaling: Boolean!
  """Allow overages for the account's email marketing plan."""
  emailMarketingAllowOverages: Boolean!
  emailMarketingDgEligibilityStatus: Boolean
  emailMarketingDgScheduled: Boolean
  emailMarketingDgSuccessful: Boolean
  """Email marketing plan current billing period end date."""
  emailMarketingEndUtc: DateTime!
  """Email marketing plan is annual"""
  emailMarketingIsAnnual: Boolean!
  """Email marketing plan is trial"""
  emailMarketingIsTrial: Boolean!
  """Account's contact max limit based on last usage report."""
  emailMarketingMaxLimit: Int!
  """Email marketing plan current billing period start date."""
  emailMarketingStartUtc: DateTime!
  """Collection of facts"""
  facts: [AccountFact]
  """Please provide and feedback you feel we should know."""
  feedback: String
  """Collection of fees"""
  fees: [AccountFee]
  """Collection of form path names"""
  formPathNames: [AccountFormPathName]
  """Unique global account ID"""
  id: Long!
  """Industry that the account's business operates within."""
  industry: Int
  """Collection of invoices"""
  invoices: [AccountInvoice2]
  """Collection of dedicated IPs"""
  ips: [AccountIp]
  """Indicates whether account has been soft deleted"""
  isDeleted: Boolean!
  """Id of user who last modified the global account"""
  modifiedBy: String
  """Date/time the global account was last modified"""
  modifiedUtc: DateTime!
  """Next billing period end date/time"""
  nextBillingEndUtc: DateTime
  """Next billing period start date/time"""
  nextBillingStartUtc: DateTime
  """Next Chargebee plan name"""
  nextPlanName: String
  """Next Chargebee subscription ID"""
  nextSubscriptionId: Long
  """Unique alias for pages urls (pages, surveys, and forms)"""
  pagesAlias: String
  """Collection of payment methods"""
  paymentMethods: [AccountPaymentMethod]
  """Current account payment status"""
  paymentStatus: PaymentStatus
  """Phone number associated with the account."""
  phone: String
  """Plan change indicator: 0 = downgrade, 1 = upgrade, null = no change"""
  planChangeInd: Boolean
  """Collection of plans"""
  plans: [AccountServicePlan]
  """Postal code associated with the account."""
  postalCode: String
  """Collection of sending domains"""
  sendingDomains: [AccountSendingDomain]
  """Current account status"""
  status: AccountStatusDto!
  """Collection of status changes"""
  statusActivities: [AccountStatusActivity]
  """Reason for the status change."""
  statusChangeReason: String
  """Account status"""
  statusChangeUtc: DateTime
  """Street address associated with the account."""
  streetAddress: String
  """Street address 2 associated with the account."""
  streetAddress2: String
  """Collection of Chargebee subscriptions (plans)"""
  subscriptions: [AccountSubscription]
  """Unique alias for tracking urls"""
  trackingAlias: String
  """Collection of user invites"""
  userInvites: [Invite]
  """Collection of users"""
  users: [UserAccount]
  """URL of the business website."""
  website: URL
}


input JourneyNodeNoticificationContactDataSettingsInput {
  attachementFormat: JourneyNodeNotificationAttachmentFormat
  dataLocation: JourneyNodeNotificationContactDataLocation!
  includeContactCurrentData: Boolean
  includeContactOriginalData: Boolean
  zipAttachement: Boolean
}


input JourneyNodeNoticificationAnalyticsInput {
  enable: Boolean!
  parameters: [JourneyNameValueInput!]
}


input JourneyNodeNoticificationContentSettingsInput {
  autoGenerateHtml: Boolean!
  autoGenerateText: Boolean!
}


input JourneyNodeNoticificationBaseRecipientInput {
  emailAddress: String
  name: String
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


type AccountFact {
  account: GlobalAccount
  accountId: Long!
  name: String
  value: String
}


type AccountSubscription {
  account: GlobalAccount
  accountId: Long!
  allowAutoScaling: Boolean!
  allowOverages: Boolean!
  """Current billing period end date/time"""
  currentBillingEndUtc: DateTime
  """Current billing period start date/time"""
  currentBillingStartUtc: DateTime
  """Current Chargebee plan id"""
  currentPlanId: String
  """
  Current plan item limit. Based on tier selected when choosing plan or the previous month's tier limit.
  """
  currentPlanItemLimit: Int!
  """Current Chargebee plan name"""
  currentPlanName: String
  """Current Chargebee subscription ID"""
  currentSubscriptionId: Long!
  isActive: Boolean!
  """Next billing period end date/time"""
  nextBillingEndUtc: DateTime
  """Next billing period start date/time"""
  nextBillingStartUtc: DateTime
  """Next Chargebee plan id"""
  nextPlanId: String
  """
  Next plan item limit. Based on tier selected when choosing plan or the previous month's tier limit.
  """
  nextPlanItemLimit: Int!
  """Next Chargebee plan name"""
  nextPlanName: String
  """Next Chargebee subscription ID"""
  nextSubscriptionId: Long
  """Plan change indicator: 0 = downgrade, 1 = upgrade, null = no change"""
  planChangeInd: Boolean
  """PlanType of subscription"""
  planType: PlanType!
}


type AccountBounceDomain {
  account: GlobalAccount
  accountId: Long!
  domain: String
  id: Long!
  isValid: Boolean!
}


type AccountSendingDomain {
  account: GlobalAccount
  accountId: Long!
  domain: String
  hash: [Byte!]
  isValid: Boolean!
  isValidUtc: DateTime
  selector: String
}


type AccountFormPathName {
  account: GlobalAccount
  accountId: Long!
  formId: Long!
  id: Long!
  pathName: String
}


"""Represents a history of account status changes"""
type AccountStatusActivity {
  """Account"""
  account: GlobalAccount
  """ID of the account"""
  accountId: Long!
  """Id of user who created the status history"""
  createdBy: String
  """Date/time the status history was created"""
  createdUtc: DateTime!
  """
  Date/time has to be changed back in cases where the status is set to *Relax* or *Hibernate*
  """
  endUtc: DateTime
  """Unique status change ID"""
  id: Long!
  """New status of account"""
  newStatus: AccountStatusDto!
  """Previous status of account"""
  oldStatus: AccountStatusDto!
  """Date/time status was changed"""
  startUtc: DateTime
}


"""Represents additional fees that may be applied to an account"""
type AccountFee {
  """Account"""
  account: GlobalAccount
  """Id of the account"""
  accountId: Long!
  """Number of billing cycles between each fee charge."""
  billCycleInterval: Int!
  """Id of user who created the fee"""
  createdBy: String
  """Date/time the fee was created"""
  createdUtc: DateTime!
  """Description of fee"""
  description: String
  """
  Date/time fee will stop being applied. This only affects recurring discounts.
  """
  endUtc: DateTime
  """Total fee amount ot be charged"""
  fee: Float!
  """Unique fee ID"""
  id: Long!
  """Indicates whether fee is charged each billing cycle"""
  isRecurring: Boolean!
  """Id of user who last modified the fee"""
  modifiedBy: String
  """Date/time the fee was last modified"""
  modifiedUtc: DateTime!
  """
  Date/time fee will next be applied. The initial value will be the same as the StartUtc
  """
  nextUtc: DateTime!
  """Quantity of fee to be charged"""
  qty: Int!
  """Fee rate to be charged"""
  rate: Float!
  """Service type of the fee being charged"""
  serviceType: ServiceType!
  """Date/time fee will start being applied"""
  startUtc: DateTime!
}


"""
Tracks the historical credit balance of an account plan that uses credits
"""
type AccountCreditBalance {
  """Account"""
  account: GlobalAccount
  """ID of the account"""
  accountId: Long!
  """Current credit balance"""
  balance: Float!
  """Id of user who created the credit balance"""
  createdBy: String
  """Date/time the credit balance was created"""
  createdUtc: DateTime!
  """Value of credit increase/decrease"""
  creditValue: Float!
  """Unique plan credit balance ID"""
  id: Long!
  """Reason for balance increase/decrease"""
  reasonCode: String
  """Service type associated with credits"""
  serviceType: ServiceType!
}


type AccountAddOnHistory {
  addOnType: AddOnType!
  additionalFees: Float!
  additionalFeesDscr: String
  additionalFeesInvoiceNbr: String
  createdBy: String
  createdUtc: DateTime!
  doNotRenew: Boolean!
  id: String!
  isCancelled: Boolean!
  modifiedBy: String
  modifiedUtc: DateTime!
  purchaseInvoiceNbr: String
  purchaseUtc: DateTime!
  qtyPrice: Float!
  qtyPurchased: Int!
  qtyUsed: Int!
  """Transaction Email add-on only."""
  storageDays: Int!
  storageDaysPrice: Float!
}


"""Represents services that have been billed to the account."""
type AccountInvoice2 {
  """Amount being billed"""
  amount: Float!
  """Id of user who created the invoice"""
  createdBy: String
  """Date/time the invoice was created"""
  createdUtc: DateTime!
  """Invoice due date/time"""
  dueUtc: DateTime!
  """Unique invoice ID"""
  id: Long!
  """Status of invoice"""
  invoiceStatus: InvoiceStatus!
  """
  Collection of line items detailing the specific services being invoiced for
  """
  lineItems: [AccountInvoiceLineItem]
  """Id of user who last modified the invoice"""
  modifiedBy: String
  """Date/time the invoice was last modified"""
  modifiedUtc: DateTime!
  """Order/invoice ID"""
  orderNbr: String
  """Collection of payment receipts for the invoice"""
  receipts: [AccountReceipt]
  """Service period end date/time"""
  servicePeriodEndUtc: DateTime!
  """Service period start date/time"""
  servicePeriodStartUtc: DateTime!
  """Total amount being billed"""
  totalAmount: Float!
}


"""
Method of payment saved to pay future invoices automatically. Please note that no sensitive credit card information is stored within Tarvent.
"""
type AccountPaymentMethod {
  """Type of credit card"""
  cardNetwork: CreditCardNetwork!
  """Id of user who created the payment method"""
  createdBy: String
  """Date/time the payment method was created"""
  createdUtc: DateTime!
  """2 digit expiration month"""
  expMonth: Int!
  """4 digit expiration year"""
  expYear: Int!
  """Unique payment method ID"""
  id: Long!
  """
  Indicates whether payment method is the default method to be used to automatically pay invoices. Only one payment method can be the default.
  """
  isDefault: Boolean!
  """Last 4 digits of credit card to assist in identifying payment method"""
  last4Digits: String
  """Id of user who last modified the payment method"""
  modifiedBy: String
  """Date/time the payment method was last modified"""
  modifiedUtc: DateTime!
  """Unique nickname of payment method"""
  nickname: String
}


"""
Account plan for a specific service type. Only one active plan per service type is allowed.
"""
type AccountServicePlan {
  """Account"""
  account: GlobalAccount
  """ID of the account"""
  accountId: Long!
  """
  ID of credit block to automatically purchase when account credit balance is equal to or below *MinimumCredits*
  """
  autoRefillCreditItemId: Long!
  """Id of user who created the service plan"""
  createdBy: String
  """Date/time the service plan was created"""
  createdUtc: DateTime!
  """End date/time of current billing period"""
  currentBillEndUtc: DateTime!
  """Start date/time of current billing period"""
  currentBillStartUtc: DateTime!
  """Unique account plan ID"""
  id: Long!
  """Indicates whether account plan is active"""
  isActive: Boolean!
  """Indicates whether the plan is Pay-As-You-Go"""
  isPrepay: Boolean!
  """
  Minimum credit balance that will trigger more credits to be automatically purchased
  """
  minimumCredits: Float!
  """Id of user who last modified the service plan"""
  modifiedBy: String
  """Date/time the service plan was last modified"""
  modifiedUtc: DateTime!
  """Start date/time of next billing period"""
  nextBillUtc: DateTime!
  """
  ID of credit block to be purchased when downgrading from a scale-based plan to credit-based plan
  """
  nextPlanCreditItemId: Long!
  """ID of next plan when downgrading plans"""
  nextPlanId: Long!
  """Service plan"""
  servicePlan: ServicePlanDto
  """ID of the service plan"""
  servicePlanId: Long!
  """Date/time the plan started"""
  startUtc: DateTime!
  """
  Date/time that the trial plan will end at which time a new plan much be selected for the account to remain active.
  """
  trialEndUtc: DateTime
}


scalar URL


"""Plan based on a service type that can be available to accounts"""
type ServicePlanDto {
  """Collection of Account invoice line items"""
  accountInvoiceLineItems: [AccountInvoiceLineItem]
  """Collection of Account service plans"""
  accountServicePlans: [AccountServicePlan]
  """Id of user who created the service plan"""
  createdBy: String
  """Date/time the service plan was created"""
  createdUtc: DateTime!
  """Non-monetary value of each credit"""
  creditValue: Float!
  """Collection of credit blocks"""
  credits: [ServicePlanCredit]
  """Description of service plan"""
  description: String
  """Order of which the service plan is displayed"""
  displayOrder: Int!
  """Collection of features"""
  features: [ServicePlanFeatureDto]
  """Unique service plan ID"""
  id: Long!
  """Unique internal service plan name"""
  internalPlanName: String
  """Indicates whether service plan is active"""
  isActive: Boolean!
  """Indicates whether service plan is displayed on websites/applications"""
  isPublic: Boolean!
  """
  Indicates whether service plan is a trial plan. Only one service plan can be a trail per service type
  """
  isTrial: Boolean!
  """Id of user who last modified the service plan"""
  modifiedBy: String
  """Date/time the service plan was last modified"""
  modifiedUtc: DateTime!
  """Unique name of service plan"""
  planName: String
  """
  Determines the perceived value of the service plan used to determine if the plan is an upgrade/downgrade from another service plan
  """
  rank: Float!
  """Collection of scales"""
  scales: [ServicePlanScale]
  """Service type associated with the plan"""
  serviceType: ServiceType!
  """Number of days a trial plan can be used before an upgrade is required"""
  trialDays: Int!
}


"""Payment receipt associated with an invoice that was paid"""
type AccountReceipt {
  """Amount charged to payment method"""
  amount: Float!
  """Id of user who receipt the invoice"""
  createdBy: String
  """Date/time the receipt was created"""
  createdUtc: DateTime!
  """Unique receipt ID"""
  id: String!
  """
  ID of invoice associated with the receipt. Refer to the **accountInvoice** query to get invoice details.
  """
  invoiceId: String!
  """Type of credit card"""
  paymentCardNetwork: CreditCardNetwork
  """2 digit expiration month"""
  paymentExpMonth: Int
  """4 digit expiration year"""
  paymentExpYear: Int
  """Last 4 digits of credit card to assist in identifying payment method"""
  paymentLast4Digits: String
  """Nickname of payment method used to make payment"""
  paymentNickname: String
  """Reason credit card was declined."""
  reason: CardDeclineReason!
  """Payment status"""
  status: PaymentStatus!
  """Payment transaction ID"""
  transactionId: String
}


"""Line items detail the specific services being invoiced for"""
type AccountInvoiceLineItem {
  """Total amount due for this line item"""
  amount: Float!
  """Id of user who created the line item"""
  createdBy: String
  """Date/time the line item was created"""
  createdUtc: DateTime!
  """Description of service being invoiced for"""
  description: String
  """Unique line item ID"""
  id: String!
  """Indicates whether line item is a discount or not"""
  isDiscount: Boolean!
  """Id of user who last modified the line item"""
  modifiedBy: String
  """Date/time the line item was last modified"""
  modifiedUtc: DateTime!
  """Number of items for the respective service type"""
  qty: Float!
  """Service type fee rate"""
  rate: Float!
  """Service type"""
  serviceType: ServiceType
}


"""Represents the configuration of a feature within a service plan"""
type ServicePlanFeatureDto {
  """Description of feature when the account status is *Active*"""
  activeDescription: String
  """Limit of feature when the account status is *Active*"""
  activeLimit: Long!
  """Id of user who created the service plan feature"""
  createdBy: String
  """Date/time the service plan feature was created"""
  createdUtc: DateTime!
  """Feature"""
  globalFeature: GlobalFeature
  """ID of the Feature"""
  globalFeatureId: Long!
  """Description of feature when the account status is *Hibernate*"""
  hibernateDescription: String
  """Limit of feature when the account status is *Hibernate*"""
  hibernateLimit: Long!
  """Unique service plan feature ID"""
  id: Long!
  """Id of user who last modified the service plan feature"""
  modifiedBy: String
  """Date/time the service plan feature was last modified"""
  modifiedUtc: DateTime!
  """Description of feature when the account status is *Relax*"""
  relaxDescription: String
  """Limit of feature when the account status is *Relax*"""
  relaxLimit: Long!
  """Service plan"""
  servicePlan: ServicePlanDto
  """ID of the Service plan"""
  servicePlanId: Long!
  """Description of feature when the account status is *Suspend*"""
  suspendDescription: String
  """Limit of feature when the account status is *Suspend*"""
  suspendLimit: Long!
}


"""Global feature that can be added to a service plan"""
type GlobalFeature {
  """Id of user who created the feature"""
  createdBy: String
  """Date/time the feature was created"""
  createdUtc: DateTime!
  """Description of feature"""
  description: String
  """Order in which the feature is displayed"""
  displayOrder: Int!
  """Unique ID of feature"""
  id: Long!
  """Indicates whether features is active"""
  isActive: Boolean!
  """Indicates whether feature is displayed on websites/applications"""
  isPublic: Boolean!
  """Unique feature key"""
  key: String
  """Unique key code of feature"""
  keyCode: UUID
  """Id of user who last modified the feature"""
  modifiedBy: String
  """Date/time the feature was last modified"""
  modifiedUtc: DateTime!
  """Unique name of feature"""
  name: String
  """Collection of service plan features"""
  servicePlanFeatures: [ServicePlanFeatureDto]
}


"""
The \`@defer\` directive may be provided for fragment spreads and inline fragments to inform the executor to delay the execution of the current fragment to indicate deprioritization of the current fragment. A query with \`@defer\` directive will cause the request to potentially return multiple responses, where non-deferred data is delivered in the initial response and data deferred is delivered in a subsequent response. \`@include\` and \`@skip\` take precedence over \`@defer\`.
"""
directive @defer(
  """Deferred when true."""
  if: Boolean
  """
  If this argument label has a value other than null, it will be passed on to the result of this defer directive. This label is intended to give client applications a way to identify to which fragment a deferred result belongs to.
  """
  label: String
) on FRAGMENT_SPREAD | INLINE_FRAGMENT
"""
The \`@stream\` directive may be provided for a field of \`List\` type so that the backend can leverage technology such as asynchronous iterators to provide a partial list in the initial response, and additional list items in subsequent responses. \`@include\` and \`@skip\` take precedence over \`@stream\`.
"""
directive @stream(
  """Streamed when true."""
  if: Boolean
  """The initial elements that shall be send down to the consumer."""
  initialCount: Int! = 0
  """
  If this argument label has a value other than null, it will be passed on to the result of this stream directive. This label is intended to give client applications a way to identify to which fragment a streamed result belongs to.
  """
  label: String
) on FIELD
directive @authorize(
  """
  Defines when when the resolver shall be executed.By default the resolver is executed after the policy has determined that the current user is allowed to access the field.
  """
  apply: ApplyPolicy! = BEFORE_RESOLVER
  """
  The name of the authorization policy that determines access to the annotated resource.
  """
  policy: String
  """Roles that are allowed to access the annotated resource."""
  roles: [String!]
) repeatable on SCHEMA | OBJECT | FIELD_DEFINITION
`,de=db(),Us=Jo(Go.DIRECTIVES,[]);var Fc;const nb=Yo((Fc=de.getQueryType())==null?void 0:Fc.getFields());var Cc;const eb=Yo((Cc=de.getMutationType())==null?void 0:Cc.getFields());var Ec;const tb=Yo((Ec=de.getSubscriptionType())==null?void 0:Ec.getFields()),iu=wt.keyBy(_d(),i=>i.name.toLocaleLowerCase()),ib=wt.mapValues(iu,i=>{const e=Us.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return e?e.args.some(t=>t==="*")?i.args:e.args.map(t=>i.args.find(o=>o.name===t)).filter(t=>!!t):[]}),rb=Yo(de.getTypeMap()),ob=KO(de);function Yo(i){return wt.mapKeys(i||{},(e,t)=>t.toLocaleLowerCase())}function ab(){return wt.size(de.getTypeMap())<=10}function sb(){return[Os("Queries",de.getQueryType()),Os("Mutations",de.getMutationType()),Os("Subscriptions",de.getSubscriptionType()),mb(),pb()].filter(i=>!!i)}function Os(i,e){return lb(i,ub(e))}function ub(i){return wt.sortBy((i==null?void 0:i.getFields())||{},e=>e.name)}function lb(i,e){return e.length===0?null:{type:"menu",title:i,children:e.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:br.joinUrlPaths(Vo(),i.toLocaleLowerCase(),t.name)}))}}function pb(){return ab()?null:{type:"menu",title:"Types",children:wt.sortBy(wt.map(de.getTypeMap()),e=>e.name).filter(e=>!e.name.startsWith("__")).map(e=>({type:"page",title:e.name,section:"Types",href:br.joinUrlPaths(Vo(),"types",e.name)}))}}function Ab(){return!!de.getQueryType()}function Nb(i){return nb[i.toLocaleLowerCase()]}function wb(){return!!de.getMutationType()}function Rb(i){return eb[i.toLocaleLowerCase()]}function _b(){return!!de.getSubscriptionType()}function Bb(i){return tb[i.toLocaleLowerCase()]}function Ub(i){return rb[i.toLocaleLowerCase()]}function cb(i){return iu[i.toLocaleLowerCase()]}function Pb(i){return cb(i.name)!==void 0}function kb(){return wt.size(iu)>0}function xb(i){return ib[i.name.toLocaleLowerCase()]||[]}function Lb(i){if(i)return ob.getFor(i)}function Mb(i){return wt.flatMap(i.getFields(),e=>({field:e,possibleDescriptions:Rd(e,i)}))}function Rd(i,e){return i?i.description?[{description:i.description,from:e}]:jn(e)?e.getInterfaces().flatMap(t=>Rd(t.getFields()[i.name],t)):[]:[]}function _d(){return Us.some(i=>(i==null?void 0:i.name)==="*")?de.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):Us.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?de.getDirective(i):void 0).filter(i=>!!i)}function db(){return yc.trim().length===0?WO(JSON.parse(JSON.stringify({__schema:{types:[]}}))):YO(yc)}function mb(){const i=_d();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(e=>({type:"page",title:e.name,href:br.joinUrlPaths(Vo(),"directives",e.name),section:"Directives"}))}}const qb=Jo(Go.APP_TITLE,"GraphQL Documentation"),Bd=gb().concat(sb());Sb(Bd);const fb=Object.freeze(Bd),Gb=Ib();function gb(){return Jo(Go.PAGES,yb()).filter(e=>!!e).map(e=>Pd([],e))}function Ib(){const i=hb();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function Sb(i){function e(o,a){for(const s of o){if(s.type==="page"){a(s);continue}s.type==="menu"&&e(s.children,a)}}let t;e(i,o=>{t&&(t.next={title:o.title,section:o.section,href:o.href},o.previous={title:t.title,section:t.section,href:t.href}),t=o})}function hb(){return Ud(()=>!0)}function Jb(i){return Ud(e=>e.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function Ud(i){function e(t){for(const o of t){if(o.type==="page"&&i(o))return o;if(o.type==="menu"){const a=e(o.children);if(a)return a}}return null}return e(fb)}function Pd(i,e){if(typeof e.content=="string")return{type:"page",title:e.title,content:e.content,href:br.joinUrlPaths(Vo(),...i,Tc(e.title))};const t=i.concat([Tc(e.title)]);return{type:"menu",title:e.title,children:e.content.map(o=>({...Pd(t,o),section:e.title}))}}function Tc(i){return br.generatePathSegment(i,new Ac)}function yb(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{EC as A,ab as B,Ub as C,Lb as D,Kt as E,nt as F,Vn as G,Je as H,jn as I,he as J,F as K,Mb as L,fi as M,ki as N,Db as O,Mo as P,Dc as Q,gr as R,bb as S,Ac as T,Tn as U,Ae as V,qb as W,wt as _,wb as a,Ab as b,Nb as c,_b as d,Bb as e,Jb as f,Rb as g,Gb as h,bc as i,Ob as j,kb as k,cb as l,xb as m,Pb as n,Vo as o,fb as p,pt as q,nd as r,de as s,ye as t,br as u,Dn as v,vb as w,Jo as x,Go as y,lr as z};
