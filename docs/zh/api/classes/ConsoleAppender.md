[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / ConsoleAppender

# 类: ConsoleAppender

定义于: [appenders/ConsoleAppender.ts:7](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L7)

Console appender (控制台输出)

## 实现

- [`IAppender`](../interfaces/IAppender.md)

## 构造函数

### new ConsoleAppender()

> **new ConsoleAppender**(`layout`?): `ConsoleAppender`

定义于: [appenders/ConsoleAppender.ts:13](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L13)

Constructor (构造函数)

#### 参数

##### layout?

[`ILayout`](../interfaces/ILayout.md)

Layout (布局)

#### 返回

`ConsoleAppender`

## 属性

### layout?

> `readonly` `optional` **layout**: [`ILayout`](../interfaces/ILayout.md)

定义于: [appenders/ConsoleAppender.ts:13](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L13)

Layout (布局)

***

### name

> **name**: `string` = `'console'`

定义于: [appenders/ConsoleAppender.ts:8](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L8)

#### 实现了

[`IAppender`](../interfaces/IAppender.md).[`name`](../interfaces/IAppender.md#name)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [appenders/ConsoleAppender.ts:34](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L34)

Close appender (关闭输出)

#### 返回

`Promise`\<`void`\>

#### 实现了

[`IAppender`](../interfaces/IAppender.md).[`close`](../interfaces/IAppender.md#close)

***

### write()

> **write**(`event`): `void`

定义于: [appenders/ConsoleAppender.ts:19](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/appenders/ConsoleAppender.ts#L19)

Write log (写入日志)

#### 参数

##### event

[`ILogEvent`](../interfaces/ILogEvent.md)

Log event (日志事件)

#### 返回

`void`

#### 实现了

[`IAppender`](../interfaces/IAppender.md).[`write`](../interfaces/IAppender.md#write)
