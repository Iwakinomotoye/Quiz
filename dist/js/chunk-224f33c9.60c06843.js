(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-224f33c9"],{"0418":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("router-link",{attrs:{to:"/home"}},[s("img",{staticClass:"logo",attrs:{src:e("e347"),alt:"wizzed"}})])},n=[],i=(e("bf48"),e("2877")),r={},o=Object(i["a"])(r,s,n,!1,null,"20035690",null);a["a"]=o.exports},"181c":function(t,a,e){t.exports=e.p+"img/stadium.55eb97f0.jpg"},"24f0":function(t,a,e){t.exports=e.p+"img/horse.cecaeb2e.jpg"},"2e7c":function(t,a,e){},3393:function(t,a,e){},"3a59":function(t,a,e){t.exports=e.p+"img/canada.7810a3ed.jpg"},"40b1":function(t,a,e){"use strict";var s=e("3393"),n=e.n(s);n.a},"4d55":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"landing"},[t.loading?s("div",{staticClass:"loader"},[t._m(0),s("p",{staticClass:"brown-text"},[t._v("/Quizzed/")]),s("p",{staticClass:"white-text"},[t._v("n. The act of getting quizzed and enjoying it")])]):t._e(),t.loading?t._e():s("div",[s("section",{staticClass:"section-one"},[s("img",{staticClass:"background",attrs:{src:e("f5ad"),alt:""}}),s("img",{staticClass:"background-min",attrs:{src:e("81ca"),alt:""}}),s("Header"),s("div",{staticClass:"section-one-content"},[s("div",{staticClass:"text-content"},[s("h1",{staticClass:"heading-one"},[t._v("Hey You,")]),s("h1",{staticClass:"heading-two"},[t._v("I have a feeling you")]),s("h1",{staticClass:"heading-two"},[t._v("will enjoy this Quiz")]),t._m(1),s("div",[s("router-link",{attrs:{to:"/categories"}},[s("button",{staticClass:"take-quiz"},[s("img",{attrs:{src:e("523a"),alt:""}}),t._v(" Take a Quiz")])])],1)]),t._m(2)])],1)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"line-one"},[e("div",{staticClass:"slash-background"},[e("span",{staticClass:"lower-slash"}),e("span",{staticClass:"upper-slash"})]),e("span",{staticClass:"wizzed"},[t._v("wizzed")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"heading-two"},[t._v("about "),e("span",{staticClass:"animals"},[t._v("animals")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"image-content"},[s("div",{staticClass:"image-container"},[s("img",{attrs:{src:e("24f0"),alt:"horses"}}),s("div",{staticClass:"image-caption"},[s("p",[t._v("Did you know ?")]),s("p",[t._v("Domestic horses have a lifespan of around 25 years.")])])]),s("div",{staticClass:"image-container"},[s("img",{attrs:{src:e("5242"),alt:"horses"}}),s("div",{staticClass:"image-caption"},[s("p",[t._v("Did you know ?")]),s("p",[t._v("Mac OS was the first operating system ever released.")])])]),s("div",{staticClass:"image-container"},[s("img",{attrs:{src:e("181c"),alt:"horses"}}),s("div",{staticClass:"image-caption"},[s("p",[t._v("Did you know ?")]),s("p",[t._v("The 2022 World Cup would be hosted by Qatar.")])])]),s("div",{staticClass:"image-container"},[s("img",{attrs:{src:e("3a59"),alt:"horses"}}),s("div",{staticClass:"image-caption"},[s("p",[t._v("Did you know ?")]),s("p",[t._v("Canada was founded in 1867.")])])])])}],i=e("0418"),r={name:"Landing",components:{Header:i["a"]},data:function(){return{loading:null,pageEvent:null}},methods:{shuffle:function(t,a,e,s){var n=document.querySelector(".image-container:nth-of-type(".concat(t,")")),i=document.querySelector(".image-container:nth-of-type(".concat(a,")")),r=document.querySelector(".image-container:nth-of-type(".concat(e,")")),o=document.querySelector(".image-container:nth-of-type(".concat(s,")"));window.innerWidth>500?(n.style.transform="translateY(-380px) translateX(105px) translateZ(-300px)",i.style.transform="translateY(0px) translateX(0px) translateZ(0px)",r.style.transform="translateY(-20px) translateX(35px) translateZ(-100px)",o.style.transform="translateY(-40px) translateX(70px) translateZ(-200px)",setTimeout((function(){n.style.zIndex=1,i.style.zIndex=4,r.style.zIndex=3,o.style.zIndex=2,n.style.transform="translateY(-60px) translateX(105px) translateZ(-300px)"}),500)):(n.style.transform="translateY(-250px) translateX(0px) translateZ(-300px)",i.style.transform="translateY(0px) translateX(0px) translateZ(0px)",r.style.transform="translateY(-20px) translateX(0px) translateZ(-100px)",o.style.transform="translateY(-40px) translateX(0px) translateZ(-200px)",setTimeout((function(){n.style.zIndex=1,i.style.zIndex=4,r.style.zIndex=3,o.style.zIndex=2,n.style.transform="translateY(-60px) translateX(0px) translateZ(-300px)"}),500))},callInterval:function(t){var a=this,e=t;this.pageEvent=setInterval((function(){e++,1===e&&a.shuffle(1,2,3,4),2===e&&a.shuffle(2,3,4,1),3===e&&a.shuffle(3,4,1,2),4===e&&(a.shuffle(4,1,2,3),e=0)}),4e3)}},mounted:function(){var t=this;"/home"===this.$router.currentRoute.path?(this.loading=!1,setTimeout((function(){t.shuffle(1,2,3,4)}),1e3),this.callInterval(1)):(this.loading=!0,setTimeout((function(){t.loading=!1,setTimeout((function(){t.shuffle(1,2,3,4)}),1e3),t.callInterval(1)}),5500))},created:function(){window.localStorage.removeItem("quiz-app")},beforeDestroy:function(){clearInterval(this.pageEvent)}},o=r,l=(e("40b1"),e("2877")),c=Object(l["a"])(o,s,n,!1,null,"49b5926b",null);a["default"]=c.exports},"523a":function(t,a,e){t.exports=e.p+"img/play_circle_filled.1f97e00e.svg"},5242:function(t,a,e){t.exports=e.p+"img/computers.4e606e47.jpg"},"81ca":function(t,a,e){t.exports=e.p+"img/landingBackground-min.1a6c0cb2.svg"},bf48:function(t,a,e){"use strict";var s=e("2e7c"),n=e.n(s);n.a},e347:function(t,a,e){t.exports=e.p+"img/logo.a771cec5.svg"},f5ad:function(t,a,e){t.exports=e.p+"img/landingBackground.925c5674.svg"}}]);
//# sourceMappingURL=chunk-224f33c9.60c06843.js.map