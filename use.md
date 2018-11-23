
## 全局异常

Kvl内置了一个错误处理回调，方便使用者在接口当初通过throw抛出异常，来设定统一的错误处理来返给用户

```typescript
import * as Kvl from 'kvl';
import { MainKvl, Router, config } from 'kvl';

@Router({})
class HellWorld{

	@config({ type: 'get', url: '/hello-world' })
	private test(req: Kvl.Request, res: Kvl.Response): void {
		if(req.query.index == 123){
			/**
			 * 这里自定义了一个错误状态码
			 * 也可以使用快速模式, throw '测试抛出异常',此时status默认是500
			 */
			throw { status: 400, error: '测试抛出异常' };
		}
		res.json({ code: 1, msg: '返回成功' })
	} 

}

MainKvl({
	port: 8080,
	//设置了全局错误处理，所有throw出的错误都会经过此回调，包含引代码异常引发的错误
	throw(request: Kvl.Request, response: Kvl.Response, status: number, error: Error){
		/**
		 * status是状态码
		 * error是错误信息
		 */
		response.status(status).sendFile(path.resolve(__dirname,'../assets/error/error.html'));
	}
})


```

## Router路由

根据`typescript`的语法，利用装饰器功能，创建的一套路由规则，通过此功能可以创建多级路由，以及实现更清晰路的由路径。

```typescript
import * as Kvl from 'kvl';
import { MainKvl ,Router, config } from 'kvl';


@Router({
	url: '/second'
}) 
class World{
	
	/**
	 * 路由的访问路径类会继承父类的url
	 * ---> http://localhost:8080/base/first/second/world
	 */
	@config({ url: '/world', name: 'world', type: 'get' })
	private world(req: Kvl.Request, res: Kvl.Response): void {
		res.end(`<h1>world</h1>`)
	}

}

@Router({
	url: '/first'
	/**
	 * 说明下interceptor拦截器，也会应用到router数组的类下接口中，并延续继承
	 * 如果不想那个类继承父类中的interceptor，可以这样设置
	 * --> router: [ { router: World, enableInterceptor: true }, /*其他类*/ ]
	 */
	router: [ World ],
	interceptor: function(req: Kvl.Request, res: Kvl.Response, next: Function){
		console.log('经过了first拦截器')
		next();
	}
}) 
class Hello{
	
	/**
	 * 路由的访问路径是全局url+类url
	 * ---> http://localhost:8080/base/first/hello
	 */
	@config({ url: '/hello', name: 'hello', type: 'get' })
	private hello(req: Kvl.Request, res: Kvl.Response): void {
		res.end(`<h1>Hello</h1>`)
	}

}
const { app, httpServer } = MainKvl({
	baseUrl: '/base',
	port: 8080,
	router: [ HelloWord ],
})
```

## interceptor拦截器的使用

Kvl并没有改变太多的`express`使用，它主要是体现在了语法方面，充分使用了typescript语言特征，其中`interceptor`是kvl内为数不多的几个特征之一，interceptor可以用来进行接口请求控制，如，一些用户接口需要登录才能使用，就可以在这些接口上添加interceptor来进行拦截。

interceptor可以添加到MainKvl，Router,config上，它可以是一个function，也可以是一个数组[function]。
```
当然，既然可以全局和类加，那势必就有一些不需要经过这些拦截器的请求，
-- 给@Router的参数添加interceptorLevel: 1，表示该类下所有接口都不通过全局拦截器
----- 给@config的参数添加interceptorLevel：
 		 1： 抛弃全局得拦截器
		 2： 抛弃所在class得拦截器和全局得拦截器
		 3： 抛弃所在class得拦截器，但是保留全局得拦截器
```

```typescript
import * as Kvl from 'kvl';
import { MainKvl, Router, config } from 'kvl';

@Router({
	interceptor: [
		function(request: Kvl.Request, response: Kvl.Response, next: Function){ 
			console.log('经过了类拦截器');
			next(); 
		}
	]
})
class HellWorld{

	@config({ type: 'get', url: '/hello-world' })
	private test(req: Kvl.Request, res: Kvl.Response): void {
		res.json({ code: 1, msg: '返回成功' })
	} 

}

MainKvl({
	port: 8080,
	interceptor: function(request: Kvl.Request, response: Kvl.Response, next: Function){ 
		console.log('经过了全局拦截器');
		next(); 
	}
})


```


## validation验证器的使用

接口请求中，必然会有很多的需要验证接受到的参数是否正确，以此kvl中内置了一个简易的验证器，用来验证参数是否符合规范
(此接口还在调整中，不稳定，但是api会保持不变)

```typescript
import * as Kvl from 'kvl';
import { MainKvl, Router, config } from 'kvl';

/**
 * 如果没有为validation添加done验证器，那么validation的错误回调会走全局的验证器错误回调
 */
const validation: Kvl.Validation = {
	name: { 						//参数名字
		type: 'string',				//类型
		required: true,				//是否必填
		name: '用户名'				//中文参数名
	}, 
	age: { 
		type: 'number',
		required: false,
		name: '年龄',
		done: function(err: Kvl.ValidationError, response: Kvl.Response) {
			//可以自定义错误的返回消息
			response.json({
				code: 0,
				msg: '年龄格式不正确呦'
			})
		} 
	},
	phone: { 
		type: 'phone',
		name: '手机号'
	},
	done: function (err: Kvl.ValidationError, response: Kvl.Response) {
		//验证器的错误返回消息，仅适用于此验证器
		response.json({
			code: 0,
			msg: err.errorMsg
		})
	},
	//禁用拦截器
	disable: true
}

/**
 * 如果validation没有done，或者单独的参数中没有done的话，系统会走默认的拦截器错误回调
 */
function ValidationDone(err, response){
	response.json({ code: 0, msg: err })
}

/**
 * 如果你想修改全局验证器错误回调，可以通过ValidationDone函数设置
 */
import { ValidationDone } from 'kvl';
ValidationDone((error, response) => {
	response.json({
		code: 0,
		msg: error.errorMsg,
		text: '自定义了一个错误消息'
	})
})



```

## 静态服务器的使用

kvl的静态服务器是利用了express的内置中间件express.static创建的，更多详情可以参考serve-static库。

```typescript
//kvl配置静态服务器很简单，只需要设置一个static参数级可
import * as Kvl from 'kvl';
import { MainKvl } from 'kvl';
MainKvl({
	port: 8080,
	static: path.join(process.cwd(), 'assets'),
})

```

## 与express并行使用

Kvl并不是一个从头到尾全新的一个nodejs框架，他是简单的封装了express方法，添加了typescript支持，因此所有的express方法在kvl里都是可以被直接调用的。

```typescript

import { MainKvl } from 'kvl';
//httpsServer仅限于配置了https才会返回
const { app, httpServer /*, httpsServer*/ } = MainKvl({
	port: 8080
})

/**
 * app是express对象,httpServer是http对象, httpsServer是https对象
 */
//app.use()
app.get('/get-express', function(request: Kvl.Request, response: Kvl.Response) {

})

/**
 * 快速配置express的use
 */
import * as session from 'express-session';
import * as compression from 'compression';
MainKvl({
	//use内的数组对象会被填充到express的use中
	use: [
		//配置sessiobn
		session({
		  secret: 'keyboard cat',
		  resave: false,
		  saveUninitialized: true
		}),
		//配置gzip
		compression()
	]
})

// Kvl.Request和Kvl.Response拓展自express的Request和Kvl与Response

```

## 设置全局header


```typescript
MainKvl({
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type,Content-Length, aa, Authorization, Accept,X-Requested-With, authkeys',
	}
})
```

## 配置https访问


```typescript
MainKvl({
	//如果初始化时候添加了https值，kvl就会自动创建一个https服务
	https: {
		//更多参数说明，请查阅https.createServer
		cert: fs.readFileSync('./https/test.crt'),
		key: fs.readFileSync('./https/test.key'),
		port: 443
	},
})
```



