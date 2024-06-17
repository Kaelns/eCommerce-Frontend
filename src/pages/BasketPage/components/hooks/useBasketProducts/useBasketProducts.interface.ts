import { Image } from '@commercetools/platform-sdk';

export interface IGetPricesReturn {
  price: number;
  discount: number;
  discountedPrice: number;
}

export interface IBasketProduct extends IGetPricesReturn {
  id: string;
  key: string;
  name: string;
  images: Image[];
  quantity: number;
  imageUrl: string;
}
