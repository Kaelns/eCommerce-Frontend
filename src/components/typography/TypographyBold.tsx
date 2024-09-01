import { Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from '@/shared/types';

export function TypographyBold({ children, ...props }: PropsWithChildren<TypographyProps>): React.ReactNode {
  return (
    <Typography fontWeight="bold" {...props}>
      {children}
    </Typography>
  );
}
