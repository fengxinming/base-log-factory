[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / LogFactory

# LogFactory

## Classes

### default

Defined in: [LogFactory.ts:9](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/LogFactory.ts#L9)

Log Factory (日志工厂)

#### Constructors

##### Constructor

> **new default**(`config`?): [`default`](#default)

Defined in: [LogFactory.ts:19](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/LogFactory.ts#L19)

Constructor (构造函数)

###### Parameters

###### config?

[`Config`](typings.md#config)

Configuration options (配置选项)

###### Returns

[`default`](#default)

#### Accessors

##### level

###### Get Signature

> **get** **level**(): [`default`](Level.md#default)

Defined in: [LogFactory.ts:26](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/LogFactory.ts#L26)

Get the default log level (获取或设置默认日志级别)

###### Returns

[`default`](Level.md#default)

##### levelName

###### Get Signature

> **get** **levelName**(): `string`

Defined in: [LogFactory.ts:33](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/LogFactory.ts#L33)

Get the default log level name (获取或设置默认日志级别名称)

###### Returns

`string`

#### Methods

##### clear()

> **clear**(`name`?): `void`

Defined in: [LogFactory.ts:103](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/LogFactory.ts#L103)

Clear the logger cache (清除日志缓存)

###### Parameters

###### name?

`string`

Logger name (日志名称)

###### Returns

`void`

##### configure()

> **configure**(`param`): `void`

Defined in: [LogFactory.ts:66](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/LogFactory.ts#L66)

Configure the log factory (配置日志工厂)

###### Parameters

###### param

[`Config`](typings.md#config) = `{}`

Configuration options (配置选项)

###### Returns

`void`

##### dispose()

> **dispose**(): `Promise`\<`any`[]\>

Defined in: [LogFactory.ts:115](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/LogFactory.ts#L115)

Dispose the log factory (销毁日志工厂)

###### Returns

`Promise`\<`any`[]\>

##### getLogger()

> **getLogger**(`name`): [`ILogger`](typings.md#ilogger)

Defined in: [LogFactory.ts:86](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/LogFactory.ts#L86)

Get a logger instance (获取日志实例)

###### Parameters

###### name

`string`

Logger name (日志名称)

###### Returns

[`ILogger`](typings.md#ilogger)

##### updateLevel()

> **updateLevel**(`level`, `updateCachedLoggers`?): `boolean`

Defined in: [LogFactory.ts:43](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/LogFactory.ts#L43)

Update the default log level (更新默认日志级别)

###### Parameters

###### level

Log level (日志级别)

[`default`](Level.md#default) | `"TRACE"` | `"DEBUG"` | `"INFO"` | `"WARN"` | `"ERROR"` | `"FATAL"` | `"OFF"`

###### updateCachedLoggers?

`boolean`

Whether to update the cached loggers (是否更新缓存的日志器)

###### Returns

`boolean`

Update level success if true (如果为 true 表示更新成功)
