(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{10:function(e,t,n){},19:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),s=n.n(o),i=(n(24),n(8)),c=(n(10),n(5));var l=function(){var e={color:"rgb(53, 124, 124)",textDecoration:"none",fontFamily:"Helvetica"};return r.a.createElement("nav",null,r.a.createElement(c.b,{style:e,to:"/"},r.a.createElement("i",{className:"fas fa-chess-board fa-4x"})),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(c.b,{style:e,to:"/Play"},r.a.createElement("li",null,"Play")),r.a.createElement(c.b,{style:e,to:"/settings"},r.a.createElement("li",null,"Settigns"))))};function u(e,t){return Math.abs(e.x-e.y)+Math.abs(t.x-t.y)}var h=function(e,t){var n=[],a=[],r=[],o=[];n.push(e);for(var s=function(){for(var e=0,s=0;s<n.length;s++)n[s].f<n[e].f&&(e=s);var i=n[e];if(o.push(i),i===t){var c=i;for(r.push(c);c.previous;)r.push(c.previous),c=c.previous;return{v:{path:r,visitedNodes:o}}}n=n.filter((function(e){return e!==i})),a.push(i);for(var l=i.neighbours,h=0;h<l.length;h++){var m=l[h];if(!a.includes(m)&&!m.isWall){var f=i.g+1,v=!1;n.includes(m)?f<m.g&&(m.g=f,v=!0):(m.g=f,v=!0,n.push(m)),v&&(m.h=u(m,t),m.f=m.g+m.f,m.previous=i)}}};n.length>0;){var i=s();if("object"===typeof i)return i.v}return{path:r,visitedNodes:o,error:"No path found!"}},m=(n(30),function(e){var t=e.isStart,n=e.isEnd,a=e.row,o=e.col,s=e.isWall,i=t?"node-start":s?"iswall":n?"node-end":"";return r.a.createElement("div",{className:"node ".concat(i),id:"node=".concat(a,"-").concat(o)})}),f=(n(31),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)([]),l=Object(i.a)(s,2),u=l[0],f=l[1],v=Object(a.useState)([]),d=Object(i.a)(v,2),E=d[0],p=d[1];Object(a.useEffect)((function(){b()}),[]);var b=function(){for(var e=new Array(10),t=0;t<10;t++)e[t]=new Array(10);g(e),o(e),y(e);var n=e[4][0],a=e[4][9],r=h(n,a);n.isWall=!1,a.isWall=!1,f(r.path),p(r.visitedNodes)},g=function(e){for(var t=0;t<10;t++)for(var n=0;n<10;n++)e[t][n]=new w(t,n)},y=function(e){for(var t=0;t<10;t++)for(var n=0;n<10;n++)e[t][n].addneighbours(e)};function w(e,t){this.x=e,this.y=t,this.isStart=4===this.x&&0===this.y,this.isEnd=4===this.x&&9===this.y,this.g=0,this.f=0,this.h=0,this.neighbours=[],this.isWall=!1,Math.random(1)<.2&&(this.isWall=!0),this.previous=void 0,this.addneighbours=function(e){var t=this.x,n=this.y;t>0&&this.neighbours.push(e[t-1][n]),t<9&&this.neighbours.push(e[t+1][n]),n>0&&this.neighbours.push(e[t][n-1]),n<9&&this.neighbours.push(e[t][n+1])}}var N=r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement("div",{key:t,className:"row-wrapper"},e.map((function(e,n){var a=e.isStart,o=e.isEnd,s=e.isWall;return r.a.createElement(m,{key:n,isStart:a,isEnd:o,row:t,col:n,isWall:s})})))})));return console.log(u),r.a.createElement("div",{className:"wrapper"},r.a.createElement("button",{className:"run-btn",onClick:function(){for(var e=function(e){e===E.length?setTimeout((function(){!function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node=".concat(n.x,"-").concat(n.y)).className="node node-shortest-path"}),10*t)},n=0;n<e.length;n++)t(n)}(u)}),20*e):setTimeout((function(){var t=E[e];document.getElementById("node=".concat(t.x,"-").concat(t.y)).className="node node-visited"}),20*e)},t=0;t<=E.length;t++)e(t)}},"Run"),r.a.createElement(c.b,{to:"/"},r.a.createElement("button",{className:"run-btn"},"End Game")),r.a.createElement("div",{style:{margin:"20px"}},N))}),v=function(){return r.a.createElement("div",null,r.a.createElement(f,null))};var d=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"settings"))},E=n(1);var p=function(e){e.setStructure;return r.a.createElement("div",{className:"homepage"},r.a.createElement("div",null,r.a.createElement("h1",null,"The ",r.a.createElement("span",null,"Maze")," Runner"),r.a.createElement(c.b,{to:"/Play"},r.a.createElement("button",{className:"play-btn"}," Play!"))))},b=function(){var e=Object(a.useState)(5),t=Object(i.a)(e,2),n=t[0],o=t[1];return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(l,null),r.a.createElement(E.a,{path:"/",setStructure:o,exact:!0,render:function(){return r.a.createElement(p,{setStructure:o})}}),r.a.createElement(E.a,{path:"/settings",component:d}),r.a.createElement(E.a,{path:"/play",render:function(){return r.a.createElement(v,{structure:n})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.017521ce.chunk.js.map