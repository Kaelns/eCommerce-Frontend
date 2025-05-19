import type { CartLightProduct } from '@/entities/cart';
import type { LineItem } from '@commercetools/platform-sdk';

import { getProductPricesObj } from '@/shared/lib/helpers';

import imageNotAvailable from '@/shared/assets/image_not_available.png';

const MOCK_BASKET_PRODUCT: CartLightProduct = {
  productId: '',
  cartProductLineId: '',

  name: {},
  images: [],
  quantity: 0,
  imageUrl: '',
  pricesObj: {},
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
    productId: basketProduct.productId,
    cartProductLineId: basketProduct.id,

    name: basketProduct.name,
    quantity: basketProduct.quantity,
    images,
    imageUrl,
    pricesObj,
    maxQuantity
  };
}
