export default function pad(str: string, width: number, alignLeft: boolean = true): string {
  const diff = width - str.length;

  if (diff <= 0) {
    return str;
  }

  const padding = ' '.repeat(diff);
  return alignLeft ? str + padding : padding + str;
}
