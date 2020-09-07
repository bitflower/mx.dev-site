const t=/(^-?\d*\.?\d*)(.*)/,s={translateX:1,translateY:1,translateZ:1,scale:1,scaleX:1,scaleY:1,scaleZ:1,rotate:1,rotateX:1,rotateY:1,rotateZ:1,skewX:1,skewY:1,perspective:1},i="undefined"!=typeof window?window:{},h=i.requestAnimationFrame?i.requestAnimationFrame.bind(i):t=>t(Date.now());class o{constructor(){this._hasDur=!1,this._hasTweenEffect=!1,this._isAsync=!1,this._isReverse=!1,this._destroyed=!1,this.hasChildren=!1,this.isPlaying=!1,this.hasCompleted=!1}addElement(t){if(null!=t)if(t.length>0)for(let s=0;s<t.length;s++)this._addEl(t[s]);else this._addEl(t);return this}_addEl(t){1===t.nodeType&&(this._elements=this._elements||[]).push(t)}add(t){return t.parent=this,this.hasChildren=!0,(this._childAnimations=this._childAnimations||[]).push(t),this}getDuration(t){return t&&void 0!==t.duration?t.duration:void 0!==this._duration?this._duration:this.parent?this.parent.getDuration():0}isRoot(){return!this.parent}duration(t){return this._duration=t,this}getEasing(){return this._isReverse&&void 0!==this._reversedEasingName?this._reversedEasingName:void 0!==this._easingName?this._easingName:this.parent&&this.parent.getEasing()||null}easing(t){return this._easingName=t,this}easingReverse(t){return this._reversedEasingName=t,this}from(t,s){return this._addProp("from",t,s),this}to(t,s,i=!1){const h=this._addProp("to",t,s);return i&&this.afterClearStyles(h.trans?["transform","-webkit-transform"]:[t]),this}fromTo(t,s,i,h){return this.from(t,s).to(t,i,h)}_getProp(t){if(this._fxProperties)return this._fxProperties.find(s=>s.effectName===t)}_addProp(i,h,o){let r=this._getProp(h);if(!r){const t=1===s[h];r={effectName:h,trans:t,wc:t?"transform":h},(this._fxProperties=this._fxProperties||[]).push(r)}const n={val:o,num:0,effectUnit:""};if(r[i]=n,"string"==typeof o&&o.indexOf(" ")<0){const s=o.match(t);if(s){const t=parseFloat(s[1]);isNaN(t)||(n.num=t),n.effectUnit=s[0]!==s[2]?s[2]:""}}else"number"==typeof o&&(n.num=o);return r}beforeAddClass(t){return(this._beforeAddClasses=this._beforeAddClasses||[]).push(t),this}beforeRemoveClass(t){return(this._beforeRemoveClasses=this._beforeRemoveClasses||[]).push(t),this}beforeStyles(t){return this._beforeStyles=t,this}beforeClearStyles(t){this._beforeStyles=this._beforeStyles||{};for(const s of t)this._beforeStyles[s]="";return this}beforeAddRead(t){return(this._readCallbacks=this._readCallbacks||[]).push(t),this}beforeAddWrite(t){return(this._writeCallbacks=this._writeCallbacks||[]).push(t),this}afterAddClass(t){return(this._afterAddClasses=this._afterAddClasses||[]).push(t),this}afterRemoveClass(t){return(this._afterRemoveClasses=this._afterRemoveClasses||[]).push(t),this}afterStyles(t){return this._afterStyles=t,this}afterClearStyles(t){this._afterStyles=this._afterStyles||{};for(const s of t)this._afterStyles[s]="";return this}play(t){this._destroyed||(this._isAsync=this._hasDuration(t),this._clearAsync(),this._playInit(t),h(()=>{h(()=>{this._playDomInspect(t)})}))}playAsync(t){return new Promise(s=>(this.onFinish(s,{oneTimeCallback:!0,clearExistingCallbacks:!0}),this.play(t),this))}playSync(){if(!this._destroyed){const t={duration:0};this._isAsync=!1,this._clearAsync(),this._playInit(t),this._playDomInspect(t)}}_playInit(t){this._hasTweenEffect=!1,this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=this.getDuration(t)>32;const s=this._childAnimations;if(s)for(const i of s)i._playInit(t);this._hasDur&&(this._progress(0),this._willChange(!0))}_playDomInspect(t){this._beforeAnimation();const s=this.getDuration(t);this._isAsync&&this._asyncEnd(s,!0),this._playProgress(t),this._isAsync&&!this._destroyed&&h(()=>{this._playToStep(1)})}_playProgress(t){const s=this._childAnimations;if(s)for(const i of s)i._playProgress(t);this._hasDur?this._setTrans(this.getDuration(t),!1):(this._progress(1),this._setAfterStyles(),this._didFinish(!0))}_playToStep(t){if(!this._destroyed){const s=this._childAnimations;if(s)for(const i of s)i._playToStep(t);this._hasDur&&this._progress(t)}}_asyncEnd(t,s){const i=this;i._unregisterTrnsEnd=(t=>{let h;const o={passive:!0},r=()=>{h&&h()},n=h=>{t===h.target&&(r(),i._clearAsync(),i._playEnd(),i._didFinishAll(s,!0,!1))};return t&&(t.addEventListener("webkitTransitionEnd",n,o),t.addEventListener("transitionend",n,o),h=()=>{t.removeEventListener("webkitTransitionEnd",n,o),t.removeEventListener("transitionend",n,o)}),r})(i._transEl()),i._timerId=setTimeout(()=>{i._timerId=void 0,i._clearAsync(),i._playEnd(s?1:0),i._didFinishAll(s,!0,!1)},t+400)}_playEnd(t){const s=this._childAnimations;if(s)for(const i of s)i._playEnd(t);this._hasDur&&(void 0!==t&&(this._setTrans(0,!0),this._progress(t)),this._setAfterStyles(),this._willChange(!1))}_hasDuration(t){if(this.getDuration(t)>32)return!0;const s=this._childAnimations;if(s)for(const i of s)if(i._hasDuration(t))return!0;return!1}_hasDomReads(){if(this._readCallbacks&&this._readCallbacks.length>0)return!0;const t=this._childAnimations;if(t)for(const s of t)if(s._hasDomReads())return!0;return!1}stop(t=1){this._clearAsync(),this._hasDur=!0,this._playEnd(t)}_clearAsync(){this._unregisterTrnsEnd&&this._unregisterTrnsEnd(),this._timerId&&clearTimeout(this._timerId),this._timerId=this._unregisterTrnsEnd=void 0}_progress(t){let s;const i=this._elements,h=this._fxProperties;if(!i||0===i.length||!h||this._destroyed)return;this._isReverse&&(t=1-t);let o,r=0,n=0,e="";for(r=0;r<h.length;r++)if(o=h[r],o.from&&o.to){const h=o.from.num,r=o.to.num,f=h!==r;if(f&&(this._hasTweenEffect=!0),0===t?s=o.from.val:1===t?s=o.to.val:f&&(s=(r-h)*t+h+o.to.effectUnit),null!==s){const t=o.effectName;if(o.trans)e+=t+"("+s+") ";else for(n=0;n<i.length;n++)i[n].style.setProperty(t,s)}}if(e.length>0)for((!this._isReverse&&1!==t||this._isReverse&&0!==t)&&(e+="translateZ(0px)"),r=0;r<i.length;r++)i[r].style.setProperty("transform",e),i[r].style.setProperty("-webkit-transform",e)}_setTrans(t,s){const i=this._elements;if(!i||0===i.length||!this._fxProperties)return;const h=s?"linear":this.getEasing(),o=t+"ms";for(const{style:s}of i)t>0?(s.transitionDuration=o,null!==h&&(s.transitionTimingFunction=h)):s.transitionDuration="0"}_beforeAnimation(){this._fireBeforeReadFunc(),this._fireBeforeWriteFunc(),this._setBeforeStyles()}_setBeforeStyles(){const t=this._childAnimations;if(t)for(const s of t)s._setBeforeStyles();const s=this._elements;if(!s||0===s.length||this._isReverse)return;const i=this._beforeAddClasses,h=this._beforeRemoveClasses;for(const t of s){const s=t.classList;if(i)for(const t of i)s.add(t);if(h)for(const t of h)s.remove(t);if(this._beforeStyles)for(const[s,i]of Object.entries(this._beforeStyles))t.style.setProperty(s,i)}}_fireBeforeReadFunc(){const t=this._childAnimations;if(t)for(const s of t)s._fireBeforeReadFunc();const s=this._readCallbacks;if(s)for(const t of s)t()}_fireBeforeWriteFunc(){const t=this._childAnimations;if(t)for(const s of t)s._fireBeforeWriteFunc();const s=this._writeCallbacks;if(s)for(const t of s)t()}_setAfterStyles(){const t=this._elements;if(t)for(const s of t){const t=s.classList;if(s.style.transitionDuration=s.style.transitionTimingFunction="",this._isReverse){const i=this._beforeAddClasses;if(i)for(const s of i)t.remove(s);const h=this._beforeRemoveClasses;if(h)for(const s of h)t.add(s);const o=this._beforeStyles;if(o)for(const t of Object.keys(o))s.style.removeProperty(t)}else{const i=this._afterAddClasses;if(i)for(const s of i)t.add(s);const h=this._afterRemoveClasses;if(h)for(const s of h)t.remove(s);const o=this._afterStyles;if(o)for(const[t,i]of Object.entries(o))s.style.setProperty(t,i)}}}_willChange(t){let s;const i=this._fxProperties;let h;if(t&&i){s=[];for(const t of i){const i=t.wc;"webkitTransform"===i?s.push("transform","-webkit-transform"):void 0!==i&&s.push(i)}h=s.join(",")}else h="";const o=this._elements;if(o)for(const t of o)t.style.setProperty("will-change",h)}progressStart(){this._clearAsync(),this._beforeAnimation(),this._progressStart()}_progressStart(){const t=this._childAnimations;if(t)for(const s of t)s._progressStart();this._setTrans(0,!0),this._willChange(!0)}progressStep(t){t=Math.min(1,Math.max(0,t));const s=this._childAnimations;if(s)for(const i of s)i.progressStep(t);this._progress(t)}progressEnd(t,s,i=-1){this._isReverse&&(s=1-s);const o=t?1:0,r=Math.abs(s-o);i<0?i=this._duration||0:r<.05&&(i=0),this._isAsync=i>30,this._progressEnd(t,o,i,this._isAsync),this._isAsync&&(this._asyncEnd(i,t),this._destroyed||h(()=>{this._playToStep(o)}))}_progressEnd(t,s,i,h){const o=this._childAnimations;if(o)for(const r of o)r._progressEnd(t,s,i,h);h?(this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=!0,this._willChange(!0),this._setTrans(i,!1)):(this._progress(s),this._willChange(!1),this._setAfterStyles(),this._didFinish(t))}onFinish(t,s){return s&&s.clearExistingCallbacks&&(this._onFinishCallbacks=this._onFinishOneTimeCallbacks=void 0),s&&s.oneTimeCallback?(this._onFinishOneTimeCallbacks=this._onFinishOneTimeCallbacks||[],this._onFinishOneTimeCallbacks.push(t)):(this._onFinishCallbacks=this._onFinishCallbacks||[],this._onFinishCallbacks.push(t)),this}_didFinishAll(t,s,i){const h=this._childAnimations;if(h)for(const o of h)o._didFinishAll(t,s,i);(s&&this._isAsync||i&&!this._isAsync)&&this._didFinish(t)}_didFinish(t){if(this.isPlaying=!1,this.hasCompleted=t,this._onFinishCallbacks)for(const t of this._onFinishCallbacks)t(this);if(this._onFinishOneTimeCallbacks){for(const t of this._onFinishOneTimeCallbacks)t(this);this._onFinishOneTimeCallbacks.length=0}}reverse(t=!0){const s=this._childAnimations;if(s)for(const i of s)i.reverse(t);return this._isReverse=!!t,this}destroy(){this._didFinish(!1),this._destroyed=!0;const t=this._childAnimations;if(t)for(const s of t)s.destroy();this._clearAsync(),this._elements&&(this._elements.length=0),this._readCallbacks&&(this._readCallbacks.length=0),this._writeCallbacks&&(this._writeCallbacks.length=0),this.parent=void 0,this._childAnimations&&(this._childAnimations.length=0),this._onFinishCallbacks&&(this._onFinishCallbacks.length=0),this._onFinishOneTimeCallbacks&&(this._onFinishOneTimeCallbacks.length=0)}_transEl(){const t=this._childAnimations;if(t)for(const s of t){const t=s._transEl();if(t)return t}return this._hasTweenEffect&&this._hasDur&&void 0!==this._elements&&this._elements.length>0?this._elements[0]:null}}const r=(t,s,i)=>t?t(o,s,i):Promise.resolve(new o);export{r as create}