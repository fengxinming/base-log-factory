# Resource Cleanup Before Process Termination

## Ensuring All Logs Are Written Before Node.js Process Exits

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

process.on('exit', async () => {
  await logFactory.dispose(); // Wait for all Appender resources to be released
});

// Cleanup on uncaught exceptions
process.on('uncaughtException', async (err) => {
  logger.error('Process exception', err);
  await logFactory.dispose();
  process.exit(1);
});
```