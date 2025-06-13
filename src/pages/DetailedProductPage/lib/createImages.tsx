import type { ImgLoadProps } from '@/shared/ui/components';

import { ImgLoad } from '@/shared/ui/components';

interface CreateImagesArrProps extends Omit<ImgLoadProps, 'src'> {
  srcArr: string[];
}

export function createImagesArr({ srcArr, ...props }: CreateImagesArrProps) {
  return srcArr.map((src) => <ImgLoad key={src} src={src} {...props} />);
}
