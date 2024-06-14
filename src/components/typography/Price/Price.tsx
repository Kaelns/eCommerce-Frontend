import { Typography } from '@mui/material';
import { IPriceProps, PriceType } from '@/components/typography/Price/Price.interface';
import { MONEY_SYMBOL } from '@/services/ECommerceInitApi.constants';

import styles from './Price.module.scss';

export function Price({ priceType, price, className }: IPriceProps): React.ReactNode {
  const discountStyle = priceType === PriceType.DISCOUNT && styles.discountedPrice;

  return (
    <Typography variant="subtitle2" className={`${styles.price} ${className} ${discountStyle}`}>
      {price} {MONEY_SYMBOL}
    </Typography>
  );
}
