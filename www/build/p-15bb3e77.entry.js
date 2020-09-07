import{r as t,c as i,h as n,H as e,a as o}from"./p-5aff386c.js";import{g as a}from"./p-049b04eb.js";import"./p-c090076e.js";import"./p-69615ba5.js";import{B as s,i as r,p as c,a as h,d,e as g,s as l}from"./p-166dc984.js";import{g as p}from"./p-daa122f2.js";import{c as b}from"./p-1b6dedf4.js";const u=t=>{const i=b(),n=b(),e=b();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.4),e.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([n,e])},m=t=>{const i=b(),n=b(),e=b();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.4,0),e.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([n,e])},f=t=>{const i=b(),n=b(),e=b();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),e.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([n,e])},x=t=>{const i=b(),n=b(),e=b();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.32,0),e.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),i.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([n,e])},k=class{constructor(n){t(this,n),this.didPresent=i(this,"ionActionSheetDidPresent",7),this.willPresent=i(this,"ionActionSheetWillPresent",7),this.willDismiss=i(this,"ionActionSheetWillDismiss",7),this.didDismiss=i(this,"ionActionSheetDidDismiss",7),this.presented=!1,this.mode=a(this),this.keyboardClose=!0,this.buttons=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,s)},this.dispatchCancelHandler=t=>{if(r(t.detail.role)){const t=this.getButtons().find(t=>"cancel"===t.role);this.callButtonHandler(t)}},c(this.el)}present(){return h(this,"actionSheetEnter",u,f)}dismiss(t,i){return d(this,t,i,"actionSheetLeave",m,x)}onDidDismiss(){return g(this.el,"ionActionSheetDidDismiss")}onWillDismiss(){return g(this.el,"ionActionSheetWillDismiss")}async buttonClick(t){const i=t.role;return r(i)?this.dismiss(void 0,i):await this.callButtonHandler(t)?this.dismiss(void 0,t.role):Promise.resolve()}async callButtonHandler(t){return!t||!1!==await l(t.handler)}getButtons(){return this.buttons.map(t=>"string"==typeof t?{text:t}:t)}render(){const t=a(this),i=this.getButtons(),o=i.find(t=>"cancel"===t.role),s=i.filter(t=>"cancel"!==t.role);return n(e,{role:"dialog","aria-modal":"true",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({[t]:!0},p(this.cssClass)),{"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap},n("ion-backdrop",{tappable:this.backdropDismiss}),n("div",{class:"action-sheet-wrapper",role:"dialog"},n("div",{class:"action-sheet-container"},n("div",{class:"action-sheet-group"},void 0!==this.header&&n("div",{class:"action-sheet-title"},this.header,this.subHeader&&n("div",{class:"action-sheet-sub-title"},this.subHeader)),s.map(i=>n("button",{type:"button","ion-activatable":!0,class:v(i),onClick:()=>this.buttonClick(i)},n("span",{class:"action-sheet-button-inner"},i.icon&&n("ion-icon",{icon:i.icon,lazy:!1,class:"action-sheet-icon"}),i.text),"md"===t&&n("ion-ripple-effect",null)))),o&&n("div",{class:"action-sheet-group action-sheet-group-cancel"},n("button",{type:"button",class:v(o),onClick:()=>this.buttonClick(o)},n("span",{class:"action-sheet-button-inner"},o.icon&&n("ion-icon",{icon:o.icon,lazy:!1,class:"action-sheet-icon"}),o.text))))))}get el(){return o(this)}},v=t=>Object.assign({"action-sheet-button":!0,"ion-activatable":!0,["action-sheet-"+t.role]:void 0!==t.role},p(t.cssClass));k.style={ios:".sc-ion-action-sheet-ios-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family, inherit);touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-ios{display:block;width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-ios{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-ios{display:flex;flex-flow:column;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-ios{background:var(--background-selected)}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--background-selected:var(--ion-background-color, #fff);--background-activated:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px;overflow:hidden}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports (backdrop-filter: blur(0)){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%);background-repeat:no-repeat;background-position:bottom;background-size:100% 1px}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;color:var(--color, var(--ion-color-primary, #3880ff));font-size:20px;contain:strict}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:0.1em;font-size:28px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:0.1em;margin-inline-end:0.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:bold}.action-sheet-destructive.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #f04141)}.action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:600}",md:".sc-ion-action-sheet-md-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family, inherit);touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-md{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:flex;flex-flow:column;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-md{background:var(--background-selected)}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--background-selected:var(--background, );--background-activated:var(--background)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;background:transparent;color:var(--color, var(--ion-color-step-850, #262626));font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:24px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}"};export{k as ion_action_sheet}