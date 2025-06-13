import type { StackProps } from '@mui/system';

export function getMaxMuiHeight(height: StackProps['height']): number | undefined {
  switch (typeof height) {
    case 'number':
      return height as number;
    case 'string':
      return parseInt(height as string, 10);
    case 'object':
      return Math.max(...Object.values(height as Record<string, number>));
    default:
      return undefined;
  }
}
