import type { UserLocation } from '@/entities/user';
import type { LineItem } from '@commercetools/platform-sdk';
import type { CartProduct } from '@/entities/cart/model/types/cart.types';

import { getProductPrices } from '@/entities/product/lib/helpers/objects/getProductPrices';

import imageNotAvailable from '@/shared/assets/image_not_available.png';

export const MOCK_BASKET_PRODUCT: CartProduct = {
  id: '',
  lineId: '',
  key: '',
  name: '',
  images: [],
  imageUrl: '',
  quantity: 0,
  maxQuantity: 0,
  price: 0,
  discount: 0,
  discountedPrice: 0
};

export function convertToLightCartProduct(basketProduct: LineItem, { language, country }: UserLocation): CartProduct {
  if (!basketProduct) {
    return MOCK_BASKET_PRODUCT;
  }

  const [id, lineId, key, name] = [basketProduct.productId, basketProduct.id, basketProduct.key!, basketProduct.name[language]];
  const [image, prices] = [basketProduct.variant?.images?.[0], basketProduct.variant.prices];

  const { quantity } = basketProduct;
  const images = basketProduct.variant?.images ? basketProduct.variant?.images : [];
  const imageUrl = image ? image.url : imageNotAvailable;
  const pricesObjUSD = prices ? prices.find((obj) => obj.country === country) : null;
  const maxQuantity = basketProduct.variant?.availability?.availableQuantity ? basketProduct.variant.availability.availableQuantity : 0;

  const { price, discountedPrice, discount } = getProductPrices(pricesObjUSD);

  return { id, lineId, key, name, quantity, maxQuantity, price, discountedPrice, discount, imageUrl, images };
}
