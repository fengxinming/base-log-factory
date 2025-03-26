[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [debug-appender/src/DebugAppender](../index.md) / default

# Class: default

Defined in: debug-appender/src/DebugAppender.ts:9

Console appender (控制台输出)

## Extends

- `default`

## Constructors

### Constructor

> **new default**(`layout`?, `colors`?): `DebugAppender`

Defined in: colorful-appender/dist/ColorfulAppender.d.ts:13

Constructor (构造函数)

#### Parameters

##### layout?

`ILayout`

Layout (布局)

##### colors?

`Record`\<`LogLevel`, `string`\>

#### Returns

`DebugAppender`

#### Inherited from

`ColorfulAppender.constructor`

## Properties

### colors

> **colors**: `Record`\<`LogLevel`, `string`\>

Defined in: colorful-appender/dist/ColorfulAppender.d.ts:7

#### Inherited from

`ColorfulAppender.colors`

***

### dateFormat

> **dateFormat**: `string`

Defined in: colorful-appender/dist/ColorfulAppender.d.ts:8

#### Inherited from

`ColorfulAppender.dateFormat`

***

### debug

> **debug**: `Debugger`

Defined in: debug-appender/src/DebugAppender.ts:11

***

### layout?

> `optional` **layout**: `ILayout`

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:6

#### Inherited from

`ColorfulAppender.layout`

***

### name

> **name**: `string` = `'debug'`

Defined in: debug-appender/src/DebugAppender.ts:10

#### Overrides

`ColorfulAppender.name`

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: debug-appender/src/DebugAppender.ts:42

Close appender (关闭输出)

#### Returns

`Promise`\<`void`\>

#### Overrides

`ColorfulAppender.close`

***

### color()

> `protected` **color**(`str`, `event`): `string`

Defined in: colorful-appender/dist/ColorfulAppender.d.ts:19

#### Parameters

##### str

`string`

##### event

`LogEvent`

#### Returns

`string`

#### Inherited from

`ColorfulAppender.color`

***

### setup()

> **setup**(`__namedParameters`): `void`

Defined in: debug-appender/src/DebugAppender.ts:13

#### Parameters

##### \_\_namedParameters

`ILogger`

#### Returns

`void`

#### Overrides

`ColorfulAppender.setup`

***

### write()

> **write**(`event`): `void`

Defined in: debug-appender/src/DebugAppender.ts:24

Write log (写入日志)

#### Parameters

##### event

`LogEvent`

Log event (日志事件)

#### Returns

`void`

#### Overrides

`ColorfulAppender.write`
