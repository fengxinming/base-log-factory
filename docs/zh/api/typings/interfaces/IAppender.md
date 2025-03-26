[**base-log-factory**](../../index.md)

***

[base-log-factory](../../index.md) / [typings](../index.md) / IAppender

# 接口: IAppender

定义于: [typings.ts:63](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L63)

Appender interface (日志记录器接口)

## 属性

### name

> **name**: `string`

定义于: [typings.ts:64](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L64)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [typings.ts:67](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L67)

#### 返回

`Promise`\<`void`\>

***

### setup()

> **setup**(`logger`): `void`

定义于: [typings.ts:65](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L65)

#### 参数

##### logger

[`ILogger`](ILogger.md)

#### 返回

`void`

***

### write()

> **write**(`event`): `void`

定义于: [typings.ts:66](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/typings.ts#L66)

#### 参数

##### event

[`ILogEvent`](ILogEvent.md)

#### 返回

`void`
