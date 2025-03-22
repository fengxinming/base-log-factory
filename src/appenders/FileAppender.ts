import { FileStream } from 'rolling-write-stream';

import BaseFileAppender from './BaseFileAppender';

/**
 * File Appender (文件记录器)
 */
export default class FileAppender extends BaseFileAppender {
  name = 'file';
  /**
   * Get write stream (获取写入流)
   * @param filePath File path (文件路径)
   * @param options Write stream options (写入流选项)
   */
  protected getStream(filePath, options) {
    return new FileStream(filePath, options);
  }
}
