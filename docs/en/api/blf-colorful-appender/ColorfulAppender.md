[**blf-colorful-appender**](index.md)

***

[blf-colorful-appender](index.md) / ColorfulAppender

# ColorfulAppender

## Classes

### default

Defined in: [colorful-appender/src/ColorfulAppender.ts:10](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/colorful-appender/src/ColorfulAppender.ts#L10)

Console appender (控制台输出)

#### Extends

- `default`

#### Constructors

##### Constructor

> **new default**(`opts`): [`default`](#default)

Defined in: [colorful-appender/src/ColorfulAppender.ts:16](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/colorful-appender/src/ColorfulAppender.ts#L16)

Constructor (构造函数)

###### Parameters

###### opts

[`ColorfulAppenderOptions`](typings.md#colorfulappenderoptions) = `{}`

###### Returns

[`default`](#default)

###### Overrides

`ConsoleAppender.constructor`

#### Properties

##### colors

> **colors**: `Record`\<`Level`, `string`\>

Defined in: [colorful-appender/src/ColorfulAppender.ts:12](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/colorful-appender/src/ColorfulAppender.ts#L12)

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

Defined in: [colorful-appender/src/ColorfulAppender.ts:11](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/colorful-appender/src/ColorfulAppender.ts#L11)

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

Defined in: [colorful-appender/src/ColorfulAppender.ts:37](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/colorful-appender/src/ColorfulAppender.ts#L37)

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

Defined in: [colorful-appender/src/ColorfulAppender.ts:25](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/colorful-appender/src/ColorfulAppender.ts#L25)

Write log (写入日志)

###### Parameters

###### event

`LogEvent`

Log event (日志事件)

###### Returns

`void`

###### Overrides

`ConsoleAppender.write`
