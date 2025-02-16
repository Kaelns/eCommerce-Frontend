import type { StackProps } from '@mui/system';
import type { SxStyles, PropsWithChildren } from '@/shared/types/types';

import { Box } from '@mui/system';

import { AppError } from '@/layout/AppError';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

import { FadeBox } from '@/components/boxes/FadeBox';
import { PageSkeleton } from '@/components/skeletons/PageSkeleton';

import imageError from '@/shared/assets/error2.png';

const sxStyles: SxStyles = {
  wrapper: {
    width: 1,
    display: 'grid',
    gridTemplateColumns: '1fr'
  },
  overlayingChildren: {
    gridRowStart: 1,
    gridColumnStart: 1
  }
};

interface LoadingFetchProps extends StackProps {
  Fallback?: React.ReactElement;
  Skeleton?: React.ReactElement;
  settings: { error?: string; isError: boolean; isOnlyInitialFetch?: boolean } & (
    | {
        isFetching: boolean;
        isLoading?: undefined;
      }
    | {
        isLoading: boolean;
        isFetching?: undefined;
      }
  );
}

export function SuspenseWithError({
  children,
  settings: { isLoading, isFetching, isError, isOnlyInitialFetch = false, error },
  Skeleton = <PageSkeleton />,
  Fallback = <AppError message={error} src={imageError} alt="error" />,
  sx = {},
  ...props
}: PropsWithChildren<LoadingFetchProps>) {
  const isLoadingOrFetching = typeof isLoading === 'boolean' ? isLoading : isFetching;

  return (
    <Box sx={[sxStyles.wrapper, ...convertSxToArr(sx)]} {...props}>
      <FadeBox isShow={isError}>{Fallback}</FadeBox>
      <FadeBox isShow={!isError && isLoadingOrFetching} sx={sxStyles.overlayingChildren}>
        {Skeleton}
      </FadeBox>
      <FadeBox isShow={!isError && !isLoadingOrFetching} sx={sxStyles.overlayingChildren} unmountOnExit={isError || isOnlyInitialFetch}>
        {children}
      </FadeBox>
    </Box>
  );
}
