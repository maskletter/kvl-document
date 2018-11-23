

## Kvl.InitConfig

```typescript

interface InitConfig{
	
	port: number | 8080;

	baseUrl?: string|''

	static?: string

	headers?: { [args: string]: string }

	https?: {
		key?: Buffer,
		cert?: Buffer,
		port?: number
	}

	router?: Array<Function | { name: Function, enableInterceptor: boolean }>;

	interceptor?: Array<Interceptor> | Interceptor

	useThis?: boolean,

	use?: Array<any>

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

	interceptorLevel?: 1

	router?: Array<Function | { name: Function, enableInterceptor: boolean }>;

	interceptor?: Array<Interceptor> | Interceptor

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

	interceptorLevel?: 1 | 2 | 3,

	validation?: Validation
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
## Kvl.Interceptor 

<br>

```typescript
interface Interceptor{
	(request: kvl.Request, response: kvl.Response, interceptor: Function): void
}
```