import{r as o,c as t,h as s,H as a}from"./p-5aff386c.js";import{g as r}from"./p-049b04eb.js";import"./p-c090076e.js";import{n as i}from"./p-69615ba5.js";import{G as c}from"./p-f40fc6b9.js";const n=class{constructor(s){o(this,s),this.ionBackdropTap=t(this,"ionBackdropTap",7),this.lastClick=-1e4,this.blocker=c.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onTouchStart(o){this.lastClick=i(o),this.emitTap(o)}onMouseDown(o){this.lastClick<i(o)-2500&&this.emitTap(o)}emitTap(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const o=r(this);return s(a,{tabindex:"-1",class:{[o]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};n.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"};export{n as ion_backdrop}