import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/types/types';

import { Typography } from '@mui/material';

export function BoldTypography({ children, ...props }: PropsWithChildren<TypographyProps>): React.ReactNode {
  return (
    <Typography fontWeight="bold" {...props}>
      {children}
    </Typography>
  );
}
