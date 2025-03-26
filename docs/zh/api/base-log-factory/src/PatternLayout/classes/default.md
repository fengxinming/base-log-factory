[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/PatternLayout](../index.md) / default

# 类: default

定义于: [base-log-factory/src/PatternLayout.ts:109](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/PatternLayout.ts#L109)

Pattern layout for logging messages (根据指定模版格式化日志内容)

## 实现

- [`ILayout`](../../typings/interfaces/ILayout.md)

## 构造函数

### 构造函数

> **new default**(`pattern`): `PatternLayout`

定义于: [base-log-factory/src/PatternLayout.ts:117](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/PatternLayout.ts#L117)

Constructor (构造函数)

#### 参数

##### pattern

`string` = `'[%d{YYYY-MM-DD HH:mm:ss.SSSZ}] %p %c - %m'`

Pattern string (模版字符串)

#### 返回

`PatternLayout`

## 方法

### format()

> **format**(`event`): `string`

定义于: [base-log-factory/src/PatternLayout.ts:138](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/PatternLayout.ts#L138)

Format a log event (格式化日志事件)

#### 参数

##### event

[`LogEvent`](../../typings/interfaces/LogEvent.md)

Log event (日志事件)

#### 返回

`string`

#### 实现了

[`ILayout`](../../typings/interfaces/ILayout.md).[`format`](../../typings/interfaces/ILayout.md#format)

***

### use()

> **use**(`fn`): `this`

定义于: [base-log-factory/src/PatternLayout.ts:129](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/PatternLayout.ts#L129)

Add a converter (添加转换器)

#### 参数

##### fn

[`TPatternConverter`](../../typings/type-aliases/TPatternConverter.md)

Converter function (转换器函数)

#### 返回

`this`
