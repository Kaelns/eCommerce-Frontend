import type { PriceConverted } from '@/shared/model/types';
import type { Image, LocalizedString, DiscountCodeReference } from '@commercetools/platform-sdk';

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

  productsIds: string[];
  productsQuantity: number;
  products: CartLightAllProducts;

  isPromocode: boolean;
  discountCodesRefs: DiscountCodeReference[];
}

export interface CartLightProduct {
  productId: string;
  cartProductLineId: string;

  images: Image[];
  imageUrl: string;
  quantity: number;
  maxQuantity: number;
  name: LocalizedString;
  pricesObj: Record<string, PriceConverted>;
}
