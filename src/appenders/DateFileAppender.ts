import { DateFileStream } from 'rolling-write-stream';
import BaseFileAppender from './BaseFileAppender';
import { DateFileAppenderOptions } from '../typings';

// 时间滚动实现
export class DateFileAppender extends BaseFileAppender {
  constructor(
    filePath: string,
    protected readonly options: DateFileAppenderOptions
  ) {
    super(filePath, options);
  }

  protected getStream(filePath, options) {
    return new DateFileStream(filePath, options);
  }
}
