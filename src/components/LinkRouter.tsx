import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps, SxProps } from '@mui/material';
import { Link } from '@mui/material';
import type { PropsWithChildren } from '@/shared/types';
import { convertSxToArr } from '@/utils/convert/convertSxToArr';

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
