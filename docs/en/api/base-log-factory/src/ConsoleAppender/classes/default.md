[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/ConsoleAppender](../index.md) / default

# Class: default

Defined in: [base-log-factory/src/ConsoleAppender.ts:7](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/ConsoleAppender.ts#L7)

Console appender (控制台输出)

## Implements

- [`IAppender`](../../typings/interfaces/IAppender.md)

## Constructors

### Constructor

> **new default**(`layout`?): `ConsoleAppender`

Defined in: [base-log-factory/src/ConsoleAppender.ts:15](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/ConsoleAppender.ts#L15)

Constructor (构造函数)

#### Parameters

##### layout?

[`ILayout`](../../typings/interfaces/ILayout.md)

Layout (布局)

#### Returns

`ConsoleAppender`

## Properties

### dateFormat

> **dateFormat**: `string` = `'HH:mm:ss.SSSZ'`

Defined in: [base-log-factory/src/ConsoleAppender.ts:9](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/ConsoleAppender.ts#L9)

***

### layout?

> `optional` **layout**: [`ILayout`](../../typings/interfaces/ILayout.md)

Defined in: [base-log-factory/src/ConsoleAppender.ts:15](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/ConsoleAppender.ts#L15)

Layout (布局)

***

### name

> **name**: `string` = `'console'`

Defined in: [base-log-factory/src/ConsoleAppender.ts:8](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/ConsoleAppender.ts#L8)

#### Implementation of

[`IAppender`](../../typings/interfaces/IAppender.md).[`name`](../../typings/interfaces/IAppender.md#name)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [base-log-factory/src/ConsoleAppender.ts:42](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/ConsoleAppender.ts#L42)

Close appender (关闭输出)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppender`](../../typings/interfaces/IAppender.md).[`close`](../../typings/interfaces/IAppender.md#close)

***

### setup()

> **setup**(`logger`): `void`

Defined in: [base-log-factory/src/ConsoleAppender.ts:19](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/ConsoleAppender.ts#L19)

#### Parameters

##### logger

[`ILogger`](../../typings/interfaces/ILogger.md)

#### Returns

`void`

#### Implementation of

[`IAppender`](../../typings/interfaces/IAppender.md).[`setup`](../../typings/interfaces/IAppender.md#setup)

***

### write()

> **write**(`event`): `void`

Defined in: [base-log-factory/src/ConsoleAppender.ts:27](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/ConsoleAppender.ts#L27)

Write log (写入日志)

#### Parameters

##### event

[`LogEvent`](../../typings/interfaces/LogEvent.md)

Log event (日志事件)

#### Returns

`void`

#### Implementation of

[`IAppender`](../../typings/interfaces/IAppender.md).[`write`](../../typings/interfaces/IAppender.md#write)
