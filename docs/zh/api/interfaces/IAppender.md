[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / IAppender

# 接口: IAppender

定义于: [typings.ts:63](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L63)

Appender interface (日志记录器接口)

## 属性

### name

> **name**: `string`

定义于: [typings.ts:64](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L64)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [typings.ts:66](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L66)

#### 返回

`Promise`\<`void`\>

***

### write()

> **write**(`event`): `void`

定义于: [typings.ts:65](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L65)

#### 参数

##### event

[`ILogEvent`](ILogEvent.md)

#### 返回

`void`
