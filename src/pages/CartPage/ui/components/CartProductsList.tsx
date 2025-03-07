import { Stack } from '@mui/system';

import { selectCartProductsIds } from '@/entities/cart';
import { CartProductCard } from '@/entities/cart/ui/CartProductCard/CartProductCard';

import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

export function CartProductsList() {
  const productsIds = useAppSelector(selectCartProductsIds);

  return (
    <Stack alignItems={{ zero: 'center', tablet: 'initial' }} gap={2} mb={2}>
      {productsIds.map((productId) => (
        <CartProductCard key={productId} productId={productId} />
      ))}
    </Stack>
  );
}
