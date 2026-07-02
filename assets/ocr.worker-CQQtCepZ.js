var hy=Object.defineProperty;var fy=(nt,at,Lt)=>at in nt?hy(nt,at,{enumerable:!0,configurable:!0,writable:!0,value:Lt}):nt[at]=Lt;var zf=(nt,at,Lt)=>fy(nt,typeof at!="symbol"?at+"":at,Lt);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var nt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,Lt=Object.getOwnPropertyNames,Rf=Object.prototype.hasOwnProperty,Bf=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),Wt=(e,t)=>{for(var r in t)nt(e,r,{get:t[r],enumerable:!0})},Mf=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Lt(t))!Rf.call(e,n)&&n!==r&&nt(e,n,{get:()=>t[n],enumerable:!(i=at(t,n))||i.enumerable});return e},Zt=e=>Mf(nt({},"__esModule",{value:!0}),e),Qt,pt,St,ya,_a,ba=P(()=>{Qt=new Map,pt=[],St=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Qt.get(e);if(i===void 0)Qt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=pt.indexOf(e);n!==-1&&pt.splice(n,1);for(let a=0;a<pt.length;a++)if(Qt.get(pt[a]).priority<=r){pt.splice(a,0,e);return}pt.push(e)}return}throw new TypeError("not a valid backend")},ya=async e=>{let t=Qt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},_a=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?pt:r,n,a=[],s=new Set;for(let l of i){let d=await ya(l);typeof d=="string"?a.push({name:l,err:d}):(n||(n=d),n===d&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),Nf=P(()=>{ba()}),wa,Df=P(()=>{wa="1.27.0"}),ni,Ie,$a=P(()=>{Df(),ni="warning",Ie={wasm:{},webgl:{},webgpu:{},versions:{common:wa},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ni=e}},get logLevel(){return ni}},Object.defineProperty(Ie,"logLevel",{enumerable:!0})}),ye,Pf=P(()=>{$a(),ye=Ie}),va,xa,Uf=P(()=>{va=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=a*n,h=0,g=c,y=c*2,_=-1;s==="RGBA"?(h=0,g=c,y=c*2,_=c*3):s==="RGB"?(h=0,g=c,y=c*2):s==="RBG"&&(h=0,y=c,g=c*2);for(let b=0;b<a;b++)for(let S=0;S<n;S++){let x=(e.data[h++]-d[0])*l[0],w=(e.data[g++]-d[1])*l[1],I=(e.data[y++]-d[2])*l[2],T=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+x+","+w+","+I+","+T+")",i.fillRect(S,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},xa=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,_=1,b=2,S=3,x=0,w=h,I=h*2,T=-1;u==="RGBA"?(x=0,w=h,I=h*2,T=h*3):u==="RGB"?(x=0,w=h,I=h*2):u==="RBG"&&(x=0,I=h,w=h*2),i=r.createImageData(n,a);for(let E=0;E<a*n;y+=g,_+=g,b+=g,S+=g,E++)i.data[y]=(e.data[x++]-c[0])*d[0],i.data[_]=(e.data[w++]-c[1])*d[1],i.data[b]=(e.data[I++]-c[2])*d[2],i.data[S]=T===-1?255:(e.data[T++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),$r,Sa,Ta,ka,Ia,Ea,qf=P(()=>{si(),$r=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,g=0,y=1,_=2,b=3,S=0,x=d,w=d*2,I=-1;u==="RGB"&&(h=3,g=0,y=1,_=2,b=-1),l==="RGBA"?I=d*3:l==="RBG"?(S=0,w=d,x=d*2):l==="BGR"&&(w=0,x=d,S=d*2);for(let T=0;T<d;T++,g+=h,_+=h,y+=h,b+=h)c[S++]=(e[g]+s[0])/a[0],c[x++]=(e[y]+s[1])/a[1],c[w++]=(e[_]+s[2])/a[2],I!==-1&&b!==-1&&(c[I++]=(e[b]+s[3])/a[3]);return l==="RGBA"?new Ne("float32",c,[1,4,r,i]):new Ne("float32",c,[1,3,r,i])},Sa=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=y}else u.tensorFormat="RGBA",u.height=g,u.width=y;h.drawImage(e,0,0),s=h.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(i){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=h,t!==void 0){let g=l();g.width=h,g.height=c;let y=d(g);if(y!=null)y.putImageData(e,0,0),s=y.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,y=e.width;return h.drawImage(e,0,0,y,g),s=h.getImageData(0,0,y,g).data,u.height=g,u.width=y,$r(s,u)}else throw new Error("Can not access image data")}else{if(a)return new Promise((c,h)=>{let g=l(),y=d(g);if(!e||!y)return h();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{g.width=_.width,g.height=_.height,y.drawImage(_,0,0,g.width,g.height);let b=y.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,c($r(b.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return $r(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Ta=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new Ne({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},ka=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Ne({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},Ia=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Ne({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},Ea=(e,t,r)=>new Ne({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Tt,Yt,ai,za,Lf=P(()=>{Tt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Yt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ai=!1,za=()=>{if(!ai){ai=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Tt.set("int64",BigInt64Array),Yt.set(BigInt64Array,"int64")),t&&(Tt.set("uint64",BigUint64Array),Yt.set(BigUint64Array,"uint64")),i?(Tt.set("float16",r),Yt.set(r,"float16")):Tt.set("float16",Uint16Array)}}}),Ca,Aa,Wf=P(()=>{si(),Ca=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Aa=(e,t)=>{switch(e.location){case"cpu":return new Ne(e.type,e.data,t);case"cpu-pinned":return new Ne({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ne({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ne({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ne({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ne,si=P(()=>{Uf(),qf(),Lf(),Wf(),Ne=class{constructor(e,t,r){za();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=Tt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Tt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=Yt.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");n=u,this.cpuData=s,this.dataLocation="cpu"}let a=Ca(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return Sa(e,t)}static fromTexture(e,t){return Ta(e,t)}static fromGpuBuffer(e,t){return ka(e,t)}static fromMLTensor(e,t){return Ia(e,t)}static fromPinnedBuffer(e,t,r){return Ea(e,t,r)}toDataURL(e){return va(this,e)}toImageData(e){return xa(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Aa(this,e)}}}),He,Oa=P(()=>{si(),He=Ne}),Jt,oi,Fe,Le,ct,ht,Ra=P(()=>{$a(),Jt=(e,t)=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.timeStamp(`${e}::ORT::${t}`)},oi=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Jt("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},Fe=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||oi("BEGIN",e)},Le=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||oi("END",e)},ct=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.time(`ORT::${e}`)},ht=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.timeEnd(`ORT::${e}`)}}),Ba,Vf=P(()=>{ba(),Oa(),Ra(),Ba=class Cf{constructor(t){this.handler=t}async run(t,r,i){Fe(),ct("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof He||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof He)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof He)&&(d=!0,s=!1,n[h]=g)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let u=await this.handler.run(t,n,a),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof He?l[d]=c:l[d]=new He(c.type,c.data,c.dims)}return ht("InferenceSession.run"),Le(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){Fe(),ct("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(g=t.byteLength-h,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(c,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await _a(s),d=await u.createInferenceSessionHandler(a,l);return ht("InferenceSession.create"),Le(),new Cf(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),ui,Gf=P(()=>{Vf(),ui=Ba}),Hf=P(()=>{}),Ff=P(()=>{}),jf=P(()=>{}),Kf=P(()=>{}),Ma={};Wt(Ma,{InferenceSession:()=>ui,TRACE:()=>Jt,TRACE_EVENT_BEGIN:()=>ct,TRACE_EVENT_END:()=>ht,TRACE_FUNC_BEGIN:()=>Fe,TRACE_FUNC_END:()=>Le,Tensor:()=>He,env:()=>ye,registerBackend:()=>St});var We=P(()=>{Nf(),Pf(),Gf(),Oa(),Hf(),Ff(),Ra(),jf(),Kf()}),li=P(()=>{}),Na={};Wt(Na,{default:()=>Da});var di,pi,Da,Xf=P(()=>{var e;_c(),kt(),yi(),di="ort-wasm-proxy-worker",pi=((e=globalThis.self)==null?void 0:e.name)===di,pi&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":wi(i.wasm).then(()=>{On(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:a}=i;Rn(a,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=i,a=qr(n);postMessage({type:r,out:a});break}case"create":{let{model:n,options:a}=i;Mn(n,a).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":Nn(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:a,inputs:s,outputIndices:u,options:l}=i;Pn(n,a,s,u,new Array(u.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},qn([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Un(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Da=pi?null:t=>new Worker(t??De,{type:"module",name:di})}),Pa={};Wt(Pa,{default:()=>qa});async function Ua(e={}){var If,Ef;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&((If=self.name)==null?void 0:If.startsWith("em-pthread"));t.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=o=>async(...p)=>{var m;try{if(t.Yc)throw Error("Session already started");let f=t.Yc={Kd:p[0],errors:[]},v=await o(...p);if(t.Yc!==f)throw Error("Session mismatch");(m=t.dd)==null||m.flush();let k=f.errors;if(0<k.length){let z=await Promise.all(k);if(z=z.filter(B=>B),0<z.length)throw Error(z.join(`
`))}return v}finally{t.Yc=null}};t.jsepInit=(o,p)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let m=t.dd;t.jsepRegisterBuffer=(f,v,k,z)=>m.registerBuffer(f,v,k,z),t.jsepGetBuffer=f=>m.getBuffer(f),t.jsepCreateDownloader=(f,v,k)=>m.createDownloader(f,v,k),t.jsepOnCreateSession=f=>{m.onCreateSession(f)},t.jsepOnReleaseSession=f=>{m.onReleaseSession(f)},t.jsepOnRunStart=f=>m.onRunStart(f),t.Id=(f,v)=>{m.upload(f,v)}}else if(o==="webnn"){let m=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=f=>m.onRunStart(f),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=f=>{m.onReleaseSession(f)},t.webnnCreateMLTensorDownloader=(f,v)=>m.createMLTensorDownloader(f,v),t.webnnRegisterMLTensor=(f,v,k,z)=>m.registerMLTensor(f,v,k,z),t.webnnCreateMLContext=f=>m.createMLContext(f),t.webnnRegisterMLConstant=(f,v,k,z,B,W)=>m.registerMLConstant(f,v,k,z,B,t.Xc,W),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let o=p=>(...m)=>{let f=rt;return m=p(...m),rt!=f?new Promise((v,k)=>{ia={resolve:v,reject:k}}):m};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=o(t[p])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var u,l,d=(o,p)=>{throw p},c=self.location.href,h="";if(r||i){try{h=new URL(".",c).href}catch{}i&&(l=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),u=async o=>{if(A(o))return new Promise((m,f)=>{var v=new XMLHttpRequest;v.open("GET",o,!0),v.responseType="arraybuffer",v.onload=()=>{v.status==200||v.status==0&&v.response?m(v.response):f(v.status)},v.onerror=f,v.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var g,y,_,b,S,x,w=console.log.bind(console),I=console.error.bind(console),T=w,E=I,C=!1,A=o=>o.startsWith("file://");function $(){wt.buffer!=D.buffer&&H()}if(n){let o=function(p){try{var m=p.data,f=m.Sc;if(f==="load"){let v=[];self.onmessage=k=>v.push(k),x=()=>{postMessage({Sc:"loaded"});for(let k of v)o(k);self.onmessage=o};for(let k of m.xd)t[k]&&!t[k].proxy||(t[k]=(...z)=>{postMessage({Sc:"callHandler",wd:k,args:z})},k=="print"&&(T=t[k]),k=="printErr"&&(E=t[k]));wt=m.Od,H(),y=m.Pd,Ve(),ri()}else if(f==="run"){(function(v){var k=($(),K)[v+52>>>2>>>0];v=($(),K)[v+56>>>2>>>0],Nh(k,k-v),se(k)})(m.Rc),ua(m.Rc,0,0,1,0,0),Dc(),ea(m.Rc),M||(Ch(),M=!0);try{ag(m.Md,m.bd)}catch(v){if(v!="unwind")throw v}}else m.target!=="setimmediate"&&(f==="checkMailbox"?M&&Xr():f&&(E(`worker: received unknown command ${f}`),E(m)))}catch(v){throw Ah(),v}};var M=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}var D,L,F,G,R,K,X,ee,fe,V,ue,U=!1;function H(){var o=wt.buffer;t.HEAP8=D=new Int8Array(o),F=new Int16Array(o),t.HEAPU8=L=new Uint8Array(o),G=new Uint16Array(o),t.HEAP32=R=new Int32Array(o),t.HEAPU32=K=new Uint32Array(o),X=new Float32Array(o),ee=new Float64Array(o),fe=new BigInt64Array(o),V=new BigUint64Array(o)}function Z(){U=!0,n?x():dt.sb()}function q(o){throw E(o="Aborted("+o+")"),C=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S==null||S(o),o}function ge(){return{a:{ma:E0,gb:I0,g:sg,J:og,f:ug,o:lg,h:dg,ha:pg,b:cg,T:hg,Ha:Vc,n:fg,$:jc,Xa:Kc,Da:Xc,Fa:Zc,Ya:Qc,Va:Yc,Oa:Jc,Ua:eh,ka:th,Ea:rh,Ba:ih,Wa:nh,Ca:ah,bb:mg,ea:gg,wa:yg,ua:bg,da:$g,O:vg,H:xg,va:Sg,_:Ag,xa:Og,Ra:Rg,za:Mg,Ia:Ng,sa:Dg,fa:Pg,Qa:ea,_a:Ug,R:Vg,r:Kg,c:Yn,hb:Xg,y:Zg,M:Qg,D:Yg,l:Jg,s:hh,ib:e0,I:t0,S:r0,j:i0,u:n0,q:a0,k:s0,La:o0,Ma:u0,Na:l0,Ja:yh,Ka:_h,ta:bh,db:p0,ab:h0,v:f0,aa:m0,ga:g0,$a:c0,W:y0,Za:_0,Aa:b0,F:d0,U:w0,la:ei,ya:v0,fb:$0,eb:x0,Sa:xh,Ta:Sh,Ga:mr,V:Th,ja:kh,Pa:Ih,ia:Eh,kb:dy,na:ay,lb:ly,oa:ny,G:X0,e:O0,t:C0,w:z0,B:W0,mb:ty,K:F0,x:M0,pa:ry,Y:sy,ba:ey,nb:J0,ob:Y0,P:V0,qa:Q0,pb:Z0,N:j0,Z:iy,d:A0,A:B0,m:R0,jb:py,p:D0,z:P0,C:N0,E:U0,L:G0,qb:K0,Q:oy,ca:H0,X:uy,rb:L0,ra:q0,i:T0,a:wt,cb:qe}}}async function Ve(){function o(f,v){var k=dt=f.exports;f={};for(let[z,B]of Object.entries(k))typeof B=="function"?(k=qg(B),f[z]=k):f[z]=B;return dt=f,dt=function(){var z=dt,B=j=>ae=>j(ae)>>>0,W=j=>()=>j()>>>0;return(z=Object.assign({},z)).tb=B(z.tb),z.Xb=W(z.Xb),z.Zb=B(z.Zb),z.lc=B(z.lc),z.mc=W(z.mc),z.qc=B(z.qc),z}(),Mc.push(dt._b),zh=(f=dt).tb,Ch=f.ub,t._OrtInit=f.vb,t._OrtGetLastError=f.wb,t._OrtCreateSessionOptions=f.xb,t._OrtAppendExecutionProvider=f.yb,t._OrtAddFreeDimensionOverride=f.zb,t._OrtAddSessionConfigEntry=f.Ab,t._OrtReleaseSessionOptions=f.Bb,t._OrtCreateSession=f.Cb,t._OrtReleaseSession=f.Db,t._OrtGetInputOutputCount=f.Eb,t._OrtGetInputOutputMetadata=f.Fb,t._OrtFree=f.Gb,t._OrtCreateTensor=f.Hb,t._OrtGetTensorData=f.Ib,t._OrtReleaseTensor=f.Jb,t._OrtCreateRunOptions=f.Kb,t._OrtAddRunConfigEntry=f.Lb,t._OrtReleaseRunOptions=f.Mb,t._OrtCreateBinding=f.Nb,t._OrtBindInput=f.Ob,t._OrtBindOutput=f.Pb,t._OrtClearBoundOutputs=f.Qb,t._OrtReleaseBinding=f.Rb,t._OrtRunWithBinding=f.Sb,t._OrtRun=f.Tb,t._OrtEndProfiling=f.Ub,t._JsepOutput=f.Vb,t._JsepGetNodeName=f.Wb,ti=f.Xb,it=t._free=f.Yb,_r=t._malloc=f.Zb,ua=f.ac,Ah=f.bc,Oh=f.cc,Rh=f.dc,la=f.ec,Bh=f.fc,Mh=f.gc,le=f.hc,br=f.ic,Nh=f.jc,se=f.kc,da=f.lc,oe=f.mc,Dh=f.nc,pa=f.oc,Ph=f.pc,Uh=f.qc,qh=f.rc,ca=f.sc,Lh=f.tc,Wh=f.uc,Vh=f.vc,Gh=f.wc,Hh=f.xc,Fh=f.yc,jh=f.zc,Kh=f.Ac,Xh=f.Bc,Zh=f.Cc,Qh=f.Dc,Yh=f.Ec,Jh=f.Fc,ef=f.Gc,tf=f.Hc,rf=f.Ic,nf=f.Jc,af=f.Kc,sf=f.Lc,of=f.Mc,uf=f.Nc,lf=f.Pc,df=f.Qc,pf=f.$c,cf=f.ad,hf=f.fd,ff=f.jd,mf=f.kd,gf=f.ld,yf=f.md,_f=f.nd,bf=f.od,wf=f.pd,$f=f.qd,vf=f.vd,xf=f.Td,Sf=f.Ud,Tf=f.Vd,kf=f.Wd,y=v,dt}var p,m=ge();return t.instantiateWasm?new Promise(f=>{t.instantiateWasm(m,(v,k)=>{f(o(v,k))})}):n?o(new WebAssembly.Instance(y,ge()),y):(ue??(ue=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("/vault/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),p=await async function(f){var v=ue;if(!g&&!A(v))try{var k=fetch(v,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,f)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return async function(z,B){try{var W=await async function(j){if(!g)try{var ae=await u(j);return new Uint8Array(ae)}catch{}if(j==ue&&g)j=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";j=l(j)}return j}(z);return await WebAssembly.instantiate(W,B)}catch(j){E(`failed to asynchronously prepare wasm: ${j}`),q(j)}}(v,f)}(m),o(p.instance,p.module))}class Se{constructor(p){zf(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var Re=o=>{o.terminate(),o.onmessage=()=>{}},Be=[],Ue=0,Me=null,_t=o=>{bt.length==0&&(Uc(),Pc(bt[0]));var p=bt.pop();if(!p)return 6;gr.push(p),Pt[o.Rc]=p,p.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return p.postMessage(m,o.rd),0},we=0,ie=(o,p,...m)=>{var f,v=16*m.length,k=oe(),z=da(v),B=z>>>3;for(f of m)typeof f=="bigint"?(($(),fe)[B++>>>0]=1n,($(),fe)[B++>>>0]=f):(($(),fe)[B++>>>0]=0n,($(),ee)[B++>>>0]=f);return o=Oh(o,0,v,z,p),se(k),o};function qe(o){if(n)return ie(0,1,o);if(_=o,!(0<we)){for(var p of gr)Re(p);for(p of bt)Re(p);bt=[],gr=[],Pt={},C=!0}d(0,new Se(o))}function Gr(o){if(n)return ie(1,0,o);mr(o)}var mr=o=>{if(_=o,n)throw Gr(o),"unwind";qe(o)},bt=[],gr=[],Mc=[],Pt={},Nc=o=>{var p=o.Rc;delete Pt[p],bt.push(o),gr.splice(gr.indexOf(o),1),o.Rc=0,Rh(p)};function Dc(){Mc.forEach(o=>o())}var Pc=o=>new Promise(p=>{o.onmessage=v=>{var k=v.data;if(v=k.Sc,k.Zc&&k.Zc!=ti()){var z=Pt[k.Zc];z?z.postMessage(k,k.rd):E(`Internal error! Worker sent a message "${v}" to target pthread ${k.Zc}, but that thread no longer exists!`)}else v==="checkMailbox"?Xr():v==="spawnThread"?_t(k):v==="cleanupThread"?Kr(()=>{Nc(Pt[k.Nd])}):v==="loaded"?(o.loaded=!0,p(o)):k.target==="setimmediate"?o.postMessage(k):v==="uncaughtException"?o.onerror(k.error):v==="callHandler"?t[k.wd](...k.args):v&&E(`worker sent an unknown command ${v}`)},o.onerror=v=>{throw E(`worker sent an error! ${v.filename}:${v.lineno}: ${v.message}`),v};var m,f=[];for(m of[])t.propertyIsEnumerable(m)&&f.push(m);o.postMessage({Sc:"load",xd:f,Od:wt,Pd:y})});function Uc(){var o=new Worker((()=>{let p=URL;return self.location.href>"file:"&&self.location.href<"file;"?new p("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});bt.push(o)}var wt,ag=(o,p)=>{we=0,o=ca(o,p),0<we?_=o:la(o)},Hr=[],Fr=0;function sg(o){var p=new Kn(o>>>=0);return($(),D)[p.Tc+12>>>0]==0&&(qc(p,!0),Fr--),Lc(p,!1),Hr.push(p),Uh(o)}var jt=0,og=()=>{le(0,0);var o=Hr.pop();Dh(o.cd),jt=0};function qc(o,p){p=p?1:0,($(),D)[o.Tc+12>>>0]=p}function Lc(o,p){p=p?1:0,($(),D)[o.Tc+13>>>0]=p}class Kn{constructor(p){this.cd=p,this.Tc=p-24}}var Xn=o=>{var p=jt;if(!p)return br(0),0;var m=new Kn(p);($(),K)[m.Tc+16>>>2>>>0]=p;var f=($(),K)[m.Tc+4>>>2>>>0];if(!f)return br(0),p;for(var v of o){if(v===0||v===f)break;if(Ph(v,f,m.Tc+16))return br(v),p}return br(f),p};function ug(){return Xn([])}function lg(o){return Xn([o>>>0])}function dg(o,p,m,f){return Xn([o>>>0,p>>>0,m>>>0,f>>>0])}var pg=()=>{var o=Hr.pop();o||q("no exception to throw");var p=o.cd;throw($(),D)[o.Tc+13>>>0]==0&&(Hr.push(o),Lc(o,!0),qc(o,!1),Fr++),pa(p),jt=p};function cg(o,p,m){var f=new Kn(o>>>=0);throw p>>>=0,m>>>=0,($(),K)[f.Tc+16>>>2>>>0]=0,($(),K)[f.Tc+4>>>2>>>0]=p,($(),K)[f.Tc+8>>>2>>>0]=m,pa(o),Fr++,jt=o}var hg=()=>Fr;function Wc(o,p,m,f){return n?ie(2,1,o,p,m,f):Vc(o,p,m,f)}function Vc(o,p,m,f){if(o>>>=0,p>>>=0,m>>>=0,f>>>=0,!globalThis.SharedArrayBuffer)return 6;var v=[];return n&&v.length===0?Wc(o,p,m,f):(o={Ld:m,Rc:o,bd:f,rd:v},n?(o.Sc="spawnThread",postMessage(o,v),0):_t(o))}function fg(o){throw jt||(jt=o>>>0),jt}var Gc=globalThis.TextDecoder&&new TextDecoder,Hc=(o,p,m,f)=>{if(m=p+m,f)return m;for(;o[p]&&!(p>=m);)++p;return p},Fc=(o,p=0,m,f)=>{if(16<(m=Hc(o,p>>>=0,m,f))-p&&o.buffer&&Gc)return Gc.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(f="";p<m;){var v=o[p++];if(128&v){var k=63&o[p++];if((224&v)==192)f+=String.fromCharCode((31&v)<<6|k);else{var z=63&o[p++];65536>(v=(240&v)==224?(15&v)<<12|k<<6|z:(7&v)<<18|k<<12|z<<6|63&o[p++])?f+=String.fromCharCode(v):(v-=65536,f+=String.fromCharCode(55296|v>>10,56320|1023&v))}}else f+=String.fromCharCode(v)}return f},Te=(o,p,m)=>(o>>>=0)?Fc(($(),L),o,p,m):"";function jc(o,p,m){return n?ie(3,1,o,p,m):0}function Kc(o,p){if(n)return ie(4,1,o,p)}function Xc(o,p){if(n)return ie(5,1,o,p)}function Zc(o,p,m){if(n)return ie(6,1,o,p,m)}function Qc(o,p,m){return n?ie(7,1,o,p,m):0}function Yc(o,p){if(n)return ie(8,1,o,p)}function Jc(o,p,m){if(n)return ie(9,1,o,p,m)}function eh(o,p,m,f){if(n)return ie(10,1,o,p,m,f)}function th(o,p,m,f){if(n)return ie(11,1,o,p,m,f)}function rh(o,p,m,f){if(n)return ie(12,1,o,p,m,f)}function ih(o){if(n)return ie(13,1,o)}function nh(o,p){if(n)return ie(14,1,o,p)}function ah(o,p,m){if(n)return ie(15,1,o,p,m)}var mg=()=>q(""),tt=o=>{o>>>=0;for(var p="";;){var m=($(),L)[o++>>>0];if(!m)return p;p+=String.fromCharCode(m)}},Zn={},Qn={},Kt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function lt(o,p,m={}){return function(f,v,k={}){var z=v.name;if(!f)throw new Kt(`type "${z}" must have a positive integer typeid pointer`);if(Qn.hasOwnProperty(f)){if(k.yd)return;throw new Kt(`Cannot register type '${z}' twice`)}Qn[f]=v,Zn.hasOwnProperty(f)&&(v=Zn[f],delete Zn[f],v.forEach(B=>B()))}(o,p,m)}var sh=(o,p,m)=>{switch(p){case 1:return m?f=>($(),D)[f>>>0]:f=>($(),L)[f>>>0];case 2:return m?f=>($(),F)[f>>>1>>>0]:f=>($(),G)[f>>>1>>>0];case 4:return m?f=>($(),R)[f>>>2>>>0]:f=>($(),K)[f>>>2>>>0];case 8:return m?f=>($(),fe)[f>>>3>>>0]:f=>($(),V)[f>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function gg(o,p,m,f,v){o>>>=0,m>>>=0,p=tt(p>>>0);let k=z=>z;if(f=f===0n){let z=8*m;k=B=>BigInt.asUintN(z,B),v=k(v)}lt(o,{name:p,Oc:k,Vc:(z,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:sh(p,m,!f),Wc:null})}function yg(o,p,m,f){lt(o>>>=0,{name:p=tt(p>>>0),Oc:function(v){return!!v},Vc:function(v,k){return k?m:f},Uc:function(v){return this.Oc(($(),L)[v>>>0])},Wc:null})}var oh=[],Ut=[0,1,,1,null,1,!0,1,!1,1];function Yn(o){9<(o>>>=0)&&--Ut[o+1]===0&&(Ut[o]=void 0,oh.push(o))}var Ge=o=>{if(!o)throw new Kt(`Cannot use deleted val. handle = ${o}`);return Ut[o]},Je=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=oh.pop()||Ut.length;return Ut[p]=o,Ut[p+1]=1,p}};function Jn(o){return this.Oc(($(),K)[o>>>2>>>0])}var _g={name:"emscripten::val",Oc:o=>{var p=Ge(o);return Yn(o),p},Vc:(o,p)=>Je(p),Uc:Jn,Wc:null};function bg(o){return lt(o>>>0,_g)}var wg=(o,p)=>{switch(p){case 4:return function(m){return this.Oc(($(),X)[m>>>2>>>0])};case 8:return function(m){return this.Oc(($(),ee)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function $g(o,p,m){m>>>=0,lt(o>>>=0,{name:p=tt(p>>>0),Oc:f=>f,Vc:(f,v)=>v,Uc:wg(p,m),Wc:null})}function vg(o,p,m,f,v){o>>>=0,m>>>=0,p=tt(p>>>0);let k=B=>B;if(f===0){var z=32-8*m;k=B=>B<<z>>>z,v=k(v)}lt(o,{name:p,Oc:k,Vc:(B,W)=>W,Uc:sh(p,m,f!==0),Wc:null})}function xg(o,p,m){function f(k){var z=($(),K)[k>>>2>>>0];return k=($(),K)[k+4>>>2>>>0],new v(($(),D).buffer,k,z)}var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];lt(o>>>=0,{name:m=tt(m>>>0),Oc:f,Uc:f},{yd:!0})}var $t=(o,p,m)=>{var f=($(),L);if(p>>>=0,0<m){var v=p;m=p+m-1;for(var k=0;k<o.length;++k){var z=o.codePointAt(k);if(127>=z){if(p>=m)break;f[p++>>>0]=z}else if(2047>=z){if(p+1>=m)break;f[p++>>>0]=192|z>>6,f[p++>>>0]=128|63&z}else if(65535>=z){if(p+2>=m)break;f[p++>>>0]=224|z>>12,f[p++>>>0]=128|z>>6&63,f[p++>>>0]=128|63&z}else{if(p+3>=m)break;f[p++>>>0]=240|z>>18,f[p++>>>0]=128|z>>12&63,f[p++>>>0]=128|z>>6&63,f[p++>>>0]=128|63&z,k++}}f[p>>>0]=0,o=p-v}else o=0;return o},jr=o=>{for(var p=0,m=0;m<o.length;++m){var f=o.charCodeAt(m);127>=f?p++:2047>=f?p+=2:55296<=f&&57343>=f?(p+=4,++m):p+=3}return p};function Sg(o,p){lt(o>>>=0,{name:p=tt(p>>>0),Oc(m){var f=($(),K)[m>>>2>>>0];return f=Te(m+4,f,!0),it(m),f},Vc(m,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var v=typeof f=="string";if(!(v||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1))throw new Kt("Cannot pass non-string to std::string");var k=v?jr(f):f.length,z=_r(4+k+1),B=z+4;return($(),K)[z>>>2>>>0]=k,v?$t(f,B,k+1):($(),L).set(f,B>>>0),m!==null&&m.push(it,z),z},Uc:Jn,Wc(m){it(m)}})}var uh=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Tg=(o,p,m)=>{if(o>>>=1,16<(p=Hc(($(),G),o,p/2,m))-o&&uh)return uh.decode(($(),G).slice(o,p));for(m="";o<p;++o){var f=($(),G)[o>>>0];m+=String.fromCharCode(f)}return m},kg=(o,p,m)=>{if(m??(m=2147483647),2>m)return 0;var f=p;m=(m-=2)<2*o.length?m/2:o.length;for(var v=0;v<m;++v){var k=o.charCodeAt(v);($(),F)[p>>>1>>>0]=k,p+=2}return($(),F)[p>>>1>>>0]=0,p-f},Ig=o=>2*o.length,Eg=(o,p,m)=>{var f="";o>>>=2;for(var v=0;!(v>=p/4);v++){var k=($(),K)[o+v>>>0];if(!k&&!m)break;f+=String.fromCodePoint(k)}return f},zg=(o,p,m)=>{if(p>>>=0,m??(m=2147483647),4>m)return 0;var f=p;m=f+m-4;for(var v=0;v<o.length;++v){var k=o.codePointAt(v);if(65535<k&&v++,($(),R)[p>>>2>>>0]=k,(p+=4)+4>m)break}return($(),R)[p>>>2>>>0]=0,p-f},Cg=o=>{for(var p=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,p+=4;return p};function Ag(o,p,m){if(o>>>=0,p>>>=0,m=tt(m>>>=0),p===2)var f=Tg,v=kg,k=Ig;else f=Eg,v=zg,k=Cg;lt(o,{name:m,Oc:z=>{var B=($(),K)[z>>>2>>>0];return B=f(z+4,B*p,!0),it(z),B},Vc:(z,B)=>{if(typeof B!="string")throw new Kt(`Cannot pass non-string to C++ string type ${m}`);var W=k(B),j=_r(4+W+p);return($(),K)[j>>>2>>>0]=W/p,v(B,j+4,W+p),z!==null&&z.push(it,j),j},Uc:Jn,Wc(z){it(z)}})}function Og(o,p){lt(o>>>=0,{zd:!0,name:p=tt(p>>>0),Oc:()=>{},Vc:()=>{}})}function Rg(o){ua(o>>>0,!i,1,!r,131072,!1),Dc()}var Kr=o=>{if(!C)try{if(o(),!(0<we))try{n?ti()&&la(_):mr(_)}catch(p){p instanceof Se||p=="unwind"||d(0,p)}}catch(p){p instanceof Se||p=="unwind"||d(0,p)}},Bg=!Atomics.waitAsync||((Ef=globalThis.navigator)==null?void 0:Ef.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ea(o){o>>>=0,Bg||(Atomics.waitAsync(($(),R),o>>>2,o).value.then(Xr),o+=128,Atomics.store(($(),R),o>>>2,1))}var Xr=()=>Kr(()=>{var o=ti();o&&(ea(o),Mh())});function Mg(o,p){(o>>>=0)==p>>>0?setTimeout(Xr):n?postMessage({Zc:o,Sc:"checkMailbox"}):(o=Pt[o])&&o.postMessage({Sc:"checkMailbox"})}var ta=[];function Ng(o,p,m,f,v){for(p>>>=0,v>>>=0,ta.length=0,m=v>>>3,f=v+f>>>3;m<f;){var k;k=($(),fe)[m++>>>0]?($(),fe)[m++>>>0]:($(),ee)[m++>>>0],ta.push(k)}return(p?ha[p]:k0[o])(...ta)}var Dg=()=>{we=0};function Pg(o){o>>>=0,n?postMessage({Sc:"cleanupThread",Nd:o}):Nc(Pt[o])}function Ug(o){}var Zr=o=>{try{o()}catch(p){q(p)}};function qg(o){var p=(...m)=>{Qr.push(o);try{return o(...m)}finally{C||(Qr.pop(),rt&&vt===1&&Qr.length===0&&(vt=0,we+=1,Zr(Sf),typeof Fibers<"u"&&Fibers.Zd()))}};return ph.set(o,p),p}var vt=0,rt=null,lh=0,Qr=[],ra=new Map,dh=new Map,ph=new Map,Lg=0,ia=null,Wg=[],ch=o=>function(p){if(!C){if(vt===0){var m=!1,f=!1;p((v=0)=>{if(!C&&(lh=v,m=!0,f)){vt=2,Zr(()=>Tf(rt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),v=!1;try{var k=function(){var W=($(),R)[rt+8>>>2>>>0];return W=dh.get(W),W=ph.get(W),--we,W()}()}catch(W){k=W,v=!0}var z=!1;if(!rt){var B=ia;B&&(ia=null,(v?B.reject:B.resolve)(k),z=!0)}if(v&&!z)throw k}}),f=!0,m||(vt=1,rt=function(){var v=_r(65548),k=v+12;if(($(),K)[v>>>2>>>0]=k,($(),K)[v+4>>>2>>>0]=k+65536,k=Qr[0],!ra.has(k)){var z=Lg++;ra.set(k,z),dh.set(z,k)}return k=ra.get(k),($(),R)[v+8>>>2>>>0]=k,v}(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Zr(()=>xf(rt)))}else vt===2?(vt=0,Zr(kf),it(rt),rt=null,Wg.forEach(Kr)):q(`invalid state: ${vt}`);return lh}}(p=>{o().then(p)});function Vg(o){return o>>>=0,ch(async()=>{var p=await Ge(o);return Je(p)})}var na=[],Gg=o=>{var p=na.length;return na.push(o),p},Hg=(o,p)=>{for(var m=Array(o),f=0;f<o;++f){var v=f,k=($(),K)[p+4*f>>>2>>>0],z=Qn[k];if(z===void 0)throw o=`parameter ${f}`,k=zh(k),p=tt(k),it(k),new Kt(`${o} has unknown type ${p}`);m[v]=z}return m},Fg=(o,p,m)=>{var f=[];return o=o(f,m),f.length&&(($(),K)[p>>>2>>>0]=Je(f)),o},jg={},Yr=o=>{var p=jg[o];return p===void 0?tt(o):p};function Kg(o,p,m){var[f,...v]=Hg(o,p>>>0);p=f.Vc.bind(f);var k=v.map(W=>W.Uc.bind(W));o--;var z={toValue:Ge};switch(o=k.map((W,j)=>{var ae=`argFromPtr${j}`;return z[ae]=W,`${ae}(args${j?"+"+8*j:""})`}),m){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:z.getStringOrSymbol=Yr,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,f.zd||(z.toReturnWire=p,z.emval_returnValue=Fg,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,m=new Function(Object.keys(z),B)(...Object.values(z)),B=`methodCaller<(${v.map(W=>W.name)}) => ${f.name}>`,Gg(Object.defineProperty(m,"name",{value:B}))}function Xg(o,p){return p>>>=0,(o=Ge(o>>>0))==Ge(p)}function Zg(o){return(o>>>=0)?(o=Yr(o),Je(globalThis[o])):Je(globalThis)}function Qg(o){return o=Yr(o>>>0),Je(t[o])}function Yg(o,p){return p>>>=0,o=Ge(o>>>0),p=Ge(p),Je(o[p])}function Jg(o){9<(o>>>=0)&&(Ut[o+1]+=1)}function hh(o,p,m,f,v){return na[o>>>0](p>>>0,m>>>0,f>>>0,v>>>0)}function e0(o,p,m,f,v){return hh(o>>>0,p>>>0,m>>>0,f>>>0,v>>>0)}function t0(){return Je([])}function r0(o){o=Ge(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return Je(p)}function i0(o){return Je(Yr(o>>>0))}function n0(){return Je({})}function a0(o){for(var p=Ge(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}Yn(o)}function s0(o,p,m){p>>>=0,m>>>=0,o=Ge(o>>>0),p=Ge(p),m=Ge(m),o[p]=m}function o0(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),R)[p>>>2>>>0]=o.getUTCSeconds(),($(),R)[p+4>>>2>>>0]=o.getUTCMinutes(),($(),R)[p+8>>>2>>>0]=o.getUTCHours(),($(),R)[p+12>>>2>>>0]=o.getUTCDate(),($(),R)[p+16>>>2>>>0]=o.getUTCMonth(),($(),R)[p+20>>>2>>>0]=o.getUTCFullYear()-1900,($(),R)[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),R)[p+28>>>2>>>0]=o}var fh=o=>o%4==0&&(o%100!=0||o%400==0),mh=[0,31,60,91,121,152,182,213,244,274,305,335],gh=[0,31,59,90,120,151,181,212,243,273,304,334];function u0(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),R)[p>>>2>>>0]=o.getSeconds(),($(),R)[p+4>>>2>>>0]=o.getMinutes(),($(),R)[p+8>>>2>>>0]=o.getHours(),($(),R)[p+12>>>2>>>0]=o.getDate(),($(),R)[p+16>>>2>>>0]=o.getMonth(),($(),R)[p+20>>>2>>>0]=o.getFullYear()-1900,($(),R)[p+24>>>2>>>0]=o.getDay();var m=(fh(o.getFullYear())?mh:gh)[o.getMonth()]+o.getDate()-1|0;($(),R)[p+28>>>2>>>0]=m,($(),R)[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var f=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=f&&o.getTimezoneOffset()==Math.min(f,m)),($(),R)[p+32>>>2>>>0]=o}function l0(o){o>>>=0;var p=new Date(($(),R)[o+20>>>2>>>0]+1900,($(),R)[o+16>>>2>>>0],($(),R)[o+12>>>2>>>0],($(),R)[o+8>>>2>>>0],($(),R)[o+4>>>2>>>0],($(),R)[o>>>2>>>0],0),m=($(),R)[o+32>>>2>>>0],f=p.getTimezoneOffset(),v=new Date(p.getFullYear(),6,1).getTimezoneOffset(),k=new Date(p.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(k,v);return 0>m?($(),R)[o+32>>>2>>>0]=+(v!=k&&z==f):0<m!=(z==f)&&(v=Math.max(k,v),p.setTime(p.getTime()+6e4*((0<m?z:v)-f))),($(),R)[o+24>>>2>>>0]=p.getDay(),m=(fh(p.getFullYear())?mh:gh)[p.getMonth()]+p.getDate()-1|0,($(),R)[o+28>>>2>>>0]=m,($(),R)[o>>>2>>>0]=p.getSeconds(),($(),R)[o+4>>>2>>>0]=p.getMinutes(),($(),R)[o+8>>>2>>>0]=p.getHours(),($(),R)[o+12>>>2>>>0]=p.getDate(),($(),R)[o+16>>>2>>>0]=p.getMonth(),($(),R)[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function yh(o,p,m,f,v,k,z){return n?ie(16,1,o,p,m,f,v,k,z):-52}function _h(o,p,m,f,v,k){if(n)return ie(17,1,o,p,m,f,v,k)}var yr={},d0=()=>performance.timeOrigin+performance.now();function bh(o,p){if(n)return ie(18,1,o,p);if(yr[o]&&(clearTimeout(yr[o].id),delete yr[o]),!p)return 0;var m=setTimeout(()=>{delete yr[o],Kr(()=>Bh(o,performance.timeOrigin+performance.now()))},p);return yr[o]={id:m,Yd:p},0}function p0(o,p,m,f){o>>>=0,p>>>=0,m>>>=0,f>>>=0;var v=new Date().getFullYear(),k=new Date(v,0,1).getTimezoneOffset();v=new Date(v,6,1).getTimezoneOffset();var z=Math.max(k,v);($(),K)[o>>>2>>>0]=60*z,($(),R)[p>>>2>>>0]=+(k!=v),o=(p=B=>{var W=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(W/60)).padStart(2,"0")}${String(W%60).padStart(2,"0")}`})(k),p=p(v),v<k?($t(o,m,17),$t(p,f,17)):($t(o,f,17),$t(p,m,17))}var c0=()=>Date.now();function h0(o,p,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),($(),fe)[m>>>3>>>0]=BigInt(o),0):28}var aa=[],wh=(o,p)=>{aa.length=0;for(var m;m=($(),L)[o++>>>0];){var f=m!=105;p+=(f&=m!=112)&&p%8?4:0,aa.push(m==112?($(),K)[p>>>2>>>0]:m==106?($(),fe)[p>>>3>>>0]:m==105?($(),R)[p>>>2>>>0]:($(),ee)[p>>>3>>>0]),p+=f?8:4}return aa};function f0(o,p,m){return o>>>=0,p=wh(p>>>0,m>>>0),ha[o](...p)}function m0(o,p,m){return o>>>=0,p=wh(p>>>0,m>>>0),ha[o](...p)}var g0=()=>{};function y0(o,p){return E(Te(o>>>0,p>>>0))}var _0=()=>{throw we+=1,"unwind"};function b0(){return 4294901760}var w0=()=>navigator.hardwareConcurrency,qt={},Jr=o=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+p[1]:0},$h=o=>{for(var p of o)(o=Jr(p))&&(qt[o]=p)};function $0(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),$h(o),qt.gd=Jr(o[3]),qt.Jd=o,qt.gd}function ei(o){if(!(o=qt[o>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(o))o=p[1];else{if(!(p=/^(.+?)@/.exec(o)))return 0;o=p[1]}it(ei.hd??0),p=jr(o)+1;var m=_r(p);return m&&$t(o,m,p),ei.hd=m,ei.hd}function v0(o){o>>>=0;var p=($(),L).length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var f=p*(1+.2/m);f=Math.min(f,o+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(o,f)/65536))-wt.buffer.byteLength+65535)/65536|0;try{wt.grow(f),H();var v=1;break e}catch{}v=void 0}if(v)return!0}return!1}function x0(o,p,m){if(o>>>=0,p>>>=0,qt.gd==o)var f=qt.Jd;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),$h(f);for(var v=3;f[v]&&Jr(f[v])!=o;)++v;for(o=0;o<m&&f[o+v];++o)($(),R)[p+4*o>>>2>>>0]=Jr(f[o+v]);return o}var sa,oa={},vh=()=>{var f;if(!sa){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((f=globalThis.navigator)==null?void 0:f.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in oa)oa[o]===void 0?delete p[o]:p[o]=oa[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);sa=m}return sa};function xh(o,p){if(n)return ie(19,1,o,p);o>>>=0,p>>>=0;var m,f=0,v=0;for(m of vh()){var k=p+f;($(),K)[o+v>>>2>>>0]=k,f+=$t(m,k,1/0)+1,v+=4}return 0}function Sh(o,p){if(n)return ie(20,1,o,p);o>>>=0,p>>>=0;var m=vh();for(var f of(($(),K)[o>>>2>>>0]=m.length,o=0,m))o+=jr(f)+1;return($(),K)[p>>>2>>>0]=o,0}function Th(o){return n?ie(21,1,o):52}function kh(o,p,m,f){return n?ie(22,1,o,p,m,f):52}function Ih(o,p,m,f){return n?ie(23,1,o,p,m,f):70}var S0=[null,[],[]];function Eh(o,p,m,f){if(n)return ie(24,1,o,p,m,f);p>>>=0,m>>>=0,f>>>=0;for(var v=0,k=0;k<m;k++){var z=($(),K)[p>>>2>>>0],B=($(),K)[p+4>>>2>>>0];p+=8;for(var W=0;W<B;W++){var j=o,ae=($(),L)[z+W>>>0],pe=S0[j];ae===0||ae===10?((j===1?T:E)(Fc(pe)),pe.length=0):pe.push(ae)}v+=B}return($(),K)[f>>>2>>>0]=v,0}function T0(o){return o>>>0}n||function(){for(var o=t.numThreads-1;o--;)Uc();Be.push(async()=>{var p=async function(){if(!n)return Promise.all(bt.map(Pc))}();Ue++,await p,--Ue==0&&Me&&(p=Me,Me=null,p())})}(),n||(wt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),H()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>oe(),t.stackRestore=o=>se(o),t.stackAlloc=o=>da(o),t.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":($(),D)[o>>>0]=p;break;case"i16":($(),F)[o>>>1>>>0]=p;break;case"i32":($(),R)[o>>>2>>>0]=p;break;case"i64":($(),fe)[o>>>3>>>0]=BigInt(p);break;case"float":($(),X)[o>>>2>>>0]=p;break;case"double":($(),ee)[o>>>3>>>0]=p;break;case"*":($(),K)[o>>>2>>>0]=p;break;default:q(`invalid type for setValue: ${m}`)}},t.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return($(),D)[o>>>0];case"i16":return($(),F)[o>>>1>>>0];case"i32":return($(),R)[o>>>2>>>0];case"i64":return($(),fe)[o>>>3>>>0];case"float":return($(),X)[o>>>2>>>0];case"double":return($(),ee)[o>>>3>>>0];case"*":return($(),K)[o>>>2>>>0];default:q(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Te,t.stringToUTF8=$t,t.lengthBytesUTF8=jr;var zh,Ch,ti,it,_r,ua,Ah,Oh,Rh,la,Bh,Mh,le,br,Nh,se,da,oe,Dh,pa,Ph,Uh,qh,ca,Lh,Wh,Vh,Gh,Hh,Fh,jh,Kh,Xh,Zh,Qh,Yh,Jh,ef,tf,rf,nf,af,sf,of,uf,lf,df,pf,cf,hf,ff,mf,gf,yf,_f,bf,wf,$f,vf,xf,Sf,Tf,kf,dt,k0=[qe,Gr,Wc,jc,Kc,Xc,Zc,Qc,Yc,Jc,eh,th,rh,ih,nh,ah,yh,_h,bh,xh,Sh,Th,kh,Ih,Eh],ha={1003524:(o,p,m,f,v)=>{if(t===void 0||!t.Xc)return 1;if((o=Te(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),f=Number(f>>>0),p+m>o.byteLength)return 3;try{let k=o.subarray(p,p+m);switch(v){case 0:($(),L).set(k,f>>>0);break;case 1:t.Qd?t.Qd(f,k):t.Id(f,k);break;default:return 4}return 0}catch{return 4}},1004348:(o,p,m)=>{t.td(o,($(),L).subarray(p>>>0,p+m>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m),!0)},1004704:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,p,m)=>{t.$b("HardSigmoid",o,{alpha:p,beta:m})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,p,m)=>{t.$b("Clip",o,{min:p,max:m})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,p)=>{t.$b("Elu",o,{alpha:p})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,p)=>{t.$b("LeakyRelu",o,{alpha:p})},1006444:(o,p)=>{t.$b("ThresholdedRelu",o,{alpha:p})},1006514:(o,p)=>{t.$b("Cast",o,{to:p})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,p,m,f,v)=>{t.$b("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007283:(o,p,m,f,v)=>{t.$b("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007457:(o,p,m,f,v)=>{t.$b("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007631:(o,p,m,f,v)=>{t.$b("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007806:(o,p,m,f,v)=>{t.$b("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1007980:(o,p,m,f,v)=>{t.$b("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008153:(o,p,m,f,v)=>{t.$b("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008326:(o,p,m,f,v)=>{t.$b("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008503:(o,p,m,f,v)=>{t.$b("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008683:(o,p,m,f,v)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,p,m)=>{t.$b("Transpose",o,{perm:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1009040:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Te(m),format:f?"NHWC":"NCHW"})},1009173:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Te(m),format:f?"NHWC":"NCHW"})},1009306:(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e,xt)=>{t.$b("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[v],pads:[k,z],strides:[B],wIsConst:()=>!!($(),D)[j>>>0],outputPadding:ae?Array.from(($(),R).subarray(Number(ae)>>>0,Number(pe)>>>0)):[],outputShape:_e?Array.from(($(),R).subarray(Number(_e)>>>0,Number($e)>>>0)):[],activation:Te(xt)})},1009739:(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from(($(),R).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),pads:Array.from(($(),R).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from(($(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!($(),D)[W>>>0],outputPadding:j?Array.from(($(),R).subarray(Number(j)>>>0,Number(ae)>>>0)):[],outputShape:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(_e)>>>0)):[],activation:Te($e)})},1010400:(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e,xt)=>{t.$b("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[v],pads:[k,z],strides:[B],wIsConst:()=>!!($(),D)[j>>>0],outputPadding:ae?Array.from(($(),R).subarray(Number(ae)>>>0,Number(pe)>>>0)):[],outputShape:_e?Array.from(($(),R).subarray(Number(_e)>>>0,Number($e)>>>0)):[],activation:Te(xt)})},1010833:(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from(($(),R).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),pads:Array.from(($(),R).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from(($(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!($(),D)[W>>>0],outputPadding:j?Array.from(($(),R).subarray(Number(j)>>>0,Number(ae)>>>0)):[],outputShape:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(_e)>>>0)):[],activation:Te($e)})},1011494:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1011585:(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e)=>{t.$b("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:j?Array.from(($(),R).subarray(Number(j)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1012064:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1012155:(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e)=>{t.$b("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:j?Array.from(($(),R).subarray(Number(j)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1012634:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1012721:(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e)=>{t.$b("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:j?Array.from(($(),R).subarray(Number(j)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1013196:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1013283:(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e)=>{t.$b("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:j?Array.from(($(),R).subarray(Number(j)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1013758:(o,p,m,f,v)=>{t.$b("Gemm",o,{alpha:p,beta:m,transA:f,transB:v})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,p,m,f)=>{t.$b("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014024:(o,p,m,f)=>{t.$b("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014132:(o,p)=>{t.$b("Softmax",o,{axis:p})},1014195:(o,p)=>{t.$b("Concat",o,{axis:p})},1014255:(o,p,m,f,v)=>{t.$b("Split",o,{axis:p,numOutputs:m,splitSizes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,p)=>{t.$b("Gather",o,{axis:Number(p)})},1014536:(o,p)=>{t.$b("GatherElements",o,{axis:Number(p)})},1014615:(o,p)=>{t.$b("GatherND",o,{batch_dims:Number(p)})},1014694:(o,p,m,f,v,k,z,B,W,j,ae)=>{t.$b("Resize",o,{antialias:p,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],coordinateTransformMode:Te(v),cubicCoeffA:k,excludeOutside:z,extrapolationValue:B,keepAspectRatioPolicy:Te(W),mode:Te(j),nearestMode:Te(ae)})},1015056:(o,p,m,f,v,k,z)=>{t.$b("Slice",o,{starts:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[],axes:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015486:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,p)=>{t.$b("Einsum",o,{equation:Te(p)})},1015734:(o,p,m,f,v)=>{t.$b("Pad",o,{mode:p,value:m,pads:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1015877:(o,p,m,f,v,k)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!f,format:k?"NHWC":"NCHW"})},1016046:(o,p,m,f,v,k)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!f,format:k?"NHWC":"NCHW"})},1016215:(o,p,m)=>{t.$b("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},1016312:(o,p,m)=>{t.$b("DequantizeLinear",o,{axis:p,blockSize:m})},1016402:(o,p,m,f,v)=>{t.$b("GridSample",o,{align_corners:p,mode:Te(m),padding_mode:Te(f),format:v?"NHWC":"NCHW"})},1016572:(o,p,m,f,v)=>{t.$b("GridSample",o,{align_corners:p,mode:Te(m),padding_mode:Te(f),format:v?"NHWC":"NCHW"})},1016742:(o,p)=>{t.$b("ScatterND",o,{reduction:Te(p)})},1016827:(o,p,m,f,v,k,z,B,W)=>{t.$b("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:v,doRotary:k,qkvHiddenSizes:z?Array.from(($(),R).subarray(Number(B)>>>0,Number(B)+z>>>0)):[],pastPresentShareBuffer:!!W})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e,xt,fa)=>{t.$b("Conv",o,{format:pe?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],group:v,kernel_shape:k?Array.from(($(),R).subarray(Number(k)>>>0,Number(z)>>>0)):[],pads:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(W)>>>0)):[],strides:j?Array.from(($(),R).subarray(Number(j)>>>0,Number(ae)>>>0)):[],w_is_const:()=>!!($(),D)[Number(_e)>>>0],activation:Te($e),activation_params:xt?Array.from(($(),X).subarray(Number(xt)>>>0,Number(fa)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,p,m,f,v,k,z,B,W)=>{t.$b("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:f,softcap:v,doRotary:k,rotaryInterleaved:z,smoothSoftmax:B,localWindowSize:W})},1018124:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018235:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018346:(o,p,m,f,v,k)=>{t.$b("MatMulNBits",o,{k:p,n:m,accuracyLevel:f,bits:v,blockSize:k})},1018473:(o,p,m,f,v,k)=>{t.$b("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:v,doRotary:k})},1018632:(o,p)=>{t.$b("QuickGelu",o,{alpha:p})},1018696:(o,p,m,f,v)=>{t.$b("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:f,scale:v})},1018835:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1018937:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1019039:(o,p,m,f)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:f})},1019160:o=>{t.Fd(o)},1019194:(o,p)=>t.Hd(Number(o),Number(p),t.Yc.Kd,t.Yc.errors)};function I0(o,p,m){return ch(async()=>{await t.Dd(Number(o),Number(p),Number(m))})}function E0(){return typeof wasmOffsetConverter<"u"}function z0(o,p,m,f){var v=oe();try{return Kh(o,p,m,f)}catch(k){if(se(v),k!==k+0)throw k;le(1,0)}}function C0(o,p,m){var f=oe();try{return Gh(o,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function A0(o){var p=oe();try{Lh(o)}catch(m){if(se(p),m!==m+0)throw m;le(1,0)}}function O0(o,p){var m=oe();try{return ca(o,p)}catch(f){if(se(m),f!==f+0)throw f;le(1,0)}}function R0(o,p,m){var f=oe();try{qh(o,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function B0(o,p){var m=oe();try{Xh(o,p)}catch(f){if(se(m),f!==f+0)throw f;le(1,0)}}function M0(o,p,m,f,v,k,z){var B=oe();try{return Fh(o,p,m,f,v,k,z)}catch(W){if(se(B),W!==W+0)throw W;le(1,0)}}function N0(o,p,m,f,v,k){var z=oe();try{Wh(o,p,m,f,v,k)}catch(B){if(se(z),B!==B+0)throw B;le(1,0)}}function D0(o,p,m,f){var v=oe();try{jh(o,p,m,f)}catch(k){if(se(v),k!==k+0)throw k;le(1,0)}}function P0(o,p,m,f,v){var k=oe();try{Vh(o,p,m,f,v)}catch(z){if(se(k),z!==z+0)throw z;le(1,0)}}function U0(o,p,m,f,v,k,z){var B=oe();try{Qh(o,p,m,f,v,k,z)}catch(W){if(se(B),W!==W+0)throw W;le(1,0)}}function q0(o,p,m,f,v,k,z){var B=oe();try{Yh(o,p,m,f,v,k,z)}catch(W){if(se(B),W!==W+0)throw W;le(1,0)}}function L0(o,p,m,f,v,k,z,B){var W=oe();try{rf(o,p,m,f,v,k,z,B)}catch(j){if(se(W),j!==j+0)throw j;le(1,0)}}function W0(o,p,m,f,v){var k=oe();try{return Zh(o,p,m,f,v)}catch(z){if(se(k),z!==z+0)throw z;le(1,0)}}function V0(o,p,m){var f=oe();try{return nf(o,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function G0(o,p,m,f,v,k,z,B){var W=oe();try{af(o,p,m,f,v,k,z,B)}catch(j){if(se(W),j!==j+0)throw j;le(1,0)}}function H0(o,p,m,f,v,k,z,B,W,j,ae,pe){var _e=oe();try{Jh(o,p,m,f,v,k,z,B,W,j,ae,pe)}catch($e){if(se(_e),$e!==$e+0)throw $e;le(1,0)}}function F0(o,p,m,f,v,k){var z=oe();try{return ef(o,p,m,f,v,k)}catch(B){if(se(z),B!==B+0)throw B;le(1,0)}}function j0(o,p,m){var f=oe();try{return sf(o,p,m)}catch(v){if(se(f),v!==v+0)throw v;return le(1,0),0n}}function K0(o,p,m,f,v,k,z,B,W){var j=oe();try{Hh(o,p,m,f,v,k,z,B,W)}catch(ae){if(se(j),ae!==ae+0)throw ae;le(1,0)}}function X0(o){var p=oe();try{return of(o)}catch(m){if(se(p),m!==m+0)throw m;le(1,0)}}function Z0(o,p){var m=oe();try{return vf(o,p)}catch(f){if(se(m),f!==f+0)throw f;return le(1,0),0n}}function Q0(o){var p=oe();try{return uf(o)}catch(m){if(se(p),m!==m+0)throw m;return le(1,0),0n}}function Y0(o,p,m,f){var v=oe();try{return ff(o,p,m,f)}catch(k){if(se(v),k!==k+0)throw k;le(1,0)}}function J0(o,p,m,f,v){var k=oe();try{return mf(o,p,m,f,v)}catch(z){if(se(k),z!==z+0)throw z;le(1,0)}}function ey(o,p,m,f,v,k){var z=oe();try{return gf(o,p,m,f,v,k)}catch(B){if(se(z),B!==B+0)throw B;le(1,0)}}function ty(o,p,m,f,v,k){var z=oe();try{return yf(o,p,m,f,v,k)}catch(B){if(se(z),B!==B+0)throw B;le(1,0)}}function ry(o,p,m,f,v,k,z,B){var W=oe();try{return tf(o,p,m,f,v,k,z,B)}catch(j){if(se(W),j!==j+0)throw j;le(1,0)}}function iy(o,p,m,f,v){var k=oe();try{return _f(o,p,m,f,v)}catch(z){if(se(k),z!==z+0)throw z;return le(1,0),0n}}function ny(o,p,m,f){var v=oe();try{return bf(o,p,m,f)}catch(k){if(se(v),k!==k+0)throw k;le(1,0)}}function ay(o,p,m,f){var v=oe();try{return wf(o,p,m,f)}catch(k){if(se(v),k!==k+0)throw k;le(1,0)}}function sy(o,p,m,f,v,k,z,B,W,j,ae,pe){var _e=oe();try{return $f(o,p,m,f,v,k,z,B,W,j,ae,pe)}catch($e){if(se(_e),$e!==$e+0)throw $e;le(1,0)}}function oy(o,p,m,f,v,k,z,B,W,j,ae){var pe=oe();try{cf(o,p,m,f,v,k,z,B,W,j,ae)}catch(_e){if(se(pe),_e!==_e+0)throw _e;le(1,0)}}function uy(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e,xt,fa){var cy=oe();try{hf(o,p,m,f,v,k,z,B,W,j,ae,pe,_e,$e,xt,fa)}catch(ma){if(se(cy),ma!==ma+0)throw ma;le(1,0)}}function ly(o,p,m){var f=oe();try{return lf(o,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function dy(o,p,m){var f=oe();try{return df(o,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function py(o,p,m,f){var v=oe();try{pf(o,p,m,f)}catch(k){if(se(v),k!==k+0)throw k;le(1,0)}}function ri(){if(0<Ue)Me=ri;else if(n)b==null||b(t),Z();else{for(var o=Be;0<o.length;)o.shift()(t);0<Ue?Me=ri:(t.calledRun=!0,C||(Z(),b==null||b(t)))}}return n||(dt=await Ve(),ri()),t.PTR_SIZE=4,U?t:new Promise((o,p)=>{b=o,S=p})}var qa,La,Zf=P(()=>{var e,t;qa=Ua,La=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),La&&Ua()}),ci,hi,Wa,De,Va,vr,Ga,Ha,fi,Fa,mi,ja,gi,Ka,yi=P(()=>{li(),ci=typeof location>"u"?void 0:location.origin,hi=self.location.href>"file:"&&self.location.href<"file;",Wa=()=>{{if(hi){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,ci).href}return self.location.href}},De=Wa(),Va=()=>{if(De&&!De.startsWith("blob:"))return De.substring(0,De.lastIndexOf("/")+1)},vr=(e,t)=>{try{let r=t??De;return(r?new URL(e,r):new URL(e)).origin===ci}catch{return!1}},Ga=(e,t)=>{let r=t??De;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ha=(e,t)=>`${t??"./"}${e}`,fi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Fa=async e=>(await import(e)).default,mi=(Xf(),Zt(Na)).default,ja=async()=>{if(!De)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(vr(De))return[void 0,mi()];let e=await fi(De);return[e,mi(e)]},gi=(Zf(),Zt(Pa)).default,Ka=async(e,t,r,i)=>{let n=gi&&!(e||t);if(n)if(De)n=vr(De)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,gi];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Ga(a,t),u=r&&s&&!vr(s,t),l=u?await fi(s):s??Ha(a,t);return[u?l:void 0,await Fa(l)]}}}),_i,xr,er,bi,Xa,Za,Qa,wi,be,kt=P(()=>{yi(),xr=!1,er=!1,bi=!1,Xa=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Za=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Qa=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},wi=async e=>{if(xr)return Promise.resolve();if(er)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(bi)throw new Error("previous call to 'initializeWebAssembly()' failed.");er=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Qa())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Za())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Xa();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,u=(s==null?void 0:s.href)??s,l=n==null?void 0:n.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[h,g]=await Ka(u,a,r>1,!!c||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),_.push(new Promise((b,S)=>{let x={numThreads:r};if(c)x.wasmBinary=c,x.locateFile=w=>w;else if(d||a)x.locateFile=w=>d??a+w;else if(u&&u.indexOf("blob:")!==0)x.locateFile=w=>new URL(w,u).href;else if(h){let w=Va();w&&(x.locateFile=I=>w+I)}g(x).then(w=>{er=!1,xr=!0,_i=w,b(),h&&URL.revokeObjectURL(h)},w=>{er=!1,bi=!0,S(w)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},be=()=>{if(xr&&_i)return _i;throw new Error("WebAssembly is not initialized yet.")}}),je,Sr,me,$i=P(()=>{kt(),je=(e,t)=>{let r=be(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},Sr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")Sr(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},me=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Ya,Qf=P(()=>{kt(),$i(),Ya=e=>{let t=be(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=je(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&me("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Sr(e.extra,"",new WeakSet,(s,u)=>{let l=je(s,i),d=je(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&me(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),Ja,es,ts,It,rs,is,Yf=P(()=>{kt(),$i(),Ja=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},es=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ts=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},It=(e,t,r,i)=>{let n=je(t,i),a=je(r,i);be()._OrtAddSessionConfigEntry(e,n,a)!==0&&me(`Can't set a session config entry: ${t} - ${r}.`)},rs=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",It(e,"session.disable_quant_qdq","1",r),It(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let h=n==null?void 0:n.deviceType;h&&It(e,"deviceType",h,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let h=n;if(h!=null&&h.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);It(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let u=je(a,r),l=s.length,d=0,c=0;if(l>0){d=be()._malloc(l*be().PTR_SIZE),r.push(d),c=be()._malloc(l*be().PTR_SIZE),r.push(c);for(let h=0;h<l;h++)be().setValue(d+h*be().PTR_SIZE,s[h][0],"*"),be().setValue(c+h*be().PTR_SIZE,s[h][1],"*")}await be()._OrtAppendExecutionProvider(e,u,d,c,l)!==0&&me(`Can't append execution provider: ${a}.`)}},is=async e=>{let t=be(),r=0,i=[],n=e||{};ts(n);try{let a=Ja(n.graphOptimizationLevel??"all"),s=es(n.executionMode??"sequential"),u=typeof n.logId=="string"?je(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof n.optimizedModelFilePath=="string"?je(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,u,l,d,c),r===0&&me("Can't create session options."),n.executionProviders&&await rs(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);It(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[h,g]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=je(h,i);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&me(`Can't set a free dimension override: ${h} - ${g}.`)}return n.extra!==void 0&&Sr(n.extra,"",new WeakSet,(h,g)=>{It(r,h,g,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&me("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),Et,st,zt,Tr,kr,vi,xi,Si,te=P(()=>{Et=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},st=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},zt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},Tr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},kr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},vi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",xi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Si=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ti,ns=P(()=>{li(),Ti=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await n.read();if(u)break;let d=l.byteLength;new Uint8Array(a,s,d).set(l),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),as,ss,os,us,ki,ls,de,ot=P(()=>{te(),as=["V","I","W","E","F"],ss=(e,t)=>{console.log(`[${as[e]},${new Date().toISOString()}]${t}`)},ki=(e,t)=>{os=e,us=t},ls=(e,t)=>{let r=kr(e),i=kr(os);r>=i&&ss(r,typeof t=="function"?t():t)},de=(...e)=>{us&&ls(...e)}}),ds,Vt,O,Ir,ps,cs,hs,re=P(()=>{ds=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Vt=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let u=ds.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(u===void 0)return;[s[a-2],s[a-1]]=u}for(let u=r?3:1;u<=a;u++){let l=i-u<0?1:e[i-u],d=n-u<0?1:t[n-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[a-u]=Math.max(l,d);else{if(c>1)return;s[a-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},O=class ii{static size(t){return ii.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ii.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ii.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Ir=class wr{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,u){if(u){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)wr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],n[l],a,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,n,a,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return wr.computeShapeHelper(t,r,l,i,n,a,s,u),l}static computeConvOutputShape(t,r,i,n,a,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return wr.computeShapeHelper(!1,t,l,i,n,a,s,u),l}static computeShapeHelper(t,r,i,n,a,s,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(wr.adjustPadAndReturnShape(r[d+2],n[d],a[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,a,s,u,l){let d=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),a[u]=c-a[s],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[u]-d)/r+1)}},ps=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,u;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Vt.isValidBroadcast(n,[a,u]))throw new Error("gemm: invalid bias shape for broadcast");return[a,u,s]}},cs=-34028234663852886e22,hs=34028234663852886e22}),Ii,fs=P(()=>{te(),Ii=(e,t)=>new(Tr(t))(e)}),Ei,zi,Ci,ms,Ai,gs,Oi,Ri,Bi,ys,_s,Jf=P(()=>{te(),ot(),Ei=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),zi=(e,t)=>{if(t==="int32")return e;let r=Ei.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(Tr(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let u=0;u<n;u++){let l=a[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ci=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},ms=1,Ai=()=>ms++,gs=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Oi=(e,t)=>{let r=Ei.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},Ri=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Oi(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Ci(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Bi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=gs.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Oi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=zi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Ci(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},ys=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Ai();return this.tensorTrackersById.set(e,new Bi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=Ai(),s=new Ri({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new Bi(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new Ri({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},_s=(...e)=>new ys(...e)}),tr,bs,ws,em=P(()=>{te(),kt(),fs(),Jf(),ot(),tr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),bs=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},ws=class{constructor(e){this.tensorManager=_s(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ki(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>bs(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=tr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=tr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ii(r,t)}}registerMLTensor(e,t,r,i){let n=tr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=a.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let h=zi(new Uint8Array(d),"int64");c=new Int32Array(h.buffer),n.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return de("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=tr.get(Et(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(n!=null&&n.input.dataTypes.includes(i)):!!(n!=null&&n.output.dataTypes.includes(i))}flush(){}}}),Mi=P(()=>{}),Ni,Er,zr,$s,vs,Di,Pi,xs,Ss,tm=P(()=>{ot(),Mi(),Ni=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Er=[],zr=e=>Math.ceil(Number(e)/16)*16,$s=e=>{for(let t=0;t<Er.length;t++){let r=Er[t];if(e<=r)return r}return Math.ceil(e/16)*16},vs=1,Di=()=>vs++,Pi=async(e,t,r,i)=>{let n=zr(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let u=a.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{a.destroy()}},xs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ni)Er.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=zr(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),u.destroy(),de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=zr(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Di();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=$s(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let u=(n?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Di(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Pi(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ni.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ss=(...e)=>new xs(...e)}),Ts,he,xe=P(()=>{Ts=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new Ts(e)}),Gt,Cr,ke,Ce,J,ve,Ui,Ht,ft,Y,rr,N,Q,ks,qi,Is,Es,ne=P(()=>{te(),re(),Gt=64,Cr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ke=(e,t=1)=>{let r=Cr(e,t);return typeof r=="string"?r:r[0]},Ce=(e,t=1)=>{let r=Cr(e,t);return typeof r=="string"?r:r[1]},J=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},ve=e=>e%4===0?4:e%2===0?2:1,Ui=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ht=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ft=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Y=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,rr=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Cr(t,n),c=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],g={indices:l,value:c,storage:h,tensor:t},y=U=>typeof U=="string"?U:`${U}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=a?"uniforms.":"",S=`${b}${e}_shape`,x=`${b}${e}_strides`,w="";for(let U=0;U<s-1;U++)w+=`
    let dim${U} = current / ${Y(x,U,s)};
    let rest${U} = current % ${Y(x,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;w+=`indices[${s-1}] = current;`;let I=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${w}
    return indices;
  }`,T=U=>(_.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),E=[];if(s>=2)for(let U=s-1;U>=0;U--)E.push(`${Y(x,U,s)} * (indices[${U}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,A=U=>(_.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),$=(...U)=>s===0?"0u":`${g.indices}(${U.map(y).join(",")})`,M=(U,H)=>s<2?`${U}`:`${Y(U,H,s)}`,D=(U,H,Z)=>s<2?`${U}=${Z};`:`${Y(U,H,s)}=${Z};`,L={},F=(U,H)=>{_.broadcastedIndicesToOffset=!0;let Z=`${H.name}broadcastedIndicesTo${e}Offset`;if(Z in L)return`${Z}(${U})`;let q=[];for(let ge=s-1;ge>=0;ge--){let Ve=H.indicesGet("outputIndices",ge+H.rank-s);q.push(`${M(x,ge)} * (${Ve} % ${M(S,ge)})`)}return L[Z]=`fn ${Z}(outputIndices: ${H.type.indices}) -> u32 {
             return ${q.length>0?q.join("+"):"0u"};
           }`,`${Z}(${U})`},G=(U,H)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${H};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${H}), select(0u, 0xFFFFFFFFu, ${H} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${H}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${H}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),R=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),K=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${c} {
    return ${R(`i2o_${e}(indices)`)};
  }`,X=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),H=u.map(Z=>`d${Z}`).join(", ");return`
  fn get_${e}(${U}) -> ${c} {
    return get_${e}ByIndices(${$(H)});
  }`})(),ee=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let H=U.map(y).join(",");return s===0?R("0u"):s===1?R(H[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${H})`)},fe=U=>s<2?R(U):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${U})`),V=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${c}) {
    ${G(`i2o_${e}(indices)`,"value")}
  }`,ue=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),H=u.map(Z=>`d${Z}`).join(", ");return`
  fn set_${e}(${U}, value: ${c}) {
    set_${e}ByIndices(${$(H)}, value);
  }`})();return{impl:()=>{let U=[],H=!1;return _.offsetToIndices&&(U.push(I),H=!0),_.indicesToOffset&&(U.push(C),H=!0),_.broadcastedIndicesToOffset&&(Object.values(L).forEach(Z=>U.push(Z)),H=!0),_.set&&(U.push(ue),H=!0),_.setByIndices&&(U.push(V),H=!0),_.get&&(U.push(X),H=!0),_.getByIndices&&(U.push(K),H=!0),!a&&H&&U.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${x} = ${g.indices}(${O.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:T,indicesToOffset:A,broadcastedIndicesToOffset:F,indices:$,indicesGet:M,indicesSet:D,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let H=U[s];if(typeof H!="string")throw new Error("value must be string");let Z=U.slice(0,s).map(y).join(",");return s===0?G("0u",H):s===1?G(Z[0],H):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Z}, ${H})`)},setByOffset:G,setByIndices:(U,H)=>s<2?G(U,H):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${H});`),get:ee,getByOffset:R,getByIndices:fe,usage:i,name:e,strides:x,shape:S,rank:s}},N=(e,t,r,i=1)=>rr(e,t,r,"input",i),Q=(e,t,r,i=1)=>rr(e,t,r,"output",i),ks=(e,t,r)=>rr(e,t,r,"atomicOutput",1),qi=(e,t,r,i=1)=>rr(e,t,r,"internal",i),Is=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Gt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Es=(e,t)=>new Is(e,t)}),zs,Li,Cs,As,Os,Rs,Pe,Bs,Ms,mt=P(()=>{te(),re(),xe(),ne(),zs=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Li=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Cs=(e,t)=>O.sortBasedOnPerm(e,Li(e.length,t)),As=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},Os=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},Rs=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Pe=(e,t)=>{let r=e.dataType,i=e.dims.length,n=Li(i,t),a=Cs(e.dims,n),s=e.dims,u=a,l=i<2||Rs(n,e.dims),d;if(l)return d=_=>{let b=N("input",r,s,4),S=Q("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:h}=Os(e.dims,n),g=O.areEqual(h,[2,3,1]),y=O.areEqual(h,[3,1,2]);if(c.length===2||g||y){s=g?[c[0],c[1]*c[2]]:y?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let _=16;return d=b=>{let S=N("a",r,s.length),x=Q("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(S,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:b},...J(s,u)]}},getShaderSource:d}}return d=_=>{let b=N("a",r,s.length),S=Q("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}

  ${As(n,i,b,S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...J(s,u)]}},getShaderSource:d}},Bs=(e,t)=>{zs(e.inputs,t.perm),e.compute(Pe(e.inputs[0],t.perm))},Ms=e=>he({perm:e.perm})}),Ns,Ds,Ps,Us,qs,Ls,Ws,Vs,Gs,Hs,Ke,Fs,js,Ks,Xs,Zs,Qs,Ys,Js,eo,to,rm=P(()=>{te(),re(),ne(),Vi(),mt(),Ns={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ds={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ps={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Us={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},qs=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Ls=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},Ws=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},Vs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Gs=(e,t)=>{let r=[];if(!Vs(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Hs=(e,t,r,i,n,a,s)=>{let u=r[0].dims,l=O.size(a),d=O.size(s),c=N("_A",r[0].dataType,u),h=Q("output",n,a),g=64;l===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(c,h)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ps[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Ns[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ds[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Us[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Ke=(e,t,r,i)=>{let n=e.inputs.length===1?r:Wi(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((y,_)=>_));let s=O.normalizeAxes(a,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=Gs(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Pe(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=qs(u.length,l.dims.length));let[c,h]=Ls(l.dims,u),g=c;n.keepDims&&(g=Ws(c,s)),e.compute(Hs(t,n.cacheKey,[l],i,e.inputs[0].dataType,g,h),{inputs:[l]})},Fs=(e,t)=>{Ke(e,"ReduceMeanShared",t,"mean")},js=(e,t)=>{Ke(e,"ReduceL1Shared",t,"l1")},Ks=(e,t)=>{Ke(e,"ReduceL2Shared",t,"l2")},Xs=(e,t)=>{Ke(e,"ReduceLogSumExpShared",t,"logSumExp")},Zs=(e,t)=>{Ke(e,"ReduceMaxShared",t,"max")},Qs=(e,t)=>{Ke(e,"ReduceMinShared",t,"min")},Ys=(e,t)=>{Ke(e,"ReduceProdShared",t,"prod")},Js=(e,t)=>{Ke(e,"ReduceSumShared",t,"sum")},eo=(e,t)=>{Ke(e,"ReduceSumSquareShared",t,"sumSquare")},to=(e,t)=>{Ke(e,"ReduceLogSumShared",t,"logSum")}}),Xe,ro,Ar,Wi,Ze,io,no,ao,so,oo,uo,lo,po,co,ho,Qe,fo,mo,go,yo,_o,bo,wo,$o,vo,xo,Vi=P(()=>{te(),re(),xe(),ne(),rm(),Xe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ro=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ar=(e,t,r,i,n,a,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,h=O.normalizeAxes(n,c),g=!u&&h.length===0;d.forEach((b,S)=>{g||h.indexOf(S)>=0?s&&l.push(1):l.push(b)});let y=l.length,_=O.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let S=[],x=N("_A",r[0].dataType,c),w=Q("output",a,y),I=i(x,w,h),T=I[2];for(let E=0,C=0;E<c;E++)g||h.indexOf(E)>=0?(s&&C++,T=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${I[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${x.indicesSet("input_indices",E,`j${E}`)}
                  ${T}
                }`):(S.push(`${x.indicesSet("input_indices",E,w.indicesGet("output_indices",C))};`),C++);return`

        ${b.registerUniform("output_size","u32").declareVariables(x,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${T}
          ${I[3]}
          ${I.length===4?w.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...J(d,l)]})}},Wi=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ze=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:Wi(n,r);e.compute(Ar(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?ro:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},io=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},no=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ao=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},so=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},oo=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},uo=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},lo=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},po=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},co=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},ho=(e,t)=>{Xe(e.inputs),Ze(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Qe=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},fo=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uo(e,t):Fs(e,t)},mo=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?no(e,t):js(e,t)},go=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):Ks(e,t)},yo=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Xs(e,t)},_o=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Zs(e,t)},bo=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lo(e,t):Qs(e,t)},wo=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?po(e,t):Ys(e,t)},$o=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?co(e,t):Js(e,t)},vo=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ho(e,t):eo(e,t)},xo=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):to(e,t)}}),Gi,So,To,Hi,im=P(()=>{te(),xe(),Vi(),Gi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},So=(e,t)=>{Gi(e.inputs);let r=(i,n,a)=>{let s=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Ar("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},To=(e,t)=>{Gi(e.inputs);let r=(i,n,a)=>{let s=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Ar("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Hi=e=>he(e)}),ko,Or,Io,Eo,zo,ir,Co,Ao,Fi=P(()=>{te(),re(),Mi(),ne(),ko=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,g=h,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let S=_+b,x=-1,w=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:S,maxSequenceLength:x,inputHiddenSize:c,hiddenSize:h,vHiddenSize:y,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Or=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Io=(e,t,r,i,n,a,s,u)=>{let l=ve(s?1:a),d=64,c=a/l;c<d&&(d=32);let h=Math.ceil(a/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:c},{type:12,data:h}],y=ke(e.dataType,l),_=Ce(1,l),b=["type"];s&&b.push("type"),u&&b.push("type");let S=x=>{let w=Q("x",e.dataType,e.dims,l),I=[w],T=s?N("seq_lens",s.dataType,s.dims):void 0;T&&I.push(T);let E=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;E&&I.push(E);let C=Ce(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${x.registerUniforms(A).declareVariables(...I)}
  ${x.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Or(T,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:b},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:g})}},Eo=(e,t,r,i,n,a,s,u,l)=>{let d=s+a.kvSequenceLength,c=[a.batchSize,a.numHeads,a.sequenceLength,d],h=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=h?[a.batchSize,g,d,a.headSize]:void 0,_=a.nReps?a.nReps:1,b=a.scale===0?1/Math.sqrt(a.headSize):a.scale,S=ve(a.headSize),x=a.headSize/S,w=12,I={x:Math.ceil(d/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},T=[{type:12,data:a.sequenceLength},{type:12,data:x},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:_}],E=h&&i&&O.size(i.dims)>0,C=["type","type"];E&&C.push("type"),n&&C.push("type"),u&&C.push("type"),l&&C.push("type");let A=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&A.push({dims:y,dataType:t.dataType,gpuDataType:0});let $=M=>{let D=N("q",t.dataType,t.dims,S),L=N("key",r.dataType,r.dims,S),F=[D,L];if(E){let V=N("past_key",i.dataType,i.dims,S);F.push(V)}n&&F.push(N("attention_bias",n.dataType,n.dims));let G=u?N("seq_lens",u.dataType,u.dims):void 0;G&&F.push(G);let R=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;R&&F.push(R);let K=Q("output",t.dataType,c),X=[K];h&&X.push(Q("present_key",t.dataType,y,S));let ee=Ce(1,S),fe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${D.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${D.type.storage}, ${w*w}>;
  ${M.registerUniforms(fe).declareVariables(...F,...X)}
  ${M.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Or(G,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ee}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ee}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${K.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:A,dispatchGroup:I,programUniforms:T}),getShaderSource:$}},zo=(e,t,r,i,n,a,s=void 0,u=void 0)=>{let l=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,c=n.vHiddenSize*d,h=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=h?[n.batchSize,g,l,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,c],b=12,S={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},x=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=h&&i&&O.size(i.dims)>0,I=["type","type"];w&&I.push("type"),s&&I.push("type"),u&&I.push("type");let T=[{dims:_,dataType:t.dataType,gpuDataType:0}];h&&T.push({dims:y,dataType:t.dataType,gpuDataType:0});let E=C=>{let A=N("probs",t.dataType,t.dims),$=N("v",r.dataType,r.dims),M=[A,$];w&&M.push(N("past_value",i.dataType,i.dims));let D=s?N("seq_lens",s.dataType,s.dims):void 0;s&&M.push(D);let L=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;u&&M.push(L);let F=[Q("output",t.dataType,_)];h&&F.push(Q("present_value",t.dataType,y));let G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${A.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${A.type.value}, ${b*b}>;
  ${C.registerUniforms(G).declareVariables(...M,...F)}
  ${C.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Or(D,L,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:x}),getShaderSource:E}},ir=(e,t,r,i,n,a,s,u,l,d,c=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),y=g>1?s:void 0,_=g>1?u:void 0,b=g>1?d.pastSequenceLength:0,S=b+d.kvSequenceLength,x=l&&O.size(l.dims)>0?l:void 0,w=[t,r];y&&O.size(y.dims)>0&&w.push(y),x&&w.push(x),c&&w.push(c),h&&w.push(h);let I=e.compute(Eo(g,t,r,y,x,d,b,c,h),{inputs:w,outputs:g>1?[-1,1]:[-1]})[0];e.compute(Io(I,d.batchSize,d.numHeads,b,d.sequenceLength,S,c,h),{inputs:c&&h?[I,c,h]:[I],outputs:[]});let T=[I,i];_&&O.size(_.dims)>0&&T.push(_),c&&T.push(c),h&&T.push(h),e.compute(zo(g,I,i,_,d,b,c,h),{inputs:T,outputs:g>1?[0,2]:[0]})},Co=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let g=Q("output_q",l[0].dataType,r),y=Q("output_k",l[0].dataType,r),_=Q("output_v",l[0].dataType,r),b=N("input",l[0].dataType,l[0].dims),S=N("weight",l[1].dataType,l[1].dims),x=N("bias",l[2].dataType,l[2].dims),w=b.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${h.registerUniforms(I).declareVariables(b,S,x,g,y,_)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Ao=(e,t)=>{let r=ko(e.inputs,t),[i,n,a]=Co(e,r);return ir(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Oo,Ro,Bo,Mo,nm=P(()=>{We(),te(),re(),xe(),ne(),Oo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((u,l)=>{if(u!==i[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Ro=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?ve(a[a.length-1]):1,u=n==="NHWC"&&a.length>1?s:1,l=O.size(a)/s,d=i,c=d?a.length:a,h=N("x",e[0].dataType,e[0].dims,s),g=N("scale",e[1].dataType,e[1].dims,u),y=N("bias",e[2].dataType,e[2].dims,u),_=N("inputMean",e[3].dataType,e[3].dims,u),b=N("inputVar",e[4].dataType,e[4].dims,u),S=Q("y",e[0].dataType,c,s),x=()=>{let I="";if(i)I=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")I=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let T=1;T<g.rank;T++)I+=`cIndices[${T}] = outputIndices[${T}];`;I+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return I},w=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(h,g,y,_,b,S)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...J(a)]:[{type:12,data:l}]})}},Bo=e=>he(e),Mo=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Bo({...t,outputCount:i});if(ye.webgpu.validateInputContent&&Oo(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ro(r,n))}}),No,Do,Po,am=P(()=>{re(),ne(),No=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Do=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,n=e[0].dataType,a=N("input",n,t,4),s=N("bias",n,[r],4),u=N("residual",n,t,4),l=Q("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Po=e=>{No(e.inputs),e.compute(Do(e.inputs))}}),Uo,ce,qo,Lo,Wo,Vo,Go,Ho,Fo,jo,Ko,Xo,Zo,Qo,Yo,Jo,nr,eu,Rr,tu,ru,iu,nu,au,su,ou,uu,lu,du,pu,cu,hu,fu,mu,gu,ji,yu,Ki,Xi,_u,bu,wu,$u,vu,xu,Zi=P(()=>{te(),re(),xe(),ne(),Uo=(e,t,r,i,n,a,s)=>{let u=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=N("inputData",r,[u],4),c=Q("outputData",i,[u],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(d,c)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,n,a=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Uo(d,O.size(e.dims),e.dataType,a,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(O.size(d[0].dims)/64/4)},programUniforms:l})}},qo=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},Lo=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},Wo=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},Vo=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},Go=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},Ho=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},Fo=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},jo=e=>he(e),Ko=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Xo=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},Zo=(e,t)=>{let r=t||Xo(e.inputs),i=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Qo=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},Yo=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},Jo=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},nr=e=>he(e),eu=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Rr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,tu=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Rr(t)))},ru=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},iu=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},nu=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Rr(t)))},au=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},su=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},ou=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},uu=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},lu=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},du=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},pu=e=>he(e),cu=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},hu=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},fu=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},mu=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},gu=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},ji=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,yu=e=>{e.compute(ce(e.inputs[0],"Tanh",ji))},Ki=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ji("v")};
}
`,Xi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,_u=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",Xi,Ki(t),void 0,e.inputs[0].dataType))},bu=(e,t)=>{let r=Ce(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},wu=e=>{e.compute(ce(e.inputs[0],"Log","log"))},$u=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,vu=e=>`quick_gelu_impl(${e})`,xu=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",vu,$u(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Su,Tu,ku,sm=P(()=>{re(),ne(),Zi(),Su=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Tu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=N("input",e[0].dataType,e[0].dims,4),i=N("bias",e[0].dataType,[e[0].dims[2]],4),n=Q("output",e[0].dataType,t,4),a=O.size(t)/4,s=ke(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,n)}

  ${Rr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},ku=e=>{Su(e.inputs),e.compute(Tu(e.inputs))}}),Iu,Eu,Ye,zu,Cu,Au,Ou,Ru,Bu,Mu,Nu,Du,Pu,om=P(()=>{te(),re(),ne(),Iu=(e,t,r,i,n,a,s,u,l,d,c,h)=>{let g,y;typeof u=="string"?g=y=(w,I)=>`${u}((${w}),(${I}))`:typeof u=="function"?g=y=u:(g=u.scalar,y=u.vector);let _=Q("outputData",c,i.length,4),b=N("aData",l,t.length,4),S=N("bData",d,r.length,4),x;if(n)if(a){let w=O.size(t)===1,I=O.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;w||I?x=_.setByOffset("global_idx",y(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),I?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):x=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(s||T?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=_.setByOffset("global_idx",y(b.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(I,T,E="")=>{let C=`aData[indexA${T}][componentA${T}]`,A=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${_.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${b.broadcastedIndicesToOffset(`outputIndices${T}`,_)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,_)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${I}[${T}] = ${E}(${g(C,A)});
          `};c===9?x=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,S,_)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Eu=(e,t,r,i,n,a,s=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),d=!O.areEqual(u,l),c=u,h=O.size(u),g=!1,y=!1,_=[d];if(d){let b=Vt.calcShape(u,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");c=b.slice(),h=O.size(c);let S=O.size(u)===1,x=O.size(l)===1,w=u.length>0&&u[u.length-1]%4===0,I=l.length>0&&l[l.length-1]%4===0;_.push(S),_.push(x),_.push(w),_.push(I);let T=1;for(let E=1;E<c.length;E++){let C=u[u.length-E],A=l[l.length-E];if(C===A)T*=C;else break}T%4===0?(y=!0,g=!0):(S||x||w||I)&&(g=!0)}else g=!0;return _.push(g),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Iu(b,u,l,c,g,d,y,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(c)/4)},...J(u,l,c)]})}},Ye=(e,t,r,i,n,a)=>{e.compute(Eu(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},zu=e=>{Ye(e,"Add",(t,r)=>`${t}+${r}`)},Cu=e=>{Ye(e,"Div",(t,r)=>`${t}/${r}`)},Au=e=>{Ye(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Ou=e=>{Ye(e,"Mul",(t,r)=>`${t}*${r}`)},Ru=e=>{let t=N("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ye(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Bu=e=>{Ye(e,"Sub",(t,r)=>`${t}-${r}`)},Mu=e=>{Ye(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Nu=e=>{Ye(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Du=e=>{Ye(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Pu=e=>{Ye(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Uu,qu,Lu,Wu,Vu,Gu,um=P(()=>{te(),re(),xe(),ne(),Uu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},qu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Lu=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},Wu=(e,t,r,i)=>{let n=O.size(r),a=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:n}];for(let b=0;b<e.length;++b)u+=e[b].dims[t],a[b]=u,d.push(e[b].dims.length),s[b]=N(`input${b}`,i,d[b]),l.push("rank"),c.push({type:12,data:a[b]});for(let b=0;b<e.length;++b)c.push(...J(e[b].dims));c.push(...J(r));let h=Q("output",i,r.length),g=h.indicesGet("indices",t),y=Array.from(Array(a.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)b.registerUniform(`sizeInConcatAxis${S}`,"u32");return b.declareVariables(...s,h)})()}

  ${qu(a.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Lu(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:_}},Vu=(e,t)=>{let r=e.inputs,i=r[0].dims,n=O.normalizeAxis(t.axis,i.length);Uu(r,n);let a=i.slice();a[n]=r.reduce((u,l)=>u+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(u=>O.size(u.dims)>0);e.compute(Wu(s,n,a,r[0].dataType),{inputs:s})},Gu=e=>he({axis:e.axis})}),Ct,At,Ot,Qi,Rt=P(()=>{te(),re(),Ct=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},At=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ot=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Qi=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[cs,hs];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ee,Hu,Yi=P(()=>{Ee=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Hu=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Fu,lm=P(()=>{Fu=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ar,Ji,en=P(()=>{te(),re(),ne(),Rt(),ar=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${Y(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,Y(n,u+a,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},Ji=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],h=ve(d),g=ve(c),y=ve(l),_=O.size(r)/h/y,b=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),x=[O.size(S),l,d],w=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];At(t,w),w.push(...J(S,s,u)),b&&w.push(...J(e[2].dims)),w.push(...J(x));let I=T=>{let E=qi("batch_dims",e[0].dataType,S.length),C=N("a",e[0].dataType,s.length,g),A=N("b",e[1].dataType,u.length,h),$=Q("output",e[0].dataType,x.length,h),M=ke($.type.tensor),D=Ct(t,$.type.value,M),L=[C,A],F="";if(b){let K=n?h:1;L.push(N("bias",e[2].dataType,e[2].dims.length,K)),F=`${n?`value += bias[col / ${K}];`:`value += ${$.type.value}(bias[row + i]);`}`}let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ot(t,G);let R=()=>{let K=`var a_data: ${C.type.value};`;for(let X=0;X<g;X++)K+=`
              let b_data${X} = b[(b_offset + (k + ${X}) * uniforms.N + col) / ${h}];`;for(let X=0;X<y;X++){K+=`a_data = a[(a_offset + (row + ${X}) * uniforms.K + k) / ${g}];`;for(let ee=0;ee<g;ee++)K+=`
            values[${X}] = fma(${A.type.value}(a_data${g===1?"":`[${ee}]`}), b_data${ee}, values[${X}]);
`}return K};return`
  ${T.registerUniforms(G).registerInternalVariables(E).declareVariables(...L,$)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${ar("a_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${ar("b_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${R()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${F}
      ${D}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${y};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:I}}}),ju,Ku,tn,rn,Xu,nn,Zu,Br,an=P(()=>{te(),re(),ne(),Rt(),en(),Yi(),ju=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ku=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,tn=(e,t,r="f32",i,n=!1,a=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=n?l:a,h=n?a:l,g=c/t[0],y=a/t[1];if(!((n&&g===4&&e[1]===4||!n&&(g===3||g===4))&&c%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${c/g}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ju(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ku(n,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},rn=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Xu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",nn=(e,t,r="f32",i,n=!1,a=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],h=n?d:a,g=n?a:d;if(!(g%t[1]===0&&h%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],_=h/t[0],b=a/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${rn(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${rn(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Xu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Zu=(e,t,r,i,n=!1)=>{let[a,s,u,l]=i,d=ke(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ee(e,d)} {
      var value = ${Ee(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${ar("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ee(e,d)} {
      var value = ${Ee(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${ar("bIndices",u,u.rank-2,a.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ee(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ee(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Br=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),h=O.size(c),g=s[s.length-2],y=s[s.length-1],_=u[u.length-1],b=y%4===0&&_%4===0,S=g<=8?[4,1,1]:[4,4,1],x=[8,8,1],w=[Math.ceil(_/x[0]/S[0]),Math.ceil(g/x[1]/S[1]),Math.ceil(h/x[2]/S[2])],I=b?4:1,T=[...l,g,y/I],E=T.length,C=[...d,y,_/I],A=C.length,$=[h,g,_/I],M=[{type:6,data:g},{type:6,data:_},{type:6,data:y}];At(t,M),M.push(...J(c,T,C));let D=["rank","rank"],L=e.length>2;L&&(M.push(...J(e[2].dims)),D.push("rank")),M.push(...J($));let F=G=>{let R=c.length,K=qi("batchDims",e[0].dataType,R,1),X=ke(e[0].dataType),ee=N("a",e[0].dataType,E,I),fe=N("b",e[1].dataType,A,I),V=Q("result",e[0].dataType,$.length,I),ue=[ee,fe];if(L){let ge=n?I:1;ue.push(N("bias",e[2].dataType,e[2].dims.length,ge))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ot(t,U);let H=ke(V.type.tensor),Z=Ct(t,V.type.value,H),q=Zu(I,L,Z,[K,ee,fe,V],n);return`
  ${G.registerUniforms(U).registerInternalVariables(K).declareVariables(...ue,V)}
  ${q}
  ${b?tn(S,x,X,K):nn(S,x,X,K)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${b};${n}`,inputDependencies:D},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:M}),getShaderSource:F}}}),Qu,Yu,dm=P(()=>{te(),ot(),ne(),Rt(),Yi(),lm(),an(),Qu=(e,t,r,i,n=!1,a,s=4,u=4,l=4,d="f32")=>{let c=M=>{switch(M){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},h=M=>{switch(M){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",x=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Ee(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,I=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ee(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ee(s,d)}(0.0);`,T=e?i&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Ee(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Ee(u,d)}(0.0);`,E=Ee(l,d),C=Ee(e?s:u,d),A=Ee(e?u:s,d),$=Ct(a,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?I:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?T:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Hu(n)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Yu=(e,t,r,i,n,a,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],h=r[0],g=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(c%4===0||c%3===0)&&_%4===0,S=d?_:g*y,x=d?g*y:_,w=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/w[0]/I[0]),Math.ceil(x/w[1]/I[1]),Math.ceil(h/w[2]/I[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let E=b?d&&c%4!==0?3:4:1,C=w[1]*I[1],A=w[0]*I[0],$=Math.max(w[0]*E,w[1]),M=i%C===0,D=n%A===0,L=a%$===0,F=b?[E,4,4]:[1,1,1],G=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];At(t,G),G.push(...J(e[0].dims,e[1].dims));let R=["rank","rank"];s&&(G.push(...J(e[2].dims)),R.push("rank")),G.push(...J(r));let K=X=>{let ee=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ot(t,ee);let fe=b?4:1,V=ke(e[0].dataType),ue=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${V}>`:V}) {
        result[flatIndex] = ${b?`vec4<${V}>`:V}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${V}>`:V}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,U=N("x",e[0].dataType,e[0].dims.length,E===3?1:E),H=N("w",e[1].dataType,e[1].dims.length,fe),Z=[U,H],q=Q("result",e[0].dataType,r.length,fe);if(s){let ge=N("bias",e[2].dataType,e[2].dims.length,fe);Z.push(ge),ue+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${V}>`:V} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Fu("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(ee).declareVariables(...Z,q)}
        ${ue}
        ${Qu(d,M,D,L,s,t,F[0],F[1],F[2],V)}
        ${b?tn(I,w,V,void 0,!d,$):nn(I,w,V,void 0,!d,$,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${M};${D};${L};${C};${A};${$}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:G}),getShaderSource:K}}}),Ju,sn,sr,el,on,tl,rl,il,pm=P(()=>{te(),ot(),re(),ne(),Rt(),Yi(),Ju=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},sn=e=>typeof e=="number"?[e,e,e]:e,sr=(e,t)=>t<=1?e:e+(e-1)*(t-1),el=(e,t,r,i=1)=>{let n=sr(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},on=(e,t,r,i,n)=>{n==null&&(n=el(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},tl=(e,t,r,i,n,a,s,u,l,d)=>{let c,h,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=on([t,r,i,1],[u,l,d],1,[n,a,s],e);h=_[0],g=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((b,S,x)=>b===x[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=on([t,r,i,1],[u,l,d],1,[n,a,s],e[0]);h=_[0],g=_[1],y=_[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),g=Math.ceil(r/a),y=Math.ceil(i/s);let _=(h-1)*n+u-t,b=(g-1)*a+l-r,S=(y-1)*s+d-i,x=Math.floor(_/2),w=_-x,I=Math.floor(b/2),T=b-I,E=Math.floor(S/2),C=S-E;c={top:I,bottom:T,left:E,right:C,front:x,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:g,outWidth:y}},rl=(e,t,r,i,n,a=!1,s="channelsLast")=>{let u,l,d,c,h;if(s==="channelsLast")[u,l,d,c,h]=e;else if(s==="channelsFirst")[u,h,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,y,_,b]=t,[S,x,w]=sn(r),[I,T,E]=sn(i),C=sr(y,I),A=sr(_,T),$=sr(b,E),{padInfo:M,outDepth:D,outHeight:L,outWidth:F}=tl(n,l,d,c,S,x,w,C,A,$),G=a?g*h:g,R=[0,0,0,0,0];return s==="channelsFirst"?R=[u,G,D,L,F]:s==="channelsLast"&&(R=[u,D,L,F,G]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:D,outHeight:L,outWidth:F,outChannels:G,padInfo:M,strideDepth:S,strideHeight:x,strideWidth:w,filterDepth:y,filterHeight:_,filterWidth:b,effectiveFilterDepth:C,effectiveFilterHeight:A,effectiveFilterWidth:$,dilationDepth:I,dilationHeight:T,dilationWidth:E,inShape:e,outShape:R,filterShape:t}},il=(e,t,r,i,n,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((S,x)=>x)},d=[Math.ceil(Ju(l.x.map(S=>r[S]))/u[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,h=O.size(r),g=[{type:12,data:h},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];At(t,g),g.push(...J(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(g.push(...J(e[2].dims)),y.push("rank")),g.push(...J(r));let b=S=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ot(t,x);let w=1,I=ke(e[0].dataType),T=N("x",e[0].dataType,e[0].dims.length,c),E=N("W",e[1].dataType,e[1].dims.length,w),C=[T,E],A=Q("result",e[0].dataType,r.length,w),$="";if(_){let L=N("bias",e[2].dataType,e[2].dims.length,w);C.push(L),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${s?Y("coords",4,5):Y("coords",1,5)}];
        }`}let M=Ee(c,I),D=Ct(t,M,I);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(x).declareVariables(...C,A)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${A.offsetToIndices("global_idx")};
              let batch = ${Y("coords",0,T.rank)};
              let d2 = ${s?Y("coords",T.rank-1,T.rank):Y("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?Y("coords",1,T.rank):Y("coords",2,T.rank)},
              ${s?Y("coords",2,T.rank):Y("coords",3,T.rank)},
              ${s?Y("coords",3,T.rank):Y("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?Y("uniforms.x_shape",1,T.rank):Y("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?Y("uniforms.x_shape",2,T.rank):Y("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?Y("uniforms.x_shape",3,T.rank):Y("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?Y("uniforms.x_shape",4,T.rank):Y("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${D}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:g}),getShaderSource:b}}}),nl,al,cm=P(()=>{te(),re(),ne(),Rt(),nl=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,h=l&&c>=4?ve(d):1,g=O.size(r)/h,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];At(t,y),y.push(...J(s,[u[0],u[1],u[2],u[3]/h]));let _=n?["rank","rank","rank"]:["rank","rank"];y.push(...J([r[0],r[1],r[2],r[3]/h]));let b=S=>{let x=Q("output",e[0].dataType,r.length,h),w=ke(x.type.tensor),I=Ct(t,x.type.value,w),T=N("x",e[0].dataType,s.length),E=N("w",e[1].dataType,u.length,h),C=[T,E];n&&C.push(N("b",e[2].dataType,e[2].dims,h));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ot(t,A);let $=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(A).declareVariables(...C,x)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${$}
    ${a}
    ${I}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},al=(e,t,r,i)=>{let n=e.length>2,a=ve(r[3]),s=ve(r[2]),u=O.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],c=[r[0],r[1],r[2],r[3]/a],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];At(t,h),h.push(...J(l,d,c));let g=(s-1)*t.strides[1]+d[1],y=_=>{let b=Q("output",e[0].dataType,c.length,a),S=ke(b.type.tensor),x=Ct(t,b.type.value,S),w=N("x",e[0].dataType,l.length,a),I=N("w",e[1].dataType,d.length,a),T=[w,I];n&&T.push(N("b",e[2].dataType,e[2].dims,a));let E=n?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ot(t,C),`
  ${_.registerUniforms(C).declareVariables(...T,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${g}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${x}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${g};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:y}}}),sl,Mr,ol,Nr,un,ln,ul,ll,dn,hm=P(()=>{re(),dm(),pm(),an(),cm(),Rt(),en(),mt(),sl=(e,t,r,i,n,a)=>{let s=e[0],u=e.slice(a?1:2,a?3:4),l=u.length,d=t[0],c=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),h=u.map((g,y)=>g+i[y]+i[y+l]).map((g,y)=>Math.floor((g-c[y]+n[y])/n[y]));return h.splice(0,0,s),h.splice(a?3:1,0,d),h},Mr=[2,3,1,0],ol=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Nr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();Ir.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},un=e=>{let t=Qi(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ln=(e,t,r,i)=>{let n=r.format==="NHWC",a=sl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let C=[t[0]];if(n){let A=e.kernelCustomData.wT??e.compute(Pe(t[1],Mr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),C.push(A)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(al(C,r,a,i),{inputs:C}):e.compute(nl(C,r,a,i),{inputs:C});return}let s=t.length===3,u=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],c=t[1].dims[2],h=t[1].dims[3],g=a[n?1:2],y=a[n?2:3],_=a[n?3:1],b=n&&c===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(b||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=a[0],A,$,M,D=[];if(n){let G=e.kernelCustomData.wT??e.compute(Pe(t[1],Mr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),b){let R=u*l*d;A=t[0].reshape([1,C,R]),$=G.reshape([1,R,_]),M=[1,C,_]}else A=t[0].reshape([C,u*l,d]),$=G.reshape([1,d,_]),M=[C,g*y,_];D.push(A),D.push($)}else A=t[0].reshape([C,d,u*l]),$=t[1].reshape([1,_,d]),M=[C,_,g*y],D.push($),D.push(A);s&&D.push(t[2]);let L=M[2],F=D[0].dims[D[0].dims.length-1];L<8&&F<8?e.compute(Ji(D,r,a,M,n,i),{inputs:D}):e.compute(Br(D,r,a,M,n,i),{inputs:D});return}let S=!0,x=e.kernelCustomData.wT??e.compute(Pe(t[1],Mr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let w=[t[0],x];s&&w.push(t[2]);let I=n?g*y:_,T=n?_:g*y,E=c*h*d;e.compute(Yu(w,r,a,I,T,E,s,S,i),{inputs:w})},ul=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Nr({...t,pads:n,strides:a,dilations:s,kernelShape:u},i);ln(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ll=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Nr(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=rl(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(il(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},dn=(e,t)=>{if(ol(e.inputs,t),e.inputs[0].dims.length===3)ul(e,t);else if(e.inputs[0].dims.length===5)ll(e,e.inputs,t);else{let r=Nr(t,e.inputs);ln(e,e.inputs,r)}}}),dl,fm=P(()=>{te(),ot(),re(),ne(),dl=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=a?ve(l):1,h=a&&d===1&&l>=4,g=h?Math.floor(l/4)*4:Math.floor(l/c)*c,y=l-g,_=a?ve(d):1,b=a?d===1?c:_:1,S=O.size(n)/_,x=[Math.ceil(S/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let w=["rank","rank"],I=[t.strides[0],t.strides[1]],T=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],C=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],A=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:I},{type:12,data:T},{type:12,data:E},{type:12,data:C},{type:6,data:A},{type:12,data:g},{type:12,data:l},{type:12,data:d},...J(e[0].dims,e[1].dims)];i&&($.push(...J(e[2].dims)),w.push("rank")),$.push(...J(n));let M=D=>{let L=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=ke(e[0].dataType),G=a?1:2,R=a?2:3,K=a?3:1,X=N("W",e[1].dataType,e[1].dims.length,b),ee=N("Dy",e[0].dataType,e[0].dims.length,c),fe=[ee,X];i&&fe.push(N("bias",e[2].dataType,[n[K]].length,_));let V=Q("result",e[0].dataType,n.length,_),ue=()=>{let Z="";if(h)c===4?Z+=`
        let xValue = ${ee.getByOffset("x_offset")};
        let wValue = ${X.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}), vec4<${F}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}, ${ee.getByOffset("x_offset + 2u")}, ${ee.getByOffset("x_offset + 3u")}), vec4<${F}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}, ${X.getByOffset("w_offset + 2u")}, ${X.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${a?ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):ee.get("batch","inputChannel","idyR","idyC")};
        `,c===1)Z+=`
          let w_offset = ${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${X.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let q=0;q<c;q++)Z+=`
            let wValue${q} = ${X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${q}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${q}] * wValue${q};`;return Z},U=()=>{if(y===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let Z="";if(c===1){Z+="dotProd = dotProd";for(let q=0;q<y;q++)Z+=`
            + ${ee.getByOffset(`x_offset + ${q}`)} * ${X.getByOffset(`w_offset + ${q}`)}`;Z+=";"}else if(c===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);Z+=`
          let xValue = ${ee.getByOffset("x_offset")};
          let wValue = ${X.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},H=`
            let outputIndices = ${V.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${V.indicesGet("outputIndices",0)};
            let d1 = ${V.indicesGet("outputIndices",K)};
            let r = ${V.indicesGet("outputIndices",G)};
            let c = ${V.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${V.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${F}(dyRCorner) + ${F}(wR)) / ${F}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${F}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${F}(dyCCorner) + ${F}(wC)) / ${F}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${F}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${X.indicesToOffset(`${X.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:c}) {
                  ${ue()}
                  inputChannel = inputChannel + ${h?4:c};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${V.setByOffset("global_idx","value")};
          `;return`
    ${D.registerUniforms(L).declareVariables(...fe,V)}
      ${D.mainStart()}
      ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${H}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${b}${_}${h}${y}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:M}}}),pl,cl,hl,pn,fl,ml,cn,gl,yl,mm=P(()=>{fm(),Rt(),mt(),pl=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,cl=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},hl=(e,t,r,i,n,a,s,u,l,d)=>{let c=e.length-2,h=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let g=e[0],y=t[u?3:1]*n;for(let _=0,b=e.length-c-(u?1:0);_<c;++_,++b){let S=e[b],x=h?S*s[_]:d[_],w=pl(S,s[_],a[_],t[b],r[_],x);cl(w,i,a,_,_+c),h&&d.push(s[_]*(S-1)+l[_]+(t[b]-1)*r[_]+1-a[_]-a[_+c])}d.splice(0,0,g),d.splice(u?3:1,0,y)},pn=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}hl(u,r,l,e.autoPad,e.group,n,d,i,s,a);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:l,strides:d}),c},fl=e=>{let t=Qi(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:c,outputShape:h,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ml=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},cn=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Pe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(dl(a,r,i),{inputs:a})},gl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=pn({...t,pads:u,strides:s,dilations:a,kernelShape:n,outputPadding:l},i);cn(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},yl=(e,t)=>{if(ml(e.inputs,t),e.inputs[0].dims.length===3)gl(e,t);else{let r=pn(t,e.inputs);cn(e,e.inputs,r)}}}),_l,bl,wl,gm=P(()=>{te(),re(),xe(),ne(),_l=(e,t,r,i)=>{let n=O.size(t),a=t.length,s=N("input",e,a),u=Q("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=O.normalizeAxis(l,a),c=h=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,y=Y("uniforms.input_shape","uniforms.axis",a),_=i.reverse?g+(i.exclusive?" + 1":""):"0",b=i.reverse?y:g+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...J(t,t)]}),getShaderSource:c}},bl=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(_l(i,r,n,t),{inputs:[0]})},wl=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),$l,vl,xl,Sl,Tl,ym=P(()=>{te(),re(),xe(),ne(),$l=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},vl=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},xl=(e,t)=>{let r,i,n,a,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,n,a]=e.dims,s=c?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),g=h.dims.length,y=e.dataType,_=N("a",y,g),b=Q("output",y,g),S=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(_,b)}

  ${vl(u,g,_,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let w=l?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],I=O.size(w),T=h.dims,E=O.sortBasedOnPerm(T,u);return{outputs:[{dims:w,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...J(T,E)]}},getShaderSource:S}},Sl=(e,t)=>{$l(e.inputs),e.compute(xl(e.inputs[0],t))},Tl=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Dr,or,hn,kl,Il,El,zl,fn,Cl,Al,Ol,_m=P(()=>{te(),re(),xe(),ne(),Dr="[a-zA-Z]|\\.\\.\\.",or="("+Dr+")+",hn="^"+or+"$",kl="("+or+",)*"+or,Il="^"+kl+"$",El=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},zl=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Il)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let u=e[s].dims.slice();if(!a.match(RegExp(hn)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,u,s);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(or)))throw new Error("Invalid RHS");(n=i.match(RegExp(Dr,"g")))==null||n.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],u=0;if(!e.match(RegExp(hn))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Dr,"g")),d=new El(i);return l==null||l.forEach((c,h)=>{if(c==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let g=n-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<s.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,h+y),this.addSymbol(_,r[u++],i)}}else d.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},fn=e=>e+"_max",Cl=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,c)=>N(`input${c}`,t,d)),a=O.size(i),s=Q("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],h="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",_=[],b=[],S=[],x=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,E)=>{var C;if(r.rhs.symbolToIndices.has(E)){let A=(C=r.rhs.symbolToIndices.get(E))==null?void 0:C[0];A!==void 0&&r.lhs.forEach(($,M)=>{if(T.inputIndices.includes(M)){let D=$.symbolToIndices.get(E);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(L=>{c.push(`${n[M].indicesSet(`input${M}Indices`,L,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,$)=>{if(T.inputIndices.includes($)){let M=A.symbolToIndices.get(E);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(D=>{_.push(`${n[$].indicesSet(`input${$}Indices`,D,`${E}`)}`)}),x.push(`prod *= ${n[$].getByIndices(`input${$}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${fn(E)}; ${E}++) {`),S.push("}")});let I=w?[...c,`let sum = ${n.map((T,E)=>T.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,g,...b,..._,h,...x,y,...S];return`
            ${d.registerUniforms(u.map(T=>({name:`${fn(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((T,E)=>`var input${E}Indices: ${n[E].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(h=>r.symbolToInfo.has(h)).map(h=>{var g;return{type:12,data:((g=r.symbolToInfo.get(h))==null?void 0:g.dimValue)||0}});d.push({type:12,data:a});let c=e.map((h,g)=>[...J(h)]).reduce((h,g)=>h.concat(g),d);return c.push(...J(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:l}},Al=(e,t)=>{let r=new zl(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(Cl(n,e.inputs[0].dataType,r,i))},Ol=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),Rl,mn,Bl,Ml,Nl,bm=P(()=>{te(),re(),ne(),Rl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},mn=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Bl=(e,t)=>e.length>t.length?mn(e,t):mn(t,e),Ml=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Bl(t,r),n=e[0].dataType,a=n===9||O.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,u=a||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(O.size(i)/u),d=h=>{let g=N("input",n,t.length,s),y=Q("output",n,i.length,u),_;if(n===9){let b=(S,x,w="")=>`
          let outputIndices${x} = ${y.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${g.broadcastedIndicesToOffset(`outputIndices${x}`,y)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${S}[${x}] = ${w}(${g.getByOffset(`index${x}`)}[component${x}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...J(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Nl=e=>{Rl(e.inputs),e.compute(Ml(e.inputs),{inputs:[0]})}}),Dl,Pl,wm=P(()=>{te(),re(),ne(),Zi(),Dl=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),n=i%4===0,a=s=>{let u=N("x",t,[1],4),l=N("bias",t,[1],4),d=Q("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${Ki(Ce(t))}

    ${s.mainStart(Gt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Xi("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Gt/4)}})}},Pl=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?_u(e):e.compute(Dl(e.inputs))}}),Ul,ql,Ll,Wl,$m=P(()=>{te(),re(),xe(),ne(),Ul=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},ql=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=O.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let u=r[a],l=e[0].dataType===9?4:1,d=Math.ceil(O.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:a},...J(e[0].dims,e[1].dims,s)],h=g=>{let y=N("data",e[0].dataType,e[0].dims.length,l),_=N("inputIndices",e[1].dataType,e[1].dims.length),b=Q("output",e[0].dataType,s.length,l),S=w=>{let I=i.length,T=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let E=0;E<I;E++)T+=`${I>1?`indicesIndices${w}[${E}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${E}]`:`outputIndices${w}`};`;T+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${y.type.indices};
        `;for(let E=0,C=0;E<n;E++)E===a?(T+=`${n>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = u32(idx${w});`,C+=I):(T+=`${n>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${C}]`:`outputIndices${w}`};`,C++);return T},x;if(e[0].dataType===9){let w=(I,T,E="")=>`
          let outputIndices${T} = ${b.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${y.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${I}[${T}] = ${E}(${y.getByOffset(`index${T}`)}[component${T}]);
        `;x=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:h}},Ll=e=>he({axis:e.axis}),Wl=(e,t)=>{let r=e.inputs;Ul(r),e.compute(ql(e.inputs,t))}}),Vl,Gl,Hl,vm=P(()=>{te(),re(),ne(),Vl=(e,t,r,i,n,a,s,u,l)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[a];d.push(...J(t.dims,c));let h=g=>{let y=N("indices_data",t.dataType,t.dims.length),_=Q("input_slice_offsets_data",12,1,1),b=[y,_],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},Gl=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],u=O.sizeToDimension(a,a.length-1),l=O.sizeFromDimension(i,t.batchDims+s),d=O.sizeToDimension(i,t.batchDims),c=O.sizeFromDimension(i,t.batchDims),h=u/d,g=new Array(s),y=l;for(let T=0;T<s;++T)g[s-1-T]=y,y*=i[t.batchDims+s-1-T];let _=Vl(e,r[1],g,t.batchDims,i,u,h,c,s),b=t.batchDims+s;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=a.slice(0,-1).concat(i.slice(b)),x=O.size(S),w=[{type:12,data:x},{type:12,data:l},...J(r[0].dims,_.dims,S)],I=T=>{let E=N("data",r[0].dataType,r[0].dims.length),C=N("slice_offsets",12,_.dims.length),A=Q("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,C,A)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:w}),getShaderSource:I},{inputs:[r[0],_]})},Hl=e=>({batchDims:e.batch_dims,cacheKey:""})}),Fl,jl,Kl,Xl,xm=P(()=>{te(),re(),xe(),ne(),Fl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((u,l)=>l===r?Math.ceil(u/i)===a.dims[l]:u===a.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((u,l)=>u===a.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},jl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=O.normalizeAxis(t.gatherAxis,n),s=O.normalizeAxis(t.quantizeAxis,n),u=r.slice(0);u.splice(a,1,...i);let l=O.size(u),d=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...J(...e.map((y,_)=>y.dims),u)],g=y=>{let _=N("data",e[0].dataType,e[0].dims.length),b=N("inputIndices",e[1].dataType,e[1].dims.length),S=N("scales",e[2].dataType,e[2].dims.length),x=e.length>3?N("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=Q("output",d,u.length),I=[_,b,S];x&&I.push(x);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(T).declareVariables(...I,w)}
        ${y.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ce(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:g}},Kl=(e,t)=>{let r=e.inputs;Fl(r,t),e.compute(jl(e.inputs,t))},Xl=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Zl,Ql,Yl,Jl,Sm=P(()=>{te(),re(),xe(),ne(),Zl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ql=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,u=O.normalizeAxis(t.axis,n),l=r[u],d=a.slice(0),c=O.size(d),h=N("input",i,n),g=N("indicesInput",s,a.length),y=Q("output",i,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return _.push(...J(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,y)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},Yl=e=>he({axis:e.axis}),Jl=(e,t)=>{let r=e.inputs;Zl(r),e.compute(Ql(e.inputs,t))}}),ed,td,rd,id,Tm=P(()=>{te(),re(),ne(),ed=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},td=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=ps.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[n,a];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(a/l),c=Math.ceil(n/l),h=!0,g=O.size(u),y=[{type:12,data:h?d:g},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...J(e[2].dims)),_.push("rank")),y.push(...J(u));let b=x=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",T=N("a",e[0].dataType,e[0].dims),E=N("b",e[1].dataType,e[1].dims),C=T.type.value,A=null,$=[T,E];e.length===3&&(A=N("c",e[2].dataType,e[2].dims.length),$.push(A));let M=Q("output",e[0].dataType,u.length);$.push(M);let D=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(D).declareVariables(...$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${I}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${C}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=x=>{let w=N("a",e[0].dataType,e[0].dims),I=N("b",e[1].dataType,e[1].dims),T=null,E=[w,I];e.length===3&&(T=N("c",e[2].dataType,e[2].dims.length),E.push(T));let C=Q("output",e[0].dataType,u.length);E.push(C);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",M="";t.transA&&t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let D=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(A).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${l}>, ${l}>;
  ${x.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${M}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${D}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:y}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},rd=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},id=(e,t)=>{ed(e.inputs),e.compute(td(e.inputs,t))}}),et,ut,Bt,Mt,nd,ad,sd,od,ud,ld,dd,pd,cd,hd,km=P(()=>{te(),re(),xe(),ne(),[et,ut,Bt,Mt]=[0,1,2,3],nd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},ad=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,sd=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,od=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,ud=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,ld=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${et}] = batch;
     indices[${ut}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Bt}] = u32(r);
            indices[${Mt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Bt}] = u32(clamp(r, 0, H - 1));
          indices[${Mt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Bt}] = gs_reflect(r, border[1], border[3]);
          indices[${Mt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,dd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${et}], indices[${ut}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${et}], indices[${ut}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${et}], indices[${ut}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${et}], indices[${ut}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${et}], indices[${ut}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${et}], indices[${ut}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,pd=(e,t)=>{let r=N("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=N("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[et,ut,Bt,Mt]=[0,3,1,2]);let s=Q("output",e[0].dataType,a.length),u=r.type.value,l=O.size(a),d=[{type:12,data:l},...J(e[0].dims,i,a)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${ad}
  ${sd(u)}
  ${od(t)}
  ${ud(t)}
  ${ld(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Bt}]);
      let W_in = i32(uniforms.x_shape[${Mt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${et}], indices[${Bt}], indices[${Mt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${dd(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=O.size(a);return{outputs:[{dims:a,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:c}},cd=(e,t)=>{nd(e.inputs),e.compute(pd(e.inputs,t))},hd=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ae,fd,md,gn,gd,ur,yd,_d=P(()=>{te(),re(),xe(),Mi(),Fi(),ne(),mt(),Ae=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,fd=(e,t)=>{let r=e[0],i=Ae(e,1),n=Ae(e,2),a=Ae(e,3),s=Ae(e,4),u=Ae(e,5),l=Ae(e,6),d=Ae(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=h,_=0,b=0,S=Math.floor(g/t.numHeads);if(l&&d&&O.size(l.dims)&&O.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&O.size(l.dims)||d&&O.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(a&&O.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+y,I=0;if(s&&O.size(s.dims)>0){I=8;let A=s.dims;throw A.length===1?A[0]===c?I=1:A[0]===3*c+2&&(I=3):A.length===2&&A[0]===c&&A[1]===w&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,E=g;if(n&&O.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=n.dims[1]*n.dims[3],T=!0}}let C=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:C,passPastInKv:T,qkvFormat:x}},md=e=>he({...e}),gn=he({perm:[0,2,1,3]}),gd=(e,t,r,i,n,a,s)=>{let u=[i,n,a],l=O.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],c=h=>{let g=Q("qkv_with_bias",t.dataType,u),y=N("qkv",t.dataType,u),_=N("bias",r.dataType,u),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(b).declareVariables(y,_,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},ur=(e,t,r,i,n,a,s,u)=>{let l=a;if(s&&O.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=gd(e,a,s,t,i,r*n,u),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(Pe(l,gn.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,i,r,n])),r===1||i===1?l:e.compute(Pe(l,gn.perm),{inputs:[l],outputs:[-1]})[0]},yd=(e,t)=>{let r=fd(e.inputs,t),i=e.inputs[0],n=Ae(e.inputs,1),a=Ae(e.inputs,2),s=Ae(e.inputs,3),u=Ae(e.inputs,4),l=Ae(e.inputs,5),d=Ae(e.inputs,6),c=Ae(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let h=n&&a&&n.dims.length===4&&a.dims.length===4,g=ur(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(h)return ir(e,g,n,a,u,void 0,d,c,l,r);if(!n||!a)throw new Error("key and value must be provided");let y=ur(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),_=ur(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);ir(e,g,y,_,u,void 0,d,c,l,r)}}),bd,wd,$d,vd,yn,xd,Sd,Td=P(()=>{te(),re(),xe(),ne(),bd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},wd=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},$d=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Y("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,vd=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},yn=(e,t)=>{let r=e[0].dims,i=O.size(r),n=e[0].dataType,a=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=N("input",n,r.length),l=new Array(t.numOutputs),d=[],c=[],h=0,g=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){h+=t.splitSizes[_],l[_]=h;let b=r.slice();b[a]=t.splitSizes[_],c.push(b),s[_]=Q(`output${_}`,n,b.length),d.push({dims:c[_],dataType:e[0].dataType})}g.push({type:12,data:l},...J(r,...c));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${$d(l.length)}
  ${vd(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Y("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},xd=(e,t)=>{bd(e.inputs);let r=e.inputs.length===1?t:wd(e.inputs,t);e.compute(yn(e.inputs,r),{inputs:[0]})},Sd=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),kd,Pr,Id,Ed=P(()=>{te(),re(),xe(),ne(),kd=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!O.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=n.dims[0],h=O.sizeFromDimension(r.dims,1)/d,g=u===0?n.dims[1]*2:h/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==n.dims[1]&&u/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},Pr=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],h=n===0?c*2:d/i,g=new Array(s,l,d/h,h-c),y=O.computeStrides(g),_=[{type:1,data:a},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...J(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=S=>{let x=N("input",e[0].dataType,e[0].dims.length),w=N("position_ids",e[1].dataType,e[1].dims.length),I=N("cos_cache",e[2].dataType,e[2].dims.length),T=N("sin_cache",e[3].dataType,e[3].dims.length),E=Q("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${S.declareVariables(x,w,I,T,E)}

        ${S.mainStart(Gt)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",Q("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/Gt)},programUniforms:_})}},Id=(e,t)=>{kd(e.inputs,t),e.compute(Pr(e.inputs,t))}}),zd,Cd,_n,Ad,Od,Im=P(()=>{xe(),te(),Fi(),_d(),Td(),mt(),Ed(),ne(),zd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,g=0,y=!i||i.dims.length===0,_=Math.floor(y?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);y&&(c=_*t.numHeads);let b=a&&a.dims.length!==0,S=s&&s.dims.length!==0;if(b&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=a.dims[2]}else if(b||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let w=0,I=!1,T=t.kvNumHeads?_*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],I=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=E.dims.reduce((A,$)=>A*$,1);if(C!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${C}.`);for(let A=0;A<E.dims.length;A++)if(E.dims[A]!==1&&E.dims[A]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${A}] = ${E.dims[A]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:T,headSize:_,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:x}},Cd=he({perm:[0,2,1,3]}),_n=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Pe(i,Cd.perm),{inputs:[i],outputs:[-1]})[0]),i},Ad=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let h=N("seq_lens",r.dataType,r.dims),g=N("total_seq_lens",i.dataType,i.dims),y=Q("pos_ids",n,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(h,g,y)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},Od=(e,t)=>{var T;let r=zd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((T=e.inputs[1])==null?void 0:T.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[g,y,_]=!n&&!a?e.compute(yn([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],b,S;if(t.doRotary){let E=e.compute(Ad(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],C=e.inputs[7],A=e.inputs[8],$=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),M=[g,E,C,A],D=[-1];b=e.compute(Pr(M,$),{inputs:M,outputs:D})[0],M.splice(0,1,y);let L=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(Pr(M,L),{inputs:M,outputs:D})[0]}let x=ur(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:g,void 0,0),w=_n(e,t.doRotary?S:y,r),I=_n(e,_,r);ir(e,x,w,I,void 0,void 0,s,u,void 0,r,l,d)}}),bn,Rd,Bd,Md,Em=P(()=>{te(),re(),mt(),ne(),bn=(e,t,r,i,n,a,s,u)=>{let l=ve(a),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=n*s,g=64;h===1&&(g=256);let y=[n,s,a/l],_=[n,s,2],b=["rank","type","type"],S=[];S.push(...J(y,_));let x=w=>{let I=N("x",t.dataType,3,l),T=N("scale",r.dataType,r.dims),E=N("bias",i.dataType,i.dims),C=Q("output",1,3,2),A=[I,T,E,C];return`
  var<workgroup> workgroup_shared : array<${c}, ${g}>;
  const workgroup_size = ${g}u;
  ${w.declareVariables(...A)}
  ${w.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${I.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ft("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${ft("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},Rd=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],u=i[1],l=O.sizeFromDimension(i,a),d=ve(l),c=O.size(n)/d,h=bn(e,t[0],t[1],t[2],s,l,u,r.epsilon),g=[s,u,l/d],y=[s,u],_=["type","none"],b=S=>{let x=N("x",t[0].dataType,g.length,d),w=N("scale_shift",1,y.length,2),I=Q("output",t[0].dataType,g.length,d),T=[x,w,I];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...J(g,y,g)]}),getShaderSource:b},{inputs:[t[0],h]})},Bd=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],u=O.sizeFromDimension(i,1)/s,l=ve(s),d=O.size(n)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],h=["type","type"],g=!1,y=[0,i.length-1];for(let x=0;x<i.length-2;x++)g=g||i[x+1]!==1,y.push(x+1);g=g&&i[i.length-1]!==1;let _=g?e.compute(Pe(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(x,w)=>i[y[w]])),b=bn(e,_,t[1],t[2],a,u,s,r.epsilon),S=x=>{let w=ke(t[0].dataType),I=l===1?"vec2f":`mat${l}x2f`,T=A=>{let $=A===0?"x":"y",M=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${M}(scale.${$}))`;case 2:return`vec2<${w}>(${M}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${w}>(${M}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=N("input",t[0].dataType,t[0].dims,l),C=Q("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],b]})},Md=(e,t)=>{t.format==="NHWC"?Bd(e,e.inputs,t):Rd(e,e.inputs,t)}}),Nd,Dd,Pd,zm=P(()=>{te(),re(),ne(),Nd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Dd=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],u=n,l=O.normalizeAxis(t.axis,n.length),d=O.sizeToDimension(n,l),c=O.sizeFromDimension(n,l),h=O.size(a.dims),g=s?O.size(s.dims):0;if(h!==c||s&&g!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let y=[];for(let E=0;E<n.length;++E)E<l?y.push(n[E]):y.push(1);let _=ve(c),b=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];s&&b.push("type");let x=r>1,w=r>2,I=E=>{let C=ke(e[0].dataType),A=[N("x",e[0].dataType,e[0].dims,_),N("scale",a.dataType,a.dims,_)];s&&A.push(N("bias",s.dataType,s.dims,_)),A.push(Q("output",e[0].dataType,u,_)),x&&A.push(Q("mean_data_output",1,y)),w&&A.push(Q("inv_std_output",1,y));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms($).declareVariables(...A)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ui("f32",_)};
    var mean_square_vector = ${Ui("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ht(C,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ft("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ft("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ht(C,_,"x[j + offset]")};
      let f32scale = ${Ht(C,_,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Ht(C,_,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:u,dataType:e[0].dataType}];return x&&T.push({dims:y,dataType:1}),w&&T.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:I}},Pd=(e,t)=>{Nd(e.inputs),e.compute(Dd(e.inputs,t,e.outputCount))}}),Ud,qd,Cm=P(()=>{re(),en(),an(),Ud=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},qd=e=>{Ud(e.inputs);let t=Vt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Ji(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let u=e.inputs[0].reshape([1,a,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,a,r],c=[u,l];e.compute(Br(c,{activation:""},t,d),{inputs:c})}else e.compute(Br(e.inputs,{activation:""},t))}}}),Ld,Wd,Vd,Gd,Hd,Am=P(()=>{te(),re(),xe(),ne(),Ld=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(O.size(l)!==d)throw new Error("zeroPoints input size error.")}},Wd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=ve(t.k),g=ve(d),y=ve(s),_=u.concat([n,s]),b=n>1&&s/y%2===0?2:1,S=O.size(_)/y/b,x=64,w=[],I=[l,n,a/h],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,d/g),w.push(...J(I)),w.push(...J(T)),w.push(...J(e[2].dims)),e.length===4&&w.push(...J(O.convertShape(e[3].dims)));let E=[l,n,s/y];w.push(...J(E));let C=A=>{let $=I.length,M=N("a",e[0].dataType,$,h),D=N("b",12,T.length,g),L=N("scales",e[2].dataType,e[2].dims.length),F=[M,D,L],G=e.length===4?N("zero_points",12,e[3].dims.length):void 0;G&&F.push(G);let R=E.length,K=Q("output",e[0].dataType,R,y),X=ke(e[0].dataType),ee=(()=>{switch(h){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${h}-component is not supported.`)}})(),fe=Math.floor(32/t.bits),V=Math.floor(fe/8),ue=()=>{let Z="";for(let q=0;q<V;q++){let ge=q*t.bits*4,Ve=ge+t.bits;Z+=`
          // reuse a data (pass ${q})
            var input_offset${q>0?q:""} = ${q===0?M.indicesToOffset(`${M.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${q>0?q:""}: ${ee};
            for (var j${q>0?q:""}: u32 = 0; j${q>0?q:""} < ${8/h}; j${q>0?q:""}++) {
              a_data${q>0?q:""}[j${q>0?q:""}] = ${M.getByOffset(`input_offset${q>0?q:""}`)};
              input_offset${q>0?q:""}++;
            }
          `;for(let Se=0;Se<y*b;Se++)Z+=`
            b_value = ${g===1?`b${Se}_data`:`b${Se}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${q*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ge}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ve}u) & b_mask);`}
            b_quantized_values = ${ee}(${Array.from({length:4},(Re,Be)=>`${X}(b_value_lower[${Be}]), ${X}(b_value_upper[${Be}])`).join(", ")});
            b_dequantized_values = ${h===1?`${ee}(${Array.from({length:8},(Re,Be)=>`(b_quantized_values[${Be}] - ${G?`zero_point${Se}`:"zero_point"}) * scale${Se}`).join(", ")});`:`(b_quantized_values - ${ee}(${Array(8).fill(`${G?`zero_point${Se}`:"zero_point"}`).join(",")})) * scale${Se};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Se/y)}]${y>1?`[${Se%y}]`:""} += ${Array.from({length:8/h},(Re,Be)=>`${h===1?`a_data${q>0?q:""}[${Be}] * b_dequantized_values[${Be}]`:`dot(a_data${q>0?q:""}[${Be}], b_dequantized_values[${Be}])`}`).join(" + ")};
          `}return Z},U=()=>{let Z=`
            var col_index = col * ${y};
            ${G?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${X}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let q=0;q<y*b;q++)Z+=`
            let scale${q} = ${L.getByOffset("col_index * nBlocksPerCol + block")};
            ${G?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${X}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},H=()=>{let Z=`col_index = col * ${y};`;for(let q=0;q<y*b;q++)Z+=`
            let b${q}_data = ${D.getByIndices(`${D.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ee};
            var b_dequantized_values: ${ee};`,Z};return`
        var<workgroup> workgroup_shared: array<${K.type.value}, ${b*x}>;
        ${A.declareVariables(...F,K)}
        ${A.mainStart([x,1,1])}
          let output_indices = ${K.offsetToIndices(`(global_idx / ${x}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${U()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${H()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ue()}
                word_offset += ${fe/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${K.type.value} = ${K.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${K.setByIndices(`${K.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${y};${b};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:C}},Vd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=ve(t.k),g=ve(d),y=u.concat([n,s]),_=128,b=s%8===0?8:s%4===0?4:1,S=_/b,x=Math.floor(32/t.bits),w=S*g*x,I=w/h,T=w/t.blockSize,E=O.size(y)/b,C=[],A=[l,n,a/h],$=O.convertShape(e[1].dims).slice();$.splice(-1,1,d/g),C.push(...J(A)),C.push(...J($)),C.push(...J(e[2].dims)),e.length===4&&C.push(...J(O.convertShape(e[3].dims)));let M=[l,n,s];C.push(...J(M));let D=L=>{let F=A.length,G=N("a",e[0].dataType,F,h),R=N("b",12,$.length,g),K=N("scales",e[2].dataType,e[2].dims.length),X=[G,R,K],ee=e.length===4?N("zero_points",12,e[3].dims.length):void 0;ee&&X.push(ee);let fe=M.length,V=Q("output",e[0].dataType,fe),ue=ke(e[0].dataType),U=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${G.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${V.type.value}, ${S}>, ${b}>;
        ${L.declareVariables(...X,V)}
        ${L.mainStart([S,b,1])}
          let output_indices = ${V.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${G.getByIndices(`${G.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${G.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${T} + local_id.x;
            ${ee?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ue}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ue}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${K.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let H=Math.floor(x/8),Z="";for(let q=0;q<H;q++){let ge=q*t.bits*4,Ve=ge+t.bits;Z+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${q*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ge}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ve}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ue}>(${Array.from({length:4},(Se,Re)=>`${ue}(b_value_lower[${Re}]), ${ue}(b_value_upper[${Re}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ue}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Se,Re)=>`${`dot(a_data${Re}, b_dequantized_values[${Re}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return Z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${V.type.value} = ${V.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${V.setByIndices(`${V.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${S};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:E},programUniforms:C}),getShaderSource:D}},Gd=(e,t)=>{Ld(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Vd(e.inputs,t)):e.compute(Wd(e.inputs,t))},Hd=e=>he(e)}),Fd,jd,Kd,Xd,Zd,Qd,Yd,Jd,ep,Om=P(()=>{te(),re(),ne(),Fd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},jd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${Y("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Y("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${Y("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Kd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Y("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Y("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Y("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Y("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Xd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Y("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Y("uniforms.x_shape",n,t)})) {
                  k = i32(${Y("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${Y("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Zd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Y("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${Y("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${Y("uniforms.x_shape",n,t)})) {
                  k -= i32(${Y("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${Y("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Qd=(e,t,r)=>{switch(r.mode){case 0:return jd(e,t,r.pads.length);case 1:return Kd(e,t,r.pads.length);case 2:return Xd(e,t,r.pads.length);case 3:return Zd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Yd=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=O.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...J(e[0].dims,r));let u=["rank"],l=d=>{let c=Q("output",e[0].dataType,r.length),h=N("x",e[0].dataType,i.length),g=h.type.value,y=Qd(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?g:"f32"}),`
            ${d.registerUniforms(_).declareVariables(h,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:a}),getShaderSource:l}},Jd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)a[Number(u[l])]=Number(r[l]),a[Number(u[l])+n]=Number(r[l+u.length])}else r.forEach((u,l)=>a[Number(l)]=Number(u));let s=[];return a.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},ep=(e,t)=>{Fd(e.inputs);let r=Jd(e.inputs,t);e.compute(Yd(e.inputs,r),{inputs:[0]})}}),lr,wn,$n,vn,xn,tp,rp,Sn,Tn,ip,np,kn,ap,sp,In,op,up,lp,dp,Rm=P(()=>{We(),te(),re(),ne(),lr=e=>{if(ye.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},wn=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();Ir.adjustPoolAttributes(r,n,s,u,l,d);let c=Ir.computePoolOutputShape(r,n,u,l,s,d,t.autoPad),h=Object.assign({},t);a?Object.assign(h,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let g=c.slice();return g.push(g.splice(1,1)[0]),[h,i?g:c]},$n=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),n=O.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(d+c);a.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(b+S),a.push({type:12,data:y},{type:12,data:_},{type:12,data:b},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);a.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[a,s,!!l,!1,!1]}},vn=(e,t,r,i,n,a,s,u,l,d,c,h)=>{let g=n.format==="NHWC",y=t.type.value,_=Q("output",t.type.tensor,i);if(n.kernelShape.length<=2){let b="",S="",x="",w=r-(g?2:1);if(c?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let I=r-(g?3:2);h?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${u});
              var pad = 0;
              ${S}
              ${b}
              ${x}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,S=n.pads.length,x="";return d?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${y}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${Y("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${Y("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Y("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${Y("uniforms.pads","j - 2u",S)};
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},xn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,tp=e=>`${xn(e)};${e.countIncludePad}`,rp=e=>`${xn(e)};${e.storageOrder};${e.dilations}`,Sn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Tn=(e,t,r,i)=>{let[n,a]=wn(t,i,r),s=N("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,h,g,y,_]=$n(a,n);c.push(...J(t.dims,a));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:c}),getShaderSource:S=>vn(S,s,t.dims.length,a.length,n,l,d,0,h,g,y,_)}},ip=e=>{let t=e.count_include_pad!==0,r=Sn(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:tp(i)}},np=(e,t)=>{lr(e.inputs),e.compute(Tn("AveragePool",e.inputs[0],!1,t))},kn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ap=e=>{let t=e.format;return{format:t,...kn,cacheKey:t}},sp=(e,t)=>{lr(e.inputs),e.compute(Tn("GlobalAveragePool",e.inputs[0],!0,t))},In=(e,t,r,i)=>{let[n,a]=wn(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=N("x",t.dataType,t.dims.length),d=["rank"],[c,h,g,y,_]=$n(a,n);return c.push(...J(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:c}),getShaderSource:b=>vn(b,l,t.dims.length,a.length,n,s,u,t.dataType===10?-65504:-1e5,h,g,y,_)}},op=(e,t)=>{lr(e.inputs),e.compute(In("MaxPool",e.inputs[0],!1,t))},up=e=>{let t=e.storage_order,r=e.dilations,i=Sn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:rp(n)}},lp=e=>{let t=e.format;return{format:t,...kn,cacheKey:t}},dp=(e,t)=>{lr(e.inputs),e.compute(In("GlobalMaxPool",e.inputs[0],!0,t))}}),pp,cp,hp,fp,Bm=P(()=>{te(),re(),xe(),ne(),pp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},cp=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,u=O.size(a),l=i===3||i===2,d=l?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,g=h?l?[Math.ceil(O.size(h.dims)/4)]:h.dims:void 0,y=c.length===0||c.length===1&&c[0]===1,_=y===!1&&c.length===1,b=ve(u),S=y&&(!l||b===4),x=S?b:1,w=S&&!l?b:1,I=N("input",l?12:i,d.length,w),T=N("scale",s,c.length),E=h?N("zero_point",l?12:i,g.length):void 0,C=Q("output",s,a.length,x),A=[I,T];E&&A.push(E);let $=[d,c];h&&$.push(g);let M=[{type:12,data:u/x},{type:12,data:r},{type:12,data:t.blockSize},...J(...$,a)],D=L=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${L.registerUniforms(F).declareVariables(...A,C)}
      ${L.mainStart()}
          ${L.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${T.getByOffset("0")}`:_?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?y?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:D,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(u/x/64),y:1,z:1},programUniforms:M})}},hp=(e,t)=>{pp(e.inputs,t),e.compute(cp(e.inputs,t))},fp=e=>he({axis:e.axis,blockSize:e.blockSize})}),mp,gp,yp,Mm=P(()=>{We(),te(),ne(),mp=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},gp=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...J(a)],l=d=>{let c=Q("output",i,a.length),h=c.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(g).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},yp=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ye.webgpu.validateInputContent&&mp(t,r,i),e.compute(gp(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),_p,bp,wp,$p,Nm=P(()=>{te(),re(),xe(),ne(),_p=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},bp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(O.sizeToDimension(i,i.length-1)/a),u=i[i.length-1],l=O.sizeFromDimension(r,u),d=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...J(e[1].dims,e[2].dims,n)],c=h=>{let g=N("indices",e[1].dataType,e[1].dims.length),y=N("updates",e[2].dataType,e[2].dims.length,a),_=t.reduction!=="none"&&t.reduction!==""?ks("output",e[0].dataType,n.length):Q("output",e[0].dataType,n.length,a);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,_)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${_p(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},wp=e=>he({reduction:e.reduction}),$p=(e,t)=>{e.compute(bp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),vp,xp,Sp,En,Tp,kp,Ip,Ep,zp,Cp,Ap,Op,zn,Rp,Bp,Mp,Np,Dp,Pp,Up,Dm=P(()=>{te(),re(),xe(),ne(),vp=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},xp=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},Sp=(e,t,r,i,n,a)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>a.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");vp(i,t),t.axes.length>0&&xp(i,t.axes,d).forEach((c,h)=>i[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},En=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Tp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${En("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${En("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",kp=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Ip=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},Ep=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},zp=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},Cp=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Y("uniforms.scales","i",i)};
        var roi_low = ${Y("uniforms.roi","i",n)};
        var roi_hi = ${Y("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Y("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Ap=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Y("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Y("uniforms.roi","i",a)};
          var roi_hi = ${Y("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Op=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Y("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,zn=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Rp=(e,t,r,i,n)=>{let[a,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${zn(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Bp=(e,t,r,i,n,a,s,u,l,d)=>{let c=r.length===2,[h,g]=c?[0,1]:[2,3],y=e.type.value,_=b=>{let S=b===h?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[b]},
        ${i[b]}, ${r[b]}, ${a[b]}, ${a[b]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${S} = max(0, min(${S}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${S})`)};
          data[i + 1] = ${b===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(h)};
    ${_(g)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Mp=(e,t,r,i,n)=>{let[a,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${zn(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Np=(e,t,r,i,n,a)=>{let s=e.dims,u=Ip(a,t.axes,s.length),l=Ep(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((w,I)=>w===0?1:l[I]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=zp(s,d,t)));let c=Q("output",e.dataType,l.length),h=N("input",e.dataType,s.length),g=O.size(l),y=s.length===l.length&&s.every((w,I)=>w===l[I]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,S=h.type.value,x=w=>`
      ${y?"":`
      ${Tp(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Op(h,s)};
              ${kp(t.nearestMode,r,S)};
              ${Ap(h,c,s,l,d.length,u.length,_)};
              `;case"linear":return`
              ${Cp(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Rp(h,c,s,_,b)}`;if(s.length===3||s.length===5)return`${Mp(h,c,s,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Bp(h,c,s,l,d,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(h,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:u},...J(s,l)]})}},Dp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Pp=(e,t)=>{let r=[],i=[],n=[],a=Dp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Sp(e.inputs,t,a,r,i,n),e.compute(Np(e.inputs[0],t,a,r,i,n),{inputs:[0]})},Up=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),qp,Lp,Wp,Pm=P(()=>{te(),re(),ne(),qp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Lp=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=O.size(a),u=a,l=s,d=a.slice(-1)[0],c=i?a.slice(0,-1).concat(1):[],h=!n&&e.length>3,g=e.length>4,y=i&&r>1,_=i&&r>2,b=r>3,S=64,x=ve(d),w=[{type:12,data:l},{type:12,data:x},{type:12,data:d},{type:1,data:t.epsilon}],I=E=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[N("x",e[0].dataType,e[0].dims,x),N("skip",e[1].dataType,e[1].dims,x),N("gamma",e[2].dataType,e[2].dims,x)];h&&A.push(N("beta",e[3].dataType,e[3].dims,x)),g&&A.push(N("bias",e[4].dataType,e[4].dims,x)),A.push(Q("output",e[0].dataType,u,x)),y&&A.push(Q("mean_output",1,c)),_&&A.push(Q("inv_std_output",1,c)),b&&A.push(Q("input_skip_bias_sum",e[0].dataType,u,x));let $=ke(e[0].dataType),M=ke(1,x);return`

      ${E.registerUniforms(C).declareVariables(...A)}
      var<workgroup> sum_shared : array<${M}, ${S}>;
      var<workgroup> sum_squared_shared : array<${M}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ht($,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ft("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ft("square_sum",x)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:u,dataType:e[0].dataType}];return r>1&&T.push({dims:c,dataType:1}),r>2&&T.push({dims:c,dataType:1}),r>3&&T.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${y};${_};${b}`,inputDependencies:e.map((E,C)=>"type")},getShaderSource:I,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},Wp=(e,t)=>{qp(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Lp(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Vp,dr,Gp,Cn,Hp,Fp,jp,Kp,Um=P(()=>{te(),re(),xe(),ne(),Vp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},dr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Gp=(e,t)=>{if(e.length>1){let r=dr(e,1),i=dr(e,2),n=dr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:n})}else return t},Cn=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},Hp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
            let steps_i = ${Y("uniforms.steps","i",r.length)};
            let signs_i = ${Y("uniforms.signs","i",r.length)};
            let starts_i = ${Y("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Fp=(e,t)=>{let r=e[0].dims,i=O.size(r),n=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=dr(e,4);a.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((x,w)=>Cn(x,w,r,n,a)),u=t.ends.map((x,w)=>Cn(x,w,r,n,a));if(n.length!==s.length||n.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let x=0;x<r.length;++x)n.includes(x)||(s.splice(x,0,0),u.splice(x,0,r[x]),a.splice(x,0,1));let l=a.map(x=>Math.sign(x));a.forEach((x,w,I)=>{if(x<0){let T=(u[w]-s[w])/x,E=s[w],C=E+T*a[w];s[w]=C,u[w]=E,I[w]=-x}});let d=r.slice(0);n.forEach((x,w)=>{d[x]=Math.ceil((u[x]-s[x])/a[x])});let c={dims:d,dataType:e[0].dataType},h=Q("output",e[0].dataType,d.length),g=N("input",e[0].dataType,e[0].dims.length),y=O.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],b=[{type:12,data:y},{type:12,data:s},{type:6,data:l},{type:12,data:a},...J(e[0].dims,d)],S=x=>`
      ${x.registerUniforms(_).declareVariables(g,h)}
        ${Hp(g,h,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},jp=(e,t)=>{Vp(e.inputs,t);let r=Gp(e.inputs,t);e.compute(Fp(e.inputs,r),{inputs:[0]})},Kp=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),Xp,Zp,Qp,Yp,qm=P(()=>{te(),re(),xe(),mt(),ne(),Xp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Zp=(e,t)=>{let r=e.inputs[0],i=r.dims,n=O.size(i),a=i.length,s=O.normalizeAxis(t.axis,a),u=s<i.length-1,l,d=[];u?(d=Array.from({length:a},(A,$)=>$),d[s]=a-1,d[a-1]=s,l=e.compute(Pe(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[a-1],g=n/h,y=ve(h),_=h/y,b=64;g===1&&(b=256);let S=(A,$)=>$===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:$===2?`max(${A}.x, ${A}.y)`:$===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,x=N("x",l.dataType,l.dims,y),w=Q("result",l.dataType,l.dims,y),I=x.type.value,T=ke(l.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,E=A=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(x,w)}
      ${A.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${I}(${S("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${I}(${ft("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Pe(C,d),{inputs:[C]})},Qp=(e,t)=>{Xp(e.inputs),Zp(e,t)},Yp=e=>he({axis:e.axis})}),An,Jp,ec,tc,rc,Lm=P(()=>{te(),re(),ne(),An=e=>Array.from(e.getBigInt64Array(),Number),Jp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(An(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},ec=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},tc=(e,t)=>{let r=e[0].dims,i=t??An(e[1]),n=ec(r,i),a=O.size(n),s=e[0].dataType,u=N("input",s,r.length),l=Q("output",s,n.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...J(e[0].dims,n)]}),getShaderSource:d}},rc=e=>{Jp(e.inputs),e.compute(tc(e.inputs),{inputs:[0]})}}),ic,nc,ac,Wm=P(()=>{te(),re(),ne(),ic=(e,t,r,i,n)=>{let a=Q("output_data",n,r.length,4),s=N("a_data",t[1].dataType,t[1].dims.length,4),u=N("b_data",t[2].dataType,t[2].dims.length,4),l=N("c_data",t[0].dataType,t[0].dims.length,4),d,c=(h,g,y)=>`select(${g}, ${h}, ${y})`;if(!i)d=a.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(g,y,_="")=>{let b=`a_data[index_a${y}][component_a${y}]`,S=`b_data[index_b${y}][component_b${y}]`,x=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${a.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_b${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${g}[${y}] = ${_}(${c(b,S,x)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},nc=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(O.areEqual(t,r)&&O.areEqual(r,i)),s=t,u=O.size(t);if(a){let d=Vt.calcShape(Vt.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=O.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>ic(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...J(i,t,r,s)]})}},ac=e=>{e.compute(nc(e.inputs))}}),sc,Vm=P(()=>{im(),Fi(),nm(),am(),sm(),om(),um(),hm(),mm(),gm(),ym(),_m(),bm(),wm(),$m(),vm(),xm(),Sm(),Tm(),km(),Im(),Em(),zm(),Cm(),Am(),_d(),Om(),Rm(),Bm(),Mm(),Nm(),Vi(),Dm(),Ed(),Pm(),Um(),qm(),Td(),Lm(),mt(),Zi(),Wm(),sc=new Map([["Abs",[qo]],["Acos",[Lo]],["Acosh",[Wo]],["Add",[zu]],["ArgMax",[To,Hi]],["ArgMin",[So,Hi]],["Asin",[Vo]],["Asinh",[Go]],["Atan",[Ho]],["Atanh",[Fo]],["Attention",[Ao]],["AveragePool",[np,ip]],["BatchNormalization",[Mo]],["BiasAdd",[Po]],["BiasSplitGelu",[ku]],["Cast",[Ko,jo]],["Ceil",[Qo]],["Clip",[Zo]],["Concat",[Vu,Gu]],["Conv",[dn,un]],["ConvTranspose",[yl,fl]],["Cos",[Yo]],["Cosh",[Jo]],["CumSum",[bl,wl]],["DepthToSpace",[Sl,Tl]],["DequantizeLinear",[hp,fp]],["Div",[Cu]],["Einsum",[Al,Ol]],["Elu",[eu,nr]],["Equal",[Au]],["Erf",[tu]],["Exp",[ru]],["Expand",[Nl]],["FastGelu",[Pl]],["Floor",[iu]],["FusedConv",[dn,un]],["Gather",[Wl,Ll]],["GatherElements",[Jl,Yl]],["GatherBlockQuantized",[Kl,Xl]],["GatherND",[Gl,Hl]],["Gelu",[nu]],["Gemm",[id,rd]],["GlobalAveragePool",[sp,ap]],["GlobalMaxPool",[dp,lp]],["Greater",[Mu]],["GreaterOrEqual",[Du]],["GridSample",[cd,hd]],["GroupQueryAttention",[Od]],["HardSigmoid",[cu,pu]],["InstanceNormalization",[Md]],["LayerNormalization",[Pd]],["LeakyRelu",[au,nr]],["Less",[Nu]],["LessOrEqual",[Pu]],["Log",[wu]],["MatMul",[qd]],["MatMulNBits",[Gd,Hd]],["MaxPool",[op,up]],["Mul",[Ou]],["MultiHeadAttention",[yd,md]],["Neg",[ou]],["Not",[su]],["Pad",[ep]],["Pow",[Ru]],["QuickGelu",[xu,nr]],["Range",[yp]],["Reciprocal",[uu]],["ReduceMin",[bo]],["ReduceMean",[fo]],["ReduceMax",[_o]],["ReduceSum",[$o]],["ReduceProd",[wo]],["ReduceL1",[mo]],["ReduceL2",[go]],["ReduceLogSum",[xo]],["ReduceLogSumExp",[yo]],["ReduceSumSquare",[vo]],["Relu",[lu]],["Resize",[Pp,Up]],["RotaryEmbedding",[Id]],["ScatterND",[$p,wp]],["Sigmoid",[du]],["Sin",[hu]],["Sinh",[fu]],["Slice",[jp,Kp]],["SkipLayerNormalization",[Wp]],["Split",[xd,Sd]],["Sqrt",[mu]],["Softmax",[Qp,Yp]],["Sub",[Bu]],["Tan",[gu]],["Tanh",[yu]],["ThresholdedRelu",[bu,nr]],["Tile",[rc]],["Transpose",[Bs,Ms]],["Where",[ac]]])}),oc,Gm=P(()=>{We(),ot(),ne(),oc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){Fe(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});n&&u.push({binding:u.length,resource:n});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Le(e.programInfo.name)}dispose(){}build(e,t){Fe(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=Es(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,u=r.createShaderModule({code:s,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Le(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),uc={};Wt(uc,{WebGpuBackend:()=>cc});var lc,dc,pc,cc,Hm=P(()=>{We(),te(),ot(),fs(),tm(),Vm(),Gm(),lc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},dc=(e,t,r)=>{var n,a;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${lc(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,i},pc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},cc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=u=>t.features.has(u)&&r.push(u)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new pc(s),this.gpuDataManager=Ss(this),this.programManager=new oc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ki(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Fe(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let a=r[n],s=a.kernelId,u=this.kernels.get(s),l=u.kernelType,d=u.kernelName,c=a.programName,h=a.inputTensorViews,g=a.outputTensorViews,y=t[n*2],_=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let b=Number(y-this.queryTimeBase),S=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(x=>({dims:x.dims,dataType:st(x.dataType)})),outputsMetadata:g.map(x=>({dims:x.dims,dataType:st(x.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:c,startTime:b,endTime:S});else{let x="";h.forEach((I,T)=>{x+=`input[${T}]: [${I.dims}] | ${st(I.dataType)}, `});let w="";g.forEach((I,T)=>{w+=`output[${T}]: [${I.dims}] | ${st(I.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${c}" ${x}${w}start time: ${b} ns, execution time: ${S-b} ns`)}Jt("GPU",`${c}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Le()}run(e,t,r,i,n,a){Fe(e.name);let s=[];for(let w=0;w<t.length;++w){let I=t[w].data;if(I===0)continue;let T=this.gpuDataManager.get(I);if(!T)throw new Error(`no GPU data for input: ${I}`);s.push(T)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((w,I)=>I):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let h=[],g=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=a)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let I=c[w]===-1,T=c[w]===-2,E=I||T?n(u[w].dataType,u[w].dims):i(c[w],u[w].dataType,u[w].dims);if(h.push(E),E.data===0)continue;let C=this.gpuDataManager.get(E.data);if(!C)throw new Error(`no GPU data for output: ${E.data}`);if(I&&this.temporaryData.push(C),T){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(C)}g.push(C)}if(s.length!==t.length||g.length!==h.length){if(g.length===0)return Le(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let w=0,I=[];d.forEach(A=>{let $=typeof A.data=="number"?[A.data]:A.data;if($.length===0)return;let M=A.type===10?2:4,D,L;A.type===10?(L=$.length>4?16:$.length>2?8:$.length*M,D=$.length>4?16:M*$.length):(L=$.length<=2?$.length*M:16,D=16),w=Math.ceil(w/L)*L,I.push(w);let F=A.type===10?8:4;w+=$.length>4?Math.ceil($.length/F)*D:$.length*M});let T=16;w=Math.ceil(w/T)*T;let E=new ArrayBuffer(w);d.forEach((A,$)=>{let M=I[$],D=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(E,M,D.length).set(D);else if(A.type===12)new Uint32Array(E,M,D.length).set(D);else if(A.type===10)new Uint16Array(E,M,D.length).set(D);else if(A.type===1)new Float32Array(E,M,D.length).set(D);else throw new Error(`Unsupported uniform type: ${st(A.type)}`)});let C=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,E,0,w),this.gpuDataManager.release(C.id),y={offset:0,size:w,buffer:C.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,S=dc(e,t,b),x=this.programManager.getArtifact(S);if(x||(x=this.programManager.build(e,_),this.programManager.setArtifact(S,x),de("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&x.uniformVariablesInfo){if(d.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${d.length} in program "${x.programInfo.name}".`);for(let w=0;w<d.length;w++){let I=d[w],T=I.type,E=typeof I.data=="number"?1:I.data.length,[C,A]=x.uniformVariablesInfo[w];if(T!==C||E!==A)throw new Error(`Uniform variable ${w} mismatch: expect type ${C} with size ${A}, got type ${T} with size ${E} in program "${x.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(x,s,g,_,y),Le(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=sc.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Pi(this,e,t);return Ii(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),hc={};Wt(hc,{init:()=>mc});var Ur,fc,mc,Fm=P(()=>{te(),ot(),re(),em(),Ur=class Af{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Af(this.module,this.dataType,this.data,t)}},fc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*n++,a)),c=Number(e.getValue(i*n++,"*")),h=Number(e.getValue(i*n++,a)),g=[];for(let y=0;y<h;y++)g.push(Number(e.getValue(i*n++,a)));u.push(new Ur(e,d,c,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(u,l,d)=>new Ur(this.module,l,this.output(u,d),d),a=(u,l)=>{let d=zt(u,l);if(!d)throw new Error(`Unsupported data type: ${u}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Ur(this.module,u,c,l)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},mc=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Hm(),Zt(uc)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),h)}},async(u,l,d)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let h=new fc(t,s,Number(l));return s.computeKernel(Number(u),h,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new ws(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,u,l,d,c)=>a.ensureTensor(s,u,l,d,c),(s,u)=>{a.uploadTensor(s,u)},async(s,u)=>a.downloadTensor(s,u),(s,u)=>a.registerMLContext(s,u),!!r.trace])}}}),gc,On,Rn,gt,yc,Bn,qr,Mn,Nn,Dn,Pn,Un,qn,_c=P(()=>{We(),Qf(),Yf(),te(),kt(),$i(),ns(),gc=(e,t)=>{be()._OrtInit(e,t)!==0&&me("Can't initialize onnxruntime.")},On=async e=>{gc(e.wasm.numThreads,kr(e.logLevel))},Rn=async(e,t)=>{var i,n;(n=(i=be()).asyncInit)==null||n.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(Fm(),Zt(hc)).init;t==="webgpu"&&await a("webgpu",be(),e,r),t==="webnn"&&await a("webnn",be(),e)}},gt=new Map,yc=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&me("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},Bn=(e,t)=>{let r=be(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&me("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let l=r.HEAP32[n/4];if(l===0)return[u,0];let d=r.HEAPU32[n/4+1],c=[];for(let h=0;h<d;h++){let g=Number(r.getValue(n+8+h*a,"*"));c.push(g!==0?r.UTF8ToString(g):Number(r.getValue(n+8+(h+d)*a,"*")))}return[u,l,c]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},qr=e=>{let t=be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Mn=async(e,t)=>{var h,g,y,_;let r,i,n=be();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=qr(e);let a=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await is(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let $=[];for(let M of t.externalData){let D=typeof M=="string"?M:M.path;$.push(Ti(typeof M=="string"?M:M.data).then(L=>{n.mountExternalData(D,L)}))}await Promise.all($)}for(let $ of(t==null?void 0:t.executionProviders)??[])if((typeof $=="string"?$:$.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof $!="string"){let M=$,D=M==null?void 0:M.context,L=M==null?void 0:M.gpuDevice,F=M==null?void 0:M.deviceType,G=M==null?void 0:M.powerPreference;D?n.currentContext=D:L?n.currentContext=await n.webnnCreateMLContext(L):n.currentContext=await n.webnnCreateMLContext({deviceType:F,powerPreference:G})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),(h=n.webgpuOnCreateSession)==null||h.call(n,a),a===0&&me("Can't create a session."),(g=n.jsepOnCreateSession)==null||g.call(n),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[b,S]=yc(a),x=!!(t!=null&&t.enableGraphCapture),w=[],I=[],T=[],E=[],C=[];for(let $=0;$<b;$++){let[M,D,L]=Bn(a,$);M===0&&me("Can't get an input name."),d.push(M);let F=n.UTF8ToString(M);w.push(F),T.push(D===0?{name:F,isTensor:!1}:{name:F,isTensor:!0,type:st(D),shape:L})}for(let $=0;$<S;$++){let[M,D,L]=Bn(a,$+b);M===0&&me("Can't get an output name."),c.push(M);let F=n.UTF8ToString(M);I.push(F),E.push(D===0?{name:F,isTensor:!1}:{name:F,isTensor:!0,type:st(D),shape:L});{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let G=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[F])??"cpu",R=n.webnnIsGraphOutput;if(G==="cpu"&&R&&R(a,F)){C.push("ml-tensor-cpu-output");continue}if(G!=="cpu"&&G!=="cpu-pinned"&&G!=="gpu-buffer"&&G!=="ml-tensor")throw new Error(`Not supported preferred output location: ${G}.`);if(x&&G!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${G}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(G)}}let A=null;return C.some($=>$==="gpu-buffer"||$==="ml-tensor"||$==="ml-tensor-cpu-output")&&(u=n._OrtCreateBinding(a),u===0&&me("Can't create IO binding."),A={handle:u,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map($=>$==="ml-tensor-cpu-output"?"ml-tensor":$).map($=>Si($))}),gt.set(a,[a,d,c,A,x,!1]),[a,w,I,T,E]}catch(b){throw d.forEach(S=>n._OrtFree(S)),c.forEach(S=>n._OrtFree(S)),u!==0&&n._OrtReleaseBinding(u)!==0&&me("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&me("Can't release session."),b}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&me("Can't release session options."),l.forEach(b=>n._free(b)),(_=n.unmountExternalData)==null||_.call(n)}},Nn=e=>{var l,d,c;let t=be(),r=gt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&me("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&me("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),n.forEach(h=>t._OrtFree(h)),a.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(i)!==0&&me("Can't release session."),gt.delete(e)},Dn=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let u=be(),l=u.PTR_SIZE,d=e[0],c=e[1],h=e[3],g=h,y,_;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let x=e[2].gpuBuffer;_=zt(Et(d),c);{let w=u.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=w(i,a,x,_)}}else if(h==="ml-tensor"){let x=e[2].mlTensor;_=zt(Et(d),c);let w=u.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=w(i,x,Et(d),c)}else{let x=e[2];if(Array.isArray(x)){_=l*x.length,y=u._malloc(_),r.push(y);for(let w=0;w<x.length;w++){if(typeof x[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);u.setValue(y+w*l,je(x[w],r),"*")}}else{let w=u.webnnIsGraphInput,I=u.webnnIsGraphOutput;if(d!=="string"&&w&&I){let T=u.UTF8ToString(n);if(w(i,T)||I(i,T)){let E=Et(d);_=zt(E,c),g="ml-tensor";let C=u.webnnCreateTemporaryTensor,A=u.webnnUploadTensor;if(!C||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await C(i,E,c);A($,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),y=$}else _=x.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),y)}else _=x.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),y)}}let b=u.stackSave(),S=u.stackAlloc(4*c.length);try{c.forEach((w,I)=>u.setValue(S+I*l,w,l===4?"i32":"i64"));let x=u._OrtCreateTensor(Et(d),y,_,S,c.length,Si(g));x===0&&me(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(x)}finally{u.stackRestore(b)}},Pn=async(e,t,r,i,n,a)=>{var F,G,R,K;let s=be(),u=s.PTR_SIZE,l=gt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],h=l[2],g=l[3],y=l[4],_=l[5],b=t.length,S=i.length,x=0,w=[],I=[],T=[],E=[],C=[],A=s.stackSave(),$=s.stackAlloc(b*u),M=s.stackAlloc(b*u),D=s.stackAlloc(S*u),L=s.stackAlloc(S*u);try{[x,w]=Ya(a),ct("wasm prepareInputOutputTensor");for(let V=0;V<b;V++)await Dn(r[V],I,E,e,c[t[V]],t[V],y);for(let V=0;V<S;V++)await Dn(n[V],T,E,e,h[i[V]],b+i[V],y);ht("wasm prepareInputOutputTensor");for(let V=0;V<b;V++)s.setValue($+V*u,I[V],"*"),s.setValue(M+V*u,c[t[V]],"*");for(let V=0;V<S;V++)s.setValue(D+V*u,T[V],"*"),s.setValue(L+V*u,h[i[V]],"*");if(g&&!_){let{handle:V,outputPreferredLocations:ue,outputPreferredLocationsEncoded:U}=g;if(c.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${c.length}).`);ct("wasm bindInputsOutputs");for(let H=0;H<b;H++){let Z=t[H];await s._OrtBindInput(V,c[Z],I[H])!==0&&me(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<S;H++){let Z=i[H];(F=n[H])!=null&&F[3]?(C.push(T[H]),s._OrtBindOutput(V,h[Z],T[H],0)!==0&&me(`Can't bind pre-allocated output[${H}] for session=${e}.`)):s._OrtBindOutput(V,h[Z],0,U[Z])!==0&&me(`Can't bind output[${H}] to ${ue[H]} for session=${e}.`)}ht("wasm bindInputsOutputs"),gt.set(e,[d,c,h,g,y,!0])}(G=s.jsepOnRunStart)==null||G.call(s,d),(R=s.webnnOnRunStart)==null||R.call(s,d);let X;g?X=await s._OrtRunWithBinding(d,g.handle,S,D,x):X=await s._OrtRun(d,M,$,b,L,S,D,x),X!==0&&me("failed to call OrtRun().");let ee=[],fe=[];ct("wasm ProcessOutputTensor");for(let V=0;V<S;V++){let ue=Number(s.getValue(D+V*u,"*"));if(ue===T[V]||C.includes(T[V])){ee.push(n[V]),ue!==T[V]&&s._OrtReleaseTensor(ue)!==0&&me("Can't release tensor.");continue}let U=s.stackSave(),H=s.stackAlloc(4*u),Z=!1,q,ge=0;try{s._OrtGetTensorData(ue,H,H+u,H+2*u,H+3*u)!==0&&me(`Can't access output tensor data on index ${V}.`);let Ve=u===4?"i32":"i64",Se=Number(s.getValue(H,Ve));ge=s.getValue(H+u,"*");let Re=s.getValue(H+u*2,"*"),Be=Number(s.getValue(H+u*3,Ve)),Ue=[];for(let we=0;we<Be;we++)Ue.push(Number(s.getValue(Re+we*u,Ve)));s._OrtFree(Re)!==0&&me("Can't free memory for tensor dims.");let Me=Ue.reduce((we,ie)=>we*ie,1);q=st(Se);let _t=g==null?void 0:g.outputPreferredLocations[i[V]];if(q==="string"){if(_t==="gpu-buffer"||_t==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let we=[];for(let ie=0;ie<Me;ie++){let qe=s.getValue(ge+ie*u,"*"),Gr=s.getValue(ge+(ie+1)*u,"*"),mr=ie===Me-1?void 0:Gr-qe;we.push(s.UTF8ToString(qe,mr))}ee.push([q,Ue,we,"cpu"])}else if(_t==="gpu-buffer"&&Me>0){let we=s.jsepGetBuffer;if(!we)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ie=we(ge),qe=zt(Se,Me);if(qe===void 0||!vi(q))throw new Error(`Unsupported data type: ${q}`);Z=!0,ee.push([q,Ue,{gpuBuffer:ie,download:s.jsepCreateDownloader(ie,qe,q),dispose:()=>{s._OrtReleaseTensor(ue)!==0&&me("Can't release tensor.")}},"gpu-buffer"])}else if(_t==="ml-tensor"&&Me>0){let we=s.webnnEnsureTensor,ie=s.webnnIsGraphInputOutputTypeSupported;if(!we||!ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(zt(Se,Me)===void 0||!xi(q))throw new Error(`Unsupported data type: ${q}`);if(!ie(e,q,!1))throw new Error(`preferredLocation "ml-tensor" for ${q} output is not supported by current WebNN Context.`);let qe=await we(e,ge,Se,Ue,!1);Z=!0,ee.push([q,Ue,{mlTensor:qe,download:s.webnnCreateMLTensorDownloader(ge,q),dispose:()=>{s.webnnReleaseTensorId(ge),s._OrtReleaseTensor(ue)}},"ml-tensor"])}else if(_t==="ml-tensor-cpu-output"&&Me>0){let we=s.webnnCreateMLTensorDownloader(ge,q)(),ie=ee.length;Z=!0,fe.push((async()=>{let qe=[ie,await we];return s.webnnReleaseTensorId(ge),s._OrtReleaseTensor(ue),qe})()),ee.push([q,Ue,[],"cpu"])}else{let we=Tr(q),ie=new we(Me);new Uint8Array(ie.buffer,ie.byteOffset,ie.byteLength).set(s.HEAPU8.subarray(ge,ge+ie.byteLength)),ee.push([q,Ue,ie,"cpu"])}}finally{s.stackRestore(U),q==="string"&&ge&&s._free(ge),Z||s._OrtReleaseTensor(ue)}}g&&!y&&(s._OrtClearBoundOutputs(g.handle)!==0&&me("Can't clear bound outputs."),gt.set(e,[d,c,h,g,y,!1]));for(let[V,ue]of await Promise.all(fe))ee[V][2]=ue;return ht("wasm ProcessOutputTensor"),ee}finally{(K=s.webnnOnRunEnd)==null||K.call(s,d),s.stackRestore(A),I.forEach(X=>s._OrtReleaseTensor(X)),T.forEach(X=>s._OrtReleaseTensor(X)),E.forEach(X=>s._free(X)),x!==0&&s._OrtReleaseRunOptions(x),w.forEach(X=>s._free(X))}},Un=e=>{let t=be(),r=gt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&me("Can't get an profile file name."),t._OrtFree(n)},qn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),yt,Oe,Ft,pr,cr,Lr,Ln,Wr,Nt,Dt,bc,wc,$c,vc,xc,Sc,Tc,kc,Ic=P(()=>{We(),_c(),kt(),yi(),yt=()=>!!ye.wasm.proxy&&typeof document<"u",Ft=!1,pr=!1,cr=!1,Wr=new Map,Nt=(e,t)=>{let r=Wr.get(e);r?r.push(t):Wr.set(e,[t])},Dt=()=>{if(Ft||!pr||cr||!Oe)throw new Error("worker not ready")},bc=e=>{switch(e.data.type){case"init-wasm":Ft=!1,e.data.err?(cr=!0,Ln[1](e.data.err)):(pr=!0,Ln[0]()),Lr&&(URL.revokeObjectURL(Lr),Lr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Wr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},wc=async()=>{if(!pr){if(Ft)throw new Error("multiple calls to 'initWasm()' detected.");if(cr)throw new Error("previous call to 'initWasm()' failed.");if(Ft=!0,yt())return new Promise((e,t)=>{Oe==null||Oe.terminate(),ja().then(([r,i])=>{try{Oe=i,Oe.onerror=a=>t(a),Oe.onmessage=bc,Ln=[e,t];let n={type:"init-wasm",in:ye};!n.in.wasm.wasmPaths&&(r||hi)&&(n.in.wasm.wasmPaths={wasm:new URL("/vault/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),Oe.postMessage(n),Lr=r}catch(n){t(n)}},t)});try{await wi(ye.wasm),await On(ye),pr=!0}catch(e){throw cr=!0,e}finally{Ft=!1}}},$c=async e=>{if(yt())return Dt(),new Promise((t,r)=>{Nt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ye}};Oe.postMessage(i)});await Rn(ye,e)},vc=async e=>yt()?(Dt(),new Promise((t,r)=>{Nt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Oe.postMessage(i,[e.buffer])})):qr(e),xc=async(e,t)=>{if(yt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Dt(),new Promise((r,i)=>{Nt("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Oe.postMessage(n,a)})}else return Mn(e,t)},Sc=async e=>{if(yt())return Dt(),new Promise((t,r)=>{Nt("release",[t,r]);let i={type:"release",in:e};Oe.postMessage(i)});Nn(e)},Tc=async(e,t,r,i,n,a)=>{if(yt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Dt(),new Promise((s,u)=>{Nt("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:a}};Oe.postMessage(d,qn(l))})}else return Pn(e,t,r,i,n,a)},kc=async e=>{if(yt())return Dt(),new Promise((t,r)=>{Nt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Oe.postMessage(i)});Un(e)}}),Wn,Ec,zc,jm=P(()=>{We(),Ic(),te(),li(),ns(),Wn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ec=e=>{switch(e[3]){case"cpu":return new He(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!vi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return He.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!xi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return He.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},zc=class{async fetchModelAndCopyToWasmMemory(e){return vc(await Ti(e))}async loadModel(e,t){Fe();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await xc(r,t),Le()}async dispose(){return Sc(this.sessionId)}async run(e,t,r){Fe();let i=[],n=[];Object.entries(e).forEach(h=>{let g=h[0],y=h[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);i.push(y),n.push(_)});let a=[],s=[];Object.entries(t).forEach(h=>{let g=h[0],y=h[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);a.push(y),s.push(_)});let u=i.map((h,g)=>Wn(h,()=>`input "${this.inputNames[n[g]]}"`)),l=a.map((h,g)=>h?Wn(h,()=>`output "${this.outputNames[s[g]]}"`):null),d=await Tc(this.sessionId,n,u,s,l,r),c={};for(let h=0;h<d.length;h++)c[this.outputNames[s[h]]]=a[h]??Ec(d[h]);return Le(),c}startProfiling(){}endProfiling(){kc(this.sessionId)}}}),Cc={};Wt(Cc,{OnnxruntimeWebAssemblyBackend:()=>Gn,initializeFlags:()=>Vn,wasmBackend:()=>Ac});var Vn,Gn,Ac,Km=P(()=>{We(),Ic(),jm(),Vn=()=>{(typeof ye.wasm.initTimeout!="number"||ye.wasm.initTimeout<0)&&(ye.wasm.initTimeout=0);let e=ye.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ye.wasm.simd=!1),typeof ye.wasm.proxy!="boolean"&&(ye.wasm.proxy=!1),typeof ye.wasm.trace!="boolean"&&(ye.wasm.trace=!1),typeof ye.wasm.numThreads!="number"||!Number.isInteger(ye.wasm.numThreads)||ye.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ye.wasm.numThreads=1;else{let t=typeof navigator>"u"?Bf("node:os").cpus().length:navigator.hardwareConcurrency;ye.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Gn=class{async init(e){Vn(),await wc(),await $c(e)}async createInferenceSessionHandler(e,t){let r=new zc;return await r.loadModel(e,t),r}},Ac=new Gn});We(),We(),We();var Xm="1.27.0",Zm=Ma;{let e=(Km(),Zt(Cc)).wasmBackend;St("webgpu",e,5),St("webnn",e,5),St("cpu",e,10),St("wasm",e,10)}Object.defineProperty(ye.versions,"web",{value:Xm,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Qm=Object.freeze({__proto__:null,get InferenceSession(){return ui},get TRACE(){return Jt},get TRACE_EVENT_BEGIN(){return ct},get TRACE_EVENT_END(){return ht},get TRACE_FUNC_BEGIN(){return Fe},get TRACE_FUNC_END(){return Le},get Tensor(){return He},default:Zm,get env(){return ye},get registerBackend(){return St}});const Hn={padding:0,mean:[.485*255,.456*255,.406*255],stdDeviation:[1/.229/255,1/.224/255,1/.255/255],maxSideLength:960,textPixelThreshold:.5,minimumAreaThreshold:20,paddingBoxVertical:.4,paddingBoxHorizontal:.6,dilationKernelSize:1},Fn={mean:[127.5,127.5,127.5],stdDeviation:[1/127.5,1/127.5,1/127.5],imageHeight:48,charactersDictionary:[]},Oc={sortByReadingOrder:!0,sameLineThresholdRatio:.25},Ym={lineMergeThresholdRatio:.5},Jm={detection:Hn,recognition:Fn};function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function eg(e,t){if(hr(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t);if(hr(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tg(e){var t=eg(e,"string");return hr(t)=="symbol"?t:t+""}function ze(e,t,r){return(t=tg(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Rc=class Xt{constructor(t,r,i,n){if(ze(this,"width",void 0),ze(this,"height",void 0),ze(this,"data",void 0),ze(this,"depth",void 0),ze(this,"channels",void 0),this.width=t,this.height=r,this.channels=i,this.depth=8,n)this.data=n;else{const a=t*r*4;this.data=new Uint8Array(a)}}crop(t){const{x:r,y:i,width:n,height:a}=t;if(r<0||i<0||r+n>this.width||i+a>this.height)throw new Error("Crop area is out of bounds");const s=new Uint8Array(n*a*this.channels);for(let u=0;u<a;u++)for(let l=0;l<n;l++){const d=((i+u)*this.width+(r+l))*this.channels,c=(u*n+l)*this.channels;s.set(this.data.subarray(d,d+this.channels),c)}return new Xt(n,a,this.channels,s)}resize(t){let{width:r,height:i}=t;if(r===void 0&&i===void 0)throw new Error("At least one of width or height must be specified");r===void 0&&(r=Math.round(this.width*((i??this.height)/this.height))),i===void 0&&(i=Math.round(this.height*(r/this.width)));const n=this.width,a=this.height,s=r,u=i,l=this.channels,d=this.data;function c(T){return T=Math.abs(T),T<1?1-T:0}function h(T,E,C){return Math.max(E,Math.min(C,T))}const g=new Float32Array(n*u*l),y=a/u,_=y<1?1:y,b=1*_;for(let T=0;T<u;T++){const E=(T+.5)*y-.5,C=Math.max(0,Math.floor(E-b)),A=Math.min(a,Math.ceil(E+b)),$=[];let M=0;for(let D=C;D<A;D++){const L=c((D-E)/_);$.push(L),M+=L}for(let D=0;D<$.length;D++)$[D]/=M;for(let D=0;D<n;D++)for(let L=0;L<l;L++){let F=0;for(let G=0;G<$.length;G++){const R=((C+G)*n+D)*l+L;F+=d[R]*$[G]}g[(T*n+D)*l+L]=F}}const S=new Uint8Array(s*u*l),x=n/s,w=x<1?1:x,I=1*w;for(let T=0;T<s;T++){const E=(T+.5)*x-.5,C=Math.max(0,Math.floor(E-I)),A=Math.min(n,Math.ceil(E+I)),$=[];let M=0;for(let D=C;D<A;D++){const L=c((D-E)/w);$.push(L),M+=L}for(let D=0;D<$.length;D++)$[D]/=M;for(let D=0;D<u;D++)for(let L=0;L<l;L++){let F=0;for(let G=0;G<$.length;G++){const R=(D*n+(C+G))*l+L;F+=g[R]*$[G]}S[(D*s+T)*l+L]=Math.round(h(F,0,255))}}return new Xt(s,u,l,S)}padding(t){let{padding:r,vertical:i,horizontal:n,top:a,bottom:s,left:u,right:l,color:d}=t;typeof r=="number"?a=s=u=l=r:(typeof i=="number"&&(a=s=i),typeof n=="number"&&(u=l=n)),a=a??0,s=s??0,u=u??0,l=l??0,d=d??[0,0,0,0];const c=this.width+u+l,h=this.height+a+s,g=new Uint8Array(c*h*4);for(let y=0;y<h;y++)for(let _=0;_<c;_++){const b=(y*c+_)*4;g[b]=d[0],g[b+1]=d[1],g[b+2]=d[2],g[b+3]=d[3]}for(let y=0;y<this.height;y++)for(let _=0;_<this.width;_++){const b=(y*this.width+_)*4,S=((y+a)*c+(_+u))*4;g.set(this.data.subarray(b,b+4),S)}return new Xt(c,h,this.channels,g)}tensor(t){const r=t.mean_values,i=t.norm_values,n=this.width,a=this.height,s=3,u=this.data,l=new Float32Array(n*a*s);for(let d=0;d<a;d++)for(let c=0;c<n;c++){const h=(d*n+c)*this.channels,g=d*n+c;for(let y=0;y<s;y++){const _=u[h+y]*i[y]-r[y]*i[y];l[y*a*n+g]=_}}return l}threshold(t){const r=t.threshold??128,i=this.width,n=this.height,a=new Uint8Array(i*n);for(let s=0;s<i*n;s++)a[s]=this.data[s*this.channels]>r?255:0;return new Xt(i,n,1,a)}dilate(t={}){const{norm:r="LInf",k:i=1}=t;if(r!=="LInf")throw new Error("Only LInf norm is supported");if(this.channels!==1)throw new Error("Dilate only supports single channel (grayscale) images");const n=this.width,a=this.height,s=this.data,u=999999,l=new Uint16Array(n*a);for(let c=0;c<n*a;c++)l[c]=s[c]>0?0:u;for(let c=0;c<a;c++)for(let h=0;h<n;h++){const g=c*n+h;if(l[g]===0)continue;let y=u;for(let _=-1;_<=0;_++)for(let b=-1;b<=1;b++){if(b===0&&_===0)continue;const S=h+b,x=c+_;if(S>=0&&S<n&&x>=0&&x<a){const w=x*n+S;y=Math.min(y,l[w]+1)}}l[g]=Math.min(l[g],y)}for(let c=a-1;c>=0;c--)for(let h=n-1;h>=0;h--){const g=c*n+h;if(l[g]===0)continue;let y=u;for(let _=0;_<=1;_++)for(let b=-1;b<=1;b++){if(b===0&&_===0)continue;const S=h+b,x=c+_;if(S>=0&&S<n&&x>=0&&x<a){const w=x*n+S;y=Math.min(y,l[w]+1)}}l[g]=Math.min(l[g],y)}const d=new Uint8Array(n*a);for(let c=0;c<n*a;c++)d[c]=l[c]<=i?255:0;return new Xt(n,a,1,d)}contours(t={}){const r=t.minArea??1,i=this.width,n=this.height,a=new Uint8Array(i*n);for(let d=0;d<i*n;d++)a[d]=this.data[d]>0?1:0;const s=new Uint8Array(i*n),u=[],l=(d,c)=>c*i+d;for(let d=0;d<n;d++)for(let c=0;c<i;c++)if(a[l(c,d)]&&!s[l(c,d)]){let h=c,g=d,y=c,_=d,b=0;const S=[[c,d]];for(s[l(c,d)]=1;S.length;){const x=S.shift();if(!x)break;const[w,I]=x;b++,h=Math.min(h,w),g=Math.min(g,I),y=Math.max(y,w),_=Math.max(_,I);for(const[T,E]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const C=w+T,A=I+E;C>=0&&C<i&&A>=0&&A<n&&a[l(C,A)]&&!s[l(C,A)]&&(s[l(C,A)]=1,S.push([C,A]))}}b>=r&&u.push({x:h,y:g,width:y-h+1,height:_-g+1})}return u}rect(t){const{x:r,y:i,width:n,height:a,color:s=[],lineWidth:u=1}=t;if(s.length||s.push(...Array(this.channels).fill(255)),this.channels!==s.length)throw new Error(`Color length ${s.length} does not match image channels ${this.channels}`);for(let l=0;l<u;l++)for(let d=0;d<n;d++){const c=i+l,h=r+d;if(c>=0&&c<this.height&&h>=0&&h<this.width){const y=(c*this.width+h)*this.channels;this.data.set(s,y)}const g=i+a-1-l;if(g>=0&&g<this.height&&h>=0&&h<this.width){const y=(g*this.width+h)*this.channels;this.data.set(s,y)}}for(let l=0;l<u;l++)for(let d=0;d<a;d++){const c=r+l,h=i+d;if(c>=0&&c<this.width&&h>=0&&h<this.height){const y=(h*this.width+c)*this.channels;this.data.set(s,y)}const g=r+n-1-l;if(g>=0&&g<this.width&&h>=0&&h<this.height){const y=(h*this.width+g)*this.channels;this.data.set(s,y)}}}},Bc=class ga{constructor(t,r,i={}){ze(this,"options",void 0),ze(this,"session",void 0),ze(this,"ortModule",void 0),this.session=r,this.ortModule=t,this.options={...Hn,...i}}async run(t,r={}){const{onProgress:i,...n}=r,a=this.resolveRuntimeOptions(n),s=await this.preprocessDetection(t,a);i==null||i({type:"det",stage:"preprocess",progress:this.createProgress(1)});const u=await this.runInference(s.tensor,s.resizeParams);i==null||i({type:"det",stage:"infer",progress:this.createProgress(2)});const l=u?this.postprocessDetection(u,s,a):[];return i==null||i({type:"det",stage:"postprocess",progress:this.createProgress(3),detectedCount:l.length}),l}resolveRuntimeOptions(t={}){return{...this.options,...t}}createProgress(t){return{current:t,remain:ga.TOTAL_PROGRESS_STEPS-t,total:ga.TOTAL_PROGRESS_STEPS}}async preprocessDetection(t,r){const i=this.calculateResizeDimensions(t,r);return{tensor:t.resize({width:i.dstWidth,height:i.dstHeight}).tensor({mean_values:r.mean,norm_values:r.stdDeviation}),resizeParams:i}}calculateResizeDimensions(t,r){const i=r.maxSideLength,{width:n,height:a}=t,s=n>a?i/n:i/a;let u=Math.floor(n*s),l=Math.floor(a*s);u%32!==0&&(u=Math.max(Math.floor(u/32)*32,32)),l%32!==0&&(l=Math.max(Math.floor(l/32)*32,32));const d=u/n,c=l/a;return{srcHeight:a,srcWidth:n,dstHeight:l,dstWidth:u,scaleWidth:d,scaleHeight:c}}async runInference(t,r){const i={x:new this.ortModule.Tensor("float32",t,[1,3,r.dstHeight,r.dstWidth])},n=(await this.session.run(i))[this.session.outputNames[0]||"fetch_name_0"];return n?n.data:null}postprocessDetection(t,r,i){const{dstWidth:n,dstHeight:a}=r.resizeParams;return new Rc(n,a,1,new Uint8Array(t.map(s=>Math.round(s*255)))).threshold({threshold:255*i.textPixelThreshold}).dilate({norm:"LInf",k:i.dilationKernelSize}).contours({minArea:i.minimumAreaThreshold}).map(s=>{const u=this.applyPaddingToRect(s,n,a,i);return this.convertToOriginalCoordinates(u,r.resizeParams)})}applyPaddingToRect(t,r,i,n){const a=n.paddingBoxVertical,s=n.paddingBoxHorizontal,u=Math.round(t.height*a),l=Math.round(t.height*s);let d=t.x-l,c=t.y-u,h=t.width+2*l,g=t.height+2*u;d=Math.max(0,d),c=Math.max(0,c);const y=Math.min(r,t.x+t.width+l),_=Math.min(i,t.y+t.height+u);return h=y-d,g=_-c,{x:d,y:c,width:h,height:g}}convertToOriginalCoordinates(t,r){const i=t.x/r.scaleWidth,n=t.y/r.scaleHeight,a=t.width/r.scaleWidth,s=t.height/r.scaleHeight,u=Math.max(0,Math.round(i)),l=Math.max(0,Math.round(n));return{x:u,y:l,width:Math.min(r.srcWidth-u,Math.round(a)),height:Math.min(r.srcHeight-l,Math.round(s))}}};ze(Bc,"TOTAL_PROGRESS_STEPS",3);var rg=class{constructor(e,t,r={}){ze(this,"options",void 0),ze(this,"session",void 0),ze(this,"ortModule",void 0),this.session=t,this.ortModule=e,this.options={...Fn,...r}}async run(e,t,r){var c;const i=this.resolveRuntimeOptions(r==null?void 0:r.recognition),n=this.resolveOrderingOptions(r==null?void 0:r.ordering),a=this.sortBoxesByReadingOrder(t.filter(h=>h.width>0&&h.height>0),n),s=[],u=(c=r==null?void 0:r.charWhiteList)!=null&&c.length?new Set(r.charWhiteList):void 0,l=a.length,d=r==null?void 0:r.onProgress;d==null||d({type:"rec",stage:"start",progress:this.createProgress(0,l)});for(const[h,g]of a.entries()){const y=await this.processBox({image:e,index:h,box:g,charWhiteSet:u},i);y&&s.push(y),d==null||d({type:"rec",stage:"item",progress:this.createProgress(h+1,l),index:h,box:g,result:y??void 0})}return d==null||d({type:"rec",stage:"complete",progress:this.createProgress(l,l)}),s}resolveRuntimeOptions(e={}){return{...this.options,...e}}resolveOrderingOptions(e={}){return{...Oc,...e}}async processBox(e,t){const{image:r,box:i}=e,n=r.crop(i).resize({height:t.imageHeight}),a=n.tensor({mean_values:t.mean,norm_values:t.stdDeviation}),s=new this.ortModule.Tensor("float32",a,[1,3,n.height,n.width]),{data:u,dims:l}=await this.runInference(s),[,d,c]=l,{text:h,confidence:g}=this.ctcLabelDecode(u,d,c,t,e.charWhiteSet);return{text:h,box:i,confidence:g}}sortBoxesByReadingOrder(e,t){return t.sortByReadingOrder?[...e].sort((r,i)=>Math.abs(r.y-i.y)<(r.height+i.height)*t.sameLineThresholdRatio?r.x-i.x:r.y-i.y):[...e]}createProgress(e,t){return{current:e,remain:t-e,total:t}}async runInference(e){const t={x:e},r=await this.session.run(t),i=Object.keys(r)[0],n=r[i];if(!n)throw new Error(`Recognition output tensor '${i}' not found. Available keys: ${Object.keys(r)}`);return n}ctcLabelDecode(e,t,r,i,n){const a=i.charactersDictionary;let s="";const u=[];let l=-1;for(let d=0;d<t;d++){let c=0,h=0;const g=d*r;for(let _=0;_<r;_++){const b=e[g+_];b>c&&(c=b,h=_)}if(h===l||(l=h,h===0))continue;const y=a[h]||"";n&&!n.has(y)&&y!==" "||(s+=y,u.push(c))}return{text:s,confidence:u.length>0?u.reduce((d,c)=>d+c,0)/u.length:0}}},ig=class Of{constructor(t){if(ze(this,"options",void 0),ze(this,"detectionSession",null),ze(this,"detectionService",null),ze(this,"recognitionSession",null),ze(this,"recognitionService",null),!(t!=null&&t.ort))throw new Error("PaddleOcrService requires the 'ort' option to be set with onnxruntime-node or onnxruntime-wen.");this.options={...Jm,...t||{}}}async initialize(){var l,d;const t=this.options.ort;if(!t)throw new Error("PaddleOcrService requires the 'ort' option to be set with onnxruntime-node or onnxruntime-wen.");const r=(l=this.options.detection)==null?void 0:l.modelBuffer;if(!r)throw new Error("Detection model buffer is required. Please provide a valid ONNX model.");this.detectionSession=await t.InferenceSession.create(r);const{modelBuffer:i,...n}=this.options.detection??{};this.detectionService=new Bc(t,this.detectionSession,n);const a=(d=this.options.recognition)==null?void 0:d.modelBuffer;if(!a)throw new Error("Recognition model buffer is required. Please provide a valid ONNX model.");this.recognitionSession=await t.InferenceSession.create(a);const{modelBuffer:s,...u}=this.options.recognition??{};this.recognitionService=new rg(t,this.recognitionSession,u)}isInitialized(){return this.detectionSession!==null&&this.recognitionSession!==null}static async createInstance(t){const r=new Of(t);return await r.initialize(),r}resolveDetectionRuntimeOptions(t={}){const{modelBuffer:r,...i}=this.options.detection??{};return{...Hn,...i,...t}}resolveRecognitionRuntimeOptions(t={}){const{modelBuffer:r,...i}=this.options.recognition??{};return{...Fn,...i,...t}}resolveRecognitionOrderingOptions(t={}){return{...Oc,...t}}async recognize(t,r){var c;if(!this.detectionService||!this.recognitionService)throw new Error("PaddleOcrService is not initialized. Please call initialize() first.");const i=t.data.length/(t.width*t.height);if(!Number.isInteger(i)||i<1||i>4)throw new Error(`Invalid input data: ${t.data} for image size ${t.width}x${t.height}. Expected 1, 3, or 4 channels.`);const n=this.resolveDetectionRuntimeOptions(r==null?void 0:r.detection),a=this.resolveRecognitionRuntimeOptions(r==null?void 0:r.recognition),s=this.resolveRecognitionOrderingOptions(r==null?void 0:r.ordering);if(!((c=a.charactersDictionary)!=null&&c.length))throw new Error("Recognition charactersDictionary is required. Provide it in createInstance({ recognition }) or recognize(_, { recognition }).");let u=new Rc(t.width,t.height,i,t.data);const l=n.padding;l&&(u=u.padding({padding:l,color:[255,255,255,255]}));const d=await this.detectionService.run(u,{...n,onProgress:r==null?void 0:r.onProgress});return await this.recognitionService.run(u,d,{...r,detection:n,recognition:a,ordering:s})}processRecognition(t,r){const i={text:"",lines:[],confidence:0};if(!t.length)return i;i.confidence=t.reduce((l,d)=>l+d.confidence,0)/t.length;const n={...Ym,...r};let a=[t[0]],s=t[0].text,u=t[0].box.height;for(let l=1;l<t.length;l++){const d=t[l],c=t[l-1];Math.abs(d.box.y-c.box.y)<=u*n.lineMergeThresholdRatio?(a.push(d),s+=` ${d.text}`,u=a.reduce((h,g)=>h+g.box.height,0)/a.length):(i.lines.push([...a]),s+=`
${d.text}`,a=[d],u=d.box.height)}return a.length>0&&i.lines.push([...a]),i.text=s,i}async destroy(){var t,r;await((t=this.detectionSession)==null?void 0:t.release()),await((r=this.recognitionSession)==null?void 0:r.release())}};const Vr="/vault/";ye.wasm.wasmPaths=Vr+"ort/",ye.wasm.numThreads=1;async function jn(e,t){const r=await fetch(e);if(!r.ok)throw new Error("model-fetch "+e);const i=+r.headers.get("Content-Length")||0;if(!r.body||!i){const d=await r.arrayBuffer();return t(1),d}const n=r.body.getReader(),a=[];let s=0;for(;;){const{done:d,value:c}=await n.read();if(d)break;a.push(c),s+=c.length,t(s/i)}const u=new Uint8Array(s);let l=0;for(const d of a)u.set(d,l),l+=d.length;return u.buffer}let fr=null;function ng(){return fr||(fr=(async()=>{const e=[0,0,0],t=[4.9,16.6,.1],r=t.reduce((u,l)=>u+l,0),i=()=>postMessage({t:"load",p:e.reduce((u,l,d)=>u+l*t[d],0)/r}),[n,a,s]=await Promise.all([jn(Vr+"models/PP-OCRv5_mobile_det_infer.onnx",u=>{e[0]=u,i()}),jn(Vr+"models/PP-OCRv5_mobile_rec_infer.onnx",u=>{e[1]=u,i()}),jn(Vr+"models/ppocrv5_dict.txt",u=>{e[2]=u,i()}).then(u=>new TextDecoder().decode(u))]);return ig.createInstance({ort:Qm,detection:{modelBuffer:n},recognition:{modelBuffer:a,charactersDictionary:s.split(`
`),imageHeight:48}})})(),fr.catch(()=>{fr=null})),fr}self.onmessage=async e=>{const{id:t,data:r,width:i,height:n}=e.data||{};try{const s=await(await ng()).recognize({data:new Uint8Array(r),width:i,height:n},{onProgress(d){d.type==="rec"&&d.stage==="item"&&postMessage({t:"ocr",p:Math.max(0,Math.min(1,d.progress||0))})}}),l=((s==null?void 0:s.texts)??s??[]).map(d=>d&&d.text||"").filter(Boolean).join(`
`);postMessage({t:"done",id:t,text:l})}catch(a){postMessage({t:"err",id:t,msg:String(a&&a.message||a)})}}})();
