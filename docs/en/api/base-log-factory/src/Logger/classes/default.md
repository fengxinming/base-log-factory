[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/Logger](../index.md) / default

# Class: default

Defined in: [base-log-factory/src/Logger.ts:8](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L8)

Logger instance (日志实例)

## Implements

- [`ILogger`](../../typings/interfaces/ILogger.md)

## Constructors

### Constructor

> **new default**(`name`, `options`): `Logger`

Defined in: [base-log-factory/src/Logger.ts:18](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L18)

Create a logger instance (创建日志实例)

#### Parameters

##### name

`string`

Logger name (日志名称)

##### options

[`LogOptions`](../../typings/interfaces/LogOptions.md) = `{}`

Logging options (日志选项)

#### Returns

`Logger`

## Properties

### \_level

> `protected` **\_level**: [`default`](../../LogLevel/enumerations/default.md) = `Level.INFO`

Defined in: [base-log-factory/src/Logger.ts:11](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L11)

***

### appenders

> `readonly` **appenders**: `Map`\<`string`, [`IAppender`](../../typings/interfaces/IAppender.md)\>

Defined in: [base-log-factory/src/Logger.ts:9](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L9)

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`appenders`](../../typings/interfaces/ILogger.md#appenders)

***

### context

> `protected` **context**: `Record`\<`string`, `any`\> = `{}`

Defined in: [base-log-factory/src/Logger.ts:10](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L10)

***

### name

> **name**: `string`

Defined in: [base-log-factory/src/Logger.ts:19](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L19)

Logger name (日志名称)

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`name`](../../typings/interfaces/ILogger.md#name)

## Accessors

### level

#### Get Signature

> **get** **level**(): [`default`](../../LogLevel/enumerations/default.md)

Defined in: [base-log-factory/src/Logger.ts:44](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L44)

Log level (日志级别)

##### Returns

[`default`](../../LogLevel/enumerations/default.md)

#### Set Signature

> **set** **level**(`level`): `void`

Defined in: [base-log-factory/src/Logger.ts:52](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L52)

Set log level (设置日志级别)

##### Parameters

###### level

Log level (日志级别)

[`default`](../../LogLevel/enumerations/default.md) | [`TLevel`](../../typings/type-aliases/TLevel.md)

##### Returns

`void`

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`level`](../../typings/interfaces/ILogger.md#level)

***

### levelName

#### Get Signature

> **get** **levelName**(): `string`

Defined in: [base-log-factory/src/Logger.ts:37](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L37)

Log level name (日志级别名称)

##### Returns

`string`

## Methods

### addContext()

> **addContext**(`key`, `value`): `void`

Defined in: [base-log-factory/src/Logger.ts:64](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L64)

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

[`ILogger`](../../typings/interfaces/ILogger.md).[`addContext`](../../typings/interfaces/ILogger.md#addcontext)

***

### clearContext()

> **clearContext**(): `void`

Defined in: [base-log-factory/src/Logger.ts:79](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L79)

Clear context (清除上下文)

#### Returns

`void`

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`clearContext`](../../typings/interfaces/ILogger.md#clearcontext)

***

### createEvent()

> `protected` **createEvent**(`level`, `message`): [`LogEvent`](../../typings/interfaces/LogEvent.md)

Defined in: [base-log-factory/src/Logger.ts:148](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L148)

Create a log event (创建日志事件)

#### Parameters

##### level

[`default`](../../LogLevel/enumerations/default.md)

Log level (日志级别)

##### message

`any`[]

Message (消息)

#### Returns

[`LogEvent`](../../typings/interfaces/LogEvent.md)

Log event (日志事件)

***

### debug()

> **debug**(...`args`): `void`

Defined in: [base-log-factory/src/Logger.ts:106](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L106)

Log a message of level DEBUG (记录DEBUG级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`debug`](../../typings/interfaces/ILogger.md#debug)

***

### dispose()

> **dispose**(): `Promise`\<`PromiseSettledResult`\<`void`\>[]\>

Defined in: [base-log-factory/src/Logger.ts:86](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L86)

Dispose all appenders (关闭所有appenders)

#### Returns

`Promise`\<`PromiseSettledResult`\<`void`\>[]\>

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`dispose`](../../typings/interfaces/ILogger.md#dispose)

***

### error()

> **error**(...`args`): `void`

Defined in: [base-log-factory/src/Logger.ts:130](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L130)

Log a message of level ERROR (记录ERROR级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`error`](../../typings/interfaces/ILogger.md#error)

***

### fatal()

> **fatal**(...`args`): `void`

Defined in: [base-log-factory/src/Logger.ts:138](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L138)

Log a message of level FATAL (记录FATAL级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`fatal`](../../typings/interfaces/ILogger.md#fatal)

***

### info()

> **info**(...`args`): `void`

Defined in: [base-log-factory/src/Logger.ts:114](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L114)

Log a message of level INFO (记录INFO级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`info`](../../typings/interfaces/ILogger.md#info)

***

### log()

> `protected` **log**(`level`, `message`): `void`

Defined in: [base-log-factory/src/Logger.ts:164](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L164)

Log a message (记录日志)

#### Parameters

##### level

[`default`](../../LogLevel/enumerations/default.md)

Log level (日志级别)

##### message

`any`[]

Content (内容)

#### Returns

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

Defined in: [base-log-factory/src/Logger.ts:72](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L72)

Remove context (移除上下文)

#### Parameters

##### key

`any`

Context key (上下文键)

#### Returns

`void`

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`removeContext`](../../typings/interfaces/ILogger.md#removecontext)

***

### trace()

> **trace**(...`args`): `void`

Defined in: [base-log-factory/src/Logger.ts:98](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L98)

Log a message of level TRACE (记录TRACE级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`trace`](../../typings/interfaces/ILogger.md#trace)

***

### warn()

> **warn**(...`args`): `void`

Defined in: [base-log-factory/src/Logger.ts:122](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/Logger.ts#L122)

Log a message of level WARN (记录WARN级别的日志)

#### Parameters

##### args

...`any`[]

Message arguments (消息参数)

#### Returns

`void`

#### Implementation of

[`ILogger`](../../typings/interfaces/ILogger.md).[`warn`](../../typings/interfaces/ILogger.md#warn)
