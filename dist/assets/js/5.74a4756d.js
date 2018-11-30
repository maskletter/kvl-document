(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"kvl服务利用了pm2的api实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kvl服务利用了pm2的api实现","aria-hidden":"true"}},[a._v("#")]),a._v(" kvl服务利用了pm2的api实现")]),a._v(" "),s("p",[a._v("简单实现了pm2的list，show，start，logs，kill，reload，disconnect等方法")]),a._v(" "),s("h3",{attrs:{id:"快速创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速创建","aria-hidden":"true"}},[a._v("#")]),a._v(" 快速创建")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("//kvl init [项目目录]")]),a._v("\n$ kvl init test"),s("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("kvl\n")])])]),s("h3",{attrs:{id:"开发环境启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发环境启动")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[a._v("$ kvl dev\n"),s("span",{attrs:{class:"token comment"}},[a._v("//添加环境配置")]),a._v("\n$ kvl dev "),s("span",{attrs:{class:"token operator"}},[a._v("--")]),a._v("mode beta\n"),s("span",{attrs:{class:"token comment"}},[a._v("//从新编译代码并结束进程(主要是给serve用的)")]),a._v("\n$ kvl dev "),s("span",{attrs:{class:"token operator"}},[a._v("--")]),a._v("build\n")])])]),s("h3",{attrs:{id:"生产环境启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生产环境启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 生产环境启动")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[a._v("$ kvl server\n"),s("span",{attrs:{class:"token comment"}},[a._v("//添加环境配置")]),a._v("\n$ kvl server "),s("span",{attrs:{class:"token operator"}},[a._v("--")]),a._v("mode beta\n"),s("span",{attrs:{class:"token comment"}},[a._v("//添加集群模式")]),a._v("\n$ kvl server "),s("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("i "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("cpu数量"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{attrs:{class:"token comment"}},[a._v("//从新编译代码并启动")]),a._v("\n$ kvl server "),s("span",{attrs:{class:"token operator"}},[a._v("--")]),a._v("build\n")])])]),s("h3",{attrs:{id:"查看所有已启动的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所有已启动的服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看所有已启动的服务")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[a._v("$ kvl list\n$ kvl ls\n")])])]),s("h3",{attrs:{id:"查看具体服务信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看具体服务信息","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看具体服务信息")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("//$ kvl show [id|name]")]),a._v("\n$ kvl show "),s("span",{attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("h3",{attrs:{id:"查看日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看日志","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看日志")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("//kvl logs [id|name]")]),a._v("\n$ kvl logs "),s("span",{attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("h3",{attrs:{id:"杀死全部服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#杀死全部服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 杀死全部服务")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[a._v("$ kvl kill\n")])])]),s("h3",{attrs:{id:"关闭指定服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭指定服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 关闭指定服务")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("//kvl stop [id|name]")]),a._v("\n$ kvl stop "),s("span",{attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("h3",{attrs:{id:"重启服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 重启服务")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("//kvl reload [id|name]")]),a._v("\n$ kvl reload "),s("span",{attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("h3",{attrs:{id:"断开与pm2守护进程的连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#断开与pm2守护进程的连接","aria-hidden":"true"}},[a._v("#")]),a._v(" 断开与pm2守护进程的连接")]),a._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[a._v("$ kvl disconnect\n")])])])])}],!1,null,null,null);r.options.__file="cli.md";t.default=r.exports}}]);