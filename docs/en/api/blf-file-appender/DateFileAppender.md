[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / DateFileAppender

# DateFileAppender

## Classes

### default

Defined in: [DateFileAppender.ts:9](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/DateFileAppender.ts#L9)

Date File Appender (日期文件记录器)

#### Extends

- [`default`](BaseFileAppender.md#default)

#### Constructors

##### Constructor

> **new default**(`filePath`, `options`): [`default`](#default)

Defined in: [DateFileAppender.ts:16](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/DateFileAppender.ts#L16)

Constructor (构造函数)

###### Parameters

###### filePath

`string`

File path (文件路径)

###### options

[`DateFileAppenderOptions`](typings.md#datefileappenderoptions)

Options (选项)

###### Returns

[`default`](#default)

###### Overrides

[`default`](BaseFileAppender.md#default).[`constructor`](BaseFileAppender.md#default#constructor)

#### Properties

##### filePath

> `protected` `readonly` **filePath**: `string`

Defined in: [BaseFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/BaseFileAppender.ts#L23)

File path (文件路径)

###### Inherited from

[`default`](BaseFileAppender.md#default).[`filePath`](BaseFileAppender.md#default#filepath)

##### layout

> `readonly` **layout**: `ILayout`

Defined in: [BaseFileAppender.ts:15](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/BaseFileAppender.ts#L15)

###### Inherited from

[`default`](BaseFileAppender.md#default).[`layout`](BaseFileAppender.md#default#layout)

##### name

> **name**: `string` = `'dateFile'`

Defined in: [DateFileAppender.ts:10](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/DateFileAppender.ts#L10)

###### Overrides

[`default`](BaseFileAppender.md#default).[`name`](BaseFileAppender.md#default#name)

##### options

> `protected` `readonly` **options**: [`DateFileAppenderOptions`](typings.md#datefileappenderoptions)

Defined in: [DateFileAppender.ts:18](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/DateFileAppender.ts#L18)

Options (选项)

###### Inherited from

[`default`](BaseFileAppender.md#default).[`options`](BaseFileAppender.md#default#options)

##### stream

> **stream**: `Writable`

Defined in: [BaseFileAppender.ts:14](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/BaseFileAppender.ts#L14)

###### Inherited from

[`default`](BaseFileAppender.md#default).[`stream`](BaseFileAppender.md#default#stream)

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [BaseFileAppender.ts:50](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/BaseFileAppender.ts#L50)

Close appender

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`default`](BaseFileAppender.md#default).[`close`](BaseFileAppender.md#default#close)

##### getStream()

> `protected` **getStream**(`filePath`, `options`): `DateFileStream`

Defined in: [DateFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/DateFileAppender.ts#L28)

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

[`default`](BaseFileAppender.md#default).[`getStream`](BaseFileAppender.md#default#getstream)

##### setup()

> **setup**(): `void`

Defined in: [BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/BaseFileAppender.ts#L30)

###### Returns

`void`

###### Inherited from

[`default`](BaseFileAppender.md#default).[`setup`](BaseFileAppender.md#default#setup)

##### write()

> **write**(`logEvent`): `void`

Defined in: [BaseFileAppender.ts:38](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/file-appender/src/BaseFileAppender.ts#L38)

Write log event

###### Parameters

###### logEvent

`LogEvent`

Log event (日志事件)

###### Returns

`void`

###### Inherited from

[`default`](BaseFileAppender.md#default).[`write`](BaseFileAppender.md#default#write)
