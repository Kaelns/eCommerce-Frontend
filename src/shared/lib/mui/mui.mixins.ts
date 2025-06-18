import type { SxStylesNotArr } from '@/shared/model/types';

interface Mixins {
  hidden: SxStylesNotArr;
  visible: SxStylesNotArr;
  opacity0: SxStylesNotArr;
  opacity1: SxStylesNotArr;
  invisible: SxStylesNotArr;
  animation: (duration?: number) => SxStylesNotArr;
  mediaHover: (styles: SxStylesNotArr, selector?: string) => SxStylesNotArr;
}

export const sxMixins: Mixins = {
  animation: (duration = 0.3) => ({
    transition: `all ${duration}s ease-out, visibility ${duration}s ease-out !important`
  }),
  mediaHover: (styles, selector = '') => ({
    '@media (hover: hover)': {
      [`&:hover ${selector}`]: styles
    }
  }),
  visible: {
    opacity: 1,
    visibility: 'visible'
  },
  invisible: {
    opacity: 0,
    visibility: 'hidden'
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
    width: '0 !important',
    height: '0 !important'
  },
  opacity0: {
    opacity: 0
  },
  opacity1: {
    opacity: 1
  }
};
