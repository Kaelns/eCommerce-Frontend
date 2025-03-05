import type { LineItem } from '@commercetools/platform-sdk';
import type { CartLightProduct } from '@/entities/cart/model/types/cart.types';

import { getProductPricesObj } from '@/entities/product';

import imageNotAvailable from '@/shared/assets/image_not_available.png';

export const MOCK_BASKET_PRODUCT: CartLightProduct = {
  name: {},
  lineId: '',
  images: [],
  quantity: 0,
  imageUrl: '',
  pricesObj: {},
  productId: '',
  maxQuantity: 0
};

export function convertToLightCartProduct(basketProduct: LineItem): CartLightProduct {
  if (!basketProduct) {
    return MOCK_BASKET_PRODUCT;
  }

  const prices = basketProduct.variant.prices ?? [];
  const images = basketProduct.variant?.images ?? [];

  const imageUrl = images[0] ? images[0].url : imageNotAvailable;
  const maxQuantity = basketProduct.variant?.availability?.availableQuantity ?? 0;

  const pricesObj = getProductPricesObj(prices);

  return {
    name: basketProduct.name,
    lineId: basketProduct.id,
    productId: basketProduct.productId,
    quantity: basketProduct.quantity,
    images,
    imageUrl,
    pricesObj,
    maxQuantity
  };
}
