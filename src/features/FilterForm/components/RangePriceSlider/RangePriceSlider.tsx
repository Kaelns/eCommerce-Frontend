import { Box, OutlinedInput, Slider, Typography } from '@mui/material';
import { useContext } from 'react';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { InputReactEvent } from '@/data/types/InputReactEvent';
import { MIN_DISTANCE, STEP } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider.constants';
import { MIN_MONEY, MAX_MONEY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { Price } from '@/features/FilterForm/data/FilterForm.type';

import styles from './RangePriceSlider.module.scss';

export function RangePriceSlider(): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const handleChange = (_event: Event | InputReactEvent, newValue: number | Price, activeThumb: number): void => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < MIN_DISTANCE) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], MAX_MONEY - MIN_DISTANCE);
        dispatchFilterState({ type: FilterState.PRICE, payload: [clamped, clamped + MIN_DISTANCE] });
      } else {
        const clamped = Math.max(newValue[1], MIN_DISTANCE);
        dispatchFilterState({ type: FilterState.PRICE, payload: [clamped - MIN_DISTANCE, clamped] });
      }
    } else {
      dispatchFilterState({ type: FilterState.PRICE, payload: newValue });
    }
  };

  const handleInputsChange =
    (isLeft: boolean) =>
    (event: InputReactEvent): void => {
      const value = +event.target.value;
      if (!Number.isNaN(value) && value < MAX_MONEY && value > MIN_MONEY) {
        if (isLeft) {
          handleChange(event, [value, filterState.price[1]], 0);
        } else {
          handleChange(event, [filterState.price[0], value], 1);
        }
      }
    };

  return (
    <Box className={styles.sliderContainer}>
      <Box className={styles.inputsContainer}>
        <OutlinedInput value={filterState.price[0]} onChange={handleInputsChange(true)} className={styles.input} />
        <Typography className={styles.divider}>-</Typography>
        <OutlinedInput value={filterState.price[1]} onChange={handleInputsChange(false)} className={styles.input} />
      </Box>
      <Slider
        value={filterState.price}
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
