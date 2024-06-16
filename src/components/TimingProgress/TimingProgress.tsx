import { LinearProgress } from '@mui/material';
import { timingProgress } from '@/components/TimingProgress/TimingProgress.styles';
import { ITimingProgressProps } from '@/components/TimingProgress/TimingProgress.interface';

export function TimingProgress({ maxTimeSec, sx = {}, ...props }: ITimingProgressProps): React.ReactNode {
  const sxStyles = { ...sx, ...timingProgress(maxTimeSec) };
  return <LinearProgress variant="indeterminate" sx={sxStyles} {...props} />;
}
