[**blf-file-appender**](index.md)

***

[blf-file-appender](index.md) / typings

# typings

## Type Aliases

### BaseAppenderOptions

> **BaseAppenderOptions** = `object` & `Partial`\<`RollingOptions`\>

Defined in: [typings.ts:8](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/typings.ts#L8)

Base appender options (日志记录器基础选项)

#### Type declaration

##### layout?

> `optional` **layout**: `ILayout`

***

### DateFileAppenderOptions

> **DateFileAppenderOptions** = [`BaseAppenderOptions`](#baseappenderoptions) & `Partial`\<`DateRollingOptions`\>

Defined in: [typings.ts:20](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/typings.ts#L20)

Date file appender options (日志记录器日期文件选项)

***

### FileAppenderOptions

> **FileAppenderOptions** = [`BaseAppenderOptions`](#baseappenderoptions)

Defined in: [typings.ts:15](https://github.com/fengxinming/log-base/blob/f2c7f48e718176bca14e93c254777a3cb459e638/packages/file-appender/src/typings.ts#L15)

File appender options (日志记录器文件选项)
