import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material';
import type { PropsWithChildren, SxPropsObj } from '@/shared/types';
import { ButtonVariant } from '@/shared/constants';
import { convertSxToArr } from '@/utils/convert/convertSxToArr';

const sxBtn: SxPropsObj = { textTransform: 'none' };

export function BtnCasual({
  children,
  variant = ButtonVariant.TEXT,
  sx = {},
  ...props
}: PropsWithChildren<ButtonProps>): React.ReactNode {
  return (
    <Button variant={variant} sx={[sxBtn, ...convertSxToArr(sx)]} {...props}>
      {children}
    </Button>
  );
}
