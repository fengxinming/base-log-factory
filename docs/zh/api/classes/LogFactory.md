[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / LogFactory

# 类: LogFactory

定义于: [LogFactory.ts:8](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L8)

Log Factory (日志工厂)

## 构造函数

### new LogFactory()

> **new LogFactory**(`config`?): `LogFactory`

定义于: [LogFactory.ts:18](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L18)

Constructor (构造函数)

#### 参数

##### config?

[`IConfig`](../interfaces/IConfig.md)

Configuration options (配置选项)

#### 返回

`LogFactory`

## 访问器

### level

#### Getter 签名

> **get** **level**(): [`Level`](../enumerations/Level.md)

定义于: [LogFactory.ts:25](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L25)

Get or set the default log level (获取或设置默认日志级别)

##### 返回

[`Level`](../enumerations/Level.md)

#### Setter 签名

> **set** **level**(`level`): `void`

定义于: [LogFactory.ts:33](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L33)

Set the default log level (设置默认日志级别)

##### 参数

###### level

Log level (日志级别)

[`TLevel`](../type-aliases/TLevel.md) | [`Level`](../enumerations/Level.md)

##### 返回

`void`

## 方法

### clear()

> **clear**(`name`?): `void`

定义于: [LogFactory.ts:82](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L82)

Clear the logger cache (清除日志缓存)

#### 参数

##### name?

`string`

Logger name (日志名称)

#### 返回

`void`

***

### configure()

> **configure**(`param`): `void`

定义于: [LogFactory.ts:45](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L45)

Configure the log factory (配置日志工厂)

#### 参数

##### param

[`IConfig`](../interfaces/IConfig.md) = `{}`

Configuration options (配置选项)

#### 返回

`void`

***

### dispose()

> **dispose**(): `Promise`\<`any`[]\>

定义于: [LogFactory.ts:94](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L94)

Dispose the log factory (销毁日志工厂)

#### 返回

`Promise`\<`any`[]\>

***

### getLogger()

> **getLogger**(`name`): [`ILogger`](../interfaces/ILogger.md)

定义于: [LogFactory.ts:65](https://github.com/fengxinming/log-base/blob/91b255be28ea77ad9d32ba66866f8cc509fce400/src/LogFactory.ts#L65)

Get a logger instance (获取日志实例)

#### 参数

##### name

`string`

Logger name (日志名称)

#### 返回

[`ILogger`](../interfaces/ILogger.md)
