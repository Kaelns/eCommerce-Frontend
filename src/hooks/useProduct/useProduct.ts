import { ProductProjection } from '@commercetools/platform-sdk';
import { LANGUAGE, COUNTRY } from '@/services/ECommerceInitApi.constants';
import { getPrices } from '@/hooks/useProduct/useProduct.helpers';
import { IUseProductReturn } from '@/hooks/useProduct/useProduct.interface';
import { MOCK_PRODUCT } from '@/hooks/useProduct/useProduct.constants';
import imageNotAvailable from '@/assets/image_not_available.png';

export function useProduct(product: ProductProjection | undefined): IUseProductReturn {
  if (!product) {
    return MOCK_PRODUCT;
  }

  const [id, key, name, description, categories] = [
    product.id,
    product.key!,
    product.name[LANGUAGE],
    product.description ? product.description[LANGUAGE] : '',
    product.categories
  ];
  const [image, prices] = [product.masterVariant?.images?.[0], product.masterVariant.prices];

  const categoriesIdArr = categories.map((obj) => obj.id);
  const pricesObjUSD = prices ? prices.find((obj) => obj.country === COUNTRY) : null;
  const imageUrl = image ? image.url : imageNotAvailable;
  const images = product.masterVariant?.images ? product.masterVariant?.images : [];
  const maxQuantity = product.masterVariant?.availability?.availableQuantity
    ? product.masterVariant.availability.availableQuantity
    : 0;

  const { price, discountedPrice, discount } = getPrices(pricesObjUSD);

  return {
    id,
    key,
    name,
    description,
    maxQuantity,
    categoriesIdArr,
    price,
    discountedPrice,
    discount,
    imageUrl,
    images
  };
}
