webpackJsonp([3],{BRgg:function(_,e,t){"use strict";e.a=function(){var _=n()({},r.b,{platform:"h5",needNewCode:1});return l.a.get("/api/getTopList",{params:_}).then(function(_){return s.a.resolve(_.data)})},e.b=function(_){var e=n()({},r.b,{platform:"h5",needNewCode:1,page:"detail",type:"top",tpl:3,topid:_});return l.a.get("/api/getTopListDetail",{params:e}).then(function(_){return s.a.resolve(_.data)})};var a=t("//Fk"),s=t.n(a),i=t("woOf"),n=t.n(i),r=t("T452"),o=t("mtWM"),l=t.n(o);l.a.defaults.withCredentials=!0,l.a.defaults.baseURL="http://10.202.2.112:9000"},Kjo5:function(_,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("L4OO"),s={render:function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("div",{ref:"rank",staticClass:"rank"},[t("Scroll",{ref:"scroll",staticClass:"toplist",attrs:{data:_.topList}},[t("ul",_._l(_.topList,function(e,a){return t("li",{key:a,staticClass:"item",on:{click:function(t){_.selectItem(e)}}},[t("div",{staticClass:"icon"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{src:"",width:"100",height:"100",alt:""}})]),_._v(" "),t("ul",{staticClass:"songlist"},_._l(e.songList,function(e,a){return t("li",{key:a,staticClass:"song"},[t("span",[_._v(_._s(a+1))]),_._v(" "),t("span",[_._v(_._s(e.songname)+" - "+_._s(e.singername))])])}))])})),_._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!_.topList,expression:"!topList"}],staticClass:"loading-container"},[t("Loading")],1)]),_._v(" "),t("router-view")],1)},staticRenderFns:[]};var i=function(_){t("fSy1")},n=t("VU/8")(a.a,s,!1,i,"data-v-01791d94",null);e.default=n.exports},L4OO:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__("Dd8w"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_1__api_rank__=__webpack_require__("BRgg"),__WEBPACK_IMPORTED_MODULE_2__api_config__=__webpack_require__("T452"),__WEBPACK_IMPORTED_MODULE_3__base_scroll_scroll__=__webpack_require__("qwAB"),__WEBPACK_IMPORTED_MODULE_4__base_loading_loading__=__webpack_require__("y/jF"),__WEBPACK_IMPORTED_MODULE_5__common_js_mixin__=__webpack_require__("F4+m"),__WEBPACK_IMPORTED_MODULE_6_vuex__=__webpack_require__("NYxO");__webpack_exports__.a={mixins:[__WEBPACK_IMPORTED_MODULE_5__common_js_mixin__.b],data:function(){return{topList:[]}},created:function(){this.getTopList()},methods:__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({getTopList:function getTopList(){var _this=this;Object(__WEBPACK_IMPORTED_MODULE_1__api_rank__.a)().then(function(res){function MusicJsonCallback(_){__WEBPACK_IMPORTED_MODULE_2__api_config__.a==_.code&&(_this.topList=_.data.topList)}eval(res)}).catch(function(_){console.log("rank--getTopList--error")})},handlePlaylist:function(_){var e=_.length?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.scroll.refresh()},selectItem:function(_){this.setTopList(_),this.$router.push({path:"/rank/"+_.id})}},Object(__WEBPACK_IMPORTED_MODULE_6_vuex__.d)({setTopList:"SET_TOPLIST"})),computed:{},components:{Scroll:__WEBPACK_IMPORTED_MODULE_3__base_scroll_scroll__.a,Loading:__WEBPACK_IMPORTED_MODULE_4__base_loading_loading__.a}}},fSy1:function(_,e){}});
//# sourceMappingURL=3.fa3bcec0b08c8397174d.js.map