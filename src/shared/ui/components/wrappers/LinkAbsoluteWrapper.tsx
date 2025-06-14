import type { LinkProps } from '@mui/material';
import type { SxStylesNotArr } from '@/shared/model/types';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';

import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { concatSx } from '@/shared/lib/helpers';
import { ZIndex } from '@/shared/model/data';

const sxLink: SxStylesNotArr = {
  color: 'inherit',
  textDecoration: 'inherit',
  position: 'absolute',
  zIndex: ZIndex.LINK,
  inset: 0
};

interface LinkAbsoluteWrapperProps extends LinkProps, RouterLinkProps {
  color?: LinkProps['color'];
}

export function LinkAbsoluteWrapper({ to, sx = {}, ...props }: LinkAbsoluteWrapperProps) {
  return <Link to={to} component={RouterLink} sx={concatSx(sxLink, sx)} {...props} />;
}
