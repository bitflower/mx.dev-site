import{r as i,c as t,h as s,H as h,a as o}from"./p-5aff386c.js";import{g as r}from"./p-049b04eb.js";import"./p-c090076e.js";const e=class{constructor(s){i(this,s),this.ionImgWillLoad=t(this,"ionImgWillLoad",7),this.ionImgDidLoad=t(this,"ionImgDidLoad",7),this.ionError=t(this,"ionError",7),this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()}}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(i=>{i[0].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){return s(h,{class:r(this)},s("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))}get el(){return o(this)}static get watchers(){return{src:["srcChanged"]}}};e.style=":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}";export{e as ion_img}