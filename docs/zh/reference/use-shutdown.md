# 进程结束前的资源清理

## 在Node.js进程退出前确保所有日志写入完成

配置 LogFactory `./factory.ts`

```typescript
import { 
  Level,
  LogFactory, 
  ConsoleAppender
} from 'base-log-factory';
const logFactory = new LogFactory({
  level: Level.INFO,  // 设置全局日志级别
  appenders: [
    new ConsoleAppender()
  ]
});

process.on('exit', async () => {
  await logFactory.dispose(); // 等待所有Appender资源释放
});

// 处理未捕获异常时的清理
process.on('uncaughtException', async (err) => {
  logger.error('进程异常', err);
  await logFactory.dispose();
  process.exit(1);
});
```