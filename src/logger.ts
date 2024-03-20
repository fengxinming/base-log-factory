import { createAppender } from './appender';
import { ILogger, LoggerOptions, IAppender, IFactory, TLogLevel } from './typings';

const levels = [
  { level: 'OFF', value: 0 },
  { level: 'FATAL', value: 1 },
  { level: 'ERROR', value: 2 },
  { level: 'WARN', value: 3 },
  { level: 'INFO', value: 4 },
  { level: 'DEBUG', value: 5 },
  { level: 'TRACE', value: 6 },
  { level: 'ALL', value: Number.MAX_VALUE }
];

function getLevelValue(level: TLogLevel): number {
  let levelValue = 0;
  for (let i = 0, len = levels.length; i < len; i++) {
    const obj = levels[i];
    if (obj.level === level) {
      levelValue = obj.value;
      break;
    }
  }
  return levelValue;
}

class Logger implements ILogger {
  name: string;
  fatal!: (...args: any[]) => void;
  error!: (...args: any[]) => void;
  warn!: (...args: any[]) => void;
  info!: (...args: any[]) => void;
  debug!: (...args: any[]) => void;
  trace!: (...args: any[]) => void;

  private _level: TLogLevel;
  private readonly _appender: IAppender | IAppender[];

  constructor(name: string, { level, appender }: LoggerOptions = {}) {
    this.name = name;
    this._level = level || 'INFO';
    this._appender = appender || createAppender();
    this.level(this._level);
  }

  level(l?: TLogLevel): TLogLevel | void {
    if (!l) {
      return this._level;
    }

    let level = l.toUpperCase() as TLogLevel;
    const levelValue = getLevelValue(level);
    if (!levelValue) {
      level = 'OFF';
    }

    const { _appender } = this;
    levels.forEach(({ level: currentLevel, value }) => {
      if (currentLevel === 'OFF' || currentLevel === 'ALL') {
        return;
      }

      const method = currentLevel.toLowerCase();
      this[method] = value > levelValue
        ? () => {}
        : Array.isArray(_appender)
          ? function (...args: any[]) {
            _appender.forEach((appender) => {
              const now = new Date();
              const { name } = this;
              appender.log(args, {
                level: currentLevel,
                method,
                date: now,
                name
              });
            });
          }
          : function (...args: any[]) {
            _appender.log(args, {
              level: currentLevel,
              method,
              date: new Date(),
              name: this.name
            });
          };
    });
    this._level = level;
  }
}

export function createFactory(opts: LoggerOptions = {}): IFactory {
  let loggers: Record<string, ILogger> = Object.create(null);
  const defaultOpts: LoggerOptions = {
    level: 'INFO',
    appender: createAppender()
  };

  return {
    getLogger(name: string): ILogger {
      let logger = loggers[name];
      if (!logger) {
        logger = new Logger(name, Object.assign({}, defaultOpts, opts));
        loggers[name] = logger;
      }
      return logger;
    },

    setLevel(level) {
      const levelValue = getLevelValue(level);
      if (!levelValue) {
        level = 'OFF';
      }
      defaultOpts.level = level;
      Object.keys(loggers).forEach((name) => {
        loggers[name].level(level);
      });
    },

    clear() {
      loggers = Object.create(null);
    }
  };
}
