# base-log-factory

[![npm package](https://nodei.co/npm/base-log-factory.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-log-factory)

[![NPM version](https://img.shields.io/npm/v/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![NPM Downloads](https://img.shields.io/npm/dm/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-007ACC.svg)](https://www.typescriptlang.org/)

> 🚀 A flexible and efficient Node.js logging library supporting console output, file rolling, custom formats, and log levels.

---

## 🌟 Core Features

- **Multi-level logging**  
  Supports `TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF` with precise control over log granularity.

- **Flexible Appender Configuration**  
  Built-in `ConsoleAppender`, `FileAppender` (size-based rolling), `DateFileAppender` (date-based rolling), and custom Appender extensions.

- **Rich Formatting Options**  
  Provides `BasicLayout` and `PatternLayout` (similar to Log4j) with customizable placeholders.

- **Context Management**  
  Supports Mapped Diagnostic Context (MDC) for attaching request IDs, user information, etc.

---

## 📅 Documentation

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/base-log-factory/)

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install base-log-factory
```

### 2. Basic Usage
```typescript
// factory.ts
import { LogFactory, ConsoleAppender } from 'base-log-factory';

export default new LogFactory({
  appenders: [new ConsoleAppender()]
});

// main.ts
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.info('Server started successfully');
```

---

## 🛠 Core Concepts

### 1. Log Levels (with color coding)
| Level   | Value | Description               | Recommended Use Cases               |
|---------|-------|---------------------------|-------------------------------------|
| TRACE   | 6     | Detailed tracking logs     | Debugging code flow                 |
| DEBUG   | 5     | Debugging information      | Development-stage debugging         |
| **INFO** | 4     | Operational information    | Key business process milestones     |
| **WARN** | 3     | Non-critical issues       | Resource warnings (e.g., low memory)|
| **ERROR** | 2    | Error events               | Failed operations                  |
| **FATAL** | 1    | Critical system failures  | System crashes                     |
| OFF     | 0     | Disable all logging        | Disable logging                    |

### 2. Appender Comparison
| Type               | Features                          | Use Cases                  |
|--------------------|-----------------------------------|---------------------------|
| `ConsoleAppender`  | Realtime console output           | Development debugging     |
| `FileAppender`     | Size-based rolling (e.g., app.log.1)| Production logging        |
| `DateFileAppender` | Date-based rolling (e.g., app.2023-08-01.log)| Daily log archiving    |

---

## 📝 Contribution Guide

1. **Development Setup**  
   ```bash
   npm install
   ```

2. **Testing**  
   ```bash
   npm test # Run unit tests
   ```

3. **Before Submitting PRs**  
   - Ensure ESLint is configured (VSCode plugin recommended)
   - Add test cases for new features
   - Update documentation

---

## 📄 License

[MIT License](LICENSE)
