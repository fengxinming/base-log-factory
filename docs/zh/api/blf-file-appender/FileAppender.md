[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / FileAppender

# FileAppender

## 类

### default

定义于: [FileAppender.ts:8](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/FileAppender.ts#L8)

File Appender (文件记录器)

#### 继承

- [`default`](BaseFileAppender.md#default)

#### 构造函数

##### 构造函数

> **new default**(`filePath`, `options`): [`default`](#default)

定义于: [BaseFileAppender.ts:22](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L22)

Constructor

###### 参数

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](typings.md#baseappenderoptions) = `{}`

Options (选项)

###### 返回

[`default`](#default)

###### 继承自

[`default`](BaseFileAppender.md#default).[`constructor`](BaseFileAppender.md#default#constructor)

#### 属性

##### filePath

> `protected` `readonly` **filePath**: `string`

定义于: [BaseFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L23)

File path (文件路径)

###### 继承自

[`default`](BaseFileAppender.md#default).[`filePath`](BaseFileAppender.md#default#filepath)

##### layout

> `readonly` **layout**: `ILayout`

定义于: [BaseFileAppender.ts:15](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L15)

###### 继承自

[`default`](BaseFileAppender.md#default).[`layout`](BaseFileAppender.md#default#layout)

##### name

> **name**: `string` = `'file'`

定义于: [FileAppender.ts:9](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/FileAppender.ts#L9)

###### 重写了

[`default`](BaseFileAppender.md#default).[`name`](BaseFileAppender.md#default#name)

##### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](typings.md#baseappenderoptions) = `{}`

定义于: [BaseFileAppender.ts:24](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L24)

Options (选项)

###### 继承自

[`default`](BaseFileAppender.md#default).[`options`](BaseFileAppender.md#default#options)

##### stream

> **stream**: `Writable`

定义于: [BaseFileAppender.ts:14](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L14)

###### 继承自

[`default`](BaseFileAppender.md#default).[`stream`](BaseFileAppender.md#default#stream)

#### 方法

##### close()

> **close**(): `Promise`\<`void`\>

定义于: [BaseFileAppender.ts:50](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L50)

Close appender

###### 返回

`Promise`\<`void`\>

###### 继承自

[`default`](BaseFileAppender.md#default).[`close`](BaseFileAppender.md#default#close)

##### getStream()

> `protected` **getStream**(`filePath`, `options`): `FileStream`

定义于: [FileAppender.ts:15](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/FileAppender.ts#L15)

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

[`default`](BaseFileAppender.md#default).[`getStream`](BaseFileAppender.md#default#getstream)

##### setup()

> **setup**(): `void`

定义于: [BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L30)

###### 返回

`void`

###### 继承自

[`default`](BaseFileAppender.md#default).[`setup`](BaseFileAppender.md#default#setup)

##### write()

> **write**(`logEvent`): `void`

定义于: [BaseFileAppender.ts:38](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/BaseFileAppender.ts#L38)

Write log event

###### 参数

###### logEvent

`LogEvent`

Log event (日志事件)

###### 返回

`void`

###### 继承自

[`default`](BaseFileAppender.md#default).[`write`](BaseFileAppender.md#default#write)
