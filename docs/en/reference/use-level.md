# Dynamically Modify Log Level

Configure LogFactory `./factory.ts`

```typescript
import { 
  Level,
  LogFactory, 
  ConsoleAppender
} from 'base-log-factory';
const logFactory = new LogFactory({
  level: Level.INFO,  // Set global log level
  appenders: [
    new ConsoleAppender()
  ]
});
```

## Dynamically Adjust Log Level for Individual Logger

Get Logger `./main1.ts`

```typescript
import { Level } from 'base-log-factory';
import logFactory from './factory';

const logger = logFactory.getLogger('app');
logger.level = Level.DEBUG; // Set to DEBUG level

logger.debug('Debug information will now be displayed'); // Output takes effect
```

## Dynamically Adjust Global Log Level

Get Logger `./main2.ts`

```typescript
import { Level } from 'base-log-factory';
import logFactory from './factory';

const logger = logFactory.getLogger('app2');
logFactory.level = Level.ERROR; // Set to ERROR level

logger.debug('Debug information will not be displayed'); // Output does not take effect
```