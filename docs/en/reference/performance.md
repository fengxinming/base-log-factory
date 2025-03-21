# Performance Optimization Suggestions

## Asynchronous Writing

Uses asynchronous mode by default. Control synchronous write frequency through `syncThreshold`:

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
    new FileAppender('app.log', {
      syncThreshold: 10 * 1024, // Force synchronization every 10KB of logs
      syncInterval: 5000 // Force synchronization every 5 seconds
    })
  ]
});
```

## File Lock Mechanism

Enable `useLock: true` in clustered environments to avoid file write conflicts:

```typescript
import { 
  Level,
  LogFactory, 
  ConsoleAppender
} from 'base-log-factory';
const logFactory = new LogFactory({
  level: Level.INFO,  // Set global log level
  appenders: [
    new FileAppender('app.log', { useLock: true })
  ]
});
```