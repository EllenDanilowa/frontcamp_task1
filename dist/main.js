!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r=window.webpackJsonp;window.webpackJsonp=function(n,o){for(var s,a,u=0,c=[];u<n.length;u++)a=n[u],i[a]&&c.push.apply(c,i[a]),i[a]=0;for(s in o)t[s]=o[s];for(r&&r(n,o);c.length;)c.shift().call(null,e)};var n={},i={1:0};return e.e=function(t,r){if(0===i[t])return r.call(null,e);if(void 0!==i[t])i[t].push(r);else{i[t]=[r];var n=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=e.p+""+t+"."+({0:"app"}[t]||t)+".js",n.appendChild(o)}},e.m=t,e.c=n,e.p="./dist/",e(0)}({0:function(t,e,r){t.exports=r(121)},86:function(t,e){t.exports={apiLink:"https://newsapi.org/v1/articles?source=bbc-news",apiKeyParamName:"apiKey",errorMessages:{notExistApiKey:"Missing api key in URL"}}},87:function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function t(e){r(this,t),this.message=e};t.exports=n},117:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},118:function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function o(t){if(l===clearTimeout)return clearTimeout(t);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){y&&p&&(y=!1,p.length?d=p.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=i(s);y=!0;for(var e=d.length;e;){for(p=d,d=[];++m<e;)p&&p[m].run();m=-1,e=d.length}p=null,y=!1,o(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(t){l=n}}();var p,d=[],y=!1,m=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new u(t,e)),1!==d.length||y||i(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},119:function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=p[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(c(n.parts[o],e))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(c(n.parts[o],e));p[n.id]={id:n.id,refs:1,parts:s}}}}function i(t){for(var e=[],r={},n=0;n<t.length;n++){var i=t[n],o=i[0],s=i[1],a=i[2],u=i[3],c={css:s,media:a,sourceMap:u};r[o]?r[o].parts.push(c):e.push(r[o]={id:o,parts:[c]})}return e}function o(t,e){var r=m(),n=w[w.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function c(t,e){var r,n,i;if(e.singleton){var o=v++;r=b||(b=a(e)),n=f.bind(null,r,o,!1),i=f.bind(null,r,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(e),n=h.bind(null,r),i=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),n=l.bind(null,r),i=function(){s(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}function f(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function l(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function h(t,e){var r=e.css,n=e.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([r],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},y=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,w=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=y()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=i(t);return n(r,e),function(t){for(var o=[],s=0;s<r.length;s++){var a=r[s],u=p[a.id];u.refs--,o.push(u)}if(t){var c=i(t);n(c,e)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete p[u.id]}}}};var _=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},120:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=r(86),o=function(){function t(){n(this,t)}return t.prototype.initialize=function(){var t=this;document.getElementById("load").addEventListener("click",function(){document.getElementById("load").classList.add("hidden"),r.e(0,function(e){var n=r(127),i=new n;t.renderArticles(i)})})},t.prototype.renderArticles=function(t){var e=this.getApiKey();if(e)r(315),this.getArticles(e,t);else{var n=r(87),o=new n(i.errorMessages.notExistApiKey);this.renderErrorBlock(t,o)}},t.prototype.getApiKey=function(){var t=r(123),e=new t,n=e.getApiKey();return n},t.prototype.getArticles=function(t,e){var n=this,i=r(124),o=new i(t);o.loadArticles().then(function(t){n.renderArticleBlock(e,t)}).catch(function(t){n.renderErrorBlock(e,t)})},t.prototype.renderArticleBlock=function(t,e){t.execute({requestInfo:"renderArticles",data:e})},t.prototype.renderErrorBlock=function(t,e){t.execute({requestInfo:"renderError",data:e})},t}();t.exports=o},121:function(t,e,r){"use strict";r(316);var n=r(120),i=new n;i.initialize()},122:function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function t(e){r(this,t),this.author=e.author,this.description=e.description,this.publishedAt=e.publishedAt,this.title=e.title,this.url=e.url,this.urlToImage=e.urlToImage};t.exports=n},123:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=r(86),o=function(){function t(){n(this,t)}return t.prototype.getApiKey=function(){var t=window.location.search.substring(1).split("="),e=void 0;return t&&t[0]===i.apiKeyParamName&&(e=t[1]),e},t}();t.exports=o},124:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();r(312).polyfill(),r(313);var o=r(86),s=r(122),a=r(87),u=function(){function t(e){n(this,t),this.link=o.apiLink,this.apiKey=e}return t.prototype.loadArticles=function(){return fetch(new Request(this.requestLink),{method:"GET",mode:"cors"}).then(function(t){return t.json()}).then(function(t){return t.articles.map(function(t){return new s(t)})}).catch(function(t){return new a(t)})},i(t,[{key:"requestLink",get:function(){return this.link+"&apiKey="+this.apiKey}}]),t}();t.exports=u},310:function(t,e,r){e=t.exports=r(117)(),e.push([t.id,".article-list,.article-list__item,.article-list__item__additional-information,.article-list__item__description,.article-list__item__image,.article-list__item__link,.article-list__item__title{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.article-list{margin:0 auto}@media (max-width:960px){.article-list{width:100%}}.article-list__item{margin:12px 0;padding:28px;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.06);border:1px solid rgba(0,0,0,.09);text-align:left}.article-list__item__title{margin-bottom:8px;font-size:1.5em;font-weight:700}.article-list__item__image{width:100%;height:420px;margin-bottom:8px}@media (max-width:960px){.article-list__item__image{height:306px}}@media (max-width:480px){.article-list__item__image{height:150px}}.article-list__item__description{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-bottom:8px;font-size:.9rem}.article-list__item__additional-information{margin-top:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.article-list__item__link{font-size:.8rem}",""])},311:function(t,e,r){e=t.exports=r(117)(),e.push([t.id,".button,.error,.hidden,.icon,.link,.site-content,.site-header,.site-header__logo,.site-information,.site-information__api,body{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}body{background-color:snow;font-family:Roboto Slab,serif}.site-header,.site-information{padding:20px;color:#fff}.site-header{background-color:#5cc7b2}@media (max-width:960px){.site-header{text-align:center}}.site-header__logo{font-size:1.8em}.site-content{min-height:calc(100vh - 140px);margin:0 auto;text-align:center;width:860px}@media (max-width:960px){.site-content{width:620px}}@media (max-width:780px){.site-content{width:90%}}.site-information{background-color:#e6e6e6;color:#777;text-align:center}.site-information__api{font-size:.9rem}.button{background:#5cc7b2;border:none;color:#fff;padding:8px 12px;border-radius:3px;margin:12px;box-shadow:0 2px 16px rgba(0,0,0,.06)}.link{color:rgba(0,0,0,.44);text-decoration:none}.link:hover{color:rgba(0,0,0,.6)}.icon{color:#00ab6b}.error{background:#fbd2d3;border:2px solid #ed1c24;color:#ed1c24;padding:24px;margin:12px}.hidden{display:none}",""])},312:function(t,e,r){(function(e,n){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */
!function(e,r){t.exports=r()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function i(t){return"function"==typeof t}function o(t){X=t}function s(t){W=t}function a(){return function(){return e.nextTick(h)}}function u(){return"undefined"!=typeof V?function(){V(h)}:l()}function c(){var t=0,e=new Z(h),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function f(){var t=new MessageChannel;return t.port1.onmessage=h,function(){return t.port2.postMessage(0)}}function l(){var t=setTimeout;return function(){return t(h,1)}}function h(){for(var t=0;t<Y;t+=2){var e=rt[t],r=rt[t+1];e(r),rt[t]=void 0,rt[t+1]=void 0}Y=0}function p(){try{var t=r(318);return V=t.runOnLoop||t.runOnContext,u()}catch(t){return l()}}function d(t,e){var r=arguments,n=this,i=new this.constructor(m);void 0===i[it]&&C(i);var o=n._state;return o?!function(){var t=r[o-1];W(function(){return L(o,i,t,n._result)})}():j(n,i,t,e),i}function y(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(m);return T(r,t),r}function m(){}function b(){return new TypeError("You cannot resolve a promise with itself")}function v(){return new TypeError("A promises callback cannot return that same promise.")}function w(t){try{return t.then}catch(t){return ut.error=t,ut}}function _(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function g(t,e,r){W(function(t){var n=!1,i=_(r,e,function(r){n||(n=!0,e!==r?T(t,r):B(t,r))},function(e){n||(n=!0,k(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&i&&(n=!0,k(t,i))},t)}function x(t,e){e._state===st?B(t,e._result):e._state===at?k(t,e._result):j(e,void 0,function(e){return T(t,e)},function(e){return k(t,e)})}function A(t,e,r){e.constructor===t.constructor&&r===d&&e.constructor.resolve===y?x(t,e):r===ut?k(t,ut.error):void 0===r?B(t,e):i(r)?g(t,e,r):B(t,e)}function T(e,r){e===r?k(e,b()):t(r)?A(e,r,w(r)):B(e,r)}function E(t){t._onerror&&t._onerror(t._result),U(t)}function B(t,e){t._state===ot&&(t._result=e,t._state=st,0!==t._subscribers.length&&W(U,t))}function k(t,e){t._state===ot&&(t._state=at,t._result=e,W(E,t))}function j(t,e,r,n){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+st]=r,i[o+at]=n,0===o&&t._state&&W(U,t)}function U(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,i=void 0,o=t._result,s=0;s<e.length;s+=3)n=e[s],i=e[s+r],n?L(r,n,i,o):i(o);t._subscribers.length=0}}function P(){this.error=null}function S(t,e){try{return t(e)}catch(t){return ct.error=t,ct}}function L(t,e,r,n){var o=i(r),s=void 0,a=void 0,u=void 0,c=void 0;if(o){if(s=S(r,n),s===ct?(c=!0,a=s.error,s=null):u=!0,e===s)return void k(e,v())}else s=n,u=!0;e._state!==ot||(o&&u?T(e,s):c?k(e,a):t===st?B(e,s):t===at&&k(e,s))}function R(t,e){try{e(function(e){T(t,e)},function(e){k(t,e)})}catch(e){k(t,e)}}function O(){return ft++}function C(t){t[it]=ft++,t._state=void 0,t._result=void 0,t._subscribers=[]}function I(t,e){this._instanceConstructor=t,this.promise=new t(m),this.promise[it]||C(this.promise),J(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&B(this.promise,this._result))):k(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function M(t){return new I(this,t).promise}function F(t){var e=this;return new e(J(t)?function(r,n){for(var i=t.length,o=0;o<i;o++)e.resolve(t[o]).then(r,n)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function N(t){var e=this,r=new e(m);return k(r,t),r}function K(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(t){this[it]=O(),this._result=this._state=void 0,this._subscribers=[],m!==t&&("function"!=typeof t&&K(),this instanceof z?R(this,t):q())}function H(){var t=void 0;if("undefined"!=typeof n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=z}var G=void 0;G=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var J=G,Y=0,V=void 0,X=void 0,W=function(t,e){rt[Y]=t,rt[Y+1]=e,Y+=2,2===Y&&(X?X(h):nt())},$="undefined"!=typeof window?window:void 0,Q=$||{},Z=Q.MutationObserver||Q.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof e&&"[object process]"==={}.toString.call(e),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3),nt=void 0;nt=tt?a():Z?c():et?f():void 0===$?p():l();var it=Math.random().toString(36).substring(16),ot=void 0,st=1,at=2,ut=new P,ct=new P,ft=0;return I.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===ot&&r<t;r++)this._eachEntry(e[r],r)},I.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===y){var i=w(t);if(i===d&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(r===z){var o=new r(m);A(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},I.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===ot&&(this._remaining--,t===at?k(n,r):this._result[e]=r),0===this._remaining&&B(n,this._result)},I.prototype._willSettleAt=function(t,e){var r=this;j(t,void 0,function(t){return r._settledAt(st,e,t)},function(t){return r._settledAt(at,e,t)})},z.all=M,z.race=F,z.resolve=y,z.reject=N,z._setScheduler=o,z._setAsap=s,z._asap=W,z.prototype={constructor:z,then:d,catch:function(t){return this.then(null,t)}},z.polyfill=H,z.Promise=z,z})}).call(e,r(118),function(){return this}())},313:function(t,e,r){r(317),t.exports=self.fetch.bind(self)},315:function(t,e,r){var n=r(310);"string"==typeof n&&(n=[[t.id,n,""]]),r(119)(n,{}),n.locals&&(t.exports=n.locals)},316:function(t,e,r){var n=r(311);"string"==typeof n&&(n=[[t.id,n,""]]),r(119)(n,{}),n.locals&&(t.exports=n.locals)},317:function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function o(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function s(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader,r=s(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=s(e);return e.readAsText(t),r}function c(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&w(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!_(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?o(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return g.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if("string"==typeof t)this.url=t;else{if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(i))}}),e}function y(t){var e=new i;return t.split("\r\n").forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var i=r.join(":").trim();e.append(n,i)}}),e}function m(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},_=ArrayBuffer.isView||function(t){return t&&v.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,n){t=e(t),n=r(n);var i=this.map[t];this.map[t]=i?i+","+n:n},i.prototype.delete=function(t){delete this.map[e(t)]},i.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},i.prototype.set=function(t,n){this.map[e(t)]=r(n)},i.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},b.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},l.call(p.prototype),l.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];m.redirect=function(t,e){if(x.indexOf(e)===-1)throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.Headers=i,t.Request=p,t.Response=m,t.fetch=function(t,e){return new Promise(function(r,n){var i=new p(t,e),o=new XMLHttpRequest;o.onload=function(){var t={status:o.status,statusText:o.statusText,headers:y(o.getAllResponseHeaders()||"")};t.url="responseURL"in o?o.responseURL:t.headers.get("X-Request-URL");var e="response"in o?o.response:o.responseText;r(new m(e,t))},o.onerror=function(){n(new TypeError("Network request failed"))},o.ontimeout=function(){n(new TypeError("Network request failed"))},o.open(i.method,i.url,!0),"include"===i.credentials&&(o.withCredentials=!0),"responseType"in o&&b.blob&&(o.responseType="blob"),i.headers.forEach(function(t,e){o.setRequestHeader(e,t)}),o.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},318:function(t,e){}});