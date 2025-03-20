import Level from './Level';
import Logger from './Logger';
import { IAppender, IConfig, ILogger, TLevel } from './typings';

/**
 * 日志管理器
 */
export default class LogFactory {
  private readonly loggers = new Map<string, ILogger>();
  private LoggerClass: typeof Logger = Logger;
  private defaultLevel: Level | TLevel = Level.INFO;
  private appenders: IAppender[] = [];

  constructor(config?: IConfig) {
    this.configure(config);
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
      this.defaultLevel = level;
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
}
