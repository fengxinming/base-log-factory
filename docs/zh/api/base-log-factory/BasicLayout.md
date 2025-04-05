[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / BasicLayout

# BasicLayout

## 类

### default

定义于: [BasicLayout.ts:8](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/BasicLayout.ts#L8)

Basic layout for logging messages (基础的日志布局)

#### 实现

- [`ILayout`](typings.md#ilayout)

#### 构造函数

##### 构造函数

> **new default**(): [`default`](#default)

###### 返回

[`default`](#default)

#### 方法

##### format()

> **format**(`event`): `string`

定义于: [BasicLayout.ts:13](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/BasicLayout.ts#L13)

Format the log event (格式化日志事件)

###### 参数

###### event

[`LogEvent`](typings.md#logevent)

Log event (日志事件)

###### 返回

`string`

###### 实现了

[`ILayout`](typings.md#ilayout).[`format`](typings.md#ilayout#format)
