[**blf-colorful-appender**](index.md)

***

[blf-colorful-appender](index.md) / ColorfulAppender

# ColorfulAppender

## 类

### default

定义于: [colorful-appender/src/ColorfulAppender.ts:10](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/colorful-appender/src/ColorfulAppender.ts#L10)

Console appender (控制台输出)

#### 继承

- `default`

#### 构造函数

##### 构造函数

> **new default**(`opts`): [`default`](#default)

定义于: [colorful-appender/src/ColorfulAppender.ts:16](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/colorful-appender/src/ColorfulAppender.ts#L16)

Constructor (构造函数)

###### 参数

###### opts

[`ColorfulAppenderOptions`](typings.md#colorfulappenderoptions) = `{}`

###### 返回

[`default`](#default)

###### 重写了

`ConsoleAppender.constructor`

#### 属性

##### colors

> **colors**: `Record`\<`Level`, `string`\>

定义于: [colorful-appender/src/ColorfulAppender.ts:12](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/colorful-appender/src/ColorfulAppender.ts#L12)

##### dateFormat

> **dateFormat**: `string`

定义于: base-log-factory/dist/ConsoleAppender.d.ts:8

###### 继承自

`ConsoleAppender.dateFormat`

##### layout?

> `optional` **layout**: `ILayout`

定义于: base-log-factory/dist/ConsoleAppender.d.ts:6

###### 继承自

`ConsoleAppender.layout`

##### name

> **name**: `string` = `'colorful'`

定义于: [colorful-appender/src/ColorfulAppender.ts:11](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/colorful-appender/src/ColorfulAppender.ts#L11)

###### 重写了

`ConsoleAppender.name`

#### 方法

##### close()

> **close**(): `Promise`\<`void`\>

定义于: base-log-factory/dist/ConsoleAppender.d.ts:23

Close appender (关闭输出)

###### 返回

`Promise`\<`void`\>

###### 继承自

`ConsoleAppender.close`

##### color()

> `protected` **color**(`str`, `event`): `string`

定义于: [colorful-appender/src/ColorfulAppender.ts:37](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/colorful-appender/src/ColorfulAppender.ts#L37)

###### 参数

###### str

`string`

###### event

`LogEvent`

###### 返回

`string`

##### setup()

> **setup**(`logger`): `void`

定义于: base-log-factory/dist/ConsoleAppender.d.ts:14

###### 参数

###### logger

`ILogger`

###### 返回

`void`

###### 继承自

`ConsoleAppender.setup`

##### write()

> **write**(`event`): `void`

定义于: [colorful-appender/src/ColorfulAppender.ts:25](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/colorful-appender/src/ColorfulAppender.ts#L25)

Write log (写入日志)

###### 参数

###### event

`LogEvent`

Log event (日志事件)

###### 返回

`void`

###### 重写了

`ConsoleAppender.write`
