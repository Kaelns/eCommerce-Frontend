import { Price } from '@commercetools/platform-sdk';
import { IGetPricesReturn } from '@/hooks/useProduct/useProduct.interface';
import { FRACTION_DIGITS } from '@/services/ECommerceInitApi.constants';

const calculatePrice = (centAmount: number): number => centAmount / FRACTION_DIGITS;

export function getPrices(priceObj: Price | null | undefined): IGetPricesReturn {
  if (!priceObj) {
    return {
      price: 0,
      discount: 0,
      discountedPrice: 0
    };
  }

  const { value, discounted: discountedObj } = priceObj;

  const { centAmount } = value;
  const { centAmount: centAmountDis } = discountedObj ? discountedObj.value : { centAmount: 0 };

  const price = calculatePrice(centAmount);
  const discountedPrice = centAmountDis ? calculatePrice(centAmountDis) : 0;
  const discount = centAmountDis ? Math.round(100 - (centAmountDis / centAmount) * 100) : 0;

  return {
    price,
    discount,
    discountedPrice
  };
}
