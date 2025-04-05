[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / FileAppender

# FileAppender

## Classes

### default

Defined in: [FileAppender.ts:8](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/FileAppender.ts#L8)

File Appender (文件记录器)

#### Extends

- [`default`](BaseFileAppender.md#default)

#### Constructors

##### Constructor

> **new default**(`filePath`, `options`): [`default`](#default)

Defined in: [BaseFileAppender.ts:22](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L22)

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

###### Inherited from

[`default`](BaseFileAppender.md#default).[`constructor`](BaseFileAppender.md#default#constructor)

#### Properties

##### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: [BaseFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L23)

File path (文件路径)

###### Inherited from

[`default`](BaseFileAppender.md#default).[`filePath`](BaseFileAppender.md#default#filepath)

##### layout

> `readonly` **layout**: `ILayout`

Defined in: [BaseFileAppender.ts:15](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L15)

###### Inherited from

[`default`](BaseFileAppender.md#default).[`layout`](BaseFileAppender.md#default#layout)

##### name

> **name**: `string` = `'file'`

Defined in: [FileAppender.ts:9](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/FileAppender.ts#L9)

###### Overrides

[`default`](BaseFileAppender.md#default).[`name`](BaseFileAppender.md#default#name)

##### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](typings.md#baseappenderoptions) = `{}`

Defined in: [BaseFileAppender.ts:24](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L24)

Options (选项)

###### Inherited from

[`default`](BaseFileAppender.md#default).[`options`](BaseFileAppender.md#default#options)

##### stream

> **stream**: `Writable`

Defined in: [BaseFileAppender.ts:14](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L14)

###### Inherited from

[`default`](BaseFileAppender.md#default).[`stream`](BaseFileAppender.md#default#stream)

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [BaseFileAppender.ts:50](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L50)

Close appender

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`default`](BaseFileAppender.md#default).[`close`](BaseFileAppender.md#default#close)

##### getStream()

> `protected` **getStream**(`filePath`, `options`): `FileStream`

Defined in: [FileAppender.ts:15](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/FileAppender.ts#L15)

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

[`default`](BaseFileAppender.md#default).[`getStream`](BaseFileAppender.md#default#getstream)

##### setup()

> **setup**(): `void`

Defined in: [BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L30)

###### Returns

`void`

###### Inherited from

[`default`](BaseFileAppender.md#default).[`setup`](BaseFileAppender.md#default#setup)

##### write()

> **write**(`logEvent`): `void`

Defined in: [BaseFileAppender.ts:38](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L38)

Write log event

###### Parameters

###### logEvent

`LogEvent`

Log event (日志事件)

###### Returns

`void`

###### Inherited from

[`default`](BaseFileAppender.md#default).[`write`](BaseFileAppender.md#default#write)
