(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b82be8"],{"0418":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{attrs:{to:"/home"}},[a("img",{staticClass:"logo",attrs:{src:s("e347"),alt:"wizzed"}})])},n=[],c=(s("bf48"),s("2877")),o={},r=Object(c["a"])(o,a,n,!1,null,"20035690",null);e["a"]=r.exports},"2e7c":function(t,e,s){},3415:function(t,e,s){},bf48:function(t,e,s){"use strict";var a=s("2e7c"),n=s.n(a);n.a},c463:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"results"},[s("Header"),s("div",{staticClass:"page-content"},[s("router-link",{staticClass:"back",attrs:{to:"/categories"}},[t._v("Back to Categories")]),s("div",{staticClass:"inner-content"},[s("div",{staticClass:"category"},[s("span",{staticClass:"category-text"},[t._v("Category:")]),s("span",{staticClass:"category-name"},[t._v(t._s(t.categoryName))])]),s("div",{staticClass:"circle"},[s("div",{staticClass:"inner-circle"},[s("p",[t._v("You scored")]),s("p",{staticClass:"score-count"},[t._v(t._s(t.score)+"/"+t._s(t.totalQuestions))]),s("p",{staticClass:"percentage"},[t._v(t._s(t.percentage)+"%")])])]),s("div",{staticClass:"result-message"},[t.percentage<50?s("p",[t._v("Failure today can mean success tomorrow.")]):s("p",[t._v("Well done! You have done great.")])]),s("div",{staticClass:"page-handler"},[s("button",{staticClass:"start-again",on:{click:function(e){return t.restart()}}},[t._v("Take Quiz Again")])])])],1)],1)},n=[],c=s("0418"),o=s("891f"),r={name:"Questions",components:{Header:c["a"]},computed:{percentage:function(){var t=this.score/this.totalQuestions*100;return t=parseInt(t),isNaN(t)?0:t}},data:function(){return{categoryName:null,categoryImage:null,score:0,totalQuestions:0}},methods:{restart:function(){var t=this;this.$store.commit("setScore",0),this.$store.commit("setQuestions",[]);var e=this.$store.getters.getCategory;Object(o["a"])(e.value).then((function(){t.$router.push("/questions")}))}},mounted:function(){this.score=this.$store.getters.getScore,this.totalQuestions=this.$store.getters.getQuestions.length}},i=r,u=(s("cdd9"),s("2877")),l=Object(u["a"])(i,a,n,!1,null,"4b57b4db",null);e["default"]=l.exports},cdd9:function(t,e,s){"use strict";var a=s("3415"),n=s.n(a);n.a},e347:function(t,e,s){t.exports=s.p+"img/logo.a771cec5.svg"}}]);
//# sourceMappingURL=chunk-32b82be8.a85da290.js.map