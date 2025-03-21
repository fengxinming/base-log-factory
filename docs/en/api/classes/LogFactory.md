[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / LogFactory

# Class: LogFactory

Defined in: [LogFactory.ts:8](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L8)

Log Factory (日志工厂)

## Constructors

### new LogFactory()

> **new LogFactory**(`config`?): `LogFactory`

Defined in: [LogFactory.ts:18](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L18)

Constructor (构造函数)

#### Parameters

##### config?

[`IConfig`](../interfaces/IConfig.md)

Configuration options (配置选项)

#### Returns

`LogFactory`

## Accessors

### level

#### Get Signature

> **get** **level**(): [`Level`](../enumerations/Level.md)

Defined in: [LogFactory.ts:25](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L25)

Get or set the default log level (获取或设置默认日志级别)

##### Returns

[`Level`](../enumerations/Level.md)

#### Set Signature

> **set** **level**(`level`): `void`

Defined in: [LogFactory.ts:33](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L33)

Set the default log level (设置默认日志级别)

##### Parameters

###### level

Log level (日志级别)

[`TLevel`](../type-aliases/TLevel.md) | [`Level`](../enumerations/Level.md)

##### Returns

`void`

## Methods

### clear()

> **clear**(`name`?): `void`

Defined in: [LogFactory.ts:82](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L82)

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

Defined in: [LogFactory.ts:45](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L45)

Configure the log factory (配置日志工厂)

#### Parameters

##### param

[`IConfig`](../interfaces/IConfig.md) = `{}`

Configuration options (配置选项)

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`any`[]\>

Defined in: [LogFactory.ts:94](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L94)

Dispose the log factory (销毁日志工厂)

#### Returns

`Promise`\<`any`[]\>

***

### getLogger()

> **getLogger**(`name`): [`ILogger`](../interfaces/ILogger.md)

Defined in: [LogFactory.ts:65](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L65)

Get a logger instance (获取日志实例)

#### Parameters

##### name

`string`

Logger name (日志名称)

#### Returns

[`ILogger`](../interfaces/ILogger.md)
