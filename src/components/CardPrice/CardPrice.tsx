import { Box } from '@mui/material';
import { ICardPriceProps } from '@/components/CardPrice/CardPrice.interface';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { PriceType } from '@/components/typography/Price/Price.interface';
import { Price } from '@/components/typography/Price/Price';

import styles from './CardPrice.module.scss';

export function CardPrice({ text = 'Price: ', price, discount, discountedPrice }: ICardPriceProps): React.ReactNode {
  const crossedPrice = discount ? styles.priceCrossed : '';
  return (
    <Box className={styles.priceContainer}>
      <TextBold variant="subtitle2">{text}</TextBold>
      <Price price={price} priceType={PriceType.PRICE} className={crossedPrice} />
      {!!discount && <Price price={discountedPrice} priceType={PriceType.DISCOUNT} />}
    </Box>
  );
}
