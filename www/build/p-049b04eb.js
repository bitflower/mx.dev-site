import{g as o,s as t}from"./p-5aff386c.js";import{c as e,a as i,b as a,s}from"./p-c090076e.js";const n=(o,t)=>{return"string"==typeof o&&(t=o,o=void 0),(e=o,r(e)).includes(t);var e},r=(o=window)=>{o.Ionic=o.Ionic||{};let t=o.Ionic.platforms;return null==t&&(t=o.Ionic.platforms=d(o),t.forEach(t=>o.document.documentElement.classList.add("plt-"+t))),t},d=o=>Object.keys(u).filter(t=>u[t](o)),c=o=>!!f(o,/iPad/i)||!(!f(o,/Macintosh/i)||!m(o)),p=o=>f(o,/android|sink/i),m=o=>j(o,"(any-pointer:coarse)"),l=o=>b(o)||h(o),b=o=>!!(o.cordova||o.phonegap||o.PhoneGap),h=o=>{const t=o.Capacitor;return!(!t||!t.isNative)},f=(o,t)=>t.test(o.navigator.userAgent),j=(o,t)=>o.matchMedia(t).matches,u={ipad:c,iphone:o=>f(o,/iPhone/i),ios:o=>f(o,/iPhone|iPod/i)||c(o),android:p,phablet:o=>{const t=o.innerWidth,e=o.innerHeight,i=Math.min(t,e),a=Math.max(t,e);return i>390&&i<520&&a>620&&a<800},tablet:o=>{const t=o.innerWidth,e=o.innerHeight,i=Math.min(t,e),a=Math.max(t,e);return c(o)||(o=>p(o)&&!f(o,/mobile/i))(o)||i>460&&i<820&&a>780&&a<1400},cordova:b,capacitor:h,electron:o=>f(o,/electron/i),pwa:o=>!(!o.matchMedia("(display-mode: standalone)").matches&&!o.navigator.standalone),mobile:m,mobileweb:o=>m(o)&&!l(o),desktop:o=>!m(o),hybrid:l};let g;const w=t=>t&&o(t)||g,M=()=>{const o=document,d=window,c=d.Ionic=d.Ionic||{};r(d);const p=Object.assign(Object.assign(Object.assign(Object.assign({},e(d)),{persistConfig:!1}),c.config),i(d));a.reset(p),a.getBoolean("persistConfig")&&s(d,p),c.config=a,c.mode=g=a.get("mode",o.documentElement.getAttribute("mode")||(n(d,"ios")?"ios":"md")),a.set("mode",g),o.documentElement.setAttribute("mode",g),o.documentElement.classList.add(g),a.getBoolean("_testing")&&a.set("animated",!1),t(o=>o.mode=o.mode||o.getAttribute("mode")||g)};export{n as a,w as g,M as i}