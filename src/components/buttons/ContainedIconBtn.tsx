import { PropsWithChildren, SxPropsObj } from '@/shared/types/types';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';
import { IconButton, IconButtonProps } from '@mui/material';

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
