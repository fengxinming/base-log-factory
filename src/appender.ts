import { format } from './format';
import { AppenderOptions, LogOptions, IAppender } from './typings';

const DEFAULT_FORMATTER = 'YYYY-MM-DD HH:mm:ss.SSSZ';
function defaultLayout(messages: any[], logOpts: LogOptions): any[] {
  const args = [
    `[${format(logOpts.date, DEFAULT_FORMATTER)}] [${logOpts.level}] [${logOpts.name}] -`
  ];
  for (let i = 0, len = messages.length; i < len; i++) {
    args[i + 1] = messages[i];
  }
  return args;
}

export function createAppender(opts: AppenderOptions = {}): IAppender {
  let layout = opts.layout || defaultLayout;
  return {
    log(messages: any[], logOpts: LogOptions): void {
      // eslint-disable-next-line prefer-spread, no-console
      console.log.apply(console, layout(messages, logOpts));
    },
    dispose(): Promise<void> {
      layout = defaultLayout;
      return Promise.resolve();
    }
  };
}
