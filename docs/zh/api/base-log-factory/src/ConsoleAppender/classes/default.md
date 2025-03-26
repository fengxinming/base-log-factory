[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/ConsoleAppender](../index.md) / default

# 类: default

定义于: base-log-factory/src/ConsoleAppender.ts:7

Console appender (控制台输出)

## 实现

- [`IAppender`](../../typings/interfaces/IAppender.md)

## 构造函数

### 构造函数

> **new default**(`layout`?): `ConsoleAppender`

定义于: base-log-factory/src/ConsoleAppender.ts:15

Constructor (构造函数)

#### 参数

##### layout?

[`ILayout`](../../typings/interfaces/ILayout.md)

Layout (布局)

#### 返回

`ConsoleAppender`

## 属性

### dateFormat

> **dateFormat**: `string` = `'HH:mm:ss.SSSZ'`

定义于: base-log-factory/src/ConsoleAppender.ts:9

***

### layout?

> `optional` **layout**: [`ILayout`](../../typings/interfaces/ILayout.md)

定义于: base-log-factory/src/ConsoleAppender.ts:15

Layout (布局)

***

### name

> **name**: `string` = `'console'`

定义于: base-log-factory/src/ConsoleAppender.ts:8

#### 实现了

[`IAppender`](../../typings/interfaces/IAppender.md).[`name`](../../typings/interfaces/IAppender.md#name)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: base-log-factory/src/ConsoleAppender.ts:42

Close appender (关闭输出)

#### 返回

`Promise`\<`void`\>

#### 实现了

[`IAppender`](../../typings/interfaces/IAppender.md).[`close`](../../typings/interfaces/IAppender.md#close)

***

### setup()

> **setup**(`logger`): `void`

定义于: base-log-factory/src/ConsoleAppender.ts:19

#### 参数

##### logger

[`ILogger`](../../typings/interfaces/ILogger.md)

#### 返回

`void`

#### 实现了

[`IAppender`](../../typings/interfaces/IAppender.md).[`setup`](../../typings/interfaces/IAppender.md#setup)

***

### write()

> **write**(`event`): `void`

定义于: base-log-factory/src/ConsoleAppender.ts:27

Write log (写入日志)

#### 参数

##### event

[`LogEvent`](../../typings/interfaces/LogEvent.md)

Log event (日志事件)

#### 返回

`void`

#### 实现了

[`IAppender`](../../typings/interfaces/IAppender.md).[`write`](../../typings/interfaces/IAppender.md#write)
