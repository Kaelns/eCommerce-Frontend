import type { BoxProps } from '@mui/system';
import type { Settings } from 'react-slick';
import type { SxStylesMap, PropsWithChildren } from '@/shared/model/types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import SlickSlider from 'react-slick';
import { useRef, useMemo } from 'react';

import { selectInitSlide } from '@/features/Slider/model/slider.slice';
import { arrowSettings, customDotsSettings } from '@/features/Slider/model/config';

import { useAppSelector } from '@/shared/lib/redux';

const sxStyles: SxStylesMap = {
  slider: {
    position: 'relative'
  }
};

interface SliderProps extends Omit<BoxProps, 'draggable'>, Settings {
  sliderId?: string;
  isShowArrows?: boolean;
  customDots?: React.ReactElement[];
}

export function Slider({
  children,

  sliderId = '',
  isShowArrows = false,
  customDots = [],

  ...props
}: PropsWithChildren<SliderProps>) {
  const sliderRef = useRef<SlickSlider>(null);

  const initialSlide = useAppSelector((state) => selectInitSlide(state, sliderId));

  const addCustomDotsSettings = useMemo(() => !!customDots.length && customDotsSettings(customDots, sliderRef), [customDots]);

  return (
    <Box
      component={SlickSlider}
      ref={sliderRef}
      //
      speed={1000}
      //
      dots={!isShowArrows}
      arrows={isShowArrows}
      draggable={!isShowArrows}
      initialSlide={initialSlide}
      //
      sx={sxStyles.slider}
      {...(isShowArrows && arrowSettings)}
      {...addCustomDotsSettings}
      {...props}
    >
      {children}
    </Box>
  );
}
