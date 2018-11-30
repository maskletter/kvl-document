


## Kvl(一个简单的基于express的封装框架)

基于 `express` ，全面兼容 `express` 所有方法及中间键，两者可并行使用，使用 `typescript` 实现，加强js数据类型判断，统一的全局接口错误处理回调，采用优先加载方式，在服务启动时候，将所有路由加载进 `express.router` 当中，避免了在无用的代码加载。


interceptor拦截器，是Kvl中一大特征，用于进行请求拦截，如验证登录等，他会再请求进入这个路由的时候执行。


Validation验证器(功能待完善)，用于进行接口的参数验证，通过@config内的validation参数添加

<br />


<table>	
	<thead>
		<tr>
			<td align="center" width="20%">功能</td>
			<td align="center" width="40%">状态</td>
			<td align="center">说明</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td align="center">express</td>
			<td align="center">已完成</td>
			<td align="center">--</td>
		</tr>
		<tr>
			<td align="center">typescript</td>
			<td align="center">已完成</td>
			<td align="center">--</td>
		</tr>
		<tr>
			<td align="center">router</td>
			<td align="center">已完成</td>
			<td align="center">--</td>
		</tr>
		<tr>
			<td align="center">interceptor</td>
			<td align="center">已完成</td>
			<td align="center">--</td>
		</tr>
		<tr>
			<td align="center">validation</td>
			<td align="center">待完善</td>
			<td align="center">--</td>
		</tr>
		<tr>
			<td align="center">生成api接口文档</td>
			<td align="center">未开始</td>
			<td align="center">--</td>
		</tr>
		<tr>
			<td align="center">pm2</td>
			<td align="center">已完成</td>
			<td align="center">--</td>
		</tr>
		<tr>
			<td align="center">全局异常处理</td>
			<td align="center">已完成</td>
			<td align="center">--</td>
		</tr>
		<tr>
			<td align="center">环境配置</td>
			<td align="center">已完成</td>
			<td align="center">--</td>
		</tr>
	</tbody>


</table>

<br>

通过Npm 方式安装kvl
```
npm install kvl@latest -g
```
<br>


基础方式使用
```typescript

import * as Kvl from 'kvl';
import { MainKvl ,Router, config, ValidationDone } from 'kvl';
@Router({}) 
class HelloWord{

	private msg: string = 'Hello, world'

	@config({ url: '/hello', name: 'hello', type: 'get' })
	private hello(req: Kvl.Request, res: Kvl.Response): void {
		res.end(`<h1>${this.msg}</h1>`)
	}

}
const { app, httpServer } = MainKvl({
	port: 8080,
	router: [ HelloWord ],
})
```