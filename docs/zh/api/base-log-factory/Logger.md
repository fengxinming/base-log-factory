[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / Logger

# Logger

## 类

### default

定义于: [Logger.ts:8](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L8)

Logger instance (日志实例)

#### 实现

- [`ILogger`](typings.md#ilogger)

#### 构造函数

##### 构造函数

> **new default**(`name`, `options`): [`default`](#default)

定义于: [Logger.ts:18](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L18)

Create a logger instance (创建日志实例)

###### 参数

###### name

`string`

Logger name (日志名称)

###### options

[`LogOptions`](typings.md#logoptions) = `{}`

Logging options (日志选项)

###### 返回

[`default`](#default)

#### 属性

##### \_level

> `protected` **\_level**: [`default`](Level.md#default) = `Level.INFO`

定义于: [Logger.ts:11](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L11)

##### appenders

> `readonly` **appenders**: `Map`\<`string`, [`IAppender`](typings.md#iappender)\>

定义于: [Logger.ts:9](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L9)

###### 实现了

[`ILogger`](typings.md#ilogger).[`appenders`](typings.md#ilogger#appenders-1)

##### context

> `protected` **context**: `Record`\<`string`, `any`\> = `{}`

定义于: [Logger.ts:10](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L10)

##### name

> **name**: `string`

定义于: [Logger.ts:19](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L19)

Logger name (日志名称)

###### 实现了

[`ILogger`](typings.md#ilogger).[`name`](typings.md#ilogger#name-1)

#### 访问器

##### level

###### Getter 签名

> **get** **level**(): [`default`](Level.md#default)

定义于: [Logger.ts:44](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L44)

Log level (日志级别)

###### 返回

[`default`](Level.md#default)

###### Setter 签名

> **set** **level**(`level`): `void`

定义于: [Logger.ts:52](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L52)

Set log level (设置日志级别)

###### 参数

###### level

[`LogLevel`](typings.md#loglevel)

Log level (日志级别)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`level`](typings.md#ilogger#level-1)

##### levelName

###### Getter 签名

> **get** **levelName**(): `"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

定义于: [Logger.ts:37](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L37)

Log level name (日志级别名称)

###### 返回

`"TRACE"` \| `"DEBUG"` \| `"INFO"` \| `"WARN"` \| `"ERROR"` \| `"FATAL"` \| `"OFF"`

###### 实现了

[`ILogger`](typings.md#ilogger).[`levelName`](typings.md#ilogger#levelname)

#### 方法

##### addContext()

> **addContext**(`key`, `value`): `void`

定义于: [Logger.ts:64](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L64)

Add context (添加上下文)

###### 参数

###### key

`any`

Context key (上下文键)

###### value

`any`

Context value (上下文值)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`addContext`](typings.md#ilogger#addcontext)

##### clearContext()

> **clearContext**(): `void`

定义于: [Logger.ts:79](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L79)

Clear context (清除上下文)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`clearContext`](typings.md#ilogger#clearcontext)

##### createEvent()

> `protected` **createEvent**(`level`, `message`): [`LogEvent`](typings.md#logevent)

定义于: [Logger.ts:148](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L148)

Create a log event (创建日志事件)

###### 参数

###### level

[`default`](Level.md#default)

Log level (日志级别)

###### message

`any`[]

Message (消息)

###### 返回

[`LogEvent`](typings.md#logevent)

Log event (日志事件)

##### debug()

> **debug**(...`args`): `void`

定义于: [Logger.ts:106](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L106)

Log a message of level DEBUG (记录DEBUG级别的日志)

###### 参数

###### args

...`any`[]

Message arguments (消息参数)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`debug`](typings.md#ilogger#debug)

##### dispose()

> **dispose**(): `Promise`\<`PromiseSettledResult`\<`void`\>[]\>

定义于: [Logger.ts:86](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L86)

Dispose all appenders (关闭所有appenders)

###### 返回

`Promise`\<`PromiseSettledResult`\<`void`\>[]\>

###### 实现了

[`ILogger`](typings.md#ilogger).[`dispose`](typings.md#ilogger#dispose)

##### error()

> **error**(...`args`): `void`

定义于: [Logger.ts:130](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L130)

Log a message of level ERROR (记录ERROR级别的日志)

###### 参数

###### args

...`any`[]

Message arguments (消息参数)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`error`](typings.md#ilogger#error)

##### fatal()

> **fatal**(...`args`): `void`

定义于: [Logger.ts:138](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L138)

Log a message of level FATAL (记录FATAL级别的日志)

###### 参数

###### args

...`any`[]

Message arguments (消息参数)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`fatal`](typings.md#ilogger#fatal)

##### info()

> **info**(...`args`): `void`

定义于: [Logger.ts:114](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L114)

Log a message of level INFO (记录INFO级别的日志)

###### 参数

###### args

...`any`[]

Message arguments (消息参数)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`info`](typings.md#ilogger#info)

##### log()

> `protected` **log**(`level`, `message`): `void`

定义于: [Logger.ts:164](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L164)

Log a message (记录日志)

###### 参数

###### level

[`default`](Level.md#default)

Log level (日志级别)

###### message

`any`[]

Content (内容)

###### 返回

`void`

##### removeContext()

> **removeContext**(`key`): `void`

定义于: [Logger.ts:72](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L72)

Remove context (移除上下文)

###### 参数

###### key

`any`

Context key (上下文键)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`removeContext`](typings.md#ilogger#removecontext)

##### trace()

> **trace**(...`args`): `void`

定义于: [Logger.ts:98](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L98)

Log a message of level TRACE (记录TRACE级别的日志)

###### 参数

###### args

...`any`[]

Message arguments (消息参数)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`trace`](typings.md#ilogger#trace)

##### warn()

> **warn**(...`args`): `void`

定义于: [Logger.ts:122](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/Logger.ts#L122)

Log a message of level WARN (记录WARN级别的日志)

###### 参数

###### args

...`any`[]

Message arguments (消息参数)

###### 返回

`void`

###### 实现了

[`ILogger`](typings.md#ilogger).[`warn`](typings.md#ilogger#warn)
