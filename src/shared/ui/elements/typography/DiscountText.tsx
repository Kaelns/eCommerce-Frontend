import type { TypographyProps } from '@mui/material';
import type { SxStylesObj } from '@/shared/model/types';

import { Text } from '@/shared/ui/elements/typography/Text';
import { concatSx } from '@/shared/lib/helpers';
import { ZIndex } from '@/shared/model/data';

const sxText: SxStylesObj = {
  position: 'absolute',
  zIndex: ZIndex.BUTTON,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  width: '4rem',
  height: '4rem',
  borderRadius: '100%',
  bgcolor: 'error.light'
};

interface DiscountTextProps extends TypographyProps {
  discount: number;
  isPositioned?: boolean;
}

export function DiscountText({ isPositioned = false, discount, sx }: DiscountTextProps) {
  return (
    !!discount && (
      <Text isPositioned={isPositioned} variant="subtitle2" sx={concatSx(sxText, sx)}>
        {discount}%
      </Text>
    )
  );
}
