[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [appenders/ConsoleAppender](../index.md) / default

# 类: default

定义于: [appenders/ConsoleAppender.ts:11](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L11)

Console appender (控制台输出)

## 实现

- [`IAppender`](../../../typings/interfaces/IAppender.md)

## 构造函数

### new default()

> **new default**(`layout`?, `colors`?): `ConsoleAppender`

定义于: [appenders/ConsoleAppender.ts:18](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L18)

Constructor (构造函数)

#### 参数

##### layout?

[`ILayout`](../../../typings/interfaces/ILayout.md)

Layout (布局)

##### colors?

`Record`\<[`Level`](../../../index/enumerations/Level.md), `string`\>

#### 返回

`ConsoleAppender`

## 属性

### colors

> **colors**: `Record`\<[`Level`](../../../index/enumerations/Level.md), `string`\>

定义于: [appenders/ConsoleAppender.ts:13](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L13)

***

### layout?

> `readonly` `optional` **layout**: [`ILayout`](../../../typings/interfaces/ILayout.md)

定义于: [appenders/ConsoleAppender.ts:18](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L18)

Layout (布局)

***

### name

> **name**: `string` = `'console'`

定义于: [appenders/ConsoleAppender.ts:12](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L12)

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`name`](../../../typings/interfaces/IAppender.md#name)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [appenders/ConsoleAppender.ts:47](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L47)

Close appender (关闭输出)

#### 返回

`Promise`\<`void`\>

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`close`](../../../typings/interfaces/IAppender.md#close)

***

### setup()

> **setup**(): `void`

定义于: [appenders/ConsoleAppender.ts:22](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L22)

#### 返回

`void`

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`setup`](../../../typings/interfaces/IAppender.md#setup)

***

### write()

> **write**(`event`): `void`

定义于: [appenders/ConsoleAppender.ts:30](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/ConsoleAppender.ts#L30)

Write log (写入日志)

#### 参数

##### event

[`ILogEvent`](../../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

#### 返回

`void`

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`write`](../../../typings/interfaces/IAppender.md#write)
