import { useState } from 'react';
import { Stack } from '@mui/system';
import { AppError } from '@/layout/AppError';
import { sxMixins } from '@/shared/data/mui-mixins';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';
import type { StackProps } from '@mui/system';
import type { PropsWithChildren, SxStyles } from '@/shared/types/types';
import imageError from '@/shared/assets/error2.png';
import { revealAnimation } from '@/shared/data/mui-animations';
import { PageSkeleton } from '@/components/skeletons/PageSkeleton';

const sxStyles: SxStyles = {
  container: {
    position: 'relative'
  },
  skeletonWrapper: {
    width: 1,
    animation: `${revealAnimation} 0.3s ease-out`,
    bgcolor: 'common.background',
    ...sxMixins.animation()
  },
  childrenWrapper: {
    width: 1,
    animation: `${revealAnimation} 0.3s ease-out`,
    ...sxMixins.animation()
  }
};

interface ILoadingFetchProps extends StackProps {
  settings: {
    isLoading: boolean;
    isError: boolean;
    error?: string;
  };
  Skeleton?: React.ReactNode;
  Fallback?: React.ReactNode;
}

export function SuspenseWithError({
  children,
  settings: { isLoading, isError, error },
  Skeleton = <PageSkeleton />,
  Fallback = <AppError message={error} src={imageError} alt="error" />,
  sx = {},
  ...props
}: PropsWithChildren<ILoadingFetchProps>): React.ReactNode {
  const [isLoadingAfterTransition, setIsLoadingAfterTransition] = useState(true);

  const onTransitionEndHandler = () => {
    setIsLoadingAfterTransition(isLoading);
  };

  // * That animation (transition) logic works on fade-out. There is css "animation" on fade-in.
  return isError ? (
    Fallback
  ) : isLoadingAfterTransition ? (
    <Stack sx={[sxStyles.skeletonWrapper, sxMixins.invisible, isLoading && sxMixins.visible]} onTransitionEnd={onTransitionEndHandler}>
      {Skeleton}
    </Stack>
  ) : (
    <Stack
      sx={[sxStyles.childrenWrapper, isLoading && sxMixins.invisible, ...convertSxToArr(sx)]}
      onTransitionEnd={onTransitionEndHandler}
      {...props}
    >
      {children}
    </Stack>
  );
}
