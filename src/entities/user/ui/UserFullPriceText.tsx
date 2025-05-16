import type { PropsWithChildren } from 'react';
import type { FullPriceTextProps } from '@/shared/ui/components/typography/FullPriceText';

import { selectCurrency } from '@/entities/user/model/user.slice';

import { FullPriceText } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';

export function UserFullPriceText({ children, ...props }: PropsWithChildren<Omit<FullPriceTextProps, 'currency'>>) {
  const currency = useAppSelector(selectCurrency);

  return (
    <FullPriceText currency={currency} {...props}>
      {children}
    </FullPriceText>
  );
}
