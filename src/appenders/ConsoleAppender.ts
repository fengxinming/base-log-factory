import basicLogPrefix from '../basicLogPrefix';
import { IAppender, ILayout, ILogEvent } from '../typings';

/**
 * Console appender (控制台输出)
 */
export default class ConsoleAppender implements IAppender {
  /**
   * Constructor (构造函数)
   * @param layout Layout (布局)
   */
  constructor(readonly layout?: ILayout) {}

  /**
   * Write log (写入日志)
   * @param event Log event (日志事件)
   */
  write(event: ILogEvent): void {
    const { layout } = this;
    if (layout) {
      // eslint-disable-next-line no-console
      console.log(layout.format(event));
    }
    else {
      // eslint-disable-next-line no-console
      console.log(basicLogPrefix(event), ...event.message);
    }
  }

  /**
   * Close appender (关闭输出)
   */
  close(): Promise<void> {
    return Promise.resolve();
  }
}
