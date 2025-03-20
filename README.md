# base-log-factory

[![npm package](https://nodei.co/npm/base-log-factory.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/base-log-factory)

[![NPM version](https://img.shields.io/npm/v/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![NPM Downloads](https://img.shields.io/npm/dm/base-log-factory.svg?style=flat)](https://npmjs.org/package/base-log-factory)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-007ACC.svg)](https://www.typescriptlang.org/)

> 🚀 A flexible and efficient Node.js logging library supporting console output, file rolling, custom formats, and log levels.

## 📅 [中文](README_zh-CN.md) | English

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

- **High-Performance & Cluster Support**  
  Non-blocking I/O, backpressure control, and file locking for reliable logging in high-concurrency environments.

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

### 3. Advanced Configuration Example
```typescript
// Configure rolling files, custom formats, and context
import { 
  LogFactory, 
  ConsoleAppender, 
  FileAppender, 
  DateFileAppender, 
  PatternLayout 
} from 'base-log-factory';

const logFactory = new LogFactory({
  level: 'DEBUG', // Set global log level
  appenders: [
    new ConsoleAppender(),
    new FileAppender('./logs/app.log', {
      layout: new PatternLayout('[%d{YYYY-MM-DD HH:mm:ss}] [%p] %c - %m %x{userId}'),
      maxSize: 1024 * 1024, // 1MB
      backups: 5,
      compress: true // Enable GZIP compression
    }),
    new DateFileAppender('./logs/app.daily.log', {
      pattern: 'YYYY-MM-DD',
      backups: 7 // Keep 7 days of logs
    })
  ]
});
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

## 🎁 Usage Examples

### Example 1: Context-aware API Logging
```typescript
// Attach user ID to request logs
app.get('/api/data', (req, res) => {
  const userId = req.user.id;
  logger.addContext('userId', userId);
  try {
    // Business logic
    logger.debug('Processing request');
    res.send(data);
  } catch (err) {
    logger.error('Request failed', err);
  } finally {
    logger.removeContext('userId'); // Clean up context
  }
});
```

### Example 2: Custom Log Format
```typescript
// Define format with request ID and timestamp
const layout = new PatternLayout(
  '[%d{YYYY-MM-DD HH:mm:ss.SSS}] [%p] %c - %m %x{requestId} %t'
);

// Apply to FileAppender
new FileAppender('./logs/app.log', { layout });
```

### Example 3: Cluster Configuration
```typescript
// Use worker ID for log separation
const cluster = require('cluster');
const logFactory = new LogFactory({
  appenders: [
    new FileAppender(`./logs/app_${cluster.worker.id}.log`, {
      layout: new BasicLayout(),
      maxSize: 1024 * 1024 * 5 // 5MB
    })
  ]
});
```

### Example 4: Dynamic Level Adjustment
```typescript
// Change global log level at runtime
logFactory.level = 'DEBUG'; // Enable DEBUG level
logger.debug('Debug message now visible'); // Output enabled

// Restore default level
logFactory.level = Level.INFO;
```

### Example 5: Resource Cleanup on Process Exit
```typescript
// Ensure all logs are flushed before exit
process.on('exit', async () => {
  await logFactory.dispose(); // Wait for appenders to finalize
});

// Handle uncaught exceptions
process.on('uncaughtException', async (err) => {
  logger.error('Process crashed', err);
  await logFactory.dispose();
  process.exit(1);
});
```

---

## ⚡ Performance Recommendations

1. **Asynchronous Writes**  
   Use asynchronous mode with `syncThreshold` for controlled synchronization:
   ```typescript
   new FileAppender('app.log', {
     syncThreshold: 10 * 1024, // Sync every 10KB
     syncInterval: 5000 // Sync every 5 seconds
   });
   ```

2. **File Locking**  
   Enable `useLock: true` in cluster environments:
   ```typescript
   new FileAppender('app.log', { useLock: true });
   ```

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
