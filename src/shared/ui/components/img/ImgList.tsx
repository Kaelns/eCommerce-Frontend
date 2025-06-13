import { memo } from 'react';

import { ImgLoad, type ImgLoadProps } from '@/shared/ui/components/img/ImgLoad';

interface ImgListProps extends Omit<ImgLoadProps, 'onClick' | 'src'> {
  srcArr: string[];
  onClick?: (num: number) => (e?: React.MouseEvent<HTMLImageElement>) => void;
}

export const ImgList = memo(function ImgList({ srcArr, onClick, ...props }: ImgListProps) {
  return (
    <>
      {srcArr.map((src, index) => (
        <ImgLoad key={src} src={src} onClick={onClick?.(index)} {...props} />
      ))}
    </>
  );
});
