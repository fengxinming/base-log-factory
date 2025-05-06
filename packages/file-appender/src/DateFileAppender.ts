import type { DateRollingOptions } from 'rolling-write-stream';
import { DateFileStream } from 'rolling-write-stream';

import type { BaseAppenderOptions } from './BaseFileAppender';
import { BaseFileAppender } from './BaseFileAppender';

/**
 * Date file appender options (日志记录器日期文件选项)
 */
export type DateFileAppenderOptions = BaseAppenderOptions & Partial<DateRollingOptions>;


/**
 * Date File Appender (日期文件记录器)
 */
export class DateFileAppender extends BaseFileAppender {
  name = 'dateFile';
  /**
   * Constructor (构造函数)
   * @param filePath File path (文件路径)
   * @param options Options (选项)
   */
  constructor(
    filePath: string,
    protected readonly options: DateFileAppenderOptions
  ) {
    super(filePath, options);
  }

  /**
   * Get stream (获取流)
   * @param filePath File path (文件路径)
   * @param options Options (选项)
   */
  protected getStream(filePath, options) {
    return new DateFileStream(filePath, options);
  }
}
