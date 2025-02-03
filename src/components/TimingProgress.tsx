import type { SxPropsObj } from '@/shared/types/types';
import type { LinearProgressProps } from '@mui/material';

import { keyframes, LinearProgress, linearProgressClasses } from '@mui/material';

import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

const progressKeyframes = keyframes({
  '0%': {
    left: '-35%',
    right: '100%'
  },
  '100%': {
    left: 0,
    right: 0
  }
});

const sxProgress = (time: number): SxPropsObj => ({
  borderRadius: 1,
  [`& .${linearProgressClasses.bar1Indeterminate}`]: {
    width: 'auto',
    animation: `${progressKeyframes} ${time}s linear forwards`
  },
  [`& .${linearProgressClasses.bar2Indeterminate}`]: {
    display: 'none'
  }
});

export interface TimingProgressProps extends LinearProgressProps {
  maxTimeSec: number;
}

export function TimingProgress({ maxTimeSec, sx = {}, ...props }: TimingProgressProps) {
  return <LinearProgress variant="indeterminate" sx={[sxProgress(maxTimeSec), ...convertSxToArr(sx)]} {...props} />;
}
