[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/typings](../index.md) / ILogger

# Interface: ILogger

Defined in: base-log-factory/src/typings.ts:64

Logger interface (日志接口)

## Properties

### appenders

> **appenders**: `Map`\<`string`, [`IAppender`](IAppender.md)\>

Defined in: base-log-factory/src/typings.ts:66

***

### name

> **name**: `string`

Defined in: base-log-factory/src/typings.ts:65

## Accessors

### level

#### Get Signature

> **get** **level**(): [`default`](../../LogLevel/enumerations/default.md)

Defined in: base-log-factory/src/typings.ts:68

##### Returns

[`default`](../../LogLevel/enumerations/default.md)

#### Set Signature

> **set** **level**(`l`): `void`

Defined in: base-log-factory/src/typings.ts:67

##### Parameters

###### l

[`default`](../../LogLevel/enumerations/default.md) | [`TLevel`](../type-aliases/TLevel.md)

##### Returns

`void`

## Methods

### addContext()

> **addContext**(`key`, `value`): `void`

Defined in: base-log-factory/src/typings.ts:69

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

Defined in: base-log-factory/src/typings.ts:71

#### Returns

`void`

***

### debug()

> **debug**(...`args`): `void`

Defined in: base-log-factory/src/typings.ts:74

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`any`[]\>

Defined in: base-log-factory/src/typings.ts:72

#### Returns

`Promise`\<`any`[]\>

***

### error()

> **error**(...`args`): `void`

Defined in: base-log-factory/src/typings.ts:77

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### fatal()

> **fatal**(...`args`): `void`

Defined in: base-log-factory/src/typings.ts:78

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### info()

> **info**(...`args`): `void`

Defined in: base-log-factory/src/typings.ts:75

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

Defined in: base-log-factory/src/typings.ts:70

#### Parameters

##### key

`string`

#### Returns

`void`

***

### trace()

> **trace**(...`args`): `void`

Defined in: base-log-factory/src/typings.ts:73

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### warn()

> **warn**(...`args`): `void`

Defined in: base-log-factory/src/typings.ts:76

#### Parameters

##### args

...`any`[]

#### Returns

`void`
