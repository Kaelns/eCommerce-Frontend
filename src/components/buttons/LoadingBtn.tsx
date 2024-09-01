import Button from '@mui/material/Button';
import { ButtonProps, CircularProgress } from '@mui/material';
import { PropsWithChildren, SxPropsObj } from '@/shared/types';
import { convertSxToArr } from '@/utils/convertSxToArr';

const sxBtn: SxPropsObj = {
  display: 'flex',
  justifyContent: 'center',
  textTransform: 'none'
};

type LoadingBtnProps = ButtonProps & {
  loading: boolean;
};

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
