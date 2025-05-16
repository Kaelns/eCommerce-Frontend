import type { Theme, SxProps } from '@mui/material';

export const convertSxToArr = (sx: SxProps<Theme>): Record<string, unknown>[] => (Array.isArray(sx) ? sx : [sx as Record<string, unknown>]);
