import type { SxStyles } from '@/shared/model/types';
import type { TypographyOwnProps } from '@mui/material';

import { Typography } from '@mui/material';

import { selectCurrency } from '@/entities/user';

import { useAppSelector } from '@/shared/lib/redux';
import { convertSxToArr } from '@/shared/lib/helpers';
import { isoCurrencies } from '@/shared/model/data';

const sxStyles: SxStyles = {
  text: {
    px: 0.3
  },
  discountText: {
    bgcolor: 'error.light',
    borderRadius: 1
  }
};

interface PriceTypographyProps extends TypographyOwnProps {
  price: number;
  priceType: 'discount' | 'price';
}

export function PriceTypography({ priceType, price, variant = 'subtitle2', sx = {} }: PriceTypographyProps) {
  const currency = useAppSelector(selectCurrency);

  return (
    <Typography variant={variant} sx={[sxStyles.text, priceType === 'discount' && sxStyles.discountText, ...convertSxToArr(sx)]}>
      {price} {isoCurrencies[currency].symbol}
    </Typography>
  );
}
