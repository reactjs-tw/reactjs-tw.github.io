webpackJsonp([0x67ef26645b2a,60335399758886],{72:function(e,t){e.exports={layoutContext:{}}},137:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(2),l=(r(i),n(162)),s=r(l),c=n(72),u=r(c);t.default=function(e){return o.createElement(s.default,a({},e,u.default))},e.exports=t.default}).call(t,n(3))},130:function(e,t,n){e.exports="function"==typeof Array.from?Array.from:n(131)},131:function(e,t){e.exports=function(){var e=function(e){return"function"==typeof e},t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},n=Math.pow(2,53)-1,o=function(e){var o=t(e);return Math.min(Math.max(o,0),n)},r=function(e){if(null!=e){if(["string","number","boolean","symbol"].indexOf(typeof e)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in e)return Symbol.iterator;if("@@iterator"in e)return"@@iterator"}},a=function(t,n){if(null!=t&&null!=n){var o=t[n];if(null==o)return;if(!e(o))throw new TypeError(o+" is not a function");return o}},i=function(e){var t=e.next(),n=Boolean(t.done);return!n&&t};return function(t){"use strict";var n,l=this,s=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof s){if(!e(s))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(n=arguments[2])}var c,u,d=a(t,r(t));if(void 0!==d){c=e(l)?Object(new l):[];var f=d.call(t);if(null==f)throw new TypeError("Array.from requires an array-like or iterable object");u=0;for(var p,m;;){if(p=i(f),!p)return c.length=u,c;m=p.value,s?c[u]=s.call(n,m,u):c[u]=m,u++}}else{var g=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var h=o(g.length);c=e(l)?Object(new l(h)):new Array(h),u=0;for(var b;u<h;)b=g[u],s?c[u]=s.call(n,b,u):c[u]=b,u++;c.length=h}return c}}()},619:function(e,t,n){"use strict";var o=n(45);(0,o.insertRule)("html {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}"),(0,o.insertRule)("body {\n  margin: 0;\n}"),(0,o.insertRule)("article,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}"),(0,o.insertRule)("h1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}"),(0,o.insertRule)("figcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}"),(0,o.insertRule)("figure {\n  margin: 1em 40px;\n}"),(0,o.insertRule)("hr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}"),(0,o.insertRule)("pre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}"),(0,o.insertRule)("a {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}"),(0,o.insertRule)("a:active,\na:hover {\n  outline-width: 0;\n}"),(0,o.insertRule)("abbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}"),(0,o.insertRule)("b,\nstrong {\n  font-weight: inherit;\n}"),(0,o.insertRule)("b,\nstrong {\n  font-weight: bolder;\n}"),(0,o.insertRule)("code,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}"),(0,o.insertRule)("dfn {\n  font-style: italic;\n}"),(0,o.insertRule)("mark {\n  background-color: #ff0;\n  color: #000;\n}"),(0,o.insertRule)("small {\n  font-size: 80%;\n}"),(0,o.insertRule)("sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}"),(0,o.insertRule)("sub {\n  bottom: -0.25em;\n}"),(0,o.insertRule)("sup {\n  top: -0.5em;\n}"),(0,o.insertRule)("audio,\nvideo {\n  display: inline-block;\n}"),(0,o.insertRule)("audio:not([controls]) {\n  display: none;\n  height: 0;\n}"),(0,o.insertRule)("img {\n  border-style: none;\n}"),(0,o.insertRule)("svg:not(:root) {\n  overflow: hidden;\n}"),(0,o.insertRule)("button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}"),(0,o.insertRule)("button,\ninput { /* 1 */\n  overflow: visible;\n}"),(0,o.insertRule)("button,\nselect { /* 1 */\n  text-transform: none;\n}"),(0,o.insertRule)('button,\nhtml [type="button"], /* 1 */\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; /* 2 */\n}'),(0,o.insertRule)('button::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}'),(0,o.insertRule)('button:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}'),(0,o.insertRule)("fieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}"),(0,o.insertRule)("legend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}"),(0,o.insertRule)("progress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}"),(0,o.insertRule)("textarea {\n  overflow: auto;\n}"),(0,o.insertRule)('[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}'),(0,o.insertRule)('[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}'),(0,o.insertRule)('[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}'),(0,o.insertRule)('[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}'),(0,o.insertRule)("::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}"),(0,o.insertRule)("details, /* 1 */\nmenu {\n  display: block;\n}"),(0,o.insertRule)("summary {\n  display: list-item;\n}"),(0,o.insertRule)("canvas {\n  display: inline-block;\n}"),(0,o.insertRule)("template {\n  display: none;\n}"),(0,o.insertRule)("[hidden] {\n  display: none;\n}")},621:function(e,t,n){e.exports=n(619)},1049:function(e,t){String.prototype.includes||!function(){"use strict";var e={}.toString,t=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch(e){}return n}(),n="".indexOf,o=function(t){if(null==this)throw TypeError();var o=String(this);if(t&&"[object RegExp]"==e.call(t))throw TypeError();var r=o.length,a=String(t),i=a.length,l=arguments.length>1?arguments[1]:void 0,s=l?Number(l):0;s!=s&&(s=0);var c=Math.min(Math.max(s,0),r);return!(i+c>r)&&n.call(o,a,s)!=-1};t?t(String.prototype,"includes",{value:o,configurable:!0,writable:!0}):String.prototype.includes=o}()},1050:function(e,t){String.prototype.repeat||!function(){"use strict";var e=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch(e){}return n}(),t=function(e){if(null==this)throw TypeError();var t=String(this),n=e?Number(e):0;if(n!=n&&(n=0),n<0||n==1/0)throw RangeError();for(var o="";n;)n%2==1&&(o+=t),n>1&&(t+=t),n>>=1;return o};e?e(String.prototype,"repeat",{value:t,configurable:!0,writable:!0}):String.prototype.repeat=t}()},149:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),i=(r(a),n(4)),l=n(52),s=r(l),c=function(e){var t=e.children,n=e.href,r=e.target,a=e.rel;return o.createElement("a",{css:{lineHeight:2,":hover":{color:i.colors.brand}},href:n,target:r,rel:a},t,o.createElement(s.default,{cssProps:{verticalAlign:-2,display:"inline-block",marginLeft:5,color:i.colors.subtle}}))};t.default=c,e.exports=t.default}).call(t,n(3))},150:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(9),i=r(a),l=n(149),s=r(l),c=n(151),u=r(c),d=n(152),f=r(d),p=n(36),m=r(p),g=n(2),h=(r(g),n(4)),b=n(24),y=n(1054),w=r(y),v=function(e){var t,n,r,a,l=e.layoutHasSidebar,c=void 0!==l&&l;return o.createElement("footer",{css:(t={backgroundColor:h.colors.darker,color:h.colors.white,paddingTop:10,paddingBottom:50},t[h.media.size("sidebarFixed")]={paddingTop:40},t)},o.createElement(i.default,null,o.createElement("div",{css:(n={display:"flex",flexDirection:"row",flexWrap:"wrap"},n[h.media.between("small","medium")]={paddingRight:c?240:null},n[h.media.between("large","largerSidebar")]={paddingRight:c?280:null},n[h.media.between("largerSidebar","sidebarFixed",!0)]={paddingRight:c?380:null},n)},o.createElement("div",{css:(r={flexWrap:"wrap",display:"flex"},r[h.media.lessThan("large")]={width:"100%"},r[h.media.greaterThan("xlarge")]={width:"calc(100% / 3 * 2)",paddingLeft:40},r)},o.createElement(f.default,{layoutHasSidebar:c},o.createElement(m.default,{onDark:!0},"Docs"),b.sectionListDocs.map(function(e){var t=e.items[0];return o.createElement(u.default,{to:"/docs/"+t.id+".html",key:e.title},e.title)})),o.createElement(f.default,{layoutHasSidebar:c},o.createElement(m.default,{onDark:!0},"Channels"),o.createElement(s.default,{href:"https://github.com/facebook/react",target:"_blank",rel:"noopener"},"GitHub"),o.createElement(s.default,{href:"http://stackoverflow.com/questions/tagged/reactjs",target:"_blank",rel:"noopener"},"Stack Overflow"),o.createElement(s.default,{href:"https://discuss.reactjs.org",target:"_blank",rel:"noopener"},"Discussion Forum"),o.createElement(s.default,{href:"https://discord.gg/0ZcbPKXt5bZjGY5n",target:"_blank",rel:"noopener"},"Reactiflux Chat"),o.createElement(s.default,{href:"https://www.facebook.com/react",target:"_blank",rel:"noopener"},"Facebook"),o.createElement(s.default,{href:"https://twitter.com/reactjs",target:"_blank",rel:"noopener"},"Twitter")),o.createElement(f.default,{layoutHasSidebar:c},o.createElement(m.default,{onDark:!0},"Community"),b.sectionListCommunity.map(function(e){return o.createElement(u.default,{to:"/community/"+e.items[0].id+".html",key:e.title},e.title)})),o.createElement(f.default,{layoutHasSidebar:c},o.createElement(m.default,{onDark:!0},"More"),o.createElement(u.default,{to:"/tutorial/tutorial.html"},"Tutorial"),o.createElement(u.default,{to:"/blog/"},"Blog"),o.createElement(u.default,{to:"/acknowledgements.html"},"Acknowledgements"),o.createElement(s.default,{href:"http://facebook.github.io/react-native/",target:"_blank",rel:"noopener"},"React Native"))),o.createElement("section",{css:(a={paddingTop:40,display:"block !important"},a[h.media.greaterThan("xlarge")]={width:"calc(100% / 3)",order:-1},a[h.media.greaterThan("large")]={order:-1,width:c?null:"calc(100% / 3)"},a[h.media.lessThan("large")]={textAlign:"center",width:"100%",paddingTop:40},a)},o.createElement("a",{href:"https://code.facebook.com/projects/",target:"_blank",rel:"noopener"},o.createElement("img",{alt:"Facebook Open Source",css:{maxWidth:160,height:"auto"},src:w.default})),o.createElement("p",{css:{color:h.colors.subtleOnDark,paddingTop:15}},"Copyright © 2018 Facebook Inc.")))))};t.default=v,e.exports=t.default}).call(t,n(3))},151:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(13),i=r(a),l=n(2),s=(r(l),n(4)),c=function(e){var t=e.children,n=e.target,r=e.to;return o.createElement(i.default,{css:{lineHeight:2,":hover":{color:s.colors.brand}},to:r,target:n},t)};t.default=c,e.exports=t.default}).call(t,n(3))},152:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),i=(r(a),n(4)),l=function(e){var t,n=e.children;e.title,e.layoutHasSidebar;return o.createElement("div",{css:(t={display:"flex",flexDirection:"column",alignItems:"flex-start",width:"50%",paddingTop:40},t[i.media.size("sidebarFixed")]={paddingTop:0,width:"25%"},t)},o.createElement("div",{css:{display:"inline-flex",flexDirection:"column"}},n))};t.default=l,e.exports=t.default}).call(t,n(3))},153:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(150),a=o(r);t.default=a.default,e.exports=t.default},154:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),c=(r(s),n(4)),u=function(e){function t(){var n,o,r;a(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=o=i(this,e.call.apply(e,[this].concat(s))),o.state={enabled:!0},r=n,i(o,r)}return l(t,e),t.prototype.componentDidMount=function(){window.docsearch?window.docsearch({apiKey:"36221914cce388c46d0420343e0bb32e",indexName:"react",inputSelector:"#algolia-doc-search"}):(console.warn("Search has failed to load and now is being disabled"),this.setState({enabled:!1}))},t.prototype.render=function(){var e,t,n=this.state.enabled;return n?o.createElement("form",{css:(e={display:"flex",flex:"0 0 auto",flexDirection:"row",alignItems:"center",paddingLeft:"0.5rem",paddingRight:"0.5rem"},e[c.media.lessThan("small")]={justifyContent:"flex-end"},e[c.media.lessThan("large")]={marginRight:10},e[c.media.between("small","medium")]={width:"calc(100% / 3)"},e[c.media.between("medium","xlarge")]={width:"calc(100% / 6)"},e[c.media.greaterThan("small")]={minWidth:120},e)},o.createElement("input",{css:(t={appearance:"none",background:"transparent",border:0,color:c.colors.white,fontSize:18,fontWeight:300,fontFamily:"inherit",position:"relative",padding:"5px 5px 5px 29px",backgroundImage:"url(/search.svg)",backgroundSize:"16px 16px",backgroundRepeat:"no-repeat",backgroundPositionY:"center",backgroundPositionX:"5px",":focus":{outline:0,backgroundColor:c.colors.lighter,borderRadius:"0.25rem"}},t[c.media.lessThan("large")]={fontSize:16},t[c.media.greaterThan("small")]={width:"100%"},t[c.media.lessThan("small")]={width:"16px",transition:"width 0.2s ease, padding 0.2s ease",paddingLeft:"16px",":focus":{paddingLeft:"29px",width:"8rem",outline:"none"}},t),id:"algolia-doc-search",type:"search",placeholder:"Search docs","aria-label":"Search docs"})):null},t}(s.Component);t.default=u,e.exports=t.default}).call(t,n(3))},155:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(9),l=r(i),s=n(156),c=r(s),u=n(13),d=r(u),f=n(2),p=(r(f),n(4)),m=n(22),g=n(52),h=r(g),b=n(154),y=r(b),w=n(1053),v=r(w),x=function(e){var t,n,r,i,s,u=e.location;return o.createElement("header",{css:{backgroundColor:p.colors.darker,color:p.colors.white,position:"fixed",zIndex:1,width:"100%",top:0,left:0}},o.createElement(l.default,null,o.createElement("div",{css:(t={display:"flex",flexDirection:"row",alignItems:"center",height:60},t[p.media.between("small","large")]={height:50},t[p.media.lessThan("small")]={height:40},t)},o.createElement(d.default,{css:(n={display:"flex",marginRight:10,height:"100%",alignItems:"center",color:p.colors.brand,":focus":{outline:0,color:p.colors.white}},n[p.media.greaterThan("small")]={width:"calc(100% / 6)"},n[p.media.lessThan("small")]={flex:"0 0 auto"},n),to:"/"},o.createElement("img",{src:v.default,alt:"",height:"20"}),o.createElement("span",{css:(r={color:"inherit",marginLeft:10,fontWeight:700,fontSize:20,lineHeight:"20px"},r[p.media.lessThan("large")]={fontSize:16,marginTop:1},r[p.media.lessThan("small")]={position:"absolute",overflow:"hidden",clip:"rect(0 0 0 0)",height:1,width:1,margin:-1,padding:0,border:0},r)},"React")),o.createElement("nav",{css:(i={display:"flex",flexDirection:"row",alignItems:"stretch",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch",height:"100%",width:"60%"},i[p.media.size("xsmall")]={flexGrow:"1",width:"auto"},i[p.media.greaterThan("xlarge")]={width:null},i[p.media.lessThan("small")]={maskImage:"linear-gradient(to right, transparent, black 20px, black 90%, transparent)"},i)},o.createElement(c.default,{isActive:u.pathname.includes("/docs/"),title:"文件",to:"/tw/docs/hello-world.html"}),o.createElement(c.default,{isActive:u.pathname.includes("/tutorial/"),title:"教學",to:"/tutorial/tutorial.html"}),o.createElement(c.default,{isActive:u.pathname.includes("/community/"),title:"社群",to:"/community/support.html"}),o.createElement(c.default,{isActive:u.pathname.includes("/blog"),title:"部落格",to:"/blog/"})),o.createElement(y.default,null),o.createElement("div",{css:(s={},s[p.media.lessThan("medium")]={display:"none"},s[p.media.greaterThan("large")]={width:"calc(100% / 6)"},s)},o.createElement("a",{css:a({padding:"5px 10px",whiteSpace:"nowrap"},p.fonts.small,{":hover":{color:p.colors.brand},":focus":{outline:0,backgroundColor:p.colors.lighter,borderRadius:15}}),href:"https://github.com/facebook/react/releases",target:"_blank",rel:"noopener"},"v",m.version),o.createElement("a",{css:a({padding:"5px 10px",marginLeft:10,whiteSpace:"nowrap"},p.fonts.small,{":hover":{color:p.colors.brand},":focus":{outline:0,backgroundColor:p.colors.lighter,borderRadius:15}}),href:"https://github.com/facebook/react/",target:"_blank",rel:"noopener"},"GitHub",o.createElement(h.default,{cssProps:{marginLeft:5,verticalAlign:-2,color:p.colors.subtle}}))))))};t.default=x,e.exports=t.default}).call(t,n(3))},156:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a,i,l,s=n(13),c=r(s),u=n(2),d=(r(u),n(4)),f=function(e){var t=e.isActive,n=e.title,r=e.to;return o.createElement(c.default,{css:[p,t&&m],to:r},n,t&&o.createElement("span",{css:g}))},p=(a={display:"flex",flexDirection:"row",alignItems:"center",color:d.colors.white,transition:"color 0.2s ease-out",paddingLeft:15,paddingRight:15,fontWeight:300,":focus":{outline:0,backgroundColor:d.colors.lighter,color:d.colors.white}},a[d.media.size("xsmall")]={paddingLeft:8,paddingRight:8},a[d.media.between("small","medium")]={paddingLeft:10,paddingRight:10},a[d.media.greaterThan("xlarge")]={paddingLeft:20,paddingRight:20,fontSize:18,":hover:not(:focus)":{color:d.colors.brand}},a),m=(i={color:d.colors.brand},i[d.media.greaterThan("small")]={position:"relative"},i),g=(l={},l[d.media.greaterThan("small")]={position:"absolute",bottom:-1,height:4,background:d.colors.brand,left:0,right:0,zIndex:1},l);t.default=f,e.exports=t.default}).call(t,n(3))},157:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(155),a=o(r);t.default=a.default,e.exports=t.default},269:function(e,t){},270:function(e,t){},1053:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"},1054:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABaCAMAAADQMV5DAAAC3FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+GTFYVAAAA9HRSTlMAG7O/KQR48v/+hA5W2+piObG8RBSU/fehIG7stSWl9nkIStbYU0XN4FUvrHoDcOi3OAuLmheOmRVm4rtBNbDucsnfXlDUJpuGB3vtM3+mHBKMEF3FSDzmaMLpWN7PRh2XkAaAo3X4riuiBctS3WAxtvFx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"},162:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,n(130),n(1049),n(1050);var s=n(2),c=(r(s),n(15)),u=r(c),d=n(153),f=r(d),p=n(157),m=r(p),g=n(4);n(169),n(621),n(270),n(269);var h=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e,t=this.props,n=t.children,r=t.location,a=!1;return r.pathname.match(/^\/(docs|tutorial|community|blog|contributing|warnings)/)&&(a=!0),o.createElement("div",{css:{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 40px)"}},o.createElement(m.default,{location:r}),o.createElement(u.default,{direction:"column",shrink:"0",grow:"1",valign:"stretch",css:(e={flex:"1 0 auto",marginTop:60},e[g.media.between("medium","large")]={marginTop:50},e[g.media.lessThan("medium")]={marginTop:40},e)},n()),o.createElement(f.default,{layoutHasSidebar:a}))},t}(s.Component);t.default=h,e.exports=t.default}).call(t,n(3))},169:function(e,t,n){"use strict";var o=n(45),r=n(4),a={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",lineHighlight:"#14161a",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",punctuation:"#5FB3B3",tag:"#fc929e",function:"#79b6f2",className:"#FAC863",method:"#6699CC",operator:"#fc929e"};o.css.global(".gatsby-highlight",{background:r.colors.dark,color:r.colors.white,borderRadius:10,overflow:"auto",tabSize:"1.5em"}),o.css.global('\n.gatsby-highlight code[class*="gatsby-code-"],\n.gatsby-highlight pre[class*="gatsby-code-"],\n.gatsby-highlight pre.prism-code',{height:"auto !important",margin:"1rem",fontSize:14,lineHeight:"20px",whiteSpace:"pre-wrap",wordBreak:"break-word"}),o.css.global(".gatsby-highlight + .gatsby-highlight",{marginTop:20}),o.css.global(".gatsby-highlight-code-line",{backgroundColor:a.lineHighlight,display:"block",margin:"-0.125rem calc(-1rem - 15px)",padding:"0.125rem calc(1rem + 15px)"}),o.css.global(".token.attr-name",{color:a.keyword}),o.css.global("\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata",{color:a.comment}),o.css.global("\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted",{color:a.primitive}),o.css.global(".token.boolean",{color:a.boolean}),o.css.global(".token.tag",{color:a.tag}),o.css.global(".token.string",{color:a.string}),o.css.global(".token.punctuation",{color:a.punctuation}),o.css.global("\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted",{color:a.char}),o.css.global(".token.function",{color:a.function}),o.css.global("\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable",{color:a.variable}),o.css.global(".token.attr-value",{color:a.string}),o.css.global(".token.keyword",{color:a.keyword}),o.css.global("\n.token.atrule,\n.token.class-name",{color:a.className}),o.css.global(".token.important",{fontWeight:400}),o.css.global(".token.bold",{fontWeight:700}),o.css.global(".token.italic",{fontStyle:"italic"}),o.css.global(".token.entity",{cursor:"help"}),o.css.global(".namespace",{opacity:.7})}});
//# sourceMappingURL=component---src-layouts-index-js-392b7daa74ccabe5ce30.js.map