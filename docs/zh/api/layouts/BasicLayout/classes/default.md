[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [layouts/BasicLayout](../index.md) / default

# 类: default

定义于: [layouts/BasicLayout.ts:13](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/BasicLayout.ts#L13)

Basic layout for logging messages (基础的日志布局)

## 实现

- [`ILayout`](../../../typings/interfaces/ILayout.md)

## 构造函数

### new default()

> **new default**(): `BasicLayout`

#### 返回

`BasicLayout`

## 方法

### format()

> **format**(`event`): `string`

定义于: [layouts/BasicLayout.ts:27](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/BasicLayout.ts#L27)

Format the log event (格式化日志事件)

#### 参数

##### event

[`ILogEvent`](../../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

#### 返回

`string`

#### 实现了

[`ILayout`](../../../typings/interfaces/ILayout.md).[`format`](../../../typings/interfaces/ILayout.md#format)

***

### transform()

> `static` **transform**(`message`): `string`

定义于: [layouts/BasicLayout.ts:19](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/layouts/BasicLayout.ts#L19)

Transform the message (转换消息)

#### 参数

##### message

`any`[]

Message (消息)

#### 返回

`string`
