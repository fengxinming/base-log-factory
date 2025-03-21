import { format as dateFormat } from 'date-manip';
import transformMessage from 'src/_internal/transformMessage';

import pad from '../_internal/pad';
import { ILayout, ILogEvent, TPatternLayoutConverter } from '../typings';

// 基础转换器实现
function literalConverter(text: string): () => string {
  return () => text;
}

function dateConverter(format: string = 'ISO') {
  return (event: ILogEvent) => {
    return dateFormat(event.timestamp, format);
  };
}

function levelConverter(
  minWidth: number = 0,
  alignLeft: boolean = true
) {
  return (event: ILogEvent): string => {
    return pad(event.levelName, minWidth, alignLeft);
  };
}

function loggerConverter(
  minWidth: number = 0,
  alignLeft: boolean = true
) {
  return (event: ILogEvent): string => {
    const { loggerName } = event;
    return pad(loggerName, minWidth, alignLeft);
  };
}

function messageConverter(
  minWidth: number = 0,
  maxLength: number = 0,
  alignLeft: boolean = true
) {
  return (event: ILogEvent) => {
    return transformMessage(event.message, (msg: string) => {
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

  return (event: ILogEvent): string => {
    const value = event.context[key] || '';
    return pad(String(value), minWidth, alignLeft);
  };
}

function createConverter(
  specifier: string,
  alignLeft: boolean,
  minWidth: number,
  maxLength: number,
  format?: string
): TPatternLayoutConverter {
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
}

/**
 * Pattern layout for logging messages (根据指定模版格式化日志内容)
 */
export default class PatternLayout implements ILayout {
  private readonly patternRegex = /%(-)?(\d+)?(?:\.(\d+))?([a-zA-Z%])(?:\{([^}]+)\})?/g;
  private readonly converters: TPatternLayoutConverter[];

  /**
   * Constructor (构造函数)
   * @param pattern Pattern string (模版字符串)
   */

  constructor(pattern: string = '[%d{YYYY-MM-DD HH:mm:ss.SSSZ}] %p %c - %m') {
    const converters: TPatternLayoutConverter[] = [];
    let lastIndex = 0;

    let match: RegExpExecArray | null;
    while ((match = this.patternRegex.exec(pattern)) !== null) {
      const [full, align, minWidth, precision, specifier, format] = match;

      // 添加前面的字面内容
      if (match.index > lastIndex) {
        converters.push(literalConverter(pattern.substring(lastIndex, match.index)));
      }

      // 创建转换器
      const converter = createConverter(
        specifier,
        align === '-',
        parseInt(minWidth || '0', 10),
        parseInt(precision || '0', 10),
        format
      );

      if (converter) {
        converters.push(converter);
      }

      lastIndex = match.index + full.length;
    }

    // 添加剩余内容
    if (lastIndex < pattern.length) {
      converters.push(literalConverter(pattern.substring(lastIndex)));
    }

    this.converters = converters;
  }

  /**
   * Add a converter (添加转换器)
   * @param fn Converter function (转换器函数)
   */
  use(fn: TPatternLayoutConverter): this {
    this.converters.push(fn);
    return this;
  }

  /**
   * Format a log event (格式化日志事件)
   * @param event Log event (日志事件)
   */
  format(event: ILogEvent): string {
    return this.converters
      .map((converter) => converter(event))
      .join('');
  }
}
