import { selectCartProductQuantity } from '@/entities/cart';

import { BoldTypography } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';

export function CartProductsFinalQuantity() {
  const productQuantity = useAppSelector(selectCartProductQuantity);

  return <BoldTypography variant="subtitle1">{productQuantity} products</BoldTypography>;
}
