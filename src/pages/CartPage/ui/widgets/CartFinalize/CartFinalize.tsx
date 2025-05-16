import type { PaperProps } from '@mui/material';
import type { SxStylesNotArr } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Paper, Button, Tooltip } from '@mui/material';

import { selectCountry, UserPriceText } from '@/entities/user';
import { selectCartFinalPriceObj, selectCartProductQuantity } from '@/entities/cart';

import { Text, BoldText, TitleText } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';
import { convertSxToArr } from '@/shared/lib/helpers';

const sxContainer: SxStylesNotArr = {
  gap: '0.75rem'
};

export function CartFinalize({ sx = {}, ...props }: PaperProps) {
  const country = useAppSelector(selectCountry);

  const productQuantity = useAppSelector(selectCartProductQuantity);
  const { finalPrice, finalPriceWithDiscount, percentageDiscount } = useAppSelector((state) => selectCartFinalPriceObj(state, country));

  return (
    <Paper sx={[sxContainer, ...convertSxToArr(sx)]} {...props}>
      <TitleText color="primary">Summary:</TitleText>
      <Stack direction="row" justifyContent="space-between">
        <Text variant="h4">Price, {productQuantity} products:</Text>
        <UserPriceText variant="h4">{finalPrice}</UserPriceText>
      </Stack>
      {!!percentageDiscount && (
        <Stack direction="row" justifyContent="space-between">
          <Text variant="h4">Discount:</Text>
          <Text variant="h4">{percentageDiscount} %</Text>
        </Stack>
      )}
      <Stack direction="row" justifyContent="space-between">
        <BoldText variant="h3">Total:</BoldText>
        <UserPriceText variant="h3" fontWeight="bold">
          {finalPriceWithDiscount}
        </UserPriceText>
      </Stack>

      <Tooltip placement="top" title="Unavailable now">
        <Button variant="contained" size="large">
          Order
        </Button>
      </Tooltip>
    </Paper>
  );
}
