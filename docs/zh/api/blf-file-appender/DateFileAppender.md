[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / DateFileAppender

# DateFileAppender

## 类

### DateFileAppender

定义于: [DateFileAppender.ts:16](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L16)

Date File Appender (日期文件记录器)

#### 继承

- [`BaseFileAppender`](BaseFileAppender.md#basefileappender)

#### 构造函数

##### 构造函数

> **new DateFileAppender**(`filePath`, `options`): [`DateFileAppender`](#datefileappender)

定义于: [DateFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L23)

Constructor (构造函数)

###### 参数

###### filePath

`string`

File path (文件路径)

###### options

[`DateFileAppenderOptions`](#datefileappenderoptions-1)

Options (选项)

###### 返回

[`DateFileAppender`](#datefileappender)

###### 重写了

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`constructor`](BaseFileAppender.md#basefileappender#constructor)

#### 属性

##### filePath

> `protected` `readonly` **filePath**: `string`

定义于: [BaseFileAppender.ts:29](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L29)

File path (文件路径)

###### 继承自

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`filePath`](BaseFileAppender.md#basefileappender#filepath)

##### layout

> `readonly` **layout**: `ILayout`

定义于: [BaseFileAppender.ts:21](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L21)

###### 继承自

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`layout`](BaseFileAppender.md#basefileappender#layout)

##### name

> **name**: `string` = `'dateFile'`

定义于: [DateFileAppender.ts:17](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L17)

###### 重写了

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`name`](BaseFileAppender.md#basefileappender#name)

##### options

> `protected` `readonly` **options**: [`DateFileAppenderOptions`](#datefileappenderoptions-1)

定义于: [DateFileAppender.ts:25](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L25)

Options (选项)

###### 继承自

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`options`](BaseFileAppender.md#basefileappender#options)

##### stream

> **stream**: `Writable`

定义于: [BaseFileAppender.ts:20](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L20)

###### 继承自

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`stream`](BaseFileAppender.md#basefileappender#stream)

#### 方法

##### close()

> **close**(): `Promise`\<`void`\>

定义于: [BaseFileAppender.ts:56](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L56)

Close appender

###### 返回

`Promise`\<`void`\>

###### 继承自

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`close`](BaseFileAppender.md#basefileappender#close)

##### getStream()

> `protected` **getStream**(`filePath`, `options`): `DateFileStream`

定义于: [DateFileAppender.ts:35](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L35)

Get stream (获取流)

###### 参数

###### filePath

`any`

File path (文件路径)

###### options

`any`

Options (选项)

###### 返回

`DateFileStream`

###### 重写了

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`getStream`](BaseFileAppender.md#basefileappender#getstream)

##### setup()

> **setup**(): `void`

定义于: [BaseFileAppender.ts:36](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L36)

###### 返回

`void`

###### 继承自

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`setup`](BaseFileAppender.md#basefileappender#setup)

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

###### 继承自

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`write`](BaseFileAppender.md#basefileappender#write)

## 类型别名

### DateFileAppenderOptions

> **DateFileAppenderOptions** = [`BaseAppenderOptions`](BaseFileAppender.md#baseappenderoptions) & `Partial`\<`DateRollingOptions`\>

定义于: [DateFileAppender.ts:10](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/DateFileAppender.ts#L10)

Date file appender options (日志记录器日期文件选项)
