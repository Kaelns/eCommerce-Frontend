import { useState, useEffect, useReducer, useContext } from 'react';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { useToken } from '@/services/hooks/useToken';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';
import { BasketState } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { postQuantity } from '@/pages/BasketPage/helpers/postQuantity';
import { basketReducer } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer';
import { calculatePrice } from '@/pages/BasketPage/helpers/calculatePrice';
import { useDebounceCash } from '@/hooks/useDebounceCash/useDebounceCash';
import { AlertTextContext } from '@/context/AlertTextContext/AlertTextContext';
import { IUseBasketReturn } from '@/pages/BasketPage/hooks/useBasket/useBasket.interface';
import { calculateQuantity } from '@/pages/BasketPage/helpers/calculateAmount';
import { convertToBasketProducts } from '@/pages/BasketPage/helpers/convertToBasketProducts';
import { setPrevBasketOnError } from '@/pages/BasketPage/helpers/setPrevBasketOnError';

export function useBasket(): IUseBasketReturn {
  const token = useToken();
  const { handleOpenAlert } = useContext(AlertTextContext);
  const { data = INIT_BASKET, isLoading, error } = useFetch(fetchBasket, token);
  const { basket } = data;
  const [basketProducts, dispatchBasketProducts] = useReducer(basketReducer, {});
  const [basketProd, prevBasketProd] = useDebounceCash(basketProducts, token);
  const [finalPrice, setFinalPrice] = useState(0);
  const [prodAmount, setProdAmount] = useState(0);

  useEffect(() => {
    setFinalPrice(calculatePrice(basketProducts));
    setProdAmount(calculateQuantity(basketProducts));
  }, [basketProducts]);

  useEffect(() => {
    const postOrRevertOnError = async (): Promise<void> => {
      const errorMessage = await postQuantity(prevBasketProd, basketProd, token);
      if (errorMessage) {
        setPrevBasketOnError(handleOpenAlert, dispatchBasketProducts, errorMessage, prevBasketProd);
      }
    };
    postOrRevertOnError();
  }, [prevBasketProd, basketProd, handleOpenAlert, token]);

  useEffect(() => {
    dispatchBasketProducts({
      type: BasketState.SET_BASKET,
      payload: { id: '', value: convertToBasketProducts(basket) }
    });
  }, [basket]);

  return {
    isLoading: !token ? true : isLoading,
    error,
    finalPrice,
    prodAmount,
    basketProducts,
    dispatchBasketProducts
  };
}
