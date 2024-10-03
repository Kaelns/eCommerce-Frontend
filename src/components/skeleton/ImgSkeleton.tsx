import { Skeleton, SkeletonProps, SxProps, skeletonClasses } from '@mui/material';
import { revealAnimation } from '@/shared/constants';
import { convertSxToArr } from '@/utils/convertSxToArr';

const sxSkeleton: SxProps = {
  width: 1,
  height: 1,
  animation: `${revealAnimation} 0.3s ease-out`,
  [`&.${skeletonClasses.root}`]: { transform: 'scale(1)' }
};

export function ImgSkeleton({ sx = {}, ...props }: SkeletonProps): React.ReactNode {
  return <Skeleton animation="wave" sx={[sxSkeleton, ...convertSxToArr(sx)]} {...props} />;
}
