import { Skeleton, SkeletonProps } from '@mui/material';

import styles from './ImgSkeleton.module.scss';

export function ImgSkeleton({ className }: SkeletonProps): React.ReactNode {
  return (
    <Skeleton
      animation="wave"
      sx={{ '&.MuiSkeleton-root': { transform: 'scale(1)' } }}
      className={`${className} ${styles.skeleton}`}
    />
  );
}
