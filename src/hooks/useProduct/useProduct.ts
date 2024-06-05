import { ProductProjection } from '@commercetools/platform-sdk';
import { LANGUAGE, COUNTRY } from '@/services/ECommerceInitApi.constants';
import imageNotAvailable from '@/assets/image_not_available.png';
import { getPrices } from '@/hooks/useProduct/useProduct.helpers';
import { IUseProductReturn } from '@/hooks/useProduct/useProduct.interface';
import { MOCK_PRODUCT } from '@/hooks/useProduct/useProduct.constants';

export function useProduct(product: ProductProjection | undefined): IUseProductReturn {
  if (!product) {
    return MOCK_PRODUCT;
  }

  const [key, name, description, categories] = [
    product.key!,
    product.name[LANGUAGE],
    product.description ? product.description[LANGUAGE] : '',
    product.categories
  ];
  const [image, prices] = [product.masterVariant?.images?.[0], product.masterVariant.prices];

  const pricesObjUSD = prices ? prices.find((obj) => obj.country === COUNTRY) : null;
  const imageUrl = image ? image.url : imageNotAvailable;
  const images = product.masterVariant?.images ? product.masterVariant?.images : [];

  const { price, discounted, discount } = getPrices(pricesObjUSD);

  return { key, name, description, categories, price, discounted, discount, imageUrl, images };
}
