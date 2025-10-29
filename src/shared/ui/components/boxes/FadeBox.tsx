import type { BoxProps } from '@mui/system';
import type { PropsWithChildren } from '@/shared/model/types';

import { Box } from '@mui/system';
import { Fade } from '@mui/material';

interface FadeBoxProps extends BoxProps {
  isShow: boolean;
  timeout?: number;
  unmountOnExit?: boolean;
}

export function FadeBox({ isShow, children, unmountOnExit = true, timeout, ...props }: PropsWithChildren<FadeBoxProps>) {
  return (
    <Fade in={isShow} timeout={650} unmountOnExit={unmountOnExit}>
      <Box {...props}>{children}</Box>
    </Fade>
  );
}
