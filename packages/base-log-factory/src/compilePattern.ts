import { TPatternConverter } from './typings';

const PATTERN_REGEX = /%(-)?(\d+)?(?:\.(\d+))?([a-zA-Z%])(?:\{([^}]+)\})?/g;

export default function compilePattern(
  pattern: string,
  createConverter: (
    specifier: string,
    alignLeft: boolean,
    minWidth: number,
    maxLength: number,
    format?: string
  ) => TPatternConverter,
  literalConverter: (text: string) => TPatternConverter
): TPatternConverter[] {
  const converters: TPatternConverter[] = [];
  let lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = PATTERN_REGEX.exec(pattern)) !== null) {
    const [full, align, minWidth, precision, specifier, format] = match;

    // 添加前面的字面内容
    if (match.index > lastIndex) {
      converters.push(literalConverter(pattern.substring(lastIndex, match.index)));
    }

    // 创建转换器
    const converter = createConverter(
      specifier,
      align === '-',
      parseInt(minWidth || '0', 10),
      parseInt(precision || '0', 10),
      format
    );

    if (converter) {
      converters.push(converter);
    }

    lastIndex = match.index + full.length;
  }

  // 添加剩余内容
  if (lastIndex < pattern.length) {
    converters.push(literalConverter(pattern.substring(lastIndex)));
  }
  return converters;
}
