import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material';
import type { SxStylesArr, SxStylesNotArr } from '@/shared/model/types';

export function concatSx(...sxProps: (boolean | SxProps<Theme>)[]): SxStylesArr {
  const result = [];

  for (const sx of sxProps) {
    if (Array.isArray(sx)) {
      result.push(...sx);
    } else if (typeof sx !== 'boolean') {
      result.push(sx as SxStylesNotArr);
    }
  }

  return result as SxStylesArr;
}
