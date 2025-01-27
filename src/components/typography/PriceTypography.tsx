import type { TypographyProps } from '@mui/material';
import type { SxStyles } from '@/shared/types/types';
import { Typography } from '@mui/material';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';
import { MONEY_SYMBOL } from '@/services/ecommerce-api';

const sxStyles: SxStyles = {
  text: {
    px: 0.3
  },
  discountText: {
    bgcolor: 'error.light',
    borderRadius: 1
  }
};

interface PriceTypographyProps extends TypographyProps {
  price: number;
  priceType: 'discount' | 'price';
}

export function PriceTypography({ priceType, price, sx = {} }: PriceTypographyProps): React.ReactNode {
  return (
    <Typography variant="subtitle2" sx={[sxStyles.text, priceType === 'discount' && sxStyles.discountText, ...convertSxToArr(sx)]}>
      {price} {MONEY_SYMBOL}
    </Typography>
  );
}
