(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(t,e,n){},121:function(t,e,n){"use strict";var r=n(162)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},122:function(t,e,n){"use strict";var r=n(163),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},123:function(t,e,n){"use strict";n(164);var r=n(29),i=n(15),o=n(13),c=n(27),a=n(11),u=n(92),l=a("species"),s=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=a(t),h=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),v=h?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!e}):void 0;if(!h||!v||"replace"===t&&!s||"split"===t&&!f){var d=/./[p],g=n(c,p,""[t],function(t,e,n,r,i){return e.exec===u?h&&!i?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),x=g[0],b=g[1];r(String.prototype,t,x),i(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},157:function(t,e,n){"use strict";var r=n(20);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},160:function(t,e,n){"use strict";var r=n(65),i=n(20),o=n(161),c=n(121),a=n(37),u=n(122),l=n(92),s=n(13),f=Math.min,p=[].push,h=!s(function(){RegExp(4294967295,"y")});n(123)("split",2,function(t,e,n,s){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);for(var o,c,a,u=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,s+"g");(o=l.call(v,i))&&!((c=v.lastIndex)>f&&(u.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&p.apply(u,o.slice(1)),a=o[0].length,f=c,u.length>=h));)v.lastIndex===o.index&&v.lastIndex++;return f===i.length?!a&&v.test("")||u.push(""):u.push(i.slice(f)),u.length>h?u.slice(0,h):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):v.call(String(i),n,r)},function(t,e){var r=s(v,t,this,e,v!==n);if(r.done)return r.value;var l=i(t),p=String(this),d=o(l,RegExp),g=l.unicode,x=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),b=new d(h?l:"^(?:"+l.source+")",x),m=void 0===e?4294967295:e>>>0;if(0===m)return[];if(0===p.length)return null===u(b,p)?[p]:[];for(var y=0,_=0,E=[];_<p.length;){b.lastIndex=h?_:0;var k,w=u(b,h?p:p.slice(_));if(null===w||(k=f(a(b.lastIndex+(h?0:_)),p.length))===y)_=c(p,_,g);else{if(E.push(p.slice(y,_)),E.length===m)return E;for(var C=1;C<=w.length-1;C++)if(E.push(w[C]),E.length===m)return E;_=y=k}}return E.push(p.slice(y)),E}]})},161:function(t,e,n){var r=n(20),i=n(30),o=n(11)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[o])?e:i(n)}},162:function(t,e,n){var r=n(58),i=n(27);t.exports=function(t){return function(e,n){var o,c,a=String(i(e)),u=r(n),l=a.length;return u<0||u>=l?t?"":void 0:(o=a.charCodeAt(u))<55296||o>56319||u+1===l||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):o:t?a.slice(u,u+2):c-56320+(o-55296<<10)+65536}}},163:function(t,e,n){var r=n(35),i=n(11)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},164:function(t,e,n){"use strict";var r=n(92);n(10)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},187:function(t,e,n){"use strict";var r=n(105);n.n(r).a},188:function(t,e,n){},189:function(t,e,n){},199:function(t,e,n){"use strict";n.r(e);n(45),n(51),n(52);var r={methods:{isSelected:function(t){return this.$route.fullPath===t}},computed:{chapters:function(){var t=this.book,e=this.$site.pages.filter(function(e){return e.path.indexOf("/books/".concat(t,"/"))>=0});return e=e.sort(function(t,e){return t.frontmatter.chapter>e.frontmatter.chapter?1:t.frontmatter.chapter<e.frontmatter.chapter?-1:0}),console.log("sorting..."),e}},props:["book"]},i=(n(187),n(0)),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-detail"},t._l(t.chapters,function(e){return n("div",[n("div",{class:{depth1:1==e.frontmatter.depth,depth2:2==e.frontmatter.depth,selected:t.isSelected(e.path)}},[e.frontmatter.depth>1?n("a",{staticClass:"title",class:{selected:t.isSelected(e.path)},attrs:{href:e.path}},[t._v(t._s(e.title))]):t._e(),t._v(" "),1==e.frontmatter.depth?n("span",[t._v(t._s(e.title))]):t._e()]),t._v(" "),n("div",[t._v("\n      "+t._s(e.description)+"\n    ")])])}),0)},[],!1,null,"d992904e",null);e.default=o.exports},236:function(t,e,n){t.exports=n(237)},237:function(t,e,n){n(131),n(72),t.exports=n(238)},238:function(t,e,n){var r=n(39),i=n(129);t.exports=n(12).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},239:function(t,e,n){"use strict";var r=n(188);n.n(r).a},240:function(t,e,n){"use strict";var r=n(189);n.n(r).a},249:function(t,e,n){"use strict";n.r(e);n(160);var r=n(124),i=n.n(r);var o=n(236),c=n.n(o);function a(t,e){return function(t){if(i()(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=c()(t);!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u={components:[n(199).default],data:function(){return{book:a(this.$route.path.split("/"),3)[2]}},computed:{url:function(){var t={url:"/books/".concat(this.book),title:"start page"};return this&&this.$frontmatter.nextUrl?this.$frontmatter.nextUrl:t}}},l=(n(239),n(240),n(0)),s=Object(l.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-layout"},[n("div",{staticClass:"left"},[n("BookDetail",{attrs:{book:t.book}})],1),t._v(" "),n("div",{staticClass:"right theme-default-content"},[n("div",{staticClass:"navigation",class:{hide:"react"!==t.book}},[n("a",{attrs:{href:t.url.url}},[t._v(" "+t._s(t.url.title)+" >")])]),t._v(" "),n("Content"),t._v(" "),n("div",{staticClass:"navigation",class:{hide:"react"!==t.book}},[n("a",{attrs:{href:t.url.url}},[t._v(" "+t._s(t.url.title)+" >")])])],1)])},[],!1,null,"4dacc20a",null);e.default=s.exports},45:function(t,e,n){"use strict";var r=n(10),i=n(30),o=n(18),c=n(13),a=[].sort,u=[1,2,3];r(r.P+r.F*(c(function(){u.sort(void 0)})||!c(function(){u.sort(null)})||!n(17)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},65:function(t,e,n){var r=n(21),i=n(35),o=n(11)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},92:function(t,e,n){"use strict";var r,i,o=n(157),c=RegExp.prototype.exec,a=String.prototype.replace,u=c,l=(r=/a/,i=/b*/g,c.call(r,"a"),c.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),s=void 0!==/()??/.exec("")[1];(l||s)&&(u=function(t){var e,n,r,i,u=this;return s&&(n=new RegExp("^"+u.source+"$(?!\\s)",o.call(u))),l&&(e=u.lastIndex),r=c.call(u,t),l&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),s&&r&&r.length>1&&a.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=u}}]);