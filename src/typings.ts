import { DateRollingOptions, RollingOptions } from 'rolling-write-stream';

import Level from './Level';
import Logger from './Logger';

/**
 * Log level name (日志级别名称)
 */
export type TLevel = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' | 'OFF';

/**
 * Log factory configuration (日志工厂配置)
 */
export interface IConfig {
  level?: Level | TLevel;
  appenders?: IAppender[];
  LoggerClass?: typeof Logger;
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

/**
 * Logger options (日志选项)
 */
export interface ILogOptions {
  level?: Level | TLevel;
  appenders?: IAppender[];
}

/**
 * Log event (日志事件)
 */
export interface ILogEvent {
  level: Level;
  levelName: TLevel;
  message: any[];
  timestamp: Date;
  loggerName: string;
  context: Record<string, any>;
}

/**
 * Appender interface (日志记录器接口)
 */
export interface IAppender {
  name: string;
  setup(logger: ILogger): void;
  write(event: ILogEvent): void;
  close(): Promise<void>;
}

/**
 * Layout interface (日志布局接口)
 */
export interface ILayout {
  format(event: ILogEvent): string;
}

/**
 * Base appender options (日志记录器基础选项)
 */
export type BaseAppenderOptions = {
  layout?: ILayout;
} & Partial<RollingOptions>;

/**
 * File appender options (日志记录器文件选项)
 */
export type FileAppenderOptions = BaseAppenderOptions;

/**
 * Date file appender options (日志记录器日期文件选项)
 */
export type DateFileAppenderOptions = BaseAppenderOptions & Partial<DateRollingOptions>;

/**
 * Pattern layout converter (日志记录器模式转换器)
 */
export type TPatternLayoutConverter = (...args: any[]) => string;
