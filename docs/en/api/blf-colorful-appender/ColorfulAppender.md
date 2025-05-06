[**blf-colorful-appender**](index.md)

***

[blf-colorful-appender](index.md) / ColorfulAppender

# ColorfulAppender

## Classes

### ColorfulAppender

Defined in: [colorful-appender/src/ColorfulAppender.ts:15](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L15)

Console appender (控制台输出)

#### Extends

- `default`

#### Constructors

##### Constructor

> **new ColorfulAppender**(`opts`): [`ColorfulAppender`](#colorfulappender)

Defined in: [colorful-appender/src/ColorfulAppender.ts:21](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L21)

Constructor (构造函数)

###### Parameters

###### opts

[`ColorfulAppenderOptions`](#colorfulappenderoptions) = `{}`

###### Returns

[`ColorfulAppender`](#colorfulappender)

###### Overrides

`ConsoleAppender.constructor`

#### Properties

##### colors

> **colors**: `Record`\<`Level`, `string`\>

Defined in: [colorful-appender/src/ColorfulAppender.ts:17](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L17)

##### dateFormat

> **dateFormat**: `string`

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:8

###### Inherited from

`ConsoleAppender.dateFormat`

##### layout?

> `optional` **layout**: `ILayout`

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:6

###### Inherited from

`ConsoleAppender.layout`

##### name

> **name**: `string` = `'colorful'`

Defined in: [colorful-appender/src/ColorfulAppender.ts:16](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L16)

###### Overrides

`ConsoleAppender.name`

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:23

Close appender (关闭输出)

###### Returns

`Promise`\<`void`\>

###### Inherited from

`ConsoleAppender.close`

##### color()

> `protected` **color**(`str`, `event`): `string`

Defined in: [colorful-appender/src/ColorfulAppender.ts:42](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L42)

###### Parameters

###### str

`string`

###### event

`LogEvent`

###### Returns

`string`

##### setup()

> **setup**(`logger`): `void`

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:14

###### Parameters

###### logger

`ILogger`

###### Returns

`void`

###### Inherited from

`ConsoleAppender.setup`

##### write()

> **write**(`event`): `void`

Defined in: [colorful-appender/src/ColorfulAppender.ts:30](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L30)

Write log (写入日志)

###### Parameters

###### event

`LogEvent`

Log event (日志事件)

###### Returns

`void`

###### Overrides

`ConsoleAppender.write`

## Interfaces

### ColorfulAppenderOptions

Defined in: [colorful-appender/src/ColorfulAppender.ts:7](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L7)

#### Properties

##### colors?

> `optional` **colors**: `Record`\<`Level`, `string`\>

Defined in: [colorful-appender/src/ColorfulAppender.ts:9](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L9)

##### layout?

> `optional` **layout**: `ILayout`

Defined in: [colorful-appender/src/ColorfulAppender.ts:8](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/colorful-appender/src/ColorfulAppender.ts#L8)
