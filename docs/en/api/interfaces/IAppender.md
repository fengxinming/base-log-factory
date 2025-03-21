[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / IAppender

# Interface: IAppender

Defined in: [typings.ts:62](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L62)

Appender interface (日志记录器接口)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [typings.ts:64](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L64)

#### Returns

`Promise`\<`void`\>

***

### write()

> **write**(`event`): `void`

Defined in: [typings.ts:63](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L63)

#### Parameters

##### event

[`ILogEvent`](ILogEvent.md)

#### Returns

`void`
