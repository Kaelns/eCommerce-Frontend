import type { Theme, StackProps } from '@mui/system';
import type { SxProps, BoxProps } from '@mui/material';
import type { SxStyles, SrcsetPxAsc } from '@/shared/types/types';

import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { useState, useEffect } from 'react';
import { grey } from '@mui/material/colors';

import { createSrcset } from '@/utils/strings/createSrcset';
import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

import { ImgSkeleton } from '@/components/skeletons/ImgSkeleton';

import { sxMixins } from '@/shared/data/mui-mixins';

const sxStyles: SxStyles = {
  container: {
    position: 'relative',
    borderRadius: 1
  },
  skeleton: {
    position: 'absolute',
    bgcolor: grey[200]
  },
  img: {
    width: 1,
    height: 1,
    borderRadius: 1,
    objectFit: 'contain'
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

// TODO change to custom Suspense
export function ImgLoad<T extends StackProps['height']>({
  src,
  height,
  srcset,
  onClick,
  sx = {},
  containerStyles = {},
  ...props
}: ImgLoadProps<T>): React.ReactNode {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [srcSetOfImg, setSrcSetOfImg] = useState('');

  const handleOnImgLoad = (): void => {
    setIsImgLoading(false);
  };

  // TODO slice srcSetArr for max height and add isCreateSrcSet.
  // TODO add createSrcset to useState default value
  useEffect(() => {
    if (srcset) {
      if (typeof height === 'number') {
        setSrcSetOfImg(createSrcset(src, srcset.srcSetArr, height));
      } else if ('maxSize' in srcset) {
        setSrcSetOfImg(createSrcset(src, srcset.srcSetArr, srcset.maxSize));
      }
    }
  }, [height, src, srcset]);

  return (
    <Stack
      height={height}
      onClick={onClick}
      alignItems="center"
      justifyContent="center"
      sx={[sxStyles.container, sxMixins.animation(), ...convertSxToArr(containerStyles)]}
    >
      <ImgSkeleton sx={[sxStyles.skeleton, sxMixins.animation(), !isImgLoading && sxMixins.invisible]} />
      <Box
        component="img"
        src={src}
        srcSet={srcSetOfImg}
        loading="lazy"
        onLoad={handleOnImgLoad}
        sx={[sxStyles.img, sxMixins.animation(), isImgLoading && sxMixins.invisible, ...convertSxToArr(sx)]}
        {...props}
      />
    </Stack>
  );
}
