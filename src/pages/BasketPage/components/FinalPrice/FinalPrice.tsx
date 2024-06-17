import { Box, Typography } from '@mui/material';
import { IFinalPriceProps } from '@/pages/BasketPage/components/FinalPrice/FinalPrice.interface';
import styles from './FinalPrice.module.scss';

export function FinalPrice({ finalPrice }: IFinalPriceProps): React.ReactNode {
  return (
    <Box className={styles.container}>
      <Typography variant="subtitle2">Result: </Typography>
      <Typography variant="subtitle2">{finalPrice}</Typography>
    </Box>
  );
}
