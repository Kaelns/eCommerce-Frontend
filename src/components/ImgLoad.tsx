import { Box, BoxProps, SxProps } from '@mui/material';
import { useState } from 'react';
import { Stack, StackProps, Theme } from '@mui/system';
import { grey } from '@mui/material/colors';
import { ImgSkeleton } from '@/components/skeleton/ImgSkeleton';
import { convertSxToArr } from '@/utils/convertSxToArr';
import { SxStyles } from '@/shared/types';
import { sxMixins } from '@/features/MuiTheme/mixins';

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

interface IImgLoadProps extends BoxProps {
  src: string;
  alt: string;
  height: StackProps['height'];
  containerStyles?: SxProps<Theme>;
}

export function ImgLoad({ height, onClick, sx = {}, containerStyles = {}, ...props }: IImgLoadProps): React.ReactNode {
  const [isImgLoading, setIsImgLoading] = useState(true);

  const handleOnImgLoad = (): void => {
    setIsImgLoading(false);
  };

  // TODO srcset

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
        loading="lazy"
        onLoad={handleOnImgLoad}
        sx={[sxStyles.img, sxMixins.animation(), isImgLoading && sxMixins.invisible, ...convertSxToArr(sx)]}
        {...props}
      />
    </Stack>
  );
}
