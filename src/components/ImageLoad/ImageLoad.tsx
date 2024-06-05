import { Box } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { ImgSkeleton } from '@/components/ImgSkeleton/ImgSkeleton';

import styles from './ImageLoad.module.scss';

export function ImageLoad({ src, alt, className = '' }: React.ComponentProps<'img'>): React.ReactNode {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const ref = useRef<HTMLImageElement>();

  const handleOnImgLoad = (): void => {
    setIsImgLoading(false);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      handleOnImgLoad();
    }
  });

  return (
    <Box className={`${className} ${styles.imgWrapper}`}>
      {isImgLoading && <ImgSkeleton className={styles.skeleton} />}
      <Box ref={ref} component="img" src={src} alt={alt} className={styles.img} onLoad={handleOnImgLoad} />
    </Box>
  );
}
