[**base-log-factory**](../index.md)

***

[base-log-factory](../index.md) / ILogger

# 接口: ILogger

定义于: [typings.ts:23](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L23)

Logger interface (日志接口)

## 属性

### appenders

> **appenders**: `Map`\<`string`, [`IAppender`](IAppender.md)\>

定义于: [typings.ts:25](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L25)

***

### name

> **name**: `string`

定义于: [typings.ts:24](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L24)

## 访问器

### level

#### Getter 签名

> **get** **level**(): [`Level`](../enumerations/Level.md)

定义于: [typings.ts:27](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L27)

##### 返回

[`Level`](../enumerations/Level.md)

#### Setter 签名

> **set** **level**(`l`): `void`

定义于: [typings.ts:26](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L26)

##### 参数

###### l

[`TLevel`](../type-aliases/TLevel.md) | [`Level`](../enumerations/Level.md)

##### 返回

`void`

## 方法

### addContext()

> **addContext**(`key`, `value`): `void`

定义于: [typings.ts:28](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L28)

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

定义于: [typings.ts:30](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L30)

#### 返回

`void`

***

### debug()

> **debug**(...`args`): `void`

定义于: [typings.ts:33](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L33)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### dispose()

> **dispose**(): `Promise`\<`any`[]\>

定义于: [typings.ts:31](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L31)

#### 返回

`Promise`\<`any`[]\>

***

### error()

> **error**(...`args`): `void`

定义于: [typings.ts:36](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L36)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### fatal()

> **fatal**(...`args`): `void`

定义于: [typings.ts:37](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L37)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### info()

> **info**(...`args`): `void`

定义于: [typings.ts:34](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L34)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### removeContext()

> **removeContext**(`key`): `void`

定义于: [typings.ts:29](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L29)

#### 参数

##### key

`string`

#### 返回

`void`

***

### trace()

> **trace**(...`args`): `void`

定义于: [typings.ts:32](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L32)

#### 参数

##### args

...`any`[]

#### 返回

`void`

***

### warn()

> **warn**(...`args`): `void`

定义于: [typings.ts:35](https://github.com/fengxinming/log-base/blob/a5fb852e6e988415aefb3bad08caae82eaa58e63/src/typings.ts#L35)

#### 参数

##### args

...`any`[]

#### 返回

`void`
