/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${n}`);class o{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],o=document.createTreeWalker(t.content,133,null,!1);let l=0,d=-1,u=0;const{strings:p,values:{length:g}}=e;for(;u<g;){const e=o.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)a(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=p[u],s=h.exec(t)[2],i=s.toLowerCase()+"$lit$",n=e.getAttribute(i);e.removeAttribute(i);const o=n.split(r);this.parts.push({type:"attribute",index:d,name:s,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,n=t.split(r),o=n.length-1;for(let t=0;t<o;t++){let s,r=n[t];if(""===r)s=c();else{const e=h.exec(r);null!==e&&a(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(r)}i.insertBefore(s,e),this.parts.push({type:"node",index:++d})}""===n[o]?(i.insertBefore(c(),e),s.push(e)):e.data=n[o],u+=o}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&d!==l||(d++,t.insertBefore(c(),e)),l=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(s.push(e),d--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const a=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(e,t){const{element:{content:s},parts:i}=e,n=document.createTreeWalker(s,133,null,!1);let r=p(i),o=i[r],a=-1,l=0;const c=[];let h=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,r=p(i,r),o=i[r]}c.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},p=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(l(t))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=new WeakMap,m=e=>"function"==typeof e&&g.has(e),f={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,o=0,a=0,c=n.nextNode();for(;o<i.length;)if(r=i[o],l(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(s.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=s.pop(),c=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${i} `;class b{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===e.indexOf("--\x3e",o+1);const a=h.exec(e);t+=null===a?e+(s?v:n):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(w(e)||!S(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||w(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}const e=this.__pendingValue;e!==f&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const n of e)s=t[i],void 0===s&&(s=new P(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(n),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=f}}class N extends x{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends k{}let M=!1;(()=>{try{const e={get capture(){return M=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class ${constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=E(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const E=e=>e&&(M?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(i);return s=t.keyString.get(n),void 0===s&&(s=new o(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,A=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,s,i){const n=t[0];if("."===n){return new N(e,t.slice(1),s).parts}if("@"===n)return[new $(e,t.slice(1),i.eventContext)];if("?"===n)return[new C(e,t.slice(1),s)];return new x(e,t,s).parts}handleTextExpression(e){return new P(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const j=(e,...t)=>new b(e,t,"html",D)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,z=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const Y=e=>t=>{const s=z(t.type,e);let n=V.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(s,n));let r=n.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(i);if(r=n.keyString.get(a),void 0===r){const s=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(s,e),r=new o(t,s),n.keyString.set(a,r)}return n.stringsArray.set(t.strings,r),r},R=["html","svg"],H=new Set,q=(e,t,s)=>{H.add(e);const i=s?s.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{R.forEach(t=>{const s=V.get(z(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),d(e,s)})})})(e);const a=i.content;s?function(e,t,s=null){const{element:{content:i},parts:n}=e;if(null==s)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let o=p(n),a=0,l=-1;for(;r.nextNode();){l++;for(r.currentNode===s&&(a=u(t),s.parentNode.insertBefore(t,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=p(n,o);return}o=p(n,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),d(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const I={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),L={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:F};class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=L){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||L}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=F){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||I,n="function"==typeof i?i:i.fromAttribute;return n?n(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||I.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=L){const i=this.constructor,n=i._attributeNameForProperty(e,s);if(void 0!==n){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const i=this.constructor,n=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const B=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),J=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(s){s.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function Z(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):J(e,t)}const K=(e,t,s)=>{Object.defineProperty(t,s,e)},G=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,Q="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class ee{constructor(e,t){if(t!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new ee(s,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const se={};class ie extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),i=[];s.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==se&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return se}}ie.finalized=!0,ie.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,r=A.has(t),o=U&&11===t.nodeType&&!!t.host,a=o&&!H.has(n),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let n=A.get(t);void 0===n&&(s(t,t.firstChild),A.set(t,n=new P(Object.assign({templateFactory:O},i))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:Y(n)},i)),a){const e=A.get(l);A.delete(l);const i=e.value instanceof y?e.value.template:void 0;q(n,l,i),s(t,t.firstChild),t.appendChild(l),A.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)};var ne=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,re="[^\\s]+",oe=/\[([^]*?)\]/gm;function ae(e,t){for(var s=[],i=0,n=e.length;i<n;i++)s.push(e[i].substr(0,t));return s}var le=function(e){return function(t,s){var i=s[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return i>-1?i:null}};function ce(e){for(var t=[],s=1;s<arguments.length;s++)t[s-1]=arguments[s];for(var i=0,n=t;i<n.length;i++){var r=n[i];for(var o in r)e[o]=r[o]}return e}var he=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],ue=ae(de,3),pe={dayNamesShort:ae(he,3),dayNames:he,monthNamesShort:ue,monthNames:de,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},ge=ce({},pe),me=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},fe={D:function(e){return String(e.getDate())},DD:function(e){return me(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return me(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return me(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return me(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return me(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return me(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return me(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return me(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return me(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return me(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return me(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+me(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+me(Math.floor(Math.abs(t)/60),2)+":"+me(Math.abs(t)%60,2)}},_e=function(e){return+e-1},ye=[null,"[1-9]\\d?"],ve=[null,re],be=["isPm",re,function(e,t){var s=e.toLowerCase();return s===t.amPm[0]?0:s===t.amPm[1]?1:null}],we=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var s=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?s:-s}return 0}],Se=(le("monthNamesShort"),le("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xe=function(e,t,s){if(void 0===t&&(t=Se.default),void 0===s&&(s={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var i=[];t=(t=Se[t]||t).replace(oe,(function(e,t){return i.push(t),"@@@"}));var n=ce(ce({},ge),s);return(t=t.replace(ne,(function(t){return fe[t](e,n)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var ke="hass:bookmark",Pe={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function Ce(e,t){if(e in Pe)return Pe[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),ke}}var Ne={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},Te={binary_sensor:function(e){var t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Ce("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in Ne)return Ne[t];if("battery"===t){var s=Number(e.state);if(isNaN(s))return"hass:battery-unknown";var i=10*Math.round(s/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":"hass:battery-"+i}var n=e.attributes.unit_of_measurement;return"°C"===n||"°F"===n?"hass:thermometer":Ce("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Ce("input_datetime"):"hass:calendar":"hass:clock"}},Me=function(e){if(!e)return ke;if(e.attributes.icon)return e.attributes.icon;var t=function(e){return e.substr(0,e.indexOf("."))}(e.entity_id);return t in Te?Te[t](e):Ce(t,e.state)},$e={version:"Version",name:"Select list card",description:"Display the options of an input_select entity as a clickable list card."},Ee={missing_entity:"Entity is required",invalid_configuration:"Invalid configuration",not_available:"Entity is not available"},Oe={entity:"Entity (required)",title:"Card title (optional)",icon:"Icon (optional)",max_options:"Number of options shown (0 = all)",truncate:"Truncate long option name",show_toggle:"Show toggle in header",scroll_to_selected:"Selected option always in view"},Ve={common:$e,error:Ee,editor:Oe},Ae={version:"Versión",name:"Seleccionar tarjeta de la lista",description:"Mostrar las opciones de una entidad input_select como una tarjeta de lista en la que se puede hacer clic."},De={missing_entity:"Se requiere entidad",invalid_configuration:"configuración no válida",not_available:"La entidad no está disponible."},je={entity:"Entidad (requerida)",title:"Título de la tarjeta (opcional)",icon:"Icono (opcional)",max_options:"Número de opciones mostradas (0 = todas)",truncate:"Truncar el nombre de la opción larga",show_toggle:"Mostrar boton deslizante en la cabecera",scroll_to_selected:"Opción seleccionada siempre a la vista"},ze={common:Ae,error:De,editor:je},Ue={version:"Verzió",name:"Select list card",description:"Az input_select megjelenítése mint egy gördíthető, kattintható lista."},Ye={missing_entity:"Entitás megadása kötelező",invalid_configuration:"Hibás konfiguráció",not_available:"Az entitás nem elérhető"},Re={entity:"Entitás (kötelező)",title:"Kártya címe (opcionális)",icon:"Ikon (opcionális)",max_options:"Megjelenített sorok száma (0 = összes)",truncate:"Sor hosszának levágása egységes szélesség érdekében",show_toggle:"Kapcsoló megjelenítése a fejlécben",scroll_to_selected:"Előreugrás a kijelölt sorra"},He={common:Ue,error:Ye,editor:Re},qe={version:"Versie",name:"Select lijst kaart",description:"Toon de opties van een input_select entiteit in een kaart"},Ie={missing_entity:"Het specificeren van een entiteit is verplicht!",invalid_configuration:"Geen geldige configuratie",not_available:"Entiteit is niet beschikbaar"},Fe={entity:"Entiteit (verplicht)",title:"Kaart titel (optioneel)",icon:"Icoon (optioneel)",max_options:"Aantal opties zichtbaar (0 = alles)",truncate:"Kap lange optie name af",show_toggle:"Toon toggle in titel",scroll_to_selected:"Geselecteerde optie altijd zichtbaar"},Le={common:qe,error:Ie,editor:Fe};const We={en:Object.freeze({__proto__:null,common:$e,error:Ee,editor:Oe,default:Ve}),es:Object.freeze({__proto__:null,common:Ae,error:De,editor:je,default:ze}),hu:Object.freeze({__proto__:null,common:Ue,error:Ye,editor:Re,default:He}),nl:Object.freeze({__proto__:null,common:qe,error:Ie,editor:Fe,default:Le})};function Be(e,t="",s=""){const i=e.split(".")[0],n=e.split(".")[1],r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=We[r][i][n]}catch(e){o=We.en[i][n]}return void 0===o&&(o=We.en[i][n]),""!==t&&""!==s&&(o=o.replace(t,s)),o}let Je=class extends ie{setConfig(e){this._config=e}get _title(){return this._config&&this._config.title||""}get _icon(){return this._config&&this._config.icon||""}get _entity(){return this._config&&this._config.entity||""}get _truncate(){return this._config&&this._config.truncate||!0}get _scroll_to_selected(){return this._config&&this._config.scroll_to_selected||!0}get _show_toggle(){return this._config&&this._config.show_toggle||!1}get _max_options(){return this._config&&void 0!==this._config.max_options?this._config.max_options:5}render(){if(!this.hass)return j``;const e=Object.keys(this.hass.states).filter(e=>"input_select"===e.substr(0,e.indexOf(".")));return j`
      <div class="card-config">
        <div class="values">
          <div class="row">
            <paper-dropdown-menu
              label="${Be("editor.entity")}"
              @value-changed=${this._valueChanged}
              .configValue=${"entity"}
            >
              <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._entity)}>
                ${e.map(e=>j`
                    <paper-item>${e}</paper-item>
                  `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          <div class="row">
            <div class="side-by-side">
              <paper-input
                label="${Be("editor.title")}"
                .value=${this._title}
                .configValue=${"title"}
                @value-changed=${this._valueChanged}
              ></paper-input>
              <paper-input
                .configValue=${"icon"}
                .value=${this._icon}
                .label="${Be("editor.icon")}"
                .placeholder=${this._icon||Me(this.hass.states[this._entity])}
                @value-changed=${this._valueChanged}
                pattern="^\\\\S+:\\\\S+$"
              >
                ${this._icon||Me(this.hass.states[this._entity])?j`
                      <ha-icon .icon=${this._icon||Me(this.hass.states[this._entity])} slot="suffix">
                      </ha-icon>
                    `:""}
              </paper-input>
            </div>
          </div>
          <div class="row">
            <paper-input
              label="${Be("editor.max_options")}"
              .value=${this._max_options}
              .configValue=${"max_options"}
              type="number"
              @value-changed=${this._valueChanged}
            ></paper-input>
          </div>
          <div class="row">
            <ha-switch
              aria-label=${"Toggle truncate "+(this._truncate?"off":"on")}
              .checked=${this._truncate}
              .configValue=${"truncate"}
              @change=${this._valueChanged}
            >
            </ha-switch>
            <span class="switch-label">${Be("editor.show_toggle")}</span>
          </div>
          <div class="row">
            <ha-switch
              aria-label=${"Toggle scroll to selected "+(this._scroll_to_selected?"off":"on")}
              .checked=${this._scroll_to_selected}
              .configValue=${"scroll_to_selected"}
              @change=${this._valueChanged}
            >
            </ha-switch>
            <span class="switch-label">${Be("editor.scroll_to_selected")}</span>
          </div>
          <div class="row">
            <ha-switch
              aria-label=${"Toggle show toggle "+(this._show_toggle?"off":"on")}
              .checked=${this._show_toggle}
              .configValue=${"show_toggle"}
              @change=${this._valueChanged}
            >
            </ha-switch>
            <span class="switch-label">${Be("editor.show_toggle")}</span>
          </div>
        </div>
      </div>
    `}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,s="max_options"===t.configValue?parseInt(t.value):t.value;if(this["_"+t.configValue]===s)return;const i=["entity","title","icon"];t.configValue&&(""!==s||i.includes(t.configValue)?this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:s}):delete this._config[t.configValue]),function(e,t,s,i){i=i||{},s=null==s?{}:s;var n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=s,e.dispatchEvent(n)}(this,"config-changed",{config:this._config})}static get styles(){return te`
      .row {
        margin-bottom: 5px;
      }
      .values {
        padding-left: 0px;
      }
      paper-dropdown-menu {
        width: 100%;
      }
      ha-switch {
        padding-bottom: 8px;
      }
      .side-by-side {
        display: flex;
      }
      .side-by-side > * {
        flex: 1;
        padding-right: 4px;
      }
      .switch-label {
        margin-left: 10px;
      }
    `}};e([Z()],Je.prototype,"hass",void 0),e([Z()],Je.prototype,"_config",void 0),Je=e([B("select-list-card-editor")],Je);var Ze;console.info(`%c  select-list-card \n%c  ${Be("common.version")} 1.2.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"select-list-card",name:""+Be("common.name"),description:""+Be("common.description"),preview:!0});let Ke=Ze=class extends ie{constructor(){super(...arguments),this.open=!0,this.options=[]}static async getConfigElement(){return document.createElement("select-list-card-editor")}static getStubConfig(e,t){return{entity:t.find(e=>e.startsWith("input_select"))||"",icon:"",truncate:!0,show_toggle:!1,scroll_to_selected:!0,max_options:5}}setConfig(e){if(!e||!e.entity||!e.entity.startsWith("input_select"))throw new Error(Be("error.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=Object.assign({title:"",icon:"",show_toggle:!1,truncate:!0,scroll_to_selected:!0,max_options:5},e),this.open=this.open||this.config.open}async getCardSize(){let e=0;return this.config?(e+=this.config.title?1:0,e+=this.config.max_options?this.config.max_options:this.options.length,e):e}shouldUpdate(e){return function(e,t,s){if(t.has("config")||s)return!0;if(e.config.entity){var i=t.get("hass");return!i||i.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){if(!this.config.entity)return this.showError();const e=this.stateObj,t=e.state;this.options=e.attributes.options;const s=0===this.config.max_options?"":`max-height: ${48*(this.config.max_options||5)+16}px`;return j`
      <ha-card aria-label=${"Select list card: "+this.config.entity}>
        ${this.config.title&&this.config.title.length?j`
              <div
                class="card-header ${this.config.show_toggle?"pointer":""}"
                @click=${this.toggle}
                ?open=${this.open}
              >
                <div class="name">
                  ${this.config.icon&&this.config.icon.length?j`
                        <ha-icon class="icon" .icon="${this.config.icon}"></ha-icon>
                      `:""}
                  ${this.config.title}
                </div>
                ${this.config.show_toggle?j`
                      <ha-icon class="pointer" .icon="${this.open?"mdi:chevron-up":"mdi:chevron-down"}"></ha-icon>
                    `:""}
              </div>
            `:""}
        <paper-listbox
          id="list"
          @iron-select=${this.selectedOptionChanged}
          .selected=${this.options.indexOf(t)}
          style="${s}"
          ?open=${this.open}
        >
          ${this.options.map(e=>this.config.truncate?j`
                <paper-item title="${e}"><div class="truncate-item">${e}</div></paper-item>
              `:j`
              <paper-item>${e}</paper-item>
            `)}
        </paper-listbox>
      </ha-card>
    `}get stateObj(){return this.hass.states[this.config.entity]}toggle(){if(this.config.show_toggle&&(this.open=!this.open,this.open)){const e=this.listEl.querySelector(".iron-selected");e&&setTimeout(()=>{this.setScrollTop(e.offsetTop)},100)}}setScrollTop(e){this.config.scroll_to_selected&&(this.listEl.scrollTop=e-(this.listEl.offsetTop+8))}async selectedOptionChanged(e){const t=e.detail.item.innerText.trim(),s=this.stateObj.state;e.detail&&e.detail.item&&this.setScrollTop(e.detail.item.offsetTop),t!==s&&await Ze.setInputSelectOption(this.hass,this.config.entity,t)}static setInputSelectOption(e,t,s){return e.callService("input_select","select_option",{option:s,entity_id:t})}showError(){return j`
        <ha-card>
          <div class="preview not-available">
            <div class="metadata">
              <div class="not-available">
                ${Be("error.not_available")}
              </div>
            <div>
          </div>
        </ha-card>
      `}static get styles(){return te`
      select-list-card:focus {
        outline: none;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
        user-select: none;
      }
      .pointer {
        cursor: pointer;
      }
      paper-listbox {
        display: none;
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-color: var(--scrollbar-thumb-color) transparent;
        scrollbar-width: thin;
        background: var(--paper-card-background-color);
      }
      paper-listbox[open] {
        display: block;
      }
      paper-listbox::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
      }
      paper-listbox::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: var(--scrollbar-thumb-color);
      }
      paper-item {
        cursor: pointer;
      }
      paper-item:hover::before,
      .iron-selected:before {
        position: var(--layout-fit_-_position);
        top: var(--layout-fit_-_top);
        right: var(--layout-fit_-_right);
        bottom: var(--layout-fit_-_bottom);
        left: var(--layout-fit_-_left);
        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;
      }
      .truncate-item {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `}};var Ge;e([Z()],Ke.prototype,"hass",void 0),e([Z()],Ke.prototype,"config",void 0),e([Z()],Ke.prototype,"open",void 0),e([(Ge="#list",(e,t)=>{const s={get(){return this.renderRoot.querySelector(Ge)},enumerable:!0,configurable:!0};return void 0!==t?K(s,e,t):G(s,e)})],Ke.prototype,"listEl",void 0),Ke=Ze=e([B("select-list-card")],Ke);export{Ke as SelectListCard};
