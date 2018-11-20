

## MainKvl

Kvl框架启动总入口，一个项目初始化一个kvl服务

<br>

```typescript

import { MainKvl ,Router, config, ValidationDone } from 'kvl';

MainKvl({
	port: 8080,
	router: [ HelloWord ],
})
```

MainKvl返回包含三个参数


```typescript

import * as Kvl from 'kvl';

const MainKvlConfig = {};

const { app, httpServer, httpsServer } = MainKvl(MainKvlConfig);

//app为kvl内部创建的express()对象，方便使用者绕过kvl直接调用express
//httpServer为通过http.createServer创建的http对象
//httpsServer为通过https.createServer创建的https对象(注意，如果为MainKvl配置了https才会返回该对象)

```

MainKvl参数说明


```typescript
const MainKvlConfig: Kvl.InitConfig = {
	port: 8080,						//服务端口号
	baseUrl: '',					//服务下所有路由根路径
	router: [],						//路由class对象，@Router生成
	use: [],						//express的use方法数组
	static: '',						//静态服务器，未设置则不启用
	https: {},						//https参数，详见Https.createServer
	interceptor: function(){},		//全局拦截器
	useThis: true,					//class方法内的this对象是否指向当前的class，通过apply实现
	throw: function(){} 			//处理服务接口内的错误
}
MainKvlConfig.throw = function(request: Kvl.Request, response: Kvl.Response, status: number, error: Error){
	/**
	 * status为错误的状态码,默认为500，如果想自行设置可以通过->
	 * 			throw { status: 400, error: new Error('发生了错误') }
	 * 		--->来设置状态码
	 * error为抛出的错误异常
	 */
}

```

## Router

```typescript

@Router({
	name: '',						//类的名字，区分定义使用
	url: '',						//类下所有包括router下的请求都会带有此url
	router: [],						//路由class对象，@Router生成
	interceptor: function(){},		//类拦截器
	interceptorLevel: 1				//是否禁用全局拦截器，1为禁止，默认不禁止
}) 

```

## config

```typescript

@config({
	name: '',						//请求的名字，区分定义使用
	url: '',						//请求的url
	type: 'get',					//请求的方式
	interceptor: function(){},		//拦截器
	interceptorLevel: 1				//是否拦截器，1为抛弃全局得拦截器,2为抛弃所在class得拦截器和全局得拦截器,3为抛弃所在class得拦截器，但是保留全局得拦截器
	validation: {} 					数据效验器，验证数据是否正确
}) 

```