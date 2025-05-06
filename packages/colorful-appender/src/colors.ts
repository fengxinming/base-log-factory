import { Level } from 'base-log-factory';

export const colors = {
  [Level.FATAL]: 'magenta',
  [Level.ERROR]: 'red',
  [Level.WARN]: 'yellow',
  [Level.INFO]: 'green',
  [Level.DEBUG]: 'cyan',
  [Level.TRACE]: 'blue',
  [Level.OFF]: 'reset'
};
