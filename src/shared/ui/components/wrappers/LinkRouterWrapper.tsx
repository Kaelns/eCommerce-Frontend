import type { SxProps, LinkProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types/types';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';

import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { convertSxToArr } from '@/shared/lib/helpers/arrays/convertSxToArr';

const sxLink: SxProps = {
  color: 'inherit',
  textDecoration: 'inherit'
};

//  TODO create link that allows to copy text inside without redirection

export function LinkRouterWrapper({ to, children, sx = {}, ...props }: PropsWithChildren<LinkProps & RouterLinkProps>) {
  return (
    <Link to={to} component={RouterLink} sx={[sxLink, ...convertSxToArr(sx)]} {...props}>
      {children}
    </Link>
  );
}
