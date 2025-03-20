import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import PatternLayout from '../src/layouts/PatternLayout';
import { join, dirname } from 'node:path';
import { ConsoleAppender, LogFactory } from '../src';
import FileAppender from '../src/appenders/FileAppender';
import { fileURLToPath } from 'node:url';
import { DateFileAppender } from 'src/appenders/DateFileAppender';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('测试日志级别打印', () => {
  const logPath =  join(__dirname, '..', 'logs', 'test.log');
  const logPath2 =  join(__dirname, '..', 'logs', 'test2.log');
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
      level: 'INFO',
      appenders: [
        new ConsoleAppender()
      ]
    });
    const logger = factory.getLogger('name');

    it('测试打印INFO日志', () => {
      logger.info('hello');
      expect(mockLog.mock.calls[0][1]).toBe('hello');

      logger.error('world');
      expect(mockLog.mock.calls[1][1]).toBe('world');

      logger.debug('debug');
      expect(mockLog.mock.calls[2]).toBe(void 0);

      logger.trace('trace');
      expect(mockLog.mock.calls.length).toBe(2);
    });

    it('测试打印DEBUG日志', () => {
      logger.level = 'DEBUG';

      logger.info('hello');
      expect(mockLog.mock.calls[0][1]).toBe('hello');

      logger.debug('world');
      expect(mockLog.mock.calls[1][1]).toBe('world');

      logger.trace('end');
      expect(mockLog.mock.calls[2]).toBe(void 0);

      logger.error('error');
      expect(mockLog.mock.calls.length).toBe(3);
    });
  });

  describe('测试 PatternLayout', () => {
    const layout = new PatternLayout('[%p] %m');
    const factory = new LogFactory({
      level: 'INFO',
      appenders: [
        new ConsoleAppender(layout),
        new FileAppender(logPath, { maxSize: 1024 }),
        new DateFileAppender(logPath2, {
          layout,
          pattern: 'YYYY-MM-DD',
          backups: 30,
          maxSize: 1024
        })
      ]
    });
    const logger = factory.getLogger('name');

    it('测试打印INFO日志', () => {
      logger.info('hello');
      expect(mockLog.mock.calls[0][0]).toBe('[INFO] hello');
    });
  });
});
