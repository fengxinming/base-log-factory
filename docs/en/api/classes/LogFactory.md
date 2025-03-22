[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / LogFactory

# Class: LogFactory

Defined in: [LogFactory.ts:9](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L9)

Log Factory (日志工厂)

## Constructors

### new LogFactory()

> **new LogFactory**(`config`?): `LogFactory`

Defined in: [LogFactory.ts:19](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L19)

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

Defined in: [LogFactory.ts:26](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L26)

Get or set the default log level (获取或设置默认日志级别)

##### Returns

[`Level`](../enumerations/Level.md)

#### Set Signature

> **set** **level**(`level`): `void`

Defined in: [LogFactory.ts:34](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L34)

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

Defined in: [LogFactory.ts:83](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L83)

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

Defined in: [LogFactory.ts:46](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L46)

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

Defined in: [LogFactory.ts:95](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L95)

Dispose the log factory (销毁日志工厂)

#### Returns

`Promise`\<`any`[]\>

***

### getLogger()

> **getLogger**(`name`): [`ILogger`](../interfaces/ILogger.md)

Defined in: [LogFactory.ts:66](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L66)

Get a logger instance (获取日志实例)

#### Parameters

##### name

`string`

Logger name (日志名称)

#### Returns

[`ILogger`](../interfaces/ILogger.md)
