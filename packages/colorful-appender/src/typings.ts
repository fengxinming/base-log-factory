import type { ILayout, Level } from 'base-log-factory';

export interface ColorfulAppenderOptions {
  layout?: ILayout;
  colors?: Record<Level, string>;
}
