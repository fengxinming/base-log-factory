import basicLogPrefix from './basicLogPrefix';
import { IAppender, ILayout, ILogger, LogEvent } from './typings';

/**
 * Console appender (控制台输出)
 */
export default class ConsoleAppender implements IAppender {
  name = 'console';
  dateFormat = 'HH:mm:ss.SSSZ';

  /**
   * Constructor (构造函数)
   * @param layout Layout (布局)
   */
  constructor(public layout?: ILayout) {
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(logger: ILogger): void {

  }

  /**
   * Write log (写入日志)
   * @param event Log event (日志事件)
   */
  write(event: LogEvent): void {
    const { layout } = this;
    if (layout) {
      // eslint-disable-next-line no-console
      console.log(layout.format(event));
    }
    else {
      // eslint-disable-next-line no-console
      console.log(basicLogPrefix(event, this.dateFormat), ...event.message);
    }
  }

  /**
   * Close appender (关闭输出)
   */
  close(): Promise<void> {
    return Promise.resolve();
  }
}
