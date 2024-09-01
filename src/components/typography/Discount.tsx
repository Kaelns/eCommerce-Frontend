import { Typography, TypographyProps } from '@mui/material';
import { convertSxToArr } from '@/utils/convertSxToArr';
import { SxPropsObj } from '@/shared/types';

const sxText: SxPropsObj = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '4rem',
  height: '4rem',
  borderRadius: '100%',
  zIndex: '100',
  bgcolor: 'error.light'
};

interface IDiscountProps extends TypographyProps {
  discount: number;
}

export function Discount({ discount, sx = {} }: IDiscountProps): React.ReactNode {
  return (
    !!discount && (
      <Typography variant="subtitle2" sx={[sxText, ...convertSxToArr(sx)]}>
        {discount}%
      </Typography>
    )
  );
}
