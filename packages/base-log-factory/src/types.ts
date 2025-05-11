import Level from './Level';
import Logger from './Logger';

/**
 * Log level name (日志级别名称)
 */
export type TLevel = keyof typeof Level;
// export type TLevel = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' | 'OFF';

/**
 * Log level (日志级别)
 */
export type LogLevel = Level | TLevel;

/**
 * Log factory configuration (日志工厂配置)
 */
export interface Config {
  level?: LogLevel;
  appenders?: IAppender[];
  LoggerClass?: typeof Logger;
}

/**
 * Logger options (日志选项)
 */
export interface LogOptions {
  level?: LogLevel;
  appenders?: IAppender[];
}

/**
 * Log event (日志事件)
 */
export interface LogEvent {
  level: LogLevel;
  levelName: TLevel;
  message: any[];
  timestamp: Date;
  loggerName: string;
  context: Record<string, any>;
}

/**
 * Pattern converter (日志记录器模式转换器)
 */
export type TConverter = (event: LogEvent) => string;

/**
 * Create converter function (创建转换器函数)
 */
export type TCreateConverter = (
  specifier: string,
  alignLeft: boolean,
  minWidth: number,
  maxLength: number,
  format?: string
) => TConverter;

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
  write(event: LogEvent): void;
  close(): Promise<void>;
}
