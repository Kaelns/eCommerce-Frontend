import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link, LinkProps, SxProps } from '@mui/material';
import { PropsWithChildren } from '@/shared/types';
import { convertSxToArr } from '@/utils/convertSxToArr';

const sxLink: SxProps = {
  color: 'inherit',
  textDecoration: 'inherit'
};

export function LinkRouter({
  to,
  children,
  sx = {},
  ...props
}: PropsWithChildren<LinkProps & RouterLinkProps>): React.ReactNode {
  return (
    <Link to={to} component={RouterLink} sx={[sxLink, ...convertSxToArr(sx)]} {...props}>
      {children}
    </Link>
  );
}
