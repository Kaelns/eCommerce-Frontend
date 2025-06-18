import type { ButtonProps } from '@mui/material';
import type { SxStylesObj, PropsWithChildren } from '@/shared/model/types';

import Button from '@mui/material/Button';

import { concatSx } from '@/shared/lib/helpers';
import { ButtonVariant } from '@/shared/model/data';

const sxBtn: SxStylesObj = { textTransform: 'none' };

export function ContainedBtn({ children, variant = ButtonVariant.CONTAINED, sx, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <Button variant={variant} sx={concatSx(sxBtn, sx)} {...props}>
      {children}
    </Button>
  );
}
