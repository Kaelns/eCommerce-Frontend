import type { PriceConverted } from '@/shared/model/types/types';
import type { Image, LocalizedString } from '@commercetools/platform-sdk';

export interface CartData {
  cartId: string;
  version: number;
}

export interface CartLightAllProducts {
  [key: string]: CartLightProduct;
}

export interface CartLight {
  id: string;
  version: number;
  discount: number;
  isPromocode: boolean;
  productsIds: string[];
  productsQuantity: number;
  products: CartLightAllProducts;
}

export interface CartLightProduct {
  lineId: string;
  images: Image[];
  imageUrl: string;
  quantity: number;
  productId: string;
  maxQuantity: number;
  name: LocalizedString;
  pricesObj: Record<string, PriceConverted>;
}
