[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/LogFactory](../index.md) / default

# Class: default

Defined in: base-log-factory/src/LogFactory.ts:9

Log Factory (日志工厂)

## Constructors

### Constructor

> **new default**(`config`?): `LogFactory`

Defined in: base-log-factory/src/LogFactory.ts:19

Constructor (构造函数)

#### Parameters

##### config?

[`Config`](../../typings/interfaces/Config.md)

Configuration options (配置选项)

#### Returns

`LogFactory`

## Accessors

### level

#### Get Signature

> **get** **level**(): [`default`](../../LogLevel/enumerations/default.md)

Defined in: base-log-factory/src/LogFactory.ts:26

Get the default log level (获取或设置默认日志级别)

##### Returns

[`default`](../../LogLevel/enumerations/default.md)

***

### levelName

#### Get Signature

> **get** **levelName**(): `string`

Defined in: base-log-factory/src/LogFactory.ts:33

Get the default log level name (获取或设置默认日志级别名称)

##### Returns

`string`

## Methods

### clear()

> **clear**(`name`?): `void`

Defined in: base-log-factory/src/LogFactory.ts:103

Clear the logger cache (清除日志缓存)

#### Parameters

##### name?

`string`

Logger name (日志名称)

#### Returns

`void`

***

### configure()

> **configure**(`param`): `void`

Defined in: base-log-factory/src/LogFactory.ts:66

Configure the log factory (配置日志工厂)

#### Parameters

##### param

[`Config`](../../typings/interfaces/Config.md) = `{}`

Configuration options (配置选项)

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`any`[]\>

Defined in: base-log-factory/src/LogFactory.ts:115

Dispose the log factory (销毁日志工厂)

#### Returns

`Promise`\<`any`[]\>

***

### getLogger()

> **getLogger**(`name`): [`ILogger`](../../typings/interfaces/ILogger.md)

Defined in: base-log-factory/src/LogFactory.ts:86

Get a logger instance (获取日志实例)

#### Parameters

##### name

`string`

Logger name (日志名称)

#### Returns

[`ILogger`](../../typings/interfaces/ILogger.md)

***

### updateLevel()

> **updateLevel**(`level`, `updateCachedLoggers`?): `boolean`

Defined in: base-log-factory/src/LogFactory.ts:43

Update the default log level (更新默认日志级别)

#### Parameters

##### level

Log level (日志级别)

[`default`](../../LogLevel/enumerations/default.md) | [`TLevel`](../../typings/type-aliases/TLevel.md)

##### updateCachedLoggers?

`boolean`

Whether to update the cached loggers (是否更新缓存的日志器)

#### Returns

`boolean`

Update level success if true (如果为 true 表示更新成功)
