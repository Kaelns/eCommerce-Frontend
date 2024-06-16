import { Box, BoxProps, Skeleton } from '@mui/material';
import {
  skeletonContainer,
  pageSkeleton,
  SKELETON_CIRCULAR_SIZE,
  pageSkeletonBefore
} from '@/components/PageSkeleton/PageSkeleton.constants';

export function PageSkeleton(props: BoxProps): React.ReactNode {
  return (
    <Box sx={skeletonContainer} {...props}>
      <Skeleton animation="wave" sx={pageSkeletonBefore} />
      <Skeleton variant="circular" width={SKELETON_CIRCULAR_SIZE} height={SKELETON_CIRCULAR_SIZE} animation="wave" />
      <Skeleton animation="wave" sx={pageSkeletonBefore} />
      <Skeleton animation="wave" sx={pageSkeletonBefore} />
      <Skeleton animation="wave" sx={pageSkeleton} />
      <Skeleton animation="wave" sx={pageSkeleton} />
      <Skeleton animation="wave" sx={pageSkeleton} />
      <Skeleton animation="wave" sx={pageSkeleton} />
      <Skeleton animation="wave" sx={pageSkeleton} />
    </Box>
  );
}
