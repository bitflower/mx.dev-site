import{r as o,h as t,H as r}from"./p-5aff386c.js";import{g as i}from"./p-049b04eb.js";import"./p-c090076e.js";import{o as e,c as n}from"./p-daa122f2.js";const a=class{constructor(t){o(this,t),this.routerDirection="forward",this.onClick=o=>{e(this.href,o,this.routerDirection)}}componentDidLoad(){console.warn("[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.")}render(){const o=i(this),e={href:this.href,rel:this.rel};return t(r,{onClick:this.onClick,class:Object.assign(Object.assign({},n(this.color)),{[o]:!0,"ion-activatable":!0})},t("a",Object.assign({},e),t("slot",null)))}};a.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";export{a as ion_anchor}