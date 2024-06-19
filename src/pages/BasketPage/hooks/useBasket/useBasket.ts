import { useState, useEffect, useReducer, useContext } from 'react';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { calculatePrice } from '@/pages/BasketPage/helpers/calculatePrice';
import { convertToBasketProducts } from '@/pages/BasketPage/helpers/convertToBasketProducts';
import { IUseBasketReturn } from '@/pages/BasketPage/hooks/useBasket/useBasket.interface';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';
import { basketReducer } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer';
import { useDebounceCash } from '@/hooks/useDebounceCash/useDebounceCash';
import { BasketState } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { postQuantity } from '@/pages/BasketPage/helpers/postQuantity';
import { AlertTextContext } from '@/context/AlertTextContext/AlertTextContext';
import { Severity } from '@/components/AlertText/AlertText.interface';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { calculateQuantity } from '@/pages/BasketPage/helpers/calculateAmount';

export function useBasket(): IUseBasketReturn {
  const { authUserToken } = useAuthContext();
  const { handleOpenAlert } = useContext(AlertTextContext);

  const { data = INIT_BASKET, isLoading, error } = useFetch(fetchBasket, authUserToken);
  const { basket } = data;
  const [basketProducts, dispatchBasketProducts] = useReducer(basketReducer, {});
  const [basketProd, prevBasketProd] = useDebounceCash(basketProducts);
  const [finalPrice, setFinalPrice] = useState(0);
  const [prodAmount, setProdAmount] = useState(0);

  useEffect(() => {
    setFinalPrice(calculatePrice(basketProducts));
    setProdAmount(calculateQuantity(basketProducts));
  }, [basketProducts]);

  useEffect(() => {
    const postOrRevertOnError = async (): Promise<void> => {
      const errorMessage = await postQuantity(prevBasketProd, basketProd);
      if (errorMessage) {
        handleOpenAlert(errorMessage, Severity.ERROR);
        dispatchBasketProducts({
          type: BasketState.SET_BASKET,
          payload: { id: '', value: prevBasketProd }
        });
      }
    };
    postOrRevertOnError();
  }, [prevBasketProd, basketProd, handleOpenAlert]);

  useEffect(() => {
    dispatchBasketProducts({
      type: BasketState.SET_BASKET,
      payload: { id: '', value: convertToBasketProducts(basket) }
    });
  }, [basket]);

  return { isLoading, error, prodAmount, basketProducts, dispatchBasketProducts, finalPrice };
}
