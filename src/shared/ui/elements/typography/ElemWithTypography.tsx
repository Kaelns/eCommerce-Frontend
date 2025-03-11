import type { Theme, SxProps } from '@mui/system';
import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

interface ElemWithTypographyProps extends TypographyProps {
  isAfter?: boolean;
  // TODO elem to Component
  elem: React.ReactNode;
  sxContainer?: SxProps<Theme>;
}

export function ElemWithTypography({
  elem,
  children,
  isAfter = false,
  sxContainer = {},
  ...props
}: PropsWithChildren<ElemWithTypographyProps>) {
  return (
    <Stack direction="row" alignItems="center" gap={{ zero: 0.75, tablet: 1 }} sx={sxContainer}>
      {!isAfter && elem}
      <Typography {...props}>{children}</Typography>
      {isAfter && elem}
    </Stack>
  );
}
