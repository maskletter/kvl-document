(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"express接入kvl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#express接入kvl","aria-hidden":"true"}},[s._v("#")]),s._v(" express接入kvl")]),s._v(" "),n("p",[s._v("如果你现有一个express项目,并且想使用kvl,可以通过给kvl传入一个express实例化对象的方式,让kvl自动接入现在现有项目,实现无缝接入")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("需要注意的是,通过注入express的方式,无法自定义端口号,不支持设置headers,不支持kvl.Request.router方法")]),s._v(" "),n("hr"),s._v(" "),n("br"),s._v(" "),n("div",{staticClass:"language-typescript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" kvl "),n("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'kvl'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Main "),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Router"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" config "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'kvl'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" express "),n("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'express'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" session "),n("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'express-session'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" compression "),n("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'compression'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("express")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" serve "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" http"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nserve"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("listen")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("5544")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),n("span",{attrs:{class:"token function"}},[s._v("Router")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),n("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[s._v("HelloWord")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t"),n("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" msg"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'Hello, world'")]),s._v("\n\n\t@"),n("span",{attrs:{class:"token function"}},[s._v("config")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" url"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'/hello'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'hello'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("type")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'get'")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("hello")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kvl"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Request"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kvl"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Response"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tres"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("end")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[s._v("`<h1>")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),n("span",{attrs:{class:"token keyword"}},[s._v("this")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{attrs:{class:"token string"}},[s._v("</h1>`")])]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("//这里返回的是传入的express实例化对象")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("Main")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tbaseUrl"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'/express'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\trouter"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" HelloWord "),n("span",{attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),n("span",{attrs:{class:"token comment"}},[s._v("//设置express")]),s._v("\n\t"),n("span",{attrs:{class:"token function"}},[s._v("express")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Application"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tapp"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("use")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token function"}},[s._v("compression")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\tapp"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token function"}},[s._v("use")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token function"}},[s._v("session")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\tsecret"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'secret'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\tresave"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("false")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\tsaveUninitialized"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("true")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\tcookie "),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\tmaxAge "),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("60")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("30")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// 设置 session 的有效时间，单位毫秒")]),s._v("\n\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" app"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])])])}],!1,null,null,null);e.options.__file="express.md";t.default=e.exports}}]);