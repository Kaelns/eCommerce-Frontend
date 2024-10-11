import type { SxPropsNotArr } from '@/shared/types';

interface IMixins {
  animation: (duration?: number) => SxPropsNotArr;
  mediaHover: (styles: SxPropsNotArr, selector?: string) => SxPropsNotArr;
  hidden: SxPropsNotArr;
  invisible: SxPropsNotArr;
  opacity0: SxPropsNotArr;
  opacity1: SxPropsNotArr;
}

export const sxMixins: IMixins = {
  animation: (duration = 0.3) => ({
    transition: `all ${duration}s ease-out, visibility ${duration}s ease-out`
  }),
  mediaHover: (styles, selector = '') => ({
    '@media (hover: hover)': {
      [`&:hover ${selector}`]: styles
    }
  }),
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
