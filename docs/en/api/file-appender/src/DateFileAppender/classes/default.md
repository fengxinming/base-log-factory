[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [file-appender/src/DateFileAppender](../index.md) / default

# Class: default

Defined in: file-appender/src/DateFileAppender.ts:9

Date File Appender (日期文件记录器)

## Extends

- [`default`](../../BaseFileAppender/classes/default.md)

## Constructors

### Constructor

> **new default**(`filePath`, `options`): `DateFileAppender`

Defined in: file-appender/src/DateFileAppender.ts:16

Constructor (构造函数)

#### Parameters

##### filePath

`string`

File path (文件路径)

##### options

[`DateFileAppenderOptions`](../../typings/type-aliases/DateFileAppenderOptions.md)

Options (选项)

#### Returns

`DateFileAppender`

#### Overrides

[`default`](../../BaseFileAppender/classes/default.md).[`constructor`](../../BaseFileAppender/classes/default.md#constructor)

## Properties

### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: file-appender/src/BaseFileAppender.ts:23

File path (文件路径)

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`filePath`](../../BaseFileAppender/classes/default.md#filepath)

***

### layout

> `readonly` **layout**: `ILayout`

Defined in: file-appender/src/BaseFileAppender.ts:15

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`layout`](../../BaseFileAppender/classes/default.md#layout)

***

### name

> **name**: `string` = `'dateFile'`

Defined in: file-appender/src/DateFileAppender.ts:10

#### Overrides

[`default`](../../BaseFileAppender/classes/default.md).[`name`](../../BaseFileAppender/classes/default.md#name)

***

### options

> `protected` `readonly` **options**: [`DateFileAppenderOptions`](../../typings/type-aliases/DateFileAppenderOptions.md)

Defined in: file-appender/src/DateFileAppender.ts:18

Options (选项)

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`options`](../../BaseFileAppender/classes/default.md#options)

***

### stream

> **stream**: `Writable`

Defined in: file-appender/src/BaseFileAppender.ts:14

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`stream`](../../BaseFileAppender/classes/default.md#stream)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: file-appender/src/BaseFileAppender.ts:50

Close appender

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`close`](../../BaseFileAppender/classes/default.md#close)

***

### getStream()

> `protected` **getStream**(`filePath`, `options`): `DateFileStream`

Defined in: file-appender/src/DateFileAppender.ts:28

Get stream (获取流)

#### Parameters

##### filePath

`any`

File path (文件路径)

##### options

`any`

Options (选项)

#### Returns

`DateFileStream`

#### Overrides

[`default`](../../BaseFileAppender/classes/default.md).[`getStream`](../../BaseFileAppender/classes/default.md#getstream)

***

### setup()

> **setup**(): `void`

Defined in: file-appender/src/BaseFileAppender.ts:30

#### Returns

`void`

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`setup`](../../BaseFileAppender/classes/default.md#setup)

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

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`write`](../../BaseFileAppender/classes/default.md#write)
