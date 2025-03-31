import type { ILogger, LogEvent } from 'base-log-factory';
import { ColorfulAppender } from 'blf-colorful-appender';
import { format } from 'date-manip';
import createDebug from 'debug';

/**
 * Console appender (控制台输出)
 */
export default class DebugAppender extends ColorfulAppender {
  name = 'debug';
  dateFormat = 'HH:mm:ss';
  debug!: createDebug.Debugger;

  setup({ name }: ILogger): void {
    const debug = createDebug(name);
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
      // eslint-disable-next-line no-console
      debug(this.color(layout.format(event), event));
    }
    else {
      debug(
        this.color(`[${format(event.timestamp, this.dateFormat)}] [${event.levelName}] -`, event),
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
