import { keyframes } from '@emotion/react';

export const revealAnimation = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});

export const hideAnimation = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});

export const pulseAnimation = keyframes({
  '0%': {
    boxShadow: '0 0 0 0 rgba(204, 169, 44, 0.6)'
  },
  '70%': {
    boxShadow: '0 0 0 10px rgba(204, 169, 44, 0.1)'
  },
  '100%': {
    boxShadow: '0 0 0 0 rgba(204, 169, 44, 0)'
  }
});
