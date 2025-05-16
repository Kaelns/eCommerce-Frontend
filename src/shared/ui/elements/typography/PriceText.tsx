import type { TypographyOwnProps } from '@mui/material';
import type { SxStyles, PropsWithChildren } from '@/shared/model/types';

import { Text } from '@/shared/ui/elements/typography/Text';
import { convertSxToArr } from '@/shared/lib/helpers';

const sxStyles: SxStyles = {
  text: {
    px: 0.3
  },
  discountText: {
    bgcolor: 'error.light',
    borderRadius: 1
  }
};

export interface PriceTextProps extends TypographyOwnProps {
  currency: string;
  isPositioned?: boolean;
  priceType?: 'discount' | 'price';
}

export function PriceText({
  children,
  isPositioned = false,
  currency,
  priceType = 'price',
  variant = 'subtitle2',
  sx = {},
  ...props
}: PropsWithChildren<PriceTextProps>) {
  return (
    <Text
      isPositioned={isPositioned}
      variant={variant}
      sx={[sxStyles.text, priceType === 'discount' && sxStyles.discountText, ...convertSxToArr(sx)]}
      {...props}
    >
      {children} {currency}
    </Text>
  );
}
