import basicLogPrefix from 'src/_basicLogPrefix';
import { IAppender, ILayout, ILogEvent } from '../typings';

/**
 * 控制台 Appender
 */
export default class ConsoleAppender implements IAppender {
  constructor(private readonly layout?: ILayout) {}

  write(event: ILogEvent): void {
    const { layout } = this;
    if (layout) {
      // eslint-disable-next-line no-console
      console.log(layout.format(event));
    }
    else {
      // eslint-disable-next-line no-console
      console.log(basicLogPrefix(event), ...event.message);
    }
  }

  close(): Promise<void> {
    return Promise.resolve();
  }
}
