import { ConsoleAppender, LogFactory, PatternLayout } from 'base-log-factory';
import { ColorfulAppender } from 'blf-colorful-appender';
import { DebugAppender } from 'blf-debug-appender';

const patternLayout = new PatternLayout('[%d{HH:mm:ss.SSSZ}] %p %c - %m');
const factory = new LogFactory({
  appenders: [
    new ConsoleAppender(patternLayout),
    new ColorfulAppender(patternLayout),
    new DebugAppender(patternLayout)
  ]
});

const appLogger = factory.getLogger('app');
appLogger.info('Hello', 'world!');

function work() {
  appLogger.info('doing lots of uninteresting work');
  setTimeout(work, Math.random() * 1000);
}

work();

// process.exit(0);
