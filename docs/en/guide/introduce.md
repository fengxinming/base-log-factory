# base-log-factory

[![npm package](https://nodei.co/npm/base-log-factory.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-log-factory)

[![NPM version](https://img.shields.io/npm/v/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![NPM Downloads](https://img.shields.io/npm/dm/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-007ACC.svg)](https://www.typescriptlang.org/)

> 🚀 A flexible and simple JS logging library that allows logging or collecting logs in different environments by configuring various Appenders. Suitable for browser, NodeJS and other environments.

---

## 🌟 Core Features

- **Multi-level Logging**  
  Supports `TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF` seven-level logging granularity for precise control over log output.

- **Flexible Appender Configuration**  
  Built-in `ConsoleAppender` (console output), `FileAppender` (size-based rotation), and `DateFileAppender` (date-based rotation). Supports custom Appender extensions.

- **Rich Log Formatting**  
  Provides `BasicLayout` (basic format) and `PatternLayout` (Log4j-like flexible format). Supports custom placeholders.

- **Context Management**  
  Supports MDC (Mapped Diagnostic Context) to carry context data like request IDs and user information in logs.

---

## 🛠 Core Concepts Explained

### 1. Logging Levels (with Color Coding)
| Level   | Value | Description              | Recommended Use Cases                  |
|---------|-------|--------------------------|---------------------------------------|
| TRACE   | 6     | Trace-level detailed logs | Debugging code logic with detailed flow tracking |
| DEBUG   | 5     | Debug information         | Debugging outputs during development  |
| **INFO** | 4     | Routine operational info | Critical node records in normal workflow |
| **WARN** | 3     | Warning events            | Non-fatal but notable issues (e.g., resource shortages) |
| **ERROR** | 2     | Error events              | Recording failed operations or exceptions |
| **FATAL** | 1     | Critical failure events   | System-critical errors causing crashes |
| OFF     | 0     | Disable all logging       | Disable logging entirely             |

### 2. Appender Type Comparison
| Type               | Features                          | Typical Use Cases               |
|--------------------|-----------------------------------|---------------------------------|
| `ConsoleAppender`  | Real-time output to console       | Development debugging phase     |
| `FileAppender`     | Size-based rotation (e.g., app.log.1) | Production environment logging persistence |
| `DateFileAppender` | Date-based rotation (e.g., app.2023-08-01.log) | Archiving logs by date requirements |
