import { FileStream } from 'rolling-write-stream';
import BaseFileAppender from './BaseFileAppender';

// 数量滚动实现
export default class FileAppender extends BaseFileAppender {
  protected getStream(filePath, options) {
    return new FileStream(filePath, options);
  }
}
