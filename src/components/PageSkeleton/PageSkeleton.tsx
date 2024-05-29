import { Box, Skeleton } from '@mui/material';
import { skeletonHeightBefore, skeletonHeightAfter } from '@/components/PageSkeleton/PageSkeleton.constants';

export function PageSkeleton(): React.ReactNode {
  return (
    <Box>
      <Skeleton animation="wave" height={skeletonHeightBefore} />
      <Skeleton variant="circular" width={skeletonHeightBefore} height={skeletonHeightBefore} animation="wave" />
      <Skeleton animation="wave" height={skeletonHeightAfter} />
      <Skeleton animation="wave" height={skeletonHeightAfter} />
      <Skeleton animation="wave" height={skeletonHeightAfter} />
      <Skeleton animation="wave" height={skeletonHeightAfter} />
    </Box>
  );
}
