[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / ILogger

# Interface: ILogger

Defined in: [typings.ts:23](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L23)

Logger interface (日志接口)

## Properties

### name

> **name**: `string`

Defined in: [typings.ts:24](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L24)

## Accessors

### level

#### Get Signature

> **get** **level**(): [`Level`](../enumerations/Level.md)

Defined in: [typings.ts:26](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L26)

##### Returns

[`Level`](../enumerations/Level.md)

#### Set Signature

> **set** **level**(`l`): `void`

Defined in: [typings.ts:25](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L25)

##### Parameters

###### l

[`TLevel`](../type-aliases/TLevel.md) | [`Level`](../enumerations/Level.md)

##### Returns

`void`

## Methods

### addContext()

> **addContext**(`key`, `value`): `void`

Defined in: [typings.ts:27](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L27)

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

Defined in: [typings.ts:29](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L29)

#### Returns

`void`

***

### debug()

> **debug**(...`args`): `void`

Defined in: [typings.ts:32](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L32)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`any`[]\>

Defined in: [typings.ts:30](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L30)

#### Returns

`Promise`\<`any`[]\>

***

### error()

> **error**(...`args`): `void`

Defined in: [typings.ts:35](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L35)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### fatal()

> **fatal**(...`args`): `void`

Defined in: [typings.ts:36](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L36)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### info()

> **info**(...`args`): `void`

Defined in: [typings.ts:33](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L33)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

Defined in: [typings.ts:28](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L28)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### trace()

> **trace**(...`args`): `void`

Defined in: [typings.ts:31](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L31)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### warn()

> **warn**(...`args`): `void`

Defined in: [typings.ts:34](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L34)

#### Parameters

##### args

...`any`[]

#### Returns

`void`
