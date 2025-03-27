[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / ConsoleAppender

# ConsoleAppender

## Classes

### default

Defined in: [ConsoleAppender.ts:7](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/ConsoleAppender.ts#L7)

Console appender (控制台输出)

#### Implements

- [`IAppender`](typings.md#iappender)

#### Constructors

##### Constructor

> **new default**(`layout`?): [`default`](#default)

Defined in: [ConsoleAppender.ts:15](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/ConsoleAppender.ts#L15)

Constructor (构造函数)

###### Parameters

###### layout?

[`ILayout`](typings.md#ilayout)

Layout (布局)

###### Returns

[`default`](#default)

#### Properties

##### dateFormat

> **dateFormat**: `string` = `'HH:mm:ss.SSSZ'`

Defined in: [ConsoleAppender.ts:9](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/ConsoleAppender.ts#L9)

##### layout?

> `optional` **layout**: [`ILayout`](typings.md#ilayout)

Defined in: [ConsoleAppender.ts:15](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/ConsoleAppender.ts#L15)

Layout (布局)

##### name

> **name**: `string` = `'console'`

Defined in: [ConsoleAppender.ts:8](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/ConsoleAppender.ts#L8)

###### Implementation of

[`IAppender`](typings.md#iappender).[`name`](typings.md#iappender#name)

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [ConsoleAppender.ts:42](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/ConsoleAppender.ts#L42)

Close appender (关闭输出)

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`IAppender`](typings.md#iappender).[`close`](typings.md#iappender#close)

##### setup()

> **setup**(`logger`): `void`

Defined in: [ConsoleAppender.ts:19](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/ConsoleAppender.ts#L19)

###### Parameters

###### logger

[`ILogger`](typings.md#ilogger)

###### Returns

`void`

###### Implementation of

[`IAppender`](typings.md#iappender).[`setup`](typings.md#iappender#setup)

##### write()

> **write**(`event`): `void`

Defined in: [ConsoleAppender.ts:27](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/base-log-factory/src/ConsoleAppender.ts#L27)

Write log (写入日志)

###### Parameters

###### event

[`LogEvent`](typings.md#logevent)

Log event (日志事件)

###### Returns

`void`

###### Implementation of

[`IAppender`](typings.md#iappender).[`write`](typings.md#iappender#write)
