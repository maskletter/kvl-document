


<br />

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