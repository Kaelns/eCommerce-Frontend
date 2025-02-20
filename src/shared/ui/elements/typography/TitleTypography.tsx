import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types/types';

import { Typography } from '@mui/material';

export function TitleTypography({ children, variant = 'h5', ...props }: PropsWithChildren<TypographyProps>) {
  return (
    <Typography variant={variant} fontWeight="bold" {...props}>
      {children}
    </Typography>
  );
}
