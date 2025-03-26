# 带上下文的API请求日志

## 在请求处理函数中添加用户ID

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
      layout: new PatternLayout('[%d{YYYY-MM-DD HH:mm:ss}] [%p] %c - %m %x{userId}'),
      maxSize: 1024 * 1024, // 1MB
      backups: 5
    })
  ]
});
```

获取 Logger `./main.ts`

```typescript
import logFactory from './factory';

app.get('/api/data', (req, res) => {
  const userId = req.user.id;
  logger.addContext('userId', userId);
  try {
    // 业务逻辑
    logger.debug('开始处理请求');
    res.send(data);
  } catch (err) {
    logger.error('请求处理失败', err);
  } finally {
    logger.removeContext('userId'); // 清理上下文
  }
});
```
