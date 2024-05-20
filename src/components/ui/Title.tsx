import { Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps extends TypographyProps {}

export function Title({ children, variant = 'h5', sx, ...props }: PropsWithChildren<IProps>): JSX.Element {
  return (
    <Typography variant={variant} {...props} sx={{ fontWeight: 'bold', ...sx }}>
      {children}
    </Typography>
  );
}
