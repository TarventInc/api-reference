var VS=Object.defineProperty;var WS=(t,o,r)=>o in t?VS(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;var tp=(t,o,r)=>(WS(t,typeof o!="symbol"?o+"":o,r),r);import{c as Fi,u as Sa}from"./_commonjsHelpers.f9c16f81.js";import{b as ya}from"./paths.f4ce6776.js";function hr(){return{convert:t=>t==null||t===""?null:String(t),asString:t=>String(t),type:t=>t.string().optional()}}function ip(t){return{convert:o=>{if(typeof o=="object")return o;if(typeof o=="string"){const r=JSON.parse(o);return typeof r!="object"?null:r}return null},asString:o=>JSON.stringify(o),type:o=>o.record(t(o).optional()).optional()}}function Fr(t){return{convert:o=>{if(Array.isArray(o))return o;if(typeof o=="string"){const r=JSON.parse(o);return Array.isArray(r)?r:null}return null},asString:o=>JSON.stringify(o),type:o=>o.array(t(o)).optional()}}function rp(t){return{convert:o=>o==null||!t.find(r=>r===o)?null:o,asString:o=>String(o),type:o=>o.enum(t).optional()}}function ae(t,o){const r=u=>o.convert(u[t]);return{name:jS(t),key:t,asEnv:u=>({[t]:o.asString(u)}),zod:{type:o.type},get:r,getOrDefault:(u,s)=>r(u)??s}}function jS(t){return t.toLowerCase().replace(/([-_][a-z])/gi,o=>o.toUpperCase().replace("-","").replace("_",""))}var HS={APP_LOGO:ae("APP_LOGO",hr()),APP_TITLE:ae("APP_TITLE",hr()),APP_FAVICON:ae("APP_FAVICON",hr()),SITE_ROOT:ae("SITE_ROOT",hr()),SITE_META:ae("SITE_META",ip(t=>t.string())),CUSTOM_STYLES:ae("CUSTOM_STYLES",Fr(t=>t.string())),FIELDS_SORTING:ae("FIELDS_SORTING",rp(["default","alphabetical"])),ARGUMENTS_SORTING:ae("ARGUMENTS_SORTING",rp(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:ae("QUERY_GENERATION_FACTORIES",ip(t=>t.union([t.string(),t.boolean(),t.number(),t.null(),t.record(t.unknown())]))),PAGES:ae("PAGES",Fr(t=>{const o=t.lazy(()=>t.object({title:t.string().min(1),content:t.union([t.array(o),t.string().min(1)])}));return o})),EXTERNAL_LINKS:ae("EXTERNAL_LINKS",Fr(t=>t.object({label:t.string().min(1),href:t.string().min(1),position:t.union([t.literal("header"),t.literal("navigation")]).optional(),kind:t.string().min(1).optional(),group:t.string().min(1).optional()}))),DIRECTIVES:ae("DIRECTIVES",Fr(t=>t.object({name:t.string().min(1),args:t.array(t.string())})))};function QS(){return{convert:t=>{if(t===null||t===void 0)return null;switch(typeof t){case"boolean":return t;case"string":const o=t.toLowerCase().trim();return o==="true"||o==="t"||o==="1";case"number":return t!==0;default:return null}},asString:t=>String(t),type:t=>t.boolean().optional()}}ae("MAGIDOC_GENERATE",QS());var Te={},YS={get exports(){return Te},set exports(t){Te=t}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(t,o){(function(){var r,u="4.17.21",s=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",I="Expected a function",T="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",D=500,E="__lodash_placeholder__",B=1,M=2,z=4,J=1,mn=2,an=1,Tn=2,Ve=4,hn=8,An=16,Bn=32,qn=64,Pn=128,We=256,N=512,Q=30,Jn="...",rt=800,yt=16,Ni=1,_t=2,Ui=3,Pe=1/0,Fe=9007199254740991,wt=17976931348623157e292,Tt=0/0,ue=4294967295,C=ue-1,P=ue>>>1,w=[["ary",Pn],["bind",an],["bindKey",Tn],["curry",hn],["curryRight",An],["flip",N],["partial",Bn],["partialRight",qn],["rearg",We]],R="[object Arguments]",pn="[object Array]",Cn="[object AsyncFunction]",ln="[object Boolean]",se="[object Date]",ni="[object DOMException]",ot="[object Error]",xn="[object Function]",ba="[object GeneratorFunction]",Oe="[object Map]",ei="[object Number]",ol="[object Null]",je="[object Object]",va="[object Promise]",al="[object Proxy]",ti="[object RegExp]",Ce="[object Set]",ii="[object String]",Bi="[object Symbol]",ul="[object Undefined]",ri="[object WeakMap]",sl="[object WeakSet]",oi="[object ArrayBuffer]",Rt="[object DataView]",Mr="[object Float32Array]",kr="[object Float64Array]",qr="[object Int8Array]",Jr="[object Int16Array]",Gr="[object Int32Array]",Vr="[object Uint8Array]",Wr="[object Uint8ClampedArray]",jr="[object Uint16Array]",Hr="[object Uint32Array]",pl=/\b__p \+= '';/g,ll=/\b(__p \+=) '' \+/g,cl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Aa=/&(?:amp|lt|gt|quot|#39);/g,Da=/[&<>"']/g,dl=RegExp(Aa.source),ml=RegExp(Da.source),gl=/<%-([\s\S]+?)%>/g,Il=/<%([\s\S]+?)%>/g,Na=/<%=([\s\S]+?)%>/g,fl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Sl=/^\w*$/,yl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qr=/[\\^$.*+?()[\]{}|]/g,Tl=RegExp(Qr.source),Yr=/^\s+/,hl=/\s/,Fl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ol=/\{\n\/\* \[wrapped with (.+)\] \*/,Cl=/,? & /,El=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,bl=/[()=,{}\[\]\/\s]/,vl=/\\(\\)?/g,Al=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ua=/\w*$/,Dl=/^[-+]0x[0-9a-f]+$/i,Nl=/^0b[01]+$/i,Ul=/^\[object .+?Constructor\]$/,Bl=/^0o[0-7]+$/i,_l=/^(?:0|[1-9]\d*)$/,wl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_i=/($^)/,Rl=/['\n\r\u2028\u2029\\]/g,wi="\\ud800-\\udfff",Ll="\\u0300-\\u036f",Pl="\\ufe20-\\ufe2f",xl="\\u20d0-\\u20ff",Ba=Ll+Pl+xl,_a="\\u2700-\\u27bf",wa="a-z\\xdf-\\xf6\\xf8-\\xff",Ml="\\xac\\xb1\\xd7\\xf7",kl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ql="\\u2000-\\u206f",Jl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ra="A-Z\\xc0-\\xd6\\xd8-\\xde",La="\\ufe0e\\ufe0f",Pa=Ml+kl+ql+Jl,Kr="['’]",Gl="["+wi+"]",xa="["+Pa+"]",Ri="["+Ba+"]",Ma="\\d+",Vl="["+_a+"]",ka="["+wa+"]",qa="[^"+wi+Pa+Ma+_a+wa+Ra+"]",$r="\\ud83c[\\udffb-\\udfff]",Wl="(?:"+Ri+"|"+$r+")",Ja="[^"+wi+"]",Xr="(?:\\ud83c[\\udde6-\\uddff]){2}",zr="[\\ud800-\\udbff][\\udc00-\\udfff]",Lt="["+Ra+"]",Ga="\\u200d",Va="(?:"+ka+"|"+qa+")",jl="(?:"+Lt+"|"+qa+")",Wa="(?:"+Kr+"(?:d|ll|m|re|s|t|ve))?",ja="(?:"+Kr+"(?:D|LL|M|RE|S|T|VE))?",Ha=Wl+"?",Qa="["+La+"]?",Hl="(?:"+Ga+"(?:"+[Ja,Xr,zr].join("|")+")"+Qa+Ha+")*",Ql="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Yl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ya=Qa+Ha+Hl,Kl="(?:"+[Vl,Xr,zr].join("|")+")"+Ya,$l="(?:"+[Ja+Ri+"?",Ri,Xr,zr,Gl].join("|")+")",Xl=RegExp(Kr,"g"),zl=RegExp(Ri,"g"),Zr=RegExp($r+"(?="+$r+")|"+$l+Ya,"g"),Zl=RegExp([Lt+"?"+ka+"+"+Wa+"(?="+[xa,Lt,"$"].join("|")+")",jl+"+"+ja+"(?="+[xa,Lt+Va,"$"].join("|")+")",Lt+"?"+Va+"+"+Wa,Lt+"+"+ja,Yl,Ql,Ma,Kl].join("|"),"g"),nc=RegExp("["+Ga+wi+Ba+La+"]"),ec=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,tc=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ic=-1,Sn={};Sn[Mr]=Sn[kr]=Sn[qr]=Sn[Jr]=Sn[Gr]=Sn[Vr]=Sn[Wr]=Sn[jr]=Sn[Hr]=!0,Sn[R]=Sn[pn]=Sn[oi]=Sn[ln]=Sn[Rt]=Sn[se]=Sn[ot]=Sn[xn]=Sn[Oe]=Sn[ei]=Sn[je]=Sn[ti]=Sn[Ce]=Sn[ii]=Sn[ri]=!1;var fn={};fn[R]=fn[pn]=fn[oi]=fn[Rt]=fn[ln]=fn[se]=fn[Mr]=fn[kr]=fn[qr]=fn[Jr]=fn[Gr]=fn[Oe]=fn[ei]=fn[je]=fn[ti]=fn[Ce]=fn[ii]=fn[Bi]=fn[Vr]=fn[Wr]=fn[jr]=fn[Hr]=!0,fn[ot]=fn[xn]=fn[ri]=!1;var rc={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},oc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ac={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},uc={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},sc=parseFloat,pc=parseInt,Ka=typeof Fi=="object"&&Fi&&Fi.Object===Object&&Fi,lc=typeof self=="object"&&self&&self.Object===Object&&self,Rn=Ka||lc||Function("return this")(),no=o&&!o.nodeType&&o,ht=no&&!0&&t&&!t.nodeType&&t,$a=ht&&ht.exports===no,eo=$a&&Ka.process,pe=function(){try{var f=ht&&ht.require&&ht.require("util").types;return f||eo&&eo.binding&&eo.binding("util")}catch{}}(),Xa=pe&&pe.isArrayBuffer,za=pe&&pe.isDate,Za=pe&&pe.isMap,nu=pe&&pe.isRegExp,eu=pe&&pe.isSet,tu=pe&&pe.isTypedArray;function ne(f,O,F){switch(F.length){case 0:return f.call(O);case 1:return f.call(O,F[0]);case 2:return f.call(O,F[0],F[1]);case 3:return f.call(O,F[0],F[1],F[2])}return f.apply(O,F)}function cc(f,O,F,L){for(var Y=-1,sn=f==null?0:f.length;++Y<sn;){var Nn=f[Y];O(L,Nn,F(Nn),f)}return L}function le(f,O){for(var F=-1,L=f==null?0:f.length;++F<L&&O(f[F],F,f)!==!1;);return f}function dc(f,O){for(var F=f==null?0:f.length;F--&&O(f[F],F,f)!==!1;);return f}function iu(f,O){for(var F=-1,L=f==null?0:f.length;++F<L;)if(!O(f[F],F,f))return!1;return!0}function at(f,O){for(var F=-1,L=f==null?0:f.length,Y=0,sn=[];++F<L;){var Nn=f[F];O(Nn,F,f)&&(sn[Y++]=Nn)}return sn}function Li(f,O){var F=f==null?0:f.length;return!!F&&Pt(f,O,0)>-1}function to(f,O,F){for(var L=-1,Y=f==null?0:f.length;++L<Y;)if(F(O,f[L]))return!0;return!1}function yn(f,O){for(var F=-1,L=f==null?0:f.length,Y=Array(L);++F<L;)Y[F]=O(f[F],F,f);return Y}function ut(f,O){for(var F=-1,L=O.length,Y=f.length;++F<L;)f[Y+F]=O[F];return f}function io(f,O,F,L){var Y=-1,sn=f==null?0:f.length;for(L&&sn&&(F=f[++Y]);++Y<sn;)F=O(F,f[Y],Y,f);return F}function mc(f,O,F,L){var Y=f==null?0:f.length;for(L&&Y&&(F=f[--Y]);Y--;)F=O(F,f[Y],Y,f);return F}function ro(f,O){for(var F=-1,L=f==null?0:f.length;++F<L;)if(O(f[F],F,f))return!0;return!1}var gc=oo("length");function Ic(f){return f.split("")}function fc(f){return f.match(El)||[]}function ru(f,O,F){var L;return F(f,function(Y,sn,Nn){if(O(Y,sn,Nn))return L=sn,!1}),L}function Pi(f,O,F,L){for(var Y=f.length,sn=F+(L?1:-1);L?sn--:++sn<Y;)if(O(f[sn],sn,f))return sn;return-1}function Pt(f,O,F){return O===O?Dc(f,O,F):Pi(f,ou,F)}function Sc(f,O,F,L){for(var Y=F-1,sn=f.length;++Y<sn;)if(L(f[Y],O))return Y;return-1}function ou(f){return f!==f}function au(f,O){var F=f==null?0:f.length;return F?uo(f,O)/F:Tt}function oo(f){return function(O){return O==null?r:O[f]}}function ao(f){return function(O){return f==null?r:f[O]}}function uu(f,O,F,L,Y){return Y(f,function(sn,Nn,gn){F=L?(L=!1,sn):O(F,sn,Nn,gn)}),F}function yc(f,O){var F=f.length;for(f.sort(O);F--;)f[F]=f[F].value;return f}function uo(f,O){for(var F,L=-1,Y=f.length;++L<Y;){var sn=O(f[L]);sn!==r&&(F=F===r?sn:F+sn)}return F}function so(f,O){for(var F=-1,L=Array(f);++F<f;)L[F]=O(F);return L}function Tc(f,O){return yn(O,function(F){return[F,f[F]]})}function su(f){return f&&f.slice(0,du(f)+1).replace(Yr,"")}function ee(f){return function(O){return f(O)}}function po(f,O){return yn(O,function(F){return f[F]})}function ai(f,O){return f.has(O)}function pu(f,O){for(var F=-1,L=f.length;++F<L&&Pt(O,f[F],0)>-1;);return F}function lu(f,O){for(var F=f.length;F--&&Pt(O,f[F],0)>-1;);return F}function hc(f,O){for(var F=f.length,L=0;F--;)f[F]===O&&++L;return L}var Fc=ao(rc),Oc=ao(oc);function Cc(f){return"\\"+uc[f]}function Ec(f,O){return f==null?r:f[O]}function xt(f){return nc.test(f)}function bc(f){return ec.test(f)}function vc(f){for(var O,F=[];!(O=f.next()).done;)F.push(O.value);return F}function lo(f){var O=-1,F=Array(f.size);return f.forEach(function(L,Y){F[++O]=[Y,L]}),F}function cu(f,O){return function(F){return f(O(F))}}function st(f,O){for(var F=-1,L=f.length,Y=0,sn=[];++F<L;){var Nn=f[F];(Nn===O||Nn===E)&&(f[F]=E,sn[Y++]=F)}return sn}function xi(f){var O=-1,F=Array(f.size);return f.forEach(function(L){F[++O]=L}),F}function Ac(f){var O=-1,F=Array(f.size);return f.forEach(function(L){F[++O]=[L,L]}),F}function Dc(f,O,F){for(var L=F-1,Y=f.length;++L<Y;)if(f[L]===O)return L;return-1}function Nc(f,O,F){for(var L=F+1;L--;)if(f[L]===O)return L;return L}function Mt(f){return xt(f)?Bc(f):gc(f)}function Ee(f){return xt(f)?_c(f):Ic(f)}function du(f){for(var O=f.length;O--&&hl.test(f.charAt(O)););return O}var Uc=ao(ac);function Bc(f){for(var O=Zr.lastIndex=0;Zr.test(f);)++O;return O}function _c(f){return f.match(Zr)||[]}function wc(f){return f.match(Zl)||[]}var Rc=function f(O){O=O==null?Rn:kt.defaults(Rn.Object(),O,kt.pick(Rn,tc));var F=O.Array,L=O.Date,Y=O.Error,sn=O.Function,Nn=O.Math,gn=O.Object,co=O.RegExp,Lc=O.String,ce=O.TypeError,Mi=F.prototype,Pc=sn.prototype,qt=gn.prototype,ki=O["__core-js_shared__"],qi=Pc.toString,dn=qt.hasOwnProperty,xc=0,mu=function(){var n=/[^.]+$/.exec(ki&&ki.keys&&ki.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ji=qt.toString,Mc=qi.call(gn),kc=Rn._,qc=co("^"+qi.call(dn).replace(Qr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gi=$a?O.Buffer:r,pt=O.Symbol,Vi=O.Uint8Array,gu=Gi?Gi.allocUnsafe:r,Wi=cu(gn.getPrototypeOf,gn),Iu=gn.create,fu=qt.propertyIsEnumerable,ji=Mi.splice,Su=pt?pt.isConcatSpreadable:r,ui=pt?pt.iterator:r,Ft=pt?pt.toStringTag:r,Hi=function(){try{var n=vt(gn,"defineProperty");return n({},"",{}),n}catch{}}(),Jc=O.clearTimeout!==Rn.clearTimeout&&O.clearTimeout,Gc=L&&L.now!==Rn.Date.now&&L.now,Vc=O.setTimeout!==Rn.setTimeout&&O.setTimeout,Qi=Nn.ceil,Yi=Nn.floor,mo=gn.getOwnPropertySymbols,Wc=Gi?Gi.isBuffer:r,yu=O.isFinite,jc=Mi.join,Hc=cu(gn.keys,gn),Un=Nn.max,Mn=Nn.min,Qc=L.now,Yc=O.parseInt,Tu=Nn.random,Kc=Mi.reverse,go=vt(O,"DataView"),si=vt(O,"Map"),Io=vt(O,"Promise"),Jt=vt(O,"Set"),pi=vt(O,"WeakMap"),li=vt(gn,"create"),Ki=pi&&new pi,Gt={},$c=At(go),Xc=At(si),zc=At(Io),Zc=At(Jt),nd=At(pi),$i=pt?pt.prototype:r,ci=$i?$i.valueOf:r,hu=$i?$i.toString:r;function l(n){if(On(n)&&!K(n)&&!(n instanceof tn)){if(n instanceof de)return n;if(dn.call(n,"__wrapped__"))return Fs(n)}return new de(n)}var Vt=function(){function n(){}return function(e){if(!Fn(e))return{};if(Iu)return Iu(e);n.prototype=e;var i=new n;return n.prototype=r,i}}();function Xi(){}function de(n,e){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=r}l.templateSettings={escape:gl,evaluate:Il,interpolate:Na,variable:"",imports:{_:l}},l.prototype=Xi.prototype,l.prototype.constructor=l,de.prototype=Vt(Xi.prototype),de.prototype.constructor=de;function tn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ue,this.__views__=[]}function ed(){var n=new tn(this.__wrapped__);return n.__actions__=Yn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Yn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Yn(this.__views__),n}function td(){if(this.__filtered__){var n=new tn(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function id(){var n=this.__wrapped__.value(),e=this.__dir__,i=K(n),a=e<0,p=i?n.length:0,c=Im(0,p,this.__views__),m=c.start,g=c.end,S=g-m,b=a?g:m-1,v=this.__iteratees__,U=v.length,_=0,k=Mn(S,this.__takeCount__);if(!i||!a&&p==S&&k==S)return Wu(n,this.__actions__);var j=[];n:for(;S--&&_<k;){b+=e;for(var X=-1,H=n[b];++X<U;){var nn=v[X],on=nn.iteratee,re=nn.type,Wn=on(H);if(re==_t)H=Wn;else if(!Wn){if(re==Ni)continue n;break n}}j[_++]=H}return j}tn.prototype=Vt(Xi.prototype),tn.prototype.constructor=tn;function Ot(n){var e=-1,i=n==null?0:n.length;for(this.clear();++e<i;){var a=n[e];this.set(a[0],a[1])}}function rd(){this.__data__=li?li(null):{},this.size=0}function od(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}function ad(n){var e=this.__data__;if(li){var i=e[n];return i===h?r:i}return dn.call(e,n)?e[n]:r}function ud(n){var e=this.__data__;return li?e[n]!==r:dn.call(e,n)}function sd(n,e){var i=this.__data__;return this.size+=this.has(n)?0:1,i[n]=li&&e===r?h:e,this}Ot.prototype.clear=rd,Ot.prototype.delete=od,Ot.prototype.get=ad,Ot.prototype.has=ud,Ot.prototype.set=sd;function He(n){var e=-1,i=n==null?0:n.length;for(this.clear();++e<i;){var a=n[e];this.set(a[0],a[1])}}function pd(){this.__data__=[],this.size=0}function ld(n){var e=this.__data__,i=zi(e,n);if(i<0)return!1;var a=e.length-1;return i==a?e.pop():ji.call(e,i,1),--this.size,!0}function cd(n){var e=this.__data__,i=zi(e,n);return i<0?r:e[i][1]}function dd(n){return zi(this.__data__,n)>-1}function md(n,e){var i=this.__data__,a=zi(i,n);return a<0?(++this.size,i.push([n,e])):i[a][1]=e,this}He.prototype.clear=pd,He.prototype.delete=ld,He.prototype.get=cd,He.prototype.has=dd,He.prototype.set=md;function Qe(n){var e=-1,i=n==null?0:n.length;for(this.clear();++e<i;){var a=n[e];this.set(a[0],a[1])}}function gd(){this.size=0,this.__data__={hash:new Ot,map:new(si||He),string:new Ot}}function Id(n){var e=lr(this,n).delete(n);return this.size-=e?1:0,e}function fd(n){return lr(this,n).get(n)}function Sd(n){return lr(this,n).has(n)}function yd(n,e){var i=lr(this,n),a=i.size;return i.set(n,e),this.size+=i.size==a?0:1,this}Qe.prototype.clear=gd,Qe.prototype.delete=Id,Qe.prototype.get=fd,Qe.prototype.has=Sd,Qe.prototype.set=yd;function Ct(n){var e=-1,i=n==null?0:n.length;for(this.__data__=new Qe;++e<i;)this.add(n[e])}function Td(n){return this.__data__.set(n,h),this}function hd(n){return this.__data__.has(n)}Ct.prototype.add=Ct.prototype.push=Td,Ct.prototype.has=hd;function be(n){var e=this.__data__=new He(n);this.size=e.size}function Fd(){this.__data__=new He,this.size=0}function Od(n){var e=this.__data__,i=e.delete(n);return this.size=e.size,i}function Cd(n){return this.__data__.get(n)}function Ed(n){return this.__data__.has(n)}function bd(n,e){var i=this.__data__;if(i instanceof He){var a=i.__data__;if(!si||a.length<s-1)return a.push([n,e]),this.size=++i.size,this;i=this.__data__=new Qe(a)}return i.set(n,e),this.size=i.size,this}be.prototype.clear=Fd,be.prototype.delete=Od,be.prototype.get=Cd,be.prototype.has=Ed,be.prototype.set=bd;function Fu(n,e){var i=K(n),a=!i&&Dt(n),p=!i&&!a&&gt(n),c=!i&&!a&&!p&&Qt(n),m=i||a||p||c,g=m?so(n.length,Lc):[],S=g.length;for(var b in n)(e||dn.call(n,b))&&!(m&&(b=="length"||p&&(b=="offset"||b=="parent")||c&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Xe(b,S)))&&g.push(b);return g}function Ou(n){var e=n.length;return e?n[vo(0,e-1)]:r}function vd(n,e){return cr(Yn(n),Et(e,0,n.length))}function Ad(n){return cr(Yn(n))}function fo(n,e,i){(i!==r&&!ve(n[e],i)||i===r&&!(e in n))&&Ye(n,e,i)}function di(n,e,i){var a=n[e];(!(dn.call(n,e)&&ve(a,i))||i===r&&!(e in n))&&Ye(n,e,i)}function zi(n,e){for(var i=n.length;i--;)if(ve(n[i][0],e))return i;return-1}function Dd(n,e,i,a){return lt(n,function(p,c,m){e(a,p,i(p),m)}),a}function Cu(n,e){return n&&Me(e,_n(e),n)}function Nd(n,e){return n&&Me(e,$n(e),n)}function Ye(n,e,i){e=="__proto__"&&Hi?Hi(n,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):n[e]=i}function So(n,e){for(var i=-1,a=e.length,p=F(a),c=n==null;++i<a;)p[i]=c?r:Xo(n,e[i]);return p}function Et(n,e,i){return n===n&&(i!==r&&(n=n<=i?n:i),e!==r&&(n=n>=e?n:e)),n}function me(n,e,i,a,p,c){var m,g=e&B,S=e&M,b=e&z;if(i&&(m=p?i(n,a,p,c):i(n)),m!==r)return m;if(!Fn(n))return n;var v=K(n);if(v){if(m=Sm(n),!g)return Yn(n,m)}else{var U=kn(n),_=U==xn||U==ba;if(gt(n))return Qu(n,g);if(U==je||U==R||_&&!p){if(m=S||_?{}:ds(n),!g)return S?am(n,Nd(m,n)):om(n,Cu(m,n))}else{if(!fn[U])return p?n:{};m=ym(n,U,g)}}c||(c=new be);var k=c.get(n);if(k)return k;c.set(n,m),Js(n)?n.forEach(function(H){m.add(me(H,e,i,H,n,c))}):ks(n)&&n.forEach(function(H,nn){m.set(nn,me(H,e,i,nn,n,c))});var j=b?S?xo:Po:S?$n:_n,X=v?r:j(n);return le(X||n,function(H,nn){X&&(nn=H,H=n[nn]),di(m,nn,me(H,e,i,nn,n,c))}),m}function Ud(n){var e=_n(n);return function(i){return Eu(i,n,e)}}function Eu(n,e,i){var a=i.length;if(n==null)return!a;for(n=gn(n);a--;){var p=i[a],c=e[p],m=n[p];if(m===r&&!(p in n)||!c(m))return!1}return!0}function bu(n,e,i){if(typeof n!="function")throw new ce(I);return Ti(function(){n.apply(r,i)},e)}function mi(n,e,i,a){var p=-1,c=Li,m=!0,g=n.length,S=[],b=e.length;if(!g)return S;i&&(e=yn(e,ee(i))),a?(c=to,m=!1):e.length>=s&&(c=ai,m=!1,e=new Ct(e));n:for(;++p<g;){var v=n[p],U=i==null?v:i(v);if(v=a||v!==0?v:0,m&&U===U){for(var _=b;_--;)if(e[_]===U)continue n;S.push(v)}else c(e,U,a)||S.push(v)}return S}var lt=zu(xe),vu=zu(To,!0);function Bd(n,e){var i=!0;return lt(n,function(a,p,c){return i=!!e(a,p,c),i}),i}function Zi(n,e,i){for(var a=-1,p=n.length;++a<p;){var c=n[a],m=e(c);if(m!=null&&(g===r?m===m&&!ie(m):i(m,g)))var g=m,S=c}return S}function _d(n,e,i,a){var p=n.length;for(i=$(i),i<0&&(i=-i>p?0:p+i),a=a===r||a>p?p:$(a),a<0&&(a+=p),a=i>a?0:Vs(a);i<a;)n[i++]=e;return n}function Au(n,e){var i=[];return lt(n,function(a,p,c){e(a,p,c)&&i.push(a)}),i}function Ln(n,e,i,a,p){var c=-1,m=n.length;for(i||(i=hm),p||(p=[]);++c<m;){var g=n[c];e>0&&i(g)?e>1?Ln(g,e-1,i,a,p):ut(p,g):a||(p[p.length]=g)}return p}var yo=Zu(),Du=Zu(!0);function xe(n,e){return n&&yo(n,e,_n)}function To(n,e){return n&&Du(n,e,_n)}function nr(n,e){return at(e,function(i){return ze(n[i])})}function bt(n,e){e=dt(e,n);for(var i=0,a=e.length;n!=null&&i<a;)n=n[ke(e[i++])];return i&&i==a?n:r}function Nu(n,e,i){var a=e(n);return K(n)?a:ut(a,i(n))}function Gn(n){return n==null?n===r?ul:ol:Ft&&Ft in gn(n)?gm(n):Am(n)}function ho(n,e){return n>e}function wd(n,e){return n!=null&&dn.call(n,e)}function Rd(n,e){return n!=null&&e in gn(n)}function Ld(n,e,i){return n>=Mn(e,i)&&n<Un(e,i)}function Fo(n,e,i){for(var a=i?to:Li,p=n[0].length,c=n.length,m=c,g=F(c),S=1/0,b=[];m--;){var v=n[m];m&&e&&(v=yn(v,ee(e))),S=Mn(v.length,S),g[m]=!i&&(e||p>=120&&v.length>=120)?new Ct(m&&v):r}v=n[0];var U=-1,_=g[0];n:for(;++U<p&&b.length<S;){var k=v[U],j=e?e(k):k;if(k=i||k!==0?k:0,!(_?ai(_,j):a(b,j,i))){for(m=c;--m;){var X=g[m];if(!(X?ai(X,j):a(n[m],j,i)))continue n}_&&_.push(j),b.push(k)}}return b}function Pd(n,e,i,a){return xe(n,function(p,c,m){e(a,i(p),c,m)}),a}function gi(n,e,i){e=dt(e,n),n=fs(n,e);var a=n==null?n:n[ke(Ie(e))];return a==null?r:ne(a,n,i)}function Uu(n){return On(n)&&Gn(n)==R}function xd(n){return On(n)&&Gn(n)==oi}function Md(n){return On(n)&&Gn(n)==se}function Ii(n,e,i,a,p){return n===e?!0:n==null||e==null||!On(n)&&!On(e)?n!==n&&e!==e:kd(n,e,i,a,Ii,p)}function kd(n,e,i,a,p,c){var m=K(n),g=K(e),S=m?pn:kn(n),b=g?pn:kn(e);S=S==R?je:S,b=b==R?je:b;var v=S==je,U=b==je,_=S==b;if(_&&gt(n)){if(!gt(e))return!1;m=!0,v=!1}if(_&&!v)return c||(c=new be),m||Qt(n)?ps(n,e,i,a,p,c):dm(n,e,S,i,a,p,c);if(!(i&J)){var k=v&&dn.call(n,"__wrapped__"),j=U&&dn.call(e,"__wrapped__");if(k||j){var X=k?n.value():n,H=j?e.value():e;return c||(c=new be),p(X,H,i,a,c)}}return _?(c||(c=new be),mm(n,e,i,a,p,c)):!1}function qd(n){return On(n)&&kn(n)==Oe}function Oo(n,e,i,a){var p=i.length,c=p,m=!a;if(n==null)return!c;for(n=gn(n);p--;){var g=i[p];if(m&&g[2]?g[1]!==n[g[0]]:!(g[0]in n))return!1}for(;++p<c;){g=i[p];var S=g[0],b=n[S],v=g[1];if(m&&g[2]){if(b===r&&!(S in n))return!1}else{var U=new be;if(a)var _=a(b,v,S,n,e,U);if(!(_===r?Ii(v,b,J|mn,a,U):_))return!1}}return!0}function Bu(n){if(!Fn(n)||Om(n))return!1;var e=ze(n)?qc:Ul;return e.test(At(n))}function Jd(n){return On(n)&&Gn(n)==ti}function Gd(n){return On(n)&&kn(n)==Ce}function Vd(n){return On(n)&&Sr(n.length)&&!!Sn[Gn(n)]}function _u(n){return typeof n=="function"?n:n==null?Xn:typeof n=="object"?K(n)?Lu(n[0],n[1]):Ru(n):np(n)}function Co(n){if(!yi(n))return Hc(n);var e=[];for(var i in gn(n))dn.call(n,i)&&i!="constructor"&&e.push(i);return e}function Wd(n){if(!Fn(n))return vm(n);var e=yi(n),i=[];for(var a in n)a=="constructor"&&(e||!dn.call(n,a))||i.push(a);return i}function Eo(n,e){return n<e}function wu(n,e){var i=-1,a=Kn(n)?F(n.length):[];return lt(n,function(p,c,m){a[++i]=e(p,c,m)}),a}function Ru(n){var e=ko(n);return e.length==1&&e[0][2]?gs(e[0][0],e[0][1]):function(i){return i===n||Oo(i,n,e)}}function Lu(n,e){return Jo(n)&&ms(e)?gs(ke(n),e):function(i){var a=Xo(i,n);return a===r&&a===e?zo(i,n):Ii(e,a,J|mn)}}function er(n,e,i,a,p){n!==e&&yo(e,function(c,m){if(p||(p=new be),Fn(c))jd(n,e,m,i,er,a,p);else{var g=a?a(Vo(n,m),c,m+"",n,e,p):r;g===r&&(g=c),fo(n,m,g)}},$n)}function jd(n,e,i,a,p,c,m){var g=Vo(n,i),S=Vo(e,i),b=m.get(S);if(b){fo(n,i,b);return}var v=c?c(g,S,i+"",n,e,m):r,U=v===r;if(U){var _=K(S),k=!_&&gt(S),j=!_&&!k&&Qt(S);v=S,_||k||j?K(g)?v=g:En(g)?v=Yn(g):k?(U=!1,v=Qu(S,!0)):j?(U=!1,v=Yu(S,!0)):v=[]:hi(S)||Dt(S)?(v=g,Dt(g)?v=Ws(g):(!Fn(g)||ze(g))&&(v=ds(S))):U=!1}U&&(m.set(S,v),p(v,S,a,c,m),m.delete(S)),fo(n,i,v)}function Pu(n,e){var i=n.length;if(i)return e+=e<0?i:0,Xe(e,i)?n[e]:r}function xu(n,e,i){e.length?e=yn(e,function(c){return K(c)?function(m){return bt(m,c.length===1?c[0]:c)}:c}):e=[Xn];var a=-1;e=yn(e,ee(W()));var p=wu(n,function(c,m,g){var S=yn(e,function(b){return b(c)});return{criteria:S,index:++a,value:c}});return yc(p,function(c,m){return rm(c,m,i)})}function Hd(n,e){return Mu(n,e,function(i,a){return zo(n,a)})}function Mu(n,e,i){for(var a=-1,p=e.length,c={};++a<p;){var m=e[a],g=bt(n,m);i(g,m)&&fi(c,dt(m,n),g)}return c}function Qd(n){return function(e){return bt(e,n)}}function bo(n,e,i,a){var p=a?Sc:Pt,c=-1,m=e.length,g=n;for(n===e&&(e=Yn(e)),i&&(g=yn(n,ee(i)));++c<m;)for(var S=0,b=e[c],v=i?i(b):b;(S=p(g,v,S,a))>-1;)g!==n&&ji.call(g,S,1),ji.call(n,S,1);return n}function ku(n,e){for(var i=n?e.length:0,a=i-1;i--;){var p=e[i];if(i==a||p!==c){var c=p;Xe(p)?ji.call(n,p,1):No(n,p)}}return n}function vo(n,e){return n+Yi(Tu()*(e-n+1))}function Yd(n,e,i,a){for(var p=-1,c=Un(Qi((e-n)/(i||1)),0),m=F(c);c--;)m[a?c:++p]=n,n+=i;return m}function Ao(n,e){var i="";if(!n||e<1||e>Fe)return i;do e%2&&(i+=n),e=Yi(e/2),e&&(n+=n);while(e);return i}function Z(n,e){return Wo(Is(n,e,Xn),n+"")}function Kd(n){return Ou(Yt(n))}function $d(n,e){var i=Yt(n);return cr(i,Et(e,0,i.length))}function fi(n,e,i,a){if(!Fn(n))return n;e=dt(e,n);for(var p=-1,c=e.length,m=c-1,g=n;g!=null&&++p<c;){var S=ke(e[p]),b=i;if(S==="__proto__"||S==="constructor"||S==="prototype")return n;if(p!=m){var v=g[S];b=a?a(v,S,g):r,b===r&&(b=Fn(v)?v:Xe(e[p+1])?[]:{})}di(g,S,b),g=g[S]}return n}var qu=Ki?function(n,e){return Ki.set(n,e),n}:Xn,Xd=Hi?function(n,e){return Hi(n,"toString",{configurable:!0,enumerable:!1,value:na(e),writable:!0})}:Xn;function zd(n){return cr(Yt(n))}function ge(n,e,i){var a=-1,p=n.length;e<0&&(e=-e>p?0:p+e),i=i>p?p:i,i<0&&(i+=p),p=e>i?0:i-e>>>0,e>>>=0;for(var c=F(p);++a<p;)c[a]=n[a+e];return c}function Zd(n,e){var i;return lt(n,function(a,p,c){return i=e(a,p,c),!i}),!!i}function tr(n,e,i){var a=0,p=n==null?a:n.length;if(typeof e=="number"&&e===e&&p<=P){for(;a<p;){var c=a+p>>>1,m=n[c];m!==null&&!ie(m)&&(i?m<=e:m<e)?a=c+1:p=c}return p}return Do(n,e,Xn,i)}function Do(n,e,i,a){var p=0,c=n==null?0:n.length;if(c===0)return 0;e=i(e);for(var m=e!==e,g=e===null,S=ie(e),b=e===r;p<c;){var v=Yi((p+c)/2),U=i(n[v]),_=U!==r,k=U===null,j=U===U,X=ie(U);if(m)var H=a||j;else b?H=j&&(a||_):g?H=j&&_&&(a||!k):S?H=j&&_&&!k&&(a||!X):k||X?H=!1:H=a?U<=e:U<e;H?p=v+1:c=v}return Mn(c,C)}function Ju(n,e){for(var i=-1,a=n.length,p=0,c=[];++i<a;){var m=n[i],g=e?e(m):m;if(!i||!ve(g,S)){var S=g;c[p++]=m===0?0:m}}return c}function Gu(n){return typeof n=="number"?n:ie(n)?Tt:+n}function te(n){if(typeof n=="string")return n;if(K(n))return yn(n,te)+"";if(ie(n))return hu?hu.call(n):"";var e=n+"";return e=="0"&&1/n==-Pe?"-0":e}function ct(n,e,i){var a=-1,p=Li,c=n.length,m=!0,g=[],S=g;if(i)m=!1,p=to;else if(c>=s){var b=e?null:lm(n);if(b)return xi(b);m=!1,p=ai,S=new Ct}else S=e?[]:g;n:for(;++a<c;){var v=n[a],U=e?e(v):v;if(v=i||v!==0?v:0,m&&U===U){for(var _=S.length;_--;)if(S[_]===U)continue n;e&&S.push(U),g.push(v)}else p(S,U,i)||(S!==g&&S.push(U),g.push(v))}return g}function No(n,e){return e=dt(e,n),n=fs(n,e),n==null||delete n[ke(Ie(e))]}function Vu(n,e,i,a){return fi(n,e,i(bt(n,e)),a)}function ir(n,e,i,a){for(var p=n.length,c=a?p:-1;(a?c--:++c<p)&&e(n[c],c,n););return i?ge(n,a?0:c,a?c+1:p):ge(n,a?c+1:0,a?p:c)}function Wu(n,e){var i=n;return i instanceof tn&&(i=i.value()),io(e,function(a,p){return p.func.apply(p.thisArg,ut([a],p.args))},i)}function Uo(n,e,i){var a=n.length;if(a<2)return a?ct(n[0]):[];for(var p=-1,c=F(a);++p<a;)for(var m=n[p],g=-1;++g<a;)g!=p&&(c[p]=mi(c[p]||m,n[g],e,i));return ct(Ln(c,1),e,i)}function ju(n,e,i){for(var a=-1,p=n.length,c=e.length,m={};++a<p;){var g=a<c?e[a]:r;i(m,n[a],g)}return m}function Bo(n){return En(n)?n:[]}function _o(n){return typeof n=="function"?n:Xn}function dt(n,e){return K(n)?n:Jo(n,e)?[n]:hs(cn(n))}var nm=Z;function mt(n,e,i){var a=n.length;return i=i===r?a:i,!e&&i>=a?n:ge(n,e,i)}var Hu=Jc||function(n){return Rn.clearTimeout(n)};function Qu(n,e){if(e)return n.slice();var i=n.length,a=gu?gu(i):new n.constructor(i);return n.copy(a),a}function wo(n){var e=new n.constructor(n.byteLength);return new Vi(e).set(new Vi(n)),e}function em(n,e){var i=e?wo(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.byteLength)}function tm(n){var e=new n.constructor(n.source,Ua.exec(n));return e.lastIndex=n.lastIndex,e}function im(n){return ci?gn(ci.call(n)):{}}function Yu(n,e){var i=e?wo(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.length)}function Ku(n,e){if(n!==e){var i=n!==r,a=n===null,p=n===n,c=ie(n),m=e!==r,g=e===null,S=e===e,b=ie(e);if(!g&&!b&&!c&&n>e||c&&m&&S&&!g&&!b||a&&m&&S||!i&&S||!p)return 1;if(!a&&!c&&!b&&n<e||b&&i&&p&&!a&&!c||g&&i&&p||!m&&p||!S)return-1}return 0}function rm(n,e,i){for(var a=-1,p=n.criteria,c=e.criteria,m=p.length,g=i.length;++a<m;){var S=Ku(p[a],c[a]);if(S){if(a>=g)return S;var b=i[a];return S*(b=="desc"?-1:1)}}return n.index-e.index}function $u(n,e,i,a){for(var p=-1,c=n.length,m=i.length,g=-1,S=e.length,b=Un(c-m,0),v=F(S+b),U=!a;++g<S;)v[g]=e[g];for(;++p<m;)(U||p<c)&&(v[i[p]]=n[p]);for(;b--;)v[g++]=n[p++];return v}function Xu(n,e,i,a){for(var p=-1,c=n.length,m=-1,g=i.length,S=-1,b=e.length,v=Un(c-g,0),U=F(v+b),_=!a;++p<v;)U[p]=n[p];for(var k=p;++S<b;)U[k+S]=e[S];for(;++m<g;)(_||p<c)&&(U[k+i[m]]=n[p++]);return U}function Yn(n,e){var i=-1,a=n.length;for(e||(e=F(a));++i<a;)e[i]=n[i];return e}function Me(n,e,i,a){var p=!i;i||(i={});for(var c=-1,m=e.length;++c<m;){var g=e[c],S=a?a(i[g],n[g],g,i,n):r;S===r&&(S=n[g]),p?Ye(i,g,S):di(i,g,S)}return i}function om(n,e){return Me(n,qo(n),e)}function am(n,e){return Me(n,ls(n),e)}function rr(n,e){return function(i,a){var p=K(i)?cc:Dd,c=e?e():{};return p(i,n,W(a,2),c)}}function Wt(n){return Z(function(e,i){var a=-1,p=i.length,c=p>1?i[p-1]:r,m=p>2?i[2]:r;for(c=n.length>3&&typeof c=="function"?(p--,c):r,m&&Vn(i[0],i[1],m)&&(c=p<3?r:c,p=1),e=gn(e);++a<p;){var g=i[a];g&&n(e,g,a,c)}return e})}function zu(n,e){return function(i,a){if(i==null)return i;if(!Kn(i))return n(i,a);for(var p=i.length,c=e?p:-1,m=gn(i);(e?c--:++c<p)&&a(m[c],c,m)!==!1;);return i}}function Zu(n){return function(e,i,a){for(var p=-1,c=gn(e),m=a(e),g=m.length;g--;){var S=m[n?g:++p];if(i(c[S],S,c)===!1)break}return e}}function um(n,e,i){var a=e&an,p=Si(n);function c(){var m=this&&this!==Rn&&this instanceof c?p:n;return m.apply(a?i:this,arguments)}return c}function ns(n){return function(e){e=cn(e);var i=xt(e)?Ee(e):r,a=i?i[0]:e.charAt(0),p=i?mt(i,1).join(""):e.slice(1);return a[n]()+p}}function jt(n){return function(e){return io(zs(Xs(e).replace(Xl,"")),n,"")}}function Si(n){return function(){var e=arguments;switch(e.length){case 0:return new n;case 1:return new n(e[0]);case 2:return new n(e[0],e[1]);case 3:return new n(e[0],e[1],e[2]);case 4:return new n(e[0],e[1],e[2],e[3]);case 5:return new n(e[0],e[1],e[2],e[3],e[4]);case 6:return new n(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new n(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var i=Vt(n.prototype),a=n.apply(i,e);return Fn(a)?a:i}}function sm(n,e,i){var a=Si(n);function p(){for(var c=arguments.length,m=F(c),g=c,S=Ht(p);g--;)m[g]=arguments[g];var b=c<3&&m[0]!==S&&m[c-1]!==S?[]:st(m,S);if(c-=b.length,c<i)return os(n,e,or,p.placeholder,r,m,b,r,r,i-c);var v=this&&this!==Rn&&this instanceof p?a:n;return ne(v,this,m)}return p}function es(n){return function(e,i,a){var p=gn(e);if(!Kn(e)){var c=W(i,3);e=_n(e),i=function(g){return c(p[g],g,p)}}var m=n(e,i,a);return m>-1?p[c?e[m]:m]:r}}function ts(n){return $e(function(e){var i=e.length,a=i,p=de.prototype.thru;for(n&&e.reverse();a--;){var c=e[a];if(typeof c!="function")throw new ce(I);if(p&&!m&&pr(c)=="wrapper")var m=new de([],!0)}for(a=m?a:i;++a<i;){c=e[a];var g=pr(c),S=g=="wrapper"?Mo(c):r;S&&Go(S[0])&&S[1]==(Pn|hn|Bn|We)&&!S[4].length&&S[9]==1?m=m[pr(S[0])].apply(m,S[3]):m=c.length==1&&Go(c)?m[g]():m.thru(c)}return function(){var b=arguments,v=b[0];if(m&&b.length==1&&K(v))return m.plant(v).value();for(var U=0,_=i?e[U].apply(this,b):v;++U<i;)_=e[U].call(this,_);return _}})}function or(n,e,i,a,p,c,m,g,S,b){var v=e&Pn,U=e&an,_=e&Tn,k=e&(hn|An),j=e&N,X=_?r:Si(n);function H(){for(var nn=arguments.length,on=F(nn),re=nn;re--;)on[re]=arguments[re];if(k)var Wn=Ht(H),oe=hc(on,Wn);if(a&&(on=$u(on,a,p,k)),c&&(on=Xu(on,c,m,k)),nn-=oe,k&&nn<b){var bn=st(on,Wn);return os(n,e,or,H.placeholder,i,on,bn,g,S,b-nn)}var Ae=U?i:this,nt=_?Ae[n]:n;return nn=on.length,g?on=Dm(on,g):j&&nn>1&&on.reverse(),v&&S<nn&&(on.length=S),this&&this!==Rn&&this instanceof H&&(nt=X||Si(nt)),nt.apply(Ae,on)}return H}function is(n,e){return function(i,a){return Pd(i,n,e(a),{})}}function ar(n,e){return function(i,a){var p;if(i===r&&a===r)return e;if(i!==r&&(p=i),a!==r){if(p===r)return a;typeof i=="string"||typeof a=="string"?(i=te(i),a=te(a)):(i=Gu(i),a=Gu(a)),p=n(i,a)}return p}}function Ro(n){return $e(function(e){return e=yn(e,ee(W())),Z(function(i){var a=this;return n(e,function(p){return ne(p,a,i)})})})}function ur(n,e){e=e===r?" ":te(e);var i=e.length;if(i<2)return i?Ao(e,n):e;var a=Ao(e,Qi(n/Mt(e)));return xt(e)?mt(Ee(a),0,n).join(""):a.slice(0,n)}function pm(n,e,i,a){var p=e&an,c=Si(n);function m(){for(var g=-1,S=arguments.length,b=-1,v=a.length,U=F(v+S),_=this&&this!==Rn&&this instanceof m?c:n;++b<v;)U[b]=a[b];for(;S--;)U[b++]=arguments[++g];return ne(_,p?i:this,U)}return m}function rs(n){return function(e,i,a){return a&&typeof a!="number"&&Vn(e,i,a)&&(i=a=r),e=Ze(e),i===r?(i=e,e=0):i=Ze(i),a=a===r?e<i?1:-1:Ze(a),Yd(e,i,a,n)}}function sr(n){return function(e,i){return typeof e=="string"&&typeof i=="string"||(e=fe(e),i=fe(i)),n(e,i)}}function os(n,e,i,a,p,c,m,g,S,b){var v=e&hn,U=v?m:r,_=v?r:m,k=v?c:r,j=v?r:c;e|=v?Bn:qn,e&=~(v?qn:Bn),e&Ve||(e&=~(an|Tn));var X=[n,e,p,k,U,j,_,g,S,b],H=i.apply(r,X);return Go(n)&&Ss(H,X),H.placeholder=a,ys(H,n,e)}function Lo(n){var e=Nn[n];return function(i,a){if(i=fe(i),a=a==null?0:Mn($(a),292),a&&yu(i)){var p=(cn(i)+"e").split("e"),c=e(p[0]+"e"+(+p[1]+a));return p=(cn(c)+"e").split("e"),+(p[0]+"e"+(+p[1]-a))}return e(i)}}var lm=Jt&&1/xi(new Jt([,-0]))[1]==Pe?function(n){return new Jt(n)}:ia;function as(n){return function(e){var i=kn(e);return i==Oe?lo(e):i==Ce?Ac(e):Tc(e,n(e))}}function Ke(n,e,i,a,p,c,m,g){var S=e&Tn;if(!S&&typeof n!="function")throw new ce(I);var b=a?a.length:0;if(b||(e&=~(Bn|qn),a=p=r),m=m===r?m:Un($(m),0),g=g===r?g:$(g),b-=p?p.length:0,e&qn){var v=a,U=p;a=p=r}var _=S?r:Mo(n),k=[n,e,i,a,p,v,U,c,m,g];if(_&&bm(k,_),n=k[0],e=k[1],i=k[2],a=k[3],p=k[4],g=k[9]=k[9]===r?S?0:n.length:Un(k[9]-b,0),!g&&e&(hn|An)&&(e&=~(hn|An)),!e||e==an)var j=um(n,e,i);else e==hn||e==An?j=sm(n,e,g):(e==Bn||e==(an|Bn))&&!p.length?j=pm(n,e,i,a):j=or.apply(r,k);var X=_?qu:Ss;return ys(X(j,k),n,e)}function us(n,e,i,a){return n===r||ve(n,qt[i])&&!dn.call(a,i)?e:n}function ss(n,e,i,a,p,c){return Fn(n)&&Fn(e)&&(c.set(e,n),er(n,e,r,ss,c),c.delete(e)),n}function cm(n){return hi(n)?r:n}function ps(n,e,i,a,p,c){var m=i&J,g=n.length,S=e.length;if(g!=S&&!(m&&S>g))return!1;var b=c.get(n),v=c.get(e);if(b&&v)return b==e&&v==n;var U=-1,_=!0,k=i&mn?new Ct:r;for(c.set(n,e),c.set(e,n);++U<g;){var j=n[U],X=e[U];if(a)var H=m?a(X,j,U,e,n,c):a(j,X,U,n,e,c);if(H!==r){if(H)continue;_=!1;break}if(k){if(!ro(e,function(nn,on){if(!ai(k,on)&&(j===nn||p(j,nn,i,a,c)))return k.push(on)})){_=!1;break}}else if(!(j===X||p(j,X,i,a,c))){_=!1;break}}return c.delete(n),c.delete(e),_}function dm(n,e,i,a,p,c,m){switch(i){case Rt:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case oi:return!(n.byteLength!=e.byteLength||!c(new Vi(n),new Vi(e)));case ln:case se:case ei:return ve(+n,+e);case ot:return n.name==e.name&&n.message==e.message;case ti:case ii:return n==e+"";case Oe:var g=lo;case Ce:var S=a&J;if(g||(g=xi),n.size!=e.size&&!S)return!1;var b=m.get(n);if(b)return b==e;a|=mn,m.set(n,e);var v=ps(g(n),g(e),a,p,c,m);return m.delete(n),v;case Bi:if(ci)return ci.call(n)==ci.call(e)}return!1}function mm(n,e,i,a,p,c){var m=i&J,g=Po(n),S=g.length,b=Po(e),v=b.length;if(S!=v&&!m)return!1;for(var U=S;U--;){var _=g[U];if(!(m?_ in e:dn.call(e,_)))return!1}var k=c.get(n),j=c.get(e);if(k&&j)return k==e&&j==n;var X=!0;c.set(n,e),c.set(e,n);for(var H=m;++U<S;){_=g[U];var nn=n[_],on=e[_];if(a)var re=m?a(on,nn,_,e,n,c):a(nn,on,_,n,e,c);if(!(re===r?nn===on||p(nn,on,i,a,c):re)){X=!1;break}H||(H=_=="constructor")}if(X&&!H){var Wn=n.constructor,oe=e.constructor;Wn!=oe&&"constructor"in n&&"constructor"in e&&!(typeof Wn=="function"&&Wn instanceof Wn&&typeof oe=="function"&&oe instanceof oe)&&(X=!1)}return c.delete(n),c.delete(e),X}function $e(n){return Wo(Is(n,r,Es),n+"")}function Po(n){return Nu(n,_n,qo)}function xo(n){return Nu(n,$n,ls)}var Mo=Ki?function(n){return Ki.get(n)}:ia;function pr(n){for(var e=n.name+"",i=Gt[e],a=dn.call(Gt,e)?i.length:0;a--;){var p=i[a],c=p.func;if(c==null||c==n)return p.name}return e}function Ht(n){var e=dn.call(l,"placeholder")?l:n;return e.placeholder}function W(){var n=l.iteratee||ea;return n=n===ea?_u:n,arguments.length?n(arguments[0],arguments[1]):n}function lr(n,e){var i=n.__data__;return Fm(e)?i[typeof e=="string"?"string":"hash"]:i.map}function ko(n){for(var e=_n(n),i=e.length;i--;){var a=e[i],p=n[a];e[i]=[a,p,ms(p)]}return e}function vt(n,e){var i=Ec(n,e);return Bu(i)?i:r}function gm(n){var e=dn.call(n,Ft),i=n[Ft];try{n[Ft]=r;var a=!0}catch{}var p=Ji.call(n);return a&&(e?n[Ft]=i:delete n[Ft]),p}var qo=mo?function(n){return n==null?[]:(n=gn(n),at(mo(n),function(e){return fu.call(n,e)}))}:ra,ls=mo?function(n){for(var e=[];n;)ut(e,qo(n)),n=Wi(n);return e}:ra,kn=Gn;(go&&kn(new go(new ArrayBuffer(1)))!=Rt||si&&kn(new si)!=Oe||Io&&kn(Io.resolve())!=va||Jt&&kn(new Jt)!=Ce||pi&&kn(new pi)!=ri)&&(kn=function(n){var e=Gn(n),i=e==je?n.constructor:r,a=i?At(i):"";if(a)switch(a){case $c:return Rt;case Xc:return Oe;case zc:return va;case Zc:return Ce;case nd:return ri}return e});function Im(n,e,i){for(var a=-1,p=i.length;++a<p;){var c=i[a],m=c.size;switch(c.type){case"drop":n+=m;break;case"dropRight":e-=m;break;case"take":e=Mn(e,n+m);break;case"takeRight":n=Un(n,e-m);break}}return{start:n,end:e}}function fm(n){var e=n.match(Ol);return e?e[1].split(Cl):[]}function cs(n,e,i){e=dt(e,n);for(var a=-1,p=e.length,c=!1;++a<p;){var m=ke(e[a]);if(!(c=n!=null&&i(n,m)))break;n=n[m]}return c||++a!=p?c:(p=n==null?0:n.length,!!p&&Sr(p)&&Xe(m,p)&&(K(n)||Dt(n)))}function Sm(n){var e=n.length,i=new n.constructor(e);return e&&typeof n[0]=="string"&&dn.call(n,"index")&&(i.index=n.index,i.input=n.input),i}function ds(n){return typeof n.constructor=="function"&&!yi(n)?Vt(Wi(n)):{}}function ym(n,e,i){var a=n.constructor;switch(e){case oi:return wo(n);case ln:case se:return new a(+n);case Rt:return em(n,i);case Mr:case kr:case qr:case Jr:case Gr:case Vr:case Wr:case jr:case Hr:return Yu(n,i);case Oe:return new a;case ei:case ii:return new a(n);case ti:return tm(n);case Ce:return new a;case Bi:return im(n)}}function Tm(n,e){var i=e.length;if(!i)return n;var a=i-1;return e[a]=(i>1?"& ":"")+e[a],e=e.join(i>2?", ":" "),n.replace(Fl,`{
/* [wrapped with `+e+`] */
`)}function hm(n){return K(n)||Dt(n)||!!(Su&&n&&n[Su])}function Xe(n,e){var i=typeof n;return e=e??Fe,!!e&&(i=="number"||i!="symbol"&&_l.test(n))&&n>-1&&n%1==0&&n<e}function Vn(n,e,i){if(!Fn(i))return!1;var a=typeof e;return(a=="number"?Kn(i)&&Xe(e,i.length):a=="string"&&e in i)?ve(i[e],n):!1}function Jo(n,e){if(K(n))return!1;var i=typeof n;return i=="number"||i=="symbol"||i=="boolean"||n==null||ie(n)?!0:Sl.test(n)||!fl.test(n)||e!=null&&n in gn(e)}function Fm(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Go(n){var e=pr(n),i=l[e];if(typeof i!="function"||!(e in tn.prototype))return!1;if(n===i)return!0;var a=Mo(i);return!!a&&n===a[0]}function Om(n){return!!mu&&mu in n}var Cm=ki?ze:oa;function yi(n){var e=n&&n.constructor,i=typeof e=="function"&&e.prototype||qt;return n===i}function ms(n){return n===n&&!Fn(n)}function gs(n,e){return function(i){return i==null?!1:i[n]===e&&(e!==r||n in gn(i))}}function Em(n){var e=Ir(n,function(a){return i.size===D&&i.clear(),a}),i=e.cache;return e}function bm(n,e){var i=n[1],a=e[1],p=i|a,c=p<(an|Tn|Pn),m=a==Pn&&i==hn||a==Pn&&i==We&&n[7].length<=e[8]||a==(Pn|We)&&e[7].length<=e[8]&&i==hn;if(!(c||m))return n;a&an&&(n[2]=e[2],p|=i&an?0:Ve);var g=e[3];if(g){var S=n[3];n[3]=S?$u(S,g,e[4]):g,n[4]=S?st(n[3],E):e[4]}return g=e[5],g&&(S=n[5],n[5]=S?Xu(S,g,e[6]):g,n[6]=S?st(n[5],E):e[6]),g=e[7],g&&(n[7]=g),a&Pn&&(n[8]=n[8]==null?e[8]:Mn(n[8],e[8])),n[9]==null&&(n[9]=e[9]),n[0]=e[0],n[1]=p,n}function vm(n){var e=[];if(n!=null)for(var i in gn(n))e.push(i);return e}function Am(n){return Ji.call(n)}function Is(n,e,i){return e=Un(e===r?n.length-1:e,0),function(){for(var a=arguments,p=-1,c=Un(a.length-e,0),m=F(c);++p<c;)m[p]=a[e+p];p=-1;for(var g=F(e+1);++p<e;)g[p]=a[p];return g[e]=i(m),ne(n,this,g)}}function fs(n,e){return e.length<2?n:bt(n,ge(e,0,-1))}function Dm(n,e){for(var i=n.length,a=Mn(e.length,i),p=Yn(n);a--;){var c=e[a];n[a]=Xe(c,i)?p[c]:r}return n}function Vo(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}var Ss=Ts(qu),Ti=Vc||function(n,e){return Rn.setTimeout(n,e)},Wo=Ts(Xd);function ys(n,e,i){var a=e+"";return Wo(n,Tm(a,Nm(fm(a),i)))}function Ts(n){var e=0,i=0;return function(){var a=Qc(),p=yt-(a-i);if(i=a,p>0){if(++e>=rt)return arguments[0]}else e=0;return n.apply(r,arguments)}}function cr(n,e){var i=-1,a=n.length,p=a-1;for(e=e===r?a:e;++i<e;){var c=vo(i,p),m=n[c];n[c]=n[i],n[i]=m}return n.length=e,n}var hs=Em(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(yl,function(i,a,p,c){e.push(p?c.replace(vl,"$1"):a||i)}),e});function ke(n){if(typeof n=="string"||ie(n))return n;var e=n+"";return e=="0"&&1/n==-Pe?"-0":e}function At(n){if(n!=null){try{return qi.call(n)}catch{}try{return n+""}catch{}}return""}function Nm(n,e){return le(w,function(i){var a="_."+i[0];e&i[1]&&!Li(n,a)&&n.push(a)}),n.sort()}function Fs(n){if(n instanceof tn)return n.clone();var e=new de(n.__wrapped__,n.__chain__);return e.__actions__=Yn(n.__actions__),e.__index__=n.__index__,e.__values__=n.__values__,e}function Um(n,e,i){(i?Vn(n,e,i):e===r)?e=1:e=Un($(e),0);var a=n==null?0:n.length;if(!a||e<1)return[];for(var p=0,c=0,m=F(Qi(a/e));p<a;)m[c++]=ge(n,p,p+=e);return m}function Bm(n){for(var e=-1,i=n==null?0:n.length,a=0,p=[];++e<i;){var c=n[e];c&&(p[a++]=c)}return p}function _m(){var n=arguments.length;if(!n)return[];for(var e=F(n-1),i=arguments[0],a=n;a--;)e[a-1]=arguments[a];return ut(K(i)?Yn(i):[i],Ln(e,1))}var wm=Z(function(n,e){return En(n)?mi(n,Ln(e,1,En,!0)):[]}),Rm=Z(function(n,e){var i=Ie(e);return En(i)&&(i=r),En(n)?mi(n,Ln(e,1,En,!0),W(i,2)):[]}),Lm=Z(function(n,e){var i=Ie(e);return En(i)&&(i=r),En(n)?mi(n,Ln(e,1,En,!0),r,i):[]});function Pm(n,e,i){var a=n==null?0:n.length;return a?(e=i||e===r?1:$(e),ge(n,e<0?0:e,a)):[]}function xm(n,e,i){var a=n==null?0:n.length;return a?(e=i||e===r?1:$(e),e=a-e,ge(n,0,e<0?0:e)):[]}function Mm(n,e){return n&&n.length?ir(n,W(e,3),!0,!0):[]}function km(n,e){return n&&n.length?ir(n,W(e,3),!0):[]}function qm(n,e,i,a){var p=n==null?0:n.length;return p?(i&&typeof i!="number"&&Vn(n,e,i)&&(i=0,a=p),_d(n,e,i,a)):[]}function Os(n,e,i){var a=n==null?0:n.length;if(!a)return-1;var p=i==null?0:$(i);return p<0&&(p=Un(a+p,0)),Pi(n,W(e,3),p)}function Cs(n,e,i){var a=n==null?0:n.length;if(!a)return-1;var p=a-1;return i!==r&&(p=$(i),p=i<0?Un(a+p,0):Mn(p,a-1)),Pi(n,W(e,3),p,!0)}function Es(n){var e=n==null?0:n.length;return e?Ln(n,1):[]}function Jm(n){var e=n==null?0:n.length;return e?Ln(n,Pe):[]}function Gm(n,e){var i=n==null?0:n.length;return i?(e=e===r?1:$(e),Ln(n,e)):[]}function Vm(n){for(var e=-1,i=n==null?0:n.length,a={};++e<i;){var p=n[e];a[p[0]]=p[1]}return a}function bs(n){return n&&n.length?n[0]:r}function Wm(n,e,i){var a=n==null?0:n.length;if(!a)return-1;var p=i==null?0:$(i);return p<0&&(p=Un(a+p,0)),Pt(n,e,p)}function jm(n){var e=n==null?0:n.length;return e?ge(n,0,-1):[]}var Hm=Z(function(n){var e=yn(n,Bo);return e.length&&e[0]===n[0]?Fo(e):[]}),Qm=Z(function(n){var e=Ie(n),i=yn(n,Bo);return e===Ie(i)?e=r:i.pop(),i.length&&i[0]===n[0]?Fo(i,W(e,2)):[]}),Ym=Z(function(n){var e=Ie(n),i=yn(n,Bo);return e=typeof e=="function"?e:r,e&&i.pop(),i.length&&i[0]===n[0]?Fo(i,r,e):[]});function Km(n,e){return n==null?"":jc.call(n,e)}function Ie(n){var e=n==null?0:n.length;return e?n[e-1]:r}function $m(n,e,i){var a=n==null?0:n.length;if(!a)return-1;var p=a;return i!==r&&(p=$(i),p=p<0?Un(a+p,0):Mn(p,a-1)),e===e?Nc(n,e,p):Pi(n,ou,p,!0)}function Xm(n,e){return n&&n.length?Pu(n,$(e)):r}var zm=Z(vs);function vs(n,e){return n&&n.length&&e&&e.length?bo(n,e):n}function Zm(n,e,i){return n&&n.length&&e&&e.length?bo(n,e,W(i,2)):n}function ng(n,e,i){return n&&n.length&&e&&e.length?bo(n,e,r,i):n}var eg=$e(function(n,e){var i=n==null?0:n.length,a=So(n,e);return ku(n,yn(e,function(p){return Xe(p,i)?+p:p}).sort(Ku)),a});function tg(n,e){var i=[];if(!(n&&n.length))return i;var a=-1,p=[],c=n.length;for(e=W(e,3);++a<c;){var m=n[a];e(m,a,n)&&(i.push(m),p.push(a))}return ku(n,p),i}function jo(n){return n==null?n:Kc.call(n)}function ig(n,e,i){var a=n==null?0:n.length;return a?(i&&typeof i!="number"&&Vn(n,e,i)?(e=0,i=a):(e=e==null?0:$(e),i=i===r?a:$(i)),ge(n,e,i)):[]}function rg(n,e){return tr(n,e)}function og(n,e,i){return Do(n,e,W(i,2))}function ag(n,e){var i=n==null?0:n.length;if(i){var a=tr(n,e);if(a<i&&ve(n[a],e))return a}return-1}function ug(n,e){return tr(n,e,!0)}function sg(n,e,i){return Do(n,e,W(i,2),!0)}function pg(n,e){var i=n==null?0:n.length;if(i){var a=tr(n,e,!0)-1;if(ve(n[a],e))return a}return-1}function lg(n){return n&&n.length?Ju(n):[]}function cg(n,e){return n&&n.length?Ju(n,W(e,2)):[]}function dg(n){var e=n==null?0:n.length;return e?ge(n,1,e):[]}function mg(n,e,i){return n&&n.length?(e=i||e===r?1:$(e),ge(n,0,e<0?0:e)):[]}function gg(n,e,i){var a=n==null?0:n.length;return a?(e=i||e===r?1:$(e),e=a-e,ge(n,e<0?0:e,a)):[]}function Ig(n,e){return n&&n.length?ir(n,W(e,3),!1,!0):[]}function fg(n,e){return n&&n.length?ir(n,W(e,3)):[]}var Sg=Z(function(n){return ct(Ln(n,1,En,!0))}),yg=Z(function(n){var e=Ie(n);return En(e)&&(e=r),ct(Ln(n,1,En,!0),W(e,2))}),Tg=Z(function(n){var e=Ie(n);return e=typeof e=="function"?e:r,ct(Ln(n,1,En,!0),r,e)});function hg(n){return n&&n.length?ct(n):[]}function Fg(n,e){return n&&n.length?ct(n,W(e,2)):[]}function Og(n,e){return e=typeof e=="function"?e:r,n&&n.length?ct(n,r,e):[]}function Ho(n){if(!(n&&n.length))return[];var e=0;return n=at(n,function(i){if(En(i))return e=Un(i.length,e),!0}),so(e,function(i){return yn(n,oo(i))})}function As(n,e){if(!(n&&n.length))return[];var i=Ho(n);return e==null?i:yn(i,function(a){return ne(e,r,a)})}var Cg=Z(function(n,e){return En(n)?mi(n,e):[]}),Eg=Z(function(n){return Uo(at(n,En))}),bg=Z(function(n){var e=Ie(n);return En(e)&&(e=r),Uo(at(n,En),W(e,2))}),vg=Z(function(n){var e=Ie(n);return e=typeof e=="function"?e:r,Uo(at(n,En),r,e)}),Ag=Z(Ho);function Dg(n,e){return ju(n||[],e||[],di)}function Ng(n,e){return ju(n||[],e||[],fi)}var Ug=Z(function(n){var e=n.length,i=e>1?n[e-1]:r;return i=typeof i=="function"?(n.pop(),i):r,As(n,i)});function Ds(n){var e=l(n);return e.__chain__=!0,e}function Bg(n,e){return e(n),n}function dr(n,e){return e(n)}var _g=$e(function(n){var e=n.length,i=e?n[0]:0,a=this.__wrapped__,p=function(c){return So(c,n)};return e>1||this.__actions__.length||!(a instanceof tn)||!Xe(i)?this.thru(p):(a=a.slice(i,+i+(e?1:0)),a.__actions__.push({func:dr,args:[p],thisArg:r}),new de(a,this.__chain__).thru(function(c){return e&&!c.length&&c.push(r),c}))});function wg(){return Ds(this)}function Rg(){return new de(this.value(),this.__chain__)}function Lg(){this.__values__===r&&(this.__values__=Gs(this.value()));var n=this.__index__>=this.__values__.length,e=n?r:this.__values__[this.__index__++];return{done:n,value:e}}function Pg(){return this}function xg(n){for(var e,i=this;i instanceof Xi;){var a=Fs(i);a.__index__=0,a.__values__=r,e?p.__wrapped__=a:e=a;var p=a;i=i.__wrapped__}return p.__wrapped__=n,e}function Mg(){var n=this.__wrapped__;if(n instanceof tn){var e=n;return this.__actions__.length&&(e=new tn(this)),e=e.reverse(),e.__actions__.push({func:dr,args:[jo],thisArg:r}),new de(e,this.__chain__)}return this.thru(jo)}function kg(){return Wu(this.__wrapped__,this.__actions__)}var qg=rr(function(n,e,i){dn.call(n,i)?++n[i]:Ye(n,i,1)});function Jg(n,e,i){var a=K(n)?iu:Bd;return i&&Vn(n,e,i)&&(e=r),a(n,W(e,3))}function Gg(n,e){var i=K(n)?at:Au;return i(n,W(e,3))}var Vg=es(Os),Wg=es(Cs);function jg(n,e){return Ln(mr(n,e),1)}function Hg(n,e){return Ln(mr(n,e),Pe)}function Qg(n,e,i){return i=i===r?1:$(i),Ln(mr(n,e),i)}function Ns(n,e){var i=K(n)?le:lt;return i(n,W(e,3))}function Us(n,e){var i=K(n)?dc:vu;return i(n,W(e,3))}var Yg=rr(function(n,e,i){dn.call(n,i)?n[i].push(e):Ye(n,i,[e])});function Kg(n,e,i,a){n=Kn(n)?n:Yt(n),i=i&&!a?$(i):0;var p=n.length;return i<0&&(i=Un(p+i,0)),yr(n)?i<=p&&n.indexOf(e,i)>-1:!!p&&Pt(n,e,i)>-1}var $g=Z(function(n,e,i){var a=-1,p=typeof e=="function",c=Kn(n)?F(n.length):[];return lt(n,function(m){c[++a]=p?ne(e,m,i):gi(m,e,i)}),c}),Xg=rr(function(n,e,i){Ye(n,i,e)});function mr(n,e){var i=K(n)?yn:wu;return i(n,W(e,3))}function zg(n,e,i,a){return n==null?[]:(K(e)||(e=e==null?[]:[e]),i=a?r:i,K(i)||(i=i==null?[]:[i]),xu(n,e,i))}var Zg=rr(function(n,e,i){n[i?0:1].push(e)},function(){return[[],[]]});function nI(n,e,i){var a=K(n)?io:uu,p=arguments.length<3;return a(n,W(e,4),i,p,lt)}function eI(n,e,i){var a=K(n)?mc:uu,p=arguments.length<3;return a(n,W(e,4),i,p,vu)}function tI(n,e){var i=K(n)?at:Au;return i(n,fr(W(e,3)))}function iI(n){var e=K(n)?Ou:Kd;return e(n)}function rI(n,e,i){(i?Vn(n,e,i):e===r)?e=1:e=$(e);var a=K(n)?vd:$d;return a(n,e)}function oI(n){var e=K(n)?Ad:zd;return e(n)}function aI(n){if(n==null)return 0;if(Kn(n))return yr(n)?Mt(n):n.length;var e=kn(n);return e==Oe||e==Ce?n.size:Co(n).length}function uI(n,e,i){var a=K(n)?ro:Zd;return i&&Vn(n,e,i)&&(e=r),a(n,W(e,3))}var sI=Z(function(n,e){if(n==null)return[];var i=e.length;return i>1&&Vn(n,e[0],e[1])?e=[]:i>2&&Vn(e[0],e[1],e[2])&&(e=[e[0]]),xu(n,Ln(e,1),[])}),gr=Gc||function(){return Rn.Date.now()};function pI(n,e){if(typeof e!="function")throw new ce(I);return n=$(n),function(){if(--n<1)return e.apply(this,arguments)}}function Bs(n,e,i){return e=i?r:e,e=n&&e==null?n.length:e,Ke(n,Pn,r,r,r,r,e)}function _s(n,e){var i;if(typeof e!="function")throw new ce(I);return n=$(n),function(){return--n>0&&(i=e.apply(this,arguments)),n<=1&&(e=r),i}}var Qo=Z(function(n,e,i){var a=an;if(i.length){var p=st(i,Ht(Qo));a|=Bn}return Ke(n,a,e,i,p)}),ws=Z(function(n,e,i){var a=an|Tn;if(i.length){var p=st(i,Ht(ws));a|=Bn}return Ke(e,a,n,i,p)});function Rs(n,e,i){e=i?r:e;var a=Ke(n,hn,r,r,r,r,r,e);return a.placeholder=Rs.placeholder,a}function Ls(n,e,i){e=i?r:e;var a=Ke(n,An,r,r,r,r,r,e);return a.placeholder=Ls.placeholder,a}function Ps(n,e,i){var a,p,c,m,g,S,b=0,v=!1,U=!1,_=!0;if(typeof n!="function")throw new ce(I);e=fe(e)||0,Fn(i)&&(v=!!i.leading,U="maxWait"in i,c=U?Un(fe(i.maxWait)||0,e):c,_="trailing"in i?!!i.trailing:_);function k(bn){var Ae=a,nt=p;return a=p=r,b=bn,m=n.apply(nt,Ae),m}function j(bn){return b=bn,g=Ti(nn,e),v?k(bn):m}function X(bn){var Ae=bn-S,nt=bn-b,ep=e-Ae;return U?Mn(ep,c-nt):ep}function H(bn){var Ae=bn-S,nt=bn-b;return S===r||Ae>=e||Ae<0||U&&nt>=c}function nn(){var bn=gr();if(H(bn))return on(bn);g=Ti(nn,X(bn))}function on(bn){return g=r,_&&a?k(bn):(a=p=r,m)}function re(){g!==r&&Hu(g),b=0,a=S=p=g=r}function Wn(){return g===r?m:on(gr())}function oe(){var bn=gr(),Ae=H(bn);if(a=arguments,p=this,S=bn,Ae){if(g===r)return j(S);if(U)return Hu(g),g=Ti(nn,e),k(S)}return g===r&&(g=Ti(nn,e)),m}return oe.cancel=re,oe.flush=Wn,oe}var lI=Z(function(n,e){return bu(n,1,e)}),cI=Z(function(n,e,i){return bu(n,fe(e)||0,i)});function dI(n){return Ke(n,N)}function Ir(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new ce(I);var i=function(){var a=arguments,p=e?e.apply(this,a):a[0],c=i.cache;if(c.has(p))return c.get(p);var m=n.apply(this,a);return i.cache=c.set(p,m)||c,m};return i.cache=new(Ir.Cache||Qe),i}Ir.Cache=Qe;function fr(n){if(typeof n!="function")throw new ce(I);return function(){var e=arguments;switch(e.length){case 0:return!n.call(this);case 1:return!n.call(this,e[0]);case 2:return!n.call(this,e[0],e[1]);case 3:return!n.call(this,e[0],e[1],e[2])}return!n.apply(this,e)}}function mI(n){return _s(2,n)}var gI=nm(function(n,e){e=e.length==1&&K(e[0])?yn(e[0],ee(W())):yn(Ln(e,1),ee(W()));var i=e.length;return Z(function(a){for(var p=-1,c=Mn(a.length,i);++p<c;)a[p]=e[p].call(this,a[p]);return ne(n,this,a)})}),Yo=Z(function(n,e){var i=st(e,Ht(Yo));return Ke(n,Bn,r,e,i)}),xs=Z(function(n,e){var i=st(e,Ht(xs));return Ke(n,qn,r,e,i)}),II=$e(function(n,e){return Ke(n,We,r,r,r,e)});function fI(n,e){if(typeof n!="function")throw new ce(I);return e=e===r?e:$(e),Z(n,e)}function SI(n,e){if(typeof n!="function")throw new ce(I);return e=e==null?0:Un($(e),0),Z(function(i){var a=i[e],p=mt(i,0,e);return a&&ut(p,a),ne(n,this,p)})}function yI(n,e,i){var a=!0,p=!0;if(typeof n!="function")throw new ce(I);return Fn(i)&&(a="leading"in i?!!i.leading:a,p="trailing"in i?!!i.trailing:p),Ps(n,e,{leading:a,maxWait:e,trailing:p})}function TI(n){return Bs(n,1)}function hI(n,e){return Yo(_o(e),n)}function FI(){if(!arguments.length)return[];var n=arguments[0];return K(n)?n:[n]}function OI(n){return me(n,z)}function CI(n,e){return e=typeof e=="function"?e:r,me(n,z,e)}function EI(n){return me(n,B|z)}function bI(n,e){return e=typeof e=="function"?e:r,me(n,B|z,e)}function vI(n,e){return e==null||Eu(n,e,_n(e))}function ve(n,e){return n===e||n!==n&&e!==e}var AI=sr(ho),DI=sr(function(n,e){return n>=e}),Dt=Uu(function(){return arguments}())?Uu:function(n){return On(n)&&dn.call(n,"callee")&&!fu.call(n,"callee")},K=F.isArray,NI=Xa?ee(Xa):xd;function Kn(n){return n!=null&&Sr(n.length)&&!ze(n)}function En(n){return On(n)&&Kn(n)}function UI(n){return n===!0||n===!1||On(n)&&Gn(n)==ln}var gt=Wc||oa,BI=za?ee(za):Md;function _I(n){return On(n)&&n.nodeType===1&&!hi(n)}function wI(n){if(n==null)return!0;if(Kn(n)&&(K(n)||typeof n=="string"||typeof n.splice=="function"||gt(n)||Qt(n)||Dt(n)))return!n.length;var e=kn(n);if(e==Oe||e==Ce)return!n.size;if(yi(n))return!Co(n).length;for(var i in n)if(dn.call(n,i))return!1;return!0}function RI(n,e){return Ii(n,e)}function LI(n,e,i){i=typeof i=="function"?i:r;var a=i?i(n,e):r;return a===r?Ii(n,e,r,i):!!a}function Ko(n){if(!On(n))return!1;var e=Gn(n);return e==ot||e==ni||typeof n.message=="string"&&typeof n.name=="string"&&!hi(n)}function PI(n){return typeof n=="number"&&yu(n)}function ze(n){if(!Fn(n))return!1;var e=Gn(n);return e==xn||e==ba||e==Cn||e==al}function Ms(n){return typeof n=="number"&&n==$(n)}function Sr(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Fe}function Fn(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}function On(n){return n!=null&&typeof n=="object"}var ks=Za?ee(Za):qd;function xI(n,e){return n===e||Oo(n,e,ko(e))}function MI(n,e,i){return i=typeof i=="function"?i:r,Oo(n,e,ko(e),i)}function kI(n){return qs(n)&&n!=+n}function qI(n){if(Cm(n))throw new Y(d);return Bu(n)}function JI(n){return n===null}function GI(n){return n==null}function qs(n){return typeof n=="number"||On(n)&&Gn(n)==ei}function hi(n){if(!On(n)||Gn(n)!=je)return!1;var e=Wi(n);if(e===null)return!0;var i=dn.call(e,"constructor")&&e.constructor;return typeof i=="function"&&i instanceof i&&qi.call(i)==Mc}var $o=nu?ee(nu):Jd;function VI(n){return Ms(n)&&n>=-Fe&&n<=Fe}var Js=eu?ee(eu):Gd;function yr(n){return typeof n=="string"||!K(n)&&On(n)&&Gn(n)==ii}function ie(n){return typeof n=="symbol"||On(n)&&Gn(n)==Bi}var Qt=tu?ee(tu):Vd;function WI(n){return n===r}function jI(n){return On(n)&&kn(n)==ri}function HI(n){return On(n)&&Gn(n)==sl}var QI=sr(Eo),YI=sr(function(n,e){return n<=e});function Gs(n){if(!n)return[];if(Kn(n))return yr(n)?Ee(n):Yn(n);if(ui&&n[ui])return vc(n[ui]());var e=kn(n),i=e==Oe?lo:e==Ce?xi:Yt;return i(n)}function Ze(n){if(!n)return n===0?n:0;if(n=fe(n),n===Pe||n===-Pe){var e=n<0?-1:1;return e*wt}return n===n?n:0}function $(n){var e=Ze(n),i=e%1;return e===e?i?e-i:e:0}function Vs(n){return n?Et($(n),0,ue):0}function fe(n){if(typeof n=="number")return n;if(ie(n))return Tt;if(Fn(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Fn(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=su(n);var i=Nl.test(n);return i||Bl.test(n)?pc(n.slice(2),i?2:8):Dl.test(n)?Tt:+n}function Ws(n){return Me(n,$n(n))}function KI(n){return n?Et($(n),-Fe,Fe):n===0?n:0}function cn(n){return n==null?"":te(n)}var $I=Wt(function(n,e){if(yi(e)||Kn(e)){Me(e,_n(e),n);return}for(var i in e)dn.call(e,i)&&di(n,i,e[i])}),js=Wt(function(n,e){Me(e,$n(e),n)}),Tr=Wt(function(n,e,i,a){Me(e,$n(e),n,a)}),XI=Wt(function(n,e,i,a){Me(e,_n(e),n,a)}),zI=$e(So);function ZI(n,e){var i=Vt(n);return e==null?i:Cu(i,e)}var nf=Z(function(n,e){n=gn(n);var i=-1,a=e.length,p=a>2?e[2]:r;for(p&&Vn(e[0],e[1],p)&&(a=1);++i<a;)for(var c=e[i],m=$n(c),g=-1,S=m.length;++g<S;){var b=m[g],v=n[b];(v===r||ve(v,qt[b])&&!dn.call(n,b))&&(n[b]=c[b])}return n}),ef=Z(function(n){return n.push(r,ss),ne(Hs,r,n)});function tf(n,e){return ru(n,W(e,3),xe)}function rf(n,e){return ru(n,W(e,3),To)}function of(n,e){return n==null?n:yo(n,W(e,3),$n)}function af(n,e){return n==null?n:Du(n,W(e,3),$n)}function uf(n,e){return n&&xe(n,W(e,3))}function sf(n,e){return n&&To(n,W(e,3))}function pf(n){return n==null?[]:nr(n,_n(n))}function lf(n){return n==null?[]:nr(n,$n(n))}function Xo(n,e,i){var a=n==null?r:bt(n,e);return a===r?i:a}function cf(n,e){return n!=null&&cs(n,e,wd)}function zo(n,e){return n!=null&&cs(n,e,Rd)}var df=is(function(n,e,i){e!=null&&typeof e.toString!="function"&&(e=Ji.call(e)),n[e]=i},na(Xn)),mf=is(function(n,e,i){e!=null&&typeof e.toString!="function"&&(e=Ji.call(e)),dn.call(n,e)?n[e].push(i):n[e]=[i]},W),gf=Z(gi);function _n(n){return Kn(n)?Fu(n):Co(n)}function $n(n){return Kn(n)?Fu(n,!0):Wd(n)}function If(n,e){var i={};return e=W(e,3),xe(n,function(a,p,c){Ye(i,e(a,p,c),a)}),i}function ff(n,e){var i={};return e=W(e,3),xe(n,function(a,p,c){Ye(i,p,e(a,p,c))}),i}var Sf=Wt(function(n,e,i){er(n,e,i)}),Hs=Wt(function(n,e,i,a){er(n,e,i,a)}),yf=$e(function(n,e){var i={};if(n==null)return i;var a=!1;e=yn(e,function(c){return c=dt(c,n),a||(a=c.length>1),c}),Me(n,xo(n),i),a&&(i=me(i,B|M|z,cm));for(var p=e.length;p--;)No(i,e[p]);return i});function Tf(n,e){return Qs(n,fr(W(e)))}var hf=$e(function(n,e){return n==null?{}:Hd(n,e)});function Qs(n,e){if(n==null)return{};var i=yn(xo(n),function(a){return[a]});return e=W(e),Mu(n,i,function(a,p){return e(a,p[0])})}function Ff(n,e,i){e=dt(e,n);var a=-1,p=e.length;for(p||(p=1,n=r);++a<p;){var c=n==null?r:n[ke(e[a])];c===r&&(a=p,c=i),n=ze(c)?c.call(n):c}return n}function Of(n,e,i){return n==null?n:fi(n,e,i)}function Cf(n,e,i,a){return a=typeof a=="function"?a:r,n==null?n:fi(n,e,i,a)}var Ys=as(_n),Ks=as($n);function Ef(n,e,i){var a=K(n),p=a||gt(n)||Qt(n);if(e=W(e,4),i==null){var c=n&&n.constructor;p?i=a?new c:[]:Fn(n)?i=ze(c)?Vt(Wi(n)):{}:i={}}return(p?le:xe)(n,function(m,g,S){return e(i,m,g,S)}),i}function bf(n,e){return n==null?!0:No(n,e)}function vf(n,e,i){return n==null?n:Vu(n,e,_o(i))}function Af(n,e,i,a){return a=typeof a=="function"?a:r,n==null?n:Vu(n,e,_o(i),a)}function Yt(n){return n==null?[]:po(n,_n(n))}function Df(n){return n==null?[]:po(n,$n(n))}function Nf(n,e,i){return i===r&&(i=e,e=r),i!==r&&(i=fe(i),i=i===i?i:0),e!==r&&(e=fe(e),e=e===e?e:0),Et(fe(n),e,i)}function Uf(n,e,i){return e=Ze(e),i===r?(i=e,e=0):i=Ze(i),n=fe(n),Ld(n,e,i)}function Bf(n,e,i){if(i&&typeof i!="boolean"&&Vn(n,e,i)&&(e=i=r),i===r&&(typeof e=="boolean"?(i=e,e=r):typeof n=="boolean"&&(i=n,n=r)),n===r&&e===r?(n=0,e=1):(n=Ze(n),e===r?(e=n,n=0):e=Ze(e)),n>e){var a=n;n=e,e=a}if(i||n%1||e%1){var p=Tu();return Mn(n+p*(e-n+sc("1e-"+((p+"").length-1))),e)}return vo(n,e)}var _f=jt(function(n,e,i){return e=e.toLowerCase(),n+(i?$s(e):e)});function $s(n){return Zo(cn(n).toLowerCase())}function Xs(n){return n=cn(n),n&&n.replace(wl,Fc).replace(zl,"")}function wf(n,e,i){n=cn(n),e=te(e);var a=n.length;i=i===r?a:Et($(i),0,a);var p=i;return i-=e.length,i>=0&&n.slice(i,p)==e}function Rf(n){return n=cn(n),n&&ml.test(n)?n.replace(Da,Oc):n}function Lf(n){return n=cn(n),n&&Tl.test(n)?n.replace(Qr,"\\$&"):n}var Pf=jt(function(n,e,i){return n+(i?"-":"")+e.toLowerCase()}),xf=jt(function(n,e,i){return n+(i?" ":"")+e.toLowerCase()}),Mf=ns("toLowerCase");function kf(n,e,i){n=cn(n),e=$(e);var a=e?Mt(n):0;if(!e||a>=e)return n;var p=(e-a)/2;return ur(Yi(p),i)+n+ur(Qi(p),i)}function qf(n,e,i){n=cn(n),e=$(e);var a=e?Mt(n):0;return e&&a<e?n+ur(e-a,i):n}function Jf(n,e,i){n=cn(n),e=$(e);var a=e?Mt(n):0;return e&&a<e?ur(e-a,i)+n:n}function Gf(n,e,i){return i||e==null?e=0:e&&(e=+e),Yc(cn(n).replace(Yr,""),e||0)}function Vf(n,e,i){return(i?Vn(n,e,i):e===r)?e=1:e=$(e),Ao(cn(n),e)}function Wf(){var n=arguments,e=cn(n[0]);return n.length<3?e:e.replace(n[1],n[2])}var jf=jt(function(n,e,i){return n+(i?"_":"")+e.toLowerCase()});function Hf(n,e,i){return i&&typeof i!="number"&&Vn(n,e,i)&&(e=i=r),i=i===r?ue:i>>>0,i?(n=cn(n),n&&(typeof e=="string"||e!=null&&!$o(e))&&(e=te(e),!e&&xt(n))?mt(Ee(n),0,i):n.split(e,i)):[]}var Qf=jt(function(n,e,i){return n+(i?" ":"")+Zo(e)});function Yf(n,e,i){return n=cn(n),i=i==null?0:Et($(i),0,n.length),e=te(e),n.slice(i,i+e.length)==e}function Kf(n,e,i){var a=l.templateSettings;i&&Vn(n,e,i)&&(e=r),n=cn(n),e=Tr({},e,a,us);var p=Tr({},e.imports,a.imports,us),c=_n(p),m=po(p,c),g,S,b=0,v=e.interpolate||_i,U="__p += '",_=co((e.escape||_i).source+"|"+v.source+"|"+(v===Na?Al:_i).source+"|"+(e.evaluate||_i).source+"|$","g"),k="//# sourceURL="+(dn.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ic+"]")+`
`;n.replace(_,function(H,nn,on,re,Wn,oe){return on||(on=re),U+=n.slice(b,oe).replace(Rl,Cc),nn&&(g=!0,U+=`' +
__e(`+nn+`) +
'`),Wn&&(S=!0,U+=`';
`+Wn+`;
__p += '`),on&&(U+=`' +
((__t = (`+on+`)) == null ? '' : __t) +
'`),b=oe+H.length,H}),U+=`';
`;var j=dn.call(e,"variable")&&e.variable;if(!j)U=`with (obj) {
`+U+`
}
`;else if(bl.test(j))throw new Y(T);U=(S?U.replace(pl,""):U).replace(ll,"$1").replace(cl,"$1;"),U="function("+(j||"obj")+`) {
`+(j?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(g?", __e = _.escape":"")+(S?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+U+`return __p
}`;var X=Zs(function(){return sn(c,k+"return "+U).apply(r,m)});if(X.source=U,Ko(X))throw X;return X}function $f(n){return cn(n).toLowerCase()}function Xf(n){return cn(n).toUpperCase()}function zf(n,e,i){if(n=cn(n),n&&(i||e===r))return su(n);if(!n||!(e=te(e)))return n;var a=Ee(n),p=Ee(e),c=pu(a,p),m=lu(a,p)+1;return mt(a,c,m).join("")}function Zf(n,e,i){if(n=cn(n),n&&(i||e===r))return n.slice(0,du(n)+1);if(!n||!(e=te(e)))return n;var a=Ee(n),p=lu(a,Ee(e))+1;return mt(a,0,p).join("")}function nS(n,e,i){if(n=cn(n),n&&(i||e===r))return n.replace(Yr,"");if(!n||!(e=te(e)))return n;var a=Ee(n),p=pu(a,Ee(e));return mt(a,p).join("")}function eS(n,e){var i=Q,a=Jn;if(Fn(e)){var p="separator"in e?e.separator:p;i="length"in e?$(e.length):i,a="omission"in e?te(e.omission):a}n=cn(n);var c=n.length;if(xt(n)){var m=Ee(n);c=m.length}if(i>=c)return n;var g=i-Mt(a);if(g<1)return a;var S=m?mt(m,0,g).join(""):n.slice(0,g);if(p===r)return S+a;if(m&&(g+=S.length-g),$o(p)){if(n.slice(g).search(p)){var b,v=S;for(p.global||(p=co(p.source,cn(Ua.exec(p))+"g")),p.lastIndex=0;b=p.exec(v);)var U=b.index;S=S.slice(0,U===r?g:U)}}else if(n.indexOf(te(p),g)!=g){var _=S.lastIndexOf(p);_>-1&&(S=S.slice(0,_))}return S+a}function tS(n){return n=cn(n),n&&dl.test(n)?n.replace(Aa,Uc):n}var iS=jt(function(n,e,i){return n+(i?" ":"")+e.toUpperCase()}),Zo=ns("toUpperCase");function zs(n,e,i){return n=cn(n),e=i?r:e,e===r?bc(n)?wc(n):fc(n):n.match(e)||[]}var Zs=Z(function(n,e){try{return ne(n,r,e)}catch(i){return Ko(i)?i:new Y(i)}}),rS=$e(function(n,e){return le(e,function(i){i=ke(i),Ye(n,i,Qo(n[i],n))}),n});function oS(n){var e=n==null?0:n.length,i=W();return n=e?yn(n,function(a){if(typeof a[1]!="function")throw new ce(I);return[i(a[0]),a[1]]}):[],Z(function(a){for(var p=-1;++p<e;){var c=n[p];if(ne(c[0],this,a))return ne(c[1],this,a)}})}function aS(n){return Ud(me(n,B))}function na(n){return function(){return n}}function uS(n,e){return n==null||n!==n?e:n}var sS=ts(),pS=ts(!0);function Xn(n){return n}function ea(n){return _u(typeof n=="function"?n:me(n,B))}function lS(n){return Ru(me(n,B))}function cS(n,e){return Lu(n,me(e,B))}var dS=Z(function(n,e){return function(i){return gi(i,n,e)}}),mS=Z(function(n,e){return function(i){return gi(n,i,e)}});function ta(n,e,i){var a=_n(e),p=nr(e,a);i==null&&!(Fn(e)&&(p.length||!a.length))&&(i=e,e=n,n=this,p=nr(e,_n(e)));var c=!(Fn(i)&&"chain"in i)||!!i.chain,m=ze(n);return le(p,function(g){var S=e[g];n[g]=S,m&&(n.prototype[g]=function(){var b=this.__chain__;if(c||b){var v=n(this.__wrapped__),U=v.__actions__=Yn(this.__actions__);return U.push({func:S,args:arguments,thisArg:n}),v.__chain__=b,v}return S.apply(n,ut([this.value()],arguments))})}),n}function gS(){return Rn._===this&&(Rn._=kc),this}function ia(){}function IS(n){return n=$(n),Z(function(e){return Pu(e,n)})}var fS=Ro(yn),SS=Ro(iu),yS=Ro(ro);function np(n){return Jo(n)?oo(ke(n)):Qd(n)}function TS(n){return function(e){return n==null?r:bt(n,e)}}var hS=rs(),FS=rs(!0);function ra(){return[]}function oa(){return!1}function OS(){return{}}function CS(){return""}function ES(){return!0}function bS(n,e){if(n=$(n),n<1||n>Fe)return[];var i=ue,a=Mn(n,ue);e=W(e),n-=ue;for(var p=so(a,e);++i<n;)e(i);return p}function vS(n){return K(n)?yn(n,ke):ie(n)?[n]:Yn(hs(cn(n)))}function AS(n){var e=++xc;return cn(n)+e}var DS=ar(function(n,e){return n+e},0),NS=Lo("ceil"),US=ar(function(n,e){return n/e},1),BS=Lo("floor");function _S(n){return n&&n.length?Zi(n,Xn,ho):r}function wS(n,e){return n&&n.length?Zi(n,W(e,2),ho):r}function RS(n){return au(n,Xn)}function LS(n,e){return au(n,W(e,2))}function PS(n){return n&&n.length?Zi(n,Xn,Eo):r}function xS(n,e){return n&&n.length?Zi(n,W(e,2),Eo):r}var MS=ar(function(n,e){return n*e},1),kS=Lo("round"),qS=ar(function(n,e){return n-e},0);function JS(n){return n&&n.length?uo(n,Xn):0}function GS(n,e){return n&&n.length?uo(n,W(e,2)):0}return l.after=pI,l.ary=Bs,l.assign=$I,l.assignIn=js,l.assignInWith=Tr,l.assignWith=XI,l.at=zI,l.before=_s,l.bind=Qo,l.bindAll=rS,l.bindKey=ws,l.castArray=FI,l.chain=Ds,l.chunk=Um,l.compact=Bm,l.concat=_m,l.cond=oS,l.conforms=aS,l.constant=na,l.countBy=qg,l.create=ZI,l.curry=Rs,l.curryRight=Ls,l.debounce=Ps,l.defaults=nf,l.defaultsDeep=ef,l.defer=lI,l.delay=cI,l.difference=wm,l.differenceBy=Rm,l.differenceWith=Lm,l.drop=Pm,l.dropRight=xm,l.dropRightWhile=Mm,l.dropWhile=km,l.fill=qm,l.filter=Gg,l.flatMap=jg,l.flatMapDeep=Hg,l.flatMapDepth=Qg,l.flatten=Es,l.flattenDeep=Jm,l.flattenDepth=Gm,l.flip=dI,l.flow=sS,l.flowRight=pS,l.fromPairs=Vm,l.functions=pf,l.functionsIn=lf,l.groupBy=Yg,l.initial=jm,l.intersection=Hm,l.intersectionBy=Qm,l.intersectionWith=Ym,l.invert=df,l.invertBy=mf,l.invokeMap=$g,l.iteratee=ea,l.keyBy=Xg,l.keys=_n,l.keysIn=$n,l.map=mr,l.mapKeys=If,l.mapValues=ff,l.matches=lS,l.matchesProperty=cS,l.memoize=Ir,l.merge=Sf,l.mergeWith=Hs,l.method=dS,l.methodOf=mS,l.mixin=ta,l.negate=fr,l.nthArg=IS,l.omit=yf,l.omitBy=Tf,l.once=mI,l.orderBy=zg,l.over=fS,l.overArgs=gI,l.overEvery=SS,l.overSome=yS,l.partial=Yo,l.partialRight=xs,l.partition=Zg,l.pick=hf,l.pickBy=Qs,l.property=np,l.propertyOf=TS,l.pull=zm,l.pullAll=vs,l.pullAllBy=Zm,l.pullAllWith=ng,l.pullAt=eg,l.range=hS,l.rangeRight=FS,l.rearg=II,l.reject=tI,l.remove=tg,l.rest=fI,l.reverse=jo,l.sampleSize=rI,l.set=Of,l.setWith=Cf,l.shuffle=oI,l.slice=ig,l.sortBy=sI,l.sortedUniq=lg,l.sortedUniqBy=cg,l.split=Hf,l.spread=SI,l.tail=dg,l.take=mg,l.takeRight=gg,l.takeRightWhile=Ig,l.takeWhile=fg,l.tap=Bg,l.throttle=yI,l.thru=dr,l.toArray=Gs,l.toPairs=Ys,l.toPairsIn=Ks,l.toPath=vS,l.toPlainObject=Ws,l.transform=Ef,l.unary=TI,l.union=Sg,l.unionBy=yg,l.unionWith=Tg,l.uniq=hg,l.uniqBy=Fg,l.uniqWith=Og,l.unset=bf,l.unzip=Ho,l.unzipWith=As,l.update=vf,l.updateWith=Af,l.values=Yt,l.valuesIn=Df,l.without=Cg,l.words=zs,l.wrap=hI,l.xor=Eg,l.xorBy=bg,l.xorWith=vg,l.zip=Ag,l.zipObject=Dg,l.zipObjectDeep=Ng,l.zipWith=Ug,l.entries=Ys,l.entriesIn=Ks,l.extend=js,l.extendWith=Tr,ta(l,l),l.add=DS,l.attempt=Zs,l.camelCase=_f,l.capitalize=$s,l.ceil=NS,l.clamp=Nf,l.clone=OI,l.cloneDeep=EI,l.cloneDeepWith=bI,l.cloneWith=CI,l.conformsTo=vI,l.deburr=Xs,l.defaultTo=uS,l.divide=US,l.endsWith=wf,l.eq=ve,l.escape=Rf,l.escapeRegExp=Lf,l.every=Jg,l.find=Vg,l.findIndex=Os,l.findKey=tf,l.findLast=Wg,l.findLastIndex=Cs,l.findLastKey=rf,l.floor=BS,l.forEach=Ns,l.forEachRight=Us,l.forIn=of,l.forInRight=af,l.forOwn=uf,l.forOwnRight=sf,l.get=Xo,l.gt=AI,l.gte=DI,l.has=cf,l.hasIn=zo,l.head=bs,l.identity=Xn,l.includes=Kg,l.indexOf=Wm,l.inRange=Uf,l.invoke=gf,l.isArguments=Dt,l.isArray=K,l.isArrayBuffer=NI,l.isArrayLike=Kn,l.isArrayLikeObject=En,l.isBoolean=UI,l.isBuffer=gt,l.isDate=BI,l.isElement=_I,l.isEmpty=wI,l.isEqual=RI,l.isEqualWith=LI,l.isError=Ko,l.isFinite=PI,l.isFunction=ze,l.isInteger=Ms,l.isLength=Sr,l.isMap=ks,l.isMatch=xI,l.isMatchWith=MI,l.isNaN=kI,l.isNative=qI,l.isNil=GI,l.isNull=JI,l.isNumber=qs,l.isObject=Fn,l.isObjectLike=On,l.isPlainObject=hi,l.isRegExp=$o,l.isSafeInteger=VI,l.isSet=Js,l.isString=yr,l.isSymbol=ie,l.isTypedArray=Qt,l.isUndefined=WI,l.isWeakMap=jI,l.isWeakSet=HI,l.join=Km,l.kebabCase=Pf,l.last=Ie,l.lastIndexOf=$m,l.lowerCase=xf,l.lowerFirst=Mf,l.lt=QI,l.lte=YI,l.max=_S,l.maxBy=wS,l.mean=RS,l.meanBy=LS,l.min=PS,l.minBy=xS,l.stubArray=ra,l.stubFalse=oa,l.stubObject=OS,l.stubString=CS,l.stubTrue=ES,l.multiply=MS,l.nth=Xm,l.noConflict=gS,l.noop=ia,l.now=gr,l.pad=kf,l.padEnd=qf,l.padStart=Jf,l.parseInt=Gf,l.random=Bf,l.reduce=nI,l.reduceRight=eI,l.repeat=Vf,l.replace=Wf,l.result=Ff,l.round=kS,l.runInContext=f,l.sample=iI,l.size=aI,l.snakeCase=jf,l.some=uI,l.sortedIndex=rg,l.sortedIndexBy=og,l.sortedIndexOf=ag,l.sortedLastIndex=ug,l.sortedLastIndexBy=sg,l.sortedLastIndexOf=pg,l.startCase=Qf,l.startsWith=Yf,l.subtract=qS,l.sum=JS,l.sumBy=GS,l.template=Kf,l.times=bS,l.toFinite=Ze,l.toInteger=$,l.toLength=Vs,l.toLower=$f,l.toNumber=fe,l.toSafeInteger=KI,l.toString=cn,l.toUpper=Xf,l.trim=zf,l.trimEnd=Zf,l.trimStart=nS,l.truncate=eS,l.unescape=tS,l.uniqueId=AS,l.upperCase=iS,l.upperFirst=Zo,l.each=Ns,l.eachRight=Us,l.first=bs,ta(l,function(){var n={};return xe(l,function(e,i){dn.call(l.prototype,i)||(n[i]=e)}),n}(),{chain:!1}),l.VERSION=u,le(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){l[n].placeholder=l}),le(["drop","take"],function(n,e){tn.prototype[n]=function(i){i=i===r?1:Un($(i),0);var a=this.__filtered__&&!e?new tn(this):this.clone();return a.__filtered__?a.__takeCount__=Mn(i,a.__takeCount__):a.__views__.push({size:Mn(i,ue),type:n+(a.__dir__<0?"Right":"")}),a},tn.prototype[n+"Right"]=function(i){return this.reverse()[n](i).reverse()}}),le(["filter","map","takeWhile"],function(n,e){var i=e+1,a=i==Ni||i==Ui;tn.prototype[n]=function(p){var c=this.clone();return c.__iteratees__.push({iteratee:W(p,3),type:i}),c.__filtered__=c.__filtered__||a,c}}),le(["head","last"],function(n,e){var i="take"+(e?"Right":"");tn.prototype[n]=function(){return this[i](1).value()[0]}}),le(["initial","tail"],function(n,e){var i="drop"+(e?"":"Right");tn.prototype[n]=function(){return this.__filtered__?new tn(this):this[i](1)}}),tn.prototype.compact=function(){return this.filter(Xn)},tn.prototype.find=function(n){return this.filter(n).head()},tn.prototype.findLast=function(n){return this.reverse().find(n)},tn.prototype.invokeMap=Z(function(n,e){return typeof n=="function"?new tn(this):this.map(function(i){return gi(i,n,e)})}),tn.prototype.reject=function(n){return this.filter(fr(W(n)))},tn.prototype.slice=function(n,e){n=$(n);var i=this;return i.__filtered__&&(n>0||e<0)?new tn(i):(n<0?i=i.takeRight(-n):n&&(i=i.drop(n)),e!==r&&(e=$(e),i=e<0?i.dropRight(-e):i.take(e-n)),i)},tn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},tn.prototype.toArray=function(){return this.take(ue)},xe(tn.prototype,function(n,e){var i=/^(?:filter|find|map|reject)|While$/.test(e),a=/^(?:head|last)$/.test(e),p=l[a?"take"+(e=="last"?"Right":""):e],c=a||/^find/.test(e);p&&(l.prototype[e]=function(){var m=this.__wrapped__,g=a?[1]:arguments,S=m instanceof tn,b=g[0],v=S||K(m),U=function(nn){var on=p.apply(l,ut([nn],g));return a&&_?on[0]:on};v&&i&&typeof b=="function"&&b.length!=1&&(S=v=!1);var _=this.__chain__,k=!!this.__actions__.length,j=c&&!_,X=S&&!k;if(!c&&v){m=X?m:new tn(this);var H=n.apply(m,g);return H.__actions__.push({func:dr,args:[U],thisArg:r}),new de(H,_)}return j&&X?n.apply(this,g):(H=this.thru(U),j?a?H.value()[0]:H.value():H)})}),le(["pop","push","shift","sort","splice","unshift"],function(n){var e=Mi[n],i=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",a=/^(?:pop|shift)$/.test(n);l.prototype[n]=function(){var p=arguments;if(a&&!this.__chain__){var c=this.value();return e.apply(K(c)?c:[],p)}return this[i](function(m){return e.apply(K(m)?m:[],p)})}}),xe(tn.prototype,function(n,e){var i=l[e];if(i){var a=i.name+"";dn.call(Gt,a)||(Gt[a]=[]),Gt[a].push({name:e,func:i})}}),Gt[or(r,Tn).name]=[{name:"wrapper",func:r}],tn.prototype.clone=ed,tn.prototype.reverse=td,tn.prototype.value=id,l.prototype.at=_g,l.prototype.chain=wg,l.prototype.commit=Rg,l.prototype.next=Lg,l.prototype.plant=xg,l.prototype.reverse=Mg,l.prototype.toJSON=l.prototype.valueOf=l.prototype.value=kg,l.prototype.first=l.prototype.head,ui&&(l.prototype[ui]=Pg),l},kt=Rc();ht?((ht.exports=kt)._=kt,no._=kt):Rn._=kt}).call(Fi)})(YS,Te);const KS="Tarvent API",$S="https://cdn.trvt.io/resource/graphics/logo/RefLogo.png",XS="https://cdn.trvt.io/resource/graphics/logo/favicon-16x16.png",zS=`[{"title":"Welcome","content":"\\n# 👋 Hi\\n\\nWelcome to [Tarvent](https://api.tarvent.com/graphql/)'s GraphQL documentation!\\n"}]`,ZS='[{"href":"https://api.tarvent.com","label":"Tarvent API","kind":"Tarvent"},{"href":"https://www.tarvent.com/contact-us","label":"Tarvent support","kind":"Tarvent"}]',ny='{"UUID":"000000000000000000","Byte":"000000","Decimal":0,"Int!":420,"String":"abc"}',ey="true",Fp={APP_TITLE:KS,APP_LOGO:$S,APP_FAVICON:XS,PAGES:zS,EXTERNAL_LINKS:ZS,QUERY_GENERATION_FACTORIES:ny,MAGIDOC_GENERATE:ey};function lh(t){return t.get(Fp)}function ty(t,o){return t.getOrDefault(Fp,o)}function un(t,o){if(!!!t)throw new Error(o)}function tt(t){return typeof t=="object"&&t!==null}function Be(t,o){if(!!!t)throw new Error(o??"Unexpected invariant triggered.")}const iy=/\r\n|[\n\r]/g;function ca(t,o){let r=0,u=1;for(const s of t.body.matchAll(iy)){if(typeof s.index=="number"||Be(!1),s.index>=o)break;r=s.index+s[0].length,u+=1}return{line:u,column:o+1-r}}function ry(t){return Op(t.source,ca(t.source,t.start))}function Op(t,o){const r=t.locationOffset.column-1,u="".padStart(r)+t.body,s=o.line-1,d=t.locationOffset.line-1,I=o.line+d,T=o.line===1?r:0,h=o.column+T,D=`${t.name}:${I}:${h}
`,E=u.split(/\r\n|[\n\r]/g),B=E[s];if(B.length>120){const M=Math.floor(h/80),z=h%80,J=[];for(let mn=0;mn<B.length;mn+=80)J.push(B.slice(mn,mn+80));return D+op([[`${I} |`,J[0]],...J.slice(1,M+1).map(mn=>["|",mn]),["|","^".padStart(z)],["|",J[M+1]]])}return D+op([[`${I-1} |`,E[s-1]],[`${I} |`,B],["|","^".padStart(h)],[`${I+1} |`,E[s+1]]])}function op(t){const o=t.filter(([u,s])=>s!==void 0),r=Math.max(...o.map(([u])=>u.length));return o.map(([u,s])=>u.padStart(r)+(s?" "+s:"")).join(`
`)}function oy(t){const o=t[0];return o==null||"kind"in o||"length"in o?{nodes:o,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:o}class q extends Error{constructor(o,...r){var u,s,d;const{nodes:I,source:T,positions:h,path:D,originalError:E,extensions:B}=oy(r);super(o),this.name="GraphQLError",this.path=D??void 0,this.originalError=E??void 0,this.nodes=ap(Array.isArray(I)?I:I?[I]:void 0);const M=ap((u=this.nodes)===null||u===void 0?void 0:u.map(J=>J.loc).filter(J=>J!=null));this.source=T??(M==null||(s=M[0])===null||s===void 0?void 0:s.source),this.positions=h??(M==null?void 0:M.map(J=>J.start)),this.locations=h&&T?h.map(J=>ca(T,J)):M==null?void 0:M.map(J=>ca(J.source,J.start));const z=tt(E==null?void 0:E.extensions)?E==null?void 0:E.extensions:void 0;this.extensions=(d=B??z)!==null&&d!==void 0?d:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),E!=null&&E.stack?Object.defineProperty(this,"stack",{value:E.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,q):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let o=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(o+=`

`+ry(r.loc));else if(this.source&&this.locations)for(const r of this.locations)o+=`

`+Op(this.source,r);return o}toJSON(){const o={message:this.message};return this.locations!=null&&(o.locations=this.locations),this.path!=null&&(o.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(o.extensions=this.extensions),o}}function ap(t){return t===void 0||t.length===0?void 0:t}function wn(t,o,r){return new q(`Syntax Error: ${r}`,{source:t,positions:[o]})}class ay{constructor(o,r,u){this.start=o.start,this.end=r.end,this.startToken=o,this.endToken=r,this.source=u}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Cp{constructor(o,r,u,s,d,I){this.kind=o,this.start=r,this.end=u,this.line=s,this.column=d,this.value=I,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Ep={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},uy=new Set(Object.keys(Ep));function up(t){const o=t==null?void 0:t.kind;return typeof o=="string"&&uy.has(o)}var Se;(function(t){t.QUERY="query",t.MUTATION="mutation",t.SUBSCRIPTION="subscription"})(Se||(Se={}));var V;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(V||(V={}));var y;(function(t){t.NAME="Name",t.DOCUMENT="Document",t.OPERATION_DEFINITION="OperationDefinition",t.VARIABLE_DEFINITION="VariableDefinition",t.SELECTION_SET="SelectionSet",t.FIELD="Field",t.ARGUMENT="Argument",t.FRAGMENT_SPREAD="FragmentSpread",t.INLINE_FRAGMENT="InlineFragment",t.FRAGMENT_DEFINITION="FragmentDefinition",t.VARIABLE="Variable",t.INT="IntValue",t.FLOAT="FloatValue",t.STRING="StringValue",t.BOOLEAN="BooleanValue",t.NULL="NullValue",t.ENUM="EnumValue",t.LIST="ListValue",t.OBJECT="ObjectValue",t.OBJECT_FIELD="ObjectField",t.DIRECTIVE="Directive",t.NAMED_TYPE="NamedType",t.LIST_TYPE="ListType",t.NON_NULL_TYPE="NonNullType",t.SCHEMA_DEFINITION="SchemaDefinition",t.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",t.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",t.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",t.FIELD_DEFINITION="FieldDefinition",t.INPUT_VALUE_DEFINITION="InputValueDefinition",t.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",t.UNION_TYPE_DEFINITION="UnionTypeDefinition",t.ENUM_TYPE_DEFINITION="EnumTypeDefinition",t.ENUM_VALUE_DEFINITION="EnumValueDefinition",t.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",t.DIRECTIVE_DEFINITION="DirectiveDefinition",t.SCHEMA_EXTENSION="SchemaExtension",t.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",t.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",t.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",t.UNION_TYPE_EXTENSION="UnionTypeExtension",t.ENUM_TYPE_EXTENSION="EnumTypeExtension",t.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(y||(y={}));function da(t){return t===9||t===32}function vi(t){return t>=48&&t<=57}function bp(t){return t>=97&&t<=122||t>=65&&t<=90}function Ta(t){return bp(t)||t===95}function vp(t){return bp(t)||vi(t)||t===95}function sy(t){var o;let r=Number.MAX_SAFE_INTEGER,u=null,s=-1;for(let I=0;I<t.length;++I){var d;const T=t[I],h=py(T);h!==T.length&&(u=(d=u)!==null&&d!==void 0?d:I,s=I,I!==0&&h<r&&(r=h))}return t.map((I,T)=>T===0?I:I.slice(r)).slice((o=u)!==null&&o!==void 0?o:0,s+1)}function py(t){let o=0;for(;o<t.length&&da(t.charCodeAt(o));)++o;return o}function ly(t,o){const r=t.replace(/"""/g,'\\"""'),u=r.split(/\r\n|[\n\r]/g),s=u.length===1,d=u.length>1&&u.slice(1).every(z=>z.length===0||da(z.charCodeAt(0))),I=r.endsWith('\\"""'),T=t.endsWith('"')&&!I,h=t.endsWith("\\"),D=T||h,E=!(o!=null&&o.minimize)&&(!s||t.length>70||D||d||I);let B="";const M=s&&da(t.charCodeAt(0));return(E&&!M||d)&&(B+=`
`),B+=r,(E||D)&&(B+=`
`),'"""'+B+'"""'}var A;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(A||(A={}));class cy{constructor(o){const r=new Cp(A.SOF,0,0,0,0);this.source=o,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let o=this.token;if(o.kind!==A.EOF)do if(o.next)o=o.next;else{const r=my(this,o.end);o.next=r,r.prev=o,o=r}while(o.kind===A.COMMENT);return o}}function dy(t){return t===A.BANG||t===A.DOLLAR||t===A.AMP||t===A.PAREN_L||t===A.PAREN_R||t===A.SPREAD||t===A.COLON||t===A.EQUALS||t===A.AT||t===A.BRACKET_L||t===A.BRACKET_R||t===A.BRACE_L||t===A.PIPE||t===A.BRACE_R}function zt(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function Ur(t,o){return Ap(t.charCodeAt(o))&&Dp(t.charCodeAt(o+1))}function Ap(t){return t>=55296&&t<=56319}function Dp(t){return t>=56320&&t<=57343}function Ut(t,o){const r=t.source.body.codePointAt(o);if(r===void 0)return A.EOF;if(r>=32&&r<=126){const u=String.fromCodePoint(r);return u==='"'?`'"'`:`"${u}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function Dn(t,o,r,u,s){const d=t.line,I=1+r-t.lineStart;return new Cp(o,r,u,d,I,s)}function my(t,o){const r=t.source.body,u=r.length;let s=o;for(;s<u;){const d=r.charCodeAt(s);switch(d){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++t.line,t.lineStart=s;continue;case 13:r.charCodeAt(s+1)===10?s+=2:++s,++t.line,t.lineStart=s;continue;case 35:return gy(t,s);case 33:return Dn(t,A.BANG,s,s+1);case 36:return Dn(t,A.DOLLAR,s,s+1);case 38:return Dn(t,A.AMP,s,s+1);case 40:return Dn(t,A.PAREN_L,s,s+1);case 41:return Dn(t,A.PAREN_R,s,s+1);case 46:if(r.charCodeAt(s+1)===46&&r.charCodeAt(s+2)===46)return Dn(t,A.SPREAD,s,s+3);break;case 58:return Dn(t,A.COLON,s,s+1);case 61:return Dn(t,A.EQUALS,s,s+1);case 64:return Dn(t,A.AT,s,s+1);case 91:return Dn(t,A.BRACKET_L,s,s+1);case 93:return Dn(t,A.BRACKET_R,s,s+1);case 123:return Dn(t,A.BRACE_L,s,s+1);case 124:return Dn(t,A.PIPE,s,s+1);case 125:return Dn(t,A.BRACE_R,s,s+1);case 34:return r.charCodeAt(s+1)===34&&r.charCodeAt(s+2)===34?hy(t,s):fy(t,s)}if(vi(d)||d===45)return Iy(t,s,d);if(Ta(d))return Fy(t,s);throw wn(t.source,s,d===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:zt(d)||Ur(r,s)?`Unexpected character: ${Ut(t,s)}.`:`Invalid character: ${Ut(t,s)}.`)}return Dn(t,A.EOF,u,u)}function gy(t,o){const r=t.source.body,u=r.length;let s=o+1;for(;s<u;){const d=r.charCodeAt(s);if(d===10||d===13)break;if(zt(d))++s;else if(Ur(r,s))s+=2;else break}return Dn(t,A.COMMENT,o,s,r.slice(o+1,s))}function Iy(t,o,r){const u=t.source.body;let s=o,d=r,I=!1;if(d===45&&(d=u.charCodeAt(++s)),d===48){if(d=u.charCodeAt(++s),vi(d))throw wn(t.source,s,`Invalid number, unexpected digit after 0: ${Ut(t,s)}.`)}else s=aa(t,s,d),d=u.charCodeAt(s);if(d===46&&(I=!0,d=u.charCodeAt(++s),s=aa(t,s,d),d=u.charCodeAt(s)),(d===69||d===101)&&(I=!0,d=u.charCodeAt(++s),(d===43||d===45)&&(d=u.charCodeAt(++s)),s=aa(t,s,d),d=u.charCodeAt(s)),d===46||Ta(d))throw wn(t.source,s,`Invalid number, expected digit but got: ${Ut(t,s)}.`);return Dn(t,I?A.FLOAT:A.INT,o,s,u.slice(o,s))}function aa(t,o,r){if(!vi(r))throw wn(t.source,o,`Invalid number, expected digit but got: ${Ut(t,o)}.`);const u=t.source.body;let s=o+1;for(;vi(u.charCodeAt(s));)++s;return s}function fy(t,o){const r=t.source.body,u=r.length;let s=o+1,d=s,I="";for(;s<u;){const T=r.charCodeAt(s);if(T===34)return I+=r.slice(d,s),Dn(t,A.STRING,o,s+1,I);if(T===92){I+=r.slice(d,s);const h=r.charCodeAt(s+1)===117?r.charCodeAt(s+2)===123?Sy(t,s):yy(t,s):Ty(t,s);I+=h.value,s+=h.size,d=s;continue}if(T===10||T===13)break;if(zt(T))++s;else if(Ur(r,s))s+=2;else throw wn(t.source,s,`Invalid character within String: ${Ut(t,s)}.`)}throw wn(t.source,s,"Unterminated string.")}function Sy(t,o){const r=t.source.body;let u=0,s=3;for(;s<12;){const d=r.charCodeAt(o+s++);if(d===125){if(s<5||!zt(u))break;return{value:String.fromCodePoint(u),size:s}}if(u=u<<4|Oi(d),u<0)break}throw wn(t.source,o,`Invalid Unicode escape sequence: "${r.slice(o,o+s)}".`)}function yy(t,o){const r=t.source.body,u=sp(r,o+2);if(zt(u))return{value:String.fromCodePoint(u),size:6};if(Ap(u)&&r.charCodeAt(o+6)===92&&r.charCodeAt(o+7)===117){const s=sp(r,o+8);if(Dp(s))return{value:String.fromCodePoint(u,s),size:12}}throw wn(t.source,o,`Invalid Unicode escape sequence: "${r.slice(o,o+6)}".`)}function sp(t,o){return Oi(t.charCodeAt(o))<<12|Oi(t.charCodeAt(o+1))<<8|Oi(t.charCodeAt(o+2))<<4|Oi(t.charCodeAt(o+3))}function Oi(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function Ty(t,o){const r=t.source.body;switch(r.charCodeAt(o+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw wn(t.source,o,`Invalid character escape sequence: "${r.slice(o,o+2)}".`)}function hy(t,o){const r=t.source.body,u=r.length;let s=t.lineStart,d=o+3,I=d,T="";const h=[];for(;d<u;){const D=r.charCodeAt(d);if(D===34&&r.charCodeAt(d+1)===34&&r.charCodeAt(d+2)===34){T+=r.slice(I,d),h.push(T);const E=Dn(t,A.BLOCK_STRING,o,d+3,sy(h).join(`
`));return t.line+=h.length-1,t.lineStart=s,E}if(D===92&&r.charCodeAt(d+1)===34&&r.charCodeAt(d+2)===34&&r.charCodeAt(d+3)===34){T+=r.slice(I,d),I=d+1,d+=4;continue}if(D===10||D===13){T+=r.slice(I,d),h.push(T),D===13&&r.charCodeAt(d+1)===10?d+=2:++d,T="",I=d,s=d;continue}if(zt(D))++d;else if(Ur(r,d))d+=2;else throw wn(t.source,d,`Invalid character within String: ${Ut(t,d)}.`)}throw wn(t.source,d,"Unterminated string.")}function Fy(t,o){const r=t.source.body,u=r.length;let s=o+1;for(;s<u;){const d=r.charCodeAt(s);if(vp(d))++s;else break}return Dn(t,A.NAME,o,s,r.slice(o,s))}const Oy=10,Np=2;function G(t){return Br(t,[])}function Br(t,o){switch(typeof t){case"string":return JSON.stringify(t);case"function":return t.name?`[function ${t.name}]`:"[function]";case"object":return Cy(t,o);default:return String(t)}}function Cy(t,o){if(t===null)return"null";if(o.includes(t))return"[Circular]";const r=[...o,t];if(Ey(t)){const u=t.toJSON();if(u!==t)return typeof u=="string"?u:Br(u,r)}else if(Array.isArray(t))return vy(t,r);return by(t,r)}function Ey(t){return typeof t.toJSON=="function"}function by(t,o){const r=Object.entries(t);return r.length===0?"{}":o.length>Np?"["+Ay(t)+"]":"{ "+r.map(([s,d])=>s+": "+Br(d,o)).join(", ")+" }"}function vy(t,o){if(t.length===0)return"[]";if(o.length>Np)return"[Array]";const r=Math.min(Oy,t.length),u=t.length-r,s=[];for(let d=0;d<r;++d)s.push(Br(t[d],o));return u===1?s.push("... 1 more item"):u>1&&s.push(`... ${u} more items`),"["+s.join(", ")+"]"}function Ay(t){const o=Object.prototype.toString.call(t).replace(/^\[object /,"").replace(/]$/,"");if(o==="Object"&&typeof t.constructor=="function"){const r=t.constructor.name;if(typeof r=="string"&&r!=="")return r}return o}const Ge=function(o,r){return o instanceof r};class Up{constructor(o,r="GraphQL request",u={line:1,column:1}){typeof o=="string"||un(!1,`Body must be a string. Received: ${G(o)}.`),this.body=o,this.name=r,this.locationOffset=u,this.locationOffset.line>0||un(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||un(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Dy(t){return Ge(t,Up)}function Ny(t,o){return new Bp(t,o).parseDocument()}function Uy(t,o){const r=new Bp(t,o);r.expectToken(A.SOF);const u=r.parseValueLiteral(!1);return r.expectToken(A.EOF),u}class Bp{constructor(o,r={}){const u=Dy(o)?o:new Up(o);this._lexer=new cy(u),this._options=r,this._tokenCounter=0}parseName(){const o=this.expectToken(A.NAME);return this.node(o,{kind:y.NAME,value:o.value})}parseDocument(){return this.node(this._lexer.token,{kind:y.DOCUMENT,definitions:this.many(A.SOF,this.parseDefinition,A.EOF)})}parseDefinition(){if(this.peek(A.BRACE_L))return this.parseOperationDefinition();const o=this.peekDescription(),r=o?this._lexer.lookahead():this._lexer.token;if(r.kind===A.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(o)throw wn(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const o=this._lexer.token;if(this.peek(A.BRACE_L))return this.node(o,{kind:y.OPERATION_DEFINITION,operation:Se.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let u;return this.peek(A.NAME)&&(u=this.parseName()),this.node(o,{kind:y.OPERATION_DEFINITION,operation:r,name:u,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const o=this.expectToken(A.NAME);switch(o.value){case"query":return Se.QUERY;case"mutation":return Se.MUTATION;case"subscription":return Se.SUBSCRIPTION}throw this.unexpected(o)}parseVariableDefinitions(){return this.optionalMany(A.PAREN_L,this.parseVariableDefinition,A.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:y.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(A.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(A.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const o=this._lexer.token;return this.expectToken(A.DOLLAR),this.node(o,{kind:y.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:y.SELECTION_SET,selections:this.many(A.BRACE_L,this.parseSelection,A.BRACE_R)})}parseSelection(){return this.peek(A.SPREAD)?this.parseFragment():this.parseField()}parseField(){const o=this._lexer.token,r=this.parseName();let u,s;return this.expectOptionalToken(A.COLON)?(u=r,s=this.parseName()):s=r,this.node(o,{kind:y.FIELD,alias:u,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(A.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(o){const r=o?this.parseConstArgument:this.parseArgument;return this.optionalMany(A.PAREN_L,r,A.PAREN_R)}parseArgument(o=!1){const r=this._lexer.token,u=this.parseName();return this.expectToken(A.COLON),this.node(r,{kind:y.ARGUMENT,name:u,value:this.parseValueLiteral(o)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const o=this._lexer.token;this.expectToken(A.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(A.NAME)?this.node(o,{kind:y.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(o,{kind:y.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const o=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(o,{kind:y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(o,{kind:y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(o){const r=this._lexer.token;switch(r.kind){case A.BRACKET_L:return this.parseList(o);case A.BRACE_L:return this.parseObject(o);case A.INT:return this.advanceLexer(),this.node(r,{kind:y.INT,value:r.value});case A.FLOAT:return this.advanceLexer(),this.node(r,{kind:y.FLOAT,value:r.value});case A.STRING:case A.BLOCK_STRING:return this.parseStringLiteral();case A.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:y.BOOLEAN,value:!0});case"false":return this.node(r,{kind:y.BOOLEAN,value:!1});case"null":return this.node(r,{kind:y.NULL});default:return this.node(r,{kind:y.ENUM,value:r.value})}case A.DOLLAR:if(o)if(this.expectToken(A.DOLLAR),this._lexer.token.kind===A.NAME){const u=this._lexer.token.value;throw wn(this._lexer.source,r.start,`Unexpected variable "$${u}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const o=this._lexer.token;return this.advanceLexer(),this.node(o,{kind:y.STRING,value:o.value,block:o.kind===A.BLOCK_STRING})}parseList(o){const r=()=>this.parseValueLiteral(o);return this.node(this._lexer.token,{kind:y.LIST,values:this.any(A.BRACKET_L,r,A.BRACKET_R)})}parseObject(o){const r=()=>this.parseObjectField(o);return this.node(this._lexer.token,{kind:y.OBJECT,fields:this.any(A.BRACE_L,r,A.BRACE_R)})}parseObjectField(o){const r=this._lexer.token,u=this.parseName();return this.expectToken(A.COLON),this.node(r,{kind:y.OBJECT_FIELD,name:u,value:this.parseValueLiteral(o)})}parseDirectives(o){const r=[];for(;this.peek(A.AT);)r.push(this.parseDirective(o));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(o){const r=this._lexer.token;return this.expectToken(A.AT),this.node(r,{kind:y.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(o)})}parseTypeReference(){const o=this._lexer.token;let r;if(this.expectOptionalToken(A.BRACKET_L)){const u=this.parseTypeReference();this.expectToken(A.BRACKET_R),r=this.node(o,{kind:y.LIST_TYPE,type:u})}else r=this.parseNamedType();return this.expectOptionalToken(A.BANG)?this.node(o,{kind:y.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:y.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(A.STRING)||this.peek(A.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const o=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const u=this.parseConstDirectives(),s=this.many(A.BRACE_L,this.parseOperationTypeDefinition,A.BRACE_R);return this.node(o,{kind:y.SCHEMA_DEFINITION,description:r,directives:u,operationTypes:s})}parseOperationTypeDefinition(){const o=this._lexer.token,r=this.parseOperationType();this.expectToken(A.COLON);const u=this.parseNamedType();return this.node(o,{kind:y.OPERATION_TYPE_DEFINITION,operation:r,type:u})}parseScalarTypeDefinition(){const o=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const u=this.parseName(),s=this.parseConstDirectives();return this.node(o,{kind:y.SCALAR_TYPE_DEFINITION,description:r,name:u,directives:s})}parseObjectTypeDefinition(){const o=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const u=this.parseName(),s=this.parseImplementsInterfaces(),d=this.parseConstDirectives(),I=this.parseFieldsDefinition();return this.node(o,{kind:y.OBJECT_TYPE_DEFINITION,description:r,name:u,interfaces:s,directives:d,fields:I})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(A.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(A.BRACE_L,this.parseFieldDefinition,A.BRACE_R)}parseFieldDefinition(){const o=this._lexer.token,r=this.parseDescription(),u=this.parseName(),s=this.parseArgumentDefs();this.expectToken(A.COLON);const d=this.parseTypeReference(),I=this.parseConstDirectives();return this.node(o,{kind:y.FIELD_DEFINITION,description:r,name:u,arguments:s,type:d,directives:I})}parseArgumentDefs(){return this.optionalMany(A.PAREN_L,this.parseInputValueDef,A.PAREN_R)}parseInputValueDef(){const o=this._lexer.token,r=this.parseDescription(),u=this.parseName();this.expectToken(A.COLON);const s=this.parseTypeReference();let d;this.expectOptionalToken(A.EQUALS)&&(d=this.parseConstValueLiteral());const I=this.parseConstDirectives();return this.node(o,{kind:y.INPUT_VALUE_DEFINITION,description:r,name:u,type:s,defaultValue:d,directives:I})}parseInterfaceTypeDefinition(){const o=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const u=this.parseName(),s=this.parseImplementsInterfaces(),d=this.parseConstDirectives(),I=this.parseFieldsDefinition();return this.node(o,{kind:y.INTERFACE_TYPE_DEFINITION,description:r,name:u,interfaces:s,directives:d,fields:I})}parseUnionTypeDefinition(){const o=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const u=this.parseName(),s=this.parseConstDirectives(),d=this.parseUnionMemberTypes();return this.node(o,{kind:y.UNION_TYPE_DEFINITION,description:r,name:u,directives:s,types:d})}parseUnionMemberTypes(){return this.expectOptionalToken(A.EQUALS)?this.delimitedMany(A.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const o=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const u=this.parseName(),s=this.parseConstDirectives(),d=this.parseEnumValuesDefinition();return this.node(o,{kind:y.ENUM_TYPE_DEFINITION,description:r,name:u,directives:s,values:d})}parseEnumValuesDefinition(){return this.optionalMany(A.BRACE_L,this.parseEnumValueDefinition,A.BRACE_R)}parseEnumValueDefinition(){const o=this._lexer.token,r=this.parseDescription(),u=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(o,{kind:y.ENUM_VALUE_DEFINITION,description:r,name:u,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw wn(this._lexer.source,this._lexer.token.start,`${Or(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const o=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const u=this.parseName(),s=this.parseConstDirectives(),d=this.parseInputFieldsDefinition();return this.node(o,{kind:y.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:u,directives:s,fields:d})}parseInputFieldsDefinition(){return this.optionalMany(A.BRACE_L,this.parseInputValueDef,A.BRACE_R)}parseTypeSystemExtension(){const o=this._lexer.lookahead();if(o.kind===A.NAME)switch(o.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(o)}parseSchemaExtension(){const o=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),u=this.optionalMany(A.BRACE_L,this.parseOperationTypeDefinition,A.BRACE_R);if(r.length===0&&u.length===0)throw this.unexpected();return this.node(o,{kind:y.SCHEMA_EXTENSION,directives:r,operationTypes:u})}parseScalarTypeExtension(){const o=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),u=this.parseConstDirectives();if(u.length===0)throw this.unexpected();return this.node(o,{kind:y.SCALAR_TYPE_EXTENSION,name:r,directives:u})}parseObjectTypeExtension(){const o=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),u=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),d=this.parseFieldsDefinition();if(u.length===0&&s.length===0&&d.length===0)throw this.unexpected();return this.node(o,{kind:y.OBJECT_TYPE_EXTENSION,name:r,interfaces:u,directives:s,fields:d})}parseInterfaceTypeExtension(){const o=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),u=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),d=this.parseFieldsDefinition();if(u.length===0&&s.length===0&&d.length===0)throw this.unexpected();return this.node(o,{kind:y.INTERFACE_TYPE_EXTENSION,name:r,interfaces:u,directives:s,fields:d})}parseUnionTypeExtension(){const o=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),u=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(u.length===0&&s.length===0)throw this.unexpected();return this.node(o,{kind:y.UNION_TYPE_EXTENSION,name:r,directives:u,types:s})}parseEnumTypeExtension(){const o=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),u=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(u.length===0&&s.length===0)throw this.unexpected();return this.node(o,{kind:y.ENUM_TYPE_EXTENSION,name:r,directives:u,values:s})}parseInputObjectTypeExtension(){const o=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),u=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(u.length===0&&s.length===0)throw this.unexpected();return this.node(o,{kind:y.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:u,fields:s})}parseDirectiveDefinition(){const o=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(A.AT);const u=this.parseName(),s=this.parseArgumentDefs(),d=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const I=this.parseDirectiveLocations();return this.node(o,{kind:y.DIRECTIVE_DEFINITION,description:r,name:u,arguments:s,repeatable:d,locations:I})}parseDirectiveLocations(){return this.delimitedMany(A.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const o=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(V,r.value))return r;throw this.unexpected(o)}node(o,r){return this._options.noLocation!==!0&&(r.loc=new ay(o,this._lexer.lastToken,this._lexer.source)),r}peek(o){return this._lexer.token.kind===o}expectToken(o){const r=this._lexer.token;if(r.kind===o)return this.advanceLexer(),r;throw wn(this._lexer.source,r.start,`Expected ${_p(o)}, found ${Or(r)}.`)}expectOptionalToken(o){return this._lexer.token.kind===o?(this.advanceLexer(),!0):!1}expectKeyword(o){const r=this._lexer.token;if(r.kind===A.NAME&&r.value===o)this.advanceLexer();else throw wn(this._lexer.source,r.start,`Expected "${o}", found ${Or(r)}.`)}expectOptionalKeyword(o){const r=this._lexer.token;return r.kind===A.NAME&&r.value===o?(this.advanceLexer(),!0):!1}unexpected(o){const r=o??this._lexer.token;return wn(this._lexer.source,r.start,`Unexpected ${Or(r)}.`)}any(o,r,u){this.expectToken(o);const s=[];for(;!this.expectOptionalToken(u);)s.push(r.call(this));return s}optionalMany(o,r,u){if(this.expectOptionalToken(o)){const s=[];do s.push(r.call(this));while(!this.expectOptionalToken(u));return s}return[]}many(o,r,u){this.expectToken(o);const s=[];do s.push(r.call(this));while(!this.expectOptionalToken(u));return s}delimitedMany(o,r){this.expectOptionalToken(o);const u=[];do u.push(r.call(this));while(this.expectOptionalToken(o));return u}advanceLexer(){const{maxTokens:o}=this._options,r=this._lexer.advance();if(o!==void 0&&r.kind!==A.EOF&&(++this._tokenCounter,this._tokenCounter>o))throw wn(this._lexer.source,r.start,`Document contains more that ${o} tokens. Parsing aborted.`)}}function Or(t){const o=t.value;return _p(t.kind)+(o!=null?` "${o}"`:"")}function _p(t){return dy(t)?`"${t}"`:t}const By=5;function _r(t,o){const[r,u]=o?[t,o]:[void 0,t];let s=" Did you mean ";r&&(s+=r+" ");const d=u.map(h=>`"${h}"`);switch(d.length){case 0:return"";case 1:return s+d[0]+"?";case 2:return s+d[0]+" or "+d[1]+"?"}const I=d.slice(0,By),T=I.pop();return s+I.join(", ")+", or "+T+"?"}function pp(t){return t}function $t(t,o){const r=Object.create(null);for(const u of t)r[o(u)]=u;return r}function Nt(t,o,r){const u=Object.create(null);for(const s of t)u[o(s)]=r(s);return u}function et(t,o){const r=Object.create(null);for(const u of Object.keys(t))r[u]=o(t[u],u);return r}function _y(t,o){let r=0,u=0;for(;r<t.length&&u<o.length;){let s=t.charCodeAt(r),d=o.charCodeAt(u);if(Cr(s)&&Cr(d)){let I=0;do++r,I=I*10+s-ma,s=t.charCodeAt(r);while(Cr(s)&&I>0);let T=0;do++u,T=T*10+d-ma,d=o.charCodeAt(u);while(Cr(d)&&T>0);if(I<T)return-1;if(I>T)return 1}else{if(s<d)return-1;if(s>d)return 1;++r,++u}}return t.length-o.length}const ma=48,wy=57;function Cr(t){return!isNaN(t)&&ma<=t&&t<=wy}function wr(t,o){const r=Object.create(null),u=new Ry(t),s=Math.floor(t.length*.4)+1;for(const d of o){const I=u.measure(d,s);I!==void 0&&(r[d]=I)}return Object.keys(r).sort((d,I)=>{const T=r[d]-r[I];return T!==0?T:_y(d,I)})}class Ry{constructor(o){this._input=o,this._inputLowerCase=o.toLowerCase(),this._inputArray=lp(this._inputLowerCase),this._rows=[new Array(o.length+1).fill(0),new Array(o.length+1).fill(0),new Array(o.length+1).fill(0)]}measure(o,r){if(this._input===o)return 0;const u=o.toLowerCase();if(this._inputLowerCase===u)return 1;let s=lp(u),d=this._inputArray;if(s.length<d.length){const E=s;s=d,d=E}const I=s.length,T=d.length;if(I-T>r)return;const h=this._rows;for(let E=0;E<=T;E++)h[0][E]=E;for(let E=1;E<=I;E++){const B=h[(E-1)%3],M=h[E%3];let z=M[0]=E;for(let J=1;J<=T;J++){const mn=s[E-1]===d[J-1]?0:1;let an=Math.min(B[J]+1,M[J-1]+1,B[J-1]+mn);if(E>1&&J>1&&s[E-1]===d[J-2]&&s[E-2]===d[J-1]){const Tn=h[(E-2)%3][J-2];an=Math.min(an,Tn+1)}an<z&&(z=an),M[J]=an}if(z>r)return}const D=h[I%3][T];return D<=r?D:void 0}}function lp(t){const o=t.length,r=new Array(o);for(let u=0;u<o;++u)r[u]=t.charCodeAt(u);return r}function he(t){if(t==null)return Object.create(null);if(Object.getPrototypeOf(t)===null)return t;const o=Object.create(null);for(const[r,u]of Object.entries(t))o[r]=u;return o}function Ly(t){return`"${t.replace(Py,xy)}"`}const Py=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function xy(t){return My[t.charCodeAt(0)]}const My=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Ci=Object.freeze({});function wp(t,o,r=Ep){const u=new Map;for(const Tn of Object.values(y))u.set(Tn,Rp(o,Tn));let s,d=Array.isArray(t),I=[t],T=-1,h=[],D=t,E,B;const M=[],z=[];do{T++;const Tn=T===I.length,Ve=Tn&&h.length!==0;if(Tn){if(E=z.length===0?void 0:M[M.length-1],D=B,B=z.pop(),Ve)if(d){D=D.slice();let An=0;for(const[Bn,qn]of h){const Pn=Bn-An;qn===null?(D.splice(Pn,1),An++):D[Pn]=qn}}else{D=Object.defineProperties({},Object.getOwnPropertyDescriptors(D));for(const[An,Bn]of h)D[An]=Bn}T=s.index,I=s.keys,h=s.edits,d=s.inArray,s=s.prev}else if(B){if(E=d?T:I[T],D=B[E],D==null)continue;M.push(E)}let hn;if(!Array.isArray(D)){var J,mn;up(D)||un(!1,`Invalid AST Node: ${G(D)}.`);const An=Tn?(J=u.get(D.kind))===null||J===void 0?void 0:J.leave:(mn=u.get(D.kind))===null||mn===void 0?void 0:mn.enter;if(hn=An==null?void 0:An.call(o,D,E,B,M,z),hn===Ci)break;if(hn===!1){if(!Tn){M.pop();continue}}else if(hn!==void 0&&(h.push([E,hn]),!Tn))if(up(hn))D=hn;else{M.pop();continue}}if(hn===void 0&&Ve&&h.push([E,D]),Tn)M.pop();else{var an;s={inArray:d,index:T,keys:I,edits:h,prev:s},d=Array.isArray(D),I=d?D:(an=r[D.kind])!==null&&an!==void 0?an:[],T=-1,h=[],B&&z.push(B),B=D}}while(s!==void 0);return h.length!==0?h[h.length-1][1]:t}function ky(t){const o=new Array(t.length).fill(null),r=Object.create(null);for(const u of Object.values(y)){let s=!1;const d=new Array(t.length).fill(void 0),I=new Array(t.length).fill(void 0);for(let h=0;h<t.length;++h){const{enter:D,leave:E}=Rp(t[h],u);s||(s=D!=null||E!=null),d[h]=D,I[h]=E}if(!s)continue;const T={enter(...h){const D=h[0];for(let B=0;B<t.length;B++)if(o[B]===null){var E;const M=(E=d[B])===null||E===void 0?void 0:E.apply(t[B],h);if(M===!1)o[B]=D;else if(M===Ci)o[B]=Ci;else if(M!==void 0)return M}},leave(...h){const D=h[0];for(let B=0;B<t.length;B++)if(o[B]===null){var E;const M=(E=I[B])===null||E===void 0?void 0:E.apply(t[B],h);if(M===Ci)o[B]=Ci;else if(M!==void 0&&M!==!1)return M}else o[B]===D&&(o[B]=null)}};r[u]=T}return r}function Rp(t,o){const r=t[o];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:t.enter,leave:t.leave}}function qe(t){return wp(t,Jy)}const qy=80,Jy={Name:{leave:t=>t.value},Variable:{leave:t=>"$"+t.name},Document:{leave:t=>x(t.definitions,`

`)},OperationDefinition:{leave(t){const o=rn("(",x(t.variableDefinitions,", "),")"),r=x([t.operation,x([t.name,o]),x(t.directives," ")]," ");return(r==="query"?"":r+" ")+t.selectionSet}},VariableDefinition:{leave:({variable:t,type:o,defaultValue:r,directives:u})=>t+": "+o+rn(" = ",r)+rn(" ",x(u," "))},SelectionSet:{leave:({selections:t})=>De(t)},Field:{leave({alias:t,name:o,arguments:r,directives:u,selectionSet:s}){const d=rn("",t,": ")+o;let I=d+rn("(",x(r,", "),")");return I.length>qy&&(I=d+rn(`(
`,vr(x(r,`
`)),`
)`)),x([I,x(u," "),s]," ")}},Argument:{leave:({name:t,value:o})=>t+": "+o},FragmentSpread:{leave:({name:t,directives:o})=>"..."+t+rn(" ",x(o," "))},InlineFragment:{leave:({typeCondition:t,directives:o,selectionSet:r})=>x(["...",rn("on ",t),x(o," "),r]," ")},FragmentDefinition:{leave:({name:t,typeCondition:o,variableDefinitions:r,directives:u,selectionSet:s})=>`fragment ${t}${rn("(",x(r,", "),")")} on ${o} ${rn("",x(u," ")," ")}`+s},IntValue:{leave:({value:t})=>t},FloatValue:{leave:({value:t})=>t},StringValue:{leave:({value:t,block:o})=>o?ly(t):Ly(t)},BooleanValue:{leave:({value:t})=>t?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:t})=>t},ListValue:{leave:({values:t})=>"["+x(t,", ")+"]"},ObjectValue:{leave:({fields:t})=>"{"+x(t,", ")+"}"},ObjectField:{leave:({name:t,value:o})=>t+": "+o},Directive:{leave:({name:t,arguments:o})=>"@"+t+rn("(",x(o,", "),")")},NamedType:{leave:({name:t})=>t},ListType:{leave:({type:t})=>"["+t+"]"},NonNullType:{leave:({type:t})=>t+"!"},SchemaDefinition:{leave:({description:t,directives:o,operationTypes:r})=>rn("",t,`
`)+x(["schema",x(o," "),De(r)]," ")},OperationTypeDefinition:{leave:({operation:t,type:o})=>t+": "+o},ScalarTypeDefinition:{leave:({description:t,name:o,directives:r})=>rn("",t,`
`)+x(["scalar",o,x(r," ")]," ")},ObjectTypeDefinition:{leave:({description:t,name:o,interfaces:r,directives:u,fields:s})=>rn("",t,`
`)+x(["type",o,rn("implements ",x(r," & ")),x(u," "),De(s)]," ")},FieldDefinition:{leave:({description:t,name:o,arguments:r,type:u,directives:s})=>rn("",t,`
`)+o+(cp(r)?rn(`(
`,vr(x(r,`
`)),`
)`):rn("(",x(r,", "),")"))+": "+u+rn(" ",x(s," "))},InputValueDefinition:{leave:({description:t,name:o,type:r,defaultValue:u,directives:s})=>rn("",t,`
`)+x([o+": "+r,rn("= ",u),x(s," ")]," ")},InterfaceTypeDefinition:{leave:({description:t,name:o,interfaces:r,directives:u,fields:s})=>rn("",t,`
`)+x(["interface",o,rn("implements ",x(r," & ")),x(u," "),De(s)]," ")},UnionTypeDefinition:{leave:({description:t,name:o,directives:r,types:u})=>rn("",t,`
`)+x(["union",o,x(r," "),rn("= ",x(u," | "))]," ")},EnumTypeDefinition:{leave:({description:t,name:o,directives:r,values:u})=>rn("",t,`
`)+x(["enum",o,x(r," "),De(u)]," ")},EnumValueDefinition:{leave:({description:t,name:o,directives:r})=>rn("",t,`
`)+x([o,x(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:t,name:o,directives:r,fields:u})=>rn("",t,`
`)+x(["input",o,x(r," "),De(u)]," ")},DirectiveDefinition:{leave:({description:t,name:o,arguments:r,repeatable:u,locations:s})=>rn("",t,`
`)+"directive @"+o+(cp(r)?rn(`(
`,vr(x(r,`
`)),`
)`):rn("(",x(r,", "),")"))+(u?" repeatable":"")+" on "+x(s," | ")},SchemaExtension:{leave:({directives:t,operationTypes:o})=>x(["extend schema",x(t," "),De(o)]," ")},ScalarTypeExtension:{leave:({name:t,directives:o})=>x(["extend scalar",t,x(o," ")]," ")},ObjectTypeExtension:{leave:({name:t,interfaces:o,directives:r,fields:u})=>x(["extend type",t,rn("implements ",x(o," & ")),x(r," "),De(u)]," ")},InterfaceTypeExtension:{leave:({name:t,interfaces:o,directives:r,fields:u})=>x(["extend interface",t,rn("implements ",x(o," & ")),x(r," "),De(u)]," ")},UnionTypeExtension:{leave:({name:t,directives:o,types:r})=>x(["extend union",t,x(o," "),rn("= ",x(r," | "))]," ")},EnumTypeExtension:{leave:({name:t,directives:o,values:r})=>x(["extend enum",t,x(o," "),De(r)]," ")},InputObjectTypeExtension:{leave:({name:t,directives:o,fields:r})=>x(["extend input",t,x(o," "),De(r)]," ")}};function x(t,o=""){var r;return(r=t==null?void 0:t.filter(u=>u).join(o))!==null&&r!==void 0?r:""}function De(t){return rn(`{
`,vr(x(t,`
`)),`
}`)}function rn(t,o,r=""){return o!=null&&o!==""?t+o+r:""}function vr(t){return rn("  ",t.replace(/\n/g,`
  `))}function cp(t){var o;return(o=t==null?void 0:t.some(r=>r.includes(`
`)))!==null&&o!==void 0?o:!1}function ga(t,o){switch(t.kind){case y.NULL:return null;case y.INT:return parseInt(t.value,10);case y.FLOAT:return parseFloat(t.value);case y.STRING:case y.ENUM:case y.BOOLEAN:return t.value;case y.LIST:return t.values.map(r=>ga(r,o));case y.OBJECT:return Nt(t.fields,r=>r.name.value,r=>ga(r.value,o));case y.VARIABLE:return o==null?void 0:o[t.name.value]}}function Le(t){if(t!=null||un(!1,"Must provide name."),typeof t=="string"||un(!1,"Expected name to be a string."),t.length===0)throw new q("Expected name to be a non-empty string.");for(let o=1;o<t.length;++o)if(!vp(t.charCodeAt(o)))throw new q(`Names must only contain [_a-zA-Z0-9] but "${t}" does not.`);if(!Ta(t.charCodeAt(0)))throw new q(`Names must start with [_a-zA-Z] but "${t}" does not.`);return t}function Gy(t){if(t==="true"||t==="false"||t==="null")throw new q(`Enum values cannot be named: ${t}`);return Le(t)}function ha(t){return St(t)||Zn(t)||Hn(t)||_e(t)||we(t)||Re(t)||Bt(t)||jn(t)}function St(t){return Ge(t,it)}function Zn(t){return Ge(t,Je)}function Vy(t){if(!Zn(t))throw new Error(`Expected ${G(t)} to be a GraphQL Object type.`);return t}function Hn(t){return Ge(t,Ar)}function Wy(t){if(!Hn(t))throw new Error(`Expected ${G(t)} to be a GraphQL Interface type.`);return t}function _e(t){return Ge(t,Dr)}function we(t){return Ge(t,Xt)}function Re(t){return Ge(t,Nr)}function Bt(t){return Ge(t,zn)}function jn(t){return Ge(t,en)}function Lp(t){return St(t)||we(t)||Re(t)||Fa(t)&&Lp(t.ofType)}function Pp(t){return St(t)||Zn(t)||Hn(t)||_e(t)||we(t)||Fa(t)&&Pp(t.ofType)}function xp(t){return St(t)||we(t)}function jy(t){return Hn(t)||_e(t)}class zn{constructor(o){ha(o)||un(!1,`Expected ${G(o)} to be a GraphQL type.`),this.ofType=o}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class en{constructor(o){Mp(o)||un(!1,`Expected ${G(o)} to be a GraphQL nullable type.`),this.ofType=o}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Fa(t){return Bt(t)||jn(t)}function Mp(t){return ha(t)&&!jn(t)}function Hy(t){if(!Mp(t))throw new Error(`Expected ${G(t)} to be a GraphQL nullable type.`);return t}function ch(t){return St(t)||Zn(t)||Hn(t)||_e(t)||we(t)||Re(t)}function Qy(t){if(t){let o=t;for(;Fa(o);)o=o.ofType;return o}}function kp(t){return typeof t=="function"?t():t}function qp(t){return typeof t=="function"?t():t}class it{constructor(o){var r,u,s,d;const I=(r=o.parseValue)!==null&&r!==void 0?r:pp;this.name=Le(o.name),this.description=o.description,this.specifiedByURL=o.specifiedByURL,this.serialize=(u=o.serialize)!==null&&u!==void 0?u:pp,this.parseValue=I,this.parseLiteral=(s=o.parseLiteral)!==null&&s!==void 0?s:(T,h)=>I(ga(T,h)),this.extensions=he(o.extensions),this.astNode=o.astNode,this.extensionASTNodes=(d=o.extensionASTNodes)!==null&&d!==void 0?d:[],o.specifiedByURL==null||typeof o.specifiedByURL=="string"||un(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${G(o.specifiedByURL)}.`),o.serialize==null||typeof o.serialize=="function"||un(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),o.parseLiteral&&(typeof o.parseValue=="function"&&typeof o.parseLiteral=="function"||un(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Je{constructor(o){var r;this.name=Le(o.name),this.description=o.description,this.isTypeOf=o.isTypeOf,this.extensions=he(o.extensions),this.astNode=o.astNode,this.extensionASTNodes=(r=o.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=()=>Gp(o),this._interfaces=()=>Jp(o),o.isTypeOf==null||typeof o.isTypeOf=="function"||un(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${G(o.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Wp(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Jp(t){var o;const r=kp((o=t.interfaces)!==null&&o!==void 0?o:[]);return Array.isArray(r)||un(!1,`${t.name} interfaces must be an Array or a function which returns an Array.`),r}function Gp(t){const o=qp(t.fields);return Kt(o)||un(!1,`${t.name} fields must be an object with field names as keys or a function which returns such an object.`),et(o,(r,u)=>{var s;Kt(r)||un(!1,`${t.name}.${u} field config must be an object.`),r.resolve==null||typeof r.resolve=="function"||un(!1,`${t.name}.${u} field resolver must be a function if provided, but got: ${G(r.resolve)}.`);const d=(s=r.args)!==null&&s!==void 0?s:{};return Kt(d)||un(!1,`${t.name}.${u} args must be an object with argument names as keys.`),{name:Le(u),description:r.description,type:r.type,args:Vp(d),resolve:r.resolve,subscribe:r.subscribe,deprecationReason:r.deprecationReason,extensions:he(r.extensions),astNode:r.astNode}})}function Vp(t){return Object.entries(t).map(([o,r])=>({name:Le(o),description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:he(r.extensions),astNode:r.astNode}))}function Kt(t){return tt(t)&&!Array.isArray(t)}function Wp(t){return et(t,o=>({description:o.description,type:o.type,args:jp(o.args),resolve:o.resolve,subscribe:o.subscribe,deprecationReason:o.deprecationReason,extensions:o.extensions,astNode:o.astNode}))}function jp(t){return Nt(t,o=>o.name,o=>({description:o.description,type:o.type,defaultValue:o.defaultValue,deprecationReason:o.deprecationReason,extensions:o.extensions,astNode:o.astNode}))}function Yy(t){return jn(t.type)&&t.defaultValue===void 0}class Ar{constructor(o){var r;this.name=Le(o.name),this.description=o.description,this.resolveType=o.resolveType,this.extensions=he(o.extensions),this.astNode=o.astNode,this.extensionASTNodes=(r=o.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=Gp.bind(void 0,o),this._interfaces=Jp.bind(void 0,o),o.resolveType==null||typeof o.resolveType=="function"||un(!1,`${this.name} must provide "resolveType" as a function, but got: ${G(o.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Wp(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Dr{constructor(o){var r;this.name=Le(o.name),this.description=o.description,this.resolveType=o.resolveType,this.extensions=he(o.extensions),this.astNode=o.astNode,this.extensionASTNodes=(r=o.extensionASTNodes)!==null&&r!==void 0?r:[],this._types=Ky.bind(void 0,o),o.resolveType==null||typeof o.resolveType=="function"||un(!1,`${this.name} must provide "resolveType" as a function, but got: ${G(o.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Ky(t){const o=kp(t.types);return Array.isArray(o)||un(!1,`Must provide Array of types or a function which returns such an array for Union ${t.name}.`),o}class Xt{constructor(o){var r;this.name=Le(o.name),this.description=o.description,this.extensions=he(o.extensions),this.astNode=o.astNode,this.extensionASTNodes=(r=o.extensionASTNodes)!==null&&r!==void 0?r:[],this._values=$y(this.name,o.values),this._valueLookup=new Map(this._values.map(u=>[u.value,u])),this._nameLookup=$t(this._values,u=>u.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(o){return this._nameLookup[o]}serialize(o){const r=this._valueLookup.get(o);if(r===void 0)throw new q(`Enum "${this.name}" cannot represent value: ${G(o)}`);return r.name}parseValue(o){if(typeof o!="string"){const u=G(o);throw new q(`Enum "${this.name}" cannot represent non-string value: ${u}.`+Er(this,u))}const r=this.getValue(o);if(r==null)throw new q(`Value "${o}" does not exist in "${this.name}" enum.`+Er(this,o));return r.value}parseLiteral(o,r){if(o.kind!==y.ENUM){const s=qe(o);throw new q(`Enum "${this.name}" cannot represent non-enum value: ${s}.`+Er(this,s),{nodes:o})}const u=this.getValue(o.value);if(u==null){const s=qe(o);throw new q(`Value "${s}" does not exist in "${this.name}" enum.`+Er(this,s),{nodes:o})}return u.value}toConfig(){const o=Nt(this.getValues(),r=>r.name,r=>({description:r.description,value:r.value,deprecationReason:r.deprecationReason,extensions:r.extensions,astNode:r.astNode}));return{name:this.name,description:this.description,values:o,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Er(t,o){const r=t.getValues().map(s=>s.name),u=wr(o,r);return _r("the enum value",u)}function $y(t,o){return Kt(o)||un(!1,`${t} values must be an object with value names as keys.`),Object.entries(o).map(([r,u])=>(Kt(u)||un(!1,`${t}.${r} must refer to an object with a "value" key representing an internal value but got: ${G(u)}.`),{name:Gy(r),description:u.description,value:u.value!==void 0?u.value:r,deprecationReason:u.deprecationReason,extensions:he(u.extensions),astNode:u.astNode}))}class Nr{constructor(o){var r;this.name=Le(o.name),this.description=o.description,this.extensions=he(o.extensions),this.astNode=o.astNode,this.extensionASTNodes=(r=o.extensionASTNodes)!==null&&r!==void 0?r:[],this._fields=Xy.bind(void 0,o)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const o=et(this.getFields(),r=>({description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:r.extensions,astNode:r.astNode}));return{name:this.name,description:this.description,fields:o,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Xy(t){const o=qp(t.fields);return Kt(o)||un(!1,`${t.name} fields must be an object with field names as keys or a function which returns such an object.`),et(o,(r,u)=>(!("resolve"in r)||un(!1,`${t.name}.${u} field has a resolve property, but Input Types cannot define resolvers.`),{name:Le(u),description:r.description,type:r.type,defaultValue:r.defaultValue,deprecationReason:r.deprecationReason,extensions:he(r.extensions),astNode:r.astNode}))}const ua=2147483647,sa=-2147483648,zy=new it({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(t){const o=Ai(t);if(typeof o=="boolean")return o?1:0;let r=o;if(typeof o=="string"&&o!==""&&(r=Number(o)),typeof r!="number"||!Number.isInteger(r))throw new q(`Int cannot represent non-integer value: ${G(o)}`);if(r>ua||r<sa)throw new q("Int cannot represent non 32-bit signed integer value: "+G(o));return r},parseValue(t){if(typeof t!="number"||!Number.isInteger(t))throw new q(`Int cannot represent non-integer value: ${G(t)}`);if(t>ua||t<sa)throw new q(`Int cannot represent non 32-bit signed integer value: ${t}`);return t},parseLiteral(t){if(t.kind!==y.INT)throw new q(`Int cannot represent non-integer value: ${qe(t)}`,{nodes:t});const o=parseInt(t.value,10);if(o>ua||o<sa)throw new q(`Int cannot represent non 32-bit signed integer value: ${t.value}`,{nodes:t});return o}}),Zy=new it({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(t){const o=Ai(t);if(typeof o=="boolean")return o?1:0;let r=o;if(typeof o=="string"&&o!==""&&(r=Number(o)),typeof r!="number"||!Number.isFinite(r))throw new q(`Float cannot represent non numeric value: ${G(o)}`);return r},parseValue(t){if(typeof t!="number"||!Number.isFinite(t))throw new q(`Float cannot represent non numeric value: ${G(t)}`);return t},parseLiteral(t){if(t.kind!==y.FLOAT&&t.kind!==y.INT)throw new q(`Float cannot represent non numeric value: ${qe(t)}`,t);return parseFloat(t.value)}}),vn=new it({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(t){const o=Ai(t);if(typeof o=="string")return o;if(typeof o=="boolean")return o?"true":"false";if(typeof o=="number"&&Number.isFinite(o))return o.toString();throw new q(`String cannot represent value: ${G(t)}`)},parseValue(t){if(typeof t!="string")throw new q(`String cannot represent a non string value: ${G(t)}`);return t},parseLiteral(t){if(t.kind!==y.STRING)throw new q(`String cannot represent a non string value: ${qe(t)}`,{nodes:t});return t.value}}),ye=new it({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(t){const o=Ai(t);if(typeof o=="boolean")return o;if(Number.isFinite(o))return o!==0;throw new q(`Boolean cannot represent a non boolean value: ${G(o)}`)},parseValue(t){if(typeof t!="boolean")throw new q(`Boolean cannot represent a non boolean value: ${G(t)}`);return t},parseLiteral(t){if(t.kind!==y.BOOLEAN)throw new q(`Boolean cannot represent a non boolean value: ${qe(t)}`,{nodes:t});return t.value}}),Hp=new it({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(t){const o=Ai(t);if(typeof o=="string")return o;if(Number.isInteger(o))return String(o);throw new q(`ID cannot represent value: ${G(t)}`)},parseValue(t){if(typeof t=="string")return t;if(typeof t=="number"&&Number.isInteger(t))return t.toString();throw new q(`ID cannot represent value: ${G(t)}`)},parseLiteral(t){if(t.kind!==y.STRING&&t.kind!==y.INT)throw new q("ID cannot represent a non-string and non-integer value: "+qe(t),{nodes:t});return t.value}}),Rr=Object.freeze([vn,zy,Zy,ye,Hp]);function nT(t){return Rr.some(({name:o})=>t.name===o)}function Ai(t){if(tt(t)){if(typeof t.valueOf=="function"){const o=t.valueOf();if(!tt(o))return o}if(typeof t.toJSON=="function")return t.toJSON()}return t}function eT(t){return Ge(t,ft)}class ft{constructor(o){var r,u;this.name=Le(o.name),this.description=o.description,this.locations=o.locations,this.isRepeatable=(r=o.isRepeatable)!==null&&r!==void 0?r:!1,this.extensions=he(o.extensions),this.astNode=o.astNode,Array.isArray(o.locations)||un(!1,`@${o.name} locations must be an Array.`);const s=(u=o.args)!==null&&u!==void 0?u:{};tt(s)&&!Array.isArray(s)||un(!1,`@${o.name} args must be an object with argument names as keys.`),this.args=Vp(s)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:jp(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const tT=new ft({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[V.FIELD,V.FRAGMENT_SPREAD,V.INLINE_FRAGMENT],args:{if:{type:new en(ye),description:"Included when true."}}}),iT=new ft({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[V.FIELD,V.FRAGMENT_SPREAD,V.INLINE_FRAGMENT],args:{if:{type:new en(ye),description:"Skipped when true."}}}),rT="No longer supported",Qp=new ft({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[V.FIELD_DEFINITION,V.ARGUMENT_DEFINITION,V.INPUT_FIELD_DEFINITION,V.ENUM_VALUE],args:{reason:{type:vn,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:rT}}}),Yp=new ft({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[V.SCALAR],args:{url:{type:new en(vn),description:"The URL that specifies the behavior of this scalar."}}}),Zt=Object.freeze([tT,iT,Qp,Yp]);function oT(t){return typeof t=="object"&&typeof(t==null?void 0:t[Symbol.iterator])=="function"}function Ei(t,o){if(jn(o)){const r=Ei(t,o.ofType);return(r==null?void 0:r.kind)===y.NULL?null:r}if(t===null)return{kind:y.NULL};if(t===void 0)return null;if(Bt(o)){const r=o.ofType;if(oT(t)){const u=[];for(const s of t){const d=Ei(s,r);d!=null&&u.push(d)}return{kind:y.LIST,values:u}}return Ei(t,r)}if(Re(o)){if(!tt(t))return null;const r=[];for(const u of Object.values(o.getFields())){const s=Ei(t[u.name],u.type);s&&r.push({kind:y.OBJECT_FIELD,name:{kind:y.NAME,value:u.name},value:s})}return{kind:y.OBJECT,fields:r}}if(xp(o)){const r=o.serialize(t);if(r==null)return null;if(typeof r=="boolean")return{kind:y.BOOLEAN,value:r};if(typeof r=="number"&&Number.isFinite(r)){const u=String(r);return dp.test(u)?{kind:y.INT,value:u}:{kind:y.FLOAT,value:u}}if(typeof r=="string")return we(o)?{kind:y.ENUM,value:r}:o===Hp&&dp.test(r)?{kind:y.INT,value:r}:{kind:y.STRING,value:r};throw new TypeError(`Cannot convert value to AST: ${G(r)}.`)}Be(!1,"Unexpected input type: "+G(o))}const dp=/^-?(?:0|[1-9][0-9]*)$/,Oa=new Je({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:vn,resolve:t=>t.description},types:{description:"A list of all types supported by this server.",type:new en(new zn(new en(Ue))),resolve(t){return Object.values(t.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new en(Ue),resolve:t=>t.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Ue,resolve:t=>t.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Ue,resolve:t=>t.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new en(new zn(new en(Kp))),resolve:t=>t.getDirectives()}})}),Kp=new Je({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new en(vn),resolve:t=>t.name},description:{type:vn,resolve:t=>t.description},isRepeatable:{type:new en(ye),resolve:t=>t.isRepeatable},locations:{type:new en(new zn(new en($p))),resolve:t=>t.locations},args:{type:new en(new zn(new en(Lr))),args:{includeDeprecated:{type:ye,defaultValue:!1}},resolve(t,{includeDeprecated:o}){return o?t.args:t.args.filter(r=>r.deprecationReason==null)}}})}),$p=new Xt({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:V.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:V.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:V.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:V.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:V.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:V.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:V.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:V.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:V.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:V.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:V.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:V.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:V.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:V.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:V.UNION,description:"Location adjacent to a union definition."},ENUM:{value:V.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:V.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:V.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:V.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Ue=new Je({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new en(Zp),resolve(t){if(St(t))return In.SCALAR;if(Zn(t))return In.OBJECT;if(Hn(t))return In.INTERFACE;if(_e(t))return In.UNION;if(we(t))return In.ENUM;if(Re(t))return In.INPUT_OBJECT;if(Bt(t))return In.LIST;if(jn(t))return In.NON_NULL;Be(!1,`Unexpected type: "${G(t)}".`)}},name:{type:vn,resolve:t=>"name"in t?t.name:void 0},description:{type:vn,resolve:t=>"description"in t?t.description:void 0},specifiedByURL:{type:vn,resolve:t=>"specifiedByURL"in t?t.specifiedByURL:void 0},fields:{type:new zn(new en(Xp)),args:{includeDeprecated:{type:ye,defaultValue:!1}},resolve(t,{includeDeprecated:o}){if(Zn(t)||Hn(t)){const r=Object.values(t.getFields());return o?r:r.filter(u=>u.deprecationReason==null)}}},interfaces:{type:new zn(new en(Ue)),resolve(t){if(Zn(t)||Hn(t))return t.getInterfaces()}},possibleTypes:{type:new zn(new en(Ue)),resolve(t,o,r,{schema:u}){if(jy(t))return u.getPossibleTypes(t)}},enumValues:{type:new zn(new en(zp)),args:{includeDeprecated:{type:ye,defaultValue:!1}},resolve(t,{includeDeprecated:o}){if(we(t)){const r=t.getValues();return o?r:r.filter(u=>u.deprecationReason==null)}}},inputFields:{type:new zn(new en(Lr)),args:{includeDeprecated:{type:ye,defaultValue:!1}},resolve(t,{includeDeprecated:o}){if(Re(t)){const r=Object.values(t.getFields());return o?r:r.filter(u=>u.deprecationReason==null)}}},ofType:{type:Ue,resolve:t=>"ofType"in t?t.ofType:void 0}})}),Xp=new Je({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new en(vn),resolve:t=>t.name},description:{type:vn,resolve:t=>t.description},args:{type:new en(new zn(new en(Lr))),args:{includeDeprecated:{type:ye,defaultValue:!1}},resolve(t,{includeDeprecated:o}){return o?t.args:t.args.filter(r=>r.deprecationReason==null)}},type:{type:new en(Ue),resolve:t=>t.type},isDeprecated:{type:new en(ye),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:vn,resolve:t=>t.deprecationReason}})}),Lr=new Je({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new en(vn),resolve:t=>t.name},description:{type:vn,resolve:t=>t.description},type:{type:new en(Ue),resolve:t=>t.type},defaultValue:{type:vn,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(t){const{type:o,defaultValue:r}=t,u=Ei(r,o);return u?qe(u):null}},isDeprecated:{type:new en(ye),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:vn,resolve:t=>t.deprecationReason}})}),zp=new Je({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new en(vn),resolve:t=>t.name},description:{type:vn,resolve:t=>t.description},isDeprecated:{type:new en(ye),resolve:t=>t.deprecationReason!=null},deprecationReason:{type:vn,resolve:t=>t.deprecationReason}})});var In;(function(t){t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.INPUT_OBJECT="INPUT_OBJECT",t.LIST="LIST",t.NON_NULL="NON_NULL"})(In||(In={}));const Zp=new Xt({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:In.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:In.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:In.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:In.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:In.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:In.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:In.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:In.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new en(Oa);new en(vn);new en(vn);const Pr=Object.freeze([Oa,Kp,$p,Ue,Xp,Lr,zp,Zp]);function aT(t){return Pr.some(({name:o})=>t.name===o)}class nl{constructor(o){var r,u;this.__validationErrors=o.assumeValid===!0?[]:void 0,tt(o)||un(!1,"Must provide configuration object."),!o.types||Array.isArray(o.types)||un(!1,`"types" must be Array if provided but got: ${G(o.types)}.`),!o.directives||Array.isArray(o.directives)||un(!1,`"directives" must be Array if provided but got: ${G(o.directives)}.`),this.description=o.description,this.extensions=he(o.extensions),this.astNode=o.astNode,this.extensionASTNodes=(r=o.extensionASTNodes)!==null&&r!==void 0?r:[],this._queryType=o.query,this._mutationType=o.mutation,this._subscriptionType=o.subscription,this._directives=(u=o.directives)!==null&&u!==void 0?u:Zt;const s=new Set(o.types);if(o.types!=null)for(const d of o.types)s.delete(d),Ne(d,s);this._queryType!=null&&Ne(this._queryType,s),this._mutationType!=null&&Ne(this._mutationType,s),this._subscriptionType!=null&&Ne(this._subscriptionType,s);for(const d of this._directives)if(eT(d))for(const I of d.args)Ne(I.type,s);Ne(Oa,s),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const d of s){if(d==null)continue;const I=d.name;if(I||un(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[I]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${I}".`);if(this._typeMap[I]=d,Hn(d)){for(const T of d.getInterfaces())if(Hn(T)){let h=this._implementationsMap[T.name];h===void 0&&(h=this._implementationsMap[T.name]={objects:[],interfaces:[]}),h.interfaces.push(d)}}else if(Zn(d)){for(const T of d.getInterfaces())if(Hn(T)){let h=this._implementationsMap[T.name];h===void 0&&(h=this._implementationsMap[T.name]={objects:[],interfaces:[]}),h.objects.push(d)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(o){switch(o){case Se.QUERY:return this.getQueryType();case Se.MUTATION:return this.getMutationType();case Se.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(o){return this.getTypeMap()[o]}getPossibleTypes(o){return _e(o)?o.getTypes():this.getImplementations(o).objects}getImplementations(o){const r=this._implementationsMap[o.name];return r??{objects:[],interfaces:[]}}isSubType(o,r){let u=this._subTypeMap[o.name];if(u===void 0){if(u=Object.create(null),_e(o))for(const s of o.getTypes())u[s.name]=!0;else{const s=this.getImplementations(o);for(const d of s.objects)u[d.name]=!0;for(const d of s.interfaces)u[d.name]=!0}this._subTypeMap[o.name]=u}return u[r.name]!==void 0}getDirectives(){return this._directives}getDirective(o){return this.getDirectives().find(r=>r.name===o)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Ne(t,o){const r=Qy(t);if(!o.has(r)){if(o.add(r),_e(r))for(const u of r.getTypes())Ne(u,o);else if(Zn(r)||Hn(r)){for(const u of r.getInterfaces())Ne(u,o);for(const u of Object.values(r.getFields())){Ne(u.type,o);for(const s of u.args)Ne(s.type,o)}}else if(Re(r))for(const u of Object.values(r.getFields()))Ne(u.type,o)}return o}function uT(t){return t.kind===y.SCHEMA_DEFINITION||Di(t)||t.kind===y.DIRECTIVE_DEFINITION}function Di(t){return t.kind===y.SCALAR_TYPE_DEFINITION||t.kind===y.OBJECT_TYPE_DEFINITION||t.kind===y.INTERFACE_TYPE_DEFINITION||t.kind===y.UNION_TYPE_DEFINITION||t.kind===y.ENUM_TYPE_DEFINITION||t.kind===y.INPUT_OBJECT_TYPE_DEFINITION}function sT(t){return t.kind===y.SCHEMA_EXTENSION||Ca(t)}function Ca(t){return t.kind===y.SCALAR_TYPE_EXTENSION||t.kind===y.OBJECT_TYPE_EXTENSION||t.kind===y.INTERFACE_TYPE_EXTENSION||t.kind===y.UNION_TYPE_EXTENSION||t.kind===y.ENUM_TYPE_EXTENSION||t.kind===y.INPUT_OBJECT_TYPE_EXTENSION}function pT(t){const o=Object.create(null),r=t.getSchema(),u=r?r.getDirectives():Zt;for(const I of u)o[I.name]=I.args.map(T=>T.name);const s=t.getDocument().definitions;for(const I of s)if(I.kind===y.DIRECTIVE_DEFINITION){var d;const T=(d=I.arguments)!==null&&d!==void 0?d:[];o[I.name.value]=T.map(h=>h.name.value)}return{Directive(I){const T=I.name.value,h=o[T];if(I.arguments&&h)for(const D of I.arguments){const E=D.name.value;if(!h.includes(E)){const B=wr(E,h);t.reportError(new q(`Unknown argument "${E}" on directive "@${T}".`+_r(B),{nodes:D}))}}return!1}}}function lT(t){const o=Object.create(null),r=t.getSchema(),u=r?r.getDirectives():Zt;for(const d of u)o[d.name]=d.locations;const s=t.getDocument().definitions;for(const d of s)d.kind===y.DIRECTIVE_DEFINITION&&(o[d.name.value]=d.locations.map(I=>I.value));return{Directive(d,I,T,h,D){const E=d.name.value,B=o[E];if(!B){t.reportError(new q(`Unknown directive "@${E}".`,{nodes:d}));return}const M=cT(D);M&&!B.includes(M)&&t.reportError(new q(`Directive "@${E}" may not be used on ${M}.`,{nodes:d}))}}}function cT(t){const o=t[t.length-1];switch("kind"in o||Be(!1),o.kind){case y.OPERATION_DEFINITION:return dT(o.operation);case y.FIELD:return V.FIELD;case y.FRAGMENT_SPREAD:return V.FRAGMENT_SPREAD;case y.INLINE_FRAGMENT:return V.INLINE_FRAGMENT;case y.FRAGMENT_DEFINITION:return V.FRAGMENT_DEFINITION;case y.VARIABLE_DEFINITION:return V.VARIABLE_DEFINITION;case y.SCHEMA_DEFINITION:case y.SCHEMA_EXTENSION:return V.SCHEMA;case y.SCALAR_TYPE_DEFINITION:case y.SCALAR_TYPE_EXTENSION:return V.SCALAR;case y.OBJECT_TYPE_DEFINITION:case y.OBJECT_TYPE_EXTENSION:return V.OBJECT;case y.FIELD_DEFINITION:return V.FIELD_DEFINITION;case y.INTERFACE_TYPE_DEFINITION:case y.INTERFACE_TYPE_EXTENSION:return V.INTERFACE;case y.UNION_TYPE_DEFINITION:case y.UNION_TYPE_EXTENSION:return V.UNION;case y.ENUM_TYPE_DEFINITION:case y.ENUM_TYPE_EXTENSION:return V.ENUM;case y.ENUM_VALUE_DEFINITION:return V.ENUM_VALUE;case y.INPUT_OBJECT_TYPE_DEFINITION:case y.INPUT_OBJECT_TYPE_EXTENSION:return V.INPUT_OBJECT;case y.INPUT_VALUE_DEFINITION:{const r=t[t.length-3];return"kind"in r||Be(!1),r.kind===y.INPUT_OBJECT_TYPE_DEFINITION?V.INPUT_FIELD_DEFINITION:V.ARGUMENT_DEFINITION}default:Be(!1,"Unexpected kind: "+G(o.kind))}}function dT(t){switch(t){case Se.QUERY:return V.QUERY;case Se.MUTATION:return V.MUTATION;case Se.SUBSCRIPTION:return V.SUBSCRIPTION}}function mT(t){const o=t.getSchema(),r=o?o.getTypeMap():Object.create(null),u=Object.create(null);for(const d of t.getDocument().definitions)Di(d)&&(u[d.name.value]=!0);const s=[...Object.keys(r),...Object.keys(u)];return{NamedType(d,I,T,h,D){const E=d.name.value;if(!r[E]&&!u[E]){var B;const M=(B=D[2])!==null&&B!==void 0?B:T,z=M!=null&&gT(M);if(z&&mp.includes(E))return;const J=wr(E,z?mp.concat(s):s);t.reportError(new q(`Unknown type "${E}".`+_r(J),{nodes:d}))}}}}const mp=[...Rr,...Pr].map(t=>t.name);function gT(t){return"kind"in t&&(uT(t)||sT(t))}function IT(t){var o,r,u;const s=t.getSchema(),d=(o=(r=(u=s==null?void 0:s.astNode)!==null&&u!==void 0?u:s==null?void 0:s.getQueryType())!==null&&r!==void 0?r:s==null?void 0:s.getMutationType())!==null&&o!==void 0?o:s==null?void 0:s.getSubscriptionType();let I=0;return{SchemaDefinition(T){if(d){t.reportError(new q("Cannot define a new schema within a schema extension.",{nodes:T}));return}I>0&&t.reportError(new q("Must provide only one schema definition.",{nodes:T})),++I}}}function fT(t){const o=t.getSchema(),r=Object.create(null);for(const s of t.getDocument().definitions)Di(s)&&(r[s.name.value]=s);return{ScalarTypeExtension:u,ObjectTypeExtension:u,InterfaceTypeExtension:u,UnionTypeExtension:u,EnumTypeExtension:u,InputObjectTypeExtension:u};function u(s){const d=s.name.value,I=r[d],T=o==null?void 0:o.getType(d);let h;if(I?h=ST[I.kind]:T&&(h=yT(T)),h){if(h!==s.kind){const D=TT(s.kind);t.reportError(new q(`Cannot extend non-${D} type "${d}".`,{nodes:I?[I,s]:s}))}}else{const D=Object.keys({...r,...o==null?void 0:o.getTypeMap()}),E=wr(d,D);t.reportError(new q(`Cannot extend type "${d}" because it is not defined.`+_r(E),{nodes:s.name}))}}}const ST={[y.SCALAR_TYPE_DEFINITION]:y.SCALAR_TYPE_EXTENSION,[y.OBJECT_TYPE_DEFINITION]:y.OBJECT_TYPE_EXTENSION,[y.INTERFACE_TYPE_DEFINITION]:y.INTERFACE_TYPE_EXTENSION,[y.UNION_TYPE_DEFINITION]:y.UNION_TYPE_EXTENSION,[y.ENUM_TYPE_DEFINITION]:y.ENUM_TYPE_EXTENSION,[y.INPUT_OBJECT_TYPE_DEFINITION]:y.INPUT_OBJECT_TYPE_EXTENSION};function yT(t){if(St(t))return y.SCALAR_TYPE_EXTENSION;if(Zn(t))return y.OBJECT_TYPE_EXTENSION;if(Hn(t))return y.INTERFACE_TYPE_EXTENSION;if(_e(t))return y.UNION_TYPE_EXTENSION;if(we(t))return y.ENUM_TYPE_EXTENSION;if(Re(t))return y.INPUT_OBJECT_TYPE_EXTENSION;Be(!1,"Unexpected type: "+G(t))}function TT(t){switch(t){case y.SCALAR_TYPE_EXTENSION:return"scalar";case y.OBJECT_TYPE_EXTENSION:return"object";case y.INTERFACE_TYPE_EXTENSION:return"interface";case y.UNION_TYPE_EXTENSION:return"union";case y.ENUM_TYPE_EXTENSION:return"enum";case y.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Be(!1,"Unexpected kind: "+G(t))}}function hT(t){var o;const r=Object.create(null),u=t.getSchema(),s=(o=u==null?void 0:u.getDirectives())!==null&&o!==void 0?o:Zt;for(const T of s)r[T.name]=$t(T.args.filter(Yy),h=>h.name);const d=t.getDocument().definitions;for(const T of d)if(T.kind===y.DIRECTIVE_DEFINITION){var I;const h=(I=T.arguments)!==null&&I!==void 0?I:[];r[T.name.value]=$t(h.filter(FT),D=>D.name.value)}return{Directive:{leave(T){const h=T.name.value,D=r[h];if(D){var E;const B=(E=T.arguments)!==null&&E!==void 0?E:[],M=new Set(B.map(z=>z.name.value));for(const[z,J]of Object.entries(D))if(!M.has(z)){const mn=ha(J.type)?G(J.type):qe(J.type);t.reportError(new q(`Directive "@${h}" argument "${z}" of type "${mn}" is required, but it was not provided.`,{nodes:T}))}}}}}}function FT(t){return t.type.kind===y.NON_NULL_TYPE&&t.defaultValue==null}function It(t,o,r){if(t){if(t.kind===y.VARIABLE){const u=t.name.value;if(r==null||r[u]===void 0)return;const s=r[u];return s===null&&jn(o)?void 0:s}if(jn(o))return t.kind===y.NULL?void 0:It(t,o.ofType,r);if(t.kind===y.NULL)return null;if(Bt(o)){const u=o.ofType;if(t.kind===y.LIST){const d=[];for(const I of t.values)if(gp(I,r)){if(jn(u))return;d.push(null)}else{const T=It(I,u,r);if(T===void 0)return;d.push(T)}return d}const s=It(t,u,r);return s===void 0?void 0:[s]}if(Re(o)){if(t.kind!==y.OBJECT)return;const u=Object.create(null),s=$t(t.fields,d=>d.name.value);for(const d of Object.values(o.getFields())){const I=s[d.name];if(!I||gp(I.value,r)){if(d.defaultValue!==void 0)u[d.name]=d.defaultValue;else if(jn(d.type))return;continue}const T=It(I.value,d.type,r);if(T===void 0)return;u[d.name]=T}return u}if(xp(o)){let u;try{u=o.parseLiteral(t,r)}catch{return}return u===void 0?void 0:u}Be(!1,"Unexpected input type: "+G(o))}}function gp(t,o){return t.kind===y.VARIABLE&&(o==null||o[t.name.value]===void 0)}function OT(t,o,r){var u;const s={},d=(u=o.arguments)!==null&&u!==void 0?u:[],I=$t(d,T=>T.name.value);for(const T of t.args){const h=T.name,D=T.type,E=I[h];if(!E){if(T.defaultValue!==void 0)s[h]=T.defaultValue;else if(jn(D))throw new q(`Argument "${h}" of required type "${G(D)}" was not provided.`,{nodes:o});continue}const B=E.value;let M=B.kind===y.NULL;if(B.kind===y.VARIABLE){const J=B.name.value;if(r==null||!CT(r,J)){if(T.defaultValue!==void 0)s[h]=T.defaultValue;else if(jn(D))throw new q(`Argument "${h}" of required type "${G(D)}" was provided the variable "$${J}" which was not provided a runtime value.`,{nodes:B});continue}M=r[J]==null}if(M&&jn(D))throw new q(`Argument "${h}" of non-null type "${G(D)}" must not be null.`,{nodes:B});const z=It(B,D,r);if(z===void 0)throw new q(`Argument "${h}" has invalid value ${qe(B)}.`,{nodes:B});s[h]=z}return s}function el(t,o,r){var u;const s=(u=o.directives)===null||u===void 0?void 0:u.find(d=>d.name.value===t.name);if(s)return OT(t,s,r)}function CT(t,o){return Object.prototype.hasOwnProperty.call(t,o)}function tl(t,o){const r=new Map;for(const u of t){const s=o(u),d=r.get(s);d===void 0?r.set(s,[u]):d.push(u)}return r}function ET(t){return{DirectiveDefinition(u){var s;const d=(s=u.arguments)!==null&&s!==void 0?s:[];return r(`@${u.name.value}`,d)},InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(u){var s;const d=u.name.value,I=(s=u.fields)!==null&&s!==void 0?s:[];for(const h of I){var T;const D=h.name.value,E=(T=h.arguments)!==null&&T!==void 0?T:[];r(`${d}.${D}`,E)}return!1}function r(u,s){const d=tl(s,I=>I.name.value);for(const[I,T]of d)T.length>1&&t.reportError(new q(`Argument "${u}(${I}:)" can only be defined once.`,{nodes:T.map(h=>h.name)}));return!1}}function bT(t){return{Field:o,Directive:o};function o(r){var u;const s=(u=r.arguments)!==null&&u!==void 0?u:[],d=tl(s,I=>I.name.value);for(const[I,T]of d)T.length>1&&t.reportError(new q(`There can be only one argument named "${I}".`,{nodes:T.map(h=>h.name)}))}}function vT(t){const o=Object.create(null),r=t.getSchema();return{DirectiveDefinition(u){const s=u.name.value;if(r!=null&&r.getDirective(s)){t.reportError(new q(`Directive "@${s}" already exists in the schema. It cannot be redefined.`,{nodes:u.name}));return}return o[s]?t.reportError(new q(`There can be only one directive named "@${s}".`,{nodes:[o[s],u.name]})):o[s]=u.name,!1}}}function AT(t){const o=Object.create(null),r=t.getSchema(),u=r?r.getDirectives():Zt;for(const T of u)o[T.name]=!T.isRepeatable;const s=t.getDocument().definitions;for(const T of s)T.kind===y.DIRECTIVE_DEFINITION&&(o[T.name.value]=!T.repeatable);const d=Object.create(null),I=Object.create(null);return{enter(T){if(!("directives"in T)||!T.directives)return;let h;if(T.kind===y.SCHEMA_DEFINITION||T.kind===y.SCHEMA_EXTENSION)h=d;else if(Di(T)||Ca(T)){const D=T.name.value;h=I[D],h===void 0&&(I[D]=h=Object.create(null))}else h=Object.create(null);for(const D of T.directives){const E=D.name.value;o[E]&&(h[E]?t.reportError(new q(`The directive "@${E}" can only be used once at this location.`,{nodes:[h[E],D]})):h[E]=D)}}}}function DT(t){const o=t.getSchema(),r=o?o.getTypeMap():Object.create(null),u=Object.create(null);return{EnumTypeDefinition:s,EnumTypeExtension:s};function s(d){var I;const T=d.name.value;u[T]||(u[T]=Object.create(null));const h=(I=d.values)!==null&&I!==void 0?I:[],D=u[T];for(const E of h){const B=E.name.value,M=r[T];we(M)&&M.getValue(B)?t.reportError(new q(`Enum value "${T}.${B}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:E.name})):D[B]?t.reportError(new q(`Enum value "${T}.${B}" can only be defined once.`,{nodes:[D[B],E.name]})):D[B]=E.name}return!1}}function NT(t){const o=t.getSchema(),r=o?o.getTypeMap():Object.create(null),u=Object.create(null);return{InputObjectTypeDefinition:s,InputObjectTypeExtension:s,InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(d){var I;const T=d.name.value;u[T]||(u[T]=Object.create(null));const h=(I=d.fields)!==null&&I!==void 0?I:[],D=u[T];for(const E of h){const B=E.name.value;UT(r[T],B)?t.reportError(new q(`Field "${T}.${B}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:E.name})):D[B]?t.reportError(new q(`Field "${T}.${B}" can only be defined once.`,{nodes:[D[B],E.name]})):D[B]=E.name}return!1}}function UT(t,o){return Zn(t)||Hn(t)||Re(t)?t.getFields()[o]!=null:!1}function BT(t){const o=[];let r=Object.create(null);return{ObjectValue:{enter(){o.push(r),r=Object.create(null)},leave(){const u=o.pop();u||Be(!1),r=u}},ObjectField(u){const s=u.name.value;r[s]?t.reportError(new q(`There can be only one input field named "${s}".`,{nodes:[r[s],u.name]})):r[s]=u.name}}}function _T(t){const o=t.getSchema(),r=Object.create(null),u=o?{query:o.getQueryType(),mutation:o.getMutationType(),subscription:o.getSubscriptionType()}:{};return{SchemaDefinition:s,SchemaExtension:s};function s(d){var I;const T=(I=d.operationTypes)!==null&&I!==void 0?I:[];for(const h of T){const D=h.operation,E=r[D];u[D]?t.reportError(new q(`Type for ${D} already defined in the schema. It cannot be redefined.`,{nodes:h})):E?t.reportError(new q(`There can be only one ${D} type in schema.`,{nodes:[E,h]})):r[D]=h}return!1}}function wT(t){const o=Object.create(null),r=t.getSchema();return{ScalarTypeDefinition:u,ObjectTypeDefinition:u,InterfaceTypeDefinition:u,UnionTypeDefinition:u,EnumTypeDefinition:u,InputObjectTypeDefinition:u};function u(s){const d=s.name.value;if(r!=null&&r.getType(d)){t.reportError(new q(`Type "${d}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:s.name}));return}return o[d]?t.reportError(new q(`There can be only one type named "${d}".`,{nodes:[o[d],s.name]})):o[d]=s.name,!1}}const RT=Object.freeze([IT,_T,wT,DT,NT,ET,vT,mT,lT,AT,fT,pT,bT,BT,hT]);class LT{constructor(o,r){this._ast=o,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=r}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(o){this._onError(o)}getDocument(){return this._ast}getFragment(o){let r;if(this._fragments)r=this._fragments;else{r=Object.create(null);for(const u of this.getDocument().definitions)u.kind===y.FRAGMENT_DEFINITION&&(r[u.name.value]=u);this._fragments=r}return r[o]}getFragmentSpreads(o){let r=this._fragmentSpreads.get(o);if(!r){r=[];const u=[o];let s;for(;s=u.pop();)for(const d of s.selections)d.kind===y.FRAGMENT_SPREAD?r.push(d):d.selectionSet&&u.push(d.selectionSet);this._fragmentSpreads.set(o,r)}return r}getRecursivelyReferencedFragments(o){let r=this._recursivelyReferencedFragments.get(o);if(!r){r=[];const u=Object.create(null),s=[o.selectionSet];let d;for(;d=s.pop();)for(const I of this.getFragmentSpreads(d)){const T=I.name.value;if(u[T]!==!0){u[T]=!0;const h=this.getFragment(T);h&&(r.push(h),s.push(h.selectionSet))}}this._recursivelyReferencedFragments.set(o,r)}return r}}class PT extends LT{constructor(o,r,u){super(o,u),this._schema=r}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function xT(t,o,r=RT){const u=[],s=new PT(t,o,I=>{u.push(I)}),d=r.map(I=>I(s));return wp(t,ky(d)),u}function MT(t){const o=xT(t);if(o.length!==0)throw new Error(o.map(r=>r.message).join(`

`))}function kT(t,o){tt(t)&&tt(t.__schema)||un(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${G(t)}.`);const r=t.__schema,u=Nt(r.types,N=>N.name,N=>M(N));for(const N of[...Rr,...Pr])u[N.name]&&(u[N.name]=N);const s=r.queryType?E(r.queryType):null,d=r.mutationType?E(r.mutationType):null,I=r.subscriptionType?E(r.subscriptionType):null,T=r.directives?r.directives.map(We):[];return new nl({description:r.description,query:s,mutation:d,subscription:I,types:Object.values(u),directives:T,assumeValid:o==null?void 0:o.assumeValid});function h(N){if(N.kind===In.LIST){const Q=N.ofType;if(!Q)throw new Error("Decorated type deeper than introspection query.");return new zn(h(Q))}if(N.kind===In.NON_NULL){const Q=N.ofType;if(!Q)throw new Error("Decorated type deeper than introspection query.");const Jn=h(Q);return new en(Hy(Jn))}return D(N)}function D(N){const Q=N.name;if(!Q)throw new Error(`Unknown type reference: ${G(N)}.`);const Jn=u[Q];if(!Jn)throw new Error(`Invalid or incomplete schema, unknown type: ${Q}. Ensure that a full introspection query is used in order to build a client schema.`);return Jn}function E(N){return Vy(D(N))}function B(N){return Wy(D(N))}function M(N){if(N!=null&&N.name!=null&&N.kind!=null)switch(N.kind){case In.SCALAR:return z(N);case In.OBJECT:return mn(N);case In.INTERFACE:return an(N);case In.UNION:return Tn(N);case In.ENUM:return Ve(N);case In.INPUT_OBJECT:return hn(N)}const Q=G(N);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Q}.`)}function z(N){return new it({name:N.name,description:N.description,specifiedByURL:N.specifiedByURL})}function J(N){if(N.interfaces===null&&N.kind===In.INTERFACE)return[];if(!N.interfaces){const Q=G(N);throw new Error(`Introspection result missing interfaces: ${Q}.`)}return N.interfaces.map(B)}function mn(N){return new Je({name:N.name,description:N.description,interfaces:()=>J(N),fields:()=>An(N)})}function an(N){return new Ar({name:N.name,description:N.description,interfaces:()=>J(N),fields:()=>An(N)})}function Tn(N){if(!N.possibleTypes){const Q=G(N);throw new Error(`Introspection result missing possibleTypes: ${Q}.`)}return new Dr({name:N.name,description:N.description,types:()=>N.possibleTypes.map(E)})}function Ve(N){if(!N.enumValues){const Q=G(N);throw new Error(`Introspection result missing enumValues: ${Q}.`)}return new Xt({name:N.name,description:N.description,values:Nt(N.enumValues,Q=>Q.name,Q=>({description:Q.description,deprecationReason:Q.deprecationReason}))})}function hn(N){if(!N.inputFields){const Q=G(N);throw new Error(`Introspection result missing inputFields: ${Q}.`)}return new Nr({name:N.name,description:N.description,fields:()=>qn(N.inputFields)})}function An(N){if(!N.fields)throw new Error(`Introspection result missing fields: ${G(N)}.`);return Nt(N.fields,Q=>Q.name,Bn)}function Bn(N){const Q=h(N.type);if(!Pp(Q)){const Jn=G(Q);throw new Error(`Introspection must provide output type for fields, but received: ${Jn}.`)}if(!N.args){const Jn=G(N);throw new Error(`Introspection result missing field args: ${Jn}.`)}return{description:N.description,deprecationReason:N.deprecationReason,type:Q,args:qn(N.args)}}function qn(N){return Nt(N,Q=>Q.name,Pn)}function Pn(N){const Q=h(N.type);if(!Lp(Q)){const rt=G(Q);throw new Error(`Introspection must provide input type for arguments, but received: ${rt}.`)}const Jn=N.defaultValue!=null?It(Uy(N.defaultValue),Q):void 0;return{description:N.description,type:Q,defaultValue:Jn,deprecationReason:N.deprecationReason}}function We(N){if(!N.args){const Q=G(N);throw new Error(`Introspection result missing directive args: ${Q}.`)}if(!N.locations){const Q=G(N);throw new Error(`Introspection result missing directive locations: ${Q}.`)}return new ft({name:N.name,description:N.description,isRepeatable:N.isRepeatable,locations:N.locations.slice(),args:qn(N.args)})}}function qT(t,o,r){var u,s,d,I;const T=[],h=Object.create(null),D=[];let E;const B=[];for(const C of o.definitions)if(C.kind===y.SCHEMA_DEFINITION)E=C;else if(C.kind===y.SCHEMA_EXTENSION)B.push(C);else if(Di(C))T.push(C);else if(Ca(C)){const P=C.name.value,w=h[P];h[P]=w?w.concat([C]):[C]}else C.kind===y.DIRECTIVE_DEFINITION&&D.push(C);if(Object.keys(h).length===0&&T.length===0&&D.length===0&&B.length===0&&E==null)return t;const M=Object.create(null);for(const C of t.types)M[C.name]=Ve(C);for(const C of T){var z;const P=C.name.value;M[P]=(z=Ip[P])!==null&&z!==void 0?z:ue(C)}const J={query:t.query&&an(t.query),mutation:t.mutation&&an(t.mutation),subscription:t.subscription&&an(t.subscription),...E&&Jn([E]),...Jn(B)};return{description:(u=E)===null||u===void 0||(s=u.description)===null||s===void 0?void 0:s.value,...J,types:Object.values(M),directives:[...t.directives.map(Tn),...D.map(Ni)],extensions:Object.create(null),astNode:(d=E)!==null&&d!==void 0?d:t.astNode,extensionASTNodes:t.extensionASTNodes.concat(B),assumeValid:(I=r==null?void 0:r.assumeValid)!==null&&I!==void 0?I:!1};function mn(C){return Bt(C)?new zn(mn(C.ofType)):jn(C)?new en(mn(C.ofType)):an(C)}function an(C){return M[C.name]}function Tn(C){const P=C.toConfig();return new ft({...P,args:et(P.args,Q)})}function Ve(C){if(aT(C)||nT(C))return C;if(St(C))return Bn(C);if(Zn(C))return qn(C);if(Hn(C))return Pn(C);if(_e(C))return We(C);if(we(C))return An(C);if(Re(C))return hn(C);Be(!1,"Unexpected type: "+G(C))}function hn(C){var P;const w=C.toConfig(),R=(P=h[w.name])!==null&&P!==void 0?P:[];return new Nr({...w,fields:()=>({...et(w.fields,pn=>({...pn,type:mn(pn.type)})),...Pe(R)}),extensionASTNodes:w.extensionASTNodes.concat(R)})}function An(C){var P;const w=C.toConfig(),R=(P=h[C.name])!==null&&P!==void 0?P:[];return new Xt({...w,values:{...w.values,...Fe(R)},extensionASTNodes:w.extensionASTNodes.concat(R)})}function Bn(C){var P;const w=C.toConfig(),R=(P=h[w.name])!==null&&P!==void 0?P:[];let pn=w.specifiedByURL;for(const ln of R){var Cn;pn=(Cn=fp(ln))!==null&&Cn!==void 0?Cn:pn}return new it({...w,specifiedByURL:pn,extensionASTNodes:w.extensionASTNodes.concat(R)})}function qn(C){var P;const w=C.toConfig(),R=(P=h[w.name])!==null&&P!==void 0?P:[];return new Je({...w,interfaces:()=>[...C.getInterfaces().map(an),...wt(R)],fields:()=>({...et(w.fields,N),..._t(R)}),extensionASTNodes:w.extensionASTNodes.concat(R)})}function Pn(C){var P;const w=C.toConfig(),R=(P=h[w.name])!==null&&P!==void 0?P:[];return new Ar({...w,interfaces:()=>[...C.getInterfaces().map(an),...wt(R)],fields:()=>({...et(w.fields,N),..._t(R)}),extensionASTNodes:w.extensionASTNodes.concat(R)})}function We(C){var P;const w=C.toConfig(),R=(P=h[w.name])!==null&&P!==void 0?P:[];return new Dr({...w,types:()=>[...C.getTypes().map(an),...Tt(R)],extensionASTNodes:w.extensionASTNodes.concat(R)})}function N(C){return{...C,type:mn(C.type),args:C.args&&et(C.args,Q)}}function Q(C){return{...C,type:mn(C.type)}}function Jn(C){const P={};for(const R of C){var w;const pn=(w=R.operationTypes)!==null&&w!==void 0?w:[];for(const Cn of pn)P[Cn.operation]=rt(Cn.type)}return P}function rt(C){var P;const w=C.name.value,R=(P=Ip[w])!==null&&P!==void 0?P:M[w];if(R===void 0)throw new Error(`Unknown type: "${w}".`);return R}function yt(C){return C.kind===y.LIST_TYPE?new zn(yt(C.type)):C.kind===y.NON_NULL_TYPE?new en(yt(C.type)):rt(C)}function Ni(C){var P;return new ft({name:C.name.value,description:(P=C.description)===null||P===void 0?void 0:P.value,locations:C.locations.map(({value:w})=>w),isRepeatable:C.repeatable,args:Ui(C.arguments),astNode:C})}function _t(C){const P=Object.create(null);for(const pn of C){var w;const Cn=(w=pn.fields)!==null&&w!==void 0?w:[];for(const ln of Cn){var R;P[ln.name.value]={type:yt(ln.type),description:(R=ln.description)===null||R===void 0?void 0:R.value,args:Ui(ln.arguments),deprecationReason:br(ln),astNode:ln}}}return P}function Ui(C){const P=C??[],w=Object.create(null);for(const pn of P){var R;const Cn=yt(pn.type);w[pn.name.value]={type:Cn,description:(R=pn.description)===null||R===void 0?void 0:R.value,defaultValue:It(pn.defaultValue,Cn),deprecationReason:br(pn),astNode:pn}}return w}function Pe(C){const P=Object.create(null);for(const pn of C){var w;const Cn=(w=pn.fields)!==null&&w!==void 0?w:[];for(const ln of Cn){var R;const se=yt(ln.type);P[ln.name.value]={type:se,description:(R=ln.description)===null||R===void 0?void 0:R.value,defaultValue:It(ln.defaultValue,se),deprecationReason:br(ln),astNode:ln}}}return P}function Fe(C){const P=Object.create(null);for(const pn of C){var w;const Cn=(w=pn.values)!==null&&w!==void 0?w:[];for(const ln of Cn){var R;P[ln.name.value]={description:(R=ln.description)===null||R===void 0?void 0:R.value,deprecationReason:br(ln),astNode:ln}}}return P}function wt(C){return C.flatMap(P=>{var w,R;return(w=(R=P.interfaces)===null||R===void 0?void 0:R.map(rt))!==null&&w!==void 0?w:[]})}function Tt(C){return C.flatMap(P=>{var w,R;return(w=(R=P.types)===null||R===void 0?void 0:R.map(rt))!==null&&w!==void 0?w:[]})}function ue(C){var P;const w=C.name.value,R=(P=h[w])!==null&&P!==void 0?P:[];switch(C.kind){case y.OBJECT_TYPE_DEFINITION:{var pn;const xn=[C,...R];return new Je({name:w,description:(pn=C.description)===null||pn===void 0?void 0:pn.value,interfaces:()=>wt(xn),fields:()=>_t(xn),astNode:C,extensionASTNodes:R})}case y.INTERFACE_TYPE_DEFINITION:{var Cn;const xn=[C,...R];return new Ar({name:w,description:(Cn=C.description)===null||Cn===void 0?void 0:Cn.value,interfaces:()=>wt(xn),fields:()=>_t(xn),astNode:C,extensionASTNodes:R})}case y.ENUM_TYPE_DEFINITION:{var ln;const xn=[C,...R];return new Xt({name:w,description:(ln=C.description)===null||ln===void 0?void 0:ln.value,values:Fe(xn),astNode:C,extensionASTNodes:R})}case y.UNION_TYPE_DEFINITION:{var se;const xn=[C,...R];return new Dr({name:w,description:(se=C.description)===null||se===void 0?void 0:se.value,types:()=>Tt(xn),astNode:C,extensionASTNodes:R})}case y.SCALAR_TYPE_DEFINITION:{var ni;return new it({name:w,description:(ni=C.description)===null||ni===void 0?void 0:ni.value,specifiedByURL:fp(C),astNode:C,extensionASTNodes:R})}case y.INPUT_OBJECT_TYPE_DEFINITION:{var ot;const xn=[C,...R];return new Nr({name:w,description:(ot=C.description)===null||ot===void 0?void 0:ot.value,fields:()=>Pe(xn),astNode:C,extensionASTNodes:R})}}}}const Ip=$t([...Rr,...Pr],t=>t.name);function br(t){const o=el(Qp,t);return o==null?void 0:o.reason}function fp(t){const o=el(Yp,t);return o==null?void 0:o.url}function JT(t,o){t!=null&&t.kind===y.DOCUMENT||un(!1,"Must provide valid Document AST."),(o==null?void 0:o.assumeValid)!==!0&&(o==null?void 0:o.assumeValidSDL)!==!0&&MT(t);const u=qT({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},t,o);if(u.astNode==null)for(const d of u.types)switch(d.name){case"Query":u.query=d;break;case"Mutation":u.mutation=d;break;case"Subscription":u.subscription=d;break}const s=[...u.directives,...Zt.filter(d=>u.directives.every(I=>I.name!==d.name))];return new nl({...u,directives:s})}function GT(t,o){const r=Ny(t,{noLocation:o==null?void 0:o.noLocation,allowLegacyFragmentVariables:o==null?void 0:o.allowLegacyFragmentVariables});return JT(r,{assumeValidSDL:o==null?void 0:o.assumeValidSDL,assumeValid:o==null?void 0:o.assumeValid})}const Sp=`
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
  templateTxVariables(id: String!): [String!]
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
  allCampaignLinkStats(input: CampaignStatsInput!): [CampaignLinkStats!]
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
  transaction(id: String!): Transaction
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
  deleteSecurityRole(
    """
    ID of group to be deleted. Refer to the **accountGroups** query to get a list of groups. *Max length: 19*
    """
    id: String!
  ): Boolean
  """Associate an user with an account security group."""
  createUserSecurityRole(input: CreateUserSecurityRoleInput!): SecurityRole
  """Removes a user from an account security group."""
  deleteUserSecurityRole(input: DeleteUserSecurityRoleInput!): SecurityRole
  downgradeCheck(planType: PlanType!): DowngradeCheckResult
  updateAccountPlanSettings(allowOverages: Boolean!, allowAutoScaling: Boolean!, planType: PlanType!): Boolean
  """
  Change an active plan to a new plan. If upgrading, the payment method will be billing and the account will be upgraded immediately. If downgrading, this will submit a request, which will automatically be performed at the beginning of the next billing cycle.
  """
  changeAccountPlan(
    """New plan id"""
    newPlanId: String!
    """Allow overages"""
    allowOverages: Boolean!
    """Allow autoscaling"""
    allowAutoScaling: Boolean!
    """Item count"""
    itemCount: Int!
    """Coupon code"""
    couponCode: String
  ): ChgPlanResult
  """Calculate the prorated cost to upgrade a current plan to a new plan."""
  costEstimator(
    """New plan Id"""
    newPlanId: String!
    """All overages"""
    allowOverages: Boolean!
    """Item count"""
    itemCount: Int!
    """Coupon code"""
    couponCode: String
  ): Estimate
  """
  Cancel a previous requested plan downgrade at the next billing cycle. This can be done at any time before the next billing cycle.
  """
  cancelAccountPlanDowngrade(planType: PlanType!): Boolean
  """Cancel account plan"""
  cancelAccountPlan(
    """Plan type"""
    planType: PlanType!
    """Reason for cancelling"""
    reason: String
    """Feedback on product"""
    feedback: String
    """Rating (1-5) of plan/features"""
    rating: Int
  ): Boolean
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
  updateContactStatus(input: UpdateContactStatusInput!): Boolean
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
  id: String!
  requestId: String!
  subscriberId: String
  replyTo: String!
  from: String!
  recipient: String!
  tags: [String!]!
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
  sent: Boolean!
  delivered: Boolean!
  opened: Boolean!
  clicked: Boolean!
  providedFeedback: Boolean!
  providedRating: Boolean!
  viewedOnline: Boolean!
  socialShare: Boolean!
  forwardedToFriend: Boolean!
  printed: Boolean!
  complained: Boolean!
  unsubscribed: Boolean!
  soft: Boolean!
  hard: Boolean!
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
  STARTED_CAMPAIGN_SEND
  FINISHED_CAMPAIGN_SEND
  VIEWED_FORM
  VIEWED_EXPIRED_SURVEY
  SUBMITTED_COMPLETE_FORM
  SUBMITTED_PARTIAL_FORM
  ABANDONED_FORM
  CTA
  ENTERED_JOURNEY
  EXITED_JOURNEY
  COMPLETED_JOURNEY
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
  tags: StringOperationFilterInput
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
  tags: SortEnumType
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
  tags: String
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
  sent: BooleanOperationFilterInput
  delivered: BooleanOperationFilterInput
  opened: BooleanOperationFilterInput
  clicked: BooleanOperationFilterInput
  providedFeedback: BooleanOperationFilterInput
  providedRating: BooleanOperationFilterInput
  viewedOnline: BooleanOperationFilterInput
  socialShare: BooleanOperationFilterInput
  forwardedToFriend: BooleanOperationFilterInput
  printed: BooleanOperationFilterInput
  complained: BooleanOperationFilterInput
  unsubscribed: BooleanOperationFilterInput
  soft: BooleanOperationFilterInput
  hard: BooleanOperationFilterInput
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


input UpdateFlowDecisionSplitInput {
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


input UpdateContactStatusInput {
  id: String
  emailAddress: String
  audienceId: String
  status: ContactStatus!
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
  """*Max length: 100*"""
  groupName: String
  settings: TransactionSettingsInput!
  tags: [String!]
  metadata: [NameValueInput!]
  header: TransactionHeaderInput!
  content: TransactionContentInput!
  variables: [NameValueInput!]
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
  audiences: [Long!]
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


"""Service plan credit blocks available for purchase"""
type ServicePlanCredit {
  """Unique credit block ID"""
  id: String!
  """Number of credits in block"""
  qty: Float!
  """Fee to purchase block of credits"""
  fee: Float!
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


enum InvoiceStatus {
  """Invoice paid in full"""
  PAID
  """Invoice pending payment processing"""
  PENDING
  """Payment for invoice failed"""
  PAYMENT_FAILED
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


input TransactionRecipientInput {
  """*Max length: 255*"""
  name: String
  """
  If a valid contact id is not passed, emailAddress is required. *Max length: 320*
  """
  emailAddress: String
  contactId: String
  type: RecipientType
  """Name: 50 character limit  Value: 255 character limit"""
  metadata: [NameValueInput!]
  variables: [NameValueInput!]
}


input TransactionContentInput {
  templateId: String
  contentBodies: [TransactionContentBodyInput!]
}


input TransactionHeaderInput {
  """*Max length: 500*"""
  subject: String!
  mailDomain: String
  from: TransactionFromInput!
  replyTo: TransactionReplyToInput
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
  sendAtUtc: DateTime
  tracking: TransactionTrackingInput
  """*Max length: 320*"""
  sendRepliesTo: String
  """*Max length: 320*"""
  sendBccTo: String
  showRecipients: Boolean
  ignoreSuppressCheck: Boolean!
  sandbox: TransactionSandboxInput
  content: TransactionContentSettingsInput
  enableViewOnline: Boolean
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
  enable: Boolean!
  """Name: 50 character limit  Value: 50 character limit"""
  parameters: [NameValueInput!]
}


input TransactionContentSettingsInput {
  autoGenerateText: Boolean!
  autoGenerateHtml: Boolean!
}


input TransactionSandboxInput {
  enable: Boolean!
  errorType: SandboxErrorType!
}


input TransactionTrackingInput {
  opens: Boolean
  clicks: Boolean
  stripQueryString: Boolean
  replies: Boolean
  """Track domains when a contact id is passed."""
  domains: Boolean
}


input TransactionReplyToInput {
  """*Max length: 255*"""
  name: String
  """*Max length: 320*"""
  emailAddress: String!
}


input TransactionFromInput {
  """*Max length: 255*"""
  name: String
  """*Max length: 320*"""
  emailAddress: String!
}


input TransactionContentBodyInput {
  clickTracking: Boolean
  charset: Charset
  mimeType: MimeType!
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
`;class VT{constructor(o){tp(this,"mapping");this.mapping=o}getFor(o){return this.mapping.get(o.name)}}var bi;(function(t){t.UNION="union",t.ARGUMENT="argument",t.FIELD="field"})(bi||(bi={}));function WT(t){const o=new Map;return jT(t,r=>{Zn(r)&&HT(r,u=>{const s=Ia(u.type);pa(o,s).references.push({kind:bi.FIELD,parent:r,by:u}),QT(u,I=>{const T=Ia(I.type);pa(o,T).references.push({kind:bi.ARGUMENT,field:u,type:r,by:I})})}),_e(r)&&r.getTypes().forEach(u=>{pa(o,u).references.push({kind:bi.UNION,by:r})})}),new VT(o)}function jT(t,o){Object.entries(t.getTypeMap()).forEach(([,r])=>{r.name.startsWith("__")||o(r)})}function HT(t,o){Object.entries(t.getFields()).forEach(([,r])=>{o(r)})}function QT(t,o){Object.entries(t.args).forEach(([,r])=>{o(r)})}function pa(t,o){let r=t.get(o.name);return r||(r={references:[]},t.set(o.name,r)),r}function Ia(t){return jn(t)||Bt(t)?Ia(t.ofType):t}const Qn=oh(),fa=ty(HS.DIRECTIVES,[]);var yp;const YT=xr((yp=Qn.getQueryType())==null?void 0:yp.getFields());var Tp;const KT=xr((Tp=Qn.getMutationType())==null?void 0:Tp.getFields());var hp;const $T=xr((hp=Qn.getSubscriptionType())==null?void 0:hp.getFields()),Ea=Te.keyBy(rl(),t=>t.name.toLocaleLowerCase()),XT=Te.mapValues(Ea,t=>{const o=fa.find(r=>(r==null?void 0:r.name)===t.name||(r==null?void 0:r.name)==="*");return o?o.args.some(r=>r==="*")?t.args:o.args.map(r=>t.args.find(u=>u.name===r)).filter(r=>!!r):[]}),zT=xr(Qn.getTypeMap()),ZT=WT(Qn);function xr(t){return Te.mapKeys(t||{},(o,r)=>r.toLocaleLowerCase())}function nh(){return Te.size(Qn.getTypeMap())<=10}function dh(){return[la("Queries",Qn.getQueryType()),la("Mutations",Qn.getMutationType()),la("Subscriptions",Qn.getSubscriptionType()),ah(),ih()].filter(t=>!!t)}function la(t,o){return th(t,eh(o))}function eh(t){return Te.sortBy((t==null?void 0:t.getFields())||{},o=>o.name)}function th(t,o){return o.length===0?null:{type:"menu",title:t,children:o.map(r=>({type:"page",title:r.name,section:t,deprecated:!!r.deprecationReason,href:Sa.joinUrlPaths(ya,t.toLocaleLowerCase(),r.name)}))}}function ih(){return nh()?null:{type:"menu",title:"Types",children:Te.sortBy(Te.map(Qn.getTypeMap()),o=>o.name).filter(o=>!o.name.startsWith("__")).map(o=>({type:"page",title:o.name,section:"Types",href:Sa.joinUrlPaths(ya,"types",o.name)}))}}function mh(){return!!Qn.getQueryType()}function gh(t){return YT[t.toLocaleLowerCase()]}function Ih(){return!!Qn.getMutationType()}function fh(t){return KT[t.toLocaleLowerCase()]}function Sh(){return!!Qn.getSubscriptionType()}function yh(t){return $T[t.toLocaleLowerCase()]}function Th(t){return zT[t.toLocaleLowerCase()]}function rh(t){return Ea[t.toLocaleLowerCase()]}function hh(t){return rh(t.name)!==void 0}function Fh(){return Te.size(Ea)>0}function Oh(t){return XT[t.name.toLocaleLowerCase()]||[]}function Ch(t){if(t)return ZT.getFor(t)}function Eh(t){return Te.flatMap(t.getFields(),o=>({field:o,possibleDescriptions:il(o,t)}))}function il(t,o){return t?t.description?[{description:t.description,from:o}]:Zn(o)?o.getInterfaces().flatMap(r=>il(r.getFields()[t.name],r)):[]:[]}function rl(){return fa.some(t=>(t==null?void 0:t.name)==="*")?Qn.getDirectives().filter(t=>!["include","skip","deprecated","specifiedBy"].includes(t.name)):fa.filter(t=>!!(t!=null&&t.name)).map(({name:t})=>t?Qn.getDirective(t):void 0).filter(t=>!!t)}function oh(){return Sp.trim().length===0?kT(JSON.parse(JSON.stringify({__schema:{types:[]}}))):GT(Sp)}function ah(){const t=rl();return t.length===0?null:{type:"menu",title:"Directives",children:t.map(o=>({type:"page",title:o.name,href:Sa.joinUrlPaths(ya,"directives",o.name),section:"Directives"}))}}export{Eh as A,Th as B,Ch as C,hh as D,ch as E,dh as F,y as K,bi as R,Zn as a,Hn as b,St as c,_e as d,Re as e,nh as f,ty as g,lh as h,we as i,Oh as j,Fh as k,Te as l,rh as m,Ih as n,fh as o,mh as p,gh as q,Sh as r,Qn as s,HS as t,yh as u,Qy as v,jn as w,Bt as x,Mp as y,xp as z};
