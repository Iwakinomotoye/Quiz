(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ac6b45b"],{"0418":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{attrs:{to:"/home"}},[n("img",{staticClass:"logo",attrs:{src:r("e347"),alt:"wizzed"}})])},i=[],o=(r("bf48"),r("2877")),s={},c=Object(o["a"])(s,n,i,!1,null,"20035690",null);e["a"]=c.exports},"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"0d5a":function(t,e,r){t.exports=r.p+"img/camera.a8af8ec2.svg"},1299:function(t,e,r){t.exports=r.p+"img/wrong.80098757.svg"},"181c":function(t,e,r){t.exports=r.p+"img/stadium.55eb97f0.jpg"},"24f0":function(t,e,r){t.exports=r.p+"img/horse.cecaeb2e.jpg"},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),s=r("ad6d"),c="toString",a=RegExp.prototype,u=a[c],f=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(f||l)&&n(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in a)?s.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"27e4":function(t,e,r){t.exports=r.p+"img/arrow.beff348d.svg"},2861:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questions"},[n("Header"),n("div",{staticClass:"page-content"},[n("router-link",{staticClass:"back",attrs:{to:"/categories"}},[t._v("Back to Categories")]),n("div",{staticClass:"inner-content"},[n("div",{staticClass:"category-description"},[n("div",[n("span",{staticClass:"category-text"},[t._v("Category:")]),n("span",{staticClass:"category-name"},[t._v(t._s(t.categoryName))])]),n("img",{attrs:{src:r("7584")("./"+t.categoryImage),alt:""}})]),n("div",{staticClass:"question-section"},[n("div",{staticClass:"question-position"},[n("div",[t._v("Question "+t._s(t.currentQuestionNo+1)+" of "+t._s(t.totalQuestions))]),n("div",{staticClass:"progress"},t._l(t.totalQuestions,(function(e){return n("span",{key:e,class:{current:e==t.currentQuestionNo+1}})})),0)]),n("div",{staticClass:"main-question"},[n("div",{staticClass:"question",domProps:{innerHTML:t._s(t.question)}}),n("div",{staticClass:"options"},t._l(t.options,(function(e,r){return n("div",{key:r,class:{correctAnswer:e===t.correctAnswer,wrongAnswer:e===t.selected}},[n("div",{staticClass:"custom-radio"},[n("input",{attrs:{type:"radio",name:"option",disabled:t.correctAnswer.length>0},on:{click:function(r){return t.checkAnswer(e)}}}),n("span")]),n("div",{domProps:{innerHTML:t._s(e)}})])})),0)]),n("div",{staticClass:"page-handler"},[n("button",{staticClass:"next-button",on:{click:function(e){return t.nextQuestion()}}},[t._v("Next"),n("span",{staticClass:"icon-arrow"})])])])])],1)],1)},i=[];r("b0c0");function o(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0");function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){return o(t)||s(t)||c()}var u=r("0418"),f=r("d619"),l={name:"Questions",components:{Header:u["a"]},data:function(){return{categoryName:null,categoryImage:null,questions:[],question:"",options:[],totalQuestions:0,currentQuestionNo:0,correctAnswer:"",alreadyClicked:!1,numberOfCorrect:0,selected:""}},methods:{displayQuestion:function(){var t;this.question=this.questions[this.currentQuestionNo].question;var e=[];(t=e).push.apply(t,a(this.questions[this.currentQuestionNo].incorrect_answers)),e.push(this.questions[this.currentQuestionNo].correct_answer),e=Object(f["a"])(e),this.options=e,this.correctAnswer=""},checkAnswer:function(t){this.alreadyClicked||(this.correctAnswer=this.questions[this.currentQuestionNo].correct_answer,this.correctAnswer==t?(this.selected="",this.numberOfCorrect++):this.selected=t,this.alreadyClicked=!0)},nextQuestion:function(){if(this.currentQuestionNo<this.totalQuestions-1){this.currentQuestionNo++,this.displayQuestion(),this.alreadyClicked=!1;var t=document.querySelector("input[type='radio']:checked");t&&(t.checked=!1)}else this.$router.push("/result"),this.$store.commit("setScore",this.numberOfCorrect)}},created:function(){var t=this.$store.getters.getCategory;this.categoryName=t.name,this.categoryImage=t.url,t||this.$router.push("/categories")},mounted:function(){this.questions=this.$store.getters.getQuestions,this.totalQuestions=this.questions.length,this.displayQuestion()}},g=l,p=(r("4041"),r("2877")),d=Object(p["a"])(g,n,i,!1,null,"a0d0d760",null);e["default"]=d.exports},"2e7c":function(t,e,r){},"35e0":function(t,e,r){t.exports=r.p+"img/mathematics.f4cfd571.jpg"},"37e8c":function(t,e,r){t.exports=r.p+"img/check-mark.2d78a11f.svg"},"3a59":function(t,e,r){t.exports=r.p+"img/canada.7810a3ed.jpg"},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),s="String Iterator",c=i.set,a=i.getterFor(s);o(String,"String",(function(t){c(this,{type:s,string:String(t),index:0})}),(function(){var t,e=a(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},4041:function(t,e,r){"use strict";var n=r("df21"),i=r.n(n);i.a},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),s=r("e95a"),c=r("50c4"),a=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,g,p,d=i(t),v="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,b=void 0!==h,y=u(d),w=0;if(b&&(h=n(h,m>2?arguments[2]:void 0,2)),void 0==y||v==Array&&s(y))for(e=c(d.length),r=new v(e);e>w;w++)p=b?h(d[w],w):d[w],a(r,w,p);else for(l=y.call(d),g=l.next,r=new v;!(f=g.call(l)).done;w++)p=b?o(l,h,[f.value,w],!0):f.value,a(r,w,p);return r.length=w,r}},"523a":function(t,e,r){t.exports=r.p+"img/play_circle_filled.1f97e00e.svg"},5242:function(t,e,r){t.exports=r.p+"img/computers.4e606e47.jpg"},"54a9":function(t,e,r){t.exports=r.p+"img/film.444d365d.jpg"},"62f7":function(t,e,r){t.exports=r.p+"img/animals.ddba97ff.jpg"},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,s,c=String(i(e)),a=n(r),u=c.length;return a<0||a>=u?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):o:t?c.slice(a,a+2):s-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),s=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"686e":function(t,e,r){t.exports=r.p+"img/music.6a648d98.jpg"},7314:function(t,e,r){t.exports=r.p+"img/error.35bc450a.svg"},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7584:function(t,e,r){var n={"./abacus.svg":"f334","./animals.jpg":"62f7","./arrow.svg":"27e4","./camera.svg":"0d5a","./canada.jpg":"3a59","./celebrities.jpg":"de37","./check-mark.svg":"37e8c","./computer.svg":"ff6a","./computers.jpg":"5242","./correct.svg":"7c6f","./empty-circle.svg":"eb2e","./error.svg":"7314","./film.jpg":"54a9","./football.svg":"908c","./history.jpg":"d874","./horse.jpg":"24f0","./landingBackground-min.svg":"81ca","./landingBackground.svg":"f5ad","./left-arrow.svg":"947f","./logo.svg":"e347","./mathematics.jpg":"35e0","./microphone.svg":"9d79","./music.jpg":"686e","./pawprint.svg":"d138","./play_circle_filled.svg":"523a","./scroll.svg":"e24a","./sports.jpg":"fcdc","./stadium.jpg":"181c","./star.svg":"dbfd","./wrong.svg":"1299"};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="7584"},"7c6f":function(t,e,r){t.exports=r.p+"img/correct.f67bfecf.svg"},"81ca":function(t,e,r){t.exports=r.p+"img/landingBackground-min.1a6c0cb2.svg"},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var s=n(e);s in t?i.f(t,s,o(0,r)):t[s]=r}},"908c":function(t,e,r){t.exports=r.p+"img/football.d4bcab1e.svg"},"947f":function(t,e,r){t.exports=r.p+"img/left-arrow.3a1bdc69.svg"},"9d79":function(t,e,r){t.exports=r.p+"img/microphone.f4f2050f.svg"},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),s=r("c430"),c=r("83ab"),a=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),g=r("e8b5"),p=r("861d"),d=r("825a"),v=r("7b0b"),m=r("fc6a"),h=r("c04e"),b=r("5c6c"),y=r("7c73"),w=r("df75"),x=r("241c"),S=r("057f"),j=r("7418"),C=r("06cf"),k=r("9bf2"),A=r("d1e7"),O=r("9112"),L=r("6eeb"),_=r("5692"),N=r("f772"),Q=r("d012"),T=r("90e3"),q=r("b622"),P=r("e538"),E=r("746f"),M=r("d44e"),$=r("69f3"),D=r("b727").forEach,H=N("hidden"),I="Symbol",F="prototype",R=q("toPrimitive"),V=$.set,B=$.getterFor(I),G=Object[F],J=i.Symbol,z=o("JSON","stringify"),U=C.f,W=k.f,K=S.f,X=A.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=i.QObject,it=!nt||!nt[F]||!nt[F].findChild,ot=c&&f((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=U(G,e);n&&delete G[e],W(t,e,r),n&&t!==G&&W(G,e,n)}:W,st=function(t,e){var r=Y[t]=y(J[F]);return V(r,{type:I,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},at=function(t,e,r){t===G&&at(Z,e,r),d(t);var n=h(e,!0);return d(r),l(Y,n)?(r.enumerable?(l(t,H)&&t[H][n]&&(t[H][n]=!1),r=y(r,{enumerable:b(0,!1)})):(l(t,H)||W(t,H,b(1,{})),t[H][n]=!0),ot(t,n,r)):W(t,n,r)},ut=function(t,e){d(t);var r=m(e),n=w(r).concat(dt(r));return D(n,(function(e){c&&!lt.call(r,e)||at(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===G&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,H)&&this[H][e])||r)},gt=function(t,e){var r=m(t),n=h(e,!0);if(r!==G||!l(Y,n)||l(Z,n)){var i=U(r,n);return!i||!l(Y,n)||l(r,H)&&r[H][n]||(i.enumerable=!0),i}},pt=function(t){var e=K(m(t)),r=[];return D(e,(function(t){l(Y,t)||l(Q,t)||r.push(t)})),r},dt=function(t){var e=t===G,r=K(e?Z:m(t)),n=[];return D(r,(function(t){!l(Y,t)||e&&!l(G,t)||n.push(Y[t])})),n};if(a||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===G&&r.call(Z,t),l(this,H)&&l(this[H],e)&&(this[H][e]=!1),ot(this,e,b(1,t))};return c&&it&&ot(G,e,{configurable:!0,set:r}),st(e,t)},L(J[F],"toString",(function(){return B(this).tag})),L(J,"withoutSetter",(function(t){return st(T(t),t)})),A.f=lt,k.f=at,C.f=gt,x.f=S.f=pt,j.f=dt,P.f=function(t){return st(q(t),t)},c&&(W(J[F],"description",{configurable:!0,get:function(){return B(this).description}}),s||L(G,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:J}),D(w(rt),(function(t){E(t)})),n({target:I,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=J(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!c},{create:ft,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:gt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:pt,getOwnPropertySymbols:dt}),n({target:"Object",stat:!0,forced:f((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),z){var vt=!a||f((function(){var t=J();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,z.apply(null,i)}})}J[F][R]||O(J[F],R,J[F].valueOf),M(J,I),Q[H]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),s=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,s=o.toString,c=/^\s*function ([^ (]*)/,a="name";!n||a in o||i(o,a,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),s=r("50c4"),c=r("65f0"),a=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,g=5==t||l;return function(p,d,v,m){for(var h,b,y=o(p),w=i(y),x=n(d,v,3),S=s(w.length),j=0,C=m||c,k=e?C(p,S):r?C(p,0):void 0;S>j;j++)if((g||j in w)&&(h=w[j],b=x(h,j,y),t))if(e)k[j]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return j;case 2:a.call(k,h)}else if(f)return!1;return l?-1:u||f?f:k}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bf48:function(t,e,r){"use strict";var n=r("2e7c"),i=r.n(n);i.a},d138:function(t,e,r){t.exports=r.p+"img/pawprint.354a6fcf.svg"},d28b:function(t,e,r){var n=r("746f");n("iterator")},d619:function(t,e,r){"use strict";function n(t){for(var e=0;e<t.length;e++){var r=Math.floor(Math.random()*t.length),n=t[r];t[r]=t[e],t[e]=n}return t}r.d(e,"a",(function(){return n}))},d874:function(t,e,r){t.exports=r.p+"img/history.839f9746.jpg"},dbfd:function(t,e,r){t.exports=r.p+"img/star.0181ee1e.svg"},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),s=r("9112"),c=r("b622"),a=c("iterator"),u=c("toStringTag"),f=o.values;for(var l in i){var g=n[l],p=g&&g.prototype;if(p){if(p[a]!==f)try{s(p,a,f)}catch(v){p[a]=f}if(p[u]||s(p,u,l),i[l])for(var d in o)if(p[d]!==o[d])try{s(p,d,o[d])}catch(v){p[d]=o[d]}}}},de37:function(t,e,r){t.exports=r.p+"img/celebrities.1e445c2d.jpg"},df21:function(t,e,r){},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),s=r("5135"),c=r("861d"),a=r("9bf2").f,u=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof g?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(g,f);var p=g.prototype=f.prototype;p.constructor=g;var d=p.toString,v="Symbol(test)"==String(f("test")),m=/^Symbol\((.*)\)[^)]+$/;a(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=d.call(t);if(s(l,t))return"";var r=v?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:g})}},e24a:function(t,e,r){t.exports=r.p+"img/scroll.40293cf9.svg"},e347:function(t,e,r){t.exports=r.p+"img/logo.a771cec5.svg"},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},eb2e:function(t,e,r){t.exports=r.p+"img/empty-circle.01fbbaf0.svg"},f334:function(t,e,r){t.exports=r.p+"img/abacus.66e33241.svg"},f5ad:function(t,e,r){t.exports=r.p+"img/landingBackground.925c5674.svg"},fcdc:function(t,e,r){t.exports=r.p+"img/sports.27a0fd54.jpg"},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},ff6a:function(t,e,r){t.exports=r.p+"img/computer.49a04ba6.svg"}}]);
//# sourceMappingURL=chunk-6ac6b45b.00bdc864.js.map