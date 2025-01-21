import { Stack } from '@mui/system';
import { BoldTypography } from '@/components/typography/BoldTypography';
import { PriceTypography } from '@/components/typography/PriceTypography';
import type { SxPropsObj } from '@/shared/types/types';

const sxPrice: SxPropsObj = { textDecoration: 'crossedPrice' };

interface ICardPriceProps {
  text?: string;
  price: number;
  discount: number;
  discountedPrice: number;
}

export function CardPriceTypography({ text = 'Price: ', price, discount, discountedPrice }: ICardPriceProps): React.ReactNode {
  return (
    <Stack direction="row" alignItems="center" gap={1} mb={0.6}>
      <BoldTypography variant="subtitle2">{text}</BoldTypography>
      <PriceTypography price={price} priceType="price" sx={[!discount && sxPrice]} />
      {!!discount && <PriceTypography price={discountedPrice} priceType="discount" />}
    </Stack>
  );
}
