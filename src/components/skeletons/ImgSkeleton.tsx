import type { SkeletonProps, SxProps } from '@mui/material';
import { Skeleton, skeletonClasses } from '@mui/material';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';
import { revealAnimation } from '@/shared/data/mui-animations';

const sxSkeleton: SxProps = {
  width: 1,
  height: 1,
  animation: `${revealAnimation} 0.3s ease-out`,
  [`&.${skeletonClasses.root}`]: { transform: 'scale(1)' }
};

export function ImgSkeleton({ sx = {}, ...props }: SkeletonProps): React.ReactNode {
  return <Skeleton animation="wave" sx={[sxSkeleton, ...convertSxToArr(sx)]} {...props} />;
}
