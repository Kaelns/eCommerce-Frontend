import type { PriceConverted } from '@/shared/model/types/types';
import type { Image, LocalizedString } from '@commercetools/platform-sdk';

export interface CartProducts {
  [key: string]: CartProduct;
}

export interface CartData {
  cartId: string;
  version: number;
}

export interface CartProduct {
  lineId: string;
  images: Image[];
  imageUrl: string;
  quantity: number;
  productId: string;
  maxQuantity: number;
  name: LocalizedString;
  pricesObj: Record<string, PriceConverted>;
}
