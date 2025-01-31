import type { ButtonProps } from '@mui/material';
import type { SxPropsObj, PropsWithChildren } from '@/shared/types/types';

import Button from '@mui/material/Button';

import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

import { ButtonVariant } from '@/shared/data/enums';

const sxBtn: SxPropsObj = { textTransform: 'none' };

export function ContainedBtn({ children, variant = ButtonVariant.CONTAINED, sx = {}, ...props }: PropsWithChildren<ButtonProps>): React.ReactNode {
  return (
    <Button variant={variant} sx={[sxBtn, ...convertSxToArr(sx)]} {...props}>
      {children}
    </Button>
  );
}
