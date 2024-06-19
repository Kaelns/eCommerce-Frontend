import { Image } from '@commercetools/platform-sdk';

export interface IGetPricesReturn {
  price: number;
  discount: number;
  discountedPrice: number;
}

export interface IUseProductReturn extends IGetPricesReturn {
  id: string;
  key: string;
  name: string;
  imageUrl: string;
  maxQuantity: number;
  description: string;
  categoriesIdArr: string[];
  images: Image[];
}
