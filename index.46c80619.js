let e;var t,r,n,i,a,o,s=globalThis,l={},d={},u=s.parcelRequire94c2;function c(t){let r=e.__externref_table_alloc();return e.__wbindgen_export_2.set(r,t),r}function h(t,r){try{return t.apply(this,r)}catch(r){let t=c(r);e.__wbindgen_exn_store(t)}}null==u&&((u=function(e){if(e in l)return l[e].exports;if(e in d){var t=d[e];delete d[e];var r={id:e,exports:{}};return l[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){d[e]=t},s.parcelRequire94c2=u),(0,u.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),u("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f7twW","index.46c80619.js","8uHta","sudoku_wasm_bg.2c5c338d.wasm"]'));const g="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&g.decode();let f=null;function b(){return(null===f||0===f.byteLength)&&(f=new Uint8Array(e.memory.buffer)),f}function m(e,t){return e>>>=0,g.decode(b().subarray(e,e+t))}let w=0;const p="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},_="function"==typeof p.encodeInto?function(e,t){return p.encodeInto(e,t)}:function(e,t){let r=p.encode(e);return t.set(r),{read:e.length,written:r.length}};let v=null;function y(){return(null===v||!0===v.buffer.detached||void 0===v.buffer.detached&&v.buffer!==e.memory.buffer)&&(v=new DataView(e.memory.buffer)),v}function C(e,t){let r=t(1*e.length,1)>>>0;return b().set(e,r/1),w=e.length,r}async function B(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"!=e.headers.get("Content-Type"))console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}let r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}{let r=await WebAssembly.instantiate(e,t);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}}var N={};async function I(t){if(void 0!==e)return e;void 0!==t&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),void 0===t&&(t=new URL(N));let r=function(){let t={};return t.wbg={},t.wbg.__wbg_buffer_61b7ce01341d7f88=function(e){return e.buffer},t.wbg.__wbg_call_500db948e69c7330=function(){return h(function(e,t,r){return e.call(t,r)},arguments)},t.wbg.__wbg_call_b0d8e36992d9900d=function(){return h(function(e,t){return e.call(t)},arguments)},t.wbg.__wbg_crypto_ed58b8e10a292839=function(e){return e.crypto},t.wbg.__wbg_error_7534b8e9a36f1ab4=function(t,r){let n,i;try{n=t,i=r,console.error(m(t,r))}finally{e.__wbindgen_free(n,i,1)}},t.wbg.__wbg_getRandomValues_bcb4912f16000dc4=function(){return h(function(e,t){e.getRandomValues(t)},arguments)},t.wbg.__wbg_msCrypto_0a36e2ec3a343d26=function(e){return e.msCrypto},t.wbg.__wbg_new_3ff5b33b1ce712df=function(e){return new Uint8Array(e)},t.wbg.__wbg_new_8a6f238a6ece86ea=function(){return Error()},t.wbg.__wbg_newnoargs_fd9e4bf8be2bc16d=function(e,t){return Function(m(e,t))},t.wbg.__wbg_newwithbyteoffsetandlength_ba35896968751d91=function(e,t,r){return new Uint8Array(e,t>>>0,r>>>0)},t.wbg.__wbg_newwithlength_34ce8f1051e74449=function(e){return new Uint8Array(e>>>0)},t.wbg.__wbg_node_02999533c4ea02e3=function(e){return e.node},t.wbg.__wbg_now_2c95c9de01293173=function(e){return e.now()},t.wbg.__wbg_performance_7a3ffd0b17f663ad=function(e){return e.performance},t.wbg.__wbg_process_5c1d670bc53614b8=function(e){return e.process},t.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740=function(){return h(function(e,t){e.randomFillSync(t)},arguments)},t.wbg.__wbg_require_79b1e9274cde3c87=function(){return h(function(){return module.require},arguments)},t.wbg.__wbg_set_23d69db4e5c66a6e=function(e,t,r){e.set(t,r>>>0)},t.wbg.__wbg_stack_0ed75d68575b0f3c=function(t,r){let n=function(e,t,r){if(void 0===r){let r=p.encode(e),n=t(r.length,1)>>>0;return b().subarray(n,n+r.length).set(r),w=r.length,n}let n=e.length,i=t(n,1)>>>0,a=b(),o=0;for(;o<n;o++){let t=e.charCodeAt(o);if(t>127)break;a[i+o]=t}if(o!==n){0!==o&&(e=e.slice(o)),i=r(i,n,n=o+3*e.length,1)>>>0;let t=_(e,b().subarray(i+o,i+n));o+=t.written,i=r(i,n,o,1)>>>0}return w=o,i}(r.stack,e.__wbindgen_malloc,e.__wbindgen_realloc),i=w;y().setInt32(t+4,i,!0),y().setInt32(t+0,n,!0)},t.wbg.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3=function(){let e=void 0===s?null:s;return null==e?0:c(e)},t.wbg.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb=function(){let e="undefined"==typeof globalThis?null:globalThis;return null==e?0:c(e)},t.wbg.__wbg_static_accessor_SELF_1dc398a895c82351=function(){let e="undefined"==typeof self?null:self;return null==e?0:c(e)},t.wbg.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a=function(){let e="undefined"==typeof window?null:window;return null==e?0:c(e)},t.wbg.__wbg_subarray_46adeb9b86949d12=function(e,t,r){return e.subarray(t>>>0,r>>>0)},t.wbg.__wbg_versions_c71aa1626a93e0a1=function(e){return e.versions},t.wbg.__wbindgen_copy_to_typed_array=function(e,t,r){var n;new Uint8Array(r.buffer,r.byteOffset,r.byteLength).set((n=e>>>0,b().subarray(n/1,n/1+t)))},t.wbg.__wbindgen_error_new=function(e,t){return Error(m(e,t))},t.wbg.__wbindgen_init_externref_table=function(){let t=e.__wbindgen_export_2,r=t.grow(4);t.set(0,void 0),t.set(r+0,void 0),t.set(r+1,null),t.set(r+2,!0),t.set(r+3,!1)},t.wbg.__wbindgen_is_function=function(e){return"function"==typeof e},t.wbg.__wbindgen_is_object=function(e){return"object"==typeof e&&null!==e},t.wbg.__wbindgen_is_string=function(e){return"string"==typeof e},t.wbg.__wbindgen_is_undefined=function(e){return void 0===e},t.wbg.__wbindgen_memory=function(){return e.memory},t.wbg.__wbindgen_string_new=function(e,t){return m(e,t)},t.wbg.__wbindgen_throw=function(e,t){throw Error(m(e,t))},t}();("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t));let{instance:n,module:i}=await B(await t,r);return e=n.exports,I.__wbindgen_wasm_module=i,v=null,f=null,e.__wbindgen_start(),e}N=new URL("sudoku_wasm_bg.2c5c338d.wasm",import.meta.url).toString();const x={colorPrefilled:"#050505",colorSolved:"#156363",colorDraft:"#447862",colorHighlightFg:"#007896",colorHighlightBg1:E("#dcc1c3",1),colorHighlightBg2:E("#dcd1d1",.5),colorBg:"#fefefe"};function E(e,t){let r=parseInt((e=e.replace("#","")).substring(0,2),16),n=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16);return`rgba(${r}, ${n}, ${i}, ${t})`}const L={"color-prefilled":"colorPrefilled","color-solved":"colorSolved","color-draft":"colorDraft","color-highlight-fg":"colorHighlightFg","color-highlight-bg1":"colorHighlightBg1","color-highlight-bg2":"colorHighlightBg2","color-bg":"colorBg"};function S(e,t){if(!Number.isInteger(e)||e<0||e>=9)throw RangeError(`Invalid ${t}: ${e}`)}function D(e){if(!Number.isInteger(e)||e<1||e>9)throw RangeError(`Invalid cell value: ${e}`)}class P{bitmap;constructor(e=!1){this.bitmap=Array(10).fill(e)}clone(){let e=new P;for(let t=0;t<this.bitmap.length;t++)e.bitmap[t]=this.bitmap[t];return e}add(e){return this.bitmap[e]=!0,this}delete(e){let t=this.bitmap[e];return this.bitmap[e]=!1,t}has(e){return this.bitmap[e]}clear(){this.bitmap.fill(!1)}addAll(){this.bitmap.fill(!0)}hasAll(){for(let e=1;e<=9;e++)if(!this.bitmap[e])return!1;return!0}getUnique(){let e=null;for(let t=1;t<=9;t++)if(this.bitmap[t]){if(null!==e)return null;e=t}return e}toString(){let e="";for(let t=1;t<=9;t++)this.bitmap[t]&&(e+=`${t} `);return e+`: ${this.getUnique()}`}}class k{x;y;linearIndex;squareIndex;constructor(e,t){S(e,"x"),S(t,"y"),this.x=e,this.y=t,this.linearIndex=e+9*t,this.squareIndex=Math.floor(e/3)+3*Math.floor(t/3)}static fromLinearIndex(e){return new k(e%9,Math.floor(e/9))}toString(){return`(x: ${this.x}, y: ${this.y}, square: ${this.squareIndex})`}}class F{coordinate;value;constructor(e,t){null!==t&&D(t),this.coordinate=e,this.value=t}toChar(){return null===this.value?".":this.value.toString()}static fromChar(e,t){return"."===t?new F(e,null):new F(e,parseInt(t))}static fromNumber(e,t){return 0===t?new F(e,null):new F(e,t)}}function z(e,t=!1){if(9!==e.length)throw Error(`Got cell size ${e.length}, want 9`);let r=new P;for(let t of e)if(null!==t.value&&r.has(t.value))return!1;return!t||r.hasAll()}(t=i||(i={})).PREFILLED="Prefilled",t.SOLVING="Solving",t.SOLVED="Solved";class A extends F{state;draftNumbers;static newPrefilled(e,t){return new A(e,i.PREFILLED,t)}static newSolving(e){return new A(e,i.SOLVING,null)}constructor(e,t,r){super(e,r),this.state=t,this.draftNumbers=new P(!1)}clone(){let e=new A(this.coordinate,this.state,this.value);return e.draftNumbers=this.draftNumbers.clone(),e}hasNumber(){switch(this.state){case i.PREFILLED:case i.SOLVED:return!0;case i.SOLVING:return!1}}addAllDraftNumber(){for(let e=1;e<=9;e++)this.draftNumbers.add(e)}hasDraftNumber(e){return this.draftNumbers.has(e)}addDraftNumber(e){this.draftNumbers.add(e)}removeDraftNumber(e){this.draftNumbers.delete(e)}fillNumber(e){D(e),this.value=e,this.draftNumbers.clear(),this.state=i.SOLVED}toString(){return`${this.coordinate} state: ${this.state}, possibleValues: ${this.draftNumbers}`}}class T{cells;constructor(e){for(let t=0;t<81;t++)if(e[t].coordinate.linearIndex!==t)throw Error(`Invalid cell ${e[t]}`);this.cells=e}static createBoardFromString(e){if(81!==(e=e.replace(/\s/g,"")).length)throw Error(`Input char length ${e.length}, want 81`);let t=[];for(let r=0;r<81;r++)t.push(F.fromChar(k.fromLinearIndex(r),e[r]));return new T(t)}static createBoardFromUint8Array(e){if(81!==e.length)throw Error(`Input char length ${e.length}, want 81`);let t=[];for(let r=0;r<81;r++)t.push(F.fromNumber(k.fromLinearIndex(r),e[r]));return new T(t)}printBoard(){let e="";for(let t=0;t<81;t++)e+=this.cells[t].toChar(),t%9==8&&(e+="\n");return e}getCellByCoord(e){return this.cells[e.linearIndex]}getCellsByRow(e){S(e,"rowIndex");let t=[];for(let r=0;r<9;r++)t.push(this.cells[9*e+r]);return t}getCellsByColumn(e){S(e,"columnIndex");let t=[];for(let r=0;r<9;r++)t.push(this.cells[9*r+e]);return t}getCellsBySquare(e){return S(e,"squareIndex"),this.cells.filter(t=>t.coordinate.squareIndex===e)}getCellsByNeighborToCoord(e){return R([this.getCellsByColumn(e.x),this.getCellsByRow(e.y),this.getCellsBySquare(e.squareIndex)])}validate(e){for(let t=0;t<9;t++)if(!z(this.getCellsByRow(t),e)||!z(this.getCellsByColumn(t),e)||!z(this.getCellsBySquare(t),e))return!1;return!0}}function R(e){let t=new Set,r=[];for(let n of e)if(n)for(let e of n)e&&!t.has(e)&&(t.add(e),r.push(e));return r}function U(e,t,r,n,i,a){e.strokeStyle=a.color,e.lineWidth=a.width?a.width:1,e.beginPath(),e.moveTo(t,r),e.lineTo(n,i),e.stroke()}function $(e){return e.getContext("2d")}function H(e){$(e).clearRect(0,0,e.width,e.height)}(r=a||(a={}))[r.UP=0]="UP",r[r.DOWN=1]="DOWN",r[r.RIGHT=2]="RIGHT",r[r.LEFT=3]="LEFT";const O=`
<div id="draft-mode-line">
  <label class="switch">
    <input type="checkbox" id="kb-draft-mode-switch" checked="true">
    <span class="slider"></span>
  </label>
  <span>Draft mode</span>
</div>
<div div class="keyboard" id="keyboard"></div>
`;class M{cb;container;width;height;constructor(e,t){this.container=e,e.setHTMLUnsafe(O),e.classList.add("fading-fast"),this.cb=t;let r=document.getElementById("keyboard"),n=document.getElementById("kb-draft-mode-switch");for(let e=1;e<=9;e++){let t=document.createElement("div");t.classList.add("key"),t.classList.add("btn-default"),t.textContent=`${e}`,t.dataset.value=`${e}`,t.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),t.classList.contains("disabled")||this.cb(e,n.checked)}),r.appendChild(t)}e.addEventListener("click",e=>{e.stopPropagation()}),this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.hide()}show(e,t){let r=this.width,n=this.height,i=e.getCanvasPosForIdx(t.x),a=e.getCanvasPosForIdx(t.x+1),o=e.getCanvasPosForIdx(t.y),s=i-r-8>0?i-r-8:a+8,l=o+n<e.config.size?o+30:e.config.size-n;this.container.style.left=`${s}px`,this.container.style.top=`${l}px`,this.refreshNumbers(e,t),this.container.classList.remove("hidden"),console.log("display virtual keyboard at (%d, %d)",s,l)}refreshNumbers(e,t){let r=e.gameBoard.getCellByCoord(t).draftNumbers,n=e.gameBoard.getAvailableNumbersForCell(t);document.getElementById("keyboard").childNodes.forEach(e=>{let t=parseInt(e.dataset.value);n.has(t)?(e.classList.add("enabled"),e.classList.remove("disabled")):(e.classList.add("disabled"),e.classList.remove("enabled")),r.has(t)?e.classList.add("highlight"):e.classList.remove("highlight")})}hide(){console.log("hide virtual keyboard"),this.container.classList.add("hidden")}}class q{config;container;gameBoard;virtualKeyboard;gridCanvas;neighHighlightCanvas;numberHighlightCanvas;numbersCanvas;cursorCanvas;clickCanvas;cursorCoord=null;focusedNumber=null;constructor(e,t,r,n,i){this.container=e,this.gameBoard=t,this.virtualKeyboard=new M(r,(e,t)=>{t||this.virtualKeyboard.hide(),n(e,t),this.cursorCoord&&this.virtualKeyboard.refreshNumbers(this,this.cursorCoord)}),this.updateConfig(i),e.style.height=`${e.clientWidth}px`}getTheme(){return x}getCellSize(){return(this.config.size-10)/9}getCanvasPosForIdx(e){return 5+this.getCellSize()*e}getIdxForCanvasPos(e){for(let t=0;t<9;++t)if(e<this.getCanvasPosForIdx(t+1)&&e>this.getCanvasPosForIdx(t))return t;return null}updateBoard(e=null){null!==e&&(this.gameBoard=e),this.redrawNumbers(),this.redrawHighlight()}updateConfig(e){for(this.config=e;this.container.firstChild;)this.container.removeChild(this.container.firstChild);this.numberHighlightCanvas=this.createCanvas(1),this.neighHighlightCanvas=this.createCanvas(2),this.gridCanvas=this.createCanvas(3),this.numbersCanvas=this.createCanvas(4),this.cursorCanvas=this.createCanvas(5),this.clickCanvas=this.createCanvas(6),this.redrawGrid(),this.redrawNumbers(),this.clickCanvas.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),this.virtualKeyboard.hide();let t=this.clickCanvas.getBoundingClientRect(),r=this.getIdxForCanvasPos(e.clientX-t.left),n=this.getIdxForCanvasPos(e.clientY-t.top);if(null===r||null===n)this.updateCursor(null);else{let e=new k(r,n);this.updateCursor(e),null===this.gameBoard.getCellByCoord(e).value&&this.virtualKeyboard.show(this,e)}}),this.clickCanvas.addEventListener("dblclick",e=>{e.preventDefault(),e.stopPropagation();let t=this.clickCanvas.getBoundingClientRect(),r=this.getIdxForCanvasPos(e.clientX-t.left),n=this.getIdxForCanvasPos(e.clientY-t.top);if(null===r||null===n)this.updateFocusedNumber(null);else{let e=this.gameBoard.getCellByCoord(new k(r,n));this.updateFocusedNumber(e.value===this.focusedNumber?null:e.value)}})}updateCursor(e){console.log("Set cursor to %s",e),null===e&&this.virtualKeyboard.hide(),this.cursorCoord=e,this.redrawCursor(),this.redrawHighlight()}moveCursor(e){if(!this.cursorCoord)return;this.virtualKeyboard.hide();let t=this.cursorCoord.x,r=this.cursorCoord.y;switch(e){case a.UP:r-=1;break;case a.DOWN:r+=1;break;case a.LEFT:t-=1;break;case a.RIGHT:t+=1}t<9&&t>=0&&r<9&&r>=0&&this.updateCursor(new k(t,r))}updateFocusedNumber(e){this.focusedNumber=e,this.redrawHighlight(),this.redrawNumbers()}createCanvas(e){let t=document.createElement("canvas"),r=this.config.size;t.style.width=`${r}px`,t.style.height=`${r}px`,t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.zIndex=`${e}`;let n=window.devicePixelRatio;return t.width=r*n,t.height=r*n,$(t).scale(n,n),this.container.appendChild(t),t}redrawHighlight(){H(this.neighHighlightCanvas),H(this.numberHighlightCanvas);let e=(e,t,r)=>{let n=this.getCanvasPosForIdx(t.x),i=this.getCanvasPosForIdx(t.y);e.fillStyle=r,e.fillRect(n,i,this.getCellSize(),this.getCellSize())},t=(e,t,r,n)=>{let i=this.getCellSize()/3,a=this.getCanvasPosForIdx(t.x)+Math.floor((r-1)%3)*i,o=this.getCanvasPosForIdx(t.y)+Math.floor((r-1)/3)*i;e.fillStyle=n,e.fillRect(a,o,i,i)},r=this.cursorCoord;if(r&&this.config.highlightCursorNeighbors){let t=$(this.neighHighlightCanvas);for(let n of this.gameBoard.getCellsByNeighborToCoord(r))e(t,n.coordinate,this.getTheme().colorHighlightBg1)}if(null!==this.focusedNumber&&(this.config.highlightNumberNeighbors||this.config.highlightNumber)){let r=$(this.numberHighlightCanvas),n=this.gameBoard.cells.filter(e=>e.value===this.focusedNumber),i=n.slice();for(let t of(this.config.highlightNumberNeighbors&&(i=R(n.map(e=>this.gameBoard.getCellsByNeighborToCoord(e.coordinate)))),i))e(r,t.coordinate,this.getTheme().colorHighlightBg2);for(let e of this.gameBoard.cells)e.hasDraftNumber(this.focusedNumber)&&t(r,e.coordinate,this.focusedNumber,this.getTheme().colorHighlightBg1)}}redrawGrid(){let e=$(this.gridCanvas);if(!e){console.error("Context not available");return}let t=this.getCanvasPosForIdx(0),r=this.getCanvasPosForIdx(9),n={color:this.getTheme().colorPrefilled},i={color:this.getTheme().colorPrefilled,width:3};for(let a=0;a<=9;a++){let o=this.getCanvasPosForIdx(a);U(e,t,o,r,o,a%3?n:i),U(e,o,t,o,r,a%3?n:i)}}redrawNumbers(){if(!this.gameBoard)return;let e=this.numbersCanvas.getContext("2d");if(!e){console.error("Context not available");return}H(this.numbersCanvas);let t=(t,r,n,i)=>{let a=this.getCellSize()/(n?3:1),o=.8*a,s=this.getCanvasPosForIdx(r.x)+a/2,l=this.getCanvasPosForIdx(r.y)+a/2+.07*o;n&&(s+=Math.floor((t-1)%3)*a,l+=Math.floor((t-1)/3)*a),e.textAlign="center",e.textBaseline="middle",e.font=`${o}px monospace`,e.fillStyle=i,t===this.focusedNumber&&(e.fillStyle=this.getTheme().colorHighlightFg),e.fillText(t.toString(),s,l)};for(let e of this.gameBoard.cells)if(e.state===i.PREFILLED&&t(e.value,e.coordinate,!1,this.getTheme().colorPrefilled),e.state===i.SOLVED&&t(e.value,e.coordinate,!1,this.getTheme().colorSolved),e.state===i.SOLVING)for(let r=1;r<=9;++r)e.draftNumbers.has(r)&&t(r,e.coordinate,!0,this.getTheme().colorDraft)}redrawCursor(){let e=$(this.cursorCanvas);H(this.cursorCanvas);let t=this.cursorCoord;if(null===t)return;let r=this.getCanvasPosForIdx(t.x),n=this.getCanvasPosForIdx(t.x+1),i=this.getCanvasPosForIdx(t.y),a=this.getCanvasPosForIdx(t.y+1),o={color:this.getTheme().colorHighlightFg,width:3};U(e,r,i,n,i,o),U(e,r,a,n,a,o),U(e,r,i,r,a,o),U(e,n,i,n,a,o)}}const W=`
<p id="notification" class="hidden">Prompt</p>
<div id="board-banner">
  <span style="text-align: left;">Time:&nbsp;<span id="value-timer">0:00</span>
  </span><span style="text-align: center;">Mistakes:&nbsp;<span id="value-mistakes">0</span>&nbsp;
  </span><span style="text-align: right;">Remaining:&nbsp;<span id="value-remaining">0</span>&nbsp;
  </span>
</div>
<div id="board" style="position: relative;"></div>
<div id="board-buttons">
  <span class="btn-default enabled" id="btn-new-game">New Game</span>
  <span class="btn-default enabled" id="btn-quick-draft">Quick Draft</span>
  <span class="btn-default enabled" id="btn-save">Save</span>
  <span class="btn-default enabled" id="btn-load">Load</span>
</div>
<div id="num-keyboard"></div>`;class V{game;pageDom;boardUi;constructor(e,t){this.game=e,this.pageDom=t,this.pageDom.setHTMLUnsafe(W),this.refreshBanner();let r=document.getElementById("board"),n=document.getElementById("num-keyboard");this.boardUi=new q(r,e.puzzleBoard,n,this.handleNumberInput.bind(this),{size:r.clientWidth,highlightCursorNeighbors:!0,highlightNumber:!0,highlightNumberNeighbors:!0});let i=document.getElementById("btn-quick-draft");i?.addEventListener("click",e=>{e.stopPropagation(),this.game.recalculateDraftNumbers(),this.boardUi.updateBoard()}),document.getElementById("btn-new-game").addEventListener("click",e=>{e.stopPropagation(),!0===confirm("Abort the current game and start a new one?")&&location.reload()});let a=document.getElementById("btn-save"),o=document.getElementById("btn-load"),s=()=>{null!==e.savedPuzzleBoard?(o.classList.add("enabled"),o.classList.remove("disabled")):(o.classList.remove("enabled"),o.classList.add("disabled"))};s(),a.addEventListener("click",t=>{t.stopPropagation(),e.saveState(),s(),this.showNotification("Saved")}),o.addEventListener("click",t=>{t.stopPropagation(),o.classList.contains("enabled")&&!0===confirm("Load previously saved state?")&&(e.loadState(),this.boardUi.updateBoard(e.puzzleBoard),s(),this.showNotification("Loaded"))})}handleKeyDownEvent(e){switch(console.log(e),e.code){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":return this.boardUi.moveCursor(function(e){switch(e){case"ArrowUp":return a.UP;case"ArrowDown":return a.DOWN;case"ArrowLeft":return a.LEFT;case"ArrowRight":return a.RIGHT;default:throw Error("Unreachable")}}(e.code)),!0;case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":case"Digit9":return this.handleDigitKeyEvent(e),!0;case"KeyD":return this.game.recalculateDraftNumbers(),this.boardUi.updateBoard(),!0;default:return!1}}handleDigitKeyEvent(e){let t=parseInt(e.code.charAt(5));null!==this.boardUi.cursorCoord&&this.handleNumberInput(t,!e.shiftKey)}handleNumberInput(e,t){null!==this.boardUi.cursorCoord&&(console.log("hit %d",e),t?this.game.toggleDraftNumber(this.boardUi.cursorCoord,e):this.game.fillInNumber(this.boardUi.cursorCoord,e),this.boardUi.updateBoard(),this.refreshBanner(!0))}handleOutOfBoundClick(){this.boardUi.updateCursor(null)}showNotification(e){let t=document.getElementById("notification");t.innerText=e,t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},2500)}refreshBanner(e=!1){let t=document.getElementById("value-timer"),r=document.getElementById("value-mistakes"),n=document.getElementById("value-remaining");t.textContent=`${function(e){let t=Math.floor(e/60),r=Math.floor(e%60),n=String(t).padStart(2,"0"),i=String(r).padStart(2,"0");return`${n}:${i}`}(this.game.getElapsedSeconds())}`,r.textContent=`${this.game.mistakes}`,n.textContent=`${this.game.getEmptyCellsCount()}`,e||setTimeout(()=>this.refreshBanner(),1e3)}}class G extends T{static createFromBoard(e){let t=[];for(let r of e.cells)null===r.value?t.push(A.newSolving(r.coordinate)):t.push(A.newPrefilled(r.coordinate,r.value));return new G(t)}clone(){return new G(this.cells.map(e=>e.clone()))}getEmptyCellsCount(){return this.cells.filter(e=>e.state===i.SOLVING).length}getAvailableNumbersForCell(e){if(this.cells[e.linearIndex].hasNumber())return new Set;let t=new Set;this.getCellsByNeighborToCoord(e).forEach(e=>{e.value&&t.add(e.value)});let r=new Set;for(let e=1;e<=9;++e)t.has(e)||r.add(e);return r}takeAction(e){console.log(`${e.coordinate.toString()}: ${e.type} value ${e.value}, reason: ${e.reasonString}`);let t=this.getCellByCoord(e.coordinate);switch(e.type){case o.REMOVE_DRAFT_NUMBER:t.removeDraftNumber(e.value);break;case o.FILL_IN_NUMBER:t.fillNumber(e.value)}}takeActions(e){for(let t of e)this.takeAction(t)}}function K(e){let t=[],r=function(e,r,n){e.state===i.SOLVING&&e.draftNumbers.has(r)&&t.push({coordinate:e.coordinate,type:o.REMOVE_DRAFT_NUMBER,value:r,reasonString:`Conflict with ${n.toString()}`})};for(let t=0;t<81;t++){let n=k.fromLinearIndex(t),a=e.cells[t];if(a.state===i.SOLVING)continue;if(null===a.value)throw Error("Invalid state");let o=a.value;for(let t of e.getCellsByColumn(n.x))r(t,o,a);for(let t of e.getCellsByRow(n.y))r(t,o,a);for(let t of e.getCellsBySquare(n.squareIndex))r(t,o,a)}return t}(n=o||(o={})).REMOVE_DRAFT_NUMBER="remove draft number",n.FILL_IN_NUMBER="fill in number";class j{answerBoard;puzzleBoard;startTime;endTime=null;savedPuzzleBoard=null;mistakes=0;constructor(e,t){this.answerBoard=e,this.puzzleBoard=G.createFromBoard(t),this.startTime=performance.now()}fillInNumber(e,t){let r=this.puzzleBoard.cells[e.linearIndex];if(r.hasNumber()){console.log("%s already have number",e);return}if(this.answerBoard.cells[e.linearIndex].value!==t){alert("Not correct :)"),this.mistakes++;return}r.fillNumber(t);let n=K(this.puzzleBoard);this.puzzleBoard.takeActions(n),this.isAllCorrect()&&(this.endTime=performance.now(),alert("Congratulations!!!"))}toggleDraftNumber(e,t){let r=this.puzzleBoard.cells[e.linearIndex];if(r.hasNumber()){console.log("%s already have number",e);return}r.hasDraftNumber(t)?r.removeDraftNumber(t):r.addDraftNumber(t)}recalculateDraftNumbers(){for(let e of this.puzzleBoard.cells)e.hasNumber()||e.addAllDraftNumber();let e=K(this.puzzleBoard);this.puzzleBoard.takeActions(e)}getEmptyCellsCount(){let e=0;for(let t of this.puzzleBoard.cells)!t.hasNumber()&&e++;return e}getElapsedSeconds(){let e=performance.now();return null!==this.endTime&&(e=this.endTime),Math.round((e-this.startTime)/1e3)}isAllCorrect(){for(let e=0;e<81;++e)if(this.puzzleBoard.cells[e].value!==this.answerBoard.cells[e].value)return!1;return!0}saveState(){this.savedPuzzleBoard=this.puzzleBoard.clone()}loadState(){if(null===this.savedPuzzleBoard){console.error("No saved data");return}this.puzzleBoard=this.savedPuzzleBoard,this.savedPuzzleBoard=null}}async function X(){return new Promise(e=>{Array.from(document.getElementsByClassName("btn-difficulty")).forEach(t=>{let r=parseInt(t.dataset.value);if(Number.isNaN(r)){console.error("Invalid value");return}t.addEventListener("click",()=>{e(r)})})})}function Y(e){Array.from(e.parentElement.children).forEach(e=>{e.classList.remove("visible")}),e.classList.add("visible")}!async function(){var t,r;!function(e){for(let t in L){let r=L[t],n=`--${e}-${t}`,i=window.getComputedStyle(document.body).getPropertyValue(n);x[r]=i,document.documentElement.style.setProperty(`--${t}`,i)}}("default");let n=document.getElementById("init-page"),i=document.getElementById("loading-page"),a=document.getElementById("game-page");Y(n);let o=(4-await X())*14-9;Y(i),await I().catch(e=>{console.error("Error initializing WASM module:",e)}),e.init_panic_hook(),console.log("wasm loaded"),console.log("Generating game with %d clues",o);let s=new Uint8Array(81);t=C(s,e.__wbindgen_malloc),r=w,e.generate(o,t,r,s),console.log("Puzzle generated: ",s);let l=new Uint8Array(s);!function(t){var r=C(t,e.__wbindgen_malloc),n=w;let i=e.fast_resolve(r,n,t);if(i[2])throw function(t){let r=e.__wbindgen_export_2.get(t);return e.__externref_table_dealloc(t),r}(i[1]);i[0]}(l),console.log("Answer generated: ",l);let d=new V(new j(T.createBoardFromUint8Array(l),T.createBoardFromUint8Array(s)),a);window.addEventListener("keydown",e=>{d.handleKeyDownEvent(e)&&e.preventDefault()}),window.addEventListener("click",()=>{d.handleOutOfBoundClick()}),Y(a)}();
//# sourceMappingURL=index.46c80619.js.map
