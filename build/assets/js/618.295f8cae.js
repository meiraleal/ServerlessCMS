(self.webpackChunktinasaurus=self.webpackChunktinasaurus||[]).push([[618],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},814:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var r=n(7462),a=n(7294),o=n(2389),c=n(6010),l=n(2949),s=n(6668);function i(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,l.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var u=n(5281),m=n(7594),d=n.n(m);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:r}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function y(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:o}=t;if(o&&f.test(o)){const e=o.match(f).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(h),t)}}(r,a),l=n.split("\n"),s=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<l.length;){const e=l[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${d},`:u[t]?s[u[t]].start=d:m[t]&&(s[m[t]].range+=`${s[m[t]].start}-${d-1},`),l.splice(d,1)}n=l.join("\n");const p={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{p[e]??=[],p[e].push(t)}))})),{lineClassNames:p,code:n}}const b="codeBlockContainer_Ckt0";function v(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,a]=e;const o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(i());return a.createElement(t,(0,r.Z)({},n,{style:o,className:(0,c.Z)(n.className,b,u.k.common.codeBlock)}))}const E={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return a.createElement(v,{as:"pre",tabIndex:0,className:(0,c.Z)(E.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:E.codeBlockLines},t))}var N=n(902);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=w);const r=(0,N.zX)(t),o=(0,N.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const T={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var Z={Prism:n(7410).Z,theme:T};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var j=/\r\n|\r|\n/,L=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},O=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},S=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=x({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=x({},n,{backgroundColor:null}),a};function _(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const I=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),B(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?S(e.theme,e.language):void 0;return t.themeDict=n})),B(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=x({},_(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?x({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),B(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),B(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=x({},_(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?x({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),B(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,l=[],s=[l];c>-1;){for(;(o=r[c]++)<a[c];){var i=void 0,u=t[c],m=n[c][o];if("string"==typeof m?(u=c>0?u:["plain"],i=m):(u=O(u,m.type),m.alias&&(u=O(u,m.alias)),i=m.content),"string"==typeof i){var d=i.split(j),p=d.length;l.push({types:u,content:d[0]});for(var f=1;f<p;f++)L(l),s.push(l=[]),l.push({types:u,content:d[f]})}else c++,t.push(u),n.push(i),r.push(0),a.push(i.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return L(l),s}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),V="codeLine_lJS_",P="codeLineNumber_Tfdd",A="codeLineContent_feaV";function z(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:l,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=l({line:t,className:(0,c.Z)(n,o&&V)}),u=t.map(((e,t)=>a.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))));return a.createElement("span",i,o?a.createElement(a.Fragment,null,a.createElement("span",{className:P}),a.createElement("span",{className:A},u)):u,a.createElement("br",null))}var D=n(5999);const M={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function $(e){let{code:t,className:n}=e;const[r,o]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),s=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}r.remove(),c&&(o.removeAllRanges(),o.addRange(c)),a&&a.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":r?(0,D.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,D.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,D.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,M.copyButton,r&&M.copyButtonCopied),onClick:s},a.createElement("span",{className:M.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:M.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:M.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const H="wordWrapButtonIcon_Bwma",R="wordWrapButtonEnabled_EoeP";function q(e){let{className:t,onClick:n,isEnabled:r}=e;const o=(0,D.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,r&&R),"aria-label":o,title:o},a.createElement("svg",{className:H,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function W(e){let{children:t,className:n="",metastring:o,title:l,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:d,magicComments:f}}=(0,s.L)(),h=m??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??d;const g=i(),b=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),c=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return C(o,l),(0,a.useEffect)((()=>{l()}),[e,l]),(0,a.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:c}}(),k=function(e){return e?.match(p)?.groups.title??""}(o)||l,{lineClassNames:N,code:w}=y(t,{metastring:o,language:h,magicComments:f}),T=u??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return a.createElement(v,{as:"div",className:(0,c.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},k&&a.createElement("div",{className:E.codeBlockTitle},k),a.createElement("div",{className:E.codeBlockContent},a.createElement(I,(0,r.Z)({},Z,{theme:g,code:w,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,c.Z)(t,E.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,c.Z)(E.codeBlockLines,T&&E.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(z,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:N[t],showLineNumbers:T})))))})),a.createElement("div",{className:E.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&a.createElement(q,{className:E.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),a.createElement($,{className:E.codeButton,code:w}))))}function F(e){let{children:t,...n}=e;const c=(0,o.Z)(),l=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof l?W:k;return a.createElement(s,(0,r.Z)({key:String(c)},n),l)}},4673:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(7462),a=n(7294),o=n(6010),c=n(2389),l=n(6043);const s="details_lb9f",i="isBrowser_bmU9",u="collapsibleContent_i85q";function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function p(e){let{summary:t,children:n,...p}=e;const f=(0,c.Z)(),h=(0,a.useRef)(null),{collapsed:g,setCollapsed:y}=(0,l.u)({initialState:!p.open}),[b,v]=(0,a.useState)(p.open),E=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,r.Z)({},p,{ref:h,open:b,"data-collapsed":g,className:(0,o.Z)(s,f&&i,p.className),onMouseDown:e=>{m(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;m(t)&&d(t,h.current)&&(e.preventDefault(),g?(y(!1),v(!0)):y(!0))}}),E,a.createElement(l.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),v(!e)}},a.createElement("div",{className:u},n)))}const f="details_b_Ee";function h(e){let{...t}=e;return a.createElement(p,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",f,t.className)}))}},2991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(7294),a=n(6010),o=n(3438),c=n(9960),l=n(3919),s=n(5999);const i="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",i)},n)}function p(e){let{href:t,icon:n,title:o,description:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},n," ",o),c&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:c},c))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const c=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),c=n(5999),l=n(6668),s=n(9960);const i="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,l.L)();if("h1"===t||!n)return a.createElement(t,(0,r.Z)({},m,{id:void 0}));const p=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return a.createElement(t,(0,r.Z)({},m,{className:(0,o.Z)("anchor",d?u:i,m.className),id:n}),m.children,a.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},109:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(5742);var c=n(814);var l=n(9960);var s=n(4673);var i=n(2503);function u(e){return a.createElement(i.Z,e)}var m=n(6010);const d="containsTaskList_mC6p";const p="img_ev3q";var f=n(5281),h=n(5999);const g="admonition_LlT9",y="admonitionHeading_tbUL",b="admonitionIcon_kALy",v="admonitionContent_S0QG";const E={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(h.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(h.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(h.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(h.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(h.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},k={secondary:"note",important:"info",success:"tip",warning:"danger"};function N(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const w={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(o.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(c.Z,e)},a:function(e){return a.createElement(l.Z,e)},pre:function(e){return a.createElement(c.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(s.Z,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,m.Z)(t,t?.includes("contains-task-list")&&d))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,p))}));var t},h1:e=>a.createElement(u,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(u,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(u,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(u,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(u,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(u,(0,r.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:o}=N(e),c=function(e){const t=k[e]??e,n=E[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),E.info)}(n),l=r??c.label,{iconComponent:s}=c,i=o??a.createElement(s,null);return a.createElement("div",{className:(0,m.Z)(f.k.common.admonition,f.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,g)},a.createElement("div",{className:y},a.createElement("span",{className:b},i),l),a.createElement("div",{className:v},t))},mermaid:n(1875).Z}},5042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),a=n(3905),o=n(1769);function c(e){let{children:t}=e;return r.createElement(a.Zo,{components:o.Z},t)}},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:n,className:c}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,c),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),o=n(6010),c=n(2466),l=n(6550),s=n(1980),i=n(7392),u=n(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[c,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,i]=f({queryString:n,groupId:r}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var g=n(2389);const y="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,c.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==l&&(m(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:c}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},c,{className:(0,o.Z)("tabs__item",b,c?.className,{"tabs__item--active":l===t})}),n??t)})))}function E(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(E,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);