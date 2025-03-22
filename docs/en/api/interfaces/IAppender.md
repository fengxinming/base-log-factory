[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / IAppender

# Interface: IAppender

Defined in: [typings.ts:63](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L63)

Appender interface (日志记录器接口)

## Properties

### name

> **name**: `string`

Defined in: [typings.ts:64](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L64)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [typings.ts:66](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L66)

#### Returns

`Promise`\<`void`\>

***

### write()

> **write**(`event`): `void`

Defined in: [typings.ts:65](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L65)

#### Parameters

##### event

[`ILogEvent`](ILogEvent.md)

#### Returns

`void`
