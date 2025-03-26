[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [appenders/DebugAppender](../index.md) / default

# 类: default

定义于: [appenders/DebugAppender.ts:12](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L12)

Console appender (控制台输出)

## 实现

- [`IAppender`](../../../typings/interfaces/IAppender.md)

## 构造函数

### new default()

> **new default**(`layout`?, `colors`?): `DebugAppender`

定义于: [appenders/DebugAppender.ts:20](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L20)

Constructor (构造函数)

#### 参数

##### layout?

[`ILayout`](../../../typings/interfaces/ILayout.md)

Layout (布局)

##### colors?

`Record`\<[`Level`](../../../index/enumerations/Level.md), `string`\>

#### 返回

`DebugAppender`

## 属性

### colors

> **colors**: `Record`\<[`Level`](../../../index/enumerations/Level.md), `string`\>

定义于: [appenders/DebugAppender.ts:15](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L15)

***

### debug

> **debug**: `Debugger`

定义于: [appenders/DebugAppender.ts:14](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L14)

***

### layout?

> `readonly` `optional` **layout**: [`ILayout`](../../../typings/interfaces/ILayout.md)

定义于: [appenders/DebugAppender.ts:20](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L20)

Layout (布局)

***

### name

> **name**: `string` = `'debug'`

定义于: [appenders/DebugAppender.ts:13](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L13)

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`name`](../../../typings/interfaces/IAppender.md#name)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [appenders/DebugAppender.ts:54](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L54)

Close appender (关闭输出)

#### 返回

`Promise`\<`void`\>

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`close`](../../../typings/interfaces/IAppender.md#close)

***

### setup()

> **setup**(`__namedParameters`): `void`

定义于: [appenders/DebugAppender.ts:24](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L24)

#### 参数

##### \_\_namedParameters

[`ILogger`](../../../typings/interfaces/ILogger.md)

#### 返回

`void`

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`setup`](../../../typings/interfaces/IAppender.md#setup)

***

### write()

> **write**(`event`): `void`

定义于: [appenders/DebugAppender.ts:35](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DebugAppender.ts#L35)

Write log (写入日志)

#### 参数

##### event

[`ILogEvent`](../../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

#### 返回

`void`

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`write`](../../../typings/interfaces/IAppender.md#write)
