import { Box } from '@mui/material';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { PriceType } from '@/components/typography/Price/Price.interface';
import { Price } from '@/components/typography/Price/Price';

interface ICardPriceProps {
  text?: string;
  price: number;
  discount: number;
  discountedPrice: number;
}

export function CardPrice({ text = 'Price: ', price, discount, discountedPrice }: ICardPriceProps): React.ReactNode {
  const crossedPrice = discount ? 'line-through' : 'none';
  return (
    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', mb: '0.6rem' }}>
      <TextBold variant="subtitle2">{text}</TextBold>
      <Price price={price} priceType={PriceType.PRICE} sx={{ textDecoration: crossedPrice }} />
      {!!discount && <Price price={discountedPrice} priceType={PriceType.DISCOUNT} />}
    </Box>
  );
}
