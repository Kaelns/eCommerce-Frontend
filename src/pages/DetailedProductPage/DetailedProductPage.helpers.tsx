import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import { ImgLoad } from '@/components/ImgLoad';
import { IProduct } from '@/shared/types';

export interface ICreateImagesStyles {
  containerStyles?: SxProps<Theme>;
  imgStyles?: SxProps<Theme>;
}

export const createImagesMap = (
  productData: IProduct,
  styles?: ICreateImagesStyles,
  onClick?: (num: number) => () => void
): React.ReactNode[] =>
  productData.images.map((imageData, index) => (
    <ImgLoad
      key={imageData.url}
      src={imageData.url}
      alt={productData.name}
      sx={styles?.imgStyles}
      containerStyles={styles?.containerStyles}
      onClick={onClick ? onClick(index) : (): void => {}}
    />
  ));
