import { format } from 'date-manip';

import { ILogEvent } from './typings';

const DEFAULT_FORMATTER = 'YYYY-MM-DD HH:mm:ss.SSSZ';

export default function basicLogPrefix(event: ILogEvent, dateFormat?: string): string {
  return `[${format(event.timestamp, dateFormat || DEFAULT_FORMATTER)}] [${event.levelName}] [${event.loggerName}] -`;
}
