[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [appenders/BaseFileAppender](../index.md) / default

# Class: `abstract` default

Defined in: [appenders/BaseFileAppender.ts:10](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L10)

Base file appender (文件日志基类)

## Extended by

- [`default`](../../DateFileAppender/classes/default.md)
- [`default`](../../FileAppender/classes/default.md)

## Implements

- [`IAppender`](../../../typings/interfaces/IAppender.md)

## Constructors

### new default()

> **new default**(`filePath`, `options`): `BaseFileAppender`

Defined in: [appenders/BaseFileAppender.ts:20](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L20)

Constructor

#### Parameters

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../../typings/type-aliases/BaseAppenderOptions.md)

Options (选项)

#### Returns

`BaseFileAppender`

## Properties

### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: [appenders/BaseFileAppender.ts:21](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L21)

File path (文件路径)

***

### name

> **name**: `string` = `'baseFile'`

Defined in: [appenders/BaseFileAppender.ts:11](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L11)

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`name`](../../../typings/interfaces/IAppender.md#name)

***

### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](../../../typings/type-aliases/BaseAppenderOptions.md)

Defined in: [appenders/BaseFileAppender.ts:22](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L22)

Options (选项)

***

### stream

> `protected` **stream**: `Writable`

Defined in: [appenders/BaseFileAppender.ts:12](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L12)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [appenders/BaseFileAppender.ts:48](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L48)

Close appender

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`close`](../../../typings/interfaces/IAppender.md#close)

***

### getStream()

> `abstract` `protected` **getStream**(`filePath`, `options`): `Writable`

Defined in: [appenders/BaseFileAppender.ts:57](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L57)

Get stream (获取流)

#### Parameters

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../../typings/type-aliases/BaseAppenderOptions.md)

Options (选项)

#### Returns

`Writable`

***

### setup()

> **setup**(): `void`

Defined in: [appenders/BaseFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L28)

#### Returns

`void`

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`setup`](../../../typings/interfaces/IAppender.md#setup)

***

### write()

> **write**(`logEvent`): `void`

Defined in: [appenders/BaseFileAppender.ts:36](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L36)

Write log event

#### Parameters

##### logEvent

[`ILogEvent`](../../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

#### Returns

`void`

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`write`](../../../typings/interfaces/IAppender.md#write)
