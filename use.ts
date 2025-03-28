import { ConsoleAppender, LogFactory, PatternLayout } from 'base-log-factory';
import { ColorfulAppender } from 'blf-colorful-appender';
import { DebugAppender } from 'blf-debug-appender';

const patternLayout = new PatternLayout('[%d{HH:mm:ss.SSSZ}] %p %c - %m');
const console1 = new ConsoleAppender(patternLayout);
const colorful =  new ColorfulAppender(patternLayout);
const debug =    new DebugAppender();
const factory = new LogFactory({
  appenders: [
    console1,
    colorful,
    debug
  ]
});

const appLogger = factory.getLogger('app');
appLogger.info('Hello', 'world!', 1, null, undefined, true, Symbol(123), { foo: 'bar' }, new Error('I am Error'));

debug.debug.namespace = 'app:debug';
function work() {
  appLogger.info('doing lots of uninteresting work');
  setTimeout(work, Math.random() * 1000);
}

work();

// process.exit(0);
