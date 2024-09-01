import { Typography, TypographyProps } from '@mui/material';
import { MONEY_SYMBOL } from '@/services/ECommerceInitApi.constants';
import { convertSxToArr } from '@/utils/convertSxToArr';
import { SxStyles } from '@/shared/types';

const sxStyles: SxStyles = {
  text: {
    px: 0.3
  },
  discountText: {
    bgcolor: 'error.light',
    borderRadius: 1
  }
};

interface IPriceProps extends TypographyProps {
  price: number;
  priceType: 'discount' | 'price';
}

export function Price({ priceType, price, sx = {} }: IPriceProps): React.ReactNode {
  return (
    <Typography
      variant="subtitle2"
      sx={[sxStyles.text, priceType === 'discount' && sxStyles.discountText, ...convertSxToArr(sx)]}
    >
      {price} {MONEY_SYMBOL}
    </Typography>
  );
}
