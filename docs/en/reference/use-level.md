# Dynamic Logging Level Adjustment

## Adjusting Logging Levels in Request Handling Functions

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

Get Logger `./main1.ts`
```typescript
import { Level } from 'base-log-factory';
import logFactory from './factory';

const logger = logFactory.getLogger('app');
// Dynamically adjust the logging level of a single logger instance
logger.level = Level.DEBUG; // Set to DEBUG level

logger.debug('Debug messages will now be displayed'); // Logging enabled
```

Get Logger `./main2.ts`
```typescript
import { Level } from 'base-log-factory';
import logFactory from './factory';

const logger = logFactory.getLogger('app2');
// Dynamically adjust global logging level
logFactory.level = Level.ERROR; // Set to ERROR level

logger.debug('Debug messages will not be displayed'); // Logging disabled
```