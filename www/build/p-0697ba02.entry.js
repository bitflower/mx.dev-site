import{d as e,w as o,r as t,h as n,a as i,H as a}from"./p-5aff386c.js";import{g as r}from"./p-049b04eb.js";import"./p-c090076e.js";import{c as s}from"./p-69615ba5.js";const l=e=>{const o=document.querySelector(e+".ion-cloned-element");if(null!==o)return o;const t=document.createElement(e);return t.classList.add("ion-cloned-element"),t.style.setProperty("display","none"),document.body.appendChild(t),t},d=e=>{if(!e)return;const o=e.querySelectorAll("ion-toolbar");return{el:e,toolbars:Array.from(o).map(e=>{const o=e.querySelector("ion-title");return{el:e,background:e.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:o,innerTitleEl:o?o.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(e.querySelectorAll("ion-buttons"))||[]}})||[[]]}},c=(e,o)=>{void 0===o?e.background.style.removeProperty("--opacity"):e.background.style.setProperty("--opacity",o.toString())},h=(e,t=!0)=>{o(()=>{t?e.el.classList.remove("header-collapse-condense-inactive"):e.el.classList.add("header-collapse-condense-inactive")})},p=class{constructor(e){t(this,e),this.collapsibleHeaderInitialized=!1,this.translucent=!1}async componentDidLoad(){await this.checkCollapsibleHeader()}async componentDidUpdate(){await this.checkCollapsibleHeader()}componentDidUnload(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){const e="condense"===this.collapse,o=!(!e||"ios"!==r(this))&&e;if(!o&&this.collapsibleHeaderInitialized)this.destroyCollapsibleHeader();else if(o&&!this.collapsibleHeaderInitialized){const e=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),o=e?e.querySelector("ion-content"):null;await this.setupCollapsibleHeader(o,e)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}async setupCollapsibleHeader(t,n){t&&n?(this.scrollEl=await t.getScrollElement(),e(()=>{const t=n.querySelectorAll("ion-header"),i=Array.from(t).find(e=>"condense"!==e.collapse);if(!i||!this.scrollEl)return;const a=d(i),r=d(this.el);a&&r&&(h(a,!1),e(()=>{this.intersectionObserver=new IntersectionObserver(e=>{((e,t,n)=>{o(()=>{((e,o)=>{if(!e[0].isIntersecting)return;const t=100*(1-e[0].intersectionRatio)/75;c(o.toolbars[0],1===t?void 0:t)})(e,t);const o=e[0],i=o.intersectionRect,a=i.width*i.height,r=0===a&&0==o.rootBounds.width*o.rootBounds.height,s=Math.abs(i.left-o.boundingClientRect.left),l=Math.abs(i.right-o.boundingClientRect.right);r||a>0&&(s>=5||l>=5)||(o.isIntersecting?(h(t,!1),h(n)):(0===i.x&&0===i.y||0!==i.width&&0!==i.height)&&(h(t),h(n,!1),c(t.toolbars[0],1)))})})(e,a,r)},{threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:`-${a.el.clientHeight}px 0px 0px 0px`}),this.intersectionObserver.observe(r.toolbars[0].el)}),this.contentScrollCallback=()=>{((t,n)=>{e(()=>{const e=s(1,1+-t.scrollTop/500,1.1);o(()=>{((e=[],o=1,t=!1)=>{e.forEach(e=>{const n=e.ionTitleEl,i=e.innerTitleEl;n&&"large"===n.size&&(i.style.transformOrigin="left center",i.style.transition=t?"all 0.2s ease-in-out":"",i.style.transform=`scale3d(${o}, ${o}, 1)`)})})(n.toolbars,e)})})})(this.scrollEl,r)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback))}),o(()=>{l("ion-title"),l("ion-back-button")}),this.collapsibleHeaderInitialized=!0):console.error("ion-header requires a content to collapse, make sure there is an ion-content.")}render(){const e=r(this);return n(a,{role:"banner",class:{[e]:!0,["header-"+e]:!0,"header-translucent":this.translucent,["header-collapse-"+(this.collapse||"none")]:!0,["header-translucent-"+e]:this.translucent}})}get el(){return i(this)}};p.style={ios:"ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}@supports (backdrop-filter: blur(0)){.header-translucent-ios{backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:sticky;top:0}.header-collapse-condense ion-toolbar:first-child{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}ion-toolbar.in-toolbar ion-title,ion-toolbar.in-toolbar ion-buttons{transition:all 0.2s ease-in-out}.header-collapse-condense ion-toolbar ion-title,.header-collapse-condense ion-toolbar ion-buttons{transition:none}.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}",md:'ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-md[no-border]::after{display:none}.header-collapse-condense{display:none}'};export{p as ion_header}