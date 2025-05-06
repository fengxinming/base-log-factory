[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / BaseFileAppender

# BaseFileAppender

## 类

### `abstract` BaseFileAppender

定义于: [BaseFileAppender.ts:18](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L18)

Base file appender (文件日志基类)

#### 继承于

- [`DateFileAppender`](DateFileAppender.md#datefileappender)
- [`FileAppender`](FileAppender.md#fileappender)

#### 实现

- `IAppender`

#### 构造函数

##### 构造函数

> **new BaseFileAppender**(`filePath`, `options`): [`BaseFileAppender`](#basefileappender)

定义于: [BaseFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L28)

Constructor

###### 参数

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](#baseappenderoptions) = `{}`

Options (选项)

###### 返回

[`BaseFileAppender`](#basefileappender)

#### 属性

##### filePath

> `protected` `readonly` **filePath**: `string`

定义于: [BaseFileAppender.ts:29](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L29)

File path (文件路径)

##### layout

> `readonly` **layout**: `ILayout`

定义于: [BaseFileAppender.ts:21](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L21)

##### name

> **name**: `string` = `'baseFile'`

定义于: [BaseFileAppender.ts:19](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L19)

###### 实现了

`IAppender.name`

##### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](#baseappenderoptions) = `{}`

定义于: [BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L30)

Options (选项)

##### stream

> **stream**: `Writable`

定义于: [BaseFileAppender.ts:20](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L20)

#### 方法

##### close()

> **close**(): `Promise`\<`void`\>

定义于: [BaseFileAppender.ts:56](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L56)

Close appender

###### 返回

`Promise`\<`void`\>

###### 实现了

`IAppender.close`

##### getStream()

> `abstract` `protected` **getStream**(`filePath`, `options`): `Writable`

定义于: [BaseFileAppender.ts:65](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L65)

Get stream (获取流)

###### 参数

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](#baseappenderoptions)

Options (选项)

###### 返回

`Writable`

##### setup()

> **setup**(): `void`

定义于: [BaseFileAppender.ts:36](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L36)

###### 返回

`void`

###### 实现了

`IAppender.setup`

##### write()

> **write**(`logEvent`): `void`

定义于: [BaseFileAppender.ts:44](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L44)

Write log event

###### 参数

###### logEvent

`LogEvent`

Log event (日志事件)

###### 返回

`void`

###### 实现了

`IAppender.write`

## 类型别名

### BaseAppenderOptions

> **BaseAppenderOptions** = `object` & `Partial`\<`RollingOptions`\>

定义于: [BaseFileAppender.ts:11](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L11)

Base appender options (日志记录器基础选项)

#### 类型声明

##### layout?

> `optional` **layout**: `ILayout`
