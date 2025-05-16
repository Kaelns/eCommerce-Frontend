import type { Theme } from '@mui/system';
import type { SxStyles } from '@/shared/model/types';
import type { SxProps, TypographyOwnProps } from '@mui/material';

import { Stack } from '@mui/system';

import { BoldText, PriceText } from '@/shared/ui/elements';

const sxStyles: SxStyles = {
  price: {
    position: 'relative',
    textDecoration: 'line-through'
  },

  crossedPrice: {
    position: 'absolute',
    width: 1,
    height: 1,
    color: 'black',
    clipPath: 'polygon(100% 0 , 100% 12% ,0% 100% , 0% 88%)'
  }
};

export interface FullPriceTextProps extends TypographyOwnProps {
  text?: string;
  price: number;
  discount: number;
  currency: string;
  isPositioned?: boolean;
  discountedPrice: number;
  sxContainer?: SxProps<Theme>;
}

export function FullPriceText({
  isPositioned = false,
  text = 'Price: ',
  variant = 'body1',
  price,
  discount,
  currency,
  discountedPrice,
  sxContainer
}: FullPriceTextProps) {
  const isDiscounted = discount > 0;

  return (
    <Stack direction="row" alignItems="center" gap={1} sx={sxContainer}>
      <BoldText isPositioned={isPositioned} variant={variant}>
        {text}
      </BoldText>
      <PriceText isPositioned={isPositioned} currency={currency} variant={variant} sx={[isDiscounted && sxStyles.price]}>
        {price}
      </PriceText>
      {isDiscounted && (
        <PriceText isPositioned={isPositioned} currency={currency} variant={variant} priceType="discount">
          {discountedPrice}
        </PriceText>
      )}
    </Stack>
  );
}
