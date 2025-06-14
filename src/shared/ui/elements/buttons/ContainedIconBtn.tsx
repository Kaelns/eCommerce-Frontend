import type { IconButtonProps } from '@mui/material';
import type { SxStylesObj, PropsWithChildren } from '@/shared/model/types';

import { IconButton } from '@mui/material';

import { concatSx } from '@/shared/lib/helpers';

const sxBtnContained: SxStylesObj = {
  backgroundColor: 'primary.main',
  color: 'white',
  '&:hover': {
    backgroundColor: 'primary.dark'
  }
};

export function ContainedIconBtn({ children, sx = {}, ...props }: PropsWithChildren<IconButtonProps>) {
  return (
    <IconButton sx={concatSx(sxBtnContained, sx)} {...props}>
      {children}
    </IconButton>
  );
}
