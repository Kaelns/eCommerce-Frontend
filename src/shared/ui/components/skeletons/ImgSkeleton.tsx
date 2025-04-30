import type { SxProps, SkeletonProps } from '@mui/material';

import { Skeleton, skeletonClasses } from '@mui/material';

import { revealAnimation } from '@/shared/lib/mui';
import { convertSxToArr } from '@/shared/lib/helpers';

const sxSkeleton: SxProps = {
  width: 1,
  height: 1,
  animation: `${revealAnimation} 0.3s ease-out`,
  [`&.${skeletonClasses.root}`]: { transform: 'scale(1)' }
};

export function ImgSkeleton({ sx = {}, ...props }: SkeletonProps) {
  return <Skeleton animation="wave" sx={[sxSkeleton, ...convertSxToArr(sx)]} {...props} />;
}
