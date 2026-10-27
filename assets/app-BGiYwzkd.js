import{c as ve,e as Lp,p as ct,S as yf,C as Ki,m as wn,h as ls,a as Fo,i as wl,M as Xo,b as Dp,I as Fe,E as qh,d as vn,f as no,w as Ro,s as Ip,g as Tc,j as Ji,k as cs,l as Yh,D as gn,n as Qr,o as Z,q as rn,r as pt,t as Wi,W as Oo,u as Mf,v as Ac,x as jh,y as Qi,z as ni,A as Up,B as Hr,F as Np,G as Sn,H as Xe,J as Ci,K as Cc,L as Ri,N as Zh,P as Rc,O as zp,Q as Fp,R as Op,T as kp,U as bf,V as Bp,X as Hp,Y as Xs,Z as ks,_ as Sf,$ as Tl,a0 as cn,a1 as $p,a2 as oi,a3 as Kh,a4 as yi,a5 as Vp,a6 as Ef,a7 as Gp,a8 as Wp,a9 as Sa}from"./index-Dq2212Qv.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="170",ai={ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xp=0,wf=1,qp=2,Jh=1,Qh=2,ei=3,Pi=0,en=1,Pn=2,wi=0,Zi=1,Ti=2,Tf=3,Af=4,Yp=5,Vi=100,jp=101,Zp=102,Kp=103,Jp=104,Qp=200,t0=201,e0=202,n0=203,Al=204,Cl=205,i0=206,s0=207,o0=208,r0=209,a0=210,l0=211,c0=212,f0=213,u0=214,Rl=0,Pl=1,Ll=2,qs=3,Dl=4,Il=5,Ul=6,Nl=7,Lc=0,h0=1,d0=2,Ai=0,p0=1,m0=2,g0=3,x0=4,v0=5,_0=6,y0=7,td=300,Ys=301,js=302,zl=303,Fl=304,ua=306,ko=1e3,Xi=1001,Ol=1002,xn=1003,M0=1004,er=1005,On=1006,Ea=1007,qi=1008,ci=1009,ed=1010,nd=1011,Bo=1012,Dc=1013,ts=1014,kn=1015,qo=1016,Ic=1017,Uc=1018,Zs=1020,id=35902,sd=1021,od=1022,In=1023,rd=1024,ad=1025,Bs=1026,Ks=1027,Nc=1028,zc=1029,ld=1030,Fc=1031,Oc=1033,$r=33776,Vr=33777,Gr=33778,Wr=33779,kl=35840,Bl=35841,Hl=35842,$l=35843,Vl=36196,Gl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,jl=37811,Zl=37812,Kl=37813,Jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,oc=37821,Xr=36492,rc=36494,ac=36495,cd=36283,lc=36284,cc=36285,fc=36286,b0=3200,S0=3201,kc=0,E0=1,bi="",Qe="srgb",io="srgb-linear",ha="linear",ye="srgb",gs=7680,Cf=519,w0=512,T0=513,A0=514,fd=515,C0=516,R0=517,P0=518,L0=519,Rf=35044,fi=35048,Pf="300 es",ri=2e3,ta=2001;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qr=Math.PI/180,uc=180/Math.PI;function so(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function qe(n,t,e){return Math.max(t,Math.min(e,n))}function D0(n,t){return(n%t+t)%t}function wa(n,t,e){return(1-e)*n+e*t}function xo(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const I0={DEG2RAD:qr};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,i,s,o,r,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c)}set(t,e,i,s,o,r,a,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=o,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],y=s[4],v=s[7],C=s[2],A=s[5],T=s[8];return o[0]=r*x+a*_+l*C,o[3]=r*m+a*y+l*A,o[6]=r*p+a*v+l*T,o[1]=c*x+f*_+u*C,o[4]=c*m+f*y+u*A,o[7]=c*p+f*v+u*T,o[2]=h*x+d*_+g*C,o[5]=h*m+d*y+g*A,o[8]=h*p+d*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*r*f-e*a*c-i*o*f+i*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=f*r-a*c,h=a*l-f*o,d=c*o-r*l,g=e*u+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-f*i)*x,t[2]=(a*i-s*r)*x,t[3]=h*x,t[4]=(f*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ta.makeScale(t,e)),this}rotate(t){return this.premultiply(Ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new te;function ud(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U0(){const n=ea("canvas");return n.style.display="block",n}const Lf={};function Po(n){n in Lf||(Lf[n]=!0,console.warn(n))}function N0(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function z0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function F0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const de={enabled:!0,workingColorSpace:io,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(n.r=li(n.r),n.g=li(n.g),n.b=li(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(n.r=Hs(n.r),n.g=Hs(n.g),n.b=Hs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===bi?ha:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Df=[.64,.33,.3,.6,.15,.06],If=[.2126,.7152,.0722],Uf=[.3127,.329],Nf=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zf=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);de.define({[io]:{primaries:Df,whitePoint:Uf,transfer:ha,toXYZ:Nf,fromXYZ:zf,luminanceCoefficients:If,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:Df,whitePoint:Uf,transfer:ye,toXYZ:Nf,fromXYZ:zf,luminanceCoefficients:If,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let xs;class O0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=ea("canvas")),xs.width=t.width,xs.height=t.height;const i=xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=li(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(li(e[i]/255)*255):e[i]=li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let k0=0;class hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=so(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Aa(s[r].image)):o.push(Aa(s[r]))}else o=Aa(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?O0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B0=0;class Ze extends fs{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,i=Xi,s=Xi,o=On,r=qi,a=In,l=ci,c=Ze.DEFAULT_ANISOTROPY,f=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=so(),this.name="",this.source=new hd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ko:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ko:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=td;Ze.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,i=0,s=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const l=t.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(d+1)/2,C=(p+1)/2,A=(f+h)/4,T=(u+x)/4,R=(g+m)/4;return y>v&&y>C?y<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(y),s=A/i,o=T/i):v>C?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=A/s,o=R/s):C<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),i=T/o,s=R/o),this.set(i,s,o,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(h-f)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H0 extends fs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends H0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class dd extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $0 extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],c=i[s+1],f=i[s+2],u=i[s+3];const h=o[r+0],d=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==h||c!==d||f!==g){let m=1-a;const p=l*h+c*d+f*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,p*_);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const v=a*_;if(l=l*m+h*v,c=c*m+d*v,f=f*m+g*v,u=u*m+x*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=C,c*=C,f*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],u=o[r],h=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+f*u+l*d-c*h,t[e+1]=l*g+f*h+c*u-a*d,t[e+2]=c*g+f*d+a*h-l*u,t[e+3]=f*g-a*u-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),u=a(o/2),h=l(i/2),d=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"YZX":this._x=h*f*u+c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u-h*d*g;break;case"XZY":this._x=h*f*u-c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],f=e[6],u=e[10],h=i+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+r*a+s*c-o*l,this._y=s*f+r*l+o*a-i*c,this._z=o*f+r*c+i*l-s*a,this._w=r*f-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-e)*f)/c,h=Math.sin(e*f)/c;return this._w=r*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=o*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ff.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ff.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*i),f=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+l*c+r*u-a*f,this.y=i+l*f+a*c-o*u,this.z=s+l*u+o*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new D,Ff=new Vn;class us{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,An):An.fromBufferAttribute(o,r),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vo),ir.subVectors(this.max,vo),vs.subVectors(t.a,vo),_s.subVectors(t.b,vo),ys.subVectors(t.c,vo),pi.subVectors(_s,vs),mi.subVectors(ys,_s),zi.subVectors(vs,ys);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-zi.z,zi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,zi.z,0,-zi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-zi.y,zi.x,0];return!Ra(e,vs,_s,ys,ir)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,vs,_s,ys,ir))?!1:(sr.crossVectors(pi,mi),e=[sr.x,sr.y,sr.z],Ra(e,vs,_s,ys,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new D,new D,new D,new D,new D,new D,new D,new D],An=new D,nr=new us,vs=new D,_s=new D,ys=new D,pi=new D,mi=new D,zi=new D,vo=new D,ir=new D,sr=new D,Fi=new D;function Ra(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Fi.fromArray(n,o);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),f=i.dot(Fi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const V0=new us,_o=new D,Pa=new D;class hs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):V0.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);const e=_o.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_o,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(Pa)),this.expandByPoint(_o.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new D,La=new D,or=new D,gi=new D,Da=new D,rr=new D,Ia=new D;class Yo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){La.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(La);const o=t.distanceTo(e)*.5,r=-this.direction.dot(or),a=gi.dot(this.direction),l=-gi.dot(or),c=gi.lengthSq(),f=Math.abs(1-r*r);let u,h,d,g;if(f>0)if(u=r*l-a,h=r*a-l,g=o*f,u>=0)if(h>=-g)if(h<=g){const x=1/f;u*=x,h*=x,d=u*(u+r*h+2*a)+h*(r*u+h+2*l)+c}else h=o,u=Math.max(0,-(r*h+a)),d=-u*u+h*(h+2*l)+c;else h=-o,u=Math.max(0,-(r*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-r*o+a)),h=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-o,-l),o),d=h*(h+2*l)+c):(u=Math.max(0,-(r*o+a)),h=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+h*(h+2*l)+c);else h=r>0?-o:o,u=Math.max(0,-(r*h+a)),d=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(La).addScaledVector(or,h),d}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(o=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(o=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,i,s,o){Da.subVectors(e,t),rr.subVectors(i,t),Ia.crossVectors(Da,rr);let r=this.direction.dot(Ia),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;gi.subVectors(this.origin,t);const l=a*this.direction.dot(rr.crossVectors(gi,rr));if(l<0)return null;const c=a*this.direction.dot(Da.cross(gi));if(c<0||l+c>r)return null;const f=-a*gi.dot(Ia);return f<0?null:this.at(f/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,i,s,o,r,a,l,c,f,u,h,d,g,x,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c,f,u,h,d,g,x,m)}set(t,e,i,s,o,r,a,l,c,f,u,h,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),o=1/Ms.setFromMatrixColumn(t,1).length(),r=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const h=r*f,d=r*u,g=a*f,x=a*u;e[0]=l*f,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*f,d=l*u,g=c*f,x=c*u;e[0]=h+x*a,e[4]=g*a-d,e[8]=r*c,e[1]=r*u,e[5]=r*f,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=r*l}else if(t.order==="ZXY"){const h=l*f,d=l*u,g=c*f,x=c*u;e[0]=h-x*a,e[4]=-r*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*f,e[9]=x-h*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const h=r*f,d=r*u,g=a*f,x=a*u;e[0]=l*f,e[4]=g*c-d,e[8]=h*c+x,e[1]=l*u,e[5]=x*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,d=r*c,g=a*l,x=a*c;e[0]=l*f,e[4]=x-h*u,e[8]=g*u+d,e[1]=u,e[5]=r*f,e[9]=-a*f,e[2]=-c*f,e[6]=d*u+g,e[10]=h-x*u}else if(t.order==="XZY"){const h=r*l,d=r*c,g=a*l,x=a*c;e[0]=l*f,e[4]=-u,e[8]=c*f,e[1]=h*u+x,e[5]=r*f,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*f,e[10]=x*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(G0,t,W0)}lookAt(t,e,i){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),xi.crossVectors(i,dn),xi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),xi.crossVectors(i,dn)),xi.normalize(),ar.crossVectors(dn,xi),s[0]=xi.x,s[4]=ar.x,s[8]=dn.x,s[1]=xi.y,s[5]=ar.y,s[9]=dn.y,s[2]=xi.z,s[6]=ar.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],y=i[7],v=i[11],C=i[15],A=s[0],T=s[4],R=s[8],E=s[12],M=s[1],L=s[5],W=s[9],V=s[13],F=s[2],Y=s[6],O=s[10],k=s[14],I=s[3],ut=s[7],K=s[11],tt=s[15];return o[0]=r*A+a*M+l*F+c*I,o[4]=r*T+a*L+l*Y+c*ut,o[8]=r*R+a*W+l*O+c*K,o[12]=r*E+a*V+l*k+c*tt,o[1]=f*A+u*M+h*F+d*I,o[5]=f*T+u*L+h*Y+d*ut,o[9]=f*R+u*W+h*O+d*K,o[13]=f*E+u*V+h*k+d*tt,o[2]=g*A+x*M+m*F+p*I,o[6]=g*T+x*L+m*Y+p*ut,o[10]=g*R+x*W+m*O+p*K,o[14]=g*E+x*V+m*k+p*tt,o[3]=_*A+y*M+v*F+C*I,o[7]=_*T+y*L+v*Y+C*ut,o[11]=_*R+y*W+v*O+C*K,o[15]=_*E+y*V+v*k+C*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],f=t[2],u=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+o*l*u-s*c*u-o*a*h+i*c*h+s*a*d-i*l*d)+x*(+e*l*d-e*c*h+o*r*h-s*r*d+s*c*f-o*l*f)+m*(+e*c*u-e*a*d-o*r*u+i*r*d+o*a*f-i*c*f)+p*(-s*a*f-e*l*u+e*a*h+s*r*u-i*r*h+i*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*c-x*h*c+x*l*d-a*m*d-u*l*p+a*h*p,y=g*h*c-f*m*c-g*l*d+r*m*d+f*l*p-r*h*p,v=f*x*c-g*u*c+g*a*d-r*x*d-f*a*p+r*u*p,C=g*u*l-f*x*l-g*a*h+r*x*h+f*a*m-r*u*m,A=e*_+i*y+s*v+o*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=_*T,t[1]=(x*h*o-u*m*o-x*s*d+i*m*d+u*s*p-i*h*p)*T,t[2]=(a*m*o-x*l*o+x*s*c-i*m*c-a*s*p+i*l*p)*T,t[3]=(u*l*o-a*h*o-u*s*c+i*h*c+a*s*d-i*l*d)*T,t[4]=y*T,t[5]=(f*m*o-g*h*o+g*s*d-e*m*d-f*s*p+e*h*p)*T,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*p-e*l*p)*T,t[7]=(r*h*o-f*l*o+f*s*c-e*h*c-r*s*d+e*l*d)*T,t[8]=v*T,t[9]=(g*u*o-f*x*o-g*i*d+e*x*d+f*i*p-e*u*p)*T,t[10]=(r*x*o-g*a*o+g*i*c-e*x*c-r*i*p+e*a*p)*T,t[11]=(f*a*o-r*u*o-f*i*c+e*u*c+r*i*d-e*a*d)*T,t[12]=C*T,t[13]=(f*x*s-g*u*s+g*i*h-e*x*h-f*i*m+e*u*m)*T,t[14]=(g*a*s-r*x*s-g*i*l+e*x*l+r*i*m-e*a*m)*T,t[15]=(r*u*s-f*a*s+f*i*l-e*u*l-r*i*h+e*a*h)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,f=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*r,0,c*l-s*a,f*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,f=r+r,u=a+a,h=o*c,d=o*f,g=o*u,x=r*f,m=r*u,p=a*u,_=l*c,y=l*f,v=l*u,C=i.x,A=i.y,T=i.z;return s[0]=(1-(x+p))*C,s[1]=(d+v)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(h+p))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+y)*T,s[9]=(m-_)*T,s[10]=(1-(h+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Ms.set(s[0],s[1],s[2]).length();const r=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const c=1/o,f=1/r,u=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=f,Cn.elements[5]*=f,Cn.elements[6]*=f,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=ri){const l=this.elements,c=2*o/(e-t),f=2*o/(i-s),u=(e+t)/(e-t),h=(i+s)/(i-s);let d,g;if(a===ri)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ta)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=ri){const l=this.elements,c=1/(e-t),f=1/(i-s),u=1/(r-o),h=(e+t)*c,d=(i+s)*f;let g,x;if(a===ri)g=(r+o)*u,x=-2*u;else if(a===ta)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ms=new D,Cn=new ee,G0=new D(0,0,0),W0=new D(1,1,1),xi=new D,ar=new D,dn=new D,Of=new ee,kf=new Vn;class _n{constructor(t=0,e=0,i=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Of.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Of,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kf.setFromEuler(this),this.setFromQuaternion(kf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let X0=0;const Bf=new D,bs=new Vn,Kn=new ee,lr=new D,yo=new D,q0=new D,Y0=new Vn,Hf=new D(1,0,0),$f=new D(0,1,0),Vf=new D(0,0,1),Gf={type:"added"},j0={type:"removed"},Ss={type:"childadded",child:null},Ua={type:"childremoved",child:null};class Ue extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new D,e=new _n,i=new Vn,s=new D(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new te}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Hf,t)}rotateY(t){return this.rotateOnAxis($f,t)}rotateZ(t){return this.rotateOnAxis(Vf,t)}translateOnAxis(t,e){return Bf.copy(t).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hf,t)}translateY(t){return this.translateOnAxis($f,t)}translateZ(t){return this.translateOnAxis(Vf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lr.copy(t):lr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(yo,lr,this.up):Kn.lookAt(lr,yo,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(Kn),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gf),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j0),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gf),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,t,q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,Y0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),u=r(t.shapes),h=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new D(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new D,Jn=new D,Na=new D,Qn=new D,Es=new D,ws=new D,Wf=new D,za=new D,Fa=new D,Oa=new D,ka=new De,Ba=new De,Ha=new De;class Ln{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Rn.subVectors(t,e),s.cross(Rn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Rn.subVectors(s,e),Jn.subVectors(i,e),Na.subVectors(t,e);const r=Rn.dot(Rn),a=Rn.dot(Jn),l=Rn.dot(Na),c=Jn.dot(Jn),f=Jn.dot(Na),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const h=1/u,d=(c*l-a*f)*h,g=(r*f-a*l)*h;return o.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Qn.x),l.addScaledVector(r,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,i,s,o,r){return ka.setScalar(0),Ba.setScalar(0),Ha.setScalar(0),ka.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,i),Ha.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ka,o.x),r.addScaledVector(Ba,o.y),r.addScaledVector(Ha,o.z),r}static isFrontFacing(t,e,i,s){return Rn.subVectors(i,e),Jn.subVectors(t,e),Rn.cross(Jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return Ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Es.subVectors(s,i),ws.subVectors(o,i),za.subVectors(t,i);const l=Es.dot(za),c=ws.dot(za);if(l<=0&&c<=0)return e.copy(i);Fa.subVectors(t,s);const f=Es.dot(Fa),u=ws.dot(Fa);if(f>=0&&u<=f)return e.copy(s);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),e.copy(i).addScaledVector(Es,r);Oa.subVectors(t,o);const d=Es.dot(Oa),g=ws.dot(Oa);if(g>=0&&d<=g)return e.copy(o);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ws,a);const m=f*g-d*u;if(m<=0&&u-f>=0&&d-g>=0)return Wf.subVectors(o,s),a=(u-f)/(u-f+(d-g)),e.copy(s).addScaledVector(Wf,a);const p=1/(m+x+h);return r=x*p,a=h*p,e.copy(i).addScaledVector(Es,r).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},cr={h:0,s:0,l:0};function $a(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ft{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=i,de.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=de.workingColorSpace){if(t=D0(t,1),e=qe(e,0,1),i=qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=$a(r,o,t+1/3),this.g=$a(r,o,t),this.b=$a(r,o,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=pd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return de.fromWorkingColorSpace(je.copy(this),t),Math.round(qe(je.r*255,0,255))*65536+Math.round(qe(je.g*255,0,255))*256+Math.round(qe(je.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(je.copy(this),e);const i=je.r,s=je.g,o=je.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let l,c;const f=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=f<=.5?u/(r+a):u/(2-r-a),r){case i:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-i)/u+2;break;case o:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Qe){de.fromWorkingColorSpace(je.copy(this),t);const e=je.r,i=je.g,s=je.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(cr);const i=wa(vi.h,cr.h,e),s=wa(vi.s,cr.s,e),o=wa(vi.l,cr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Ft;Ft.NAMES=pd;let Z0=0;class Ii extends fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=so(),this.name="",this.blending=Zi,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Cl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Al&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ui extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new D,fr=new Mt;class re{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rf,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=xo(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xo(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xo(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xo(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array),o=sn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rf&&(t.usage=this.usage),t}}class md extends re{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gd extends re{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ue extends re{constructor(t,e,i){super(new Float32Array(t),e,i)}}let K0=0;const Mn=new ee,Va=new Ue,Ts=new D,pn=new us,Mo=new us,Ve=new D;class Ee extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ud(t)?gd:md)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new te().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,i){return Mn.makeTranslation(t,e,i),this.applyMatrix4(Mn),this}scale(t,e,i){return Mn.makeScale(t,e,i),this.applyMatrix4(Mn),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ue(i,3))}else{for(let i=0,s=e.count;i<s;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(pn.min,Mo.min),pn.expandByPoint(Ve),Ve.addVectors(pn.max,Mo.max),pn.expandByPoint(Ve)):(pn.expandByPoint(Mo.min),pn.expandByPoint(Mo.max))}pn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Ve.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ve.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),Ve.add(Ts)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new re(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new D,l[R]=new D;const c=new D,f=new D,u=new D,h=new Mt,d=new Mt,g=new Mt,x=new D,m=new D;function p(R,E,M){c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),h.fromBufferAttribute(o,R),d.fromBufferAttribute(o,E),g.fromBufferAttribute(o,M),f.sub(c),u.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(L),a[R].add(x),a[E].add(x),a[M].add(x),l[R].add(m),l[E].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,E=_.length;R<E;++R){const M=_[R],L=M.start,W=M.count;for(let V=L,F=L+W;V<F;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const y=new D,v=new D,C=new D,A=new D;function T(R){C.fromBufferAttribute(s,R),A.copy(C);const E=a[R];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),v.crossVectors(A,E);const L=v.dot(l[R])<0?-1:1;r.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,E=_.length;R<E;++R){const M=_[R],L=M.start,W=M.count;for(let V=L,F=L+W;V<F;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new D,o=new D,r=new D,a=new D,l=new D,c=new D,f=new D,u=new D;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),f.subVectors(r,o),u.subVectors(s,o),f.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),f.subVectors(r,o),u.subVectors(s,o),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*f;for(let p=0;p<f;p++)h[g++]=c[d++]}return new re(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const o=t.morphAttributes;for(const c in o){const f=[],u=o[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,f=r.length;c<f;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xf=new ee,Oi=new Yo,ur=new hs,qf=new D,hr=new D,dr=new D,pr=new D,Ga=new D,mr=new D,Yf=new D,gr=new D;class Se extends Ue{constructor(t=new Ee,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){mr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const f=a[l],u=o[l];f!==0&&(Ga.fromBufferAttribute(u,t),r?mr.addScaledVector(Ga,f):mr.addScaledVector(Ga.sub(e),f))}e.add(mr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(o),Oi.copy(t.ray).recast(t.near),!(ur.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(ur,qf)===null||Oi.origin.distanceToSquared(qf)>(t.far-t.near)**2))&&(Xf.copy(o).invert(),Oi.copy(t.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,f=o.attributes.uv1,u=o.attributes.normal,h=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=r[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,C=y;v<C;v+=3){const A=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);s=xr(this,p,t,i,c,f,u,A,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=xr(this,r,t,i,c,f,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=r[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,C=y;v<C;v+=3){const A=v,T=v+1,R=v+2;s=xr(this,p,t,i,c,f,u,A,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const _=m,y=m+1,v=m+2;s=xr(this,r,t,i,c,f,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function J0(n,t,e,i,s,o,r,a){let l;if(t.side===en?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===Pi,a),l===null)return null;gr.copy(a),gr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:n}}function xr(n,t,e,i,s,o,r,a,l,c){n.getVertexPosition(a,hr),n.getVertexPosition(l,dr),n.getVertexPosition(c,pr);const f=J0(n,t,e,i,hr,dr,pr,Yf);if(f){const u=new D;Ln.getBarycoord(Yf,hr,dr,pr,u),s&&(f.uv=Ln.getInterpolatedAttribute(s,a,l,c,u,new Mt)),o&&(f.uv1=Ln.getInterpolatedAttribute(o,a,l,c,u,new Mt)),r&&(f.normal=Ln.getInterpolatedAttribute(r,a,l,c,u,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Ln.getNormal(hr,dr,pr,h.normal),f.face=h,f.barycoord=u}return f}class Ui extends Ee{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],f=[],u=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(u,2));function g(x,m,p,_,y,v,C,A,T,R,E){const M=v/T,L=C/R,W=v/2,V=C/2,F=A/2,Y=T+1,O=R+1;let k=0,I=0;const ut=new D;for(let K=0;K<O;K++){const tt=K*L-V;for(let Lt=0;Lt<Y;Lt++){const Kt=Lt*M-W;ut[x]=Kt*_,ut[m]=tt*y,ut[p]=F,c.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[p]=A>0?1:-1,f.push(ut.x,ut.y,ut.z),u.push(Lt/T),u.push(1-K/R),k+=1}}for(let K=0;K<R;K++)for(let tt=0;tt<T;tt++){const Lt=h+tt+Y*K,Kt=h+tt+Y*(K+1),j=h+(tt+1)+Y*(K+1),ot=h+(tt+1)+Y*K;l.push(Lt,Kt,ot),l.push(Kt,j,ot),I+=6}a.addGroup(d,I,E),d+=I,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=Js(n[e]);for(const s in i)t[s]=i[s]}return t}function Q0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function xd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Hc={clone:Js,merge:Je};var tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=Q0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class vd extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new D,jf=new Mt,Zf=new Mt;class mn extends vd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=uc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uc*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,jf,Zf),e.subVectors(Zf,jf)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,Cs=1;class nm extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(As,Cs,t,e);s.layers=this.layers,this.add(s);const o=new mn(As,Cs,t,e);o.layers=this.layers,this.add(o);const r=new mn(As,Cs,t,e);r.layers=this.layers,this.add(r);const a=new mn(As,Cs,t,e);a.layers=this.layers,this.add(a);const l=new mn(As,Cs,t,e);l.layers=this.layers,this.add(l);const c=new mn(As,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(u,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _d extends Ze{constructor(t,e,i,s,o,r,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,i,s,o,r,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class im extends es{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _d(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:On}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ui(5,5,5),o=new Ge({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:wi});o.uniforms.tEquirect.value=e;const r=new Se(s,o),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=On),new nm(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Wa=new D,sm=new D,om=new te;class Mi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Wa.subVectors(i,e).cross(sm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Wa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||om.getNormalMatrix(t),s=this.coplanarPoint(Wa).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new hs,vr=new D;class $c{constructor(t=new Mi,e=new Mi,i=new Mi,s=new Mi,o=new Mi,r=new Mi){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],f=s[5],u=s[6],h=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-o,h-c,m-d,v-p).normalize(),i[1].setComponents(l+o,h+c,m+d,v+p).normalize(),i[2].setComponents(l+r,h+f,m+g,v+_).normalize(),i[3].setComponents(l-r,h-f,m-g,v-_).normalize(),i[4].setComponents(l-a,h-u,m-x,v-y).normalize(),e===ri)i[5].setComponents(l+a,h+u,m+x,v+y).normalize();else if(e===ta)i[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(vr.x=s.normal.x>0?t.max.x:t.min.x,vr.y=s.normal.y>0?t.max.y:t.min.y,vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yd(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function rm(n){const t=new WeakMap;function e(a,l){const c=a.array,f=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const f=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,f);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){const g=u[h],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,u[h]=x)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];n.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class ds extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,u=t/a,h=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<f;p++){const _=p*h-r;for(let y=0;y<c;y++){const v=y*u-o;g.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const y=_+c*p,v=_+c*(p+1),C=_+1+c*(p+1),A=_+1+c*p;d.push(y,v,A),d.push(v,C,A)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_m=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ax=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:am,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:fm,alphatest_fragment:um,alphatest_pars_fragment:hm,aomap_fragment:dm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:xm,beginnormal_vertex:vm,bsdfs:_m,iridescence_fragment:ym,bumpmap_pars_fragment:Mm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:wm,color_fragment:Tm,color_pars_fragment:Am,color_pars_vertex:Cm,color_vertex:Rm,common:Pm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Im,displacementmap_vertex:Um,emissivemap_fragment:Nm,emissivemap_pars_fragment:zm,colorspace_fragment:Fm,colorspace_pars_fragment:Om,envmap_fragment:km,envmap_common_pars_fragment:Bm,envmap_pars_fragment:Hm,envmap_pars_vertex:$m,envmap_physical_pars_fragment:Qm,envmap_vertex:Vm,fog_vertex:Gm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:jm,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Km,lights_pars_begin:Jm,lights_toon_fragment:tg,lights_toon_pars_fragment:eg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:og,lights_fragment_begin:rg,lights_fragment_maps:ag,lights_fragment_end:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:ug,logdepthbuf_vertex:hg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:vg,morphinstance_vertex:_g,morphcolor_vertex:yg,morphnormal_vertex:Mg,morphtarget_pars_vertex:bg,morphtarget_vertex:Sg,normal_fragment_begin:Eg,normal_fragment_maps:wg,normal_pars_fragment:Tg,normal_pars_vertex:Ag,normal_vertex:Cg,normalmap_pars_fragment:Rg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ig,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:zg,project_vertex:Fg,dithering_fragment:Og,dithering_pars_fragment:kg,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:Vg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Wg,skinbase_vertex:Xg,skinning_pars_vertex:qg,skinning_vertex:Yg,skinnormal_vertex:jg,specularmap_fragment:Zg,specularmap_pars_fragment:Kg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:tx,transmission_pars_fragment:ex,uv_pars_fragment:nx,uv_pars_vertex:ix,uv_vertex:sx,worldpos_vertex:ox,background_vert:rx,background_frag:ax,backgroundCube_vert:lx,backgroundCube_frag:cx,cube_vert:fx,cube_frag:ux,depth_vert:hx,depth_frag:dx,distanceRGBA_vert:px,distanceRGBA_frag:mx,equirect_vert:gx,equirect_frag:xx,linedashed_vert:vx,linedashed_frag:_x,meshbasic_vert:yx,meshbasic_frag:Mx,meshlambert_vert:bx,meshlambert_frag:Sx,meshmatcap_vert:Ex,meshmatcap_frag:wx,meshnormal_vert:Tx,meshnormal_frag:Ax,meshphong_vert:Cx,meshphong_frag:Rx,meshphysical_vert:Px,meshphysical_frag:Lx,meshtoon_vert:Dx,meshtoon_frag:Ix,points_vert:Ux,points_frag:Nx,shadow_vert:zx,shadow_frag:Fx,sprite_vert:Ox,sprite_frag:kx},bt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Fn={basic:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Je([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Je([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Je([bt.points,bt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Je([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Je([bt.common,bt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Je([bt.sprite,bt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Je([bt.common,bt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Je([bt.lights,bt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Fn.physical={uniforms:Je([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const _r={r:0,b:0,g:0},Bi=new _n,Bx=new ee;function Hx(n,t,e,i,s,o,r){const a=new Ft(0);let l=o===!0?0:1,c,f,u=null,h=0,d=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1;const v=g(_);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===ua)?(f===void 0&&(f=new Se(new Ui(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Js(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Bi.copy(y.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(Bi)),f.material.toneMapped=de.getTransfer(v.colorSpace)!==ye,(u!==v||h!==v.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Se(new ds(2,2),new Ge({name:"BackgroundMaterial",uniforms:Js(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=de.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(_r,xd(n)),i.buffers.color.setClear(_r.r,_r.g,_r.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function $x(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let o=s,r=!1;function a(M,L,W,V,F){let Y=!1;const O=u(V,W,L);o!==O&&(o=O,c(o.object)),Y=d(M,V,W,F),Y&&g(M,V,W,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,v(M,L,W,V),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function f(M){return n.deleteVertexArray(M)}function u(M,L,W){const V=W.wireframe===!0;let F=i[M.id];F===void 0&&(F={},i[M.id]=F);let Y=F[L.id];Y===void 0&&(Y={},F[L.id]=Y);let O=Y[V];return O===void 0&&(O=h(l()),Y[V]=O),O}function h(M){const L=[],W=[],V=[];for(let F=0;F<e;F++)L[F]=0,W[F]=0,V[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:V,object:M,attributes:{},index:null}}function d(M,L,W,V){const F=o.attributes,Y=L.attributes;let O=0;const k=W.getAttributes();for(const I in k)if(k[I].location>=0){const K=F[I];let tt=Y[I];if(tt===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),K===void 0||K.attribute!==tt||tt&&K.data!==tt.data)return!0;O++}return o.attributesNum!==O||o.index!==V}function g(M,L,W,V){const F={},Y=L.attributes;let O=0;const k=W.getAttributes();for(const I in k)if(k[I].location>=0){let K=Y[I];K===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const tt={};tt.attribute=K,K&&K.data&&(tt.data=K.data),F[I]=tt,O++}o.attributes=F,o.attributesNum=O,o.index=V}function x(){const M=o.newAttributes;for(let L=0,W=M.length;L<W;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const W=o.newAttributes,V=o.enabledAttributes,F=o.attributeDivisors;W[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),F[M]!==L&&(n.vertexAttribDivisor(M,L),F[M]=L)}function _(){const M=o.newAttributes,L=o.enabledAttributes;for(let W=0,V=L.length;W<V;W++)L[W]!==M[W]&&(n.disableVertexAttribArray(W),L[W]=0)}function y(M,L,W,V,F,Y,O){O===!0?n.vertexAttribIPointer(M,L,W,F,Y):n.vertexAttribPointer(M,L,W,V,F,Y)}function v(M,L,W,V){x();const F=V.attributes,Y=W.getAttributes(),O=L.defaultAttributeValues;for(const k in Y){const I=Y[k];if(I.location>=0){let ut=F[k];if(ut===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),ut!==void 0){const K=ut.normalized,tt=ut.itemSize,Lt=t.get(ut);if(Lt===void 0)continue;const Kt=Lt.buffer,j=Lt.type,ot=Lt.bytesPerElement,vt=j===n.INT||j===n.UNSIGNED_INT||ut.gpuType===Dc;if(ut.isInterleavedBufferAttribute){const xt=ut.data,St=xt.stride,Gt=ut.offset;if(xt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<I.locationSize;Wt++)p(I.location+Wt,xt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Wt=0;Wt<I.locationSize;Wt++)m(I.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let Wt=0;Wt<I.locationSize;Wt++)y(I.location+Wt,tt/I.locationSize,j,K,St*ot,(Gt+tt/I.locationSize*Wt)*ot,vt)}else{if(ut.isInstancedBufferAttribute){for(let xt=0;xt<I.locationSize;xt++)p(I.location+xt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let xt=0;xt<I.locationSize;xt++)m(I.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let xt=0;xt<I.locationSize;xt++)y(I.location+xt,tt/I.locationSize,j,K,tt*ot,tt/I.locationSize*xt*ot,vt)}}else if(O!==void 0){const K=O[k];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(I.location,K);break;case 3:n.vertexAttrib3fv(I.location,K);break;case 4:n.vertexAttrib4fv(I.location,K);break;default:n.vertexAttrib1fv(I.location,K)}}}}_()}function C(){R();for(const M in i){const L=i[M];for(const W in L){const V=L[W];for(const F in V)f(V[F].object),delete V[F];delete L[W]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const W in L){const V=L[W];for(const F in V)f(V[F].object),delete V[F];delete L[W]}delete i[M.id]}function T(M){for(const L in i){const W=i[L];if(W[M.id]===void 0)continue;const V=W[M.id];for(const F in V)f(V[F].object),delete V[F];delete W[M.id]}}function R(){E(),r=!0,o!==s&&(o=s,c(o.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Vx(n,t,e){let i;function s(c){i=c}function o(c,f){n.drawArrays(i,c,f),e.update(f,i,1)}function r(c,f,u){u!==0&&(n.drawArraysInstanced(i,c,f,u),e.update(f,i,u))}function a(c,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let d=0;for(let g=0;g<u;g++)d+=f[g];e.update(d,i,1)}function l(c,f,u,h){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],f[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,u);let g=0;for(let x=0;x<u;x++)g+=f[x]*h[x];e.update(g,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gx(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==In&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ci&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==kn&&!R)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:A}}function Wx(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new Mi,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||i!==0||s;return s=h,i=u.length,d},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||o&&!m)o?f(null):c();else{const _=o?0:i,y=_*4;let v=p.clippingState||null;l.value=v,v=f(g,h,y,d);for(let C=0;C!==y;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(u,h,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==x;++y,v+=4)r.copy(u[y]).applyMatrix4(_,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Xx(n){let t=new WeakMap;function e(r,a){return a===zl?r.mapping=Ys:a===Fl&&(r.mapping=js),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===zl||a===Fl)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new im(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Md extends vd{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ns=4,Kf=[.125,.215,.35,.446,.526,.582],Gi=20,Xa=new Md,Jf=new Ft;let qa=null,Ya=0,ja=0,Za=!1;const $i=(1+Math.sqrt(5))/2,Rs=1/$i,Qf=[new D(-$i,Rs,0),new D($i,Rs,0),new D(-Rs,0,$i),new D(Rs,0,$i),new D(0,$i,-Rs),new D(0,$i,Rs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class tu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Ya,ja),this._renderer.xr.enabled=Za,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:qo,format:In,colorSpace:io,depthBuffer:!1},s=eu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qx(o)),this._blurMaterial=Yx(o,t,e)}return s}_compileMaterial(t){const e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,i,s){const a=new mn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Jf),f.toneMapping=Ai,f.autoClear=!1;const d=new ui({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Se(new Ui,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Jf),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;yr(s,_*y,p>2?y:0,y,y),f.setRenderTarget(s),x&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ys||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Se(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,Xa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Qf[(s-o-1)%Qf.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Se(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),x=o/g,m=isFinite(o)?1+Math.floor(f*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let _=0;for(let T=0;T<Gi;++T){const R=T/x,E=Math.exp(-R*R/2);p.push(E),T===0?_+=E:T<m&&(_+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const v=this._sizeLods[s],C=3*v*(s>y-Ns?s-y+Ns:0),A=4*(this._cubeSize-v);yr(e,C,A,3*v,2*v),l.setRenderTarget(e),l.render(u,Xa)}}function qx(n){const t=[],e=[],i=[];let s=n;const o=n-Ns+1+Kf.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>n-Ns?l=Kf[r-n+Ns-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,R=A>2?0:-1,E=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(E,x*g*A),y.set(h,m*g*A);const M=[A,A,A,A,A,A];v.set(M,p*g*A)}const C=new Ee;C.setAttribute("position",new re(_,x)),C.setAttribute("uv",new re(y,m)),C.setAttribute("faceIndex",new re(v,p)),t.push(C),s>Ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function eu(n,t,e){const i=new es(n,t,e);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Yx(n,t,e){const i=new Float32Array(Gi),s=new D(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function nu(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function iu(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zl||l===Fl,f=l===Ys||l===js;if(c||f){let u=t.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new tu(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new tu(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Zx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Po("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Kx(n,t,e,i){const s={},o=new WeakMap;function r(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",r),delete s[h.id];const d=o.get(h);d&&(t.remove(d),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function l(u){const h=u.attributes;for(const g in h)t.update(h[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){const h=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){const C=_[y+0],A=_[y+1],T=_[y+2];h.push(C,A,A,T,T,C)}}else if(g!==void 0){const _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const C=y+0,A=y+1,T=y+2;h.push(C,A,A,T,T,C)}}else return;const m=new(ud(h)?gd:md)(h,1);m.version=x;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function f(u){const h=o.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function Jx(n,t,e){let i;function s(h){i=h}let o,r;function a(h){o=h.type,r=h.bytesPerElement}function l(h,d){n.drawElements(i,d,o,h*r),e.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,o,h*r,g),e.update(d,i,g))}function f(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(h,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/r,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,o,h,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*x[_];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Qx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function tv(n,t,e){const i=new WeakMap,s=new De;function o(r,a,l){const c=r.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let E=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*C*4*u),T=new dd(A,v,C,u);T.type=kn,T.needsUpdate=!0;const R=y*4;for(let M=0;M<u;M++){const L=m[M],W=p[M],V=_[M],F=v*C*4*M;for(let Y=0;Y<L.count;Y++){const O=Y*R;d===!0&&(s.fromBufferAttribute(L,Y),A[F+O+0]=s.x,A[F+O+1]=s.y,A[F+O+2]=s.z,A[F+O+3]=0),g===!0&&(s.fromBufferAttribute(W,Y),A[F+O+4]=s.x,A[F+O+5]=s.y,A[F+O+6]=s.z,A[F+O+7]=0),x===!0&&(s.fromBufferAttribute(V,Y),A[F+O+8]=s.x,A[F+O+9]=s.y,A[F+O+10]=s.z,A[F+O+11]=V.itemSize===4?s.w:1)}}h={count:u,texture:T,size:new Mt(v,C)},i.set(a,h),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:o}}function ev(n,t,e,i){let s=new WeakMap;function o(l){const c=i.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class bd extends Ze{constructor(t,e,i,s,o,r,a,l,c,f=Bs){if(f!==Bs&&f!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Bs&&(i=ts),i===void 0&&f===Ks&&(i=Zs),super(null,s,o,r,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sd=new Ze,su=new bd(1,1),Ed=new dd,wd=new $0,Td=new _d,ou=[],ru=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function oo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=ou[s];if(o===void 0&&(o=new Float32Array(s),ou[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function He(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function da(n,t){let e=ru[t];e===void 0&&(e=new Int32Array(t),ru[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function nv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),He(e,t)}}function sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),He(e,t)}}function ov(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),He(e,t)}}function rv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Be(e,i))return;cu.set(i),n.uniformMatrix2fv(this.addr,!1,cu),He(e,i)}}function av(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Be(e,i))return;lu.set(i),n.uniformMatrix3fv(this.addr,!1,lu),He(e,i)}}function lv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Be(e,i))return;au.set(i),n.uniformMatrix4fv(this.addr,!1,au),He(e,i)}}function cv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),He(e,t)}}function uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),He(e,t)}}function hv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),He(e,t)}}function dv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function pv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),He(e,t)}}function mv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),He(e,t)}}function gv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),He(e,t)}}function xv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(su.compareFunction=fd,o=su):o=Sd,e.setTexture2D(t||o,s)}function vv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||wd,s)}function _v(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Td,s)}function yv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ed,s)}function Mv(n){switch(n){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return ov;case 35674:return rv;case 35675:return av;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return fv;case 35668:case 35672:return uv;case 35669:case 35673:return hv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return yv}}function bv(n,t){n.uniform1fv(this.addr,t)}function Sv(n,t){const e=oo(t,this.size,2);n.uniform2fv(this.addr,e)}function Ev(n,t){const e=oo(t,this.size,3);n.uniform3fv(this.addr,e)}function wv(n,t){const e=oo(t,this.size,4);n.uniform4fv(this.addr,e)}function Tv(n,t){const e=oo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Av(n,t){const e=oo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Cv(n,t){const e=oo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Rv(n,t){n.uniform1iv(this.addr,t)}function Pv(n,t){n.uniform2iv(this.addr,t)}function Lv(n,t){n.uniform3iv(this.addr,t)}function Dv(n,t){n.uniform4iv(this.addr,t)}function Iv(n,t){n.uniform1uiv(this.addr,t)}function Uv(n,t){n.uniform2uiv(this.addr,t)}function Nv(n,t){n.uniform3uiv(this.addr,t)}function zv(n,t){n.uniform4uiv(this.addr,t)}function Fv(n,t,e){const i=this.cache,s=t.length,o=da(e,s);Be(i,o)||(n.uniform1iv(this.addr,o),He(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Sd,o[r])}function Ov(n,t,e){const i=this.cache,s=t.length,o=da(e,s);Be(i,o)||(n.uniform1iv(this.addr,o),He(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||wd,o[r])}function kv(n,t,e){const i=this.cache,s=t.length,o=da(e,s);Be(i,o)||(n.uniform1iv(this.addr,o),He(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Td,o[r])}function Bv(n,t,e){const i=this.cache,s=t.length,o=da(e,s);Be(i,o)||(n.uniform1iv(this.addr,o),He(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ed,o[r])}function Hv(n){switch(n){case 5126:return bv;case 35664:return Sv;case 35665:return Ev;case 35666:return wv;case 35674:return Tv;case 35675:return Av;case 35676:return Cv;case 5124:case 35670:return Rv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Iv;case 36294:return Uv;case 36295:return Nv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Bv}}class $v{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Mv(e.type)}}class Vv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hv(e.type)}}class Gv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function fu(n,t){n.seq.push(t),n.map[t.id]=t}function Wv(n,t,e){const i=n.name,s=i.length;for(Ka.lastIndex=0;;){const o=Ka.exec(i),r=Ka.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){fu(e,c===void 0?new $v(a,n,t):new Vv(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Gv(a),fu(e,u)),e=u}}}class Yr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Wv(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function uu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Xv=37297;let qv=0;function Yv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const hu=new te;function jv(n){de._getMatrix(hu,de.workingColorSpace,n);const t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(n)){case ha:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function du(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Yv(n.getShaderSource(t),r)}else return s}function Zv(n,t){const e=jv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kv(n,t){let e;switch(t){case p0:e="Linear";break;case m0:e="Reinhard";break;case g0:e="Cineon";break;case x0:e="ACESFilmic";break;case _0:e="AgX";break;case y0:e="Neutral";break;case v0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new D;function Jv(){de.getLuminanceCoefficients(Mr);const n=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function t_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function e_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Lo(n){return n!==""}function pu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(n){return n.replace(n_,s_)}const i_=new Map;function s_(n,t){let e=ne[t];if(e===void 0){const i=i_.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(n){return n.replace(o_,r_)}function r_(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function xu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function a_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function l_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case js:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function f_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lc:t="ENVMAP_BLENDING_MULTIPLY";break;case h0:t="ENVMAP_BLENDING_MIX";break;case d0:t="ENVMAP_BLENDING_ADD";break}return t}function u_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function h_(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=a_(e),c=l_(e),f=c_(e),u=f_(e),h=u_(e),d=Qv(e),g=t_(o),x=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(m=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ne.tonemapping_pars_fragment:"",e.toneMapping!==Ai?Kv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Zv("linearToOutputTexel",e.outputColorSpace),Jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lo).join(`
`)),r=hc(r),r=pu(r,e),r=mu(r,e),a=hc(a),a=pu(a,e),a=mu(a,e),r=gu(r),a=gu(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+r,v=_+p+a,C=uu(s,s.VERTEX_SHADER,y),A=uu(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(L){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(A).trim();let Y=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,C,A);else{const k=du(s,C,"vertex"),I=du(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+k+`
`+I)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||F==="")&&(O=!1);O&&(L.diagnostics={runnable:Y,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(C),s.deleteShader(A),R=new Yr(s,x),E=e_(s,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Xv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let d_=0;class p_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new m_(t),e.set(t,i)),i}}class m_{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}}function g_(n,t,e,i,s,o,r){const a=new Bc,l=new p_,c=new Set,f=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,W,V){const F=W.fog,Y=V.geometry,O=E.isMeshStandardMaterial?W.environment:null,k=(E.isMeshStandardMaterial?e:t).get(E.envMap||O),I=k&&k.mapping===ua?k.image.height:null,ut=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const K=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tt=K!==void 0?K.length:0;let Lt=0;Y.morphAttributes.position!==void 0&&(Lt=1),Y.morphAttributes.normal!==void 0&&(Lt=2),Y.morphAttributes.color!==void 0&&(Lt=3);let Kt,j,ot,vt;if(ut){const ce=Fn[ut];Kt=ce.vertexShader,j=ce.fragmentShader}else Kt=E.vertexShader,j=E.fragmentShader,l.update(E),ot=l.getVertexShaderID(E),vt=l.getFragmentShaderID(E);const xt=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),Gt=V.isInstancedMesh===!0,Wt=V.isBatchedMesh===!0,ae=!!E.map,Jt=!!E.matcap,he=!!k,$=!!E.aoMap,$t=!!E.lightMap,Dt=!!E.bumpMap,Bt=!!E.normalMap,B=!!E.displacementMap,X=!!E.emissiveMap,Q=!!E.metalnessMap,w=!!E.roughnessMap,S=E.anisotropy>0,G=E.clearcoat>0,J=E.dispersion>0,st=E.iridescence>0,nt=E.sheen>0,Pt=E.transmission>0,_t=S&&!!E.anisotropyMap,gt=G&&!!E.clearcoatMap,Xt=G&&!!E.clearcoatNormalMap,lt=G&&!!E.clearcoatRoughnessMap,yt=st&&!!E.iridescenceMap,zt=st&&!!E.iridescenceThicknessMap,kt=nt&&!!E.sheenColorMap,Ct=nt&&!!E.sheenRoughnessMap,Yt=!!E.specularMap,qt=!!E.specularColorMap,se=!!E.specularIntensityMap,H=Pt&&!!E.transmissionMap,wt=Pt&&!!E.thicknessMap,et=!!E.gradientMap,at=!!E.alphaMap,Tt=E.alphaTest>0,At=!!E.alphaHash,jt=!!E.extensions;let oe=Ai;E.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(oe=n.toneMapping);const Ne={shaderID:ut,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:j,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:vt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Wt,batchingColor:Wt&&V._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&V.instanceColor!==null,instancingMorph:Gt&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:xt===null?n.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:io,alphaToCoverage:!!E.alphaToCoverage,map:ae,matcap:Jt,envMap:he,envMapMode:he&&k.mapping,envMapCubeUVHeight:I,aoMap:$,lightMap:$t,bumpMap:Dt,normalMap:Bt,displacementMap:h&&B,emissiveMap:X,normalMapObjectSpace:Bt&&E.normalMapType===E0,normalMapTangentSpace:Bt&&E.normalMapType===kc,metalnessMap:Q,roughnessMap:w,anisotropy:S,anisotropyMap:_t,clearcoat:G,clearcoatMap:gt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:lt,dispersion:J,iridescence:st,iridescenceMap:yt,iridescenceThicknessMap:zt,sheen:nt,sheenColorMap:kt,sheenRoughnessMap:Ct,specularMap:Yt,specularColorMap:qt,specularIntensityMap:se,transmission:Pt,transmissionMap:H,thicknessMap:wt,gradientMap:et,opaque:E.transparent===!1&&E.blending===Zi&&E.alphaToCoverage===!1,alphaMap:at,alphaTest:Tt,alphaHash:At,combine:E.combine,mapUv:ae&&x(E.map.channel),aoMapUv:$&&x(E.aoMap.channel),lightMapUv:$t&&x(E.lightMap.channel),bumpMapUv:Dt&&x(E.bumpMap.channel),normalMapUv:Bt&&x(E.normalMap.channel),displacementMapUv:B&&x(E.displacementMap.channel),emissiveMapUv:X&&x(E.emissiveMap.channel),metalnessMapUv:Q&&x(E.metalnessMap.channel),roughnessMapUv:w&&x(E.roughnessMap.channel),anisotropyMapUv:_t&&x(E.anisotropyMap.channel),clearcoatMapUv:gt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(E.sheenRoughnessMap.channel),specularMapUv:Yt&&x(E.specularMap.channel),specularColorMapUv:qt&&x(E.specularColorMap.channel),specularIntensityMapUv:se&&x(E.specularIntensityMap.channel),transmissionMapUv:H&&x(E.transmissionMap.channel),thicknessMapUv:wt&&x(E.thicknessMap.channel),alphaMapUv:at&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Bt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(ae||at),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:ae&&E.map.isVideoTexture===!0&&de.getTransfer(E.map.colorSpace)===ye,decodeVideoTextureEmissive:X&&E.emissiveMap.isVideoTexture===!0&&de.getTransfer(E.emissiveMap.colorSpace)===ye,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Pn,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:jt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&E.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(_(M,E),y(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const M=g[E.type];let L;if(M){const W=Fn[M];L=Hc.clone(W.uniforms)}else L=E.uniforms;return L}function C(E,M){let L;for(let W=0,V=f.length;W<V;W++){const F=f[W];if(F.cacheKey===M){L=F,++L.usedTimes;break}}return L===void 0&&(L=new h_(n,M,E,o),f.push(L)),L}function A(E){if(--E.usedTimes===0){const M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function T(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:f,dispose:R}}function x_(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function v_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _u(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,h,d,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:h,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,h,d,g,x,m){const p=r(u,h,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,h,d,g,x,m){const p=r(u,h,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,h){e.length>1&&e.sort(u||v_),i.length>1&&i.sort(h||vu),s.length>1&&s.sort(h||vu)}function f(){for(let u=t,h=n.length;u<h;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:f,sort:c}}function __(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new _u,n.set(i,[r])):s>=o.length?(r=new _u,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function y_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ft};break;case"SpotLight":e={position:new D,direction:new D,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function M_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let b_=0;function S_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function E_(n){const t=new y_,e=M_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,o=new ee,r=new ee;function a(c){let f=0,u=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,C=0,A=0,T=0;c.sort(S_);for(let E=0,M=c.length;E<M;E++){const L=c[E],W=L.color,V=L.intensity,F=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=W.r*V,u+=W.g*V,h+=W.b*V;else if(L.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(L.sh.coefficients[O],V);T++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,I=e.get(L);I.shadowIntensity=k.intensity,I.shadowBias=k.bias,I.shadowNormalBias=k.normalBias,I.shadowRadius=k.radius,I.shadowMapSize=k.mapSize,i.directionalShadow[d]=I,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=L.shadow.matrix,_++}i.directional[d]=O,d++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(W).multiplyScalar(V),O.distance=F,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,i.spot[x]=O;const k=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,k.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=k.matrix,L.castShadow){const I=e.get(L);I.shadowIntensity=k.intensity,I.shadowBias=k.bias,I.shadowNormalBias=k.normalBias,I.shadowRadius=k.radius,I.shadowMapSize=k.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=Y,v++}x++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(W).multiplyScalar(V),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=O,m++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const k=L.shadow,I=e.get(L);I.shadowIntensity=k.intensity,I.shadowBias=k.bias,I.shadowNormalBias=k.normalBias,I.shadowRadius=k.radius,I.shadowMapSize=k.mapSize,I.shadowCameraNear=k.camera.near,I.shadowCameraFar=k.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=O,g++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(V),O.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==C||R.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=C,R.numLightProbes=T,i.version=b_++)}function l(c,f){let u=0,h=0,d=0,g=0,x=0;const m=f.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(y.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function yu(n){const t=new E_(n),e=[],i=[];function s(f){c.camera=f,e.length=0,i.length=0}function o(f){e.push(f)}function r(f){i.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function w_(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new yu(n),t.set(s,[a])):o>=r.length?(a=new yu(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class T_ extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=b0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class A_ extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P_(n,t,e){let i=new $c;const s=new Mt,o=new Mt,r=new De,a=new T_({depthPacking:S0}),l=new A_,c={},f=e.maxTextureSize,u={[Pi]:en,[en]:Pi,[Pn]:Pn},h=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:C_,fragmentShader:R_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Se(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let p=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),W=n.state;W.setBlending(wi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=p!==ei&&this.type===ei,F=p===ei&&this.type!==ei;for(let Y=0,O=A.length;Y<O;Y++){const k=A[Y],I=k.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const ut=I.getFrameExtents();if(s.multiply(ut),o.copy(I.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(o.x=Math.floor(f/ut.x),s.x=o.x*ut.x,I.mapSize.x=o.x),s.y>f&&(o.y=Math.floor(f/ut.y),s.y=o.y*ut.y,I.mapSize.y=o.y)),I.map===null||V===!0||F===!0){const tt=this.type!==ei?{minFilter:xn,magFilter:xn}:{};I.map!==null&&I.map.dispose(),I.map=new es(s.x,s.y,tt),I.map.texture.name=k.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const K=I.getViewportCount();for(let tt=0;tt<K;tt++){const Lt=I.getViewport(tt);r.set(o.x*Lt.x,o.y*Lt.y,o.x*Lt.z,o.y*Lt.w),W.viewport(r),I.updateMatrices(k,tt),i=I.getFrustum(),v(T,R,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===ei&&_(I,R),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,L)};function _(A,T){const R=t.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new es(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,R,h,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,R,d,x,null)}function y(A,T,R,E){let M=null;const L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=M.uuid,V=T.uuid;let F=c[W];F===void 0&&(F={},c[W]=F);let Y=F[V];Y===void 0&&(Y=M.clone(),F[V]=Y,T.addEventListener("dispose",C)),M=Y}if(M.visible=T.visible,M.wireframe=T.wireframe,E===ei?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=n.properties.get(M);W.light=R}return M}function v(A,T,R,E,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ei)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const V=t.update(A),F=A.material;if(Array.isArray(F)){const Y=V.groups;for(let O=0,k=Y.length;O<k;O++){const I=Y[O],ut=F[I.materialIndex];if(ut&&ut.visible){const K=y(A,ut,E,M);A.onBeforeShadow(n,A,T,R,V,K,I),n.renderBufferDirect(R,null,V,K,A,I),A.onAfterShadow(n,A,T,R,V,K,I)}}}else if(F.visible){const Y=y(A,F,E,M);A.onBeforeShadow(n,A,T,R,V,Y,null),n.renderBufferDirect(R,null,V,Y,A,null),A.onAfterShadow(n,A,T,R,V,Y,null)}}const W=A.children;for(let V=0,F=W.length;V<F;V++)v(W[V],T,R,E,M)}function C(A){A.target.removeEventListener("dispose",C);for(const R in c){const E=c[R],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const L_={[Rl]:Pl,[Ll]:Ul,[Dl]:Nl,[qs]:Il,[Pl]:Rl,[Ul]:Ll,[Nl]:Dl,[Il]:qs};function D_(n,t){function e(){let H=!1;const wt=new De;let et=null;const at=new De(0,0,0,0);return{setMask:function(Tt){et!==Tt&&!H&&(n.colorMask(Tt,Tt,Tt,Tt),et=Tt)},setLocked:function(Tt){H=Tt},setClear:function(Tt,At,jt,oe,Ne){Ne===!0&&(Tt*=oe,At*=oe,jt*=oe),wt.set(Tt,At,jt,oe),at.equals(wt)===!1&&(n.clearColor(Tt,At,jt,oe),at.copy(wt))},reset:function(){H=!1,et=null,at.set(-1,0,0,0)}}}function i(){let H=!1,wt=!1,et=null,at=null,Tt=null;return{setReversed:function(At){if(wt!==At){const jt=t.get("EXT_clip_control");wt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const oe=Tt;Tt=null,this.setClear(oe)}wt=At},getReversed:function(){return wt},setTest:function(At){At?xt(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(At){et!==At&&!H&&(n.depthMask(At),et=At)},setFunc:function(At){if(wt&&(At=L_[At]),at!==At){switch(At){case Rl:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Ll:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case Dl:n.depthFunc(n.EQUAL);break;case Il:n.depthFunc(n.GEQUAL);break;case Ul:n.depthFunc(n.GREATER);break;case Nl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}at=At}},setLocked:function(At){H=At},setClear:function(At){Tt!==At&&(wt&&(At=1-At),n.clearDepth(At),Tt=At)},reset:function(){H=!1,et=null,at=null,Tt=null,wt=!1}}}function s(){let H=!1,wt=null,et=null,at=null,Tt=null,At=null,jt=null,oe=null,Ne=null;return{setTest:function(ce){H||(ce?xt(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(ce){wt!==ce&&!H&&(n.stencilMask(ce),wt=ce)},setFunc:function(ce,$e,Ke){(et!==ce||at!==$e||Tt!==Ke)&&(n.stencilFunc(ce,$e,Ke),et=ce,at=$e,Tt=Ke)},setOp:function(ce,$e,Ke){(At!==ce||jt!==$e||oe!==Ke)&&(n.stencilOp(ce,$e,Ke),At=ce,jt=$e,oe=Ke)},setLocked:function(ce){H=ce},setClear:function(ce){Ne!==ce&&(n.clearStencil(ce),Ne=ce)},reset:function(){H=!1,wt=null,et=null,at=null,Tt=null,At=null,jt=null,oe=null,Ne=null}}}const o=new e,r=new i,a=new s,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,C=null,A=null,T=new Ft(0,0,0),R=0,E=!1,M=null,L=null,W=null,V=null,F=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,k=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(I)[1]),O=k>=1):I.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),O=k>=2);let ut=null,K={};const tt=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Kt=new De().fromArray(tt),j=new De().fromArray(Lt);function ot(H,wt,et,at){const Tt=new Uint8Array(4),At=n.createTexture();n.bindTexture(H,At),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<et;jt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,at,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(wt+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return At}const vt={};vt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),vt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),vt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xt(n.DEPTH_TEST),r.setFunc(qs),Dt(!1),Bt(wf),xt(n.CULL_FACE),$(wi);function xt(H){f[H]!==!0&&(n.enable(H),f[H]=!0)}function St(H){f[H]!==!1&&(n.disable(H),f[H]=!1)}function Gt(H,wt){return u[H]!==wt?(n.bindFramebuffer(H,wt),u[H]=wt,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=wt),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function Wt(H,wt){let et=d,at=!1;if(H){et=h.get(wt),et===void 0&&(et=[],h.set(wt,et));const Tt=H.textures;if(et.length!==Tt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let At=0,jt=Tt.length;At<jt;At++)et[At]=n.COLOR_ATTACHMENT0+At;et.length=Tt.length,at=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,at=!0);at&&n.drawBuffers(et)}function ae(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const Jt={[Vi]:n.FUNC_ADD,[jp]:n.FUNC_SUBTRACT,[Zp]:n.FUNC_REVERSE_SUBTRACT};Jt[Kp]=n.MIN,Jt[Jp]=n.MAX;const he={[Qp]:n.ZERO,[t0]:n.ONE,[e0]:n.SRC_COLOR,[Al]:n.SRC_ALPHA,[a0]:n.SRC_ALPHA_SATURATE,[o0]:n.DST_COLOR,[i0]:n.DST_ALPHA,[n0]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[r0]:n.ONE_MINUS_DST_COLOR,[s0]:n.ONE_MINUS_DST_ALPHA,[l0]:n.CONSTANT_COLOR,[c0]:n.ONE_MINUS_CONSTANT_COLOR,[f0]:n.CONSTANT_ALPHA,[u0]:n.ONE_MINUS_CONSTANT_ALPHA};function $(H,wt,et,at,Tt,At,jt,oe,Ne,ce){if(H===wi){x===!0&&(St(n.BLEND),x=!1);return}if(x===!1&&(xt(n.BLEND),x=!0),H!==Yp){if(H!==m||ce!==E){if((p!==Vi||v!==Vi)&&(n.blendEquation(n.FUNC_ADD),p=Vi,v=Vi),ce)switch(H){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ti:n.blendFunc(n.ONE,n.ONE);break;case Tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Af:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ti:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Af:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,y=null,C=null,A=null,T.set(0,0,0),R=0,m=H,E=ce}return}Tt=Tt||wt,At=At||et,jt=jt||at,(wt!==p||Tt!==v)&&(n.blendEquationSeparate(Jt[wt],Jt[Tt]),p=wt,v=Tt),(et!==_||at!==y||At!==C||jt!==A)&&(n.blendFuncSeparate(he[et],he[at],he[At],he[jt]),_=et,y=at,C=At,A=jt),(oe.equals(T)===!1||Ne!==R)&&(n.blendColor(oe.r,oe.g,oe.b,Ne),T.copy(oe),R=Ne),m=H,E=!1}function $t(H,wt){H.side===Pn?St(n.CULL_FACE):xt(n.CULL_FACE);let et=H.side===en;wt&&(et=!et),Dt(et),H.blending===Zi&&H.transparent===!1?$(wi):$(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),o.setMask(H.colorWrite);const at=H.stencilWrite;a.setTest(at),at&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),X(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xt(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function Bt(H){H!==Xp?(xt(n.CULL_FACE),H!==L&&(H===wf?n.cullFace(n.BACK):H===qp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),L=H}function B(H){H!==W&&(O&&n.lineWidth(H),W=H)}function X(H,wt,et){H?(xt(n.POLYGON_OFFSET_FILL),(V!==wt||F!==et)&&(n.polygonOffset(wt,et),V=wt,F=et)):St(n.POLYGON_OFFSET_FILL)}function Q(H){H?xt(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function w(H){H===void 0&&(H=n.TEXTURE0+Y-1),ut!==H&&(n.activeTexture(H),ut=H)}function S(H,wt,et){et===void 0&&(ut===null?et=n.TEXTURE0+Y-1:et=ut);let at=K[et];at===void 0&&(at={type:void 0,texture:void 0},K[et]=at),(at.type!==H||at.texture!==wt)&&(ut!==et&&(n.activeTexture(et),ut=et),n.bindTexture(H,wt||vt[H]),at.type=H,at.texture=wt)}function G(){const H=K[ut];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xt(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kt(H){Kt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Kt.copy(H))}function Ct(H){j.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),j.copy(H))}function Yt(H,wt){let et=c.get(wt);et===void 0&&(et=new WeakMap,c.set(wt,et));let at=et.get(H);at===void 0&&(at=n.getUniformBlockIndex(wt,H.name),et.set(H,at))}function qt(H,wt){const at=c.get(wt).get(H);l.get(wt)!==at&&(n.uniformBlockBinding(wt,at,H.__bindingPointIndex),l.set(wt,at))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ut=null,K={},u={},h=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,C=null,A=null,T=new Ft(0,0,0),R=0,E=!1,M=null,L=null,W=null,V=null,F=null,Kt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:xt,disable:St,bindFramebuffer:Gt,drawBuffers:Wt,useProgram:ae,setBlending:$,setMaterial:$t,setFlipSided:Dt,setCullFace:Bt,setLineWidth:B,setPolygonOffset:X,setScissorTest:Q,activeTexture:w,bindTexture:S,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:st,texImage2D:yt,texImage3D:zt,updateUBOMapping:Yt,uniformBlockBinding:qt,texStorage2D:Xt,texStorage3D:lt,texSubImage2D:nt,texSubImage3D:Pt,compressedTexSubImage2D:_t,compressedTexSubImage3D:gt,scissor:kt,viewport:Ct,reset:se}}function Mu(n,t,e,i){const s=I_(i);switch(e){case sd:return n*t;case rd:return n*t;case ad:return n*t*2;case Nc:return n*t/s.components*s.byteLength;case zc:return n*t/s.components*s.byteLength;case ld:return n*t*2/s.components*s.byteLength;case Fc:return n*t*2/s.components*s.byteLength;case od:return n*t*3/s.components*s.byteLength;case In:return n*t*4/s.components*s.byteLength;case Oc:return n*t*4/s.components*s.byteLength;case $r:case Vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:case $l:return Math.max(n,16)*Math.max(t,8)/4;case kl:case Hl:return Math.max(n,8)*Math.max(t,8)/2;case Vl:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xr:case rc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cd:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case cc:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I_(n){switch(n){case ci:case ed:return{byteLength:1,components:1};case Bo:case nd:case qo:return{byteLength:2,components:1};case Ic:case Uc:return{byteLength:2,components:4};case ts:case Dc:case kn:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function U_(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,f=new WeakMap;let u;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return d?new OffscreenCanvas(w,S):ea("canvas")}function x(w,S,G){let J=1;const st=Q(w);if((st.width>G||st.height>G)&&(J=G/Math.max(st.width,st.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const nt=Math.floor(J*st.width),Pt=Math.floor(J*st.height);u===void 0&&(u=g(nt,Pt));const _t=S?g(nt,Pt):u;return _t.width=nt,_t.height=Pt,_t.getContext("2d").drawImage(w,0,0,nt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+nt+"x"+Pt+")."),_t}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function _(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(w,S,G,J,st=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=S;if(S===n.RED&&(G===n.FLOAT&&(nt=n.R32F),G===n.HALF_FLOAT&&(nt=n.R16F),G===n.UNSIGNED_BYTE&&(nt=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.R8UI),G===n.UNSIGNED_SHORT&&(nt=n.R16UI),G===n.UNSIGNED_INT&&(nt=n.R32UI),G===n.BYTE&&(nt=n.R8I),G===n.SHORT&&(nt=n.R16I),G===n.INT&&(nt=n.R32I)),S===n.RG&&(G===n.FLOAT&&(nt=n.RG32F),G===n.HALF_FLOAT&&(nt=n.RG16F),G===n.UNSIGNED_BYTE&&(nt=n.RG8)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.RG8UI),G===n.UNSIGNED_SHORT&&(nt=n.RG16UI),G===n.UNSIGNED_INT&&(nt=n.RG32UI),G===n.BYTE&&(nt=n.RG8I),G===n.SHORT&&(nt=n.RG16I),G===n.INT&&(nt=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),G===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),G===n.UNSIGNED_INT&&(nt=n.RGB32UI),G===n.BYTE&&(nt=n.RGB8I),G===n.SHORT&&(nt=n.RGB16I),G===n.INT&&(nt=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),G===n.UNSIGNED_INT&&(nt=n.RGBA32UI),G===n.BYTE&&(nt=n.RGBA8I),G===n.SHORT&&(nt=n.RGBA16I),G===n.INT&&(nt=n.RGBA32I)),S===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),S===n.RGBA){const Pt=st?ha:de.getTransfer(J);G===n.FLOAT&&(nt=n.RGBA32F),G===n.HALF_FLOAT&&(nt=n.RGBA16F),G===n.UNSIGNED_BYTE&&(nt=Pt===ye?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(w,S){let G;return w?S===null||S===ts||S===Zs?G=n.DEPTH24_STENCIL8:S===kn?G=n.DEPTH32F_STENCIL8:S===Bo&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===Zs?G=n.DEPTH_COMPONENT24:S===kn?G=n.DEPTH_COMPONENT32F:S===Bo&&(G=n.DEPTH_COMPONENT16),G}function C(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==xn&&w.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&f.delete(S)}function T(w){const S=w.target;S.removeEventListener("dispose",T),M(S)}function R(w){const S=i.get(w);if(S.__webglInit===void 0)return;const G=w.source,J=h.get(G);if(J){const st=J[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&E(w),Object.keys(J).length===0&&h.delete(G)}i.remove(w)}function E(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const G=w.source,J=h.get(G);delete J[S.__cacheKey],r.memory.textures--}function M(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let st=0;st<S.__webglFramebuffer[J].length;st++)n.deleteFramebuffer(S.__webglFramebuffer[J][st]);else n.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)n.deleteFramebuffer(S.__webglFramebuffer[J]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=w.textures;for(let J=0,st=G.length;J<st;J++){const nt=i.get(G[J]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),r.memory.textures--),i.remove(G[J])}i.remove(w)}let L=0;function W(){L=0}function V(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function F(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function Y(w,S){const G=i.get(w);if(w.isVideoTexture&&B(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,w,S);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function O(w,S){const G=i.get(w);if(w.version>0&&G.__version!==w.version){j(G,w,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function k(w,S){const G=i.get(w);if(w.version>0&&G.__version!==w.version){j(G,w,S);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function I(w,S){const G=i.get(w);if(w.version>0&&G.__version!==w.version){ot(G,w,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const ut={[ko]:n.REPEAT,[Xi]:n.CLAMP_TO_EDGE,[Ol]:n.MIRRORED_REPEAT},K={[xn]:n.NEAREST,[M0]:n.NEAREST_MIPMAP_NEAREST,[er]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[Ea]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},tt={[w0]:n.NEVER,[L0]:n.ALWAYS,[T0]:n.LESS,[fd]:n.LEQUAL,[A0]:n.EQUAL,[P0]:n.GEQUAL,[C0]:n.GREATER,[R0]:n.NOTEQUAL};function Lt(w,S){if(S.type===kn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===On||S.magFilter===Ea||S.magFilter===er||S.magFilter===qi||S.minFilter===On||S.minFilter===Ea||S.minFilter===er||S.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ut[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ut[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ut[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,K[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,tt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==er&&S.minFilter!==qi||S.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Kt(w,S){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const J=S.source;let st=h.get(J);st===void 0&&(st={},h.set(J,st));const nt=F(S);if(nt!==w.__cacheKey){st[nt]===void 0&&(st[nt]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,G=!0),st[nt].usedTimes++;const Pt=st[w.__cacheKey];Pt!==void 0&&(st[w.__cacheKey].usedTimes--,Pt.usedTimes===0&&E(S)),w.__cacheKey=nt,w.__webglTexture=st[nt].texture}return G}function j(w,S,G){let J=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=n.TEXTURE_3D);const st=Kt(w,S),nt=S.source;e.bindTexture(J,w.__webglTexture,n.TEXTURE0+G);const Pt=i.get(nt);if(nt.version!==Pt.__version||st===!0){e.activeTexture(n.TEXTURE0+G);const _t=de.getPrimaries(de.workingColorSpace),gt=S.colorSpace===bi?null:de.getPrimaries(S.colorSpace),Xt=S.colorSpace===bi||_t===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let lt=x(S.image,!1,s.maxTextureSize);lt=X(S,lt);const yt=o.convert(S.format,S.colorSpace),zt=o.convert(S.type);let kt=y(S.internalFormat,yt,zt,S.colorSpace,S.isVideoTexture);Lt(J,S);let Ct;const Yt=S.mipmaps,qt=S.isVideoTexture!==!0,se=Pt.__version===void 0||st===!0,H=nt.dataReady,wt=C(S,lt);if(S.isDepthTexture)kt=v(S.format===Ks,S.type),se&&(qt?e.texStorage2D(n.TEXTURE_2D,1,kt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,kt,lt.width,lt.height,0,yt,zt,null));else if(S.isDataTexture)if(Yt.length>0){qt&&se&&e.texStorage2D(n.TEXTURE_2D,wt,kt,Yt[0].width,Yt[0].height);for(let et=0,at=Yt.length;et<at;et++)Ct=Yt[et],qt?H&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Ct.width,Ct.height,yt,zt,Ct.data):e.texImage2D(n.TEXTURE_2D,et,kt,Ct.width,Ct.height,0,yt,zt,Ct.data);S.generateMipmaps=!1}else qt?(se&&e.texStorage2D(n.TEXTURE_2D,wt,kt,lt.width,lt.height),H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,yt,zt,lt.data)):e.texImage2D(n.TEXTURE_2D,0,kt,lt.width,lt.height,0,yt,zt,lt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,kt,Yt[0].width,Yt[0].height,lt.depth);for(let et=0,at=Yt.length;et<at;et++)if(Ct=Yt[et],S.format!==In)if(yt!==null)if(qt){if(H)if(S.layerUpdates.size>0){const Tt=Mu(Ct.width,Ct.height,S.format,S.type);for(const At of S.layerUpdates){const jt=Ct.data.subarray(At*Tt/Ct.data.BYTES_PER_ELEMENT,(At+1)*Tt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,At,Ct.width,Ct.height,1,yt,jt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Ct.width,Ct.height,lt.depth,yt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,kt,Ct.width,Ct.height,lt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Ct.width,Ct.height,lt.depth,yt,zt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,kt,Ct.width,Ct.height,lt.depth,0,yt,zt,Ct.data)}else{qt&&se&&e.texStorage2D(n.TEXTURE_2D,wt,kt,Yt[0].width,Yt[0].height);for(let et=0,at=Yt.length;et<at;et++)Ct=Yt[et],S.format!==In?yt!==null?qt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,Ct.width,Ct.height,yt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,et,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?H&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Ct.width,Ct.height,yt,zt,Ct.data):e.texImage2D(n.TEXTURE_2D,et,kt,Ct.width,Ct.height,0,yt,zt,Ct.data)}else if(S.isDataArrayTexture)if(qt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,kt,lt.width,lt.height,lt.depth),H)if(S.layerUpdates.size>0){const et=Mu(lt.width,lt.height,S.format,S.type);for(const at of S.layerUpdates){const Tt=lt.data.subarray(at*et/lt.data.BYTES_PER_ELEMENT,(at+1)*et/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,lt.width,lt.height,1,yt,zt,Tt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,yt,zt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,lt.width,lt.height,lt.depth,0,yt,zt,lt.data);else if(S.isData3DTexture)qt?(se&&e.texStorage3D(n.TEXTURE_3D,wt,kt,lt.width,lt.height,lt.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,yt,zt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,kt,lt.width,lt.height,lt.depth,0,yt,zt,lt.data);else if(S.isFramebufferTexture){if(se)if(qt)e.texStorage2D(n.TEXTURE_2D,wt,kt,lt.width,lt.height);else{let et=lt.width,at=lt.height;for(let Tt=0;Tt<wt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,kt,et,at,0,yt,zt,null),et>>=1,at>>=1}}else if(Yt.length>0){if(qt&&se){const et=Q(Yt[0]);e.texStorage2D(n.TEXTURE_2D,wt,kt,et.width,et.height)}for(let et=0,at=Yt.length;et<at;et++)Ct=Yt[et],qt?H&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,yt,zt,Ct):e.texImage2D(n.TEXTURE_2D,et,kt,yt,zt,Ct);S.generateMipmaps=!1}else if(qt){if(se){const et=Q(lt);e.texStorage2D(n.TEXTURE_2D,wt,kt,et.width,et.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,zt,lt)}else e.texImage2D(n.TEXTURE_2D,0,kt,yt,zt,lt);m(S)&&p(J),Pt.__version=nt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ot(w,S,G){if(S.image.length!==6)return;const J=Kt(w,S),st=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+G);const nt=i.get(st);if(st.version!==nt.__version||J===!0){e.activeTexture(n.TEXTURE0+G);const Pt=de.getPrimaries(de.workingColorSpace),_t=S.colorSpace===bi?null:de.getPrimaries(S.colorSpace),gt=S.colorSpace===bi||Pt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Xt=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let at=0;at<6;at++)!Xt&&!lt?yt[at]=x(S.image[at],!0,s.maxCubemapSize):yt[at]=lt?S.image[at].image:S.image[at],yt[at]=X(S,yt[at]);const zt=yt[0],kt=o.convert(S.format,S.colorSpace),Ct=o.convert(S.type),Yt=y(S.internalFormat,kt,Ct,S.colorSpace),qt=S.isVideoTexture!==!0,se=nt.__version===void 0||J===!0,H=st.dataReady;let wt=C(S,zt);Lt(n.TEXTURE_CUBE_MAP,S);let et;if(Xt){qt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,zt.width,zt.height);for(let at=0;at<6;at++){et=yt[at].mipmaps;for(let Tt=0;Tt<et.length;Tt++){const At=et[Tt];S.format!==In?kt!==null?qt?H&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt,0,0,At.width,At.height,kt,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt,Yt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt,0,0,At.width,At.height,kt,Ct,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt,Yt,At.width,At.height,0,kt,Ct,At.data)}}}else{if(et=S.mipmaps,qt&&se){et.length>0&&wt++;const at=Q(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,at.width,at.height)}for(let at=0;at<6;at++)if(lt){qt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,yt[at].width,yt[at].height,kt,Ct,yt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,yt[at].width,yt[at].height,0,kt,Ct,yt[at].data);for(let Tt=0;Tt<et.length;Tt++){const jt=et[Tt].image[at].image;qt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt+1,0,0,jt.width,jt.height,kt,Ct,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt+1,Yt,jt.width,jt.height,0,kt,Ct,jt.data)}}else{qt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,kt,Ct,yt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,kt,Ct,yt[at]);for(let Tt=0;Tt<et.length;Tt++){const At=et[Tt];qt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt+1,0,0,kt,Ct,At.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Tt+1,Yt,kt,Ct,At.image[at])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),nt.__version=st.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function vt(w,S,G,J,st,nt){const Pt=o.convert(G.format,G.colorSpace),_t=o.convert(G.type),gt=y(G.internalFormat,Pt,_t,G.colorSpace),Xt=i.get(S),lt=i.get(G);if(lt.__renderTarget=S,!Xt.__hasExternalTextures){const yt=Math.max(1,S.width>>nt),zt=Math.max(1,S.height>>nt);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,nt,gt,yt,zt,S.depth,0,Pt,_t,null):e.texImage2D(st,nt,gt,yt,zt,0,Pt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Bt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,st,lt.__webglTexture,0,Dt(S)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,st,lt.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(w,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const J=S.depthTexture,st=J&&J.isDepthTexture?J.type:null,nt=v(S.stencilBuffer,st),Pt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=Dt(S);Bt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,nt,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,nt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,nt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,w)}else{const J=S.textures;for(let st=0;st<J.length;st++){const nt=J[st],Pt=o.convert(nt.format,nt.colorSpace),_t=o.convert(nt.type),gt=y(nt.internalFormat,Pt,_t,nt.colorSpace),Xt=Dt(S);G&&Bt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,gt,S.width,S.height):Bt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt,gt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,gt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const st=J.__webglTexture,nt=Dt(S);if(S.depthTexture.format===Bs)Bt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0);else if(S.depthTexture.format===Ks)Bt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Gt(w){const S=i.get(w),G=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",st)};J.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=J}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");St(S.__webglFramebuffer,w)}else if(G){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=n.createRenderbuffer(),xt(S.__webglDepthbuffer[J],w,!1);else{const st=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),xt(S.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(w,S,G){const J=i.get(w);S!==void 0&&vt(J.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Gt(w)}function ae(w){const S=w.texture,G=i.get(w),J=i.get(S);w.addEventListener("dispose",T);const st=w.textures,nt=w.isWebGLCubeRenderTarget===!0,Pt=st.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=S.version,r.memory.textures++),nt){G.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[_t]=[];for(let gt=0;gt<S.mipmaps.length;gt++)G.__webglFramebuffer[_t][gt]=n.createFramebuffer()}else G.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let _t=0;_t<S.mipmaps.length;_t++)G.__webglFramebuffer[_t]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let _t=0,gt=st.length;_t<gt;_t++){const Xt=i.get(st[_t]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=n.createTexture(),r.memory.textures++)}if(w.samples>0&&Bt(w)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _t=0;_t<st.length;_t++){const gt=st[_t];G.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[_t]);const Xt=o.convert(gt.format,gt.colorSpace),lt=o.convert(gt.type),yt=y(gt.internalFormat,Xt,lt,gt.colorSpace,w.isXRRenderTarget===!0),zt=Dt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,yt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,G.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),xt(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,S);for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)vt(G.__webglFramebuffer[_t][gt],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,gt);else vt(G.__webglFramebuffer[_t],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let _t=0,gt=st.length;_t<gt;_t++){const Xt=st[_t],lt=i.get(Xt);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),Lt(n.TEXTURE_2D,Xt),vt(G.__webglFramebuffer,w,Xt,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),m(Xt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_t=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,J.__webglTexture),Lt(_t,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)vt(G.__webglFramebuffer[gt],w,S,n.COLOR_ATTACHMENT0,_t,gt);else vt(G.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,_t,0);m(S)&&p(_t),e.unbindTexture()}w.depthBuffer&&Gt(w)}function Jt(w){const S=w.textures;for(let G=0,J=S.length;G<J;G++){const st=S[G];if(m(st)){const nt=_(w),Pt=i.get(st).__webglTexture;e.bindTexture(nt,Pt),p(nt),e.unbindTexture()}}}const he=[],$=[];function $t(w){if(w.samples>0){if(Bt(w)===!1){const S=w.textures,G=w.width,J=w.height;let st=n.COLOR_BUFFER_BIT;const nt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(w),_t=S.length>1;if(_t)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[gt]);const Xt=i.get(S[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xt,0)}n.blitFramebuffer(0,0,G,J,0,0,G,J,st,n.NEAREST),l===!0&&(he.length=0,$.length=0,he.push(n.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(he.push(nt),$.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[gt]);const Xt=i.get(S[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,Xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Dt(w){return Math.min(s.maxSamples,w.samples)}function Bt(w){const S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(w){const S=r.render.frame;f.get(w)!==S&&(f.set(w,S),w.update())}function X(w,S){const G=w.colorSpace,J=w.format,st=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==io&&G!==bi&&(de.getTransfer(G)===ye?(J!==In||st!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Q(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=I,this.rebindTextures=Wt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Bt}function N_(n,t){function e(i,s=bi){let o;const r=de.getTransfer(s);if(i===ci)return n.UNSIGNED_BYTE;if(i===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ed)return n.BYTE;if(i===nd)return n.SHORT;if(i===Bo)return n.UNSIGNED_SHORT;if(i===Dc)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===qo)return n.HALF_FLOAT;if(i===sd)return n.ALPHA;if(i===od)return n.RGB;if(i===In)return n.RGBA;if(i===rd)return n.LUMINANCE;if(i===ad)return n.LUMINANCE_ALPHA;if(i===Bs)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===Nc)return n.RED;if(i===zc)return n.RED_INTEGER;if(i===ld)return n.RG;if(i===Fc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===$r||i===Vr||i===Gr||i===Wr)if(r===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===$r)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===$r)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Bl||i===Hl||i===$l)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===kl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Gl||i===Wl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Vl||i===Gl)return r===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Wl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xl||i===ql||i===Yl||i===jl||i===Zl||i===Kl||i===Jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===oc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Xl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xr||i===rc||i===ac)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Xr)return r===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cd||i===lc||i===cc||i===fc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Xr)return o.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class z_ extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fn extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F_={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ze,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ge({vertexShader:O_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H_ extends fs{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,g=null;const x=new B_,m=e.getContextAttributes();let p=null,_=null;const y=[],v=[],C=new Mt;let A=null;const T=new mn;T.viewport=new De;const R=new mn;R.viewport=new De;const E=[T,R],M=new z_;let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=y[j];return ot===void 0&&(ot=new Ja,y[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=y[j];return ot===void 0&&(ot=new Ja,y[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=y[j];return ot===void 0&&(ot=new Ja,y[j]=ot),ot.getHandSpace()};function V(j){const ot=v.indexOf(j.inputSource);if(ot===-1)return;const vt=y[ot];vt!==void 0&&(vt.update(j.inputSource,j.frame,c||r),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Y);for(let j=0;j<y.length;j++){const ot=v[j];ot!==null&&(v[j]=null,y[j].disconnect(ot))}L=null,W=null,x.reset(),t.setRenderTarget(p),d=null,h=null,u=null,s=null,_=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new es(d.framebufferWidth,d.framebufferHeight,{format:In,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,vt=null,xt=null;m.depth&&(xt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Ks:Bs,vt=m.stencil?Zs:ts);const St={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:o};u=new XRWebGLBinding(s,e),h=u.createProjectionLayer(St),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new es(h.textureWidth,h.textureHeight,{format:In,type:ci,depthTexture:new bd(h.textureWidth,h.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(j){for(let ot=0;ot<j.removed.length;ot++){const vt=j.removed[ot],xt=v.indexOf(vt);xt>=0&&(v[xt]=null,y[xt].disconnect(vt))}for(let ot=0;ot<j.added.length;ot++){const vt=j.added[ot];let xt=v.indexOf(vt);if(xt===-1){for(let Gt=0;Gt<y.length;Gt++)if(Gt>=v.length){v.push(vt),xt=Gt;break}else if(v[Gt]===null){v[Gt]=vt,xt=Gt;break}if(xt===-1)break}const St=y[xt];St&&St.connect(vt)}}const O=new D,k=new D;function I(j,ot,vt){O.setFromMatrixPosition(ot.matrixWorld),k.setFromMatrixPosition(vt.matrixWorld);const xt=O.distanceTo(k),St=ot.projectionMatrix.elements,Gt=vt.projectionMatrix.elements,Wt=St[14]/(St[10]-1),ae=St[14]/(St[10]+1),Jt=(St[9]+1)/St[5],he=(St[9]-1)/St[5],$=(St[8]-1)/St[0],$t=(Gt[8]+1)/Gt[0],Dt=Wt*$,Bt=Wt*$t,B=xt/(-$+$t),X=B*-$;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(X),j.translateZ(B),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),St[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Q=Wt+B,w=ae+B,S=Dt-X,G=Bt+(xt-X),J=Jt*ae/w*Q,st=he*ae/w*Q;j.projectionMatrix.makePerspective(S,G,J,st,Q,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ut(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,vt=j.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),M.near=R.near=T.near=ot,M.far=R.far=T.far=vt,(L!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,W=M.far),T.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const xt=j.parent,St=M.cameras;ut(M,xt);for(let Gt=0;Gt<St.length;Gt++)ut(St[Gt],xt);St.length===2?I(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),K(j,M,xt)};function K(j,ot,vt){vt===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=uc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let tt=null;function Lt(j,ot){if(f=ot.getViewerPose(c||r),g=ot,f!==null){const vt=f.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let xt=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,xt=!0);for(let Gt=0;Gt<vt.length;Gt++){const Wt=vt[Gt];let ae=null;if(d!==null)ae=d.getViewport(Wt);else{const he=u.getViewSubImage(h,Wt);ae=he.viewport,Gt===0&&(t.setRenderTargetTextures(_,he.colorTexture,h.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(_))}let Jt=E[Gt];Jt===void 0&&(Jt=new mn,Jt.layers.enable(Gt),Jt.viewport=new De,E[Gt]=Jt),Jt.matrix.fromArray(Wt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Wt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ae.x,ae.y,ae.width,ae.height),Gt===0&&(M.matrix.copy(Jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xt===!0&&M.cameras.push(Jt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const Gt=u.getDepthInformation(vt[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,s.renderState)}}for(let vt=0;vt<y.length;vt++){const xt=v[vt],St=y[vt];xt!==null&&St!==void 0&&St.update(xt,ot,c||r)}tt&&tt(j,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Kt=new yd;Kt.setAnimationLoop(Lt),this.setAnimationLoop=function(j){tt=j},this.dispose=function(){}}}const Hi=new _n,$_=new ee;function V_(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,xd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),f(m,p)):p.isMeshStandardMaterial?(o(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,Hi.copy(v),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(Hi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function G_(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const v=y.program;i.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(g(_),v=f(_),s[_.id]=v,_.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(_,C);const A=t.render.frame;o[_.id]!==A&&(h(_),o[_.id]=A)}function f(_){const y=u();_.__bindingPointIndex=y;const v=n.createBuffer(),C=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=s[_.id],v=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,T=v.length;A<T;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,M=R.length;E<M;E++){const L=R[E];if(d(L,A,E,C)===!0){const W=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let Y=0;Y<V.length;Y++){const O=V[Y],k=x(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,W+F,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,F),F+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,y,v,C){const A=_.value,T=y+"_"+v;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const R=C[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(_){const y=_.uniforms;let v=0;const C=16;for(let T=0,R=y.length;T<R;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,L=E.length;M<L;M++){const W=E[M],V=Array.isArray(W.value)?W.value:[W.value];for(let F=0,Y=V.length;F<Y;F++){const O=V[F],k=x(O),I=v%C,ut=I%k.boundary,K=I+ut;v+=ut,K!==0&&C-K<k.storage&&(v+=C-K),W.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=k.storage}}}const A=v%C;return A>0&&(v+=C-A),_.__size=v,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function p(){for(const _ in s)n.deleteBuffer(s[_]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class W_{constructor(t={}){const{canvas:e=U0(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=Ai,this.toneMappingExposure=1;const v=this;let C=!1,A=0,T=0,R=null,E=-1,M=null;const L=new De,W=new De;let V=null;const F=new Ft(0);let Y=0,O=e.width,k=e.height,I=1,ut=null,K=null;const tt=new De(0,0,O,k),Lt=new De(0,0,O,k);let Kt=!1;const j=new $c;let ot=!1,vt=!1;const xt=new ee,St=new ee,Gt=new D,Wt=new De,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function he(){return R===null?I:1}let $=i;function $t(b,P){return e.getContext(b,P)}try{const b={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pc}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",At,!1),$===null){const P="webgl2";if($=$t(P,b),$===null)throw $t(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Dt,Bt,B,X,Q,w,S,G,J,st,nt,Pt,_t,gt,Xt,lt,yt,zt,kt,Ct,Yt,qt,se,H;function wt(){Dt=new Zx($),Dt.init(),qt=new N_($,Dt),Bt=new Gx($,Dt,t,qt),B=new D_($,Dt),Bt.reverseDepthBuffer&&h&&B.buffers.depth.setReversed(!0),X=new Qx($),Q=new x_,w=new U_($,Dt,B,Q,Bt,qt,X),S=new Xx(v),G=new jx(v),J=new rm($),se=new $x($,J),st=new Kx($,J,X,se),nt=new ev($,st,J,X),kt=new tv($,Bt,w),lt=new Wx(Q),Pt=new g_(v,S,G,Dt,Bt,se,lt),_t=new V_(v,Q),gt=new __,Xt=new w_(Dt),zt=new Hx(v,S,G,B,nt,d,l),yt=new P_(v,nt,Bt),H=new G_($,X,Bt,B),Ct=new Vx($,Dt,X),Yt=new Jx($,Dt,X),X.programs=Pt.programs,v.capabilities=Bt,v.extensions=Dt,v.properties=Q,v.renderLists=gt,v.shadowMap=yt,v.state=B,v.info=X}wt();const et=new H_(v,$);this.xr=et,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const b=Dt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Dt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(O,k,!1))},this.getSize=function(b){return b.set(O,k)},this.setSize=function(b,P,z=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,k=P,e.width=Math.floor(b*I),e.height=Math.floor(P*I),z===!0&&(e.style.width=b+"px",e.style.height=P+"px"),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(O*I,k*I).floor()},this.setDrawingBufferSize=function(b,P,z){O=b,k=P,I=z,e.width=Math.floor(b*z),e.height=Math.floor(P*z),this.setViewport(0,0,b,P)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,P,z,q){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,P,z,q),B.viewport(L.copy(tt).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(Lt)},this.setScissor=function(b,P,z,q){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,P,z,q),B.scissor(W.copy(Lt).multiplyScalar(I).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(b){B.setScissorTest(Kt=b)},this.setOpaqueSort=function(b){ut=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(b=!0,P=!0,z=!0){let q=0;if(b){let N=!1;if(R!==null){const ht=R.texture.format;N=ht===Oc||ht===Fc||ht===zc}if(N){const ht=R.texture.type,Et=ht===ci||ht===ts||ht===Bo||ht===Zs||ht===Ic||ht===Uc,Ut=zt.getClearColor(),It=zt.getClearAlpha(),Zt=Ut.r,Qt=Ut.g,Ot=Ut.b;Et?(g[0]=Zt,g[1]=Qt,g[2]=Ot,g[3]=It,$.clearBufferuiv($.COLOR,0,g)):(x[0]=Zt,x[1]=Qt,x[2]=Ot,x[3]=It,$.clearBufferiv($.COLOR,0,x))}else q|=$.COLOR_BUFFER_BIT}P&&(q|=$.DEPTH_BUFFER_BIT),z&&(q|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),gt.dispose(),Xt.dispose(),Q.dispose(),S.dispose(),G.dispose(),nt.dispose(),se.dispose(),H.dispose(),Pt.dispose(),et.dispose(),et.removeEventListener("sessionstart",Qo),et.removeEventListener("sessionend",uo),qn.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=X.autoReset,P=yt.enabled,z=yt.autoUpdate,q=yt.needsUpdate,N=yt.type;wt(),X.autoReset=b,yt.enabled=P,yt.autoUpdate=z,yt.needsUpdate=q,yt.type=N}function At(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function jt(b){const P=b.target;P.removeEventListener("dispose",jt),oe(P)}function oe(b){Ne(b),Q.remove(b)}function Ne(b){const P=Q.get(b).programs;P!==void 0&&(P.forEach(function(z){Pt.releaseProgram(z)}),b.isShaderMaterial&&Pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,z,q,N,ht){P===null&&(P=ae);const Et=N.isMesh&&N.matrixWorld.determinant()<0,Ut=ft(b,P,z,q,N);B.setMaterial(q,Et);let It=z.index,Zt=1;if(q.wireframe===!0){if(It=st.getWireframeAttribute(z),It===void 0)return;Zt=2}const Qt=z.drawRange,Ot=z.attributes.position;let pe=Qt.start*Zt,Te=(Qt.start+Qt.count)*Zt;ht!==null&&(pe=Math.max(pe,ht.start*Zt),Te=Math.min(Te,(ht.start+ht.count)*Zt)),It!==null?(pe=Math.max(pe,0),Te=Math.min(Te,It.count)):Ot!=null&&(pe=Math.max(pe,0),Te=Math.min(Te,Ot.count));const Ae=Te-pe;if(Ae<0||Ae===1/0)return;se.setup(N,q,Ut,z,It);let nn,me=Ct;if(It!==null&&(nn=J.get(It),me=Yt,me.setIndex(nn)),N.isMesh)q.wireframe===!0?(B.setLineWidth(q.wireframeLinewidth*he()),me.setMode($.LINES)):me.setMode($.TRIANGLES);else if(N.isLine){let Ht=q.linewidth;Ht===void 0&&(Ht=1),B.setLineWidth(Ht*he()),N.isLineSegments?me.setMode($.LINES):N.isLineLoop?me.setMode($.LINE_LOOP):me.setMode($.LINE_STRIP)}else N.isPoints?me.setMode($.POINTS):N.isSprite&&me.setMode($.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)me.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))me.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ht=N._multiDrawStarts,Yn=N._multiDrawCounts,ge=N._multiDrawCount,Tn=It?J.get(It).bytesPerElement:1,ms=Q.get(q).currentProgram.getUniforms();for(let hn=0;hn<ge;hn++)ms.setValue($,"_gl_DrawID",hn),me.render(Ht[hn]/Tn,Yn[hn])}else if(N.isInstancedMesh)me.renderInstances(pe,Ae,N.count);else if(z.isInstancedBufferGeometry){const Ht=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Yn=Math.min(z.instanceCount,Ht);me.renderInstances(pe,Ae,Yn)}else me.render(pe,Ae)};function ce(b,P,z){b.transparent===!0&&b.side===Pn&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,it(b,P,z),b.side=Pi,b.needsUpdate=!0,it(b,P,z),b.side=Pn):it(b,P,z)}this.compile=function(b,P,z=null){z===null&&(z=b),p=Xt.get(z),p.init(P),y.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==z&&b.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const q=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ht=N.material;if(ht)if(Array.isArray(ht))for(let Et=0;Et<ht.length;Et++){const Ut=ht[Et];ce(Ut,z,N),q.add(Ut)}else ce(ht,z,N),q.add(ht)}),y.pop(),p=null,q},this.compileAsync=function(b,P,z=null){const q=this.compile(b,P,z);return new Promise(N=>{function ht(){if(q.forEach(function(Et){Q.get(Et).currentProgram.isReady()&&q.delete(Et)}),q.size===0){N(b);return}setTimeout(ht,10)}Dt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let $e=null;function Ke(b){$e&&$e(b)}function Qo(){qn.stop()}function uo(){qn.start()}const qn=new yd;qn.setAnimationLoop(Ke),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(b){$e=b,et.setAnimationLoop(b),b===null?qn.stop():qn.start()},et.addEventListener("sessionstart",Qo),et.addEventListener("sessionend",uo),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(P),P=et.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,P,R),p=Xt.get(b,y.length),p.init(P),y.push(p),St.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),j.setFromProjectionMatrix(St),vt=this.localClippingEnabled,ot=lt.init(this.clippingPlanes,vt),m=gt.get(b,_.length),m.init(),_.push(m),et.enabled===!0&&et.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&ho(ht,P,-1/0,v.sortObjects)}ho(b,P,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ut,K),Jt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Jt&&zt.addToRenderList(m,b),this.info.render.frame++,ot===!0&&lt.beginShadows();const z=p.state.shadowsArray;yt.render(z,b,P),ot===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,N=m.transmissive;if(p.setupLights(),P.isArrayCamera){const ht=P.cameras;if(N.length>0)for(let Et=0,Ut=ht.length;Et<Ut;Et++){const It=ht[Et];po(q,N,b,It)}Jt&&zt.render(b);for(let Et=0,Ut=ht.length;Et<Ut;Et++){const It=ht[Et];tr(m,b,It,It.viewport)}}else N.length>0&&po(q,N,b,P),Jt&&zt.render(b),tr(m,b,P);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,P),se.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ot===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ho(b,P,z,q){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){q&&Wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(St);const Et=nt.update(b),Ut=b.material;Ut.visible&&m.push(b,Et,Ut,z,Wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const Et=nt.update(b),Ut=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Wt.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Wt.copy(Et.boundingSphere.center)),Wt.applyMatrix4(b.matrixWorld).applyMatrix4(St)),Array.isArray(Ut)){const It=Et.groups;for(let Zt=0,Qt=It.length;Zt<Qt;Zt++){const Ot=It[Zt],pe=Ut[Ot.materialIndex];pe&&pe.visible&&m.push(b,Et,pe,z,Wt.z,Ot)}}else Ut.visible&&m.push(b,Et,Ut,z,Wt.z,null)}}const ht=b.children;for(let Et=0,Ut=ht.length;Et<Ut;Et++)ho(ht[Et],P,z,q)}function tr(b,P,z,q){const N=b.opaque,ht=b.transmissive,Et=b.transparent;p.setupLightsView(z),ot===!0&&lt.setGlobalState(v.clippingPlanes,z),q&&B.viewport(L.copy(q)),N.length>0&&Ni(N,P,z),ht.length>0&&Ni(ht,P,z),Et.length>0&&Ni(Et,P,z),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function po(b,P,z,q){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new es(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?qo:ci,minFilter:qi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const ht=p.state.transmissionRenderTarget[q.id],Et=q.viewport||L;ht.setSize(Et.z,Et.w);const Ut=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(F),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&zt.render(z);const It=v.toneMapping;v.toneMapping=Ai;const Zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ot===!0&&lt.setGlobalState(v.clippingPlanes,q),Ni(b,z,q),w.updateMultisampleRenderTarget(ht),w.updateRenderTargetMipmap(ht),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ot=0,pe=P.length;Ot<pe;Ot++){const Te=P[Ot],Ae=Te.object,nn=Te.geometry,me=Te.material,Ht=Te.group;if(me.side===Pn&&Ae.layers.test(q.layers)){const Yn=me.side;me.side=en,me.needsUpdate=!0,U(Ae,z,q,nn,me,Ht),me.side=Yn,me.needsUpdate=!0,Qt=!0}}Qt===!0&&(w.updateMultisampleRenderTarget(ht),w.updateRenderTargetMipmap(ht))}v.setRenderTarget(Ut),v.setClearColor(F,Y),Zt!==void 0&&(q.viewport=Zt),v.toneMapping=It}function Ni(b,P,z){const q=P.isScene===!0?P.overrideMaterial:null;for(let N=0,ht=b.length;N<ht;N++){const Et=b[N],Ut=Et.object,It=Et.geometry,Zt=q===null?Et.material:q,Qt=Et.group;Ut.layers.test(z.layers)&&U(Ut,P,z,It,Zt,Qt)}}function U(b,P,z,q,N,ht){b.onBeforeRender(v,P,z,q,N,ht),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,P,z,q,b,ht),N.transparent===!0&&N.side===Pn&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,v.renderBufferDirect(z,P,q,N,b,ht),N.side=Pi,N.needsUpdate=!0,v.renderBufferDirect(z,P,q,N,b,ht),N.side=Pn):v.renderBufferDirect(z,P,q,N,b,ht),b.onAfterRender(v,P,z,q,N,ht)}function it(b,P,z){P.isScene!==!0&&(P=ae);const q=Q.get(b),N=p.state.lights,ht=p.state.shadowsArray,Et=N.state.version,Ut=Pt.getParameters(b,N.state,ht,P,z),It=Pt.getProgramCacheKey(Ut);let Zt=q.programs;q.environment=b.isMeshStandardMaterial?P.environment:null,q.fog=P.fog,q.envMap=(b.isMeshStandardMaterial?G:S).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",jt),Zt=new Map,q.programs=Zt);let Qt=Zt.get(It);if(Qt!==void 0){if(q.currentProgram===Qt&&q.lightsStateVersion===Et)return rt(b,Ut),Qt}else Ut.uniforms=Pt.getUniforms(b),b.onBeforeCompile(Ut,v),Qt=Pt.acquireProgram(Ut,It),Zt.set(It,Qt),q.uniforms=Ut.uniforms;const Ot=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=lt.uniform),rt(b,Ut),q.needsLights=Rt(b),q.lightsStateVersion=Et,q.needsLights&&(Ot.ambientLightColor.value=N.state.ambient,Ot.lightProbe.value=N.state.probe,Ot.directionalLights.value=N.state.directional,Ot.directionalLightShadows.value=N.state.directionalShadow,Ot.spotLights.value=N.state.spot,Ot.spotLightShadows.value=N.state.spotShadow,Ot.rectAreaLights.value=N.state.rectArea,Ot.ltc_1.value=N.state.rectAreaLTC1,Ot.ltc_2.value=N.state.rectAreaLTC2,Ot.pointLights.value=N.state.point,Ot.pointLightShadows.value=N.state.pointShadow,Ot.hemisphereLights.value=N.state.hemi,Ot.directionalShadowMap.value=N.state.directionalShadowMap,Ot.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ot.spotShadowMap.value=N.state.spotShadowMap,Ot.spotLightMatrix.value=N.state.spotLightMatrix,Ot.spotLightMap.value=N.state.spotLightMap,Ot.pointShadowMap.value=N.state.pointShadowMap,Ot.pointShadowMatrix.value=N.state.pointShadowMatrix),q.currentProgram=Qt,q.uniformsList=null,Qt}function mt(b){if(b.uniformsList===null){const P=b.currentProgram.getUniforms();b.uniformsList=Yr.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function rt(b,P){const z=Q.get(b);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function ft(b,P,z,q,N){P.isScene!==!0&&(P=ae),w.resetTextureUnits();const ht=P.fog,Et=q.isMeshStandardMaterial?P.environment:null,Ut=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:io,It=(q.isMeshStandardMaterial?G:S).get(q.envMap||Et),Zt=q.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Qt=!!z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!z.morphAttributes.position,pe=!!z.morphAttributes.normal,Te=!!z.morphAttributes.color;let Ae=Ai;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const nn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=nn!==void 0?nn.length:0,Ht=Q.get(q),Yn=p.state.lights;if(ot===!0&&(vt===!0||b!==M)){const yn=b===M&&q.id===E;lt.setState(q,b,yn)}let ge=!1;q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Yn.state.version||Ht.outputColorSpace!==Ut||N.isBatchedMesh&&Ht.batching===!1||!N.isBatchedMesh&&Ht.batching===!0||N.isBatchedMesh&&Ht.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ht.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ht.instancing===!1||!N.isInstancedMesh&&Ht.instancing===!0||N.isSkinnedMesh&&Ht.skinning===!1||!N.isSkinnedMesh&&Ht.skinning===!0||N.isInstancedMesh&&Ht.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ht.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ht.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ht.instancingMorph===!1&&N.morphTexture!==null||Ht.envMap!==It||q.fog===!0&&Ht.fog!==ht||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==lt.numPlanes||Ht.numIntersection!==lt.numIntersection)||Ht.vertexAlphas!==Zt||Ht.vertexTangents!==Qt||Ht.morphTargets!==Ot||Ht.morphNormals!==pe||Ht.morphColors!==Te||Ht.toneMapping!==Ae||Ht.morphTargetsCount!==me)&&(ge=!0):(ge=!0,Ht.__version=q.version);let Tn=Ht.currentProgram;ge===!0&&(Tn=it(q,P,N));let ms=!1,hn=!1,mo=!1;const Ce=Tn.getUniforms(),Nn=Ht.uniforms;if(B.useProgram(Tn.program)&&(ms=!0,hn=!0,mo=!0),q.id!==E&&(E=q.id,hn=!0),ms||M!==b){B.buffers.depth.getReversed()?(xt.copy(b.projectionMatrix),z0(xt),F0(xt),Ce.setValue($,"projectionMatrix",xt)):Ce.setValue($,"projectionMatrix",b.projectionMatrix),Ce.setValue($,"viewMatrix",b.matrixWorldInverse);const hi=Ce.map.cameraPosition;hi!==void 0&&hi.setValue($,Gt.setFromMatrixPosition(b.matrixWorld)),Bt.logarithmicDepthBuffer&&Ce.setValue($,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ce.setValue($,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,hn=!0,mo=!0)}if(N.isSkinnedMesh){Ce.setOptional($,N,"bindMatrix"),Ce.setOptional($,N,"bindMatrixInverse");const yn=N.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ce.setValue($,"boneTexture",yn.boneTexture,w))}N.isBatchedMesh&&(Ce.setOptional($,N,"batchingTexture"),Ce.setValue($,"batchingTexture",N._matricesTexture,w),Ce.setOptional($,N,"batchingIdTexture"),Ce.setValue($,"batchingIdTexture",N._indirectTexture,w),Ce.setOptional($,N,"batchingColorTexture"),N._colorsTexture!==null&&Ce.setValue($,"batchingColorTexture",N._colorsTexture,w));const go=z.morphAttributes;if((go.position!==void 0||go.normal!==void 0||go.color!==void 0)&&kt.update(N,z,Tn),(hn||Ht.receiveShadow!==N.receiveShadow)&&(Ht.receiveShadow=N.receiveShadow,Ce.setValue($,"receiveShadow",N.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Nn.envMap.value=It,Nn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&P.environment!==null&&(Nn.envMapIntensity.value=P.environmentIntensity),hn&&(Ce.setValue($,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&dt(Nn,mo),ht&&q.fog===!0&&_t.refreshFogUniforms(Nn,ht),_t.refreshMaterialUniforms(Nn,q,I,k,p.state.transmissionRenderTarget[b.id]),Yr.upload($,mt(Ht),Nn,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Yr.upload($,mt(Ht),Nn,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ce.setValue($,"center",N.center),Ce.setValue($,"modelViewMatrix",N.modelViewMatrix),Ce.setValue($,"normalMatrix",N.normalMatrix),Ce.setValue($,"modelMatrix",N.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const yn=q.uniformsGroups;for(let hi=0,di=yn.length;hi<di;hi++){const _f=yn[hi];H.update(_f,Tn),H.bind(_f,Tn)}}return Tn}function dt(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function Rt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,P,z){Q.get(b.texture).__webglTexture=P,Q.get(b.depthTexture).__webglTexture=z;const q=Q.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=z===void 0,q.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,P){const z=Q.get(b);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,z=0){R=b,A=P,T=z;let q=!0,N=null,ht=!1,Et=!1;if(b){const It=Q.get(b);if(It.__useDefaultFramebuffer!==void 0)B.bindFramebuffer($.FRAMEBUFFER,null),q=!1;else if(It.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(It.__hasExternalTextures)w.rebindTextures(b,Q.get(b.texture).__webglTexture,Q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ot=b.depthTexture;if(It.__boundDepthTexture!==Ot){if(Ot!==null&&Q.has(Ot)&&(b.width!==Ot.image.width||b.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Et=!0);const Qt=Q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qt[P])?N=Qt[P][z]:N=Qt[P],ht=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?N=Q.get(b).__webglMultisampledFramebuffer:Array.isArray(Qt)?N=Qt[z]:N=Qt,L.copy(b.viewport),W.copy(b.scissor),V=b.scissorTest}else L.copy(tt).multiplyScalar(I).floor(),W.copy(Lt).multiplyScalar(I).floor(),V=Kt;if(B.bindFramebuffer($.FRAMEBUFFER,N)&&q&&B.drawBuffers(b,N),B.viewport(L),B.scissor(W),B.setScissorTest(V),ht){const It=Q.get(b.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+P,It.__webglTexture,z)}else if(Et){const It=Q.get(b.texture),Zt=P||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,It.__webglTexture,z||0,Zt)}E=-1},this.readRenderTargetPixels=function(b,P,z,q,N,ht,Et){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){B.bindFramebuffer($.FRAMEBUFFER,Ut);try{const It=b.texture,Zt=It.format,Qt=It.type;if(!Bt.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-q&&z>=0&&z<=b.height-N&&$.readPixels(P,z,q,N,qt.convert(Zt),qt.convert(Qt),ht)}finally{const It=R!==null?Q.get(R).__webglFramebuffer:null;B.bindFramebuffer($.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(b,P,z,q,N,ht,Et){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){const It=b.texture,Zt=It.format,Qt=It.type;if(!Bt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=b.width-q&&z>=0&&z<=b.height-N){B.bindFramebuffer($.FRAMEBUFFER,Ut);const Ot=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Ot),$.bufferData($.PIXEL_PACK_BUFFER,ht.byteLength,$.STREAM_READ),$.readPixels(P,z,q,N,qt.convert(Zt),qt.convert(Qt),0);const pe=R!==null?Q.get(R).__webglFramebuffer:null;B.bindFramebuffer($.FRAMEBUFFER,pe);const Te=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await N0($,Te,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Ot),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,ht),$.deleteBuffer(Ot),$.deleteSync(Te),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,P=null,z=0){b.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-z),N=Math.floor(b.image.width*q),ht=Math.floor(b.image.height*q),Et=P!==null?P.x:0,Ut=P!==null?P.y:0;w.setTexture2D(b,0),$.copyTexSubImage2D($.TEXTURE_2D,z,0,0,Et,Ut,N,ht),B.unbindTexture()},this.copyTextureToTexture=function(b,P,z=null,q=null,N=0){b.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],P=arguments[2],N=arguments[3]||0,z=null);let ht,Et,Ut,It,Zt,Qt,Ot,pe,Te;const Ae=b.isCompressedTexture?b.mipmaps[N]:b.image;z!==null?(ht=z.max.x-z.min.x,Et=z.max.y-z.min.y,Ut=z.isBox3?z.max.z-z.min.z:1,It=z.min.x,Zt=z.min.y,Qt=z.isBox3?z.min.z:0):(ht=Ae.width,Et=Ae.height,Ut=Ae.depth||1,It=0,Zt=0,Qt=0),q!==null?(Ot=q.x,pe=q.y,Te=q.z):(Ot=0,pe=0,Te=0);const nn=qt.convert(P.format),me=qt.convert(P.type);let Ht;P.isData3DTexture?(w.setTexture3D(P,0),Ht=$.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(w.setTexture2DArray(P,0),Ht=$.TEXTURE_2D_ARRAY):(w.setTexture2D(P,0),Ht=$.TEXTURE_2D),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,P.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,P.unpackAlignment);const Yn=$.getParameter($.UNPACK_ROW_LENGTH),ge=$.getParameter($.UNPACK_IMAGE_HEIGHT),Tn=$.getParameter($.UNPACK_SKIP_PIXELS),ms=$.getParameter($.UNPACK_SKIP_ROWS),hn=$.getParameter($.UNPACK_SKIP_IMAGES);$.pixelStorei($.UNPACK_ROW_LENGTH,Ae.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ae.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,It),$.pixelStorei($.UNPACK_SKIP_ROWS,Zt),$.pixelStorei($.UNPACK_SKIP_IMAGES,Qt);const mo=b.isDataArrayTexture||b.isData3DTexture,Ce=P.isDataArrayTexture||P.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Nn=Q.get(b),go=Q.get(P),yn=Q.get(Nn.__renderTarget),hi=Q.get(go.__renderTarget);B.bindFramebuffer($.READ_FRAMEBUFFER,yn.__webglFramebuffer),B.bindFramebuffer($.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let di=0;di<Ut;di++)mo&&$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Q.get(b).__webglTexture,N,Qt+di),b.isDepthTexture?(Ce&&$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Q.get(P).__webglTexture,N,Te+di),$.blitFramebuffer(It,Zt,ht,Et,Ot,pe,ht,Et,$.DEPTH_BUFFER_BIT,$.NEAREST)):Ce?$.copyTexSubImage3D(Ht,N,Ot,pe,Te+di,It,Zt,ht,Et):$.copyTexSubImage2D(Ht,N,Ot,pe,Te+di,It,Zt,ht,Et);B.bindFramebuffer($.READ_FRAMEBUFFER,null),B.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ce?b.isDataTexture||b.isData3DTexture?$.texSubImage3D(Ht,N,Ot,pe,Te,ht,Et,Ut,nn,me,Ae.data):P.isCompressedArrayTexture?$.compressedTexSubImage3D(Ht,N,Ot,pe,Te,ht,Et,Ut,nn,Ae.data):$.texSubImage3D(Ht,N,Ot,pe,Te,ht,Et,Ut,nn,me,Ae):b.isDataTexture?$.texSubImage2D($.TEXTURE_2D,N,Ot,pe,ht,Et,nn,me,Ae.data):b.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,N,Ot,pe,Ae.width,Ae.height,nn,Ae.data):$.texSubImage2D($.TEXTURE_2D,N,Ot,pe,ht,Et,nn,me,Ae);$.pixelStorei($.UNPACK_ROW_LENGTH,Yn),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,ge),$.pixelStorei($.UNPACK_SKIP_PIXELS,Tn),$.pixelStorei($.UNPACK_SKIP_ROWS,ms),$.pixelStorei($.UNPACK_SKIP_IMAGES,hn),N===0&&P.generateMipmaps&&$.generateMipmap(Ht),B.unbindTexture()},this.copyTextureToTexture3D=function(b,P,z=null,q=null,N=0){return b.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,q=arguments[1]||null,b=arguments[2],P=arguments[3],N=arguments[4]||0),Po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,P,z,q,N)},this.initRenderTarget=function(b){Q.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),B.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,B.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}class Gc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=i}clone(){return new Gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class X_ extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class q_ extends Ze{constructor(t=null,e=1,i=1,s,o,r,a,l,c=xn,f=xn,u,h){super(null,r,a,l,c,f,s,o,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na extends re{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ps=new ee,bu=new ee,br=[],Su=new us,Y_=new ee,bo=new Se,So=new hs;class Hn extends Se{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Y_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),Su.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Su)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),So.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(So)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),t.ray.intersectsSphere(So)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ps),bu.multiplyMatrices(i,Ps),bo.matrixWorld=bu,bo.raycast(t,br);for(let r=0,a=br.length;r<a;r++){const l=br[r];l.instanceId=o,l.object=this,e.push(l)}br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new q_(new Float32Array(s*this.count),s,this.count,Nc,kn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ad extends Ii{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ia=new D,sa=new D,Eu=new ee,Eo=new Yo,Sr=new hs,Qa=new D,wu=new D;class Cd extends Ue{constructor(t=new Ee,e=new Ad){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)ia.fromBufferAttribute(e,s-1),sa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=o,t.ray.intersectsSphere(Sr)===!1)return;Eu.copy(s).invert(),Eo.copy(t.ray).applyMatrix4(Eu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const d=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=d,m=g-1;x<m;x+=c){const p=f.getX(x),_=f.getX(x+1),y=Er(this,t,Eo,l,p,_);y&&e.push(y)}if(this.isLineLoop){const x=f.getX(g-1),m=f.getX(d),p=Er(this,t,Eo,l,x,m);p&&e.push(p)}}else{const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=d,m=g-1;x<m;x+=c){const p=Er(this,t,Eo,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Er(this,t,Eo,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Er(n,t,e,i,s,o){const r=n.geometry.attributes.position;if(ia.fromBufferAttribute(r,s),sa.fromBufferAttribute(r,o),e.distanceSqToSegment(ia,sa,Qa,wu)>i)return;Qa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Qa);if(!(l<t.near||l>t.far))return{distance:l,point:wu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Tu=new D,Au=new D;class j_ extends Cd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)Tu.fromBufferAttribute(e,s),Au.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Tu.distanceTo(Au);t.setAttribute("lineDistance",new ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Z_ extends Ii{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cu=new ee,dc=new Yo,wr=new hs,Tr=new D;class Wc extends Ue{constructor(t=new Ee,e=new Z_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(s),wr.radius+=o,t.ray.intersectsSphere(wr)===!1)return;Cu.copy(s).invert(),dc.copy(t.ray).applyMatrix4(Cu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=h,x=d;g<x;g++){const m=c.getX(g);Tr.fromBufferAttribute(u,m),Ru(Tr,m,l,s,t,e,this)}}else{const h=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=h,x=d;g<x;g++)Tr.fromBufferAttribute(u,g),Ru(Tr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ru(n,t,e,i,s,o,r){const a=dc.distanceSqToPoint(n);if(a<e){const l=new D;dc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Xc extends Ze{constructor(t,e,i,s,o,r,a,l,c){super(t,e,i,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);const f=i[s],h=i[s+1]-f,d=(r-f)/h;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new Mt:new D);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,s=[],o=[],r=[],a=new D,l=new ee;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new D)}o[0]=new D,r[0]=new D;let c=Number.MAX_VALUE;const f=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=c&&(c=f,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qe(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(qe(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qc extends Gn{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*f-d*u+this.aX,c=h*u+d*f+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class K_ extends qc{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Yc(){let n=0,t=0,e=0,i=0;function s(o,r,a,l){n=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,f,u){let h=(r-o)/c-(a-o)/(c+f)+(a-r)/f,d=(a-r)/f-(l-r)/(f+u)+(l-a)/u;h*=f,d*=f,s(r,a,h,d)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Ar=new D,tl=new Yc,el=new Yc,nl=new Yc;class J_ extends Gn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%o]:(Ar.subVectors(s[0],s[1]).add(s[0]),c=Ar);const u=s[a%o],h=s[(a+1)%o];if(this.closed||a+2<o?f=s[(a+2)%o]:(Ar.subVectors(s[o-1],s[o-2]).add(s[o-1]),f=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),tl.initNonuniformCatmullRom(c.x,u.x,h.x,f.x,g,x,m),el.initNonuniformCatmullRom(c.y,u.y,h.y,f.y,g,x,m),nl.initNonuniformCatmullRom(c.z,u.z,h.z,f.z,g,x,m)}else this.curveType==="catmullrom"&&(tl.initCatmullRom(c.x,u.x,h.x,f.x,this.tension),el.initCatmullRom(c.y,u.y,h.y,f.y,this.tension),nl.initCatmullRom(c.z,u.z,h.z,f.z,this.tension));return i.set(tl.calc(l),el.calc(l),nl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pu(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*n+e}function Q_(n,t){const e=1-n;return e*e*t}function t1(n,t){return 2*(1-n)*n*t}function e1(n,t){return n*n*t}function No(n,t,e,i){return Q_(n,t)+t1(n,e)+e1(n,i)}function n1(n,t){const e=1-n;return e*e*e*t}function i1(n,t){const e=1-n;return 3*e*e*n*t}function s1(n,t){return 3*(1-n)*n*n*t}function o1(n,t){return n*n*n*t}function zo(n,t,e,i,s){return n1(n,t)+i1(n,e)+s1(n,i)+o1(n,s)}class Rd extends Gn{constructor(t=new Mt,e=new Mt,i=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Mt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(zo(t,s.x,o.x,r.x,a.x),zo(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class r1 extends Gn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(zo(t,s.x,o.x,r.x,a.x),zo(t,s.y,o.y,r.y,a.y),zo(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pd extends Gn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a1 extends Gn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ld extends Gn{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(No(t,s.x,o.x,r.x),No(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l1 extends Gn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(No(t,s.x,o.x,r.x),No(t,s.y,o.y,r.y),No(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dd extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],f=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Pu(a,l.x,c.x,f.x,u.x),Pu(a,l.y,c.y,f.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}}var Lu=Object.freeze({__proto__:null,ArcCurve:K_,CatmullRomCurve3:J_,CubicBezierCurve:Rd,CubicBezierCurve3:r1,EllipseCurve:qc,LineCurve:Pd,LineCurve3:a1,QuadraticBezierCurve:Ld,QuadraticBezierCurve3:l1,SplineCurve:Dd});class c1 extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lu[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];i&&i.equals(f)||(e.push(f),i=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Lu[s.type]().fromJSON(s))}return this}}class Du extends c1{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Pd(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Ld(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Rd(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s),new Mt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Dd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,i,s,o,r,a,l),this}absellipse(t,e,i,s,o,r,a,l){const c=new qc(t,e,i,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ro extends Ee{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const f=[],u=[],h=[],d=[];let g=0;const x=[],m=i/2;let p=0;_(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function _(){const v=new D,C=new D;let A=0;const T=(e-t)/i;for(let R=0;R<=o;R++){const E=[],M=R/o,L=M*(e-t)+t;for(let W=0;W<=s;W++){const V=W/s,F=V*l+a,Y=Math.sin(F),O=Math.cos(F);C.x=L*Y,C.y=-M*i+m,C.z=L*O,u.push(C.x,C.y,C.z),v.set(Y,T,O).normalize(),h.push(v.x,v.y,v.z),d.push(V,1-M),E.push(g++)}x.push(E)}for(let R=0;R<s;R++)for(let E=0;E<o;E++){const M=x[E][R],L=x[E+1][R],W=x[E+1][R+1],V=x[E][R+1];(t>0||E!==0)&&(f.push(M,L,V),A+=3),(e>0||E!==o-1)&&(f.push(L,W,V),A+=3)}c.addGroup(p,A,0),p+=A}function y(v){const C=g,A=new Mt,T=new D;let R=0;const E=v===!0?t:e,M=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*M,0),h.push(0,M,0),d.push(.5,.5),g++;const L=g;for(let W=0;W<=s;W++){const F=W/s*l+a,Y=Math.cos(F),O=Math.sin(F);T.x=E*O,T.y=m*M,T.z=E*Y,u.push(T.x,T.y,T.z),h.push(0,M,0),A.x=Y*.5+.5,A.y=O*.5*M+.5,d.push(A.x,A.y),g++}for(let W=0;W<s;W++){const V=C+W,F=L+W;v===!0?f.push(F,F+1,V):f.push(F+1,F,V),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jc extends Ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const o=[],r=[];a(s),c(i),f(),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(o.slice(),3)),this.setAttribute("uv",new ue(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new D,v=new D,C=new D;for(let A=0;A<e.length;A+=3)d(e[A+0],y),d(e[A+1],v),d(e[A+2],C),l(y,v,C,_)}function l(_,y,v,C){const A=C+1,T=[];for(let R=0;R<=A;R++){T[R]=[];const E=_.clone().lerp(v,R/A),M=y.clone().lerp(v,R/A),L=A-R;for(let W=0;W<=L;W++)W===0&&R===A?T[R][W]=E:T[R][W]=E.clone().lerp(M,W/L)}for(let R=0;R<A;R++)for(let E=0;E<2*(A-R)-1;E++){const M=Math.floor(E/2);E%2===0?(h(T[R][M+1]),h(T[R+1][M]),h(T[R][M])):(h(T[R][M+1]),h(T[R+1][M+1]),h(T[R+1][M]))}}function c(_){const y=new D;for(let v=0;v<o.length;v+=3)y.x=o[v+0],y.y=o[v+1],y.z=o[v+2],y.normalize().multiplyScalar(_),o[v+0]=y.x,o[v+1]=y.y,o[v+2]=y.z}function f(){const _=new D;for(let y=0;y<o.length;y+=3){_.x=o[y+0],_.y=o[y+1],_.z=o[y+2];const v=m(_)/2/Math.PI+.5,C=p(_)/Math.PI+.5;r.push(v,1-C)}g(),u()}function u(){for(let _=0;_<r.length;_+=6){const y=r[_+0],v=r[_+2],C=r[_+4],A=Math.max(y,v,C),T=Math.min(y,v,C);A>.9&&T<.1&&(y<.2&&(r[_+0]+=1),v<.2&&(r[_+2]+=1),C<.2&&(r[_+4]+=1))}}function h(_){o.push(_.x,_.y,_.z)}function d(_,y){const v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const _=new D,y=new D,v=new D,C=new D,A=new Mt,T=new Mt,R=new Mt;for(let E=0,M=0;E<o.length;E+=9,M+=6){_.set(o[E+0],o[E+1],o[E+2]),y.set(o[E+3],o[E+4],o[E+5]),v.set(o[E+6],o[E+7],o[E+8]),A.set(r[M+0],r[M+1]),T.set(r[M+2],r[M+3]),R.set(r[M+4],r[M+5]),C.copy(_).add(y).add(v).divideScalar(3);const L=m(C);x(A,M+0,_,L),x(T,M+2,y,L),x(R,M+4,v,L)}}function x(_,y,v,C){C<0&&_.x===1&&(r[y]=_.x-1),v.x===0&&v.z===0&&(r[y]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.vertices,t.indices,t.radius,t.details)}}class Id extends Du{constructor(t){super(t),this.uuid=so(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Du().fromJSON(s))}return this}}const f1={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Ud(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,f,u,h,d;if(i&&(o=m1(n,t,o,e)),n.length>80*e){a=c=n[0],l=f=n[1];for(let g=e;g<s;g+=e)u=n[g],h=n[g+1],u<a&&(a=u),h<l&&(l=h),u>c&&(c=u),h>f&&(f=h);d=Math.max(c-a,f-l),d=d!==0?32767/d:0}return Ho(o,r,e,a,l,d,0),r}};function Ud(n,t,e,i,s){let o,r;if(s===T1(n,t,e,i)>0)for(o=t;o<e;o+=i)r=Iu(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=Iu(o,n[o],n[o+1],r);return r&&pa(r,r.next)&&(Vo(r),r=r.next),r}function ns(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(pa(e,e.next)||Le(e.prev,e,e.next)===0)){if(Vo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ho(n,t,e,i,s,o,r){if(!n)return;!r&&o&&y1(n,i,s,o);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,o?h1(n,i,s,o):u1(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Vo(n),n=c.next,a=c.next;continue}if(n=c,n===a){r?r===1?(n=d1(ns(n),t,e),Ho(n,t,e,i,s,o,2)):r===2&&p1(n,t,e,i,s,o):Ho(ns(n),t,e,i,s,o,1);break}}}function u1(n){const t=n.prev,e=n,i=n.next;if(Le(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,l=e.y,c=i.y,f=s<o?s<r?s:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,h=s>o?s>r?s:r:o>r?o:r,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=d&&zs(s,a,o,l,r,c,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function h1(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Le(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,f=s.y,u=o.y,h=r.y,d=a<l?a<c?a:c:l<c?l:c,g=f<u?f<h?f:h:u<h?u:h,x=a>l?a>c?a:c:l>c?l:c,m=f>u?f>h?f:h:u>h?u:h,p=pc(d,g,t,e,i),_=pc(x,m,t,e,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=p&&v&&v.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&zs(a,f,l,u,c,h,y.x,y.y)&&Le(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&zs(a,f,l,u,c,h,v.x,v.y)&&Le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&zs(a,f,l,u,c,h,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&zs(a,f,l,u,c,h,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function d1(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!pa(s,o)&&Nd(s,i,i.next,o)&&$o(s,o)&&$o(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),Vo(i),Vo(i.next),i=n=o),i=i.next}while(i!==n);return ns(i)}function p1(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&S1(r,a)){let l=zd(r,a);r=ns(r,r.next),l=ns(l,l.next),Ho(r,t,e,i,s,o,0),Ho(l,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function m1(n,t,e,i){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*i,l=o<r-1?t[o+1]*i:n.length,c=Ud(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(b1(c));for(s.sort(g1),o=0;o<s.length;o++)e=x1(s[o],e);return e}function g1(n,t){return n.x-t.x}function x1(n,t){const e=v1(n,t);if(!e)return t;const i=zd(e,n);return ns(i,i.next),ns(e,e.next)}function v1(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=o&&h>i&&(i=h,s=e.x<e.next.x?e:e.next,h===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let f=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&zs(r<c?o:i,r,l,c,r<c?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),$o(e,n)&&(u<f||u===f&&(e.x>s.x||e.x===s.x&&_1(s,e)))&&(s=e,f=u)),e=e.next;while(e!==a);return s}function _1(n,t){return Le(n.prev,n,t.prev)<0&&Le(t.next,n,n.next)<0}function y1(n,t,e,i){let s=n;do s.z===0&&(s.z=pc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,M1(s)}function M1(n){let t,e,i,s,o,r,a,l,c=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,c*=2}while(r>1);return n}function pc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function b1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function zs(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function S1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!E1(n,t)&&($o(n,t)&&$o(t,n)&&w1(n,t)&&(Le(n.prev,n,t.prev)||Le(n,t.prev,t))||pa(n,t)&&Le(n.prev,n,n.next)>0&&Le(t.prev,t,t.next)>0)}function Le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function pa(n,t){return n.x===t.x&&n.y===t.y}function Nd(n,t,e,i){const s=Rr(Le(n,t,e)),o=Rr(Le(n,t,i)),r=Rr(Le(e,i,n)),a=Rr(Le(e,i,t));return!!(s!==o&&r!==a||s===0&&Cr(n,e,t)||o===0&&Cr(n,i,t)||r===0&&Cr(e,n,i)||a===0&&Cr(e,t,i))}function Cr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Rr(n){return n>0?1:n<0?-1:0}function E1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Nd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function $o(n,t){return Le(n.prev,n,n.next)<0?Le(n,t,n.next)>=0&&Le(n,n.prev,t)>=0:Le(n,t,n.prev)<0||Le(n,n.next,t)<0}function w1(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function zd(n,t){const e=new mc(n.i,n.x,n.y),i=new mc(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Iu(n,t,e,i){const s=new mc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function mc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function T1(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class $s{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return $s.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Uu(t),Nu(i,t);let r=t.length;e.forEach(Uu);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Nu(i,e[l]);const a=f1.triangulate(i,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Uu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Nu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ma extends jc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ma(t.radius,t.detail)}}class Zc extends Ee{constructor(t=new Id([new Mt(0,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let f=0;f<t.length;f++)c(t[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(r,2));function c(f){const u=s.length/3,h=f.extractPoints(e);let d=h.shape;const g=h.holes;$s.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];$s.isClockWise(_)===!0&&(g[m]=_.reverse())}const x=$s.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];d=d.concat(_)}for(let m=0,p=d.length;m<p;m++){const _=d[m];s.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let m=0,p=x.length;m<p;m++){const _=x[m],y=_[0]+u,v=_[1]+u,C=_[2]+u;i.push(y,v,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return A1(e,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];i.push(r)}return new Zc(i,t.curveSegments)}}function A1(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class ga extends Ee{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const f=[],u=new D,h=new D,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const _=[],y=p/i;let v=0;p===0&&r===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(s+A*o)*Math.sin(r+y*a),u.y=t*Math.cos(r+y*a),u.z=t*Math.sin(s+A*o)*Math.sin(r+y*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),m.push(A+v,1-y),_.push(c++)}f.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const y=f[p][_+1],v=f[p][_],C=f[p+1][_],A=f[p+1][_+1];(p!==0||r>0)&&d.push(y,v,A),(p!==i-1||l<Math.PI)&&d.push(v,C,A)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kc extends Ii{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jc extends Ii{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class C1 extends Ad{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Fd extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class R1 extends Fd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const il=new ee,zu=new D,Fu=new D;class P1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $c,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),Fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fu),e.updateMatrixWorld(),il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class L1 extends P1{constructor(){super(new Md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class D1 extends Fd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new L1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class I1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ou(){return performance.now()}const ku=new ee;class U1{constructor(t,e,i=0,s=1/0){this.ray=new Yo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ku),this}intersectObject(t,e=!0,i=[]){return gc(t,this,i,e),i.sort(Bu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)gc(t[s],this,i,e);return i.sort(Bu),i}}function Bu(n,t){return n.distance-t.distance}function gc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const o=n.children;for(let r=0,a=o.length;r<a;r++)gc(o[r],t,e,!0)}}class Vs{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class N1 extends fs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);const Hu={type:"change"},Qc={type:"start"},Od={type:"end"},Pr=new Yo,$u=new Mi,z1=Math.cos(70*I0.DEG2RAD),ze=new D,on=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sl=1e-6;class F1 extends N1{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Vn,this._lastTargetPosition=new D,this._quat=new Vn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vs,this._sphericalDelta=new Vs,this._scale=1,this._panOffset=new D,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new D,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k1.bind(this),this._onPointerDown=O1.bind(this),this._onPointerUp=B1.bind(this),this._onContextMenu=q1.bind(this),this._onMouseWheel=V1.bind(this),this._onKeyDown=G1.bind(this),this._onTouchStart=W1.bind(this),this._onTouchMove=X1.bind(this),this._onMouseDown=H1.bind(this),this._onMouseMove=$1.bind(this),this._interceptControlDown=Y1.bind(this),this._interceptControlUp=j1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=Me.NONE}update(t=null){const e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=ze.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Pr.origin.copy(this.object.position),Pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pr.direction))<z1?this.object.lookAt(this.target):($u.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pr.intersectPlane($u,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sl||this._lastTargetPosition.distanceToSquared(this.target)>sl?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ze.copy(s).sub(this.target);let o=ze.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function O1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function k1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function B1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Od),this.state=Me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function H1(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Me.DOLLY;break;case ai.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Me.ROTATE}break;case ai.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(Qc)}function $1(n){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function V1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(n.preventDefault(),this.dispatchEvent(Qc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Od))}function G1(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function W1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Me.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Me.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(Qc)}function X1(n){switch(this._trackPointer(n),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Me.NONE}}function q1(n){this.enabled!==!1&&n.preventDefault()}function Y1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Z1 extends F1{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:ai.PAN,MIDDLE:ai.DOLLY,RIGHT:ai.ROTATE},this.touches={ONE:Si.PAN,TWO:Si.DOLLY_ROTATE}}}class Lr extends Ue{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Mt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Ls=new D,Vu=new ee,Gu=new ee,Wu=new D,Xu=new D;class K1{constructor(t={}){const e=this;let i,s,o,r;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,x){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Vu.copy(x.matrixWorldInverse),Gu.multiplyMatrices(x.projectionMatrix,Vu),f(g,g,x),d(g)},this.setSize=function(g,x){i=g,s=x,o=i/2,r=s/2,l.style.width=g+"px",l.style.height=x+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let x=0,m=g.children.length;x<m;x++)c(g.children[x])}function f(g,x,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Ls.setFromMatrixPosition(g.matrixWorld),Ls.applyMatrix4(Gu);const p=Ls.z>=-1&&Ls.z<=1&&g.layers.test(m.layers)===!0,_=g.element;_.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(e,x,m),_.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Ls.x*o+o)+"px,"+(-Ls.y*r+r)+"px)",_.parentNode!==l&&l.appendChild(_),g.onAfterRender(e,x,m));const y={distanceToCameraSquared:u(m,g)};a.objects.set(g,y)}for(let p=0,_=g.children.length;p<_;p++)f(g.children[p],x,m)}function u(g,x){return Wu.setFromMatrixPosition(g.matrixWorld),Xu.setFromMatrixPosition(x.matrixWorld),Wu.distanceToSquared(Xu)}function h(g){const x=[];return g.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function d(g){const x=h(g).sort(function(p,_){if(p.renderOrder!==_.renderOrder)return _.renderOrder-p.renderOrder;const y=a.objects.get(p).distanceToCameraSquared,v=a.objects.get(_).distanceToCameraSquared;return y-v}),m=x.length;for(let p=0,_=x.length;p<_;p++)x[p].element.style.zIndex=m-p}}}function J1(n,{mobile:t}){const e=new W_({antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.6:2)),e.setClearColor(0,0),e.shadowMap.enabled=!t,e.shadowMap.type=Qh,n.appendChild(e.domElement);const i=new K1;i.domElement.className="labels",n.appendChild(i.domElement);const s=new X_;s.fog=new Gc(13625855,170,380);const o=new mn(34,1,.5,2600);o.position.set(10,150,160);const r=new Z1(o,e.domElement);r.enableDamping=!0,r.dampingFactor=.08,r.minDistance=6,r.maxDistance=230,r.minPolarAngle=.18,r.maxPolarAngle=1.3,r.zoomToCursor=!0,r.zoomSpeed=1.1,r.target.set(4,0,2);const a=new R1(14085375,10259050,1.25);s.add(a);const l=new D1(16773596,2.5);l.castShadow=!t,l.shadow.mapSize.set(t?2048:4096,t?2048:4096),l.shadow.bias=-5e-4,l.shadow.normalBias=.03,l.shadow.camera.near=1,l.shadow.camera.far=400,s.add(l,l.target);const c=new D(.45,.8,.4).normalize(),f={left:0,bottom:0,top:0};let u=1,h=1;function d(){const F=n.clientWidth||window.innerWidth,Y=n.clientHeight||window.innerHeight;(F!==u||Y!==h)&&(u=F,h=Y,e.setSize(u,h),i.setSize(u,h)),g()}function g(){const F=f.bottom-f.top,Y=u+f.left,O=h+Math.abs(F);o.aspect=Y/O,f.left||F?o.setViewOffset(Y,O,0,Math.max(0,F),u,h):o.clearViewOffset(),o.updateProjectionMatrix()}function x(F,Y,O=0){return Math.abs(F-f.left)<1&&Math.abs(Y-f.bottom)<1&&Math.abs(O-f.top)<1?!1:(f.left=F,f.bottom=Y,f.top=O,g(),!0)}window.addEventListener("resize",d),d();const m=matchMedia("(prefers-reduced-motion: reduce)").matches;let p=null;const _=new Vs,y=new D;function v({target:F,dist:Y,polar:O,azim:k},I=1.4){const ut=r.target.clone();y.copy(o.position).sub(ut),_.setFromVector3(y);const K={r:_.radius,phi:_.phi,theta:_.theta};let tt=k??K.theta,Lt=tt-K.theta;Lt=((Lt+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,tt=K.theta+Lt,p={t:0,dur:m?Math.min(I,.5):I,t0:ut,t1:F.clone(),from:K,to:{r:Y??K.r,phi:O??K.phi,theta:tt},follow:null},r.enabled=!1,r.enableDamping=!1,r.maxDistance=1/0}function C(F){p&&(p.follow=F)}function A(F){if(!p)return;p.t+=F/p.dur;const Y=Lp(ve(p.t,0,1)),O=p.follow?p.follow():p.t1;r.target.lerpVectors(p.t0,O,Y);const k=m?0:Math.sin(Y*Math.PI)*Math.min(12,p.t0.distanceTo(O)*.12);_.set(p.from.r+(p.to.r-p.from.r)*Y+k,p.from.phi+(p.to.phi-p.from.phi)*Y,p.from.theta+(p.to.theta-p.from.theta)*Y),o.position.setFromSpherical(_).add(r.target),o.lookAt(r.target),p.t>=1&&(r.maxDistance=Math.max(230,p.to.r*1.25),p=null,r.enabled=!0,r.enableDamping=!0)}const T=new D(4,0,2),R=30;e.shadowMap.autoUpdate=!1;const E=l.shadow.camera;E.left=-75,E.right=75,E.top=75,E.bottom=-75,E.near=1,E.far=420,E.updateProjectionMatrix();function M(F){c.copy(F).normalize(),l.position.copy(c).multiplyScalar(200).add(T),l.target.position.copy(T),l.target.updateMatrixWorld(),e.shadowMap.needsUpdate=!0}M(c);function L(F){const Y=Math.round(F.x/R)*R,O=Math.round(F.z/R)*R;Y===T.x&&O===T.z||(T.set(Y,0,O),M(c))}let W=o.near;function V(F){const Y=ve(F*.02,.2,5),O=Math.max(2600,F*2);(Math.abs(Y-W)/W>.08||Math.abs(O-o.far)>50)&&(o.near=Y,o.far=O,o.updateProjectionMatrix(),W=Y)}return{renderer:e,labels:i,scene:s,camera:o,controls:r,hemi:a,sun:l,sunDir:c,resize:d,setInsets:x,flyTo:v,follow:C,setSun:M,size:()=>({W:u,H:h}),insets:()=>({...f}),update(F){A(F),r.update(),V(o.position.distanceTo(r.target)),L(r.target)},render(){e.render(s,o),i.render(s,o)}}}function kd(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),o={},r={},a=n[0].morphTargetsRelative,l=new Ee;let c=0;for(let f=0;f<n.length;++f){const u=n[f];let h=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,f),c+=d}}if(e){let f=0;const u=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+f);f+=n[h].attributes.position.count}l.setIndex(u)}for(const f in o){const u=qu(o[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,u)}for(const f in r){const u=r[f][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let h=0;h<u;++h){const d=[];for(let x=0;x<r[f].length;++x)d.push(r[f][x][h]);const g=qu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(g)}}return l}function qu(n){let t,e,i,s=-1,o=0;for(let c=0;c<n.length;++c){const f=n[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=f.count*e}const r=new t(o),a=new re(r,e,i);let l=0;for(let c=0;c<n.length;++c){const f=n[c];if(f.isInterleavedBufferAttribute){const u=l/e;for(let h=0,d=f.count;h<d;h++)for(let g=0;g<e;g++){const x=f.getComponent(h,g);a.setComponent(h+u,g,x)}}else r.set(f.array,l);l+=f.count*e}return s!==void 0&&(a.gpuType=s),a}const Yu=new Map;function ao(n,t){let e=Yu.get(n);return e||(e=t(),e.deleteAttribute("uv"),Yu.set(n,e)),e}const ju=()=>ao("box",()=>new Ui(1,1,1).translate(0,.5,0)),Q1=(n,t)=>ao(`cyl${n.toFixed(3)}|${t}`,()=>new ro(n,1,1,t,1).translate(0,.5,0)),ty=n=>ao(`cylc${n}`,()=>new ro(1,1,1,n,1)),ey=n=>ao(`ball${n}`,()=>new ma(1,n)),ny=()=>ao("gable",()=>{const n=[-.5,0,-.5],t=[-.5,0,.5],e=[-.5,1,0],i=[.5,0,-.5],s=[.5,0,.5],o=[.5,1,0],r=[],a=(c,f,u)=>r.push(...c,...f,...u);a(n,t,e),a(i,o,s),a(t,s,o),a(t,o,e),a(n,e,o),a(n,o,i),a(n,i,s),a(n,s,t);const l=new Ee;return l.setAttribute("position",new ue(r,3)),l.setAttribute("uv",new ue(new Array(r.length/3*2).fill(0),2)),l.computeVertexNormals(),l}),iy=()=>ao("hip",()=>new ro(0,Math.SQRT1_2,1,4,1).rotateY(Math.PI/4).translate(0,.5,0)),Dr=new ee,Zu=new ee,Ku=new Vn,Ju=new _n,Qu=new D,th=new D,eh=new Map;function sy(n){let t=eh.get(n);return t||(t=new Ft(n),eh.set(n,t)),t}class En{constructor(){this.parts={solid:[],glow:[],neon:[]},this.stack=[new ee],this.marks=[]}point(t,e,i){return new D(t,e,i).applyMatrix4(this.top)}mark(t,e,i,s,o={}){const r=Math.atan2(this.top.elements[8],this.top.elements[10]);return this.marks.push({...o,type:t,pos:this.point(e,i,s),ry:(o.ry||0)+r}),this}get top(){return this.stack[this.stack.length-1]}at(t,e,i,s,o,r=1){return Dr.compose(Qu.set(t,e,i),Ku.setFromEuler(Ju.set(0,s||0,0)),th.set(r,r,r)),this.stack.push(this.top.clone().multiply(Dr)),o(),this.stack.pop(),this}add(t,e,i={}){const s=t.index?t.toNonIndexed():t.clone();Dr.compose(Qu.set(i.x||0,i.y||0,i.z||0),Ku.setFromEuler(Ju.set(i.rx||0,i.ry||0,i.rz||0,i.order||"XYZ")),th.set(i.sx??1,i.sy??1,i.sz??1)),Zu.multiplyMatrices(this.top,Dr),s.applyMatrix4(Zu);const o=sy(e),r=s.attributes.position.count,a=new Float32Array(r*3);for(let l=0;l<r;l++)a[l*3]=o.r,a[l*3+1]=o.g,a[l*3+2]=o.b;return s.setAttribute("color",new re(a,3)),s.attributes.uv&&s.deleteAttribute("uv"),this.parts[i.bucket||"solid"].push(s),this}box(t,e,i,s,o={}){return this.add(ju(),s,{...o,sx:t,sy:e,sz:i})}cyl(t,e,i,s,o,r={}){const a=Math.max(e,1e-4);return this.add(Q1(t/a,s),o,{...r,sx:a,sy:i,sz:a})}cone(t,e,i,s,o={}){return this.cyl(0,t,e,i,s,o)}cylC(t,e,i,s,o={}){return this.add(ty(i),s,{...o,sx:t,sy:e,sz:t})}ball(t,e,i={},s=0){return this.add(ey(s),e,{...i,sx:t*(i.sx??1),sy:t*(i.sy??1),sz:t*(i.sz??1)})}gable(t,e,i,s,o={}){return this.add(ny(),s,{...o,sx:t,sy:e,sz:i})}hip(t,e,i,s,o={}){return this.add(iy(),s,{...o,sx:t,sy:e,sz:i})}geo(t,e,i={}){return t.attributes.normal||t.computeVertexNormals(),this.add(t,e,i)}rod(t,e,i,s,o={}){const r=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=Math.hypot(r,a,l);if(c<1e-4)return this;const f=ju().clone().translate(0,-.5,0).scale(i,c,i),u=new D(r,a,l).normalize(),h=new Vn().setFromUnitVectors(new D(0,1,0),u);return f.applyQuaternion(h).translate((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),this.add(f,s,o)}build(){const t={};for(const[e,i]of Object.entries(this.parts))i.length&&(t[e]=kd(i,!1),i.forEach(s=>s.dispose()));return t.marks=this.marks,this.parts={solid:[],glow:[],neon:[]},this.marks=[],t}}const un={solid:new Kc({vertexColors:!0,flatShading:!0,roughness:.86,metalness:.02}),glow:new ui({vertexColors:!0}),neon:new ui({vertexColors:!0})},be={uTime:{value:0},uNight:{value:0},uRain:{value:0},uPointScale:{value:800},uFade:{value:new Mt(170,380)}},oy=new Ft(.17,.2,.26),ry=new Ft(1,1,1);function ay(n,t=0){un.glow.color.copy(oy).lerp(ry,n);const e=.68+.32*n;un.neon.color.setRGB(e,e,e),un.solid.roughness=.86-t*.3,un.solid.metalness=.02+t*.1,be.uNight.value=n,be.uRain.value=t}const ol=new Ft,Ir={h:0,s:0,l:0};function Pe(n,t){return ol.set(n).getHSL(Ir),ol.setHSL(Ir.h,Ir.s,Math.max(0,Math.min(1,Ir.l+t))),`#${ol.getHexString()}`}function nh(){return Hc.clone(bt.fog)}const ih={surface:new Ge({uniforms:{...nh(),uTime:be.uTime,uNight:be.uNight,uRain:be.uRain,uDay:{value:new Ft("#4cb2e4")},uDeep:{value:new Ft("#2a86c4")},uDark:{value:new Ft("#132a4a")},uGlint:{value:new Ft("#ffc978")}},vertexShader:`
      #include <fog_pars_vertex>
      varying vec3 vW;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime; uniform float uNight; uniform float uRain;
      uniform vec3 uDay; uniform vec3 uDeep; uniform vec3 uDark; uniform vec3 uGlint;
      varying vec3 vW;
      #include <fog_pars_fragment>
      void main() {
        vec2 p = vW.xz;
        float w = sin(p.x * 2.3 + uTime * 1.4) * sin(p.y * 1.9 - uTime * 1.1)
                + 0.6 * sin((p.x + p.y) * 3.7 + uTime * 2.2)
                + uRain * 0.8 * sin(p.x * 11.0 + uTime * 9.0) * sin(p.y * 13.0 - uTime * 7.0);
        float ripple = smoothstep(0.85, 1.35, w);
        vec3 base = mix(uDay, uDeep, 0.4 + 0.3 * sin(p.x * 0.5 + p.y * 0.35));
        base = mix(base, uDark, uNight);
        vec3 glint = mix(vec3(0.85, 0.95, 1.0), uGlint, uNight);
        vec3 col = base + ripple * glint * (0.35 + 0.35 * uNight);
        gl_FragColor = vec4(col, 0.9);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,transparent:!0,fog:!0}),fall:new Ge({uniforms:{...nh(),uTime:be.uTime,uNight:be.uNight},vertexShader:`
      #include <fog_pars_vertex>
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime; uniform float uNight;
      varying vec2 vUv;
      #include <fog_pars_fragment>
      float hash(float n) { return fract(sin(n) * 43758.5453); }
      void main() {
        float lane = floor(vUv.x * 7.0);
        float sp = 0.8 + hash(lane) * 0.7;
        float s = fract(vUv.y * 2.2 - uTime * sp + hash(lane + 3.7));
        float streak = smoothstep(0.0, 0.2, s) * (1.0 - smoothstep(0.5, 1.0, s));
        vec3 water = mix(vec3(0.42, 0.72, 0.92), vec3(0.08, 0.16, 0.3), uNight);
        vec3 foam = mix(vec3(1.0), vec3(0.45, 0.52, 0.66), uNight);
        float lip = 1.0 - smoothstep(0.0, 0.07, vUv.y);
        vec3 col = mix(water, foam, clamp(streak * 0.6 + lip, 0.0, 1.0));
        float a = (0.5 + 0.4 * streak + 0.3 * lip) * (1.0 - smoothstep(0.35, 1.0, vUv.y));
        gl_FragColor = vec4(col, a);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,transparent:!0,depthWrite:!1,side:Pn,fog:!0})},Oe=Math.PI,ie={tile:["#e9dcc5","#d8c6a5","#cfd6d0","#e8cfc4","#d4d9c2","#efe6d8","#c7bda8","#bfc9cf","#e4d3b4","#d9c9b8","#c9d4c0"],iron:["#e6e6e2","#b9c0c4","#8a5a3c","#d9d2c3","#6f7b83"],sheet:["#3d7fb8","#e8e4da","#5aa7a0","#a8502f","#7aa0c8","#d6d0c0","#8fb3a0"],scooter:["#ece8df","#c8102e","#1f4e9c","#2b2b2b","#9fd3c7","#f2c14e","#7d8b99","#ffffff","#e98fa4","#6b8e5a","#d9d9d9"],awning:[["#d7262e","#f4efe6"],["#1f4e9c","#f4efe6"],["#1e7a46","#f4efe6"],["#f2a516","#fff6dd"],["#7b4b94","#efe6f4"]],stool:["#d7262e","#2a6fdb","#f2c14e","#2fa36b","#d7262e"],lit:["#ffd98a","#ffe7b0","#fff1cf","#cfe6ff","#ffcf8a","#ffe0a3"],shirt:["#e74c3c","#3498db","#f1c40f","#2ecc71","#ecf0f1","#34495e","#e67e22","#9b59b6","#1abc9c","#f5b7b1","#95a5a6"],leaf:["#4f9a43","#5aa64a","#3f8a3d","#68ad4f","#4a8f52"]},oa="#34445e";function lo(n,t,e,i,s,o,r,a={}){const l=r()<(a.litRate??.68);n.box(s,o,.03,l?ct(r,ie.lit):oa,{x:t,y:e,z:i,bucket:"glow"}),a.sill!==!1&&n.box(s+.08,.04,.07,a.sillColor||"#e2ddd2",{x:t,y:e-.04,z:i+.02})}function xa(n,t,e,i,s,o,r,a){n.box(s+.05,.04,.15,r,{x:t,y:e-.03,z:i+.15/2}),n.box(s+.05,.035,.15,r,{x:t,y:e+o-.01,z:i+.15/2});for(const f of[-1,1])n.box(.03,o,.03,r,{x:t+f*(s/2+.01),y:e,z:i+.15});const c=Math.max(2,Math.round(s/.2));for(let f=1;f<c;f++)n.box(.014,o,.014,r,{x:t-s/2+f*s/c,y:e,z:i+.15});n.box(s,.014,.014,r,{x:t,y:e+o*.55,z:i+.15}),a&&a()<.35&&n.ball(.07,ct(a,ie.leaf),{x:t+(a()-.5)*s*.6,y:e+.06,z:i+.15*.6})}function tf(n,t,e,i,s=0){n.at(t,e,i,s,()=>{n.box(.34,.24,.18,"#ebe8e1",{z:.09}),n.cylC(.075,.02,8,"#4a4f55",{rx:Oe/2,x:-.04,y:.12,z:.185}),n.box(.3,.025,.2,"#8d949b",{y:-.025,z:.1})})}function ef(n,t,e,i,s,o){n.box(s,.01,.01,"#bdbdbd",{x:t,y:e,z:i});const r=Math.max(2,Math.floor(s/.15));for(let a=0;a<r;a++){if(o()<.3)continue;const l=.13+o()*.1;n.box(.1,l,.015,ct(o,ie.shirt),{x:t-s/2+(a+.5)*(s/r),y:e-l,z:i})}}function nf(n,t,e,i,s){n.box(t,.18,.07,s,{y:i,z:e/2-.07/2}),n.box(t,.18,.07,s,{y:i,z:-e/2+.07/2}),n.box(.07,.18,e,s,{y:i,x:t/2-.07/2}),n.box(.07,.18,e,s,{y:i,x:-t/2+.07/2})}function sf(n,t,e,i,s){if(s()<.55){for(const[o,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.box(.035,.28,.035,"#7d848b",{x:t+o*.15,y:e,z:i+r*.15});n.cyl(.22,.22,.46,10,"#cfd4d8",{x:t,y:e+.28,z:i}),n.cyl(.08,.22,.08,10,"#e1e5e8",{x:t,y:e+.74,z:i})}else n.box(.46,.05,.46,"#8a8f94",{x:t,y:e,z:i}),n.cyl(.2,.23,.44,10,ct(s,["#d8c27a","#4a90c8","#e5e1d5"]),{x:t,y:e+.05,z:i}),n.cyl(.09,.2,.09,10,"#efe9d9",{x:t,y:e+.49,z:i})}function Bd(n,t,e,i,s,o,r){const a=ct(r,["#d9d6cf","#c4cdd3","#e6e1d4","#cfd8d2"]),l=ct(r,ie.sheet),c=.62;n.box(s,c,o,a,{x:t,y:e,z:i}),n.gable(s+.14,.24,o+.16,l,{x:t,y:e+c,z:i}),n.box(s*.36,.2,.03,r()<.55?"#ffe2a0":oa,{x:t-s*.18,y:e+.26,z:i+o/2+.01,bucket:"glow"})}function ly(n,t,e,i){n.box(.5,.04,.42,"#24324a",{x:t,y:e+.18,z:i,rx:-.5}),n.cylC(.07,.5,8,"#eeeeee",{x:t,y:e+.36,z:i-.18,rz:Oe/2}),n.box(.04,.3,.04,"#888",{x:t-.2,y:e,z:i-.15}),n.box(.04,.3,.04,"#888",{x:t+.2,y:e,z:i-.15})}function va(n,t,e,i,s){const o=s();if(o<.55)Bd(n,-t*.12,i,-e*.12,t*.58,e*.5,s);else if(o<.8)for(let r=0;r<4;r++){const a=-t/2+.35+r*.3;n.box(.24,.12,.18,"#f2f2f2",{x:a,y:i,z:-e*.25}),n.ball(.11,ct(s,ie.leaf),{x:a,y:i+.17,z:-e*.25,sy:.7})}sf(n,t*.27,i,e*.2,s),s()<.35&&ly(n,-t*.25,i,e*.28)}function _a(n,t,e,i,s,o={}){n.at(t,o.y||0,e,i,()=>{n.cylC(.07,.05,8,"#1e1e1e",{rz:Oe/2,y:.07,z:.19}),n.cylC(.07,.05,8,"#1e1e1e",{rz:Oe/2,y:.07,z:-.19}),n.box(.15,.06,.3,Pe(s,-.12),{y:.09}),n.box(.17,.15,.22,s,{y:.11,z:-.13}),n.box(.15,.04,.22,"#1d1d1d",{y:.26,z:-.12}),n.box(.16,.24,.06,s,{y:.09,z:.21,rx:-.22}),n.box(.24,.025,.025,"#2a2a2a",{y:.33,z:.23}),n.box(.07,.05,.03,"#fff6d6",{y:.27,z:.27,bucket:"glow"}),o.helmet&&n.ball(.06,o.helmet,{y:.33,z:-.14})})}function Ur(n,t,e,i,s,o=.75,r=0){for(let l=t;l<=e;l+=.24)s()>o||_a(n,l+(s()-.5)*.05,i+(s()-.5)*.06,r+(s()-.5)*.18,ct(s,ie.scooter),{helmet:s()<.3?ct(s,["#f5f5f5","#e63946","#1d3557","#ffb703"]):null})}function We(n,t,e,i,s="round",o=1){if(s==="palm"){const l=(2.5+i()*.9)*o;n.cyl(.055*o,.085*o,l,6,"#a39782",{x:t,z:e});const c=ct(i,["#3f8f3a","#4c9a3f","#2f7d3a"]);for(let f=0;f<7;f++){const u=f/7*Oe*2+i()*.5;n.box(.13*o,.03*o,.85*o,c,{x:t+Math.sin(u)*.33*o,y:l-.08*o,z:e+Math.cos(u)*.33*o,ry:u,rx:.42,order:"YXZ"})}n.ball(.1*o,"#6b5a3a",{x:t,y:l-.05,z:e});return}if(s==="banyan"){n.cyl(.2*o,.3*o,1.3*o,7,"#7b6a55",{x:t,z:e});for(let l=0;l<5;l++){const c=i()*Oe*2,f=(.5+i()*.7)*o;n.box(.025,1.4*o,.025,"#8c7a62",{x:t+Math.sin(c)*f,z:e+Math.cos(c)*f})}for(let l=0;l<6;l++){const c=l/6*Oe*2;n.ball((.75+i()*.3)*o,ct(i,ie.leaf),{x:t+Math.sin(c)*.75*o,y:(1.55+i()*.35)*o,z:e+Math.cos(c)*.75*o,sy:.7})}n.ball(.95*o,ct(i,ie.leaf),{x:t,y:1.95*o,z:e,sy:.7});return}if(s==="cone"){n.cyl(.05*o,.07*o,.4*o,5,"#6d5a43",{x:t,z:e}),n.cone(.42*o,.8*o,7,"#2f6f45",{x:t,y:.3*o,z:e}),n.cone(.32*o,.6*o,7,"#367a4c",{x:t,y:.75*o,z:e});return}const r=(.75+i()*.3)*o;n.cyl(.045*o,.07*o,r,6,"#76644d",{x:t,z:e});const a=ct(i,ie.leaf);n.ball(.42*o,a,{x:t,y:r+.25*o,z:e,sy:.85}),n.ball(.3*o,Pe(a,.06),{x:t+.2*o,y:r+.45*o,z:e-.1*o}),n.ball(.28*o,Pe(a,-.05),{x:t-.18*o,y:r+.4*o,z:e+.12*o})}function Hd(n,t,e,i,s=1){n.ball(.22*s,ct(i,ie.leaf),{x:t,y:.12*s,z:e,sy:.75})}function cy(n,t,e,i=0){n.at(t,0,e,i,()=>{n.cyl(.03,.045,1.95,6,"#59606a"),n.box(.035,.035,.5,"#59606a",{y:1.92,z:-.22}),n.box(.13,.05,.22,"#3a3f45",{y:1.86,z:-.45}),n.box(.1,.02,.17,"#fff3c4",{y:1.845,z:-.45,bucket:"neon"}),n.mark("halo",0,1.8,-.45,{color:"#ffd98a",size:1.7}),n.mark("pool",0,.03,-.45,{r:1.35,color:"#ffcb6b"})})}function fy(n,t,e){n.cyl(.045,.065,2.6,6,"#8d8a82",{x:t,z:e}),n.box(.7,.04,.05,"#6c6a64",{x:t,y:2.38,z:e}),n.box(.48,.04,.05,"#6c6a64",{x:t,y:2.18,z:e}),n.cyl(.08,.08,.22,8,"#7d8278",{x:t+.13,y:1.75,z:e})}function Do(n,t,e,i=.22,s="#1f1f1f"){const o=[(t[0]+e[0])/2,(t[1]+e[1])/2-i,(t[2]+e[2])/2];n.rod(t,o,.012,s),n.rod(o,e,.012,s)}function is(n,t,e,i=0,s="#8b5e3c"){n.at(t,0,e,i,()=>{n.box(.6,.04,.2,s,{y:.2}),n.box(.6,.16,.035,s,{y:.24,z:-.09});for(const o of[-1,1])n.box(.04,.2,.18,"#555",{x:o*.25})}),n.mark("sit",t,.2,e,{ry:i,seat:"bench"})}function Bn(n,t,e,i,s={}){s.round??i()<.5?n.cyl(.32,.32,.03,10,s.top||"#e9e4d8",{x:t,y:.34,z:e}):n.box(.55,.03,.42,s.top||"#e9e4d8",{x:t,y:.34,z:e}),n.box(.04,.34,.04,"#8a8a8a",{x:t,z:e});const r=s.n||4;for(let a=0;a<r;a++){const l=a/r*Oe*2+.4,c=t+Math.sin(l)*.42,f=e+Math.cos(l)*.42;n.cyl(.07,.085,.19,6,s.stool||ct(i,ie.stool),{x:c,z:f}),n.mark("sit",c,.19,f,{ry:l+Oe,seat:"stool",shop:s.shop})}}function an(n,t,e,i,s="#d7262e",o=1){n.ball(.15*o,s,{x:t,y:e,z:i,sy:1.2,bucket:"neon"},1),n.cyl(.07*o,.07*o,.05*o,6,"#d9a520",{x:t,y:e+.16*o,z:i}),n.cyl(.07*o,.07*o,.05*o,6,"#d9a520",{x:t,y:e-.21*o,z:i}),n.box(.02*o,.12*o,.02*o,"#d9a520",{x:t,y:e-.33*o,z:i}),n.mark("halo",t,e,i,{color:s==="#f4efe6"?"#ffe9c2":"#ff6a4a",size:1.15*o})}function bn(n,t,e,i,s,o={}){const r=o.sag??.3;Do(n,t,e,r,"#2a2a2a");for(let a=1;a<=i;a++){const l=a/(i+1),c=t[0]+(e[0]-t[0])*l,f=t[2]+(e[2]-t[2])*l,u=t[1]+(e[1]-t[1])*l-r*4*l*(1-l);if(o.bulbs){const h=o.colors?ct(s,o.colors):"#ffe3a1";n.ball(.045,h,{x:c,y:u-.05,z:f,bucket:"neon"}),a%2===0&&n.mark("halo",c,u-.05,f,{color:h,size:.6})}else{const h=o.colors?o.colors[a%o.colors.length]:"#d7262e";an(n,c,u-.25*(o.s||.6),f,h,o.s||.6)}}}function of(n,t,e,i,s,o,r){const a=Math.max(3,Math.round(s/.24));for(let l=0;l<a;l++)n.box(s/a+.002,.03,o,r[l%2],{x:t-s/2+(l+.5)*(s/a),y:e,z:i,rx:.32});n.box(s,.1,.02,r[0],{x:t,y:e-.1-o*.16,z:i+o/2-.02})}function Us(n,t,e,i,s,o={}){n.at(t,0,e,i,()=>{n.box(.9,.52,.45,"#c3c9ce",{y:.1}),n.box(.84,.22,.38,o.glass||"#fff1c4",{y:.62,bucket:"glow"}),n.box(.9,.03,.45,"#9aa0a6",{y:.84}),n.box(.9,.06,.02,o.trim||"#d7262e",{y:.5,z:.235});for(const r of[-1,1])n.cylC(.09,.04,8,"#262626",{x:r*.33,y:.09,z:.24,rz:Oe/2});n.cyl(.13,.13,.32,8,"#3d6fb6",{x:.55,z:-.1}),o.umbrella!==!1&&(n.cyl(.018,.018,1.15,4,"#777",{x:-.4,y:.6}),n.cone(.75,.28,8,o.umbrella||ct(s,["#d7262e","#1f4e9c","#f2a516","#2a9d8f","#e76f51"]),{x:-.4,y:1.62})),n.ball(.045,"#fff3c4",{y:1.08,z:.05,bucket:"neon"}),n.mark("halo",0,1.08,.05,{color:"#ffd27a",size:1.3}),n.mark("pool",0,.03,.3,{r:.9,color:"#ffcf7a"}),n.mark("steam",.15,.95,0,{shop:o.shop})})}function sh(n,t,e,i,s={}){n.box(1.1,.55,.38,"#c6ccd1",{x:t,z:e}),n.box(1.12,.03,.4,"#a1a8ae",{x:t,y:.55,z:e}),n.cyl(.17,.15,.24,10,"#9ea4aa",{x:t-.28,y:.58,z:e}),n.cyl(.14,.14,.12,10,"#d7c9a4",{x:t+.22,y:.58,z:e}),n.box(.4,.18,.3,s.glass||"#fff1c4",{x:t+.22,y:.7,z:e,bucket:"glow"}),n.mark("steam",t-.28,.85,e,{shop:s.shop})}function uy(n,t,e,i){const s=["#2e7d32","#c62828","#f9a825"];for(let o=0;o<4;o++)n.box(.32,.18,.24,ct(i,s),{x:t+o%2*.02,y:o*.18,z:e})}function oh(n,t,e,i,s){n.at(t,0,e,i,()=>{n.box(.5,.5,.5,ct(s,["#ff5fa2","#3fa7ff","#ffcf3f"])),n.box(.46,.55,.46,"#dff4ff",{y:.5,bucket:"glow"}),n.box(.5,.12,.5,"#f4f4f4",{y:1.05});for(let o=0;o<6;o++)n.ball(.06,ct(s,["#ff8fab","#ffd166","#06d6a0","#118ab2","#ef476f"]),{x:(s()-.5)*.3,y:.58,z:(s()-.5)*.3,bucket:"neon"});n.mark("halo",0,.8,.3,{color:"#ff7ad9",size:1.2})})}function rh(n,t,e,i="#c99a6b"){n.cyl(.24,.18,.75,12,"#f3efe6",{x:t,z:e}),n.cyl(.215,.17,.6,12,i,{x:t,y:.03,z:e});for(let s=0;s<6;s++)n.ball(.045,"#2b1a12",{x:t+Math.sin(s)*.1,y:.1,z:e+Math.cos(s)*.1+.12});n.ball(.24,"#f7f3ea",{x:t,y:.75,z:e,sy:.35}),n.cyl(.03,.03,.5,6,"#e63946",{x:t+.06,y:.72,z:e,rz:-.25})}function $d(n,t,e,i,s,o="#1f2a44"){for(let a=0;a<3;a++)n.box(s/3-.03,.32,.015,o,{x:t-s/2+(a+.5)*(s/3),y:e,z:i})}function hy(n,t,e,i,s=.9){for(let o=e+.1;o<i-.05;o+=.24)n.box(s,.012,.12,"#f4f4ee",{x:t,y:.02,z:o})}function ah(n,t,e,i,s,o,r,a=0){const l=ct(r,ie.tile),c=ct(r,ie.iron),f=1.15,u=1,h=f+(o-1)*u;return n.at(t,0,e,a,()=>{n.box(i,h,s,l),n.box(.6,.95,.03,"#7c848c",{x:-i*.25,z:s/2+.01}),n.box(.55,.45,.03,r()<.5?"#ffe2a0":oa,{x:i*.22,y:.4,z:s/2+.01,bucket:"glow"});const d=2;for(let g=1;g<o;g++){const x=f+(g-1)*u+.28;n.box(i+.02,.05,s+.02,Pe(l,-.1),{y:f+(g-1)*u-.025});for(let m=0;m<d;m++){const p=-i/2+i*(m+.5)/d,_=i/d*.56;lo(n,p,x,s/2+.01,_,.46,r),r()<.75?xa(n,p,x,s/2+.01,_+.05,.5,c,r):r()<.5&&tf(n,p+_/2+.22,x+.04,s/2,0),r()<.18&&ef(n,p,x+.5,s/2+.18,_,r)}for(const m of[-1,1])n.box(.03,.42,s*.36,r()<.6?ct(r,ie.lit):oa,{x:m*(i/2+.01),y:x,bucket:"glow"})}n.box(i+.05,.07,s+.05,Pe(l,-.14),{y:h}),nf(n,i,s,h+.07,Pe(l,-.04)),va(n,i,s,h+.07,r)}),h}function dy(n,t,e,i,s,o,r,a=0){const l=i/o;n.at(t,0,e,a,()=>{for(let c=0;c<o;c++){const f=2+Math.floor(r()*3),u=-i/2+(c+.5)*l,h=ct(r,ie.tile),d=1.15+(f-1)*.95;n.box(l-.04,d,s,h,{x:u}),r()<.5?n.box(l*.7,.85,.03,"#8f969c",{x:u,z:s/2+.01}):n.box(l*.7,.8,.03,ct(r,ie.lit),{x:u,z:s/2+.01,bucket:"glow"});for(let g=1;g<f;g++){const x=1.15+(g-1)*.95+.26;lo(n,u,x,s/2+.01,l*.5,.42,r),r()<.7&&xa(n,u,x,s/2+.01,l*.55,.46,ct(r,ie.iron),r)}n.box(l-.02,.06,s+.03,Pe(h,-.14),{x:u,y:d}),r()<.6?sf(n,u+.1,d+.06,-s*.15,r):r()<.7&&Bd(n,u,d+.06,-s*.1,l*.7,s*.55,r)}})}function Gs(n,t,e,i,s,o,r,a={}){const l=a.h||o*.4,c=a.ridge||"#e0a526";n.gable(s,l,o,r,{x:t,y:e,z:i}),n.box(s*.9,.09,.11,c,{x:t,y:e+l-.03,z:i});for(const f of[-1,1])n.box(.48,.07,.1,c,{x:t+f*(s*.45+.16),y:e+l+.05,z:i,rz:f*.55}),n.box(.14,.05,.09,c,{x:t+f*(s*.45+.38),y:e+l+.2,z:i,rz:f*1});n.ball(.1,"#e8453c",{x:t,y:e+l+.12,z:i}),n.box(.08,.12,.08,c,{x:t,y:e+l+.02,z:i});for(const f of[-1,1])n.box(.36,.09,.06,"#2f9e73",{x:t+f*.34,y:e+l+.06,z:i,rz:-f*.25}),n.box(.12,.12,.06,"#f2c14e",{x:t+f*.54,y:e+l+.12,z:i})}function py(n,t,e){n.box(.36,.25,.36,"#6d5a3f",{x:t,z:e}),n.cyl(.2,.16,.22,8,"#8a6f45",{x:t,y:.25,z:e}),n.cyl(.04,.12,.25,8,"#8a6f45",{x:t,y:.47,z:e}),n.mark("incense",t,.62,e)}function xc(n,t,e,i,s,o=1,r={}){const a=r.roof||ct(s,["#d9822b","#2f8f5b","#d9822b"]);n.at(t,0,e,i,()=>{n.box(3,.18,2.4,"#b6a691",{z:.1}),n.box(2.5,1.15,1.5,"#d8c8b0",{y:.18,z:-.2}),n.box(2.3,.12,.05,"#2f9e73",{y:1.2,z:.56});for(const l of[-1.05,-.38,.38,1.05])n.cyl(.07,.07,1.12,8,"#b3261e",{x:l,y:.18,z:.72});n.box(.86,.86,.05,"#a51c1c",{y:.18,z:.57}),n.box(.04,.86,.06,"#e0a526",{y:.18,z:.6});for(const l of[-1,1])n.box(.42,.62,.05,"#a51c1c",{x:l*.78,y:.24,z:.57});Gs(n,0,1.3,.05,3.1,1.95,a,{h:.68}),Gs(n,0,1,.95,2,.55,a,{h:.24}),an(n,-.62,1,1,"#d7262e",.85),an(n,.62,1,1,"#d7262e",.85),py(n,0,1.75);for(let l=0;l<3;l++)n.mark("stand",-.6+l*.6,.18,1.45+l%2*.25,{ry:Oe})},o)}function my(n,t,e,i,s){n.at(t,0,e,i,()=>{n.box(1,.12,.9,"#b6a691"),n.box(.72,.62,.55,"#c4372a",{y:.12,z:-.1}),n.box(.34,.4,.03,"#ffcf7a",{y:.2,z:.19,bucket:"glow"}),Gs(n,0,.74,-.05,1,.8,"#d9822b",{h:.3}),an(n,-.3,.62,.3,"#d7262e",.55),an(n,.3,.62,.3,"#d7262e",.55),n.box(.16,.14,.12,"#6d5a3f",{y:.12,z:.32}),n.mark("incense",0,.3,.32),We(n,1,-.25,s,"banyan",.62),n.box(.5,.03,.34,"#8b5e3c",{x:.95,y:.3,z:.65}),n.box(.04,.3,.04,"#5c4030",{x:.95,z:.65});for(const[o,r,a]of[[.6,.65,Oe/2],[1.3,.65,-Oe/2]])n.cyl(.07,.08,.18,6,"#2a6fdb",{x:o,z:r}),n.mark("sit",o,.18,r,{ry:a,seat:"stool",elder:!0})})}function gy(n,t,e,i,s){n.at(t,0,e,i,()=>{n.box(2.5,1.2,1.7,"#f4f4f0"),n.box(2.36,.82,.03,"#eef8ff",{y:.12,z:.86,bucket:"glow"}),n.box(2.54,.13,.05,"#2a6fdb",{y:1,z:.86}),n.box(2.54,.05,.05,"#7fd1ff",{y:.95,z:.86}),n.box(.5,.25,.05,"#ffffff",{x:.85,y:1.22,z:.82,bucket:"neon"}),n.box(2.6,.06,1.85,"#d9d9d4",{y:1.2}),n.mark("pool",0,.03,1.2,{r:1.6,color:"#d8f0ff"}),n.mark("halo",0,.6,.95,{color:"#e8f6ff",size:2.2}),is(n,-.7,1.25,Oe);for(let o=0;o<3;o++)_a(n,.3+o*.25,1.35,Oe+(s()-.5)*.2,ct(s,ie.scooter));n.box(.22,.4,.22,"#3d8c5c",{x:1.1,z:1}),n.box(.22,.4,.22,"#3b78c2",{x:.85,z:1}),n.mark("stand",-.3,0,1.05,{ry:0})})}function xy(n,t,e,i){n.at(t,0,e,i,()=>{n.box(.95,.025,1.5,"#2b2f36");for(let s=0;s<5;s++)n.box(.9,.012,.12,"#565d66",{y:.02,z:-.5+s*.22});n.box(.07,.42,1.5,"#c9ced3",{x:-.51}),n.box(.07,.42,1.5,"#c9ced3",{x:.51}),n.box(1.09,.42,.07,"#c9ced3",{z:-.75}),n.box(1.25,.05,1.7,"#9fd0ef",{y:1.15,rx:.1});for(const s of[-1,1])n.box(.05,1.18,.05,"#8d949b",{x:s*.58,z:.72});n.box(.06,1.35,.06,"#8d949b",{x:.78,z:.9}),n.box(.3,.3,.06,"#0070bd",{x:.78,y:1.35,z:.9,bucket:"neon"}),n.mark("halo",.78,1.5,.95,{color:"#7cc4ff",size:1}),n.mark("stand",-.2,0,1,{ry:0})})}function lh(n,t,e,i,s){n.at(t,0,e,i,()=>{n.box(1.3,.04,.5,"#6d7680",{y:1}),n.box(1.2,.9,.03,"#bfe3f7",{y:.08,z:-.22});for(const o of[-1,1])n.box(.05,1,.05,"#6d7680",{x:o*.6,z:-.2});n.box(.05,1.2,.05,"#6d7680",{x:.85,z:.2}),n.box(.32,.28,.04,"#2a6fdb",{x:.85,y:1.15,z:.2}),n.box(.08,.16,.04,"#ffdd55",{x:.85,y:.7,z:.22,bucket:"neon"})}),is(n,t,e,i)}function vy(n,t,e,i,s,o,r=0){n.at(t,0,e,r,()=>{n.box(i,.015,s,"#6b7076",{y:.005});const a=Math.max(1,Math.floor(s/.7));for(let l=0;l<a;l++){const c=-s/2+(l+.5)*(s/a);n.box(i-.1,.01,.025,"#f4f4ee",{y:.015,z:c+.3});for(let f=-i/2+.15;f<i/2-.1;f+=.24)n.box(.02,.01,.55,"#f4f4ee",{x:f-.12,y:.015,z:c}),o()<.82&&_a(n,f,c,l%2?Oe:0,ct(o,ie.scooter))}})}function _y(n,t,e,i,s,o){n.at(t,0,e,0,()=>{n.box(i,.02,s,"#8fc47a",{y:0}),n.box(1.2,.08,1.2,"#b6a691",{x:-i*.18,z:-s*.1});for(const[r,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.cyl(.04,.04,.85,6,"#b3261e",{x:-i*.18+r*.45,y:.08,z:-s*.1+a*.45});n.hip(1.4,.5,1.4,"#2f8f5b",{x:-i*.18,y:.93,z:-s*.1}),n.ball(.07,"#e0a526",{x:-i*.18,y:1.45,z:-s*.1}),n.mark("sit",-i*.18-.25,.25,-s*.1+.2,{ry:.5,seat:"bench",elder:!0}),n.mark("sit",-i*.18+.25,.25,-s*.1+.2,{ry:-.5,seat:"bench",elder:!0}),n.box(.05,.6,.05,"#f2c14e",{x:i*.25,z:s*.15}),n.box(.5,.05,.05,"#f2c14e",{x:i*.25,y:.6,z:s*.15}),n.cylC(.12,.04,10,"#2a6fdb",{x:i*.25+.2,y:.45,z:s*.15,rx:Oe/2}),n.mark("stand",i*.25-.15,0,s*.15+.25,{ry:Oe,elder:!0}),We(n,i*.3,-s*.3,o,"round",1.1),We(n,-i*.38,s*.32,o,"round",.9),is(n,i*.05,s*.36,Oe)})}function rf(n,t,e,i,s=3){for(let o=0;o<s;o++){const r=t+o*.18;n.cyl(.07,.06,.12,6,ct(i,["#b5523b","#7a5a45","#2f6f9f"]),{x:r,z:e}),n.ball(.1,ct(i,ie.leaf),{x:r,y:.2,z:e,sy:.9})}}const Nt=Math.PI;function Vd(n,t,e,i){n.at(t,0,e,i,()=>{n.box(.26,.13,.52,"#f6c700",{y:.06}),n.box(.24,.1,.28,"#f6c700",{y:.19,z:-.03}),n.box(.245,.07,.29,"#2a3340",{y:.2,z:-.03}),n.box(.1,.04,.06,"#ffffff",{y:.29,z:-.03});for(const[s,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.cylC(.05,.04,8,"#1a1a1a",{x:s*.13,y:.05,z:o*.17,rz:Nt/2})})}function rl(n,t,e,i,s,o=8){for(let r=0;r<i;r++){const a=t*(1-r/(i+.6));n.cyl(a*.97,a,e/i,o,s[r%s.length],{y:r*e/i,ry:r*.3})}}function yy(n,t,e,i,s,o={}){n.at(t,.02,e,i,()=>{const r=o.hull||"#f4f1ea";n.box(.42,.16,1,r,{y:0}),n.box(.3,.12,.25,r,{y:.02,z:.58,rx:-.5}),n.box(.44,.04,1.02,o.stripe||ct(s,["#1f4e9c","#c8102e","#2a9d8f"]),{y:.1}),n.box(.3,.26,.38,"#e8e2d6",{y:.16,z:-.12}),n.box(.31,.08,.3,"#9fd0ef",{y:.3,z:-.1,bucket:"glow"}),n.box(.34,.04,.42,o.roof||"#c8102e",{y:.42,z:-.12})})}function My(n,t,e,i){n.at(t,.02,e,i,()=>{n.box(.42,.18,.6,"#fbfbf7",{y:0}),n.ball(.2,"#fbfbf7",{y:.16,z:-.2,sx:1.1,sy:.7}),n.box(.08,.42,.08,"#fbfbf7",{y:.16,z:.24,rx:-.2}),n.ball(.09,"#fbfbf7",{y:.6,z:.3}),n.cone(.04,.1,6,"#f28c28",{y:.58,z:.4,rx:Nt/2}),n.box(.3,.04,.22,"#ff8fab",{y:.2,z:-.05})})}const Ei={taipei101:{name:"台北 101",slots:["BR","BL","BC"],build(n,{rng:t}){const e="#6f9a94",i="#a9c9c2";n.box(2.2,.55,2,"#a6b0ae"),n.box(2.24,.05,2.04,"#d6dcda",{y:.55}),n.box(1.5,.9,1.5,e,{y:.55});let s=1.45;for(let o=0;o<8;o++)n.cyl(.8,.6,.94,4,e,{y:s,ry:Nt/4}),n.cyl(.83,.83,.05,4,i,{y:s+.92,ry:Nt/4}),n.box(.12,.12,.04,"#d9b44a",{y:s+.35,z:.47}),s+=.97;n.cyl(.42,.52,.6,4,e,{y:s,ry:Nt/4}),s+=.6,n.cyl(.24,.3,.5,4,i,{y:s,ry:Nt/4}),s+=.5,n.cyl(.025,.08,1.7,6,"#e3e7ea",{y:s}),n.mark("beacon101",0,1.45,0,{top:s+1.7}),n.mark("stand",-.8,.55,1.1,{}),n.mark("stand",.6,.55,1.15,{}),We(n,-1.3,1.1,t,"round",.7),We(n,1.25,1.1,t,"round",.7)}},raoheGate:{name:"饒河街夜市",slots:["FL","FR"],build(n,{rng:t,slot:e}){for(const i of[-1,1])n.box(.26,2.2,.26,"#b3261e",{x:i*1.2,z:.4}),n.box(.38,.22,.38,"#d9a520",{x:i*1.2,z:.4});n.box(2.8,.42,.3,"#b3261e",{y:2,z:.4}),n.box(2.3,.28,.04,"#ffd23f",{y:2.07,z:.57,bucket:"neon"}),n.mark("halo",0,2.2,.7,{color:"#ffcf3f",size:2.4}),Gs(n,0,2.42,.4,3.2,.7,"#2f8f5b",{h:.38}),bn(n,[-1.2,1.85,.62],[1.2,1.85,.62],5,t,{s:.55}),Us(n,-.75,-.55,0,t),Us(n,.85,-.55,0,t),n.cyl(.26,.3,.55,10,"#a0552e",{x:.05,z:-.15}),n.cyl(.2,.24,.05,10,"#ff7b2e",{x:.05,y:.55,z:-.15,bucket:"neon"}),n.mark("halo",.05,.6,-.15,{color:"#ff8a3d",size:1.3}),n.mark("steam",.05,.65,-.15,{});for(let i=0;i<5;i++)n.mark("stand",-1+i*.5,0,.2+i%2*.35,{ry:Nt*(i%2)})}},mainStation:{name:"台北車站",slots:["BC"],build(n,{rng:t}){n.box(4.2,.1,3,"#c9c2b4"),n.box(3.6,1.5,2.2,"#e6d7b5",{y:.1,z:-.2});for(let e=0;e<6;e++)n.box(.32,.95,.03,"#ffe7b8",{x:-1.5+e*.6,y:.35,z:.91,bucket:"glow"});n.box(1.3,.85,.08,"#cfeaff",{y:.1,z:.93,bucket:"glow"}),n.box(3.9,.1,2.5,"#d8c7a2",{y:1.6,z:-.2}),n.hip(3.9,1,2.4,"#55654f",{y:1.7,z:-.2}),n.box(1.3,.06,.06,"#d9a520",{y:2.55,z:-.2});for(let e=0;e<4;e++)Vd(n,-1.4+e*.6,1.2,Nt/2);for(let e=0;e<6;e++)n.mark("stand",-1.6+e*.6,.1,1.15+e%2*.25,{ry:e%3-1});n.mark("halo",0,1,1.1,{color:"#e8f4ff",size:2.6})}},izakayaLanterns:{name:"條通",slots:["BL","BR","FL","FR"],build(n,{rng:t}){n.box(3,.02,2.2,"#5d5650");for(let e=0;e<3;e++){const i=-1+e*1,s=ct(t,["#6b4a32","#5a3d2b","#7a5a40"]);n.box(.92,1.6,1.1,s,{x:i,z:-.5}),n.box(.8,.75,.03,ct(t,["#ffd08a","#ffc27a","#ffe0a8"]),{x:i,y:.08,z:.06,bucket:"glow"}),$d(n,i,.62,.08,.7,ct(t,["#1f2a44","#5a1f1f","#e8e0d0"])),n.gable(.98,.3,1.2,"#3b3b3b",{x:i,y:1.6,z:-.5}),n.box(.12,.5,.3,"#fff7e6",{x:i+.38,y:.9,z:.2,bucket:"neon"}),n.mark("halo",i+.38,1.15,.3,{color:"#fff2d0",size:1}),an(n,i-.3,1.2,.2,e%2?"#f4efe6":"#d7262e",.6)}bn(n,[-1.4,1.75,.5],[1.4,1.75,.9],6,t,{s:.5,colors:["#d7262e","#f4efe6"]});for(let e=0;e<3;e++)n.mark("stand",-.9+e*.9,0,.55,{ry:Nt})}},deptStore:{name:"東區百貨",slots:["BC","BR","BL"],build(n,{rng:t}){n.box(3.6,4.8,2.2,"#dcdcd8",{z:-.2});for(let e=0;e<6;e++)n.box(3.3,.45,.03,e%2?"#ffe7c4":"#d8f0ff",{y:.35+e*.75,z:.91,bucket:"glow"});n.box(1.6,1.2,.05,"#ff5fa2",{x:.7,y:2.4,z:.95,bucket:"neon"}),n.box(1.5,.35,.06,"#5ef0ff",{x:.7,y:2.55,z:.96,bucket:"neon"}),n.box(1.5,.2,.06,"#ffd23f",{x:.7,y:3.1,z:.96,bucket:"neon"}),n.mark("halo",.7,2.9,1.2,{color:"#ff7ad9",size:4}),n.box(3.8,.12,2.4,"#bdbdb8",{y:4.8,z:-.2}),n.box(2.4,.08,.6,"#cfd4d8",{y:1,z:1.15});for(let e=0;e<5;e++)n.mark("stand",-1.4+e*.7,0,1.25+e%2*.2,{ry:e%3-1})}},neon:{name:"霓虹街",slots:["BR","BL","FR","FL"],build(n,{rng:t}){const e=["#ff4fd8","#5ef0ff","#ffd23f","#a6ff4f","#ff7a45","#b388ff"];for(let i=0;i<2;i++){const s=-.7+i*1.45,o=2.6+i*.7;n.box(1.35,o,1.6,ct(t,ie.tile),{x:s,z:-.3}),n.box(1.2,.9,.03,ct(t,["#ffe0a8","#f3c6ff"]),{x:s,y:.1,z:.51,bucket:"glow"});for(let r=1;r<3;r++)lo(n,s,1.1+r*.65,.51,.8,.35,t);for(let r=0;r<3;r++){const a=ct(t,e),l=1+r*.75+t()*.2;n.box(.08,.6,.36,a,{x:s+.62-r*.04,y:l,z:.7,bucket:"neon"}),n.mark("halo",s+.62,l+.3,.75,{color:a,size:1.5})}}n.box(2.4,.3,.06,"#ff4fd8",{x:0,y:2.9,z:.55,bucket:"neon"}),n.mark("halo",0,3.05,.7,{color:"#ff4fd8",size:2.6});for(let i=0;i<3;i++)n.mark("stand",-.8+i*.8,0,.9,{ry:Nt})}},redHouse:{name:"西門紅樓",slots:["BL","BR","FL"],build(n,{rng:t}){const e="#a83a2a",i="#efe3cf";n.box(3,.08,2.4,"#c9b9a0"),n.cyl(1,1,1.65,8,e,{x:-.3,y:.08,z:.25,ry:Nt/8});for(const s of[.75,1.65])n.cyl(1.04,1.04,.08,8,i,{x:-.3,y:s,z:.25,ry:Nt/8});for(let s=0;s<8;s++){const o=s/8*Nt*2,r=t()<.7?"#ffd98a":"#34445e";for(const a of[.25,1])n.box(.26,.4,.03,r,{x:-.3+Math.sin(o)*.93,y:a,z:.25+Math.cos(o)*.93,ry:o,bucket:"glow"})}n.cyl(.3,1.1,.6,8,"#4a3b36",{x:-.3,y:1.73,z:.25,ry:Nt/8}),n.cyl(.2,.22,.32,8,i,{x:-.3,y:2.3,z:.25,ry:Nt/8}),n.cone(.26,.42,8,"#4a3b36",{x:-.3,y:2.62,z:.25,ry:Nt/8}),n.box(1.6,1.15,1.1,e,{x:.7,y:.08,z:-.65}),n.gable(1.7,.4,1.2,"#4a3b36",{x:.7,y:1.23,z:-.65});for(let s=0;s<3;s++)n.box(.24,.42,.03,"#ffd98a",{x:.25+s*.45,y:.4,z:-.09,bucket:"glow"});n.mark("halo",-.3,1.2,1.3,{color:"#ffd9a0",size:2.6});for(let s=0;s<4;s++)n.mark("stand",-1.2+s*.6,.08,1.35,{ry:Nt})}},longshanTemple:{name:"龍山寺",slots:["BC"],build(n,{rng:t}){n.box(4,.1,3,"#c4b6a0"),n.box(2.6,1.6,1,"#d8c8b0",{y:.1,z:-1});for(const e of[-1,-.35,.35,1])n.cyl(.06,.06,1.6,8,"#b3261e",{x:e,y:.1,z:-.48});Gs(n,0,1.7,-1,3,1.3,"#d9822b",{h:.5}),Gs(n,0,2.25,-1,2.2,.9,"#d9822b",{h:.42}),xc(n,0,.45,0,t,1.05,{roof:"#d9822b"}),bn(n,[-1.8,1.6,1.4],[1.8,1.6,1.4],7,t,{s:.5});for(let e=0;e<6;e++)n.mark("stand",-1.5+e*.6,.1,1.45+e%2*.2,{ry:Nt})}},temple:{name:"廟口",slots:["BL","BR","BC"],build(n,{rng:t}){xc(n,0,-.1,0,t,.9),We(n,1.45,-.6,t,"banyan",.5)}},outlet:{name:"林口商場",slots:["BC","BR"],build(n,{rng:t}){n.box(4,.08,3,"#d9d6cf"),n.box(3.8,1.5,2,"#f2efe8",{y:.08,z:-.4}),n.cylC(1,3.9,12,"#e3ddd2",{y:1.58,z:-.4,rz:Nt/2,sx:1,sz:1}),n.box(3.9,1,2.1,"#f2efe8",{y:.58,z:-.4});for(let i=0;i<7;i++)n.box(.04,1.1,.04,"#a47148",{x:-1.8+i*.6,y:.3,z:.62});n.box(3.4,.8,.03,"#ffe9c7",{y:.2,z:.61,bucket:"glow"});const e=["#e63946","#2a9d8f","#ffb703","#457b9d","#f4a261"];for(let i=0;i<5;i++)n.box(.03,1.6,.03,"#888",{x:-1.6+i*.8,z:1.2}),n.box(.03,.5,.3,e[i],{x:-1.6+i*.8,y:1.05,z:1.36});for(let i=0;i<6;i++)n.mark("stand",-1.5+i*.6,.08,.95+i%2*.2,{ry:i%3-1});We(n,-1.8,1,t,"palm",.7),We(n,1.8,1,t,"palm",.7)}},nightMarketHall:{name:"士林夜市",slots:["BC"],build(n,{rng:t}){n.box(4,.06,3,"#8a8580"),n.box(3.4,1.4,1.8,"#c45c3b",{y:.06,z:-.5}),n.gable(3.6,.8,2,"#7a3b2a",{y:1.46,z:-.5}),n.box(2.8,.75,.03,"#ffd08a",{y:.12,z:.41,bucket:"glow"}),n.box(2.6,.35,.05,"#ffd23f",{y:1,z:.43,bucket:"neon"}),n.mark("halo",0,1.15,.6,{color:"#ffcf3f",size:3.2});const e=["#d7262e","#f2a516","#1f4e9c","#2a9d8f"];for(let i=0;i<4;i++)Us(n,-1.5+i*1,.95,0,t,{umbrella:e[i]});bn(n,[-1.9,1.9,1.5],[1.9,1.9,1.5],9,t,{bulbs:!0,sag:.2});for(let i=0;i<7;i++)n.mark("stand",-1.7+i*.55,.06,1.45+i%2*.22,{ry:Nt*(i%2)})}},palms:{name:"椰林大道",slots:["FL","FR","FC","BL","BR"],build(n,{rng:t,island:e}){n.box(3,.02,.6,"#d9cfbd",{z:0});for(let i=0;i<4;i++)We(n,-1.2+i*.8,-.55,t,"palm",.95),We(n,-1.2+i*.8,.55,t,"palm",.95);if(e.id==="gongguan")for(let i=0;i<6;i++){const s=-1+i*.32;n.at(s,0,.15,.3,()=>{n.cylC(.08,.02,8,"#2a2a2a",{z:.14,y:.08,rz:Nt/2}),n.cylC(.08,.02,8,"#2a2a2a",{z:-.14,y:.08,rz:Nt/2}),n.box(.02,.02,.3,ct(t,["#e63946","#1d3557","#2a9d8f","#f4f1de"]),{y:.14})})}}},officeTowers:{name:"內湖科技園區",slots:["BC","BR"],build(n,{rng:t}){n.box(4,.06,3,"#cfd3d6");const e=[[-1.2,-.3,1.2,5.6],[.35,-.6,1.3,7],[1.5,.2,.9,4.2]];for(const[i,s,o,r]of e){const a=ct(t,["#5c7c92","#6a8aa0","#4f6f86"]);n.box(o,r,o,a,{x:i,z:s});for(let l=0;l<Math.floor(r/.5);l++)n.box(o+.02,.05,o+.02,"#c9d3da",{x:i,y:.4+l*.5,z:s}),t()<.75&&n.box(o-.1,.25,.02,ct(t,["#e8f4ff","#fff3d6","#dcefff"]),{x:i,y:.5+l*.5,z:s+o/2+.01,bucket:"glow"});n.box(o*.6,.3,o*.6,"#9fb2bf",{x:i,y:r,z:s})}for(let i=0;i<6;i++)n.mark("stand",-1.6+i*.6,.06,1.2,{ry:Nt*(i%2)})}},lake:{name:"碧湖公園",slots:["FL","FR"],water:"pond",build(n,{rng:t}){n.cyl(1.45,1.45,.04,14,"#4b9fd1",{y:0}),n.cyl(1.55,1.6,.03,14,"#b9ad94",{y:-.005});for(let e=0;e<6;e++){const i=t()*Nt*2,s=.5+t()*.7;n.cyl(.12,.12,.02,7,"#5fae55",{x:Math.sin(i)*s,y:.04,z:Math.cos(i)*s}),t()<.4&&n.ball(.04,"#ff9fc4",{x:Math.sin(i)*s,y:.08,z:Math.cos(i)*s})}for(let e=0;e<7;e++){const i=e/6,s=Math.sin(i*Nt)*.35;n.box(.32,.05,.36,"#c8382e",{x:-1.4+i*2.8*.5+.7,y:.06+s,z:-.2+i*.02})}n.hip(.9,.4,.9,"#2f8f5b",{x:1.15,y:.75,z:-.85});for(const[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.cyl(.03,.03,.75,6,"#b3261e",{x:1.15+e*.3,z:-.85+i*.3});We(n,-1.3,-.9,t,"round",.9),is(n,-.9,1.2,Nt)}},expoHall:{name:"南港展覽館",slots:["BC"],build(n,{rng:t}){n.box(4,.06,3,"#cfd3d6"),n.box(3.8,1.6,2.1,"#e9ecef",{y:.06,z:-.35});for(let e=0;e<6;e++)n.box(.66,.12,2.3,e%2?"#9fb7c9":"#bcd0de",{x:-1.6+e*.64,y:1.68+e%2*.12,z:-.35,rz:(e%2?-1:1)*.12});n.box(3.4,1.2,.03,"#d8efff",{y:.2,z:.71,bucket:"glow"});for(let e=0;e<4;e++)n.box(.5,.9,.04,ct(t,["#e63946","#2a9d8f","#ffb703","#457b9d"]),{x:-1.5+e,y:1.6,z:.95});for(let e=0;e<7;e++)n.mark("stand",-1.7+e*.55,.06,1.15+e%2*.25,{ry:e%3-1})}},baroqueRow:{name:"迪化街",slots:["BL","BR","BC"],build(n,{rng:t}){const e=["#a9533a","#b5603f","#c98a5a","#9c4a33"];for(let i=0;i<3;i++){const s=-1+i*1,o=e[i%e.length],r=2+i%2,a=1.2+(r-1)*.95;n.box(.98,a,1.8,o,{x:s,z:-.2}),n.box(.7,.8,.03,ct(t,["#ffd98a","#ffe0a8"]),{x:s,y:.08,z:.71,bucket:"glow"});for(let l=1;l<r;l++){const c=1.2+(l-1)*.95+.25;n.box(.4,.45,.03,t()<.7?"#ffd98a":"#34445e",{x:s,y:c,z:.71,bucket:"glow"}),n.cylC(.2,.03,10,"#efe3cf",{x:s,y:c+.45,z:.72,rx:Nt/2}),n.box(.98,.06,.06,"#efe3cf",{x:s,y:c-.3,z:.72})}n.box(.98,.35,.12,o,{x:s,y:a,z:.64}),n.gable(.14,.35,.6,o,{x:s,y:a+.35,z:.64,ry:Nt/2}),n.cylC(.09,.03,10,"#efe3cf",{x:s,y:a+.47,z:.71,rx:Nt/2}),n.ball(.06,"#efe3cf",{x:s-.44,y:a+.42,z:.64}),n.ball(.06,"#efe3cf",{x:s+.44,y:a+.42,z:.64})}for(let i=0;i<5;i++)n.cyl(.11,.13,.2,8,ct(t,["#e8d3a8","#d4a373","#b5838d","#c9b37e"]),{x:-1.3+i*.55,z:.95});for(let i=0;i<3;i++)n.mark("stand",-.9+i*.9,0,1.2,{ry:Nt})}},nightStalls:{name:"夜市",slots:["FR","FL","FC"],build(n,{rng:t}){n.box(3,.02,2.2,"#77716b");const e=["#d7262e","#f2a516","#1f4e9c","#2a9d8f","#e76f51","#7b4b94"];for(let i=0;i<3;i++)Us(n,-1+i*1,-.55,0,t,{umbrella:e[i]}),Us(n,-1+i*1,.75,Nt,t,{umbrella:e[i+3]});bn(n,[-1.5,1.85,.1],[1.5,1.85,.1],9,t,{bulbs:!0,sag:.18,colors:["#ffe3a1","#ffd0d0","#fff3b0"]}),Bn(n,1.2,.1,t,{n:3,round:!1});for(let i=0;i<6;i++)n.mark("stand",-1.2+i*.5,0,.1+i%2*.12,{ry:i%2*Nt})}},hotspring:{name:"北投溫泉",slots:["BC"],extra:{slot:"FL",build:"thermalValley"},build(n,{rng:t}){n.box(3.8,.3,2.6,"#9a9488",{z:-.2}),n.box(3.4,1,2,"#6b4a32",{y:.3,z:-.3});for(let e=0;e<5;e++)n.box(.5,.55,.03,"#ffd9a0",{x:-1.3+e*.65,y:.45,z:.71,bucket:"glow"});n.box(3.6,.1,2.2,"#efe6d6",{y:1.3,z:-.3}),n.box(2.6,.75,1.5,"#efe6d6",{y:1.4,z:-.4});for(let e=0;e<4;e++)n.box(.4,.4,.03,"#ffd9a0",{x:-.95+e*.63,y:1.55,z:.36,bucket:"glow"});n.hip(3,.7,1.9,"#3a3d42",{y:2.15,z:-.4}),n.gable(1.2,.5,.2,"#3a3d42",{y:1.95,z:.5}),an(n,-1.4,1,.85,"#f4efe6",.6),an(n,1.4,1,.85,"#f4efe6",.6),n.mark("steam",-1.6,1.3,-1.2,{}),n.mark("steam",1.6,1.3,-1.2,{});for(let e=0;e<3;e++)n.mark("stand",-.8+e*.8,.3,1,{ry:Nt})}},thermalValley:{name:"地熱谷",slots:[],build(n,{rng:t}){n.cyl(1.35,1.45,.05,11,"#b8d8c8",{y:0}),n.cyl(1.2,1.2,.04,11,"#8fd3c3",{y:.03});for(let e=0;e<9;e++){const i=e/9*Nt*2;n.ball(.18+t()*.12,"#8a8378",{x:Math.sin(i)*1.35,y:.06,z:Math.cos(i)*1.35,sy:.6})}for(let e=0;e<10;e++){const i=e/10*Nt*2;n.box(.03,.4,.03,"#5c4a3a",{x:Math.sin(i)*1.6,z:Math.cos(i)*1.6})}for(let e=0;e<4;e++)n.mark("steam",(t()-.5)*1.4,.1,(t()-.5)*1.2,{big:!0});n.mark("stand",.4,0,1.75,{ry:Nt}),n.mark("stand",-.5,0,1.7,{ry:Nt})}},jiufen:{name:"九份老街",slots:["BC"],build(n,{rng:t}){rl(n,2.4,2.6,4,["#7fae67","#86b56e","#79a862","#8cbb73"],9);const e=[[-1.4,.2,.8,0],[1.3,.3,.8,1],[-.9,-.8,1.45,1],[.95,-.6,1.45,2],[-.3,-1.4,2,2],[.5,.65,.2,0]];for(const[i,s,o]of e){const r=ct(t,["#8a5a3c","#6b4a32","#d9cdb8","#a67c52"]);n.box(.75,.7,.6,r,{x:i,y:o,z:s}),n.gable(.85,.28,.7,ct(t,["#3a3d42","#2f4f4f","#4a3b36"]),{x:i,y:o+.7,z:s}),n.box(.5,.3,.03,"#ffcf8a",{x:i,y:o+.2,z:s+.31,bucket:"glow"}),an(n,i-.25,o+.55,s+.38,"#d7262e",.45),an(n,i+.25,o+.55,s+.38,"#d7262e",.45)}for(let i=0;i<8;i++)n.box(.45,.1,.3,"#b9b2a6",{x:.05,y:i*.3,z:1.6-i*.38});n.box(1.1,.9,.8,"#5a3d2b",{x:.1,y:2.6,z:-.5}),n.box(1,.4,.03,"#ffc27a",{x:.1,y:2.85,z:-.09,bucket:"glow"}),n.gable(1.25,.4,.95,"#3a3d42",{x:.1,y:3.5,z:-.5});for(let i=0;i<5;i++)an(n,-.35+i*.22,3.35,-.02,"#d7262e",.4);for(let i=0;i<5;i++)n.mark("stand",-.3+i*.2,.3*i,1.55-i*.38,{ry:Nt})}},queenHead:{name:"野柳女王頭",slots:["FR"],water:"sea",build(n,{rng:t}){n.cyl(1.2,1.5,.3,9,"#c9a77a",{x:.1,y:-.12,z:-.2});for(let e=0;e<6;e++)n.ball(.2+t()*.15,"#b89268",{x:-.9+t()*1.8,y:.1,z:-.8+t()*1,sy:.6});n.cyl(.11,.2,.75,8,"#c19a6b",{x:.2,y:.15,z:.1}),n.ball(.38,"#d1a876",{x:.28,y:1.08,z:.08,sx:.85,sy:.75,sz:1.15},1),n.ball(.2,"#c49a6c",{x:.36,y:1.33,z:.25,sy:.6},1),n.mark("stand",-.5,.18,.4,{ry:.6}),n.mark("stand",-.7,.18,0,{ry:1.2})}},loversBridge:{name:"淡水情人橋",slots:["FR"],water:"river",build(n,{rng:t}){for(let e=0;e<9;e++){const i=e/8,s=-1.5+i*3,o=.12+Math.sin(i*Nt)*.45;n.box(.5,.06,.38,"#f4f2ee",{x:0,y:o,z:s}),n.box(.04,.16,.38,"#d9d9d9",{x:-.25,y:o+.06,z:s}),n.box(.04,.16,.38,"#d9d9d9",{x:.25,y:o+.06,z:s})}n.rod([.3,.2,-1.2],[.55,2.4,.2],.1,"#f8f8f8");for(let e=0;e<6;e++)n.rod([.55,2.3-e*.12,.2],[.22,.6,-1.2+e*.5],.012,"#dcdcdc");n.mark("halo",.55,2.4,.2,{color:"#cfe6ff",size:1.6}),n.mark("stand",0,.6,0,{ry:Nt/2}),n.mark("stand",.1,.55,.4,{ry:-Nt/2})}},boats:{name:"淡水渡船頭",slots:["FL"],water:"river",build(n,{rng:t}){n.box(1,.12,.4,"#8b6a4a",{x:-.6,y:0,z:-1.05});for(let e=0;e<3;e++)n.box(.06,.3,.06,"#5c4030",{x:-1+e*.4,y:-.2,z:-.9});n.mark("boat",-.3,0,-.2,{ry:Nt/2,range:1.2}),n.mark("boat",.9,0,.5,{ry:-Nt/2,range:.8}),n.mark("stand",-.9,.12,-1.1,{ry:Nt})}},stationTower:{name:"板橋車站",slots:["BC","BR"],build(n,{rng:t}){n.box(4,.06,3,"#cfd3d6"),n.box(2.6,1.8,2,"#9fb7c9",{x:-.5,z:-.3});for(let e=0;e<3;e++)n.box(2.4,.35,.03,"#e8f4ff",{x:-.5,y:.25+e*.55,z:.71,bucket:"glow"});n.box(2.8,.15,2.2,"#e3e7ea",{x:-.5,y:1.8,z:-.3}),n.box(1.1,6.2,1.1,"#7f9aaa",{x:1.35,z:-.6});for(let e=0;e<11;e++)n.box(1.12,.06,1.12,"#d8e2e8",{x:1.35,y:.5+e*.55,z:-.6});for(let e=0;e<11;e++)t()<.7&&n.box(.9,.25,.02,"#fff3d6",{x:1.35,y:.6+e*.55,z:-.04,bucket:"glow"});n.box(.8,.5,.8,"#b8c7d1",{x:1.35,y:6.2,z:-.6}),n.ball(.06,"#ff3b30",{x:1.35,y:6.8,z:-.6,bucket:"neon"});for(let e=0;e<6;e++)n.mark("stand",-1.6+e*.6,.06,1.1+e%2*.2,{ry:e%3-1})}},hillHouses:{name:"寶藏巖",slots:["BL","BR","BC"],build(n,{rng:t}){rl(n,1.6,1.4,3,["#7fae67","#8cbb73","#79a862"],8);const e=[[-.8,.5,0],[.7,.4,0],[-.4,-.3,.47],[.5,-.4,.47],[0,-.9,.93]];for(const[i,s,o]of e){const r=ct(t,["#f2d7a7","#cde2d0","#f2b8a2","#bcd4e6","#efe6d6"]);n.box(.6,.55,.5,r,{x:i,y:o,z:s}),n.box(.65,.05,.55,ct(t,ie.sheet),{x:i,y:o+.55,z:s}),n.box(.24,.22,.03,t()<.6?"#ffd98a":"#34445e",{x:i,y:o+.18,z:s+.26,bucket:"glow"}),t()<.5&&ef(n,i,o+.5,s+.3,.4,t)}for(let i=0;i<4;i++)n.box(.25,.08,.22,"#c9c1b4",{x:.15,y:i*.32,z:1-i*.35});n.mark("stand",.15,.4,.6,{ry:Nt})}},teaTerraces:{name:"貓空茶園",slots:["BC"],build(n,{rng:t}){rl(n,2.6,2.8,5,["#5f9f4f","#4f8f45","#67a956","#4a8a40","#5a9a4b"],10);for(let e=0;e<4;e++){const i=2.3-e*.45,s=(e+1)*.56;for(let o=0;o<9;o++){const r=-Nt*.75+o/8*Nt*1.5;n.ball(.13,"#3e7d36",{x:Math.sin(r)*i,y:s,z:Math.cos(r)*i,sy:.7})}}n.box(1.2,.7,.9,"#7a5a40",{y:2.8,z:-.3}),n.box(1,.35,.03,"#ffc27a",{y:3,z:.16,bucket:"glow"}),n.gable(1.35,.4,1.05,"#3a3d42",{y:3.5,z:-.3}),n.box(1.3,.05,.6,"#8b6a4a",{y:2.8,z:.45});for(let e=0;e<4;e++)an(n,-.45+e*.3,3.35,.2,"#d7262e",.4);Bn(n,.35,.5,t,{n:2,round:!0}),n.mark("gondolaTop",1,3.15,.2,{}),n.mark("sit",-.3,2.95,.55,{ry:Nt,seat:"stool"})}},gondola:{name:"貓空纜車",slots:["FR","FL"],build(n,{rng:t}){n.box(1.6,1.2,1.2,"#e9ecef",{y:0,z:-.2}),n.box(1.4,.5,.03,"#d8efff",{y:.3,z:.41,bucket:"glow"}),n.box(1.8,.12,1.4,"#2f8f5b",{y:1.2,z:-.2}),n.cylC(.4,.15,14,"#59606a",{y:1.5,z:-.2}),n.box(.15,1.2,.15,"#9aa0a6",{x:-.6,y:1.32,z:-.6}),n.mark("gondolaBase",0,1.6,-.2,{}),n.mark("stand",-.4,0,.75,{ry:Nt}),n.mark("stand",.3,0,.8,{ry:Nt})}},brickArcade:{name:"三峽老街",slots:["BL","BC","BR"],build(n,{rng:t}){const e="#b0573c";n.box(3,2,1.4,e,{z:-.5}),n.box(3,.04,.6,"#c9b08f",{z:.5});for(let i=0;i<4;i++){const s=-1.5+i;n.box(.22,1.25,.22,e,{x:s+(i===0?.11:0),z:.7})}for(let i=0;i<3;i++){const s=-1+i;n.box(.8,.7,.03,ct(t,["#ffd98a","#ffe0a8"]),{x:s,y:.1,z:.22,bucket:"glow"}),n.cylC(.4,.22,12,e,{x:s,y:1.1,z:.7,rx:Nt/2,sy:.22}),n.box(.35,.4,.03,t()<.7?"#ffd98a":"#34445e",{x:s,y:1.45,z:.81,bucket:"glow"}),n.box(.98,.45,.14,e,{x:s,y:2,z:.75}),n.gable(.14,.3,.5,"#efe3cf",{x:s,y:2.45,z:.75,ry:Nt/2})}n.box(3,.9,.22,e,{y:1.25,z:.7}),n.box(3.04,.06,.26,"#efe3cf",{y:1.25,z:.7}),n.box(.6,.45,.35,"#d9a520",{x:.9,z:1.05}),n.box(.55,.15,.3,"#fff1c4",{x:.9,y:.45,z:1.05,bucket:"glow"});for(let i=0;i<3;i++)n.mark("stand",-.9+i*.8,.04,.95,{ry:Nt})}},kilns:{name:"鶯歌陶瓷",slots:["BR","BL","FR","FL"],build(n,{rng:t}){n.cylC(.75,1.8,10,"#a85a3c",{x:-.4,y:0,z:-.2,rz:Nt/2}),n.box(1.8,.05,1.5,"#8a8378",{x:-.4,y:-.02,z:-.2}),n.box(.5,.5,.05,"#ff8a3d",{x:-.4,y:.05,z:.56,bucket:"neon"}),n.mark("halo",-.4,.3,.7,{color:"#ff8a3d",size:1.4}),n.box(.45,2.8,.45,"#9c4a33",{x:.95,z:-.6}),n.box(.55,.12,.55,"#7a3a28",{x:.95,y:2.8,z:-.6}),n.mark("smoke",.95,3,-.6,{});for(let e=0;e<7;e++){const i=-1.2+e%4*.42,s=.75+Math.floor(e/4)*.4,o=ct(t,["#7a4b2a","#3e5c76","#a3794f","#2f4f4f","#c9b37e"]);n.cyl(.12,.14,.28,10,o,{x:i,z:s}),n.ball(.15,o,{x:i,y:.25,z:s,sy:.6})}n.box(.5,.35,.4,"#8b6a4a",{x:1,z:.75}),n.cyl(.13,.13,.06,12,"#9c7a5a",{x:1,y:.35,z:.75}),n.mark("sit",1,.2,1.15,{ry:Nt,seat:"stool"})}},soyMilk:{name:"永和豆漿",slots:["BL","BR","FL","FR"],build(n,{rng:t}){n.box(2.8,1.25,1.4,"#f4f1ea",{z:-.45}),n.box(2.6,.85,.03,"#fff0c8",{y:.1,z:.26,bucket:"glow"}),n.box(2.9,.45,.08,"#d7262e",{y:1.25,z:.26,bucket:"neon"}),n.box(2.4,.22,.09,"#ffe14d",{y:1.36,z:.27,bucket:"neon"}),n.mark("halo",0,1.45,.5,{color:"#ff6b5b",size:3}),n.box(3,.08,1.6,"#cfcfca",{y:1.7,z:-.45}),n.box(1.2,.55,.4,"#c6ccd1",{x:-.7,z:.55}),n.cyl(.24,.2,.3,10,"#9ea4aa",{x:-1,y:.55,z:.55}),n.cyl(.22,.2,.06,10,"#d4b483",{x:-.4,y:.55,z:.55}),n.mark("steam",-1,.9,.55,{big:!0}),n.mark("steam",-.4,.7,.55,{}),Bn(n,.55,.65,t,{n:3,round:!1}),Bn(n,1.2,.95,t,{n:2,round:!1})}},goldenPagoda:{name:"緬甸街",slots:["BR","BL","BC"],build(n,{rng:t}){const e="#e0b23a";n.box(2,.3,2,"#f2efe8",{z:-.2}),n.box(1.6,.25,1.6,"#f2efe8",{y:.3,z:-.2}),n.cyl(.62,.72,.3,12,e,{y:.55,z:-.2}),n.ball(.62,e,{y:1.1,z:-.2,sy:.8},1),n.cyl(.18,.32,.35,12,e,{y:1.5,z:-.2}),n.cone(.18,1.1,12,e,{y:1.85,z:-.2}),n.ball(.06,"#ffffff",{y:2.98,z:-.2,bucket:"neon"}),n.mark("halo",0,1.6,-.2,{color:"#ffd36b",size:3.2}),n.box(1,1,.8,"#f2e6c9",{x:-1,z:.8}),n.box(1,.25,.05,"#1e7a46",{x:-1,y:.75,z:1.21,bucket:"neon"}),n.box(.8,.5,.03,"#fff0c8",{x:-1,y:.15,z:1.21,bucket:"glow"}),We(n,1.1,.8,t,"palm",.6),n.mark("stand",.2,0,.95,{ry:Nt})}},bitanBridge:{name:"碧潭吊橋",slots:["FL"],water:"river",build(n,{rng:t}){for(const e of[-1.35,1.35]){for(const i of[-.32,.32])n.box(.12,1.5,.12,"#f4f2ee",{x:i,z:e});n.box(.8,.14,.14,"#f4f2ee",{y:1.5,z:e}),n.box(.5,.2,.05,"#c8102e",{y:1.25,z:e+(e>0?.08:-.08)})}for(let e=0;e<12;e++){const i=e/11,s=-1.35+i*2.7,o=.35-Math.sin(i*Nt)*.1;n.box(.5,.04,.25,"#b9a58a",{y:o,z:s});for(const r of[-.27,.27]){const a=1.5-Math.sin(i*Nt)*.95;n.box(.02,a-o,.02,"#e8e8e8",{x:r,y:o,z:s})}}for(const e of[-.27,.27]){let i=null;for(let s=0;s<=8;s++){const o=s/8,r=[e,1.5-Math.sin(o*Nt)*.95,-1.35+o*2.7];i&&n.rod(i,r,.03,"#f4f2ee"),i=r}}n.mark("halo",0,1.6,-1.35,{color:"#ffe3a1",size:1.2}),n.mark("halo",0,1.6,1.35,{color:"#ffe3a1",size:1.2}),n.mark("stand",0,.3,-.3,{ry:Nt/2}),n.mark("stand",.05,.3,.5,{ry:-Nt/2})}},swanBoats:{name:"碧潭天鵝船",slots:["FR"],water:"river",build(n,{rng:t}){n.box(.9,.12,.5,"#8b6a4a",{x:.6,y:0,z:-1.05}),n.mark("swan",-.5,0,-.2,{ry:.6,range:.6}),n.mark("swan",.4,0,.3,{ry:-.4,range:.5}),n.mark("swan",-.1,0,.7,{ry:2.5,range:.5}),n.mark("stand",.6,.12,-1.1,{ry:Nt})}}},jr={boat:yy,swan:My,taxi:Vd},vc='"PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC",sans-serif',by='"BiauKai","Kaiti TC","TW-Kai","DFKai-SB","STKaiti","Noto Serif TC",serif',Ws={W:512,H:192,ASPECT:512/96,VW:.5};function Sy(n){var t;return["oldhouse","stall"].includes((t=n.look)==null?void 0:t.style)?by:vc}function ch(n,t,e,i,s,o,r=20){let a=s;for(n.font=`${i} ${a}px ${e}`;n.measureText(t).width>o&&a>r;)a-=2,n.font=`${i} ${a}px ${e}`;return a}function Ey(n,t,e=1){var C,A,T,R;const i=Math.round(Ws.W*e),s=Math.round(Ws.H*e),o=s/2,r=document.createElement("canvas");r.width=i,r.height=s;const a=r.getContext("2d"),[l,c]=yf[(C=n.look)==null?void 0:C.sign]||yf.red,f=Sy(n),u=e;a.fillStyle=l,a.fillRect(0,0,i,o);const h=a.createLinearGradient(0,0,0,o);h.addColorStop(0,"rgba(255,255,255,0.18)"),h.addColorStop(.5,"rgba(255,255,255,0)"),h.addColorStop(1,"rgba(0,0,0,0.18)"),a.fillStyle=h,a.fillRect(0,0,i,o),a.strokeStyle=c,a.globalAlpha=.85,a.lineWidth=3*u,a.strokeRect(7*u,7*u,i-14*u,o-14*u),a.globalAlpha=1;const d=n.icon||((A=Ki[n.cat])==null?void 0:A.icon)||"";a.textBaseline="middle",a.fillStyle=c;const g=ch(a,n.name,f,900,66*u,i*.66,26*u),x=a.measureText(n.name).width;a.font=`600 ${Math.round(22*u)}px ${vc}`;const m=n.sub||"",p=a.measureText(m).width,_=d?44*u:0,y=_+x+(m?p+18*u:0);let v=(i-y)/2;if(d&&(a.font=`${Math.round(34*u)}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,a.textAlign="left",a.fillText(d,v,o/2+2*u),v+=_),a.font=`900 ${g}px ${f}`,a.textAlign="left",a.shadowColor="rgba(0,0,0,0.25)",a.shadowOffsetY=2*u,a.fillText(n.name,v,o/2+3*u),a.shadowColor="transparent",v+=x+18*u,m&&v+p<i-12*u&&(a.font=`600 ${Math.round(22*u)}px ${vc}`,a.globalAlpha=.85,a.fillText(m,v,o/2+4*u),a.globalAlpha=1),t>0){const E=Math.min(i,Math.round(o*t/Ws.VW));a.save(),a.translate(0,s),a.rotate(-Math.PI/2);const M=((T=n.look)==null?void 0:T.sign)==="white"?"#c8102e":l,L=((R=n.look)==null?void 0:R.sign)==="white"?"#fff6dc":c;a.fillStyle=M,a.fillRect(0,0,o,E),a.strokeStyle=L,a.lineWidth=3*u,a.strokeRect(6*u,6*u,o-12*u,E-12*u);const W=14*u;if(!/[\u3400-\u9fff]/.test(n.name)){a.translate(o/2,E/2),a.rotate(Math.PI/2);const k=ch(a,n.name,f,900,o*.62,E-W*2,10*u);return a.font=`900 ${k}px ${f}`,a.fillStyle=L,a.textAlign="center",a.textBaseline="middle",a.fillText(n.name,0,k*.04),a.restore(),{canvas:r,vPx:E}}const V=[...n.name],F=Math.min(o*.78,(E-W*2)/V.length),Y=Math.floor(F*.92);a.font=`900 ${Y}px ${f}`,a.fillStyle=L,a.textAlign="center",a.textBaseline="middle";const O=(E-F*V.length)/2;return V.forEach((k,I)=>a.fillText(k,o/2,O+F*(I+.5)+Y*.04)),a.restore(),{canvas:r,vPx:E}}return{canvas:r,vPx:0}}function wy(n,t,e=Ws.W){const i=[],s=[],o=[],r=(f,u,h)=>{for(const d of[0,1,2,0,2,3])i.push(...f[d]),s.push(...u),o.push(...h[d])},a=n.h;r([[a.x0,a.y0,a.z],[a.x1,a.y0,a.z],[a.x1,a.y1,a.z],[a.x0,a.y1,a.z]],[0,0,1],[[0,.5],[1,.5],[1,1],[0,1]]);const l=n.v;if(l&&t>0){const f=t/e,u=l.x+.042,h=l.x-.042;r([[u,l.y0,l.z1],[u,l.y0,l.z0],[u,l.y1,l.z0],[u,l.y1,l.z1]],[1,0,0],[[f,0],[f,.5],[0,.5],[0,0]]),r([[h,l.y0,l.z0],[h,l.y0,l.z1],[h,l.y1,l.z1],[h,l.y1,l.z0]],[-1,0,0],[[f,0],[f,.5],[0,.5],[0,0]])}const c=new Ee;return c.setAttribute("position",new ue(i,3)),c.setAttribute("normal",new ue(s,3)),c.setAttribute("uv",new ue(o,2)),c}function Ty(n,t){const e=new Xc(n);return e.colorSpace=Qe,e.anisotropy=t,new Kc({map:e,emissiveMap:e,emissive:16777215,emissiveIntensity:.3,roughness:.55,metalness:0})}const Yi=Math.PI,Vt=1.3,ss=1.05,tn=.7,co={snack:"#ffdc9a",noodle:"#ffd890",rice:"#ffe2a6",stirfry:"#ffd27f",hotpot:"#ffcf8f",breakfast:"#fff0c8",cafe:"#ffe6bd",dessert:"#fff1dc",drink:"#fff7e6",bar:"#ffb066",play:"#f3c6ff"};function os(n,t,e,i=.12){const s=-n/2+i,o=n/2-i;return{x0:s,x1:o,y0:t,y1:t+(o-s)/Ws.ASPECT,z:e+.085}}function jo(n,t,e,i){return{x:n,z0:t+.01,z1:t+.01+Ws.VW,y0:e,y1:e+i}}function Ay(n,t,e="#2c2f33",i=null){const s=t.h,o=(s.x0+s.x1)/2;if(n.box(s.x1-s.x0+.08,s.y1-s.y0+.08,.08,e,{x:o,y:s.y0-.04,z:s.z-.085+.04-.002}),i){const a=s.x1-s.x0+.14,l=s.y1-s.y0+.14,c=s.z+.01;n.box(a,.03,.03,i,{x:o,y:s.y1+.04,z:c,bucket:"neon"}),n.box(a,.03,.03,i,{x:o,y:s.y0-.07,z:c,bucket:"neon"}),n.box(.03,l,.03,i,{x:s.x0-.07,y:s.y0-.07,z:c,bucket:"neon"}),n.box(.03,l,.03,i,{x:s.x1+.07,y:s.y0-.07,z:c,bucket:"neon"}),n.mark("halo",o,(s.y0+s.y1)/2,c+.1,{color:i,size:2.6})}const r=t.v;r&&(n.box(.08,r.y1-r.y0+.08,r.z1-r.z0+.05,e,{x:r.x,y:r.y0-.04,z:(r.z0+r.z1)/2+.01}),n.mark("halo",r.x,(r.y0+r.y1)/2,(r.z0+r.z1)/2,{color:"#ffe4b0",size:1.6,sign:!0})),n.mark("halo",o,(s.y0+s.y1)/2,s.z+.15,{color:"#fff0c8",size:2.2,sign:!0})}function ya(n,t,e,i,s,o){n.box(t,i,.03,s,{y:.04,z:e,bucket:"glow"}),n.box(t*.9,.42,.06,"#3a3430",{y:.04,z:e+.03}),o()<.6&&n.box(.35,.5,.05,"#4a4038",{x:t*.25,y:.46,z:e+.03}),n.box(t+.1,.17,.12,"#8f969c",{y:.04+i,z:e+.06})}function af(n,t,e){n.box(t,.04,tn,"#cdbd9f",{z:e-tn/2}),n.box(t,.05,.06,"#9a8a72",{z:e-.03})}function Cy(n,t){const{w:e,d:i,floors:s,rng:o,shop:r}=t,a=i/2,l=Vt+(s-1)*ss,c=ct(o,ie.tile),f=ct(o,ie.iron);n.box(e-.04,Vt,i-tn,Pe(c,-.07),{z:-tn/2}),af(n,e,a);for(const h of[-1,1])n.box(.22,Vt,.22,c,{x:h*(e/2-.11),z:a-.11});ya(n,e-.62,a-tn+.015,Vt-.3,co[r.cat]||"#ffe0a0",o),n.box(e,l-Vt,i,c,{y:Vt});for(let h=2;h<=s;h++){const d=Vt+(h-2)*ss;h>2&&n.box(e+.03,.05,i+.03,Pe(c,-.1),{y:d-.025});const g=h===2?d+.64:d+.27,x=h===2?.3:.5;for(const m of[-1,1]){const p=m*e*.22;lo(n,p,g,a+.005,e*.3,x,o),o()<.72&&xa(n,p,g,a,e*.32,x+.03,f,o)}o()<.45&&tf(n,-e*.44,g+.02,a,0),h===s&&o()<.35&&ef(n,-e*.22,g+x+.02,a+.17,e*.3,o);for(const m of[-1,1])n.box(.03,x,i*.3,o()<.55?ct(o,ie.lit):"#34445e",{x:m*(e/2+.01),y:g,z:-i*.15,bucket:"glow"})}n.box(e+.06,.07,i+.06,Pe(c,-.15),{y:l}),nf(n,e,i,l+.07,Pe(c,-.04)),va(n,e,i,l+.07,o);const u={h:os(e,Vt+.02,a),v:jo(e/2-.2,a,Vt+.68,ve((s-1)*.92,1.1,2.6))};return{H:l,G:Vt,sign:u,arcade:!0,front:{x:0,y:Vt-.26,w:e-.62,h:Vt-.3,z:a-tn+.1}}}function Ry(n,t){const{w:e,d:i,rng:s,shop:o}=t,r=Math.min(3,Math.max(1,t.floors)),a=i/2,l=ct(s,["#a9533a","#b5603f","#9c4a33","#b8664a"]),c="#efe3cf",f=Vt+(r-1)*ss;n.box(e-.04,Vt,i-tn,Pe(l,-.05),{z:-tn/2}),af(n,e,a);for(const h of[-1,1])n.box(.26,Vt,.26,l,{x:h*(e/2-.13),z:a-.13});n.box(e-.5,.15,.24,l,{y:Vt-.15,z:a-.12});for(const h of[-1,1])n.box(.32,.12,.24,l,{x:h*(e/2-.4),y:Vt-.3,z:a-.12,rz:h*.62});if(ya(n,e-.7,a-tn+.015,Vt-.36,co[o.cat]||"#ffe0a0",s),r>1){n.box(e,f-Vt,i,l,{y:Vt});for(let h=2;h<=r;h++){const d=Vt+(h-2)*ss;n.box(e+.04,.06,i+.04,c,{y:d-.03});const g=h===2?d+.64:d+.25,x=h===2?.26:.46;for(const m of[-1,0,1]){const p=m*e*.3,_=s()<.65?ct(s,ie.lit):"#34445e";n.box(.4,x,.03,_,{x:p,y:g,z:a+.005,bucket:"glow"}),n.cylC(.2,.03,10,_,{x:p,y:g+x,z:a+.005,rx:Yi/2,bucket:"glow"}),n.box(.48,.05,.08,c,{x:p,y:g-.05,z:a+.03}),n.box(.08,.08,.05,c,{x:p,y:g+x+.17,z:a+.03})}}}n.box(e+.06,.09,i+.06,c,{y:f}),n.box(e,.34,.12,l,{y:f+.09,z:a-.06}),n.box(e+.04,.05,.16,c,{y:f+.43,z:a-.06}),n.gable(.14,.42,e*.5,l,{y:f+.48,z:a-.07,ry:Yi/2}),n.gable(.16,.06,e*.54,c,{y:f+.88,z:a-.07,ry:Yi/2}),n.cylC(.12,.03,10,c,{y:f+.68,z:a+0,rx:Yi/2});for(const h of[-1,1])n.box(.1,.3,.1,c,{x:h*(e/2-.05),y:f+.48,z:a-.06}),n.ball(.07,c,{x:h*(e/2-.05),y:f+.84,z:a-.06});s()<.6&&va(n,e*.8,i*.6,f+.09,s);const u={h:os(e,Vt+.02,a,.2),v:r>=2?jo(e/2-.2,a,Vt+.66,ve((r-1)*.85,1,1.9)):null};return r===1&&(u.h=os(e,Vt+.08,a,.25)),{H:f+.9,G:Vt,sign:u,arcade:!0,front:{x:0,y:Vt-.32,w:e-.7,h:Vt-.36,z:a-tn+.1}}}function Py(n,t){const{w:e,d:i,rng:s,shop:o}=t,r=Math.min(2,Math.max(1,t.floors)),a=i/2,l=ct(s,ie.tile),c=i-1.05,f=-i/2+c,u=1.25,h=r===2?u+ss:u;n.box(e-.1,h,c,l,{z:-i/2+c/2}),ya(n,e-.7,f+.015,u-.32,co[o.cat]||"#ffe0a0",s);const d=ct(s,ie.awning);of(n,0,u-.02,f+.52,e-.05,1.05,d);for(const x of[-1,1])n.box(.05,u-.25,.05,"#9aa0a6",{x:x*(e/2-.1),z:a-.08});if(Us(n,.3,f+.55,0,s,{shop:o.id,umbrella:!1,trim:d[0]}),n.ball(.05,"#fff3c4",{x:-.7,y:u-.25,z:f+.6,bucket:"neon"}),n.mark("halo",-.7,u-.25,f+.6,{color:"#ffd27a",size:1.3}),r===2){const x=u+.72;lo(n,-.5,x,f+.005,.8,.26,s),xa(n,-.5,x,f,.84,.3,ct(s,ie.iron),s),n.box(e-.04,.07,c+.06,Pe(l,-.15),{y:h,z:-i/2+c/2}),va(n,e-.2,c,h+.07,s)}else n.gable(e+.05,.28,c+.2,ct(s,ie.sheet),{y:h,z:-i/2+c/2});const g={h:os(e-.25,u+.18,f,.1),v:null};return r===2&&(g.v=jo(e/2-.25,f,u+.2,1.15)),{H:Math.max(h+.3,g.h.y1),G:u,sign:g,arcade:!1,front:{x:0,y:u-.28,w:e-.7,h:u-.32,z:f+.1}}}function Ly(n,t){const{w:e,d:i,rng:s,shop:o}=t,r=Math.min(3,Math.max(1,t.floors)),a=i/2,l=ct(s,["#f3efe7","#e9e4da","#34403f","#d9cfc0","#fbfaf7"]),c=ct(s,["#8b5e3c","#a47148","#6b4a32"]),f=.5,u=a-f,h=Vt+(r-1)*ss;n.box(e-.04,h,i-f,l,{z:-f/2}),n.box(e*.56,Vt-.38,.03,co.cafe,{x:-e*.13,y:.14,z:u+.01,bucket:"glow"}),n.box(e*.6,.05,.05,c,{x:-e*.13,y:Vt-.24,z:u+.02}),n.box(e*.6,.05,.05,c,{x:-e*.13,y:.1,z:u+.02}),n.box(.48,Vt-.24,.04,c,{x:e*.3,z:u+.02}),n.box(.06,.06,.05,"#d9a520",{x:e*.22,y:.55,z:u+.05}),n.box(e-.15,.04,.55,ct(s,["#1f3b2f","#2b2b2b","#7a2e2e","#e2d6bf"]),{y:Vt-.06,z:u+.24,rx:.33}),n.box(e,.06,f,c,{z:a-f/2}),rf(n,-e/2+.2,a-.16,s,3),n.cyl(.13,.13,.03,10,"#f2efe8",{x:e*.05,y:.36,z:a-.2}),n.box(.03,.36,.03,"#333",{x:e*.05,z:a-.2});for(const g of[-1,1])n.box(.16,.2,.16,"#f2efe8",{x:e*.05+g*.28,z:a-.2}),n.mark("sit",e*.05+g*.28,.2,a-.2,{ry:g>0?-Yi/2:Yi/2,seat:"stool",shop:o.id});for(let g=2;g<=r;g++){const x=Vt+(g-2)*ss,m=g===2?x+.62:x+.24,p=g===2?.34:.56;lo(n,-e*.12,m,u+.005,e*.62,p,s,{litRate:.85}),n.box(e*.62+.06,.04,.05,"#222",{x:-e*.12,y:m+p,z:u+.02}),n.box(.04,p,.05,"#222",{x:-e*.12,y:m,z:u+.02})}n.box(e+.04,.07,i-f+.04,Pe(l,-.12),{y:h,z:-f/2}),nf(n,e,i-f,h+.07,Pe(l,-.05));for(let g=0;g<3;g++)n.ball(.16,ct(s,ie.leaf),{x:-e/2+.4+g*.5,y:h+.25,z:-.5});bn(n,[-e/2+.15,h+.75,u-.2],[e/2-.15,h+.75,u-.2],6,s,{bulbs:!0,sag:.15});for(const g of[-1,1])n.box(.03,.7,.03,"#333",{x:g*(e/2-.15),y:h+.07,z:u-.2});const d={h:os(e*.74,Vt+.06,u,.05),v:jo(e/2-.2,u,Vt+.1,.9)};return{H:h+.8,G:Vt,sign:d,arcade:!1,front:{x:-e*.13,y:Vt-.26,w:e*.56,h:Vt-.38,z:u+.06}}}function Dy(n,t){const{w:e,d:i,rng:s,shop:o}=t,r=Math.max(3,Math.min(10,t.floors)),a=i/2,l=.95,c=Vt+(r-1)*l,f=ct(s,["#d9dcdf","#bfc5ca","#e8e2d6","#c9c3b8"]);n.box(e-.04,Vt,i-tn,"#cfd2d4",{z:-tn/2}),af(n,e,a);for(const h of[-1,1])n.box(.24,Vt,.24,f,{x:h*(e/2-.12),z:a-.12});ya(n,e-.62,a-tn+.015,Vt-.3,co[o.cat]||"#ffe0a0",s),n.box(e,c-Vt,i,f,{y:Vt});for(let h=3;h<=r;h++){const d=Vt+(h-2)*l;n.box(e-.18,l*.58,.03,s()<.72?ct(s,ie.lit):"#34445e",{y:d+.2,z:a+.01,bucket:"glow"});for(const g of[-1,1])n.box(.03,l*.58,i-.3,s()<.6?ct(s,ie.lit):"#34445e",{x:g*(e/2+.01),y:d+.2,bucket:"glow"});s()<.3&&tf(n,-e*.44,d+.08,a,0)}n.box(e+.1,.16,i+.1,Pe(f,-.12),{y:c}),n.box(e*.5,.5,i*.4,Pe(f,-.05),{y:c+.16,z:-.3}),n.box(.04,.9,.04,"#777",{x:e*.3,y:c+.16,z:.3}),n.ball(.05,"#ff3b30",{x:e*.3,y:c+1.08,z:.3,bucket:"neon"}),sf(n,-e*.28,c+.16,i*.25,s);const u={h:os(e,Vt+.02,a),v:jo(e/2-.2,a,Vt+.7,ve((r-2)*.85,1.3,2.6))};return{H:c+.2,G:Vt,sign:u,arcade:!0,front:{x:0,y:Vt-.26,w:e-.62,h:Vt-.3,z:a-tn+.1}}}function fh(n,t,e,i,s,o,r,a,l,c){n.box(s,o,r,a,{x:t,y:e,z:i});const f=Math.floor(s/.16);for(let u=0;u<=f;u++)n.box(.03,o-.08,.03,Pe(a,-.1),{x:t-s/2+u*s/f,y:e+.04,z:i+r/2+.01});for(let u=0;u<=8;u++)n.box(.03,o-.08,.03,Pe(a,-.1),{x:t+s/2+.01,y:e+.04,z:i-r/2+u*r/8});n.box(s+.04,.06,r+.04,Pe(a,-.2),{x:t,y:e+o-.03,z:i}),c&&n.box(s-.6,o-.4,.03,c,{x:t,y:e+.12,z:i+r/2+.03,bucket:"glow"})}function Iy(n,t){const{w:e,d:i,rng:s,shop:o}=t,r=Math.min(2,Math.max(1,t.floors)),a=i/2,l=ct(s,["#e76f51","#2a9d8f","#f4a261","#3d7fb8","#e9c46a"]),c=ct(s,["#264653","#e76f51","#2a9d8f","#8d99ae"]),f=e-.2,u=1.15,h=1.6,d=a-.75-h/2;fh(n,0,0,d,f,u,h,l,s,co[o.cat]||"#ffe0a0"),r===2&&fh(n,-.15,u,d-.1,f*.82,u,h,c,s,ct(s,ie.lit)),n.box(e,.08,.75,"#8b5e3c",{z:a-.375});for(const m of[-1,1])n.box(.05,1.7,.05,"#3a3a3a",{x:m*(e/2-.08),z:a-.06});bn(n,[-e/2+.08,1.7,a-.06],[e/2-.08,1.7,a-.06],7,s,{bulbs:!0,sag:.18,colors:["#ffe3a1","#ffb3c7","#a5e8ff","#fff3b0"]}),Bn(n,-.6,a-.38,s,{n:2,shop:o.id,round:!0});const g=r===2?u*2:u,x={h:os(f*.86,u+.06,d+h/2+(r===2?-.1:0),.05),v:null};return r===1&&n.box(f*.9,.08,.06,"#2c2f33",{y:u,z:d+h/2+.03}),{H:Math.max(g,x.h.y1)+.2,G:u,sign:x,arcade:!1,front:{x:0,y:u-.28,w:f-.6,h:u-.4,z:d+h/2+.06}}}const uh={tiantian:Cy,oldhouse:Ry,stall:Py,cafe:Ly,tower:Dy,container:Iy};function Uy(n,t,e,i,s,o){const r=o/2,a=t.cat;if(!e.arcade){a==="drink"&&rh(n,-s/2+.3,r+.12,ct(i,["#c99a6b","#e8c39e","#9ec96b"]));return}const l=r-.32;["snack","noodle","breakfast","rice"].includes(a)?(sh(n,-.62,l,i,{shop:t.id}),i()<.7&&Bn(n,.55,r-.3,i,{n:2,shop:t.id,round:!1})):a==="dessert"?(sh(n,-.62,l,i,{shop:t.id,glass:"#d8f1ff"}),Bn(n,.55,r-.3,i,{n:2,shop:t.id,round:!0})):a==="stirfry"||a==="hotpot"?(Bn(n,-.55,r-.3,i,{n:4,shop:t.id,round:!0,top:"#f1ece2"}),Bn(n,.62,r+.32,i,{n:3,shop:t.id,round:!0,top:"#f1ece2"}),uy(n,s/2-.42,r-.55,i),n.mark("steam",-.55,.5,r-.3,{shop:t.id})):a==="drink"?(rh(n,-s/2+.42,r+.12,ct(i,["#c99a6b","#e8c39e","#9ec96b"])),n.box(1,.75,.3,"#f4f1ea",{x:.35,z:l+.05}),n.box(.95,.3,.03,"#fff7e0",{x:.35,y:.75,z:l+.21,bucket:"glow"})):a==="bar"?(an(n,-.75,Vt-.38,r-.12,"#d7262e",.75),an(n,.75,Vt-.38,r-.12,"#f4efe6",.75),$d(n,0,Vt-.5,r-tn+.06,s-.8,ct(i,["#1f2a44","#5a1f1f","#2d2d2d"])),n.cyl(.16,.16,.42,10,"#7a4f2e",{x:.9,z:r-.35}),n.box(.5,.05,.5,"#5c3d24",{x:.9,y:.42,z:r-.35})):a==="play"?(oh(n,-.8,l-.05,0,i),oh(n,-.2,l-.05,0,i),n.box(.5,.9,.06,"#1a1a2e",{x:.75,y:.1,z:l}),n.box(.42,.6,.03,"#7cf7ff",{x:.75,y:.25,z:l+.04,bucket:"neon"})):a==="cafe"&&(rf(n,-s/2+.35,r-.15,i,3),is(n,.6,r-.2,Yi))}function Ny(n,t,e,i,s){var c,f;const o=uh[(c=t.look)==null?void 0:c.style]?t.look.style:"tiantian",r=Math.max(1,Math.min(10,((f=t.look)==null?void 0:f.floors)||2)),a=uh[o](n,{w:i,d:s,floors:r,rng:e,shop:t}),l=t.cat==="bar"?ct(e,["#ff4fd8","#5ef0ff","#ff7a45"]):t.cat==="play"?ct(e,["#5ef0ff","#ff4fd8","#a6ff4f"]):null;return Ay(n,a.sign,"#2c2f33",l),Uy(n,t,a,e,i,s),a.style=o,a.vLen=a.sign.v?a.sign.v.y1-a.sign.v.y0:0,a.labelY=Math.max(a.H,a.sign.v?a.sign.v.y1:0)+.45,a.queue={x:.15,z:s/2+.32},a}const le=Math.PI,rs=8.6,Un=rs*Math.cos(le/6),Io=Array.from({length:6},(n,t)=>[rs*Math.sin(t*le/3),rs*Math.cos(t*le/3)]),zy=Array.from({length:6},(n,t)=>[Math.sin(le/6+t*le/3),Math.cos(le/6+t*le/3)]),Fs=9.2,ke={shopZ:-.8,shopW:3,shopD:2.8,shopXs:[-4.65,-1.55,1.55,4.65],road:[.62,2.48],walk:3.05,river:[3.1,5.9],queueZ:.98,slots:{BC:[0,-5.6],BL:[-4.1,-4],BR:[4.1,-4],FL:[-3.3,4.5],FR:[3.3,4.5],FC:[0,6.15]},water:{river:{bed:-.34,level:-.14},sea:{bed:-.42,level:-.17}}},hh=(ke.road[0]+ke.road[1])/2,Fy={BC:[-2.4,-7.4,2.4,-3.9],BL:[-5.9,-5.7,-2.3,-2.35],BR:[2.3,-5.7,5.9,-2.35],FL:[-5.1,3,-1.5,6.1],FR:[1.5,3,5.1,6.1],FC:[-1.5,5.3,1.5,7.7]};function Oy(n,t,e=0){return zy.every(([i,s])=>i*n+s*t<=Un-e)}function lf(n,t,e){return n==="river"?e>ke.river[0]-.15&&e<ke.river[1]+.15:n==="sea"?e>3&&.6*t+.8*e>4.45&&t<ra[0]+.15&&e<ra[1]+.15:!1}function cf(n,t,e){let i=!1;for(let s=0,o=n.length-1;s<n.length;o=s++){const[r,a]=n[s],[l,c]=n[o];a>e!=c>e&&t<(l-r)*(e-a)/(c-a)+r&&(i=!i)}return i}const ff=(n,t,e)=>n.some(i=>cf(i,t,e));function uf(n){let t=0;for(let e=0;e<n.length;e++){const[i,s]=n[e],[o,r]=n[(e+1)%n.length];t+=i*r-o*s}return t/2}function Gd(n,t,e){const i=t[0]-n[0],s=t[1]-n[1],o=Math.hypot(i,s)||1;return[e*s/o,-e*i/o]}function Wd(n,t,e){let i=1/0;for(let s=0;s<n.length;s++){const[o,r]=n[s],[a,l]=n[(s+1)%n.length],c=a-o,f=l-r,u=ve(((t-o)*c+(e-r)*f)/(c*c+f*f||1),0,1);i=Math.min(i,Math.hypot(t-o-c*u,e-r-f*u))}return i}function ky(n,t,[e,i],[s,o]){const r=s-e,a=o-i,l=ve(((n-e)*r+(t-i)*a)/(r*r+a*a||1),0,1);return Math.hypot(n-e-r*l,t-i-a*l)}function By(n,t,e,i){const s=[];for(let o=0;o<n.length;o++){const r=n[o],a=n[(o+1)%n.length],l=t*r[0]+e*r[1]-i,c=t*a[0]+e*a[1]-i;if(l<=0&&s.push(r),l<0&&c>0||l>0&&c<0){const f=l/(l-c);s.push([r[0]+(a[0]-r[0])*f,r[1]+(a[1]-r[1])*f])}}return s.filter((o,r)=>{const a=s[(r+1)%s.length];return Math.abs(o[0]-a[0])+Math.abs(o[1]-a[1])>1e-6})}const dh=(n,t)=>t.reduce((e,i)=>e.length?By(e,...i):e,n),Hy=([n,t,e])=>[-n,-t,-e],$y=n=>n.map((t,e)=>[...n.slice(0,e),Hy(t)]);function ph(n,t,e){let i=0,s=1;for(const[o,r,a]of e){const l=o*n[0]+r*n[1]-a,c=o*(t[0]-n[0])+r*(t[1]-n[1]);if(Math.abs(c)<1e-9){if(l>0)return null;continue}const f=-l/c;c>0?s=Math.min(s,f):i=Math.max(i,f)}return s-i>1e-6?[i,s]:null}function Vy(n,t,e,i){const s=t*t+e*e,o=[t*i/s,e*i/s],r=[-e,t],a=[];for(let c=0;c<n.length;c++){const f=n[c],u=n[(c+1)%n.length],h=t*f[0]+e*f[1]-i,d=t*u[0]+e*u[1]-i;if(h>=0==d>=0)continue;const g=h/(h-d),x=[f[0]+(u[0]-f[0])*g,f[1]+(u[1]-f[1])*g];a.push(((x[0]-o[0])*r[0]+(x[1]-o[1])*r[1])/s)}a.sort((c,f)=>c-f);const l=[];for(let c=0;c+1<a.length;c+=2)l.push([[o[0]+r[0]*a[c],o[1]+r[1]*a[c]],[o[0]+r[0]*a[c+1],o[1]+r[1]*a[c+1]]]);return l}const Nr=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e],ra=[Un+7,rs+6],Gy={river:{region:[[0,1,ke.river[1]],[0,-1,-3.1]],bank:"#b0a690",bedColor:"#6f8c86"},sea:{region:[[0,-1,-3.1],[-.6,-.8,-4.6],[1,0,ra[0]],[0,1,ra[1]]],bank:"#e2cf9c",bedColor:"#d6c391"}};class Wy{constructor(){this.pos=[],this.nor=[],this.col=[]}tri(t,e,i,s,o){const r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],a=[i[0]-t[0],i[1]-t[1],i[2]-t[2]];let l=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]];o&&l[0]*o[0]+l[1]*o[1]+l[2]*o[2]<0&&([e,i]=[i,e],l=l.map(u=>-u));const c=Math.hypot(...l)||1,f=new Ft(s);for(const u of[t,e,i])this.pos.push(u[0],u[1],u[2]),this.nor.push(l[0]/c,l[1]/c,l[2]/c),this.col.push(f.r,f.g,f.b)}quad(t,e,i,s,o,r){this.tri(t,e,i,o,r),this.tri(t,i,s,o,r)}fan(t,e,i,s=Xy){for(let o=1;o<t.length-1;o++)this.tri([t[0][0],e,t[0][1]],[t[o][0],e,t[o][1]],[t[o+1][0],e,t[o+1][1]],i,s)}geometry(){const t=new Ee;return t.setAttribute("position",new ue(this.pos,3)),t.setAttribute("normal",new ue(this.nor,3)),t.setAttribute("color",new ue(this.col,3)),t}}const Xy=[0,1,0],qy=[0,-1,0],mh=["#8a7461","#776656","#66594c","#574d44","#4a423b"];function Yy(n,t,e){let i=1/0,s=-1/0,o=1/0,r=-1/0;for(const[h,d]of t)i=Math.min(i,h),s=Math.max(s,h),o=Math.min(o,d),r=Math.max(r,d);const a=Math.max(1.2,Math.max(s-i,r-o)/16),l=[];for(let h=i+a/2;h<s;h+=a)for(let d=o+a/2;d<r;d+=a)cf(t,h,d)&&l.push([h,d,Wd(t,h,d)]);l.sort((h,d)=>d[2]-h[2]);const c=[];for(const h of l){if(c.length>=7)break;const d=Math.min(h[2]*.95,9);if(d<.8)break;c.some(g=>Math.hypot(g[0]-h[0],g[1]-h[1])<(g[2]+d)*.75)||c.push([h[0],h[1],d])}const f=7,u=-2.2+.02;for(const[h,d,g]of c){const x=1.2+g*1.05,m=[[u,g],[u-x*.35,g*.72],[u-x*.7,g*.4]],p=m.map(([v,C],A)=>Array.from({length:f},(T,R)=>{const E=(R+A%2*.5)/f*le*2,M=A===0?C:C*(.82+e()*.3);return[h+Math.sin(E)*M,A===0?v:v+(e()-.5)*.5,d+Math.cos(E)*M]}));for(let v=0;v<m.length-1;v++)for(let C=0;C<f;C++){const A=p[v][C],T=p[v][(C+1)%f],R=p[v+1][(C+1)%f],E=p[v+1][C],M=v===0&&e()<.22?ct(e,["#6f8a4f","#7d9655","#647f48"]):mh[v+1];n.quad(A,T,R,E,M,[(A[0]+T[0])/2-h,-.3,(A[2]+T[2])/2-d])}const _=[h+(e()-.5)*.6,u-x,d+(e()-.5)*.6],y=p[p.length-1];for(let v=0;v<f;v++)n.tri(y[v],y[(v+1)%f],_,mh[4],[y[v][0]-h,-.6,y[v][2]-d])}}function Xd(n,t,e,i){const s=new Wy,o=Pe(t,-.1),r="#9b7653",a="#86664a",l="#755a42",c=Gy[i],f=i?ke.water[i]:null,u=c==null?void 0:c.region,h=u?$y(u):null,d=[],g=[];for(const m of n){const p=uf(m)>0?1:-1,_=$s.triangulateShape(m.map(([y,v])=>new Mt(y,v)),[]);for(const[y,v,C]of _){const A=[m[y],m[v],m[C]];if(s.fan(A,-2.2,"#5d5046",qy),!u){s.fan(A,0,t);continue}const T=dh(A,u);T.length>=3&&(s.fan(T,f.bed,c.bedColor),d.push(T));for(const R of h){const E=dh(A,R);E.length>=3&&s.fan(E,0,t)}}for(let y=0;y<m.length;y++){const v=m[y],C=m[(y+1)%m.length],A=Gd(v,C,p),T=[A[0],0,A[1]],R=u?ph(v,C,u):null,E=R?[[0,R[0],!1],[R[0],R[1],!0],[R[1],1,!1]].filter(([M,L])=>L-M>1e-6):[[0,1,!1]];for(const[M,L,W]of E){const V=Nr(v,C,M),F=Nr(v,C,L),Y=W?[[-.6,f.bed,r]]:[[-.14,0,o],[-.6,-.14,r]];Y.push([-1.35,-.6,a],[-2.2,-1.35,l]);for(const[O,k,I]of Y)s.quad([V[0],O,V[1]],[F[0],O,F[1]],[F[0],k,F[1]],[V[0],k,V[1]],I,T);W&&g.push({P:V,Q:F,n:A})}}u&&u.forEach(([y,v,C],A)=>{const T=u.filter((R,E)=>E!==A);for(const[R,E]of Vy(m,y,v,C)){const M=ph(R,E,T);if(!M)continue;const L=Nr(R,E,M[0]),W=Nr(R,E,M[1]);s.quad([L[0],f.bed,L[1]],[W[0],f.bed,W[1]],[W[0],0,W[1]],[L[0],0,L[1]],c.bank,[-y,0,-v])}}),Yy(s,m,e)}const x=u?{kind:i,tris:d,level:f.level,edges:g}:null;return{geo:s.geometry(),water:x}}function al(n,t){const e=n[0],i=uf(e)>0?1:-1;let s=0;const o=e.map((u,h)=>{const d=e[(h+1)%e.length],g=Math.hypot(d[0]-u[0],d[1]-u[1]);return s+=g,g});let r=t()*s,a=0;for(;a<e.length-1&&r>o[a];)r-=o[a++];const l=e[a],c=e[(a+1)%e.length],f=ve(r/(o[a]||1),.05,.95);return{x:l[0]+(c[0]-l[0])*f,z:l[1]+(c[1]-l[1])*f,n:Gd(l,c,i)}}function qd(n,t,e,i,s=1){const o=-2.1500000000000004;for(let r=0;r<Math.round(10*s);r++){const a=al(t,e),l=.8+e()*2.4,c=a.x-a.n[0]*.25,f=a.z-a.n[1]*.25;n.rod([c,o,f],[c-a.n[0]*.4+(e()-.5)*.4,o-l,f-a.n[1]*.4+(e()-.5)*.4],.05,ct(e,["#5b4632","#4e3d2c","#6a5440"]))}for(let r=0;r<Math.round(16*s);r++){const a=al(t,e);if(i&&lf(i.kind,a.x,a.z))continue;const l=2+Math.floor(e()*4),c=a.x+a.n[0]*.06,f=a.z+a.n[1]*.06;for(let u=0;u<l;u++)n.ball(.13+e()*.08,ct(e,ie.leaf),{x:c+(e()-.5)*.12,y:-.1-u*.27,z:f+(e()-.5)*.12,sy:1.25})}for(let r=0;r<3;r++){const a=al(t,e),l=1.6+e()*2.2,c=a.x+a.n[0]*l,f=a.z+a.n[1]*l;if(ff(t,c,f))continue;const u=-3.6-e()*3.6,h=.35+e()*.45;n.ball(h,ct(e,["#7a6a58","#8a7461","#66594c"]),{x:c,y:u,z:f,sx:1.25,sy:.85}),n.ball(h*.8,ct(e,ie.leaf),{x:c,y:u+h*.62,z:f,sx:1.4,sy:.32})}}const jy={beitou:"hill",wenshan:"hill",xindian:"hill",northcoast:"hill",keelung:"hill",qingpu:"farm",daxi:"farm",tamsui:"town",xinzhuang:"town",neihu:"town",nangang:"town",sanying:"town"},Yd=["#ece6da","#ddd6c8","#cfd6dc","#e8d6c2","#c3cbd0","#f2ede2","#d9cfc0"],Zy=["#b5523b","#8a8f94","#c46a3c","#6f7a83"],Ky=["#b8d47a","#9cc865","#d8cf7a","#a7cf6e","#c9d98a"];function wo(n,t,e,i,s=1){n.cyl(.05*s,.07*s,.36*s,4,"#6d5a43",{x:t,z:e}),i()<.5?n.cone(.42*s,1.15*s,6,ct(i,ie.leaf),{x:t,y:.28*s,z:e}):n.ball(.48*s,ct(i,ie.leaf),{x:t,y:.72*s,z:e,sy:.9})}function gh(n,t,e,i,s,o){const r=1+Math.floor(i()*3);for(let a=0;a<r;a++){const l=.55+i()*.7,c=.55+i()*.7,f=(.45+i()*1.3)*s,u=t+(i()-.5)*1,h=e+(i()-.5)*1;n.box(l,f,c,ct(i,Yd),{x:u,z:h}),n.box(l*.92,.06,c*.92,"#9aa1a6",{x:u,y:f,z:h}),o&&f>.7&&n.box(l*.66,.07,.02,"#fff1c4",{x:u,y:f*.62,z:h+c/2+.01,bucket:"glow"})}}function ll(n,t,e,i){const s=(i()-.5)*.6;n.at(t,0,e,s,()=>{n.box(.9,.5,.62,ct(i,Yd)),n.gable(.98,.32,.7,ct(i,Zy),{y:.5})})}function xh(n,t,e,i){const s=Math.round(i()*3)*(le/2)+(i()-.5)*.3;n.at(t,0,e,s,()=>{const o=ct(i,Ky);n.box(1.7,.03,1.15,o);for(let r=0;r<3;r++)n.box(1.65,.035,.05,Pe(o,-.12),{z:-.38+r*.38})})}function Jy(n,t,e,i,s){const o=ct(i,["#7fb069","#6fa35c","#8dbb6f","#76a862"]);n.cone(1.5*s,(.9+i()*.9)*s,7,o,{x:t,z:e,ry:i()*le}),i()<.6&&n.cone(.95*s,(.7+i()*.6)*s,6,Pe(o,-.08),{x:t+(i()-.5)*1.6*s,z:e+(i()-.5)*1.2*s})}function Qy(n,t,e,i,s,o,r){const a=t.country||jy[t.id]||"city",l=r?120:210,c=i()*100,f=(x,m)=>Math.sin(x*.19+c)*Math.cos(m*.23-c*.7)+.5*Math.sin((x+m)*.41+c*1.3),u=ve(.7+t.residents*.45,.8,1.5);let h=0;for(const x of e)h+=Math.abs(uf(x));const d=Math.max(a==="city"?1.9:2.2,Math.sqrt(Math.max(1,h-270)/l));let g=0;for(const x of e){let m=1/0,p=-1/0,_=1/0,y=-1/0;for(const[v,C]of x)m=Math.min(m,v),p=Math.max(p,v),_=Math.min(_,C),y=Math.max(y,C);for(let v=m+d/2;v<p;v+=d)for(let C=_+d/2;C<y;C+=d){if(g>=l)return;const A=v+(i()-.5)*d*.7,T=C+(i()-.5)*d*.7;if(Math.hypot(A,T)<Fs+.8||!cf(x,A,T)||lf(s,A,T))continue;const R=Wd(x,A,T);if(R<.75||o.some(([L,W])=>ky(A,T,L,W)<1.5))continue;g++;const E=f(A,T),M=i();if(a==="city")E>-.55?gh(n,A,T,i,u*(R>4?1.15:.9),M<.7):M<.6?wo(n,A,T,i,.9+i()*.3):Hd(n,A,T,i,1.4);else if(a==="town")E>.35?gh(n,A,T,i,.75,M<.5):E>-.3?(M<.55?ll:wo)(n,A,T,i,1):M<.6?xh(n,A,T,i):wo(n,A,T,i,1.1);else if(a==="hill"){const L=ve(R/3,.7,1.6);E>.25&&R>2.2&&Math.hypot(A,T)>Fs+2.6*L?Jy(n,A,T,i,L):E>-.45||M<.5?wo(n,A,T,i,.9+i()*.5):ll(n,A,T,i)}else E>.15?xh(n,A,T,i):E>-.25&&M<.35?n.cylC(.55+i()*.45,.03,10,"#7fb3c9",{x:A,y:.02,z:T}):M<.45?ll(n,A,T,i):wo(n,A,T,i,1)}}}function t2(n,t,e,i){const[s,o]=ke.road,r=2*Un;n.box(r,.012,3.12,t.pave,{z:-.94}),n.box(r,.024,o-s,"#5c6066",{z:(s+o)/2});for(let f=0;f<3;f++)n.box(.4+e()*.6,.027,.3+e()*.4,ct(e,["#53575d","#676b71"]),{x:(e()-.5)*r*.8,z:s+.35+e()*(o-s-.7)});n.box(r,.03,.05,"#d1352e",{z:s+.07}),n.box(r,.03,.05,"#e5bf35",{z:o-.07});const a=(o+ke.walk)/2;n.box(r,.08,ke.walk-o,t.pave,{z:a}),n.box(r,.085,.06,"#c9c2b4",{z:o+.03}),hy(n,0,s,o,.95);for(const f of[-6.3,-2.2,2.3,6.3])cy(n,f,a+.05,0);const l=[-4.3,.9,4.4];for(const f of l)fy(n,f,a+.12);for(let f=0;f<l.length-1;f++)Do(n,[l[f],2.38,a+.12],[l[f+1],2.38,a+.12],.2),Do(n,[l[f]+.25,2.18,a+.12],[l[f+1]+.25,2.18,a+.12],.27);for(const f of l)Do(n,[f,2.32,a+.12],[f+(e()-.5)*1.8,1.6,.6],.22),e()<.6&&Do(n,[f+.3,2.16,a+.12],[f+(e()-.5)*2.4,1.5,.6],.18);for(const f of[-5.3,-1,3.4])We(n,f,a+.05,e,"round",.72);const c=ve(.3+t.residents*.28,.35,.8);Ur(n,-6.9,-.9,o-.3,e,c,le),Ur(n,.9,6.9,o-.3,e,c,le),Ur(n,-7,-6.35,s+.33,e,.9,0),Ur(n,6.35,7,s+.33,e,.9,0);for(const[f,u]of[[-1,i.left],[1,i.right]]){if(u)continue;const h=f*(Un-.22);for(let d=0;d<6;d++)n.box(.08,.3,.3,d%2?"#f4f4f0":"#d7262e",{x:h,y:.2,z:s+.16+d*.31});for(const d of[s+.1,o-.1])n.box(.06,.55,.06,"#59606a",{x:h,z:d})}}function e2(n){if(n<=4)return{w:ke.shopW,xs:n===4?ke.shopXs:Array.from({length:n},(e,i)=>(i-(n-1)/2)*3.1)};const t=Math.min(3.1,13.8/n);return{w:t-.1,xs:Array.from({length:n},(e,i)=>(i-(n-1)/2)*t)}}function n2(n,t){const{w:e,xs:i}=e2(t.length);return t.map((s,o)=>{const r=i[o],a=ke.shopZ,l=wn(ls(s.id)),c=n.marks.length;let f;n.at(r,0,a,0,()=>{f=Ny(n,s,l,e,ke.shopD)});for(let h=c;h<n.marks.length;h++)n.marks[h].shop==null&&(n.marks[h].shop=s.id);const u=r<0?-1:1;return{shop:s,index:o,x:r,z:a,w:e,spec:f,queue:{x:r+f.queue.x,z:ke.queueZ,dir:u}}})}function cl(n,t,e,i,s){const[o,r]=ke.slots[e];switch(t){case"apartments":{const a=ve(Math.round(3+s()*2+i.residents),3,7);ah(n,o-.85,r,1.6,2,a,s),ah(n,o+.85,r+.12,1.6,2,ve(a+Math.round(s()*2-1),3,7),s);break}case"houses":dy(n,o,r+.2,3.3,1.7,4,s);break;case"park":_y(n,o,r,3.2,2.6,s);break;case"lot":vy(n,o,r,3,2.1,s),We(n,o+1.7,r-.9,s,"round",.8);break;case"conv":n.box(3.1,.03,2.9,i.pave,{x:o,z:r}),gy(n,o,r-.5,0,s);break;case"shrine":n.box(2.6,.03,2,i.pave,{x:o,z:r}),my(n,o-.55,r-.2,0,s);break;case"templeSmall":xc(n,o,r,0,s,.82);break;case"mrt":n.box(3.1,.03,2.7,i.pave,{x:o,z:r}),xy(n,o-.75,r-.15,0),lh(n,o+.85,r+.55,0);for(let a=0;a<4;a++)n.at(o+.35+a*.28,0,r-.65,.25,()=>{n.cylC(.08,.02,8,"#2a2a2a",{z:.14,y:.08,rz:le/2}),n.cylC(.08,.02,8,"#2a2a2a",{z:-.14,y:.08,rz:le/2}),n.box(.03,.03,.3,"#f2c14e",{y:.14})});break;case"market":{n.box(3.1,.03,2.6,i.pave,{x:o,z:r});for(let a=0;a<3;a++){const l=o-1+a;of(n,l,1,r-.2,.9,.9,ct(s,ie.awning));for(const c of[-1,1])n.box(.04,.9,.04,"#888",{x:l+c*.42,z:r+.2});n.box(.8,.45,.55,"#c9b28a",{x:l,z:r-.2});for(let c=0;c<6;c++)n.ball(.07,ct(s,["#e63946","#f4a261","#8ac926","#ffca3a","#6a994e","#ff924c"]),{x:l-.3+c%3*.3,y:.5,z:r-.35+Math.floor(c/3)*.28});n.mark("stand",l,0,r+.55,{ry:le})}break}case"bus":lh(n,o-.4,r-.2,0),We(n,o+.9,r-.3,s,"round",.85),rf(n,o-1.1,r+.5,s,3);break;case"plaza":n.box(2.4,.03,1.8,i.pave,{x:o,z:r}),is(n,o-.5,r+.2,le),is(n,o+.5,r+.2,le),We(n,o,r-.5,s,"round",1);break}}function jd(n,t){return t==="river"?n==="FL"||n==="FR"||n==="FC":t==="sea"?n==="FR"||n==="FC":!1}function i2(n,t,e,i,s,o){const r=u=>!i.has(u)&&!jd(u,s),a=["FL","FR"].filter(r);e()<.5&&a.reverse();const l=["BL","BR","BC"].filter(r),c=[];t.stations.length&&c.push("mrt"),c.push("conv"),t.residents>=1.2&&c.push("market");for(const u of a){const h=c.shift()||ct(e,["park","lot","park"]);i.set(u,h),cl(n,h,u,t,e)}let f=!1;if(r("FC")){const u=o?ct(e,["bus","plaza"]):"shrine";f=u==="shrine",i.set("FC",u),cl(n,u,"FC",t,e)}for(const u of l){let h;!o&&!f?(h="templeSmall",f=!0):c.length&&c[0]!=="market"?h=c.shift():h=t.residents>=1?ct(e,["apartments","apartments","houses"]):ct(e,["houses","park","apartments"]),i.set(u,h),cl(n,h,u,t,e)}}function Zd(n,t,e,i,s=["round"],o=[Io]){const r=[],a=[...e.keys()].map(c=>Fy[c]),l=(c,f)=>!Oy(c,f,.5)||!ff(o,c,f)||f>-2.55&&f<3.15||lf(i,c,f)||a.some(([u,h,d,g])=>c>u-.2&&c<d+.2&&f>h-.2&&f<g+.2)?!1:r.every(([u,h])=>Math.hypot(u-c,h-f)>.85);for(let c=0;c<160&&r.length<26;c++){const f=(t()*2-1)*Un,u=(t()*2-1)*rs;if(!l(f,u))continue;r.push([f,u]);const h=t();if(h<.45)We(n,f,u,t,ct(t,s),.8+t()*.45);else if(h<.75)Hd(n,f,u,t,.9+t()*.6);else{const d=ct(t,["#ff8fab","#ffd166","#ffffff","#f4a261","#cdb4db"]);for(let g=0;g<5;g++)n.ball(.045,d,{x:f+(t()-.5)*.5,y:.05,z:u+(t()-.5)*.5})}}}function s2(n,t){const e=t.find(r=>r.type==="gondolaBase"),i=t.find(r=>r.type==="gondolaTop");if(!e||!i)return null;const s=new D(e.pos.x,4.7,e.pos.z),o=new D(i.pos.x,i.pos.y+1.9,i.pos.z);n.box(.16,s.y-e.pos.y,.16,"#9aa0a6",{x:s.x,y:e.pos.y,z:s.z}),n.box(.16,o.y-i.pos.y,.16,"#9aa0a6",{x:o.x,y:i.pos.y,z:o.z});for(const r of[s,o])n.box(.6,.08,.12,"#7d848b",{x:r.x,y:r.y-.05,z:r.z});for(const r of[-.22,.22]){let a=null;for(let l=0;l<=10;l++){const c=l/10,f=[s.x+(o.x-s.x)*c+r,s.y+(o.y-s.y)*c-Math.sin(c*le)*.35,s.z+(o.z-s.z)*c];a&&n.rod(a,f,.025,"#3a3d42"),a=f}}return{a:s,b:o,sag:.35}}const Kd=new ui({visible:!1}),o2=new Ui(1,1,.04);let zr=null;function r2(){if(zr)return zr;const n=document.createElement("canvas");n.width=16,n.height=64;const t=n.getContext("2d");for(let i=0;i<64;i+=8)t.fillStyle="#c4c9ce",t.fillRect(0,i,16,5),t.fillStyle="#8e959b",t.fillRect(0,i+5,16,3);const e=new Xc(n);return e.colorSpace=Qe,e.wrapS=ko,e.wrapT=ko,e.repeat.set(1,3),zr=new Kc({map:e,roughness:.55,metalness:.35}),zr}const vh=new ee;function Jd(n){const t=Math.max(.002,n.k);vh.makeScale(n.w,n.h*t,1).setPosition(n.x,n.top-n.h*t/2,n.z),n.inst.setMatrixAt(n.index,vh),n.inst.instanceMatrix.needsUpdate=!0}function Qd(n,t){for(const e of["solid","glow","neon"]){if(!t[e])continue;const i=new Se(t[e],un[e]);i.castShadow=e==="solid",i.receiveShadow=e==="solid",i.matrixAutoUpdate=!1,i.updateMatrix(),n.add(i)}}function a2(n,t){const e=[];for(const h of t.tris)for(let d=1;d<h.length-1;d++){const[g,x,m]=[h[0],h[d],h[d+1]],p=(x[1]-g[1])*(m[0]-g[0])-(x[0]-g[0])*(m[1]-g[1])>0;for(const _ of p?[g,x,m]:[g,m,x])e.push(_[0],t.level,_[1])}const i=new Ee;i.setAttribute("position",new ue(e,3)),i.computeVertexNormals();const s=new Se(i,ih.surface);s.renderOrder=1,n.add(s);const o=[],r=[],a=[],l=7.5,c=5;for(const{P:h,Q:d,n:g}of t.edges){const x=Math.hypot(d[0]-h[0],d[1]-h[1]),m=o.length/3;for(let p=0;p<=c;p++){const _=p/c,y=.05+.9*_*_,v=t.level+.02-l*_;for(const[C,A]of[[h,0],[d,x]])o.push(C[0]+g[0]*y,v,C[1]+g[1]*y),r.push(A,_)}for(let p=0;p<c;p++){const _=m+p*2;a.push(_,_+1,_+3,_,_+3,_+2)}}if(!o.length)return;const f=new Ee;f.setAttribute("position",new ue(o,3)),f.setAttribute("uv",new ue(r,2)),f.setIndex(a);const u=new Se(f,ih.fall);u.renderOrder=2,n.add(u)}function l2(n,t,e,i){const s=new Hn(o2,r2(),Math.max(1,t.length));s.frustumCulled=!1,n.add(s);const o=[];return{shops:t.map((a,l)=>{const{canvas:c,vPx:f}=Ey(a.shop,a.spec.vLen,i.mobile?.75:1),u=Ty(c,i.aniso||4),h=new Se(wy(a.spec.sign,f,c.width),u);h.position.set(a.x,0,a.z),n.add(h);const d=a.spec.H+.4,g=new Se(new Ui(a.w,d,ke.shopD+.4),Kd);g.position.set(a.x,d/2,a.z+.2),g.userData={kind:"shop",id:a.shop.id},n.add(g),o.push(g);const x=a.spec.front,m={inst:s,index:l,x:a.x+x.x,top:x.y,w:x.w,h:x.h,z:a.z+x.z,k:1,target:1};return Jd(m),{...a,island:e,sign:h,signMat:u,proxy:g,shutter:m,anchor:new D(a.x,a.spec.labelY,a.z+.5)}}),pickables:o}}function tp(n,t,e){const i=new Zc(e.map(o=>new Id(o.map(([r,a])=>new Mt(r,-a)))));i.rotateX(-le/2);const s=new Se(i,Kd);return s.position.y=.3,s.userData={kind:"island",id:t},n.add(s),s}function c2(n,t,e={}){const i=wn(ls(n.id)),s=new En,o=n.landmarks.filter(T=>Ei[T]),r=o.map(T=>Ei[T].water).find(T=>T==="river"||T==="sea")||null,a=Fo[n.id].parts,l=Xd(a,n.ground,i,r);s.parts.solid.push(l.geo);const c=Math.sqrt(Fo[n.id].area/250);qd(s,a,i,l.water,ve(c,1,5)),t2(s,n,i,e.ends||{});const f=n2(s,t),u=new Map;for(const T of o){const R=Ei[T],E=R.slots.find(W=>!u.has(W)&&(R.water?!0:!jd(W,r)));if(!E)continue;u.set(E,T);const[M,L]=ke.slots[E];if(s.at(M,0,L,0,()=>R.build(s,{rng:i,slot:E,island:n})),R.extra&&!u.has(R.extra.slot)){u.set(R.extra.slot,R.extra.build);const[W,V]=ke.slots[R.extra.slot];s.at(W,0,V,0,()=>Ei[R.extra.build].build(s,{rng:i,slot:R.extra.slot,island:n}))}}const h=o.some(T=>T==="temple"||T==="longshanTemple");i2(s,n,i,u,r,h),r==="sea"&&(s.mark("boat",1.9,0,6.6,{ry:.5,range:.5,fishing:!0}),s.mark("boat",5.4,0,3.9,{ry:-.9,range:.4,fishing:!0}));const d=s2(s,s.marks),g=["northcoast","xindian","wenshan","beitou"].includes(n.id)?["round","cone","cone"]:["round","round","cone"];Zd(s,i,u,r,g,a);const[x,m]=wl(n.id),p=ep().map(([T,R])=>[[T[0]-x,T[1]-m],[R[0]-x,R[1]-m]]);Qy(s,n,a,i,r,p,e.mobile);const _=s.build(),y=new fn;y.position.set(x,0,m),y.name=n.id,Qd(y,_),l.water&&a2(y,l.water);const{shops:v,pickables:C}=l2(y,f,n.id,e),A=tp(y,n.id,a);return{id:n.id,data:n,parts:a,group:y,shops:v,marks:_.marks,water:l.water,waterKind:r,gondola:d,slots:u,anchor:new D(0,7.4,-1.2),pickables:[...C,A]}}function f2(n,t,e,i,s,o){n.at(t,0,e,i,()=>{n.box(1.7,1,.95,s,{y:.22}),n.box(.62,.72,.95,Pe(s,-.12),{x:1.16,y:.22}),n.box(.5,.3,.97,"#2a3340",{x:1.2,y:.62}),n.box(1.2,.45,.03,"#fff1c4",{x:-.15,y:.62,z:.48,bucket:"glow"}),n.box(1.3,.05,.2,"#c3c9ce",{x:-.15,y:.6,z:.57}),of(n,-.15,1.18,.66,1.4,.4,ct(o,ie.awning));for(const[r,a]of[[-.55,1],[.95,1],[-.55,-1],[.95,-1]])n.cylC(.15,.1,10,"#1e1e1e",{x:r,y:.15,z:a*.46,rz:le/2});n.box(.05,.35,.3,"#2b2b2b",{x:-1,y:.2,z:.75}),n.mark("halo",-.15,.85,.65,{color:"#ffd27a",size:1.8}),n.mark("steam",-.5,1.3,.1,{}),n.mark("pool",-.15,.03,1,{r:1.2,color:"#ffcf7a"});for(let r=0;r<3;r++)n.mark("stand",-.6+r*.4,0,.95+r%2*.15,{ry:le})})}const fl={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1]]};function _h(n,t,e,i,s,o){n.at(t,0,e,i,()=>{n.box(s,s,s,"#fbfaf7");const r=s*.27,a=s*.085,l=c=>c===1||c===4?"#d7262e":"#1f1f1f";for(const[c,f]of fl[o.top])n.cylC(ul(o.top,a),.02,10,l(o.top),{x:c*r,y:s+.005,z:f*r});for(const[c,f]of fl[o.front])n.cylC(ul(o.front,a),.02,10,l(o.front),{x:c*r,y:s/2+f*r,z:s/2+.005,rx:le/2});for(const[c,f]of fl[o.right])n.cylC(ul(o.right,a),.02,10,l(o.right),{x:s/2+.005,y:s/2+f*r,z:c*r,rz:le/2})})}const ul=(n,t)=>n===1?t*1.8:t;function u2(n,t){const e=new D(4.2,3.55,-3.7),i=2.55,s=12,o=new En;for(const x of[-.24,.24]){for(let m=0;m<36;m++){const p=m/36*le*2,_=(m+1)/36*le*2;o.rod([Math.cos(p)*i,Math.sin(p)*i,x],[Math.cos(_)*i,Math.sin(_)*i,x],.07,"#f4f4f4")}for(let m=0;m<s;m++){const p=m/s*le*2;o.rod([0,0,x],[Math.cos(p)*i,Math.sin(p)*i,x],.035,"#dfe3e8")}}const r=["#ff5fa2","#5ef0ff","#ffd23f","#a6ff4f","#ff8a3d","#b388ff"];for(let x=0;x<s*2;x++){const m=x/(s*2)*le*2;o.ball(.075,r[x%r.length],{x:Math.cos(m)*i,y:Math.sin(m)*i,z:.3,bucket:"neon"}),o.ball(.05,r[(x+2)%r.length],{x:Math.cos(m)*i*.55,y:Math.sin(m)*i*.55,z:.28,bucket:"neon"})}o.cylC(.34,.66,12,"#c9ced3",{rx:le/2}),o.cylC(.2,.7,12,"#ff5fa2",{rx:le/2,bucket:"neon"});const a=o.build(),l=new fn;l.position.copy(e);for(const x of["solid","neon"])a[x]&&l.add(new Se(a[x],un[x]));n.add(l);const c=new En;c.box(.46,.36,.4,"#ffffff",{y:-.42}),c.cone(.3,.14,8,"#ffffff",{y:-.06}),c.box(.03,.12,.03,"#bbbbbb",{y:-.06});const f=new En;f.box(.48,.16,.42,"#fff1c4",{y:-.3,bucket:"glow"});const u=new Hn(c.build().solid,un.solid,s),h=new Hn(f.build().glow,un.glow,s),d=["#ff6b6b","#ffd166","#06d6a0","#4cc9f0","#f72585","#b5179e"],g=new Ft;for(let x=0;x<s;x++)u.setColorAt(x,g.set(d[x%d.length]));for(const x of[u,h])x.frustumCulled=!1,n.add(x);return{wheel:l,body:u,win:h,hub:e,RW:i,n:s,angle:t()*le}}function h2(n){const t=document.createElement("canvas");t.width=512,t.height=256;const e=new Xc(t);e.colorSpace=Qe;const i=new ui({map:e}),s=new Se(new ds(3.6,1.8),i);s.position.set(0,1.62,-6.05),n.add(s);function o(r,a="🎪"){const l=t.getContext("2d"),c=l.createLinearGradient(0,0,512,256);c.addColorStop(0,r.c1||"#ff5fa2"),c.addColorStop(1,r.c2||"#5e60ce"),l.fillStyle=c,l.fillRect(0,0,512,256),l.fillStyle="rgba(255,255,255,0.08)";for(let f=0;f<512;f+=8)l.fillRect(f,0,2,256);l.textAlign="center",l.textBaseline="middle",l.fillStyle="#fff",l.font='72px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',l.fillText(a,256,70),l.font='900 76px "PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif',l.shadowColor="rgba(0,0,0,0.35)",l.shadowOffsetY=4,l.fillText(r.name,256,150),l.shadowColor="transparent",l.font='700 30px "PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif',l.fillText(r.tagline,256,214),l.fillStyle="#ff3b30",l.beginPath(),l.arc(30,28,9,0,le*2),l.fill(),l.fillStyle="#fff",l.font="800 20px sans-serif",l.textAlign="left",l.fillText("LIVE",46,29),e.needsUpdate=!0}return{mesh:s,draw:o}}function d2(n={}){const t=wn(ls("event-island")),e="#a3d48b",i="#f1e4cb",s=new En,o=Xd([Io],e,t,null);s.parts.solid.push(o.geo),qd(s,[Io],t,null),s.box(2*Un,.014,7.6,i,{z:.6});for(let _=-10;_<=10;_++)for(let y=-5;y<=5;y++){if((_+y)%2!==0)continue;const v=_*.7,C=.6+y*.7;Math.abs(v)>Un-.4||s.box(.68,.018,.68,(_*7+y*3)%5===0?"#ffd6a5":"#f7d9b6",{x:v,z:C})}s.box(4.6,.5,2.3,"#3b3a4a",{z:-5.25}),s.box(4.62,.06,.06,"#ff5fa2",{y:.47,z:-4.1,bucket:"neon"});for(const _ of[-1,1])s.box(.2,3.3,.2,"#c0c4c8",{x:_*2.2,z:-6.1}),s.box(.2,3.3,.2,"#c0c4c8",{x:_*2.2,z:-4.5}),s.box(.5,.9,.45,"#26262e",{x:_*2.65,y:.5,z:-4.6});s.box(4.6,.2,.2,"#c0c4c8",{y:3.3,z:-6.1}),s.box(4.6,.2,.2,"#c0c4c8",{y:3.3,z:-4.5}),s.box(3.8,2,.12,"#15151c",{y:.62,z:-6.15});const r=["#ff5fa2","#5ef0ff","#ffd23f","#a6ff4f","#b388ff"];for(let _=0;_<5;_++){const y=-1.8+_*.9;s.box(.22,.22,.26,"#222",{x:y,y:3.05,z:-4.5}),s.box(.16,.16,.04,r[_],{x:y,y:3.08,z:-4.36,bucket:"neon"}),s.mark("halo",y,3.15,-4.3,{color:r[_],size:2})}for(let _=0;_<14;_++)s.mark("stand",-2.2+_%7*.72+(t()-.5)*.2,0,-3.5+Math.floor(_/7)*.55,{ry:le,fan:!0});const a=[4.2,3.55,-3.7];s.box(2.6,.12,1.6,"#c9c2b4",{x:a[0],z:a[2]});for(const _ of[-1,1])for(const y of[-.42,.42])s.rod([a[0],a[1],a[2]+y],[a[0]+_*1.45,.1,a[2]+y*1.6],.12,"#e9ecef");s.box(.7,.6,.5,"#ff6b6b",{x:a[0]+1,z:a[2]+1}),s.box(.6,.25,.03,"#fff1c4",{x:a[0]+1,y:.3,z:a[2]+1.26,bucket:"glow"});for(let _=0;_<4;_++)s.mark("stand",a[0]-.6+_*.35,.12,a[2]+.95,{ry:le});s.box(2.4,.2,1.8,"#d9cfbd",{x:-4.2,z:-3.6}),_h(s,-4.75,-3.7,.25,1.15,{top:3,front:2,right:6}),_h(s,-3.45,-3.45,-.35,1.15,{top:4,front:1,right:5});const l=["#ff9f1c","#2ec4b6","#e71d36","#9b5de5"];[-5.3,-1.8,1.8,5.3].forEach((_,y)=>f2(s,_,-.6,0,l[y],t));for(let _=0;_<4;_++){const y=-4.5+_*3,v=2.4+_%2*.8;Bn(s,y,v,t,{n:4,round:!0,top:"#f6f1e6"}),s.cyl(.02,.02,1.25,4,"#777",{x:y,z:v}),s.cone(.75,.28,8,ct(t,["#ff5fa2","#ffd23f","#5ef0ff","#a6ff4f"]),{x:y,y:1.2,z:v})}const c=[[-6.6,-2.4],[6.6,-2.4],[-6.6,4.4],[6.6,4.4],[0,4.9]];for(const[_,y]of c)s.box(.08,2.7,.08,"#59606a",{x:_,z:y});bn(s,[-6.6,2.6,-2.4],[6.6,2.6,4.4],14,t,{bulbs:!0,sag:.4,colors:["#ffe3a1","#ffb3c7","#a5e8ff","#fff3b0"]}),bn(s,[6.6,2.6,-2.4],[-6.6,2.6,4.4],14,t,{bulbs:!0,sag:.4,colors:["#ffe3a1","#ffb3c7","#a5e8ff","#fff3b0"]}),bn(s,[-6.6,2.6,4.4],[0,2.6,4.9],7,t,{sag:.25,s:.55}),bn(s,[0,2.6,4.9],[6.6,2.6,4.4],7,t,{sag:.25,s:.55});for(const _ of[-1,1])s.box(.3,2.2,.3,"#ff5fa2",{x:_*1.5,z:6.6});for(let _=0;_<=12;_++){const y=_/12,v=le*y;s.ball(.12,["#ffd23f","#ff5fa2","#5ef0ff"][_%3],{x:-Math.cos(v)*1.5,y:2.2+Math.sin(v)*.7,z:6.6,bucket:"neon"})}s.mark("halo",0,2.7,6.7,{color:"#ffd23f",size:3});for(let _=0;_<9;_++){const y=-5.4+(t()-.5)*1.2,v=4.6+(t()-.5)*1,C=1.6+t()*.9;s.rod([y,C-.15,v],[-5.4,.3,4.6],.01,"#dddddd"),s.ball(.2,ct(t,["#ff5fa2","#ffd23f","#5ef0ff","#a6ff4f","#ff8a3d","#b388ff"]),{x:y,y:C,z:v,sy:1.2})}s.box(.3,.3,.3,"#8b6a4a",{x:-5.4,z:4.6});const f=new Map([["BC","stage"],["BR","wheel"],["BL","dice"],["FL","balloon"],["FR","plaza"],["FC","gate"]]);for(let _=0;_<12;_++)s.mark("stand",-6+t()*12,0,.6+t()*1.2,{ry:t()*le*2});Zd(s,t,f,null,["round","palm"]);const u=s.build(),h=new fn,[d,g]=Dp();h.position.set(d,0,g),h.name="event",Qd(h,u);const x=u2(h,t),m=h2(h),p=tp(h,"event",[Io]);return{id:"event",data:{id:"event",residents:1,ground:e,pave:i},parts:[Io],group:h,shops:[],marks:u.marks,water:null,waterKind:null,gondola:null,ferris:x,screen:m,anchor:new D(0,7,-1.2),pickables:[p],event:!0}}let To=null;function ep(){if(To)return To;const n=new Set;To=[];for(const t of Xo)for(let e=0;e<t.path.length-1;e++){const[i,s]=[t.path[e],t.path[e+1]],o=[i,s].sort().join("|");if(n.has(o))continue;n.add(o);const r=wl(i),a=wl(s),l=Math.hypot(a[0]-r[0],a[1]-r[1]),c=[(a[0]-r[0])/l,(a[1]-r[1])/l];To.push([[r[0]+c[0]*Fs,r[1]+c[1]*Fs],[a[0]-c[0]*Fs,a[1]-c[1]*Fs],i,s])}return To}function yh(n,t){return Fe.some(e=>{const i=Fo[e.id];return i&&ff(i.parts,n-i.x,t-i.z)})}const Zr=Math.PI,ti=1.55;function p2(n,t,e,i){const s=e-t,o=(t+e)/2;n.box(s+.2,.14,1.3,"#f3eadb",{x:o,y:-.14,z:i}),n.box(s+.2,.03,.9,"#c9a27a",{x:o,z:i});const r=["#ffd23f","#ff5fa2","#5ef0ff","#a6ff4f","#ff8a3d","#b388ff"];for(const a of[i-.62,i+.62]){let l=null;for(let c=0;c<=18;c++){const f=c/18,u=[t+s*f,Math.sin(f*Zr)*2.3,a];l&&n.rod(l,u,.12,"#d7262e"),c>0&&c<18&&n.ball(.07,r[c%r.length],{x:u[0],y:u[1]+.1,z:a,bucket:"neon"}),l=u}for(let c=1;c<9;c++){const f=c/9;n.rod([t+s*f,Math.sin(f*Zr)*2.3,a],[t+s*f,0,a],.03,"#f4f4f4")}for(let c=t+.2;c<e;c+=.45)n.box(.04,.3,.04,"#f4f4f4",{x:c,z:a})}for(let a=1;a<6;a++){const l=a/6;n.mark("halo",t+s*l,Math.sin(l*Zr)*2.3+.1,i,{color:r[a%r.length],size:1.6})}}function m2(n){const t=new En;for(const s of[-1,0,1])t.box(.36,.34,.94,"#f4f4f2",{z:s}),t.box(.37,.06,.95,n,{y:.08,z:s}),t.box(.37,.1,.8,"#d8ecff",{y:.19,z:s,bucket:"glow"}),t.box(.3,.03,.9,"#c7cbd0",{y:.34,z:s});for(const s of[-1,1])t.box(.3,.14,.02,"#2a3340",{y:.17,z:s*1.48}),t.box(.08,.04,.02,"#fff6d6",{x:.1,y:.07,z:s*1.48,bucket:"neon"}),t.box(.08,.04,.02,"#fff6d6",{x:-.1,y:.07,z:s*1.48,bucket:"neon"});const e=t.build(),i=new fn;for(const s of["solid","glow","neon"])e[s]&&i.add(new Se(e[s],un[s]));return i}function g2(n,t){const e=new Map(n.map(f=>[f.id,f])),i=new En,s=new fn,o=e.get(qh.id);if(o&&t){const f=o.group.position,u=t.group.position,h=Math.hypot(u.x-f.x,u.z-f.z),d=[(u.x-f.x)/h,(u.z-f.z)/h];let g=rs;for(;g<h-rs&&yh(f.x+d[0]*(g+.2),f.z+d[1]*(g+.2));)g+=.2;i.at(f.x,0,f.z,Math.atan2(-d[1],d[0]),()=>p2(i,g-.6,h-Un+.3,0))}const r=new Map;for(const f of Xo)for(let u=0;u<f.path.length-1;u++){const h=[f.path[u],f.path[u+1]].sort().join("|");r.has(h)||r.set(h,[]),r.get(h).push(f)}const a=[];for(const[f,u,h,d]of ep()){if(!e.has(h)||!e.has(d))continue;const g=r.get([h,d].sort().join("|"))||[],x=Math.hypot(u[0]-f[0],u[1]-f[1]),m=[(u[0]-f[0])/x,(u[1]-f[1])/x],p=[-m[1],m[0]],_=Math.atan2(m[0],m[1]),y=g.length*.66,v=Math.floor(x/2.6);for(let C=0;C<=v;C++){const A=x*C/Math.max(1,v),T=f[0]+m[0]*A,R=f[1]+m[1]*A;yh(T,R)&&i.at(T,0,R,_,()=>{i.box(.26,ti-.4,.26,"#cfcac0"),i.box(y+.2,.16,.42,"#bdb7ac",{y:ti-.55})})}g.forEach((C,A)=>{const T=(A-(g.length-1)/2)*.66,R=f[0]+p[0]*T,E=f[1]+p[1]*T;i.at(R+m[0]*x*.5,0,E+m[1]*x*.5,_,()=>{i.box(.5,.24,x,"#c9c4bb",{y:ti-.39}),i.box(.52,.07,x,C.color,{y:ti-.2});for(const V of[-.12,.12])i.box(.035,.04,x,"#7b7f85",{x:V,y:ti-.13});for(const V of[-1,1]){const F=V*(x/2-.5);i.box(.62,.9,1,"#d6d1c7",{y:0,z:F}),i.box(.64,.08,1.02,C.color,{y:ti+.62,z:F}),i.box(.66,.06,1.1,"#e9e4da",{y:ti+.7,z:F});for(const Y of[-.28,.28])i.box(.05,.7,.05,"#9aa0a6",{x:Y,y:ti-.12,z:F})}});const M=m2(C.color);M.visible=!1,s.add(M);const L=wn(ls(`${h}${d}${C.id}`)),W=3.2+L()*.8;a.push({g:M,sx:R,sz:E,d:m,span:x,ry:_,speed:W,period:x/W+3+L()*6,off:L()*30})})}const l=i.build();for(const f of["solid","glow","neon"]){if(!l[f])continue;const u=new Se(l[f],un[f]);u.castShadow=f==="solid",u.receiveShadow=f==="solid",u.matrixAutoUpdate=!1,u.updateMatrix(),s.add(u)}function c(f){for(const u of a){const h=(f+u.off)/u.period,d=Math.floor(h),g=(h-d)*u.period,m=(u.span-1.2)/u.speed;if(g>m){u.g.visible=!1;continue}u.g.visible=!0;let p=.6+g*u.speed,_=u.ry;d%2&&(p=u.span-p,_+=Zr),u.g.position.set(u.sx+u.d[0]*p,ti,u.sz+u.d[1]*p),u.g.rotation.y=_}}return{object:s,marks:l.marks,update:c}}const aa=Math.PI,Os=new Ft,Mh=new ee,x2=`
uniform float uTime;
uniform float uNight;
uniform float uScale;
uniform vec2 uFade;
attribute vec3 aColor;
attribute float aSize;
attribute float aOn;
varying vec3 vColor;
varying float vA;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float d = -mv.z;
  float flick = 0.9 + 0.1 * sin(uTime * 2.3 + position.x * 1.7 + position.z * 2.9);
  // 鏡頭貼很近時把光暈收淡，才不會蓋掉招牌上的字
  vA = uNight * aOn * flick * (1.0 - smoothstep(uFade.x, uFade.y, d)) * mix(0.3, 1.0, smoothstep(5.0, 22.0, d));
  vColor = aColor;
  gl_PointSize = vA > 0.004 ? min(aSize * uScale / d, 300.0) : 0.0;
  gl_Position = projectionMatrix * mv;
}`,v2=`
varying vec3 vColor;
varying float vA;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(p, p);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * 3.2) * (1.0 - r2) * vA;
  gl_FragColor = vec4(vColor, a);
  #include <colorspace_fragment>
}`;function np(n,t={}){const e=Math.max(1,n.length),i=new Float32Array(e*3),s=new Float32Array(e*3),o=new Float32Array(e),r=new Float32Array(e).fill(1);n.forEach((h,d)=>{i.set([h.pos.x,h.pos.y,h.pos.z],d*3),Os.set(h.color),s.set([Os.r,Os.g,Os.b],d*3),o[d]=h.size});const a=new Ee,l=new re(i,3);t.dynamic&&l.setUsage(fi),a.setAttribute("position",l),a.setAttribute("aColor",new re(s,3)),a.setAttribute("aSize",new re(o,1));const c=new re(r,1).setUsage(fi);a.setAttribute("aOn",c);const f=new Ge({uniforms:{uTime:be.uTime,uNight:be.uNight,uScale:be.uPointScale,uFade:be.uFade},vertexShader:x2,fragmentShader:v2,transparent:!0,depthWrite:!1,blending:Ti}),u=new Wc(a,f);return u.frustumCulled=!1,u.renderOrder=5,{object:u,count:n.length,set(h,d){r[h]=d},commit(){c.needsUpdate=!0},move(h,d,g,x){i[h*3]=d,i[h*3+1]=g,i[h*3+2]=x},commitPos(){l.needsUpdate=!0}}}const _2=`
uniform float uNight;
attribute float aOn;
varying vec2 vUv;
varying vec3 vCol;
varying float vA;
void main() {
  vUv = uv;
  vCol = instanceColor;
  vA = aOn * uNight;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}`,y2=`
varying vec2 vUv;
varying vec3 vCol;
varying float vA;
void main() {
  float r = length(vUv - 0.5) * 2.0;
  float a = pow(max(0.0, 1.0 - r), 1.7) * vA * 0.7;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vCol, a);
  #include <colorspace_fragment>
}`;function M2(n){const t=Math.max(1,n.length),e=new ds(1,1);e.rotateX(-aa/2);const i=new na(new Float32Array(t).fill(1),1).setUsage(fi);e.setAttribute("aOn",i);const s=new Ge({uniforms:{uNight:be.uNight},vertexShader:_2,fragmentShader:y2,transparent:!0,depthWrite:!1,blending:Ti,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),o=new Hn(e,s,t);return n.forEach((r,a)=>{const l=r.r*2;Mh.makeScale(l,1,l).setPosition(r.pos.x,Math.max(r.pos.y,.095),r.pos.z),o.setMatrixAt(a,Mh),o.setColorAt(a,Os.set(r.color))}),n.length||o.setColorAt(0,Os.set("#000")),o.count=n.length,o.frustumCulled=!1,o.renderOrder=4,{object:o,set(r,a){i.array[r]=a},commit(){i.needsUpdate=!0}}}const b2={steam:0,big:1,smoke:2,incense:3},bh=[5,9,7,4],S2=`
uniform float uTime;
uniform float uScale;
attribute float aSeed;
attribute float aKind;
attribute float aOn;
varying float vA;
varying float vKind;
void main() {
  float speed = aKind < 0.5 ? 0.33 : (aKind < 1.5 ? 0.16 : (aKind < 2.5 ? 0.11 : 0.2));
  float rise = aKind < 0.5 ? 0.85 : (aKind < 1.5 ? 1.9 : (aKind < 2.5 ? 3.4 : 1.2));
  float grow = aKind < 0.5 ? 0.38 : (aKind < 1.5 ? 1.15 : (aKind < 2.5 ? 1.3 : 0.2));
  float base = aKind < 0.5 ? 0.1 : (aKind < 1.5 ? 0.4 : (aKind < 2.5 ? 0.3 : 0.05));
  float t = fract(uTime * speed + aSeed);
  vec3 p = position;
  float sw = aSeed * 37.0;
  p.y += t * rise;
  p.x += sin(sw + uTime * 0.9) * 0.12 * t + t * t * 0.35;
  p.z += cos(sw * 1.3 + uTime * 0.7) * 0.12 * t;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vA = aOn * sin(t * 3.14159) * (aKind > 2.5 ? 0.45 : 0.5);
  vKind = aKind;
  gl_PointSize = vA > 0.003 ? (base + grow * t) * uScale / -mv.z : 0.0;
  gl_Position = projectionMatrix * mv;
}`,E2=`
uniform float uNight;
varying float vA;
varying float vKind;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(p, p);
  if (r2 > 1.0) discard;
  vec3 c = vKind < 1.5 ? vec3(1.0) : (vKind < 2.5 ? vec3(0.58, 0.57, 0.6) : vec3(0.84, 0.87, 0.92));
  c *= mix(1.0, 0.72, uNight);
  gl_FragColor = vec4(c, (1.0 - r2) * (1.0 - r2) * vA);
  #include <colorspace_fragment>
}`;function w2(n){const t=wn(99),e=[];n.forEach((d,g)=>{const x=b2[d.kind]??0;for(let m=0;m<bh[x];m++)e.push({e:g,k:x,seed:(m+t()*.6)/bh[x],x:d.pos.x,y:d.pos.y,z:d.pos.z})});const i=Math.max(1,e.length),s=new Float32Array(i*3),o=new Float32Array(i),r=new Float32Array(i),a=new Float32Array(i).fill(1),l=new Int32Array(i);e.forEach((d,g)=>{s.set([d.x,d.y,d.z],g*3),o[g]=d.seed,r[g]=d.k,l[g]=d.e});const c=new Ee;c.setAttribute("position",new re(s,3)),c.setAttribute("aSeed",new re(o,1)),c.setAttribute("aKind",new re(r,1));const f=new re(a,1).setUsage(fi);c.setAttribute("aOn",f);const u=new Ge({uniforms:{uTime:be.uTime,uScale:be.uPointScale,uNight:be.uNight},vertexShader:S2,fragmentShader:E2,transparent:!0,depthWrite:!1}),h=new Wc(c,u);return h.frustumCulled=!1,h.renderOrder=6,{object:h,setEmitter(d,g){for(let x=0;x<e.length;x++)l[x]===d&&(a[x]=g)},commit(){f.needsUpdate=!0}}}const T2=`
uniform float uTime;
uniform float uRain;
uniform vec3 uCenter;
attribute float aEnd;
varying float vA;
void main() {
  vec3 p = position;
  p.y = mod(p.y - uTime * 26.0, 64.0) - 18.0;
  p.x = mod(p.x - uCenter.x + 75.0, 150.0) - 75.0 + uCenter.x;
  p.z = mod(p.z - uCenter.z + 75.0, 150.0) - 75.0 + uCenter.z;
  p.y += aEnd * 1.15;
  p.x += aEnd * 0.16;
  vA = uRain * (0.22 + 0.3 * aEnd);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,A2=`
varying float vA;
void main() {
  gl_FragColor = vec4(0.82, 0.88, 0.97, vA);
}`;function C2(n){const t=wn(7),e=new Float32Array(n*6),i=new Float32Array(n*2);for(let l=0;l<n;l++){const c=(t()-.5)*150,f=t()*64,u=(t()-.5)*150;e.set([c,f,u,c,f,u],l*6),i[l*2+1]=1}const s=new Ee;s.setAttribute("position",new re(e,3)),s.setAttribute("aEnd",new re(i,1));const o={value:new D},r=new Ge({uniforms:{uTime:be.uTime,uRain:be.uRain,uCenter:o},vertexShader:T2,fragmentShader:A2,transparent:!0,depthWrite:!1}),a=new j_(s,r);return a.frustumCulled=!1,a.visible=!1,a.renderOrder=7,{object:a,update(l){o.value.copy(l),a.visible=be.uRain.value>.01}}}const R2=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,P2=`
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uBottom;
uniform float uNight;
uniform float uTime;
varying vec3 vDir;
float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 c = h > 0.0 ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(uHorizon, uBottom, pow(clamp(-h, 0.0, 1.0), 0.42));
  if (uNight > 0.01 && h > -0.12) {
    vec3 q = floor(d * 260.0);
    float s = hash(q);
    float tw = 0.55 + 0.45 * sin(uTime * 1.7 + s * 90.0);
    c += vec3(step(0.9972, s) * uNight * tw * smoothstep(-0.12, 0.08, h));
  }
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`;function L2(){const n={uTop:{value:new Ft("#4aa3e8")},uHorizon:{value:new Ft("#bfe3ff")},uBottom:{value:new Ft("#e8f3ff")},uNight:be.uNight,uTime:be.uTime},t=new Se(new ga(800,32,16),new Ge({uniforms:n,vertexShader:R2,fragmentShader:P2,side:en,depthWrite:!1,fog:!1}));return t.frustumCulled=!1,t.renderOrder=-10,{object:t,uniforms:n,update(e){t.position.copy(e.position)}}}const D2=`
#include <fog_pars_vertex>
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,I2=`
#include <fog_pars_fragment>
uniform float uTime;
uniform vec3 uLight;
uniform vec3 uShade;
uniform vec3 uGlow;
uniform float uNight;
uniform vec3 uShadows[21];
varying vec3 vW;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}
void main() {
  vec2 p = vW.xz * 0.014 + vec2(uTime * 0.006, uTime * 0.0025);
  float n = fbm(p);
  float puff = smoothstep(0.32, 0.78, n);
  vec3 c = mix(uShade, uLight, puff);
  float sh = 0.0;
  for (int i = 0; i < 21; i++) {
    vec3 s = uShadows[i];
    if (s.z <= 0.0) continue;
    float d = length(vW.xz - s.xy);
    sh = max(sh, 1.0 - smoothstep(s.z * 0.45, s.z, d));
  }
  c *= 1.0 - sh * mix(0.22, 0.1, uNight);
  // 夜裡島底下有城市的暖光滲出來
  float glow = 0.0;
  for (int i = 0; i < 21; i++) {
    vec3 s = uShadows[i];
    if (s.z <= 0.0) continue;
    glow = max(glow, 1.0 - smoothstep(0.0, 15.0, length(vW.xz - s.xy)));
  }
  c += uGlow * glow * glow * uNight * 0.14;
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;function U2(n=-34){const t={...Hc.clone(bt.fog),uTime:be.uTime,uNight:be.uNight,uLight:{value:new Ft("#ffffff")},uShade:{value:new Ft("#cfe3f5")},uGlow:{value:new Ft("#ffb36b")},uShadows:{value:Array.from({length:21},()=>new D(0,0,0))}},e=new ds(2400,2400,1,1);e.rotateX(-aa/2);const i=new Se(e,new Ge({uniforms:t,vertexShader:D2,fragmentShader:I2,fog:!0,depthWrite:!0}));return i.position.y=n,i.renderOrder=-5,{object:i,uniforms:t,y:n,setShadows(s,o){const r=Math.max(.25,o.y);s.forEach((a,l)=>{if(l>=21)return;const c=(a.y-n)/r;t.uShadows.value[l].set(a.x-o.x*c*.6,a.z-o.z*c*.6,11.5)})},update(s){i.position.x=s.position.x,i.position.z=s.position.z}}}function N2(n=14,t=3){const e=wn(t),i=new fn,s=new Jc({color:"#ffffff",emissive:"#ffffff",emissiveIntensity:.18,flatShading:!0}),o=new ma(1,1),r=[];for(let l=0;l<n;l++){const c=[],f=4+Math.floor(e()*4);for(let m=0;m<f;m++){const p=o.clone(),_=1.4+e()*1.6;p.scale(_*1.25,_*.75,_),p.translate((m-f/2)*1.6+e()*.8,e()*.9,(e()-.5)*1.8),c.push(p)}const u=z2(c),h=new Se(u,s),d=e()*aa*2,g=e()<.6?-8-e()*14:6+e()*10,x=(g>0?205:190)+e()*40;h.position.y=g,h.scale.setScalar(.9+e()*1.1),h.rotation.y=e()*aa,i.add(h),r.push({mesh:h,a:d,r:x,speed:.4+e()*.6})}const a=l=>l.mesh.position.set(Math.cos(l.a)*l.r+3,l.mesh.position.y,Math.sin(l.a)*l.r*.72-10);return r.forEach(a),{object:i,material:s,update(l){for(const c of r)c.a+=c.speed/c.r*l,a(c)}}}function z2(n){let t=0;for(const r of n)t+=r.index?r.index.count:r.attributes.position.count;const e=new Float32Array(t*3),i=new Float32Array(t*3);let s=0;for(const r of n){const a=r.index?r.toNonIndexed():r;e.set(a.attributes.position.array,s*3),i.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count}const o=new Ee;return o.setAttribute("position",new re(e,3)),o.setAttribute("normal",new re(i,3)),o}const Re=Object.fromEntries(vn.map(n=>[n.id,n])),$n={};var Xh;for(const n of vn)($n[Xh=n.island]||($n[Xh]=[])).push(n);const Sh=[.42,.3,.16,.08,.06,.12,.3,.52,.58,.5,.55,.78,.9,.72,.6,.6,.66,.84,1,.97,.88,.76,.64,.52];function F2(n){const t=(n%gn+gn)%gn/60,e=Math.floor(t),i=t-e;return Sh[e]*(1-i)+Sh[(e+1)%24]*i}const O2=new Set(["nightMarketHall","raoheGate","nightStalls","neon","izakayaLanterns"]);function ip(n,t,e=!1){const i=$n[n]||[],s=t%gn,o=F2(s);let r=0;for(const u of i)r+=no(u,t);r=i.length?r/i.length:o;const a=cs[n],l=a?a.residents:1;let c=.42*o+.58*Math.min(1,r*1.35);c*=.72+.28*Math.min(1,l/1.3);const f=s/60;return a&&a.landmarks.some(u=>O2.has(u))&&(f>=18||f<1)&&(c=Math.min(1,c*1.25)),e&&(c*=.78),ve(c,.03,1)}function k2(n,t){return Xo.some(e=>e.path.includes(n)&&e.path.includes(t))}function B2(n){return Xo.filter(t=>t.path.includes(n)).filter((t,e,i)=>i.findIndex(s=>s.name===t.name)===e)}const hl=new Map;function Ma(n){if(hl.has(n.id))return hl.get(n.id);const e=n.queue==="long"||["play","bar","dessert","cafe","hotpot"].includes(n.cat)?2.3:1.35;let i=0;const s=Fe.map(o=>{const r=Tc(o,n.island);let a=(.4+o.residents)*Math.exp(-r/e);return r===0?a*=2.2:k2(o.id,n.island)&&(a*=1.35),a+=.35*(n.voices||[]).filter(l=>l.home===o.id).length,i+=a,{island:o.id,w:a}});for(const o of s)o.w/=i;return s.sort((o,r)=>r.w-o.w),hl.set(n.id,s),s}function fo(n){const t=n.found||{},e=Object.keys(Ji).reduce((i,s)=>i+(t[s]||0),0)||1;return Object.keys(Ji).map(i=>({ch:i,p:(t[i]||0)/e})).sort((i,s)=>s.p-i.p)}const dl=new Map;function H2(n){if(dl.has(n.id))return dl.get(n.id);let t=0;for(let i=0;i<7;i++)t+=Yh(n,i).reduce((s,o)=>s+o,0);const e=t/168;return dl.set(n.id,e),e}function Kr(n,{mode:t="now",shopId:e=null,islandId:i=null,rain:s=!1,limit:o=48}={}){var c;const r=e?[Re[e]]:i?$n[i]||[]:vn,a=!!(e||i),l=[];for(const f of r){if(!f)continue;let u=t==="month"?H2(f)*1.6:no(f,n);if(a&&u<.2&&(u=.2),u<=.02)continue;const h=u*Math.sqrt(f.visits/1e3)*(s&&!((c=f.flags)!=null&&c.rainOK)?.6:1);for(const d of Ma(f)){if(d.island===f.island)continue;const g=h*d.w;g<.004||l.push({from:d.island,to:f.island,shop:f.id,w:g})}}return l.sort((f,u)=>u.w-f.w),l.slice(0,o)}function $2(n){const t=new Map;for(const i of $n[n]||[])for(const s of Ma(i))t.set(s.island,(t.get(s.island)||0)+s.w*i.visits);const e=[...t.values()].reduce((i,s)=>i+s,0)||1;return[...t.entries()].map(([i,s])=>({island:i,p:s/e})).sort((i,s)=>s.p-i.p)}function V2(n){const t={};for(const i of $n[n]||[])for(const{ch:s,p:o}of fo(i))t[s]=(t[s]||0)+o*i.visits;const e=Object.values(t).reduce((i,s)=>i+s,0)||1;return Object.entries(t).map(([i,s])=>({ch:i,p:s/e})).sort((i,s)=>s.p-i.p)}function sp(n,t=6){return vn.map(e=>({shop:e,c:no(e,n)})).filter(e=>e.c>0).sort((e,i)=>i.c*Math.sqrt(i.shop.visits)-e.c*Math.sqrt(e.shop.visits)).slice(0,t)}const G2=["阿明","小美","阿宏","佩佩","小胖","阿嬤","志明","春嬌","阿凱","小芸","老王","阿傑","宅宅","小柯","阿珠","嘉嘉","大頭","阿翔","小魚","阿德","奶茶","小安","阿Ben","瑋瑋"],W2=["","","","剛下班的","騎車的","帶小孩的","一個人的","加班完的","大學生","夜貓子"],Eh={snack:["一口接一口停不下來","這攤我從國小吃到現在","老闆記得我要加辣"],noodle:["湯頭喝到見底","麵條Q到會彈","冬天就是要這碗"],rice:["滷汁淋好淋滿","白飯不小心多吃一碗","便當界的天花板"],stirfry:["啤酒先上三手","老闆火力全開","一桌菜吵吵鬧鬧最好吃"],hotpot:["湯底一喝就回不去","冬天的救贖","肉盤直接加點"],breakfast:["阿姨叫我帥哥","蛋餅皮脆到發出聲音","奶茶一定要大冰奶"],cafe:["插座在窗邊那排","拿鐵拉花好可愛","待一個下午剛剛好"],dessert:["芒果給好給滿","吃完整個人涼起來","剉冰山快塌了"],drink:["半糖少冰剛剛好","珍珠今天特別Q","排了一下但值得"],bar:["小酌一杯聊到深夜","調酒師超會聊","下班的靈魂充電站"],play:["玩到忘記時間","輸的請宵夜","這週的紓壓額度用完"]};function wh(n,t=Math.random){const e=vn.map(a=>({s:a,c:no(a,n)})).filter(a=>a.c>.05);if(!e.length)return null;const{s:i}=Ro(e,a=>a.c*Math.sqrt(a.s.visits),t),s=Ro(Ma(i),a=>a.w,t).island,o=Ro(fo(i),a=>a.p,t).ch,r=Ro([1,2,2,3,4,4,5,6],()=>1,t);return{shop:i.id,from:s,via:o,party:r,who:`${ct(t,W2)}${ct(t,G2)}`,line:ct(t,Eh[i.cat]||Eh.snack),mow:n}}function Wn(n,t){const e=Ip(n,t);return{...e,crowd:e.open?no(n,t):0}}const ji=Math.PI,Dn=new ee,op=new D,la=new Vn,rp=new _n,ap=new D,Uo=new Ft,ii=new ee().makeScale(0,0,0),X2=["#e74c3c","#3498db","#f1c40f","#2ecc71","#ecf0f1","#ecf0f1","#34495e","#e67e22","#9b59b6","#1abc9c","#f5b7b1","#95a5a6","#ffffff","#ff6b6b","#ffd6a5","#a0c4ff","#cdb4db","#1d3557","#2b2d42","#ef476f"],q2=["#2b3a55","#1f1f24","#3c4a63","#556070","#8a7a60","#2f4f6f","#5b5b5b","#384d7a","#c2b59b","#1f1f24"],Y2=["#1b1714","#1b1714","#1b1714","#2a1f1a","#3b2a20","#4a3426","#14110f","#6b4a33","#8a5a3c"],j2=["#cfcfcf","#b9b9b9","#e6e6e6","#a8a8a8"],Z2=["#f5f5f5","#e63946","#1d3557","#ffb703","#2a9d8f","#ffffff","#ff8fab","#3a3a3a","#8ecae6"],K2=["#e9f1f5","#e9f1f5","#e9f1f5","#1d3557","#c8102e","#ffd166","#2a9d8f","#3a3a3a","#ff8fab","#8ecae6"],J2=["#ece8df","#c8102e","#1f4e9c","#2b2b2b","#9fd3c7","#f2c14e","#7d8b99","#ffffff","#e98fa4","#6b8e5a","#d9d9d9"],ca="#f0c4a0";function lp(n){const t=n.map(([e,i])=>{const s=new En;i(s);const o=s.build().solid;return o.setAttribute("aPart",new ue(new Float32Array(o.attributes.position.count).fill(e),1)),o});return kd(t,!1)}const ln="#ffffff";function Q2(){return lp([[0,n=>{n.box(.19,.2,.11,ln,{y:.235});for(const t of[-.122,.122])n.box(.05,.17,.06,ln,{x:t,y:.255})}],[1,n=>{for(const t of[-.045,.045])n.box(.075,.235,.085,ln,{x:t})}],[2,n=>{n.box(.13,.125,.12,ca,{y:.44});for(const t of[-.122,.122])n.box(.045,.045,.05,ca,{x:t,y:.212})}],[3,n=>{n.box(.14,.045,.13,ln,{y:.555}),n.box(.14,.085,.035,ln,{y:.475,z:-.05})}]])}function tM(){return lp([[0,n=>{n.box(.19,.2,.11,ln,{y:.19});for(const t of[-.122,.122])n.box(.05,.13,.06,ln,{x:t,y:.25}),n.box(.05,.05,.14,ln,{x:t,y:.25,z:.08})}],[1,n=>{for(const t of[-.045,.045])n.box(.075,.07,.2,ln,{x:t,y:.125,z:.07}),n.box(.07,.15,.075,ln,{x:t,y:-.02,z:.15})}],[2,n=>{n.box(.13,.125,.12,ca,{y:.395});for(const t of[-.1,.1])n.box(.045,.045,.05,ca,{x:t,y:.25,z:.15})}],[3,n=>{n.box(.14,.045,.13,ln,{y:.51}),n.box(.14,.085,.035,ln,{y:.43,z:-.05})}]])}function eM(){const n=new Jc({vertexColors:!0});return n.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart;
attribute vec3 aShirt;
attribute vec3 aPants;
attribute vec3 aHair;`).replace("#include <color_vertex>",`#include <color_vertex>
  vColor.rgb *= aPart < 0.5 ? aShirt : (aPart < 1.5 ? aPants : (aPart < 2.5 ? vec3(1.0) : aHair));`)},n.customProgramCacheKey=()=>"chiabao-crowd",n}function nM(){const n=new En;return n.box(.014,.42,.014,ln,{x:.07,y:.26}),n.cone(.26,.11,8,ln,{x:.07,y:.62}),n.build().solid}class Th{constructor(t,e,i){this.max=e,this.shirt=new Float32Array(e*3),this.pants=new Float32Array(e*3),this.hair=new Float32Array(e*3),this.attrs=[["aShirt",this.shirt],["aPants",this.pants],["aHair",this.hair]].map(([s,o])=>{const r=new na(o,3);return t.setAttribute(s,r),r}),this.mesh=new Hn(t,eM(),e),this.mesh.instanceMatrix.setUsage(fi),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0;for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,ii);this.free=[];for(let s=e-1;s>=0;s--)this.free.push(s);if(this.umb=new Uint8Array(e),i){this.umbMesh=new Hn(nM(),new Jc({color:"#ffffff"}),e),this.umbMesh.instanceMatrix.setUsage(fi),this.umbMesh.frustumCulled=!1;const s=wn(5);for(let o=0;o<e;o++)this.umbMesh.setMatrixAt(o,ii),this.umbMesh.setColorAt(o,Uo.set(ct(s,K2)))}this.dirty=!0,this.colorsDirty=!1}alloc(t,e){const i=this.free.pop();if(i===void 0)return-1;const s=ct(e,X2),o=t==="elder"?ct(e,j2):t==="rider"?ct(e,Z2):ct(e,Y2),r=t==="elder"&&e()<.5?ct(e,["#7a7066","#5b5b5b","#3c4a63"]):ct(e,q2);return Uo.set(s).toArray(this.shirt,i*3),Uo.set(r).toArray(this.pants,i*3),Uo.set(o).toArray(this.hair,i*3),this.colorsDirty=!0,i}release(t){t<0||(this.mesh.setMatrixAt(t,ii),this.umbMesh&&this.umb[t]&&this.umbMesh.setMatrixAt(t,ii),this.umb[t]=0,this.free.push(t),this.dirty=!0)}place(t,e,i,s,o,r=1,a=0){la.setFromEuler(rp.set(a,o,0,"YXZ")),Dn.compose(op.set(e,i,s),la,ap.set(r,r,r)),this.mesh.setMatrixAt(t,Dn),this.umbMesh&&this.umbMesh.setMatrixAt(t,this.umb[t]?Dn:ii),this.dirty=!0}placeMatrix(t,e){this.mesh.setMatrixAt(t,e),this.dirty=!0}flush(){if(this.dirty&&(this.mesh.instanceMatrix.needsUpdate=!0,this.umbMesh&&(this.umbMesh.instanceMatrix.needsUpdate=!0),this.dirty=!1),this.colorsDirty){for(const t of this.attrs)t.needsUpdate=!0;this.colorsDirty=!1}}}function iM(n,t,e){if(t<=0)return 0;const i=n.queue==="long"?9:n.queue==="short"?4.5:1.3;let s=Math.round(i*t**1.5);return e&&(s=Math.round(s*.75)),ve(s,0,9)}function sM(n){return n>=5&&n<10?.9:n>=10&&n<12?.6:n>=12&&n<14?.3:n>=14&&n<18?.7:n>=18&&n<21?.35:.02}function oM(n,t){const e=n.shop&&t.crowd.get(n.shop.id)||0;switch(n.kind){case"sit":return n.shop?ve(e*1.25,0,1):t.act*.55*(t.rain?.3:1);case"elder":return sM(t.h)*(t.rain?.45:1);case"elderStand":return(t.h>=5&&t.h<9?.9:.06)*(t.rain?.2:1);case"fan":return t.h>=18&&t.h<22?.95:t.h>=11&&t.h<18?.35:.04;default:return n.shop?ve(e*1.1,0,1):ve(t.act*.95,0,1)*(t.rain?.6:1)}}function rM(n){var o;const t=wn(ls(`${n.id}:spots`)),{x:e,z:i}=n.group.position,s=[];for(const r of n.shops)for(let a=0;a<9;a++)s.push({kind:"queue",crowd:"stand",shop:r.shop,k:a,x:e+r.queue.x+r.queue.dir*a*.29+(t()-.5)*.05,y:0,z:i+r.queue.z+(t()-.5)*.1,ry:ji+(t()-.5)*.7,s:t()<.1?.74:.94+t()*.12,look:t()<.08?"elder":"person",outdoor:!0,idx:-1});for(const r of n.marks){if(r.type!=="sit"&&r.type!=="stand")continue;const a=r.shop&&((o=n.shops.find(u=>u.shop.id===r.shop))==null?void 0:o.shop)||null,l=r.type==="sit",c=l?r.elder?"elder":"sit":r.fan?"fan":r.elder?"elderStand":"stand",f=c==="elder"||c==="elderStand";s.push({kind:c,crowd:l?"sit":"stand",shop:a,x:e+r.pos.x,y:r.pos.y,z:i+r.pos.z,ry:r.ry+(t()-.5)*.3,s:f?.93:t()<.1?.74:.94+t()*.12,look:f||t()<.08?"elder":"person",outdoor:!l&&!a,thr:t(),idx:-1})}return s}function pl(n){const t=new En;n(t);const e=t.build(),i=new fn;for(const s of["solid","glow","neon"])e[s]&&i.add(new Se(e[s],un[s]));return i}function aM(n){const t=[];for(const e of n){const i=wn(ls(`${e.id}:props`)),s=e.water?e.water.level:-.14;for(const o of e.marks)if(o.type==="boat"){const r=pl(a=>{o.fishing?(jr.boat(a,0,0,0,i,{hull:"#f4f1ea",stripe:"#1f4e9c",roof:"#2a9d8f"}),a.box(.03,.62,.03,"#d9d9d9",{y:.12,z:.25}),bn(a,[0,.72,-.45],[0,.72,.5],6,i,{bulbs:!0,sag:.06,colors:["#fff6d0","#fff1b8"]})):jr.boat(a,0,0,0,i)});e.group.add(r),t.push({kind:"boat",g:r,x:o.pos.x,z:o.pos.z,ry:o.ry,range:o.range||.5,y:s-.03,ph:i()*10})}else if(o.type==="swan"){const r=pl(a=>jr.swan(a,0,0,0));e.group.add(r),t.push({kind:"swan",g:r,x:o.pos.x,z:o.pos.z,ry:o.ry,range:o.range||.5,y:s-.02,ph:i()*10})}if(e.gondola){const o=["#f6f6f6","#4cc9f0","#f72585","#ffd166","#06d6a0","#f6f6f6"];for(let r=0;r<6;r++){const a=pl(l=>{l.box(.02,.24,.02,"#555",{y:-.24}),l.box(.34,.03,.3,"#e9ecef",{y:-.26}),l.box(.32,.3,.28,o[r],{y:-.56}),l.box(.33,.11,.29,"#fff1c4",{y:-.42,bucket:"glow"})});e.group.add(a),t.push({kind:"gondola",g:a,line:e.gondola,k:r,dir:r%2?1:-1})}}e.ferris&&t.push({kind:"ferris",f:e.ferris})}return t}const Fr=new D;function lM(n,t,e){for(const i of n)if(i.kind==="boat"||i.kind==="swan"){const s=i.kind==="swan",o=Math.sin(t*(s?.12:.16)+i.ph)*i.range,r=s?Math.cos(t*.12+i.ph)*i.range*.6:0;i.g.position.set(i.x+Math.sin(i.ry)*o+Math.cos(i.ry)*r,i.y+Math.sin(t*1.3+i.ph)*.022,i.z+Math.cos(i.ry)*o-Math.sin(i.ry)*r),i.g.rotation.set(Math.sin(t*1.1+i.ph)*.04,i.ry+(s?Math.sin(t*.12+i.ph)*.6:0),Math.sin(t*.9+i.ph)*.05)}else if(i.kind==="gondola"){const s=i.line;let o=(t*.022+i.k/6)%1;i.dir<0&&(o=1-o);const r=i.dir<0?.22:-.22;Fr.lerpVectors(s.a,s.b,o),i.g.position.set(Fr.x+r,Fr.y-Math.sin(o*ji)*s.sag-.02,Fr.z),i.g.rotation.y=Math.atan2(s.b.x-s.a.x,s.b.z-s.a.z),i.g.rotation.z=Math.sin(t*1.6+i.k)*.04}else if(i.kind==="ferris"){const s=i.f;s.angle+=e*.11,s.wheel.rotation.z=s.angle;for(let o=0;o<s.n;o++){const r=s.angle+o/s.n*ji*2;Dn.makeTranslation(s.hub.x+Math.cos(r)*s.RW,s.hub.y+Math.sin(r)*s.RW,s.hub.z+.02),s.body.setMatrixAt(o,Dn),s.win.setMatrixAt(o,Dn)}s.body.instanceMatrix.needsUpdate=!0,s.win.instanceMatrix.needsUpdate=!0}}function cM(n,{mobile:t,eventBuilt:e}={}){const i=e?[...n,e]:n,s=wn(2024),o=new Th(Q2(),t?1500:2600,!0),r=new Th(tM(),t?700:1100,!1),a={stand:o,sit:r},l=new fn;l.add(o.mesh,o.umbMesh,r.mesh),o.umbMesh.visible=!1;const c=i.map(k=>({built:k,spots:rM(k),act:0})),f=n.map(k=>({islands:[k],z:k.group.position.z,x0:k.group.position.x-Un+.35,x1:k.group.position.x+Un-.35,walkers:[],rides:[]}));new Map(f.map(k=>[k.islands[0].id,k]));const u=(k,I)=>{let ut=k.islands[0];for(const K of k.islands)Math.abs(K.group.position.x-I)<Math.abs(ut.group.position.x-I)&&(ut=K);return ut},h=t?50:90,d=new En;_a(d,0,0,0,"#ffffff");const g=d.build(),x=new Hn(g.solid,un.solid,h),m=new Hn(g.glow,un.glow,h),p=new En;jr.taxi(p,0,0,0);const _=new Hn(p.build().solid,un.solid,12);for(const k of[x,m,_]){k.instanceMatrix.setUsage(fi),k.frustumCulled=!1;for(let I=0;I<k.count;I++)k.setMatrixAt(I,ii)}for(let k=0;k<h;k++)x.setColorAt(k,Uo.set(ct(s,J2)));l.add(x,m,_);const y=[];for(let k=h-1;k>=0;k--)y.push(k);const v=[];for(let k=11;k>=0;k--)v.push(k);const C=np(Array.from({length:(h+12)*2},(k,I)=>({pos:new D(0,-999,0),color:I%2?"#ff4d4d":"#fff2c6",size:I%2?.35:.85})),{dynamic:!0});l.add(C.object);const A=aM(i);function T(k,I,ut){const K=a[k.crowd];if(I&&k.idx<0){if(k.idx=K.alloc(k.look,s),k.idx<0)return}else if(!I&&k.idx>=0){K.release(k.idx),k.idx=-1;return}if(k.idx<0)return;K.umbMesh&&(K.umb[k.idx]=ut&&k.outdoor?1:0);const tt=k.crowd==="sit"?k.y-.13:k.y;K.place(k.idx,k.x,tt,k.z,k.ry,k.s,k.look==="elder"&&k.crowd==="stand"?.12:0)}function R(k,I,ut){const K=o.alloc(s()<.1?"elder":"person",s);if(K<0)return;const tt={idx:K,x:I,lane:s()<.5?2.6:2.95,dir:s()<.5?-1:1,speed:.32+s()*.18,ph:s()*10,s:s()<.12?.74:.94+s()*.12};o.umb[K]=ut?1:0,k.walkers.push(tt)}function E(k){const I=s()<.12&&v.length,ut=I?v.pop():y.pop();if(ut===void 0)return;const K=I?-1:r.alloc("rider",s);k.rides.push({taxi:!!I,v:ut,rider:K,x:k.x0+s()*(k.x1-k.x0),east:s()<.5,speed:I?2.4+s()*.6:1.5+s()*1.1,ph:s()*10})}function M(k){const I=k.rides.pop();I&&(I.taxi?(_.setMatrixAt(I.v,ii),v.push(I.v)):(x.setMatrixAt(I.v,ii),m.setMatrixAt(I.v,ii),y.push(I.v),r.release(I.rider)))}let L=!1;function W(k,I){const ut=k%1440/60;for(const K of c){const tt=K.built.id;K.act=ip(tt,k,I);const Lt=new Map(K.built.shops.map(j=>[j.shop.id,no(j.shop,k)])),Kt={act:K.act,crowd:Lt,h:ut,rain:I};for(const j of K.spots){const ot=j.kind==="queue"?j.k<iM(j.shop,Lt.get(j.shop.id)||0,I):j.thr<oM(j,Kt);T(j,ot,I)}}for(const K of f){const tt=new Map;for(const ot of K.islands){const vt=c.find(St=>St.built===ot),xt=Math.round((1+vt.act*(4+ot.data.residents*7))*(I?.6:1)*(t?.7:1));tt.set(ot,Math.min(xt,18))}const Lt=new Map(K.islands.map(ot=>[ot,[]]));for(const ot of K.walkers)Lt.get(u(K,ot.x)).push(ot);for(const ot of K.islands){const vt=Lt.get(ot),xt=tt.get(ot);for(;vt.length>xt;){const St=vt.pop();o.release(St.idx),K.walkers.splice(K.walkers.indexOf(St),1)}for(let St=vt.length;St<xt;St++)R(K,ot.group.position.x+(s()*2-1)*(Un-.5),I)}if(I!==L)for(const ot of K.walkers)o.umb[ot.idx]=I?1:0;const Kt=K.islands.reduce((ot,vt)=>ot+c.find(xt=>xt.built===vt).act,0)/K.islands.length,j=Math.round(K.islands.length*(.6+Kt*2.6)*(t?.7:1));for(;K.rides.length>j;)M(K);for(;K.rides.length<j&&(y.length||v.length);)E(K)}o.umbMesh.visible=I,L=I}const V=new ee,F=new ee().makeTranslation(0,.19,-.1);let Y=0;function O(k,I,ut){for(const K of f){for(const tt of K.walkers){tt.x+=tt.dir*tt.speed*k,tt.x>K.x1?(tt.x=K.x1,tt.dir=-1):tt.x<K.x0&&(tt.x=K.x0,tt.dir=1),tt.ph+=k*tt.speed*16;const Lt=Math.abs(Math.sin(tt.ph))*.025;o.place(tt.idx,tt.x,Lt,K.z+tt.lane,tt.dir>0?ji/2:-ji/2,tt.s,Math.sin(tt.ph)*.05)}for(const tt of K.rides){tt.x+=(tt.east?1:-1)*tt.speed*k,tt.x>K.x1-.2?(tt.x=K.x1-.2,tt.east=!1):tt.x<K.x0+.2&&(tt.x=K.x0+.2,tt.east=!0);const Lt=K.z+hh+(tt.east?.43:-.43),Kt=tt.east?ji/2:-ji/2;la.setFromEuler(rp.set(0,Kt,Math.sin(I*2+tt.ph)*.03)),Dn.compose(op.set(tt.x,.03,Lt),la,ap.set(1,1,1)),tt.taxi?_.setMatrixAt(tt.v,Dn):(x.setMatrixAt(tt.v,Dn),m.setMatrixAt(tt.v,Dn),tt.rider>=0&&r.placeMatrix(tt.rider,V.multiplyMatrices(Dn,F)))}}if(ut>.02){Y=0;for(const K of f)for(const tt of K.rides){const Lt=tt.east?1:-1,Kt=K.z+hh+(tt.east?.43:-.43),j=(tt.taxi,.3);C.move(Y++,tt.x+Lt*j,tt.taxi?.15:.3,Kt),C.move(Y++,tt.x-Lt*.28,.2,Kt)}for(let K=Y;K<C.count;K++)C.move(K,0,-999,0);C.commitPos()}x.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0,_.instanceMatrix.needsUpdate=!0,lM(A,I,k),o.flush(),r.flush()}return{object:l,setTime:W,update:O,activity:k=>{var I;return((I=c.find(ut=>ut.built.id===k))==null?void 0:I.act)??0},stats(){return{standing:o.max-o.free.length,sitting:r.max-r.free.length,rides:f.reduce((k,I)=>k+I.rides.length,0)}}}}const Ds=28,fM=`
uniform float uTime;
uniform float uScale;
uniform float uFocus;
uniform float uPx;
attribute vec3 aB;
attribute vec3 aC;
attribute float aPhase;
attribute float aSpeed;
attribute vec3 aColor;
attribute float aDim;
varying vec3 vColor;
varying float vA;
void main() {
  float t = fract(uTime * aSpeed + aPhase);
  float u = 1.0 - t;
  vec3 p = u * u * position + 2.0 * u * t * aB + t * t * aC;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vColor = aColor;
  vA = smoothstep(0.0, 0.08, t) * (1.0 - smoothstep(0.88, 1.0, t)) * mix(1.0, 0.12, aDim) * smoothstep(14.0, 34.0, -mv.z);
  gl_PointSize = clamp((0.5 - 0.2 * uFocus) * uScale / -mv.z, 3.6 * uPx, 5.5 * uPx);
  gl_Position = projectionMatrix * mv;
}`,uM=`
varying vec3 vColor;
varying float vA;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(p, p);
  if (r2 > 1.0) discard;
  float core = smoothstep(0.35, 0.0, r2);
  float a = (exp(-r2 * 3.0) * 0.8 + core * 0.6) * vA;
  gl_FragColor = vec4(mix(vColor, vec3(1.0), core * 0.5), a);
  #include <colorspace_fragment>
}`,hM=`
uniform vec2 uRes;
uniform float uWidth;
attribute vec3 aOther;
attribute float aSide;
attribute float aEnd;
attribute float aT;
attribute float aW;
varying float vT;
varying float vW;
varying float vS;
varying float vDepth;
void main() {
  vT = aT;
  vW = aW;
  vS = aSide;
  vec4 a = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vDepth = a.w;
  vec4 b = projectionMatrix * modelViewMatrix * vec4(aOther, 1.0);
  vec2 d = (b.xy / b.w - a.xy / a.w) * uRes;
  d = length(d) > 0.0001 ? normalize(d) : vec2(1.0, 0.0);
  if (aEnd > 0.5) d = -d;
  vec2 n = vec2(-d.y, d.x);
  float w = uWidth * (0.55 + 0.45 * aW);
  a.xy += n * aSide * w / uRes * a.w;
  gl_Position = a;
}`,dM=`
uniform vec3 uColor;
uniform float uOpacity;
uniform float uFloor;
uniform float uTime;
varying float vT;
varying float vW;
varying float vS;
varying float vDepth;
void main() {
  float a = sin(vT * 3.14159) * uOpacity * (uFloor + (1.0 - uFloor) * vW);
  // 離鏡頭太近的那段淡掉：拉近看店時，光弧才不會變成橫過畫面的雜線
  a *= smoothstep(14.0, 34.0, vDepth);
  float dash = 0.78 + 0.22 * sin(vT * 50.0 - uTime * 4.0);
  float edge = 1.0 - smoothstep(0.35, 1.0, abs(vS));
  gl_FragColor = vec4(uColor, a * dash * edge);
  #include <colorspace_fragment>
}`;function ml(n,t,e,i,s){const o=1-i;return s.set(o*o*n.x+2*o*i*t.x+i*i*e.x,o*o*n.y+2*o*i*t.y+i*i*e.y,o*o*n.z+2*o*i*t.z+i*i*e.z)}function pM(n,t,{mobile:e}={}){const i=new fn,s=e?900:1800,o=64,r=new Ee,a=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s*3),f=new Float32Array(s),u=new Float32Array(s),h=new Float32Array(s*3),d=new Float32Array(s),g=new Array(s).fill(null),x={position:new re(a,3),aB:new re(l,3),aC:new re(c,3),aPhase:new re(f,1),aSpeed:new re(u,1),aColor:new re(h,3),aDim:new re(d,1)};for(const[$t,Dt]of Object.entries(x))r.setAttribute($t,Dt.setUsage(fi));r.setDrawRange(0,0);const m={value:0},p=new Wc(r,new Ge({uniforms:{uTime:be.uTime,uScale:be.uPointScale,uFocus:m,uPx:{value:Math.min(window.devicePixelRatio||1,e?1.6:2)}},vertexShader:fM,fragmentShader:uM,transparent:!0,depthWrite:!1,blending:Ti}));p.frustumCulled=!1,p.renderOrder=8,i.add(p);const _=o*Ds,y=new Ee,v=new Float32Array(_*4*3),C=new Float32Array(_*4*3),A=new Float32Array(_*4),T=new Float32Array(_*4),R=new Float32Array(_*4),E=new Float32Array(_*4),M=new Uint32Array(_*6);for(let $t=0;$t<_;$t++){const Dt=$t*4;A.set([-1,1,-1,1],Dt),T.set([0,0,1,1],Dt),M.set([Dt,Dt+2,Dt+1,Dt+1,Dt+2,Dt+3],$t*6)}const L=($t,Dt)=>new re($t,Dt).setUsage(fi);y.setAttribute("position",L(v,3)),y.setAttribute("aOther",L(C,3)),y.setAttribute("aSide",new re(A,1)),y.setAttribute("aEnd",new re(T,1)),y.setAttribute("aT",L(R,1)),y.setAttribute("aW",L(E,1)),y.setIndex(new re(M,1)),y.setDrawRange(0,0);const W=new Mt(1,1),V=Math.min(window.devicePixelRatio||1,e?1.6:2),F=new Ge({uniforms:{uColor:{value:new Ft("#fff2d6")},uOpacity:{value:.32},uFloor:{value:.35},uTime:be.uTime,uRes:{value:W},uWidth:{value:3.2*V}},vertexShader:hM,fragmentShader:dM,transparent:!0,depthWrite:!1,blending:Ti}),Y=new Se(y,F);Y.frustumCulled=!1,Y.renderOrder=8,Y.onBeforeRender=$t=>$t.getDrawingBufferSize(W),i.add(Y);const O=new D,k=new D,I=new D,ut=new D,K=new D,tt=new Ft;let Lt=[];function Kt($t,{channel:Dt=null,focused:Bt=!1,route:B=!1,strong:X=!1}={}){Lt=$t,m.value=Bt?1:0;const Q=$t.reduce((G,J)=>Math.max(G,J.w),1e-4);let w=0,S=0;for(const G of $t){const J=n.get(G.from),st=t.get(G.shop)||n.get(G.to);if(!J||!st)continue;const nt=wn(ls(`${G.from}>${G.shop}`));O.copy(J).add(ut.set((nt()-.5)*3,.8,(nt()-.5)*3)),I.copy(st);const Pt=Math.hypot(I.x-O.x,I.z-O.z);k.set((O.x+I.x)/2,Math.max(O.y,I.y)+4+Pt*.34,(O.z+I.z)/2);const _t=G.w/Q;if(S<o){for(let yt=0;yt<Ds;yt++){const zt=yt/Ds,kt=(yt+1)/Ds;ml(O,k,I,zt,ut),ml(O,k,I,kt,K);const Ct=(S*Ds+yt)*4;for(let Yt=0;Yt<4;Yt++){const qt=Yt<2?ut:K,se=Yt<2?K:ut;v.set([qt.x,qt.y,qt.z],(Ct+Yt)*3),C.set([se.x,se.y,se.z],(Ct+Yt)*3),R[Ct+Yt]=Yt<2?zt:kt,E[Ct+Yt]=_t}}S++}const gt=Re[G.shop],Xt=gt?fo(gt):[{ch:"passby",p:1}],lt=ve(Math.round(2+_t*(Bt?12:16)),2,18);for(let yt=0;yt<lt&&w<s;yt++){const zt=Ro(Xt,kt=>kt.p,nt).ch;a.set([O.x,O.y,O.z],w*3),l.set([k.x+(nt()-.5)*1.2,k.y+(nt()-.5)*1,k.z+(nt()-.5)*1.2],w*3),c.set([I.x,I.y,I.z],w*3),f[w]=(yt+nt()*.8)/lt,u[w]=(.045+nt()*.02)*(18/(12+Pt*.4)),tt.set(Ji[zt].color),h.set([tt.r,tt.g,tt.b],w*3),g[w]=zt,d[w]=Dt&&Dt!==zt?1:0,w++}}for(const G of Object.values(x))G.needsUpdate=!0;r.setDrawRange(0,w);for(const G of["position","aOther","aT","aW"])y.attributes[G].needsUpdate=!0;return y.setDrawRange(0,S*Ds*6),ot=Bt,vt=B,xt=X,St(),{dots:w,arcs:S}}let j=1,ot=!1,vt=!1,xt=!1;function St(){const $t=j>.5,Dt=$t?Ti:Zi;for(const B of[F,p.material])B.blending!==Dt&&(B.blending=Dt,B.needsUpdate=!0);if(F.uniforms.uFloor.value=$t?.35:.6,vt){F.uniforms.uColor.value.set($t?"#ffd27a":"#ff4a12"),F.uniforms.uOpacity.value=$t?.85:.95,F.uniforms.uWidth.value=($t?6:6.5)*V;return}const Bt=ot?0:xt?2:1;F.uniforms.uColor.value.set($t?"#fff2d6":"#ff5a1f"),F.uniforms.uOpacity.value=($t?[.5,.5,.72]:[.75,.8,.92])[Bt],F.uniforms.uWidth.value=($t?[2.6,3.6,4.6]:[3.2,4.2,5.2])[Bt]*V}function Gt($t){j=$t,St()}function Wt($t){const Dt=r.drawRange.count;for(let Bt=0;Bt<Dt;Bt++)d[Bt]=$t&&$t!==g[Bt]?1:0;x.aDim.needsUpdate=!0}const ae=new Ee,Jt=new C1({color:"#ff5f8f",dashSize:.9,gapSize:.6,transparent:!0,opacity:.95,depthWrite:!1}),he=new Cd(ae,Jt);he.frustumCulled=!1,he.renderOrder=9,i.add(he);function $($t){if($t.length<2){he.visible=!1;return}const Dt=[];for(let Bt=0;Bt<$t.length-1;Bt++){const B=$t[Bt],X=$t[Bt+1],Q=Math.hypot(X.x-B.x,X.z-B.z),w=new D((B.x+X.x)/2,Math.max(B.y,X.y)+2.5+Q*.22,(B.z+X.z)/2);for(let S=0;S<=20;S++)Dt.push(ml(B,w,X,S/20,new D))}ae.setFromPoints(Dt),he.computeLineDistances(),he.visible=!0}return{object:i,set:Kt,setChannel:Wt,setTrail:$,setNight:Gt,get flows(){return Lt},setVisible($t){p.visible=$t,Y.visible=$t}}}const zn=Math.PI,Ah=()=>new Promise(n=>requestAnimationFrame(()=>n())),mM=[[0,"#0a1030","#1f2b56","#46568a","#252f5a","#a9bcff",.55,"#6c80c2","#3a3050",.8],[4.6,"#0d1436","#26325f","#4a5a8c","#27315c","#a9bcff",.55,"#6c80c2","#3a3050",.8],[5.6,"#33437a","#e9a07f","#e8c1b3","#8f86a8","#ffb38a",1,"#a5a8d6","#6e5b62",.85],[6.5,"#5f8fd0","#ffd2a8","#fff0e2","#d9cbd0","#ffc896",1.8,"#cfdcf5","#9a8a72",1.05],[8.2,"#3f9be6","#cbe8ff","#ffffff","#bcd6ef","#fff1dc",2.45,"#d6ecff","#9c8a6a",1.2],[15.8,"#3f9be6","#cbe8ff","#ffffff","#bcd6ef","#fff1dc",2.45,"#d6ecff","#9c8a6a",1.2],[17.4,"#5d86c4","#ffd6a8","#fff2e4","#e5cdc6","#ffc78a",2,"#e6dcf0","#a08868",1.1],[18.3,"#3d4c8c","#ff9a6b","#f7c3a6","#a88da6","#ff8f5e",1.25,"#b4a6d6","#7b6066",.92],[19.3,"#18204c","#5b4b7e","#66639a","#353563","#a9b8ff",.62,"#7a84c4","#433556",.84],[20.6,"#0a1030","#1f2b56","#46568a","#252f5a","#a9bcff",.55,"#6c80c2","#3a3050",.8],[24,"#0a1030","#1f2b56","#46568a","#252f5a","#a9bcff",.55,"#6c80c2","#3a3050",.8]],Or=mM.map(n=>n.map(t=>typeof t=="string"?new Ft(t):t)),gM=new Ft("#8d99a6"),xM=new Ft("#1c2330");function vM(n){let t=0;for(;t<Or.length-2&&Or[t+1][0]<=n;)t++;const e=Or[t],i=Or[t+1],s=ve((n-e[0])/(i[0]-e[0]||1),0,1),o=r=>typeof e[r]=="number"?Up(e[r],i[r],s):e[r].clone().lerp(i[r],s);return{top:o(1),horizon:o(2),seaLight:o(3),seaShade:o(4),sun:o(5),sunI:o(6),hemiSky:o(7),hemiGround:o(8),hemiI:o(9)}}const Ch=["#9b5de5","#ff3b3b","#ff8c1a","#ffd60a","#2ec46b","#2f8dff","#5a4fff"],Rh={rain:{c1:"#4a6fa5",c2:"#24395f",icon:"☔"},late:{c1:"#3a0ca3",c2:"#f72585",icon:"🌙"},morning:{c1:"#ffb703",c2:"#fb5607",icon:"🍳"},afternoon:{c1:"#06d6a0",c2:"#118ab2",icon:"🍰"},evening:{c1:"#ff5fa2",c2:"#5e60ce",icon:"🍻"}};function cp(n,t){const e=n/60;return t?"rain":e>=22||e<4?"late":e<11?"morning":e<17?"afternoon":"evening"}const gl=new Map;function _M(n,t,e){const i=[];for(const o of n){let r=0;for(let f=0;f<o.length;f++){const[u,h]=o[f],[d,g]=o[(f+1)%o.length];r+=u*g-d*h}const a=r>0?1:-1,l=o.length,c=o.map((f,u)=>{const h=o[(u+l-1)%l],d=o[(u+1)%l],g=[f[0]-h[0],f[1]-h[1]],x=[d[0]-f[0],d[1]-f[1]],m=Math.hypot(...g)||1,p=Math.hypot(...x)||1,_=[a*(g[1]/m+x[1]/p),-a*(g[0]/m+x[0]/p)],y=Math.hypot(..._)||1;return[_[0]/y,_[1]/y]});for(let f=0;f<l;f++){const u=(f+1)%l,h=(d,g)=>[o[d][0]+c[d][0]*g,0,o[d][1]+c[d][1]*g];i.push(...h(f,t),...h(u,t),...h(u,e),...h(f,t),...h(u,e),...h(f,e))}}const s=new Ee;return s.setAttribute("position",new ue(i,3)),s}function xl(n,t,e,i){const s=new ui({color:n,transparent:!0,opacity:t,depthWrite:!1,side:Pn,blending:Ti}),o=new Se(new Ee,s);return o.renderOrder=3,o.visible=!1,o.userData.w=[e,i],o}function vl(n,t,e){const i=`${t.id}:${n.userData.w.join(",")}`;gl.has(i)||gl.set(i,_M(t.parts,...n.userData.w)),n.geometry=gl.get(i),n.position.copy(t.group.position).setY(e)}async function yM(n,{mobile:t,onProgress:e}={}){var Ni;const{scene:i,camera:s,controls:o,renderer:r}=n,a=Math.min(8,r.capabilities.getMaxAnisotropy()),l=L2(),c=U2(),f=N2(t?9:14);i.add(l.object,c.object,f.object);const u=[],h=new Map,d=Fe.length+2;for(let U=0;U<Fe.length;U++){const it=Fe[U],mt=c2(it,$n[it.id]||[],{mobile:t,aniso:a});i.add(mt.group),u.push(mt),h.set(it.id,mt),e==null||e((U+1)/d,it.name),await Ah()}const g=d2({});i.add(g.group),h.set("event",g);const x=g2(u,g);i.add(x.object),e==null||e((Fe.length+1)/d,"活動島"),await Ah();const m=[...u,g],p=new Map;for(const U of m)for(const it of U.shops)p.set(it.shop.id,it);const _=[],y=[],v=[],C=[],A=[],T=[];let R=null;const E=(U,it,mt)=>{U.type==="halo"?(_.push({pos:it,color:U.color,size:U.size}),y.push(U.shop||null)):U.type==="pool"?(v.push({pos:it,color:U.color,r:U.r}),C.push(U.shop||null)):U.type==="steam"||U.type==="smoke"||U.type==="incense"?(A.push({pos:it,kind:U.type==="steam"?U.big?"big":"steam":U.type}),T.push(U.shop||null)):U.type==="beacon101"&&(R={island:mt,pos:it,top:U.top})};for(const U of m)for(const it of U.marks)E(it,it.pos.clone().add(U.group.position),U);for(const U of x.marks)E(U,U.pos.clone(),null);let M=null;if(R){const U=new ui({color:"#2f8dff",transparent:!0,opacity:0,depthWrite:!1}),it=new fn;for(let mt=0;mt<8;mt++){const rt=new Se(new ro(.845,.845,.09,4,1,!0),U);rt.rotation.y=zn/4,rt.position.set(R.pos.x,1.45+mt*.97+.9,R.pos.z),it.add(rt)}i.add(it),_.push({pos:new D(R.pos.x,R.top+.2,R.pos.z),color:"#ffffff",size:3.2}),y.push(null),M={mat:U,halo:_.length-1,group:it}}const L=np(_),W=M2(v),V=w2(A),F=C2(t?1400:3200);i.add(L.object,W.object,V.object,F.object);const Y=cM(u,{mobile:t,eventBuilt:g});i.add(Y.object);const O=new Map(m.map(U=>[U.id,U.group.position.clone().setY(.6)])),k=new Map([...p.values()].map(U=>[U.shop.id,new D(U.x,U.spec.H*.75,U.z+1.2).add(h.get(U.island).group.position)])),I=pM(O,k,{mobile:t});i.add(I.object);const ut=xl("#fff2b3",.75,.08,.5),K=xl("#ff7a59",.95,.1,.7);i.add(ut,K);const tt=[0,1,2].map(()=>{const U=xl("#ffe066",1,0,1);return i.add(U),U});let Lt=0;function Kt(U,it=5){tt.forEach((mt,rt)=>{const ft=h.get(U[rt]);mt.visible=!!ft,ft&&vl(mt,ft,.05)}),Lt=it}const j={island:new Map,shop:new Map};for(const U of m){const it=U.id==="event"?Qr:U.data,mt=document.createElement("button");mt.className=`isl-label${U.id==="event"?" is-event":""}`,mt.dataset.id=U.id,mt.innerHTML=`<span class="tok c-${U.id==="event"?"ev":it.city}"></span><span class="nm">${Z(it.name)}</span><span class="heat"><i></i></span>`,mt.addEventListener("click",ft=>{ft.stopPropagation(),rn(U.id==="event"?"event":"island",U.id)});const rt=new Lr(mt);rt.position.copy(U.anchor),U.group.add(rt),j.island.set(U.id,{obj:rt,el:mt})}for(const U of p.values()){const it=document.createElement("button");it.className="shop-label",it.dataset.id=U.shop.id,it.innerHTML=`<span class="ic">${U.shop.icon||((Ni=Ki[U.shop.cat])==null?void 0:Ni.icon)||"🍴"}</span><span class="tx"><b>${Z(U.shop.name)}</b><em></em></span>`,it.addEventListener("click",rt=>{rt.stopPropagation(),rn("shop",U.shop.id)});const mt=new Lr(it);mt.position.copy(U.anchor),mt.visible=!1,h.get(U.island).group.add(mt),j.shop.set(U.shop.id,{obj:mt,el:it})}const ot=document.createElement("div");ot.className="pin3d",ot.innerHTML="<span>📍</span>";const vt=new Lr(ot);vt.visible=!1,i.add(vt);const xt=240,St=new Hn(new ga(.12,8,6),new ui({color:"#ffd23f",fog:!1}),xt);St.frustumCulled=!1,St.count=0;const Gt=new ee;let Wt=null,ae=[];function Jt(U,it){var dt;if(it.shop){const Rt=p.get(it.shop);return Rt?new D(Rt.x,.9,1.15):null}const mt=(dt=[...U.slots||new Map].find(([,Rt])=>Rt===it.lm))==null?void 0:dt[0];if(!mt)return null;const[rt,ft]=ke.slots[mt];return new D(rt,ft<0?3.6:1.4,ft)}function he(U,it){var Rt,b;for(const P of ae)(Rt=P.parent)==null||Rt.remove(P);ae=[],(b=St.parent)==null||b.remove(St),Wt=null;const mt=U&&h.get(U);if(!mt||!(it!=null&&it.length))return;Wt=U;const rt=[];for(const P of it){const z=Jt(mt,P.at);if(!z)continue;P.state!=="secret"&&rt.push(z);const q=document.createElement("button");q.className=`arc-pin ${P.state}`,q.innerHTML=`<b>${Z(P.label)}</b>`,q.addEventListener("click",ht=>{ht.stopPropagation(),Qi("arc-pin",P.key)});const N=new Lr(q);N.position.copy(z),mt.group.add(N),ae.push(N)}let ft=0;const dt=new D;for(let P=0;P<rt.length-1&&ft<xt;P++){const z=rt[P],q=rt[P+1],N=Math.hypot(q.x-z.x,q.z-z.z),ht=new D((z.x+q.x)/2,Math.max(z.y,q.y)+.8+N*.16,(z.z+q.z)/2),Et=Math.max(2,Math.round((N+Math.abs(q.y-z.y))/.42));for(let Ut=1;Ut<Et&&ft<xt;Ut++){const It=Ut/Et;dt.copy(z).multiplyScalar((1-It)**2).addScaledVector(ht,2*It*(1-It)).addScaledVector(q,It*It),St.setMatrixAt(ft++,Gt.makeTranslation(dt.x,dt.y,dt.z))}}St.count=ft,ft&&(St.instanceMatrix.needsUpdate=!0,mt.group.add(St))}const $=new D,$t=new D(-.42,.8,.5).normalize(),Dt=new D,Bt=new D,B=new Ft;let X=0,Q=null,w=new Map;function S(){const U=Hr(),it=ni(),mt=U/60;X=Np(U);const rt=pt.rain?1:0;ay(X,rt),I.setNight(X);const ft=vM(mt);if(rt){const P=gM.clone().lerp(xM,X);for(const z of["top","horizon","seaLight","seaShade","hemiSky"])ft[z].lerp(P,z==="seaShade"?.55:.68);ft.sunI*=.35,ft.hemiI*=.92}l.uniforms.uTop.value.copy(ft.top),l.uniforms.uHorizon.value.copy(ft.horizon),l.uniforms.uBottom.value.copy(ft.horizon).lerp(ft.seaShade,.5),c.uniforms.uLight.value.copy(ft.seaLight),c.uniforms.uShade.value.copy(ft.seaShade),B.copy(ft.horizon).lerp(ft.seaShade,.35),i.fog.color.copy(B),n.sun.color.copy(ft.sun),n.sun.intensity=ft.sunI,n.hemi.color.copy(ft.hemiSky),n.hemi.groundColor.copy(ft.hemiGround),n.hemi.intensity=ft.hemiI,f.material.color.copy(ft.seaLight),f.material.emissive.copy(ft.seaLight),f.material.emissiveIntensity=.22*(1-X)+.06;const dt=ve((mt-6)/12.5,0,1)*zn;$.set(Math.cos(dt)*.8,.18+Math.sin(dt)*.85,.62).normalize(),Dt.copy($).lerp($t,X).normalize(),Dt.dot(Bt)<.99995&&(Bt.copy(Dt),n.setSun(Dt)),c.setShadows(m.map(P=>P.group.position.clone().setY(-5)),Dt),w=new Map;for(const P of p.values()){const z=Wn(P.shop,it);w.set(P.shop.id,z),P.shutter.target=z.open?0:1,P.signMat.emissiveIntensity=z.open?.3+1.15*X:.04,P.signMat.color.setScalar(z.open?1:.55+.45*(1-X));const q=j.shop.get(P.shop.id);q.el.classList.toggle("closed",!z.open);const N=z.closing?z.label:"營業中";q.el.querySelector("em").textContent=z.open?P.shop.real?N:`${Ac(z.crowd)}・${N}`:z.label}const Rt=P=>{var z;return P?(z=w.get(P))==null?void 0:z.open:!0};if(y.forEach((P,z)=>L.set(z,Rt(P)?1:0)),C.forEach((P,z)=>W.set(z,Rt(P)?1:0)),T.forEach((P,z)=>V.setEmitter(z,P?Rt(P)?1:0:1)),M){const P=Ch[Mf()];M.mat.color.set(P),M.mat.opacity=X*.9,L.set(M.halo,1)}L.commit(),W.commit(),V.commit(),Y.setTime(it,pt.rain);for(const P of m){const z=j.island.get(P.id),q=Y.activity(P.id);z.el.querySelector(".heat i").style.width=`${Math.round(q*100)}%`,z.el.classList.toggle("busy",q>.62)}const b=cp(U,pt.rain);if(b!==Q){Q=b;const P=Qr.themes[b];g.screen.draw({...P,...Rh[b]},Rh[b].icon);const z=j.island.get("event");z.el.querySelector(".nm").textContent=P.name}st()}let G=!0,J=null;function st(){const U=ni();let it,mt=!1;if(J&&pt.view==="finder"){I.set(J,{channel:null,route:!0});return}pt.view==="shop"&&pt.shopId?(it=Kr(U,{shopId:pt.shopId,mode:pt.flowMode,rain:pt.rain}),mt=!0):(pt.view==="island"||pt.view==="event")&&pt.islandId&&pt.islandId!=="event"?(it=Kr(U,{islandId:pt.islandId,mode:pt.flowMode,rain:pt.rain,limit:40}),mt=!0):it=Kr(U,{mode:pt.flowMode,rain:pt.rain,limit:t?34:48}),I.set(it,{channel:pt.flowChannel,focused:mt,strong:pt.view==="flows"})}function nt(U,it,mt=1){const{W:rt,H:ft}=n.size(),dt=n.insets(),Rt=ft+Math.abs(dt.bottom-dt.top),b=Math.tan(s.fov*zn/360),P=b*(ft-dt.bottom-dt.top)/Rt,z=b*(rt-dt.left)/Rt;return Math.max(it/P,U*mt/z)}const Pt=()=>{const{W:U,H:it}=n.size(),mt=it>U*1.1,rt=jh,ft=(rt.maxX-rt.minX)/2+6,dt=(rt.maxZ-rt.minZ)/2+6,Rt=dt>ft,b=ve(nt(ft,dt*(Rt?.95:.8),mt?.97:1),120,1400),P=(rt.minZ+rt.maxZ)/2+(Rt?-dt*.08:4);return yt({target:new D((rt.minX+rt.maxX)/2,0,P),dist:b,polar:mt?.62:Rt?.64:.72,azim:0})},_t=new mn,gt=new Vs,Xt=new D;function lt(U,it){_t.copy(s),_t.position.setFromSpherical(gt.set(U.dist,U.polar,U.azim)).add(U.target),_t.lookAt(U.target),_t.updateMatrixWorld();const{W:mt,H:rt}=n.size(),ft={top:1/0,bot:-1/0,left:1/0,right:-1/0};for(const{p:dt,hw:Rt}of it){Xt.copy(dt).project(_t);const b=(Xt.x+1)/2*mt,P=(1-Xt.y)/2*rt;ft.top=Math.min(ft.top,P),ft.bot=Math.max(ft.bot,P),ft.left=Math.min(ft.left,b-Rt),ft.right=Math.max(ft.right,b+Rt)}return ft}function yt(U){const{W:it,H:mt}=n.size(),rt=n.insets(),ft=24,dt=rt.top+ft,Rt=mt-rt.bottom-ft,b=rt.left+8,P=it-8;if(Rt-dt<80||P-b<120)return U;const z=[...j.island.values()].map(N=>({p:N.obj.getWorldPosition(new D),hw:(N.el.offsetWidth||70)/2})),q=N=>2*N*Math.tan(s.fov*zn/360)/(mt+Math.abs(rt.bottom-rt.top));for(let N=0;N<8;N++){let ht=lt(U,z);if(ht.top>=dt-2&&ht.bot<=Rt+2&&ht.left>=b-2&&ht.right<=P+2)break;const Et=Math.max((ht.bot-ht.top)/(Rt-dt),(ht.right-ht.left)/(P-b));Et>1&&(U.dist=Math.min(U.dist*Et*1.03,3600),ht=lt(U,z)),U.target.x+=((ht.left+ht.right)/2-(b+P)/2)*q(U.dist),U.target.z+=((ht.top+ht.bot)/2-(dt+Rt)/2)*q(U.dist)/Math.cos(U.polar)}return U}const zt=["overview","finder","flows","passport"];function kt(U=!1){zt.includes(pt.view)&&(U?qt(Pt()):n.flyTo(Pt(),.9))}function Ct(U,it){const mt=h.get(U);if(!mt)return;const rt=mt.group.position,ft=n.size().H>n.size().W,dt=ve(ft?nt(7,6.5):nt(10,9),28,80),Rt={target:new D(rt.x,.5,rt.z+.4),dist:dt,polar:.92,azim:0};n.flyTo(Rt,1.5)}function Yt(U){const it=p.get(U);if(!it)return;const mt=h.get(it.island).group.position,rt=n.size().H>n.size().W,ft=it.anchor.y,dt=ve(9+ft*1.6,12,20)*(rt?1.3:1);n.flyTo({target:new D(mt.x+it.x,ft*(rt?.85:.5),mt.z+it.z+1),dist:dt,polar:1,azim:it.x*.035},1.4)}function qt({target:U,dist:it,polar:mt,azim:rt}){o.maxDistance=Math.max(230,it*1.25),o.target.copy(U);const ft=new Vs(it,mt,rt);s.position.setFromSpherical(ft).add(U),s.lookAt(U),o.update()}function se(U){for(const[it,mt]of j.shop)mt.obj.visible=!!U&&p.get(it).island===U;for(const[it,mt]of j.island)mt.el.classList.toggle("dim",!!U&&it!==U)}function H({view:U,id:it}){var mt,rt;if(U==="overview")se(null),K.visible=!1,vt.visible=!1,n.flyTo(Pt(),1.6);else if(U==="island"||U==="event")se(it),et(it),vt.visible=!1,Ct(it);else if(U==="arc"){const ft=(mt=Sn[it])==null?void 0:mt.island;se(ft),et(ft),vt.visible=!1,Ct(ft)}else if(U==="finder"||U==="flows"||U==="passport"){se(null),K.visible=!1,vt.visible=!1;const ft=Pt(),dt=new Vs().setFromVector3(s.position.clone().sub(o.target)),Rt=Math.abs(((dt.theta-ft.azim+zn)%(2*zn)+2*zn)%(2*zn)-zn);(dt.radius<ft.dist*.7||Rt>.4)&&n.flyTo(ft,1.6)}else if(U==="shop"){const ft=p.get(it);if(!ft)return;se(ft.island),et(ft.island),h.get(ft.island).group.add(vt),vt.position.copy(ft.anchor),vt.visible=!0;for(const[dt,Rt]of j.shop)Rt.el.classList.toggle("sel",dt===it);ot.style.translate=((rt=j.shop.get(it))==null?void 0:rt.el.style.translate)||"",Yt(it)}wt(),st()}function wt(){var rt,ft,dt;const U=!!J&&pt.view==="finder",it=new Map;U&&J.forEach((Rt,b)=>it.set(Rt.to,[...it.get(Rt.to)||[],b+1]));const mt=U?(rt=J[0])==null?void 0:rt.from:null;for(const[Rt,b]of j.island){const P=it.get(Rt);(ft=b.el.querySelector(".rk"))==null||ft.remove(),(dt=b.el.querySelector(".me"))==null||dt.remove(),P&&b.el.insertAdjacentHTML("beforeend",`<span class="rk">${P.join("・")}</span>`),U&&Rt===mt&&b.el.insertAdjacentHTML("beforeend",'<span class="me">你在這</span>'),b.el.classList.toggle("pick",!!P),b.el.classList.toggle("top",!!P&&P[0]===1),b.el.classList.toggle("unpicked",U&&!P&&Rt!==mt)}}function et(U){const it=h.get(U);it&&(vl(K,it,.04),K.visible=!0)}const at=new U1,Tt=new Mt,At=m.map(U=>U.pickables[U.pickables.length-1]);function jt(U,it){var dt;const mt=r.domElement.getBoundingClientRect();Tt.set((U-mt.left)/mt.width*2-1,-((it-mt.top)/mt.height)*2+1),at.setFromCamera(Tt,s);const rt=pt.view==="shop"?(dt=Re[pt.shopId])==null?void 0:dt.island:pt.islandId;if(rt&&h.get(rt)){const Rt=at.intersectObjects(h.get(rt).pickables.slice(0,-1),!1);if(Rt.length)return Rt[0].object.userData}const ft=at.intersectObjects(At,!1);return ft.length?ft[0].object.userData:null}let oe=null;function Ne(U){var rt,ft,dt,Rt,b;const it=U?U.kind==="shop"?(rt=Re[U.id])==null?void 0:rt.island:U.id:null;if(it===(oe==null?void 0:oe.island)&&(U==null?void 0:U.id)===(oe==null?void 0:oe.id))return;if((oe==null?void 0:oe.kind)==="shop"&&((ft=j.shop.get(oe.id))==null||ft.el.classList.remove("hover")),oe&&((dt=j.island.get(oe.island))==null||dt.el.classList.remove("hover")),oe=U?{...U,island:it}:null,r.domElement.style.cursor=U?"pointer":"",!U){ut.visible=!1;return}(Rt=j.island.get(it))==null||Rt.el.classList.add("hover"),U.kind==="shop"&&((b=j.shop.get(U.id))==null||b.el.classList.add("hover"));const mt=h.get(it);vl(ut,mt,.03),ut.visible=it!==pt.islandId}const ce=r.domElement;let $e=null,Ke=null;ce.addEventListener("pointerdown",U=>{$e={x:U.clientX,y:U.clientY,t:performance.now()}}),ce.addEventListener("pointermove",U=>{U.pointerType==="mouse"&&(Ke={x:U.clientX,y:U.clientY})}),ce.addEventListener("pointerleave",()=>Ne(null)),ce.addEventListener("pointerup",U=>{if(!$e)return;const it=Math.hypot(U.clientX-$e.x,U.clientY-$e.y),mt=performance.now()-$e.t<450;if($e=null,it>7||!mt)return;const rt=jt(U.clientX,U.clientY);rt&&(rt.kind==="shop"?rn("shop",rt.id):(rt.id!==pt.islandId||pt.view==="shop")&&rn(rt.id==="event"?"event":"island",rt.id))});function Qo(U,it){if(be.uTime.value=it,Lt>0){Lt-=U;const ft=.55+.45*Math.sin(it*9);for(const dt of tt)dt.material.opacity=Lt>0?ft*Math.min(1,Lt):0,Lt<=0&&(dt.visible=!1)}Ke&&(Ne(jt(Ke.x,Ke.y)),Ke=null);for(const ft of p.values()){const dt=ft.shutter;Math.abs(dt.k-dt.target)>.002&&(dt.k+=(dt.target-dt.k)*Math.min(1,U*2.2),Jd(dt))}Y.update(U,it,X),x.update(it),f.update(U),l.update(s),c.update(s),F.update(o.target);const mt=s.position.distanceTo(o.target);i.fog.near=70+mt*.85,i.fog.far=260+mt*1.25,be.uFade.value.set(i.fog.near,i.fog.far);const rt=mt>=75;if(rt!==uo&&(uo=rt,document.body.classList.toggle("far",rt),!rt))for(const ft of j.island.values())ft.el.style.translate="",delete ft.el.dataset.nudge;++ho%6===0&&(rt?qn():tr())}let uo=null;function qn(){const U=n.size().W,it=[];for(const dt of j.island.values()){const Rt=/translate\(([-\d.e]+)px, ?([-\d.e]+)px\)\s*$/.exec(dt.el.style.transform),b=dt.el.offsetWidth,P=dt.el.offsetHeight;if(!Rt||!b)continue;const z=Number(Rt[1]),q=Number(Rt[2]),N=z<0||z>U?0:z+b/2>U-4?U-4-(z+b/2):z-b/2<4?4-(z-b/2):0;it.push({el:dt.el,l:z-b/2+N,r:z+b/2+N,t:q-P/2,b:q+P/2,dx:N,dy:0})}it.sort((dt,Rt)=>Rt.t-dt.t);const mt=n.insets().top+4,rt=[],ft=dt=>rt.find(Rt=>dt.l<Rt.r+2&&dt.r>Rt.l-2&&dt.t+dt.dy<Rt.b+Rt.dy+2&&dt.b+dt.dy>Rt.t+Rt.dy-2);for(const dt of it){for(let b=0,P;b<6&&(P=ft(dt));b++)dt.dy=P.t+P.dy-2-dt.b;if(dt.t+dt.dy<mt&&dt.dy<0){dt.dy=0;for(let b=0,P;b<6&&(P=ft(dt));b++)dt.dy=P.b+P.dy+2-dt.t}rt.push(dt);const Rt=`${Math.round(dt.dx)} ${Math.round(dt.dy)}`;Rt!==(dt.el.dataset.nudge||"0 0")&&(dt.el.dataset.nudge=Rt,dt.el.style.translate=Rt==="0 0"?"":`${Math.round(dt.dx)}px ${Math.round(dt.dy)}px`)}}let ho=0;function tr(){const U=[];for(const rt of j.shop.values()){if(!rt.obj.visible)continue;const ft=/translate\(([-\d.e]+)px, ?([-\d.e]+)px\)\s*$/.exec(rt.el.style.transform),dt=rt.el.offsetWidth,Rt=rt.el.offsetHeight;if(!ft||!dt)continue;const b=Number(ft[1]),P=Number(ft[2]);U.push({el:rt.el,l:b-dt/2,r:b+dt/2,t:P-Rt/2,b:P+Rt/2,dy:0})}U.sort((rt,ft)=>ft.t-rt.t);const it=n.size().W,mt=[];for(const rt of U){for(let Rt=0;Rt<6;Rt++){const b=mt.find(P=>rt.l<P.r+4&&rt.r>P.l-4&&rt.t+rt.dy<P.b+P.dy+3&&rt.b+rt.dy>P.t+P.dy-3);if(!b)break;rt.dy=b.t+b.dy-3-rt.b}mt.push(rt);const ft=rt.r>it-6?it-6-rt.r:rt.l<6?6-rt.l:0,dt=`${Math.round(ft)} ${Math.round(rt.dy)}`;dt!==(rt.el.dataset.off||"0 0")&&(rt.el.dataset.off=dt,rt.el.style.translate=dt==="0 0"?"":`${Math.round(ft)}px ${Math.round(rt.dy)}px`,rt.el.classList.contains("sel")&&(ot.style.translate=rt.el.style.translate))}}function po(){const{H:U}=n.size();be.uPointScale.value=U*r.getPixelRatio()/(2*Math.tan(s.fov*zn/360))}return window.addEventListener("resize",po),po(),Wi("time",S),Wi("nav",H),Wi("flows",st),S(),qt(Pt()),e==null||e(1,"完成"),{islands:h,shops:p,update:Qo,applyTime:S,refreshFlows:st,flows:I,life:Y,overviewView:Pt,refit:kt,jump:qt,setFlowsVisible(U){G=U,I.setVisible(U)},setCustomFlows(U){J=U,wt(),st()},pulse:Kt,setArcRoute:he,get arcRouteIsland(){return Wt},markIsland(U){U?et(U):K.visible=!1},setTrail(U){const it=U.map(mt=>k.get(mt)).filter(Boolean).map(mt=>mt.clone());I.setTrail(it)},shopWorldPos(U){var it;return((it=k.get(U))==null?void 0:it.clone())||null},get flowsOn(){return G},islandScreenPos(U){const it=h.get(U);if(!it)return null;const mt=it.group.position.clone().setY(2).project(s),{W:rt,H:ft}=n.size();return{x:(mt.x*.5+.5)*rt,y:(-mt.y*.5+.5)*ft}},weekdayColor101:()=>Ch[Mf()],WEEKDAYS:Oo}}const _c={any:{label:"都可以"},low:{label:"銅板 $150 內",max:150},mid:{label:"$150–400",min:150,max:400},high:{label:"$400 以上，吃好一點",min:400}},Ph={who:"solo",cats:[],budget:"any",from:Xe.region.hub,avoidQueue:!1,openSoon:!0};function MM(n,t){return n===t?null:Xo.find(e=>e.path.includes(n)&&e.path.includes(t))||null}function bM(n,t){const e=n.fits||{},i=Object.keys(Ci).reduce((s,o)=>s+(e[o]||0),0)||1;return{share:(e[t]||0)/i,votes:e[t]||0,total:i}}function SM(n,t){const e=_c[t];if(!e||t==="any")return{ok:!0,score:.6};if(!n.price)return{ok:!0,score:.3,unknown:!0};const[i,s]=n.price;if(e.max!=null&&i>e.max)return{ok:!1};if(e.min!=null&&s<e.min)return{ok:!1};const o=Math.max(i,e.min??0),r=Math.min(s,e.max??99999);return{ok:!0,score:ve((r-o)/Math.max(1,s-i),.3,1)}}const Lh=["noodle","rice","stirfry","hotpot","snack"],Dh=[{from:4,to:10.5,name:"早餐時段",good:["breakfast","snack","noodle","cafe"],meh:["rice","drink"]},{from:10.5,to:14,name:"午餐時段",good:Lh,meh:["breakfast","cafe"]},{from:14,to:17,name:"下午茶時段",good:["dessert","cafe","drink","play"],meh:["snack","noodle"]},{from:17,to:21,name:"晚餐時段",good:Lh,meh:["bar","play"]},{from:21,to:28,name:"宵夜時段",good:["snack","noodle","stirfry","bar","hotpot","play","breakfast"],meh:["dessert","drink","rice"]}];function EM(n,t){let e=t/60;e<4&&(e+=24);const i=Dh.find(s=>e>=s.from&&e<s.to)||Dh[4];return i.good.includes(n)?{p:i,s:1}:i.meh.includes(n)?{p:i,s:.45}:{p:i,s:.1}}function wM(n,t,e){var r,a,l,c,f,u,h,d,g;const i=[],s={closed:0,cat:0,budget:0,pet:0,adult:0},o=Math.floor(t/gn);for(const x of vn){if((r=n.cats)!=null&&r.length&&!n.cats.includes(x.cat)){s.cat++;continue}if(n.who==="pet"&&!((a=x.flags)!=null&&a.pet)){s.pet++;continue}if(n.who==="family"&&x.adult){s.adult++;continue}const m=SM(x,n.budget);if(!m.ok){s.budget++;continue}const p=Wn(x,t),_=!p.open&&n.openSoon&&p.opensIn<=60;if(!p.open&&!_&&!p.unknown){s.closed++;continue}const y=[];let v=0;const C=bM(x,n.who),A=!Object.values(x.fits||{}).some(O=>O>0),T=A?.5:ve(C.share/.42,0,1);v+=30*T;const R=((l=Ci[n.who])==null?void 0:l.label)||Ci[n.who]||n.who;A?y.push({ok:null,text:"剛上島，還沒有島民投票"}):C.share>=.24?y.push({ok:!0,text:`「${R}」票數占 ${Math.round(C.share*100)}%（${C.votes} 票）`}):C.share<.1&&y.push({ok:!1,text:`「${R}」來的人不多（${Math.round(C.share*100)}%）`});const E=Tc(n.from,x.island),M=MM(n.from,x.island);let L=Math.exp(-E/1.3);M&&(L=Math.max(L,.55+.1*(3-Math.min(3,E)))),v+=24*L;const W=((c=cs[n.from])==null?void 0:c.name)||"";E===0?y.push({ok:!0,text:`就在${W}，走路就到`}):M?y.push({ok:!0,text:`從${W}搭${M.name}直達`,color:M.color}):E===1?y.push({ok:!0,text:"隔壁島，騎車十分鐘"}):E>=3&&y.push({ok:!1,text:`離${W}有 ${E} 座島遠`}),p.unknown?(v+=2,y.push({ok:null,text:"營業時間沒公開，出發前先問店家"})):_?(v+=4,y.push({ok:null,text:`還沒開，再 ${p.opensIn} 分鐘開門`})):p.closing?(v+=6,y.push({ok:!1,text:`快打烊了（${p.label}）`})):(v+=14,y.push({ok:!0,text:p.label}));const V=x.real?null:p.open?p.crowd:0,F=(V??.5)*(x.queue==="long"?1:x.queue==="short"?.6:.25);if(V==null)v+=n.avoidQueue?16*(1-F):10*.7;else if(n.avoidQueue)if(v+=16*(1-F),F>.55){const O=Cc(x,o);y.push({ok:!1,text:`現在${Ih(V)}，${O?`${Ri(O.hour*60)} 左右人最少`:"可能要排一下"}`})}else p.open&&y.push({ok:!0,text:V<.3?"現在人很少，不用排":"現在人潮還好"});else v+=10*(.4+.6*V),V>=.75&&y.push({ok:null,text:`現在${Ih(V)}，熱鬧但要排隊`});if(v+=8*m.score,n.budget!=="any"&&y.push(m.unknown?{ok:null,text:"價位沒公開，先問店家"}:{ok:!0,text:`一人約 $${x.price[0]}–${x.price[1]}`}),e&&((f=x.flags)!=null&&f.rainOK?(v+=6,y.push({ok:!0,text:"下雨也OK，有遮雨"})):(v-=6,y.push({ok:!1,text:"下雨天要撐傘走一段"}))),!((u=n.cats)!=null&&u.length)){const O=EM(x.cat,t%gn);v+=12*O.s,O.s===1?y.push({ok:!0,text:`${O.p.name}正適合`}):O.s<.2&&y.push({ok:!1,text:`${O.p.name}比較少人來${((h=Ki[x.cat])==null?void 0:h.label)||""}`})}const Y=x.revisit??.42;v+=10*ve((Y-.2)/.45,0,1),x.revisit!=null&&Y>=.5&&y.push({ok:!0,text:`回訪率 ${Math.round(Y*100)}%，吃過還會再來`}),n.who==="family"&&((d=x.flags)!=null&&d.ac)&&y.push({ok:!0,text:"有冷氣，小朋友不會熱到哭"}),n.who==="pet"&&y.push({ok:!0,text:"毛孩友善"}),n.who==="solo"&&((g=x.flags)!=null&&g.plug)&&y.push({ok:!0,text:"有插座，一個人待著也自在"}),i.push({shop:x,score:ve(Math.round(v*.9),1,99),reasons:y,status:p,soon:_,hops:E,line:M,crowd:V})}return i.sort((x,m)=>m.score-x.score),{list:i,dropped:s,total:vn.length}}function Ih(n){return n>=.8?"爆滿":n>=.55?"有點多":n>=.3?"人潮還好":"人很少"}function Uh(n){const t=[];return n.closed&&t.push(`沒開 ${n.closed} 家`),n.cat&&t.push(`類別不符 ${n.cat} 家`),n.budget&&t.push(`超出預算 ${n.budget} 家`),n.pet&&t.push(`不能帶毛孩 ${n.pet} 家`),n.adult&&t.push(`限 18 歲以上 ${n.adult} 家`),t.join("、")}const Zo=Xe.region.id===Zh?"chiabao.passport.v1":`chiabao.passport.v1.${Xe.region.id}`,fp="chiabao.prefs.v1";function up(n,t){try{const e=localStorage.getItem(n);return e?JSON.parse(e):t}catch{return t}}function Ko(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}let we=up(Zo,null)||{checkins:[]};Array.isArray(we.checkins)||(we={checkins:[]});(!we.arcs||typeof we.arcs!="object")&&(we.arcs={});let Jr=up(fp,{});function Go(){return we}function TM(n){const t=Re[n.shop];if(!t)return null;const e={shop:t.id,island:t.island,via:n.via,party:n.party||1,mow:n.mow,rain:!!n.rain,oracle:!!n.oracle,at:Date.now()};return we.checkins.push(e),Ko(Zo,we),Qi("passport",e),e}function AM(){we.checkins.pop(),Ko(Zo,we),Qi("passport",null)}function Wo(){const n=new Map;for(const t of we.checkins)n.set(t.island,(n.get(t.island)||0)+1);return n}function hp(n){return we.checkins.filter(t=>t.shop===n)}const kr=n=>(n??0)%gn/60,CM=n=>we.checkins.filter(t=>{var e;return((e=Re[t.shop])==null?void 0:e.cat)===n}).length,RM=[{id:"first",icon:"🍚",name:"第一口",desc:"第一次打卡",need:1,count:()=>we.checkins.length},{id:"night",icon:"🌙",name:"宵夜魂",desc:"晚上 10 點後打卡 3 次",need:3,count:()=>we.checkins.filter(n=>kr(n.mow)>=22||kr(n.mow)<4).length},{id:"early",icon:"🌅",name:"早起的鳥",desc:"早上 9 點前打卡 2 次",need:2,count:()=>we.checkins.filter(n=>kr(n.mow)>=4&&kr(n.mow)<9).length},{id:"rain",icon:"☔",name:"雨天不怕",desc:"下雨天打卡 2 次",need:2,count:()=>we.checkins.filter(n=>n.rain).length},{id:"dice",icon:"🎲",name:"天選之人",desc:"去一家擲骰抽到的店",need:1,count:()=>we.checkins.filter(n=>n.via==="dice").length},{id:"oracle",icon:"🙏",name:"神明指路",desc:"擲到聖筊後去吃",need:1,count:()=>we.checkins.filter(n=>n.oracle).length},{id:"crew",icon:"🍻",name:"揪團王",desc:"4 人以上一起打卡 3 次",need:3,count:()=>we.checkins.filter(n=>n.party>=4).length},{id:"snack",icon:"🥟",name:"小吃控",desc:"吃 3 家小吃",need:3,count:()=>CM("snack")},{id:"tour5",icon:"🗺️",name:"跳島新手",desc:"集滿 5 座島章",need:5,count:()=>Wo().size},{id:"tour19",icon:"👑",name:`${Xe.region.area}走透透`,desc:`集滿 ${Fe.length} 座島章`,need:Fe.length,count:()=>Wo().size}];function yc(){return RM.map(n=>{const t=Math.min(n.need,n.count());return{...n,n:t,got:t>=n.need}})}function as(n){const t=we.arcs[n.id]||{},e=n.eps.map((s,o)=>{var r;return((r=t.eps)==null?void 0:r[o])||null}),i=e.filter(Boolean).length;return{eps:e,n:i,total:n.eps.length,secret:t.secret||null,done:t.done||null,next:e.findIndex(s=>!s)}}function ps(n,t){const e=t.filter(i=>i.next.some(s=>s.arc===n.id));return!e.length||e.some(i=>{var s;return(s=we.arcs[i.id])==null?void 0:s.done})}function PM(n,t){const e=we.arcs[n.id]||{eps:{}};e.eps=e.eps||{},t==="secret"?e.secret=e.secret||Date.now():e.eps[t]=e.eps[t]||Date.now();const i=!e.done&&n.eps.every((s,o)=>e.eps[o]);return i&&(e.done=Date.now()),we.arcs[n.id]=e,Ko(Zo,we),Qi("passport",null),{arcDone:i}}function LM(n){delete we.arcs[n.id],Ko(Zo,we),Qi("passport",null)}function Nh(n,t){return Jr[n]??t}function zh(n,t){Jr={...Jr,[n]:t},Ko(fp,Jr)}const _e=(n,t=document)=>t.querySelector(n),_l=(n,t=document)=>[...t.querySelectorAll(n)];function Ao(n){const t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstElementChild}function fe(n){var t;return n==="event"?Qr.name:((t=cs[n])==null?void 0:t.name)||n}function Qs(n){const t=Math.floor((n%(7*gn)+7*gn)%(7*gn)/gn);return`${Oo[t]} ${Ri(n)}`}const Fh=[{from:4,to:10.5,name:"早餐時間",icon:"🥪"},{from:10.5,to:14,name:"午餐時間",icon:"🍱"},{from:14,to:17,name:"下午茶時間",icon:"🍧"},{from:17,to:21,name:"晚餐時間",icon:"🍲"},{from:21,to:28,name:"宵夜時間",icon:"🌙"}];function dp(n){let t=n/60;return t<4&&(t+=24),Fh.find(e=>t>=e.from&&t<e.to)||Fh[4]}function DM(n){var t;return((t=Ki[n])==null?void 0:t.icon)||"🍴"}function Xn(n){return n.icon||DM(n.cat)}function pp(n){var t;return((t=Ki[n])==null?void 0:t.label)||""}function to(n){var t;return((t=Ji[n])==null?void 0:t.label)||n}function Li(n){var t;return((t=Ji[n])==null?void 0:t.color)||"#ccc"}function Di(n){if(!n)return"價位請洽店家";const[t,e]=n;return t===e?`$${t}`:`$${t}–${e}`}function eo(n){return`${Math.round(n*100)}%`}function Oh(n){return n>=1e4?`${(n/1e4).toFixed(1)} 萬`:n.toLocaleString("zh-TW")}function mp(n){const t=n<=0?0:n<.3?1:n<.55?2:n<.8?3:4;return`<span class="dots d${t}" aria-label="人潮 ${t}/4">${"<i></i>".repeat(4)}</span>`}function hf(n){return n.open?n.closing?`<span class="pill warn">${Z(n.label)}</span>`:'<span class="pill on">營業中</span>':`<span class="pill off">${Z(n.label)}</span>`}function IM(n){return n<.3?"#8fd6c4":n<.55?"#ffd25e":n<.8?"#ff9a4d":"#ff5a4a"}function UM(n,t,e){let i="";for(let r=0;r<24;r++){const a=(6+r)%24,l=6+r>=24?(t+1)%7:t,c=Yh(n,l)[a],f=r*10+1;if(c<=0)i+=`<rect x="${f}" y="57" width="8" height="3" rx="1.5" class="b-off"/>`;else{const u=Math.max(4,c*50);i+=`<rect x="${f}" y="${(60-u).toFixed(1)}" width="8" height="${u.toFixed(1)}" rx="2.5" fill="${IM(c)}"/>`}}const s=(e/1440*240).toFixed(1);let o="";for(const r of[0,3,6,9,12,15,18,21])o+=`<text x="${r*10+5}" y="74">${(6+r)%24}</text>`;return`<svg class="busy" viewBox="0 0 240 78" role="img" aria-label="24 小時人潮">
    ${i}
    <line x1="${s}" x2="${s}" y1="6" y2="62" class="b-now"/>
    <circle cx="${s}" cy="5" r="3.2" class="b-dot"/>
    ${o}
  </svg>`}function df(n,{legend:t=!0,active:e=null}={}){const i=n.filter(o=>o.p>.004).map(o=>`<i style="width:${(o.p*100).toFixed(2)}%;background:${Li(o.ch)}" title="${Z(to(o.ch))} ${eo(o.p)}"></i>`).join("");if(!t)return`<div class="stack">${i}</div>`;const s=n.filter(o=>o.p>.004).map(o=>`<button class="leg${e===o.ch?" on":""}" data-ch="${o.ch}"><b style="background:${Li(o.ch)}"></b>${Z(to(o.ch))}<em>${eo(o.p)}</em></button>`).join("");return`<div class="stack">${i}</div><div class="legend">${s}</div>`}function Mc(n,{max:t=null}={}){const e=t??Math.max(...n.map(i=>i.p),1e-4);return`<div class="rows">${n.map(i=>`<div class="row${i.go?" link":""}"${i.go?` data-go="${i.go}"`:""}>
        <span class="rl">${i.label}</span>
        <span class="rb"><i style="width:${Math.max(3,i.p/e*100).toFixed(1)}%;${i.color?`background:${i.color}`:""}"></i></span>
        <span class="rv">${i.value??eo(i.p)}</span>
      </div>`).join("")}</div>`}const kh={Su:0,Mo:1,Tu:2,We:3,Th:4,Fr:5,Sa:6},NM=[1,2,3,4,5,6,0],yl=["日","一","二","三","四","五","六"],Ml=7*1440,bl=new Map;function zM(n){const t=new Set;for(const e of n.split(",")){if(e==="PH"||e==="SH")continue;const i=/^(Mo|Tu|We|Th|Fr|Sa|Su)(?:-(Mo|Tu|We|Th|Fr|Sa|Su))?$/.exec(e);if(!i)return null;const s=kh[i[1]],o=i[2]?kh[i[2]]:s;for(let r=s;t.add(r),r!==o;r=(r+1)%7);}return t}function FM(n){if(n==="off"||n==="closed")return[];const t=[];for(const e of n.split(",")){const i=/^(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})$/.exec(e);if(!i)return null;const s=+i[1]*60+ +i[2];let o=+i[3]*60+ +i[4];o<=s&&(o+=1440),t.push([s,o])}return t}function OM(n){if(!n)return null;if(bl.has(n))return bl.get(n);let t=null;const e=n.trim();if(e==="24/7")t=Array.from({length:7},()=>[[0,1440]]);else{t=Array.from({length:7},()=>[]);for(const i of e.split(/\s*(?:;|\|\|)\s*/).filter(Boolean)){const s=/^((?:(?:Mo|Tu|We|Th|Fr|Sa|Su|PH|SH)(?:-(?:Mo|Tu|We|Th|Fr|Sa|Su))?,?)+)?\s*(.*)$/.exec(i.replace(/\s*,\s*/g,",")),o=s[1]?zM(s[1].replace(/,$/,"")):new Set([0,1,2,3,4,5,6]),r=FM(s[2].trim()||"00:00-24:00");if(!o||!r){t=null;break}for(const a of o)t[a]=r}}return bl.set(n,t),t}function kM(n,t){const e=(t%Ml+Ml)%Ml,i=Math.floor(e/1440),s=e%1440;if(n[i].some(([r,a])=>s>=r&&s<a))return!0;const o=(i+6)%7;return n[o].some(([,r])=>r>1440&&s+1440<r)}const Bh=n=>n===1440?"24:00":`${String(Math.floor(n/60)%24).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`;function BM(n){const t=[];for(const e of NM){const i=n[e].map(([o,r])=>o===0&&r===1440?"24 小時":`${Bh(o)}–${Bh(r)}`).join("、")||"休息",s=t[t.length-1];s&&s.key===i?s.days.push(e):t.push({key:i,days:[e]})}return t.length===1?t[0].key==="24 小時"?"24 小時":`每天 ${t[0].key}`:t.map(({key:e,days:i})=>`${i.length>2?`週${yl[i[0]]}至週${yl[i[i.length-1]]}`:i.map(o=>`週${yl[o]}`).join("、")} ${e}`).join("；")}const pf=20,gp={meal:"🍽",snack:"🥟",noodle:"🍜",hotpot:"🍲",breakfast:"🥪",cafe:"☕",dessert:"🍰",drink:"🧋",bar:"🍻",fast:"🍔",movie:"🎬",ktv:"🎤",games:"🕹",sport:"🏸",museum:"🖼",stage:"🎭",park:"🎡",bath:"♨️",outdoor:"🌳"},Sl={};function mf(n){return Sl[n]??(Sl[n]={kind:"all",cat:"",q:"",open:!1,shown:pf})}function Co(n,t){const e=mf(n);Object.assign(e,t),"shown"in t||(e.shown=pf),"kind"in t&&(e.cat="")}function xp(n){return(Fp[n]||[]).map(([t,e,i,s,o,r,a,l,c])=>({kind:t?"play":"eat",cat:e,name:i,lat:s,lon:o,addr:r,hours:a,web:l,osm:c,week:OM(a)}))}function vp(n,t){return n.week?kM(n.week,t)?"open":"closed":n.cat==="outdoor"?null:"unknown"}function HM(n,t,e){const i=vp(n,e),s=i==="open"?'<span class="pill on">營業中</span>':i==="closed"?'<span class="pill off">休息中</span>':"",o=n.week?BM(n.week):n.cat==="outdoor"?"":"營業時間請洽店家",r=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${n.name} ${n.addr||t.name}`)}`;return`<li class="pl">
    <span class="pl-ic">${gp[n.cat]||"📍"}</span>
    <div class="pl-b">
      <p class="pl-t"><b>${Z(n.name)}</b><small>${Z(Rc[n.cat]||"")}</small>${s}</p>
      ${n.addr?`<p class="pl-a">${Z(n.addr)}</p>`:""}
      ${o?`<p class="pl-h">${Z(o)}</p>`:""}
      <p class="pl-l"><a href="${Z(r)}" target="_blank" rel="noopener">地圖 ↗</a>${n.web?`<a href="${Z(n.web)}" target="_blank" rel="noopener">官網 ↗</a>`:""}</p>
    </div>
  </li>`}function _p(n,t){const e=cs[n],i=mf(n),s=i.q.trim().toLowerCase(),o={open:0,unknown:1,null:1,closed:2},r=xp(n).filter(l=>(i.kind==="all"||l.kind===i.kind)&&(!i.cat||l.cat===i.cat)).filter(l=>!s||l.name.toLowerCase().includes(s)||l.addr.includes(s)||(Rc[l.cat]||"").includes(s)).map(l=>({p:l,st:vp(l,t.mow)})).filter(({st:l})=>!i.open||l==="open").sort((l,c)=>o[l.st]-o[c.st]);if(!r.length)return`<p class="pl-empty">${i.open?"這個時間沒有符合的店開著，拉時間軸換個時段看看。":"找不到符合的店，換個關鍵字試試。"}</p>`;const a=r.length-i.shown;return`<p class="pl-count">${r.length} 家${i.open?"現在有開":""}</p>
    <ul class="pl-list">${r.slice(0,i.shown).map(({p:l})=>HM(l,e,t.mow)).join("")}</ul>
    ${a>0?`<button class="btn pl-more" data-act="pl-more">再看 ${Math.min(a,pf)} 家（還有 ${a} 家）</button>`:""}`}function $M(n,t){const e=xp(n);if(!e.length)return"";const i=mf(n),s=l=>e.filter(c=>c.kind===l).length,o=(l,c)=>`<button class="chip${i.kind===l?" on":""}" data-act="pl-kind:${l}">${c}</button>`,r={};for(const l of e)(i.kind==="all"||l.kind===i.kind)&&(r[l.cat]=(r[l.cat]||0)+1);const a=Object.entries(r).sort((l,c)=>c[1]-l[1]).map(([l,c])=>`<button class="chip${i.cat===l?" on":""}" data-act="pl-cat:${l}">${gp[l]||""} ${Z(Rc[l])} ${c}</button>`).join("");return`<section class="places">
    <h3>📍 島上的 ${e.length} 家 <small>真實的店和好玩的地方</small></h3>
    <div class="chips pick pl-tabs">${o("all",`全部 ${e.length}`)}${o("eat",`🍜 吃 ${s("eat")}`)}${o("play",`🎳 玩 ${s("play")}`)}</div>
    <div class="chips pick pl-cats">${a}</div>
    <div class="pl-tools">
      <input class="pl-q" type="search" placeholder="搜尋店名、地址或類別" value="${Z(i.q)}" data-pl-q aria-label="搜尋島上的店">
      <button class="chip${i.open?" on":""}" data-act="pl-open">只看現在有開</button>
    </div>
    <div class="pl-body">${_p(n,t)}</div>
    <p class="note">這一區的店和地點來自 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap 貢獻者</a>（ODbL 授權，${Z(zp)} 抓取），依離捷運站或老街的距離分島。地址、營業時間有寫才顯示，請以店家公告為準。</p>
  </section>`}const bc=Array.from({length:6},(n,t)=>[8.6*Math.sin(t*Math.PI/3),8.6*Math.cos(t*Math.PI/3)]),VM=n=>{var t;return n==="event"?[bc]:((t=Fo[n])==null?void 0:t.parts)||[bc]},si=n=>Math.round(n*10)/10,Sc=(n,t=0,e=0)=>n.map(i=>`M${i.map(([s,o])=>`${si(s+t)} ${si(o+e)}`).join("L")}Z`).join("");function yp(n,t="isl-sil"){const e=VM(n);let i=1/0,s=-1/0,o=1/0,r=-1/0;for(const f of e)for(const[u,h]of f)i=Math.min(i,u),s=Math.max(s,u),o=Math.min(o,h),r=Math.max(r,h);const a=Math.max(s-i,r-o)*.06,l=[i-a,o-a,s-i+a*2,r-o+a*2].map(si).join(" "),c=Math.max(s-i,r-o)*.045;return`<svg class="${t}" viewBox="${l}" aria-hidden="true"><path d="${Sc(e)}"/><circle cx="0" cy="0" r="${si(c)}"/></svg>`}function GM(n){const t=jh,e=6,i=[t.minX-e,t.minZ-e,t.maxX-t.minX+e*2,t.maxZ-t.minZ+e*2].map(si).join(" "),s=Fe.map(l=>{const c=Fo[l.id];if(!c)return"";const f=n.get(l.id)||0;return`<g class="sm-isl${f?" got":""}" data-go="island:${l.id}" role="button" tabindex="0" aria-label="${Z(l.name)}${f?"（已集章）":""}">
      <title>${Z(l.name)}</title><path d="${Sc(c.parts,c.x,c.z)}"/>
      ${f?`<text class="sm-mark" x="${si(c.mx)}" y="${si(c.mz-7)}">已呷${f>1?`×${f}`:""}</text>`:""}
      <text x="${si(c.mx)}" y="${si(c.mz+4)}">${Z(l.name)}</text>
    </g>`}).join(""),[o,r]=Op,a=`<g class="sm-isl event" data-go="event:event" role="button" tabindex="0" aria-label="活動島"><title>活動島</title><path d="${Sc([bc],o,r)}"/></g>`;return`<svg class="stamp-svg" viewBox="${i}">${s}${a}</svg>`}const gf={snack:"#ffe1c7",noodle:"#ffe9b0",rice:"#ffe0d2",stirfry:"#ffd3cf",hotpot:"#ffd0d8",breakfast:"#fff1b8",cafe:"#ead7c7",dessert:"#d9f1ff",drink:"#e7dcff",bar:"#d9def7",play:"#d3f5e4"};let Br=null;function Mp(){if(Br)return Br;const n={};for(const e of vn)for(const{ch:i,p:s}of fo(e))n[i]=(n[i]||0)+s*e.visits;const t=Object.values(n).reduce((e,i)=>e+i,0);return Br=Object.entries(n).map(([e,i])=>({ch:e,p:i/t})).sort((e,i)=>i.p-e.p),Br}function WM(n){return n<.25?"安靜":n<.45?"有人氣":n<.65?"熱鬧":n<.82?"很熱鬧":"擠爆"}function ba(n,t,{reason:e="",score:i=null,compact:s=!1}={}){const o=Wn(n,t),r=hp(n.id).length;return`<button class="scard${o.open?"":" closed"}${s?" compact":""}" data-go="shop:${n.id}">
    <span class="sic" style="background:${gf[n.cat]||"#eee"}">${Xn(n)}</span>
    <span class="sbody">
      <span class="sname">${Z(n.name)}${bp(n)}${r?'<i class="stamp-mini" title="你來過">✓</i>':""}</span>
      <span class="smeta">${Z(fe(n.island))} · ${Z(n.sub)} · ${Di(n.price)}</span>
      ${e?`<span class="sreason">${e}</span>`:""}
    </span>
    <span class="sside">
      ${i!=null?`<span class="score"><b>${i}</b><small>契合</small></span>`:""}
      ${hf(o)}
      ${o.open&&!n.real?`<span class="crowd">${mp(o.crowd)}<em>${Ac(o.crowd)}</em></span>`:""}
    </span>
  </button>`}function bp(n){return`${n.real?'<i class="tag real" title="實際存在的店，資料以店家公告為準">真實店家</i>':""}${n.adult?'<i class="tag adult" title="限 18 歲以上">18+</i>':""}`}function Sp(n){const t=as(n),e=ps(n,cn),i=e?t.done?"已完成・再看一次":t.n?`進度 ${t.n}/${t.total}・繼續走`:Z(n.hook):"🔒 完成上一篇解鎖";return`<button class="arc-banner${t.done?" done":""}${e?"":" lock"}" data-go="arc:${n.id}">
    <span class="ab-ic">${n.host.icon}</span>
    <span class="ab-b"><small>📖 ${Xs.name}・第 ${n.no} 篇・${Z(fe(n.island))}篇</small><b>${Z(n.title)}</b><em>${i}</em></span>
    <span class="ab-go">→</span>
  </button>`}function XM(){const n=cn.filter(e=>ps(e,cn)&&!as(e).done),t=n.find(e=>as(e).n>0)||n[0]||cn[cn.length-1];return t?Sp(t):""}function xf(n){const{mow:t,minutes:e,rain:i}=n,s=dp(e),o=sp(t,5),r=vn.filter(a=>Wn(a,t).open).length;return`
  <section class="hero">
    <p class="kicker">${s.icon} ${Qs(t)} · ${s.name}${i?" · 下雨中 ☔":""}</p>
    <h2>現在${Z(Xe.region.area)}有 <b>${r}</b> 家店開著，<br/>你想去哪座島呷飽？</h2>
    <p class="lead">${Fe.length} 座島＝${Z(Xe.region.area)} ${Fe.length} 個生活圈，島的形狀照真實的區里畫。每座島 6 家示範店，外加 100 家 OpenStreetMap 上的真實店家。</p>
    ${r<12?`<p class="quiet">🌙 這個時間只剩 ${r} 家還亮著燈。<button class="link-btn" data-act="dinner">看晚餐時段最熱鬧的樣子 →</button></p>`:""}
    <div class="cta-row">
      <button class="btn primary big" data-act="finder">🎯 幫我挑一家</button>
      <button class="btn big" data-act="dice">🎲 擲骰</button>
      <button class="btn big" data-act="poe">🙏 擲筊</button>
    </div>
  </section>
  ${XM()}
  <section>
    <h3>🔥 此刻最熱 <small>人潮 × 人氣</small></h3>
    <div class="cards">${o.length?o.map(({shop:a})=>ba(a,t)).join(""):'<p class="empty">這個時間大家都睡了，拉一下時間軸看看白天？</p>'}</div>
  </section>
  <section>
    <h3>🧭 大家怎麼找到店 <small>點顏色，地圖上只看那一種</small></h3>
    ${df(Mp(),{active:n.flowChannel})}
    <button class="link-btn" data-act="flows">看完整足跡與熱門路線 →</button>
  </section>
  <section>
    <h3>📣 島民動態 <span class="demo">示範</span></h3>
    <ul class="feed" id="feed"></ul>
  </section>
  ${Jo()}`}function Jo(){return`<p class="note">標「真實店家」的是實際存在的店，資料以店家公告為準；「島上的 100 家」是 OpenStreetMap 上的真實店家；街上其他店家、留言與數字是示範用的虛構資料，地標是公開地點。正式版的「大家的足跡」會來自真實打卡。島的形狀資料來源：${$p}。</p>`}const qM={ig:"Instagram",fb:"Facebook",threads:"Threads",web:"官網"};function YM(n,t){var s,o;const e=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n.addr)}`,i=Object.entries(n.links||{}).map(([r,a])=>`<a class="chip link" href="${Z(a)}" target="_blank" rel="noopener">${Z(qM[r]||r)} ↗</a>`);return`<section>
    <h3>📍 店家資訊</h3>
    <div class="rows plain">
      <div class="row"><span class="rl">營業時間</span><span class="rv">${Z(t)}</span></div>
      <div class="row"><span class="rl">價位</span><span class="rv">${Z(Di(n.price))}</span></div>
      <div class="row"><span class="rl">地址</span><span class="rv sel">${Z(n.addr)} <a href="${e}" target="_blank" rel="noopener">地圖 ↗</a></span></div>
      ${n.phone?`<div class="row"><span class="rl">電話</span><span class="rv sel">${Z(n.phone)}</span></div>`:""}
    </div>
    ${i.length?`<div class="chips">${i.join("")}</div>`:""}
    <p class="hint">資料來源：${Z(((s=n.source)==null?void 0:s.note)||"店家公開資訊")}（${Z(((o=n.source)==null?void 0:o.checked)||"")} 查核）。人潮要等島民打卡累積，現在還沒有資料。</p>
  </section>`}function Hh(n){const t=Re[n.shop];if(!t)return"";const e=n.party>1?`${n.party} 個人`:"一個人";return`<li class="fi">
    <span class="fav" style="background:${Li(n.via)}">${Z(n.who.slice(-2,-1)||n.who[0])}</span>
    <span class="ft"><b>${Z(n.who)}</b>${e}從<b>${Z(fe(n.from))}</b>去
      <a data-go="shop:${t.id}">${Z(t.name)}</a>
      <span class="via" style="--c:${Li(n.via)}">${Z(to(n.via))}</span>
      <em>「${Z(n.line)}」</em></span>
  </li>`}function jM(n,t){var u;const e=cs[n];if(!e)return xf(t);const{mow:i}=t,s=$n[n]||[],o=ip(n,i,t.rain),r=B2(n),a=Bp(n),l=e.landmarks.map(h=>Ei[h]&&Hp(e,h,Ei[h].name)).filter(Boolean),c=$2(n).slice(0,6),f=Go().checkins.filter(h=>h.island===n).length;return`
  <header class="ihead">
    <span class="tokbig">${yp(n)}</span>
    <span class="ih">
      <h2>${Z(e.name)}${f?' <span class="stamp-chip">已集章</span>':""}</h2>
      <p>${Z(((u=ks[e.city])==null?void 0:u.label)||Xe.region.area)} · ${Z(e.tagline)}</p>
    </span>
  </header>
  <p class="vibe">${Z(e.vibe)}</p>
  <div class="facts">
    <div class="fact"><span>現在</span><b>${WM(o)}</b><span class="heatbar"><i style="width:${Math.round(o*100)}%"></i></span></div>
    <div class="fact"><span>${Xe.region.rail}</span>${r.length?r.map(h=>`<em class="mrt" style="--c:${h.color}">${Z(h.name)}</em>`).join(""):"<b>騎車、公車比較快</b>"}</div>
  </div>
  <p class="tip"><b>在地人才知道</b>${Z(e.localTip)}</p>
  ${Sf[n]?Sp(Sf[n]):Tl.includes(n)?`<p class="arc-soon">📖 ${Xs.name}：${Z(e.name)}篇連載準備中</p>`:""}
  <section>
    <h3>🏪 街上的店 <small>點店名，鏡頭飛過去</small></h3>
    <div class="cards">${s.map(h=>ba(h,i)).join("")}</div>
  </section>
  ${$M(n,t)}
  <section>
    <h3>🏝 客人從哪些島來 <small>${Xe.region.rail}直達的島來得多</small></h3>
    ${Mc(c.map(h=>({label:Z(fe(h.island))+(h.island===n?"<small>（在地）</small>":""),p:h.p,go:h.island===n?null:`island:${h.island}`})))}
  </section>
  <section>
    <h3>📱 怎麼找到這座島的店</h3>
    ${df(V2(n),{active:t.flowChannel})}
  </section>
  ${l.length?`<section><h3>🏛 島上地標</h3><div class="chips">${l.map(h=>`<span class="chip">${Z(h)}</span>`).join("")}</div></section>`:""}
  <section>
    <h3>↔ 隔壁島</h3>
    <div class="chips">${a.map(h=>`<button class="chip link" data-go="island:${h.id}">${Z(h.name)}</button>`).join("")}${n===qh.id?'<button class="chip link event" data-go="event:event">🌈 彩虹橋到活動島</button>':""}</div>
  </section>
  ${Jo()}`}const ZM={rain:n=>{var t;return(t=n.flags)==null?void 0:t.rainOK},late:()=>!0,morning:n=>["breakfast","cafe","snack","noodle"].includes(n.cat),afternoon:n=>["dessert","cafe","drink","play"].includes(n.cat),evening:n=>["stirfry","bar","hotpot","rice","noodle","snack","play"].includes(n.cat)};function KM(n){const{mow:t,minutes:e,rain:i}=n,s=cp(e,i),o=Qr.themes[s],r=vn.map(l=>({s:l,st:Wn(l,t)})).filter(l=>l.st.open&&ZM[s](l.s)).sort((l,c)=>c.st.crowd*Math.sqrt(c.s.visits)*(1+(c.s.revisit||0))-l.st.crowd*Math.sqrt(l.s.visits)*(1+(l.s.revisit||0))).slice(0,6),a=[["早餐島","04:00–11:00"],["午後島","11:00–17:00"],["下班島","17:00–22:00"],["宵夜島","22:00–04:00"],["雨天島","只要下雨"]];return`
  <header class="ihead event">
    <span class="tokbig">${yp("event")}</span>
    <span class="ih"><h2>活動島・${Z(o.name)}</h2><p>${Z(o.tagline)}</p></span>
  </header>
  <p class="vibe">${Z(o.desc)}</p>
  <p class="tip"><b>怎麼玩</b>活動島會跟著時間換主題，擲骰擲到 7 就會來這裡。摩天輪、餐車、舞台都在，下面是這個時段島民最推的店。</p>
  <section>
    <h3>✨ ${Z(o.name)}推薦 <small>現在有開的</small></h3>
    <div class="cards">${r.length?r.map(l=>ba(l.s,t)).join(""):'<p class="empty">這個時段沒有符合主題又開著的店，換個時間看看。</p>'}</div>
  </section>
  <section>
    <h3>🗓 一天的主題</h3>
    <div class="rows plain">${a.map(([l,c])=>`<div class="row"><span class="rl">${l===o.name?`<b>${l}</b> ← 現在`:l}</span><span class="rv">${c}</span></div>`).join("")}</div>
  </section>
  ${Jo()}`}function JM(n,t){var p,_,y,v;const e=Re[n];if(!e)return xf(t);const{mow:i,baseDay:s,slider:o}=t,r=Wn(e,i),a=Math.floor(i/gn)%7,l=Cc(e,a),c=fo(e),f=Ma(e).slice(0,5),u=Object.keys(Ci).reduce((C,A)=>{var T;return C+(((T=e.fits)==null?void 0:T[A])||0)},0)||1,h=Object.entries(Ci).map(([C,A])=>{var T,R;return{k:C,label:A,p:(((T=e.fits)==null?void 0:T[C])||0)/u,votes:((R=e.fits)==null?void 0:R[C])||0}}).sort((C,A)=>A.p-C.p),d=Object.entries(kp).filter(([C])=>{var A;return(A=e.flags)==null?void 0:A[C]}),g=hp(e.id).length,x=e.hours?e.hours.map(([C,A])=>`${C}–${A}`).join("、"):"營業時間請洽店家",m=e.hours?(p=e.off)!=null&&p.length?`・${e.off.map(C=>Oo[C]).join("、")}公休`:"・全年無休":"";return`
  <header class="shead">
    <span class="sic big" style="background:${gf[e.cat]||"#eee"}">${Xn(e)}</span>
    <span class="ih">
      <h2>${Z(e.name)}${bp(e)}</h2>
      <p><button class="inline-link" data-go="island:${e.island}">${Z(fe(e.island))}</button> · ${Z(pp(e.cat))} · ${Z(e.sub)} · ${Di(e.price)}</p>
    </span>
  </header>
  <div class="status-row">
    ${hf(r)}
    ${r.open&&!e.real?`<span class="crowd big">${mp(r.crowd)}<em>現在${Ac(r.crowd)}</em></span>`:""}
    ${bf[e.queue]?`<span class="pill ghost">${Z(bf[e.queue])}</span>`:""}
    ${(_=e.flags)!=null&&_.reserve&&e.real?'<span class="pill ghost">要先預約</span>':""}
  </div>
  <div class="cta-row">
    <button class="btn primary" data-act="checkin">📍 ${g?`再打卡・已 ${g} 次`:"我在這，打卡"}</button>
    <button class="btn" data-act="poe-shop">🙏 問神明</button>
    <button class="btn" data-act="crew">🍻 揪團</button>
    <button class="btn icon" data-act="share" title="分享卡">🔗</button>
  </div>
  ${e.real?YM(e,x+m):`<section>
    <h3>⏰ ${Oo[a]}的人潮 <small>${x}${m}</small></h3>
    ${UM(e,s,o)}
    <p class="hint">${l?`想避開人潮：<b>${Ri(l.hour*60)}</b> 前後人最少。`:"這天沒有營業。"}${e.queue==="long"?"尖峰時段通常要排隊。":""}</p>
  </section>`}
  ${e.signature?`<section>
    <h3>⭐ 招牌</h3>
    <div class="signature"><span>${Z(e.signature.name)}</span><b>$${e.signature.price}</b></div>
    <ul class="menu">${(e.menu||[]).map(C=>`<li><span>${Z(C.name)}</span><i></i><b>$${C.price}</b></li>`).join("")}</ul>
  </section>`:""}
  ${e.real&&!e.visits?`<section>
    <h3>🌱 剛上島</h3>
    <p class="empty">還沒有島民在這裡打卡。「適合誰」、「大家怎麼找到這家」、「客人從哪來」都會用真實打卡算出來，來當第一個打卡的人吧。</p>
  </section>`:`<section>
    <h3>👥 適合誰 <small>${Oh(u)} 位島民投票</small></h3>
    ${Mc(h.map(C=>({label:Z(C.label),p:C.p,value:`${eo(C.p)}`})),{max:h[0].p})}
  </section>
  <section>
    <h3>🧭 大家怎麼找到這家</h3>
    ${df(c,{active:t.flowChannel})}
    <div class="stats">
      <div><b>${Oh(e.visits)}</b><span>本月打卡</span></div>
      <div><b>${eo(e.revisit)}</b><span>回訪率</span></div>
      <div><b>${Z(fe(f[0].island))}</b><span>最多人從這來</span></div>
    </div>
  </section>
  <section>
    <h3>🏝 客人從哪裡來</h3>
    ${Mc(f.map(C=>({label:Z(fe(C.island))+(C.island===e.island?"<small>（在地）</small>":""),p:C.w,go:`island:${C.island}`})))}
  </section>`}
  ${e.owner?`<section><h3>${e.real?"🏷 店家自我介紹":"🧑‍🍳 老闆說"}</h3><blockquote class="owner">${Z(e.owner)}</blockquote></section>`:""}
  ${(y=e.tips)!=null&&y.length?`<section><h3>${e.real?"📌 去之前要知道":"💡 內行吃法"}</h3><ul class="tips">${e.tips.map(C=>`<li>${Z(C)}</li>`).join("")}</ul></section>`:""}
  <section>
    <h3>💬 島民怎麼說${e.real?"":' <span class="demo">示範</span>'}</h3>
    ${(v=e.voices)!=null&&v.length?`<div class="voices">${e.voices.map(tb).join("")}</div>`:'<p class="empty">還沒有島民留言。</p>'}
  </section>
  ${d.length?`<section><h3>✅ 店家條件</h3><div class="chips">${d.map(([,C])=>`<span class="chip ok">${Z(C)}</span>`).join("")}</div></section>`:""}
  ${Jo()}`}const QM={晴:"☀️",陰:"☁️",雨:"🌧"};function tb(n){return`<div class="voice">
    <span class="vav" style="background:${Li(n.via)}">${Z(n.who[0])}</span>
    <div class="vb">
      <p class="vm"><b>${Z(n.who)}</b><span>${Z(fe(n.home))}來・${Z(n.when)}・${n.party>1?`${n.party} 人`:"一個人"}・${QM[n.weather]||""}</span></p>
      <p class="vt">${Z(n.text)}</p>
      <span class="via" style="--c:${Li(n.via)}">${Z(to(n.via))}</span>
    </div>
  </div>`}function eb(n){var l;const{mow:t,rain:e}=n,i=Kr(t,{mode:n.flowMode,rain:e,limit:60}),s=new Map;for(const c of i){const f=`${c.from}>${c.shop}`;s.set(f,(s.get(f)||0)+c.w)}const o=[...s.entries()].sort((c,f)=>f[1]-c[1]).slice(0,8),r=((l=o[0])==null?void 0:l[1])||1,a=Go().checkins.length;return`
  <header class="ihead plain"><span class="ih"><h2>🧭 大家的足跡</h2><p>${n.flowMode==="month"?"本月累積":`${Qs(t)} 此刻`}</p></span></header>
  <p class="vibe">每一道光弧，是一群人從住的島出發去吃東西；光點的顏色，是他們<b>怎麼找到這家店</b>的。</p>
  <div class="seg" role="tablist">
    <button class="${n.flowMode==="now"?"on":""}" data-act="flowmode:now">此刻</button>
    <button class="${n.flowMode==="month"?"on":""}" data-act="flowmode:month">本月</button>
  </div>
  <section>
    <h3>🎨 光點顏色 <small>點一種，地圖上只亮那一種</small></h3>
    <div class="legend big">${Object.entries(Ji).map(([c,f])=>{var u;return`<button class="leg${n.flowChannel===c?" on":""}" data-ch="${c}"><b style="background:${f.color}"></b>${Z(f.label)}<em>${eo(((u=Mp().find(h=>h.ch===c))==null?void 0:u.p)||0)}</em></button>`}).join("")}</div>
  </section>
  <section>
    <h3>🛣 ${n.flowMode==="month"?"本月":"此刻"}最多人走的路線</h3>
    ${o.length?`<ol class="routes">${o.map(([c,f],u)=>{const[h,d]=c.split(">"),g=Re[d],x=fo(g).reduce((m,p)=>p.p>m.p?p:m);return`<li data-go="shop:${d}">
          <span class="rt-n">${u+1}</span>
          <span class="rt-b">
            <span class="rt-t"><small>${Z(fe(h))} →</small> ${Xn(g)} <b>${Z(g.name)}</b></span>
            <span class="rb"><i style="width:${Math.max(6,f/r*100).toFixed(1)}%"></i></span>
          </span>
          <span class="via" style="--c:${Li(x.ch)}">${Z(to(x.ch))}</span>
        </li>`}).join("")}</ol>`:'<p class="empty">這個時間路上沒什麼人。</p>'}
  </section>
  <section>
    <h3>👣 我的足跡</h3>
    <p class="hint">${a>=2?`你打卡過 ${a} 次，地圖上的<b style="color:#ff5f8f">粉紅虛線</b>就是你的路線。`:"打卡兩次以上，地圖上就會畫出你自己的跳島路線。"}</p>
    <button class="btn" data-act="passport">📒 打開我的護照</button>
  </section>
  ${Jo()}`}const $h={solo:"🙋",date:"💑",group:"🍻",family:"👨‍👩‍👧",pet:"🐶"};let Ec=!1;function nb(){Ec=!Ec}function ib(n,t){return wM(n,t.mow,t.rain)}function sb(n,t,e){const i=e.list.slice(0,5),s=Object.keys(ks).filter(l=>Fe.some(c=>c.city===l)).map(l=>{var c;return`<optgroup label="${((c=ks[l])==null?void 0:c.label)||l}">${Fe.filter(f=>f.city===l).map(f=>`<option value="${f.id}"${t.from===f.id?" selected":""}>${Z(f.name)}</option>`).join("")}</optgroup>`}).join(""),o=n.mobile,r=!o||Ec,a=[`${$h[t.who]} ${Ci[t.who]}`,t.cats.length?t.cats.map(l=>Ki[l].label).join("、"):"吃什麼都可以",t.budget==="any"?"預算不限":_c[t.budget].label,`從${fe(t.from)}出發`,t.avoidQueue?"怕排隊":""].filter(Boolean).join("・");return`
  <p class="hint lead-hint">告訴我你的狀況，條件一改，排行馬上重排；每一家都寫出加分和要注意的地方。</p>
  <div class="cond${r?" open":""}">
  ${o?`<button class="cond-sum" data-act="cond"><b>${Z(a)}</b><em>${r?"收起 ▴":"改條件 ▾"}</em></button>`:""}
  <div class="form">
    <div class="field">
      <label>跟誰去？</label>
      <div class="chips pick">${Object.entries(Ci).map(([l,c])=>`<button class="chip${t.who===l?" on":""}" data-q="who:${l}">${$h[l]} ${Z(c)}</button>`).join("")}</div>
    </div>
    <div class="field">
      <label>想吃什麼？<small>可以多選</small></label>
      <div class="chips pick">
        <button class="chip${t.cats.length?"":" on"}" data-q="cat:all">都可以</button>
        ${Object.entries(Ki).map(([l,c])=>`<button class="chip${t.cats.includes(l)?" on":""}" data-q="cat:${l}">${c.icon} ${Z(c.label)}</button>`).join("")}
      </div>
    </div>
    <div class="field">
      <label>預算（一個人）</label>
      <div class="chips pick">${Object.entries(_c).map(([l,c])=>`<button class="chip${t.budget===l?" on":""}" data-q="budget:${l}">${Z(c.label)}</button>`).join("")}</div>
    </div>
    <div class="field two">
      <label>你現在在哪？
        <select data-q="from">${s}</select>
      </label>
      <label class="switch"><input type="checkbox" data-q="avoidQueue"${t.avoidQueue?" checked":""}/><span></span>怕排隊</label>
    </div>
  </div>
  </div>
  <section>
    <h3>🏆 最適合你的 ${i.length} 家 <small>${n.rain?"已考慮下雨・":""}從${Z(fe(t.from))}出發</small></h3>
    ${i.length?`<ol class="results">${i.map((l,c)=>`<li class="result">
            <span class="rank r${c+1}">${c+1}</span>
            ${ba(l.shop,n.mow,{score:l.score})}
            <ul class="why">${l.reasons.slice(0,5).map(f=>`<li class="${f.ok===!0?"ok":f.ok===!1?"bad":"meh"}"${f.color?` style="--c:${f.color}"`:""}>${Z(f.text)}</li>`).join("")}</ul>
          </li>`).join("")}</ol>`:'<p class="empty">條件太嚴格了，一家都沒有 🥲 試試看把「想吃什麼」或「預算」改成都可以，或用時間軸換個時段。</p>'}
    <p class="hint">共 ${e.total} 家，${Uh(e.dropped)?`已排除：${Uh(e.dropped)}。`:"全部都列入計算。"}</p>
  </section>
  <details class="explain">
    <summary>契合度怎麼算的？</summary>
    <p>依序看這幾件事（括號是比重）：<b>適不適合這群人</b>（30，島民打卡時投的票）、<b>離你多近</b>（24，同島最好，捷運直達加分）、<b>排隊與人潮</b>（16）、<b>現在有沒有開</b>（14）、<b>時段合不合</b>（12，沒指定想吃什麼時才算，晚餐時間先推正餐）、<b>回訪率</b>（10）、<b>預算</b>（8）；下雨時，不怕雨的店加分。最後換算成 1–99 的契合度。</p>
    <p>沒有付費排名，也不會因為店家下廣告而往前。</p>
  </details>
  <button class="btn primary wide" data-act="poe-top">🙏 讓神明在前三名裡選一家</button>`}function ob(n,t){return t.list.slice(0,5).map((e,i)=>({from:n.from,to:e.shop.island,shop:e.shop.id,w:5-i*.6}))}const rb={1:[[50,50]],2:[[28,28],[72,72]],3:[[25,25],[50,50],[75,75]],4:[[28,28],[72,28],[28,72],[72,72]],5:[[25,25],[75,25],[50,50],[25,75],[75,75]],6:[[28,22],[72,22],[28,50],[72,50],[28,78],[72,78]]};function ab(n){const t=n===1||n===4,e=n===1?13:8.5;return`<svg viewBox="0 0 100 100"><rect x="2" y="2" width="96" height="96" rx="18" fill="#fffdf7"/>${rb[n].map(([i,s])=>`<circle cx="${i}" cy="${s}" r="${e}" fill="${t?"#d7263d":"#1d2433"}"/>`).join("")}</svg>`}const lb={1:[0,0],6:[0,180],3:[0,-90],4:[0,90],5:[-90,0],2:[90,0]};function Vh(n){return`<div class="die" id="${n}"><div class="cube">${[["front",1],["back",6],["right",3],["left",4],["top",5],["bottom",2]].map(([e,i])=>`<div class="f ${e}">${ab(i)}</div>`).join("")}</div></div>`}const Gh={2:1,3:2,4:3,5:4,6:5,7:6,8:5,9:4,10:3,11:2,12:1};function cb(n,t,e=Math.random){var r;const i=($n[n]||[]).map(a=>({s:a,st:Wn(a,t)})),s=i.filter(a=>a.st.open),o=s.length?s:i;return((r=o[Math.floor(e()*o.length)])==null?void 0:r.s)||null}function fb(n){const t=vn.filter(i=>!i.real).map(i=>({s:i,st:Wn(i,n)})).filter(i=>i.st.open);if(!t.length)return null;t.sort((i,s)=>s.st.crowd-i.st.crowd);const e=t.slice(0,10);return e[Math.floor(Math.random()*e.length)].s}function ub(n){const t=n.openModal(`
    <div class="dice-modal">
      <h2>🎲 擲骰子，看今天去哪座島</h2>
      <p class="sub">兩顆骰子加起來是 7 就去活動島，其他點數就從 ${Fe.length} 座島裡抽一座給你。</p>
      <div class="dice-stage">${Vh("d1")}${Vh("d2")}</div>
      <div class="dice-result" aria-live="polite"></div>
      <div class="cta-row center"><button class="btn primary big" data-roll>擲！</button></div>
    </div>`,{cls:"wide"}),e=t.el,i=e.querySelector(".dice-result"),s=e.querySelector("[data-roll]");let o=!1;function r(){if(o)return;o=!0,s.disabled=!0,i.innerHTML='<p class="rolling">骰子滾滾滾……</p>';const a=1+Math.floor(Math.random()*6),l=1+Math.floor(Math.random()*6),c=a+l;for(const[f,u,h]of[["d1",a,0],["d2",l,1]]){const d=e.querySelector(`#${f} .cube`),[g,x]=lb[u],m=720+h*360,p=1080-h*360;d.style.transition="none",d.style.transform="rotateX(0deg) rotateY(0deg)",d.offsetWidth,d.style.transition=`transform ${1.1+h*.25}s cubic-bezier(.2,.75,.25,1)`,d.style.transform=`rotateX(${g+m}deg) rotateY(${x+p}deg)`,e.querySelector(`#${f}`).classList.remove("land"),e.offsetWidth,e.querySelector(`#${f}`).classList.add("land")}setTimeout(()=>{var x,m;o=!1,s.disabled=!1,s.textContent="再擲一次",s.classList.remove("primary");const f=c===7,u=f?null:Fe[Math.floor(Math.random()*Fe.length)];let h,d;f?(h=fb(n.mow()),d="event",n.world.pulse(["event"])):(d=u.id,h=cb(d,n.mow()),n.world.pulse([d]));const g=Gh[c]<=2;i.innerHTML=`
        <p class="sum"><span>${a}</span>＋<span>${l}</span>＝<b>${c}</b>${g?'<em class="rare">稀有！</em>':""}</p>
        <p class="sub">${f?`擲出 7 的機率是 ${(Gh[7]/36*100).toFixed(1)}%　→ 活動島！`:`骰子幫你抽到 → ${Z(u.name)}`}</p>
        ${h?`<div class="pick-card">
          <span class="pk-ic">${Xn(h)}</span>
          <span class="pk-b"><b>${Z(h.name)}</b><small>${Z(fe(h.island))} · ${Z(h.sub)} · ${Di(h.price)}</small></span>
        </div>
        <div class="cta-row center">
          <button class="btn primary" data-go-shop="${h.id}">就決定是你了 →</button>
          ${d!==h.island?'<button class="btn" data-go-island="event">去活動島看看</button>':""}
        </div>`:'<p class="sub">這個時間島上的店都休息了，再擲一次吧。</p>'}`,(x=i.querySelector("[data-go-shop]"))==null||x.addEventListener("click",()=>{n.onPick(h.id,"dice"),t.close(),n.go("shop",h.id)}),(m=i.querySelector("[data-go-island]"))==null||m.addEventListener("click",()=>{t.close(),n.go("event","event")})},1500)}s.addEventListener("click",r),setTimeout(r,250)}function Is(n){const t=n==="flat";return`<svg viewBox="0 0 120 66" class="jiao-svg ${n}">
    <defs>
      <linearGradient id="jr-${n}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${t?"#f08a6a":"#e0262c"}"/>
        <stop offset="1" stop-color="${t?"#cf4a32":"#7a0a0f"}"/>
      </linearGradient>
    </defs>
    <path d="M6 54 C16 4 104 4 114 54 C96 32 24 32 6 54 Z" fill="url(#jr-${n})" stroke="#5b0a0d" stroke-width="2" stroke-linejoin="round"/>
    ${t?'<path d="M18 44 C30 18 90 18 102 44" stroke="#ffd2b8" stroke-width="1.6" fill="none" opacity=".75"/><path d="M30 36 C44 24 76 24 90 36" stroke="#ffd2b8" stroke-width="1.2" fill="none" opacity=".45"/>':'<path d="M22 30 C38 12 82 12 98 30" stroke="#ffb3a8" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>'}
  </svg>`}function El(n,t){let e=0,i=0;const s=n.openModal(`
    <div class="poe-modal">
      <h2>🙏 擲筊問神明</h2>
      <p class="pray"></p>
      <div class="poe-stage"><div class="jiao j1"></div><div class="jiao j2"></div></div>
      <div class="poe-result" aria-live="polite"></div>
      <div class="cta-row center"><button class="btn primary big" data-throw>擲筊</button></div>
      <p class="sub small">一正一反是「聖筊」＝神明同意；兩個平面朝上是「笑筊」＝神明在笑，再問一次；兩個凸面朝上是「陰筊」＝不行喔。</p>
    </div>`,{cls:"wide"}),o=s.el,r=o.querySelector(".pray"),a=o.querySelector(".poe-result"),l=o.querySelector("[data-throw]"),c=o.querySelector(".j1"),f=o.querySelector(".j2");c.innerHTML=Is("flat"),f.innerHTML=Is("round");const u=g=>vn.find(x=>x.id===t[g]);function h(){const g=u(e);r.innerHTML=g?`弟子誠心請示：今天去 <b>${Z(fe(g.island))}</b> 吃 <b>${Z(g.name)}</b>，好嗎？`:"弟子誠心請示：今天該吃什麼？"}h();let d=!1;l.addEventListener("click",()=>{if(d)return;d=!0,i++,l.disabled=!0,a.innerHTML="";const g=Math.random(),x=g<.5?"holy":g<.75?"laugh":"no",m=x==="holy"?Math.random()<.5?["flat","round"]:["round","flat"]:x==="laugh"?["flat","flat"]:["round","round"];for(const p of[c,f])p.classList.remove("toss"),p.offsetWidth,p.classList.add("toss");setTimeout(()=>{c.innerHTML=Is(m[0]),f.innerHTML=Is(m[1])},520),setTimeout(()=>{var _,y,v;d=!1,l.disabled=!1;const p=u(e);if(x==="holy")a.innerHTML=`<p class="verdict holy">聖筊！神明說好 🙏</p>
          ${p?`<div class="cta-row center"><button class="btn primary" data-go-shop>出發去 ${Z(p.name)} →</button></div>`:""}`,l.textContent="再擲一次",l.classList.toggle("primary",!p),(_=a.querySelector("[data-go-shop]"))==null||_.addEventListener("click",()=>{n.onPick(p.id,null,{oracle:!0}),s.close(),n.go("shop",p.id)}),(y=n.confetti)==null||y.call(n);else if(x==="laugh")a.innerHTML='<p class="verdict laugh">笑筊…神明笑笑不說話，再問一次 😆</p>',l.textContent="再擲一次",l.classList.add("primary");else{const C=e+1<t.length;a.innerHTML=`<p class="verdict no">陰筊，神明覺得不太好 🙅</p>
          ${C?'<div class="cta-row center"><button class="btn" data-next>換下一家問問</button></div>':""}`,l.textContent="不死心再擲",l.classList.add("primary"),(v=a.querySelector("[data-next]"))==null||v.addEventListener("click",()=>{e++,h(),a.innerHTML="",l.textContent="擲筊",c.innerHTML=Is("flat"),f.innerHTML=Is("round")})}i>=6&&x!=="holy"&&a.insertAdjacentHTML("beforeend",'<p class="sub small">擲了這麼多次……神明可能想叫你自己決定 😂</p>')},1250)})}const xe='"PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif';function vf(n,t=""){return`${location.origin+location.pathname}#${n}${t?`-${t}`:""}`}function hb(n){return vf("shop",n)}function wc(n,t,e,i,s,o){n.beginPath(),n.moveTo(t+o,e),n.arcTo(t+i,e,t+i,e+s,o),n.arcTo(t+i,e+s,t,e+s,o),n.arcTo(t,e+s,t,e,o),n.arcTo(t,e,t+i,e,o),n.closePath()}function fa(n,t,e,i){n.beginPath();for(let s=0;s<6;s++){const o=Math.PI/3*s+Math.PI/6;n[s?"lineTo":"moveTo"](t+i*Math.cos(o),e+i*Math.sin(o))}n.closePath()}const db="，。、；：！？」』）〉》…,.!?)";function Ep(n,t,e){const i=[];let s="";for(const o of t)n.measureText(s+o).width>e&&s?db.includes(o)&&s.length>1?(i.push(s.slice(0,-1)),s=s.slice(-1)+o):(i.push(s),s=o):s+=o;return s&&i.push(s),i}function pb(n,t){var d,g;const s=document.createElement("canvas");s.width=1080,s.height=1350;const o=s.getContext("2d"),r=o.createLinearGradient(0,0,0,1350);r.addColorStop(0,"#ffefd8"),r.addColorStop(1,"#ffd2b0"),o.fillStyle=r,o.fillRect(0,0,1080,1350),o.globalAlpha=.18,o.strokeStyle="#e8412c",o.lineWidth=3;for(let x=0;x<1470;x+=104)for(let m=x/104%2?60:0;m<1200;m+=120)fa(o,m,x,56),o.stroke();o.globalAlpha=1,o.fillStyle="#e8412c",fa(o,120,118,62),o.fill(),o.fillStyle="#fff",o.font=`900 64px ${xe}`,o.textAlign="center",o.textBaseline="middle",o.fillText("呷",120,122),o.textAlign="left",o.fillStyle="#1d2433",o.font=`900 58px ${xe}`,o.fillText(oi.name,205,100),o.font=`700 30px ${xe}`,o.fillStyle="#7a4a3a",o.fillText(oi.slogan,207,152),wc(o,70,230,940,900,48),o.fillStyle="#fff",o.shadowColor="rgba(120,40,20,.18)",o.shadowBlur=40,o.shadowOffsetY=16,o.fill(),o.shadowColor="transparent",o.fillStyle=gf[n.cat]||"#ffe8d0",o.beginPath(),o.arc(1080/2,360,92,0,Math.PI*2),o.fill(),o.font=`110px ${xe}`,o.textAlign="center",o.fillText(Xn(n),1080/2,368),o.fillStyle="#1d2433";let a=92;for(o.font=`900 ${a}px ${xe}`;o.measureText(n.name).width>840&&a>56;)a-=4,o.font=`900 ${a}px ${xe}`;o.fillText(n.name,1080/2,540),o.font=`700 36px ${xe}`,o.fillStyle="#6b7385",o.fillText(`${fe(n.island)}島 · ${pp(n.cat)} · ${n.sub}`,1080/2,614),wc(o,150,670,780,120,30),o.fillStyle="#fff4e0",o.fill(),o.fillStyle="#e8412c",o.font=`800 30px ${xe}`,o.fillText(n.signature?"招牌":"地址",1080/2,708),o.fillStyle="#1d2433",o.font=`900 ${n.signature?46:32}px ${xe}`,o.fillText(n.signature?`${n.signature.name}　$${n.signature.price}`:n.addr||"",1080/2,760);const l=Math.floor(t/gn)%7,c=Cc(n,l),f=Object.entries(Ci).sort((x,m)=>{var p,_;return(((p=n.fits)==null?void 0:p[m[0]])||0)-(((_=n.fits)==null?void 0:_[x[0]])||0)})[0];(n.real?[[n.hours?n.hours[0][0]:"洽店家","幾點開"],[(d=n.flags)!=null&&d.reserve?"要預約":"免預約","訂位"],[n.adult?"18+":"全年齡","年齡"]]:[[c?Ri(c.hour*60):"—","人最少的時段"],[`${Math.round(n.revisit*100)}%`,"回訪率"],[f[1],"最適合"]]).forEach(([x,m],p)=>{const _=220+p*320;o.fillStyle="#1d2433",o.font=`900 54px ${xe}`,o.fillText(x,_,880),o.fillStyle="#8a93a6",o.font=`700 28px ${xe}`,o.fillText(m,_,932)});const h=(g=n.voices)==null?void 0:g[0];if(h){o.fillStyle="#4a5468",o.font=`600 32px ${xe}`;const x=Ep(o,`「${h.text}」`,780).slice(0,2);x.forEach((m,p)=>o.fillText(m,1080/2,1010+p*46)),o.fillStyle="#8a93a6",o.font=`600 26px ${xe}`,o.fillText(`— ${h.who}・${fe(h.home)}來`,1080/2,1010+x.length*46+12)}return o.fillStyle="#7a4a3a",o.font=`800 34px ${xe}`,o.fillText(`${Di(n.price)}${n.price?" ／人":""}　·　${oi.sub}`,1080/2,1210),o.font=`600 24px ${xe}`,o.fillStyle="#a07a6a",o.fillText(n.real?"真實店家・資料以店家公告為準":"原型示範資料：店家與數字為虛構",1080/2,1268),s}function mb(n,t){const e=Re[t];if(!e)return;const s=pb(e,n.mow()).toDataURL("image/png"),o=hb(e.id),r=`${e.name}（${fe(e.island)}）｜${e.signature?`${e.signature.name} $${e.signature.price}`:e.sub}｜呷飽島`;n.openModal(`
    <div class="share">
      <h2>🔗 分享這家店</h2>
      <img class="share-img" src="${s}" alt="${Z(e.name)} 分享卡"/>
      <div class="cta-row center">
        ${`<a class="btn primary" href="${s}" download="呷飽島-${Z(e.name)}.png">⬇ 下載分享卡</a>`}
        <button class="btn" data-copy>複製連結</button>
        <a class="btn" target="_blank" rel="noopener" href="https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(o)}&text=${encodeURIComponent(r)}">LINE 分享</a>
      </div>
      <p class="sub small">連結會直接打開這家店。</p>
    </div>`,{cls:"wide"}).el.querySelector("[data-copy]").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(`${r}
${o}`),n.toast("已複製連結")}catch{n.toast("瀏覽器不讓複製，請手動選取網址")}})}function gb(n,t){return vn.filter(e=>e.id!==n.id).map(e=>{var r;const i=Wn(e,t),s=Tc(e.island,n.island);let o=(i.open?2:0)+(e.cat===n.cat?1.2:0)+Math.max(0,2-s)+(((r=e.fits)==null?void 0:r.group)||0)/60;return{x:e,score:o}}).sort((e,i)=>i.score-e.score).slice(0,5).map(e=>e.x)}function xb(n,t){const e=Re[t];if(!e)return;const i=[e,...gb(e,n.mow())],s=new Set([e.id,i[1].id,i[2].id]),o=n.openModal(`
    <div class="crew">
      <h2>🍻 揪團投票</h2>
      <p class="sub">勾 2–4 家給朋友選。複製訊息貼到群組，朋友點連結就能投票。</p>
      <div class="crew-list">${i.map(a=>`<label class="crew-opt"><input type="checkbox" value="${a.id}"${s.has(a.id)?" checked":""}/>
            <span>${Xn(a)}</span><b>${Z(a.name)}</b><small>${Z(fe(a.island))} · ${Di(a.price)}</small></label>`).join("")}</div>
      <div class="cta-row center"><button class="btn primary big" data-copy>複製揪團訊息</button></div>
      <p class="sub small">原型只示範發起與投一票；正式版會即時統計整團的票數。</p>
    </div>`),r=o.el;r.querySelectorAll("input").forEach(a=>a.addEventListener("change",()=>{a.checked?s.add(a.value):s.delete(a.value),s.size>4&&(a.checked=!1,s.delete(a.value),n.toast("最多 4 家，不然會吵不完 😂"))})),r.querySelector("[data-copy]").addEventListener("click",async()=>{if(s.size<2){n.toast("至少選 2 家才有得投");return}const a=i.filter(u=>s.has(u.id)).map(u=>u.id),l=["1️⃣","2️⃣","3️⃣","4️⃣"],c=vf("vote",a.join(".")),f=`🍻 揪團！今天吃哪家？
${a.map((u,h)=>`${l[h]} ${Re[u].name}（${fe(Re[u].island)}・${Di(Re[u].price)}）`).join(`
`)}
👉 投票：${c}`;try{await navigator.clipboard.writeText(f),n.toast("揪團訊息已複製，貼到群組吧！"),o.close()}catch{r.querySelector(".crew-list").insertAdjacentHTML("afterend",`<textarea class="copybox" readonly>${Z(f)}</textarea>`)}})}function vb(n,t){const e=t.map(s=>Re[s]).filter(Boolean);if(e.length<2)return;const i=n.openModal(`
    <div class="crew">
      <h2>🗳 朋友揪你吃飯！</h2>
      <p class="sub">選一家你最想去的：</p>
      <div class="vote-list">${e.map(s=>`<button class="vote-opt" data-v="${s.id}"><span>${Xn(s)}</span><b>${Z(s.name)}</b><small>${Z(fe(s.island))} · ${Z(s.sub)} · ${Di(s.price)}</small></button>`).join("")}</div>
      <p class="sub small">原型只記你自己的這一票；正式版會即時統計整團。</p>
    </div>`);i.el.querySelectorAll("[data-v]").forEach(s=>s.addEventListener("click",()=>{n.onPick(s.dataset.v,"vote"),n.toast(`你投了「${Re[s.dataset.v].name}」！`),i.close(),n.go("shop",s.dataset.v)}))}function _b(n){return vf("arc",n)}function wp(n,t){return n?n.when==="rain"?!!t.rain:n.when==="late"?t.minutes>=1320||t.minutes<120:!1:!1}function Tp(n){var t,e;return n.shop?((t=Re[n.shop])==null?void 0:t.name)||"":((e=Ei[n.lm])==null?void 0:e.name)||""}function Ap(n){const t=as(n),e=ps(n,cn);return n.eps.map((i,s)=>t.eps[s]?"done":e&&s===t.next?"now":"lock")}function yb(n,t){const e=Sn[n];if(!e)return null;const i=Ap(e),s=e.eps.map((o,r)=>({key:String(r),at:o.at,state:i[r],label:i[r]==="done"?"✓":String(r+1)}));return ps(e,cn)&&wp(e.secret,t)&&s.push({key:"secret",at:e.secret.at,state:"secret",label:"★"}),s}function Mb(n){return Math.floor((n%10080+10080)%10080/1440)}function Cp(n,t){var l;if(n.at.shop){const c=Re[n.at.shop];return c?`<button class="ep-where link" data-go="shop:${c.id}"><span>${Xn(c)}</span><b>${Z(c.name)}</b></button>${hf(Wn(c,t.mow))}`:""}const e=Ei[n.at.lm],[i,s]=n.win||[0,1440],o=(l=n.off)==null?void 0:l.days.includes(Mb(t.mow)),r=!o&&t.minutes>=i&&t.minutes<s,a=o?`今天不適合・${n.off.label}`:r?"現在適合去":`建議 ${Ri(i)}–${Ri(s)}`;return`<span class="ep-where"><span>🏛</span><b>${Z((e==null?void 0:e.name)||"")}</b></span><span class="pill ${r?"on":"off"}">${Z(a)}</span>${n.off&&!o?`<span class="pill off">${Z(n.off.label)}</span>`:""}`}function bb(n,t,e,i,s){const o=i==="lock";return`
  <article class="ep ${i}" id="ep-${e}">
    <span class="ep-n">${i==="done"?"✓":e+1}</span>
    <div class="ep-b">
      <h4><small>第 ${e+1} 話</small>${o?"？？？":Z(t.title)}</h4>
      ${o?'<p class="ep-lock">完成上一話才看得到</p>':`<div class="ep-at">${Cp(t,s)}</div>
      <p class="ep-story">${Z(t.story)}</p>
      <p class="ep-task"><b>任務</b>${Z(t.task)}</p>
      ${i==="now"?`<button class="btn primary" data-act="arc-ep:${e}">📍 我到了，完成這一話</button>`:""}`}
    </div>
  </article>`}function Sb(n,t){const e=n.secret;if(!e)return"";const i=as(n);return!(wp(e,t)&&ps(n,cn))&&!i.secret?`<article class="ep secret lock"><span class="ep-n">★</span><div class="ep-b"><h4><small>隱藏話</small>？？？</h4><p class="ep-lock">${Z(e.hint)}。可以拉時間軸、切換天氣試試看。</p></div></article>`:`
  <article class="ep secret${i.secret?" done":" now"}" id="ep-secret">
    <span class="ep-n">${i.secret?"✓":"★"}</span>
    <div class="ep-b">
      <h4><small>隱藏話・${Z(e.hint)}</small>${Z(e.title)}</h4>
      <div class="ep-at">${Cp(e,t)}</div>
      <p class="ep-story">${Z(e.story)}</p>
      <p class="ep-task"><b>任務</b>${Z(e.task)}</p>
      ${i.secret?"":'<button class="btn primary" data-act="arc-ep:secret">📍 我到了，完成隱藏話</button>'}
    </div>
  </article>`}function Rp(n,t){return Tl.length?`${n}：${Tl.map(e=>{var i;return Z(((i=cs[e])==null?void 0:i.name)||"")}).join("、")}……`:Z(t)}function Eb(n){const t=n.next.map(({arc:e,line:i})=>{const s=Sn[e],o=Kh[i];return`<button class="route-row" data-go="arc:${s.id}"><em class="mrt" style="--c:${o.color}">${Z(o.name)}</em><b>第 ${s.no} 篇・${Z(fe(s.island))}篇</b><span>${Z(s.title)} →</span></button>`});return t.length||t.push(`<p class="empty">${Rp("下一篇連載準備中","這一篇是這條航線的終點站。")}</p>`),t.join("")}function wb(n,t){const e=Sn[n];if(!e)return"";const i=as(e),s=ps(e,cn),o=Ap(e),r=cn.find(l=>l.next.some(c=>c.arc===e.id)),a=r==null?void 0:r.next.find(l=>l.arc===e.id);return`
  <header class="ihead arc-head">
    <span class="arc-no"><small>第</small>${e.no}<small>篇</small></span>
    <span class="ih">
      <h2>${Z(e.title)}${i.done?' <span class="stamp-chip">完</span>':""}</h2>
      <p>${Z(fe(e.island))}篇 · ${e.eps.length} 話 · ${s?`進度 ${i.n}/${i.total}`:"🔒 還沒解鎖"}</p>
    </span>
  </header>
  <div class="arc-bar"><i style="width:${i.n/i.total*100}%"></i></div>
  ${s?`<div class="host"><span class="host-ic">${e.host.icon}</span><p><b>${Z(e.host.name)}</b><small>${Z(e.host.who)}</small><span>${Z(e.intro)}</span></p></div>`:`<p class="vibe">${Z(e.hook)}</p>
       <p class="tip"><b>怎麼解鎖</b>先完成「${Z(fe(r.island))}篇」，再搭${Z(Kh[a.line].name)}過來。</p>
       <button class="btn primary wide" data-go="arc:${r.id}">去第 ${r.no} 篇：${Z(r.title)} →</button>`}
  <section class="eps">${e.eps.map((l,c)=>bb(e,l,c,o[c],t)).join("")}${s?Sb(e,t):""}</section>
  ${i.done?`<section class="arc-end"><p class="host-say">${e.host.icon} ${Z(e.outro)}</p>
        <div class="cta-row"><button class="btn" data-act="arc-card">🖼 看完成卡</button><button class="btn" data-go="island:${e.island}">🏝 回到島上</button></div></section>`:""}
  <section>
    <h3>⛴ 下一站</h3>
    ${Eb(e)}
  </section>
  ${i.n||i.secret?'<button class="link-btn danger" data-act="arc-reset">重新走一次這一篇</button>':""}
  <p class="note">劇情人物是虛構的，地標是公開地點。「我到了」是自己按的，進度只存在這台裝置的瀏覽器裡（原型）；正式版會用定位確認到店。</p>`}function Tb(){const n=cn.map(t=>{const e=as(t),i=ps(t,cn),s=e.done?'<i class="rt done">完</i>':i?`<i class="rt">${e.n}/${e.total}</i>`:'<i class="rt lock">🔒</i>';return`<button class="route-row" data-go="arc:${t.id}"><span class="rr-no">${t.no}</span><b>${Z(fe(t.island))}篇・${Z(t.title)}</b>${s}</button>`});return n.push(`<p class="empty">${Rp("連載準備中",`${cn.length} 座島、${cn.length} 篇都上線了。`)}</p>`),n.join("")}function Ab(n,t,e){const i=Sn[t];if(!i)return;const s=e==="secret"?i.secret:i.eps[Number(e)];if(!s)return;const o=r=>{const{arcDone:a}=PM(i,e==="secret"?"secret":Number(e));setTimeout(()=>{n.toast(e==="secret"?`★ 隱藏話「${s.title}」完成`:`📖 第 ${Number(e)+1} 話「${s.title}」完成`),a&&setTimeout(()=>Pp(n,i),2400)},r)};s.at.shop?(n.onPick(s.at.shop,"story"),n.checkin(s.at.shop,{onDone:()=>o(1700)})):o(0)}function Cb(n,t){const e=Sn[t];if(!e)return;const i=n.openModal(`
    <div class="checkin">
      <h2>重新走一次「${Z(e.title)}」？</h2>
      <p class="sub">這一篇的進度會清掉，店家打卡紀錄和島章會留著。</p>
      <div class="cta-row center"><button class="btn" data-no>先不要</button><button class="btn primary" data-yes>重新開始</button></div>
    </div>`);i.el.querySelector("[data-no]").addEventListener("click",i.close),i.el.querySelector("[data-yes]").addEventListener("click",()=>{LM(e),i.close(),n.toast("進度清掉了，從第 1 話開始")})}function Pp(n,t,{celebrate:e=!0}={}){var l;const i=Rb(t).toDataURL("image/png"),s=_b(t.id),o=t.next.map(c=>Sn[c.arc]).filter(Boolean),r=`我在呷飽島走完「${fe(t.island)}篇：${t.title}」🏝 ${t.eps.map(c=>Tp(c.at)).join("→")}`,a=n.openModal(`
    <div class="share">
      <h2>${e?"🎉 ":""}${Z(fe(t.island))}篇完成！</h2>
      <img class="share-img" src="${i}" alt="${Z(t.title)} 完成卡"/>
      ${o.length?`<p class="sub">解鎖下一篇：${o.map(c=>`<b>${Z(fe(c.island))}篇「${Z(c.title)}」</b>`).join("、")}</p>`:'<p class="sub">下一篇連載準備中，敬請期待。</p>'}
      <div class="cta-row center">
        ${`<a class="btn" href="${i}" download="呷飽島-${Z(t.title)}.png">⬇ 下載完成卡</a>`}
        <a class="btn" target="_blank" rel="noopener" href="https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(s)}&text=${encodeURIComponent(r)}">LINE 分享</a>
        ${o.length?`<button class="btn primary" data-next="${o[0].id}">前往下一篇 →</button>`:""}
      </div>
      <p class="sub small">分享的連結會直接打開這一篇。</p>
    </div>`,{cls:"wide"});(l=a.el.querySelector("[data-next]"))==null||l.addEventListener("click",()=>{a.close(),n.go("arc",a.el.querySelector("[data-next]").dataset.next)}),e&&n.confetti()}function Rb(n){const i=document.createElement("canvas");i.width=1080,i.height=1350;const s=i.getContext("2d"),o=s.createLinearGradient(0,0,0,1350);o.addColorStop(0,"#14213d"),o.addColorStop(1,"#2a3f6e"),s.fillStyle=o,s.fillRect(0,0,1080,1350),s.globalAlpha=.12,s.strokeStyle="#ffd23f",s.lineWidth=3;for(let h=0;h<1470;h+=104)for(let d=h/104%2?60:0;d<1200;d+=120)fa(s,d,h,56),s.stroke();s.globalAlpha=1,s.textAlign="center",s.textBaseline="middle",s.fillStyle="#e8412c",fa(s,120,118,62),s.fill(),s.fillStyle="#fff",s.font=`900 64px ${xe}`,s.fillText("呷",120,122),s.textAlign="left",s.font=`900 58px ${xe}`,s.fillText(oi.name,205,100),s.font=`700 30px ${xe}`,s.fillStyle="#ffd23f",s.fillText(`${Xs.name}・第 ${n.no} 篇`,207,152),wc(s,70,230,940,920,48),s.fillStyle="#fffaf0",s.fill(),s.textAlign="center",s.fillStyle="#8a93a6",s.font=`800 34px ${xe}`,s.fillText(`${fe(n.island)}篇`,1080/2,320),s.fillStyle="#1d2433";let r=96;for(s.font=`900 ${r}px ${xe}`;s.measureText(n.title).width>620&&r>60;)r-=4,s.font=`900 ${r}px ${xe}`;s.fillText(n.title,1080/2,410),s.save(),s.translate(930,290),s.rotate(-.22),s.strokeStyle="#e8412c",s.lineWidth=7,s.beginPath(),s.arc(0,0,60,0,Math.PI*2),s.stroke(),s.fillStyle="#e8412c",s.font=`900 60px ${xe}`,s.fillText("完",0,4),s.restore();const a=520,l=112;s.setLineDash([12,10]),s.strokeStyle="#f0b48a",s.lineWidth=6,s.beginPath(),s.moveTo(220,a),s.lineTo(220,a+l*(n.eps.length-1)),s.stroke(),s.setLineDash([]),n.eps.forEach((h,d)=>{const g=a+d*l;s.fillStyle="#e8412c",s.beginPath(),s.arc(220,g,34,0,Math.PI*2),s.fill(),s.fillStyle="#fff",s.textAlign="center",s.font=`900 36px ${xe}`,s.fillText(String(d+1),220,g+2),s.textAlign="left",s.fillStyle="#1d2433",s.font=`900 40px ${xe}`,s.fillText(Tp(h.at),290,g-18),s.fillStyle="#8a93a6",s.font=`700 28px ${xe}`,s.fillText(h.title,290,g+26)}),s.textAlign="center",s.fillStyle="#4a5468",s.font=`600 32px ${xe}`;const c=Ep(s,n.outro,780).slice(0,3),f=a+l*n.eps.length+10;c.forEach((h,d)=>s.fillText(h,1080/2,f+d*46)),s.fillStyle="#8a93a6",s.font=`600 26px ${xe}`,s.fillText(`— ${n.host.name}`,1080/2,f+c.length*46+10),s.fillStyle="#ffd23f",s.font=`800 34px ${xe}`;const u=n.next.map(h=>Sn[h.arc]).filter(Boolean)[0];return s.fillText(u?`下一站：${fe(u.island)}篇「${u.title}」`:`${Xs.name}　·　${oi.sub}`,1080/2,1220),s.font=`600 24px ${xe}`,s.fillStyle="#aab4c8",s.fillText("劇情人物為虛構・地標為公開地點",1080/2,1278),i}function Wh(n,t,e={}){const i=Re[t];if(!i)return;let s=n.presetVia(t)||"passby",o=2;const r=new Set(yc().filter(c=>c.got).map(c=>c.id)),a=n.openModal(`
    <div class="checkin">
      <p class="ck-shop"><span>${Xn(i)}</span><b>${Z(i.name)}</b><small>${Z(fe(i.island))} · ${Qs(n.mow())}${n.rain()?" · ☔":""}</small></p>
      <h2>你是怎麼知道這家的？</h2>
      <p class="sub">這一題會變成地圖上的足跡顏色，幫下一個人知道「好店都是怎麼被找到的」。</p>
      <div class="chips pick ch-pick">${Object.entries(Ji).map(([c,f])=>`<button class="chip${s===c?" on":""}" data-via="${c}" style="--c:${f.color}"><b></b>${Z(f.label)}</button>`).join("")}</div>
      <div class="party">
        <span>幾個人一起？</span>
        <button class="step" data-p="-1" aria-label="少一個">−</button>
        <b class="pn">${o}</b>
        <button class="step" data-p="1" aria-label="多一個">＋</button>
      </div>
      <div class="cta-row center"><button class="btn primary big" data-ok>蓋章！</button></div>
    </div>`),l=a.el;l.querySelectorAll("[data-via]").forEach(c=>c.addEventListener("click",()=>{s=c.dataset.via,l.querySelectorAll("[data-via]").forEach(f=>f.classList.toggle("on",f===c))})),l.querySelectorAll("[data-p]").forEach(c=>c.addEventListener("click",()=>{o=Math.max(1,Math.min(12,o+Number(c.dataset.p))),l.querySelector(".pn").textContent=o})),l.querySelector("[data-ok]").addEventListener("click",()=>{var u;const c=!Wo().has(i.island);TM({shop:i.id,via:s,party:o,mow:n.mow(),rain:n.rain(),oracle:n.oracleFor(i.id)}),a.close(),n.stampFx(i,c),(u=e.onDone)==null||u.call(e),yc().filter(h=>h.got&&!r.has(h.id)).forEach((h,d)=>setTimeout(()=>n.toast(`${h.icon} 解鎖徽章「${h.name}」`,"badge"),1400+d*1600))})}function Pb(n){const t=Go(),e=Wo(),i=yc(),s=[...t.checkins].reverse().slice(0,30);return`
  <header class="ihead plain"><span class="ih"><h2>📒 我的呷飽護照</h2><p>集章 ${e.size}/${Fe.length} · 打卡 ${t.checkins.length} 次</p></span></header>
  <div class="stamp-map">${GM(e)}</div>
  <section>
    <h3>📖 ${Xs.name} <small>${Xs.sub}</small></h3>
    ${Tb()}
  </section>
  <section>
    <h3>🏅 徽章 <small>${i.filter(o=>o.got).length}/${i.length}</small></h3>
    <div class="badges">${i.map(o=>`<div class="badge${o.got?" got":""}" title="${Z(o.desc)}">
          <span class="bi">${o.icon}</span><b>${Z(o.name)}</b><small>${Z(o.desc)}</small>
          <span class="bp"><i style="width:${o.n/o.need*100}%"></i></span>
        </div>`).join("")}</div>
  </section>
  <section>
    <h3>🕘 打卡紀錄</h3>
    ${s.length?`<ul class="log">${s.map(o=>{const r=Re[o.shop];return r?`<li data-go="shop:${r.id}">
              <span class="lg-ic">${Xn(r)}</span>
              <span class="lg-b"><b>${Z(r.name)}</b><small>${Z(fe(r.island))} · ${Qs(o.mow)}${o.rain?" · ☔":""} · ${o.party>1?`${o.party} 人`:"一個人"}${o.oracle?" · 🙏 聖筊":""}</small></span>
              <span class="via" style="--c:${Li(o.via)}">${Z(to(o.via))}</span>
            </li>`:""}).join("")}</ul>
        <button class="link-btn danger" data-act="undo-checkin">刪除最後一筆打卡</button>`:'<p class="empty">還沒有打卡。逛到想去的店，按「我在這，打卡」就會蓋上島章；打卡兩次以上，地圖上會出現你的跳島路線。</p>'}
  </section>
  <p class="note">護照只存在這台裝置的瀏覽器裡（原型）。正式版會用帳號保存，你的打卡也會匿名匯進「大家的足跡」。</p>`}const Lb=[1,2,3,4,5,6,0],Db=["日","一","二","三","四","五","六"],Ib=[[90,"早餐"],[360,"午餐"],[540,"下午茶"],[750,"晚餐"],[1020,"宵夜"],[1230,"深夜"]],Ub={overview:`${Xe.region.area}總覽`,arc:"呷飽航路",finder:"幫我挑",flows:"大家的足跡",passport:"我的護照",event:"活動島"};function Nb({stage:n,world:t}){const e=document.getElementById("ui"),i=Object.keys(ks).filter(B=>ks[B].dot&&Fe.some(X=>X.city===B)).map(B=>ks[B]);e.innerHTML=`
  <header class="topbar">
    <button class="brand" data-act="home" aria-label="回到總覽">
      <span class="logo"><b>呷</b></span>
      <span class="bt"><b>${oi.name}</b><small>${Xe.region.tag}</small></span>
    </button>
    <button class="region-chip" data-act="regions" title="換一區逛逛" aria-label="目前在${Xe.region.name}，換一區逛逛"><span>📍</span><b>${Xe.region.name}</b><i>▾</i></button>
    <span class="slogan">${oi.slogan}</span>
    <div class="tb-right">
      <button class="clock" data-act="live" title="回到現在時間"><i class="live-dot"></i><b class="ck-time">--:--</b><small class="ck-day"></small></button>
      <button class="wx" data-act="rain" title="切換晴天／下雨"><span class="wx-ic">☀️</span><small class="wx-tx">晴天</small></button>
    </div>
  </header>
  <nav class="dock" aria-label="主要功能">
    <button class="dk primary" data-act="finder"><span>🎯</span>幫我挑</button>
    <button class="dk" data-act="dice"><span>🎲</span>擲骰</button>
    <button class="dk" data-act="poe"><span>🙏</span>擲筊</button>
    <button class="dk" data-act="flows"><span>🧭</span>足跡</button>
    <button class="dk" data-act="passport"><span>📒</span>護照<em class="dk-n" hidden>0</em></button>
  </nav>
  <aside class="panel" aria-label="資訊面板">
    <div class="grab" data-act="sheet" aria-label="拉開或收起"><i></i></div>
    <div class="ph">
      <button class="ph-back" data-act="back" aria-label="上一頁">‹</button>
      <div class="ph-title"></div>
      <button class="ph-fold" data-act="fold" aria-label="收起面板" title="收起面板">⟨</button>
    </div>
    <div class="pb"></div>
  </aside>
  <button class="unfold" data-act="fold" title="打開面板">⟩</button>
  <div class="timebar">
    <div class="tb-row">
      <div class="days">${Lb.map(B=>`<button data-act="day:${B}" data-day="${B}">${Db[B]}</button>`).join("")}</div>
      <div class="tb-now"><b class="tb-time"></b><span class="tb-period"></span></div>
      <div class="tb-btns">
        <button class="tb-play" data-act="play" title="縮時播放一天">▶</button>
        <button class="tb-live" data-act="live" title="回到現在">現在</button>
      </div>
    </div>
    <div class="tb-track">
      <input class="tb-range" type="range" min="0" max="1439" step="5" aria-label="一天中的時間"/>
      <div class="tb-ticks">${Ib.map(([B,X])=>`<span style="left:${B/1439*100}%">${X}</span>`).join("")}</div>
    </div>
  </div>
  <div class="maplegend">
    <b>地圖怎麼看</b>
    <span><i class="arc"></i>光弧＝此刻的人流</span>
    <span><i class="dot" style="background:#ff6b5b"></i><i class="dot" style="background:#ffcf3f"></i><i class="dot" style="background:#a78bfa"></i><i class="dot" style="background:#38bdf8"></i>光點顏色＝怎麼找到店</span>
    <span>${i.map(B=>`<i class="dot" style="background:${B.dot}"></i>`).join("")}名牌圓點＝${i.map(B=>B.short).join("、")}</span>
  </div>
  <div class="toasts" aria-live="polite"></div>
  <div class="modal-root"></div>`;const s=_e(".panel",e),o=_e(".pb",e),r=_e(".ph-title",e),a=_e(".timebar",e),l=_e(".tb-range",e),c=_e(".toasts",e),f=_e(".modal-root",e),u=matchMedia("(max-width: 760px)"),h=()=>u.matches;let d="peek";function g(){document.body.classList.toggle("is-mobile",h()),h()?(a.parentElement!==s&&s.insertBefore(a,o),_(d,!1)):(a.parentElement!==e&&e.insertBefore(a,_e(".maplegend",e)),s.style.transform=""),requestAnimationFrame(m)}let x=!1;function m(){const B=h(),X=Math.max(_e(".topbar",e).getBoundingClientRect().bottom,B?_e(".dock",e).getBoundingClientRect().bottom:0)+4;let Q=0,w;B?w=Math.max(0,Math.min(innerHeight*.6,innerHeight-s.getBoundingClientRect().top)):(Q=s.classList.contains("folded")?0:s.getBoundingClientRect().right,w=Math.max(0,innerHeight-a.getBoundingClientRect().top)),(n.setInsets(Q,w,X)||!x)&&t.refit(!x),x=!0}u.addEventListener("change",g),window.addEventListener("resize",()=>requestAnimationFrame(m));function p(B){const X=s.offsetHeight,Q=B==="min"?148:B==="full"?X:Math.min(X,innerHeight*.44);return Math.max(0,X-Q)}function _(B,X=!0){d=B,s.classList.toggle("anim",X),s.style.transform=`translateY(${p(B)}px)`,s.dataset.sheet=B,setTimeout(m,X?320:0)}let y=null,v=!1;const C=_e(".grab",e),A=B=>{var X;h()&&(y={y:B.clientY,t0:p(d),moved:!1},s.classList.remove("anim"),(X=C.setPointerCapture)==null||X.call(C,B.pointerId))};C.addEventListener("pointerdown",A),_e(".ph",e).addEventListener("pointerdown",B=>{B.target.closest("button")||A(B)}),window.addEventListener("pointermove",B=>{if(!y)return;const X=B.clientY-y.y;Math.abs(X)>4&&(y.moved=!0);const Q=Math.max(0,Math.min(s.offsetHeight-120,y.t0+X));s.style.transform=`translateY(${Q}px)`}),window.addEventListener("pointerup",B=>{if(!y)return;const X=y;if(y=null,!X.moved)return;const Q=X.t0+(B.clientY-X.y),w=["full","peek","min"].map(S=>[S,Math.abs(p(S)-Q)]);w.sort((S,G)=>S[1]-G[1]),_(w[0][0]),v=!0,setTimeout(()=>v=!1,50)});let T=null;function R(B,{cls:X=""}={}){E();const Q=Ao(`<div class="modal ${X}"><div class="mbg"></div><div class="mcard" role="dialog" aria-modal="true"><button class="mx" aria-label="關閉">×</button>${B}</div></div>`);f.appendChild(Q),requestAnimationFrame(()=>Q.classList.add("in"));const w=()=>{(T==null?void 0:T.wrap)===Q&&(Q.classList.remove("in"),setTimeout(()=>Q.remove(),250),T=null)};return Q.querySelector(".mbg").addEventListener("click",w),Q.querySelector(".mx").addEventListener("click",w),T={wrap:Q,close:w},{el:Q.querySelector(".mcard"),close:w}}function E(){T==null||T.close()}async function M(){const{MAP_W:B,MAP_H:X,COUNTY_PATHS:Q,HSR_POINTS:w,TRA_POINTS:S,LABEL_XY:G}=await Wp(async()=>{const{MAP_W:gt,MAP_H:Xt,COUNTY_PATHS:lt,HSR_POINTS:yt,TRA_POINTS:zt,LABEL_XY:kt}=await import("./taiwan-map-Z7OpFbCl.js");return{MAP_W:gt,MAP_H:Xt,COUNTY_PATHS:lt,HSR_POINTS:yt,TRA_POINTS:zt,LABEL_XY:kt}},[]),J=Xe.region.id,st=gt=>Sa.find(Xt=>Xt.counties.includes(gt)),nt=Object.entries(Q).map(([gt,Xt])=>{var kt;const lt=st(gt),yt=(lt==null?void 0:lt.open)&&!((kt=lt.later)!=null&&kt.includes(gt)),zt=`tw-c r-${(lt==null?void 0:lt.id)||"none"}${yt?" open":""}${(lt==null?void 0:lt.id)===J?" here":""}`;return`<path d="${Xt}" class="${zt}"${yt&&lt.id!==J?` data-act="region:${lt.id}"`:""}><title>${Z(gt)}</title></path>`}).join(""),Pt=Sa.map(gt=>{const[Xt,lt]=G[gt.id];return`<g class="tw-l${gt.open?"":" soon"}${gt.id===J?" here":""}" transform="translate(${Xt} ${lt})"><text>${Z(gt.name)}</text>${gt.id===J?'<text class="me" y="22">● 你在這</text>':gt.open?`<text class="n" y="21">${gt.islands.length} 座島</text>`:'<text class="n" y="21">準備中</text>'}</g>`}).join(""),_t=Sa.map(gt=>{const Xt=gt.open?Z(gt.sub):`${Z(gt.tag)}・準備中`;return`<button class="rg-btn${gt.id===J?" here":""}" ${gt.open?`data-act="region:${gt.id}"`:"disabled"}><b>${Z(gt.name)}</b><small>${Xt}</small>${gt.id===J?"<em>你在這</em>":""}</button>`}).join("");R(`
      <div class="regions">
        <h2>換一區逛逛</h2>
        <div class="rg-body">
          <svg class="tw-map" viewBox="0 0 ${B} ${X}" role="img" aria-label="台灣分區地圖">
            ${nt}
            <polyline class="tw-tra" points="${S}" />
            <polyline class="tw-hsr" points="${w}" />
            ${Pt}
          </svg>
          <div class="rg-side">
            <div class="rg-list">${_t}</div>
            <p class="rg-lines"><span><i class="hsr"></i>高鐵</span><span><i class="tra"></i>台鐵</span>跨區航線（示意）</p>
            <p class="sub small">換區會直接換到那一區的總覽，重新讀取那一區的島和店家。澎湖、金門、馬祖等離島這次還沒收進來。</p>
          </div>
        </div>
      </div>`,{cls:"wide region-modal"})}function L(B,X=""){const Q=Ao(`<div class="toast ${X}">${Z(B)}</div>`);c.appendChild(Q),requestAnimationFrame(()=>Q.classList.add("in")),setTimeout(()=>{Q.classList.remove("in"),setTimeout(()=>Q.remove(),300)},2800)}function W(){const B=Ao('<div class="confetti"></div>'),X=["#ff6b4a","#ffcf3f","#34d399","#38bdf8","#f472b6","#a78bfa"];for(let Q=0;Q<46;Q++){const w=document.createElement("i");w.style.left=`${Math.random()*100}%`,w.style.background=X[Q%X.length],w.style.animationDelay=`${Math.random()*.4}s`,w.style.animationDuration=`${1.6+Math.random()*1.2}s`,w.style.setProperty("--r",`${(Math.random()-.5)*720}deg`),w.style.setProperty("--x",`${(Math.random()-.5)*160}px`),B.appendChild(w)}e.appendChild(B),setTimeout(()=>B.remove(),3200)}function V(B,X){const Q=Wo().size,w=Ao(`<div class="stampfx"><div class="stamp"><small>呷飽島</small><b>${Z(fe(B.island))}</b><span>已呷</span><em>${Qs(ni())}</em></div></div>`);e.appendChild(w),setTimeout(()=>w.classList.add("out"),1500),setTimeout(()=>w.remove(),2100),setTimeout(()=>L(X?`🏝 集到「${fe(B.island)}」島章！（${Q}/${Fe.length}）`:`📍 打卡成功：${B.name}`),600),X&&W()}let F=null;const Y={world:t,go:rn,openModal:R,toast:L,confetti:W,stampFx:V,mow:()=>ni(),rain:()=>pt.rain,onPick(B,X,Q={}){F={shop:B,via:X,oracle:!!Q.oracle}},checkin:(B,X)=>Wh(Y,B,X),presetVia:B=>(F==null?void 0:F.shop)===B?F.via:null,oracleFor:B=>!!((F==null?void 0:F.shop)===B&&F.oracle)},O={...Ph,...Nh("finder",{})};cs[O.from]||(O.from=Ph.from);let k=null;function I(B){const[X,Q]=B.dataset.q.split(":");X==="who"?O.who=Q:X==="budget"?O.budget=Q:X==="cat"?Q==="all"?O.cats=[]:O.cats=O.cats.includes(Q)?O.cats.filter(w=>w!==Q):[...O.cats,Q]:X==="from"?O.from=B.value:X==="avoidQueue"&&(O.avoidQueue=B.checked),zh("finder",{who:O.who,cats:O.cats,budget:O.budget,from:O.from,avoidQueue:O.avoidQueue}),X==="from"&&t.markIsland(O.from),tt()}let ut="";function K(){return{mow:ni(),minutes:Hr(),rain:pt.rain,slider:pt.slider,baseDay:pt.baseDay,flowMode:pt.flowMode,flowChannel:pt.flowChannel,mobile:h()}}function tt(){var J;const B=K();let X,Q=Ub[pt.view]||"";switch(pt.view){case"island":X=jM(pt.id,B),Q=`${fe(pt.id)}島`;break;case"event":X=KM(B);break;case"arc":X=wb(pt.id,B),Q=`${fe(pt.id)}篇`;break;case"shop":X=JM(pt.id,B),Q=((J=Re[pt.id])==null?void 0:J.name)||"";break;case"finder":k=ib(O,B),X=sb(B,O,k),t.setCustomFlows(ob(O,k));break;case"flows":X=eb(B);break;case"passport":X=Pb();break;default:X=xf(B)}const w=`${pt.view}|${pt.id}`,S=w===ut,G=o.scrollTop;o.innerHTML=X,o.scrollTop=S?G:0,ut=w,r.textContent=Q,Kt(B),s.dataset.view=pt.view,_e(".ph-back",e).hidden=pt.view==="overview",pt.view==="overview"&&xt(),_l(".dk",e).forEach(st=>st.classList.toggle("on",st.dataset.act===pt.view)),e.classList.toggle("show-legend",pt.view==="overview"||pt.view==="flows")}let Lt="";function Kt(B){const X=pt.view==="arc"?yb(pt.id,B):null,Q=X?`${pt.id}|${X.map(w=>w.key+w.state).join(",")}`:"";Q!==Lt&&(Lt=Q,t.setArcRoute(X?Sn[pt.id].island:null,X))}let j=null;function ot(){j||(j=setTimeout(()=>{j=null;const B=document.activeElement;B&&o.contains(B)&&(B.tagName==="SELECT"||B.tagName==="INPUT")||tt()},200))}const vt=[];for(let B=0;B<5;B++){const X=wh(ni());X&&vt.push(X)}function xt(B=null){const X=_e("#feed",o);if(X){if(B){const Q=Ao(Hh(B));if(!Q)return;for(Q.classList.add("new"),X.prepend(Q);X.children.length>6;)X.lastElementChild.remove();return}X.innerHTML=vt.slice(0,6).map(Hh).join("")}}setInterval(()=>{if(document.hidden)return;const B=wh(ni());B&&(vt.unshift(B),vt.length=Math.min(vt.length,12),pt.view==="overview"&&xt(B))},4200);let St=!1,Gt=0,Wt=null;function ae(){const B=Hr(),X=dp(B);_e(".ck-time",e).textContent=Ri(B),_e(".ck-day",e).textContent=`${Qs(ni()).slice(0,2)}${pt.live?"・現在":""}`,_e(".clock",e).classList.toggle("is-live",pt.live),_e(".tb-time",e).innerHTML=`<span class="tb-day">${Oo[pt.baseDay]}${pt.slider>=1080?"深夜":""} </span>${Ri(B)}`,_e(".tb-period",e).textContent=`${X.icon} ${X.name}`,Wt==null&&document.activeElement!==l&&(l.value=pt.slider),_l(".days button",e).forEach(Q=>Q.classList.toggle("on",Number(Q.dataset.day)===pt.baseDay)),_e(".tb-live",e).classList.toggle("on",pt.live),_e(".tb-play",e).classList.toggle("on",St),_e(".tb-play",e).textContent=St?"❚❚":"▶",_e(".wx-ic",e).textContent=pt.rain?"🌧":"☀️",_e(".wx-tx",e).textContent=pt.rain?"下雨":"晴天",document.body.classList.toggle("night",B>=1110||B<330)}l.addEventListener("input",()=>{Jt(),Wt=Number(l.value)});function Jt(){St&&(St=!1,ae())}function he(B,X){var S,G;const[Q,w]=B.split(":");switch(Q){case"home":rn("overview");break;case"regions":M();break;case"region":w===Xe.region.id?E():Gp(w);break;case"back":Ef();break;case"fold":s.classList.toggle("folded"),document.body.classList.toggle("panel-folded",s.classList.contains("folded")),setTimeout(m,320);break;case"sheet":if(v)break;_(d==="full"?"min":d==="min"?"peek":"full");break;case"live":Jt(),yi({live:!0}),L("回到台北現在時間");break;case"cond":nb(),tt();break;case"dinner":Jt(),yi({live:!1,slider:750}),L("🍲 時間撥到 18:30 晚餐時段");break;case"rain":Vp(!pt.rain),L(pt.rain?"☔ 下雨了：騎樓、室內的店會往前排":"☀️ 雨停了");break;case"play":St=!St,Gt=0,St&&L("⏩ 縮時播放：看一天的島怎麼醒來、熱鬧、打烊"),ae();break;case"day":Jt(),yi({baseDay:Number(w),live:!1});break;case"finder":{const J=pt.view==="shop"?(S=Re[pt.shopId])==null?void 0:S.island:pt.view==="island"?pt.id:null;J&&(O.from=J),rn("finder"),t.markIsland(O.from);break}case"dice":ub(Y);break;case"poe":{const J=pt.view==="shop"?[pt.shopId]:sp(ni(),6).map(st=>st.shop.id).sort(()=>Math.random()-.5).slice(0,3);El(Y,J.length?J:[Re[Object.keys(Re)[0]].id]);break}case"poe-shop":El(Y,[pt.shopId]);break;case"poe-top":k!=null&&k.list.length&&El(Y,k.list.slice(0,3).map(J=>J.shop.id));break;case"flows":rn("flows");break;case"passport":rn("passport");break;case"checkin":Wh(Y,pt.shopId);break;case"share":mb(Y,pt.shopId);break;case"crew":xb(Y,pt.shopId);break;case"flowmode":pt.flowMode=w,Qi("flows"),tt();break;case"arc-ep":Ab(Y,pt.id,w);break;case"arc-reset":Cb(Y,pt.id);break;case"arc-card":Sn[pt.id]&&Pp(Y,Sn[pt.id],{celebrate:!1});break;case"pl-kind":Co(pt.id,{kind:w}),tt();break;case"pl-cat":{const J={cat:w};(G=_e(`[data-act="pl-cat:${w}"]`,e))!=null&&G.classList.contains("on")&&(J.cat=""),Co(pt.id,J),tt();break}case"pl-open":Co(pt.id,{open:!X.classList.contains("on")}),tt();break;case"pl-more":Co(pt.id,{shown:_l(".pl",e).length+20}),tt();break;case"undo-checkin":AM(),L("已刪除最後一筆打卡");break}}e.addEventListener("click",B=>{const X=B.target.closest("[data-go],[data-act],[data-ch],[data-q]");if(!(!X||!e.contains(X)||X.tagName==="SELECT"||X.tagName==="INPUT"))if(X.dataset.go){const[Q,w]=X.dataset.go.split(":");rn(Q,w)}else X.dataset.ch?(pt.flowChannel=pt.flowChannel===X.dataset.ch?null:X.dataset.ch,t.flows.setChannel(pt.flowChannel),tt(),pt.flowChannel&&L(`只看「${X.textContent.replace(/\d+%$/,"").trim()}」的光點`)):X.dataset.q?I(X):X.dataset.act&&he(X.dataset.act,X)}),e.addEventListener("change",B=>{const X=B.target.closest("[data-q]");X&&I(X)}),e.addEventListener("input",B=>{const X=B.target.closest("[data-pl-q]");!X||pt.view!=="island"||(Co(pt.id,{q:X.value}),_e(".pl-body",e).innerHTML=_p(pt.id,K()))}),window.addEventListener("keydown",B=>{B.key==="Escape"&&(T?E():pt.view!=="overview"&&Ef())}),Wi("nav",({view:B})=>{E(),tt(),h()?_(B==="passport"?"full":"peek"):s.classList.contains("folded")&&B!=="overview"&&he("fold"),$t()}),Wi("arc-pin",B=>{const X=_e(`#ep-${B}`,o);X&&(h()&&_("full"),X.scrollIntoView({behavior:"smooth",block:"start"}),X.classList.remove("flash"),X.offsetWidth,X.classList.add("flash"))}),Wi("time",()=>{ae(),ot()}),Wi("passport",()=>{const B=Go().checkins.length,X=_e(".dk-n",e);X.hidden=!B,X.textContent=B,t.setTrail(Go().checkins.slice(-14).map(Q=>Q.shop)),tt()});const $=Xe.region.id===Zh;function $t(){const B=pt.view,X=Xe.region.id,Q=B==="shop"||B==="island"||B==="arc"?`#${B}-${pt.id}`:B==="event"?$?"#event":`#event-${X}`:$?"":`#region-${X}`;location.hash!==Q&&history.replaceState(null,"",Q||location.pathname+location.search)}function Dt(){const B=/^#(shop|island|arc|vote|event|region)(?:[-=](.*))?$/.exec(location.hash);if(!B)return!1;const[,X,Q=""]=B;if(X==="shop"&&Re[Q])rn("shop",Q);else if(X==="island"&&Q)rn("island",Q);else if(X==="arc"&&Sn[Q])rn("arc",Q);else if(X==="event")rn("event","event");else{if(X==="region")return!1;if(X==="vote")vb(Y,Q.split(/[.,]/).filter(Boolean));else return!1}return!0}function Bt(){var G;if(Dt()||Nh("seenIntro",!1))return;const X=Hr(),Q=X>=120&&X<360,{el:w,close:S}=R(`
      <div class="intro">
        <p class="kicker">${oi.sub}</p>
        <h2>歡迎上島，${oi.slogan}！</h2>
        <ul>
          <li><span>🏝</span><p><b>一座島＝一個生活圈</b>點島就飛過去，看島上 6 家店現在有沒有開、人多不多。</p></li>
          <li><span>🧭</span><p><b>光弧是大家此刻的足跡</b>從住的島出發去吃東西；光點顏色是「怎麼找到這家店」的。</p></li>
          <li><span>🎯</span><p><b>不知道吃什麼？</b>「幫我挑」把理由攤開給你看；也可以擲骰、擲筊交給天意。</p></li>
          <li><span>⏰</span><p><b>拉下面的時間軸</b>看島從早餐、午餐一路熱鬧到宵夜；按 ▶ 縮時播放一整天。</p></li>
        </ul>
        ${Q?'<p class="sub">現在是半夜，大部分的店都打烊了，可以把時間拉到晚餐時段看看最熱鬧的樣子。</p>':""}
        <div class="cta-row center">
          <button class="btn primary big" data-start>開始逛 →</button>
          ${Q?'<button class="btn big" data-dinner>直接看晚餐時段</button>':""}
        </div>
        <p class="sub small">原型示範：店家、留言與數字皆為虛構。</p>
      </div>`,{cls:"wide intro-modal"});w.querySelector("[data-start]").addEventListener("click",S),(G=w.querySelector("[data-dinner]"))==null||G.addEventListener("click",()=>{yi({live:!1,slider:750}),S()}),zh("seenIntro",!0)}return g(),ae(),tt(),Qi("passport",null),{intro:Bt,update(B){if(Wt!=null&&(yi({live:!1,slider:Wt}),Wt=null),St&&(Gt+=B,Gt>=.125)){const X=Math.max(1,Math.round(Gt*32));Gt=0;let Q=pt.slider+X,w=pt.baseDay;Q>1439&&(Q-=1440,w=(w+1)%7),yi({live:!1,slider:Q,baseDay:w})}}}}async function Fb({loader:n,bar:t,msg:e,mobile:i}){yi({live:!0});const s=J1(document.getElementById("stage"),{mobile:i}),o=await yM(s,{mobile:i,onProgress(f,u){t.style.width=`${Math.round(f*100)}%`,e.textContent=f<1?`正在蓋：${u}`:"開店囉！"}}),r=Nb({stage:s,world:o}),a=new I1;let l=0;function c(f){var u;l+=f,(u=r.update)==null||u.call(r,f),s.update(f),o.update(f,l),s.render()}s.renderer.setAnimationLoop(()=>c(Math.min(a.getDelta(),.1))),setInterval(()=>{pt.live&&!document.hidden&&yi({})},3e4),requestAnimationFrame(()=>{var f;n.classList.add("done"),setTimeout(()=>n.remove(),900),(f=r.intro)==null||f.call(r)})}export{Fb as boot};
