webpackJsonp([4],{DFME:function(t,e){},mvHQ:function(t,e,n){t.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(t,e,n){var s=n("FeBl"),a=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},x9pa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("mvHQ"),a=n.n(s),o=n("gyMJ"),i={data:function(){return{loginname:"",user:"",cat:""}},computed:{xxx:function(){return this.$store.state.userAccesstoken.loginname}},methods:{signIn:function(){var t=this;Object(o.e)({accesstoken:this.loginname}).then(function(e){t.user=e.data,t.$store.commit("userInfor",e.data),localStorage.setItem("accesstoken",t.loginname),localStorage.setItem("accesstokenReturn",a()(e.data)),console.log("用户验证后返回数据：",t.user),t.cat=JSON.parse(localStorage.getItem("accesstokenReturn")),console.log("保存在localstorage的数据：",t.cat)}),this.$router.push({path:"/"})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("router-link",{staticClass:"tohome",attrs:{to:{path:"/"}}},[t._v("主页")]),t._v(" "),n("span",[t._v("/ 登录")])],1),t._v(" "),n("div",{staticClass:"signin"},[n("span",{staticClass:"uesr-name"},[t._v("用户名:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginname,expression:"loginname"}],staticClass:"user-login",attrs:{type:"text"},domProps:{value:t.loginname},on:{input:function(e){e.target.composing||(t.loginname=e.target.value)}}}),n("br"),t._v(" "),n("span",[t._v(":"+t._s(t.loginname))]),n("br"),t._v(" "),n("button",{staticClass:"login-btn",on:{click:function(e){return t.signIn()}}},[t._v("登录")]),t._v(" "),n("span",[t._v(t._s(t.xxx))])])])},staticRenderFns:[]};var c=n("VU/8")(i,r,!1,function(t){n("DFME")},"data-v-4b8b478c",null);e.default=c.exports}});
//# sourceMappingURL=4.a586bce99678e050294a.js.map