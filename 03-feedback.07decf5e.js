!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,r,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function w(e){return c=e,f=setTimeout(S,t),s?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function S(){var e=p();if(O(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function T(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function h(){var e=p(),n=O(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return w(l);if(d)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},h.flush=function(){return void 0===f?a:T(p())},h}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};var w=document.querySelector('input[name="email"]'),O=document.querySelector('textarea[name="message"]'),S=document.querySelector("form");console.log(S);var T="feedback-form-state",h={email:"",message:""};S.addEventListener("input",e(t)((function(e){h.email=w.value,h.message=O.value,localStorage.setItem(T,JSON.stringify(h))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),w.value="",O.value="",e.currentTarget.reset()})),window.onload=function(){var e=localStorage.getItem(T),t=JSON.parse(e);console.log(t),t?(w.value=t.email,O.value=t.message):(w.value="",O.value="")}}();
//# sourceMappingURL=03-feedback.07decf5e.js.map
