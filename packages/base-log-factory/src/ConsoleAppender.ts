/* eslint-disable no-console */
import { format } from 'date-manip';

import { IAppender, ILayout, LogEvent } from './types';

/**
 * Console appender (控制台输出)
 */
export default class ConsoleAppender implements IAppender {
  name = 'console';
  dateFormat = 'HH:mm:ss.SSS';

  /**
   * Constructor (构造函数)
   * @param layout Layout (布局)
   */
  constructor(public layout?: ILayout) {
  }

  /**
   * Write log (写入日志)
   * @param event Log event (日志事件)
   */
  write(event: LogEvent): void {
    const { layout } = this;
    if (layout) {
      console.log(layout.format(event));
      return;
    }

    const args = [
      format(event.timestamp, this.dateFormat),
      `[${event.levelName}]`,
      event.loggerName,
      '-'
    ].concat(event.message);
    console.log(...args);
  }

  /**
   * Close appender (关闭输出)
   */
  close(): Promise<void> {
    return Promise.resolve();
  }
}
