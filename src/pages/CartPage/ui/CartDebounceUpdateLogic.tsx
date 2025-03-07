import { memo, useEffect } from 'react';

import { selectCartProducts, selectCartProductsIds, useUpdateCartMutation } from '@/entities/cart';

import { useAppSelector } from '@/shared/lib/redux/redux.hooks';
import { useDebounceValueCache } from '@/shared/lib/hooks/useDebounceValueCache';

export const CartDebounceUpdateLogic = memo(function CartDebounceLogic() {
  const cartProducts = useAppSelector(selectCartProducts);
  const cartProductsIds = useAppSelector(selectCartProductsIds);
  const [prevCartProducts, newCartProducts] = useDebounceValueCache(cartProducts);

  const [updateCartProducts] = useUpdateCartMutation();

  useEffect(() => {
    // if (prevCartProducts !== newCartProducts) {
    // }
  }, [prevCartProducts, newCartProducts]);

  return null;
});

// useEffect(() => {
//   const postOrRevertOnError = async (): Promise<void> => {
//     const errorMessage = await postQuantity(prevBasketProd, cartProductsCopy, isLogged);
//     if (errorMessage) {
//       setPrevBasketOnError(showAlert, dispatchCartProducts, errorMessage, prevBasketProd);
//     }
//   };
//   postOrRevertOnError();
// }, [prevBasketProd, cartProductsCopy, showAlert, isLogged]);
