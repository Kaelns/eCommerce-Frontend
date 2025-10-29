export function splitIntoTwoByWhitespaceIndex(str: string, fromIndex: number): [string, string] {
  if (str.length < fromIndex) {
    return [str, ''];
  }

  const whitespaceIndex = str.indexOf(' ', fromIndex);

  const firstPart = str.slice(0, whitespaceIndex);
  const secondPart = str.slice(whitespaceIndex);

  return [firstPart, secondPart];
}
