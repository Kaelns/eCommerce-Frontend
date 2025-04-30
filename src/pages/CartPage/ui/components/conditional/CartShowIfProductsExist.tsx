import type { Theme, SxProps } from '@mui/system';

import * as React from 'react';

import { selectCartProductQuantity } from '@/entities/cart';

import { ConditionalFade } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';

interface Props {
  sxChildren?: SxProps<Theme>;
  Fallback: React.ReactElement;
}

export function CartShowIfProductsExist({ children, Fallback, sxChildren }: React.PropsWithChildren<Props>) {
  const productQuantity = useAppSelector(selectCartProductQuantity);
  return (
    <ConditionalFade isShow={!!productQuantity} Fallback={Fallback} sxChildren={sxChildren}>
      {children}
    </ConditionalFade>
  );
}
