[**base-log-factory**](../../index.md)

***

[base-log-factory](../../index.md) / [typings](../index.md) / ILogger

# Interface: ILogger

Defined in: [typings.ts:23](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L23)

Logger interface (日志接口)

## Properties

### appenders

> **appenders**: `Map`\<`string`, [`IAppender`](IAppender.md)\>

Defined in: [typings.ts:25](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L25)

***

### name

> **name**: `string`

Defined in: [typings.ts:24](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L24)

## Accessors

### level

#### Get Signature

> **get** **level**(): [`Level`](../../index/enumerations/Level.md)

Defined in: [typings.ts:27](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L27)

##### Returns

[`Level`](../../index/enumerations/Level.md)

#### Set Signature

> **set** **level**(`l`): `void`

Defined in: [typings.ts:26](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L26)

##### Parameters

###### l

[`TLevel`](../type-aliases/TLevel.md) | [`Level`](../../index/enumerations/Level.md)

##### Returns

`void`

## Methods

### addContext()

> **addContext**(`key`, `value`): `void`

Defined in: [typings.ts:28](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L28)

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

Defined in: [typings.ts:30](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L30)

#### Returns

`void`

***

### debug()

> **debug**(...`args`): `void`

Defined in: [typings.ts:33](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L33)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`any`[]\>

Defined in: [typings.ts:31](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L31)

#### Returns

`Promise`\<`any`[]\>

***

### error()

> **error**(...`args`): `void`

Defined in: [typings.ts:36](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L36)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### fatal()

> **fatal**(...`args`): `void`

Defined in: [typings.ts:37](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L37)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### info()

> **info**(...`args`): `void`

Defined in: [typings.ts:34](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L34)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

Defined in: [typings.ts:29](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L29)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### trace()

> **trace**(...`args`): `void`

Defined in: [typings.ts:32](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L32)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### warn()

> **warn**(...`args`): `void`

Defined in: [typings.ts:35](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L35)

#### Parameters

##### args

...`any`[]

#### Returns

`void`
