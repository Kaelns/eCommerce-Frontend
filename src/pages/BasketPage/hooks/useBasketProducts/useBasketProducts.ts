import { LineItem } from '@commercetools/platform-sdk';
import { IBasketProductReturn } from '@/pages/BasketPage/hooks/useBasketProducts/useBasketProducts.interface';
import { MOCK_BASKET_PRODUCT } from '@/pages/BasketPage/hooks/useBasketProducts/useBasketProduct.constants';
import { getPrices } from '@/hooks/useProduct/useProduct.helpers';
import { LANGUAGE, COUNTRY } from '@/services/ECommerceInitApi.constants';
import imageNotAvailable from '@/assets/image_not_available.png';

export function useBasketProducts(basketProduct: LineItem): IBasketProductReturn {
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

  const { price, discountedPrice, discount } = getPrices(pricesObjUSD);

  return { id, lineId, key, name, quantity, maxQuantity, price, discountedPrice, discount, imageUrl, images };
}
