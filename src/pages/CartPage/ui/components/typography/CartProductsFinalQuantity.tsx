import { Typography } from '@mui/material';

import { selectCartProductQuantity } from '@/entities/cart';

import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

export function CartProductsFinalQuantity() {
  const productQuantity = useAppSelector(selectCartProductQuantity);

  return <Typography>{productQuantity} products</Typography>;
}
