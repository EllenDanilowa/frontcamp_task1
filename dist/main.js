!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,i){for(var a,s,c=0,l=[];c<r.length;c++)s=r[c],o[s]&&l.push.apply(l,o[s]),o[s]=0;for(a in i)e[a]=i[a];for(n&&n(r,i);l.length;)l.shift().call(null,t)};var r={},o={1:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+""+e+"."+({0:"app"}[e]||e)+".js",r.appendChild(i)}},t.m=e,t.c=r,t.p="./dist/",t(0)}({0:function(e,t,n){e.exports=n(117)},114:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},116:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=u[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));u[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],c=o[3],l={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function i(e,t){var n=v(),r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var i=b++;n=m||(m=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var u={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=u[s.id];c.refs--,i.push(c)}if(e){var l=o(e);r(l,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete u[c.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},117:function(e,t,n){"use strict";n(309),document.getElementById("load").addEventListener("click",function(){document.getElementById("load").style.display="none",n.e(0,function(e){var t=n(118),r=new t,o=r.getApiKey(),i=n(120),a=new i(o);if(o){n(308);var s=n(119),c=new s(o);c.load().then(function(e){a.renderArticles(e)}).catch(function(e){a.renderErrorMessage(e)})}else{var l="Missing api key in URL";a.renderErrorMessage(l)}})})},304:function(e,t,n){t=e.exports=n(114)(),t.push([e.id,".button,.error,.icon,.link,.site-content,.site-information-block,.site-primary-content,body{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}body{background-color:snow;font-family:Roboto Slab,serif}.site-information-block,.site-primary-content{padding:2px 20px;color:#fff}.site-primary-content{background-color:#5cc7b2}@media (max-width:960px){.site-primary-content{text-align:center}}.site-content{min-height:calc(100vh - 148px);margin:0 auto;text-align:center;width:860px}@media (max-width:960px){.site-content{width:620px}}@media (max-width:780px){.site-content{width:90%}}.site-information-block{background-color:#e6e6e6;color:#777;text-align:center}.button{background:#5cc7b2;border:none;color:#fff;padding:8px 12px;border-radius:3px;margin:12px;box-shadow:0 2px 16px rgba(0,0,0,.06)}.link{color:rgba(0,0,0,.44);text-decoration:none}.link:hover{color:rgba(0,0,0,.6)}.icon{color:#00ab6b}.error{background:#fbd2d3;border:2px solid #ed1c24;color:#ed1c24;padding:24px;margin:12px}",""])},309:function(e,t,n){var r=n(304);"string"==typeof r&&(r=[[e.id,r,""]]),n(116)(r,{}),r.locals&&(e.exports=r.locals)}});