[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / ConsoleAppender

# Class: ConsoleAppender

Defined in: [appenders/ConsoleAppender.ts:7](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L7)

Console appender (控制台输出)

## Implements

- [`IAppender`](../interfaces/IAppender.md)

## Constructors

### new ConsoleAppender()

> **new ConsoleAppender**(`layout`?): `ConsoleAppender`

Defined in: [appenders/ConsoleAppender.ts:13](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L13)

Constructor (构造函数)

#### Parameters

##### layout?

[`ILayout`](../interfaces/ILayout.md)

Layout (布局)

#### Returns

`ConsoleAppender`

## Properties

### layout?

> `readonly` `optional` **layout**: [`ILayout`](../interfaces/ILayout.md)

Defined in: [appenders/ConsoleAppender.ts:13](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L13)

Layout (布局)

***

### name

> **name**: `string` = `'console'`

Defined in: [appenders/ConsoleAppender.ts:8](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L8)

#### Implementation of

[`IAppender`](../interfaces/IAppender.md).[`name`](../interfaces/IAppender.md#name)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [appenders/ConsoleAppender.ts:34](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L34)

Close appender (关闭输出)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppender`](../interfaces/IAppender.md).[`close`](../interfaces/IAppender.md#close)

***

### write()

> **write**(`event`): `void`

Defined in: [appenders/ConsoleAppender.ts:19](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L19)

Write log (写入日志)

#### Parameters

##### event

[`ILogEvent`](../interfaces/ILogEvent.md)

Log event (日志事件)

#### Returns

`void`

#### Implementation of

[`IAppender`](../interfaces/IAppender.md).[`write`](../interfaces/IAppender.md#write)
