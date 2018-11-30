
## kvl服务利用了pm2的api实现
简单实现了pm2的list，show，start，logs，kill，reload，disconnect等方法

### 快速创建

```typescript
//kvl init [项目目录]
$ kvl init test-kvl
```

### 开发环境启动

```typescript
$ kvl dev
//添加环境配置
$ kvl dev --mode beta
//从新编译代码并结束进程(主要是给serve用的)
$ kvl dev --build
```

### 生产环境启动

```typescript
$ kvl server
//添加环境配置
$ kvl server --mode beta
//添加集群模式
$ kvl server -i [cpu数量]
//从新编译代码并启动
$ kvl server --build
```

### 查看所有已启动的服务

```typescript
$ kvl list
$ kvl ls
```

### 查看具体服务信息

```typescript
//$ kvl show [id|name]
$ kvl show 0
```

### 查看日志

```typescript
//kvl logs [id|name]
$ kvl logs 0
```

### 杀死全部服务

```typescript
$ kvl kill
```

### 关闭指定服务

```typescript
//kvl stop [id|name]
$ kvl stop 0
```

### 重启服务

```typescript
//kvl reload [id|name]
$ kvl reload 0
```

### 断开与pm2守护进程的连接

```typescript
$ kvl disconnect
```