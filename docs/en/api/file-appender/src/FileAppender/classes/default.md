[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [file-appender/src/FileAppender](../index.md) / default

# Class: default

Defined in: [file-appender/src/FileAppender.ts:8](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/FileAppender.ts#L8)

File Appender (文件记录器)

## Extends

- [`default`](../../BaseFileAppender/classes/default.md)

## Constructors

### Constructor

> **new default**(`filePath`, `options`): `FileAppender`

Defined in: [file-appender/src/BaseFileAppender.ts:22](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L22)

Constructor

#### Parameters

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

Options (选项)

#### Returns

`FileAppender`

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`constructor`](../../BaseFileAppender/classes/default.md#constructor)

## Properties

### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: [file-appender/src/BaseFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L23)

File path (文件路径)

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`filePath`](../../BaseFileAppender/classes/default.md#filepath)

***

### layout

> `readonly` **layout**: `ILayout`

Defined in: [file-appender/src/BaseFileAppender.ts:15](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L15)

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`layout`](../../BaseFileAppender/classes/default.md#layout)

***

### name

> **name**: `string` = `'file'`

Defined in: [file-appender/src/FileAppender.ts:9](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/FileAppender.ts#L9)

#### Overrides

[`default`](../../BaseFileAppender/classes/default.md).[`name`](../../BaseFileAppender/classes/default.md#name)

***

### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

Defined in: [file-appender/src/BaseFileAppender.ts:24](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L24)

Options (选项)

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`options`](../../BaseFileAppender/classes/default.md#options)

***

### stream

> **stream**: `Writable`

Defined in: [file-appender/src/BaseFileAppender.ts:14](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L14)

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`stream`](../../BaseFileAppender/classes/default.md#stream)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [file-appender/src/BaseFileAppender.ts:50](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L50)

Close appender

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`close`](../../BaseFileAppender/classes/default.md#close)

***

### getStream()

> `protected` **getStream**(`filePath`, `options`): `FileStream`

Defined in: [file-appender/src/FileAppender.ts:15](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/FileAppender.ts#L15)

Get write stream (获取写入流)

#### Parameters

##### filePath

`any`

File path (文件路径)

##### options

`any`

Write stream options (写入流选项)

#### Returns

`FileStream`

#### Overrides

[`default`](../../BaseFileAppender/classes/default.md).[`getStream`](../../BaseFileAppender/classes/default.md#getstream)

***

### setup()

> **setup**(): `void`

Defined in: [file-appender/src/BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L30)

#### Returns

`void`

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`setup`](../../BaseFileAppender/classes/default.md#setup)

***

### write()

> **write**(`logEvent`): `void`

Defined in: [file-appender/src/BaseFileAppender.ts:38](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L38)

Write log event

#### Parameters

##### logEvent

`LogEvent`

Log event (日志事件)

#### Returns

`void`

#### Inherited from

[`default`](../../BaseFileAppender/classes/default.md).[`write`](../../BaseFileAppender/classes/default.md#write)
