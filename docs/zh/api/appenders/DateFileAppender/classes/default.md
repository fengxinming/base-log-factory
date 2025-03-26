[**base-log-factory**](../../../index.md)

***

[base-log-factory](../../../index.md) / [appenders/DateFileAppender](../index.md) / default

# 类: default

定义于: [appenders/DateFileAppender.ts:9](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L9)

Date File Appender (日期文件记录器)

## 继承

- [`default`](../../BaseFileAppender/classes/default.md)

## 构造函数

### new default()

> **new default**(`filePath`, `options`): `DateFileAppender`

定义于: [appenders/DateFileAppender.ts:16](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L16)

Constructor (构造函数)

#### 参数

##### filePath

`string`

File path (文件路径)

##### options

[`DateFileAppenderOptions`](../../../typings/type-aliases/DateFileAppenderOptions.md)

Options (选项)

#### 返回

`DateFileAppender`

#### 重写了

[`default`](../../BaseFileAppender/classes/default.md).[`constructor`](../../BaseFileAppender/classes/default.md#constructor)

## 属性

### filePath

> `protected` `readonly` **filePath**: `string`

定义于: [appenders/BaseFileAppender.ts:21](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L21)

File path (文件路径)

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`filePath`](../../BaseFileAppender/classes/default.md#filepath)

***

### name

> **name**: `string` = `'dateFile'`

定义于: [appenders/DateFileAppender.ts:10](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L10)

#### 重写了

[`default`](../../BaseFileAppender/classes/default.md).[`name`](../../BaseFileAppender/classes/default.md#name)

***

### options

> `protected` `readonly` **options**: [`DateFileAppenderOptions`](../../../typings/type-aliases/DateFileAppenderOptions.md)

定义于: [appenders/DateFileAppender.ts:18](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L18)

Options (选项)

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`options`](../../BaseFileAppender/classes/default.md#options)

***

### stream

> `protected` **stream**: `Writable`

定义于: [appenders/BaseFileAppender.ts:12](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L12)

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`stream`](../../BaseFileAppender/classes/default.md#stream)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [appenders/BaseFileAppender.ts:48](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L48)

Close appender

#### 返回

`Promise`\<`void`\>

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`close`](../../BaseFileAppender/classes/default.md#close)

***

### getStream()

> `protected` **getStream**(`filePath`, `options`): `DateFileStream`

定义于: [appenders/DateFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/DateFileAppender.ts#L28)

Get stream (获取流)

#### 参数

##### filePath

`any`

File path (文件路径)

##### options

`any`

Options (选项)

#### 返回

`DateFileStream`

#### 重写了

[`default`](../../BaseFileAppender/classes/default.md).[`getStream`](../../BaseFileAppender/classes/default.md#getstream)

***

### setup()

> **setup**(): `void`

定义于: [appenders/BaseFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/6b764da5f85b664c1af10f4ba24b07aad1c0ef20/src/appenders/BaseFileAppender.ts#L28)

#### 返回

`void`

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`setup`](../../BaseFileAppender/classes/default.md#setup)

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

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`write`](../../BaseFileAppender/classes/default.md#write)
