import { EOL } from 'node:os';
import { Writable } from 'node:stream';

import BasicLayout from '../layouts/BasicLayout';
import { BaseAppenderOptions, IAppender, ILayout, ILogEvent } from '../typings';

/**
 * Base file appender (文件日志基类)
 */
export default abstract class BaseFileAppender implements IAppender {
  name = 'baseFile';
  protected stream: Writable;
  private readonly layout: ILayout;

  /**
   * Constructor
   * @param filePath File path (文件路径)
   * @param options Options (选项)
   */
  constructor(
    protected readonly filePath: string,
    protected readonly options: BaseAppenderOptions
  ) {
    this.layout = options.layout || new BasicLayout();
    this.stream = this.getStream(filePath, options);
  }

  setup(): void {

  }

  /**
   * Write log event
   * @param logEvent Log event (日志事件)
   */
  write(logEvent: ILogEvent) {
    const formatted = this.layout.format(logEvent);
    this.stream.write(`${formatted}${EOL}`, (err) => {
      if (err) {
        console.error('Log write failed:', err);
      }
    });
  }

  /**
   * Close appender
   */
  async close() {
    this.stream.destroy();
  }

  /**
   * Get stream (获取流)
   * @param filePath File path (文件路径)
   * @param options Options (选项)
   */
  protected abstract getStream(filePath: string, options: BaseAppenderOptions): Writable;
}
