[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/typings](../index.md) / ILogger

# Interface: ILogger

Defined in: [base-log-factory/src/typings.ts:64](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L64)

Logger interface (日志接口)

## Properties

### appenders

> **appenders**: `Map`\<`string`, [`IAppender`](IAppender.md)\>

Defined in: [base-log-factory/src/typings.ts:66](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L66)

***

### name

> **name**: `string`

Defined in: [base-log-factory/src/typings.ts:65](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L65)

## Accessors

### level

#### Get Signature

> **get** **level**(): [`default`](../../LogLevel/enumerations/default.md)

Defined in: [base-log-factory/src/typings.ts:68](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L68)

##### Returns

[`default`](../../LogLevel/enumerations/default.md)

#### Set Signature

> **set** **level**(`l`): `void`

Defined in: [base-log-factory/src/typings.ts:67](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L67)

##### Parameters

###### l

[`default`](../../LogLevel/enumerations/default.md) | [`TLevel`](../type-aliases/TLevel.md)

##### Returns

`void`

## Methods

### addContext()

> **addContext**(`key`, `value`): `void`

Defined in: [base-log-factory/src/typings.ts:69](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L69)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`void`

***

### clearContext()

> **clearContext**(): `void`

Defined in: [base-log-factory/src/typings.ts:71](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L71)

#### Returns

`void`

***

### debug()

> **debug**(...`args`): `void`

Defined in: [base-log-factory/src/typings.ts:74](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L74)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`any`[]\>

Defined in: [base-log-factory/src/typings.ts:72](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L72)

#### Returns

`Promise`\<`any`[]\>

***

### error()

> **error**(...`args`): `void`

Defined in: [base-log-factory/src/typings.ts:77](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L77)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### fatal()

> **fatal**(...`args`): `void`

Defined in: [base-log-factory/src/typings.ts:78](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L78)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### info()

> **info**(...`args`): `void`

Defined in: [base-log-factory/src/typings.ts:75](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L75)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

Defined in: [base-log-factory/src/typings.ts:70](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L70)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### trace()

> **trace**(...`args`): `void`

Defined in: [base-log-factory/src/typings.ts:73](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L73)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### warn()

> **warn**(...`args`): `void`

Defined in: [base-log-factory/src/typings.ts:76](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/typings.ts#L76)

#### Parameters

##### args

...`any`[]

#### Returns

`void`
