import { ILogger, LogEvent } from 'base-log-factory';
import { ColorfulAppender } from 'blf-colorful-appender';
import { format } from 'date-manip';
import createDebug from 'debug';

/**
 * Console appender (控制台输出)
 */
export default class DebugAppender extends ColorfulAppender {
  name = 'debug';
  debug!: createDebug.Debugger;

  setup({ name }: ILogger): void {
    const debug = createDebug(name);
    createDebug.enable(name);

    this.debug = debug;
  }

  /**
   * Write log (写入日志)
   * @param event Log event (日志事件)
   */
  write(event: LogEvent): void {
    const { layout } = this;

    if (layout) {
      // eslint-disable-next-line no-console
      this.debug(this.color(layout.format(event), event));
    }
    else {
      this.debug(
        this.color(`[${format(event.timestamp, 'HH:mm:ssZ')}] [${event.levelName}] -`, event),
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
