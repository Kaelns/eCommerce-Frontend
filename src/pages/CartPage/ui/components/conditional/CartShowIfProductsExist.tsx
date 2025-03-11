import * as React from 'react';

import { selectCartProductQuantity } from '@/entities/cart';

import { ConditionalFade } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';

interface Props {
  Fallback: React.ReactElement;
}

export function CartShowIfProductsExist({ children, Fallback }: React.PropsWithChildren<Props>) {
  const productQuantity = useAppSelector(selectCartProductQuantity);
  return (
    <ConditionalFade isShow={!!productQuantity} Fallback={Fallback}>
      {children}
    </ConditionalFade>
  );
}
