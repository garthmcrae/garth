import n,{useEffect as e,useRef as r,useState as t,Fragment as o}from"react";function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}function d(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function c(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,o,a=[],i=!0,l=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return v(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function p(n,e){void 0===e&&(e={});var r=e.insertAt;if(n&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}var b="Sf-2-";p(".Sf-2- {\n  background: var(--background, white);\n  border-style: none;\n  box-shadow: 0 0 0 var(--border-width, 2px) transparent;\n  color: var(--color, black);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: var(--font-weight, 700);\n  outline: none;\n  padding: 0;\n  text-decoration: underline;\n  transition: var(--transition, background-color 200ms, border 200ms, box-shadow 200ms, color 200ms, outline 200ms, transform 200ms);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.Sf-2-:focus, .Sf-2-:hover {\n  background: var(--color, black);\n  box-shadow: 0 0 0 var(--border-width, 2px) var(--color, black);\n  color: var(--background, white);\n}");var u=["element"];function f(e){var r=e.element,t=void 0===r?"a":r,o=d(e,u);return n.createElement(t,s({className:b},o))}var h="_2mzx-";function x(e){return n.createElement("div",s({className:h},e))}p("._2mzx- {\n  border-color: var(--border-color, black);\n  border-radius: var(--border-radius, 0);\n  border-style: var(--border-style, solid);\n  border-width: var(--border-width, 2px);\n}");var m=["size","width"];function g(e){var r=e.size,t=void 0===r?20:r,o=e.width,a=void 0===o?2:o,i=d(e,m);return n.createElement("svg",s({style:{display:"block"},viewBox:"0 0 ".concat(t," ").concat(t),height:t,width:t},i),n.createElement("path",{d:"M0,0 L".concat(t,",0 L").concat(t,",").concat(a," L0,").concat(a,"z"),fill:"currentColor"}),n.createElement("path",{d:"M0,".concat(t/2+a/2," L").concat(t,",").concat(t/2+a/2," L").concat(t,",").concat(t/2-a/2," L0,").concat(t/2-a/2,"z"),fill:"currentColor"}),n.createElement("path",{d:"M0,".concat(t," L").concat(t,",").concat(t," L").concat(t,",").concat(t-a," L0,").concat(t-a,"z"),fill:"currentColor"}))}var w="_2s3nF";p("._2s3nF {\n  -webkit-appearance: none;\n          appearance: none;\n  background: var(--background, white);\n  border-color: var(--border-color, black);\n  border-radius: var(--border-radius, 0);\n  border-style: var(--border-style, solid);\n  border-width: var(--border-width, 2px);\n  box-shadow: var(--box-shadow, 4px 4px 0 0 currentColor);\n  box-sizing: border-box;\n  color: var(--color, black);\n  cursor: default;\n  display: block;\n  font-family: inherit;\n  font-size: var(--font-size, 16px);\n  font-weight: var(--font-weight, 700);\n  line-height: var(--line-height, 20px);\n  outline: none;\n  padding: var(--padding, 16px);\n  text-align: inherit;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  transform: var(--transform, translate(0, 0));\n  transition: var(--transition, background-color 200ms, border 200ms, box-shadow 200ms, color 200ms, outline 200ms, transform 200ms);\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  width: 100%;\n}\n._2s3nF:active, ._2s3nF:focus, ._2s3nF:hover {\n  box-shadow: var(--active-box-shadow, 8px 8px 0 0 currentColor);\n  transform: var(--active-transform, translate(-4px, -4px));\n}");var y=["element"];function k(e){var r=e.element,t=void 0===r?"button":r,o=d(e,y);return n.createElement(t,s({className:w},o))}var _={box:"_3cUk9","width-1":"_22LVI","width-2":"NJ1Cf","width-3":"xgVFj","width-4":"_3vai5","width-5":"_1Ilou","width-6":"qrf80","width-7":"_1k8h6","width-8":"UN0n1","width-9":"_161th","width-10":"_6kIl2","width-11":"_2JSK2",adaptive:"_3o4ON",assertive:"_3P4Ij",passive:"_2zsGe",fluid:"_3n5jz",solid:"_3tggD"};p("._3cUk9 {\n  box-sizing: border-box;\n  transition: margin var(--duration, 200ms), padding var(--duration, 200ms);\n}\n._3cUk9 > :first-child {\n  margin-top: 0;\n}\n._3cUk9 > :last-child {\n  margin-bottom: 0;\n}\n\n._22LVI {\n  flex-basis: 8.3333333333%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.NJ1Cf {\n  flex-basis: 16.6666666667%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.xgVFj {\n  flex-basis: 25%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n._3vai5 {\n  flex-basis: 33.3333333333%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n._1Ilou {\n  flex-basis: 41.6666666667%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.qrf80 {\n  flex-basis: 50%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n._1k8h6 {\n  flex-basis: 58.3333333333%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.UN0n1 {\n  flex-basis: 66.6666666667%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n._161th {\n  flex-basis: 75%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n._6kIl2 {\n  flex-basis: 83.3333333333%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n._2JSK2 {\n  flex-basis: 91.6666666667%;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n@media (max-width: 767px) {\n  ._3o4ON {\n    flex-basis: 100%;\n  }\n}\n\n._3P4Ij {\n  padding: var(--padding, 16px);\n}\n\n._2zsGe {\n  padding: 0;\n}\n\n._3n5jz {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n._3tggD {\n  flex-basis: 0;\n  flex-grow: 0;\n  flex-shrink: 0;\n}");var z=["adaptive","children","element","fluid","passive","solid","width"];function E(e){var r=e.adaptive,t=e.children,o=e.element,a=void 0===o?"div":o,i=e.fluid,l=e.passive,c=e.solid,v=e.width,p=d(e,z),b=[_.box];return r&&b.push(_.adaptive),i&&b.push(_.fluid),l?b.push(_.passive):b.push(_.assertive),c&&b.push(_.solid),v&&b.push(_["width-".concat(v)]),n.createElement(a,s({className:b.join(" ")},p),t)}var O="_1ZbA9",N="_18IB0";p('._1ZbA9 {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n\n._18IB0 {\n  background: var(--background, white);\n  border-color: var(--border-color, black);\n  border-radius: var(--border-radius, 0);\n  border-style: var(--border-style, solid);\n  border-width: var(--border-width, 2px);\n  box-shadow: var(--box-shadow, 4px 4px 0 0 currentColor);\n  box-sizing: border-box;\n  color: var(--color, black);\n  cursor: default;\n  display: block;\n  font-family: inherit;\n  font-size: var(--font-size, 16px);\n  font-weight: var(--font-weight, 700);\n  line-height: var(--line-height, 20px);\n  outline: none;\n  padding: var(--padding, 16px) var(--padding, 16px) var(--padding, 16px) calc(var(--padding, 16px) * 2 + var(--line-height, 20px));\n  text-align: left;\n  position: relative;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  transform: none;\n  transition: var(--transition, background-color 200ms, border 200ms, box-shadow 200ms, color 200ms, outline 200ms, transform 200ms);\n  -webkit-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n._18IB0::before {\n  border-color: currentColor;\n  border-style: var(--border-style, solid);\n  border-width: var(--border-width, 2px);\n  box-sizing: border-box;\n  content: "";\n  display: block;\n  height: var(--line-height, 20px);\n  left: var(--padding, 16px);\n  top: var(--padding, 16px);\n  position: absolute;\n  width: var(--line-height, 20px);\n}\n._18IB0:focus, ._18IB0:hover {\n  box-shadow: var(--active-box-shadow, 8px 8px 0 0 currentColor);\n  transform: var(--active-transform, translate(-4px, -4px));\n}\n\n._1ZbA9:checked + ._18IB0::before {\n  background: currentColor;\n}\n\n._1ZbA9:focus + ._18IB0 {\n  box-shadow: var(--active-box-shadow, 8px 8px 0 0 currentColor);\n  transform: var(--active-transform, translate(-4px, -4px));\n}');var S=["children","id","inputRef","name","type"];function j(e){var r=e.children,t=e.id,o=e.inputRef,a=e.name,i=e.type,l=d(e,S);return n.createElement("div",null,n.createElement("input",s({className:O,id:t,name:a,ref:o,type:i},l)),n.createElement("label",{className:N,htmlFor:t},r))}var I="_1vRkS";function C(e){return n.createElement("div",s({className:I},e))}p("._1vRkS {\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: 768px;\n  width: 100%;\n}");var L="_1USYe",P="dowj2",Y="uMT7b",U="ULOeM",A="iBhNF";function F(n,r){e((()=>{const e=e=>{n.current&&!n.current.contains(e.target)&&r(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[n,r])}function B(e){var o=e.children,a=e.controlStyle,i=void 0===a?{}:a,l=r(null),s=c(t(!1),2),d=s[0],v=s[1];return F(l,(function(){return v(!1)})),n.createElement("div",{className:"".concat(L," ").concat(d?U:A),ref:l},n.createElement("div",{className:P,style:i},n.createElement(k,{onClick:function(n){return v(!d)},type:"button"},n.createElement(g,null))),n.createElement("div",{className:Y},o))}function M(o){var a=o.children,l=o.duration,s=void 0===l?200:l,d=o.expand,v=c(t(0),2),p=v[0],b=v[1],u=r(null);e((function(){b(u.current.clientHeight);var n=function(){b(u.current.clientHeight)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[b]);var f={transition:"max-height ".concat(s,"ms ease-in-out ").concat(d?0:s,"ms")},h={transition:"opacity ".concat(s,"ms ease-in-out ").concat(d?s:0,"ms")};return n.createElement("div",{style:i({maxHeight:d?p:0,overflow:d?"visible":"hidden"},f)},n.createElement("div",{style:i({opacity:d?1:0},h)},n.createElement("div",{ref:u},a)))}p("._1USYe {\n  background: var(--background, white);\n  border-left-color: var(--border-color, black);\n  border-left-style: var(--border-style, solid);\n  border-left-width: var(--border-width, 2px);\n  bottom: 0;\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  transition: border-left-color var(--duration, 200ms) ease-in-out, right var(--duration, 200ms) ease-in-out;\n  width: var(--sidebar-width, 240px);\n}\n@media (min-width: 768px) {\n  ._1USYe {\n    background: transparent;\n    border-left-style: none;\n    position: relative;\n    width: auto;\n  }\n}\n\n.dowj2 {\n  bottom: calc(var(--margin, 32px) + 80px);\n  right: calc(var(--sidebar-width, 240px) + var(--padding, 16px));\n  position: absolute;\n}\n@media (min-width: 768px) {\n  .dowj2 {\n    display: none;\n  }\n}\n\n.uMT7b {\n  position: relative;\n}\n\n.ULOeM {\n  right: 0;\n  z-index: 2;\n}\n\n.iBhNF {\n  right: calc(var(--sidebar-width, 240px) * -1);\n  z-index: 1;\n}\n@media (min-width: 768px) {\n  .iBhNF {\n    right: 0;\n  }\n}");var D="mI8nS",J="_3I-5v",R="_3RAFq";p(".mI8nS {\n  align-items: stretch;\n  display: flex;\n  flex-direction: row;\n}\n\n._3I-5v {\n  flex-wrap: wrap;\n}\n\n._3RAFq {\n  list-style: none;\n}");var G=["element","wrap"];function q(e){var r=e.element,t=void 0===r?"div":r,o=e.wrap,a=d(e,G),i=[D];return o&&i.push(J),["ol","ul"].includes(t)&&i.push(R),n.createElement("div",s({className:i.join(" ")},a))}var T="u-GkP";p(".u-GkP {\n  -webkit-appearance: none;\n          appearance: none;\n  background: var(--background, white);\n  border-color: var(--border-color, black);\n  border-radius: var(--border-radius, 0);\n  border-style: var(--border-style, solid);\n  border-width: var(--border-width, 2px);\n  box-shadow: var(--box-shadow, 4px 4px 0 0 currentColor);\n  box-sizing: border-box;\n  color: var(--color, black);\n  cursor: default;\n  display: block;\n  font-family: var(--font-family, system-ui);\n  font-size: var(--font-size, 16px);\n  font-weight: var(--font-weight, 700);\n  line-height: var(--line-height, 20px);\n  outline: none;\n  padding: var(--padding, 16px);\n  text-align: left;\n  transform: none;\n  transition: var(--transition, background-color 200ms, border 200ms, box-shadow 200ms, color 200ms, outline 200ms, transform 200ms);\n  width: 100%;\n}\n.u-GkP:focus, .u-GkP:hover {\n  box-shadow: var(--active-box-shadow, 8px 8px 0 0 currentColor);\n  transform: var(--active-transform, translate(-4px, -4px));\n}\n.u-GkP::placeholder {\n  color: currentColor;\n}");var K=["inputRef"];function V(e){var r=e.inputRef,t=d(e,K);return n.createElement("input",s({className:T,ref:r},t))}var Z="_12921";function H(e){return n.createElement("label",s({className:Z},e))}p("._12921 {\n  display: block;\n  font-size: var(--font-size, 16px);\n  font-weight: var(--font-weight, 700);\n  line-height: var(--line-height, 20px);\n  margin: 0 0 calc(var(--margin, 32px) / 2);\n}");var X="_2i2MD";function $(e){return n.createElement("div",s({className:X},e))}p("._2i2MD {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: var(--padding, 16px);\n}\n._2i2MD > :last-child {\n  margin-top: auto;\n}");var Q="_2yy7l";p("._2yy7l {\n  font-size: var(--font-size, 16px);\n  font-weight: var(--font-weight, 700);\n  line-height: var(--line-height, 20px);\n  margin: var(--margin, 32px) 0;\n  transition: font-size var(--duration, 200ms), margin var(--duration, 200ms);\n}");var W=["element"];function nn(e){var r=e.element,t=void 0===r?"p":r,o=d(e,W);return n.createElement(t,s({className:Q},o))}var en="_1Xvb-";function rn(e){return n.createElement("div",s({className:en},e))}p("._1Xvb- {\n  background: var(--background, white);\n  color: var(--color, black);\n  font-size: var(--font-size, 16px);\n  font-size: var(--font-family, system-ui);\n  line-height: var(--line-height, 20px);\n  transition: background-color var(--duration, 200ms), color var(--duration, 200ms);\n}");var tn="_1bikY";function on(e){return n.createElement("hr",s({className:tn},e))}p("._1bikY {\n  border: none;\n  border-bottom: var(--border-color, black) var(--border-width, 2px) var(--border-style, solid);\n  margin: 0;\n}");var an="JAfwb",ln="_3n4Yw",sn="_3-nIL",dn="_2oqdI",cn="dUJCt";function vn(e){var t=r(null),a=c(n.useState(!1),2),i=a[0],l=a[1],d=c(n.useState(!1),2),v=d[0],p=d[1],b=c(n.useState(""),2),u=b[0],f=b[1],h=function(n){p(!1)},x=function(n){l(!i)},m=function(n){p(!0),f(n.target.value)},g=function(n){" "===n.key&&l(!i)};F(t,(function(){return l(!1)}));var w=e.disabled,y=e.name,k=void 0===y?"select":y,_=e.options,z=void 0===_?[]:_;return n.createElement("div",{id:k,className:an,ref:t},n.createElement("div",{className:"".concat(ln," ").concat(i?sn:cn," ").concat(v&&dn)},z.map((function(e,r){return n.createElement(o,{key:"".concat(k,"-").concat(r)},n.createElement("input",s({disabled:w,onBlur:h,onChange:m,onFocus:m,onKeyPress:g,id:"".concat(k,"-").concat(r),name:k,type:"radio",value:e.value,defaultChecked:e.value===u},e.props)),n.createElement("label",{htmlFor:"".concat(k,"-").concat(r),onClick:x},e.label))}))))}p('.JAfwb {\n  height: calc(var(--border-width, 2px) * 2 + var(--padding, 16px) * 2 + var(--line-height, 20px));\n  position: relative;\n  z-index: 1;\n}\n\n._3n4Yw {\n  -webkit-appearance: none;\n          appearance: none;\n  background: var(--background, white);\n  border-color: var(--border-color, black);\n  border-radius: var(--border-radius, 0);\n  border-style: var(--border-style, solid);\n  border-width: var(--border-width, 2px);\n  box-shadow: var(--box-shadow, 4px 4px 0 0 currentColor);\n  box-sizing: border-box;\n  color: var(--color, black);\n  display: block;\n  font-family: inherit;\n  font-size: var(--font-size, 16px);\n  font-weight: var(--font-weight, 700);\n  line-height: var(--line-height, 20px);\n  outline: none;\n  position: absolute;\n  text-align: left;\n  text-decoration: none;\n  transform: none;\n  transition: var(--transition, background-color 200ms, border 200ms, box-shadow 200ms, color 200ms, outline 200ms, transform 200ms);\n  -webkit-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n._3n4Yw._3-nIL, ._3n4Yw._2oqdI, ._3n4Yw:hover {\n  box-shadow: var(--active-box-shadow, 8px 8px 0 0 currentColor);\n  transform: var(--active-transform, translate(-4px, -4px));\n}\n\n._3n4Yw > input {\n  -webkit-appearance: none;\n          appearance: none;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n}\n\n._3n4Yw > label {\n  box-sizing: box-sizing;\n  display: block;\n  overflow: hidden;\n  padding: var(--padding, 16px) calc(var(--padding, 16px) * 2 + var(--font-size, 16px) / 0.866) var(--padding, 16px) var(--padding, 16px);\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n\n._3n4Yw.dUJCt > label {\n  display: none;\n}\n\n._3n4Yw._3-nIL > label {\n  box-sizing: box-sizing;\n  font-family: inherit;\n  font-size: var(--font-size, 16px);\n  font-weight: var(--font-weight, 700);\n  line-height: var(--line-height, 20px);\n  padding: var(--padding, 16px) var(--padding, 16px) var(--padding, 16px) calc(var(--padding, 16px) * 2 + calc(var(--font-size, 16px) * 0.866) / 0.866);\n  text-align: left;\n}\n\n._3n4Yw.dUJCt > input:checked + label {\n  display: block;\n}\n._3n4Yw.dUJCt > input:checked + label::after {\n  border-color: var(--color, black) transparent transparent transparent;\n  border-style: solid;\n  border-width: var(--font-size, 16px) calc(var(--font-size, 16px) / 0.866 / 2) 0 calc(var(--font-size, 16px) / 0.866 / 2);\n  box-sizing: border-box;\n  content: "";\n  display: block;\n  height: var(--font-size, 16px);\n  position: absolute;\n  right: var(--padding, 16px);\n  top: calc(var(--padding, 16px) + var(--line-height, 20px) / 2 - var(--font-size, 16px) / 2);\n  width: var(--font-size, 16px);\n  z-index: 1;\n}\n\n._3n4Yw._3-nIL > input:focus + label,\n._3n4Yw._3-nIL > input:checked + label {\n  position: relative;\n}\n._3n4Yw._3-nIL > input:focus + label::before,\n._3n4Yw._3-nIL > input:checked + label::before {\n  border-color: transparent transparent transparent var(--color, black);\n  border-style: solid;\n  border-width: calc(var(--font-size, 16px) / 2) 0 calc(var(--font-size, 16px) / 2) calc(var(--font-size, 16px) * 0.866);\n  box-sizing: border-box;\n  content: "";\n  display: block;\n  height: var(--font-size, 16px);\n  left: var(--padding, 16px);\n  top: calc(var(--padding, 16px) + var(--line-height, 20px) / 2 - var(--font-size, 16px) / 2);\n  position: absolute;\n  width: var(--font-size, 16px);\n  z-index: 1;\n}');var pn="fUups",bn="_35hS2";function un(e){return n.createElement("div",{className:pn},n.createElement("table",s({className:bn},e)))}p(".fUups {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n._35hS2 {\n  border-color: var(--border-color, black);\n  border-radius: var(--border-radius, 0);\n  border-style: var(--border-style, solid);\n  border-width: var(--border-width, 2px);\n  border-collapse: separate;\n  border-spacing: var(--border-width, 2px);\n  font-size: var(--font-size, 16px);\n  font-weight: var(--font-weight, 700);\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  width: 100%;\n}\n._35hS2 > thead > tr > th {\n  background: var(--color, black);\n  border-color: var(--color, black);\n  border-radius: var(--border-radius, 0);\n  border-style: var(--border-style, solid);\n  border-width: var(--border-width, 2px);\n  color: var(--background, white);\n  font-weight: var(--font-weight, 700);\n  padding: var(--padding, 16px);\n  vertical-align: top;\n}\n._35hS2 > tbody > tr > td {\n  border-color: var(--border-color, black);\n  border-radius: var(--border-radius, 0);\n  border-style: var(--border-style, solid);\n  border-width: var(--border-width, 2px);\n  padding: var(--padding, 16px);\n  vertical-align: top;\n}\n._35hS2 > caption {\n  caption-side: bottom;\n  margin-top: var(--margin, 32px);\n  text-align: left;\n}");var fn="_2sMKD";p("._2sMKD {\n  font-size: calc(var(--font-size, 16px) * 2);\n  font-weight: var(--font-weight, 700);\n  line-height: calc(var(--line-height, 20px) * 2);\n  margin: var(--margin, 32px) 0;\n  transition: font-size var(--duration, 200ms), margin var(--duration, 200ms);\n}");var hn=["element"];function xn(e){var r=e.element,t=void 0===r?"h2":r,o=d(e,hn);return n.createElement(t,s({className:fn},o))}export{f as Anchor,x as Border,E as Box,g as Burger,k as Button,j as Checkable,C as Container,B as Draw,M as Expand,q as Flex,V as Input,H as Label,$ as Layout,nn as Paragraph,rn as Root,on as Rule,vn as Select,un as Table,xn as Title};
//# sourceMappingURL=bundle.esm.js.map
