import type { Theme } from '@mui/system';
import type { SxPropsObj } from '@/shared/model/types';
import type { SxProps, TypographyOwnProps } from '@mui/material';

import { Stack } from '@mui/system';

import { BoldTypography, PriceTypography } from '@/shared/ui/elements';

const sxPrice: SxPropsObj = { textDecoration: 'crossedPrice' };

interface FullPriceTypographyProps extends TypographyOwnProps {
  text?: string;
  price: number;
  discount: number;
  discountedPrice: number;
  sxContainer?: SxProps<Theme>;
}

export function FullPriceTypography({
  text = 'Price: ',
  variant = 'body1',
  price,
  discount,
  discountedPrice,
  sxContainer
}: FullPriceTypographyProps) {
  return (
    <Stack direction="row" alignItems="center" gap={1} sx={sxContainer}>
      <BoldTypography variant={variant}>{text}</BoldTypography>
      <PriceTypography variant={variant} price={price} priceType="price" sx={[!discount && sxPrice]} />
      {!!discount && <PriceTypography variant={variant} price={discountedPrice} priceType="discount" />}
    </Stack>
  );
}
