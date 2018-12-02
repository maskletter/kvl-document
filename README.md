


## Kvl(一个简单的基于express的封装框架)

基于 `express` ，全面兼容 `express` 所有方法及中间件，两者可并行使用，使用 `typescript` 实现，加强js数据类型判断，统一的全局接口错误处理回调，采用优先加载方式，在服务启动时候，将所有路由加载进 `express.router` 当中，使接口在请求时候直接对接experess。


interceptor拦截器，是Kvl中一大特征，用于进行请求拦截，如验证登录等，他会再请求进入这个路由的时候执行。


Validation验证器(功能待完善)，用于进行接口的参数验证，通过@config内的validation参数添加

<br />

#### 框架进度

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
			<td align="center">kvl以express为基础，通过ts特征来强化路由功能</td>
		</tr>
		<tr>
			<td align="center">typescript</td>
			<td align="center">已完成</td>
			<td align="center">完整的ts配置，实现开发环境监听代码自动重启服务</td>
		</tr>
		<tr>
			<td align="center">router</td>
			<td align="center">已完成</td>
			<td align="center">更清晰层次化的路由功能</td>
		</tr>
		<tr>
			<td align="center">interceptor</td>
			<td align="center">已完成</td>
			<td align="center">进行全局,类,接口性请求拦截</td>
		</tr>
		<tr>
			<td align="center">validation</td>
			<td align="center">待完善</td>
			<td align="center">验证接口所接受数据是否为符合规定的数据</td>
		</tr>
		<tr>
			<td align="center">Api interface</td>
			<td align="center">未开始</td>
			<td align="center">创建api文档</td>
		</tr>
		<tr>
			<td align="center">pm2</td>
			<td align="center">已完成</td>
			<td align="center">利用pm2官方api，实现简单的pm2服务</td>
		</tr>
		<tr>
			<td align="center">全局异常处理</td>
			<td align="center">已完成</td>
			<td align="center">接收在接口函数内所有的throw出得异常，支持自定义状态码</td>
		</tr>
		<tr>
			<td align="center">cli</td>
			<td align="center">已完成,待优化</td>
			<td align="center">基于node的cmd命令行工具</td>
		</tr>
		<tr>
			<td align="center">环境配置</td>
			<td align="center">已完成</td>
			<td align="center">自定义环境变量</td>
		</tr>
	</tbody>


</table>

<br>

通过Npm 方式安装kvl
```
$ npm install kvl@latest -g
```
<br>
因为npm全局安装时候会出现[devDependencies]内的包未安装的情况，所以有时候会进行手动初始化一下全局kvl

```cmd
$ kvl config init
/**
 * macos/linux需要加sudo 命令安装
 * sudo kvl config init
 */
```

<br>


#### 基础方式使用
```typescript

import Kvl from 'kvl';
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