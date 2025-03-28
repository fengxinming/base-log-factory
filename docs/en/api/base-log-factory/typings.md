[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / typings

# typings

## Interfaces

### Config

Defined in: [typings.ts:18](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L18)

Log factory configuration (日志工厂配置)

#### Properties

##### appenders?

> `optional` **appenders**: [`IAppender`](#iappender)[]

Defined in: [typings.ts:20](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L20)

##### level?

> `optional` **level**: [`LogLevel`](#loglevel)

Defined in: [typings.ts:19](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L19)

##### LoggerClass?

> `optional` **LoggerClass**: *typeof* [`default`](Logger.md#default)

Defined in: [typings.ts:21](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L21)

***

### IAppender

Defined in: [typings.ts:60](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L60)

Appender interface (日志记录器接口)

#### Properties

##### name

> **name**: `string`

Defined in: [typings.ts:61](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L61)

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [typings.ts:64](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L64)

###### Returns

`Promise`\<`void`\>

##### setup()

> **setup**(`logger`): `void`

Defined in: [typings.ts:62](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L62)

###### Parameters

###### logger

[`ILogger`](#ilogger)

###### Returns

`void`

##### write()

> **write**(`event`): `void`

Defined in: [typings.ts:63](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L63)

###### Parameters

###### event

[`LogEvent`](#logevent)

###### Returns

`void`

***

### ILayout

Defined in: [typings.ts:52](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L52)

Layout interface (日志布局接口)

#### Methods

##### format()

> **format**(`event`): `string`

Defined in: [typings.ts:53](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L53)

###### Parameters

###### event

[`LogEvent`](#logevent)

###### Returns

`string`

***

### ILogger

Defined in: [typings.ts:70](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L70)

Logger interface (日志接口)

#### Properties

##### appenders

> **appenders**: `Map`\<`string`, [`IAppender`](#iappender)\>

Defined in: [typings.ts:72](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L72)

##### name

> **name**: `string`

Defined in: [typings.ts:71](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L71)

#### Accessors

##### level

###### Get Signature

> **get** **level**(): [`default`](Level.md#default)

Defined in: [typings.ts:74](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L74)

###### Returns

[`default`](Level.md#default)

###### Set Signature

> **set** **level**(`l`): `void`

Defined in: [typings.ts:73](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L73)

###### Parameters

###### l

[`LogLevel`](#loglevel)

###### Returns

`void`

##### levelName

###### Get Signature

> **get** **levelName**(): `"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

Defined in: [typings.ts:75](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L75)

###### Returns

`"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

#### Methods

##### addContext()

> **addContext**(`key`, `value`): `void`

Defined in: [typings.ts:76](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L76)

###### Parameters

###### key

`string`

###### value

`any`

###### Returns

`void`

##### clearContext()

> **clearContext**(): `void`

Defined in: [typings.ts:78](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L78)

###### Returns

`void`

##### debug()

> **debug**(...`args`): `void`

Defined in: [typings.ts:81](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L81)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### dispose()

> **dispose**(): `Promise`\<`any`[]\>

Defined in: [typings.ts:79](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L79)

###### Returns

`Promise`\<`any`[]\>

##### error()

> **error**(...`args`): `void`

Defined in: [typings.ts:84](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L84)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### fatal()

> **fatal**(...`args`): `void`

Defined in: [typings.ts:85](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L85)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### info()

> **info**(...`args`): `void`

Defined in: [typings.ts:82](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L82)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### removeContext()

> **removeContext**(`key`): `void`

Defined in: [typings.ts:77](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L77)

###### Parameters

###### key

`string`

###### Returns

`void`

##### trace()

> **trace**(...`args`): `void`

Defined in: [typings.ts:80](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L80)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### warn()

> **warn**(...`args`): `void`

Defined in: [typings.ts:83](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L83)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

***

### LogEvent

Defined in: [typings.ts:35](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L35)

Log event (日志事件)

#### Properties

##### context

> **context**: `Record`\<`string`, `any`\>

Defined in: [typings.ts:41](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L41)

##### level

> **level**: [`LogLevel`](#loglevel)

Defined in: [typings.ts:36](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L36)

##### levelName

> **levelName**: `"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

Defined in: [typings.ts:37](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L37)

##### loggerName

> **loggerName**: `string`

Defined in: [typings.ts:40](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L40)

##### message

> **message**: `any`[]

Defined in: [typings.ts:38](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L38)

##### timestamp

> **timestamp**: `Date`

Defined in: [typings.ts:39](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L39)

***

### LogOptions

Defined in: [typings.ts:27](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L27)

Logger options (日志选项)

#### Properties

##### appenders?

> `optional` **appenders**: [`IAppender`](#iappender)[]

Defined in: [typings.ts:29](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L29)

##### level?

> `optional` **level**: [`LogLevel`](#loglevel)

Defined in: [typings.ts:28](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L28)

## Type Aliases

### LogLevel

> **LogLevel** = [`default`](Level.md#default) \| [`TLevel`](#tlevel)

Defined in: [typings.ts:13](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L13)

Log level (日志级别)

***

### TLevel

> **TLevel** = keyof *typeof* [`default`](Level.md#default)

Defined in: [typings.ts:7](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L7)

Log level name (日志级别名称)

***

### TPatternConverter()

> **TPatternConverter** = (...`args`) => `string`

Defined in: [typings.ts:47](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/typings.ts#L47)

Pattern converter (日志记录器模式转换器)

#### Parameters

##### args

...`any`[]

#### Returns

`string`
