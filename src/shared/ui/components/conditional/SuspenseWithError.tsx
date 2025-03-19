import type { StackProps } from '@mui/system';
import type { SxStyles, PropsWithChildren } from '@/shared/model/types';

import { Box } from '@mui/system';

import { AppError } from '@/widgets/AppError';

import { FadeBox } from '@/shared/ui/components/boxes/FadeBox';
import { PageSkeleton } from '@/shared/ui/components/skeletons/PageSkeleton';
import { convertSxToArr } from '@/shared/lib/helpers';

import imageError from '@/shared/assets/error.png';

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

interface SuspenseWithErrorProps extends StackProps {
  Fallback?: React.ReactElement;
  Skeleton?: React.ReactElement;
  settings: { error?: string; isError: boolean } & (
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
  settings: { isLoading, isFetching, isError, error },
  Skeleton = <PageSkeleton />,
  Fallback = <AppError message={error} src={imageError} alt="error" />,
  sx = {},
  ...props
}: PropsWithChildren<SuspenseWithErrorProps>) {
  const isLoadingOrFetching = typeof isLoading === 'boolean' ? isLoading : isFetching;
  const isOnlyInitialFetch = isLoading !== undefined && isFetching === undefined;

  return (
    <Box sx={sxStyles.wrapper} {...props}>
      <FadeBox isShow={isError}>{Fallback}</FadeBox>
      <FadeBox isShow={!isError && isLoadingOrFetching} sx={sxStyles.overlayingChildren}>
        {Skeleton}
      </FadeBox>
      <FadeBox
        isShow={!isError && !isLoadingOrFetching}
        sx={[sxStyles.overlayingChildren, ...convertSxToArr(sx)]}
        unmountOnExit={isError || isOnlyInitialFetch}
      >
        {children}
      </FadeBox>
    </Box>
  );
}
