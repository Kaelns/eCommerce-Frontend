import type { SxStyles } from '@/shared/model/types/types';

import { Stack, Slider, Typography, OutlinedInput } from '@mui/material';

import { ProductConsts } from '@/entities/product';

import { SLIDER_STEP } from '@/features/catalog-filters/model/constants';
import { selectPriceForm } from '@/features/catalog-filters/model/redux/catalogFilter.slice';
import {
  changeRangeInput,
  changeRangeSlider
} from '@/features/catalog-filters/components/CatalogFilterForm/ui/components/RangePriceSliderFilter/helpers';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux/redux.hooks';

const sxStyles: SxStyles = {
  input: {
    flex: 1,
    '& > input': {
      py: 0.7
    }
  },
  divider: {
    display: 'flex',
    alignItems: 'center'
  },
  slider: {
    width: 0.85
  }
};

export function RangePriceSliderFilter() {
  const dispatch = useAppDispatch();
  const priceState = useAppSelector(selectPriceForm);

  const handleChange = changeRangeSlider(dispatch);
  const handleLeftInput = changeRangeInput(true, priceState, dispatch);
  const handleRightInput = changeRangeInput(false, priceState, dispatch);

  return (
    <Stack alignItems="center" gap={2.5}>
      <Stack direction="row" gap={1}>
        <OutlinedInput value={priceState[0]} onChange={handleLeftInput} sx={sxStyles.input} />
        <Typography sx={sxStyles.divider}>-</Typography>
        <OutlinedInput value={priceState[1]} onChange={handleRightInput} sx={sxStyles.input} />
      </Stack>
      <Slider
        value={priceState}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={ProductConsts.MIN_MONEY}
        max={ProductConsts.MAX_MONEY}
        step={SLIDER_STEP}
        sx={sxStyles.slider}
      />
    </Stack>
  );
}
