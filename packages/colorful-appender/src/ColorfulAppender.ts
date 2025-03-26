import { basicLogPrefix, ConsoleAppender, ILayout, LogEvent, LogLevel } from 'base-log-factory';
import pc from 'picocolors';

import defaultColors from './colors';

/**
 * Console appender (控制台输出)
 */
export default class ColorfulAppender extends ConsoleAppender {
  name = 'colorful';
  colors: Record<LogLevel, string>;
  dateFormat = 'HH:mm:ss.SSSZ';
  /**
   * Constructor (构造函数)
   * @param layout Layout (布局)
   */
  constructor(layout?: ILayout, colors?: Record<LogLevel, string>) {
    super(layout);
    this.colors = colors || defaultColors;
  }

  /**
   * Write log (写入日志)
   * @param event Log event (日志事件)
   */
  write(event: LogEvent): void {
    const { layout } = this;
    if (layout) {
      // eslint-disable-next-line no-console
      console.log(this.color(layout.format(event), event));
    }
    else {
      // eslint-disable-next-line no-console
      console.log(this.color(basicLogPrefix(event, this.dateFormat), event), ...event.message);
    }
  }

  protected color(str: string, event: LogEvent): string {
    return pc[this.colors[event.level]](str);
  }
}
