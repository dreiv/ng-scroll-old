webpackJsonp([1],{0:function(n,o,l){n.exports=l("cDNt")},cDNt:function(n,o,l){"use strict";function t(n){return i._17(0,[(n()(),i._16(null,["\n      "])),(n()(),i._3(0,null,null,1,"button",[],null,[[null,"click"]],function(n,o,l){var t=!0,u=n.component;if("click"===o){t=!1!=(u.isOverflowing=!u.isOverflowing)&&t}return t},null,null)),(n()(),i._16(null,["Toggle Overflow"])),(n()(),i._16(null,["\n      "])),(n()(),i._3(0,null,null,1,"h1",[["class","fixed"]],null,null,null,null,null)),(n()(),i._16(null,["",""])),(n()(),i._16(null,["\n  "]))],null,function(n,o){n(o,5,0,o.component.scrollLog)})}function u(n){return i._17(0,[(n()(),i._3(0,null,null,1,"app-root",[],[[2,"isOverflowing",null]],null,null,t,d)),i._1(114688,null,0,f,[_],null,null)],function(n,o){n(o,1,0)},function(n,o){n(o,0,0,i._14(o,1).isOverflowing)})}Object.defineProperty(o,"__esModule",{value:!0});var i=l("/oeL"),r={production:!0},e=function(){function n(){}return n}(),c=l("Dqrr"),s={Up:"up",Down:"down"},_=function(){function n(){var n=this;this.previousPosition=-999,this.onScroll$=c.Observable.fromEvent(window,"scroll").debounceTime(100).map(function(){var o=document.scrollingElement.scrollTop,l=o>n.previousPosition?s.Down:s.Up;return n.previousPosition=o,l}).distinctUntilChanged()}return n.ctorParameters=function(){return[]},n}(),f=function(){function n(n){this.window$=n,this.isOverflowing=!0,this.scrollLog="scroll"}return n.prototype.ngOnInit=function(){var n=this;this.window$.onScroll$.subscribe(function(o){n.scrollLog="scrolling "+o})},n.ctorParameters=function(){return[{type:_}]},n}(),a=[".isOverflowing[_nghost-%COMP%] {\n       display: block;\n       height: 60em;\n       background: #def;\n   }\n   \n   .fixed[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    background: wheat;\n   }"],d=i._0({encapsulation:0,styles:a,data:{}}),p=i.Y("app-root",f,u,{},{},[]),b=l("qbdv"),g=l("fc+i"),v=i.Z(e,[f],function(n){return i._12([i._13(512,i.i,i.W,[[8,[p]],[3,i.i],i.x]),i._13(5120,i.v,i._11,[[3,i.v]]),i._13(4608,b.d,b.c,[i.v]),i._13(4608,i.h,i.h,[]),i._13(5120,i.a,i._4,[]),i._13(5120,i.t,i._9,[]),i._13(5120,i.u,i._10,[]),i._13(4608,g.b,g.s,[b.b]),i._13(6144,i.H,null,[g.b]),i._13(4608,g.e,g.f,[]),i._13(5120,g.c,function(n,o,l,t){return[new g.k(n),new g.o(o),new g.n(l,t)]},[b.b,b.b,b.b,g.e]),i._13(4608,g.d,g.d,[g.c,i.z]),i._13(135680,g.m,g.m,[b.b]),i._13(4608,g.l,g.l,[g.d,g.m]),i._13(6144,i.F,null,[g.l]),i._13(6144,g.p,null,[g.m]),i._13(4608,i.L,i.L,[i.z]),i._13(4608,g.g,g.g,[b.b]),i._13(4608,g.i,g.i,[b.b]),i._13(4608,_,_,[]),i._13(512,b.a,b.a,[]),i._13(1024,i.l,g.q,[]),i._13(1024,i.b,function(n,o){return[g.r(n,o)]},[[2,g.h],[2,i.y]]),i._13(512,i.c,i.c,[[2,i.b]]),i._13(131584,i._2,i._2,[i.z,i.X,i.r,i.l,i.i,i.c]),i._13(2048,i.e,null,[i._2]),i._13(512,i.d,i.d,[i.e]),i._13(512,g.a,g.a,[[3,g.a]]),i._13(512,e,e,[])])});r.production&&Object(i.R)(),Object(g.j)().bootstrapModuleFactory(v).catch(function(n){return console.log(n)})},gFIY:function(n,o){function l(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="gFIY"}},[0]);