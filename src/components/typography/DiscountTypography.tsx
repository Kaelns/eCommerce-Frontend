import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import { convertSxToArr } from '@/utils/convert/convertSxToArr';
import type { SxPropsObj } from '@/shared/types/types';

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

export function DiscountTypography({ discount, sx = {} }: IDiscountProps): React.ReactNode {
  return (
    !!discount && (
      <Typography variant="subtitle2" sx={[sxText, ...convertSxToArr(sx)]}>
        {discount}%
      </Typography>
    )
  );
}
