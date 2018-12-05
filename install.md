


<br />

通过Npm 方式安装kvl
```
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

#### 配合express使用
```typescript

import Kvl from 'kvl';
import { MainKvl ,Router, config, ValidationDone } from 'kvl';
import * as express from 'express';
const app = express();
const serve = http.createServer(app);
serve.listen(5544);

@Router({}) 
class HelloWord{

	private msg: string = 'Hello, world'

	@config({ url: '/hello', name: 'hello', type: 'get' })
	private hello(req: Kvl.Request, res: Kvl.Response): void {
		res.end(`<h1>${this.msg}</h1>`)
	}

}

MainKvl(app, {
	baseUrl: '/express',
	router: [ HelloWord ]
})

```