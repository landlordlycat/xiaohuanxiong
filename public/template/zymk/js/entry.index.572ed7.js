!function(e){function t(t){for(var r,l,u=t[0],f=t[1],a=t[2],s=0,p=[];s<u.length;s++)l=u[s],i[l]&&p.push(i[l][0]),i[l]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);for(c&&c(t);p.length;)p.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var f=n[u];0!==i[f]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={17:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var c=f;o.push([16,0]),n()}({16:function(e,t,n){e.exports=n("jWzL")},jWzL:function(e,t,n){"use strict";(function(e){n("5oY/"),n("0OJv");var t=n("OKuY");function r(t,n){var r=e(window).width();r<=960?r=960:r>=1920&&(r=1920);e(t).height(r*(560/1920)),"function"==typeof n&&n()}e(".superSlide").slide({titCell:".hd ul",mainCell:".bd ul",prevCell:".ift-prev",nextCell:".ift-next",titOnClassName:"active",effect:"leftLoop",interTime:5e3,vis:"auto",scroll:1,autoPlay:!0,autoPage:"<li></li>",trigger:"click"}).hover(function(){e(this).find(".ift-prev,.ift-next").show()},function(){e(this).find(".ift-prev,.ift-next").hide()});var i=e(".slider-horizontal"),o=e(".superSlide.full-screen ul");r(o),(0,t.setComicHorizontalSize)(i),e(window).resize(function(){r(o),(0,t.setComicHorizontalSize)(i)})}).call(this,n("+2Rf"))}});