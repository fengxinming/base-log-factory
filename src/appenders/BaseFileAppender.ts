import { EOL } from 'node:os';
import { BaseAppenderOptions, IAppender, ILogEvent } from '../typings';
import { Writable } from 'node:stream';
import BasicLayout from '../layouts/BasicLayout';

// 数量滚动实现
export default abstract class BaseFileAppender implements IAppender {
  protected writeQueue: Promise<void> = Promise.resolve();
  protected stream: Writable;

  constructor(
    protected readonly filePath: string,
    protected readonly options: BaseAppenderOptions
  ) {
    options.layout = options.layout || new BasicLayout();
    this.stream = this.getStream(filePath, options);
  }

  write(logEvent: ILogEvent) {
    const formatted = this.options.layout!.format(logEvent);
    this.stream.write(`${formatted}${EOL}`, (err) => {
      if (err) {
        console.error('Log write failed:', err);
      }
    });
  }

  async close() {
    await this.writeQueue;
    return new Promise<void>((resolve, reject) => {
      this.stream.end((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }

  protected abstract getStream(filePath: string, options: BaseAppenderOptions): Writable;
}
