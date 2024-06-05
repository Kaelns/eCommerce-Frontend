import Slider from 'react-slick';
import { Box } from '@mui/material';
import { CustomBox } from '@/components/ImgCarousel/components/CustomBox';
import { sxCustomBox } from '@/components/ImgCarousel/data/ImgCarousel.constants';

import styles from '../ImgCarousel.module.scss';

export function customDot(customDots: React.ReactNode[], sliderRef: React.RefObject<Slider>) {
  return function CustomDot(index: number): JSX.Element {
    return (
      <Box onClick={() => sliderRef.current?.slickGoTo(index)} className={`${styles.slickDot} slick__dot`}>
        {customDots[index]}
      </Box>
    );
  };
}

export const appendDots = (dots: React.ReactNode): JSX.Element => (
  <CustomBox classes={styles.dotsContainer} sx={sxCustomBox}>
    {dots}
  </CustomBox>
);
