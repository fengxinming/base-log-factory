[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [file-appender/src/FileAppender](../index.md) / default

# 类: default

定义于: [file-appender/src/FileAppender.ts:8](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/FileAppender.ts#L8)

File Appender (文件记录器)

## 继承

- [`default`](../../BaseFileAppender/classes/default.md)

## 构造函数

### 构造函数

> **new default**(`filePath`, `options`): `FileAppender`

定义于: [file-appender/src/BaseFileAppender.ts:22](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/BaseFileAppender.ts#L22)

Constructor

#### 参数

##### filePath

`string`

File path (文件路径)

##### options

[`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

Options (选项)

#### 返回

`FileAppender`

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`constructor`](../../BaseFileAppender/classes/default.md#constructor)

## 属性

### filePath

> `protected` `readonly` **filePath**: `string`

定义于: [file-appender/src/BaseFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/BaseFileAppender.ts#L23)

File path (文件路径)

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`filePath`](../../BaseFileAppender/classes/default.md#filepath)

***

### layout

> `readonly` **layout**: `ILayout`

定义于: [file-appender/src/BaseFileAppender.ts:15](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/BaseFileAppender.ts#L15)

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`layout`](../../BaseFileAppender/classes/default.md#layout)

***

### name

> **name**: `string` = `'file'`

定义于: [file-appender/src/FileAppender.ts:9](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/FileAppender.ts#L9)

#### 重写了

[`default`](../../BaseFileAppender/classes/default.md).[`name`](../../BaseFileAppender/classes/default.md#name)

***

### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](../../typings/type-aliases/BaseAppenderOptions.md) = `{}`

定义于: [file-appender/src/BaseFileAppender.ts:24](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/BaseFileAppender.ts#L24)

Options (选项)

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`options`](../../BaseFileAppender/classes/default.md#options)

***

### stream

> **stream**: `Writable`

定义于: [file-appender/src/BaseFileAppender.ts:14](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/BaseFileAppender.ts#L14)

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`stream`](../../BaseFileAppender/classes/default.md#stream)

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: [file-appender/src/BaseFileAppender.ts:50](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/BaseFileAppender.ts#L50)

Close appender

#### 返回

`Promise`\<`void`\>

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`close`](../../BaseFileAppender/classes/default.md#close)

***

### getStream()

> `protected` **getStream**(`filePath`, `options`): `FileStream`

定义于: [file-appender/src/FileAppender.ts:15](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/FileAppender.ts#L15)

Get write stream (获取写入流)

#### 参数

##### filePath

`any`

File path (文件路径)

##### options

`any`

Write stream options (写入流选项)

#### 返回

`FileStream`

#### 重写了

[`default`](../../BaseFileAppender/classes/default.md).[`getStream`](../../BaseFileAppender/classes/default.md#getstream)

***

### setup()

> **setup**(): `void`

定义于: [file-appender/src/BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/BaseFileAppender.ts#L30)

#### 返回

`void`

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`setup`](../../BaseFileAppender/classes/default.md#setup)

***

### write()

> **write**(`logEvent`): `void`

定义于: [file-appender/src/BaseFileAppender.ts:38](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/file-appender/src/BaseFileAppender.ts#L38)

Write log event

#### 参数

##### logEvent

`LogEvent`

Log event (日志事件)

#### 返回

`void`

#### 继承自

[`default`](../../BaseFileAppender/classes/default.md).[`write`](../../BaseFileAppender/classes/default.md#write)
