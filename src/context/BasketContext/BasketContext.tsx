import { createContext, PropsWithChildren, useState, useMemo, useCallback } from 'react';
import { IBasketContext } from '@/context/BasketContext/BasketContext.interface';
import { INITIAL_BASKET_CONTEXT } from '@/context/BasketContext/BasketContext.constants';

export const BasketContext = createContext<IBasketContext>(INITIAL_BASKET_CONTEXT);

export function BasketContextProvider({ children }: PropsWithChildren): React.ReactNode {
  const [basketState, setBasketState] = useState(false);

  const toggleBasketState = useCallback(() => {
    setBasketState((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      basketState,
      toggleBasketState
    }),
    [basketState, toggleBasketState]
  );

  return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>;
}
