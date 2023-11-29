(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"* {\n    border: 1px solid black;\n    margin: 0;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#homeTab:hover,\n#menuTab:hover,\n#contactTab:hover {\n    cursor: pointer;\n}\n\n.menu {\n    font-size: 1.2rem;\n}\n\n\n.content {\n    flex: 1;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    font-size: 1.5rem;\n    max-width: 800px;\n}\n\n.name {\n    font-size: 5rem;\n}\n\nfooter {\n    display: flex;\n}\n\nfooter > * {\n    flex: 1;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],u=a[s]||0,l="".concat(s," ").concat(u);a[s]=u+1;var m=n(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),d=n.n(c),s=n(216),u=n.n(s),l=n(589),m=n.n(l),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v=function(){document.getElementById("content").innerHTML="";const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),u=document.createElement("div"),l=document.createElement("div");e.classList.add("content"),t.classList.add("name"),n.classList.add("copy"),o.classList.add("hours"),l.classList.add("location"),t.textContent="My Restaurant",n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",r.textContent="Sunday: 8am - 8pm",a.textContent="Monday: 6am - 6pm",i.textContent="Tuesday: 6am - 6pm",c.textContent="Wednesday: 6am - 6pm",d.textContent="Thursday: 6am - 10pm",s.textContent="Friday: 6am - 10pm",u.textContent="Saturday: 8am - 10pm",o.append(r,a,i,c,d,s,u),e.append(t,n,o),content.append(e)};v(),document.getElementById("content");const y=document.getElementById("homeTab"),h=document.getElementById("menuTab"),x=document.getElementById("contactTab");y.addEventListener("click",v),h.addEventListener("click",(function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.classList.add("giant"),t.textContent="burger: $20. fries: $50. drink: nope.",e.appendChild(t)})),x.addEventListener("click",(function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.classList.add("contact"),t.textContent="do NOT try to contact me.",e.appendChild(t)}))})()})();