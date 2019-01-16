


<br />

通过Npm 方式安装kvl
```bash
$ npm install kvl@latest -g
```
mac/linux安装
```bash
$ sudo npm install kvl@latest -g
```

<br>


#### 基础方式使用
```typescript

import kvl from 'kvl';
import { Main ,Router, config } from 'kvl';
@Router({}) 
class HelloWord{

	private msg: string = 'Hello, world'

	@config({ url: '/hello', name: 'hello', type: 'get' })
	private hello(req: kvl.Request, res: kvl.Response): void {
		res.end(`<h1>${this.msg}</h1>`)
	}

}
Main({
	port: 8080,
	router: [ HelloWord ],
}).then(({app,httpServer}) => {

	})
```

