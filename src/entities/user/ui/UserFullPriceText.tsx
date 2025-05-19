import type { PropsWithChildren } from 'react';
import type { FullPriceTextProps } from '@/shared/ui/components/typography/FullPriceText';

import { selectCurrency } from '@/entities/user/model/user.slice';

import { FullPriceText } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';
import { isoCurrencies } from '@/shared/model/data';

export function UserFullPriceText({ children, ...props }: PropsWithChildren<Omit<FullPriceTextProps, 'currencySymbol'>>) {
  const currency = useAppSelector(selectCurrency);
  const currencySymbol = isoCurrencies[currency].symbol;

  return (
    <FullPriceText currencySymbol={currencySymbol} {...props}>
      {children}
    </FullPriceText>
  );
}
