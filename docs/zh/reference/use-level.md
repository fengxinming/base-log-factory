# 带上下文的API请求日志

## 在请求处理函数中添加用户ID

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
```

获取 Logger `./main1.ts`

```typescript
import { Level } from 'base-log-factory';
import logFactory from './factory';

const logger = logFactory.getLogger('app');
// 动态调整单个日志对象的日志级别
logger.level = Level.DEBUG; // 设置为DEBUG级别

logger.debug('调试信息现在会显示'); // 输出生效
```

获取 Logger `./main2.ts`

```typescript
import { Level } from 'base-log-factory';
import logFactory from './factory';

const logger = logFactory.getLogger('app2');
// 动态调整全局日志级别
logFactory.level = Level.ERROR; // 设置为ERROR级别

logger.debug('调试信息现在不会显示'); // 输出不生效
```