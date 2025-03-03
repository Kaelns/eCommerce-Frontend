import type { LineItem } from '@commercetools/platform-sdk';
import type { PriceConverted } from '@/shared/model/types/types';
import type { CartProduct } from '@/entities/cart/model/types/cart.types';

import { getProductPrice } from '@/entities/product';

import imageNotAvailable from '@/shared/assets/image_not_available.png';

export const MOCK_BASKET_PRODUCT: CartProduct = {
  name: {},
  lineId: '',
  images: [],
  quantity: 0,
  imageUrl: '',
  pricesObj: {},
  productId: '',
  maxQuantity: 0
};

export function convertToLightCartProduct(basketProduct: LineItem): CartProduct {
  if (!basketProduct) {
    return MOCK_BASKET_PRODUCT;
  }

  const { productId, id: lineId, quantity } = basketProduct;

  const name = basketProduct.name;
  const prices = basketProduct.variant.prices ?? [];
  const images = basketProduct.variant?.images ?? [];

  const imageUrl = images[0] ? images[0].url : imageNotAvailable;
  const maxQuantity = basketProduct.variant?.availability?.availableQuantity ?? 0;

  const pricesObj = prices.reduce<Record<string, PriceConverted>>((acc, priceObj) => {
    acc[priceObj.country ?? priceObj.value.currencyCode] = getProductPrice(priceObj);
    return acc;
  }, {});

  return {
    name,
    images,
    lineId,
    quantity,
    imageUrl,
    pricesObj,
    productId,
    maxQuantity
  };
}
