import type { StackProps } from '@mui/system';

export function getMaxMuiHeight(height: StackProps['height']): number | undefined {
  switch (typeof height) {
    case 'number':
      return height as number;
    case 'string':
      return parseInt(height as string, 10);
    case 'object': {
      const numValues = Object.values(height).filter((value) => typeof value === 'number');
      return numValues.length ? Math.max(...numValues) : undefined;
    }
    default:
      return undefined;
  }
}
