# 🚀 快速开始

## 安装
```bash
npm install base-log-factory
```

## 基础用法

配置 LogFactory `./factory.ts`

```typescript
import { LogFactory, ConsoleAppender } from 'base-log-factory';

export default new LogFactory({
  appenders: [new ConsoleAppender()]
});
```

获取 Logger `./main.ts`

```typescript
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.info('hello world!');
```

### 3. 高级配置示例
```typescript
// 配置文件滚动、自定义格式和上下文
import { 
  LogFactory, 
  ConsoleAppender, 
  FileAppender, 
  DateFileAppender, 
  PatternLayout 
} from 'base-log-factory';

const logFactory = new LogFactory({
  level: 'DEBUG',  // 设置全局日志级别
  appenders: [
    new ConsoleAppender(),
    new FileAppender('./logs/app.log', {
      layout: new PatternLayout('[%d{YYYY-MM-DD HH:mm:ss}] [%p] %c - %m %x{userId}'),
      maxSize: 1024 * 1024, // 1MB
      backups: 5,
      compress: true // 启用GZIP压缩
    }),
    new DateFileAppender('./logs/app.daily.log', {
      pattern: 'YYYY-MM-DD',
      backups: 7 // 保留7天日志
    })
  ]
});
```