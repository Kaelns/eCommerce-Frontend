import { Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export function Title({ children, variant = 'h5', ...props }: PropsWithChildren<TypographyProps>): React.ReactNode {
  return (
    <Typography variant={variant} {...props} sx={{ fontWeight: 'bold' }}>
      {children}
    </Typography>
  );
}
