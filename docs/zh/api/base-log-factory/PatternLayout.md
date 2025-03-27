[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / PatternLayout

# PatternLayout

## 类

### default

定义于: [PatternLayout.ts:109](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/PatternLayout.ts#L109)

Pattern layout for logging messages (根据指定模版格式化日志内容)

#### 实现

- [`ILayout`](typings.md#ilayout)

#### 构造函数

##### 构造函数

> **new default**(`pattern`): [`default`](#default)

定义于: [PatternLayout.ts:117](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/PatternLayout.ts#L117)

Constructor (构造函数)

###### 参数

###### pattern

`string` = `'[%d{YYYY-MM-DD HH:mm:ss.SSSZ}] %p %c - %m'`

Pattern string (模版字符串)

###### 返回

[`default`](#default)

#### 方法

##### format()

> **format**(`event`): `string`

定义于: [PatternLayout.ts:138](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/PatternLayout.ts#L138)

Format a log event (格式化日志事件)

###### 参数

###### event

[`LogEvent`](typings.md#logevent)

Log event (日志事件)

###### 返回

`string`

###### 实现了

[`ILayout`](typings.md#ilayout).[`format`](typings.md#ilayout#format)

##### use()

> **use**(`fn`): `this`

定义于: [PatternLayout.ts:129](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/PatternLayout.ts#L129)

Add a converter (添加转换器)

###### 参数

###### fn

[`TPatternConverter`](typings.md#tpatternconverter)

Converter function (转换器函数)

###### 返回

`this`
