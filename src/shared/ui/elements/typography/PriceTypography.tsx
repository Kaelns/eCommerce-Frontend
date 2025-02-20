import type { TypographyProps } from '@mui/material';
import type { SxStyles } from '@/shared/model/types/types';

import { Typography } from '@mui/material';

import { ProductConsts } from '@/entities/product';

import { convertSxToArr } from '@/shared/lib/helpers/arrays/convertSxToArr';

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

export function PriceTypography({ priceType, price, sx = {} }: PriceTypographyProps) {
  return (
    <Typography variant="subtitle2" sx={[sxStyles.text, priceType === 'discount' && sxStyles.discountText, ...convertSxToArr(sx)]}>
      {price} {ProductConsts.MONEY_SYMBOL}
    </Typography>
  );
}
