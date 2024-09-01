import { SxProps, Theme } from '@mui/material';

export const convertSxToArr = (sx: SxProps<Theme>): object[] => (Array.isArray(sx) ? sx : [sx]);
