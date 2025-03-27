[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / BaseFileAppender

# BaseFileAppender

## Classes

### `abstract` default

Defined in: [BaseFileAppender.ts:12](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L12)

Base file appender (文件日志基类)

#### Extended by

- [`default`](DateFileAppender.md#default)
- [`default`](FileAppender.md#default)

#### Implements

- `IAppender`

#### Constructors

##### Constructor

> **new default**(`filePath`, `options`): [`default`](#default)

Defined in: [BaseFileAppender.ts:22](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L22)

Constructor

###### Parameters

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](typings.md#baseappenderoptions) = `{}`

Options (选项)

###### Returns

[`default`](#default)

#### Properties

##### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: [BaseFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L23)

File path (文件路径)

##### layout

> `readonly` **layout**: `ILayout`

Defined in: [BaseFileAppender.ts:15](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L15)

##### name

> **name**: `string` = `'baseFile'`

Defined in: [BaseFileAppender.ts:13](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L13)

###### Implementation of

`IAppender.name`

##### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](typings.md#baseappenderoptions) = `{}`

Defined in: [BaseFileAppender.ts:24](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L24)

Options (选项)

##### stream

> **stream**: `Writable`

Defined in: [BaseFileAppender.ts:14](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L14)

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [BaseFileAppender.ts:50](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L50)

Close appender

###### Returns

`Promise`\<`void`\>

###### Implementation of

`IAppender.close`

##### getStream()

> `abstract` `protected` **getStream**(`filePath`, `options`): `Writable`

Defined in: [BaseFileAppender.ts:59](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L59)

Get stream (获取流)

###### Parameters

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](typings.md#baseappenderoptions)

Options (选项)

###### Returns

`Writable`

##### setup()

> **setup**(): `void`

Defined in: [BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L30)

###### Returns

`void`

###### Implementation of

`IAppender.setup`

##### write()

> **write**(`logEvent`): `void`

Defined in: [BaseFileAppender.ts:38](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/BaseFileAppender.ts#L38)

Write log event

###### Parameters

###### logEvent

`LogEvent`

Log event (日志事件)

###### Returns

`void`

###### Implementation of

`IAppender.write`
