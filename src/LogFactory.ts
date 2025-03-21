import Level from './Level';
import Logger from './Logger';
import { IAppender, IConfig, ILogger, TLevel } from './typings';

/**
 * Log Factory (日志工厂)
 */
export default class LogFactory {
  private readonly loggers = new Map<string, ILogger>();
  private LoggerClass: typeof Logger = Logger;
  private defaultLevel: Level = Level.INFO;
  private appenders: IAppender[] = [];

  /**
   * Constructor (构造函数)
   * @param config Configuration options (配置选项)
   */
  constructor(config?: IConfig) {
    this.configure(config);
  }

  /**
   * Get or set the default log level (获取或设置默认日志级别)
   */
  get level(): Level {
    return this.defaultLevel;
  }

  /**
   * Set the default log level (设置默认日志级别)
   * @param level Log level (日志级别)
   */
  set level(level: Level | TLevel) {
    level = Logger.normalizeLevel(level);
    this.defaultLevel = level;
    this.loggers.forEach((logger) => {
      logger.level = level;
    });
  }

  /**
   * Configure the log factory (配置日志工厂)
   * @param param Configuration options (配置选项)
   */
  configure({
    LoggerClass,
    level,
    appenders
  }: IConfig = {}): void {
    if (LoggerClass) {
      this.LoggerClass = LoggerClass;
    }
    if (level) {
      this.defaultLevel = Logger.normalizeLevel(level);
    }
    if (appenders) {
      this.appenders = appenders;
    }
  }

  /**
   * Get a logger instance (获取日志实例)
   * @param name Logger name (日志名称)
   */
  getLogger(name: string): ILogger {
    let logger = this.loggers.get(name);
    if (!logger) {
      const { LoggerClass } = this;
      logger = new LoggerClass(name, {
        level: this.defaultLevel,
        appenders: this.appenders
      });
      this.loggers.set(name, logger);
    }
    return logger;
  }

  /**
   * Clear the logger cache (清除日志缓存)
   * @param name Logger name (日志名称)
   */
  clear(name?: string): void {
    if (name) {
      this.loggers.delete(name);
    }
    else {
      this.loggers.clear();
    }
  }

  /**
   * Dispose the log factory (销毁日志工厂)
   */
  dispose(): Promise<any[]> {
    const promises: Array<Promise<any>> = [];
    this.loggers.forEach((logger) => {
      promises.push(logger.dispose());
    });
    return Promise.allSettled(promises);
  }
}
