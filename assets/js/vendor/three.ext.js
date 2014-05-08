// three.js - http://github.com/mrdoob/three.js
'use strict';var THREE={REVISION:"66"};self.console=self.console||{info:function(){},log:function(){},debug:function(){},warn:function(){},error:function(){}};
(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!self.requestAnimationFrame;++c)self.requestAnimationFrame=self[b[c]+"RequestAnimationFrame"],self.cancelAnimationFrame=self[b[c]+"CancelAnimationFrame"]||self[b[c]+"CancelRequestAnimationFrame"];void 0===self.requestAnimationFrame&&void 0!==self.setTimeout&&(self.requestAnimationFrame=function(b){var c=Date.now(),f=Math.max(0,16-(c-a)),g=self.setTimeout(function(){b(c+f)},f);a=c+f;return g});void 0===self.cancelAnimationFrame&&void 0!==
self.clearTimeout&&(self.cancelAnimationFrame=function(a){self.clearTimeout(a)})})();THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;
THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;
THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;
THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;
THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};b=0.5>=c?c*(1+b):c+b-c*b;c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<
8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=0.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,
b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;
this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(){return[this.r,this.g,this.b]},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,_euler:void 0,_updateEuler:function(a){void 0!==this._euler&&this._euler.setFromQuaternion(this,void 0,!1)},get x(){return this._x},set x(a){this._x=a;this._updateEuler()},get y(){return this._y},set y(a){this._y=a;this._updateEuler()},get z(){return this._z},set z(a){this._z=a;this._updateEuler()},get w(){return this._w},set w(a){this._w=a;this._updateEuler()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=
d;this._updateEuler();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._w=a._w;this._updateEuler();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*
g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,
this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);!1!==b&&this._updateEuler();return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this._updateEuler();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],l=c+f+b;0<l?(c=0.5/Math.sqrt(l+1),this._w=0.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=
0.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=0.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=0.25*c);this._updateEuler();return this},inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this._updateEuler();return this},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*
this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);return this},multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=
a._w,g=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+f*g+d*k-e*h;this._y=d*l+f*h+e*g-c*k;this._z=e*l+f*k+c*h-d*g;this._w=f*l-c*g-d*h-e*k;this._updateEuler();return this},multiplyVector3:function(a){console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)},slerp:function(a,b){var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=
-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),k=Math.sqrt(1-g*g);if(0.001>Math.abs(k))return this._w=0.5*(f+this._w),this._x=0.5*(c+this._x),this._y=0.5*(d+this._y),this._z=0.5*(e+this._z),this;g=Math.sin((1-b)*h)/k;h=Math.sin(b*h)/k;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this._updateEuler();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},
fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];this._w=a[3];this._updateEuler();return this},toArray:function(){return[this._x,this._y,this._z,this._w]},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=
a.y;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);
return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?
Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=
this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a){this.x=a[0];this.y=a[1];return this},toArray:function(){return[this.x,this.y]},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*
b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&console.error("ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),
applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=
(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,l=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-l*-f;this.y=k*a+b*-f+l*-e-h*-g;this.z=l*a+b*-g+h*-f-k*-e;return this},transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},
divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<
a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);
return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=
d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;
return function(b){void 0===a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){console.error("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.")},
setEulerFromQuaternion:function(a,b){console.error("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.")},getPositionFromMatrix:function(a){console.warn("DEPRECATED: Vector3's .getPositionFromMatrix() has been renamed to .setFromMatrixPosition(). Please update your code.");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("DEPRECATED: Vector3's .getScaleFromMatrix() has been renamed to .setFromMatrixScale(). Please update your code.");
return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("DEPRECATED: Vector3's .getColumnFromMatrix() has been renamed to .setFromMatrixColumn(). Please update your code.");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();
a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];return this},toArray:function(){return[this.x,this.y,this.z]},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},
applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,
this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(0.01>Math.abs(d-g)&&0.01>Math.abs(f-c)&&0.01>Math.abs(k-b)){if(0.1>Math.abs(d+g)&&0.1>Math.abs(f+c)&&0.1>Math.abs(k+b)&&0.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>l?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>l?0.01>
h?(b=0.707106781,c=0,d=0.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):0.01>l?(c=b=0.707106781,d=0):(d=Math.sqrt(l),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));0.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+l-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=
a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=
Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):
Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];this.w=a[3];return this},toArray:function(){return[this.x,this.y,this.z,this.w]},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,
this.w)}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,_quaternion:void 0,_updateQuaternion:function(){void 0!==this._quaternion&&this._quaternion.setFromEuler(this,!1)},get x(){return this._x},set x(a){this._x=a;this._updateQuaternion()},get y(){return this._y},set y(a){this._y=a;this._updateQuaternion()},get z(){return this._z},set z(a){this._z=a;this._updateQuaternion()},get order(){return this._order},set order(a){this._order=a;this._updateQuaternion()},
set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._updateQuaternion();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._updateQuaternion();return this},setFromRotationMatrix:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.elements,e=d[0],f=d[4],g=d[8],h=d[1],k=d[5],l=d[9],n=d[2],q=d[6],d=d[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(c(g)),0.99999>Math.abs(g)?(this._x=Math.atan2(-l,d),this._z=
Math.atan2(-f,e)):(this._x=Math.atan2(q,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-c(l)),0.99999>Math.abs(l)?(this._y=Math.atan2(g,d),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-n,e),this._z=0)):"ZXY"===b?(this._x=Math.asin(c(q)),0.99999>Math.abs(q)?(this._y=Math.atan2(-n,d),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,e))):"ZYX"===b?(this._y=Math.asin(-c(n)),0.99999>Math.abs(n)?(this._x=Math.atan2(q,d),this._z=Math.atan2(h,e)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=
Math.asin(c(h)),0.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-n,e)):(this._x=0,this._y=Math.atan2(g,d))):"XZY"===b?(this._z=Math.asin(-c(f)),0.99999>Math.abs(f)?(this._x=Math.atan2(q,k),this._y=Math.atan2(g,e)):(this._x=Math.atan2(-l,d),this._y=0)):console.warn("WARNING: Euler.setFromRotationMatrix() given unsupported order: "+b);this._order=b;this._updateQuaternion();return this},setFromQuaternion:function(a,b,c){function d(a){return Math.min(Math.max(a,-1),1)}var e=a.x*a.x,f=
a.y*a.y,g=a.z*a.z,h=a.w*a.w;b=b||this._order;"XYZ"===b?(this._x=Math.atan2(2*(a.x*a.w-a.y*a.z),h-e-f+g),this._y=Math.asin(d(2*(a.x*a.z+a.y*a.w))),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),h+e-f-g)):"YXZ"===b?(this._x=Math.asin(d(2*(a.x*a.w-a.y*a.z))),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h-e-f+g),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h-e+f-g)):"ZXY"===b?(this._x=Math.asin(d(2*(a.x*a.w+a.y*a.z))),this._y=Math.atan2(2*(a.y*a.w-a.z*a.x),h-e-f+g),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),h-e+f-g)):"ZYX"===
b?(this._x=Math.atan2(2*(a.x*a.w+a.z*a.y),h-e-f+g),this._y=Math.asin(d(2*(a.y*a.w-a.x*a.z))),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h+e-f-g)):"YZX"===b?(this._x=Math.atan2(2*(a.x*a.w-a.z*a.y),h-e+f-g),this._y=Math.atan2(2*(a.y*a.w-a.x*a.z),h+e-f-g),this._z=Math.asin(d(2*(a.x*a.y+a.z*a.w)))):"XZY"===b?(this._x=Math.atan2(2*(a.x*a.w+a.y*a.z),h-e+f-g),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h+e-f-g),this._z=Math.asin(d(2*(a.z*a.w-a.x*a.y)))):console.warn("WARNING: Euler.setFromQuaternion() given unsupported order: "+
b);this._order=b;!1!==c&&this._updateQuaternion();return this},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._updateQuaternion();return this},toArray:function(){return[this._x,this._y,this._z,this._order]},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},clone:function(){return new THREE.Euler(this._x,
this._y,this._z,this._order)}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(0.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var c=1,d=a.length;c<d;c++)b=a[c],b.x<this.min.x?this.min.x=b.x:b.x>this.max.x&&(this.max.x=b.x),b.y<this.min.y?this.min.y=b.y:b.y>this.max.y&&(this.max.y=b.y)}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);
this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);
this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),
(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);
return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},addPoint:function(a){a.x<this.min.x?this.min.x=a.x:a.x>this.max.x&&(this.max.x=a.x);a.y<this.min.y?this.min.y=a.y:a.y>this.max.y&&(this.max.y=a.y);a.z<this.min.z?this.min.z=a.z:a.z>this.max.z&&(this.max.z=a.z)},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var b=1,c=a.length;b<c;b++)this.addPoint(a[b])}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=
new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);this.makeEmpty();b.traverse(function(b){if(void 0!==b.geometry&&void 0!==b.geometry.vertices)for(var e=b.geometry.vertices,f=0,g=e.length;f<g;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);
this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=0.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};THREE.Matrix3=function(a,b,c,d,e,f,g,h,k){this.elements=new Float32Array(9);this.set(void 0!==a?a:1,b||0,c||0,d||0,void 0!==e?e:1,f||0,g||0,h||0,void 0!==k?k:1)};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=f;l[2]=g;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,
b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/
c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],
a[6],a[7],a[8]]},clone:function(){var a=this.elements;return new THREE.Matrix3(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8])}};THREE.Matrix4=function(a,b,c,d,e,f,g,h,k,l,n,q,s,u,t,p){var v=this.elements=new Float32Array(16);v[0]=void 0!==a?a:1;v[4]=b||0;v[8]=c||0;v[12]=d||0;v[1]=e||0;v[5]=void 0!==f?f:1;v[9]=g||0;v[13]=h||0;v[2]=k||0;v[6]=l||0;v[10]=void 0!==n?n:1;v[14]=q||0;v[3]=s||0;v[7]=u||0;v[11]=t||0;v[15]=void 0!==p?p:1};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,k,l,n,q,s,u,t,p){var v=this.elements;v[0]=a;v[4]=b;v[8]=c;v[12]=d;v[1]=e;v[5]=f;v[9]=g;v[13]=h;v[2]=k;v[6]=l;v[10]=n;v[14]=q;v[3]=s;v[7]=u;v[11]=t;v[15]=p;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements;b=b.elements;var d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===
a instanceof THREE.Euler&&console.error("ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,l=c*h,n=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+l*d;b[5]=a-n*d;b[9]=-c*g;b[2]=n-a*d;b[6]=l+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,l=d*h,n=d*e,b[0]=a+n*c,b[4]=l*c-k,b[8]=
f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-l,b[6]=n+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,l=d*h,n=d*e,b[0]=a-n*c,b[4]=-f*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=f*h,b[9]=n-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,l=c*h,n=c*e,b[0]=g*h,b[4]=l*d-k,b[8]=a*d+n,b[1]=g*e,b[5]=n*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,l=c*g,n=c*d,b[0]=g*h,b[4]=n-a*e,b[8]=l*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-n*e):"XZY"===a.order&&(a=f*g,k=f*d,l=c*g,n=c*d,b[0]=
g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+n,b[5]=f*h,b[9]=k*e-l,b[2]=l*e-k,b[6]=c*h,b[10]=n*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.");return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var l=c*
h,c=c*k,n=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(n+e);b[4]=l-f;b[8]=c+h;b[1]=l+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+n);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=
a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],k=c[12],l=c[1],n=c[5],q=c[9],s=c[13],u=c[2],t=c[6],p=c[10],v=c[14],w=c[3],r=c[7],x=c[11],
c=c[15],z=d[0],F=d[4],P=d[8],C=d[12],B=d[1],A=d[5],I=d[9],H=d[13],N=d[2],y=d[6],K=d[10],D=d[14],E=d[3],G=d[7],T=d[11],d=d[15];e[0]=f*z+g*B+h*N+k*E;e[4]=f*F+g*A+h*y+k*G;e[8]=f*P+g*I+h*K+k*T;e[12]=f*C+g*H+h*D+k*d;e[1]=l*z+n*B+q*N+s*E;e[5]=l*F+n*A+q*y+s*G;e[9]=l*P+n*I+q*K+s*T;e[13]=l*C+n*H+q*D+s*d;e[2]=u*z+t*B+p*N+v*E;e[6]=u*F+t*A+p*y+v*G;e[10]=u*P+t*I+p*K+v*T;e[14]=u*C+t*H+p*D+v*d;e[3]=w*z+r*B+x*N+c*E;e[7]=w*F+r*A+x*y+c*G;e[11]=w*P+r*I+x*K+c*T;e[15]=w*C+r*H+x*D+c*d;return this},multiplyToArray:function(a,
b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)},multiplyVector4:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyProjection(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
a.transformDirection(this)},crossVector:function(a){console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],l=a[2],n=a[6],q=a[10],s=a[14];return a[3]*(+e*h*n-d*k*n-e*g*q+c*k*q+d*g*s-c*h*s)+a[7]*(+b*h*s-b*k*q+e*f*q-d*f*s+d*k*l-e*h*l)+a[11]*(+b*k*n-b*g*s-e*f*n+c*f*s+e*g*l-c*k*l)+a[15]*(-d*g*l-b*h*n+b*g*q+d*f*n-c*f*
q+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a},flattenToArrayOffset:function(a,b){var c=this.elements;
a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;
b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],k=d[1],l=d[5],n=d[9],q=d[13],s=d[2],u=d[6],t=d[10],p=d[14],v=d[3],w=d[7],r=d[11],d=d[15];c[0]=n*p*w-q*t*w+q*u*r-l*p*r-n*u*d+l*t*d;c[4]=h*t*w-g*p*w-h*u*r+f*p*r+g*u*d-f*t*d;c[8]=g*q*w-h*n*w+h*l*r-f*q*r-g*l*d+f*n*d;c[12]=h*n*u-g*q*u-h*l*t+f*q*t+g*l*p-f*n*p;c[1]=q*t*v-n*p*v-q*s*r+k*p*r+n*s*d-k*t*d;c[5]=g*p*v-h*t*v+h*s*r-e*p*r-g*s*d+e*t*d;c[9]=h*n*v-g*q*v-h*k*r+e*q*r+g*k*d-
e*n*d;c[13]=g*q*s-h*n*s+h*k*t-e*q*t-g*k*p+e*n*p;c[2]=l*p*v-q*u*v+q*s*w-k*p*w-l*s*d+k*u*d;c[6]=h*u*v-f*p*v-h*s*w+e*p*w+f*s*d-e*u*d;c[10]=f*q*v-h*l*v+h*k*w-e*q*w-f*k*d+e*l*d;c[14]=h*l*s-f*q*s-h*k*u+e*q*u+f*k*p-e*l*p;c[3]=n*u*v-l*t*v-n*s*w+k*t*w+l*s*r-k*u*r;c[7]=f*t*v-g*u*v+g*s*w-e*t*w-f*s*r+e*u*r;c[11]=g*l*v-f*n*v-g*k*w+e*n*w+f*k*r-e*l*r;c[15]=f*n*s-g*l*s+g*k*u-e*n*u-f*k*t+e*l*t;c=e*c[0]+k*c[4]+s*c[8]+v*c[12];if(0==c){if(b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){console.warn("DEPRECATED: Matrix4's .translate() has been removed.")},rotateX:function(a){console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.")},rotateY:function(a){console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.")},rotateZ:function(a){console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.")},rotateByAxis:function(a,b){console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")},
scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,
0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,l=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+d*h,l*g+c,l*h-d*f,0,k*h-d*g,l*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,
0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,l=1/k;b.elements[0]*=c;b.elements[1]*=
c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(0.5*a));
var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,k=c-d,l=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/k;g[9]=0;g[13]=-((c+d)/k);g[2]=0;g[6]=0;g[10]=-2/l;g[14]=-((f+e)/l);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){var a=
this.elements;return new THREE.Matrix4(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(a,b,c,d){var e=a.clone().add(b).multiplyScalar(0.5),f=b.clone().sub(a).normalize(),g=0.5*a.distanceTo(b),
h=this.origin.clone().sub(e);a=-this.direction.dot(f);b=h.dot(this.direction);var k=-h.dot(f),l=h.lengthSq(),n=Math.abs(1-a*a),q,s;0<=n?(h=a*k-b,q=a*b-k,s=g*n,0<=h?q>=-s?q<=s?(g=1/n,h*=g,q*=g,a=h*(h+a*q+2*b)+q*(a*h+q+2*k)+l):(q=g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l):(q=-g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l):q<=-s?(h=Math.max(0,-(-a*g+b)),q=0<h?-g:Math.min(Math.max(-g,-k),g),a=-h*h+q*(q+2*k)+l):q<=s?(h=0,q=Math.min(Math.max(-g,-k),g),a=q*(q+2*k)+l):(h=Math.max(0,-(a*g+b)),q=0<h?g:Math.min(Math.max(-g,
-k),g),a=-h*h+q*(q+2*k)+l)):(q=0<a?-g:g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l);c&&c.copy(this.direction.clone().multiplyScalar(h).add(this.origin));d&&d.copy(f.clone().multiplyScalar(q).add(e));return a},isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?
0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=
a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<
f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},
clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],l=c[7],n=c[8],q=c[9],s=c[10],u=c[11],t=c[12],p=c[13],v=c[14],c=c[15];b[0].setComponents(f-a,l-g,u-n,c-t).normalize();b[1].setComponents(f+
a,l+g,u+n,c+t).normalize();b[2].setComponents(f+d,l+h,u+q,c+p).normalize();b[3].setComponents(f-d,l-h,u-q,c-p).normalize();b[4].setComponents(f-e,l-k,u-s,c-v).normalize();b[5].setComponents(f+e,l+k,u+s,c+v).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,
c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),
containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};THREE.Math={PI2:2*Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0},degToRad:function(){var a=Math.PI/
180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a}};THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,n,q,s;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;l=this.points[c[0]];n=this.points[c[1]];q=this.points[c[2]];s=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,n.x,q.x,s.x,g,h,k);d.y=b(l.y,n.y,q.y,s.y,g,h,k);d.z=b(l.z,n.z,q.z,s.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3,l=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=l.chunks[b]-l.chunks[b-1];g=Math.ceil(a*c/l.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());
h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0==l)return h.set(-2,-1,-1);l=1/l;k=(k*f-e*g)*l;d=(d*g-e*f)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return 0.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Vertex=function(a){console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");return a};THREE.UV=function(a,b){console.warn("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.");return new THREE.Vector2(a,b)};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(){var a=[];return function(b){if(void 0!==this._listeners){var c=this._listeners[b.type];if(void 0!==c){b.target=this;for(var d=c.length,e=0;e<d;e++)a[e]=c[e];for(e=0;e<d;e++)a[e].call(this,
b)}}}}()};(function(a){a.Raycaster=function(b,c,d,e){this.ray=new a.Ray(b,c);this.near=d||0;this.far=e||Infinity};var b=new a.Sphere,c=new a.Ray;new a.Plane;new a.Vector3;var d=new a.Vector3,e=new a.Matrix4,f=function(a,b){return a.distance-b.distance},g=new a.Vector3,h=new a.Vector3,k=new a.Vector3,l=function(f,n,u){if(f instanceof a.Sprite){d.setFromMatrixPosition(f.matrixWorld);var t=n.ray.distanceToPoint(d);if(t>f.scale.x)return u;u.push({distance:t,point:f.position,face:null,object:f})}else if(f instanceof
a.LOD)d.setFromMatrixPosition(f.matrixWorld),t=n.ray.origin.distanceTo(d),l(f.getObjectForDistance(t),n,u);else if(f instanceof a.Mesh){var p=f.geometry;null===p.boundingSphere&&p.computeBoundingSphere();b.copy(p.boundingSphere);b.applyMatrix4(f.matrixWorld);if(!1===n.ray.isIntersectionSphere(b))return u;e.getInverse(f.matrixWorld);c.copy(n.ray).applyMatrix4(e);if(null!==p.boundingBox&&!1===c.isIntersectionBox(p.boundingBox))return u;if(p instanceof a.BufferGeometry){var v=f.material;if(void 0===
v)return u;var w=p.attributes,r,x,z=n.precision;if(void 0!==w.index)for(var F=p.offsets,P=w.index.array,C=w.position.array,B=0,A=F.length;B<A;++B)for(var w=F[B].start,I=F[B].index,p=w,H=w+F[B].count;p<H;p+=3){w=I+P[p];r=I+P[p+1];x=I+P[p+2];g.set(C[3*w],C[3*w+1],C[3*w+2]);h.set(C[3*r],C[3*r+1],C[3*r+2]);k.set(C[3*x],C[3*x+1],C[3*x+2]);var N=v.side===a.BackSide?c.intersectTriangle(k,h,g,!0):c.intersectTriangle(g,h,k,v.side!==a.DoubleSide);null!==N&&(N.applyMatrix4(f.matrixWorld),t=n.ray.origin.distanceTo(N),
t<z||t<n.near||t>n.far||u.push({distance:t,point:N,indices:[w,r,x],face:null,faceIndex:null,object:f}))}else for(C=w.position.array,p=0,H=w.position.array.length;p<H;p+=3)w=p,r=p+1,x=p+2,g.set(C[3*w],C[3*w+1],C[3*w+2]),h.set(C[3*r],C[3*r+1],C[3*r+2]),k.set(C[3*x],C[3*x+1],C[3*x+2]),N=v.side===a.BackSide?c.intersectTriangle(k,h,g,!0):c.intersectTriangle(g,h,k,v.side!==a.DoubleSide),null!==N&&(N.applyMatrix4(f.matrixWorld),t=n.ray.origin.distanceTo(N),t<z||t<n.near||t>n.far||u.push({distance:t,point:N,
indices:[w,r,x],face:null,faceIndex:null,object:f}))}else if(p instanceof a.Geometry)for(P=f.material instanceof a.MeshFaceMaterial,C=!0===P?f.material.materials:null,z=n.precision,F=p.vertices,B=0,A=p.faces.length;B<A;B++)if(I=p.faces[B],v=!0===P?C[I.materialIndex]:f.material,void 0!==v){w=F[I.a];r=F[I.b];x=F[I.c];if(!0===v.morphTargets){t=p.morphTargets;N=f.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);k.set(0,0,0);for(var H=0,y=t.length;H<y;H++){var K=N[H];if(0!==K){var D=t[H].vertices;g.x+=
(D[I.a].x-w.x)*K;g.y+=(D[I.a].y-w.y)*K;g.z+=(D[I.a].z-w.z)*K;h.x+=(D[I.b].x-r.x)*K;h.y+=(D[I.b].y-r.y)*K;h.z+=(D[I.b].z-r.z)*K;k.x+=(D[I.c].x-x.x)*K;k.y+=(D[I.c].y-x.y)*K;k.z+=(D[I.c].z-x.z)*K}}g.add(w);h.add(r);k.add(x);w=g;r=h;x=k}N=v.side===a.BackSide?c.intersectTriangle(x,r,w,!0):c.intersectTriangle(w,r,x,v.side!==a.DoubleSide);null!==N&&(N.applyMatrix4(f.matrixWorld),t=n.ray.origin.distanceTo(N),t<z||t<n.near||t>n.far||u.push({distance:t,point:N,face:I,faceIndex:B,object:f}))}}else if(f instanceof
a.Line){z=n.linePrecision;v=z*z;p=f.geometry;null===p.boundingSphere&&p.computeBoundingSphere();b.copy(p.boundingSphere);b.applyMatrix4(f.matrixWorld);if(!1===n.ray.isIntersectionSphere(b))return u;e.getInverse(f.matrixWorld);c.copy(n.ray).applyMatrix4(e);if(p instanceof a.Geometry)for(F=p.vertices,z=F.length,w=new a.Vector3,r=new a.Vector3,x=f.type===a.LineStrip?1:2,p=0;p<z-1;p+=x)c.distanceSqToSegment(F[p],F[p+1],r,w)>v||(t=c.origin.distanceTo(r),t<n.near||t>n.far||u.push({distance:t,point:w.clone().applyMatrix4(f.matrixWorld),
face:null,faceIndex:null,object:f}))}},n=function(a,b,c){a=a.getDescendants();for(var d=0,e=a.length;d<e;d++)l(a[d],b,c)};a.Raycaster.prototype.precision=1E-4;a.Raycaster.prototype.linePrecision=1;a.Raycaster.prototype.set=function(a,b){this.ray.set(a,b)};a.Raycaster.prototype.intersectObject=function(a,b){var c=[];!0===b&&n(a,this,c);l(a,this,c);c.sort(f);return c};a.Raycaster.prototype.intersectObjects=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)l(a[d],this,c),!0===b&&n(a[d],this,c);c.sort(f);
return c}})(THREE);THREE.Object3D=function(){this.id=THREE.Object3DIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this._rotation=new THREE.Euler;this._quaternion=new THREE.Quaternion;this.scale=new THREE.Vector3(1,1,1);this._rotation._quaternion=this.quaternion;this._quaternion._euler=this.rotation;this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;
this.visible=this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.userData={}};
THREE.Object3D.prototype={constructor:THREE.Object3D,get rotation(){return this._rotation},set rotation(a){this._rotation=a;this._rotation._quaternion=this._quaternion;this._quaternion._euler=this._rotation;this._rotation._updateQuaternion()},get quaternion(){return this._quaternion},set quaternion(a){this._quaternion=a;this._quaternion._euler=this._rotation;this._rotation._quaternion=this._quaternion;this._quaternion._updateEuler()},get eulerOrder(){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");
return this.rotation.order},set eulerOrder(a){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);
this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=
new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b);a.applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translate:function(a,b){console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.");
return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),
lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(a===this)console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");else if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;a.dispatchEvent({type:"added"});this.children.push(a);for(var b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}},remove:function(a){var b=
this.children.indexOf(a);if(-1!==b){a.parent=void 0;a.dispatchEvent({type:"removed"});this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},getObjectById:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.id===a||!0===b&&(e=e.getObjectById(a,b),void 0!==e))return e}},getObjectByName:function(a,
b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getObjectByName(a,b),void 0!==e))return e}},getChildByName:function(a,b){console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a,b)},getDescendants:function(a){void 0===a&&(a=[]);Array.prototype.push.apply(a,this.children);for(var b=0,c=this.children.length;b<c;b++)this.children[b].getDescendants(a);return a},updateMatrix:function(){this.matrix.compose(this.position,
this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);
a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));
if(!0===b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;THREE.Projector=function(){function a(){if(n===s){var a=new THREE.RenderableVertex;q.push(a);s++;n++;return a}return q[n++]}function b(){if(t===v){var a=new THREE.RenderableFace;p.push(a);v++;t++;return a}return p[t++]}function c(){if(r===z){var a=new THREE.RenderableLine;x.push(a);z++;r++;return a}return x[r++]}function d(a,b){return a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function e(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;if(0<=e&&0<=f&&0<=g&&0<=h)return!0;if(0>e&&0>f||0>g&&
0>h)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h)));if(d<c)return!1;a.lerp(b,c);b.lerp(a,1-d);return!0}var f,g,h=[],k=0,l,n,q=[],s=0,u,t,p=[],v=0,w,r,x=[],z=0,F,P,C=[],B=0,A={objects:[],lights:[],elements:[]},I=new THREE.Vector3,H=new THREE.Vector3,N=new THREE.Vector3,y=new THREE.Vector3,K=new THREE.Vector4,D=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),E=new THREE.Box3,G=Array(3),T=new THREE.Matrix4,Y=
new THREE.Matrix4,V,ja=new THREE.Matrix4,R=new THREE.Matrix3,pa=new THREE.Frustum,L=new THREE.Vector4,ka=new THREE.Vector4;this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);Y.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);return a.applyProjection(Y)};this.unprojectVector=function(){var a=new THREE.Matrix4;return function(b,c){a.getInverse(c.projectionMatrix);Y.multiplyMatrices(c.matrixWorld,a);return b.applyProjection(Y)}}();this.pickingRay=function(a,b){a.z=
-1;var c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.sub(a).normalize();return new THREE.Raycaster(a,c)};var Q=function(a){if(!1!==a.visible){if(a instanceof THREE.Light)A.lights.push(a);else if(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Sprite)if(!1===a.frustumCulled||!0===pa.intersectsObject(a)){if(g===k){var b=new THREE.RenderableObject;h.push(b);k++;g++;f=b}else f=h[g++];f.id=a.id;f.object=a;null!==a.renderDepth?f.z=a.renderDepth:
(y.setFromMatrixPosition(a.matrixWorld),y.applyProjection(Y),f.z=y.z);A.objects.push(f)}for(var b=0,c=a.children.length;b<c;b++)Q(a.children[b])}},U=new function(){var d=[],e=null,f=new THREE.Matrix3,g=function(a){var b=a.positionWorld,c=a.positionScreen;b.copy(a.position).applyMatrix4(V);c.copy(b).applyMatrix4(Y);b=1/c.w;c.x*=b;c.y*=b;c.z*=b;a.visible=-1<=c.x&&1>=c.x&&-1<=c.y&&1>=c.y&&-1<=c.z&&1>=c.z},h=function(a,b,c){G[0]=a.positionScreen;G[1]=b.positionScreen;G[2]=c.positionScreen;return!0===
a.visible||!0===b.visible||!0===c.visible||D.isIntersectionBox(E.setFromPoints(G))?0>(c.positionScreen.x-a.positionScreen.x)*(b.positionScreen.y-a.positionScreen.y)-(c.positionScreen.y-a.positionScreen.y)*(b.positionScreen.x-a.positionScreen.x):!1};return{setObject:function(a){e=a;f.getNormalMatrix(e.matrixWorld);d.length=0},projectVertex:g,checkTriangleVisibility:h,pushVertex:function(b,c,d){l=a();l.position.set(b,c,d);g(l)},pushNormal:function(a,b,c){d.push(a,b,c)},pushLine:function(a,b){var d=
q[a],f=q[b];w=c();w.id=e.id;w.v1.copy(d);w.v2.copy(f);w.z=(d.positionScreen.z+f.positionScreen.z)/2;w.material=e.material;A.elements.push(w)},pushTriangle:function(a,c,g){var k=q[a],l=q[c],n=q[g];if(!0===h(k,l,n)){u=b();u.id=e.id;u.v1.copy(k);u.v2.copy(l);u.v3.copy(n);u.z=(k.positionScreen.z+l.positionScreen.z+n.positionScreen.z)/3;for(k=0;3>k;k++)l=3*arguments[k],n=u.vertexNormalsModel[k],n.set(d[l+0],d[l+1],d[l+2]),n.applyMatrix3(f).normalize();u.vertexNormalsLength=3;u.material=e.material;A.elements.push(u)}}}};
this.projectScene=function(f,h,k,l){var p,s,v,x,y,z,D,G,E;P=r=t=0;A.elements.length=0;!0===f.autoUpdate&&f.updateMatrixWorld();void 0===h.parent&&h.updateMatrixWorld();T.copy(h.matrixWorldInverse.getInverse(h.matrixWorld));Y.multiplyMatrices(h.projectionMatrix,T);pa.setFromMatrix(Y);g=0;A.objects.length=0;A.lights.length=0;Q(f);!0===k&&A.objects.sort(d);f=0;for(k=A.objects.length;f<k;f++)if(p=A.objects[f].object,s=p.geometry,U.setObject(p),V=p.matrixWorld,n=0,p instanceof THREE.Mesh)if(s instanceof
THREE.BufferGeometry){if(z=s.attributes,x=s.offsets,void 0!==z.position){G=z.position.array;p=0;for(s=G.length;p<s;p+=3)U.pushVertex(G[p],G[p+1],G[p+2]);E=z.normal.array;p=0;for(s=E.length;p<s;p+=3)U.pushNormal(E[p],E[p+1],E[p+2]);if(void 0!==z.index)if(z=z.index.array,0<x.length)for(f=0;f<x.length;f++)for(s=x[f],G=s.index,p=s.start,s=s.start+s.count;p<s;p+=3)U.pushTriangle(z[p]+G,z[p+1]+G,z[p+2]+G);else for(p=0,s=z.length;p<s;p+=3)U.pushTriangle(z[p],z[p+1],z[p+2]);else for(p=0,s=G.length/3;p<s;p+=
3)U.pushTriangle(p,p+1,p+2)}}else if(s instanceof THREE.Geometry2)for(v=s.vertices,x=p=0,s=v.length;p<s;p+=9,x+=3)U.pushVertex(v[p+0],v[p+1],v[p+2]),U.pushVertex(v[p+3],v[p+4],v[p+5]),U.pushVertex(v[p+6],v[p+7],v[p+8]),U.pushTriangle(x+0,x+1,x+2);else{if(s instanceof THREE.Geometry){v=s.vertices;x=s.faces;z=s.faceVertexUvs;R.getNormalMatrix(V);G=p.material instanceof THREE.MeshFaceMaterial;E=!0===G?p.material:null;for(var la=0,Ta=v.length;la<Ta;la++){var ma=v[la];U.pushVertex(ma.x,ma.y,ma.z)}la=0;
for(Ta=x.length;la<Ta;la++){v=x[la];var Oa=!0===G?E.materials[v.materialIndex]:p.material;if(void 0!==Oa){D=Oa.side;var ma=q[v.a],Ka=q[v.b],Pa=q[v.c];if(!0===Oa.morphTargets){y=s.morphTargets;var Ca=p.morphTargetInfluences,Da=ma.position,na=Ka.position,Ra=Pa.position;I.set(0,0,0);H.set(0,0,0);N.set(0,0,0);for(var Ea=0,Za=y.length;Ea<Za;Ea++){var La=Ca[Ea];if(0!==La){var Fa=y[Ea].vertices;I.x+=(Fa[v.a].x-Da.x)*La;I.y+=(Fa[v.a].y-Da.y)*La;I.z+=(Fa[v.a].z-Da.z)*La;H.x+=(Fa[v.b].x-na.x)*La;H.y+=(Fa[v.b].y-
na.y)*La;H.z+=(Fa[v.b].z-na.z)*La;N.x+=(Fa[v.c].x-Ra.x)*La;N.y+=(Fa[v.c].y-Ra.y)*La;N.z+=(Fa[v.c].z-Ra.z)*La}}ma.position.add(I);Ka.position.add(H);Pa.position.add(N);U.projectVertex(ma);U.projectVertex(Ka);U.projectVertex(Pa)}Ca=U.checkTriangleVisibility(ma,Ka,Pa);if(!(!1===Ca&&D===THREE.FrontSide||!0===Ca&&D===THREE.BackSide)){u=b();u.id=p.id;u.v1.copy(ma);u.v2.copy(Ka);u.v3.copy(Pa);u.normalModel.copy(v.normal);!1!==Ca||D!==THREE.BackSide&&D!==THREE.DoubleSide||u.normalModel.negate();u.normalModel.applyMatrix3(R).normalize();
u.centroidModel.copy(v.centroid).applyMatrix4(V);y=v.vertexNormals;Da=0;for(na=Math.min(y.length,3);Da<na;Da++)Ra=u.vertexNormalsModel[Da],Ra.copy(y[Da]),!1!==Ca||D!==THREE.BackSide&&D!==THREE.DoubleSide||Ra.negate(),Ra.applyMatrix3(R).normalize();u.vertexNormalsLength=y.length;y=0;for(Ca=Math.min(z.length,3);y<Ca;y++)if(D=z[y][la],void 0!==D)for(Da=0,na=D.length;Da<na;Da++)u.uvs[y][Da]=D[Da];u.color=v.color;u.material=Oa;u.z=(ma.positionScreen.z+Ka.positionScreen.z+Pa.positionScreen.z)/3;A.elements.push(u)}}}}}else if(p instanceof
THREE.Line)if(s instanceof THREE.BufferGeometry){if(z=s.attributes,void 0!==z.position){G=z.position.array;p=0;for(s=G.length;p<s;p+=3)U.pushVertex(G[p],G[p+1],G[p+2]);if(void 0!==z.index)for(z=z.index.array,p=0,s=z.length;p<s;p+=2)U.pushLine(z[p],z[p+1]);else for(p=0,s=G.length/3-1;p<s;p++)U.pushLine(p,p+1)}}else{if(s instanceof THREE.Geometry&&(ja.multiplyMatrices(Y,V),v=p.geometry.vertices,0!==v.length))for(ma=a(),ma.positionScreen.copy(v[0]).applyMatrix4(ja),s=p.type===THREE.LinePieces?2:1,la=
1,Ta=v.length;la<Ta;la++)ma=a(),ma.positionScreen.copy(v[la]).applyMatrix4(ja),0<(la+1)%s||(Ka=q[n-2],L.copy(ma.positionScreen),ka.copy(Ka.positionScreen),!0===e(L,ka)&&(L.multiplyScalar(1/L.w),ka.multiplyScalar(1/ka.w),w=c(),w.id=p.id,w.v1.positionScreen.copy(L),w.v2.positionScreen.copy(ka),w.z=Math.max(L.z,ka.z),w.material=p.material,p.material.vertexColors===THREE.VertexColors&&(w.vertexColors[0].copy(p.geometry.colors[la]),w.vertexColors[1].copy(p.geometry.colors[la-1])),A.elements.push(w)))}else p instanceof
THREE.Sprite&&(K.set(V.elements[12],V.elements[13],V.elements[14],1),K.applyMatrix4(Y),s=1/K.w,K.z*=s,-1<=K.z&&1>=K.z&&(P===B?(x=new THREE.RenderableSprite,C.push(x),B++,P++,F=x):F=C[P++],F.id=p.id,F.x=K.x*s,F.y=K.y*s,F.z=K.z,F.object=p,F.rotation=p.rotation,F.scale.x=p.scale.x*Math.abs(F.x-(K.x+h.projectionMatrix.elements[0])/(K.w+h.projectionMatrix.elements[12])),F.scale.y=p.scale.y*Math.abs(F.y-(K.y+h.projectionMatrix.elements[5])/(K.w+h.projectionMatrix.elements[13])),F.material=p.material,A.elements.push(F)));
!0===l&&A.elements.sort(d);return A}};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0;this.centroid=new THREE.Vector3};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.Geometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=
this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){var e=this.faces[c];e.normal.applyMatrix3(b).normalize();for(var f=0,g=e.vertexNormals.length;f<g;f++)e.vertexNormals[f].applyMatrix3(b).normalize();e.centroid.applyMatrix4(a)}this.boundingBox instanceof THREE.Box3&&this.computeBoundingBox();this.boundingSphere instanceof
THREE.Sphere&&this.computeBoundingSphere()},computeCentroids:function(){var a,b,c;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.centroid.set(0,0,0),c.centroid.add(this.vertices[c.a]),c.centroid.add(this.vertices[c.b]),c.centroid.add(this.vertices[c.c]),c.centroid.divideScalar(3)},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,
g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,k=new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=
0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=
e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=
this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<
d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,k,l,n,q,s,u,t,p,v,w=[],r=[];c=new THREE.Vector3;var x=new THREE.Vector3,z=new THREE.Vector3,F=new THREE.Vector3,P=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)w[a]=new THREE.Vector3,r[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,v=e.b,e=e.c,g=this.vertices[d],h=this.vertices[v],k=this.vertices[e],
l=f[0],n=f[1],q=f[2],f=h.x-g.x,s=k.x-g.x,u=h.y-g.y,t=k.y-g.y,h=h.z-g.z,g=k.z-g.z,k=n.x-l.x,p=q.x-l.x,n=n.y-l.y,l=q.y-l.y,q=1/(k*l-p*n),c.set((l*f-n*s)*q,(l*u-n*t)*q,(l*h-n*g)*q),x.set((k*s-p*f)*q,(k*t-p*u)*q,(k*g-p*h)*q),w[d].add(c),w[v].add(c),w[e].add(c),r[d].add(x),r[v].add(x),r[e].add(x);x=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++)for(e=this.faces[a],c=0;c<Math.min(e.vertexNormals.length,3);c++)P.copy(e.vertexNormals[c]),d=e[x[c]],v=w[d],z.copy(v),z.sub(P.multiplyScalar(P.dot(v))).normalize(),
F.crossVectors(e.vertexNormals[c],v),d=F.dot(r[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(z.x,z.y,z.z,d);this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);
this.boundingSphere.setFromPoints(this.vertices)},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=
a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},makeGroups:function(){var a=0;return function(b){var c,d,e,f,g={},h=this.morphTargets.length,k=this.morphNormals.length;this.geometryGroups={};c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e=b?e.materialIndex:0,e in g||(g[e]={hash:e,counter:0}),f=g[e].hash+"_"+g[e].counter,f in this.geometryGroups||(this.geometryGroups[f]={faces3:[],
materialIndex:e,vertices:0,numMorphTargets:h,numMorphNormals:k}),65535<this.geometryGroups[f].vertices+3&&(g[e].counter+=1,f=g[e].hash+"_"+g[e].counter,f in this.geometryGroups||(this.geometryGroups[f]={faces3:[],materialIndex:e,vertices:0,numMorphTargets:h,numMorphNormals:k})),this.geometryGroups[f].faces3.push(c),this.geometryGroups[f].vertices+=3;this.geometryGroupsList=[];for(var l in this.geometryGroups)this.geometryGroups[l].id=a++,this.geometryGroupsList.push(this.geometryGroups[l])}}(),clone:function(){for(var a=
new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],g=0,h=e.length;g<h;g++)f.push(new THREE.Vector2(e[g].x,e[g].y));a.faceVertexUvs[0].push(f)}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;THREE.Geometry2=function(a){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.vertices=void 0!==a?new Float32Array(3*a):[];this.normals=void 0!==a?new Float32Array(3*a):[];this.uvs=void 0!==a?new Float32Array(2*a):[];this.boundingSphere=this.boundingBox=null};
THREE.Geometry2.prototype={constructor:THREE.Geometry2,applyMatrix:function(a){a.multiplyVector3Array(this.vertices)},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.vertices,b=this.boundingBox;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var c=3,d=a.length;c<d;c+=3){var e=a[c],f=a[c+1],g=a[c+2];e<b.min.x?b.min.x=e:e>b.max.x&&(b.max.x=e);f<b.min.y?b.min.y=f:f>b.max.y&&(b.max.y=f);g<b.min.z?b.min.z=g:g>b.max.z&&
(b.max.z=g)}},computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);a.makeEmpty();for(var c=this.vertices,d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.addPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g)}}(),dispose:function(){this.dispatchEvent({type:"dispose"})}};
THREE.EventDispatcher.prototype.apply(THREE.Geometry2.prototype);THREE.BufferGeometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.attributes={};this.offsets=[];this.boundingSphere=this.boundingBox=null};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c,d){this.attributes[a]={itemSize:d,array:new b(c*d)}},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.multiplyVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).multiplyVector3Array(b.array),b.needsUpdate=!0)},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.attributes.position.array;
if(a){var b=this.boundingBox;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var c=3,d=a.length;c<d;c+=3){var e=a[c],f=a[c+1],g=a[c+2];e<b.min.x?b.min.x=e:e>b.max.x&&(b.max.x=e);f<b.min.y?b.min.y=f:f>b.max.y&&(b.max.y=f);g<b.min.z?b.min.z=g:g>b.max.z&&(b.max.z=g)}}if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&
(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.addPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g)}}}(),computeVertexNormals:function(){if(this.attributes.position){var a,b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal=
{itemSize:3,array:new Float32Array(a)};else for(a=0,b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=0;var e=this.attributes.position.array,f=this.attributes.normal.array,g,h,k,l,n,q,s=new THREE.Vector3,u=new THREE.Vector3,t=new THREE.Vector3,p=new THREE.Vector3,v=new THREE.Vector3;if(this.attributes.index){var w=this.attributes.index.array,r=this.offsets;c=0;for(d=r.length;c<d;++c){b=r[c].start;g=r[c].count;var x=r[c].index;a=b;for(b+=g;a<b;a+=3)g=x+w[a],h=x+w[a+1],k=
x+w[a+2],l=e[3*g],n=e[3*g+1],q=e[3*g+2],s.set(l,n,q),l=e[3*h],n=e[3*h+1],q=e[3*h+2],u.set(l,n,q),l=e[3*k],n=e[3*k+1],q=e[3*k+2],t.set(l,n,q),p.subVectors(t,u),v.subVectors(s,u),p.cross(v),f[3*g]+=p.x,f[3*g+1]+=p.y,f[3*g+2]+=p.z,f[3*h]+=p.x,f[3*h+1]+=p.y,f[3*h+2]+=p.z,f[3*k]+=p.x,f[3*k+1]+=p.y,f[3*k+2]+=p.z}}else for(a=0,b=e.length;a<b;a+=9)l=e[a],n=e[a+1],q=e[a+2],s.set(l,n,q),l=e[a+3],n=e[a+4],q=e[a+5],u.set(l,n,q),l=e[a+6],n=e[a+7],q=e[a+8],t.set(l,n,q),p.subVectors(t,u),v.subVectors(s,u),p.cross(v),
f[a]=p.x,f[a+1]=p.y,f[a+2]=p.z,f[a+3]=p.x,f[a+4]=p.y,f[a+5]=p.z,f[a+6]=p.x,f[a+7]=p.y,f[a+8]=p.z;this.normalizeNormals();this.normalsNeedUpdate=!0}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},computeTangents:function(){function a(a,b,c){q=d[3*a];s=d[3*a+1];u=d[3*a+2];t=d[3*b];p=d[3*b+1];v=d[3*b+2];w=d[3*c];r=d[3*c+1];x=d[3*c+2];z=f[2*a];F=f[2*a+1];P=f[2*b];C=f[2*b+
1];B=f[2*c];A=f[2*c+1];I=t-q;H=w-q;N=p-s;y=r-s;K=v-u;D=x-u;E=P-z;G=B-z;T=C-F;Y=A-F;V=1/(E*Y-G*T);ja.set((Y*I-T*H)*V,(Y*N-T*y)*V,(Y*K-T*D)*V);R.set((E*H-G*I)*V,(E*y-G*N)*V,(E*D-G*K)*V);k[a].add(ja);k[b].add(ja);k[c].add(ja);l[a].add(R);l[b].add(R);l[c].add(R)}function b(a){Aa.x=e[3*a];Aa.y=e[3*a+1];Aa.z=e[3*a+2];Ga.copy(Aa);ra=k[a];za.copy(ra);za.sub(Aa.multiplyScalar(Aa.dot(ra))).normalize();Ia.crossVectors(Ga,ra);Ja=Ia.dot(l[a]);ta=0>Ja?-1:1;h[4*a]=za.x;h[4*a+1]=za.y;h[4*a+2]=za.z;h[4*a+3]=ta}if(void 0===
this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var c=this.attributes.index.array,d=this.attributes.position.array,e=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/3;void 0===this.attributes.tangent&&(this.attributes.tangent={itemSize:4,array:new Float32Array(4*g)});for(var h=this.attributes.tangent.array,
k=[],l=[],n=0;n<g;n++)k[n]=new THREE.Vector3,l[n]=new THREE.Vector3;var q,s,u,t,p,v,w,r,x,z,F,P,C,B,A,I,H,N,y,K,D,E,G,T,Y,V,ja=new THREE.Vector3,R=new THREE.Vector3,pa,L,ka,Q,U,O=this.offsets,n=0;for(L=O.length;n<L;++n){pa=O[n].start;ka=O[n].count;var ga=O[n].index,g=pa;for(pa+=ka;g<pa;g+=3)ka=ga+c[g],Q=ga+c[g+1],U=ga+c[g+2],a(ka,Q,U)}var za=new THREE.Vector3,Ia=new THREE.Vector3,Aa=new THREE.Vector3,Ga=new THREE.Vector3,ta,ra,Ja,n=0;for(L=O.length;n<L;++n)for(pa=O[n].start,ka=O[n].count,ga=O[n].index,
g=pa,pa+=ka;g<pa;g+=3)ka=ga+c[g],Q=ga+c[g+1],U=ga+c[g+2],b(ka),b(Q),b(U)}},computeOffsets:function(a){var b=a;void 0===a&&(b=65535);Date.now();a=this.attributes.index.array;for(var c=this.attributes.position.array,d=a.length/3,e=new Uint16Array(a.length),f=0,g=0,h=[{start:0,count:0,index:0}],k=h[0],l=0,n=0,q=new Int32Array(6),s=new Int32Array(c.length),u=new Int32Array(c.length),t=0;t<c.length;t++)s[t]=-1,u[t]=-1;for(c=0;c<d;c++){for(var p=n=0;3>p;p++)t=a[3*c+p],-1==s[t]?(q[2*p]=t,q[2*p+1]=-1,n++):
s[t]<k.index?(q[2*p]=t,q[2*p+1]=-1,l++):(q[2*p]=t,q[2*p+1]=s[t]);if(g+n>k.index+b)for(k={start:f,count:0,index:g},h.push(k),n=0;6>n;n+=2)p=q[n+1],-1<p&&p<k.index&&(q[n+1]=-1);for(n=0;6>n;n+=2)t=q[n],p=q[n+1],-1===p&&(p=g++),s[t]=p,u[p]=t,e[f++]=p-k.index,k.count++}this.reorderBuffers(e,u,g);return this.offsets=h},reorderBuffers:function(a,b,c){var d={},e=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],f;for(f in this.attributes)if("index"!=
f)for(var g=this.attributes[f].array,h=0,k=e.length;h<k;h++){var l=e[h];if(g instanceof l){d[f]=new l(this.attributes[f].itemSize*c);break}}for(e=0;e<c;e++)for(f in g=b[e],this.attributes)if("index"!=f)for(var h=this.attributes[f].array,k=this.attributes[f].itemSize,l=d[f],n=0;n<k;n++)l[e*k+n]=h[g*k+n];this.attributes.index.array=a;for(f in this.attributes)"index"!=f&&(this.attributes[f].array=d[f],this.attributes[f].numItems=this.attributes[f].itemSize*c)},clone:function(){var a=new THREE.BufferGeometry,
b=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],c;for(c in this.attributes){for(var d=this.attributes[c],e=d.array,f={itemSize:d.itemSize,array:null},d=0,g=b.length;d<g;d++){var h=b[d];if(e instanceof h){f.array=new h(e);break}}a.attributes[c]=f}d=0;for(g=this.offsets.length;d<g;d++)b=this.offsets[d],a.offsets.push({start:b.start,index:b.index,count:b.count});return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();
THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};
THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;return a};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(THREE.Math.degToRad(0.5*this.fov))*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;return a};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=0.5;this.quadraticAttenuation=0.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=new THREE.Vector3(0,
0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;return a};THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=
this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1E3).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=THREE.Loader.prototype.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.floor(a)==
a}function d(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function e(a,b){var e=new Image;e.onload=function(){if(c(this.width)&&c(this.height))a.image=this;else{var b=d(this.width),e=d(this.height);a.image.width=b;a.image.height=e;a.image.getContext("2d").drawImage(this,0,0,b,e)}a.needsUpdate=!0};void 0!==h.crossOrigin&&(e.crossOrigin=h.crossOrigin);e.src=b}function f(a,c,d,f,g,h,k){var l=/\.dds$/i.test(d),n=b+d;if(l){var z=THREE.ImageUtils.loadCompressedTexture(n);a[c]=z}else z=document.createElement("canvas"),
a[c]=new THREE.Texture(z);a[c].sourceFile=d;f&&(a[c].repeat.set(f[0],f[1]),1!==f[0]&&(a[c].wrapS=THREE.RepeatWrapping),1!==f[1]&&(a[c].wrapT=THREE.RepeatWrapping));g&&a[c].offset.set(g[0],g[1]);h&&(d={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==d[h[0]]&&(a[c].wrapS=d[h[0]]),void 0!==d[h[1]]&&(a[c].wrapT=d[h[1]]));k&&(a[c].anisotropy=k);l||e(a[c],n)}function g(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var h=this,k="MeshLambertMaterial",l={color:15658734,opacity:1,
map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var n=a.shading.toLowerCase();"phong"===n?k="MeshPhongMaterial":"basic"===n&&(k="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(l.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)l.transparent=a.transparent;void 0!==a.depthTest&&(l.depthTest=a.depthTest);void 0!==a.depthWrite&&(l.depthWrite=a.depthWrite);void 0!==a.visible&&(l.visible=a.visible);void 0!==a.flipSided&&(l.side=THREE.BackSide);
void 0!==a.doubleSided&&(l.side=THREE.DoubleSide);void 0!==a.wireframe&&(l.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===a.vertexColors?l.vertexColors=THREE.FaceColors:a.vertexColors&&(l.vertexColors=THREE.VertexColors));a.colorDiffuse?l.color=g(a.colorDiffuse):a.DbgColor&&(l.color=a.DbgColor);a.colorSpecular&&(l.specular=g(a.colorSpecular));a.colorAmbient&&(l.ambient=g(a.colorAmbient));a.transparency&&(l.opacity=a.transparency);a.specularCoef&&(l.shininess=a.specularCoef);a.mapDiffuse&&
b&&f(l,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&f(l,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&f(l,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&f(l,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&f(l,"specularMap",a.mapSpecular,a.mapSpecularRepeat,
a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapBumpScale&&(l.bumpScale=a.mapBumpScale);a.mapNormal?(k=THREE.ShaderLib.normalmap,n=THREE.UniformsUtils.clone(k.uniforms),n.tNormal.value=l.normalMap,a.mapNormalFactor&&n.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),l.map&&(n.tDiffuse.value=l.map,n.enableDiffuse.value=!0),l.specularMap&&(n.tSpecular.value=l.specularMap,n.enableSpecular.value=!0),l.lightMap&&(n.tAO.value=l.lightMap,n.enableAO.value=!0),n.diffuse.value.setHex(l.color),
n.specular.value.setHex(l.specular),n.ambient.value.setHex(l.ambient),n.shininess.value=l.shininess,void 0!==l.opacity&&(n.opacity.value=l.opacity),k=new THREE.ShaderMaterial({fragmentShader:k.fragmentShader,vertexShader:k.vertexShader,uniforms:n,lights:!0,fog:!0}),l.transparent&&(k.transparent=!0)):k=new THREE[k](l);void 0!==a.DbgName&&(k.name=a.DbgName);return k}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=new XMLHttpRequest;void 0!==b&&f.addEventListener("load",function(c){b(c.target.responseText);e.manager.itemEnd(a)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.open("GET",a,!0);f.send(null);e.manager.itemStart(a)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=document.createElement("img");void 0!==b&&f.addEventListener("load",function(c){e.manager.itemEnd(a);b(this)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.src=a;e.manager.itemStart(a);return f},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText);if("scene"===h.metadata.type){console.error('THREE.JSONLoader: "'+b+'" seems to be a Scene. Use THREE.SceneLoader instead.');return}h=a.parse(h,d);c(h.geometry,h.materials)}else console.error('THREE.JSONLoader: "'+b+'" seems to be unreachable or the file is empty.');a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load \""+
b+'" ('+f.status+")");else f.readyState===f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,l,n,q,s,u,t,p,v,w,r=a.faces;n=a.vertices;var x=a.normals,z=a.colors,F=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&F++;for(d=0;d<F;d++)c.faceVertexUvs[d]=[]}k=0;for(l=n.length;k<l;)d=new THREE.Vector3,d.x=n[k++]*b,d.y=n[k++]*b,d.z=n[k++]*b,c.vertices.push(d);k=0;for(l=r.length;k<l;)if(b=r[k++],u=b&1,h=b&2,d=b&8,q=b&16,t=b&32,n=b&64,b&=128,u){u=new THREE.Face3;
u.a=r[k];u.b=r[k+1];u.c=r[k+3];p=new THREE.Face3;p.a=r[k+1];p.b=r[k+2];p.c=r[k+3];k+=4;h&&(h=r[k++],u.materialIndex=h,p.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<F;d++)for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)s=r[k++],w=v[2*s],s=v[2*s+1],w=new THREE.Vector2(w,s),2!==g&&c.faceVertexUvs[d][h].push(w),0!==g&&c.faceVertexUvs[d][h+1].push(w);q&&(q=3*r[k++],u.normal.set(x[q++],x[q++],x[q]),p.normal.copy(u.normal));if(t)for(d=0;4>d;d++)q=3*r[k++],t=new THREE.Vector3(x[q++],
x[q++],x[q]),2!==d&&u.vertexNormals.push(t),0!==d&&p.vertexNormals.push(t);n&&(n=r[k++],n=z[n],u.color.setHex(n),p.color.setHex(n));if(b)for(d=0;4>d;d++)n=r[k++],n=z[n],2!==d&&u.vertexColors.push(new THREE.Color(n)),0!==d&&p.vertexColors.push(new THREE.Color(n));c.faces.push(u);c.faces.push(p)}else{u=new THREE.Face3;u.a=r[k++];u.b=r[k++];u.c=r[k++];h&&(h=r[k++],u.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<F;d++)for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)s=r[k++],w=v[2*s],s=v[2*s+1],
w=new THREE.Vector2(w,s),c.faceVertexUvs[d][h].push(w);q&&(q=3*r[k++],u.normal.set(x[q++],x[q++],x[q]));if(t)for(d=0;3>d;d++)q=3*r[k++],t=new THREE.Vector3(x[q++],x[q++],x[q]),u.vertexNormals.push(t);n&&(n=r[k++],u.color.setHex(z[n]));if(b)for(d=0;3>d;d++)n=r[k++],u.vertexColors.push(new THREE.Color(z[n]));c.faces.push(u)}})(d);(function(){if(a.skinWeights)for(var b=0,d=a.skinWeights.length;b<d;b+=2)c.skinWeights.push(new THREE.Vector4(a.skinWeights[b],a.skinWeights[b+1],0,0));if(a.skinIndices)for(b=
0,d=a.skinIndices.length;b<d;b+=2)c.skinIndices.push(new THREE.Vector4(a.skinIndices[b],a.skinIndices[b+1],0,0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,
g,h,k,l,n;d=0;for(g=a.morphTargets.length;d<g;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],l=c.morphTargets[d].vertices,n=a.morphTargets[d].vertices,h=0,k=n.length;h<k;h+=3){var q=new THREE.Vector3;q.x=n[h]*b;q.y=n[h+1]*b;q.z=n[h+2]*b;l.push(q)}}if(void 0!==a.morphColors)for(d=0,g=a.morphColors.length;d<g;d++)for(c.morphColors[d]={},c.morphColors[d].name=a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,l=a.morphColors[d].colors,
b=0,h=l.length;b<h;b+=3)n=new THREE.Color(16755200),n.setRGB(l[b],l[b+1],l[b+2]),k.push(n)})(d);c.computeCentroids();c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,materials:d}};THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this;c=new THREE.XHRLoader;c.setCrossOrigin(this.crossOrigin);c.load(a,function(a){b(e.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.attributes,d=a.offsets;a=a.boundingSphere;for(var e in c){var f=c[e];b.attributes[e]={itemSize:f.itemSize,array:new self[f.type](f.array)}}void 0!==d&&(b.offsets=JSON.parse(JSON.stringify(d)));
void 0!==a&&(b.boundingSphere=new THREE.Sphere((new THREE.Vector3).fromArray(void 0!==a.center?a.center:[0,0,0]),a.radius));return b}};THREE.Geometry2Loader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.Geometry2Loader.prototype={constructor:THREE.Geometry2Loader,load:function(a,b,c,d){var e=this;c=new THREE.XHRLoader;c.setCrossOrigin(this.crossOrigin);c.load(a,function(a){b(e.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.Geometry2(a.vertices.length/3),c=["vertices","normals","uvs"],d=a.boundingSphere,e;for(e in c){var f=c[e];b[f].set(a[f])}void 0!==d&&(b.boundingSphere=new THREE.Sphere((new THREE.Vector3).fromArray(void 0!==d.center?
d.center:[0,0,0]),d.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this;c=new THREE.XHRLoader;c.setCrossOrigin(this.crossOrigin);c.load(a,function(a){b(e.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.ambient&&b.ambient.setHex(a.ambient);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&
(b.shininess=a.shininess);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){var e=this;c=new THREE.XHRLoader(e.manager);c.setCrossOrigin(this.crossOrigin);c.load(a,function(a){b(e.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=this.parseGeometries(a.geometries),c=this.parseMaterials(a.materials);return this.parseObject(a.object,b,c)},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.Geometry2Loader,
e=new THREE.BufferGeometryLoader,f=0,g=a.length;f<g;f++){var h,k=a[f];switch(k.type){case "PlaneGeometry":h=new THREE.PlaneGeometry(k.width,k.height,k.widthSegments,k.heightSegments);break;case "BoxGeometry":case "CubeGeometry":h=new THREE.BoxGeometry(k.width,k.height,k.depth,k.widthSegments,k.heightSegments,k.depthSegments);break;case "CircleGeometry":h=new THREE.CircleGeometry(k.radius,k.segments);break;case "CylinderGeometry":h=new THREE.CylinderGeometry(k.radiusTop,k.radiusBottom,k.height,k.radialSegments,
k.heightSegments,k.openEnded);break;case "SphereGeometry":h=new THREE.SphereGeometry(k.radius,k.widthSegments,k.heightSegments,k.phiStart,k.phiLength,k.thetaStart,k.thetaLength);break;case "IcosahedronGeometry":h=new THREE.IcosahedronGeometry(k.radius,k.detail);break;case "TorusGeometry":h=new THREE.TorusGeometry(k.radius,k.tube,k.radialSegments,k.tubularSegments,k.arc);break;case "TorusKnotGeometry":h=new THREE.TorusKnotGeometry(k.radius,k.tube,k.radialSegments,k.tubularSegments,k.p,k.q,k.heightScale);
break;case "BufferGeometry":h=e.parse(k.data);break;case "Geometry2":h=d.parse(k.data);break;case "Geometry":h=c.parse(k.data).geometry}h.uuid=k.uuid;void 0!==k.name&&(h.name=k.name);b[k.uuid]=h}return b},parseMaterials:function(a){var b={};if(void 0!==a)for(var c=new THREE.MaterialLoader,d=0,e=a.length;d<e;d++){var f=a[d],g=c.parse(f);g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);b[f.uuid]=g}return b},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;switch(b.type){case "Scene":e=
new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance);break;case "SpotLight":e=new THREE.SpotLight(b.color,b.intensity,b.distance,
b.angle,b.exponent);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case "Mesh":e=c[b.geometry];var f=d[b.material];void 0===e&&console.error("THREE.ObjectLoader: Undefined geometry "+b.geometry);void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Mesh(e,f);break;case "Sprite":f=d[b.material];void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Sprite(f);break;default:e=
new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){};this.geometryHandlers={};this.hierarchyHandlers={};this.addGeometryHandler("ascii",THREE.JSONLoader)};
THREE.SceneLoader.prototype={constructor:THREE.SceneLoader,load:function(a,b,c,d){var e=this;c=new THREE.XHRLoader(e.manager);c.setCrossOrigin(this.crossOrigin);c.load(a,function(c){e.parse(JSON.parse(c),b,a)})},setCrossOrigin:function(a){this.crossOrigin=a},addGeometryHandler:function(a,b){this.geometryHandlers[a]={loaderClass:b}},addHierarchyHandler:function(a,b){this.hierarchyHandlers[a]={loaderClass:b}},parse:function(a,b,c){function d(a,b){return"relativeToHTML"==b?a:u+a}function e(){f(B.scene,
I.objects)}function f(a,b){var c,e,g,h,l,n;for(n in b){var q=B.objects[n],r=b[n];if(void 0===q){if(r.type&&r.type in s.hierarchyHandlers){if(void 0===r.loading){c={type:1,url:1,material:1,position:1,rotation:1,scale:1,visible:1,children:1,userData:1,skin:1,morph:1,mirroredLoop:1,duration:1};var u={},w;for(w in r)w in c||(u[w]=r[w]);p=B.materials[r.material];r.loading=!0;c=s.hierarchyHandlers[r.type].loaderObject;c.options?c.load(d(r.url,I.urlBaseType),k(n,a,p,r)):c.load(d(r.url,I.urlBaseType),k(n,
a,p,r),u)}}else if(void 0!==r.geometry){if(t=B.geometries[r.geometry]){q=!1;p=B.materials[r.material];q=p instanceof THREE.ShaderMaterial;e=r.position;g=r.rotation;h=r.scale;c=r.matrix;l=r.quaternion;r.material||(p=new THREE.MeshFaceMaterial(B.face_materials[r.geometry]));p instanceof THREE.MeshFaceMaterial&&0===p.materials.length&&(p=new THREE.MeshFaceMaterial(B.face_materials[r.geometry]));if(p instanceof THREE.MeshFaceMaterial)for(u=0;u<p.materials.length;u++)q=q||p.materials[u]instanceof THREE.ShaderMaterial;
q&&t.computeTangents();r.skin?q=new THREE.SkinnedMesh(t,p):r.morph?(q=new THREE.MorphAnimMesh(t,p),void 0!==r.duration&&(q.duration=r.duration),void 0!==r.time&&(q.time=r.time),void 0!==r.mirroredLoop&&(q.mirroredLoop=r.mirroredLoop),p.morphNormals&&t.computeMorphNormals()):q=new THREE.Mesh(t,p);q.name=n;c?(q.matrixAutoUpdate=!1,q.matrix.set(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15])):(q.position.fromArray(e),l?q.quaternion.fromArray(l):q.rotation.fromArray(g),
q.scale.fromArray(h));q.visible=r.visible;q.castShadow=r.castShadow;q.receiveShadow=r.receiveShadow;a.add(q);B.objects[n]=q}}else if("AmbientLight"===r.type||"PointLight"===r.type||"DirectionalLight"===r.type||"SpotLight"===r.type||"HemisphereLight"===r.type||"AreaLight"===r.type){u=r.color;c=r.intensity;e=r.distance;g=r.position;h=r.rotation;switch(r.type){case "AmbientLight":x=new THREE.AmbientLight(u);break;case "PointLight":x=new THREE.PointLight(u,c,e);x.position.fromArray(g);break;case "DirectionalLight":x=
new THREE.DirectionalLight(u,c);x.position.fromArray(r.direction);break;case "SpotLight":x=new THREE.SpotLight(u,c,e,1);x.angle=r.angle;x.position.fromArray(g);x.target.set(g[0],g[1]-e,g[2]);x.target.applyEuler(new THREE.Euler(h[0],h[1],h[2],"XYZ"));break;case "HemisphereLight":x=new THREE.DirectionalLight(u,c,e);x.target.set(g[0],g[1]-e,g[2]);x.target.applyEuler(new THREE.Euler(h[0],h[1],h[2],"XYZ"));break;case "AreaLight":x=new THREE.AreaLight(u,c),x.position.fromArray(g),x.width=r.size,x.height=
r.size_y}a.add(x);x.name=n;B.lights[n]=x;B.objects[n]=x}else"PerspectiveCamera"===r.type||"OrthographicCamera"===r.type?(e=r.position,g=r.rotation,l=r.quaternion,"PerspectiveCamera"===r.type?v=new THREE.PerspectiveCamera(r.fov,r.aspect,r.near,r.far):"OrthographicCamera"===r.type&&(v=new THREE.OrthographicCamera(r.left,r.right,r.top,r.bottom,r.near,r.far)),v.name=n,v.position.fromArray(e),void 0!==l?v.quaternion.fromArray(l):void 0!==g&&v.rotation.fromArray(g),a.add(v),B.cameras[n]=v,B.objects[n]=
v):(e=r.position,g=r.rotation,h=r.scale,l=r.quaternion,q=new THREE.Object3D,q.name=n,q.position.fromArray(e),l?q.quaternion.fromArray(l):q.rotation.fromArray(g),q.scale.fromArray(h),q.visible=void 0!==r.visible?r.visible:!1,a.add(q),B.objects[n]=q,B.empties[n]=q);if(q){if(void 0!==r.userData)for(var z in r.userData)q.userData[z]=r.userData[z];if(void 0!==r.groups)for(u=0;u<r.groups.length;u++)c=r.groups[u],void 0===B.groups[c]&&(B.groups[c]=[]),B.groups[c].push(n)}}void 0!==q&&void 0!==r.children&&
f(q,r.children)}}function g(a,b,c,d,f){var g=f.rotation,h=f.quaternion,k=f.scale;a.position.fromArray(f.position);h?a.quaternion.fromArray(h):a.rotation.fromArray(g);a.scale.fromArray(k);d&&a.traverse(function(a){a.material=d});var l=void 0!==f.visible?f.visible:!0;a.traverse(function(a){a.visible=l});c.add(a);a.name=b;B.objects[b]=a;e()}function h(a){return function(b,c){b.name=a;B.geometries[a]=b;B.face_materials[a]=c;e();z-=1;s.onLoadComplete();n()}}function k(a,b,c,d){return function(e){g(e.content?
e.content:e.dae?e.scene:e,a,b,c,d);z-=1;s.onLoadComplete();n()}}function l(a){return function(b,c){b.name=a;B.geometries[a]=b;B.face_materials[a]=c}}function n(){s.callbackProgress({totalModels:P,totalTextures:C,loadedModels:P-z,loadedTextures:C-F},B);s.onLoadProgress();if(0===z&&0===F){for(var a=0;a<A.length;a++){var c=A[a],d=B.objects[c.targetName];d?c.object.target=d:(c.object.target=new THREE.Object3D,B.scene.add(c.object.target));c.object.target.userData.targetInverse=c.object}b(B)}}function q(a,
b){b(a);if(void 0!==a.children)for(var c in a.children)q(a.children[c],b)}var s=this,u=THREE.Loader.prototype.extractUrlBase(c),t,p,v,w,r,x,z,F,P,C,B,A=[],I=a,H;for(H in this.geometryHandlers)a=this.geometryHandlers[H].loaderClass,this.geometryHandlers[H].loaderObject=new a;for(H in this.hierarchyHandlers)a=this.hierarchyHandlers[H].loaderClass,this.hierarchyHandlers[H].loaderObject=new a;F=z=0;B={scene:new THREE.Scene,geometries:{},face_materials:{},materials:{},textures:{},objects:{},cameras:{},
lights:{},fogs:{},empties:{},groups:{}};I.transform&&(H=I.transform.position,a=I.transform.rotation,c=I.transform.scale,H&&B.scene.position.fromArray(H),a&&B.scene.rotation.fromArray(a),c&&B.scene.scale.fromArray(c),H||a||c)&&(B.scene.updateMatrix(),B.scene.updateMatrixWorld());H=function(a){return function(){F-=a;n();s.onLoadComplete()}};for(var N in I.fogs)a=I.fogs[N],"linear"===a.type?w=new THREE.Fog(0,a.near,a.far):"exp2"===a.type&&(w=new THREE.FogExp2(0,a.density)),a=a.color,w.color.setRGB(a[0],
a[1],a[2]),B.fogs[N]=w;for(var y in I.geometries)w=I.geometries[y],w.type in this.geometryHandlers&&(z+=1,s.onLoadStart());for(var K in I.objects)q(I.objects[K],function(a){a.type&&a.type in s.hierarchyHandlers&&(z+=1,s.onLoadStart())});P=z;for(y in I.geometries)if(w=I.geometries[y],"cube"===w.type)t=new THREE.BoxGeometry(w.width,w.height,w.depth,w.widthSegments,w.heightSegments,w.depthSegments),t.name=y,B.geometries[y]=t;else if("plane"===w.type)t=new THREE.PlaneGeometry(w.width,w.height,w.widthSegments,
w.heightSegments),t.name=y,B.geometries[y]=t;else if("sphere"===w.type)t=new THREE.SphereGeometry(w.radius,w.widthSegments,w.heightSegments),t.name=y,B.geometries[y]=t;else if("cylinder"===w.type)t=new THREE.CylinderGeometry(w.topRad,w.botRad,w.height,w.radSegs,w.heightSegs),t.name=y,B.geometries[y]=t;else if("torus"===w.type)t=new THREE.TorusGeometry(w.radius,w.tube,w.segmentsR,w.segmentsT),t.name=y,B.geometries[y]=t;else if("icosahedron"===w.type)t=new THREE.IcosahedronGeometry(w.radius,w.subdivisions),
t.name=y,B.geometries[y]=t;else if(w.type in this.geometryHandlers){K={};for(r in w)"type"!==r&&"url"!==r&&(K[r]=w[r]);this.geometryHandlers[w.type].loaderObject.load(d(w.url,I.urlBaseType),h(y),K)}else"embedded"===w.type&&(K=I.embeds[w.id],K.metadata=I.metadata,K&&(K=this.geometryHandlers.ascii.loaderObject.parse(K,""),l(y)(K.geometry,K.materials)));for(var D in I.textures)if(y=I.textures[D],y.url instanceof Array)for(F+=y.url.length,r=0;r<y.url.length;r++)s.onLoadStart();else F+=1,s.onLoadStart();
C=F;for(D in I.textures){y=I.textures[D];void 0!==y.mapping&&void 0!==THREE[y.mapping]&&(y.mapping=new THREE[y.mapping]);if(y.url instanceof Array){K=y.url.length;w=[];for(r=0;r<K;r++)w[r]=d(y.url[r],I.urlBaseType);r=(r=/\.dds$/i.test(w[0]))?THREE.ImageUtils.loadCompressedTextureCube(w,y.mapping,H(K)):THREE.ImageUtils.loadTextureCube(w,y.mapping,H(K))}else r=/\.dds$/i.test(y.url),K=d(y.url,I.urlBaseType),w=H(1),r=r?THREE.ImageUtils.loadCompressedTexture(K,y.mapping,w):THREE.ImageUtils.loadTexture(K,
y.mapping,w),void 0!==THREE[y.minFilter]&&(r.minFilter=THREE[y.minFilter]),void 0!==THREE[y.magFilter]&&(r.magFilter=THREE[y.magFilter]),y.anisotropy&&(r.anisotropy=y.anisotropy),y.repeat&&(r.repeat.set(y.repeat[0],y.repeat[1]),1!==y.repeat[0]&&(r.wrapS=THREE.RepeatWrapping),1!==y.repeat[1]&&(r.wrapT=THREE.RepeatWrapping)),y.offset&&r.offset.set(y.offset[0],y.offset[1]),y.wrap&&(K={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==K[y.wrap[0]]&&(r.wrapS=K[y.wrap[0]]),void 0!==
K[y.wrap[1]]&&(r.wrapT=K[y.wrap[1]]));B.textures[D]=r}var E,G;for(E in I.materials){D=I.materials[E];for(G in D.parameters)"envMap"===G||"map"===G||"lightMap"===G||"bumpMap"===G?D.parameters[G]=B.textures[D.parameters[G]]:"shading"===G?D.parameters[G]="flat"===D.parameters[G]?THREE.FlatShading:THREE.SmoothShading:"side"===G?D.parameters[G]="double"==D.parameters[G]?THREE.DoubleSide:"back"==D.parameters[G]?THREE.BackSide:THREE.FrontSide:"blending"===G?D.parameters[G]=D.parameters[G]in THREE?THREE[D.parameters[G]]:
THREE.NormalBlending:"combine"===G?D.parameters[G]=D.parameters[G]in THREE?THREE[D.parameters[G]]:THREE.MultiplyOperation:"vertexColors"===G?"face"==D.parameters[G]?D.parameters[G]=THREE.FaceColors:D.parameters[G]&&(D.parameters[G]=THREE.VertexColors):"wrapRGB"===G&&(H=D.parameters[G],D.parameters[G]=new THREE.Vector3(H[0],H[1],H[2]));void 0!==D.parameters.opacity&&1>D.parameters.opacity&&(D.parameters.transparent=!0);D.parameters.normalMap?(H=THREE.ShaderLib.normalmap,y=THREE.UniformsUtils.clone(H.uniforms),
r=D.parameters.color,K=D.parameters.specular,w=D.parameters.ambient,N=D.parameters.shininess,y.tNormal.value=B.textures[D.parameters.normalMap],D.parameters.normalScale&&y.uNormalScale.value.set(D.parameters.normalScale[0],D.parameters.normalScale[1]),D.parameters.map&&(y.tDiffuse.value=D.parameters.map,y.enableDiffuse.value=!0),D.parameters.envMap&&(y.tCube.value=D.parameters.envMap,y.enableReflection.value=!0,y.reflectivity.value=D.parameters.reflectivity),D.parameters.lightMap&&(y.tAO.value=D.parameters.lightMap,
y.enableAO.value=!0),D.parameters.specularMap&&(y.tSpecular.value=B.textures[D.parameters.specularMap],y.enableSpecular.value=!0),D.parameters.displacementMap&&(y.tDisplacement.value=B.textures[D.parameters.displacementMap],y.enableDisplacement.value=!0,y.uDisplacementBias.value=D.parameters.displacementBias,y.uDisplacementScale.value=D.parameters.displacementScale),y.diffuse.value.setHex(r),y.specular.value.setHex(K),y.ambient.value.setHex(w),y.shininess.value=N,D.parameters.opacity&&(y.opacity.value=
D.parameters.opacity),p=new THREE.ShaderMaterial({fragmentShader:H.fragmentShader,vertexShader:H.vertexShader,uniforms:y,lights:!0,fog:!0})):p=new THREE[D.type](D.parameters);p.name=E;B.materials[E]=p}for(E in I.materials)if(D=I.materials[E],D.parameters.materials){G=[];for(r=0;r<D.parameters.materials.length;r++)G.push(B.materials[D.parameters.materials[r]]);B.materials[E].materials=G}e();B.cameras&&I.defaults.camera&&(B.currentCamera=B.cameras[I.defaults.camera]);B.fogs&&I.defaults.fog&&(B.scene.fog=
B.fogs[I.defaults.fog]);s.callbackSync(B);n()}};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){c=new THREE.ImageLoader(this.manager);c.setCrossOrigin(this.crossOrigin);c.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)})},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.Material=function(){this.id=THREE.MaterialIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;
a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=
this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;
a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.wrapAround=this.metal=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=
1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a};THREE.ParticleSystemMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.ParticleSystemMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleSystemMaterial.prototype.clone=function(){var a=new THREE.ParticleSystemMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=THREE.ParticleSystemMaterial;THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.vertexShader=this.fragmentShader="void main() {}";this.uniforms={};this.defines={};this.attributes=null;this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName="position";this.setValues(a)};
THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};THREE.SpriteCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(a,c){};this.setValues(a)};THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteCanvasMaterial.prototype.clone=function(){var a=new THREE.SpriteCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleCanvasMaterial=THREE.SpriteCanvasMaterial;THREE.Texture=function(a,b,c,d,e,f,g,h,k){this.id=THREE.TextureIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.image=a;this.mipmaps=[];this.mapping=void 0!==b?b:new THREE.UVMapping;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;
this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,l,n){THREE.Texture.call(this,null,f,g,h,k,l,d,e,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,l,n){THREE.Texture.call(this,null,f,g,h,k,l,d,e,n);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.ParticleSystemMaterial({color:16777215*Math.random()});this.frustumCulled=this.sortParticles=!1};THREE.ParticleSystem.prototype=Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone=function(a){void 0===a&&(a=new THREE.ParticleSystem(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};THREE.Mesh.prototype.clone=function(a){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.update=function(a,b){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiplyMatrices(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.skinMatrix,b)};THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var d,e,f;if(this.geometry&&void 0!==this.geometry.bones){for(a=0;a<this.geometry.bones.length;a++)c=this.geometry.bones[a],d=c.pos,e=c.rotq,f=c.scl,b=this.addBone(),b.name=c.name,b.position.set(d[0],d[1],d[2]),b.quaternion.set(e[0],e[1],e[2],e[3]),void 0!==f?b.scale.set(f[0],f[1],f[2]):b.scale.set(1,1,1);for(a=0;a<this.bones.length;a++)c=
this.geometry.bones[a],b=this.bones[a],-1===c.parent?this.add(b):this.bones[c.parent].add(b);a=this.bones.length;this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<a?64:64<a?32:16<a?16:8,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=
THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*a);this.pose()}};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.addBone=function(a){void 0===a&&(a=new THREE.Bone(this));this.bones.push(a);return a};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(){var a=new THREE.Matrix4;return function(b){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||b)this.parent?this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1;b=0;for(var c=this.children.length;b<c;b++){var d=this.children[b];d instanceof THREE.Bone?d.update(this.identityMatrix,!1):d.updateMatrixWorld(!0)}if(void 0==this.boneInverses)for(this.boneInverses=
[],b=0,c=this.bones.length;b<c;b++)d=new THREE.Matrix4,d.getInverse(this.bones[b].skinMatrix),this.boneInverses.push(d);b=0;for(c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b].skinMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();THREE.SkinnedMesh.prototype.pose=function(){this.updateMatrixWorld(!0);this.normalizeSkinWeights()};
THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};
THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();
THREE.LOD.prototype.clone=function(a){void 0===a&&(a=new THREE.LOD);THREE.Object3D.prototype.clone.call(this,a);for(var b=0,c=this.objects.length;b<c;b++){var d=this.objects[b].object.clone();d.visible=0===b;a.addLevel(d,this.objects[b].distance)}return a};THREE.Sprite=function(){var a=new THREE.Geometry2(3);a.vertices.set([-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0]);return function(b){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.SpriteMaterial}}();THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.updateMatrix=function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0};
THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Particle=THREE.Sprite;THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.autoUpdate=!0;this.matrixAutoUpdate=!1;this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)){this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}this.dispatchEvent({type:"objectAdded",object:a});a.dispatchEvent({type:"addedToScene",scene:this});for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1);if(a.shadowCascadeArray)for(b=0;b<a.shadowCascadeArray.length;b++)this.__removeObject(a.shadowCascadeArray[b])}else a instanceof THREE.Camera||(this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1));this.dispatchEvent({type:"objectRemoved",object:a});a.dispatchEvent({type:"removedFromScene",scene:this});for(b=
0;b<a.children.length;b++)this.__removeObject(a.children[b])};THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.CanvasRenderer=function(a){function b(a,b,c){for(var d=0,e=P.length;d<e;d++){var f=P[d];Ta.copy(f.color);if(f instanceof THREE.DirectionalLight){var g=fa.setFromMatrixPosition(f.matrixWorld).normalize(),h=b.dot(g);0>=h||(h*=f.intensity,c.add(Ta.multiplyScalar(h)))}else f instanceof THREE.PointLight&&(g=fa.setFromMatrixPosition(f.matrixWorld),h=b.dot(fa.subVectors(g,a).normalize()),0>=h||(h*=0==f.distance?1:1-Math.min(a.distanceTo(g)/f.distance,1),0!=h&&(h*=f.intensity,c.add(Ta.multiplyScalar(h)))))}}
function c(a,b,c,d){s(b);u(c);t(d);p(a.getStyle());y.stroke();va.expandByScalar(2*b)}function d(a){v(a.getStyle());y.fill()}function e(a){f(a.target)}function f(a){var b=a.wrapS===THREE.RepeatWrapping,c=a.wrapT===THREE.RepeatWrapping,d=a.image,e=document.createElement("canvas");e.width=d.width;e.height=d.height;var f=e.getContext("2d");f.setTransform(1,0,0,-1,0,d.height);f.drawImage(d,0,0);ma[a.id]=y.createPattern(e,!0===b&&!0===c?"repeat":!0===b&&!1===c?"repeat-x":!1===b&&!0===c?"repeat-y":"no-repeat")}
function g(a,b,c,d,g,h,m,k,l,p,n,q,r){if(!(r instanceof THREE.DataTexture)){!1===r.hasEventListener("update",e)&&(void 0!==r.image&&0<r.image.width&&f(r),r.addEventListener("update",e));var s=ma[r.id];if(void 0!==s){v(s);var s=r.offset.x/r.repeat.x,u=r.offset.y/r.repeat.y,t=r.image.width*r.repeat.x;r=r.image.height*r.repeat.y;m=(m+s)*t;k=(k+u)*r;c-=a;d-=b;g-=a;h-=b;l=(l+s)*t-m;p=(p+u)*r-k;n=(n+s)*t-m;q=(q+u)*r-k;r=l*q-n*p;0!==r&&(s=1/r,r=(q*c-p*g)*s,p=(q*d-p*h)*s,c=(l*g-n*c)*s,d=(l*h-n*d)*s,a=a-r*
m-c*k,b=b-p*m-d*k,y.save(),y.transform(r,p,c,d,a,b),y.fill(),y.restore())}else v("rgba(0,0,0,1)"),y.fill()}}function h(a,b,c,d,e,f,g,h,m,k,l,p,n){var r,q;r=n.width-1;q=n.height-1;g*=r;h*=q;c-=a;d-=b;e-=a;f-=b;m=m*r-g;k=k*q-h;l=l*r-g;p=p*q-h;q=1/(m*p-l*k);r=(p*c-k*e)*q;k=(p*d-k*f)*q;c=(m*e-l*c)*q;d=(m*f-l*d)*q;a=a-r*g-c*h;b=b-k*g-d*h;y.save();y.transform(r,k,c,d,a,b);y.clip();y.drawImage(n,0,0);y.restore()}function k(a,b,c,d){wa[0]=255*a.r|0;wa[1]=255*a.g|0;wa[2]=255*a.b|0;wa[4]=255*b.r|0;wa[5]=255*
b.g|0;wa[6]=255*b.b|0;wa[8]=255*c.r|0;wa[9]=255*c.g|0;wa[10]=255*c.b|0;wa[12]=255*d.r|0;wa[13]=255*d.g|0;wa[14]=255*d.b|0;Ua.putImageData(jb,0,0);kb.drawImage(m,0,0);return xa}function l(a,b,c){var d=b.x-a.x,e=b.y-a.y,f=d*d+e*e;0!==f&&(c/=Math.sqrt(f),d*=c,e*=c,b.x+=d,b.y+=e,a.x-=d,a.y-=e)}function n(a){E!==a&&(E=y.globalAlpha=a)}function q(a){G!==a&&(a===THREE.NormalBlending?y.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?y.globalCompositeOperation="lighter":a===THREE.SubtractiveBlending&&
(y.globalCompositeOperation="darker"),G=a)}function s(a){V!==a&&(V=y.lineWidth=a)}function u(a){ja!==a&&(ja=y.lineCap=a)}function t(a){R!==a&&(R=y.lineJoin=a)}function p(a){T!==a&&(T=y.strokeStyle=a)}function v(a){Y!==a&&(Y=y.fillStyle=a)}function w(a,b){if(pa!==a||L!==b)y.setLineDash([a,b]),pa=a,L=b}console.log("THREE.CanvasRenderer",THREE.REVISION);var r=THREE.Math.smoothstep;a=a||{};var x=this,z,F,P,C=new THREE.Projector,B=void 0!==a.canvas?a.canvas:document.createElement("canvas"),A=B.width,I=
B.height,H=Math.floor(A/2),N=Math.floor(I/2),y=B.getContext("2d"),K=new THREE.Color(0),D=0,E=1,G=0,T=null,Y=null,V=null,ja=null,R=null,pa=null,L=0,ka,Q,U,O;new THREE.RenderableVertex;new THREE.RenderableVertex;var ga,za,Ia,Aa,Ga,ta,ra=new THREE.Color,Ja=new THREE.Color,Z=new THREE.Color,Ba=new THREE.Color,Sa=new THREE.Color,Ya=new THREE.Color,la=new THREE.Color,Ta=new THREE.Color,ma={},Oa,Ka,Pa,Ca,Da,na,Ra,Ea,Za,La,Fa=new THREE.Box2,ha=new THREE.Box2,va=new THREE.Box2,lb=new THREE.Color,Fb=new THREE.Color,
ya=new THREE.Color,fa=new THREE.Vector3,da=new THREE.Vector3,Ha=new THREE.Matrix3,m,Ua,jb,wa,xa,kb,ab=16;m=document.createElement("canvas");m.width=m.height=2;Ua=m.getContext("2d");Ua.fillStyle="rgba(0,0,0,1)";Ua.fillRect(0,0,2,2);jb=Ua.getImageData(0,0,2,2);wa=jb.data;xa=document.createElement("canvas");xa.width=xa.height=ab;kb=xa.getContext("2d");kb.translate(-ab/2,-ab/2);kb.scale(ab,ab);ab--;void 0===y.setLineDash&&(y.setLineDash=void 0!==y.mozDash?function(a){y.mozDash=null!==a[0]?a:null}:function(){});
this.domElement=B;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.supportsVertexTextures=function(){};this.setFaceCulling=function(){};this.setSize=function(a,b,c){A=a*this.devicePixelRatio;I=b*this.devicePixelRatio;H=Math.floor(A/2);N=Math.floor(I/2);B.width=A;B.height=I;1!==this.devicePixelRatio&&!1!==c&&(B.style.width=a+"px",
B.style.height=b+"px");Fa.min.set(-H,-N);Fa.max.set(H,N);ha.min.set(-H,-N);ha.max.set(H,N);E=1;G=0;R=ja=V=Y=T=null};this.setClearColor=function(a,b){K.set(a);D=void 0!==b?b:1;ha.min.set(-H,-N);ha.max.set(H,N)};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getMaxAnisotropy=function(){return 0};this.clear=function(){y.setTransform(1,0,0,-1,H,N);!1===ha.empty()&&(ha.intersect(Fa),ha.expandByScalar(2),
1>D&&y.clearRect(ha.min.x|0,ha.min.y|0,ha.max.x-ha.min.x|0,ha.max.y-ha.min.y|0),0<D&&(q(THREE.NormalBlending),n(1),v("rgba("+Math.floor(255*K.r)+","+Math.floor(255*K.g)+","+Math.floor(255*K.b)+","+D+")"),y.fillRect(ha.min.x|0,ha.min.y|0,ha.max.x-ha.min.x|0,ha.max.y-ha.min.y|0)),ha.makeEmpty())};this.clearColor=function(){};this.clearDepth=function(){};this.clearStencil=function(){};this.render=function(a,m){if(!1===m instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
else{!0===this.autoClear&&this.clear();y.setTransform(1,0,0,-1,H,N);x.info.render.vertices=0;x.info.render.faces=0;z=C.projectScene(a,m,this.sortObjects,this.sortElements);F=z.elements;P=z.lights;ka=m;Ha.getNormalMatrix(m.matrixWorldInverse);lb.setRGB(0,0,0);Fb.setRGB(0,0,0);ya.setRGB(0,0,0);for(var B=0,I=P.length;B<I;B++){var G=P[B],D=G.color;G instanceof THREE.AmbientLight?lb.add(D):G instanceof THREE.DirectionalLight?Fb.add(D):G instanceof THREE.PointLight&&ya.add(D)}B=0;for(I=F.length;B<I;B++){var A=
F[B],E=A.material;if(void 0!==E&&!1!==E.visible){va.makeEmpty();if(A instanceof THREE.RenderableSprite){Q=A;Q.x*=H;Q.y*=N;G=Q;D=E;n(D.opacity);q(D.blending);var K=A.scale.x*H,A=A.scale.y*N,E=0.5*Math.sqrt(K*K+A*A);va.min.set(G.x-E,G.y-E);va.max.set(G.x+E,G.y+E);if(D instanceof THREE.SpriteMaterial||D instanceof THREE.ParticleSystemMaterial){var L=D.map;if(null!==L){!1===L.hasEventListener("update",e)&&(void 0!==L.image&&0<L.image.width&&f(L),L.addEventListener("update",e));E=ma[L.id];void 0!==E?v(E):
v("rgba( 0, 0, 0, 1 )");var T=L.image,E=T.width*L.offset.x,V=T.height*L.offset.y,Y=T.width*L.repeat.x,L=T.height*L.repeat.y,T=K/Y,R=A/L;y.save();y.translate(G.x,G.y);0!==D.rotation&&y.rotate(D.rotation);y.translate(-K/2,-A/2);y.scale(T,R);y.translate(-E,-V);y.fillRect(E,V,Y,L)}else v(D.color.getStyle()),y.save(),y.translate(G.x,G.y),0!==D.rotation&&y.rotate(D.rotation),y.scale(K,-A),y.fillRect(-0.5,-0.5,1,1);y.restore()}else D instanceof THREE.SpriteCanvasMaterial&&(p(D.color.getStyle()),v(D.color.getStyle()),
y.save(),y.translate(G.x,G.y),0!==D.rotation&&y.rotate(D.rotation),y.scale(K,A),D.program(y),y.restore())}else if(A instanceof THREE.RenderableLine){if(Q=A.v1,U=A.v2,Q.positionScreen.x*=H,Q.positionScreen.y*=N,U.positionScreen.x*=H,U.positionScreen.y*=N,va.setFromPoints([Q.positionScreen,U.positionScreen]),!0===Fa.isIntersectionBox(va))if(G=Q,D=U,K=A,A=E,n(A.opacity),q(A.blending),y.beginPath(),y.moveTo(G.positionScreen.x,G.positionScreen.y),y.lineTo(D.positionScreen.x,D.positionScreen.y),A instanceof
THREE.LineBasicMaterial){s(A.linewidth);u(A.linecap);t(A.linejoin);if(A.vertexColors!==THREE.VertexColors)p(A.color.getStyle());else if(E=K.vertexColors[0].getStyle(),K=K.vertexColors[1].getStyle(),E===K)p(E);else{try{var fa=y.createLinearGradient(G.positionScreen.x,G.positionScreen.y,D.positionScreen.x,D.positionScreen.y);fa.addColorStop(0,E);fa.addColorStop(1,K)}catch(ja){fa=E}p(fa)}y.stroke();va.expandByScalar(2*A.linewidth)}else A instanceof THREE.LineDashedMaterial&&(s(A.linewidth),u(A.linecap),
t(A.linejoin),p(A.color.getStyle()),w(A.dashSize,A.gapSize),y.stroke(),va.expandByScalar(2*A.linewidth),w(null,null))}else if(A instanceof THREE.RenderableFace){Q=A.v1;U=A.v2;O=A.v3;if(-1>Q.positionScreen.z||1<Q.positionScreen.z)continue;if(-1>U.positionScreen.z||1<U.positionScreen.z)continue;if(-1>O.positionScreen.z||1<O.positionScreen.z)continue;Q.positionScreen.x*=H;Q.positionScreen.y*=N;U.positionScreen.x*=H;U.positionScreen.y*=N;O.positionScreen.x*=H;O.positionScreen.y*=N;0<E.overdraw&&(l(Q.positionScreen,
U.positionScreen,E.overdraw),l(U.positionScreen,O.positionScreen,E.overdraw),l(O.positionScreen,Q.positionScreen,E.overdraw));va.setFromPoints([Q.positionScreen,U.positionScreen,O.positionScreen]);if(!0===Fa.isIntersectionBox(va)){G=Q;D=U;K=O;x.info.render.vertices+=3;x.info.render.faces++;n(E.opacity);q(E.blending);ga=G.positionScreen.x;za=G.positionScreen.y;Ia=D.positionScreen.x;Aa=D.positionScreen.y;Ga=K.positionScreen.x;ta=K.positionScreen.y;var V=ga,Y=za,L=Ia,T=Aa,R=Ga,yc=ta;y.beginPath();y.moveTo(V,
Y);y.lineTo(L,T);y.lineTo(R,yc);y.closePath();(E instanceof THREE.MeshLambertMaterial||E instanceof THREE.MeshPhongMaterial)&&null===E.map?(Ya.copy(E.color),la.copy(E.emissive),E.vertexColors===THREE.FaceColors&&Ya.multiply(A.color),!1===E.wireframe&&E.shading===THREE.SmoothShading&&3===A.vertexNormalsLength?(Ja.copy(lb),Z.copy(lb),Ba.copy(lb),b(A.v1.positionWorld,A.vertexNormalsModel[0],Ja),b(A.v2.positionWorld,A.vertexNormalsModel[1],Z),b(A.v3.positionWorld,A.vertexNormalsModel[2],Ba),Ja.multiply(Ya).add(la),
Z.multiply(Ya).add(la),Ba.multiply(Ya).add(la),Sa.addColors(Z,Ba).multiplyScalar(0.5),Pa=k(Ja,Z,Ba,Sa),h(ga,za,Ia,Aa,Ga,ta,0,0,1,0,0,1,Pa)):(ra.copy(lb),b(A.centroidModel,A.normalModel,ra),ra.multiply(Ya).add(la),!0===E.wireframe?c(ra,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):d(ra))):E instanceof THREE.MeshBasicMaterial||E instanceof THREE.MeshLambertMaterial||E instanceof THREE.MeshPhongMaterial?null!==E.map?E.map.mapping instanceof THREE.UVMapping&&(Ca=A.uvs[0],g(ga,za,Ia,Aa,
Ga,ta,Ca[0].x,Ca[0].y,Ca[1].x,Ca[1].y,Ca[2].x,Ca[2].y,E.map)):null!==E.envMap?E.envMap.mapping instanceof THREE.SphericalReflectionMapping&&(da.copy(A.vertexNormalsModel[0]).applyMatrix3(Ha),Da=0.5*da.x+0.5,na=0.5*da.y+0.5,da.copy(A.vertexNormalsModel[1]).applyMatrix3(Ha),Ra=0.5*da.x+0.5,Ea=0.5*da.y+0.5,da.copy(A.vertexNormalsModel[2]).applyMatrix3(Ha),Za=0.5*da.x+0.5,La=0.5*da.y+0.5,g(ga,za,Ia,Aa,Ga,ta,Da,na,Ra,Ea,Za,La,E.envMap)):(ra.copy(E.color),E.vertexColors===THREE.FaceColors&&ra.multiply(A.color),
!0===E.wireframe?c(ra,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):d(ra)):E instanceof THREE.MeshDepthMaterial?(Oa=ka.near,Ka=ka.far,Ja.r=Ja.g=Ja.b=1-r(G.positionScreen.z*G.positionScreen.w,Oa,Ka),Z.r=Z.g=Z.b=1-r(D.positionScreen.z*D.positionScreen.w,Oa,Ka),Ba.r=Ba.g=Ba.b=1-r(K.positionScreen.z*K.positionScreen.w,Oa,Ka),Sa.addColors(Z,Ba).multiplyScalar(0.5),Pa=k(Ja,Z,Ba,Sa),h(ga,za,Ia,Aa,Ga,ta,0,0,1,0,0,1,Pa)):E instanceof THREE.MeshNormalMaterial&&(E.shading===THREE.FlatShading?
(da.copy(A.normalModel).applyMatrix3(Ha),ra.setRGB(da.x,da.y,da.z).multiplyScalar(0.5).addScalar(0.5),!0===E.wireframe?c(ra,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):d(ra)):E.shading===THREE.SmoothShading&&(da.copy(A.vertexNormalsModel[0]).applyMatrix3(Ha),Ja.setRGB(da.x,da.y,da.z).multiplyScalar(0.5).addScalar(0.5),da.copy(A.vertexNormalsModel[1]).applyMatrix3(Ha),Z.setRGB(da.x,da.y,da.z).multiplyScalar(0.5).addScalar(0.5),da.copy(A.vertexNormalsModel[2]).applyMatrix3(Ha),Ba.setRGB(da.x,
da.y,da.z).multiplyScalar(0.5).addScalar(0.5),Sa.addColors(Z,Ba).multiplyScalar(0.5),Pa=k(Ja,Z,Ba,Sa),h(ga,za,Ia,Aa,Ga,ta,0,0,1,0,0,1,Pa)))}}ha.union(va)}}y.setTransform(1,0,0,1,0,0)}}};THREE.ShaderChunk={fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
envmap_pars_fragment:"#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",envmap_fragment:"#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
envmap_pars_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
envmap_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",map_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",map_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",map_fragment:"#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",lights_lambert_pars_vertex:"uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
lights_lambert_vertex:"vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
lights_phong_pars_vertex:"#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",lights_phong_vertex:"#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",lights_phong_pars_fragment:"uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
lights_phong_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nuniform int boneTextureWidth;\nuniform int boneTextureHeight;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, float( boneTextureWidth ) );\nfloat y = floor( j / float( boneTextureWidth ) );\nfloat dx = 1.0 / float( boneTextureWidth );\nfloat dy = 1.0 / float( boneTextureHeight );\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
skinbase_vertex:"#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\nmat4 boneMatZ = getBoneMatrix( skinIndex.z );\nmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned      += boneMatY * skinVertex * skinWeight.y;\nskinned      += boneMatZ * skinVertex * skinWeight.z;\nskinned      += boneMatW * skinVertex * skinWeight.w;\n#endif",
morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
default_vertex:"vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
skinnormal_vertex:"#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",defaultnormal_vertex:"vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",shadowmap_fragment:"#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#if defined( SHADOWMAP_TYPE_PCF )\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\nfloat shadow = 0.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.0 * xPixelOffset;\nfloat dy0 = -1.0 * yPixelOffset;\nfloat dx1 = 1.0 * xPixelOffset;\nfloat dy1 = 1.0 * yPixelOffset;\nmat3 shadowKernel;\nmat3 depthKernel;\ndepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\ndepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\ndepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\ndepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\ndepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\ndepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\ndepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\ndepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\ndepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nvec3 shadowZ = vec3( shadowCoord.z );\nshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\nshadowKernel[0] *= vec3(0.25);\nshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\nshadowKernel[1] *= vec3(0.25);\nshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\nshadowKernel[2] *= vec3(0.25);\nvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\nshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\nshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\nvec4 shadowValues;\nshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\nshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\nshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\nshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\nshadow = dot( shadowValues, vec4( 1.0 ) );\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",alphatest_fragment:"#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",linear_to_gamma_fragment:"#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"};THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",
value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",
value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",
value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,
THREE.ShaderChunk.skinbase_vertex,"#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,
THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,
THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,
THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif",THREE.ShaderChunk.lightmap_fragment,
THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",
value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"vNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,
THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",
value:1}},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvNormal = normalize( normalMatrix * normal );",
THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"},normalmap:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",
value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},diffuse:{type:"c",value:new THREE.Color(16777215)},specular:{type:"c",value:new THREE.Color(1118481)},ambient:{type:"c",value:new THREE.Color(16777215)},shininess:{type:"f",value:30},
opacity:{type:"f",value:1},useRefract:{type:"i",value:0},refractionRatio:{type:"f",value:0.98},reflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float refractionRatio;\nuniform float reflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3( 1.0 ), opacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );\n}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"].join("\n")},
cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:"varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"},
depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"}};THREE.WebGLRenderer=function(a){function b(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var g=1;"v2"===f.type?g=2:"v3"===f.type?g=3:"v4"===f.type?g=4:"c"===f.type&&(g=3);f.size=g;f.array=new Float32Array(c*g);f.buffer=m.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}
function c(a,b){var c=b.geometry,g=a.faces3,h=3*g.length,k=1*g.length,l=3*g.length,g=d(b,a),p=f(g),n=e(g),r=g.vertexColors?g.vertexColors:!1;a.__vertexArray=new Float32Array(3*h);n&&(a.__normalArray=new Float32Array(3*h));c.hasTangents&&(a.__tangentArray=new Float32Array(4*h));r&&(a.__colorArray=new Float32Array(3*h));p&&(0<c.faceVertexUvs.length&&(a.__uvArray=new Float32Array(2*h)),1<c.faceVertexUvs.length&&(a.__uv2Array=new Float32Array(2*h)));b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&
(a.__skinIndexArray=new Float32Array(4*h),a.__skinWeightArray=new Float32Array(4*h));a.__faceArray=new Uint16Array(3*k);a.__lineArray=new Uint16Array(2*l);if(a.numMorphTargets)for(a.__morphTargetsArrays=[],c=0,p=a.numMorphTargets;c<p;c++)a.__morphTargetsArrays.push(new Float32Array(3*h));if(a.numMorphNormals)for(a.__morphNormalsArrays=[],c=0,p=a.numMorphNormals;c<p;c++)a.__morphNormalsArrays.push(new Float32Array(3*h));a.__webglFaceCount=3*k;a.__webglLineCount=2*l;if(g.attributes){void 0===a.__webglCustomAttributesList&&
(a.__webglCustomAttributesList=[]);for(var q in g.attributes){var k=g.attributes[q],l={},s;for(s in k)l[s]=k[s];if(!l.__webglInitialized||l.createUniqueBuffers)l.__webglInitialized=!0,c=1,"v2"===l.type?c=2:"v3"===l.type?c=3:"v4"===l.type?c=4:"c"===l.type&&(c=3),l.size=c,l.array=new Float32Array(h*c),l.buffer=m.createBuffer(),l.buffer.belongsToAttribute=q,k.needsUpdate=!0,l.__original=k;a.__webglCustomAttributesList.push(l)}}a.__inittedArrays=!0}function d(a,b){return a.material instanceof THREE.MeshFaceMaterial?
a.material.materials[b.materialIndex]:a.material}function e(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function f(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a instanceof THREE.ShaderMaterial?!0:!1}function g(a,b,c,d){var e,f,g,k;for(f in b)g=b[f],e=c[f],0<=g&&(e?(k=e.itemSize,m.bindBuffer(m.ARRAY_BUFFER,e.buffer),h(g),m.vertexAttribPointer(g,
k,m.FLOAT,!1,0,d*k*4)):a.defaultAttributeValues&&(2===a.defaultAttributeValues[f].length?m.vertexAttrib2fv(g,a.defaultAttributeValues[f]):3===a.defaultAttributeValues[f].length&&m.vertexAttrib3fv(g,a.defaultAttributeValues[f])))}function h(a){0===ha[a]&&(m.enableVertexAttribArray(a),ha[a]=1)}function k(){for(var a in ha)1===ha[a]&&(m.disableVertexAttribArray(a),ha[a]=0)}function l(a,b){return a.z!==b.z?b.z-a.z:a.id-b.id}function n(a,b){return b[0]-a[0]}function q(a,b,c){if(a.length)for(var d=0,e=
a.length;d<e;d++)ra=Ia=null,Ga=ta=Ba=Z=Oa=ma=Sa=-1,da=!0,a[d].render(b,c,La,Fa),ra=Ia=null,Ga=ta=Ba=Z=Oa=ma=Sa=-1,da=!0}function s(a,b,c,d,e,f,g,h){var k,m,l,p;b?(m=a.length-1,p=b=-1):(m=0,b=a.length,p=1);for(var n=m;n!==b;n+=p)if(k=a[n],k.render){m=k.object;l=k.buffer;if(h)k=h;else{k=k[c];if(!k)continue;g&&O.setBlending(k.blending,k.blendEquation,k.blendSrc,k.blendDst);O.setDepthTest(k.depthTest);O.setDepthWrite(k.depthWrite);I(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits)}O.setMaterialFaces(k);
l instanceof THREE.BufferGeometry?O.renderBufferDirect(d,e,f,k,l,m):l instanceof THREE.Geometry2?O.renderBufferGeometry2(d,e,f,k,l,m):O.renderBuffer(d,e,f,k,l,m)}}function u(a,b,c,d,e,f,g){for(var h,k,m=0,l=a.length;m<l;m++)if(h=a[m],k=h.object,k.visible){if(g)h=g;else{h=h[b];if(!h)continue;f&&O.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);O.setDepthTest(h.depthTest);O.setDepthWrite(h.depthWrite);I(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits)}O.renderImmediateObject(c,
d,e,h,k)}}function t(a,d){var e,f,g;if(void 0===a.__webglInit&&(a.__webglInit=!0,a._modelViewMatrix=new THREE.Matrix4,a._normalMatrix=new THREE.Matrix3,void 0!==a.geometry&&void 0===a.geometry.__webglInit&&(a.geometry.__webglInit=!0,a.geometry.addEventListener("dispose",Pb)),f=a.geometry,void 0!==f))if(f instanceof THREE.BufferGeometry){var h,k;for(h in f.attributes)k="index"===h?m.ELEMENT_ARRAY_BUFFER:m.ARRAY_BUFFER,g=f.attributes[h],g.buffer=m.createBuffer(),m.bindBuffer(k,g.buffer),m.bufferData(k,
g.array,m.STATIC_DRAW)}else if(f instanceof THREE.Geometry2){h={};k=["vertices","normals","uvs"];for(g in k){var l=f[k[g]],n=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,n);m.bufferData(m.ARRAY_BUFFER,l,m.STATIC_DRAW);h[k[g]]=n}V[f.id]=h}else if(a instanceof THREE.Mesh)for(e in g=a.material,void 0===f.geometryGroups&&f.makeGroups(g instanceof THREE.MeshFaceMaterial),f.geometryGroups){if(g=f.geometryGroups[e],!g.__webglVertexBuffer){h=g;h.__webglVertexBuffer=m.createBuffer();h.__webglNormalBuffer=
m.createBuffer();h.__webglTangentBuffer=m.createBuffer();h.__webglColorBuffer=m.createBuffer();h.__webglUVBuffer=m.createBuffer();h.__webglUV2Buffer=m.createBuffer();h.__webglSkinIndicesBuffer=m.createBuffer();h.__webglSkinWeightsBuffer=m.createBuffer();h.__webglFaceBuffer=m.createBuffer();h.__webglLineBuffer=m.createBuffer();l=k=void 0;if(h.numMorphTargets)for(h.__webglMorphTargetsBuffers=[],k=0,l=h.numMorphTargets;k<l;k++)h.__webglMorphTargetsBuffers.push(m.createBuffer());if(h.numMorphNormals)for(h.__webglMorphNormalsBuffers=
[],k=0,l=h.numMorphNormals;k<l;k++)h.__webglMorphNormalsBuffers.push(m.createBuffer());O.info.memory.geometries++;c(g,a);f.verticesNeedUpdate=!0;f.morphTargetsNeedUpdate=!0;f.elementsNeedUpdate=!0;f.uvsNeedUpdate=!0;f.normalsNeedUpdate=!0;f.tangentsNeedUpdate=!0;f.colorsNeedUpdate=!0}}else a instanceof THREE.Line?f.__webglVertexBuffer||(g=f,g.__webglVertexBuffer=m.createBuffer(),g.__webglColorBuffer=m.createBuffer(),g.__webglLineDistanceBuffer=m.createBuffer(),O.info.memory.geometries++,g=f,h=g.vertices.length,
g.__vertexArray=new Float32Array(3*h),g.__colorArray=new Float32Array(3*h),g.__lineDistanceArray=new Float32Array(1*h),g.__webglLineCount=h,b(g,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0,f.lineDistancesNeedUpdate=!0):a instanceof THREE.ParticleSystem&&!f.__webglVertexBuffer&&(g=f,g.__webglVertexBuffer=m.createBuffer(),g.__webglColorBuffer=m.createBuffer(),O.info.memory.geometries++,g=f,h=g.vertices.length,g.__vertexArray=new Float32Array(3*h),g.__colorArray=new Float32Array(3*h),g.__sortArray=
[],g.__webglParticleCount=h,b(g,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0);if(void 0===a.__webglActive){if(a instanceof THREE.Mesh)if(f=a.geometry,f instanceof THREE.BufferGeometry)p(d.__webglObjects,f,a);else if(f instanceof THREE.Geometry2)p(d.__webglObjects,f,a);else{if(f instanceof THREE.Geometry)for(e in f.geometryGroups)g=f.geometryGroups[e],p(d.__webglObjects,g,a)}else a instanceof THREE.Line||a instanceof THREE.ParticleSystem?(f=a.geometry,p(d.__webglObjects,f,a)):a instanceof THREE.ImmediateRenderObject||
a.immediateRenderCallback?d.__webglObjectsImmediate.push({id:null,object:a,opaque:null,transparent:null,z:0}):a instanceof THREE.Sprite?d.__webglSprites.push(a):a instanceof THREE.LensFlare&&d.__webglFlares.push(a);a.__webglActive=!0}}function p(a,b,c){a.push({id:null,buffer:b,object:c,opaque:null,transparent:null,z:0})}function v(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function w(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function r(a,b){a instanceof
THREE.Mesh||a instanceof THREE.ParticleSystem||a instanceof THREE.Line?x(b.__webglObjects,a):a instanceof THREE.Sprite?z(b.__webglSprites,a):a instanceof THREE.LensFlare?z(b.__webglFlares,a):(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)&&x(b.__webglObjectsImmediate,a);delete a.__webglActive}function x(a,b){for(var c=a.length-1;0<=c;c--)a[c].object===b&&a.splice(c,1)}function z(a,b){for(var c=a.length-1;0<=c;c--)a[c]===b&&a.splice(c,1)}function F(a,b,c,d,e){Ja=0;d.needsUpdate&&
(d.program&&Jb(d),O.initMaterial(d,b,c,e),d.needsUpdate=!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(O.maxMorphTargets));var f=!1,g=d.program,h=g.uniforms,k=d.uniforms;g!==Ia&&(m.useProgram(g),Ia=g,f=!0);d.id!==Ga&&(Ga=d.id,f=!0);if(f||a!==ra)m.uniformMatrix4fv(h.projectionMatrix,!1,a.projectionMatrix.elements),a!==ra&&(ra=a);if(d.skinning)if(Eb&&e.useVertexTexture){if(null!==h.boneTexture){var l=P();m.uniform1i(h.boneTexture,l);O.setTexture(e.boneTexture,
l)}null!==h.boneTextureWidth&&m.uniform1i(h.boneTextureWidth,e.boneTextureWidth);null!==h.boneTextureHeight&&m.uniform1i(h.boneTextureHeight,e.boneTextureHeight)}else null!==h.boneGlobalMatrices&&m.uniformMatrix4fv(h.boneGlobalMatrices,!1,e.boneMatrices);if(f){c&&d.fog&&(k.fogColor.value=c.color,c instanceof THREE.Fog?(k.fogNear.value=c.near,k.fogFar.value=c.far):c instanceof THREE.FogExp2&&(k.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||
d.lights){if(da){var p,n=l=0,r=0,q,s,u,t=Ha,v=t.directional.colors,w=t.directional.positions,x=t.point.colors,z=t.point.positions,A=t.point.distances,F=t.spot.colors,D=t.spot.positions,I=t.spot.distances,H=t.spot.directions,K=t.spot.anglesCos,L=t.spot.exponents,N=t.hemi.skyColors,T=t.hemi.groundColors,S=t.hemi.positions,V=0,Y=0,U=0,Q=0,ga=0,Aa=0,za=0,ta=0,R=p=0;c=u=R=0;for(f=b.length;c<f;c++)if(p=b[c],!p.onlyShadow)if(q=p.color,s=p.intensity,u=p.distance,p instanceof THREE.AmbientLight)p.visible&&
(O.gammaInput?(l+=q.r*q.r,n+=q.g*q.g,r+=q.b*q.b):(l+=q.r,n+=q.g,r+=q.b));else if(p instanceof THREE.DirectionalLight){if(ga+=1,p.visible&&(fa.setFromMatrixPosition(p.matrixWorld),ya.setFromMatrixPosition(p.target.matrixWorld),fa.sub(ya),fa.normalize(),0!==fa.x||0!==fa.y||0!==fa.z))p=3*V,w[p]=fa.x,w[p+1]=fa.y,w[p+2]=fa.z,O.gammaInput?C(v,p,q,s*s):B(v,p,q,s),V+=1}else p instanceof THREE.PointLight?(Aa+=1,p.visible&&(R=3*Y,O.gammaInput?C(x,R,q,s*s):B(x,R,q,s),ya.setFromMatrixPosition(p.matrixWorld),
z[R]=ya.x,z[R+1]=ya.y,z[R+2]=ya.z,A[Y]=u,Y+=1)):p instanceof THREE.SpotLight?(za+=1,p.visible&&(R=3*U,O.gammaInput?C(F,R,q,s*s):B(F,R,q,s),ya.setFromMatrixPosition(p.matrixWorld),D[R]=ya.x,D[R+1]=ya.y,D[R+2]=ya.z,I[U]=u,fa.copy(ya),ya.setFromMatrixPosition(p.target.matrixWorld),fa.sub(ya),fa.normalize(),H[R]=fa.x,H[R+1]=fa.y,H[R+2]=fa.z,K[U]=Math.cos(p.angle),L[U]=p.exponent,U+=1)):p instanceof THREE.HemisphereLight&&(ta+=1,p.visible&&(fa.setFromMatrixPosition(p.matrixWorld),fa.normalize(),0!==fa.x||
0!==fa.y||0!==fa.z))&&(u=3*Q,S[u]=fa.x,S[u+1]=fa.y,S[u+2]=fa.z,q=p.color,p=p.groundColor,O.gammaInput?(s*=s,C(N,u,q,s),C(T,u,p,s)):(B(N,u,q,s),B(T,u,p,s)),Q+=1);c=3*V;for(f=Math.max(v.length,3*ga);c<f;c++)v[c]=0;c=3*Y;for(f=Math.max(x.length,3*Aa);c<f;c++)x[c]=0;c=3*U;for(f=Math.max(F.length,3*za);c<f;c++)F[c]=0;c=3*Q;for(f=Math.max(N.length,3*ta);c<f;c++)N[c]=0;c=3*Q;for(f=Math.max(T.length,3*ta);c<f;c++)T[c]=0;t.directional.length=V;t.point.length=Y;t.spot.length=U;t.hemi.length=Q;t.ambient[0]=
l;t.ambient[1]=n;t.ambient[2]=r;da=!1}c=Ha;k.ambientLightColor.value=c.ambient;k.directionalLightColor.value=c.directional.colors;k.directionalLightDirection.value=c.directional.positions;k.pointLightColor.value=c.point.colors;k.pointLightPosition.value=c.point.positions;k.pointLightDistance.value=c.point.distances;k.spotLightColor.value=c.spot.colors;k.spotLightPosition.value=c.spot.positions;k.spotLightDistance.value=c.spot.distances;k.spotLightDirection.value=c.spot.directions;k.spotLightAngleCos.value=
c.spot.anglesCos;k.spotLightExponent.value=c.spot.exponents;k.hemisphereLightSkyColor.value=c.hemi.skyColors;k.hemisphereLightGroundColor.value=c.hemi.groundColors;k.hemisphereLightDirection.value=c.hemi.positions}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){k.opacity.value=d.opacity;O.gammaInput?k.diffuse.value.copyGammaToLinear(d.color):k.diffuse.value=d.color;k.map.value=d.map;k.lightMap.value=d.lightMap;k.specularMap.value=
d.specularMap;d.bumpMap&&(k.bumpMap.value=d.bumpMap,k.bumpScale.value=d.bumpScale);d.normalMap&&(k.normalMap.value=d.normalMap,k.normalScale.value.copy(d.normalScale));var Z;d.map?Z=d.map:d.specularMap?Z=d.specularMap:d.normalMap?Z=d.normalMap:d.bumpMap&&(Z=d.bumpMap);void 0!==Z&&(c=Z.offset,Z=Z.repeat,k.offsetRepeat.value.set(c.x,c.y,Z.x,Z.y));k.envMap.value=d.envMap;k.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;k.reflectivity.value=d.reflectivity;k.refractionRatio.value=
d.refractionRatio;k.combine.value=d.combine;k.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(k.diffuse.value=d.color,k.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(k.diffuse.value=d.color,k.opacity.value=d.opacity,k.dashSize.value=d.dashSize,k.totalSize.value=d.dashSize+d.gapSize,k.scale.value=d.scale):d instanceof THREE.ParticleSystemMaterial?(k.psColor.value=d.color,k.opacity.value=d.opacity,k.size.value=
d.size,k.scale.value=G.height/2,k.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(k.shininess.value=d.shininess,O.gammaInput?(k.ambient.value.copyGammaToLinear(d.ambient),k.emissive.value.copyGammaToLinear(d.emissive),k.specular.value.copyGammaToLinear(d.specular)):(k.ambient.value=d.ambient,k.emissive.value=d.emissive,k.specular.value=d.specular),d.wrapAround&&k.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(O.gammaInput?(k.ambient.value.copyGammaToLinear(d.ambient),
k.emissive.value.copyGammaToLinear(d.emissive)):(k.ambient.value=d.ambient,k.emissive.value=d.emissive),d.wrapAround&&k.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(k.mNear.value=a.near,k.mFar.value=a.far,k.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(k.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&k.shadowMatrix)for(c=Z=0,f=b.length;c<f;c++)l=b[c],l.castShadow&&(l instanceof THREE.SpotLight||l instanceof THREE.DirectionalLight&&!l.shadowCascade)&&
(k.shadowMap.value[Z]=l.shadowMap,k.shadowMapSize.value[Z]=l.shadowMapSize,k.shadowMatrix.value[Z]=l.shadowMatrix,k.shadowDarkness.value[Z]=l.shadowDarkness,k.shadowBias.value[Z]=l.shadowBias,Z++);b=d.uniformsList;k=0;for(Z=b.length;k<Z;k++)if(f=g.uniforms[b[k][1]])if(c=b[k][0],n=c.type,l=c.value,"i"===n)m.uniform1i(f,l);else if("f"===n)m.uniform1f(f,l);else if("v2"===n)m.uniform2f(f,l.x,l.y);else if("v3"===n)m.uniform3f(f,l.x,l.y,l.z);else if("v4"===n)m.uniform4f(f,l.x,l.y,l.z,l.w);else if("c"===
n)m.uniform3f(f,l.r,l.g,l.b);else if("iv1"===n)m.uniform1iv(f,l);else if("iv"===n)m.uniform3iv(f,l);else if("fv1"===n)m.uniform1fv(f,l);else if("fv"===n)m.uniform3fv(f,l);else if("v2v"===n){void 0===c._array&&(c._array=new Float32Array(2*l.length));n=0;for(r=l.length;n<r;n++)t=2*n,c._array[t]=l[n].x,c._array[t+1]=l[n].y;m.uniform2fv(f,c._array)}else if("v3v"===n){void 0===c._array&&(c._array=new Float32Array(3*l.length));n=0;for(r=l.length;n<r;n++)t=3*n,c._array[t]=l[n].x,c._array[t+1]=l[n].y,c._array[t+
2]=l[n].z;m.uniform3fv(f,c._array)}else if("v4v"===n){void 0===c._array&&(c._array=new Float32Array(4*l.length));n=0;for(r=l.length;n<r;n++)t=4*n,c._array[t]=l[n].x,c._array[t+1]=l[n].y,c._array[t+2]=l[n].z,c._array[t+3]=l[n].w;m.uniform4fv(f,c._array)}else if("m4"===n)void 0===c._array&&(c._array=new Float32Array(16)),l.flattenToArray(c._array),m.uniformMatrix4fv(f,!1,c._array);else if("m4v"===n){void 0===c._array&&(c._array=new Float32Array(16*l.length));n=0;for(r=l.length;n<r;n++)l[n].flattenToArrayOffset(c._array,
16*n);m.uniformMatrix4fv(f,!1,c._array)}else if("t"===n){if(t=l,l=P(),m.uniform1i(f,l),t)if(t.image instanceof Array&&6===t.image.length){if(c=t,f=l,6===c.image.length)if(c.needsUpdate){c.image.__webglTextureCube||(c.addEventListener("dispose",yb),c.image.__webglTextureCube=m.createTexture(),O.info.memory.textures++);m.activeTexture(m.TEXTURE0+f);m.bindTexture(m.TEXTURE_CUBE_MAP,c.image.__webglTextureCube);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,c.flipY);f=c instanceof THREE.CompressedTexture;l=[];for(n=
0;6>n;n++)O.autoScaleCubemaps&&!f?(r=l,t=n,v=c.image[n],x=cc,v.width<=x&&v.height<=x||(z=Math.max(v.width,v.height),w=Math.floor(v.width*x/z),x=Math.floor(v.height*x/z),z=document.createElement("canvas"),z.width=w,z.height=x,z.getContext("2d").drawImage(v,0,0,v.width,v.height,0,0,w,x),v=z),r[t]=v):l[n]=c.image[n];n=l[0];r=THREE.Math.isPowerOfTwo(n.width)&&THREE.Math.isPowerOfTwo(n.height);t=E(c.format);v=E(c.type);y(m.TEXTURE_CUBE_MAP,c,r);for(n=0;6>n;n++)if(f)for(x=l[n].mipmaps,z=0,A=x.length;z<
A;z++)w=x[z],c.format!==THREE.RGBAFormat?m.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+n,z,t,w.width,w.height,0,w.data):m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+n,z,t,w.width,w.height,0,t,v,w.data);else m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,t,t,v,l[n]);c.generateMipmaps&&r&&m.generateMipmap(m.TEXTURE_CUBE_MAP);c.needsUpdate=!1;if(c.onUpdate)c.onUpdate()}else m.activeTexture(m.TEXTURE0+f),m.bindTexture(m.TEXTURE_CUBE_MAP,c.image.__webglTextureCube)}else t instanceof THREE.WebGLRenderTargetCube?
(c=t,m.activeTexture(m.TEXTURE0+l),m.bindTexture(m.TEXTURE_CUBE_MAP,c.__webglTexture)):O.setTexture(t,l)}else if("tv"===n){void 0===c._array&&(c._array=[]);n=0;for(r=c.value.length;n<r;n++)c._array[n]=P();m.uniform1iv(f,c._array);n=0;for(r=c.value.length;n<r;n++)t=c.value[n],l=c._array[n],t&&O.setTexture(t,l)}else console.warn("THREE.WebGLRenderer: Unknown uniform type: "+n);(d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==h.cameraPosition&&(ya.setFromMatrixPosition(a.matrixWorld),
m.uniform3f(h.cameraPosition,ya.x,ya.y,ya.z));(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==h.viewMatrix&&m.uniformMatrix4fv(h.viewMatrix,!1,a.matrixWorldInverse.elements)}m.uniformMatrix4fv(h.modelViewMatrix,!1,e._modelViewMatrix.elements);h.normalMatrix&&m.uniformMatrix3fv(h.normalMatrix,!1,e._normalMatrix.elements);null!==h.modelMatrix&&m.uniformMatrix4fv(h.modelMatrix,!1,e.matrixWorld.elements);return g}function P(){var a=
Ja;a>=kb&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+kb);Ja+=1;return a}function C(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function B(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function A(a){a!==Da&&(m.lineWidth(a),Da=a)}function I(a,b,c){Ka!==a&&(a?m.enable(m.POLYGON_OFFSET_FILL):m.disable(m.POLYGON_OFFSET_FILL),Ka=a);!a||Pa===b&&Ca===c||(m.polygonOffset(b,c),Pa=b,Ca=c)}function H(a){a=a.split("\n");for(var b=0,c=a.length;b<
c;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function N(a,b){var c;"fragment"===a?c=m.createShader(m.FRAGMENT_SHADER):"vertex"===a&&(c=m.createShader(m.VERTEX_SHADER));m.shaderSource(c,b);m.compileShader(c);return m.getShaderParameter(c,m.COMPILE_STATUS)?c:(console.error(m.getShaderInfoLog(c)),console.error(H(b)),null)}function y(a,b,c){c?(m.texParameteri(a,m.TEXTURE_WRAP_S,E(b.wrapS)),m.texParameteri(a,m.TEXTURE_WRAP_T,E(b.wrapT)),m.texParameteri(a,m.TEXTURE_MAG_FILTER,E(b.magFilter)),m.texParameteri(a,
m.TEXTURE_MIN_FILTER,E(b.minFilter))):(m.texParameteri(a,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_MAG_FILTER,D(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,D(b.minFilter)));wa&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy)&&(m.texParameterf(a,wa.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Ob)),b.__oldAnisotropy=b.anisotropy)}function K(a,b){m.bindRenderbuffer(m.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?
(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT16,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_STENCIL,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a)):m.renderbufferStorage(m.RENDERBUFFER,m.RGBA4,b.width,b.height)}function D(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?
m.NEAREST:m.LINEAR}function E(a){if(a===THREE.RepeatWrapping)return m.REPEAT;if(a===THREE.ClampToEdgeWrapping)return m.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return m.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return m.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return m.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return m.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return m.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return m.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return m.LINEAR_MIPMAP_LINEAR;
if(a===THREE.UnsignedByteType)return m.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return m.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return m.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return m.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return m.BYTE;if(a===THREE.ShortType)return m.SHORT;if(a===THREE.UnsignedShortType)return m.UNSIGNED_SHORT;if(a===THREE.IntType)return m.INT;if(a===THREE.UnsignedIntType)return m.UNSIGNED_INT;if(a===THREE.FloatType)return m.FLOAT;
if(a===THREE.AlphaFormat)return m.ALPHA;if(a===THREE.RGBFormat)return m.RGB;if(a===THREE.RGBAFormat)return m.RGBA;if(a===THREE.LuminanceFormat)return m.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return m.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return m.FUNC_ADD;if(a===THREE.SubtractEquation)return m.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return m.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return m.ZERO;if(a===THREE.OneFactor)return m.ONE;if(a===THREE.SrcColorFactor)return m.SRC_COLOR;
if(a===THREE.OneMinusSrcColorFactor)return m.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return m.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return m.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return m.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return m.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return m.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return m.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return m.SRC_ALPHA_SATURATE;if(void 0!==xa){if(a===THREE.RGB_S3TC_DXT1_Format)return xa.COMPRESSED_RGB_S3TC_DXT1_EXT;
if(a===THREE.RGBA_S3TC_DXT1_Format)return xa.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return xa.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return xa.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var G=void 0!==a.canvas?a.canvas:document.createElement("canvas"),T=void 0!==a.context?a.context:null,Y=void 0!==a.precision?a.precision:"highp",V={},ja=void 0!==a.alpha?a.alpha:!1,R=void 0!==a.premultipliedAlpha?
a.premultipliedAlpha:!0,pa=void 0!==a.antialias?a.antialias:!1,L=void 0!==a.stencil?a.stencil:!0,ka=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,Q=new THREE.Color(0),U=0;this.domElement=G;this.context=null;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.autoUpdateObjects=this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.gammaOutput=
this.gammaInput=!1;this.shadowMapAutoUpdate=!0;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var O=this,ga=[],za=0,Ia=null,Aa=null,Ga=-1,ta=null,ra=null,Ja=0,Z=-1,Ba=-1,Sa=-1,Ya=-1,la=-1,Ta=-1,ma=-1,
Oa=-1,Ka=null,Pa=null,Ca=null,Da=null,na=0,Ra=0,Ea=G.width,Za=G.height,La=0,Fa=0,ha=new Uint8Array(16),va=new THREE.Frustum,lb=new THREE.Matrix4,Fb=new THREE.Matrix4,ya=new THREE.Vector3,fa=new THREE.Vector3,da=!0,Ha={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},m,Ua,jb,wa,xa;(function(){try{var a=
{alpha:ja,premultipliedAlpha:R,antialias:pa,stencil:L,preserveDrawingBuffer:ka};m=T||G.getContext("webgl",a)||G.getContext("experimental-webgl",a);if(null===m)throw"Error creating WebGL context.";}catch(b){console.error(b)}Ua=m.getExtension("OES_texture_float");m.getExtension("OES_texture_float_linear");jb=m.getExtension("OES_standard_derivatives");wa=m.getExtension("EXT_texture_filter_anisotropic")||m.getExtension("MOZ_EXT_texture_filter_anisotropic")||m.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
xa=m.getExtension("WEBGL_compressed_texture_s3tc")||m.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||m.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");Ua||console.log("THREE.WebGLRenderer: Float textures not supported.");jb||console.log("THREE.WebGLRenderer: Standard derivatives not supported.");wa||console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");xa||console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");void 0===m.getShaderPrecisionFormat&&
(m.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})})();m.clearColor(0,0,0,1);m.clearDepth(1);m.clearStencil(0);m.enable(m.DEPTH_TEST);m.depthFunc(m.LEQUAL);m.frontFace(m.CCW);m.cullFace(m.BACK);m.enable(m.CULL_FACE);m.enable(m.BLEND);m.blendEquation(m.FUNC_ADD);m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA);m.viewport(na,Ra,Ea,Za);m.clearColor(Q.r,Q.g,Q.b,U);this.context=m;var kb=m.getParameter(m.MAX_TEXTURE_IMAGE_UNITS),ab=m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
m.getParameter(m.MAX_TEXTURE_SIZE);var cc=m.getParameter(m.MAX_CUBE_MAP_TEXTURE_SIZE),Ob=wa?m.getParameter(wa.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,Db=0<ab,Eb=Db&&Ua;xa&&m.getParameter(m.COMPRESSED_TEXTURE_FORMATS);var dc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.HIGH_FLOAT),ec=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.MEDIUM_FLOAT);m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.LOW_FLOAT);var fc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.HIGH_FLOAT),gc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,
m.MEDIUM_FLOAT);m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.LOW_FLOAT);m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.HIGH_INT);m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.MEDIUM_INT);m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.LOW_INT);m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.HIGH_INT);m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.MEDIUM_INT);m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.LOW_INT);var xc=0<dc.precision&&0<fc.precision,Ib=0<ec.precision&&0<gc.precision;"highp"!==Y||xc||
(Ib?(Y="mediump",console.warn("WebGLRenderer: highp not supported, using mediump")):(Y="lowp",console.warn("WebGLRenderer: highp and mediump not supported, using lowp")));"mediump"!==Y||Ib||(Y="lowp",console.warn("WebGLRenderer: mediump not supported, using lowp"));this.getContext=function(){return m};this.supportsVertexTextures=function(){return Db};this.supportsFloatTextures=function(){return Ua};this.supportsStandardDerivatives=function(){return jb};this.supportsCompressedTextureS3TC=function(){return xa};
this.getMaxAnisotropy=function(){return Ob};this.getPrecision=function(){return Y};this.setSize=function(a,b,c){G.width=a*this.devicePixelRatio;G.height=b*this.devicePixelRatio;1!==this.devicePixelRatio&&!1!==c&&(G.style.width=a+"px",G.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){na=a*this.devicePixelRatio;Ra=b*this.devicePixelRatio;Ea=c*this.devicePixelRatio;Za=d*this.devicePixelRatio;m.viewport(na,Ra,Ea,Za)};this.setScissor=function(a,b,c,d){m.scissor(a*this.devicePixelRatio,
b*this.devicePixelRatio,c*this.devicePixelRatio,d*this.devicePixelRatio)};this.enableScissorTest=function(a){a?m.enable(m.SCISSOR_TEST):m.disable(m.SCISSOR_TEST)};this.setClearColor=function(a,b){Q.set(a);U=void 0!==b?b:1;m.clearColor(Q.r,Q.g,Q.b,U)};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return Q};this.getClearAlpha=function(){return U};this.clear=function(a,
b,c){var d=0;if(void 0===a||a)d|=m.COLOR_BUFFER_BIT;if(void 0===b||b)d|=m.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=m.STENCIL_BUFFER_BIT;m.clear(d)};this.clearColor=function(){m.clear(m.COLOR_BUFFER_BIT)};this.clearDepth=function(){m.clear(m.DEPTH_BUFFER_BIT)};this.clearStencil=function(){m.clear(m.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);
this.renderPluginsPre.push(a)};this.updateShadowMap=function(a,b){Ia=null;Ga=ta=Oa=ma=Sa=-1;da=!0;Ba=Z=-1;this.shadowMapPlugin.update(a,b)};var Pb=function(a){a=a.target;a.removeEventListener("dispose",Pb);a.__webglInit=void 0;if(a instanceof THREE.BufferGeometry){var b=a.attributes,c;for(c in b)void 0!==b[c].buffer&&m.deleteBuffer(b[c].buffer);O.info.memory.geometries--}if(a instanceof THREE.Geometry2)delete V[a.id],O.info.memory.geometries--;else if(void 0!==a.geometryGroups)for(var d in a.geometryGroups){c=
a.geometryGroups[d];if(void 0!==c.numMorphTargets)for(var b=0,e=c.numMorphTargets;b<e;b++)m.deleteBuffer(c.__webglMorphTargetsBuffers[b]);if(void 0!==c.numMorphNormals)for(b=0,e=c.numMorphNormals;b<e;b++)m.deleteBuffer(c.__webglMorphNormalsBuffers[b]);Sb(c)}else Sb(a)},yb=function(a){a=a.target;a.removeEventListener("dispose",yb);a.image&&a.image.__webglTextureCube?m.deleteTexture(a.image.__webglTextureCube):a.__webglInit&&(a.__webglInit=!1,m.deleteTexture(a.__webglTexture));O.info.memory.textures--},
Qb=function(a){a=a.target;a.removeEventListener("dispose",Qb);if(a&&a.__webglTexture)if(m.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)m.deleteFramebuffer(a.__webglFramebuffer[b]),m.deleteRenderbuffer(a.__webglRenderbuffer[b]);else m.deleteFramebuffer(a.__webglFramebuffer),m.deleteRenderbuffer(a.__webglRenderbuffer);O.info.memory.textures--},Rb=function(a){a=a.target;a.removeEventListener("dispose",Rb);Jb(a)},Sb=function(a){void 0!==a.__webglVertexBuffer&&
m.deleteBuffer(a.__webglVertexBuffer);void 0!==a.__webglNormalBuffer&&m.deleteBuffer(a.__webglNormalBuffer);void 0!==a.__webglTangentBuffer&&m.deleteBuffer(a.__webglTangentBuffer);void 0!==a.__webglColorBuffer&&m.deleteBuffer(a.__webglColorBuffer);void 0!==a.__webglUVBuffer&&m.deleteBuffer(a.__webglUVBuffer);void 0!==a.__webglUV2Buffer&&m.deleteBuffer(a.__webglUV2Buffer);void 0!==a.__webglSkinIndicesBuffer&&m.deleteBuffer(a.__webglSkinIndicesBuffer);void 0!==a.__webglSkinWeightsBuffer&&m.deleteBuffer(a.__webglSkinWeightsBuffer);
void 0!==a.__webglFaceBuffer&&m.deleteBuffer(a.__webglFaceBuffer);void 0!==a.__webglLineBuffer&&m.deleteBuffer(a.__webglLineBuffer);void 0!==a.__webglLineDistanceBuffer&&m.deleteBuffer(a.__webglLineDistanceBuffer);if(void 0!==a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)m.deleteBuffer(a.__webglCustomAttributesList[b].buffer);O.info.memory.geometries--},Jb=function(a){var b=a.program;if(void 0!==b){a.program=void 0;var c,d,e=!1;a=0;for(c=ga.length;a<c;a++)if(d=ga[a],d.program===
b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=ga.length;a<c;a++)d=ga[a],d.program!==b&&e.push(d);ga=e;m.deleteProgram(b);O.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=m.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=m.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=m.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=
m.createBuffer());a.hasPositions&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,a.positionArray,m.DYNAMIC_DRAW),m.enableVertexAttribArray(b.attributes.position),m.vertexAttribPointer(b.attributes.position,3,m.FLOAT,!1,0,0));if(a.hasNormals){m.bindBuffer(m.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,e,f,g,h,k,l,n,p,r,q,s=3*a.count;for(q=0;q<s;q+=9)r=a.normalArray,d=r[q],e=r[q+1],f=r[q+2],g=r[q+3],k=r[q+4],n=r[q+5],h=r[q+6],l=r[q+7],
p=r[q+8],d=(d+g+h)/3,e=(e+k+l)/3,f=(f+n+p)/3,r[q]=d,r[q+1]=e,r[q+2]=f,r[q+3]=d,r[q+4]=e,r[q+5]=f,r[q+6]=d,r[q+7]=e,r[q+8]=f}m.bufferData(m.ARRAY_BUFFER,a.normalArray,m.DYNAMIC_DRAW);m.enableVertexAttribArray(b.attributes.normal);m.vertexAttribPointer(b.attributes.normal,3,m.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglUvBuffer),m.bufferData(m.ARRAY_BUFFER,a.uvArray,m.DYNAMIC_DRAW),m.enableVertexAttribArray(b.attributes.uv),m.vertexAttribPointer(b.attributes.uv,2,m.FLOAT,!1,
0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,a.colorArray,m.DYNAMIC_DRAW),m.enableVertexAttribArray(b.attributes.color),m.vertexAttribPointer(b.attributes.color,3,m.FLOAT,!1,0,0));m.drawArrays(m.TRIANGLES,0,a.count);a.count=0};this.renderBufferGeometry2=function(a,b,c,d,e,f){a=F(a,b,c,d,f).attributes;b={position:"vertices",normal:"normals",uv:"uvs"};c={position:3,normal:3,uv:2};d=V[e.id];k();for(var g in a)if(f=
a[g],0<=f){var l=e[b[g]];void 0!==l&&0<l.length?(m.bindBuffer(m.ARRAY_BUFFER,d[b[g]]),h(f),m.vertexAttribPointer(f,c[g],m.FLOAT,!1,0,0)):3===c[g]?m.vertexAttrib3fv(f,[0,0,0]):2===c[g]&&m.vertexAttrib2fv(f,[0,0])}m.drawArrays(m.TRIANGLES,0,e.vertices.length/3)};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible){var l,n,p,r;l=F(a,b,c,d,f);a=l.attributes;b=e.attributes;c=!1;l=16777215*e.id+2*l.id+(d.wireframe?1:0);l!==ta&&(ta=l,c=!0);c&&k();if(f instanceof THREE.Mesh)if(f=b.index){e=e.offsets;
1<e.length&&(c=!0);for(var q=0,s=e.length;q<s;q++){var t=e[q].index;if(c){for(n in a)p=a[n],l=b[n],0<=p&&(l?(r=l.itemSize,m.bindBuffer(m.ARRAY_BUFFER,l.buffer),h(p),m.vertexAttribPointer(p,r,m.FLOAT,!1,0,t*r*4)):d.defaultAttributeValues&&(2===d.defaultAttributeValues[n].length?m.vertexAttrib2fv(p,d.defaultAttributeValues[n]):3===d.defaultAttributeValues[n].length&&m.vertexAttrib3fv(p,d.defaultAttributeValues[n])));m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,f.buffer)}m.drawElements(m.TRIANGLES,e[q].count,
m.UNSIGNED_SHORT,2*e[q].start);O.info.render.calls++;O.info.render.vertices+=e[q].count;O.info.render.faces+=e[q].count/3}}else{if(c)for(n in a)"index"!==n&&(p=a[n],l=b[n],0<=p&&(l?(r=l.itemSize,m.bindBuffer(m.ARRAY_BUFFER,l.buffer),h(p),m.vertexAttribPointer(p,r,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[n]&&(2===d.defaultAttributeValues[n].length?m.vertexAttrib2fv(p,d.defaultAttributeValues[n]):3===d.defaultAttributeValues[n].length&&m.vertexAttrib3fv(p,d.defaultAttributeValues[n]))));
d=e.attributes.position;m.drawArrays(m.TRIANGLES,0,d.array.length/3);O.info.render.calls++;O.info.render.vertices+=d.array.length/3;O.info.render.faces+=d.array.length/3/3}else if(f instanceof THREE.ParticleSystem){if(c)for(n in a)p=a[n],l=b[n],0<=p&&(l?(r=l.itemSize,m.bindBuffer(m.ARRAY_BUFFER,l.buffer),h(p),m.vertexAttribPointer(p,r,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[n]&&(2===d.defaultAttributeValues[n].length?m.vertexAttrib2fv(p,d.defaultAttributeValues[n]):3===
d.defaultAttributeValues[n].length&&m.vertexAttrib3fv(p,d.defaultAttributeValues[n])));d=b.position;m.drawArrays(m.POINTS,0,d.array.length/3);O.info.render.calls++;O.info.render.points+=d.array.length/3}else if(f instanceof THREE.Line)if(n=f.type===THREE.LineStrip?m.LINE_STRIP:m.LINES,A(d.linewidth),f=b.index)for(e=e.offsets,1<e.length&&(c=!0),q=0,s=e.length;q<s;q++)t=e[q].index,c&&(g(d,a,b,t),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,f.buffer)),m.drawElements(m.LINES,e[q].count,m.UNSIGNED_SHORT,2*e[q].start),
O.info.render.calls++,O.info.render.vertices+=e[q].count;else c&&g(d,a,b,0),d=b.position,m.drawArrays(n,0,d.array.length/3),O.info.render.calls++,O.info.render.points+=d.array.length}};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var g,l;c=F(a,b,c,d,f);a=c.attributes;b=!1;c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==ta&&(ta=c,b=!0);b&&k();if(!d.morphTargets&&0<=a.position)b&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),h(a.position),m.vertexAttribPointer(a.position,3,m.FLOAT,
!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),h(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0)):0<=c.position&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),h(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var p=0;l=f.morphTargetForcedOrder;for(g=f.morphTargetInfluences;p<d.numSupportedMorphTargets&&
p<l.length;)0<=c["morphTarget"+p]&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[l[p]]),h(c["morphTarget"+p]),m.vertexAttribPointer(c["morphTarget"+p],3,m.FLOAT,!1,0,0)),0<=c["morphNormal"+p]&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[l[p]]),h(c["morphNormal"+p]),m.vertexAttribPointer(c["morphNormal"+p],3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[p]=g[l[p]],p++}else{l=[];g=f.morphTargetInfluences;var r,q=g.length;for(r=0;r<q;r++)p=g[r],0<p&&l.push([p,
r]);l.length>d.numSupportedMorphTargets?(l.sort(n),l.length=d.numSupportedMorphTargets):l.length>d.numSupportedMorphNormals?l.sort(n):0===l.length&&l.push([0,0]);for(p=0;p<d.numSupportedMorphTargets;)l[p]?(r=l[p][1],0<=c["morphTarget"+p]&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[r]),h(c["morphTarget"+p]),m.vertexAttribPointer(c["morphTarget"+p],3,m.FLOAT,!1,0,0)),0<=c["morphNormal"+p]&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[r]),h(c["morphNormal"+
p]),m.vertexAttribPointer(c["morphNormal"+p],3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[p]=g[r]):f.__webglMorphTargetInfluences[p]=0,p++}null!==d.program.uniforms.morphTargetInfluences&&m.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(b){if(e.__webglCustomAttributesList)for(g=0,l=e.__webglCustomAttributesList.length;g<l;g++)c=e.__webglCustomAttributesList[g],0<=a[c.buffer.belongsToAttribute]&&(m.bindBuffer(m.ARRAY_BUFFER,c.buffer),h(a[c.buffer.belongsToAttribute]),
m.vertexAttribPointer(a[c.buffer.belongsToAttribute],c.size,m.FLOAT,!1,0,0));0<=a.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglColorBuffer),h(a.color),m.vertexAttribPointer(a.color,3,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib3fv(a.color,d.defaultAttributeValues.color));0<=a.normal&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglNormalBuffer),h(a.normal),m.vertexAttribPointer(a.normal,3,m.FLOAT,!1,0,0));0<=a.tangent&&(m.bindBuffer(m.ARRAY_BUFFER,
e.__webglTangentBuffer),h(a.tangent),m.vertexAttribPointer(a.tangent,4,m.FLOAT,!1,0,0));0<=a.uv&&(f.geometry.faceVertexUvs[0]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUVBuffer),h(a.uv),m.vertexAttribPointer(a.uv,2,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib2fv(a.uv,d.defaultAttributeValues.uv));0<=a.uv2&&(f.geometry.faceVertexUvs[1]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUV2Buffer),h(a.uv2),m.vertexAttribPointer(a.uv2,2,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib2fv(a.uv2,
d.defaultAttributeValues.uv2));d.skinning&&0<=a.skinIndex&&0<=a.skinWeight&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),h(a.skinIndex),m.vertexAttribPointer(a.skinIndex,4,m.FLOAT,!1,0,0),m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),h(a.skinWeight),m.vertexAttribPointer(a.skinWeight,4,m.FLOAT,!1,0,0));0<=a.lineDistance&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglLineDistanceBuffer),h(a.lineDistance),m.vertexAttribPointer(a.lineDistance,1,m.FLOAT,!1,0,0))}f instanceof THREE.Mesh?
(d.wireframe?(A(d.wireframeLinewidth),b&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),m.drawElements(m.LINES,e.__webglLineCount,m.UNSIGNED_SHORT,0)):(b&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),m.drawElements(m.TRIANGLES,e.__webglFaceCount,m.UNSIGNED_SHORT,0)),O.info.render.calls++,O.info.render.vertices+=e.__webglFaceCount,O.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?m.LINE_STRIP:m.LINES,A(d.linewidth),m.drawArrays(f,0,
e.__webglLineCount),O.info.render.calls++):f instanceof THREE.ParticleSystem&&(m.drawArrays(m.POINTS,0,e.__webglParticleCount),O.info.render.calls++,O.info.render.points+=e.__webglParticleCount)}};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e,f,g,h,k=a.__lights,n=a.fog;Ga=-1;da=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);
lb.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);va.setFromMatrix(lb);this.autoUpdateObjects&&this.initWebGLObjects(a);q(this.renderPluginsPre,a,b);O.info.render.calls=0;O.info.render.vertices=0;O.info.render.faces=0;O.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);h=a.__webglObjects;d=0;for(e=h.length;d<e;d++)if(f=h[d],g=f.object,f.id=d,f.render=!1,g.visible&&(!(g instanceof THREE.Mesh||g instanceof
THREE.ParticleSystem)||!g.frustumCulled||va.intersectsObject(g))){var p=g;p._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,p.matrixWorld);p._normalMatrix.getNormalMatrix(p._modelViewMatrix);var p=f,r=p.object,t=p.buffer,v=r.geometry,r=r.material;r instanceof THREE.MeshFaceMaterial?(r=r.materials[v instanceof THREE.BufferGeometry?0:t.materialIndex],r.transparent?(p.transparent=r,p.opaque=null):(p.opaque=r,p.transparent=null)):r&&(r.transparent?(p.transparent=r,p.opaque=null):(p.opaque=r,p.transparent=
null));f.render=!0;!0===this.sortObjects&&(null!==g.renderDepth?f.z=g.renderDepth:(ya.setFromMatrixPosition(g.matrixWorld),ya.applyProjection(lb),f.z=ya.z))}this.sortObjects&&h.sort(l);h=a.__webglObjectsImmediate;d=0;for(e=h.length;d<e;d++)f=h[d],g=f.object,g.visible&&(g._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,g.matrixWorld),g._normalMatrix.getNormalMatrix(g._modelViewMatrix),g=f.object.material,g.transparent?(f.transparent=g,f.opaque=null):(f.opaque=g,f.transparent=null));a.overrideMaterial?
(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),I(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),s(a.__webglObjects,!1,"",b,k,n,!0,d),u(a.__webglObjectsImmediate,"",b,k,n,!1,d)):(d=null,this.setBlending(THREE.NoBlending),s(a.__webglObjects,!0,"opaque",b,k,n,!1,d),u(a.__webglObjectsImmediate,"opaque",b,k,n,!1,d),s(a.__webglObjects,!1,"transparent",b,k,n,!0,d),u(a.__webglObjectsImmediate,
"transparent",b,k,n,!0,d));q(this.renderPluginsPost,a,b);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&(c instanceof THREE.WebGLRenderTargetCube?(m.bindTexture(m.TEXTURE_CUBE_MAP,c.__webglTexture),m.generateMipmap(m.TEXTURE_CUBE_MAP),m.bindTexture(m.TEXTURE_CUBE_MAP,null)):(m.bindTexture(m.TEXTURE_2D,c.__webglTexture),m.generateMipmap(m.TEXTURE_2D),m.bindTexture(m.TEXTURE_2D,null)));this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=
function(a,b,c,d,e){var f=F(a,b,c,d,e);ta=-1;O.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,m,va):e.render(function(a){O.renderBufferImmediate(a,f,d)})};this.initWebGLObjects=function(a){a.__webglObjects||(a.__webglObjects=[],a.__webglObjectsImmediate=[],a.__webglSprites=[],a.__webglFlares=[]);for(;a.__objectsAdded.length;)t(a.__objectsAdded[0],a),a.__objectsAdded.splice(0,1);for(;a.__objectsRemoved.length;)r(a.__objectsRemoved[0],a),a.__objectsRemoved.splice(0,1);for(var b=
0,g=a.__webglObjects.length;b<g;b++){var h=a.__webglObjects[b].object;void 0===h.__webglInit&&(void 0!==h.__webglActive&&r(h,a),t(h,a));var k=h,l=k.geometry,p=void 0,q=void 0,s=void 0;if(l instanceof THREE.BufferGeometry){var u=m.DYNAMIC_DRAW,x=l.attributes,z=void 0,y=void 0;for(z in x)y=x[z],y.needsUpdate&&("index"===z?(m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,y.buffer),m.bufferData(m.ELEMENT_ARRAY_BUFFER,y.array,u)):(m.bindBuffer(m.ARRAY_BUFFER,y.buffer),m.bufferData(m.ARRAY_BUFFER,y.array,u)),y.needsUpdate=
!1)}else if(l instanceof THREE.Geometry2){var A=l,F=m.DYNAMIC_DRAW;if(!1!==A.needsUpdate){var B=["vertices","normals","uvs"],E=V[A.id],D=void 0;for(D in B){var G=A[B[D]];m.bindBuffer(m.ARRAY_BUFFER,E[B[D]]);m.bufferData(m.ARRAY_BUFFER,G,F)}A.needsUpdate=!1}}else if(k instanceof THREE.Mesh){for(var I=0,O=l.geometryGroupsList.length;I<O;I++)if(p=l.geometryGroupsList[I],s=d(k,p),l.buffersNeedUpdate&&c(p,k),q=s.attributes&&v(s),l.verticesNeedUpdate||l.morphTargetsNeedUpdate||l.elementsNeedUpdate||l.uvsNeedUpdate||
l.normalsNeedUpdate||l.colorsNeedUpdate||l.tangentsNeedUpdate||q){var C=p,H=k,P=m.DYNAMIC_DRAW,K=!l.dynamic,L=s;if(C.__inittedArrays){var N=e(L),T=L.vertexColors?L.vertexColors:!1,Y=f(L),U=N===THREE.SmoothShading,S=void 0,Q=void 0,ga=void 0,R=void 0,Aa=void 0,Z=void 0,za=void 0,ta=void 0,ra=void 0,Ja=void 0,fa=void 0,aa=void 0,ba=void 0,ca=void 0,da=void 0,Ia=void 0,Ga=void 0,la=void 0,ha=void 0,ja=void 0,ka=void 0,ma=void 0,pa=void 0,Ba=void 0,wa=void 0,Ca=void 0,Da=void 0,Fa=void 0,Ka=void 0,Qa=
void 0,Pa=void 0,La=void 0,Ta=void 0,Oa=void 0,na=void 0,Ra=void 0,va=void 0,xa=void 0,Sa=void 0,Ya=void 0,Ea=0,Ha=0,Ua=0,Za=0,ab=0,mb=0,bb=0,wb=0,gb=0,ua=0,Ma=0,M=0,$a=void 0,nb=C.__vertexArray,jb=C.__uvArray,kb=C.__uv2Array,zb=C.__normalArray,cb=C.__tangentArray,ob=C.__colorArray,db=C.__skinIndexArray,eb=C.__skinWeightArray,Db=C.__morphTargetsArrays,Eb=C.__morphNormalsArrays,yb=C.__webglCustomAttributesList,J=void 0,Tb=C.__faceArray,Ab=C.__lineArray,Va=H.geometry,Ob=Va.elementsNeedUpdate,Ib=Va.uvsNeedUpdate,
Pb=Va.normalsNeedUpdate,Qb=Va.tangentsNeedUpdate,Rb=Va.colorsNeedUpdate,Sb=Va.morphTargetsNeedUpdate,hc=Va.vertices,ea=C.faces3,pb=Va.faces,Jb=Va.faceVertexUvs[0],nc=Va.faceVertexUvs[1],ic=Va.skinIndices,Ub=Va.skinWeights,Vb=Va.morphTargets,oc=Va.morphNormals;if(Va.verticesNeedUpdate){S=0;for(Q=ea.length;S<Q;S++)R=pb[ea[S]],aa=hc[R.a],ba=hc[R.b],ca=hc[R.c],nb[Ha]=aa.x,nb[Ha+1]=aa.y,nb[Ha+2]=aa.z,nb[Ha+3]=ba.x,nb[Ha+4]=ba.y,nb[Ha+5]=ba.z,nb[Ha+6]=ca.x,nb[Ha+7]=ca.y,nb[Ha+8]=ca.z,Ha+=9;m.bindBuffer(m.ARRAY_BUFFER,
C.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,nb,P)}if(Sb)for(na=0,Ra=Vb.length;na<Ra;na++){S=Ma=0;for(Q=ea.length;S<Q;S++)Sa=ea[S],R=pb[Sa],aa=Vb[na].vertices[R.a],ba=Vb[na].vertices[R.b],ca=Vb[na].vertices[R.c],va=Db[na],va[Ma]=aa.x,va[Ma+1]=aa.y,va[Ma+2]=aa.z,va[Ma+3]=ba.x,va[Ma+4]=ba.y,va[Ma+5]=ba.z,va[Ma+6]=ca.x,va[Ma+7]=ca.y,va[Ma+8]=ca.z,L.morphNormals&&(U?(Ya=oc[na].vertexNormals[Sa],la=Ya.a,ha=Ya.b,ja=Ya.c):ja=ha=la=oc[na].faceNormals[Sa],xa=Eb[na],xa[Ma]=la.x,xa[Ma+1]=la.y,xa[Ma+2]=
la.z,xa[Ma+3]=ha.x,xa[Ma+4]=ha.y,xa[Ma+5]=ha.z,xa[Ma+6]=ja.x,xa[Ma+7]=ja.y,xa[Ma+8]=ja.z),Ma+=9;m.bindBuffer(m.ARRAY_BUFFER,C.__webglMorphTargetsBuffers[na]);m.bufferData(m.ARRAY_BUFFER,Db[na],P);L.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,C.__webglMorphNormalsBuffers[na]),m.bufferData(m.ARRAY_BUFFER,Eb[na],P))}if(Ub.length){S=0;for(Q=ea.length;S<Q;S++)R=pb[ea[S]],Ba=Ub[R.a],wa=Ub[R.b],Ca=Ub[R.c],eb[ua]=Ba.x,eb[ua+1]=Ba.y,eb[ua+2]=Ba.z,eb[ua+3]=Ba.w,eb[ua+4]=wa.x,eb[ua+5]=wa.y,eb[ua+6]=wa.z,eb[ua+
7]=wa.w,eb[ua+8]=Ca.x,eb[ua+9]=Ca.y,eb[ua+10]=Ca.z,eb[ua+11]=Ca.w,Da=ic[R.a],Fa=ic[R.b],Ka=ic[R.c],db[ua]=Da.x,db[ua+1]=Da.y,db[ua+2]=Da.z,db[ua+3]=Da.w,db[ua+4]=Fa.x,db[ua+5]=Fa.y,db[ua+6]=Fa.z,db[ua+7]=Fa.w,db[ua+8]=Ka.x,db[ua+9]=Ka.y,db[ua+10]=Ka.z,db[ua+11]=Ka.w,ua+=12;0<ua&&(m.bindBuffer(m.ARRAY_BUFFER,C.__webglSkinIndicesBuffer),m.bufferData(m.ARRAY_BUFFER,db,P),m.bindBuffer(m.ARRAY_BUFFER,C.__webglSkinWeightsBuffer),m.bufferData(m.ARRAY_BUFFER,eb,P))}if(Rb&&T){S=0;for(Q=ea.length;S<Q;S++)R=
pb[ea[S]],za=R.vertexColors,ta=R.color,3===za.length&&T===THREE.VertexColors?(ka=za[0],ma=za[1],pa=za[2]):pa=ma=ka=ta,ob[gb]=ka.r,ob[gb+1]=ka.g,ob[gb+2]=ka.b,ob[gb+3]=ma.r,ob[gb+4]=ma.g,ob[gb+5]=ma.b,ob[gb+6]=pa.r,ob[gb+7]=pa.g,ob[gb+8]=pa.b,gb+=9;0<gb&&(m.bindBuffer(m.ARRAY_BUFFER,C.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,ob,P))}if(Qb&&Va.hasTangents){S=0;for(Q=ea.length;S<Q;S++)R=pb[ea[S]],ra=R.vertexTangents,da=ra[0],Ia=ra[1],Ga=ra[2],cb[bb]=da.x,cb[bb+1]=da.y,cb[bb+2]=da.z,cb[bb+3]=da.w,
cb[bb+4]=Ia.x,cb[bb+5]=Ia.y,cb[bb+6]=Ia.z,cb[bb+7]=Ia.w,cb[bb+8]=Ga.x,cb[bb+9]=Ga.y,cb[bb+10]=Ga.z,cb[bb+11]=Ga.w,bb+=12;m.bindBuffer(m.ARRAY_BUFFER,C.__webglTangentBuffer);m.bufferData(m.ARRAY_BUFFER,cb,P)}if(Pb&&N){S=0;for(Q=ea.length;S<Q;S++)if(R=pb[ea[S]],Aa=R.vertexNormals,Z=R.normal,3===Aa.length&&U)for(Qa=0;3>Qa;Qa++)La=Aa[Qa],zb[mb]=La.x,zb[mb+1]=La.y,zb[mb+2]=La.z,mb+=3;else for(Qa=0;3>Qa;Qa++)zb[mb]=Z.x,zb[mb+1]=Z.y,zb[mb+2]=Z.z,mb+=3;m.bindBuffer(m.ARRAY_BUFFER,C.__webglNormalBuffer);m.bufferData(m.ARRAY_BUFFER,
zb,P)}if(Ib&&Jb&&Y){S=0;for(Q=ea.length;S<Q;S++)if(ga=ea[S],Ja=Jb[ga],void 0!==Ja)for(Qa=0;3>Qa;Qa++)Ta=Ja[Qa],jb[Ua]=Ta.x,jb[Ua+1]=Ta.y,Ua+=2;0<Ua&&(m.bindBuffer(m.ARRAY_BUFFER,C.__webglUVBuffer),m.bufferData(m.ARRAY_BUFFER,jb,P))}if(Ib&&nc&&Y){S=0;for(Q=ea.length;S<Q;S++)if(ga=ea[S],fa=nc[ga],void 0!==fa)for(Qa=0;3>Qa;Qa++)Oa=fa[Qa],kb[Za]=Oa.x,kb[Za+1]=Oa.y,Za+=2;0<Za&&(m.bindBuffer(m.ARRAY_BUFFER,C.__webglUV2Buffer),m.bufferData(m.ARRAY_BUFFER,kb,P))}if(Ob){S=0;for(Q=ea.length;S<Q;S++)Tb[ab]=
Ea,Tb[ab+1]=Ea+1,Tb[ab+2]=Ea+2,ab+=3,Ab[wb]=Ea,Ab[wb+1]=Ea+1,Ab[wb+2]=Ea,Ab[wb+3]=Ea+2,Ab[wb+4]=Ea+1,Ab[wb+5]=Ea+2,wb+=6,Ea+=3;m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,C.__webglFaceBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,Tb,P);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,C.__webglLineBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,Ab,P)}if(yb)for(Qa=0,Pa=yb.length;Qa<Pa;Qa++)if(J=yb[Qa],J.__original.needsUpdate){M=0;if(1===J.size)if(void 0===J.boundTo||"vertices"===J.boundTo)for(S=0,Q=ea.length;S<Q;S++)R=pb[ea[S]],
J.array[M]=J.value[R.a],J.array[M+1]=J.value[R.b],J.array[M+2]=J.value[R.c],M+=3;else{if("faces"===J.boundTo)for(S=0,Q=ea.length;S<Q;S++)$a=J.value[ea[S]],J.array[M]=$a,J.array[M+1]=$a,J.array[M+2]=$a,M+=3}else if(2===J.size)if(void 0===J.boundTo||"vertices"===J.boundTo)for(S=0,Q=ea.length;S<Q;S++)R=pb[ea[S]],aa=J.value[R.a],ba=J.value[R.b],ca=J.value[R.c],J.array[M]=aa.x,J.array[M+1]=aa.y,J.array[M+2]=ba.x,J.array[M+3]=ba.y,J.array[M+4]=ca.x,J.array[M+5]=ca.y,M+=6;else{if("faces"===J.boundTo)for(S=
0,Q=ea.length;S<Q;S++)ca=ba=aa=$a=J.value[ea[S]],J.array[M]=aa.x,J.array[M+1]=aa.y,J.array[M+2]=ba.x,J.array[M+3]=ba.y,J.array[M+4]=ca.x,J.array[M+5]=ca.y,M+=6}else if(3===J.size){var sa;sa="c"===J.type?["r","g","b"]:["x","y","z"];if(void 0===J.boundTo||"vertices"===J.boundTo)for(S=0,Q=ea.length;S<Q;S++)R=pb[ea[S]],aa=J.value[R.a],ba=J.value[R.b],ca=J.value[R.c],J.array[M]=aa[sa[0]],J.array[M+1]=aa[sa[1]],J.array[M+2]=aa[sa[2]],J.array[M+3]=ba[sa[0]],J.array[M+4]=ba[sa[1]],J.array[M+5]=ba[sa[2]],
J.array[M+6]=ca[sa[0]],J.array[M+7]=ca[sa[1]],J.array[M+8]=ca[sa[2]],M+=9;else if("faces"===J.boundTo)for(S=0,Q=ea.length;S<Q;S++)ca=ba=aa=$a=J.value[ea[S]],J.array[M]=aa[sa[0]],J.array[M+1]=aa[sa[1]],J.array[M+2]=aa[sa[2]],J.array[M+3]=ba[sa[0]],J.array[M+4]=ba[sa[1]],J.array[M+5]=ba[sa[2]],J.array[M+6]=ca[sa[0]],J.array[M+7]=ca[sa[1]],J.array[M+8]=ca[sa[2]],M+=9;else if("faceVertices"===J.boundTo)for(S=0,Q=ea.length;S<Q;S++)$a=J.value[ea[S]],aa=$a[0],ba=$a[1],ca=$a[2],J.array[M]=aa[sa[0]],J.array[M+
1]=aa[sa[1]],J.array[M+2]=aa[sa[2]],J.array[M+3]=ba[sa[0]],J.array[M+4]=ba[sa[1]],J.array[M+5]=ba[sa[2]],J.array[M+6]=ca[sa[0]],J.array[M+7]=ca[sa[1]],J.array[M+8]=ca[sa[2]],M+=9}else if(4===J.size)if(void 0===J.boundTo||"vertices"===J.boundTo)for(S=0,Q=ea.length;S<Q;S++)R=pb[ea[S]],aa=J.value[R.a],ba=J.value[R.b],ca=J.value[R.c],J.array[M]=aa.x,J.array[M+1]=aa.y,J.array[M+2]=aa.z,J.array[M+3]=aa.w,J.array[M+4]=ba.x,J.array[M+5]=ba.y,J.array[M+6]=ba.z,J.array[M+7]=ba.w,J.array[M+8]=ca.x,J.array[M+
9]=ca.y,J.array[M+10]=ca.z,J.array[M+11]=ca.w,M+=12;else if("faces"===J.boundTo)for(S=0,Q=ea.length;S<Q;S++)ca=ba=aa=$a=J.value[ea[S]],J.array[M]=aa.x,J.array[M+1]=aa.y,J.array[M+2]=aa.z,J.array[M+3]=aa.w,J.array[M+4]=ba.x,J.array[M+5]=ba.y,J.array[M+6]=ba.z,J.array[M+7]=ba.w,J.array[M+8]=ca.x,J.array[M+9]=ca.y,J.array[M+10]=ca.z,J.array[M+11]=ca.w,M+=12;else if("faceVertices"===J.boundTo)for(S=0,Q=ea.length;S<Q;S++)$a=J.value[ea[S]],aa=$a[0],ba=$a[1],ca=$a[2],J.array[M]=aa.x,J.array[M+1]=aa.y,J.array[M+
2]=aa.z,J.array[M+3]=aa.w,J.array[M+4]=ba.x,J.array[M+5]=ba.y,J.array[M+6]=ba.z,J.array[M+7]=ba.w,J.array[M+8]=ca.x,J.array[M+9]=ca.y,J.array[M+10]=ca.z,J.array[M+11]=ca.w,M+=12;m.bindBuffer(m.ARRAY_BUFFER,J.buffer);m.bufferData(m.ARRAY_BUFFER,J.array,P)}K&&(delete C.__inittedArrays,delete C.__colorArray,delete C.__normalArray,delete C.__tangentArray,delete C.__uvArray,delete C.__uv2Array,delete C.__faceArray,delete C.__vertexArray,delete C.__lineArray,delete C.__skinIndexArray,delete C.__skinWeightArray)}}l.verticesNeedUpdate=
!1;l.morphTargetsNeedUpdate=!1;l.elementsNeedUpdate=!1;l.uvsNeedUpdate=!1;l.normalsNeedUpdate=!1;l.colorsNeedUpdate=!1;l.tangentsNeedUpdate=!1;l.buffersNeedUpdate=!1;s.attributes&&w(s)}else if(k instanceof THREE.Line){s=d(k,l);q=s.attributes&&v(s);if(l.verticesNeedUpdate||l.colorsNeedUpdate||l.lineDistancesNeedUpdate||q){var fb=l,Wb=m.DYNAMIC_DRAW,Kb=void 0,Lb=void 0,Mb=void 0,Xb=void 0,qa=void 0,Yb=void 0,pc=fb.vertices,qc=fb.colors,rc=fb.lineDistances,cc=pc.length,dc=qc.length,ec=rc.length,Zb=fb.__vertexArray,
$b=fb.__colorArray,sc=fb.__lineDistanceArray,fc=fb.colorsNeedUpdate,gc=fb.lineDistancesNeedUpdate,jc=fb.__webglCustomAttributesList,ac=void 0,tc=void 0,Na=void 0,Gb=void 0,Wa=void 0,oa=void 0;if(fb.verticesNeedUpdate){for(Kb=0;Kb<cc;Kb++)Xb=pc[Kb],qa=3*Kb,Zb[qa]=Xb.x,Zb[qa+1]=Xb.y,Zb[qa+2]=Xb.z;m.bindBuffer(m.ARRAY_BUFFER,fb.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,Zb,Wb)}if(fc){for(Lb=0;Lb<dc;Lb++)Yb=qc[Lb],qa=3*Lb,$b[qa]=Yb.r,$b[qa+1]=Yb.g,$b[qa+2]=Yb.b;m.bindBuffer(m.ARRAY_BUFFER,fb.__webglColorBuffer);
m.bufferData(m.ARRAY_BUFFER,$b,Wb)}if(gc){for(Mb=0;Mb<ec;Mb++)sc[Mb]=rc[Mb];m.bindBuffer(m.ARRAY_BUFFER,fb.__webglLineDistanceBuffer);m.bufferData(m.ARRAY_BUFFER,sc,Wb)}if(jc)for(ac=0,tc=jc.length;ac<tc;ac++)if(oa=jc[ac],oa.needsUpdate&&(void 0===oa.boundTo||"vertices"===oa.boundTo)){qa=0;Gb=oa.value.length;if(1===oa.size)for(Na=0;Na<Gb;Na++)oa.array[Na]=oa.value[Na];else if(2===oa.size)for(Na=0;Na<Gb;Na++)Wa=oa.value[Na],oa.array[qa]=Wa.x,oa.array[qa+1]=Wa.y,qa+=2;else if(3===oa.size)if("c"===oa.type)for(Na=
0;Na<Gb;Na++)Wa=oa.value[Na],oa.array[qa]=Wa.r,oa.array[qa+1]=Wa.g,oa.array[qa+2]=Wa.b,qa+=3;else for(Na=0;Na<Gb;Na++)Wa=oa.value[Na],oa.array[qa]=Wa.x,oa.array[qa+1]=Wa.y,oa.array[qa+2]=Wa.z,qa+=3;else if(4===oa.size)for(Na=0;Na<Gb;Na++)Wa=oa.value[Na],oa.array[qa]=Wa.x,oa.array[qa+1]=Wa.y,oa.array[qa+2]=Wa.z,oa.array[qa+3]=Wa.w,qa+=4;m.bindBuffer(m.ARRAY_BUFFER,oa.buffer);m.bufferData(m.ARRAY_BUFFER,oa.array,Wb)}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;l.lineDistancesNeedUpdate=!1;s.attributes&&
w(s)}else if(k instanceof THREE.ParticleSystem){s=d(k,l);q=s.attributes&&v(s);if(l.verticesNeedUpdate||l.colorsNeedUpdate||k.sortParticles||q){var qb=l,kc=m.DYNAMIC_DRAW,Nb=k,Xa=void 0,rb=void 0,sb=void 0,X=void 0,tb=void 0,xb=void 0,bc=qb.vertices,lc=bc.length,mc=qb.colors,uc=mc.length,Bb=qb.__vertexArray,Cb=qb.__colorArray,ub=qb.__sortArray,vc=qb.verticesNeedUpdate,wc=qb.colorsNeedUpdate,vb=qb.__webglCustomAttributesList,hb=void 0,Hb=void 0,$=void 0,ib=void 0,ia=void 0,W=void 0;if(Nb.sortParticles){Fb.copy(lb);
Fb.multiply(Nb.matrixWorld);for(Xa=0;Xa<lc;Xa++)sb=bc[Xa],ya.copy(sb),ya.applyProjection(Fb),ub[Xa]=[ya.z,Xa];ub.sort(n);for(Xa=0;Xa<lc;Xa++)sb=bc[ub[Xa][1]],X=3*Xa,Bb[X]=sb.x,Bb[X+1]=sb.y,Bb[X+2]=sb.z;for(rb=0;rb<uc;rb++)X=3*rb,xb=mc[ub[rb][1]],Cb[X]=xb.r,Cb[X+1]=xb.g,Cb[X+2]=xb.b;if(vb)for(hb=0,Hb=vb.length;hb<Hb;hb++)if(W=vb[hb],void 0===W.boundTo||"vertices"===W.boundTo)if(X=0,ib=W.value.length,1===W.size)for($=0;$<ib;$++)tb=ub[$][1],W.array[$]=W.value[tb];else if(2===W.size)for($=0;$<ib;$++)tb=
ub[$][1],ia=W.value[tb],W.array[X]=ia.x,W.array[X+1]=ia.y,X+=2;else if(3===W.size)if("c"===W.type)for($=0;$<ib;$++)tb=ub[$][1],ia=W.value[tb],W.array[X]=ia.r,W.array[X+1]=ia.g,W.array[X+2]=ia.b,X+=3;else for($=0;$<ib;$++)tb=ub[$][1],ia=W.value[tb],W.array[X]=ia.x,W.array[X+1]=ia.y,W.array[X+2]=ia.z,X+=3;else if(4===W.size)for($=0;$<ib;$++)tb=ub[$][1],ia=W.value[tb],W.array[X]=ia.x,W.array[X+1]=ia.y,W.array[X+2]=ia.z,W.array[X+3]=ia.w,X+=4}else{if(vc)for(Xa=0;Xa<lc;Xa++)sb=bc[Xa],X=3*Xa,Bb[X]=sb.x,
Bb[X+1]=sb.y,Bb[X+2]=sb.z;if(wc)for(rb=0;rb<uc;rb++)xb=mc[rb],X=3*rb,Cb[X]=xb.r,Cb[X+1]=xb.g,Cb[X+2]=xb.b;if(vb)for(hb=0,Hb=vb.length;hb<Hb;hb++)if(W=vb[hb],W.needsUpdate&&(void 0===W.boundTo||"vertices"===W.boundTo))if(ib=W.value.length,X=0,1===W.size)for($=0;$<ib;$++)W.array[$]=W.value[$];else if(2===W.size)for($=0;$<ib;$++)ia=W.value[$],W.array[X]=ia.x,W.array[X+1]=ia.y,X+=2;else if(3===W.size)if("c"===W.type)for($=0;$<ib;$++)ia=W.value[$],W.array[X]=ia.r,W.array[X+1]=ia.g,W.array[X+2]=ia.b,X+=
3;else for($=0;$<ib;$++)ia=W.value[$],W.array[X]=ia.x,W.array[X+1]=ia.y,W.array[X+2]=ia.z,X+=3;else if(4===W.size)for($=0;$<ib;$++)ia=W.value[$],W.array[X]=ia.x,W.array[X+1]=ia.y,W.array[X+2]=ia.z,W.array[X+3]=ia.w,X+=4}if(vc||Nb.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,qb.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,Bb,kc);if(wc||Nb.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,qb.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,Cb,kc);if(vb)for(hb=0,Hb=vb.length;hb<Hb;hb++)if(W=vb[hb],W.needsUpdate||
Nb.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,W.buffer),m.bufferData(m.ARRAY_BUFFER,W.array,kc)}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;s.attributes&&w(s)}}};this.initMaterial=function(a,b,c,d){var e,f,g,h;a.addEventListener("dispose",Rb);var k,l,p,n,r;a instanceof THREE.MeshDepthMaterial?r="depth":a instanceof THREE.MeshNormalMaterial?r="normal":a instanceof THREE.MeshBasicMaterial?r="basic":a instanceof THREE.MeshLambertMaterial?r="lambert":a instanceof THREE.MeshPhongMaterial?r="phong":a instanceof
THREE.LineBasicMaterial?r="basic":a instanceof THREE.LineDashedMaterial?r="dashed":a instanceof THREE.ParticleSystemMaterial&&(r="particle_basic");if(r){var q=THREE.ShaderLib[r];a.uniforms=THREE.UniformsUtils.clone(q.uniforms);a.vertexShader=q.vertexShader;a.fragmentShader=q.fragmentShader}var s=e=0,t=0,u=q=0;for(f=b.length;u<f;u++)g=b[u],g.onlyShadow||(g instanceof THREE.DirectionalLight&&e++,g instanceof THREE.PointLight&&s++,g instanceof THREE.SpotLight&&t++,g instanceof THREE.HemisphereLight&&
q++);f=s;g=t;h=q;t=q=0;for(s=b.length;t<s;t++)u=b[t],u.castShadow&&(u instanceof THREE.SpotLight&&q++,u instanceof THREE.DirectionalLight&&!u.shadowCascade&&q++);n=q;Eb&&d&&d.useVertexTexture?p=1024:(b=m.getParameter(m.MAX_VERTEX_UNIFORM_VECTORS),b=Math.floor((b-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(b=Math.min(d.bones.length,b),b<d.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.bones.length+", this GPU supports just "+b+" (try OpenGL instead of ANGLE)")),p=b);a:{t=a.fragmentShader;
s=a.vertexShader;q=a.uniforms;b=a.attributes;u=a.defines;c={map:!!a.map,envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,skinning:a.skinning,maxBones:p,useVertexTexture:Eb&&d&&d.useVertexTexture,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,
maxDirLights:e,maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:n,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow,shadowMapType:this.shadowMapType,shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide};d=a.index0AttributeName;var v,w,x;e=[];r?e.push(r):(e.push(t),e.push(s));for(w in u)e.push(w),e.push(u[w]);for(v in c)e.push(v),
e.push(c[v]);r=e.join();v=0;for(w=ga.length;v<w;v++)if(e=ga[v],e.code===r){e.usedTimes++;l=e.program;break a}v="SHADOWMAP_TYPE_BASIC";c.shadowMapType===THREE.PCFShadowMap?v="SHADOWMAP_TYPE_PCF":c.shadowMapType===THREE.PCFSoftShadowMap&&(v="SHADOWMAP_TYPE_PCF_SOFT");w=[];for(x in u)e=u[x],!1!==e&&(e="#define "+x+" "+e,w.push(e));e=w.join("\n");x=m.createProgram();w=["precision "+Y+" float;","precision "+Y+" int;",e,Db?"#define VERTEX_TEXTURES":"",O.gammaInput?"#define GAMMA_INPUT":"",O.gammaOutput?
"#define GAMMA_OUTPUT":"","#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,"#define MAX_BONES "+c.maxBones,c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":
"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals?"#define USE_MORPHNORMALS":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+v:"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",c.sizeAttenuation?"#define USE_SIZEATTENUATION":
"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
v=["precision "+Y+" float;","precision "+Y+" int;",c.bumpMap||c.normalMap?"#extension GL_OES_standard_derivatives : enable":"",e,"#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,c.alphaTest?"#define ALPHATEST "+c.alphaTest:"",O.gammaInput?"#define GAMMA_INPUT":"",O.gammaOutput?"#define GAMMA_OUTPUT":"",c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&
c.fogExp?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.metal?"#define METAL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+v:
"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");w=N("vertex",w+s);v=N("fragment",v+t);m.attachShader(x,w);m.attachShader(x,v);void 0!==d?m.bindAttribLocation(x,0,d):m.bindAttribLocation(x,0,"position");m.linkProgram(x);m.getProgramParameter(x,m.LINK_STATUS)||(console.error("Could not initialise shader\nVALIDATE_STATUS: "+m.getProgramParameter(x,m.VALIDATE_STATUS)+", gl error ["+
m.getError()+"]"),console.error("Program Info Log: "+m.getProgramInfoLog(x)));m.deleteShader(v);m.deleteShader(w);x.uniforms={};x.attributes={};var z;v="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");c.useVertexTexture?(v.push("boneTexture"),v.push("boneTextureWidth"),v.push("boneTextureHeight")):v.push("boneGlobalMatrices");for(z in q)v.push(z);z=v;v=0;for(w=z.length;v<w;v++)q=z[v],x.uniforms[q]=m.getUniformLocation(x,q);v="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");
for(z=0;z<c.maxMorphTargets;z++)v.push("morphTarget"+z);for(z=0;z<c.maxMorphNormals;z++)v.push("morphNormal"+z);for(l in b)v.push(l);l=v;z=0;for(b=l.length;z<b;z++)v=l[z],x.attributes[v]=m.getAttribLocation(x,v);x.id=za++;ga.push({program:x,code:r,usedTimes:1});O.info.memory.programs=ga.length;l=x}a.program=l;z=a.program.attributes;if(a.morphTargets)for(a.numSupportedMorphTargets=0,b="morphTarget",l=0;l<this.maxMorphTargets;l++)x=b+l,0<=z[x]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(a.numSupportedMorphNormals=
0,b="morphNormal",l=0;l<this.maxMorphNormals;l++)x=b+l,0<=z[x]&&a.numSupportedMorphNormals++;a.uniformsList=[];for(k in a.uniforms)a.uniformsList.push([a.uniforms[k],k])};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?m.disable(m.CULL_FACE):(b===THREE.FrontFaceDirectionCW?m.frontFace(m.CW):m.frontFace(m.CCW),a===THREE.CullFaceBack?m.cullFace(m.BACK):a===THREE.CullFaceFront?m.cullFace(m.FRONT):m.cullFace(m.FRONT_AND_BACK),m.enable(m.CULL_FACE))};this.setMaterialFaces=function(a){var b=a.side===
THREE.DoubleSide;a=a.side===THREE.BackSide;Z!==b&&(b?m.disable(m.CULL_FACE):m.enable(m.CULL_FACE),Z=b);Ba!==a&&(a?m.frontFace(m.CW):m.frontFace(m.CCW),Ba=a)};this.setDepthTest=function(a){ma!==a&&(a?m.enable(m.DEPTH_TEST):m.disable(m.DEPTH_TEST),ma=a)};this.setDepthWrite=function(a){Oa!==a&&(m.depthMask(a),Oa=a)};this.setBlending=function(a,b,c,d){a!==Sa&&(a===THREE.NoBlending?m.disable(m.BLEND):a===THREE.AdditiveBlending?(m.enable(m.BLEND),m.blendEquation(m.FUNC_ADD),m.blendFunc(m.SRC_ALPHA,m.ONE)):
a===THREE.SubtractiveBlending?(m.enable(m.BLEND),m.blendEquation(m.FUNC_ADD),m.blendFunc(m.ZERO,m.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(m.enable(m.BLEND),m.blendEquation(m.FUNC_ADD),m.blendFunc(m.ZERO,m.SRC_COLOR)):a===THREE.CustomBlending?m.enable(m.BLEND):(m.enable(m.BLEND),m.blendEquationSeparate(m.FUNC_ADD,m.FUNC_ADD),m.blendFuncSeparate(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA,m.ONE,m.ONE_MINUS_SRC_ALPHA)),Sa=a);if(a===THREE.CustomBlending){if(b!==Ya&&(m.blendEquation(E(b)),Ya=b),c!==la||
d!==Ta)m.blendFunc(E(c),E(d)),la=c,Ta=d}else Ta=la=Ya=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.addEventListener("dispose",yb),a.__webglTexture=m.createTexture(),O.info.memory.textures++);m.activeTexture(m.TEXTURE0+b);m.bindTexture(m.TEXTURE_2D,a.__webglTexture);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);m.pixelStorei(m.UNPACK_ALIGNMENT,a.unpackAlignment);var c=a.image,d=THREE.Math.isPowerOfTwo(c.width)&&
THREE.Math.isPowerOfTwo(c.height),e=E(a.format),f=E(a.type);y(m.TEXTURE_2D,a,d);var g=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<g.length&&d){for(var h=0,k=g.length;h<k;h++)c=g[h],m.texImage2D(m.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data);else if(a instanceof THREE.CompressedTexture)for(h=0,k=g.length;h<k;h++)c=g[h],a.format!==THREE.RGBAFormat?m.compressedTexImage2D(m.TEXTURE_2D,h,e,c.width,c.height,0,c.data):
m.texImage2D(m.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data);else if(0<g.length&&d){h=0;for(k=g.length;h<k;h++)c=g[h],m.texImage2D(m.TEXTURE_2D,h,e,e,f,c);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&m.generateMipmap(m.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else m.activeTexture(m.TEXTURE0+b),m.bindTexture(m.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===
a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",Qb);a.__webglTexture=m.createTexture();O.info.memory.textures++;var c=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),d=E(a.format),e=E(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture);y(m.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=m.createFramebuffer();a.__webglRenderbuffer[f]=m.createRenderbuffer();
m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=m.TEXTURE_CUBE_MAP_POSITIVE_X+f;m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer[f]);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,h,g.__webglTexture,0);K(a.__webglRenderbuffer[f],a)}c&&m.generateMipmap(m.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=m.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:m.createRenderbuffer(),m.bindTexture(m.TEXTURE_2D,a.__webglTexture),
y(m.TEXTURE_2D,a,c),m.texImage2D(m.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=m.TEXTURE_2D,m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):
K(a.__webglRenderbuffer,a),c&&m.generateMipmap(m.TEXTURE_2D);b?m.bindTexture(m.TEXTURE_CUBE_MAP,null):m.bindTexture(m.TEXTURE_2D,null);m.bindRenderbuffer(m.RENDERBUFFER,null);m.bindFramebuffer(m.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=Ea,a=Za,d=na,e=Ra);b!==Aa&&(m.bindFramebuffer(m.FRAMEBUFFER,b),m.viewport(d,e,c,a),Aa=b);La=c;Fa=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);
this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;a.shareDepthFrom=this.shareDepthFrom;
return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.RenderableVertex=function(){this.position=new THREE.Vector3;this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};THREE.RenderableFace=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.centroidModel=new THREE.Vector3;this.normalModel=new THREE.Vector3;this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.material=this.color=null;this.uvs=[[]];this.z=0};THREE.RenderableObject=function(){this.id=0;this.object=null;this.z=0};THREE.RenderableSprite=function(){this.id=0;this.object=null;this.rotation=this.z=this.y=this.x=0;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.vertexColors=[new THREE.Color,new THREE.Color];this.material=null;this.z=0};THREE.GeometryUtils={merge:function(a,b,c){var d,e,f=a.vertices.length,g=b instanceof THREE.Mesh?b.geometry:b,h=a.vertices,k=g.vertices,l=a.faces,n=g.faces;a=a.faceVertexUvs[0];g=g.faceVertexUvs[0];void 0===c&&(c=0);b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,e=(new THREE.Matrix3).getNormalMatrix(d));b=0;for(var q=k.length;b<q;b++){var s=k[b].clone();d&&s.applyMatrix4(d);h.push(s)}b=0;for(q=n.length;b<q;b++){var s=n[b],u,t,p=s.vertexNormals,v=s.vertexColors;u=new THREE.Face3(s.a+
f,s.b+f,s.c+f);u.normal.copy(s.normal);e&&u.normal.applyMatrix3(e).normalize();h=0;for(k=p.length;h<k;h++)t=p[h].clone(),e&&t.applyMatrix3(e).normalize(),u.vertexNormals.push(t);u.color.copy(s.color);h=0;for(k=v.length;h<k;h++)t=v[h],u.vertexColors.push(t.clone());u.materialIndex=s.materialIndex+c;u.centroid.copy(s.centroid);d&&u.centroid.applyMatrix4(d);l.push(u)}b=0;for(q=g.length;b<q;b++){c=g[b];d=[];h=0;for(k=c.length;h<k;h++)d.push(new THREE.Vector2(c[h].x,c[h].y));a.push(d)}},randomPointInTriangle:function(){var a=
new THREE.Vector3;return function(b,c,d){var e=new THREE.Vector3,f=THREE.Math.random16(),g=THREE.Math.random16();1<f+g&&(f=1-f,g=1-g);var h=1-f-g;e.copy(b);e.multiplyScalar(f);a.copy(c);a.multiplyScalar(g);e.add(a);a.copy(d);a.multiplyScalar(h);e.add(a);return e}}(),randomPointInFace:function(a,b,c){return THREE.GeometryUtils.randomPointInTriangle(b.vertices[a.a],b.vertices[a.b],b.vertices[a.c])},randomPointsInGeometry:function(a,b){function c(a){function b(c,d){if(d<c)return c;var e=c+Math.floor((d-
c)/2);return l[e]>a?b(c,e-1):l[e]<a?b(e+1,d):e}return b(0,l.length-1)}var d,e,f=a.faces,g=a.vertices,h=f.length,k=0,l=[],n,q,s;for(e=0;e<h;e++)d=f[e],n=g[d.a],q=g[d.b],s=g[d.c],d._area=THREE.GeometryUtils.triangleArea(n,q,s),k+=d._area,l[e]=k;d=[];for(e=0;e<b;e++)g=THREE.Math.random16()*k,g=c(g),d[e]=THREE.GeometryUtils.randomPointInFace(f[g],a,!0);return d},triangleArea:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){a.subVectors(d,c);b.subVectors(e,c);a.cross(b);return 0.5*
a.length()}}(),center:function(a){a.computeBoundingBox();var b=a.boundingBox,c=new THREE.Vector3;c.addVectors(b.min,b.max);c.multiplyScalar(-0.5);a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x,c.y,c.z));a.computeBoundingBox();return c},triangulateQuads:function(a){var b,c,d,e,f=[],g=[];b=0;for(c=a.faceVertexUvs.length;b<c;b++)g[b]=[];b=0;for(c=a.faces.length;b<c;b++)for(f.push(a.faces[b]),d=0,e=a.faceVertexUvs.length;d<e;d++)g[d].push(a.faceVertexUvs[d][b]);a.faces=f;a.faceVertexUvs=g;a.computeCentroids();
a.computeFaceNormals();a.computeVertexNormals();a.hasTangents&&a.computeTangents()}};THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){d=new THREE.ImageLoader;d.crossOrigin=this.crossOrigin;var e=new THREE.Texture(void 0,b);b=d.load(a,function(){e.needsUpdate=!0;c&&c(e)});e.image=b;e.sourceFile=a;return e},loadCompressedTexture:function(a,b,c,d){var e=new THREE.CompressedTexture;e.mapping=b;var f=new XMLHttpRequest;f.onload=function(){var a=THREE.ImageUtils.parseDDS(f.response,!0);e.format=a.format;e.mipmaps=a.mipmaps;e.image.width=a.width;e.image.height=a.height;
e.generateMipmaps=!1;e.needsUpdate=!0;c&&c(e)};f.onerror=d;f.open("GET",a,!0);f.responseType="arraybuffer";f.send(null);return e},loadTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.Texture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;b=0;for(var g=a.length;b<g;++b){var h=new Image;e[b]=h;h.onload=function(){e.loadCount+=1;6===e.loadCount&&(f.needsUpdate=!0,c&&c(f))};h.onerror=d;h.crossOrigin=this.crossOrigin;h.src=a[b]}return f},loadCompressedTextureCube:function(a,b,c,d){var e=
[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;b=function(a,b){return function(){var d=THREE.ImageUtils.parseDDS(a.response,!0);b.format=d.format;b.mipmaps=d.mipmaps;b.width=d.width;b.height=d.height;e.loadCount+=1;6===e.loadCount&&(f.format=d.format,f.needsUpdate=!0,c&&c(f))}};if(a instanceof Array)for(var g=0,h=a.length;g<h;++g){var k={};e[g]=k;var l=new XMLHttpRequest;l.onload=b(l,k);l.onerror=d;k=a[g];l.open("GET",k,!0);l.responseType=
"arraybuffer";l.send(null)}else l=new XMLHttpRequest,l.onload=function(){var a=THREE.ImageUtils.parseDDS(l.response,!0);if(a.isCubemap){for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var g=0;g<a.mipmapCount;g++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+g]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}f.format=a.format;f.needsUpdate=!0;c&&c(f)}},l.onerror=d,l.open("GET",a,!0),l.responseType="arraybuffer",l.send(null);return f},loadDDSTexture:function(a,
b,c,d){var e=[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;var g=new XMLHttpRequest;g.onload=function(){var a=THREE.ImageUtils.parseDDS(g.response,!0);if(a.isCubemap)for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var n=0;n<a.mipmapCount;n++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+n]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}else f.image.width=a.width,f.image.height=a.height,
f.mipmaps=a.mipmaps;f.format=a.format;f.needsUpdate=!0;c&&c(f)};g.onerror=d;g.open("GET",a,!0);g.responseType="arraybuffer";g.send(null);return f},parseDDS:function(a,b){function c(a){return a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)}function d(a,b,c,d){var e=c*d*4;a=new Uint8Array(a,b,e);for(var e=new Uint8Array(e),f=b=0,g=0;g<d;g++)for(var h=0;h<c;h++){var k=a[f];f++;var l=a[f];f++;var n=a[f];f++;var q=a[f];f++;e[b]=n;b++;e[b]=l;b++;e[b]=k;b++;e[b]=q;b++}return e}
var e={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},f=c("DXT1"),g=c("DXT3"),h=c("DXT5"),k=new Int32Array(a,0,31);if(542327876!==k[0])return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"),e;if(!k[20]&4)return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"),e;var l=k[21],n=!1;switch(l){case f:f=8;e.format=THREE.RGB_S3TC_DXT1_Format;break;case g:f=16;e.format=THREE.RGBA_S3TC_DXT3_Format;break;case h:f=16;e.format=THREE.RGBA_S3TC_DXT5_Format;
break;default:if(32==k[22]&&k[23]&16711680&&k[24]&65280&&k[25]&255&&k[26]&4278190080)n=!0,f=64,e.format=THREE.RGBAFormat;else return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ",String.fromCharCode(l&255,l>>8&255,l>>16&255,l>>24&255)),e}e.mipmapCount=1;k[2]&131072&&!1!==b&&(e.mipmapCount=Math.max(1,k[7]));e.isCubemap=k[28]&512?!0:!1;e.width=k[4];e.height=k[3];for(var k=k[1]+4,g=e.width,h=e.height,l=e.isCubemap?6:1,q=0;q<l;q++){for(var s=0;s<e.mipmapCount;s++){if(n)var u=d(a,k,
g,h),t=u.length;else t=Math.max(4,g)/4*Math.max(4,h)/4*f,u=new Uint8Array(a,k,t);e.mipmaps.push({data:u,width:g,height:h});k+=t;g=Math.max(0.5*g,1);h=Math.max(0.5*h,1)}g=e.width;h=e.height}return e},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,f=document.createElement("canvas");f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,k=g.createImageData(d,
e),l=k.data,n=0;n<d;n++)for(var q=0;q<e;q++){var s=0>q-1?0:q-1,u=q+1>e-1?e-1:q+1,t=0>n-1?0:n-1,p=n+1>d-1?d-1:n+1,v=[],w=[0,0,h[4*(q*d+n)]/255*b];v.push([-1,0,h[4*(q*d+t)]/255*b]);v.push([-1,-1,h[4*(s*d+t)]/255*b]);v.push([0,-1,h[4*(s*d+n)]/255*b]);v.push([1,-1,h[4*(s*d+p)]/255*b]);v.push([1,0,h[4*(q*d+p)]/255*b]);v.push([1,1,h[4*(u*d+p)]/255*b]);v.push([0,1,h[4*(u*d+n)]/255*b]);v.push([-1,1,h[4*(u*d+t)]/255*b]);s=[];t=v.length;for(u=0;u<t;u++){var p=v[u],r=v[(u+1)%t],p=[p[0]-w[0],p[1]-w[1],p[2]-w[2]],
r=[r[0]-w[0],r[1]-w[1],r[2]-w[2]];s.push(c([p[1]*r[2]-p[2]*r[1],p[2]*r[0]-p[0]*r[2],p[0]*r[1]-p[1]*r[0]]))}v=[0,0,0];for(u=0;u<s.length;u++)v[0]+=s[u][0],v[1]+=s[u][1],v[2]+=s[u][2];v[0]/=s.length;v[1]/=s.length;v[2]/=s.length;w=4*(q*d+n);l[w]=(v[0]+1)/2*255|0;l[w+1]=(v[1]+1)/2*255|0;l[w+2]=255*v[2]|0;l[w+3]=255}g.putImageData(k,0,0);return f},generateDataTexture:function(a,b,c){var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*
h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){return this.faces[this.face][this.weight][this.style]},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=
String(a).split(""),f=e.length,g=[];for(a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,k,l,n,q,s,u,t,p,v,w=b.glyphs[a]||b.glyphs["?"];if(w){if(w.o)for(b=w._cachedOutline||(w._cachedOutline=w.o.split(" ")),l=b.length,a=0;a<l;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;n=b[a++]*c;e.moveTo(k,n);break;case "l":k=b[a++]*c+d;n=b[a++]*c;e.lineTo(k,n);break;case "q":k=b[a++]*
c+d;n=b[a++]*c;u=b[a++]*c+d;t=b[a++]*c;e.quadraticCurveTo(u,t,k,n);if(g=f[f.length-1])for(q=g.x,s=g.y,g=1,h=this.divisions;g<=h;g++){var r=g/h;THREE.Shape.Utils.b2(r,q,u,k);THREE.Shape.Utils.b2(r,s,t,n)}break;case "b":if(k=b[a++]*c+d,n=b[a++]*c,u=b[a++]*c+d,t=b[a++]*-c,p=b[a++]*c+d,v=b[a++]*-c,e.bezierCurveTo(k,n,u,t,p,v),g=f[f.length-1])for(q=g.x,s=g.y,g=1,h=this.divisions;g<=h;g++)r=g/h,THREE.Shape.Utils.b3(r,q,u,p,k),THREE.Shape.Utils.b3(r,s,t,v,n)}return{offset:w.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],k,l,n;if(0<b(a))for(l=0;l<e;l++)g[l]=l;else for(l=0;l<e;l++)g[l]=e-1-l;var q=2*e;for(l=e-1;2<e;){if(0>=q--){console.log("Warning, unable to triangulate polygon!");break}k=l;e<=k&&(k=0);l=k+1;e<=l&&(l=0);n=l+1;e<=n&&(n=0);var s;a:{var u=s=void 0,t=void 0,p=void 0,v=void 0,w=void 0,r=void 0,x=void 0,z=
void 0,u=a[g[k]].x,t=a[g[k]].y,p=a[g[l]].x,v=a[g[l]].y,w=a[g[n]].x,r=a[g[n]].y;if(1E-10>(p-u)*(r-t)-(v-t)*(w-u))s=!1;else{var F=void 0,P=void 0,C=void 0,B=void 0,A=void 0,I=void 0,H=void 0,N=void 0,y=void 0,K=void 0,y=N=H=z=x=void 0,F=w-p,P=r-v,C=u-w,B=t-r,A=p-u,I=v-t;for(s=0;s<e;s++)if(x=a[g[s]].x,z=a[g[s]].y,!(x===u&&z===t||x===p&&z===v||x===w&&z===r)&&(H=x-u,N=z-t,y=x-p,K=z-v,x-=w,z-=r,y=F*K-P*y,H=A*N-I*H,N=C*z-B*x,-1E-10<=y&&-1E-10<=N&&-1E-10<=H)){s=!1;break a}s=!0}}if(s){f.push([a[g[k]],a[g[l]],
a[g[n]]]);h.push([g[k],g[l],g[n]]);k=l;for(n=l+1;n<e;k++,n++)g[k]=g[n];e--;q=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(a){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=0.5*(c-a);d=0.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};
THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,k,l,n,q=a[0]instanceof THREE.Vector3;n=q?new THREE.Vector3:new THREE.Vector2;k=0;for(l=a.length;k<l;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),q&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),n.add(h);a={minX:e,minY:f,maxX:b,maxY:c,centroid:n.divideScalar(l)};q&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,k;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,k=g/c.maxX,k=b.getUtoTmapping(k,g),g=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),f.x=g.x+k.x,f.y=g.y+k.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.quaternionWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.quaternionObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.quaternionObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),
this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.quaternionWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.quaternionObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),k=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(k);k=k.getPoint(1);h.push(k.x);h.push(k.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,f,g,h,k,l,n,q,s,u,t,p;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];k=f[3];q=f[0];s=f[1];0<c.length?(g=c[c.length-1],u=g.x,
t=g.y):(g=this.actions[d-1].args,u=g[g.length-2],t=g[g.length-1]);for(f=1;f<=a;f++)p=f/a,g=THREE.Shape.Utils.b2(p,u,q,h),p=THREE.Shape.Utils.b2(p,t,s,k),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];k=f[5];q=f[0];s=f[1];l=f[2];n=f[3];0<c.length?(g=c[c.length-1],u=g.x,t=g.y):(g=this.actions[d-1].args,u=g[g.length-2],t=g[g.length-1]);for(f=1;f<=a;f++)p=f/a,g=THREE.Shape.Utils.b3(p,u,q,l,h),p=THREE.Shape.Utils.b3(p,t,s,n,k),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;p=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;p=p.concat(f[0]);p=new THREE.SplineCurve(p);for(f=1;f<=g;f++)c.push(p.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];k=f[1];s=f[2];l=f[3];g=f[4];q=!!f[5];u=g-l;t=2*a;for(f=1;f<=t;f++)p=f/t,q||(p=1-p),p=l+p*u,g=h+s*Math.cos(p),p=k+s*Math.sin(p),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.ELLIPSE:for(h=f[0],k=f[1],s=f[2],n=f[3],l=f[4],g=f[5],q=!!f[6],u=g-l,t=2*a,f=1;f<=t;f++)p=f/t,q||
(p=1-p),p=l+p*u,g=h+s*Math.cos(p),p=k+n*Math.sin(p),c.push(new THREE.Vector2(g,p))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a){function b(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(1E-10<Math.abs(l)){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y==g.y){if(a.x==g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0==e)return!0;0>e||(d=!d)}}else if(a.y==g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var c,d,e,f,g=[],h=new THREE.Path;c=0;for(d=this.actions.length;c<d;c++)e=this.actions[c],f=e.args,e=e.action,e==
THREE.PathActions.MOVE_TO&&0!=h.actions.length&&(g.push(h),h=new THREE.Path),h[e].apply(h,f);0!=h.actions.length&&g.push(h);if(0==g.length)return[];var k,l,n;f=[];if(1==g.length)return l=g[0],n=new THREE.Shape,n.actions=l.actions,n.curves=l.curves,f.push(n),f;var q=!THREE.Shape.Utils.isClockWise(g[0].getPoints()),q=a?!q:q;n=[];h=[];e=[];var s=0,u;h[s]=void 0;e[s]=[];c=0;for(d=g.length;c<d;c++)l=g[c],u=l.getPoints(),k=THREE.Shape.Utils.isClockWise(u),(k=a?!k:k)?(!q&&h[s]&&s++,h[s]={s:new THREE.Shape,
p:u},h[s].s.actions=l.actions,h[s].s.curves=l.curves,q&&s++,e[s]=[]):e[s].push({h:l,p:u[0]});if(1<h.length){c=!1;d=[];a=0;for(g=h.length;a<g;a++)n[a]=[];a=0;for(g=h.length;a<g;a++)for(l=e[a],k=0;k<l.length;k++){q=l[k];s=!0;for(u=0;u<h.length;u++)b(q.p,h[u].p)&&(a!=u&&d.push({froms:a,tos:u,hole:k}),s?(s=!1,n[u].push(q)):c=!0);s&&n[a].push(q)}0<d.length&&(c||(e=n))}c=0;for(d=h.length;c<d;c++)for(n=h[c].s,f.push(n),a=e[c],g=0,l=a.length;g<l;g++)n.holes.push(a[g].h);return f};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};
THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};
THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!=b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,n=a.x-d.x,q=a.y-d.y,C=h*k-g*l,B=h*n-g*q;if(1E-10<Math.abs(C)){if(0<C){if(0>B||B>C)return[];k=l*n-k*q;if(0>k||k>C)return[]}else{if(0<B||B<C)return[];k=l*n-k*q;if(0<k||k<C)return[]}if(0==k)return!f||0!=B&&B!=C?[a]:[];if(k==C)return!f||0!=B&&B!=C?[b]:[];if(0==B)return[d];
if(B==C)return[e];f=k/C;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!=B||l*n!=k*q)return[];h=0==g&&0==h;k=0==k&&0==l;if(h&&k)return a.x!=d.x||a.y!=d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!=g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,C=d.x,l=e,d=e.x):(b=e,C=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,C=d.y,l=e,d=e.y):(b=e,C=e.y,l=d,d=d.y));return k<=C?a<C?[]:a==C?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:k==d?f?[]:[g]:a<=d?[g,h]:
[g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var f,g,h,k,l,n={};h=a.concat();for(f in b)Array.prototype.push.apply(h,b[f]);f=0;for(g=h.length;f<g;f++)l=h[f].x+":"+h[f].y,void 0!==n[l]&&console.log("Duplicate point",l),n[l]=f;f=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=0);d=e(h[a],h[f],h[g],k[b]);if(!d)return!1;d=k.length-1;
f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],n,q,P,C,B,A,I,H=[],N,y;for(C in b)l.push(C);for(var K=2*l.length;0<l.length;){K--;if(0>K){console.log("Infinite Loop! Holes left:"+
l.length+", Probably Hole outside Shape!");break}for(q=0;q<h.length;q++){P=h[q];n=-1;for(C=0;C<l.length;C++)if(B=l[C],I=P.x+":"+P.y+":"+B,void 0===H[I]){k=b[B];for(B=0;B<k.length;B++)if(A=k[B],c(q,B)&&!f(P,A)&&!g(P,A)){n=B;l.splice(C,1);B=h.slice(0,q+1);A=h.slice(q);N=k.slice(n);y=k.slice(0,n+1);h=B.concat(N).concat(y).concat(A);break}if(0<=n)break;H[I]=!0}if(0<=n)break}}return h}(a,b);var q=THREE.FontUtils.Triangulate(f,!1);f=0;for(g=q.length;f<g;f++)for(k=q[f],h=0;3>h;h++)l=k[h].x+":"+k[h].y,l=
n[l],void 0!==l&&(k[h]=l);return q.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,
b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint=function(a){var b;b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;a*=d.length-1;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],g=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,g.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,g.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,g.z,c.z,a);return b});THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});THREE.AnimationHandler=function(){var a=[],b={},c={update:function(b){for(var c=0;c<a.length;c++)a[c].update(b)},addToUpdate:function(b){-1===a.indexOf(b)&&a.push(b)},removeFromUpdate:function(b){b=a.indexOf(b);-1!==b&&a.splice(b,1)},add:function(a){void 0!==b[a.name]&&console.log("THREE.AnimationHandler.add: Warning! "+a.name+" already exists in library. Overwriting.");b[a.name]=a;if(!0!==a.initialized){for(var c=0;c<a.hierarchy.length;c++){for(var d=0;d<a.hierarchy[c].keys.length;d++)if(0>a.hierarchy[c].keys[d].time&&
(a.hierarchy[c].keys[d].time=0),void 0!==a.hierarchy[c].keys[d].rot&&!(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)){var h=a.hierarchy[c].keys[d].rot;a.hierarchy[c].keys[d].rot=new THREE.Quaternion(h[0],h[1],h[2],h[3])}if(a.hierarchy[c].keys.length&&void 0!==a.hierarchy[c].keys[0].morphTargets){h={};for(d=0;d<a.hierarchy[c].keys.length;d++)for(var k=0;k<a.hierarchy[c].keys[d].morphTargets.length;k++){var l=a.hierarchy[c].keys[d].morphTargets[k];h[l]=-1}a.hierarchy[c].usedMorphTargets=h;
for(d=0;d<a.hierarchy[c].keys.length;d++){var n={};for(l in h){for(k=0;k<a.hierarchy[c].keys[d].morphTargets.length;k++)if(a.hierarchy[c].keys[d].morphTargets[k]===l){n[l]=a.hierarchy[c].keys[d].morphTargetsInfluences[k];break}k===a.hierarchy[c].keys[d].morphTargets.length&&(n[l]=0)}a.hierarchy[c].keys[d].morphTargetsInfluences=n}}for(d=1;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].time===a.hierarchy[c].keys[d-1].time&&(a.hierarchy[c].keys.splice(d,1),d--);for(d=0;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].index=
d}a.initialized=!0}},get:function(a){if("string"===typeof a){if(b[a])return b[a];console.log("THREE.AnimationHandler.get: Couldn't find animation "+a);return null}},parse:function(a){var b=[];if(a instanceof THREE.SkinnedMesh)for(var c=0;c<a.bones.length;c++)b.push(a.bones[c]);else d(a,b);return b}},d=function(a,b){b.push(a);for(var c=0;c<a.children.length;c++)d(a.children[c],b)};c.LINEAR=0;c.CATMULLROM=1;c.CATMULLROM_FORWARD=2;return c}();THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=this.isPaused=!0;this.interpolationType=THREE.AnimationHandler.LINEAR;this.points=[];this.target=new THREE.Vector3};THREE.Animation.prototype.play=function(a){this.currentTime=void 0!==a?a:0;!1===this.isPlaying&&(this.isPlaying=!0,this.reset(),this.update(0));this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};
THREE.Animation.prototype.pause=function(){!0===this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};THREE.Animation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this)};
THREE.Animation.prototype.reset=function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];c.matrixAutoUpdate=!0;void 0===c.animationCache&&(c.animationCache={},c.animationCache.prevKey={pos:0,rot:0,scl:0},c.animationCache.nextKey={pos:0,rot:0,scl:0},c.animationCache.originalMatrix=c instanceof THREE.Bone?c.skinMatrix:c.matrix);var d=c.animationCache.prevKey,c=c.animationCache.nextKey;d.pos=this.data.hierarchy[a].keys[0];d.rot=this.data.hierarchy[a].keys[0];d.scl=this.data.hierarchy[a].keys[0];
c.pos=this.getNextKeyWith("pos",a,1);c.rot=this.getNextKeyWith("rot",a,1);c.scl=this.getNextKeyWith("scl",a,1)}};
THREE.Animation.prototype.update=function(a){if(!1!==this.isPlaying){this.currentTime+=a*this.timeScale;var b;a=["pos","rot","scl"];var c=this.data.length;!0===this.loop&&this.currentTime>c&&(this.currentTime%=c,this.reset());this.currentTime=Math.min(this.currentTime,c);for(var d=0,e=this.hierarchy.length;d<e;d++)for(var f=this.hierarchy[d],g=f.animationCache,h=0;3>h;h++){b=a[h];var k=g.prevKey[b],l=g.nextKey[b];if(l.time<=this.currentTime){k=this.data.hierarchy[d].keys[0];for(l=this.getNextKeyWith(b,
d,1);l.time<this.currentTime&&l.index>k.index;)k=l,l=this.getNextKeyWith(b,d,l.index+1);g.prevKey[b]=k;g.nextKey[b]=l}f.matrixAutoUpdate=!0;f.matrixWorldNeedsUpdate=!0;var n=(this.currentTime-k.time)/(l.time-k.time),q=k[b],s=l[b];0>n&&(n=0);1<n&&(n=1);if("pos"===b)if(b=f.position,this.interpolationType===THREE.AnimationHandler.LINEAR)b.x=q[0]+(s[0]-q[0])*n,b.y=q[1]+(s[1]-q[1])*n,b.z=q[2]+(s[2]-q[2])*n;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)this.points[0]=
this.getPrevKeyWith("pos",d,k.index-1).pos,this.points[1]=q,this.points[2]=s,this.points[3]=this.getNextKeyWith("pos",d,l.index+1).pos,n=0.33*n+0.33,k=this.interpolateCatmullRom(this.points,n),b.x=k[0],b.y=k[1],b.z=k[2],this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(n=this.interpolateCatmullRom(this.points,1.01*n),this.target.set(n[0],n[1],n[2]),this.target.sub(b),this.target.y=0,this.target.normalize(),b=Math.atan2(this.target.x,this.target.z),f.rotation.set(0,b,0))}else"rot"===
b?THREE.Quaternion.slerp(q,s,f.quaternion,n):"scl"===b&&(b=f.scale,b.x=q[0]+(s[0]-q[0])*n,b.y=q[1]+(s[1]-q[1])*n,b.z=q[2]+(s[2]-q[2])*n)}!1===this.loop&&this.currentTime>c&&this.stop()}};
THREE.Animation.prototype.interpolateCatmullRom=function(a,b){var c=[],d=[],e,f,g,h,k,l;e=(a.length-1)*b;f=Math.floor(e);e-=f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>a.length-2?f:f+1;c[3]=f>a.length-3?f:f+2;f=a[c[0]];h=a[c[1]];k=a[c[2]];l=a[c[3]];c=e*e;g=e*c;d[0]=this.interpolate(f[0],h[0],k[0],l[0],e,c,g);d[1]=this.interpolate(f[1],h[1],k[1],l[1],e,c,g);d[2]=this.interpolate(f[2],h[2],k[2],l[2],e,c,g);return d};
THREE.Animation.prototype.interpolate=function(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b};THREE.Animation.prototype.getNextKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};THREE.KeyFrameAnimation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;for(var c=0,d=this.hierarchy.length;c<d;c++){var e=this.data.hierarchy[c].sids,f=this.hierarchy[c];if(this.data.hierarchy[c].keys.length&&e){for(var g=0;g<e.length;g++){var h=e[g],k=this.getNextKeyWith(h,c,0);k&&k.apply(h)}f.matrixAutoUpdate=!1;this.data.hierarchy[c].node.updateMatrix();
f.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c instanceof THREE.Bone?c.skinMatrix:c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=
c[1],this.startTime=Math.min(c[0].time,this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.KeyFrameAnimation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;b instanceof THREE.Bone?(d.copy(b.skinMatrix),b.skinMatrix=d):(d.copy(b.matrix),b.matrix=d);delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(!1!==this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var f=d.prevKey,g=d.nextKey;if(g.time<=this.currentTime){for(;g.time<this.currentTime&&g.index>f.index;)f=g,g=e[f.index+1];d.prevKey=
f;d.nextKey=g}g.time>=this.currentTime?f.interpolate(g,this.currentTime):f.interpolate(g,g.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(){var a=0,b=0;return function(c){if(!1!==this.isPlaying){this.currentTime+=c;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);c=this.duration/this.frames;var d=Math.floor(this.currentTime/c);d!=b&&(this.mesh.morphTargetInfluences[a]=0,this.mesh.morphTargetInfluences[b]=1,this.mesh.morphTargetInfluences[d]=
0,a=b,b=d);this.mesh.morphTargetInfluences[d]=this.currentTime%c/c;this.mesh.morphTargetInfluences[a]=1-this.mesh.morphTargetInfluences[d]}}}()};THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,
1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,s=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=s;c.activeCubeFace=5;a.render(b,k,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CombinedCamera=function(a,b,c,d,e,f,g){THREE.Camera.call(this);this.fov=c;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2;this.cameraO=new THREE.OrthographicCamera(a/-2,a/2,b/2,b/-2,f,g);this.cameraP=new THREE.PerspectiveCamera(c,a/b,d,e);this.zoom=1;this.toPerspective()};THREE.CombinedCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective=function(){this.near=this.cameraP.near;this.far=this.cameraP.far;this.cameraP.fov=this.fov/this.zoom;this.cameraP.updateProjectionMatrix();this.projectionMatrix=this.cameraP.projectionMatrix;this.inPerspectiveMode=!0;this.inOrthographicMode=!1};
THREE.CombinedCamera.prototype.toOrthographic=function(){var a=this.cameraP.aspect,b=(this.cameraP.near+this.cameraP.far)/2,b=Math.tan(this.fov/2)*b,a=2*b*a/2,b=b/this.zoom,a=a/this.zoom;this.cameraO.left=-a;this.cameraO.right=a;this.cameraO.top=b;this.cameraO.bottom=-b;this.cameraO.updateProjectionMatrix();this.near=this.cameraO.near;this.far=this.cameraO.far;this.projectionMatrix=this.cameraO.projectionMatrix;this.inPerspectiveMode=!1;this.inOrthographicMode=!0};
THREE.CombinedCamera.prototype.setSize=function(a,b){this.cameraP.aspect=a/b;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2};THREE.CombinedCamera.prototype.setFov=function(a){this.fov=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.updateProjectionMatrix=function(){this.inPerspectiveMode?this.toPerspective():(this.toPerspective(),this.toOrthographic())};
THREE.CombinedCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);var c=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.setFov(c);return c};THREE.CombinedCamera.prototype.setZoom=function(a){this.zoom=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.toFrontView=function(){this.rotation.x=0;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toBackView=function(){this.rotation.x=0;this.rotation.y=Math.PI;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toLeftView=function(){this.rotation.x=0;this.rotation.y=-Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toRightView=function(){this.rotation.x=0;this.rotation.y=Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toTopView=function(){this.rotation.x=-Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toBottomView=function(){this.rotation.x=Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.BoxGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,p){var v,w=h.widthSegments,r=h.heightSegments,x=e/2,z=f/2,F=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)v="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)v="y",r=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)v="x",w=h.depthSegments;var P=w+1,C=r+1,B=e/w,A=f/r,I=new THREE.Vector3;I[v]=0<g?1:-1;for(e=0;e<C;e++)for(f=0;f<P;f++){var H=new THREE.Vector3;H[a]=(f*B-x)*c;H[b]=(e*A-z)*d;H[v]=g;h.vertices.push(H)}for(e=
0;e<r;e++)for(f=0;f<w;f++)z=f+P*e,a=f+P*(e+1),b=f+1+P*(e+1),c=f+1+P*e,d=new THREE.Vector2(f/w,1-e/r),g=new THREE.Vector2(f/w,1-(e+1)/r),v=new THREE.Vector2((f+1)/w,1-(e+1)/r),x=new THREE.Vector2((f+1)/w,1-e/r),z=new THREE.Face3(z+F,a+F,c+F),z.normal.copy(I),z.vertexNormals.push(I.clone(),I.clone(),I.clone()),z.materialIndex=p,h.faces.push(z),h.faceVertexUvs[0].push([d,g,x]),z=new THREE.Face3(a+F,b+F,c+F),z.normal.copy(I),z.vertexNormals.push(I.clone(),I.clone(),I.clone()),z.materialIndex=p,h.faces.push(z),
h.faceVertexUvs[0].push([g.clone(),v,x.clone()])}THREE.Geometry.call(this);var h=this;this.width=a;this.height=b;this.depth=c;this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;a=this.width/2;b=this.height/2;c=this.depth/2;g("z","y",-1,-1,this.depth,this.height,a,0);g("z","y",1,-1,this.depth,this.height,-a,1);g("x","z",1,1,this.width,this.depth,b,2);g("x","z",1,-1,this.width,this.depth,-b,3);g("x","y",1,-1,this.width,this.height,c,4);g("x","y",-1,-1,this.width,this.height,-c,
5);this.computeCentroids();this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.radius=a=a||50;this.segments=b=void 0!==b?Math.max(3,b):8;this.thetaStart=c=void 0!==c?c:0;this.thetaLength=d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(0.5,0.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,
e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CubeGeometry=THREE.BoxGeometry;THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.radiusTop=a=void 0!==a?a:20;this.radiusBottom=b=void 0!==b?b:20;this.height=c=void 0!==c?c:100;this.radialSegments=d=d||8;this.heightSegments=e=e||1;this.openEnded=f=void 0!==f?f:!1;var g=c/2,h,k,l=[],n=[];for(k=0;k<=e;k++){var q=[],s=[],u=k/e,t=u*(b-a)+a;for(h=0;h<=d;h++){var p=h/d,v=new THREE.Vector3;v.x=t*Math.sin(p*Math.PI*2);v.y=-u*c+g;v.z=t*Math.cos(p*Math.PI*2);this.vertices.push(v);q.push(this.vertices.length-1);s.push(new THREE.Vector2(p,
1-u))}l.push(q);n.push(s)}c=(b-a)/c;for(h=0;h<d;h++)for(0!==a?(q=this.vertices[l[0][h]].clone(),s=this.vertices[l[0][h+1]].clone()):(q=this.vertices[l[1][h]].clone(),s=this.vertices[l[1][h+1]].clone()),q.setY(Math.sqrt(q.x*q.x+q.z*q.z)*c).normalize(),s.setY(Math.sqrt(s.x*s.x+s.z*s.z)*c).normalize(),k=0;k<e;k++){var u=l[k][h],t=l[k+1][h],p=l[k+1][h+1],v=l[k][h+1],w=q.clone(),r=q.clone(),x=s.clone(),z=s.clone(),F=n[k][h].clone(),P=n[k+1][h].clone(),C=n[k+1][h+1].clone(),B=n[k][h+1].clone();this.faces.push(new THREE.Face3(u,
t,v,[w,r,z]));this.faceVertexUvs[0].push([F,P,B]);this.faces.push(new THREE.Face3(t,p,v,[r.clone(),x,z.clone()]));this.faceVertexUvs[0].push([P.clone(),C,B.clone()])}if(!1===f&&0<a)for(this.vertices.push(new THREE.Vector3(0,g,0)),h=0;h<d;h++)u=l[0][h],t=l[0][h+1],p=this.vertices.length-1,w=new THREE.Vector3(0,1,0),r=new THREE.Vector3(0,1,0),x=new THREE.Vector3(0,1,0),F=n[0][h].clone(),P=n[0][h+1].clone(),C=new THREE.Vector2(P.x,0),this.faces.push(new THREE.Face3(u,t,p,[w,r,x])),this.faceVertexUvs[0].push([F,
P,C]);if(!1===f&&0<b)for(this.vertices.push(new THREE.Vector3(0,-g,0)),h=0;h<d;h++)u=l[k][h+1],t=l[k][h],p=this.vertices.length-1,w=new THREE.Vector3(0,-1,0),r=new THREE.Vector3(0,-1,0),x=new THREE.Vector3(0,-1,0),F=n[k][h+1].clone(),P=n[k][h].clone(),C=new THREE.Vector2(P.x,1),this.faces.push(new THREE.Face3(u,t,p,[w,r,x])),this.faceVertexUvs[0].push([F,P,C]);this.computeCentroids();this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.shapebb=a[a.length-1].getBoundingBox(),this.addShapeList(a,b),this.computeCentroids(),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=THREE.Math.sign,e=1,e=a.x-b.x,f=a.y-b.y,g=c.x-a.x,h=c.y-a.y,k=e*e+f*f;if(1E-10<Math.abs(e*h-f*g)){var l=Math.sqrt(k),d=Math.sqrt(g*g+h*h),k=b.x-f/l;b=b.y+e/l;g=((c.x-h/d-k)*h-(c.y+g/d-b)*g)/(e*h-f*g);c=k+e*g-a.x;a=b+f*g-a.y;e=c*c+a*a;if(2>=e)return new THREE.Vector2(c,a);e=Math.sqrt(e/2)}else a=!1,1E-10<e?1E-10<g&&(a=!0):-1E-10>e?-1E-10>g&&
(a=!0):d(f)==d(h)&&(a=!0),a?(c=-f,a=e,e=Math.sqrt(k)):(c=e,a=f,e=Math.sqrt(k/2));return new THREE.Vector2(c/e,a/e)}function e(c,d){var e,f;for(L=c.length;0<=--L;){e=L;f=L-1;0>f&&(f=c.length-1);for(var g=0,h=u+2*n,g=0;g<h;g++){var k=ja*g,l=ja*(g+1),p=d+e+k,k=d+f+k,q=d+f+l,l=d+e+l,s=c,t=g,v=h,w=e,y=f,p=p+N,k=k+N,q=q+N,l=l+N;H.faces.push(new THREE.Face3(p,k,l,null,null,r));H.faces.push(new THREE.Face3(k,q,l,null,null,r));p=x.generateSideWallUV(H,a,s,b,p,k,q,l,t,v,w,y);H.faceVertexUvs[0].push([p[0],p[1],
p[3]]);H.faceVertexUvs[0].push([p[1],p[2],p[3]])}}}function f(a,b,c){H.vertices.push(new THREE.Vector3(a,b,c))}function g(c,d,e,f){c+=N;d+=N;e+=N;H.faces.push(new THREE.Face3(c,d,e,null,null,w));c=f?x.generateBottomUV(H,a,b,c,d,e):x.generateTopUV(H,a,b,c,d,e);H.faceVertexUvs[0].push(c)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,n=void 0!==b.bevelSegments?b.bevelSegments:3,q=void 0!==b.bevelEnabled?b.bevelEnabled:!0,s=
void 0!==b.curveSegments?b.curveSegments:12,u=void 0!==b.steps?b.steps:1,t=b.extrudePath,p,v=!1,w=b.material,r=b.extrudeMaterial,x=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,z,F,P,C;t&&(p=t.getSpacedPoints(u),v=!0,q=!1,z=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(t,u,!1),F=new THREE.Vector3,P=new THREE.Vector3,C=new THREE.Vector3);q||(l=k=n=0);var B,A,I,H=this,N=this.vertices.length,t=a.extractPoints(s),s=t.shape,y=t.holes;if(t=!THREE.Shape.Utils.isClockWise(s)){s=
s.reverse();A=0;for(I=y.length;A<I;A++)B=y[A],THREE.Shape.Utils.isClockWise(B)&&(y[A]=B.reverse());t=!1}var K=THREE.Shape.Utils.triangulateShape(s,y),D=s;A=0;for(I=y.length;A<I;A++)B=y[A],s=s.concat(B);var E,G,T,Y,V,ja=s.length,R,pa=K.length,t=[],L=0;T=D.length;E=T-1;for(G=L+1;L<T;L++,E++,G++)E===T&&(E=0),G===T&&(G=0),t[L]=d(D[L],D[E],D[G]);var ka=[],Q,U=t.concat();A=0;for(I=y.length;A<I;A++){B=y[A];Q=[];L=0;T=B.length;E=T-1;for(G=L+1;L<T;L++,E++,G++)E===T&&(E=0),G===T&&(G=0),Q[L]=d(B[L],B[E],B[G]);
ka.push(Q);U=U.concat(Q)}for(E=0;E<n;E++){T=E/n;Y=k*(1-T);G=l*Math.sin(T*Math.PI/2);L=0;for(T=D.length;L<T;L++)V=c(D[L],t[L],G),f(V.x,V.y,-Y);A=0;for(I=y.length;A<I;A++)for(B=y[A],Q=ka[A],L=0,T=B.length;L<T;L++)V=c(B[L],Q[L],G),f(V.x,V.y,-Y)}G=l;for(L=0;L<ja;L++)V=q?c(s[L],U[L],G):s[L],v?(P.copy(z.normals[0]).multiplyScalar(V.x),F.copy(z.binormals[0]).multiplyScalar(V.y),C.copy(p[0]).add(P).add(F),f(C.x,C.y,C.z)):f(V.x,V.y,0);for(T=1;T<=u;T++)for(L=0;L<ja;L++)V=q?c(s[L],U[L],G):s[L],v?(P.copy(z.normals[T]).multiplyScalar(V.x),
F.copy(z.binormals[T]).multiplyScalar(V.y),C.copy(p[T]).add(P).add(F),f(C.x,C.y,C.z)):f(V.x,V.y,h/u*T);for(E=n-1;0<=E;E--){T=E/n;Y=k*(1-T);G=l*Math.sin(T*Math.PI/2);L=0;for(T=D.length;L<T;L++)V=c(D[L],t[L],G),f(V.x,V.y,h+Y);A=0;for(I=y.length;A<I;A++)for(B=y[A],Q=ka[A],L=0,T=B.length;L<T;L++)V=c(B[L],Q[L],G),v?f(V.x,V.y+p[u-1].y,p[u-1].x+Y):f(V.x,V.y,h+Y)}(function(){if(q){var a;a=0*ja;for(L=0;L<pa;L++)R=K[L],g(R[2]+a,R[1]+a,R[0]+a,!0);a=u+2*n;a*=ja;for(L=0;L<pa;L++)R=K[L],g(R[0]+a,R[1]+a,R[2]+a,
!1)}else{for(L=0;L<pa;L++)R=K[L],g(R[2],R[1],R[0],!0);for(L=0;L<pa;L++)R=K[L],g(R[0]+ja*u,R[1]+ja*u,R[2]+ja*u,!1)}})();(function(){var a=0;e(D,a);a+=D.length;A=0;for(I=y.length;A<I;A++)B=y[A],e(B,a),a+=B.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.Vector2(a.vertices[d].x,a.vertices[d].y),new THREE.Vector2(b,e),new THREE.Vector2(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,g,h,k,l,n,q){b=a.vertices[e].x;c=a.vertices[e].y;e=a.vertices[e].z;d=a.vertices[f].x;k=a.vertices[f].y;f=a.vertices[f].z;l=a.vertices[g].x;
n=a.vertices[g].y;g=a.vertices[g].z;q=a.vertices[h].x;var s=a.vertices[h].y;a=a.vertices[h].z;return 0.01>Math.abs(c-k)?[new THREE.Vector2(b,1-e),new THREE.Vector2(d,1-f),new THREE.Vector2(l,1-g),new THREE.Vector2(q,1-a)]:[new THREE.Vector2(c,1-e),new THREE.Vector2(k,1-f),new THREE.Vector2(n,1-g),new THREE.Vector2(s,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;
THREE.ExtrudeGeometry.__v5=new THREE.Vector2;THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.shapebb=a[a.length-1].getBoundingBox();this.addShapeList(a,b);this.computeCentroids();this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,f=l.length;e<f;e++)g=l[e],THREE.Shape.Utils.isClockWise(g)&&(l[e]=g.reverse());var n=THREE.Shape.Utils.triangulateShape(k,l);e=0;for(f=l.length;e<f;e++)g=l[e],
k=k.concat(g);l=k.length;f=n.length;for(e=0;e<l;e++)g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)l=n[e],k=l[0]+h,g=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,g,l,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,k,g,l))};THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var k=c+g*f*d,l=Math.cos(k),n=Math.sin(k),k=0,q=a.length;k<q;k++){var s=a[k],u=new THREE.Vector3;u.x=l*s.x-n*s.y;u.y=n*s.x+l*s.y;u.z=s.z;this.vertices.push(u)}c=a.length;g=0;for(h=b;g<h;g++)for(k=0,q=a.length-1;k<q;k++){b=n=k+c*g;d=n+c;var l=n+1+c,n=n+1,s=g*f,u=k*e,t=s+f,p=u+e;this.faces.push(new THREE.Face3(b,d,n));this.faceVertexUvs[0].push([new THREE.Vector2(s,
u),new THREE.Vector2(t,u),new THREE.Vector2(s,p)]);this.faces.push(new THREE.Face3(d,l,n));this.faceVertexUvs[0].push([new THREE.Vector2(t,u),new THREE.Vector2(t,p),new THREE.Vector2(s,p)])}this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.width=a;this.height=b;this.widthSegments=c||1;this.heightSegments=d||1;var e=a/2,f=b/2;c=this.widthSegments;d=this.heightSegments;var g=c+1,h=d+1,k=this.width/c,l=this.height/d,n=new THREE.Vector3(0,0,1);for(a=0;a<h;a++)for(b=0;b<g;b++)this.vertices.push(new THREE.Vector3(b*k-e,-(a*l-f),0));for(a=0;a<d;a++)for(b=0;b<c;b++){var q=b+g*a,e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,k=new THREE.Vector2(b/c,1-a/d),l=new THREE.Vector2(b/c,1-(a+
1)/d),s=new THREE.Vector2((b+1)/c,1-(a+1)/d),u=new THREE.Vector2((b+1)/c,1-a/d),q=new THREE.Face3(q,e,h);q.normal.copy(n);q.vertexNormals.push(n.clone(),n.clone(),n.clone());this.faces.push(q);this.faceVertexUvs[0].push([k,l,u]);q=new THREE.Face3(e,f,h);q.normal.copy(n);q.vertexNormals.push(n.clone(),n.clone(),n.clone());this.faces.push(q);this.faceVertexUvs[0].push([l.clone(),s,u.clone()])}this.computeCentroids()};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);a=a||0;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(3,d):8;var g,h=[],k=a,l=(b-a)/d;for(a=0;a<=d;a++){for(g=0;g<=c;g++){var n=new THREE.Vector3,q=e+g/c*f;n.x=k*Math.cos(q);n.y=k*Math.sin(q);this.vertices.push(n);h.push(new THREE.Vector2((n.x/b+1)/2,(n.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*c,g=0;g<=c;g++)q=g+e,f=q+a,l=q+c+a,n=q+c+1+a,this.faces.push(new THREE.Face3(f,
l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[n].clone()]),f=q+a,l=q+c+1+a,n=q+1+a,this.faces.push(new THREE.Face3(f,l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[n].clone()]);this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.radius=a=a||50;this.widthSegments=b=Math.max(3,Math.floor(b)||8);this.heightSegments=c=Math.max(2,Math.floor(c)||6);this.phiStart=d=void 0!==d?d:0;this.phiLength=e=void 0!==e?e:2*Math.PI;this.thetaStart=f=void 0!==f?f:0;this.thetaLength=g=void 0!==g?g:Math.PI;var h,k,l=[],n=[];for(k=0;k<=c;k++){var q=[],s=[];for(h=0;h<=b;h++){var u=h/b,t=k/c,p=new THREE.Vector3;p.x=-a*Math.cos(d+u*e)*Math.sin(f+t*g);p.y=a*Math.cos(f+t*g);
p.z=a*Math.sin(d+u*e)*Math.sin(f+t*g);this.vertices.push(p);q.push(this.vertices.length-1);s.push(new THREE.Vector2(u,1-t))}l.push(q);n.push(s)}for(k=0;k<this.heightSegments;k++)for(h=0;h<this.widthSegments;h++){b=l[k][h+1];c=l[k][h];d=l[k+1][h];e=l[k+1][h+1];f=this.vertices[b].clone().normalize();g=this.vertices[c].clone().normalize();var q=this.vertices[d].clone().normalize(),s=this.vertices[e].clone().normalize(),u=n[k][h+1].clone(),t=n[k][h].clone(),p=n[k+1][h].clone(),v=n[k+1][h+1].clone();Math.abs(this.vertices[b].y)===
this.radius?(u.x=(u.x+t.x)/2,this.faces.push(new THREE.Face3(b,d,e,[f,q,s])),this.faceVertexUvs[0].push([u,p,v])):Math.abs(this.vertices[d].y)===this.radius?(p.x=(p.x+v.x)/2,this.faces.push(new THREE.Face3(b,c,d,[f,g,q])),this.faceVertexUvs[0].push([u,t,p])):(this.faces.push(new THREE.Face3(b,c,e,[f,g,s])),this.faceVertexUvs[0].push([u,t,v]),this.faces.push(new THREE.Face3(c,d,e,[g.clone(),q,s.clone()])),this.faceVertexUvs[0].push([t.clone(),p,v.clone()]))}this.computeCentroids();this.computeFaceNormals();
this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||8;this.tubularSegments=d||6;this.arc=e||2*Math.PI;e=new THREE.Vector3;a=[];b=[];for(c=0;c<=this.radialSegments;c++)for(d=0;d<=this.tubularSegments;d++){var f=d/this.tubularSegments*this.arc,g=c/this.radialSegments*Math.PI*2;e.x=this.radius*Math.cos(f);e.y=this.radius*Math.sin(f);var h=new THREE.Vector3;h.x=(this.radius+this.tube*Math.cos(g))*Math.cos(f);h.y=(this.radius+this.tube*
Math.cos(g))*Math.sin(f);h.z=this.tube*Math.sin(g);this.vertices.push(h);a.push(new THREE.Vector2(d/this.tubularSegments,c/this.radialSegments));b.push(h.clone().sub(e).normalize())}for(c=1;c<=this.radialSegments;c++)for(d=1;d<=this.tubularSegments;d++){e=(this.tubularSegments+1)*c+d-1;var f=(this.tubularSegments+1)*(c-1)+d-1,g=(this.tubularSegments+1)*(c-1)+d,h=(this.tubularSegments+1)*c+d,k=new THREE.Face3(e,f,h,[b[e].clone(),b[f].clone(),b[h].clone()]);this.faces.push(k);this.faceVertexUvs[0].push([a[e].clone(),
a[f].clone(),a[h].clone()]);k=new THREE.Face3(f,g,h,[b[f].clone(),b[g].clone(),b[h].clone()]);this.faces.push(k);this.faceVertexUvs[0].push([a[f].clone(),a[g].clone(),a[h].clone()])}this.computeCentroids();this.computeFaceNormals()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*0.5;g=d*(2+b)*g*0.5;d=e*d*Math.sin(a)*0.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||64;this.tubularSegments=d||8;this.p=e||2;this.q=f||3;this.heightScale=g||1;this.grid=Array(this.radialSegments);c=new THREE.Vector3;d=new THREE.Vector3;e=new THREE.Vector3;for(a=0;a<this.radialSegments;++a)for(this.grid[a]=
Array(this.tubularSegments),b=a/this.radialSegments*2*this.p*Math.PI,f=h(b,this.q,this.p,this.radius,this.heightScale),b=h(b+0.01,this.q,this.p,this.radius,this.heightScale),c.subVectors(b,f),d.addVectors(b,f),e.crossVectors(c,d),d.crossVectors(e,c),e.normalize(),d.normalize(),b=0;b<this.tubularSegments;++b){var k=b/this.tubularSegments*2*Math.PI;g=-this.tube*Math.cos(k);var k=this.tube*Math.sin(k),l=new THREE.Vector3;l.x=f.x+g*d.x+k*e.x;l.y=f.y+g*d.y+k*e.y;l.z=f.z+g*d.z+k*e.z;this.grid[a][b]=this.vertices.push(l)-
1}for(a=0;a<this.radialSegments;++a)for(b=0;b<this.tubularSegments;++b){e=(a+1)%this.radialSegments;f=(b+1)%this.tubularSegments;c=this.grid[a][b];d=this.grid[e][b];e=this.grid[e][f];f=this.grid[a][f];g=new THREE.Vector2(a/this.radialSegments,b/this.tubularSegments);var k=new THREE.Vector2((a+1)/this.radialSegments,b/this.tubularSegments),l=new THREE.Vector2((a+1)/this.radialSegments,(b+1)/this.tubularSegments),n=new THREE.Vector2(a/this.radialSegments,(b+1)/this.tubularSegments);this.faces.push(new THREE.Face3(c,
d,f));this.faceVertexUvs[0].push([g,k,n]);this.faces.push(new THREE.Face3(d,e,f));this.faceVertexUvs[0].push([k.clone(),l,n.clone()])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.path=a;this.segments=b||64;this.radius=c||1;this.radialSegments=d||8;this.closed=e||!1;this.grid=[];var f,g;d=this.segments+1;var h,k,l;e=new THREE.Vector3;var n,q;b=new THREE.TubeGeometry.FrenetFrames(this.path,this.segments,this.closed);n=b.normals;q=b.binormals;this.tangents=b.tangents;this.normals=n;this.binormals=q;for(b=0;b<d;b++)for(this.grid[b]=[],c=b/(d-1),l=a.getPointAt(c),f=n[b],g=q[b],c=0;c<this.radialSegments;c++)h=
c/this.radialSegments*2*Math.PI,k=-this.radius*Math.cos(h),h=this.radius*Math.sin(h),e.copy(l),e.x+=k*f.x+h*g.x,e.y+=k*f.y+h*g.y,e.z+=k*f.z+h*g.z,this.grid[b][c]=this.vertices.push(new THREE.Vector3(e.x,e.y,e.z))-1;for(b=0;b<this.segments;b++)for(c=0;c<this.radialSegments;c++)e=this.closed?(b+1)%this.segments:b+1,n=(c+1)%this.radialSegments,a=this.grid[b][c],d=this.grid[e][c],e=this.grid[e][n],n=this.grid[b][n],q=new THREE.Vector2(b/this.segments,c/this.radialSegments),f=new THREE.Vector2((b+1)/this.segments,
c/this.radialSegments),g=new THREE.Vector2((b+1)/this.segments,(c+1)/this.radialSegments),k=new THREE.Vector2(b/this.segments,(c+1)/this.radialSegments),this.faces.push(new THREE.Face3(a,d,n)),this.faceVertexUvs[0].push([q,f,k]),this.faces.push(new THREE.Face3(d,e,n)),this.faceVertexUvs[0].push([f.clone(),g,k.clone()]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,n,q;this.tangents=e;this.normals=f;this.binormals=g;for(l=0;l<b;l++)n=l/(b-1),e[l]=a.getTangentAt(n),e[l].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);n=Math.abs(e[0].y);q=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));n<=a&&(a=n,d.set(0,1,0));q<=a&&d.set(0,0,1);h.crossVectors(e[0],
d).normalize();f[0].crossVectors(e[0],h);g[0].crossVectors(e[0],f[0]);for(l=1;l<b;l++)f[l]=f[l-1].clone(),g[l]=g[l-1].clone(),h.crossVectors(e[l-1],e[l]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),f[l].applyMatrix4(k.makeRotationAxis(h,d))),g[l].crossVectors(e[l],f[l]);if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),l=1;l<b;l++)f[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),g[l].crossVectors(e[l],
f[l])};THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);d.centroid.add(a).add(b).add(c).divideScalar(3);k.faces.push(d);d=d.centroid;d=Math.atan2(d.z,-d.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,
c,d)])}function g(a,b){var c=Math.pow(2,b);Math.pow(4,b);for(var d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],n=0;n<=c;n++){l[n]=[];for(var q=e(d.clone().lerp(h,n/c)),s=e(g.clone().lerp(h,n/c)),t=c-n,u=0;u<=t;u++)l[n][u]=0==u&&n==c?q:e(q.clone().lerp(s,u/t))}for(n=0;n<c;n++)for(u=0;u<2*(c-n)-1;u++)d=Math.floor(u/2),0==u%2?f(l[n][d+1],l[n+1][d],l[n][d]):f(l[n][d+1],l[n+1][d+1],l[n+1][d])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/
2/Math.PI+0.5,a.y));return a.clone()}THREE.Geometry.call(this);c=c||1;d=d||0;for(var k=this,l=0,n=a.length;l<n;l++)e(new THREE.Vector3(a[l][0],a[l][1],a[l][2]));a=this.vertices;for(var q=[],l=0,n=b.length;l<n;l++){var s=a[b[l][0]],u=a[b[l][1]],t=a[b[l][2]];q[l]=new THREE.Face3(s.index,u.index,t.index,[s.clone(),u.clone(),t.clone()])}l=0;for(n=q.length;l<n;l++)g(q[l],d);l=0;for(n=this.faceVertexUvs[0].length;l<n;l++)b=this.faceVertexUvs[0][l],d=b[0].x,a=b[1].x,q=b[2].x,s=Math.max(d,Math.max(a,q)),
u=Math.min(d,Math.min(a,q)),0.9<s&&0.1>u&&(0.2>d&&(b[0].x+=1),0.2>a&&(b[1].x+=1),0.2>q&&(b[2].x+=1));l=0;for(n=this.vertices.length;l<n;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.IcosahedronGeometry=function(a,b){this.radius=a;this.detail=b;var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[[-1,c,0],[1,c,0],[-1,-c,0],[1,-c,0],[0,-1,c],[0,1,c],[0,-1,-c],[0,1,-c],[c,0,-1],[c,0,1],[-c,0,-1],[-c,0,1]],[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],[[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],[[2,1,0],[0,3,2],[1,3,0],[2,3,1]],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,l,n=b+1;for(g=0;g<=c;g++)for(l=g/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var q,s,u,t;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*n+h,d=g*n+h+1,l=(g+1)*n+h+1,k=(g+1)*n+h,q=new THREE.Vector2(h/b,g/c),s=new THREE.Vector2((h+1)/b,g/c),u=new THREE.Vector2((h+1)/b,(g+1)/c),t=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,d,k)),f.push([q,s,t]),e.push(new THREE.Face3(d,l,k)),
f.push([s.clone(),u,t.clone()]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.AxisHelper=function(a){a=a||1;var b=new THREE.Geometry;b.vertices.push(new THREE.Vector3,new THREE.Vector3(a,0,0),new THREE.Vector3,new THREE.Vector3(0,a,0),new THREE.Vector3,new THREE.Vector3(0,0,a));b.colors.push(new THREE.Color(16711680),new THREE.Color(16755200),new THREE.Color(65280),new THREE.Color(11206400),new THREE.Color(255),new THREE.Color(43775));a=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,b,a,THREE.LinePieces)};
THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);THREE.ArrowHelper=function(a,b,c,d,e,f){THREE.Object3D.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=0.2*c);void 0===f&&(f=0.2*e);this.position=b;b=new THREE.Geometry;b.vertices.push(new THREE.Vector3(0,0,0));b.vertices.push(new THREE.Vector3(0,1,0));this.line=new THREE.Line(b,new THREE.LineBasicMaterial({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);b=new THREE.CylinderGeometry(0,0.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));this.cone=
new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)};THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){0.99999<c.y?this.quaternion.set(0,0,0,1):-0.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=0.2*a);void 0===c&&(c=0.2*b);this.line.scale.set(1,a,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.setHex(a);this.cone.material.color.setHex(a)};THREE.BoxHelper=function(a){var b=[new THREE.Vector3(1,1,1),new THREE.Vector3(-1,1,1),new THREE.Vector3(-1,-1,1),new THREE.Vector3(1,-1,1),new THREE.Vector3(1,1,-1),new THREE.Vector3(-1,1,-1),new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,-1,-1)];this.vertices=b;var c=new THREE.Geometry;c.vertices.push(b[0],b[1],b[1],b[2],b[2],b[3],b[3],b[0],b[4],b[5],b[5],b[6],b[6],b[7],b[7],b[4],b[0],b[4],b[1],b[5],b[2],b[6],b[3],b[7]);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);
void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.vertices;d[0].set(b.x,b.y,b.z);d[1].set(c.x,b.y,b.z);d[2].set(c.x,c.y,b.z);d[3].set(b.x,c.y,b.z);d[4].set(b.x,b.y,c.z);d[5].set(c.x,b.y,c.z);d[6].set(c.x,c.y,c.z);d[7].set(b.x,c.y,c.z);this.geometry.computeBoundingSphere();this.geometry.verticesNeedUpdate=!0;this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Camera,c=new THREE.Projector;return function(){function d(d,g,h,k){a.set(g,h,k);c.unprojectVector(a,b);d=e.pointMap[d];if(void 0!==d)for(g=0,h=d.length;g<h;g++)e.geometry.vertices[d[g]].copy(a)}var e=this;b.projectionMatrix.copy(this.camera.projectionMatrix);d("c",0,0,-1);d("t",0,0,1);d("n1",-1,-1,-1);d("n2",1,-1,-1);d("n3",-1,1,-1);d("n4",1,1,-1);d("f1",-1,-1,1);d("f2",1,-1,1);d("f3",-1,1,1);d("f4",1,1,1);d("u1",0.7,
1.1,-1);d("u2",-0.7,1.1,-1);d("u3",0,2,-1);d("cf1",-1,0,1);d("cf2",1,0,1);d("cf3",0,-1,1);d("cf4",0,1,1);d("cn1",-1,0,-1);d("cn2",1,0,-1);d("cn3",0,-1,-1);d("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0}}();THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.PlaneGeometry(b,b),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Mesh(c,d);this.add(this.lightPlane);c=new THREE.Geometry;c.vertices.push(new THREE.Vector3);c.vertices.push(new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});
d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();THREE.EdgesHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,k=a.geometry.clone();k.mergeVertices();k.computeFaceNormals();for(var l=k.vertices,k=k.faces,n=0,q=0,s=k.length;q<s;q++)for(var u=k[q],t=0;3>t;t++){d[0]=u[g[t]];d[1]=u[g[(t+1)%3]];d.sort(f);var p=d.toString();void 0===e[p]?(e[p]={vert1:d[0],vert2:d[1],face1:q,face2:void 0},n++):e[p].face2=q}h.addAttribute("position",Float32Array,2*n,3);d=h.attributes.position.array;
f=0;for(p in e)if(g=e[p],void 0===g.face2||0.9999>k[g.face1].normal.dot(k[g.face2].normal))n=l[g.vert1],d[f++]=n.x,d[f++]=n.y,d[f++]=n.z,n=l[g.vert2],d[f++]=n.x,d[f++]=n.y,d[f++]=n.z;THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=new THREE.Geometry;c=0;for(var e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);a=this.geometry.vertices;for(var d=this.object.geometry.faces,e=this.object.matrixWorld,f=0,g=d.length;f<g;f++){var h=d[f];b.copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);var k=2*f;a[k].copy(h.centroid).applyMatrix4(e);a[k+1].addVectors(a[k],b)}this.geometry.verticesNeedUpdate=
!0;return this}}();THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};THREE.HemisphereLightHelper=function(a,b,c,d){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];a=new THREE.SphereGeometry(b,4,2);a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(b=0;8>b;b++)a.faces[b].color=this.colors[4>b?0:1];b=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(a,b);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrixWorld=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};
THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:16711680;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};
THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var n=f[k],q=0,s=n.vertexNormals.length;q<s;q++){var u=n.vertexNormals[q];d[h].copy(e[n[a[q]]]).applyMatrix4(g);b.copy(u).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
b.add(d[h]);h+=1;d[h].copy(b);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:255;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var n=f[k],q=0,s=n.vertexTangents.length;q<s;q++){var u=n.vertexTangents[q];d[h].copy(e[n[a[q]]]).applyMatrix4(g);b.copy(u).transformDirection(g).multiplyScalar(this.size);b.add(d[h]);h+=1;d[h].copy(b);
h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var k=a.geometry.vertices,l=a.geometry.faces,n=0,q=new Uint32Array(6*l.length),s=0,u=l.length;s<u;s++)for(var t=l[s],p=0;3>p;p++){d[0]=t[g[p]];d[1]=t[g[(p+1)%3]];d.sort(f);var v=d.toString();void 0===e[v]&&(q[2*n]=d[0],q[2*n+1]=d[1],e[v]=!0,n++)}h.addAttribute("position",Float32Array,2*n,3);d=h.attributes.position.array;
s=0;for(u=n;s<u;s++)for(p=0;2>p;p++)n=k[q[2*s+p]],g=6*s+3*p,d[g+0]=n.x,d[g+1]=n.y,d[g+2]=n.z}else if(a.geometry instanceof THREE.BufferGeometry&&void 0!==a.geometry.attributes.index){for(var k=a.geometry.attributes.position.array,u=a.geometry.attributes.index.array,l=a.geometry.offsets,n=0,q=new Uint32Array(2*u.length),t=0,w=l.length;t<w;++t)for(var p=l[t].start,v=l[t].count,g=l[t].index,s=p,r=p+v;s<r;s+=3)for(p=0;3>p;p++)d[0]=g+u[s+p],d[1]=g+u[s+(p+1)%3],d.sort(f),v=d.toString(),void 0===e[v]&&(q[2*
n]=d[0],q[2*n+1]=d[1],e[v]=!0,n++);h.addAttribute("position",Float32Array,2*n,3);d=h.attributes.position.array;s=0;for(u=n;s<u;s++)for(p=0;2>p;p++)g=6*s+3*p,n=3*q[2*s+p],d[g+0]=k[n],d[g+1]=k[n+1],d[g+2]=k[n+2]}else if(a.geometry instanceof THREE.BufferGeometry)for(k=a.geometry.attributes.position.array,n=k.length/3,q=n/3,h.addAttribute("position",Float32Array,2*n,3),d=h.attributes.position.array,s=0,u=q;s<u;s++)for(p=0;3>p;p++)g=18*s+6*p,q=9*s+3*p,d[g+0]=k[q],d[g+1]=k[q+1],d[g+2]=k[q+2],n=9*s+(p+
1)%3*3,d[g+3]=k[n],d[g+4]=k[n+1],d[g+5]=k[n+2];THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*0.25,c.rotation+=0.25*(c.wantedRotation-c.rotation)};THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};THREE.LensFlarePlugin=function(){function a(a,c){var d=b.createProgram(),e=b.createShader(b.FRAGMENT_SHADER),f=b.createShader(b.VERTEX_SHADER),g="precision "+c+" float;\n";b.shaderSource(e,g+a.fragmentShader);b.shaderSource(f,g+a.vertexShader);b.compileShader(e);b.compileShader(f);b.attachShader(d,e);b.attachShader(d,f);b.linkProgram(d);return d}var b,c,d,e,f,g,h,k,l,n,q,s,u;this.init=function(t){b=t.context;c=t;d=t.getPrecision();e=new Float32Array(16);f=new Uint16Array(6);t=0;e[t++]=-1;e[t++]=-1;
e[t++]=0;e[t++]=0;e[t++]=1;e[t++]=-1;e[t++]=1;e[t++]=0;e[t++]=1;e[t++]=1;e[t++]=1;e[t++]=1;e[t++]=-1;e[t++]=1;e[t++]=0;e[t++]=1;t=0;f[t++]=0;f[t++]=1;f[t++]=2;f[t++]=0;f[t++]=2;f[t++]=3;g=b.createBuffer();h=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,g);b.bufferData(b.ARRAY_BUFFER,e,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,h);b.bufferData(b.ELEMENT_ARRAY_BUFFER,f,b.STATIC_DRAW);k=b.createTexture();l=b.createTexture();b.bindTexture(b.TEXTURE_2D,k);b.texImage2D(b.TEXTURE_2D,0,b.RGB,16,16,
0,b.RGB,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.bindTexture(b.TEXTURE_2D,l);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,16,16,0,b.RGBA,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);0>=b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(n=!1,q=a(THREE.ShaderFlares.lensFlare,d)):(n=!0,q=a(THREE.ShaderFlares.lensFlareVertexTexture,d));s={};u={};s.vertex=b.getAttribLocation(q,"position");s.uv=b.getAttribLocation(q,"uv");u.renderType=b.getUniformLocation(q,"renderType");u.map=b.getUniformLocation(q,"map");u.occlusionMap=b.getUniformLocation(q,"occlusionMap");u.opacity=
b.getUniformLocation(q,"opacity");u.color=b.getUniformLocation(q,"color");u.scale=b.getUniformLocation(q,"scale");u.rotation=b.getUniformLocation(q,"rotation");u.screenPosition=b.getUniformLocation(q,"screenPosition")};this.render=function(a,d,e,f){a=a.__webglFlares;var r=a.length;if(r){var x=new THREE.Vector3,z=f/e,F=0.5*e,P=0.5*f,C=16/f,B=new THREE.Vector2(C*z,C),A=new THREE.Vector3(1,1,0),I=new THREE.Vector2(1,1),H=u,C=s;b.useProgram(q);b.enableVertexAttribArray(s.vertex);b.enableVertexAttribArray(s.uv);
b.uniform1i(H.occlusionMap,0);b.uniform1i(H.map,1);b.bindBuffer(b.ARRAY_BUFFER,g);b.vertexAttribPointer(C.vertex,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(C.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,h);b.disable(b.CULL_FACE);b.depthMask(!1);var N,y,K,D,E;for(N=0;N<r;N++)if(C=16/f,B.set(C*z,C),D=a[N],x.set(D.matrixWorld.elements[12],D.matrixWorld.elements[13],D.matrixWorld.elements[14]),x.applyMatrix4(d.matrixWorldInverse),x.applyProjection(d.projectionMatrix),A.copy(x),I.x=A.x*F+F,
I.y=A.y*P+P,n||0<I.x&&I.x<e&&0<I.y&&I.y<f)for(b.activeTexture(b.TEXTURE1),b.bindTexture(b.TEXTURE_2D,k),b.copyTexImage2D(b.TEXTURE_2D,0,b.RGB,I.x-8,I.y-8,16,16,0),b.uniform1i(H.renderType,0),b.uniform2f(H.scale,B.x,B.y),b.uniform3f(H.screenPosition,A.x,A.y,A.z),b.disable(b.BLEND),b.enable(b.DEPTH_TEST),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0),b.activeTexture(b.TEXTURE0),b.bindTexture(b.TEXTURE_2D,l),b.copyTexImage2D(b.TEXTURE_2D,0,b.RGBA,I.x-8,I.y-8,16,16,0),b.uniform1i(H.renderType,1),b.disable(b.DEPTH_TEST),
b.activeTexture(b.TEXTURE1),b.bindTexture(b.TEXTURE_2D,k),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0),D.positionScreen.copy(A),D.customUpdateCallback?D.customUpdateCallback(D):D.updateLensFlares(),b.uniform1i(H.renderType,2),b.enable(b.BLEND),y=0,K=D.lensFlares.length;y<K;y++)E=D.lensFlares[y],0.001<E.opacity&&0.001<E.scale&&(A.x=E.x,A.y=E.y,A.z=E.z,C=E.size*E.scale/f,B.x=C*z,B.y=C,b.uniform3f(H.screenPosition,A.x,A.y,A.z),b.uniform2f(H.scale,B.x,B.y),b.uniform1f(H.rotation,E.rotation),b.uniform1f(H.opacity,
E.opacity),b.uniform3f(H.color,E.color.r,E.color.g,E.color.b),c.setBlending(E.blending,E.blendEquation,E.blendSrc,E.blendDst),c.setTexture(E.texture,1),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0));b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);b.depthMask(!0)}}};THREE.ShadowMapPlugin=function(){var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4,k=new THREE.Vector3,l=new THREE.Vector3,n=new THREE.Vector3;this.init=function(g){a=g.context;b=g;g=THREE.ShaderLib.depthRGBA;var h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,c){b.shadowMapEnabled&&b.shadowMapAutoUpdate&&this.update(a,c)};this.update=function(q,s){var u,t,p,v,w,r,x,z,F,P=[];v=0;a.clearColor(1,1,1,1);a.disable(a.BLEND);a.enable(a.CULL_FACE);a.frontFace(a.CCW);b.shadowMapCullFace===THREE.CullFaceFront?
a.cullFace(a.FRONT):a.cullFace(a.BACK);b.setDepthTest(!0);u=0;for(t=q.__lights.length;u<t;u++)if(p=q.__lights[u],p.castShadow)if(p instanceof THREE.DirectionalLight&&p.shadowCascade)for(w=0;w<p.shadowCascadeCount;w++){var C;if(p.shadowCascadeArray[w])C=p.shadowCascadeArray[w];else{F=p;x=w;C=new THREE.DirectionalLight;C.isVirtual=!0;C.onlyShadow=!0;C.castShadow=!0;C.shadowCameraNear=F.shadowCameraNear;C.shadowCameraFar=F.shadowCameraFar;C.shadowCameraLeft=F.shadowCameraLeft;C.shadowCameraRight=F.shadowCameraRight;
C.shadowCameraBottom=F.shadowCameraBottom;C.shadowCameraTop=F.shadowCameraTop;C.shadowCameraVisible=F.shadowCameraVisible;C.shadowDarkness=F.shadowDarkness;C.shadowBias=F.shadowCascadeBias[x];C.shadowMapWidth=F.shadowCascadeWidth[x];C.shadowMapHeight=F.shadowCascadeHeight[x];C.pointsWorld=[];C.pointsFrustum=[];z=C.pointsWorld;r=C.pointsFrustum;for(var B=0;8>B;B++)z[B]=new THREE.Vector3,r[B]=new THREE.Vector3;z=F.shadowCascadeNearZ[x];F=F.shadowCascadeFarZ[x];r[0].set(-1,-1,z);r[1].set(1,-1,z);r[2].set(-1,
1,z);r[3].set(1,1,z);r[4].set(-1,-1,F);r[5].set(1,-1,F);r[6].set(-1,1,F);r[7].set(1,1,F);C.originalCamera=s;r=new THREE.Gyroscope;r.position=p.shadowCascadeOffset;r.add(C);r.add(C.target);s.add(r);p.shadowCascadeArray[w]=C;console.log("Created virtualLight",C)}x=p;z=w;F=x.shadowCascadeArray[z];F.position.copy(x.position);F.target.position.copy(x.target.position);F.lookAt(F.target);F.shadowCameraVisible=x.shadowCameraVisible;F.shadowDarkness=x.shadowDarkness;F.shadowBias=x.shadowCascadeBias[z];r=x.shadowCascadeNearZ[z];
x=x.shadowCascadeFarZ[z];F=F.pointsFrustum;F[0].z=r;F[1].z=r;F[2].z=r;F[3].z=r;F[4].z=x;F[5].z=x;F[6].z=x;F[7].z=x;P[v]=C;v++}else P[v]=p,v++;u=0;for(t=P.length;u<t;u++){p=P[u];p.shadowMap||(w=THREE.LinearFilter,b.shadowMapType===THREE.PCFSoftShadowMap&&(w=THREE.NearestFilter),p.shadowMap=new THREE.WebGLRenderTarget(p.shadowMapWidth,p.shadowMapHeight,{minFilter:w,magFilter:w,format:THREE.RGBAFormat}),p.shadowMapSize=new THREE.Vector2(p.shadowMapWidth,p.shadowMapHeight),p.shadowMatrix=new THREE.Matrix4);
if(!p.shadowCamera){if(p instanceof THREE.SpotLight)p.shadowCamera=new THREE.PerspectiveCamera(p.shadowCameraFov,p.shadowMapWidth/p.shadowMapHeight,p.shadowCameraNear,p.shadowCameraFar);else if(p instanceof THREE.DirectionalLight)p.shadowCamera=new THREE.OrthographicCamera(p.shadowCameraLeft,p.shadowCameraRight,p.shadowCameraTop,p.shadowCameraBottom,p.shadowCameraNear,p.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}q.add(p.shadowCamera);!0===q.autoUpdate&&q.updateMatrixWorld()}p.shadowCameraVisible&&
!p.cameraHelper&&(p.cameraHelper=new THREE.CameraHelper(p.shadowCamera),p.shadowCamera.add(p.cameraHelper));if(p.isVirtual&&C.originalCamera==s){w=s;v=p.shadowCamera;r=p.pointsFrustum;F=p.pointsWorld;k.set(Infinity,Infinity,Infinity);l.set(-Infinity,-Infinity,-Infinity);for(x=0;8>x;x++)z=F[x],z.copy(r[x]),THREE.ShadowMapPlugin.__projector.unprojectVector(z,w),z.applyMatrix4(v.matrixWorldInverse),z.x<k.x&&(k.x=z.x),z.x>l.x&&(l.x=z.x),z.y<k.y&&(k.y=z.y),z.y>l.y&&(l.y=z.y),z.z<k.z&&(k.z=z.z),z.z>l.z&&
(l.z=z.z);v.left=k.x;v.right=l.x;v.top=l.y;v.bottom=k.y;v.updateProjectionMatrix()}v=p.shadowMap;r=p.shadowMatrix;w=p.shadowCamera;w.position.setFromMatrixPosition(p.matrixWorld);n.setFromMatrixPosition(p.target.matrixWorld);w.lookAt(n);w.updateMatrixWorld();w.matrixWorldInverse.getInverse(w.matrixWorld);p.cameraHelper&&(p.cameraHelper.visible=p.shadowCameraVisible);p.shadowCameraVisible&&p.cameraHelper.update();r.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);r.multiply(w.projectionMatrix);r.multiply(w.matrixWorldInverse);
h.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(v);b.clear();F=q.__webglObjects;p=0;for(v=F.length;p<v;p++)x=F[p],r=x.object,x.render=!1,!r.visible||!r.castShadow||(r instanceof THREE.Mesh||r instanceof THREE.ParticleSystem)&&r.frustumCulled&&!g.intersectsObject(r)||(r._modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,r.matrixWorld),x.render=!0);p=0;for(v=F.length;p<v;p++)x=F[p],x.render&&(r=x.object,x=x.buffer,B=r.material instanceof THREE.MeshFaceMaterial?
r.material.materials[0]:r.material,z=void 0!==r.geometry.morphTargets&&0<r.geometry.morphTargets.length&&B.morphTargets,B=r instanceof THREE.SkinnedMesh&&B.skinning,z=r.customDepthMaterial?r.customDepthMaterial:B?z?f:e:z?d:c,x instanceof THREE.BufferGeometry?b.renderBufferDirect(w,q.__lights,null,z,x,r):b.renderBuffer(w,q.__lights,null,z,x,r));F=q.__webglObjectsImmediate;p=0;for(v=F.length;p<v;p++)x=F[p],r=x.object,r.visible&&r.castShadow&&(r._modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,
r.matrixWorld),b.renderImmediateObject(w,q.__lights,null,c,r))}u=b.getClearColor();t=b.getClearAlpha();a.clearColor(u.r,u.g,u.b,t);a.enable(a.BLEND);b.shadowMapCullFace===THREE.CullFaceFront&&a.cullFace(a.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;THREE.SpritePlugin=function(){var a,b,c,d,e,f,g,h,k,l,n,q,s,u,t,p,v;function w(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var r,x,z,F,P,C,B,A;this.init=function(w){r=w.context;x=w;F=new Float32Array([-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]);P=new Uint16Array([0,1,2,0,2,3]);C=r.createBuffer();B=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,C);r.bufferData(r.ARRAY_BUFFER,F,r.STATIC_DRAW);r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,B);r.bufferData(r.ELEMENT_ARRAY_BUFFER,P,r.STATIC_DRAW);w=r.createProgram();
var H=r.createShader(r.VERTEX_SHADER),N=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(H,["precision "+x.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
r.shaderSource(N,["precision "+x.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
r.compileShader(H);r.compileShader(N);r.attachShader(w,H);r.attachShader(w,N);r.linkProgram(w);A=w;p=r.getAttribLocation(A,"position");v=r.getAttribLocation(A,"uv");a=r.getUniformLocation(A,"uvOffset");b=r.getUniformLocation(A,"uvScale");c=r.getUniformLocation(A,"rotation");d=r.getUniformLocation(A,"scale");e=r.getUniformLocation(A,"color");f=r.getUniformLocation(A,"map");g=r.getUniformLocation(A,"opacity");h=r.getUniformLocation(A,"modelViewMatrix");k=r.getUniformLocation(A,"projectionMatrix");l=
r.getUniformLocation(A,"fogType");n=r.getUniformLocation(A,"fogDensity");q=r.getUniformLocation(A,"fogNear");s=r.getUniformLocation(A,"fogFar");u=r.getUniformLocation(A,"fogColor");t=r.getUniformLocation(A,"alphaTest");w=document.createElement("canvas");w.width=8;w.height=8;H=w.getContext("2d");H.fillStyle="#ffffff";H.fillRect(0,0,w.width,w.height);z=new THREE.Texture(w);z.needsUpdate=!0};this.render=function(F,H,N,y){N=F.__webglSprites;if(y=N.length){r.useProgram(A);r.enableVertexAttribArray(p);
r.enableVertexAttribArray(v);r.disable(r.CULL_FACE);r.enable(r.BLEND);r.bindBuffer(r.ARRAY_BUFFER,C);r.vertexAttribPointer(p,2,r.FLOAT,!1,16,0);r.vertexAttribPointer(v,2,r.FLOAT,!1,16,8);r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,B);r.uniformMatrix4fv(k,!1,H.projectionMatrix.elements);r.activeTexture(r.TEXTURE0);r.uniform1i(f,0);var K=0,D=0,E=F.fog;E?(r.uniform3f(u,E.color.r,E.color.g,E.color.b),E instanceof THREE.Fog?(r.uniform1f(q,E.near),r.uniform1f(s,E.far),r.uniform1i(l,1),D=K=1):E instanceof THREE.FogExp2&&
(r.uniform1f(n,E.density),r.uniform1i(l,2),D=K=2)):(r.uniform1i(l,0),D=K=0);for(var G,P=[],E=0;E<y;E++)G=N[E],!1!==G.visible&&(G._modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,G.matrixWorld),G.z=-G._modelViewMatrix.elements[14]);N.sort(w);for(E=0;E<y;E++)G=N[E],!1!==G.visible&&(H=G.material,r.uniform1f(t,H.alphaTest),r.uniformMatrix4fv(h,!1,G._modelViewMatrix.elements),P[0]=G.scale.x,P[1]=G.scale.y,G=F.fog&&H.fog?D:0,K!==G&&(r.uniform1i(l,G),K=G),null!==H.map?(r.uniform2f(a,H.map.offset.x,
H.map.offset.y),r.uniform2f(b,H.map.repeat.x,H.map.repeat.y)):(r.uniform2f(a,0,0),r.uniform2f(b,1,1)),r.uniform1f(g,H.opacity),r.uniform3f(e,H.color.r,H.color.g,H.color.b),r.uniform1f(c,H.rotation),r.uniform2fv(d,P),x.setBlending(H.blending,H.blendEquation,H.blendSrc,H.blendDst),x.setDepthTest(H.depthTest),x.setDepthWrite(H.depthWrite),H.map&&H.map.image&&H.map.image.width?x.setTexture(H.map,0):x.setTexture(z,0),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0));r.enable(r.CULL_FACE)}}};THREE.DepthPassPlugin=function(){this.enabled=!1;this.renderTarget=null;var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4;this.init=function(g){a=g.context;b=g;g=THREE.ShaderLib.depthRGBA;var h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(k,l){var n,q,s,u,t,p;a.clearColor(1,1,1,1);a.disable(a.BLEND);b.setDepthTest(!0);!0===k.autoUpdate&&k.updateMatrixWorld();l.matrixWorldInverse.getInverse(l.matrixWorld);h.multiplyMatrices(l.projectionMatrix,
l.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(this.renderTarget);b.clear();p=k.__webglObjects;n=0;for(q=p.length;n<q;n++)s=p[n],t=s.object,s.render=!1,!t.visible||(t instanceof THREE.Mesh||t instanceof THREE.ParticleSystem)&&t.frustumCulled&&!g.intersectsObject(t)||(t._modelViewMatrix.multiplyMatrices(l.matrixWorldInverse,t.matrixWorld),s.render=!0);var v;n=0;for(q=p.length;n<q;n++)s=p[n],s.render&&(t=s.object,s=s.buffer,t instanceof THREE.ParticleSystem&&!t.customDepthMaterial||((v=
t.material instanceof THREE.MeshFaceMaterial?t.material.materials[0]:t.material)&&b.setMaterialFaces(t.material),u=0<t.geometry.morphTargets.length&&v.morphTargets,v=t instanceof THREE.SkinnedMesh&&v.skinning,u=t.customDepthMaterial?t.customDepthMaterial:v?u?f:e:u?d:c,s instanceof THREE.BufferGeometry?b.renderBufferDirect(l,k.__lights,null,u,s,t):b.renderBuffer(l,k.__lights,null,u,s,t)));p=k.__webglObjectsImmediate;n=0;for(q=p.length;n<q;n++)s=p[n],t=s.object,t.visible&&(t._modelViewMatrix.multiplyMatrices(l.matrixWorldInverse,
t.matrixWorld),b.renderImmediateObject(l,k.__lights,null,c,t));n=b.getClearColor();q=b.getClearAlpha();a.clearColor(n.r,n.g,n.b,q);a.enable(a.BLEND)}};THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},lensFlare:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};

/**
 * @author Eberhard Graether / http://egraether.com/
 * @author Mark Lundin  / http://mark-lundin.com
 */

THREE.TrackballControls = function ( object, domElement ) {

    var _this = this;
    var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM: 4, TOUCH_PAN: 5 };

    this.object = object;
    this.domElement = ( domElement !== undefined ) ? domElement : document;

    // API

    this.enabled = true;

    this.screen = { left: 0, top: 0, width: 0, height: 0 };

    this.rotateSpeed = 1.0;
    this.zoomSpeed = 1.2;
    this.panSpeed = 0.3;

    this.noRotate = false;
    this.noZoom = false;
    this.noPan = false;
    this.noRoll = false;

    this.staticMoving = false;
    this.dynamicDampingFactor = 0.2;

    this.minDistance = 0;
    this.maxDistance = Infinity;

    this.keys = [ 65 /*A*/, 83 /*S*/, 68 /*D*/ ];

    // internals

    this.target = new THREE.Vector3();

    var lastPosition = new THREE.Vector3();

    var _state = STATE.NONE,
    _prevState = STATE.NONE,

    _eye = new THREE.Vector3(),

    _rotateStart = new THREE.Vector3(),
    _rotateEnd = new THREE.Vector3(),

    _zoomStart = new THREE.Vector2(),
    _zoomEnd = new THREE.Vector2(),

    _touchZoomDistanceStart = 0,
    _touchZoomDistanceEnd = 0,

    _panStart = new THREE.Vector2(),
    _panEnd = new THREE.Vector2();

    // for reset

    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.up0 = this.object.up.clone();

    // events

    var changeEvent = { type: 'change' };
    var startEvent = { type: 'start'};
    var endEvent = { type: 'end'};


    // methods

    this.handleResize = function () {

        if ( this.domElement === document ) {

            this.screen.left = 0;
            this.screen.top = 0;
            this.screen.width = window.innerWidth;
            this.screen.height = window.innerHeight;

        } else {

            this.screen = this.domElement.getBoundingClientRect();
            // adjustments come from similar code in the jquery offset() function
            var d = this.domElement.ownerDocument.documentElement
            this.screen.left += window.pageXOffset - d.clientLeft
            this.screen.top += window.pageYOffset - d.clientTop

        }

    };

    this.handleEvent = function ( event ) {

        if ( typeof this[ event.type ] == 'function' ) {

            this[ event.type ]( event );

        }

    };

    this.getMouseOnScreen = function ( pageX, pageY, vector ) {

        return vector.set(
            ( pageX - _this.screen.left ) / _this.screen.width,
            ( pageY - _this.screen.top ) / _this.screen.height
        );

    };

    this.getMouseProjectionOnBall = (function(){

        var objectUp = new THREE.Vector3(),
            mouseOnBall = new THREE.Vector3();


        return function ( pageX, pageY, projection ) {

            mouseOnBall.set(
                ( pageX - _this.screen.width * 0.5 - _this.screen.left ) / (_this.screen.width*.5),
                ( _this.screen.height * 0.5 + _this.screen.top - pageY ) / (_this.screen.height*.5),
                0.0
            );

            var length = mouseOnBall.length();

            if ( _this.noRoll ) {

                if ( length < Math.SQRT1_2 ) {

                    mouseOnBall.z = Math.sqrt( 1.0 - length*length );

                } else {

                    mouseOnBall.z = .5 / length;
                    
                }

            } else if ( length > 1.0 ) {

                mouseOnBall.normalize();

            } else {

                mouseOnBall.z = Math.sqrt( 1.0 - length * length );

            }

            _eye.copy( _this.object.position ).sub( _this.target );

            projection.copy( _this.object.up ).setLength( mouseOnBall.y )
            projection.add( objectUp.copy( _this.object.up ).cross( _eye ).setLength( mouseOnBall.x ) );
            projection.add( _eye.setLength( mouseOnBall.z ) );

            return projection;
        }

    }());

    this.rotateCamera = (function(){

        var axis = new THREE.Vector3(),
            quaternion = new THREE.Quaternion();


        return function () {

            var angle = Math.acos( _rotateStart.dot( _rotateEnd ) / _rotateStart.length() / _rotateEnd.length() );

            if ( angle ) {

                axis.crossVectors( _rotateStart, _rotateEnd ).normalize();

                angle *= _this.rotateSpeed;

                quaternion.setFromAxisAngle( axis, -angle );

                _eye.applyQuaternion( quaternion );
                _this.object.up.applyQuaternion( quaternion );

                _rotateEnd.applyQuaternion( quaternion );

                if ( _this.staticMoving ) {

                    _rotateStart.copy( _rotateEnd );

                } else {

                    quaternion.setFromAxisAngle( axis, angle * ( _this.dynamicDampingFactor - 1.0 ) );
                    _rotateStart.applyQuaternion( quaternion );

                }

            }
        }

    }());

    this.zoomCamera = function () {

        if ( _state === STATE.TOUCH_ZOOM ) {

            var factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
            _touchZoomDistanceStart = _touchZoomDistanceEnd;
            _eye.multiplyScalar( factor );

        } else {

            var factor = 1.0 + ( _zoomEnd.y - _zoomStart.y ) * _this.zoomSpeed;

            if ( factor !== 1.0 && factor > 0.0 ) {

                _eye.multiplyScalar( factor );

                if ( _this.staticMoving ) {

                    _zoomStart.copy( _zoomEnd );

                } else {

                    _zoomStart.y += ( _zoomEnd.y - _zoomStart.y ) * this.dynamicDampingFactor;

                }

            }

        }

    };

    this.panCamera = (function(){

        var mouseChange = new THREE.Vector2(),
            objectUp = new THREE.Vector3(),
            pan = new THREE.Vector3();

        return function () {

            mouseChange.copy( _panEnd ).sub( _panStart );

            if ( mouseChange.lengthSq() ) {

                mouseChange.multiplyScalar( _eye.length() * _this.panSpeed );

                pan.copy( _eye ).cross( _this.object.up ).setLength( mouseChange.x );
                pan.add( objectUp.copy( _this.object.up ).setLength( mouseChange.y ) );

                _this.object.position.add( pan );
                _this.target.add( pan );

                if ( _this.staticMoving ) {

                    _panStart.copy( _panEnd );

                } else {

                    _panStart.add( mouseChange.subVectors( _panEnd, _panStart ).multiplyScalar( _this.dynamicDampingFactor ) );

                }

            }
        }

    }());

    this.checkDistances = function () {

        if ( !_this.noZoom || !_this.noPan ) {

            if ( _eye.lengthSq() > _this.maxDistance * _this.maxDistance ) {

                _this.object.position.addVectors( _this.target, _eye.setLength( _this.maxDistance ) );

            }

            if ( _eye.lengthSq() < _this.minDistance * _this.minDistance ) {

                _this.object.position.addVectors( _this.target, _eye.setLength( _this.minDistance ) );

            }

        }

    };

    this.update = function () {

        _eye.subVectors( _this.object.position, _this.target );

        if ( !_this.noRotate ) {

            _this.rotateCamera();

        }

        if ( !_this.noZoom ) {

            _this.zoomCamera();

        }

        if ( !_this.noPan ) {

            _this.panCamera();

        }

        _this.object.position.addVectors( _this.target, _eye );

        _this.checkDistances();

        _this.object.lookAt( _this.target );

        if ( lastPosition.distanceToSquared( _this.object.position ) > 0 ) {

            _this.dispatchEvent( changeEvent );

            lastPosition.copy( _this.object.position );

        }

    };

    this.reset = function () {

        _state = STATE.NONE;
        _prevState = STATE.NONE;

        _this.target.copy( _this.target0 );
        _this.object.position.copy( _this.position0 );
        _this.object.up.copy( _this.up0 );

        _eye.subVectors( _this.object.position, _this.target );

        _this.object.lookAt( _this.target );

        _this.dispatchEvent( changeEvent );

        lastPosition.copy( _this.object.position );

    };

    // listeners

    function keydown( event ) {

        if ( _this.enabled === false ) return;

        window.removeEventListener( 'keydown', keydown );

        _prevState = _state;

        if ( _state !== STATE.NONE ) {

            return;

        } else if ( event.keyCode === _this.keys[ STATE.ROTATE ] && !_this.noRotate ) {

            _state = STATE.ROTATE;

        } else if ( event.keyCode === _this.keys[ STATE.ZOOM ] && !_this.noZoom ) {

            _state = STATE.ZOOM;

        } else if ( event.keyCode === _this.keys[ STATE.PAN ] && !_this.noPan ) {

            _state = STATE.PAN;

        }

    }

    function keyup( event ) {

        if ( _this.enabled === false ) return;

        _state = _prevState;

        window.addEventListener( 'keydown', keydown, false );

    }

    function mousedown( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        if ( _state === STATE.NONE ) {

            _state = event.button;

        }

        if ( _state === STATE.ROTATE && !_this.noRotate ) {

            _this.getMouseProjectionOnBall( event.pageX, event.pageY, _rotateStart );
            _rotateEnd.copy(_rotateStart)

        } else if ( _state === STATE.ZOOM && !_this.noZoom ) {

            _this.getMouseOnScreen( event.pageX, event.pageY, _zoomStart );
            _zoomEnd.copy(_zoomStart);

        } else if ( _state === STATE.PAN && !_this.noPan ) {

            _this.getMouseOnScreen( event.pageX, event.pageY, _panStart );
            _panEnd.copy(_panStart)

        }

        document.addEventListener( 'mousemove', mousemove, false );
        document.addEventListener( 'mouseup', mouseup, false );
        _this.dispatchEvent( startEvent );


    }

    function mousemove( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        if ( _state === STATE.ROTATE && !_this.noRotate ) {

            _this.getMouseProjectionOnBall( event.pageX, event.pageY, _rotateEnd );

        } else if ( _state === STATE.ZOOM && !_this.noZoom ) {

            _this.getMouseOnScreen( event.pageX, event.pageY, _zoomEnd );

        } else if ( _state === STATE.PAN && !_this.noPan ) {

            _this.getMouseOnScreen( event.pageX, event.pageY, _panEnd );

        }

    }

    function mouseup( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        _state = STATE.NONE;

        document.removeEventListener( 'mousemove', mousemove );
        document.removeEventListener( 'mouseup', mouseup );
        _this.dispatchEvent( endEvent );

    }

    function mousewheel( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        var delta = 0;

        if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

            delta = event.wheelDelta / 40;

        } else if ( event.detail ) { // Firefox

            delta = - event.detail / 3;

        }

        _zoomStart.y += delta * 0.01;
        _this.dispatchEvent( startEvent );
        _this.dispatchEvent( endEvent );

    }

    function touchstart( event ) {

        if ( _this.enabled === false ) return;

        switch ( event.touches.length ) {

            case 1:
                _state = STATE.TOUCH_ROTATE;
                _rotateEnd.copy( _this.getMouseProjectionOnBall( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _rotateStart ));
                break;

            case 2:
                _state = STATE.TOUCH_ZOOM;
                var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                _touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt( dx * dx + dy * dy );
                break;

            case 3:
                _state = STATE.TOUCH_PAN;
                _panEnd.copy( _this.getMouseOnScreen( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _panStart ));
                break;

            default:
                _state = STATE.NONE;

        }
        _this.dispatchEvent( startEvent );


    }

    function touchmove( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        switch ( event.touches.length ) {

            case 1:
                _this.getMouseProjectionOnBall( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _rotateEnd );
                break;

            case 2:
                var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                _touchZoomDistanceEnd = Math.sqrt( dx * dx + dy * dy )
                break;

            case 3:
                _this.getMouseOnScreen( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _panEnd );
                break;

            default:
                _state = STATE.NONE;

        }

    }

    function touchend( event ) {

        if ( _this.enabled === false ) return;

        switch ( event.touches.length ) {

            case 1:
                _rotateStart.copy( _this.getMouseProjectionOnBall( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _rotateEnd ));
                break;

            case 2:
                _touchZoomDistanceStart = _touchZoomDistanceEnd = 0;
                break;

            case 3:
                _panStart.copy( _this.getMouseOnScreen( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _panEnd ));
                break;

        }

        _state = STATE.NONE;
        _this.dispatchEvent( endEvent );

    }

    this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );

    this.domElement.addEventListener( 'mousedown', mousedown, false );

    this.domElement.addEventListener( 'mousewheel', mousewheel, false );
    this.domElement.addEventListener( 'DOMMouseScroll', mousewheel, false ); // firefox

    this.domElement.addEventListener( 'touchstart', touchstart, false );
    this.domElement.addEventListener( 'touchend', touchend, false );
    this.domElement.addEventListener( 'touchmove', touchmove, false );

    window.addEventListener( 'keydown', keydown, false );
    window.addEventListener( 'keyup', keyup, false );

    this.handleResize();

};

THREE.TrackballControls.prototype = Object.create( THREE.EventDispatcher.prototype );

/*
 * A bunch of parametric curves
 * @author zz85
 *
 * Formulas collected from various sources
 *  http://mathworld.wolfram.com/HeartCurve.html
 *  http://mathdl.maa.org/images/upload_library/23/stemkoski/knots/page6.html
 *  http://en.wikipedia.org/wiki/Viviani%27s_curve
 *  http://mathdl.maa.org/images/upload_library/23/stemkoski/knots/page4.html
 *  http://www.mi.sanu.ac.rs/vismath/taylorapril2011/Taylor.pdf
 *  http://prideout.net/blog/?p=44
 */

// Lets define some curves
THREE.Curves = {};


 THREE.Curves.GrannyKnot = THREE.Curve.create( function(){},

     function(t) {
        t = 2 * Math.PI * t;

        var x = -0.22 * Math.cos(t) - 1.28 * Math.sin(t) - 0.44 * Math.cos(3 * t) - 0.78 * Math.sin(3 * t);
        var y = -0.1 * Math.cos(2 * t) - 0.27 * Math.sin(2 * t) + 0.38 * Math.cos(4 * t) + 0.46 * Math.sin(4 * t);
        var z = 0.7 * Math.cos(3 * t) - 0.4 * Math.sin(3 * t);
        return new THREE.Vector3(x, y, z).multiplyScalar(20);
    }
);

THREE.Curves.HeartCurve = THREE.Curve.create(

function(s) {

    this.scale = (s === undefined) ? 5 : s;

},

function(t) {

    t *= 2 * Math.PI;

    var tx = 16 * Math.pow(Math.sin(t), 3);
    var ty = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t), tz = 0;

    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

}

);



// Viviani's Curve
THREE.Curves.VivianiCurve = THREE.Curve.create(

    function(radius) {

        this.radius = radius;
    },

    function(t) {

        t = t * 4 * Math.PI; // Normalized to 0..1
        var a = this.radius / 2;
        var tx = a * (1 + Math.cos(t)),
            ty = a * Math.sin(t),
            tz = 2 * a * Math.sin(t / 2);

        return new THREE.Vector3(tx, ty, tz);

    }

);


THREE.Curves.KnotCurve = THREE.Curve.create(

    function() {

    },

    function(t) {

        t *= 2 * Math.PI;

        var R = 10;
        var s = 50;
        var tx = s * Math.sin(t),
            ty = Math.cos(t) * (R + s * Math.cos(t)),
            tz = Math.sin(t) * (R + s * Math.cos(t));

        return new THREE.Vector3(tx, ty, tz);

    }

);

THREE.Curves.HelixCurve = THREE.Curve.create(

    function() {

    },

    function(t) {

        var a = 30; // radius
        var b = 150; //height
        var t2 = 2 * Math.PI * t * b / 30;
        var tx = Math.cos(t2) * a,
            ty = Math.sin(t2) * a,
            tz = b * t;

        return new THREE.Vector3(tx, ty, tz);

    }

);

THREE.Curves.TrefoilKnot = THREE.Curve.create(

    function(s) {

        this.scale = (s === undefined) ? 10 : s;

    },

    function(t) {

        t *= Math.PI * 2;
        var tx = (2 + Math.cos(3 * t)) * Math.cos(2 * t),
            ty = (2 + Math.cos(3 * t)) * Math.sin(2 * t),
            tz = Math.sin(3 * t);

        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

    }

);

THREE.Curves.TorusKnot = THREE.Curve.create(

    function(s) {

        this.scale = (s === undefined) ? 10 : s;

    },

    function(t) {

        var p = 3,
            q = 4;
        t *= Math.PI * 2;
        var tx = (2 + Math.cos(q * t)) * Math.cos(p * t),
            ty = (2 + Math.cos(q * t)) * Math.sin(p * t),
            tz = Math.sin(q * t);

        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

    }

);


THREE.Curves.CinquefoilKnot = THREE.Curve.create(

    function(s) {

        this.scale = (s === undefined) ? 10 : s;

    },

    function(t) {

        var p = 2,
            q = 5;
        t *= Math.PI * 2;
        var tx = (2 + Math.cos(q * t)) * Math.cos(p * t),
            ty = (2 + Math.cos(q * t)) * Math.sin(p * t),
            tz = Math.sin(q * t);

        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

    }

);


THREE.Curves.TrefoilPolynomialKnot = THREE.Curve.create(

    function(s) {

        this.scale = (s === undefined) ? 10 : s;

    },

    function(t) {

        t = t * 4 - 2;
        var tx = Math.pow(t, 3) - 3 * t,
            ty = Math.pow(t, 4) - 4 * t * t,
            tz = 1 / 5 * Math.pow(t, 5) - 2 * t;

        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

    }

);

// var scaleTo = function(x, y) {
//   var r = y - x;
//   return function(t) {
//     t * r + x;
//   };
// }
var scaleTo = function(x, y, t) {

        var r = y - x;
        return t * r + x;

    }

THREE.Curves.FigureEightPolynomialKnot = THREE.Curve.create(

    function(s) {

        this.scale = (s === undefined) ? 1 : s;

    },

    function(t) {

        t = scaleTo(-4, 4, t);
        var tx = 2 / 5 * t * (t * t - 7) * (t * t - 10),
            ty = Math.pow(t, 4) - 13 * t * t,
            tz = 1 / 10 * t * (t * t - 4) * (t * t - 9) * (t * t - 12);

        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

    }

);

THREE.Curves.DecoratedTorusKnot4a = THREE.Curve.create(

    function(s) {

        this.scale = (s === undefined) ? 40 : s;

    },

    function(t) {

        t *= Math.PI * 2;
        var
        x = Math.cos(2 * t) * (1 + 0.6 * (Math.cos(5 * t) + 0.75 * Math.cos(10 * t))),
            y = Math.sin(2 * t) * (1 + 0.6 * (Math.cos(5 * t) + 0.75 * Math.cos(10 * t))),
            z = 0.35 * Math.sin(5 * t);

        return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);

    }

);


THREE.Curves.DecoratedTorusKnot4b = THREE.Curve.create(

    function(s) {

        this.scale = (s === undefined) ? 40 : s;

    },

    function(t) {
        var fi = t * Math.PI * 2;
        var x = Math.cos(2 * fi) * (1 + 0.45 * Math.cos(3 * fi) + 0.4 * Math.cos(9 * fi)),
            y = Math.sin(2 * fi) * (1 + 0.45 * Math.cos(3 * fi) + 0.4 * Math.cos(9 * fi)),
            z = 0.2 * Math.sin(9 * fi);

        return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);

    }

);


THREE.Curves.DecoratedTorusKnot5a = THREE.Curve.create(

    function(s) {

        this.scale = (s === undefined) ? 40 : s;

    },

    function(t) {

        var fi = t * Math.PI * 2;
        var x = Math.cos(3 * fi) * (1 + 0.3 * Math.cos(5 * fi) + 0.5 * Math.cos(10 * fi)),
            y = Math.sin(3 * fi) * (1 + 0.3 * Math.cos(5 * fi) + 0.5 * Math.cos(10 * fi)),
            z = 0.2 * Math.sin(20 * fi);

        return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);

    }

);

THREE.Curves.DecoratedTorusKnot5c = THREE.Curve.create(

    function(s) {

        this.scale = (s === undefined) ? 40 : s;

    },

    function(t) {

        var fi = t * Math.PI * 2;
        var x = Math.cos(4 * fi) * (1 + 0.5 * (Math.cos(5 * fi) + 0.4 * Math.cos(20 * fi))),
            y = Math.sin(4 * fi) * (1 + 0.5 * (Math.cos(5 * fi) + 0.4 * Math.cos(20 * fi))),
            z = 0.35 * Math.sin(15 * fi);

        return new THREE.Vector3(x, y, z).multiplyScalar(this.scale);

    }

);

THREE.ExtendLambert = function(_params) {
    var _type = 'lambert';
    _params = _params || {};
    if (!_params.vertexShader) throw 'ExtendShader requires vertexShader';
    
    var uniforms = THREE.UniformsUtils.clone(THREE.ShaderLib[_type].uniforms);
    
    if (_params.uniforms) {
        for (var i in _params.uniforms) {
            uniforms[i] = _params.uniforms[i];
        }
    }
    
    _params.uniforms = uniforms;

    _params.fragmentShader = THREE.ShaderLib[_type].fragmentShader;
    
    var vertexShader = _params.vertexShader;
    var split = vertexShader.split('void main() {');
    var header = split[0];
    var main = split[1].slice(0, -1);
    
    _params.vertexShader = [
        "#define LAMBERT",

        "varying vec3 vLightFront;",

        "#ifdef DOUBLE_SIDED",

            "varying vec3 vLightBack;",

        "#endif",

        THREE.ShaderChunk[ "map_pars_vertex" ],
        THREE.ShaderChunk[ "lightmap_pars_vertex" ],
        THREE.ShaderChunk[ "envmap_pars_vertex" ],
        THREE.ShaderChunk[ "lights_lambert_pars_vertex" ],
        THREE.ShaderChunk[ "color_pars_vertex" ],
        THREE.ShaderChunk[ "morphtarget_pars_vertex" ],
        THREE.ShaderChunk[ "skinning_pars_vertex" ],
        THREE.ShaderChunk[ "shadowmap_pars_vertex" ],
        
        header,

        "void main() {",

            THREE.ShaderChunk[ "map_vertex" ],
            THREE.ShaderChunk[ "lightmap_vertex" ],
            THREE.ShaderChunk[ "color_vertex" ],

            THREE.ShaderChunk[ "morphnormal_vertex" ],
            THREE.ShaderChunk[ "skinbase_vertex" ],
            THREE.ShaderChunk[ "skinnormal_vertex" ],
            THREE.ShaderChunk[ "defaultnormal_vertex" ],

            THREE.ShaderChunk[ "morphtarget_vertex" ],
            THREE.ShaderChunk[ "skinning_vertex" ],
            THREE.ShaderChunk[ "default_vertex" ],

            THREE.ShaderChunk[ "worldpos_vertex" ],
            THREE.ShaderChunk[ "envmap_vertex" ],
            THREE.ShaderChunk[ "lights_lambert_vertex" ],
            THREE.ShaderChunk[ "shadowmap_vertex" ],
            
            main,

        "}"

    ].join("\n");
        
    _params.vertexShader = _params.vertexShader.replace('gl_Position = projectionMatrix * mvPosition;', '');
        
    _params.lights = true;
    
    return new THREE.ShaderMaterial(_params);
}

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.EffectComposer = function ( renderer, renderTarget ) {

    this.renderer = renderer;

    if ( renderTarget === undefined ) {

        var width = window.innerWidth || 1;
        var height = window.innerHeight || 1;
        var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

        renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );

    }

    this.renderTarget1 = renderTarget;
    this.renderTarget2 = renderTarget.clone();

    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;

    this.passes = [];

    if ( THREE.CopyShader === undefined )
        console.error( "THREE.EffectComposer relies on THREE.CopyShader" );

    this.copyPass = new THREE.ShaderPass( THREE.CopyShader );

};

THREE.EffectComposer.prototype = {

    swapBuffers: function() {

        var tmp = this.readBuffer;
        this.readBuffer = this.writeBuffer;
        this.writeBuffer = tmp;

    },

    addPass: function ( pass ) {

        this.passes.push( pass );

    },

    insertPass: function ( pass, index ) {

        this.passes.splice( index, 0, pass );

    },

    render: function ( delta ) {

        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2;

        var maskActive = false;

        var pass, i, il = this.passes.length;

        for ( i = 0; i < il; i ++ ) {

            pass = this.passes[ i ];

            if ( !pass.enabled ) continue;

            pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

            if ( pass.needsSwap ) {

                if ( maskActive ) {

                    var context = this.renderer.context;

                    context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

                    this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

                    context.stencilFunc( context.EQUAL, 1, 0xffffffff );

                }

                this.swapBuffers();

            }

            if ( pass instanceof THREE.MaskPass ) {

                maskActive = true;

            } else if ( pass instanceof THREE.ClearMaskPass ) {

                maskActive = false;

            }

        }

    },

    reset: function ( renderTarget ) {

        if ( renderTarget === undefined ) {

            renderTarget = this.renderTarget1.clone();

            renderTarget.width = window.innerWidth;
            renderTarget.height = window.innerHeight;

        }

        this.renderTarget1 = renderTarget;
        this.renderTarget2 = renderTarget.clone();

        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2;

    },

    setSize: function ( width, height ) {

        var renderTarget = this.renderTarget1.clone();

        renderTarget.width = width;
        renderTarget.height = height;

        this.reset( renderTarget );

    }

};

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

    uniforms: {

        "tDiffuse": { type: "t", value: null },
        "opacity":  { type: "f", value: 1.0 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform float opacity;",

        "uniform sampler2D tDiffuse;",

        "varying vec2 vUv;",

        "void main() {",

            "vec4 texel = texture2D( tDiffuse, vUv );",
            "gl_FragColor = opacity * texel;",

        "}"

    ].join("\n")

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ShaderPass = function ( shader, textureID ) {

    this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

    this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

    this.material = new THREE.ShaderMaterial( {

        uniforms: this.uniforms,
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader

    } );

    this.renderToScreen = false;

    this.enabled = true;
    this.needsSwap = true;
    this.clear = false;


    this.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
    this.scene  = new THREE.Scene();

    this.quad = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), null );
    this.scene.add( this.quad );

};

THREE.ShaderPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

        if ( this.uniforms[ this.textureID ] ) {

            this.uniforms[ this.textureID ].value = readBuffer;

        }

        this.quad.material = this.material;

        if ( this.renderToScreen ) {

            renderer.render( this.scene, this.camera );

        } else {

            renderer.render( this.scene, this.camera, writeBuffer, this.clear );

        }

    }

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

    this.scene = scene;
    this.camera = camera;

    this.overrideMaterial = overrideMaterial;

    this.clearColor = clearColor;
    this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

    this.oldClearColor = new THREE.Color();
    this.oldClearAlpha = 1;

    this.enabled = true;
    this.clear = true;
    this.needsSwap = false;

};

THREE.RenderPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

        this.scene.overrideMaterial = this.overrideMaterial;

        if ( this.clearColor ) {

            this.oldClearColor.copy( renderer.getClearColor() );
            this.oldClearAlpha = renderer.getClearAlpha();

            renderer.setClearColor( this.clearColor, this.clearAlpha );

        }

        renderer.render( this.scene, this.camera, readBuffer, this.clear );

        if ( this.clearColor ) {

            renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

        }

        this.scene.overrideMaterial = null;

    }

};

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Bleach bypass shader [http://en.wikipedia.org/wiki/Bleach_bypass]
 * - based on Nvidia example
 * http://developer.download.nvidia.com/shaderlibrary/webpages/shader_library.html#post_bleach_bypass
 */

THREE.BleachBypassShader = {

    uniforms: {

        "tDiffuse": { type: "t", value: null },
        "opacity":  { type: "f", value: 1.0 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform float opacity;",

        "uniform sampler2D tDiffuse;",

        "varying vec2 vUv;",

        "void main() {",

            "vec4 base = texture2D( tDiffuse, vUv );",

            "vec3 lumCoeff = vec3( 0.25, 0.65, 0.1 );",
            "float lum = dot( lumCoeff, base.rgb );",
            "vec3 blend = vec3( lum );",

            "float L = min( 1.0, max( 0.0, 10.0 * ( lum - 0.45 ) ) );",

            "vec3 result1 = 2.0 * base.rgb * blend;",
            "vec3 result2 = 1.0 - 2.0 * ( 1.0 - blend ) * ( 1.0 - base.rgb );",

            "vec3 newColor = mix( result1, result2, L );",

            "float A2 = opacity * base.a;",
            "vec3 mixRGB = A2 * newColor.rgb;",
            "mixRGB += ( ( 1.0 - A2 ) * base.rgb );",

            "gl_FragColor = vec4( mixRGB, base.a );",

        "}"

    ].join("\n")

};

/**
 * @author felixturner / http://airtight.cc/
 *
 * RGB Shift Shader
 * Shifts red and blue channels from center in opposite directions
 * Ported from http://kriss.cx/tom/2009/05/rgb-shift/
 * by Tom Butterworth / http://kriss.cx/tom/
 *
 * amount: shift distance (1 is width of input)
 * angle: shift angle in radians
 */

THREE.RGBShiftShader = {

    uniforms: {

        "tDiffuse": { type: "t", value: null },
        "amount":   { type: "f", value: 0.005 },
        "angle":    { type: "f", value: 0.0 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform sampler2D tDiffuse;",
        "uniform float amount;",
        "uniform float angle;",

        "varying vec2 vUv;",

        "void main() {",

            "vec2 offset = amount * vec2( cos(angle), sin(angle));",
            "vec4 cr = texture2D(tDiffuse, vUv + offset);",
            "vec4 cga = texture2D(tDiffuse, vUv);",
            "vec4 cb = texture2D(tDiffuse, vUv - offset);",
            "gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);",

        "}"

    ].join("\n")

};

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Film grain & scanlines shader
 *
 * - ported from HLSL to WebGL / GLSL
 * http://www.truevision3d.com/forums/showcase/staticnoise_colorblackwhite_scanline_shaders-t18698.0.html
 *
 * Screen Space Static Postprocessor
 *
 * Produces an analogue noise overlay similar to a film grain / TV static
 *
 * Original implementation and noise algorithm
 * Pat 'Hawthorne' Shearon
 *
 * Optimized scanlines + noise version with intensity scaling
 * Georg 'Leviathan' Steinrohder
 *
 * This version is provided under a Creative Commons Attribution 3.0 License
 * http://creativecommons.org/licenses/by/3.0/
 */

THREE.FilmShader = {

    uniforms: {

        "tDiffuse":   { type: "t", value: null },
        "time":       { type: "f", value: 0.0 },
        "nIntensity": { type: "f", value: 0.5 },
        "sIntensity": { type: "f", value: 0.05 },
        "sCount":     { type: "f", value: 4096 },
        "grayscale":  { type: "i", value: 1 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        // control parameter
        "uniform float time;",

        "uniform bool grayscale;",

        // noise effect intensity value (0 = no effect, 1 = full effect)
        "uniform float nIntensity;",

        // scanlines effect intensity value (0 = no effect, 1 = full effect)
        "uniform float sIntensity;",

        // scanlines effect count value (0 = no effect, 4096 = full effect)
        "uniform float sCount;",

        "uniform sampler2D tDiffuse;",

        "varying vec2 vUv;",

        "void main() {",

            // sample the source
            "vec4 cTextureScreen = texture2D( tDiffuse, vUv );",

            // make some noise
            "float x = vUv.x * vUv.y * time *  1000.0;",
            "x = mod( x, 13.0 ) * mod( x, 123.0 );",
            "float dx = mod( x, 0.01 );",

            // add noise
            "vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );",

            // get us a sine and cosine
            "vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );",

            // add scanlines
            "cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;",

            // interpolate between source and result by intensity
            "cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );",

            // convert to grayscale if desired
            "if( grayscale ) {",

                "cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );",

            "}",

            "gl_FragColor =  vec4( cResult, cTextureScreen.a );",

        "}"

    ].join("\n")

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.MaskPass = function ( scene, camera ) {

    this.scene = scene;
    this.camera = camera;

    this.enabled = true;
    this.clear = true;
    this.needsSwap = false;

    this.inverse = false;

};

THREE.MaskPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

        var context = renderer.context;

        // don't update color or depth

        context.colorMask( false, false, false, false );
        context.depthMask( false );

        // set up stencil

        var writeValue, clearValue;

        if ( this.inverse ) {

            writeValue = 0;
            clearValue = 1;

        } else {

            writeValue = 1;
            clearValue = 0;

        }

        context.enable( context.STENCIL_TEST );
        context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
        context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
        context.clearStencil( clearValue );

        // draw into the stencil buffer

        renderer.render( this.scene, this.camera, readBuffer, this.clear );
        renderer.render( this.scene, this.camera, writeBuffer, this.clear );

        // re-enable update of color and depth

        context.colorMask( true, true, true, true );
        context.depthMask( true );

        // only render where stencil is set to 1

        context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
        context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

    }

};


THREE.ClearMaskPass = function () {

    this.enabled = true;

};

THREE.ClearMaskPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

        var context = renderer.context;

        context.disable( context.STENCIL_TEST );

    }

};


/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Focus shader
 * based on PaintEffect postprocess from ro.me
 * http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
 */

THREE.FocusShader = {

    uniforms : {

        "tDiffuse":       { type: "t", value: null },
        "screenWidth":    { type: "f", value: 1024 },
        "screenHeight":   { type: "f", value: 1024 },
        "sampleDistance": { type: "f", value: 0.94 },
        "waveFactor":     { type: "f", value: 0.00125 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform float screenWidth;",
        "uniform float screenHeight;",
        "uniform float sampleDistance;",
        "uniform float waveFactor;",

        "uniform sampler2D tDiffuse;",

        "varying vec2 vUv;",

        "void main() {",

            "vec4 color, org, tmp, add;",
            "float sample_dist, f;",
            "vec2 vin;",
            "vec2 uv = vUv;",

            "add = color = org = texture2D( tDiffuse, uv );",

            "vin = ( uv - vec2( 0.5 ) ) * vec2( 1.4 );",
            "sample_dist = dot( vin, vin ) * 2.0;",

            "f = ( waveFactor * 100.0 + sample_dist ) * sampleDistance * 4.0;",

            "vec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2( f );",

            "add += tmp = texture2D( tDiffuse, uv + vec2( 0.111964, 0.993712 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( 0.846724, 0.532032 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( 0.943883, -0.330279 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( 0.330279, -0.943883 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( -0.532032, -0.846724 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( -0.993712, -0.111964 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "add += tmp = texture2D( tDiffuse, uv + vec2( -0.707107, 0.707107 ) * sampleSize );",
            "if( tmp.b < color.b ) color = tmp;",

            "color = color * vec4( 2.0 ) - ( add / vec4( 8.0 ) );",
            "color = color + ( add / vec4( 8.0 ) - color ) * ( vec4( 1.0 ) - vec4( sample_dist * 0.5 ) );",

            "gl_FragColor = vec4( color.rgb * color.rgb * vec3( 0.95 ) + color.rgb, 1.0 );",

        "}"


    ].join("\n")
};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.BloomPass = function ( strength, kernelSize, sigma, resolution ) {

    strength = ( strength !== undefined ) ? strength : 1;
    kernelSize = ( kernelSize !== undefined ) ? kernelSize : 25;
    sigma = ( sigma !== undefined ) ? sigma : 4.0;
    resolution = ( resolution !== undefined ) ? resolution : 256;

    // render targets

    var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };

    this.renderTargetX = new THREE.WebGLRenderTarget( resolution, resolution, pars );
    this.renderTargetY = new THREE.WebGLRenderTarget( resolution, resolution, pars );

    // copy material

    if ( THREE.CopyShader === undefined )
        console.error( "THREE.BloomPass relies on THREE.CopyShader" );

    var copyShader = THREE.CopyShader;

    this.copyUniforms = THREE.UniformsUtils.clone( copyShader.uniforms );

    this.copyUniforms[ "opacity" ].value = strength;

    this.materialCopy = new THREE.ShaderMaterial( {

        uniforms: this.copyUniforms,
        vertexShader: copyShader.vertexShader,
        fragmentShader: copyShader.fragmentShader,
        blending: THREE.AdditiveBlending,
        transparent: true

    } );

    // convolution material

    if ( THREE.ConvolutionShader === undefined )
        console.error( "THREE.BloomPass relies on THREE.ConvolutionShader" );

    var convolutionShader = THREE.ConvolutionShader;

    this.convolutionUniforms = THREE.UniformsUtils.clone( convolutionShader.uniforms );

    this.convolutionUniforms[ "uImageIncrement" ].value = THREE.BloomPass.blurx;
    this.convolutionUniforms[ "cKernel" ].value = THREE.ConvolutionShader.buildKernel( sigma );

    this.materialConvolution = new THREE.ShaderMaterial( {

        uniforms: this.convolutionUniforms,
        vertexShader:  convolutionShader.vertexShader,
        fragmentShader: convolutionShader.fragmentShader,
        defines: {
            "KERNEL_SIZE_FLOAT": kernelSize.toFixed( 1 ),
            "KERNEL_SIZE_INT": kernelSize.toFixed( 0 )
        }

    } );

    this.enabled = true;
    this.needsSwap = false;
    this.clear = false;


    this.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
    this.scene  = new THREE.Scene();

    this.quad = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), null );
    this.scene.add( this.quad );

};

THREE.BloomPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

        if ( maskActive ) renderer.context.disable( renderer.context.STENCIL_TEST );

        // Render quad with blured scene into texture (convolution pass 1)

        this.quad.material = this.materialConvolution;

        this.convolutionUniforms[ "tDiffuse" ].value = readBuffer;
        this.convolutionUniforms[ "uImageIncrement" ].value = THREE.BloomPass.blurX;

        renderer.render( this.scene, this.camera, this.renderTargetX, true );


        // Render quad with blured scene into texture (convolution pass 2)

        this.convolutionUniforms[ "tDiffuse" ].value = this.renderTargetX;
        this.convolutionUniforms[ "uImageIncrement" ].value = THREE.BloomPass.blurY;

        renderer.render( this.scene, this.camera, this.renderTargetY, true );

        // Render original scene with superimposed blur to texture

        this.quad.material = this.materialCopy;

        this.copyUniforms[ "tDiffuse" ].value = this.renderTargetY;

        if ( maskActive ) renderer.context.enable( renderer.context.STENCIL_TEST );

        renderer.render( this.scene, this.camera, readBuffer, this.clear );

    }

};

THREE.BloomPass.blurX = new THREE.Vector2( 0.001953125, 0.0 );
THREE.BloomPass.blurY = new THREE.Vector2( 0.0, 0.001953125 );

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Convolution shader
 * ported from o3d sample to WebGL / GLSL
 * http://o3d.googlecode.com/svn/trunk/samples/convolution.html
 */

THREE.ConvolutionShader = {

    defines: {

        "KERNEL_SIZE_FLOAT": "25.0",
        "KERNEL_SIZE_INT": "25",

    },

    uniforms: {

        "tDiffuse":        { type: "t", value: null },
        "uImageIncrement": { type: "v2", value: new THREE.Vector2( 0.001953125, 0.0 ) },
        "cKernel":         { type: "fv1", value: [] }

    },

    vertexShader: [

        "uniform vec2 uImageIncrement;",

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform float cKernel[ KERNEL_SIZE_INT ];",

        "uniform sampler2D tDiffuse;",
        "uniform vec2 uImageIncrement;",

        "varying vec2 vUv;",

        "void main() {",

            "vec2 imageCoord = vUv;",
            "vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );",

            "for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {",

                "sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];",
                "imageCoord += uImageIncrement;",

            "}",

            "gl_FragColor = sum;",

        "}"


    ].join("\n"),

    buildKernel: function ( sigma ) {

        // We lop off the sqrt(2 * pi) * sigma term, since we're going to normalize anyway.

        function gauss( x, sigma ) {

            return Math.exp( - ( x * x ) / ( 2.0 * sigma * sigma ) );

        }

        var i, values, sum, halfWidth, kMaxKernelSize = 25, kernelSize = 2 * Math.ceil( sigma * 3.0 ) + 1;

        if ( kernelSize > kMaxKernelSize ) kernelSize = kMaxKernelSize;
        halfWidth = ( kernelSize - 1 ) * 0.5;

        values = new Array( kernelSize );
        sum = 0.0;
        for ( i = 0; i < kernelSize; ++i ) {

            values[ i ] = gauss( i - halfWidth, sigma );
            sum += values[ i ];

        }

        // normalize the kernel

        for ( i = 0; i < kernelSize; ++i ) values[ i ] /= sum;

        return values;

    }

};

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Dot screen shader
 * based on glfx.js sepia shader
 * https://github.com/evanw/glfx.js
 */

THREE.DotScreenShader = {

    uniforms: {

        "tDiffuse": { type: "t", value: null },
        "tSize":    { type: "v2", value: new THREE.Vector2( 256, 256 ) },
        "center":   { type: "v2", value: new THREE.Vector2( 0.5, 0.5 ) },
        "angle":    { type: "f", value: 1.57 },
        "scale":    { type: "f", value: 1.0 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform vec2 center;",
        "uniform float angle;",
        "uniform float scale;",
        "uniform vec2 tSize;",

        "uniform sampler2D tDiffuse;",

        "varying vec2 vUv;",

        "float pattern() {",

            "float s = sin( angle ), c = cos( angle );",

            "vec2 tex = vUv * tSize - center;",
            "vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;",

            "return ( sin( point.x ) * sin( point.y ) ) * 4.0;",

        "}",

        "void main() {",

            "vec4 color = texture2D( tDiffuse, vUv );",

            "float average = ( color.r + color.g + color.b ) / 3.0;",

            "gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );",

        "}"

    ].join("\n")

};

/**
 * @author felixturner / http://airtight.cc/
 *
 * Kaleidoscope Shader
 * Radial reflection around center point
 * Ported from: http://pixelshaders.com/editor/
 * by Toby Schachman / http://tobyschachman.com/
 *
 * sides: number of reflections
 * angle: initial angle in radians
 */

THREE.KaleidoShader = {

    uniforms: {

        "tDiffuse": { type: "t", value: null },
        "sides":    { type: "f", value: 6.0 },
        "angle":    { type: "f", value: 0.0 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform sampler2D tDiffuse;",
        "uniform float sides;",
        "uniform float angle;",
        
        "varying vec2 vUv;",

        "void main() {",

            "vec2 p = vUv - 0.5;",
            "float r = length(p);",
            "float a = atan(p.y, p.x) + angle;",
            "float tau = 2. * 3.1416 ;",
            "a = mod(a, tau/sides);",
            "a = abs(a - tau/sides/2.) ;",
            "p = r * vec2(cos(a), sin(a));",
            "vec4 color = texture2D(tDiffuse, p + 0.5);",
            "gl_FragColor = color;",

        "}"

    ].join("\n")

};

THREE.HorizontalBlurShader = {

    uniforms: {

        "tDiffuse": { type: "t", value: null },
        "h":        { type: "f", value: 1.0 / 512.0 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform sampler2D tDiffuse;",
        "uniform float h;",

        "varying vec2 vUv;",

        "void main() {",

            "vec4 sum = vec4( 0.0 );",

            "sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;",
            "sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;",

            "gl_FragColor = sum;",

        "}"

    ].join("\n")

};

THREE.VerticalBlurShader = {

    uniforms: {

        "tDiffuse": { type: "t", value: null },
        "v":        { type: "f", value: 1.0 / 512.0 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform sampler2D tDiffuse;",
        "uniform float v;",

        "varying vec2 vUv;",

        "void main() {",

            "vec4 sum = vec4( 0.0 );",

            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;",
            "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;",

            "gl_FragColor = sum;",

        "}"

    ].join("\n")

};

/**
 * @author huwb / http://huwbowles.com/
 *
 * God-rays (crepuscular rays)
 *
 * Similar implementation to the one used by Crytek for CryEngine 2 [Sousa2008].
 * Blurs a mask generated from the depth map along radial lines emanating from the light
 * source. The blur repeatedly applies a blur filter of increasing support but constant
 * sample count to produce a blur filter with large support.
 *
 * My implementation performs 3 passes, similar to the implementation from Sousa. I found
 * just 6 samples per pass produced acceptible results. The blur is applied three times,
 * with decreasing filter support. The result is equivalent to a single pass with
 * 6*6*6 = 216 samples.
 *
 * References:
 *
 * Sousa2008 - Crysis Next Gen Effects, GDC2008, http://www.crytek.com/sites/default/files/GDC08_SousaT_CrysisEffects.ppt
 */

THREE.ShaderGodRays = {

    /**
     * The god-ray generation shader.
     *
     * First pass:
     *
     * The input is the depth map. I found that the output from the
     * THREE.MeshDepthMaterial material was directly suitable without
     * requiring any treatment whatsoever.
     *
     * The depth map is blurred along radial lines towards the "sun". The
     * output is written to a temporary render target (I used a 1/4 sized
     * target).
     *
     * Pass two & three:
     *
     * The results of the previous pass are re-blurred, each time with a
     * decreased distance between samples.
     */

    'godrays_generate': {

        uniforms: {

            tInput: {
                type: "t",
                value: null
            },

            fStepSize: {
                type: "f",
                value: 1.0
            },

            vSunPositionScreenSpace: {
                type: "v2",
                value: new THREE.Vector2( 0.5, 0.5 )
            }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

                "vUv = uv;",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "#define TAPS_PER_PASS 6.0",

            "varying vec2 vUv;",

            "uniform sampler2D tInput;",

            "uniform vec2 vSunPositionScreenSpace;",
            "uniform float fStepSize;", // filter step size

            "void main() {",

                // delta from current pixel to "sun" position

                "vec2 delta = vSunPositionScreenSpace - vUv;",
                "float dist = length( delta );",

                // Step vector (uv space)

                "vec2 stepv = fStepSize * delta / dist;",

                // Number of iterations between pixel and sun

                "float iters = dist/fStepSize;",

                "vec2 uv = vUv.xy;",
                "float col = 0.0;",

                // This breaks ANGLE in Chrome 22
                //  - see http://code.google.com/p/chromium/issues/detail?id=153105

                /*
                // Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),
                // so i've just left the loop

                "for ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {",

                    // Accumulate samples, making sure we dont walk past the light source.

                    // The check for uv.y < 1 would not be necessary with "border" UV wrap
                    // mode, with a black border colour. I don't think this is currently
                    // exposed by three.js. As a result there might be artifacts when the
                    // sun is to the left, right or bottom of screen as these cases are
                    // not specifically handled.

                    "col += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );",
                    "uv += stepv;",

                "}",
                */

                // Unrolling loop manually makes it work in ANGLE

                "if ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;",
                "uv += stepv;",

                "if ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;",
                "uv += stepv;",

                "if ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;",
                "uv += stepv;",

                "if ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;",
                "uv += stepv;",

                "if ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;",
                "uv += stepv;",

                "if ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;",
                "uv += stepv;",

                // Should technically be dividing by 'iters', but 'TAPS_PER_PASS' smooths out
                // objectionable artifacts, in particular near the sun position. The side
                // effect is that the result is darker than it should be around the sun, as
                // TAPS_PER_PASS is greater than the number of samples actually accumulated.
                // When the result is inverted (in the shader 'godrays_combine', this produces
                // a slight bright spot at the position of the sun, even when it is occluded.

                "gl_FragColor = vec4( col/TAPS_PER_PASS );",
                "gl_FragColor.a = 1.0;",

            "}"

        ].join("\n")

    },

    /**
     * Additively applies god rays from texture tGodRays to a background (tColors).
     * fGodRayIntensity attenuates the god rays.
     */

    'godrays_combine': {

        uniforms: {

            tColors: {
                type: "t",
                value: null
            },

            tGodRays: {
                type: "t",
                value: null
            },

            fGodRayIntensity: {
                type: "f",
                value: 0.69
            },

            vSunPositionScreenSpace: {
                type: "v2",
                value: new THREE.Vector2( 0.5, 0.5 )
            }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

                "vUv = uv;",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

            ].join("\n"),

        fragmentShader: [

            "varying vec2 vUv;",

            "uniform sampler2D tColors;",
            "uniform sampler2D tGodRays;",

            "uniform vec2 vSunPositionScreenSpace;",
            "uniform float fGodRayIntensity;",

            "void main() {",

                // Since THREE.MeshDepthMaterial renders foreground objects white and background
                // objects black, the god-rays will be white streaks. Therefore value is inverted
                // before being combined with tColors

                "gl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );",
                "gl_FragColor.a = 1.0;",

            "}"

        ].join("\n")

    },


    /**
     * A dodgy sun/sky shader. Makes a bright spot at the sun location. Would be
     * cheaper/faster/simpler to implement this as a simple sun sprite.
     */

    'godrays_fake_sun': {

        uniforms: {

            vSunPositionScreenSpace: {
                type: "v2",
                value: new THREE.Vector2( 0.5, 0.5 )
            },

            fAspect: {
                type: "f",
                value: 1.0
            },

            sunColor: {
                type: "c",
                value: new THREE.Color( 0xffee00 )
            },

            bgColor: {
                type: "c",
                value: new THREE.Color( 0x000000 )
            }

        },

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",

                "vUv = uv;",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            "}"

        ].join("\n"),

        fragmentShader: [

            "varying vec2 vUv;",

            "uniform vec2 vSunPositionScreenSpace;",
            "uniform float fAspect;",

            "uniform vec3 sunColor;",
            "uniform vec3 bgColor;",

            "void main() {",

                "vec2 diff = vUv - vSunPositionScreenSpace;",

                // Correct for aspect ratio

                "diff.x *= fAspect;",

                "float prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );",
                "prop = 0.35 * pow( 1.0 - prop, 3.0 );",

                //"gl_FragColor.xyz = mix( sunColor, bgColor, 1.0 - prop );",
                //"gl_FragColor.w = 1.0;",

            "}"

        ].join("\n")

    }

};

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Depth-of-field shader with bokeh
 * ported from GLSL shader by Martins Upitis
 * http://artmartinsh.blogspot.com/2010/02/glsl-lens-blur-filter-with-bokeh.html
 */

THREE.BokehShader = {

    uniforms: {

        "tColor":   { type: "t", value: null },
        "tDepth":   { type: "t", value: null },
        "focus":    { type: "f", value: 1.0 },
        "aspect":   { type: "f", value: 1.0 },
        "aperture": { type: "f", value: 0.025 },
        "maxblur":  { type: "f", value: 1.0 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "varying vec2 vUv;",

        "uniform sampler2D tColor;",
        "uniform sampler2D tDepth;",

        "uniform float maxblur;",  // max blur amount
        "uniform float aperture;", // aperture - bigger values for shallower depth of field

        "uniform float focus;",
        "uniform float aspect;",

        "void main() {",

            "vec2 aspectcorrect = vec2( 1.0, aspect );",

            "vec4 depth1 = texture2D( tDepth, vUv );",

            "float factor = depth1.x - focus;",

            "vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );",

            "vec2 dofblur9 = dofblur * 0.9;",
            "vec2 dofblur7 = dofblur * 0.7;",
            "vec2 dofblur4 = dofblur * 0.4;",

            "vec4 col = vec4( 0.0 );",

            "col += texture2D( tColor, vUv.xy );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );",
            /*"col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );",*/

            "col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );",
            /*"col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );",*/

            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );",
            /*"col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );",*/

            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );",
            /*"col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );",
            "col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );",*/

            "gl_FragColor = col / 21.0;",
            "gl_FragColor.a = 1.0;",

        "}"

    ].join("\n")

};

/**
 * Depth-of-field post-process with bokeh shader
 */


THREE.BokehPass = function ( scene, camera, params ) {

    this.scene = scene;
    this.camera = camera;

    var focus = ( params.focus !== undefined ) ? params.focus : 1.0;
    var aspect = ( params.aspect !== undefined ) ? params.aspect : camera.aspect;
    var aperture = ( params.aperture !== undefined ) ? params.aperture : 0.025;
    var maxblur = ( params.maxblur !== undefined ) ? params.maxblur : 1.0;

    // render targets

    var width = params.width || window.innerWidth || 1;
    var height = params.height || window.innerHeight || 1;

    this.renderTargetColor = new THREE.WebGLRenderTarget( width, height, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBFormat
    } );

    this.renderTargetDepth = this.renderTargetColor.clone();

    // depth material

    this.materialDepth = new THREE.MeshDepthMaterial();

    // bokeh material

    if ( THREE.BokehShader === undefined ) {
        console.error( "THREE.BokehPass relies on THREE.BokehShader" );
    }
    
    var bokehShader = THREE.BokehShader;
    var bokehUniforms = THREE.UniformsUtils.clone( bokehShader.uniforms );

    bokehUniforms[ "tDepth" ].value = this.renderTargetDepth;

    bokehUniforms[ "focus" ].value = focus;
    bokehUniforms[ "aspect" ].value = aspect;
    bokehUniforms[ "aperture" ].value = aperture;
    bokehUniforms[ "maxblur" ].value = maxblur;

    this.materialBokeh = new THREE.ShaderMaterial({
        uniforms: bokehUniforms,
        vertexShader: bokehShader.vertexShader,
        fragmentShader: bokehShader.fragmentShader
    });

    this.uniforms = bokehUniforms;
    this.enabled = true;
    this.needsSwap = false;
    this.renderToScreen = false;
    this.clear = false;

    this.camera2 = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
    this.scene2  = new THREE.Scene();

    this.quad2 = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), null );
    this.scene2.add( this.quad2 );

};

THREE.BokehPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

        this.quad2.material = this.materialBokeh;

        // Render depth into texture

        this.scene.overrideMaterial = this.materialDepth;

        renderer.render( this.scene, this.camera, this.renderTargetDepth, true );

        // Render bokeh composite

        this.uniforms[ "tColor" ].value = readBuffer;

        if ( this.renderToScreen ) {

            renderer.render( this.scene2, this.camera2 );

        } else {

            renderer.render( this.scene2, this.camera2, writeBuffer, this.clear );

        }

        this.scene.overrideMaterial = null;

    }

};
