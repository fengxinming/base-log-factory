[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / PatternLayout

# PatternLayout

## 类

### default

定义于: [PatternLayout.ts:76](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/PatternLayout.ts#L76)

Pattern layout for logging messages (根据指定模版格式化日志内容)

#### 实现

- [`ILayout`](typings.md#ilayout)

#### 构造函数

##### 构造函数

> **new default**(`pattern`, `createConverter?`): [`default`](#default)

定义于: [PatternLayout.ts:84](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/PatternLayout.ts#L84)

Constructor (构造函数)

###### 参数

###### pattern

`string` = `'[%d{YYYY-MM-DD HH:mm:ss.SSSZ}] %p %c - %m'`

Pattern string (模版字符串)

###### createConverter?

[`TCreateConverter`](typings.md#tcreateconverter)

###### 返回

[`default`](#default)

#### 方法

##### format()

> **format**(`event`): `string`

定义于: [PatternLayout.ts:153](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/PatternLayout.ts#L153)

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

定义于: [PatternLayout.ts:144](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/PatternLayout.ts#L144)

Add a converter (添加转换器)

###### 参数

###### fn

[`TPatternConverter`](typings.md#tpatternconverter)

Converter function (转换器函数)

###### 返回

`this`
