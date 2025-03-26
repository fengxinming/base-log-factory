[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/typings](../index.md) / IAppender

# 接口: IAppender

定义于: [base-log-factory/src/typings.ts:54](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L54)

Appender interface (日志记录器接口)

## 属性

### name

> **name**: `string`

定义于: [base-log-factory/src/typings.ts:55](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L55)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [base-log-factory/src/typings.ts:58](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L58)

#### 返回

`Promise`\<`void`\>

***

### setup()

> **setup**(`logger`): `void`

定义于: [base-log-factory/src/typings.ts:56](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L56)

#### 参数

##### logger

[`ILogger`](ILogger.md)

#### 返回

`void`

***

### write()

> **write**(`event`): `void`

定义于: [base-log-factory/src/typings.ts:57](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L57)

#### 参数

##### event

[`LogEvent`](LogEvent.md)

#### 返回

`void`
