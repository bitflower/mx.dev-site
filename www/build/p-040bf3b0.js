import"./p-5aff386c.js";import"./p-69615ba5.js";import{g as t}from"./p-2d68f3b3.js";import{c as o}from"./p-1b6dedf4.js";const n=(t,o="top")=>`calc(${t}px + var(--ion-safe-area-${o}))`,a=t=>document.querySelector(t+".ion-cloned-element"),e=t=>t.shadowRoot||t,s=t=>t.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]"),r=(t,o)=>{const n=t.querySelectorAll("ion-buttons");for(const t of n){const n=t.closest("ion-header"),a=n&&!n.classList.contains("header-collapse-condense-inactive"),e=t.querySelector("ion-back-button"),s=t.classList.contains("buttons-collapse");if(null!==e&&(s&&a&&o||!s))return e}return null},i=(t,e,s,r)=>{const i=r.getBoundingClientRect(),c=e?`calc(100% - ${i.right+4}px)`:i.left-4+"px",l=e?"7px":"-7px",f=e?"-4px":"4px",p=e?"-4px":"4px",$=e?"right":"left",d=e?"left":"right",m=[{offset:0,opacity:0,transform:`translate(${l}, ${n(8)}) scale(2.1)`},{offset:1,opacity:1,transform:`translate(${f}, ${n(-40)}) scale(1)`}],b=[{offset:0,opacity:1,transform:`translate(${f}, ${n(-40)}) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate(${l}, ${n(8)}) scale(2.1)`}],u=s?b:m,y=[{offset:0,opacity:0,transform:`translate3d(${p}, ${n(-35)}, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${p}, ${n(-40)}, 0) scale(1)`}],X=[{offset:0,opacity:1,transform:`translate(${p}, ${n(-40)}) scale(1)`},{offset:.2,opacity:0,transform:`translate(${p}, ${n(-35)}) scale(0.6)`},{offset:1,opacity:0,transform:`translate(${p}, ${n(-35)}) scale(0.6)`}],h=s?X:y,x=o(),g=o(),k=a("ion-back-button"),v=k.querySelector(".button-text"),w=k.querySelector("ion-icon");k.text=r.text,k.mode=r.mode,k.icon=r.icon,k.color=r.color,k.disabled=r.disabled,k.style.setProperty("display","block"),k.style.setProperty("position","fixed"),g.addElement(w),x.addElement(v),x.beforeStyles({"transform-origin":$+" center"}).beforeAddWrite(()=>{r.style.setProperty("display","none"),k.style.setProperty($,c)}).afterAddWrite(()=>{r.style.setProperty("display",""),k.style.setProperty("display","none"),k.style.removeProperty($)}).keyframes(u),g.beforeStyles({"transform-origin":d+" center"}).keyframes(h),t.addAnimation([x,g])},c=(t,e,s,r)=>{const i=r.getBoundingClientRect(),c=e?`calc(100% - ${i.right}px)`:i.left+"px",l=e?"-18px":"18px",f=e?"right":"left",p=[{offset:0,opacity:0,transform:`translate(${l}, ${n(0)}) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate(0, ${n(49)}) scale(1)`}],$=[{offset:0,opacity:.99,transform:`translate(0, ${n(49)}) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate(${l}, ${n(0)}) scale(0.5)`}],d=s?p:$,m=a("ion-title"),b=o();m.innerText=r.innerText,m.size=r.size,m.color=r.color,b.addElement(m),b.beforeStyles({"transform-origin":f+" center",height:"46px",display:"",position:"relative",[f]:c}).beforeAddWrite(()=>{r.style.setProperty("display","none")}).afterAddWrite(()=>{r.style.setProperty("display",""),m.style.setProperty("display","none")}).keyframes(d),t.addAnimation(b)},l=(n,a)=>{try{const l="cubic-bezier(0.32,0.72,0,1)",f="opacity",p="transform",$="0%",d=.8,m="rtl"===n.ownerDocument.dir,b=m?"-99.5%":"99.5%",u=m?"33%":"-33%",y=a.enteringEl,X=a.leavingEl,h="back"===a.direction,x=y.querySelector(":scope > ion-content"),g=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),k=y.querySelectorAll(":scope > ion-header > ion-toolbar"),v=o(),w=o();if(v.addElement(y).duration(a.duration||540).easing(a.easing||l).fill("both").beforeRemoveClass("ion-page-invisible"),X&&n){const t=o();t.addElement(n),v.addAnimation(t)}if(x||0!==k.length||0!==g.length?(w.addElement(x),w.addElement(g)):w.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(w),h?w.beforeClearStyles([f]).fromTo("transform",`translateX(${u})`,`translateX(${$})`).fromTo(f,d,1):w.beforeClearStyles([f]).fromTo("transform",`translateX(${b})`,`translateX(${$})`),x){const t=e(x).querySelector(".transition-effect");if(t){const n=t.querySelector(".transition-cover"),a=t.querySelector(".transition-shadow"),e=o(),s=o(),r=o();e.addElement(t).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),s.addElement(n).beforeClearStyles([f]).fromTo(f,0,.1),r.addElement(a).beforeClearStyles([f]).fromTo(f,.03,.7),e.addAnimation([s,r]),w.addAnimation([e])}}const j=y.querySelector("ion-header.header-collapse-condense"),{forward:T,backward:z}=((t,o,n,a,e)=>{const l=r(a,n),f=s(e),p=s(a),$=r(e,n),d=null!==l&&null!==f&&!n,m=null!==p&&null!==$&&n;return d?(c(t,o,n,f),i(t,o,n,l)):m&&(c(t,o,n,p),i(t,o,n,$)),{forward:d,backward:m}})(v,m,h,y,X);if(k.forEach(t=>{const n=o();n.addElement(t),v.addAnimation(n);const a=o();a.addElement(t.querySelector("ion-title"));const s=o(),r=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),i=t.closest("ion-header"),c=i&&i.classList.contains("header-collapse-condense-inactive");let l;l=r.filter(h?t=>{const o=t.classList.contains("buttons-collapse");return o&&!c||!o}:t=>!t.classList.contains("buttons-collapse")),s.addElement(l);const p=o();p.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const d=o();d.addElement(e(t).querySelector(".toolbar-background"));const y=o(),X=t.querySelector("ion-back-button");if(X&&y.addElement(X),n.addAnimation([a,s,p,d,y]),s.fromTo(f,.01,1),p.fromTo(f,.01,1),h)c||a.fromTo("transform",`translateX(${u})`,`translateX(${$})`).fromTo(f,.01,1),p.fromTo("transform",`translateX(${u})`,`translateX(${$})`),y.fromTo(f,.01,1);else if(j||a.fromTo("transform",`translateX(${b})`,`translateX(${$})`).fromTo(f,.01,1),p.fromTo("transform",`translateX(${b})`,`translateX(${$})`),d.beforeClearStyles([f]).fromTo(f,.01,1),T||y.fromTo(f,.01,1),X&&!T){const t=o();t.addElement(e(X).querySelector(".button-text")).fromTo("transform",m?"translateX(-100px)":"translateX(100px)","translateX(0px)"),n.addAnimation(t)}}),X){const n=o(),a=X.querySelector(":scope > ion-content");if(n.addElement(a),n.addElement(X.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),v.addAnimation(n),h){n.beforeClearStyles([f]).fromTo("transform",`translateX(${$})`,m?"translateX(-100%)":"translateX(100%)");const o=t(X);v.afterAddWrite(()=>{"normal"===v.getDirection()&&o.style.setProperty("display","none")})}else n.fromTo("transform",`translateX(${$})`,`translateX(${u})`).fromTo(f,1,d);if(a){const t=e(a).querySelector(".transition-effect");if(t){const a=t.querySelector(".transition-cover"),e=t.querySelector(".transition-shadow"),s=o(),r=o(),i=o();s.addElement(t).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),r.addElement(a).beforeClearStyles([f]).fromTo(f,.1,0),i.addElement(e).beforeClearStyles([f]).fromTo(f,.7,.03),s.addAnimation([r,i]),n.addAnimation([s])}}X.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(t=>{const n=o();n.addElement(t);const a=o();a.addElement(t.querySelector("ion-title"));const s=o(),r=t.querySelectorAll("ion-buttons,[menuToggle]"),i=t.closest("ion-header"),c=i&&i.classList.contains("header-collapse-condense-inactive"),l=Array.from(r).filter(t=>{const o=t.classList.contains("buttons-collapse");return o&&!c||!o});s.addElement(l);const d=o(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&d.addElement(b);const y=o();y.addElement(e(t).querySelector(".toolbar-background"));const X=o(),x=t.querySelector("ion-back-button");if(x&&X.addElement(x),n.addAnimation([a,s,d,X,y]),v.addAnimation(n),X.fromTo(f,.99,0),s.fromTo(f,.99,0),d.fromTo(f,.99,0),h){if(c||a.fromTo("transform",`translateX(${$})`,m?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),d.fromTo("transform",`translateX(${$})`,m?"translateX(-100%)":"translateX(100%)"),y.beforeClearStyles([f]).fromTo(f,1,.01),x&&!z){const t=o();t.addElement(e(x).querySelector(".button-text")).fromTo("transform",`translateX(${$})`,`translateX(${(m?-124:124)+"px"})`),n.addAnimation(t)}}else c||a.fromTo("transform",`translateX(${$})`,`translateX(${u})`).fromTo(f,.99,0).afterClearStyles([p,f]),d.fromTo("transform",`translateX(${$})`,`translateX(${u})`).afterClearStyles([p,f]),X.afterClearStyles([f]),a.afterClearStyles([f]),s.afterClearStyles([f])})}return v}catch(t){throw t}};export{l as iosTransitionAnimation,e as shadow}