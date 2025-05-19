import type { ProductProjection } from '@commercetools/platform-sdk';
import type { Product } from '@/entities/product/model/product.types';

import { getProductPricesObj } from '@/shared/lib/helpers';

import imageNotAvailable from '@/shared/assets/image_not_available.png';

const MOCK_PRODUCT: Product = {
  id: '',
  key: '',
  name: {},
  description: {},
  images: [],
  imageUrl: '',
  pricesObj: {},
  maxQuantity: 0,
  categoriesIdArr: []
};

export function convertToLightProduct(product: ProductProjection | undefined): Product {
  if (!product) {
    return MOCK_PRODUCT;
  }

  const prices = product.masterVariant.prices ?? [];
  const images = product.masterVariant?.images ?? [];

  const imageUrl = images[0] ? images[0].url : imageNotAvailable;
  const categoriesIdArr = product.categories.map((obj) => obj.id);
  const maxQuantity = product.masterVariant?.availability?.availableQuantity ?? 0;

  const pricesObj = getProductPricesObj(prices);

  return {
    id: product.id,
    key: product.key ?? product.id,
    name: product.name,
    description: product.description,
    images,
    imageUrl,
    pricesObj,
    maxQuantity,
    categoriesIdArr
  };
}
