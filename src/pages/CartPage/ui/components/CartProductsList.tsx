import { Stack } from '@mui/system';

import { CartProductCard, selectCartProductsIds } from '@/entities/cart';

import { useAppSelector } from '@/shared/lib/redux';

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
