import type { StackProps } from '@mui/system';
import type { SxStylesMap } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Skeleton, skeletonClasses } from '@mui/material';

const sxStyles: SxStylesMap = {
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

// * Skeleton doesn't change
const arr = new Array(5).fill('skeleton');
export function PageSkeleton({ ...props }: StackProps): React.ReactElement {
  const sxSkeleton = [sxStyles.skeleton, sxStyles.increasedSkeleton];
  const sxSkeletonBefore = [sxStyles.skeletonBefore, sxStyles.increasedSkeleton];

  return (
    <Stack width={1} minHeight="80vh" {...props}>
      <Skeleton animation="wave" sx={sxSkeletonBefore} />
      <Skeleton variant="circular" animation="wave" sx={sxStyles.skeletonCircular} />
      <Skeleton animation="wave" sx={sxSkeletonBefore} />
      <Skeleton animation="wave" sx={sxSkeletonBefore} />

      {arr.map((elem, id) => (
        <Skeleton key={`${elem}-${id}`} animation="wave" sx={sxSkeleton} />
      ))}
    </Stack>
  );
}
