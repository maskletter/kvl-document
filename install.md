


## Kvl

kvl利用typescript简单封装了express，typescript的数据强类型，弥补了js在类型方面的弱项。

<br />

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