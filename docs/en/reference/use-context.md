# API Request Logging with Context

## Adding User ID in Request Handling Functions

Configure LogFactory `./factory.ts`
```typescript
import { 
  Level,
  LogFactory, 
  ConsoleAppender,
  PatternLayout
} from 'base-log-factory';
import { FileAppender } from 'blf-file-appender';

const logFactory = new LogFactory({
  level: Level.DEBUG,  // Set global log level
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

Get Logger `./main.ts`
```typescript
import logFactory from './factory';

app.get('/api/data', (req, res) => {
  const userId = req.user.id;
  logger.addContext('userId', userId);
  try {
    // Business logic
    logger.debug('Starting request processing');
    res.send(data);
  } catch (err) {
    logger.error('Request processing failed', err);
  } finally {
    logger.removeContext('userId'); // Clean up context
  }
});
```