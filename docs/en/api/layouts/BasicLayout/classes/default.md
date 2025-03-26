[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [layouts/BasicLayout](../index.md) / default

# Class: default

Defined in: [layouts/BasicLayout.ts:13](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/BasicLayout.ts#L13)

Basic layout for logging messages (基础的日志布局)

## Implements

- [`ILayout`](../../../typings/interfaces/ILayout.md)

## Constructors

### new default()

> **new default**(): `BasicLayout`

#### Returns

`BasicLayout`

## Methods

### format()

> **format**(`event`): `string`

Defined in: [layouts/BasicLayout.ts:27](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/BasicLayout.ts#L27)

Format the log event (格式化日志事件)

#### Parameters

##### event

[`ILogEvent`](../../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

#### Returns

`string`

#### Implementation of

[`ILayout`](../../../typings/interfaces/ILayout.md).[`format`](../../../typings/interfaces/ILayout.md#format)

***

### transform()

> `static` **transform**(`message`): `string`

Defined in: [layouts/BasicLayout.ts:19](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/BasicLayout.ts#L19)

Transform the message (转换消息)

#### Parameters

##### message

`any`[]

Message (消息)

#### Returns

`string`
