[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / PatternLayout

# PatternLayout

## Classes

### default

Defined in: [PatternLayout.ts:109](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/PatternLayout.ts#L109)

Pattern layout for logging messages (根据指定模版格式化日志内容)

#### Implements

- [`ILayout`](typings.md#ilayout)

#### Constructors

##### Constructor

> **new default**(`pattern`): [`default`](#default)

Defined in: [PatternLayout.ts:117](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/PatternLayout.ts#L117)

Constructor (构造函数)

###### Parameters

###### pattern

`string` = `'[%d{YYYY-MM-DD HH:mm:ss.SSSZ}] %p %c - %m'`

Pattern string (模版字符串)

###### Returns

[`default`](#default)

#### Methods

##### format()

> **format**(`event`): `string`

Defined in: [PatternLayout.ts:138](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/PatternLayout.ts#L138)

Format a log event (格式化日志事件)

###### Parameters

###### event

[`LogEvent`](typings.md#logevent)

Log event (日志事件)

###### Returns

`string`

###### Implementation of

[`ILayout`](typings.md#ilayout).[`format`](typings.md#ilayout#format)

##### use()

> **use**(`fn`): `this`

Defined in: [PatternLayout.ts:129](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/PatternLayout.ts#L129)

Add a converter (添加转换器)

###### Parameters

###### fn

[`TPatternConverter`](typings.md#tpatternconverter)

Converter function (转换器函数)

###### Returns

`this`
