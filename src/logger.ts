import Level from './Level';
import { IAppender, ILogEvent, ILogger, ILogOptions, TLevel } from './typings';

/**
 * 日志记录器
 */
export default class Logger implements ILogger {
  protected readonly appenders: IAppender[] = [];
  protected context: Record<string, any> = {};
  protected _level: Level = Level.INFO;
  constructor(
    readonly name: string,
    { level, appenders = [] }: ILogOptions = {},
  ) {
    if (level) {
      this.level = Level.INFO;
    }
    if (appenders) {
      this.appenders = [...appenders];
    }
  }
  get level(): Level {
    return this._level;
  }

  set level(level: Level | TLevel) {
    if (typeof level === 'string') {
      level = Level[level.toUpperCase()];
      if (level == null) {
        level = Level.INFO;
      }
    }
    this._level = level as Level;
  }

  addContext(key, value) {
    this.context[key] = value;
  }

  removeContext(key) {
    delete this.context[key];
  }

  clearContext() {
    this.context = {};
  }

  dispose() {
    return Promise.allSettled(this.appenders.map((appender) => {
      return appender.close();
    }));
  }

  trace(...args: any[]): void {
    this.log(Level.TRACE, args);
  }

  debug(...args: any[]): void {
    this.log(Level.DEBUG, args);
  }

  info(...args: any[]): void {
    this.log(Level.INFO, args);
  }

  warn(...args: any[]): void {
    this.log(Level.WARN, args);
  }

  error(...args: any[]): void {
    this.log(Level.ERROR, args);
  }

  fatal(...args: any[]): void {
    this.log(Level.FATAL, args);
  }

  protected createEvent(level: Level, message: any[]): ILogEvent {
    return {
      level,
      levelName: Level[level] as TLevel,
      message,
      timestamp: new Date(),
      loggerName: this.name,
      context: this.context
    };
  }

  protected log(level: Level, message: any[]): void {
    if (level > this._level) {
      return;
    }

    const event: ILogEvent = this.createEvent(level, message);

    for (const appender of this.appenders) {
      try {
        appender.write(event);
      }
      catch (err: any) {
        console.error('Appender error:', err);
      }
    }
  }
}
