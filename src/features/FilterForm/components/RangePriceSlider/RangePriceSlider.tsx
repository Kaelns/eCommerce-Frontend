import { Box, OutlinedInput, Slider, Typography } from '@mui/material';
import { MIN_DISTANCE, STEP } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider.constants';
import { IRangeSliderProps } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider.interrface';
import { InputReactEvent } from '@/data/types/InputReactEvent';
import { Price } from '@/features/FilterForm/data/FilterForm.type';
import { MIN_MONEY, MAX_MONEY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';

import styles from './RangePriceSlider.module.scss';

export function RangePriceSlider({ filterReducerHook }: IRangeSliderProps): React.ReactNode {
  const [state, dispatch] = filterReducerHook;

  const handleChange = (event: Event | InputReactEvent, newValue: number | Price, activeThumb: number): void => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < MIN_DISTANCE) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 10000 - MIN_DISTANCE);
        dispatch({ type: FilterState.PRICE, payload: [clamped, clamped + MIN_DISTANCE] });
      } else {
        const clamped = Math.max(newValue[1], MIN_DISTANCE);
        dispatch({ type: FilterState.PRICE, payload: [clamped - MIN_DISTANCE, clamped] });
      }
    } else {
      dispatch({ type: FilterState.PRICE, payload: newValue });
    }
  };

  const handleInputsChange =
    (isLeft: boolean) =>
    (event: InputReactEvent): void => {
      const value = +event.target.value;
      if (isLeft) {
        handleChange(event, [value, state.price[1]], 0);
      } else {
        handleChange(event, [state.price[0], value], 1);
      }
    };

  return (
    <Box className={styles.sliderContainer}>
      <Box className={styles.inputsContainer}>
        <OutlinedInput value={state.price[0]} onChange={handleInputsChange(true)} className={styles.input} />
        <Typography className={styles.divider}>-</Typography>
        <OutlinedInput value={state.price[1]} onChange={handleInputsChange(false)} className={styles.input} />
      </Box>
      <Slider
        value={state.price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={MIN_MONEY}
        max={MAX_MONEY}
        step={STEP}
        className={styles.slider}
      />
    </Box>
  );
}
