# 🚀 Quick Start

## Installation
```bash
npm install base-log-factory
```

## Basic Usage

Configure LogFactory `./factory.ts`
```typescript
import { LogFactory, ConsoleAppender } from 'base-log-factory';

export default new LogFactory({
  appenders: [new ConsoleAppender()]
});
```

Get Logger `./main.ts`
```typescript
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.info('hello world!');
```

### Advanced Configuration Example
```typescript
// Configure file rotation, custom format, and context
import { 
  LogFactory, 
  ConsoleAppender, 
  FileAppender, 
  DateFileAppender, 
  PatternLayout 
} from 'base-log-factory';

const logFactory = new LogFactory({
  level: 'DEBUG',  // Set global log level
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