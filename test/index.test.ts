import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createFactory } from '../src/logger';

const factory = createFactory();
describe('测试日志级别打印', () => {
  const logger = factory.getLogger('name');

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
    logger.level('DEBUG');

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
