import type { SrcsetInPx } from '@/shared/model/types';
import type { Theme, SxProps, StackProps } from '@mui/system';

import { memo } from 'react';

import { ImgLoad } from '@/shared/ui/components/img/ImgLoad';

interface ImgListProps {
  alt: string;
  srcArr: string[];
  srcSetArr?: SrcsetInPx;

  sxImgContainer?: SxProps<Theme>;
  imgHeight?: StackProps['height'];
  imgMaxSize?: 'unlimited' | number;

  onClick?: (num: number) => (e?: React.MouseEvent<HTMLImageElement>) => void;
}

export const ImgList = memo(function ImgList({ srcArr, imgHeight, onClick, sxImgContainer, ...props }: ImgListProps) {
  return (
    <>
      {srcArr.map((src, index) => (
        <ImgLoad key={src} src={src} height={imgHeight} onClick={onClick?.(index)} sxContainer={sxImgContainer} {...props} />
      ))}
    </>
  );
});
