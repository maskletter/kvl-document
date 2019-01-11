
## 全局异常

kvl内置了一个错误处理回调，方便使用者在接口当初通过throw抛出异常，来设定统一的错误处理来返给用户

```typescript
import kvl from 'kvl';
import { Main, Router, config } from 'kvl';

@Router({})
class HellWorld{

	@config({ type: 'get', url: '/hello-world' })
	private test(req: kvl.Request, res: kvl.Response): void {
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

Main({
	port: 8080,
	//设置了全局错误处理，所有throw出的错误都会经过此回调，包含引代码异常引发的错误
	throw(request: kvl.Request, response: kvl.Response, status: number, error: Error){
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

import kvl from 'kvl';
import { Main ,Router, Global } from 'kvl';

@Router({})
class HelloRouter{

	/**
	 * 通过添加@Global()方式，可以为class内任意参数设置为全局对象
	 */
	@Global() private global: any;

	onInit(): void {
		console.log(this.global.name)
	}

}

//你可以在初始化kvl时候为global复制
Main({
	router: [],
	global: {
		name: 'tom'
	}
})


```

## @Router

用于创建路由模块

```typescript
import kvl from 'kvl';
import { Main ,Router, config, data } from 'kvl';


@Router({
	url: '/second'
}) 
class World{
	
	/**
	 * 路由的访问路径类会继承父类的url
	 * ---> http://localhost:8080/base/first/second/world
	 */
	@config({ url: '/world', name: 'world', type: 'get' })
	private world(req: kvl.Request, res: kvl.Response): void {
		res.end(`<h1>world</h1>`)
	}

}

/**
 * 给子路由传递参数,
 * 	
 *  子路由可以通过@data() private parentData: any;方式获取到父路由传递进来得参数
 *
 */
@Router({
	router: [ { class: HelloWorld, data: { name: 'Hello,world' } } ],
})


Main({
	baseUrl: '/base',
	port: 8080,
	router: [ HelloWord ],
})
```
## @config

通过@config来创建路由访问

```typescript
import kvl from 'kvl';
import { Main ,Router, config } from 'kvl';

@Router({})
class HelloRouter{

	@config({ type: 'get', url: '/hello' })
	private hello(req: kvl.Request, res: kvl.Response): void {
		res.end('<h1>Hello,world</h1>')
	}

	private b(req: kvl.Request, res: kvl.Response): void{
		res.end('<h1>Hello,world</h1>')
	}

}



```


## 静态服务器

 `kvl` 的静态服务器是利用了`express`的内置中间件`express.static`创建的，更多详情可以参考`serve-static`库。

```typescript
//kvl配置静态服务器很简单，只需要设置一个static参数级可
import kvl from 'kvl';
import { Main } from 'kvl';
Main({
	port: 8080,
	static: path.join(process.cwd(), 'assets'),
})

```


## 设置header

```typescript
Main({
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type,Content-Length, aa, Authorization, Accept,X-Requested-With, authkeys',
	}
})
```

## https访问

配置htttps访问,如果添加了https对象，`kvl`会自动创建https服务器

```typescript
Main({
	//如果初始化时候添加了https值，kvl就会自动创建一个https服务
	https: {
		//更多参数说明，请查阅https.createServer
		cert: fs.readFileSync('./https/test.crt'),
		key: fs.readFileSync('./https/test.key'),
		port: 443
	},
})
```


## 文件上传

 `kvl` 是使用formidable来解析的post，默认的是忽略全部文件的，因此你可以从新定义一个解析方法，来替换全局的方法或者某个方法

```typescript


const UploadRpost = (req: kvl.Request) => {
	const form = new formidable.IncomingForm();
	form.uploadDir='tmp'
	form.parse(req, function(err: any, fields: any, files: any) {
		if(err){
			throw err
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
	      	resolve(fields);
        });
    });
}

@config({ url: '/upload', name: '测试上传', type: 'post', getData: UploadRpost })
private upload(req: kvl.Request, res: kvl.Response): void{
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
 * 因此，为了更好的使用ts，避免深层目录的不断地【../】，kvl在ts转换时候修改了require引用的文件路径
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


