import { format } from 'date-manip';
import createDebug from 'debug';
import pc from 'picocolors';

import defaultColors from '../colors';
import Level from '../Level';
import { IAppender, ILayout, ILogEvent, ILogger } from '../typings';

/**
 * Console appender (控制台输出)
 */
export default class DebugAppender implements IAppender {
  name = 'debug';
  debug!: createDebug.Debugger;
  colors: Record<Level, string>;
  /**
   * Constructor (构造函数)
   * @param layout Layout (布局)
   */
  constructor(readonly layout?: ILayout, colors?: Record<Level, string>) {
    this.colors = colors || defaultColors;
  }

  setup({ name }: ILogger): void {
    const debug = createDebug(name);
    createDebug.enable(name);

    this.debug = debug;
  }

  /**
   * Write log (写入日志)
   * @param event Log event (日志事件)
   */
  write(event: ILogEvent): void {
    const { layout } = this;
    const formatter = pc[this.colors[event.level]];

    if (layout) {
      // eslint-disable-next-line no-console
      console.log(formatter(layout.format(event)));
    }
    else {
      this.debug(
        formatter(`[${format(event.timestamp, 'HH:mm:ssZ')}] [${event.levelName}] -`),
        ...event.message
      );
    }
  }

  /**
   * Close appender (关闭输出)
   */
  close(): Promise<void> {
    return Promise.resolve();
  }
}
