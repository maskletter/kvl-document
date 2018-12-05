

### express接入kvl

kvl并非一个全新的框架，而是内部引用了优秀的express框架，因此，express所有的功能及中间件都是可以在kvl中无缝使用。

如果你现有一个express项目，并且想使用kvl，可以通过给kvl传入一个express实例化对象的方式，让kvl自动接入现在现有项目，实现无缝接入


---
需要注意的是，通过注入express的方式，无法自定义端口号，但是其他功能与创建全新kvl保持一样

---
<br>

```typescript

import Kvl from 'kvl';
import { MainKvl ,Router, config, ValidationDone } from 'kvl';
import * as express from 'express';
import * as session from 'express-session';
import * as compression from 'compression';
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

//这里返回的是传入的express实例化对象
MainKvl(app, {
	baseUrl: '/express',
	router: [ HelloWord ],
	//use内的数组对象会被填充到express的use中
	use: [
		//配置sessiobn
		session({
		  secret: 'keyboard cat',
		  resave: false,
		  saveUninitialized: true
		}),
		//配置gzip
		compression()
	]
})

```