import type { PropsWithChildren } from 'react';
import type { PriceTextProps } from '@/shared/ui/elements/typography/PriceText';

import { selectCurrency } from '@/entities/user/model/user.slice';

import { PriceText } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';
import { isoCurrencies } from '@/shared/model/data';

export function UserPriceText({ children, ...props }: PropsWithChildren<Omit<PriceTextProps, 'currencySymbol'>>) {
  const currency = useAppSelector(selectCurrency);
  const currencySymbol = isoCurrencies[currency].symbol;

  return (
    <PriceText currencySymbol={currencySymbol} {...props}>
      {children}
    </PriceText>
  );
}
