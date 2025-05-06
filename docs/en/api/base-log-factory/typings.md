[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / typings

# typings

## Interfaces

### Config

Defined in: [typings.ts:18](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L18)

Log factory configuration (日志工厂配置)

#### Properties

##### appenders?

> `optional` **appenders**: [`IAppender`](#iappender)[]

Defined in: [typings.ts:20](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L20)

##### level?

> `optional` **level**: [`LogLevel`](#loglevel)

Defined in: [typings.ts:19](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L19)

##### LoggerClass?

> `optional` **LoggerClass**: *typeof* [`default`](Logger.md#default)

Defined in: [typings.ts:21](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L21)

***

### IAppender

Defined in: [typings.ts:71](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L71)

Appender interface (日志记录器接口)

#### Properties

##### name

> **name**: `string`

Defined in: [typings.ts:72](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L72)

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [typings.ts:75](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L75)

###### Returns

`Promise`\<`void`\>

##### setup()

> **setup**(`logger`): `void`

Defined in: [typings.ts:73](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L73)

###### Parameters

###### logger

[`ILogger`](#ilogger)

###### Returns

`void`

##### write()

> **write**(`event`): `void`

Defined in: [typings.ts:74](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L74)

###### Parameters

###### event

[`LogEvent`](#logevent)

###### Returns

`void`

***

### ILayout

Defined in: [typings.ts:63](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L63)

Layout interface (日志布局接口)

#### Methods

##### format()

> **format**(`event`): `string`

Defined in: [typings.ts:64](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L64)

###### Parameters

###### event

[`LogEvent`](#logevent)

###### Returns

`string`

***

### ILogger

Defined in: [typings.ts:81](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L81)

Logger interface (日志接口)

#### Properties

##### appenders

> **appenders**: `Map`\<`string`, [`IAppender`](#iappender)\>

Defined in: [typings.ts:83](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L83)

##### name

> **name**: `string`

Defined in: [typings.ts:82](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L82)

#### Accessors

##### level

###### Get Signature

> **get** **level**(): [`default`](Level.md#default)

Defined in: [typings.ts:85](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L85)

###### Returns

[`default`](Level.md#default)

###### Set Signature

> **set** **level**(`l`): `void`

Defined in: [typings.ts:84](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L84)

###### Parameters

###### l

[`LogLevel`](#loglevel)

###### Returns

`void`

##### levelName

###### Get Signature

> **get** **levelName**(): `"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

Defined in: [typings.ts:86](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L86)

###### Returns

`"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

#### Methods

##### addContext()

> **addContext**(`key`, `value`): `void`

Defined in: [typings.ts:87](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L87)

###### Parameters

###### key

`string`

###### value

`any`

###### Returns

`void`

##### clearContext()

> **clearContext**(): `void`

Defined in: [typings.ts:89](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L89)

###### Returns

`void`

##### debug()

> **debug**(...`args`): `void`

Defined in: [typings.ts:92](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L92)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### dispose()

> **dispose**(): `Promise`\<`any`[]\>

Defined in: [typings.ts:90](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L90)

###### Returns

`Promise`\<`any`[]\>

##### error()

> **error**(...`args`): `void`

Defined in: [typings.ts:95](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L95)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### fatal()

> **fatal**(...`args`): `void`

Defined in: [typings.ts:96](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L96)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### info()

> **info**(...`args`): `void`

Defined in: [typings.ts:93](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L93)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### removeContext()

> **removeContext**(`key`): `void`

Defined in: [typings.ts:88](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L88)

###### Parameters

###### key

`string`

###### Returns

`void`

##### trace()

> **trace**(...`args`): `void`

Defined in: [typings.ts:91](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L91)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

##### warn()

> **warn**(...`args`): `void`

Defined in: [typings.ts:94](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L94)

###### Parameters

###### args

...`any`[]

###### Returns

`void`

***

### LogEvent

Defined in: [typings.ts:35](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L35)

Log event (日志事件)

#### Properties

##### context

> **context**: `Record`\<`string`, `any`\>

Defined in: [typings.ts:41](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L41)

##### level

> **level**: [`LogLevel`](#loglevel)

Defined in: [typings.ts:36](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L36)

##### levelName

> **levelName**: `"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

Defined in: [typings.ts:37](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L37)

##### loggerName

> **loggerName**: `string`

Defined in: [typings.ts:40](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L40)

##### message

> **message**: `any`[]

Defined in: [typings.ts:38](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L38)

##### timestamp

> **timestamp**: `Date`

Defined in: [typings.ts:39](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L39)

***

### LogOptions

Defined in: [typings.ts:27](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L27)

Logger options (日志选项)

#### Properties

##### appenders?

> `optional` **appenders**: [`IAppender`](#iappender)[]

Defined in: [typings.ts:29](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L29)

##### level?

> `optional` **level**: [`LogLevel`](#loglevel)

Defined in: [typings.ts:28](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L28)

## Type Aliases

### LogLevel

> **LogLevel** = [`default`](Level.md#default) \| [`TLevel`](#tlevel)

Defined in: [typings.ts:13](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L13)

Log level (日志级别)

***

### TCreateConverter()

> **TCreateConverter** = (`specifier`, `alignLeft?`, `minWidth?`, `maxLength?`, `format?`) => [`TPatternConverter`](#tpatternconverter) \| `null` \| `undefined`

Defined in: [typings.ts:52](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L52)

Create converter function (创建转换器函数)

#### Parameters

##### specifier

`string`

##### alignLeft?

`boolean`

##### minWidth?

`number`

##### maxLength?

`number`

##### format?

`string`

#### Returns

[`TPatternConverter`](#tpatternconverter) \| `null` \| `undefined`

***

### TLevel

> **TLevel** = keyof *typeof* [`default`](Level.md#default)

Defined in: [typings.ts:7](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L7)

Log level name (日志级别名称)

***

### TPatternConverter()

> **TPatternConverter** = (`event`) => `string`

Defined in: [typings.ts:47](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/typings.ts#L47)

Pattern converter (日志记录器模式转换器)

#### Parameters

##### event

[`LogEvent`](#logevent)

#### Returns

`string`
