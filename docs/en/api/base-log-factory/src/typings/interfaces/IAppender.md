[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/typings](../index.md) / IAppender

# Interface: IAppender

Defined in: base-log-factory/src/typings.ts:54

Appender interface (日志记录器接口)

## Properties

### name

> **name**: `string`

Defined in: base-log-factory/src/typings.ts:55

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: base-log-factory/src/typings.ts:58

#### Returns

`Promise`\<`void`\>

***

### setup()

> **setup**(`logger`): `void`

Defined in: base-log-factory/src/typings.ts:56

#### Parameters

##### logger

[`ILogger`](ILogger.md)

#### Returns

`void`

***

### write()

> **write**(`event`): `void`

Defined in: base-log-factory/src/typings.ts:57

#### Parameters

##### event

[`LogEvent`](LogEvent.md)

#### Returns

`void`
