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
  skeleton,
  className = ''
}: PropsWithChildren<ILoadingFetchProps>): React.ReactNode {
  const elementToReturn = (): React.ReactNode => {
    if (error) {
      return <ErrorComponent message={error} src={imageError} alt="error" />;
    }

    return (
      <Box className={`${className} ${styles.container}`}>
        {skeleton({ className: `${styles.skeleton} ${!isLoading ? styles.disabled : ''}` })}
        {children}
      </Box>
    );
  };

  return elementToReturn();
}
