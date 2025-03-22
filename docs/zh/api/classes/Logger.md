[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / Logger

# 类: Logger

定义于: [Logger.ts:8](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L8)

Logger instance (日志实例)

## 实现

- [`ILogger`](../interfaces/ILogger.md)

## 构造函数

### new Logger()

> **new Logger**(`name`, `options`): `Logger`

定义于: [Logger.ts:18](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L18)

Create a logger instance (创建日志实例)

#### 参数

##### name

`string`

Logger name (日志名称)

##### options

[`ILogOptions`](../interfaces/ILogOptions.md) = `{}`

Logging options (日志选项)

#### 返回

`Logger`

## 属性

### \_level

> `protected` **\_level**: [`Level`](../enumerations/Level.md) = `Level.INFO`

定义于: [Logger.ts:11](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L11)

***

### appenders

> `readonly` **appenders**: `Map`\<`string`, [`IAppender`](../interfaces/IAppender.md)\>

定义于: [Logger.ts:9](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L9)

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`appenders`](../interfaces/ILogger.md#appenders)

***

### context

> `protected` **context**: `Record`\<`string`, `any`\> = `{}`

定义于: [Logger.ts:10](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L10)

***

### name

> `readonly` **name**: `string`

定义于: [Logger.ts:19](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L19)

Logger name (日志名称)

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`name`](../interfaces/ILogger.md#name)

## 访问器

### level

#### Getter 签名

> **get** **level**(): [`Level`](../enumerations/Level.md)

定义于: [Logger.ts:35](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L35)

Log level (日志级别)

##### 返回

[`Level`](../enumerations/Level.md)

#### Setter 签名

> **set** **level**(`level`): `void`

定义于: [Logger.ts:43](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L43)

Set log level (设置日志级别)

##### 参数

###### level

Log level (日志级别)

[`TLevel`](../type-aliases/TLevel.md) | [`Level`](../enumerations/Level.md)

##### 返回

`void`

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`level`](../interfaces/ILogger.md#level)

## 方法

### addContext()

> **addContext**(`key`, `value`): `void`

定义于: [Logger.ts:52](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L52)

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

[`ILogger`](../interfaces/ILogger.md).[`addContext`](../interfaces/ILogger.md#addcontext)

***

### clearContext()

> **clearContext**(): `void`

定义于: [Logger.ts:67](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L67)

Clear context (清除上下文)

#### 返回

`void`

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`clearContext`](../interfaces/ILogger.md#clearcontext)

***

### createEvent()

> `protected` **createEvent**(`level`, `message`): [`ILogEvent`](../interfaces/ILogEvent.md)

定义于: [Logger.ts:136](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L136)

Create a log event (创建日志事件)

#### 参数

##### level

[`Level`](../enumerations/Level.md)

Log level (日志级别)

##### message

`any`[]

Message (消息)

#### 返回

[`ILogEvent`](../interfaces/ILogEvent.md)

Log event (日志事件)

***

### debug()

> **debug**(...`args`): `void`

定义于: [Logger.ts:94](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L94)

Log a message of level DEBUG (记录DEBUG级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`debug`](../interfaces/ILogger.md#debug)

***

### dispose()

> **dispose**(): `Promise`\<`PromiseSettledResult`\<`void`\>[]\>

定义于: [Logger.ts:74](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L74)

Dispose all appenders (关闭所有appenders)

#### 返回

`Promise`\<`PromiseSettledResult`\<`void`\>[]\>

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`dispose`](../interfaces/ILogger.md#dispose)

***

### error()

> **error**(...`args`): `void`

定义于: [Logger.ts:118](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L118)

Log a message of level ERROR (记录ERROR级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`error`](../interfaces/ILogger.md#error)

***

### fatal()

> **fatal**(...`args`): `void`

定义于: [Logger.ts:126](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L126)

Log a message of level FATAL (记录FATAL级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`fatal`](../interfaces/ILogger.md#fatal)

***

### info()

> **info**(...`args`): `void`

定义于: [Logger.ts:102](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L102)

Log a message of level INFO (记录INFO级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`info`](../interfaces/ILogger.md#info)

***

### log()

> `protected` **log**(`level`, `message`): `void`

定义于: [Logger.ts:152](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L152)

Log a message (记录日志)

#### 参数

##### level

[`Level`](../enumerations/Level.md)

Log level (日志级别)

##### message

`any`[]

Content (内容)

#### 返回

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

定义于: [Logger.ts:60](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L60)

Remove context (移除上下文)

#### 参数

##### key

`any`

Context key (上下文键)

#### 返回

`void`

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`removeContext`](../interfaces/ILogger.md#removecontext)

***

### trace()

> **trace**(...`args`): `void`

定义于: [Logger.ts:86](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L86)

Log a message of level TRACE (记录TRACE级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`trace`](../interfaces/ILogger.md#trace)

***

### warn()

> **warn**(...`args`): `void`

定义于: [Logger.ts:110](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/Logger.ts#L110)

Log a message of level WARN (记录WARN级别的日志)

#### 参数

##### args

...`any`[]

Message arguments (消息参数)

#### 返回

`void`

#### 实现了

[`ILogger`](../interfaces/ILogger.md).[`warn`](../interfaces/ILogger.md#warn)
