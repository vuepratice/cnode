webpackJsonp([1],{"3VzZ":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("0xDb"),i=["home","API","datails","more"],n=["home","API","datails","more"],r=["home","datails","more"],u=["signin"],o=s("gyMJ"),c={name:"User",data:function(){return{user:"",userDetails:{}}},created:function(){var t=this;this.user=JSON.parse(localStorage.getItem("accesstokenReturn")),console.log("用户名：",this.user.loginname),Object(o.d)(this.user.loginname).then(function(e){var s=e.data;t.userDetails=s.data,console.log("用户详细数据：",s)})},methods:{}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-sidebar"},[t._m(0),t._v(" "),s("div",{staticClass:"user-inner"},[s("div",[s("a",{staticClass:"user-avatar",attrs:{href:"/"}},[s("img",{attrs:{src:t.userDetails.avatar_url,title:t.userDetails.loginname}})]),t._v(" "),s("span",{staticClass:"user-name"},[s("a",{attrs:{href:"/"}},[t._v(t._s(t.userDetails.loginname))])]),t._v(" "),s("div",{staticClass:"board"},[s("span",[t._v("积分："+t._s(t.userDetails.score))])]),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-header"},[e("span",[this._v("个人信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"signature"},[e("span")])}]};var v={components:{User:s("VU/8")(c,l,!1,function(t){s("xQlq")},"data-v-332703d0",null).exports},data:function(){return{isSignIn:!1}},computed:{routeName:function(){return this.$route.name},user:function(){return this.$store.state.userAccesstoken.success}},methods:{pl:function(){return Object(a.a)(this.routeName,i)},publish:function(){return Object(a.a)(this.routeName,n)},adList:function(){return Object(a.a)(this.routeName,r)},about:function(){return Object(a.a)(this.routeName,u)}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.pl()&&!t.user?s("div",{staticClass:"item  personal-details"},[s("p",{staticClass:"cnode"},[t._v("CNode：Node.js专业中文社区")]),t._v(" "),s("router-link",{staticClass:"github-sign",attrs:{to:{path:"/signin"}}},[s("span",[t._v("登录")])])],1):t._e(),t._v(" "),t.pl()&&t.user?s("User"):t._e(),t._v(" "),t.publish()?s("div",{staticClass:"item"},[t._v("发布话题")]):t._e(),t._v(" "),t.adList()?s("div",{staticClass:"item"},[t._v("广告栏")]):t._e(),t._v(" "),t.about()?s("div",{staticClass:"about"},[s("div",{staticClass:"about-title"},[t._v("关于")]),t._v(" "),t._m(0)]):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-content"},[s("p",{staticClass:"cnode"},[t._v("CNode：Node.js专业中文社区")]),t._v(" "),s("ul",[t._v("\n        在这里你可以：\n        "),s("li",[t._v("向别人提出你遇到的问题")]),t._v(" "),s("li",[t._v("帮助遇到问题的人")]),t._v(" "),s("li",[t._v("分享自己的知识")]),t._v(" "),s("li",[t._v("和其它人一起进步")])])])}]};var d=s("VU/8")(v,_,!1,function(t){s("NIKe")},"data-v-62f42ad8",null);e.default=d.exports},NIKe:function(t,e){},xQlq:function(t,e){}});
//# sourceMappingURL=1.60829cb689ca497630ba.js.map