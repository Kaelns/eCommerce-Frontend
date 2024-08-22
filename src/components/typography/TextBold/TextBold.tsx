import { Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export function TextBold({ children, sx = {}, ...props }: PropsWithChildren<TypographyProps>): React.ReactNode {
  return (
    <Typography sx={{ fontWeight: 'bold', ...sx }} {...props}>
      {children}
    </Typography>
  );
}
