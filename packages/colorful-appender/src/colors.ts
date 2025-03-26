import { LogLevel } from 'base-log-factory';

export default {
  [LogLevel.FATAL]: 'magenta',
  [LogLevel.ERROR]: 'red',
  [LogLevel.WARN]: 'yellow',
  [LogLevel.INFO]: 'green',
  [LogLevel.DEBUG]: 'cyan',
  [LogLevel.TRACE]: 'blue',
  [LogLevel.OFF]: 'reset'
};
