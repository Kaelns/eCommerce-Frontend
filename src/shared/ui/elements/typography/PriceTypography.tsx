import type { TypographyProps } from '@mui/material';
import type { SxStyles } from '@/shared/model/types/types';

import { Typography } from '@mui/material';

import { selectCurrency } from '@/entities/user';

import { useAppSelector } from '@/shared/lib/redux/redux.hooks';
import { convertSxToArr } from '@/shared/lib/helpers/arrays/convertSxToArr';
import currenciesObj from '@/shared/model/data/ISO4217/ISO4217-currencies.json';

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
  const currency = useAppSelector(selectCurrency);

  return (
    <Typography variant="subtitle2" sx={[sxStyles.text, priceType === 'discount' && sxStyles.discountText, ...convertSxToArr(sx)]}>
      {price} {currenciesObj[currency].symbol}
    </Typography>
  );
}
