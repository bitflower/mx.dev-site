import{r as t,c as o,d as i,h as s,H as n,a as r}from"./p-5aff386c.js";import{g as e,a as l}from"./p-049b04eb.js";import{b as a}from"./p-c090076e.js";import{c,h}from"./p-daa122f2.js";const d=class{constructor(i){t(this,i),this.ionScrollStart=o(this,"ionScrollStart",7),this.ionScroll=o(this,"ionScroll",7),this.ionScrollEnd=o(this,"ionScrollEnd",7),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.mode=e(this),this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}disconnectedCallback(){this.onScrollEnd()}componentDidLoad(){this.resize()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}shouldForceOverscroll(){const{forceOverscroll:t,mode:o}=this;return void 0===t?"ios"===o&&l("ios"):t}resize(){this.fullscreen?i(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}readDimensions(){const t=p(this.el),o=Math.max(this.el.offsetTop,0),i=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||i!==this.cBottom)&&(this.cTop=o,this.cBottom=i,this.el.forceUpdate())}onScroll(t){const o=Date.now(),s=!this.isScrolling;this.lastScroll=o,s&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,i(o=>{this.queued=!1,this.detail.event=t,g(this.detail,this.scrollEl,o,s),this.ionScroll.emit(this.detail)}))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,o,i){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,i)}async scrollToPoint(t,o,i=0){const s=this.scrollEl;if(i<32)return null!=o&&(s.scrollTop=o),void(null!=t&&(s.scrollLeft=t));let n,r=0;const e=new Promise(t=>n=t),l=s.scrollTop,a=s.scrollLeft,c=null!=o?o-l:0,h=null!=t?t-a:0,d=t=>{const o=Math.min(1,(t-r)/i)-1,e=Math.pow(o,3)+1;0!==c&&(s.scrollTop=Math.floor(e*c+l)),0!==h&&(s.scrollLeft=Math.floor(e*h+a)),e<1?requestAnimationFrame(d):n()};return requestAnimationFrame(t=>{r=t,d(t)}),e}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const{scrollX:t,scrollY:o}=this,i=e(this),r=this.shouldForceOverscroll(),l="ios"===i&&a.getBoolean("experimentalTransitionShadow",!0);return this.resize(),s(n,{class:Object.assign(Object.assign({},c(this.color)),{[i]:!0,"content-sizing":h("ion-popover",this.el),overscroll:r}),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},s("main",{class:{"inner-scroll":!0,"scroll-x":t,"scroll-y":o,overscroll:(t||o)&&r},ref:t=>this.scrollEl=t,onScroll:t=>this.onScroll(t)},s("slot",null)),l?s("div",{class:"transition-effect"},s("div",{class:"transition-cover"}),s("div",{class:"transition-shadow"})):null,s("slot",{name:"fixed"}))}get el(){return r(this)}},p=t=>{const o=t.closest("ion-tabs");if(o)return o;return t.closest("ion-app,ion-page,.ion-page,page-inner")||(t=>t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null)(t)},g=(t,o,i,s)=>{const n=t.currentX,r=t.currentY,e=o.scrollLeft,l=o.scrollTop,a=i-t.timeStamp;if(s&&(t.startTimeStamp=i,t.startX=e,t.startY=l,t.velocityX=t.velocityY=0),t.timeStamp=i,t.currentX=t.scrollLeft=e,t.currentY=t.scrollTop=l,t.deltaX=e-t.startX,t.deltaY=l-t.startY,a>0&&a<100){const o=(l-r)/a;t.velocityX=(e-n)/a*.7+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}};d.style=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);box-sizing:border-box;overflow:hidden}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;will-change:scroll-position;overscroll-behavior:contain}.scroll-y{touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{touch-action:auto}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{position:absolute;left:-100%;width:100%;height:100%;opacity:0;pointer-events:none}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}';export{d as ion_content}