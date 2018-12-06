


## Kvl(一个基于express/ts的Nodejs框架)

基于 `express` ，兼容 `express` 所有方法及中间件，两者可并行使用，使用 `typescript` 实现，内置pm2基础服务调用，统一的全局接口错误处理回调，采用优先加载方式，在服务启动时候，将所有路由加载进 `express.router` 当中，使接口在请求时候直接对接`experess`。

<a href="https://badge.fury.io/js/kvl" title="NPM Version Badge" rel="nofollow">
   <img src="https://badge.fury.io/js/kvl.svg" alt="npm version" height="18">
</a>
<a href="https://img.shields.io/badge/node-%3E%3D6-brightgreen.svg" title="Node Limitation" rel="nofollow">
   <img src="https://img.shields.io/badge/node-%3E%3D6-brightgreen.svg" alt="npm version" height="18">
</a>

<br>
<br>

---

> kvl主要特征
 * [Express(底层框架)](https://github.com/expressjs/express)
 * [Typescript(开发语言)](http://www.typescriptlang.org/)
 * [pm2(服务)](https://github.com/Unitech/pm2)
 --- 
 * [router(路由功能)](/use.html#router路由)
 * [interceptor拦截器(用于进行请求拦截)](/use.html#interceptor拦截器)
 * [Validation验证器(用于数据验证)](/use.html#validation验证器)
 * [throw(全局接口异常)](/use.html#全局异常)



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
```bash
$ npm install kvl@latest -g
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