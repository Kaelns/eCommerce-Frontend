import { Typography, TypographyProps } from '@mui/material';
import { MONEY_SYMBOL } from '@/services/ECommerceInitApi.constants';
import { PriceType } from '@/components/typography/Price/Price.interface';

import styles from './Price.module.scss';

interface IPriceProps extends TypographyProps {
  price: number;
  priceType: PriceType;
  className?: string;
}

export function Price({ priceType, price, className, sx = {} }: IPriceProps): React.ReactNode {
  const discountStyle = priceType === PriceType.DISCOUNT && styles.discountedPrice;

  return (
    <Typography variant="subtitle2" className={`${styles.price} ${className} ${discountStyle}`} sx={sx}>
      {price} {MONEY_SYMBOL}
    </Typography>
  );
}
