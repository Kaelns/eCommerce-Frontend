import type { Theme } from '@mui/system';
import type { SxStyles } from '@/shared/model/types';
import type { SxProps, TypographyOwnProps } from '@mui/material';

import { Stack } from '@mui/system';

import { BoldTypography, PriceTypography } from '@/shared/ui/elements';

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
  const isDiscounted = discount > 0;

  return (
    <Stack direction="row" alignItems="center" gap={1} sx={sxContainer}>
      <BoldTypography variant={variant}>{text}</BoldTypography>
      <PriceTypography variant={variant} sx={[isDiscounted && sxStyles.price]}>
        {price}
      </PriceTypography>
      {isDiscounted && (
        <PriceTypography variant={variant} priceType="discount">
          {discountedPrice}
        </PriceTypography>
      )}
    </Stack>
  );
}
