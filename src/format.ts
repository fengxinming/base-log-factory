
const FORMAT_REGEX = /\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g;

const ZERO = '00';

function padLeft(val: number, len?: number) {
  if (len === void 0) {
    len = 2;
  }

  return (ZERO + String(val)).slice(-len);
}

function timezone(minutes: number, together?: boolean) {
  let prefix;
  if (minutes < 0) {
    prefix = '+';
    minutes = Math.abs(minutes);
  }
  else {
    prefix = '-';
  }
  return (`${prefix}${padLeft(Math.floor(minutes / 60))}${together ? '' : ':'}${padLeft(Math.floor(minutes % 60))}`);
}

function h12(hours) {
  hours = hours || 24;
  return hours > 12 ? hours - 12 : hours;
}
export function format(date: Date, inputString?: string) {
  if (!inputString || inputString === 'ISO') {
    return date.toISOString();
  }
  const TIMEZONE_OFFSET = new Date().getTimezoneOffset();
  return inputString.replace(FORMAT_REGEX, (matched) => {
    switch (matched) {
      case 'YY':
        return String(date.getFullYear()).slice(-2);
      case 'YYYY':
      case 'yyyy':
        return date.getFullYear();
      case 'M':
        return date.getMonth() + 1;
      case 'MM':
        return padLeft(date.getMonth() + 1);
      case 'D':
      case 'd':
        return date.getDate();
      case 'DD':
      case 'dd':
        return padLeft(date.getDate());
      // case 'T':
      //   return ' ';
      case 'H':
        return date.getHours();
      case 'HH':
        return padLeft(date.getHours());
      case 'h':
        return h12(date.getHours());
      case 'hh':
        return padLeft(h12(date.getHours()));
      case 'm':
        return date.getMinutes();
      case 'mm':
        return padLeft(date.getMinutes());
      case 's':
        return date.getSeconds();
      case 'ss':
        return padLeft(date.getSeconds());
      case 'SSS':
        return padLeft(date.getMilliseconds(), 3);
      case 'Z':
        return timezone(TIMEZONE_OFFSET);
      case 'ZZ':
        return timezone(TIMEZONE_OFFSET, true);
      default:
        return matched;
    }
  });
}
