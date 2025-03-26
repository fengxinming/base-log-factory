[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [file-appender/src/BaseFileAppender](../index.md) / default

# 类: `abstract` default

定义于: file-appender/src/BaseFileAppender.ts:12

Base file appender (文件日志基类)

## 继承于

- [`default`](../../DateFileAppender/classes/default.md)
- [`default`](../../FileAppender/classes/default.md)

## 实现

- `IAppender`

## 构造函数

### 构造函数

> **new default**(`filePath`, `options`): `BaseFileAppender`

定义于: file-appender/src/BaseFileAppender.ts:22

Constructor

#### 参数

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

Options (选项)

#### 返回

`BaseFileAppender`

## 属性

### filePath

> `protected` `readonly` **filePath**: `string`

定义于: file-appender/src/BaseFileAppender.ts:23

File path (文件路径)

***

### layout

> `readonly` **layout**: `ILayout`

定义于: file-appender/src/BaseFileAppender.ts:15

***

### name

> **name**: `string` = `'baseFile'`

定义于: file-appender/src/BaseFileAppender.ts:13

#### 实现了

`IAppender.name`

***

### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

定义于: file-appender/src/BaseFileAppender.ts:24

Options (选项)

***

### stream

> **stream**: `Writable`

定义于: file-appender/src/BaseFileAppender.ts:14

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: file-appender/src/BaseFileAppender.ts:50

Close appender

#### 返回

`Promise`\<`void`\>

#### 实现了

`IAppender.close`

***

### getStream()

> `abstract` `protected` **getStream**(`filePath`, `options`): `Writable`

定义于: file-appender/src/BaseFileAppender.ts:59

Get stream (获取流)

#### 参数

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md)

Options (选项)

#### 返回

`Writable`

***

### setup()

> **setup**(): `void`

定义于: file-appender/src/BaseFileAppender.ts:30

#### 返回

`void`

#### 实现了

`IAppender.setup`

***

### write()

> **write**(`logEvent`): `void`

定义于: file-appender/src/BaseFileAppender.ts:38

Write log event

#### 参数

##### logEvent

`LogEvent`

Log event (日志事件)

#### 返回

`void`

#### 实现了

`IAppender.write`
