import{d as s,e as n}from"./model-19d519c9.js";import{f as i}from"./pages-e06cbb0b.js";import{e as a}from"./index-f89a8019.js";const p=s(),c=({params:o,url:t})=>{const e=n(o.subscription),r=i(t.pathname);if(!e||!r)throw a(404,`Subscription ${o.subscription} not found.`);return{field:e,page:r}},d=Object.freeze(Object.defineProperty({__proto__:null,prerender:p,load:c},Symbol.toStringTag,{value:"Module"}));export{d as _,c as l,p};
