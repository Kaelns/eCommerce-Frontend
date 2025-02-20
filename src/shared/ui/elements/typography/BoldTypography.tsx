import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types/types';

import { Typography } from '@mui/material';

export function BoldTypography({ children, ...props }: PropsWithChildren<TypographyProps>) {
  return (
    <Typography fontWeight="bold" {...props}>
      {children}
    </Typography>
  );
}
