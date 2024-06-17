import { useState, useEffect, useReducer } from 'react';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { calculatePrice } from '@/pages/BasketPage/helpers/calculatePrice';
import { convertToBasketProducts } from '@/pages/BasketPage/helpers/convertToBasketProducts';
import { IUseBasketReturn } from '@/pages/BasketPage/components/hooks/useBasket/useBasket.interface';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';
import { basketReducer } from '@/pages/BasketPage/components/hooks/useBasketReducer/useBasketReducer';
import { useDebounceCash } from '@/hooks/useDebounceCash/useDebounceCash';

export function useBasket(): IUseBasketReturn {
  // Todo: check authorized
  const { data = INIT_BASKET, isLoading, error } = useFetch(fetchBasket);
  const { basket, amount } = data;
  const [basketProducts, dispatchBasketProducts] = useReducer(basketReducer, convertToBasketProducts(basket));
  const [basketProd, prevBasketProd] = useDebounceCash(basketProducts);
  // useEffect(() => setFinalPrice(calculatePrice(basketProductsDebounce)), [basketProductsDebounce]);
  const [finalPrice, setFinalPrice] = useState(calculatePrice(basketProducts));

  useEffect(() => setFinalPrice(calculatePrice(basketProd)), [basketProd]);

  return { isLoading, error, amount, basketProducts, dispatchBasketProducts, finalPrice, setFinalPrice };
}
