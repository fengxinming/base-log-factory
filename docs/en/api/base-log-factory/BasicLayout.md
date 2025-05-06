[**base-log-factory**](index.md)

***

[base-log-factory](index.md) / BasicLayout

# BasicLayout

## Classes

### default

Defined in: [BasicLayout.ts:8](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/BasicLayout.ts#L8)

Basic layout for logging messages (基础的日志布局)

#### Implements

- [`ILayout`](typings.md#ilayout)

#### Constructors

##### Constructor

> **new default**(): [`default`](#default)

###### Returns

[`default`](#default)

#### Methods

##### format()

> **format**(`event`): `string`

Defined in: [BasicLayout.ts:13](https://github.com/fengxinming/log-base/blob/483618e5ef8d17f349bb26fef0da7eaaacfb7fef/packages/base-log-factory/src/BasicLayout.ts#L13)

Format the log event (格式化日志事件)

###### Parameters

###### event

[`LogEvent`](typings.md#logevent)

Log event (日志事件)

###### Returns

`string`

###### Implementation of

[`ILayout`](typings.md#ilayout).[`format`](typings.md#ilayout#format)
