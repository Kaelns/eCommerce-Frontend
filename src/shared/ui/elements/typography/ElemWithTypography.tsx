import type { Theme, SxProps } from '@mui/system';
import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

interface ElemWithTypographyProps extends TypographyProps {
  isAfter?: boolean;
  Node: React.ReactNode;
  sxContainer?: SxProps<Theme>;
}

export function ElemWithTypography({
  children,
  Node,
  isAfter = false,
  sxContainer = {},
  ...props
}: PropsWithChildren<ElemWithTypographyProps>) {
  return (
    <Stack direction="row" alignItems="center" gap={{ zero: 0.75, tablet: 1 }} sx={sxContainer}>
      {!isAfter && Node}
      <Typography {...props}>{children}</Typography>
      {isAfter && Node}
    </Stack>
  );
}
