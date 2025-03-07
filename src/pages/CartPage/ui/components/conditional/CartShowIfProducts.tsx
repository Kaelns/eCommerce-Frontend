import * as React from 'react';

import { selectCartProductQuantity } from '@/entities/cart';

import { ConditionalFade } from '@/shared/ui/components/conditional/ConditionalFade';

import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

interface Props {
  Fallback: React.ReactElement;
}

export function CartShowIfProducts({ children, Fallback }: React.PropsWithChildren<Props>) {
  const productQuantity = useAppSelector(selectCartProductQuantity);
  return (
    <ConditionalFade isShow={!!productQuantity} Fallback={Fallback}>
      {children}
    </ConditionalFade>
  );
}
