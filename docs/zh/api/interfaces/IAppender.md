[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / IAppender

# 接口: IAppender

定义于: [typings.ts:62](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L62)

Appender interface (日志记录器接口)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [typings.ts:64](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L64)

#### 返回

`Promise`\<`void`\>

***

### write()

> **write**(`event`): `void`

定义于: [typings.ts:63](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/typings.ts#L63)

#### 参数

##### event

[`ILogEvent`](ILogEvent.md)

#### 返回

`void`
