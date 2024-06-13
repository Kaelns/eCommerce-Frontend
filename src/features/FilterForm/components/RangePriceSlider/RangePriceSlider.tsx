import { Box, OutlinedInput, Slider, Typography } from '@mui/material';
import { useContext } from 'react';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { STEP } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider.constants';
import { MIN_MONEY, MAX_MONEY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import {
  changeRangeInput,
  changeRangeSlider
} from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider.helpers';

import styles from './RangePriceSlider.module.scss';

export function RangePriceSlider(): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const handleChange = changeRangeSlider(dispatchFilterState);
  const handleLeftInput = changeRangeInput(true, filterState, dispatchFilterState);
  const handleRightInput = changeRangeInput(true, filterState, dispatchFilterState);

  return (
    <Box className={styles.sliderContainer}>
      <Box className={styles.inputsContainer}>
        <OutlinedInput value={filterState.price[0]} onChange={handleLeftInput} className={styles.input} />
        <Typography className={styles.divider}>-</Typography>
        <OutlinedInput value={filterState.price[1]} onChange={handleRightInput} className={styles.input} />
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
