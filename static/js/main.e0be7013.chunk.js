(this.webpackJsonprpg=this.webpackJsonprpg||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e(1),i=e.n(a),o=e(5),c=e.n(o);e(4);function u(t){var n=t.image,e=t.data,a=t.position,i=e.y,o=e.x,c=e.h,u=e.w;return Object(r.jsx)("div",{style:{position:"absolute",top:a.y,left:a.x,height:"".concat(c,"px"),width:"".concat(u,"px"),backgroundImage:"".concat(n),backgroundRepeat:"no-repeat",backgroundPosition:"-".concat(o,"px -").concat(i,"px")}})}function s(t){var n=t.sprite,e=t.data,a=t.position,i=void 0===a?{x:0,y:0}:a,o=t.step,c=void 0===o?0:o,s=t.dir,p=void 0===s?0:s,d=e.h,f=e.w;return Object(r.jsx)(u,{image:n,position:i,data:{x:c*f,y:p*d,w:f,h:d}})}var p=e(2);function d(t,n,e){var r=Object(a.useState)({x:0,y:0}),i=Object(p.a)(r,2),o=i[0],c=i[1],u=Object(a.useState)(0),s=Object(p.a)(u,2),d=s[0],f=s[1],h=Object(a.useState)(0),g=Object(p.a)(h,2),j=g[0],x=g[1],b={down:0,left:1,right:2,up:3},l={down:{x:0,y:16},left:{x:-16,y:0},right:{x:16,y:0},up:{x:0,y:-16}};function w(t,n){return t<=0?0:t>=n?n:t}return{walk:function(r){f((function(t){return b[r]===t&&function(t){c((function(r){return{x:w(r.x+l[t].x,n-32),y:w(r.y+l[t].y,e-32)}}))}(r),b[r]})),x((function(n){return n<t-1?n+1:0}))},dir:d,step:j,position:o}}function f(t){var n,e=t.skin,i=d(3,t.arenaWidth,t.arenaHeight),o=i.dir,c=i.step,u=i.walk,p=i.position;return n=function(t){var n=t.key;n.startsWith("Arrow")&&(u(n.replace("Arrow","").toLowerCase()),t.preventDefault())},Object(a.useEffect)((function(){return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[n]),Object(r.jsx)(s,{sprite:"url(".concat("/rpg/"+e,")"),data:{h:32,w:32},step:c,dir:o,position:p})}function h(t){var n=t.skin,e=d(3,t.arenaWidth,t.arenaHeight),i=e.dir,o=e.step,c=e.walk,u=e.position;return Object(a.useEffect)((function(){var t=setInterval((function(){var t=Math.floor(4*Math.random())+0;c(["left","up","down","right"][t])}),500);return function(){return clearInterval(t)}}),[c]),Object(r.jsx)(s,{sprite:"url(".concat("/rpg/"+n,")"),data:{h:32,w:32},step:o,dir:i,position:u})}function g(t){var n=t.color,e=t.arenaWidth,a=t.arenaHeight,i=t.protags,o=t.antags;return Object(r.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",position:"relative",backgroundColor:"".concat(n),width:"".concat(e,"px"),height:"".concat(a,"px")},children:[i.map((function(t){return Object(r.jsx)(f,{skin:t,arenaWidth:e,arenaHeight:a})})),o.map((function(t){return Object(r.jsx)(h,{skin:t,arenaWidth:e,arenaHeight:a})}))]})}function j(){return Object(r.jsx)(g,{color:"green",arenaWidth:320,arenaHeight:568,protags:["f1.png"],antags:["e1.png"]})}c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root"))},4:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.e0be7013.chunk.js.map