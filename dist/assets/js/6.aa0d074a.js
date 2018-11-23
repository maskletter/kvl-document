(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"mainkvl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mainkvl","aria-hidden":"true"}},[t._v("#")]),t._v(" MainKvl")]),t._v(" "),a("p",[t._v("Kvl框架启动总入口，一个项目初始化一个kvl服务")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MainKvl "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Router"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ValidationDone "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'kvl'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("MainKvl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tport"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8080")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\trouter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" HelloWord "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("MainKvl返回包含三个参数")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Kvl "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'kvl'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MainKvlConfig "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" app"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" httpServer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" httpsServer "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("MainKvl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainKvlConfig"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//app为kvl内部创建的express()对象，方便使用者绕过kvl直接调用express")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//httpServer为通过http.createServer创建的http对象")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//httpsServer为通过https.createServer创建的https对象(注意，如果为MainKvl配置了https才会返回该对象)")]),t._v("\n\n")])])]),a("p",[t._v("MainKvl参数说明")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MainKvlConfig"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Kvl"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitConfig "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tport"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8080")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//服务端口号")]),t._v("\n\tbaseUrl"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//服务下所有路由根路径")]),t._v("\n\trouter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//路由class对象，@Router生成")]),t._v("\n\tuse"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//express的use方法数组")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//静态服务器，未设置则不启用")]),t._v("\n\thttps"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//https参数，详见Https.createServer")]),t._v("\n\tinterceptor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//全局拦截器")]),t._v("\n\tuseThis"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//class方法内的this对象是否指向当前的class，通过apply实现")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//处理服务接口内的错误")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nMainKvlConfig"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("throw")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Kvl"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Kvl"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n\t * status为错误的状态码,默认为500，如果想自行设置可以通过->\n\t * \t\t\tthrow { status: 400, error: new Error('发生了错误') }\n\t * \t\t---\x3e来设置状态码\n\t * error为抛出的错误异常\n\t */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router","aria-hidden":"true"}},[t._v("#")]),t._v(" Router")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("\n@"),a("span",{attrs:{class:"token function"}},[t._v("Router")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tname"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//类的名字，区分定义使用")]),t._v("\n\turl"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//类下所有包括router下的请求都会带有此url")]),t._v("\n\trouter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//路由class对象，@Router生成")]),t._v("\n\tinterceptor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//类拦截器")]),t._v("\n\tinterceptorLevel"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//是否禁用全局拦截器，1为禁止，默认不禁止")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n")])])]),a("h2",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[t._v("#")]),t._v(" config")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("\n@"),a("span",{attrs:{class:"token function"}},[t._v("config")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tname"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//请求的名字，区分定义使用")]),t._v("\n\turl"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//请求的url")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'get'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//请求的方式")]),t._v("\n\tinterceptor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//拦截器")]),t._v("\n\tinterceptorLevel"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//是否拦截器，1为抛弃全局得拦截器,2为抛弃所在class得拦截器和全局得拦截器,3为抛弃所在class得拦截器，但是保留全局得拦截器")]),t._v("\n\tvalidation"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \t\t\t\t\t数据效验器，验证数据是否正确\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n")])])])])}],!1,null,null,null);o.options.__file="init.md";s.default=o.exports}}]);