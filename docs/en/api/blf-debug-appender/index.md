**blf-debug-appender**

***

# blf-debug-appender

## Classes

### default

Defined in: [debug-appender/src/DebugAppender.ts:9](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/debug-appender/src/DebugAppender.ts#L9)

Console appender (控制台输出)

#### Extends

- `default`

#### Constructors

##### Constructor

> **new default**(`opts`?): [`default`](#default)

Defined in: colorful-appender/dist/ColorfulAppender.d.ts:13

Constructor (构造函数)

###### Parameters

###### opts?

`ColorfulAppenderOptions`

###### Returns

[`default`](#default)

###### Inherited from

`ColorfulAppender.constructor`

#### Properties

##### colors

> **colors**: `Record`\<`Level`, `string`\>

Defined in: colorful-appender/dist/ColorfulAppender.d.ts:8

###### Inherited from

`ColorfulAppender.colors`

##### dateFormat

> **dateFormat**: `string` = `'HH:mm:ss'`

Defined in: [debug-appender/src/DebugAppender.ts:11](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/debug-appender/src/DebugAppender.ts#L11)

###### Overrides

`ColorfulAppender.dateFormat`

##### debug

> **debug**: `Debugger`

Defined in: [debug-appender/src/DebugAppender.ts:12](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/debug-appender/src/DebugAppender.ts#L12)

##### layout?

> `optional` **layout**: `ILayout`

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:6

###### Inherited from

`ColorfulAppender.layout`

##### name

> **name**: `string` = `'debug'`

Defined in: [debug-appender/src/DebugAppender.ts:10](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/debug-appender/src/DebugAppender.ts#L10)

###### Overrides

`ColorfulAppender.name`

#### Methods

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [debug-appender/src/DebugAppender.ts:45](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/debug-appender/src/DebugAppender.ts#L45)

Close appender (关闭输出)

###### Returns

`Promise`\<`void`\>

###### Overrides

`ColorfulAppender.close`

##### color()

> `protected` **color**(`str`, `event`): `string`

Defined in: colorful-appender/dist/ColorfulAppender.d.ts:19

###### Parameters

###### str

`string`

###### event

`LogEvent`

###### Returns

`string`

###### Inherited from

`ColorfulAppender.color`

##### setup()

> **setup**(`__namedParameters`): `void`

Defined in: [debug-appender/src/DebugAppender.ts:14](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/debug-appender/src/DebugAppender.ts#L14)

###### Parameters

###### \_\_namedParameters

`ILogger`

###### Returns

`void`

###### Overrides

`ColorfulAppender.setup`

##### write()

> **write**(`event`): `void`

Defined in: [debug-appender/src/DebugAppender.ts:25](https://github.com/fengxinming/log-base/blob/8667f4e9ec4dc1a7959cf628998a70ef9d3209f9/packages/debug-appender/src/DebugAppender.ts#L25)

Write log (写入日志)

###### Parameters

###### event

`LogEvent`

Log event (日志事件)

###### Returns

`void`

###### Overrides

`ColorfulAppender.write`
