import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material';
import type { PropsWithChildren, SxPropsObj } from '@/shared/types';
import { ButtonVariant } from '@/shared/constants';
import { convertSxToArr } from '@/utils/convert/convertSxToArr';

const sxBtn: SxPropsObj = { textTransform: 'none' };

export function BtnContained({
  children,
  variant = ButtonVariant.CONTAINED,
  sx = {},
  ...props
}: PropsWithChildren<ButtonProps>): React.ReactNode {
  return (
    <Button variant={variant} sx={[sxBtn, ...convertSxToArr(sx)]} {...props}>
      {children}
    </Button>
  );
}
