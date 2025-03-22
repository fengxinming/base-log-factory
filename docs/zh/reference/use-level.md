# 动态修改日志级别

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

## 动态调整单个日志对象的日志级别

获取 Logger `./main1.ts`

```typescript
import { Level } from 'base-log-factory';
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.level = Level.DEBUG; // 设置为DEBUG级别

logger.debug('调试信息现在会显示'); // 输出生效
```

## 动态调整全局日志级别

获取 Logger `./main2.ts`

```typescript
import { Level } from 'base-log-factory';
import logFactory from './factory';

const logger = logFactory.getLogger('app2');
factory.updateLevel(Level.ERROR); // 设置为ERROR级别

logger.debug('调试信息现在不会显示'); // 输出不生效
```