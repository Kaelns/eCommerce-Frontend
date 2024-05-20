import { Box, Skeleton } from '@mui/material';

export function PageSkeleton(): JSX.Element {
  const skeletonHeightBefore = '10vh';
  const skeletonHeightAfter = '15vh';

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
