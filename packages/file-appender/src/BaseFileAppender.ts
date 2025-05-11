import { EOL } from 'node:os';
import { Writable } from 'node:stream';
import { inspect } from 'node:util';

import type { IAppender, ILayout, LogEvent, TConverter } from 'base-log-factory';
import { PatternLayout } from 'base-log-factory';
import type { RollingOptions } from 'rolling-write-stream';

/**
 * Base appender options (日志记录器基础选项)
 */
export type BaseAppenderOptions = {
  layout?: ILayout;
} & Partial<RollingOptions>;

function createConverter(specifier: string): TConverter | undefined {
  if (specifier === 'm') {
    return (event: LogEvent): string => {
      return event.message.map((msg) => {
        switch (typeof msg) {
          case 'object':
            return inspect(msg);
          case 'symbol':
            return msg.toString();
          default:
            return msg;
        }
      }).join(' ');
    };
  }
}

/**
 * Base file appender (文件日志基类)
 */
export abstract class BaseFileAppender implements IAppender {
  name = 'baseFile';
  stream: Writable;
  readonly layout: ILayout;

  /**
   * Constructor
   * @param filePath File path (文件路径)
   * @param options Options (选项)
   */
  constructor(
    protected readonly filePath: string,
    protected readonly options: BaseAppenderOptions = {}
  ) {
    this.layout = options.layout || new PatternLayout(
      '%d{YYYY-MM-DD HH:mm:ss.SSSZ} [%p] %c - %m',
      createConverter
    );
    this.stream = this.getStream(filePath, options);
  }

  /**
   * Write log event
   * @param logEvent Log event (日志事件)
   */
  write(logEvent: LogEvent) {
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
