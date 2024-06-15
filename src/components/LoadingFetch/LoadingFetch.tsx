import { Box } from '@mui/material';
import { ILoadingFetchProps } from '@/components/LoadingFetch/LoadingFetch.interface';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { ErrorComponent } from '@/components/ErrorComponent/ErrorComponent';

import imageError from '@/assets/error2.png';
import styles from './LoadingFetch.module.scss';

export function LoadingFetch({
  children,
  error,
  isLoading,
  Skeleton,
  className = ''
}: PropsWithChildren<ILoadingFetchProps>): React.ReactNode {
  const containerStyles = `${className} ${styles.container} ${isLoading ? styles.overflowHidden : ''}`;
  const childrenContainerStyles = `${styles.childrenContainer} ${isLoading ? styles.hidden : ''}`;
  const skeletonClasses = `${styles.skeleton} ${isLoading ? '' : styles.disabled}`;

  return error ? (
    <ErrorComponent message={error} src={imageError} alt="error" />
  ) : (
    <Box className={containerStyles}>
      <Skeleton className={skeletonClasses} />
      <Box className={childrenContainerStyles}>{children}</Box>
    </Box>
  );
}
