import Level from './Level';
import Logger from './Logger';
import normalizeLevel from './normalizeLevel';
import type { Config, IAppender, TLevel } from './types';

/**
 * Log Factory (日志工厂)
 */
export default class LogFactory {
  private readonly loggers = new Map<string, Logger>();
  private LoggerClass: typeof Logger = Logger;
  private defaultLevel: Level = Level.INFO;
  private appenders: IAppender[] = [];

  /**
   * Constructor (构造函数)
   * @param config Configuration options (配置选项)
   */
  constructor(config?: Config) {
    this.configure(config);
  }

  /**
   * Get the default log level (获取或设置默认日志级别)
   */
  get level(): Level {
    return this.defaultLevel;
  }

  /**
   * Get the default log level name (获取或设置默认日志级别名称)
   */
  get levelName(): string {
    return Level[this.defaultLevel];
  }

  /**
   * Update the default log level (更新默认日志级别)
   * @param level Log level (日志级别)
   * @param updateCachedLoggers Whether to update the cached loggers (是否更新缓存的日志器)
   * @returns Update level success if true (如果为 true 表示更新成功)
   */
  updateLevel(level: Level | TLevel, updateCachedLoggers?: boolean): boolean {
    const normalizedLevel = normalizeLevel(level);
    const isValidLevel = normalizedLevel !== void 0;

    if (isValidLevel) {
      this.defaultLevel = normalizedLevel;

      // 更新缓存的 Logger 的日志级别
      // Update cached Logger's log level
      if (updateCachedLoggers !== false) {
        this.loggers.forEach((logger) => {
          logger.level = normalizedLevel;
        });
      }
    }

    return isValidLevel;
  }

  /**
   * Configure the log factory (配置日志工厂)
   * @param param Configuration options (配置选项)
   */
  configure({
    LoggerClass,
    level,
    appenders
  }: Config = {}): void {
    if (LoggerClass) {
      this.LoggerClass = LoggerClass;
    }
    if (level) {
      this.updateLevel(level, false);
    }
    if (appenders) {
      this.appenders = appenders;
    }
  }

  /**
   * Get a logger instance (获取日志实例)
   * @param name Logger name (日志名称)
   */
  getLogger(name: string): Logger {
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
