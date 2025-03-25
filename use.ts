import { ConsoleAppender, LogFactory } from './src';
import DebugAppender from './src/appenders/DebugAppender';

const factory = new LogFactory({
  appenders: [
    new DebugAppender(),
    new ConsoleAppender()
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
