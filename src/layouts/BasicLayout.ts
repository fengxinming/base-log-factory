import basicLogPrefix from 'src/_internal/basicLogPrefix';
import { ILayout, ILogEvent } from '../typings';
import pad from '../_internal/pad';

export default class BasicLayout implements ILayout {
  static transform(
    message: any[],
    minWidth: number = 0,
    maxLength: number = 0,
    alignLeft: boolean = true
  ): string {
    return message.reduce((prev: string, curr, index) => {
      let msg: string;

      if (curr instanceof Error) {
        msg = curr.stack || curr.message;
      }
      else if (typeof curr === 'object') {
        msg = JSON.stringify(curr);
      }
      else {
        msg = String(curr);
      }

      if (maxLength > 0 && msg.length > maxLength) {
        msg = `${msg.substring(0, maxLength)}...`;
      }

      msg = pad(msg, minWidth, alignLeft);

      return index === 0 ? msg : `${prev} ${msg}`;
    }, '');
  }

  format(event: ILogEvent): string {
    return basicLogPrefix(event) + BasicLayout.transform(event.message);
  }
}
