var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("iQIUW");function l(e,t){const r=Math.random()>.3;new Promise(((e,o)=>{setTimeout((()=>{r?e():o()}),t)})).then((()=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((()=>{n.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}({formEl:document.querySelector(".form"),delayEl:document.querySelector('[name="delay"]')}).formEl.addEventListener("submit",(function(e){e.preventDefault();const t={delay:Number(e.target.delay.value),step:Number(e.target.step.value),amount:Number(e.target.amount.value)};for(let e=0;e<t.amount;e++)l(e,t.delay),t.delay+=t.step}));
//# sourceMappingURL=03-promises.f95d02c2.js.map