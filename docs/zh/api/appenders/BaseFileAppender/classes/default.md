[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [appenders/BaseFileAppender](../index.md) / default

# 类: `abstract` default

定义于: [appenders/BaseFileAppender.ts:10](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L10)

Base file appender (文件日志基类)

## 继承于

- [`default`](../../DateFileAppender/classes/default.md)
- [`default`](../../FileAppender/classes/default.md)

## 实现

- [`IAppender`](../../../typings/interfaces/IAppender.md)

## 构造函数

### new default()

> **new default**(`filePath`, `options`): `BaseFileAppender`

定义于: [appenders/BaseFileAppender.ts:20](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L20)

Constructor

#### 参数

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../../typings/type-aliases/BaseAppenderOptions.md)

Options (选项)

#### 返回

`BaseFileAppender`

## 属性

### filePath

> `protected` `readonly` **filePath**: `string`

定义于: [appenders/BaseFileAppender.ts:21](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L21)

File path (文件路径)

***

### name

> **name**: `string` = `'baseFile'`

定义于: [appenders/BaseFileAppender.ts:11](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L11)

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`name`](../../../typings/interfaces/IAppender.md#name)

***

### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](../../../typings/type-aliases/BaseAppenderOptions.md)

定义于: [appenders/BaseFileAppender.ts:22](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L22)

Options (选项)

***

### stream

> `protected` **stream**: `Writable`

定义于: [appenders/BaseFileAppender.ts:12](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L12)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [appenders/BaseFileAppender.ts:48](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L48)

Close appender

#### 返回

`Promise`\<`void`\>

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`close`](../../../typings/interfaces/IAppender.md#close)

***

### getStream()

> `abstract` `protected` **getStream**(`filePath`, `options`): `Writable`

定义于: [appenders/BaseFileAppender.ts:57](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L57)

Get stream (获取流)

#### 参数

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../../typings/type-aliases/BaseAppenderOptions.md)

Options (选项)

#### 返回

`Writable`

***

### setup()

> **setup**(): `void`

定义于: [appenders/BaseFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L28)

#### 返回

`void`

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`setup`](../../../typings/interfaces/IAppender.md#setup)

***

### write()

> **write**(`logEvent`): `void`

定义于: [appenders/BaseFileAppender.ts:36](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L36)

Write log event

#### 参数

##### logEvent

[`ILogEvent`](../../../typings/interfaces/ILogEvent.md)

Log event (日志事件)

#### 返回

`void`

#### 实现了

[`IAppender`](../../../typings/interfaces/IAppender.md).[`write`](../../../typings/interfaces/IAppender.md#write)
