[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/PatternLayout](../index.md) / default

# Class: default

Defined in: base-log-factory/src/PatternLayout.ts:109

Pattern layout for logging messages (根据指定模版格式化日志内容)

## Implements

- [`ILayout`](../../typings/interfaces/ILayout.md)

## Constructors

### Constructor

> **new default**(`pattern`): `PatternLayout`

Defined in: base-log-factory/src/PatternLayout.ts:117

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

Defined in: base-log-factory/src/PatternLayout.ts:138

Format a log event (格式化日志事件)

#### Parameters

##### event

[`LogEvent`](../../typings/interfaces/LogEvent.md)

Log event (日志事件)

#### Returns

`string`

#### Implementation of

[`ILayout`](../../typings/interfaces/ILayout.md).[`format`](../../typings/interfaces/ILayout.md#format)

***

### use()

> **use**(`fn`): `this`

Defined in: base-log-factory/src/PatternLayout.ts:129

Add a converter (添加转换器)

#### Parameters

##### fn

[`TPatternConverter`](../../typings/type-aliases/TPatternConverter.md)

Converter function (转换器函数)

#### Returns

`this`
