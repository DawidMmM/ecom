import "../css/nouislider.scss";

/*! nouislider - 14.1.0 - 12/4/2019 */
!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";var lt="14.1.0";function ut(t){t.parentElement.removeChild(t)}function s(t){return null!=t}function ct(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function pt(t,e,r){0<r&&(ht(t,e),setTimeout(function(){mt(t,e)},r))}function ft(t){return Math.max(Math.min(t,100),0)}function dt(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function ht(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function mt(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function gt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function c(t,e){return 100/(e-t)}function p(t,e){return 100*e/(t[1]-t[0])}function f(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n,i,o=f(r,t),a=t[o-1],s=t[o],l=e[o-1],u=e[o];return l+(i=r,p(n=[a,s],n[0]<0?i+Math.abs(n[0]):i-n[0])/c(l,u))}function n(t,e,r,n){if(100===n)return n;var i,o,a=f(n,t),s=t[a-1],l=t[a];return r?(l-s)/2<n-s?l:s:e[a-1]?t[a-1]+(i=n-t[a-1],o=e[a-1],Math.round(i/o)*o):n}function o(t,e,r){var n;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' contains invalid value.");if(!i(n="min"===t?0:"max"===t?100:parseFloat(t))||!i(e[0]))throw new Error("noUiSlider ("+lt+"): 'range' value isn't numeric.");r.xPct.push(n),r.xVal.push(e[0]),n?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function a(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=p([r.xVal[t],r.xVal[t+1]],e)/c(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function l(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)o(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)a(n,this.xNumSteps[n],this)}l.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider ("+lt+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&p(this.xVal,t)},l.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},l.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=f(r,e),o=t[i-1],a=t[i],s=e[i-1],l=e[i];return n=[o,a],(r-s)*c(s,l)*(n[1]-n[0])/100+n[0]}(this.xVal,this.xPct,t)},l.prototype.getStep=function(t){return t=n(this.xPct,this.xSteps,this.snap,t)},l.prototype.getDefaultStep=function(t,e,r){var n=f(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},l.prototype.getNearbySteps=function(t){var e=f(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},l.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},l.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var u={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function d(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+lt+"): 'format' requires 'to' and 'from' methods.")}function h(t,e){if(!i(e))throw new Error("noUiSlider ("+lt+"): 'step' is not numeric.");t.singleStep=e}function m(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+lt+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+lt+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new l(e,t.snap,t.singleStep)}function g(t,e){if(e=dt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+lt+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function v(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+lt+"): 'snap' option must be a boolean.")}function b(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+lt+"): 'animate' option must be a boolean.")}function S(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+lt+"): 'animationDuration' option must be a number.")}function x(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+lt+"): 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+lt+"): 'orientation' option is invalid.")}}function y(t,e){if(!i(e))throw new Error("noUiSlider ("+lt+"): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider ("+lt+"): 'margin' option is only supported on linear sliders.")}function E(t,e){if(!i(e))throw new Error("noUiSlider ("+lt+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+lt+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){if(Array.isArray(e)||(e=[e,e]),!(t.padding=[t.spectrum.getMargin(e[0]),t.spectrum.getMargin(e[1])])===t.padding[0]||!1===t.padding[1])throw new Error("noUiSlider ("+lt+"): 'padding' option is only supported on linear sliders.");if(t.padding[0]<0||t.padding[1]<0)throw new Error("noUiSlider ("+lt+"): 'padding' option must be a positive number(s).");if(100<t.padding[0]+t.padding[1])throw new Error("noUiSlider ("+lt+"): 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+lt+"): 'direction' option was not recognized.")}}function U(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),a=0<=e.indexOf("hover"),s=0<=e.indexOf("unconstrained");if(i){if(2!==t.handles)throw new Error("noUiSlider ("+lt+"): 'fixed' behaviour must be used with 2 handles");y(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider ("+lt+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,fixed:i,snap:o,hover:a,unconstrained:s}}function P(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=dt(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+lt+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+lt+"): 'tooltips' must be passed a formatter or 'false'.")})}}function V(t,e){d(t.ariaFormat=e)}function k(t,e){d(t.format=e)}function A(t,e){if("boolean"!=typeof(t.keyboardSupport=e))throw new Error("noUiSlider ("+lt+"): 'keyboardSupport' option must be a boolean.")}function M(t,e){t.documentElement=e}function O(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+lt+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function L(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function vt(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:u,format:u},n={step:{r:!1,t:h},start:{r:!0,t:g},connect:{r:!0,t:x},direction:{r:!0,t:N},snap:{r:!1,t:v},animate:{r:!1,t:b},animationDuration:{r:!1,t:S},range:{r:!0,t:m},orientation:{r:!1,t:w},margin:{r:!1,t:y},limit:{r:!1,t:E},padding:{r:!1,t:C},behaviour:{r:!0,t:U},ariaFormat:{r:!1,t:V},format:{r:!1,t:k},tooltips:{r:!1,t:P},keyboardSupport:{r:!0,t:A},documentElement:{r:!1,t:M},cssPrefix:{r:!0,t:O},cssClasses:{r:!0,t:L}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(!s(e[t])&&void 0===i[t]){if(n[t].r)throw new Error("noUiSlider ("+lt+"): '"+t+"' is required.");return!0}n[t].t(r,s(e[t])?e[t]:i[t])}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,a=void 0!==t.style.transform;r.transformRule=a?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function D(t,v,o){var l,u,a,c,i,s,e,p,f=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},d=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),h=t,y=v.spectrum,b=[],S=[],m=[],g=0,x={},w=t.ownerDocument,E=v.documentElement||w.documentElement,C=w.body,N=-1,U=0,P=1,V=2,k="rtl"===w.dir||1===v.ort?0:100;function A(t,e){var r=w.createElement("div");return e&&ht(r,e),t.appendChild(r),r}function M(t,e){var r=A(t,v.cssClasses.origin),n=A(r,v.cssClasses.handle);return A(n,v.cssClasses.touchArea),n.setAttribute("data-handle",e),v.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(L()||D(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];v.dir&&!v.ort?r.reverse():v.ort&&!v.dir&&(n.reverse(),i.reverse());var a,s=t.key.replace("Arrow",""),l=s===i[0],u=s===i[1],c=s===n[0]||s===r[0]||l,p=s===n[1]||s===r[1]||u,f=s===o[0],d=s===o[1];if(!(c||p||f||d))return!0;if(t.preventDefault(),p||c){var h=c?0:1,m=st(e),g=m[h];if(null===g)return!1;!1===g&&(g=y.getDefaultStep(S[e],c,10)),(u||l)&&(g*=5),g=Math.max(g,1e-7),g*=c?-1:1,a=b[e]+g}else a=d?v.spectrum.xVal[v.spectrum.xVal.length-1]:v.spectrum.xVal[0];return rt(e,y.toStepping(a),!0,!0),J("slide",e),J("update",e),J("change",e),J("set",e),!1}(t,e)})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",v.ort?"vertical":"horizontal"),0===e?ht(n,v.cssClasses.handleLower):e===v.handles-1&&ht(n,v.cssClasses.handleUpper),r}function O(t,e){return!!e&&A(t,v.cssClasses.connect)}function r(t,e){return!!v.tooltips[e]&&A(t.firstChild,v.cssClasses.tooltip)}function L(){return h.hasAttribute("disabled")}function D(t){return u[t].hasAttribute("disabled")}function z(){i&&(G("update.tooltips"),i.forEach(function(t){t&&ut(t)}),i=null)}function H(){z(),i=u.map(r),$("update.tooltips",function(t,e,r){if(i[e]){var n=t[e];!0!==v.tooltips[e]&&(n=v.tooltips[e].to(r[e])),i[e].innerHTML=n}})}function j(e,i,o){var a=w.createElement("div"),s=[];s[U]=v.cssClasses.valueNormal,s[P]=v.cssClasses.valueLarge,s[V]=v.cssClasses.valueSub;var l=[];l[U]=v.cssClasses.markerNormal,l[P]=v.cssClasses.markerLarge,l[V]=v.cssClasses.markerSub;var u=[v.cssClasses.valueHorizontal,v.cssClasses.valueVertical],c=[v.cssClasses.markerHorizontal,v.cssClasses.markerVertical];function p(t,e){var r=e===v.cssClasses.value,n=r?s:l;return e+" "+(r?u:c)[v.ort]+" "+n[t]}return ht(a,v.cssClasses.pips),ht(a,0===v.ort?v.cssClasses.pipsHorizontal:v.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e,r){if((r=i?i(e,r):r)!==N){var n=A(a,!1);n.className=p(r,v.cssClasses.marker),n.style[v.style]=t+"%",U<r&&((n=A(a,!1)).className=p(r,v.cssClasses.value),n.setAttribute("data-value",e),n.style[v.style]=t+"%",n.innerHTML=o.to(e))}}(t,e[t][0],e[t][1])}),a}function F(){c&&(ut(c),c=null)}function R(t){F();var m,g,v,b,e,r,S,x,w,n=t.mode,i=t.density||1,o=t.filter||!1,a=function(t,e,r){if("range"===t||"steps"===t)return y.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+lt+"): 'values' (>= 2) required for mode 'count'.");var n=e-1,i=100/n;for(e=[];n--;)e[n]=n*i;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return y.fromStepping(r?y.getStep(t):t)}):"values"===t?r?e.map(function(t){return y.fromStepping(y.getStep(y.toStepping(t)))}):e:void 0}(n,t.values||!1,t.stepped||!1),s=(m=i,g=n,v=a,b={},e=y.xVal[0],r=y.xVal[y.xVal.length-1],x=S=!1,w=0,(v=v.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(v.unshift(e),S=!0),v[v.length-1]!==r&&(v.push(r),x=!0),v.forEach(function(t,e){var r,n,i,o,a,s,l,u,c,p,f=t,d=v[e+1],h="steps"===g;if(h&&(r=y.xNumSteps[e]),r||(r=d-f),!1!==f&&void 0!==d)for(r=Math.max(r,1e-7),n=f;n<=d;n=(n+r).toFixed(7)/1){for(u=(a=(o=y.toStepping(n))-w)/m,p=a/(c=Math.round(u)),i=1;i<=c;i+=1)b[(s=w+i*p).toFixed(5)]=[y.fromStepping(s),0];l=-1<v.indexOf(n)?P:h?V:U,!e&&S&&(l=0),n===d&&x||(b[o.toFixed(5)]=[n,l]),w=o}}),b),l=t.format||{to:Math.round};return c=h.appendChild(j(s,o,l))}function T(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][v.ort];return 0===v.ort?t.width||l[e]:t.height||l[e]}function B(n,i,o,a){var e=function(t){return!!(t=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(s=!0);if(o){var l=function(t){return t.target===r||r.contains(t.target)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(1<u.length)return!1;n=u[0].pageX,i=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;n=c.pageX,i=c.pageY}}e=e||gt(w),(a||s)&&(n=t.clientX+e.x,i=t.clientY+e.y);return t.pageOffset=e,t.points=[n,i],t.cursor=a||s,t}(t,a.pageOffset,a.target||i))&&(!(L()&&!a.doNotReject)&&(e=h,r=v.cssClasses.tap,!((e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!a.doNotReject)&&(!(n===f.start&&void 0!==t.buttons&&1<t.buttons)&&((!a.hover||!t.buttons)&&(d||t.preventDefault(),t.calcPoint=t.points[v.ort],void o(t,a))))));var e,r},r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!d&&{passive:!0}),r.push([t,e])}),r}function q(t){var e,r,n,i,o,a,s=100*(t-(e=l,r=v.ort,n=e.getBoundingClientRect(),i=e.ownerDocument,o=i.documentElement,a=gt(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(a.x=0),r?n.top+a.y-o.clientTop:n.left+a.x-o.clientLeft))/T();return s=ft(s),v.dir?100-s:s}function X(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function Y(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);var r=(v.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Z(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function _(t,e){e.handle&&(mt(e.handle,v.cssClasses.active),g-=1),e.listeners.forEach(function(t){E.removeEventListener(t[0],t[1])}),0===g&&(mt(h,v.cssClasses.drag),et(),t.cursor&&(C.style.cursor="",C.removeEventListener("selectstart",ct))),e.handleNumbers.forEach(function(t){J("change",t),J("set",t),J("end",t)})}function I(t,e){if(e.handleNumbers.some(D))return!1;var r;1===e.handleNumbers.length&&(r=u[e.handleNumbers[0]].children[0],g+=1,ht(r,v.cssClasses.active));t.stopPropagation();var n=[],i=B(f.move,E,Y,{target:t.target,handle:r,listeners:n,startCalcPoint:t.calcPoint,baseSize:T(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:S.slice()}),o=B(f.end,E,_,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),a=B("mouseout",E,X,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,i.concat(o,a)),t.cursor&&(C.style.cursor=getComputedStyle(t.target).cursor,1<u.length&&ht(h,v.cssClasses.drag),C.addEventListener("selectstart",ct,!1)),e.handleNumbers.forEach(function(t){J("start",t)})}function n(t){t.stopPropagation();var i,o,a,e=q(t.calcPoint),r=(i=e,a=!(o=100),u.forEach(function(t,e){if(!D(e)){var r=S[e],n=Math.abs(r-i);(n<o||n<=o&&r<i||100===n&&100===o)&&(a=e,o=n)}}),a);if(!1===r)return!1;v.events.snap||pt(h,v.cssClasses.tap,v.animationDuration),rt(r,e,!0,!0),et(),J("slide",r,!0),J("update",r,!0),J("change",r,!0),J("set",r,!0),v.events.snap&&I(t,{handleNumbers:[r]})}function W(t){var e=q(t.calcPoint),r=y.getStep(e),n=y.fromStepping(r);Object.keys(x).forEach(function(t){"hover"===t.split(".")[0]&&x[t].forEach(function(t){t.call(s,n)})})}function $(t,e){x[t]=x[t]||[],x[t].push(e),"update"===t.split(".")[0]&&u.forEach(function(t,e){J("update",e)})}function G(t){var n=t&&t.split(".")[0],i=n&&t.substring(n.length);Object.keys(x).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||delete x[t]})}function J(r,n,i){Object.keys(x).forEach(function(t){var e=t.split(".")[0];r===e&&x[t].forEach(function(t){t.call(s,b.map(v.format.to),n,b.slice(),i||!1,S.slice())})})}function K(t,e,r,n,i,o){return 1<u.length&&!v.events.unconstrained&&(n&&0<e&&(r=Math.max(r,t[e-1]+v.margin)),i&&e<u.length-1&&(r=Math.min(r,t[e+1]-v.margin))),1<u.length&&v.limit&&(n&&0<e&&(r=Math.min(r,t[e-1]+v.limit)),i&&e<u.length-1&&(r=Math.max(r,t[e+1]-v.limit))),v.padding&&(0===e&&(r=Math.max(r,v.padding[0])),e===u.length-1&&(r=Math.min(r,100-v.padding[1]))),!((r=ft(r=y.getStep(r)))===t[e]&&!o)&&r}function Q(t,e){var r=v.ort;return(r?e:t)+", "+(r?t:e)}function Z(t,n,r,e){var i=r.slice(),o=[!t,t],a=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var r=K(i,t,i[t]+n,o[e],a[e],!1);!1===r?n=0:(n=r-i[t],i[t]=r)}):o=a=[!0];var s=!1;e.forEach(function(t,e){s=rt(t,r[t]+n,o[e],a[e])||s}),s&&e.forEach(function(t){J("update",t),J("slide",t)})}function tt(t,e){return v.dir?100-t-e:t}function et(){m.forEach(function(t){var e=50<S[t]?-1:1,r=3+(u.length+e*t);u[t].style.zIndex=r})}function rt(t,e,r,n){return!1!==(e=K(S,t,e,r,n,!1))&&(function(t,e){S[t]=e,b[t]=y.fromStepping(e);var r="translate("+Q(10*(tt(e,0)-k)+"%","0")+")";u[t].style[v.transformRule]=r,nt(t),nt(t+1)}(t,e),!0)}function nt(t){if(a[t]){var e=0,r=100;0!==t&&(e=S[t-1]),t!==a.length-1&&(r=S[t]);var n=r-e,i="translate("+Q(tt(e,n)+"%","0")+")",o="scale("+Q(n/100,"1")+")";a[t].style[v.transformRule]=i+" "+o}}function it(t,e){return null===t||!1===t||void 0===t?S[e]:("number"==typeof t&&(t=String(t)),t=v.format.from(t),!1===(t=y.toStepping(t))||isNaN(t)?S[e]:t)}function ot(t,e){var r=dt(t),n=void 0===S[0];e=void 0===e||!!e,v.animate&&!n&&pt(h,v.cssClasses.tap,v.animationDuration),m.forEach(function(t){rt(t,it(r[t],t),!0,!1)});for(var i=1===m.length?0:1;i<m.length;++i)m.forEach(function(t){rt(t,S[t],!0,!0)});et(),m.forEach(function(t){J("update",t),null!==r[t]&&e&&J("set",t)})}function at(){var t=b.map(v.format.to);return 1===t.length?t[0]:t}function st(t){var e=S[t],r=y.getNearbySteps(e),n=b[t],i=r.thisStep.step,o=null;if(v.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),o=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(o=null);var a=y.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(a))),null!==o&&!1!==o&&(o=Number(o.toFixed(a))),[o,i]}return ht(e=h,v.cssClasses.target),0===v.dir?ht(e,v.cssClasses.ltr):ht(e,v.cssClasses.rtl),0===v.ort?ht(e,v.cssClasses.horizontal):ht(e,v.cssClasses.vertical),ht(e,"ltr"===getComputedStyle(e).direction?v.cssClasses.textDirectionLtr:v.cssClasses.textDirectionRtl),l=A(e,v.cssClasses.base),function(t,e){var r=A(e,v.cssClasses.connects);u=[],(a=[]).push(O(r,t[0]));for(var n=0;n<v.handles;n++)u.push(M(e,n)),m[n]=n,a.push(O(r,t[n+1]))}(v.connect,l),(p=v.events).fixed||u.forEach(function(t,e){B(f.start,t.children[0],I,{handleNumbers:[e]})}),p.tap&&B(f.start,l,n,{}),p.hover&&B(f.move,l,W,{hover:!0}),p.drag&&a.forEach(function(t,e){if(!1!==t&&0!==e&&e!==a.length-1){var r=u[e-1],n=u[e],i=[t];ht(t,v.cssClasses.draggable),p.fixed&&(i.push(r.children[0]),i.push(n.children[0])),i.forEach(function(t){B(f.start,t,I,{handles:[r,n],handleNumbers:[e-1,e]})})}}),ot(v.start),v.pips&&R(v.pips),v.tooltips&&H(),$("update",function(t,e,a,r,s){m.forEach(function(t){var e=u[t],r=K(S,t,0,!0,!0,!0),n=K(S,t,100,!0,!0,!0),i=s[t],o=v.ariaFormat.to(a[t]);r=y.fromStepping(r).toFixed(1),n=y.fromStepping(n).toFixed(1),i=y.fromStepping(i).toFixed(1),e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",o)})}),s={destroy:function(){for(var t in v.cssClasses)v.cssClasses.hasOwnProperty(t)&&mt(h,v.cssClasses[t]);for(;h.firstChild;)h.removeChild(h.firstChild);delete h.noUiSlider},steps:function(){return m.map(st)},on:$,off:G,get:at,set:ot,setHandle:function(t,e,r){if(!(0<=(t=Number(t))&&t<m.length))throw new Error("noUiSlider ("+lt+"): invalid handle number, got: "+t);rt(t,it(e,t),!0,!0),J("update",t),r&&J("set",t)},reset:function(t){ot(v.start,t)},__moveHandles:function(t,e,r){Z(t,e,S,r)},options:o,updateOptions:function(e,t){var r=at(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=vt(o);n.forEach(function(t){void 0!==e[t]&&(v[t]=i[t])}),y=i.spectrum,v.margin=i.margin,v.limit=i.limit,v.padding=i.padding,v.pips?R(v.pips):F(),v.tooltips?H():z(),S=[],ot(e.start||r,t)},target:h,removePips:F,removeTooltips:z,pips:R}}return{__spectrum:l,version:lt,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+lt+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+lt+"): Slider was already initialized.");var r=D(t,vt(e),e);return t.noUiSlider=r}}});

(function (factory) {

    if ( typeof define === 'function' && define.amd ) {

        // AMD. Register as an anonymous module.
        define([], factory);

    } else if ( typeof exports === 'object' ) {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.wNumb = factory();
    }

}(function(){

	'use strict';

var FormatOptions = [
	'decimals',
	'thousand',
	'mark',
	'prefix',
	'suffix',
	'encoder',
	'decoder',
	'negativeBefore',
	'negative',
	'edit',
	'undo'
];

// General

	// Reverse a string
	function strReverse ( a ) {
		return a.split('').reverse().join('');
	}

	// Check if a string starts with a specified prefix.
	function strStartsWith ( input, match ) {
		return input.substring(0, match.length) === match;
	}

	// Check is a string ends in a specified suffix.
	function strEndsWith ( input, match ) {
		return input.slice(-1 * match.length) === match;
	}

	// Throw an error if formatting options are incompatible.
	function throwEqualError( F, a, b ) {
		if ( (F[a] || F[b]) && (F[a] === F[b]) ) {
			throw new Error(a);
		}
	}

	// Check if a number is finite and not NaN
	function isValidNumber ( input ) {
		return typeof input === 'number' && isFinite( input );
	}

	// Provide rounding-accurate toFixed method.
	// Borrowed: http://stackoverflow.com/a/21323330/775265
	function toFixed ( value, exp ) {
		value = value.toString().split('e');
		value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
		value = value.toString().split('e');
		return (+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp))).toFixed(exp);
	}


// Formatting

	// Accept a number as input, output formatted string.
	function formatTo ( decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input ) {

		var originalInput = input, inputIsNegative, inputPieces, inputBase, inputDecimals = '', output = '';

		// Apply user encoder to the input.
		// Expected outcome: number.
		if ( encoder ) {
			input = encoder(input);
		}

		// Stop if no valid number was provided, the number is infinite or NaN.
		if ( !isValidNumber(input) ) {
			return false;
		}

		// Rounding away decimals might cause a value of -0
		// when using very small ranges. Remove those cases.
		if ( decimals !== false && parseFloat(input.toFixed(decimals)) === 0 ) {
			input = 0;
		}

		// Formatting is done on absolute numbers,
		// decorated by an optional negative symbol.
		if ( input < 0 ) {
			inputIsNegative = true;
			input = Math.abs(input);
		}

		// Reduce the number of decimals to the specified option.
		if ( decimals !== false ) {
			input = toFixed( input, decimals );
		}

		// Transform the number into a string, so it can be split.
		input = input.toString();

		// Break the number on the decimal separator.
		if ( input.indexOf('.') !== -1 ) {
			inputPieces = input.split('.');

			inputBase = inputPieces[0];

			if ( mark ) {
				inputDecimals = mark + inputPieces[1];
			}

		} else {

		// If it isn't split, the entire number will do.
			inputBase = input;
		}

		// Group numbers in sets of three.
		if ( thousand ) {
			inputBase = strReverse(inputBase).match(/.{1,3}/g);
			inputBase = strReverse(inputBase.join( strReverse( thousand ) ));
		}

		// If the number is negative, prefix with negation symbol.
		if ( inputIsNegative && negativeBefore ) {
			output += negativeBefore;
		}

		// Prefix the number
		if ( prefix ) {
			output += prefix;
		}

		// Normal negative option comes after the prefix. Defaults to '-'.
		if ( inputIsNegative && negative ) {
			output += negative;
		}

		// Append the actual number.
		output += inputBase;
		output += inputDecimals;

		// Apply the suffix.
		if ( suffix ) {
			output += suffix;
		}

		// Run the output through a user-specified post-formatter.
		if ( edit ) {
			output = edit ( output, originalInput );
		}

		// All done.
		return output;
	}

	// Accept a sting as input, output decoded number.
	function formatFrom ( decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input ) {

		var originalInput = input, inputIsNegative, output = '';

		// User defined pre-decoder. Result must be a non empty string.
		if ( undo ) {
			input = undo(input);
		}

		// Test the input. Can't be empty.
		if ( !input || typeof input !== 'string' ) {
			return false;
		}

		// If the string starts with the negativeBefore value: remove it.
		// Remember is was there, the number is negative.
		if ( negativeBefore && strStartsWith(input, negativeBefore) ) {
			input = input.replace(negativeBefore, '');
			inputIsNegative = true;
		}

		// Repeat the same procedure for the prefix.
		if ( prefix && strStartsWith(input, prefix) ) {
			input = input.replace(prefix, '');
		}

		// And again for negative.
		if ( negative && strStartsWith(input, negative) ) {
			input = input.replace(negative, '');
			inputIsNegative = true;
		}

		// Remove the suffix.
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
		if ( suffix && strEndsWith(input, suffix) ) {
			input = input.slice(0, -1 * suffix.length);
		}

		// Remove the thousand grouping.
		if ( thousand ) {
			input = input.split(thousand).join('');
		}

		// Set the decimal separator back to period.
		if ( mark ) {
			input = input.replace(mark, '.');
		}

		// Prepend the negative symbol.
		if ( inputIsNegative ) {
			output += '-';
		}

		// Add the number
		output += input;

		// Trim all non-numeric characters (allow '.' and '-');
		output = output.replace(/[^0-9\.\-.]/g, '');

		// The value contains no parse-able number.
		if ( output === '' ) {
			return false;
		}

		// Covert to number.
		output = Number(output);

		// Run the user-specified post-decoder.
		if ( decoder ) {
			output = decoder(output);
		}

		// Check is the output is valid, otherwise: return false.
		if ( !isValidNumber(output) ) {
			return false;
		}

		return output;
	}


// Framework

	// Validate formatting options
	function validate ( inputOptions ) {

		var i, optionName, optionValue,
			filteredOptions = {};

		if ( inputOptions['suffix'] === undefined ) {
			inputOptions['suffix'] = inputOptions['postfix'];
		}

		for ( i = 0; i < FormatOptions.length; i+=1 ) {

			optionName = FormatOptions[i];
			optionValue = inputOptions[optionName];

			if ( optionValue === undefined ) {

				// Only default if negativeBefore isn't set.
				if ( optionName === 'negative' && !filteredOptions.negativeBefore ) {
					filteredOptions[optionName] = '-';
				// Don't set a default for mark when 'thousand' is set.
				} else if ( optionName === 'mark' && filteredOptions.thousand !== '.' ) {
					filteredOptions[optionName] = '.';
				} else {
					filteredOptions[optionName] = false;
				}

			// Floating points in JS are stable up to 7 decimals.
			} else if ( optionName === 'decimals' ) {
				if ( optionValue >= 0 && optionValue < 8 ) {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

			// These options, when provided, must be functions.
			} else if ( optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo' ) {
				if ( typeof optionValue === 'function' ) {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

			// Other options are strings.
			} else {

				if ( typeof optionValue === 'string' ) {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}
			}
		}

		// Some values can't be extracted from a
		// string if certain combinations are present.
		throwEqualError(filteredOptions, 'mark', 'thousand');
		throwEqualError(filteredOptions, 'prefix', 'negative');
		throwEqualError(filteredOptions, 'prefix', 'negativeBefore');

		return filteredOptions;
	}

	// Pass all options as function arguments
	function passAll ( options, method, input ) {
		var i, args = [];

		// Add all options in order of FormatOptions
		for ( i = 0; i < FormatOptions.length; i+=1 ) {
			args.push(options[FormatOptions[i]]);
		}

		// Append the input, then call the method, presenting all
		// options as arguments.
		args.push(input);
		return method.apply('', args);
	}

	function wNumb ( options ) {

		if ( !(this instanceof wNumb) ) {
			return new wNumb ( options );
		}

		if ( typeof options !== "object" ) {
			return;
		}

		options = validate(options);

		// Call 'formatTo' with proper arguments.
		this.to = function ( input ) {
			return passAll(options, formatTo, input);
		};

		// Call 'formatFrom' with proper arguments.
		this.from = function ( input ) {
			return passAll(options, formatFrom, input);
		};
	}

	return wNumb;

}));

var slider = document.getElementById('slider');
var snapValues = [
    document.getElementById('slider-snap-value-lower'),
    document.getElementById('slider-snap-value-upper')
];

noUiSlider.create(slider, {
	start: [0, 10],
    format: wNumb({
        decimals: 3,
        prefix: '$'
    }),
	range: {
		min: [0],
		max: [10]
	}
});

slider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].innerHTML = values[handle];
});

snapValues[0].textContent = "$" + 0;
