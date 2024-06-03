import { Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export function TextBold({ children, ...props }: PropsWithChildren<TypographyProps>): React.ReactNode {
  return (
    <Typography sx={{ fontWeight: 'bold' }} {...props}>
      {children}
    </Typography>
  );
}
