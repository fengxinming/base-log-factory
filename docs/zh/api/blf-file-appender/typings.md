[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / typings

# typings

## 类型别名

### BaseAppenderOptions

> **BaseAppenderOptions** = `object` & `Partial`\<`RollingOptions`\>

定义于: [typings.ts:8](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/typings.ts#L8)

Base appender options (日志记录器基础选项)

#### 类型声明

##### layout?

> `optional` **layout**: `ILayout`

***

### DateFileAppenderOptions

> **DateFileAppenderOptions** = [`BaseAppenderOptions`](#baseappenderoptions) & `Partial`\<`DateRollingOptions`\>

定义于: [typings.ts:20](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/typings.ts#L20)

Date file appender options (日志记录器日期文件选项)

***

### FileAppenderOptions

> **FileAppenderOptions** = [`BaseAppenderOptions`](#baseappenderoptions)

定义于: [typings.ts:15](https://github.com/fengxinming/log-base/blob/c30fa7fc98ee6693b6730b597d133b63d7a6f155/packages/file-appender/src/typings.ts#L15)

File appender options (日志记录器文件选项)
