[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [appenders/DebugAppender](../index.md) / default

# Class: default

Defined in: [appenders/DebugAppender.ts:12](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L12)

Console appender (控制台输出)

## Implements

- [`IAppender`](../../../typings/interfaces/IAppender.md)

## Constructors

### new default()

> **new default**(`layout`?, `colors`?): `DebugAppender`

Defined in: [appenders/DebugAppender.ts:20](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L20)

Constructor (构造函数)

#### Parameters

##### layout?

[`ILayout`](../../../typings/interfaces/ILayout.md)

Layout (布局)

##### colors?

`Record`\<[`Level`](../../../index/enumerations/Level.md), `string`\>

#### Returns

`DebugAppender`

## Properties

### colors

> **colors**: `Record`\<[`Level`](../../../index/enumerations/Level.md), `string`\>

Defined in: [appenders/DebugAppender.ts:15](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L15)

***

### debug

> **debug**: `Debugger`

Defined in: [appenders/DebugAppender.ts:14](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L14)

***

### layout?

> `readonly` `optional` **layout**: [`ILayout`](../../../typings/interfaces/ILayout.md)

Defined in: [appenders/DebugAppender.ts:20](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L20)

Layout (布局)

***

### name

> **name**: `string` = `'debug'`

Defined in: [appenders/DebugAppender.ts:13](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L13)

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`name`](../../../typings/interfaces/IAppender.md#name)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [appenders/DebugAppender.ts:54](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L54)

Close appender (关闭输出)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`close`](../../../typings/interfaces/IAppender.md#close)

***

### setup()

> **setup**(`__namedParameters`): `void`

Defined in: [appenders/DebugAppender.ts:24](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L24)

#### Parameters

##### \_\_namedParameters

[`ILogger`](../../../typings/interfaces/ILogger.md)

#### Returns

`void`

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`setup`](../../../typings/interfaces/IAppender.md#setup)

***

### write()

> **write**(`event`): `void`

Defined in: [appenders/DebugAppender.ts:35](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L35)

Write log (写入日志)

#### Parameters

##### event

[`ILogEvent`](../../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

#### Returns

`void`

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`write`](../../../typings/interfaces/IAppender.md#write)
