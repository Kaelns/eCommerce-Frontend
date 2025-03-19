import { selectCountry } from '@/entities/user';
import { selectCartFinalPriceObj } from '@/entities/cart';

import { FullPriceTypography } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';

export function CartProductsFinalPrice() {
  const country = useAppSelector(selectCountry);

  const { finalPrice, finalPriceWithDiscount, percentageDiscount } = useAppSelector((state) => selectCartFinalPriceObj(state, country));

  return (
    <FullPriceTypography text="Result Price:" price={finalPrice} discount={percentageDiscount} discountedPrice={finalPriceWithDiscount} />
  );
}
