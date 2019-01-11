

kvl只是简单封装了express，而更丰满得功能皆是通过插件来实现，你可以来使用express插件，也可以创建kvl插件来丰富kvl。

kvl目前主要内置了validator(数据验证器),receive(数据接收器),interceptor(拦截器),Injectable(注入器)等插件


<table>	
	<thead >
		<tr>
			<td align="center" width="50%">插件</td>
			<td align="center" width="40%">功能</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td align="center">interceptor</td>
			<td align="center">用于进行接口拦截,权限控制</td>
		</tr>
		<tr>
			<td align="center">receive</td>
			<td align="center">接收通过post方式传进来得参数</td>
		</tr>
		<tr>
			<td align="center">validator</td>
			<td align="center">验证数据完整性</td>
		</tr>
		<tr>
			<td align="center">Injectable</td>
			<td align="center">注入器,路由间数据共享</td>
		</tr>
	</tbody>

</table>

## interceptor(拦截器)

在接口访问中，避免不了进行各种权限认证，正是各种权限保护着系统的正常运行，因此kvl内置了一个拦截器插件，用于保护接口的安全性

```typescript

import kvl from 'kvl';
import { Main ,Router, config } from 'kvl';

@Router({
	interceptor(req: kvl.Request, res: kvl.Response){
		if(!req.query.id){
			res.status(400).json({ code: 0, msg: '参数缺省' })
			//如果拦截住,禁止继续执行,设置return false
			return false;
		}
	}
})
class hello {
	@config({ type: 'get', url: '/getArticle' })
	private getArticle(req: kvl.Request, res: kvl.Response): void{
		res.send(`
			<h1>Hello world</h1>
		`)
	}
}

//拦截器支持async 模式，来进行异步操作
@Router({
	async interceptor(){}
})
//数组形式传参
@Router({
	interceptor: [function(){}]
})

```

## receive(数据接收器)

kvl扩展了一个接收post等参数得方法：receive(通过formidable插件实现)。  
注:receive仅实现了接收参数功能，未实现文件接收功能

```typescript

import kvl from 'kvl';
import { Main ,Router, config } from 'kvl';
@Router({})
class hello {
	@config({ type: 'get', url: '/getArticle' })
	private getArticle(req: kvl.Request, res: kvl.Response): void{
		//post等方式接收得参数默认存在req.body中
		res.json(req.body)
	}
}

//替换默认post接收方式
Main({
   async getData(request: kvl.Response){
        return { ... }
    },
})

//为接口单独设置解析方式
@config({ type: 'post', url: '/getArticle', getData(request: kvl.Response){ return {} } })
private getArticle(req: kvl.Request, res: kvl.Response): void{
	res.json(req.body)
}

```


## validator(数据验证器)

用于验证接口接收得参数完整性及是否符合要求

```typescript

import kvl from 'kvl';
import { Main ,Router, config } from 'kvl';


const articleValidation: kvl.Validation = {
	phone: {
		type: 'phone',
		required: true,
		name: '手机号',
		done(errpe: kvl.ValidationError, response: kvl.Response){
			response.statue(400).json({
                code: 0,
                msg: '发生了错误',
                err
            })
		}
	},
	/**
	 * 如果属性值没有done则执行articleValidation内的done，默认执行全局得done
	 */
	//done(errpe: kvl.ValidationError, response: kvl.Response){}
}

@Router({})
class hello {
	@config({ type: 'get', url: '/getUser', validation: articleValidation })
	private getArticle(req: kvl.Request, res: kvl.Response): void{
		res.json(req.query)
	}
}

/**
 * 为验证器添加type:phone类型
 */
Main({
	validationType: {
		phone: /^[1][3,4,5,6,7,8,9][0-9]{9}$/
	},
	//自定义错误默认回调
	validatorDone(error: kvl.ValidationError, response: kvl.Response){
		res.statue(400).json({ code: 0, error })
	}
})

```
验证器,get时候会自动判断req.query内的参数,post时候判断req.body内参数,你可以为@config添加validType字段，来改变默认的参数检查对象
```typescript

interface kvl.config {
	/**
	 * query -> req.query
	 * body -> req.body
	 * param -> req.params
	 * all -> { ...request.params, ...request.query, ...request.body }
	 */
	validType?: 'query' | 'body' | 'param' | 'all'
}

```

## Injectable

注入器，通过new Class方式，注入到不同router中


```typescript

import kvl from 'kvl';
import { Main ,Router, config } from 'kvl';

class UserInjectable{
	private config: any;
    constructor(config: any){
        this.config = config;
    }
    public name2: string = 'cc';
}


@Router({})
class hello extends kvl {
	
	@Injectable('text-injectable') private textInjectable: any;
	
	onInit(){
		console.log(this.textInjectable)
	}

}


Main({
	router: [ hello ],
	injectable: [ { class: UserInjectable, name: 'text-injectable', data: { name: 'tom' } } ]
})


```