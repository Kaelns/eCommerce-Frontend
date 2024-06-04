import { ProductProjection } from '@commercetools/platform-sdk';
import { LANGUAGE, COUNTRY } from '@/services/ECommerceInitApi.constants';
import imageNotAvailable from '@/assets/image_not_available.png';
import { getPrices } from '@/hooks/useProduct/useProduct.helpers';
import { IUseProductReturn } from '@/hooks/useProduct/useProduct.interface';

export function useProduct(product: ProductProjection): IUseProductReturn {
  const [key, name, description] = [
    product.key!,
    product.name[LANGUAGE],
    product.description ? product.description[LANGUAGE] : ''
  ];
  const [image, prices] = [product.masterVariant?.images?.[0], product.masterVariant.prices];

  const pricesObjUSD = prices ? prices.find((obj) => obj.country === COUNTRY) : null;
  const imageUrl = image ? image.url : imageNotAvailable;

  const { price, discounted, discount } = getPrices(pricesObjUSD);

  return { key, name, description, price, discounted, discount, imageUrl };
}
