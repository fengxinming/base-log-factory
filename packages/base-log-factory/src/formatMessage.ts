function returnValue(value: string): string {
  return value;
}

export default function formatMessage(
  message: any[],
  callback: (value: string) => string = returnValue
): string {
  return message.reduce((prev: string, curr, index) => {
    let msg: string;

    if (curr instanceof Error) {
      msg = curr.stack || curr.message;
    }
    else if (typeof curr === 'object') {
      msg = JSON.stringify(curr);
    }
    else {
      msg = String(curr);
    }

    msg = callback(msg);

    return index === 0 ? msg : `${prev} ${msg}`;
  }, '');
}
