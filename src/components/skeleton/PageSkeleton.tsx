import { Skeleton, skeletonClasses } from '@mui/material';
import type { StackProps } from '@mui/system';
import { Stack } from '@mui/system';
import type { SxStyles } from '@/shared/types/types';

const sxStyles: SxStyles = {
  increasedSkeleton: {
    [`&.${skeletonClasses.root}`]: {
      transform: 'scaleY(0.9)'
    }
  },

  skeleton: {
    flex: 1
  },

  skeletonBefore: {
    minHeight: '10vh'
  },

  skeletonCircular: {
    width: '10vh',
    height: '10vh'
  }
};

export function PageSkeleton({ ...props }: StackProps): React.ReactNode {
  const sxSkeleton = [sxStyles.skeleton, sxStyles.increasedSkeleton];
  const sxSkeletonBefore = [sxStyles.skeletonBefore, sxStyles.increasedSkeleton];

  return (
    <Stack width={1} minHeight="80vh" {...props}>
      <Skeleton animation="wave" sx={sxSkeletonBefore} />
      <Skeleton variant="circular" animation="wave" sx={sxStyles.skeletonCircular} />
      <Skeleton animation="wave" sx={sxSkeletonBefore} />
      <Skeleton animation="wave" sx={sxSkeletonBefore} />
      <Skeleton animation="wave" sx={sxSkeleton} />
      <Skeleton animation="wave" sx={sxSkeleton} />
      <Skeleton animation="wave" sx={sxSkeleton} />
      <Skeleton animation="wave" sx={sxSkeleton} />
      <Skeleton animation="wave" sx={sxSkeleton} />
    </Stack>
  );
}
