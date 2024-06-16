import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const SKELETON_CIRCULAR_SIZE = '10vh';

const increaseSkeleton: SxProps<Theme> = { '&.MuiSkeleton-root': { transform: 'scaleY(0.9)' } };
export const skeletonContainer: SxProps<Theme> = {
  width: '1',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column'
};
export const pageSkeletonBefore: SxProps<Theme> = {
  minHeight: '10vh',
  ...increaseSkeleton
};
export const pageSkeleton: SxProps<Theme> = {
  flex: 1,
  ...increaseSkeleton
};
