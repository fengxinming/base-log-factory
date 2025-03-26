[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [appenders/DateFileAppender](../index.md) / default

# Class: default

Defined in: [appenders/DateFileAppender.ts:9](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L9)

Date File Appender (日期文件记录器)

## Extends

- [`default`](../../BaseFileAppender/classes/default.md)

## Constructors

### new default()

> **new default**(`filePath`, `options`): `DateFileAppender`

Defined in: [appenders/DateFileAppender.ts:16](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L16)

Constructor (构造函数)

#### Parameters

##### filePath

`string`

File path (文件路径)

##### options

[`DateFileAppenderOptions`](../../../typings/type-aliases/DateFileAppenderOptions.md)

Options (选项)

#### Returns

`DateFileAppender`

#### Overrides

[`default`](../../BaseFileAppender/classes/default.md).[`constructor`](../../BaseFileAppender/classes/default.md#constructor)

## Properties

### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: [appenders/BaseFileAppender.ts:21](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L21)

File path (文件路径)

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`filePath`](../../BaseFileAppender/classes/default.md#filepath)

***

### name

> **name**: `string` = `'dateFile'`

Defined in: [appenders/DateFileAppender.ts:10](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L10)

#### Overrides

[`default`](../../BaseFileAppender/classes/default.md).[`name`](../../BaseFileAppender/classes/default.md#name)

***

### options

> `protected` `readonly` **options**: [`DateFileAppenderOptions`](../../../typings/type-aliases/DateFileAppenderOptions.md)

Defined in: [appenders/DateFileAppender.ts:18](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L18)

Options (选项)

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`options`](../../BaseFileAppender/classes/default.md#options)

***

### stream

> `protected` **stream**: `Writable`

Defined in: [appenders/BaseFileAppender.ts:12](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L12)

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`stream`](../../BaseFileAppender/classes/default.md#stream)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [appenders/BaseFileAppender.ts:48](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L48)

Close appender

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`close`](../../BaseFileAppender/classes/default.md#close)

***

### getStream()

> `protected` **getStream**(`filePath`, `options`): `DateFileStream`

Defined in: [appenders/DateFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L28)

Get stream (获取流)

#### Parameters

##### filePath

`any`

File path (文件路径)

##### options

`any`

Options (选项)

#### Returns

`DateFileStream`

#### Overrides

[`default`](../../BaseFileAppender/classes/default.md).[`getStream`](../../BaseFileAppender/classes/default.md#getstream)

***

### setup()

> **setup**(): `void`

Defined in: [appenders/BaseFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L28)

#### Returns

`void`

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`setup`](../../BaseFileAppender/classes/default.md#setup)

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

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`write`](../../BaseFileAppender/classes/default.md#write)
