import basicLogPrefix from 'src/_basicLogPrefix';
import { ILayout, ILogEvent } from '../typings';

export default class BasicLayout implements ILayout {
  static pad(str: string, width: number, alignLeft: boolean = true): string {
    const diff = width - str.length;

    if (diff <= 0) {
      return str;
    }

    const padding = ' '.repeat(diff);
    return alignLeft ? str + padding : padding + str;
  }

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

      msg = BasicLayout.pad(msg, minWidth, alignLeft);

      return index === 0 ? msg : `${prev} ${msg}`;
    }, '');
  }

  format(event: ILogEvent): string {
    return basicLogPrefix(event) + BasicLayout.transform(event.message);
  }
}
