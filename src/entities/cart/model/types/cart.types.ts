import type { Prices } from '@/shared/model/types/types';
import type { Image } from '@commercetools/platform-sdk';

export interface CartProducts {
  [key: string]: CartProduct;
}

export interface CartProduct extends Prices {
  id: string;
  key: string;
  name: string;
  lineId: string;
  images: Image[];
  imageUrl: string;
  quantity: number;
  maxQuantity: number;
}
