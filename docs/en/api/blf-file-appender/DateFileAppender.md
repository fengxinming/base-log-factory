[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / DateFileAppender

# DateFileAppender

## Classes

### DateFileAppender

Defined in: [DateFileAppender.ts:16](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L16)

Date File Appender (日期文件记录器)

#### Extends

- [`BaseFileAppender`](BaseFileAppender.md#basefileappender)

#### Constructors

##### Constructor

> **new DateFileAppender**(`filePath`, `options`): [`DateFileAppender`](#datefileappender)

Defined in: [DateFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L23)

Constructor (构造函数)

###### Parameters

###### filePath

`string`

File path (文件路径)

###### options

[`DateFileAppenderOptions`](#datefileappenderoptions-1)

Options (选项)

###### Returns

[`DateFileAppender`](#datefileappender)

###### Overrides

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

> **name**: `string` = `'dateFile'`

Defined in: [DateFileAppender.ts:17](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L17)

###### Overrides

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`name`](BaseFileAppender.md#basefileappender#name)

##### options

> `protected` `readonly` **options**: [`DateFileAppenderOptions`](#datefileappenderoptions-1)

Defined in: [DateFileAppender.ts:25](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L25)

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

> `protected` **getStream**(`filePath`, `options`): `DateFileStream`

Defined in: [DateFileAppender.ts:35](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L35)

Get stream (获取流)

###### Parameters

###### filePath

`any`

File path (文件路径)

###### options

`any`

Options (选项)

###### Returns

`DateFileStream`

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

### DateFileAppenderOptions

> **DateFileAppenderOptions** = [`BaseAppenderOptions`](BaseFileAppender.md#baseappenderoptions) & `Partial`\<`DateRollingOptions`\>

Defined in: [DateFileAppender.ts:10](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L10)

Date file appender options (日志记录器日期文件选项)
