import Logger from './Logger';
import Level from './LogLevel';

/**
 * Log level name (日志级别名称)
 */
export type TLevel = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' | 'OFF';

/**
 * Log factory configuration (日志工厂配置)
 */
export interface Config {
  level?: Level | TLevel;
  appenders?: IAppender[];
  LoggerClass?: typeof Logger;
}

/**
 * Logger options (日志选项)
 */
export interface LogOptions {
  level?: Level | TLevel;
  appenders?: IAppender[];
}

/**
 * Log event (日志事件)
 */
export interface LogEvent {
  level: Level;
  levelName: TLevel;
  message: any[];
  timestamp: Date;
  loggerName: string;
  context: Record<string, any>;
}

/**
 * Pattern converter (日志记录器模式转换器)
 */
export type TPatternConverter = (...args: any[]) => string;

/**
 * Layout interface (日志布局接口)
 */
export interface ILayout {
  format(event: LogEvent): string;
}


/**
 * Appender interface (日志记录器接口)
 */
export interface IAppender {
  name: string;
  setup(logger: ILogger): void;
  write(event: LogEvent): void;
  close(): Promise<void>;
}

/**
 * Logger interface (日志接口)
 */
export interface ILogger {
  name: string;
  appenders: Map<string, IAppender>;
  set level(l: Level | TLevel);
  get level(): Level;
  addContext(key: string, value: any): void;
  removeContext(key: string): void;
  clearContext(): void;
  dispose(): Promise<any[]>;
  trace(...args: any[]): void;
  debug(...args: any[]): void;
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
  fatal(...args: any[]): void;
}
