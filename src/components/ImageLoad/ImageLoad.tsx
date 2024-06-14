import { Box } from '@mui/material';
import { useState, useRef } from 'react';
import { ImgSkeleton } from '@/components/ImgSkeleton/ImgSkeleton';
import { IImageLoadProps } from '@/components/ImageLoad/ImageLoad.interface';

import styles from './ImageLoad.module.scss';

export function ImageLoad({
  src,
  alt,
  height,
  imgStyles = '',
  containerStyles = '',
  onClick
}: IImageLoadProps): React.ReactNode {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const ref = useRef<HTMLImageElement>();

  const handleOnImgLoad = (): void => {
    setIsImgLoading(false);
  };

  return (
    <Box className={`${containerStyles} ${styles.imgWrapper}`} height={height} onClick={onClick}>
      <ImgSkeleton className={`${styles.skeleton} ${isImgLoading ? '' : styles.disabled}`} />
      <Box
        ref={ref}
        component="img"
        src={src}
        alt={alt}
        className={`${imgStyles} ${styles.img}`}
        onLoad={handleOnImgLoad}
        loading="lazy"
      />
    </Box>
  );
}
