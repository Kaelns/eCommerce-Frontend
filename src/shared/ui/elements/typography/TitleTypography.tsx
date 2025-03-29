import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types';

import { Typography } from '@mui/material';

export function TitleTypography({ children, variant = 'h3', ...props }: PropsWithChildren<TypographyProps>) {
  return (
    <Typography variant={variant} fontWeight="bold" {...props}>
      {children}
    </Typography>
  );
}
