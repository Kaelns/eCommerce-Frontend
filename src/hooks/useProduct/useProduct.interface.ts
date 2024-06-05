import { Image } from '@commercetools/platform-sdk';

export interface IGetPricesReturn {
  price: number;
  discount: number;
  discounted: number;
}

export interface IUseProductReturn {
  key: string;
  name: string;
  description: string;
  price: number;
  discounted: number;
  discount: number;
  imageUrl: string;
  categoriesIdArr: string[];
  images: Image[];
}
