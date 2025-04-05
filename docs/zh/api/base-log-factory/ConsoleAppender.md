[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / ConsoleAppender

# ConsoleAppender

## 类

### default

定义于: [ConsoleAppender.ts:7](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/ConsoleAppender.ts#L7)

Console appender (控制台输出)

#### 实现

- [`IAppender`](typings.md#iappender)

#### 构造函数

##### 构造函数

> **new default**(`layout`?): [`default`](#default)

定义于: [ConsoleAppender.ts:15](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/ConsoleAppender.ts#L15)

Constructor (构造函数)

###### 参数

###### layout?

[`ILayout`](typings.md#ilayout)

Layout (布局)

###### 返回

[`default`](#default)

#### 属性

##### dateFormat

> **dateFormat**: `string` = `'HH:mm:ss.SSS'`

定义于: [ConsoleAppender.ts:9](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/ConsoleAppender.ts#L9)

##### layout?

> `optional` **layout**: [`ILayout`](typings.md#ilayout)

定义于: [ConsoleAppender.ts:15](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/ConsoleAppender.ts#L15)

Layout (布局)

##### name

> **name**: `string` = `'console'`

定义于: [ConsoleAppender.ts:8](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/ConsoleAppender.ts#L8)

###### 实现了

[`IAppender`](typings.md#iappender).[`name`](typings.md#iappender#name)

#### 方法

##### close()

> **close**(): `Promise`\<`void`\>

定义于: [ConsoleAppender.ts:42](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/ConsoleAppender.ts#L42)

Close appender (关闭输出)

###### 返回

`Promise`\<`void`\>

###### 实现了

[`IAppender`](typings.md#iappender).[`close`](typings.md#iappender#close)

##### setup()

> **setup**(`logger`): `void`

定义于: [ConsoleAppender.ts:19](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/ConsoleAppender.ts#L19)

###### 参数

###### logger

[`ILogger`](typings.md#ilogger)

###### 返回

`void`

###### 实现了

[`IAppender`](typings.md#iappender).[`setup`](typings.md#iappender#setup)

##### write()

> **write**(`event`): `void`

定义于: [ConsoleAppender.ts:27](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/base-log-factory/src/ConsoleAppender.ts#L27)

Write log (写入日志)

###### 参数

###### event

[`LogEvent`](typings.md#logevent)

Log event (日志事件)

###### 返回

`void`

###### 实现了

[`IAppender`](typings.md#iappender).[`write`](typings.md#iappender#write)
