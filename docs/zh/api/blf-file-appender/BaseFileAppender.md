[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / BaseFileAppender

# BaseFileAppender

## 类

### `abstract` default

定义于: [BaseFileAppender.ts:12](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L12)

Base file appender (文件日志基类)

#### 继承于

- [`default`](DateFileAppender.md#default)
- [`default`](FileAppender.md#default)

#### 实现

- `IAppender`

#### 构造函数

##### 构造函数

> **new default**(`filePath`, `options`): [`default`](#default)

定义于: [BaseFileAppender.ts:22](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L22)

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

#### 属性

##### filePath

> `protected` `readonly` **filePath**: `string`

定义于: [BaseFileAppender.ts:23](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L23)

File path (文件路径)

##### layout

> `readonly` **layout**: `ILayout`

定义于: [BaseFileAppender.ts:15](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L15)

##### name

> **name**: `string` = `'baseFile'`

定义于: [BaseFileAppender.ts:13](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L13)

###### 实现了

`IAppender.name`

##### options

> `protected` `readonly` **options**: [`BaseAppenderOptions`](typings.md#baseappenderoptions) = `{}`

定义于: [BaseFileAppender.ts:24](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L24)

Options (选项)

##### stream

> **stream**: `Writable`

定义于: [BaseFileAppender.ts:14](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L14)

#### 方法

##### close()

> **close**(): `Promise`\<`void`\>

定义于: [BaseFileAppender.ts:50](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L50)

Close appender

###### 返回

`Promise`\<`void`\>

###### 实现了

`IAppender.close`

##### getStream()

> `abstract` `protected` **getStream**(`filePath`, `options`): `Writable`

定义于: [BaseFileAppender.ts:59](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L59)

Get stream (获取流)

###### 参数

###### filePath

`string`

File path (文件路径)

###### options

[`BaseAppenderOptions`](typings.md#baseappenderoptions)

Options (选项)

###### 返回

`Writable`

##### setup()

> **setup**(): `void`

定义于: [BaseFileAppender.ts:30](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L30)

###### 返回

`void`

###### 实现了

`IAppender.setup`

##### write()

> **write**(`logEvent`): `void`

定义于: [BaseFileAppender.ts:38](https://github.com/fengxinming/log-base/blob/531de42a0f94da12b314d5f0d519bbe6bce7c154/packages/file-appender/src/BaseFileAppender.ts#L38)

Write log event

###### 参数

###### logEvent

`LogEvent`

Log event (日志事件)

###### 返回

`void`

###### 实现了

`IAppender.write`
