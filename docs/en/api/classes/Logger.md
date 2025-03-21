[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / Logger

# Class: Logger

Defined in: Logger.ts:7

Logger instance (日志实例)

## Implements

- [`ILogger`](../interfaces/ILogger.md)

## Constructors

### new Logger()

> **new Logger**(`name`, `options`): `Logger`

Defined in: Logger.ts:17

Create a logger instance (创建日志实例)

#### Parameters

##### name

`string`

Logger name (日志名称)

##### options

[`ILogOptions`](../interfaces/ILogOptions.md) = `{}`

Logging options (日志选项)

#### Returns

`Logger`

## Properties

### \_level

> `protected` **\_level**: [`Level`](../enumerations/Level.md) = `Level.INFO`

Defined in: Logger.ts:10

***

### appenders

> `protected` `readonly` **appenders**: [`IAppender`](../interfaces/IAppender.md)[] = `[]`

Defined in: Logger.ts:8

***

### context

> `protected` **context**: `Record`\<`string`, `any`\> = `{}`

Defined in: Logger.ts:9

***

### name

> `readonly` **name**: `string`

Defined in: Logger.ts:18

Logger name (日志名称)

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`name`](../interfaces/ILogger.md#name)

## Accessors

### level

#### Get Signature

> **get** **level**(): [`Level`](../enumerations/Level.md)

Defined in: Logger.ts:32

Log level (日志级别)

##### Returns

[`Level`](../enumerations/Level.md)

#### Set Signature

> **set** **level**(`level`): `void`

Defined in: Logger.ts:40

Set log level (设置日志级别)

##### Parameters

###### level

Log level (日志级别)

[`TLevel`](../type-aliases/TLevel.md) | [`Level`](../enumerations/Level.md)

##### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`level`](../interfaces/ILogger.md#level)

## Methods

### addContext()

> **addContext**(`key`, `value`): `void`

Defined in: Logger.ts:64

Add context (添加上下文)

#### Parameters

##### key

`any`

Context key (上下文键)

##### value

`any`

Context value (上下文值)

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`addContext`](../interfaces/ILogger.md#addcontext)

***

### clearContext()

> **clearContext**(): `void`

Defined in: Logger.ts:79

Clear context (清除上下文)

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`clearContext`](../interfaces/ILogger.md#clearcontext)

***

### createEvent()

> `protected` **createEvent**(`level`, `message`): [`ILogEvent`](../interfaces/ILogEvent.md)

Defined in: Logger.ts:146

Create a log event (创建日志事件)

#### Parameters

##### level

[`Level`](../enumerations/Level.md)

Log level (日志级别)

##### message

`any`[]

Message (消息)

#### Returns

[`ILogEvent`](../interfaces/ILogEvent.md)

Log event (日志事件)

***

### debug()

> **debug**(...`args`): `void`

Defined in: Logger.ts:104

Log a message of level DEBUG (记录DEBUG级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`debug`](../interfaces/ILogger.md#debug)

***

### dispose()

> **dispose**(): `Promise`\<`PromiseSettledResult`\<`void`\>[]\>

Defined in: Logger.ts:86

Dispose all appenders (关闭所有appenders)

#### Returns

`Promise`\<`PromiseSettledResult`\<`void`\>[]\>

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`dispose`](../interfaces/ILogger.md#dispose)

***

### error()

> **error**(...`args`): `void`

Defined in: Logger.ts:128

Log a message of level ERROR (记录ERROR级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`error`](../interfaces/ILogger.md#error)

***

### fatal()

> **fatal**(...`args`): `void`

Defined in: Logger.ts:136

Log a message of level FATAL (记录FATAL级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`fatal`](../interfaces/ILogger.md#fatal)

***

### info()

> **info**(...`args`): `void`

Defined in: Logger.ts:112

Log a message of level INFO (记录INFO级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`info`](../interfaces/ILogger.md#info)

***

### log()

> `protected` **log**(`level`, `message`): `void`

Defined in: Logger.ts:162

Log a message (记录日志)

#### Parameters

##### level

[`Level`](../enumerations/Level.md)

Log level (日志级别)

##### message

`any`[]

Content (内容)

#### Returns

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

Defined in: Logger.ts:72

Remove context (移除上下文)

#### Parameters

##### key

`any`

Context key (上下文键)

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`removeContext`](../interfaces/ILogger.md#removecontext)

***

### trace()

> **trace**(...`args`): `void`

Defined in: Logger.ts:96

Log a message of level TRACE (记录TRACE级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`trace`](../interfaces/ILogger.md#trace)

***

### warn()

> **warn**(...`args`): `void`

Defined in: Logger.ts:120

Log a message of level WARN (记录WARN级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../interfaces/ILogger.md).[`warn`](../interfaces/ILogger.md#warn)

***

### normalizeLevel()

> `static` **normalizeLevel**(`level`): [`Level`](../enumerations/Level.md)

Defined in: Logger.ts:49

Normalize log level (归一化日志级别)

#### Parameters

##### level

Log level (日志级别)

[`TLevel`](../type-aliases/TLevel.md) | [`Level`](../enumerations/Level.md)

#### Returns

[`Level`](../enumerations/Level.md)

Normalized log level (归一化后的日志级别)
