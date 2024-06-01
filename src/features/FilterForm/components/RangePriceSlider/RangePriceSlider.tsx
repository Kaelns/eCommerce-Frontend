import { Box, OutlinedInput, Slider, Typography } from '@mui/material';
import { MIN_DISTANCE, STEP } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider.constants';
import { IRangeSliderProps } from '@/features/FilterForm/components/RangePriceSlider/RangePriceSlider.interrface';
import { InputReactEvent } from '@/data/types/InputReactEvent';
import { Price } from '@/features/FilterForm/data/FilterForm.type';

import styles from './RangePriceSlider.module.scss';

export function RangePriceSlider({ price, setPrice, min, max }: IRangeSliderProps): React.ReactNode {
  const handleChange = (event: Event | InputReactEvent, newValue: number | Price, activeThumb: number): void => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < MIN_DISTANCE) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 10000 - MIN_DISTANCE);
        setPrice([clamped, clamped + MIN_DISTANCE]);
      } else {
        const clamped = Math.max(newValue[1], MIN_DISTANCE);
        setPrice([clamped - MIN_DISTANCE, clamped]);
      }
    } else {
      setPrice(newValue as Price);
    }
  };

  const handleInputsChange =
    (isLeft: boolean) =>
    (event: InputReactEvent): void => {
      const value = +event.target.value;
      if (isLeft) {
        handleChange(event, [value, price[1]], 0);
      } else {
        handleChange(event, [price[0], value], 1);
      }
    };

  return (
    <Box className={styles.sliderContainer}>
      <Box className={styles.inputsContainer}>
        <OutlinedInput value={price[0]} onChange={handleInputsChange(true)} className={styles.input} />
        <Typography className={styles.divider}>-</Typography>
        <OutlinedInput value={price[1]} onChange={handleInputsChange(true)} className={styles.input} />
      </Box>
      <Slider
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        step={STEP}
        className={styles.slider}
      />
    </Box>
  );
}
