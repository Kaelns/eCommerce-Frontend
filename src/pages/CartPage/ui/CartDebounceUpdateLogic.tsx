import { memo, useEffect } from 'react';

import { updateCartRevertOnError } from '@/pages/CartPage/lib/thunks/updateCartRevertOnError';

import { selectCartProducts } from '@/entities/cart';

import { useDebounceValueCache } from '@/shared/lib/hooks';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

export const CartDebounceUpdateLogic = memo(function CartDebounceLogic() {
  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(selectCartProducts);
  const [prevCartProducts, newCartProducts] = useDebounceValueCache(cartProducts);

  useEffect(() => {
    dispatch(updateCartRevertOnError(prevCartProducts, newCartProducts));
  }, [prevCartProducts, newCartProducts, dispatch]);

  return null;
});
