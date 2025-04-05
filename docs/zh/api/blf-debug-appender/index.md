**blf-debug-appender**

***

# blf-debug-appender

## 类

### default

定义于: [debug-appender/src/DebugAppender.ts:9](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/debug-appender/src/DebugAppender.ts#L9)

Console appender (控制台输出)

#### 继承

- `default`

#### 构造函数

##### 构造函数

> **new default**(`opts`?): [`default`](#default)

定义于: colorful-appender/dist/ColorfulAppender.d.ts:13

Constructor (构造函数)

###### 参数

###### opts?

`ColorfulAppenderOptions`

###### 返回

[`default`](#default)

###### 继承自

`ColorfulAppender.constructor`

#### 属性

##### colors

> **colors**: `Record`\<`Level`, `string`\>

定义于: colorful-appender/dist/ColorfulAppender.d.ts:8

###### 继承自

`ColorfulAppender.colors`

##### dateFormat

> **dateFormat**: `string` = `'HH:mm:ss'`

定义于: [debug-appender/src/DebugAppender.ts:11](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/debug-appender/src/DebugAppender.ts#L11)

###### 重写了

`ColorfulAppender.dateFormat`

##### debug

> **debug**: `Debugger`

定义于: [debug-appender/src/DebugAppender.ts:12](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/debug-appender/src/DebugAppender.ts#L12)

##### layout?

> `optional` **layout**: `ILayout`

定义于: base-log-factory/dist/ConsoleAppender.d.ts:6

###### 继承自

`ColorfulAppender.layout`

##### name

> **name**: `string` = `'debug'`

定义于: [debug-appender/src/DebugAppender.ts:10](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/debug-appender/src/DebugAppender.ts#L10)

###### 重写了

`ColorfulAppender.name`

#### 方法

##### close()

> **close**(): `Promise`\<`void`\>

定义于: [debug-appender/src/DebugAppender.ts:46](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/debug-appender/src/DebugAppender.ts#L46)

Close appender (关闭输出)

###### 返回

`Promise`\<`void`\>

###### 重写了

`ColorfulAppender.close`

##### color()

> `protected` **color**(`str`, `event`): `string`

定义于: colorful-appender/dist/ColorfulAppender.d.ts:19

###### 参数

###### str

`string`

###### event

`LogEvent`

###### 返回

`string`

###### 继承自

`ColorfulAppender.color`

##### setup()

> **setup**(`__namedParameters`): `void`

定义于: [debug-appender/src/DebugAppender.ts:14](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/debug-appender/src/DebugAppender.ts#L14)

###### 参数

###### \_\_namedParameters

`ILogger`

###### 返回

`void`

###### 重写了

`ColorfulAppender.setup`

##### write()

> **write**(`event`): `void`

定义于: [debug-appender/src/DebugAppender.ts:26](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/debug-appender/src/DebugAppender.ts#L26)

Write log (写入日志)

###### 参数

###### event

`LogEvent`

Log event (日志事件)

###### 返回

`void`

###### 重写了

`ColorfulAppender.write`
