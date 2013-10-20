if(/^u/.test(typeof define)){var U={};this.define=function(a,b){U[a]=b()},this.require=function(a){return U[a]}}define("minified",function(){function y(a){return a!=h?""+a:""}function v(a){return"string"==typeof a}function z(a){return a&&a.nodeType}function ba(a){return a}function A(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function N(a,b){var c=[];return f(a,function(a,d){b(a,d)&&c.push(a)}),c}function w(a,b,c){var d=[];return a(b,function(a,b){f(c(a,b),function(a){d.push(a)})}),d}function n(a,b,c){return y(a).replace(b,c||"")}function f(a,b){if(E(a))for(var c=0;c<a.length;c++)b(a[c],c);else a!=h&&b(a,0);return a}function V(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function t(a){return"function"==typeof a&&!a.item}function E(a){return a&&a.length!=h&&!v(a)&&!z(a)&&!t(a)&&a!==p}function O(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):u}}function P(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function J(a,b){p.setTimeout(a,b||0)}function G(a){return parseFloat(n(a,/^[^\d-]+/))}function K(a){return a.Mid=a.Mid||++ca}function Q(a,b){var c,d=[],e={};return f(a,function(a){f(b(a),function(a){z(a)&&!e[c=K(a)]&&(d.push(a),e[c]=u)})}),d}function W(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:h},c=a.get(b);return a.set(b),b=a.get("$height",u),a.set(c),b}function da(a,b,c,d,e,f,g){return function(h,i){for(var j,k=h||p.event,l=!g,m=i||k.target;m&&m!=b&&!l;)g(m)?l=u:m=m.parentNode;return l&&(j=(!a.apply(c||(g?m:b),d||[k,e])||""==f)&&"|"!=f)&&!i&&(k.stopPropagation&&(k.preventDefault(),k.stopPropagation()),k.returnValue=x,k.cancelBubble=u),j}}function X(a){a()}function R(a,b){f(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function Y(){f(I,X),I=h}function Z(a){I?I.push(a):J(a)}function $(a,b,c){return a=r(s.createElement(a)),E(b)||b!=h&&"object"!=typeof b?a.add(b):a.set(b).add(c)}function L(a){return w(f,a,function(a){var b,c;return v(a)?a:E(a)?L(a):1==(b=z(a))?(c={$:a.className||h,$$:B?a.style.cssText:a.getAttribute("style")},f(a.attributes,function(b){var d=b.name;"id"!=d&&"style"!=d&&"class"!=d&&a.getAttribute(d)&&(c["@"+d]=b.value)}),$(a.tagName,c,L(a.childNodes))):5>b?a.data:h})}function r(a,b,c){return t(a)?Z(a):new F(D(a,b,c))}function D(a,b,c){function d(a){return a=w(f,a,function b(a){return E(a)?w(f,a,b):a}),e?N(a,function(a){for(;a=a.parentNode;)if(a==e||c)return a==e}):a}var e,g,h,i;return b&&1!=(b=D(b)).length?Q(b,function(b){return D(a,b,c)}):(e=b&&b[0],v(a)?1<(b=a.split(/\s*,\s*/)).length?Q(b,function(a){return D(a,e,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?D(b[2],D(b[1],e),c):a!=(b=n(a,/^#/))?d(s.getElementById(b)):(g=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],i=b[2],b=(h=s.getElementsByClassName&&i)?(e||s).getElementsByClassName(i):(e||s).getElementsByTagName(g||"*"),(g=h?g:i)&&(b=N(b,O(g,h?"nodeName":"className"))),c?d(b):b):d(a))}function M(a,b){var c,d,e,f={};return t(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||v(a)&&(c=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(d=O(c&&c[1],"nodeName"),e=O(c&&c[2],"className"),function(a){return 1==z(a)&&d(a)&&e(a)}):b?function(c){return r(a,b).find(c)!=h}:(r(a).each(function(a){f[K(a)]=u}),function(a){return f[K(a)]})}function S(){function a(a,e){b==h&&(b=a,c=e,J(function(){f(d,X)}))}var b,c=[],d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,t(d)?(f=d.apply(h,c),f&&t(f.then)?f.then(function(a){g(u,[a])},function(a){g(x,[a])}):g(u,[f])):g(b,c)}catch(i){g(x,[i])}}var g=S();return b!=h?J(f):d.push(f),g};return a.error=function(a){return e(0,a)},a}function F(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var aa,h=null,u=!0,x=!1,p=this,s=document,ca=1,C={},I=[],T=[],ea=p.requestAnimationFrame||function(a){J(a,33)},B=!!s.all&&!I.map;return A({each:function(a){return f(this,a)},filter:function(a){return new F(N(this,a))},collect:function(a){return new F(w(f,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&d>b})},find:function(a,b){for(var c,d=t(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d(this[e],e))!=h)return c},remove:function(){f(this,function(a){B&&1==z(a)&&(f(D("*",a),function(a){R(0,C[a.Mid]),delete C[a.Mid]}),R(0,C[a.Mid]),delete C[a.Mid]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=z(b);return 1==c?w(f,b.childNodes,a):5>c?b.data:h}return w(f,this,a).join("")},trav:function(a,b,c){var d="number"==typeof b,e=M(d?h:b),f=d?b:c;return new F(Q(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},select:function(a,b){return r(a,this,b)},is:function(a){var b=M(a);return!this.find(function(a){return b(a)?void 0:u})},only:function(a){return this.filter(M(a))},get:function(a,b){var c,d,e,g=this,i=g[0];return i?v(a)?(d=n(n(a,/^%/,"data-"),/^[$@]+/),c="$"==a?i.className:"$$"==a?B?i.style.cssText:i.getAttribute("style"):!/^\$\$/.test(a)||"hidden"!=i.style.visibility&&"none"!=i.style.display?"$$fade"==a?isNaN(c=B?G(i.style.filter)/100:G(i.style.opacity))?1:c:"$$slide"==a?g.get("$height"):"$$scrollX"==a?p.pageXOffset!=h?p.pageXOffset:(s.documentElement||s.body.parentNode||s.body).scrollLeft:"$$scrollY"==a?p.pageXOffset!=h?p.pageYOffset:(s.documentElement||s.body.parentNode||s.body).scrollTop:/^\$[^$]/.test(a)?p.getComputedStyle?p.getComputedStyle(i,h).getPropertyValue(n(d,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(i.currentStyle||i.style)[d]:/^[@%]/.test(a)?i.getAttribute(d):i[d]:0,b?G(c):c):(e={},(E(a)?f:A)(a,function(a){e[a]=g.get(a,b)}),e):void 0},set:function(a,b){function c(a,b,c){c!=h?a.setAttribute(b,c):a.removeAttribute(b)}var d,e=this;return void 0!==b?"$$fade"==a||"$$slide"==a?e.set({$visibility:0<(d=G(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?B?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$opacity:d}:{$height:/px/.test(b)?b:function(a,b,c){return d*(d&&W(r(c)))+"px"},$overflow:"hidden"}):f(e,function(d,e){var g=n(n(a,/^%/,"data-"),/^[@$]+/),i=d.className||"",j=/^\$/.test(a)?d.style:d,k=t(b)?b(r(d).get(a),e,d):b;"$"==a?k!=h&&(f(k.split(/\s+/),function(a){var b=n(a,/^[+-]/),c=i;i=n(i,RegExp("(^|\\s)"+b+"(?=$|\\s)","i")),(/^\+/.test(a)||b==a&&c==i)&&(i+=" "+b)}),d.className=n(i,/^\s+|\s+(?=\s|$)/g)):"$$"==a?B?j.cssText=k:c(d,"style",k):"$$scrollX"==a?d.scroll(k,r(d).get("$$scrollY")):"$$scrollY"==a?d.scroll(r(d).get("$$scrollX"),k):/^[@%]/.test(a)?c(j,g,k):j[g]=k}):v(a)||t(a)?e.set("$",a):A(a,function(a,b){e.set(a,b)}),e},add:function(a,b){return this.each(function(c,d){var e;!function g(a){E(a)?f(a,g):t(a)?g(a(c,d)):a!=h&&(a=z(a)?a:s.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)}(d&&!t(a)?L(a):a)})},fill:function(a){return this.each(function(a){r(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new F(L(this))},animate:function(a,b,c){var d,e=this,g=[],h=S(),i=0;return h.stop=function(){return h(x),d(),i},b=b||500,f(e,function(b,d){var e,f=r(b),h={};A(e=f.get(a),function(c,e){var g=a[c];h[c]=t(g)?g(e,d,b):"$$slide"==c?a[c]*W(f)+"px":g}),g.push(f.dial(e,h,c))}),d=r.loop(function(a){a>=b||0>a?(i=b,d(),h(u,[e])):i=a,f(g,function(a){a(i/b)})}),h},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(n(a,/[^\d,]+/g).split(",")[b])}var e=this,f=t(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};return c=c||0,function(c){A(a,function(a,g){var h=b[a],i=0;e.set(a,0>=c?g:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(f(d(g,i),d(h,i++),c))+","+Math.round(f(d(g,i),d(h,i++),c))+","+Math.round(f(d(g,i),d(h,i++),c))+")":n(h,/-?[\d.]+/,y(f(G(g),G(h),c))))})}},toggle:function(a,b,c,d){var e,f,g=this,i=x,j=/\b(?=\w)/g;return b?g.set(a)&&function(j){j!==i&&(f=(i=j===u||j===x?j:!i)?b:a,c?(e=g.animate(f,e?e.stop():c,d)).d(function(){e=h}):g.set(f)&&void 0)}:g.toggle(n(a,j,"-"),n(a,j,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name,d=y(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)r(a.elements[c]).values(b);else!c||/kbox|dio/i.test(a.type)&&!a.checked||(b[c]=w(f,[b[c],d],ba))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d){return this.each(function(e,g){f(a.split(/\s/),function(a){var f=n(a,/[?|]/),i=t(b)||h,j=i?b:c,i=da(j,e,i&&d&&c,i&&(d||c),g,n(a,/[^?|]/g),i?null:M(b,e));a={e:e,h:i,n:f},(j.M=j.M||[]).push(a),B?(e.attachEvent("on"+f,i),f=K(e),(C[f]=C[f]||[]).push(a)):(e.addEventListener(f,i,x),(e.M=e.M||[]).push(a))})})},onOver:function(a){var b=this,c=[];return b.on("|mouseover |mouseout",function(d,e){var f="mouseout"!=d.type,g=d.relatedTarget||d.toElement;c[e]===f||!f&&g&&(g==b[e]||r(g).trav("parentNode",b[e]).length)||(c[e]=f,a.call(this,f,e,d))})},onChange:function(a){var b=[];each(this,function(c,d){function e(d,e,f){b[f]=c[e],r(c).on(d,function(){var d=c[e];d!=b[f]&&(a.call(this,d,f),b[f]=d)})}/kbox|dio/i.test(c.type)?e("|click","checked",d):e("|input |change |keyup","value",d)})},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)f(B?C[e.Mid]:e.M,function(e){e.n==a&&(d=d||e.h(b,c))}),e=e.parentNode})}},function(a,b){F.prototype[a]=b}),A({request:function(a,b,c,d,e,g){var i,j=c,k=0,l=S();try{i=p.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),c!=h&&(d=d||{},v(c)||z(c)||(j=w(A,c,function(a,b){return w(f,b,function(b){return encodeURIComponent(a)+(b!=h?"="+encodeURIComponent(b):"")})}).join("&")),/post/i.test(a)?z(c)||v(c)||d["Content-Type"]||(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+j,j=h)),i.open(a,b,u,e,g),A(d,function(a,b){i.setRequestHeader(a,b)}),i.onreadystatechange=function(){4!=i.readyState||k++||(200==i.status?l(u,[i.responseText,i.responseXML]):l(x,[i.status,i.statusText,i.responseText]))},i.send(j)}catch(m){k||l(x,[0,h,y(m)])}return l},toJSON:function a(b){return b==h?""+b:v(b=b.valueOf())?'"'+n(b,/[\\\"\x00-\x1f\x22\x5c\u2028\u2029]/g,V)+'"':E(b)?"["+w(f,b,a).join()+"]":"object"==typeof b?"{"+w(A,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":y(b)},parseJSON:p.JSON?p.JSON.parse:function(b){return b=n(b,/[\x00\xad\u0600-\uffff]/g,V),/^[[\],:{}\s]*$/.test(n(n(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+b+")"):void 0},ready:Z,loop:function(a){var b={b:a,c:(new Date).getTime(),a:function(){P(T,b)}};return 2>T.push(b)&&function c(){f(T,function(a){a.b(Math.max(0,(new Date).getTime()-a.c),a.a)}).length&&ea(c)}(),b.a},off:function(a){f(a.M,function(a){B?(a.e.detachEvent("on"+a.n,a.h),P(C[a.e.Mid],a)):(a.e.removeEventListener(a.n,a.h,x),P(a.e.M,a))}),a.M=h}},function(a,b){r[a]=b}),aa=p.onload,p.onload=function(){Y(),aa&&aa()},s.addEventListener&&s.addEventListener("DOMContentLoaded",Y,x),p.f=function(){f(C,R)},{$:r,$$:function(a){return D(a)[0]},EE:$,M:F}});