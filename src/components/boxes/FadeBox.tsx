import type { BoxProps } from '@mui/system';
import type { PropsWithChildren } from '@/shared/types/types';

import { Box } from '@mui/system';
import { Fade } from '@mui/material';

interface FadeBoxProps extends BoxProps {
  isShow: boolean;
  timeout?: number;
  notUnmountOnExit?: boolean;
}
export function FadeBox({ isShow, children, notUnmountOnExit = false, timeout, ...props }: PropsWithChildren<FadeBoxProps>) {
  return (
    <Fade in={isShow} timeout={650} unmountOnExit={!notUnmountOnExit}>
      <Box {...props}>{children}</Box>
    </Fade>
  );
}
