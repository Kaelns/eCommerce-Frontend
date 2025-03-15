import { selectCartFinalPriceObj } from '@/entities/cart';
import { selectCountry, selectLanguage } from '@/entities/user';

import { FullPriceTypography } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';

export function CartProductsFinalPrice() {
  const language = useAppSelector(selectLanguage);
  const country = useAppSelector(selectCountry);

  const { finalPrice, finalPriceWithDiscount, percentageDiscount } = useAppSelector((state) =>
    selectCartFinalPriceObj(state, language, country)
  );

  return (
    <FullPriceTypography text="Result Price:" price={finalPrice} discount={percentageDiscount} discountedPrice={finalPriceWithDiscount} />
  );
}
