[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / ConsoleAppender

# 类: ConsoleAppender

定义于: [appenders/ConsoleAppender.ts:7](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/appenders/ConsoleAppender.ts#L7)

Console appender (控制台输出)

## 实现

- [`IAppender`](../interfaces/IAppender.md)

## 构造函数

### new ConsoleAppender()

> **new ConsoleAppender**(`layout`?): `ConsoleAppender`

定义于: [appenders/ConsoleAppender.ts:12](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/appenders/ConsoleAppender.ts#L12)

Constructor (构造函数)

#### 参数

##### layout?

[`ILayout`](../interfaces/ILayout.md)

Layout (布局)

#### 返回

`ConsoleAppender`

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [appenders/ConsoleAppender.ts:33](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/appenders/ConsoleAppender.ts#L33)

Close appender (关闭输出)

#### 返回

`Promise`\<`void`\>

#### 实现了

[`IAppender`](../interfaces/IAppender.md).[`close`](../interfaces/IAppender.md#close)

***

### write()

> **write**(`event`): `void`

定义于: [appenders/ConsoleAppender.ts:18](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/appenders/ConsoleAppender.ts#L18)

Write log (写入日志)

#### 参数

##### event

[`ILogEvent`](../interfaces/ILogEvent.md)

Log event (日志事件)

#### 返回

`void`

#### 实现了

[`IAppender`](../interfaces/IAppender.md).[`write`](../interfaces/IAppender.md#write)
