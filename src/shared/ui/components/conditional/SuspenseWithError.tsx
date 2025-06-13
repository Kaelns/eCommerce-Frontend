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

type LoadingProps =
  | {
      isFetching: boolean;
      isLoading?: undefined;
    }
  | {
      isLoading: boolean;
      isFetching?: undefined;
    };

interface SuspenseWithErrorProps extends StackProps {
  error?: string;
  isError?: boolean;

  Fallback?: React.ReactElement;
  Skeleton?: React.ReactElement;
}

export function SuspenseWithError({
  children,

  error,
  isError,
  isLoading,
  isFetching,

  Skeleton = <PageSkeleton />,
  Fallback = <AppError message={error} src={imageError} alt="error" />,
  sx = {},
  ...props
}: PropsWithChildren<LoadingProps & SuspenseWithErrorProps>) {
  const isPending = isLoading ?? isFetching;
  const isPendingOnce = isLoading !== undefined && isFetching === undefined;

  return (
    <Box sx={sxStyles.wrapper} {...props}>
      <FadeBox isShow={!!isError}>{Fallback}</FadeBox>
      <FadeBox isShow={!isError && isPending} sx={sxStyles.overlayingChildren}>
        {Skeleton}
      </FadeBox>
      <FadeBox
        isShow={!isError && !isPending}
        unmountOnExit={!!isError || isPendingOnce}
        sx={[sxStyles.overlayingChildren, ...convertSxToArr(sx)]}
      >
        {children}
      </FadeBox>
    </Box>
  );
}
