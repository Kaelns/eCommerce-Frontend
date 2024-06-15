import { ImageLoad } from '@/components/ImageLoad/ImageLoad';
import { IUseProductReturn } from '@/hooks/useProduct/useProduct.interface';

export const createImagesCallback =
  (productData: IUseProductReturn, containerStyles: string, imgStyles: string) =>
  (classObj: string, onClick?: (num: number) => () => void): React.ReactNode[] =>
    productData.images.map((imageData, index) => (
      <ImageLoad
        key={imageData.url}
        src={imageData.url}
        alt={productData.name}
        containerStyles={`${classObj} ${containerStyles}`}
        imgStyles={imgStyles}
        onClick={onClick ? onClick(index) : (): void => {}}
      />
    ));
