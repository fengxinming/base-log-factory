[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / PatternLayout

# PatternLayout

## Classes

### default

Defined in: [PatternLayout.ts:76](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/PatternLayout.ts#L76)

Pattern layout for logging messages (根据指定模版格式化日志内容)

#### Implements

- [`ILayout`](typings.md#ilayout)

#### Constructors

##### Constructor

> **new default**(`pattern`, `createConverter`?): [`default`](#default)

Defined in: [PatternLayout.ts:84](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/PatternLayout.ts#L84)

Constructor (构造函数)

###### Parameters

###### pattern

`string` = `'[%d{YYYY-MM-DD HH:mm:ss.SSSZ}] %p %c - %m'`

Pattern string (模版字符串)

###### createConverter?

[`TCreateConverter`](typings.md#tcreateconverter)

###### Returns

[`default`](#default)

#### Methods

##### format()

> **format**(`event`): `string`

Defined in: [PatternLayout.ts:153](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/PatternLayout.ts#L153)

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

Defined in: [PatternLayout.ts:144](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/PatternLayout.ts#L144)

Add a converter (添加转换器)

###### Parameters

###### fn

[`TPatternConverter`](typings.md#tpatternconverter)

Converter function (转换器函数)

###### Returns

`this`
