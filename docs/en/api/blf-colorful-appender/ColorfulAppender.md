[**blf-colorful-appender**](index.md)

***

[blf-colorful-appender](index.md) / ColorfulAppender

# ColorfulAppender

## Classes

### default

Defined in: [colorful-appender/src/ColorfulAppender.ts:9](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/colorful-appender/src/ColorfulAppender.ts#L9)

Console appender (控制台输出)

#### Extends

- `default`

#### Constructors

##### Constructor

> **new default**(`layout`?, `colors`?): [`default`](#default)

Defined in: [colorful-appender/src/ColorfulAppender.ts:17](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/colorful-appender/src/ColorfulAppender.ts#L17)

Constructor (构造函数)

###### Parameters

###### layout?

`ILayout`

Layout (布局)

###### colors?

`Record`\<`LogLevel`, `string`\>

###### Returns

[`default`](#default)

###### Overrides

`ConsoleAppender.constructor`

#### Properties

##### colors

> **colors**: `Record`\<`LogLevel`, `string`\>

Defined in: [colorful-appender/src/ColorfulAppender.ts:11](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/colorful-appender/src/ColorfulAppender.ts#L11)

##### dateFormat

> **dateFormat**: `string` = `'HH:mm:ss.SSSZ'`

Defined in: [colorful-appender/src/ColorfulAppender.ts:12](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/colorful-appender/src/ColorfulAppender.ts#L12)

###### Overrides

`ConsoleAppender.dateFormat`

##### layout?

> `optional` **layout**: `ILayout`

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:6

###### Inherited from

`ConsoleAppender.layout`

##### name

> **name**: `string` = `'colorful'`

Defined in: [colorful-appender/src/ColorfulAppender.ts:10](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/colorful-appender/src/ColorfulAppender.ts#L10)

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

Defined in: [colorful-appender/src/ColorfulAppender.ts:38](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/colorful-appender/src/ColorfulAppender.ts#L38)

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

Defined in: [colorful-appender/src/ColorfulAppender.ts:26](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/colorful-appender/src/ColorfulAppender.ts#L26)

Write log (写入日志)

###### Parameters

###### event

`LogEvent`

Log event (日志事件)

###### Returns

`void`

###### Overrides

`ConsoleAppender.write`
