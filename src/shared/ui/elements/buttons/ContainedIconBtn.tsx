import type { IconButtonProps } from '@mui/material';
import type { SxPropsObj, PropsWithChildren } from '@/shared/model/types/types';

import { IconButton } from '@mui/material';

import { convertSxToArr } from '@/shared/lib/helpers/arrays/convertSxToArr';

const sxBtnContained: SxPropsObj = {
  backgroundColor: 'primary.main',
  color: 'white',
  '&:hover': {
    backgroundColor: 'primary.dark'
  }
};

export function ContainedIconBtn({ children, sx = {}, ...props }: PropsWithChildren<IconButtonProps>) {
  return (
    <IconButton sx={[sxBtnContained, ...convertSxToArr(sx)]} {...props}>
      {children}
    </IconButton>
  );
}
