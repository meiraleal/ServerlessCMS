import{C as t}from"./codemirror.es-adf954a2.js";import{o,M as s,O as i,Q as n}from"./index-d9191be6.js";import{i as l}from"./mode-indent.es-341daf63.js";var p=Object.defineProperty,d=(e,r)=>p(e,"name",{value:r,configurable:!0});const c=d(e=>{const r=o({eatWhitespace:a=>a.eatWhile(s),lexRules:i,parseRules:n,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:r.startState,token:r.token,indent:l,electricInput:/^\s*[})\]]/,fold:"brace",lineComment:"#",closeBrackets:{pairs:'()[]{}""',explode:"()[]{}"}}},"graphqlModeFactory");t.defineMode("graphql",c);
