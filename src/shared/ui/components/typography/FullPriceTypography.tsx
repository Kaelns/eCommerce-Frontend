import type { SxPropsObj } from '@/shared/model/types/types';

import { Stack } from '@mui/system';

import { BoldTypography } from '@/shared/ui/elements/typography/BoldTypography';
import { PriceTypography } from '@/shared/ui/elements/typography/PriceTypography';

const sxPrice: SxPropsObj = { textDecoration: 'crossedPrice' };

interface FullPriceTypographyProps {
  text?: string;
  price: number;
  discount: number;
  discountedPrice: number;
}

export function FullPriceTypography({ text = 'Price: ', price, discount, discountedPrice }: FullPriceTypographyProps) {
  return (
    <Stack direction="row" alignItems="center" gap={1} mb={0.6}>
      <BoldTypography variant="subtitle2">{text}</BoldTypography>
      <PriceTypography price={price} priceType="price" sx={[!discount && sxPrice]} />
      {!!discount && <PriceTypography price={discountedPrice} priceType="discount" />}
    </Stack>
  );
}
