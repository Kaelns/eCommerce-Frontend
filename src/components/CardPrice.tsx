import { Stack } from '@mui/system';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { Price } from '@/components/typography/Price';
import { SxPropsObj } from '@/shared/types';

const sxPrice: SxPropsObj = { textDecoration: 'crossedPrice' };

interface ICardPriceProps {
  text?: string;
  price: number;
  discount: number;
  discountedPrice: number;
}

export function CardPrice({ text = 'Price: ', price, discount, discountedPrice }: ICardPriceProps): React.ReactNode {
  return (
    <Stack direction="row" alignItems="center" gap={1} mb={0.6}>
      <TypographyBold variant="subtitle2">{text}</TypographyBold>
      <Price price={price} priceType="price" sx={[!discount && sxPrice]} />
      {!!discount && <Price price={discountedPrice} priceType="discount" />}
    </Stack>
  );
}
