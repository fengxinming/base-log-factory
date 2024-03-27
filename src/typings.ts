export interface IAppender {
  log(messages: any[], logOpts: LogOptions): void;
  dispose(): Promise<void>;
}

export type TLogLevel = 'ALL' | 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' | 'OFF';

export interface LoggerOptions {
  level?: TLogLevel;
  appender?: IAppender | IAppender[];
}

export interface LogOptions {
  level: string;
  method: string;
  date: Date;
  name: string;
}

export interface AppenderOptions {
  [key: string]: any;
  layout?: (messages: any[], logOpts: LogOptions) => any[];
}

export interface ILogger {
  name: string;
  level(l: TLogLevel): void;
  level(): TLogLevel;
  trace(...args: any[]): void;
  debug(...args: any[]): void;
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
  fatal(...args: any[]): void;
}

export interface IFactory {
  getLogger(name?: string): ILogger;
  setLevel(level: TLogLevel): void;
  clear(): void;
}
