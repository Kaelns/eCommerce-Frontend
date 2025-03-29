import type { CartLightAllProducts } from '@/entities/cart/model/types/cart.types';

import { round } from 'lodash';

interface FinalPriceObject {
  finalPrice: number;
  percentageDiscount: number;
  finalPriceWithDiscount: number;
}

export function calculateFinalCartPrice(products: CartLightAllProducts, country: string): FinalPriceObject {
  const productsArr = Object.values(products);

  if (!productsArr.length) {
    return { finalPrice: 0, finalPriceWithDiscount: 0, percentageDiscount: 0 };
  }

  const fractionDigits = productsArr[0].pricesObj[country].fractionDigits;

  const finalPriceObject = productsArr.reduce<FinalPriceObject>(
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
