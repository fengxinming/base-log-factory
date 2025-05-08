import type { ILayout, Level, LogEvent } from 'base-log-factory';
import { basicLogPrefix, ConsoleAppender } from 'base-log-factory';
import pc from 'picocolors';

import { colors as defaultColors } from './colors';

export interface ColorfulAppenderOptions {
  layout?: ILayout;
  colors?: Record<Level, string>;
}

/**
 * Console appender (控制台输出)
 */
export class ColorfulAppender extends ConsoleAppender {
  name = 'colorful';
  colors: Record<Level, string>;
  /**
   * Constructor (构造函数)
   */
  constructor(opts: ColorfulAppenderOptions = {}) {
    super(opts.layout);
    this.colors = opts.colors || defaultColors;
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
