import { Typography } from '@mui/material';
import styles from './Discount.module.scss';

export function Discount({ discount, className }: { discount: number; className: string }): React.ReactNode {
  return discount ? (
    <Typography variant="subtitle2" className={`${styles.discount} ${className}`}>
      {discount}%
    </Typography>
  ) : (
    ''
  );
}
