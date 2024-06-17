import { useState, useEffect, useCallback } from 'react';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { calculatePrice } from '@/pages/BasketPage/helpers/calculatePrice';
import { convertToBasketProducts } from '@/pages/BasketPage/helpers/convertToBasketProducts';
import { EMPTY_DATA_PRODUCTS } from '@/services/data/productsResponce/productsResponce.constants';
import { IUseBasketReturn } from '@/pages/BasketPage/components/hooks/useBasket/useBasket.interface';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';

export function useBasket(): IUseBasketReturn {
  const { data, isLoading, error } = useFetch(fetchBasket);
  const { products, amount } = data ?? EMPTY_DATA_PRODUCTS;
  const [basketProducts, setBasketProducts] = useState(convertToBasketProducts(products));
  const [finalPrice, setFinalPrice] = useState(calculatePrice(basketProducts));

  useEffect(() => setFinalPrice(calculatePrice(basketProducts)), [basketProducts]);

  // const setQuantity = useCallback(
  //   (id: string, quantity: number) => {
  //     if (basketProducts.id) {
  //       setBasketProducts({
  //         ...basketProducts,
  //         [id]: {
  //           ...basketProducts[id],
  //           quantity
  //         }
  //       });
  //     }
  //   },
  //   [basketProducts]
  // );

  return { isLoading, error, amount, basketProducts, setBasketProducts, finalPrice, setFinalPrice };
}
