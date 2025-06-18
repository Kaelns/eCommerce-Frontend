import type { Theme, StackProps } from '@mui/system';
import type { SxProps, BoxProps } from '@mui/material';
import type { SxStylesMap } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { grey } from '@mui/material/colors';

import { createSrcSet, type SrcsetInPx } from '@/shared/api/ecommerce-api';

import { FadeBox } from '@/shared/ui/components/boxes/FadeBox';
import { ImgSkeleton } from '@/shared/ui/components/skeletons/ImgSkeleton';
import { sxMixins } from '@/shared/lib/mui';
import { concatSx } from '@/shared/lib/helpers';
import { getMaxMuiHeight } from '@/shared/lib/utils';

const sxStyles = {
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    ...sxMixins.animation()
  },

  skeleton: {
    bgcolor: grey[200]
  },

  skeletonWrapper: {
    position: 'absolute'
  },

  img: {
    borderRadius: 1,
    objectFit: 'contain',
    ...sxMixins.animation()
  },

  sizes100: {
    width: 1,
    height: 1
  }
} satisfies SxStylesMap;

export interface ImgLoadProps extends BoxProps<'img'> {
  src: string;
  alt: string;

  srcSetArr?: SrcsetInPx;
  height?: StackProps['height'];
  maxSize?: 'unlimited' | number;

  sxContainer?: SxProps<Theme>;
}

export function ImgLoad({
  src,
  height,
  maxSize,
  srcSetArr,
  onClick,

  sx,
  sxContainer,
  ...props
}: ImgLoadProps) {
  const [isImgLoading, setIsImgLoading] = useState(true);

  const handleOnImgLoad = (): void => {
    setIsImgLoading(false);
  };

  const srcSetOfImg = useMemo(() => {
    if (!srcSetArr) {
      return;
    }

    let maxHeight;

    if (maxSize) {
      maxHeight = maxSize;
    } else if (height) {
      maxHeight = getMaxMuiHeight(height);
    } else if (sxContainer && 'height' in sxContainer) {
      maxHeight = getMaxMuiHeight(sxContainer.height as StackProps['height']);
    }

    return createSrcSet(src, srcSetArr, maxHeight);
  }, [height, maxSize, src, srcSetArr, sxContainer]);

  return (
    <Stack height={height} onClick={onClick} sx={concatSx(sxStyles.container, sxContainer)}>
      <FadeBox isShow={isImgLoading} sx={[sxStyles.skeletonWrapper, sxStyles.sizes100]}>
        <ImgSkeleton sx={sxStyles.skeleton} />
      </FadeBox>
      <FadeBox isShow={!isImgLoading} sx={sxStyles.sizes100} unmountOnExit={false}>
        <Box
          component="img"
          src={src}
          srcSet={srcSetOfImg}
          loading="lazy"
          onLoad={handleOnImgLoad}
          sx={concatSx(sxStyles.img, sxStyles.sizes100, sx)}
          {...props}
        />
      </FadeBox>
    </Stack>
  );
}
