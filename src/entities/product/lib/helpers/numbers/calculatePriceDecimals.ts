import { round } from 'lodash';

export function calculatePriceDecimals(integerPrice: number, fractionDigits: number): number {
  return round(integerPrice / 10 ** fractionDigits, fractionDigits);
}
