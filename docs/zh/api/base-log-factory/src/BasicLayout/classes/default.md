[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/BasicLayout](../index.md) / default

# 类: default

定义于: [base-log-factory/src/BasicLayout.ts:8](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/BasicLayout.ts#L8)

Basic layout for logging messages (基础的日志布局)

## 实现

- [`ILayout`](../../typings/interfaces/ILayout.md)

## 构造函数

### 构造函数

> **new default**(): `BasicLayout`

#### 返回

`BasicLayout`

## 方法

### format()

> **format**(`event`): `string`

定义于: [base-log-factory/src/BasicLayout.ts:13](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/base-log-factory/src/BasicLayout.ts#L13)

Format the log event (格式化日志事件)

#### 参数

##### event

[`LogEvent`](../../typings/interfaces/LogEvent.md)

Log event (日志事件)

#### 返回

`string`

#### 实现了

[`ILayout`](../../typings/interfaces/ILayout.md).[`format`](../../typings/interfaces/ILayout.md#format)
