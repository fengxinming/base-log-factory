import { ConsoleAppender, LogFactory, PatternLayout } from 'base-log-factory';
import { ColorfulAppender } from 'blf-colorful-appender';
import { DebugAppender } from 'blf-debug-appender';

const patternLayout = new PatternLayout('[%d{HH:mm:ss.SSSZ}] %p %c - %m');
const console1 = new ConsoleAppender(patternLayout);
const colorful =  new ColorfulAppender({ layout: patternLayout });
const debug =    new DebugAppender();
const factory = new LogFactory({
  appenders: [
    console1,
    colorful,
    debug
  ]
});

const appLogger = factory.getLogger('app');
appLogger.info('Hello', 'world!', 1, null, undefined, true, Symbol(123), { foo: 'bar' });
appLogger.info(new Error('I am Error'));
appLogger.info({ a: { b: { c: { d: { f: 1 } } } } });
function work() {
  appLogger.name = `app:${Math.random().toString(36).slice(2)}`;
  appLogger.info('doing lots of uninteresting work');
  setTimeout(work, Math.random() * 1000);
}

work();

// process.exit(0);
