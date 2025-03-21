# base-log-factory

[![npm package](https://nodei.co/npm/base-log-factory.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-log-factory)

[![NPM version](https://img.shields.io/npm/v/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![NPM Downloads](https://img.shields.io/npm/dm/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-007ACC.svg)](https://www.typescriptlang.org/)

> 🚀 一个灵活简单的 JS 日志库，通过配置不同的 Appender 可以在不同的环境记录或收集日志内容。适用于浏览器和NodeJS环境。

---

## 🌟 核心特性

- **多级别日志**  
  支持 `TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF` 七级日志分级，精准控制日志输出粒度。
  
- **灵活的Appender配置**  
  内置 `ConsoleAppender`（控制台输出）、`FileAppender`（按大小滚动）和 `DateFileAppender`（按日期滚动），支持自定义Appender扩展。

- **丰富的日志格式化**  
  提供 `BasicLayout`（基础格式）和 `PatternLayout`（类似Log4j的灵活格式），支持自定义占位符。

- **上下文管理**  
  支持MDC（Mapped Diagnostic Context），方便在日志中携带请求ID、用户信息等上下文数据。

---

## 🛠 核心概念详解

### 1. 日志级别（支持彩色标识）
| 级别   | 值  | 说明         | 建议使用场景                |
|--------|-----|------------|-------------------------|
| TRACE  | 6   | 跟踪级详细日志  | 调试代码逻辑时的详细流程记录      |
| DEBUG  | 5   | 调试信息      | 开发阶段的调试输出            |
| **INFO** | 4   | 常规运行信息   | 业务流程关键节点的正常状态记录  |
| **WARN** | 3   | 警告事件      | 非致命但需关注的问题（如资源不足） |
| **ERROR** | 2   | 错误事件      | 异常或失败操作的记录          |
| **FATAL** | 1   | 严重错误事件   | 导致系统崩溃的致命错误         |
| OFF    | 0   | 关闭所有日志   | 禁用日志输出                |

### 2. Appender类型对比
| 类型               | 特点                          | 典型场景               |
|--------------------|-----------------------------|----------------------|
| `ConsoleAppender`  | 实时输出到控制台               | 开发调试阶段          |
| `FileAppender`     | 按文件大小滚动（如app.log.1） | 生产环境日志持久化    |
| `DateFileAppender` | 按日期滚动（如app.2023-08-01.log） | 需要按天归档日志时     |
