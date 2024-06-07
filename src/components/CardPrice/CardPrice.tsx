import { Box, Typography } from '@mui/material';
import { ICardPriceProps } from '@/components/CardPrice/CardPrice.interface';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { MONEY_SYMBOL } from '@/services/ECommerceInitApi.constants';

import styles from './CardPrice.module.scss';

export function CardPrice({ price, discount, discounted }: ICardPriceProps): React.ReactNode {
  return (
    <Box className={styles.priceContainer}>
      <TextBold variant="subtitle2">Price: </TextBold>
      <Typography variant="subtitle2" className={discount ? styles.priceDisabled : styles.price}>
        {price} {MONEY_SYMBOL}
      </Typography>
      {discount ? (
        <Typography variant="subtitle2" className={styles.discounted}>
          {discounted} {MONEY_SYMBOL}
        </Typography>
      ) : (
        ''
      )}
    </Box>
  );
}
