import{r as t,h as o,H as e,a as s,c as i}from"./p-5aff386c.js";import{g as n,a as r}from"./p-049b04eb.js";import{b as a}from"./p-c090076e.js";import{g as h,P as c}from"./p-aa27f571.js";import{a as u,d as l}from"./p-69615ba5.js";import{l as d,t as f,s as p,L as w,a as m,b as v}from"./p-2d68f3b3.js";import{a as g}from"./p-12d36d1f.js";const b=class{constructor(o){t(this,o)}render(){return o("ion-app",null,o("ion-router",{useHash:!1},o("ion-route",{url:"/",component:"app-home"}),o("ion-route",{url:"/design-system",component:"app-profile"})),o("ion-nav",null))}};b.style=".header-md:after{background-image:none !important}";const y=class{constructor(o){t(this,o)}componentDidLoad(){R(()=>{const t=r(window,"hybrid");a.getBoolean("_testing")||import("./p-6e61c1d9.js").then(t=>t.startTapClick(a)),a.getBoolean("statusTap",t)&&import("./p-673c47d9.js").then(t=>t.startStatusTap()),a.getBoolean("inputShims",C())&&import("./p-1d684629.js").then(t=>t.startInputShims(a)),a.getBoolean("hardwareBackButton",t)&&import("./p-53967afa.js").then(t=>t.startHardwareBackButton()),import("./p-93dfd6b6.js").then(t=>t.startFocusVisible())})}render(){const t=n(this);return o(e,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":a.getBoolean("_forceStatusbarPadding")}})}get el(){return s(this)}},C=()=>r(window,"ios")&&r(window,"mobile"),R=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};y.style="html.plt-mobile ion-app{user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";class P{constructor(t,o){this.component=t,this.params=o,this.state=1}async init(t){if(this.state=2,!this.element){const o=this.component;this.element=await g(this.delegate,t,o,["ion-page","ion-page-invisible"],this.params)}}_destroy(){u(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const k=(t,o,e)=>{if(!t)return!1;if(t.component!==o)return!1;const s=t.params;if(s===e)return!0;if(!s&&!e)return!0;if(!s||!e)return!1;const i=Object.keys(s),n=Object.keys(e);if(i.length!==n.length)return!1;for(const t of i)if(s[t]!==e[t])return!1;return!0},j=(t,o)=>t?t instanceof P?t:new P(t,o):null,S=class{constructor(o){t(this,o),this.ionNavWillLoad=i(this,"ionNavWillLoad",7),this.ionNavWillChange=i(this,"ionNavWillChange",3),this.ionNavDidChange=i(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const t=n(this);this.swipeGesture=a.getBoolean("swipeBackEnabled","ios"===t)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await import("./p-cd7f6b55.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}componentDidUnload(){for(const t of this.views)d(t.element,w),t._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(t,o,e,s){return this.queueTrns({insertStart:-1,insertViews:[{page:t,params:o}],opts:e},s)}insert(t,o,e,s,i){return this.queueTrns({insertStart:t,insertViews:[{page:o,params:e}],opts:s},i)}insertPages(t,o,e,s){return this.queueTrns({insertStart:t,insertViews:o,opts:e},s)}pop(t,o){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},o)}popTo(t,o,e){const s={removeStart:-1,removeCount:-1,opts:o};return"object"==typeof t&&t.component?(s.removeView=t,s.removeStart=1):"number"==typeof t&&(s.removeStart=t+1),this.queueTrns(s,e)}popToRoot(t,o){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},o)}removeIndex(t,o=1,e,s){return this.queueTrns({removeStart:t,removeCount:o,opts:e},s)}setRoot(t,o,e,s){return this.setPages([{page:t,params:o}],e,s)}setPages(t,o,e){return null==o&&(o={}),!0!==o.animated&&(o.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:o},e)}setRouteId(t,o,e){const s=this.getActiveSync();if(k(s,t,o))return Promise.resolve({changed:!1,element:s.element});let i;const n=new Promise(t=>i=t);let r;const a={updateURL:!1,viewIsReady:t=>{let o;const e=new Promise(t=>o=t);return i({changed:!0,element:t,markVisible:async()=>{o(),await r}}),e}};if("root"===e)r=this.setRoot(t,o,a);else{const s=this.views.find(e=>k(e,t,o));s?r=this.popTo(s,Object.assign(Object.assign({},a),{direction:"back"})):"forward"===e?r=this.push(t,o,a):"back"===e&&(r=this.setRoot(t,o,Object.assign(Object.assign({},a),{direction:"back",animated:!0})))}return n}async getRouteId(){const t=this.getActiveSync();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(t){return Promise.resolve(this.views[t])}canGoBack(t){return Promise.resolve(this.canGoBackSync(t))}getPrevious(t){return Promise.resolve(this.getPreviousSync(t))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const o=this.views,e=o.indexOf(t);return e>0?o[e-1]:void 0}queueTrns(t,o){if(this.isTransitioning&&null!=t.opts&&t.opts.skipIfBusy)return Promise.resolve(!1);const e=new Promise((o,e)=>{t.resolve=o,t.reject=e});return t.done=o,t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),e}success(t,o){if(this.destroyed)this.fireError("nav controller was destroyed",o);else if(o.done&&o.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),o.resolve(t.hasCompleted),!1!==o.opts.updateURL&&this.useRouter){const o=document.querySelector("ion-router");o&&o.navChanged("back"===t.direction?"back":"forward")}}failed(t,o){this.destroyed?this.fireError("nav controller was destroyed",o):(this.transInstr.length=0,this.fireError(t,o))}fireError(t,o){o.done&&o.done(!1,!1,t),o.reject&&!this.destroyed?o.reject(t):o.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const o=this.getActiveSync(),e=this.getEnteringView(t,o);if(!o&&!e)throw new Error("no views in the stack to be removed");e&&1===e.state&&await e.init(this.el),this.postViewInit(e,o,t);const s=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&e!==o?await this.transition(e,o,t):{hasCompleted:!0,requiresTransition:!1};this.success(s,t),this.ionNavDidChange.emit()}catch(o){this.failed(o,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){const o=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),void 0!==t.removeView){u(void 0!==t.removeStart,"removeView needs removeStart"),u(void 0!==t.removeCount,"removeView needs removeCount");const o=this.views.indexOf(t.removeView);if(o<0)throw new Error("removeView was not found");t.removeStart+=o}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=o-1),t.removeCount<0&&(t.removeCount=o-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===o),t.insertViews&&((t.insertStart<0||t.insertStart>o)&&(t.insertStart=o),t.enteringRequiresTransition=t.insertStart===o);const e=t.insertViews;if(!e)return;u(e.length>0,"length can not be zero");const s=e.map(t=>t instanceof P?t:"page"in t?j(t.page,t.params):j(t,void 0)).filter(t=>null!==t);if(0===s.length)throw new Error("invalid views to insert");for(const o of s){o.delegate=t.opts.delegate;const e=o.nav;if(e&&e!==this)throw new Error("inserted view was already inserted");if(3===o.state)throw new Error("inserted view was already destroyed")}t.insertViews=s}getEnteringView(t,o){const e=t.insertViews;if(void 0!==e)return e[e.length-1];const s=t.removeStart;if(void 0!==s){const e=this.views,i=s+t.removeCount;for(let t=e.length-1;t>=0;t--){const n=e[t];if((t<s||t>=i)&&n!==o)return n}}}postViewInit(t,o,e){u(o||t,"Both leavingView and enteringView are null"),u(e.resolve,"resolve must be valid"),u(e.reject,"reject must be valid");const s=e.opts,i=e.insertViews,n=e.removeStart,r=e.removeCount;let a;if(void 0!==n&&void 0!==r){u(n>=0,"removeStart can not be negative"),u(r>=0,"removeCount can not be negative"),a=[];for(let e=0;e<r;e++){const s=this.views[e+n];s&&s!==t&&s!==o&&a.push(s)}s.direction=s.direction||"back"}const h=this.views.length+(void 0!==i?i.length:0)-(void 0!==r?r:0);if(u(h>=0,"final balance can not be negative"),0===h)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(i){let t=e.insertStart;for(const o of i)this.insertViewAt(o,t),t++;e.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(a&&a.length>0){for(const t of a)d(t.element,m),d(t.element,v),d(t.element,w);for(const t of a)this.destroyView(t)}}async transition(t,o,e){const s=e.opts,i=s.progressAnimation?t=>this.sbAni=t:void 0,r=n(this),h=t.element,c=o&&o.element,u=Object.assign({mode:r,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||s.animationBuilder||a.get("navAnimation"),progressCallback:i,animated:this.animated&&a.getBoolean("animated",!0),enteringEl:h,leavingEl:c},s),{hasCompleted:l}=await f(u);return this.transitionFinish(l,t,o,s)}transitionFinish(t,o,e,s){const i=t?o:e;return i&&this.cleanup(i),{hasCompleted:t,requiresTransition:!0,enteringView:o,leavingView:e,direction:s.direction}}insertViewAt(t,o){const e=this.views,s=e.indexOf(t);s>-1?(u(t.nav===this,"view is not part of the nav"),e.splice(o,0,e.splice(s,1)[0])):(u(!t.nav,"nav is used"),t.nav=this,e.splice(o,0,t))}removeView(t){u(2===t.state||3===t.state,"view state should be loaded or destroyed");const o=this.views,e=o.indexOf(t);u(e>-1,"view must be part of the stack"),e>=0&&o.splice(e,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const o=this.views,e=o.indexOf(t);for(let t=o.length-1;t>=0;t--){const s=o[t],i=s.element;t>e?(d(i,w),this.destroyView(s)):t<e&&p(i,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(t){this.sbAni&&this.sbAni.progressStep(t)}onEnd(t,o,e){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let s=t?-.001:.001;t?s+=h(new c(0,0),new c(.32,.72),new c(0,1),new c(1,1),o):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=h(new c(0,0),new c(1,0),new c(.68,.28),new c(1,1),o)),this.sbAni.progressEnd(t?1:0,s,e)}}render(){return o("slot",null)}get el(){return s(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};S.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const E=class{constructor(o){t(this,o),this.ionRouteDataChanged=i(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const e=t?Object.keys(t):[],s=o?Object.keys(o):[];if(e.length===s.length){for(const s of e)if(t[s]!==o[s])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},T=t=>"/"+t.filter(t=>t.length>0).join("/"),O=t=>{if(null==t)return[""];const o=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===o.length?[""]:o},V=async(t,o,e,s,i=!1)=>{try{const n=U(t);if(s>=o.length||!n)return i;await n.componentOnReady();const r=o[s],a=await n.setRouteId(r.id,r.params,e);return a.changed&&(e="root",i=!0),i=await V(a.element,o,e,s+1,i),a.markVisible&&await a.markVisible(),i}catch(t){return console.error(t),!1}},L=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",U=t=>{if(!t)return;if(t.matches(L))return t;return t.querySelector(L)||void 0},D=(t,o)=>o.find(o=>((t,o)=>{const{from:e,to:s}=o;if(void 0===s)return!1;if(e.length>t.length)return!1;for(let o=0;o<e.length;o++){const s=e[o];if("*"===s)return!0;if(s!==t[o])return!1}return e.length===t.length})(t,o)),I=(t,o)=>{const e=Math.min(t.length,o.length);let s=0;for(;s<e&&t[s].toLowerCase()===o[s].id;s++);return s},A=(t,o)=>{const e=new x(t);let s,i=!1;for(let t=0;t<o.length;t++){const n=o[t].path;if(""===n[0])i=!0;else{for(const o of n){const i=e.next();if(":"===o[0]){if(""===i)return null;s=s||[],(s[t]||(s[t]={}))[o.slice(1)]=i}else if(i!==o)return null}i=!1}}return i&&i!==(""===e.next())?null:s?o.map((t,o)=>({id:t.id,path:t.path,params:B(t.params,s[o])})):o},B=(t,o)=>!t&&o?o:t&&!o?t:t&&o?Object.assign(Object.assign({},t),o):void 0,N=t=>{let o=1,e=1;for(const s of t)for(const t of s.path)":"===t[0]?o+=Math.pow(1,e):""!==t&&(o+=Math.pow(2,e)),e++;return o};class x{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const _=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const o=q(t,"to");return{from:O(q(t,"from")),to:null==o?void 0:O(o)}}),W=t=>H(G(t)),G=(t,o=t)=>Array.from(o.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(o=>{const e=q(o,"component");if(null==e)throw new Error("component missing in ion-route");return{path:O(q(o,"url")),id:e.toLowerCase(),params:o.componentProps,children:G(t,o)}}),q=(t,o)=>o in t?t[o]:t.hasAttribute(o)?t.getAttribute(o):null,H=t=>{const o=[];for(const e of t)M([],o,e);return o},M=(t,o,e)=>{const s=t.slice();if(s.push({id:e.id,path:e.path,params:e.params}),0!==e.children.length)for(const t of e.children)M(s,o,t);else o.push(s)},$=class{constructor(o){t(this,o),this.ionRouteWillChange=i(this,"ionRouteWillChange",7),this.ionRouteDidChange=i(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){console.debug("[ion-router] router will load"),await(U(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",l(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",l(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),o=this.getPath();return console.debug("[ion-router] URL changed -> update nav",o,t),this.writeNavStateRoot(o,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,o="forward"){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,o);const e=O(t);return this.setPath(e,o),this.writeNavStateRoot(e,o)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const o of t){const t=[];o.forEach(o=>t.push(...o.path));const e=o.map(t=>t.id);console.debug("%c "+T(t),"font-weight: bold; padding-left: 20px","=>\t",`(${e.join(", ")})`)}console.groupEnd()})(W(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const o of t)o.to&&console.debug("FROM: ","$c "+T(o.from),"font-weight: bold"," TO: ","$c "+T(o.to),"font-weight: bold");console.groupEnd()})(_(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:o,outlet:e}=await(async()=>{const t=[];let o,e=window.document.body;for(;o=U(e),o;){const s=await o.getRouteId();if(!s)break;e=s.element,s.element=void 0,t.push(s)}return{ids:t,outlet:o}})(),s=((t,o)=>{let e=null,s=0;const i=t.map(t=>t.id);for(const t of o){const o=I(i,t);o>s&&(e=t,s=o)}return e?e.map((o,e)=>({id:o.id,path:o.path,params:B(o.params,t[e]&&t[e].params)})):null})(o,W(this.el));if(!s)return console.warn("[ion-router] no matching URL for ",o.map(t=>t.id)),!1;const i=(t=>{const o=[];for(const e of t)for(const t of e.path)if(":"===t[0]){const s=e.params&&e.params[t.slice(1)];if(!s)return null;o.push(s)}else""!==t&&o.push(t);return o})(s);return i?(console.debug("[ion-router] nav changed -> update URL",o,i),this.setPath(i,t),await this.safeWriteNavState(e,s,"root",i,null,o.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&D(t,_(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const o=t.history.state,e=this.lastState;return this.lastState=o,o>e?"forward":o<e?"back":"root"}async writeNavStateRoot(t,o){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const e=_(this.el),s=D(t,e);let i=null;s&&(this.setPath(s.to,o),i=s.from,t=s.to);const n=((t,o)=>{let e=null,s=0;for(const i of o){const o=A(t,i);if(null!==o){const t=N(o);t>s&&(s=t,e=o)}}return e})(t,W(this.el));return n?this.safeWriteNavState(document.body,n,o,t,i):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,o,e,s,i,n=0){const r=await this.lock();let a=!1;try{a=await this.writeNavState(t,o,e,s,i,n)}catch(t){console.error(t)}return r(),a}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise(t=>o=t),void 0!==t&&await t,o}async writeNavState(t,o,e,s,i,n=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const r=this.routeChangeEvent(s,i);r&&this.ionRouteWillChange.emit(r);const a=await V(t,o,e,n);return this.busy=!1,a&&console.debug("[ion-router] route changed",s),r&&this.ionRouteDidChange.emit(r),a}setPath(t,o){this.state++,((t,o,e,s,i,n)=>{let r=T([...O(this.root),...s]);e&&(r="#"+r),"forward"===i?t.pushState(n,"",r):t.replaceState(n,"",r)})(window.history,0,this.useHash,t,o,this.state)}getPath(){return((t,o)=>{let e=t.pathname;if(this.useHash){const o=t.hash;e="#"===o[0]?o.slice(1):""}return((t,o)=>{if(t.length>o.length)return null;if(t.length<=1&&""===t[0])return o;for(let e=0;e<t.length;e++)if(t[e].length>0&&t[e]!==o[e])return null;return o.length===t.length?[""]:o.slice(t.length)})(O(o),O(e))})(window.location,this.root)}routeChangeEvent(t,o){const e=this.previousPath,s=T(t);return this.previousPath=s,s===e?null:{from:e,redirectedFrom:o?T(o):null,to:s}}get el(){return s(this)}};export{b as app_root,y as ion_app,S as ion_nav,E as ion_route,$ as ion_router}