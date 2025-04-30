function calculateDiscountPercent(priceDiscounted: number, discountInMoney: number): number {
  const priceWithoutDiscount = priceDiscounted + discountInMoney;
  const discount = (discountInMoney / priceWithoutDiscount) * 100;
  return Math.round(discount);
}
