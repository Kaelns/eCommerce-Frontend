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
  settings: {
    error?: string;
    isError: boolean;
    isLoading: boolean;
  };
}

export function SuspenseWithError({
  children,
  settings: { isLoading, isError, error },
  Skeleton = <PageSkeleton />,
  Fallback = <AppError message={error} src={imageError} alt="error" />,
  sx = {},
  ...props
}: PropsWithChildren<LoadingFetchProps>) {
  return (
    <Box sx={[sxStyles.wrapper, ...convertSxToArr(sx)]} {...props}>
      <FadeBox isShow={isError}>{Fallback}</FadeBox>
      <FadeBox isShow={!isError && isLoading} sx={sxStyles.overlayingChildren}>
        {Skeleton}
      </FadeBox>
      <FadeBox isShow={!isError && !isLoading} sx={sxStyles.overlayingChildren} notUnmountOnExit={!isError}>
        {children}
      </FadeBox>
    </Box>
  );
}
