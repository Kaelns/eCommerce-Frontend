import { Image } from '@commercetools/platform-sdk';

export interface IGetPricesReturn {
  price: number;
  discount: number;
  discountedPrice: number;
}

export interface IBasketProductReturn extends IGetPricesReturn {
  id: string;
  lineId: string;
  key: string;
  name: string;
  images: Image[];
  quantity: number;
  maxQuantity: number;
  imageUrl: string;
}
