import { selectCartProductQuantity } from '@/entities/cart';

import { BoldTypography } from '@/shared/ui/elements';
import { useAppSelector } from '@/shared/lib/redux';

export function CartProductsFinalQuantity() {
  const productQuantity = useAppSelector(selectCartProductQuantity);

  return <BoldTypography variant="h3">{productQuantity} products</BoldTypography>;
}
