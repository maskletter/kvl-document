

### express接入kvl

如果你现有一个express项目,并且想使用kvl,可以通过给kvl传入一个express实例化对象的方式,让kvl自动接入现在现有项目,实现无缝接入


---
需要注意的是,通过注入express的方式,无法自定义端口号,不支持设置headers,不支持kvl.Request.router方法

---
<br>

```typescript

import kvl from 'kvl';
import { Main ,Router, config } from 'kvl';
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
	private hello(req: kvl.Request, res: kvl.Response): void {
		res.end(`<h1>${this.msg}</h1>`)
	}

}

//这里返回的是传入的express实例化对象
Main({
	baseUrl: '/express',
	router: [ HelloWord ],
	//设置express
	express(app: Application){
		app.use(compression())
		app.use(session({
			secret: 'secret',
			resave: false,
			saveUninitialized: true,
			cookie : {
				maxAge : 1000 * 60 * 30, // 设置 session 的有效时间，单位毫秒
			}
		}))
	},
}, app)

```