(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{1889:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var s=e[a](u),o=s.value}catch(l){return void n(l)}s.done?t(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s={data:function(){return{xueshengxingbieOptions:[],xueshengxingbieIndex:0,jiaoshixingbieOptions:[],jiaoshixingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var t=this;return u(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],r=e.getStorageSync("loginTable"),t.tableName=r,"xuesheng"==t.tableName&&(t.xueshengxingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.xueshengxingbieOptions[0]),"jiaoshi"==t.tableName&&(t.jiaoshixingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.jiaoshixingbieOptions[0]),t.styleChange();case 6:case"end":return n.stop()}}),n)})))()},methods:{xueshengxingbieChange:function(e){this.xueshengxingbieIndex=e.target.value,this.ruleForm.xingbie=this.xueshengxingbieOptions[this.xueshengxingbieIndex]},jiaoshixingbieChange:function(e){this.jiaoshixingbieIndex=e.target.value,this.ruleForm.xingbie=this.jiaoshixingbieOptions[this.jiaoshixingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return u(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.xuehao||"xuesheng"!=e.tableName){t.next=3;break}return e.$utils.msg("学号不能为空"),t.abrupt("return");case 3:if(e.ruleForm.mima||"xuesheng"!=e.tableName){t.next=6;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("xuesheng"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){t.next=9;break}return e.$utils.msg("两次密码输入不一致"),t.abrupt("return");case 9:if(e.ruleForm.xingming||"xuesheng"!=e.tableName){t.next=12;break}return e.$utils.msg("姓名不能为空"),t.abrupt("return");case 12:if("xuesheng"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){t.next=15;break}return e.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 15:if("xuesheng"!=e.tableName||!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){t.next=18;break}return e.$utils.msg("手机号码应输入手机格式"),t.abrupt("return");case 18:if(e.ruleForm.gonghao||"jiaoshi"!=e.tableName){t.next=21;break}return e.$utils.msg("工号不能为空"),t.abrupt("return");case 21:if(e.ruleForm.mima||"jiaoshi"!=e.tableName){t.next=24;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 24:if("jiaoshi"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){t.next=27;break}return e.$utils.msg("两次密码输入不一致"),t.abrupt("return");case 27:if(e.ruleForm.jiaoshixingming||"jiaoshi"!=e.tableName){t.next=30;break}return e.$utils.msg("教师姓名不能为空"),t.abrupt("return");case 30:if("jiaoshi"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){t.next=33;break}return e.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 33:if("jiaoshi"!=e.tableName||!e.ruleForm.lianxishouji||e.$validate.isMobile(e.ruleForm.lianxishouji)){t.next=36;break}return e.$utils.msg("联系手机应输入手机格式"),t.abrupt("return");case 36:return t.next=38,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 38:e.$utils.msgBack("注册成功");case 40:case"end":return t.stop()}}),t)})))()}}};t.default=s}).call(this,n("543d")["default"])},"1b4d":function(e,t,n){},"29b3":function(e,t,n){"use strict";var i=n("1b4d"),r=n.n(i);r.a},4914:function(e,t,n){},"69e5":function(e,t,n){"use strict";n.r(t);var i=n("1889"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},7044:function(e,t,n){"use strict";var i=n("4914"),r=n.n(i);r.a},ae94:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement;e._self._c},a=[]},aea0:function(e,t,n){"use strict";n.r(t);var i=n("ae94"),r=n("69e5");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("7044"),n("29b3");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"7eec4b7a",null,!1,i["a"],u);t["default"]=o.exports},bb27:function(e,t,n){"use strict";(function(e){n("b20b");i(n("66fd"));var t=i(n("aea0"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["bb27","common/runtime","common/vendor"]]]);