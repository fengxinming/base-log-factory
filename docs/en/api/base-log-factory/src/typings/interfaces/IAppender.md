[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/typings](../index.md) / IAppender

# Interface: IAppender

Defined in: [base-log-factory/src/typings.ts:54](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L54)

Appender interface (日志记录器接口)

## Properties

### name

> **name**: `string`

Defined in: [base-log-factory/src/typings.ts:55](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L55)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [base-log-factory/src/typings.ts:58](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L58)

#### Returns

`Promise`\<`void`\>

***

### setup()

> **setup**(`logger`): `void`

Defined in: [base-log-factory/src/typings.ts:56](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L56)

#### Parameters

##### logger

[`ILogger`](ILogger.md)

#### Returns

`void`

***

### write()

> **write**(`event`): `void`

Defined in: [base-log-factory/src/typings.ts:57](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L57)

#### Parameters

##### event

[`LogEvent`](LogEvent.md)

#### Returns

`void`
