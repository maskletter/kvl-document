
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
## 状态管理

kvl内创建了一个数据共享服务(global)

```typescript

import * as Kvl from 'kvl';
import { MainKvl ,Router, Global } from 'kvl';

@Router({})
class HelloRouter{

	/**
	 * 通过添加@Global()方式，可以为class内任意参数设置为全局对象
	 * *需要注意的是，class必须是在useThis为true的情况下，才可以获取到全局对象
	 */
	@Global() private global: any;

	onInit(): void {
		console.log(this.global.name)
	}

}

//你可以在初始化kvl时候为global复制
MainKvl({
	router: [],
	global: {
		name: 'tom'
	}
})


```

## @Router

根据`typescript`的语法，利用装饰器功能，创建的一套路由规则，通过此功能可以创建出更层次性的路径。

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
	 * --> router: [ { router: World, enable: true }, /*其他类*/ ]
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
## @config

kvl仿照了一下其他语言的接口创建形式，通过@装饰符的形式来创建

```typescript
import * as Kvl from 'kvl';
import { MainKvl ,Router, config } from 'kvl';

@Router({})
class HelloRouter{

	@config({ type: 'get', url: '/hello' })
	private hello(req: Kvl.Request, res: Kvl.Response): void {
		res.end('<h1>Hello,world</h1>')
	}

	@config({
		type: 'get',					//请求方式，也可以为["get","post","put"]形式创建多种请求
		url: '/b',						//访问路径
		name: '标注',					//为这个路由添加注释
		postResolve: function(){},		//添加post解析方式(会替换全局)
		validation： {}，				//数据拦截器
		interceptor: [],				//添加拦截器，也可以为function(){}
		interceptorLevel: 1				//拦截器级别
	})
	private b(req: Kvl.Request, res: Kvl.Response): void{
		res.end('<h1>Hello,world</h1>')
	}

}



```


## onInit与onAfter

kvl路由内置了两个事件,onInit与onAfter

```typescript
@Router({
	url: '/test'
}) 
class World{
	
	onInit(): void {
		//在组件初始化时候执行此方法
	}

	onAfter(): void {
		//在class类路由加载完成之后执行此方法
	}

}
```

## interceptor拦截器

interceptor可以用来进行接口请求控制，如，一些用户接口需要登录才能使用，就可以在这些接口上添加interceptor来进行拦截。

interceptor可以添加到MainKvl，Router,config上，它可以是一个function，也可以是一个数组Interceptor[]。
```txt
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


## validation验证器

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


/**
 * 可以通过自定义验证器类型的方式，来丰富验证器中的type类型
 */
import { ValidationType } from 'kvl';
//这里定义了一个价格类型
ValidationType.price = /^[0-9]+([.]{1}[0-9]{1,2})?$/

```

## 静态服务器

 `kvl` 的静态服务器是利用了`express`的内置中间件`express.static`创建的，更多详情可以参考`serve-static`库。

```typescript
//kvl配置静态服务器很简单，只需要设置一个static参数级可
import * as Kvl from 'kvl';
import { MainKvl } from 'kvl';
MainKvl({
	port: 8080,
	static: path.join(process.cwd(), 'assets'),
})

```


## 全局header

设置公共头部

```typescript
MainKvl({
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type,Content-Length, aa, Authorization, Accept,X-Requested-With, authkeys',
	}
})
```

## https访问

配置htttps访问,如果添加了https对象，`kvl`会自动创建https服务器

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


## 配置this指向

虽然路由方法是在一个class中，但是因为代码运行原理导致路由内this的默认执行并非所在class，而是指向的路由的配置对象，所以kvl内通过apply方法使this指向了当前class，如果你想禁止指向class，而可以通过全局或者class内的useThis设置

```typescript
MainKvl({
	useThis: false			//默认为true，禁止全局的this指向
})

//当禁止了全局的this指向之后，此时如果你需要每个class内的路由方法this对象指向当前class，可以为路由配置useThis对象
@Router({
	useThis: true
})
class TextUseThis{

}

//注意，请勿为class路由类添加__private_void_process方法，此方法为kvl保留关键方法

```


## 自定义全局post解析方式

因为post的特殊，导致接收参数必须要进行一些操作，才能正确获取到，因此为了获取方便，kvl内部封装了一个简易的post参数解析方法，

```typescript
//此方法为系统内置post解析方式
function DefaultPost(req, next){
	const form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		if(err){
			next();
			return;
		}
      	next(fields);
    });
}

//使用者可以通过配置全局参数来改变post的解析方式，代码示例如下
MainKvl({
	postResolve(req, next): void {
		next({...arguments})
	}
})

//或者为某一个接口单独配置post解析
@config({ 
	url: '/hello', 
	name: 'hello', t
	type: ['get','post'], 
	postResolve: function(req, next){ 
		next({...arguments}) 
	} 
})

//需要注意的是，kvl会把解析出来的参数，融合进req.query中

```


## 文件上传

 `kvl` 是使用formidable来解析的post，默认的是忽略全部文件的，因此你可以从新定义一个解析方法，来替换全局的方法

```typescript
//一个简单的demo
const UploadRost = function (req: Kvl.Request, next: Function): void {
	const form = new formidable.IncomingForm();
	form.uploadDir='tmp'
	form.parse(req, function(err: any, fields: any, files: any) {
		if(err){
			next();
			return;
		}
		const extname: string = path.extname(files.upload.name);
		const filename: any = new Date().getTime() + Math.random();
		const oldpath: string = files.upload.path;
		const newpath: string = path.resolve(process.cwd(), 'assets', filename+extname)

		fs.rename(oldpath,newpath,function (err) {
            if(err){
                throw { status: 400, error: new Error('文件上传出错') };
            }
            fields.upload = newpath;
	      	next(fields);
        });
    });
}

@config({ url: '/upload', name: '测试上传', type: 'post', postResolve: UploadRpost })
private upload(req: Kvl.Request, res: Kvl.Response): void{
	res.end('success')
}

```


## 运行环境配置

kvl的自定义配置不需要在专门创建一个配置文件，你可以在package.json内的"kvl"中进行配置

kvl内置了一个生成环境与测试环境

```typescript
	
/**
 * process.env.kvl_name是默认的环境变量
 * 测试环境输出dev
 * 生成环境输出build,
 * 
 * 必须是通过kvl serve启动生成服务器时候，环境变量才会载入进去，直接通过pm2 start形式不会载入进kvl环境配置，需另行定义
 */
console.log(process.env.kvl_name)

//为项目创建更多的环境配置，你可以在package.json的kvl.env内进行
{
	"kvl": {
		"env": {
			"dev": {
				"status": "dev"
			},
			"build": {
				"status": "build"
			},
			"beta": {
				"status": "beta"
			}
		}
	}
}

/**
 * kvl dev会自动运行env内的dev设置的参数
 * kvl build会自动运行env内的build设置的参数
 */

/**
 * 你可以通过命令行启动时候添加参数来指定所需的环境
 * 通过--mode，系统会自动寻找kvl.env下指定的参数载入进环境中
 */
$ kvl dev --mode beta


```



## require内的路径问题

nodejs的require并不能设置引用的根路径，这就导致了ts内编写时候的路径寻找不到包文件
```typescript
/**
 * 例如tsconfig.json里配置的baseUrl为【src】
 */
import Tool from 'src/tool'

/**
 * 这种方式转换成的js代码是-->require('src/tool')
 * 当Nodejs运行之后，这种路径会无法解析，导致抛出异常
 * 因此，为了更好的使用ts，避免深层目录的不断地【../】，kvl在ts转换时候适当的就该了require引用的文件路径
 * 被转换成下例代码
 */
const Tool = reuqire(process.cwd()+"/dist/src/tool");
//dist为用户在tsconfig里配置的outDir

/**
 * 如果你的项目是固定到一个地方，可以禁止process.cwd()方式动态获取，改为固定url路径
 */
const Tool = require("G:\/wwroot\/xxxx\/bbbbb\/demo\/dist\/src\/tool");

/**
 * 将路径引用从动态改为静态，只需要在package.json的kvl.staticRequire设置为true即可
 */

/**
[import Tool from 'src/tool'] --------->  [require('src/tool')]  --------->  

 
	[检查src目录下是否存在tool.js/tool目录/tool.ts]  ----->

		如果存在，进行动态或者完整路径转换

		如果不存在, 保存原状，让nodejs进行检查路径
                    								
 */



```




## 自定义PM2配置

kvl的serve服务是利用了pm2的api，因此更多关于服务器配置问题，可以参考PM2

```typescript

//自定义的pm2配置信息在package.json的kvl.pm2内，如果创建了，会被自动加载进服务中

{
	"kvl": {
	    "pm2": {
	    	"name": "hello,world"
	    }
	}
}

```



## 关闭错误系统通知

kvl的在dev模式下，编译出错时会向系统发出一个错误通知，以提醒用户，这个功能可以在package.json的kvl内设置禁止提醒

```typescript

{
	"kvl": {
	    "notice": false
	}
}

```


