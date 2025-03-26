[**base-log-factory**](../../../../index.md)

***

[base-log-factory](../../../../index.md) / [base-log-factory/src/typings](../index.md) / ILogger

# 接口: ILogger

定义于: [base-log-factory/src/typings.ts:64](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L64)

Logger interface (日志接口)

## 属性

### appenders

> **appenders**: `Map`\<`string`, [`IAppender`](IAppender.md)\>

定义于: [base-log-factory/src/typings.ts:66](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L66)

***

### name

> **name**: `string`

定义于: [base-log-factory/src/typings.ts:65](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L65)

## 访问器

### level

#### Getter 签名

> **get** **level**(): [`default`](../../LogLevel/enumerations/default.md)

定义于: [base-log-factory/src/typings.ts:68](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L68)

##### 返回

[`default`](../../LogLevel/enumerations/default.md)

#### Setter 签名

> **set** **level**(`l`): `void`

定义于: [base-log-factory/src/typings.ts:67](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L67)

##### 参数

###### l

[`default`](../../LogLevel/enumerations/default.md) | [`TLevel`](../type-aliases/TLevel.md)

##### 返回

`void`

## 方法

### addContext()

> **addContext**(`key`, `value`): `void`

定义于: [base-log-factory/src/typings.ts:69](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L69)

#### 参数

##### key

`string`

##### value

`any`

#### 返回

`void`

***

### clearContext()

> **clearContext**(): `void`

定义于: [base-log-factory/src/typings.ts:71](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L71)

#### 返回

`void`

***

### debug()

> **debug**(...`args`): `void`

定义于: [base-log-factory/src/typings.ts:74](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L74)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### dispose()

> **dispose**(): `Promise`\<`any`[]\>

定义于: [base-log-factory/src/typings.ts:72](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L72)

#### 返回

`Promise`\<`any`[]\>

***

### error()

> **error**(...`args`): `void`

定义于: [base-log-factory/src/typings.ts:77](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L77)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### fatal()

> **fatal**(...`args`): `void`

定义于: [base-log-factory/src/typings.ts:78](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L78)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### info()

> **info**(...`args`): `void`

定义于: [base-log-factory/src/typings.ts:75](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L75)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

定义于: [base-log-factory/src/typings.ts:70](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L70)

#### 参数

##### key

`string`

#### 返回

`void`

***

### trace()

> **trace**(...`args`): `void`

定义于: [base-log-factory/src/typings.ts:73](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L73)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### warn()

> **warn**(...`args`): `void`

定义于: [base-log-factory/src/typings.ts:76](https://github.com/fengxinming/log-base/blob/f6c9069a5cd1f743106018a69d7fd4022e94fab6/packages/base-log-factory/src/typings.ts#L76)

#### 参数

##### args

...`any`[]

#### 返回

`void`
