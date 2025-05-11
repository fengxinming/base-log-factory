import type { LogEvent } from 'base-log-factory';
import type { ColorfulAppenderOptions } from 'blf-colorful-appender';
import { ColorfulAppender } from 'blf-colorful-appender';
import { format } from 'date-manip';
import createDebug from 'debug';

export type DebugAppenderOptions = ColorfulAppenderOptions;

/**
 * Console appender (控制台输出)
 */
export class DebugAppender extends ColorfulAppender {
  name = 'debug';
  dateFormat = 'HH:mm:ss';
  debug!: createDebug.Debugger;

  /**
   * Constructor (构造函数)
   */
  constructor(opts: DebugAppenderOptions = {}) {
    super(opts);

    const debug = createDebug('unknown');
    debug.enabled = true;

    this.debug = debug;
  }

  /**
   * Write log (写入日志)
   * @param event Log event (日志事件)
   */
  write(event: LogEvent): void {
    const { layout, debug } = this;

    debug.namespace = event.loggerName;

    if (layout) {
      debug(this.color(layout.format(event), event));
    }
    else {
      const args = [
        format(event.timestamp, this.dateFormat),
        `[${event.levelName}]`,
        event.loggerName,
        '-'
      ];
      debug(this.color(args.join(' '), event), ...event.message);
    }
  }

  /**
   * Close appender (关闭输出)
   */
  close(): Promise<void> {
    return Promise.resolve();
  }
}
