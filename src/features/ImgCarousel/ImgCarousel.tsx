import type { BoxProps } from '@mui/system';
import type { SxStyles, PropsWithChildren } from '@/shared/model/types/types';

import Slider from 'react-slick';
import { Box } from '@mui/material';
import { useRef, useMemo } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { settings, customDotsSettings } from '@/features/ImgCarousel/config';

const sxStyles: SxStyles = {
  slider: {
    position: 'relative'
  }
};

interface ImgCarouselProps extends BoxProps {
  isShowArrows?: boolean;
  numToOpenModalImg?: number;
  customDots?: React.ReactNode[];
}

export function ImgCarousel({
  children,
  isShowArrows = false,
  customDots = [],
  numToOpenModalImg = 0,
  width = 1,
  ...props
}: PropsWithChildren<ImgCarouselProps>) {
  const sliderRef = useRef<Slider>(null);

  const addCustomDotsSettings = useMemo(() => (customDots.length ? customDotsSettings(customDots, sliderRef) : {}), [customDots]);

  return (
    <Box
      component={Slider}
      ref={sliderRef}
      dots={!isShowArrows}
      arrows={isShowArrows}
      draggable={!isShowArrows}
      initialSlide={numToOpenModalImg}
      {...settings}
      {...addCustomDotsSettings}
      sx={sxStyles.slider}
      width={width}
      {...props}
    >
      {children}
    </Box>
  );
}
