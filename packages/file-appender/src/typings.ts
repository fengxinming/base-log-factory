import { ILayout } from 'base-log-factory';
import { DateRollingOptions, RollingOptions } from 'rolling-write-stream';


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
