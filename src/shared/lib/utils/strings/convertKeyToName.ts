//  TODO better to use name not key
export function convertKeyToName(key: string): string {
  const string = key.toLowerCase().split('-').join(' ');
  return string.charAt(0).toUpperCase() + string.slice(1);
}
