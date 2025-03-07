import { selectLanguage } from '@/entities/user';
import { selectCartFinalPriceObj } from '@/entities/cart';

import { FullPriceTypography } from '@/shared/ui/components/typography/FullPriceTypography';

import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

export function CartProductsFinalPrice() {
  const language = useAppSelector(selectLanguage);
  const { finalPrice, finalPriceWithDiscount, percentageDiscount } = useAppSelector((state) => selectCartFinalPriceObj(state, language));

  return (
    <FullPriceTypography text="Result Price:" price={finalPrice} discount={percentageDiscount} discountedPrice={finalPriceWithDiscount} />
  );
}
