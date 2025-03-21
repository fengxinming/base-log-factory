import transformMessage from 'src/_internal/transformMessage';

import basicLogPrefix from '../_internal/basicLogPrefix';
import { ILayout, ILogEvent } from '../typings';

function returnValue(value: string): string {
  return value;
}

/**
 * Basic layout for logging messages (基础的日志布局)
 */
export default class BasicLayout implements ILayout {

  /**
   * Transform the message (转换消息)
   * @param message Message (消息)
   */
  static transform(message: any[]) {
    return transformMessage(message, returnValue);
  }

  /**
   * Format the log event (格式化日志事件)
   * @param event Log event (日志事件)
   */
  format(event: ILogEvent): string {
    return `${basicLogPrefix(event)} ${BasicLayout.transform(event.message)}`;
  }
}
