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
  return error ? (
    <ErrorComponent message={error} src={imageError} alt="error" />
  ) : (
    <Box className={`${className} ${styles.container}`}>
      <Skeleton className={`${styles.skeleton} ${!isLoading ? styles.disabled : ''}`} />
      {children}
    </Box>
  );
}
