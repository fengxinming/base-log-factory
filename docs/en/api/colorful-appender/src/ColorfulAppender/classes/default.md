[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [colorful-appender/src/ColorfulAppender](../index.md) / default

# Class: default

Defined in: colorful-appender/src/ColorfulAppender.ts:9

Console appender (控制台输出)

## Extends

- `default`

## Constructors

### Constructor

> **new default**(`layout`?, `colors`?): `ColorfulAppender`

Defined in: colorful-appender/src/ColorfulAppender.ts:17

Constructor (构造函数)

#### Parameters

##### layout?

`ILayout`

Layout (布局)

##### colors?

`Record`\<`LogLevel`, `string`\>

#### Returns

`ColorfulAppender`

#### Overrides

`ConsoleAppender.constructor`

## Properties

### colors

> **colors**: `Record`\<`LogLevel`, `string`\>

Defined in: colorful-appender/src/ColorfulAppender.ts:11

***

### dateFormat

> **dateFormat**: `string` = `'HH:mm:ss.SSSZ'`

Defined in: colorful-appender/src/ColorfulAppender.ts:12

#### Overrides

`ConsoleAppender.dateFormat`

***

### layout?

> `optional` **layout**: `ILayout`

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:6

#### Inherited from

`ConsoleAppender.layout`

***

### name

> **name**: `string` = `'colorful'`

Defined in: colorful-appender/src/ColorfulAppender.ts:10

#### Overrides

`ConsoleAppender.name`

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:23

Close appender (关闭输出)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`ConsoleAppender.close`

***

### color()

> `protected` **color**(`str`, `event`): `string`

Defined in: colorful-appender/src/ColorfulAppender.ts:38

#### Parameters

##### str

`string`

##### event

`LogEvent`

#### Returns

`string`

***

### setup()

> **setup**(`logger`): `void`

Defined in: base-log-factory/dist/ConsoleAppender.d.ts:14

#### Parameters

##### logger

`ILogger`

#### Returns

`void`

#### Inherited from

`ConsoleAppender.setup`

***

### write()

> **write**(`event`): `void`

Defined in: colorful-appender/src/ColorfulAppender.ts:26

Write log (写入日志)

#### Parameters

##### event

`LogEvent`

Log event (日志事件)

#### Returns

`void`

#### Overrides

`ConsoleAppender.write`
