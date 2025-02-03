import type { AppDispatch} from '@/shared/redux/redux';
import type { SxStyles, InputReactEvent } from '@/shared/types/types';
import type { IAction, FilterState, FilterPayload } from '@/pages/CatalogPage/hooks/filterReducer/types';

import { Stack } from '@mui/system';

import { FilterStateEnum } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import { MIN_MONEY, MAX_MONEY } from '@/pages/CatalogPage/hooks/filterReducer/constants';
import { SLIDER_MIN_DISTANCE } from '@/pages/CatalogPage/features/CatalogFilterForm/data/constants';

import { useAppDispatch } from '@/shared/redux/redux';

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
    dispatchFilterState({ type: FilterStateEnum.PRICE, payload });
  };
}

function changeRangeInput(isLeft: boolean, filterState: FilterState, dispatch: AppDispatch) {
  return (event: InputReactEvent): void => {
    const value = +event.target.value;
    if (!Number.isNaN(value) && value < MAX_MONEY && value > MIN_MONEY) {
      const newValue = isLeft ? [value, filterState.price[1]] : [filterState.price[0], value];
      const activeThumb = isLeft ? 0 : 1;
      changeRangeSlider(dispatch)(event, newValue, activeThumb);
    }
  };
}

export function RangePriceSlider() {
  const dispatch = useAppDispatch();

  const handleChange = changeRangeSlider(dispatch);
  // const handleLeftInput = changeRangeInput(true, filterState, dispatch);
  // const handleRightInput = changeRangeInput(true, filterState, dispatch);

  return (
    <Stack alignItems="center" gap={2.5}>
      {/* <Stack direction="row" gap={1}>
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
      /> */}
    </Stack>
  );
}
