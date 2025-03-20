import Level from './Level';
import Logger from './Logger';
import { IAppender, IConfig, ILogger, TLevel } from './typings';

/**
 * 日志管理器
 */
export default class LogFactory {
  private readonly loggers = new Map<string, ILogger>();
  private LoggerClass: typeof Logger = Logger;
  private defaultLevel: Level = Level.INFO;
  private appenders: IAppender[] = [];

  constructor(config?: IConfig) {
    this.configure(config);
  }

  get level(): Level {
    return this.defaultLevel;
  }

  set level(level: Level | TLevel) {
    level = Logger.normalizeLevel(level);
    this.defaultLevel = level;
    this.loggers.forEach((logger) => {
      logger.level = level;
    });
  }

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

  clear(name?: string): void {
    if (name) {
      this.loggers.delete(name);
    }
    else {
      this.loggers.clear();
    }
  }

  dispose(): Promise<any[]> {
    const promises: Array<Promise<any>> = [];
    this.loggers.forEach((logger) => {
      promises.push(logger.dispose());
    });
    return Promise.allSettled(promises);
  }
}
