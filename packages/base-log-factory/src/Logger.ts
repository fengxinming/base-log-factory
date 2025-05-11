import Level from './Level';
import normalizeLevel from './normalizeLevel';
import { IAppender, LogEvent, LogLevel, LogOptions, TLevel } from './types';

/**
 * Logger instance (日志实例)
 */
export default class Logger {
  /**
   * Log a message of level TRACE (记录TRACE级别的日志)
   * @param args Message arguments (消息参数)
   */
  trace!: (...args: any[]) => void;

  /**
   * Log a message of level DEBUG (记录DEBUG级别的日志)
   * @param args Message arguments (消息参数)
   */
  debug!: (...args: any[]) => void;

  /**
   * Log a message of level INFO (记录INFO级别的日志)
   * @param args Message arguments (消息参数)
   */
  info!: (...args: any[]) => void;

  /**
   * Log a message of level WARN (记录WARN级别的日志)
   * @param args Message arguments (消息参数)
   */
  warn!: (...args: any[]) => void;

  /**
   * Log a message of level ERROR (记录ERROR级别的日志)
   * @param args Message arguments (消息参数)
   */
  error!: (...args: any[]) => void;

  /**
   * Log a message of level FATAL (记录FATAL级别的日志)
   * @param args Message arguments (消息参数)
   */
  fatal!: (...args: any[]) => void;

  /**
   * Check if TRACE level is enabled (检查TRACE级别是否启用)
   */
  isTraceEnabled!: () => void;

  /**
   * Check if DEBUG level is enabled (检查DEBUG级别是否启用)
   */
  isDebugEnabled!: () => void;

  /**
   * Check if INFO level is enabled (检查INFO级别是否启用)
   */
  isInfoEnabled!: () => void;

  /**
   * Check if WARN level is enabled (检查WARN级别是否启用)
   */
  isWarnEnabled!: () => void;

  /**
   * Check if ERROR level is enabled (检查ERROR级别是否启用)
   */
  isErrorEnabled!: (...args: any[]) => void;

  /**
   * Check if FATAL level is enabled (检查FATAL级别是否启用)
   */
  isFatalEnabled!: (...args: any[]) => void;

  readonly appenders = new Map<string, IAppender>();
  protected context: Record<string, any> = {};
  protected _level: Level = Level.INFO;

  /**
   * Create a logger instance (创建日志实例)
   * @param name Logger name (日志名称)
   * @param options Logging options (日志选项)
   */
  constructor(
    public name: string,
    { level, appenders = [] }: LogOptions = {},
  ) {
    if (level == null) {
      this.level = Level.INFO;
    }

    if (appenders) {
      appenders.forEach((appender) => {
        this.appenders.set(appender.name, appender);
      });
    }
  }

  /**
   * Log level name (日志级别名称)
   */
  get levelName(): TLevel {
    return Level[this._level] as TLevel;
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
  set level(level: LogLevel) {
    const normalizedLevel = normalizeLevel(level);
    if (normalizedLevel !== void 0) {
      this._level = normalizedLevel;
    }
  }

  isEnabled(level: LogLevel): boolean {
    const levelValue = normalizeLevel(level);
    if (levelValue === void 0) {
      return false;
    }
    return levelValue <= this._level;
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
    const promises: Array<Promise<void>> = [];
    this.appenders.forEach((appender) => {
      promises.push(appender.close());
    });
    return Promise.allSettled(promises);
  }

  /**
   * Create a log event (创建日志事件)
   * @param level Log level (日志级别)
   * @param message Message (消息)
   * @returns Log event (日志事件)
   */
  protected createEvent(level: Level, message: any[]): LogEvent {
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

    const event: LogEvent = this.createEvent(level, message);

    this.appenders.forEach((appender) => {
      try {
        appender.write(event);
      }
      catch (err: any) {
        console.error('Appender error:', err);
      }
    });
  }
}

const proto = Logger.prototype;
'trace,debug,info,warn,error,fatal'.split(',').forEach((level: string) => {
  const levelName = level.toUpperCase();
  proto[level] = function (...args: any[]) {
    this.log(Level[levelName], args);
  };
  const levelValue = Level[levelName];
  proto[`is${level.charAt(0).toUpperCase()}${level.slice(1)}Enabled`] = function () {
    return levelValue <= this._level;
  };
});
