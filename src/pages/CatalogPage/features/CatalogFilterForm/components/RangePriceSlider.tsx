import { OutlinedInput, Slider, Typography } from '@mui/material';
import { useContext } from 'react';
import { Stack } from '@mui/system';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { MIN_MONEY, MAX_MONEY } from '@/pages/CatalogPage/hooks/filterReducer/constants';
import { SLIDER_MIN_DISTANCE, SLIDER_STEP } from '@/pages/CatalogPage/features/CatalogFilterForm/constants';
import type { InputReactEvent, SxStyles } from '@/shared/types/types';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import type { IAction, FilterPayload, IFilterState } from '@/pages/CatalogPage/hooks/filterReducer/types';

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

function changeRangeSlider(dispatchFilterState: React.Dispatch<IAction>) {
  return (_event: Event | InputReactEvent, newValue: number | number[], activeThumb: number): void => {
    if (!Array.isArray(newValue)) {
      return;
    }
    let payload: FilterPayload = [];
    if (newValue[1] - newValue[0] < SLIDER_MIN_DISTANCE) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], MAX_MONEY - SLIDER_MIN_DISTANCE);
        payload = [clamped, clamped + SLIDER_MIN_DISTANCE];
      } else {
        const clamped = Math.max(newValue[1], SLIDER_MIN_DISTANCE);
        payload = [clamped - SLIDER_MIN_DISTANCE, clamped];
      }
    } else {
      payload = newValue;
    }
    dispatchFilterState({ type: FilterState.PRICE, payload });
  };
}

function changeRangeInput(isLeft: boolean, filterState: IFilterState, dispatchFilterState: React.Dispatch<IAction>) {
  return (event: InputReactEvent): void => {
    const value = +event.target.value;
    if (!Number.isNaN(value) && value < MAX_MONEY && value > MIN_MONEY) {
      const newValue = isLeft ? [value, filterState.price[1]] : [filterState.price[0], value];
      const activeThumb = isLeft ? 0 : 1;
      changeRangeSlider(dispatchFilterState)(event, newValue, activeThumb);
    }
  };
}

export function RangePriceSlider(): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const handleChange = changeRangeSlider(dispatchFilterState);
  const handleLeftInput = changeRangeInput(true, filterState, dispatchFilterState);
  const handleRightInput = changeRangeInput(true, filterState, dispatchFilterState);

  return (
    <Stack alignItems="center" gap={2.5}>
      <Stack direction="row" gap={1}>
        <OutlinedInput value={filterState.price[0]} onChange={handleLeftInput} sx={sxStyles.input} />
        <Typography sx={sxStyles.divider}>-</Typography>
        <OutlinedInput value={filterState.price[1]} onChange={handleRightInput} sx={sxStyles.input} />
      </Stack>
      <Slider
        value={filterState.price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={MIN_MONEY}
        max={MAX_MONEY}
        step={SLIDER_STEP}
        sx={sxStyles.slider}
      />
    </Stack>
  );
}
