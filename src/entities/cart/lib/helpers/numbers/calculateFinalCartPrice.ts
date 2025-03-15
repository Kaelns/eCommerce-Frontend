import type { CartLightAllProducts } from '@/entities/cart/model/types/cart.types';

import { round } from 'lodash';

interface FinalPriceObject {
  finalPrice: number;
  percentageDiscount: number;
  finalPriceWithDiscount: number;
}

export function calculateFinalCartPrice(products: CartLightAllProducts, language: string, country: string): FinalPriceObject {
  const fractionDigits = products[0].pricesObj[language].fractionDigits;

  const finalPriceObject = Object.values(products).reduce<FinalPriceObject>(
    (acc, productData) => {
      const { price, discountedPrice } = productData.pricesObj[country];

      acc.finalPrice += price * productData.quantity;
      acc.finalPriceWithDiscount += (discountedPrice || price) * productData.quantity;

      return acc;
    },
    { finalPrice: 0, finalPriceWithDiscount: 0, percentageDiscount: 0 }
  );

  finalPriceObject.finalPrice = round(finalPriceObject.finalPrice, fractionDigits);
  finalPriceObject.finalPriceWithDiscount = round(finalPriceObject.finalPriceWithDiscount, fractionDigits);

  finalPriceObject.percentageDiscount = round(
    ((finalPriceObject.finalPrice - finalPriceObject.finalPriceWithDiscount) / finalPriceObject.finalPrice) * 100,
    fractionDigits
  );

  return finalPriceObject;
}
