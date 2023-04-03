import{a as I}from"./codemirror.es-15024c32.js";import"./index-b2c7b8b5.js";var H=Object.defineProperty,L=(d,m)=>H(d,"name",{value:m,configurable:!0});function j(d,m){return m.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(u){if(u!=="default"&&!(u in d)){var n=Object.getOwnPropertyDescriptor(e,u);Object.defineProperty(d,u,n.get?n:{enumerable:!0,get:function(){return e[u]}})}})}),Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}L(j,"_mergeNamespaces");var F={exports:{}};(function(d,m){(function(e){e(I.exports)})(function(e){function u(n){return function(o,a){var r=a.line,s=o.getLine(r);function c(i){for(var l,v=a.ch,p=0;;){var b=v<=0?-1:s.lastIndexOf(i[0],v-1);if(b==-1){if(p==1)break;p=1,v=s.length;continue}if(p==1&&b<a.ch)break;if(l=o.getTokenTypeAt(e.Pos(r,b+1)),!/^(comment|string)/.test(l))return{ch:b+1,tokenType:l,pair:i};v=b-1}}L(c,"findOpening");function h(i){var l=1,v=o.lastLine(),p,b=i.ch,A;e:for(var k=r;k<=v;++k)for(var T=o.getLine(k),P=k==r?b:0;;){var O=T.indexOf(i.pair[0],P),_=T.indexOf(i.pair[1],P);if(O<0&&(O=T.length),_<0&&(_=T.length),P=Math.min(O,_),P==T.length)break;if(o.getTokenTypeAt(e.Pos(k,P+1))==i.tokenType){if(P==O)++l;else if(!--l){p=k,A=P;break e}}++P}return p==null||r==p?null:{from:e.Pos(r,b),to:e.Pos(p,A)}}L(h,"findRange");for(var f=[],t=0;t<n.length;t++){var g=c(n[t]);g&&f.push(g)}f.sort(function(i,l){return i.ch-l.ch});for(var t=0;t<f.length;t++){var y=h(f[t]);if(y)return y}return null}}L(u,"bracketFolding"),e.registerHelper("fold","brace",u([["{","}"],["[","]"]])),e.registerHelper("fold","brace-paren",u([["{","}"],["[","]"],["(",")"]])),e.registerHelper("fold","import",function(n,o){function a(t){if(t<n.firstLine()||t>n.lastLine())return null;var g=n.getTokenAt(e.Pos(t,1));if(/\S/.test(g.string)||(g=n.getTokenAt(e.Pos(t,g.end+1))),g.type!="keyword"||g.string!="import")return null;for(var y=t,i=Math.min(n.lastLine(),t+10);y<=i;++y){var l=n.getLine(y),v=l.indexOf(";");if(v!=-1)return{startCh:g.end,end:e.Pos(y,v)}}}L(a,"hasImport");var r=o.line,s=a(r),c;if(!s||a(r-1)||(c=a(r-2))&&c.end.line==r-1)return null;for(var h=s.end;;){var f=a(h.line+1);if(f==null)break;h=f.end}return{from:n.clipPos(e.Pos(r,s.startCh+1)),to:h}}),e.registerHelper("fold","include",function(n,o){function a(f){if(f<n.firstLine()||f>n.lastLine())return null;var t=n.getTokenAt(e.Pos(f,1));if(/\S/.test(t.string)||(t=n.getTokenAt(e.Pos(f,t.end+1))),t.type=="meta"&&t.string.slice(0,8)=="#include")return t.start+8}L(a,"hasInclude");var r=o.line,s=a(r);if(s==null||a(r-1)!=null)return null;for(var c=r;;){var h=a(c+1);if(h==null)break;++c}return{from:e.Pos(r,s+1),to:n.clipPos(e.Pos(c))}})})})();var S=F.exports,E=j({__proto__:null,default:S},[F.exports]);export{E as b};
