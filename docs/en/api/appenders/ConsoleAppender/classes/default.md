[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [appenders/ConsoleAppender](../index.md) / default

# Class: default

Defined in: [appenders/ConsoleAppender.ts:11](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L11)

Console appender (控制台输出)

## Implements

- [`IAppender`](../../../typings/interfaces/IAppender.md)

## Constructors

### new default()

> **new default**(`layout`?, `colors`?): `ConsoleAppender`

Defined in: [appenders/ConsoleAppender.ts:18](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L18)

Constructor (构造函数)

#### Parameters

##### layout?

[`ILayout`](../../../typings/interfaces/ILayout.md)

Layout (布局)

##### colors?

`Record`\<[`Level`](../../../index/enumerations/Level.md), `string`\>

#### Returns

`ConsoleAppender`

## Properties

### colors

> **colors**: `Record`\<[`Level`](../../../index/enumerations/Level.md), `string`\>

Defined in: [appenders/ConsoleAppender.ts:13](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L13)

***

### layout?

> `readonly` `optional` **layout**: [`ILayout`](../../../typings/interfaces/ILayout.md)

Defined in: [appenders/ConsoleAppender.ts:18](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L18)

Layout (布局)

***

### name

> **name**: `string` = `'console'`

Defined in: [appenders/ConsoleAppender.ts:12](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L12)

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`name`](../../../typings/interfaces/IAppender.md#name)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [appenders/ConsoleAppender.ts:47](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L47)

Close appender (关闭输出)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`close`](../../../typings/interfaces/IAppender.md#close)

***

### setup()

> **setup**(): `void`

Defined in: [appenders/ConsoleAppender.ts:22](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L22)

#### Returns

`void`

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`setup`](../../../typings/interfaces/IAppender.md#setup)

***

### write()

> **write**(`event`): `void`

Defined in: [appenders/ConsoleAppender.ts:30](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L30)

Write log (写入日志)

#### Parameters

##### event

[`ILogEvent`](../../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

#### Returns

`void`

#### Implementation of

[`IAppender`](../../../typings/interfaces/IAppender.md).[`write`](../../../typings/interfaces/IAppender.md#write)
