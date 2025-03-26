[**base-log-factory**](../../index.md)

***

[base-log-factory](../../index.md) / [Logger](../index.md) / default

# 类: default

定义于: [Logger.ts:8](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L8)

Logger instance (日志实例)

## 实现

- [`ILogger`](../../typings/interfaces/ILogger.md)

## 构造函数

### new default()

> **new default**(`name`, `options`): `Logger`

定义于: [Logger.ts:18](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L18)

Create a logger instance (创建日志实例)

#### 参数

##### name

`string`

Logger name (日志名称)

##### options

[`ILogOptions`](../../typings/interfaces/ILogOptions.md) = `{}`

Logging options (日志选项)

#### 返回

`Logger`

## 属性

### \_level

> `protected` **\_level**: [`Level`](../../index/enumerations/Level.md) = `Level.INFO`

定义于: [Logger.ts:11](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L11)

***

### appenders

> `readonly` **appenders**: `Map`\<`string`, [`IAppender`](../../typings/interfaces/IAppender.md)\>

定义于: [Logger.ts:9](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L9)

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`appenders`](../../typings/interfaces/ILogger.md#appenders)

***

### context

> `protected` **context**: `Record`\<`string`, `any`\> = `{}`

定义于: [Logger.ts:10](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L10)

***

### name

> `readonly` **name**: `string`

定义于: [Logger.ts:19](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L19)

Logger name (日志名称)

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`name`](../../typings/interfaces/ILogger.md#name)

## 访问器

### level

#### Getter 签名

> **get** **level**(): [`Level`](../../index/enumerations/Level.md)

定义于: [Logger.ts:44](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L44)

Log level (日志级别)

##### 返回

[`Level`](../../index/enumerations/Level.md)

#### Setter 签名

> **set** **level**(`level`): `void`

定义于: [Logger.ts:52](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L52)

Set log level (设置日志级别)

##### 参数

###### level

Log level (日志级别)

[`TLevel`](../../typings/type-aliases/TLevel.md) | [`Level`](../../index/enumerations/Level.md)

##### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`level`](../../typings/interfaces/ILogger.md#level)

***

### levelName

#### Getter 签名

> **get** **levelName**(): `string`

定义于: [Logger.ts:37](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L37)

Log level name (日志级别名称)

##### 返回

`string`

## 方法

### addContext()

> **addContext**(`key`, `value`): `void`

定义于: [Logger.ts:64](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L64)

Add context (添加上下文)

#### 参数

##### key

`any`

Context key (上下文键)

##### value

`any`

Context value (上下文值)

#### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`addContext`](../../typings/interfaces/ILogger.md#addcontext)

***

### clearContext()

> **clearContext**(): `void`

定义于: [Logger.ts:79](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L79)

Clear context (清除上下文)

#### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`clearContext`](../../typings/interfaces/ILogger.md#clearcontext)

***

### createEvent()

> `protected` **createEvent**(`level`, `message`): [`ILogEvent`](../../typings/interfaces/ILogEvent.md)

定义于: [Logger.ts:148](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L148)

Create a log event (创建日志事件)

#### 参数

##### level

[`Level`](../../index/enumerations/Level.md)

Log level (日志级别)

##### message

`any`[]

Message (消息)

#### 返回

[`ILogEvent`](../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

***

### debug()

> **debug**(...`args`): `void`

定义于: [Logger.ts:106](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L106)

Log a message of level DEBUG (记录DEBUG级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`debug`](../../typings/interfaces/ILogger.md#debug)

***

### dispose()

> **dispose**(): `Promise`\<`PromiseSettledResult`\<`void`\>[]\>

定义于: [Logger.ts:86](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L86)

Dispose all appenders (关闭所有appenders)

#### 返回

`Promise`\<`PromiseSettledResult`\<`void`\>[]\>

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`dispose`](../../typings/interfaces/ILogger.md#dispose)

***

### error()

> **error**(...`args`): `void`

定义于: [Logger.ts:130](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L130)

Log a message of level ERROR (记录ERROR级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`error`](../../typings/interfaces/ILogger.md#error)

***

### fatal()

> **fatal**(...`args`): `void`

定义于: [Logger.ts:138](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L138)

Log a message of level FATAL (记录FATAL级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`fatal`](../../typings/interfaces/ILogger.md#fatal)

***

### info()

> **info**(...`args`): `void`

定义于: [Logger.ts:114](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L114)

Log a message of level INFO (记录INFO级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`info`](../../typings/interfaces/ILogger.md#info)

***

### log()

> `protected` **log**(`level`, `message`): `void`

定义于: [Logger.ts:164](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L164)

Log a message (记录日志)

#### 参数

##### level

[`Level`](../../index/enumerations/Level.md)

Log level (日志级别)

##### message

`any`[]

Content (内容)

#### 返回

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

定义于: [Logger.ts:72](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L72)

Remove context (移除上下文)

#### 参数

##### key

`any`

Context key (上下文键)

#### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`removeContext`](../../typings/interfaces/ILogger.md#removecontext)

***

### trace()

> **trace**(...`args`): `void`

定义于: [Logger.ts:98](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L98)

Log a message of level TRACE (记录TRACE级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`trace`](../../typings/interfaces/ILogger.md#trace)

***

### warn()

> **warn**(...`args`): `void`

定义于: [Logger.ts:122](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/Logger.ts#L122)

Log a message of level WARN (记录WARN级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../../typings/interfaces/ILogger.md).[`warn`](../../typings/interfaces/ILogger.md#warn)
