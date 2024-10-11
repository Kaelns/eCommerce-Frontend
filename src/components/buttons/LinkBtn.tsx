import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';
import type { PropsWithChildren, SxPropsObj } from '@/shared/types';
import { convertSxToArr } from '@/utils/convert/convertSxToArr';

const sxBtn: SxPropsObj = { textTransform: 'none' };

interface ILinkProps extends ButtonProps {
  navigateTo: () => void;
}

export function LinkBtn({ navigateTo, children, sx = {}, ...props }: PropsWithChildren<ILinkProps>): React.ReactNode {
  return (
    <Button variant="text" onClick={navigateTo} sx={[sxBtn, ...convertSxToArr(sx)]} {...props}>
      {children}
    </Button>
  );
}
