import{a,b as n}from"./model-19d519c9.js";import{f as s}from"./pages-463ab7d6.js";import{e as f}from"./index-f89a8019.js";const p=a(),u=({params:e,url:t})=>{const r=n(e.query),o=s(t.pathname);if(!r||!o)throw f(404,`Query ${e.query} not found.`);return{field:r,page:o}},y=Object.freeze(Object.defineProperty({__proto__:null,prerender:p,load:u},Symbol.toStringTag,{value:"Module"}));export{y as _,u as l,p};
