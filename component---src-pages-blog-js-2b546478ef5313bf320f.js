(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6Gk8":function(t,e,r){"use strict";var n=r("q1tI"),i=r.n(n),o=r("Wbzz"),s=r("vOnD"),a=r("Qn5d"),c="787453844",l=s.a.div.withConfig({displayName:"bio__Container",componentId:"sc-1yz8z2n-0"})(["display:flex;"]);e.a=function(t){t.data;return i.a.createElement(o.StaticQuery,{query:c,render:function(t){var e=t.site.siteMetadata.author;return i.a.createElement(l,null,i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,e)," to put down his thoughts.",i.a.createElement("br",null),"Follow me on ",i.a.createElement(a.c,null)," or ",i.a.createElement(a.b,null),"."))}})}},"7ZuR":function(t,e,r){"use strict";var n,i;r("ToJy"),function(e,r,n){var i;(i=n.define)&&i.amd?i([],(function(){return r})):(i=n.modules)?i["FlexSearch".toLowerCase()]=r:t.exports=r}(0,function t(e){function r(t,e){var r=e?e.id:t&&t.id;this.id=r||0===r?r:_++,this.init(t,e),s(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),s(this,"length",(function(){return this.index.length}))}function n(t,e,r,n){return this.u!==this.g&&(this.o=this.o.concat(r),this.u++,n&&this.o.length>=n&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(e,this.o),this.F&&this.F(this.o))),this}function i(t,e){for(var r=t.length,n=b(e),i=[],o=0,s=0;o<r;o++){var a=t[o];(n&&e(a)||!n&&!e[a])&&(i[s++]=a)}return i}function o(t,e,r,n,i,o,s,a,c,l){var u;if(r=v(r,s?0:i,a,o,e,c,l),a&&(a=r.page,u=r.next,r=r.result),s)e=this.where(s,null,i,r);else{for(e=r,r=this.l,i=e.length,o=Array(i),s=0;s<i;s++)o[s]=r[e[s]];e=o}return r=e,n&&(b(n)||(1<(S=n.split(":")).length?n=p:(S=S[0],n=d)),r.sort(n)),r=g(a,u,r),this.cache&&this.j.set(t,r),r}function s(t,e,r){Object.defineProperty(t,e,{get:r})}function a(t){return new RegExp(t,"g")}function c(t,e){for(var r=0;r<e.length;r+=2)t=t.replace(e[r],e[r+1]);return t}function l(t,e,r,n,i,o,s,a){return e[r]?e[r]:(i=i?(a-(s||a/1.5))*o+(s||a/1.5)*i:o,e[r]=i,i>=s&&((t=(t=t[a-(i+.5>>0)])[r]||(t[r]=[]))[t.length]=n),i)}function u(t,e){if(t)for(var r=Object.keys(t),n=0,i=r.length;n<i;n++){var o=r[n],s=t[o];if(s)for(var a=0,c=s.length;a<c;a++){if(s[a]===e){1===c?delete t[o]:s.splice(a,1);break}x(s[a])&&u(s[a],e)}}}function h(t){for(var e="",r="",n="",i=0;i<t.length;i++){var o=t[i];o!==r&&(i&&"h"===o?(n="a"===n||"e"===n||"i"===n||"o"===n||"u"===n||"y"===n,(("a"===r||"e"===r||"i"===r||"o"===r||"u"===r||"y"===r)&&n||" "===r)&&(e+=o)):e+=o),n=i===t.length-1?"":t[i+1],r=o}return e}function f(t,e){return 0>(t=t.length-e.length)?1:t?-1:0}function d(t,e){return(t=t[S])<(e=e[S])?-1:t>e?1:0}function p(t,e){for(var r=S.length,n=0;n<r;n++)t=t[S[n]],e=e[S[n]];return t<e?-1:t>e?1:0}function g(t,e,r){return t?{page:t,next:e?""+e:null,result:r}:r}function v(t,e,r,n,i,o,s){var a,c=[];if(!0===r){r="0";var l=""}else l=r&&r.split(":");var u=t.length;if(1<u){var h,f,d,p,v,m,b,x,k,O,E=j(),S=[],I=0,A=!0,F=0;if(l&&(2===l.length?(x=l,l=!1):l=k=parseInt(l[0],10)),s){for(h=j();I<u;I++)if("not"===i[I])for(p=(f=t[I]).length,d=0;d<p;d++)h["@"+f[d]]=1;else b=I+1;if(w(b))return g(r,a,c);I=0}else m=y(i)&&i;for(;I<u;I++){var _=I===(b||u)-1;if(!m||!I)if((d=m||i&&i[I])&&"and"!==d){if("or"!==d)continue;O=!1}else O=o=!0;if(p=(f=t[I]).length){if(A){if(!v){v=f;continue}var C=v.length;for(d=0;d<C;d++){var M="@"+(A=v[d]);s&&h[M]||(E[M]=1,o||(c[F++]=A))}v=null,A=!1}for(M=!1,d=0;d<p;d++){var z="@"+(C=f[d]),B=o?E[z]||0:I;if(!(!B&&!n||s&&h[z]||!o&&E[z]))if(B===I){if(_){if((!k||--k<F)&&(c[F++]=C,e&&F===e))return g(r,F+(l||0),c)}else E[z]=I+1;M=!0}else n&&((z=S[B]||(S[B]=[]))[z.length]=C)}if(O&&!M&&!n)break}else if(O&&!n)return g(r,a,f)}if(v)if(I=v.length,s)for(d=l?parseInt(l,10):0;d<I;d++)h["@"+(t=v[d])]||(c[F++]=t);else c=v;if(n)for(F=c.length,x?(I=parseInt(x[0],10)+1,d=parseInt(x[1],10)+1):(I=S.length,d=0);I--;)if(C=S[I]){for(p=C.length;d<p;d++)if(n=C[d],(!s||!h["@"+n])&&(c[F++]=n,e&&F===e))return g(r,I+":"+d,c);d=0}}else!u||i&&"not"===i[0]||(c=t[0],l&&(l=parseInt(l[0],10)));return e&&(s=c.length,l&&l>s&&(l=0),(a=(l=l||0)+e)<s?c=c.slice(l,a):(a=0,l&&(c=c.slice(l)))),g(r,a,c)}function y(t){return"string"==typeof t}function m(t){return t.constructor===Array}function b(t){return"function"==typeof t}function x(t){return"object"==typeof t}function w(t){return void 0===t}function k(t){for(var e=Array(t),r=0;r<t;r++)e[r]=j();return e}function j(){return Object.create(null)}function O(){var t,e;self.onmessage=function(r){if(r=r.data)if(r.search){var n=e.search(r.content,r.threshold?{limit:r.limit,threshold:r.threshold,where:r.where}:r.limit);self.postMessage({id:t,content:r.content,limit:r.limit,result:n})}else r.add?e.add(r.id,r.content):r.update?e.update(r.id,r.content):r.remove?e.remove(r.id):r.clear?e.clear():r.info?((r=e.info()).worker=t,console.log(r)):r.register&&(t=r.id,r.options.cache=!1,r.options.async=!1,r.options.worker=!1,e=new(e=new Function(r.register.substring(r.register.indexOf("{")+1,r.register.lastIndexOf("}")))())(r.options))}}function E(r,n,i,o){r=e("flexsearch","id"+r,O,(function(t){(t=t.data)&&t.result&&o(t.id,t.content,t.result,t.limit,t.where,t.cursor,t.suggest)}),n);var s=t.toString();return i.id=n,r.postMessage({register:s,options:i,id:n}),r}var S,I={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},A={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},F=[],_=0,C={},M={};r.create=function(t,e){return new r(t,e)},r.registerMatcher=function(t){for(var e in t)t.hasOwnProperty(e)&&F.push(a(e),t[e]);return this},r.registerEncoder=function(t,e){return P[t]=e.bind(P),this},r.registerLanguage=function(t,e){return C[t]=e.filter,M[t]=e.stemmer,this},r.encode=function(t,e){return P[t](e)},r.prototype.init=function(t,e){if(this.v=[],e){var i=e.preset;t=e}else t||(t=I),i=t.preset;if(e={},y(t)?(e=A[t],t={}):i&&(e=A[i]),i=t.worker)if("undefined"==typeof Worker)t.worker=!1,this.m=null;else{var o=parseInt(i,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(o);for(var s=0;s<o;s++)this.m[s]=E(this.id,s,t,n.bind(this))}if(this.f=t.tokenize||e.f||this.f||I.f,this.split=w(i=t.split)?this.split||I.split:y(i)?a(i):i,this.D=t.rtl||this.D||I.D,this.async="undefined"==typeof Promise||w(i=t.async)?this.async||I.async:i,this.g=w(i=t.worker)?this.g||I.g:i,this.threshold=w(i=t.threshold)?e.threshold||this.threshold||I.threshold:i,this.b=w(i=t.resolution)?i=e.b||this.b||I.b:i,i<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||w(i=t.depth)?e.depth||this.depth||I.depth:i,this.w=(i=w(i=t.encode)?e.encode||I.encode:i)&&P[i]&&P[i].bind(P)||(b(i)?i:this.w||!1),(i=t.matcher)&&this.addMatcher(i),i=(e=t.lang)||t.filter){if(y(i)&&(i=C[i]),m(i)){o=this.w,s=j();for(var c=0;c<i.length;c++){var l=o?o(i[c]):i[c];s[l]=1}i=s}this.filter=i}if(i=e||t.stemmer){var u;for(u in e=y(i)?M[i]:i,o=this.w,s=[],e)e.hasOwnProperty(u)&&(c=o?o(u):u,s.push(a(c+"($|\\W)"),o?o(e[u]):e[u]));this.stemmer=u=s}if(this.a=s=(i=t.doc)?function t(e){var r=j();for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];m(i)?r[n]=i.slice(0):x(i)?r[n]=t(i):r[n]=i}return r}(i):this.a||I.a,this.i=k(this.b-(this.threshold||0)),this.h=j(),this.c=j(),s){if(this.l=j(),t.doc=null,u=s.index={},e=s.keys=[],o=s.field,c=s.tag,l=s.store,m(s.id)||(s.id=s.id.split(":")),l){var h=j();if(y(l))h[l]=1;else if(m(l))for(var f=0;f<l.length;f++)h[l[f]]=1;else x(l)&&(h=l);s.store=h}if(c){if(this.G=j(),l=j(),o)if(y(o))l[o]=t;else if(m(o))for(h=0;h<o.length;h++)l[o[h]]=t;else x(o)&&(l=o);for(m(c)||(s.tag=c=[c]),o=0;o<c.length;o++)this.G[c[o]]=j();this.I=c,o=l}var d;if(o)for(m(o)||(x(o)?(d=o,s.field=o=Object.keys(o)):s.field=o=[o]),s=0;s<o.length;s++)m(c=o[s])||(d&&(t=d[c]),e[s]=c,o[s]=c.split(":")),u[c]=new r(t);t.doc=i}return this.B=!0,this.j=!!(this.cache=i=w(i=t.cache)?this.cache||I.cache:i)&&new U(i),this},r.prototype.encode=function(t){return t&&(F.length&&(t=c(t,F)),this.v.length&&(t=c(t,this.v)),this.w&&(t=this.w(t)),this.stemmer&&(t=c(t,this.stemmer))),t},r.prototype.addMatcher=function(t){var e=this.v;for(var r in t)t.hasOwnProperty(r)&&e.push(a(r),t[r]);return this},r.prototype.add=function(t,e,r,n,o){if(this.a&&x(t))return this.A("add",t,e);if(e&&y(e)&&(t||0===t)){var s="@"+t;if(this.c[s]&&!n)return this.update(t,e);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:t,content:e}),this.c[s]=""+this.C,r&&r(),this;if(!o){if(this.async&&"function"!=typeof importScripts){var a=this;return s=new Promise((function(r){setTimeout((function(){a.add(t,e,null,n,!0),a=null,r()}))})),r?(s.then(r),this):s}if(r)return this.add(t,e,null,n,!0),r(),this}if(!(e=this.encode(e)).length)return this;o=b(r=this.f)?r(e):e.split(this.split),this.filter&&(o=i(o,this.filter));var c=j();c._ctx=j();for(var u=o.length,h=this.threshold,f=this.depth,d=this.b,p=this.i,g=this.D,v=0;v<u;v++){var m=o[v];if(m){var w=m.length,O=(g?v+1:u-v)/u,E="";switch(r){case"reverse":case"both":for(var S=w;--S;)l(p,c,E=m[S]+E,t,g?1:(w-S)/w,O,h,d-1);E="";case"forward":for(S=0;S<w;S++)l(p,c,E+=m[S],t,g?(S+1)/w:1,O,h,d-1);break;case"full":for(S=0;S<w;S++)for(var I=(g?S+1:w-S)/w,A=w;A>S;A--)l(p,c,E=m.substring(S,A),t,I,O,h,d-1);break;default:if(w=l(p,c,m,t,1,O,h,d-1),f&&1<u&&w>=h)for(w=c._ctx[m]||(c._ctx[m]=j()),m=this.h[m]||(this.h[m]=k(d-(h||0))),0>(O=v-f)&&(O=0),(E=v+f+1)>u&&(E=u);O<E;O++)O!==v&&l(m,w,o[O],t,0,d-(O<v?v-O:O-v),h,d-1)}}}this.c[s]=1,this.B=!1}return this},r.prototype.A=function(t,e,r){if(m(e)){var n=e.length;if(n--){for(var i=0;i<n;i++)this.A(t,e[i]);return this.A(t,e[n],r)}}else{var o,s=this.a.index,a=this.a.keys,c=this.a.tag;i=this.a.store;var l=this.a.id;n=e;for(var u=0;u<l.length;u++)n=n[l[u]];if("remove"===t&&(delete this.l[n],l=a.length,l--)){for(e=0;e<l;e++)s[a[e]].remove(n);return s[a[l]].remove(n,r)}if(c){for(o=0;o<c.length;o++){var h=c[o],f=e;for(l=h.split(":"),u=0;u<l.length;u++)f=f[l[u]];f="@"+f}o=(o=this.G[h])[f]||(o[f]=[])}for(var d=0,p=(l=this.a.field).length;d<p;d++){for(h=l[d],c=e,f=0;f<h.length;f++)c=c[h[f]];h=s[a[d]],f="add"===t?h.add:h.update,d===p-1?f.call(h,n,c,r):f.call(h,n,c)}if(i){for(r=Object.keys(i),t=j(),s=0;s<r.length;s++)if(i[a=r[s]]){a=a.split(":");var g=void 0,v=void 0;for(l=0;l<a.length;l++)g=(g||e)[c=a[l]],v=(v||t)[c]=g}e=t}o&&(o[o.length]=e),this.l[n]=e}return this},r.prototype.update=function(t,e,r){return this.a&&x(t)?this.A("update",t,e):(this.c["@"+t]&&y(e)&&(this.remove(t),this.add(t,e,r,!0)),this)},r.prototype.remove=function(t,e,r){if(this.a&&x(t))return this.A("remove",t,e);var n="@"+t;if(this.c[n]){if(this.g)return this.m[this.c[n]].postMessage({remove:!0,id:t}),delete this.c[n],e&&e(),this;if(!r){if(this.async&&"function"!=typeof importScripts){var i=this;return n=new Promise((function(e){setTimeout((function(){i.remove(t,null,!0),i=null,e()}))})),e?(n.then(e),this):n}if(e)return this.remove(t,null,!0),e(),this}for(e=0;e<this.b-(this.threshold||0);e++)u(this.i[e],t);this.depth&&u(this.h,t),delete this.c[n],this.B=!1}return this},r.prototype.search=function(t,e,r,n){if(x(e)){if(m(e))for(var s=0;s<e.length;s++)e[s].query=t;else e.query=t;t=e,e=1e3}else e&&b(e)?(r=e,e=1e3):e||0===e||(e=1e3);if(!this.g){var a=[],c=t;if(x(t)&&!m(t)){r||(r=t.callback)&&(c.callback=null);var l=t.sort,u=t.page;e=t.limit,U=t.threshold;var h=t.suggest;t=t.query}if(this.a){U=this.a.index;var d,p,g=c.where,w=c.bool||"or",k=c.field,O=w;if(k)m(k)||(k=[k]);else if(m(c)){var E=c;k=[],O=[];for(var S=0;S<c.length;S++)s=(n=c[S]).bool||w,k[S]=n.field,O[S]=s,"not"===s?d=!0:"and"===s&&(p=!0)}else k=this.a.keys;for(w=k.length,S=0;S<w;S++)E&&(c=E[S]),u&&!y(c)&&(c.page=null,c.limit=0),a[S]=U[k[S]].search(c,0);if(r)return r(o.call(this,t,O,a,l,e,h,g,u,p,d));if(this.async){var I=this;return new Promise((function(r){Promise.all(a).then((function(n){r(o.call(I,t,O,n,l,e,h,g,u,p,d))}))}))}return o.call(this,t,O,a,l,e,h,g,u,p,d)}if(U||(U=this.threshold||0),!n){if(this.async&&"function"!=typeof importScripts){var A=this;return U=new Promise((function(t){setTimeout((function(){t(A.search(c,e,null,!0)),A=null}))})),r?(U.then(r),this):U}if(r)return r(this.search(c,e,null,!0)),this}if(!t||!y(t))return a;if(c=t,this.cache)if(this.B){if(r=this.j.get(t))return r}else this.j.clear(),this.B=!0;if(!(c=this.encode(c)).length)return a;r=b(r=this.f)?r(c):c.split(this.split),this.filter&&(r=i(r,this.filter)),E=r.length,n=!0,s=[];var F=j(),_=0;if(1<E&&(this.depth&&"strict"===this.f?w=!0:r.sort(f)),!w||(S=this.h))for(var C=this.b;_<E;_++){var M=r[_];if(M){if(w){if(!k)if(S[M])k=M,F[M]=1;else if(!h)return a;if(h&&_===E-1&&!s.length)w=!1,F[M=k||M]=0;else if(!k)continue}if(!F[M]){var z=[],B=!1,L=0,R=w?S[k]:this.i;if(R)for(var N=void 0,P=0;P<C-U;P++)(N=R[P]&&R[P][M])&&(z[L++]=N,B=!0);if(B)k=M,s[s.length]=1<L?z.concat.apply([],z):z[0];else if(!h){n=!1;break}F[M]=1}}}else n=!1;return n&&(a=v(s,e,u,h)),this.cache&&this.j.set(t,a),a}this.F=r,this.u=0,this.o=[];for(var U=0;U<this.g;U++)this.m[U].postMessage({search:!0,limit:e,content:t})},r.prototype.find=function(t,e){return this.where(t,e,1)[0]||null},r.prototype.where=function(t,e,r,n){var i,o,s,a=this.l,c=[],l=0;if(x(t)){r||(r=e);var u=Object.keys(t),h=u.length;if(i=!1,1===h&&"id"===u[0])return[a[t.id]];if((o=this.I)&&!n)for(var f=0;f<o.length;f++){var d=o[f],p=t[d];if(!w(p)){if(s=this.G[d]["@"+p],0==--h)return s;u.splice(u.indexOf(d),1),delete t[d];break}}for(o=Array(h),f=0;f<h;f++)o[f]=u[f].split(":")}else{if(b(t)){for(r=(e=n||Object.keys(a)).length,u=0;u<r;u++)t(h=a[e[u]])&&(c[l++]=h);return c}if(w(e))return[a[t]];if("id"===t)return[a[e]];u=[t],h=1,o=[t.split(":")],i=!0}for(f=(n=s||n||Object.keys(a)).length,d=0;d<f;d++){p=s?n[d]:a[n[d]];for(var g=!0,v=0;v<h;v++){i||(e=t[u[v]]);var y=o[v],m=y.length,k=p;if(1<m)for(var j=0;j<m;j++)k=k[y[j]];else k=k[y[0]];if(k!==e){g=!1;break}}if(g&&(c[l++]=p,r&&l===r))break}return c},r.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:F.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(var t=0;t<this.g;t++)this.m[t].postMessage({info:!0,id:this.id})},r.prototype.clear=function(){return this.destroy().init()},r.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){for(var t=this.a.keys,e=0;e<t.length;e++)this.a.index[t[e]].destroy();this.a=this.l=null}return this},r.prototype.export=function(t){var e=!t||w(t.serialize)||t.serialize;if(this.a){var r=!t||w(t.doc)||t.doc,n=!t||w(t.index)||t.index;t=[];var i=0;if(n)for(n=this.a.keys;i<n.length;i++){var o=this.a.index[n[i]];t[i]=[o.i,o.h,Object.keys(o.c)]}r&&(t[i]=this.l)}else t=[this.i,this.h,Object.keys(this.c)];return e&&(t=JSON.stringify(t)),t},r.prototype.import=function(t,e){(!e||w(e.serialize)||e.serialize)&&(t=JSON.parse(t));var r=j();if(this.a){var n=!e||w(e.doc)||e.doc,i=0;if(!e||w(e.index)||e.index){for(var o=(e=this.a.keys).length,s=t[0][2];i<s.length;i++)r[s[i]]=1;for(i=0;i<o;i++){s=this.a.index[e[i]];var a=t[i];a&&(s.i=a[0],s.h=a[1],s.c=r)}}n&&(this.l=x(n)?n:t[i])}else{for(n=t[2],i=0;i<n.length;i++)r[n[i]]=1;this.i=t[0],this.h=t[1],this.c=r}};var z,B,L,R,N=(B=a("\\s+"),L=a("[^a-z0-9 ]"),R=[a("[-/]")," ",L,"",B," "],function(t){return h(c(t.toLowerCase(),R))}),P={icase:function(t){return t.toLowerCase()},simple:function(){var t=a("\\s+"),e=a("[^a-z0-9 ]"),r=a("[-/]"),n=[a("[àáâãäå]"),"a",a("[èéêë]"),"e",a("[ìíîï]"),"i",a("[òóôõöő]"),"o",a("[ùúûüű]"),"u",a("[ýŷÿ]"),"y",a("ñ"),"n",a("[çc]"),"k",a("ß"),"s",a(" & ")," and ",r," ",e,"",t," "];return function(t){return" "===(t=c(t.toLowerCase(),n))?"":t}}(),advanced:function(){var t=a("ae"),e=a("ai"),r=a("ay"),n=a("ey"),i=a("oe"),o=a("ue"),s=a("ie"),l=a("sz"),u=a("zs"),f=a("ck"),d=a("cc"),p=[t,"a",e,"ei",r,"ei",n,"ei",i,"o",o,"u",s,"i",l,"s",u,"s",a("sh"),"s",f,"k",d,"k",a("th"),"t",a("dt"),"t",a("ph"),"f",a("pf"),"f",a("ou"),"o",a("uo"),"u"];return function(t,e){return t?(2<(t=this.simple(t)).length&&(t=c(t,p)),e||1<t.length&&(t=h(t)),t):t}}(),extra:(z=[a("p"),"b",a("z"),"s",a("[cgq]"),"k",a("n"),"m",a("d"),"t",a("[vw]"),"f",a("[aeiouy]"),""],function(t){if(!t)return t;if(1<(t=this.advanced(t,!0)).length){t=t.split(" ");for(var e=0;e<t.length;e++){var r=t[e];1<r.length&&(t[e]=r[0]+c(r.substring(1),z))}t=h(t=t.join(" "))}return t}),balance:N},U=function(){function t(t){this.clear(),this.H=!0!==t&&t}return t.prototype.clear=function(){this.cache=j(),this.count=j(),this.index=j(),this.s=[]},t.prototype.set=function(t,e){if(this.H&&w(this.cache[t])){var r=this.s.length;if(r===this.H){r--;var n=this.s[r];delete this.cache[n],delete this.count[n],delete this.index[n]}this.index[t]=r,this.s[r]=t,this.count[t]=-1,this.cache[t]=e,this.get(t)}else this.cache[t]=e},t.prototype.get=function(t){var e=this.cache[t];if(this.H&&e){var r=++this.count[t],n=this.index,i=n[t];if(0<i){for(var o=this.s,s=i;this.count[o[--i]]<=r&&-1!==i;);if(++i!==s){for(r=s;r>i;r--)s=o[r-1],o[r]=s,n[s]=r;o[i]=t,n[t]=i}}}return e},t}();return r}((n={},i="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL,function(t,e,r,o,s){return r=i?URL.createObjectURL(new Blob(["("+r.toString()+")()"],{type:"text/javascript"})):t+".min.js",n[t+="-"+e]||(n[t]=[]),n[t][s]=new Worker(r),n[t][s].onmessage=o,n[t][s]})),this)},"8jRI":function(t,e,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),i=new RegExp("(%[a-f0-9]{2})+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(i){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function s(t){try{return decodeURIComponent(t)}catch(i){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=o(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var o=s(n[0]);o!==n[0]&&(r[n[0]]=o)}n=i.exec(t)}r["%C2"]="�";for(var a=Object.keys(r),c=0;c<a.length;c++){var l=a[c];t=t.replace(new RegExp(l,"g"),r[l])}return t}(t)}}},"8yz6":function(t,e,r){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},J4zp:function(t,e,r){var n=r("wTVA"),i=r("m0LI"),o=r("ZhPi"),s=r("wkBT");t.exports=function(t,e){return n(t)||i(t,e)||o(t,e)||s()},t.exports.__esModule=!0,t.exports.default=t.exports},RIqP:function(t,e,r){var n=r("Ijbi"),i=r("EbDI"),o=r("ZhPi"),s=r("Bnag");t.exports=function(t){return n(t)||i(t)||o(t)||s()},t.exports.__esModule=!0,t.exports.default=t.exports},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},ZFOp:function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},c0go:function(t,e,r){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),i=Array.isArray(e),o=0;o<n.length;o++){var s=n[o],a=t[s];(i?-1!==e.indexOf(s):e(s,a,t))&&(r[s]=a)}return r}},"cr+I":function(t,e,r){"use strict";var n=r("J4zp"),i=r("RIqP");function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r("ToJy"),r("E9XD");var a=r("ZFOp"),c=r("8jRI"),l=r("8yz6"),u=r("c0go");function h(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(t,e){return e.encode?e.strict?a(t):encodeURIComponent(t):t}function d(t,e){return e.decode?c(t):t}function p(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function g(t){var e=(t=p(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function v(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function y(t,e){h((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var i="string"==typeof r&&r.includes(t.arrayFormatSeparator),o="string"==typeof r&&!i&&d(r,t).includes(t.arrayFormatSeparator);r=o?d(r,t):r;var s=i||o?r.split(t.arrayFormatSeparator).map((function(e){return d(e,t)})):null===r?r:d(r,t);n[e]=s};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),i=Object.create(null);if("string"!=typeof t)return i;if(!(t=t.trim().replace(/^[?#&]/,"")))return i;var s,a=o(t.split("&"));try{for(a.s();!(s=a.n()).done;){var c=s.value;if(""!==c){var u=l(e.decode?c.replace(/\+/g," "):c,"="),f=n(u,2),p=f[0],g=f[1];g=void 0===g?null:["comma","separator"].includes(e.arrayFormat)?g:d(g,e),r(d(p,e),g,i)}}}catch(O){a.e(O)}finally{a.f()}for(var y=0,m=Object.keys(i);y<m.length;y++){var b=m[y],x=i[b];if("object"==typeof x&&null!==x)for(var w=0,k=Object.keys(x);w<k.length;w++){var j=k[w];x[j]=v(x[j],e)}else i[b]=v(x,e)}return!1===e.sort?i:(!0===e.sort?Object.keys(i).sort():Object.keys(i).sort(e.sort)).reduce((function(t,e){var r=i[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(r):t[e]=r,t}),Object.create(null))}e.extract=g,e.parse=y,e.stringify=function(t,e){if(!t)return"";h((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[f(e,t),"[",o,"]"].join("")]:[[f(e,t),"[",f(o,t),"]=",f(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[f(e,t),"[]"].join("")]:[[f(e,t),"[]=",f(n,t)].join("")])}};case"comma":case"separator":return function(e){return function(r,n){return null==n||0===n.length?r:0===r.length?[[f(e,t),"=",f(n,t)].join("")]:[[r,f(n,t)].join(t.arrayFormatSeparator)]}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[f(e,t)]:[[f(e,t),"=",f(n,t)].join("")])}}}}(e),o={},s=0,a=Object.keys(t);s<a.length;s++){var c=a[s];r(c)||(o[c]=t[c])}var l=Object.keys(o);return!1!==e.sort&&l.sort(e.sort),l.map((function(r){var i=t[r];return void 0===i?"":null===i?f(r,e):Array.isArray(i)?i.reduce(n(r),[]).join("&"):f(r,e)+"="+f(i,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=l(t,"#"),i=n(r,2),o=i[0],s=i[1];return Object.assign({url:o.split("?")[0]||"",query:y(g(t),e)},e&&e.parseFragmentIdentifier&&s?{fragmentIdentifier:d(s,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign({encode:!0,strict:!0},r);var n=p(t.url).split("?")[0]||"",i=e.extract(t.url),o=e.parse(i,{sort:!1}),s=Object.assign(o,t.query),a=e.stringify(s,r);a&&(a="?".concat(a));var c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(f(t.fragmentIdentifier,r))),"".concat(n).concat(a).concat(c)},e.pick=function(t,r,n){n=Object.assign({parseFragmentIdentifier:!0},n);var i=e.parseUrl(t,n),o=i.url,s=i.query,a=i.fragmentIdentifier;return e.stringifyUrl({url:o,query:u(s,r),fragmentIdentifier:a},n)},e.exclude=function(t,r,n){var i=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,i,n)}},m0LI:function(t,e){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o=[],s=!0,a=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}},t.exports.__esModule=!0,t.exports.default=t.exports},vx99:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),i=r.n(n),o=r("6Gk8"),s=r("Bl7J"),a=r("vrFN"),c=r("Wbzz"),l=r("vOnD"),u=r("7ZuR"),h=r.n(u);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=new Error("FlexSearch index is required. Check that your index exists and is valid."),p=new Error("FlexSearch store is required. Check that your store exists and is valid."),g=r("cr+I"),v=r("p3AD"),y=l.a.div.withConfig({displayName:"searchPosts__SearchBar",componentId:"sc-145q45i-0"})(["display:flex;border:1px solid #dfe1e5;border-radius:10px;margin:0 auto ",';width:100%;height:3rem;background:#fdfdfd;svg{margin:auto 1rem;height:20px;width:20px;color:#9aa0a6;fill:#9aa0a6;}input{display:flex;flex:100%;height:100%;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;background-color:transparent;border:none;margin:0;padding:0;padding-right:0.5rem;color:rgb(55,53,47);word-wrap:break-word;outline:none;}'],Object(v.a)(1)),m=function(t){var e=t.results;return e.length>0?e.map((function(t){var e=t.date,r=t.title||t.slug,n=t.description,o=t.excerpt,s=t.slug;return i.a.createElement("div",{key:s},i.a.createElement("h3",{style:{marginBottom:Object(v.a)(1/4)}},i.a.createElement(c.Link,{style:{boxShadow:"none"},to:"/blog"+s},r)),i.a.createElement("small",null,e),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:n||o}}))})):i.a.createElement("p",{style:{textAlign:"center"}},"Sorry, couldn't find any posts matching this search.")},b=function(t){var e=t.posts;return i.a.createElement("div",{style:{margin:"20px 0 40px"}},e.map((function(t){var e=t.node,r=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(v.a)(1/4)}},i.a.createElement(c.Link,{style:{boxShadow:"none"},to:"/blog"+e.fields.slug},r)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))})))},x=function(t){var e=t.posts,r=t.localSearchBlog,o=t.location,s=t.navigate,a=g.parse(o.search).search,c=Object(n.useState)(a||""),l=c[0],u=c[1],v=function(t,e,r,i){var o=f(Object(n.useState)(null),2),s=o[0],a=o[1];return Object(n.useEffect)((function(){if(!e)throw d;if(!r)throw p}),[e,r]),Object(n.useEffect)((function(){if(e instanceof h.a)a(e);else{var t=h.a.create();t.import(e),a(t)}}),[e]),Object(n.useMemo)((function(){return t&&s&&r?s.search(t,i).map((function(t){return r[t]})):[]}),[t,s,r])}(l,r.index,JSON.parse(r.store));return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,null,i.a.createElement("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})),i.a.createElement("input",{id:"search",type:"search",placeholder:"Search all posts",value:l,onChange:function(t){s(t.target.value?"/blog/?search="+t.target.value:"/blog/"),u(t.target.value)}})),l?i.a.createElement(m,{results:v}):i.a.createElement(b,{posts:e}))};e.default=function(t){var e=t.data,r=t.navigate,n=t.location,c=e.site.siteMetadata.blogTitle,l=e.allMdx.edges,u=e.localSearchBlog;return i.a.createElement(s.a,{location:n,title:c},i.a.createElement(a.a,{title:"All posts"}),i.a.createElement(o.a,null),i.a.createElement(x,{posts:l,localSearchBlog:u,navigate:r,location:n}))}},wTVA:function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},wkBT:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---src-pages-blog-js-2b546478ef5313bf320f.js.map