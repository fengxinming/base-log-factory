# base-log-factory

[![npm package](https://nodei.co/npm/base-log-factory.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-log-factory)

[![NPM version](https://img.shields.io/npm/v/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![NPM Downloads](https://img.shields.io/npm/dm/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-007ACC.svg)](https://www.typescriptlang.org/)

> A flexible and efficient Node.js logging library supporting console output, file rolling records, custom formats, and log levels.

## [中文](README_zh-CN.md) | English

## Features

- **Multi-level logging**: Supports TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF seven levels
- **Multiple Appenders**: Built-in console, file rolling (by size/date) appenders
- **Customizable layouts**: Basic layout and pattern layout (similar to Log4j format)
- **Context management**: Supports Mapped Diagnostic Context (MDC)
- **High-performance async**: Non-blocking I/O with backpressure control
- **Cluster support**: Built-in process ID and cluster sequence recording

## Installation

```bash
npm install base-log-factory
```

## Quick Start

### Basic Usage

`factory.ts`:
```typescript
import { LogFactory, ConsoleAppender } from 'base-log-factory';

export default new LogFactory();
```

`main.ts`:
```typescript
import logFactory from './factory';

const logger = logFactory.getLogger('app');

logger.info('Server started on port 3000');
```

### Configuration Example
```typescript
import { LogFactory, ConsoleAppender, FileAppender, BasicLayout } from 'base-log-factory';

const logFactory = new LogFactory({
  level: 'DEBUG',
  appenders: [
    new ConsoleAppender(),
    new FileAppender('./logs/app.log', {
      layout: new BasicLayout(),
      maxSize: 1024 * 1024, // 1MB
      backups: 5
    })
  ]
});
```

## Core Concepts

### Log Levels
| Level   | Value | Description               |
|---------|-------|---------------------------|
| TRACE   | 6     | Detailed tracking logs    |
| DEBUG   | 5     | Debugging information     |
| INFO    | 4     | Normal operational info  |
| WARN    | 3     | Warning events            |
| ERROR   | 2     | Error events              |
| FATAL   | 1     | Critical errors           |
| OFF     | 0     | Disable all logging       |

### Appenders
| Type               | Description                          |
|--------------------|--------------------------------------|
| `ConsoleAppender`  | Output to console                    |
| `FileAppender`     | Roll by size (e.g., app.log.1)       |
| `DateFileAppender` | Roll by date (e.g., app.2023-08-01.log) |

### Layouts
```typescript
// Custom format with PatternLayout
new PatternLayout('[%d{YYYY-MM-DD HH:mm:ssZ}] %p %c - %m %x{user}')
```

Format specifiers:
- `%d`: Date/time (with optional format)
- `%p`: Log level
- `%c`: Logger name
- `%m`: Log message
- `%x`: Context variables
- `%t`: Thread information

## Advanced Features

### Context Management
```typescript
logger.addContext('user', '12345');
logger.info('Processing user:'); // Automatically includes context
```

### File Rolling Configuration
```typescript
// Size-based rolling (keep 5 backups)
new FileAppender('./logs/app.log', {
  maxSize: 1024 * 1024, // 1MB
  backups: 5,
  compress: true // Enable GZIP compression
});

// Date-based rolling (daily files)
new DateFileAppender('./logs/app.log', {
  pattern: 'YYYY-MM-DD',
  backups: 7 // Keep 7 days of logs
});
```

### Custom Appender
```typescript
class CustomAppender implements IAppender {
  write(event: ILogEvent) {
    // Implement custom logic
  }
  close() { /* Cleanup resources */ }
}
```

## Performance Optimization

- **Synchronization strategy**: Control fsync frequency with `syncThreshold` and `syncInterval`
- **File locking**: Enable `useLock: true` for cluster write safety
- **Backpressure handling**: Automatic stream write pressure management to prevent memory overflow

## Contribution Guide

Contributions are welcome! Please ensure:
1. Pass ESLint checks
2. Include test cases
3. Update relevant documentation

## License

[MIT License](LICENSE)