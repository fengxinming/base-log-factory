import { format } from 'date-manip';
import { isFunction } from 'is-what-type';

import compilePattern from './compilePattern';
import formatMessage from './formatMessage';
import pad from './pad';
import { ILayout, LogEvent, TCreateConverter, TPatternConverter } from './typings';

// 基础转换器实现
function literalConverter(text: string): () => string {
  return () => text;
}

function dateConverter(dateFormat: string = 'ISO') {
  return (event: LogEvent) => {
    return format(event.timestamp, dateFormat);
  };
}

function levelConverter(
  minWidth: number = 0,
  alignLeft: boolean = true
) {
  return (event: LogEvent): string => {
    return pad(event.levelName, minWidth, alignLeft);
  };
}

function loggerConverter(
  minWidth: number = 0,
  alignLeft: boolean = true
) {
  return (event: LogEvent): string => {
    const { loggerName } = event;
    return pad(loggerName, minWidth, alignLeft);
  };
}

function messageConverter(
  minWidth: number = 0,
  maxLength: number = 0,
  alignLeft: boolean = true
) {
  return (event: LogEvent) => {
    return formatMessage(event.message, (msg: string) => {
      if (maxLength > 0 && msg.length > maxLength) {
        msg = `${msg.substring(0, maxLength)}...`;
      }
      return pad(msg, minWidth, alignLeft);
    });
  };
}

function threadConverter() {
  return (): string => {
    // 在 Node.js 中使用进程ID + 线程ID（cluster模式）
    return `PID:${process.pid}`;
  };
}

function mdcConverter(
  key: string,
  minWidth: number = 0,
  alignLeft: boolean = true
) {

  return (event: LogEvent): string => {
    const value = event.context[key] || '';
    return pad(String(value), minWidth, alignLeft);
  };
}

/**
 * Pattern layout for logging messages (根据指定模版格式化日志内容)
 */
export default class PatternLayout implements ILayout {
  private readonly converters: TPatternConverter[];

  /**
   * Constructor (构造函数)
   * @param pattern Pattern string (模版字符串)
   */

  constructor(
    pattern: string = '[%d{YYYY-MM-DD HH:mm:ss.SSSZ}] %p %c - %m',
    createConverter?: TCreateConverter
  ) {
    this.converters = compilePattern(
      pattern,
      (
        specifier: string,
        alignLeft?: boolean,
        minWidth?: number,
        maxLength?: number,
        format?: string
      ): TPatternConverter => {
        if (isFunction<TCreateConverter>(createConverter)) {
          const converter = createConverter(
            specifier,
            alignLeft,
            minWidth,
            maxLength,
            format
          );
          if (isFunction<TPatternConverter>(converter)) {
            return converter;
          }
        }

        switch (specifier.toLowerCase()) {
          case '%':
            return literalConverter('%');

          case 'd':
            return dateConverter(format);

          case 'p':
            return levelConverter(minWidth, alignLeft);

          case 'c':
            return loggerConverter(minWidth, alignLeft);

          case 'm':
            return messageConverter(minWidth, maxLength, alignLeft);

          case 't':
            return threadConverter();

          case 'x':
            return mdcConverter(format || '', minWidth, alignLeft);

          default:
            return literalConverter(`%${specifier}`);
        }
      },
      literalConverter
    );
  }

  /**
   * Add a converter (添加转换器)
   * @param fn Converter function (转换器函数)
   */
  use(fn: TPatternConverter): this {
    this.converters.push(fn);
    return this;
  }

  /**
   * Format a log event (格式化日志事件)
   * @param event Log event (日志事件)
   */
  format(event: LogEvent): string {
    return this.converters
      .map((converter) => converter(event))
      .join('');
  }
}
