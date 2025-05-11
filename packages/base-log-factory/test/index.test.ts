import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import ConsoleAppender from '../src/ConsoleAppender';
import LogLevel from '../src/Level';
import LogFactory from '../src/LogFactory';
import PatternLayout from '../src/PatternLayout';

describe('测试日志级别打印', () => {
  const { log } = console;
  let mockLog;

  beforeEach(() => {
    mockLog = vi.fn();
    // eslint-disable-next-line no-console
    console.log = mockLog;
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.log = log;
  });

  describe('测试工厂方式创建日志对象', () => {
    const factory = new LogFactory({
      level: LogLevel.INFO,
      appenders: [
        new ConsoleAppender()
      ]
    });
    const logger = factory.getLogger('name');

    it('测试打印INFO日志', () => {
      logger.info('hello');
      expect(mockLog.mock.calls[0][4]).toBe('hello');

      logger.error('world');
      expect(mockLog.mock.calls[1][4]).toBe('world');

      logger.debug('debug');
      expect(mockLog.mock.calls[2]).toBe(void 0);

      logger.trace('trace');
      expect(mockLog.mock.calls.length).toBe(2);
    });

    it('测试打印DEBUG日志', () => {
      logger.level = 'DEBUG';

      logger.info('hello 1');
      expect(mockLog.mock.calls[0][4]).toBe('hello 1');

      logger.debug('world 1');
      expect(mockLog.mock.calls[1][4]).toBe('world 1');

      logger.trace('end');
      expect(mockLog.mock.calls[2]).toBe(void 0);

      logger.error('error');
      expect(mockLog.mock.calls.length).toBe(3);
    });

    it('测试修改日志级别', () => {
      logger.level = LogLevel.ERROR;
      logger.info('hello 2');
      expect(mockLog.mock.calls[0]).toBe(void 0);

      factory.updateLevel(LogLevel.DEBUG);
      logger.debug('world 2');
      expect(mockLog.mock.calls[0][4]).toBe('world 2');
    });
  });

  describe('测试 PatternLayout', () => {
    const layout = new PatternLayout('[%p] %m %x{user}');
    const factory = new LogFactory({
      level: 'INFO',
      appenders: [
        new ConsoleAppender(layout)
      ]
    });
    const logger = factory.getLogger('name');

    it('测试打印INFO日志', () => {
      logger.info('hello');
      expect(mockLog.mock.calls[0][0]).toBe('[INFO] hello ');
    });

    it('测试MDC输出', () => {
      logger.addContext('user', 'zhangsan');
      logger.info('hello');
      expect(mockLog.mock.calls[0][0]).toBe('[INFO] hello zhangsan');

      logger.removeContext('user');
      logger.info('world');
      expect(mockLog.mock.calls[1][0]).toBe('[INFO] world ');
    });
  });
});
