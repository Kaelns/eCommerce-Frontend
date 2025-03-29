import type { StackProps } from '@mui/system';

import { Stack } from '@mui/system';
import { Paper, Typography } from '@mui/material';

import { selectCountry } from '@/entities/user';
import { selectCartFinalPriceObj, selectCartProductQuantity } from '@/entities/cart';

import { useAppSelector } from '@/shared/lib/redux';

export function CartFinalize(props: StackProps) {
  const country = useAppSelector(selectCountry);

  const productQuantity = useAppSelector(selectCartProductQuantity);
  const { finalPrice, finalPriceWithDiscount, percentageDiscount } = useAppSelector((state) => selectCartFinalPriceObj(state, country));

  return (
    <Stack component={<Paper />} gap={1} {...props}>
      <Stack justifyContent={'space-between'}>
        <Typography variant="h5">Price, {productQuantity} products:</Typography>
        <Typography>{finalPrice}</Typography>
      </Stack>
      {!!percentageDiscount && (
        <Stack justifyContent={'space-between'}>
          <Typography variant="h5">Discount:</Typography>
          <Typography>{percentageDiscount}</Typography>
        </Stack>
      )}
      <Stack justifyContent={'space-between'}>
        <Typography variant="h5">Total:</Typography>
        <Typography>{finalPriceWithDiscount}</Typography>
      </Stack>
    </Stack>
  );
}
