import type { ProductProjection } from '@commercetools/platform-sdk';
import type { Product } from '@/shared/types/types';
import imageNotAvailable from '@/shared/assets/image_not_available.png';
import { COUNTRY, LANGUAGE } from '@/services/ecommerce-api';
import { getProductPrices } from '@/services/ecommerce-api/helpers/products/getProductPrices';

const MOCK_PRODUCT: Product = {
  id: '',
  key: '',
  name: '',
  price: 0,
  discount: 0,
  maxQuantity: 0,
  description: '',
  discountedPrice: 0,
  images: [],
  imageUrl: '',
  categoriesIdArr: []
};

// TODO pure function

export function convertToLightProduct(product: ProductProjection | undefined): Product {
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
  const pricesObj = prices ? prices.find((obj) => obj.country === COUNTRY) : null;
  const imageUrl = image ? image.url : imageNotAvailable;
  const images = product.masterVariant?.images ? product.masterVariant?.images : [];
  const maxQuantity = product.masterVariant?.availability?.availableQuantity ? product.masterVariant.availability.availableQuantity : 0;

  const { price, discountedPrice, discount } = getProductPrices(pricesObj);

  return {
    id,
    key,
    name,
    price,
    description,
    maxQuantity,
    categoriesIdArr,
    discountedPrice,
    discount,
    imageUrl,
    images
  };
}
