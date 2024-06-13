import { Box, BoxProps, Skeleton } from '@mui/material';
import {
  SKELETON_HEIGHT_BEFORE,
  SKELETON_HEIGHT_AFTER,
  WIDTH100
} from '@/components/PageSkeleton/PageSkeleton.constants';

export function PageSkeleton(props: BoxProps): React.ReactNode {
  return (
    <Box sx={WIDTH100} {...props}>
      <Skeleton animation="wave" height={SKELETON_HEIGHT_BEFORE} />
      <Skeleton variant="circular" width={SKELETON_HEIGHT_BEFORE} height={SKELETON_HEIGHT_BEFORE} animation="wave" />
      <Skeleton animation="wave" height={SKELETON_HEIGHT_AFTER} />
      <Skeleton animation="wave" height={SKELETON_HEIGHT_AFTER} />
      <Skeleton animation="wave" height={SKELETON_HEIGHT_AFTER} />
      <Skeleton animation="wave" height={SKELETON_HEIGHT_AFTER} />
    </Box>
  );
}
