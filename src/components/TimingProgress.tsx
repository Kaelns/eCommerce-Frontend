import { LinearProgress, LinearProgressProps, keyframes, linearProgressClasses } from '@mui/material';
import { SxPropsObj } from '@/shared/types';
import { convertSxToArr } from '@/utils/convertSxToArr';

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

export interface ITimingProgressProps extends LinearProgressProps {
  maxTimeSec: number;
}

export function TimingProgress({ maxTimeSec, sx = {}, ...props }: ITimingProgressProps): React.ReactNode {
  return <LinearProgress variant="indeterminate" sx={[sxProgress(maxTimeSec), ...convertSxToArr(sx)]} {...props} />;
}
