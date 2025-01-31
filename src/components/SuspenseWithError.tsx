import type { StackProps } from '@mui/system';
import type { SxStyles, PropsWithChildren } from '@/shared/types/types';

import { useState } from 'react';
import { Stack } from '@mui/system';

import { AppError } from '@/layout/AppError';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

import { PageSkeleton } from '@/components/skeletons/PageSkeleton';

import { sxMixins } from '@/shared/data/mui-mixins';
import imageError from '@/shared/assets/error2.png';
import { revealAnimation } from '@/shared/data/mui-animations';

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
  Skeleton?: React.ReactNode;
  Fallback?: React.ReactNode;
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
}: PropsWithChildren<ILoadingFetchProps>): React.ReactNode {
  const [isLoadingAfterTransition, setIsLoadingAfterTransition] = useState(isLoading);

  const onTransitionEndHandler = () => {
    setIsLoadingAfterTransition(isLoading);
  };

  // * That animation (transition) logic works on fade-out. There is css "animation" on fade-in.
  //  TODO check if works and then change on Fade from mui with unmountOnExit
  return isError ? (
    Fallback
  ) : isLoadingAfterTransition ? (
    <Stack sx={[sxStyles.skeletonWrapper, sxMixins.invisible, isLoading && sxMixins.visible]} onTransitionEnd={onTransitionEndHandler}>
      {Skeleton}
    </Stack>
  ) : (
    <Stack
      sx={[sxStyles.childrenWrapper, sxMixins.visible, isLoading && sxMixins.invisible, ...convertSxToArr(sx)]}
      onTransitionEnd={onTransitionEndHandler}
      {...props}
    >
      {children}
    </Stack>
  );
}
