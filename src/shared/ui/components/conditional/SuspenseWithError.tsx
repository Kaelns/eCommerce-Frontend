import type { BoxProps } from '@mui/system';
import type { SxStylesMap, PropsWithChildren } from '@/shared/model/types';

import { Box } from '@mui/system';

import { AppError } from '@/widgets/AppError';

import { FadeBox } from '@/shared/ui/components/boxes/FadeBox';
import { PageSkeleton } from '@/shared/ui/components/skeletons/PageSkeleton';
import { concatSx } from '@/shared/lib/helpers';

import imageError from '@/shared/assets/error.png';

const sxStyles = {
  // * Trick to put children at the same place (overlaying them) without position absolute
  wrapper: {
    display: 'grid',
    // * To say grid not to take content width like "max-content" when set to 1fr. Prevents stretching more than parent size
    // * with 1fr - minmax(auto, 1fr) = minmax(max-content, 1fr), now - (0, 1fr)
    gridTemplateColumns: 'minmax(0, 1fr)'
  },
  overlayingChildren: {
    gridRowStart: 1,
    gridColumnStart: 1
  }
} satisfies SxStylesMap;

type LoadingProps =
  | {
      isFetching: boolean;
      isLoading?: undefined;
    }
  | {
      isLoading: boolean;
      isFetching?: undefined;
    };

interface MainProps extends BoxProps {
  error?: string;
  isError?: boolean;
  sxWrapper?: BoxProps['sx'];

  Fallback?: React.ReactElement;
  Skeleton?: React.ReactElement;
}

export function SuspenseWithError({
  children,

  error,
  isError = false,
  isLoading,
  isFetching,

  Skeleton,
  Fallback,
  sx,
  sxWrapper,
  ...props
}: PropsWithChildren<LoadingProps & MainProps>) {
  const isPending = isLoading ?? isFetching;
  const isPendingOnce = isLoading !== undefined && isFetching === undefined;

  const defaultFallback = Fallback ?? <AppError message={error} src={imageError} alt="error" />;
  const defaultSkeleton = Skeleton ?? <PageSkeleton />;

  return (
    <Box sx={concatSx(sxStyles.wrapper, sxWrapper)} {...props}>
      <FadeBox isShow={isError}>{defaultFallback}</FadeBox>
      <FadeBox isShow={!isError && isPending} sx={sxStyles.overlayingChildren}>
        {defaultSkeleton}
      </FadeBox>
      <FadeBox isShow={!isError && !isPending} unmountOnExit={isError || isPendingOnce} sx={concatSx(sxStyles.overlayingChildren, sx)}>
        {children}
      </FadeBox>
    </Box>
  );
}
