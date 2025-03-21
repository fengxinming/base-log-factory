# 性能优化建议

## 异步写入

默认使用异步模式，通过 `syncThreshold` 控制同步写入频率：

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
    new FileAppender('app.log', {
      syncThreshold: 10 * 1024, // 每10K日志强制同步
      syncInterval: 5000 // 每5秒强制同步
    })
  ]
});
```

## 文件锁机制

在集群环境中启用 `useLock: true` 避免文件写入冲突：

```typescript
import { 
  Level,
  LogFactory, 
  ConsoleAppender
} from 'base-log-factory';
const logFactory = new LogFactory({
  level: Level.INFO,  // 设置全局日志级别
  appenders: [
    new FileAppender('app.log', { useLock: true })
  ]
});
```
