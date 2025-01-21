import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import type { PropsWithChildren } from '@/shared/types/types';

export function BoldTypography({ children, ...props }: PropsWithChildren<TypographyProps>): React.ReactNode {
  return (
    <Typography fontWeight="bold" {...props}>
      {children}
    </Typography>
  );
}
