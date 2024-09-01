import { LineItem } from '@commercetools/platform-sdk';
import { LANGUAGE, COUNTRY } from '@/services/ECommerceInitApi.constants';
import { IBasketProduct } from '@/shared/types';
import imageNotAvailable from '@/assets/image_not_available.png';
import { getProductPrices } from '@/services/helpers/getProductPrices';

export const MOCK_BASKET_PRODUCT: IBasketProduct = {
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

export function getLightBasketProduct(basketProduct: LineItem): IBasketProduct {
  if (!basketProduct) {
    return MOCK_BASKET_PRODUCT;
  }

  const [id, lineId, key, name] = [
    basketProduct.productId,
    basketProduct.id,
    basketProduct.key!,
    basketProduct.name[LANGUAGE]
  ];
  const [image, prices] = [basketProduct.variant?.images?.[0], basketProduct.variant.prices];

  const { quantity } = basketProduct;
  const images = basketProduct.variant?.images ? basketProduct.variant?.images : [];
  const imageUrl = image ? image.url : imageNotAvailable;
  const pricesObjUSD = prices ? prices.find((obj) => obj.country === COUNTRY) : null;
  const maxQuantity = basketProduct.variant?.availability?.availableQuantity
    ? basketProduct.variant.availability.availableQuantity
    : 0;

  const { price, discountedPrice, discount } = getProductPrices(pricesObjUSD);

  return { id, lineId, key, name, quantity, maxQuantity, price, discountedPrice, discount, imageUrl, images };
}
