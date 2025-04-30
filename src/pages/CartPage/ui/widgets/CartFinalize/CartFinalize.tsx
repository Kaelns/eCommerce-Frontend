import type { PaperProps } from '@mui/material';
import type { SxPropsNotArr } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Paper, Button, Tooltip, Typography } from '@mui/material';

import { selectCountry } from '@/entities/user';
import { selectCartFinalPriceObj, selectCartProductQuantity } from '@/entities/cart';

import { BoldTypography, PriceTypography, TitleTypography } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';
import { convertSxToArr } from '@/shared/lib/helpers';

const sxContainer: SxPropsNotArr = {
  gap: '0.75rem'
};

export function CartFinalize({ sx = {}, ...props }: PaperProps) {
  const country = useAppSelector(selectCountry);

  const productQuantity = useAppSelector(selectCartProductQuantity);
  const { finalPrice, finalPriceWithDiscount, percentageDiscount } = useAppSelector((state) => selectCartFinalPriceObj(state, country));

  return (
    <Paper sx={[sxContainer, ...convertSxToArr(sx)]} {...props}>
      <TitleTypography color="primary">Summary:</TitleTypography>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">Price, {productQuantity} products:</Typography>
        <PriceTypography variant="h4">{finalPrice}</PriceTypography>
      </Stack>
      {!!percentageDiscount && (
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">Discount:</Typography>
          <Typography variant="h4">{percentageDiscount} %</Typography>
        </Stack>
      )}
      <Stack direction="row" justifyContent="space-between">
        <BoldTypography variant="h3">Total:</BoldTypography>
        <PriceTypography variant="h3" fontWeight="bold">
          {finalPriceWithDiscount}
        </PriceTypography>
      </Stack>

      <Tooltip placement="top" title="Unavailable now">
        <Button variant="contained" size="large">
          Order
        </Button>
      </Tooltip>
    </Paper>
  );
}
