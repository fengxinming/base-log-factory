[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / LogFactory

# 类: LogFactory

定义于: [LogFactory.ts:9](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L9)

Log Factory (日志工厂)

## 构造函数

### new LogFactory()

> **new LogFactory**(`config`?): `LogFactory`

定义于: [LogFactory.ts:19](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L19)

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

定义于: [LogFactory.ts:26](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L26)

Get or set the default log level (获取或设置默认日志级别)

##### 返回

[`Level`](../enumerations/Level.md)

#### Setter 签名

> **set** **level**(`level`): `void`

定义于: [LogFactory.ts:34](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L34)

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

定义于: [LogFactory.ts:83](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L83)

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

定义于: [LogFactory.ts:46](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L46)

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

定义于: [LogFactory.ts:95](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L95)

Dispose the log factory (销毁日志工厂)

#### 返回

`Promise`\<`any`[]\>

***

### getLogger()

> **getLogger**(`name`): [`ILogger`](../interfaces/ILogger.md)

定义于: [LogFactory.ts:66](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/LogFactory.ts#L66)

Get a logger instance (获取日志实例)

#### 参数

##### name

`string`

Logger name (日志名称)

#### 返回

[`ILogger`](../interfaces/ILogger.md)
