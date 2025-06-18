export function convertKeyToName(key: string, separator = '-'): string {
  const string = key.toLowerCase().split(separator).join(' ');
  return string.charAt(0).toUpperCase() + string.slice(1);
}
