import { Stack } from '@mui/system';

import { CartProductCard } from '@/pages/CartPage/ui/widgets/CartProductCard/CartProductCard';

import { selectCartProductsIds } from '@/entities/cart';

import { useAppSelector } from '@/shared/lib/redux';

export function CartProductsList() {
  const productsIds = useAppSelector(selectCartProductsIds);

  return (
    <Stack width={1} gap={2}>
      {productsIds.map((productId) => (
        <CartProductCard key={productId} productId={productId} />
      ))}
    </Stack>
  );
}
