import { Box } from '@mui/material';
import type { StackProps } from '@mui/system';
import { Stack } from '@mui/system';
import type { PropsWithChildren, SxStyles } from '@/shared/types/types';
import { ErrorBody } from '@/layout/ErrorBody';
import { convertSxToArr } from '@/utils/convert/convertSxToArr';
import { sxMixins } from '@/shared/data/mui-mixins';
import imageError from '@/shared/assets/error2.png';

const sxStyles: SxStyles = {
  container: {
    position: 'relative'
  },
  skeleton: {
    position: 'absolute',
    bgcolor: 'common.background',
    inset: 0,
    zIndex: 1000,
    ...sxMixins.animation()
  },
  childrenWrapper: {
    width: 1,
    ...sxMixins.animation()
  }
};

interface ILoadingFetchProps extends StackProps {
  error: string;
  isLoading: boolean;
  Skeleton: (props: StackProps) => React.ReactNode;
}

//  TODO suspence
export function LoadingFetch({ children, error, isLoading, Skeleton, sx = {}, ...props }: PropsWithChildren<ILoadingFetchProps>): React.ReactNode {
  return error ? (
    <ErrorBody message={error} src={imageError} alt="error" />
  ) : (
    <Box sx={sxStyles.container} {...props}>
      <Skeleton sx={[sxStyles.skeleton, !isLoading && sxMixins.invisible]} />
      <Stack sx={[sxStyles.childrenWrapper, isLoading && sxMixins.invisible, ...convertSxToArr(sx)]}>{children}</Stack>
    </Box>
  );
}
