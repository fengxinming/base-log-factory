# Configuring Multiple Appenders

## Console Output and File Rotation Configuration

Configure LogFactory `./factory.ts`
```typescript
import { 
  Level,
  LogFactory, 
  ConsoleAppender,
} from 'base-log-factory';
import PatternLayout from 'base-log-factory/dist/layouts/PatternLayout';
import FileAppender from 'base-log-factory/dist/appenders/FileAppender';

const logFactory = new LogFactory({
  level: Level.DEBUG,  // Set global log level
  appenders: [
    new ConsoleAppender(),
    new FileAppender('./logs/app.log', {
      layout: new PatternLayout('[%d{YYYY-MM-DDTHH:mm:ssZ}] [%p] %c - %m %x{userId}'),
      maxSize: 1024 * 1024, // 1MB
      backups: 5,
      compress: true // Enable GZIP compression
    })
  ]
});
```

Get Logger `./main.ts`
```typescript
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.info('hello world!');
```

## Console Output and Date-Based File Rotation Configuration

Configure LogFactory `./factory.ts`
```typescript
import { 
  Level,
  LogFactory, 
  ConsoleAppender, 
  PatternLayout 
} from 'base-log-factory';
import DateFileAppender from 'base-log-factory/dist/appenders/DateFileAppender';
import PatternLayout from 'base-log-factory/dist/layouts/PatternLayout';

const logFactory = new LogFactory({
  level: Level.DEBUG,  // Set global log level
  appenders: [
    new ConsoleAppender(),
    new DateFileAppender('./logs/app.daily.log', {
      pattern: 'YYYY-MM-DD',
      backups: 7 // Keep 7 days of logs
    })
  ]
});
```

Get Logger `./main.ts`
```typescript
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.info('hello world!');
```