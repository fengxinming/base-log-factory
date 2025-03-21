import { DateFileStream } from 'rolling-write-stream';

import { DateFileAppenderOptions } from '../typings';
import BaseFileAppender from './BaseFileAppender';

/**
 * Date File Appender (日期文件记录器)
 */
export default class DateFileAppender extends BaseFileAppender {
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
