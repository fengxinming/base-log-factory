[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / ConsoleAppender

# Class: ConsoleAppender

Defined in: [appenders/ConsoleAppender.ts:7](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/appenders/ConsoleAppender.ts#L7)

Console appender (控制台输出)

## Implements

- [`IAppender`](../interfaces/IAppender.md)

## Constructors

### new ConsoleAppender()

> **new ConsoleAppender**(`layout`?): `ConsoleAppender`

Defined in: [appenders/ConsoleAppender.ts:12](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/appenders/ConsoleAppender.ts#L12)

Constructor (构造函数)

#### Parameters

##### layout?

[`ILayout`](../interfaces/ILayout.md)

Layout (布局)

#### Returns

`ConsoleAppender`

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [appenders/ConsoleAppender.ts:33](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/appenders/ConsoleAppender.ts#L33)

Close appender (关闭输出)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppender`](../interfaces/IAppender.md).[`close`](../interfaces/IAppender.md#close)

***

### write()

> **write**(`event`): `void`

Defined in: [appenders/ConsoleAppender.ts:18](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/appenders/ConsoleAppender.ts#L18)

Write log (写入日志)

#### Parameters

##### event

[`ILogEvent`](../interfaces/ILogEvent.md)

Log event (日志事件)

#### Returns

`void`

#### Implementation of

[`IAppender`](../interfaces/IAppender.md).[`write`](../interfaces/IAppender.md#write)
