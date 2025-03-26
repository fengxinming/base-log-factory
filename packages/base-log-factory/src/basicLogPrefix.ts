import { format } from 'date-manip';

import { LogEvent } from './typings';

const DEFAULT_FORMATTER = 'HH:mm:ss.SSSZ';

export default function basicLogPrefix(event: LogEvent, dateFormat?: string): string {
  return `[${format(event.timestamp, dateFormat || DEFAULT_FORMATTER)}] [${event.levelName}] [${event.loggerName}] -`;
}
