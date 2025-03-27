[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / typings

# typings

## 接口

### Config

定义于: [typings.ts:18](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L18)

Log factory configuration (日志工厂配置)

#### 属性

##### appenders?

> `optional` **appenders**: [`IAppender`](#iappender)[]

定义于: [typings.ts:20](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L20)

##### level?

> `optional` **level**: [`LogLevel`](#loglevel)

定义于: [typings.ts:19](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L19)

##### LoggerClass?

> `optional` **LoggerClass**: *typeof* [`default`](Logger.md#default)

定义于: [typings.ts:21](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L21)

***

### IAppender

定义于: [typings.ts:60](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L60)

Appender interface (日志记录器接口)

#### 属性

##### name

> **name**: `string`

定义于: [typings.ts:61](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L61)

#### 方法

##### close()

> **close**(): `Promise`\<`void`\>

定义于: [typings.ts:64](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L64)

###### 返回

`Promise`\<`void`\>

##### setup()

> **setup**(`logger`): `void`

定义于: [typings.ts:62](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L62)

###### 参数

###### logger

[`ILogger`](#ilogger)

###### 返回

`void`

##### write()

> **write**(`event`): `void`

定义于: [typings.ts:63](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L63)

###### 参数

###### event

[`LogEvent`](#logevent)

###### 返回

`void`

***

### ILayout

定义于: [typings.ts:52](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L52)

Layout interface (日志布局接口)

#### 方法

##### format()

> **format**(`event`): `string`

定义于: [typings.ts:53](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L53)

###### 参数

###### event

[`LogEvent`](#logevent)

###### 返回

`string`

***

### ILogger

定义于: [typings.ts:70](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L70)

Logger interface (日志接口)

#### 属性

##### appenders

> **appenders**: `Map`\<`string`, [`IAppender`](#iappender)\>

定义于: [typings.ts:72](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L72)

##### name

> **name**: `string`

定义于: [typings.ts:71](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L71)

#### 访问器

##### level

###### Getter 签名

> **get** **level**(): [`default`](Level.md#default)

定义于: [typings.ts:74](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L74)

###### 返回

[`default`](Level.md#default)

###### Setter 签名

> **set** **level**(`l`): `void`

定义于: [typings.ts:73](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L73)

###### 参数

###### l

[`LogLevel`](#loglevel)

###### 返回

`void`

##### levelName

###### Getter 签名

> **get** **levelName**(): `"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

定义于: [typings.ts:75](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L75)

###### 返回

`"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

#### 方法

##### addContext()

> **addContext**(`key`, `value`): `void`

定义于: [typings.ts:76](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L76)

###### 参数

###### key

`string`

###### value

`any`

###### 返回

`void`

##### clearContext()

> **clearContext**(): `void`

定义于: [typings.ts:78](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L78)

###### 返回

`void`

##### debug()

> **debug**(...`args`): `void`

定义于: [typings.ts:81](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L81)

###### 参数

###### args

...`any`[]

###### 返回

`void`

##### dispose()

> **dispose**(): `Promise`\<`any`[]\>

定义于: [typings.ts:79](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L79)

###### 返回

`Promise`\<`any`[]\>

##### error()

> **error**(...`args`): `void`

定义于: [typings.ts:84](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L84)

###### 参数

###### args

...`any`[]

###### 返回

`void`

##### fatal()

> **fatal**(...`args`): `void`

定义于: [typings.ts:85](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L85)

###### 参数

###### args

...`any`[]

###### 返回

`void`

##### info()

> **info**(...`args`): `void`

定义于: [typings.ts:82](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L82)

###### 参数

###### args

...`any`[]

###### 返回

`void`

##### removeContext()

> **removeContext**(`key`): `void`

定义于: [typings.ts:77](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L77)

###### 参数

###### key

`string`

###### 返回

`void`

##### trace()

> **trace**(...`args`): `void`

定义于: [typings.ts:80](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L80)

###### 参数

###### args

...`any`[]

###### 返回

`void`

##### warn()

> **warn**(...`args`): `void`

定义于: [typings.ts:83](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L83)

###### 参数

###### args

...`any`[]

###### 返回

`void`

***

### LogEvent

定义于: [typings.ts:35](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L35)

Log event (日志事件)

#### 属性

##### context

> **context**: `Record`\<`string`, `any`\>

定义于: [typings.ts:41](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L41)

##### level

> **level**: [`LogLevel`](#loglevel)

定义于: [typings.ts:36](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L36)

##### levelName

> **levelName**: `"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

定义于: [typings.ts:37](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L37)

##### loggerName

> **loggerName**: `string`

定义于: [typings.ts:40](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L40)

##### message

> **message**: `any`[]

定义于: [typings.ts:38](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L38)

##### timestamp

> **timestamp**: `Date`

定义于: [typings.ts:39](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L39)

***

### LogOptions

定义于: [typings.ts:27](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L27)

Logger options (日志选项)

#### 属性

##### appenders?

> `optional` **appenders**: [`IAppender`](#iappender)[]

定义于: [typings.ts:29](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L29)

##### level?

> `optional` **level**: [`LogLevel`](#loglevel)

定义于: [typings.ts:28](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L28)

## 类型别名

### LogLevel

> **LogLevel** = [`default`](Level.md#default) \| [`TLevel`](#tlevel)

定义于: [typings.ts:13](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L13)

Log level (日志级别)

***

### TLevel

> **TLevel** = keyof *typeof* [`default`](Level.md#default)

定义于: [typings.ts:7](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L7)

Log level name (日志级别名称)

***

### TPatternConverter()

> **TPatternConverter** = (...`args`) => `string`

定义于: [typings.ts:47](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/typings.ts#L47)

Pattern converter (日志记录器模式转换器)

#### 参数

##### args

...`any`[]

#### 返回

`string`
