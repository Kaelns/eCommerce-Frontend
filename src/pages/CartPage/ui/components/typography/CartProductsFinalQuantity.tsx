import type { TypographyProps } from '@mui/system';

import { Typography } from '@mui/material';

import { selectCartProductQuantity } from '@/entities/cart';

import { useAppSelector } from '@/shared/lib/redux';

export function CartProductsFinalQuantity(props: TypographyProps) {
  const productQuantity = useAppSelector(selectCartProductQuantity);

  return (
    <Typography variant="h3" {...props}>
      {productQuantity} products
    </Typography>
  );
}
