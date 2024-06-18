import { Price } from '@commercetools/platform-sdk';
import { IGetPricesReturn } from '@/hooks/useProduct/useProduct.interface';
import { FRACTION_DIGITS, FRACTION_DOZENS } from '@/services/ECommerceInitApi.constants';

// Todo: add decimals
const calculatePrice = (centAmount: number): number => +(centAmount / FRACTION_DOZENS).toFixed(FRACTION_DIGITS);

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
  const discount = centAmountDis ? Math.round(100 - (centAmountDis / centAmount) * 100) : 0;
  const discountedPrice = centAmountDis ? calculatePrice(centAmountDis) : 0;

  return {
    price,
    discount,
    discountedPrice
  };
}
