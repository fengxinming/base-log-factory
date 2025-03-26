[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/BasicLayout](../index.md) / default

# Class: default

Defined in: [base-log-factory/src/BasicLayout.ts:8](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/BasicLayout.ts#L8)

Basic layout for logging messages (基础的日志布局)

## Implements

- [`ILayout`](../../typings/interfaces/ILayout.md)

## Constructors

### Constructor

> **new default**(): `BasicLayout`

#### Returns

`BasicLayout`

## Methods

### format()

> **format**(`event`): `string`

Defined in: [base-log-factory/src/BasicLayout.ts:13](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/BasicLayout.ts#L13)

Format the log event (格式化日志事件)

#### Parameters

##### event

[`LogEvent`](../../typings/interfaces/LogEvent.md)

Log event (日志事件)

#### Returns

`string`

#### Implementation of

[`ILayout`](../../typings/interfaces/ILayout.md).[`format`](../../typings/interfaces/ILayout.md#format)
