import type { ButtonProps } from '@mui/material';
import type { SxPropsObj, PropsWithChildren } from '@/shared/model/types';

import Button from '@mui/material/Button';

import { convertSxToArr } from '@/shared/lib/helpers';
import { ButtonVariant } from '@/shared/model/data';

const sxBtn: SxPropsObj = { textTransform: 'none' };

export function CasualBtn({ children, variant = ButtonVariant.TEXT, sx = {}, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <Button variant={variant} sx={[sxBtn, ...convertSxToArr(sx)]} {...props}>
      {children}
    </Button>
  );
}
