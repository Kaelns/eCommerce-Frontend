import { useState, useEffect, useReducer, useContext, useCallback } from 'react';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { useToken } from '@/services/hooks/useToken';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';
import { BasketState } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';
import { postQuantity } from '@/pages/BasketPage/helpers/postQuantity';
import { basketReducer } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer';
import { calculatePrice } from '@/pages/BasketPage/helpers/calculatePrice';
import { useDebounceCash } from '@/hooks/useDebounceCash/useDebounceCash';
import { IUseBasketReturn } from '@/pages/BasketPage/hooks/useBasket/useBasket.interface';
import { calculateQuantity } from '@/pages/BasketPage/helpers/calculateAmount';
import { setPrevBasketOnError } from '@/pages/BasketPage/helpers/setPrevBasketOnError';
import { convertToBasketProducts } from '@/pages/BasketPage/helpers/convertToBasketProducts';
import { deleteCartCatch } from '@/services/helpers/cartHelpers/deleteCartCatch/deleteCartCatch';
import { BasketContext } from '@/context/BasketContext/BasketContext';
import { useAlertText } from '@/components/AlertText/useAlertText';
import { Severity } from '@/components/AlertText/AlertText.interface';

export function useBasket(): IUseBasketReturn {
  const token = useToken();
  const { toggleBasketState } = useContext(BasketContext);
  const [basketState, setBasketState] = useState({ isPromocode: false, isDelete: false });
  const { data = INIT_BASKET, isLoading, error } = useFetch(fetchBasket, token, basketState);
  const { basket, discount, isDiscounted } = data;
  const [basketProducts, dispatchBasketProducts] = useReducer(basketReducer, {});
  const [basketProd, prevBasketProd] = useDebounceCash(basketProducts, `${token}${basketState.isDelete}`);
  const [finalPrice, setFinalPrice] = useState(0);
  const [prodAmount, setProdAmount] = useState(0);

  const { showAlert } = useAlertText();

  useEffect(() => {
    setFinalPrice(calculatePrice(basketProducts));
    setProdAmount(calculateQuantity(basketProducts));
  }, [basketProducts]);

  useEffect(() => {
    const postOrRevertOnError = async (): Promise<void> => {
      const errorMessage = await postQuantity(prevBasketProd, basketProd, token);
      if (errorMessage) {
        setPrevBasketOnError(showAlert, dispatchBasketProducts, errorMessage, prevBasketProd);
      } else {
        toggleBasketState();
      }
    };
    postOrRevertOnError();
  }, [prevBasketProd, basketProd, showAlert, token, toggleBasketState]);

  useEffect(() => {
    dispatchBasketProducts({
      type: BasketState.SET_BASKET,
      payload: { id: '', value: convertToBasketProducts(basket) }
    });
  }, [basket]);

  const handlePromocode = useCallback((isSet: boolean) => {
    setBasketState((prev) => ({ ...prev, isPromocode: isSet }));
  }, []);

  const handleDelete = useCallback(async () => {
    const { error: deleteError } = await deleteCartCatch(token);
    if (deleteError) {
      showAlert(deleteError, Severity.ERROR);
    } else {
      showAlert('The cart was successfully cleared', Severity.SUCCESS);
      setBasketState((prev) => ({ ...prev, isDelete: !prev.isDelete }));
    }
  }, [showAlert, token]);

  return {
    isLoading: !token ? true : isLoading,
    error,
    discount,
    finalPrice,
    prodAmount,
    isDiscounted,
    handleDelete,
    handlePromocode,
    basketProducts,
    dispatchBasketProducts
  };
}
