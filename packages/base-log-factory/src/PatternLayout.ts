import { format } from 'date-manip';
import { isFunction } from 'is-what-type';

import compilePattern from './compilePattern';
import type { ILayout, LogEvent, TConverter, TCreateConverter } from './types';

function pad(str: string, width: number, alignLeft: boolean = true): string {
  const diff = width - str.length;

  if (diff <= 0) {
    return str;
  }

  const padding = ' '.repeat(diff);
  return alignLeft ? str + padding : padding + str;
}


// 基础转换器实现
function literalConverter(text: string): () => string {
  return () => text;
}

/**
 * Pattern layout for logging messages (根据指定模版格式化日志内容)
 */
export default class PatternLayout implements ILayout {
  static converterMap: Record<string, TCreateConverter> = {
    '%': () => () => '%',
    d: (
      specifier,
      alignLeft,
      minWidth,
      maxLength,
      dateFormat: string = 'ISO'
    ) => (event: LogEvent) => format(event.timestamp, dateFormat),
    p: (
      specifier,
      alignLeft,
      minWidth,
    ) => (event: LogEvent) => pad(event.levelName, minWidth, alignLeft),
    c: (
      specifier,
      alignLeft,
      minWidth,
    ) => (event: LogEvent) => pad(event.loggerName, minWidth, alignLeft),
    m: (
      specifier,
      alignLeft: boolean,
      minWidth: number,
      maxLength: number,
    ) => (event: LogEvent) => {
      return event.message.reduce((prev: string, curr, index) => {
        let msg: string;

        if (curr instanceof Error) {
          msg = curr.stack || curr.message;
        }
        else if (typeof curr === 'object') {
          msg = JSON.stringify(curr);
        }
        else {
          msg = String(curr);
        }

        if (maxLength > 0 && msg.length > maxLength) {
          msg = `${msg.substring(0, maxLength)}...`;
        }
        msg = pad(msg, minWidth, alignLeft);

        return index === 0 ? msg : `${prev} ${msg}`;
      }, '');
    },
    t: () => {
      return (): string => {
        // 在 Node.js 中使用进程ID + 线程ID（cluster模式）
        return `PID:${process.pid}`;
      };
    },
    x: (
      specifier,
      alignLeft,
      minWidth,
      maxLength,
      key
    ) => {
      return (event: LogEvent): string => {
        const value = key ? event.context[key] || '' : '';
        return pad(String(value), minWidth, alignLeft);
      };
    }
  };
  private readonly converters: TConverter[];
  private readonly converterMap: Record<string, TCreateConverter>;

  /**
   * Constructor (构造函数)
   * @param pattern Pattern string (模版字符串)
   */

  constructor(
    pattern: string = '[%d{YYYY-MM-DD HH:mm:ss.SSSZ}] %p %c - %m',
    createConverter?: (
      specifier: string,
      alignLeft: boolean,
      minWidth: number,
      maxLength: number,
      format?: string
    ) => TConverter | undefined | null
  ) {
    const converterMap = Object.assign({}, PatternLayout.converterMap);
    this.converters = compilePattern(
      pattern,
      (
        specifier: string,
        alignLeft: boolean,
        minWidth: number,
        maxLength: number,
        format?: string
      ): TConverter => {
        if (isFunction<TCreateConverter>(createConverter)) {
          const converter = createConverter(
            specifier,
            alignLeft,
            minWidth,
            maxLength,
            format
          );
          if (isFunction<TConverter>(converter)) {
            return converter;
          }
        }

        const create = converterMap[specifier];

        if (!create) {
          return literalConverter(`%${specifier}`);
        }

        return create(specifier, alignLeft, minWidth, maxLength, format);
      },
      literalConverter
    );
    this.converterMap = converterMap;
  }

  /**
   * Register a converter (注册转换器)
   * @param key Converter key (转换器键)
   * @param fn Converter function (转换器函数)
   */
  register(key: string, fn: TCreateConverter) {
    this.converterMap[key] = fn;
    return this;
  }

  /**
   * Add a converter (添加转换器)
   * @param fn Converter function (转换器函数)
   */
  use(fn: TConverter): this {
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
