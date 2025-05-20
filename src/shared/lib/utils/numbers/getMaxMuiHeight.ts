import type { StackProps } from '@mui/system';

export function getMaxMuiHeight(height: StackProps['height']) {
  if (typeof height === 'number') {
    return height;
  }
  if (typeof height === 'string') {
    return parseInt(height, 10);
  }
  if (typeof height === 'object' && height !== null) {
    return Math.max(...Object.values(height as Record<string, number>));
  }
  return undefined;
}
