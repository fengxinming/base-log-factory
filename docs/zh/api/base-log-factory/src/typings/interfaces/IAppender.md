[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/typings](../index.md) / IAppender

# 接口: IAppender

定义于: base-log-factory/src/typings.ts:54

Appender interface (日志记录器接口)

## 属性

### name

> **name**: `string`

定义于: base-log-factory/src/typings.ts:55

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: base-log-factory/src/typings.ts:58

#### 返回

`Promise`\<`void`\>

***

### setup()

> **setup**(`logger`): `void`

定义于: base-log-factory/src/typings.ts:56

#### 参数

##### logger

[`ILogger`](ILogger.md)

#### 返回

`void`

***

### write()

> **write**(`event`): `void`

定义于: base-log-factory/src/typings.ts:57

#### 参数

##### event

[`LogEvent`](LogEvent.md)

#### 返回

`void`
