import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material';
import type { SxStylesArr, SxStylesNotArr } from '@/shared/model/types';

export function concatSx(...sxProps: (boolean | null | SxProps<Theme> | undefined)[]): SxStylesArr {
  const result = [];

  for (const sx of sxProps) {
    if (Array.isArray(sx)) {
      result.push(...sx);
    } else if ((typeof sx === 'object' || typeof sx === 'function') && sx !== null) {
      result.push(sx as SxStylesNotArr);
    }
  }

  return result as SxStylesArr;
}
