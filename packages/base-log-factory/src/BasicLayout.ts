import basicLogPrefix from './basicLogPrefix';
import formatMessage from './formatMessage';
import { ILayout, LogEvent } from './typings';

/**
 * Basic layout for logging messages (基础的日志布局)
 */
export default class BasicLayout implements ILayout {
  /**
   * Format the log event (格式化日志事件)
   * @param event Log event (日志事件)
   */
  format(event: LogEvent): string {
    return `${basicLogPrefix(event)} ${formatMessage(event.message)}`;
  }
}
