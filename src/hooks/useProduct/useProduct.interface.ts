import { Image } from '@commercetools/platform-sdk';

export interface IGetPricesReturn {
  price: number;
  discount: number;
  discountedPrice: number;
}

export interface IUseProductReturn {
  id: string;
  key: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
  categoriesIdArr: string[];
  images: Image[];
}
