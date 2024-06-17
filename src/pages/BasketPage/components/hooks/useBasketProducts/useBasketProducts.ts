import { LineItem } from '@commercetools/platform-sdk';
import { IBasketProduct } from '@/pages/BasketPage/components/hooks/useBasketProducts/useBasketProducts.interface';
import { MOCK_BASKET_PRODUCT } from '@/pages/BasketPage/components/hooks/useBasketProducts/useBasketProduct.constants';
import { getPrices } from '@/hooks/useProduct/useProduct.helpers';
import { LANGUAGE, COUNTRY } from '@/services/ECommerceInitApi.constants';
import imageNotAvailable from '@/assets/image_not_available.png';

export function useBasketProducts(basketProduct: LineItem): IBasketProduct {
  if (!basketProduct) {
    return MOCK_BASKET_PRODUCT;
  }

  const [id, key, name] = [basketProduct.id, basketProduct.key!, basketProduct.name[LANGUAGE]];
  const [image, prices] = [basketProduct.variant?.images?.[0], basketProduct.variant.prices];

  const { quantity } = basketProduct;
  const images = basketProduct.variant?.images ? basketProduct.variant?.images : [];
  const imageUrl = image ? image.url : imageNotAvailable;
  const pricesObjUSD = prices ? prices.find((obj) => obj.country === COUNTRY) : null;

  const { price, discountedPrice, discount } = getPrices(pricesObjUSD);

  return { id, key, name, quantity, price, discountedPrice, discount, imageUrl, images };
}
