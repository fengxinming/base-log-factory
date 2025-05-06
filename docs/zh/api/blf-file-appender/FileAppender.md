[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / FileAppender

# FileAppender

## 类

### FileAppender

定义于: [FileAppender.ts:14](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/FileAppender.ts#L14)

File Appender (文件记录器)

#### 继承

- [`BaseFileAppender`](BaseFileAppender.md#basefileappender)

#### 构造函数

##### 构造函数

> **new FileAppender**(`filePath`, `options`): [`FileAppender`](#fileappender)

定义于: [BaseFileAppender.ts:28](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L28)

Constructor

###### 参数

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](BaseFileAppender.md#baseappenderoptions) = `{}`

Options (选项)

###### 返回

[`FileAppender`](#fileappender)

###### 继承自

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

> **name**: `string` = `'file'`

定义于: [FileAppender.ts:15](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/FileAppender.ts#L15)

###### 重写了

[`BaseFileAppender`](BaseFileAppender.md#basefileappender).[`name`](BaseFileAppender.md#basefileappender#name)

##### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](BaseFileAppender.md#baseappenderoptions) = `{}`

定义于: [BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/BaseFileAppender.ts#L30)

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

> `protected` **getStream**(`filePath`, `options`): `FileStream`

定义于: [FileAppender.ts:21](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/FileAppender.ts#L21)

Get write stream (获取写入流)

###### 参数

###### filePath

`any`

File path (文件路径)

###### options

`any`

Write stream options (写入流选项)

###### 返回

`FileStream`

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

### FileAppenderOptions

> **FileAppenderOptions** = [`BaseAppenderOptions`](BaseFileAppender.md#baseappenderoptions)

定义于: [FileAppender.ts:9](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/file-appender/src/FileAppender.ts#L9)

File appender options (日志记录器文件选项)
