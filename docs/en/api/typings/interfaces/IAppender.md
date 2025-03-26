[**base-log-factory**](../../index.md)

***

[base-log-factory](../../index.md) / [typings](../index.md) / IAppender

# Interface: IAppender

Defined in: [typings.ts:63](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L63)

Appender interface (日志记录器接口)

## Properties

### name

> **name**: `string`

Defined in: [typings.ts:64](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L64)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [typings.ts:67](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L67)

#### Returns

`Promise`\<`void`\>

***

### setup()

> **setup**(`logger`): `void`

Defined in: [typings.ts:65](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L65)

#### Parameters

##### logger

[`ILogger`](ILogger.md)

#### Returns

`void`

***

### write()

> **write**(`event`): `void`

Defined in: [typings.ts:66](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L66)

#### Parameters

##### event

[`ILogEvent`](ILogEvent.md)

#### Returns

`void`
