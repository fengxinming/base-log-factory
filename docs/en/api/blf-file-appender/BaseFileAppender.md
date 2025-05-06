[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / BaseFileAppender

# BaseFileAppender

## Classes

### `abstract` BaseFileAppender

Defined in: [BaseFileAppender.ts:18](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L18)

Base file appender (文件日志基类)

#### Extended by

- [`DateFileAppender`](DateFileAppender.md#datefileappender)
- [`FileAppender`](FileAppender.md#fileappender)

#### Implements

- `IAppender`

#### Constructors

##### Constructor

> **new BaseFileAppender**(`filePath`, `options`): [`BaseFileAppender`](#basefileappender)

Defined in: [BaseFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L28)

Constructor

###### Parameters

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](#baseappenderoptions) = `{}`

Options (选项)

###### Returns

[`BaseFileAppender`](#basefileappender)

#### Properties

##### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: [BaseFileAppender.ts:29](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L29)

File path (文件路径)

##### layout

> `readonly` **layout**: `ILayout`

Defined in: [BaseFileAppender.ts:21](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L21)

##### name

> **name**: `string` = `'baseFile'`

Defined in: [BaseFileAppender.ts:19](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L19)

###### Implementation of

`IAppender.name`

##### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](#baseappenderoptions) = `{}`

Defined in: [BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L30)

Options (选项)

##### stream

> **stream**: `Writable`

Defined in: [BaseFileAppender.ts:20](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L20)

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [BaseFileAppender.ts:56](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L56)

Close appender

###### Returns

`Promise`\<`void`\>

###### Implementation of

`IAppender.close`

##### getStream()

> `abstract` `protected` **getStream**(`filePath`, `options`): `Writable`

Defined in: [BaseFileAppender.ts:65](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L65)

Get stream (获取流)

###### Parameters

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](#baseappenderoptions)

Options (选项)

###### Returns

`Writable`

##### setup()

> **setup**(): `void`

Defined in: [BaseFileAppender.ts:36](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L36)

###### Returns

`void`

###### Implementation of

`IAppender.setup`

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

###### Implementation of

`IAppender.write`

## Type Aliases

### BaseAppenderOptions

> **BaseAppenderOptions** = `object` & `Partial`\<`RollingOptions`\>

Defined in: [BaseFileAppender.ts:11](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L11)

Base appender options (日志记录器基础选项)

#### Type declaration

##### layout?

> `optional` **layout**: `ILayout`
