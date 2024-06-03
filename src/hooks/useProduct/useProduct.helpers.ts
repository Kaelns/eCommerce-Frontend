import { Price } from '@commercetools/platform-sdk';
import { IGetPricesReturn } from '@/hooks/useProduct/useProduct.interface';

const calculatePrice = (centAmount: number, fractionDigits: number): number => centAmount / (fractionDigits * 10);

export function getPrices(priceObj: Price | null | undefined): IGetPricesReturn {
  if (!priceObj) {
    return {
      price: 0,
      discount: 0,
      discounted: 0
    };
  }

  const { value, discounted: discountedObj } = priceObj;

  const { centAmount, fractionDigits } = value;
  const { centAmount: centAmountDis, fractionDigits: fractionDigitsDis } = discountedObj
    ? discountedObj.value
    : { centAmount: 0, fractionDigits: 0 };

  const price = calculatePrice(centAmount, fractionDigits);
  const discounted = centAmountDis && fractionDigitsDis ? calculatePrice(centAmountDis, fractionDigitsDis) : 0;
  const discount = centAmountDis ? 100 - (centAmountDis / centAmount) * 100 : 0;

  return {
    price,
    discounted,
    discount
  };
}
