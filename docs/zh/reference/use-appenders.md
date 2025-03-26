# 同时配置多个Appender

## 配置控制台输出和文件滚动

配置 LogFactory `./factory.ts`

```typescript
import { 
  Level,
  LogFactory, 
  ConsoleAppender,
} from 'base-log-factory';
import PatternLayout from 'base-log-factory/dist/layouts/PatternLayout';
import FileAppender from 'base-log-factory/dist/appenders/FileAppender';

const logFactory = new LogFactory({
  level: Level.DEBUG,  // 设置全局日志级别
  appenders: [
    new ConsoleAppender(),
    new FileAppender('./logs/app.log', {
      layout: new PatternLayout('[%d{YYYY-MM-DDTHH:mm:ssZ}] [%p] %c - %m %x{userId}'),
      maxSize: 1024 * 1024, // 1MB
      backups: 5,
      compress: true // 启用GZIP压缩
    })
  ]
});
```

获取 Logger `./main.ts`

```typescript
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.info('hello world!');
```

## 配置控制台输出和日期文件滚动

配置 LogFactory `./factory.ts`

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
  level: Level.DEBUG,  // 设置全局日志级别
  appenders: [
    new ConsoleAppender(),
    new DateFileAppender('./logs/app.daily.log', {
      pattern: 'YYYY-MM-DD',
      backups: 7 // 保留7天日志
    })
  ]
});
```

获取 Logger `./main.ts`

```typescript
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.info('hello world!');
```