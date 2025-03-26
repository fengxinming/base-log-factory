[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [layouts/PatternLayout](../index.md) / default

# Class: default

Defined in: [layouts/PatternLayout.ts:108](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/PatternLayout.ts#L108)

Pattern layout for logging messages (根据指定模版格式化日志内容)

## Implements

- [`ILayout`](../../../typings/interfaces/ILayout.md)

## Constructors

### new default()

> **new default**(`pattern`): `PatternLayout`

Defined in: [layouts/PatternLayout.ts:117](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/PatternLayout.ts#L117)

Constructor (构造函数)

#### Parameters

##### pattern

`string` = `'[%d{YYYY-MM-DD HH:mm:ss.SSSZ}] %p %c - %m'`

Pattern string (模版字符串)

#### Returns

`PatternLayout`

## Methods

### format()

> **format**(`event`): `string`

Defined in: [layouts/PatternLayout.ts:167](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/PatternLayout.ts#L167)

Format a log event (格式化日志事件)

#### Parameters

##### event

[`ILogEvent`](../../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

#### Returns

`string`

#### Implementation of

[`ILayout`](../../../typings/interfaces/ILayout.md).[`format`](../../../typings/interfaces/ILayout.md#format)

***

### use()

> **use**(`fn`): `this`

Defined in: [layouts/PatternLayout.ts:158](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/PatternLayout.ts#L158)

Add a converter (添加转换器)

#### Parameters

##### fn

[`TPatternLayoutConverter`](../../../typings/type-aliases/TPatternLayoutConverter.md)

Converter function (转换器函数)

#### Returns

`this`
