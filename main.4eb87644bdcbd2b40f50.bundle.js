webpackJsonp([1],{0:function(n,l,o){n.exports=o("cDNt")},cDNt:function(n,l,o){"use strict";function t(n){return i._18(0,[(n()(),i._4(0,null,null,1,null,null,null,null,null,null,null)),(n()(),i._17(null,["\n        hello I'm a header\n    "]))],null,null)}function e(n){return i._18(0,[(n()(),i._4(0,null,null,4,"header",[],[[2,"shown",null]],null,null,null,null)),(n()(),i._17(null,["\n    "])),(n()(),i.Y(16777216,null,null,1,null,t)),i._2(16384,null,0,d.c,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(n()(),i._17(null,["\n"])),(n()(),i._17(null,["\n"])),(n()(),i._4(0,null,null,0,"input",[],null,null,null,null,null)),(n()(),i._17(null,["\n"])),(n()(),i._4(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,o){var t=!0,e=n.component;if("click"===l){t=!1!=(e.isOverflowing=!e.isOverflowing)&&t}return t},null,null)),(n()(),i._17(null,["Toggle Content Overflow"])),(n()(),i._17(null,["\n"])),(n()(),i._4(0,null,null,1,"h1",[["class","log"]],null,null,null,null,null)),(n()(),i._17(null,["",""]))],function(n,l){n(l,3,0,l.component.isHeaderShown)},function(n,l){var o=l.component;n(l,0,0,o.isHeaderShown),n(l,12,0,o.scrollLog)})}function u(n){return i._18(0,[(n()(),i._4(0,null,null,1,"app-root",[],[[2,"isOverflowing",null]],null,null,e,g)),i._2(114688,null,0,f,[a],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,i._15(l,1).isOverflowing)})}Object.defineProperty(l,"__esModule",{value:!0});var i=o("/oeL"),r={production:!0},c=function(){function n(){}return n}(),s=o("Dqrr"),_={Up:"up",Down:"down"},a=function(){function n(){var n=this;this.previousPosition=document.scrollingElement.scrollTop,this.onScroll$=s.Observable.fromEvent(window,"scroll").debounceTime(100).map(function(){return Math.max(Math.min(document.scrollingElement.scrollTop,document.scrollingElement.scrollHeight),0)}).filter(function(l){return l!==n.previousPosition}).map(function(l){var o=l>n.previousPosition?_.Down:_.Up;return n.previousPosition=l,o}).distinctUntilChanged()}return n.ctorParameters=function(){return[]},n}(),f=function(){function n(n){this.windowService=n,this.isOverflowing=!0,this.isHeaderShown=!0,this.scrollLog="scroll"}return n.prototype.ngOnInit=function(){var n=this;this.windowService.onScroll$.subscribe(function(l){n.scrollLog="scrolling "+l,n.isHeaderShown=l===_.Up})},n.ctorParameters=function(){return[{type:a}]},n}(),h=["[_nghost-%COMP%]{padding-top:3em;transition:height 3s;will-change:height;display:block;height:0;background:#def}.isOverflowing[_nghost-%COMP%]{height:60em}header[_ngcontent-%COMP%]{background:#f5b335;height:2.5em;position:fixed;top:-2.5em;will-change:top;transition:top .1s ease-in-out;width:100%}header.shown[_ngcontent-%COMP%]{top:0}.log[_ngcontent-%COMP%]{position:fixed;bottom:0;background:wheat}"],d=o("qbdv"),p=[h],g=i._1({encapsulation:0,styles:p,data:{}}),w=i.Z("app-root",f,u,{},{},[]),b=o("fc+i"),m=i._0(c,[f],function(n){return i._13([i._14(512,i.i,i.W,[[8,[w]],[3,i.i],i.x]),i._14(5120,i.v,i._12,[[3,i.v]]),i._14(4608,d.e,d.d,[i.v]),i._14(4608,i.h,i.h,[]),i._14(5120,i.a,i._5,[]),i._14(5120,i.t,i._10,[]),i._14(5120,i.u,i._11,[]),i._14(4608,b.b,b.s,[d.b]),i._14(6144,i.H,null,[b.b]),i._14(4608,b.e,b.f,[]),i._14(5120,b.c,function(n,l,o,t){return[new b.k(n),new b.o(l),new b.n(o,t)]},[d.b,d.b,d.b,b.e]),i._14(4608,b.d,b.d,[b.c,i.z]),i._14(135680,b.m,b.m,[d.b]),i._14(4608,b.l,b.l,[b.d,b.m]),i._14(6144,i.F,null,[b.l]),i._14(6144,b.p,null,[b.m]),i._14(4608,i.L,i.L,[i.z]),i._14(4608,b.g,b.g,[d.b]),i._14(4608,b.i,b.i,[d.b]),i._14(4608,a,a,[]),i._14(512,d.a,d.a,[]),i._14(1024,i.l,b.q,[]),i._14(1024,i.b,function(n,l){return[b.r(n,l)]},[[2,b.h],[2,i.y]]),i._14(512,i.c,i.c,[[2,i.b]]),i._14(131584,i._3,i._3,[i.z,i.X,i.r,i.l,i.i,i.c]),i._14(2048,i.e,null,[i._3]),i._14(512,i.d,i.d,[i.e]),i._14(512,b.a,b.a,[[3,b.a]]),i._14(512,c,c,[])])});r.production&&Object(i.R)(),Object(b.j)().bootstrapModuleFactory(m,{preserveWhitespaces:!1}).catch(function(n){return console.log(n)})},gFIY:function(n,l){function o(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}o.keys=function(){return[]},o.resolve=o,n.exports=o,o.id="gFIY"}},[0]);