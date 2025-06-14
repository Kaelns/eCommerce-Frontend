import type { ButtonProps } from '@mui/material';
import type { SxStylesObj, PropsWithChildren } from '@/shared/model/types';

import Button from '@mui/material/Button';

import { concatSx } from '@/shared/lib/helpers';
import { ButtonVariant } from '@/shared/model/data';

const sxBtn: SxStylesObj = { textTransform: 'none' };

export function CasualBtn({ children, variant = ButtonVariant.TEXT, sx = {}, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <Button variant={variant} sx={concatSx(sxBtn, sx)} {...props}>
      {children}
    </Button>
  );
}
