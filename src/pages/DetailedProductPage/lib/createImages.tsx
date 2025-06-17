import type { ImgLoadProps } from '@/shared/ui/components';

import { ImgLoad } from '@/shared/ui/components';

interface CreateImagesArrProps extends Omit<ImgLoadProps, 'onClick' | 'src'> {
  srcArr: string[];
  onClick?: (index: number) => () => void;
}

export function createImagesArr({ srcArr, onClick, ...props }: CreateImagesArrProps) {
  return srcArr.map((src, index) => <ImgLoad key={src} src={src} onClick={onClick?.(index)} {...props} />);
}
