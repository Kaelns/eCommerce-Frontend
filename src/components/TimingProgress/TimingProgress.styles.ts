import { SxProps, keyframes } from '@mui/material';

const indeterminate1Keyframes = keyframes({
  '0%': {
    left: '-35%',
    right: '100%'
  },
  '100%': {
    left: '0%',
    right: '0%'
  }
});

export const timingProgress = (maxTime: number): SxProps => ({
  borderRadius: 1,
  '& .MuiLinearProgress-bar1Indeterminate': {
    width: 'auto',
    animation: `${indeterminate1Keyframes} ${maxTime}s linear forwards`
  },
  '& .MuiLinearProgress-bar2Indeterminate': {
    display: 'none'
  }
});
