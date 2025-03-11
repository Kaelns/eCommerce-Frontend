import type { SxPropsNotArr } from '@/shared/model/types';

interface Mixins {
  hidden: SxPropsNotArr;
  visible: SxPropsNotArr;
  opacity0: SxPropsNotArr;
  opacity1: SxPropsNotArr;
  invisible: SxPropsNotArr;
  animation: (duration?: number) => SxPropsNotArr;
  mediaHover: (styles: SxPropsNotArr, selector?: string) => SxPropsNotArr;
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
