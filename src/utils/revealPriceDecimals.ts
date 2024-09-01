export function revealPriceDecimals(integerPrice: number, fractionDigits: number): number {
  return +(integerPrice / 10 ** fractionDigits).toFixed(fractionDigits);
}
