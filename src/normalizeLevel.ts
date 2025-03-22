import Level from './Level';
import { TLevel } from './typings';

/**
   * Normalize log level (标准化日志级别)
   * @param level Log level (日志级别)
   * @returns Normalized log level (标准化后的日志级别)
   */
export default function normalizeLevel(level: Level | TLevel): Level {
  if (typeof level === 'string') {
    level = Level[level.toUpperCase()];
    if (level == null) {
      level = Level.INFO;
    }
  }
  return level as Level;
}
