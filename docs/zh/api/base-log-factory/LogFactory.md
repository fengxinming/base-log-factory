[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / LogFactory

# LogFactory

## 类

### default

定义于: [LogFactory.ts:9](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/LogFactory.ts#L9)

Log Factory (日志工厂)

#### 构造函数

##### 构造函数

> **new default**(`config`?): [`default`](#default)

定义于: [LogFactory.ts:19](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/LogFactory.ts#L19)

Constructor (构造函数)

###### 参数

###### config?

[`Config`](typings.md#config)

Configuration options (配置选项)

###### 返回

[`default`](#default)

#### 访问器

##### level

###### Getter 签名

> **get** **level**(): [`default`](Level.md#default)

定义于: [LogFactory.ts:26](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/LogFactory.ts#L26)

Get the default log level (获取或设置默认日志级别)

###### 返回

[`default`](Level.md#default)

##### levelName

###### Getter 签名

> **get** **levelName**(): `string`

定义于: [LogFactory.ts:33](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/LogFactory.ts#L33)

Get the default log level name (获取或设置默认日志级别名称)

###### 返回

`string`

#### 方法

##### clear()

> **clear**(`name`?): `void`

定义于: [LogFactory.ts:103](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/LogFactory.ts#L103)

Clear the logger cache (清除日志缓存)

###### 参数

###### name?

`string`

Logger name (日志名称)

###### 返回

`void`

##### configure()

> **configure**(`param`): `void`

定义于: [LogFactory.ts:66](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/LogFactory.ts#L66)

Configure the log factory (配置日志工厂)

###### 参数

###### param

[`Config`](typings.md#config) = `{}`

Configuration options (配置选项)

###### 返回

`void`

##### dispose()

> **dispose**(): `Promise`\<`any`[]\>

定义于: [LogFactory.ts:115](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/LogFactory.ts#L115)

Dispose the log factory (销毁日志工厂)

###### 返回

`Promise`\<`any`[]\>

##### getLogger()

> **getLogger**(`name`): [`ILogger`](typings.md#ilogger)

定义于: [LogFactory.ts:86](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/LogFactory.ts#L86)

Get a logger instance (获取日志实例)

###### 参数

###### name

`string`

Logger name (日志名称)

###### 返回

[`ILogger`](typings.md#ilogger)

##### updateLevel()

> **updateLevel**(`level`, `updateCachedLoggers`?): `boolean`

定义于: [LogFactory.ts:43](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/base-log-factory/src/LogFactory.ts#L43)

Update the default log level (更新默认日志级别)

###### 参数

###### level

Log level (日志级别)

[`default`](Level.md#default) | `"TRACE"` | `"DEBUG"` | `"INFO"` | `"WARN"` | `"ERROR"` | `"FATAL"` | `"OFF"`

###### updateCachedLoggers?

`boolean`

Whether to update the cached loggers (是否更新缓存的日志器)

###### 返回

`boolean`

Update level success if true (如果为 true 表示更新成功)
