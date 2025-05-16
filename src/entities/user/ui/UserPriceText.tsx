import type { PropsWithChildren } from 'react';
import type { PriceTextProps } from '@/shared/ui/elements/typography/PriceText';

import { selectCurrency } from '@/entities/user/model/user.slice';

import { PriceText } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';

export function UserPriceText({ children, ...props }: PropsWithChildren<Omit<PriceTextProps, 'currency'>>) {
  const currency = useAppSelector(selectCurrency);

  return (
    <PriceText currency={currency} {...props}>
      {children}
    </PriceText>
  );
}
