import{C as De,S as w,i as y,s as x,D as O,k as C,a as q,l as A,m as V,c as G,h as m,n,b as B,E as T,g as d,v as J,d as S,f as K,F as z,G as N,H as j,I as Re,J as Q,K as W,L as pe,M as Ie,q as X,r as Y,y as Ee,z as He,A as Pe,B as Le,N as Fe}from"../chunks/index.72f3c8ab.js";import{w as Ce}from"../chunks/index.63758990.js";const Z={};function le(o){return o==="local"?localStorage:sessionStorage}function $(o,e,t){const s=(t==null?void 0:t.serializer)??JSON,i=(t==null?void 0:t.storage)??"local";function l(a,f){le(i).setItem(a,s.stringify(f))}if(!Z[o]){const a=Ce(e,D=>{const P=le(i).getItem(o);P&&D(s.parse(P));{const v=I=>{I.key===o&&D(I.newValue?s.parse(I.newValue):null)};return window.addEventListener("storage",v),()=>window.removeEventListener("storage",v)}}),{subscribe:f,set:g}=a;Z[o]={set(D){l(o,D),g(D)},update(D){const P=D(De(a));l(o,P),g(P)},subscribe:f}}return Z[o]}$("modeOsPrefers",!1);$("modeUserPrefers",void 0);$("modeCurrent",!1);const Ae=o=>({}),te=o=>({}),Ve=o=>({}),se=o=>({}),Te=o=>({}),ae=o=>({});function oe(o){let e,t,s;const i=o[22].lead,l=O(i,o,o[21],ae);return{c(){e=C("div"),l&&l.c(),this.h()},l(a){e=A(a,"DIV",{class:!0});var f=V(e);l&&l.l(f),f.forEach(m),this.h()},h(){n(e,"class",t="app-bar-slot-lead "+o[4])},m(a,f){B(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&2097152)&&z(l,i,a,a[21],s?j(i,a[21],f,Te):N(a[21]),ae),(!s||f&16&&t!==(t="app-bar-slot-lead "+a[4]))&&n(e,"class",t)},i(a){s||(d(l,a),s=!0)},o(a){S(l,a),s=!1},d(a){a&&m(e),l&&l.d(a)}}}function ie(o){let e,t,s;const i=o[22].trail,l=O(i,o,o[21],se);return{c(){e=C("div"),l&&l.c(),this.h()},l(a){e=A(a,"DIV",{class:!0});var f=V(e);l&&l.l(f),f.forEach(m),this.h()},h(){n(e,"class",t="app-bar-slot-trail "+o[2])},m(a,f){B(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&2097152)&&z(l,i,a,a[21],s?j(i,a[21],f,Ve):N(a[21]),se),(!s||f&4&&t!==(t="app-bar-slot-trail "+a[2]))&&n(e,"class",t)},i(a){s||(d(l,a),s=!0)},o(a){S(l,a),s=!1},d(a){a&&m(e),l&&l.d(a)}}}function fe(o){let e,t,s;const i=o[22].headline,l=O(i,o,o[21],te);return{c(){e=C("div"),l&&l.c(),this.h()},l(a){e=A(a,"DIV",{class:!0});var f=V(e);l&&l.l(f),f.forEach(m),this.h()},h(){n(e,"class",t="app-bar-row-headline "+o[5])},m(a,f){B(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&2097152)&&z(l,i,a,a[21],s?j(i,a[21],f,Ae):N(a[21]),te),(!s||f&32&&t!==(t="app-bar-row-headline "+a[5]))&&n(e,"class",t)},i(a){s||(d(l,a),s=!0)},o(a){S(l,a),s=!1},d(a){a&&m(e),l&&l.d(a)}}}function Be(o){let e,t,s,i,l,a,f,g,D,P,v=o[8].lead&&oe(o);const I=o[22].default,E=O(I,o,o[21],null);let k=o[8].trail&&ie(o),R=o[8].headline&&fe(o);return{c(){e=C("div"),t=C("div"),v&&v.c(),s=q(),i=C("div"),E&&E.c(),a=q(),k&&k.c(),g=q(),R&&R.c(),this.h()},l(r){e=A(r,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var u=V(e);t=A(u,"DIV",{class:!0});var b=V(t);v&&v.l(b),s=G(b),i=A(b,"DIV",{class:!0});var M=V(i);E&&E.l(M),M.forEach(m),a=G(b),k&&k.l(b),b.forEach(m),g=G(u),R&&R.l(u),u.forEach(m),this.h()},h(){n(i,"class",l="app-bar-slot-default "+o[3]),n(t,"class",f="app-bar-row-main "+o[6]),n(e,"class",D="app-bar "+o[7]),n(e,"data-testid","app-bar"),n(e,"role","toolbar"),n(e,"aria-label",o[0]),n(e,"aria-labelledby",o[1])},m(r,u){B(r,e,u),T(e,t),v&&v.m(t,null),T(t,s),T(t,i),E&&E.m(i,null),T(t,a),k&&k.m(t,null),T(e,g),R&&R.m(e,null),P=!0},p(r,[u]){r[8].lead?v?(v.p(r,u),u&256&&d(v,1)):(v=oe(r),v.c(),d(v,1),v.m(t,s)):v&&(J(),S(v,1,1,()=>{v=null}),K()),E&&E.p&&(!P||u&2097152)&&z(E,I,r,r[21],P?j(I,r[21],u,null):N(r[21]),null),(!P||u&8&&l!==(l="app-bar-slot-default "+r[3]))&&n(i,"class",l),r[8].trail?k?(k.p(r,u),u&256&&d(k,1)):(k=ie(r),k.c(),d(k,1),k.m(t,null)):k&&(J(),S(k,1,1,()=>{k=null}),K()),(!P||u&64&&f!==(f="app-bar-row-main "+r[6]))&&n(t,"class",f),r[8].headline?R?(R.p(r,u),u&256&&d(R,1)):(R=fe(r),R.c(),d(R,1),R.m(e,null)):R&&(J(),S(R,1,1,()=>{R=null}),K()),(!P||u&128&&D!==(D="app-bar "+r[7]))&&n(e,"class",D),(!P||u&1)&&n(e,"aria-label",r[0]),(!P||u&2)&&n(e,"aria-labelledby",r[1])},i(r){P||(d(v),d(E,r),d(k),d(R),P=!0)},o(r){S(v),S(E,r),S(k),S(R),P=!1},d(r){r&&m(e),v&&v.d(),E&&E.d(r),k&&k.d(),R&&R.d()}}}const Me="flex flex-col",Oe="grid items-center",ze="",Ne="flex-none flex justify-between items-center",je="flex-auto",qe="flex-none flex items-center space-x-4";function Ge(o,e,t){let s,i,l,a,f,g,{$$slots:D={},$$scope:P}=e;const v=Re(D);let{background:I="bg-surface-100-800-token"}=e,{border:E=""}=e,{padding:k="p-4"}=e,{shadow:R=""}=e,{spacing:r="space-y-4"}=e,{gridColumns:u="grid-cols-[auto_1fr_auto]"}=e,{gap:b="gap-4"}=e,{regionRowMain:M=""}=e,{regionRowHeadline:p=""}=e,{slotLead:L=""}=e,{slotDefault:F=""}=e,{slotTrail:c=""}=e,{label:_=""}=e,{labelledby:H=""}=e;return o.$$set=h=>{t(23,e=Q(Q({},e),W(h))),"background"in h&&t(9,I=h.background),"border"in h&&t(10,E=h.border),"padding"in h&&t(11,k=h.padding),"shadow"in h&&t(12,R=h.shadow),"spacing"in h&&t(13,r=h.spacing),"gridColumns"in h&&t(14,u=h.gridColumns),"gap"in h&&t(15,b=h.gap),"regionRowMain"in h&&t(16,M=h.regionRowMain),"regionRowHeadline"in h&&t(17,p=h.regionRowHeadline),"slotLead"in h&&t(18,L=h.slotLead),"slotDefault"in h&&t(19,F=h.slotDefault),"slotTrail"in h&&t(20,c=h.slotTrail),"label"in h&&t(0,_=h.label),"labelledby"in h&&t(1,H=h.labelledby),"$$scope"in h&&t(21,P=h.$$scope)},o.$$.update=()=>{t(7,s=`${Me} ${I} ${E} ${r} ${k} ${R} ${e.class??""}`),o.$$.dirty&114688&&t(6,i=`${Oe} ${u} ${b} ${M}`),o.$$.dirty&131072&&t(5,l=`${ze} ${p}`),o.$$.dirty&262144&&t(4,a=`${Ne} ${L}`),o.$$.dirty&524288&&t(3,f=`${je} ${F}`),o.$$.dirty&1048576&&t(2,g=`${qe} ${c}`)},e=W(e),[_,H,g,f,a,l,i,s,v,I,E,k,R,r,u,b,M,p,L,F,c,P,D]}class Je extends w{constructor(e){super(),y(this,e,Ge,Be,x,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Ke=o=>({}),re=o=>({}),Ue=o=>({}),ne=o=>({}),Qe=o=>({}),ue=o=>({}),We=o=>({}),ce=o=>({}),Xe=o=>({}),de=o=>({}),Ye=o=>({}),_e=o=>({});function he(o){let e,t,s;const i=o[18].header,l=O(i,o,o[17],_e);return{c(){e=C("header"),l&&l.c(),this.h()},l(a){e=A(a,"HEADER",{id:!0,class:!0});var f=V(e);l&&l.l(f),f.forEach(m),this.h()},h(){n(e,"id","shell-header"),n(e,"class",t="flex-none "+o[7])},m(a,f){B(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&131072)&&z(l,i,a,a[17],s?j(i,a[17],f,Ye):N(a[17]),_e),(!s||f&128&&t!==(t="flex-none "+a[7]))&&n(e,"class",t)},i(a){s||(d(l,a),s=!0)},o(a){S(l,a),s=!1},d(a){a&&m(e),l&&l.d(a)}}}function ge(o){let e,t;const s=o[18].sidebarLeft,i=O(s,o,o[17],de);return{c(){e=C("aside"),i&&i.c(),this.h()},l(l){e=A(l,"ASIDE",{id:!0,class:!0});var a=V(e);i&&i.l(a),a.forEach(m),this.h()},h(){n(e,"id","sidebar-left"),n(e,"class",o[6])},m(l,a){B(l,e,a),i&&i.m(e,null),t=!0},p(l,a){i&&i.p&&(!t||a&131072)&&z(i,s,l,l[17],t?j(s,l[17],a,Xe):N(l[17]),de),(!t||a&64)&&n(e,"class",l[6])},i(l){t||(d(i,l),t=!0)},o(l){S(i,l),t=!1},d(l){l&&m(e),i&&i.d(l)}}}function be(o){let e,t,s;const i=o[18].pageHeader,l=O(i,o,o[17],ce),a=l||Ze();return{c(){e=C("header"),a&&a.c(),this.h()},l(f){e=A(f,"HEADER",{id:!0,class:!0});var g=V(e);a&&a.l(g),g.forEach(m),this.h()},h(){n(e,"id","page-header"),n(e,"class",t="flex-none "+o[4])},m(f,g){B(f,e,g),a&&a.m(e,null),s=!0},p(f,g){l&&l.p&&(!s||g&131072)&&z(l,i,f,f[17],s?j(i,f[17],g,We):N(f[17]),ce),(!s||g&16&&t!==(t="flex-none "+f[4]))&&n(e,"class",t)},i(f){s||(d(a,f),s=!0)},o(f){S(a,f),s=!1},d(f){f&&m(e),a&&a.d(f)}}}function Ze(o){let e;return{c(){e=X("(slot:header)")},l(t){e=Y(t,"(slot:header)")},m(t,s){B(t,e,s)},d(t){t&&m(e)}}}function me(o){let e,t,s;const i=o[18].pageFooter,l=O(i,o,o[17],ue),a=l||we();return{c(){e=C("footer"),a&&a.c(),this.h()},l(f){e=A(f,"FOOTER",{id:!0,class:!0});var g=V(e);a&&a.l(g),g.forEach(m),this.h()},h(){n(e,"id","page-footer"),n(e,"class",t="flex-none "+o[2])},m(f,g){B(f,e,g),a&&a.m(e,null),s=!0},p(f,g){l&&l.p&&(!s||g&131072)&&z(l,i,f,f[17],s?j(i,f[17],g,Qe):N(f[17]),ue),(!s||g&4&&t!==(t="flex-none "+f[2]))&&n(e,"class",t)},i(f){s||(d(a,f),s=!0)},o(f){S(a,f),s=!1},d(f){f&&m(e),a&&a.d(f)}}}function we(o){let e;return{c(){e=X("(slot:footer)")},l(t){e=Y(t,"(slot:footer)")},m(t,s){B(t,e,s)},d(t){t&&m(e)}}}function ve(o){let e,t;const s=o[18].sidebarRight,i=O(s,o,o[17],ne);return{c(){e=C("aside"),i&&i.c(),this.h()},l(l){e=A(l,"ASIDE",{id:!0,class:!0});var a=V(e);i&&i.l(a),a.forEach(m),this.h()},h(){n(e,"id","sidebar-right"),n(e,"class",o[5])},m(l,a){B(l,e,a),i&&i.m(e,null),t=!0},p(l,a){i&&i.p&&(!t||a&131072)&&z(i,s,l,l[17],t?j(s,l[17],a,Ue):N(l[17]),ne),(!t||a&32)&&n(e,"class",l[5])},i(l){t||(d(i,l),t=!0)},o(l){S(i,l),t=!1},d(l){l&&m(e),i&&i.d(l)}}}function Se(o){let e,t,s;const i=o[18].footer,l=O(i,o,o[17],re);return{c(){e=C("footer"),l&&l.c(),this.h()},l(a){e=A(a,"FOOTER",{id:!0,class:!0});var f=V(e);l&&l.l(f),f.forEach(m),this.h()},h(){n(e,"id","shell-footer"),n(e,"class",t="flex-none "+o[1])},m(a,f){B(a,e,f),l&&l.m(e,null),s=!0},p(a,f){l&&l.p&&(!s||f&131072)&&z(l,i,a,a[17],s?j(i,a[17],f,Ke):N(a[17]),re),(!s||f&2&&t!==(t="flex-none "+a[1]))&&n(e,"class",t)},i(a){s||(d(l,a),s=!0)},o(a){S(l,a),s=!1},d(a){a&&m(e),l&&l.d(a)}}}function ye(o){let e,t,s,i,l,a,f,g,D,P,v,I,E,k,R,r=o[9].header&&he(o),u=o[9].sidebarLeft&&ge(o),b=o[9].pageHeader&&be(o);const M=o[18].default,p=O(M,o,o[17],null);let L=o[9].pageFooter&&me(o),F=o[9].sidebarRight&&ve(o),c=o[9].footer&&Se(o);return{c(){e=C("div"),r&&r.c(),t=q(),s=C("div"),u&&u.c(),i=q(),l=C("div"),b&&b.c(),a=q(),f=C("main"),p&&p.c(),D=q(),L&&L.c(),v=q(),F&&F.c(),I=q(),c&&c.c(),this.h()},l(_){e=A(_,"DIV",{id:!0,class:!0,"data-testid":!0});var H=V(e);r&&r.l(H),t=G(H),s=A(H,"DIV",{class:!0});var h=V(s);u&&u.l(h),i=G(h),l=A(h,"DIV",{id:!0,class:!0});var U=V(l);b&&b.l(U),a=G(U),f=A(U,"MAIN",{id:!0,class:!0});var ee=V(f);p&&p.l(ee),ee.forEach(m),D=G(U),L&&L.l(U),U.forEach(m),v=G(h),F&&F.l(h),h.forEach(m),I=G(H),c&&c.l(H),H.forEach(m),this.h()},h(){n(f,"id","page-content"),n(f,"class",g="flex-auto "+o[3]),n(l,"id","page"),n(l,"class",P=o[0]+" "+ke),n(s,"class","flex-auto "+$e),n(e,"id","appShell"),n(e,"class",o[8]),n(e,"data-testid","app-shell")},m(_,H){B(_,e,H),r&&r.m(e,null),T(e,t),T(e,s),u&&u.m(s,null),T(s,i),T(s,l),b&&b.m(l,null),T(l,a),T(l,f),p&&p.m(f,null),T(l,D),L&&L.m(l,null),T(s,v),F&&F.m(s,null),T(e,I),c&&c.m(e,null),E=!0,k||(R=pe(l,"scroll",o[19]),k=!0)},p(_,[H]){_[9].header?r?(r.p(_,H),H&512&&d(r,1)):(r=he(_),r.c(),d(r,1),r.m(e,t)):r&&(J(),S(r,1,1,()=>{r=null}),K()),_[9].sidebarLeft?u?(u.p(_,H),H&512&&d(u,1)):(u=ge(_),u.c(),d(u,1),u.m(s,i)):u&&(J(),S(u,1,1,()=>{u=null}),K()),_[9].pageHeader?b?(b.p(_,H),H&512&&d(b,1)):(b=be(_),b.c(),d(b,1),b.m(l,a)):b&&(J(),S(b,1,1,()=>{b=null}),K()),p&&p.p&&(!E||H&131072)&&z(p,M,_,_[17],E?j(M,_[17],H,null):N(_[17]),null),(!E||H&8&&g!==(g="flex-auto "+_[3]))&&n(f,"class",g),_[9].pageFooter?L?(L.p(_,H),H&512&&d(L,1)):(L=me(_),L.c(),d(L,1),L.m(l,null)):L&&(J(),S(L,1,1,()=>{L=null}),K()),(!E||H&1&&P!==(P=_[0]+" "+ke))&&n(l,"class",P),_[9].sidebarRight?F?(F.p(_,H),H&512&&d(F,1)):(F=ve(_),F.c(),d(F,1),F.m(s,null)):F&&(J(),S(F,1,1,()=>{F=null}),K()),_[9].footer?c?(c.p(_,H),H&512&&d(c,1)):(c=Se(_),c.c(),d(c,1),c.m(e,null)):c&&(J(),S(c,1,1,()=>{c=null}),K()),(!E||H&256)&&n(e,"class",_[8])},i(_){E||(d(r),d(u),d(b),d(p,_),d(L),d(F),d(c),E=!0)},o(_){S(r),S(u),S(b),S(p,_),S(L),S(F),S(c),E=!1},d(_){_&&m(e),r&&r.d(),u&&u.d(),b&&b.d(),p&&p.d(_),L&&L.d(),F&&F.d(),c&&c.d(),k=!1,R()}}}const xe="w-full h-full flex flex-col overflow-hidden",$e="w-full h-full flex overflow-hidden",ke="flex-1 overflow-x-hidden flex flex-col",el="flex-none overflow-x-hidden overflow-y-auto",ll="flex-none overflow-x-hidden overflow-y-auto";function tl(o,e,t){let s,i,l,a,f,g,D,P,{$$slots:v={},$$scope:I}=e;const E=Re(v);let{regionPage:k=""}=e,{slotHeader:R="z-10"}=e,{slotSidebarLeft:r="w-auto"}=e,{slotSidebarRight:u="w-auto"}=e,{slotPageHeader:b=""}=e,{slotPageContent:M=""}=e,{slotPageFooter:p=""}=e,{slotFooter:L=""}=e;function F(c){Ie.call(this,o,c)}return o.$$set=c=>{t(20,e=Q(Q({},e),W(c))),"regionPage"in c&&t(0,k=c.regionPage),"slotHeader"in c&&t(10,R=c.slotHeader),"slotSidebarLeft"in c&&t(11,r=c.slotSidebarLeft),"slotSidebarRight"in c&&t(12,u=c.slotSidebarRight),"slotPageHeader"in c&&t(13,b=c.slotPageHeader),"slotPageContent"in c&&t(14,M=c.slotPageContent),"slotPageFooter"in c&&t(15,p=c.slotPageFooter),"slotFooter"in c&&t(16,L=c.slotFooter),"$$scope"in c&&t(17,I=c.$$scope)},o.$$.update=()=>{t(8,s=`${xe} ${e.class??""}`),o.$$.dirty&1024&&t(7,i=`${R}`),o.$$.dirty&2048&&t(6,l=`${el} ${r}`),o.$$.dirty&4096&&t(5,a=`${ll} ${u}`),o.$$.dirty&8192&&t(4,f=`${b}`),o.$$.dirty&16384&&t(3,g=`${M}`),o.$$.dirty&32768&&t(2,D=`${p}`),o.$$.dirty&65536&&t(1,P=`${L}`)},e=W(e),[k,P,D,g,f,a,l,i,s,E,R,r,u,b,M,p,L,I,v,F]}class sl extends w{constructor(e){super(),y(this,e,tl,ye,x,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function al(o){let e;const t=o[0].default,s=O(t,o,o[1],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,l){s&&s.m(i,l),e=!0},p(i,l){s&&s.p&&(!e||l&2)&&z(s,t,i,i[1],e?j(t,i[1],l,null):N(i[1]),null)},i(i){e||(d(s,i),e=!0)},o(i){S(s,i),e=!1},d(i){s&&s.d(i)}}}function ol(o){let e,t;return{c(){e=C("strong"),t=X("Bootstrapp"),this.h()},l(s){e=A(s,"STRONG",{class:!0});var i=V(e);t=Y(i,"Bootstrapp"),i.forEach(m),this.h()},h(){n(e,"class","text-xl uppercase")},m(s,i){B(s,e,i),T(e,t)},p:Fe,d(s){s&&m(e)}}}function il(o){let e,t;return{c(){e=C("a"),t=X("Publish"),this.h()},l(s){e=A(s,"A",{class:!0,href:!0,target:!0,rel:!0});var i=V(e);t=Y(i,"Publish"),i.forEach(m),this.h()},h(){n(e,"class","btn btn-sm variant-ghost-surface"),n(e,"href","https://github.com/skeletonlabs/skeleton"),n(e,"target","_blank"),n(e,"rel","noreferrer")},m(s,i){B(s,e,i),T(e,t)},p:Fe,d(s){s&&m(e)}}}function fl(o){let e,t;return e=new Je({props:{$$slots:{trail:[il],lead:[ol]},$$scope:{ctx:o}}}),{c(){Ee(e.$$.fragment)},l(s){He(e.$$.fragment,s)},m(s,i){Pe(e,s,i),t=!0},p(s,i){const l={};i&2&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){Le(e,s)}}}function rl(o){let e,t;return e=new sl({props:{$$slots:{header:[fl],default:[al]},$$scope:{ctx:o}}}),{c(){Ee(e.$$.fragment)},l(s){He(e.$$.fragment,s)},m(s,i){Pe(e,s,i),t=!0},p(s,[i]){const l={};i&2&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){Le(e,s)}}}function nl(o,e,t){let{$$slots:s={},$$scope:i}=e;return o.$$set=l=>{"$$scope"in l&&t(1,i=l.$$scope)},[s,i]}class dl extends w{constructor(e){super(),y(this,e,nl,rl,x,{})}}export{dl as component};
