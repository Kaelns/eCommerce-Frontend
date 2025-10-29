import type { TypographyOwnProps } from '@mui/material';
import type { SxStylesMap, PropsWithChildren } from '@/shared/model/types';

import { Text } from '@/shared/ui/elements/typography/Text';
import { concatSx } from '@/shared/lib/helpers';

const sxStyles: SxStylesMap = {
  text: {
    px: 0.3
  },
  discountText: {
    bgcolor: 'error.light',
    borderRadius: 1
  }
};

export interface PriceTextProps extends TypographyOwnProps {
  currencySymbol: string;
  isPositioned?: boolean;
  priceType?: 'discount' | 'price';
}

export function PriceText({
  children,
  isPositioned = false,
  currencySymbol,
  priceType = 'price',
  variant = 'subtitle2',
  sx,
  ...props
}: PropsWithChildren<PriceTextProps>) {
  return (
    <Text
      isPositioned={isPositioned}
      variant={variant}
      sx={concatSx(sxStyles.text, priceType === 'discount' && sxStyles.discountText, sx)}
      {...props}
    >
      {children} {currencySymbol}
    </Text>
  );
}
