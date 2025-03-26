[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [file-appender/src/BaseFileAppender](../index.md) / default

# 类: `abstract` default

定义于: [file-appender/src/BaseFileAppender.ts:12](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L12)

Base file appender (文件日志基类)

## 继承于

- [`default`](../../DateFileAppender/classes/default.md)
- [`default`](../../FileAppender/classes/default.md)

## 实现

- `IAppender`

## 构造函数

### 构造函数

> **new default**(`filePath`, `options`): `BaseFileAppender`

定义于: [file-appender/src/BaseFileAppender.ts:22](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L22)

Constructor

#### 参数

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

Options (选项)

#### 返回

`BaseFileAppender`

## 属性

### filePath

> `protected` `readonly` **filePath**: `string`

定义于: [file-appender/src/BaseFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L23)

File path (文件路径)

***

### layout

> `readonly` **layout**: `ILayout`

定义于: [file-appender/src/BaseFileAppender.ts:15](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L15)

***

### name

> **name**: `string` = `'baseFile'`

定义于: [file-appender/src/BaseFileAppender.ts:13](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L13)

#### 实现了

`IAppender.name`

***

### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

定义于: [file-appender/src/BaseFileAppender.ts:24](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L24)

Options (选项)

***

### stream

> **stream**: `Writable`

定义于: [file-appender/src/BaseFileAppender.ts:14](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L14)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [file-appender/src/BaseFileAppender.ts:50](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L50)

Close appender

#### 返回

`Promise`\<`void`\>

#### 实现了

`IAppender.close`

***

### getStream()

> `abstract` `protected` **getStream**(`filePath`, `options`): `Writable`

定义于: [file-appender/src/BaseFileAppender.ts:59](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L59)

Get stream (获取流)

#### 参数

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md)

Options (选项)

#### 返回

`Writable`

***

### setup()

> **setup**(): `void`

定义于: [file-appender/src/BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L30)

#### 返回

`void`

#### 实现了

`IAppender.setup`

***

### write()

> **write**(`logEvent`): `void`

定义于: [file-appender/src/BaseFileAppender.ts:38](https://github.com/fengxinming/log-base/blob/2c3efcb178d7ddc2410225a9c002fea10b6d1b2d/packages/file-appender/src/BaseFileAppender.ts#L38)

Write log event

#### 参数

##### logEvent

`LogEvent`

Log event (日志事件)

#### 返回

`void`

#### 实现了

`IAppender.write`
