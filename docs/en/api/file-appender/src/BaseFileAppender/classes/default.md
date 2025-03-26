[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [file-appender/src/BaseFileAppender](../index.md) / default

# Class: `abstract` default

Defined in: file-appender/src/BaseFileAppender.ts:12

Base file appender (文件日志基类)

## Extended by

- [`default`](../../DateFileAppender/classes/default.md)
- [`default`](../../FileAppender/classes/default.md)

## Implements

- `IAppender`

## Constructors

### Constructor

> **new default**(`filePath`, `options`): `BaseFileAppender`

Defined in: file-appender/src/BaseFileAppender.ts:22

Constructor

#### Parameters

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

Options (选项)

#### Returns

`BaseFileAppender`

## Properties

### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: file-appender/src/BaseFileAppender.ts:23

File path (文件路径)

***

### layout

> `readonly` **layout**: `ILayout`

Defined in: file-appender/src/BaseFileAppender.ts:15

***

### name

> **name**: `string` = `'baseFile'`

Defined in: file-appender/src/BaseFileAppender.ts:13

#### Implementation of

`IAppender.name`

***

### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

Defined in: file-appender/src/BaseFileAppender.ts:24

Options (选项)

***

### stream

> **stream**: `Writable`

Defined in: file-appender/src/BaseFileAppender.ts:14

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: file-appender/src/BaseFileAppender.ts:50

Close appender

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IAppender.close`

***

### getStream()

> `abstract` `protected` **getStream**(`filePath`, `options`): `Writable`

Defined in: file-appender/src/BaseFileAppender.ts:59

Get stream (获取流)

#### Parameters

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md)

Options (选项)

#### Returns

`Writable`

***

### setup()

> **setup**(): `void`

Defined in: file-appender/src/BaseFileAppender.ts:30

#### Returns

`void`

#### Implementation of

`IAppender.setup`

***

### write()

> **write**(`logEvent`): `void`

Defined in: file-appender/src/BaseFileAppender.ts:38

Write log event

#### Parameters

##### logEvent

`LogEvent`

Log event (日志事件)

#### Returns

`void`

#### Implementation of

`IAppender.write`
