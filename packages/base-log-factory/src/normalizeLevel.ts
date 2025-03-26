import Level from './LogLevel';
import { TLevel } from './typings';

/**
   * Normalize log level (标准化日志级别)
   * @param level Log level (日志级别)
   * @returns Normalized log level (标准化后的日志级别)
   */
export default function normalizeLevel(level: Level | TLevel): Level | undefined {
  // 可能是字符串 TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF
  // It might be a string TRACE/DEBUG/INFO/WARN/ERROR/FATAL/OFF
  if (typeof level === 'string') {
    level = Level[level.toUpperCase()];

    // 不是有效的日志级别字符串
    // It is not a valid log level string
    if (level === void 0) {
      return;
    }
    return level as Level;
  }

  // 可能是数字
  // It might be a number
  if (typeof level === 'number') {
    // 不是有效的日志级别枚举值
    // It is not a valid log level enum value
    if (Level[level] === void 0) {
      return;
    }

    return level;
  }
}
