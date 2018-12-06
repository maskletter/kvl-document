(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{171:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),t._m(4),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/expressjs/express",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express(底层框架)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Typescript(开发语言)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"}},[t._v("pm2(服务)"),n("OutboundLink")],1)])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/use.html#router路由"}},[t._v("router(路由功能)")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/use.html#interceptor拦截器"}},[t._v("interceptor拦截器(用于进行请求拦截)")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/use.html#validation验证器"}},[t._v("Validation验证器(用于数据验证)")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/use.html#全局异常"}},[t._v("throw(全局接口异常)")])],1)]),t._v(" "),n("br"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("br"),t._v(" "),n("p",[t._v("通过Npm 方式安装kvl")]),t._v(" "),t._m(7),n("br"),t._v(" "),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"kvl-一个基于express-ts的nodejs框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kvl-一个基于express-ts的nodejs框架","aria-hidden":"true"}},[this._v("#")]),this._v(" Kvl(一个基于express/ts的Nodejs框架)")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("基于 "),n("code",[t._v("express")]),t._v(" ，兼容 "),n("code",[t._v("express")]),t._v(" 所有方法及中间件，两者可并行使用，使用 "),n("code",[t._v("typescript")]),t._v(" 实现，内置pm2基础服务调用，统一的全局接口错误处理回调，采用优先加载方式，在服务启动时候，将所有路由加载进 "),n("code",[t._v("express.router")]),t._v(" 当中，使接口在请求时候直接对接"),n("code",[t._v("experess")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"https://badge.fury.io/js/kvl",title:"NPM Version Badge",rel:"nofollow"}},[s("img",{attrs:{src:"https://badge.fury.io/js/kvl.svg",alt:"npm version",height:"18"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"https://img.shields.io/badge/node-%3E%3D6-brightgreen.svg",title:"Node Limitation",rel:"nofollow"}},[s("img",{attrs:{src:"https://img.shields.io/badge/node-%3E%3D6-brightgreen.svg",alt:"npm version",height:"18"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("kvl主要特征")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"框架进度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#框架进度","aria-hidden":"true"}},[this._v("#")]),this._v(" 框架进度")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("td",{attrs:{align:"center",width:"20%"}},[t._v("功能")]),t._v(" "),n("td",{attrs:{align:"center",width:"40%"}},[t._v("状态")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{attrs:{align:"center"}},[t._v("express")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("已完成")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("kvl以express为基础，通过ts特征来强化路由功能")])]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[t._v("typescript")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("已完成")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("完整的ts配置，实现开发环境监听代码自动重启服务")])]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[t._v("router")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("已完成")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("更清晰层次化的路由功能")])]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[t._v("interceptor")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("已完成")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("进行全局,类,接口性请求拦截")])]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[t._v("validation")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("待完善")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("验证接口所接受数据是否为符合规定的数据")])]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[t._v("Api interface")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("未开始")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("创建api文档")])]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[t._v("pm2")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("已完成")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("利用pm2官方api，实现简单的pm2服务")])]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[t._v("全局异常处理")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("已完成")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("接收在接口函数内所有的throw出得异常，支持自定义状态码")])]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[t._v("cli")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("已完成,待优化")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("基于node的cmd命令行工具")])]),t._v(" "),n("tr",[n("td",{attrs:{align:"center"}},[t._v("环境配置")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("已完成")]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v("自定义环境变量")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" kvl@latest -g\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"基础方式使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础方式使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础方式使用")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Kvl "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'kvl'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MainKvl "),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Router"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ValidationDone "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'kvl'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n@"),n("span",{attrs:{class:"token function"}},[t._v("Router")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("HelloWord")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Hello, world'")]),t._v("\n\n\t@"),n("span",{attrs:{class:"token function"}},[t._v("config")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/hello'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'hello'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("type")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'get'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("hello")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Kvl"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Kvl"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tres"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`<h1>")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("</h1>`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" app"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" httpServer "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("MainKvl")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tport"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("8080")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\trouter"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" HelloWord "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);