[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / FileAppender

# FileAppender

## Classes

### FileAppender

Defined in: [FileAppender.ts:14](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/FileAppender.ts#L14)

File Appender (文件记录器)

#### Extends

- [`BaseFileAppender`](BaseFileAppender.md#basefileappender)

#### Constructors

##### Constructor

> **new FileAppender**(`filePath`, `options`): [`FileAppender`](#fileappender)

Defined in: [BaseFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L28)

Constructor

###### Parameters

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](BaseFileAppender.md#baseappenderoptions) = `{}`

Options (选项)

###### Returns

[`FileAppender`](#fileappender)

###### Inherited from

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`constructor`](BaseFileAppender.md#basefileappender#constructor)

#### Properties

##### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: [BaseFileAppender.ts:29](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L29)

File path (文件路径)

###### Inherited from

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`filePath`](BaseFileAppender.md#basefileappender#filepath)

##### layout

> `readonly` **layout**: `ILayout`

Defined in: [BaseFileAppender.ts:21](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L21)

###### Inherited from

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`layout`](BaseFileAppender.md#basefileappender#layout)

##### name

> **name**: `string` = `'file'`

Defined in: [FileAppender.ts:15](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/FileAppender.ts#L15)

###### Overrides

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`name`](BaseFileAppender.md#basefileappender#name)

##### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](BaseFileAppender.md#baseappenderoptions) = `{}`

Defined in: [BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L30)

Options (选项)

###### Inherited from

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`options`](BaseFileAppender.md#basefileappender#options)

##### stream

> **stream**: `Writable`

Defined in: [BaseFileAppender.ts:20](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L20)

###### Inherited from

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`stream`](BaseFileAppender.md#basefileappender#stream)

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [BaseFileAppender.ts:56](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L56)

Close appender

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`close`](BaseFileAppender.md#basefileappender#close)

##### getStream()

> `protected` **getStream**(`filePath`, `options`): `FileStream`

Defined in: [FileAppender.ts:21](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/FileAppender.ts#L21)

Get write stream (获取写入流)

###### Parameters

###### filePath

`any`

File path (文件路径)

###### options

`any`

Write stream options (写入流选项)

###### Returns

`FileStream`

###### Overrides

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`getStream`](BaseFileAppender.md#basefileappender#getstream)

##### setup()

> **setup**(): `void`

Defined in: [BaseFileAppender.ts:36](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L36)

###### Returns

`void`

###### Inherited from

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`setup`](BaseFileAppender.md#basefileappender#setup)

##### write()

> **write**(`logEvent`): `void`

Defined in: [BaseFileAppender.ts:44](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L44)

Write log event

###### Parameters

###### logEvent

`LogEvent`

Log event (日志事件)

###### Returns

`void`

###### Inherited from

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`write`](BaseFileAppender.md#basefileappender#write)

## Type Aliases

### FileAppenderOptions

> **FileAppenderOptions** = [`BaseAppenderOptions`](BaseFileAppender.md#baseappenderoptions)

Defined in: [FileAppender.ts:9](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/FileAppender.ts#L9)

File appender options (日志记录器文件选项)
