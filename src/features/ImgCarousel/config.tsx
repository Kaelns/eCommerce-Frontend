import type { JSX } from 'react';
import type Slider from 'react-slick';
import type { Settings } from 'react-slick';
import type { SxStyles } from '@/shared/model/types';

import { Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { LightMuiBox } from '@/shared/ui/elements';
import { sxMixins } from '@/shared/lib/mui';

const sxStyles: SxStyles = {
  nextArrow: {
    right: '0',
    transform: 'translate(15%, -50%)'
  },
  prevArrow: {
    left: '0',
    transform: 'translate(-15%, -50%)'
  },
  arrowShared: (theme) => ({
    position: 'absolute',
    top: '50%',
    zIndex: 1000,

    [theme.breakpoints.down('laptop')]: {
      top: 'auto',
      bottom: '-90px'
    }
  }),
  dotsContainer: {
    display: 'flex',
    gap: 1,
    p: 1.5,
    overflowY: 'auto',
    '& li': {
      listStyle: 'none',
      textDecoration: 'none',
      borderBottom: '4px solid var(--mui-palette-info-light)',
      borderRadius: '2px',
      ...sxMixins.animation()
    },
    '& li.slick-active': {
      borderBottomColor: 'primary.dark'
    }
  }
};

export const settings: Settings = {
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <LightMuiBox>
      <IconButton sx={[sxStyles.nextArrow, sxStyles.arrowShared]}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </LightMuiBox>
  ),
  prevArrow: (
    <LightMuiBox>
      <IconButton sx={[sxStyles.prevArrow, sxStyles.arrowShared]}>
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>
    </LightMuiBox>
  )
};

export const customDotsSettings = (customDots: React.ReactNode[], sliderRef: React.RefObject<null | Slider>): Settings => ({
  customPaging(index: number): JSX.Element {
    const slideTo = (): void => sliderRef.current?.slickGoTo(index);
    return (
      <Box onClick={slideTo} className="slick__dot">
        {customDots[index]}
      </Box>
    );
  },
  appendDots(dots: React.ReactNode): JSX.Element {
    return <LightMuiBox sx={sxStyles.dotsContainer}>{dots}</LightMuiBox>;
  }
});
