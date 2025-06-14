import type { Theme, TypographyProps } from '@mui/material';
import type { SxStylesNotArr, PropsWithChildren } from '@/shared/model/types';

import { Typography } from '@mui/material';

import { concatSx } from '@/shared/lib/helpers';
import { ZIndex } from '@/shared/model/data';

const sxText: SxStylesNotArr<Theme> = {
  width: 'fit-content',
  position: 'relative',
  zIndex: ZIndex.TEXT,
  cursor: 'text'
};

interface TextProps extends TypographyProps {
  isPositioned?: boolean;
}

export function Text({ children, isPositioned = false, sx = {}, ...props }: PropsWithChildren<TextProps>) {
  return (
    <Typography sx={concatSx(isPositioned && sxText, sx)} {...props}>
      {children}
    </Typography>
  );
}
