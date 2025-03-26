[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [debug-appender/src/DebugAppender](../index.md) / default

# 类: default

定义于: debug-appender/src/DebugAppender.ts:9

Console appender (控制台输出)

## 继承

- `default`

## 构造函数

### 构造函数

> **new default**(`layout`?, `colors`?): `DebugAppender`

定义于: colorful-appender/dist/ColorfulAppender.d.ts:13

Constructor (构造函数)

#### 参数

##### layout?

`ILayout`

Layout (布局)

##### colors?

`Record`\<`LogLevel`, `string`\>

#### 返回

`DebugAppender`

#### 继承自

`ColorfulAppender.constructor`

## 属性

### colors

> **colors**: `Record`\<`LogLevel`, `string`\>

定义于: colorful-appender/dist/ColorfulAppender.d.ts:7

#### 继承自

`ColorfulAppender.colors`

***

### dateFormat

> **dateFormat**: `string`

定义于: colorful-appender/dist/ColorfulAppender.d.ts:8

#### 继承自

`ColorfulAppender.dateFormat`

***

### debug

> **debug**: `Debugger`

定义于: debug-appender/src/DebugAppender.ts:11

***

### layout?

> `optional` **layout**: `ILayout`

定义于: base-log-factory/dist/ConsoleAppender.d.ts:6

#### 继承自

`ColorfulAppender.layout`

***

### name

> **name**: `string` = `'debug'`

定义于: debug-appender/src/DebugAppender.ts:10

#### 重写了

`ColorfulAppender.name`

## 方法

### close()

> **close**(): `Promise`\<`void`\>

定义于: debug-appender/src/DebugAppender.ts:42

Close appender (关闭输出)

#### 返回

`Promise`\<`void`\>

#### 重写了

`ColorfulAppender.close`

***

### color()

> `protected` **color**(`str`, `event`): `string`

定义于: colorful-appender/dist/ColorfulAppender.d.ts:19

#### 参数

##### str

`string`

##### event

`LogEvent`

#### 返回

`string`

#### 继承自

`ColorfulAppender.color`

***

### setup()

> **setup**(`__namedParameters`): `void`

定义于: debug-appender/src/DebugAppender.ts:13

#### 参数

##### \_\_namedParameters

`ILogger`

#### 返回

`void`

#### 重写了

`ColorfulAppender.setup`

***

### write()

> **write**(`event`): `void`

定义于: debug-appender/src/DebugAppender.ts:24

Write log (写入日志)

#### 参数

##### event

`LogEvent`

Log event (日志事件)

#### 返回

`void`

#### 重写了

`ColorfulAppender.write`
