import type { Theme, SxProps } from '@mui/system';
import type { PropsWithChildren } from '@/shared/model/types';

import * as React from 'react';

import { FadeBox } from '@/shared/ui/components/boxes/FadeBox';

interface ConditionalFadeProps {
  isShow: boolean;
  Fallback: React.ReactElement;

  sxFallback?: SxProps<Theme>;
  sxChildren?: SxProps<Theme>;
}

export function ConditionalFade({ isShow, children, Fallback, sxFallback, sxChildren }: PropsWithChildren<ConditionalFadeProps>) {
  return (
    <>
      <FadeBox isShow={!isShow} sx={sxFallback}>
        {Fallback}
      </FadeBox>
      <FadeBox isShow={isShow} sx={sxChildren}>
        {children}
      </FadeBox>
    </>
  );
}
