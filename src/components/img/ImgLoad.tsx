import type { Theme, StackProps } from '@mui/system';
import type { SxProps, BoxProps } from '@mui/material';
import type { SxStyles, SrcsetPxAsc } from '@/shared/types/types';

import { Stack } from '@mui/system';
import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { grey } from '@mui/material/colors';

import { createSrcset } from '@/utils/strings/createSrcset';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

import { FadeBox } from '@/components/boxes/FadeBox';
import { ImgSkeleton } from '@/components/skeletons/ImgSkeleton';

import { sxMixins } from '@/shared/data/mui-mixins';

const sxStyles: SxStyles = {
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
};

interface ImgLoadProps<T extends StackProps['height']> extends BoxProps<'img'> {
  height?: T;
  src: string;
  alt: string;
  containerStyles?: SxProps<Theme>;
  srcset?: T extends number
    ? { srcSetArr: SrcsetPxAsc }
    : {
        srcSetArr: SrcsetPxAsc;
        maxSize: 'unlimited' | number;
      };
}

export function ImgLoad<T extends StackProps['height']>({
  src,
  height,
  srcset,
  onClick,
  sx = {},
  containerStyles = {},
  ...props
}: ImgLoadProps<T>) {
  const [isImgLoading, setIsImgLoading] = useState(true);

  const handleOnImgLoad = (): void => {
    setIsImgLoading(false);
  };

  // TODO slice srcSetArr for max height and add isCreateSrcSet.
  const srcSetOfImg = useMemo(() => {
    if (!srcset) {
      return;
    }
    if (typeof height === 'number') {
      return createSrcset(src, srcset.srcSetArr, height);
    } else if ('maxSize' in srcset) {
      return createSrcset(src, srcset.srcSetArr, srcset.maxSize);
    }
  }, [height, src, srcset]);

  return (
    <Stack height={height} onClick={onClick} sx={[sxStyles.container, ...convertSxToArr(containerStyles)]}>
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
          sx={[sxStyles.img, sxStyles.sizes100, ...convertSxToArr(sx)]}
          {...props}
        />
      </FadeBox>
    </Stack>
  );
}
