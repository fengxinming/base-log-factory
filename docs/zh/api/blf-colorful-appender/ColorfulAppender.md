[**blf-colorful-appender**](index.md)

***

[blf-colorful-appender](index.md) / ColorfulAppender

# ColorfulAppender

## 类

### ColorfulAppender

定义于: [colorful-appender/src/ColorfulAppender.ts:15](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L15)

Console appender (控制台输出)

#### 继承

- `default`

#### 构造函数

##### 构造函数

> **new ColorfulAppender**(`opts`): [`ColorfulAppender`](#colorfulappender)

定义于: [colorful-appender/src/ColorfulAppender.ts:21](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L21)

Constructor (构造函数)

###### 参数

###### opts

[`ColorfulAppenderOptions`](#colorfulappenderoptions) = `{}`

###### 返回

[`ColorfulAppender`](#colorfulappender)

###### 重写了

`ConsoleAppender.constructor`

#### 属性

##### colors

> **colors**: `Record`\<`Level`, `string`\>

定义于: [colorful-appender/src/ColorfulAppender.ts:17](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L17)

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

定义于: [colorful-appender/src/ColorfulAppender.ts:16](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L16)

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

定义于: [colorful-appender/src/ColorfulAppender.ts:42](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L42)

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

定义于: [colorful-appender/src/ColorfulAppender.ts:30](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L30)

Write log (写入日志)

###### 参数

###### event

`LogEvent`

Log event (日志事件)

###### 返回

`void`

###### 重写了

`ConsoleAppender.write`

## 接口

### ColorfulAppenderOptions

定义于: [colorful-appender/src/ColorfulAppender.ts:7](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L7)

#### 属性

##### colors?

> `optional` **colors**: `Record`\<`Level`, `string`\>

定义于: [colorful-appender/src/ColorfulAppender.ts:9](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L9)

##### layout?

> `optional` **layout**: `ILayout`

定义于: [colorful-appender/src/ColorfulAppender.ts:8](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L8)
