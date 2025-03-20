import { DateRollingOptions, RollingOptions } from 'rolling-write-stream';
import Level from './Level';
import Logger from './Logger';

/**
 * 日志级别字符串
 */
export type TLevel = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' | 'OFF';

/**
 * 日志工厂配置
 */
export interface IConfig {
  level?: Level | TLevel;
  appenders?: IAppender[];
  LoggerClass?: typeof Logger;
}

/**
 * 日志工厂
 */
export interface ILogger {
  name: string;
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
 * 日志配置
 */
export interface ILogOptions {
  level?: Level | TLevel;
  appenders?: IAppender[];
}

/**
 * 日志事件接口
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
 * Appender 接口
 */
export interface IAppender {
  write(event: ILogEvent): void;
  close(): Promise<void>;
}

/**
 * 布局格式化接口
 */
export interface ILayout {
  format(event: ILogEvent): string;
}

/**
 * Appender 基类配置
 */
export type BaseAppenderOptions = {
  layout?: ILayout;
} & Partial<RollingOptions>;

/**
 * Appender 数量滚动配置
 */
export type FileAppenderOptions = BaseAppenderOptions;

/**
 * Appender 时间滚动配置
 */
export type DateFileAppenderOptions = BaseAppenderOptions & Partial<DateRollingOptions>;
