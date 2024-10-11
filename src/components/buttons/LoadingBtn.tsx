import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material';
import { CircularProgress } from '@mui/material';
import type { PropsWithChildren, SxPropsObj } from '@/shared/types';
import { convertSxToArr } from '@/utils/convert/convertSxToArr';

const sxBtn: SxPropsObj = {
  display: 'flex',
  justifyContent: 'center',
  textTransform: 'none'
};

type LoadingBtnProps = ButtonProps & {
  loading: boolean;
};

//  FIXME such a mui btn already exists
export function LoadingBtn({
  loading,
  children,
  sx = {},
  ...props
}: PropsWithChildren<LoadingBtnProps>): React.ReactNode {
  return (
    <Button sx={[sxBtn, ...convertSxToArr(sx)]} {...props}>
      {loading ? <CircularProgress color="primary" /> : children}
    </Button>
  );
}
