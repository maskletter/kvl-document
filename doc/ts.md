

## Kvl.InitConfig

```typescript

interface InitConfig{
	
	port: number | 8080;

	baseUrl?: string|''

	static?: string

	headers?: { [args: string]: string }

	https?: {
		key: Buffer,
		cert: Buffer,
		port: number
	}

	global?: any

	router?: Array<Function | { name: Function, enable: boolean }>;

	interceptor?: Array<Interceptor> | Interceptor

	express?(app: Express.Application): void

	getData?:(request: kvl.Response) => void

	throw?:(request: ExpressRequest, response: ExpressResponse, status: number, error: Error) => void;

}
```
## Kvl.Router (@Router)

<br>

```typescript

interface Router{

	name?: string;

	url?: string;
	
	interceptor?: Array<Interceptor> | Interceptor

	interceptorLevel?: 0 | 1 | 2 | 3 | 4

	getData?:(request: kvl.Response) => void

	router?: Array<Function | { name: Function, enable: boolean }>;

}
```
## Kvl.RouterConfig (@config)

<br>

```typescript
interface RouterConfig{
	
	name?: string;
	
	type: Array<string> | string
	
	url: string

	interceptor?: Array<Interceptor> | Interceptor

	interceptorLevel?: 0 | 1 | 2 | 3 | 4,,

	getData?:(request: kvl.Response) => void

	validation?: Validation

	validType?: 'query' | 'body' | 'param' | 'all'
}
```
## Kvl.ValidationError 

<br>

```typescript
interface ValidationError {
	errorMsg: string,
	required: boolean,
	name: string,
	regular: string,
	value: string
	type: 'string' | 'number' | 'boolean' | any
}
```
## Kvl.Request 

<br>

```typescript
interface Request {
	//...继承自express
}
```

## Kvl.Response 

<br>

```typescript
interface Response {
	//...继承自express
	router(path: string, param?: {
		query?: { [argv: string]: any }, 
		body?: { [argv: string]: any }
	}): any;
	parentId: string
	id: string
}
```

## Kvl.Validation 

<br>

```typescript
interface Validation {
		
	done?: any;
	
	disable?: any;

	[argy: string]: {
		type?: 'string' | 'number' | 'boolean' | any,
		required?: boolean | false,
		name?: string,
		regular?: RegExp,
		description?: string,
		done?: ValidationDone
	} | Function | 'string' | 'number' | 'boolean' | boolean | { empty: string, regular: string } | any;

}
```
## Kvl.ValidationDone 

<br>

```typescript
interface ValidationDone {
	(err: ValidationError, response: kvl.Response): void
}
```


## Kvl.Interceptor 

<br>

```typescript
interface Interceptor{
	(request: kvl.Request, response: kvl.Response): void
}
```

## Kvl.Injectable 

<br>

```typescript
function Injectable(name: string): any
```
## Kvl.Global 

<br>

```typescript
function Global(): any
```
## Kvl.data 

<br>

```typescript
function data(): any
```