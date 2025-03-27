import { Level } from 'base-log-factory';

export default {
  [Level.FATAL]: 'magenta',
  [Level.ERROR]: 'red',
  [Level.WARN]: 'yellow',
  [Level.INFO]: 'green',
  [Level.DEBUG]: 'cyan',
  [Level.TRACE]: 'blue',
  [Level.OFF]: 'reset'
};
