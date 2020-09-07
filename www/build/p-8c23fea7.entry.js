import{r as t,c as i,h as e,H as s,a as n}from"./p-5aff386c.js";import{g as h}from"./p-049b04eb.js";import{b as o}from"./p-c090076e.js";import{g as a,P as r}from"./p-aa27f571.js";import{i as d,a as m,c as u}from"./p-69615ba5.js";import"./p-1b6dedf4.js";import{G as l}from"./p-f40fc6b9.js";import{m as p}from"./p-b41078b6.js";const c=class{constructor(e){t(this,e),this.ionWillOpen=i(this,"ionWillOpen",7),this.ionWillClose=i(this,"ionWillClose",7),this.ionDidOpen=i(this,"ionDidOpen",7),this.ionDidClose=i(this,"ionDidClose",7),this.ionMenuChange=i(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=l.createBlocker({disableScroll:!0}),this.mode=h(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,i){const e=this.contentEl;e&&(void 0!==i&&e.classList.remove("menu-content-"+i),e.classList.add("menu-content-"+t),e.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=d(this.side)}swipeGestureChanged(){this.updateState()}async connectedCallback(){void 0===this.type&&(this.type=o.get("menuType","ios"===this.mode?"reveal":"overlay"));const t=this.el.parentNode;void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="my-content"></ion-menu>\n  <div id="my-content">...</div>\n');const i=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");i&&i.tagName?(this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),p._register(this),this.gesture=(await import("./p-9a098f5b.js")).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}async componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}disconnectedCallback(){this.blocker.destroy(),p._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,i=!0){return p._setOpen(this,t,i)}async _setOpen(t,i=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,i),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await p._createAnimation(this.type,this),o.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"))}async startAnimation(t,i){const e=!t,s=this.animation.direction(e?"reverse":"normal").easing(e?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)");i?await s.playAsync():s.playSync()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!p._getOpenSync()&&g(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):m(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void m(!1,"isAnimating has to be true");const i=b(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(i/this.width)}onEnd(t){if(!this.isAnimating||!this.animation)return void m(!1,"isAnimating has to be true");const i=this._isOpen,e=this.isEndSide,s=b(t.deltaX,i,e),n=this.width,h=s/n,o=t.velocityX,d=n/2,l=o>=0&&(o>.2||t.deltaX>d),p=o<=0&&(o<-.2||t.deltaX<-d),c=i?e?l:p:e?p:l;let g=!i&&c;i&&!c&&(g=!0),this.lastOnEnd=t.timeStamp;let f=c?.001:-.001;const v=h<=0?.01:h;f+=a(new r(0,0),new r(.4,0),new r(.6,1),new r(1,1),u(0,v,1)),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(g),{oneTimeCallback:!0}).progressEnd(c?1:0,f,300)}beforeAnimation(t){m(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(f),this.backdropEl&&this.backdropEl.classList.add(v),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){m(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(w),this.ionDidOpen.emit()):(this.el.classList.remove(f),this.contentEl&&this.contentEl.classList.remove(w),this.backdropEl&&this.backdropEl.classList.remove(v),this.animation&&this.animation.stop(),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||p._setActiveMenu(this),m(!this.isAnimating,"can not be animating")}forceClosing(){m(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").playSync(),this.afterAnimation(!1)}render(){const{isEndSide:t,type:i,disabled:n,mode:h,isPaneVisible:o}=this;return e(s,{role:"navigation",class:{[h]:!0,["menu-type-"+i]:!0,"menu-enabled":!n,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":o}},e("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},e("slot",null)),e("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}get el(){return n(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},b=(t,i,e)=>Math.max(0,i!==e?-t:t),g=(t,i,e,s)=>e?i>=t.innerWidth-s:i<=s,f="show-menu",v="show-backdrop",w="menu-content-open";c.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;transform:translate3d(-9999px,  0,  0);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;transform:translate3d(-9999px,  0,  0);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{box-shadow:0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18)}"};export{c as ion_menu}