import { Typography } from '@mui/material';
import { IDiscountProps } from '@/components/typography/Discount/Discount.interface';

import styles from './Discount.module.scss';

export function Discount({ discount, className }: IDiscountProps): React.ReactNode {
  return (
    !!discount && (
      <Typography variant="subtitle2" className={`${styles.discount} ${className}`}>
        {discount}%
      </Typography>
    )
  );
}
