import{S as xe,i as et,s as tt,k as w,a as C,q as Y,P as Le,l as y,m as E,h as b,c as M,r as Z,Q as Ue,n as u,R as Be,b as B,E as f,T as me,N as Re,O as lt,o as rt,e as N,U as ge,V as ne,L as Qe,u as Xe}from"../chunks/index.72f3c8ab.js";import{p as at}from"../chunks/stores.e775ae3f.js";var Ge="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",ie={};function st(i,e){if(!ie[i]){ie[i]={};for(let o=0;o<i.length;o++)ie[i][i.charAt(o)]=o}return ie[i][e]}function Ye(i){return i==null?"":ot(i,6,e=>Ge.charAt(e))}function Ze(i){return i==null?"":i==""?null:(i=i.replaceAll(" ","+"),it(i.length,32,e=>st(Ge,i.charAt(e))))}function ot(i,e,o){if(i==null)return"";let a=[],h={},_={},r,n,t,p="",d="",m="",v=2,g=3,c=2,s=0,l=0;for(n=0;n<i.length;n+=1)if(p=i.charAt(n),Object.prototype.hasOwnProperty.call(h,p)||(h[p]=g++,_[p]=!0),m=d+p,Object.prototype.hasOwnProperty.call(h,m))d=m;else{if(Object.prototype.hasOwnProperty.call(_,d)){if(d.charCodeAt(0)<256){for(r=0;r<c;r++)s=s<<1,l==e-1?(l=0,a.push(o(s)),s=0):l++;for(t=d.charCodeAt(0),r=0;r<8;r++)s=s<<1|t&1,l==e-1?(l=0,a.push(o(s)),s=0):l++,t=t>>1}else{for(t=1,r=0;r<c;r++)s=s<<1|t,l==e-1?(l=0,a.push(o(s)),s=0):l++,t=0;for(t=d.charCodeAt(0),r=0;r<16;r++)s=s<<1|t&1,l==e-1?(l=0,a.push(o(s)),s=0):l++,t=t>>1}v--,v==0&&(v=Math.pow(2,c),c++),delete _[d]}else for(t=h[d],r=0;r<c;r++)s=s<<1|t&1,l==e-1?(l=0,a.push(o(s)),s=0):l++,t=t>>1;v--,v==0&&(v=Math.pow(2,c),c++),h[m]=g++,d=String(p)}if(d!==""){if(Object.prototype.hasOwnProperty.call(_,d)){if(d.charCodeAt(0)<256){for(r=0;r<c;r++)s=s<<1,l==e-1?(l=0,a.push(o(s)),s=0):l++;for(t=d.charCodeAt(0),r=0;r<8;r++)s=s<<1|t&1,l==e-1?(l=0,a.push(o(s)),s=0):l++,t=t>>1}else{for(t=1,r=0;r<c;r++)s=s<<1|t,l==e-1?(l=0,a.push(o(s)),s=0):l++,t=0;for(t=d.charCodeAt(0),r=0;r<16;r++)s=s<<1|t&1,l==e-1?(l=0,a.push(o(s)),s=0):l++,t=t>>1}v--,v==0&&(v=Math.pow(2,c),c++),delete _[d]}else for(t=h[d],r=0;r<c;r++)s=s<<1|t&1,l==e-1?(l=0,a.push(o(s)),s=0):l++,t=t>>1;v--,v==0&&(v=Math.pow(2,c),c++)}for(t=2,r=0;r<c;r++)s=s<<1|t&1,l==e-1?(l=0,a.push(o(s)),s=0):l++,t=t>>1;for(;;)if(s=s<<1,l==e-1){a.push(o(s));break}else l++;return a.join("")}function it(i,e,o){let a=[],h=4,_=4,r=3,n="",t=[],p,d,m,v,g,c,s,l={val:o(0),position:e,index:1};for(p=0;p<3;p+=1)a[p]=p;for(m=0,g=Math.pow(2,2),c=1;c!=g;)v=l.val&l.position,l.position>>=1,l.position==0&&(l.position=e,l.val=o(l.index++)),m|=(v>0?1:0)*c,c<<=1;switch(m){case 0:for(m=0,g=Math.pow(2,8),c=1;c!=g;)v=l.val&l.position,l.position>>=1,l.position==0&&(l.position=e,l.val=o(l.index++)),m|=(v>0?1:0)*c,c<<=1;s=String.fromCharCode(m);break;case 1:for(m=0,g=Math.pow(2,16),c=1;c!=g;)v=l.val&l.position,l.position>>=1,l.position==0&&(l.position=e,l.val=o(l.index++)),m|=(v>0?1:0)*c,c<<=1;s=String.fromCharCode(m);break;case 2:return""}for(a[3]=s,d=s,t.push(s);;){if(l.index>i)return"";for(m=0,g=Math.pow(2,r),c=1;c!=g;)v=l.val&l.position,l.position>>=1,l.position==0&&(l.position=e,l.val=o(l.index++)),m|=(v>0?1:0)*c,c<<=1;switch(s=m){case 0:for(m=0,g=Math.pow(2,8),c=1;c!=g;)v=l.val&l.position,l.position>>=1,l.position==0&&(l.position=e,l.val=o(l.index++)),m|=(v>0?1:0)*c,c<<=1;a[_++]=String.fromCharCode(m),s=_-1,h--;break;case 1:for(m=0,g=Math.pow(2,16),c=1;c!=g;)v=l.val&l.position,l.position>>=1,l.position==0&&(l.position=e,l.val=o(l.index++)),m|=(v>0?1:0)*c,c<<=1;a[_++]=String.fromCharCode(m),s=_-1,h--;break;case 2:return t.join("")}if(h==0&&(h=Math.pow(2,r),r++),a[s])n=a[s];else if(s===_&&typeof d=="string")n=d+d.charAt(0);else return null;t.push(n),a[_++]=d+n.charAt(0),h--,d=n,h==0&&(h=Math.pow(2,r),r++)}}const Ke="inmemory://model/src";function nt(i){const e={};for(const[o,a]of Object.entries(i))e[o.slice(Ke.length)]=Ye(a.trim());return JSON.stringify(e).slice(1,-1)}function ct(i){const e=JSON.parse(`{${i}}`),o={};for(const[a,h]of Object.entries(e))o[`${Ke}${a}`]=Ze(h);return o}function ut(i){return Ye(nt(i))}function pt(i){return decodeURIComponent(atob(i))}function ft(i){const e=Ze(i);return e||null}function dt(i){const e=ft(i);return e?ct(e):JSON.parse(pt(i))}const ht="https://www.bootstrapp.ai/serverlessCMS#";function Te(i,e,o){const a=i.slice();return a[12]=e[o][0],a[13]=e[o][1],a[14]=e,a[15]=o,a}function qe(i,e,o){const a=i.slice();return a[16]=e[o],a[17]=e,a[18]=o,a}function ze(i,e,o){const a=i.slice();return a[19]=e[o][0],a[20]=e[o][1],a[21]=e,a[22]=o,a}function _t(i){let e=[],o=new Map,a,h=i[13];const _=r=>r[18];for(let r=0;r<h.length;r+=1){let n=qe(i,h,r),t=_(n);o.set(t,e[r]=Fe(t,n))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();a=N()},l(r){for(let n=0;n<e.length;n+=1)e[n].l(r);a=N()},m(r,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(r,n);B(r,a,n)},p(r,n){n&13&&(h=r[13],e=me(e,n,_,1,r,h,o,a.parentNode,ge,Fe,a,qe))},d(r){for(let n=0;n<e.length;n+=1)e[n].d(r);r&&b(a)}}}function vt(i){let e,o,a=i[2](i[12])+"",h,_,r,n,t,p,d,m;function v(){i[5].call(n,i[12])}return{c(){e=w("div"),o=w("label"),h=Y(a),r=C(),n=w("input"),p=C(),this.h()},l(g){e=y(g,"DIV",{class:!0});var c=E(e);o=y(c,"LABEL",{class:!0,for:!0});var s=E(o);h=Z(s,a),s.forEach(b),r=M(c),n=y(c,"INPUT",{class:!0,id:!0,type:!0}),p=M(c),c.forEach(b),this.h()},h(){u(o,"class","block text-gray-700 text-sm font-bold mb-2"),u(o,"for",_=i[3](i[12])),u(n,"class","shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"),u(n,"id",t=i[3](i[12])),u(n,"type","text"),u(e,"class","mb-4")},m(g,c){B(g,e,c),f(e,o),f(o,h),f(e,r),f(e,n),ne(n,i[0][i[12]]),f(e,p),d||(m=Qe(n,"input",v),d=!0)},p(g,c){i=g,c&1&&a!==(a=i[2](i[12])+"")&&Xe(h,a),c&1&&_!==(_=i[3](i[12]))&&u(o,"for",_),c&1&&t!==(t=i[3](i[12]))&&u(n,"id",t),c&1&&n.value!==i[0][i[12]]&&ne(n,i[0][i[12]])},d(g){g&&b(e),d=!1,m()}}}function Je(i,e){let o,a,h=e[2](e[12],e[18],e[19])+"",_,r,n,t,p,d,m,v;function g(){e[6].call(t,e[19],e[17],e[18])}return{key:i,first:null,c(){o=w("div"),a=w("label"),_=Y(h),n=C(),t=w("input"),d=C(),this.h()},l(c){o=y(c,"DIV",{class:!0});var s=E(o);a=y(s,"LABEL",{class:!0,for:!0});var l=E(a);_=Z(l,h),l.forEach(b),n=M(s),t=y(s,"INPUT",{class:!0,id:!0,type:!0}),d=M(s),s.forEach(b),this.h()},h(){u(a,"class","block text-gray-700 text-sm font-bold mb-2"),u(a,"for",r=e[3](e[12],e[18],e[19])),u(t,"class","shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"),u(t,"id",p=e[3](e[12],e[18],e[19])),u(t,"type","text"),u(o,"class","mb-4"),this.first=o},m(c,s){B(c,o,s),f(o,a),f(a,_),f(o,n),f(o,t),ne(t,e[16][e[19]]),f(o,d),m||(v=Qe(t,"input",g),m=!0)},p(c,s){e=c,s&1&&h!==(h=e[2](e[12],e[18],e[19])+"")&&Xe(_,h),s&1&&r!==(r=e[3](e[12],e[18],e[19]))&&u(a,"for",r),s&1&&p!==(p=e[3](e[12],e[18],e[19]))&&u(t,"id",p),s&1&&t.value!==e[16][e[19]]&&ne(t,e[16][e[19]])},d(c){c&&b(o),m=!1,v()}}}function Fe(i,e){let o,a=[],h=new Map,_,r=Object.entries(e[16]);const n=t=>t[19];for(let t=0;t<r.length;t+=1){let p=ze(e,r,t),d=n(p);h.set(d,a[t]=Je(d,p))}return{key:i,first:null,c(){o=N();for(let t=0;t<a.length;t+=1)a[t].c();_=N(),this.h()},l(t){o=N();for(let p=0;p<a.length;p+=1)a[p].l(t);_=N(),this.h()},h(){this.first=o},m(t,p){B(t,o,p);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(t,p);B(t,_,p)},p(t,p){e=t,p&13&&(r=Object.entries(e[16]),a=me(a,p,n,1,e,r,h,_.parentNode,ge,Je,_,ze))},d(t){t&&b(o);for(let p=0;p<a.length;p+=1)a[p].d(t);t&&b(_)}}}function We(i,e){let o,a;function h(n,t){return typeof n[13]=="string"?vt:_t}let _=h(e),r=_(e);return{key:i,first:null,c(){o=N(),r.c(),a=N(),this.h()},l(n){o=N(),r.l(n),a=N(),this.h()},h(){this.first=o},m(n,t){B(n,o,t),r.m(n,t),B(n,a,t)},p(n,t){e=n,_===(_=h(e))&&r?r.p(e,t):(r.d(1),r=_(e),r&&(r.c(),r.m(a.parentNode,a)))},d(n){n&&b(o),r.d(n),n&&b(a)}}}function bt(i){let e,o,a,h,_,r,n,t,p,d,m,v,g,c,s,l,S,V,Q,K,ce,P,$,T,R,ue,L,q,A,X,pe,z,G,fe,de,U,J,he,_e,F,D=[],we=new Map,ve,W,O,x,ee=Object.entries(i[0]);const ye=k=>k[12];for(let k=0;k<ee.length;k+=1){let I=Te(i,ee,k),j=ye(I);we.set(j,D[k]=We(j,I))}return{c(){e=w("div"),o=w("aside"),a=w("div"),h=w("div"),_=C(),r=w("div"),n=w("label"),t=w("div"),p=w("div"),d=w("input"),m=C(),v=w("div"),g=w("div"),c=w("i"),s=C(),l=w("div"),S=w("span"),V=Y("Website"),Q=C(),K=w("hr"),ce=C(),P=w("label"),$=w("div"),T=w("div"),R=w("input"),ue=C(),L=w("div"),q=w("div"),A=Le("svg"),X=Le("path"),pe=C(),z=w("div"),G=w("span"),fe=Y("Settings"),de=C(),U=w("section"),J=w("h2"),he=Y("Page Editor"),_e=C(),F=w("form");for(let k=0;k<D.length;k+=1)D[k].c();ve=C(),W=w("main"),O=w("iframe"),this.h()},l(k){e=y(k,"DIV",{class:!0});var I=E(e);o=y(I,"ASIDE",{class:!0});var j=E(o);a=y(j,"DIV",{class:!0});var te=E(a);h=y(te,"DIV",{class:!0}),E(h).forEach(b),_=M(te),r=y(te,"DIV",{class:!0});var H=E(r);n=y(H,"LABEL",{class:!0,"data-testid":!0,title:!0});var Ee=E(n);t=y(Ee,"DIV",{class:!0});var le=E(t);p=y(le,"DIV",{class:!0});var ke=E(p);d=y(ke,"INPUT",{type:!0,name:!0,tabindex:!0}),ke.forEach(b),m=M(le),v=y(le,"DIV",{class:!0});var re=E(v);g=y(re,"DIV",{class:!0});var Ie=E(g);c=y(Ie,"I",{class:!0}),E(c).forEach(b),Ie.forEach(b),s=M(re),l=y(re,"DIV",{class:!0});var Se=E(l);S=y(Se,"SPAN",{});var Ce=E(S);V=Z(Ce,"Website"),Ce.forEach(b),Se.forEach(b),re.forEach(b),le.forEach(b),Ee.forEach(b),Q=M(H),K=y(H,"HR",{class:!0}),ce=M(H),P=y(H,"LABEL",{class:!0,"data-testid":!0,title:!0});var Me=E(P);$=y(Me,"DIV",{class:!0});var ae=E($);T=y(ae,"DIV",{class:!0});var Ae=E(T);R=y(Ae,"INPUT",{type:!0,name:!0,tabindex:!0}),Ae.forEach(b),ue=M(ae),L=y(ae,"DIV",{class:!0});var se=E(L);q=y(se,"DIV",{class:!0});var De=E(q);A=Ue(De,"svg",{xmlns:!0,x:!0,y:!0,viewBox:!0,class:!0,focusable:!0,"data-testid":!0});var Oe=E(A);X=Ue(Oe,"path",{d:!0}),E(X).forEach(b),Oe.forEach(b),De.forEach(b),pe=M(se),z=y(se,"DIV",{class:!0});var je=E(z);G=y(je,"SPAN",{});var Ne=E(G);fe=Z(Ne,"Settings"),Ne.forEach(b),je.forEach(b),se.forEach(b),ae.forEach(b),Me.forEach(b),H.forEach(b),te.forEach(b),j.forEach(b),de=M(I),U=y(I,"SECTION",{class:!0});var oe=E(U);J=y(oe,"H2",{class:!0});var Ve=E(J);he=Z(Ve,"Page Editor"),Ve.forEach(b),_e=M(oe),F=y(oe,"FORM",{});var Pe=E(F);for(let be=0;be<D.length;be+=1)D[be].l(Pe);Pe.forEach(b),oe.forEach(b),ve=M(I),W=y(I,"MAIN",{class:!0});var $e=E(W);O=y($e,"IFRAME",{key:!0,src:!0,id:!0,class:!0}),E(O).forEach(b),$e.forEach(b),I.forEach(b),this.h()},h(){u(h,"class","app-bar-lead"),u(d,"type","radio"),u(d,"name","docs"),u(d,"tabindex","-1"),d.value="/docs",u(p,"class","h-0 w-0 overflow-hidden"),u(c,"class","fa-solid fa-book text-2xl"),u(g,"class","app-rail-lead "),u(l,"class","app-rail-label font-bold text-xs "),u(v,"class","app-rail-interface text-center space-y-1"),u(t,"class","app-rail-wrapper w-full aspect-square flex flex-col justify-center items-stretch bg-primary-hover-token bg-primary-active-token"),u(n,"class","app-rail-tile cursor-pointer"),u(n,"data-testid","app-rail-tile"),u(n,"title",""),u(K,"class","opacity-30"),u(R,"type","radio"),u(R,"name","elements"),u(R,"tabindex","-1"),R.value="/elements",u(T,"class","h-0 w-0 overflow-hidden"),u(X,"d","M400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09C544.48 46.17 499.1.13 400 .13zM200.07 239.97c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"),u(A,"xmlns","http://www.w3.org/2000/svg"),u(A,"x","0px"),u(A,"y","0px"),u(A,"viewBox","0.15 0.13 799.7 479.69"),u(A,"class","svg-icon inline-block outline-none fill-current w-6 h-6 "),u(A,"focusable","false"),u(A,"data-testid","svg-icon"),u(q,"class","app-rail-lead "),u(z,"class","app-rail-label font-bold text-xs "),u(L,"class","app-rail-interface text-center space-y-1"),u($,"class","app-rail-wrapper w-full aspect-square flex flex-col justify-center items-stretch bg-primary-hover-token "),u(P,"class","app-rail-tile cursor-pointer"),u(P,"data-testid","app-rail-tile"),u(P,"title",""),u(r,"class","app-bar-default"),u(a,"class","app-rail grid grid-rows-[auto_1fr_auto] overflow-y-auto bg-transparent border-r border-surface-500/30 w-20 h-full gap-0 "),u(o,"class","app-rail w-20"),u(J,"class","text-xl mb-4 dark:text-white text-black"),u(U,"class","w-1/3 bg-gray-100 p-10 h-screen overflow-y-auto"),u(O,"key",i[1]),Be(O.src,x=i[1])||u(O,"src",x),u(O,"id","preview-iframe"),u(O,"class","w-full h-full flex flex-col iframe"),u(W,"class","w-2/3"),u(e,"class","flex h-screen")},m(k,I){B(k,e,I),f(e,o),f(o,a),f(a,h),f(a,_),f(a,r),f(r,n),f(n,t),f(t,p),f(p,d),f(t,m),f(t,v),f(v,g),f(g,c),f(v,s),f(v,l),f(l,S),f(S,V),f(r,Q),f(r,K),f(r,ce),f(r,P),f(P,$),f($,T),f(T,R),f($,ue),f($,L),f(L,q),f(q,A),f(A,X),f(L,pe),f(L,z),f(z,G),f(G,fe),f(e,de),f(e,U),f(U,J),f(J,he),f(U,_e),f(U,F);for(let j=0;j<D.length;j+=1)D[j]&&D[j].m(F,null);f(e,ve),f(e,W),f(W,O)},p(k,[I]){I&13&&(ee=Object.entries(k[0]),D=me(D,I,ye,1,k,ee,we,F,ge,We,null,Te)),I&2&&u(O,"key",k[1]),I&2&&!Be(O.src,x=k[1])&&u(O,"src",x)},i:Re,o:Re,d(k){k&&b(e);for(let I=0;I<D.length;I+=1)D[I].d()}}}function He(i){return JSON.stringify(i,(o,a)=>typeof a=="string"?`"${a.replace(/"/g,'\\"')}"`:a,2).replace(/\"([^(\")"]+)\":/g,"$1:").replace(/\\"/g,"")}function mt(i,e,o){let a;lt(i,at,s=>o(8,a=s));let h=ht,_=a.url.hash.slice(1),r,n=`${h}${(_||"").replace("%20","+")}`,t="",p="";rt(async()=>{t=_?dt(_):"",o(0,p=d(t))});function d(s){var V;if(!s)return"";const l=s[(V=Object.keys(s))==null?void 0:V[0]].split("---"),S=l==null?void 0:l[1];o(4,r=l==null?void 0:l[2]);try{return new Function(`${S}; return ServerlessCMS;`)()}catch(Q){return console.log("error parsing encoded file",{error:Q}),""}}const m=(s,l,S)=>S?`${s.charAt(0).toUpperCase()+s.slice(1)} ${l+1} - ${S.charAt(0).toUpperCase()+S.slice(1)}`:`${s.charAt(0).toUpperCase()+s.slice(1)}`,v=(s,l,S)=>S?`${s}${l}${S}`:`${s}`;function g(s){p[s]=this.value,o(0,p)}function c(s,l,S){l[S][s]=this.value,o(0,p)}return i.$$.update=()=>{var s;if(i.$$.dirty&17&&p&&r){o(1,n=`${h}${ut({"inmemory://model/src/index.astro":`
			---
			let ServerlessCMS = ${He(p)}
			---
			${r}
			`})}`);const l=document.querySelector("#preview-iframe");(s=l==null?void 0:l.contentWindow)==null||s.postMessage({message:"reload",newContent:`
			---
			let ServerlessCMS = ${He(p)}
			---
			${r}
			`},"*")}},[p,n,m,v,r,g,c]}class yt extends xe{constructor(e){super(),et(this,e,mt,bt,tt,{})}}export{yt as component};
