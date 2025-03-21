import Level from './Level';
import { IAppender, ILogEvent, ILogger, ILogOptions, TLevel } from './typings';

/**
 * Logger instance (日志实例)
 */
export default class Logger implements ILogger {
  protected readonly appenders: IAppender[] = [];
  protected context: Record<string, any> = {};
  protected _level: Level = Level.INFO;

  /**
   * Create a logger instance (创建日志实例)
   * @param name Logger name (日志名称)
   * @param options Logging options (日志选项)
   */
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

  /**
   * Log level (日志级别)
   */
  get level(): Level {
    return this._level;
  }

  /**
   * Set log level (设置日志级别)
   * @param level Log level (日志级别)
   */
  set level(level: Level | TLevel) {
    this._level = Logger.normalizeLevel(level);
  }

  /**
   * Normalize log level (归一化日志级别)
   * @param level Log level (日志级别)
   * @returns Normalized log level (归一化后的日志级别)
   */
  static normalizeLevel(level: Level | TLevel): Level {
    if (typeof level === 'string') {
      level = Level[level.toUpperCase()];
      if (level == null) {
        level = Level.INFO;
      }
    }
    return level as Level;
  }

  /**
   * Add context (添加上下文)
   * @param key Context key (上下文键)
   * @param value Context value (上下文值)
   */
  addContext(key, value) {
    this.context[key] = value;
  }

  /**
   * Remove context (移除上下文)
   * @param key Context key (上下文键)
   */
  removeContext(key) {
    delete this.context[key];
  }

  /**
   * Clear context (清除上下文)
   */
  clearContext() {
    this.context = {};
  }

  /**
   * Dispose all appenders (关闭所有appenders)
   */
  dispose() {
    return Promise.allSettled(this.appenders.map((appender) => {
      return appender.close();
    }));
  }

  /**
   * Log a message of level TRACE (记录TRACE级别的日志)
   * @param args Message arguments (消息参数)
   */
  trace(...args: any[]): void {
    this.log(Level.TRACE, args);
  }

  /**
   * Log a message of level DEBUG (记录DEBUG级别的日志)
   * @param args Message arguments (消息参数)
   */
  debug(...args: any[]): void {
    this.log(Level.DEBUG, args);
  }

  /**
   * Log a message of level INFO (记录INFO级别的日志)
   * @param args Message arguments (消息参数)
   */
  info(...args: any[]): void {
    this.log(Level.INFO, args);
  }

  /**
   * Log a message of level WARN (记录WARN级别的日志)
   * @param args Message arguments (消息参数)
   */
  warn(...args: any[]): void {
    this.log(Level.WARN, args);
  }

  /**
   * Log a message of level ERROR (记录ERROR级别的日志)
   * @param args Message arguments (消息参数)
   */
  error(...args: any[]): void {
    this.log(Level.ERROR, args);
  }

  /**
   * Log a message of level FATAL (记录FATAL级别的日志)
   * @param args Message arguments (消息参数)
   */
  fatal(...args: any[]): void {
    this.log(Level.FATAL, args);
  }

  /**
   * Create a log event (创建日志事件)
   * @param level Log level (日志级别)
   * @param message Message (消息)
   * @returns Log event (日志事件)
   */
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

  /**
   * Log a message (记录日志)
   * @param level Log level (日志级别)
   * @param message Content (内容)
   */
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
