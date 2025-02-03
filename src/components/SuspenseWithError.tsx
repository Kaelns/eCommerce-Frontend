import type { StackProps } from '@mui/system';
import type { SxStyles, PropsWithChildren } from '@/shared/types/types';

import { Fade } from '@mui/material';
import { Box, Stack } from '@mui/system';

import { AppError } from '@/layout/AppError';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

import { PageSkeleton } from '@/components/skeletons/PageSkeleton';

import imageError from '@/shared/assets/error2.png';

const sxStyles: SxStyles = {
  wrapper: {
    width: 1
    // display: 'grid',
    // gridTemplateAreas: 'stack',
    // '& > *': { gridArea: 'stack' }
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
      <Fade in={isError} unmountOnExit>
        <Box>{Fallback}</Box>
      </Fade>
      <Fade in={!isError && isLoading} unmountOnExit>
        {Skeleton}
      </Fade>
      <Fade in={!isError && !isLoading}>
        <Stack width={1}>{children}</Stack>
      </Fade>
    </Box>
  );
}

// const [isLoadingAfterTransition, setIsLoadingAfterTransition] = useState(isLoading);

// const onTransitionEndHandler = () => {
//   setIsLoadingAfterTransition(isLoading);
// };

// return isError ? (
//   Fallback
// ) : isLoadingAfterTransition ? (
//   <Stack sx={[sxStyles.skeletonWrapper, sxMixins.invisible, isLoading && sxMixins.visible]} onTransitionEnd={onTransitionEndHandler}>
//     {Skeleton}
//   </Stack>
// ) : (
//   <Stack
//     sx={[sxStyles.childrenWrapper, sxMixins.visible, isLoading && sxMixins.invisible, ...convertSxToArr(sx)]}
//     onTransitionEnd={onTransitionEndHandler}
//     {...props}
//   >
//     {children}
//   </Stack>
// );
