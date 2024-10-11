import type { BoxProps, SxProps } from '@mui/material';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import type { StackProps, Theme } from '@mui/system';
import { Stack } from '@mui/system';
import { grey } from '@mui/material/colors';
import { ImgSkeleton } from '@/components/skeleton/ImgSkeleton';
import { convertSxToArr } from '@/utils/convert/convertSxToArr';
import type { ISrcsetPxAsc, SxStyles } from '@/shared/types';
import { sxMixins } from '@/features/mui-theme/mixins';
import { createSrcset } from '@/utils/create/createSrcset';

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

interface IImgLoadProps<T extends StackProps['height']> extends BoxProps<'img'> {
  src: string;
  alt: string;
  height?: T;
  srcset?: T extends number
    ? { srcSetArr: ISrcsetPxAsc }
    : {
        srcSetArr: ISrcsetPxAsc;
        maxSize: number | 'unlimited';
      };
  containerStyles?: SxProps<Theme>;
}

export function ImgLoad<T extends StackProps['height']>({
  src,
  height,
  srcset,
  onClick,
  sx = {},
  containerStyles = {},
  ...props
}: IImgLoadProps<T>): React.ReactNode {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [srcSetOfImg, setSrcSetOfImg] = useState('');

  const handleOnImgLoad = (): void => {
    setIsImgLoading(false);
  };

  // TODO slice srcSetArr for max height and add isCreateSrcSet
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
